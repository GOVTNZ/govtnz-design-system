!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(1),i=n.n(l),o=function(e){var t=e.hintId,n=e.legend,r=e.hint,l=e.children;return a.createElement("div",{className:"g-fieldsetBlock-form-group"},a.createElement("fieldset",{"aria-describedby":t,className:"g-fieldset"},a.createElement("legend",{className:"g-fieldset__legend"},void 0!==n?n:a.createElement(a.Fragment,null,"Legend text")),void 0!==t?a.createElement(a.Fragment,null,a.createElement("div",{className:"g-fieldsetBlock-hint",id:t},void 0!==r?r:a.createElement(a.Fragment,null,"Hint text"))):"",a.createElement("div",null,void 0!==l?l:a.createElement(a.Fragment,null,"Fieldset contents"))))},u={styleSize:{xlarge:"g-heading-xl",large:"g-heading-l",medium:"g-heading-m",small:"g-heading-s",xsmall:"g-heading-xs",xxsmall:"g-heading-xxs"}},c=function(e){var t=e.styleSize,n=e.marginBottom8,r=e.marginBottom0,l=e.id,i=e.children;return a.createElement("h1",{className:"".concat(void 0!==u.styleSize[t]?u.styleSize[t]:"").concat(n?" g-heading-mb-8":"").concat(r?" g-heading-mb-0":""),id:l},void 0!==i?i:a.createElement(a.Fragment,null,"Example text"))},d=function(e){var t=e.inline,n=e.children;return a.createElement("div",{className:"g-radios".concat(t?" g-radios--inline":"")},void 0!==n?n:a.createElement(a.Fragment,null,"Radio components"))},s=function(e){var t=e.fakeFocus,n=e.radioId,r=e.hintId,l=e.name,i=e.disabled,o=e.readOnly,u=e.autoFocus,c=e.value,d=e.checked,s=e.onChange,m=e.label;return a.createElement("div",{className:"g-radios__item"},a.createElement("input",{"aria-describedby":r,className:"g-radios__input".concat(t?" :focus":""),id:n,name:l,type:"radio",disabled:i,readOnly:o,autoFocus:u,value:c,checked:d,onChange:s}),a.createElement("label",{className:"g-radios-label g-radios__label",htmlFor:n},void 0!==m?m:a.createElement(a.Fragment,null,"Label text")))};function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,l=void 0;try{for(var i,o=e[Symbol.iterator]();!(a=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,l=e}finally{try{a||null==o.return||o.return()}finally{if(r)throw l}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var f=function(e){var t=e.children;return r.a.createElement(a.Fragment,null,t)},v=function(e){return r.a.createElement(f,g({title:"Example: Inline radio buttons"},h({})),r.a.createElement(o,g({legend:r.a.createElement(c,{styleSize:"large",id:"nameChangeId6"},"Have you changed your name?"),hint:r.a.createElement("p",null,"This includes changing your last name or spelling your name differently."),hintId:"hintId2221"},h({})),r.a.createElement(d,g({inline:!0},h({})),r.a.createElement(s,g({label:"Yes",radioId:"anyRadioId55",value:"true",name:"nameChange1",labelId:"labelId1",hintId:"hintId2221"},h({value:"true"}))),r.a.createElement(s,g({label:"No",radioId:"anyRadioId2551",value:"false",name:"nameChange1",labelId:"labelId2",hintId:"hintId2221"},h({value:"false"}))))))},h=function(e){var t=m(Object(a.useState)(e&&e.value),2),n=t[0],r=t[1],l=m(Object(a.useState)(e&&e.value2),2),i=l[0],o=l[1],u=m(Object(a.useState)(e&&e.value3),2),c=u[0],d=u[1];return{value:n,value2:i,value3:c,onChange:function(e){return r(e.target.value)},onChange2:function(e){return o(e.target.value)},onChange3:function(e){return d(e.target.value)}}};document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("#root");e?i.a.hydrate(r.a.createElement(v,null),e,window.afterRender):console.error("Couldn't find app mount point ","#root")})}]);