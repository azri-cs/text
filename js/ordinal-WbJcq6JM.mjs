/*! third party licenses: js/vendor.LICENSE.txt */
import{i as f}from"./init-q33yAy1W.mjs";class i extends Map{constructor(t,e=p){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:e}}),t!=null)for(const[r,s]of t)this.set(r,s)}get(t){return super.get(c(this,t))}has(t){return super.has(c(this,t))}set(t,e){return super.set(l(this,t),e)}delete(t){return super.delete(h(this,t))}}function c({_intern:n,_key:t},e){const r=t(e);return n.has(r)?n.get(r):e}function l({_intern:n,_key:t},e){const r=t(e);return n.has(r)?n.get(r):(n.set(r,e),e)}function h({_intern:n,_key:t},e){const r=t(e);return n.has(r)&&(e=n.get(r),n.delete(r)),e}function p(n){return n!==null&&typeof n=="object"?n.valueOf():n}const a=Symbol("implicit");function g(){var n=new i,t=[],e=[],r=a;function s(u){let o=n.get(u);if(o===void 0){if(r!==a)return r;n.set(u,o=t.push(u)-1)}return e[o%e.length]}return s.domain=function(u){if(!arguments.length)return t.slice();t=[],n=new i;for(const o of u)n.has(o)||n.set(o,t.push(o)-1);return s},s.range=function(u){return arguments.length?(e=Array.from(u),s):e.slice()},s.unknown=function(u){return arguments.length?(r=u,s):r},s.copy=function(){return g(t,e).unknown(r)},f.apply(s,arguments),s}export{g as o};