"use strict";(self.webpackChunkantd_more=self.webpackChunkantd_more||[]).push([[7216],{7216:function(e,r,n){n.r(r),n.d(r,{default:function(){return h}});var t=n(58015),s=n.n(t),a=n(48411),o=n.n(a),i=n(2488),l=n.n(i),u=(n(978),n(25599)),d=n(24174),c=n(6763),v=n(33648),f=n(4476),m=function(e,r){var n="";if(r)if(r.length<8||r.length>16)n="密码长度8～16个字符";else{var t=(0,f.Z)(r);(t.containes.lowerCaseLetter||t.containes.upperCaseLetter)&&t.containes.number||(n="必须包含字母+数字")}return n?Promise.reject(n):Promise.resolve()},p=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"password",n=function(n,t){var s="",a=e.getFieldValue(r);return a&&a===t?(s="新密码不能与原密码一致")?Promise.reject(s):Promise.resolve():m(0,t)};return n},w=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"password",n=function(n,t){var s="";return t?t!==e.getFieldValue(r)&&(s="两次输入的密码不一致"):s="请再次输入新密码",s?Promise.reject(s):Promise.resolve()};return n},g=n(50107),h=function(){var e=u.ZP.useForm(),r=l()(e,1)[0];return(0,g.jsxs)(u.ZP,{submitter:{submitText:"确定",noReset:!0},onFinish:function(){var e=o()(s()().mark((function e(r){return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,v.Z)(2e3);case 2:console.log(r);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),form:r,labelWidth:98,name:"form-change-password",children:[(0,g.jsx)(d.Z,{label:"手机号码",children:"13000000000"}),(0,g.jsx)(d.Z,{label:"用户名",children:"guest"}),(0,g.jsx)(c.Z,{label:"原密码",name:"password",required:!0,validated:!1,validateTrigger:"onBlur"}),(0,g.jsx)(c.Z,{label:"新密码",name:"newPassword",required:!0,validateTrigger:"onBlur",dependencies:["password"],extendRules:[{validator:p(r)}]}),(0,g.jsx)(c.Z,{label:"重复新密码",name:"repeatNewPassword",required:!0,validateTrigger:"onBlur",dependencies:["newPassword"],rules:[{validator:w(r,"newPassword")}]})]})}}}]);