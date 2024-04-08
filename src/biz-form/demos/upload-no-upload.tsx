import * as React from 'react';
import { BizForm, BizFormItemUpload } from 'antd-more';
import { sleep } from 'ut2';

const Demo = () => {
  return (
    <BizForm
      name="upload-no-upload"
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
      />
      <BizFormItemUpload
        name="xls"
        label="xls文档"
        accept=".xls,.xlsx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        required
        fileTypeMessage="不支持文件类型"
      />
      <BizFormItemUpload
        name="images"
        label="图片"
        type="image"
        tooltip="配置multiple后，支持多选"
        maxCount={9}
        required
        multiple
      />
      <BizFormItemUpload
        name="headpic01"
        label="头像1"
        type="avatar"
        tooltip="点击图片区域上传替换，常用于头像或封面，不支持预览"
        required
      />
      <BizFormItemUpload
        name="headpic02"
        label="头像2"
        type="image"
        maxCount={1}
        tooltip="使用image的方式，修改时需要先删除才能再上传"
        required
      />
      <BizFormItemUpload name="dragger" label="拖拽上传" type="dragger" required multiple />
    </BizForm>
  );
};

export default Demo;
