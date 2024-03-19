---
order: 3
---

# 常见问题

## 如何关闭表单自动填充

> 参考：[如何关闭表单自动填充](https://developer.mozilla.org/zh-CN/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion)
>
> 适用场景：注册、修改密码、新建表单等

通常设置 `autocomplete="off"` 并不能阻止 Chrome 中的自动填充，需要设置成 `autocomplete="new-password"` 才生效。

可以在 `BizForm` 中添加下面代码：

```typescript
{/* <!-- 阻止浏览器的自动填充 --> */}
<input
  type="text"
  name="_prevent_auto_complete_name"
  autoComplete="off"
  readOnly={true}
  style={{ display: 'none' }}
/>
<input
  type="password"
  name="_prevent_auto_complete_pass"
  autoComplete="new-password"
  readOnly={true}
  style={{ display: 'none' }}
/>
{/* <!-- End 阻止浏览器的自动填充 --> */}
```

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

> 参考 [scrollToFirstError for Upload input](https://github.com/ant-design/ant-design/issues/28869) ，官方还未解决。

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

## 为什么时间类组件的国际化 locale 设置不生效？

> 参考：[为什么时间类组件的国际化-locale-设置不生效](https://ant.design/docs/react/faq-cn#为什么时间类组件的国际化-locale-设置不生效)

请检查是否正确设置了 dayjs 语言包。

```javascript
import 'dayjs/locale/zh-cn';

dayjs.locale('zh-cn');
```

如果还有问题，请检查是否有两个版本的 dayjs 共存？

```bash
npm ls dayjs
# or
pnpm why dayjs
```
