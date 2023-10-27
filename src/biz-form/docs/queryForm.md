---
title: QueryForm - 查询表单
order: 5
group:
  path: /
nav:
  title: 组件
  path: /components
---

# QueryForm - 查询表单

基于 BizForm 扩展布局的查询表单。

## 代码演示

### 基础用法

<code src='../demos/query-form-1.tsx' />

### 展开收起

<code src='../demos/query-form-2.tsx' />

### 垂直布局

<code src='../demos/query-form-3.tsx' />

## API

### QueryForm

```typescript
import { QueryForm } from 'antd-more';
```

除了以下参数，其余和 BizForm 一样。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| submitText | 提交按钮文本 | `ReactNode` | `查询` |
| resetText | 重置按钮文本 | `ReactNode` | `重置` |
| defaultCollapsed | 默认状态下是否折叠超出的表单项 | `boolean` | `true` |
| defaultColsNumber | 默认显示的表单控件数量，数量大于等于控件数量则隐藏展开按钮。 | `number` | - |

#### 支持响应式

QueryForm 下的 Col 默认设置 `{ xs: 24, md: 12, lg: 8, xxl: 6 }` ，可以通过 BizFormItem 的 `colProps` 重置。
