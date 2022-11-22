---
title: BizTable - 业务表格
order: 2
group:
  title: 数据展示
nav:
  title: 组件
  path: /components
---

# BizTable - 业务表格

基于 antd Table 扩展了表单（BizForm）、字段（BizField）、分页等功能。

## 代码演示

### 简易列表页

只需定义 `request` `rowKey` `columns` 。

<code src="./demos/Demo1.tsx" background="#f5f5f5"></code>

### 复杂列表页

自定义查询表单操作，表单默认值，默认展示 1 个表单项，扩展区域，工具栏区域。

<code src="./demos/Demo2.tsx" background="#f5f5f5"></code>

### 自定义渲染字段

日期时间换行、金额分转元、base64 图片、超长省略等字段展示。

将 BizField 不支持的展示字段，抽象到 `utils/field.tsx` 文件。

<code src="./demos/define-render.tsx" background="#f5f5f5"></code>

### 普通表格

<code src="./demos/Demo3.tsx" background="#f5f5f5"></code>

### formItems 配置

不推荐使用该方式，更推荐 `columns` 中配置 `search` 。

当有 `formItems` 配置时， `columns` 配置的 `search` 将失效。

<code src="./demos/formItems.tsx" background="#f5f5f5"></code>

### 异步初始值查询表单

5 秒后获取到初始值再发起请求。

<code src="./demos/async-initial-values.tsx" background="#f5f5f5"></code>

### 手动设置查询表单

不改变查询表单的 `initialValues`，而是通过 `formRef` 设置表单值，再进行查询，这样不影响查询表单的重置操作。比如通过 URL 带一些默认查询参数。

