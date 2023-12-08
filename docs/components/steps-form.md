---
group:
  title: 数据录入
  order: 2
toc: content
---

# StepsForm - 分步表单

`StepsForm` 定义了 `Context`，分别处理 `StepsForm.StepForm` 的表单提交和汇总。

`StepsForm.StepForm` 基于 BizForm 扩展了的分步表单。

## 代码演示

### 基础用法

<code src="../../src/biz-form/demos/steps-form-1.tsx"></code>

### 中间步骤提交

<code src="../../src/biz-form/demos/steps-form-1.1.tsx"></code>

### 忘记密码 1

<code src="../../src/biz-form/demos/steps-form-2.tsx"></code>

### 忘记密码 2

<code src="../../src/biz-form/demos/steps-form-5.tsx" background="rgba(0,0,0,0.1)"></code>

### 与 Modal 配合使用

<code src="../../src/biz-form/demos/steps-form-3.tsx"></code>

### 固定页脚

第二步即可提交，提交成功后，手动触发下一步，第三步仅用作显示

<code src="../../src/biz-form/demos/steps-form-4.tsx" iframe></code>

## API

### StepsForm

```typescript
import { StepsForm } from 'antd-more';
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultCurrent | 默认步骤 | `number` | `0` |
| current | 设置后变为受控模式。当前表单的步骤数。 | `number` | - |
| onCurrentChange | current 发生改变的事件 | `(current:number) => void` | - |
| ready | 为 `false` 时，禁止上一步、下一步、提交操作。 | `boolean` | `true` |
| onFinish | 表单提交成功后调用 | `(values) => void` | - |
| stepsProps | `StepsForm` 自带的 `Steps` 的 `props`，使用方式与 antd 相同，但是去掉了 `current` 和 `onChange` | [StepsProps](https://ant.design/components/steps-cn/#API) | - |
| formProps | `StepsForm.StepForm` 的属性，除了没有 `onReset` 和 `submitter` | `BizFormProps` | - |
| submitter | 上一步、下一步、提交按钮的配置 | `StepsFormSubmitterProps` | - |
| actionRef | 常用操作引用，便于自定义触发 | `MutableRefObject<StepsFormActionType \| undefined>` | - |
| stepsRender | 自定义步骤器 | `(stepsProps: StepsProps,stepsDom: ReactNode) => ReactNode` | - |
| stepFormRender | 自定义每个表单 | `(formDom: ReactNode) => ReactNode` | - |
| stepsFormRender | 自定义整个表单 | `(stepsDom: ReactNode, formDom: ReactNode, submitterDom: ReactNode) => ReactNode` | - |

### StepsForm.StepForm

基于 BizForm 扩展的表单，没有 `onReset` `resetText` `ready`， 除了以下参数，其余和 [BizForm](/components/biz-form) 一样。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 步骤条标题 | `ReactNode` | - |
| subTitle | 步骤条子标题，可选 | `ReactNode` | - |
| icon | 步骤图标的类型，可选 | `ReactNode` | - |
| description | 步骤的详情描述，可选 | `ReactNode` | - |
| stepProps | 步骤条内的当前步骤配置。 | [Steps.Spep](https://ant.design/components/steps-cn/#Steps.Step) | - |
| submitter | 上一步、下一步、提交按钮的配置。会与 StepsForm 的 submitter 合并，优先级更高。 | `StepsFormSubmitterProps` | - |

### StepsFormSubmitterProps

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onPrev | 点击上一步按钮的回调 | `() => void` | - |
| prevText | 上一步按钮文本 | `ReactNode` | `上一步` |
| prevButtonProps | 上一步按钮属性，和 antd [Button](https://ant-design.gitee.io/components/button-cn/#API) 一致 | [ButtonProps](https://ant-design.gitee.io/components/button-cn/#API) | - |
| noPrev | 不显示上一步按钮 | `boolean` | - |
| forceShowPrev | 强制显示上一步按钮，优先级比 noPrev 高 | `boolean` | - |
| onNext | 点击下一步按钮的回调 | `() => void` | - |
| nextText | 下一步按钮文本 | `ReactNode` | `下一步` |
| nextButtonProps | 提交按钮属性，和 antd [Button](https://ant-design.gitee.io/components/button-cn/#API) 一致 | [ButtonProps](https://ant-design.gitee.io/components/button-cn/#API) | - |
| noNext | 不显示下一步按钮 | `boolean` | - |
| forceShowNext | 强制显示下一步按钮，优先级比 noNext 高 | `boolean` | - |
| onSubmit | 点击提交按钮的回调 | `() => void` | - |
| submitText | 提交按钮文本 | `ReactNode` | `提交` |
| submitButtonProps | 提交按钮属性，和 antd [Button](https://ant-design.gitee.io/components/button-cn/#API) 一致 | [ButtonProps](https://ant-design.gitee.io/components/button-cn/#API) | - |
| forceShowSubmit | 强制显示提交按钮 | `boolean` | - |
| render | 自定义操作的渲染 | `false \| (props,dom:ReactElement[]) => ReactNode[]` | - |

### actionRef

```typescript
// import { StepsFormActionType } from 'antd-more';

interface StepsFormActionType {
  prev: () => void; // 返回上一步
  next: (submitted?: boolean) => void; // 跳转下一步，当submitted为true时，触发当前表单校验，校验成功则跳转下一步；当submitted为false时，不触发当前表单校验直接进入下一步。默认submitted为true
  submit: () => void; // 触发当前表单校验，并提交所有表单值
  reset: () => void; // 重置所有表单和值，将步骤恢复初始步骤
}
```
