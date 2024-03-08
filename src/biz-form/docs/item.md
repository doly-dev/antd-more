---
title: BizFormItem - 表单项
order: 2
group:
  path: /
nav:
  title: 组件
  path: /components
---

# BizFormItem - 表单项

提供了一系列的业务表单项，包含转换、校验等功能。

## 代码演示

### 所有表单项

<code src='../demos/Demo1.tsx' />

## API

### BizFormItem

```typescript
import { BizFormItem } from 'antd-more';
```

除了以下参数，其余和 antd Form.Item 一样。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| labelWidth | label 宽度。默认继承 `BizForm` 的 `labelWidth`。 | `number \| string \| false \| null` | - |
| hideLabel | 隐藏 label 。默认继承 `BizForm` 的 `hideLabel`。 | `boolean` | - |
| placeholderLabel | 占位 label ，将 label 高度设置为 0。该值为 `true` 时，BizFormItem 默认属性 `{ label: ' ', colon: false }`。 | `boolean` | - |
| transform | 转换该字段值，表单提交时执行。 | `(value) => any` | - |
| extendRules | 扩展校验规则。如果需要覆盖，请使用 `rules` | [Rule[]](https://ant-design.gitee.io/components/form-cn/#Rule) | - |
| renderField | 自定义内部表单渲染。要注意透传 `props` ，可参考 `ItemUpload` 的示例。 | `(dom: React.ReactElement) => React.ReactNode` | - |
| colProps | 设置该表单项 Col 属性。部分场景下生效，如 QueryForm 下、ItemCaptcha、ItemAddress 等。 | [ColProps](https://ant-design.gitee.io/components/grid-cn/#Col) | - |
| contentBefore | 表单前面的内容 | `ReactNode` | - |
| contentAfter | 表单后面的内容 | `ReactNode` | - |

### 其它 BizFormItem

以下 BizFormItemX 组件都是基于 BizFormItem 扩展，仅列出扩展的参数。如果为必填项，仅需设置 `required` 即可。

### Address

地址选择和输入框，该表单项由 2 个表单项组合而成，所以不要配置 `name`，但必须配置 `names` `labels` 。

默认级联框的 `colProps` 为 `{ md: 12, lg: 8 }` ， 输入框的 `colProps` 为 `{ md: 12, lg: 16 }` 。

**特点**

- 过滤空格
- 分开校验

**校验顺序**

- 必填时为空，提示：`请选择${labels[0]}` `请输入${labels[1]}`

<code src="../demos/item-address-1.tsx" />

<br/>

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| names | 级联选项和输入框的字段名 | `[NamePath, NamePath]` | - |
| labels | 级联选项和输入框的标签名，仅用于提示 | `[string, string]` | - |
| options | 级联选项数据，同 antd 的 [Cascader API 的 options](https://ant-design.gitee.io/components/cascader-cn/#API) | `Option[]` | - |
| fieldNames | 自定义 `options` 中 `label` `value` `children` 的字段 | `{ label?: string, value?: string, children?: string }` | - |
| formItemProps | 级联选项和输入框的 Item 属性。如果要修改宽度，可以分别传入 `colProps` 进行设置。 | `[BizFormItemProps, BizFormItemProps]` | `[]` |
| inputProps | 输入框的属性 | [InputProps](https://ant-design.gitee.io/components/input-cn/#API) | - |
| cascaderProps | 级联选项的属性 | [CascaderProps](https://ant-design.gitee.io/components/cascader-cn/#API) | - |

### AutoComplete

自动完成输入框。

**校验顺序**

- 必填时为空，提示：`请输入${label}`

<code src="../demos/item-autoComplete-1.tsx"></code>

<br/>

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| options | 数据化配置选项内容。 | `{ label, value }[]` | - |
| placeholder | 输入框提示 | `string` | `请输入` |
| allowClear | 支持清除 | `boolean` | `true` |
| maxLength | 最大长度 | `number` | - |
| onSearch | 搜索补全项的时候调用 | `function(value)` | - |
| onFocus | 获得焦点时的回调 | `function(e)` | - |
| onBlur | 失去焦点时的回调 | `function(e)` | - |
| autoCompleteProps | 自动完成输入框的属性 | [AutoCompleteProps](https://ant-design.gitee.io/components/auto-complete-cn/#API) | - |

### Captcha

验证码输入框和按钮。

**特点**

- 按钮状态自动管理（倒计时、禁用、loading）

**校验顺序**

- 必填时为空，提示：`请输入${label}`

<code src="../demos/item-captcha-1.tsx"></code>

<br/>

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 显示类型 | `'default' \| 'inline'` | `'default'` |
| onGetCaptcha | 点击按钮触发。用于验证手机号码或邮箱，并请求获取验证码。如果返回 `false` 或 `Promise.reject()` 表示验证失败或请求验证码失败。 | `() => boolean \| Promise<any>` | `() => true` |
| placeholder | 输入框提示 | `string` | `请输入` |
| allowClear | 支持清除 | `boolean \| {clearIcon?: React.ReactNode;}` | - |
| maxLength | 最大长度 | `number` | - |
| initText | 按钮初始显示文本 | `string` | `获取验证码` |
| runText | 按钮倒计时显示文本，包含 `%s` 会自动替换为秒数 | `string` | `%s秒后重新获取` |
| resetText | 按钮倒计时结束显示文本 | `string` | `重新获取验证码` |
| second | 按钮倒计时时长，单位秒 | `number` | `60` |
| autoClick | 组件装载完成后，自动触发点击按钮。 | `boolean` | `false` |
| autoFocusOnGetCaptcha | `onGetCaptcha` 请求获取验证成功后，自动获取输入框焦点 | `boolean` | `true` |
| inputProps | 输入框的属性 | [InputProps](https://ant-design.gitee.io/components/input-cn/#API) | - |
| buttonProps | 按钮的属性 | [ButtonProps](https://ant.design/components/button-cn/#API) | - |

### Cascader

级联选择。

**特点**

- 字段名自动转换拆分

**校验顺序**

- 必填时为空，提示：`请选择${label}`

<code src="../demos/item-cascader-1.tsx"></code>

<br/>

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| names | 级联选项字段名解构，设置该字段后，`name` 将失效。 | `string[]` | - |
| options | 级联选项数据，同 antd 的 [Cascader API 的 options](https://ant-design.gitee.io/components/cascader-cn/#API) | `Option[]` | - |
| fieldNames | 自定义 `options` 中 `label` `value` `children` 的字段 | `{ label?: string, value?: string, children?: string }` | - |
| placeholder | 输入框提示 | `string` | `请选择` |
| allowClear | 支持清除 | `boolean` | `true` |
| cascaderProps | 级联选项的属性 | [CascaderProps](https://ant-design.gitee.io/components/cascader-cn/#API) | - |

### Checkbox

多选框

**特点**

- 支持配置全部选项、排除项

**校验顺序**

- 必填时为空，提示：`请选择${label}`

<code src="../demos/item-checkbox-1.tsx" />

<br/>

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| options | 配置子元素 | `Option[]` | `[]` |
| excludeValues | 排除的值 | `((options: Option[]) => Value[]) \| Value[]` | `[]` |
| all | 是否显示全部 | `boolean` | `false` |
| allLabel | 全部的名称 | `ReactNode` | `全部` |
| checkboxGroupProps | 多选框 Group 的属性 | [CheckboxGroupProps](https://ant-design.gitee.io/components/checkbox-cn/#Checkbox-Group) | - |

### Color

颜色选择

**校验顺序**

- 必填时为空，提示：`请选择${label}`

<code src="../demos/item-color-1.tsx" />

<br/>

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| showText | 显示颜色值文本 | `boolean` | `false` |
| colorMode | 颜色模式 | `'hex' \| 'rgb'` | `hex` |
| placement | 颜色选择浮层位置 | `'top' \| 'left' \| 'right' \| 'bottom' \| 'topLeft' \| 'topRight' \| 'bottomLeft' \| 'bottomRight' \| 'leftTop' \| 'leftBottom' \| 'rightTop' \| 'rightBottom'` | `bottomLeft` |
| size | 颜色块大小 | `'small' \| 'middle'` | `'small'` |
| colorProps | 颜色选择器更多配置 | [`ColorSketchPickerProps`](/components/color#api) | - |

### Date

日期选择框

**特点**

- 快捷配置向前、后禁选范围
- 支持字符串格式的日期输入
- 输出时自动转换为字符串格式

**校验顺序**

- 必填时为空，提示：`请选择${label}`

<code src="../demos/item-date-1.tsx" />

<br/>

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabledDateBefore | 配置不可选基于当天增加/减少之前的日期。 | `number` | - |
| disabledDateAfter | 配置不可选基于当天增加/减少之后的日期。 | `number` | - |
| showTime | 显示时间选择 | `boolean` | `false` |
| placeholder | 输入框提示 | `string` | - |
| allowClear | 支持清除 | `boolean` | `true` |
| format | 设置日期格式，默认值会根据 `picker` 调整。 | `string` | `YYYY-MM-DD` |
| picker | 设置选择器类型 | `date` `week` `month` `quarter` `year` | `date` |
| pickerProps | 选择器的属性 | [DatePickerProps](https://ant-design.gitee.io/components/date-picker-cn/#API) | - |

### DateRange

日期区间选择框

**特点**

- 快捷配置向前、后禁选范围
- 支持字符串格式的日期输入
- 输出时自动转换为字符串格式
- 最大区间范围
- 字段名自动转换拆分

**校验顺序**

- 必填时为空，提示：`请选择${label}`
- 日期范围判断超过区间，提示：`时间跨度不能超过${maxRange}天|周|月|季|年`

<code src="../demos/item-dateRange-1.tsx" />

<br/>

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| maxRange | 最大可选范围值，用于校验，根据当前 picker 为单位。 | `number` | - |
| names | 开始和结束的字段名，配置该值后，原来的 `name` 将失效。如 `['startDate', 'endDate']` | `[string, string]` | - |
| disabledDateBefore | 配置不可选基于当天增加/减少之前的日期。 | `number` | - |
| disabledDateAfter | 配置不可选基于当天增加/减少之后的日期。 | `number` | - |
| showTime | 显示时间选择 | `boolean` | `false` |
| placeholder | 输入框提示 | `[string, string]` | - |
| allowClear | 支持清除 | `boolean` | `true` |
| format | 设置日期格式，默认值会根据 `picker` 调整。 | `string` | `YYYY-MM-DD` |
| picker | 设置选择器类型 | `date` `week` `month` `quarter` `year` | `date` |
| pickerProps | 选择器的属性 | [DateRangePickerProps](https://ant-design.gitee.io/components/date-picker-cn/#RangePicker) | - |

### Input

Input 输入框

**特点**

- 可配置过滤空格
- 当有 `type` 值时：
  - 失焦校验
  - 邮箱、用户名自动过滤前后空格

**校验顺序**

- 必填时为空，提示：`请输入${label}`
- 如果是用户名 `type=userName`（如有长度限制，可通过 `excludeRules` 扩展规则）
  - 验证非手机号码，提示：`${label}不能为手机号码`
  - 验证不包含@符号，提示：`${label}不能包含@符号`
- 如果是内置指定类型 `type=bankCard | email | idCard | mobile` 使用 `util-helpers` [isBankCard]、[isEmail]、[isIdCard]、[isMobile] 验证，提示：`请输入正确的${label}`

<code src="../demos/item-input-1.tsx" />

<br/>

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 输入框类型。 | `'mobile' \| 'bankCard' \| 'idCard' \| 'email' \| 'userName'` | - |
| disabledWhiteSpace | 去除前后空格 | `boolean` | - |
| format | 是否格式化。仅在设置为 `type=mobile \| bankCard \| idCard` 时生效。<br/>手机号码和银行卡号不格式化空格，身份证号`x`不强制大写。 | `boolean` | `false` |
| placeholder | 输入框提示 | `string` | `请输入` |
| allowClear | 支持清除 | `boolean \| {clearIcon?: React.ReactNode;}` | - |
| maxLength | 最大长度 | `number` | - |
| addonAfter | 带标签的 input，设置后置标签 | `ReactNode` | - |
| addonBefore | 带标签的 input，设置前置标签 | `ReactNode` | - |
| inputProps | 输入框的属性 | [InputProps](https://ant-design.gitee.io/components/input-cn/#API) | - |

### Number

数字输入框

**特点**

- 支持数字输入框前后插入元素
- 返回的值为类型数字

**校验顺序**

- 必填时不为数字，提示：`请输入${label}`
- 大于等于 `lt` 时，提示：`${label}必须小于${lt}`
- 小于等于 `gt` 时，提示：`${label}必须大于${gt}`
- 大于 `lte` 时，提示：`${label}必须小于或等于${lte}`
- 小于 `gte` 时，提示：`${label}必须大于或等于${gt}`
- 小数位数大于 `maxPrecision` 时，提示：`支持${maxPrecision}位小数`

<code src="../demos/item-number-1.tsx" />

<br/>

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| lt | 最大值，用于校验 | `string \| number` | - |
| lte | 最大值（允许等于），用于校验 | `string \| number` | - |
| gt | 最小值，用于校验 | `string \| number` | - |
| gte | 最小值（允许等于），用于校验 | `string \| number` | - |
| precision | 数值精度 | `number` | - |
| useFloor | 数值精度向下舍入，需配合 `precision` 使用。 | `boolean` | - |
| maxPrecision | 最大支持多少位小数精度校验，无需配合 `precision` 使用。 | `number` | - |
| placeholder | 输入框提示 | `string` | `请输入` |
| step | 每次改变步数，可以为小数 | `number \| string` | - |
| max | 最大值 | `number` | Number.MAX_SAFE_INTEGER |
| min | 最小值 | `number` | Number.MIN_SAFE_INTEGER |
| formatter | 指定输入框展示值的格式 | `function(value: number \| string, info: { userTyping: boolean, input: string }): string` | - |
| addonAfter | 带标签的 input，设置后置标签 | `ReactNode` | - |
| addonBefore | 带标签的 input，设置前置标签 | `ReactNode` | - |
| inputProps | 数字输入框的属性 | [InputNumberProps](https://ant-design.gitee.io/components/input-number-cn/#API) | - |

### Password

密码输入框

**校验顺序**

- 必填时为空，提示：`请输入${label}`
- `validated` 为 `true` 时：
  - 验证长度，提示：`${label}为${min}～${max}位`
  - 使用 `util-helpers` [validatePassword]
    - 验证非法字符，提示：`${label}包含无法识别的字符`
    - 验证密码强度，提示：`${label}为大小写字母、数字或符号任意${level}种以上组成`

<code src="../demos/item-password-1.tsx" />

<br/>

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| validated | 开启验证。为 `false` 时则为普通密码框，不验证长度、强度、特殊字符。 | `boolean \| { len: boolean; level: boolean; special: boolean; }` | `true` |
| min | 最小长度 | `number` | `8` |
| max | 最大长度 | `number` | `16` |
| level | 密码强度。可选 `1` `2` `3` | `number` | `2` |
| ignoreCase | 忽略大小写。为 `ture` 时，大小写字母视为一种字符 | `boolean` | `false` |
| special | 支持的特殊字符 | `string` | `!@#$%^&*()-=_+[]\|{},./?<>~` |
| disabledPaste | 禁止粘贴 | `boolean` | `false` |
| disabledCopy | 禁止复制 | `boolean` | `true` |
| placeholder | 输入框提示 | `string` | `请输入` |
| allowClear | 支持清除 | `boolean \| {clearIcon?: React.ReactNode;}` | - |
| maxLength | 最大长度 | `number` | - |
| visibilityToggle | 是否显示切换按钮或者控制密码显隐 | `boolean \| VisibilityToggle` | `true` |
| inputProps | 密码框配置参数 | [PasswordProps](https://ant.design/components/input-cn/#Input.Password) | - |

### Radio

单选框

**特点**

- 支持配置全部选项、排除项

**校验顺序**

- 必填时为空，提示：`请选择${label}`

<code src="../demos/item-radio-1.tsx" />

<br/>

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| options | 配置子元素 | `Option[]` | `[]` |
| optionType | 用于设置 Radio `options` 类型 | `'default' \| 'button'` | `'default'` |
| all | 是否显示全部 | `boolean` | `false` |
| allValue | 全部的值 | `any` | `""` |
| allLabel | 全部的名称 | `ReactNode` | `全部` |
| excludeValues | 排除的值 | `((options: Option[]) => Value[]) \| Value[]` | `[]` |
| radioGroupProps | 单选框组合配置参数 | [RadioGroupProps](https://ant-design.gitee.io/components/radio-cn/#RadioGroup) | - |

### Select

下拉选择器

**特点**

- 支持配置全部选项、排除项

**校验顺序**

- 必填时为空，提示：`请选择${label}`

<code src="../demos/item-select-1.tsx" />

<br/>

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| options | 配置可选项，同 antd 的 [Select API 的 options](https://ant-design.gitee.io/components/select-cn/#API) | `{label, value}[]` | `[]` |
| all | 是否显示全部 | `boolean` | `false` |
| allValue | 全部的值 | `any` | `""` |
| allLabel | 全部的名称 | `ReactNode` | `全部` |
| excludeValues | 排除的值 | `((options: Option[]) => Value[]) \| Value[]` | `[]` |
| placeholder | 输入框提示 | `string` | `请选择` |
| allowClear | 支持清除 | `boolean` | `false` |
| fieldNames | 自定义 `options` 中 `label` `value` `options` 的字段 | `{ label?: string, value?: string, options?: string }` | - |
| filterOption | 是否根据输入项进行筛选。当其为一个函数时，会接收 `inputValue` `option` 两个参数，当 `option` 符合筛选条件时，应返回 true，反之则返回 false | `boolean \| function(inputValue, option)` | `true` |
| selectProps | 选择器配置参数 | [SelectProps](https://ant-design.gitee.io/components/select-cn/#Select-props) | - |

### Slider

滑块输入条

<code src="../demos/item-slider-1.tsx" />

<br/>

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| min | 最小值 | `number` | 0 |
| max | 最大值 | `number` | 100 |
| step | 步长，取值必须大于 0，并且可被 (max - min) 整除。当 `marks` 不为空对象时，可以设置 `step` 为 null，此时 Slider 的可选值仅有 marks 标出来的部分 | `number \| null` | - |
| marks | 刻度标记，key 的类型必须为 `number` 且取值在闭区间 [min, max] 内，每个标签可以单独设置样式 | `object` | - |
| sliderProps | 滑块输入条配置参数 | [SliderProps](https://ant-design.gitee.io/components/slider-cn/#API) | - |

### Switch

开关

<code src="../demos/item-switch-1.tsx" />

<br/>

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| checkedChildren | 选中时的内容 | `ReactNode` | - |
| unCheckedChildren | 非选中时的内容 | `ReactNode` | - |
| switchProps | 开关选择器配置参数 | [SwitchProps](https://ant-design.gitee.io/components/switch-cn/#API) | - |

### TextArea

TextArea 输入框

**特点**

- 可配置过滤空格

**校验顺序**

- 必填时为空，提示：`请输入${label}`

<code src="../demos/item-textarea-1.tsx" />

<br/>

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabledWhiteSpace | 去除头尾空格 | `boolean` | `false` |
| placeholder | 输入框提示 | `string` | `请输入` |
| allowClear | 支持清除 | `boolean` | `false` |
| maxLength | 最大长度 | `number` | - |
| showCount | 是否展示字数 | `boolean \| { formatter: (info: { value: string, count: number, maxLength?: number }) => string }` | `false` |
| inputProps | 输入框的属性 | [TextAreaProps](https://ant-design.gitee.io/components/input-cn/#Input.TextArea) | - |

### Time

日期选择框

**特点**

- 支持字符串格式的时间输入
- 输出时自动转换为字符串格式

**校验顺序**

- 必填时为空，提示：`请选择${label}`

<code src="../demos/item-time-1.tsx" />

<br/>

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| placeholder | 输入框提示 | `string` | - |
| allowClear | 支持清除 | `boolean` | `true` |
| format | 设置时间格式 | `string` | `HH:mm:ss` |
| pickerProps | 选择器的属性 | [TimePickerProps](https://ant-design.gitee.io/components/time-picker-cn/#API) | - |

### TimeRange

时间区间选择框

**特点**

- 支持字符串格式的日期输入
- 输出时自动转换为字符串格式
- 字段名自动转换拆分

**校验顺序**

- 必填时为空，提示：`请选择${label}`

<code src="../demos/item-timeRange-1.tsx" />

<br/>

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| names | 开始和结束的字段名，配置该值后，原来的 `name` 将失效。如 `['startTime', 'endTime']` | `[string, string]` | - |
| placeholder | 输入框提示 | `[string, string]` | - |
| allowClear | 支持清除 | `boolean` | `true` |
| format | 设置日期格式 | `string` | `HH:mm:ss` |
| pickerProps | 选择器的属性 | [TimeRangePickerProps](https://ant-design.gitee.io/components/time-picker-cn/#RangePicker) | - |

### Upload

上传。支持 `uploadProps.action` 默认上传 或 `onUpload` 自定义上传。

**特点**

- 支持添加文件即上传
- 自动处理上传中和失败状态
- 适用于多种场景，文件/图片/头像/封面图等等

**校验顺序**

- 必填时为空，提示：`请上传${label}`

<code src="../demos/item-upload-1.tsx" />

<br/>

```typescript
type UploadFile = {
  uid: string | number;
  name: string;
  thumbUrl?: string; // 缩略图，可通过 uploadProps.previewFile 覆写获取缩略图
  url?: string; // 下载地址
  response?: any; // onUpload 或 action 上传成功后的返回值
  error?: any; // 失败状态时，输入移入提示 { message: string }
  // ...
};
```

<br/>

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 上传组件内建类型样式。 | `'default' \| 'image' \| 'avatar' \| 'dragger'` | `'default'` |
| onUpload | 自定义上传，添加文件时触发。<br/>内部自动处理上传中和失败状态。<br/>如果返回 `object` 将添加到 `UploadFile` 对象中。 | `(file: File) => Promise<object \| undefined>` | - |
| onGetPreviewUrl | 获取预览图片，点击预览时触发。<br/>（仅在没有 file.url 的情况下生效，执行成功后将预览图放在 file.preview，不再触发） | `(file: File) => Promise<string>` | - |
| maxSize | 单个文件限制大小，单位 `Byte`。 | `number` | `1024*1024*2` |
| maxCount | 限制上传文件数量。<br/>当为 `1` 时，始终用最新上传的代替当前。 | `number` | - |
| accept | 接受上传的文件类型。<br/>如果 `type` 为 `image` 或 `avatar` ，默认为 `.jpg, .jpeg, .png` | `string` | - |
| fileTypeMessage | 文件类型错误时提示，包含 `%s` 会自动替换为 `accept`。 | `string \| false` | `只支持上传 ${accept} 文件` |
| fileSizeMessage | 文件超过最大尺寸时提示，包含 `%s` 会自动替换为 `maxFileSizeStr`。 | `string \| false` | `必须小于 %s！` |
| maxCountMessage | 上传文件超过限制数量时提示，包含 `%s` 会自动替换为 `maxCount`。 | `string \| false` | `最多上传%s个文件` |
| disabled | 是否禁用 | `boolean` | `false` |
| multiple | 是否支持多选文件，`ie10+` 支持。 | `boolean` | `false` |
| icon | 选择提示图标，不同内建类型有不一样的默认值。 | `ReactNode` | - |
| title | 选择提示文本 | `ReactNode` | `'点击上传'\|'单击或拖动文件到此区域进行上传'` |
| previewModalProps | 内置预览弹窗的属性 | [ModalProps](https://ant-design.gitee.io/components/modal-cn/#API) | - |
| uploadProps | 上传配置参数 | [UploadProps](https://ant-design.gitee.io/components/upload-cn/#API) | - |

<Alert type="info">
  注意，如果上传的图片文件较大，缩略图默认使用的是 base64URL 可能会卡顿。可以设置 uploadProps.previewFile 自定义缩略图，参考如下。
</Alert>

```typescript
<BizFormItemUpload
  // ...
  uploadProps={{
    previewFile(file) {
      return URL.createObjectURL(file);
    }
  }}
/>
```

[ismobile]: https://doly-dev.github.io/util-helpers/module-Validator.html#.isMobile
[isbankcard]: https://doly-dev.github.io/util-helpers/module-Validator.html#.isBankCard
[isemail]: https://doly-dev.github.io/util-helpers/module-Validator.html#.isEmail
[isidcard]: https://doly-dev.github.io/util-helpers/module-Validator.html#.isIdCard
[validatepassword]: https://doly-dev.github.io/util-helpers/module-Validator.html#.validatePassword
