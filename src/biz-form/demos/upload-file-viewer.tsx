/**
 * title: 上传各种类型文件预览
 * desc: |
 *      上传图片、pdf、audio、video等类型的文件自定义缩略图及预览。关于文件预览可以参考 [react-file-viewer](https://www.npmjs.com/package/react-file-viewer) 。
 */
import * as React from 'react';
import { BizForm, BizFormItemUpload } from 'antd-more';
import type { UploadFile } from 'antd';
import { waitTime } from 'util-helpers';
import FileViewer from './components/FileViewer';
import { uploadFile } from './services';
import { getFileThumbUrl, getFileType, getFileUrl, removeFile } from './utils/utils';

const Demo = () => {
  const [previewInfo, setPreviewInfo] = React.useState({
    url: '',
    fileType: '',
    fileName: ''
  });
  const [visible, setVisible] = React.useState(false);

  // 提交和校验时自动转换上传文件的值
  const transformUploadValue = React.useCallback((files: UploadFile[]) => {
    // 实际项目中服务端可能没有返回其他值
    return files?.map((item) => item?.response?.fssid).filter((item) => !!item);
  }, []);

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
          transform={transformUploadValue}
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
            previewFile: getFileThumbUrl
          }}
        />
      </BizForm>
      <FileViewer visible={visible} onCancel={() => setVisible(false)} {...previewInfo} />
    </div>
  );
};

export default Demo;
