import * as React from 'react';
import { BizForm } from 'antd-more';
import ItemUploadSpecial from './components/ItemUploadSpecial';

const Demo = () => {
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
