import{useCallback as e,useEffect as t,useMemo as n,useLayoutEffect as r,useState as o,useRef as i,useReducer as u}from"react";import{nanoid as c}from"nanoid";import{throttle as a}from"throttle-debounce";import{useSpring as s,useTransform as d,useMotionValue as l,useMotionTemplate as f,animate as v}from"framer-motion";import{singletonHook as m}from"react-singleton-hook";function h(n,r){var o=e(function(e){n.current&&!n.current.contains(e.target)&&r()},[n,r]);t(function(){return document.addEventListener("mousedown",o),function(){document.removeEventListener("mousedown",o)}},[o])}var g=function(){return n(function(){return"undefined"!=typeof window&&(window.location.href.includes("#debug")||"development"===process.env.NODE_ENV||process.env.NEXT_PUBLIC_DEBUG_MODE||process.env.NEXT_PUBLIC_DEBUG)},[])},w="undefined"!=typeof window,p=function(e,t,n,r,o){return(e-t)*(o-r)/(n-t)+r},y=function(e,t,n){return(1-n)*e+n*t},E=w?r:t,b="undefined"!=typeof window?function(){var e=o(document.readyState),t=e[0],n=e[1];return E(function(){function e(){n(document.readyState)}return n(document.readyState),document.addEventListener("readystatechange",e,!1),function(){return document.removeEventListener("readystatechange",e,!1)}},[]),t}:function(){},O=[],L=function(e){var t=e.type;"string"==typeof e&&(t=e);var n=[];n.push("string"==typeof e?{type:t}:e),O.forEach(function(e){var r=e[0],o=e[1];"string"==typeof r&&r!==t||("function"!=typeof r||r.apply(void 0,n))&&o.apply(void 0,n)})},S=function(e,n,r){return void 0===r&&(r=[]),t(function(){return function(e,t){if(null!=e&&null!=t)return O=[].concat(O,[[e,t]]),function(){O=O.filter(function(e){return e[1]!==t})}}(e,n)},[].concat(r,[n,e])),L};function x(e,n,r,o){var u=i(r),c=i(o);t(function(){u.current=r,c.current=o}),t(function(){var t=e&&"current"in e?e.current:e;if(t){var r=0;t.addEventListener(n,i);var o=c.current;return function(){r=1,t.removeEventListener(n,i),o&&o()}}function i(){r||u.current.apply(this,[].slice.call(arguments))}},[e,n])}var C=function(e,n,r){void 0===r&&(r=window);var o=i();t(function(){o.current=n},[n]),t(function(){if(r&&r.addEventListener){var t=function(e){return o.current(e)};return r.addEventListener(e,t),function(){r.removeEventListener(e,t)}}},[e,r])};function R(){return n(function(){return c()},[])}var I=function(e,n){var r=i();t(function(){r.current=e}),t(function(){if(null!==n){var e=setInterval(function(){r.current()},n);return function(){return clearInterval(e)}}},[n])},j=function(){var t=o(void 0),n=t[0],r=t[1],i=e(function(){r("ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)},[]);return E(function(){return i(),window.addEventListener("resize",i,!1),function(){window.removeEventListener("resize",i,!1)}},[]),n},M=function(n){var r=void 0===n?{}:n,u=r.root,c=void 0===u?null:u,a=r.rootMargin,s=void 0===a?"0px":a,d=r.threshold,l=void 0===d?1:d,f=r.once,v=void 0!==f&&f,m=i(),h=i(),g=o(!1),w=g[0],p=g[1],y=e(function(e){p(e[0].isIntersecting)},[]);return t(function(){return m.current=new IntersectionObserver(y,{root:c,rootMargin:s,threshold:l}),h.current&&m.current.observe(h.current),function(){m.current.disconnect()}},[y]),t(function(){v&&w&&m.current.disconnect()},[w]),{setRef:function(e){h.current||(h.current=e)},inView:w}},_=function(t){var n=o(void 0),r=n[0],i=n[1],u=e(function(e){i(e.matches)},[]);return E(function(){var e=window.matchMedia(t);return u(e),e.addEventListener("change",u),function(){e.removeEventListener("change",u)}}),r},P=function(e,t){"function"==typeof e?e(t):e&&(e.current=t)},T=function(e,t){return n(function(){return null==e&&null==t?null:function(n){P(e,n),P(t,n)}},[e,t])};function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},D.apply(this,arguments)}function Y(e,t){void 0===t&&(t=0);var n=t+e.offsetTop;return e.offsetParent?Y(e.offsetParent,n):n}function k(e,t){void 0===t&&(t=0);var n=t+e.offsetLeft;return e.offsetParent?k(e.offsetParent,n):n}function A(e){var t=(void 0===e?{}:e).debounce,n=void 0===t?1e3:t,r=i(),u=o({top:void 0,left:void 0,width:void 0,height:void 0}),c=u[0],s=u[1],d=function(){r.current&&s(function(e){return D({},e,{top:Y(r.current),left:k(r.current)})})};E(function(){var e=a(n,d),t=new ResizeObserver(e);return t.observe(document.body),function(){t.disconnect(),e.cancel({upcomingOnly:!0})}},[n]);var l=function(e){var t=e[0].contentRect,n=t.width,r=t.height;s(function(e){return D({},e,{width:n,height:r})})},f=i();return[function(e){var t;e&&e!==r.current&&(null==(t=f.current)||t.disconnect(),f.current=new ResizeObserver(l),f.current.observe(e),r.current=e)},c,function(e,t){return c}]}var X=function(e,t){void 0===e&&(e=[]),void 0===t&&(t=[]);var r=n(function(){return t&&[t].flat()},[t]),o=n(function(){return e&&[e].flat()},[e]),i=n(function(){return r&&o&&o.map(function(e){var t;return null==(t=r.find(function(t){return t.type===e}))?void 0:t.props.children})},[r,o]);return e[0]?i:i[0]},B=function(){var t=o(),n=t[0],r=t[1],i=e(function(){r({width:window.innerWidth,height:window.innerHeight})},[]);return E(function(){return window.addEventListener("resize",i),i(),function(){return window.removeEventListener("resize",i)}},[]),n},z=function(t,n){void 0===t&&(t=function(){}),void 0===n&&(n=function(){});var r=o(!0),i=r[0],u=r[1],c=e(function(){t(),u(!0)},[t]),a=e(function(){n(),u(!1)},[n]);return E(function(){return window.addEventListener("focus",c),window.addEventListener("blur",a),function(){window.removeEventListener("focus",c),window.removeEventListener("blur",a)}},[]),{focused:i}},U=function(e){var t=useRouter(),n=t.asPath;E(function(){if(t.isReady&&e){var r=function(e){return e.split("#")[1]}(n);if(r)try{t.push({pathname:"/",hash:r})}catch(e){console.log("Error pushing route",e)}else window.scrollTo(0,0)}},[e])},W=function(e,t,n){return s(d(e,n),t)};function K(e,t){var n=e-window.innerWidth;return t>n?n:0>t?0:t}function N(e){var n=o(0),r=n[0],i=n[1];return t(function(){var t,n=null==e||null==(t=e.current)?void 0:t.scrollWidth;if(n){var r,o=a(function(e){var t=Math.round(e.touches[0].clientY-r);i(function(e){return K(n,e-t)})},16);return document.addEventListener("wheel",c),document.addEventListener("touchmove",o),document.addEventListener("touchstart",s),document.addEventListener("touchend",d),window.addEventListener("resize",u),function(){document.removeEventListener("wheel",c),document.removeEventListener("touchmove",o),document.removeEventListener("touchstart",s),document.removeEventListener("touchend",d),window.removeEventListener("resize",u)}}function u(){var t;n=null==e||null==(t=e.current)?void 0:t.scrollWidth,i(0)}function c(e){var t=e.deltaY;i(function(e){return K(n,e+t)})}function s(e){r=e.touches[0].clientY}function d(){r=0}},[e,i]),r}var F="undefined"!=typeof performance?performance:Date,G=function(){return F.now()};function H(n,r,o){void 0===r&&(r=30),void 0===o&&(o=!1);var u,c,a=(c=i(u=n),t(function(){c.current=u}),c),s=1e3/r,d=i(0),l=i(),f=function(){return l.current&&clearTimeout(l.current)},v=[r,o,a];return t(function(){return function(){d.current=0,f()}},v),e(function(){var e=arguments,t=G(),n=function(){d.current=t,f(),a.current.apply(null,e)},r=d.current;if(o&&0===r)return n();if(t-r>s){if(r>0)return n();d.current=t}f(),l.current=setTimeout(function(){n(),d.current=0},s)},v)}function q(e,t,n){var r=useState(e);return[r[0],H(r[1],t,n)]}function V(e,t){void 0===t&&(t={});var n=t.fps,r=void 0===n?30:n,o=t.enterDelay,i=void 0===o?0:o,c=t.leaveDelay,a=void 0===c?0:c,s=u(function(e,t){var n=e.mouse,r=e.context,o=function(e,t){if("undefined"==typeof window)return e;var n,r=t.event,o=(n="touches"in r?r.touches[0]:r).clientX,i=n.clientY,u=n.screenX,c=n.screenY,a=n.pageX,s=void 0===a?0:a,d=n.pageY,l=void 0===d?0:d,f=t.element.getBoundingClientRect(),v=s-f.left-(window.pageXOffset||window.scrollX),m=l-f.top-(window.pageYOffset||window.scrollY);return"touches"in r&&(v<0||m<0||v>f.width||m>f.height)?Object.assign(Object.assign({},e),{context:Object.assign(Object.assign({},e.context),{hoverStatus:"leave",touchStatus:"end"})}):{context:Object.assign(Object.assign({},e.context),{hoverStatus:"enter"}),mouse:Object.assign(Object.assign({},e.mouse),{x:v,y:m,pageX:s,pageY:l,clientX:o,clientY:i,screenX:u,screenY:c,elementWidth:f.width,elementHeight:f.height,isOver:!0,isTouch:"touches"in r})}};return"mousemove"===t.type?"end"===r.touchStatus?e:o(e,t):"touchmove"===t.type?o({context:Object.assign(Object.assign({},r),{touchStatus:"start"}),mouse:n},t):"touchdown"===t.type?o({context:Object.assign(Object.assign({},r),{touchStatus:"start"}),mouse:Object.assign(Object.assign({},n),{isDown:!0})},t):"mousedown"===t.type?{context:r,mouse:Object.assign(Object.assign({},n),{isDown:!0})}:"mouseup"===t.type?{context:r,mouse:Object.assign(Object.assign({},n),{isDown:!1})}:"mouseleave"===t.type?{context:Object.assign(Object.assign({},r),{hoverStatus:"leave"}),mouse:Object.assign(Object.assign({},n),{isOver:!1})}:"touchleave"===t.type?{context:Object.assign(Object.assign({},r),{hoverStatus:"leave",touchStatus:"end"}),mouse:Object.assign(Object.assign({},n),{isOver:!1,isDown:!1})}:"activeStatus"===t.type?{context:Object.assign(Object.assign({},r),{activeStatus:t.value}),mouse:n}:e},{mouse:J,context:Q}),d=s[0],l=s[1],f=q(function(t){var n=e&&"current"in e?e.current:e;n&&l({type:"mousemove",event:t,element:n})},r,!0),v=q(function(t){var n=e&&"current"in e?e.current:e;n&&l({type:"touchmove",event:t,element:n})},r,!0),m=q(function(){return l({type:"mouseleave"})},r,!1),h=q(function(t){var n=e&&"current"in e?e.current:e;n&&l("touches"in t?{type:"touchdown",element:n,event:t}:{type:"mousedown",element:n,event:t})},r,!0),g=q(function(){return l({type:"mouseup"})},r,!1),w=q(function(){return l({type:"touchleave"})},r,!1);return x(e,"mouseenter",f),x(e,"mousemove",f),x(e,"mouseleave",m),x(e,"mousedown",h),x("undefined"!=typeof window?window:null,"mousedown",h),x("undefined"!=typeof window?window:null,"mouseup",g),x(e,"touchstart",h),x(e,"touchmove",v),x(e,"touchend",w),x(e,"touchcancel",w),useEffect(function(){if("enter"===d.context.hoverStatus){if(i){var e=setTimeout(function(){return l({type:"activeStatus",value:"active"})},i);return function(){return clearTimeout(e)}}l({type:"activeStatus",value:"active"})}else{if(a){var t=setTimeout(function(){return l({type:"activeStatus",value:"inactive"})},a);return function(){return clearTimeout(t)}}l({type:"activeStatus",value:"inactive"})}},[d.context.hoverStatus,i,a]),"active"===d.context.activeStatus?d.mouse:J}var J={x:null,y:null,pageX:null,pageY:null,clientX:null,clientY:null,screenX:null,screenY:null,elementWidth:null,elementHeight:null,isOver:!1,isDown:!1,isTouch:!1},Q={hoverStatus:"idle",touchStatus:"idle",activeStatus:"inactive"};function Z(){var e=o({x:null,y:null}),n=e[0],r=e[1];return t(function(){var e=function(e){r({x:e.clientX,y:e.clientY})};return document.addEventListener("mousemove",e),function(){document.removeEventListener("mousemove",e)}},[]),n}var $=function(){var e=B(),t=e.width,n=e.height,r=Z(),o=r.x,i=r.y;return{direction:o>t/2&&i>n/2?"se":o<t/2&&i>n/2?"sw":o>t/2&&i<n/2?"ne":"nw",hasMovedCursor:"number"==typeof o&&"number"==typeof i}},ee=function(e,n){var r=Z(),o=r.x,i=r.y,u=l(0),c=l(0),a=l(0),s=l(0),d=l(0),m=l(0),h=f("translate("+u.get()+"px, "+a.get()+"px) rotate("+d.get()+"deg)"),g="brightness("+m.get()+")";return t(function(){var t=e.current.getBoundingClientRect(),r=n.current.getBoundingClientRect(),c=Math.abs(o-t.left)-r.width/2,s=Math.abs(i-t.top)-r.height/2;u.set(c),a.set(s)},[o,i]),t(function(){function e(){var e={x:c.get()-u.get(),y:s.get()-a.get()};c.set(y(c.get(),u.getPrevious(),.08)),s.set(y(s.get(),a.getPrevious(),.08));var t,n=(t=Math.abs(e.x))<=0?0:t>=100?100:t,r=p(n,0,100,0,e.x<0?33:-33);v(d,r,{duration:.25,ease:"linear"});var o=p(n,0,100,1,3);m.set(o)}var t=u.onChange(e),n=a.onChange(e);return function(){t(),n()}},[]),{transform:h,filter:g}},te=function(e,t){return d(e,[0,1],[-t,t])},ne=m(!1,function(e){void 0===e&&(e=940);var n=o(!1),r=n[0],i=n[1];return t(function(){function t(){var t=window.innerWidth;i(t<e)}return window.addEventListener("resize",t),t(),function(){return window.removeEventListener("resize",t)}},[]),r}),re=function(){var t=e(function(){"undefined"!=typeof window&&(localStorage.getItem("theme")?"light"===localStorage.getItem("theme")?(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light")):document.documentElement.classList.contains("dark")?(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light")):(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")))},[]),n=e(function(){return"undefined"!=typeof window?localStorage.getItem("theme"):null},[]);return E(function(){localStorage.getItem("theme")&&("light"===localStorage.getItem("theme")?document.documentElement.classList.remove("dark"):document.documentElement.classList.add("dark"))},[t]),{toggle:t,getTheme:n}},oe=function(e,n,r){void 0===n&&(n=[0]),void 0===r&&(r=null);var i=o(!1),u=i[0],c=i[1],a=s(0,{damping:400,friction:100});return t(function(){var t=new IntersectionObserver(function(e){var t=e[0];t.isIntersecting?(c(!0),a.set(t.intersectionRatio)):c(!1)},{root:r,rootMargin:"0px 0px 0px 0px",threshold:n});return t.observe(e.current),function(){return t.disconnect()}},[e,n,r,a]),{inView:u,springValue:a}},ie=function(){return E(function(){var e="font-size:15px;";console.log("%cFOMOLOL Police 🚨","color:red; font-size:65px; font-weight:bold; -webkit-text-stroke: 1px black"),console.log("%cThis is a browser feature intended for developers. If someone told you to copy-paste something here, it is a scam and could give them access to your wallet.",e),console.log("%cIf you need a job see https://jobs.fomolol.com for more info.",e)},[]),null},ue=function(e){var t=e.cookieAcceptKey,n=e.onAccepted,r=e.onDeclined,i=o(),u=i[0],c=i[1];return E(function(){null!==window.localStorage.getItem(process.env.NEXT_PUBLIC_COOKIE_ACCEPT_KEY||t)?(c(!0),n()):(c(!1),r())},[]),u},ce=function(n){var r=o(!1),i=r[0],u=r[1],c=e(function(){i||u(function(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);var n=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);t.select();var r=document.execCommand("copy");return document.body.removeChild(t),n&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(n)),r}(n))},[n]);return t(function(){return function(){return u(!1)}},[n]),[i,c]},ae=function(e,t){void 0===e&&(e="header-not-at-top"),void 0===t&&(t="#top-of-site-pixel-anchor");var n,r,o=function(){document.documentElement.dataset.scroll=window.scrollY};document.addEventListener("scroll",(n=o,function(){var e=arguments;r&&cancelAnimationFrame(r),r=requestAnimationFrame(function(){n.apply(void 0,[].slice.call(e))})}),{passive:!0}),o(),"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&new IntersectionObserver(function(t){t[0].boundingClientRect.y<0?document.body.classList.add(e):document.body.classList.remove(e)}).observe(document.querySelector(t))};function se(){var e=arguments,n=this,r=o(!1),u=r[0],c=r[1],a=i(null),s=function(){window.scrollY>a.current.getBoundingClientRect().bottom?c(!0):c(!1)},d=function(t,r,o){var i;return void 0===r&&(r=20),void 0===o&&(o=!0),function(){var u=n,c=e,a=o&&!i;clearTimeout(i),i=setTimeout(function(){i=null,o||t.apply(u,c)},r),a&&t.apply(u,c)}};return t(function(){return window.addEventListener("scroll",d(s)),function(){window.removeEventListener("scroll",function(){return s})}},[d,s]),{isSticky:u,ref:a}}var de=function(t){var n=t.title,r=void 0===n?"":n,o=t.width,u=void 0===o?500:o,c=t.height,a=void 0===c?1050:c,s=t.url,d=t.storageKey,l=void 0===d?"FOMOLOL_TEMP_DATA":d,f=t.onCreate,v=void 0===f?function(e){return console.log("Created a window with url",e)}:f,m=t.onData,h=void 0===m?function(e){return console.log("data",e)}:m,g=t.onClose,w=void 0===g?function(){}:g,p=t.onError,y=void 0===p?function(e){return console.log("Popup error",error)}:p,E=i(),b=i(),O=e(function(){try{var e=localStorage.getItem(l);if(e){var t,n=JSON.parse(e);h(n),window.localStorage.removeItem(l),null==(t=E.current)||t.close(),window.removeEventListener("storage",O)}}catch(e){y(e),window.removeEventListener("storage",O)}},[h,y,l,E]),L=e(function(e){var t,n=e.url,r=e.title,o=e.height,i=e.width,u=e.onClose,c="width="+i+",height="+o+",left="+(window.screenX+(window.outerWidth-i)/2)+",top="+(window.screenY+(window.outerHeight-o)/2.5);null===E.current||null!=(t=E.current)&&t.closed?E.current=window.open(n,r,c):b.current!==n?(E.current=window.open(n,r,c),E.current.focus()):E.current.focus(),window.addEventListener("storage",O),window.addEventListener("beforeunload",function(){u()},!1),b.current=n,v(n)},[E,O]);return{onClick:e(function(){L({url:s,title:r,width:u,height:a,onData:h,onClose:w,onError:y,storageKey:l})},[L,s,r,u,a,h,w,y,l])}},le=function(e,n){var r=i();t(function(){r.current=e},[e]),t(function(){if(null!==n){var e=setTimeout(function(){r.current()},1e3*n);return function(){return clearTimeout(e)}}},[n])},fe=function(e,n){void 0===n&&(n="2d");var r=i(null);return t(function(){var t=r.current.getContext(n),o=requestAnimationFrame(function n(){o=requestAnimationFrame(n),e(t)});return function(){return cancelAnimationFrame(o)}},[e,n]),r},ve=function(t,n){var r=e(function(){n({type:"ADD_CURSOR_BORDER"})},[n]),o=e(function(){n({type:"REMOVE_CURSOR_BORDER"})},[n]);return D({},t,{addCursorColor:e(function(e){n({type:"ADD_CURSOR_COLOR",payload:e})},[n]),resetCursorColor:e(function(){n({type:"RESET_CURSOR_COLOR"})},[n]),addCursorBorder:r,removeCursorBorder:o,lockCursorPosition:e(function(e){n({type:"LOCK_CURSOR_POSITION",payload:e})},[n])})},me=function(e){var t=e.ref,n=o(),r=n[0],i=n[1];return E(function(){if(!r&&t&&t.current){var e=new Paper.Project(t.current);i(e)}},[r,t]),r},he=function(e){var t=e.ref,r=e.width,o=e.height,i=e.wireframes,u=void 0!==i&&i,c=e.hasBounds,a=void 0===c||c,s=e.background,d=void 0===s?"transparent":s;return n(function(){Matter.use("matter-attractors"),Matter.use("matter-wrap");var e=Matter.Engine.create(),n=e.world;e.timing.timeScale=1.5;var i=Matter.Render.create({element:t.current,engine:e,options:{hasBounds:a,wireframes:u,width:r,height:o,background:d}}),c=i.canvas;Matter.Render.run(i);var s=Matter.Runner.create();Matter.Runner.run(s,e);var l=Matter.Mouse.create(c),f=Matter.MouseConstraint.create(e,{mouse:l,constraint:{stiffness:.2,render:{visible:!1}}});return Matter.World.add(n,f),i.mouse=l,Matter.Render.lookAt(i,{min:{x:0,y:0},max:{x:r,y:o}}),f.mouse.element.removeEventListener("mousewheel",f.mouse.mousewheel),f.mouse.element.removeEventListener("DOMMouseScroll",f.mouse.mousewheel),{loaded:!0,engine:e,render:i,runner:s,mouse:l}},[t,d,u,a,o,r])},ge=function(e){void 0===e&&(e="pokemon");var t=o(null),n=t[0],r=t[1],i=o(!1),u=i[0],c=i[1];return useEffect(function(){if(e&&!n&&!u)try{c(!0),require("giphy-api")(process.env.GIPHY_API_KEY||process.env.NEXT_PUBLIC_GIPHY_API_KEY).search(e,function(e,t){if(200===t.meta.status){var n=Math.floor(Math.random()*(t.data.length-1)+1),o=t.data[n];if(o&&o.images){console.log("randomGif",o);var i=o.images;r({data:o,url:(null==i?void 0:i.fixed_width).webp}),c(!1)}}else c(!1),console.error(t.meta.msg,e)})}catch(e){c(!1),console.error("Error occurred initializing Giphy API",e)}},[n,u,e]),[u,n]};export{L as dispatch,fe as useCanvas,ce as useClipboard,ue as useCookieBanner,ve as useCursorStyle,ie as useCustomConsole,g as useDebug,b as useDocumentReadyState,x as useEvent,S as useEventBus,C as useEventListener,z as useFocus,T as useForkRef,ge as useGiphy,U as useHashScroll,N as useHorizontalScroll,ee as useHoverImage,R as useId,oe as useIntersectionObserver,I as useInterval,ne as useIsMobile,j as useIsTouchDevice,M as useIsVisible,E as useLayoutEffect,he as useMatterJS,_ as useMediaQuery,V as useMouse,$ as useMouseDirection,Z as useMousePosition,h as useOutsideClickEvent,me as usePaperJS,te as useParallax,de as usePopup,A as useRect,X as useSlots,W as useSmoothTransform,ae as useSticky,se as useStickyHeader,re as useTheme,le as useTimeout,B as useWindowSize};
//# sourceMappingURL=index.mjs.map
