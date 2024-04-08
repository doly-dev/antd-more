import * as React from 'react';
import { BizForm } from 'antd-more';
import { uploadFile } from '../../biz-form/demos/services';
import ItemUploadCertificate from '../components/ItemUploadCertificate';

const initialValues = {
  upload3: [
    {
      uid: '-xxx',
      percent: 99,
      name: 'image.png',
      status: 'uploading',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }
  ],
  upload4: [
    {
      uid: '-3',
      name: 'image.png',
      status: 'success',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      response: {
        fssid: '132435-1lakjfa'
      }
    }
  ],
  upload5: [
    {
      uid: '-4',
      name: 'image.png',
      status: 'error',
      // url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      error: {
        message: '下载失败'
      }
    }
  ]
};

function Demo() {
  return (
    <BizForm
      labelWidth={98}
      initialValues={initialValues}
      onFinish={(values) => {
        console.log(values);
      }}
    >
      <h3>默认</h3>
      <ItemUploadCertificate label="单张" name="upload1" onUpload={uploadFile} />
      <ItemUploadCertificate
        label="单张块级"
        name="upload1-block"
        onUpload={uploadFile}
        block
        maxCount={5}
      />
      <ItemUploadCertificate
        label="多张"
        name="upload2"
        onUpload={uploadFile}
        maxCount={5}
        uploadProps={{
          multiple: true
        }}
      />
      <h3>上传中</h3>
      <ItemUploadCertificate label="单张" name="upload3" onUpload={uploadFile} />
      <h3>成功</h3>
      <ItemUploadCertificate label="单张" name="upload4" onUpload={uploadFile} />
      <h3>失败</h3>
      <ItemUploadCertificate label="单张" name="upload5" onUpload={uploadFile} />
    </BizForm>
  );
}

export default Demo;
