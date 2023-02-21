/**
 * title: 上传各种类型文件预览
 * desc: |
 *      上传图片、pdf、audio、video等类型的文件自定义缩略图及预览。关于文件预览可以参考 [react-file-viewer](https://www.npmjs.com/package/react-file-viewer) 。
 */
import * as React from 'react';
import { BizForm, BizFormItemUpload } from 'antd-more';
import { waitTime } from 'util-helpers';
import FileViewer from './components/FileViewer';
import { uploadFile } from './services';
import { previewFile, getFileType, getFileUrl, removeFile } from './utils/utils';
import { uploadFileToFssid } from './utils/fileUtils';

const Demo = () => {
  const [previewInfo, setPreviewInfo] = React.useState({
    url: '',
    fileType: '',
    fileName: ''
  });
  const [visible, setVisible] = React.useState(false);

  return (
    <div>
      <BizForm
        name="upload-file-viewer"
        onFinish={async (values) => {
          await waitTime();
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
              // console.log(file);
              const originFile = (file?.originFileObj || file) as File;
              setPreviewInfo({
                url: getFileUrl(file),
                fileType: getFileType(originFile),
                fileName: originFile.name
              });
              setVisible(true);
            },
            onRemove: removeFile,
            previewFile
          }}
        />
      </BizForm>
      <FileViewer visible={visible} onCancel={() => setVisible(false)} {...previewInfo} />
    </div>
  );
};

export default Demo;
