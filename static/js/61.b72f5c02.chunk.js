(self.webpackChunkfor_conducting_tests=self.webpackChunkfor_conducting_tests||[]).push([[61],{3113:function(e,t,r){"use strict";r.d(t,{$v:function(){return d},IH:function(){return h},TK:function(){return i}});var a=r(2791);function n(e){var t,r,a="";if("string"===typeof e||"number"===typeof e)a+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function c(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r(4164);Math.max,Math.min,Math.round;r(77),"undefined"!==typeof window&&window.document&&window.document.createElement?a.useLayoutEffect:a.useEffect;var o=function(){return o=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},o.apply(this,arguments)};function l(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r}a.forwardRef((function(e,t){var r=e.breakpoint,n=e.fluid,i=e.children,s=e.className,u=e.tag,d=l(e,["breakpoint","fluid","children","className","tag"]),f=c("".concat(n?"container-fluid":"container".concat(r?"-"+r:"")),s);return a.createElement(u,o({className:f},d,{ref:t}),i)})).defaultProps={tag:"div"};var i=a.forwardRef((function(e,t){var r=e.center,n=e.children,i=e.className,s=e.end,u=e.lg,d=e.md,f=e.offsetLg,m=e.offsetMd,p=e.offsetSm,v=e.order,g=e.size,h=e.sm,b=e.start,N=e.tag,w=e.xl,y=e.xxl,E=e.xs,x=l(e,["center","children","className","end","lg","md","offsetLg","offsetMd","offsetSm","order","size","sm","start","tag","xl","xxl","xs"]),k=c(g&&"col-".concat(g),E&&"col-xs-".concat(E),h&&"col-sm-".concat(h),d&&"col-md-".concat(d),u&&"col-lg-".concat(u),w&&"col-xl-".concat(w),y&&"col-xxl-".concat(y),g||E||h||d||u||w||y?"":"col",v&&"order-".concat(v),b&&"align-self-start",r&&"align-self-center",s&&"align-self-end",p&&"offset-sm-".concat(p),m&&"offset-md-".concat(m),f&&"offset-lg-".concat(f),i);return a.createElement(N,o({className:k,ref:t},x),n)}));i.defaultProps={tag:"div"},a.forwardRef((function(e,t){var r=e.className,n=e.color,i=e.pill,s=e.light,u=e.dot,d=e.tag,f=e.children,m=e.notification,p=l(e,["className","color","pill","light","dot","tag","children","notification"]),v=c("badge",s?n&&"badge-".concat(n):n&&"bg-".concat(n),u&&"badge-dot",i&&"rounded-pill",m&&"badge-notification",r);return a.createElement(d,o({className:v,ref:t},p),f)})).defaultProps={tag:"span",color:"primary"};var s=function(e){var t=l(e,[]),r=(0,a.useState)(!1),n=r[0],i=r[1],s=c("ripple-wave",n&&"active");return(0,a.useEffect)((function(){var e=setTimeout((function(){i(!0)}),50);return function(){clearTimeout(e)}}),[]),a.createElement("div",o({className:s},t))},u=a.forwardRef((function(e,t){var r=e.className,n=e.rippleTag,i=e.rippleCentered,u=e.rippleDuration,d=e.rippleUnbound,f=e.rippleRadius,m=e.rippleColor,p=e.children,v=e.onClick,g=l(e,["className","rippleTag","rippleCentered","rippleDuration","rippleUnbound","rippleRadius","rippleColor","children","onClick"]),h=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=a.useRef();return a.useEffect((function(){e.forEach((function(e){e&&("function"==typeof e?e(r.current):e.current=r.current)}))}),[e]),r}(t,(0,a.useRef)(null)),b=[0,0,0],N=["primary","secondary","success","danger","warning","info","light","dark"],w=(0,a.useState)([]),y=w[0],E=w[1],x=(0,a.useState)(!1),k=x[0],C=x[1],R=c("ripple","ripple-surface",d&&"ripple-surface-unbound",k&&"ripple-surface-".concat(m),r),S=function(){if(N.find((function(e){return e===(null==m?void 0:m.toLowerCase())})))return C(!0);var e=P(m).join(","),t="rgba({{color}}, 0.2) 0, rgba({{color}}, 0.3) 40%, rgba({{color}}, 0.4) 50%, rgba({{color}}, 0.5) 60%, rgba({{color}}, 0) 70%".split("{{color}}").join("".concat(e));return"radial-gradient(circle, ".concat(t,")")},P=function(e){return"transparent"===e.toLowerCase()?b:"#"===e[0]?function(e){return e.length<7&&(e="#".concat(e[1]).concat(e[1]).concat(e[2]).concat(e[2]).concat(e[3]).concat(e[3])),[parseInt(e.substr(1,2),16),parseInt(e.substr(3,2),16),parseInt(e.substr(5,2),16)]}(e):(-1===e.indexOf("rgb")&&(e=function(e){var t=document.body.appendChild(document.createElement("fictum")),r="rgb(1, 2, 3)";return t.style.color=r,t.style.color!==r?b:(t.style.color=e,t.style.color===r||""===t.style.color?b:(e=getComputedStyle(t).color,document.body.removeChild(t),e))}(e)),0===e.indexOf("rgb")?function(e){return(e=e.match(/[.\d]+/g).map((function(e){return+Number(e)}))).length=3,e}(e):b)};return(0,a.useEffect)((function(){var e=setTimeout((function(){y.length>0&&E(y.splice(1,y.length-1))}),u);return function(){clearTimeout(e)}}),[u,y]),a.createElement(n,o({className:R,onMouseDown:function(e){return function(e){var t=function(e){var t,r=null===(t=h.current)||void 0===t?void 0:t.getBoundingClientRect(),a=e.clientX-r.left,n=e.clientY-r.top,c=r.height,l=r.width,s={delay:u&&.5*u,duration:u&&u-.5*u},d=function(e){var t=e.offsetX,r=e.offsetY,a=e.height,n=e.width,c=r<=a/2,o=t<=n/2,l=function(e,t){return Math.sqrt(Math.pow(e,2)+Math.pow(t,2))},i=r===a/2&&t===n/2,s=!0===c&&!1===o,u=!0===c&&!0===o,d=!1===c&&!0===o,f=!1===c&&!1===o,m={topLeft:l(t,r),topRight:l(n-t,r),bottomLeft:l(t,a-r),bottomRight:l(n-t,a-r)},p=0;return i||f?p=m.topLeft:d?p=m.topRight:u?p=m.bottomRight:s&&(p=m.bottomLeft),2*p}({offsetX:i?c/2:a,offsetY:i?l/2:n,height:c,width:l}),m=f||d/2,p={left:"".concat(i?l/2-m:a-m,"px"),top:"".concat(i?c/2-m:n-m,"px"),height:"".concat(f?2*f:d,"px"),width:"".concat(f?2*f:d,"px"),transitionDelay:"0s, ".concat(s.delay,"ms"),transitionDuration:"".concat(u,"ms, ").concat(s.duration,"ms")};return k?p:o(o({},p),{backgroundImage:"".concat(S())})}(e),r=y.concat(t);E(r),v&&v(e)}(e)},ref:h},g),p,y.map((function(e,t){return a.createElement(s,{key:t,style:e})})))}));u.defaultProps={rippleTag:"div",rippleDuration:500,rippleRadius:0,rippleColor:"dark"};var d=a.forwardRef((function(e,t){var r=e.className,n=e.color,i=e.outline,s=e.children,d=e.rounded,f=e.disabled,m=e.floating,p=e.size,v=e.href,g=e.block,h=e.active,b=e.toggle,N=e.noRipple,w=e.tag,y=l(e,["className","color","outline","children","rounded","disabled","floating","size","href","block","active","toggle","noRipple","tag"]),E=(0,a.useState)(h||!1),x=E[0],k=E[1],C=n&&["light","link"].includes(n)||i?"dark":"light",R=c("none"!==n&&"btn","none"!==n?i?n?"btn-outline-".concat(n):"btn-outline-primary":n?"btn-".concat(n):"btn-primary":"",d&&"btn-rounded",m&&"btn-floating",p&&"btn-".concat(p),"".concat((v||"button"!==w)&&f?"disabled":""),g&&"btn-block",x&&"active",r);return v&&"a"!==w&&(w="a"),["hr","img","input"].includes(w)||N?a.createElement(w,o({className:R,onClick:b?function(){k(!x)}:void 0,disabled:!(!f||"button"!==w)||void 0,href:v,ref:t},y),s):a.createElement(u,o({rippleTag:w,rippleColor:C,className:R,onClick:b?function(){k(!x)}:void 0,disabled:!(!f||"button"!==w)||void 0,href:v,ref:t},y),s)}));d.defaultProps={tag:"button",role:"button",color:"primary"},a.forwardRef((function(e,t){var r=e.className,n=e.children,i=e.shadow,s=e.toolbar,u=e.size,d=e.vertical,f=e.tag,m=l(e,["className","children","shadow","toolbar","size","vertical","tag"]),p=c(s?"btn-toolbar":d?"btn-group-vertical":"btn-group",i&&"shadow-".concat(i),u&&"btn-group-".concat(u),r);return a.createElement(f,o({className:p,ref:t},m),n)})).defaultProps={tag:"div",role:"group"},a.forwardRef((function(e,t){var r=e.className,n=e.children,i=e.tag,s=e.color,u=e.grow,d=e.size,f=l(e,["className","children","tag","color","grow","size"]),m=c("".concat(u?"spinner-grow":"spinner-border"),s&&"text-".concat(s),"".concat(d?u?"spinner-grow-"+d:"spinner-border-"+d:""),r);return a.createElement(i,o({className:m,ref:t},f),n)})).defaultProps={tag:"div"},a.forwardRef((function(e,t){var r=e.className,n=e.children,i=e.border,s=e.background,u=e.tag,d=e.shadow,f=e.alignment,m=l(e,["className","children","border","background","tag","shadow","alignment"]),p=c("card",i&&"border border-".concat(i),s&&"bg-".concat(s),d&&"shadow-".concat(d),f&&"text-".concat(f),r);return a.createElement(u,o({className:p,ref:t},m),n)})).defaultProps={tag:"div"},a.forwardRef((function(e,t){var r=e.className,n=e.children,i=e.border,s=e.background,u=e.tag,d=l(e,["className","children","border","background","tag"]),f=c("card-header",i&&"border-".concat(i),s&&"bg-".concat(s),r);return a.createElement(u,o({className:f},d,{ref:t}),n)})).defaultProps={tag:"div"},a.forwardRef((function(e,t){var r=e.className,n=e.children,i=e.tag,s=l(e,["className","children","tag"]),u=c("card-subtitle",r);return a.createElement(i,o({className:u},s,{ref:t}),n)})).defaultProps={tag:"p"},a.forwardRef((function(e,t){var r=e.className,n=e.children,i=e.tag,s=l(e,["className","children","tag"]),u=c("card-title",r);return a.createElement(i,o({className:u},s,{ref:t}),n)})).defaultProps={tag:"h5"},a.forwardRef((function(e,t){var r=e.className,n=e.children,i=e.tag,s=l(e,["className","children","tag"]),u=c("card-text",r);return a.createElement(i,o({className:u},s,{ref:t}),n)})).defaultProps={tag:"p"},a.forwardRef((function(e,t){var r=e.className,n=e.children,i=e.tag,s=l(e,["className","children","tag"]),u=c("card-body",r);return a.createElement(i,o({className:u},s,{ref:t}),n)})).defaultProps={tag:"div"},a.forwardRef((function(e,t){var r=e.className,n=e.children,i=e.border,s=e.background,u=e.tag,d=l(e,["className","children","border","background","tag"]),f=c("card-footer",i&&"border-".concat(i),s&&"bg-".concat(s),r);return a.createElement(u,o({className:f},d,{ref:t}),n)})).defaultProps={tag:"div"};a.forwardRef((function(e,t){var r=e.className,n=e.children,i=e.tag,s=l(e,["className","children","tag"]),u=c("card-img-overlay",r);return a.createElement(i,o({className:u},s,{ref:t}),n)})).defaultProps={tag:"div"};a.forwardRef((function(e,t){var r=e.className,n=e.children,i=e.tag,s=l(e,["className","children","tag"]),u=c("card-group",r);return a.createElement(i,o({className:u},s,{ref:t}),n)})).defaultProps={tag:"div"},a.forwardRef((function(e,t){var r=e.className,n=e.tag,i=e.horizontal,s=e.horizontalSize,u=e.light,d=e.numbered,f=e.children,m=e.small,p=l(e,["className","tag","horizontal","horizontalSize","light","numbered","children","small"]),v=c("list-group",i&&(s?"list-group-horizontal-".concat(s):"list-group-horizontal"),u&&"list-group-light",d&&"list-group-numbered",m&&"list-group-small",r);return a.createElement(n,o({className:v,ref:t},p),f)})).defaultProps={tag:"ul"},a.forwardRef((function(e,t){var r=e.className,n=e.tag,i=e.active,s=e.disabled,u=e.action,d=e.color,f=e.children,m=e.noBorders,p=l(e,["className","tag","active","disabled","action","color","children","noBorders"]),v="button"===n,g=c("list-group-item",i&&"active",s&&!v&&"disabled",u&&"list-group-item-action",d&&"list-group-item-".concat(d),m&&"border-0",r);return a.createElement(n,o({className:g,disabled:v&&s,ref:t},p),f)})).defaultProps={tag:"li"};var f=a.forwardRef((function(e,t){var r=e.around,n=e.between,i=e.bottom,s=e.center,u=e.children,d=e.className,f=e.evenly,m=e.end,p=e.middle,v=e.start,g=e.tag,h=e.top,b=l(e,["around","between","bottom","center","children","className","evenly","end","middle","start","tag","top"]),N=c("row",r&&"justify-content-around",n&&"justify-content-between",i&&"align-self-end",s&&"justify-content-center",f&&"justifty-content-evenly",m&&"justify-content-end",p&&"align-self-center",v&&"justify-content-start",h&&"align-self-start",d);return a.createElement(g,o({className:N},b,{ref:t}),u)}));f.defaultProps={tag:"div"};var m=a.forwardRef((function(e,t){var r=e.className,n=e.children,i=e.tag,s=e.variant,u=e.color,d=e.blockquote,f=e.note,m=e.noteColor,p=e.listUnStyled,v=e.listInLine,g=l(e,["className","children","tag","variant","color","blockquote","note","noteColor","listUnStyled","listInLine"]),h=c(s&&s,d&&"blockquote",f&&"note",u&&"text-".concat(u),m&&"note-".concat(m),p&&"list-unstyled",v&&"list-inline",r);return d&&(i="blockquote"),(p||v)&&(i="ul"),a.createElement(i,o({className:h,ref:t},g),n)}));m.defaultProps={tag:"p"};a.forwardRef((function(e,t){var r=e.className,n=e.color,i=e.uppercase,s=e.bold,u=e.children,d=l(e,["className","color","uppercase","bold","children"]),f=c("breadcrumb",s&&"font-weight-bold",n&&"text-".concat(n),i&&"text-uppercase",r);return a.createElement("nav",{"aria-label":"breadcrumb"},a.createElement("ol",o({className:f,ref:t},d),u))}));a.forwardRef((function(e,t){var r=e.className,n=e.active,i=e.current,s=e.children,u=l(e,["className","active","current","children"]),d=c("breadcrumb-item",n&&"active",r);return a.createElement("li",o({className:d,ref:t,"aria-current":n&&i},u),s)})).defaultProps={current:"page"};var p=a.forwardRef((function(e,t){var r,n=e.className,i=e.children,s=e.light,u=e.dark,d=e.scrolling,f=e.fixed,m=e.sticky,p=e.scrollingNavbarOffset,v=e.color,g=e.transparent,h=e.expand,b=e.tag,N=e.bgColor,w=l(e,["className","children","light","dark","scrolling","fixed","sticky","scrollingNavbarOffset","color","transparent","expand","tag","bgColor"]),y=(0,a.useState)(!1),E=y[0],x=y[1],k=c(((r={"navbar-light":s,"navbar-dark":u,"scrolling-navbar":d||p,"top-nav-collapse":E})["text-".concat(v)]=v&&g?E:v,r),f&&"fixed-".concat(f),m&&"sticky-top","navbar",h&&function(e){if(!1!==e)return"navbar-expand-".concat(e)}(h),N&&"bg-".concat(N),n),C=(0,a.useCallback)((function(){p&&window.pageYOffset>p?x(!0):x(!1)}),[p]);return(0,a.useEffect)((function(){return(d||p)&&window.addEventListener("scroll",C),function(){window.removeEventListener("scroll",C)}}),[C,d,p]),a.createElement(b,o({className:k,role:"navigation"},w,{ref:t}),i)}));p.defaultProps={tag:"nav"},a.forwardRef((function(e,t){var r=e.children,n=e.className,i=e.disabled,s=e.active,u=e.tag,d=l(e,["children","className","disabled","active","tag"]),f=c("nav-link",i?"disabled":s?"active":"",n);return a.createElement(u,o({"data-test":"nav-link",className:f,style:{cursor:"pointer"},ref:t},d),r)})).defaultProps={tag:"a",active:!1,className:"",disabled:!1},a.forwardRef((function(e,t){var r=e.className,n=e.children,i=e.tag,s=l(e,["className","children","tag"]),u=c("navbar-brand",r);return a.createElement(i,o({className:u,ref:t},s),n)})).defaultProps={tag:"a"},a.forwardRef((function(e,t){var r=e.children,n=e.className,i=e.active,s=e.text,u=e.tag,d=l(e,["children","className","active","text","tag"]),f=c("nav-item",i&&"active",s&&"navbar-text",n);return a.createElement(u,o({},d,{className:f,ref:t}),r)})).defaultProps={tag:"li"},a.forwardRef((function(e,t){var r=e.children,n=e.className,i=e.right,s=e.fullWidth,u=e.left,d=e.tag,f=l(e,["children","className","right","fullWidth","left","tag"]),m=c("navbar-nav",s&&"w-100",i&&"ms-auto",u&&"me-auto",n);return a.createElement(d,o({className:m,ref:t},f),r)})).defaultProps={tag:"ul",fullWidth:!0},a.forwardRef((function(e,t){var r=e.children,n=e.className,i=e.tag,s=l(e,["children","className","tag"]),u=c("navbar-toggler",n);return a.createElement(i,o({},s,{className:u,ref:t}),r)})).defaultProps={tag:"button"};a.forwardRef((function(e,t){var r=e.children,n=e.bgColor,i=e.color,s=e.className,u=l(e,["children","bgColor","color","className"]),d=c(n&&"bg-".concat(n),i&&"text-".concat(i),s);return a.createElement("footer",o({className:d},u,{ref:t}),r)})),a.forwardRef((function(e,t){var r=e.children,n=e.size,i=e.circle,s=e.center,u=e.end,d=e.start,f=e.className,m=l(e,["children","size","circle","center","end","start","className"]),p=c("pagination",s&&"justify-content-center",i&&"pagination-circle",u&&"justify-content-end",n&&"pagination-".concat(n),d&&"justify-content-start",f);return a.createElement("ul",o({className:p},m,{ref:t}),r)}));a.forwardRef((function(e,t){var r=e.children,n=e.className,i=e.tag,s=l(e,["children","className","tag"]),u=c("page-link",n);return a.createElement(i,o({className:u},s,{ref:t}),r)})).defaultProps={tag:"a"};a.forwardRef((function(e,t){var r=e.children,n=e.className,i=e.active,s=e.disabled,u=l(e,["children","className","active","disabled"]),d=c("page-item",i&&"active",s&&"disabled",n);return a.createElement("li",o({className:d},u,{ref:t}),r)}));var v=a.forwardRef((function(e,t){var r,n=e.animated,i=e.children,s=e.className,u=e.style,d=e.tag,f=e.valuenow,m=e.valuemax,p=e.striped,v=e.bgColor,g=e.valuemin,h=e.width,b=l(e,["animated","children","className","style","tag","valuenow","valuemax","striped","bgColor","valuemin","width"]),N=c("progress-bar",v&&"bg-".concat(v),p&&"progress-bar-striped",n&&"progress-bar-animated",s),w=o({width:"".concat(h,"%")},u);return a.createElement(d,o({className:N,style:w,ref:t,role:"progressbar"},b,{"aria-valuenow":null!==(r=Number(h))&&void 0!==r?r:f,"aria-valuemin":Number(g),"aria-valuemax":Number(m)}),i)}));v.defaultProps={tag:"div"},a.forwardRef((function(e,t){var r=e.className,n=e.children,i=e.tag,s=e.height,u=e.style,d=l(e,["className","children","tag","height","style"]),f=c("progress",r),m=o({height:"".concat(s,"px")},u);return a.createElement(i,o({className:f,ref:t,style:m},d),a.Children.map(n,(function(e){return a.isValidElement(e)&&e.type===v?e:void console.error("Progress component only allows ProgressBar as child")})))})).defaultProps={tag:"div"};var g=function(e){var t=e.className,r=e.inputRef,n=e.labelClass,i=e.wrapperClass,s=e.labelStyle,u=e.wrapperTag,d=e.wrapperStyle,f=e.label,m=e.inline,p=e.btn,v=e.id,g=e.btnColor,h=e.disableWrapper,b=e.toggleSwitch,N=l(e,["className","inputRef","labelClass","wrapperClass","labelStyle","wrapperTag","wrapperStyle","label","inline","btn","id","btnColor","disableWrapper","toggleSwitch"]),w="form-check-input",y="form-check-label";p&&(w="btn-check",y=g?"btn btn-".concat(g):"btn btn-primary");var E=c(f&&!p&&"form-check",m&&!p&&"form-check-inline",b&&"form-switch",i),x=c(w,t),k=c(y,n),C=a.createElement(a.Fragment,null,a.createElement("input",o({className:x,id:v,ref:r},N)),f&&a.createElement("label",{className:k,style:s,htmlFor:v},f));return a.createElement(a.Fragment,null,h?C:a.createElement(u,{style:d,className:E},C))};g.defaultProps={wrapperTag:"div"};var h=function(e){var t=l(e,[]);return a.createElement(g,o({type:"checkbox"},t))},b=function(e){var t=e.className,r=e.children,n=e.show,i=e.id,s=e.navbar,u=e.tag,d=e.collapseRef,f=e.style,m=l(e,["className","children","show","id","navbar","tag","collapseRef","style"]),p=(0,a.useState)(!1),v=p[0],g=p[1],h=(0,a.useState)(void 0),b=h[0],N=h[1],w=(0,a.useState)(!1),y=w[0],E=w[1],x=c(y?"collapsing":"collapse",!y&&v&&"show",s&&"navbar-collapse",t),k=(0,a.useRef)(null),C=null!=d?d:k,R=(0,a.useCallback)((function(){v&&N(void 0)}),[v]);return(0,a.useEffect)((function(){var e;void 0===b&&v&&N(null===(e=null==C?void 0:C.current)||void 0===e?void 0:e.scrollHeight)}),[b,v,C]),(0,a.useEffect)((function(){g(n),v&&E(!0);var e=setTimeout((function(){E(!1)}),350);return function(){clearTimeout(e)}}),[n,v]),(0,a.useEffect)((function(){var e;N(v?null===(e=null==C?void 0:C.current)||void 0===e?void 0:e.scrollHeight:0)}),[v,C]),(0,a.useEffect)((function(){return window.addEventListener("resize",R),function(){window.removeEventListener("resize",R)}}),[R]),a.createElement(u,o({style:o({height:b},f),id:i,className:x},m,{ref:C}),r)};b.defaultProps={tag:"div"};(0,a.createContext)(null);function N(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===r&&a.firstChild?a.insertBefore(n,a.firstChild):a.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}N(".dropdown-menu .active {\r\n  color: #16181b;\r\n  background-color: #eee;\r\n}\r\n");N(".dropdown-menu [data-active='true'] a.dropdown-item,\r\n.dropdown-menu .dropdown-item:focus,\r\n.dropdown-menu li:focus .dropdown-item :not(.disabled) {\r\n  color: #16181b;\r\n  background-color: #eee;\r\n}\r\n\r\n.dropdown-menu li:focus {\r\n  outline: none;\r\n}\r\n\r\n.dropdown-menu.dropdown-menu-dark [data-active='true'] a.dropdown-item,\r\n.dropdown-menu.dropdown-menu-dark .dropdown-item:focus,\r\n.dropdown-menu.dropdown-menu-dark li:focus .dropdown-item {\r\n  color: #fff;\r\n  background-color: #1266f1;\r\n}\r\n\r\n.btn-group.dropstart > .dropdown-menu {\r\n  right: 0 !important;\r\n}\r\n");a.forwardRef((function(e,t){var r=e.className,n=e.centered,i=e.children,s=e.size,u=e.scrollable,d=e.tag,f=l(e,["className","centered","children","size","scrollable","tag"]),m=c("modal-dialog",u&&"modal-dialog-scrollable",n&&"modal-dialog-centered",s&&"modal-".concat(s),r);return a.createElement(d,o({className:m},f,{ref:t}),i)})).defaultProps={tag:"div"},a.forwardRef((function(e,t){var r=e.className,n=e.children,i=e.tag,s=l(e,["className","children","tag"]),u=c("modal-content",r);return a.createElement(i,o({className:u},s,{ref:t}),n)})).defaultProps={tag:"div"},a.forwardRef((function(e,t){var r=e.className,n=e.children,i=e.tag,s=l(e,["className","children","tag"]),u=c("modal-header",r);return a.createElement(i,o({className:u},s,{ref:t}),n)})).defaultProps={tag:"div"},a.forwardRef((function(e,t){var r=e.className,n=e.children,i=e.tag,s=l(e,["className","children","tag"]),u=c("modal-title",r);return a.createElement(i,o({className:u},s,{ref:t}),n)})).defaultProps={tag:"h5"},a.forwardRef((function(e,t){var r=e.className,n=e.children,i=e.tag,s=l(e,["className","children","tag"]),u=c("modal-body",r);return a.createElement(i,o({className:u},s,{ref:t}),n)})).defaultProps={tag:"div"},a.forwardRef((function(e,t){var r=e.className,n=e.children,i=e.tag,s=l(e,["className","children","tag"]),u=c("modal-footer",r);return a.createElement(i,o({className:u},s,{ref:t}),n)})).defaultProps={tag:"div"};a.createContext({activeElement:null,setTargets:null});var w=function(e){var t=e.value,r=e.min,n=e.max,o=e.showThumb,l=Number(t),i=(0,a.useState)(100*(l||0-Number(r))/(Number(n)-Number(r))),s=i[0],u=i[1],d=c("thumb",o&&"thumb-active");return(0,a.useEffect)((function(){u(100*(Number(t)-Number(r))/(Number(n)-Number(r)))}),[t,n,r]),a.createElement("span",{className:d,style:{left:"calc(".concat(s,"% + (").concat(8-.15*s,"px))")}},a.createElement("span",{className:"thumb-value"},t))};w.defaultProps={min:"0",max:"100"};var y=a.forwardRef((function(e,t){var r=e.className,n=e.children,i=e.noBorder,s=e.textBefore,u=e.textAfter,d=e.noWrap,f=e.tag,m=e.textTag,p=e.textClass,v=e.size,g=e.textProps,h=l(e,["className","children","noBorder","textBefore","textAfter","noWrap","tag","textTag","textClass","size","textProps"]),b=c("input-group",d&&"flex-nowrap",v&&"input-group-".concat(v),r),N=c("input-group-text",i&&"border-0",p),w=function(e){return a.createElement(a.Fragment,null,e&&Array.isArray(e)?e.map((function(e,t){return a.createElement(m,o({key:t,className:N},g),e)})):a.createElement(m,o({className:N},g),e))};return a.createElement(f,o({className:b,ref:t},h),s&&w(s),n,u&&w(u))}));y.defaultProps={tag:"div",textTag:"span"},a.forwardRef((function(e,t){var r=e.className,n=e.children,i=e.isValidated,s=e.onReset,u=e.onSubmit,d=l(e,["className","children","isValidated","onReset","onSubmit"]),f=(0,a.useState)(i),m=f[0],p=f[1],v=c("needs-validation",m&&"was-validated",r);return a.createElement("form",o({className:v,onSubmit:function(e){e.preventDefault(),p(!0),u&&u(e)},onReset:function(e){e.preventDefault(),p(!1),s&&s(e)},ref:t},d),n)})).defaultProps={noValidate:!0};a.forwardRef((function(e,t){var r=e.className,n=e.fill,i=e.pills,s=e.justify,u=e.children,d=l(e,["className","fill","pills","justify","children"]),f=c("nav",i?"nav-pills":"nav-tabs",n&&"nav-fill",s&&"nav-justified",r);return a.createElement("ul",o({className:f,ref:t},d),u)})),a.forwardRef((function(e,t){var r=e.className,n=e.children,i=e.style,s=l(e,["className","children","style"]),u=c("nav-item",r);return a.createElement("li",o({className:u,style:o({cursor:"pointer"},i),role:"presentation",ref:t},s),n)})),a.forwardRef((function(e,t){var r=e.className,n=e.color,i=e.active,s=e.onShow,u=e.onHide,d=e.children,f=l(e,["className","color","active","onShow","onHide","children"]),m=c("nav-link",i&&"active",n&&"bg-".concat(n),r);return(0,a.useEffect)((function(){i?null==s||s():null==u||u()}),[i]),a.createElement("a",o({className:m,ref:t},f),d)}));a.forwardRef((function(e,t){var r=e.className,n=e.tag,i=e.children,s=l(e,["className","tag","children"]),u=c("tab-content",r);return a.createElement(n,o({className:u,ref:t},s),i)})).defaultProps={tag:"div"},a.forwardRef((function(e,t){var r=e.className,n=e.tag,i=e.show,s=e.children,u=l(e,["className","tag","show","children"]),d=(0,a.useState)(!1),f=d[0],m=d[1],p=c("tab-pane","fade",f&&"show",i&&"active",r);return(0,a.useEffect)((function(){var e;return i?e=setTimeout((function(){m(!0)}),100):m(!1),function(){clearTimeout(e)}}),[i]),a.createElement(n,o({className:p,role:"tabpanel",ref:t},u),s)})).defaultProps={tag:"div"};var E=(0,a.createContext)({active:0}),x=function(e){var t=e.imagesCount,r=e.to,n=(0,a.useContext)(E).active;return a.createElement("ol",{className:"carousel-indicators"},Array.from(Array(t)).map((function(e,t){return a.createElement("li",{"data-mdb-target":t,key:t,className:c(n===t&&"active"),onClick:function(){return r(t)}})})))},k=function(e){var t=e.move;return a.createElement(a.Fragment,null,a.createElement("a",{role:"button",className:"carousel-control-prev",onClick:function(){return t("prev")}},a.createElement("span",{className:"carousel-control-prev-icon"}),a.createElement("span",{className:"visually-hidden"},"Previous")),a.createElement("a",{role:"button",className:"carousel-control-next",onClick:function(){return t("next")}},a.createElement("span",{className:"carousel-control-next-icon"}),a.createElement("span",{className:"visually-hidden"},"Next")))},C=function(e){"function"==typeof e&&e()};(function(e){var t=e.fade,r=e.className,n=e.dark,i=e.children,s=e.interval,u=e.keyboard,d=e.touch,f=e.showControls,m=e.showIndicators,p=e.onSlide,v=l(e,["fade","className","dark","children","interval","keyboard","touch","showControls","showIndicators","onSlide"]),g=(0,a.useRef)([]),h=(0,a.useRef)(null),b=(0,a.useRef)(0),N=(0,a.useRef)(!1),w=(0,a.useState)(0),y=w[0],R=w[1],S=(0,a.useState)(0),P=S[0],O=S[1],z=(0,a.useState)({initialX:0,initialY:0}),j=z[0],L=z[1],T=(0,a.useState)(!1),A=T[0],I=T[1],M=(0,a.useRef)(null),B=c("carousel","slide",t&&"carousel-fade",n&&"carousel-dark",r),D=function(){h.current&&(clearInterval(h.current),h.current=null)},V=(0,a.useCallback)((function(e,t){if(void 0!==t)b.current=t,R(t);else{var r=y===P-1?0:y+1,a=0===y?P-1:y-1;b.current="next"===e?r:a,R("next"===e?r:a)}}),[y,P]),X=(0,a.useCallback)((function(e,t,r){var a;I(!0);var n=g.current[y],c=Boolean(h.current),o="next"===e,l=o?"carousel-item-start":"carousel-item-end",i=o?"carousel-item-next":"carousel-item-prev";t.classList.contains("active")?N.current=!1:(V(e,r),n&&t&&(N.current=!0,c&&D(),(null===(a=M.current)||void 0===a?void 0:a.classList.contains("slide"))?(t.classList.add(i),t.offsetHeight,n.classList.add(l),t.classList.add(l),function(e,t,r){if(void 0===r&&(r=!0),r){var a=function(e){if(!e)return 0;var t=window.getComputedStyle(e),r=t.transitionDuration,a=t.transitionDelay,n=Number.parseFloat(r),c=Number.parseFloat(a);return n||c?(r=r.split(",")[0],a=a.split(",")[0],1e3*(Number.parseFloat(r)+Number.parseFloat(a))):0}(t);t.addEventListener("transitionend",(function(){return C(e)}),{once:!0}),function(e,t){var r=!1,a=t+5;e.addEventListener("transitionend",(function t(){r=!0,e.removeEventListener("transitionend",t)})),setTimeout((function(){r||function(e){e.dispatchEvent(new Event("transitionend"))}(e)}),a)}(t,a)}else C(e)}((function(){I(!1),t.classList.remove(l,i),t.classList.add("active"),n.classList.remove("active",i,l),N.current=!1}),n,!0)):(n.classList.remove("active"),t.classList.add("active"),N.current=!1)))}),[M,y,V]),H=function(e){N.current||(N.current=!0,setTimeout((function(){N.current=!1}),e))},Y=(0,a.useCallback)((function(e){var t="prev"===e,r=(b.current+(t?-1:1))%P,a=g.current;return-1===r?a[P-1]:a[r]}),[P]),F=(0,a.useCallback)((function(e){if(!N.current){H(600);var t=Y(e);X(e,t)}}),[Y,X]),_=(0,a.useCallback)((function(){var e,t,r,a=document.visibilityState,n=document.hidden;if(a){if(n||(e=M.current,t=getComputedStyle(e),r=getComputedStyle(null==e?void 0:e.parentNode),"none"===t.display||"none"===r.display||"hidden"===t.visibility))return;return F("next")}F("next")}),[M,F]),W=(0,a.useCallback)((function(){h.current&&(clearInterval(h.current),h.current=null),h.current=setInterval(_,s)}),[_,s]),q=(0,a.useCallback)((function(e){switch(e.key){case"ArrowLeft":e.preventDefault(),F("prev");break;case"ArrowRight":e.preventDefault(),F("next")}}),[F]);return(0,a.useEffect)((function(){if(u)return window.addEventListener("keydown",q),function(){window.removeEventListener("keydown",q)}}),[q,u]),(0,a.useEffect)((function(){var e=function(e){return Array.from(null==e?void 0:e.querySelectorAll(".carousel-item"))}(M.current);g.current=e,O(e.length)}),[M]),(0,a.useEffect)((function(){null==p||p()}),[A,p]),(0,a.useEffect)((function(){W()}),[W]),a.createElement("div",o({onTouchStart:function(e){d&&L({initialX:e.touches[0].clientX,initialY:e.touches[0].clientY})},onTouchMove:function(e){N.current=!0;var t=j.initialX,r=j.initialY;if(t&&r){var a=t-e.touches[0].clientX,n=r-e.touches[0].clientY;Math.abs(a)>Math.abs(n)&&F(a>0?"prev":"next"),L({initialX:0,initialY:0})}},onTouchEnd:function(){N.current=!1},onMouseEnter:D,onMouseLeave:W,className:B,ref:M},v),a.createElement("div",{className:"carousel-inner"},a.createElement(E.Provider,{value:{active:y}},m&&a.createElement(x,{to:function(e){if(!(N.current||(H(700),e>P-1||e<0))){var t=function(e){return{direction:e>b.current?"next":"prev",nextElement:g.current[e]}}(e),r=t.direction,a=t.nextElement;X(r,a,e)}},imagesCount:P}),i,f&&a.createElement(k,{move:F}))))}).defaultProps={fade:!1,interval:5e3,touch:!0,keyboard:!1};var R=a.createContext({activeItem:0,setActiveItem:null,alwaysOpen:!1,initialActive:0}),S=a.forwardRef((function(e,t){var r=e.alwaysOpen,n=e.borderless,i=e.className,s=e.flush,u=e.initialActive,d=e.tag,f=e.children,m=e.onChange,p=l(e,["alwaysOpen","borderless","className","flush","initialActive","tag","children","onChange"]),v=c("accordion",s&&"accordion-flush",n&&"accordion-borderless",i),g=(0,a.useState)(u),h=g[0],b=g[1];return(0,a.useEffect)((function(){h&&m&&m(h)}),[m,h]),a.createElement(d,o({className:v,ref:t},p),a.createElement(R.Provider,{value:{activeItem:h,setActiveItem:b,alwaysOpen:r,initialActive:u}},f))}));S.defaultProps={tag:"div",initialActive:0};var P=a.forwardRef((function(e,t){var r=e.className,n=e.bodyClassName,i=e.bodyStyle,s=e.headerClassName,u=e.collapseId,d=e.headerTitle,f=e.headerStyle,m=e.tag,p=e.children,v=l(e,["className","bodyClassName","bodyStyle","headerClassName","collapseId","headerTitle","headerStyle","tag","children"]),g=(0,a.useContext)(R),h=g.activeItem,N=g.setActiveItem,w=g.alwaysOpen,y=g.initialActive,E=(0,a.useState)(y),x=E[0],k=E[1],C=c("accordion-item",r),S=c("accordion-header",s),P=c("accordion-body",n),O=c("accordion-button",w?u!==x&&"collapsed":u!==h&&"collapsed");return a.createElement(m,o({className:C,ref:t},v),a.createElement("h2",{className:S,style:f},a.createElement("button",{onClick:function(){return e=u,void(w?k(e!==x?e:0):N(e!==h?e:0));var e},className:O,type:"button"},d)),a.createElement(b,{id:u.toString(),show:w?x===u:h===u},a.createElement("div",{className:P,style:i},p)))}));P.defaultProps={tag:"div"}},77:function(e){var t="undefined"!==typeof Element,r="function"===typeof Map,a="function"===typeof Set,n="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function c(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var l,i,s,u;if(Array.isArray(e)){if((l=e.length)!=o.length)return!1;for(i=l;0!==i--;)if(!c(e[i],o[i]))return!1;return!0}if(r&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(u=e.entries();!(i=u.next()).done;)if(!o.has(i.value[0]))return!1;for(u=e.entries();!(i=u.next()).done;)if(!c(i.value[1],o.get(i.value[0])))return!1;return!0}if(a&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(u=e.entries();!(i=u.next()).done;)if(!o.has(i.value[0]))return!1;return!0}if(n&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((l=e.length)!=o.length)return!1;for(i=l;0!==i--;)if(e[i]!==o[i])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((l=(s=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(i=l;0!==i--;)if(!Object.prototype.hasOwnProperty.call(o,s[i]))return!1;if(t&&e instanceof Element)return!1;for(i=l;0!==i--;)if(("_owner"!==s[i]&&"__v"!==s[i]&&"__o"!==s[i]||!e.$$typeof)&&!c(e[s[i]],o[s[i]]))return!1;return!0}return e!==e&&o!==o}e.exports=function(e,t){try{return c(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},9135:function(e,t,r){"use strict";r.d(t,{SRX:function(){return d},kUi:function(){return f},Xws:function(){return m}});var a=r(2791),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},c=a.createContext&&a.createContext(n),o=function(){return o=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},o.apply(this,arguments)},l=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r};function i(e){return e&&e.map((function(e,t){return a.createElement(e.tag,o({key:t},e.attr),i(e.child))}))}function s(e){return function(t){return a.createElement(u,o({attr:o({},e.attr)},t),i(e.child))}}function u(e){var t=function(t){var r,n=e.attr,c=e.size,i=e.title,s=l(e,["attr","size","title"]),u=c||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,s,{className:r,style:o(o({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),i&&a.createElement("title",null,i),e.children)};return void 0!==c?a.createElement(c.Consumer,null,(function(e){return t(e)})):t(n)}function d(e){return s({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"}}]})(e)}function f(e){return s({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"}}]})(e)}function m(e){return s({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"}}]})(e)}}}]);
//# sourceMappingURL=61.b72f5c02.chunk.js.map