# The background task `#[idle]`

A function marked with the `idle` attribute can optionally appear in the
module. This function is used as the special *idle task* and must have
signature `fn(idle::Context) - > !`.

When present, the runtime will execute the `idle` task after `init`. Unlike
`init`, `idle` will run *with interrupts enabled* and it's not allowed to return
so it must run forever.

When no `idle` function is declared, the runtime sets the [SLEEPONEXIT] bit and
then sends the microcontroller to sleep after running `init`.

[SLEEPONEXIT]: https://developer.arm.com/docs/100737/0100/power-management/sleep-mode/sleep-on-exit-bit

Like in `init`, `static mut` variables will be transformed into `&'static mut`
references that are safe to access. Notice, this feature may be deprecated in the next release, see `task_local` resources.

The example below shows that `idle` runs after `init`.

**Note:** The `loop {}` in idle cannot be empty as this will crash the microcontroller due to
LLVM compiling empty loops to an `UDF` instruction in release mode. To avoid UB, the loop needs to imply a "side-effect" by inserting an assembly instruction (e.g., `WFI`) or a `continue`.

``` rust
{{#include ../../../../examples/idle.rs}}
```

``` console
$ cargo run --example idle
{{#include ../../../../ci/expected/idle.run}}
```
