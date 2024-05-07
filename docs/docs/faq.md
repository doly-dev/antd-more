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

## 如何设置全局表单校验失败滚动至第一个错误表单项位置？

```typescript
// App.tsx 或 其他入口文件

import { BizConfigProvider } from 'antd-more';

// ...

<BizConfigProvider
  bizForm={{
    scrollToFirstError: {
      behavior(actions) {
        actions.forEach(({ el, top }) => {
          // implement the scroll anyway you want
          el.scrollTop = top - 72;
        });
      }
    }
  }}
>
  // 你的代码...
</BizConfigProvider>;

// ...
```

## 为什么时间类组件的国际化 locale 设置不生效？

> 参考：[为什么时间类组件的国际化-locale-设置不生效](https://ant.design/docs/react/faq-cn#为什么时间类组件的国际化-locale-设置不生效)

请检查是否正确设置了 dayjs 语言包。

```typescript
import 'dayjs/locale/zh-cn';

dayjs.locale('zh-cn');
```

如果还有问题，请检查是否有两个版本的 dayjs 共存？

```bash
npm ls dayjs
# or
pnpm why dayjs
```
