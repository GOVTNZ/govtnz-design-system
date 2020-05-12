!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(0)),l={2:"g-inputBlock-input--width-2",3:"g-inputBlock-input--width-3",4:"g-inputBlock-input--width-4",5:"g-inputBlock-input--width-5",10:"g-inputBlock-input--width-10",20:"g-inputBlock-input--width-20",30:"g-inputBlock-input--width-30"};t.default=function(e){var t=e.errorId,n=e.id,r=e.label,o=e.hint,u=e.hintId,i=e.error,c=e.width,d=e.disabled,f=e.readOnly,p=e.autoFocus,s=e.name,m=e.value,v=e.min,g=e.max,y=e.type,h=e.spellCheck,b=e.maxLength,E=e.autoComplete,O=e.onChange,k=e.ref;return a.default.createElement("div",{className:"g-inputBlock-form-group"+(t?" g-inputBlock-form-group--error":"")},a.default.createElement("label",{className:"g-inputBlock-label",htmlFor:n},void 0!==r?r:a.default.createElement(a.default.Fragment,null,"Example text")),void 0!==o?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"g-inputBlock-hint",id:u},void 0!==o?o:a.default.createElement(a.default.Fragment,null,"Example text"))):"",void 0!==t?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"g-inputBlock-error-message",id:t},a.default.createElement("span",{className:"g-inputBlock-visually-hidden"},"Error: "),void 0!==i?i:a.default.createElement(a.default.Fragment,null,"Example text"))):"",a.default.createElement("input",{"aria-describedby":void 0!==u||void 0!==t?(u||"")+(t?" "+t:""):void 0,className:"g-inputBlock-input"+(void 0!==l[c]?" "+l[c]:"")+(i?" g-inputBlock-input--error":""),id:n,name:s,disabled:d,readOnly:f,autoFocus:p,value:m,min:v,max:g,type:y,spellCheck:h,maxLength:b,autoComplete:E,onChange:O,ref:k}))}},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(1),o=n.n(l),u=n(2),i=n.n(u);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,l=void 0;try{for(var o,u=e[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,l=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw l}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var p=function(e){var t=e.children;return a.a.createElement(r.Fragment,null,t)},s=function(e){return a.a.createElement(p,f({codeOnly:!0},m({})),a.a.createElement(i.a,f({type:"email",label:"Your email address",hint:"Please provide your personal email address that we'll contact you on.",name:"someEmail",id:"anyId122",hintId:"anyHintId122",spellCheck:"false"},m({}))))},m=function(e){var t=c(Object(r.useState)(e&&e.value),2),n=t[0],a=t[1],l=c(Object(r.useState)(e&&e.value2),2),o=l[0],u=l[1],i=c(Object(r.useState)(e&&e.value3),2),d=i[0],f=i[1];return{value:n,value2:o,value3:d,onChange:function(e){return a(e.target.value)},onChange2:function(e){return u(e.target.value)},onChange3:function(e){return f(e.target.value)}}};document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#root");e?o.a.hydrate(a.a.createElement(s,null),e,window.afterRender):console.error("Couldn't find app mount point ","#root")}))}]);