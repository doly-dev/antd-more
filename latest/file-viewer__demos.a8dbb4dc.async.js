"use strict";(self.webpackChunkantd_more=self.webpackChunkantd_more||[]).push([[7857],{39272:function(e,n,t){t.r(n);var r=t(7190),o=t.n(r),i=t(7028),l=t(49778),u=t(78134),a=t(68925);n.default=function(){var e=i.useState(!1),n=o()(e,2),t=n[0],r=n[1],c=i.useState(!1),s=o()(c,2),d=s[0],f=s[1];return(0,a.jsxs)("div",{children:[(0,a.jsx)(l.ZP,{onClick:function(){return r(!0)},children:"预览图片-UploadFile"}),(0,a.jsx)(l.ZP,{onClick:function(){return f(!0)},children:"预览图片-url"}),(0,a.jsx)(u.Z,{file:{uid:"-1",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",name:"图片文件名称111"},open:t,onCancel:function(){return r(!1)}}),(0,a.jsx)(u.Z,{file:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",open:d,onCancel:function(){return f(!1)}})]})}},74633:function(e,n,t){t.r(n);var r=t(96983),o=t.n(r),i=t(36045),l=t.n(i),u=t(7190),a=t.n(u),c=t(7028),s=t(49778),d=t(78134),f=t(76926),p=t(22548),m=t(68925),v={ofd:{uid:"-1",url:f,name:"test.ofd"}};n.default=function(){var e=c.useState(!1),n=a()(e,2),t=n[0],r=n[1],i=c.useState(),u=a()(i,2),f=u[0],h=u[1],x=function(){var e=l()(o()().mark((function e(n){return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h(v[n]),r(!0);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,m.jsxs)("div",{children:[(0,m.jsx)(s.ZP,{onClick:function(){return x("ofd")},children:"预览ofd"}),(0,m.jsx)(d.Z,{file:f,open:t,onCancel:function(){return r(!1)},renderView:function(e,n){var t=n.file,r="string"==typeof t?"":t.name,o="string"==typeof t?t:t.url||t.preview;return!o||".ofd"!==r.slice(-4)&&".ofd"!==o.slice(-4)?e:(0,m.jsx)(p.Z,{fileUrl:o})},modalProps:{width:1200}})]})}},4964:function(e,n,t){t.r(n);var r=t(7190),o=t.n(r),i=t(7028),l=t(49778),u=t(78134),a=t(20598),c=t(4199),s=t(60249),d=t(88255),f=t(28774),p=t(63145),m=t(28538),v=t(68925),h={image:{uid:"-1",url:a,name:"test.jpg"},audio:{uid:"-2",url:c,name:"test.mp3"},video:{uid:"-3",url:s,name:"test.mp4"},pdf:{uid:"-4",url:d,name:"test.pdf"},word:{uid:"-5",url:f,name:"test.docx"},excel:{uid:"-6",url:p,name:"test.xlsx"},zip:{uid:"-7",url:m,name:"test.zip"}};n.default=function(){var e=i.useState(!1),n=o()(e,2),t=n[0],r=n[1],a=i.useState(),c=o()(a,2),s=c[0],d=c[1],f=function(e){d(h[e]),r(!0)};return(0,v.jsxs)("div",{children:[(0,v.jsx)(l.ZP,{onClick:function(){return f("image")},children:"预览图片"}),(0,v.jsx)(l.ZP,{onClick:function(){return f("audio")},children:"预览音频"}),(0,v.jsx)(l.ZP,{onClick:function(){return f("video")},children:"预览视频"}),(0,v.jsx)(l.ZP,{onClick:function(){return f("pdf")},children:"预览pdf"}),(0,v.jsx)(l.ZP,{onClick:function(){return f("word")},children:"预览word"}),(0,v.jsx)(l.ZP,{onClick:function(){return f("excel")},children:"预览excel"}),(0,v.jsx)(l.ZP,{onClick:function(){return f("zip")},children:"预览zip"}),(0,v.jsx)(u.Z,{file:s,open:t,onCancel:function(){return r(!1)}})]})}},79258:function(e,n,t){t.r(n);var r=t(53985),o=t.n(r),i=(t(7028),t(78134)),l=t(20598),u=t(4199),a=t(60249),c=t(88255),s=t(28774),d=t(63145),f=t(28538),p=t(76926),m=t(22548),v=t(68925),h=[{uid:"-1",url:l,name:"test.jpg"},{uid:"-2",url:u,name:"test.mp3"},{uid:"-3",url:a,name:"test.mp4"},{uid:"-4",url:c,name:"test.pdf"},{uid:"-5",url:s,name:"test.docx"},{uid:"-6",url:d,name:"test.xlsx"},{uid:"-7",url:f,name:"test.zip"},{uid:"-8",url:p,name:"test.ofd"}].map((function(e){return o()(o()({},e),{},{thumbUrl:i.Z.getFileThumbUrl(e)})}));n.default=function(){return(0,v.jsx)(i.Z.PictureCard,{fileList:h,renderView:function(e,n){var t=n.file,r="string"==typeof t?"":t.name,o="string"==typeof t?t:t.url||t.preview;return!o||".ofd"!==r.slice(-4)&&".ofd"!==o.slice(-4)?e:(0,v.jsx)(m.Z,{fileUrl:o})}})}},95875:function(e,n,t){t.d(n,{ZR:function(){return f}});var r=t(98423),o=t.n(r),i=t(7028),l=t(31203),u=t(87974),a=t(68925),c=["children"],s={current:{locale:u.Z}};var d=i.createContext(null);function f(){var e;return null!==(e=(0,i.useContext)(d))&&void 0!==e?e:s.current}n.ZP=function(e){var n=e.children,t=o()(e,c),r=f(),i=(0,l.Z)({},r),u=(0,l.Z)(i,t);return(0,a.jsx)(d.Provider,{value:u,children:n})}},54763:function(e,n,t){var r=t(7028);n.Z=r.createContext(void 0)},64367:function(e,n,t){var r=t(7028).createContext({setFieldTransform:function(){},hideLabel:!1});n.Z=r},179:function(e,n,t){var r=t(7028).createContext({parentListName:[]});n.Z=r},37008:function(e,n,t){t.d(n,{IY:function(){return s},Ih:function(){return i},QT:function(){return c},hw:function(){return a},mh:function(){return u},t6:function(){return l}});var r=t(8598),o=t(82162),i=function(e){return e.time="hours",e.date="days",e.week="weeks",e.month="months",e.quarter="months",e.year="years",e}({}),l=function(e){return e.date="YYYY-MM-DD",e.week="YYYY-wo",e.month="YYYY-MM",e.quarter="YYYY-\\QQ",e.year="YYYY",e}({});function u(e,n){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(e)return e;var r="date"===n&&t?" HH:mm:ss":"";return l[n]+r||"YYYY-MM-DD"}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"date",n=arguments.length>1?arguments[1]:void 0,t=n.disabledDateBefore,r=n.disabledDateAfter;if("number"!=typeof t&&"number"!=typeof r)return function(){return!1};var l=i[e];return l?function(n){if(!n)return!1;var i="number"==typeof t,u="number"==typeof r,a=t,c=r;return"quarter"===e&&(i&&(a*=3),u&&(c*=3)),i&&u?n<=(0,o.ZP)().add(a,l).endOf(l)||n>=(0,o.ZP)().add(c,l).startOf(l):i?n<=(0,o.ZP)().add(a,l).endOf(l):!!u&&n>=(0,o.ZP)().add(c,l).startOf(l)}:function(){return!1}}function c(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD";return(0,r.Z)(e)?e.map((function(e){return c(e,n)})):"string"==typeof e&&e?n===l.quarter?(0,o.Y3)(e):(0,o.ZP)(e,n):e}function s(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"HH:mm:ss";return(0,r.Z)(e)?e.map((function(e){return s(e,n)})):"string"==typeof e&&e?(0,o.ZP)(e,n):e}},76982:function(e,n,t){t.d(n,{K8:function(){return s},Mu:function(){return c},me:function(){return a}});var r=t(8842),o=t.n(r),i=t(8598),l=t(82162),u=t(37008),a="__invalid_random_value_".concat(Math.random(),"__");function c(e,n){return l.ZP.isDayjs(e)?n===u.t6.quarter?(0,l.Cu)(e):e.format(n):(0,i.Z)(e)&&e.length>0?e.map((function(e){return c(e,n)})):e}function s(e,n,t){if((0,i.Z)(e)&&e.length<=0&&!t||(0,i.Z)(n)&&n.length<=0||!n)return e;var r;if((0,i.Z)(e)&&(0,i.Z)(n))r=e.map((function(e,t){return"object"===o()(e)||(0,i.Z)(e)?s(e,n[t]):"function"==typeof n[t]?n[t](e):e}));else if("object"===o()(e)&&"object"===o()(n))for(var l in r={},e)"object"===o()(e[l])||(0,i.Z)(e[l])?r[l]=s(e[l],n[l],r):"function"==typeof n[l]?r[l]=n[l](e[l],r):r[l]=e[l],r[l]===a&&delete r[l];else r="function"==typeof n?n(e,t):e;return r}},62178:function(e,n,t){t.d(n,{Z:function(){return z}});var r=t(96983),o=t.n(r),i=t(36045),l=t.n(i),u=t(73457),a=t.n(u),c=t(53985),s=t.n(c),d=t(7190),f=t.n(d),p=t(98423),m=t.n(p),v=t(7028),h=t(33619),x=t(58619),b=t(60259),Z=t.n(b),g=t(8598),j=t(11352),y=t(48179),w=t(61410),P=t(62776),C=t(76982),k=function(e,n){var t=[];return(0,g.Z)(n)&&n.length>0&&n.forEach((function(e){(0,g.Z)(e)?t.push.apply(t,a()(e)):t.push(e)})),(0,g.Z)(e)?t.push.apply(t,a()(e)):t.push(e),t},U=t(64367),L=t(54763),R=t(49778),F=t(16021),M=t(43928),T=t(95875),Y=t(68925),S=function(e){var n=(0,T.ZR)().locale,t=e.onSubmit,r=void 0===t?function(){}:t,o=e.onReset,i=void 0===o?function(){}:o,l=e.submitText,u=void 0===l?n.form.common.submit:l,a=e.resetText,c=void 0===a?n.form.common.reset:a,d=e.submitButtonProps,f=void 0===d?{}:d,p=e.resetButtonProps,m=void 0===p?{}:p,h=e.noReset,x=void 0!==h&&h,b=e.form,Z=e.render,j=v.useCallback((function(e){null==b||b.resetFields(),Promise.resolve().then((function(){null==i||i(e)}))}),[b,i]),y=v.useCallback((function(e){null==b||b.submit(),null==r||r(e)}),[b,r]),w=v.useMemo((function(){var e=[(0,Y.jsx)(R.ZP,s()(s()({type:"primary"},(0,M.Z)(f,["preventDefault"])),{},{onClick:function(e){var n;null!=f&&f.preventDefault||y(e),null==f||null===(n=f.onClick)||void 0===n||n.call(f,e)},children:u}),"submit"),(0,Y.jsx)(R.ZP,s()(s()({},(0,M.Z)(m,["preventDefault"])),{},{onClick:function(e){var n;null!=m&&m.preventDefault||j(e),null==m||null===(n=m.onClick)||void 0===n||n.call(m,e)},children:c}),"reset")];return x?e.slice(0,1):e}),[f,u,m,c,x,y,j]),P=Z?Z(e,w):w;return P?(0,g.Z)(P)?(null==P?void 0:P.length)<1?null:1===P.length?P[0]:(0,Y.jsx)(F.Z,{children:P}):P:null},N=(t(19455),["contentRender","formRender","pressEnterSubmit","ready","loading","submitter","onFinish","onFinishFailed","onReset","children","initialValues","labelWidth","layout","labelCol","hideLabel","transformRecordActionRef","className","formComponentType","form","formExtraRef"]);var z=function(e){var n=e.contentRender,t=e.formRender,r=e.pressEnterSubmit,i=void 0===r||r,u=e.ready,c=void 0===u||u,d=e.loading,p=void 0!==d&&d,b=e.submitter,R=void 0===b?{}:b,F=e.onFinish,M=e.onFinishFailed,T=e.onReset,z=e.children,D=e.initialValues,O=e.labelWidth,E=void 0===O?84:O,I=e.layout,_=void 0===I?"horizontal":I,q=e.labelCol,V=e.hideLabel,W=void 0!==V&&V,$=e.transformRecordActionRef,B=e.className,H=e.formComponentType,A=e.form,G=e.formExtraRef,Q=m()(e,N),K=h.Z.useForm(),J=f()(K,1)[0],X=v.useRef(A||J),ee=v.useState(p),ne=f()(ee,2),te=ne[0],re=ne[1],oe=(0,y.Z)(),ie=(0,w.Z)(),le=v.useState(!1),ue=f()(le,2),ae=ue[0],ce=ue[1],se=v.useRef({}),de=v.useCallback((function(e,n,t){if(e&&n)if((0,g.Z)(t)&&t.length>0){var r=k(e,t);se.current=(0,x.Z)(se.current,r,n)}else(0,g.Z)(e)?se.current=(0,x.Z)(se.current,e,n):se.current[String(e)]=n}),[]),fe=v.useRef({}),pe=v.useCallback((function(e,n){fe.current[e]=n}),[]),me=v.useCallback((function(e){delete fe.current[e]}),[]),ve=function(e,n){return e?n?{values:s()(s()({},e.values),n.values),errorFields:[].concat(a()(e.errorFields),[n.errorFields]),outOfDate:e.outOfDate||n.outOfDate}:e:n},he=v.useCallback(l()(o()().mark((function e(){var n,t,r,i,l,u=arguments;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=u.length>0&&void 0!==u[0]&&u[0],t=null,r=Object.values(fe.current),i=0;case 4:if(!(i<r.length)){e.next=16;break}return e.prev=5,e.next=8,r[i].validateFields();case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(5),t?t=ve(t,e.t0):(t=e.t0,n&&(0,g.Z)(null===e.t0||void 0===e.t0?void 0:e.t0.errorFields)&&(null===(l=e.t0.errorFields[0])||void 0===l?void 0:l.name)&&r[i].scrollToField(e.t0.errorFields[0].name));case 13:i+=1,e.next=4;break;case 16:return e.abrupt("return",t);case 17:case"end":return e.stop()}}),e,null,[[5,10]])}))),[]),xe="boolean"!=typeof R&&R?R:{},be=R?(0,Y.jsx)(S,s()(s()({onReset:T},xe),{},{form:X.current,submitButtonProps:s()({loading:te,disabled:!c},null==xe?void 0:xe.submitButtonProps),resetButtonProps:s()({disabled:te||!c},null==xe?void 0:xe.resetButtonProps)})):null,Ze=v.Children.toArray(z),ge=n?n(Ze,be,X.current):Ze,je=v.useMemo((function(){if("undefined"!=typeof window)return H&&["DrawerForm"].includes(H)?function(e){return e.parentNode||document.body}:void 0}),[H]);v.useImperativeHandle($,(function(){return{get:function(){return se.current}}})),v.useImperativeHandle(G,(function(){return{getTransformFieldsValue:function(){var e=X.current.getFieldsValue();return(0,C.K8)(e,se.current)},transformFieldsValue:function(e){return(0,C.K8)(e,se.current)}}})),(0,P.Z)((function(){var e,n;c&&(null===(e=X.current)||void 0===e||null===(n=e.resetFields)||void 0===n||n.call(e))}),[c]),(0,P.Z)((function(){re(p)}),[p]);var ye=(0,Y.jsx)(L.Z.Provider,{value:{regChildForm:pe,unregChildForm:me},children:(0,Y.jsx)(U.Z.Provider,{value:{setFieldTransform:de,layout:_,hideLabel:W,labelWidth:E,labelCol:q,form:X.current,formComponentType:H,getPopupContainer:je},children:(0,Y.jsxs)(h.Z,s()(s()({form:X.current,onKeyPress:function(e){var n,t,r=null==xe||null===(n=xe.submitButtonProps)||void 0===n?void 0:n.htmlType;i&&"submit"!==r&&"Enter"===e.key&&c&&(null===(t=X.current)||void 0===t||t.submit())},onFinish:function(){var e=l()(o()().mark((function e(n){var t,r;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"==typeof F){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,he(!0);case 4:if(!e.sent){e.next=7;break}return e.abrupt("return");case 7:if(t=(0,C.K8)(n,se.current),r=F(t),!(0,j.Z)(r)){e.next=12;break}return re(!0),e.abrupt("return",r.then((function(e){return re(!1),e})).catch((function(e){return re(!1),Promise.reject(e)})));case 12:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),onFinishFailed:function(){var e=l()(o()().mark((function e(n){var t,r;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n,e.next=3,he();case 3:(r=e.sent)&&(t=ve(r,t)),"function"==typeof M&&M(t);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),initialValues:D,layout:_,labelCol:q,className:Z()("antd-more-form",B)},Q),{},{children:[!1!==(null==Q?void 0:Q.component)&&(0,Y.jsx)("input",{type:"text",style:{display:"none"}}),(0,Y.jsx)(h.Z.Item,{noStyle:!0,shouldUpdate:!0,children:function(e){return ae||setTimeout((function(){ie.current&&!oe.current&&ce(!0)})),X.current=e,null}}),ge]}))})});return t?t(ye,be):ye}},84808:function(e,n,t){var r=t(53985),o=t.n(r),i=t(98423),l=t.n(i),u=(t(7028),t(16021)),a=t(33619),c=t(8598),s=t(43503),d=t(88309),f=t(62178),p=t(95875),m=t(68925),v=["submitter"],h=function(e){var n=(0,p.ZR)().bizForm,t=o()(o()({},n),e),r=t.submitter,i=l()(t,v),a="boolean"!=typeof r&&r?r:{},d=!(void 0!==r&&!r)&&o()({render:function(e,n){return(0,m.jsx)(s.Z,{placeholderLabel:!0,style:{marginBottom:0},children:(0,c.Z)(n)&&n.length>1?(0,m.jsx)(u.Z,{children:n}):n})}},a);return(0,m.jsx)(f.Z,o()({submitter:d,contentRender:function(e,n){return(0,m.jsxs)(m.Fragment,{children:[e,n]})}},i))};h.Item=s.Z,h.List=d.Z,h.Provider=a.Z.Provider,h.ErrorList=a.Z.ErrorList,h.useForm=a.Z.useForm,h.useFormInstance=a.Z.useFormInstance,h.useWatch=a.Z.useWatch,n.Z=h},43503:function(e,n,t){t.d(n,{Z:function(){return C}});var r=t(92820),o=t.n(r),i=t(73457),l=t.n(i),u=t(53985),a=t.n(u),c=t(98423),s=t.n(c),d=t(7028),f=t(33619),p=t(64367),m=t(179),v=t(84139),h=t(68925),x=["after","before","align","children"],b="antd-more-form-item-wrapper",Z=function(e){var n=e.after,t=e.before,r=e.align,o=e.children,i=s()(e,x),l=d.isValidElement(o)?d.cloneElement(o,(0,v.Z)(null==o?void 0:o.props,i,!0)):o;if(!n&&!t)return void 0===l?null:l;var u=r?{alignItems:r}:{};return(0,h.jsxs)("div",{className:b,style:u,children:[t&&(0,h.jsx)("div",{className:"".concat(b,"-before"),children:t}),(0,h.jsx)("div",{className:"".concat(b,"-content"),children:l}),n&&(0,h.jsx)("div",{className:"".concat(b,"-after"),children:n})]})},g=t(60259),j=t.n(g),y=(t(19455),["children","transform","renderField","name","label","colon","className","colProps","rules","extendRules","labelWidth","placeholderLabel","hideLabel","labelCol","contentBefore","contentAfter","contentConfig","shouldUpdate"]),w=["style"],P=function(e){var n=e.children,t=e.transform,r=e.renderField,i=e.name,u=e.label,c=e.colon,v=e.className,x=(e.colProps,e.rules),b=void 0===x?[]:x,g=e.extendRules,P=void 0===g?[]:g,C=e.labelWidth,k=e.placeholderLabel,U=e.hideLabel,L=e.labelCol,R=e.contentBefore,F=e.contentAfter,M=e.contentConfig,T=e.shouldUpdate,Y=s()(e,y),S=d.useContext(p.Z),N=S.setFieldTransform,z=S.hideLabel,D=S.labelWidth,O=S.labelCol,E=d.useContext(m.Z).parentListName,I=d.useMemo((function(){var e=O||{},n=e.style,t=s()(e,w),r=void 0!==C?C:D,o={};return(void 0!==U?U:z)&&(o.display="none"),!1!==r&&null!=r&&(o.width=r),a()(a()(a()({},t),L),{},{style:a()(a()(a()({},n),o),null==L?void 0:L.style)})}),[C,U,L,z,D,O]);return d.useEffect((function(){i&&t&&N&&N(i,t,E)}),[i,E,N,t]),(0,h.jsx)(f.Z.Item,a()(a()({name:i,validateFirst:!0,rules:[].concat(l()(b),l()(P)),labelCol:I,shouldUpdate:T,label:void 0!==u?u:k?" ":void 0,colon:void 0!==c?c:!k&&void 0,className:j()(v,o()({},"antd-more-form-item-placeholder-label",k))},Y),{},{children:T?function(){var e="function"==typeof n?n.apply(void 0,arguments):n;return(0,h.jsx)(Z,a()(a()({before:R,after:F},M),{},{children:r?r(e):e}))}:(0,h.jsx)(Z,a()(a()({before:R,after:F},M),{},{children:r?r(n):n}))}))};P.useStatus=f.Z.Item.useStatus;var C=P},25486:function(e,n,t){t.d(n,{Z:function(){return ce}});var r=t(53985),o=t.n(r),i=t(98423),l=t.n(i),u=t(7028),a=t(8598),c=t(43503),s=t(8842),d=t.n(s),f=t(49778),p=t(24801),m=t(96983),v=t.n(m),h=t(36045),x=t.n(h),b=t(7190),Z=t.n(b),g=t(51716),j=t(77899),y=t(60259),w=t.n(y),P=t(84395),C=t(77033),k=t(1317),U=t(7757);function L(e){if("string"!=typeof e||!e)return"";var n="/";e.indexOf("\\")>-1&&(n="\\");var t=e.split(n);return t[t.length-1]||""}var R={},F=function(e,n,t){return R[e]||(R[e]={}),R[e][n]||(R[e][n]=URL.createObjectURL(t)),R[e][n]},M=function(e,n){R[e]&&(n?(R[e][n]&&URL.revokeObjectURL(R[e][n]),delete R[e][n]):(Object.keys(R[e]).forEach((function(n){URL.revokeObjectURL(R[e][n])})),delete R[e]))},T=t(84545),Y=t(68925),S=["imgUrl","style"],N=function(e){var n=e.imgUrl,t=void 0===n?"":n,r=e.style,i=void 0===r?{}:r,u=l()(e,S);return(0,Y.jsx)(T.Z,o()(o()({footer:null,width:"auto",centered:!0,style:o()({maxWidth:"80%"},i)},u),{},{children:(0,Y.jsx)("img",{alt:"",style:{width:"100%"},src:t})}))},z=u.memo(N),D=t(95875),O=["onUpload","fileTypeMessage","fileSizeMessage","maxSize","maxCount","onGetPreviewUrl","dragger","icon","title","previewModalProps","accept","className","disabled","action","beforeUpload"],E=function(e){var n=(0,D.ZR)().locale,t=e.onUpload,r=e.fileTypeMessage,i=void 0===r?n.form.upload.fileTypeMessage:r,a=e.fileSizeMessage,c=void 0===a?n.form.upload.fileSizeMessage:a,s=e.maxSize,f=void 0===s?2097152:s,p=e.maxCount,m=e.onGetPreviewUrl,h=e.dragger,b=void 0!==h&&h,y=(e.icon,e.title,e.previewModalProps),R=e.accept,T=e.className,S=e.disabled,N=e.action,E=e.beforeUpload,I=l()(e,O),_=u.useMemo((function(){return(0,U.Z)("__am_itemUpload_")}),[]),q=u.useRef(!1),V=(0,C.Z)({open:!1,title:"",imgUrl:""}),W=Z()(V,2),$=W[0],B=W[1],H=u.useCallback((function(e,n){var r=function(e,n){if(!n||!n.trim()||"*"===n)return!0;var t=n.toLowerCase().split(/,(?:\s+)?/),r=!1;return t.some((function(n){if(e.type===n||0===n.indexOf(".")&&e.name.toLowerCase().substring(e.name.length-n.length)===n)r=!0;else if(n.includes("/*")&&e.type.includes("/")){var t=n.match(/(.*)\/\*/),o=e.type.split("/")[0];t&&t[1]===o&&(r=!0)}return r})),r}(e,R);if(!r)return!1!==i&&g.ZP.error(i.replace(/%s/g,R)),j.Z.LIST_IGNORE;var o=function(e,n){return e.size<n}(e,f);if(!o){var l=(0,P.Z)(f);return!1!==c&&g.ZP.error(c.replace(/%s/g,l)),j.Z.LIST_IGNORE}return E?E(e,n):!!N||!!t||!(null==I||!I.customRequest)}),[R,f,E,N,t,null==I?void 0:I.customRequest,i,c]),A=u.useCallback((function(e){var n=null;!function r(){q.current?n=setTimeout(r,100):(q.current=!0,clearTimeout(n),setTimeout((function(){var n;null===(n=e.onProgress)||void 0===n||n.call(e,{percent:99}),null==t||t(e.file).then(e.onSuccess).catch(e.onError).finally((function(){q.current=!1}))})))}()}),[t]),G=u.useMemo((function(){return null==I||!I.showUploadList||"object"!==d()(I.showUploadList)||!1!==I.showUploadList.showPreviewIcon}),[null==I?void 0:I.showUploadList]),Q=u.useCallback(function(){var e=x()(v()().mark((function e(t){return v()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(G){e.next=2;break}return e.abrupt("return");case 2:if(!m||t.preview){e.next=8;break}return e.next=5,m((null==t?void 0:t.originFileObj)||t);case 5:t.preview=e.sent,e.next=9;break;case 8:t.url||(t.url=F(_,t.uid,(null==t?void 0:t.originFileObj)||t));case 9:if(t.preview||t.url||t.thumbUrl){e.next=12;break}return g.ZP.error(n.form.upload.unsupportPreviewTiptext),e.abrupt("return");case 12:B({open:!0,imgUrl:t.preview||t.url||t.thumbUrl,title:t.name||L(t.url)});case 13:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[G,m,B,_,n.form.upload.unsupportPreviewTiptext]),K=u.useCallback((function(){B({open:!1})}),[B]),J=u.useMemo((function(){return b?j.Z.Dragger:j.Z}),[b]);return(0,k.Z)((function(){M(_)})),(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(J,o()({accept:R,beforeUpload:H,customRequest:N?void 0:A,onPreview:Q,disabled:S,className:w()("antd-more-form-upload",T),action:N,maxCount:p},I)),G&&!I.onPreview&&(0,Y.jsx)(z,o()(o()(o()({},$),y),{},{onCancel:K}))]})},I=["showUploadList","icon","title"],_={showPreviewIcon:!1},q=function(e){var n=(0,D.ZR)().locale,t=e.showUploadList,r=e.icon,i=void 0===r?(0,Y.jsx)(p.Z,{}):r,a=e.title,c=void 0===a?n.form.upload.buttonText:a,s=l()(e,I),m=u.useMemo((function(){return("boolean"!=typeof t||!1!==t)&&("object"===d()(t)?o()(o()({},_),t):_)}),[t]);return(0,Y.jsx)(E,o()(o()({},s),{},{showUploadList:m,children:(0,Y.jsx)(f.ZP,{icon:i,children:c})}))},V=t(54788),W=t(41085),$=function(e){var n=(0,D.ZR)().locale,t=e.loading,r=void 0!==t&&t,o=e.uploading,i=void 0!==o&&o,l=e.icon,a=void 0===l?(0,Y.jsx)(V.Z,{}):l,c=e.title,s=void 0===c?n.form.upload.buttonText:c,d=u.useMemo((function(){return r?n.form.upload.loading:i?n.form.upload.uploading:s}),[r,n.form.upload.loading,n.form.upload.uploading,s,i]);return(0,Y.jsxs)("div",{children:[r||i?(0,Y.jsx)(W.Z,{}):a,(0,Y.jsx)("div",{style:{marginTop:8,lineHeight:1.5},children:d})]})},B=["fileList","maxCount","icon","title"],H=function(e){var n=e.fileList,t=e.maxCount,r=e.icon,i=e.title,u=l()(e,B);return(0,Y.jsx)(E,o()(o()({fileList:n,maxCount:t,listType:"picture-card"},u),{},{accept:(null==u?void 0:u.accept)||".jpg, .jpeg, .png",children:t&&n&&n.length>=t?null:(0,Y.jsx)($,{icon:r,title:i})}))},A=t(92820),G=t.n(A),Q=t(12453),K=t(45213),J=["fileList","className","icon","title"],X="antd-more-form-upload-avatar",ee=function(e){var n=e.fileList,t=e.icon,r=e.title,o=u.useMemo((function(){return(0,U.Z)("__am_itemUpload_avatar_")}),[]),i=u.useState(""),l=Z()(i,2),c=l[0],s=l[1],d=u.useMemo((function(){return(0,a.Z)(n)&&n.length>0?n[0]:null}),[n]),f="uploading"===(null==d?void 0:d.status);u.useEffect((function(){d?(d.thumbUrl||d.url||d.preview||(d.preview=F(o,d.uid,(null==d?void 0:d.originFileObj)||d)),s(d.thumbUrl||d.url||d.preview)):s("")}),[d,o]),(0,k.Z)((function(){M(o)}));var p=null;p=d&&"error"===d.status?(0,Y.jsxs)("div",{style:{width:"100%"},children:[(0,Y.jsx)(K.Z,{}),(0,Y.jsx)("div",{style:{marginTop:8,padding:"0 8px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},title:d.name||"",children:d.name||""})]}):f||!c?(0,Y.jsx)($,{uploading:f,icon:t,title:r}):(0,Y.jsx)("img",{src:c,alt:d&&d.name||""});var m=(0,Y.jsx)("div",{className:w()("".concat(X,"-box"),G()({},"".concat(X,"-box-error"),d&&"error"===d.status)),children:p});return d&&"error"===d.status&&d.response?(0,Y.jsx)(Q.Z,{title:d.response,children:m}):m},ne=function(e){var n=e.fileList,t=e.className,r=e.icon,i=e.title,u=l()(e,J);return(0,Y.jsx)(E,o()(o()({},u),{},{listType:"picture-card",accept:(null==u?void 0:u.accept)||".jpg, .jpeg, .png",fileList:n,showUploadList:!1,multiple:!1,maxCount:1,className:w()(X,t),children:(0,Y.jsx)(ee,{fileList:n,icon:r,title:i})}))},te=t(72093),re=["showUploadList","icon","title"],oe={showPreviewIcon:!1},ie=function(e){var n=(0,D.ZR)().locale,t=e.showUploadList,r=e.icon,i=void 0===r?(0,Y.jsx)(te.Z,{}):r,a=e.title,c=void 0===a?n.form.upload.dragTiptext:a,s=l()(e,re),f=u.useMemo((function(){return("boolean"!=typeof t||!1!==t)&&("object"===d()(t)?o()(o()({},oe),t):oe)}),[t]);return(0,Y.jsxs)(E,o()(o()({},s),{},{dragger:!0,showUploadList:f,children:[(0,Y.jsx)("p",{className:"ant-upload-drag-icon",children:i}),(0,Y.jsx)("p",{className:"ant-upload-text",children:c})]}))},le=["name","uploadProps","accept","onUpload","onGetPreviewUrl","fileTypeMessage","fileSizeMessage","maxSize","maxCount","type","disabled","multiple","icon","title","previewModalProps","required","transform"],ue=function(e){return(0,a.Z)(e)?e:e&&e.fileList},ae=function(e){var n=e.name,t=e.uploadProps,r=e.accept,i=e.onUpload,s=e.onGetPreviewUrl,d=e.fileTypeMessage,f=e.fileSizeMessage,p=e.maxSize,m=e.maxCount,v=e.type,h=void 0===v?"default":v,x=e.disabled,b=void 0!==x&&x,Z=e.multiple,g=void 0!==Z&&Z,j=e.icon,y=e.title,w=e.previewModalProps,P=e.required,C=e.transform,k=l()(e,le),U=(0,D.ZR)().locale,L=u.useMemo((function(){return"image"===h?H:"avatar"===h?ne:"dragger"===h?ie:q}),[h]);return(0,Y.jsx)(c.Z,o()(o()({required:P,valuePropName:"fileList",getValueFromEvent:ue,transform:C,name:n,rules:[{validator:function(e,n){var t="",r=n&&"function"==typeof C?C(n):n;return(!r||(0,a.Z)(r)&&r.length<=0)&&(t=P?U.form.common.uploadRequired:""),t?Promise.reject(t):Promise.resolve()}}]},k),{},{children:(0,Y.jsx)(L,o()({accept:r,onUpload:i,onGetPreviewUrl:s,fileTypeMessage:d,fileSizeMessage:f,maxSize:p,maxCount:m,disabled:b,multiple:g,icon:j,title:y,previewModalProps:w},t))}))};ae.Preview=z;var ce=ae},88309:function(e,n,t){var r=t(53985),o=t.n(r),i=t(73457),l=t.n(i),u=t(98423),a=t.n(u),c=t(7028),s=t(33619),d=t(179),f=t(68925),p=["children","name"];n.Z=function(e){var n=e.children,t=e.name,r=a()(e,p),i=c.useContext(d.Z).parentListName,u=void 0===i?[]:i;return(0,f.jsx)(d.Z.Provider,{value:{parentListName:[].concat(l()(u),[t])},children:(0,f.jsx)(s.Z.List,o()(o()({name:t},r),{},{children:n}))})}},22548:function(e,n,t){var r=t(71201),o=t.n(r),i=t(7190),l=t.n(i),u=t(7028),a=t(87211),c=t(15518),s=t(73458),d=t(68925);n.Z=function(e){var n=e.fileUrl,t=e.fileName,r=e.screenWidth,i=(0,u.useRef)(null),f=(0,c.Z)(!1),p=l()(f,2),m=p[0],v=p[1];return(0,u.useEffect)((function(){i.current&&(v(!0),i.current.innerHTML="",(0,a.parseOfdDocument)({ofd:n,success:function(e){var n,t,l=e[0],u=r||(null===(n=i.current)||void 0===n?void 0:n.clientWidth)||800,c=(0,a.renderOfd)(u,l),s=o()(c);try{for(s.s();!(t=s.n()).done;){var d=t.value;i.current&&i.current.appendChild(d)}}catch(e){s.e(e)}finally{s.f()}v(!1)},error:function(e){v(!1),console.error(e),i.current&&(i.current.innerHTML="该文件不支持预览，你可尝试<a href=".concat(n," download=").concat(t,">点击下载</a>。"))}}))}),[t,n,r,v]),(0,d.jsx)(s.Z,{spinning:m,children:(0,d.jsx)("div",{ref:i})})}},87974:function(e,n){n.Z={form:{common:{inputPlaceholder:"请输入",selectPlaceholder:"请选择",uploadPlaceholder:"请上传",inputRequired:"请输入${label}",selectRequired:"请选择${label}",uploadRequired:"请上传${label}",allLabel:"全部",allValue:"",search:"查询",reset:"重置",collapsed:"收起",expand:"展开",prev:"上一步",next:"下一步",submit:"提交",ok:"确认",cancel:"取消"},dateRange:{unit:{time:"小时",date:"天",week:"周",month:"个月",quarter:"季",year:"年"},maxRange:function(e,n){return"时间跨度不能超过".concat(e).concat(n)}},input:{userName:{mobile:"${label}不能为手机号码",email:"${label}不能包含@符号"},invalid:"请输入正确的${label}"},number:{lt:function(e){return"${label}必须小于".concat(e)},gt:function(e){return"${label}必须大于".concat(e)},lte:function(e){return"${label}必须小于或等于".concat(e)},gte:function(e){return"${label}必须大于或等于".concat(e)},maxPrecision:function(e){return"支持".concat(e,"位小数")}},password:{range:function(e,n){return"${label}为".concat(e,"～").concat(n,"位")},unallowable:"${label}包含无法识别的字符",level:function(e){return"${label}为大小写字母、数字或符号任意".concat(e,"种以上组成")}},upload:{buttonText:"点击上传",fileTypeMessage:"只支持上传 %s 文件",fileSizeMessage:"必须小于 %s！",unsupportPreviewTiptext:"当前文件不支持预览！",loading:"加载中",uploading:"上传中",dragTiptext:"单击或拖动文件到此区域进行上传"}},table:{toolbar:{reload:"刷新",density:"密度",densityDefault:"默认",densityLarger:"正常",densityMiddle:"中等",densitySmall:"紧凑",columnDisplay:"列展示",columnSetting:"列设置",checkAll:"全选",fullScreen:"全屏",exitFullScreen:"退出全屏",unsupportFullScreenTiptext:"当前页面不支持全屏功能"},pagination:{total:function(e){return"总共 ".concat(e," 条数据")}}},captcha:{initText:"获取验证码",runText:"%s秒后重新获取",resetText:"重新获取验证码"}}},82162:function(e,n,t){t.d(n,{Cu:function(){return Z},Y3:function(){return g}});var r=t(66272),o=t.n(r),i=t(57465),l=t.n(i),u=t(70526),a=t.n(u),c=t(34964),s=t.n(c),d=t(74701),f=t.n(d),p=t(5206),m=t.n(p),v=t(58024),h=t.n(v),x=t(82612),b=t.n(x);o().extend(l()),o().extend(a()),o().extend(s()),o().extend(f()),o().extend(m()),o().extend(h()),o().extend(b());function Z(e){return o()(e).format("YYYY-qQ").toUpperCase()}function g(e){return o().isDayjs(e)?e:o()((e||"").replace("Q",""),"YYYY-Q")}n.ZP=o()},19455:function(){},28774:function(e,n,t){e.exports=t.p+"static/test.c3b39340.docx"},4199:function(e,n,t){e.exports=t.p+"static/test.13a07866.mp3"},60249:function(e,n,t){e.exports=t.p+"static/test.9977b04e.mp4"},76926:function(e,n,t){e.exports=t.p+"static/test.959f16d1.ofd"},88255:function(e,n,t){e.exports=t.p+"static/test.fb9403e0.pdf"},63145:function(e,n,t){e.exports=t.p+"static/test.5baa83a1.xlsx"},28538:function(e,n,t){e.exports=t.p+"static/test.feaade1b.zip"},20598:function(e,n,t){e.exports=t.p+"static/test.7e18ecd8.jpg"}}]);