"use strict";(self.webpackChunkantd_more=self.webpackChunkantd_more||[]).push([[3951],{38347:function(o,t,n){n.d(t,{Z:function(){return q}});var e=n(886),a=n.n(e),r=n(76439),c=n.n(r),i=n(81538),l=n.n(i),s=n(15237),u=n(10919),d=n.n(u),m=n(41986),b=n(4930),g=n(52892),f=n(64771),p=n(15321),v=n(7290),h=n(81462),C=n(81800),y=n(17866),O=new p.E4("antStatusProcessing",{"0%":{transform:"scale(0.8)",opacity:.5},"100%":{transform:"scale(2.4)",opacity:0}}),S=new p.E4("antZoomBadgeIn",{"0%":{transform:"scale(0) translate(50%, -50%)",opacity:0},"100%":{transform:"scale(1) translate(50%, -50%)"}}),k=new p.E4("antZoomBadgeOut",{"0%":{transform:"scale(1) translate(50%, -50%)"},"100%":{transform:"scale(0) translate(50%, -50%)",opacity:0}}),x=new p.E4("antNoWrapperZoomBadgeIn",{"0%":{transform:"scale(0)",opacity:0},"100%":{transform:"scale(1)"}}),w=new p.E4("antNoWrapperZoomBadgeOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0)",opacity:0}}),N=new p.E4("antBadgeLoadingCircle",{"0%":{transformOrigin:"50%"},"100%":{transform:"translate(50%, -50%) rotate(360deg)",transformOrigin:"50%"}}),j=function(o){var t=o.fontHeight,n=o.lineWidth,e=o.marginXS,a=o.colorBorderBg,r=t,c=n,i=o.colorBgContainer,l=o.colorError,s=o.colorErrorHover;return(0,C.TS)(o,{badgeFontHeight:r,badgeShadowSize:c,badgeTextColor:i,badgeColor:l,badgeColorHover:s,badgeShadowColor:a,badgeProcessingDuration:"1.2s",badgeRibbonOffset:e,badgeRibbonCornerTransform:"scaleY(0.75)",badgeRibbonCornerFilter:"brightness(75%)"})},E=function(o){var t=o.fontSize,n=o.lineHeight,e=o.fontSizeSM,a=o.lineWidth;return{indicatorZIndex:"auto",indicatorHeight:Math.round(t*n)-2*a,indicatorHeightSM:t,dotSize:e/2,textFontSize:e,textFontSizeSM:e,textFontWeight:"normal",statusSize:e/2}},I=(0,y.I$)("Badge",(function(o){return function(o){var t=o.componentCls,n=o.iconCls,e=o.antCls,r=o.badgeShadowSize,c=o.motionDurationSlow,i=o.textFontSize,l=o.textFontSizeSM,s=o.statusSize,u=o.dotSize,d=o.textFontWeight,m=o.indicatorHeight,b=o.indicatorHeightSM,g=o.marginXS,f=o.calc,C="".concat(e,"-scroll-number"),y=(0,h.Z)(o,(function(o,n){var e=n.darkColor;return a()({},"&".concat(t," ").concat(t,"-color-").concat(o),a()(a()({background:e},"&:not(".concat(t,"-count)"),{color:e}),"a:hover &",{background:e}))}));return a()({},t,Object.assign(Object.assign(Object.assign(Object.assign({},(0,v.Wf)(o)),a()(a()(a()(a()(a()(a()(a()({position:"relative",display:"inline-block",width:"fit-content",lineHeight:1},"".concat(t,"-count"),{display:"inline-flex",justifyContent:"center",zIndex:o.indicatorZIndex,minWidth:m,height:m,color:o.badgeTextColor,fontWeight:d,fontSize:i,lineHeight:(0,p.bf)(m),whiteSpace:"nowrap",textAlign:"center",background:o.badgeColor,borderRadius:f(m).div(2).equal(),boxShadow:"0 0 0 ".concat((0,p.bf)(r)," ").concat(o.badgeShadowColor),transition:"background ".concat(o.motionDurationMid),a:{color:o.badgeTextColor},"a:hover":{color:o.badgeTextColor},"a:hover &":{background:o.badgeColorHover}}),"".concat(t,"-count-sm"),{minWidth:b,height:b,fontSize:l,lineHeight:(0,p.bf)(b),borderRadius:f(b).div(2).equal()}),"".concat(t,"-multiple-words"),{padding:"0 ".concat((0,p.bf)(o.paddingXS)),bdi:{unicodeBidi:"plaintext"}}),"".concat(t,"-dot"),{zIndex:o.indicatorZIndex,width:u,minWidth:u,height:u,background:o.badgeColor,borderRadius:"100%",boxShadow:"0 0 0 ".concat((0,p.bf)(r)," ").concat(o.badgeShadowColor)}),"".concat(t,"-dot").concat(C),{transition:"background ".concat(c)}),"".concat(t,"-count, ").concat(t,"-dot, ").concat(C,"-custom-component"),a()({position:"absolute",top:0,insetInlineEnd:0,transform:"translate(50%, -50%)",transformOrigin:"100% 0%"},"&".concat(n,"-spin"),{animationName:N,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear"})),"&".concat(t,"-status"),a()(a()(a()(a()(a()(a()(a()({lineHeight:"inherit",verticalAlign:"baseline"},"".concat(t,"-status-dot"),{position:"relative",top:-1,display:"inline-block",width:s,height:s,verticalAlign:"middle",borderRadius:"50%"}),"".concat(t,"-status-success"),{backgroundColor:o.colorSuccess}),"".concat(t,"-status-processing"),{overflow:"visible",color:o.colorInfo,backgroundColor:o.colorInfo,"&::after":{position:"absolute",top:0,insetInlineStart:0,width:"100%",height:"100%",borderWidth:r,borderStyle:"solid",borderColor:"inherit",borderRadius:"50%",animationName:O,animationDuration:o.badgeProcessingDuration,animationIterationCount:"infinite",animationTimingFunction:"ease-in-out",content:'""'}}),"".concat(t,"-status-default"),{backgroundColor:o.colorTextPlaceholder}),"".concat(t,"-status-error"),{backgroundColor:o.colorError}),"".concat(t,"-status-warning"),{backgroundColor:o.colorWarning}),"".concat(t,"-status-text"),{marginInlineStart:g,color:o.colorText,fontSize:o.fontSize}))),y),a()(a()(a()(a()(a()({},"".concat(t,"-zoom-appear, ").concat(t,"-zoom-enter"),{animationName:S,animationDuration:o.motionDurationSlow,animationTimingFunction:o.motionEaseOutBack,animationFillMode:"both"}),"".concat(t,"-zoom-leave"),{animationName:k,animationDuration:o.motionDurationSlow,animationTimingFunction:o.motionEaseOutBack,animationFillMode:"both"}),"&".concat(t,"-not-a-wrapper"),a()(a()(a()(a()(a()({},"".concat(t,"-zoom-appear, ").concat(t,"-zoom-enter"),{animationName:x,animationDuration:o.motionDurationSlow,animationTimingFunction:o.motionEaseOutBack}),"".concat(t,"-zoom-leave"),{animationName:w,animationDuration:o.motionDurationSlow,animationTimingFunction:o.motionEaseOutBack}),"&:not(".concat(t,"-status)"),{verticalAlign:"middle"}),"".concat(C,"-custom-component, ").concat(t,"-count"),{transform:"none"}),"".concat(C,"-custom-component, ").concat(C),{position:"relative",top:"auto",display:"block",transformOrigin:"50% 50%"})),"".concat(C),a()(a()({overflow:"hidden"},"".concat(C,"-only"),a()({position:"relative",display:"inline-block",height:m,transition:"all ".concat(o.motionDurationSlow," ").concat(o.motionEaseOutBack),WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden"},"> p".concat(C,"-only-unit"),{height:m,margin:0,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden"})),"".concat(C,"-symbol"),{verticalAlign:"top"})),"&-rtl",a()({direction:"rtl"},"".concat(t,"-count, ").concat(t,"-dot, ").concat(C,"-custom-component"),{transform:"translate(-50%, -50%)"}))))}(j(o))}),E),T=(0,y.I$)(["Badge","Ribbon"],(function(o){return function(o){var t=o.antCls,n=o.badgeFontHeight,e=o.marginXS,r=o.badgeRibbonOffset,c=o.calc,i="".concat(t,"-ribbon"),l="".concat(t,"-ribbon-wrapper"),s=(0,h.Z)(o,(function(o,t){var n=t.darkColor;return a()({},"&".concat(i,"-color-").concat(o),{background:n,color:n})}));return a()(a()({},"".concat(l),{position:"relative"}),"".concat(i),Object.assign(Object.assign(Object.assign(Object.assign({},(0,v.Wf)(o)),a()(a()({position:"absolute",top:e,padding:"0 ".concat((0,p.bf)(o.paddingXS)),color:o.colorPrimary,lineHeight:(0,p.bf)(n),whiteSpace:"nowrap",backgroundColor:o.colorPrimary,borderRadius:o.borderRadiusSM},"".concat(i,"-text"),{color:o.colorTextLightSolid}),"".concat(i,"-corner"),{position:"absolute",top:"100%",width:r,height:r,color:"currentcolor",border:"".concat((0,p.bf)(c(r).div(2).equal())," solid"),transform:o.badgeRibbonCornerTransform,transformOrigin:"top",filter:o.badgeRibbonCornerFilter})),s),a()(a()(a()({},"&".concat(i,"-placement-end"),a()({insetInlineEnd:c(r).mul(-1).equal(),borderEndEndRadius:0},"".concat(i,"-corner"),{insetInlineEnd:0,borderInlineEndColor:"transparent",borderBlockEndColor:"transparent"})),"&".concat(i,"-placement-start"),a()({insetInlineStart:c(r).mul(-1).equal(),borderEndStartRadius:0},"".concat(i,"-corner"),{insetInlineStart:0,borderBlockEndColor:"transparent",borderInlineStartColor:"transparent"})),"&-rtl",{direction:"rtl"})))}(j(o))}),E);var z=function(o){var t=o.className,n=o.prefixCls,e=o.style,r=o.color,c=o.children,i=o.text,u=o.placement,m=void 0===u?"end":u,g=o.rootClassName,p=s.useContext(f.E_),v=p.getPrefixCls,h=p.direction,C=v("ribbon",n),y="".concat(C,"-wrapper"),O=T(C,y),S=l()(O,3),k=S[0],x=S[1],w=S[2],N=(0,b.o2)(r,!1),j=d()(C,"".concat(C,"-placement-").concat(m),a()(a()({},"".concat(C,"-rtl"),"rtl"===h),"".concat(C,"-color-").concat(r),N),t),E={},I={};return r&&!N&&(E.background=r,I.color=r),k(s.createElement("div",{className:d()(y,g,x,w)},c,s.createElement("div",{className:d()(j,x),style:Object.assign(Object.assign({},E),e)},s.createElement("span",{className:"".concat(C,"-text")},i),s.createElement("div",{className:"".concat(C,"-corner"),style:I}))))};function P(o){var t,n=o.prefixCls,e=o.value,a=o.current,r=o.offset,c=void 0===r?0:r;return c&&(t={position:"absolute",top:"".concat(c,"00%"),left:0}),s.createElement("span",{style:t,className:d()("".concat(n,"-only-unit"),{current:a})},e)}function B(o,t,n){for(var e=o,a=0;(e+10)%10!==t;)e+=n,a+=n;return a}function R(o){var t,n,e=o.prefixCls,a=o.count,r=o.value,c=Number(r),i=Math.abs(a),u=s.useState(c),d=l()(u,2),m=d[0],b=d[1],g=s.useState(i),f=l()(g,2),p=f[0],v=f[1],h=function(){b(c),v(i)};if(s.useEffect((function(){var o=setTimeout((function(){h()}),1e3);return function(){clearTimeout(o)}}),[c]),m===c||Number.isNaN(c)||Number.isNaN(m))t=[s.createElement(P,Object.assign({},o,{key:c,current:!0}))],n={transition:"none"};else{t=[];for(var C=c+10,y=[],O=c;O<=C;O+=1)y.push(O);var S=y.findIndex((function(o){return o%10===m}));t=y.map((function(t,n){var e=t%10;return s.createElement(P,Object.assign({},o,{key:t,value:e,offset:n-S,current:n===S}))})),n={transform:"translateY(".concat(-B(m,c,p<i?1:-1),"00%)")}}return s.createElement("span",{className:"".concat(e,"-only"),style:n,onTransitionEnd:h},t)}var H=function(o,t){var n={};for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&t.indexOf(e)<0&&(n[e]=o[e]);if(null!=o&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(e=Object.getOwnPropertySymbols(o);a<e.length;a++)t.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(o,e[a])&&(n[e[a]]=o[e[a]])}return n},F=s.forwardRef((function(o,t){var n=o.prefixCls,e=o.count,a=o.className,r=o.motionClassName,c=o.style,i=o.title,l=o.show,u=o.component,m=void 0===u?"sup":u,b=o.children,p=H(o,["prefixCls","count","className","motionClassName","style","title","show","component","children"]),v=(0,s.useContext(f.E_).getPrefixCls)("scroll-number",n),h=Object.assign(Object.assign({},p),{"data-show":l,style:c,className:d()(v,a,r),title:i}),C=e;if(e&&Number(e)%1==0){var y=String(e).split("");C=s.createElement("bdi",null,y.map((function(o,t){return s.createElement(R,{prefixCls:v,count:Number(e),value:o,key:y.length-t})})))}return c&&c.borderColor&&(h.style=Object.assign(Object.assign({},c),{boxShadow:"0 0 0 1px ".concat(c.borderColor," inset")})),b?(0,g.Tm)(b,(function(o){return{className:d()("".concat(v,"-custom-component"),null==o?void 0:o.className,r)}})):s.createElement(m,Object.assign({},h,{ref:t}),C)})),W=F,D=function(o,t){var n={};for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&t.indexOf(e)<0&&(n[e]=o[e]);if(null!=o&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(e=Object.getOwnPropertySymbols(o);a<e.length;a++)t.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(o,e[a])&&(n[e[a]]=o[e[a]])}return n},M=s.forwardRef((function(o,t){var n,e,r,i,u,p=o.prefixCls,v=o.scrollNumberPrefixCls,h=o.children,C=o.status,y=o.text,O=o.color,S=o.count,k=void 0===S?null:S,x=o.overflowCount,w=void 0===x?99:x,N=o.dot,j=void 0!==N&&N,E=o.size,T=void 0===E?"default":E,z=o.title,P=o.offset,B=o.style,R=o.className,H=o.rootClassName,F=o.classNames,M=o.styles,Z=o.showZero,q=void 0!==Z&&Z,A=D(o,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","rootClassName","classNames","styles","showZero"]),X=s.useContext(f.E_),L=X.getPrefixCls,_=X.direction,$=X.badge,V=L("badge",p),Y=I(V),Q=l()(Y,3),U=Q[0],G=Q[1],J=Q[2],K=k>w?"".concat(w,"+"):k,oo="0"===K||0===K,to=(null!=C||null!=O)&&(null===k||oo&&!q),no=j&&!oo,eo=no?"":K,ao=(0,s.useMemo)((function(){return(null==eo||""===eo||oo&&!q)&&!no}),[eo,oo,q,no]),ro=(0,s.useRef)(k);ao||(ro.current=k);var co=ro.current,io=(0,s.useRef)(eo);ao||(io.current=eo);var lo=io.current,so=(0,s.useRef)(no);ao||(so.current=no);var uo=(0,s.useMemo)((function(){if(!P)return Object.assign(Object.assign({},null==$?void 0:$.style),B);var o={marginTop:P[1]};return"rtl"===_?o.left=parseInt(P[0],10):o.right=-parseInt(P[0],10),Object.assign(Object.assign(Object.assign({},o),null==$?void 0:$.style),B)}),[_,P,B,null==$?void 0:$.style]),mo=null!=z?z:"string"==typeof co||"number"==typeof co?co:void 0,bo=ao||!y?null:s.createElement("span",{className:"".concat(V,"-status-text")},y),go=co&&"object"===c()(co)?(0,g.Tm)(co,(function(o){return{style:Object.assign(Object.assign({},uo),o.style)}})):void 0,fo=(0,b.o2)(O,!1),po=d()(null==F?void 0:F.indicator,null===(n=null==$?void 0:$.classNames)||void 0===n?void 0:n.indicator,a()(a()(a()({},"".concat(V,"-status-dot"),to),"".concat(V,"-status-").concat(C),!!C),"".concat(V,"-color-").concat(O),fo)),vo={};O&&!fo&&(vo.color=O,vo.background=O);var ho=d()(V,a()(a()(a()({},"".concat(V,"-status"),to),"".concat(V,"-not-a-wrapper"),!h),"".concat(V,"-rtl"),"rtl"===_),R,H,null==$?void 0:$.className,null===(e=null==$?void 0:$.classNames)||void 0===e?void 0:e.root,null==F?void 0:F.root,G,J);if(!h&&to){var Co=uo.color;return U(s.createElement("span",Object.assign({},A,{className:ho,style:Object.assign(Object.assign(Object.assign({},null==M?void 0:M.root),null===(r=null==$?void 0:$.styles)||void 0===r?void 0:r.root),uo)}),s.createElement("span",{className:po,style:Object.assign(Object.assign(Object.assign({},null==M?void 0:M.indicator),null===(i=null==$?void 0:$.styles)||void 0===i?void 0:i.indicator),vo)}),y&&s.createElement("span",{style:{color:Co},className:"".concat(V,"-status-text")},y)))}return U(s.createElement("span",Object.assign({ref:t},A,{className:ho,style:Object.assign(Object.assign({},null===(u=null==$?void 0:$.styles)||void 0===u?void 0:u.root),null==M?void 0:M.root)}),h,s.createElement(m.ZP,{visible:!ao,motionName:"".concat(V,"-zoom"),motionAppear:!1,motionDeadline:1e3},(function(o){var t,n,e=o.className,r=o.ref,c=L("scroll-number",v),i=so.current,l=d()(null==F?void 0:F.indicator,null===(t=null==$?void 0:$.classNames)||void 0===t?void 0:t.indicator,a()(a()(a()(a()(a()(a()({},"".concat(V,"-dot"),i),"".concat(V,"-count"),!i),"".concat(V,"-count-sm"),"small"===T),"".concat(V,"-multiple-words"),!i&&lo&&lo.toString().length>1),"".concat(V,"-status-").concat(C),!!C),"".concat(V,"-color-").concat(O),fo)),u=Object.assign(Object.assign(Object.assign({},null==M?void 0:M.indicator),null===(n=null==$?void 0:$.styles)||void 0===n?void 0:n.indicator),uo);return O&&!fo&&((u=u||{}).background=O),s.createElement(W,{prefixCls:c,show:!ao,motionClassName:e,className:l,count:lo,title:mo,style:u,key:"scrollNumber",ref:r},go)})),bo))})),Z=M;Z.Ribbon=z;var q=Z},86681:function(o,t,n){n.d(t,{Z:function(){return R}});var e=n(886),a=n.n(e),r=n(81538),c=n.n(r),i=n(15237),l=n(10919),s=n.n(l),u=n(86374),d=n(4930),m=n(23769),b=n(52892),g=n(79739),f=n(64771),p=n(15321),v=n(59575),h=n(7290),C=n(81800),y=n(17866),O=function(o){var t=o.lineWidth,n=o.fontSizeIcon,e=o.calc,a=o.fontSizeSM;return(0,C.TS)(o,{tagFontSize:a,tagLineHeight:(0,p.bf)(e(o.lineHeightSM).mul(a).equal()),tagIconSize:e(n).sub(e(t).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:o.defaultBg})},S=function(o){return{defaultBg:new v.C(o.colorFillQuaternary).onBackground(o.colorBgContainer).toHexString(),defaultColor:o.colorText}},k=(0,y.I$)("Tag",(function(o){return function(o){var t=o.paddingXXS,n=o.lineWidth,e=o.tagPaddingHorizontal,r=o.componentCls,c=o.calc,i=c(e).sub(n).equal(),l=c(t).sub(n).equal();return a()(a()({},r,Object.assign(Object.assign({},(0,h.Wf)(o)),a()(a()(a()(a()(a()(a()(a()({display:"inline-block",height:"auto",marginInlineEnd:o.marginXS,paddingInline:i,fontSize:o.tagFontSize,lineHeight:o.tagLineHeight,whiteSpace:"nowrap",background:o.defaultBg,border:"".concat((0,p.bf)(o.lineWidth)," ").concat(o.lineType," ").concat(o.colorBorder),borderRadius:o.borderRadiusSM,opacity:1,transition:"all ".concat(o.motionDurationMid),textAlign:"start",position:"relative"},"&".concat(r,"-rtl"),{direction:"rtl"}),"&, a, a:hover",{color:o.defaultColor}),"".concat(r,"-close-icon"),{marginInlineStart:l,fontSize:o.tagIconSize,color:o.colorTextDescription,cursor:"pointer",transition:"all ".concat(o.motionDurationMid),"&:hover":{color:o.colorTextHeading}}),"&".concat(r,"-has-color"),a()({borderColor:"transparent"},"&, a, a:hover, ".concat(o.iconCls,"-close, ").concat(o.iconCls,"-close:hover"),{color:o.colorTextLightSolid})),"&-checkable",a()(a()(a()(a()({backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer"},"&:not(".concat(r,"-checkable-checked):hover"),{color:o.colorPrimary,backgroundColor:o.colorFillSecondary}),"&:active, &-checked",{color:o.colorTextLightSolid}),"&-checked",{backgroundColor:o.colorPrimary,"&:hover":{backgroundColor:o.colorPrimaryHover}}),"&:active",{backgroundColor:o.colorPrimaryActive})),"&-hidden",{display:"none"}),"> ".concat(o.iconCls," + span, > span + ").concat(o.iconCls),{marginInlineStart:i}))),"".concat(r,"-borderless"),{borderColor:"transparent",background:o.tagBorderlessBg})}(O(o))}),S),x=function(o,t){var n={};for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&t.indexOf(e)<0&&(n[e]=o[e]);if(null!=o&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(e=Object.getOwnPropertySymbols(o);a<e.length;a++)t.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(o,e[a])&&(n[e[a]]=o[e[a]])}return n},w=i.forwardRef((function(o,t){var n=o.prefixCls,e=o.style,r=o.className,l=o.checked,u=o.onChange,d=o.onClick,m=x(o,["prefixCls","style","className","checked","onChange","onClick"]),b=i.useContext(f.E_),g=b.getPrefixCls,p=b.tag,v=g("tag",n),h=k(v),C=c()(h,3),y=C[0],O=C[1],S=C[2],w=s()(v,"".concat(v,"-checkable"),a()({},"".concat(v,"-checkable-checked"),l),null==p?void 0:p.className,r,O,S);return y(i.createElement("span",Object.assign({},m,{ref:t,style:Object.assign(Object.assign({},e),null==p?void 0:p.style),className:w,onClick:function(o){null==u||u(!l),null==d||d(o)}})))})),N=w,j=n(81462),E=(0,y.bk)(["Tag","preset"],(function(o){return function(o){return(0,j.Z)(o,(function(t,n){var e=n.textColor,r=n.lightBorderColor,c=n.lightColor,i=n.darkColor;return a()({},"".concat(o.componentCls).concat(o.componentCls,"-").concat(t),a()({color:e,background:c,borderColor:r,"&-inverse":{color:o.colorTextLightSolid,background:i,borderColor:i}},"&".concat(o.componentCls,"-borderless"),{borderColor:"transparent"}))}))}(O(o))}),S);var I=function(o,t,n){var e,r="string"!=typeof(e=n)?e:e.charAt(0).toUpperCase()+e.slice(1);return a()({},"".concat(o.componentCls).concat(o.componentCls,"-").concat(t),a()({color:o["color".concat(n)],background:o["color".concat(r,"Bg")],borderColor:o["color".concat(r,"Border")]},"&".concat(o.componentCls,"-borderless"),{borderColor:"transparent"}))},T=(0,y.bk)(["Tag","status"],(function(o){var t=O(o);return[I(t,"success","Success"),I(t,"processing","Info"),I(t,"error","Error"),I(t,"warning","Warning")]}),S),z=function(o,t){var n={};for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&t.indexOf(e)<0&&(n[e]=o[e]);if(null!=o&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(e=Object.getOwnPropertySymbols(o);a<e.length;a++)t.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(o,e[a])&&(n[e[a]]=o[e[a]])}return n},P=i.forwardRef((function(o,t){var n=o.prefixCls,e=o.className,r=o.rootClassName,l=o.style,p=o.children,v=o.icon,h=o.color,C=o.onClose,y=o.bordered,O=void 0===y||y,S=o.visible,x=z(o,["prefixCls","className","rootClassName","style","children","icon","color","onClose","bordered","visible"]),w=i.useContext(f.E_),N=w.getPrefixCls,j=w.direction,I=w.tag,P=i.useState(!0),B=c()(P,2),R=B[0],H=B[1],F=(0,u.Z)(x,["closeIcon","closable"]);i.useEffect((function(){void 0!==S&&H(S)}),[S]);var W=(0,d.o2)(h),D=(0,d.yT)(h),M=W||D,Z=Object.assign(Object.assign({backgroundColor:h&&!M?h:void 0},null==I?void 0:I.style),l),q=N("tag",n),A=k(q),X=c()(A,3),L=X[0],_=X[1],$=X[2],V=s()(q,null==I?void 0:I.className,a()(a()(a()(a()(a()({},"".concat(q,"-").concat(h),M),"".concat(q,"-has-color"),h&&!M),"".concat(q,"-hidden"),!R),"".concat(q,"-rtl"),"rtl"===j),"".concat(q,"-borderless"),!O),e,r,_,$),Y=function(o){o.stopPropagation(),null==C||C(o),o.defaultPrevented||H(!1)},Q=(0,m.Z)((0,m.w)(o),(0,m.w)(I),{closable:!1,closeIconRender:function(o){var t=i.createElement("span",{className:"".concat(q,"-close-icon"),onClick:Y},o);return(0,b.wm)(o,t,(function(o){return{onClick:function(t){var n;null===(n=null==o?void 0:o.onClick)||void 0===n||n.call(o,t),Y(t)},className:s()(null==o?void 0:o.className,"".concat(q,"-close-icon"))}}))}}),U=c()(Q,2)[1],G="function"==typeof x.onClick||p&&"a"===p.type,J=v||null,K=J?i.createElement(i.Fragment,null,J,p&&i.createElement("span",null,p)):p,oo=i.createElement("span",Object.assign({},F,{ref:t,className:V,style:Z}),K,U,W&&i.createElement(E,{key:"preset",prefixCls:q}),D&&i.createElement(T,{key:"status",prefixCls:q}));return L(G?i.createElement(g.Z,{component:"Tag"},oo):oo)})),B=P;B.CheckableTag=N;var R=B}}]);