"use strict";(self.webpackChunkantd_more=self.webpackChunkantd_more||[]).push([[1551],{47519:function(o,t,n){n.d(t,{Z:function(){return q}});var e=n(48928),a=n.n(e),r=n(57775),c=n.n(r),i=n(15304),l=n.n(i),s=n(34796),u=n(23397),d=n.n(u),m=n(47451),b=n(696),g=n(20070),f=n(42093),p=n(58916),v=n(13415),h=n(22945),C=n(93618),y=n(91518),O=new p.E4("antStatusProcessing",{"0%":{transform:"scale(0.8)",opacity:.5},"100%":{transform:"scale(2.4)",opacity:0}}),S=new p.E4("antZoomBadgeIn",{"0%":{transform:"scale(0) translate(50%, -50%)",opacity:0},"100%":{transform:"scale(1) translate(50%, -50%)"}}),k=new p.E4("antZoomBadgeOut",{"0%":{transform:"scale(1) translate(50%, -50%)"},"100%":{transform:"scale(0) translate(50%, -50%)",opacity:0}}),x=new p.E4("antNoWrapperZoomBadgeIn",{"0%":{transform:"scale(0)",opacity:0},"100%":{transform:"scale(1)"}}),w=new p.E4("antNoWrapperZoomBadgeOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0)",opacity:0}}),N=new p.E4("antBadgeLoadingCircle",{"0%":{transformOrigin:"50%"},"100%":{transform:"translate(50%, -50%) rotate(360deg)",transformOrigin:"50%"}}),E=function(o){var t=o.fontHeight,n=o.lineWidth,e=o.marginXS,a=o.colorBorderBg,r=t,c=n,i=o.colorBgContainer,l=o.colorError,s=o.colorErrorHover;return(0,C.TS)(o,{badgeFontHeight:r,badgeShadowSize:c,badgeTextColor:i,badgeColor:l,badgeColorHover:s,badgeShadowColor:a,badgeProcessingDuration:"1.2s",badgeRibbonOffset:e,badgeRibbonCornerTransform:"scaleY(0.75)",badgeRibbonCornerFilter:"brightness(75%)"})},j=function(o){var t=o.fontSize,n=o.lineHeight,e=o.fontSizeSM,a=o.lineWidth;return{indicatorZIndex:"auto",indicatorHeight:Math.round(t*n)-2*a,indicatorHeightSM:t,dotSize:e/2,textFontSize:e,textFontSizeSM:e,textFontWeight:"normal",statusSize:e/2}},T=(0,y.I$)("Badge",(function(o){return function(o){var t,n,e,r,c,i=o.componentCls,l=o.iconCls,s=o.antCls,u=o.badgeShadowSize,d=o.motionDurationSlow,m=o.textFontSize,b=o.textFontSizeSM,g=o.statusSize,f=o.dotSize,C=o.textFontWeight,y=o.indicatorHeight,E=o.indicatorHeightSM,j=o.marginXS,T=o.calc,I="".concat(s,"-scroll-number"),z=(0,h.Z)(o,(function(o,t){var n=t.darkColor;return a()({},"&".concat(i," ").concat(i,"-color-").concat(o),a()({background:n},"&:not(".concat(i,"-count)"),{color:n}))}));return a()({},i,Object.assign(Object.assign(Object.assign(Object.assign({},(0,v.Wf)(o)),(n={position:"relative",display:"inline-block",width:"fit-content",lineHeight:1},a()(n,"".concat(i,"-count"),{zIndex:o.indicatorZIndex,minWidth:y,height:y,color:o.badgeTextColor,fontWeight:C,fontSize:m,lineHeight:(0,p.bf)(y),whiteSpace:"nowrap",textAlign:"center",background:o.badgeColor,borderRadius:T(y).div(2).equal(),boxShadow:"0 0 0 ".concat((0,p.bf)(u)," ").concat(o.badgeShadowColor),transition:"background ".concat(o.motionDurationMid),a:{color:o.badgeTextColor},"a:hover":{color:o.badgeTextColor},"a:hover &":{background:o.badgeColorHover}}),a()(n,"".concat(i,"-count-sm"),{minWidth:E,height:E,fontSize:b,lineHeight:(0,p.bf)(E),borderRadius:T(E).div(2).equal()}),a()(n,"".concat(i,"-multiple-words"),{padding:"0 ".concat((0,p.bf)(o.paddingXS)),bdi:{unicodeBidi:"plaintext"}}),a()(n,"".concat(i,"-dot"),{zIndex:o.indicatorZIndex,width:f,minWidth:f,height:f,background:o.badgeColor,borderRadius:"100%",boxShadow:"0 0 0 ".concat((0,p.bf)(u)," ").concat(o.badgeShadowColor)}),a()(n,"".concat(i,"-dot").concat(I),{transition:"background ".concat(d)}),a()(n,"".concat(i,"-count, ").concat(i,"-dot, ").concat(I,"-custom-component"),a()({position:"absolute",top:0,insetInlineEnd:0,transform:"translate(50%, -50%)",transformOrigin:"100% 0%"},"&".concat(l,"-spin"),{animationName:N,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear"})),a()(n,"&".concat(i,"-status"),(t={lineHeight:"inherit",verticalAlign:"baseline"},a()(t,"".concat(i,"-status-dot"),{position:"relative",top:-1,display:"inline-block",width:g,height:g,verticalAlign:"middle",borderRadius:"50%"}),a()(t,"".concat(i,"-status-success"),{backgroundColor:o.colorSuccess}),a()(t,"".concat(i,"-status-processing"),{overflow:"visible",color:o.colorPrimary,backgroundColor:o.colorPrimary,"&::after":{position:"absolute",top:0,insetInlineStart:0,width:"100%",height:"100%",borderWidth:u,borderStyle:"solid",borderColor:"inherit",borderRadius:"50%",animationName:O,animationDuration:o.badgeProcessingDuration,animationIterationCount:"infinite",animationTimingFunction:"ease-in-out",content:'""'}}),a()(t,"".concat(i,"-status-default"),{backgroundColor:o.colorTextPlaceholder}),a()(t,"".concat(i,"-status-error"),{backgroundColor:o.colorError}),a()(t,"".concat(i,"-status-warning"),{backgroundColor:o.colorWarning}),a()(t,"".concat(i,"-status-text"),{marginInlineStart:j,color:o.colorText,fontSize:o.fontSize}),t)),n)),z),(c={},a()(c,"".concat(i,"-zoom-appear, ").concat(i,"-zoom-enter"),{animationName:S,animationDuration:o.motionDurationSlow,animationTimingFunction:o.motionEaseOutBack,animationFillMode:"both"}),a()(c,"".concat(i,"-zoom-leave"),{animationName:k,animationDuration:o.motionDurationSlow,animationTimingFunction:o.motionEaseOutBack,animationFillMode:"both"}),a()(c,"&".concat(i,"-not-a-wrapper"),(e={},a()(e,"".concat(i,"-zoom-appear, ").concat(i,"-zoom-enter"),{animationName:x,animationDuration:o.motionDurationSlow,animationTimingFunction:o.motionEaseOutBack}),a()(e,"".concat(i,"-zoom-leave"),{animationName:w,animationDuration:o.motionDurationSlow,animationTimingFunction:o.motionEaseOutBack}),a()(e,"&:not(".concat(i,"-status)"),{verticalAlign:"middle"}),a()(e,"".concat(I,"-custom-component, ").concat(i,"-count"),{transform:"none"}),a()(e,"".concat(I,"-custom-component, ").concat(I),{position:"relative",top:"auto",display:"block",transformOrigin:"50% 50%"}),e)),a()(c,"".concat(I),(r={overflow:"hidden"},a()(r,"".concat(I,"-only"),a()({position:"relative",display:"inline-block",height:y,transition:"all ".concat(o.motionDurationSlow," ").concat(o.motionEaseOutBack),WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden"},"> p".concat(I,"-only-unit"),{height:y,margin:0,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden"})),a()(r,"".concat(I,"-symbol"),{verticalAlign:"top"}),r)),a()(c,"&-rtl",a()({direction:"rtl"},"".concat(i,"-count, ").concat(i,"-dot, ").concat(I,"-custom-component"),{transform:"translate(-50%, -50%)"})),c)))}(E(o))}),j),I=(0,y.I$)(["Badge","Ribbon"],(function(o){return function(o){var t,n,e,r=o.antCls,c=o.badgeFontHeight,i=o.marginXS,l=o.badgeRibbonOffset,s=o.calc,u="".concat(r,"-ribbon"),d="".concat(r,"-ribbon-wrapper"),m=(0,h.Z)(o,(function(o,t){var n=t.darkColor;return a()({},"&".concat(u,"-color-").concat(o),{background:n,color:n})}));return e={},a()(e,"".concat(d),{position:"relative"}),a()(e,"".concat(u),Object.assign(Object.assign(Object.assign(Object.assign({},(0,v.Wf)(o)),(t={position:"absolute",top:i,padding:"0 ".concat((0,p.bf)(o.paddingXS)),color:o.colorPrimary,lineHeight:(0,p.bf)(c),whiteSpace:"nowrap",backgroundColor:o.colorPrimary,borderRadius:o.borderRadiusSM},a()(t,"".concat(u,"-text"),{color:o.colorTextLightSolid}),a()(t,"".concat(u,"-corner"),{position:"absolute",top:"100%",width:l,height:l,color:"currentcolor",border:"".concat((0,p.bf)(s(l).div(2).equal())," solid"),transform:o.badgeRibbonCornerTransform,transformOrigin:"top",filter:o.badgeRibbonCornerFilter}),t)),m),(n={},a()(n,"&".concat(u,"-placement-end"),a()({insetInlineEnd:s(l).mul(-1).equal(),borderEndEndRadius:0},"".concat(u,"-corner"),{insetInlineEnd:0,borderInlineEndColor:"transparent",borderBlockEndColor:"transparent"})),a()(n,"&".concat(u,"-placement-start"),a()({insetInlineStart:s(l).mul(-1).equal(),borderEndStartRadius:0},"".concat(u,"-corner"),{insetInlineStart:0,borderBlockEndColor:"transparent",borderInlineStartColor:"transparent"})),a()(n,"&-rtl",{direction:"rtl"}),n))),e}(E(o))}),j);var z=function(o){var t,n=o.className,e=o.prefixCls,r=o.style,c=o.color,i=o.children,u=o.text,m=o.placement,g=void 0===m?"end":m,p=o.rootClassName,v=s.useContext(f.E_),h=v.getPrefixCls,C=v.direction,y=h("ribbon",e),O="".concat(y,"-wrapper"),S=I(y,O),k=l()(S,3),x=k[0],w=k[1],N=k[2],E=(0,b.o2)(c,!1),j=d()(y,"".concat(y,"-placement-").concat(g),(t={},a()(t,"".concat(y,"-rtl"),"rtl"===C),a()(t,"".concat(y,"-color-").concat(c),E),t),n),T={},z={};return c&&!E&&(T.background=c,z.color=c),x(s.createElement("div",{className:d()(O,p,w,N)},i,s.createElement("div",{className:d()(j,w),style:Object.assign(Object.assign({},T),r)},s.createElement("span",{className:"".concat(y,"-text")},u),s.createElement("div",{className:"".concat(y,"-corner"),style:z}))))};function P(o){var t,n=o.prefixCls,e=o.value,a=o.current,r=o.offset,c=void 0===r?0:r;return c&&(t={position:"absolute",top:"".concat(c,"00%"),left:0}),s.createElement("span",{style:t,className:d()("".concat(n,"-only-unit"),{current:a})},e)}function B(o,t,n){for(var e=o,a=0;(e+10)%10!==t;)e+=n,a+=n;return a}function R(o){var t,n,e=o.prefixCls,a=o.count,r=o.value,c=Number(r),i=Math.abs(a),u=s.useState(c),d=l()(u,2),m=d[0],b=d[1],g=s.useState(i),f=l()(g,2),p=f[0],v=f[1],h=function(){b(c),v(i)};if(s.useEffect((function(){var o=setTimeout((function(){h()}),1e3);return function(){clearTimeout(o)}}),[c]),m===c||Number.isNaN(c)||Number.isNaN(m))t=[s.createElement(P,Object.assign({},o,{key:c,current:!0}))],n={transition:"none"};else{t=[];for(var C=c+10,y=[],O=c;O<=C;O+=1)y.push(O);var S=y.findIndex((function(o){return o%10===m}));t=y.map((function(t,n){var e=t%10;return s.createElement(P,Object.assign({},o,{key:t,value:e,offset:n-S,current:n===S}))})),n={transform:"translateY(".concat(-B(m,c,p<i?1:-1),"00%)")}}return s.createElement("span",{className:"".concat(e,"-only"),style:n,onTransitionEnd:h},t)}var H=function(o,t){var n={};for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&t.indexOf(e)<0&&(n[e]=o[e]);if(null!=o&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(e=Object.getOwnPropertySymbols(o);a<e.length;a++)t.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(o,e[a])&&(n[e[a]]=o[e[a]])}return n},F=s.forwardRef((function(o,t){var n=o.prefixCls,e=o.count,a=o.className,r=o.motionClassName,c=o.style,i=o.title,l=o.show,u=o.component,m=void 0===u?"sup":u,b=o.children,p=H(o,["prefixCls","count","className","motionClassName","style","title","show","component","children"]),v=(0,s.useContext(f.E_).getPrefixCls)("scroll-number",n),h=Object.assign(Object.assign({},p),{"data-show":l,style:c,className:d()(v,a,r),title:i}),C=e;if(e&&Number(e)%1==0){var y=String(e).split("");C=s.createElement("bdi",null,y.map((function(o,t){return s.createElement(R,{prefixCls:v,count:Number(e),value:o,key:y.length-t})})))}return c&&c.borderColor&&(h.style=Object.assign(Object.assign({},c),{boxShadow:"0 0 0 1px ".concat(c.borderColor," inset")})),b?(0,g.Tm)(b,(function(o){return{className:d()("".concat(v,"-custom-component"),null==o?void 0:o.className,r)}})):s.createElement(m,Object.assign({},h,{ref:t}),C)})),W=F,D=function(o,t){var n={};for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&t.indexOf(e)<0&&(n[e]=o[e]);if(null!=o&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(e=Object.getOwnPropertySymbols(o);a<e.length;a++)t.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(o,e[a])&&(n[e[a]]=o[e[a]])}return n},M=function(o,t){var n,e,r,i,u,p,v,h=o.prefixCls,C=o.scrollNumberPrefixCls,y=o.children,O=o.status,S=o.text,k=o.color,x=o.count,w=void 0===x?null:x,N=o.overflowCount,E=void 0===N?99:N,j=o.dot,I=void 0!==j&&j,z=o.size,P=void 0===z?"default":z,B=o.title,R=o.offset,H=o.style,F=o.className,M=o.rootClassName,Z=o.classNames,q=o.styles,A=o.showZero,X=void 0!==A&&A,L=D(o,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","rootClassName","classNames","styles","showZero"]),_=s.useContext(f.E_),$=_.getPrefixCls,V=_.direction,Y=_.badge,Q=$("badge",h),U=T(Q),G=l()(U,3),J=G[0],K=G[1],oo=G[2],to=w>E?"".concat(E,"+"):w,no="0"===to||0===to,eo=(null!=O||null!=k)&&(null===w||no&&!X),ao=I&&!no,ro=ao?"":to,co=(0,s.useMemo)((function(){return(null==ro||""===ro||no&&!X)&&!ao}),[ro,no,X,ao]),io=(0,s.useRef)(w);co||(io.current=w);var lo=io.current,so=(0,s.useRef)(ro);co||(so.current=ro);var uo=so.current,mo=(0,s.useRef)(ao);co||(mo.current=ao);var bo=(0,s.useMemo)((function(){if(!R)return Object.assign(Object.assign({},null==Y?void 0:Y.style),H);var o={marginTop:R[1]};return"rtl"===V?o.left=parseInt(R[0],10):o.right=-parseInt(R[0],10),Object.assign(Object.assign(Object.assign({},o),null==Y?void 0:Y.style),H)}),[V,R,H,null==Y?void 0:Y.style]),go=null!=B?B:"string"==typeof lo||"number"==typeof lo?lo:void 0,fo=co||!S?null:s.createElement("span",{className:"".concat(Q,"-status-text")},S),po=lo&&"object"===c()(lo)?(0,g.Tm)(lo,(function(o){return{style:Object.assign(Object.assign({},bo),o.style)}})):void 0,vo=(0,b.o2)(k,!1),ho=d()(null==Z?void 0:Z.indicator,null===(r=null==Y?void 0:Y.classNames)||void 0===r?void 0:r.indicator,(n={},a()(n,"".concat(Q,"-status-dot"),eo),a()(n,"".concat(Q,"-status-").concat(O),!!O),a()(n,"".concat(Q,"-color-").concat(k),vo),n)),Co={};k&&!vo&&(Co.color=k,Co.background=k);var yo=d()(Q,(e={},a()(e,"".concat(Q,"-status"),eo),a()(e,"".concat(Q,"-not-a-wrapper"),!y),a()(e,"".concat(Q,"-rtl"),"rtl"===V),e),F,M,null==Y?void 0:Y.className,null===(i=null==Y?void 0:Y.classNames)||void 0===i?void 0:i.root,null==Z?void 0:Z.root,K,oo);if(!y&&eo){var Oo=bo.color;return J(s.createElement("span",Object.assign({},L,{className:yo,style:Object.assign(Object.assign(Object.assign({},null==q?void 0:q.root),null===(u=null==Y?void 0:Y.styles)||void 0===u?void 0:u.root),bo)}),s.createElement("span",{className:ho,style:Object.assign(Object.assign(Object.assign({},null==q?void 0:q.indicator),null===(p=null==Y?void 0:Y.styles)||void 0===p?void 0:p.indicator),Co)}),S&&s.createElement("span",{style:{color:Oo},className:"".concat(Q,"-status-text")},S)))}return J(s.createElement("span",Object.assign({ref:t},L,{className:yo,style:Object.assign(Object.assign({},null===(v=null==Y?void 0:Y.styles)||void 0===v?void 0:v.root),null==q?void 0:q.root)}),y,s.createElement(m.ZP,{visible:!co,motionName:"".concat(Q,"-zoom"),motionAppear:!1,motionDeadline:1e3},(function(o){var t,n,e,r=o.className,c=o.ref,i=$("scroll-number",C),l=mo.current,u=d()(null==Z?void 0:Z.indicator,null===(n=null==Y?void 0:Y.classNames)||void 0===n?void 0:n.indicator,(t={},a()(t,"".concat(Q,"-dot"),l),a()(t,"".concat(Q,"-count"),!l),a()(t,"".concat(Q,"-count-sm"),"small"===P),a()(t,"".concat(Q,"-multiple-words"),!l&&uo&&uo.toString().length>1),a()(t,"".concat(Q,"-status-").concat(O),!!O),a()(t,"".concat(Q,"-color-").concat(k),vo),t)),m=Object.assign(Object.assign(Object.assign({},null==q?void 0:q.indicator),null===(e=null==Y?void 0:Y.styles)||void 0===e?void 0:e.indicator),bo);return k&&!vo&&((m=m||{}).background=k),s.createElement(W,{prefixCls:i,show:!co,motionClassName:r,className:u,count:uo,title:go,style:m,key:"scrollNumber",ref:c},po)})),fo))},Z=s.forwardRef(M);Z.Ribbon=z;var q=Z},19769:function(o,t,n){n.d(t,{Z:function(){return B}});var e=n(48928),a=n.n(e),r=n(15304),c=n.n(r),i=n(34796),l=n(12977),s=n(23397),u=n.n(s),d=n(696),m=n(43551),b=n(63054),g=n(42093),f=n(58916),p=n(7526),v=n(13415),h=n(93618),C=n(91518),y=function(o){var t=o.lineWidth,n=o.fontSizeIcon,e=o.calc,a=o.fontSizeSM;return(0,h.TS)(o,{tagFontSize:a,tagLineHeight:(0,f.bf)(e(o.lineHeightSM).mul(a).equal()),tagIconSize:e(n).sub(e(t).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:o.colorFillTertiary})},O=function(o){return{defaultBg:new p.C(o.colorFillQuaternary).onBackground(o.colorBgContainer).toHexString(),defaultColor:o.colorText}},S=(0,C.I$)("Tag",(function(o){return function(o){var t,n,e,r=o.paddingXXS,c=o.lineWidth,i=o.tagPaddingHorizontal,l=o.componentCls,s=o.calc,u=s(i).sub(c).equal(),d=s(r).sub(c).equal();return e={},a()(e,l,Object.assign(Object.assign({},(0,v.Wf)(o)),(n={display:"inline-block",height:"auto",marginInlineEnd:o.marginXS,paddingInline:u,fontSize:o.tagFontSize,lineHeight:o.tagLineHeight,whiteSpace:"nowrap",background:o.defaultBg,border:"".concat((0,f.bf)(o.lineWidth)," ").concat(o.lineType," ").concat(o.colorBorder),borderRadius:o.borderRadiusSM,opacity:1,transition:"all ".concat(o.motionDurationMid),textAlign:"start",position:"relative"},a()(n,"&".concat(l,"-rtl"),{direction:"rtl"}),a()(n,"&, a, a:hover",{color:o.defaultColor}),a()(n,"".concat(l,"-close-icon"),{marginInlineStart:d,fontSize:o.tagIconSize,color:o.colorTextDescription,cursor:"pointer",transition:"all ".concat(o.motionDurationMid),"&:hover":{color:o.colorTextHeading}}),a()(n,"&".concat(l,"-has-color"),a()({borderColor:"transparent"},"&, a, a:hover, ".concat(o.iconCls,"-close, ").concat(o.iconCls,"-close:hover"),{color:o.colorTextLightSolid})),a()(n,"&-checkable",(t={backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer"},a()(t,"&:not(".concat(l,"-checkable-checked):hover"),{color:o.colorPrimary,backgroundColor:o.colorFillSecondary}),a()(t,"&:active, &-checked",{color:o.colorTextLightSolid}),a()(t,"&-checked",{backgroundColor:o.colorPrimary,"&:hover":{backgroundColor:o.colorPrimaryHover}}),a()(t,"&:active",{backgroundColor:o.colorPrimaryActive}),t)),a()(n,"&-hidden",{display:"none"}),a()(n,"> ".concat(o.iconCls," + span, > span + ").concat(o.iconCls),{marginInlineStart:u}),n))),a()(e,"".concat(l,"-borderless"),{borderColor:"transparent",background:o.tagBorderlessBg}),e}(y(o))}),O),k=function(o,t){var n={};for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&t.indexOf(e)<0&&(n[e]=o[e]);if(null!=o&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(e=Object.getOwnPropertySymbols(o);a<e.length;a++)t.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(o,e[a])&&(n[e[a]]=o[e[a]])}return n},x=i.forwardRef((function(o,t){var n=o.prefixCls,e=o.style,r=o.className,l=o.checked,s=o.onChange,d=o.onClick,m=k(o,["prefixCls","style","className","checked","onChange","onClick"]),b=i.useContext(g.E_),f=b.getPrefixCls,p=b.tag,v=f("tag",n),h=S(v),C=c()(h,3),y=C[0],O=C[1],x=C[2],w=u()(v,"".concat(v,"-checkable"),a()({},"".concat(v,"-checkable-checked"),l),null==p?void 0:p.className,r,O,x);return y(i.createElement("span",Object.assign({},m,{ref:t,style:Object.assign(Object.assign({},e),null==p?void 0:p.style),className:w,onClick:function(o){null==s||s(!l),null==d||d(o)}})))})),w=x,N=n(22945),E=(0,C.bk)(["Tag","preset"],(function(o){return function(o){return(0,N.Z)(o,(function(t,n){var e=n.textColor,r=n.lightBorderColor,c=n.lightColor,i=n.darkColor;return a()({},"".concat(o.componentCls).concat(o.componentCls,"-").concat(t),a()({color:e,background:c,borderColor:r,"&-inverse":{color:o.colorTextLightSolid,background:i,borderColor:i}},"&".concat(o.componentCls,"-borderless"),{borderColor:"transparent"}))}))}(y(o))}),O);var j=function(o,t,n){var e,r="string"!=typeof(e=n)?e:e.charAt(0).toUpperCase()+e.slice(1);return a()({},"".concat(o.componentCls).concat(o.componentCls,"-").concat(t),a()({color:o["color".concat(n)],background:o["color".concat(r,"Bg")],borderColor:o["color".concat(r,"Border")]},"&".concat(o.componentCls,"-borderless"),{borderColor:"transparent"}))},T=(0,C.bk)(["Tag","status"],(function(o){var t=y(o);return[j(t,"success","Success"),j(t,"processing","Info"),j(t,"error","Error"),j(t,"warning","Warning")]}),O),I=function(o,t){var n={};for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&t.indexOf(e)<0&&(n[e]=o[e]);if(null!=o&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(e=Object.getOwnPropertySymbols(o);a<e.length;a++)t.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(o,e[a])&&(n[e[a]]=o[e[a]])}return n},z=function(o,t){var n,e=o.prefixCls,r=o.className,s=o.rootClassName,f=o.style,p=o.children,v=o.icon,h=o.color,C=o.onClose,y=o.closeIcon,O=o.closable,k=o.bordered,x=void 0===k||k,w=I(o,["prefixCls","className","rootClassName","style","children","icon","color","onClose","closeIcon","closable","bordered"]),N=i.useContext(g.E_),j=N.getPrefixCls,z=N.direction,P=N.tag,B=i.useState(!0),R=c()(B,2),H=R[0],F=R[1];i.useEffect((function(){"visible"in w&&F(w.visible)}),[w.visible]);var W=(0,d.o2)(h),D=(0,d.yT)(h),M=W||D,Z=Object.assign(Object.assign({backgroundColor:h&&!M?h:void 0},null==P?void 0:P.style),f),q=j("tag",e),A=S(q),X=c()(A,3),L=X[0],_=X[1],$=X[2],V=u()(q,null==P?void 0:P.className,(n={},a()(n,"".concat(q,"-").concat(h),M),a()(n,"".concat(q,"-has-color"),h&&!M),a()(n,"".concat(q,"-hidden"),!H),a()(n,"".concat(q,"-rtl"),"rtl"===z),a()(n,"".concat(q,"-borderless"),!x),n),r,s,_,$),Y=function(o){o.stopPropagation(),null==C||C(o),o.defaultPrevented||F(!1)},Q=(0,m.Z)(O,y,(function(o){return null===o?i.createElement(l.Z,{className:"".concat(q,"-close-icon"),onClick:Y}):i.createElement("span",{className:"".concat(q,"-close-icon"),onClick:Y},o)}),null,!1),U=c()(Q,2)[1],G="function"==typeof w.onClick||p&&"a"===p.type,J=v||null,K=J?i.createElement(i.Fragment,null,J,p&&i.createElement("span",null,p)):p,oo=i.createElement("span",Object.assign({},w,{ref:t,className:V,style:Z}),K,U,W&&i.createElement(E,{key:"preset",prefixCls:q}),D&&i.createElement(T,{key:"status",prefixCls:q}));return L(G?i.createElement(b.Z,{component:"Tag"},oo):oo)},P=i.forwardRef(z);P.CheckableTag=w;var B=P}}]);