!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(1),l=r.n(o),c={target:{Blank:"_blank",Top:"_top",Self:"_self",Parent:"_parent"},target2:{Blank:"_blank",Top:"_top",Self:"_self",Parent:"_parent"}},u=function(e){var t=e.href,r=e.rel,a=e.target,o=e.href2,l=e.rel2,u=e.target2;return n.createElement("div",{className:"g-breadcrumbs"},n.createElement("ol",{className:"g-breadcrumbs__list"},n.createElement("li",{className:"g-breadcrumbs__list-item"},n.createElement("a",{className:"g-breadcrumbs__link",href:t,rel:r,target:c.target[a]},"Section")),n.createElement("li",{className:"g-breadcrumbs__list-item"},n.createElement("a",{className:"g-breadcrumbs__link",href:o,rel:l,target:c.target2[u]},"Sub-section"))))},i=function(e){var t=e.children;return a.a.createElement(n.Fragment,null,t)},f=function(e){return a.a.createElement(i,{},a.a.createElement(u,{}))};document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("#root");e?l.a.render(a.a.createElement(f,null),e):console.error("Couldn't find app mount point ","#root")})}]);