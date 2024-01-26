"use strict";(self.webpackChunkantd_more=self.webpackChunkantd_more||[]).push([[291],{90100:function(n,e,t){t.d(e,{Z:function(){return s}});var o=t(43851),r=t(82893),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"},a=t(96132),i=function(n,e){return r.createElement(a.Z,(0,o.Z)({},n,{ref:e,icon:c}))};var s=r.forwardRef(i)},15405:function(n,e,t){t.d(e,{Z:function(){return s}});var o=t(43851),r=t(82893),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},a=t(96132),i=function(n,e){return r.createElement(a.Z,(0,o.Z)({},n,{ref:e,icon:c}))};var s=r.forwardRef(i)},15740:function(n,e,t){t.d(e,{ZP:function(){return En}});var o=t(92679),r=t.n(o),c=t(81512),a=t(82893),i=t(9257),s=a.createContext({}),l=t(89698),u=t(80123),f=t(94183),d=t(89872),v=t(38388),m=t(90100),p=t(85759),g=t(2215),y=t.n(g),h=t(3767),C=t(2070),x=t(37090),b=t(26551),E=t(43851),k=t(79235),N=t(87582),O=t(10983),Z=a.forwardRef((function(n,e){var t=n.prefixCls,o=n.style,r=n.className,c=n.duration,i=void 0===c?4.5:c,s=n.eventKey,l=n.content,u=n.closable,f=n.closeIcon,d=void 0===f?"x":f,v=n.props,m=n.onClick,p=n.onNoticeClose,g=n.times,C=n.hovering,x=a.useState(!1),b=(0,h.Z)(x,2),N=b[0],Z=b[1],w=C||N,j=function(){p(s)};a.useEffect((function(){if(!w&&i>0){var n=setTimeout((function(){j()}),1e3*i);return function(){clearTimeout(n)}}}),[i,w,g]);var P="".concat(t,"-notice");return a.createElement("div",(0,E.Z)({},v,{ref:e,className:y()(P,r,(0,k.Z)({},"".concat(P,"-closable"),u)),style:o,onMouseEnter:function(n){var e;Z(!0),null==v||null===(e=v.onMouseEnter)||void 0===e||e.call(v,n)},onMouseLeave:function(n){var e;Z(!1),null==v||null===(e=v.onMouseLeave)||void 0===e||e.call(v,n)},onClick:m}),a.createElement("div",{className:"".concat(P,"-content")},l),u&&a.createElement("a",{tabIndex:0,className:"".concat(P,"-close"),onKeyDown:function(n){"Enter"!==n.key&&"Enter"!==n.code&&n.keyCode!==O.Z.ENTER||j()},onClick:function(n){n.preventDefault(),n.stopPropagation(),j()}},d))})),w=Z,j=a.createContext({}),P=function(n){var e=n.children,t=n.classNames;return a.createElement(j.Provider,{value:{classNames:t}},e)},S=t(83697),R=function(n){var e,t,o,r={offset:8,threshold:3,gap:16};n&&"object"===(0,S.Z)(n)&&(r.offset=null!==(e=n.offset)&&void 0!==e?e:8,r.threshold=null!==(t=n.threshold)&&void 0!==t?t:3,r.gap=null!==(o=n.gap)&&void 0!==o?o:16);return[!!n,r]},M=["className","style","classNames","styles"];var I=function(n){var e,t=n.configList,o=n.placement,r=n.prefixCls,i=n.className,s=n.style,l=n.motion,u=n.onAllNoticeRemoved,f=n.onNoticeClose,d=n.stack,v=(0,a.useContext)(j).classNames,m=(0,a.useRef)({}),p=(0,a.useState)(null),g=(0,h.Z)(p,2),b=g[0],O=g[1],Z=(0,a.useState)([]),P=(0,h.Z)(Z,2),S=P[0],I=P[1],A=t.map((function(n){return{config:n,key:String(n.key)}})),T=R(d),z=(0,h.Z)(T,2),D=z[0],H=z[1],F=H.offset,L=H.threshold,q=H.gap,B=D&&(S.length>0||A.length<=L),W="function"==typeof l?l(o):l;return(0,a.useEffect)((function(){D&&S.length>1&&I((function(n){return n.filter((function(n){return A.some((function(e){var t=e.key;return n===t}))}))}))}),[S,A,D]),(0,a.useEffect)((function(){var n,e;D&&m.current[null===(n=A[A.length-1])||void 0===n?void 0:n.key]&&O(m.current[null===(e=A[A.length-1])||void 0===e?void 0:e.key])}),[A,D]),a.createElement(N.V4,(0,E.Z)({key:o,className:y()(r,"".concat(r,"-").concat(o),null==v?void 0:v.list,i,(e={},(0,k.Z)(e,"".concat(r,"-stack"),!!D),(0,k.Z)(e,"".concat(r,"-stack-expanded"),B),e)),style:s,keys:A,motionAppear:!0},W,{onAllRemoved:function(){u(o)}}),(function(n,e){var t=n.config,i=n.className,s=n.style,l=n.index,u=t,d=u.key,p=u.times,g=String(d),h=t,k=h.className,N=h.style,O=h.classNames,Z=h.styles,j=(0,C.Z)(h,M),P=A.findIndex((function(n){return n.key===g})),R={};if(D){var T=A.length-1-(P>-1?P:l-1),z="top"===o||"bottom"===o?"-50%":"0";if(T>0){var H,L,W;R.height=B?null===(H=m.current[g])||void 0===H?void 0:H.offsetHeight:null==b?void 0:b.offsetHeight;for(var _=0,K=0;K<T;K++){var X;_+=(null===(X=m.current[A[A.length-1-K].key])||void 0===X?void 0:X.offsetHeight)+q}var G=(B?_:T*F)*(o.startsWith("top")?1:-1),V=!B&&null!=b&&b.offsetWidth&&null!==(L=m.current[g])&&void 0!==L&&L.offsetWidth?((null==b?void 0:b.offsetWidth)-2*F*(T<3?T:3))/(null===(W=m.current[g])||void 0===W?void 0:W.offsetWidth):1;R.transform="translate3d(".concat(z,", ").concat(G,"px, 0) scaleX(").concat(V,")")}else R.transform="translate3d(".concat(z,", 0, 0)")}return a.createElement("div",{ref:e,className:y()("".concat(r,"-notice-wrapper"),i,null==O?void 0:O.wrapper),style:(0,x.Z)((0,x.Z)((0,x.Z)({},s),R),null==Z?void 0:Z.wrapper),onMouseEnter:function(){return I((function(n){return n.includes(g)?n:[].concat((0,c.Z)(n),[g])}))},onMouseLeave:function(){return I((function(n){return n.filter((function(n){return n!==g}))}))}},a.createElement(w,(0,E.Z)({},j,{ref:function(n){P>-1?m.current[g]=n:delete m.current[g]},prefixCls:r,classNames:O,styles:Z,className:y()(k,null==v?void 0:v.notice),style:N,times:p,key:d,eventKey:d,onNoticeClose:f,hovering:D&&S.length>0})))}))},A=a.forwardRef((function(n,e){var t=n.prefixCls,o=void 0===t?"rc-notification":t,r=n.container,i=n.motion,s=n.maxCount,l=n.className,u=n.style,f=n.onAllRemoved,d=n.stack,v=n.renderNotifications,m=a.useState([]),p=(0,h.Z)(m,2),g=p[0],y=p[1],C=function(n){var e,t=g.find((function(e){return e.key===n}));null==t||null===(e=t.onClose)||void 0===e||e.call(t),y((function(e){return e.filter((function(e){return e.key!==n}))}))};a.useImperativeHandle(e,(function(){return{open:function(n){y((function(e){var t,o=(0,c.Z)(e),r=o.findIndex((function(e){return e.key===n.key})),a=(0,x.Z)({},n);r>=0?(a.times=((null===(t=e[r])||void 0===t?void 0:t.times)||0)+1,o[r]=a):(a.times=0,o.push(a));return s>0&&o.length>s&&(o=o.slice(-s)),o}))},close:function(n){C(n)},destroy:function(){y([])}}}));var E=a.useState({}),k=(0,h.Z)(E,2),N=k[0],O=k[1];a.useEffect((function(){var n={};g.forEach((function(e){var t=e.placement,o=void 0===t?"topRight":t;o&&(n[o]=n[o]||[],n[o].push(e))})),Object.keys(N).forEach((function(e){n[e]=n[e]||[]})),O(n)}),[g]);var Z=function(n){O((function(e){var t=(0,x.Z)({},e);return(t[n]||[]).length||delete t[n],t}))},w=a.useRef(!1);if(a.useEffect((function(){Object.keys(N).length>0?w.current=!0:w.current&&(null==f||f(),w.current=!1)}),[N]),!r)return null;var j=Object.keys(N);return(0,b.createPortal)(a.createElement(a.Fragment,null,j.map((function(n){var e=N[n],t=a.createElement(I,{key:n,configList:e,placement:n,prefixCls:o,className:null==l?void 0:l(n),style:null==u?void 0:u(n),motion:i,onNoticeClose:C,onAllNoticeRemoved:Z,stack:d});return v?v(t,{prefixCls:o,key:n}):t}))),r)}));var T=A,z=["getContainer","motion","prefixCls","maxCount","className","style","onAllRemoved","stack","renderNotifications"],D=function(){return document.body},H=0;function F(){for(var n={},e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return t.forEach((function(e){e&&Object.keys(e).forEach((function(t){var o=e[t];void 0!==o&&(n[t]=o)}))})),n}var L=t(37715),q=t.n(L),B=t(26349),W=t(43274),_=t(47526),K=t(14841),X=t(36119),G=function(n){var e=n.componentCls,t=n.iconCls,o=n.boxShadow,r=n.colorText,c=n.colorSuccess,a=n.colorError,i=n.colorWarning,s=n.colorInfo,l=n.fontSizeLG,u=n.motionEaseInOutCirc,f=n.motionDurationSlow,d=n.marginXS,v=n.paddingXS,m=n.borderRadiusLG,p=n.zIndexPopup,g=n.contentPadding,y=n.contentBg,h="".concat(e,"-notice"),C=new B.E4("MessageMoveIn",{"0%":{padding:0,transform:"translateY(-100%)",opacity:0},"100%":{padding:v,transform:"translateY(0)",opacity:1}}),x=new B.E4("MessageMoveOut",{"0%":{maxHeight:n.height,padding:v,opacity:1},"100%":{maxHeight:0,padding:0,opacity:0}}),b=q()(q()(q()(q()(q()(q()({padding:v,textAlign:"center"},"".concat(e,"-custom-content > ").concat(t),{verticalAlign:"text-bottom",marginInlineEnd:d,fontSize:l}),"".concat(h,"-content"),{display:"inline-block",padding:g,background:y,borderRadius:m,boxShadow:o,pointerEvents:"all"}),"".concat(e,"-success > ").concat(t),{color:c}),"".concat(e,"-error > ").concat(t),{color:a}),"".concat(e,"-warning > ").concat(t),{color:i}),"".concat(e,"-info > ").concat(t,",\n      ").concat(e,"-loading > ").concat(t),{color:s});return[q()({},e,Object.assign(Object.assign({},(0,_.Wf)(n)),q()(q()(q()(q()(q()(q()({color:r,position:"fixed",top:d,width:"100%",pointerEvents:"none",zIndex:p},"".concat(e,"-move-up"),{animationFillMode:"forwards"}),"\n        ".concat(e,"-move-up-appear,\n        ").concat(e,"-move-up-enter\n      "),{animationName:C,animationDuration:f,animationPlayState:"paused",animationTimingFunction:u}),"\n        ".concat(e,"-move-up-appear").concat(e,"-move-up-appear-active,\n        ").concat(e,"-move-up-enter").concat(e,"-move-up-enter-active\n      "),{animationPlayState:"running"}),"".concat(e,"-move-up-leave"),{animationName:x,animationDuration:f,animationPlayState:"paused",animationTimingFunction:u}),"".concat(e,"-move-up-leave").concat(e,"-move-up-leave-active"),{animationPlayState:"running"}),"&-rtl",{direction:"rtl",span:{direction:"rtl"}}))),q()({},e,q()({},"".concat(h,"-wrapper"),Object.assign({},b))),q()({},"".concat(e,"-notice-pure-panel"),Object.assign(Object.assign({},b),{padding:0,textAlign:"start"}))]},V=(0,K.I$)("Message",(function(n){var e=(0,X.TS)(n,{height:150});return[G(e)]}),(function(n){return{zIndexPopup:n.zIndexPopupBase+W.u6+10,contentBg:n.colorBgElevated,contentPadding:"".concat((n.controlHeightLG-n.fontSize*n.lineHeight)/2,"px ").concat(n.paddingSM,"px")}})),Y=t(1962),U=function(n,e){var t={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(t[o]=n[o]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(n);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(n,o[r])&&(t[o[r]]=n[o[r]])}return t},$={info:a.createElement(m.Z,null),success:a.createElement(f.Z,null),error:a.createElement(d.Z,null),warning:a.createElement(v.Z,null),loading:a.createElement(p.Z,null)},J=function(n){var e=n.prefixCls,t=n.type,o=n.icon,r=n.children;return a.createElement("div",{className:y()("".concat(e,"-custom-content"),"".concat(e,"-").concat(t))},o||$[t],a.createElement("span",null,r))},Q=function(n){var e=n.prefixCls,t=n.className,o=n.type,c=n.icon,i=n.content,s=U(n,["prefixCls","className","type","icon","content"]),u=a.useContext(l.E_).getPrefixCls,f=e||u("message"),d=(0,Y.Z)(f),v=V(f,d),m=r()(v,3),p=m[0],g=m[1],h=m[2];return p(a.createElement(w,Object.assign({},s,{prefixCls:f,className:y()(t,g,"".concat(f,"-notice-pure-panel"),h,d),eventKey:"pure",duration:null,content:a.createElement(J,{prefixCls:f,type:o,icon:c},i)})))},nn=t(23266),en=t.n(nn),tn=t(51049),on=t(51687);function rn(n){var e,t=new Promise((function(t){e=n((function(){t(!0)}))})),o=function(){null==e||e()};return o.then=function(n,e){return t.then(n,e)},o.promise=t,o}var cn=function(n,e){var t={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(t[o]=n[o]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(n);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(n,o[r])&&(t[o[r]]=n[o[r]])}return t},an=function(n){var e=n.children,t=n.prefixCls,o=(0,Y.Z)(t),c=V(t,o),i=r()(c,3),s=i[0],l=i[1],u=i[2];return s(a.createElement(P,{classNames:{list:y()(l,u,o)}},e))},sn=function(n,e){var t=e.prefixCls,o=e.key;return a.createElement(an,{prefixCls:t,key:o},n)},ln=a.forwardRef((function(n,e){var t=n.top,o=n.prefixCls,i=n.getContainer,s=n.maxCount,u=n.duration,f=void 0===u?3:u,d=n.rtl,v=n.transitionName,m=n.onAllRemoved,p=a.useContext(l.E_),g=p.getPrefixCls,x=p.getPopupContainer,b=p.message,E=p.direction,k=o||g("message"),N=a.createElement("span",{className:"".concat(k,"-close-x")},a.createElement(tn.Z,{className:"".concat(k,"-close-icon")})),O=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.getContainer,t=void 0===e?D:e,o=n.motion,r=n.prefixCls,i=n.maxCount,s=n.className,l=n.style,u=n.onAllRemoved,f=n.stack,d=n.renderNotifications,v=(0,C.Z)(n,z),m=a.useState(),p=(0,h.Z)(m,2),g=p[0],y=p[1],x=a.useRef(),b=a.createElement(T,{container:g,ref:x,prefixCls:r,motion:o,maxCount:i,className:s,style:l,onAllRemoved:u,stack:f,renderNotifications:d}),E=a.useState([]),k=(0,h.Z)(E,2),N=k[0],O=k[1],Z=a.useMemo((function(){return{open:function(n){var e=F(v,n);null!==e.key&&void 0!==e.key||(e.key="rc-notification-".concat(H),H+=1),O((function(n){return[].concat((0,c.Z)(n),[{type:"open",config:e}])}))},close:function(n){O((function(e){return[].concat((0,c.Z)(e),[{type:"close",key:n}])}))},destroy:function(){O((function(n){return[].concat((0,c.Z)(n),[{type:"destroy"}])}))}}}),[]);return a.useEffect((function(){y(t())})),a.useEffect((function(){x.current&&N.length&&(N.forEach((function(n){switch(n.type){case"open":x.current.open(n.config);break;case"close":x.current.close(n.key);break;case"destroy":x.current.destroy()}})),O((function(n){return n.filter((function(n){return!N.includes(n)}))})))}),[N]),[Z,b]}({prefixCls:k,style:function(){return{left:"50%",transform:"translateX(-50%)",top:null!=t?t:8}},className:function(){return y()(q()({},"".concat(k,"-rtl"),null!=d?d:"rtl"===E))},motion:function(){return function(n,e){return{motionName:null!=e?e:"".concat(n,"-move-up")}}(k,v)},closable:!1,closeIcon:N,duration:f,getContainer:function(){return(null==i?void 0:i())||(null==x?void 0:x())||document.body},maxCount:s,onAllRemoved:m,renderNotifications:sn}),Z=r()(O,2),w=Z[0],j=Z[1];return a.useImperativeHandle(e,(function(){return Object.assign(Object.assign({},w),{prefixCls:k,message:b})})),j})),un=0;function fn(n){var e=a.useRef(null),t=((0,on.ln)("Message"),a.useMemo((function(){var n=function(n){var t;null===(t=e.current)||void 0===t||t.close(n)},t=function(t){if(!e.current){var o=function(){};return o.then=function(){},o}var r=e.current,c=r.open,i=r.prefixCls,s=r.message,l="".concat(i,"-notice"),u=t.content,f=t.icon,d=t.type,v=t.key,m=t.className,p=t.style,g=t.onClose,h=cn(t,["content","icon","type","key","className","style","onClose"]),C=v;return null==C&&(C="antd-message-".concat(un+=1)),rn((function(e){return c(Object.assign(Object.assign({},h),{key:C,content:a.createElement(J,{prefixCls:i,type:d,icon:f},u),placement:"top",className:y()(d&&"".concat(l,"-").concat(d),m,null==s?void 0:s.className),style:Object.assign(Object.assign({},null==s?void 0:s.style),p),onClose:function(){null==g||g(),e()}})),function(){n(C)}}))},o={open:t,destroy:function(t){var o;void 0!==t?n(t):null===(o=e.current)||void 0===o||o.destroy()}};return["info","success","warning","error","loading"].forEach((function(n){o[n]=function(e,o,r){var c,a,i;c=e&&"object"===en()(e)&&"content"in e?e:{content:e},"function"==typeof o?i=o:(a=o,i=r);var s=Object.assign(Object.assign({onClose:i,duration:a},c),{type:n});return t(s)}})),o}),[]));return[t,a.createElement(ln,Object.assign({key:"message-holder"},n,{ref:e}))]}var dn=null,vn=function(n){return n()},mn=[],pn={};function gn(){var n=pn,e=n.getContainer,t=n.duration,o=n.rtl,r=n.maxCount,c=n.top,a=(null==e?void 0:e())||document.body;return{getContainer:function(){return a},duration:t,rtl:o,maxCount:r,top:c}}var yn=a.forwardRef((function(n,e){var t=n.messageConfig,o=n.sync,c=(0,a.useContext)(l.E_).getPrefixCls,i=pn.prefixCls||c("message"),u=(0,a.useContext)(s),f=fn(Object.assign(Object.assign(Object.assign({},t),{prefixCls:i}),u.message)),d=r()(f,2),v=d[0],m=d[1];return a.useImperativeHandle(e,(function(){var n=Object.assign({},v);return Object.keys(n).forEach((function(e){n[e]=function(){return o(),v[e].apply(v,arguments)}})),{instance:n,sync:o}})),m})),hn=a.forwardRef((function(n,e){var t=a.useState(gn),o=r()(t,2),c=o[0],i=o[1],s=function(){i(gn)};a.useEffect(s,[]);var l=(0,u.w6)(),f=l.getRootPrefixCls(),d=l.getIconPrefixCls(),v=l.getTheme(),m=a.createElement(yn,{ref:e,sync:s,messageConfig:c});return a.createElement(u.ZP,{prefixCls:f,iconPrefixCls:d,theme:v},l.holderRender?l.holderRender(m):m)}));function Cn(){if(!dn){var n=document.createDocumentFragment(),e={fragment:n};return dn=e,void vn((function(){(0,i.s)(a.createElement(hn,{ref:function(n){var t=n||{},o=t.instance,r=t.sync;Promise.resolve().then((function(){!e.instance&&o&&(e.instance=o,e.sync=r,Cn())}))}}),n)}))}dn.instance&&(mn.forEach((function(n){var e=n.type;if(!n.skipped)switch(e){case"open":vn((function(){var e=dn.instance.open(Object.assign(Object.assign({},pn),n.config));null==e||e.then(n.resolve),n.setCloseFn(e)}));break;case"destroy":vn((function(){null==dn||dn.instance.destroy(n.key)}));break;default:vn((function(){var t,o=(t=dn.instance)[e].apply(t,(0,c.Z)(n.args));null==o||o.then(n.resolve),n.setCloseFn(o)}))}})),mn=[])}function xn(n,e){(0,u.w6)();var t=rn((function(t){var o,r={type:n,args:e,resolve:t,setCloseFn:function(n){o=n}};return mn.push(r),function(){o?vn((function(){o()})):r.skipped=!0}}));return Cn(),t}var bn={open:function(n){var e=rn((function(e){var t,o={type:"open",config:n,resolve:e,setCloseFn:function(n){t=n}};return mn.push(o),function(){t?vn((function(){t()})):o.skipped=!0}}));return Cn(),e},destroy:function(n){mn.push({type:"destroy",key:n}),Cn()},config:function(n){pn=Object.assign(Object.assign({},pn),n),vn((function(){var n;null===(n=null==dn?void 0:dn.sync)||void 0===n||n.call(dn)}))},useMessage:function(n){return fn(n)},_InternalPanelDoNotUseOrYouWillBeFired:Q};["success","info","warning","error","loading"].forEach((function(n){bn[n]=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return xn(n,t)}}));var En=bn},68424:function(n,e,t){function o(n){return void 0===n&&(n=1e3),new Promise((function(e){setTimeout(e,n)}))}t.d(e,{Z:function(){return o}})},74319:function(n,e,t){t.d(e,{Z:function(){return c}});var o=t(95929),r=0;function c(n){void 0===n&&(n="");var e=++r;return(0,o.Z)(n)+e}},99110:function(n,e,t){function o(n,e,t){var o=(t||{}).atBegin;return function(n,e,t){var o,r=t||{},c=r.noTrailing,a=void 0!==c&&c,i=r.noLeading,s=void 0!==i&&i,l=r.debounceMode,u=void 0===l?void 0:l,f=!1,d=0;function v(){o&&clearTimeout(o)}function m(){for(var t=arguments.length,r=new Array(t),c=0;c<t;c++)r[c]=arguments[c];var i=this,l=Date.now()-d;function m(){d=Date.now(),e.apply(i,r)}function p(){o=void 0}f||(s||!u||o||m(),v(),void 0===u&&l>n?s?(d=Date.now(),a||(o=setTimeout(u?p:m,n))):m():!0!==a&&(o=setTimeout(u?p:m,void 0===u?n-l:n)))}return m.cancel=function(n){var e=(n||{}).upcomingOnly,t=void 0!==e&&e;v(),f=!t},m}(n,e,{debounceMode:!1!==(void 0!==o&&o)})}t.d(e,{D:function(){return o}})}}]);