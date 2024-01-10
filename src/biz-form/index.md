---
group:
  title: 数据录入
  order: 2
toc: content
---

# BizForm - 业务表单

基于 antd Form 扩展了布局、校验、转换值等功能，帮助业务快速开发。

## 代码演示

### 创建用户

<code src='./demos/base-register.tsx'></code>

### 登录

<code src='./demos/base-login.tsx'></code>

### 忘记密码

<code src='./demos/forget-password.tsx'></code>

### 修改密码

<code src='./demos/change-password.tsx'></code>

### 实时上传文件图片

添加文件后，立即上传到文件服务器，异步返回值将挂载到 `file.response` 上，提交和校验时取出 `file.response.fssid` 。

设置 `onUpload` 后，添加上传文件自动调用并处理上传中状态和失败状态。上传成功的返回值将自动添加到 `UploadFile` 对象的 `response` 字段上。表单提交时再获取该值。

如果设置 `transform` 可以帮助内置的规则进行校验。

<code src='./demos/upload-real-time.tsx'></code>

### 实时上传文件含默认值

修改页面中需要显示已有文件，并且支持实时上传。

将默认值转换成 `UploadFile[]` 数据格式再传入，加载失败可以通过 `error.message` 设置提示。

<code src='./demos/upload-with-default.tsx'></code>

### 提交时一次性上传所有文件

添加文件后不触发上传，在提交时获取所有文件一次性上传。

不设置 `onUpload` 或 `action` 的情况下，添加文件不会发起请求。

<code src='./demos/upload-no-upload.tsx'></code>

### 上传各种类型文件预览

上传图片、pdf、audio、video 等类型的文件自定义缩略图及预览。关于文件预览可以参考 [react-file-viewer](https://www.npmjs.com/package/react-file-viewer) 。

<code src='./demos/upload-file-viewer.tsx'></code>

### 联动 1

通过 `shouldUpdate` 实现。

<code src='./demos/form-linkage-1.tsx'></code>

### 联动 2

通过 `useWatch` 实现。如果使用 `onValuesChange` 的方式，在 `form.setFieldsValue` 修改值时不会触发。

<code src='./demos/form-linkage-2.tsx'></code>

### 企业信息

<code src='./demos/company-info.tsx'></code>

### 结算信息

<code src='./demos/settlement-info.tsx'></code>

### 返佣信息

<code src='./demos/rakebacke-info.tsx'></code>

### 业务信息

<code src='./demos/business-info.tsx'></code>

### 异步初始值

通过 `ready` 控制表单是否已准备好（如表单的初始值需要通过异步获取）。

<code src='./demos/async-initial-values.tsx'></code>

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
| labelWidth | label 宽度 | `number \| string \| false \| null` | `84` |
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
