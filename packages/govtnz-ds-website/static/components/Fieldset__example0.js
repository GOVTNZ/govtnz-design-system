!function(e){var t={};function n(r){if(t[r])return t[r].exports;var l=t[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(r,l,function(t){return e[t]}.bind(null,l));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";n.r(t);var r=n(0),l=n.n(r),o=n(1),a=n.n(o),c=function(e){var t=e.hintId,n=e.legend,l=e.hint,o=e.children;return r.createElement("div",{className:"g-fieldsetBlock-form-group"},r.createElement("fieldset",{"aria-describedby":t,className:"g-fieldset"},r.createElement("legend",{className:"g-fieldset__legend"},void 0!==n?n:r.createElement(r.Fragment,null,"Legend text")),void 0!==t?r.createElement(r.Fragment,null,r.createElement("div",{className:"g-fieldsetBlock-hint",id:t},void 0!==l?l:r.createElement(r.Fragment,null,"Hint text"))):"",r.createElement("div",null,void 0!==o?o:r.createElement(r.Fragment,null,"Fieldset contents"))))},i=function(e){var t=e.children;return l.a.createElement(r.Fragment,null,t)},u=function(e){return l.a.createElement(i,{},l.a.createElement(c,{}))};document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("#root");e?a.a.render(l.a.createElement(u,null),e):console.error("Couldn't find app mount point ","#root")})}]);