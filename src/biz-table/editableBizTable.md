---
title: EditableBizTable - 可编辑业务表格
order: 3
group:
  path: /
nav:
  title: 组件
  path: /components
---

# EditableBizTable - 可编辑业务表格

可编辑表格，基于 BizTable 扩展。

默认关闭了分页，同时修改了 `value` 和 `onChange` `onValueChange` 使其可以方便的集成到 antd 的 Form 中。

**注意说明**

- 如果使用 `onChange` 内部将保存了两套数据，分别为 `已存在的数据`和`新增数据`。
- 新增数据在 `editableActionRef.current.save` 之后才会变成已存在的数据。

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

### EditableBizTable

```typescript
import { BizTable } from 'antd-more';

const { EditableBizTable } = BizTable;
```

除了以下参数，其余和 BizTable 一样。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前已存在的数据，同表格的 `dataSource` 。设置 `value` 表示为受控组件。 | `T[]` | - |
| onChange | 数据保存和删除时触发。<br/>如果同时设置了 `onValuesChange` ， `onChange` 将失效。 | `(values: T[]) => void` | - |
| onValuesChange | 数据变动时触发，可用于实时数据 或 表单中。<br/>如果同时设置了 `onChange` ， `onChange` 将失效。 | `(values: T[]) => void` | - |
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

```text
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

[bizformitemaddress]: /components/item#address
[bizformitemcaptcha]: /components/item#captcha
[bizformitemcheckbox]: /components/item#checkbox
[bizformitemcolor]: /components/item#color
[bizformitemdate]: /components/item#date
[bizformitemdaterange]: /components/item#daterange
[bizformiteminput]: /components/item#input
[bizformitemnumber]: /components/item#number
[bizformitempassword]: /components/item#password
[bizformitemradio]: /components/item#radio
[bizformitemselect]: /components/item#select
[bizformitemslider]: /components/item#slider
[bizformitemswitch]: /components/item#switch
[bizformitemtextarea]: /components/item#textarea
[bizformitemtime]: /components/item#time
[bizformitemtimerange]: /components/item#timerange
[bizformitemupload]: /components/item#upload
