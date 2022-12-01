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

`useClipboard` – copies things to the clipboard (so the user can paste with haste)

`useCookieBanner` – tackles some cookie banner related saving to local storage

`useCustomConsole` – you can now make the console (via inspector) say what you want

<!-- `useDebounce` – debounce goodness -->

`useDebug` – returns true if #debug is present in the url

<!-- `useEffectOnce` – runs a function through react's useEffect with an empty dependency array -->

`useId` – more coming soon

`useInterval` – create and dispose intervals

`useDocumentReadyState` – more coming soon

`useEventBus` – more coming soon

`useFocus` – focus state

`useGiphy` – now you can add giphys anywhere. NOTE: You need to sign up for the api and add the env var GIPHY_API_KEY to your env vars. See https://developers.giphy.com/ and https://www.npmjs.com/package/giphy-api for more.

`useIsTouchDevice` – duh

`useIsVisible` – duh

`useHorizontalScroll` – duh

`useHoverImage` – now you can make those [sexy hover images](https://tympanus.net/codrops/2020/07/01/creating-a-menu-image-animation-on-hover/) like a pro.

`useIsomophicLayoutEffect` – runs react's `useLayoutEffect` if in browser, if not, runs a plain `useEffect` instead

`useIntersectionObserver` – spring-based intersection action

`useIntersectionObserver` – spring-based intersection action

`useMatterJS` – if you decide you want to use [Matter.js](https://brm.io/matter-js/) in React

`useMediaQuery` – css-like media query support in Javascript.

`useMousePosition` – handles collecting the mouse position

`useMouseDirection` – handles finding the direction the mouse moved

<!-- `useMeasure` – measure anything in the dom -->

`useHashScroll` – when using smooth scrolling, the hash in the url can cause issues. Load this up to solve those.

`useParallax` – cool parallax movement

`usePopup` – Window popups are a pain in the arse in React, so this hook makes them easier to deal with.

`usePaperJS` – if you decide you want to use [Paper.js](http://paperjs.org/) in React

<!-- `useRafState` – modify state in sync with `@react-spring/rafz` -->

`useRect` – shorthand version of getboundingclientrect

`useSmoothTransform` – shorthand to make a transform that uses spring dynamics

`useSlots` – brings vue `slots` to react

`useSticky` – making those sticky headers easier to manage

`useTheme` – this helps when you have a dark/light mode responsive site

<!-- `useTimeoutFn` – timeout a function -->

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
