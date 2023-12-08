---
order: 2
---

# 从 v3 到 v4

## v4 有哪些变化

主要升级了 `antd` `v5` 版本。

### visible/onVisibleChange 改为 open/onOpenChange

涉及以下组件：

- DrawerForm
- ModalForm
- Color 颜色选择器

### 移除和重构

- BizFormItemCaptcha
  - 移除 `autoRun` 属性，请使用 `autoClick` 替换。
- BizFormItemUpload
  - 移除 `maxCountMessage` 属性。
  - 移除内部额外处理的校验逻辑
  - `onUpload` 返回值不再挂载到 `rcFile` 上，而是放入 `response` 。
- BizTable
  - 移除 `columns` 配置项中的 `order` 属性，请使用 `search.order` 替换。
  - 移除 `request` 第四个参数中的 `action` 自定义值（submit、reset、reload），同步 `antd Table onChange` 第四个参数值。
- Dictionary
  - 移除 `optionName` 属性，请使用 `propsName` 替换。
- Color
  - 重构颜色选择器组件，支持 `disabled` `pickerProps` 属性。

### 日期库改用 dayjs

内部没有引入语言包，请在项目入口文件中引入：

```typescript
import 'dayjs/locale/zh-cn';

dayjs.locale('zh-cn');
```
