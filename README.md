[![TackleBox](https://i.ibb.co/zRyNfTW/tacklebox.png)](https://github.com/fomolol/tacklebox)

<!-- <p align="center">
  <a aria-label="Vercel logo" href="https://vercel.com">
    <img src="https://badgen.net/badge/icon/Next?icon=zeit&label&color=black&labelColor=black">
  </a>
  <br/>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/swr">
    <img alt="" src="https://badgen.net/npm/v/swr?color=black&labelColor=black">
  </a>
  <a aria-label="Package size" href="https://bundlephobia.com/result?p=swr">
    <img alt="" src="https://badgen.net/bundlephobia/minzip/swr?color=black&labelColor=black">
  </a>
  <a aria-label="License" href="https://github.com/vercel/swr/blob/main/LICENSE">
    <img alt="" src="https://badgen.net/npm/license/swr?color=black&labelColor=black">
  </a>
</p> -->

## Introduction

The Tackle Box holds the hooks, you do the math

<br/>

## Setup

```bash
$ npm i @fomolol/tacklebox
```

or use whatever package manager you like the most

<br/>

## Features

This toolkit is composed of:

`useDebounce` – debounce goodness

`useDebug` – returns true if #debug is present in the url

`useEffectOnce` – runs a function through react's useEffect with an empty dependency array

`useInterval` – create and dispose intervals

`useIsTouchDevice` – duh

`useIsomophicLayoutEffect` – runs react's `useLayoutEffect` if in browser, if not, runs a plain `useEffect` instead

`useMeasure` – measure anything in the dom

`useMediaQuery` – css-like media query support in Javascript.

`useRafState` – modify state in sync with `@react-spring/rafz`

`useRect` – getboundingclientrect with scrollY sauce if using our [lenis](https://github.com/studio-freight/lenis) smooth scroll

`useSlots` – brings vue `slots` to react

`useTimeoutFn` – timeout a function

`useUnmount` – calls `unmount` callbacks.

`useWindowSize` – window sizing updated in sync with `@react-spring/rafz`

<br/>

## Authors

This set of hooks is curated and maintained by the FOMOLOL Classified team:

- Scott Shin ([@shinmc\_](https://twitter.com/shinmc_)) – [FOMOLOL](https://www.fomolol.com)
- Rob Sawyer ([@robksawyer\_](https://twitter.com/robksawyer)) – [FOMOLOL](https://www.fomolol.com)

This project template and some of the hooks were borrowed from the amazing work of Studio Freight:

- Clement Roche ([@clementroche\_](https://twitter.com/clementroche_)) – [Studio Freight](https://studiofreight.com)
- Guido Fier ([@uido15](https://twitter.com/uido15)) – [Studio Freight](https://studiofreight.com)
- Leandro Soengas ([@lsoengas](https://twitter.com/lsoengas)) - [Studio Freight](https://studiofreight.com)
- Franco Arza ([@arzafran](https://twitter.com/arzafran)) - [Studio Freight](https://studiofreight.com)

<br/>

## License

[The MIT License.](https://opensource.org/licenses/MIT)
