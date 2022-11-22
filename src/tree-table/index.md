---
title: TreeTable - 树表格
order: 3
group:
  title: 通用
nav:
  title: 组件
  path: /components
---

# TreeTable - 树表格

树型表格多选控件，常用于菜单权限列表勾选。

## 代码演示

### 基础用法

<code src='./demos/basic.tsx'></code>

### BizForm 中使用

<code src='./demos/bizform-1.tsx'></code>

### 自定义节点 fieldNames

<code src='./demos/fieldNames.tsx'></code>

### 菜单权限配置

<code src='./demos/menu-authorize.tsx'></code>

### 异步获取数据

<code src='./demos/async.tsx'></code>

### 不限数据层级

<code src='./demos/multiple.tsx'></code>

## API

```typescript
type ValueType = string | number;

export type TreeTableDataItem = {
  label?: React.ReactNode;
  value?: ValueType;
  disabled?: boolean;
  children?: TreeTableDataItem[];
  [key: string]: any;
};

export type TreeTableData = TreeTableDataItem[];
```

除了以下参数，还支持 antd [Table](https://ant.design/components/table-cn/) 的一些参数配置。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| treeData | 树型结构数据 | `TreeTableData` | - |
| columnTitles | 表格列标题 | `ReactNode[]` | - |
| value | 值，有该值表示为受控模式。 | `ValueType[]` | `-` |
| onChange | 修改选项时触发 | `(values: ValueType[]) => void` | `-` |
| halfToChecked | 半勾选转换为勾选状态，会影响 `onChange` 的值。 | `boolean` | `false` |
| lastColumnMerged | 最后一列是否合并展示 | `boolean` | `false` |
| fieldNames | 自定义节点 `label`、`value`、`children` 的字段 | `{ label: string; value: string; children: string; }` | - |
| labelRender | 自定义渲染节点 | `(nodeData: TreeTableDataItem) => ReactNode` | - |
