/*!
* Qoopido.js library v3.6.2, 2015-4-21
* https://github.com/dlueth/qoopido.js
* (c) 2015 Dirk Lueth
* Dual licensed under MIT and GPL
*/
!function(e,t,r,o,n,c){"use strict";function i(e,t,i,u){var s,f=e.split("/");return d[e]?d[e]:(s=function(){if(i)for(var s,g,y=f.slice(0,-1).join("/"),j=0;(s=i[j])!==c;j++)g=l.test(s),g&&(s=p(y+"/"+s)),!d[s]&&arguments[j]&&(d[s]=arguments[j]),g&&!d[s]&&"undefined"!=typeof console&&console.error("".concat("[Qoopido.js] ",e,": Could not load dependency ",s));return d[e]=t(d,a,f,r,o,n,c),u&&u(d[e]),d[e]},void("undefined"!=typeof module&&module.exports?module.exports=define(s):"function"==typeof define&&define.amd?i?define(i,s):define(s):s()))}function u(e,t,r){i(e,t,r,function(t){d[e]=t.create()})}function p(e){for(var t;(t=e.replace(g,""))!==e;)e=t;return e.replace(y,"")}var s=t.qoopido||(t.qoopido={register:i,registerSingleton:u}),a=s.shared||(s.shared={}),d=s.modules||(s.modules={}),f=[],l=new RegExp("^\\.+\\/"),g=new RegExp("(?:\\/|)[^\\/]*\\/\\.\\."),y=new RegExp("(^\\/)|\\.\\/","g");Object.create||f.push("./polyfill/object/create"),Object.getOwnPropertyNames||f.push("./polyfill/object/getownpropertynames"),Object.getOwnPropertyDescriptor&&function(){try{return Object.getOwnPropertyDescriptor({x:0},"x"),!0}catch(e){return!1}}()||f.push("./polyfill/object/getownpropertydescriptor"),i("base",e,f)}(function(e,t,r,o,n,c,i){"use strict";function u(e){for(var t,r={},o=Object.getOwnPropertyNames(e),n=0;(t=o[n])!==i;n++)r[t]=Object.getOwnPropertyDescriptor(e,t);return r}function p(){throw new Error("[Qoopido.js] Operation prohibited")}return{create:function(){var e,t=Object.create(this,u(this));return t._constructor&&(e=t._constructor.apply(t,arguments)),t.create=t.extend=p,e||t},extend:function(e,t){var r;return e=e||{},t=t===!0,e._parent=this,r=Object.create(this,u(e)),t===!0&&(r.extend=p),r}}},this,navigator,window,document);