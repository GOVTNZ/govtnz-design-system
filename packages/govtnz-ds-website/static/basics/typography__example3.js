!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(1),l=n.n(o),u={styleSize:{xlarge:"g-heading-xl",large:"g-heading-l",medium:"g-heading-m",small:"g-heading-s",xsmall:"g-heading-xs",xxsmall:"g-heading-xxs"}},i=function(e){var t=e.styleSize,n=e.marginBottom8,a=e.id,o=e.children;return r.createElement("h1",{className:"".concat(void 0!==u.styleSize[t]?u.styleSize[t]:"").concat(n?" g-heading-mb-8":""),id:a},void 0!==o?o:r.createElement(r.Fragment,null,"Example text"))},c=function(e){var t=e.children;return r.createElement("span",{className:"g-caption-xl"},void 0!==t?t:r.createElement(r.Fragment,null,"Example text"))};function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var l,u=e[Symbol.iterator]();!(r=(l=u.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s=function(e){var t=e.children;return a.a.createElement(r.Fragment,null,t)},g=function(e){return a.a.createElement(s,d({title:"Example: Headings with captions inside the h1 (Typography)"},p({})),a.a.createElement(i,d({styleSize:"xlarge"},p({})),a.a.createElement(c,p({}),"caption-xl"),"g-heading-xl"))},p=function(e){var t=f(Object(r.useState)(e&&e.value),2),n=t[0],a=t[1],o=f(Object(r.useState)(e&&e.value2),2),l=o[0],u=o[1],i=f(Object(r.useState)(e&&e.value3),2),c=i[0],d=i[1];return{value:n,value2:l,value3:c,onChange:function(e){return a(e.target.value)},onChange2:function(e){return u(e.target.value)},onChange3:function(e){return d(e.target.value)}}};document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("#root");e?l.a.hydrate(a.a.createElement(g,null),e,window.afterRender):console.error("Couldn't find app mount point ","#root")})}]);