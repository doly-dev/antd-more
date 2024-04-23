"use strict";(self.webpackChunkantd_more=self.webpackChunkantd_more||[]).push([[9957],{58919:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(51042),o=t(784),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"},l=t(61238),a=function(e,n){return o.createElement(l.Z,(0,r.Z)({},e,{ref:n,icon:i}))};var u=o.forwardRef(a)},51316:function(e,n,t){t.d(n,{Z:function(){return N}});var r=t(886),o=t.n(r),i=t(81538),l=t.n(i),a=t(784),u=t(10919),c=t.n(u),s=t(43246),f=t(30713),d=t(72905),v=t(17142),p=t(21037),m=t(36952),b=t(65333),y=a.createContext(null),h=t(77931),g=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t},C=function(e,n){var t,r=e.prefixCls,i=e.className,u=e.rootClassName,C=e.children,Z=e.indeterminate,E=void 0!==Z&&Z,w=e.style,x=e.onMouseEnter,k=e.onMouseLeave,M=e.skipGroup,P=void 0!==M&&M,N=e.disabled,S=g(e,["prefixCls","className","rootClassName","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),R=a.useContext(v.E_),I=R.getPrefixCls,O=R.direction,K=R.checkbox,A=a.useContext(y),T=a.useContext(b.aM).isFormItemInput,L=a.useContext(p.Z),D=null!==(t=(null==A?void 0:A.disabled)||N)&&void 0!==t?t:L,V=a.useRef(S.value);a.useEffect((function(){null==A||A.registerValue(S.value)}),[]),a.useEffect((function(){if(!P)return S.value!==V.current&&(null==A||A.cancelValue(V.current),null==A||A.registerValue(S.value),V.current=S.value),function(){return null==A?void 0:A.cancelValue(S.value)}}),[S.value]);var _=I("checkbox",r),j=(0,m.Z)(_),z=(0,h.ZP)(_,j),F=l()(z,3),B=F[0],W=F[1],H=F[2],G=Object.assign({},S);A&&!P&&(G.onChange=function(){S.onChange&&S.onChange.apply(S,arguments),A.toggleOption&&A.toggleOption({label:C,value:S.value})},G.name=A.name,G.checked=A.value.includes(S.value));var q=c()("".concat(_,"-wrapper"),o()(o()(o()(o()({},"".concat(_,"-rtl"),"rtl"===O),"".concat(_,"-wrapper-checked"),G.checked),"".concat(_,"-wrapper-disabled"),D),"".concat(_,"-wrapper-in-form-item"),T),null==K?void 0:K.className,i,u,H,j,W),X=c()(o()({},"".concat(_,"-indeterminate"),E),d.A,W),Y=E?"mixed":void 0;return B(a.createElement(f.Z,{component:"Checkbox",disabled:D},a.createElement("label",{className:q,style:Object.assign(Object.assign({},null==K?void 0:K.style),w),onMouseEnter:x,onMouseLeave:k},a.createElement(s.Z,Object.assign({"aria-checked":Y},G,{prefixCls:_,className:X,disabled:D,ref:n})),void 0!==C&&a.createElement("span",null,C))))};var Z=a.forwardRef(C),E=t(27639),w=t(30457),x=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t},k=a.forwardRef((function(e,n){var t=e.defaultValue,r=e.children,i=e.options,u=void 0===i?[]:i,s=e.prefixCls,f=e.className,d=e.rootClassName,p=e.style,b=e.onChange,g=x(e,["defaultValue","children","options","prefixCls","className","rootClassName","style","onChange"]),C=a.useContext(v.E_),k=C.getPrefixCls,M=C.direction,P=a.useState(g.value||t||[]),N=l()(P,2),S=N[0],R=N[1],I=a.useState([]),O=l()(I,2),K=O[0],A=O[1];a.useEffect((function(){"value"in g&&R(g.value||[])}),[g.value]);var T=a.useMemo((function(){return u.map((function(e){return"string"==typeof e||"number"==typeof e?{label:e,value:e}:e}))}),[u]),L=k("checkbox",s),D="".concat(L,"-group"),V=(0,m.Z)(L),_=(0,h.ZP)(L,V),j=l()(_,3),z=j[0],F=j[1],B=j[2],W=(0,w.Z)(g,["value","disabled"]),H=u.length?T.map((function(e){return a.createElement(Z,{prefixCls:L,key:e.value.toString(),disabled:"disabled"in e?e.disabled:g.disabled,value:e.value,checked:S.includes(e.value),onChange:e.onChange,className:"".concat(D,"-item"),style:e.style,title:e.title,id:e.id,required:e.required},e.label)})):r,G={toggleOption:function(e){var n=S.indexOf(e.value),t=(0,E.Z)(S);-1===n?t.push(e.value):t.splice(n,1),"value"in g||R(t),null==b||b(t.filter((function(e){return K.includes(e)})).sort((function(e,n){return T.findIndex((function(n){return n.value===e}))-T.findIndex((function(e){return e.value===n}))})))},value:S,disabled:g.disabled,name:g.name,registerValue:function(e){A((function(n){return[].concat((0,E.Z)(n),[e])}))},cancelValue:function(e){A((function(n){return n.filter((function(n){return n!==e}))}))}},q=c()(D,o()({},"".concat(D,"-rtl"),"rtl"===M),f,d,B,V,F);return z(a.createElement("div",Object.assign({className:q,style:p},W,{ref:n}),a.createElement(y.Provider,{value:G},H)))})),M=k,P=Z;P.Group=M,P.__ANT_CHECKBOX=!0;var N=P},75922:function(e,n,t){t.d(n,{Z:function(){return E}});var r=t(51042),o=t(73129),i=t(56954),l=t(32859),a=t(80316),u=t(10919),c=t.n(u),s=t(77463),f=t(784),d=t(75868),v=t(91538),p=d.Z.ESC,m=d.Z.TAB;var b=(0,f.forwardRef)((function(e,n){var t=e.overlay,r=e.arrow,o=e.prefixCls,i=(0,f.useMemo)((function(){return"function"==typeof t?t():t}),[t]),l=(0,s.sQ)(n,null==i?void 0:i.ref);return f.createElement(f.Fragment,null,r&&f.createElement("div",{className:"".concat(o,"-arrow")}),f.cloneElement(i,{ref:(0,s.Yr)(i)?l:void 0}))})),y={adjustX:1,adjustY:1},h=[0,0],g={topLeft:{points:["bl","tl"],overflow:y,offset:[0,-4],targetOffset:h},top:{points:["bc","tc"],overflow:y,offset:[0,-4],targetOffset:h},topRight:{points:["br","tr"],overflow:y,offset:[0,-4],targetOffset:h},bottomLeft:{points:["tl","bl"],overflow:y,offset:[0,4],targetOffset:h},bottom:{points:["tc","bc"],overflow:y,offset:[0,4],targetOffset:h},bottomRight:{points:["tr","br"],overflow:y,offset:[0,4],targetOffset:h}},C=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus","overlay","children","onVisibleChange"];function Z(e,n){var t,u=e.arrow,d=void 0!==u&&u,y=e.prefixCls,h=void 0===y?"rc-dropdown":y,Z=e.transitionName,E=e.animation,w=e.align,x=e.placement,k=void 0===x?"bottomLeft":x,M=e.placements,P=void 0===M?g:M,N=e.getPopupContainer,S=e.showAction,R=e.hideAction,I=e.overlayClassName,O=e.overlayStyle,K=e.visible,A=e.trigger,T=void 0===A?["hover"]:A,L=e.autoFocus,D=e.overlay,V=e.children,_=e.onVisibleChange,j=(0,l.Z)(e,C),z=f.useState(),F=(0,i.Z)(z,2),B=F[0],W=F[1],H="visible"in e?K:B,G=f.useRef(null),q=f.useRef(null),X=f.useRef(null);f.useImperativeHandle(n,(function(){return G.current}));var Y=function(e){W(e),null==_||_(e)};!function(e){var n=e.visible,t=e.triggerRef,r=e.onVisibleChange,o=e.autoFocus,i=e.overlayRef,l=f.useRef(!1),a=function(){var e,o;n&&(null===(e=t.current)||void 0===e||null===(o=e.focus)||void 0===o||o.call(e),null==r||r(!1))},u=function(){var e;return!(null===(e=i.current)||void 0===e||!e.focus||(i.current.focus(),l.current=!0,0))},c=function(e){switch(e.keyCode){case p:a();break;case m:var n=!1;l.current||(n=u()),n?e.preventDefault():a()}};f.useEffect((function(){return n?(window.addEventListener("keydown",c),o&&(0,v.Z)(u,3),function(){window.removeEventListener("keydown",c),l.current=!1}):function(){l.current=!1}}),[n])}({visible:H,triggerRef:X,onVisibleChange:Y,autoFocus:L,overlayRef:q});var Q,U,J,$=function(){return f.createElement(b,{ref:q,overlay:D,prefixCls:h,arrow:d})},ee=f.cloneElement(V,{className:c()(null===(t=V.props)||void 0===t?void 0:t.className,H&&(Q=e.openClassName,void 0!==Q?Q:"".concat(h,"-open"))),ref:(0,s.Yr)(V)?(0,s.sQ)(X,V.ref):void 0}),ne=R;return ne||-1===T.indexOf("contextMenu")||(ne=["click"]),f.createElement(a.Z,(0,r.Z)({builtinPlacements:P},j,{prefixCls:h,ref:G,popupClassName:c()(I,(0,o.Z)({},"".concat(h,"-show-arrow"),d)),popupStyle:O,action:T,showAction:S,hideAction:ne,popupPlacement:k,popupAlign:w,popupTransitionName:Z,popupAnimation:E,popupVisible:H,stretch:(U=e.minOverlayWidthMatchTrigger,J=e.alignPoint,("minOverlayWidthMatchTrigger"in e?U:!J)?"minWidth":""),popup:"function"==typeof D?$:$(),onPopupVisibleChange:Y,onPopupClick:function(n){var t=e.onOverlayClick;W(!1),t&&t(n)},getPopupContainer:N}),ee)}var E=f.forwardRef(Z)},26752:function(e,n,t){t.d(n,{iz:function(){return Fe},ck:function(){return ye},BW:function(){return ze},sN:function(){return ye},Wd:function(){return Le},ZP:function(){return Qe},Xl:function(){return N}});var r=t(51042),o=t(73129),i=t(28682),l=t(27639),a=t(56954),u=t(32859),c=t(10919),s=t.n(c),f=t(44107),d=t(47262),v=t(64596),p=t(22347),m=t(784),b=t(96196),y=m.createContext(null);function h(e,n){return void 0===e?null:"".concat(e,"-").concat(n)}function g(e){return h(m.useContext(y),e)}var C=t(8499),Z=["children","locked"],E=m.createContext(null);function w(e){var n=e.children,t=e.locked,r=(0,u.Z)(e,Z),o=m.useContext(E),l=(0,C.Z)((function(){return e=o,n=r,t=(0,i.Z)({},e),Object.keys(n).forEach((function(e){var r=n[e];void 0!==r&&(t[e]=r)})),t;var e,n,t}),[o,r],(function(e,n){return!(t||e[0]===n[0]&&(0,v.Z)(e[1],n[1],!0))}));return m.createElement(E.Provider,{value:l},n)}var x=[],k=m.createContext(null);function M(){return m.useContext(k)}var P=m.createContext(x);function N(e){var n=m.useContext(P);return m.useMemo((function(){return void 0!==e?[].concat((0,l.Z)(n),[e]):n}),[n,e])}var S=m.createContext(null),R=m.createContext({}),I=t(39424),O=t(75868),K=t(91538),A=O.Z.LEFT,T=O.Z.RIGHT,L=O.Z.UP,D=O.Z.DOWN,V=O.Z.ENTER,_=O.Z.ESC,j=O.Z.HOME,z=O.Z.END,F=[L,D,A,T];function B(e,n){return(0,I.tS)(e,!0).filter((function(e){return n.has(e)}))}function W(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if(!e)return null;var o=B(e,n),i=o.length,l=o.findIndex((function(e){return t===e}));return r<0?-1===l?l=i-1:l-=1:r>0&&(l+=1),o[l=(l+i)%i]}var H=function(e,n){var t=new Set,r=new Map,o=new Map;return e.forEach((function(e){var i=document.querySelector("[data-menu-id='".concat(h(n,e),"']"));i&&(t.add(i),o.set(i,e),r.set(e,i))})),{elements:t,key2element:r,element2key:o}};function G(e,n,t,r,i,l,a,u,c,s){var f=m.useRef(),d=m.useRef();d.current=n;var v=function(){K.Z.cancel(f.current)};return m.useEffect((function(){return function(){v()}}),[]),function(p){var m=p.which;if([].concat(F,[V,_,j,z]).includes(m)){var b=l(),y=H(b,r),h=y,g=h.elements,C=h.key2element,Z=h.element2key,E=function(e,n){for(var t=e||document.activeElement;t;){if(n.has(t))return t;t=t.parentElement}return null}(C.get(n),g),w=Z.get(E),x=function(e,n,t,r){var i,l="prev",a="next",u="children",c="parent";if("inline"===e&&r===V)return{inlineTrigger:!0};var s=(0,o.Z)((0,o.Z)({},L,l),D,a),f=(0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)({},A,t?a:l),T,t?l:a),D,u),V,u),d=(0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)({},L,l),D,a),V,u),_,c),A,t?u:c),T,t?c:u);switch(null===(i={inline:s,horizontal:f,vertical:d,inlineSub:s,horizontalSub:d,verticalSub:d}["".concat(e).concat(n?"":"Sub")])||void 0===i?void 0:i[r]){case l:return{offset:-1,sibling:!0};case a:return{offset:1,sibling:!0};case c:return{offset:-1,sibling:!1};case u:return{offset:1,sibling:!1};default:return null}}(e,1===a(w,!0).length,t,m);if(!x&&m!==j&&m!==z)return;(F.includes(m)||[j,z].includes(m))&&p.preventDefault();var k=function(e){if(e){var n=e,t=e.querySelector("a");null!=t&&t.getAttribute("href")&&(n=t);var r=Z.get(e);u(r),v(),f.current=(0,K.Z)((function(){d.current===r&&n.focus()}))}};if([j,z].includes(m)||x.sibling||!E){var M,P,N=B(M=E&&"inline"!==e?function(e){for(var n=e;n;){if(n.getAttribute("data-menu-list"))return n;n=n.parentElement}return null}(E):i.current,g);P=m===j?N[0]:m===z?N[N.length-1]:W(M,g,E,x.offset),k(P)}else if(x.inlineTrigger)c(w);else if(x.offset>0)c(w,!0),v(),f.current=(0,K.Z)((function(){y=H(b,r);var e=E.getAttribute("aria-controls"),n=W(document.getElementById(e),y.elements);k(n)}),5);else if(x.offset<0){var S=a(w,!0),R=S[S.length-2],I=C.get(R);c(R,!1),k(I)}}null==s||s(p)}}var q="__RC_UTIL_PATH_SPLIT__",X=function(e){return e.join(q)},Y="rc-menu-more";function Q(){var e=m.useState({}),n=(0,a.Z)(e,2)[1],t=(0,m.useRef)(new Map),r=(0,m.useRef)(new Map),o=m.useState([]),i=(0,a.Z)(o,2),u=i[0],c=i[1],s=(0,m.useRef)(0),f=(0,m.useRef)(!1),d=(0,m.useCallback)((function(e,o){var i=X(o);r.current.set(i,e),t.current.set(e,i),s.current+=1;var l,a=s.current;l=function(){a===s.current&&(f.current||n({}))},Promise.resolve().then(l)}),[]),v=(0,m.useCallback)((function(e,n){var o=X(n);r.current.delete(o),t.current.delete(e)}),[]),p=(0,m.useCallback)((function(e){c(e)}),[]),b=(0,m.useCallback)((function(e,n){var r=t.current.get(e)||"",o=r.split(q);return n&&u.includes(o[0])&&o.unshift(Y),o}),[u]),y=(0,m.useCallback)((function(e,n){return e.some((function(e){return b(e,!0).includes(n)}))}),[b]),h=(0,m.useCallback)((function(e){var n="".concat(t.current.get(e)).concat(q),o=new Set;return(0,l.Z)(r.current.keys()).forEach((function(e){e.startsWith(n)&&o.add(r.current.get(e))})),o}),[]);return m.useEffect((function(){return function(){f.current=!0}}),[]),{registerPath:d,unregisterPath:v,refreshOverflowKeys:p,isSubPathKey:y,getKeyPath:b,getKeys:function(){var e=(0,l.Z)(t.current.keys());return u.length&&e.push(Y),e},getSubPathKeys:h}}function U(e){var n=m.useRef(e);n.current=e;var t=m.useCallback((function(){for(var e,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return null===(e=n.current)||void 0===e?void 0:e.call.apply(e,[n].concat(r))}),[]);return e?t:void 0}var J=Math.random().toFixed(5).toString().slice(2),$=0;var ee=t(99931),ne=t(64999),te=t(43870),re=t(22136),oe=t(30457),ie=t(77463);function le(e,n,t,r){var o=m.useContext(E),i=o.activeKey,l=o.onActive,a=o.onInactive,u={active:i===e};return n||(u.onMouseEnter=function(n){null==t||t({key:e,domEvent:n}),l(e)},u.onMouseLeave=function(n){null==r||r({key:e,domEvent:n}),a(e)}),u}function ae(e){var n=m.useContext(E),t=n.mode,r=n.rtl,o=n.inlineIndent;if("inline"!==t)return null;return r?{paddingRight:e*o}:{paddingLeft:e*o}}function ue(e){var n,t=e.icon,r=e.props,o=e.children;return null===t||!1===t?null:("function"==typeof t?n=m.createElement(t,(0,i.Z)({},r)):"boolean"!=typeof t&&(n=t),n||o||null)}var ce=["item"];function se(e){var n=e.item,t=(0,u.Z)(e,ce);return Object.defineProperty(t,"item",{get:function(){return(0,p.ZP)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),n}}),t}var fe=["title","attribute","elementRef"],de=["style","className","eventKey","warnKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"],ve=["active"],pe=function(e){(0,te.Z)(t,e);var n=(0,re.Z)(t);function t(){return(0,ee.Z)(this,t),n.apply(this,arguments)}return(0,ne.Z)(t,[{key:"render",value:function(){var e=this.props,n=e.title,t=e.attribute,o=e.elementRef,i=(0,u.Z)(e,fe),l=(0,oe.Z)(i,["eventKey","popupClassName","popupOffset","onTitleClick"]);return(0,p.ZP)(!t,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),m.createElement(f.Z.Item,(0,r.Z)({},t,{title:"string"==typeof n?n:void 0},l,{ref:o}))}}]),t}(m.Component),me=m.forwardRef((function(e,n){var t=e.style,a=e.className,c=e.eventKey,f=(e.warnKey,e.disabled),d=e.itemIcon,v=e.children,p=e.role,b=e.onMouseEnter,y=e.onMouseLeave,h=e.onClick,C=e.onKeyDown,Z=e.onFocus,w=(0,u.Z)(e,de),x=g(c),k=m.useContext(E),M=k.prefixCls,P=k.onItemClick,S=k.disabled,I=k.overflowDisabled,K=k.itemIcon,A=k.selectedKeys,T=k.onActive,L=m.useContext(R)._internalRenderMenuItem,D="".concat(M,"-item"),V=m.useRef(),_=m.useRef(),j=S||f,z=(0,ie.x1)(n,_),F=N(c);var B=function(e){return{key:c,keyPath:(0,l.Z)(F).reverse(),item:V.current,domEvent:e}},W=d||K,H=le(c,j,b,y),G=H.active,q=(0,u.Z)(H,ve),X=A.includes(c),Y=ae(F.length),Q={};"option"===e.role&&(Q["aria-selected"]=X);var U=m.createElement(pe,(0,r.Z)({ref:V,elementRef:z,role:null===p?"none":p||"menuitem",tabIndex:f?null:-1,"data-menu-id":I&&x?null:x},w,q,Q,{component:"li","aria-disabled":f,style:(0,i.Z)((0,i.Z)({},Y),t),className:s()(D,(0,o.Z)((0,o.Z)((0,o.Z)({},"".concat(D,"-active"),G),"".concat(D,"-selected"),X),"".concat(D,"-disabled"),j),a),onClick:function(e){if(!j){var n=B(e);null==h||h(se(n)),P(n)}},onKeyDown:function(e){if(null==C||C(e),e.which===O.Z.ENTER){var n=B(e);null==h||h(se(n)),P(n)}},onFocus:function(e){T(c),null==Z||Z(e)}}),v,m.createElement(ue,{props:(0,i.Z)((0,i.Z)({},e),{},{isSelected:X}),icon:W}));return L&&(U=L(U,e,{selected:X})),U}));function be(e,n){var t=e.eventKey,o=M(),i=N(t);return m.useEffect((function(){if(o)return o.registerPath(t,i),function(){o.unregisterPath(t,i)}}),[i]),o?null:m.createElement(me,(0,r.Z)({},e,{ref:n}))}var ye=m.forwardRef(be),he=["className","children"],ge=function(e,n){var t=e.className,o=e.children,i=(0,u.Z)(e,he),l=m.useContext(E),a=l.prefixCls,c=l.mode,f=l.rtl;return m.createElement("ul",(0,r.Z)({className:s()(a,f&&"".concat(a,"-rtl"),"".concat(a,"-sub"),"".concat(a,"-").concat("inline"===c?"inline":"vertical"),t),role:"menu"},i,{"data-menu-list":!0,ref:n}),o)},Ce=m.forwardRef(ge);Ce.displayName="SubMenuList";var Ze=Ce,Ee=t(65998);function we(e,n){return(0,Ee.Z)(e).map((function(e,t){if(m.isValidElement(e)){var r,o,i=e.key,a=null!==(r=null===(o=e.props)||void 0===o?void 0:o.eventKey)&&void 0!==r?r:i;null==a&&(a="tmp_key-".concat([].concat((0,l.Z)(n),[t]).join("-")));var u={key:a,eventKey:a};return m.cloneElement(e,u)}return e}))}var xe=t(80316),ke={adjustX:1,adjustY:1},Me={topLeft:{points:["bl","tl"],overflow:ke},topRight:{points:["br","tr"],overflow:ke},bottomLeft:{points:["tl","bl"],overflow:ke},bottomRight:{points:["tr","br"],overflow:ke},leftTop:{points:["tr","tl"],overflow:ke},leftBottom:{points:["br","bl"],overflow:ke},rightTop:{points:["tl","tr"],overflow:ke},rightBottom:{points:["bl","br"],overflow:ke}},Pe={topLeft:{points:["bl","tl"],overflow:ke},topRight:{points:["br","tr"],overflow:ke},bottomLeft:{points:["tl","bl"],overflow:ke},bottomRight:{points:["tr","br"],overflow:ke},rightTop:{points:["tr","tl"],overflow:ke},rightBottom:{points:["br","bl"],overflow:ke},leftTop:{points:["tl","tr"],overflow:ke},leftBottom:{points:["bl","br"],overflow:ke}};function Ne(e,n,t){return n||(t?t[e]||t.other:void 0)}var Se={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Re(e){var n=e.prefixCls,t=e.visible,r=e.children,l=e.popup,u=e.popupStyle,c=e.popupClassName,f=e.popupOffset,d=e.disabled,v=e.mode,p=e.onVisibleChange,b=m.useContext(E),y=b.getPopupContainer,h=b.rtl,g=b.subMenuOpenDelay,C=b.subMenuCloseDelay,Z=b.builtinPlacements,w=b.triggerSubMenuAction,x=b.forceSubMenuRender,k=b.rootClassName,M=b.motion,P=b.defaultMotions,N=m.useState(!1),S=(0,a.Z)(N,2),R=S[0],I=S[1],O=h?(0,i.Z)((0,i.Z)({},Pe),Z):(0,i.Z)((0,i.Z)({},Me),Z),A=Se[v],T=Ne(v,M,P),L=m.useRef(T);"inline"!==v&&(L.current=T);var D=(0,i.Z)((0,i.Z)({},L.current),{},{leavedClassName:"".concat(n,"-hidden"),removeOnLeave:!1,motionAppear:!0}),V=m.useRef();return m.useEffect((function(){return V.current=(0,K.Z)((function(){I(t)})),function(){K.Z.cancel(V.current)}}),[t]),m.createElement(xe.Z,{prefixCls:n,popupClassName:s()("".concat(n,"-popup"),(0,o.Z)({},"".concat(n,"-rtl"),h),c,k),stretch:"horizontal"===v?"minWidth":null,getPopupContainer:y,builtinPlacements:O,popupPlacement:A,popupVisible:R,popup:l,popupStyle:u,popupAlign:f&&{offset:f},action:d?[]:[w],mouseEnterDelay:g,mouseLeaveDelay:C,onPopupVisibleChange:p,forceRender:x,popupMotion:D,fresh:!0},r)}var Ie=t(24443);function Oe(e){var n=e.id,t=e.open,o=e.keyPath,l=e.children,u="inline",c=m.useContext(E),s=c.prefixCls,f=c.forceSubMenuRender,d=c.motion,v=c.defaultMotions,p=c.mode,b=m.useRef(!1);b.current=p===u;var y=m.useState(!b.current),h=(0,a.Z)(y,2),g=h[0],C=h[1],Z=!!b.current&&t;m.useEffect((function(){b.current&&C(!1)}),[p]);var x=(0,i.Z)({},Ne(u,d,v));o.length>1&&(x.motionAppear=!1);var k=x.onVisibleChanged;return x.onVisibleChanged=function(e){return b.current||e||C(!0),null==k?void 0:k(e)},g?null:m.createElement(w,{mode:u,locked:!b.current},m.createElement(Ie.ZP,(0,r.Z)({visible:Z},x,{forceRender:f,removeOnLeave:!1,leavedClassName:"".concat(s,"-hidden")}),(function(e){var t=e.className,r=e.style;return m.createElement(Ze,{id:n,className:t,style:r},l)})))}var Ke=["style","className","title","eventKey","warnKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","popupStyle","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"],Ae=["active"],Te=function(e){var n=e.style,t=e.className,l=e.title,c=e.eventKey,d=(e.warnKey,e.disabled),v=e.internalPopupClose,p=e.children,b=e.itemIcon,y=e.expandIcon,h=e.popupClassName,C=e.popupOffset,Z=e.popupStyle,x=e.onClick,k=e.onMouseEnter,M=e.onMouseLeave,P=e.onTitleClick,I=e.onTitleMouseEnter,O=e.onTitleMouseLeave,K=(0,u.Z)(e,Ke),A=g(c),T=m.useContext(E),L=T.prefixCls,D=T.mode,V=T.openKeys,_=T.disabled,j=T.overflowDisabled,z=T.activeKey,F=T.selectedKeys,B=T.itemIcon,W=T.expandIcon,H=T.onItemClick,G=T.onOpenChange,q=T.onActive,X=m.useContext(R)._internalRenderSubMenuItem,Y=m.useContext(S).isSubPathKey,Q=N(),J="".concat(L,"-submenu"),$=_||d,ee=m.useRef(),ne=m.useRef();var te=null!=b?b:B,re=null!=y?y:W,oe=V.includes(c),ie=!j&&oe,ce=Y(F,c),fe=le(c,$,I,O),de=fe.active,ve=(0,u.Z)(fe,Ae),pe=m.useState(!1),me=(0,a.Z)(pe,2),be=me[0],ye=me[1],he=function(e){$||ye(e)},ge=m.useMemo((function(){return de||"inline"!==D&&(be||Y([z],c))}),[D,de,z,be,c,Y]),Ce=ae(Q.length),Ee=U((function(e){null==x||x(se(e)),H(e)})),we=A&&"".concat(A,"-popup"),xe=m.createElement("div",(0,r.Z)({role:"menuitem",style:Ce,className:"".concat(J,"-title"),tabIndex:$?null:-1,ref:ee,title:"string"==typeof l?l:null,"data-menu-id":j&&A?null:A,"aria-expanded":ie,"aria-haspopup":!0,"aria-controls":we,"aria-disabled":$,onClick:function(e){$||(null==P||P({key:c,domEvent:e}),"inline"===D&&G(c,!oe))},onFocus:function(){q(c)}},ve),l,m.createElement(ue,{icon:"horizontal"!==D?re:void 0,props:(0,i.Z)((0,i.Z)({},e),{},{isOpen:ie,isSubMenu:!0})},m.createElement("i",{className:"".concat(J,"-arrow")}))),ke=m.useRef(D);if("inline"!==D&&Q.length>1?ke.current="vertical":ke.current=D,!j){var Me=ke.current;xe=m.createElement(Re,{mode:Me,prefixCls:J,visible:!v&&ie&&"inline"!==D,popupClassName:h,popupOffset:C,popupStyle:Z,popup:m.createElement(w,{mode:"horizontal"===Me?"vertical":Me},m.createElement(Ze,{id:we,ref:ne},p)),disabled:$,onVisibleChange:function(e){"inline"!==D&&G(c,e)}},xe)}var Pe=m.createElement(f.Z.Item,(0,r.Z)({role:"none"},K,{component:"li",style:n,className:s()(J,"".concat(J,"-").concat(D),t,(0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)({},"".concat(J,"-open"),ie),"".concat(J,"-active"),ge),"".concat(J,"-selected"),ce),"".concat(J,"-disabled"),$)),onMouseEnter:function(e){he(!0),null==k||k({key:c,domEvent:e})},onMouseLeave:function(e){he(!1),null==M||M({key:c,domEvent:e})}}),xe,!j&&m.createElement(Oe,{id:we,open:ie,keyPath:Q},p));return X&&(Pe=X(Pe,e,{selected:ce,active:ge,open:ie,disabled:$})),m.createElement(w,{onItemClick:Ee,mode:"horizontal"===D?"vertical":D,itemIcon:te,expandIcon:re},Pe)};function Le(e){var n,t=e.eventKey,r=e.children,o=N(t),i=we(r,o),l=M();return m.useEffect((function(){if(l)return l.registerPath(t,o),function(){l.unregisterPath(t,o)}}),[o]),n=l?i:m.createElement(Te,e,i),m.createElement(P.Provider,{value:o},n)}var De=t(93290),Ve=["className","title","eventKey","children"],_e=["children"],je=function(e){var n=e.className,t=e.title,o=(e.eventKey,e.children),i=(0,u.Z)(e,Ve),l=m.useContext(E).prefixCls,a="".concat(l,"-item-group");return m.createElement("li",(0,r.Z)({role:"presentation"},i,{onClick:function(e){return e.stopPropagation()},className:s()(a,n)}),m.createElement("div",{role:"presentation",className:"".concat(a,"-title"),title:"string"==typeof t?t:void 0},t),m.createElement("ul",{role:"group",className:"".concat(a,"-list")},o))};function ze(e){var n=e.children,t=(0,u.Z)(e,_e),r=we(n,N(t.eventKey));return M()?r:m.createElement(je,(0,oe.Z)(t,["warnKey"]),r)}function Fe(e){var n=e.className,t=e.style,r=m.useContext(E).prefixCls;return M()?null:m.createElement("li",{role:"separator",className:s()("".concat(r,"-item-divider"),n),style:t})}var Be=["label","children","key","type"];function We(e){return(e||[]).map((function(e,n){if(e&&"object"===(0,De.Z)(e)){var t=e,o=t.label,i=t.children,l=t.key,a=t.type,c=(0,u.Z)(t,Be),s=null!=l?l:"tmp-".concat(n);return i||"group"===a?"group"===a?m.createElement(ze,(0,r.Z)({key:s},c,{title:o}),We(i)):m.createElement(Le,(0,r.Z)({key:s},c,{title:o}),We(i)):"divider"===a?m.createElement(Fe,(0,r.Z)({key:s},c)):m.createElement(ye,(0,r.Z)({key:s},c),o)}return null})).filter((function(e){return e}))}function He(e,n,t){var r=e;return n&&(r=We(n)),we(r,t)}var Ge=["prefixCls","rootClassName","style","className","tabIndex","items","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","overflowedIndicatorPopupClassName","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName","_internalRenderMenuItem","_internalRenderSubMenuItem"],qe=[],Xe=m.forwardRef((function(e,n){var t,c=e,p=c.prefixCls,h=void 0===p?"rc-menu":p,g=c.rootClassName,C=c.style,Z=c.className,E=c.tabIndex,x=void 0===E?0:E,M=c.items,P=c.children,N=c.direction,I=c.id,O=c.mode,K=void 0===O?"vertical":O,A=c.inlineCollapsed,T=c.disabled,L=c.disabledOverflow,D=c.subMenuOpenDelay,V=void 0===D?.1:D,_=c.subMenuCloseDelay,j=void 0===_?.1:_,z=c.forceSubMenuRender,F=c.defaultOpenKeys,W=c.openKeys,q=c.activeKey,X=c.defaultActiveFirst,ee=c.selectable,ne=void 0===ee||ee,te=c.multiple,re=void 0!==te&&te,oe=c.defaultSelectedKeys,ie=c.selectedKeys,le=c.onSelect,ae=c.onDeselect,ue=c.inlineIndent,ce=void 0===ue?24:ue,fe=c.motion,de=c.defaultMotions,ve=c.triggerSubMenuAction,pe=void 0===ve?"hover":ve,me=c.builtinPlacements,be=c.itemIcon,he=c.expandIcon,ge=c.overflowedIndicator,Ce=void 0===ge?"...":ge,Ze=c.overflowedIndicatorPopupClassName,Ee=c.getPopupContainer,we=c.onClick,xe=c.onOpenChange,ke=c.onKeyDown,Me=(c.openAnimation,c.openTransitionName,c._internalRenderMenuItem),Pe=c._internalRenderSubMenuItem,Ne=(0,u.Z)(c,Ge),Se=m.useMemo((function(){return He(P,M,qe)}),[P,M]),Re=m.useState(!1),Ie=(0,a.Z)(Re,2),Oe=Ie[0],Ke=Ie[1],Ae=m.useRef(),Te=function(e){var n=(0,d.Z)(e,{value:e}),t=(0,a.Z)(n,2),r=t[0],o=t[1];return m.useEffect((function(){$+=1;var e="".concat(J,"-").concat($);o("rc-menu-uuid-".concat(e))}),[]),r}(I),De="rtl"===N;var Ve=(0,d.Z)(F,{value:W,postState:function(e){return e||qe}}),_e=(0,a.Z)(Ve,2),je=_e[0],ze=_e[1],Fe=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];function t(){ze(e),null==xe||xe(e)}n?(0,b.flushSync)(t):t()},Be=m.useState(je),We=(0,a.Z)(Be,2),Xe=We[0],Ye=We[1],Qe=m.useRef(!1),Ue=m.useMemo((function(){return"inline"!==K&&"vertical"!==K||!A?[K,!1]:["vertical",A]}),[K,A]),Je=(0,a.Z)(Ue,2),$e=Je[0],en=Je[1],nn="inline"===$e,tn=m.useState($e),rn=(0,a.Z)(tn,2),on=rn[0],ln=rn[1],an=m.useState(en),un=(0,a.Z)(an,2),cn=un[0],sn=un[1];m.useEffect((function(){ln($e),sn(en),Qe.current&&(nn?ze(Xe):Fe(qe))}),[$e,en]);var fn=m.useState(0),dn=(0,a.Z)(fn,2),vn=dn[0],pn=dn[1],mn=vn>=Se.length-1||"horizontal"!==on||L;m.useEffect((function(){nn&&Ye(je)}),[je]),m.useEffect((function(){return Qe.current=!0,function(){Qe.current=!1}}),[]);var bn=Q(),yn=bn.registerPath,hn=bn.unregisterPath,gn=bn.refreshOverflowKeys,Cn=bn.isSubPathKey,Zn=bn.getKeyPath,En=bn.getKeys,wn=bn.getSubPathKeys,xn=m.useMemo((function(){return{registerPath:yn,unregisterPath:hn}}),[yn,hn]),kn=m.useMemo((function(){return{isSubPathKey:Cn}}),[Cn]);m.useEffect((function(){gn(mn?qe:Se.slice(vn+1).map((function(e){return e.key})))}),[vn,mn]);var Mn=(0,d.Z)(q||X&&(null===(t=Se[0])||void 0===t?void 0:t.key),{value:q}),Pn=(0,a.Z)(Mn,2),Nn=Pn[0],Sn=Pn[1],Rn=U((function(e){Sn(e)})),In=U((function(){Sn(void 0)}));(0,m.useImperativeHandle)(n,(function(){return{list:Ae.current,focus:function(e){var n,t,r=En(),o=H(r,Te),i=o.elements,l=o.key2element,a=o.element2key,u=B(Ae.current,i),c=null!=Nn?Nn:u[0]?a.get(u[0]):null===(n=Se.find((function(e){return!e.props.disabled})))||void 0===n?void 0:n.key,s=l.get(c);c&&s&&(null==s||null===(t=s.focus)||void 0===t||t.call(s,e))}}}));var On=(0,d.Z)(oe||[],{value:ie,postState:function(e){return Array.isArray(e)?e:null==e?qe:[e]}}),Kn=(0,a.Z)(On,2),An=Kn[0],Tn=Kn[1],Ln=U((function(e){null==we||we(se(e)),function(e){if(ne){var n,t=e.key,r=An.includes(t);n=re?r?An.filter((function(e){return e!==t})):[].concat((0,l.Z)(An),[t]):[t],Tn(n);var o=(0,i.Z)((0,i.Z)({},e),{},{selectedKeys:n});r?null==ae||ae(o):null==le||le(o)}!re&&je.length&&"inline"!==on&&Fe(qe)}(e)})),Dn=U((function(e,n){var t=je.filter((function(n){return n!==e}));if(n)t.push(e);else if("inline"!==on){var r=wn(e);t=t.filter((function(e){return!r.has(e)}))}(0,v.Z)(je,t,!0)||Fe(t,!0)})),Vn=G(on,Nn,De,Te,Ae,En,Zn,Sn,(function(e,n){var t=null!=n?n:!je.includes(e);Dn(e,t)}),ke);m.useEffect((function(){Ke(!0)}),[]);var _n=m.useMemo((function(){return{_internalRenderMenuItem:Me,_internalRenderSubMenuItem:Pe}}),[Me,Pe]),jn="horizontal"!==on||L?Se:Se.map((function(e,n){return m.createElement(w,{key:e.key,overflowDisabled:n>vn},e)})),zn=m.createElement(f.Z,(0,r.Z)({id:I,ref:Ae,prefixCls:"".concat(h,"-overflow"),component:"ul",itemComponent:ye,className:s()(h,"".concat(h,"-root"),"".concat(h,"-").concat(on),Z,(0,o.Z)((0,o.Z)({},"".concat(h,"-inline-collapsed"),cn),"".concat(h,"-rtl"),De),g),dir:N,style:C,role:"menu",tabIndex:x,data:jn,renderRawItem:function(e){return e},renderRawRest:function(e){var n=e.length,t=n?Se.slice(-n):null;return m.createElement(Le,{eventKey:Y,title:Ce,disabled:mn,internalPopupClose:0===n,popupClassName:Ze},t)},maxCount:"horizontal"!==on||L?f.Z.INVALIDATE:f.Z.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(e){pn(e)},onKeyDown:Vn},Ne));return m.createElement(R.Provider,{value:_n},m.createElement(y.Provider,{value:Te},m.createElement(w,{prefixCls:h,rootClassName:g,mode:on,openKeys:je,rtl:De,disabled:T,motion:Oe?fe:null,defaultMotions:Oe?de:null,activeKey:Nn,onActive:Rn,onInactive:In,selectedKeys:An,inlineIndent:ce,subMenuOpenDelay:V,subMenuCloseDelay:j,forceSubMenuRender:z,builtinPlacements:me,triggerSubMenuAction:pe,getPopupContainer:Ee,itemIcon:be,expandIcon:he,onItemClick:Ln,onOpenChange:Dn},m.createElement(S.Provider,{value:kn},zn),m.createElement("div",{style:{display:"none"},"aria-hidden":!0},m.createElement(k.Provider,{value:xn},Se)))))})),Ye=Xe;Ye.Item=ye,Ye.SubMenu=Le,Ye.ItemGroup=ze,Ye.Divider=Fe;var Qe=Ye}}]);