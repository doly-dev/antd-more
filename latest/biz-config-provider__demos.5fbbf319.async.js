"use strict";(self.webpackChunkantd_more=self.webpackChunkantd_more||[]).push([[5545],{80383:function(e,a,l){l.r(a);var n=l(55640),r=l.n(n),s=l(57293),t=l.n(s),i=l(63212),o=l.n(i),c=l(94074),d=l(78482),x=l(80013),u=l(59089),m=l(66647),j=l(47561),h=l(11757),Z=l(10120),p=l(36142),b=l(70091),f=l(77998),q=l(23464),g=l(32003),v=l(99712),y=l(86966),C=l(33135),P=l(64133),w=l(43026),I=l(58038),z=l(24498),k=l(5486),F=l(34638),N=l(3342),S=l(95654),A=l(52343),O=l(76133),T=l(79537),H=l(53377),B=l(4146),E=l(28097),G=l(2898),K=l(82699),R=l.n(K),W=(l(24468),l(13211));R().locale("zh-cn");var _=(0,S.getPCA)({inland:!0,fieldNames:{code:"value",name:"label"}});function D(){var e=c.useState([]),a=o()(e,2),l=a[0],n=a[1];return(0,W.jsx)("div",{children:(0,W.jsxs)(u.ZP,{labelWidth:120,onFinish:function(e){console.log(e)},children:[(0,W.jsx)(m.Z,{label:"地址",names:["location","address"],options:_,required:!0}),(0,W.jsx)(j.Z,{label:"自动完成",name:"auto-complete",onSearch:function(e){var a=new Array(5).fill("").map((function(){return{label:"".concat(e,"-").concat((0,N.Z)(3)),value:"".concat(e,"-").concat((0,N.Z)(3))}}));n(a)},options:l,required:!0}),(0,W.jsx)(h.Z,{label:"验证码",name:"captcha",second:120,onGetCaptcha:t()(r()().mark((function e(){return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),e)}))),required:!0}),(0,W.jsx)(Z.Z,{label:"级联",name:"cascader",options:_,required:!0}),(0,W.jsx)(p.Z,{label:"多选框1",name:"checkbox-1",options:A.CycleOptions,required:!0}),(0,W.jsx)(p.Z,{label:"多选框2",name:"checkbox-2",options:A.CycleOptions,all:!0,required:!0}),(0,W.jsx)(b.Z,{label:"颜色",name:"color",required:!0}),(0,W.jsx)(f.Z,{label:"日期1",name:"date-1",required:!0,tooltip:"日期的 placeholder 跟随 antd locale"}),(0,W.jsx)(f.Z,{label:"日期2",name:"date-2",showTime:!0,required:!0}),(0,W.jsx)(q.Z,{label:"日期范围1",name:"date-range-1",required:!0}),(0,W.jsx)(q.Z,{label:"日期范围2",name:"date-rage-2",showTime:!0,required:!0}),(0,W.jsx)(g.Z,{label:"时间1",name:"time-1",required:!0,tooltip:"时间的 placeholder 跟随 antd locale"}),(0,W.jsx)(g.Z,{label:"时间2",name:"time-2",format:"HH:mm",required:!0}),(0,W.jsx)(v.Z,{label:"时间范围1",name:"time-range-1",required:!0}),(0,W.jsx)(v.Z,{label:"时间范围2",name:"time-range-2",format:"HH:mm",required:!0}),(0,W.jsx)(y.Z,{label:"输入框",name:"input-1",required:!0}),(0,W.jsx)(y.Z,{label:"银行卡",name:"input-2",type:"bankCard",required:!0}),(0,W.jsx)(y.Z,{label:"手机号码",name:"input-3",type:"mobile",required:!0}),(0,W.jsx)(y.Z,{label:"身份证号",name:"input-4",type:"idCard",required:!0}),(0,W.jsx)(y.Z,{label:"邮箱",name:"input-5",type:"email",required:!0}),(0,W.jsx)(y.Z,{label:"用户名",name:"input-6",type:"userName",required:!0}),(0,W.jsx)(C.Z,{label:"密码1",name:"password-1",required:!0}),(0,W.jsx)(C.Z,{label:"密码2",name:"password-2",min:4,max:8,level:3,ignoreCase:!0,special:"><?-=",required:!0,tooltip:"4-8位字符，包含大小写字母、数字和符号(><?-=)三者组成"}),(0,W.jsx)(P.Z,{label:"TextArea",name:"textarea",required:!0}),(0,W.jsx)(w.Z,{label:"数字输入框",name:"number-1",required:!0}),(0,W.jsx)(w.Z,{label:"金额",name:"number-2",precision:2,addonAfter:"元",gte:0,lte:1e4,tooltip:"大于等于0，小于等于10000",required:!0,inputProps:{formatter:function(e){return"".concat(e).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(e){return e.replace(/\$\s?|(,*)/g,"")}}}),(0,W.jsx)(w.Z,{label:"费率",name:"number-3",precision:2,addonAfter:"%",gt:0,lt:6,tooltip:"大于0，小于6",required:!0}),(0,W.jsx)(w.Z,{label:"费率向下舍入",name:"number-4",precision:2,addonAfter:"%",gt:0,lt:6,tooltip:"数字精度向下舍入",useFloor:!0,required:!0}),(0,W.jsx)(I.Z,{label:"单选框1",name:"radio-1",options:A.CycleOptions,required:!0}),(0,W.jsx)(I.Z,{label:"单选框2",name:"radio-2",options:A.CycleOptions,all:!0,required:!0}),(0,W.jsx)(z.Z,{label:"选择器1",name:"select-1",options:A.CycleOptions,required:!0}),(0,W.jsx)(z.Z,{label:"选择器2",name:"select-2",options:A.CycleOptions,all:!0,required:!0}),(0,W.jsx)(k.Z,{label:"上传1",name:"upload-1",required:!0}),(0,W.jsx)(k.Z,{label:"上传2",name:"upload-2",type:"avatar",required:!0}),(0,W.jsx)(k.Z,{label:"上传3",name:"upload-3",type:"image",required:!0}),(0,W.jsx)(k.Z,{label:"上传4",name:"upload-4",type:"dragger",required:!0})]})})}a.default=function(){var e=(0,c.useState)(E.default),a=o()(e,2),l=a[0],n=a[1];return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)("div",{children:[(0,W.jsx)("span",{style:{marginRight:16},children:"Change locale of components:"}),(0,W.jsxs)(d.ZP.Group,{value:l,onChange:function(e){var a=e.target.value;n(a),a===E.default?R().locale("zh-cn"):R().locale("en")},children:[(0,W.jsx)(d.ZP.Button,{value:G.default,children:"English"},"en"),(0,W.jsx)(d.ZP.Button,{value:E.default,children:"中文"},"cn")]})]}),(0,W.jsxs)(F.ZP,{locale:l,children:[(0,W.jsx)("h3",{children:"表单"}),(0,W.jsx)(D,{}),(0,W.jsx)(x.Z,{}),(0,W.jsx)("h3",{children:"浮层表单"}),(0,W.jsx)(T.default,{}),(0,W.jsx)(H.default,{}),(0,W.jsx)(x.Z,{}),(0,W.jsx)("h3",{children:"分步表单"}),(0,W.jsx)(B.default,{}),(0,W.jsx)(x.Z,{}),(0,W.jsx)("h3",{children:"表格"}),(0,W.jsx)(O.default,{})]})]})}},82225:function(e,a,l){l.r(a);l(94074);var n=l(34638),r=l(72019),s=l(59089),t=l(86966),i=l(43026),o=l(14533),c=l(80013),d=l(13211);a.default=function(){return(0,d.jsxs)(n.ZP,{bizDescriptions:{column:2,bordered:!0,className:"context-class",size:"small"},bizForm:{labelWidth:120,className:"context-class",scrollToFirstError:{behavior:function(e){e.forEach((function(e){var a=e.el,l=e.top;a.scrollTop=l-72}))}}},bizTable:{autoRequest:!1,pagination:!1,size:"small",className:"context-class"},children:[(0,d.jsx)("h3",{children:"描述列表"}),(0,d.jsx)("h4",{children:"读取上下文配置"}),(0,d.jsxs)(r.Z,{children:[(0,d.jsx)(r.Z.Item,{label:"姓名",children:"xxx"}),(0,d.jsx)(r.Z.Item,{label:"年龄",children:"xxx"}),(0,d.jsx)(r.Z.Item,{label:"身高",children:"xxx"}),(0,d.jsx)(r.Z.Item,{label:"体重",children:"xxx"})]}),(0,d.jsx)(c.Z,{}),(0,d.jsx)("h4",{children:"部分自定义配置"}),(0,d.jsxs)(r.Z,{column:3,bordered:!1,className:"custom-class",children:[(0,d.jsx)(r.Z.Item,{label:"姓名",children:"xxx"}),(0,d.jsx)(r.Z.Item,{label:"年龄",children:"xxx"}),(0,d.jsx)(r.Z.Item,{label:"身高",children:"xxx"}),(0,d.jsx)(r.Z.Item,{label:"体重",children:"xxx"})]}),(0,d.jsx)(c.Z,{}),(0,d.jsx)("h3",{children:"表单"}),(0,d.jsx)("h4",{children:"读取上下文配置"}),(0,d.jsxs)(s.ZP,{name:"context-1",onFinish:function(e){console.log(e)},children:[(0,d.jsx)(t.Z,{label:"姓名",name:"name",required:!0}),(0,d.jsx)(i.Z,{label:"年龄",name:"age",precision:0})]}),(0,d.jsx)(c.Z,{}),(0,d.jsx)("h4",{children:"部分自定义配置"}),(0,d.jsxs)(s.ZP,{name:"context-2",className:"custom-class",layout:"vertical",onFinish:function(e){console.log(e)},children:[(0,d.jsx)(t.Z,{label:"姓名",name:"name",required:!0}),(0,d.jsx)(i.Z,{label:"年龄",name:"age",precision:0})]}),(0,d.jsx)(c.Z,{}),(0,d.jsx)("h3",{children:"表格"}),(0,d.jsx)("h4",{children:"读取上下文配置"}),(0,d.jsx)(o.Z,{dataSource:[{name:"张三",age:18},{name:"李四",age:22}],columns:[{dataIndex:"name",title:"姓名"},{dataIndex:"age",title:"年龄"}],rowKey:"name"}),(0,d.jsx)(c.Z,{}),(0,d.jsx)("h4",{children:"部分自定义配置"}),(0,d.jsx)(o.Z,{dataSource:[{name:"张三",age:18},{name:"李四",age:22}],columns:[{dataIndex:"name",title:"姓名"},{dataIndex:"age",title:"年龄"}],rowKey:"name",pagination:{pageSize:1,showSizeChanger:!1},className:"custom-class",size:"large"})]})}},79684:function(e,a,l){l.r(a);l(94074);var n=l(34638),r=l(59089),s=l(86966),t=l(28097),i=l(2898),o=l(13211);a.default=function(){return(0,o.jsx)("div",{children:(0,o.jsx)(n.ZP,{locale:i.default,children:(0,o.jsxs)(r.ZP,{onFinish:function(e){console.log(e)},children:[(0,o.jsx)(s.Z,{label:"first name",name:"first",required:!0}),(0,o.jsx)(s.Z,{label:"last name",name:"last",required:!0}),(0,o.jsx)(n.ZP,{locale:t.default,children:(0,o.jsx)(s.Z,{label:"中文名",name:"name",required:!0})})]})})})}}}]);