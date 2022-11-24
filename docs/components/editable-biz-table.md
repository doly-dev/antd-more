---
group:
  title: 数据展示
  order: 1
toc: content
---

# EditableBizTable - 可编辑业务表格

可编辑表格，基于 BizTable 扩展。

默认关闭了分页，同时修改了 `value` 和 `onChange` `onValueChange` 使其可以方便的集成到 antd 的 Form 中。

**注意说明**

- 内部保存了两套数据，分别为 `已存在的数据`和`新增数据`。外部只能在同时设置 `value` 和 `onChange` 时控制已存在的数据。
- `onValuesChange` 在新增和已存在数据编辑状态下有变动时触发。当存在 `onValuesChange` 时，已存在的数据将变为`不可控`。
- 新增数据在 `editableActionRef.current.save` 之后才会变成已存在的数据。
- 如果单行保存/删除需要同步服务端，请保证不要有同时触发多个异步保存或删除数据的情况（通过 loading 或 判断操作数据数量），不然编辑状态可能会产生偏差。

## 代码演示

### 可编辑表格

<code src="../../src/biz-table/demos/editable-1.tsx"></code>

### 更多操作

<code src="../../src/biz-table/demos/editable-2.tsx"></code>

### 实时数据

<code src="../../src/biz-table/demos/editable-3.tsx"></code>

### 结合 Form 使用 1

<code src="../../src/biz-table/demos/editable-withForm-1.tsx"></code>

### 结合 Form 使用 2

**注意**该示例含编辑状态切换，所以不需要设置 `trigger=onValuesChange` 。并且修改和新增只有保存成功后才会加入 form 的数据中。

<code src="../../src/biz-table/demos/editable-withForm-2.tsx"></code>

### 结合 Form 使用 3

<code src="../../src/biz-table/demos/editable-withForm-3.tsx"></code>

### 含查询表单和分页

<code src="../../src/biz-table/demos/editable-request-1.tsx" background="#f5f5f5"></code>

## API

```typescript
import { BizTable } from 'antd-more';
```

### EditableBizTable

```typescript
const { EditableBizTable } = BizTable;
```

除了以下参数，其余和 BizTable 一样。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前已存在的数据，同表格的 `dataSource` | `T[]` | - |
| onChange | dataSource 修改时，已存在的数据保存和删除时触发。<br/>如果设置了`value`，并且没有`onValuesChange`，将变为一个受控组件。 | `(values: T[]) => void` | - |
| onValuesChange | 新增和已存在数据编辑状态下有变动时触发，可用于实时数据 或 表单中。<br/>设置该方法后，已存在的数据将变成不可控。 | `(values: T[]) => void` | - |
| editable | 编辑表格的配置 | `EditableOptions` | - |

### editable 配置

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| editableKeys | 正在编辑的行，受控属性。必须使用 `rowKey` 值配置。 | `Key[]` | - |
| onChange | 行数据切换编辑状态时触发 | `(editableKeys: Key[], editableRows: T[]) => void` | - |
| onSave | 保存时触发。<br/>保存成功后退出编辑状态，如果返回 `Promise.reject` 表示保存失败状态不变。 | `(key: Key, row: T,isNewRecord:boolean) => Promise<any>` | - |
| onDelete | 删除时触发。<br/>删除成功后退出编辑状态，如果返回 `Promise.reject` 表示删除失败状态不变。 | `(key: Key, row: T,isNewRecord:boolean) => Promise<any>` | - |
| editableActionRef | 编辑表格的常用操作 | `MutableRefObject<EditableActionType \| undefined>` | - |
| formProps | 编辑表格的 form 配置项 | `BizFormProps` | - |

### editableActionRef 说明

| 参数 | 说明 | 类型 |
| --- | --- | --- |
| save | 保存 | `(rowKey: Key) => void` |
| delete | 删除 | `(rowKey: Key) => void` |
| cancel | 取消编辑 | `(rowKey: Key) => void` |
| add | 新增数据，可指定新增数据的位置，默认添加到最后。 | `(rowKey: Key, index?: number) => void` |
| edit | 进入编辑 | `(rowKey: Key) => void` |
| setFields | 设置单行表单值 | `(rowKey: Key, record: Partial<T>) => void` |
| reset | 重置表单值，不指定 `rowKey` 表示全部重置。 | `(rowKey?: Key) => void` |
| clearNewRecords | 清除未保存的新增数据 | `() => void` |
| getNewRecords | 获取未保存的新增数据 | `() => void` |
| setDataSource | 手动设置数据源，该操作会清除全部数据。 | `(records: T[]) => void` |

### Columns 列定义

