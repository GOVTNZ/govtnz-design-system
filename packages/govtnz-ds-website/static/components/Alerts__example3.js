!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(0)),a={info:"g-alert--info",warning:"g-alert--warning",success:"g-alert--success",error:"g-alert--error"};t.default=function(e){var t=e.mode,r=e.level,n=e.children,u=e.headingId;return o.default.createElement(o.default.Fragment,null,"live"===t?o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{"aria-atomic":"true","aria-live":"polite",role:"note"},o.default.createElement("div",{className:"g-alert"+(void 0!==a[r]?" "+a[r]:"")},void 0!==n?n:o.default.createElement(o.default.Fragment,null," Example alert content ")))):"","live"!==t?o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{"aria-labelledby":u,role:"note",tabIndex:-1},o.default.createElement("div",{className:"g-alert"+(void 0!==a[r]?" "+a[r]:"")},void 0!==n?n:o.default.createElement(o.default.Fragment,null," Example alert content ")))):"")}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(0)),a={xlarge:"g-heading-xl",large:"g-heading-l",medium:"g-heading-m",small:"g-heading-s",xsmall:"g-heading-xs",xxsmall:"g-heading-xxs"};t.default=function(e){var t=e.styleSize,r=e.marginBottom8,n=e.marginBottom0,u=e.id,l=e.children;return o.default.createElement("h2",{className:"g-heading"+(void 0!==a[t]?" "+a[t]:"")+(r?" g-heading-mb-8":"")+(n?" g-heading-mb-0":""),id:u},void 0!==l?l:o.default.createElement(o.default.Fragment,null,"Example text"))}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(0)),a={styleSize:{large:"g-p-body-l",medium:"g-p-body-m",small:"g-p-body-s","x-small":"g-p-body-xs"}};t.default=function(e){var t=e.styleSize,r=e.children;return o.default.createElement("p",{className:void 0!==a.styleSize[t]?a.styleSize[t]:""},void 0!==r?r:o.default.createElement(o.default.Fragment,null,"Example text"))}},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(1),u=r.n(a),l=r(2),i=r.n(l),c=r(3),f=r.n(c),d=r(4),s=r.n(d);function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var u,l=e[Symbol.iterator]();!(n=(u=l.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==l.return||l.return()}finally{if(o)throw a}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function j(e,t,r){return t&&O(e.prototype,t),r&&O(e,r),e}function _(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=P(e);if(t){var o=P(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return S(this,r)}}function S(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?w(e):t}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var D=function(e){var t=e.children;return o.a.createElement(n.Fragment,null,t)},C=function(e){return o.a.createElement(D,M({title:"Example title: Warning alert - Live"},F({})),o.a.createElement(i.a,M({mode:"live",level:"info",headingId:"heading1"},F({})),o.a.createElement(f.a,M({id:"heading1"},F({})),"Warning: The option you’ve selected is for people aged 65 or over only"),o.a.createElement(s.a,F({}),"You’ll need to provide evidence of your date of birth when you submit your application.")))},R=o.a.createContext(void 0),F=(n.Component,o.a.Component,function(e){var t=p(Object(n.useState)(e&&e.value),2),r=t[0],o=t[1],a=p(Object(n.useState)(e&&e.value2),2),u=a[0],l=a[1],i=p(Object(n.useState)(e&&e.value3),2),c=i[0],f=i[1];return{value:r,value2:u,value3:c,onChange:function(e){return o(e.target.value)},onChange2:function(e){return l(e.target.value)},onChange3:function(e){return f(e.target.value)}}});document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#root");e?u.a.hydrate(o.a.createElement(C,null),e,window.afterRender):console.error("Couldn't find app mount point ","#root")}))}]);