# Task priorities

## Priorities

The static priority of each handler can be declared in the `task` attribute
using the `priority` argument. Tasks can have priorities in the range `1..=(1 <<
NVIC_PRIO_BITS)` where `NVIC_PRIO_BITS` is a constant defined in the `device`
crate. When the `priority` argument is omitted, the priority is assumed to be
`1`. The `idle` task has a non-configurable static priority of `0`, the lowest priority.

> A higher number means a higher priority in RTIC, which is the opposite from what
> Cortex-M does in the NVIC peripheral.
> Explicitly, this means that number `10` has a **higher** priority than number `9`.

When several tasks are ready to be executed the one with highest static
priority will be executed first. Task prioritization can be observed in the
following scenario: an interrupt signal arrives during the execution of a low
priority task; the signal puts the higher priority task in the pending state.
The difference in priority results in the higher priority task preempting the
lower priority one: the execution of the lower priority task is suspended and
the higher priority task is executed to completion. Once the higher priority
task has terminated the lower priority task is resumed.

The following example showcases the priority based scheduling of tasks.

``` rust
{{#include ../../../../examples/preempt.rs}}
```

``` console
$ cargo run --example preempt
{{#include ../../../../ci/expected/preempt.run}}
```

Note that the task `gpiob` does *not* preempt task `gpioc` because its priority
is the *same* as `gpioc`'s. However, once `gpioc` returns, the execution of
task `gpiob` is prioritized over `gpioa` due to its higher priority. `gpioa`
is resumed only after `gpiob` returns.

One more note about priorities: choosing a priority higher than what the device
supports (that is `1 << NVIC_PRIO_BITS`) will result in a compile error. Due to
limitations in the language, the error message is currently far from helpful: it
will say something along the lines of "evaluation of constant value failed" and
the span of the error will *not* point out to the problematic interrupt value --
we are sorry about this!
