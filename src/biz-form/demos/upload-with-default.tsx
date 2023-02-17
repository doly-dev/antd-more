import * as React from 'react';
import { BizForm, BizFormItemUpload } from 'antd-more';
import { waitTime } from 'util-helpers';
import { downloadFile, uploadFile } from './services';
import type { UploadFile } from 'antd';
import { Spin } from 'antd';
import { uploadFileToFssid } from './utils/fileUtils';

// 默认初始值 fssid
const internalFssids = [
  'aaa',
  'bbb',
  'ccc'
];

// 将值转换为 UploadFile 对象
const transformUploadFiles = async (fssids: string[]) => {
  const tasks: Promise<{ data: string }>[] = [];
  const ret: UploadFile[] = [];
  for (let i = 0; i < fssids.length; i += 1) {
    tasks.push(downloadFile(fssids[i]));
  }

  await Promise.allSettled(tasks).then(results => {
    results.forEach((item, index) => {
      const fulfilled = item.status === 'fulfilled';

      ret.push({
        uid: `${-index}`,
        status: fulfilled ? 'done' : 'error',
        name: fulfilled ? item.value.data.substring(item.value.data.lastIndexOf('/') + 1) : '',
        url: fulfilled ? item.value.data : undefined,
        // 用于在提交时获取真实的value
        response: {
          fssid: fssids[index]
        },
        error: fulfilled ? undefined : {
          message: '图片加载失败'
        }
      });
    });
  })

  return ret;
};

const Demo = () => {
  const [loading, setLoading] = React.useState(true);
  const [form] = BizForm.useForm();

  // 初次转换值
  const init = React.useCallback(async () => {
    const images = await transformUploadFiles(internalFssids);
    form.setFieldsValue({ images });
    setLoading(false);
  }, [form]);

  React.useEffect(() => {
    init();
  }, [init]);

  return (
    <Spin spinning={loading}>
      <BizForm
        name="upload-with-default"
        form={form}
        onFinish={async (values) => {
          await waitTime();
          console.log(values);
        }}
        labelWidth={98}
      >
        <BizFormItemUpload
          name="images"
          label="图片"
          type="image"
          onUpload={uploadFile}
          maxCount={9}
          required
          transform={uploadFileToFssid}
        />
      </BizForm>
    </Spin>
  );
};

export default Demo;
