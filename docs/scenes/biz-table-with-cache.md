---
group:
  title: 展示组件
  order: 2
toc: content
---

# 缓存列表页 - BizTableWithCache

> 从列表页到详情页，再返回列表页，需要带入之前的查询条件和页面重新查询。

由于 [umi-plugin-keep-alive](https://www.npmjs.com/package/umi-plugin-keep-alive) 在 `umi v4` 版本中兼容不是很好，临时使用该方案解决列表页缓存问题。

**注意：**

```javascript
// 在重新登录或进入系统时，清空该缓存。
memoryCache.clear();
```

## 代码演示

### 基础用法

如果有用到 `names` 解构字段名，需要在 `columns` 的 `search` 写入对应的 `names` 字段配置。注意，`dataIndex` 或 `name` 不要和 `names` 中的名称重复，否则可能会被删除。

<code src='../../src/demos/BizTableWithCache/basic.tsx'></code>

## API

### BizTableWithCache

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| cacheKey | 查询项和页面缓存键值。 | `string` | - |
| useQuerySearch | 如果外部使用 query 自定义查询和请求，可以设为 true 。缓存恢复时不触发请求，需要自己手动触发请求。 | `boolean` | `false` |

建议关注 React 18.x 中的官方实现 [`<Offscreen />`](https://github.com/reactwg/react-18/discussions/19) 。
