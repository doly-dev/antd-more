import * as React from "react";
import "moment/locale/zh-cn";
import { Switch, Row, Col } from "antd";
import { BizForm } from "antd-more";
import { getPCA } from "lcn";
import waitTime from "./utils/waitTime";

const pcaInlandData = getPCA({ inland: true, formatForm: true });

const {
  ItemInput,
  ItemRadio,
  ItemSelect,
  ItemSlider,
  ItemSwitch,
  ItemAddress,
  ItemDate,
  ItemDateRange,
  ItemNumber,
  ItemPassword,
  ItemColor,
  ItemCaptcha,
  ItemCheckbox,
  ItemUpload,
  ItemTextArea,
  ItemTime,
  ItemTimeRange
} = BizForm;

const colSpan = {
  xs: 24,
  md: 12,
  lg: 8,
  xxl: 6
}

const specialColSpan = {
  xs: 24,
  lg: 12,
  xxl: 6
}

enum Cycle {
  Day,
  Month,
  Quarter
}

// 周期
const cycleOptions = [
  {
    name: "按日",
    value: Cycle.Day
  },
  {
    name: "按月",
    value: Cycle.Month
  },
  {
    name: "按季度",
    value: Cycle.Quarter
  },
];

const Demo: React.FC = () => {
  const [required, setRequired] = React.useState(false);

  return (
    <>
      <div style={{ marginBottom: 24 }}>
        必填
        <Switch defaultChecked={required} onChange={val => setRequired(val)} />
      </div>
      <BizForm
        name="biz-form-demo1"
        onFinish={async (values) => {
          await waitTime();
          console.log(values);
        }}
        labelWidth={110}
      >
        <h3>业务组件</h3>
        <Row gutter={16}>
          <Col {...colSpan}>
            <ItemNumber label="数字" name="number" tooltip="提示文字" required={required} />
          </Col>
          <Col {...colSpan}>
            <ItemInput label="邮箱" name="email" type="email" required={required} />
          </Col>
          <Col {...colSpan}>
            <ItemInput label="身份证号" name="idCard" type="idCard" required={required} />
          </Col>
          <Col {...colSpan}>
            <ItemInput label="手机号码" name="mobile" type="mobile" required={required} />
          </Col>
          <Col {...colSpan}>
            <ItemInput label="用户名" name="userName" type="userName" required={required} />
          </Col>
          <Col {...colSpan}>
            <ItemPassword label="密码" name="password" required={required} />
          </Col>
          <Col {...colSpan}>
            <ItemInput label="银行卡号" name="bankCardNo" type="bankCard" required={required} />
          </Col>
          <Col {...colSpan}>
            <ItemColor label="颜色" name="color" required={required} />
          </Col>
          <Col {...specialColSpan}>
            <ItemCaptcha
              label="验证码"
              name="code"
              onGetCaptcha={async () => {
                await waitTime(2000);
              }}
              required={required}
            />
          </Col>
          <Col xs={24}>
            <ItemAddress
              label="地址"
              tooltip="组合组件"
              names={["location", "address"]}
              labels={["省/市/区", "详细地址"]}
              options={pcaInlandData}
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
            <ItemDate label="日期" name="date" required={required} />
          </Col>
          <Col {...colSpan}>
            <ItemDate label="周" name="week" picker="week" required={required} />
          </Col>
          <Col {...colSpan}>
            <ItemDate label="月" name="month" picker="month" required={required} />
          </Col>
          <Col {...colSpan}>
            <ItemDate label="季" name="quarter" picker="quarter" required={required} />
          </Col>
          <Col {...colSpan}>
            <ItemDate label="年" name="year" picker="year" required={required} />
          </Col>
          <Col {...colSpan}>
            <ItemDate label="日期时间" name="dateTime" showTime required={required} />
          </Col>
          <Col {...colSpan}>
            <ItemDateRange label="日期区间" name="dateRange" required={required} />
          </Col>
          <Col {...specialColSpan}>
            <ItemDateRange label="日期时间区间" name="dateTimeRange" showTime required={required} />
          </Col>
          <Col {...colSpan}>
            <ItemTime label="时间" name="time" required={required} />
          </Col>
          <Col {...specialColSpan}>
            <ItemTimeRange label="时间区间" name="timeRange" required={required} />
          </Col>
          <Col {...colSpan}>
            <ItemInput label="Input" name="input" required={required} />
          </Col>
          <Col {...specialColSpan}>
            <ItemTextArea label="TextArea" name="textarea" required={required} />
          </Col>
          <Col {...specialColSpan}>
            <ItemRadio label="Radio" name="radio" options={cycleOptions} required={required} />
          </Col>
          <Col {...specialColSpan}>
            <ItemRadio label="RadioButton" name="radioButton" optionType="button" options={cycleOptions} required={required} />
          </Col>
          <Col {...specialColSpan}>
            <ItemSelect label="Select" name="select" options={cycleOptions} required={required} />
          </Col>
          <Col {...specialColSpan}>
            <ItemCheckbox label="Checkbox" name="checkbox" options={cycleOptions} all required={required} />
          </Col>
          <Col {...colSpan}>
            <ItemSwitch label="Switch" name="switch" required={required} />
          </Col>
          <Col {...colSpan}>
            <ItemSlider label="Slider" name="slider" required={required} />
          </Col>
          <Col {...colSpan}>
            <ItemUpload label="Upload" name="upload" required={required} />
          </Col>
        </Row>
      </BizForm>
    </>
  );
}

export default Demo;