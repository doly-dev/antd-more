import React from 'react';
import { EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { BizForm } from 'antd-more';
import { useRef } from 'react';
import ItemNumberMoney from '../components/ItemNumberMoney';

function Demo() {
  const [form] = BizForm.useForm();
  const inputRef1 = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);

  return (
    <BizForm
      form={form}
      onFinish={values => {
        console.log(values);
      }}
    >
      <ItemNumberMoney
        label='汇兑金额1'
        name='money1'
        inputProps={{
          // @ts-ignore
          ref: inputRef1,
          addonAfter: <Button type='link' style={{ height: 30 }} onClick={() => { inputRef1.current?.focus() }} icon={<EditOutlined />} />
        }}
      />
      <ItemNumberMoney
        label='禁用'
        name='money2'
        inputProps={{
          // @ts-ignore
          ref: inputRef2,
          disabled: true,
          addonAfter: <Button type='link' style={{ height: 30 }} onClick={() => { inputRef2.current?.focus() }} icon={<EditOutlined />} disabled />
        }}
      />
    </BizForm>
  );
}

export default Demo;
