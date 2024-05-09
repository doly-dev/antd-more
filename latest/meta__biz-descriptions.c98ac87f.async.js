"use strict";(self.webpackChunkantd_more=self.webpackChunkantd_more||[]).push([[2227],{69574:function(e,n,a){a.r(n),a.d(n,{demos:function(){return p}});var t,o=a(66373),r=a.n(o),i=a(50408),s=a.n(i),d=a(15237),p={"biz-descriptions-demo-demo1":{component:d.memo(d.lazy((function(){return a.e(8538).then(a.bind(a,23894))}))),asset:{type:"BLOCK",id:"biz-descriptions-demo-demo1",refAtomIds:["biz-descriptions"],dependencies:{"index.tsx":{type:"FILE",value:a(33159).Z},react:{type:"NPM",value:"18.3.1"},"antd-more":{type:"NPM",value:"4.2.25"},"./constants.ts":{type:"FILE",value:a(87647).Z}},entry:"index.tsx"},context:{react:a(15237),"antd-more":a(9794),"./constants.ts":a(73838)},renderOpts:{compile:(t=s()(r()().mark((function e(){var n,t=arguments;return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([a.e(6481),a.e(7251)]).then(a.bind(a,97251));case 2:return e.abrupt("return",(n=e.sent).default.apply(n,t));case 3:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)})}}}},73838:function(e,n,a){a.r(n),a.d(n,{ApproveStatus:function(){return t},ApproveStatusOptions:function(){return o}});var t=function(e){return e.Processing="1",e.Approve="2",e.Refused="3",e}({}),o=[{value:t.Processing,label:"审核中",badge:{status:"processing"},tag:{alias:"待审核",color:"orange"}},{value:t.Approve,label:"审核通过",text:{style:{color:"green"}},badge:{status:"success"},tag:{color:"green"}},{value:t.Refused,label:"审核不通过",text:{style:{color:"red"}},badge:{status:"error"},tag:{color:"red"}}]},85035:function(e,n,a){a.r(n),a.d(n,{texts:function(){return t}});const t=[{value:"基于 Descriptions 扩展了 字段（BizField）、columns 列展示。",paraId:0,tocIndex:0},{value:"import { BizDescriptions } from 'antd-more';\n",paraId:1,tocIndex:3},{value:"除了以下参数，其余和 ",paraId:2,tocIndex:4},{value:"antd Descriptions",paraId:2,tocIndex:4},{value:" 组件一样。",paraId:2,tocIndex:4},{value:"参数",paraId:3,tocIndex:4},{value:"说明",paraId:3,tocIndex:4},{value:"类型",paraId:3,tocIndex:4},{value:"默认值",paraId:3,tocIndex:4},{value:"dataSource",paraId:3,tocIndex:4},{value:"数据",paraId:3,tocIndex:4},{value:"object",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"tooltip",paraId:3,tocIndex:4},{value:"标题后面的补充提示，需有标题才生效",paraId:3,tocIndex:4},{value:"ReactNode | (TooltipProps & { icon: ReactNode })",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"除了以下参数，其余和 ",paraId:4,tocIndex:5},{value:"antd DescriptionsItem",paraId:4,tocIndex:5},{value:" 组件一样。",paraId:4,tocIndex:5},{value:"ValueType",paraId:5,tocIndex:5},{value:" ",paraId:5,tocIndex:5},{value:"EnumData",paraId:5,tocIndex:5},{value:" 请参考 ",paraId:5,tocIndex:5},{value:"BizField",paraId:5,tocIndex:5},{value:" 组件 API 说明。",paraId:5,tocIndex:5},{value:"参数",paraId:6,tocIndex:5},{value:"说明",paraId:6,tocIndex:5},{value:"类型",paraId:6,tocIndex:5},{value:"默认值",paraId:6,tocIndex:5},{value:"valueType",paraId:6,tocIndex:5},{value:"值类型",paraId:6,tocIndex:5},{value:"ValueType",paraId:7,tocIndex:5},{value:"-",paraId:6,tocIndex:5},{value:"valueEnum",paraId:6,tocIndex:5},{value:"数据字典。",paraId:6,tocIndex:5},{value:"当 ",paraId:6,tocIndex:5},{value:"valueType",paraId:6,tocIndex:5},{value:" 为 ",paraId:6,tocIndex:5},{value:"enum",paraId:6,tocIndex:5},{value:" ",paraId:6,tocIndex:5},{value:"enumTag",paraId:6,tocIndex:5},{value:" ",paraId:6,tocIndex:5},{value:"enumBadge",paraId:6,tocIndex:5},{value:" 时生效。",paraId:6,tocIndex:5},{value:"EnumData",paraId:6,tocIndex:5},{value:"-",paraId:6,tocIndex:5},{value:"field",paraId:6,tocIndex:5},{value:"展示字段的配置。同 BizField 的配置项，支持 object 和 function 方式。",paraId:6,tocIndex:5},{value:"function 方式默认参数为当前值，需返回 BizField 的配置。",paraId:6,tocIndex:5},{value:"object | (text: any, record?: DataType, index?: number) => object",paraId:6,tocIndex:5},{value:"-",paraId:6,tocIndex:5},{value:"tooltip",paraId:6,tocIndex:5},{value:"标签后面的补充提示，需有标签才生效",paraId:6,tocIndex:5},{value:"ReactNode | (TooltipProps & { icon: ReactNode })",paraId:6,tocIndex:5},{value:"-",paraId:6,tocIndex:5}]},33159:function(e,n){n.Z='import * as React from \'react\';\nimport { BizDescriptions } from \'antd-more\';\nimport { ApproveStatusOptions } from \'./constants\';\n\nconst data = {\n  text1: \'\',\n  text2: \'这是一段文本\',\n  text3: \'长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本\',\n  number1: 100,\n  number2: 40,\n  number3: 10,\n  color: \'red\',\n  date: \'2020-10-10 10:00:00\',\n  startDate: \'2020-10-10 10:00:00\',\n  endDate: \'2020-12-12 10:00:00\',\n  status: \'1\',\n  other: \'其他内容\',\n  image: \'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg\',\n  image2: [\n    \'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg\',\n    \'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg\'\n  ]\n};\n\nconst Demo = () => {\n  return (\n    <BizDescriptions title="标题" tooltip="标题提示文字">\n      <BizDescriptions.Item label="空字符串" valueType="text" tooltip="空字符串显示 -">\n        {data.text1}\n      </BizDescriptions.Item>\n      <BizDescriptions.Item label="空字符串" valueType="text">\n        {data.text2}\n      </BizDescriptions.Item>\n      <BizDescriptions.Item label="金额" valueType="money">\n        {data.number1}\n      </BizDescriptions.Item>\n      <BizDescriptions.Item label="长文本" valueType="text" span={2} tooltip="占2列">\n        {data.text3}\n      </BizDescriptions.Item>\n      <BizDescriptions.Item label="进度条" valueType="progress">\n        {data.number2}\n      </BizDescriptions.Item>\n      <BizDescriptions.Item label="百分比" valueType="percent">\n        {data.number3}\n      </BizDescriptions.Item>\n      <BizDescriptions.Item\n        label="百分比样式"\n        valueType="percent"\n        field={{\n          showSymbol: true,\n          showColor: true\n        }}\n      >\n        {data.number3}\n      </BizDescriptions.Item>\n      <BizDescriptions.Item label="颜色" valueType="color">\n        {data.color}\n      </BizDescriptions.Item>\n      <BizDescriptions.Item\n        label="颜色"\n        valueType="color"\n        field={{\n          showText: true\n        }}\n      >\n        {data.color}\n      </BizDescriptions.Item>\n      <BizDescriptions.Item label="日期" valueType="date">\n        {data.date}\n      </BizDescriptions.Item>\n      <BizDescriptions.Item label="日期时间" valueType="dateTime">\n        {data.date}\n      </BizDescriptions.Item>\n      <BizDescriptions.Item label="时间" valueType="time">\n        {data.date}\n      </BizDescriptions.Item>\n      <BizDescriptions.Item label="日期时间区间" valueType="dateTimeRange" span={2}>\n        {[data.startDate, data.endDate]}\n      </BizDescriptions.Item>\n      <BizDescriptions.Item label="状态" valueType="enum" valueEnum={ApproveStatusOptions}>\n        {data.status}\n      </BizDescriptions.Item>\n      <BizDescriptions.Item label="状态" valueType="enumTag" valueEnum={ApproveStatusOptions}>\n        {data.status}\n      </BizDescriptions.Item>\n      <BizDescriptions.Item label="状态" valueType="enumBadge" valueEnum={ApproveStatusOptions}>\n        {data.status}\n      </BizDescriptions.Item>\n      <BizDescriptions.Item label="图片" valueType="image">\n        {data.image}\n      </BizDescriptions.Item>\n      <BizDescriptions.Item label="多张图片" valueType="image">\n        {data.image2}\n      </BizDescriptions.Item>\n    </BizDescriptions>\n  );\n};\n\nexport default Demo;\n'},87647:function(e,n){n.Z="// 审核状态\n// 1-审核中 2-审核通过 3-审核不通过\nexport enum ApproveStatus {\n  Processing = '1',\n  Approve = '2',\n  Refused = '3'\n}\n\n// 审核状态选项\nexport const ApproveStatusOptions = [\n  {\n    value: ApproveStatus.Processing,\n    label: '审核中',\n    badge: {\n      status: 'processing'\n    },\n    tag: {\n      alias: '待审核',\n      color: 'orange'\n    }\n  },\n  {\n    value: ApproveStatus.Approve,\n    label: '审核通过',\n    text: {\n      style: {\n        color: 'green'\n      }\n    },\n    badge: {\n      status: 'success'\n    },\n    tag: {\n      color: 'green'\n    }\n  },\n  {\n    value: ApproveStatus.Refused,\n    label: '审核不通过',\n    text: {\n      style: {\n        color: 'red'\n      }\n    },\n    badge: {\n      status: 'error'\n    },\n    tag: {\n      color: 'red'\n    }\n  }\n];\n"}}]);