!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(0)),a={2:"g-inputBlock-input--width-2",3:"g-inputBlock-input--width-3",4:"g-inputBlock-input--width-4",5:"g-inputBlock-input--width-5",10:"g-inputBlock-input--width-10",20:"g-inputBlock-input--width-20",30:"g-inputBlock-input--width-30"};t.default=function(e){var t=e.errorId,n=e.id,r=e.label,l=e.hint,u=e.hintId,i=e.error,c=e.width,d=e.disabled,p=e.readOnly,s=e.autoFocus,f=e.name,m=e.value,v=e.min,g=e.max,h=e.type,b=e.spellCheck,y=e.maxLength,O=e.autoComplete,E=e.onChange;return o.createElement("div",{className:"g-inputBlock-form-group"+(t?" g-inputBlock-form-group--error":"")},o.createElement("label",{className:"g-inputBlock-label",htmlFor:n},void 0!==r?r:o.createElement(o.Fragment,null,"Example text")),void 0!==l?o.createElement(o.Fragment,null,o.createElement("div",{className:"g-inputBlock-hint",id:u},void 0!==l?l:o.createElement(o.Fragment,null,"Example text"))):"",void 0!==t?o.createElement(o.Fragment,null,o.createElement("div",{className:"g-inputBlock-error-message",id:t},o.createElement("span",{className:"g-inputBlock-visually-hidden"},"Error: "),void 0!==i?i:o.createElement(o.Fragment,null,"Example text"))):"",o.createElement("input",{"aria-describedby":void 0!==u||void 0!==t?(u||"")+(t?" "+t:""):void 0,className:"g-inputBlock-input"+(void 0!==a[c]?" "+a[c]:"")+(i?" g-inputBlock-input--error":""),id:n,name:f,disabled:d,readOnly:p,autoFocus:s,value:m,min:v,max:g,type:h,spellCheck:b,maxLength:y,autoComplete:O,onChange:E}))}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(1),l=n.n(a),u=n(2),i=n.n(u);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var l,u=e[Symbol.iterator]();!(r=(l=u.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var p=function(e){var t=e.children;return o.a.createElement(r.Fragment,null,t)},s=function(e){return o.a.createElement(p,d({codeOnly:!0},f({})),o.a.createElement(i.a,d({label:"Your postal code",hint:"Your postal code will be a four digit number.",name:"postalCode",id:"postalId",hintId:"postalHintId",autoComplete:"postal-code"},f({}))))},f=function(e){var t=c(Object(r.useState)(e&&e.value),2),n=t[0],o=t[1],a=c(Object(r.useState)(e&&e.value2),2),l=a[0],u=a[1],i=c(Object(r.useState)(e&&e.value3),2),d=i[0],p=i[1];return{value:n,value2:l,value3:d,onChange:function(e){return o(e.target.value)},onChange2:function(e){return u(e.target.value)},onChange3:function(e){return p(e.target.value)}}};document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#root");e?l.a.hydrate(o.a.createElement(s,null),e,window.afterRender):console.error("Couldn't find app mount point ","#root")}))}]);