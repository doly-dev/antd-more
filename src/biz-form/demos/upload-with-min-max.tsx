/**
 * title: 上传文件含大中小图
 * desc: |
 *      将默认值转换成 `UploadFile[]` 数据格式再传入，加载失败可以通过 `error.message` 设置提示。
 */
import * as React from 'react';
import { BizForm, BizFormItemUpload } from 'antd-more';
import { sleep } from 'ut2';
import type { UploadFile } from 'antd';
import { Spin } from 'antd';

// 通过fssid获取图片地址
async function getStaticServerPath(fssid: string) {
  await sleep(2000);
  if (Math.random() > 0.3) {
    return {
      bigImg: `https://zos.alipayobjects.com/rmsportal/${fssid}.png`,
      thumbImg: `https://doly-dev.github.io/logo.png`
    };
  }
  throw new Error('error');
}

// 上传图片
// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function uploadImage(file: File) {
  await sleep(2000);
  if (Math.random() > 0.5) {
    return {
      thumbImgId: `${Math.random()}`,
      bigImgId: `${Math.random()}`
    };
  }
  throw new Error('error');
}

// 默认初始值 fssid
const defaultFssid = [
  {
    thumbImgId: 'jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ',
    bigImgId: 'jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ'
  },
  {
    thumbImgId: 'jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ',
    bigImgId: 'jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ'
  },
  {
    thumbImgId: 'jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ',
    bigImgId: 'jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ'
  }
];

// 将值转换为 UploadFile 对象
const beforeTransformUploadValues = async (fssids: typeof defaultFssid) => {
  const tasks: Promise<{ thumbImg: string; bigImg: string }>[] = [];
  const ret: UploadFile[] = [];

  for (let i = 0; i < fssids.length; i += 1) {
    tasks.push(getStaticServerPath(fssids[i].thumbImgId));
  }

  await Promise.allSettled(tasks).then((results) => {
    results.forEach((item, index) => {
      const fulfilled = item.status === 'fulfilled';

      ret.push({
        uid: `${-index}`,
        status: fulfilled ? 'done' : 'error',
        name: fulfilled ? item.value.bigImg.substring(item.value.bigImg.lastIndexOf('/') + 1) : '',
        url: fulfilled ? item.value.bigImg : undefined,
        thumbUrl: fulfilled ? item.value.thumbImg : undefined,
        // 用于在提交时获取真实的value
        response: {
          ...fssids[index]
        },
        error: fulfilled
          ? undefined
          : {
              message: '图片加载失败'
            }
      });
    });
  });

  return ret;
};

const Demo = () => {
  const [loading, setLoading] = React.useState(true);
  const [form] = BizForm.useForm();

  // 初次转换值
  const init = React.useCallback(async () => {
    const images = await beforeTransformUploadValues(defaultFssid);
    form.setFieldsValue({ images });
    setLoading(false);
  }, [form]);

  React.useEffect(() => {
    init();
  }, [init]);

  // 提交和校验时自动转换上传文件的值
  const transformUploadValue = React.useCallback((files: UploadFile[]) => {
    // 实际项目中服务端可能没有返回其他值
    return files?.map((item) => item?.response).filter((item) => !!item);
  }, []);

  return (
    <Spin spinning={loading}>
      <BizForm
        name="upload-with-min-max"
        form={form}
        onFinish={async (values) => {
          await sleep();
          console.log(values);
        }}
        labelWidth={98}
      >
        <BizFormItemUpload
          name="images"
          label="图片"
          type="image"
          onUpload={uploadImage}
          // onGetPreviewUrl={async () => "https://doly-dev.github.io/logo.png"}
          maxCount={9}
          required
          transform={transformUploadValue}
        />
      </BizForm>
    </Spin>
  );
};

export default Demo;
