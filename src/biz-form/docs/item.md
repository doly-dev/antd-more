---
title: Item - 表单项
order: 2
group:
  path: /
nav:
  title: 组件
  path: /components
---

# Item - 表单项

提供了一系列的业务表单项，包含转换、校验等功能。

## 代码演示

### 所有表单项

<code src='../demos/Demo1.tsx' />

## API

```typescript
import { BizForm } from 'antd-more';
```

### Item

```typescript
const { Item } = BizForm;
```

除了以下参数，其余和 antd Form.Item 一样。

参数 | 说明 | 类型 | 默认值 |
------------- | ------------- | ------------- | ------------- |
labelWidth  | label 宽度。默认继承 `BizForm` 的 `labelWidth`。 | `number \| 'auto'` | - |
hideLabel  | 隐藏 label 。默认继承 `BizForm` 的 `hideLabel`。 | `boolean` | - |
transform  | 转换该字段值，表单提交时执行。 | `(value)=>any` | - |
extendRules  | 扩展校验规则。如果需要覆盖，请使用 `rules` | [Rule[]](https://ant-design.gitee.io/components/form-cn/#Rule) | - |
renderField  | 自定义内部表单渲染。要注意透传 `props` ，可参考 `ItemUpload` 的示例。 | `(dom: JSX.Element) => JSX.Element` | - |
colProps  | 设置该表单项 Col 属性。部分场景下生效，如 QueryForm 下、ItemCaptcha、ItemAddress 等。  | [ColProps](https://ant-design.gitee.io/components/grid-cn/#Col) | - |
contentBefore  | 表单前面的内容 | `ReactNode` | - |
contentAfter  | 表单后面的内容 | `ReactNode` | - |

### 其它Item

以下 ItemX 组件都是基于 BizForm.Item 扩展，仅列出扩展的参数。如果为必填项，仅需设置 `required` 即可。

### ItemAddress

地址选择和输入框，该表单项由2个表单项组合而成，所以不要配置 `name`，但必须配置 `names` `labels` 。

默认级联框的 `colProps` 为 `{ md: 12, lg: 8 }` ， 输入框的 `colProps` 为 `{ md: 12, lg: 16 }` 。

**特点**

- 过滤空格
- 分开校验

**校验顺序**

- 必填时为空，提示：`请选择${labels[0]}` `请输入${labels[1]}`

<code src="../demos/item-address-1.tsx" />

<br/>

```typescript
type CascaderValue = string[] | number[];

interface Option {
  value: string | number;
  label?: ReactNode;
  disabled?: boolean;
  children?: Option[];
}
```

<br/>

参数 | 说明 | 类型 | 默认值 |
------------- | ------------- | ------------- | ------------- |
names  | 级联选项和输入框的字段名 | `[NamePath, NamePath]` | - |
labels  | 级联选项和输入框的标签名，仅用于提示 | `[string, string]` | - |
options  | 级联选项数据 | `Option[]` | - |
formItemProps  | 级联选项和输入框的 Item 属性。如果要修改宽度，可以分别传入 `colProps` 进行设置。 | `[BizFormItemProps, BizFormItemProps]` | `[]` |
inputProps  | 输入框的属性 | [InputProps](https://ant-design.gitee.io/components/input-cn/#API) | - |
cascaderProps  | 级联选项的属性 | [CascaderProps](https://ant-design.gitee.io/components/cascader-cn/#API) | - |


### ItemCaptcha

验证码输入框和按钮。

**特点**

- 按钮状态自动管理（倒计时、禁用、loading）

**校验顺序**

- 必填时为空，提示：`请输入${label}`

<code src="../demos/item-captcha-1.tsx" />

<br/>

参数 | 说明 | 类型 | 默认值 |
------------- | ------------- | ------------- | ------------- |
type  | 显示类型 | `'default' \| 'inline'` | `'default'` |
onGetCaptcha  | 点击按钮触发。用于验证手机号码或邮箱，请求获取验证码。如果返回 `false` 或 `Promise.reject()` 表示验证失败。 | `()=>boolean \| ()=>Promise<any>` | `()=>true` |
initText  | 按钮初始显示文本 | `string` | `获取验证码` |
runText  | 按钮倒计时显示文本，包含 `%s` 会自动替换为秒数 | `string` | `%s秒后重新获取` |
resetText  | 按钮倒计时结束显示文本 | `string` | `重新获取验证码` |
second  | 按钮倒计时时长，单位秒 | `number` | `60` |
inputProps  | 输入框的属性 | [InputProps](https://ant-design.gitee.io/components/input-cn/#API) | - |
buttonProps  | 按钮的属性 | [ButtonProps](https://ant.design/components/button-cn/#API) | - |


### ItemCheckbox

多选框

**特点**

- 支持配置全部选项、排除项

**校验顺序**

- 必填时为空，提示：`请选择${label}`

<code src="../demos/item-checkbox-1.tsx" />

<br/>

参数 | 说明 | 类型 | 默认值 |
------------- | ------------- | ------------- | ------------- |
options  | 包含 `value` `name` 的数组 | `EnumData` | `[]` |
excludeValues  | 排除的值 | `any[]` | `[]` |
all  | 是否显示全部 | `boolean` | `false` |
allName  | 全部的名称 | `string` | `全部` |
checkboxProps  | 多选框的属性 | [CheckboxProps](https://ant-design.gitee.io/components/checkbox-cn/#Checkbox) | - |
checkboxGroupProps  | 多选框 Group 的属性 | [CheckboxGroupProps](https://ant-design.gitee.io/components/checkbox-cn/#Checkbox-Group) | - |


### ItemColor

颜色选择

**校验顺序**

- 必填时为空，提示：`请选择${label}`

<code src="../demos/item-color-1.tsx" />

<br/>

参数 | 说明 | 类型 | 默认值 |
------------- | ------------- | ------------- | ------------- |
showText  | 显示颜色值文本 | `boolean` | `false` |
picker  | 颜色选择样式 | `block` `chrome` `compact` `photoshop` `sketch` | `sketch` |
trigger  | 触发行为 | `hover` `click` | `click` |
colorMode  | 颜色模式 | `hex` `rgb` | `hex` |
placement  | 颜色选择浮层位置 | `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom` | `bottomLeft` |
colorProps  | 其他颜色选择器配置，不同 picker 有不同的配置项 | `any` | - |

#### colorProps

`picker=block` 时：

参数 | 说明 | 类型 | 默认值 |
------------- | ------------- | ------------- | ------------- |
width  | 颜色选择浮层宽度 | `string`        | `170px` |
colors | 预置快捷选择颜色 | `string[]` | -       |

`picker=compact` 时：

参数 | 说明 | 类型 | 默认值 |
------------- | ------------- | ------------- | ------------- |
colors | 预置快捷选择颜色 | `string[]` | -      |

`picker=photoshop` 时：

参数 | 说明 | 类型 | 默认值 |
------------- | ------------- | ------------- | ------------- |
header | 颜色选择浮层标题 | `string` | `Color Picker` |

`picker=sketch` 时：

```javascript
type PresetColor = { color: string; title: string; } | string;
```

参数 | 说明 | 类型 | 默认值 |
------------- | ------------- | ------------- | ------------- |
width        | 颜色选择浮层宽度 | `string` | `200px` |
presetColors | 预置快捷选择颜色 | `PresetColor[]` | - |

### ItemDate

日期选择框

**特点**

- 快捷配置向前、后禁选范围
- 支持字符串格式的日期输入
- 输出时自动转换为字符串格式

**校验顺序**

- 必填时为空，提示：`请选择${label}`

<code src="../demos/item-date-1.tsx" />

<br/>

参数 | 说明 | 类型 | 默认值 |
------------- | ------------- | ------------- | ------------- |
disabledDateBefore  | 配置不可选基于当天增加/减少之前的日期。 | `number` | - |
disabledDateAfter  | 配置不可选基于当天增加/减少之后的日期。 | `number` | - |
showTime  | 显示时间选择 | `boolean` | `false` |
format  | 设置日期格式，默认值会根据 `picker` 调整。 | `string` | `YYYY-MM-DD` |
picker  | 设置选择器类型 | `date` `week` `month` `quarter` `year` | `date` |
pickerProps  | 选择器的属性 | [DatePickerProps](https://ant-design.gitee.io/components/date-picker-cn/#API) | - |


### ItemDateRange

日期区间选择框

**特点**

- 快捷配置向前、后禁选范围
- 支持字符串格式的日期输入
- 输出时自动转换为字符串格式
- 最大区间范围
- 字段名自动转换拆分

**校验顺序**

- 必填时为空，提示：`请选择${label}`
- 日期范围判断超过区间，提示：`时间跨度不能超过${maxRange}天/周/月/季/年`

<code src="../demos/item-dateRange-1.tsx" />

<br/>

参数 | 说明 | 类型 | 默认值 |
------------- | ------------- | ------------- | ------------- |
maxRange  | 最大可选范围值，用于校验，根据当前 picker 为单位。 | `number` | - |
names  | 开始和结束的字段名，配置该值后，原来的 `name` 将失效。如 `['startDate', 'endDate']` | `[NamePath, NamePath]` | - |
disabledDateBefore  | 配置不可选基于当天增加/减少之前的日期。 | `number` | - |
disabledDateAfter  | 配置不可选基于当天增加/减少之后的日期。 | `number` | - |
showTime  | 显示时间选择 | `boolean` | `false` |
format  | 设置日期格式，默认值会根据 `picker` 调整。 | `string` | `YYYY-MM-DD` |
picker  | 设置选择器类型 | `date` `week` `month` `quarter` `year` | `date` |
pickerProps  | 选择器的属性 | [DateRangePickerProps](https://ant-design.gitee.io/components/date-picker-cn/#RangePicker) | - |



### ItemInput

Input 输入框

**特点**

- 可配置过滤空格
- 当有 `type` 值时：
  - 失焦校验
  - 手机号码、身份证号、银行卡号自动格式化
  - 邮箱、用户名自动过滤空格

**校验顺序**

- 必填时为空，提示：`请输入${label}`
- 开启脱敏校验后，判断是否与初始值相等，相等即 `验证通过`
- 根据 `type` 使用 `util-helpers` [isMobile]、[isIdCard]、[isBankCard]、[isEmail] 验证，提示：`请输入正确的${label}`
- 如果是用户名（如有长度限制，可通过 `excludeRules` 扩展规则）
  - 验证非手机号码，提示：`${label}不能为手机号码`
  - 验证不包含@符号，提示：`${label}不能包含@符号`

<code src="../demos/item-input-1.tsx" />

<br/>

参数 | 说明 | 类型 | 默认值 |
------------- | ------------- | ------------- | ------------- |
type  | 输入框类型。 | `'mobile' \| 'bankCard' \| 'idCard' \| 'email' \| 'userName'` | - |
disabledWhiteSpace  | 禁止输入空白符。 `Password` 组件不支持该项。 | `boolean` | `false` |
security  | 开启脱敏校验。为 `ture` 时，必须传入 `initialValue` 。 | `boolean` | `false` |
symbol  | 脱敏符号 | `string` | `*` |
inputProps  | 输入框的属性 | [InputProps](https://ant-design.gitee.io/components/input-cn/#API) | - |


### ItemNumber

数字输入框

**特点**

- 支持数字输入框前后插入元素
- 返回的值为类型数字

**校验顺序**

- 必填时不为数字，提示：`请输入${label}`
- 大于等于 `lt` 时，提示：`不能大于等于${lt}`
- 小于等于 `gt` 时，提示：`不能小于等于${gt}`
- 大于 `lte` 时，提示：`不能大于${lte}`
- 小于 `gte` 时，提示：`不能小于${gt}`

<code src="../demos/item-number-1.tsx" />

<br/>

参数 | 说明 | 类型 | 默认值 |
------------- | ------------- | ------------- | ------------- |
precision  | 数值精度 | `number` | - |
lt  | 最大值 | `number` | - |
lte  | 最大值（允许等于） | `number` | - |
gt  | 最小值 | `number` | - |
gte  | 最小值（允许等于） | `number` | - |
inputProps  | 数字输入框的属性 | [InputNumberProps](https://ant-design.gitee.io/components/input-number-cn/#API) | - |


### ItemPassword

密码输入框

**校验顺序**

- 必填时为空，提示：`请输入${label}`
- `validated` 为 `true` 时：
  - 验证长度，提示：`${label}为${min}～${max}位`
  - 使用 `util-helpers` [validatePassword] 验证非法字符，提示：`${label}包含无法识别的字符`
  - 验证密码强度，提示：`${label}为大小写字母、数字或符号任意${numMap[level]}者组成`

<code src="../demos/item-password-1.tsx" />

<br/>

参数 | 说明 | 类型 | 默认值 |
------------- | ------------- | ------------- | ------------- |
validated  | 开启验证。为 `false` 时则为普通密码框，不验证长度、强度、特殊字符。 | `boolean \| { len: boolean; level: boolean; special: boolean; }` | `true` |
min  | 最小长度 | `number` | `8` |
max  | 最大长度 | `number` | `16` |
level  | 密码强度。可选 `1` `2` `3` | `number` | `2` |
ignoreCase | 忽略大小写。为 `ture` 时，大小写字母视为一种字符 | `boolean` | `false` |
special  | 支持的特殊字符 | `string` | `!@#$%^&*()-=_+[]\|{},./?<>~` |
disabledPaste  | 禁止粘贴 | `boolean` | `false` |
disabledCopy  | 禁止复制 | `boolean` | `true` |
inputProps  | 密码框配置参数 | [PasswordProps](https://ant.design/components/input-cn/#Input.Password) | - |


### ItemRadio

单选框

**特点**

- 支持配置全部选项、排除项

**校验顺序**

- 必填时为空，提示：`请选择${label}`

<code src="../demos/item-radio-1.tsx" />

<br/>

```typescript
interface Option {
    name: string;
    value: string | number | boolean;
    style?: React.CSSProperties;
    disabled?: boolean;
    onChange?: (e: CheckboxChangeEvent) => void;
    [x: string]: any;
}
```

<br/>

参数 | 说明 | 类型 | 默认值 |
------------- | ------------- | ------------- | ------------- |
options  | 包含 `value` `name` 的数组 | `Option[]` | `[]` |
optionType  | 用于设置 Radio `options` 类型 | `'default' \| 'button'` | `'default'` |
all  | 是否显示全部  | `boolean` | `false` |
allValue | 全部的值 | `string` | `""` |
allName | 全部的名称 | `string` | `全部` |
excludeValues | 排除的值 | `any[]` | `[]` |
radioProps  | 单选框配置参数 | [RadioProps](https://ant-design.gitee.io/components/radio-cn/#Radio/Radio.Button) | - |
radioGroupProps  | 单选框组合配置参数 | [RadioGroupProps](https://ant-design.gitee.io/components/radio-cn/#RadioGroup) | - |


### ItemSelect

下拉选择器

**特点**

- 支持配置全部选项、排除项

**校验顺序**

- 必填时为空，提示：`请选择${label}`

<code src="../demos/item-select-1.tsx" />

<br/>

```typescript
interface Option {
    value: string | number;
    name: string;
    key?: string | number;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
    [x: string]: any;
}
```

<br/>

参数 | 说明 | 类型 | 默认值 |
------------- | ------------- | ------------- | ------------- |
options  | 包含 `value` `name` 的数组 | `Option[]` | `[]` |
all  | 是否显示全部  | `boolean` | `false` |
allValue | 全部的值 | `string` | `""` |
allName | 全部的名称 | `string` | `全部` |
excludeValues | 排除的值 | `any[]` | `[]` |
selectProps  | 选择器配置参数 | [SelectProps](https://ant-design.gitee.io/components/select-cn/#Select-props) | - |


### ItemSlider

滑块输入条

<code src="../demos/item-slider-1.tsx" />

<br/>

参数 | 说明 | 类型 | 默认值 |
------------- | ------------- | ------------- | ------------- |
min  | 最小值 | `number` | 0 |
max  | 最大值 | `number` | 100 |
step  | 步长，取值必须大于 0，并且可被 (max - min) 整除。当 `marks` 不为空对象时，可以设置 `step` 为 null，此时 Slider 的可选值仅有 marks 标出来的部分 | `number \| null` | - |
marks  | 刻度标记，key 的类型必须为 `number` 且取值在闭区间 [min, max] 内，每个标签可以单独设置样式 | `object` | - |
sliderProps  | 滑块输入条配置参数 | [SliderProps](https://ant-design.gitee.io/components/slider-cn/#API) | - |


### ItemSwitch

开关

<code src="../demos/item-switch-1.tsx" />

<br/>

参数 | 说明 | 类型 | 默认值 |
------------- | ------------- | ------------- | ------------- |
checkedChildren  | 选中时的内容 | `ReactNode` | - |
unCheckedChildren  | 非选中时的内容 | `ReactNode` | - |
switchProps  | 开关选择器配置参数 | [SwitchProps](https://ant-design.gitee.io/components/switch-cn/#API) | - |



### ItemTextArea

TextArea 输入框

**特点**

- 可配置过滤空格

**校验顺序**

- 必填时为空，提示：`请输入${label}`

<code src="../demos/item-textarea-1.tsx" />

<br/>

参数 | 说明 | 类型 | 默认值 |
------------- | ------------- | ------------- | ------------- |
disabledWhiteSpace  | 禁止输入空白符 | `boolean` | `false` |
inputProps  | 输入框的属性 | [TextAreaProps](https://ant-design.gitee.io/components/input-cn/#Input.TextArea) | - |


### ItemTime

日期选择框

**特点**

- 支持字符串格式的时间输入
- 输出时自动转换为字符串格式

**校验顺序**

- 必填时为空，提示：`请选择${label}`

<code src="../demos/item-time-1.tsx" />

<br/>

参数 | 说明 | 类型 | 默认值 |
------------- | ------------- | ------------- | ------------- |
format  | 设置时间格式 | `string` | `HH:mm:ss` |
pickerProps  | 选择器的属性 | [TimePickerProps](https://ant-design.gitee.io/components/time-picker-cn/#API) | - |


### ItemTimeRange

时间区间选择框

**特点**

- 支持字符串格式的日期输入
- 输出时自动转换为字符串格式
- 字段名自动转换拆分

**校验顺序**

- 必填时为空，提示：`请选择${label}`

<code src="../demos/item-timeRange-1.tsx" />

<br/>

参数 | 说明 | 类型 | 默认值 |
------------- | ------------- | ------------- | ------------- |
names  | 开始和结束的字段名，配置该值后，原来的 `name` 将失效。如 `['startTime', 'endTime']` | `[NamePath, NamePath]` | - |
format  | 设置日期格式 | `string` | `HH:mm:ss` |
pickerProps  | 选择器的属性 | [TimeRangePickerProps](https://ant-design.gitee.io/components/time-picker-cn/#RangePicker) | - |


### ItemUpload

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
  thumbUrl?: string; // 小图（缩略图）
  url?: string; // 大图（预览）
  response?: any; // 加载失败时，鼠标移入提示
  // ...
}
```

<br/>

参数 | 说明 | 类型 | 默认值 |
------------- | ------------- | ------------- | ------------- |
type  | 上传组件内建类型样式。 | `'default' \| 'image' \| 'avatar' \| 'dragger'` | `'default'` |
onUpload  | 自定义上传，添加文件时触发。<br/>内部自动处理上传中和失败状态。<br/>如果返回 `object` 将添加到 `UploadFile` 对象中。 | `(file: File)=>Promise<object> \| undefined>` | - |
onGetPreviewUrl  | 获取预览图片，点击预览时触发。<br/>（仅在没有url的情况下生效，执行成功后将预览图放在file.preview，不再触发） | `(file: File)=>Promise<string>` | - |
maxSize  | 单个文件限制大小，单位 `Byte`。 | `number` | `1024*1024*2` |
maxCount  | 限制上传文件数量。<br/>当为 `1` 时，始终用最新上传的代替当前。 | `number` | - |
accept  | 接受上传的文件类型。<br/>如果 `type` 为 `image` 或 `avatar` ，默认为 `.jpg, .jpeg, .png`  | `string` | - |
fileTypeMessage  | 文件类型错误时提示 | `string` | `只支持上传 ${accept} 文件` |
fileSizeMessage  | 文件超过最大尺寸时提示，包含 `%s` 会自动替换为 `maxFileSizeStr`。 | `string` | `必须小于 ${maxFileSizeStr}！` |
maxCountMessage  | 上传文件超过限制数量时提示 | `string` | `最多上传${maxCount}个文件` |
disabled  | 是否禁用 | `boolean` | `false` |
multiple  | 是否支持多选文件，`ie10+` 支持。开启后按住 ctrl 可选择多个文件 | `boolean` | `false` |
icon  | 图标 | `ReactNode` | - |
title  | 文本 | `ReactNode` | - |
uploadProps  | 上传配置参数 | [UploadProps](https://ant-design.gitee.io/components/upload-cn/#API) | - |



[isMobile]: https://doly-dev.github.io/util-helpers/module-Validator.html#.isMobile
[isBankCard]: https://doly-dev.github.io/util-helpers/module-Validator.html#.isBankCard
[isEmail]: https://doly-dev.github.io/util-helpers/module-Validator.html#.isEmail
[isIdCard]: https://doly-dev.github.io/util-helpers/module-Validator.html#.isIdCard
[validatePassword]: https://doly-dev.github.io/util-helpers/module-Validator.html#.validatePassword
