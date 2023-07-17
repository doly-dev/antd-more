import * as React from 'react';
import { BizForm, BizFormList, BizFormItem, BizFormItemInput } from 'antd-more';
import { Button } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { sleep } from 'ut2';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};

const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 4 },
  },
};

const Demo = () => {
  return (
    <BizForm
      onFinish={async (values) => {
        await sleep();
        console.log(values);
      }}
      labelWidth='auto'
      {...formItemLayoutWithOutLabel}
    >
      <BizFormList name="list">
        {(fields, { add, remove }) => {
          return (
            <>
              {fields.map((field, index) => (
                <BizFormItemInput
                  key={field.key}
                  {...field}
                  {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                  label={index === 0 ? 'Passengers' : ''}
                  colon={index === 0}
                  contentAfter={(
                    <MinusCircleOutlined
                      onClick={() => remove(field.name)}
                    />
                  )}
                />
              ))}
              <BizFormItem>
                <Button type="dashed" block icon={<PlusOutlined />} onClick={() => add()}>
                  添加
                </Button>
              </BizFormItem>
            </>
          );
        }}
      </BizFormList>
    </BizForm>
  );
};

export default Demo;
