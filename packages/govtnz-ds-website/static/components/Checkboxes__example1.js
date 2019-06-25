!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),l=r(1),o=r.n(l),c=function(e){var t=e.hintId,r=e.errorId,a=e.legend,l=e.hint,o=e.error,c=e.children;return n.createElement("div",{className:"g-fieldsetBlockWithError-form-group g-fieldsetBlockWithError-form-group--error"},n.createElement("fieldset",{"aria-describedby":void 0!==t||void 0!==r?"".concat(t||"").concat(r?" "+r:""):void 0,className:"g-fieldset"},n.createElement("legend",{className:"g-fieldset__legend"},void 0!==a?a:n.createElement(n.Fragment,null,"Legend text")),n.createElement("div",{className:"g-fieldsetBlockWithError-hint",id:t},void 0!==l?l:n.createElement(n.Fragment,null,"Hint text")),n.createElement("div",{className:"g-fieldsetBlockWithError-error-message",id:r},n.createElement("span",{className:"g-fieldsetBlockWithError-visually-hidden"},"Error:"," "),void 0!==o?o:n.createElement(n.Fragment,null,"Error text")),n.createElement("div",{className:"g-fieldsetBlockWithError-children"},void 0!==c?c:n.createElement(n.Fragment,null,"Fieldset contents"))))},i={styleSize:{xlarge:"g-heading-xl",large:"g-heading-l",medium:"g-heading-m",small:"g-heading-s",xsmall:"g-heading-xs",xxsmall:"g-heading-xxs"}},d=function(e){var t=e.styleSize,r=e.marginBottom8,a=e.marginBottom0,l=e.id,o=e.children;return n.createElement("h1",{className:"".concat(void 0!==i.styleSize[t]?i.styleSize[t]:"").concat(r?" g-heading-mb-8":"").concat(a?" g-heading-mb-0":""),id:l},void 0!==o?o:n.createElement(n.Fragment,null,"Example text"))},u=function(e){var t=e.fakeFocus,r=e.checkboxId,a=e.hintId,l=e.name,o=e.disabled,c=e.readOnly,i=e.autoFocus,d=e.value,u=e.checked,s=e.onChange,m=e.label,v=e.hint;return n.createElement("div",{className:"g-checkboxes__item"},n.createElement("input",{"aria-describedby":a,className:"g-checkboxes__input".concat(t?" :focus":""),id:r,type:"checkbox",name:l,disabled:o,readOnly:c,autoFocus:i,value:d,checked:u,onChange:s}),n.createElement("label",{className:"g-checkboxBlock-label g-checkboxes__label",htmlFor:r},void 0!==m?m:n.createElement(n.Fragment,null,"Label text")),void 0!==a?n.createElement(n.Fragment,null,n.createElement("div",{className:"g-checkboxBlock-hint g-checkboxes__hint",id:a},void 0!==v?v:n.createElement(n.Fragment,null,"Hint text"))):"")};function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,l=void 0;try{for(var o,c=e[Symbol.iterator]();!(n=(o=c.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){a=!0,l=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw l}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var v=function(e){var t=e.children;return a.a.createElement(n.Fragment,null,t)},g=function(e){return a.a.createElement(v,m({title:"Example: Error state (Checkboxes)"},h({})),a.a.createElement(c,m({legend:a.a.createElement(d,{styleSize:"large",id:"providerChoiceTitle2",marginBottom8:!0},"Who are your providers?"),hint:a.a.createElement("p",null,"Select all that apply."),hintId:"hintId21",errorId:"errorId21",error:"You must choose at least one provider."},h({})),a.a.createElement(u,m({label:"Aardvark Access",checkboxId:"anyCheckboxId21",value:"provider1",name:"providerChoice2",labelId:"labelId21"},h({value:"provider1"}))),a.a.createElement(u,m({label:"Bumblebee Business",checkboxId:"anyCheckboxId22",value:"provider2",name:"providerChoice2",labelId:"labelId22"},h({value:"provider2"}))),a.a.createElement(u,m({label:"Caterpillar Company",checkboxId:"anyCheckboxId23",value:"provider3",name:"providerChoice2",labelId:"labelId23"},h({value:"provider3"})))))},h=function(e){var t=s(Object(n.useState)(e&&e.value),2),r=t[0],a=t[1],l=s(Object(n.useState)(e&&e.value2),2),o=l[0],c=l[1],i=s(Object(n.useState)(e&&e.value3),2),d=i[0],u=i[1];return{value:r,value2:o,value3:d,onChange:function(e){return a(e.target.value)},onChange2:function(e){return c(e.target.value)},onChange3:function(e){return u(e.target.value)}}};document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("#root");e?o.a.hydrate(a.a.createElement(g,null),e,window.afterRender):console.error("Couldn't find app mount point ","#root")})}]);