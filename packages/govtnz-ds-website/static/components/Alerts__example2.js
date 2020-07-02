!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(0)),l={info:"g-alert--info",warning:"g-alert--warning",success:"g-alert--success",error:"g-alert--error"};t.default=function(e){var t=e.mode,n=e.level,r=e.children,o=e.headingId;return a.default.createElement(a.default.Fragment,null,"live"===t?a.default.createElement(a.default.Fragment,null,"info"===n?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{"aria-atomic":"true","aria-live":"polite",role:"note"},void 0!==r?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"g-alert"+(void 0!==l[n]?" "+l[n]:"")},void 0!==r?r:a.default.createElement(a.default.Fragment,null," Example alert content "))):"")):""):"","live"===t?a.default.createElement(a.default.Fragment,null,"warning"===n?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{"aria-atomic":"true","aria-live":"polite",role:"note"},void 0!==r?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"g-alert"+(void 0!==l[n]?" "+l[n]:"")},void 0!==r?r:a.default.createElement(a.default.Fragment,null," Example alert content "))):"")):""):"","live"===t?a.default.createElement(a.default.Fragment,null,"success"===n?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{"aria-atomic":"true","aria-live":"polite",role:"note"},void 0!==r?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"g-alert"+(void 0!==l[n]?" "+l[n]:"")},void 0!==r?r:a.default.createElement(a.default.Fragment,null," Example alert content "))):"")):""):"","live"===t?a.default.createElement(a.default.Fragment,null,"error"===n?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{"aria-atomic":"true","aria-live":"polite",role:"note"},void 0!==r?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"g-alert"+(void 0!==l[n]?" "+l[n]:"")},void 0!==r?r:a.default.createElement(a.default.Fragment,null," Example alert content "))):"")):""):"","live"!==t?a.default.createElement(a.default.Fragment,null,"info"===n?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{"aria-labelledby":o,role:"note"},void 0!==r?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"g-alert"+(void 0!==l[n]?" "+l[n]:"")},void 0!==r?r:a.default.createElement(a.default.Fragment,null," Example alert content "))):"")):""):"","live"!==t?a.default.createElement(a.default.Fragment,null,"warning"===n?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{"aria-labelledby":o,role:"note"},void 0!==r?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"g-alert"+(void 0!==l[n]?" "+l[n]:"")},void 0!==r?r:a.default.createElement(a.default.Fragment,null," Example alert content "))):"")):""):"","live"!==t?a.default.createElement(a.default.Fragment,null,"success"===n?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{"aria-labelledby":o,role:"note",tabIndex:-1},void 0!==r?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"g-alert"+(void 0!==l[n]?" "+l[n]:"")},void 0!==r?r:a.default.createElement(a.default.Fragment,null," Example alert content "))):"")):""):"","live"!==t?a.default.createElement(a.default.Fragment,null,"error"===n?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{"aria-labelledby":o,role:"note",tabIndex:-1},void 0!==r?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"g-alert"+(void 0!==l[n]?" "+l[n]:"")},void 0!==r?r:a.default.createElement(a.default.Fragment,null," Example alert content "))):"")):""):"")}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(0)),l={xlarge:"g-heading-xl",large:"g-heading-l",medium:"g-heading-m",small:"g-heading-s",xsmall:"g-heading-xs",xxsmall:"g-heading-xxs"};t.default=function(e){var t=e.styleSize,n=e.marginBottom8,r=e.marginBottom0,o=e.marginTop0,u=e.marginTop8,i=e.id,c=e.children;return a.default.createElement("h2",{className:"g-heading"+(void 0!==l[t]?" "+l[t]:"")+(n?" g-heading-mb-8":"")+(r?" g-heading-mb-0":"")+(o?" g-heading-mt-0":"")+(u?" g-heading-mt-8":""),id:i},void 0!==c?c:a.default.createElement(a.default.Fragment,null,"Example text"))}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(0)),l={large:"g-body-l",medium:"g-body-m",small:"g-body-s","x-small":"g-body-xs"};t.default=function(e){var t=e.styleSize,n=e.marginBottom0,r=e.children;return a.default.createElement("p",{className:"g-body"+(void 0!==l[t]?" "+l[t]:"")+(n?" g-body-marginBottom0":"")},void 0!==r?r:a.default.createElement(a.default.Fragment,null,"Example text"))}},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(1),o=n.n(l),u=n(2),i=n.n(u),c=n(3),d=n.n(c),f=n(4),m=n.n(f);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,l=void 0;try{for(var o,u=e[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,l=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw l}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t,n){return t&&h(e.prototype,t),n&&h(e,n),e}function j(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function F(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=S(e);if(t){var a=S(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return _(this,n)}}function _(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?w(e):t}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var C=function(e){var t=e.children;return a.a.createElement(r.Fragment,null,t)},M=function(e){return a.a.createElement(C,P({title:"Example title: Warning alert: Static"},N({})),a.a.createElement(D,P({Component:i.a,level:"warning",headingId:"heading2"},N({})),a.a.createElement(d.a,P({id:"heading2"},N({})),"Warning: Your subscription will expire soon"),a.a.createElement(m.a,P({marginBottom0:!0},N({})),"You’ll need to renew your subscription to keep using the service.")))},k=a.a.createContext(void 0),D=(r.Component,a.a.Component,function(e){j(n,e);var t=F(n);function n(e){var r;return E(this,n),(r=t.call(this,e)).state={isChecked:!1,id:"id".concat(e.headingId.replace(/[^a-zA-Z0-9]/g,""))},r.toggle=r.toggle.bind(w(r)),r}return O(n,[{key:"toggle",value:function(){var e=this.state.isChecked;this.setState({isChecked:!e})}},{key:"render",value:function(){var e=this.props,t=e.mode,n=e.level,l=e.Component,o=this.state,u=o.isChecked,i=o.id;return"live"===t?a.a.createElement(r.Fragment,null,a.a.createElement("button",{type:"button","aria-controls":i,"aria-expanded":u,onClick:this.toggle,className:"g-button g-button--secondary"},"Toggle live ",n," alert"),a.a.createElement("div",{id:i},u?a.a.createElement(l,P({key:"".concat(i,"_alert")},this.props)):a.a.createElement(l,P({key:"".concat(i,"_alert")},this.props,{children:void 0})))):a.a.createElement(l,this.props)}}]),n}(a.a.Component)),N=function(e){var t=s(Object(r.useState)(e&&e.value),2),n=t[0],a=t[1],l=s(Object(r.useState)(e&&e.value2),2),o=l[0],u=l[1],i=s(Object(r.useState)(e&&e.value3),2),c=i[0],d=i[1];return{value:n,value2:o,value3:c,onChange:function(e){return a(e.target.value)},onChange2:function(e){return u(e.target.value)},onChange3:function(e){return d(e.target.value)}}};document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#root");e?o.a.hydrate(a.a.createElement(M,null),e,window.afterRender):console.error("Couldn't find app mount point ","#root")}))}]);