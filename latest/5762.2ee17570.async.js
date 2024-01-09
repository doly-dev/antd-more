"use strict";(self.webpackChunkantd_more=self.webpackChunkantd_more||[]).push([[5762],{81879:function(e,t,n){n.d(t,{Z:function(){return b}});var o=n(95048),r=n(98859),a=n(38557),d=n(76802),i=n(52363),s=n(53239),l=n(56180),c=n(42741),p=n(4763),u=n(98088),f=n.n(u),v=n(82398),y=n(63160),h=n(86572),g=function(e){for(var t=e.prefixCls,n=e.level,o=e.isStart,a=e.isEnd,d="".concat(t,"-indent-unit"),i=[],s=0;s<n;s+=1){var l;i.push(y.createElement("span",{key:s,className:f()(d,(l={},(0,r.Z)(l,"".concat(d,"-start"),o[s]),(0,r.Z)(l,"".concat(d,"-end"),a[s]),l))}))}return y.createElement("span",{"aria-hidden":"true",className:"".concat(t,"-indent")},i)},K=y.memo(g),k=n(26917),N=n(5623),E=["eventKey","className","style","dragOver","dragOverGapTop","dragOverGapBottom","isLeaf","isStart","isEnd","expanded","selected","checked","halfChecked","loading","domRef","active","data","onMouseMove","selectable"],x="open",m="close",C=function(e){(0,c.Z)(n,e);var t=(0,p.Z)(n);function n(){var e;(0,i.Z)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={dragNodeHighlight:!1},e.selectHandle=void 0,e.cacheIndent=void 0,e.onSelectorClick=function(t){(0,e.props.context.onNodeClick)(t,(0,N.F)(e.props)),e.isSelectable()?e.onSelect(t):e.onCheck(t)},e.onSelectorDoubleClick=function(t){(0,e.props.context.onNodeDoubleClick)(t,(0,N.F)(e.props))},e.onSelect=function(t){e.isDisabled()||(0,e.props.context.onNodeSelect)(t,(0,N.F)(e.props))},e.onCheck=function(t){if(!e.isDisabled()){var n=e.props,o=n.disableCheckbox,r=n.checked,a=e.props.context.onNodeCheck;if(e.isCheckable()&&!o){var d=!r;a(t,(0,N.F)(e.props),d)}}},e.onMouseEnter=function(t){(0,e.props.context.onNodeMouseEnter)(t,(0,N.F)(e.props))},e.onMouseLeave=function(t){(0,e.props.context.onNodeMouseLeave)(t,(0,N.F)(e.props))},e.onContextMenu=function(t){(0,e.props.context.onNodeContextMenu)(t,(0,N.F)(e.props))},e.onDragStart=function(t){var n=e.props.context.onNodeDragStart;t.stopPropagation(),e.setState({dragNodeHighlight:!0}),n(t,(0,l.Z)(e));try{t.dataTransfer.setData("text/plain","")}catch(e){}},e.onDragEnter=function(t){var n=e.props.context.onNodeDragEnter;t.preventDefault(),t.stopPropagation(),n(t,(0,l.Z)(e))},e.onDragOver=function(t){var n=e.props.context.onNodeDragOver;t.preventDefault(),t.stopPropagation(),n(t,(0,l.Z)(e))},e.onDragLeave=function(t){var n=e.props.context.onNodeDragLeave;t.stopPropagation(),n(t,(0,l.Z)(e))},e.onDragEnd=function(t){var n=e.props.context.onNodeDragEnd;t.stopPropagation(),e.setState({dragNodeHighlight:!1}),n(t,(0,l.Z)(e))},e.onDrop=function(t){var n=e.props.context.onNodeDrop;t.preventDefault(),t.stopPropagation(),e.setState({dragNodeHighlight:!1}),n(t,(0,l.Z)(e))},e.onExpand=function(t){var n=e.props,o=n.loading,r=n.context.onNodeExpand;o||r(t,(0,N.F)(e.props))},e.setSelectHandle=function(t){e.selectHandle=t},e.getNodeState=function(){var t=e.props.expanded;return e.isLeaf()?null:t?x:m},e.hasChildren=function(){var t=e.props.eventKey,n=e.props.context.keyEntities;return!!(((0,k.Z)(n,t)||{}).children||[]).length},e.isLeaf=function(){var t=e.props,n=t.isLeaf,o=t.loaded,r=e.props.context.loadData,a=e.hasChildren();return!1!==n&&(n||!r&&!a||r&&o&&!a)},e.isDisabled=function(){var t=e.props.disabled;return!(!e.props.context.disabled&&!t)},e.isCheckable=function(){var t=e.props.checkable,n=e.props.context.checkable;return!(!n||!1===t)&&n},e.syncLoadData=function(t){var n=t.expanded,o=t.loading,r=t.loaded,a=e.props.context,d=a.loadData,i=a.onNodeLoad;o||d&&n&&!e.isLeaf()&&(e.hasChildren()||r||i((0,N.F)(e.props)))},e.isDraggable=function(){var t=e.props,n=t.data,o=t.context.draggable;return!(!o||o.nodeDraggable&&!o.nodeDraggable(n))},e.renderDragHandler=function(){var t=e.props.context,n=t.draggable,o=t.prefixCls;return(null==n?void 0:n.icon)?y.createElement("span",{className:"".concat(o,"-draggable-icon")},n.icon):null},e.renderSwitcherIconDom=function(t){var n=e.props.switcherIcon,o=e.props.context.switcherIcon,r=n||o;return"function"==typeof r?r((0,d.Z)((0,d.Z)({},e.props),{},{isLeaf:t})):r},e.renderSwitcher=function(){var t=e.props.expanded,n=e.props.context.prefixCls;if(e.isLeaf()){var o=e.renderSwitcherIconDom(!0);return!1!==o?y.createElement("span",{className:f()("".concat(n,"-switcher"),"".concat(n,"-switcher-noop"))},o):null}var r=f()("".concat(n,"-switcher"),"".concat(n,"-switcher_").concat(t?x:m)),a=e.renderSwitcherIconDom(!1);return!1!==a?y.createElement("span",{onClick:e.onExpand,className:r},a):null},e.renderCheckbox=function(){var t=e.props,n=t.checked,o=t.halfChecked,r=t.disableCheckbox,a=e.props.context.prefixCls,d=e.isDisabled(),i=e.isCheckable();if(!i)return null;var s="boolean"!=typeof i?i:null;return y.createElement("span",{className:f()("".concat(a,"-checkbox"),n&&"".concat(a,"-checkbox-checked"),!n&&o&&"".concat(a,"-checkbox-indeterminate"),(d||r)&&"".concat(a,"-checkbox-disabled")),onClick:e.onCheck},s)},e.renderIcon=function(){var t=e.props.loading,n=e.props.context.prefixCls;return y.createElement("span",{className:f()("".concat(n,"-iconEle"),"".concat(n,"-icon__").concat(e.getNodeState()||"docu"),t&&"".concat(n,"-icon_loading"))})},e.renderSelector=function(){var t,n,o=e.state.dragNodeHighlight,r=e.props,a=r.title,d=void 0===a?"---":a,i=r.selected,s=r.icon,l=r.loading,c=r.data,p=e.props.context,u=p.prefixCls,v=p.showIcon,h=p.icon,g=p.loadData,K=p.titleRender,k=e.isDisabled(),N="".concat(u,"-node-content-wrapper");if(v){var E=s||h;t=E?y.createElement("span",{className:f()("".concat(u,"-iconEle"),"".concat(u,"-icon__customize"))},"function"==typeof E?E(e.props):E):e.renderIcon()}else g&&l&&(t=e.renderIcon());n="function"==typeof d?d(c):K?K(c):d;var x=y.createElement("span",{className:"".concat(u,"-title")},n);return y.createElement("span",{ref:e.setSelectHandle,title:"string"==typeof d?d:"",className:f()("".concat(N),"".concat(N,"-").concat(e.getNodeState()||"normal"),!k&&(i||o)&&"".concat(u,"-node-selected")),onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onContextMenu:e.onContextMenu,onClick:e.onSelectorClick,onDoubleClick:e.onSelectorDoubleClick},t,x,e.renderDropIndicator())},e.renderDropIndicator=function(){var t=e.props,n=t.disabled,o=t.eventKey,r=e.props.context,a=r.draggable,d=r.dropLevelOffset,i=r.dropPosition,s=r.prefixCls,l=r.indent,c=r.dropIndicatorRender,p=r.dragOverNodeKey,u=r.direction,f=!n&&!!a&&p===o,v=null!=l?l:e.cacheIndent;return e.cacheIndent=l,f?c({dropPosition:i,dropLevelOffset:d,indent:v,prefixCls:s,direction:u}):null},e}return(0,s.Z)(n,[{key:"componentDidMount",value:function(){this.syncLoadData(this.props)}},{key:"componentDidUpdate",value:function(){this.syncLoadData(this.props)}},{key:"isSelectable",value:function(){var e=this.props.selectable,t=this.props.context.selectable;return"boolean"==typeof e?e:t}},{key:"render",value:function(){var e,t=this.props,n=t.eventKey,d=t.className,i=t.style,s=t.dragOver,l=t.dragOverGapTop,c=t.dragOverGapBottom,p=t.isLeaf,u=t.isStart,h=t.isEnd,g=t.expanded,x=t.selected,m=t.checked,C=t.halfChecked,D=t.loading,b=t.domRef,S=t.active,Z=(t.data,t.onMouseMove),w=t.selectable,L=(0,a.Z)(t,E),P=this.props.context,O=P.prefixCls,T=P.filterTreeNode,M=P.keyEntities,A=P.dropContainerKey,I=P.dropTargetKey,R=P.draggingNodeKey,F=this.isDisabled(),H=(0,v.Z)(L,{aria:!0,data:!0}),_=((0,k.Z)(M,n)||{}).level,U=h[h.length-1],B=this.isDraggable(),W=!F&&B,q=R===n,j=void 0!==w?{"aria-selected":!!w}:void 0;return y.createElement("div",(0,o.Z)({ref:b,className:f()(d,"".concat(O,"-treenode"),(e={},(0,r.Z)(e,"".concat(O,"-treenode-disabled"),F),(0,r.Z)(e,"".concat(O,"-treenode-switcher-").concat(g?"open":"close"),!p),(0,r.Z)(e,"".concat(O,"-treenode-checkbox-checked"),m),(0,r.Z)(e,"".concat(O,"-treenode-checkbox-indeterminate"),C),(0,r.Z)(e,"".concat(O,"-treenode-selected"),x),(0,r.Z)(e,"".concat(O,"-treenode-loading"),D),(0,r.Z)(e,"".concat(O,"-treenode-active"),S),(0,r.Z)(e,"".concat(O,"-treenode-leaf-last"),U),(0,r.Z)(e,"".concat(O,"-treenode-draggable"),B),(0,r.Z)(e,"dragging",q),(0,r.Z)(e,"drop-target",I===n),(0,r.Z)(e,"drop-container",A===n),(0,r.Z)(e,"drag-over",!F&&s),(0,r.Z)(e,"drag-over-gap-top",!F&&l),(0,r.Z)(e,"drag-over-gap-bottom",!F&&c),(0,r.Z)(e,"filter-node",T&&T((0,N.F)(this.props))),e)),style:i,draggable:W,"aria-grabbed":q,onDragStart:W?this.onDragStart:void 0,onDragEnter:B?this.onDragEnter:void 0,onDragOver:B?this.onDragOver:void 0,onDragLeave:B?this.onDragLeave:void 0,onDrop:B?this.onDrop:void 0,onDragEnd:B?this.onDragEnd:void 0,onMouseMove:Z},j,H),y.createElement(K,{prefixCls:O,level:_,isStart:u,isEnd:h}),this.renderDragHandler(),this.renderSwitcher(),this.renderCheckbox(),this.renderSelector())}}]),n}(y.Component),D=function(e){return y.createElement(h.k.Consumer,null,(function(t){return y.createElement(C,(0,o.Z)({},e,{context:t}))}))};D.displayName="TreeNode",D.isTreeNode=1;var b=D},86572:function(e,t,n){n.d(t,{k:function(){return o}});var o=n(63160).createContext(null)},25762:function(e,t,n){n.d(t,{O:function(){return b.Z},Z:function(){return z}});var o=n(95048),r=n(98859),a=n(40622),d=n(76802),i=n(38759),s=n(52363),l=n(53239),c=n(56180),p=n(42741),u=n(4763),f=n(98088),v=n.n(f),y=n(67209),h=n(82398),g=n(17365),K=n(63160),k=n(86572);function N(e){if(null==e)throw new TypeError("Cannot destructure "+e)}var E=n(79091),x=n(38557),m=n(73600),C=n(21863),D=n(42285),b=n(81879);var S=n(5623),Z=["className","style","motion","motionNodes","motionType","onMotionStart","onMotionEnd","active","treeNodeRequiredProps"],w=function(e,t){var n=e.className,r=e.style,a=e.motion,d=e.motionNodes,i=e.motionType,s=e.onMotionStart,l=e.onMotionEnd,c=e.active,p=e.treeNodeRequiredProps,u=(0,x.Z)(e,Z),f=K.useState(!0),y=(0,E.Z)(f,2),h=y[0],g=y[1],C=K.useContext(k.k).prefixCls,w=d&&"hide"!==i;(0,m.Z)((function(){d&&w!==h&&g(w)}),[d]);var L=K.useRef(!1),P=function(){d&&!L.current&&(L.current=!0,l())};!function(e,t){var n=K.useState(!1),o=(0,E.Z)(n,2),r=o[0],a=o[1];(0,m.Z)((function(){if(r)return e(),function(){t()}}),[r]),(0,m.Z)((function(){return a(!0),function(){a(!1)}}),[])}((function(){d&&s()}),P);return d?K.createElement(D.ZP,(0,o.Z)({ref:t,visible:h},a,{motionAppear:"show"===i,onVisibleChanged:function(e){w===e&&P()}}),(function(e,t){var n=e.className,r=e.style;return K.createElement("div",{ref:t,className:v()("".concat(C,"-treenode-motion"),n),style:r},d.map((function(e){var t=(0,o.Z)({},(N(e.data),e.data)),n=e.title,r=e.key,a=e.isStart,d=e.isEnd;delete t.children;var i=(0,S.H8)(r,p);return K.createElement(b.Z,(0,o.Z)({},t,i,{title:n,active:c,data:e.data,key:r,isStart:a,isEnd:d}))})))})):K.createElement(b.Z,(0,o.Z)({domRef:t,className:n,style:r},u,{active:c}))};w.displayName="MotionTreeNode";var L=K.forwardRef(w);function P(e,t,n){var o=e.findIndex((function(e){return e.key===n})),r=e[o+1],a=t.findIndex((function(e){return e.key===n}));if(r){var d=t.findIndex((function(e){return e.key===r.key}));return t.slice(a+1,d)}return t.slice(a+1)}var O=["prefixCls","data","selectable","checkable","expandedKeys","selectedKeys","checkedKeys","loadedKeys","loadingKeys","halfCheckedKeys","keyEntities","disabled","dragging","dragOverNodeKey","dropPosition","motion","height","itemHeight","virtual","focusable","activeItem","focused","tabIndex","onKeyDown","onFocus","onBlur","onActiveChange","onListChangeStart","onListChangeEnd"],T={width:0,height:0,display:"flex",overflow:"hidden",opacity:0,border:0,padding:0,margin:0},M=function(){},A="RC_TREE_MOTION_".concat(Math.random()),I={key:A},R={key:A,level:0,index:0,pos:"0",node:I,nodes:[I]},F={parent:null,children:[],pos:R.pos,data:I,title:null,key:A,isStart:[],isEnd:[]};function H(e,t,n,o){return!1!==t&&n?e.slice(0,Math.ceil(n/o)+1):e}function _(e){var t=e.key,n=e.pos;return(0,S.km)(t,n)}var U=K.forwardRef((function(e,t){var n=e.prefixCls,r=e.data,a=(e.selectable,e.checkable,e.expandedKeys),d=e.selectedKeys,i=e.checkedKeys,s=e.loadedKeys,l=e.loadingKeys,c=e.halfCheckedKeys,p=e.keyEntities,u=e.disabled,f=e.dragging,v=e.dragOverNodeKey,y=e.dropPosition,h=e.motion,g=e.height,k=e.itemHeight,D=e.virtual,b=e.focusable,Z=e.activeItem,w=e.focused,I=e.tabIndex,R=e.onKeyDown,U=e.onFocus,B=e.onBlur,W=e.onActiveChange,q=e.onListChangeStart,j=e.onListChangeEnd,G=(0,x.Z)(e,O),z=K.useRef(null),V=K.useRef(null);K.useImperativeHandle(t,(function(){return{scrollTo:function(e){z.current.scrollTo(e)},getIndentWidth:function(){return V.current.offsetWidth}}}));var X=K.useState(a),Y=(0,E.Z)(X,2),$=Y[0],J=Y[1],Q=K.useState(r),ee=(0,E.Z)(Q,2),te=ee[0],ne=ee[1],oe=K.useState(r),re=(0,E.Z)(oe,2),ae=re[0],de=re[1],ie=K.useState([]),se=(0,E.Z)(ie,2),le=se[0],ce=se[1],pe=K.useState(null),ue=(0,E.Z)(pe,2),fe=ue[0],ve=ue[1],ye=K.useRef(r);function he(){var e=ye.current;ne(e),de(e),ce([]),ve(null),j()}ye.current=r,(0,m.Z)((function(){J(a);var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=e.length,o=t.length;if(1!==Math.abs(n-o))return{add:!1,key:null};function r(e,t){var n=new Map;e.forEach((function(e){n.set(e,!0)}));var o=t.filter((function(e){return!n.has(e)}));return 1===o.length?o[0]:null}return n<o?{add:!0,key:r(e,t)}:{add:!1,key:r(t,e)}}($,a);if(null!==e.key)if(e.add){var t=te.findIndex((function(t){return t.key===e.key})),n=H(P(te,r,e.key),D,g,k),o=te.slice();o.splice(t+1,0,F),de(o),ce(n),ve("show")}else{var d=r.findIndex((function(t){return t.key===e.key})),i=H(P(r,te,e.key),D,g,k),s=r.slice();s.splice(d+1,0,F),de(s),ce(i),ve("hide")}else te!==r&&(ne(r),de(r))}),[a,r]),K.useEffect((function(){f||he()}),[f]);var ge=h?ae:r,Ke={expandedKeys:a,selectedKeys:d,loadedKeys:s,loadingKeys:l,checkedKeys:i,halfCheckedKeys:c,dragOverNodeKey:v,dropPosition:y,keyEntities:p};return K.createElement(K.Fragment,null,w&&Z&&K.createElement("span",{style:T,"aria-live":"assertive"},function(e){for(var t=String(e.data.key),n=e;n.parent;)n=n.parent,t="".concat(n.data.key," > ").concat(t);return t}(Z)),K.createElement("div",null,K.createElement("input",{style:T,disabled:!1===b||u,tabIndex:!1!==b?I:null,onKeyDown:R,onFocus:U,onBlur:B,value:"",onChange:M,"aria-label":"for screen reader"})),K.createElement("div",{className:"".concat(n,"-treenode"),"aria-hidden":!0,style:{position:"absolute",pointerEvents:"none",visibility:"hidden",height:0,overflow:"hidden",border:0,padding:0}},K.createElement("div",{className:"".concat(n,"-indent")},K.createElement("div",{ref:V,className:"".concat(n,"-indent-unit")}))),K.createElement(C.Z,(0,o.Z)({},G,{data:ge,itemKey:_,height:g,fullHeight:!1,virtual:D,itemHeight:k,prefixCls:"".concat(n,"-list"),ref:z,onVisibleChange:function(e,t){var n=new Set(e);t.filter((function(e){return!n.has(e)})).some((function(e){return _(e)===A}))&&he()}}),(function(e){var t=e.pos,n=(0,o.Z)({},(N(e.data),e.data)),r=e.title,a=e.key,d=e.isStart,i=e.isEnd,s=(0,S.km)(a,t);delete n.key,delete n.children;var l=(0,S.H8)(s,Ke);return K.createElement(L,(0,o.Z)({},n,l,{title:r,active:!!Z&&a===Z.key,pos:t,data:e.data,isStart:d,isEnd:i,motion:h,motionNodes:a===A?le:null,motionType:fe,onMotionStart:q,onMotionEnd:he,treeNodeRequiredProps:Ke,onMouseMove:function(){W(null)}}))})))}));U.displayName="NodeList";var B=U,W=n(43379),q=n(70488),j=n(26917),G=function(e){(0,p.Z)(n,e);var t=(0,u.Z)(n);function n(){var e;(0,s.Z)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).destroyed=!1,e.delayedDragEnterLogic=void 0,e.loadingRetryTimes={},e.state={keyEntities:{},indent:null,selectedKeys:[],checkedKeys:[],halfCheckedKeys:[],loadedKeys:[],loadingKeys:[],expandedKeys:[],draggingNodeKey:null,dragChildrenKeys:[],dropTargetKey:null,dropPosition:null,dropContainerKey:null,dropLevelOffset:null,dropTargetPos:null,dropAllowed:!0,dragOverNodeKey:null,treeData:[],flattenNodes:[],focused:!1,activeKey:null,listChanging:!1,prevProps:null,fieldNames:(0,S.w$)()},e.dragStartMousePosition=null,e.dragNode=void 0,e.currentMouseOverDroppableNodeKey=null,e.listRef=K.createRef(),e.onNodeDragStart=function(t,n){var o=e.state,r=o.expandedKeys,a=o.keyEntities,d=e.props.onDragStart,i=n.props.eventKey;e.dragNode=n,e.dragStartMousePosition={x:t.clientX,y:t.clientY};var s=(0,W._5)(r,i);e.setState({draggingNodeKey:i,dragChildrenKeys:(0,W.wA)(i,a),indent:e.listRef.current.getIndentWidth()}),e.setExpandedKeys(s),window.addEventListener("dragend",e.onWindowDragEnd),null==d||d({event:t,node:(0,S.F)(n.props)})},e.onNodeDragEnter=function(t,n){var o=e.state,r=o.expandedKeys,a=o.keyEntities,d=o.dragChildrenKeys,s=o.flattenNodes,l=o.indent,p=e.props,u=p.onDragEnter,f=p.onExpand,v=p.allowDrop,y=p.direction,h=n.props,g=h.pos,K=h.eventKey,k=(0,c.Z)(e).dragNode;if(e.currentMouseOverDroppableNodeKey!==K&&(e.currentMouseOverDroppableNodeKey=K),k){var N=(0,W.OM)(t,k,n,l,e.dragStartMousePosition,v,s,a,r,y),E=N.dropPosition,x=N.dropLevelOffset,m=N.dropTargetKey,C=N.dropContainerKey,D=N.dropTargetPos,b=N.dropAllowed,Z=N.dragOverNodeKey;-1===d.indexOf(m)&&b?(e.delayedDragEnterLogic||(e.delayedDragEnterLogic={}),Object.keys(e.delayedDragEnterLogic).forEach((function(t){clearTimeout(e.delayedDragEnterLogic[t])})),k.props.eventKey!==n.props.eventKey&&(t.persist(),e.delayedDragEnterLogic[g]=window.setTimeout((function(){if(null!==e.state.draggingNodeKey){var o=(0,i.Z)(r),d=(0,j.Z)(a,n.props.eventKey);d&&(d.children||[]).length&&(o=(0,W.L0)(r,n.props.eventKey)),"expandedKeys"in e.props||e.setExpandedKeys(o),null==f||f(o,{node:(0,S.F)(n.props),expanded:!0,nativeEvent:t.nativeEvent})}}),800)),k.props.eventKey!==m||0!==x?(e.setState({dragOverNodeKey:Z,dropPosition:E,dropLevelOffset:x,dropTargetKey:m,dropContainerKey:C,dropTargetPos:D,dropAllowed:b}),null==u||u({event:t,node:(0,S.F)(n.props),expandedKeys:r})):e.resetDragState()):e.resetDragState()}else e.resetDragState()},e.onNodeDragOver=function(t,n){var o=e.state,r=o.dragChildrenKeys,a=o.flattenNodes,d=o.keyEntities,i=o.expandedKeys,s=o.indent,l=e.props,p=l.onDragOver,u=l.allowDrop,f=l.direction,v=(0,c.Z)(e).dragNode;if(v){var y=(0,W.OM)(t,v,n,s,e.dragStartMousePosition,u,a,d,i,f),h=y.dropPosition,g=y.dropLevelOffset,K=y.dropTargetKey,k=y.dropContainerKey,N=y.dropAllowed,E=y.dropTargetPos,x=y.dragOverNodeKey;-1===r.indexOf(K)&&N&&(v.props.eventKey===K&&0===g?null===e.state.dropPosition&&null===e.state.dropLevelOffset&&null===e.state.dropTargetKey&&null===e.state.dropContainerKey&&null===e.state.dropTargetPos&&!1===e.state.dropAllowed&&null===e.state.dragOverNodeKey||e.resetDragState():h===e.state.dropPosition&&g===e.state.dropLevelOffset&&K===e.state.dropTargetKey&&k===e.state.dropContainerKey&&E===e.state.dropTargetPos&&N===e.state.dropAllowed&&x===e.state.dragOverNodeKey||e.setState({dropPosition:h,dropLevelOffset:g,dropTargetKey:K,dropContainerKey:k,dropTargetPos:E,dropAllowed:N,dragOverNodeKey:x}),null==p||p({event:t,node:(0,S.F)(n.props)}))}},e.onNodeDragLeave=function(t,n){e.currentMouseOverDroppableNodeKey!==n.props.eventKey||t.currentTarget.contains(t.relatedTarget)||(e.resetDragState(),e.currentMouseOverDroppableNodeKey=null);var o=e.props.onDragLeave;null==o||o({event:t,node:(0,S.F)(n.props)})},e.onWindowDragEnd=function(t){e.onNodeDragEnd(t,null,!0),window.removeEventListener("dragend",e.onWindowDragEnd)},e.onNodeDragEnd=function(t,n){var o=e.props.onDragEnd;e.setState({dragOverNodeKey:null}),e.cleanDragState(),null==o||o({event:t,node:(0,S.F)(n.props)}),e.dragNode=null,window.removeEventListener("dragend",e.onWindowDragEnd)},e.onNodeDrop=function(t,n){var o,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=e.state,i=a.dragChildrenKeys,s=a.dropPosition,l=a.dropTargetKey,c=a.dropTargetPos,p=a.dropAllowed;if(p){var u=e.props.onDrop;if(e.setState({dragOverNodeKey:null}),e.cleanDragState(),null!==l){var f=(0,d.Z)((0,d.Z)({},(0,S.H8)(l,e.getTreeNodeRequiredProps())),{},{active:(null===(o=e.getActiveItem())||void 0===o?void 0:o.key)===l,data:(0,j.Z)(e.state.keyEntities,l).node}),v=-1!==i.indexOf(l);(0,g.ZP)(!v,"Can not drop to dragNode's children node. This is a bug of rc-tree. Please report an issue.");var y=(0,W.yx)(c),h={event:t,node:(0,S.F)(f),dragNode:e.dragNode?(0,S.F)(e.dragNode.props):null,dragNodesKeys:[e.dragNode.props.eventKey].concat(i),dropToGap:0!==s,dropPosition:s+Number(y[y.length-1])};r||null==u||u(h),e.dragNode=null}}},e.cleanDragState=function(){null!==e.state.draggingNodeKey&&e.setState({draggingNodeKey:null,dropPosition:null,dropContainerKey:null,dropTargetKey:null,dropLevelOffset:null,dropAllowed:!0,dragOverNodeKey:null}),e.dragStartMousePosition=null,e.currentMouseOverDroppableNodeKey=null},e.triggerExpandActionExpand=function(t,n){var o=e.state,r=o.expandedKeys,a=o.flattenNodes,i=n.expanded,s=n.key;if(!(n.isLeaf||t.shiftKey||t.metaKey||t.ctrlKey)){var l=a.filter((function(e){return e.key===s}))[0],c=(0,S.F)((0,d.Z)((0,d.Z)({},(0,S.H8)(s,e.getTreeNodeRequiredProps())),{},{data:l.data}));e.setExpandedKeys(i?(0,W._5)(r,s):(0,W.L0)(r,s)),e.onNodeExpand(t,c)}},e.onNodeClick=function(t,n){var o=e.props,r=o.onClick;"click"===o.expandAction&&e.triggerExpandActionExpand(t,n),null==r||r(t,n)},e.onNodeDoubleClick=function(t,n){var o=e.props,r=o.onDoubleClick;"doubleClick"===o.expandAction&&e.triggerExpandActionExpand(t,n),null==r||r(t,n)},e.onNodeSelect=function(t,n){var o=e.state.selectedKeys,r=e.state,a=r.keyEntities,d=r.fieldNames,i=e.props,s=i.onSelect,l=i.multiple,c=n.selected,p=n[d.key],u=!c,f=(o=u?l?(0,W.L0)(o,p):[p]:(0,W._5)(o,p)).map((function(e){var t=(0,j.Z)(a,e);return t?t.node:null})).filter((function(e){return e}));e.setUncontrolledState({selectedKeys:o}),null==s||s(o,{event:"select",selected:u,node:n,selectedNodes:f,nativeEvent:t.nativeEvent})},e.onNodeCheck=function(t,n,o){var r,a=e.state,d=a.keyEntities,s=a.checkedKeys,l=a.halfCheckedKeys,c=e.props,p=c.checkStrictly,u=c.onCheck,f=n.key,v={event:"check",node:n,checked:o,nativeEvent:t.nativeEvent};if(p){var y=o?(0,W.L0)(s,f):(0,W._5)(s,f);r={checked:y,halfChecked:(0,W._5)(l,f)},v.checkedNodes=y.map((function(e){return(0,j.Z)(d,e)})).filter((function(e){return e})).map((function(e){return e.node})),e.setUncontrolledState({checkedKeys:y})}else{var h=(0,q.S)([].concat((0,i.Z)(s),[f]),!0,d),g=h.checkedKeys,K=h.halfCheckedKeys;if(!o){var k=new Set(g);k.delete(f);var N=(0,q.S)(Array.from(k),{checked:!1,halfCheckedKeys:K},d);g=N.checkedKeys,K=N.halfCheckedKeys}r=g,v.checkedNodes=[],v.checkedNodesPositions=[],v.halfCheckedKeys=K,g.forEach((function(e){var t=(0,j.Z)(d,e);if(t){var n=t.node,o=t.pos;v.checkedNodes.push(n),v.checkedNodesPositions.push({node:n,pos:o})}})),e.setUncontrolledState({checkedKeys:g},!1,{halfCheckedKeys:K})}null==u||u(r,v)},e.onNodeLoad=function(t){var n=t.key,o=new Promise((function(o,r){e.setState((function(a){var d=a.loadedKeys,i=void 0===d?[]:d,s=a.loadingKeys,l=void 0===s?[]:s,c=e.props,p=c.loadData,u=c.onLoad;return p&&-1===i.indexOf(n)&&-1===l.indexOf(n)?(p(t).then((function(){var r=e.state.loadedKeys,a=(0,W.L0)(r,n);null==u||u(a,{event:"load",node:t}),e.setUncontrolledState({loadedKeys:a}),e.setState((function(e){return{loadingKeys:(0,W._5)(e.loadingKeys,n)}})),o()})).catch((function(t){if(e.setState((function(e){return{loadingKeys:(0,W._5)(e.loadingKeys,n)}})),e.loadingRetryTimes[n]=(e.loadingRetryTimes[n]||0)+1,e.loadingRetryTimes[n]>=10){var a=e.state.loadedKeys;(0,g.ZP)(!1,"Retry for `loadData` many times but still failed. No more retry."),e.setUncontrolledState({loadedKeys:(0,W.L0)(a,n)}),o()}r(t)})),{loadingKeys:(0,W.L0)(l,n)}):null}))}));return o.catch((function(){})),o},e.onNodeMouseEnter=function(t,n){var o=e.props.onMouseEnter;null==o||o({event:t,node:n})},e.onNodeMouseLeave=function(t,n){var o=e.props.onMouseLeave;null==o||o({event:t,node:n})},e.onNodeContextMenu=function(t,n){var o=e.props.onRightClick;o&&(t.preventDefault(),o({event:t,node:n}))},e.onFocus=function(){var t=e.props.onFocus;e.setState({focused:!0});for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];null==t||t.apply(void 0,o)},e.onBlur=function(){var t=e.props.onBlur;e.setState({focused:!1}),e.onActiveChange(null);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];null==t||t.apply(void 0,o)},e.getTreeNodeRequiredProps=function(){var t=e.state;return{expandedKeys:t.expandedKeys||[],selectedKeys:t.selectedKeys||[],loadedKeys:t.loadedKeys||[],loadingKeys:t.loadingKeys||[],checkedKeys:t.checkedKeys||[],halfCheckedKeys:t.halfCheckedKeys||[],dragOverNodeKey:t.dragOverNodeKey,dropPosition:t.dropPosition,keyEntities:t.keyEntities}},e.setExpandedKeys=function(t){var n=e.state,o=n.treeData,r=n.fieldNames,a=(0,S.oH)(o,t,r);e.setUncontrolledState({expandedKeys:t,flattenNodes:a},!0)},e.onNodeExpand=function(t,n){var o=e.state.expandedKeys,r=e.state,a=r.listChanging,d=r.fieldNames,i=e.props,s=i.onExpand,l=i.loadData,c=n.expanded,p=n[d.key];if(!a){var u=o.indexOf(p),f=!c;if((0,g.ZP)(c&&-1!==u||!c&&-1===u,"Expand state not sync with index check"),o=f?(0,W.L0)(o,p):(0,W._5)(o,p),e.setExpandedKeys(o),null==s||s(o,{node:n,expanded:f,nativeEvent:t.nativeEvent}),f&&l){var v=e.onNodeLoad(n);v&&v.then((function(){var t=(0,S.oH)(e.state.treeData,o,d);e.setUncontrolledState({flattenNodes:t})})).catch((function(){var t=e.state.expandedKeys,n=(0,W._5)(t,p);e.setExpandedKeys(n)}))}}},e.onListChangeStart=function(){e.setUncontrolledState({listChanging:!0})},e.onListChangeEnd=function(){setTimeout((function(){e.setUncontrolledState({listChanging:!1})}))},e.onActiveChange=function(t){var n=e.state.activeKey,o=e.props,r=o.onActiveChange,a=o.itemScrollOffset,d=void 0===a?0:a;n!==t&&(e.setState({activeKey:t}),null!==t&&e.scrollTo({key:t,offset:d}),null==r||r(t))},e.getActiveItem=function(){var t=e.state,n=t.activeKey,o=t.flattenNodes;return null===n?null:o.find((function(e){return e.key===n}))||null},e.offsetActiveKey=function(t){var n=e.state,o=n.flattenNodes,r=n.activeKey,a=o.findIndex((function(e){return e.key===r}));-1===a&&t<0&&(a=o.length);var d=o[a=(a+t+o.length)%o.length];if(d){var i=d.key;e.onActiveChange(i)}else e.onActiveChange(null)},e.onKeyDown=function(t){var n=e.state,o=n.activeKey,r=n.expandedKeys,a=n.checkedKeys,i=n.fieldNames,s=e.props,l=s.onKeyDown,c=s.checkable,p=s.selectable;switch(t.which){case y.Z.UP:e.offsetActiveKey(-1),t.preventDefault();break;case y.Z.DOWN:e.offsetActiveKey(1),t.preventDefault()}var u=e.getActiveItem();if(u&&u.data){var f=e.getTreeNodeRequiredProps(),v=!1===u.data.isLeaf||!!(u.data[i.children]||[]).length,h=(0,S.F)((0,d.Z)((0,d.Z)({},(0,S.H8)(o,f)),{},{data:u.data,active:!0}));switch(t.which){case y.Z.LEFT:v&&r.includes(o)?e.onNodeExpand({},h):u.parent&&e.onActiveChange(u.parent.key),t.preventDefault();break;case y.Z.RIGHT:v&&!r.includes(o)?e.onNodeExpand({},h):u.children&&u.children.length&&e.onActiveChange(u.children[0].key),t.preventDefault();break;case y.Z.ENTER:case y.Z.SPACE:!c||h.disabled||!1===h.checkable||h.disableCheckbox?c||!p||h.disabled||!1===h.selectable||e.onNodeSelect({},h):e.onNodeCheck({},h,!a.includes(o))}}null==l||l(t)},e.setUncontrolledState=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(!e.destroyed){var r=!1,a=!0,i={};Object.keys(t).forEach((function(n){n in e.props?a=!1:(r=!0,i[n]=t[n])})),!r||n&&!a||e.setState((0,d.Z)((0,d.Z)({},i),o))}},e.scrollTo=function(t){e.listRef.current.scrollTo(t)},e}return(0,l.Z)(n,[{key:"componentDidMount",value:function(){this.destroyed=!1,this.onUpdated()}},{key:"componentDidUpdate",value:function(){this.onUpdated()}},{key:"onUpdated",value:function(){var e=this.props,t=e.activeKey,n=e.itemScrollOffset,o=void 0===n?0:n;void 0!==t&&t!==this.state.activeKey&&(this.setState({activeKey:t}),null!==t&&this.scrollTo({key:t,offset:o}))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("dragend",this.onWindowDragEnd),this.destroyed=!0}},{key:"resetDragState",value:function(){this.setState({dragOverNodeKey:null,dropPosition:null,dropLevelOffset:null,dropTargetKey:null,dropContainerKey:null,dropTargetPos:null,dropAllowed:!1})}},{key:"render",value:function(){var e,t,n=this.state,d=n.focused,i=n.flattenNodes,s=n.keyEntities,l=n.draggingNodeKey,c=n.activeKey,p=n.dropLevelOffset,u=n.dropContainerKey,f=n.dropTargetKey,y=n.dropPosition,g=n.dragOverNodeKey,N=n.indent,E=this.props,x=E.prefixCls,m=E.className,C=E.style,D=E.showLine,b=E.focusable,S=E.tabIndex,Z=void 0===S?0:S,w=E.selectable,L=E.showIcon,P=E.icon,O=E.switcherIcon,T=E.draggable,M=E.checkable,A=E.checkStrictly,I=E.disabled,R=E.motion,F=E.loadData,H=E.filterTreeNode,_=E.height,U=E.itemHeight,W=E.virtual,q=E.titleRender,j=E.dropIndicatorRender,G=E.onContextMenu,z=E.onScroll,V=E.direction,X=E.rootClassName,Y=E.rootStyle,$=(0,h.Z)(this.props,{aria:!0,data:!0});return T&&(t="object"===(0,a.Z)(T)?T:"function"==typeof T?{nodeDraggable:T}:{}),K.createElement(k.k.Provider,{value:{prefixCls:x,selectable:w,showIcon:L,icon:P,switcherIcon:O,draggable:t,draggingNodeKey:l,checkable:M,checkStrictly:A,disabled:I,keyEntities:s,dropLevelOffset:p,dropContainerKey:u,dropTargetKey:f,dropPosition:y,dragOverNodeKey:g,indent:N,direction:V,dropIndicatorRender:j,loadData:F,filterTreeNode:H,titleRender:q,onNodeClick:this.onNodeClick,onNodeDoubleClick:this.onNodeDoubleClick,onNodeExpand:this.onNodeExpand,onNodeSelect:this.onNodeSelect,onNodeCheck:this.onNodeCheck,onNodeLoad:this.onNodeLoad,onNodeMouseEnter:this.onNodeMouseEnter,onNodeMouseLeave:this.onNodeMouseLeave,onNodeContextMenu:this.onNodeContextMenu,onNodeDragStart:this.onNodeDragStart,onNodeDragEnter:this.onNodeDragEnter,onNodeDragOver:this.onNodeDragOver,onNodeDragLeave:this.onNodeDragLeave,onNodeDragEnd:this.onNodeDragEnd,onNodeDrop:this.onNodeDrop}},K.createElement("div",{role:"tree",className:v()(x,m,X,(e={},(0,r.Z)(e,"".concat(x,"-show-line"),D),(0,r.Z)(e,"".concat(x,"-focused"),d),(0,r.Z)(e,"".concat(x,"-active-focused"),null!==c),e)),style:Y},K.createElement(B,(0,o.Z)({ref:this.listRef,prefixCls:x,style:C,data:i,disabled:I,selectable:w,checkable:!!M,motion:R,dragging:null!==l,height:_,itemHeight:U,virtual:W,focusable:b,focused:d,tabIndex:Z,activeItem:this.getActiveItem(),onFocus:this.onFocus,onBlur:this.onBlur,onKeyDown:this.onKeyDown,onActiveChange:this.onActiveChange,onListChangeStart:this.onListChangeStart,onListChangeEnd:this.onListChangeEnd,onContextMenu:G,onScroll:z},this.getTreeNodeRequiredProps(),$))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n,o=t.prevProps,a={prevProps:e};function i(t){return!o&&t in e||o&&o[t]!==e[t]}var s=t.fieldNames;if(i("fieldNames")&&(s=(0,S.w$)(e.fieldNames),a.fieldNames=s),i("treeData")?n=e.treeData:i("children")&&((0,g.ZP)(!1,"`children` of Tree is deprecated. Please use `treeData` instead."),n=(0,S.zn)(e.children)),n){a.treeData=n;var l=(0,S.I8)(n,{fieldNames:s});a.keyEntities=(0,d.Z)((0,r.Z)({},A,R),l.keyEntities)}var c,p=a.keyEntities||t.keyEntities;if(i("expandedKeys")||o&&i("autoExpandParent"))a.expandedKeys=e.autoExpandParent||!o&&e.defaultExpandParent?(0,W.r7)(e.expandedKeys,p):e.expandedKeys;else if(!o&&e.defaultExpandAll){var u=(0,d.Z)({},p);delete u[A],a.expandedKeys=Object.keys(u).map((function(e){return u[e].key}))}else!o&&e.defaultExpandedKeys&&(a.expandedKeys=e.autoExpandParent||e.defaultExpandParent?(0,W.r7)(e.defaultExpandedKeys,p):e.defaultExpandedKeys);if(a.expandedKeys||delete a.expandedKeys,n||a.expandedKeys){var f=(0,S.oH)(n||t.treeData,a.expandedKeys||t.expandedKeys,s);a.flattenNodes=f}if((e.selectable&&(i("selectedKeys")?a.selectedKeys=(0,W.BT)(e.selectedKeys,e):!o&&e.defaultSelectedKeys&&(a.selectedKeys=(0,W.BT)(e.defaultSelectedKeys,e))),e.checkable)&&(i("checkedKeys")?c=(0,W.E6)(e.checkedKeys)||{}:!o&&e.defaultCheckedKeys?c=(0,W.E6)(e.defaultCheckedKeys)||{}:n&&(c=(0,W.E6)(e.checkedKeys)||{checkedKeys:t.checkedKeys,halfCheckedKeys:t.halfCheckedKeys}),c)){var v=c,y=v.checkedKeys,h=void 0===y?[]:y,K=v.halfCheckedKeys,k=void 0===K?[]:K;if(!e.checkStrictly){var N=(0,q.S)(h,!0,p);h=N.checkedKeys,k=N.halfCheckedKeys}a.checkedKeys=h,a.halfCheckedKeys=k}return i("loadedKeys")&&(a.loadedKeys=e.loadedKeys),a}}]),n}(K.Component);G.defaultProps={prefixCls:"rc-tree",showLine:!1,showIcon:!0,selectable:!0,multiple:!1,checkable:!1,disabled:!1,checkStrictly:!1,draggable:!1,defaultExpandParent:!0,autoExpandParent:!1,defaultExpandAll:!1,defaultExpandedKeys:[],defaultCheckedKeys:[],defaultSelectedKeys:[],dropIndicatorRender:function(e){var t=e.dropPosition,n=e.dropLevelOffset,o=e.indent,r={pointerEvents:"none",position:"absolute",right:0,backgroundColor:"red",height:2};switch(t){case-1:r.top=0,r.left=-n*o;break;case 1:r.bottom=0,r.left=-n*o;break;case 0:r.bottom=0,r.left=o}return K.createElement("div",{style:r})},allowDrop:function(){return!0},expandAction:!1},G.TreeNode=b.Z;var z=G},43379:function(e,t,n){n.d(t,{BT:function(){return f},E6:function(){return v},L0:function(){return s},OM:function(){return u},_5:function(){return i},r7:function(){return y},wA:function(){return c},yx:function(){return l}});var o=n(38759),r=n(40622),a=n(17365),d=(n(63160),n(81879),n(26917));n(5623);function i(e,t){if(!e)return[];var n=e.slice(),o=n.indexOf(t);return o>=0&&n.splice(o,1),n}function s(e,t){var n=(e||[]).slice();return-1===n.indexOf(t)&&n.push(t),n}function l(e){return e.split("-")}function c(e,t){var n=[];return function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];t.forEach((function(t){var o=t.key,r=t.children;n.push(o),e(r)}))}((0,d.Z)(t,e).children),n}function p(e){if(e.parent){var t=l(e.pos);return Number(t[t.length-1])===e.parent.children.length-1}return!1}function u(e,t,n,o,r,a,i,s,c,u){var f,v=e.clientX,y=e.clientY,h=e.target.getBoundingClientRect(),g=h.top,K=h.height,k=(("rtl"===u?-1:1)*(((null==r?void 0:r.x)||0)-v)-12)/o,N=(0,d.Z)(s,n.props.eventKey);if(y<g+K/2){var E=i.findIndex((function(e){return e.key===N.key})),x=i[E<=0?0:E-1].key;N=(0,d.Z)(s,x)}var m=N.key,C=N,D=N.key,b=0,S=0;if(!c.includes(m))for(var Z=0;Z<k&&p(N);Z+=1)N=N.parent,S+=1;var w,L=t.props.data,P=N.node,O=!0;return w=l(N.pos),0===Number(w[w.length-1])&&0===N.level&&y<g+K/2&&a({dragNode:L,dropNode:P,dropPosition:-1})&&N.key===n.props.eventKey?b=-1:(C.children||[]).length&&c.includes(D)?a({dragNode:L,dropNode:P,dropPosition:0})?b=0:O=!1:0===S?k>-1.5?a({dragNode:L,dropNode:P,dropPosition:1})?b=1:O=!1:a({dragNode:L,dropNode:P,dropPosition:0})?b=0:a({dragNode:L,dropNode:P,dropPosition:1})?b=1:O=!1:a({dragNode:L,dropNode:P,dropPosition:1})?b=1:O=!1,{dropPosition:b,dropLevelOffset:S,dropTargetKey:N.key,dropTargetPos:N.pos,dragOverNodeKey:D,dropContainerKey:0===b?null:(null===(f=N.parent)||void 0===f?void 0:f.key)||null,dropAllowed:O}}function f(e,t){if(e)return t.multiple?e.slice():e.length?[e[0]]:e}function v(e){if(!e)return null;var t;if(Array.isArray(e))t={checkedKeys:e,halfCheckedKeys:void 0};else{if("object"!==(0,r.Z)(e))return(0,a.ZP)(!1,"`checkedKeys` is not an array or an object"),null;t={checkedKeys:e.checked||void 0,halfCheckedKeys:e.halfChecked||void 0}}return t}function y(e,t){var n=new Set;function r(e){if(!n.has(e)){var o=(0,d.Z)(t,e);if(o){n.add(e);var a=o.parent;o.node.disabled||a&&r(a.key)}}}return(e||[]).forEach((function(e){r(e)})),(0,o.Z)(n)}}}]);