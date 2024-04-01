"use strict";var l=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var f=l(function(M,u){
var h=require('@stdlib/array-base-arraylike2object/dist'),i=require('@stdlib/math-base-special-floor/dist');function g(e,r){return typeof e[r]=="function"}function p(e){var r,a,n,t,o;for(a=i(e.length/2),n=e.length-1,t=0;t<a;t++)o=n-t,r=e[t],e[t]=e[o],e[o]=r;return e}function j(e){var r,a,n,t,o,c,s,v;for(r=e.data,a=e.accessors[0],n=e.accessors[1],o=i(r.length/2),c=r.length-1,s=0;s<o;s++)v=c-s,t=a(r,s),n(r,s,a(r,v)),n(r,v,t);return r}function d(e){var r;return g(e,"reverse")?e.reverse():(r=h(e),r.accessorProtocol?j(r):p(e))}u.exports=d
});var m=f();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
