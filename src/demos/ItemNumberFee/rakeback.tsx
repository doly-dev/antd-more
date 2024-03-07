import { CreditCardOutlined, MobileOutlined } from '@ant-design/icons';
import { Col, ConfigProvider, Row, Space } from 'antd';
import * as React from 'react';
import { BizForm, BizFormItem, BizFormItemNumber } from 'antd-more';
import ItemNumberFee from '../components/ItemNumberFee';
import styles from './rakeback.module.less';

function Demo() {
  return (
    <ConfigProvider theme={{ token: { screenXL: 1320, screenXLMin: 1320 } }}>
      <div className={styles.rakeback}>
        <BizForm
          labelWidth={112}
          requiredMark="optional"
          onFinish={(values) => {
            console.log(values);
          }}
          submitter={{
            render(props, dom) {
              return (
                <div style={{ margin: '48px 0', textAlign: 'center' }}>
                  <Space size="large">{dom}</Space>
                </div>
              );
            }
          }}
        >
          <table className={styles.payTable}>
            <colgroup>
              <col width="120" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>
                  <Space>
                    <CreditCardOutlined />
                    刷卡支付
                  </Space>
                </th>
                <td>
                  <Row style={{ marginTop: 24 }}>
                    <Col>
                      <BizFormItemNumber
                        label="贷记卡"
                        name="standardCreditRate"
                        addonAfter="%"
                        precision={4}
                        useFloor
                        step={0.1}
                        min={0}
                        gte={0.21}
                        lte={0.42}
                        required
                      />
                    </Col>
                    <Col>
                      <BizFormItemNumber
                        label="借记卡封顶"
                        name="standardMaxValue"
                        addonAfter="元"
                        precision={2}
                        useFloor
                        min={0}
                        gte={6}
                        lte={18}
                        required
                      />
                    </Col>
                    <Col>
                      <BizFormItemNumber
                        label="借记卡"
                        name="standardDebitRate"
                        addonAfter="%"
                        precision={4}
                        useFloor
                        step={0.1}
                        min={0}
                        gte={0.21}
                        lte={0.42}
                        required
                      />
                    </Col>
                  </Row>
                </td>
              </tr>
              <tr>
                <th>
                  <Space>
                    <MobileOutlined />
                    移动支付
                  </Space>
                </th>
                <td>
                  <Row style={{ marginTop: 24 }}>
                    <Col xl={12} xs={24}>
                      <ItemNumberFee
                        label="微信扫码"
                        name="wxScanPaymentRate"
                        beforeValue={0.21}
                        gte={0.21}
                        lte={0.42}
                        required
                      />
                    </Col>
                    <Col xl={12} xs={24}>
                      <ItemNumberFee
                        label={
                          <div>
                            银联二维码小额
                            <br />
                            (金额≤1000)
                          </div>
                        }
                        messageVariables={{ label: '银联二维码小额' }}
                        name="unionpayQrcodeSmallDiscountRate"
                        className={styles.itemWrapLine}
                        beforeValue={0.21}
                        gte={0.21}
                        lte={0.42}
                        required
                      />
                    </Col>
                    <Col xl={12} xs={24}>
                      <ItemNumberFee
                        label="支付宝扫码"
                        name="zfbScanPaymentRate"
                        beforeValue={0.21}
                        gte={0.21}
                        lte={0.42}
                        required
                        style={{ marginBottom: 0 }}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xl={12} xs={24}>
                      <BizFormItem
                        label="说明"
                        required
                        className={styles.feeTip}
                        style={{ marginBottom: 16 }}
                      >
                        <span className={styles.feeDesc}>本级费率</span>
                        <span className={styles.symbol}>+</span>
                        <span className={styles.feeDesc}>差额费率</span>
                        <span className={styles.symbol}>=</span>
                        <span className={styles.feeDesc}>下级费率</span>
                      </BizFormItem>
                    </Col>
                  </Row>
                </td>
              </tr>
            </tbody>
          </table>
        </BizForm>
      </div>
    </ConfigProvider>
  );
}

export default Demo;
