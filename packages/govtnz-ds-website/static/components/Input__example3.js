!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(1),i=n.n(o),l={width:{2:"g-inputBlock-input--width-2",3:"g-inputBlock-input--width-3",4:"g-inputBlock-input--width-4",5:"g-inputBlock-input--width-5",10:"g-inputBlock-input--width-10",20:"g-inputBlock-input--width-20",30:"g-inputBlock-input--width-30"},autoComplete:{Off:"off",On:"on",Name:"name","Honorific: Prefix":"honorific-prefix","Given Name":"given-name","Additional Name":"additional-name","Family Name":"family-name","Honorific: Suffix":"honorific-suffix",Nickname:"nickname",Email:"email",Username:"username","New Password":"new-password","Current Password":"current-password","Organization Title":"organization-title",Organization:"organization","Street Address":"street-address","Address Line 1":"address-line1","Address Line 2":"address-line2","Address Line 3":"address-line3","Address Level 4":"address-level4","Address Level 3":"address-level3","Address Level 2":"address-level2","Address Level 1":"address-level1",Country:"country","Country Name":"country-name","Postal Code":"postal-code","Credit Card: Name":"cc-name","Credit Card: Given Name":"cc-given-name","Credit Card: Additional Name":"cc-additional-name","Credit Card: Family Name":"cc-family-name","Credit Card: Number":"cc-number","Credit Card: Expiry":"cc-exp","Credit Card: Expiry Month":"cc-exp-month","Credit Card: Expiry Year":"cc-exp-year","Credit Card: CSC":"cc-csc","Credit Card: Type":"cc-type","Transaction: Currency":"transaction-currency","Transaction: Amount":"transaction-amount",Language:"language",Birthday:"bday","Birthday: Day":"bday-day","Birthday: Month":"bday-month","Birthday: Year":"bday-year",Sex:"sex",Telephone:"tel","Telephone: Country Code":"tel-country-code","Telephone: National":"tel-national","Telephone: Area Code":"tel-area-code","Telephone: Local":"tel-local","Telephone: Extension":"tel-extension",IMPP:"impp",URL:"url",Photo:"photo"}},d=function(e){var t=e.error,n=e.inputId,a=e.label,o=e.hint,i=e.hintId,d=e.errorId,u=e.width,c=e.name,s=e.disabled,m=e.readOnly,p=e.autoFocus,f=e.value,y=e.spellCheck,h=e.maxLength,v=e.autoComplete,g=e.onChange;return r.createElement("div",{className:"g-inputBlock-form-group".concat(t?" g-inputBlock-form-group--error":"")},r.createElement("label",{className:"g-inputBlock-label",htmlFor:n},void 0!==a?a:r.createElement(r.Fragment,null,"Example text")),void 0!==o?r.createElement(r.Fragment,null,r.createElement("div",{className:"g-inputBlock-hint",id:i},void 0!==o?o:r.createElement(r.Fragment,null,"Example text"))):"",void 0!==t?r.createElement(r.Fragment,null,r.createElement("div",{className:"g-inputBlock-error-message",id:d},r.createElement("span",{className:"g-inputBlock-visually-hidden"},"Error: "),void 0!==t?t:r.createElement(r.Fragment,null,"Example text"))):"",r.createElement("input",{"aria-describedby":void 0!==i||void 0!==d?"".concat(i||"").concat(d?" "+d:""):void 0,className:"g-inputBlock-input".concat(void 0!==l.width[u]?" "+l.width[u]:"").concat(t?" g-inputBlock-input--error":""),id:n,name:c,type:"text",disabled:s,readOnly:m,autoFocus:p,value:f,spellCheck:y,maxLength:h,autoComplete:l.autoComplete[v],onChange:g}))};function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s=function(e){var t=e.children;return a.a.createElement(r.Fragment,null,t)},m=function(e){return a.a.createElement(s,p(),a.a.createElement(d,c({},p(),{type:"Text",label:"Event name",name:"anyName",inputId:"anyId10",hint:"The name you'll use on promotional material",hintId:"anyHintId10"})))},p=function(){var e=u(Object(r.useState)(),2),t=e[0],n=e[1],a=u(Object(r.useState)(),2),o=a[0],i=a[1],l=u(Object(r.useState)(),2),d=l[0],c=l[1];return{value:t,value2:o,value3:d,onChange:function(e){return n(e.target.value)},onChange2:function(e){return i(e.target.value)},onChange3:function(e){return c(e.target.value)}}};document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("#root");e?i.a.hydrate(a.a.createElement(m,null),e,window.afterRender):console.error("Couldn't find app mount point ","#root")})}]);