"use strict";(self.webpackChunkantd_more=self.webpackChunkantd_more||[]).push([[942],{21522:function(e,n,t){t.d(n,{Z:function(){return L}});var o=t(64304),a=t.n(o),r=t(9160),c=t.n(r),l=t(61644),i=t(65433),s=t.n(i),d=t(93736),u=t(93487),m=t(64726),p=t(74955),f={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1},g=l.createContext({}),b=t(50669),y=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)n.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(t[o[a]]=e[o[a]])}return t};function h(e,n,t){var o=l.useMemo((function(){return n||(e=t,(0,b.Z)(e).map((function(e){return Object.assign(Object.assign({},null==e?void 0:e.props),{key:e.key})})));var e}),[n,t]);return l.useMemo((function(){return o.map((function(n){var t=n.span,o=y(n,["span"]);return Object.assign(Object.assign({},o),{span:"number"==typeof t?t:(0,d.m9)(e,t)})}))}),[o,e])}function v(e,n,t){var o=e,a=!1;return(void 0===t||t>n)&&(o=Object.assign(Object.assign({},e),{span:n}),a=void 0!==t),[o,a]}var x=function(e,n){var t=(0,l.useMemo)((function(){return function(e,n){var t=[],o=[],a=n,r=!1;return e.filter((function(e){return e})).forEach((function(l,i){var s=null==l?void 0:l.span,d=s||1;if(i===e.length-1){var u=v(l,a,s),m=c()(u,2),p=m[0],f=m[1];return r=r||f,o.push(p),void t.push(o)}if(d<a)a-=d,o.push(l);else{var g=v(l,a,d),b=c()(g,2),y=b[0],h=b[1];r=r||h,o.push(y),t.push(o),a=n,o=[]}})),[t,r]}(n,e)}),[n,e]),o=c()(t,2),a=o[0];o[1];return a},S=function(e){return e.children};function O(e){return null!=e}var C=function(e){var n,t=e.itemPrefixCls,o=e.component,r=e.span,c=e.className,i=e.style,d=e.labelStyle,u=e.contentStyle,m=e.bordered,p=e.label,f=e.content,g=e.colon,b=o;return m?l.createElement(b,{className:s()((n={},a()(n,"".concat(t,"-item-label"),O(p)),a()(n,"".concat(t,"-item-content"),O(f)),n),c),style:i,colSpan:r},O(p)&&l.createElement("span",{style:d},p),O(f)&&l.createElement("span",{style:u},f)):l.createElement(b,{className:s()("".concat(t,"-item"),c),style:i,colSpan:r},l.createElement("div",{className:"".concat(t,"-item-container")},(p||0===p)&&l.createElement("span",{className:s()("".concat(t,"-item-label"),a()({},"".concat(t,"-item-no-colon"),!g)),style:d},p),(f||0===f)&&l.createElement("span",{className:s()("".concat(t,"-item-content")),style:u},f)))};function w(e,n,t){var o=n.colon,a=n.prefixCls,r=n.bordered,c=t.component,i=t.type,s=t.showLabel,d=t.showContent,u=t.labelStyle,m=t.contentStyle;return e.map((function(e,n){var t=e.label,p=e.children,f=e.prefixCls,g=void 0===f?a:f,b=e.className,y=e.style,h=e.labelStyle,v=e.contentStyle,x=e.span,S=void 0===x?1:x,O=e.key;return"string"==typeof c?l.createElement(C,{key:"".concat(i,"-").concat(O||n),className:b,style:y,labelStyle:Object.assign(Object.assign({},u),h),contentStyle:Object.assign(Object.assign({},m),v),span:S,colon:o,component:c,itemPrefixCls:g,bordered:r,label:s?t:null,content:d?p:null}):[l.createElement(C,{key:"label-".concat(O||n),className:b,style:Object.assign(Object.assign(Object.assign({},u),y),h),span:1,colon:o,component:c[0],itemPrefixCls:g,bordered:r,label:t}),l.createElement(C,{key:"content-".concat(O||n),className:b,style:Object.assign(Object.assign(Object.assign({},m),y),v),span:2*S-1,component:c[1],itemPrefixCls:g,bordered:r,content:p})]}))}var E=function(e){var n=l.useContext(g),t=e.prefixCls,o=e.vertical,a=e.row,r=e.index,c=e.bordered;return o?l.createElement(l.Fragment,null,l.createElement("tr",{key:"label-".concat(r),className:"".concat(t,"-row")},w(a,e,Object.assign({component:"th",type:"label",showLabel:!0},n))),l.createElement("tr",{key:"content-".concat(r),className:"".concat(t,"-row")},w(a,e,Object.assign({component:"td",type:"content",showContent:!0},n)))):l.createElement("tr",{key:r,className:"".concat(t,"-row")},w(a,e,Object.assign({component:c?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},n)))},j=t(20197),M=t(30671),k=t(80034),P=function(e){var n,t,o=e.componentCls,r=e.extraColor,c=e.itemPaddingBottom,l=e.colonMarginRight,i=e.colonMarginLeft,s=e.titleMarginBottom;return a()({},o,Object.assign(Object.assign(Object.assign({},(0,j.Wf)(e)),function(e){var n,t,o=e.componentCls,r=e.labelBg;return a()({},"&".concat(o,"-bordered"),(t={},a()(t,"> ".concat(o,"-view"),a()({border:"".concat(e.lineWidth,"px ").concat(e.lineType," ").concat(e.colorSplit),"> table":{tableLayout:"auto",borderCollapse:"collapse"}},"".concat(o,"-row"),(n={borderBottom:"".concat(e.lineWidth,"px ").concat(e.lineType," ").concat(e.colorSplit),"&:last-child":{borderBottom:"none"}},a()(n,"> ".concat(o,"-item-label, > ").concat(o,"-item-content"),{padding:"".concat(e.padding,"px ").concat(e.paddingLG,"px"),borderInlineEnd:"".concat(e.lineWidth,"px ").concat(e.lineType," ").concat(e.colorSplit),"&:last-child":{borderInlineEnd:"none"}}),a()(n,"> ".concat(o,"-item-label"),{color:e.colorTextSecondary,backgroundColor:r,"&::after":{display:"none"}}),n))),a()(t,"&".concat(o,"-middle"),a()({},"".concat(o,"-row"),a()({},"> ".concat(o,"-item-label, > ").concat(o,"-item-content"),{padding:"".concat(e.paddingSM,"px ").concat(e.paddingLG,"px")}))),a()(t,"&".concat(o,"-small"),a()({},"".concat(o,"-row"),a()({},"> ".concat(o,"-item-label, > ").concat(o,"-item-content"),{padding:"".concat(e.paddingXS,"px ").concat(e.padding,"px")}))),t))}(e)),(t={},a()(t,"&-rtl",{direction:"rtl"}),a()(t,"".concat(o,"-header"),{display:"flex",alignItems:"center",marginBottom:s}),a()(t,"".concat(o,"-title"),Object.assign(Object.assign({},j.vS),{flex:"auto",color:e.titleColor,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG})),a()(t,"".concat(o,"-extra"),{marginInlineStart:"auto",color:r,fontSize:e.fontSize}),a()(t,"".concat(o,"-view"),{width:"100%",borderRadius:e.borderRadiusLG,table:{width:"100%",tableLayout:"fixed"}}),a()(t,"".concat(o,"-row"),{"> th, > td":{paddingBottom:c},"&:last-child":{borderBottom:"none"}}),a()(t,"".concat(o,"-item-label"),a()({color:e.colorTextTertiary,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:"".concat(i,"px ").concat(l,"px")}},"&".concat(o,"-item-no-colon::after"),{content:'""'})),a()(t,"".concat(o,"-item-no-label"),{"&::after":{margin:0,content:'""'}}),a()(t,"".concat(o,"-item-content"),{display:"table-cell",flex:1,color:e.contentColor,fontSize:e.fontSize,lineHeight:e.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"}),a()(t,"".concat(o,"-item"),{paddingBottom:0,verticalAlign:"top","&-container":(n={display:"flex"},a()(n,"".concat(o,"-item-label"),{display:"inline-flex",alignItems:"baseline"}),a()(n,"".concat(o,"-item-content"),{display:"inline-flex",alignItems:"baseline"}),n)}),a()(t,"&-middle",a()({},"".concat(o,"-row"),{"> th, > td":{paddingBottom:e.paddingSM}})),a()(t,"&-small",a()({},"".concat(o,"-row"),{"> th, > td":{paddingBottom:e.paddingXS}})),t)))},N=(0,M.Z)("Descriptions",(function(e){var n=(0,k.TS)(e,{});return[P(n)]}),(function(e){return{labelBg:e.colorFillAlter,titleColor:e.colorText,titleMarginBottom:e.fontSizeSM*e.lineHeightSM,itemPaddingBottom:e.padding,colonMarginRight:e.marginXS,colonMarginLeft:e.marginXXS/2,contentColor:e.colorText,extraColor:e.colorText}})),Z=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)n.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(t[o[a]]=e[o[a]])}return t},T=function(e){var n,t=e.prefixCls,o=e.title,r=e.extra,i=e.column,b=e.colon,y=void 0===b||b,v=e.bordered,S=e.layout,O=e.children,C=e.className,w=e.rootClassName,j=e.style,M=e.size,k=e.labelStyle,P=e.contentStyle,T=e.items,L=Z(e,["prefixCls","title","extra","column","colon","bordered","layout","children","className","rootClassName","style","size","labelStyle","contentStyle","items"]),B=l.useContext(u.E_),D=B.getPrefixCls,z=B.direction,I=B.descriptions,A=D("descriptions",t),W=(0,p.Z)(),H=l.useMemo((function(){var e;return"number"==typeof i?i:null!==(e=(0,d.m9)(W,Object.assign(Object.assign({},f),i)))&&void 0!==e?e:3}),[W,i]),G=h(W,T,O),R=(0,m.Z)(M),F=x(H,G),X=N(A),K=c()(X,2),U=K[0],V=K[1],_=l.useMemo((function(){return{labelStyle:k,contentStyle:P}}),[k,P]);return U(l.createElement(g.Provider,{value:_},l.createElement("div",Object.assign({className:s()(A,null==I?void 0:I.className,(n={},a()(n,"".concat(A,"-").concat(R),R&&"default"!==R),a()(n,"".concat(A,"-bordered"),!!v),a()(n,"".concat(A,"-rtl"),"rtl"===z),n),C,w,V),style:Object.assign(Object.assign({},null==I?void 0:I.style),j)},L),(o||r)&&l.createElement("div",{className:"".concat(A,"-header")},o&&l.createElement("div",{className:"".concat(A,"-title")},o),r&&l.createElement("div",{className:"".concat(A,"-extra")},r)),l.createElement("div",{className:"".concat(A,"-view")},l.createElement("table",null,l.createElement("tbody",null,F.map((function(e,n){return l.createElement(E,{key:n,index:n,colon:y,prefixCls:A,vertical:"vertical"===S,bordered:v,row:e})}))))))))};T.Item=S;var L=T},6839:function(e,n,t){t.d(n,{C8:function(){return a.Z},t4:function(){return r.t4},x1:function(){return r.x1},zX:function(){return o.Z}});var o=t(63927),a=t(45838),r=t(47357);t(84892),t(37713)},44159:function(e,n,t){t.d(n,{Z:function(){return i}});var o=t(15057),a="".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap"," ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/),r="aria-",c="data-";function l(e,n){return 0===e.indexOf(n)}function i(e){var n,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n=!1===t?{aria:!0,data:!0,attr:!0}:!0===t?{aria:!0}:(0,o.Z)({},t);var i={};return Object.keys(e).forEach((function(t){(n.aria&&("role"===t||l(t,r))||n.data&&l(t,c)||n.attr&&a.includes(t))&&(i[t]=e[t])})),i}},49505:function(e,n,t){function o(e,n){for(var t=e,o=0;o<n.length;o+=1){if(null==t)return;t=t[n[o]]}return t}t.d(n,{Z:function(){return o}})},84892:function(e,n,t){t.d(n,{T:function(){return p},Z:function(){return s}});var o=t(36502),a=t(15057),r=t(63300),c=t(36941),l=t(49505);function i(e,n,t,o){if(!n.length)return t;var l,s=(0,c.Z)(n),d=s[0],u=s.slice(1);return l=e||"number"!=typeof d?Array.isArray(e)?(0,r.Z)(e):(0,a.Z)({},e):[],o&&void 0===t&&1===u.length?delete l[d][u[0]]:l[d]=i(l[d],u,t,o),l}function s(e,n,t){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return n.length&&o&&void 0===t&&!(0,l.Z)(e,n.slice(0,-1))?e:i(e,n,t,o)}function d(e){return"object"===(0,o.Z)(e)&&null!==e&&Object.getPrototypeOf(e)===Object.prototype}function u(e){return Array.isArray(e)?[]:{}}var m="undefined"==typeof Reflect?Object.keys:Reflect.ownKeys;function p(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var a=u(n[0]);return n.forEach((function(e){!function n(t,c){var i=new Set(c),p=(0,l.Z)(e,t),f=Array.isArray(p);if(f||d(p)){if(!i.has(p)){i.add(p);var g=(0,l.Z)(a,t);f?a=s(a,t,[]):g&&"object"===(0,o.Z)(g)||(a=s(a,t,u(p))),m(p).forEach((function(e){n([].concat((0,r.Z)(t),[e]),i)}))}}else a=s(a,t,p)}([])})),a}},36941:function(e,n,t){t.d(n,{Z:function(){return l}});var o=t(28769),a=t(75251),r=t(33851),c=t(55192);function l(e){return(0,o.Z)(e)||(0,a.Z)(e)||(0,r.Z)(e)||(0,c.Z)()}}}]);