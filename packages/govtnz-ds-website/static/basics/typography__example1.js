!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(1),o=n.n(l),i={styleSize:{xlarge:"g-heading-xl",large:"g-heading-l",medium:"g-heading-m",small:"g-heading-s",xsmall:"g-heading-xs",xxsmall:"g-heading-xxs"}},u=function(e){var t=e.styleSize,n=e.marginBottom8,a=e.id,l=e.children;return r.createElement("h3",{className:"".concat(void 0!==i.styleSize[t]?i.styleSize[t]:"").concat(n?" g-heading-mb-8":""),id:a},void 0!==l?l:r.createElement(r.Fragment,null,"Example text"))};function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,l=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,l=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw l}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var d=function(e){var t=e.children;return a.a.createElement("div",{className:"example__section"},t)},f=function(e){var t=e.children;return a.a.createElement(r.Fragment,null,t)},m=function(e){return a.a.createElement(f,g(),a.a.createElement(d,g(),a.a.createElement(u,s({},g(),{styleSize:"xlarge"}),"H3 g-heading-xl")),a.a.createElement(d,g(),a.a.createElement(u,s({},g(),{styleSize:"large"}),"H3 g-heading-l")),a.a.createElement(d,g(),a.a.createElement(u,s({},g(),{styleSize:"medium"}),"H3 g-heading-m")),a.a.createElement(d,g(),a.a.createElement(u,s({},g(),{styleSize:"small"}),"H3 g-heading-s")),a.a.createElement(d,g(),a.a.createElement(u,s({},g(),{styleSize:"xsmall"}),"H3 g-heading-xs")),a.a.createElement(d,g(),a.a.createElement(u,s({},g(),{styleSize:"xxsmall"}),"H3 g-heading-xxs")))},g=function(){var e=c(Object(r.useState)(),2),t=e[0],n=e[1],a=c(Object(r.useState)(),2),l=a[0],o=a[1],i=c(Object(r.useState)(),2),u=i[0],s=i[1];return{value:t,value2:l,value3:u,onChange:function(e){return n(e.target.value)},onChange2:function(e){return o(e.target.value)},onChange3:function(e){return s(e.target.value)}}};document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("#root");e?o.a.hydrate(a.a.createElement(m,null),e,window.afterRender):console.error("Couldn't find app mount point ","#root")})}]);