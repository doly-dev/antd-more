---
title: 快速上手
order: 0
group:
  path: /
nav:
  title: 文档
  path: /docs
---

# 快速上手

[![npm][npm]][npm-url] ![GitHub](https://img.shields.io/github/license/doly-dev/util-helpers.svg)

## 使用

### npm 或 yarn 安装

```shell
npm install antd-more
```

<br />

```shell
yarn add antd-more
```

### 示例

```javascript
import { BizField } from 'antd-more';

// 值类型为颜色，显示红色色块
ReactDon.render(<BizField value="red" valueType="color" />, mountNode);
```

## 对应版本

| antd-more            | antd   |
| -------------------- | ------ |
| `v0.x` `v1.x` `v2.x` | `v4.x` |

## API

- **数据展示**
  - [BizField] - 业务字段
  - [BizDescriptions] - 业务描述
  - [BizTable] - 业务表格
  - [EditableBizTable] - 可编辑业务表格
- **数据录入**
  - [BizForm] - 业务表单
  - [Item] - 表单项
  - [Modal/Drawer] - 浮层表单
  - [QueryForm] - 查询表单
  - [StepsForm] - 分步表单

## 精选第三方 react 组件

- [qrcode.react] - 生成二维码
- [wangeditor] - 轻量级 web 富文本编辑器

[npm]: https://img.shields.io/npm/v/antd-more.svg
[npm-url]: https://npmjs.com/package/antd-more
[site]: https://doly-dev.github.io/antd-more/latest/index.html
[babel-plugin-import]: https://www.npmjs.com/package/babel-plugin-import
[doly]: https://www.npmjs.com/package/doly-cli
[umi]: https://umijs.org/zh-CN
[antd]: https://ant-design.gitee.io
[captchabutton]: /components/captcha-button
[color]: /components/color
[dictionary]: /components/dictionary
[bizdescriptions]: /components/biz-descriptions
[bizfield]: /components/biz-field
[biztable]: /components/biz-table
[editablebiztable]: /components/editable-biz-table
[bizform]: /components/biz-form
[item]: /components/item
[modal/drawer]: /components/modal-form
[queryform]: /components/query-form
[stepsform]: /components/steps-form
[qrcode.react]: https://www.npmjs.com/package/qrcode.react
[wangeditor]: https://www.npmjs.com/package/wangeditor
