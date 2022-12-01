!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("nanoid"),require("throttle-debounce"),require("next/router"),require("framer-motion"),require("react-singleton-hook")):"function"==typeof define&&define.amd?define(["exports","react","nanoid","throttle-debounce","next/router","framer-motion","react-singleton-hook"],t):t((e||self).tacklebox={},e.react,e.nanoid,e.throttleDebounce,e.router,e.framerMotion,e.reactSingletonHook)}(this,function(e,t,n,o,r,u,i){var c="undefined"!=typeof window,s=function(e,t,n,o,r){return(e-t)*(r-o)/(n-t)+o},a=function(e,t,n){return(1-n)*e+n*t},f=c?t.useLayoutEffect:t.useEffect,l="undefined"!=typeof window?function(){var e=t.useState(document.readyState),n=e[0],o=e[1];return f(function(){function e(){o(document.readyState)}return o(document.readyState),document.addEventListener("readystatechange",e,!1),function(){return document.removeEventListener("readystatechange",e,!1)}},[]),n}:function(){},d=[],v=function(e){var t=e.type;"string"==typeof e&&(t=e);var n=[];n.push("string"==typeof e?{type:t}:e),d.forEach(function(e){var o=e[0],r=e[1];"string"==typeof o&&o!==t||("function"!=typeof o||o.apply(void 0,n))&&r.apply(void 0,n)})};function m(e,n,o,r){var u=t.useRef(o),i=t.useRef(r);t.useEffect(function(){u.current=o,i.current=r}),t.useEffect(function(){var t=e&&"current"in e?e.current:e;if(t){var o=0;t.addEventListener(n,c);var r=i.current;return function(){o=1,t.removeEventListener(n,c),r&&r()}}function c(){o||u.current.apply(this,[].slice.call(arguments))}},[e,n])}var h=function(e,t){"function"==typeof e?e(t):e&&(e.current=t)};function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},g.apply(this,arguments)}function w(e,t){void 0===t&&(t=0);var n=t+e.offsetTop;return e.offsetParent?w(e.offsetParent,n):n}function p(e,t){void 0===t&&(t=0);var n=t+e.offsetLeft;return e.offsetParent?p(e.offsetParent,n):n}var y=function(){var e=t.useState(),n=e[0],o=e[1],r=t.useCallback(function(){o({width:window.innerWidth,height:window.innerHeight})},[]);return f(function(){return window.addEventListener("resize",r),r(),function(){return window.removeEventListener("resize",r)}},[]),n};function b(e,t){var n=e-window.innerWidth;return t>n?n:0>t?0:t}var E="undefined"!=typeof performance?performance:Date,O=function(){return E.now()};function S(e,n,o){void 0===n&&(n=30),void 0===o&&(o=!1);var r,u,i=(u=t.useRef(r=e),t.useEffect(function(){u.current=r}),u),c=1e3/n,s=t.useRef(0),a=t.useRef(),f=function(){return a.current&&clearTimeout(a.current)},l=[n,o,i];return t.useEffect(function(){return function(){s.current=0,f()}},l),t.useCallback(function(){var e=arguments,t=O(),n=function(){s.current=t,f(),i.current.apply(null,e)},r=s.current;if(o&&0===r)return n();if(t-r>c){if(r>0)return n();s.current=t}f(),a.current=setTimeout(function(){n(),s.current=0},c)},l)}function C(e,t,n){var o=useState(e);return[o[0],S(o[1],t,n)]}var L={x:null,y:null,pageX:null,pageY:null,clientX:null,clientY:null,screenX:null,screenY:null,elementWidth:null,elementHeight:null,isOver:!1,isDown:!1,isTouch:!1},R={hoverStatus:"idle",touchStatus:"idle",activeStatus:"inactive"};function x(){var e=t.useState({x:null,y:null}),n=e[0],o=e[1];return t.useEffect(function(){var e=function(e){o({x:e.clientX,y:e.clientY})};return document.addEventListener("mousemove",e),function(){document.removeEventListener("mousemove",e)}},[]),n}var k=i.singletonHook(!1,function(e){void 0===e&&(e=940);var n=t.useState(!1),o=n[0],r=n[1];return t.useEffect(function(){function t(){var t=window.innerWidth;r(t<e)}return window.addEventListener("resize",t),t(),function(){return window.removeEventListener("resize",t)}},[]),o});e.dispatch=v,e.useCanvas=function(e,n){void 0===n&&(n="2d");var o=t.useRef(null);return t.useEffect(function(){var t=o.current.getContext(n),r=requestAnimationFrame(function n(){r=requestAnimationFrame(n),e(t)});return function(){return cancelAnimationFrame(r)}},[e,n]),o},e.useClipboard=function(e){var n=t.useState(!1),o=n[0],r=n[1],u=t.useCallback(function(){o||r(function(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);var n=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);t.select();var o=document.execCommand("copy");return document.body.removeChild(t),n&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(n)),o}(e))},[e]);return t.useEffect(function(){return function(){return r(!1)}},[e]),[o,u]},e.useCookieBanner=function(e){var n=e.cookieAcceptKey,o=e.onAccepted,r=e.onDeclined,u=t.useState(),i=u[0],c=u[1];return f(function(){null!==window.localStorage.getItem(process.env.NEXT_PUBLIC_COOKIE_ACCEPT_KEY||n)?(c(!0),o()):(c(!1),r())},[]),i},e.useCursorStyle=function(e,n){var o=t.useCallback(function(){n({type:"ADD_CURSOR_BORDER"})},[n]),r=t.useCallback(function(){n({type:"REMOVE_CURSOR_BORDER"})},[n]);return g({},e,{addCursorColor:t.useCallback(function(e){n({type:"ADD_CURSOR_COLOR",payload:e})},[n]),resetCursorColor:t.useCallback(function(){n({type:"RESET_CURSOR_COLOR"})},[n]),addCursorBorder:o,removeCursorBorder:r,lockCursorPosition:t.useCallback(function(e){n({type:"LOCK_CURSOR_POSITION",payload:e})},[n])})},e.useCustomConsole=function(){return f(function(){var e="font-size:15px;";console.log("%cFOMOLOL Police 🚨","color:red; font-size:65px; font-weight:bold; -webkit-text-stroke: 1px black"),console.log("%cThis is a browser feature intended for developers. If someone told you to copy-paste something here, it is a scam and could give them access to your wallet.",e),console.log("%cIf you need a job see https://jobs.fomolol.com for more info.",e)},[]),null},e.useDebug=function(){return t.useMemo(function(){return"undefined"!=typeof window&&(window.location.href.includes("#debug")||"development"===process.env.NODE_ENV||process.env.NEXT_PUBLIC_DEBUG_MODE||process.env.NEXT_PUBLIC_DEBUG)},[])},e.useDocumentReadyState=l,e.useEvent=m,e.useEventBus=function(e,n,o){return void 0===o&&(o=[]),t.useEffect(function(){return function(e,t){if(null!=e&&null!=t)return d=[].concat(d,[[e,t]]),function(){d=d.filter(function(e){return e[1]!==t})}}(e,n)},[].concat(o,[n,e])),v},e.useEventListener=function(e,n,o){void 0===o&&(o=window);var r=t.useRef();t.useEffect(function(){r.current=n},[n]),t.useEffect(function(){if(o&&o.addEventListener){var t=function(e){return r.current(e)};return o.addEventListener(e,t),function(){o.removeEventListener(e,t)}}},[e,o])},e.useFocus=function(e,n){void 0===e&&(e=function(){}),void 0===n&&(n=function(){});var o=t.useState(!0),r=o[0],u=o[1],i=t.useCallback(function(){e(),u(!0)},[e]),c=t.useCallback(function(){n(),u(!1)},[n]);return f(function(){return window.addEventListener("focus",i),window.addEventListener("blur",c),function(){window.removeEventListener("focus",i),window.removeEventListener("blur",c)}},[]),{focused:r}},e.useForkRef=function(e,n){return t.useMemo(function(){return null==e&&null==n?null:function(t){h(e,t),h(n,t)}},[e,n])},e.useHashScroll=function(e){var t=r.useRouter(),n=t.asPath;f(function(){if(t.isReady&&e){var o=function(e){return e.split("#")[1]}(n);if(o)try{t.push({pathname:"/",hash:o})}catch(e){console.log("Error pushing route",e)}else window.scrollTo(0,0)}},[e])},e.useHorizontalScroll=function(e){var n=t.useState(0),r=n[0],u=n[1];return t.useEffect(function(){var t,n=null==e||null==(t=e.current)?void 0:t.scrollWidth;if(n){var r,i=o.throttle(function(e){var t=Math.round(e.touches[0].clientY-r);u(function(e){return b(n,e-t)})},16);return document.addEventListener("wheel",s),document.addEventListener("touchmove",i),document.addEventListener("touchstart",a),document.addEventListener("touchend",f),window.addEventListener("resize",c),function(){document.removeEventListener("wheel",s),document.removeEventListener("touchmove",i),document.removeEventListener("touchstart",a),document.removeEventListener("touchend",f),window.removeEventListener("resize",c)}}function c(){var t;n=null==e||null==(t=e.current)?void 0:t.scrollWidth,u(0)}function s(e){var t=e.deltaY;u(function(e){return b(n,e+t)})}function a(e){r=e.touches[0].clientY}function f(){r=0}},[e,u]),r},e.useHoverImage=function(e,n){var o=x(),r=o.x,i=o.y,c=u.useMotionValue(0),f=u.useMotionValue(0),l=u.useMotionValue(0),d=u.useMotionValue(0),v=u.useMotionValue(0),m=u.useMotionValue(0),h=u.useMotionTemplate("translate("+c.get()+"px, "+l.get()+"px) rotate("+v.get()+"deg)"),g="brightness("+m.get()+")";return t.useEffect(function(){var t=e.current.getBoundingClientRect(),o=n.current.getBoundingClientRect(),u=Math.abs(r-t.left)-o.width/2,s=Math.abs(i-t.top)-o.height/2;c.set(u),l.set(s)},[r,i]),t.useEffect(function(){function e(){var e={x:f.get()-c.get(),y:d.get()-l.get()};f.set(a(f.get(),c.getPrevious(),.08)),d.set(a(d.get(),l.getPrevious(),.08));var t,n=(t=Math.abs(e.x))<=0?0:t>=100?100:t,o=s(n,0,100,0,e.x<0?33:-33);u.animate(v,o,{duration:.25,ease:"linear"});var r=s(n,0,100,1,3);m.set(r)}var t=c.onChange(e),n=l.onChange(e);return function(){t(),n()}},[]),{transform:h,filter:g}},e.useId=function(){return t.useMemo(function(){return n.nanoid()},[])},e.useIntersectionObserver=function(e,n,o){void 0===n&&(n=[0]),void 0===o&&(o=null);var r=t.useState(!1),i=r[0],c=r[1],s=u.useSpring(0,{damping:400,friction:100});return t.useEffect(function(){var t=new IntersectionObserver(function(e){var t=e[0];t.isIntersecting?(c(!0),s.set(t.intersectionRatio)):c(!1)},{root:o,rootMargin:"0px 0px 0px 0px",threshold:n});return t.observe(e.current),function(){return t.disconnect()}},[e,n,o,s]),{inView:i,springValue:s}},e.useInterval=function(e,n){var o=t.useRef();t.useEffect(function(){o.current=e}),t.useEffect(function(){if(null!==n){var e=setInterval(function(){o.current()},n);return function(){return clearInterval(e)}}},[n])},e.useIsMobile=k,e.useIsTouchDevice=function(){var e=t.useState(void 0),n=e[0],o=e[1],r=t.useCallback(function(){o("ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)},[]);return f(function(){return r(),window.addEventListener("resize",r,!1),function(){window.removeEventListener("resize",r,!1)}},[]),n},e.useIsVisible=function(e){var n=void 0===e?{}:e,o=n.root,r=void 0===o?null:o,u=n.rootMargin,i=void 0===u?"0px":u,c=n.threshold,s=void 0===c?1:c,a=n.once,f=void 0!==a&&a,l=t.useRef(),d=t.useRef(),v=t.useState(!1),m=v[0],h=v[1],g=t.useCallback(function(e){h(e[0].isIntersecting)},[]);return t.useEffect(function(){return l.current=new IntersectionObserver(g,{root:r,rootMargin:i,threshold:s}),d.current&&l.current.observe(d.current),function(){l.current.disconnect()}},[g]),t.useEffect(function(){f&&m&&l.current.disconnect()},[m]),{setRef:function(e){d.current||(d.current=e)},inView:m}},e.useLayoutEffect=f,e.useMediaQuery=function(e){var n=t.useState(void 0),o=n[0],r=n[1],u=t.useCallback(function(e){r(e.matches)},[]);return f(function(){var t=window.matchMedia(e);return u(t),t.addEventListener("change",u),function(){t.removeEventListener("change",u)}}),o},e.useMouse=function(e,n){void 0===n&&(n={});var o=n.fps,r=void 0===o?30:o,u=n.enterDelay,i=void 0===u?0:u,c=n.leaveDelay,s=void 0===c?0:c,a=t.useReducer(function(e,t){var n=e.mouse,o=e.context,r=function(e,t){if("undefined"==typeof window)return e;var n,o=t.event,r=(n="touches"in o?o.touches[0]:o).clientX,u=n.clientY,i=n.screenX,c=n.screenY,s=n.pageX,a=void 0===s?0:s,f=n.pageY,l=void 0===f?0:f,d=t.element.getBoundingClientRect(),v=a-d.left-(window.pageXOffset||window.scrollX),m=l-d.top-(window.pageYOffset||window.scrollY);return"touches"in o&&(v<0||m<0||v>d.width||m>d.height)?Object.assign(Object.assign({},e),{context:Object.assign(Object.assign({},e.context),{hoverStatus:"leave",touchStatus:"end"})}):{context:Object.assign(Object.assign({},e.context),{hoverStatus:"enter"}),mouse:Object.assign(Object.assign({},e.mouse),{x:v,y:m,pageX:a,pageY:l,clientX:r,clientY:u,screenX:i,screenY:c,elementWidth:d.width,elementHeight:d.height,isOver:!0,isTouch:"touches"in o})}};return"mousemove"===t.type?"end"===o.touchStatus?e:r(e,t):"touchmove"===t.type?r({context:Object.assign(Object.assign({},o),{touchStatus:"start"}),mouse:n},t):"touchdown"===t.type?r({context:Object.assign(Object.assign({},o),{touchStatus:"start"}),mouse:Object.assign(Object.assign({},n),{isDown:!0})},t):"mousedown"===t.type?{context:o,mouse:Object.assign(Object.assign({},n),{isDown:!0})}:"mouseup"===t.type?{context:o,mouse:Object.assign(Object.assign({},n),{isDown:!1})}:"mouseleave"===t.type?{context:Object.assign(Object.assign({},o),{hoverStatus:"leave"}),mouse:Object.assign(Object.assign({},n),{isOver:!1})}:"touchleave"===t.type?{context:Object.assign(Object.assign({},o),{hoverStatus:"leave",touchStatus:"end"}),mouse:Object.assign(Object.assign({},n),{isOver:!1,isDown:!1})}:"activeStatus"===t.type?{context:Object.assign(Object.assign({},o),{activeStatus:t.value}),mouse:n}:e},{mouse:L,context:R}),f=a[0],l=a[1],d=C(function(t){var n=e&&"current"in e?e.current:e;n&&l({type:"mousemove",event:t,element:n})},r,!0),v=C(function(t){var n=e&&"current"in e?e.current:e;n&&l({type:"touchmove",event:t,element:n})},r,!0),h=C(function(){return l({type:"mouseleave"})},r,!1),g=C(function(t){var n=e&&"current"in e?e.current:e;n&&l("touches"in t?{type:"touchdown",element:n,event:t}:{type:"mousedown",element:n,event:t})},r,!0),w=C(function(){return l({type:"mouseup"})},r,!1),p=C(function(){return l({type:"touchleave"})},r,!1);return m(e,"mouseenter",d),m(e,"mousemove",d),m(e,"mouseleave",h),m(e,"mousedown",g),m("undefined"!=typeof window?window:null,"mousedown",g),m("undefined"!=typeof window?window:null,"mouseup",w),m(e,"touchstart",g),m(e,"touchmove",v),m(e,"touchend",p),m(e,"touchcancel",p),useEffect(function(){if("enter"===f.context.hoverStatus){if(i){var e=setTimeout(function(){return l({type:"activeStatus",value:"active"})},i);return function(){return clearTimeout(e)}}l({type:"activeStatus",value:"active"})}else{if(s){var t=setTimeout(function(){return l({type:"activeStatus",value:"inactive"})},s);return function(){return clearTimeout(t)}}l({type:"activeStatus",value:"inactive"})}},[f.context.hoverStatus,i,s]),"active"===f.context.activeStatus?f.mouse:L},e.useMouseDirection=function(){var e=y(),t=e.width,n=e.height,o=x(),r=o.x,u=o.y;return{direction:r>t/2&&u>n/2?"se":r<t/2&&u>n/2?"sw":r>t/2&&u<n/2?"ne":"nw",hasMovedCursor:"number"==typeof r&&"number"==typeof u}},e.useMousePosition=x,e.useOutsideClickEvent=function(e,n){var o=t.useCallback(function(t){e.current&&!e.current.contains(t.target)&&n()},[e,n]);t.useEffect(function(){return document.addEventListener("mousedown",o),function(){document.removeEventListener("mousedown",o)}},[o])},e.useParallax=function(e,t){return u.useTransform(e,[0,1],[-t,t])},e.usePopup=function(e){var n=e.title,o=void 0===n?"":n,r=e.width,u=void 0===r?500:r,i=e.height,c=void 0===i?1050:i,s=e.url,a=e.storageKey,f=void 0===a?"FOMOLOL_TEMP_DATA":a,l=e.onCreate,d=void 0===l?function(e){return console.log("Created a window with url",e)}:l,v=e.onData,m=void 0===v?function(e){return console.log("data",e)}:v,h=e.onClose,g=void 0===h?function(){}:h,w=e.onError,p=void 0===w?function(e){return console.log("Popup error",error)}:w,y=t.useRef(),b=t.useRef(),E=t.useCallback(function(){try{var e=localStorage.getItem(f);if(e){var t,n=JSON.parse(e);m(n),window.localStorage.removeItem(f),null==(t=y.current)||t.close(),window.removeEventListener("storage",E)}}catch(e){p(e),window.removeEventListener("storage",E)}},[m,p,f,y]),O=t.useCallback(function(e){var t,n=e.url,o=e.title,r=e.height,u=e.width,i=e.onClose,c="width="+u+",height="+r+",left="+(window.screenX+(window.outerWidth-u)/2)+",top="+(window.screenY+(window.outerHeight-r)/2.5);null===y.current||null!=(t=y.current)&&t.closed?y.current=window.open(n,o,c):b.current!==n?(y.current=window.open(n,o,c),y.current.focus()):y.current.focus(),window.addEventListener("storage",E),window.addEventListener("beforeunload",function(){i()},!1),b.current=n,d(n)},[y,E]);return{onClick:t.useCallback(function(){O({url:s,title:o,width:u,height:c,onData:m,onClose:g,onError:p,storageKey:f})},[O,s,o,u,c,m,g,p,f])}},e.useRect=function(e){var n=(void 0===e?{}:e).debounce,r=void 0===n?1e3:n,u=t.useRef(),i=t.useState({top:void 0,left:void 0,width:void 0,height:void 0}),c=i[0],s=i[1],a=function(){u.current&&s(function(e){return g({},e,{top:w(u.current),left:p(u.current)})})};f(function(){var e=o.throttle(r,a),t=new ResizeObserver(e);return t.observe(document.body),function(){t.disconnect(),e.cancel({upcomingOnly:!0})}},[r]);var l=function(e){var t=e[0].contentRect,n=t.width,o=t.height;s(function(e){return g({},e,{width:n,height:o})})},d=t.useRef();return[function(e){var t;e&&e!==u.current&&(null==(t=d.current)||t.disconnect(),d.current=new ResizeObserver(l),d.current.observe(e),u.current=e)},c,function(e,t){return c}]},e.useSlots=function(e,n){void 0===e&&(e=[]),void 0===n&&(n=[]);var o=t.useMemo(function(){return n&&[n].flat()},[n]),r=t.useMemo(function(){return e&&[e].flat()},[e]),u=t.useMemo(function(){return o&&r&&r.map(function(e){var t;return null==(t=o.find(function(t){return t.type===e}))?void 0:t.props.children})},[o,r]);return e[0]?u:u[0]},e.useSmoothTransform=function(e,t,n){return u.useSpring(u.useTransform(e,n),t)},e.useSticky=function(e,t){void 0===e&&(e="header-not-at-top"),void 0===t&&(t="#top-of-site-pixel-anchor");var n,o,r=function(){document.documentElement.dataset.scroll=window.scrollY};document.addEventListener("scroll",(n=r,function(){var e=arguments;o&&cancelAnimationFrame(o),o=requestAnimationFrame(function(){n.apply(void 0,[].slice.call(e))})}),{passive:!0}),r(),"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&new IntersectionObserver(function(t){t[0].boundingClientRect.y<0?document.body.classList.add(e):document.body.classList.remove(e)}).observe(document.querySelector(t))},e.useTheme=function(){var e=t.useCallback(function(){"undefined"!=typeof window&&(localStorage.getItem("theme")?"light"===localStorage.getItem("theme")?(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light")):document.documentElement.classList.contains("dark")?(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light")):(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")))},[]),n=t.useCallback(function(){return"undefined"!=typeof window?localStorage.getItem("theme"):null},[]);return f(function(){localStorage.getItem("theme")&&("light"===localStorage.getItem("theme")?document.documentElement.classList.remove("dark"):document.documentElement.classList.add("dark"))},[e]),{toggle:e,getTheme:n}},e.useTimeout=function(e,n){var o=t.useRef();t.useEffect(function(){o.current=e},[e]),t.useEffect(function(){if(null!==n){var e=setTimeout(function(){o.current()},1e3*n);return function(){return clearTimeout(e)}}},[n])},e.useWindowSize=y});
//# sourceMappingURL=index.umd.js.map
