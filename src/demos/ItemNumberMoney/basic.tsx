import React from 'react';
import { Button } from 'antd';
import { BizForm } from 'antd-more';
import ItemNumberMoney from '../components/ItemNumberMoney';

function Demo() {
  const [form] = BizForm.useForm();

  return (
    <BizForm
      form={form}
      onFinish={(values) => {
        console.log(values);
      }}
    >
      <ItemNumberMoney label="付款金额" name="money" />
      <ItemNumberMoney label="付款金额2" name="money2" inputProps={{ addonAfter: 'USD' }} />
      <ItemNumberMoney
        label="提现金额"
        name="money3"
        inputPrefixReverse
        inputProps={{
          addonAfter: 'USD',
          prefix: (
            <Button
              type="link"
              onMouseUp={(e) => {
                e.stopPropagation(); // 如果不阻止冒泡，输入框会触发焦点
                form.setFieldsValue({
                  money3: 199999
                });
              }}
              style={{ cursor: 'pointer' }}
            >
              全部提现
            </Button>
          )
        }}
      />
    </BizForm>
  );
}

export default Demo;
