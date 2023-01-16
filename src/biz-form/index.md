---
title: BizForm - 业务表单
order: 0
group:
  path: /
nav:
  title: 组件
  path: /components
---

# BizForm - 业务表单

基于 antd Form 扩展了布局、校验、转换值等功能，帮助业务快速开发。

## 代码演示

### 创建用户

<code src='./demos/base-register.tsx' />

### 登录

<code src='./demos/base-login.tsx' />

### 忘记密码

<code src='./demos/forget-password.tsx' />

### 修改密码

<code src='./demos/change-password.tsx' />

### 实时上传文件图片

添加文件后，立即上传到文件服务器，异步返回值将挂载到 `file.response` 上，提交和校验时取出 `file.response.fssid` 。

<code src='./demos/upload-real-time.tsx' />

### 实时上传文件含默认值

修改页面中需要显示已有文件，并且支持实时上传。

<code src='./demos/upload-with-default.tsx' />

### 提交时一次性上传所有文件

添加文件后不触发上传，在提交时获取所有文件一次性上传。

<code src='./demos/upload-no-upload.tsx' />

### 上传各种类型文件预览

<code src='./demos/upload-file-viewer.tsx' />

<!-- ### 自定义上传证件

<code src='./demos/upload-certificate.tsx' /> -->

### 联动 1

通过 `shouldUpdate` 实现

<code src='./demos/form-linkage-1.tsx' />

### 联动 2

通过 `Form.useWatch` 实现

<code src='./demos/form-linkage-2.tsx' />

### 企业信息

<code src='./demos/company-info.tsx' />

### 结算信息

<code src='./demos/settlement-info.tsx' />

### 返佣信息

<code src='./demos/rakebacke-info.tsx' />

### 异步初始值

<code src='./demos/async-initial-values.tsx' />

## API

```typescript
import { BizForm } from 'antd-more';
```

### BizForm

除了以下参数，其余和 antd [Form](https://ant-design.gitee.io/components/form-cn/#Form) 组件一样。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onFinish | 提交数据时触发，和 antd Form 一样。如果返回异步，会自动管理 loading 。 | `(values) => any` | - |
| onReset | 点击重置按钮的回调 | `(e) => void` | - |
| submitter | 提交、重置按钮相关配置 | `false \| BizFormSubmitterProps` | - |
| pressEnterSubmit | 是否开启回车键提交，注意不要与自定义的 `htmlType='submit'` 的按钮冲突。 | `boolean` | `true` |
| ready | 为 `false` 时，禁止提交/重置表单。<br/>为 `true` 时，会重新设置表单初始值。 | `boolean` | `true` |
| loading | 设置提交、重置的加载/禁止状态。<br/>如果 `onFinish` 返回异步则无需设置，内部会自动更新。 | `boolean` | `false` |
| labelWidth | label 宽度 | `number \| 'auto'` | `84` |
| hideLabel | 隐藏 label | `boolean` | `false` |

### BizFormSubmitterProps

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onSubmit | 点击提交按钮的回调 | `(e) => void` | - |
| onReset | 点击重置按钮的回调 | `(e) => void` | - |
| submitText | 提交按钮文本 | `ReactNode` | `提交` |
| resetText | 重置按钮文本 | `ReactNode` | `重置` |
| submitButtonProps | 提交按钮属性，和 antd [Button](https://ant-design.gitee.io/components/button-cn/#API) 一致 | [ButtonProps](https://ant-design.gitee.io/components/button-cn/#API) | - |
| resetButtonProps | 重置按钮属性，和 antd [Button](https://ant-design.gitee.io/components/button-cn/#API) 一致 | [ButtonProps](https://ant-design.gitee.io/components/button-cn/#API) | - |
| noReset | 不渲染重置按钮 | `boolean` | `false` |
| render | 自定义操作的渲染 | `false \| (props: BizFormSubmitterProps, dom: ReactElement[]) => ReactNode` | - |

`submitButtonProps` `resetButtonProps` 额外支持 `preventDefault` 配置项，如果设置为 `true` ，则不触发预置行为。

```typescript
<BizForm
  submitter={{
    submitButtonProps: {
      preventDefault: true, // 点击提交按钮，不触发表单提交
      onClick() {} // 自定义点击回调
    },
    resetButtonProps: {
      preventDefault: true, // 点击重置按钮，不触发表单重置
      onClick() {} // 自定义点击回调
    }
  }}
>
  // ...
</BizForm>
```
