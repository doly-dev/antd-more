import * as React from 'react';
import { BizForm, BizFormItemUpload } from 'antd-more';
import { sleep } from 'ut2';
import { uploadFile } from './services';
import { uploadFileToFssid } from './utils/fileUtils';

const Demo = () => {
  return (
    <BizForm
      name="upload-real-time"
      onFinish={async (values) => {
        await sleep();
        console.log(values);
      }}
      labelWidth={98}
    >
      <BizFormItemUpload
        name="doc"
        label="doc文档"
        maxCount={1}
        accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        fileTypeMessage="不支持文件类型"
        onUpload={uploadFile}
        transform={uploadFileToFssid}
      />
      <BizFormItemUpload
        name="xls1"
        label="xls文档1"
        accept=".xls,.xlsx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        required
        fileTypeMessage="不支持文件类型"
        // 使用自定义上传
        onUpload={uploadFile}
        transform={uploadFileToFssid}
      />
      <BizFormItemUpload
        name="xls2"
        label="xls文档2"
        accept=".xls,.xlsx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        required
        fileTypeMessage="不支持文件类型"
        tooltip="使用action上传"
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
        name="images"
        label="图片"
        type="image"
        maxCount={9}
        required
        onUpload={uploadFile}
        transform={uploadFileToFssid}
      />
      {/* <BizFormItemUpload
        name="headpic01"
        label="头像1"
        type="avatar"
        tooltip="点击图片区域上传替换，常用于头像或封面，不支持预览"
        required
        onUpload={uploadFile}
        transform={uploadFileToFssid}
      />
      <BizFormItemUpload
        name="headpic02"
        label="头像2"
        type="image"
        maxCount={1}
        tooltip="使用image的方式，修改时需要先删除才能再上传"
        required
        onUpload={uploadFile}
        transform={uploadFileToFssid}
      /> */}
      {/* <BizFormList name='test' initialValue={[{ headpic03: [] }]}>
        {
          fields => fields.map(field => (
            <BizFormItemUpload
              {...field}
              key={field.key}
              name={[field.name, 'headpic03']}
              label="头像3"
              type="image"
              maxCount={1}
              tooltip="使用image的方式，修改时需要先删除才能再上传"
              required
              onUpload={uploadFile}
              transform={uploadFileToFssid}
            />
          ))
        }
      </BizFormList> */}
      {/* <BizFormItemUpload
        name="dragger"
        label="拖拽上传"
        type="dragger"
        required
        multiple
        onUpload={uploadFile}
        transform={uploadFileToFssid}
      /> */}
    </BizForm>
  );
};

export default Demo;
