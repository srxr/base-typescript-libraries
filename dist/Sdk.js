!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Sdk=e():t.Sdk=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist",e(e.s=22)}([function(t,e,n){"use strict";(function(t){function n(t,e){if(!t)throw new Error(e?"assertion failed: "+e:"assertion failed")}function r(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;var e;try{e=new Function("return this")()}catch(t){}return e}e.assert=n,e.getGlobal=r}).call(e,n(1))},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";var r=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},o="function"==typeof Error.captureStackTrace,i=function(t){function e(e,n){t.call(this,n),this.name=e,this.message=n,o?Error.captureStackTrace(this,this.constructor):this.stack="dummy\n<no trace>"}return r(e,t),e}(Error);Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},function(t,e,n){"use strict";function r(t,e){}function o(){}function i(t){return t}var s=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},u=n(19),c=n(0),a=n(18),f=n(2),l=function(t){function e(e,n){t.call(this,"UnhandledRejectionError","unhandled rejection: "+e),this.reason=e,this.trace=n;var r=this.reason&&"object"==typeof this.reason&&this.reason.stack;"string"!=typeof r&&(r=String(e)),this.stack="UnhandledRejectionError: "+r}return s(e,t),e}(f.default);e.UnhandledRejectionError=l;var h,d=void 0,p=!1;!function(t){t[t.Pending=0]="Pending",t[t.Fulfilled=1]="Fulfilled",t[t.Rejected=2]="Rejected"}(h||(h={})),r(void 0,void 0);var v={error:void 0},_=new a.default,y=void 0,m=0,g=function(){function t(e){var n=this;if(this._id=m++,this._state=0,this._result=void 0,this._handlers=void 0,this._trace=void 0,d&&d(this,"construct"),p&&(this._trace=new a.default(t),y&&this._setSource(y)),e!==r){if("function"!=typeof e)throw new TypeError("Promise resolver is not a function");var o=!1;try{e(function(t){o||(o=!0,n._resolve(t))},function(t){o||(o=!0,n._reject(i(t)))})}catch(t){o||(o=!0,this._reject(i(t)))}}}return t.prototype.then=function(t,e){if(d&&d(this,"then("+typeof t+", "+typeof e+")"),1===this._state&&"function"!=typeof t||2===this._state&&"function"!=typeof e)return this;var n=new(Object.getPrototypeOf(this).constructor)(r);return n._setSource(this),this._enqueue(t,e,n,void 0),n},t.prototype.done=function(t,e){if(d&&d(this,"done("+typeof t+", "+typeof e+")"),1!==this._state||"function"==typeof t){var n=_;p&&(n=new a.default,this._trace&&n.setSource(this._trace)),this._enqueue(t,e,void 0,n)}},t.prototype.catch=function(){for(var e=[],n=0;n<arguments.length;n++)e[n-0]=arguments[n];if(1===arguments.length){var r=arguments[0];return this.then(void 0,r)}var o=arguments[0],i=arguments[1];return this.then(void 0,function(e){var n=!1;if("function"==typeof o)n=o.prototype instanceof Error||o===Error?e instanceof o:o(e);else{if(!Array.isArray(o))throw new TypeError("invalid predicate to .catch(), got "+typeof o);for(var r=0;r<o.length;r++)if(e instanceof o[r]){n=!0;break}}return n?i(e):t.reject(e)})},t.prototype.finally=function(t){var e=this,n=function(){return t(e)};return this.then(n,n).return(this)},t.prototype.isFulfilled=function(){return 1===this._state},t.prototype.isRejected=function(){return 2===this._state},t.prototype.isPending=function(){return 0===this._state},t.prototype.value=function(){if(!this.isFulfilled())throw new Error("Promise is not fulfilled");return this._result},t.prototype.reason=function(){if(!this.isRejected())throw new Error("Promise is not rejected");return this._result},t.prototype.inspect=function(){return this.toString()},t.prototype.toString=function(){var t;switch(this._state){case 0:t="pending";break;case 1:t="fulfilled";break;case 2:t="rejected";break;default:t="unknown"}return"[Promise "+this._id+": "+t+"]"},t.prototype.delay=function(e){return this.then(function(n){return new t(function(t){setTimeout(function(){return t(n)},e)})})},t.prototype.return=function(t){return void 0===t?this.then(o):this.then(function(){return t})},t.prototype.throw=function(e){return this.then(function(){return t.reject(e)})},t.resolve=function(e){var n=new t(r);return n._resolve(e),n},t.reject=function(e){var n=new t(r);return n._reject(e),n},t.all=function(e){return new t(function(n,r){if(c.assert(Array.isArray(e),"thenables must be an Array"),0===e.length)return void n([]);for(var o=new Array(e.length),i=e.length,s=0;s<e.length;s++)!function(e,s){(e instanceof t?e:t.resolve(e)).done(function(t){o[s]=t,0==--i&&n(o)},function(t){return r(t)})}(e[s],s)})},t.race=function(e){return new t(function(n,r){c.assert(Array.isArray(e),"thenables must be an Array");for(var o=0;o<e.length;o++){var i=e[o],s=i instanceof t?i:t.resolve(i);t.resolve(s).done(n,r)}})},t.defer=function(){var e,n;return{promise:new t(function(t,r){e=t,n=r}),reject:n,resolve:e}},t.delay=function(){for(var e=[],n=0;n<arguments.length;n++)e[n-0]=arguments[n];if(void 0===arguments[1]){var r=arguments[0];return new t(function(t){setTimeout(t,r)})}return t.resolve(arguments[0]).delay(arguments[1])},t.setLongTraces=function(t){p=t},t.setTracer=function(t){d="function"==typeof t?t:void 0},t.flush=function(){u.default.flush()},t.prototype._setSource=function(t){this._trace&&t._trace&&this._trace.setSource(t._trace)},t.prototype._resolve=function(e){if(c.assert(0===this._state),!e)return void this._fulfill(e);if(this===e)return void this._reject(new TypeError("cannot resolve Promise to self"));if(e instanceof t)return e._setSource(this),void(0===e._state?this._followPromise(e):1===e._state?this._fulfill(e._result):this._reject(e._result));if("object"==typeof e||"function"==typeof e){var n=this._tryGetThen(e);if(n===v)return void this._reject(i(v.error));if("function"==typeof n)return void this._followThenable(e,n)}this._fulfill(e)},t.prototype._tryGetThen=function(t){try{return t.then}catch(t){return v.error=t,v}},t.prototype._fulfill=function(t){c.assert(0===this._state),d&&d(this,"_fulfill("+typeof t+")"),this._state=1,this._result=t,this._flush()},t.prototype._reject=function(t){var e=this;if(c.assert(0===this._state),d&&d(this,"_reject("+t+")"),this._state=2,this._result=t,this._trace&&this._result instanceof Error&&!this._result.trace){this._result.trace=this._trace;var n=this._result.stack;n&&Object.defineProperty(this._result,"stack",{enumerable:!1,get:function(){return n+"\n  from Promise at:\n"+e._trace.inspect()}})}this._flush()},t.prototype._followPromise=function(t){c.assert(0===this._state),d&&d(this,"_follow([Promise "+t._id+"])"),t._enqueue(void 0,void 0,this,void 0)},t.prototype._followThenable=function(t,e){var n=this;c.assert(0===this._state),d&&d(this,"_follow([Thenable])");var r=!1;try{e.call(t,function(t){r||(r=!0,n._resolve(t))},function(t){r||(r=!0,n._reject(i(t)))})}catch(t){r||(r=!0,this._reject(i(t)))}},t.prototype._enqueue=function(e,n,r,o){var i={promise:this,onFulfilled:e,onRejected:n,slave:r,done:o};if(0!==this._state)u.default.enqueue(t._unwrapper,i);else if(this._handlers){var s=this._handlers.length;this._handlers[s]=i}else this._handlers=[i]},t.prototype._flush=function(){if(this._handlers){var e=0,n=this._handlers,r=n.length;for(this._handlers=void 0;e<r;)u.default.enqueue(t._unwrapper,n[e++])}},t.prototype._unwrap=function(e){var n=1===this._state?e.onFulfilled:e.onRejected;if(e.done){if(d&&d(this,"_unwrap()"),"function"!=typeof n){if(2===this._state){var r=new l(this._result,e.done);throw r}return}c.assert(!y),y=this;try{var o=n(this._result);if(o){(o instanceof t?o:t.resolve(o)).done()}y=void 0}catch(t){y=void 0;var r=new l(t,e.done);throw r}}else{var s=e.slave;if(d&&d(this,"_unwrap("+s._id+")"),"function"==typeof n){c.assert(!y),y=s;try{s._resolve(n(this._result))}catch(t){s._reject(i(t))}y=void 0}else 1===this._state?s._fulfill(this._result):s._reject(this._result)}},t._unwrapper=function(t){t.promise._unwrap(t)},t}();e.Promise=g,Object.defineProperty(e,"__esModule",{value:!0}),e.default=g},function(t,e,n){"use strict";var r=n(9);t.exports=r},function(t,e,n){(function(e){var n;n="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},t.exports=n}).call(e,n(1))},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(f===setTimeout)return setTimeout(t,0);if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(t,0);try{return f(t,0)}catch(e){try{return f.call(null,t,0)}catch(e){return f.call(this,t,0)}}}function i(t){if(l===clearTimeout)return clearTimeout(t);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(t);try{return l(t)}catch(e){try{return l.call(null,t)}catch(e){return l.call(this,t)}}}function s(){v&&d&&(v=!1,d.length?p=d.concat(p):_=-1,p.length&&u())}function u(){if(!v){var t=o(s);v=!0;for(var e=p.length;e;){for(d=p,p=[];++_<e;)d&&d[_].run();_=-1,e=p.length}d=null,v=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function a(){}var f,l,h=t.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:n}catch(t){f=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(t){l=r}}();var d,p=[],v=!1,_=-1;h.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];p.push(new c(t,e)),1!==p.length||v||o(u)},c.prototype.run=function(){this.fun.apply(null,this.array)},h.title="browser",h.browser=!0,h.env={},h.argv=[],h.version="",h.versions={},h.on=a,h.addListener=a,h.once=a,h.off=a,h.removeListener=a,h.removeAllListeners=a,h.emit=a,h.prependListener=a,h.prependOnceListener=a,h.listeners=function(t){return[]},h.binding=function(t){throw new Error("process.binding is not supported")},h.cwd=function(){return"/"},h.chdir=function(t){throw new Error("process.chdir is not supported")},h.umask=function(){return 0}},function(t,e,n){(function(t,e){!function(t,n){"use strict";function r(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var r={callback:t,args:e};return a[c]=r,u(c),c++}function o(t){delete a[t]}function i(t){var e=t.callback,r=t.args;switch(r.length){case 0:e();break;case 1:e(r[0]);break;case 2:e(r[0],r[1]);break;case 3:e(r[0],r[1],r[2]);break;default:e.apply(n,r)}}function s(t){if(f)setTimeout(s,0,t);else{var e=a[t];if(e){f=!0;try{i(e)}finally{o(t),f=!1}}}}if(!t.setImmediate){var u,c=1,a={},f=!1,l=t.document,h=Object.getPrototypeOf&&Object.getPrototypeOf(t);h=h&&h.setTimeout?h:t,"[object process]"==={}.toString.call(t.process)?function(){u=function(t){e.nextTick(function(){s(t)})}}():function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?function(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"==typeof n.data&&0===n.data.indexOf(e)&&s(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),u=function(n){t.postMessage(e+n,"*")}}():t.MessageChannel?function(){var t=new MessageChannel;t.port1.onmessage=function(t){s(t.data)},u=function(e){t.port2.postMessage(e)}}():l&&"onreadystatechange"in l.createElement("script")?function(){var t=l.documentElement;u=function(e){var n=l.createElement("script");n.onreadystatechange=function(){s(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n)}}():function(){u=function(t){setTimeout(s,0,t)}}(),h.setImmediate=r,h.clearImmediate=o}}("undefined"==typeof self?void 0===t?this:t:self)}).call(e,n(1),n(6))},function(t,e,n){function r(t,e){this._id=t,this._clearFn=e}var o=Function.prototype.apply;e.setTimeout=function(){return new r(o.call(setTimeout,window,arguments),clearTimeout)},e.setInterval=function(){return new r(o.call(setInterval,window,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(window,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n(7);var i=n(5);e.setImmediate=i.setImmediate,e.clearImmediate=i.clearImmediate},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(13);e.http=r.default;var o=n(10);e.browser=o.default;var i=n(11);e.effects=i.default;var s=n(12);e.listen=s.default;var u=n(14);e.storage=u.default;var c=n(15);e.utils=c},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){var t=navigator.userAgent.toLowerCase(),e=t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[],n=e,r="Windows";switch(!0){case t.indexOf("Win")>-1:r="Windows";break;case t.indexOf("Mac")>-1:r="MacOS";break;case t.indexOf("X11")>-1:r="UNIX";break;case t.indexOf("Linux")>-1:r="Linux"}return/trident/i.test(e[1])?(n=/\brv[ :]+(\d+)/g.exec(t)||[],{name:"IE ",version:n[1]||"",os:r}):"chrome"===e[1]&&null!==(n=t.match(/\bOPR\/(\d+)/))?{name:"Opera",version:n[1],os:r}:(e=e[2]?[e[1],e[2]]:[navigator.appName,navigator.appVersion,"-?"],null!==(n=t.match(/version\/(\d+)/i))&&e.splice(1,1,n[1]),{name:e[0],version:e[1],os:r})}(),o=r.name.toLowerCase(),i=r.version,s=r.os;e.default={name:o,version:i,os:s}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={};r.fadeIn=function(t,e){void 0===e&&(e=0),e+=.1,t.style.opacity=e,t.style.display="block",e<1&&setTimeout(function(){r.fadeIn(t,e)},10)},r.fadeOut=function(t,e){void 0===e&&(e=1);var n=setInterval(function(){e<=0&&clearInterval(n),t.style.opacity=e,t.style.display="none",t.style.filter="alpha(opacity="+100*e+")",e-=.1},25)},e.default=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){void 0===t&&(t={});var e=t.element||{},n=t.eventName||{},r=t.callback||{},o=t.capture||!1;n.split(" ").forEach(function(t){return e.addEventListener(t,r,o)})};e.default=r},function(t,e,n){"use strict";function r(t){return new s.default(function(e,n){var r=new XMLHttpRequest;r.open(t.method,t.url),r.onload=function(t){t.status>=200&&t.status<300?e(JSON.parse(r.response)):n({status:t.status,statusText:r.statusText})},r.onerror=function(t){n({status:t.status,statusText:r.statusText})},t.headers&&Object.keys(t.headers).forEach(function(e){r.setRequestHeader(e,t.headers[e])});var i=t.params;i&&"object"==typeof i&&(i=o(i)),r.send(i)})}function o(t){return Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&")}function i(){return{Accept:"application/json, text/plain, */*","Content-type":"application/x-www-form-urlencoded; charset=UTF-8"}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(20),u={request:function(t){void 0===t&&(t={});var e="",n=t.url||"",s=t.data||"",u=t.method||"get",a=t.doneCallback||function(){},f=t.errorCallback||function(){},l=(t.timeout,{});if(u=u.toLowerCase(),window.fetch){switch(u){case"post":l={mode:"no-cors",method:"post",credentials:"include",headers:i(),body:o(s)};break;default:e="object"==typeof s?"?"+o(s):"",n+=e,l={mode:"no-cors",credentials:"include"}}fetch(n,l).then(c.checkStatus).then(c.parseJson).then(a).catch(f)}else switch(u){case"post":r({method:u,url:n,params:s,headers:i()}).then(a).catch(f);break;default:e="object"==typeof s?"?"+o(s):"",n+=e,r({method:u,url:n,params:s,headers:i()}).then(a).catch(f)}},get:function(t,e){if(void 0===t&&(t=""),"string"!=typeof t)return"uri invalid";if(window.fetch){var n={mode:"no-cors",credentials:"include"};fetch(t,n).then(c.checkStatus).then(c.parseJson).then(e).catch(function(t){return t})}else r({method:"get",url:t,params:"",headers:i()}).then(e).catch(function(t){return t})},post:function(t){void 0===t&&(t={});var e=t.url||"",n=t.data||"",s=t.method||"get",u=t.doneCallback||function(){},a=t.errorCallback||function(){},f=(t.timeout,{});s=s.toLowerCase(),window.fetch?(f={mode:"no-cors",method:"post",credentials:"include",headers:i(),body:o(n)},fetch(e,f).then(c.checkStatus).then(c.parseJson).then(u).catch(a)):r({method:s,url:e,params:n,headers:i()}).then(u).catch(a)}},c={parseJson:function(t){return t.json()},checkStatus:function(t){if(t.ok)return t;var e=new Error(t.statusText);throw e.response=t,e}},a={get:u.get,post:u.post,request:u.request};e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(16);var r={set:function(t){if(void 0===t&&(t={}),!t)return void console.warn("object invalid");for(var e in t){var n=t[e];if(!e)return void console.warn("key invalid");"object"==typeof n&&(n=JSON.stringify(n)),t.hasOwnProperty(e)&&"function"!=typeof n&&localStorage.setItem(e,n)}},get:function(t){try{var e=localStorage.getItem(t);return e&&"{"===e[0]&&(e=JSON.parse(e)),e}catch(t){console.warn("not found value"),console.error(t)}},del:function(t){try{localStorage.removeItem(t)}catch(t){console.warn("can not remove item"),console.error(t)}},append:function(t,e){var n=r.get(t);return null===n&&(n={}),r.set((o={},o[t]=Object.assign(e,n),o));var o}};e.default=r},function(t,e,n){"use strict";var r=function(){function t(t){void 0===t&&(t={}),this.foo=t,this.params=t.params||{}}return t.prototype.init=function(t){return console.log(this.foo),t},t.prototype.mainFunction=function(t){return void 0===t&&(t={}),console.log("mainFunction"),t},t.prototype.someFunction=function(){console.log("someFunction")},t}();new(function(){function t(e){this.foo=e.foo||t.Foo,this.bar=e.bar||t.Bar,console.log("Print otherUtils class constructor function: "),console.log(e)}return t.prototype.init=function(t){return console.log("Print otherUtils class init function: "),console.log("foo object: "+this.foo),console.log("bar object: "+this.bar),t},t.Foo={},t.Bar=0,t}())({foo:"foo value",bar:1}).init();var o=r;t.exports=o},function(t,e,n){"use strict";"function"!=typeof Object.assign&&function(){Object.assign=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(!t)throw TypeError("Cannot convert undefined or null to object");for(var r=0,o=e;r<o.length;r++){var i=o[r];!function(e){e&&Object.keys(e).forEach(function(n){return t[n]=e[n]})}(i)}return t}}()},function(t,e,n){"use strict";var r="function"==typeof Error.captureStackTrace,o=function(){function t(e){void 0===e&&(e=t),r?Error.captureStackTrace(this,e):this.stack="dummy\n<no trace>"}return t.prototype.inspect=function(){var t=this.stack.split("\n");return t.shift(),t.join("\n")},t}();Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},function(t,e,n){"use strict";var r=n(17),o=function(){function t(e){void 0===e&&(e=t),this.stack=new r.default(e)}return t.prototype.setSource=function(e){e.sources?(this.sources=e.sources.concat(e.stack),this.sources.length>t.traceLimit&&(this.sources=this.sources.slice(0,t.traceLimit))):this.sources=[e.stack]},t.prototype.inspect=function(){var t=this.stack.inspect();if(this.sources)for(var e=this.sources.length-1;e>=0;e--)t+="\n  from previous:\n"+this.sources[e].inspect();return t},t.traceLimit=10,t}();Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},function(t,e,n){"use strict";(function(t){var r=n(0),o=function(){function t(){this.length=0,this._max=1e3,this._first=0}return t.prototype.push=function(t,e){return this[this.length++]=t,this[this.length++]=e,this.length<this._max},t.prototype.flush=function(){for(;this._first<this.length;){var t=this[this._first],e=this[this._first+1];this[this._first]=this[this._first+1]=void 0,this._first+=2,t(e)}this.length=0,this._first=0},t}(),i=function(){function e(){var t=this;this._pool=[],this._ring=[new o],this._current=this._ring[0],this._flusher=function(){return t._scheduledFlush()},this._flushing=!1,this._scheduled=!1,this._scheduler=void 0}return e.prototype.setScheduler=function(t){r.assert(void 0===t||null===t||"function"==typeof t),this._scheduler=t},e.prototype.enqueue=function(t,e){this._flushing||this._scheduled||this._schedule(),this._current||(this._current=this._pool.pop(),this._current||(this._current=new o),this._ring.push(this._current)),this._current.push(t,e)||(this._current=void 0)},e.prototype.flush=function(){r.assert(!this._flushing,"cannot recursively flush"),this._flushing=!0;try{for(;;){if(this._ring[0].flush(),1===this._ring.length){this._current=this._ring[0];break}r.assert(this._current!==this._ring[0]),this._pool.push(this._ring.shift())}}finally{this._flushing=!1,this._ring[0].length>0&&!this._scheduled&&this._schedule()}},e.prototype._schedule=function(){r.assert(!this._scheduled);var e=this._scheduler;e||(e="function"==typeof t?t:setTimeout),e(this._flusher),this._scheduled=!0},e.prototype._scheduledFlush=function(){this._scheduled=!1,this.flush()},e}();e.Async=i,e.async=new i,Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.async}).call(e,n(8).setImmediate)},function(t,e,n){"use strict";var r=n(3);e.default=r.default,e.Promise=r.Promise,e.UnhandledRejectionError=r.UnhandledRejectionError;var o=n(21);e.polyfill=o.default;var i=n(2);e.BaseError=i.default},function(t,e,n){"use strict";function r(t){void 0===t&&(t=!1);var e=i.getGlobal();return!!e&&(t||"function"!=typeof e.Promise?(e.Promise=o.Promise,!0):e.Promise instanceof o.Promise)}var o=n(3),i=n(0);Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},function(t,e,n){t.exports=n(4)}])});