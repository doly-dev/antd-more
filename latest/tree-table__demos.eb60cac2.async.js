"use strict";(self.webpackChunkantd_more=self.webpackChunkantd_more||[]).push([[4449],{73589:function(e,n,a){a.r(n);var t=a(58015),r=a.n(t),l=a(48411),o=a.n(l),u=a(2488),i=a.n(u),c=a(978),d=a(10464),s=a(33648),f=a(70378),v=a(50107);n.default=function(){var e=c.useState([]),n=i()(e,2),a=n[0],t=n[1],l=c.useState(!0),u=i()(l,2),h=u[0],m=u[1],p=c.useState(["MERCHANT_ADD","MERCHANT_DETAIL"]),b=i()(p,2),E=b[0],g=b[1];return c.useEffect((function(){var e=function(){var e=o()(r()().mark((function e(){return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)();case 2:t(f.Z),m(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,v.jsx)(d.Z,{treeData:a,columnTitles:["一级菜单","二级菜单","操作"],lastColumnMerged:!0,value:E,onChange:function(e){console.log(e),g(e)},loading:h})}},36553:function(e,n,a){a.r(n),a.d(n,{default:function(){return b}});var t=a(2488),r=a.n(t),l=a(978),o=a(81884),u=a(22050),i=a(74342),c=a(67538),d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"}}]},name:"exclamation-circle",theme:"outlined"},s=a(55837),f=function(e,n){return l.createElement(s.Z,(0,c.Z)((0,c.Z)({},e),{},{ref:n,icon:d}))};f.displayName="ExclamationCircleOutlined";var v=l.forwardRef(f),h=a(10464),m=a(70378),p=a(50107),b=function(){var e=l.useState(!0),n=r()(e,2),a=n[0],t=n[1],c=l.useState(!1),d=r()(c,2),s=d[0],f=d[1],b=l.useState(["HOME","MERCHANT_LIST","MERCHANT_QUERY","MERCHANT_DETAIL","MERCHANT_ADD","MERCHANT"]),E=r()(b,2),g=E[0],C=E[1];return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(o.Z,{children:[(0,p.jsxs)("div",{children:["lastColumnMerged"," ",(0,p.jsx)(u.Z,{title:"最后一列合并展示",children:(0,p.jsx)(v,{})})," ",": ",(0,p.jsx)(i.Z,{checked:a,onChange:t})]}),(0,p.jsxs)("div",{children:["halfToChecked"," ",(0,p.jsx)(u.Z,{title:"半勾选转换为勾选，会影响onChange参数值",children:(0,p.jsx)(v,{})})," ",": ",(0,p.jsx)(i.Z,{checked:s,onChange:f})]})]}),(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),(0,p.jsx)(h.Z,{treeData:m.Z,columnTitles:["一级菜单","二级菜单","操作"],value:g,onChange:function(e){console.log(e),C(e)},lastColumnMerged:a,halfToChecked:s})]})}},99245:function(e,n,a){a.r(n);a(978);var t=a(25599),r=a(36462),l=a(24174),o=a(10464),u=a(70378),i=a(50107);n.default=function(){return(0,i.jsxs)(t.ZP,{name:"tree-table-bizform-1",initialValues:{roles:["HOME","MERCHANT_LIST","MERCHANT_QUERY","MERCHANT_DETAIL","MERCHANT_ADD","MERCHANT"]},onFinish:function(e){console.log(e)},layout:"vertical",children:[(0,i.jsx)(r.Z,{label:"角色名称",name:"roleName"}),(0,i.jsx)(l.Z,{label:"角色权限",name:"roles",children:(0,i.jsx)(o.Z,{treeData:u.Z,columnTitles:["一级菜单","二级菜单","操作"],lastColumnMerged:!0})})]})}},8730:function(e,n,a){a.r(n),a.d(n,{default:function(){return u}});a(978);var t=a(10464),r=a(70378),l="X1NI0u4WW2EKmLDw21Wq",o=a(50107);var u=function(){return(0,o.jsx)(t.Z,{treeData:r.Z,columnTitles:["一级菜单","二级菜单","操作"],lastColumnMerged:!0,halfToChecked:!0,className:l,size:"small"})}},86805:function(e,n,a){a.r(n),a.d(n,{default:function(){return c}});var t=a(2488),r=a.n(t),l=a(978),o=a(10464),u=[{name:"首页",code:"HOME"},{name:"商户管理",code:"MERCHANT",childs:[{name:"商户查询",code:"MERCHANT_LIST"}]},{name:"交易管理",code:"TRADE",childs:[{name:"交易查询",code:"TRADE_LIST"},{name:"交易配置",code:"TRADE_CONFIG"}]},{name:"风控管理",code:"RISK",childs:[{code:"RISK_LIST",name:"风控记录查询"}]},{name:"对账管理",code:"RECON",childs:[{code:"RECON_OPERATION",name:"运营机构对账"}]},{name:"运营平台管理",code:"OPERATION",childs:[{code:"OPERATION_ROLE",name:"角色管理"},{code:"OPERATION_ACCOUNT",name:"账号管理"},{code:"OPERATION_LOG",name:"日志管理"}]}],i=a(50107),c=function(){var e=l.useState([]),n=r()(e,2),a=n[0],t=n[1];return(0,i.jsx)(o.Z,{treeData:u,columnTitles:["一级菜单","二级菜单"],value:a,onChange:function(e){console.log(e),t(e)},fieldNames:{label:"name",value:"code",children:"childs"}})}},16146:function(e,n,a){a.r(n),a.d(n,{default:function(){return c}});var t=a(2488),r=a.n(t),l=a(978),o=a(10464),u=[{label:"首页",value:"HOME"},{label:"商户管理",value:"MERCHANT",children:[{label:"商户查询",value:"MERCHANT_LIST"}]},{label:"交易管理",value:"TRADE",children:[{label:"交易查询",value:"TRADE_LIST"},{label:"交易配置",value:"TRADE_CONFIG"}]},{label:"风控管理",value:"RISK",children:[{value:"RISK_LIST",label:"风控记录查询"}]},{label:"对账管理",value:"RECON",children:[{value:"RECON_OPERATION",label:"运营机构对账"}]},{label:"运营平台管理",value:"OPERATION",children:[{value:"OPERATION_ROLE",label:"角色管理"},{value:"OPERATION_ACCOUNT",label:"账号管理"},{value:"OPERATION_LOG",label:"日志管理"}]}],i=a(50107),c=function(){var e=l.useState([]),n=r()(e,2),a=n[0],t=n[1];return(0,i.jsx)(o.Z,{treeData:u,columnTitles:["一级菜单","二级菜单"],value:a,onChange:function(e){console.log(e),t(e)}})}},44365:function(e,n,a){a.r(n),a.d(n,{default:function(){return c}});var t=a(2488),r=a.n(t),l=a(978),o=a(10464),u=[{label:"首页",value:"HOME"},{label:"商户管理",value:"MERCHANT",children:[{label:"商户查询",value:"MERCHANT_LIST",children:[{label:"商户查询",value:"MERCHANT_QUERY",children:[{label:"操作1",value:"MERCHANT_QUERY_ACTION1"},{label:"操作2",value:"MERCHANT_QUERY_ACTION2"}]},{label:"查看商户详情",value:"MERCHANT_DETAIL"},{label:"新增商户",value:"MERCHANT_ADD"}]}]},{label:"交易管理",value:"TRADE",children:[{label:"交易查询",value:"TRADE_LIST",children:[{label:"交易查询",value:"TRADE_QUERY"},{label:"交易详情",value:"TRADE_DETAIL"}]}]},{label:"风控管理",value:"RISK",children:[{value:"RISK_LIST",label:"风控记录查询",children:[{value:"RISK_QUERY",label:"风控记录查询"},{value:"RISK_DETAIL",label:"查看商户详情"},{value:"RISK_ADD",label:"新增商户处罚管理"}]}]},{label:"对账管理",value:"RECON",children:[{value:"RECON_OPERATION",label:"运营机构对账",children:[{value:"RECON_OPERATION_QUERY",label:"对账记录查询"}]}]},{label:"运营平台管理",value:"OPERATION",children:[{value:"OPERATION_ROLE",label:"角色管理",children:[{value:"OPERATION_ROLE_ADD",label:"新增角色"},{value:"OPERATION_ROLE_UPDATE",label:"修改角色"},{value:"OPERATION_ROLE_QUERY",label:"查询角色列表",disabled:!0}]},{value:"OPERATION_ACCOUNT",label:"账号管理",children:[{value:"OPERATION_ACCOUNT_QUERY",label:"账号查询"},{value:"OPERATION_ACCOUNT_ADD",label:"新增账号"},{value:"OPERATION_ACCOUNT_UPDATE",label:"编辑账号"}]},{value:"OPERATION_LOG",label:"日志管理",children:[{value:"OPERATION_LOG_QUERY",label:"日志查询"}]}]}],i=a(50107),c=function(){var e=l.useState([]),n=r()(e,2),a=n[0],t=n[1];return(0,i.jsx)(o.Z,{treeData:u,columnTitles:["一级菜单","二级菜单"],lastColumnMerged:!0,value:a,onChange:function(e){console.log(e),t(e)}})}},64915:function(e,n,a){a.d(n,{KB:function(){return u},d8:function(){return i},k6:function(){return o},q_:function(){return c}});var t=a(31671),r=a(35309),l=a(44278),o=function(e){return(0,t.Z)(e).trim()},u=function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=(0,t.Z)(e),l=/[^\d]/g,o=a.replace(l,"");return n?(0,r.Z)(o):o},i=function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=(0,t.Z)(e),r=/[^\dx]/gi,l=a.replace(r,"").substring(0,18);return n?l.toUpperCase():l},c=function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=(0,t.Z)(e),r=/[^\d]/g,o=a.replace(r,"");return n?(0,l.Z)(o):o}},36462:function(e,n,a){a.d(n,{Z:function(){return T}});var t=a(71402),r=a.n(t),l=a(64123),o=a.n(l),u=a(978),i=a(2021),c=a(43673),d=a(38033),s=a(59879),f=a(24174),v=a(14748),h=a(43434),m=a(64915),p=a(50107),b=["value","onChange","type","disabledWhiteSpace","format","maxLength"],E=function(e){var n=e.value,a=e.onChange,t=e.type,l=e.disabledWhiteSpace,i=e.format,c=void 0===i||i,d=e.maxLength,s=o()(e,b),f=u.useMemo((function(){if(void 0!==d)return d;if(!c){if("mobile"===t)return 11;if("idCard"===t)return 18}}),[c,d,t]),E=u.useMemo((function(){return"bankCard"===t||"mobile"===t||"idCard"===t||"email"===t||"userName"===t?"text":t}),[t]),g=u.useMemo((function(){return c&&("bankCard"===t||"mobile"===t||"idCard"===t||"email"===t||"userName"===t||l)}),[c,t,l]),C=u.useMemo((function(){var e={};return"bankCard"===t?e.type="bankCard":"mobile"===t?e.type="mobile":"idCard"===t?(e.maskReg=/[^\dx]/gi,e.placeholderChars=[]):("email"===t||"userName"===t||l)&&(e.maskReg=/\s/g,e.placeholderChars=[]),e}),[l,t]),O=u.useCallback((function(e){return"bankCard"===t?(0,m.KB)(e,c):"mobile"===t?(0,m.q_)(e,c):"idCard"===t?(0,m.d8)(e,c):"email"===t||"userName"===t||l?(0,m.k6)(e):e}),[l,c,t]),T=u.useCallback((function(e){var t=e.target,r=t.selectionEnd,l=t.value,o=O(l);if(null==a||a(o),g){var u=(0,h.Z)(r,n,l,o,C);l!==o?setTimeout((function(){t.selectionStart=t.selectionEnd=u})):t.selectionStart=t.selectionEnd=u}}),[C,g,O,a,n]);return u.useEffect((function(){if(n&&g){var e=O(n);e!==n&&(null==a||a(e))}}),[g,O,a,n]),(0,p.jsx)(v.Z,r()({value:n,onChange:T,type:E,maxLength:f},s))},g=a(79969),C=["placeholder","allowClear","maxLength","type","disabledWhiteSpace","inputProps","required","transform","format"],O={bankCard:function(e){return(0,c.Z)(e,{loose:!0})},email:d.Z,idCard:function(e){return(0,s.Z)(e,{loose:!0})},mobile:i.Z},T=function(e){var n=e.placeholder,a=void 0===n?"请输入":n,t=e.allowClear,l=e.maxLength,c=e.type,d=e.disabledWhiteSpace,s=e.inputProps,v=void 0===s?{}:s,h=e.required,m=void 0!==h&&h,b=e.transform,T=e.format,R=void 0===T||T,A=o()(e,C),N=u.useMemo((function(){return"bankCard"===c||"idCard"===c||"mobile"===c||"userName"===c||"email"===c}),[c]),y=u.useCallback((function(e){return b?b(e):!R||"bankCard"!==c&&"mobile"!==c?e:null==e?void 0:e.replace(/\D/g,"")}),[R,b,c]),_=(0,g.Z)(A);return(0,p.jsx)(f.Z,r()(r()({required:m,rules:[{validator:function(e,n){var a="";return n?"userName"===c?a=function(e,n){var a=n.label,t={validated:!0,message:""};return(0,i.Z)(e)?t.message="".concat(a,"不能为手机号码"):e.indexOf("@")>-1&&(t.message="".concat(a,"不能包含@符号")),t.message&&(t.validated=!1),t}(n,{label:_}).message:O[c]&&!O[c](n)&&(a="请输入正确的".concat(_)):a=m?"请输入".concat(_):"",a?Promise.reject(a):Promise.resolve()},transform:y}],transform:y,validateTrigger:N?"onBlur":"onChange"},A),{},{children:(0,p.jsx)(E,r()({placeholder:a,allowClear:t,maxLength:l,autoComplete:"off",type:c,disabledWhiteSpace:d,format:R},v))}))}},25599:function(e,n,a){var t=a(14809);n.ZP=t.Z},70378:function(e,n){n.Z=[{label:"首页",value:"HOME"},{label:"商户管理",value:"MERCHANT",children:[{label:"商户查询",value:"MERCHANT_LIST",children:[{label:"商户查询",value:"MERCHANT_QUERY"},{label:"查看商户详情",value:"MERCHANT_DETAIL"},{label:"新增商户",value:"MERCHANT_ADD"}]}]},{label:"交易管理",value:"TRADE",children:[{label:"交易查询",value:"TRADE_LIST",children:[{label:"交易查询",value:"TRADE_QUERY"},{label:"交易详情",value:"TRADE_DETAIL"}]}]},{label:"风控管理",value:"RISK",children:[{value:"RISK_LIST",label:"风控记录查询",children:[{value:"RISK_QUERY",label:"风控记录查询"},{value:"RISK_DETAIL",label:"查看商户详情"},{value:"RISK_ADD",label:"新增商户处罚管理"}]}]},{label:"对账管理",value:"RECON",children:[{value:"RECON_OPERATION",label:"运营机构对账",children:[{value:"RECON_OPERATION_QUERY",label:"对账记录查询"}]}]},{label:"运营平台管理",value:"OPERATION",children:[{value:"OPERATION_ROLE",label:"角色管理",children:[{value:"OPERATION_ROLE_ADD",label:"新增角色"},{value:"OPERATION_ROLE_UPDATE",label:"修改角色"},{value:"OPERATION_ROLE_QUERY",label:"查询角色列表",disabled:!0}]},{value:"OPERATION_ACCOUNT",label:"账号管理",children:[{value:"OPERATION_ACCOUNT_QUERY",label:"账号查询"},{value:"OPERATION_ACCOUNT_ADD",label:"新增账号"},{value:"OPERATION_ACCOUNT_UPDATE",label:"编辑账号"}]},{value:"OPERATION_LOG",label:"日志管理",children:[{value:"OPERATION_LOG_QUERY",label:"日志查询"}]}]}]},10464:function(e,n,a){a.d(n,{Z:function(){return x}});var t=a(2488),r=a.n(t),l=a(64123),o=a.n(l),u=a(49051),i=a.n(u),c=a(71402),d=a.n(c),s=a(98235),f=a.n(s),v=a(978),h=a(28068),m=a(84814),p=a(57957),b=a(57869),E=a(93886),g=a(96103),C=a(36046);var O=function(e){var n=(0,C.Z)(e);return null!=e&&("object"===n||"function"===n)};function T(e,n){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,n){if(!e)return;if("string"==typeof e)return R(e,n);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return R(e,n)}(e))||n&&e&&"number"==typeof e.length){a&&(e=a);var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,o=!0,u=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return o=e.done,e},e:function(e){u=!0,l=e},f:function(){try{o||null==a.return||a.return()}finally{if(u)throw l}}}}function R(e,n){(null==n||n>e.length)&&(n=e.length);for(var a=0,t=new Array(n);a<n;a++)t[a]=e[a];return t}var A=function(e,n){var a,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"children",r=[];if(!Array.isArray(e))return a;var l,o=T(e);try{for(o.s();!(l=o.n()).done;){var u=l.value;for(r.push(u);r.length;){var i=r.pop();if(n(i)){a=i;break}if(O(i)){var c=i[t];Array.isArray(c)&&c.length>0&&r.push.apply(r,(0,g.Z)(c))}}if(a)break}}catch(e){o.e(e)}finally{o.f()}return a},N=a(4363),y=a(46880),_=a(50107),I=["columnTitles","treeData","lastColumnMerged","halfToChecked","value","onChange","labelRender","fieldNames"],Z=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"children",a=[];function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];e.forEach((function(e){var l=[].concat(f()(r),[(0,N.Z)(e,[n])]);(0,y.Z)(e[n])?t(e[n],l):a.push(l)}))}return t(e),a};function S(e){var n=JSON.parse(JSON.stringify(e)),a=[],t=new Set;for(var r in n)n[r].name=r,n[r].hasChildren||a.push(n[r]);function l(e){e.parent&&n[e.parent]&&(n[e.parent].len+=e.len-(t.has(e.name)?n[e.name].len:1),t.add(e.name),n[e.parent].parent&&l(n[e.parent]))}return a.forEach((function(e){l(e)})),n}function M(e,n,a){var t=a.value,r=a.children,l=A(e,(function(e){return e[t]===n}),r);return(null==l?void 0:l[r])||[]}var x=function(e){var n=e.columnTitles,a=void 0===n?[]:n,t=e.treeData,l=void 0===t?[]:t,u=e.lastColumnMerged,c=void 0!==u&&u,s=e.halfToChecked,g=void 0!==s&&s,C=(e.value,e.onChange,e.labelRender),O=e.fieldNames,T=o()(e,I),R=(0,p.Z)(d()({defaultValue:[]},e)),A=r()(R,2),x=A[0],D=A[1],P=(0,b.Z)([]),w=r()(P,2),L=w[0],k=w[1],j=(0,E.Z)(L),H=(0,E.Z)(x),U=v.useMemo((function(){return d()({label:"label",value:"value",children:"children"},O)}),[O]),K=U.value,Y=U.label,Q=U.children,V=v.useMemo((function(){return function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2?arguments[2]:void 0,t=a.value,r=a.children,l=Z(e,r),o=Math.max.apply(Math,f()(l.map((function(e){return e.length-1})))),u=[],c={};function s(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,f=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;e.forEach((function(e){var v,h,m=d()(d()({},a),{},i()({},"col".concat(f),(v={},i()(v,t,e[t]),i()(v,"parent",l),i()(v,"data",[(0,N.Z)(e,[r])]),v)));if(c[e[t]]||(c[e[t]]={len:(null===(h=e[r])||void 0===h?void 0:h.length)||1,parent:l}),(0,y.Z)(e[r]))if(n&&o-1===f){var p;c[e[t]].len=1,c[e[t]].hasChildren=!1,u.push(d()(d()({},m),{},i()({key:"row_".concat(l,"_").concat(e[t])},"col".concat(f+1),(p={},i()(p,t,e[t]),i()(p,"parent",l),i()(p,"data",e[r]),p))))}else c[e[t]].hasChildren=!0,s(e[r],m,e[t],f+1);else u.push(d()(d()({},m),{},{key:"row_".concat(l,"_").concat(e[t])})),c[e[t]].hasChildren=!1}))}s(e),c=S(c);for(var v=[],h=[],m=0;m<=o;m++){h.push({dataIndex:"col".concat(m)});for(var p=0;p<u.length;p++)if(u[p]["col".concat(m)]){var b=u[p]["col".concat(m)][t],E=1;v.includes(b)?c[b].len>1&&(E=0):(v.push(b),E=c[b].len),u[p]["col".concat(m)]=d()(d()({},u[p]["col".concat(m)]),{},{rowSpan:E})}else{var g;u[p]["col".concat(m)]=(g={},i()(g,t,null),i()(g,"data",[]),i()(g,"rowSpan",1),g)}}return{columns:h,list:u}}(l,c,U)}),[c,l,U]),G=V.columns,B=V.list,W=v.useMemo((function(){return function(e,n){var a=n.value,t=n.children,r=[];return function e(n){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;n.forEach((function(n){var o;r.push(d()(d()({},n),{},i()({parent:(null==l?void 0:l[a])||null},t,(null==n||null===(o=n[t])||void 0===o?void 0:o.map((function(e){return(0,N.Z)(e,[t])})))||null))),(0,y.Z)(n[t])&&e(n[t],(0,N.Z)(n,[t]))}))}(e),r}(l,U)}),[l,U]),z=v.useCallback((function(e,n,a){var t=new Set(n||[]),r=new Set(a||[]);var l=W.find((function(n){return n[K]===e}));return null!=l&&l.parent&&function e(n){var a=W.find((function(e){return e[K]===n}));if(a){var l,o=!1,u=!1,i=!0;null===(l=a[Q])||void 0===l||l.forEach((function(e){e.disabled||(t.has(e[K])?o=!0:(i=!1,r.has(e[K])&&(u=!0)))})),i?(t.add(n),r.delete(n)):(t.delete(n),o||u?((g?t:r).add(n),(g?r:t).delete(n)):(g?t:r).delete(n)),a.parent&&e(a.parent)}}(l.parent),{checks:Array.from(t),indeterminates:Array.from(r)}}),[Q,W,g,K]),F=v.useCallback((function(e){var n=new Set(j.current),a=new Set(H.current),t=function(e,n){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],t=arguments.length>3?arguments[3]:void 0,r=t.children,l=[],o=M(e,n,t);function u(e){e.forEach((function(e){l.push((0,N.Z)(e,[r])),(0,y.Z)(e[r])&&u(e[r])}))}return a?u(o):o.forEach((function(e){l.push((0,N.Z)(e,[r]))})),l}(l,e[K],!0,U),r=e[K],o=H.current.includes(r);o?a.delete(r):(a.add(r),n.delete(r)),t.forEach((function(e){o?H.current.find((function(n){return n===e[K]}))&&a.delete(e[K]):e.disabled||(a.add(e[K]),n.delete(e[K]))}));var u=z(e[K],Array.from(a),Array.from(n)),i=u.checks,c=u.indeterminates;k(c),D(i)}),[U,z,l,K]);v.useEffect((function(){var e=H.current,n=j.current;H.current.forEach((function(a){var t=z(a,e,n),r=t.checks,l=t.indeterminates;e=r,n=l})),D(e),k(n)}),[z]);var q=v.useMemo((function(){return G.map((function(e,n){return d()(d()({},e),{},{title:a[n]||"-",onCell:function(n){return{rowSpan:n[e.dataIndex].rowSpan}},render:function(n,a){var t=a[e.dataIndex];return t[K]?t.data.map((function(e){return(0,_.jsx)(h.Z,{checked:x.includes(e[K]),indeterminate:L.includes(e[K]),onChange:function(){F(e)},disabled:e.disabled,children:C?C(e):e[Y]||e[K]},e[K])})):"-"}})}))}),[x,a,G,F,L,Y,C,K]);return(0,_.jsx)(m.Z,d()({columns:q,dataSource:B,pagination:!1,bordered:!0},T))}},46880:function(e,n){n.Z=function(e){return Array.isArray(e)&&e.length>0}},81952:function(e,n,a){a.d(n,{Z:function(){return o}});var t=a(2488),r=a.n(t),l=a(978);function o(){var e=l.useReducer((function(e){return e+1}),0);return r()(e,2)[1]}},28068:function(e,n,a){a.d(n,{Z:function(){return y}});var t=a(49051),r=a.n(t),l=a(2488),o=a.n(l),u=a(43655),i=a.n(u),c=a(17739),d=a(978),s=a(43016),f=a(5734),v=a(96103),h=a(7884),m=a(75567),p=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]])}return a},b=d.createContext(null),E=function(e,n){var a=e.defaultValue,t=e.children,l=e.options,u=void 0===l?[]:l,c=e.prefixCls,f=e.className,E=e.rootClassName,g=e.style,C=e.onChange,O=p(e,["defaultValue","children","options","prefixCls","className","rootClassName","style","onChange"]),T=d.useContext(s.E_),R=T.getPrefixCls,N=T.direction,y=d.useState(O.value||a||[]),_=o()(y,2),I=_[0],Z=_[1],S=d.useState([]),M=o()(S,2),x=M[0],D=M[1];d.useEffect((function(){"value"in O&&Z(O.value||[])}),[O.value]);var P=function(){return u.map((function(e){return"string"==typeof e||"number"==typeof e?{label:e,value:e}:e}))},w=R("checkbox",c),L="".concat(w,"-group"),k=(0,m.ZP)(w),j=o()(k,2),H=j[0],U=j[1],K=(0,h.Z)(O,["value","disabled"]);u&&u.length>0&&(t=P().map((function(e){return d.createElement(A,{prefixCls:w,key:e.value.toString(),disabled:"disabled"in e?e.disabled:O.disabled,value:e.value,checked:I.includes(e.value),onChange:e.onChange,className:"".concat(L,"-item"),style:e.style},e.label)})));var Y={toggleOption:function(e){var n=I.indexOf(e.value),a=(0,v.Z)(I);-1===n?a.push(e.value):a.splice(n,1),"value"in O||Z(a);var t=P();null==C||C(a.filter((function(e){return x.includes(e)})).sort((function(e,n){return t.findIndex((function(n){return n.value===e}))-t.findIndex((function(e){return e.value===n}))})))},value:I,disabled:O.disabled,name:O.name,registerValue:function(e){D((function(n){return[].concat((0,v.Z)(n),[e])}))},cancelValue:function(e){D((function(n){return n.filter((function(n){return n!==e}))}))}},Q=i()(L,r()({},"".concat(L,"-rtl"),"rtl"===N),f,E,U);return H(d.createElement("div",Object.assign({className:Q,style:g},K,{ref:n}),d.createElement(b.Provider,{value:Y},t)))},g=d.forwardRef(E),C=d.memo(g),O=a(54201),T=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]])}return a},R=function(e,n){var a,t,l=e.prefixCls,u=e.className,v=e.rootClassName,h=e.children,p=e.indeterminate,E=void 0!==p&&p,g=e.style,C=e.onMouseEnter,R=e.onMouseLeave,A=e.skipGroup,N=void 0!==A&&A,y=e.disabled,_=T(e,["prefixCls","className","rootClassName","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),I=d.useContext(s.E_),Z=I.getPrefixCls,S=I.direction,M=d.useContext(b),x=d.useContext(f.aM).isFormItemInput,D=d.useContext(O.Z),P=null!==(t=(null==M?void 0:M.disabled)||y)&&void 0!==t?t:D,w=d.useRef(_.value);d.useEffect((function(){null==M||M.registerValue(_.value)}),[]),d.useEffect((function(){if(!N)return _.value!==w.current&&(null==M||M.cancelValue(w.current),null==M||M.registerValue(_.value),w.current=_.value),function(){return null==M?void 0:M.cancelValue(_.value)}}),[_.value]);var L=Z("checkbox",l),k=(0,m.ZP)(L),j=o()(k,2),H=j[0],U=j[1],K=Object.assign({},_);M&&!N&&(K.onChange=function(){_.onChange&&_.onChange.apply(_,arguments),M.toggleOption&&M.toggleOption({label:h,value:_.value})},K.name=M.name,K.checked=M.value.includes(_.value));var Y=i()((a={},r()(a,"".concat(L,"-wrapper"),!0),r()(a,"".concat(L,"-rtl"),"rtl"===S),r()(a,"".concat(L,"-wrapper-checked"),K.checked),r()(a,"".concat(L,"-wrapper-disabled"),P),r()(a,"".concat(L,"-wrapper-in-form-item"),x),a),u,v,U),Q=i()(r()({},"".concat(L,"-indeterminate"),E),U),V=E?"mixed":void 0;return H(d.createElement("label",{className:Y,style:g,onMouseEnter:C,onMouseLeave:R},d.createElement(c.Z,Object.assign({"aria-checked":V},K,{prefixCls:L,className:Q,disabled:P,ref:n})),void 0!==h&&d.createElement("span",null,h)))};var A=d.forwardRef(R),N=A;N.Group=C,N.__ANT_CHECKBOX=!0;var y=N},9586:function(e,n,a){a.d(n,{Z:function(){return i}});var t=a(67538),r=a(978),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},o=a(7381),u=function(e,n){return r.createElement(o.Z,(0,t.Z)((0,t.Z)({},e),{},{ref:n,icon:l}))};u.displayName="CheckOutlined";var i=r.forwardRef(u)},71125:function(e,n,a){a.d(n,{Z:function(){return i}});var t=a(67538),r=a(978),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"},o=a(7381),u=function(e,n){return r.createElement(o.Z,(0,t.Z)((0,t.Z)({},e),{},{ref:n,icon:l}))};u.displayName="LeftOutlined";var i=r.forwardRef(u)},50744:function(e,n,a){a.d(n,{Z:function(){return i}});var t=a(67538),r=a(978),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"},o=a(7381),u=function(e,n){return r.createElement(o.Z,(0,t.Z)((0,t.Z)({},e),{},{ref:n,icon:l}))};u.displayName="RightOutlined";var i=r.forwardRef(u)},93886:function(e,n,a){var t=a(978);n.Z=function(e){var n=(0,t.useRef)(e);return n.current=e,n}},57869:function(e,n,a){var t=a(42210),r=a(978),l=a(8531);n.Z=function(e){var n=(0,l.Z)(),a=(0,t.CR)(r.useState(e),2),o=a[0],u=a[1];return[o,r.useCallback((function(e){n.current||u(e)}),[])]}},36031:function(e,n,a){a.d(n,{g1:function(){return t},os:function(){return r}});function t(){return{width:document.documentElement.clientWidth,height:window.innerHeight||document.documentElement.clientHeight}}function r(e){var n=e.getBoundingClientRect(),a=document.documentElement;return{left:n.left+(window.pageXOffset||a.scrollLeft)-(a.clientLeft||document.body.clientLeft||0),top:n.top+(window.pageYOffset||a.scrollTop)-(a.clientTop||document.body.clientTop||0)}}},28833:function(e,n,a){a.d(n,{Z:function(){return i}});var t=a(67538),r="".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap"," ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/),l="aria-",o="data-";function u(e,n){return 0===e.indexOf(n)}function i(e){var n,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n=!1===a?{aria:!0,data:!0,attr:!0}:!0===a?{aria:!0}:(0,t.Z)({},a);var i={};return Object.keys(e).forEach((function(a){(n.aria&&("role"===a||u(a,l))||n.data&&u(a,o)||n.attr&&r.includes(a))&&(i[a]=e[a])})),i}},33648:function(e,n){n.Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;return new Promise((function(n){setTimeout(n,e)}))}},73508:function(e,n,a){function t(e,n,a){var t=(a||{}).atBegin;return function(e,n,a){var t,r=a||{},l=r.noTrailing,o=void 0!==l&&l,u=r.noLeading,i=void 0!==u&&u,c=r.debounceMode,d=void 0===c?void 0:c,s=!1,f=0;function v(){t&&clearTimeout(t)}function h(){for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];var u=this,c=Date.now()-f;function h(){f=Date.now(),n.apply(u,r)}function m(){t=void 0}s||(i||!d||t||h(),v(),void 0===d&&c>e?i?(f=Date.now(),o||(t=setTimeout(d?m:h,e))):h():!0!==o&&(t=setTimeout(d?m:h,void 0===d?e-c:e)))}return h.cancel=function(e){var n=(e||{}).upcomingOnly,a=void 0!==n&&n;v(),s=!a},h}(e,n,{debounceMode:!1!==(void 0!==t&&t)})}a.d(n,{D:function(){return t}})}}]);