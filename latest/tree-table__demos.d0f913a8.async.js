"use strict";(self.webpackChunkantd_more=self.webpackChunkantd_more||[]).push([[4449],{73589:function(e,n,a){a.r(n);var t=a(17662),r=a.n(t),l=a(31404),u=a.n(l),o=a(17925),i=a.n(o),c=a(978),d=a(10464),s=a(33648),f=a(70378),v=a(50107);n.default=function(){var e=c.useState([]),n=i()(e,2),a=n[0],t=n[1],l=c.useState(!0),o=i()(l,2),h=o[0],m=o[1],b=c.useState(["MERCHANT_ADD","MERCHANT_DETAIL"]),E=i()(b,2),p=E[0],C=E[1];return c.useEffect((function(){var e=function(){var e=u()(r()().mark((function e(){return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)();case 2:t(f.Z),m(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,v.jsx)(d.Z,{treeData:a,columnTitles:["一级菜单","二级菜单","操作"],lastColumnMerged:!0,value:p,onChange:function(e){console.log(e),C(e)},loading:h})}},36553:function(e,n,a){a.r(n),a.d(n,{default:function(){return E}});var t=a(17925),r=a.n(t),l=a(978),u=a(81884),o=a(22050),i=a(7641),c=a(59533),d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"}}]},name:"exclamation-circle",theme:"outlined"},s=a(58581),f=function(e,n){return l.createElement(s.Z,(0,c.Z)((0,c.Z)({},e),{},{ref:n,icon:d}))};f.displayName="ExclamationCircleOutlined";var v=l.forwardRef(f),h=a(10464),m=a(70378),b=a(50107),E=function(){var e=l.useState(!0),n=r()(e,2),a=n[0],t=n[1],c=l.useState(!1),d=r()(c,2),s=d[0],f=d[1],E=l.useState(["HOME","MERCHANT_LIST","MERCHANT_QUERY","MERCHANT_DETAIL","MERCHANT_ADD","MERCHANT"]),p=r()(E,2),C=p[0],O=p[1];return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(u.Z,{children:[(0,b.jsxs)("div",{children:["lastColumnMerged"," ",(0,b.jsx)(o.Z,{title:"最后一列合并展示",children:(0,b.jsx)(v,{})})," ",": ",(0,b.jsx)(i.Z,{checked:a,onChange:t})]}),(0,b.jsxs)("div",{children:["halfToChecked"," ",(0,b.jsx)(o.Z,{title:"半勾选转换为勾选，会影响onChange参数值",children:(0,b.jsx)(v,{})})," ",": ",(0,b.jsx)(i.Z,{checked:s,onChange:f})]})]}),(0,b.jsx)("br",{}),(0,b.jsx)("br",{}),(0,b.jsx)(h.Z,{treeData:m.Z,columnTitles:["一级菜单","二级菜单","操作"],value:C,onChange:function(e){console.log(e),O(e)},lastColumnMerged:a,halfToChecked:s})]})}},99245:function(e,n,a){a.r(n);a(978);var t=a(25599),r=a(36462),l=a(24174),u=a(10464),o=a(70378),i=a(50107);n.default=function(){return(0,i.jsxs)(t.ZP,{name:"tree-table-bizform-1",initialValues:{roles:["HOME","MERCHANT_LIST","MERCHANT_QUERY","MERCHANT_DETAIL","MERCHANT_ADD","MERCHANT"]},onFinish:function(e){console.log(e)},layout:"vertical",children:[(0,i.jsx)(r.Z,{label:"角色名称",name:"roleName"}),(0,i.jsx)(l.Z,{label:"角色权限",name:"roles",children:(0,i.jsx)(u.Z,{treeData:o.Z,columnTitles:["一级菜单","二级菜单","操作"],lastColumnMerged:!0})})]})}},86805:function(e,n,a){a.r(n),a.d(n,{default:function(){return c}});var t=a(17925),r=a.n(t),l=a(978),u=a(10464),o=[{name:"首页",code:"HOME"},{name:"商户管理",code:"MERCHANT",childs:[{name:"商户查询",code:"MERCHANT_LIST"}]},{name:"交易管理",code:"TRADE",childs:[{name:"交易查询",code:"TRADE_LIST"},{name:"交易配置",code:"TRADE_CONFIG"}]},{name:"风控管理",code:"RISK",childs:[{code:"RISK_LIST",name:"风控记录查询"}]},{name:"对账管理",code:"RECON",childs:[{code:"RECON_OPERATION",name:"运营机构对账"}]},{name:"运营平台管理",code:"OPERATION",childs:[{code:"OPERATION_ROLE",name:"角色管理"},{code:"OPERATION_ACCOUNT",name:"账号管理"},{code:"OPERATION_LOG",name:"日志管理"}]}],i=a(50107),c=function(){var e=l.useState([]),n=r()(e,2),a=n[0],t=n[1];return(0,i.jsx)(u.Z,{treeData:o,columnTitles:["一级菜单","二级菜单"],value:a,onChange:function(e){console.log(e),t(e)},fieldNames:{label:"name",value:"code",children:"childs"}})}},16146:function(e,n,a){a.r(n),a.d(n,{default:function(){return c}});var t=a(17925),r=a.n(t),l=a(978),u=a(10464),o=[{label:"首页",value:"HOME"},{label:"商户管理",value:"MERCHANT",children:[{label:"商户查询",value:"MERCHANT_LIST"}]},{label:"交易管理",value:"TRADE",children:[{label:"交易查询",value:"TRADE_LIST"},{label:"交易配置",value:"TRADE_CONFIG"}]},{label:"风控管理",value:"RISK",children:[{value:"RISK_LIST",label:"风控记录查询"}]},{label:"对账管理",value:"RECON",children:[{value:"RECON_OPERATION",label:"运营机构对账"}]},{label:"运营平台管理",value:"OPERATION",children:[{value:"OPERATION_ROLE",label:"角色管理"},{value:"OPERATION_ACCOUNT",label:"账号管理"},{value:"OPERATION_LOG",label:"日志管理"}]}],i=a(50107),c=function(){var e=l.useState([]),n=r()(e,2),a=n[0],t=n[1];return(0,i.jsx)(u.Z,{treeData:o,columnTitles:["一级菜单","二级菜单"],value:a,onChange:function(e){console.log(e),t(e)}})}},44365:function(e,n,a){a.r(n),a.d(n,{default:function(){return c}});var t=a(17925),r=a.n(t),l=a(978),u=a(10464),o=[{label:"首页",value:"HOME"},{label:"商户管理",value:"MERCHANT",children:[{label:"商户查询",value:"MERCHANT_LIST",children:[{label:"商户查询",value:"MERCHANT_QUERY",children:[{label:"操作1",value:"MERCHANT_QUERY_ACTION1"},{label:"操作2",value:"MERCHANT_QUERY_ACTION2"}]},{label:"查看商户详情",value:"MERCHANT_DETAIL"},{label:"新增商户",value:"MERCHANT_ADD"}]}]},{label:"交易管理",value:"TRADE",children:[{label:"交易查询",value:"TRADE_LIST",children:[{label:"交易查询",value:"TRADE_QUERY"},{label:"交易详情",value:"TRADE_DETAIL"}]}]},{label:"风控管理",value:"RISK",children:[{value:"RISK_LIST",label:"风控记录查询",children:[{value:"RISK_QUERY",label:"风控记录查询"},{value:"RISK_DETAIL",label:"查看商户详情"},{value:"RISK_ADD",label:"新增商户处罚管理"}]}]},{label:"对账管理",value:"RECON",children:[{value:"RECON_OPERATION",label:"运营机构对账",children:[{value:"RECON_OPERATION_QUERY",label:"对账记录查询"}]}]},{label:"运营平台管理",value:"OPERATION",children:[{value:"OPERATION_ROLE",label:"角色管理",children:[{value:"OPERATION_ROLE_ADD",label:"新增角色"},{value:"OPERATION_ROLE_UPDATE",label:"修改角色"},{value:"OPERATION_ROLE_QUERY",label:"查询角色列表",disabled:!0}]},{value:"OPERATION_ACCOUNT",label:"账号管理",children:[{value:"OPERATION_ACCOUNT_QUERY",label:"账号查询"},{value:"OPERATION_ACCOUNT_ADD",label:"新增账号"},{value:"OPERATION_ACCOUNT_UPDATE",label:"编辑账号"}]},{value:"OPERATION_LOG",label:"日志管理",children:[{value:"OPERATION_LOG_QUERY",label:"日志查询"}]}]}],i=a(50107),c=function(){var e=l.useState([]),n=r()(e,2),a=n[0],t=n[1];return(0,i.jsx)(u.Z,{treeData:o,columnTitles:["一级菜单","二级菜单"],lastColumnMerged:!0,value:a,onChange:function(e){console.log(e),t(e)}})}},64915:function(e,n,a){a.d(n,{KB:function(){return o},d8:function(){return i},k6:function(){return u},q_:function(){return c}});var t=a(31671),r=a(35309),l=a(44278),u=function(e){return(0,t.Z)(e).replace(/\s/g,"")},o=function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=(0,t.Z)(e),l=/[^\d]/g,u=a.replace(l,"");return n?(0,r.Z)(u):u},i=function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=(0,t.Z)(e),r=/[^\dx]/gi,l=a.replace(r,"").substring(0,18);return n?l.toUpperCase():l},c=function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=(0,t.Z)(e),r=/[^\d]/g,u=a.replace(r,"");return n?(0,l.Z)(u):u}},36462:function(e,n,a){a.d(n,{Z:function(){return g}});var t=a(35118),r=a.n(t),l=a(14005),u=a.n(l),o=a(978),i=a(2021),c=a(43673),d=a(38033),s=a(59879),f=a(24174),v=a(14748),h=a(43434),m=a(64915),b=a(50107),E=["value","onChange","type","disabledWhiteSpace","format","maxLength"],p=function(e){var n=e.value,a=e.onChange,t=e.type,l=e.disabledWhiteSpace,i=e.format,c=void 0===i||i,d=e.maxLength,s=u()(e,E),f=o.useMemo((function(){if(void 0!==d)return d;if(!c){if("mobile"===t)return 11;if("idCard"===t)return 18}}),[c,d,t]),p=o.useMemo((function(){return"bankCard"===t||"mobile"===t||"idCard"===t||"email"===t||"userName"===t?"text":t}),[t]),C=o.useMemo((function(){return c&&("bankCard"===t||"mobile"===t||"idCard"===t||"email"===t||"userName"===t||l)}),[c,t,l]),O=o.useMemo((function(){var e={};return"bankCard"===t?e.type="bankCard":"mobile"===t?e.type="mobile":"idCard"===t?(e.maskReg=/[^\dx]/gi,e.placeholderChars=[]):("email"===t||"userName"===t||l)&&(e.maskReg=/\s/g,e.placeholderChars=[]),e}),[l,t]),R=o.useCallback((function(e){return"bankCard"===t?(0,m.KB)(e,c):"mobile"===t?(0,m.q_)(e,c):"idCard"===t?(0,m.d8)(e,c):"email"===t||"userName"===t||l?(0,m.k6)(e):e}),[l,c,t]),g=o.useCallback((function(e){var t=e.target,r=t.selectionEnd,l=t.value,u=R(l);if(null==a||a(u),C){var o=(0,h.Z)(r,n,l,u,O);l!==u?setTimeout((function(){t.selectionStart=t.selectionEnd=o})):t.selectionStart=t.selectionEnd=o}}),[O,C,R,a,n]);return o.useEffect((function(){if(n&&C){var e=R(n);e!==n&&(null==a||a(e))}}),[C,R,a,n]),(0,b.jsx)(v.Z,r()({value:n,onChange:g,type:p,maxLength:f},s))},C=a(79969),O=["placeholder","allowClear","maxLength","type","disabledWhiteSpace","inputProps","required","transform","format"],R={bankCard:function(e){return(0,c.Z)(e,{loose:!0})},email:d.Z,idCard:function(e){return(0,s.Z)(e,{loose:!0})},mobile:i.Z},g=function(e){var n=e.placeholder,a=void 0===n?"请输入":n,t=e.allowClear,l=e.maxLength,c=e.type,d=e.disabledWhiteSpace,s=e.inputProps,v=void 0===s?{}:s,h=e.required,m=void 0!==h&&h,E=e.transform,g=e.format,T=void 0===g||g,A=u()(e,O),N=o.useMemo((function(){return"bankCard"===c||"idCard"===c||"mobile"===c||"userName"===c||"email"===c}),[c]),_=o.useCallback((function(e){return E?E(e):!T||"bankCard"!==c&&"mobile"!==c?e:null==e?void 0:e.replace(/\D/g,"")}),[T,E,c]),I=(0,C.Z)(A);return(0,b.jsx)(f.Z,r()(r()({required:m,rules:[{validator:function(e,n){var a="";return n?"userName"===c?a=function(e,n){var a=n.label,t={validated:!0,message:""};return(0,i.Z)(e)?t.message="".concat(a,"不能为手机号码"):e.indexOf("@")>-1&&(t.message="".concat(a,"不能包含@符号")),t.message&&(t.validated=!1),t}(n,{label:I}).message:R[c]&&!R[c](n)&&(a="请输入正确的".concat(I)):a=m?"请输入".concat(I):"",a?Promise.reject(a):Promise.resolve()},transform:_}],transform:_,validateTrigger:N?"onBlur":"onChange"},A),{},{children:(0,b.jsx)(p,r()({placeholder:a,allowClear:t,maxLength:l,autoComplete:"off",type:c,disabledWhiteSpace:d,format:T},v))}))}},25599:function(e,n,a){var t=a(14809);n.ZP=t.Z},70378:function(e,n){n.Z=[{label:"首页",value:"HOME"},{label:"商户管理",value:"MERCHANT",children:[{label:"商户查询",value:"MERCHANT_LIST",children:[{label:"商户查询",value:"MERCHANT_QUERY"},{label:"查看商户详情",value:"MERCHANT_DETAIL"},{label:"新增商户",value:"MERCHANT_ADD"}]}]},{label:"交易管理",value:"TRADE",children:[{label:"交易查询",value:"TRADE_LIST",children:[{label:"交易查询",value:"TRADE_QUERY"},{label:"交易详情",value:"TRADE_DETAIL"}]}]},{label:"风控管理",value:"RISK",children:[{value:"RISK_LIST",label:"风控记录查询",children:[{value:"RISK_QUERY",label:"风控记录查询"},{value:"RISK_DETAIL",label:"查看商户详情"},{value:"RISK_ADD",label:"新增商户处罚管理"}]}]},{label:"对账管理",value:"RECON",children:[{value:"RECON_OPERATION",label:"运营机构对账",children:[{value:"RECON_OPERATION_QUERY",label:"对账记录查询"}]}]},{label:"运营平台管理",value:"OPERATION",children:[{value:"OPERATION_ROLE",label:"角色管理",children:[{value:"OPERATION_ROLE_ADD",label:"新增角色"},{value:"OPERATION_ROLE_UPDATE",label:"修改角色"},{value:"OPERATION_ROLE_QUERY",label:"查询角色列表",disabled:!0}]},{value:"OPERATION_ACCOUNT",label:"账号管理",children:[{value:"OPERATION_ACCOUNT_QUERY",label:"账号查询"},{value:"OPERATION_ACCOUNT_ADD",label:"新增账号"},{value:"OPERATION_ACCOUNT_UPDATE",label:"编辑账号"}]},{value:"OPERATION_LOG",label:"日志管理",children:[{value:"OPERATION_LOG_QUERY",label:"日志查询"}]}]}]},10464:function(e,n,a){a.d(n,{Z:function(){return M}});var t=a(17925),r=a.n(t),l=a(14005),u=a.n(l),o=a(4143),i=a.n(o),c=a(35118),d=a.n(c),s=a(4044),f=a.n(s),v=a(978),h=a(28068),m=a(65967),b=a(57957),E=a(57869),p=a(93886),C=a(85325),O=a(33285);var R=function(e){var n=(0,O.Z)(e);return null!=e&&("object"===n||"function"===n)};function g(e,n){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,n){if(!e)return;if("string"==typeof e)return T(e,n);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return T(e,n)}(e))||n&&e&&"number"==typeof e.length){a&&(e=a);var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,u=!0,o=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return u=e.done,e},e:function(e){o=!0,l=e},f:function(){try{u||null==a.return||a.return()}finally{if(o)throw l}}}}function T(e,n){(null==n||n>e.length)&&(n=e.length);for(var a=0,t=new Array(n);a<n;a++)t[a]=e[a];return t}var A=function(e,n){var a,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"children",r=[];if(!Array.isArray(e))return a;var l,u=g(e);try{for(u.s();!(l=u.n()).done;){var o=l.value;for(r.push(o);r.length;){var i=r.pop();if(n(i)){a=i;break}if(R(i)){var c=i[t];Array.isArray(c)&&c.length>0&&r.push.apply(r,(0,C.Z)(c))}}if(a)break}}catch(e){u.e(e)}finally{u.f()}return a},N=a(4363),_=a(50107),I=["columnTitles","treeData","lastColumnMerged","halfToChecked","value","onChange","labelRender","fieldNames"];function y(e){return Array.isArray(e)&&e.length>0}var Z=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"children",a=[];function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];e.forEach((function(e){var l=[].concat(f()(r),[(0,N.Z)(e,[n])]);y(e[n])?t(e[n],l):a.push(l)}))}return t(e),a};function x(e){var n=JSON.parse(JSON.stringify(e)),a=[],t=new Set;for(var r in n)n[r].name=r,n[r].hasChildren||a.push(n[r]);function l(e){e.parent&&n[e.parent]&&(n[e.parent].len+=e.len-(t.has(e.name)?n[e.name].len:1),t.add(e.name),n[e.parent].parent&&l(n[e.parent]))}return a.forEach((function(e){l(e)})),n}function S(e,n,a){var t=a.value,r=a.children,l=A(e,(function(e){return e[t]===n}),r);return(null==l?void 0:l[r])||[]}var M=function(e){var n=e.columnTitles,a=void 0===n?[]:n,t=e.treeData,l=void 0===t?[]:t,o=e.lastColumnMerged,c=void 0!==o&&o,s=e.halfToChecked,C=void 0!==s&&s,O=(e.value,e.onChange,e.labelRender),R=e.fieldNames,g=u()(e,I),T=(0,b.Z)(d()({defaultValue:[]},e)),A=r()(T,2),M=A[0],D=A[1],P=(0,E.Z)([]),L=r()(P,2),k=L[0],w=L[1],j=(0,p.Z)(k),H=(0,p.Z)(M),U=v.useMemo((function(){return d()({label:"label",value:"value",children:"children"},R)}),[R]),Q=U.value,Y=U.label,K=U.children,V=v.useMemo((function(){return function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2?arguments[2]:void 0,t=a.value,r=a.children,l=Z(e,r),u=Math.max.apply(Math,f()(l.map((function(e){return e.length-1})))),o=[],c={};function s(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,f=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;e.forEach((function(e){var v,h,m=d()(d()({},a),{},i()({},"col".concat(f),(v={},i()(v,t,e[t]),i()(v,"parent",l),i()(v,"data",[(0,N.Z)(e,[r])]),v)));if(c[e[t]]||(c[e[t]]={len:(null===(h=e[r])||void 0===h?void 0:h.length)||1,parent:l}),y(e[r]))if(n&&u-1===f){var b;c[e[t]].len=1,c[e[t]].hasChildren=!1,o.push(d()(d()({},m),{},i()({key:"row_".concat(l,"_").concat(e[t])},"col".concat(f+1),(b={},i()(b,t,e[t]),i()(b,"parent",l),i()(b,"data",e[r]),b))))}else c[e[t]].hasChildren=!0,s(e[r],m,e[t],f+1);else o.push(d()(d()({},m),{},{key:"row_".concat(l,"_").concat(e[t])})),c[e[t]].hasChildren=!1}))}s(e),c=x(c);for(var v=[],h=[],m=0;m<=u;m++){h.push({dataIndex:"col".concat(m)});for(var b=0;b<o.length;b++)if(o[b]["col".concat(m)]){var E=o[b]["col".concat(m)][t],p=1;v.includes(E)?c[E].len>1&&(p=0):(v.push(E),p=c[E].len),o[b]["col".concat(m)]=d()(d()({},o[b]["col".concat(m)]),{},{rowSpan:p})}else{var C;o[b]["col".concat(m)]=(C={},i()(C,t,null),i()(C,"data",[]),i()(C,"rowSpan",1),C)}}return{columns:h,list:o}}(l,c,U)}),[c,l,U]),G=V.columns,B=V.list,z=v.useMemo((function(){return function(e,n){var a=n.value,t=n.children,r=[];return function e(n){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;n.forEach((function(n){var u;r.push(d()(d()({},n),{},i()({parent:(null==l?void 0:l[a])||null},t,(null==n||null===(u=n[t])||void 0===u?void 0:u.map((function(e){return(0,N.Z)(e,[t])})))||null))),y(n[t])&&e(n[t],(0,N.Z)(n,[t]))}))}(e),r}(l,U)}),[l,U]),q=v.useCallback((function(e,n,a){var t=new Set(n||[]),r=new Set(a||[]);var l=z.find((function(n){return n[Q]===e}));return null!=l&&l.parent&&function e(n){var a=z.find((function(e){return e[Q]===n}));if(a){var l,u=!1,o=!1,i=!0;null===(l=a[K])||void 0===l||l.forEach((function(e){e.disabled||(t.has(e[Q])?u=!0:(i=!1,r.has(e[Q])&&(o=!0)))})),i?(t.add(n),r.delete(n)):(t.delete(n),u||o?((C?t:r).add(n),(C?r:t).delete(n)):(C?t:r).delete(n)),a.parent&&e(a.parent)}}(l.parent),{checks:Array.from(t),indeterminates:Array.from(r)}}),[K,z,C,Q]),F=v.useCallback((function(e){var n=new Set(j.current),a=new Set(H.current),t=function(e,n){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],t=arguments.length>3?arguments[3]:void 0,r=t.children,l=[],u=S(e,n,t);function o(e){e.forEach((function(e){l.push((0,N.Z)(e,[r])),y(e[r])&&o(e[r])}))}return a?o(u):u.forEach((function(e){l.push((0,N.Z)(e,[r]))})),l}(l,e[Q],!0,U),r=e[Q],u=H.current.includes(r);u?a.delete(r):(a.add(r),n.delete(r)),t.forEach((function(e){u?H.current.find((function(n){return n===e[Q]}))&&a.delete(e[Q]):e.disabled||(a.add(e[Q]),n.delete(e[Q]))}));var o=q(e[Q],Array.from(a),Array.from(n)),i=o.checks,c=o.indeterminates;w(c),D(i)}),[U,q,l,Q]);v.useEffect((function(){var e=H.current,n=j.current;H.current.forEach((function(a){var t=q(a,e,n),r=t.checks,l=t.indeterminates;e=r,n=l})),D(e),w(n)}),[q]);var W=v.useMemo((function(){return G.map((function(e,n){return d()(d()({},e),{},{title:a[n]||"-",onCell:function(n){return{rowSpan:n[e.dataIndex].rowSpan}},render:function(n,a){var t=a[e.dataIndex];return t[Q]?t.data.map((function(e){return(0,_.jsx)(h.Z,{checked:M.includes(e[Q]),indeterminate:k.includes(e[Q]),onChange:function(){F(e)},disabled:e.disabled,children:O?O(e):e[Y]||e[Q]},e[Q])})):"-"}})}))}),[M,a,G,F,k,Y,O,Q]);return(0,_.jsx)(m.Z,d()({columns:W,dataSource:B,pagination:!1,bordered:!0},g))}},81952:function(e,n,a){a.d(n,{Z:function(){return u}});var t=a(17925),r=a.n(t),l=a(978);function u(){var e=l.useReducer((function(e){return e+1}),0);return r()(e,2)[1]}},28068:function(e,n,a){a.d(n,{Z:function(){return _}});var t=a(4143),r=a.n(t),l=a(17925),u=a.n(l),o=a(43655),i=a.n(o),c=a(17150),d=a(978),s=a(43016),f=a(5734),v=a(79489),h=a(43553),m=a(75567),b=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]])}return a},E=d.createContext(null),p=function(e,n){var a=e.defaultValue,t=e.children,l=e.options,o=void 0===l?[]:l,c=e.prefixCls,f=e.className,p=e.rootClassName,C=e.style,O=e.onChange,R=b(e,["defaultValue","children","options","prefixCls","className","rootClassName","style","onChange"]),g=d.useContext(s.E_),T=g.getPrefixCls,N=g.direction,_=d.useState(R.value||a||[]),I=u()(_,2),y=I[0],Z=I[1],x=d.useState([]),S=u()(x,2),M=S[0],D=S[1];d.useEffect((function(){"value"in R&&Z(R.value||[])}),[R.value]);var P=function(){return o.map((function(e){return"string"==typeof e||"number"==typeof e?{label:e,value:e}:e}))},L=T("checkbox",c),k="".concat(L,"-group"),w=(0,m.ZP)(L),j=u()(w,2),H=j[0],U=j[1],Q=(0,h.Z)(R,["value","disabled"]);o&&o.length>0&&(t=P().map((function(e){return d.createElement(A,{prefixCls:L,key:e.value.toString(),disabled:"disabled"in e?e.disabled:R.disabled,value:e.value,checked:y.includes(e.value),onChange:e.onChange,className:"".concat(k,"-item"),style:e.style},e.label)})));var Y={toggleOption:function(e){var n=y.indexOf(e.value),a=(0,v.Z)(y);-1===n?a.push(e.value):a.splice(n,1),"value"in R||Z(a);var t=P();null==O||O(a.filter((function(e){return M.includes(e)})).sort((function(e,n){return t.findIndex((function(n){return n.value===e}))-t.findIndex((function(e){return e.value===n}))})))},value:y,disabled:R.disabled,name:R.name,registerValue:function(e){D((function(n){return[].concat((0,v.Z)(n),[e])}))},cancelValue:function(e){D((function(n){return n.filter((function(n){return n!==e}))}))}},K=i()(k,r()({},"".concat(k,"-rtl"),"rtl"===N),f,p,U);return H(d.createElement("div",Object.assign({className:K,style:C},Q,{ref:n}),d.createElement(E.Provider,{value:Y},t)))},C=d.forwardRef(p),O=d.memo(C),R=a(54201),g=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]])}return a},T=function(e,n){var a,t,l=e.prefixCls,o=e.className,v=e.rootClassName,h=e.children,b=e.indeterminate,p=void 0!==b&&b,C=e.style,O=e.onMouseEnter,T=e.onMouseLeave,A=e.skipGroup,N=void 0!==A&&A,_=e.disabled,I=g(e,["prefixCls","className","rootClassName","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),y=d.useContext(s.E_),Z=y.getPrefixCls,x=y.direction,S=d.useContext(E),M=d.useContext(f.aM).isFormItemInput,D=d.useContext(R.Z),P=null!==(t=(null==S?void 0:S.disabled)||_)&&void 0!==t?t:D,L=d.useRef(I.value);d.useEffect((function(){null==S||S.registerValue(I.value)}),[]),d.useEffect((function(){if(!N)return I.value!==L.current&&(null==S||S.cancelValue(L.current),null==S||S.registerValue(I.value),L.current=I.value),function(){return null==S?void 0:S.cancelValue(I.value)}}),[I.value]);var k=Z("checkbox",l),w=(0,m.ZP)(k),j=u()(w,2),H=j[0],U=j[1],Q=Object.assign({},I);S&&!N&&(Q.onChange=function(){I.onChange&&I.onChange.apply(I,arguments),S.toggleOption&&S.toggleOption({label:h,value:I.value})},Q.name=S.name,Q.checked=S.value.includes(I.value));var Y=i()((a={},r()(a,"".concat(k,"-wrapper"),!0),r()(a,"".concat(k,"-rtl"),"rtl"===x),r()(a,"".concat(k,"-wrapper-checked"),Q.checked),r()(a,"".concat(k,"-wrapper-disabled"),P),r()(a,"".concat(k,"-wrapper-in-form-item"),M),a),o,v,U),K=i()(r()({},"".concat(k,"-indeterminate"),p),U),V=p?"mixed":void 0;return H(d.createElement("label",{className:Y,style:C,onMouseEnter:O,onMouseLeave:T},d.createElement(c.Z,Object.assign({"aria-checked":V},Q,{prefixCls:k,className:K,disabled:P,ref:n})),void 0!==h&&d.createElement("span",null,h)))};var A=d.forwardRef(T),N=A;N.Group=O,N.__ANT_CHECKBOX=!0;var _=N},9586:function(e,n,a){a.d(n,{Z:function(){return i}});var t=a(57174),r=a(978),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},u=a(66017),o=function(e,n){return r.createElement(u.Z,(0,t.Z)((0,t.Z)({},e),{},{ref:n,icon:l}))};o.displayName="CheckOutlined";var i=r.forwardRef(o)},71125:function(e,n,a){a.d(n,{Z:function(){return i}});var t=a(57174),r=a(978),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"},u=a(66017),o=function(e,n){return r.createElement(u.Z,(0,t.Z)((0,t.Z)({},e),{},{ref:n,icon:l}))};o.displayName="LeftOutlined";var i=r.forwardRef(o)},50744:function(e,n,a){a.d(n,{Z:function(){return i}});var t=a(57174),r=a(978),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"},u=a(66017),o=function(e,n){return r.createElement(u.Z,(0,t.Z)((0,t.Z)({},e),{},{ref:n,icon:l}))};o.displayName="RightOutlined";var i=r.forwardRef(o)},93886:function(e,n,a){var t=a(978);n.Z=function(e){var n=(0,t.useRef)(e);return n.current=e,n}},57869:function(e,n,a){var t=a(42210),r=a(978),l=a(8531);n.Z=function(e){var n=(0,l.Z)(),a=(0,t.CR)(r.useState(e),2),u=a[0],o=a[1];return[u,r.useCallback((function(e){n.current||o(e)}),[])]}},33648:function(e,n){n.Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;return new Promise((function(n){setTimeout(n,e)}))}},73508:function(e,n,a){function t(e,n,a){var t=(a||{}).atBegin;return function(e,n,a){var t,r=a||{},l=r.noTrailing,u=void 0!==l&&l,o=r.noLeading,i=void 0!==o&&o,c=r.debounceMode,d=void 0===c?void 0:c,s=!1,f=0;function v(){t&&clearTimeout(t)}function h(){for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];var o=this,c=Date.now()-f;function h(){f=Date.now(),n.apply(o,r)}function m(){t=void 0}s||(i||!d||t||h(),v(),void 0===d&&c>e?i?(f=Date.now(),u||(t=setTimeout(d?m:h,e))):h():!0!==u&&(t=setTimeout(d?m:h,void 0===d?e-c:e)))}return h.cancel=function(e){var n=(e||{}).upcomingOnly,a=void 0!==n&&n;v(),s=!a},h}(e,n,{debounceMode:!1!==(void 0!==t&&t)})}a.d(n,{D:function(){return t}})},61906:function(e,n,a){function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var a=0,t=new Array(n);a<n;a++)t[a]=e[a];return t}a.d(n,{Z:function(){return t}})},66537:function(e,n,a){a.d(n,{Z:function(){return r}});var t=a(61906);function r(e,n){if(e){if("string"==typeof e)return(0,t.Z)(e,n);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?(0,t.Z)(e,n):void 0}}}}]);