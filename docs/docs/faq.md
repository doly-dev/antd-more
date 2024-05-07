---
order: 1
nav:
  title: 文档
  path: /docs
---

# 常见问题

整理一些经常遇到的问题

## antd-more 和 ProComponents 有什么区别？

antd-more 是脱胎于所在公司内部业务场景，目前主要应用于国内业务，部分设计参考了 ProComponents ，使用起来更加简单。

- form - 提供了大量基础组件，扩展了转换方法，还集成常见的业务规则，这对于业务统一规范很有帮助。
- fied - antd-more 中只负责是字段展示，而在 ProComponents 中则是字段的展示和表单。
- table - 集成 form 和 field 提供了丰富的扩展 API

## 表单设置 `scrollToFirstError` ，文件上传校验失败，不会滚动至表单位置

```javascript
scrollToFirstError={{
  behavior(actions) {
    actions.forEach(({ el, top }) => {
      // implement the scroll anyway you want
      el.scrollTop = top - 72;
    });
  },
}}
```

> 参考 [scrollToFirstError for Upload input](https://github.com/ant-design/ant-design/issues/28869) ，v5 版本已修复，v4 可以采用以下方法提示。

建议在 `onFinishFailed` 中判断第一个错误是文件上传，增加 `message.error` 提示。

```javascript
onFinishFailed={(errorInfo) => {
  // 文件上传校验失败，不会滚动至表单位置，写一个message提示
  // ref: https://github.com/ant-design/ant-design/issues/28869
  if (errorInfo.errorFields[0].name[0] === 'uploadField') {
    message.error(errorInfo.errorFields[0].errors[0]);
  }
}}
```
