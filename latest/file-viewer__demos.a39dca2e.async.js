"use strict";(self.webpackChunkantd_more=self.webpackChunkantd_more||[]).push([[7857],{31273:function(e,t,n){n.r(t);var r=n(17925),o=n.n(r),i=n(978),a=n(6889),s=n(57425),c=n(50107);t.default=function(){var e=i.useState(!1),t=o()(e,2),n=t[0],r=t[1],u=i.useState(!1),l=o()(u,2),p=l[0],d=l[1];return(0,c.jsxs)("div",{children:[(0,c.jsx)(a.ZP,{onClick:function(){return r(!0)},children:"预览图片-UploadFile"}),(0,c.jsx)(a.ZP,{onClick:function(){return d(!0)},children:"预览图片-url"}),(0,c.jsx)(s.Z,{file:{uid:"-1",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",name:"图片文件名称111"},open:n,onCancel:function(){return r(!1)}}),(0,c.jsx)(s.Z,{file:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",open:p,onCancel:function(){return d(!1)}})]})}},51635:function(e,t,n){n.r(t);var r=n(17925),o=n.n(r),i=n(978),a=n(6889),s=n(57425),c=n(20598),u=n(4199),l=n(60249),p=n(88255),d=n(28774),f=n(63145),h=n(28538),m=n(50107),v={image:{uid:"-1",url:c,name:"test.jpg"},audio:{uid:"-2",url:u,name:"test.mp3"},video:{uid:"-3",url:l,name:"test.mp4"},pdf:{uid:"-4",url:p,name:"test.pdf"},word:{uid:"-5",url:d,name:"test.docx"},excel:{uid:"-6",url:f,name:"test.xlsx"},zip:{uid:"-7",url:h,name:"test.zip"}};t.default=function(){var e=i.useState(!1),t=o()(e,2),n=t[0],r=t[1],c=i.useState(),u=o()(c,2),l=u[0],p=u[1],d=function(e){p(v[e]),r(!0)};return(0,m.jsxs)("div",{children:[(0,m.jsx)(a.ZP,{onClick:function(){return d("image")},children:"预览图片"}),(0,m.jsx)(a.ZP,{onClick:function(){return d("audio")},children:"预览音频"}),(0,m.jsx)(a.ZP,{onClick:function(){return d("video")},children:"预览视频"}),(0,m.jsx)(a.ZP,{onClick:function(){return d("pdf")},children:"预览pdf"}),(0,m.jsx)(a.ZP,{onClick:function(){return d("word")},children:"预览word"}),(0,m.jsx)(a.ZP,{onClick:function(){return d("excel")},children:"预览excel"}),(0,m.jsx)(a.ZP,{onClick:function(){return d("zip")},children:"预览zip"}),(0,m.jsx)(s.Z,{file:l,open:n,onCancel:function(){return r(!1)}})]})}},61783:function(e,t,n){n.r(t);var r=n(35118),o=n.n(r),i=(n(978),n(57425)),a=n(20598),s=n(4199),c=n(60249),u=n(88255),l=n(28774),p=n(63145),d=n(28538),f=n(50107),h=[{uid:"-1",url:a,name:"test.jpg"},{uid:"-2",url:s,name:"test.mp3"},{uid:"-3",url:c,name:"test.mp4"},{uid:"-4",url:u,name:"test.pdf"},{uid:"-5",url:l,name:"test.docx"},{uid:"-6",url:p,name:"test.xlsx"},{uid:"-7",url:d,name:"test.zip"}].map((function(e){return o()(o()({},e),{},{thumbUrl:i.Z.getFileThumbUrl(e)})}));t.default=function(){return(0,f.jsx)(i.Z.PictureCard,{fileList:h})}},67437:function(e,t,n){n.d(t,{Z:function(){return se}});var r=n(35118),o=n.n(r),i=n(14005),a=n.n(i),s=n(978),c=n(24174),u=n(34944),l=n.n(u),p=n(6889),d=n(38683),f=n(17662),h=n.n(f),m=n(31404),v=n.n(m),g=n(17925),y=n.n(g),x=n(10204),j=n(66540),b=n(43655),w=n.n(b),k=n(68857),P=n(46277),C=n(5242),U=n(57612);function L(e){if("string"!=typeof e||!e)return"";var t="/";e.indexOf("\\")>-1&&(t="\\");var n=e.split(t);return n[n.length-1]||""}var Z={},S=function(e,t,n){return Z[e]||(Z[e]={}),Z[e][t]||(Z[e][t]=URL.createObjectURL(n)),Z[e][t]},T=n(28467),M=n(50107),_=["imgUrl","style"],E=function(e){var t=e.imgUrl,n=void 0===t?"":t,r=e.style,i=void 0===r?{}:r,s=a()(e,_);return(0,M.jsx)(T.Z,o()(o()({footer:null,width:"auto",centered:!0,style:o()({maxWidth:"80%"},i)},s),{},{children:(0,M.jsx)("img",{alt:"",style:{width:"100%"},src:n})}))},O=s.memo(E),I=["onUpload","fileTypeMessage","fileSizeMessage","maxSize","maxCount","onGetPreviewUrl","dragger","icon","title","previewModalProps","accept","className","disabled","action","beforeUpload"],V=function(e){var t=e.onUpload,n=e.fileTypeMessage,r=void 0===n?"只支持上传 %s 文件":n,i=e.fileSizeMessage,c=void 0===i?"必须小于 %s！":i,u=e.maxSize,p=void 0===u?2097152:u,d=e.maxCount,f=e.onGetPreviewUrl,m=e.dragger,g=void 0!==m&&m,b=(e.icon,e.title,e.previewModalProps),T=e.accept,_=e.className,E=e.disabled,V=e.action,z=e.beforeUpload,R=a()(e,I),D=s.useMemo((function(){return(0,U.Z)("__am_itemUpload_")}),[]),N=s.useRef(!1),A=(0,P.Z)({open:!1,title:"",imgUrl:""}),F=y()(A,2),K=F[0],G=F[1],q=s.useCallback((function(e,n){var o=function(e,t){if(!t||!t.trim()||"*"===t)return!0;var n=t.toLowerCase().split(/,(?:\s+)?/),r=!1;return n.some((function(t){if(e.type===t||0===t.indexOf(".")&&e.name.toLowerCase().substring(e.name.length-t.length)===t)r=!0;else if(t.includes("/*")&&e.type.includes("/")){var n=t.match(/(.*)\/\*/),o=e.type.split("/")[0];n&&n[1]===o&&(r=!0)}return r})),r}(e,T);if(!o)return!1!==r&&x.ZP.error(r.replace(/%s/g,T)),j.Z.LIST_IGNORE;var i=function(e,t){return e.size<t}(e,p);if(!i){var a=(0,k.Z)(p);return!1!==c&&x.ZP.error(c.replace(/%s/g,a)),j.Z.LIST_IGNORE}return z?z(e,n):!!V||!!t||!(null==R||!R.customRequest)}),[T,p,z,V,t,null==R?void 0:R.customRequest,r,c]),W=s.useCallback((function(e){var n=null;!function r(){N.current?n=setTimeout(r,100):(N.current=!0,clearTimeout(n),setTimeout((function(){var n;null===(n=e.onProgress)||void 0===n||n.call(e,{percent:99}),null==t||t(e.file).then(e.onSuccess).catch(e.onError).finally((function(){N.current=!1}))})))}()}),[t]),J=s.useMemo((function(){return null==R||!R.showUploadList||"object"!==l()(R.showUploadList)||!1!==R.showUploadList.showPreviewIcon}),[null==R?void 0:R.showUploadList]),B=s.useCallback(function(){var e=v()(h()().mark((function e(t){return h()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(J){e.next=2;break}return e.abrupt("return");case 2:if(!f||t.preview){e.next=8;break}return e.next=5,f((null==t?void 0:t.originFileObj)||t);case 5:t.preview=e.sent,e.next=9;break;case 8:t.url||(t.url=S(D,t.uid,(null==t?void 0:t.originFileObj)||t));case 9:if(t.preview||t.url||t.thumbUrl){e.next=12;break}return x.ZP.error("当前文件不支持预览！"),e.abrupt("return");case 12:G({open:!0,imgUrl:t.preview||t.url||t.thumbUrl,title:t.name||L(t.url)});case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[J,f,G,D]),H=s.useCallback((function(){G({open:!1})}),[G]),Q=s.useMemo((function(){return g?j.Z.Dragger:j.Z}),[g]);return(0,C.Z)((function(){var e,t;Z[e=D]&&(t?(Z[e][t]&&URL.revokeObjectURL(Z[e][t]),delete Z[e][t]):(Object.keys(Z[e]).forEach((function(t){URL.revokeObjectURL(Z[e][t])})),delete Z[e]))})),(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(Q,o()({accept:T,beforeUpload:q,customRequest:V?void 0:W,onPreview:B,disabled:E,className:w()("antd-more-form-upload",_),action:V,maxCount:d},R)),J&&!R.onPreview&&(0,M.jsx)(O,o()(o()(o()({},K),b),{},{onCancel:H}))]})},z=["showUploadList","icon","title"],R={showPreviewIcon:!1},D=function(e){var t=e.showUploadList,n=e.icon,r=void 0===n?(0,M.jsx)(d.Z,{}):n,i=e.title,c=void 0===i?"点击上传":i,u=a()(e,z),f=s.useMemo((function(){return("boolean"!=typeof t||!1!==t)&&("object"===l()(t)?o()(o()({},R),t):R)}),[t]);return(0,M.jsx)(V,o()(o()({},u),{},{showUploadList:f,children:(0,M.jsx)(p.ZP,{icon:r,children:c})}))},N=n(1124),A=n(97863),F=function(e){var t=e.loading,n=void 0!==t&&t,r=e.uploading,o=void 0!==r&&r,i=e.icon,a=void 0===i?(0,M.jsx)(N.Z,{}):i,c=e.title,u=void 0===c?"点击上传":c,l=s.useMemo((function(){return n?"加载中":o?"上传中":u}),[n,u,o]);return(0,M.jsxs)("div",{children:[n||o?(0,M.jsx)(A.Z,{}):a,(0,M.jsx)("div",{style:{marginTop:8,lineHeight:1.5},children:l})]})},K=["fileList","maxCount","icon","title"],G=function(e){var t=e.fileList,n=e.maxCount,r=e.icon,i=e.title,s=a()(e,K);return(0,M.jsx)(V,o()(o()({fileList:t,maxCount:n,listType:"picture-card"},s),{},{accept:(null==s?void 0:s.accept)||".jpg, .jpeg, .png",children:n&&t&&t.length>=n?null:(0,M.jsx)(F,{icon:r,title:i})}))},q=n(4143),W=n.n(q),J=n(22050),B=n(50238),H=["fileList","className","icon","title"],Q="antd-more-form-upload-avatar",X=function(e){var t=e.fileList,n=e.icon,r=e.title,o=s.useState(""),i=y()(o,2),a=i[0],c=i[1],u=s.useMemo((function(){return Array.isArray(t)&&t.length>0?t[0]:null}),[t]),l="uploading"===(null==u?void 0:u.status);s.useEffect((function(){u&&(u.thumbUrl||u.url||u.preview||(u.preview=URL.createObjectURL((null==u?void 0:u.originFileObj)||u)),c(u.thumbUrl||u.url||u.preview))}),[u]);var p=null;p=u&&"error"===u.status?(0,M.jsxs)("div",{style:{width:"100%"},children:[(0,M.jsx)(B.Z,{}),(0,M.jsx)("div",{style:{marginTop:8,padding:"0 8px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},title:u.name||"",children:u.name||""})]}):l||!a?(0,M.jsx)(F,{uploading:l,icon:n,title:r}):(0,M.jsx)("img",{src:a,alt:u&&u.name||""});var d=(0,M.jsx)("div",{className:w()("".concat(Q,"-box"),W()({},"".concat(Q,"-box-error"),u&&"error"===u.status)),children:p});return u&&"error"===u.status&&u.response?(0,M.jsx)(J.Z,{title:u.response,children:d}):d},Y=function(e){var t=e.fileList,n=e.className,r=e.icon,i=e.title,s=a()(e,H);return(0,M.jsx)(V,o()(o()({},s),{},{listType:"picture-card",accept:(null==s?void 0:s.accept)||".jpg, .jpeg, .png",fileList:t,showUploadList:!1,multiple:!1,maxCount:1,className:w()(Q,n),children:(0,M.jsx)(X,{fileList:t,icon:r,title:i})}))},$=n(69538),ee=["showUploadList","icon","title"],te={showPreviewIcon:!1},ne=function(e){var t=e.showUploadList,n=e.icon,r=void 0===n?(0,M.jsx)($.Z,{}):n,i=e.title,c=void 0===i?"单击或拖动文件到此区域进行上传":i,u=a()(e,ee),p=s.useMemo((function(){return("boolean"!=typeof t||!1!==t)&&("object"===l()(t)?o()(o()({},te),t):te)}),[t]);return(0,M.jsxs)(V,o()(o()({},u),{},{dragger:!0,showUploadList:p,children:[(0,M.jsx)("p",{className:"ant-upload-drag-icon",children:r}),(0,M.jsx)("p",{className:"ant-upload-text",children:c})]}))},re=n(79969),oe=["name","uploadProps","accept","onUpload","onGetPreviewUrl","fileTypeMessage","fileSizeMessage","maxSize","maxCount","type","disabled","multiple","icon","title","previewModalProps","required","transform"],ie=function(e){return Array.isArray(e)?e:e&&e.fileList},ae=function(e){var t=e.name,n=e.uploadProps,r=e.accept,i=e.onUpload,u=e.onGetPreviewUrl,l=e.fileTypeMessage,p=e.fileSizeMessage,d=e.maxSize,f=e.maxCount,h=e.type,m=void 0===h?"default":h,v=e.disabled,g=void 0!==v&&v,y=e.multiple,x=void 0!==y&&y,j=e.icon,b=e.title,w=e.previewModalProps,k=e.required,P=e.transform,C=a()(e,oe),U=s.useMemo((function(){return"image"===m?G:"avatar"===m?Y:"dragger"===m?ne:D}),[m]);return(0,M.jsx)(c.Z,o()(o()({required:k,valuePropName:"fileList",getValueFromEvent:ie,transform:P,name:t,rules:[{validator:function(e,t){var n="",r=t&&"function"==typeof P?P(t):t;return(!r||Array.isArray(r)&&r.length<=0)&&(n=k?"请上传".concat((0,re.Z)(C)):""),n?Promise.reject(n):Promise.resolve()}}]},C),{},{children:(0,M.jsx)(U,o()({accept:r,onUpload:i,onGetPreviewUrl:u,fileTypeMessage:l,fileSizeMessage:p,maxSize:d,maxCount:f,disabled:g,multiple:x,icon:j,title:b,previewModalProps:w},n))}))};ae.Preview=O;var se=ae},41683:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(34944),o=n.n(r),i=n(51148),a=n(97248),s={},c={getItem:function(e){return s[e]||null},setItem:function(e,t){s[e]=t},removeItem:function(e){delete s[e]}};var u=1;function l(e){return void 0===e&&(e=""),"cache2_"+("string"==typeof e&&e?e:"".concat(Math.random().toString(16).substring(2,8),"_").concat(u++))}var p=function(e){function t(t,n){var r,a,s=e.call(this)||this;return"string"==typeof t?r=t:"object"===o()(t)&&(a=t),a||"object"!==o()(n)||(a=n),s.options=(0,i.pi)({max:-1,stdTTL:0,storage:c,maxStrategy:"limited",checkperiod:0,needParsed:"boolean"==typeof(null==a?void 0:a.needParsed)?a.needParsed:!!(null==a?void 0:a.storage)},a),s.options.storage===c||function(e){try{var t="object"===o()(e)&&null!==e&&!!e.setItem&&!!e.getItem&&!!e.removeItem;if(t){var n=l();if(e.setItem(n,"1"),"1"!==e.getItem(n))return!1;e.removeItem(n)}return t}catch(e){return console.error("[cache2] The current custom storage is not supported. The default memory cache will be used."),!1}}(s.options.storage)||(s.options.storage=c,s.options.needParsed=!1),s.cacheKey=l(r),s.startCheckperiod(),s}return(0,i.ZT)(t,e),t.prototype._check=function(e,t){var n=!0;return 0!==t.t&&t.t<Date.now()&&(n=!1,this.del(e),this.emit("expired",e,t.v)),n},t.prototype._wrap=function(e,t){var n=Date.now(),r="number"==typeof t?t:this.options.stdTTL;return{v:e,t:r>0?n+r:0,n:n}},t.prototype._isLimited=function(e){return this.options.max>-1&&e>=this.options.max},t.prototype._getReplaceKey=function(e,t){var n=e[0];return e.forEach((function(e){(t[e].t<t[n].t||t[e].t===t[n].t&&t[e].n<t[n].n)&&(n=e)})),n},t.prototype._parse=function(e){if(!this.options.needParsed)return e;try{return JSON.parse(e,this.options.reviver)}catch(t){return e}},t.prototype._stringify=function(e){return this.options.needParsed?JSON.stringify(e,this.options.replacer):e},Object.defineProperty(t.prototype,"cacheValues",{get:function(){return this._parse(this.options.storage.getItem(this.cacheKey))||{}},enumerable:!1,configurable:!0}),t.prototype.setCacheValues=function(e){this.options.storage.setItem(this.cacheKey,this._stringify(e))},t.prototype.get=function(e){var t=this.cacheValues[e];if(t&&this._check(e,t))return t.v},t.prototype.mget=function(e){var t=this,n={};if(!Array.isArray(e))return n;var r=this.cacheValues;return e.forEach((function(e){var o=r[e];o&&t._check(e,o)&&(n[e]=o.v)})),n},t.prototype.getAll=function(){var e=Object.keys(this.cacheValues);return this.mget(e)},t.prototype.set=function(e,t,n){if(0===this.options.max)return!1;var r=this.cacheValues,o=Object.keys(r);if(!r[e]&&this._isLimited(o.length)){var i=this.keys();if(this._isLimited(i.length)){if("replaced"!==this.options.maxStrategy)return!1;var a=this._getReplaceKey(i,r);this.del(a)}}return r[e]=this._wrap(t,n),this.setCacheValues(r),this.emit("set",e,r[e].v),!0},t.prototype.mset=function(e){var t=this,n=!0;return e.forEach((function(e){var r=t.set(e.key,e.value,e.ttl);n&&!r&&(n=!1)})),n},t.prototype.del=function(e){var t=this,n=this.cacheValues,r=0;return(Array.isArray(e)?e:[e]).forEach((function(e){if(n[e]){r++;var o=n[e];delete n[e],t.emit("del",e,o.v)}})),r>0&&this.setCacheValues(n),r},t.prototype.clear=function(){this.options.storage.removeItem(this.cacheKey)},t.prototype.keys=function(){var e=this,t=this.cacheValues;return Object.keys(t).filter((function(n){return e._check(n,t[n])}))},t.prototype.has=function(e){var t=this.cacheValues[e];return!(!t||!this._check(e,t))},t.prototype.take=function(e){var t,n=this.cacheValues[e];return n&&this._check(e,n)&&(t=n.v,this.del(e)),t},t.prototype.ttl=function(e,t){var n=this.cacheValues,r=n[e];return!(!r||!this._check(e,r))&&(n[e]=this._wrap(r.v,t),!0)},t.prototype.getTtl=function(e){var t=this.cacheValues,n=t[e];if(n&&this._check(e,n))return t[e].t},t.prototype.startCheckperiod=function(){var e=this;this.keys(),this.options.checkperiod>0&&(clearTimeout(this._checkTimeout),this._checkTimeout=setTimeout((function(){e.startCheckperiod()}),this.options.checkperiod))},t.prototype.stopCheckperiod=function(){clearTimeout(this._checkTimeout)},t}(a.Z)},28833:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67538),o="".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap"," ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/),i="aria-",a="data-";function s(e,t){return 0===e.indexOf(t)}function c(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t=!1===n?{aria:!0,data:!0,attr:!0}:!0===n?{aria:!0}:(0,r.Z)({},n);var c={};return Object.keys(e).forEach((function(n){(t.aria&&("role"===n||s(n,i))||t.data&&s(n,a)||t.attr&&o.includes(n))&&(c[n]=e[n])})),c}},56190:function(e,t,n){function r(e){return Array.isArray(e)}n.d(t,{Z:function(){return r}})},14679:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(56190),o=n(588);function i(e){if("string"==typeof e)return e;if((0,r.Z)(e))return"".concat(e.map(i));if((0,o.Z)(e))return e.toString();var t=""+e;return"0"==t&&1/e==-1/0?"-0":t}function a(e){return null==e?"":i(e)}},28774:function(e,t,n){e.exports=n.p+"static/test.c3b39340.docx"},4199:function(e,t,n){e.exports=n.p+"static/test.13a07866.mp3"},60249:function(e,t,n){e.exports=n.p+"static/test.9977b04e.mp4"},88255:function(e,t,n){e.exports=n.p+"static/test.fb9403e0.pdf"},63145:function(e,t,n){e.exports=n.p+"static/test.5baa83a1.xlsx"},28538:function(e,t,n){e.exports=n.p+"static/test.feaade1b.zip"},20598:function(e,t,n){e.exports=n.p+"static/test.7e18ecd8.jpg"}}]);