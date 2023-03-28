"use strict";(self.webpackChunkantd_more=self.webpackChunkantd_more||[]).push([[7345],{32630:function(e,t,n){n.d(t,{K:function(){return N},Z:function(){return B}});var o=n(49051),c=n.n(o),a=n(2488),l=n.n(a),i=n(22191),r=n.n(i),s=n(43655),d=n.n(s),m=n(47282),p=n(978),b=n(43016),u=n(88155),f=n(12061),g=function(e){return e.children};function y(e){return null!=e}var x=function(e){var t,n=e.itemPrefixCls,o=e.component,a=e.span,l=e.className,i=e.style,r=e.labelStyle,s=e.contentStyle,m=e.bordered,b=e.label,u=e.content,f=e.colon,g=o;return m?p.createElement(g,{className:d()((t={},c()(t,"".concat(n,"-item-label"),y(b)),c()(t,"".concat(n,"-item-content"),y(u)),t),l),style:i,colSpan:a},y(b)&&p.createElement("span",{style:r},b),y(u)&&p.createElement("span",{style:s},u)):p.createElement(g,{className:d()("".concat(n,"-item"),l),style:i,colSpan:a},p.createElement("div",{className:"".concat(n,"-item-container")},(b||0===b)&&p.createElement("span",{className:d()("".concat(n,"-item-label"),c()({},"".concat(n,"-item-no-colon"),!f)),style:r},b),(u||0===u)&&p.createElement("span",{className:d()("".concat(n,"-item-content")),style:s},u)))};function v(e,t,n){var o=t.colon,c=t.prefixCls,a=t.bordered,l=n.component,i=n.type,r=n.showLabel,s=n.showContent,d=n.labelStyle,m=n.contentStyle;return e.map((function(e,t){var n=e.props,b=n.label,u=n.children,f=n.prefixCls,g=void 0===f?c:f,y=n.className,v=n.style,h=n.labelStyle,S=n.contentStyle,C=n.span,E=void 0===C?1:C,w=e.key;return"string"==typeof l?p.createElement(x,{key:"".concat(i,"-").concat(w||t),className:y,style:v,labelStyle:Object.assign(Object.assign({},d),h),contentStyle:Object.assign(Object.assign({},m),S),span:E,colon:o,component:l,itemPrefixCls:g,bordered:a,label:r?b:null,content:s?u:null}):[p.createElement(x,{key:"label-".concat(w||t),className:y,style:Object.assign(Object.assign(Object.assign({},d),v),h),span:1,colon:o,component:l[0],itemPrefixCls:g,bordered:a,label:b}),p.createElement(x,{key:"content-".concat(w||t),className:y,style:Object.assign(Object.assign(Object.assign({},m),v),S),span:2*E-1,component:l[1],itemPrefixCls:g,bordered:a,content:u})]}))}var h=function(e){var t=p.useContext(N),n=e.prefixCls,o=e.vertical,c=e.row,a=e.index,l=e.bordered;return o?p.createElement(p.Fragment,null,p.createElement("tr",{key:"label-".concat(a),className:"".concat(n,"-row")},v(c,e,Object.assign({component:"th",type:"label",showLabel:!0},t))),p.createElement("tr",{key:"content-".concat(a),className:"".concat(n,"-row")},v(c,e,Object.assign({component:"td",type:"content",showContent:!0},t)))):p.createElement("tr",{key:a,className:"".concat(n,"-row")},v(c,e,Object.assign({component:l?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},t)))},S=n(18097),C=n(60929),E=n(69564),w=function(e){var t,n,o=e.componentCls,a=e.descriptionsExtraColor,l=e.descriptionItemPaddingBottom,i=e.descriptionsItemLabelColonMarginRight,r=e.descriptionsItemLabelColonMarginLeft,s=e.descriptionsTitleMarginBottom;return c()({},o,Object.assign(Object.assign(Object.assign({},(0,E.Wf)(e)),function(e){var t,n=e.componentCls,o=e.descriptionsSmallPadding,a=e.descriptionsDefaultPadding,l=e.descriptionsMiddlePadding,i=e.descriptionsBg;return c()({},"&".concat(n,"-bordered"),(t={},c()(t,"".concat(n,"-view"),{border:"".concat(e.lineWidth,"px ").concat(e.lineType," ").concat(e.colorSplit),"> table":{tableLayout:"auto",borderCollapse:"collapse"}}),c()(t,"".concat(n,"-item-label, ").concat(n,"-item-content"),{padding:a,borderInlineEnd:"".concat(e.lineWidth,"px ").concat(e.lineType," ").concat(e.colorSplit),"&:last-child":{borderInlineEnd:"none"}}),c()(t,"".concat(n,"-item-label"),{color:e.colorTextSecondary,backgroundColor:i,"&::after":{display:"none"}}),c()(t,"".concat(n,"-row"),{borderBottom:"".concat(e.lineWidth,"px ").concat(e.lineType," ").concat(e.colorSplit),"&:last-child":{borderBottom:"none"}}),c()(t,"&".concat(n,"-middle"),c()({},"".concat(n,"-item-label, ").concat(n,"-item-content"),{padding:l})),c()(t,"&".concat(n,"-small"),c()({},"".concat(n,"-item-label, ").concat(n,"-item-content"),{padding:o})),t))}(e)),(n={},c()(n,"&-rtl",{direction:"rtl"}),c()(n,"".concat(o,"-header"),{display:"flex",alignItems:"center",marginBottom:s}),c()(n,"".concat(o,"-title"),Object.assign(Object.assign({},E.vS),{flex:"auto",color:e.colorText,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG})),c()(n,"".concat(o,"-extra"),{marginInlineStart:"auto",color:a,fontSize:e.fontSize}),c()(n,"".concat(o,"-view"),{width:"100%",borderRadius:e.borderRadiusLG,table:{width:"100%",tableLayout:"fixed"}}),c()(n,"".concat(o,"-row"),{"> th, > td":{paddingBottom:l},"&:last-child":{borderBottom:"none"}}),c()(n,"".concat(o,"-item-label"),c()({color:e.colorTextTertiary,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:"".concat(r,"px ").concat(i,"px")}},"&".concat(o,"-item-no-colon::after"),{content:'""'})),c()(n,"".concat(o,"-item-no-label"),{"&::after":{margin:0,content:'""'}}),c()(n,"".concat(o,"-item-content"),{display:"table-cell",flex:1,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"}),c()(n,"".concat(o,"-item"),{paddingBottom:0,verticalAlign:"top","&-container":(t={display:"flex"},c()(t,"".concat(o,"-item-label"),{display:"inline-flex",alignItems:"baseline"}),c()(t,"".concat(o,"-item-content"),{display:"inline-flex",alignItems:"baseline"}),t)}),c()(n,"&-middle",c()({},"".concat(o,"-row"),{"> th, > td":{paddingBottom:e.paddingSM}})),c()(n,"&-small",c()({},"".concat(o,"-row"),{"> th, > td":{paddingBottom:e.paddingXS}})),n)))},O=(0,S.Z)("Descriptions",(function(e){var t=e.colorFillAlter,n=e.fontSizeSM*e.lineHeightSM,o=e.colorText,c="".concat(e.paddingXS,"px ").concat(e.padding,"px"),a="".concat(e.padding,"px ").concat(e.paddingLG,"px"),l="".concat(e.paddingSM,"px ").concat(e.paddingLG,"px"),i=e.padding,r=e.marginXS,s=e.marginXXS/2,d=(0,C.TS)(e,{descriptionsBg:t,descriptionsTitleMarginBottom:n,descriptionsExtraColor:o,descriptionItemPaddingBottom:i,descriptionsSmallPadding:c,descriptionsDefaultPadding:a,descriptionsMiddlePadding:l,descriptionsItemLabelColonMarginRight:r,descriptionsItemLabelColonMarginLeft:s});return[w(d)]})),j=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(o=Object.getOwnPropertySymbols(e);c<o.length;c++)t.indexOf(o[c])<0&&Object.prototype.propertyIsEnumerable.call(e,o[c])&&(n[o[c]]=e[o[c]])}return n},N=p.createContext({}),P={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function k(e,t,n){var o=e;return(void 0===n||n>t)&&(o=(0,u.Tm)(e,{span:t})),o}function L(e){var t,n=e.prefixCls,o=e.title,a=e.extra,i=e.column,s=void 0===i?P:i,u=e.colon,g=void 0===u||u,y=e.bordered,x=e.layout,v=e.children,S=e.className,C=e.rootClassName,E=e.style,w=e.size,L=e.labelStyle,B=e.contentStyle,I=j(e,["prefixCls","title","extra","column","colon","bordered","layout","children","className","rootClassName","style","size","labelStyle","contentStyle"]),M=p.useContext(b.E_),T=M.getPrefixCls,z=M.direction,W=T("descriptions",n),H=p.useState({}),Z=l()(H,2),G=Z[0],X=Z[1],R=function(e,t){if("number"==typeof e)return e;if("object"===r()(e))for(var n=0;n<f.c.length;n++){var o=f.c[n];if(t[o]&&void 0!==e[o])return e[o]||P[o]}return 3}(s,G),A=O(W),D=l()(A,2),_=D[0],F=D[1],K=(0,f.Z)();p.useEffect((function(){var e=K.subscribe((function(e){"object"===r()(s)&&X(e)}));return function(){K.unsubscribe(e)}}),[]);var q=function(e,t){var n=(0,m.Z)(e).filter((function(e){return e})),o=[],c=[],a=t;return n.forEach((function(e,l){var i,r=null===(i=e.props)||void 0===i?void 0:i.span,s=r||1;if(l===n.length-1)return c.push(k(e,a,r)),void o.push(c);s<a?(a-=s,c.push(e)):(c.push(k(e,a,s)),o.push(c),a=t,c=[])})),o}(v,R),J=p.useMemo((function(){return{labelStyle:L,contentStyle:B}}),[L,B]);return _(p.createElement(N.Provider,{value:J},p.createElement("div",Object.assign({className:d()(W,(t={},c()(t,"".concat(W,"-").concat(w),w&&"default"!==w),c()(t,"".concat(W,"-bordered"),!!y),c()(t,"".concat(W,"-rtl"),"rtl"===z),t),S,C,F),style:E},I),(o||a)&&p.createElement("div",{className:"".concat(W,"-header")},o&&p.createElement("div",{className:"".concat(W,"-title")},o),a&&p.createElement("div",{className:"".concat(W,"-extra")},a)),p.createElement("div",{className:"".concat(W,"-view")},p.createElement("table",null,p.createElement("tbody",null,q.map((function(e,t){return p.createElement(h,{key:t,index:t,colon:g,prefixCls:W,vertical:"vertical"===x,bordered:y,row:e})}))))))))}L.Item=g;var B=L},21677:function(e,t,n){var o=n(41186);t.Z=function(e){return(0,o.Z)(e,"String")}},41186:function(e,t){var n=Object.prototype.toString;t.Z=function(e,t){return n.call(e)==="[object ".concat(t,"]")}}}]);