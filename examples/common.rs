//! examples/common.rs

#![deny(unsafe_code)]
#![deny(warnings)]
#![no_main]
#![no_std]

use panic_semihosting as _;

#[rtic::app(device = lm3s6965, dispatchers = [SSI0, QEI0])]
mod app {
    use cortex_m_semihosting::hprintln;
    use dwt_systick_monotonic::DwtSystick; // Implements the `Monotonic` trait
    use rtic::time::duration::*; // Time helpers, such as `N.seconds()`

    const MONO_HZ: u32 = 8_000_000; // 8 MHz

    // A monotonic timer to enable scheduling in RTIC
    #[monotonic(binds = SysTick, default = true)]
    type MyMono = DwtSystick<MONO_HZ>;

    // Resources shared between tasks
    #[shared]
    struct Shared {
        s1: u32,
        s2: i32,
    }

    // Local resources to specific tasks (cannot be shared)
    #[local]
    struct Local {
        l1: u8,
        l2: i8,
    }

    #[init]
    fn init(cx: init::Context) -> (Shared, Local, init::Monotonics) {
        let mut dcb = cx.core.DCB;
        let dwt = cx.core.DWT;
        let systick = cx.core.SYST;
        let mono = DwtSystick::new(&mut dcb, dwt, systick, 8_000_000);

        // Spawn the task `foo` directly after `init` finishes
        foo::spawn().unwrap();

        // Spawn the task `bar` 1 second after `init` finishes, this is enabled
        // by the `#[monotonic(..)]` above
        bar::spawn_after(1.seconds()).unwrap();

        (
            // Initialization of shared resources
            Shared { s1: 0, s2: 1 },
            // Initialization of task local resources
            Local { l1: 2, l2: 3 },
            // Move the monotonic timer to the RTIC run-time, this enables
            // scheduling
            init::Monotonics(mono),
        )
    }

    // Background task, runs whenever no other tasks are running
    #[idle]
    fn idle(_: idle::Context) -> ! {
        loop {
            continue;
        }
    }

    // Software task, not bound to a hardware interrupt.
    // This task takes the task local resource `l1`
    // The resources `s1` and `s2` are shared between all other tasks.
    #[task(shared = [s1, s2], local = [l1])]
    fn foo(_: foo::Context) {
        // This task is only spawned once in `init`, hence this task will run
        // only once

        hprintln!("foo").ok();
    }

    // Software task, also not bound to a hardware interrupt
    // This task takes the task local resource `l2`
    // The resources `s1` and `s2` are shared between all other tasks.
    #[task(shared = [s1, s2], local = [l2])]
    fn bar(_: bar::Context) {
        hprintln!("bar").ok();

        // Run `bar` once per second
        bar::spawn_after(1.seconds()).unwrap();
    }

    // Hardware task, bound to a hardware interrupt
    // The resources `s1` and `s2` are shared between all other tasks.
    #[task(binds = UART0, priority = 3, shared = [s1, s2])]
    fn uart0_interrupt(_: uart0_interrupt::Context) {
        // This task is bound to the interrupt `UART0` and will run
        // whenever the interrupt fires

        // Note that RTIC does NOT clear the interrupt flag, this is up to the
        // user

        hprintln!("UART0 interrupt!").ok();
    }
}
