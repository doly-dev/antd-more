"use strict";(self.webpackChunkantd_more=self.webpackChunkantd_more||[]).push([[7423],{7836:function(e,t,a){a.r(t);var n=a(14005),r=a.n(n),i=(a(978),a(42621)),l=a(80068),o=a(15114),u=a(50107),d=["pageSize","current"],c=[{valueType:"indexBorder"},{dataIndex:"applyCode",title:"申请编号",tooltip:"提示文字",search:!0},{dataIndex:"money",title:"金额",valueType:"money",align:"right",field:{formatValue:function(e){return(0,l.Z)(e,100)},prefix:"¥"}},{dataIndex:"createTime",title:"提交时间",valueType:"dateTime",search:{valueType:"date",order:1}},{dataIndex:"applicantName",title:"经办员"},{dataIndex:"approveTime",title:"审核时间",tooltip:"提示文字",sorter:!0,valueType:"dateTime",search:{valueType:"dateTimeRange",names:["startTime","endTime"],colProps:{lg:12,md:24},order:2}},{dataIndex:"approverName",title:"审核员",search:!0}];t.default=function(){return(0,u.jsx)(i.Z,{columns:c,rowKey:"applyCode",request:function(e,t,a,n){var i=e.pageSize,l=e.current,u=r()(e,d);return console.log(e,t,a,n),(0,o.s)({page:{pageSize:i,pageNum:l},data:u}).then((function(e){return{total:e.pageInfo.total,data:e.data}}))},toolbarAction:!0})}},89598:function(e,t,a){a.r(t);var n=a(14005),r=a.n(n),i=a(35118),l=a.n(i),o=a(978),u=a(81884),d=a(6889),c=a(5307),p=a(52559),s=a(42621),m=a(15114),f=a(75744),g=a(50107),v=["pageSize","current"],x=[{dataIndex:"applyCode",title:"申请编号",search:!0,table:!1},{dataIndex:"createTime",title:"提交时间",search:{valueType:"date"}},{dataIndex:"approveTime",title:"审核时间",sorter:!0,valueType:"dateTime",search:{valueType:"dateTimeRange",names:["startTime","endTime"],colProps:{lg:12,md:24},order:1}},{dataIndex:"approverName",title:"审核员"},{dataIndex:"approveResult",title:"审核状态",filters:f.zq.map((function(e){return l()({text:e.label},e)})),valueType:"enumBadge",valueEnum:f.zq,search:{name:"approveStatus",all:!0,initialValue:""}}];t.default=function(){var e=o.useRef(),t=o.useRef(),a=o.useMemo((function(){return[].concat(x,[{title:"操作",render:function(){return(0,g.jsxs)(u.Z,{size:"middle",children:[(0,g.jsx)("a",{onClick:function(){var e;null===(e=t.current)||void 0===e||e.reload()},children:"reload"}),(0,g.jsx)("a",{onClick:function(){var e;null===(e=t.current)||void 0===e||e.submit()},children:"submit"}),(0,g.jsx)("a",{onClick:function(){var e;null===(e=t.current)||void 0===e||e.reset()},children:"reset"})]})}}])}),[]);return(0,g.jsx)(s.Z,{formRef:e,actionRef:t,form:{submitter:{render:function(e,t){return(0,g.jsxs)(u.Z,{children:[t,(0,g.jsx)(d.ZP,{onClick:function(){return c.ZP.success("点击导出按钮")},children:"导出"},"export")]})}},defaultColsNumber:1},toolbar:(0,g.jsxs)(u.Z,{children:[(0,g.jsx)(d.ZP,{type:"primary",onClick:function(){return c.ZP.success("点击新增按钮")},children:"新增"}),(0,g.jsx)(d.ZP,{onClick:function(){e.current.setFieldsValue({applyCode:"12345"})},children:"赋值"})]}),toolbarAction:!0,fullScreenBackgroundColor:"#f5f5f5",extra:(0,g.jsx)(p.Z,{bordered:!1,children:"Extra Block!"}),columns:a,rowKey:"applyCode",request:function(e,t,a,n){var i=e.pageSize,l=e.current,o=r()(e,v);return console.log(e,t,a,n),(0,m.s)({page:{pageSize:i,pageNum:l},data:o}).then((function(e){return{total:e.pageInfo.total,data:e.data}}))},pagination:{pageSize:5}})}},77403:function(e,t,a){a.r(t);var n=a(14005),r=a.n(n),i=(a(978),a(42621)),l=a(15114),o=a(50107),u=["pageSize","current"],d=[{dataIndex:"applyCode",title:"申请编号"},{dataIndex:"createTime",title:"提交时间"},{dataIndex:"applicantName",title:"经办员"},{dataIndex:"approveTime",title:"审核时间",sorter:!0},{dataIndex:"approverName",title:"审核员"}];t.default=function(){return(0,o.jsx)(i.Z,{columns:d,rowKey:"applyCode",request:function(e,t,a,n){var i=e.pageSize,o=e.current,d=r()(e,u);return console.log(e,t,a,n),(0,l.s)({page:{pageSize:i,pageNum:o},data:d}).then((function(e){return{total:e.pageInfo.total,data:e.data}}))},pagination:{pageSize:5}})}},80328:function(e,t,a){a.r(t);var n=a(14005),r=a.n(n),i=(a(978),a(12793)),l=a(24174),o=a(42621),u=a(15114),d=a(75744),c=a(50107),p=["pageSize","current"],s=[{dataIndex:"applyCode",title:"申请编号",tooltip:"提示文字",search:!0},{dataIndex:"createTime",title:"提交时间",search:{itemType:"date"}},{dataIndex:"applicantName",title:"经办员"},{dataIndex:"dateTimeRange",title:"日期时间区间",tooltip:"提示文字",sorter:!0,search:{valueType:"dateTimeRange",names:["startTime","endTime"],initialValue:["2020-10-10 00:00:00","2020-11-11 11:11:11"],colProps:{lg:12,md:24},order:9},table:!1},{dataIndex:"approverName",title:"审核员",search:!0,table:!1},{dataIndex:"money",valueType:"money",title:"数字",search:!0,table:!1},{dataIndex:"color",valueType:"color",title:"颜色",search:!0,table:!1},{dataIndex:"select",valueType:"enum",valueEnum:d.zq,title:"选择器",search:{all:!0,initialValue:""},table:!1},{dataIndex:"radio",valueType:"enum",valueEnum:d.zq,title:"单选框",search:{itemType:"radio",all:!0,initialValue:"",colProps:{lg:24,md:24}},table:!1},{dataIndex:"checkbox",valueType:"enum",valueEnum:d.zq,title:"多选框",search:{itemType:"checkbox",all:!0,colProps:{lg:24,md:24}},table:!1},{dataIndex:"dateWeek",valueType:"dateWeek",title:"周",search:{order:1},table:!1},{dataIndex:"dateMonth",valueType:"dateMonth",title:"月",search:{order:2},table:!1},{dataIndex:"dateQuarter",valueType:"dateQuarter",title:"季",search:{order:3},table:!1},{dataIndex:"dateYear",valueType:"dateYear",title:"年",search:{order:4},table:!1},{dataIndex:"dateTime",valueType:"dateTime",title:"日期时间",search:{order:5},table:!1},{dataIndex:"time",valueType:"time",title:"时间",search:{order:6},table:!1},{dataIndex:"dateRange",valueType:"dateRange",title:"日期区间",search:{colProps:{lg:12,md:24},order:7},table:!1},{dataIndex:"timeRange",valueType:"timeRange",title:"时间区间",search:{colProps:{lg:12,md:24},order:8},table:!1},{dataIndex:"slider",title:"自定义滑动条",search:{render:function(e,t,a){var n=e.dataIndex,r=e.title;return(0,c.jsx)(l.Z,{name:n,label:r,colProps:{lg:12,md:24},children:(0,c.jsx)(i.Z,{})})},order:10},table:!1}];t.default=function(){return(0,c.jsx)(o.Z,{columns:s,rowKey:"applyCode",request:function(e,t,a,n){var i=e.pageSize,l=e.current,o=r()(e,p);return console.log(e,t,a,n),(0,u.s)({page:{pageSize:i,pageNum:l},data:o}).then((function(e){return{total:e.pageInfo.total,data:e.data}}))},form:{labelWidth:112},pagination:{pageSize:5}})}},19881:function(e,t,a){a.r(t);var n=a(17662),r=a.n(n),i=a(14005),l=a.n(i),o=a(17925),u=a.n(o),d=a(35118),c=a.n(d),p=a(31404),s=a.n(p),m=a(978),f=a(42621),g=a(33648),v=a(15114),x=a(75744),h=a(50107),y=["pageSize","current"];function T(){return(T=s()(r()().mark((function e(){return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,g.Z)(5e3);case 2:return e.abrupt("return",{applyCode:"123456",createTime:"2020-10-10",approveResult:x.GZ.Processing});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I=[{dataIndex:"applyCode",title:"申请编号",search:!0},{dataIndex:"createTime",title:"提交时间",sorter:!0,search:{valueType:"date"}},{dataIndex:"approveResult",title:"审核状态",filters:x.zq.map((function(e){return c()({text:e.label},e)})),valueType:"enumBadge",valueEnum:x.zq,search:{all:!0}}];t.default=function(){var e=m.useState(!1),t=u()(e,2),a=t[0],n=t[1],r=m.useState(),i=u()(r,2),o=i[0],d=i[1];return m.useEffect((function(){(function(){return T.apply(this,arguments)})().then((function(e){d(e),n(!0)}))}),[]),(0,h.jsx)(f.Z,{ready:a,form:{initialValues:o},columns:I,rowKey:"applyCode",request:function(e,t,a,n){var r=e.pageSize,i=e.current,o=l()(e,y);return console.log(e,t,a,n),(0,v.s)({page:{pageSize:r,pageNum:i},data:o}).then((function(e){return{total:e.pageInfo.total,data:e.data}}))}})}},69846:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var n=a(14005),r=a.n(n),i=(a(978),a(42621)),l=a(98821),o=a(80068),u=a(44784),d=a(57627),c=a(50107),p=function(e){if(e){var t=e.replace(/\s+/g,"<br/>");return(0,c.jsx)("span",{dangerouslySetInnerHTML:{__html:t}})}return"-"},s=a(15114),m=a(75744),f=["pageSize","current"],g=[{valueType:"indexBorder"},{dataIndex:"applyCode",title:"申请编号",tooltip:"提示文字"},{dataIndex:"money",title:"金额",align:"right",render:function(e){return"number"==typeof e&&!isNaN(e)||e&&"string"==typeof e?"¥".concat((0,l.Z)((0,o.Z)(e,100))):"-"}},{dataIndex:"createTime",title:"提交时间",valueType:"dateTime",render:p,search:{valueType:"date",order:1}},{dataIndex:"applicantName",title:"经办员",search:!0},{dataIndex:"approveTime",title:"审核时间",tooltip:"提示文字",sorter:!0,valueType:"dateTime",render:p},{dataIndex:"approveResult",title:"审核状态",render:function(e,t){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n="string"==typeof a&&a.indexOf("\n")>-1?(0,c.jsx)(c.Fragment,{children:a.split("\n").map((function(e){return(0,c.jsx)("div",{style:{marginBottom:5},children:e},e)}))}):a;return(0,c.jsxs)("div",{children:[(0,c.jsx)(u.Z,{value:e,valueType:"enumBadge",valueEnum:t}),a&&(0,c.jsx)("div",{children:(0,c.jsx)(d.Z.Text,{style:{maxWidth:140,color:"gray"},ellipsis:{tooltip:n},children:a})})]})}(e,m.zq,e===m.GZ.Refused&&t.remark?t.remark:"")}}],v=function(){return(0,c.jsx)(i.Z,{columns:g,rowKey:"applyCode",request:function(e,t,a,n){var i=e.pageSize,l=e.current,o=r()(e,f);return console.log(e,t,a,n),(0,s.s)({page:{pageSize:i,pageNum:l},data:o}).then((function(e){return{total:e.pageInfo.total,data:e.data}}))},pagination:{pageSize:5}})}},22452:function(e,t,a){a.r(t);var n=a(14005),r=a.n(n),i=(a(978),a(36462)),l=a(46986),o=a(41275),u=a(42621),d=a(15114),c=a(50107),p=["pageSize","current"],s=[{dataIndex:"applyCode",title:"申请编号",tooltip:"提示文字"},{dataIndex:"createTime",title:"提交时间"},{dataIndex:"applicantName",title:"经办员"},{dataIndex:"approveTime",title:"审核时间",tooltip:"提示文字",sorter:!0},{dataIndex:"approverName",title:"审核员"}];t.default=function(){var e=[(0,c.jsx)(i.Z,{name:"applyCode",label:"申请编号"},"applyCode"),(0,c.jsx)(l.Z,{name:"createTime",label:"提交时间"},"createTime"),(0,c.jsx)(i.Z,{name:"approverName",label:"审核员"},"approveName"),(0,c.jsx)(o.Z,{name:"approveTime",names:["startTime","endTime"],showTime:!0,label:"审核时间",colProps:{lg:12,md:24}},"approveTime")];return(0,c.jsx)(u.Z,{formItems:e,columns:s,rowKey:"applyCode",request:function(e,t,a,n){var i=e.pageSize,l=e.current,o=r()(e,p);return console.log(e,t,a,n),(0,d.s)({page:{pageSize:i,pageNum:l},data:o}).then((function(e){return{total:e.pageInfo.total,data:e.data}}))}})}},27167:function(e,t,a){a.r(t),a.d(t,{default:function(){return V}});var n,r=a(17925),i=a.n(r),l=a(4044),o=a.n(l),u=a(14005),d=a.n(u),c=a(17662),p=a.n(c),s=a(35118),m=a.n(s),f=a(31404),g=a.n(f),v=a(978),x=a(5307),h=a(6889),y=a(42621),T=a(35186),I=a(76150),b=a.n(I),N=a(33648),Z=a(45949),j=a(8831),z=a(43655),C=a.n(z),S="wrapper___zlOob",R="inputWrapper___LB9IF",k=a(50107),w=["id","freight","freightRule","onChange","className"];!function(e){e.Need="0",e.No="1",e.NoExpress="2"}(n||(n={}));var P=[{label:"包邮",value:n.No},{label:"不包邮",value:n.Need},{label:"不配送",value:n.NoExpress}],q=function(e){var t=e.id,a=e.freight,r=e.freightRule,l=e.onChange,o=e.className,u=d()(e,w),c=v.useRef(null),p=v.useState(a),s=i()(p,2),f=s[0],g=s[1],x=v.useCallback((function(e){var a=e.target.value,r=a!==n.Need?0:f;g(r),null==l||l({id:t,freightRule:a,freight:r}),a===n.Need&&c&&setTimeout((function(){var e;null===(e=c.current)||void 0===e||e.focus()}),0)}),[f,t,l]),h=v.useCallback((function(e){g(e),null==l||l({id:t,freightRule:r,freight:e})}),[r,t,l]);return(0,k.jsx)(Z.ZP.Group,m()(m()({className:C()(S,o),onChange:x,value:r},u),{},{children:P.map((function(e){var a="id"+t+e.value;return(0,k.jsxs)(Z.ZP,{value:e.value,children:[e.label,e.value===n.Need&&r===n.Need&&(0,k.jsxs)("div",{className:R,style:r!==n.Need?{display:"none"}:{},children:[(0,k.jsx)("label",{htmlFor:a,children:"运费"}),(0,k.jsx)(j.Z,{name:a,id:a,value:f,precision:2,min:0,max:999,onChange:h,ref:c}),"元"]})]},e.value)}))}))},B=["type"],E=function(){return g()(p()().mark((function e(){var t,a;return p()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,N.Z)();case 2:return t=b().mock({"data|3-5":[{freight:"@float(0.01,999,0,2)","freightRule|1":["0","1","2"],"id|+1":0,name:"@city"}]}),a=t.data,e.abrupt("return",{success:!0,data:a.map((function(e){return e.freightRule!==n.Need?m()(m()({},e),{},{freight:0}):e}))});case 4:case"end":return e.stop()}}),e)})))()},_=function(e){return g()(p()().mark((function e(){return p()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,N.Z)();case 2:return e.abrupt("return",{success:!0});case 3:case"end":return e.stop()}}),e)})))()};function K(e,t){var a=t.type,n=d()(t,B);switch(a){case"update":return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?m()(m()({},e),n):e})):[].concat(o()(e),[n]);case"clear":return[];default:return e}}var V=function(){var e=v.useReducer(K,[]),t=i()(e,2),a=t[0],r=t[1],l=[{valueType:"indexBorder"},{title:"地区",dataIndex:"name",width:170},{title:"规则",dataIndex:"freightRule",render:function(e,t){var n=a.find((function(e){return e.id===t.id}));return(0,k.jsx)(q,m()(m()(m()({},t),n),{},{onChange:function(e){r(m()({type:"update"},e))}}))}}],o=(0,T.Z)((function(){return E().then((function(e){return e.data}))})),u=o.data,d=void 0===u?[]:u,c=o.refresh,p=o.loading,s=(0,T.Z)((function(){return _(a)}),{autoRun:!1}),f=s.run,g=s.loading;return(0,k.jsx)(y.Z,{autoRequest:!1,dataSource:d,columns:l,pagination:!1,rowKey:"id",loading:p||g,toolbar:(0,k.jsx)(h.ZP,{type:"primary",onClick:function(){a&&0!==a.length?a.find((function(e){return e.freightRule===n.Need&&0===e.freight}))?x.ZP.error("运费不能为0"):f().then((function(){r({type:"clear"}),c()})):x.ZP.info("没有修改项")},disabled:p,loading:g,children:"更新"}),toolbarAction:{reload:!1}})}},68637:function(e,t,a){a.r(t);var n=a(14005),r=a.n(n),i=a(978),l=a(42621),o=a(80068),u=a(15114),d=a(50107),c=["pageSize","current"],p=[{valueType:"indexBorder"},{dataIndex:"applyCode",title:"申请编号",tooltip:"提示文字",search:!0},{dataIndex:"money",title:"金额",valueType:"money",align:"right",field:{formatValue:function(e){return(0,o.Z)(e,100)},prefix:"¥"}},{dataIndex:"createTime",title:"提交时间",valueType:"dateTime",search:{valueType:"date",order:1}},{dataIndex:"applicantName",title:"经办员"},{dataIndex:"approveTime",title:"审核时间",tooltip:"提示文字",sorter:!0,valueType:"dateTime",search:{valueType:"dateTimeRange",names:["startTime","endTime"],colProps:{lg:12,md:24},order:2}},{dataIndex:"approverName",title:"审核员",search:!0}];t.default=function(){var e=i.useRef(),t=i.useRef();return i.useEffect((function(){e.current.setFieldsValue({approverName:"123",createTime:"2021-10-28",approveTime:["2021-10-28 00:00:00","2021-10-28 23:59:59"]}),t.current.submit()}),[]),(0,d.jsx)(l.Z,{columns:p,rowKey:"applyCode",request:function(e,t,a,n){var i=e.pageSize,l=e.current,o=r()(e,c);return console.log(e,t,a,n),(0,u.s)({page:{pageSize:i,pageNum:l},data:o}).then((function(e){return{total:e.pageInfo.total,data:e.data}}))},toolbarAction:!0,autoRequest:!1,formRef:e,actionRef:t,pagination:{pageSize:5}})}}}]);