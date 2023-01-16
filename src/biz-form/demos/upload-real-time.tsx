/**
 * title: 实时上传文件图片
 * desc: |
 *      设置 `onUpload` 后，添加上传文件自动调用并处理上传中状态和失败状态。上传成功的返回值将自动添加到 `UploadFile` 对象的 `response` 字段上。表单提交时再获取该值。
 *
 *      如果设置 `transform` 可以帮助内置的规则进行校验。
 */
import * as React from 'react';
import { BizForm, BizFormItemUpload } from 'antd-more';
import type { UploadFile } from 'antd';
import { waitTime } from 'util-helpers';
import { uploadFile } from './services';

const Demo = () => {
  // 提交和校验时自动转换上传文件的值
  const transformUploadValue = React.useCallback((files: UploadFile[]) => {
    // 实际项目中服务端可能没有返回其他值
    return files?.map((item) => item?.response?.fssid).filter((item) => !!item);
  }, []);

  return (
    <BizForm
      name="upload-real-time"
      onFinish={async (values) => {
        await waitTime();
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
        transform={transformUploadValue}
      />
      <BizFormItemUpload
        name="xls1"
        label="xls文档1"
        accept=".xls,.xlsx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        required
        fileTypeMessage="不支持文件类型"
        // 使用自定义上传
        onUpload={uploadFile}
        transform={transformUploadValue}
      />
      <BizFormItemUpload
        name="xls2"
        label="xls文档2"
        accept=".xls,.xlsx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        required
        fileTypeMessage="不支持文件类型"
        tooltip='使用action上传'
        // 使用 action 上传
        uploadProps={{
          name: "file",
          action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
          headers: {
            authorization: "authorization-text",
          }
        }}
        transform={transformUploadValue}
      />
      <BizFormItemUpload
        name="images"
        label="图片"
        type="image"
        maxCount={9}
        required
        onUpload={uploadFile}
        transform={transformUploadValue}
      />
      {/* <BizFormItemUpload
        name="headpic01"
        label="头像1"
        type="avatar"
        tooltip="点击图片区域上传替换，常用于头像或封面，不支持预览"
        required
        onUpload={uploadFile}
        transform={transformUploadValue}
      />
      <BizFormItemUpload
        name="headpic02"
        label="头像2"
        type="image"
        maxCount={1}
        tooltip="使用image的方式，修改时需要先删除才能再上传"
        required
        onUpload={uploadFile}
        transform={transformUploadValue}
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
              transform={transformUploadValue}
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
        transform={transformUploadValue}
      /> */}
    </BizForm>
  );
};

export default Demo;
