!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("d3")):"function"==typeof define&&define.amd?define(["d3"],e):"object"==typeof exports?exports.Koto=e(require("d3")):t.Koto=e(t.d3)}(this,function(t){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var r=n(1)["default"],o=n(5)["default"],i=n(6)["default"],u=n(19)["default"],s=n(30)["default"],a=n(59)["default"],c=n(31)["default"],f=n(74)["default"],l=n(84)["default"],h=n(88)["default"];Object.defineProperty(e,"__esModule",{value:!0});var p=n(89),v=h(p),d=n(90),y=h(d),g=n(91),_=h(g);y["default"](v["default"],"d3 js is required.");var m=function(){function t(e){function n(t,e){for(var n=function(e,n){t.set(n,e)},r=0,o=e.length;o>r;++r){var i=e[r];i.forEach(n)}return t}o(this,t),this.base=e,this.hasDrawn=!1,this.merge={configs:function(){var t=n(this.configs,arguments);return t}.bind(this),accessors:function(){var t=n(this.accessors,arguments);return t}.bind(this)},this.configs=new a,this.accessors=new a,this.promise=null,this._layers=new a,this._attached=new a,this._events=new a,this.c=this.config,this.a=this.accessor}return r(t,[{key:"transform",value:function(t){return t}},{key:"demux",value:function(t,e){return e}},{key:"preDraw",value:function(){}},{key:"postDraw",value:function(){}},{key:"postTransition",value:function(){}},{key:"unlayer",value:function(t){var e=this.layer(t);return this._layers["delete"](t),delete e._chart,e}},{key:"layer",value:function(t,e,n){var r,o=this;if(1===arguments.length)return this._layers.get(t);if(2===arguments.length){if(e instanceof _["default"])return e._chart=this,this._layers.set(t,e),this._layers.get(t);y["default"](!1,"When reattaching a layer, the second argument must be a koto layer")}return e._chart=this,r=new _["default"](e,n),r.remove=function(){return o._layers["delete"](t),this},this._layers.set(t,r),r}},{key:"attach",value:function(t,e){return 1===arguments.length?this._attached.get(t):(this._attached.set(t,e),e)}},{key:"draw",value:function(t){var e,n,r=this,o=[],i=this.transform(t);this.preDraw(i),this.trigger("preDraw",i);var u=!0,a=!1,l=void 0;try{for(var h,p=c(this._layers.values());!(u=(h=p.next()).done);u=!0)e=h.value,e.draw(i),o.push(e.promise)}catch(v){a=!0,l=v}finally{try{!u&&p["return"]&&p["return"]()}finally{if(a)throw l}}var d=!0,y=!1,g=void 0;try{for(var _,m=c(this._attached.entries());!(d=(_=m.next()).done);d=!0){var x=s(_.value,2),w=x[0],b=x[1];n=this.demux?this.demux(w,i):i,b.draw(n),o.push(b.promise)}}catch(v){y=!0,g=v}finally{try{!d&&m["return"]&&m["return"]()}finally{if(y)throw g}}this.hasDrawn=!0,this.promise=f.all(o),this.postDraw(),this.trigger("postDraw",i),this.promise.then(function(){r.postTransition(i),r.trigger("postTransition",i)})}},{key:"on",value:function(t,e,n){var r;return r=this._events.has(t)?this._events.get(t):new l,r.add({callback:e,context:n||this,_chart:this}),this._events.set(t,r),this}},{key:"once",value:function(t,e,n){var r=this,o=function i(){r.off(t,i),e.apply(this,arguments)};return this.on(t,o,n)}},{key:"off",value:function(t,e,n){return 0===arguments.length?(this._events.clear(),this):1===arguments.length?(this._events.has(t)&&this._events.get(t).clear(),this):(this._events.get(t).forEach(function(t,r,o){(e&&e===r.callback||n&&n===r.context)&&o["delete"](t)}),this)}},{key:"trigger",value:function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;e>r;r++)n[r-1]=arguments[r];return this._events.has(t)&&this._events.get(t).forEach(function(t){var e;(e=t.callback).call.apply(e,[t.context].concat(n))}),this}},{key:"config",value:function(t,e){function n(){function t(t,e){var n=Math.min.call(null,t.map(function(t){return i.config(t)}));return e/n}o.constrain===!0?o.percentage=t(["width","height"],o.value):Array.isArray(o.constrain)?o.percentage=t(o.constrain,o.value):o.percentage=t([o.constrain],o.value)}var r,o,i=this;if(0===arguments.length)return this.configs;if(1===arguments.length){if("object"==typeof t){for(r in t)this.configs.has(r)?(o=this.configs.get(r),o.hasOwnProperty("setter")?o.value=o.setter.call(o,t[r]):o.value=t[r],o.hasOwnProperty("constrain")&&n(),this.configs.set(r,o)):console.warn("config with name "+t+" is not defined.");return this}return y["default"](this.configs.has(t),t+" is not a valid option."),o=this.configs.get(t),o.hasOwnProperty("getter")?o.getter.call(o):o.value}return 2===arguments.length?(this.configs.has(t)?(o=this.configs.get(t),o.hasOwnProperty("setter")?o.value=o.setter.call(o,e):o.value=e,o.hasOwnProperty("constrain")&&n(),this.configs.set(t,o)):console.warn("config with name "+t+" is not defined."),this):void 0}},{key:"accessor",value:function(t,e){var n;if(0===arguments.length)return this.accessors;if(1===arguments.length){if("string"==typeof t)return y["default"](this.accessors.has(t),t+" is not a valid accessor."),this.accessors.get(t);for(n in t)this.accessors.set(n,t[n])}else this.accessors.set(t,e);return this}}],[{key:"extend",value:function(t){var e=function(e){function n(e){o(this,n);var r;if(i(Object.getPrototypeOf(n.prototype),"constructor",this).call(this,e),"function"==typeof t)t.call(this);else{for(r in t)this[r]=t[r];this.initialize.call(this)}}return u(n,e),n}(this);return e}}]),t}();e["default"]=m,t.exports=e["default"]},function(t,e,n){"use strict";var r=n(2)["default"];e["default"]=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),r(t,o.key,o)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),e.__esModule=!0},function(t,e,n){t.exports={"default":n(3),__esModule:!0}},function(t,e,n){var r=n(4);t.exports=function(t,e,n){return r.setDesc(t,e,n)}},function(t,e){var n=Object;t.exports={create:n.create,getProto:n.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:n.getOwnPropertyDescriptor,setDesc:n.defineProperty,setDescs:n.defineProperties,getKeys:n.keys,getNames:n.getOwnPropertyNames,getSymbols:n.getOwnPropertySymbols,each:[].forEach}},function(t,e){"use strict";e["default"]=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},e.__esModule=!0},function(t,e,n){"use strict";var r=n(7)["default"];e["default"]=function(t,e,n){for(var o=!0;o;){var i=t,u=e,s=n;a=f=c=void 0,o=!1,null===i&&(i=Function.prototype);var a=r(i,u);if(void 0!==a){if("value"in a)return a.value;var c=a.get;return void 0===c?void 0:c.call(s)}var f=Object.getPrototypeOf(i);if(null===f)return void 0;t=f,e=u,n=s,o=!0}},e.__esModule=!0},function(t,e,n){t.exports={"default":n(8),__esModule:!0}},function(t,e,n){var r=n(4);n(9),t.exports=function(t,e){return r.getDesc(t,e)}},function(t,e,n){var r=n(10);n(14)("getOwnPropertyDescriptor",function(t){return function(e,n){return t(r(e),n)}})},function(t,e,n){var r=n(11),o=n(13);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(12);t.exports=0 in Object("z")?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){t.exports=function(t,e){var r=n(15),o=(n(17).Object||{})[t]||Object[t],i={};i[t]=e(o),r(r.S+r.F*n(18)(function(){o(1)}),"Object",i)}},function(t,e,n){var r=n(16),o=n(17),i="prototype",u=function(t,e){return function(){return t.apply(e,arguments)}},s=function(t,e,n){var a,c,f,l,h=t&s.G,p=t&s.P,v=h?r:t&s.S?r[e]:(r[e]||{})[i],d=h?o:o[e]||(o[e]={});h&&(n=e);for(a in n)c=!(t&s.F)&&v&&a in v,c&&a in d||(f=c?v[a]:n[a],h&&"function"!=typeof v[a]?l=n[a]:t&s.B&&c?l=u(f,r):t&s.W&&v[a]==f?!function(t){l=function(e){return this instanceof t?new t(e):t(e)},l[i]=t[i]}(f):l=p&&"function"==typeof f?u(Function.call,f):f,d[a]=l,p&&((d[i]||(d[i]={}))[a]=f))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,t.exports=s},function(t,e){var n="undefined",r=t.exports=typeof window!=n&&window.Math==Math?window:typeof self!=n&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,e){var n=t.exports={version:"1.2.0"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e,n){"use strict";var r=n(20)["default"],o=n(22)["default"];e["default"]=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=r(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(o?o(t,e):t.__proto__=e)},e.__esModule=!0},function(t,e,n){t.exports={"default":n(21),__esModule:!0}},function(t,e,n){var r=n(4);t.exports=function(t,e){return r.create(t,e)}},function(t,e,n){t.exports={"default":n(23),__esModule:!0}},function(t,e,n){n(24),t.exports=n(17).Object.setPrototypeOf},function(t,e,n){var r=n(15);r(r.S,"Object",{setPrototypeOf:n(25).set})},function(t,e,n){var r=n(4).getDesc,o=n(26),i=n(27),u=function(t,e){if(i(t),!o(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,o){try{o=n(28)(Function.call,r(Object.prototype,"__proto__").set,2),o(t,[]),e=!(t instanceof Array)}catch(i){e=!0}return function(t,n){return u(t,n),e?t.__proto__=n:o(t,n),t}}({},!1):void 0),check:u}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(26);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(29);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){"use strict";var r=n(31)["default"],o=n(56)["default"];e["default"]=function(){function t(t,e){var n=[],o=!0,i=!1,u=void 0;try{for(var s,a=r(t);!(o=(s=a.next()).done)&&(n.push(s.value),!e||n.length!==e);o=!0);}catch(c){i=!0,u=c}finally{try{!o&&a["return"]&&a["return"]()}finally{if(i)throw u}}return n}return function(e,n){if(Array.isArray(e))return e;if(o(Object(e)))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),e.__esModule=!0},function(t,e,n){t.exports={"default":n(32),__esModule:!0}},function(t,e,n){n(33),n(50),t.exports=n(53)},function(t,e,n){n(34);var r=n(37);r.NodeList=r.HTMLCollection=r.Array},function(t,e,n){"use strict";var r=n(35),o=n(36),i=n(37),u=n(10);n(38)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e){t.exports={}},function(t,e,n){"use strict";var r=n(39),o=n(15),i=n(40),u=n(41),s=n(44),a=n(45)("iterator"),c=n(37),f=!([].keys&&"next"in[].keys()),l="@@iterator",h="keys",p="values",v=function(){return this};t.exports=function(t,e,d,y,g,_,m){n(48)(d,e,y);var x,w,b=function(t){switch(t){case h:return function(){return new d(this,t)};case p:return function(){return new d(this,t)}}return function(){return new d(this,t)}},k=e+" Iterator",O=t.prototype,j=O[a]||O[l]||g&&O[g],M=j||b(g);if(j){var P=n(4).getProto(M.call(new t));n(49)(P,k,!0),!r&&s(O,l)&&u(P,a,v)}if((!r||m)&&u(O,a,M),c[e]=M,c[k]=v,g)if(x={keys:_?M:b(h),values:g==p?M:b(p),entries:g!=p?M:b("entries")},m)for(w in x)w in O||i(O,w,x[w]);else o(o.P+o.F*f,e,x)}},function(t,e){t.exports=!0},function(t,e,n){t.exports=n(41)},function(t,e,n){var r=n(4),o=n(42);t.exports=n(43)?function(t,e,n){return r.setDesc(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){t.exports=!n(18)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(46)("wks"),o=n(16).Symbol;t.exports=function(t){return r[t]||(r[t]=o&&o[t]||(o||n(47))("Symbol."+t))}},function(t,e,n){var r=n(16),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){"use strict";var r=n(4),o={};n(41)(o,n(45)("iterator"),function(){return this}),t.exports=function(t,e,i){t.prototype=r.create(o,{next:n(42)(1,i)}),n(49)(t,e+" Iterator")}},function(t,e,n){var r=n(44),o=n(41),i=n(45)("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,i)&&o(t,i,e)}},function(t,e,n){"use strict";var r=n(51)(!0);n(38)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){var r=n(52),o=n(13);t.exports=function(t){return function(e,n){var i,u,s=String(o(e)),a=r(n),c=s.length;return 0>a||a>=c?t?"":void 0:(i=s.charCodeAt(a),55296>i||i>56319||a+1===c||(u=s.charCodeAt(a+1))<56320||u>57343?t?s.charAt(a):i:t?s.slice(a,a+2):(i-55296<<10)+(u-56320)+65536)}}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(27),o=n(54);t.exports=n(17).getIterator=function(t){var e=o(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}},function(t,e,n){var r=n(55),o=n(45)("iterator"),i=n(37);t.exports=n(17).getIteratorMethod=function(t){return void 0!=t?t[o]||t["@@iterator"]||i[r(t)]:void 0}},function(t,e,n){var r=n(12),o=n(45)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=(e=Object(t))[o])?n:i?r(e):"Object"==(u=r(e))&&"function"==typeof e.callee?"Arguments":u}},function(t,e,n){t.exports={"default":n(57),__esModule:!0}},function(t,e,n){n(33),n(50),t.exports=n(58)},function(t,e,n){var r=n(55),o=n(45)("iterator"),i=n(37);t.exports=n(17).isIterable=function(t){var e=Object(t);return o in e||"@@iterator"in e||i.hasOwnProperty(r(e))}},function(t,e,n){t.exports={"default":n(60),__esModule:!0}},function(t,e,n){n(61),n(50),n(33),n(62),n(72),t.exports=n(17).Map},function(t,e){},function(t,e,n){"use strict";var r=n(63);n(71)("Map",function(t){return function(){return t(this,arguments[0])}},{get:function(t){var e=r.getEntry(this,t);return e&&e.v},set:function(t,e){return r.def(this,0===t?0:t,e)}},r,!0)},function(t,e,n){"use strict";var r=n(4),o=n(41),i=n(28),u=n(64),s=n(65),a=n(13),c=n(66),f=n(36),l=n(47)("id"),h=n(44),p=n(26),v=Object.isExtensible||p,d=n(43),y=d?"_s":"size",g=0,_=function(t,e){if(!p(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!h(t,l)){if(!v(t))return"F";if(!e)return"E";o(t,l,++g)}return"O"+t[l]},m=function(t,e){var n,r=_(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,o,u){var f=t(function(t,n){s(t,f,e),t._i=r.create(null),t._f=void 0,t._l=void 0,t[y]=0,void 0!=n&&c(n,o,t[u],t)});return n(70)(f.prototype,{clear:function(){for(var t=this,e=t._i,n=t._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete e[n.i];t._f=t._l=void 0,t[y]=0},"delete":function(t){var e=this,n=m(e,t);if(n){var r=n.n,o=n.p;delete e._i[n.i],n.r=!0,o&&(o.n=r),r&&(r.p=o),e._f==n&&(e._f=r),e._l==n&&(e._l=o),e[y]--}return!!n},forEach:function(t){for(var e,n=i(t,arguments[1],3);e=e?e.n:this._f;)for(n(e.v,e.k,this);e&&e.r;)e=e.p},has:function(t){return!!m(this,t)}}),d&&r.setDesc(f.prototype,"size",{get:function(){return a(this[y])}}),f},def:function(t,e,n){var r,o,i=m(t,e);return i?i.v=n:(t._l=i={i:o=_(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=i),r&&(r.n=i),t[y]++,"F"!==o&&(t._i[o]=i)),t},getEntry:m,setStrong:function(t,e,r){n(38)(t,e,function(t,e){this._t=t,this._k=e,this._l=void 0},function(){for(var t=this,e=t._k,n=t._l;n&&n.r;)n=n.p;return t._t&&(t._l=n=n?n.n:t._t._f)?"keys"==e?f(0,n.k):"values"==e?f(0,n.v):f(0,[n.k,n.v]):(t._t=void 0,f(1))},r?"entries":"values",!r,!0),u(t),u(n(17)[e])}}},function(t,e,n){"use strict";var r=n(4),o=n(45)("species");t.exports=function(t){!n(43)||o in t||r.setDesc(t,o,{configurable:!0,get:function(){return this}})}},function(t,e){t.exports=function(t,e,n){if(!(t instanceof e))throw TypeError(n+": use the 'new' operator!");return t}},function(t,e,n){var r=n(28),o=n(67),i=n(68),u=n(27),s=n(69),a=n(54);t.exports=function(t,e,n,c){var f,l,h,p=a(t),v=r(n,c,e?2:1),d=0;if("function"!=typeof p)throw TypeError(t+" is not iterable!");if(i(p))for(f=s(t.length);f>d;d++)e?v(u(l=t[d])[0],l[1]):v(t[d]);else for(h=p.call(t);!(l=h.next()).done;)o(h,v,l.value,e)}},function(t,e,n){var r=n(27);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(i){var u=t["return"];throw void 0!==u&&r(u.call(t)),i}}},function(t,e,n){var r=n(37),o=n(45)("iterator");t.exports=function(t){return(r.Array||Array.prototype[o])===t}},function(t,e,n){var r=n(52),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(40);t.exports=function(t,e){for(var n in e)r(t,n,e[n]);return t}},function(t,e,n){"use strict";var r=n(4),o=n(15),i=n(41),u=n(66),s=n(65);t.exports=function(t,e,a,c,f,l){var h=n(16)[t],p=h,v=f?"set":"add",d=p&&p.prototype,y={};return n(43)&&"function"==typeof p&&(l||d.forEach&&!n(18)(function(){(new p).entries().next()}))?(p=e(function(e,n){s(e,p,t),e._c=new h,void 0!=n&&u(n,f,e[v],e)}),r.each.call("add,clear,delete,forEach,get,has,set,keys,values,entries".split(","),function(t){var e="add"==t||"set"==t;t in d&&(!l||"clear"!=t)&&i(p.prototype,t,function(n,r){var o=this._c[t](0===n?0:n,r);return e?this:o})}),"size"in d&&r.setDesc(p.prototype,"size",{get:function(){return this._c.size}})):(p=c.getConstructor(e,t,f,v),n(70)(p.prototype,a)),n(49)(p,t),y[t]=p,o(o.G+o.W+o.F,y),l||c.setStrong(p,t,f),p}},function(t,e,n){var r=n(15);r(r.P,"Map",{toJSON:n(73)("Map")})},function(t,e,n){var r=n(66),o=n(55);t.exports=function(t){return function(){if(o(this)!=t)throw TypeError(t+"#toJSON isn't generic");var e=[];return r(this,!1,e.push,e),e}}},function(t,e,n){t.exports={"default":n(75),__esModule:!0}},function(t,e,n){n(61),n(50),n(33),n(76),t.exports=n(17).Promise},function(t,e,n){"use strict";var r,o=n(4),i=n(39),u=n(16),s=n(28),a=n(55),c=n(15),f=n(26),l=n(27),h=n(29),p=n(65),v=n(66),d=n(25).set,y=n(77),g=n(64),_=n(45)("species"),m=n(47)("record"),x=n(78),w="Promise",b=u.process,k="process"==a(b),O=u[w],j=function(t){var e=new O(function(){});return t&&(e.constructor=Object),O.resolve(e)===e},M=function(){function t(e){var n=new O(e);return d(n,t.prototype),n}var e=!1;try{if(e=O&&O.resolve&&j(),d(t,O),t.prototype=o.create(O.prototype,{constructor:{value:t}}),t.resolve(5).then(function(){})instanceof t||(e=!1),e&&n(43)){var r=!1;O.resolve(o.setDesc({},"then",{get:function(){r=!0}})),e=r}}catch(i){e=!1}return e}(),P=function(t){return f(t)&&(M?"Promise"==a(t):m in t)},S=function(t,e){return i&&t===O&&e===r?!0:y(t,e)},E=function(t){var e=l(t)[_];return void 0!=e?e:t},T=function(t){var e;return f(t)&&"function"==typeof(e=t.then)?e:!1},D=function(t,e){if(!t.n){t.n=!0;var n=t.c;x(function(){for(var r=t.v,o=1==t.s,i=0,s=function(e){var n,i,u=o?e.ok:e.fail;try{u?(o||(t.h=!0),n=u===!0?r:u(r),n===e.P?e.rej(TypeError("Promise-chain cycle")):(i=T(n))?i.call(n,e.res,e.rej):e.res(n)):e.rej(r)}catch(s){e.rej(s)}};n.length>i;)s(n[i++]);n.length=0,t.n=!1,e&&setTimeout(function(){var e,n,o=t.p;A(o)&&(k?b.emit("unhandledRejection",r,o):(e=u.onunhandledrejection)?e({promise:o,reason:r}):(n=u.console)&&n.error&&n.error("Unhandled promise rejection",r)),t.a=void 0},1)})}},A=function(t){var e,n=t[m],r=n.a||n.c,o=0;if(n.h)return!1;for(;r.length>o;)if(e=r[o++],e.fail||!A(e.P))return!1;return!0},F=function(t){var e=this;e.d||(e.d=!0,e=e.r||e,e.v=t,e.s=2,e.a=e.c.slice(),D(e,!0))},I=function(t){var e,n=this;if(!n.d){n.d=!0,n=n.r||n;try{(e=T(t))?x(function(){var r={r:n,d:!1};try{e.call(t,s(I,r,1),s(F,r,1))}catch(o){F.call(r,o)}}):(n.v=t,n.s=1,D(n,!1))}catch(r){F.call({r:n,d:!1},r)}}};M||(O=function(t){h(t);var e={p:p(this,O,w),c:[],a:void 0,s:0,d:!1,v:void 0,h:!1,n:!1};this[m]=e;try{t(s(I,e,1),s(F,e,1))}catch(n){F.call(e,n)}},n(70)(O.prototype,{then:function(t,e){var n=l(l(this).constructor)[_],r={ok:"function"==typeof t?t:!0,fail:"function"==typeof e?e:!1},o=r.P=new(void 0!=n?n:O)(function(t,e){r.res=t,r.rej=e});h(r.res),h(r.rej);var i=this[m];return i.c.push(r),i.a&&i.a.push(r),i.s&&D(i,!1),o},"catch":function(t){return this.then(void 0,t)}})),c(c.G+c.W+c.F*!M,{Promise:O}),n(49)(O,w),g(O),g(r=n(17)[w]),c(c.S+c.F*!M,w,{reject:function(t){return new this(function(e,n){n(t)})}}),c(c.S+c.F*(!M||j(!0)),w,{resolve:function(t){return P(t)&&S(t.constructor,this)?t:new this(function(e){e(t)})}}),c(c.S+c.F*!(M&&n(83)(function(t){O.all(t)["catch"](function(){})})),w,{all:function(t){var e=E(this),n=[];return new e(function(r,i){v(t,!1,n.push,n);var u=n.length,s=Array(u);u?o.each.call(n,function(t,n){e.resolve(t).then(function(t){s[n]=t,--u||r(s)},i)}):r(s)})},race:function(t){var e=E(this);return new e(function(n,r){v(t,!1,function(t){e.resolve(t).then(n,r)})})}})},function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},function(t,e,n){var r,o,i,u=n(16),s=n(79).set,a=u.MutationObserver||u.WebKitMutationObserver,c=u.process,f="process"==n(12)(c),l=function(){var t,e;for(f&&(t=c.domain)&&(c.domain=null,t.exit());r;)e=r.domain,e&&e.enter(),r.fn.call(),e&&e.exit(),r=r.next;o=void 0,t&&t.enter()};if(f)i=function(){c.nextTick(l)};else if(a){var h=1,p=document.createTextNode("");new a(l).observe(p,{characterData:!0}),i=function(){p.data=h=-h}}else i=function(){s.call(u,l)};t.exports=function(t){var e={fn:t,next:void 0,domain:f&&c.domain};o&&(o.next=e),r||(r=e,i()),o=e}},function(t,e,n){"use strict";var r,o,i,u=n(28),s=n(80),a=n(81),c=n(82),f=n(16),l=f.process,h=f.setImmediate,p=f.clearImmediate,v=f.MessageChannel,d=0,y={},g="onreadystatechange",_=function(){var t=+this;if(y.hasOwnProperty(t)){var e=y[t];delete y[t],e()}},m=function(t){_.call(t.data)};h&&p||(h=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return y[++d]=function(){s("function"==typeof t?t:Function(t),e)},r(d),d},p=function(t){delete y[t]},"process"==n(12)(l)?r=function(t){l.nextTick(u(_,t,1))}:v?(o=new v,i=o.port2,o.port1.onmessage=m,r=u(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScript?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",m,!1)):r=g in c("script")?function(t){a.appendChild(c("script"))[g]=function(){a.removeChild(this),_.call(t)}}:function(t){setTimeout(u(_,t,1),0)}),t.exports={set:h,clear:p}},function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},function(t,e,n){t.exports=n(16).document&&document.documentElement},function(t,e,n){var r=n(26),o=n(16).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){var r=n(45)("iterator"),o=!1;try{var i=[7][r]();i["return"]=function(){o=!0},Array.from(i,function(){throw 2})}catch(u){}t.exports=function(t){if(!o)return!1;var e=!1;try{var n=[7],i=n[r]();i.next=function(){e=!0},n[r]=function(){return i},t(n)}catch(u){}return e}},function(t,e,n){t.exports={"default":n(85),__esModule:!0}},function(t,e,n){n(61),n(50),n(33),n(86),n(87),t.exports=n(17).Set},function(t,e,n){"use strict";var r=n(63);n(71)("Set",function(t){return function(){return t(this,arguments[0])}},{add:function(t){return r.def(this,t=0===t?0:t,t)}},r)},function(t,e,n){var r=n(15);r(r.P,"Set",{toJSON:n(73)("Set")})},function(t,e){"use strict";e["default"]=function(t){return t&&t.__esModule?t:{"default":t}},e.__esModule=!0},function(e,n){e.exports=t},function(t,e){"use strict";function n(t,e){if(!t)throw new Error("[koto] "+e)}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=n,t.exports=e["default"]},function(t,e,n){"use strict";var r=n(1)["default"],o=n(5)["default"],i=n(74)["default"],u=n(88)["default"];Object.defineProperty(e,"__esModule",{value:!0});var s=n(90),a=u(s),c=function(){function t(e,n){if(o(this,t),this._base=e,this._handlers={},this._lifecycleRe=/^(enter|update|merge|exit)(:transition)?$/,n&&(this.dataBind=n.dataBind,this.insert=n.insert,"events"in n))for(var r in n.events)this.on(r,n.events[r])}return r(t,[{key:"dataBind",value:function(){a["default"](!1,"Layers must specify a dataBind method.")}},{key:"insert",value:function(){a["default"](!1,"Layers must specify an `insert` method.")}},{key:"on",value:function(t,e,n){return n=n||{},a["default"](this._lifecycleRe.test(t),"Unrecognized lifecycle event name specified to 'Layer#on': '"+t+"'."),t in this._handlers||(this._handlers[t]=[]),this._handlers[t].push({callback:e,chart:n.chart||null}),this}},{key:"off",value:function(t,e){var n,r=this._handlers[t];if(a["default"](this._lifecycleRe.test(t),"Unrecognized lifecycle event name specified to 'Layer#on': '"+t+"'."),!r)return this;if(1===arguments.length)return r.length=0,this;for(n=r.length-1;n>-1;--n)r[n].callback===e&&r.splice(n,1);return this}},{key:"draw",value:function(t){function e(t,e){var n=0;0===t.size()?e():t.each(function(){++n}).each("interrupt.promise",function(){e.apply(this,arguments)}).each("end.promise",function(){--n||e.apply(this,arguments)})}function n(t){s.call(e,function(){t(!0)})}var r,o,u,s,c,f,l,h,p,v,d,y=[];r=this.dataBind.call(this._base,t),a["default"](r instanceof d3.selection,"Invalid selection defined by `Layer#dataBind` method."),a["default"](r.enter,"Layer selection not properly bound."),o=r.enter(),o._chart=this._base._chart,u=[{name:"update",selection:r},{name:"enter",selection:o,method:this.insert},{name:"merge",selection:r},{name:"exit",selection:r,method:r.exit}];for(var g=0,_=u.length;_>g;++g)if(l=u[g].name,s=u[g].selection,c=u[g].method,"function"==typeof c&&(s=c.call(s)),!s.empty()){if(a["default"](s&&s instanceof d3.selection,"Invalid selection defined for "+l+" lifecycle event."),f=this._handlers[l])for(h=0,p=f.length;p>h;++h)s._chart=f[h].chart||this._base._chart,s.call(f[h].callback);if(f=this._handlers[l+":transition"],f&&f.length)for(s=s.transition(),d=f.length,v=0;d>v;++v)s._chart=f[v].chart||this._base._chart,s.call(f[v].callback),y.push(new i(n));this.promise=i.all(y)}}}]),t}();e["default"]=c,t.exports=e["default"]}])});
//# sourceMappingURL=koto.js.map