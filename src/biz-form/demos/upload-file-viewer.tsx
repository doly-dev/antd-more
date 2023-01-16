/**
 * title: 上传各种类型文件预览
 * desc: |
 *      上传图片、pdf、audio、video等类型的文件自定义缩略图及预览。关于文件预览可以参考 [react-file-viewer](https://www.npmjs.com/package/react-file-viewer) 。
 */
import * as React from 'react';
import { BizForm, BizFormItemUpload } from 'antd-more';
import type { UploadFile } from 'antd';
import { waitTime } from 'util-helpers';
import PreviewFile from './components/PreviewFile';
import { getThumbUrl } from './utils/utils';
import { uploadFile } from './services';

const Demo = () => {
  const [file, setFile] = React.useState<File>();
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
            onPreview: async (file) => {
              // console.log(file);
              setFile((file?.originFileObj || file) as File);
              setVisible(true);
            },
            previewFile: getThumbUrl
          }}
        />
      </BizForm>
      <PreviewFile visible={visible} onCancel={() => setVisible(false)} file={file} />
    </div>
  );
};

export default Demo;
