"use strict";(self.webpackChunkantd_more=self.webpackChunkantd_more||[]).push([[4449],{27404:function(e,n,t){t.r(n);var a=t(96983),l=t.n(a),o=t(36045),i=t.n(o),r=t(7190),c=t.n(r),u=t(7028),d=t(9708),s=t(47190),f=t(34284),v=t(68925);n.default=function(){var e=u.useState([]),n=c()(e,2),t=n[0],a=n[1],o=u.useState(!0),r=c()(o,2),m=r[0],h=r[1],b=u.useState(["MERCHANT_ADD","MERCHANT_DETAIL"]),p=c()(b,2),E=p[0],g=p[1];return u.useEffect((function(){var e=function(){var e=i()(l()().mark((function e(){return l()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)();case 2:a(f.Z),h(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,v.jsx)(d.Z,{treeData:t,columnTitles:["一级菜单","二级菜单","操作"],lastColumnMerged:!0,value:E,onChange:function(e){console.log(e),g(e)},loading:m})}},15802:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var a=t(7190),l=t.n(a),o=t(7028),i=t(16021),r=t(12453),c=t(86099),u=t(93313),d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"}}]},name:"exclamation-circle",theme:"outlined"},s=t(90438),f=function(e,n){return o.createElement(s.Z,(0,u.Z)({},e,{ref:n,icon:d}))};var v=o.forwardRef(f),m=t(9708),h=t(34284),b=t(68925),p=function(){var e=o.useState(!0),n=l()(e,2),t=n[0],a=n[1],u=o.useState(!1),d=l()(u,2),s=d[0],f=d[1],p=o.useState(["HOME","MERCHANT_LIST","MERCHANT_QUERY","MERCHANT_ADD","MERCHANT"]),E=l()(p,2),g=E[0],O=E[1];return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(i.Z,{children:[(0,b.jsxs)("div",{children:["lastColumnMerged"," ",(0,b.jsx)(r.Z,{title:"最后一列合并展示",children:(0,b.jsx)(v,{})})," ",": ",(0,b.jsx)(c.Z,{checked:t,onChange:a})]}),(0,b.jsxs)("div",{children:["halfToChecked"," ",(0,b.jsx)(r.Z,{title:"半勾选转换为勾选，会影响onChange参数值",children:(0,b.jsx)(v,{})})," ",": ",(0,b.jsx)(c.Z,{checked:s,onChange:f})]})]}),(0,b.jsx)("br",{}),(0,b.jsx)("br",{}),(0,b.jsx)(m.Z,{treeData:h.Z,columnTitles:["一级菜单","二级菜单","操作"],value:g,onChange:function(e){console.log(e),O(e)},lastColumnMerged:t,halfToChecked:s})]})}},32942:function(e,n,t){t.r(n);t(7028);var a=t(38273),l=t(4683),o=t(43503),i=t(9708),r=t(34284),c=t(68925);n.default=function(){return(0,c.jsxs)(a.ZP,{name:"tree-table-bizform-1",initialValues:{roles:["HOME","MERCHANT_LIST","MERCHANT_QUERY","MERCHANT_ADD","MERCHANT"]},onFinish:function(e){console.log(e)},layout:"vertical",children:[(0,c.jsx)(l.Z,{label:"角色名称",name:"roleName"}),(0,c.jsx)(o.Z,{label:"角色权限",name:"roles",children:(0,c.jsx)(i.Z,{treeData:r.Z,columnTitles:["一级菜单","二级菜单","操作"],lastColumnMerged:!0})})]})}},67849:function(e,n,t){t.r(n);t(7028);var a=t(9708),l=t(34284),o=t(68925);n.default=function(){return(0,o.jsx)(a.Z,{treeData:l.Z,columnTitles:["一级菜单","二级菜单","操作"],lastColumnMerged:!0,halfToChecked:!0,hideCheckbox:!0,size:"small"})}},16593:function(e,n,t){t.r(n),t.d(n,{default:function(){return u}});var a=t(7190),l=t.n(a),o=t(7028),i=t(9708),r=[{name:"首页",code:"HOME"},{name:"商户管理",code:"MERCHANT",childs:[{name:"商户查询",code:"MERCHANT_LIST"}]},{name:"交易管理",code:"TRADE",childs:[{name:"交易查询",code:"TRADE_LIST"},{name:"交易配置",code:"TRADE_CONFIG"}]},{name:"风控管理",code:"RISK",childs:[{code:"RISK_LIST",name:"风控记录查询"}]},{name:"对账管理",code:"RECON",childs:[{code:"RECON_OPERATION",name:"运营机构对账"}]},{name:"运营平台管理",code:"OPERATION",childs:[{code:"OPERATION_ROLE",name:"角色管理"},{code:"OPERATION_ACCOUNT",name:"账号管理"},{code:"OPERATION_LOG",name:"日志管理"}]}],c=t(68925),u=function(){var e=o.useState([]),n=l()(e,2),t=n[0],a=n[1];return(0,c.jsx)(i.Z,{treeData:r,columnTitles:["一级菜单","二级菜单"],value:t,onChange:function(e){console.log(e),a(e)},fieldNames:{label:"name",value:"code",children:"childs"}})}},7517:function(e,n,t){t.r(n),t.d(n,{default:function(){return u}});var a=t(7190),l=t.n(a),o=t(7028),i=t(9708),r=[{label:"首页",value:"HOME"},{label:"商户管理",value:"MERCHANT",children:[{label:"商户查询",value:"MERCHANT_LIST"}]},{label:"交易管理",value:"TRADE",children:[{label:"交易查询",value:"TRADE_LIST"},{label:"交易配置",value:"TRADE_CONFIG"}]},{label:"风控管理",value:"RISK",children:[{value:"RISK_LIST",label:"风控记录查询"}]},{label:"对账管理",value:"RECON",children:[{value:"RECON_OPERATION",label:"运营机构对账"}]},{label:"运营平台管理",value:"OPERATION",children:[{value:"OPERATION_ROLE",label:"角色管理"},{value:"OPERATION_ACCOUNT",label:"账号管理"},{value:"OPERATION_LOG",label:"日志管理"}]}],c=t(68925),u=function(){var e=o.useState([]),n=l()(e,2),t=n[0],a=n[1];return(0,c.jsx)(i.Z,{treeData:r,columnTitles:["一级菜单","二级菜单"],value:t,onChange:function(e){console.log(e),a(e)}})}},9298:function(e,n,t){t.r(n),t.d(n,{default:function(){return u}});var a=t(7190),l=t.n(a),o=t(7028),i=t(9708),r=[{label:"首页",value:"HOME"},{label:"商户管理",value:"MERCHANT",children:[{label:"商户查询",value:"MERCHANT_LIST",children:[{label:"商户查询",value:"MERCHANT_QUERY",children:[{label:"操作1",value:"MERCHANT_QUERY_ACTION1"},{label:"操作2",value:"MERCHANT_QUERY_ACTION2"}]},{label:"查看商户详情",value:"MERCHANT_DETAIL"},{label:"新增商户",value:"MERCHANT_ADD"}]}]},{label:"交易管理",value:"TRADE",children:[{label:"交易查询",value:"TRADE_LIST",children:[{label:"交易查询",value:"TRADE_QUERY"},{label:"交易详情",value:"TRADE_DETAIL"}]}]},{label:"风控管理",value:"RISK",children:[{value:"RISK_LIST",label:"风控记录查询",children:[{value:"RISK_QUERY",label:"风控记录查询"},{value:"RISK_DETAIL",label:"查看商户详情"},{value:"RISK_ADD",label:"新增商户处罚管理"}]}]},{label:"对账管理",value:"RECON",children:[{value:"RECON_OPERATION",label:"运营机构对账",children:[{value:"RECON_OPERATION_QUERY",label:"对账记录查询"}]}]},{label:"运营平台管理",value:"OPERATION",children:[{value:"OPERATION_ROLE",label:"角色管理",children:[{value:"OPERATION_ROLE_ADD",label:"新增角色"},{value:"OPERATION_ROLE_UPDATE",label:"修改角色"},{value:"OPERATION_ROLE_QUERY",label:"查询角色列表",disabled:!0}]},{value:"OPERATION_ACCOUNT",label:"账号管理",children:[{value:"OPERATION_ACCOUNT_QUERY",label:"账号查询"},{value:"OPERATION_ACCOUNT_ADD",label:"新增账号"},{value:"OPERATION_ACCOUNT_UPDATE",label:"编辑账号"}]},{value:"OPERATION_LOG",label:"日志管理",children:[{value:"OPERATION_LOG_QUERY",label:"日志查询"}]}]}],c=t(68925),u=function(){var e=o.useState([]),n=l()(e,2),t=n[0],a=n[1];return(0,c.jsx)(i.Z,{treeData:r,columnTitles:["一级菜单","二级菜单"],lastColumnMerged:!0,value:t,onChange:function(e){console.log(e),a(e)}})}},38273:function(e,n,t){var a=t(84808);n.ZP=a.Z},34284:function(e,n){n.Z=[{label:"首页",value:"HOME"},{label:"商户管理",value:"MERCHANT",children:[{label:"商户查询",value:"MERCHANT_LIST",children:[{label:"商户查询",value:"MERCHANT_QUERY"},{label:"查看商户详情",value:"MERCHANT_DETAIL"},{label:"新增商户",value:"MERCHANT_ADD"}]}]},{label:"交易管理",value:"TRADE",children:[{label:"交易查询",value:"TRADE_LIST",children:[{label:"交易查询",value:"TRADE_QUERY"},{label:"交易详情",value:"TRADE_DETAIL"}]}]},{label:"风控管理",value:"RISK",children:[{value:"RISK_LIST",label:"风控记录查询",children:[{value:"RISK_QUERY",label:"风控记录查询"},{value:"RISK_DETAIL",label:"查看商户详情"},{value:"RISK_ADD",label:"新增商户处罚管理"}]}]},{label:"对账管理",value:"RECON",children:[{value:"RECON_OPERATION",label:"运营机构对账",children:[{value:"RECON_OPERATION_QUERY",label:"对账记录查询"}]}]},{label:"运营平台管理",value:"OPERATION",children:[{value:"OPERATION_ROLE",label:"角色管理",children:[{value:"OPERATION_ROLE_ADD",label:"新增角色"},{value:"OPERATION_ROLE_UPDATE",label:"修改角色"},{value:"OPERATION_ROLE_QUERY",label:"查询角色列表",disabled:!0}]},{value:"OPERATION_ACCOUNT",label:"账号管理",children:[{value:"OPERATION_ACCOUNT_QUERY",label:"账号查询"},{value:"OPERATION_ACCOUNT_ADD",label:"新增账号"},{value:"OPERATION_ACCOUNT_UPDATE",label:"编辑账号"}]},{value:"OPERATION_LOG",label:"日志管理",children:[{value:"OPERATION_LOG_QUERY",label:"日志查询"}]}]}]},9708:function(e,n,t){t.d(n,{Z:function(){return Z}});var a=t(7190),l=t.n(a),o=t(98423),i=t.n(o),r=t(92820),c=t.n(r),u=t(53985),d=t.n(u),s=t(73457),f=t.n(s),v=t(7028),m=t(80173),h=t(79713),b=t(35666),p=t(15518),E=t(71688),g=t(47093),O=t(8598),T=t(79698);var C=t(43928),R=t(61733),N=t(60259),A=t.n(N),S=t(68925),y=["columnTitles","treeData","lastColumnMerged","halfToChecked","value","onChange","labelRender","fieldNames","className","hideCheckbox"],_="antd-more-tree-table",I=[],x=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"children",t=[];function a(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];e.forEach((function(e){var o=[].concat(f()(l),[(0,C.Z)(e,[n])]);(0,R.Z)(e[n])?t.push(o):a(e[n],o)}))}return a(e),t};function D(e){var n=JSON.parse(JSON.stringify(e)),t=[],a=new Set;for(var l in n)n[l].name=l,n[l].hasChildren||t.push(n[l]);function o(e){e.parent&&n[e.parent]&&(n[e.parent].len+=e.len-(a.has(e.name)?n[e.name].len:1),a.add(e.name),n[e.parent].parent&&o(n[e.parent]))}return t.forEach((function(e){o(e)})),n}function w(e,n,t){var a=t.value,l=t.children,o=function(e,n,t){var a,l;void 0===t&&(t="children");var o,i=[];if(!(0,O.Z)(e))return o;try{for(var r=(0,g.XA)(e),c=r.next();!c.done;c=r.next()){var u=c.value;for(i.push(u);i.length;){var d=i.pop();if(n(d)){o=d;break}if((0,T.Z)(d)){var s=d[t];(0,O.Z)(s)&&s.length>0&&s.forEach((function(e){i.push(e)}))}}if(o)break}}catch(e){a={error:e}}finally{try{c&&!c.done&&(l=r.return)&&l.call(r)}finally{if(a)throw a.error}}return o}(e,(function(e){return e[a]===n}),l);return(null==o?void 0:o[l])||I}var Z=function(e){var n=e.columnTitles,t=void 0===n?I:n,a=e.treeData,o=void 0===a?I:a,r=e.lastColumnMerged,u=void 0!==r&&r,s=e.halfToChecked,g=void 0!==s&&s,T=(e.value,e.onChange,e.labelRender),N=e.fieldNames,Z=e.className,M=e.hideCheckbox,L=void 0!==M&&M,P=i()(e,y),k=(0,b.Z)(d()({defaultValue:[]},e)),j=l()(k,2),z=j[0],H=j[1],U=(0,p.Z)([]),G=l()(U,2),Y=G[0],Q=G[1],q=(0,E.Z)(Y),K=(0,E.Z)(z);K.current||(K.current=[]);var X=v.useMemo((function(){return d()({label:"label",value:"value",children:"children"},N)}),[N]),V=X.value,B=X.label,F=X.children,W=v.useMemo((function(){return function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=arguments.length>2?arguments[2]:void 0,a=t.value,l=t.children,o=x(e,l),i=Math.max.apply(Math,f()(o.map((function(e){return e.length-1})))),r=[],u={};function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,f=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;e.forEach((function(e){var v,m=d()(d()({},t),{},c()({},"col".concat(f),c()(c()(c()({},a,e[a]),"parent",o),"data",[(0,C.Z)(e,[l])])));u[e[a]]||(u[e[a]]={len:(null===(v=e[l])||void 0===v?void 0:v.length)||1,parent:o}),(0,R.Z)(e[l])?(r.push(d()(d()({},m),{},{key:"row_".concat(o,"_").concat(e[a])})),u[e[a]].hasChildren=!1):n&&i-1===f?(u[e[a]].len=1,u[e[a]].hasChildren=!1,r.push(d()(d()({},m),{},c()({key:"row_".concat(o,"_").concat(e[a])},"col".concat(f+1),c()(c()(c()({},a,e[a]),"parent",o),"data",e[l]))))):(u[e[a]].hasChildren=!0,s(e[l],m,e[a],f+1))}))}s(e),u=D(u);for(var v=[],m=[],h=0;h<=i;h++){m.push({dataIndex:"col".concat(h)});for(var b=0;b<r.length;b++)if(r[b]["col".concat(h)]){var p=r[b]["col".concat(h)][a],E=1;v.includes(p)?u[p].len>1&&(E=0):(v.push(p),E=u[p].len),r[b]["col".concat(h)]=d()(d()({},r[b]["col".concat(h)]),{},{rowSpan:E})}else r[b]["col".concat(h)]=c()(c()(c()({},a,null),"data",[]),"rowSpan",1)}return{columns:m,list:r}}(o,u,X)}),[u,o,X]),$=W.columns,J=W.list,ee=v.useMemo((function(){return function(e,n){var t=n.value,a=n.children,l=[];return function e(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;n.forEach((function(n){var i;l.push(d()(d()({},n),{},c()({parent:(null==o?void 0:o[t])||null},a,(null==n||null===(i=n[a])||void 0===i?void 0:i.map((function(e){return(0,C.Z)(e,[a])})))||null))),(0,R.Z)(n[a])||e(n[a],(0,C.Z)(n,[a]))}))}(e),l}(o,X)}),[o,X]),ne=v.useCallback((function(e,n,t){var a=new Set(n||I),l=new Set(t||I);var o=ee.find((function(n){return n[V]===e}));return null!=o&&o.parent&&function e(n){var t=ee.find((function(e){return e[V]===n}));if(t){var o,i=!1,r=!1,c=!0;null===(o=t[F])||void 0===o||o.forEach((function(e){e.disabled||(a.has(e[V])?i=!0:(c=!1,l.has(e[V])&&(r=!0)))})),c?(a.add(n),l.delete(n)):(a.delete(n),i||r?((g?a:l).add(n),(g?l:a).delete(n)):(g?a:l).delete(n)),t.parent&&e(t.parent)}}(o.parent),{checks:Array.from(a),indeterminates:Array.from(l)}}),[F,ee,g,V]),te=v.useCallback((function(e){var n=new Set(q.current),t=new Set(K.current),a=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3?arguments[3]:void 0,l=a.children,o=[],i=w(e,n,a);function r(e){e.forEach((function(e){o.push((0,C.Z)(e,[l])),(0,R.Z)(e[l])||r(e[l])}))}return t?r(i):i.forEach((function(e){o.push((0,C.Z)(e,[l]))})),o}(o,e[V],!0,X),l=e[V],i=K.current.includes(l);i?t.delete(l):(t.add(l),n.delete(l)),a.forEach((function(e){i?K.current.find((function(n){return n===e[V]}))&&t.delete(e[V]):e.disabled||(t.add(e[V]),n.delete(e[V]))}));var r=ne(e[V],Array.from(t),Array.from(n)),c=r.checks,u=r.indeterminates;Q(u),H(c)}),[X,ne,o,V]);v.useEffect((function(){var e=K.current,n=q.current;K.current.forEach((function(t){var a=ne(t,e,n),l=a.checks,o=a.indeterminates;e=l,n=o})),H(e),Q(n)}),[ne]);var ae=v.useMemo((function(){return((0,O.Z)($)&&$.length>0?$:(0,O.Z)(t)&&t.length>0?t.map((function(){return{}})):[]).map((function(e,n){return d()(d()({},e),{},{title:t[n]||"-",onCell:function(n){return{rowSpan:n[e.dataIndex].rowSpan}},render:function(n,t){var a=t[e.dataIndex];return a[V]?a.data.map((function(e){return(0,S.jsx)(m.Z,{checked:(z||I).includes(e[V]),indeterminate:Y.includes(e[V]),onChange:function(){te(e)},disabled:e.disabled,children:T?T(e):e[B]||e[V]},e[V])})):"-"}})}))}),[z,t,$,te,Y,B,T,V]);return(0,S.jsx)(h.Z,d()({columns:ae,dataSource:J,pagination:!1,bordered:!0,className:A()(_,c()({},"".concat(_,"-hideCheckbox"),L),Z)},P))}},71008:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(93313),l=t(7028),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},i=t(90438),r=function(e,n){return l.createElement(i.Z,(0,a.Z)({},e,{ref:n,icon:o}))};var c=l.forwardRef(r)},89978:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(93313),l=t(7028),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"},i=t(90438),r=function(e,n){return l.createElement(i.Z,(0,a.Z)({},e,{ref:n,icon:o}))};var c=l.forwardRef(r)},71227:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(93313),l=t(7028),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"},i=t(90438),r=function(e,n){return l.createElement(i.Z,(0,a.Z)({},e,{ref:n,icon:o}))};var c=l.forwardRef(r)},91205:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(7190),l=t.n(a),o=t(7028);function i(){var e=o.useReducer((function(e){return e+1}),0);return l()(e,2)[1]}},80173:function(e,n,t){t.d(n,{Z:function(){return _}});var a=t(92820),l=t.n(a),o=t(7190),i=t.n(o),r=t(7028),c=t(60259),u=t.n(c),d=t(21541),s=t(12799),f=t(28873),v=t(69609),m=t(71573),h=t(25733),b=t(6999),p=r.createContext(null),E=t(78253),g=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)n.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(t[a[l]]=e[a[l]])}return t},O=function(e,n){var t,a=e.prefixCls,o=e.className,c=e.rootClassName,O=e.children,T=e.indeterminate,C=void 0!==T&&T,R=e.style,N=e.onMouseEnter,A=e.onMouseLeave,S=e.skipGroup,y=void 0!==S&&S,_=e.disabled,I=g(e,["prefixCls","className","rootClassName","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),x=r.useContext(v.E_),D=x.getPrefixCls,w=x.direction,Z=x.checkbox,M=r.useContext(p),L=r.useContext(b.aM).isFormItemInput,P=r.useContext(m.Z),k=null!==(t=(null==M?void 0:M.disabled)||_)&&void 0!==t?t:P,j=r.useRef(I.value);r.useEffect((function(){null==M||M.registerValue(I.value)}),[]),r.useEffect((function(){if(!y)return I.value!==j.current&&(null==M||M.cancelValue(j.current),null==M||M.registerValue(I.value),j.current=I.value),function(){return null==M?void 0:M.cancelValue(I.value)}}),[I.value]);var z=D("checkbox",a),H=(0,h.Z)(z),U=(0,E.ZP)(z,H),G=i()(U,3),Y=G[0],Q=G[1],q=G[2],K=Object.assign({},I);M&&!y&&(K.onChange=function(){I.onChange&&I.onChange.apply(I,arguments),M.toggleOption&&M.toggleOption({label:O,value:I.value})},K.name=M.name,K.checked=M.value.includes(I.value));var X=u()("".concat(z,"-wrapper"),l()(l()(l()(l()({},"".concat(z,"-rtl"),"rtl"===w),"".concat(z,"-wrapper-checked"),K.checked),"".concat(z,"-wrapper-disabled"),k),"".concat(z,"-wrapper-in-form-item"),L),null==Z?void 0:Z.className,o,c,q,H,Q),V=u()(l()({},"".concat(z,"-indeterminate"),C),f.A,Q),B=C?"mixed":void 0;return Y(r.createElement(s.Z,{component:"Checkbox",disabled:k},r.createElement("label",{className:X,style:Object.assign(Object.assign({},null==Z?void 0:Z.style),R),onMouseEnter:N,onMouseLeave:A},r.createElement(d.Z,Object.assign({"aria-checked":B},K,{prefixCls:z,className:V,disabled:k,ref:n})),void 0!==O&&r.createElement("span",null,O))))};var T=r.forwardRef(O),C=t(76827),R=t(25578),N=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)n.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(t[a[l]]=e[a[l]])}return t},A=r.forwardRef((function(e,n){var t=e.defaultValue,a=e.children,o=e.options,c=void 0===o?[]:o,d=e.prefixCls,s=e.className,f=e.rootClassName,m=e.style,b=e.onChange,g=N(e,["defaultValue","children","options","prefixCls","className","rootClassName","style","onChange"]),O=r.useContext(v.E_),A=O.getPrefixCls,S=O.direction,y=r.useState(g.value||t||[]),_=i()(y,2),I=_[0],x=_[1],D=r.useState([]),w=i()(D,2),Z=w[0],M=w[1];r.useEffect((function(){"value"in g&&x(g.value||[])}),[g.value]);var L=r.useMemo((function(){return c.map((function(e){return"string"==typeof e||"number"==typeof e?{label:e,value:e}:e}))}),[c]),P=A("checkbox",d),k="".concat(P,"-group"),j=(0,h.Z)(P),z=(0,E.ZP)(P,j),H=i()(z,3),U=H[0],G=H[1],Y=H[2],Q=(0,R.Z)(g,["value","disabled"]),q=c.length?L.map((function(e){return r.createElement(T,{prefixCls:P,key:e.value.toString(),disabled:"disabled"in e?e.disabled:g.disabled,value:e.value,checked:I.includes(e.value),onChange:e.onChange,className:"".concat(k,"-item"),style:e.style,title:e.title,id:e.id,required:e.required},e.label)})):a,K={toggleOption:function(e){var n=I.indexOf(e.value),t=(0,C.Z)(I);-1===n?t.push(e.value):t.splice(n,1),"value"in g||x(t),null==b||b(t.filter((function(e){return Z.includes(e)})).sort((function(e,n){return L.findIndex((function(n){return n.value===e}))-L.findIndex((function(e){return e.value===n}))})))},value:I,disabled:g.disabled,name:g.name,registerValue:function(e){M((function(n){return[].concat((0,C.Z)(n),[e])}))},cancelValue:function(e){M((function(n){return n.filter((function(n){return n!==e}))}))}},X=u()(k,l()({},"".concat(k,"-rtl"),"rtl"===S),s,f,Y,j,G);return U(r.createElement("div",Object.assign({className:X,style:m},Q,{ref:n}),r.createElement(p.Provider,{value:K},q)))})),S=A,y=T;y.Group=S,y.__ANT_CHECKBOX=!0;var _=y},76040:function(e,n,t){var a=t(7028),l=t(77463),o=t(91205),i=t(12140);n.Z=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=(0,a.useRef)({}),t=(0,o.Z)(),r=(0,i.ZP)();return(0,l.Z)((function(){var a=r.subscribe((function(a){n.current=a,e&&t()}));return function(){return r.unsubscribe(a)}}),[]),n.current}},73458:function(e,n,t){t.d(n,{Z:function(){return A}});var a=t(92820),l=t.n(a),o=t(7190),i=t.n(o),r=t(7028),c=t(60259),u=t.n(c),d=t(25578),s=t(77797),f=t(94795),v=t(69609),m=t(54610),h=t(95512),b=t(61453),p=t(51353),E=new m.E4("antSpinMove",{to:{opacity:1}}),g=new m.E4("antRotate",{to:{transform:"rotate(405deg)"}}),O=function(e){var n=e.componentCls,t=e.calc;return l()({},"".concat(n),Object.assign(Object.assign({},(0,h.Wf)(e)),l()(l()(l()(l()(l()(l()(l()(l()({position:"absolute",display:"none",color:e.colorPrimary,fontSize:0,textAlign:"center",verticalAlign:"middle",opacity:0,transition:"transform ".concat(e.motionDurationSlow," ").concat(e.motionEaseInOutCirc),"&-spinning":{position:"static",display:"inline-block",opacity:1}},"".concat(n,"-text"),{fontSize:e.fontSize,paddingTop:t(t(e.dotSize).sub(e.fontSize)).div(2).add(2).equal()}),"&-fullscreen",l()(l()({position:"fixed",width:"100vw",height:"100vh",backgroundColor:e.colorBgMask,zIndex:e.zIndexPopupBase,inset:0,display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",opacity:0,visibility:"hidden",transition:"all ".concat(e.motionDurationMid),"&-show":{opacity:1,visibility:"visible"}},"".concat(n,"-dot ").concat(n,"-dot-item"),{backgroundColor:e.colorWhite}),"".concat(n,"-text"),{color:e.colorTextLightSolid})),"&-nested-loading",l()(l()(l()({position:"relative"},"> div > ".concat(n),l()(l()(l()(l()(l()({position:"absolute",top:0,insetInlineStart:0,zIndex:4,display:"block",width:"100%",height:"100%",maxHeight:e.contentHeight},"".concat(n,"-dot"),{position:"absolute",top:"50%",insetInlineStart:"50%",margin:t(e.dotSize).mul(-1).div(2).equal()}),"".concat(n,"-text"),{position:"absolute",top:"50%",width:"100%",textShadow:"0 1px 2px ".concat(e.colorBgContainer)}),"&".concat(n,"-show-text ").concat(n,"-dot"),{marginTop:t(e.dotSize).div(2).mul(-1).sub(10).equal()}),"&-sm",l()(l()(l()({},"".concat(n,"-dot"),{margin:t(e.dotSizeSM).mul(-1).div(2).equal()}),"".concat(n,"-text"),{paddingTop:t(t(e.dotSizeSM).sub(e.fontSize)).div(2).add(2).equal()}),"&".concat(n,"-show-text ").concat(n,"-dot"),{marginTop:t(e.dotSizeSM).div(2).mul(-1).sub(10).equal()})),"&-lg",l()(l()(l()({},"".concat(n,"-dot"),{margin:t(e.dotSizeLG).mul(-1).div(2).equal()}),"".concat(n,"-text"),{paddingTop:t(t(e.dotSizeLG).sub(e.fontSize)).div(2).add(2).equal()}),"&".concat(n,"-show-text ").concat(n,"-dot"),{marginTop:t(e.dotSizeLG).div(2).mul(-1).sub(10).equal()}))),"".concat(n,"-container"),{position:"relative",transition:"opacity ".concat(e.motionDurationSlow),"&::after":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,zIndex:10,width:"100%",height:"100%",background:e.colorBgContainer,opacity:0,transition:"all ".concat(e.motionDurationSlow),content:'""',pointerEvents:"none"}}),"".concat(n,"-blur"),l()({clear:"both",opacity:.5,userSelect:"none",pointerEvents:"none"},"&::after",{opacity:.4,pointerEvents:"auto"}))),"&-tip",{color:e.spinDotDefault}),"".concat(n,"-dot"),{position:"relative",display:"inline-block",fontSize:e.dotSize,width:"1em",height:"1em","&-item":{position:"absolute",display:"block",width:t(e.dotSize).sub(t(e.marginXXS).div(2)).div(2).equal(),height:t(e.dotSize).sub(t(e.marginXXS).div(2)).div(2).equal(),backgroundColor:e.colorPrimary,borderRadius:"100%",transform:"scale(0.75)",transformOrigin:"50% 50%",opacity:.3,animationName:E,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear",animationDirection:"alternate","&:nth-child(1)":{top:0,insetInlineStart:0,animationDelay:"0s"},"&:nth-child(2)":{top:0,insetInlineEnd:0,animationDelay:"0.4s"},"&:nth-child(3)":{insetInlineEnd:0,bottom:0,animationDelay:"0.8s"},"&:nth-child(4)":{bottom:0,insetInlineStart:0,animationDelay:"1.2s"}},"&-spin":{transform:"rotate(45deg)",animationName:g,animationDuration:"1.2s",animationIterationCount:"infinite",animationTimingFunction:"linear"}}),"&-sm ".concat(n,"-dot"),{fontSize:e.dotSizeSM,i:{width:t(t(e.dotSizeSM).sub(t(e.marginXXS).div(2))).div(2).equal(),height:t(t(e.dotSizeSM).sub(t(e.marginXXS).div(2))).div(2).equal()}}),"&-lg ".concat(n,"-dot"),{fontSize:e.dotSizeLG,i:{width:t(t(e.dotSizeLG).sub(e.marginXXS)).div(2).equal(),height:t(t(e.dotSizeLG).sub(e.marginXXS)).div(2).equal()}}),"&".concat(n,"-show-text ").concat(n,"-text"),{display:"block"})))},T=(0,b.I$)("Spin",(function(e){var n=(0,p.TS)(e,{spinDotDefault:e.colorTextDescription});return[O(n)]}),(function(e){var n=e.controlHeightLG;return{contentHeight:400,dotSize:n/2,dotSizeSM:.35*n,dotSizeLG:e.controlHeight}})),C=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)n.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(t[a[l]]=e[a[l]])}return t},R=null;var N=function(e){var n=e.prefixCls,t=e.spinning,a=void 0===t||t,o=e.delay,c=void 0===o?0:o,m=e.className,h=e.rootClassName,b=e.size,p=void 0===b?"default":b,E=e.tip,g=e.wrapperClassName,O=e.style,N=e.children,A=e.fullscreen,S=void 0!==A&&A,y=C(e,["prefixCls","spinning","delay","className","rootClassName","size","tip","wrapperClassName","style","children","fullscreen"]),_=(0,r.useContext(v.E_).getPrefixCls)("spin",n),I=T(_),x=i()(I,3),D=x[0],w=x[1],Z=x[2],M=r.useState((function(){return a&&!function(e,n){return!!e&&!!n&&!isNaN(Number(n))}(a,c)})),L=i()(M,2),P=L[0],k=L[1];r.useEffect((function(){if(a){var e=(0,s.D)(c,(function(){k(!0)}));return e(),function(){var n;null===(n=null==e?void 0:e.cancel)||void 0===n||n.call(e)}}k(!1)}),[c,a]);var j=r.useMemo((function(){return void 0!==N&&!S}),[N,S]),z=r.useContext(v.E_),H=z.direction,U=z.spin,G=u()(_,null==U?void 0:U.className,l()(l()(l()(l()(l()(l()(l()({},"".concat(_,"-sm"),"small"===p),"".concat(_,"-lg"),"large"===p),"".concat(_,"-spinning"),P),"".concat(_,"-show-text"),!!E),"".concat(_,"-fullscreen"),S),"".concat(_,"-fullscreen-show"),S&&P),"".concat(_,"-rtl"),"rtl"===H),m,h,w,Z),Y=u()("".concat(_,"-container"),l()({},"".concat(_,"-blur"),P)),Q=(0,d.Z)(y,["indicator"]),q=Object.assign(Object.assign({},null==U?void 0:U.style),O),K=r.createElement("div",Object.assign({},Q,{style:q,className:G,"aria-live":"polite","aria-busy":P}),function(e,n){var t=n.indicator,a="".concat(e,"-dot");return null===t?null:(0,f.l$)(t)?(0,f.Tm)(t,{className:u()(t.props.className,a)}):(0,f.l$)(R)?(0,f.Tm)(R,{className:u()(R.props.className,a)}):r.createElement("span",{className:u()(a,"".concat(e,"-dot-spin"))},r.createElement("i",{className:"".concat(e,"-dot-item"),key:1}),r.createElement("i",{className:"".concat(e,"-dot-item"),key:2}),r.createElement("i",{className:"".concat(e,"-dot-item"),key:3}),r.createElement("i",{className:"".concat(e,"-dot-item"),key:4}))}(_,e),E&&(j||S)?r.createElement("div",{className:"".concat(_,"-text")},E):null);return D(j?r.createElement("div",Object.assign({},Q,{className:u()("".concat(_,"-nested-loading"),g,w,Z)}),P&&r.createElement("div",{key:"loading"},K),r.createElement("div",{className:Y,key:"container"},N)):K)};N.setDefaultIndicator=function(e){R=e};var A=N},88633:function(e,n,t){t.d(n,{N:function(){return a}});var a=function(e){return{color:e.colorLink,textDecoration:"none",outline:"none",cursor:"pointer",transition:"color ".concat(e.motionDurationSlow),"&:focus, &:hover":{color:e.colorLinkHover},"&:active":{color:e.colorLinkActive}}}},15518:function(e,n,t){var a=t(47093),l=t(7028),o=t(48179);n.Z=function(e){var n=(0,o.Z)(),t=(0,a.CR)((0,l.useState)(e),2),i=t[0],r=t[1];return[i,(0,l.useCallback)((function(e){n.current||r(e)}),[])]}},52094:function(e,n,t){t.d(n,{Z:function(){return l}});var a=t(1871);function l(e,n,t,l){var o=a.unstable_batchedUpdates?function(e){a.unstable_batchedUpdates(t,e)}:t;return null!=e&&e.addEventListener&&e.addEventListener(n,o,l),{remove:function(){null!=e&&e.removeEventListener&&e.removeEventListener(n,o,l)}}}},72974:function(e,n,t){t.d(n,{g1:function(){return a},os:function(){return l}});function a(){return{width:document.documentElement.clientWidth,height:window.innerHeight||document.documentElement.clientHeight}}function l(e){var n=e.getBoundingClientRect(),t=document.documentElement;return{left:n.left+(window.pageXOffset||t.scrollLeft)-(t.clientLeft||document.body.clientLeft||0),top:n.top+(window.pageYOffset||t.scrollTop)-(t.clientTop||document.body.clientTop||0)}}},60061:function(e,n,t){t.d(n,{G:function(){return o}});var a=t(41208),l=function(e){if((0,a.Z)()&&window.document.documentElement){var n=Array.isArray(e)?e:[e],t=window.document.documentElement;return n.some((function(e){return e in t.style}))}return!1};function o(e,n){return Array.isArray(e)||void 0===n?l(e):function(e,n){if(!l(e))return!1;var t=document.createElement("div"),a=t.style[e];return t.style[e]=n,t.style[e]!==a}(e,n)}},47190:function(e,n,t){function a(e){return void 0===e&&(e=1e3),new Promise((function(n){setTimeout(n,e)}))}t.d(n,{Z:function(){return a}})},77797:function(e,n,t){function a(e,n,t){var a=(t||{}).atBegin;return function(e,n,t){var a,l=t||{},o=l.noTrailing,i=void 0!==o&&o,r=l.noLeading,c=void 0!==r&&r,u=l.debounceMode,d=void 0===u?void 0:u,s=!1,f=0;function v(){a&&clearTimeout(a)}function m(){for(var t=arguments.length,l=new Array(t),o=0;o<t;o++)l[o]=arguments[o];var r=this,u=Date.now()-f;function m(){f=Date.now(),n.apply(r,l)}function h(){a=void 0}s||(c||!d||a||m(),v(),void 0===d&&u>e?c?(f=Date.now(),i||(a=setTimeout(d?h:m,e))):m():!0!==i&&(a=setTimeout(d?h:m,void 0===d?e-u:e)))}return m.cancel=function(e){var n=(e||{}).upcomingOnly,t=void 0!==n&&n;v(),s=!t},m}(e,n,{debounceMode:!1!==(void 0!==a&&a)})}t.d(n,{D:function(){return a}})}}]);