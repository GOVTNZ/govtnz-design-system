!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t){e.exports=React},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(0));t.default=function(e){var t=e.id,n=e.hintId,r=e.required,o=e.disabled,l=e.readOnly,u=e.autoFocus,i=e.name,c=e.value,d=e.checked,f=e.onChange,s=e.ref,m=e.label,g=e.hint;return a.default.createElement("div",{className:"g-radios__item"},a.default.createElement("input",{"aria-describedby":n,className:"g-radios__input",id:t,name:i,type:"radio",required:r,disabled:void 0!==o?"true"===o.toString():void 0,readOnly:l,autoFocus:u,value:c,checked:d,onChange:f,ref:s}),a.default.createElement("label",{className:"g-radios__label",htmlFor:t},void 0!==m?m:a.default.createElement(a.default.Fragment,null,"Label text")),void 0!==n?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"g-radios__hint",id:n},void 0!==g?g:a.default.createElement(a.default.Fragment,null,"Hint text"))):"")}},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(0));t.default=function(e){var t=e.errorId,n=e.hintId,r=e.legend,o=e.hint,l=e.error,u=e.children;return a.default.createElement("div",{className:"g-fieldsetBlock-form-group"+(t?" g-fieldsetBlock-form-group--error":"")},a.default.createElement("fieldset",{"aria-describedby":void 0!==n||void 0!==t?(n||"")+(t?" "+t:""):void 0,className:"g-fieldsetBlock-fieldset"},a.default.createElement("legend",{className:"g-fieldsetBlock-fieldset__legend"},void 0!==r?r:a.default.createElement(a.default.Fragment,null,"Legend text")),void 0!==n?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"g-fieldsetBlock-hint",id:n},void 0!==o?o:a.default.createElement(a.default.Fragment,null,"Hint text"))):"",void 0!==t?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"g-fieldsetBlock-error-message",id:t},a.default.createElement("span",{className:"g-fieldsetBlock-visually-hidden"},"Error:"),void 0!==l?l:a.default.createElement(a.default.Fragment,null,"Error text"))):"",a.default.createElement("div",null,void 0!==u?u:a.default.createElement(a.default.Fragment,null,"Fieldset contents"))))}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(0)),o={xlarge:"g-heading-xl",large:"g-heading-l",medium:"g-heading-m",small:"g-heading-s",xsmall:"g-heading-xs",xxsmall:"g-heading-xxs"};t.default=function(e){var t=e.styleSize,n=e.marginBottom8,r=e.marginBottom0,l=e.marginTop0,u=e.marginTop8,i=e.id,c=e.children;return a.default.createElement("h1",{className:"g-heading"+(void 0!==o[t]?" "+o[t]:"")+(n?" g-heading-mb-8":"")+(r?" g-heading-mb-0":"")+(l?" g-heading-mt-0":"")+(u?" g-heading-mt-8":""),id:i},void 0!==c?c:a.default.createElement(a.default.Fragment,null,"Example text"))}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(0)),o={large:"g-body-l",medium:"g-body-m",small:"g-body-s","x-small":"g-body-xs"};t.default=function(e){var t=e.styleSize,n=e.marginBottom0,r=e.children;return a.default.createElement("p",{className:"g-body"+(void 0!==o[t]?" "+o[t]:"")+(n?" g-body-marginBottom0":"")},void 0!==r?r:a.default.createElement(a.default.Fragment,null,"Example text"))}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(0));t.default=function(e){var t=e.inline,n=e.big,r=e.children;return a.default.createElement("div",{className:"g-radios"+(t?" g-radios--inline":"")+(n?" g-radios--big":"")},void 0!==r?r:a.default.createElement(a.default.Fragment,null,"Radio components"))}},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(2),l=n.n(o),u=n(3),i=n.n(u),c=n(4),d=n.n(c),f=n(5),s=n.n(f),m=n(6),g=n.n(m),p=n(1),y=n.n(p);function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var l,u=e[Symbol.iterator]();!(r=(l=u.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t,n){return t&&x(e.prototype,t),n&&x(e,n),e}function P(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function F(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=C(e);if(t){var a=C(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return I(this,n)}}function I(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?M(e):t}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var D=function(e){var t=e.children;return a.a.createElement(r.Fragment,null,t)},R=function(e){return a.a.createElement(D,N({title:"Example: Error state #2 (Radio buttons)"},B({})),a.a.createElement(i.a,N({legend:a.a.createElement(d.a,{styleSize:"medium",id:"nameChangeId8"},"Have you changed your name?"),hint:a.a.createElement(s.a,null,"This includes changing your last name or spelling your name differently."),hintId:"hintId5344",errorId:"errorId525",error:"Select 'yes' if you have changed your name"},B({})),a.a.createElement(g.a,N({inline:!0},B({})),a.a.createElement(y.a,N({label:"Yes",id:"anyRadioId9",value:"true",name:"nameChange5",labelId:"labelId9"},B({value:"true"}))),a.a.createElement(y.a,N({label:"No",id:"anyRadioId10234",value:"false",name:"nameChange5",labelId:"labelId10"},B({value:"false"}))))))},k=a.a.createContext(void 0),B=(r.Component,a.a.Component,a.a.Component,function(e){var t=v(Object(r.useState)(e&&e.value),2),n=t[0],a=t[1],o=v(Object(r.useState)(e&&e.value2),2),l=o[0],u=o[1],i=v(Object(r.useState)(e&&e.value3),2),c=i[0],d=i[1];return{value:n,value2:l,value3:c,onChange:function(e){return a(e.target.value)},onChange2:function(e){return u(e.target.value)},onChange3:function(e){return d(e.target.value)}}});document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#root");e?l.a.hydrate(a.a.createElement(R,null),e,window.afterRender):console.error("Couldn't find app mount point ","#root")}))}]);