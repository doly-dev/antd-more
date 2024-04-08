import * as React from 'react';
import { BizForm, BizFormItemUpload } from 'antd-more';
import { sleep } from 'ut2';
// import ItemUploadSpecial from './components/ItemUploadSpecial';
// import ItemUploadDefine from './components/ItemUploadDefine';
import { uploadFile } from './services';
import { uploadFileToFssid } from './utils/fileUtils';

const Demo = () => {
  return (
    <BizForm
      name="item-upload-1"
      onFinish={async (values) => {
        await sleep();
        console.log(values);
      }}
      labelWidth={112}
    >
      <BizFormItemUpload name="upload" label="Upload" />
      <BizFormItemUpload
        name="doc"
        label="doc文档"
        maxCount={1}
        accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        fileTypeMessage="不支持文件类型"
      />
      <BizFormItemUpload
        name="xls"
        label="xls文档"
        accept=".xls,.xlsx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        fileTypeMessage="不支持文件类型"
        required
      />
      <BizFormItemUpload
        name="images1"
        label="图片1"
        type="image"
        tooltip="onUpload上传"
        maxCount={9}
        multiple
        required
        // 使用自定义上传
        onUpload={uploadFile}
        transform={uploadFileToFssid}
        maxSize={1 * 1024 * 1024}
      />
      <BizFormItemUpload
        name="images2"
        label="图片2"
        type="image"
        tooltip="使用action上传，同时选择多个文件会卡顿，建议使用 onUpload"
        maxCount={9}
        multiple
        // 使用 action 上传
        uploadProps={{
          name: 'file',
          action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
          headers: {
            authorization: 'authorization-text'
          }
        }}
        transform={uploadFileToFssid}
      />
      <BizFormItemUpload
        name="headpic1"
        label="头像1"
        type="avatar"
        tooltip="点击图片区域上传替换，常用于头像或封面，不支持预览"
      />
      <BizFormItemUpload
        name="headpic2"
        label="头像2"
        type="image"
        maxCount={1}
        tooltip="使用image的方式，修改时需要先删除才能再上传"
      />
      <BizFormItemUpload name="dragger" label="拖拽上传" type="dragger" multiple />
      {/* <ItemUploadSpecial
        name="special-upload-1"
        label="特殊自定义1"
        tooltip="自定义上传后的显示，将删除改为重新上传"
        uploadProps={{
          action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
          name: 'file',
          headers: {
            authorization: 'authorization-text'
          }
        }}
        transform={uploadFileToFssid}
      />
      <ItemUploadDefine
        name="special-upload-2"
        label="特殊自定义2"
        title="上传身份证件"
        tooltip="自定义右侧内容，这里使用写死的图片地址，实际应该使用上传文件地址"
        uploadProps={{
          action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
          name: 'file',
          headers: {
            authorization: 'authorization-text'
          }
        }}
        transform={uploadFileToFssid}
      /> */}
    </BizForm>
  );
};

export default Demo;
