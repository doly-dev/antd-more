# antd-more

[![npm][npm]][npm-url] ![GitHub](https://img.shields.io/github/license/doly-dev/antd-more.svg)

基于 [antd] 扩展的业务场景组件。

[查看文档和示例][site]

## 特性

- 💎 简单易用 - 基于 Ant Design 进行封装
- 📦 场景丰富 - 面向业务场景封装
- 💡 TypeScript - 提供 TypeScript 类型定义

## 对应版本

| antd-more | antd |
| --------- | ---- |
| `v0 ~ v3` | `v4` |
| `v4`      | `v5` |

## 使用

### 安装

```shell
npm install antd-more
```

```shell
yarn add antd-more
```

```shell
pnpm add antd-more
```

### 示例

```javascript
import { BizField } from 'antd-more';

// 值类型为颜色，显示红色色块
ReactDon.render(<BizField value="red" valueType="color" />, mountNode);
```

## 组件列表

### 数据展示

- [BizDescriptions] - 业务描述
- [BizField] - 业务字段
- [BizTable] - 业务表格
- [EditableBizTable] - 可编辑业务表格

### 数据录入

- [BizForm] - 业务表单
- [BizFormItem] - 表单项
- [BizFormList] - 表单数组
- [Modal/Drawer] - 浮层表单
- [QueryForm] - 查询表单
- [StepsForm] - 分步表单

### 其他

- [BizConfigProvider] - 上下文配置
- [BizUserLayout] - 用户界面布局

### 通用

- [CaptchaButton] - 验证码按钮
- [Color] - 颜色
- [Dictionary] - 数据字典
- [FileViewer] - 文件预览
- [InputIcon] - 图标输入
- [TreeTable] - 树表格

## 精选第三方 react 组件

- [qrcode.react] - 生成二维码
- [wangeditor] - 轻量级 web 富文本编辑器
- [rc-slider-captcha] - 滑块验证码

[npm]: https://img.shields.io/npm/v/antd-more.svg
[antd]: https://ant.design/
[npm-url]: https://npmjs.com/package/antd-more
[site]: https://doly-dev.github.io/antd-more/latest/
[captchabutton]: https://doly-dev.github.io/antd-more/latest/components/captcha-button
[color]: https://doly-dev.github.io/antd-more/latest/components/color
[dictionary]: https://doly-dev.github.io/antd-more/latest/components/dictionary
[bizdescriptions]: https://doly-dev.github.io/antd-more/latest/components/biz-descriptions
[bizfield]: https://doly-dev.github.io/antd-more/latest/components/biz-field
[biztable]: https://doly-dev.github.io/antd-more/latest/components/biz-table
[editablebiztable]: https://doly-dev.github.io/antd-more/latest/components/editable-biz-table
[bizform]: https://doly-dev.github.io/antd-more/latest/components/biz-form
[bizformitem]: https://doly-dev.github.io/antd-more/latest/components/biz-form-item
[bizformlist]: https://doly-dev.github.io/antd-more/latest/components/biz-form-list
[modal/drawer]: https://doly-dev.github.io/antd-more/latest/components/modal-form
[queryform]: https://doly-dev.github.io/antd-more/latest/components/query-form
[stepsform]: https://doly-dev.github.io/antd-more/latest/components/steps-form
[bizuserlayout]: https://doly-dev.github.io/antd-more/latest/components/biz-user-layout
[BizConfigProvider]: https://doly-dev.github.io/antd-more/latest/components/biz-config-provider
[inputicon]: https://doly-dev.github.io/antd-more/latest/components/input-icon
[fileviewer]: https://doly-dev.github.io/antd-more/latest/components/file-viewer
[treetable]: https://doly-dev.github.io/antd-more/latest/components/tree-table
[qrcode.react]: https://www.npmjs.com/package/qrcode.react
[wangeditor]: https://www.npmjs.com/package/wangeditor
[rc-slider-captcha]: https://www.npmjs.com/package/rc-slider-captcha
