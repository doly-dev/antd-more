---
title: Dictionary - 数据字典
order: 1
group:
  path: /
nav:
  title: 组件
  path: /components
---

# Dictionary

> 推荐使用 [BizField](/components/biz-field)。

`数据字典` 显示

## 代码演示

### 字典值

<code src="./demos/Demo1.tsx" />

### 多种展示方式

<code src="./demos/Demo2.tsx" />

### 多个枚举

<code src="./demos/Demo3.tsx" />

### fieldNames

自定义字段名

<code src="./demos/fieldNames.tsx" />

## API

```typescript
export interface DictionaryProps<ValueType = any> extends SpaceProps {
  valueEnum: EnumData;
  value?: ValueType | ValueType[];
  defaultLabel?: ReactNode;
  type?: 'text' | 'tag' | 'badge';
  optionName?: string;
  fieldNames?: DictionaryFieldNames;
  match?: (itemValue: ValueType, currentValue: ValueType) => boolean;
}
```

<br />

除了以下参数，其余同 [Space](https://ant-design.gitee.io/components/space-cn#api) 一样。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| valueEnum | 数据字典 | `EnumData` | `[]` |
| value | 当前字典值 | `ValueType` | - |
| defaultLabel | 当找不到字典值对应的名称时，显示默认名称 | `ReactNode` | - |
| type | 显示方式 | `'text' \| 'tag' \| 'badge'` | `'text'` |
| fieldNames | 自定义节点 `label`、`value` 的字段 | `{label: string; value: string;}` | - |
| match | 自定义 value 匹配方法 | `(itemValue: ValueType, value: ValueType) => boolean;` | - |

### EnumData

```typescript
import type { TagProps, BadgeProps, SpaceProps } from 'antd';

type AliasType = { alias?: ReactNode };

type EnumItem<ValueType = any> = {
  label?: ReactNode;
  value?: ValueType;
  badge?: Omit<BadgeProps, 'status'> & AliasType & { status?: string };
  tag?: TagProps & AliasType;
  text?: HtmlHTMLAttributes<HTMLSpanElement> & AliasType;
  [key: string]: any;
};

export type EnumData<ValueType = any> = EnumItem<ValueType>[];
```
