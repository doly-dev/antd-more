"use strict";(self.webpackChunkantd_more=self.webpackChunkantd_more||[]).push([[7423],{96823:function(e,t,a){a.r(t);var r=a(84789),n=a.n(r),i=(a(94074),a(14533)),o=a(80586),l=a(13211),d=["pageSize","current"],u=[{valueType:"indexBorder"},{dataIndex:"applyCode",title:"申请编号",tooltip:"提示文字",search:!0},{dataIndex:"createTime",title:"提交时间",valueType:"dateTime",search:{valueType:"date",order:1}},{dataIndex:"applicantName",title:"经办员"},{dataIndex:"approveTime",title:"审核时间",tooltip:"提示文字",sorter:!0,valueType:"dateTime",search:{valueType:"dateTimeRange",names:["startTime","endTime"],colProps:{lg:12,md:24},order:2}},{dataIndex:"approverName",title:"审核员",search:!0}];t.default=function(){return(0,l.jsx)(i.Z,{request:function(e,t,a,r){var i=e.pageSize,l=e.current,u=n()(e,d);return console.log(e,t,a,r),(0,o.getApplyList)({page:{pageSize:i,pageNum:l},data:u}).then((function(e){return{total:e.pageInfo.total,data:e.data}}))},columns:u,rowKey:"applyCode",toolbarAction:!0})}},73448:function(e,t,a){a.r(t);var r=a(84789),n=a.n(r),i=a(88548),o=a.n(i),l=a(94074),d=a(73156),u=a(44872),p=a(44116),c=a(71427),s=a(76820),m=a(14533),f=a(80586),g=a(66997),v=a(13211),x=["pageSize","current"],y=[{dataIndex:"applyCode",title:"申请编号",search:!0,table:!1},{dataIndex:"createTime",title:"提交时间",search:{valueType:"date"}},{dataIndex:"money",title:"金额",valueType:"money",align:"right",field:{formatValue:function(e){return(0,d.Z)(e,100)},prefix:"¥"}},{dataIndex:"approveTime",title:"审核时间",sorter:!0,valueType:"dateTime",search:{valueType:"dateTimeRange",names:["startTime","endTime"],colProps:{lg:12,md:24},order:1}},{dataIndex:"approverName",title:"审核员"},{dataIndex:"approveResult",title:"审核状态",filters:g.ApproveStatusOptions.map((function(e){return o()({text:e.label},e)})),valueType:"enumBadge",valueEnum:g.ApproveStatusOptions,search:{name:"approveStatus",all:!0,initialValue:""}}];t.default=function(){var e=l.useRef(),t=l.useRef(),a=l.useMemo((function(){return[].concat(y,[{title:"操作",render:function(){return(0,v.jsxs)(u.Z,{size:"middle",children:[(0,v.jsx)("a",{onClick:function(){var e;null===(e=t.current)||void 0===e||e.reload()},children:"reload"}),(0,v.jsx)("a",{onClick:function(){var e;null===(e=t.current)||void 0===e||e.submit()},children:"submit"}),(0,v.jsx)("a",{onClick:function(){var e;null===(e=t.current)||void 0===e||e.reset()},children:"reset"})]})}}])}),[]);return(0,v.jsx)(m.Z,{request:function(e,t,a,r){var i=e.pageSize,o=e.current,l=n()(e,x);return console.log(e,t,a,r),(0,f.getApplyList)({page:{pageSize:i,pageNum:o},data:l}).then((function(e){return{total:e.pageInfo.total,data:e.data}}))},columns:a,rowKey:"applyCode",pagination:{pageSize:5},formRef:e,actionRef:t,form:{submitter:{render:function(e,t){return(0,v.jsxs)(u.Z,{children:[t,(0,v.jsx)(p.ZP,{onClick:function(){return c.ZP.success("点击导出按钮")},children:"导出"},"export")]})}},defaultColsNumber:1},toolbar:(0,v.jsxs)(u.Z,{children:[(0,v.jsx)(p.ZP,{type:"primary",onClick:function(){return c.ZP.success("点击新增按钮")},children:"新增"}),(0,v.jsx)(p.ZP,{onClick:function(){e.current.setFieldsValue({applyCode:"12345"})},children:"赋值"})]}),toolbarAction:!0,fullScreenBackgroundColor:"rgba(0,0,0,0.1)",extra:(0,v.jsx)(s.Z,{bordered:!1,children:"Extra Block!"})})}},94054:function(e,t,a){a.r(t);var r=a(84789),n=a.n(r),i=(a(94074),a(14533)),o=a(80586),l=a(13211),d=["pageSize","current"],u=[{dataIndex:"applyCode",title:"申请编号"},{dataIndex:"createTime",title:"提交时间"},{dataIndex:"applicantName",title:"经办员"},{dataIndex:"approveTime",title:"审核时间",sorter:!0},{dataIndex:"approverName",title:"审核员"}];t.default=function(){return(0,l.jsx)(i.Z,{request:function(e,t,a,r){var i=e.pageSize,l=e.current,u=n()(e,d);return console.log(e,t,a,r),(0,o.getApplyList)({page:{pageSize:i,pageNum:l},data:u}).then((function(e){return{total:e.pageInfo.total,data:e.data}}))},columns:u,rowKey:"applyCode",pagination:{pageSize:5},compact:!0})}},23567:function(e,t,a){a.r(t);var r=a(84789),n=a.n(r),i=(a(94074),a(14533)),o=a(95654),l=a(80586),d=a(66997),u=a(13211),p=["pageSize","current"],c=(0,o.getPC)({inland:!0,fieldNames:{code:"value",name:"label"}}),s=[{dataIndex:"applyCode",title:"申请编号",tooltip:"提示文字",search:!0},{dataIndex:"createTime",title:"提交时间",search:{itemType:"date"}},{dataIndex:"applicantName",title:"经办员"},{dataIndex:"dateTimeRange",title:"日期时间区间",tooltip:"提示文字",sorter:!0,search:{valueType:"dateTimeRange",names:["startTime","endTime"],initialValue:["2020-10-10 00:00:00","2020-11-11 11:11:11"],colProps:{lg:12,md:24},order:9},table:!1},{dataIndex:"approverName",title:"审核员",search:!0,table:!1},{dataIndex:"money",valueType:"money",title:"数字",search:!0,table:!1},{dataIndex:"color",valueType:"color",title:"颜色",search:!0,table:!1},{dataIndex:"select",valueType:"enum",valueEnum:d.ApproveStatusOptions,title:"选择器",search:{all:!0,initialValue:""},table:!1},{dataIndex:"radio",valueType:"enum",valueEnum:d.ApproveStatusOptions,title:"单选框",search:{itemType:"radio",all:!0,initialValue:"",colProps:{lg:24,md:24}},table:!1},{dataIndex:"checkbox",valueType:"enum",valueEnum:d.ApproveStatusOptions,title:"多选框",search:{itemType:"checkbox",all:!0,colProps:{lg:24,md:24}},table:!1},{dataIndex:"dateWeek",valueType:"dateWeek",title:"周",search:{order:1},table:!1},{dataIndex:"dateMonth",valueType:"dateMonth",title:"月",search:{order:2},table:!1},{dataIndex:"dateQuarter",valueType:"dateQuarter",title:"季",search:{order:3},table:!1},{dataIndex:"dateYear",valueType:"dateYear",title:"年",search:{order:4},table:!1},{dataIndex:"dateTime",valueType:"dateTime",title:"日期时间",search:{order:5},table:!1},{dataIndex:"time",valueType:"time",title:"时间",search:{order:6},table:!1},{dataIndex:"dateRange",valueType:"dateRange",title:"日期区间",search:{colProps:{lg:12,md:24},order:7},table:!1},{dataIndex:"timeRange",valueType:"timeRange",title:"时间区间",search:{colProps:{lg:12,md:24},order:8},table:!1},{dataIndex:"slider",title:"自定义滑动条",search:{itemType:"slider",order:10},table:!1},{dataIndex:"cascader",title:"省市",search:{itemType:"cascader",options:c,colProps:{lg:12,md:24},order:11},table:!1}];t.default=function(){return(0,u.jsx)(i.Z,{request:function(e,t,a,r){var i=e.pageSize,o=e.current,d=n()(e,p);return console.log(e,t,a,r),(0,l.getApplyList)({page:{pageSize:i,pageNum:o},data:d}).then((function(e){return{total:e.pageInfo.total,data:e.data}}))},columns:s,rowKey:"applyCode",pagination:{pageSize:5},form:{labelWidth:112}})}},32020:function(e,t,a){a.r(t);var r=a(55640),n=a.n(r),i=a(84789),o=a.n(i),l=a(63212),d=a.n(l),u=a(88548),p=a.n(u),c=a(57293),s=a.n(c),m=a(94074),f=a(14533),g=a(2802),v=a(80586),x=a(66997),y=a(13211),h=["pageSize","current"];function T(){return(T=s()(n()().mark((function e(){return n()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,g.Z)(5e3);case 2:return e.abrupt("return",{applyCode:"123456",createTime:"2020-10-10",approveResult:x.ApproveStatus.Processing});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I=[{dataIndex:"applyCode",title:"申请编号",search:!0},{dataIndex:"createTime",title:"提交时间",sorter:!0,search:{valueType:"date"}},{dataIndex:"approveResult",title:"审核状态",filters:x.ApproveStatusOptions.map((function(e){return p()({text:e.label},e)})),valueType:"enumBadge",valueEnum:x.ApproveStatusOptions,search:{all:!0}}];t.default=function(){var e=m.useState(!1),t=d()(e,2),a=t[0],r=t[1],n=m.useState(),i=d()(n,2),l=i[0],u=i[1];return m.useEffect((function(){(function(){return T.apply(this,arguments)})().then((function(e){u(e),r(!0)}))}),[]),(0,y.jsx)(f.Z,{request:function(e,t,a,r){var n=e.pageSize,i=e.current,l=o()(e,h);return console.log(e,t,a,r),(0,v.getApplyList)({page:{pageSize:n,pageNum:i},data:l}).then((function(e){return{total:e.pageInfo.total,data:e.data}}))},columns:I,rowKey:"applyCode",ready:a,form:{initialValues:l}})}},37046:function(e,t,a){a.r(t);var r=a(84789),n=a.n(r),i=(a(94074),a(14533)),o=a(85829),l=a(80586),d=a(66997),u=a(13211),p=["pageSize","current"],c=[{valueType:"indexBorder"},{dataIndex:"applyCode",title:"申请编号",tooltip:"提示文字"},{dataIndex:"money",title:"金额",align:"right",render:o.renderMoney},{dataIndex:"createTime",title:"提交时间",field:{valueType:"text",whitespaceLineBreak:!0},search:{valueType:"date",order:1}},{dataIndex:"applicantName",title:"经办员",search:!0},{dataIndex:"approveTime",title:"审核时间",tooltip:"提示文字",sorter:!0,valueType:"dateTime",field:{valueType:"text",whitespaceLineBreak:!0}},{dataIndex:"approveResult",title:"审核状态",render:function(e,t){return(0,o.renderStatusWithRemark)(e,d.ApproveStatusOptions,e===d.ApproveStatus.Refused&&t.remark?t.remark:"")}}];t.default=function(){return(0,u.jsx)(i.Z,{request:function(e,t,a,r){var i=e.pageSize,o=e.current,d=n()(e,p);return console.log(e,t,a,r),(0,l.getApplyList)({page:{pageSize:i,pageNum:o},data:d}).then((function(e){return{total:e.pageInfo.total,data:e.data}}))},columns:c,rowKey:"applyCode",pagination:{pageSize:5}})}},9600:function(e,t,a){a.r(t);var r=a(84789),n=a.n(r),i=(a(94074),a(86966)),o=a(77998),l=a(23464),d=a(14533),u=a(80586),p=a(13211),c=["pageSize","current"],s=[{dataIndex:"applyCode",title:"申请编号",tooltip:"提示文字"},{dataIndex:"createTime",title:"提交时间"},{dataIndex:"applicantName",title:"经办员"},{dataIndex:"approveTime",title:"审核时间",tooltip:"提示文字",sorter:!0},{dataIndex:"approverName",title:"审核员"}];t.default=function(){var e=[(0,p.jsx)(i.Z,{name:"applyCode",label:"申请编号"},"applyCode"),(0,p.jsx)(o.Z,{name:"createTime",label:"提交时间"},"createTime"),(0,p.jsx)(i.Z,{name:"approverName",label:"审核员"},"approveName"),(0,p.jsx)(l.Z,{name:"approveTime",names:["startTime","endTime"],showTime:!0,label:"审核时间",colProps:{lg:12,md:24}},"approveTime")];return(0,p.jsx)(d.Z,{request:function(e,t,a,r){var i=e.pageSize,o=e.current,l=n()(e,c);return console.log(e,t,a,r),(0,u.getApplyList)({page:{pageSize:i,pageNum:o},data:l}).then((function(e){return{total:e.pageInfo.total,data:e.data}}))},columns:s,rowKey:"applyCode",formItems:e})}},56188:function(e,t,a){a.r(t);var r=a(63212),n=a.n(r),i=a(84039),o=a.n(i),l=a(84789),d=a.n(l),u=a(55640),p=a.n(u),c=a(88548),s=a.n(c),m=a(57293),f=a.n(m),g=a(94074),v=a(71427),x=a(44116),y=a(14533),h=a(60561),T=a(98762),I=a.n(T),S=a(2802),b=a(58396),C=a(13211),R=["type"],Z=function(){return f()(p()().mark((function e(){var t,a;return p()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,S.Z)();case 2:return t=I().mock({"data|3-5":[{freight:"@float(0.01,999,0,2)","freightRule|1":["0","1","2"],"id|+1":0,name:"@city"}]}),a=t.data,e.abrupt("return",{success:!0,data:a.map((function(e){return e.freightRule!==b.FreightRuleType.Need?s()(s()({},e),{},{freight:0}):e}))});case 4:case"end":return e.stop()}}),e)})))()},z=function(e){return f()(p()().mark((function e(){return p()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,S.Z)();case 2:return e.abrupt("return",{success:!0});case 3:case"end":return e.stop()}}),e)})))()};function N(e,t){var a=t.type,r=d()(t,R);switch(a){case"update":return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?s()(s()({},e),r):e})):[].concat(o()(e),[r]);case"clear":return[];default:return e}}t.default=function(){var e=g.useReducer(N,[]),t=n()(e,2),a=t[0],r=t[1],i=[{valueType:"indexBorder"},{title:"地区",dataIndex:"name",width:170},{title:"规则",dataIndex:"freightRule",render:function(e,t){var n=a.find((function(e){return e.id===t.id}));return(0,C.jsx)(b.default,s()(s()(s()({},t),n),{},{onChange:function(e){r(s()({type:"update"},e))}}))}}],o=(0,h.Z)((function(){return Z().then((function(e){return e.data}))})),l=o.data,d=void 0===l?[]:l,u=o.refresh,p=o.loading,c=(0,h.Z)((function(){return z(a)}),{autoRun:!1}),m=c.run,f=c.loading;return(0,C.jsx)(y.Z,{autoRequest:!1,dataSource:d,columns:i,pagination:!1,rowKey:"id",loading:p||f,toolbar:(0,C.jsx)(x.ZP,{type:"primary",onClick:function(){a&&0!==a.length?a.find((function(e){return e.freightRule===b.FreightRuleType.Need&&0===e.freight}))?v.ZP.error("运费不能为0"):m().then((function(){r({type:"clear"}),u()})):v.ZP.info("没有修改项")},disabled:p,loading:f,children:"更新"}),toolbarAction:{reload:!1}})}},83806:function(e,t,a){a.r(t);var r=a(84789),n=a.n(r),i=a(63212),o=a.n(i),l=a(94074),d=a(14533),u=a(80586),p=a(44872),c=a(22311),s=a(13211),m=["pageSize","current"],f=[{valueType:"indexBorder"},{dataIndex:"applyCode",title:"申请编号",tooltip:"提示文字",search:!0},{dataIndex:"createTime",title:"提交时间",valueType:"dateTime",search:{valueType:"date",order:1}},{dataIndex:"applicantName",title:"经办员"},{dataIndex:"approveTime",title:"审核时间",tooltip:"提示文字",sorter:!0,valueType:"dateTime",search:{valueType:"dateTimeRange",names:["startTime","endTime"],colProps:{lg:12,md:24},order:2}},{dataIndex:"approverName",title:"审核员",search:!0}];t.default=function(){var e=l.useState(!1),t=o()(e,2),a=t[0],r=t[1],i=l.useRef();return(0,s.jsxs)("div",{children:[(0,s.jsxs)(p.Z,{style:{marginBottom:16},children:["自动轮询",(0,s.jsx)(c.Z,{checkedChildren:"开启",unCheckedChildren:"关闭",checked:a,onChange:function(e){r(e),e&&setTimeout((function(){var e;null===(e=i.current)||void 0===e||e.reload()}))}})]}),(0,s.jsx)(d.Z,{request:function(e,t,a,r){var i=e.pageSize,o=e.current,l=n()(e,m);return console.log(e,t,a,r),(0,u.getApplyList)({page:{pageSize:i,pageNum:o},data:l}).then((function(e){return{total:e.pageInfo.total,data:e.data}}))},columns:f,rowKey:"applyCode",toolbarAction:!0,actionRef:i,asyncOptions:{pollingInterval:a?3e3:void 0}})]})}},23785:function(e,t,a){a.r(t);var r=a(84789),n=a.n(r),i=a(94074),o=a(14533),l=a(73156),d=a(80586),u=a(13211),p=["pageSize","current"],c=[{valueType:"indexBorder"},{dataIndex:"applyCode",title:"申请编号",tooltip:"提示文字",search:!0},{dataIndex:"money",title:"金额",valueType:"money",align:"right",field:{formatValue:function(e){return(0,l.Z)(e,100)},prefix:"¥"}},{dataIndex:"createTime",title:"提交时间",valueType:"dateTime",search:{valueType:"date",order:1}},{dataIndex:"applicantName",title:"经办员"},{dataIndex:"approveTime",title:"审核时间",tooltip:"提示文字",sorter:!0,valueType:"dateTime",search:{valueType:"dateTimeRange",names:["startTime","endTime"],colProps:{lg:12,md:24},order:2}},{dataIndex:"approverName",title:"审核员",search:!0}];t.default=function(){var e=i.useRef(),t=i.useRef();return i.useEffect((function(){e.current.setFieldsValue({approverName:"123",createTime:"2021-10-28",approveTime:["2021-10-28 00:00:00","2021-10-28 23:59:59"]}),t.current.submit()}),[]),(0,u.jsx)(o.Z,{request:function(e,t,a,r){var i=e.pageSize,o=e.current,l=n()(e,p);return console.log(e,t,a,r),(0,d.getApplyList)({page:{pageSize:i,pageNum:o},data:l}).then((function(e){return{total:e.pageInfo.total,data:e.data}}))},columns:c,rowKey:"applyCode",pagination:{pageSize:5},toolbarAction:!0,autoRequest:!1,formRef:e,actionRef:t})}}}]);