import{useCallback as e,useEffect as t,useMemo as n,useLayoutEffect as o,useState as r,useRef as s}from"react";import{nanoid as c}from"nanoid";import{throttle as i}from"throttle-debounce";import{useRouter as u}from"next/router";import{useSpring as d,useTransform as a,useMotionValue as l,useMotionTemplate as m,animate as h}from"framer-motion";import{singletonHook as w}from"react-singleton-hook";import*as g from"matter-js";import f from"paper";function v(n,o){const r=e(e=>{n.current&&!n.current.contains(e.target)&&o()},[n,o]);t(()=>(document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}),[r])}const p=()=>n(()=>"undefined"!=typeof window&&(window.location.href.includes("#debug")||"development"===process.env.NODE_ENV||process.env.NEXT_PUBLIC_DEBUG_MODE||process.env.NEXT_PUBLIC_DEBUG),[]),E="undefined"!=typeof window,y=(e,t,n,o,r)=>(e-t)*(r-o)/(n-t)+o,L=(e,t,n)=>(1-n)*e+n*t,b=E?o:t,I="undefined"!=typeof window?function(){const[e,t]=r(document.readyState);return b(()=>{function e(){t(document.readyState)}return t(document.readyState),document.addEventListener("readystatechange",e,!1),()=>document.removeEventListener("readystatechange",e,!1)},[]),e}:()=>{};let x=[];const O=e=>{let{type:t}=e;"string"==typeof e&&(t=e);const n=[];n.push("string"==typeof e?{type:t}:e),x.forEach(([e,o])=>{"string"==typeof e&&e!==t||("function"!=typeof e||e(...n))&&o(...n)})},C=(e,n,o=[])=>(t(()=>((e,t)=>{if(null!=e&&null!=t)return x=[...x,[e,t]],()=>{x=x.filter(e=>e[1]!==t)}})(e,n),[...o,n,e]),O);function P(){return n(()=>c(),[])}const S=(e,n)=>{const o=s();t(()=>{o.current=e}),t(()=>{if(null!==n){const e=setInterval(function(){o.current()},n);return()=>clearInterval(e)}},[n])},M=()=>{const[t,n]=r(void 0),o=e(()=>{n("ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)},[]);return b(()=>(o(),window.addEventListener("resize",o,!1),()=>{window.removeEventListener("resize",o,!1)}),[]),t},k=({root:n=null,rootMargin:o="0px",threshold:c=1,once:i=!1}={})=>{const u=s(),d=s(),[a,l]=r(!1),m=e(e=>{const[t]=e;l(t.isIntersecting)},[]);return t(()=>(u.current=new IntersectionObserver(m,{root:n,rootMargin:o,threshold:c}),d.current&&u.current.observe(d.current),()=>{u.current.disconnect()}),[m]),t(()=>{i&&a&&u.current.disconnect()},[a]),{setRef:e=>{d.current||(d.current=e)},inView:a}},_=t=>{const[n,o]=r(void 0),s=e(e=>{o(e.matches)},[]);return b(()=>{const e=window.matchMedia(t);return s(e),e.addEventListener("change",s),()=>{e.removeEventListener("change",s)}}),n};function R(){return R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},R.apply(this,arguments)}function T(e,t=0){const n=t+e.offsetTop;return e.offsetParent?T(e.offsetParent,n):n}function z(e,t=0){const n=t+e.offsetLeft;return e.offsetParent?z(e.offsetParent,n):n}function A({debounce:e=1e3}={}){const t=s(),[n,o]=r({top:void 0,left:void 0,width:void 0,height:void 0}),c=()=>{t.current&&o(e=>R({},e,{top:T(t.current),left:z(t.current)}))};b(()=>{const t=i(e,c),n=new ResizeObserver(t);return n.observe(document.body),()=>{n.disconnect(),t.cancel({upcomingOnly:!0})}},[e]);const u=([e])=>{const{width:t,height:n}=e.contentRect;o(e=>R({},e,{width:t,height:n}))},d=s();return[e=>{var n;e&&e!==t.current&&(null==(n=d.current)||n.disconnect(),d.current=new ResizeObserver(u),d.current.observe(e),t.current=e)},n,(e=0,t=0)=>n]}const Y=(e=[],t=[])=>{const o=n(()=>t&&[t].flat(),[t]),r=n(()=>e&&[e].flat(),[e]),s=n(()=>o&&r&&r.map(e=>{var t;return null==(t=o.find(t=>t.type===e))?void 0:t.props.children}),[o,r]);return e[0]?s:s[0]},B=()=>{const[t,n]=r(),o=e(()=>{n({width:window.innerWidth,height:window.innerHeight})},[]);return b(()=>(window.addEventListener("resize",o),o(),()=>window.removeEventListener("resize",o)),[]),t},D=(t=(()=>{}),n=(()=>{}))=>{const[o,s]=r(!0),c=e(()=>{t(),s(!0)},[t]),i=e(()=>{n(),s(!1)},[n]);return b(()=>(window.addEventListener("focus",c),window.addEventListener("blur",i),()=>{window.removeEventListener("focus",c),window.removeEventListener("blur",i)}),[]),{focused:o}},$=e=>{const t=u(),{asPath:n}=t;b(()=>{if(t.isReady&&e){const e=(e=>e.split("#")[1])(n);if(e)try{t.push({pathname:"/",hash:e})}catch(e){console.log("Error pushing route",e)}else window.scrollTo(0,0)}},[e])},j=(e,t,n)=>d(a(e,n),t);function K(e,t){const n=e-window.innerWidth;return t>n?n:0>t?0:t}function N(e){const[n,o]=r(0);return t(()=>{var t;let n,r=null==e||null==(t=e.current)?void 0:t.scrollWidth;if(!r)return;function s(){var t;r=null==e||null==(t=e.current)?void 0:t.scrollWidth,o(0)}function c({deltaY:e}){o(t=>K(r,t+e))}function u({touches:e}){n=e[0].clientY}function d(){n=0}const a=i(function({touches:e}){const t=Math.round(e[0].clientY-n);o(e=>K(r,e-t))},16);return document.addEventListener("wheel",c),document.addEventListener("touchmove",a),document.addEventListener("touchstart",u),document.addEventListener("touchend",d),window.addEventListener("resize",s),()=>{document.removeEventListener("wheel",c),document.removeEventListener("touchmove",a),document.removeEventListener("touchstart",u),document.removeEventListener("touchend",d),window.removeEventListener("resize",s)}},[e,o]),n}function W(){const[e,n]=r({x:null,y:null});return t(()=>{const e=e=>{const{clientX:t,clientY:o}=e;n({x:t,y:o})};return document.addEventListener("mousemove",e),()=>{document.removeEventListener("mousemove",e)}},[]),e}const G=()=>{const{width:e,height:t}=B(),{x:n,y:o}=W();return{direction:n>e/2&&o>t/2?"se":n<e/2&&o>t/2?"sw":n>e/2&&o<t/2?"ne":"nw",hasMovedCursor:"number"==typeof n&&"number"==typeof o}},U=(e,n)=>{const{x:o,y:r}=W(),s=l(0),c=l(0),i=l(0),u=l(0),d=l(0),a=l(0),w=m(`translate(${s.get()}px, ${i.get()}px) rotate(${d.get()}deg)`),g=`brightness(${a.get()})`;return t(()=>{const t=e.current.getBoundingClientRect(),c=n.current.getBoundingClientRect(),u=Math.abs(o-t.left)-c.width/2,d=Math.abs(r-t.top)-c.height/2;s.set(u),i.set(d)},[o,r]),t(()=>{function e(){const e={x:c.get()-s.get(),y:u.get()-i.get()};c.set(L(c.get(),s.getPrevious(),.08)),u.set(L(u.get(),i.getPrevious(),.08));const t=(n=Math.abs(e.x))<=0?0:n>=100?100:n;var n;const o=y(t,0,100,0,e.x<0?33:-33);h(d,o,{duration:.25,ease:"linear"});const r=y(t,0,100,1,3);a.set(r)}const t=s.onChange(e),n=i.onChange(e);return()=>{t(),n()}},[]),{transform:w,filter:g}},X=(e,t)=>a(e,[0,1],[-t,t]),F=w(!1,(e=940)=>{const[n,o]=r(!1);return t(()=>{function t(){var t=window.innerWidth;o(t<e)}return window.addEventListener("resize",t),t(),()=>window.removeEventListener("resize",t)},[]),n}),H=()=>{const t=e(()=>{"undefined"!=typeof window&&(localStorage.getItem("theme")?"light"===localStorage.getItem("theme")?(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light")):document.documentElement.classList.contains("dark")?(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light")):(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")))},[]),n=e(()=>"undefined"!=typeof window?localStorage.getItem("theme"):null,[]);return b(()=>{localStorage.getItem("theme")&&("light"===localStorage.getItem("theme")?document.documentElement.classList.remove("dark"):document.documentElement.classList.add("dark"))},[t]),{toggle:t,getTheme:n}},V=(e,n=[0],o=null)=>{const[s,c]=r(!1),i=d(0,{damping:400,friction:100});return t(()=>{const t=new IntersectionObserver(([e])=>{e.isIntersecting?(c(!0),i.set(e.intersectionRatio)):c(!1)},{root:o,rootMargin:"0px 0px 0px 0px",threshold:n});return t.observe(e.current),()=>t.disconnect()},[e,n,o,i]),{inView:s,springValue:i}},q=()=>(b(()=>{var e="font-size:15px;";console.log("%cFOMOLOL Police 🚨","color:red; font-size:65px; font-weight:bold; -webkit-text-stroke: 1px black"),console.log("%cThis is a browser feature intended for developers. If someone told you to copy-paste something here, it is a scam and could give them access to your wallet.",e),console.log("%cIf you need a job see https://jobs.fomolol.com for more info.",e)},[]),null),J=({cookieAcceptKey:e})=>{const[t,n]=r();return b(()=>{const t=window.localStorage.getItem(process.env.NEXT_PUBLIC_COOKIE_ACCEPT_KEY||e);n(null!==t)},[]),t},Q=n=>{const[o,s]=r(!1),c=e(()=>{o||s((e=>{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);const n=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);t.select();const o=document.execCommand("copy");return document.body.removeChild(t),n&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(n)),o})(n))},[n]);return t(()=>()=>s(!1),[n]),[o,c]},Z=(e="pokemon")=>{const[t,n]=r(null),[o,s]=r(!1);return useEffect(()=>{if(e&&!t&&!o)try{s(!0),require("giphy-api")(process.env.GIPHY_API_KEY||process.env.NEXT_PUBLIC_GIPHY_API_KEY).search(e,(e,t)=>{if(200===t.meta.status){const e=Math.floor(Math.random()*(t.data.length-1)+1),o=t.data[e];if(o&&o.images){console.log("randomGif",o);const{images:e}=o,{webp:t}=null==e?void 0:e.fixed_width;n({data:o,url:t}),s(!1)}}else s(!1),console.error(t.meta.msg,e)})}catch(e){s(!1),console.error("Error occurred initializing Giphy API",e)}},[t,o,e]),[o,t]},ee=(e="header-not-at-top",t="#top-of-site-pixel-anchor")=>{const n=()=>{document.documentElement.dataset.scroll=window.scrollY};document.addEventListener("scroll",(e=>{let t;return(...n)=>{t&&cancelAnimationFrame(t),t=requestAnimationFrame(()=>{e(...n)})}})(n),{passive:!0}),n(),"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&new IntersectionObserver(t=>{t[0].boundingClientRect.y<0?document.body.classList.add(e):document.body.classList.remove(e)}).observe(document.querySelector(t))},te=({title:t="",width:n=500,height:o=1050,url:r,storageKey:c="FOMOLOL_TEMP_DATA",onCreate:i=(e=>console.log("Created a window with url",e)),onData:u=(e=>console.log("data",e)),onClose:d=(()=>{}),onError:a=(e=>console.log("Popup error",error))})=>{const l=s(),m=s(),h=e(()=>{try{const t=localStorage.getItem(c);if(t){var e;const n=JSON.parse(t);u(n),window.localStorage.removeItem(c),null==(e=l.current)||e.close(),window.removeEventListener("storage",h)}}catch(e){a(e),window.removeEventListener("storage",h)}},[u,a,c,l]),w=e(({url:e,title:t,height:n,width:o,onClose:r})=>{var s;const c=`width=${o},height=${n},left=${window.screenX+(window.outerWidth-o)/2},top=${window.screenY+(window.outerHeight-n)/2.5}`;null===l.current||null!=(s=l.current)&&s.closed?l.current=window.open(e,t,c):m.current!==e?(l.current=window.open(e,t,c),l.current.focus()):l.current.focus(),window.addEventListener("storage",h),window.addEventListener("beforeunload",()=>{r()},!1),m.current=e,i(e)},[l,h]);return{onClick:e(()=>{w({url:r,title:t,width:n,height:o,onData:u,onClose:d,onError:a,storageKey:c})},[w,r,t,n,o,u,d,a,c])}},ne=({ref:e,width:t,height:o,wireframes:r=!1,hasBounds:s=!0,background:c="transparent"})=>n(()=>{g.use("matter-attractors"),g.use("matter-wrap");const n=g.Engine.create(),{world:i,timing:u}=n;u.timeScale=1.5;const d=g.Render.create({element:e.current,engine:n,options:{hasBounds:s,wireframes:r,width:t,height:o,background:c}}),{canvas:a}=d;g.Render.run(d);const l=g.Runner.create();g.Runner.run(l,n);const m=g.Mouse.create(a),h=g.MouseConstraint.create(n,{mouse:m,constraint:{stiffness:.2,render:{visible:!1}}});return g.World.add(i,h),d.mouse=m,g.Render.lookAt(d,{min:{x:0,y:0},max:{x:t,y:o}}),h.mouse.element.removeEventListener("mousewheel",h.mouse.mousewheel),h.mouse.element.removeEventListener("DOMMouseScroll",h.mouse.mousewheel),{loaded:!0,engine:n,render:d,runner:l,mouse:m}},[e,c,r,s,o,t]),oe=({ref:e})=>{const[t,n]=r();return b(()=>{if(!t&&e&&e.current){const t=new f.Project(e.current);n(t)}},[t,e]),t},re=(e,n)=>{const o=s();t(()=>{o.current=e},[e]),t(()=>{if(null!==n){const e=setTimeout(function(){o.current()},1e3*n);return()=>clearTimeout(e)}},[n])};export{O as dispatch,Q as useClipboard,J as useCookieBanner,q as useCustomConsole,p as useDebug,I as useDocumentReadyState,C as useEventBus,D as useFocus,Z as useGiphy,$ as useHashScroll,N as useHorizontalScroll,U as useHoverImage,P as useId,V as useIntersectionObserver,S as useInterval,F as useIsMobile,M as useIsTouchDevice,k as useIsVisible,b as useLayoutEffect,ne as useMatterJS,_ as useMediaQuery,G as useMouseDirection,W as useMousePosition,v as useOutsideClickEvent,oe as usePaperJS,X as useParallax,te as usePopup,A as useRect,Y as useSlots,j as useSmoothTransform,ee as useSticky,H as useTheme,re as useTimeout,B as useWindowSize};
//# sourceMappingURL=index.modern.mjs.map
