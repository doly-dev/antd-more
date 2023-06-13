import * as React from 'react';
import { BizForm, BizFormList, BizFormItem, BizFormItemInput } from 'antd-more';
import { Button } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { sleep } from 'ut2';

const Demo = () => {
  return (
    <BizForm
      onFinish={async (values) => {
        await sleep();
        console.log(values);
      }}
    >
      <BizFormList name="list">
        {(fields, { add, remove }) => {
          return (
            <>
              {fields.map((field, index) => (
                <div style={{ display: 'flex' }} key={field.key}>
                  <BizFormItemInput
                    {...field}
                    label={index === 0 ? 'Passengers' : ' '}
                    colon={index === 0}
                    style={{ flex: 1, marginRight: 8 }}
                  />
                  <MinusCircleOutlined
                    style={{ marginTop: 9 }}
                    onClick={() => remove(field.name)}
                  />
                </div>
              ))}
              <BizFormItem label=" " colon={false}>
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
