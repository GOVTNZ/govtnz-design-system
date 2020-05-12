!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t){e.exports=React},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(0));t.default=function(e){var t=e.errorId,n=e.id,r=e.hintId,l=e.disabled,u=e.readOnly,i=e.autoFocus,o=e.name,d=e.value,c=e.checked,f=e.onChange,s=e.ref,m=e.label,g=e.hint;return a.default.createElement("div",{className:"g-radios__item"+(t?" g-radioBlock-form-group--error":"")},a.default.createElement("input",{"aria-describedby":r,className:"g-radios__input",id:n,name:o,type:"radio",disabled:l,readOnly:u,autoFocus:i,value:d,checked:c,onChange:f,ref:s}),a.default.createElement("label",{className:"g-radioBlock-label g-radios__label",htmlFor:n},void 0!==m?m:a.default.createElement(a.default.Fragment,null,"Label text")),void 0!==r?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"g-radioBlock-hint g-checkboxes__hint",id:r},void 0!==g?g:a.default.createElement(a.default.Fragment,null,"Hint text"))):"")}},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(0));t.default=function(e){var t=e.errorId,n=e.hintId,r=e.legend,l=e.hint,u=e.error,i=e.children;return a.default.createElement("div",{className:"g-fieldsetBlock-form-group"+(t?" g-fieldsetBlock-form-group--error":"")},a.default.createElement("fieldset",{"aria-describedby":void 0!==n||void 0!==t?(n||"")+(t?" "+t:""):void 0,className:"g-fieldset"},a.default.createElement("legend",{className:"g-fieldset__legend"},void 0!==r?r:a.default.createElement(a.default.Fragment,null,"Legend text")),void 0!==n?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"g-fieldsetBlock-hint",id:n},void 0!==l?l:a.default.createElement(a.default.Fragment,null,"Hint text"))):"",void 0!==t?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"g-fieldsetBlock-error-message",id:t},a.default.createElement("span",{className:"g-fieldsetBlock-visually-hidden"},"Error:"),void 0!==u?u:a.default.createElement(a.default.Fragment,null,"Error text"))):"",a.default.createElement("div",null,void 0!==i?i:a.default.createElement(a.default.Fragment,null,"Fieldset contents"))))}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(0)),l={xlarge:"g-heading-xl",large:"g-heading-l",medium:"g-heading-m",small:"g-heading-s",xsmall:"g-heading-xs",xxsmall:"g-heading-xxs"};t.default=function(e){var t=e.styleSize,n=e.marginBottom8,r=e.marginBottom0,u=e.id,i=e.children;return a.default.createElement("h1",{className:(void 0!==l[t]?l[t]:"")+(n?" g-heading-mb-8":"")+(r?" g-heading-mb-0":""),id:u},void 0!==i?i:a.default.createElement(a.default.Fragment,null,"Example text"))}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(0));t.default=function(e){var t=e.inline,n=e.children;return a.default.createElement("div",{className:"g-radios"+(t?" g-radios--inline":"")},void 0!==n?n:a.default.createElement(a.default.Fragment,null,"Radio components"))}},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(2),u=n.n(l),i=n(3),o=n.n(i),d=n(4),c=n.n(d),f=n(5),s=n.n(f),m=n(1),g=n.n(m);function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,l=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){a=!0,l=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw l}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var b=function(e){var t=e.children;return a.a.createElement(r.Fragment,null,t)},y=function(e){return a.a.createElement(b,p({title:"Example: Radio buttons"},_({})),a.a.createElement(o.a,p({legend:a.a.createElement(c.a,{styleSize:"large",id:"nameChangeId1"},"Have you changed your name?"),hint:a.a.createElement("p",null,"This includes changing your last name or spelling your name differently."),hintId:"hintId1"},_({})),a.a.createElement(s.a,p({inline:!0},_({})),a.a.createElement(g.a,p({label:"Yes",id:"anyRadioId",value:"true",name:"nameChange1",labelId:"labelId1"},_({value:"true"}))),a.a.createElement(g.a,p({label:"No",id:"anyRadioId255",value:"false",name:"nameChange1",labelId:"labelId255"},_({value:"false"}))))))},_=function(e){var t=v(Object(r.useState)(e&&e.value),2),n=t[0],a=t[1],l=v(Object(r.useState)(e&&e.value2),2),u=l[0],i=l[1],o=v(Object(r.useState)(e&&e.value3),2),d=o[0],c=o[1];return{value:n,value2:u,value3:d,onChange:function(e){return a(e.target.value)},onChange2:function(e){return i(e.target.value)},onChange3:function(e){return c(e.target.value)}}};document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#root");e?u.a.hydrate(a.a.createElement(y,null),e,window.afterRender):console.error("Couldn't find app mount point ","#root")}))}]);