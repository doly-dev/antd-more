import * as React from 'react';
import 'moment/locale/zh-cn';
import { Switch, Row, Col } from 'antd';
import {
  BizForm,
  BizFormItemInput,
  BizFormItemRadio,
  BizFormItemSelect,
  BizFormItemSlider,
  BizFormItemSwitch,
  BizFormItemAddress,
  BizFormItemDate,
  BizFormItemDateRange,
  BizFormItemNumber,
  BizFormItemPassword,
  BizFormItemColor,
  BizFormItemCaptcha,
  BizFormItemCheckbox,
  BizFormItemUpload,
  BizFormItemTextArea,
  BizFormItemTime,
  BizFormItemTimeRange
} from 'antd-more';
import { getPCA } from 'lcn';
import { CycleOptions } from './constants';
import { sleep } from 'ut2';

const pca = getPCA({ inland: true, fieldNames: { code: 'value', name: 'label' } });

const colSpan = {
  xs: 24,
  md: 12,
  lg: 8,
  xxl: 6
};

const specialColSpan = {
  xs: 24,
  lg: 12,
  xxl: 6
};

const Demo = () => {
  const [required, setRequired] = React.useState(false);

  return (
    <>
      <div style={{ marginBottom: 24 }}>
        必填
        <Switch defaultChecked={required} onChange={(val) => setRequired(val)} />
      </div>
      <BizForm
        name="biz-form-demo1"
        onFinish={async (values) => {
          await sleep();
          console.log(values);
        }}
        labelWidth={110}
      >
        <h3>业务组件</h3>
        <Row gutter={16}>
          <Col {...colSpan}>
            <BizFormItemNumber label="数字" name="number" tooltip="提示文字" required={required} />
          </Col>
          <Col {...colSpan}>
            <BizFormItemInput label="邮箱" name="email" type="email" required={required} />
          </Col>
          <Col {...colSpan}>
            <BizFormItemInput label="身份证号" name="idCard" type="idCard" required={required} />
          </Col>
          <Col {...colSpan}>
            <BizFormItemInput label="手机号码" name="mobile" type="mobile" required={required} />
          </Col>
          <Col {...colSpan}>
            <BizFormItemInput label="用户名" name="userName" type="userName" required={required} />
          </Col>
          <Col {...colSpan}>
            <BizFormItemPassword label="密码" name="password" required={required} />
          </Col>
          <Col {...colSpan}>
            <BizFormItemInput
              label="银行卡号"
              name="bankCardNo"
              type="bankCard"
              required={required}
            />
          </Col>
          <Col {...colSpan}>
            <BizFormItemColor label="颜色" name="color" required={required} />
          </Col>
          <Col {...specialColSpan}>
            <BizFormItemCaptcha
              label="验证码"
              name="code"
              onGetCaptcha={async () => {
                await sleep(2000);
              }}
              required={required}
            />
          </Col>
          <Col xs={24}>
            <BizFormItemAddress
              label="地址"
              tooltip="组合组件"
              names={['location', 'address']}
              labels={['省/市/区', '详细地址']}
              options={pca}
              // formItemProps={[
              //   {
              //     colProps: { lg: 6 }
              //   }, {
              //     colProps: { lg: 18 }
              //   }]}
              required={required}
            />
          </Col>
        </Row>
        <h3>基础组件</h3>
        <Row gutter={16}>
          <Col {...colSpan}>
            <BizFormItemDate label="日期" name="date" required={required} />
          </Col>
          <Col {...colSpan}>
            <BizFormItemDate label="周" name="week" picker="week" required={required} />
          </Col>
          <Col {...colSpan}>
            <BizFormItemDate label="月" name="month" picker="month" required={required} />
          </Col>
          <Col {...colSpan}>
            <BizFormItemDate label="季" name="quarter" picker="quarter" required={required} />
          </Col>
          <Col {...colSpan}>
            <BizFormItemDate label="年" name="year" picker="year" required={required} />
          </Col>
          <Col {...colSpan}>
            <BizFormItemDate label="日期时间" name="dateTime" showTime required={required} />
          </Col>
          <Col {...colSpan}>
            <BizFormItemDateRange label="日期区间" name="dateRange" required={required} />
          </Col>
          <Col {...specialColSpan}>
            <BizFormItemDateRange
              label="日期时间区间"
              name="dateTimeRange"
              showTime
              required={required}
            />
          </Col>
          <Col {...colSpan}>
            <BizFormItemTime label="时间" name="time" required={required} />
          </Col>
          <Col {...specialColSpan}>
            <BizFormItemTimeRange label="时间区间" name="timeRange" required={required} />
          </Col>
          <Col {...colSpan}>
            <BizFormItemInput label="Input" name="input" required={required} />
          </Col>
          <Col {...specialColSpan}>
            <BizFormItemTextArea label="TextArea" name="textarea" required={required} />
          </Col>
          <Col {...specialColSpan}>
            <BizFormItemRadio
              label="Radio"
              name="radio"
              options={CycleOptions}
              required={required}
            />
          </Col>
          <Col {...specialColSpan}>
            <BizFormItemRadio
              label="RadioButton"
              name="radioButton"
              optionType="button"
              options={CycleOptions}
              required={required}
            />
          </Col>
          <Col {...specialColSpan}>
            <BizFormItemSelect
              label="Select"
              name="select"
              options={CycleOptions}
              required={required}
            />
          </Col>
          <Col {...specialColSpan}>
            <BizFormItemCheckbox
              label="Checkbox"
              name="checkbox"
              options={CycleOptions}
              all
              required={required}
            />
          </Col>
          <Col {...colSpan}>
            <BizFormItemSwitch label="Switch" name="switch" required={required} />
          </Col>
          <Col {...colSpan}>
            <BizFormItemSlider label="Slider" name="slider" required={required} />
          </Col>
          <Col {...colSpan}>
            <BizFormItemUpload label="Upload" name="upload" required={required} />
          </Col>
        </Row>
      </BizForm>
    </>
  );
};

export default Demo;
