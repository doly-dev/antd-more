"use strict";(self.webpackChunkantd_more=self.webpackChunkantd_more||[]).push([[8864],{34865:function(o,t,n){n.d(t,{Z:function(){return L}});var e=n(85976),a=n.n(e),r=n(26011),c=n.n(r),i=n(87575),l=n.n(i),s=n(85604),u=n.n(s),d=n(54723),m=n(43021),g=n(21600),b=n(5038),p=n(97221),f=n(45257),v=n(34855),h=n(9029),C=n(82632),y=n(60946),O=new f.E4("antStatusProcessing",{"0%":{transform:"scale(0.8)",opacity:.5},"100%":{transform:"scale(2.4)",opacity:0}}),S=new f.E4("antZoomBadgeIn",{"0%":{transform:"scale(0) translate(50%, -50%)",opacity:0},"100%":{transform:"scale(1) translate(50%, -50%)"}}),x=new f.E4("antZoomBadgeOut",{"0%":{transform:"scale(1) translate(50%, -50%)"},"100%":{transform:"scale(0) translate(50%, -50%)",opacity:0}}),k=new f.E4("antNoWrapperZoomBadgeIn",{"0%":{transform:"scale(0)",opacity:0},"100%":{transform:"scale(1)"}}),w=new f.E4("antNoWrapperZoomBadgeOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0)",opacity:0}}),N=new f.E4("antBadgeLoadingCircle",{"0%":{transformOrigin:"50%"},"100%":{transform:"translate(50%, -50%) rotate(360deg)",transformOrigin:"50%"}}),E=function(o){var t,n,e,r,c,i=o.componentCls,l=o.iconCls,s=o.antCls,u=o.badgeShadowSize,d=o.motionDurationSlow,m=o.textFontSize,g=o.textFontSizeSM,b=o.statusSize,p=o.dotSize,f=o.textFontWeight,C=o.indicatorHeight,y=o.indicatorHeightSM,E=o.marginXS,j="".concat(s,"-scroll-number"),T=(0,h.Z)(o,(function(o,t){var n=t.darkColor;return a()({},"&".concat(i," ").concat(i,"-color-").concat(o),a()({background:n},"&:not(".concat(i,"-count)"),{color:n}))}));return a()({},i,Object.assign(Object.assign(Object.assign(Object.assign({},(0,v.Wf)(o)),(n={position:"relative",display:"inline-block",width:"fit-content",lineHeight:1},a()(n,"".concat(i,"-count"),{zIndex:o.indicatorZIndex,minWidth:C,height:C,color:o.badgeTextColor,fontWeight:f,fontSize:m,lineHeight:"".concat(C,"px"),whiteSpace:"nowrap",textAlign:"center",background:o.badgeColor,borderRadius:C/2,boxShadow:"0 0 0 ".concat(u,"px ").concat(o.badgeShadowColor),transition:"background ".concat(o.motionDurationMid),a:{color:o.badgeTextColor},"a:hover":{color:o.badgeTextColor},"a:hover &":{background:o.badgeColorHover}}),a()(n,"".concat(i,"-count-sm"),{minWidth:y,height:y,fontSize:g,lineHeight:"".concat(y,"px"),borderRadius:y/2}),a()(n,"".concat(i,"-multiple-words"),{padding:"0 ".concat(o.paddingXS,"px"),bdi:{unicodeBidi:"plaintext"}}),a()(n,"".concat(i,"-dot"),{zIndex:o.indicatorZIndex,width:p,minWidth:p,height:p,background:o.badgeColor,borderRadius:"100%",boxShadow:"0 0 0 ".concat(u,"px ").concat(o.badgeShadowColor)}),a()(n,"".concat(i,"-dot").concat(j),{transition:"background ".concat(d)}),a()(n,"".concat(i,"-count, ").concat(i,"-dot, ").concat(j,"-custom-component"),a()({position:"absolute",top:0,insetInlineEnd:0,transform:"translate(50%, -50%)",transformOrigin:"100% 0%"},"&".concat(l,"-spin"),{animationName:N,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear"})),a()(n,"&".concat(i,"-status"),(t={lineHeight:"inherit",verticalAlign:"baseline"},a()(t,"".concat(i,"-status-dot"),{position:"relative",top:-1,display:"inline-block",width:b,height:b,verticalAlign:"middle",borderRadius:"50%"}),a()(t,"".concat(i,"-status-success"),{backgroundColor:o.colorSuccess}),a()(t,"".concat(i,"-status-processing"),{overflow:"visible",color:o.colorPrimary,backgroundColor:o.colorPrimary,"&::after":{position:"absolute",top:0,insetInlineStart:0,width:"100%",height:"100%",borderWidth:u,borderStyle:"solid",borderColor:"inherit",borderRadius:"50%",animationName:O,animationDuration:o.badgeProcessingDuration,animationIterationCount:"infinite",animationTimingFunction:"ease-in-out",content:'""'}}),a()(t,"".concat(i,"-status-default"),{backgroundColor:o.colorTextPlaceholder}),a()(t,"".concat(i,"-status-error"),{backgroundColor:o.colorError}),a()(t,"".concat(i,"-status-warning"),{backgroundColor:o.colorWarning}),a()(t,"".concat(i,"-status-text"),{marginInlineStart:E,color:o.colorText,fontSize:o.fontSize}),t)),n)),T),(c={},a()(c,"".concat(i,"-zoom-appear, ").concat(i,"-zoom-enter"),{animationName:S,animationDuration:o.motionDurationSlow,animationTimingFunction:o.motionEaseOutBack,animationFillMode:"both"}),a()(c,"".concat(i,"-zoom-leave"),{animationName:x,animationDuration:o.motionDurationSlow,animationTimingFunction:o.motionEaseOutBack,animationFillMode:"both"}),a()(c,"&".concat(i,"-not-a-wrapper"),(e={},a()(e,"".concat(i,"-zoom-appear, ").concat(i,"-zoom-enter"),{animationName:k,animationDuration:o.motionDurationSlow,animationTimingFunction:o.motionEaseOutBack}),a()(e,"".concat(i,"-zoom-leave"),{animationName:w,animationDuration:o.motionDurationSlow,animationTimingFunction:o.motionEaseOutBack}),a()(e,"&:not(".concat(i,"-status)"),{verticalAlign:"middle"}),a()(e,"".concat(j,"-custom-component, ").concat(i,"-count"),{transform:"none"}),a()(e,"".concat(j,"-custom-component, ").concat(j),{position:"relative",top:"auto",display:"block",transformOrigin:"50% 50%"}),e)),a()(c,"".concat(j),(r={overflow:"hidden"},a()(r,"".concat(j,"-only"),a()({position:"relative",display:"inline-block",height:C,transition:"all ".concat(o.motionDurationSlow," ").concat(o.motionEaseOutBack),WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden"},"> p".concat(j,"-only-unit"),{height:C,margin:0,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden"})),a()(r,"".concat(j,"-symbol"),{verticalAlign:"top"}),r)),a()(c,"&-rtl",a()({direction:"rtl"},"".concat(i,"-count, ").concat(i,"-dot, ").concat(j,"-custom-component"),{transform:"translate(-50%, -50%)"})),c)))},j=function(o){var t=o.fontSize,n=o.lineHeight,e=o.lineWidth,a=o.marginXS,r=o.colorBorderBg,c=Math.round(t*n),i=e,l=o.colorBgContainer,s=o.colorError,u=o.colorErrorHover;return(0,C.TS)(o,{badgeFontHeight:c,badgeShadowSize:i,badgeTextColor:l,badgeColor:s,badgeColorHover:u,badgeShadowColor:r,badgeProcessingDuration:"1.2s",badgeRibbonOffset:a,badgeRibbonCornerTransform:"scaleY(0.75)",badgeRibbonCornerFilter:"brightness(75%)"})},T=function(o){var t=o.fontSize,n=o.lineHeight,e=o.fontSizeSM,a=o.lineWidth;return{indicatorZIndex:"auto",indicatorHeight:Math.round(t*n)-2*a,indicatorHeightSM:t,dotSize:e/2,textFontSize:e,textFontSizeSM:e,textFontWeight:"normal",statusSize:e/2}},z=(0,y.Z)("Badge",(function(o){var t=j(o);return[E(t)]}),T),P=function(o){var t,n,e,r=o.antCls,c=o.badgeFontHeight,i=o.marginXS,l=o.badgeRibbonOffset,s="".concat(r,"-ribbon"),u="".concat(r,"-ribbon-wrapper"),d=(0,h.Z)(o,(function(o,t){var n=t.darkColor;return a()({},"&".concat(s,"-color-").concat(o),{background:n,color:n})}));return e={},a()(e,"".concat(u),{position:"relative"}),a()(e,"".concat(s),Object.assign(Object.assign(Object.assign(Object.assign({},(0,v.Wf)(o)),(t={position:"absolute",top:i,padding:"0 ".concat(o.paddingXS,"px"),color:o.colorPrimary,lineHeight:"".concat(c,"px"),whiteSpace:"nowrap",backgroundColor:o.colorPrimary,borderRadius:o.borderRadiusSM},a()(t,"".concat(s,"-text"),{color:o.colorTextLightSolid}),a()(t,"".concat(s,"-corner"),{position:"absolute",top:"100%",width:l,height:l,color:"currentcolor",border:"".concat(l/2,"px solid"),transform:o.badgeRibbonCornerTransform,transformOrigin:"top",filter:o.badgeRibbonCornerFilter}),t)),d),(n={},a()(n,"&".concat(s,"-placement-end"),a()({insetInlineEnd:-l,borderEndEndRadius:0},"".concat(s,"-corner"),{insetInlineEnd:0,borderInlineEndColor:"transparent",borderBlockEndColor:"transparent"})),a()(n,"&".concat(s,"-placement-start"),a()({insetInlineStart:-l,borderEndStartRadius:0},"".concat(s,"-corner"),{insetInlineStart:0,borderBlockEndColor:"transparent",borderInlineStartColor:"transparent"})),a()(n,"&-rtl",{direction:"rtl"}),n))),e},I=(0,y.Z)(["Badge","Ribbon"],(function(o){var t=j(o);return[P(t)]}),T);var B=function(o){var t,n=o.className,e=o.prefixCls,r=o.style,c=o.color,i=o.children,s=o.text,d=o.placement,b=void 0===d?"end":d,f=o.rootClassName,v=m.useContext(p.E_),h=v.getPrefixCls,C=v.direction,y=h("ribbon",e),O=(0,g.o2)(c,!1),S=u()(y,"".concat(y,"-placement-").concat(b),(t={},a()(t,"".concat(y,"-rtl"),"rtl"===C),a()(t,"".concat(y,"-color-").concat(c),O),t),n),x=I(y),k=l()(x,2),w=k[0],N=k[1],E={},j={};return c&&!O&&(E.background=c,j.color=c),w(m.createElement("div",{className:u()("".concat(y,"-wrapper"),f,N)},i,m.createElement("div",{className:u()(S,N),style:Object.assign(Object.assign({},E),r)},m.createElement("span",{className:"".concat(y,"-text")},s),m.createElement("div",{className:"".concat(y,"-corner"),style:j}))))};function R(o){var t,n=o.prefixCls,e=o.value,a=o.current,r=o.offset,c=void 0===r?0:r;return c&&(t={position:"absolute",top:"".concat(c,"00%"),left:0}),m.createElement("span",{style:t,className:u()("".concat(n,"-only-unit"),{current:a})},e)}function F(o,t,n){for(var e=o,a=0;(e+10)%10!==t;)e+=n,a+=n;return a}function H(o){var t,n,e=o.prefixCls,a=o.count,r=o.value,c=Number(r),i=Math.abs(a),s=m.useState(c),u=l()(s,2),d=u[0],g=u[1],b=m.useState(i),p=l()(b,2),f=p[0],v=p[1],h=function(){g(c),v(i)};if(m.useEffect((function(){var o=setTimeout((function(){h()}),1e3);return function(){clearTimeout(o)}}),[c]),d===c||Number.isNaN(c)||Number.isNaN(d))t=[m.createElement(R,Object.assign({},o,{key:c,current:!0}))],n={transition:"none"};else{t=[];for(var C=c+10,y=[],O=c;O<=C;O+=1)y.push(O);var S=y.findIndex((function(o){return o%10===d}));t=y.map((function(t,n){var e=t%10;return m.createElement(R,Object.assign({},o,{key:t,value:e,offset:n-S,current:n===S}))})),n={transform:"translateY(".concat(-F(d,c,f<i?1:-1),"00%)")}}return m.createElement("span",{className:"".concat(e,"-only"),style:n,onTransitionEnd:h},t)}var W=function(o,t){var n={};for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&t.indexOf(e)<0&&(n[e]=o[e]);if(null!=o&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(e=Object.getOwnPropertySymbols(o);a<e.length;a++)t.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(o,e[a])&&(n[e[a]]=o[e[a]])}return n},Z=m.forwardRef((function(o,t){var n=o.prefixCls,e=o.count,a=o.className,r=o.motionClassName,c=o.style,i=o.title,l=o.show,s=o.component,d=void 0===s?"sup":s,g=o.children,f=W(o,["prefixCls","count","className","motionClassName","style","title","show","component","children"]),v=(0,m.useContext(p.E_).getPrefixCls)("scroll-number",n),h=Object.assign(Object.assign({},f),{"data-show":l,style:c,className:u()(v,a,r),title:i}),C=e;if(e&&Number(e)%1==0){var y=String(e).split("");C=m.createElement("bdi",null,y.map((function(o,t){return m.createElement(H,{prefixCls:v,count:Number(e),value:o,key:y.length-t})})))}return c&&c.borderColor&&(h.style=Object.assign(Object.assign({},c),{boxShadow:"0 0 0 1px ".concat(c.borderColor," inset")})),g?(0,b.Tm)(g,(function(o){return{className:u()("".concat(v,"-custom-component"),null==o?void 0:o.className,r)}})):m.createElement(d,Object.assign({},h,{ref:t}),C)})),D=Z,M=function(o,t){var n={};for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&t.indexOf(e)<0&&(n[e]=o[e]);if(null!=o&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(e=Object.getOwnPropertySymbols(o);a<e.length;a++)t.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(o,e[a])&&(n[e[a]]=o[e[a]])}return n},A=function(o,t){var n,e,r,i,s,f,v,h=o.prefixCls,C=o.scrollNumberPrefixCls,y=o.children,O=o.status,S=o.text,x=o.color,k=o.count,w=void 0===k?null:k,N=o.overflowCount,E=void 0===N?99:N,j=o.dot,T=void 0!==j&&j,P=o.size,I=void 0===P?"default":P,B=o.title,R=o.offset,F=o.style,H=o.className,W=o.rootClassName,Z=o.classNames,A=o.styles,X=o.showZero,L=void 0!==X&&X,_=M(o,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","rootClassName","classNames","styles","showZero"]),V=m.useContext(p.E_),Y=V.getPrefixCls,Q=V.direction,U=V.badge,q=Y("badge",h),G=z(q),J=l()(G,2),K=J[0],$=J[1],oo=w>E?"".concat(E,"+"):w,to="0"===oo||0===oo,no=(null!=O||null!=x)&&(null===w||to&&!L),eo=T&&!to,ao=eo?"":oo,ro=(0,m.useMemo)((function(){return(null==ao||""===ao||to&&!L)&&!eo}),[ao,to,L,eo]),co=(0,m.useRef)(w);ro||(co.current=w);var io=co.current,lo=(0,m.useRef)(ao);ro||(lo.current=ao);var so=lo.current,uo=(0,m.useRef)(eo);ro||(uo.current=eo);var mo=(0,m.useMemo)((function(){if(!R)return Object.assign(Object.assign({},null==U?void 0:U.style),F);var o={marginTop:R[1]};return"rtl"===Q?o.left=parseInt(R[0],10):o.right=-parseInt(R[0],10),Object.assign(Object.assign(Object.assign({},o),null==U?void 0:U.style),F)}),[Q,R,F,null==U?void 0:U.style]),go=null!=B?B:"string"==typeof io||"number"==typeof io?io:void 0,bo=ro||!S?null:m.createElement("span",{className:"".concat(q,"-status-text")},S),po=io&&"object"===c()(io)?(0,b.Tm)(io,(function(o){return{style:Object.assign(Object.assign({},mo),o.style)}})):void 0,fo=(0,g.o2)(x,!1),vo=u()(null==Z?void 0:Z.indicator,null===(r=null==U?void 0:U.classNames)||void 0===r?void 0:r.indicator,(n={},a()(n,"".concat(q,"-status-dot"),no),a()(n,"".concat(q,"-status-").concat(O),!!O),a()(n,"".concat(q,"-color-").concat(x),fo),n)),ho={};x&&!fo&&(ho.color=x,ho.background=x);var Co=u()(q,(e={},a()(e,"".concat(q,"-status"),no),a()(e,"".concat(q,"-not-a-wrapper"),!y),a()(e,"".concat(q,"-rtl"),"rtl"===Q),e),H,W,null==U?void 0:U.className,null===(i=null==U?void 0:U.classNames)||void 0===i?void 0:i.root,null==Z?void 0:Z.root,$);if(!y&&no){var yo=mo.color;return K(m.createElement("span",Object.assign({},_,{className:Co,style:Object.assign(Object.assign(Object.assign({},null==A?void 0:A.root),null===(s=null==U?void 0:U.styles)||void 0===s?void 0:s.root),mo)}),m.createElement("span",{className:vo,style:Object.assign(Object.assign(Object.assign({},null==A?void 0:A.indicator),null===(f=null==U?void 0:U.styles)||void 0===f?void 0:f.indicator),ho)}),S&&m.createElement("span",{style:{color:yo},className:"".concat(q,"-status-text")},S)))}return K(m.createElement("span",Object.assign({ref:t},_,{className:Co,style:Object.assign(Object.assign({},null===(v=null==U?void 0:U.styles)||void 0===v?void 0:v.root),null==A?void 0:A.root)}),y,m.createElement(d.ZP,{visible:!ro,motionName:"".concat(q,"-zoom"),motionAppear:!1,motionDeadline:1e3},(function(o){var t,n,e,r=o.className,c=o.ref,i=Y("scroll-number",C),l=uo.current,s=u()(null==Z?void 0:Z.indicator,null===(n=null==U?void 0:U.classNames)||void 0===n?void 0:n.indicator,(t={},a()(t,"".concat(q,"-dot"),l),a()(t,"".concat(q,"-count"),!l),a()(t,"".concat(q,"-count-sm"),"small"===I),a()(t,"".concat(q,"-multiple-words"),!l&&so&&so.toString().length>1),a()(t,"".concat(q,"-status-").concat(O),!!O),a()(t,"".concat(q,"-color-").concat(x),fo),t)),d=Object.assign(Object.assign(Object.assign({},null==A?void 0:A.indicator),null===(e=null==U?void 0:U.styles)||void 0===e?void 0:e.indicator),mo);return x&&!fo&&((d=d||{}).background=x),m.createElement(D,{prefixCls:i,show:!ro,motionClassName:r,className:s,count:so,title:go,style:d,key:"scrollNumber",ref:c},po)})),bo))},X=m.forwardRef(A);X.Ribbon=B;var L=X},88729:function(o,t,n){n.d(t,{Z:function(){return z}});var e=n(85976),a=n.n(e),r=n(87575),c=n.n(r),i=n(43021),l=n(64519),s=n(85604),u=n.n(s),d=n(21600),m=n(25713),g=n(69105),b=n(97221),p=n(34855),f=n(82632),v=n(60946),h=function(o){var t=o.lineWidth,n=o.fontSizeIcon,e=o.fontSizeSM,a="".concat(o.lineHeightSM*e,"px");return(0,f.TS)(o,{tagFontSize:e,tagLineHeight:a,tagIconSize:n-2*t,tagPaddingHorizontal:8,tagBorderlessBg:o.colorFillTertiary})},C=function(o){return{defaultBg:o.colorFillQuaternary,defaultColor:o.colorText}},y=(0,v.Z)("Tag",(function(o){return function(o){var t,n,e,r=o.paddingXXS,c=o.lineWidth,i=o.tagPaddingHorizontal,l=o.componentCls,s=i-c,u=r-c;return e={},a()(e,l,Object.assign(Object.assign({},(0,p.Wf)(o)),(n={display:"inline-block",height:"auto",marginInlineEnd:o.marginXS,paddingInline:s,fontSize:o.tagFontSize,lineHeight:o.tagLineHeight,whiteSpace:"nowrap",background:o.defaultBg,border:"".concat(o.lineWidth,"px ").concat(o.lineType," ").concat(o.colorBorder),borderRadius:o.borderRadiusSM,opacity:1,transition:"all ".concat(o.motionDurationMid),textAlign:"start",position:"relative"},a()(n,"&".concat(l,"-rtl"),{direction:"rtl"}),a()(n,"&, a, a:hover",{color:o.defaultColor}),a()(n,"".concat(l,"-close-icon"),{marginInlineStart:u,color:o.colorTextDescription,fontSize:o.tagIconSize,cursor:"pointer",transition:"all ".concat(o.motionDurationMid),"&:hover":{color:o.colorTextHeading}}),a()(n,"&".concat(l,"-has-color"),a()({borderColor:"transparent"},"&, a, a:hover, ".concat(o.iconCls,"-close, ").concat(o.iconCls,"-close:hover"),{color:o.colorTextLightSolid})),a()(n,"&-checkable",(t={backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer"},a()(t,"&:not(".concat(l,"-checkable-checked):hover"),{color:o.colorPrimary,backgroundColor:o.colorFillSecondary}),a()(t,"&:active, &-checked",{color:o.colorTextLightSolid}),a()(t,"&-checked",{backgroundColor:o.colorPrimary,"&:hover":{backgroundColor:o.colorPrimaryHover}}),a()(t,"&:active",{backgroundColor:o.colorPrimaryActive}),t)),a()(n,"&-hidden",{display:"none"}),a()(n,"> ".concat(o.iconCls," + span, > span + ").concat(o.iconCls),{marginInlineStart:s}),n))),a()(e,"".concat(l,"-borderless"),{borderColor:"transparent",background:o.tagBorderlessBg}),e}(h(o))}),C),O=function(o,t){var n={};for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&t.indexOf(e)<0&&(n[e]=o[e]);if(null!=o&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(e=Object.getOwnPropertySymbols(o);a<e.length;a++)t.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(o,e[a])&&(n[e[a]]=o[e[a]])}return n},S=function(o){var t=o.prefixCls,n=o.style,e=o.className,r=o.checked,l=o.onChange,s=o.onClick,d=O(o,["prefixCls","style","className","checked","onChange","onClick"]),m=i.useContext(b.E_),g=m.getPrefixCls,p=m.tag,f=g("tag",t),v=y(f),h=c()(v,2),C=h[0],S=h[1],x=u()(f,"".concat(f,"-checkable"),a()({},"".concat(f,"-checkable-checked"),r),null==p?void 0:p.className,e,S);return C(i.createElement("span",Object.assign({},d,{style:Object.assign(Object.assign({},n),null==p?void 0:p.style),className:x,onClick:function(o){null==l||l(!r),null==s||s(o)}})))},x=n(9029),k=(0,v.b)(["Tag","preset"],(function(o){return function(o){return(0,x.Z)(o,(function(t,n){var e=n.textColor,r=n.lightBorderColor,c=n.lightColor,i=n.darkColor;return a()({},"".concat(o.componentCls,"-").concat(t),a()({color:e,background:c,borderColor:r,"&-inverse":{color:o.colorTextLightSolid,background:i,borderColor:i}},"&".concat(o.componentCls,"-borderless"),{borderColor:"transparent"}))}))}(h(o))}),C);var w=function(o,t,n){var e,r="string"!=typeof(e=n)?e:e.charAt(0).toUpperCase()+e.slice(1);return a()({},"".concat(o.componentCls,"-").concat(t),a()({color:o["color".concat(n)],background:o["color".concat(r,"Bg")],borderColor:o["color".concat(r,"Border")]},"&".concat(o.componentCls,"-borderless"),{borderColor:"transparent"}))},N=(0,v.b)(["Tag","status"],(function(o){var t=h(o);return[w(t,"success","Success"),w(t,"processing","Info"),w(t,"error","Error"),w(t,"warning","Warning")]}),C),E=function(o,t){var n={};for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&t.indexOf(e)<0&&(n[e]=o[e]);if(null!=o&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(e=Object.getOwnPropertySymbols(o);a<e.length;a++)t.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(o,e[a])&&(n[e[a]]=o[e[a]])}return n},j=function(o,t){var n,e=o.prefixCls,r=o.className,s=o.rootClassName,p=o.style,f=o.children,v=o.icon,h=o.color,C=o.onClose,O=o.closeIcon,S=o.closable,x=o.bordered,w=void 0===x||x,j=E(o,["prefixCls","className","rootClassName","style","children","icon","color","onClose","closeIcon","closable","bordered"]),T=i.useContext(b.E_),z=T.getPrefixCls,P=T.direction,I=T.tag,B=i.useState(!0),R=c()(B,2),F=R[0],H=R[1];i.useEffect((function(){"visible"in j&&H(j.visible)}),[j.visible]);var W=(0,d.o2)(h),Z=(0,d.yT)(h),D=W||Z,M=Object.assign(Object.assign({backgroundColor:h&&!D?h:void 0},null==I?void 0:I.style),p),A=z("tag",e),X=y(A),L=c()(X,2),_=L[0],V=L[1],Y=u()(A,null==I?void 0:I.className,(n={},a()(n,"".concat(A,"-").concat(h),D),a()(n,"".concat(A,"-has-color"),h&&!D),a()(n,"".concat(A,"-hidden"),!F),a()(n,"".concat(A,"-rtl"),"rtl"===P),a()(n,"".concat(A,"-borderless"),!w),n),r,s,V),Q=function(o){o.stopPropagation(),null==C||C(o),o.defaultPrevented||H(!1)},U=(0,m.Z)(S,O,(function(o){return null===o?i.createElement(l.Z,{className:"".concat(A,"-close-icon"),onClick:Q}):i.createElement("span",{className:"".concat(A,"-close-icon"),onClick:Q},o)}),null,!1),q=c()(U,2)[1],G="function"==typeof j.onClick||f&&"a"===f.type,J=v||null,K=J?i.createElement(i.Fragment,null,J,f&&i.createElement("span",null,f)):f,$=i.createElement("span",Object.assign({},j,{ref:t,className:Y,style:M}),K,q,W&&i.createElement(k,{key:"preset",prefixCls:A}),Z&&i.createElement(N,{key:"status",prefixCls:A}));return _(G?i.createElement(g.Z,{component:"Tag"},$):$)},T=i.forwardRef(j);T.CheckableTag=S;var z=T}}]);