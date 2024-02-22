---
group:
  title: 数据录入
  order: 2
toc: content
---

# ModalForm/DrawerForm - 浮层表单

基于 BizForm 扩展的浮层表单。

## 代码演示

### ModalForm 表单

<code src="../../src/biz-form/demos/modal-form-1.tsx"></code>

### DrawerForm 表单

<code src="../../src/biz-form/demos/drawer-form-1.tsx"></code>

### 使用 open 受控方式

<code src="../../src/biz-form/demos/modal-form-2.tsx"></code>

### 自定义底部按钮

<code src="../../src/biz-form/demos/modal-form-3.tsx"></code>

### 修改密码

<code src="../../src/biz-form/demos/modal-form-4.tsx"></code>

### 修改和新增共用表单

<code src="../../src/biz-form/demos/modal-form-5.tsx"></code>

## API

> 如果配置了 `modalProps.destroyOnClose` / `drawerProps.destroyOnClose` 等于 `true` ，浮层关闭后会重置表单。

### ModalForm

```typescript
import { ModalForm } from 'antd-more';
```

除了以下参数，其余和 [BizForm](/components/biz-form) 一样。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | `Modal` 标题 | `ReactNode` | - |
| width | `Modal` 宽度 | `number` | `600` |
| trigger | 用于触发 `Modal` 打开的 dom，一般是 button | `ReactElement` | - |
| open | 是否打开。<br/>设置后表示为 `受控组件`，可结合 `onOpenChange` 进行控制。 | `boolean` | - |
| onOpenChange | `open` 改变时触发 | `(open: boolean) => void` | - |
| maskClosable | 点击蒙层是否允许关闭 | `boolean` | `true` |
| destroyOnClose | 关闭时销毁 Modal 里的子元素 | `boolean` | `false` |
| modalProps | `Modal` 的 `props`，使用方式与 antd 相同。 | [ModalProps](https://ant.design/components/modal-cn/#API) | - |
| onFinish | 提交数据时触发。如果返回 `false` 或 `Promise.reject()` 表示提交失败。否则表示提交成功，然后会关掉弹框。 | `async (values: any) => any` | - |

### DrawerForm

```typescript
import { DrawerForm } from 'antd-more';
```

除了以下参数，其余和 [BizForm](/components/biz-form) 一样。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | `Drawer` 标题 | `ReactNode` | - |
| width | `Drawer` 宽度 | `number` | `600` |
| trigger | 用于触发 `Drawer` 打开的 dom，一般是 button | `ReactElement` | - |
| open | 是否打开。<br/>设置后表示为 `受控组件`，可结合 `onOpenChange` 进行控制。 | `boolean` | - |
| onOpenChange | `open` 改变时触发 | `(open: boolean) => void` | - |
| maskClosable | 点击蒙层是否允许关闭 | `boolean` | `true` |
| destroyOnClose | 关闭时销毁 Drawer 里的子元素 | `boolean` | `false` |
| drawerProps | `Drawer` 的 `props`，使用方式与 antd 相同。 | [DrawerProps](https://ant.design/components/drawer-cn/#API) | - |
| onFinish | 提交数据时触发。如果返回 `false` 或 `Promise.reject()` 表示提交失败。否则表示提交成功，然后会关掉弹框。 | `async (values) => any` | - |
