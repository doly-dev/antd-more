"use strict";(self.webpackChunkantd_more=self.webpackChunkantd_more||[]).push([[6419],{11132:function(n,e,t){t.r(e),t.d(e,{demos:function(){return d}});var r,a,o,u=t(84571),i=t.n(u),c=t(60771),l=t.n(c),s=t(44513),d={"captcha-button-demo-demo1":{component:s.memo(s.lazy((function(){return t.e(5529).then(t.bind(t,86917))}))),asset:{type:"BLOCK",id:"captcha-button-demo-demo1",refAtomIds:["captcha-button"],dependencies:{"index.tsx":{type:"FILE",value:t(49326).Z},react:{type:"NPM",value:"18.3.1"},"antd-more":{type:"NPM",value:"4.2.27"}},entry:"index.tsx"},context:{react:t(44513),"antd-more":t(3865)},renderOpts:{compile:(o=l()(i()().mark((function n(){var e,r=arguments;return i()().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.e(5736).then(t.bind(t,25736));case 2:return n.abrupt("return",(e=n.sent).default.apply(e,r));case 3:case"end":return n.stop()}}),n)}))),function(){return o.apply(this,arguments)})}},"captcha-button-demo-demo2":{component:s.memo(s.lazy((function(){return t.e(5529).then(t.bind(t,95866))}))),asset:{type:"BLOCK",id:"captcha-button-demo-demo2",refAtomIds:["captcha-button"],dependencies:{"index.tsx":{type:"FILE",value:t(21802).Z},react:{type:"NPM",value:"18.3.1"},"antd-more":{type:"NPM",value:"4.2.27"},ut2:{type:"NPM",value:"1.9.1"}},entry:"index.tsx"},context:{react:t(44513),"antd-more":t(3865),ut2:t(14145)},renderOpts:{compile:(a=l()(i()().mark((function n(){var e,r=arguments;return i()().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.e(5736).then(t.bind(t,25736));case 2:return n.abrupt("return",(e=n.sent).default.apply(e,r));case 3:case"end":return n.stop()}}),n)}))),function(){return a.apply(this,arguments)})}},"captcha-button-demo-demo3":{component:s.memo(s.lazy((function(){return t.e(5529).then(t.bind(t,79434))}))),asset:{type:"BLOCK",id:"captcha-button-demo-demo3",refAtomIds:["captcha-button"],dependencies:{"index.tsx":{type:"FILE",value:t(96201).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.17.3"},"util-helpers":{type:"NPM",value:"4.22.2"},ut2:{type:"NPM",value:"1.9.1"},"rc-hooks":{type:"NPM",value:"3.0.9"},"antd-more":{type:"NPM",value:"4.2.27"}},entry:"index.tsx"},context:{react:t(44513),antd:t(48014),"util-helpers":t(96397),ut2:t(14145),"rc-hooks":t(7465),"antd-more":t(3865)},renderOpts:{compile:(r=l()(i()().mark((function n(){var e,r=arguments;return i()().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.e(5736).then(t.bind(t,25736));case 2:return n.abrupt("return",(e=n.sent).default.apply(e,r));case 3:case"end":return n.stop()}}),n)}))),function(){return r.apply(this,arguments)})}}}},7465:function(n,e,t){t.r(e),t.d(e,{clearCache:function(){return r.L},useAsync:function(){return r.Z},useClickAway:function(){return N},useControllableValue:function(){return B.Z},useDebounce:function(){return I},useDebounceFn:function(){return h},useLatest:function(){return m.Z},useLimitList:function(){return b},useLoadMore:function(){return d},useMount:function(){return E.Z},useMountedRef:function(){return y.Z},usePagination:function(){return f.Z},usePersistFn:function(){return u.Z},usePrevious:function(){return w},useSafeState:function(){return k.Z},useSetState:function(){return x.Z},useSize:function(){return O},useThrottle:function(){return C.Z},useThrottleFn:function(){return g.Z},useUnmount:function(){return v.Z},useUnmountedRef:function(){return M.Z},useUpdate:function(){return R.Z},useUpdateEffect:function(){return s.Z},useUpdateLayoutEffect:function(){return L}});var r=t(16401),a=t(83213),o=t(44513),u=t(49827),i=function(n){return null!=n&&n===(null==n?void 0:n.window)};function c(n){return"function"==typeof n?n():n}var l=function(n){var e=void 0===n?{}:n,t=e.target,r=e.threshold,a=void 0===r?100:r,l=e.onScrollLower,s=void 0===l?function(){}:l,d=(0,u.Z)(s),f=(0,o.useCallback)((function(){if(t){var n,e=c(t);if(e)void 0===(n=e)&&(n=window),("undefined"==typeof window?0:i(n)?document.documentElement.scrollHeight:n.scrollHeight)-function(n){return void 0===n&&(n=window),"undefined"==typeof window?0:i(n)?window.scrollY:(null==n?void 0:n.scrollTop)||0}(e)<=function(n){return void 0===n&&(n=window),"undefined"==typeof window?0:i(n)?document.documentElement.clientHeight:n.clientHeight}(e)+a&&d()}}),[d,t,a]);(0,o.useEffect)((function(){if(t){var n=c(t);if(n)return n.addEventListener("scroll",f),function(){n.removeEventListener("scroll",f)}}}),[t,f])},s=t(64141);var d=function(n,e){var t=e||{},u=t.threshold,i=void 0===u?100:u,c=t.target,d=t.isNoMore,f=void 0===d?function(){return!1}:d,p=t.refreshDeps,v=void 0===p?[]:p,m=t.autoRun,h=void 0===m||m,I=(0,a._T)(t,["threshold","target","isNoMore","refreshDeps","autoRun"]),g=(0,o.useRef)([]),C=(0,o.useRef)(1),b=(0,r.Z)(n,(0,a.pi)((0,a.pi)({defaultParams:[{current:C.current}],autoRun:h},I),{onError:function(n,e){var t;C.current>1&&(C.current-=1),null===(t=null==I?void 0:I.onError)||void 0===t||t.call(I,n,e)},__INTERNAL_FORMAT__:function(n){return g.current=1===C.current?n.list:g.current.concat(n.list),(0,a.pi)((0,a.pi)({},n),{list:g.current})}})),x=b.run,y=b.data,w=b.loading,k=b.cancel,E=b.params,M=b.mutate,R=(0,a._T)(b,["run","data","loading","cancel","params","mutate"]),L=!!f&&(!w&&f(y)),Z=(0,a.CR)(E||[]),F=Z[0],S=Z.slice(1),P=(0,o.useCallback)((function(){return x.apply(void 0,[{current:C.current}].concat(S))}),[S,x]),N=(0,o.useCallback)((function(){w&&C.current>1&&(C.current-=1),k()}),[k,w]),B=(0,o.useCallback)((function(){w||L||(C.current+=1,P())}),[w,L,P]),T=(0,o.useCallback)((function(n){var e="function"==typeof n?n(y):n;g.current=(null==e?void 0:e.list)||[],M(e)}),[y,M]),V=(0,o.useCallback)((function(){return N(),C.current=1,T((function(n){return(0,a.pi)((0,a.pi)({},n),{list:[]})})),P()}),[N,P,T]),A=(0,o.useCallback)((function(){if(!w&&c)return B()}),[B,c,w]);return l({target:c,threshold:i,onScrollLower:A}),(0,s.Z)((function(){h&&Array.isArray(v)&&v.length>0&&V()}),v),(0,a.pi)((0,a.pi)({},R),{loading:w,data:y,run:x,refresh:V,cancel:N,mutate:T,params:[(0,a.pi)((0,a.pi)({},F),{current:C.current})].concat(S),loadMore:B,loadingMore:w&&C.current>1,noMore:L})},f=t(57287),p=t(58727),v=t(67694),m=t(97661);var h=function(n,e,t){void 0===e&&(e=0),void 0===t&&(t=!1);var r=(0,m.Z)(n),a=(0,o.useRef)((0,p.Z)((function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return r.current.apply(void 0,n)}),e,t));return(0,v.Z)((function(){a.current.cancel()})),{run:a.current,cancel:a.current.cancel,flush:a.current.flush}};var I=function(n,e,t){void 0===e&&(e=0),void 0===t&&(t=!1);var r=(0,a.CR)((0,o.useState)(n),2),u=r[0],i=r[1],c=h(i,e,t).run;return(0,o.useEffect)((function(){c(n)}),[c,n]),u},g=t(54118),C=t(71112);var b=function(n,e){void 0===n&&(n=[]),void 0===e&&(e={});var t=e||{},r=t.count,u=void 0===r?3:r,i=t.defaultLimited,c=void 0===i||i,l=(0,o.useRef)(c),s=(0,o.useMemo)((function(){return Array.isArray(n)?n:[]}),[n]),d=(0,o.useMemo)((function(){return u>0?Math.ceil(u):0}),[u]),f=(0,o.useMemo)((function(){return s.length>d}),[d,s.length]),p=(0,a.CR)((0,o.useState)((function(){return f&&c?s.slice(0,d):s})),2),v=p[0],m=p[1];return(0,o.useEffect)((function(){m(l.current?s.slice(0,d):s)}),[d,s]),{canLimit:f,limited:l.current,data:v,toggle:function(){f&&(l.current=!l.current),m(l.current?s.slice(0,d):s)}}},x=t(17829),y=t(1495);function w(n){var e=(0,y.Z)(),t=(0,o.useRef)(),r=(0,o.useRef)(n);return e.current&&r.current!==n&&(t.current=r.current,r.current=n),t.current}var k=t(82869),E=t(96684),M=t(45983),R=t(30650),L=function(n,e){var t=(0,o.useRef)(!1);(0,o.useLayoutEffect)((function(){if(t.current)return n();t.current=!0}),e)},Z=t(85474),F=t(87298),S=t.n(F);var P=function(n){return"function"==typeof n?n():"object"===S()(n)&&n&&"current"in n?n.current:n};var N=function(n,e,t){void 0===t&&(t="click");var r=(0,Z.Z)(n),a=(0,m.Z)(r),u=r.every((function(n){return"function"==typeof n})),i=u?a:r,c=(0,m.Z)(e),l=(0,Z.Z)(t),s=(0,m.Z)(l),d=l.join("");(0,o.useEffect)((function(){var n=function(n){var e;(u?i.current:i).some((function(e){var t=P(e);return!t||(null==t?void 0:t.contains(n.target))}))||null===(e=c.current)||void 0===e||e.call(c,n)},e=(0,Z.Z)(s.current);return e.forEach((function(e){document.addEventListener(e,n)})),function(){e.forEach((function(e){document.removeEventListener(e,n)}))}}),[i,u,d])},B=t(44276),T=t(80916),V="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,A=["top","right","bottom","left","width","height","size","weight"],_={characterData:!0,childList:!0,attributes:!0,subtree:!0},z=function(n){var e=this;this.refresh=function(){e.targetNode&&e.callback([{target:e.targetNode}],{})},this.onTransitionEnd_=function(n){var t=n.propertyName,r=void 0===t?"":t;A.some((function(n){return r.indexOf(n)>-1}))&&e.throttleRefresh()},this.observe=function(n,t){V&&(e.targetNode=n,document.addEventListener("transitionend",e.onTransitionEnd_),window.addEventListener("resize",e.throttleRefresh),e.observer.observe(document,(0,a.pi)((0,a.pi)({},_),t)))},this.disconnect=function(){V&&(e.throttleRefresh.cancel(),e.targetNode=null,document.removeEventListener("transitionend",e.onTransitionEnd_),window.removeEventListener("resize",e.throttleRefresh),e.observer.disconnect())},this.throttleRefresh=(0,T.Z)(this.refresh,50),this.targetNode=null,this.callback=n,this.observer=new MutationObserver(this.throttleRefresh)};var O=function(n){var e=(0,m.Z)(n),t="function"==typeof n,r=t?e:n,u=(0,a.CR)((0,o.useState)((function(){var e=P(n);return{width:null==e?void 0:e.clientWidth,height:null==e?void 0:e.clientHeight}})),2),i=u[0],c=u[1];return(0,o.useEffect)((function(){var n=P(t?r.current:r);function e(n){n&&c({width:n.clientWidth,height:n.clientHeight})}if(!n)return function(){};e(n);var a=new z((function(n){n.forEach((function(n){e(n.target)}))}));return a.observe(n),function(){a.disconnect()}}),[r,t]),i}},7055:function(n,e,t){t.r(e),t.d(e,{texts:function(){return r}});const r=[{value:"推荐使用 ",paraId:0,tocIndex:0},{value:"BizFormItemCaptcha",paraId:1,tocIndex:0},{value:"。",paraId:0,tocIndex:0},{value:"验证码按钮，用于获取手机号验证码、邮箱验证码等场景。",paraId:2,tocIndex:0},{value:"除了以下参数，其余和 antd ",paraId:3,tocIndex:5},{value:"Button",paraId:3,tocIndex:5},{value:" 组件一样。",paraId:3,tocIndex:5},{value:"参数",paraId:4,tocIndex:5},{value:"说明",paraId:4,tocIndex:5},{value:"类型",paraId:4,tocIndex:5},{value:"默认值",paraId:4,tocIndex:5},{value:"start",paraId:4,tocIndex:5},{value:"是否开始倒计时，当该值变动并且为 ",paraId:4,tocIndex:5},{value:"true",paraId:4,tocIndex:5},{value:" 时",paraId:4,tocIndex:5},{value:"boolean",paraId:4,tocIndex:5},{value:"false",paraId:4,tocIndex:5},{value:"second",paraId:4,tocIndex:5},{value:"倒计时时长，单位秒",paraId:4,tocIndex:5},{value:"number",paraId:4,tocIndex:5},{value:"60",paraId:4,tocIndex:5},{value:"onEnd",paraId:4,tocIndex:5},{value:"倒计时结束触发，可用于重置 ",paraId:4,tocIndex:5},{value:"start",paraId:4,tocIndex:5},{value:"() => void",paraId:4,tocIndex:5},{value:"-",paraId:4,tocIndex:5},{value:"initText",paraId:4,tocIndex:5},{value:"初始显示文本",paraId:4,tocIndex:5},{value:"string",paraId:4,tocIndex:5},{value:"获取验证码",paraId:4,tocIndex:5},{value:"runText",paraId:4,tocIndex:5},{value:"倒计时显示文本，包含 ",paraId:4,tocIndex:5},{value:"%s",paraId:4,tocIndex:5},{value:" 会自动替换为秒数",paraId:4,tocIndex:5},{value:"string",paraId:4,tocIndex:5},{value:"%s秒后重新获取",paraId:4,tocIndex:5},{value:"resetText",paraId:4,tocIndex:5},{value:"结束显示文本",paraId:4,tocIndex:5},{value:"string",paraId:4,tocIndex:5},{value:"重新获取验证码",paraId:4,tocIndex:5}]},49326:function(n,e){e.Z="import React, { useCallback, useState } from 'react';\nimport { CaptchaButton } from 'antd-more';\n\nexport default () => {\n  const [start, setStart] = useState(false);\n\n  const handleClick = useCallback(() => {\n    setStart(true);\n  }, []);\n  const handleEnd = useCallback(() => {\n    setStart(false);\n  }, []);\n\n  return <CaptchaButton start={start} second={15} onClick={handleClick} onEnd={handleEnd} />;\n};\n"},21802:function(n,e){e.Z="import React, { useCallback, useState } from 'react';\nimport { CaptchaButton } from 'antd-more';\nimport { sleep } from 'ut2';\n\n// 接口请求\nasync function getValidateCode() {\n  await sleep();\n  return;\n}\n\nexport default () => {\n  const [start, setStart] = useState(false);\n  const [loading, setLoading] = useState(false);\n\n  const handleClick = useCallback(() => {\n    setLoading(true);\n    getValidateCode().then(() => {\n      setLoading(false);\n      setStart(true);\n    });\n  }, []);\n  const handleEnd = useCallback(() => {\n    setStart(false);\n  }, []);\n\n  return (\n    <CaptchaButton\n      start={start}\n      second={10}\n      onClick={handleClick}\n      initText=\"点击开始倒计时\"\n      runText=\"剩余%s秒\"\n      resetText=\"重新开始\"\n      onEnd={handleEnd}\n      loading={loading}\n    />\n  );\n};\n"},96201:function(n,e){e.Z="import React, { useCallback, useState, useRef } from 'react';\nimport type { FormInstance } from 'antd';\nimport { Form, Input, Row, Col, Button } from 'antd';\nimport { isMobile } from 'util-helpers';\nimport { sleep } from 'ut2';\nimport { useAsync } from 'rc-hooks';\nimport { CaptchaButton } from 'antd-more';\n\n// 接口：发送短信验证码\nasync function asyncSendVerificationCode(mobile: string) {\n  await sleep();\n  return {\n    data: {\n      requestId: 'abcdefg',\n      mobile\n    }\n  };\n}\n\ninterface VerificateCodeInputProps {\n  mobileField?: string;\n  form?: FormInstance;\n  value?: any;\n  onChange?: (value: any) => void;\n}\n\n// 组件：验证码和获取验证码按钮\nconst VerificateCodeInput: React.FC<VerificateCodeInputProps> = ({\n  mobileField = 'mobile',\n  form,\n  value,\n  onChange\n}) => {\n  const inputRef = useRef(null);\n  const [start, setStart] = useState(false); // 倒计时按钮状态\n\n  const { run, loading } = useAsync(asyncSendVerificationCode, { autoRun: false });\n\n  const triggerChange = (changeValue) => {\n    onChange?.({ ...value, ...changeValue });\n  };\n\n  const onCodeBlur = () => {\n    form.validateFields(['code', 'validateCode']);\n  };\n\n  const onCodeChange = (e) => {\n    triggerChange({ validateCode: e.target.value });\n  };\n\n  const onButtonClick = () => {\n    // 校验手机号码\n    form.validateFields([mobileField]).then((values) => {\n      return run(values[mobileField]).then((res) => {\n        triggerChange({ requestId: res.data.requestId });\n        setStart(true);\n        inputRef.current.focus();\n      });\n    });\n  };\n\n  const handleEnd = useCallback(() => {\n    setStart(false);\n  }, []);\n\n  return (\n    <Row gutter={8}>\n      <Col span={16}>\n        <Input\n          placeholder=\"请输入验证码\"\n          onChange={onCodeChange}\n          onBlur={onCodeBlur}\n          value={value.validateCode}\n          maxLength={6}\n          allowClear\n          ref={inputRef}\n        />\n      </Col>\n      <Col span={8}>\n        <CaptchaButton\n          start={start}\n          onClick={onButtonClick}\n          onEnd={handleEnd}\n          block\n          loading={loading}\n        />\n      </Col>\n    </Row>\n  );\n};\n\n// 初始值\nconst initialValues = {\n  mobile: '',\n  code: {\n    requestId: '',\n    validateCode: ''\n  }\n};\n\n// 规整化参数\nconst normalizeValues = ({ mobile, code: { validateCode, requestId } }) => {\n  return {\n    mobile,\n    validateCode,\n    requestId\n  };\n};\n\nconst formItemLayout = {\n  labelCol: { span: 5 },\n  wrapperCol: { span: 16 }\n};\nconst buttonItemLayout = {\n  wrapperCol: { sm: { offset: 5 }, span: 16 }\n};\n\nexport default () => {\n  const [form] = Form.useForm();\n  const [params, setParams] = useState(() => normalizeValues(initialValues));\n\n  const onFinish = useCallback((values) => {\n    setParams(normalizeValues(values));\n  }, []);\n\n  return (\n    <>\n      <Form\n        {...formItemLayout}\n        onFinish={onFinish}\n        form={form}\n        initialValues={initialValues}\n        name=\"captcha-button-demo3\"\n      >\n        <Form.Item\n          label=\"手机号码\"\n          name=\"mobile\"\n          validateFirst\n          validateTrigger=\"onBlur\"\n          required\n          rules={[\n            {\n              validator: (rule, value) => {\n                let errMsg = '';\n\n                if (!value) {\n                  errMsg = '请输入手机号码';\n                } else if (!isMobile(value)) {\n                  errMsg = '请输入正确的手机号码';\n                }\n\n                if (errMsg) {\n                  return Promise.reject(errMsg);\n                }\n\n                return Promise.resolve();\n              }\n            }\n          ]}\n        >\n          <Input placeholder=\"请输入手机号码\" allowClear maxLength={11} />\n        </Form.Item>\n        <Form.Item\n          name=\"code\"\n          label=\"验证码\"\n          validateFirst\n          validateTrigger=\"onBlur\"\n          required\n          rules={[\n            {\n              validator(rule, value) {\n                let errMsg = '';\n                if (!value.requestId) {\n                  errMsg = '请点击获取验证码并输入';\n                } else if (!value.validateCode) {\n                  errMsg = '请输入验证码';\n                }\n                if (errMsg) {\n                  return Promise.reject(errMsg);\n                }\n\n                return Promise.resolve();\n              }\n            }\n          ]}\n        >\n          <VerificateCodeInput form={form} />\n        </Form.Item>\n        <Form.Item {...buttonItemLayout}>\n          <Button type=\"primary\" htmlType=\"submit\">\n            确定\n          </Button>\n        </Form.Item>\n      </Form>\n      <div>\n        params:\n        {JSON.stringify(params)}\n      </div>\n    </>\n  );\n};\n"}}]);