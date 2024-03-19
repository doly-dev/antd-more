"use strict";(self.webpackChunkantd_more=self.webpackChunkantd_more||[]).push([[908],{70908:function(e,t,n){n.d(t,{Z:function(){return I}});var o=n(39677),a=n.n(o),c=n(67524),l=n.n(c),r=n(33056),i=n(42354),s=n.n(i),d=n(4123),m=n(48967),b=n(6777),p=n(55937),u={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1},f=r.createContext({}),g=n(49705),y=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n};function v(e,t,n){var o=r.useMemo((function(){return t||(e=n,(0,g.Z)(e).map((function(e){return Object.assign(Object.assign({},null==e?void 0:e.props),{key:e.key})})));var e}),[t,n]);return r.useMemo((function(){return o.map((function(t){var n=t.span,o=y(t,["span"]);return Object.assign(Object.assign({},o),{span:"number"==typeof n?n:(0,d.m9)(e,n)})}))}),[o,e])}function h(e,t,n){var o=e,a=!1;return(void 0===n||n>t)&&(o=Object.assign(Object.assign({},e),{span:t}),a=void 0!==n),[o,a]}var O=function(e,t){var n=(0,r.useMemo)((function(){return function(e,t){var n=[],o=[],a=t,c=!1;return e.filter((function(e){return e})).forEach((function(r,i){var s=null==r?void 0:r.span,d=s||1;if(i===e.length-1){var m=h(r,a,s),b=l()(m,2),p=b[0],u=b[1];return c=c||u,o.push(p),void n.push(o)}if(d<a)a-=d,o.push(r);else{var f=h(r,a,d),g=l()(f,2),y=g[0],v=g[1];c=c||v,o.push(y),n.push(o),a=t,o=[]}})),[n,c]}(t,e)}),[t,e]),o=l()(n,2),a=o[0];o[1];return a},S=function(e){return e.children};function x(e){return null!=e}var j=function(e){var t=e.itemPrefixCls,n=e.component,o=e.span,c=e.className,l=e.style,i=e.labelStyle,d=e.contentStyle,m=e.bordered,b=e.label,p=e.content,u=e.colon,f=e.type,g=n;return m?r.createElement(g,{className:s()(a()(a()({},"".concat(t,"-item-label"),"label"===f),"".concat(t,"-item-content"),"content"===f),c),style:l,colSpan:o},x(b)&&r.createElement("span",{style:i},b),x(p)&&r.createElement("span",{style:d},p)):r.createElement(g,{className:s()("".concat(t,"-item"),c),style:l,colSpan:o},r.createElement("div",{className:"".concat(t,"-item-container")},(b||0===b)&&r.createElement("span",{className:s()("".concat(t,"-item-label"),a()({},"".concat(t,"-item-no-colon"),!u)),style:i},b),(p||0===p)&&r.createElement("span",{className:s()("".concat(t,"-item-content")),style:d},p)))};function w(e,t,n){var o=t.colon,a=t.prefixCls,c=t.bordered,l=n.component,i=n.type,s=n.showLabel,d=n.showContent,m=n.labelStyle,b=n.contentStyle;return e.map((function(e,t){var n=e.label,p=e.children,u=e.prefixCls,f=void 0===u?a:u,g=e.className,y=e.style,v=e.labelStyle,h=e.contentStyle,O=e.span,S=void 0===O?1:O,x=e.key;return"string"==typeof l?r.createElement(j,{key:"".concat(i,"-").concat(x||t),className:g,style:y,labelStyle:Object.assign(Object.assign({},m),v),contentStyle:Object.assign(Object.assign({},b),h),span:S,colon:o,component:l,itemPrefixCls:f,bordered:c,label:s?n:null,content:d?p:null,type:i}):[r.createElement(j,{key:"label-".concat(x||t),className:g,style:Object.assign(Object.assign(Object.assign({},m),y),v),span:1,colon:o,component:l[0],itemPrefixCls:f,bordered:c,label:n,type:"label"}),r.createElement(j,{key:"content-".concat(x||t),className:g,style:Object.assign(Object.assign(Object.assign({},b),y),h),span:2*S-1,component:l[1],itemPrefixCls:f,bordered:c,content:p,type:"content"})]}))}var C=function(e){var t=r.useContext(f),n=e.prefixCls,o=e.vertical,a=e.row,c=e.index,l=e.bordered;return o?r.createElement(r.Fragment,null,r.createElement("tr",{key:"label-".concat(c),className:"".concat(n,"-row")},w(a,e,Object.assign({component:"th",type:"label",showLabel:!0},t))),r.createElement("tr",{key:"content-".concat(c),className:"".concat(n,"-row")},w(a,e,Object.assign({component:"td",type:"content",showContent:!0},t)))):r.createElement("tr",{key:c,className:"".concat(n,"-row")},w(a,e,Object.assign({component:l?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},t)))},E=n(17933),N=n(93310),k=n(82300),B=n(69695),M=function(e){var t,n=e.componentCls,o=e.extraColor,c=e.itemPaddingBottom,l=e.colonMarginRight,r=e.colonMarginLeft,i=e.titleMarginBottom;return a()({},n,Object.assign(Object.assign(Object.assign({},(0,N.Wf)(e)),function(e){var t=e.componentCls,n=e.labelBg;return a()({},"&".concat(t,"-bordered"),a()(a()(a()({},"> ".concat(t,"-view"),a()({border:"".concat((0,E.bf)(e.lineWidth)," ").concat(e.lineType," ").concat(e.colorSplit),"> table":{tableLayout:"auto"}},"".concat(t,"-row"),a()(a()({borderBottom:"".concat((0,E.bf)(e.lineWidth)," ").concat(e.lineType," ").concat(e.colorSplit),"&:last-child":{borderBottom:"none"}},"> ".concat(t,"-item-label, > ").concat(t,"-item-content"),{padding:"".concat((0,E.bf)(e.padding)," ").concat((0,E.bf)(e.paddingLG)),borderInlineEnd:"".concat((0,E.bf)(e.lineWidth)," ").concat(e.lineType," ").concat(e.colorSplit),"&:last-child":{borderInlineEnd:"none"}}),"> ".concat(t,"-item-label"),{color:e.colorTextSecondary,backgroundColor:n,"&::after":{display:"none"}}))),"&".concat(t,"-middle"),a()({},"".concat(t,"-row"),a()({},"> ".concat(t,"-item-label, > ").concat(t,"-item-content"),{padding:"".concat((0,E.bf)(e.paddingSM)," ").concat((0,E.bf)(e.paddingLG))}))),"&".concat(t,"-small"),a()({},"".concat(t,"-row"),a()({},"> ".concat(t,"-item-label, > ").concat(t,"-item-content"),{padding:"".concat((0,E.bf)(e.paddingXS)," ").concat((0,E.bf)(e.padding))}))))}(e)),(t={},a()(a()(a()(a()(a()(a()(a()(a()(a()(a()(t,"&-rtl",{direction:"rtl"}),"".concat(n,"-header"),{display:"flex",alignItems:"center",marginBottom:i}),"".concat(n,"-title"),Object.assign(Object.assign({},N.vS),{flex:"auto",color:e.titleColor,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG})),"".concat(n,"-extra"),{marginInlineStart:"auto",color:o,fontSize:e.fontSize}),"".concat(n,"-view"),{width:"100%",borderRadius:e.borderRadiusLG,table:{width:"100%",tableLayout:"fixed",borderCollapse:"collapse"}}),"".concat(n,"-row"),{"> th, > td":{paddingBottom:c},"&:last-child":{borderBottom:"none"}}),"".concat(n,"-item-label"),a()({color:e.colorTextTertiary,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:"".concat((0,E.bf)(r)," ").concat((0,E.bf)(l))}},"&".concat(n,"-item-no-colon::after"),{content:'""'})),"".concat(n,"-item-no-label"),{"&::after":{margin:0,content:'""'}}),"".concat(n,"-item-content"),{display:"table-cell",flex:1,color:e.contentColor,fontSize:e.fontSize,lineHeight:e.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"}),"".concat(n,"-item"),{paddingBottom:0,verticalAlign:"top","&-container":a()(a()({display:"flex"},"".concat(n,"-item-label"),{display:"inline-flex",alignItems:"baseline"}),"".concat(n,"-item-content"),{display:"inline-flex",alignItems:"baseline"})}),a()(a()(t,"&-middle",a()({},"".concat(n,"-row"),{"> th, > td":{paddingBottom:e.paddingSM}})),"&-small",a()({},"".concat(n,"-row"),{"> th, > td":{paddingBottom:e.paddingXS}})))))},P=(0,k.I$)("Descriptions",(function(e){var t=(0,B.TS)(e,{});return M(t)}),(function(e){return{labelBg:e.colorFillAlter,titleColor:e.colorText,titleMarginBottom:e.fontSizeSM*e.lineHeightSM,itemPaddingBottom:e.padding,colonMarginRight:e.marginXS,colonMarginLeft:e.marginXXS/2,contentColor:e.colorText,extraColor:e.colorText}})),L=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n},z=function(e){var t=e.prefixCls,n=e.title,o=e.extra,c=e.column,i=e.colon,g=void 0===i||i,y=e.bordered,h=e.layout,S=e.children,x=e.className,j=e.rootClassName,w=e.style,E=e.size,N=e.labelStyle,k=e.contentStyle,B=e.items,M=L(e,["prefixCls","title","extra","column","colon","bordered","layout","children","className","rootClassName","style","size","labelStyle","contentStyle","items"]),z=r.useContext(m.E_),I=z.getPrefixCls,T=z.direction,W=z.descriptions,H=I("descriptions",t),G=(0,p.Z)(),X=r.useMemo((function(){var e;return"number"==typeof c?c:null!==(e=(0,d.m9)(G,Object.assign(Object.assign({},u),c)))&&void 0!==e?e:3}),[G,c]),R=v(G,B,S),Z=(0,b.Z)(E),A=O(X,R),_=P(H),F=l()(_,3),D=F[0],$=F[1],q=F[2],J=r.useMemo((function(){return{labelStyle:N,contentStyle:k}}),[N,k]);return D(r.createElement(f.Provider,{value:J},r.createElement("div",Object.assign({className:s()(H,null==W?void 0:W.className,a()(a()(a()({},"".concat(H,"-").concat(Z),Z&&"default"!==Z),"".concat(H,"-bordered"),!!y),"".concat(H,"-rtl"),"rtl"===T),x,j,$,q),style:Object.assign(Object.assign({},null==W?void 0:W.style),w)},M),(n||o)&&r.createElement("div",{className:"".concat(H,"-header")},n&&r.createElement("div",{className:"".concat(H,"-title")},n),o&&r.createElement("div",{className:"".concat(H,"-extra")},o)),r.createElement("div",{className:"".concat(H,"-view")},r.createElement("table",null,r.createElement("tbody",null,A.map((function(e,t){return r.createElement(C,{key:t,index:t,colon:g,prefixCls:H,vertical:"vertical"===h,bordered:y,row:e})}))))))))};z.Item=S;var I=z}}]);