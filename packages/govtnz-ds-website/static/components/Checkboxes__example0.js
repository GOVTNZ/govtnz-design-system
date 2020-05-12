!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}([function(e,t){e.exports=React},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(0));t.default=function(e){var t=e.errorId,r=e.id,n=e.hintId,l=e.disabled,o=e.readOnly,u=e.autoFocus,i=e.name,d=e.value,c=e.checked,f=e.onChange,s=e.ref,m=e.label,v=e.hint,g=e.error;return a.default.createElement("div",{className:"g-checkboxes__item"+(t?" g-checkboxBlock-form-group--error":"")},a.default.createElement("input",{"aria-describedby":n,className:"g-checkboxes__input",id:r,type:"checkbox",disabled:l,readOnly:o,autoFocus:u,name:i,value:d,checked:c,onChange:f,ref:s}),a.default.createElement("label",{className:"g-checkboxBlock-label g-checkboxes__label",htmlFor:r},void 0!==m?m:a.default.createElement(a.default.Fragment,null,"Label text")),void 0!==n?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"g-checkboxBlock-hint g-checkboxes__hint",id:n},void 0!==v?v:a.default.createElement(a.default.Fragment,null,"Hint text"))):"",void 0!==t?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"g-checkboxBlock-error-message",id:t},a.default.createElement("span",{className:"g-checkboxBlock-visually-hidden"},"Error:"),void 0!==g?g:a.default.createElement(a.default.Fragment,null,"Error text"))):"")}},function(e,t){e.exports=ReactDOM},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(0));t.default=function(e){var t=e.errorId,r=e.hintId,n=e.legend,l=e.hint,o=e.error,u=e.children;return a.default.createElement("div",{className:"g-fieldsetBlock-form-group"+(t?" g-fieldsetBlock-form-group--error":"")},a.default.createElement("fieldset",{"aria-describedby":void 0!==r||void 0!==t?(r||"")+(t?" "+t:""):void 0,className:"g-fieldset"},a.default.createElement("legend",{className:"g-fieldset__legend"},void 0!==n?n:a.default.createElement(a.default.Fragment,null,"Legend text")),void 0!==r?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"g-fieldsetBlock-hint",id:r},void 0!==l?l:a.default.createElement(a.default.Fragment,null,"Hint text"))):"",void 0!==t?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"g-fieldsetBlock-error-message",id:t},a.default.createElement("span",{className:"g-fieldsetBlock-visually-hidden"},"Error:"),void 0!==o?o:a.default.createElement(a.default.Fragment,null,"Error text"))):"",a.default.createElement("div",null,void 0!==u?u:a.default.createElement(a.default.Fragment,null,"Fieldset contents"))))}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(0)),l={xlarge:"g-heading-xl",large:"g-heading-l",medium:"g-heading-m",small:"g-heading-s",xsmall:"g-heading-xs",xxsmall:"g-heading-xxs"};t.default=function(e){var t=e.styleSize,r=e.marginBottom8,n=e.marginBottom0,o=e.id,u=e.children;return a.default.createElement("h1",{className:(void 0!==l[t]?l[t]:"")+(r?" g-heading-mb-8":"")+(n?" g-heading-mb-0":""),id:o},void 0!==u?u:a.default.createElement(a.default.Fragment,null,"Example text"))}},function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),l=r(2),o=r.n(l),u=r(3),i=r.n(u),d=r(4),c=r.n(d),f=r(1),s=r.n(f);function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,l=void 0;try{for(var o,u=e[Symbol.iterator]();!(n=(o=u.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){a=!0,l=e}finally{try{n||null==u.return||u.return()}finally{if(a)throw l}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var h=function(e){var t=e.children;return a.a.createElement(n.Fragment,null,t)},p=function(e){return a.a.createElement(h,g({title:"Example: Checkboxes"},b({})),a.a.createElement(i.a,g({legend:a.a.createElement(c.a,{styleSize:"large",id:"providerChoiceTitle1",marginBottom8:!0},"Who are your providers?"),hint:a.a.createElement("p",null,"Select all that apply."),hintId:"hintId1"},b({})),a.a.createElement(s.a,g({label:"Aardvark Access",id:"anyCheckboxId1",value:"provider1",name:"providerChoice1"},b({value:"provider1"}))),a.a.createElement(s.a,g({label:"Bumblebee Business",id:"anyCheckboxId2",value:"provider2",name:"providerChoice1"},b({value:"provider2"}))),a.a.createElement(s.a,g({label:"Caterpillar Company",id:"anyCheckboxId3",value:"provider3",name:"providerChoice1"},b({value:"provider3"})))))},b=function(e){var t=m(Object(n.useState)(e&&e.value),2),r=t[0],a=t[1],l=m(Object(n.useState)(e&&e.value2),2),o=l[0],u=l[1],i=m(Object(n.useState)(e&&e.value3),2),d=i[0],c=i[1];return{value:r,value2:o,value3:d,onChange:function(e){return a(e.target.value)},onChange2:function(e){return u(e.target.value)},onChange3:function(e){return c(e.target.value)}}};document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#root");e?o.a.hydrate(a.a.createElement(p,null),e,window.afterRender):console.error("Couldn't find app mount point ","#root")}))}]);