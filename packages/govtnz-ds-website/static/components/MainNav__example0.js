!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}([function(e,t){e.exports=React},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(0));t.default=function(e){var t=e.ariaCurrent,r=e.href,n=e.rel,u=e.target,o=e.onClick,l=e.children;return a.default.createElement("li",{className:"g-main-nav__item"},a.default.createElement("a",{"aria-current":t,className:"g-main-nav__item__link",href:r,rel:n,target:u,onClick:o},void 0!==l?l:a.default.createElement(a.default.Fragment,null," Example item text ")))}},function(e,t){e.exports=ReactDOM},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(0));t.default=function(e){var t=e.children;return a.default.createElement("header",{className:"g-header",role:"header"},void 0!==t?t:a.default.createElement(a.default.Fragment,null," Example header content "))}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(0));t.default=function(e){var t=e.children;return a.default.createElement("nav",{"aria-label":"Main",className:"g-main-nav",role:"navigation"},a.default.createElement("ul",{className:"g-main-nav__ul"},void 0!==t?t:a.default.createElement(a.default.Fragment,null," MainNavItem components go here ")))}},function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),u=r(2),o=r.n(u),l=r(3),i=r.n(l),c=r(4),f=r.n(c),d=r(1),s=r.n(d);function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,u=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){a=!0,u=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw u}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var y=function(e){var t=e.children;return a.a.createElement(n.Fragment,null,t)},h=function(e){return a.a.createElement(y,p({title:"Example: MainNav in a Header"},b({})),a.a.createElement(i.a,b({}),a.a.createElement(f.a,b({}),a.a.createElement(s.a,p({href:"/"},b({})),"Home"),a.a.createElement(s.a,p({href:"/about"},b({})),"About"),a.a.createElement(s.a,p({href:"/contact"},b({})),"Contact"))))},b=function(e){var t=m(Object(n.useState)(e&&e.value),2),r=t[0],a=t[1],u=m(Object(n.useState)(e&&e.value2),2),o=u[0],l=u[1],i=m(Object(n.useState)(e&&e.value3),2),c=i[0],f=i[1];return{value:r,value2:o,value3:c,onChange:function(e){return a(e.target.value)},onChange2:function(e){return l(e.target.value)},onChange3:function(e){return f(e.target.value)}}};document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#root");e?o.a.hydrate(a.a.createElement(h,null),e,window.afterRender):console.error("Couldn't find app mount point ","#root")}))}]);