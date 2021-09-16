# The `#[app]` attribute and an RTIC application

## Requirements on the `app` attribute

All RTIC applications use the [`app`] attribute (`#[app(..)]`). This attribute
must be applied to a `mod`-item and this is where the RTIC application is written. The `app`
attribute has a mandatory `device`
argument that takes a *path* as a value. This must be a full path pointing to a
*peripheral access crate* (PAC) generated using [`svd2rust`] **v0.14.x** or
newer. More details can be found in the [Starting a new project](./new.md)
section.

The `app` attribute will expand into a suitable entry point so it's not required
to use the [`cortex_m_rt::entry`] attribute.

[`app`]: ../../../api/cortex_m_rtic_macros/attr.app.html
[`svd2rust`]: https://crates.io/crates/svd2rust
[`cortex_m_rt::entry`]: ../../../api/cortex_m_rt_macros/attr.entry.html

## An RTIC application example

When working with RTIC the following example contains a lot of the commonly used features of RTIC,
and in the following sections we will go through each feature in detail.

``` rust
{{#include ../../../../examples/common.rs}}
```

