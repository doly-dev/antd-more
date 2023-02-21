---
title: FileViewer - 文件预览
order: 1
group:
  path: /
nav:
  title: 组件
  path: /components
---

# FileViewer - 文件预览

目前已支持 `image` `audoi` `video` `pdf` 等文件类型预览，其他文件类型会提供点击下载提示。

## 代码演示

### 基础用法

<code src='./demos/basic.tsx'></code>

### 不同文件格式

<code src='./demos/multiple.tsx'></code>

### 上传各种类型文件预览

<code src='../biz-form/demos/upload-file-viewer.tsx'></code>

### PictureCard 预览

适用于详情页展示。

<code src='./demos/upload.tsx'></code>

## API

### FileViewer

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| file | 需要预览的文件。支持 `url` 或 `UploadFile` 。 | `string \| UploadFile` | - |
| visible | 显示文件预览 | `boolean` | - |
| onCancel | 触发关闭文件预览时执行 | `() => void` | - |
| renderView | 自定义文件预览渲染 | `(dom: React.ReactElement, props: FileViewerProps) => React.ReactNode` | - |
| className | class 类 | `string` | - |
| style | 样式 | `CSSProperties` | - |
| modalProps | 同 [antd Modal](https://ant.design/components/modal-cn#api) 配置。 | `ModalProps` | - |

### FileViewer.PictureCard

> 不支持 `file` ，请使用 `fileList`。

除了以下配置，和 `FileViewer` 几乎相同。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| fileList | 需要预览的文件列表。 | `UploadFile[]` | - |
| uploadProps | 同 [antd Upload](https://ant.design/components/upload-cn#api) 配置。 | `UploadProps` | - |

### 工具方法

#### FileViewer.getFileUrl(file: UploadFile)

获取文件 `url` 。

#### FileViewer.getFileType(file: UploadFile)

获取文件类型。

#### FileViewer.getFileThumbUrl(file: UploadFile)

获取缩略图，适用于 `Upload` 和 `FileViewer.PictureCard` 组件。内置了 `audio` `excel` `file` `pdf` `video` `word` 缩略图标。

#### FileViewer.previewFile(file: RcFile)

获取预览缩略图，适用于 `Upload` 组件。

#### FileViewer.removeFile

删除预览缩略图，适用于 `Upload` 组件。
