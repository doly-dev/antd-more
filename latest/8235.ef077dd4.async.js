"use strict";(self.webpackChunkantd_more=self.webpackChunkantd_more||[]).push([[8235],{18441:function(n,t,e){function i(n,t){void 0===t&&(t=2);for(var e=n+"";e.length<t;)e="0"+e;return e}e.d(t,{Z:function(){return h}});var o=1e3,r=6e4,u=36e5,s=24*u;function c(n){return{days:Math.floor(n/s),hours:Math.floor(n%s/u),minutes:Math.floor(n%u/r),seconds:Math.floor(n%r/o),milliseconds:Math.floor(n%o)}}function a(n,t){var e=t.days,o=t.hours,r=t.minutes,u=t.seconds,s=t.milliseconds;return-1===n.indexOf("DD")?o+=24*e:n=n.replace("DD",i(e)),-1===n.indexOf("HH")?r+=60*o:n=n.replace("HH",i(o)),-1===n.indexOf("mm")?u+=60*r:n=n.replace("mm",i(r)),-1===n.indexOf("ss")?s+=1e3*u:n=n.replace("ss",i(u)),n.replace("SSS",i(s,3))}function l(n,t){return void 0===t&&(t="HH:mm:ss"),a(t,c(n))}var h=function(){function n(n){for(var t in this.options={time:0,interval:1e3},n)Object.prototype.hasOwnProperty.call(n,t)&&(this.options[t]=n[t]);this.options.time="number"!=typeof this.options.time||this.options.time<0?0:Math.ceil(this.options.time),this.timer=null,this.counting=!1,this.completed=!1,this.currentTime=this.options.time}return n.prototype.start=function(){this.counting||(this.counting=!0,this.tick())},n.prototype.pause=function(){clearTimeout(this.timer),this.counting=!1},n.prototype.reset=function(){this.pause(),this.completed=!1,this.currentTime=this.options.time,this.handleChange()},n.prototype.handleChange=function(){var n,t;null===(t=(n=this.options).onChange)||void 0===t||t.call(n,this.currentTime)},n.prototype.handleEnd=function(){var n,t;this.pause(),this.completed=!0,null===(t=(n=this.options).onEnd)||void 0===t||t.call(n)},n.prototype.tick=function(){var n=this,t=n.options.interval;n.completed?n.handleEnd():n.timer=setTimeout((function(){n.currentTime-=t,n.currentTime<0&&(n.currentTime=0),n.handleChange(),n.currentTime<=0?n.handleEnd():n.tick()}),t)},n.format=l,n.parseTimeData=c,n.parseFormat=a,n.padZero=i,n}()},46667:function(n,t,e){e.d(t,{Z:function(){return F}});var i=e(32985),o=e(58633),r=e(97635);var u=function(n){var t=(0,r.Z)(n),e=(0,o.useCallback)((function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];var i=t.current;return null==i?void 0:i.apply(void 0,n)}),[]);return e},s=e(26007),c=new(e(20324).Ct)({stdTTL:3e5}),a=function(n){return c.get(n)},l=function(n,t,e){c.set(n,t,e)},h=e(11854);var p=e(30915);function d(){return"undefined"==typeof document||void 0===document.visibilityState||"hidden"!==document.visibilityState}var f=[];var v=!1;if("undefined"!=typeof window&&window.addEventListener&&!v){window.addEventListener("visibilitychange",(function(){if(d())for(var n=0;n<f.length;n++){(0,f[n])()}}),!1),v=!0}var m=function(n){return f.push(n),function(){var t=f.indexOf(n);f.splice(t,1)}},y=[];var g=!1;if("undefined"!=typeof window&&window.addEventListener&&!g){var b=function(){if(d()&&("undefined"==typeof navigator||void 0===navigator.onLine||navigator.onLine))for(var n=0;n<y.length;n++){(0,y[n])()}};window.addEventListener("visibilitychange",b,!1),window.addEventListener("focus",b,!1),g=!0}var T=function(n){return y.push(n),function(){var t=y.indexOf(n);y.splice(t,1)}},w={},I=function(n,t){return t&&w[t]?w[t]:t?(w[t]=n().then((function(n){return delete w[t],n})).catch((function(n){return delete w[t],Promise.reject(n)})),w[t]):n()},O=function(){function n(n,t){this.params=[],this.pollingWhenVisibleFlag=!1,this.pollingTimer=null,this.counter=1,this.destroyed=!1,this.async=n,this.options=(0,i.pi)({cacheTime:3e5,persisted:!1,pollingWhenHidden:!0,refreshOnWindowFocus:!1,focusTimespan:5e3},t),this.unsubscribes=[],this.init()}return n.prototype.init=function(){var n,t,e,i=this.options,o=i.pollingInterval,r=i.refreshOnWindowFocus,u=i.focusTimespan;if(this.updateDebounce(),o&&this.unsubscribes.push(m(this.rePolling.bind(this))),r){var s=(n=this.refresh.bind(this),t=u,e=!1,function(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];e||(e=!0,n.apply(void 0,i),setTimeout((function(){e=!1}),t))});this.unsubscribes.push(T(s))}},n.prototype.updateDebounce=function(){var n,t,e,i=this.options,o=i.debounceInterval,r=i.throttleInterval;this.debounce="number"==typeof o&&o>0?(n=this._run,void 0===(t=o)&&(t=0),void 0===e&&(e=!1),(0,h.Z)(n,t,e)):void 0,this.throttle="number"==typeof r&&r>0?(0,p.Z)(this._run,r):void 0},n.prototype.rePolling=function(){this.pollingWhenVisibleFlag&&(this.pollingWhenVisibleFlag=!1,this.refresh())},n.prototype.afterUpdateOptions=function(n,t){void 0===t&&(t={}),("debounceInterval"in t&&t.debounceInterval!==n.debounceInterval||"throttleInterval"in t&&t.throttleInterval!==n.throttleInterval)&&this.updateDebounce()},n.prototype.updateOptions=function(n){var t=this.options,e=(0,i.pi)((0,i.pi)({},this.options),n);this.options=e,this.afterUpdateOptions(t,e)},n.prototype._run=function(){for(var n=this,t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this.pollingTimer&&clearTimeout(this.pollingTimer);var i=this.counter;this.params=t;var o=this.options,r=o.cacheKey,u=o.cacheTime,s=o.persisted,c=o.formatResult,h=o.onSuccess,p=o.onError,f=o.onFinally,v=o.onBefore,m=o.pollingWhenHidden,y=o.pollingInterval;return null==v||v(t),new Promise((function(e,o){if(r&&s){var v=a(r);if(v&&i===n.counter)return void Promise.resolve().then((function(){null==h||h(v,t),e(v)})).finally((function(){null==f||f()}))}I((function(){return n.async.apply(n,t)}),r).then((function(o){if(i===n.counter){var s="function"==typeof c?c(o,t):o;r&&l(r,s,u),null==h||h(s,t),e(s)}})).catch((function(e){i===n.counter&&(null==p||p(e,t),o(e))})).finally((function(){if(i===n.counter&&(null==f||f(),y)){if(!d()&&!m)return void(n.pollingWhenVisibleFlag=!0);n.pollingTimer=setTimeout((function(){n.run.apply(n,t)}),y)}}))}))},n.prototype.run=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return this.debounce?(this.debounce.apply(this,n),Promise.resolve(null)):this.throttle?(this.throttle.apply(this,n),Promise.resolve(null)):(this.counter+=1,this._run.apply(this,n))},n.prototype.refresh=function(){return this.run.apply(this,this.params)},n.prototype.cancel=function(){this.debounce&&this.debounce.cancel(),this.throttle&&this.throttle.cancel(),this.pollingTimer&&(clearTimeout(this.pollingTimer),this.pollingTimer=null),this.counter+=1},n.prototype.destroy=function(n){void 0===n&&(n=!0),n&&this.cancel(),this.destroyed||(this.destroyed=!0,this.unsubscribes.forEach((function(n){return n()})),this.unsubscribes=[])},n.prototype.resume=function(){this.destroyed&&(this.destroyed=!1,this.init())},n}(),E=O,C=function(){};var F=function(n,t){var e=t||{},c=e.autoRun,l=void 0===c||c,h=e.refreshDeps,p=void 0===h?[]:h,d=e.defaultParams,f=e.loadingDelay,v=e.__INTERNAL_FORMAT__,m=e.defaultLoading,y=void 0!==m&&m,g=e.initialData,b=e.cacheKey,T=void 0===b?"":b,w=e.cacheTime,I=void 0===w?3e5:w,O=e.persisted,F=void 0!==O&&O,k=e.onSuccess,W=void 0===k?C:k,D=e.onError,H=void 0===D?C:D,_=e.onFinally,L=void 0===_?C:_,S=e.onBefore,P=void 0===S?C:S,R=e.pollingInterval,Z=void 0===R?0:R,M=e.pollingWhenHidden,x=void 0===M||M,A=e.refreshOnWindowFocus,B=void 0!==A&&A,K=e.focusTimespan,V=void 0===K?5e3:K,j=e.debounceInterval,N=e.throttleInterval,U=(0,i.CR)((0,o.useState)({params:[],loading:y,error:null,data:T?a(T):g}),2),q=U[0],z=U[1],G=(0,o.useRef)(null),J=u(n),Q=u(W),X=u(H),Y=u(L),$=u(P),nn=(0,r.Z)(v),tn=(0,o.useCallback)((function(n){$(n),G.current&&clearTimeout(G.current),(T?a(T):void 0)&&F||(z((function(t){return(0,i.pi)((0,i.pi)({},t),{loading:!f,params:n})})),f&&(G.current=setTimeout((function(){z((function(n){return(0,i.pi)((0,i.pi)({},n),{loading:!0})}))}),f)))}),[T,f,$,F]),en=(0,o.useCallback)((function(n,t){G.current&&clearTimeout(G.current),z((function(t){return(0,i.pi)((0,i.pi)({},t),{data:n,error:null,loading:!1})})),Q(n,t)}),[Q]),on=(0,o.useCallback)((function(n,t){G.current&&clearTimeout(G.current),z((function(t){return(0,i.pi)((0,i.pi)({},t),{error:n,loading:!1})})),X(n,t)}),[X]),rn=(0,o.useRef)();rn.current||(rn.current=new E(J,{cacheKey:T,cacheTime:I,persisted:F,formatResult:nn.current,onSuccess:en,onError:on,onFinally:Y,onBefore:tn,debounceInterval:j,throttleInterval:N,pollingInterval:Z,pollingWhenHidden:x,refreshOnWindowFocus:B,focusTimespan:V})),(0,s.Z)((function(){rn.current.updateOptions({cacheKey:T,cacheTime:I,persisted:F,formatResult:nn.current,onSuccess:en,onError:on,onFinally:Y,onBefore:tn,debounceInterval:j,throttleInterval:N,pollingInterval:Z,pollingWhenHidden:x,refreshOnWindowFocus:B,focusTimespan:V})}),[Q,X,T,I,F,j,N,Y,$,Z,x,B,V,en,on,tn]);var un=(0,o.useCallback)((function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return rn.current.run.apply(rn.current,n)}),[]),sn=(0,o.useCallback)((function(){return rn.current.refresh()}),[]),cn=(0,o.useCallback)((function(){rn.current.cancel(),G.current&&clearTimeout(G.current),z((function(n){return(0,i.pi)((0,i.pi)({},n),{loading:!1})}))}),[]);return(0,s.Z)((function(){l&&Array.isArray(p)&&p.length>0&&sn()}),[l].concat(p)),(0,o.useEffect)((function(){if(l){var n=Array.isArray(d)?d:void 0!==d?[d]:[];un.apply(void 0,n)}return rn.current.resume(),function(){cn(),rn.current.destroy(!1)}}),[]),(0,i.pi)((0,i.pi)({},q),{run:un,cancel:cn,mutate:function(n){z("function"==typeof n?function(t){return(0,i.pi)((0,i.pi)({},t),{data:n(q.data)})}:function(t){return(0,i.pi)((0,i.pi)({},t),{data:n})})},refresh:sn})}}}]);