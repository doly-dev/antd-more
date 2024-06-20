import * as React from 'react';
import { BizForm } from 'antd-more';
import { message } from 'antd';
import ItemUploadCertificate from '../components/ItemUploadCertificate';
import { uploadFile } from '../../biz-form/demos/services';
import { uploadFileToFssid } from '../../biz-form/demos/utils/fileUtils';

function Demo() {
  const uploadingCountRef = React.useRef(0); // 图片上传中标记次数，仅在值为0的时候才允许下一步

  const wrapperFileUpload = React.useCallback((...args: Parameters<typeof uploadFile>) => {
    uploadingCountRef.current++;
    return uploadFile(...args).finally(() => {
      uploadingCountRef.current--;
    });
  }, []);

  const checkLoadingCountIsZero = React.useCallback(() => {
    if (uploadingCountRef.current !== 0) {
      message.info('有文件正在上传中，需等文件上传完成再操作！');
      return false;
    }
    return true;
  }, []);

  return (
    <BizForm
      onFinish={(values) => {
        console.log(values);
        return checkLoadingCountIsZero();
      }}
    >
      <ItemUploadCertificate
        name="materials"
        label="证件材料"
        maxCount={9}
        required
        onUpload={wrapperFileUpload}
        rules={[
          {
            validator(rule, value) {
              const realValue = uploadFileToFssid(value);
              if (realValue.length <= 0) {
                return Promise.reject('请上传${label}');
              }
              return Promise.resolve();
            }
          }
        ]}
        uploadProps={{
          multiple: true
        }}
      />
    </BizForm>
  );
}

export default Demo;
