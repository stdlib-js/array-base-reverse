// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.2-esm/index.mjs";function t(t){var s;return function(e,r){return"function"==typeof e[r]}(t,"reverse")?t.reverse():(s=e(t)).accessorProtocol?function(e){var t,s,n,o,a,c,i,l;for(t=e.data,s=e.accessors[0],n=e.accessors[1],a=r(t.length/2),c=t.length-1,i=0;i<a;i++)l=c-i,o=s(t,i),n(t,i,s(t,l)),n(t,l,o);return t}(s):function(e){var t,s,n,o,a;for(s=r(e.length/2),n=e.length-1,o=0;o<s;o++)a=n-o,t=e[o],e[o]=e[a],e[a]=t;return e}(t)}export{t as default};
//# sourceMappingURL=index.mjs.map