在原来的基础上扩展了 `editable` 配置编辑列。当列数据含有 `dataIndex`，并且 `editable !== false` 或 `editable() !== false` 时表示有编辑状态。

配置比 `search` 多了一种函数方式，但是配置表单项都是通过 `valueType` -> `itemType` -> `BizFormItemXXX` 。

```typescript
const columns = [
  // ...
  {
    // ...
    editable?: boolean | Omit<SearchProps<T>, 'order'> | ((text: any, record: T, index: number) => boolean | Omit<SearchProps<T>, 'order'>);
  }
];
```

#### editable 编辑状态的表单配置

当使用 `editableActionRef.current.edit(rowKey)` 进入编辑时，切换显示为表单项。除了以下映射值的配置，其余项皆透传给表单项。

`columns` 部分配置跟表单项配置的映射：

```
dataIndex = name
title = label
valueType = itemType
valueEnum = options
```

<br/>

| valueType | itemType | BizFormItem 表单项 |
| --- | --- | --- |
| `text` | `input` | [BizFormItemInput] |
| `money` `progress` `percent` | `number` | [BizFormItemNumber] |
| `color` | `color` | [BizFormItemColor] |
| `enum` `enumTag` `enumBadge` | `select` | [BizFormItemSelect] |
| `date` `formNow` `dateWeek` `dateMonth` `dateQuarter` `dateYear` | `date` | [BizFormItemDate] |
| `dateRange` | `dateRange` | [BizFormItemDateRange] |
| `time` | `time` | [BizFormItemTime] |
| `timeRange` | `timeRange` | [BizFormItemTimeRange] |
| - | `address` | [BizFormItemAddress] |
| - | `captcha` | [BizFormItemCaptcha] |
| - | `checkbox` | [BizFormItemCheckbox] |
| - | `textarea` | [BizFormItemTextArea] |
| - | `password` | [BizFormItemPassword] |
| - | `radio` | [BizFormItemRadio] |
| - | `upload` | [BizFormItemUpload] |
| - | `slider` | [BizFormItemSlider] |
| - | `switch` | [BizFormItemSwitch] |

以下几种配置结果都是一样的:

```typescript
{
  dataIndex: "createTime",
  title: "创建时间",
  valueType: "dateTime", // valueType 为日期时，内部自动处理格式
},
{
  dataIndex: "createTime",
  title: "创建时间",
  editable: {
    valueType: "dateTime"
  }
},
{
  dataIndex: "createTime",
  title: "创建时间",
  editable: {
    itemType: "date", // 注意区分 valueType 和 itemType，valueType 只是用于映射 itemType，最终还是使用 itemType，而 itemType 没有 dateTime
    showTime: true,
    format: "YYYY-MM-DD HH:mm:ss"
  }
},
{
  dataIndex: "createTime",
  title: "创建时间",
  editable: (originItem, dom, form) => {
    return {
      itemType: "date", // 注意区分 valueType 和 itemType，valueType 只是用于映射 itemType，最终还是使用 itemType，而 itemType 没有 dateTime
      showTime: true,
      format: "YYYY-MM-DD HH:mm:ss"
    }
  }
},
```

如果 `valueType` 没有匹配的 `itemType` 或没有设置 `itemType`，默认 `itemType='input'` 。

再如果以上都不符合要求，可以自定义表单项渲染 `editable.render` 。

```typescript
editable: (_, record, index) => {
  render: (originItem, dom: React.ReactElement, form: FormInstance): React.ReactElement{
    console.log(originItem, dom, form);
    // return dom;

    return (
      <BizFormItem name={record[rowKey], originItem.dataIndex} label={originItem.title}>
        {/* some form, example Rate Slider Switch ... */}
        <AutoComplete />
      </BizFormItem>
    )
  }
}
```

[bizformitemaddress]: /components/biz-form-item#address
[bizformitemcaptcha]: /components/biz-form-item#captcha
[bizformitemcheckbox]: /components/biz-form-item#checkbox
[bizformitemcolor]: /components/biz-form-item#color
[bizformitemdate]: /components/biz-form-item#date
[bizformitemdaterange]: /components/biz-form-item#daterange
[bizformiteminput]: /components/biz-form-item#input
[bizformitemnumber]: /components/biz-form-item#number
[bizformitempassword]: /components/biz-form-item#password
[bizformitemradio]: /components/biz-form-item#radio
[bizformitemselect]: /components/biz-form-item#select
[bizformitemslider]: /components/biz-form-item#slider
[bizformitemswitch]: /components/biz-form-item#switch
[bizformitemtextarea]: /components/biz-form-item#textarea
[bizformitemtime]: /components/biz-form-item#time
[bizformitemtimerange]: /components/biz-form-item#timerange
[bizformitemupload]: /components/biz-form-item#upload
