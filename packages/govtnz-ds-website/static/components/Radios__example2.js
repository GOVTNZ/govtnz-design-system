!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(1),o=n.n(l),i=function(e){var t=e.hintId,n=e.legend,r=e.hint,l=e.children;return a.createElement("div",{className:"g-fieldsetBlock-form-group"},a.createElement("fieldset",{"aria-describedby":t,className:"g-fieldset"},a.createElement("legend",{className:"g-fieldset__legend"},void 0!==n?n:a.createElement(a.Fragment,null,"Legend text")),void 0!==t?a.createElement(a.Fragment,null,a.createElement("div",{className:"g-fieldsetBlock-hint",id:t},void 0!==r?r:a.createElement(a.Fragment,null,"Hint text"))):"",a.createElement("div",null,void 0!==l?l:a.createElement(a.Fragment,null,"Fieldset contents"))))},d={styleSize:{xlarge:"g-heading-xl",large:"g-heading-l",medium:"g-heading-m",small:"g-heading-s",xsmall:"g-heading-xs",xxsmall:"g-heading-xxs"}},u=function(e){var t=e.styleSize,n=e.marginBottom8,r=e.id,l=e.children;return a.createElement("h1",{className:"".concat(void 0!==d.styleSize[t]?d.styleSize[t]:"").concat(n?" g-heading-mb-8":""),id:r},void 0!==l?l:a.createElement(a.Fragment,null,"Example text"))},c=function(e){var t=e.fakeFocus,n=e.radioId,r=e.hintId,l=e.name,o=e.disabled,i=e.readOnly,d=e.autoFocus,u=e.value,c=e.checked,s=e.onChange,m=e.label;return a.createElement("div",{className:"g-radios__item"},a.createElement("input",{"aria-describedby":r,className:"g-radios__input".concat(t?" :focus":""),id:n,name:l,type:"radio",disabled:o,readOnly:i,autoFocus:d,value:u,checked:c,onChange:s}),a.createElement("label",{className:"g-radios-label g-radios__label",htmlFor:n},void 0!==m?m:a.createElement(a.Fragment,null,"Label text")))};function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,l=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,l=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw l}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var f=function(e){var t=e.children;return r.a.createElement(a.Fragment,null,t)},g=function(e){return r.a.createElement(f,v(),r.a.createElement(i,m({},v(),{legend:r.a.createElement(u,m({},v(),{styleSize:"large",id:"whereLiveTitle"}),"Where do you live?")}),r.a.createElement(c,m({},v(),{label:"North Island",radioId:"anyRadioId3334",name:"where",value:"north",labelId:"labelId3"})),r.a.createElement(c,m({},v(),{label:"South Island",radioId:"anyRadioId42344",name:"where",value:"south",labelId:"labelId4"})),r.a.createElement(c,m({},v(),{label:"Stewart Island",radioId:"anyRadioId5234",name:"where",value:"stewart",labelId:"labelId5"})),r.a.createElement(c,m({},v(),{label:"Chatham Islands",radioId:"anyRadioId6234",name:"where",value:"chatham",labelId:"labelId6"}))))},v=function(){var e=s(Object(a.useState)(),2),t=e[0],n=e[1],r=s(Object(a.useState)(),2),l=r[0],o=r[1],i=s(Object(a.useState)(),2),d=i[0],u=i[1];return{value:t,value2:l,value3:d,onChange:function(e){return n(e.target.value)},onChange2:function(e){return o(e.target.value)},onChange3:function(e){return u(e.target.value)}}};document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("#root");e?o.a.hydrate(r.a.createElement(g,null),e,window.afterRender):console.error("Couldn't find app mount point ","#root")})}]);