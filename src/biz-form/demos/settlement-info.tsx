import * as React from 'react';
import { Row, Col } from 'antd';
import { BizForm, BizFormItemInput, BizFormItemAddress, BizFormItemRadio } from 'antd-more';
import { getPC } from 'lcn';
import { sleep } from 'ut2';

const pc = getPC({ inland: true, fieldNames: { code: 'value', name: 'label' } });

const oneColSpan = {
  span: 24
};
const twoColSpan = {
  span: 24,
  lg: 12
};

// 结算方式
const SettlementCycleOptions = [
  {
    value: 'T1',
    label: 'T+1'
  },
  {
    value: 'D1',
    label: 'D+1'
  }
];

// 结算类型
const SettlementTypeOptions = [
  {
    value: 0,
    label: '对公账户'
  },
  {
    value: 1,
    label: '对私账户'
  }
];

const SettlementInfo = () => {
  return (
    <BizForm
      name="form-settlement-info"
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
            label="结算方式"
            name="settlementCycle"
            required
            options={SettlementCycleOptions}
            tooltip="T为工作日，D为自然日"
          />
        </Col>
        <Col {...oneColSpan}>
          <BizFormItemRadio
            label="结算类型"
            name="settlementType"
            required
            options={SettlementTypeOptions}
          />
        </Col>
        <Col {...oneColSpan}>
          <BizFormItemInput label="账户名称" name="bankCertName" required />
        </Col>
        <Col {...twoColSpan}>
          <BizFormItemInput label="银行卡号" name="bankCardNo" type="bankCard" required />
        </Col>
        <Col {...twoColSpan}>
          <BizFormItemInput label="开户银行名称" name="bankName" required />
        </Col>
        <Col {...oneColSpan}>
          <BizFormItemAddress
            label="开户支行"
            names={['branchLocation', 'branchName']}
            labels={['省/市', '支行名称']}
            required
            options={pc}
          />
        </Col>
      </Row>
    </BizForm>
  );
};

export default SettlementInfo;
