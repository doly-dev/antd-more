"use strict";(self.webpackChunkantd_more=self.webpackChunkantd_more||[]).push([[4720],{71297:function(e,a,n){n.r(a),n.d(a,{demos:function(){return c}});var t,d,l,r=n(41187),o=n.n(r),I=n(40800),u=n.n(I),p=n(36905),c={"biz-field-demo-demo1":{component:p.memo(p.lazy((function(){return n.e(7717).then(n.bind(n,38490))}))),asset:{type:"BLOCK",id:"biz-field-demo-demo1",refAtomIds:["biz-field"],dependencies:{"index.tsx":{type:"FILE",value:n(98525).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.18.3"},"antd-more":{type:"NPM",value:"4.2.32"},"./constants.ts":{type:"FILE",value:n(46892).Z}},entry:"index.tsx"},context:{react:n(36905),antd:n(65137),"antd-more":n(78061),"./constants.ts":n(31463)},renderOpts:{compile:(l=u()(o()().mark((function e(){var a,t=arguments;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(6793),n.e(3075)]).then(n.bind(n,13075));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,t));case 3:case"end":return e.stop()}}),e)}))),function(){return l.apply(this,arguments)})}},"biz-field-demo-more":{component:p.memo(p.lazy((function(){return n.e(7717).then(n.bind(n,23857))}))),asset:{type:"BLOCK",id:"biz-field-demo-more",refAtomIds:["biz-field"],dependencies:{"index.tsx":{type:"FILE",value:n(7238).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.18.3"},"antd-more":{type:"NPM",value:"4.2.32"}},entry:"index.tsx"},context:{react:n(36905),antd:n(65137),"antd-more":n(78061)},renderOpts:{compile:(d=u()(o()().mark((function e(){var a,t=arguments;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(6793),n.e(3075)]).then(n.bind(n,13075));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,t));case 3:case"end":return e.stop()}}),e)}))),function(){return d.apply(this,arguments)})}},"biz-field-demo-fieldnames":{component:p.memo(p.lazy((function(){return n.e(7717).then(n.bind(n,11309))}))),asset:{type:"BLOCK",id:"biz-field-demo-fieldnames",refAtomIds:["biz-field"],dependencies:{"index.tsx":{type:"FILE",value:n(18620).Z},react:{type:"NPM",value:"18.3.1"},"antd-more":{type:"NPM",value:"4.2.32"},"./currency.ts":{type:"FILE",value:n(17749).Z}},entry:"index.tsx"},context:{react:n(36905),"antd-more":n(78061),"./currency.ts":n(88279)},renderOpts:{compile:(t=u()(o()().mark((function e(){var a,t=arguments;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(6793),n.e(3075)]).then(n.bind(n,13075));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,t));case 3:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)})}}}},31463:function(e,a,n){n.r(a),n.d(a,{ApproveStatus:function(){return t},ApproveStatusOptions:function(){return d}});var t=function(e){return e.Processing="1",e.Approve="2",e.Refused="3",e}({}),d=[{value:t.Processing,label:"审核中",badge:{status:"processing"},tag:{alias:"待审核",color:"orange"}},{value:t.Approve,label:"审核通过",text:{style:{color:"green"}},badge:{status:"success"},tag:{color:"green"}},{value:t.Refused,label:"审核不通过",text:{style:{color:"red"}},badge:{status:"error"},tag:{color:"red"}}]},88279:function(e,a,n){n.r(a);a.default=[{symbol:"¥",code:"CNY",name:"人民币",tag:{color:"orange"}},{symbol:"$",code:"USD",name:"美元"},{symbol:"€",code:"EUR",name:"欧元"},{symbol:"￡",code:"GBP",name:"英镑"}]},37233:function(e,a,n){n.r(a),n.d(a,{texts:function(){return t}});const t=[{value:"业务常见字段显示。",paraId:0,tocIndex:0},{value:"在 BizTable BizDescriptions 中使用更方便，只需配置 ",paraId:1,tocIndex:0},{value:"valueType",paraId:1,tocIndex:0},{value:" 即可。",paraId:1,tocIndex:0},{value:"枚举类型 ",paraId:2,tocIndex:4},{value:"enum",paraId:2,tocIndex:4},{value:" ",paraId:2,tocIndex:4},{value:"enumTag",paraId:2,tocIndex:4},{value:" ",paraId:2,tocIndex:4},{value:"enumBadge",paraId:2,tocIndex:4},{value:" 可设置 ",paraId:2,tocIndex:4},{value:"fieldNames",paraId:2,tocIndex:4},{value:" 自定义字段名。",paraId:2,tocIndex:4},{value:"import { BizField } from 'antd-more';\n\n<BizField value={value} valueType={valueType} />;\n",paraId:3,tocIndex:5},{value:"参数",paraId:4,tocIndex:6},{value:"说明",paraId:4,tocIndex:6},{value:"类型",paraId:4,tocIndex:6},{value:"默认值",paraId:4,tocIndex:6},{value:"value",paraId:4,tocIndex:6},{value:"值",paraId:4,tocIndex:6},{value:"any",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"valueType",paraId:4,tocIndex:6},{value:"值类型",paraId:4,tocIndex:6},{value:"ValueType",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"valueEnum",paraId:4,tocIndex:6},{value:"包含 ",paraId:4,tocIndex:6},{value:"value",paraId:4,tocIndex:6},{value:" ",paraId:4,tocIndex:6},{value:"label",paraId:4,tocIndex:6},{value:" 的数据字典，或通过 ",paraId:4,tocIndex:6},{value:"fieldNames",paraId:4,tocIndex:6},{value:" 自定义字段名。",paraId:4,tocIndex:6},{value:"当 ",paraId:4,tocIndex:6},{value:"valueType",paraId:4,tocIndex:6},{value:" 为 ",paraId:4,tocIndex:6},{value:"enum",paraId:4,tocIndex:6},{value:" ",paraId:4,tocIndex:6},{value:"enumTag",paraId:4,tocIndex:6},{value:" ",paraId:4,tocIndex:6},{value:"enumBadge",paraId:4,tocIndex:6},{value:" 时生效。",paraId:4,tocIndex:6},{value:"EnumData",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"formatValue",paraId:4,tocIndex:6},{value:"格式化 ",paraId:4,tocIndex:6},{value:"value",paraId:4,tocIndex:6},{value:" 。",paraId:4,tocIndex:6},{value:"在 BizTable 或 BizDescriptions ，可对数据进行转换，如金额单位、图片等。",paraId:4,tocIndex:6},{value:"(value: any) => any",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"类型",paraId:5,tocIndex:7},{value:"描述",paraId:5,tocIndex:7},{value:"示例",paraId:5,tocIndex:7},{value:"text",paraId:5,tocIndex:7},{value:"默认不做处理，当值为 ",paraId:5,tocIndex:7},{value:"null",paraId:5,tocIndex:7},{value:" ",paraId:5,tocIndex:7},{value:"undefined",paraId:5,tocIndex:7},{value:" ",paraId:5,tocIndex:7},{value:'""',paraId:5,tocIndex:7},{value:" 时，显示默认值 ",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"money",paraId:5,tocIndex:7},{value:"金额",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"index",paraId:5,tocIndex:7},{value:"序列号",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"indexBorder",paraId:5,tocIndex:7},{value:"带 border 的序列号",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"progress",paraId:5,tocIndex:7},{value:"进度条",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"percent",paraId:5,tocIndex:7},{value:"百分比",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"color",paraId:5,tocIndex:7},{value:"颜色",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"enum",paraId:5,tocIndex:7},{value:"枚举值，需配合 ",paraId:5,tocIndex:7},{value:"valueEnum",paraId:5,tocIndex:7},{value:" 使用。",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"enumTag",paraId:5,tocIndex:7},{value:"标签形式的枚举值，需配合 ",paraId:5,tocIndex:7},{value:"valueEnum",paraId:5,tocIndex:7},{value:" 使用。",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"enumBadge",paraId:5,tocIndex:7},{value:"Badge 形式的枚举值，需配合 ",paraId:5,tocIndex:7},{value:"valueEnum",paraId:5,tocIndex:7},{value:" 使用。",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"date",paraId:5,tocIndex:7},{value:"日期 ",paraId:5,tocIndex:7},{value:"YYYY-MM-DD",paraId:5,tocIndex:7},{value:"2020-10-10",paraId:5,tocIndex:7},{value:"dateWeek",paraId:5,tocIndex:7},{value:"周 ",paraId:5,tocIndex:7},{value:"YYYY-wo",paraId:5,tocIndex:7},{value:"2020-41 周",paraId:5,tocIndex:7},{value:"dateMonth",paraId:5,tocIndex:7},{value:"月 ",paraId:5,tocIndex:7},{value:"YYYY-MM",paraId:5,tocIndex:7},{value:"2020-10",paraId:5,tocIndex:7},{value:"dateQuarter",paraId:5,tocIndex:7},{value:"季 ",paraId:5,tocIndex:7},{value:"YYYY-\\QQ",paraId:5,tocIndex:7},{value:"2020-Q4",paraId:5,tocIndex:7},{value:"dateYear",paraId:5,tocIndex:7},{value:"年 ",paraId:5,tocIndex:7},{value:"YYYY",paraId:5,tocIndex:7},{value:"2020",paraId:5,tocIndex:7},{value:"dateRange",paraId:5,tocIndex:7},{value:"日期区间 ",paraId:5,tocIndex:7},{value:"YYYY-MM-DD ~ YYYY-MM-DD",paraId:5,tocIndex:7},{value:"2020-10-10 ~ 2020-12-12",paraId:5,tocIndex:7},{value:"dateTime",paraId:5,tocIndex:7},{value:"日期时间 ",paraId:5,tocIndex:7},{value:"YYYY-MM-DD HH:mm:ss",paraId:5,tocIndex:7},{value:"2020-10-10 00:00:00",paraId:5,tocIndex:7},{value:"dateTimeRange",paraId:5,tocIndex:7},{value:"日期时间区间 ",paraId:5,tocIndex:7},{value:"YYYY-MM-DD HH:mm:ss ~ YYYY-MM-DD HH:mm:ss",paraId:5,tocIndex:7},{value:"2020-10-10 00:00:00 ~ 2020-12-12 00:00:00",paraId:5,tocIndex:7},{value:"time",paraId:5,tocIndex:7},{value:"时间 ",paraId:5,tocIndex:7},{value:"HH:mm:ss",paraId:5,tocIndex:7},{value:"10:05:20",paraId:5,tocIndex:7},{value:"timeRange",paraId:5,tocIndex:7},{value:"时间区间 ",paraId:5,tocIndex:7},{value:"HH:mm:ss ~ HH:mm:ss",paraId:5,tocIndex:7},{value:"10:05:20 ~ 20:00:00",paraId:5,tocIndex:7},{value:"fromNow",paraId:5,tocIndex:7},{value:"相对当前时间，使用 ",paraId:5,tocIndex:7},{value:"dayjs",paraId:5,tocIndex:7},{value:" ",paraId:5,tocIndex:7},{value:"relativeTime plugin 的 fromNow 方法",paraId:5,tocIndex:7},{value:"5 个月前",paraId:5,tocIndex:7},{value:"建议在项目 ",paraId:6,tocIndex:8},{value:"util/constants.ts",paraId:6,tocIndex:8},{value:" 中维护常量枚举配置。",paraId:6,tocIndex:8},{value:"import type { TagProps, BadgeProps, SpaceProps } from 'antd';\n\ntype AliasType = { alias?: ReactNode };\n\ntype EnumItem<ValueType = any> = {\n  label?: ReactNode;\n  value?: ValueType;\n  badge?: Omit<BadgeProps, 'status'> & AliasType & { status?: string };\n  tag?: TagProps & AliasType;\n  text?: HtmlHTMLAttributes<HTMLSpanElement> & AliasType;\n  [key: string]: any;\n};\n\nexport type EnumData<ValueType = any> = EnumItem<ValueType>[];\n",paraId:7,tocIndex:8},{value:"参数",paraId:8,tocIndex:10},{value:"说明",paraId:8,tocIndex:10},{value:"类型",paraId:8,tocIndex:10},{value:"默认值",paraId:8,tocIndex:10},{value:"prefix",paraId:8,tocIndex:10},{value:"前缀",paraId:8,tocIndex:10},{value:"ReactNode",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"suffix",paraId:8,tocIndex:10},{value:"后缀",paraId:8,tocIndex:10},{value:"ReactNode",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"color",paraId:8,tocIndex:10},{value:"颜色",paraId:8,tocIndex:10},{value:"string",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"size",paraId:8,tocIndex:10},{value:"文字大小",paraId:8,tocIndex:10},{value:"number",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"defaultValue",paraId:8,tocIndex:10},{value:"默认值，当值为 ",paraId:8,tocIndex:10},{value:"null",paraId:8,tocIndex:10},{value:" ",paraId:8,tocIndex:10},{value:"undefined",paraId:8,tocIndex:10},{value:" ",paraId:8,tocIndex:10},{value:'""',paraId:8,tocIndex:10},{value:" 时显示",paraId:8,tocIndex:10},{value:"ReactNode",paraId:8,tocIndex:10},{value:'"-"',paraId:8,tocIndex:10},{value:"whitespaceLineBreak",paraId:8,tocIndex:10},{value:"空白换行，仅 ",paraId:8,tocIndex:10},{value:"text",paraId:8,tocIndex:10},{value:" 类型生效",paraId:8,tocIndex:10},{value:"boolean",paraId:8,tocIndex:10},{value:"false",paraId:8,tocIndex:10},{value:"参数",paraId:9,tocIndex:11},{value:"说明",paraId:9,tocIndex:11},{value:"类型",paraId:9,tocIndex:11},{value:"默认值",paraId:9,tocIndex:11},{value:"precision",paraId:9,tocIndex:11},{value:"精度",paraId:9,tocIndex:11},{value:"number | 'auto'",paraId:9,tocIndex:11},{value:"2",paraId:9,tocIndex:11},{value:"showColor",paraId:9,tocIndex:11},{value:"显示颜色",paraId:9,tocIndex:11},{value:"boolean",paraId:9,tocIndex:11},{value:"false",paraId:9,tocIndex:11},{value:"showSymbol",paraId:9,tocIndex:11},{value:"显示符号",paraId:9,tocIndex:11},{value:"boolean",paraId:9,tocIndex:11},{value:"false",paraId:9,tocIndex:11},{value:"suffix",paraId:9,tocIndex:11},{value:"百分号后缀",paraId:9,tocIndex:11},{value:"string",paraId:9,tocIndex:11},{value:'"%"',paraId:9,tocIndex:11},{value:"defaultValue",paraId:9,tocIndex:11},{value:"默认值，当值为 ",paraId:9,tocIndex:11},{value:"null",paraId:9,tocIndex:11},{value:" ",paraId:9,tocIndex:11},{value:"undefined",paraId:9,tocIndex:11},{value:" ",paraId:9,tocIndex:11},{value:'""',paraId:9,tocIndex:11},{value:" 时显示",paraId:9,tocIndex:11},{value:"ReactNode",paraId:9,tocIndex:11},{value:'"-"',paraId:9,tocIndex:11},{value:"参数",paraId:10,tocIndex:12},{value:"说明",paraId:10,tocIndex:12},{value:"类型",paraId:10,tocIndex:12},{value:"默认值",paraId:10,tocIndex:12},{value:"format",paraId:10,tocIndex:12},{value:"设置日期或时间格式",paraId:10,tocIndex:12},{value:"string",paraId:10,tocIndex:12},{value:"-",paraId:10,tocIndex:12},{value:"参数",paraId:11,tocIndex:13},{value:"说明",paraId:11,tocIndex:13},{value:"类型",paraId:11,tocIndex:13},{value:"默认值",paraId:11,tocIndex:13},{value:"value",paraId:11,tocIndex:13},{value:"图片地址。",paraId:11,tocIndex:13},{value:"如果为 ",paraId:11,tocIndex:13},{value:"string",paraId:11,tocIndex:13},{value:"，表示为 ",paraId:11,tocIndex:13},{value:"src",paraId:11,tocIndex:13},{value:"。",paraId:11,tocIndex:13},{value:"如果为 ",paraId:11,tocIndex:13},{value:"object",paraId:11,tocIndex:13},{value:" 需传入 ",paraId:11,tocIndex:13},{value:"src",paraId:11,tocIndex:13},{value:"，也支持传入 ",paraId:11,tocIndex:13},{value:"name",paraId:11,tocIndex:13},{value:"。",paraId:11,tocIndex:13},{value:"string | { src: string; name?: string; }",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"width",paraId:11,tocIndex:13},{value:"图片宽度",paraId:11,tocIndex:13},{value:"string | number",paraId:11,tocIndex:13},{value:"100",paraId:11,tocIndex:13},{value:"bordered",paraId:11,tocIndex:13},{value:"显示边框。以正方形方式呈现，图片根据最长的宽或高自适应。",paraId:11,tocIndex:13},{value:"boolean",paraId:11,tocIndex:13},{value:"false",paraId:11,tocIndex:13},{value:"renderName",paraId:11,tocIndex:13},{value:"自定义文件名称渲染",paraId:11,tocIndex:13},{value:"(name: string, index: number, item: string|ImageValue)=>ReactNode",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"nameWrap",paraId:11,tocIndex:13},{value:"名称支持换行",paraId:11,tocIndex:13},{value:"boolean",paraId:11,tocIndex:13},{value:"false",paraId:11,tocIndex:13},{value:"其余同 antd ",paraId:12,tocIndex:13},{value:"Image",paraId:12,tocIndex:13},{value:" 。",paraId:12,tocIndex:13},{value:"同 antd ",paraId:13,tocIndex:14},{value:"Progress",paraId:13,tocIndex:14},{value:" 。",paraId:13,tocIndex:14},{value:"需配合 ",paraId:14,tocIndex:15},{value:"valueEnum",paraId:14,tocIndex:15},{value:" 使用。",paraId:14,tocIndex:15},{value:"除了以下参数，其余同 ",paraId:15,tocIndex:15},{value:"Space",paraId:15,tocIndex:15},{value:" 一样。",paraId:15,tocIndex:15},{value:"参数",paraId:16,tocIndex:15},{value:"说明",paraId:16,tocIndex:15},{value:"类型",paraId:16,tocIndex:15},{value:"默认值",paraId:16,tocIndex:15},{value:"valueEnum",paraId:16,tocIndex:15},{value:"数据字典",paraId:16,tocIndex:15},{value:"EnumData",paraId:16,tocIndex:15},{value:"[]",paraId:16,tocIndex:15},{value:"value",paraId:16,tocIndex:15},{value:"当前字典值",paraId:16,tocIndex:15},{value:"any",paraId:16,tocIndex:15},{value:"-",paraId:16,tocIndex:15},{value:"defaultLabel",paraId:16,tocIndex:15},{value:"当找不到字典值对应的名称时，显示默认名称",paraId:16,tocIndex:15},{value:"ReactNode",paraId:16,tocIndex:15},{value:'"-"',paraId:16,tocIndex:15},{value:"type",paraId:16,tocIndex:15},{value:"显示方式",paraId:16,tocIndex:15},{value:"'text' | 'tag' | 'badge'",paraId:16,tocIndex:15},{value:"'text'",paraId:16,tocIndex:15},{value:"fieldNames",paraId:16,tocIndex:15},{value:"自定义节点 ",paraId:16,tocIndex:15},{value:"label",paraId:16,tocIndex:15},{value:"、",paraId:16,tocIndex:15},{value:"value",paraId:16,tocIndex:15},{value:" 的字段",paraId:16,tocIndex:15},{value:"{label: string; value: string;}",paraId:16,tocIndex:15},{value:"-",paraId:16,tocIndex:15},{value:"match",paraId:16,tocIndex:15},{value:"自定义 value 匹配方法",paraId:16,tocIndex:15},{value:"(itemValue: any, value: any) => boolean;",paraId:16,tocIndex:15},{value:"-",paraId:16,tocIndex:15},{value:"参数",paraId:17,tocIndex:16},{value:"说明",paraId:17,tocIndex:16},{value:"类型",paraId:17,tocIndex:16},{value:"默认值",paraId:17,tocIndex:16},{value:"value",paraId:17,tocIndex:16},{value:"颜色值",paraId:17,tocIndex:16},{value:"string",paraId:17,tocIndex:16},{value:"-",paraId:17,tocIndex:16},{value:"showText",paraId:17,tocIndex:16},{value:"显示颜色值文本",paraId:17,tocIndex:16},{value:"boolean",paraId:17,tocIndex:16},{value:"false",paraId:17,tocIndex:16}]},98525:function(e,a){a.Z='import React from \'react\';\nimport { Descriptions } from \'antd\';\nimport { BizField } from \'antd-more\';\nimport { ApproveStatusOptions } from \'./constants\';\n\nexport default () => {\n  return (\n    <>\n      <Descriptions>\n        <Descriptions.Item label="空字符串">\n          <BizField value="" valueType="text" />\n        </Descriptions.Item>\n        <Descriptions.Item label="文本">\n          <BizField value="这是一段文本" valueType="text" />,\n          <BizField value="颜色和文字大小" valueType="text" color="red" size={16} />\n        </Descriptions.Item>\n        <Descriptions.Item label="金额">\n          <BizField value={100} valueType="money" />,\n          <BizField value={100} valueType="money" prefix="¥" />,\n          <BizField value={100} valueType="money" prefix="¥" color="red" />\n        </Descriptions.Item>\n        <Descriptions.Item label="进度条">\n          <BizField value={40} valueType="progress" />\n        </Descriptions.Item>\n        <Descriptions.Item label="百分比">\n          <div>\n            <BizField value={-10} valueType="percent" />,\n            <BizField value={0} valueType="percent" />,\n            <BizField value={10} valueType="percent" />\n            {/* <br />\n            <BizField value={10.1232} valueType="percent" />,\n            <BizField value={10.1232} valueType="percent" precision="auto" /> */}\n          </div>\n        </Descriptions.Item>\n        <Descriptions.Item label="百分比样式">\n          <BizField value={-10} valueType="percent" showSymbol showColor />,\n          <BizField value={0} valueType="percent" showSymbol showColor />,\n          <BizField value={10} valueType="percent" showSymbol showColor />\n        </Descriptions.Item>\n        <Descriptions.Item label="序列号">\n          <BizField value={0} valueType="index" />\n          <BizField value={1} valueType="index" />\n          <BizField value={2} valueType="index" />\n          <BizField value={3} valueType="index" />\n          <BizField value={9} valueType="index" />\n        </Descriptions.Item>\n        <Descriptions.Item label="序列号(圆)">\n          <BizField value={0} valueType="indexBorder" />\n          <BizField value={1} valueType="indexBorder" />\n          <BizField value={2} valueType="indexBorder" />\n          <BizField value={3} valueType="indexBorder" />\n          <BizField value={9} valueType="indexBorder" />\n        </Descriptions.Item>\n        <Descriptions.Item label="颜色">\n          <BizField value="red" valueType="color" />\n        </Descriptions.Item>\n        <Descriptions.Item label="颜色带文本" span={3}>\n          <BizField value="blue" valueType="color" showText />\n        </Descriptions.Item>\n        <Descriptions.Item label="图片">\n          <BizField\n            value="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"\n            valueType="image"\n          />\n        </Descriptions.Item>\n        <Descriptions.Item label="图片(名称)">\n          <BizField\n            value={{\n              src: \'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg\',\n              name: \'测试名称测试名称测试名称\'\n            }}\n            valueType="image"\n            // renderName={name => <a target=\'_blank\' href=\'https://baidu.com/\' rel="noreferrer">{name}</a>}\n          />\n        </Descriptions.Item>\n        <Descriptions.Item label="图片(边框/名称)">\n          <BizField\n            value={{\n              src: \'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg\',\n              name: \'测试名称\'\n            }}\n            valueType="image"\n            bordered\n          />\n        </Descriptions.Item>\n        <Descriptions.Item label="多张图片" span={3}>\n          <BizField\n            value={[\'https://dummyimage.com/200x300\', \'https://dummyimage.com/300x100\']}\n            valueType="image"\n          />\n        </Descriptions.Item>\n        <Descriptions.Item label="多张图片(边框/名称)" span={3}>\n          <BizField\n            value={[\n              { src: \'https://dummyimage.com/300x600\', name: \'测试名称\' },\n              { src: \'https://dummyimage.com/600x200\', name: \'测试名称测试名称测试名称\' }\n            ]}\n            valueType="image"\n            bordered\n            nameWrap\n          />\n        </Descriptions.Item>\n      </Descriptions>\n      <Descriptions title="日期">\n        <Descriptions.Item label="日期">\n          <BizField value="2020-10-10" valueType="date" />\n        </Descriptions.Item>\n        <Descriptions.Item label="日期时间">\n          <BizField value="2020-10-10" valueType="dateTime" />\n        </Descriptions.Item>\n        <Descriptions.Item label="周">\n          <BizField value="2020-10-10" valueType="dateWeek" />\n        </Descriptions.Item>\n        <Descriptions.Item label="月">\n          <BizField value="2020-10-10" valueType="dateMonth" />\n        </Descriptions.Item>\n        <Descriptions.Item label="季">\n          <BizField value="2020-10-10" valueType="dateQuarter" />\n        </Descriptions.Item>\n        <Descriptions.Item label="年">\n          <BizField value="2020-10-10" valueType="dateYear" />\n        </Descriptions.Item>\n        <Descriptions.Item label="时间">\n          <BizField value="10:00:00" valueType="time" />\n        </Descriptions.Item>\n        <Descriptions.Item label="时间区间">\n          <BizField value={[\'10:00:00\', \'12:00:00\']} valueType="timeRange" />\n        </Descriptions.Item>\n        <Descriptions.Item label="相对当前时间">\n          <BizField value="2020-10-10" valueType="fromNow" />\n        </Descriptions.Item>\n        <Descriptions.Item label="日期区间">\n          <BizField value={[\'2020-10-10\', \'2020-12-12\']} valueType="dateRange" />\n        </Descriptions.Item>\n        <Descriptions.Item label="日期时间区间">\n          <BizField value={[\'2020-10-10\', \'2020-12-12\']} valueType="dateTimeRange" />\n        </Descriptions.Item>\n      </Descriptions>\n      <Descriptions title="枚举">\n        <Descriptions.Item label="文本">\n          <BizField value="1" valueType="enum" valueEnum={ApproveStatusOptions} />\n        </Descriptions.Item>\n        <Descriptions.Item label="标签">\n          <BizField value="1" valueType="enumTag" valueEnum={ApproveStatusOptions} />\n        </Descriptions.Item>\n        <Descriptions.Item label="徽章">\n          <BizField value="1" valueType="enumBadge" valueEnum={ApproveStatusOptions} />\n        </Descriptions.Item>\n        <Descriptions.Item label="多个文本">\n          <BizField value={[\'1\', \'2\']} valueType="enum" valueEnum={ApproveStatusOptions} />\n        </Descriptions.Item>\n        <Descriptions.Item label="多个标签">\n          <BizField value={[\'2\', \'3\']} valueType="enumTag" valueEnum={ApproveStatusOptions} />\n        </Descriptions.Item>\n        <Descriptions.Item label="多个徽章">\n          <BizField value={[\'1\', \'2\']} valueType="enumBadge" valueEnum={ApproveStatusOptions} />\n        </Descriptions.Item>\n      </Descriptions>\n    </>\n  );\n};\n'},46892:function(e,a){a.Z="// 审核状态\n// 1-审核中 2-审核通过 3-审核不通过\nexport enum ApproveStatus {\n  Processing = '1',\n  Approve = '2',\n  Refused = '3'\n}\n\n// 审核状态选项\nexport const ApproveStatusOptions = [\n  {\n    value: ApproveStatus.Processing,\n    label: '审核中',\n    badge: {\n      status: 'processing'\n    },\n    tag: {\n      alias: '待审核',\n      color: 'orange'\n    }\n  },\n  {\n    value: ApproveStatus.Approve,\n    label: '审核通过',\n    text: {\n      style: {\n        color: 'green'\n      }\n    },\n    badge: {\n      status: 'success'\n    },\n    tag: {\n      color: 'green'\n    }\n  },\n  {\n    value: ApproveStatus.Refused,\n    label: '审核不通过',\n    text: {\n      style: {\n        color: 'red'\n      }\n    },\n    badge: {\n      status: 'error'\n    },\n    tag: {\n      color: 'red'\n    }\n  }\n];\n"},17749:function(e,a){a.Z="const CurrencyData = [\n  {\n    symbol: '¥',\n    code: 'CNY',\n    name: '人民币',\n    tag: {\n      color: 'orange'\n    }\n  },\n  {\n    symbol: '$',\n    code: 'USD',\n    name: '美元'\n  },\n  {\n    symbol: '€',\n    code: 'EUR',\n    name: '欧元'\n  },\n  {\n    symbol: '￡',\n    code: 'GBP',\n    name: '英镑'\n  }\n];\n\nexport default CurrencyData;\n"},18620:function(e,a){a.Z="import * as React from 'react';\nimport { BizField } from 'antd-more';\nimport CurrencyData from './currency';\n\nfunction Demo() {\n  return (\n    <>\n      <BizField\n        value=\"CNY\"\n        valueType=\"enum\"\n        valueEnum={CurrencyData}\n        fieldNames={{ label: 'symbol', value: 'code' }}\n      />\n      <br />\n      <BizField\n        value=\"CNY\"\n        valueType=\"enum\"\n        valueEnum={CurrencyData}\n        fieldNames={{ label: 'name', value: 'code' }}\n      />\n      <br />\n      <BizField\n        value=\"人民币\"\n        valueType=\"enum\"\n        valueEnum={CurrencyData}\n        fieldNames={{ label: 'symbol', value: 'name' }}\n      />\n      <br />\n      <BizField\n        value=\"CNY\"\n        valueType=\"enumTag\"\n        valueEnum={CurrencyData}\n        fieldNames={{ label: 'name', value: 'code' }}\n      />\n      <br />\n      <br />\n      <h3>多个枚举</h3>\n      <BizField\n        value={['CNY', 'USD']}\n        valueType=\"enum\"\n        valueEnum={CurrencyData}\n        fieldNames={{ label: 'symbol', value: 'code' }}\n      />\n      <br />\n      <BizField\n        value={['CNY', 'USD']}\n        valueType=\"enumTag\"\n        valueEnum={CurrencyData}\n        fieldNames={{ label: 'name', value: 'code' }}\n      />\n    </>\n  );\n}\n\nexport default Demo;\n"},7238:function(e,a){a.Z='import * as React from \'react\';\nimport { Descriptions } from \'antd\';\nimport { BizField } from \'antd-more\';\n\nfunction Demo() {\n  return (\n    <Descriptions>\n      <Descriptions.Item label="空格换行">\n        <BizField value="2022-10-10 08:00:00" valueType="text" whitespaceLineBreak />\n      </Descriptions.Item>\n      {/* <Descriptions.Item label="空格换行空值">\n        <BizField value={undefined} valueType="text" whitespaceLineBreak />\n        <BizField value={null} valueType="text" whitespaceLineBreak />\n        <BizField value={\'\'} valueType="text" whitespaceLineBreak />\n      </Descriptions.Item> */}\n      <Descriptions.Item label="百分比无值">\n        {/* <BizField value={undefined} valueType="percent" />,\n        <BizField value={null} valueType="percent" />, */}\n        <BizField value={\'\'} valueType="percent" />\n      </Descriptions.Item>\n      <Descriptions.Item label="百分比默认值">\n        <BizField value={\'\'} valueType="percent" defaultValue="/" />\n      </Descriptions.Item>\n    </Descriptions>\n  );\n}\n\nexport default Demo;\n'}}]);