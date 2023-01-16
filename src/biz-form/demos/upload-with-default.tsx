/**
 * title: 实时上传文件含默认值
 * desc: |
 *      将默认值转换成 `UploadFile[]` 数据格式再传入，加载失败可以通过 `error.message` 设置提示。
 */
import * as React from 'react';
import { BizForm, BizFormItemUpload } from 'antd-more';
import { waitTime } from 'util-helpers';
import { downloadFile, uploadFile } from './services';
import type { UploadFile } from 'antd';
import { Spin } from 'antd';

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

  // 提交和校验时自动转换上传文件的值
  const transformUploadValue = React.useCallback((files: UploadFile[]) => {
    // 实际项目中服务端可能没有返回其他值
    return files?.map((item) => item?.response?.fssid).filter((item) => !!item);
  }, []);

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
          transform={transformUploadValue}
        />
      </BizForm>
    </Spin>
  );
};

export default Demo;
