# antd-more

[![npm][npm]][npm-url] ![GitHub](https://img.shields.io/github/license/doly-dev/antd-more.svg)

基于 [antd] 扩展的业务场景组件。

[查看文档和示例][site]

## 特性

- 🌈 支持 [antd] 主题定制
- 📦 面向业务场景封装

## 对应版本

| antd-more | antd |
| --------- | ---- |
| `v0 ~ v3` | `v4` |

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

## API

- **数据展示**
  - [BizField] - 业务字段
  - [BizDescriptions] - 业务描述
  - [BizTable] - 业务表格
  - [EditableBizTable] - 可编辑业务表格
- **数据录入**
  - [BizForm] - 业务表单
  - [BizFormItem] - 表单项
  - [BizFormList] - 表单数组
  - [Modal/Drawer] - 浮层表单
  - [QueryForm] - 查询表单
  - [StepsForm] - 分步表单
- **其他**
  - [BizConfigProvider] - 上下文配置
  - [BizUserLayout] - 用户界面布局
- **通用**
  - [CaptchaButton] - 验证码按钮
  - [Color] - 颜色
  - [Dictionary] - 数据字典
  - [FileViewer] - 文件预览
  - [InputIcon] - 图标输入
  - [TreeTable] - 树表格

## 精选第三方 react 组件

- [qrcode.react] - 生成二维码
- [wangeditor] - 轻量级 web 富文本编辑器

[npm]: https://img.shields.io/npm/v/antd-more.svg
[npm-url]: https://npmjs.com/package/antd-more
[site]: https://doly-dev.github.io/antd-more/latest/index.html
[doly]: https://www.npmjs.com/package/doly-cli
[umi]: https://umijs.org/zh-CN
[antd]: https://ant-design.gitee.io
[captchabutton]: https://doly-dev.github.io/antd-more/refs/heads/v3/index.html#/components/captcha-button
[color]: https://doly-dev.github.io/antd-more/refs/heads/v3/index.html#/components/color
[dictionary]: https://doly-dev.github.io/antd-more/refs/heads/v3/index.html#/components/dictionary
[bizdescriptions]: https://doly-dev.github.io/antd-more/refs/heads/v3/index.html#/components/biz-descriptions
[bizfield]: https://doly-dev.github.io/antd-more/refs/heads/v3/index.html#/components/biz-field
[biztable]: https://doly-dev.github.io/antd-more/refs/heads/v3/index.html#/components/biz-table
[editablebiztable]: https://doly-dev.github.io/antd-more/refs/heads/v3/index.html#/components/editable-biz-table
[bizform]: https://doly-dev.github.io/antd-more/refs/heads/v3/index.html#/components/biz-form
[bizformitem]: https://doly-dev.github.io/antd-more/refs/heads/v3/index.html#/components/item
[bizformlist]: https://doly-dev.github.io/antd-more/refs/heads/v3/index.html#/components/list
[modal/drawer]: https://doly-dev.github.io/antd-more/refs/heads/v3/index.html#/components/modal-form
[queryform]: https://doly-dev.github.io/antd-more/refs/heads/v3/index.html#/components/query-form
[stepsform]: https://doly-dev.github.io/antd-more/refs/heads/v3/index.html#/components/steps-form
[BizConfigProvider]: https://doly-dev.github.io/antd-more/refs/heads/v3/index.html#/components/biz-config-provider
[BizUserLayout]: https://doly-dev.github.io/antd-more/refs/heads/v3/index.html#/components/biz-user-layout
[FileViewer]: https://doly-dev.github.io/antd-more/refs/heads/v3/index.html#/components/file-viewer
[InputIcon]: https://doly-dev.github.io/antd-more/refs/heads/v3/index.html#/components/input-icon
[TreeTable]: https://doly-dev.github.io/antd-more/refs/heads/v3/index.html#/components/tree-table
[what is commitlint]: https://github.com/conventional-changelog/commitlint#what-is-commitlint
[qrcode.react]: https://www.npmjs.com/package/qrcode.react
[wangeditor]: https://www.npmjs.com/package/wangeditor
