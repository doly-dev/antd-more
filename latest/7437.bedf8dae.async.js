"use strict";(self.webpackChunkantd_more=self.webpackChunkantd_more||[]).push([[7437],{20552:function(e,t){var r=Math.random().toString(16).substring(2),n=1;t.Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return++n,"".concat(e).concat(r).concat(n)}},67437:function(e,t,r){r.d(t,{Z:function(){return le}});var n=r(35118),i=r.n(n),o=r(14005),a=r.n(o),l=r(978),s=r(24174),u=r(34944),c=r.n(u),d=r(6889),p=r(38683),f=r(17662),v=r.n(f),m=r(31404),g=r.n(m),h=r(17925),x=r.n(h),w=r(5307),j=r(13344),b=r(43655),U=r.n(b),L=r(68857),y=r(46277),P=r(5242);function Z(e){if("string"!=typeof e||!e)return"";var t="/";e.indexOf("\\")>-1&&(t="\\");var r=e.split(t);return r[r.length-1]||""}var M={},C=function(e,t,r){return M[e]||(M[e]={}),M[e][t]||(M[e][t]=URL.createObjectURL(r)),M[e][t]},k=r(86986),S=r(50107),R=["imgUrl","style"],T=function(e){var t=e.imgUrl,r=void 0===t?"":t,n=e.style,o=void 0===n?{}:n,l=a()(e,R);return(0,S.jsx)(k.Z,i()(i()({footer:null,width:"auto",centered:!0,style:i()({maxWidth:"80%"},o)},l),{},{children:(0,S.jsx)("img",{alt:"",style:{width:"100%"},src:r})}))},O=l.memo(T),N=r(20552),z=["onUpload","fileTypeMessage","fileSizeMessage","maxSize","maxCount","onGetPreviewUrl","dragger","icon","title","previewModalProps","accept","className","disabled","action","beforeUpload"],G=function(e){var t=e.onUpload,r=e.fileTypeMessage,n=void 0===r?"只支持上传 %s 文件":r,o=e.fileSizeMessage,s=void 0===o?"必须小于 %s！":o,u=e.maxSize,d=void 0===u?2097152:u,p=e.maxCount,f=e.onGetPreviewUrl,m=e.dragger,h=void 0!==m&&m,b=(e.icon,e.title,e.previewModalProps),k=e.accept,R=e.className,T=e.disabled,G=e.action,I=e.beforeUpload,q=a()(e,z),A=l.useMemo((function(){return(0,N.Z)("item-upload")}),[]),E=l.useRef(!1),F=(0,y.Z)({open:!1,title:"",imgUrl:""}),_=x()(F,2),D=_[0],H=_[1],V=l.useCallback((function(e,r){var i=function(e,t){if(!t||!t.trim()||"*"===t)return!0;var r=t.toLowerCase().split(/,(?:\s+)?/),n=!1;return r.some((function(t){if(e.type===t||0===t.indexOf(".")&&e.name.toLowerCase().substring(e.name.length-t.length)===t)n=!0;else if(t.includes("/*")&&e.type.includes("/")){var r=t.match(/(.*)\/\*/),i=e.type.split("/")[0];r&&r[1]===i&&(n=!0)}return n})),n}(e,k);if(!i)return!1!==n&&w.ZP.error(n.replace(/%s/g,k)),j.Z.LIST_IGNORE;var o=function(e,t){return e.size<t}(e,d);if(!o){var a=(0,L.Z)(d);return!1!==s&&w.ZP.error(s.replace(/%s/g,a)),j.Z.LIST_IGNORE}return I?I(e,r):!!G||!!t||!(null==q||!q.customRequest)}),[k,d,I,G,t,null==q?void 0:q.customRequest,n,s]),W=l.useCallback((function(e){var r=null;!function n(){E.current?r=setTimeout(n,100):(E.current=!0,clearTimeout(r),setTimeout((function(){var r;null===(r=e.onProgress)||void 0===r||r.call(e,{percent:99}),null==t||t(e.file).then(e.onSuccess).catch(e.onError).finally((function(){E.current=!1}))})))}()}),[t]),B=l.useMemo((function(){return null==q||!q.showUploadList||"object"!==c()(q.showUploadList)||!1!==q.showUploadList.showPreviewIcon}),[null==q?void 0:q.showUploadList]),J=l.useCallback(function(){var e=g()(v()().mark((function e(t){return v()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(B){e.next=2;break}return e.abrupt("return");case 2:if(!f||t.preview){e.next=8;break}return e.next=5,f((null==t?void 0:t.originFileObj)||t);case 5:t.preview=e.sent,e.next=9;break;case 8:t.url||(t.url=C(A,t.uid,(null==t?void 0:t.originFileObj)||t));case 9:if(t.preview||t.url||t.thumbUrl){e.next=12;break}return w.ZP.error("当前文件不支持预览！"),e.abrupt("return");case 12:H({open:!0,imgUrl:t.preview||t.url||t.thumbUrl,title:t.name||Z(t.url)});case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[B,f,H,A]),K=l.useCallback((function(){H({open:!1})}),[H]),Q=l.useMemo((function(){return h?j.Z.Dragger:j.Z}),[h]);return(0,P.Z)((function(){var e,t;M[e=A]&&(t?(M[e][t]&&URL.revokeObjectURL(M[e][t]),delete M[e][t]):(Object.keys(M[e]).forEach((function(t){URL.revokeObjectURL(M[e][t])})),delete M[e]))})),(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(Q,i()({accept:k,beforeUpload:V,customRequest:G?void 0:W,onPreview:J,disabled:T,className:U()("antd-more-form-upload",R),action:G,maxCount:p},q)),B&&!q.onPreview&&(0,S.jsx)(O,i()(i()(i()({},D),b),{},{onCancel:K}))]})},I=["showUploadList","icon","title"],q={showPreviewIcon:!1},A=function(e){var t=e.showUploadList,r=e.icon,n=void 0===r?(0,S.jsx)(p.Z,{}):r,o=e.title,s=void 0===o?"点击上传":o,u=a()(e,I),f=l.useMemo((function(){return("boolean"!=typeof t||!1!==t)&&("object"===c()(t)?i()(i()({},q),t):q)}),[t]);return(0,S.jsx)(G,i()(i()({},u),{},{showUploadList:f,children:(0,S.jsx)(d.ZP,{icon:n,children:s})}))},E=r(3220),F=r(11288),_=function(e){var t=e.loading,r=void 0!==t&&t,n=e.uploading,i=void 0!==n&&n,o=e.icon,a=void 0===o?(0,S.jsx)(E.Z,{}):o,s=e.title,u=void 0===s?"点击上传":s,c=l.useMemo((function(){return r?"加载中":i?"上传中":u}),[r,u,i]);return(0,S.jsxs)("div",{children:[r||i?(0,S.jsx)(F.Z,{}):a,(0,S.jsx)("div",{style:{marginTop:8,lineHeight:1.5},children:c})]})},D=["fileList","maxCount","icon","title"],H=function(e){var t=e.fileList,r=e.maxCount,n=e.icon,o=e.title,l=a()(e,D);return(0,S.jsx)(G,i()(i()({fileList:t,maxCount:r,listType:"picture-card"},l),{},{accept:(null==l?void 0:l.accept)||".jpg, .jpeg, .png",children:r&&t&&t.length>=r?null:(0,S.jsx)(_,{icon:n,title:o})}))},V=r(4143),W=r.n(V),B=r(22050),J=r(50238),K=["fileList","className","icon","title"],Q="antd-more-form-upload-avatar",X=function(e){var t=e.fileList,r=e.icon,n=e.title,i=l.useState(""),o=x()(i,2),a=o[0],s=o[1],u=l.useMemo((function(){return Array.isArray(t)&&t.length>0?t[0]:null}),[t]),c="uploading"===(null==u?void 0:u.status);l.useEffect((function(){u&&(u.thumbUrl||u.url||u.preview||(u.preview=URL.createObjectURL((null==u?void 0:u.originFileObj)||u)),s(u.thumbUrl||u.url||u.preview))}),[u]);var d=null;d=u&&"error"===u.status?(0,S.jsxs)("div",{style:{width:"100%"},children:[(0,S.jsx)(J.Z,{}),(0,S.jsx)("div",{style:{marginTop:8,padding:"0 8px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},title:u.name||"",children:u.name||""})]}):c||!a?(0,S.jsx)(_,{uploading:c,icon:r,title:n}):(0,S.jsx)("img",{src:a,alt:u&&u.name||""});var p=(0,S.jsx)("div",{className:U()("".concat(Q,"-box"),W()({},"".concat(Q,"-box-error"),u&&"error"===u.status)),children:d});return u&&"error"===u.status&&u.response?(0,S.jsx)(B.Z,{title:u.response,children:p}):p},Y=function(e){var t=e.fileList,r=e.className,n=e.icon,o=e.title,l=a()(e,K);return(0,S.jsx)(G,i()(i()({},l),{},{listType:"picture-card",accept:(null==l?void 0:l.accept)||".jpg, .jpeg, .png",fileList:t,showUploadList:!1,multiple:!1,maxCount:1,className:U()(Q,r),children:(0,S.jsx)(X,{fileList:t,icon:n,title:o})}))},$=r(69538),ee=["showUploadList","icon","title"],te={showPreviewIcon:!1},re=function(e){var t=e.showUploadList,r=e.icon,n=void 0===r?(0,S.jsx)($.Z,{}):r,o=e.title,s=void 0===o?"单击或拖动文件到此区域进行上传":o,u=a()(e,ee),d=l.useMemo((function(){return("boolean"!=typeof t||!1!==t)&&("object"===c()(t)?i()(i()({},te),t):te)}),[t]);return(0,S.jsxs)(G,i()(i()({},u),{},{dragger:!0,showUploadList:d,children:[(0,S.jsx)("p",{className:"ant-upload-drag-icon",children:n}),(0,S.jsx)("p",{className:"ant-upload-text",children:s})]}))},ne=r(79969),ie=["name","uploadProps","accept","onUpload","onGetPreviewUrl","fileTypeMessage","fileSizeMessage","maxSize","maxCount","type","disabled","multiple","icon","title","required","transform"],oe=function(e){return Array.isArray(e)?e:e&&e.fileList},ae=function(e){var t=e.name,r=e.uploadProps,n=e.accept,o=e.onUpload,u=e.onGetPreviewUrl,c=e.fileTypeMessage,d=e.fileSizeMessage,p=e.maxSize,f=e.maxCount,v=e.type,m=void 0===v?"default":v,g=e.disabled,h=void 0!==g&&g,x=e.multiple,w=void 0!==x&&x,j=e.icon,b=e.title,U=e.required,L=e.transform,y=a()(e,ie),P=l.useMemo((function(){return"image"===m?H:"avatar"===m?Y:"dragger"===m?re:A}),[m]);return(0,S.jsx)(s.Z,i()(i()({required:U,valuePropName:"fileList",getValueFromEvent:oe,transform:L,name:t,rules:[{validator:function(e,t){var r="",n=t&&"function"==typeof L?L(t):t;return(!n||Array.isArray(n)&&n.length<=0)&&(r=U?"请上传".concat((0,ne.Z)(y)):""),r?Promise.reject(r):Promise.resolve()}}]},y),{},{children:(0,S.jsx)(P,i()({accept:n,onUpload:o,onGetPreviewUrl:u,fileTypeMessage:c,fileSizeMessage:d,maxSize:p,maxCount:f,disabled:h,multiple:w,icon:j,title:b},r))}))};ae.Preview=O;var le=ae}}]);