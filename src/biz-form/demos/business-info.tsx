import * as React from 'react';
import { Radio } from 'antd';
import { BizForm, BizFormItem, BizFormItemInput, BizFormItemUpload } from 'antd-more';
import { isUrl } from 'util-helpers';
import { uploadFile } from './services';
import { uploadFileToFssid } from './utils/fileUtils';

// 收单方式
// 0-Other 1-PayPal 2-stripe
enum CollectType {
  Other = '0',
  PayPal = '1',
  Stripe = '2'
}
const CollectTypeOptions = [
  {
    label: 'PayPal',
    value: CollectType.PayPal
  },
  {
    label: 'stripe',
    value: CollectType.Stripe
  },
  {
    label: '其他',
    value: CollectType.Other
  }
];

function Demo() {
  const [form] = BizForm.useForm();

  return (
    <BizForm
      name="business-info"
      form={form}
      onFinish={(values) => {
        console.log(values);
      }}
    >
      <BizFormItem
        label="收单方式"
        name="collectType"
        required
        rules={[
          {
            validator(rule, value) {
              if (!value) {
                return Promise.reject(`请选择收单方式`);
              }

              return Promise.resolve();
            }
          }
        ]}
      >
        <Radio.Group>
          {CollectTypeOptions.map((item) => {
            return (
              <Radio
                key={item.value}
                value={item.value}
                style={item.value === CollectType.Other ? { marginTop: 3, height: 24 } : {}}
              >
                <div style={{ display: 'flex' }}>
                  <span>{item.label}</span>
                  {item.value === CollectType.Other ? (
                    <BizFormItem noStyle shouldUpdate>
                      {() => {
                        const collectType = form.getFieldValue(['collectType']);

                        if (collectType === CollectType.Other) {
                          return (
                            <BizFormItemInput
                              label="收单方式名称"
                              name="collectName"
                              required
                              hideLabel
                              inputProps={{
                                placeholder: '请输入收单方式名称'
                              }}
                              style={{ marginTop: -5, marginLeft: 5, marginBottom: 0 }}
                            />
                          );
                        }
                        return null;
                      }}
                    </BizFormItem>
                  ) : null}
                </div>
              </Radio>
            );
          })}
        </Radio.Group>
      </BizFormItem>
      <BizFormItemInput
        label="销售地址"
        name="webSiteUrl"
        required
        maxLength={350}
        extendRules={[
          {
            validator(rule, value) {
              if (value && !isUrl(value)) {
                return Promise.reject('请输入正确的网址');
              }
              return Promise.resolve();
            }
          }
        ]}
      />
      <BizFormItemUpload
        label="证明文件"
        name="busDesDocument"
        type="image"
        required
        maxCount={6}
        maxSize={20 * 1024 * 1024}
        onUpload={uploadFile}
        transform={uploadFileToFssid}
      />
    </BizForm>
  );
}

export default Demo;
