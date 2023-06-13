import * as React from 'react';
import { Row, Col } from 'antd';
import { BizForm, BizFormItem, BizFormItemRadio, BizFormItemNumber } from 'antd-more';
import { sleep } from 'ut2';
import { RakebackeCycleOptions } from './constants';

const oneColSpan = {
  span: 24
};
const threeColSpan = {
  span: 24,
  lg: 12,
  xl: 8
};

const RakebackeInfo = () => {
  return (
    <BizForm
      name="form-rakebacke-info"
      onFinish={async (values) => {
        await sleep(2000);
        console.log(values);
      }}
      submitter={{
        submitText: '提交',
        submitButtonProps: {
          size: 'large',
          style: {
            padding: '0 40px'
          }
        },
        noReset: true,
        // 提交按钮居中
        render: (_, dom) => <div style={{ display: 'flex', justifyContent: 'center' }}>{dom}</div>
      }}
      labelWidth={112}
    >
      <Row>
        <Col {...oneColSpan}>
          <BizFormItemRadio
            label="返佣周期"
            name="rakebackeCycle"
            required
            options={RakebackeCycleOptions}
          />
        </Col>
        <Col {...oneColSpan}>
          <BizFormItem label="普通刷卡" colon={false}>
            <Row>
              <Col {...threeColSpan}>
                <BizFormItemNumber
                  label="借记卡"
                  name="costpriceCp"
                  labelWidth={98}
                  required
                  precision={2}
                  contentAfter="%"
                  gt={0}
                  lt={100}
                />
              </Col>
              <Col {...threeColSpan}>
                <BizFormItemNumber
                  label="借记卡封顶"
                  name="costpriceCpMaxFee"
                  labelWidth={98}
                  required
                  precision={2}
                  contentAfter="元"
                  gt={0}
                />
              </Col>
              <Col {...threeColSpan}>
                <BizFormItemNumber
                  label="贷记卡"
                  name="costpriceCpCredit"
                  labelWidth={98}
                  required
                  precision={2}
                  contentAfter="%"
                  gt={0}
                  lt={100}
                />
              </Col>
              <Col {...threeColSpan}>
                <BizFormItemNumber
                  label="IC卡小额"
                  name="costpriceIC"
                  labelWidth={98}
                  required
                  precision={2}
                  tooltip="IC卡小额双免优惠费率"
                  contentAfter="%"
                  gt={0}
                  lt={100}
                />
              </Col>
            </Row>
          </BizFormItem>
        </Col>
        <Col {...oneColSpan}>
          <BizFormItem label="扫码支付" colon={false}>
            <Row>
              <Col {...threeColSpan}>
                <BizFormItemNumber
                  label="支付宝"
                  name="costpriceAlipay"
                  labelWidth={98}
                  required
                  precision={2}
                  contentAfter="%"
                  gt={0}
                  lt={100}
                />
              </Col>
              <Col {...threeColSpan}>
                <BizFormItemNumber
                  label="微信"
                  name="costpriceWechat"
                  labelWidth={98}
                  required
                  precision={2}
                  contentAfter="%"
                  gt={0}
                  lt={100}
                />
              </Col>
              <Col {...threeColSpan}>
                <BizFormItemNumber
                  label="银二小额"
                  name="costpriceUionpay"
                  labelWidth={98}
                  required
                  precision={2}
                  tooltip="银联二维码小额优惠费率"
                  contentAfter="%"
                  gt={0}
                  lt={100}
                />
              </Col>
            </Row>
          </BizFormItem>
        </Col>
        <Col {...oneColSpan}>
          <BizFormItem label="结算" colon={false}>
            <Row>
              <Col {...threeColSpan}>
                <BizFormItemNumber
                  label="结算手续费"
                  name="settlementFee"
                  labelWidth={98}
                  required
                  precision={2}
                  contentAfter="元/笔"
                  gte={0}
                />
              </Col>
            </Row>
          </BizFormItem>
        </Col>
      </Row>
    </BizForm>
  );
};

export default RakebackeInfo;
