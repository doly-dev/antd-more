/**
 * title: 上传各种类型文件预览
 * desc: |
 *      上传图片、pdf、audio、video等类型的文件自定义缩略图及预览。
 */
import * as React from 'react';
import type { UploadFile } from 'antd';
import { BizForm, BizFormItemUpload, FileViewer } from 'antd-more';
import { sleep } from 'ut2';
import { uploadFile } from './services';
import { uploadFileToFssid } from './utils/fileUtils';

const Demo = () => {
  const [fileInfo, setFileInfo] = React.useState<UploadFile>();
  const [visible, setVisible] = React.useState(false);

  return (
    <div>
      <BizForm
        name="upload-file-viewer"
        onFinish={async (values) => {
          await sleep();
          console.log(values);
        }}
        labelWidth={98}
      >
        <BizFormItemUpload
          name="files"
          label="任意文件"
          type="image"
          accept="*"
          maxCount={9}
          maxSize={1024 * 1024 * 10}
          multiple
          required
          onUpload={uploadFile}
          transform={uploadFileToFssid}
          uploadProps={{
            onPreview(file) {
              setFileInfo(file);
              setVisible(true);
            },
            onRemove: FileViewer.removeFile,
            previewFile: FileViewer.previewFile
          }}
        />
      </BizForm>
      <FileViewer visible={visible} onCancel={() => setVisible(false)} file={fileInfo} />
    </div>
  );
};

export default Demo;
