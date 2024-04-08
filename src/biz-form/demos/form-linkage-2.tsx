/**
 * title: 基本信息
 * desc: 通过 `useWatch` 实现。原先使用 `onValuesChange` 的方式，在 `form.setFieldsValue` 修改值时不会触发。
 */
import * as React from 'react';
import { Row, Col } from 'antd';
import { isBusinessLicense, isSocialCreditCode } from 'util-helpers';
import { BizForm, BizFormItemRadio, BizFormItemInput, BizFormItemAddress } from 'antd-more';
import { getPCA } from 'lcn';

const pca = getPCA({ inland: true, fieldNames: { code: 'value', name: 'label' } });

// 机构类型
// 1-公司 2-个人
enum OrgType {
  Company = 1,
  Person
}

// 机构类型选项
const OrgTypeOptions = [
  {
    label: '公司',
    value: OrgType.Company
  },
  {
    label: '个人',
    value: OrgType.Person
  }
];

const oneColSpan = {
  span: 24
};
const twoColSpan = {
  span: 24,
  lg: 12
};

const BaseInfo = () => {
  const initialValues = React.useMemo(
    () => ({
      orgType: OrgType.Company,
      businessRegno: '91110000JF7YGXPE8R'
    }),
    []
  );
  const [form] = BizForm.useForm();
  const orgType = BizForm.useWatch(['orgType'], form);

  const isCompany = orgType === OrgType.Company;
  const legalIdCardLabel = `${isCompany ? '法人' : ''}身份证号`;
  const legalMobileLabel = `${isCompany ? '法人' : ''}手机号码`;
  const orgNamePlaceholder = `请输入${
    isCompany ? '公司营业执照上的商户全称' : '机构代表人姓名'
  }，将作为机构名称`;

  return (
    <BizForm
      name="form-linkage2"
      form={form}
      labelWidth={126}
      initialValues={initialValues}
      onFinish={(values) => {
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
        // reset 操作对联动表单有异常
        noReset: true,
        // 提交按钮居中
        render: (_, dom) => <div style={{ display: 'flex', justifyContent: 'center' }}>{dom}</div>
      }}
    >
      <Row>
        <Col {...oneColSpan}>
          <BizFormItemRadio
            label="机构类型"
            name="orgType"
            options={OrgTypeOptions}
            extra="“公司”有营业执照、“个人”无营业执照"
            required
          />
        </Col>
        <Col {...oneColSpan}>
          <BizFormItemInput
            label="机构名称"
            name="orgName"
            placeholder={orgNamePlaceholder}
            disabledWhiteSpace
            required
          />
        </Col>
        {isCompany && (
          <>
            <Col {...twoColSpan}>
              <BizFormItemInput
                label="营业执照号"
                name="businessRegno"
                placeholder="请输入统一社会信用代码或营业执照号"
                maxLength={18}
                required
                rules={[
                  {
                    validator(rules, value) {
                      let errMsg = '';
                      if (!value) {
                        errMsg = '请输入统一社会信用代码或营业执照号';
                      } else if (!isBusinessLicense(value) && !isSocialCreditCode(value)) {
                        errMsg = '请输入正确的营业执照号';
                      }
                      if (errMsg) {
                        return Promise.reject(errMsg);
                      }
                      return Promise.resolve();
                    }
                  }
                ]}
              />
            </Col>
            <Col {...twoColSpan}>
              <BizFormItemInput label="法人姓名" name="legalName" required disabledWhiteSpace />
            </Col>
          </>
        )}
        <Col {...twoColSpan}>
          <BizFormItemInput
            label={legalIdCardLabel}
            // 用于修改默认验证信息
            messageVariables={{ label: '身份证号' }}
            name="legalIdCard"
            type="idCard"
            required
          />
        </Col>
        <Col {...twoColSpan}>
          <BizFormItemInput
            label={legalMobileLabel}
            // 用于修改默认验证信息
            messageVariables={{ label: '手机号码' }}
            name="legalMobile"
            type="mobile"
            required
          />
        </Col>
        <Col {...oneColSpan}>
          <BizFormItemAddress
            label="机构所在地址"
            labels={['省/市/区', '详细地址']}
            names={['location', 'address']}
            options={pca}
            required
          />
        </Col>
      </Row>
    </BizForm>
  );
};

export default BaseInfo;