> 如果需要自动获取 URL 的 search 并且支持 keep-alive 激活时调用，可参考 [未展示示例](https://github.com/doly-dev/antd-more/blob/master/src/biz-table/demos/search-form-ref-2.tsx#L107) 的 init 方法。

<code src="./demos/search-form-ref-1.tsx" background="#f5f5f5"></code>

### 仅使用 field 转换功能

仅使用表格的 `field` 转换功能，如果不使用 `request`，需将 `autoRequest` 设为 `false`。

<code src="./demos/freight.tsx" background="#f5f5f5"></code>

### 更多查询表单项

<code src="./demos/Demo4.tsx" background="#f5f5f5"></code>

## API

### BizTable

除了以下参数，其余和 antd [Table](https://ant-design.gitee.io/components/table-cn/#API) 组件一样。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| request | 获取 `dataSource` 的方法 | `Request` | - |
| autoRequest | 初始化时自动触发 `request` | `boolean` | `true` |
| ready | 为 `false` 时，禁止提交/重置表单，不触发 `request` 。<br/>为 `true` 时，会重新设置表单初始值，如果 `autoRequest=true` 则自动请求。 | `boolean` | `true` |
| nowrap | 单元格内容不会换行，表格宽度超过 100%自动处理横向滚动条。<br />如果要设置单元格宽度，请关闭该配置 或 `column` 的 `nowrap` 设置为 `false`。 | `boolean` | `true` |
| formItems | 查询表单项，推荐使用 `columns.search` 配置 | `ReactNode[]` | - |
| toolbar | 工具栏，表格内的上面区域 | `ReactNode` | - |
| toolbarAction | 工具栏右侧显示内置工具 | `boolean \| { reload?: boolean; density?: boolean; fullScreen?: boolean; columnSetting?: boolean; }` | `false` |
| toolbarRender | 自定义工具栏渲染。<br/>如果有设置 toolbarAction，参数 dom 包含了右侧内置工具。 | `(dom: ReactElement) => ReactNode` | - |
| fullScreenBackgroundColor | 全屏时显示的背景颜色 | `string` | `#ffffff` |
| extra | 扩展内容，表格外的上面、查询表单下面的区域 | `ReactNode` | - |
| form | 同 [QueryForm] 配置参数 | [QueryFormProps] | - |
| formRef | 获取查询表单的 `form` 实例 | `MutableRefObject<FormInstance \| undefined>` | - |
| actionRef | 常用操作引用，便于自定义触发 | `MutableRefObject<ActionType \| undefined>` | - |
| tableRender | 自定义表格渲染 | `(props: BizTableProps<RecordType>, dom: ReactElement) => ReactNode` | - |

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
    currentDataSource;
    action: 'paginate' | 'sort' | 'filter' | 'reload' | 'reset' | 'submit';
  }
) => Promise<{ data: object[]; total?: number }>;
```

**参数**

第一个参数是查询表单值和分页，第二个是筛选，第三个是排序，第四个扩展数据。

**返回值**

`data` 用于设置 Table 的 dataSource ，`total` 用于设置分页。

**第四个参数中的 action 说明**

| 值       | 说明                                        |
| -------- | ------------------------------------------- |
| paginate | 点击分页                                    |
| sort     | 点击排序                                    |
| filter   | 点击筛选                                    |
| reload   | 调用 `actionRef.current.reload`             |
| reset    | 点击重置 或 调用 `actionRef.current.reset`  |
| submit   | 点击查询 或 调用 `actionRef.current.submit` |

如果手动使用 `formRef.current.submit()` 触发表单提交，会导致 `action` 不准确，`formRef` 一般在处理赋值时使用。常用操作推荐使用 `actionRef` 。

### Columns 列定义

列描述数据对象，在原来 antd Table [Column](https://ant-design.gitee.io/components/table-cn/#Column) 的基础上扩展了以下配置：

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| tooltip | 表头标题后面的补充提示 | `ReactNode \| (TooltipProps & { icon: ReactNode })` | - |
| valueType | 值类型。同 BizField 的 valueType，用于列展示 或 查询表单项 或 可编辑表格项。 | [ValueType](/components/biz-field#valuetype-值) | - |
| valueEnum | 数据字典。<br/>当 `valueType` 为 `enum` `enumTag` `enumBadge` 时生效。 | `EnumData` | - |
| field | 展示字段的配置。同 BizField 的配置项，支持 object 和 function 方式。<br/>function 方式默认参数和 render 一样，需返回 BizField 的配置。 | `object \| (text: any, record: RecordType, index: number) => object` | - |
| search | 配置查询表单项 | `SearchProps` | - |
| order | 查询表单项排序，数值越小越靠前 | `number` | `0` |
| table | 是否在表格中显示，适用于部分字段只有查询表单，但表格中不显示 | `boolean` | `true` |

- `valueType` 用于字段展示时，如果没有 `render`，将使用 [BizField] 渲染。
- `valueType` 用于查询表单项 或 可编辑表格项时，转换为下表中的 `itemType` 。

valueType valueEnum 为以下几个配置共用字段，可以复写：

- field - 展示字段的配置
- search - 查询表单项的配置
- editable - 可编辑表格项配置（[EditableBizTable](/components/biz-field#valuetype-值) 组件）

#### search 查询表单配置项

当值为 `true` 或 `object` 时，自动添加查询表单项。除了以下映射值的配置，其余项皆透传给表单项。

`columns` 部分配置跟查询表单项配置的映射：

```javacript
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
| - | `autoComplete` | [BizFormItemAutoComplete] |
| - | `captcha` | [BizFormItemCaptcha] |
| - | `cascader` | [BizFormItemCascader] |
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
  render: (originItem, dom: ReactElement, form: FormInstance): ReactElement{
    console.log(originItem, dom, form);
    // return dom;

    const { dataIndex, title } = originItem;
    return (
      <BizFormItem name={dataIndex} label={title}>
        {/* some form, example Rate Slider Switch ... */}
        <AutoComplete />
      </BizFormItem>
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

### 在全屏下的 Modal 不会展示？

> 参考: [proTable 在全屏下的 modal 不会展示](https://github.com/ant-design/pro-components/issues/922)

可查看具体示例：[修改和新增共用表单](/components/modal-form#修改和新增共用表单)

```typescript
<ConfigProvider getPopupContainer={() => document.querySelector('.antd-more-table')}>
  // modal
</ConfigProvider>
```

[bizfield]: /components/biz-field#api
[queryformprops]: /components/query-form#queryform
[queryform]: /components/query-form
[bizformitemaddress]: /components/item#address
[bizformitemautocomplete]: /components/item#autocomplete
[bizformitemcaptcha]: /components/item#captcha
[bizformitemcascader]: /components/item#cascader
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
