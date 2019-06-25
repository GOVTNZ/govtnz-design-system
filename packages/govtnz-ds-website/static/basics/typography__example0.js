!function(e){var t={};function n(a){if(t[a])return t[a].exports;var l=t[a]={i:a,l:!1,exports:{}};return e[a].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(a,l,function(t){return e[t]}.bind(null,l));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(1),i=n.n(r),g={styleSize:{xlarge:"g-heading-xl",large:"g-heading-l",medium:"g-heading-m",small:"g-heading-s",xsmall:"g-heading-xs",xxsmall:"g-heading-xxs"}},o=function(e){var t=e.styleSize,n=e.marginBottom8,l=e.id,r=e.children;return a.createElement("h1",{className:"".concat(void 0!==g.styleSize[t]?g.styleSize[t]:"").concat(n?" g-heading-mb-8":""),id:l},void 0!==r?r:a.createElement(a.Fragment,null,"Example text"))},c={styleSize:{xlarge:"g-heading-xl",large:"g-heading-l",medium:"g-heading-m",small:"g-heading-s",xsmall:"g-heading-xs",xxsmall:"g-heading-xxs"}},m=function(e){var t=e.styleSize,n=e.marginBottom8,l=e.id,r=e.children;return a.createElement("h2",{className:"".concat(void 0!==c.styleSize[t]?c.styleSize[t]:"").concat(n?" g-heading-mb-8":""),id:l},void 0!==r?r:a.createElement(a.Fragment,null,"Example text"))},d={styleSize:{xlarge:"g-heading-xl",large:"g-heading-l",medium:"g-heading-m",small:"g-heading-s",xsmall:"g-heading-xs",xxsmall:"g-heading-xxs"}},s=function(e){var t=e.styleSize,n=e.marginBottom8,l=e.id,r=e.children;return a.createElement("h3",{className:"".concat(void 0!==d.styleSize[t]?d.styleSize[t]:"").concat(n?" g-heading-mb-8":""),id:l},void 0!==r?r:a.createElement(a.Fragment,null,"Example text"))},u={styleSize:{xlarge:"g-heading-xl",large:"g-heading-l",medium:"g-heading-m",small:"g-heading-s",xsmall:"g-heading-xs",xxsmall:"g-heading-xxs"}},x=function(e){var t=e.styleSize,n=e.marginBottom8,l=e.id,r=e.children;return a.createElement("h4",{className:"".concat(void 0!==u.styleSize[t]?u.styleSize[t]:"").concat(n?" g-heading-mb-8":""),id:l},void 0!==r?r:a.createElement(a.Fragment,null,"Example text"))},h={styleSize:{xlarge:"g-heading-xl",large:"g-heading-l",medium:"g-heading-m",small:"g-heading-s",xsmall:"g-heading-xs",xxsmall:"g-heading-xxs"}},f=function(e){var t=e.styleSize,n=e.marginBottom8,l=e.id,r=e.children;return a.createElement("h5",{className:"".concat(void 0!==h.styleSize[t]?h.styleSize[t]:"").concat(n?" g-heading-mb-8":""),id:l},void 0!==r?r:a.createElement(a.Fragment,null,"Example text"))},y={styleSize:{xlarge:"g-heading-xl",large:"g-heading-l",medium:"g-heading-m",small:"g-heading-s",xsmall:"g-heading-xs",xxsmall:"g-heading-xxs"}},v=function(e){var t=e.styleSize,n=e.marginBottom8,l=e.id,r=e.children;return a.createElement("h6",{className:"".concat(void 0!==y.styleSize[t]?y.styleSize[t]:"").concat(n?" g-heading-mb-8":""),id:l},void 0!==r?r:a.createElement(a.Fragment,null,"Example text"))};function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,l=!1,r=void 0;try{for(var i,g=e[Symbol.iterator]();!(a=(i=g.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){l=!0,r=e}finally{try{a||null==g.return||g.return()}finally{if(l)throw r}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var E=function(e){var t=e.children;return l.a.createElement("div",{className:"example__section"},t)},z=function(e){var t=e.children;return l.a.createElement(a.Fragment,null,t)},b=function(e){return l.a.createElement(z,p({title:"Example: Headings (Typography)"},O({})),l.a.createElement(E,O({}),l.a.createElement(o,p({styleSize:"xlarge"},O({})),"g-heading-xl")),l.a.createElement(E,O({}),l.a.createElement(m,p({styleSize:"large"},O({})),"g-heading-l")),l.a.createElement(E,O({}),l.a.createElement(s,p({styleSize:"medium"},O({})),"g-heading-m")),l.a.createElement(E,O({}),l.a.createElement(x,p({styleSize:"small"},O({})),"g-heading-s")),l.a.createElement(E,O({}),l.a.createElement(f,p({styleSize:"xsmall"},O({})),"g-heading-xs")),l.a.createElement(E,O({}),l.a.createElement(v,p({styleSize:"xxsmall"},O({})),"g-heading-xxs")))},O=function(e){var t=S(Object(a.useState)(e&&e.value),2),n=t[0],l=t[1],r=S(Object(a.useState)(e&&e.value2),2),i=r[0],g=r[1],o=S(Object(a.useState)(e&&e.value3),2),c=o[0],m=o[1];return{value:n,value2:i,value3:c,onChange:function(e){return l(e.target.value)},onChange2:function(e){return g(e.target.value)},onChange3:function(e){return m(e.target.value)}}};document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("#root");e?i.a.hydrate(l.a.createElement(b,null),e,window.afterRender):console.error("Couldn't find app mount point ","#root")})}]);