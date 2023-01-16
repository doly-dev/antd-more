import * as React from 'react';
import { BizForm } from 'antd-more';
// import type { UploadFile } from "antd";
// import { waitTime } from 'util-helpers';
import ItemUploadSpecial from './components/ItemUploadSpecial';
// import { uploadFile } from './services';

const Demo = () => {
  // // 提交和校验时自动转换上传文件的值
  // const transformUploadValue = React.useCallback((files: UploadFile[]) => {
  //   // 实际项目中服务端可能没有返回其他值
  //   return files?.map((item) => item?.response?.fssid).filter((item) => !!item);
  // }, []);

  return (
    <BizForm
      name="upload-define"
      onFinish={async (values) => {
        console.log(values);
      }}
    >
      <ItemUploadSpecial
        name="upload"
        label="材料文件"
        uploadProps={{
          action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
          name: 'file',
          headers: {
            authorization: 'authorization-text'
          }
        }}
        transform={(files) => {
          // 项目中可能没有url，而是一个文件id
          return files.map((item) => item?.response?.url).filter((item) => !!item);
        }}
      />
    </BizForm>
  );
};

export default Demo;
