/*! third party licenses: js/vendor.LICENSE.txt */
import{g}from"./modulepreload-polyfill-DZeoc1eZ.mjs";import{a as c}from"./purebasic-BoFMrZSW.mjs";function l(t,a){for(var n=0;n<a.length;n++){const e=a[n];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in t)){const o=Object.getOwnPropertyDescriptor(e,r);o&&Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}function i(){i.warned||(i.warned=!0,console.log('Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/purebasic" instead of "highlight.js/lib/languages/purebasic.js"'))}i();var s=c;const f=g(s),b=l({__proto__:null,default:f},[s]);export{b as p};