import React, { useState } from 'react';
import { Divider, Radio, type RadioChangeEvent } from 'antd';
import type { BizFormItemAutoCompleteProps, BizLocale } from 'antd-more';
import {
  BizConfigProvider,
  BizForm,
  BizFormItemAddress,
  BizFormItemAutoComplete,
  BizFormItemCaptcha,
  BizFormItemCascader,
  BizFormItemCheckbox,
  BizFormItemColor,
  BizFormItemDate,
  BizFormItemDateRange,
  BizFormItemInput,
  BizFormItemNumber,
  BizFormItemPassword,
  BizFormItemRadio,
  BizFormItemSelect,
  BizFormItemTextArea,
  BizFormItemTime,
  BizFormItemTimeRange,
  BizFormItemUpload
} from 'antd-more';
import { randomString } from 'util-helpers';
import { getPCA } from 'lcn';
import zhCN from 'antd-more/es/locale/zh_CN';
import enUS from 'antd-more/es/locale/en_US';
import { CycleOptions } from '../../biz-form/demos/constants';
import BizTableDemo from '../../biz-table/demos/Demo2';
import DrawerFormDemo from '../../biz-form/demos/drawer-form-1';
import ModalFormDemo from '../../biz-form/demos/modal-form-1';
import StepsFormDemo from '../../biz-form/demos/steps-form-1';

const pca = getPCA({ inland: true, fieldNames: { code: 'value', name: 'label' } });

function FormDemo() {
  const [options, setOptions] = React.useState<BizFormItemAutoCompleteProps['options']>([]);
  const handleSearch = (searchText: string) => {
    const opts = new Array(5).fill('').map(() => ({
      label: `${searchText}-${randomString(3)}`,
      value: `${searchText}-${randomString(3)}`
    }));
    setOptions(opts);
  };

  return (
    <div>
      <BizForm
        labelWidth={120}
        onFinish={(values) => {
          console.log(values);
        }}
      >
        <BizFormItemAddress
          label="地址"
          // labels={['省市区', '详细地址']}
          names={['location', 'address']}
          options={pca}
          required
        />
        <BizFormItemAutoComplete
          label="自动完成"
          name="auto-complete"
          onSearch={handleSearch}
          options={options}
          required
        />
        <BizFormItemCaptcha
          label="验证码"
          name="captcha"
          second={120}
          onGetCaptcha={async () => true}
          required
        />
        <BizFormItemCascader label="级联" name="cascader" options={pca} required />
        <BizFormItemCheckbox label="多选框1" name="checkbox-1" options={CycleOptions} required />
        <BizFormItemCheckbox
          label="多选框2"
          name="checkbox-2"
          options={CycleOptions}
          all
          required
        />
        <BizFormItemColor label="颜色" name="color" required />
        <BizFormItemDate
          label="日期1"
          name="date-1"
          required
          tooltip="日期的 placeholder 跟随 antd locale"
        />
        <BizFormItemDate label="日期2" name="date-2" showTime required />
        <BizFormItemDateRange label="日期范围1" name="date-range-1" required />
        <BizFormItemDateRange label="日期范围2" name="date-rage-2" showTime required />
        <BizFormItemTime
          label="时间1"
          name="time-1"
          required
          tooltip="时间的 placeholder 跟随 antd locale"
        />
        <BizFormItemTime label="时间2" name="time-2" format="HH:mm" required />
        <BizFormItemTimeRange label="时间范围1" name="time-range-1" required />
        <BizFormItemTimeRange label="时间范围2" name="time-range-2" format="HH:mm" required />
        <BizFormItemInput label="输入框" name="input-1" required />
        <BizFormItemInput label="银行卡" name="input-2" type="bankCard" required />
        <BizFormItemInput label="手机号码" name="input-3" type="mobile" required />
        <BizFormItemInput label="身份证号" name="input-4" type="idCard" required />
        <BizFormItemInput label="邮箱" name="input-5" type="email" required />
        <BizFormItemInput label="用户名" name="input-6" type="userName" required />
        <BizFormItemPassword label="密码1" name="password-1" required />
        <BizFormItemPassword
          label="密码2"
          name="password-2"
          min={4}
          max={8}
          level={3}
          ignoreCase
          special="><?-="
          required
          tooltip="4-8位字符，包含大小写字母、数字和符号(><?-=)三者组成"
        />
        <BizFormItemTextArea label="TextArea" name="textarea" required />
        <BizFormItemNumber label="数字输入框" name="number-1" required />
        <BizFormItemNumber
          label="金额"
          name="number-2"
          precision={2}
          addonAfter="元"
          gte={0}
          lte={10000}
          tooltip="大于等于0，小于等于10000"
          required
          inputProps={{
            formatter: (value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
            parser: (value) => value!.replace(/\$\s?|(,*)/g, '')
          }}
        />
        <BizFormItemNumber
          label="费率"
          name="number-3"
          precision={2}
          addonAfter="%"
          gt={0}
          lt={6}
          tooltip="大于0，小于6"
          required
        />
        <BizFormItemNumber
          label="费率向下舍入"
          name="number-4"
          precision={2}
          addonAfter="%"
          gt={0}
          lt={6}
          tooltip="数字精度向下舍入"
          useFloor
          required
        />
        <BizFormItemRadio label="单选框1" name="radio-1" options={CycleOptions} required />
        <BizFormItemRadio label="单选框2" name="radio-2" options={CycleOptions} all required />
        <BizFormItemSelect label="选择器1" name="select-1" options={CycleOptions} required />
        <BizFormItemSelect label="选择器2" name="select-2" options={CycleOptions} all required />
        <BizFormItemUpload label="上传1" name="upload-1" required />
        <BizFormItemUpload label="上传2" name="upload-2" type="avatar" required />
        <BizFormItemUpload label="上传3" name="upload-3" type="image" required />
        <BizFormItemUpload label="上传4" name="upload-4" type="dragger" required />
      </BizForm>
    </div>
  );
}

function Demo() {
  const [locale, setLocal] = useState<BizLocale>(zhCN);

  const changeLocale = (e: RadioChangeEvent) => {
    const localeValue = e.target.value;
    setLocal(localeValue);
  };

  return (
    <>
      <div>
        <span style={{ marginRight: 16 }}>Change locale of components:</span>
        <Radio.Group value={locale} onChange={changeLocale}>
          <Radio.Button key="en" value={enUS}>
            English
          </Radio.Button>
          <Radio.Button key="cn" value={zhCN}>
            中文
          </Radio.Button>
        </Radio.Group>
      </div>
      <BizConfigProvider locale={locale}>
        <h3>表单</h3>
        <FormDemo />
        <Divider />
        <h3>浮层表单</h3>
        <DrawerFormDemo />
        <ModalFormDemo />
        <Divider />
        <h3>分步表单</h3>
        <StepsFormDemo />
        <Divider />
        <h3>表格</h3>
        <BizTableDemo />
      </BizConfigProvider>
    </>
  );
}

export default Demo;
