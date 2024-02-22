---
group:
  title: 数据展示
  order: 1
toc: content
---

# BizDescriptions - 业务描述

基于 Descriptions 扩展了 字段（BizField）、columns 列展示。

## 代码演示

### 基础用法

<code src="./demos/Demo1.tsx"></code>

<!-- ### 数据配置

使用数据配置 dataSource 和 columns 。

<code src="./demos/Demo2.tsx"></code>

### 混用

支持数据配置和组件方式混合使用。

<code src="./demos/Demo3.tsx"></code> -->

## API

```typescript
import { BizDescriptions } from 'antd-more';
```

### BizDescriptions

除了以下参数，其余和 [antd Descriptions](https://ant-design.gitee.io/components/descriptions-cn/#Descriptions) 组件一样。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dataSource | 数据 | `object` | - |
| tooltip | 标题后面的补充提示，需有标题才生效 | `ReactNode \| (TooltipProps & { icon: ReactNode })` | - |

### BizDescriptions.Item

除了以下参数，其余和 [antd DescriptionsItem](https://ant-design.gitee.io/components/descriptions-cn/#DescriptionItem) 组件一样。

`ValueType` `EnumData` 请参考 `BizField` 组件 API 说明。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| valueType | 值类型 | [ValueType](/components/biz-field#valuetype-值) | - |
| valueEnum | 数据字典。<br/>当 `valueType` 为 `enum` `enumTag` `enumBadge` 时生效。 | `EnumData` | - |
| field | 展示字段的配置。同 BizField 的配置项，支持 object 和 function 方式。<br/>function 方式默认参数为当前值，需返回 BizField 的配置。 | `object \| (text: any, record?: DataType, index?: number) => object` | - |
| tooltip | 标签后面的补充提示，需有标签才生效 | `ReactNode \| (TooltipProps & { icon: ReactNode })` | - |
