import React from 'react';
import { BizConfigProvider, BizForm, BizFormItemInput } from 'antd-more';
import zhCN from 'antd-more/es/locale/zh_CN';
import enUS from 'antd-more/es/locale/en_US';

function Demo() {
  return (
    <div>
      <BizConfigProvider locale={enUS}>
        <BizForm
          onFinish={(values) => {
            console.log(values);
          }}
        >
          <BizFormItemInput label="first name" name="first" required />
          <BizFormItemInput label="last name" name="last" required />
          <BizConfigProvider locale={zhCN}>
            <BizFormItemInput label="中文名" name="name" required />
          </BizConfigProvider>
        </BizForm>
      </BizConfigProvider>
    </div>
  );
}

export default Demo;
