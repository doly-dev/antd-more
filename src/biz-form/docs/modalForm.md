---
title: Modal/Drawer - 浮层表单
order: 4
group:
  path: /
nav:
  title: 组件
  path: /components
---

# ModalForm/DrawerForm - 浮层表单

基于 BizForm 扩展的浮层表单。

## 代码演示

### ModalForm 表单

<code src="../demos/modal-form-1.tsx" />

### DrawerForm 表单

<code src="../demos/drawer-form-1.tsx" />

### 使用 visible 受控方式

<code src="../demos/modal-form-2.tsx" />

### 自定义底部按钮

<code src="../demos/modal-form-3.tsx" />

### 修改密码

<code src="../demos/modal-form-4.tsx" />

### 修改和新增共用表单

<code src="../demos/modal-form-5.tsx" />

## API

> 如果配置了 `modalProps.destroyOnClose` / `drawerProps.destroyOnClose` 等于 `true` ，浮层关闭后会重置表单。

### ModalForm

```typescript
import { ModalForm } from 'antd-more';
```

除了以下参数，其余和 BizForm 一样。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | `Modal` 标题 | `ReactNode` | - |
| width | `Modal` 宽度 | `number` | `600` |
| trigger | 用于触发 `Modal` 打开的 dom，一般是 button | `ReactElement` | - |
| visible | 是否打开。<br/>设置后表示为 `受控组件`，可结合 `onVisibleChange` 进行控制。 | `boolean` | - |
| onVisibleChange | `visible` 改变时触发 | `(visible:boolean) => void` | - |
| maskClosable | 点击蒙层是否允许关闭 | `boolean` | `true` |
| destroyOnClose | 关闭时销毁 Modal 里的子元素 | `boolean` | `false` |
| modalProps | `Modal` 的 `props`，使用方式与 antd 相同。注意：不支持 'visible'，请使用全局的 visible。 | [ModalProps](https://ant.design/components/modal-cn/#API) | - |
| onFinish | 提交数据时触发。如果返回 `false` 或 `Promise.reject()` 表示提交失败。否则表示提交成功，然后会关掉弹框。 | `async (values) => any` | - |

### DrawerForm

```typescript
import { DrawerForm } from 'antd-more';
```

除了以下参数，其余和 BizForm 一样。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | `Drawer` 标题 | `ReactNode` | - |
| width | `Drawer` 宽度 | `number` | `600` |
| trigger | 用于触发 `Drawer` 打开的 dom，一般是 button | `ReactElement` | - |
| visible | 是否打开。<br/>设置后表示为 `受控组件`，可结合 `onVisibleChange` 进行控制。 | `boolean` | - |
| onVisibleChange | `visible` 改变时触发 | `(visible:boolean) => void` | - |
| maskClosable | 点击蒙层是否允许关闭 | `boolean` | `true` |
| destroyOnClose | 关闭时销毁 Drawer 里的子元素 | `boolean` | `false` |
| drawerProps | `Drawer` 的 `props`，使用方式与 antd 相同。注意：不支持 'visible'，请使用全局的 visible。 | [DrawerProps](https://ant.design/components/drawer-cn/#API) | - |
| onFinish | 提交数据时触发。如果返回 `false` 或 `Promise.reject()` 表示提交失败。否则表示提交成功，然后会关掉弹框。 | `async (values) => any` | - |
