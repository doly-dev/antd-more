"use strict";(self.webpackChunkantd_more=self.webpackChunkantd_more||[]).push([[6706],{56706:function(e,t,n){n.d(t,{Z:function(){return I}});var o=n(93843),a=n.n(o),c=n(72974),l=n.n(c),r=n(15770),i=n(11730),s=n.n(i),d=n(77381),m=n(72469),b=n(45946),p=n(33532),u={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1},f=r.createContext({}),g=n(20079),y=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n};function v(e,t,n){var o=r.useMemo((function(){return t||(e=n,(0,g.Z)(e).map((function(e){return Object.assign(Object.assign({},null==e?void 0:e.props),{key:e.key})})));var e}),[t,n]);return r.useMemo((function(){return o.map((function(t){var n=t.span,o=y(t,["span"]);return Object.assign(Object.assign({},o),{span:"number"==typeof n?n:(0,d.m9)(e,n)})}))}),[o,e])}function h(e,t,n){var o=e,a=!1;return(void 0===n||n>t)&&(o=Object.assign(Object.assign({},e),{span:t}),a=void 0!==n),[o,a]}var O=function(e,t){var n=(0,r.useMemo)((function(){return function(e,t){var n=[],o=[],a=t,c=!1;return e.filter((function(e){return e})).forEach((function(r,i){var s=null==r?void 0:r.span,d=s||1;if(i===e.length-1){var m=h(r,a,s),b=l()(m,2),p=b[0],u=b[1];return c=c||u,o.push(p),void n.push(o)}if(d<a)a-=d,o.push(r);else{var f=h(r,a,d),g=l()(f,2),y=g[0],v=g[1];c=c||v,o.push(y),n.push(o),a=t,o=[]}})),[n,c]}(t,e)}),[t,e]),o=l()(n,2),a=o[0];o[1];return a},S=function(e){return e.children};function x(e){return null!=e}var j=function(e){var t,n=e.itemPrefixCls,o=e.component,c=e.span,l=e.className,i=e.style,d=e.labelStyle,m=e.contentStyle,b=e.bordered,p=e.label,u=e.content,f=e.colon,g=o;return b?r.createElement(g,{className:s()((t={},a()(t,"".concat(n,"-item-label"),x(p)),a()(t,"".concat(n,"-item-content"),x(u)),t),l),style:i,colSpan:c},x(p)&&r.createElement("span",{style:d},p),x(u)&&r.createElement("span",{style:m},u)):r.createElement(g,{className:s()("".concat(n,"-item"),l),style:i,colSpan:c},r.createElement("div",{className:"".concat(n,"-item-container")},(p||0===p)&&r.createElement("span",{className:s()("".concat(n,"-item-label"),a()({},"".concat(n,"-item-no-colon"),!f)),style:d},p),(u||0===u)&&r.createElement("span",{className:s()("".concat(n,"-item-content")),style:m},u)))};function w(e,t,n){var o=t.colon,a=t.prefixCls,c=t.bordered,l=n.component,i=n.type,s=n.showLabel,d=n.showContent,m=n.labelStyle,b=n.contentStyle;return e.map((function(e,t){var n=e.label,p=e.children,u=e.prefixCls,f=void 0===u?a:u,g=e.className,y=e.style,v=e.labelStyle,h=e.contentStyle,O=e.span,S=void 0===O?1:O,x=e.key;return"string"==typeof l?r.createElement(j,{key:"".concat(i,"-").concat(x||t),className:g,style:y,labelStyle:Object.assign(Object.assign({},m),v),contentStyle:Object.assign(Object.assign({},b),h),span:S,colon:o,component:l,itemPrefixCls:f,bordered:c,label:s?n:null,content:d?p:null}):[r.createElement(j,{key:"label-".concat(x||t),className:g,style:Object.assign(Object.assign(Object.assign({},m),y),v),span:1,colon:o,component:l[0],itemPrefixCls:f,bordered:c,label:n}),r.createElement(j,{key:"content-".concat(x||t),className:g,style:Object.assign(Object.assign(Object.assign({},b),y),h),span:2*S-1,component:l[1],itemPrefixCls:f,bordered:c,content:p})]}))}var C=function(e){var t=r.useContext(f),n=e.prefixCls,o=e.vertical,a=e.row,c=e.index,l=e.bordered;return o?r.createElement(r.Fragment,null,r.createElement("tr",{key:"label-".concat(c),className:"".concat(n,"-row")},w(a,e,Object.assign({component:"th",type:"label",showLabel:!0},t))),r.createElement("tr",{key:"content-".concat(c),className:"".concat(n,"-row")},w(a,e,Object.assign({component:"td",type:"content",showContent:!0},t)))):r.createElement("tr",{key:c,className:"".concat(n,"-row")},w(a,e,Object.assign({component:l?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},t)))},E=n(26867),N=n(71662),k=n(91129),B=n(58988),M=function(e){var t,n,o=e.componentCls,c=e.extraColor,l=e.itemPaddingBottom,r=e.colonMarginRight,i=e.colonMarginLeft,s=e.titleMarginBottom;return a()({},o,Object.assign(Object.assign(Object.assign({},(0,N.Wf)(e)),function(e){var t,n,o=e.componentCls,c=e.labelBg;return a()({},"&".concat(o,"-bordered"),(n={},a()(n,"> ".concat(o,"-view"),a()({border:"".concat((0,E.bf)(e.lineWidth)," ").concat(e.lineType," ").concat(e.colorSplit),"> table":{tableLayout:"auto",borderCollapse:"collapse"}},"".concat(o,"-row"),(t={borderBottom:"".concat((0,E.bf)(e.lineWidth)," ").concat(e.lineType," ").concat(e.colorSplit),"&:last-child":{borderBottom:"none"}},a()(t,"> ".concat(o,"-item-label, > ").concat(o,"-item-content"),{padding:"".concat((0,E.bf)(e.padding)," ").concat((0,E.bf)(e.paddingLG)),borderInlineEnd:"".concat((0,E.bf)(e.lineWidth)," ").concat(e.lineType," ").concat(e.colorSplit),"&:last-child":{borderInlineEnd:"none"}}),a()(t,"> ".concat(o,"-item-label"),{color:e.colorTextSecondary,backgroundColor:c,"&::after":{display:"none"}}),t))),a()(n,"&".concat(o,"-middle"),a()({},"".concat(o,"-row"),a()({},"> ".concat(o,"-item-label, > ").concat(o,"-item-content"),{padding:"".concat((0,E.bf)(e.paddingSM)," ").concat((0,E.bf)(e.paddingLG))}))),a()(n,"&".concat(o,"-small"),a()({},"".concat(o,"-row"),a()({},"> ".concat(o,"-item-label, > ").concat(o,"-item-content"),{padding:"".concat((0,E.bf)(e.paddingXS)," ").concat((0,E.bf)(e.padding))}))),n))}(e)),(n={},a()(n,"&-rtl",{direction:"rtl"}),a()(n,"".concat(o,"-header"),{display:"flex",alignItems:"center",marginBottom:s}),a()(n,"".concat(o,"-title"),Object.assign(Object.assign({},N.vS),{flex:"auto",color:e.titleColor,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG})),a()(n,"".concat(o,"-extra"),{marginInlineStart:"auto",color:c,fontSize:e.fontSize}),a()(n,"".concat(o,"-view"),{width:"100%",borderRadius:e.borderRadiusLG,table:{width:"100%",tableLayout:"fixed"}}),a()(n,"".concat(o,"-row"),{"> th, > td":{paddingBottom:l},"&:last-child":{borderBottom:"none"}}),a()(n,"".concat(o,"-item-label"),a()({color:e.colorTextTertiary,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:"".concat((0,E.bf)(i)," ").concat((0,E.bf)(r))}},"&".concat(o,"-item-no-colon::after"),{content:'""'})),a()(n,"".concat(o,"-item-no-label"),{"&::after":{margin:0,content:'""'}}),a()(n,"".concat(o,"-item-content"),{display:"table-cell",flex:1,color:e.contentColor,fontSize:e.fontSize,lineHeight:e.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"}),a()(n,"".concat(o,"-item"),{paddingBottom:0,verticalAlign:"top","&-container":(t={display:"flex"},a()(t,"".concat(o,"-item-label"),{display:"inline-flex",alignItems:"baseline"}),a()(t,"".concat(o,"-item-content"),{display:"inline-flex",alignItems:"baseline"}),t)}),a()(n,"&-middle",a()({},"".concat(o,"-row"),{"> th, > td":{paddingBottom:e.paddingSM}})),a()(n,"&-small",a()({},"".concat(o,"-row"),{"> th, > td":{paddingBottom:e.paddingXS}})),n)))},P=(0,k.I$)("Descriptions",(function(e){var t=(0,B.TS)(e,{});return M(t)}),(function(e){return{labelBg:e.colorFillAlter,titleColor:e.colorText,titleMarginBottom:e.fontSizeSM*e.lineHeightSM,itemPaddingBottom:e.padding,colonMarginRight:e.marginXS,colonMarginLeft:e.marginXXS/2,contentColor:e.colorText,extraColor:e.colorText}})),L=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n},z=function(e){var t,n=e.prefixCls,o=e.title,c=e.extra,i=e.column,g=e.colon,y=void 0===g||g,h=e.bordered,S=e.layout,x=e.children,j=e.className,w=e.rootClassName,E=e.style,N=e.size,k=e.labelStyle,B=e.contentStyle,M=e.items,z=L(e,["prefixCls","title","extra","column","colon","bordered","layout","children","className","rootClassName","style","size","labelStyle","contentStyle","items"]),I=r.useContext(m.E_),T=I.getPrefixCls,W=I.direction,H=I.descriptions,G=T("descriptions",n),X=(0,p.Z)(),R=r.useMemo((function(){var e;return"number"==typeof i?i:null!==(e=(0,d.m9)(X,Object.assign(Object.assign({},u),i)))&&void 0!==e?e:3}),[X,i]),Z=v(X,M,x),A=(0,b.Z)(N),_=O(R,Z),F=P(G),D=l()(F,2),$=D[0],q=D[1],J=r.useMemo((function(){return{labelStyle:k,contentStyle:B}}),[k,B]);return $(r.createElement(f.Provider,{value:J},r.createElement("div",Object.assign({className:s()(G,null==H?void 0:H.className,(t={},a()(t,"".concat(G,"-").concat(A),A&&"default"!==A),a()(t,"".concat(G,"-bordered"),!!h),a()(t,"".concat(G,"-rtl"),"rtl"===W),t),j,w,q),style:Object.assign(Object.assign({},null==H?void 0:H.style),E)},z),(o||c)&&r.createElement("div",{className:"".concat(G,"-header")},o&&r.createElement("div",{className:"".concat(G,"-title")},o),c&&r.createElement("div",{className:"".concat(G,"-extra")},c)),r.createElement("div",{className:"".concat(G,"-view")},r.createElement("table",null,r.createElement("tbody",null,_.map((function(e,t){return r.createElement(C,{key:t,index:t,colon:y,prefixCls:G,vertical:"vertical"===S,bordered:h,row:e})}))))))))};z.Item=S;var I=z}}]);