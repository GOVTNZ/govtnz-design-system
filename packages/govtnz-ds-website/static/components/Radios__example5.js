!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(1),i=n.n(l),o=function(e){var t=e.hintId,n=e.legend,a=e.hint,l=e.children;return r.createElement("div",{className:"g-fieldsetBlock-form-group"},r.createElement("fieldset",{"aria-describedby":t,className:"g-fieldset"},r.createElement("legend",{className:"g-fieldset__legend"},void 0!==n?n:r.createElement(r.Fragment,null,"Legend text")),void 0!==t?r.createElement(r.Fragment,null,r.createElement("div",{className:"g-fieldsetBlock-hint",id:t},void 0!==a?a:r.createElement(r.Fragment,null,"Hint text"))):"",r.createElement("div",null,void 0!==l?l:r.createElement(r.Fragment,null,"Fieldset contents"))))},d={styleSize:{xlarge:"g-heading-xl",large:"g-heading-l",medium:"g-heading-m",small:"g-heading-s",xsmall:"g-heading-xs",xxsmall:"g-heading-xxs"}},c=function(e){var t=e.styleSize,n=e.marginBottom8,a=e.id,l=e.children;return r.createElement("h1",{className:"".concat(void 0!==d.styleSize[t]?d.styleSize[t]:"").concat(n?" g-heading-mb-8":""),id:a},void 0!==l?l:r.createElement(r.Fragment,null,"Example text"))},u=function(e){var t=e.fakeFocus,n=e.radioId,a=e.hintId,l=e.name,i=e.disabled,o=e.readOnly,d=e.autoFocus,c=e.value,u=e.checked,s=e.onChange,m=e.label,v=e.hint;return r.createElement("div",{className:"g-radios__item"},r.createElement("input",{"aria-describedby":a,className:"g-radios__input".concat(t?" :focus":""),id:n,type:"radio",name:l,disabled:i,readOnly:o,autoFocus:d,value:c,checked:u,onChange:s}),r.createElement("label",{className:"g-radios-label g-radios__label",htmlFor:n},void 0!==m?m:r.createElement(r.Fragment,null,"Label text")),r.createElement("div",{className:"g-radios-hint g-radios__hint",id:a},void 0!==v?v:r.createElement(r.Fragment,null,"Hint text")))},s=function(e){var t=e.children;return r.createElement("div",{className:"g-radios-form-divider"},void 0!==t?t:r.createElement(r.Fragment,null,"Example Text"))};function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,l=void 0;try{for(var i,o=e[Symbol.iterator]();!(r=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,l=e}finally{try{r||null==o.return||o.return()}finally{if(a)throw l}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var g=function(e){var t=e.children;return a.a.createElement(r.Fragment,null,t)},f=function(e){return a.a.createElement(g,h(),a.a.createElement(o,v({},h(),{legend:a.a.createElement(c,v({},h(),{styleSize:"large",id:"providerChoiceTitle2"}),"Choose one provider"),hint:a.a.createElement("p",null,"Select one provider."),hintId:"hintId234"}),a.a.createElement(u,v({},h(),{label:"Sign in with Aardvark Services",hint:"North Island only",hintId:"someHintId72344",radioId:"anyRadioId7345",name:"providerChoice3",value:"provider1",labelId:"labelId5"})),a.a.createElement(u,v({},h(),{label:"Sign in with Dandelion Services",hint:"South and Stewart Islands only",hintId:"someHintId8533",radioId:"anyRadioId8345",name:"providerChoice3",value:"provider2",labelId:"labelId8"})),a.a.createElement(s,h(),a.a.createElement("p",null,"-or-")),a.a.createElement(u,v({},h(),{label:"Sign in with Eel Services",hint:"Non-New Zealand residents only",hintId:"someHintId7234444",radioId:"anyRadioId3459",name:"providerChoice3",value:"provider3",labelId:"labelId9"}))))},h=function(){var e=m(Object(r.useState)(),2),t=e[0],n=e[1],a=m(Object(r.useState)(),2),l=a[0],i=a[1],o=m(Object(r.useState)(),2),d=o[0],c=o[1];return{value:t,value2:l,value3:d,onChange:function(e){return n(e.target.value)},onChange2:function(e){return i(e.target.value)},onChange3:function(e){return c(e.target.value)}}};document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("#root");e?i.a.hydrate(a.a.createElement(f,null),e,window.afterRender):console.error("Couldn't find app mount point ","#root")})}]);