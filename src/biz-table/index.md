---
title: BizTable - 业务表格
order: 2
group:
  path: /
nav:
  title: 组件
  path: /components
---

# BizTable - 业务表格

基于 antd Table 扩展了表单（BizForm）、字段（BizField）、分页等功能。

## 代码演示

### 简易列表页

只需定义 `request` `rowKey` `columns` 。

<code src="./demos/Demo1.tsx" background="#f5f5f5" />

### 复杂列表页

自定义查询表单操作，表单默认值，默认展示1个表单项，扩展区域，工具栏区域。

<code src="./demos/Demo2.tsx" background="#f5f5f5" />

### 普通表格

<code src="./demos/Demo3.tsx" background="#f5f5f5" />

### formItems配置

不推荐使用该方式，更推荐 `columns` 中配置 `search` 。

当有 `formItems` 配置时， `columns` 配置的 `search` 将失效。

<code src="./demos/formItems.tsx" background="#f5f5f5" />

### 异步初始值表格

5秒后获取到初始值再发起请求。

<code src="./demos/async-initial-values.tsx" background="#f5f5f5" />

### 更多查询表单项

<code src="./demos/Demo4.tsx" background="#f5f5f5" />

## API

### BizTable

除了以下参数，其余和 antd [Table](https://ant-design.gitee.io/components/table-cn/#API) 组件一样。

参数 | 说明 | 类型 | 默认值 |
------------- | ------------- | ------------- | ------------- |
request  | 获取 `dataSource` 的方法 | `Request` | - |
autoRequest  | 初始化时自动触发 `request` | `boolean` | `true` |
ready  | 为 `false` 时，禁止提交/重置表单，不触发 `request` 。<br/>为 `true` 时，会重新设置表单初始值，如果 `autoRequest=true` 则自动请求。 | `boolean` | `true` |
nowrap  | 单元格内容不会换行，表格宽度超过100%自动处理横向滚动条。<br />如果要设置单元格宽度，请关闭该配置 或 `column` 的 `nowrap` 设置为 `false`。 | `boolean` | `true` |
formItems  | 查询表单项，推荐使用 `columns.search` 配置 | `ReactNode[]` | - |
toolbar  | 工具栏，表格内的上面区域 | `ReactNode` | - |
toolbarAction  | 工具栏右侧显示内置工具 | `boolean \| { reload?: boolean; density?: boolean; fullScreen?: boolean; columnSetting?: boolean; }` | `false` |
toolbarRender  | 自定义工具栏渲染。<br/>如果有设置toolbarAction，参数 dom 包含了右侧内置工具。 | `(dom: JSX.Element) => ReactNode` | - |
fullScreenBackgroundColor  | 全屏时显示的背景颜色 | `string` | `#ffffff` |
extra  | 扩展内容，表格外的上面、查询表单下面的区域 | `ReactNode` | - |
form  | 同 [QueryForm] 配置参数 | [QueryFormProps] | - |
formRef  | 获取查询表单的 `form` 实例  | `MutableRefObject&lt;FormInstance&gt;` | - |
actionRef  | 常用操作引用，便于自定义触发  | `MutableRefObject&lt;ActionType&gt;` | - |
tableRender  | 自定义表格渲染  | `(props: BizTableProps&lt;RecordType&gt;, dom: JSX.Element) => ReactNode` | - |

### Request 请求方法

只需按照提供的参数发起请求，并处理成相应的返回值格式即可。

```typescript
type BizTableRequest = (
  params: {
    pageSize?: number;
    current?: number;
    [key: string]: any;
  },
  filters: Record<string, (string | number)[] | null>,
  sorter: SorterResult<RecordType> | SorterResult<RecordType>[],
  extra: {
    currentDataSource,
    action: "paginate" | "sort" | "filter" | "reload" | "reset" | "submit"
  }
) => Promise<{ data: object[]; total?: number; }>;
```

**参数**

第一个参数是查询表单值和分页，第二个是筛选，第三个是排序，第四个扩展数据。

**返回值**

`data` 用于设置 Table 的 dataSource ，`total` 用于设置分页。

**第四个参数中的 action 说明**

值 | 说明 |
---- | ---- |
paginate | 点击分页 |
sort | 点击排序 |
filter | 点击筛选 |
reload | 调用 `actionRef.current.reload` |
reset | 点击重置 或 调用 `actionRef.current.reset` |
submit | 点击查询 或 调用 `actionRef.current.submit` |

如果手动使用 `formRef.current.submit()` 触发表单提交，会导致 `action` 不准确，`formRef` 一般在处理赋值时使用。常用操作推荐使用 `actionRef` 。

### Columns 列定义

列描述数据对象，在原来 antd Table [Column](https://ant-design.gitee.io/components/table-cn/#Column) 的基础上扩展了以下配置：

参数 | 说明 | 类型 | 默认值 |
------------- | ------------- | ------------- | ------------- |
tooltip  | 表头标题后面的补充提示 | `ReactNode` | - |
valueType  | 值类型。同 BizField 的 valueType，用于列展示 或 查询表单项 或 可编辑表格项。 | [ValueType](/components/biz-field#valuetype-值) | - |
valueEnum  | 包含 `value` `name` 的数据字典。<br/>当 `valueType` 为 `enum` `enumTag` `enumBadge` 时生效。 | `EnumData` | - |
field  | 展示字段的配置。同 BizField 的配置项，支持 object 和 function 方式。<br/>function 方式默认参数和render一样，需返回 BizField 的配置。 | `object \| (text: any, record: RecordType, index: number)=>object` | - |
search  | 配置查询表单项 | `SearchProps` | - |
order  | 查询表单项排序，数值越小越靠前 | `number` | `0` |
table  | 是否在表格中显示，适用于部分字段只有查询表单，但表格中不显示 | `boolean` | `true` |

- `valueType` 用于字段展示时，如果没有 `render`，将使用 [BizField] 渲染。
- `valueType` 用于查询表单项 或 可编辑表格项时，转换为下表中的 `itemType` 。

valueType valueEnum 为以下几个配置共用字段，可以复写：

- field - 展示字段的配置
- search - 查询表单项的配置
- editable - 可编辑表格项配置（[EditableBizTable](/components/biz-field#valuetype-值) 组件）

#### search 查询表单配置项

当值为 `true` 或 `object` 时，自动添加查询表单项。除了以下映射值的配置，其余项皆透传给表单项。

`columns` 部分配置跟查询表单项配置的映射：

```
dataIndex = name
title = label
valueType = itemType
valueEnum = options
```

<br/>

| valueType | itemType | BizForm表单项
| ----- | ----- | ----- 
| `text` | `input` | [ItemInput]
| `money` `progress` `percent` | `number` | [ItemNumber]
| `color` | `color` | [ItemColor]
| `enum` `enumTag` `enumBadge` | `select` | [ItemSelect]
| `date` `formNow` `dateWeek` `dateMonth` `dateQuarter` `dateYear` | `date` | [ItemDate]
| `dateRange` | `dateRange` | [ItemDateRange]
| `time` | `time` | [ItemTime]
| `timeRange` | `timeRange` | [ItemTimeRange]
| - | `address` | [ItemAddress]
| - | `captcha` | [ItemCaptcha]
| - | `checkbox` | [ItemCheckbox]
| - | `textarea` | [ItemTextArea]
| - | `password` | [ItemPassword]
| - | `radio` | [ItemRadio]
| - | `upload` | [ItemUpload]
| - | `slider` | [ItemSlider]
| - | `switch` | [ItemSwitch]

以下几种配置结果都是一样的:

```typescript
{
  dataIndex: "createTime",
  title: "创建时间",
  valueType: "dateTime", // valueType 为日期时，内部自动处理格式
  search: true
},
{
  dataIndex: "createTime",
  title: "创建时间",
  search: {
    valueType: "dateTime"
  }
},
{
  dataIndex: "createTime",
  title: "创建时间",
  search: {
    itemType: "date", // 注意区分 valueType 和 itemType，valueType 只是用于映射 itemType，最终还是使用 itemType，而 itemType 没有 dateTime
    showTime: true,
    format: "YYYY-MM-DD HH:mm:ss"
  }
},
```

如果 `valueType` 没有匹配的 `itemType` 或没有设置 `itemType`，默认 `itemType='input'` 。

再如果以上都不符合要求，可以自定义表单项渲染 `search.render` 。

```typescript
search: {
  render: (originItem, dom: JSX.Element, form: FormInstance): JSX.Element{
    console.log(originItem, dom, form);
    // return dom;

    const { dataIndex, title } = originItem;
    return (
      <BizForm.Item name={dataIndex} label={title}>
        {/* some form, example Rate Slider Switch ... */}
        <AutoComplete />
      </BizForm.Item>
    )
  }
}
```

### actionRef

用 `actionRef` 可手动触发 `reload` `reset` `submit` 操作。

```typescript
type ActionType = {
  reload: () => void;
  reset: () => void;
  submit: () => void;
};

const ref = useRef<ActionType>();

<BizTable actionRef={ref} />;

// 刷新，使用原来的查询表单值、筛选、排序、分页参数重新发起请求
ref.current.reload();

// 重置查询表单并触发请求，分页会重置到第一页，筛选、排序不变
ref.current.reset();

// 触发查询表单提交，分页会重置到第一页，筛选、排序不变
ref.current.submit();
```

## 常见问题

### 在全屏下的Modal不会展示？

> 问题参考: [proTable在全屏下的modal不会展示]

可查看具体示例：[修改和新增共用表单](/components/modal-form#修改和新增共用表单)

```typescript
<ConfigProvider
  getPopupContainer={() => document.querySelector(".antd-more-table")}
>
  // modal
</ConfigProvider>;
```


[BizField]: /components/biz-field#api
[QueryFormProps]: /components/query-form#queryform
[QueryForm]: /components/query-form

[ItemAddress]: /components/item#itemaddress
[ItemCaptcha]: /components/item#itemcaptcha
[ItemCheckbox]: /components/item#itemcheckbox
[ItemColor]: /components/item#itemcolor
[ItemDate]: /components/item#itemdate
[ItemDateRange]: /components/item#itemdaterange
[ItemInput]: /components/item#iteminput
[ItemNumber]: /components/item#itemnumber
[ItemPassword]: /components/item#itempassword
[ItemRadio]: /components/item#itemradio
[ItemSelect]: /components/item#itemselect
[ItemSlider]: /components/item#itemslider
[ItemSwitch]: /components/item#itemswitch
[ItemTextArea]: /components/item#itemtextarea
[ItemTime]: /components/item#itemtime
[ItemTimeRange]: /components/item#itemtimerange
[ItemUpload]: /components/item#itemupload

[proTable在全屏下的modal不会展示]: https://github.com/ant-design/pro-components/issues/922