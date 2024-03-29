---
group:
  title: 通用
  order: 4
toc: content
---

# CaptchaButton - 验证码按钮

> 推荐使用 [BizFormItemCaptcha](/components/biz-form-item#captcha)。

验证码按钮，用于获取手机号验证码、邮箱验证码等场景。

## 代码演示

### 基础用法

<code src="./demos/Demo1.tsx"></code>

### 自定义文本

<code src="./demos/Demo2.tsx"></code>

### 获取手机验证码

<code src="./demos/Demo3.tsx"></code>

## API

除了以下参数，其余和 antd [Button](https://ant.design/components/button-cn/) 组件一样。

| 参数      | 说明                                       | 类型         | 默认值           |
| --------- | ------------------------------------------ | ------------ | ---------------- |
| start     | 是否开始倒计时，当该值变动并且为 `true` 时 | `boolean`    | `false`          |
| second    | 倒计时时长，单位秒                         | `number`     | `60`             |
| onEnd     | 倒计时结束触发，可用于重置 `start`         | `() => void` | -                |
| initText  | 初始显示文本                               | `string`     | `获取验证码`     |
| runText   | 倒计时显示文本，包含 `%s` 会自动替换为秒数 | `string`     | `%s秒后重新获取` |
| resetText | 结束显示文本                               | `string`     | `重新获取验证码` |
