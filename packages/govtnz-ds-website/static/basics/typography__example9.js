!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}([function(e,t){e.exports=React},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(0));t.default=function(e){var t=e.children;return o.default.createElement("li",null,void 0!==t?t:o.default.createElement(o.default.Fragment,null,"Example text"))}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(0));t.default=function(e){var t=e.children;return o.default.createElement("ol",{className:"g-ol"},void 0!==t?t:o.default.createElement(o.default.Fragment,null,"Example text"))}},function(e,t){e.exports=ReactDOM},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(0)),u={large:"g-body-l",medium:"g-body-m",small:"g-body-s","x-small":"g-body-xs"};t.default=function(e){var t=e.styleSize,r=e.marginBottom0,n=e.children;return o.default.createElement("p",{className:"g-body"+(void 0!==u[t]?" "+u[t]:"")+(r?" g-body-marginBottom0":"")},void 0!==n?n:o.default.createElement(o.default.Fragment,null,"Example text"))}},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),u=r(3),a=r.n(u),i=r(4),l=r.n(i),c=r(2),f=r.n(c),s=r(1),p=r.n(s);function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,u=void 0;try{for(var a,i=e[Symbol.iterator]();!(n=(a=i.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,u=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw u}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function j(e,t,r){return t&&O(e.prototype,t),r&&O(e,r),e}function _(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=x(e);if(t){var o=x(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return S(this,r)}}function S(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?w(e):t}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var C=function(e){var t=e.children;return o.a.createElement(n.Fragment,null,t)},D=function(e){return o.a.createElement(C,M({title:"Example: Numbered lists (Typography)"},T({})),o.a.createElement(l.a,M({styleSize:"medium"},T({})),"To sign up, you need to complete four steps."),o.a.createElement(f.a,T({}),o.a.createElement(p.a,T({}),"Prove your identity, such as with RealMe"),o.a.createElement(p.a,T({}),"Provide a passport-sized photo"),o.a.createElement(p.a,T({}),"Enter your address details:",o.a.createElement(f.a,T({}),o.a.createElement(p.a,T({}),"Postal address"),o.a.createElement(p.a,T({}),"Delivery address"))),o.a.createElement(p.a,T({}),"Confirm payment methods")))},R=o.a.createContext(void 0),T=(n.Component,o.a.Component,o.a.Component,function(e){var t=d(Object(n.useState)(e&&e.value),2),r=t[0],o=t[1],u=d(Object(n.useState)(e&&e.value2),2),a=u[0],i=u[1],l=d(Object(n.useState)(e&&e.value3),2),c=l[0],f=l[1];return{value:r,value2:a,value3:c,onChange:function(e){return o(e.target.value)},onChange2:function(e){return i(e.target.value)},onChange3:function(e){return f(e.target.value)}}});document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#root");e?a.a.hydrate(o.a.createElement(D,null),e,window.afterRender):console.error("Couldn't find app mount point ","#root")}))}]);