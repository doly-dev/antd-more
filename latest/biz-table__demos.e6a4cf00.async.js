"use strict";(self.webpackChunkantd_more=self.webpackChunkantd_more||[]).push([[7423],{72959:function(e,t,a){a.r(t);var n=a(53359),r=a.n(n),i=(a(33056),a(35393)),l=a(90231),o=a(10712),u=["pageSize","current"],d=[{valueType:"indexBorder"},{dataIndex:"applyCode",title:"申请编号",tooltip:"提示文字",search:!0},{dataIndex:"createTime",title:"提交时间",valueType:"dateTime",search:{valueType:"date",order:1}},{dataIndex:"applicantName",title:"经办员"},{dataIndex:"approveTime",title:"审核时间",tooltip:"提示文字",sorter:!0,valueType:"dateTime",search:{valueType:"dateTimeRange",names:["startTime","endTime"],colProps:{lg:12,md:24},order:2}},{dataIndex:"approverName",title:"审核员",search:!0}];t.default=function(){return(0,o.jsx)(i.Z,{request:function(e,t,a,n){var i=e.pageSize,o=e.current,d=r()(e,u);return console.log(e,t,a,n),(0,l.s)({page:{pageSize:i,pageNum:o},data:d}).then((function(e){return{total:e.pageInfo.total,data:e.data}}))},columns:d,rowKey:"applyCode",toolbarAction:!0})}},16893:function(e,t,a){a.r(t);var n=a(53359),r=a.n(n),i=a(70832),l=a.n(i),o=a(33056),u=a(22438),d=a(40822),c=a(20936),p=a(94565),s=a(15425),m=a(35393),f=a(90231),v=a(42555),g=a(10712),x=["pageSize","current"],h=[{dataIndex:"applyCode",title:"申请编号",search:!0,table:!1},{dataIndex:"createTime",title:"提交时间",search:{valueType:"date"}},{dataIndex:"money",title:"金额",valueType:"money",align:"right",field:{formatValue:function(e){return(0,u.Z)(e,100)},prefix:"¥"}},{dataIndex:"approveTime",title:"审核时间",sorter:!0,valueType:"dateTime",search:{valueType:"dateTimeRange",names:["startTime","endTime"],colProps:{lg:12,md:24},order:1}},{dataIndex:"approverName",title:"审核员"},{dataIndex:"approveResult",title:"审核状态",filters:v.zq.map((function(e){return l()({text:e.label},e)})),valueType:"enumBadge",valueEnum:v.zq,search:{name:"approveStatus",all:!0,initialValue:""}}];t.default=function(){var e=o.useRef(),t=o.useRef(),a=o.useMemo((function(){return[].concat(h,[{title:"操作",render:function(){return(0,g.jsxs)(d.Z,{size:"middle",children:[(0,g.jsx)("a",{onClick:function(){var e;null===(e=t.current)||void 0===e||e.reload()},children:"reload"}),(0,g.jsx)("a",{onClick:function(){var e;null===(e=t.current)||void 0===e||e.submit()},children:"submit"}),(0,g.jsx)("a",{onClick:function(){var e;null===(e=t.current)||void 0===e||e.reset()},children:"reset"})]})}}])}),[]);return(0,g.jsx)(m.Z,{request:function(e,t,a,n){var i=e.pageSize,l=e.current,o=r()(e,x);return console.log(e,t,a,n),(0,f.s)({page:{pageSize:i,pageNum:l},data:o}).then((function(e){return{total:e.pageInfo.total,data:e.data}}))},columns:a,rowKey:"applyCode",pagination:{pageSize:5},formRef:e,actionRef:t,form:{submitter:{render:function(e,t){return(0,g.jsxs)(d.Z,{children:[t,(0,g.jsx)(c.ZP,{onClick:function(){return p.ZP.success("点击导出按钮")},children:"导出"},"export")]})}},defaultColsNumber:1},toolbar:(0,g.jsxs)(d.Z,{children:[(0,g.jsx)(c.ZP,{type:"primary",onClick:function(){return p.ZP.success("点击新增按钮")},children:"新增"}),(0,g.jsx)(c.ZP,{onClick:function(){e.current.setFieldsValue({applyCode:"12345"})},children:"赋值"})]}),toolbarAction:!0,fullScreenBackgroundColor:"rgba(0,0,0,0.1)",extra:(0,g.jsx)(s.Z,{bordered:!1,children:"Extra Block!"})})}},24380:function(e,t,a){a.r(t);var n=a(53359),r=a.n(n),i=(a(33056),a(35393)),l=a(90231),o=a(10712),u=["pageSize","current"],d=[{dataIndex:"applyCode",title:"申请编号"},{dataIndex:"createTime",title:"提交时间"},{dataIndex:"applicantName",title:"经办员"},{dataIndex:"approveTime",title:"审核时间",sorter:!0},{dataIndex:"approverName",title:"审核员"}];t.default=function(){return(0,o.jsx)(i.Z,{request:function(e,t,a,n){var i=e.pageSize,o=e.current,d=r()(e,u);return console.log(e,t,a,n),(0,l.s)({page:{pageSize:i,pageNum:o},data:d}).then((function(e){return{total:e.pageInfo.total,data:e.data}}))},columns:d,rowKey:"applyCode",pagination:{pageSize:5},compact:!0})}},5261:function(e,t,a){a.r(t);var n=a(53359),r=a.n(n),i=(a(33056),a(35393)),l=a(42899),o=a(90231),u=a(42555),d=a(10712),c=["pageSize","current"],p=(0,l.B8)({inland:!0,fieldNames:{code:"value",name:"label"}}),s=[{dataIndex:"applyCode",title:"申请编号",tooltip:"提示文字",search:!0},{dataIndex:"createTime",title:"提交时间",search:{itemType:"date"}},{dataIndex:"applicantName",title:"经办员"},{dataIndex:"dateTimeRange",title:"日期时间区间",tooltip:"提示文字",sorter:!0,search:{valueType:"dateTimeRange",names:["startTime","endTime"],initialValue:["2020-10-10 00:00:00","2020-11-11 11:11:11"],colProps:{lg:12,md:24},order:9},table:!1},{dataIndex:"approverName",title:"审核员",search:!0,table:!1},{dataIndex:"money",valueType:"money",title:"数字",search:!0,table:!1},{dataIndex:"color",valueType:"color",title:"颜色",search:!0,table:!1},{dataIndex:"select",valueType:"enum",valueEnum:u.zq,title:"选择器",search:{all:!0,initialValue:""},table:!1},{dataIndex:"radio",valueType:"enum",valueEnum:u.zq,title:"单选框",search:{itemType:"radio",all:!0,initialValue:"",colProps:{lg:24,md:24}},table:!1},{dataIndex:"checkbox",valueType:"enum",valueEnum:u.zq,title:"多选框",search:{itemType:"checkbox",all:!0,colProps:{lg:24,md:24}},table:!1},{dataIndex:"dateWeek",valueType:"dateWeek",title:"周",search:{order:1},table:!1},{dataIndex:"dateMonth",valueType:"dateMonth",title:"月",search:{order:2},table:!1},{dataIndex:"dateQuarter",valueType:"dateQuarter",title:"季",search:{order:3},table:!1},{dataIndex:"dateYear",valueType:"dateYear",title:"年",search:{order:4},table:!1},{dataIndex:"dateTime",valueType:"dateTime",title:"日期时间",search:{order:5},table:!1},{dataIndex:"time",valueType:"time",title:"时间",search:{order:6},table:!1},{dataIndex:"dateRange",valueType:"dateRange",title:"日期区间",search:{colProps:{lg:12,md:24},order:7},table:!1},{dataIndex:"timeRange",valueType:"timeRange",title:"时间区间",search:{colProps:{lg:12,md:24},order:8},table:!1},{dataIndex:"slider",title:"自定义滑动条",search:{itemType:"slider",order:10},table:!1},{dataIndex:"cascader",title:"省市",search:{itemType:"cascader",options:p,colProps:{lg:12,md:24},order:11},table:!1}];t.default=function(){return(0,d.jsx)(i.Z,{request:function(e,t,a,n){var i=e.pageSize,l=e.current,u=r()(e,c);return console.log(e,t,a,n),(0,o.s)({page:{pageSize:i,pageNum:l},data:u}).then((function(e){return{total:e.pageInfo.total,data:e.data}}))},columns:s,rowKey:"applyCode",pagination:{pageSize:5},form:{labelWidth:112}})}},44029:function(e,t,a){a.r(t);var n=a(29330),r=a.n(n),i=a(53359),l=a.n(i),o=a(67524),u=a.n(o),d=a(70832),c=a.n(d),p=a(67815),s=a.n(p),m=a(33056),f=a(35393),v=a(80741),g=a(90231),x=a(42555),h=a(10712),y=["pageSize","current"];function T(){return(T=s()(r()().mark((function e(){return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,v.Z)(5e3);case 2:return e.abrupt("return",{applyCode:"123456",createTime:"2020-10-10",approveResult:x.GZ.Processing});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I=[{dataIndex:"applyCode",title:"申请编号",search:!0},{dataIndex:"createTime",title:"提交时间",sorter:!0,search:{valueType:"date"}},{dataIndex:"approveResult",title:"审核状态",filters:x.zq.map((function(e){return c()({text:e.label},e)})),valueType:"enumBadge",valueEnum:x.zq,search:{all:!0}}];t.default=function(){var e=m.useState(!1),t=u()(e,2),a=t[0],n=t[1],r=m.useState(),i=u()(r,2),o=i[0],d=i[1];return m.useEffect((function(){(function(){return T.apply(this,arguments)})().then((function(e){d(e),n(!0)}))}),[]),(0,h.jsx)(f.Z,{request:function(e,t,a,n){var r=e.pageSize,i=e.current,o=l()(e,y);return console.log(e,t,a,n),(0,g.s)({page:{pageSize:r,pageNum:i},data:o}).then((function(e){return{total:e.pageInfo.total,data:e.data}}))},columns:I,rowKey:"applyCode",ready:a,form:{initialValues:o}})}},26153:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var n=a(53359),r=a.n(n),i=(a(33056),a(35393)),l=a(1691),o=a(22438),u=a(90713),d=a(29221),c=a(10712);function p(e){var t="string"==typeof e&&e.indexOf("\n")>-1?(0,c.jsx)(c.Fragment,{children:e.split("\n").map((function(e){return(0,c.jsx)("div",{style:{marginBottom:5},children:e},e)}))}):e;return(0,c.jsx)(d.Z.Text,{style:{maxWidth:160,color:"gray"},ellipsis:{tooltip:t},children:t||"-"})}var s=a(90231),m=a(42555),f=["pageSize","current"],v=[{valueType:"indexBorder"},{dataIndex:"applyCode",title:"申请编号",tooltip:"提示文字"},{dataIndex:"money",title:"金额",align:"right",render:function(e){return"number"==typeof e&&!isNaN(e)||e&&"string"==typeof e?"¥".concat((0,l.Z)((0,o.Z)(e,100))):"-"}},{dataIndex:"createTime",title:"提交时间",field:{valueType:"text",whitespaceLineBreak:!0},search:{valueType:"date",order:1}},{dataIndex:"applicantName",title:"经办员",search:!0},{dataIndex:"approveTime",title:"审核时间",tooltip:"提示文字",sorter:!0,valueType:"dateTime",field:{valueType:"text",whitespaceLineBreak:!0}},{dataIndex:"approveResult",title:"审核状态",render:function(e,t){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return(0,c.jsxs)("div",{children:[(0,c.jsx)(u.Z,{value:e,valueType:"enumBadge",valueEnum:t}),a&&(0,c.jsx)("div",{children:p(a)})]})}(e,m.zq,e===m.GZ.Refused&&t.remark?t.remark:"")}}],g=function(){return(0,c.jsx)(i.Z,{request:function(e,t,a,n){var i=e.pageSize,l=e.current,o=r()(e,f);return console.log(e,t,a,n),(0,s.s)({page:{pageSize:i,pageNum:l},data:o}).then((function(e){return{total:e.pageInfo.total,data:e.data}}))},columns:v,rowKey:"applyCode",pagination:{pageSize:5}})}},95474:function(e,t,a){a.r(t);var n=a(53359),r=a.n(n),i=(a(33056),a(55716)),l=a(52741),o=a(9014),u=a(35393),d=a(90231),c=a(10712),p=["pageSize","current"],s=[{dataIndex:"applyCode",title:"申请编号",tooltip:"提示文字"},{dataIndex:"createTime",title:"提交时间"},{dataIndex:"applicantName",title:"经办员"},{dataIndex:"approveTime",title:"审核时间",tooltip:"提示文字",sorter:!0},{dataIndex:"approverName",title:"审核员"}];t.default=function(){var e=[(0,c.jsx)(i.Z,{name:"applyCode",label:"申请编号"},"applyCode"),(0,c.jsx)(l.Z,{name:"createTime",label:"提交时间"},"createTime"),(0,c.jsx)(i.Z,{name:"approverName",label:"审核员"},"approveName"),(0,c.jsx)(o.Z,{name:"approveTime",names:["startTime","endTime"],showTime:!0,label:"审核时间",colProps:{lg:12,md:24}},"approveTime")];return(0,c.jsx)(u.Z,{request:function(e,t,a,n){var i=e.pageSize,l=e.current,o=r()(e,p);return console.log(e,t,a,n),(0,d.s)({page:{pageSize:i,pageNum:l},data:o}).then((function(e){return{total:e.pageInfo.total,data:e.data}}))},columns:s,rowKey:"applyCode",formItems:e})}},64479:function(e,t,a){a.r(t),a.d(t,{default:function(){return A}});var n=a(67524),r=a.n(n),i=a(12559),l=a.n(i),o=a(53359),u=a.n(o),d=a(29330),c=a.n(d),p=a(70832),s=a.n(p),m=a(67815),f=a.n(m),v=a(33056),g=a(94565),x=a(20936),h=a(35393),y=a(1995),T=a(4003),I=a.n(T),b=a(80741),N=a(89448),Z=a(64923),C=a(42354),z=a.n(C),j="VaMgH6DrCkCYYvfRlxML",S="tjmpkbbSMvkk04ObtrzK",R=a(10712),k=["id","freight","freightRule","onChange","className"],w=function(e){return e.Need="0",e.No="1",e.NoExpress="2",e}({}),q=[{label:"包邮",value:w.No},{label:"不包邮",value:w.Need},{label:"不配送",value:w.NoExpress}],P=function(e){var t=e.id,a=e.freight,n=e.freightRule,i=e.onChange,l=e.className,o=u()(e,k),d=v.useRef(null),c=v.useState(a),p=r()(c,2),m=p[0],f=p[1],g=v.useCallback((function(e){var a=e.target.value,n=a!==w.Need?0:m;f(n),null==i||i({id:t,freightRule:a,freight:n}),a===w.Need&&d&&setTimeout((function(){var e;null===(e=d.current)||void 0===e||e.focus()}),0)}),[m,t,i]),x=v.useCallback((function(e){f(e),null==i||i({id:t,freightRule:n,freight:e})}),[n,t,i]);return(0,R.jsx)(N.ZP.Group,s()(s()({className:z()(j,l),onChange:g,value:n},o),{},{children:q.map((function(e){var a="id"+t+e.value;return(0,R.jsxs)(N.ZP,{value:e.value,children:[e.label,e.value===w.Need&&n===w.Need&&(0,R.jsxs)("div",{className:S,style:n!==w.Need?{display:"none"}:{},children:[(0,R.jsx)("label",{htmlFor:a,children:"运费"}),(0,R.jsx)(Z.Z,{name:a,id:a,value:m,precision:2,min:0,max:999,onChange:x,ref:d}),"元"]})]},e.value)}))}))},B=["type"],E=function(){return f()(c()().mark((function e(){var t,a;return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,b.Z)();case 2:return t=I().mock({"data|3-5":[{freight:"@float(0.01,999,0,2)","freightRule|1":["0","1","2"],"id|+1":0,name:"@city"}]}),a=t.data,e.abrupt("return",{success:!0,data:a.map((function(e){return e.freightRule!==w.Need?s()(s()({},e),{},{freight:0}):e}))});case 4:case"end":return e.stop()}}),e)})))()},K=function(e){return f()(c()().mark((function e(){return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,b.Z)();case 2:return e.abrupt("return",{success:!0});case 3:case"end":return e.stop()}}),e)})))()};function V(e,t){var a=t.type,n=u()(t,B);switch(a){case"update":return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?s()(s()({},e),n):e})):[].concat(l()(e),[n]);case"clear":return[];default:return e}}var A=function(){var e=v.useReducer(V,[]),t=r()(e,2),a=t[0],n=t[1],i=[{valueType:"indexBorder"},{title:"地区",dataIndex:"name",width:170},{title:"规则",dataIndex:"freightRule",render:function(e,t){var r=a.find((function(e){return e.id===t.id}));return(0,R.jsx)(P,s()(s()(s()({},t),r),{},{onChange:function(e){n(s()({type:"update"},e))}}))}}],l=(0,y.Z)((function(){return E().then((function(e){return e.data}))})),o=l.data,u=void 0===o?[]:o,d=l.refresh,c=l.loading,p=(0,y.Z)((function(){return K(a)}),{autoRun:!1}),m=p.run,f=p.loading;return(0,R.jsx)(h.Z,{autoRequest:!1,dataSource:u,columns:i,pagination:!1,rowKey:"id",loading:c||f,toolbar:(0,R.jsx)(x.ZP,{type:"primary",onClick:function(){a&&0!==a.length?a.find((function(e){return e.freightRule===w.Need&&0===e.freight}))?g.ZP.error("运费不能为0"):m().then((function(){n({type:"clear"}),d()})):g.ZP.info("没有修改项")},disabled:c,loading:f,children:"更新"}),toolbarAction:{reload:!1}})}},9602:function(e,t,a){a.r(t);var n=a(53359),r=a.n(n),i=a(67524),l=a.n(i),o=a(33056),u=a(35393),d=a(90231),c=a(40822),p=a(46065),s=a(10712),m=["pageSize","current"],f=[{valueType:"indexBorder"},{dataIndex:"applyCode",title:"申请编号",tooltip:"提示文字",search:!0},{dataIndex:"createTime",title:"提交时间",valueType:"dateTime",search:{valueType:"date",order:1}},{dataIndex:"applicantName",title:"经办员"},{dataIndex:"approveTime",title:"审核时间",tooltip:"提示文字",sorter:!0,valueType:"dateTime",search:{valueType:"dateTimeRange",names:["startTime","endTime"],colProps:{lg:12,md:24},order:2}},{dataIndex:"approverName",title:"审核员",search:!0}];t.default=function(){var e=o.useState(!1),t=l()(e,2),a=t[0],n=t[1],i=o.useRef();return(0,s.jsxs)("div",{children:[(0,s.jsxs)(c.Z,{style:{marginBottom:16},children:["自动轮询",(0,s.jsx)(p.Z,{checkedChildren:"开启",unCheckedChildren:"关闭",checked:a,onChange:function(e){n(e),e&&setTimeout((function(){var e;null===(e=i.current)||void 0===e||e.reload()}))}})]}),(0,s.jsx)(u.Z,{request:function(e,t,a,n){var i=e.pageSize,l=e.current,o=r()(e,m);return console.log(e,t,a,n),(0,d.s)({page:{pageSize:i,pageNum:l},data:o}).then((function(e){return{total:e.pageInfo.total,data:e.data}}))},columns:f,rowKey:"applyCode",toolbarAction:!0,actionRef:i,asyncOptions:{pollingInterval:a?3e3:void 0}})]})}},42689:function(e,t,a){a.r(t);var n=a(53359),r=a.n(n),i=a(33056),l=a(35393),o=a(22438),u=a(90231),d=a(10712),c=["pageSize","current"],p=[{valueType:"indexBorder"},{dataIndex:"applyCode",title:"申请编号",tooltip:"提示文字",search:!0},{dataIndex:"money",title:"金额",valueType:"money",align:"right",field:{formatValue:function(e){return(0,o.Z)(e,100)},prefix:"¥"}},{dataIndex:"createTime",title:"提交时间",valueType:"dateTime",search:{valueType:"date",order:1}},{dataIndex:"applicantName",title:"经办员"},{dataIndex:"approveTime",title:"审核时间",tooltip:"提示文字",sorter:!0,valueType:"dateTime",search:{valueType:"dateTimeRange",names:["startTime","endTime"],colProps:{lg:12,md:24},order:2}},{dataIndex:"approverName",title:"审核员",search:!0}];t.default=function(){var e=i.useRef(),t=i.useRef();return i.useEffect((function(){e.current.setFieldsValue({approverName:"123",createTime:"2021-10-28",approveTime:["2021-10-28 00:00:00","2021-10-28 23:59:59"]}),t.current.submit()}),[]),(0,d.jsx)(l.Z,{request:function(e,t,a,n){var i=e.pageSize,l=e.current,o=r()(e,c);return console.log(e,t,a,n),(0,u.s)({page:{pageSize:i,pageNum:l},data:o}).then((function(e){return{total:e.pageInfo.total,data:e.data}}))},columns:p,rowKey:"applyCode",pagination:{pageSize:5},toolbarAction:!0,autoRequest:!1,formRef:e,actionRef:t})}},22438:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(42831),r=a(77129),i=a(81431);function l(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var a=e[0],o=void 0===e[1]?1:e[1],u=e.slice(2);if(u.length>0)return l.apply(void 0,[l(a,o)].concat(u));if(a=(0,r.l5)(a),o=(0,r.l5)(o),(0,n.Z)(a)||(0,n.Z)(o))return Number.NaN;var d=(0,r.As)(a),c=(0,r.As)(o);return(0,r.Yq)(d),(0,r.Yq)(c),(0,i.Z)(d/c,(0,r.Aq)(Math.pow(10,(0,r.uF)(o)-(0,r.uF)(a))))}}}]);