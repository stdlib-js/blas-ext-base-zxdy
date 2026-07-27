"use strict";var d=function(v,t){return function(){try{return t||v((t={exports:{}}).exports,t),t.exports}catch(s){throw (t=0, s)}};};var p=d(function(J,l){
var j=require('@stdlib/strided-base-reinterpret-complex128/dist'),o=require('@stdlib/complex-float64-base-div/dist').assign,f=5;function h(v,t,s,x,n,z,b){var a,e,i,r,y,c,q,u;if(v<=0)return n;if(a=j(t,0),e=j(n,0),i=x*2,r=b*2,y=s*2,c=z*2,s===1&&z===1){if(q=v%f,q>0)for(u=0;u<q;u++)o(a[i],a[i+1],e[r],e[r+1],e,1,r),i+=y,r+=c;if(v<f)return n;for(u=q;u<v;u+=f)o(a[i],a[i+1],e[r],e[r+1],e,1,r),o(a[i+2],a[i+3],e[r+2],e[r+3],e,1,r+2),o(a[i+4],a[i+5],e[r+4],e[r+5],e,1,r+4),o(a[i+6],a[i+7],e[r+6],e[r+7],e,1,r+6),o(a[i+8],a[i+9],e[r+8],e[r+9],e,1,r+8),i+=f*2,r+=f*2;return n}for(u=0;u<v;u++)o(a[i],a[i+1],e[r],e[r+1],e,1,r),i+=y,r+=c;return n}l.exports=h
});var _=d(function(K,R){
var w=require('@stdlib/strided-base-stride2offset/dist'),k=p();function A(v,t,s,x,n){return k(v,t,s,w(v,s),x,n,w(v,n))}R.exports=A
});var M=d(function(L,E){
var B=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=_(),C=p();B(g,"ndarray",C);E.exports=g
});var D=require("path").join,F=require('@stdlib/utils-try-require/dist'),G=require('@stdlib/assert-is-error/dist'),H=M(),m,O=F(D(__dirname,"./native.js"));G(O)?m=H:m=O;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
