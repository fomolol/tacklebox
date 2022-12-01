import{useCallback as e,useEffect as t,useMemo as n,useLayoutEffect as o,useState as r,useRef as s,useReducer as c}from"react";import{nanoid as i}from"nanoid";import{throttle as u}from"throttle-debounce";import{useSpring as a,useTransform as l,useMotionValue as d,useMotionTemplate as m,animate as v}from"framer-motion";import{singletonHook as h}from"react-singleton-hook";function g(n,o){const r=e(e=>{n.current&&!n.current.contains(e.target)&&o()},[n,o]);t(()=>(document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}),[r])}const w=()=>n(()=>"undefined"!=typeof window&&(window.location.href.includes("#debug")||"development"===process.env.NODE_ENV||process.env.NEXT_PUBLIC_DEBUG_MODE||process.env.NEXT_PUBLIC_DEBUG),[]),f="undefined"!=typeof window,p=(e,t,n,o,r)=>(e-t)*(r-o)/(n-t)+o,y=(e,t,n)=>(1-n)*e+n*t,E=f?o:t,b="undefined"!=typeof window?function(){const[e,t]=r(document.readyState);return E(()=>{function e(){t(document.readyState)}return t(document.readyState),document.addEventListener("readystatechange",e,!1),()=>document.removeEventListener("readystatechange",e,!1)},[]),e}:()=>{};let O=[];const L=e=>{let{type:t}=e;"string"==typeof e&&(t=e);const n=[];n.push("string"==typeof e?{type:t}:e),O.forEach(([e,o])=>{"string"==typeof e&&e!==t||("function"!=typeof e||e(...n))&&o(...n)})},S=(e,n,o=[])=>(t(()=>((e,t)=>{if(null!=e&&null!=t)return O=[...O,[e,t]],()=>{O=O.filter(e=>e[1]!==t)}})(e,n),[...o,n,e]),L);function x(e,n,o,r){const c=s(o),i=s(r);t(()=>{c.current=o,i.current=r}),t(()=>{const t=e&&"current"in e?e.current:e;if(!t)return;let o=0;function r(...e){o||c.current.apply(this,e)}t.addEventListener(n,r);const s=i.current;return()=>{o=1,t.removeEventListener(n,r),s&&s()}},[e,n])}const C=(e,n,o=window)=>{const r=s();t(()=>{r.current=n},[n]),t(()=>{if(!o||!o.addEventListener)return;const t=e=>r.current(e);return o.addEventListener(e,t),()=>{o.removeEventListener(e,t)}},[e,o])};function R(){return n(()=>i(),[])}const I=(e,n)=>{const o=s();t(()=>{o.current=e}),t(()=>{if(null!==n){const e=setInterval(function(){o.current()},n);return()=>clearInterval(e)}},[n])},j=()=>{const[t,n]=r(void 0),o=e(()=>{n("ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)},[]);return E(()=>(o(),window.addEventListener("resize",o,!1),()=>{window.removeEventListener("resize",o,!1)}),[]),t},M=({root:n=null,rootMargin:o="0px",threshold:c=1,once:i=!1}={})=>{const u=s(),a=s(),[l,d]=r(!1),m=e(e=>{const[t]=e;d(t.isIntersecting)},[]);return t(()=>(u.current=new IntersectionObserver(m,{root:n,rootMargin:o,threshold:c}),a.current&&u.current.observe(a.current),()=>{u.current.disconnect()}),[m]),t(()=>{i&&l&&u.current.disconnect()},[l]),{setRef:e=>{a.current||(a.current=e)},inView:l}},_=t=>{const[n,o]=r(void 0),s=e(e=>{o(e.matches)},[]);return E(()=>{const e=window.matchMedia(t);return s(e),e.addEventListener("change",s),()=>{e.removeEventListener("change",s)}}),n},P=(e,t)=>{"function"==typeof e?e(t):e&&(e.current=t)},T=(e,t)=>n(()=>null==e&&null==t?null:n=>{P(e,n),P(t,n)},[e,t]);function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},D.apply(this,arguments)}function Y(e,t=0){const n=t+e.offsetTop;return e.offsetParent?Y(e.offsetParent,n):n}function k(e,t=0){const n=t+e.offsetLeft;return e.offsetParent?k(e.offsetParent,n):n}function A({debounce:e=1e3}={}){const t=s(),[n,o]=r({top:void 0,left:void 0,width:void 0,height:void 0}),c=()=>{t.current&&o(e=>D({},e,{top:Y(t.current),left:k(t.current)}))};E(()=>{const t=u(e,c),n=new ResizeObserver(t);return n.observe(document.body),()=>{n.disconnect(),t.cancel({upcomingOnly:!0})}},[e]);const i=([e])=>{const{width:t,height:n}=e.contentRect;o(e=>D({},e,{width:t,height:n}))},a=s();return[e=>{var n;e&&e!==t.current&&(null==(n=a.current)||n.disconnect(),a.current=new ResizeObserver(i),a.current.observe(e),t.current=e)},n,(e=0,t=0)=>n]}const X=(e=[],t=[])=>{const o=n(()=>t&&[t].flat(),[t]),r=n(()=>e&&[e].flat(),[e]),s=n(()=>o&&r&&r.map(e=>{var t;return null==(t=o.find(t=>t.type===e))?void 0:t.props.children}),[o,r]);return e[0]?s:s[0]},B=()=>{const[t,n]=r(),o=e(()=>{n({width:window.innerWidth,height:window.innerHeight})},[]);return E(()=>(window.addEventListener("resize",o),o(),()=>window.removeEventListener("resize",o)),[]),t},z=(t=(()=>{}),n=(()=>{}))=>{const[o,s]=r(!0),c=e(()=>{t(),s(!0)},[t]),i=e(()=>{n(),s(!1)},[n]);return E(()=>(window.addEventListener("focus",c),window.addEventListener("blur",i),()=>{window.removeEventListener("focus",c),window.removeEventListener("blur",i)}),[]),{focused:o}},U=e=>{const t=useRouter(),{asPath:n}=t;E(()=>{if(t.isReady&&e){const e=(e=>e.split("#")[1])(n);if(e)try{t.push({pathname:"/",hash:e})}catch(e){console.log("Error pushing route",e)}else window.scrollTo(0,0)}},[e])},W=(e,t,n)=>a(l(e,n),t);function K(e,t){const n=e-window.innerWidth;return t>n?n:0>t?0:t}function N(e){const[n,o]=r(0);return t(()=>{var t;let n,r=null==e||null==(t=e.current)?void 0:t.scrollWidth;if(!r)return;function s(){var t;r=null==e||null==(t=e.current)?void 0:t.scrollWidth,o(0)}function c({deltaY:e}){o(t=>K(r,t+e))}function i({touches:e}){n=e[0].clientY}function a(){n=0}const l=u(function({touches:e}){const t=Math.round(e[0].clientY-n);o(e=>K(r,e-t))},16);return document.addEventListener("wheel",c),document.addEventListener("touchmove",l),document.addEventListener("touchstart",i),document.addEventListener("touchend",a),window.addEventListener("resize",s),()=>{document.removeEventListener("wheel",c),document.removeEventListener("touchmove",l),document.removeEventListener("touchstart",i),document.removeEventListener("touchend",a),window.removeEventListener("resize",s)}},[e,o]),n}const $="undefined"!=typeof performance?performance:Date,F=()=>$.now();function G(n,o=30,r=!1){const c=(e=>{const n=s(e);return t(()=>{n.current=e}),n})(n),i=1e3/o,u=s(0),a=s(),l=()=>a.current&&clearTimeout(a.current),d=[o,r,c];return t(()=>()=>{u.current=0,l()},d),e(function(){const e=arguments,t=F(),n=()=>{u.current=t,l(),c.current.apply(null,e)},o=u.current;if(r&&0===o)return n();if(t-o>i){if(o>0)return n();u.current=t}l(),a.current=setTimeout(()=>{n(),u.current=0},i)},d)}function H(e,t,n){const o=useState(e);return[o[0],G(o[1],t,n)]}function q(e,t={}){const{fps:n=30,enterDelay:o=0,leaveDelay:r=0}=t,[s,i]=c((e,t)=>{const{mouse:n,context:o}=e,r=(e,t)=>{if("undefined"==typeof window)return e;const{event:n,element:o}=t;let r;r="touches"in n?n.touches[0]:n;const{clientX:s,clientY:c,screenX:i,screenY:u,pageX:a=0,pageY:l=0}=r,d=o.getBoundingClientRect(),m=a-d.left-(window.pageXOffset||window.scrollX),v=l-d.top-(window.pageYOffset||window.scrollY);return"touches"in n&&(m<0||v<0||m>d.width||v>d.height)?Object.assign(Object.assign({},e),{context:Object.assign(Object.assign({},e.context),{hoverStatus:"leave",touchStatus:"end"})}):{context:Object.assign(Object.assign({},e.context),{hoverStatus:"enter"}),mouse:Object.assign(Object.assign({},e.mouse),{x:m,y:v,pageX:a,pageY:l,clientX:s,clientY:c,screenX:i,screenY:u,elementWidth:d.width,elementHeight:d.height,isOver:!0,isTouch:"touches"in n})}};return"mousemove"===t.type?"end"===o.touchStatus?e:r(e,t):"touchmove"===t.type?r({context:Object.assign(Object.assign({},o),{touchStatus:"start"}),mouse:n},t):"touchdown"===t.type?r({context:Object.assign(Object.assign({},o),{touchStatus:"start"}),mouse:Object.assign(Object.assign({},n),{isDown:!0})},t):"mousedown"===t.type?{context:o,mouse:Object.assign(Object.assign({},n),{isDown:!0})}:"mouseup"===t.type?{context:o,mouse:Object.assign(Object.assign({},n),{isDown:!1})}:"mouseleave"===t.type?{context:Object.assign(Object.assign({},o),{hoverStatus:"leave"}),mouse:Object.assign(Object.assign({},n),{isOver:!1})}:"touchleave"===t.type?{context:Object.assign(Object.assign({},o),{hoverStatus:"leave",touchStatus:"end"}),mouse:Object.assign(Object.assign({},n),{isOver:!1,isDown:!1})}:"activeStatus"===t.type?{context:Object.assign(Object.assign({},o),{activeStatus:t.value}),mouse:n}:e},{mouse:V,context:J}),u=H(t=>{const n=e&&"current"in e?e.current:e;n&&i({type:"mousemove",event:t,element:n})},n,!0),a=H(t=>{const n=e&&"current"in e?e.current:e;n&&i({type:"touchmove",event:t,element:n})},n,!0),l=H(()=>i({type:"mouseleave"}),n,!1),d=H(t=>{const n=e&&"current"in e?e.current:e;n&&i("touches"in t?{type:"touchdown",element:n,event:t}:{type:"mousedown",element:n,event:t})},n,!0),m=H(()=>i({type:"mouseup"}),n,!1),v=H(()=>i({type:"touchleave"}),n,!1);return x(e,"mouseenter",u),x(e,"mousemove",u),x(e,"mouseleave",l),x(e,"mousedown",d),x("undefined"!=typeof window?window:null,"mousedown",d),x("undefined"!=typeof window?window:null,"mouseup",m),x(e,"touchstart",d),x(e,"touchmove",a),x(e,"touchend",v),x(e,"touchcancel",v),useEffect(()=>{if("enter"===s.context.hoverStatus){if(o){const e=setTimeout(()=>i({type:"activeStatus",value:"active"}),o);return()=>clearTimeout(e)}i({type:"activeStatus",value:"active"})}else{if(r){const e=setTimeout(()=>i({type:"activeStatus",value:"inactive"}),r);return()=>clearTimeout(e)}i({type:"activeStatus",value:"inactive"})}},[s.context.hoverStatus,o,r]),"active"===s.context.activeStatus?s.mouse:V}const V={x:null,y:null,pageX:null,pageY:null,clientX:null,clientY:null,screenX:null,screenY:null,elementWidth:null,elementHeight:null,isOver:!1,isDown:!1,isTouch:!1},J={hoverStatus:"idle",touchStatus:"idle",activeStatus:"inactive"};function Q(){const[e,n]=r({x:null,y:null});return t(()=>{const e=e=>{const{clientX:t,clientY:o}=e;n({x:t,y:o})};return document.addEventListener("mousemove",e),()=>{document.removeEventListener("mousemove",e)}},[]),e}const Z=()=>{const{width:e,height:t}=B(),{x:n,y:o}=Q();return{direction:n>e/2&&o>t/2?"se":n<e/2&&o>t/2?"sw":n>e/2&&o<t/2?"ne":"nw",hasMovedCursor:"number"==typeof n&&"number"==typeof o}},ee=(e,n)=>{const{x:o,y:r}=Q(),s=d(0),c=d(0),i=d(0),u=d(0),a=d(0),l=d(0),h=m(`translate(${s.get()}px, ${i.get()}px) rotate(${a.get()}deg)`),g=`brightness(${l.get()})`;return t(()=>{const t=e.current.getBoundingClientRect(),c=n.current.getBoundingClientRect(),u=Math.abs(o-t.left)-c.width/2,a=Math.abs(r-t.top)-c.height/2;s.set(u),i.set(a)},[o,r]),t(()=>{function e(){const e={x:c.get()-s.get(),y:u.get()-i.get()};c.set(y(c.get(),s.getPrevious(),.08)),u.set(y(u.get(),i.getPrevious(),.08));const t=(n=Math.abs(e.x))<=0?0:n>=100?100:n;var n;const o=p(t,0,100,0,e.x<0?33:-33);v(a,o,{duration:.25,ease:"linear"});const r=p(t,0,100,1,3);l.set(r)}const t=s.onChange(e),n=i.onChange(e);return()=>{t(),n()}},[]),{transform:h,filter:g}},te=(e,t)=>l(e,[0,1],[-t,t]),ne=h(!1,(e=940)=>{const[n,o]=r(!1);return t(()=>{function t(){var t=window.innerWidth;o(t<e)}return window.addEventListener("resize",t),t(),()=>window.removeEventListener("resize",t)},[]),n}),oe=()=>{const t=e(()=>{"undefined"!=typeof window&&(localStorage.getItem("theme")?"light"===localStorage.getItem("theme")?(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light")):document.documentElement.classList.contains("dark")?(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light")):(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")))},[]),n=e(()=>"undefined"!=typeof window?localStorage.getItem("theme"):null,[]);return E(()=>{localStorage.getItem("theme")&&("light"===localStorage.getItem("theme")?document.documentElement.classList.remove("dark"):document.documentElement.classList.add("dark"))},[t]),{toggle:t,getTheme:n}},re=(e,n=[0],o=null)=>{const[s,c]=r(!1),i=a(0,{damping:400,friction:100});return t(()=>{const t=new IntersectionObserver(([e])=>{e.isIntersecting?(c(!0),i.set(e.intersectionRatio)):c(!1)},{root:o,rootMargin:"0px 0px 0px 0px",threshold:n});return t.observe(e.current),()=>t.disconnect()},[e,n,o,i]),{inView:s,springValue:i}},se=()=>(E(()=>{var e="font-size:15px;";console.log("%cFOMOLOL Police 🚨","color:red; font-size:65px; font-weight:bold; -webkit-text-stroke: 1px black"),console.log("%cThis is a browser feature intended for developers. If someone told you to copy-paste something here, it is a scam and could give them access to your wallet.",e),console.log("%cIf you need a job see https://jobs.fomolol.com for more info.",e)},[]),null),ce=({cookieAcceptKey:e,onAccepted:t,onDeclined:n})=>{const[o,s]=r();return E(()=>{null!==window.localStorage.getItem(process.env.NEXT_PUBLIC_COOKIE_ACCEPT_KEY||e)?(s(!0),t()):(s(!1),n())},[]),o},ie=n=>{const[o,s]=r(!1),c=e(()=>{o||s((e=>{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);const n=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);t.select();const o=document.execCommand("copy");return document.body.removeChild(t),n&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(n)),o})(n))},[n]);return t(()=>()=>s(!1),[n]),[o,c]},ue=(e="header-not-at-top",t="#top-of-site-pixel-anchor")=>{const n=()=>{document.documentElement.dataset.scroll=window.scrollY};document.addEventListener("scroll",(e=>{let t;return(...n)=>{t&&cancelAnimationFrame(t),t=requestAnimationFrame(()=>{e(...n)})}})(n),{passive:!0}),n(),"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&new IntersectionObserver(t=>{t[0].boundingClientRect.y<0?document.body.classList.add(e):document.body.classList.remove(e)}).observe(document.querySelector(t))};function ae(){const[e,n]=r(!1),o=s(null),c=()=>{window.scrollY>o.current.getBoundingClientRect().bottom?n(!0):n(!1)},i=(e,t=20,n=!0)=>{let o;return()=>{let r=this,s=arguments;const c=n&&!o;clearTimeout(o),o=setTimeout(()=>{o=null,n||e.apply(r,s)},t),c&&e.apply(r,s)}};return t(()=>(window.addEventListener("scroll",i(c)),()=>{window.removeEventListener("scroll",()=>c)}),[i,c]),{isSticky:e,ref:o}}const le=({title:t="",width:n=500,height:o=1050,url:r,storageKey:c="FOMOLOL_TEMP_DATA",onCreate:i=(e=>console.log("Created a window with url",e)),onData:u=(e=>console.log("data",e)),onClose:a=(()=>{}),onError:l=(e=>console.log("Popup error",error))})=>{const d=s(),m=s(),v=e(()=>{try{const t=localStorage.getItem(c);if(t){var e;const n=JSON.parse(t);u(n),window.localStorage.removeItem(c),null==(e=d.current)||e.close(),window.removeEventListener("storage",v)}}catch(e){l(e),window.removeEventListener("storage",v)}},[u,l,c,d]),h=e(({url:e,title:t,height:n,width:o,onClose:r})=>{var s;const c=`width=${o},height=${n},left=${window.screenX+(window.outerWidth-o)/2},top=${window.screenY+(window.outerHeight-n)/2.5}`;null===d.current||null!=(s=d.current)&&s.closed?d.current=window.open(e,t,c):m.current!==e?(d.current=window.open(e,t,c),d.current.focus()):d.current.focus(),window.addEventListener("storage",v),window.addEventListener("beforeunload",()=>{r()},!1),m.current=e,i(e)},[d,v]);return{onClick:e(()=>{h({url:r,title:t,width:n,height:o,onData:u,onClose:a,onError:l,storageKey:c})},[h,r,t,n,o,u,a,l,c])}},de=(e,n)=>{const o=s();t(()=>{o.current=e},[e]),t(()=>{if(null!==n){const e=setTimeout(function(){o.current()},1e3*n);return()=>clearTimeout(e)}},[n])},me=(e,n="2d")=>{const o=s(null);return t(()=>{const t=o.current.getContext(n);let r=requestAnimationFrame(function n(){r=requestAnimationFrame(n),e(t)});return()=>cancelAnimationFrame(r)},[e,n]),o},ve=(t,n)=>{const o=e(()=>{n({type:"ADD_CURSOR_BORDER"})},[n]),r=e(()=>{n({type:"REMOVE_CURSOR_BORDER"})},[n]);return D({},t,{addCursorColor:e(e=>{n({type:"ADD_CURSOR_COLOR",payload:e})},[n]),resetCursorColor:e(()=>{n({type:"RESET_CURSOR_COLOR"})},[n]),addCursorBorder:o,removeCursorBorder:r,lockCursorPosition:e(e=>{n({type:"LOCK_CURSOR_POSITION",payload:e})},[n])})},he=({ref:e})=>{const[t,n]=r();return E(()=>{if(!t&&e&&e.current){const t=new Paper.Project(e.current);n(t)}},[t,e]),t},ge=({ref:e,width:t,height:o,wireframes:r=!1,hasBounds:s=!0,background:c="transparent"})=>n(()=>{Matter.use("matter-attractors"),Matter.use("matter-wrap");const n=Matter.Engine.create(),{world:i,timing:u}=n;u.timeScale=1.5;const a=Matter.Render.create({element:e.current,engine:n,options:{hasBounds:s,wireframes:r,width:t,height:o,background:c}}),{canvas:l}=a;Matter.Render.run(a);const d=Matter.Runner.create();Matter.Runner.run(d,n);const m=Matter.Mouse.create(l),v=Matter.MouseConstraint.create(n,{mouse:m,constraint:{stiffness:.2,render:{visible:!1}}});return Matter.World.add(i,v),a.mouse=m,Matter.Render.lookAt(a,{min:{x:0,y:0},max:{x:t,y:o}}),v.mouse.element.removeEventListener("mousewheel",v.mouse.mousewheel),v.mouse.element.removeEventListener("DOMMouseScroll",v.mouse.mousewheel),{loaded:!0,engine:n,render:a,runner:d,mouse:m}},[e,c,r,s,o,t]),we=(e="pokemon")=>{const[t,n]=r(null),[o,s]=r(!1);return useEffect(()=>{if(e&&!t&&!o)try{s(!0),require("giphy-api")(process.env.GIPHY_API_KEY||process.env.NEXT_PUBLIC_GIPHY_API_KEY).search(e,(e,t)=>{if(200===t.meta.status){const e=Math.floor(Math.random()*(t.data.length-1)+1),o=t.data[e];if(o&&o.images){console.log("randomGif",o);const{images:e}=o,{webp:t}=null==e?void 0:e.fixed_width;n({data:o,url:t}),s(!1)}}else s(!1),console.error(t.meta.msg,e)})}catch(e){s(!1),console.error("Error occurred initializing Giphy API",e)}},[t,o,e]),[o,t]};export{L as dispatch,me as useCanvas,ie as useClipboard,ce as useCookieBanner,ve as useCursorStyle,se as useCustomConsole,w as useDebug,b as useDocumentReadyState,x as useEvent,S as useEventBus,C as useEventListener,z as useFocus,T as useForkRef,we as useGiphy,U as useHashScroll,N as useHorizontalScroll,ee as useHoverImage,R as useId,re as useIntersectionObserver,I as useInterval,ne as useIsMobile,j as useIsTouchDevice,M as useIsVisible,E as useLayoutEffect,ge as useMatterJS,_ as useMediaQuery,q as useMouse,Z as useMouseDirection,Q as useMousePosition,g as useOutsideClickEvent,he as usePaperJS,te as useParallax,le as usePopup,A as useRect,X as useSlots,W as useSmoothTransform,ue as useSticky,ae as useStickyHeader,oe as useTheme,de as useTimeout,B as useWindowSize};
//# sourceMappingURL=index.modern.mjs.map
