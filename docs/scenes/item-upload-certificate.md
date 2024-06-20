---
group:
  title: 表单组件
  order: 2
toc: content
---

# 上传证件 - ItemUploadCertificate

## 代码演示

### 基础用法

<code src='../../src/demos/ItemUploadCertificate/basic.tsx'></code>

### 内置类型

默认设置了上传选择的图标和标题，浮层提示。

<code src='../../src/demos/ItemUploadCertificate/built-in.tsx'></code>

### 更多用法

<code src='../../src/demos/ItemUploadCertificate/more.tsx'></code>

### 验证文件上传中

表单校验通过，然后上传多个文件，在有文件上传中状态时，点击提交按钮，提示“有文件正在上传中，需等文件上传完成再操作！”。

这样可以保障文件都上传完成才能进行提交操作。

<code src='../../src/demos/ItemUploadCertificate/check-uploading.tsx'></code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| idType | 内置证件类型（身份证正反面、营业执照、商业注册证 BR、护照、授权书）。<br/>默认配置了 `icon` `title` `popoverProps` 。 | `'idCardFront' \| 'idCardBack' \| 'businessLicense' \| 'businessRegistry' \| 'passport' \| 'authorization'` | - |
| icon | 上传选择框图标。 | `ReactNode` | `<img src='common-cert.jpg' alt='' />` |
| title | 上传选择框标题。 | `ReactNode` | `'点击上传'` |
| maxCount | 限制最多上传数量。 | `number` | `1` |
| block | 块级展示。为 true 时，将文件预览列表和上传选择框宽度设置为 100% 。 | `boolean` | `false` |
| onUpload | 触发上传文件。 | `(file: File) => Promise<any>` | - |
| popoverProps | 上传选择框浮层属性配置。注意，有配置浮层且没有上传内容时才展示提示浮层。 | [`PopoverProps`](https://ant-design.gitee.io/components/popover-cn/#API) | - |
| uploadProps | 上传属性配置。 | [`UploadProps`](https://ant-design.gitee.io/components/upload-cn/#API) | - |
