import * as React from 'react';
import { isArray } from 'ut2';
import { getPC } from 'lcn';
import { useAsync } from 'rc-hooks';
import { Col, Row } from 'antd';
import {
  BizForm,
  BizFormItem,
  BizFormItemAutoComplete,
  BizFormItemCascader,
  BizFormItemSelect
} from 'antd-more';
import { queryBanks, queryBranchBanks } from './services';

const pc = getPC({ fieldNames: { code: 'value', name: 'label' }, inland: true });

function Demo() {
  const [form] = BizForm.useForm();

  const bankName = BizForm.useWatch('bankName', form);
  const branchBankAddressCode = BizForm.useWatch('branchBankAddressCode', form);
  const hasBranchBankAddressCode = React.useMemo(
    () => isArray(branchBankAddressCode) && branchBankAddressCode.length > 0,
    [branchBankAddressCode]
  );

  // 请求银行列表数据
  const { data: banks = [], loading: queryBanksLoading } = useAsync(
    () =>
      queryBanks().then((res) =>
        res.map((item) => ({
          label: item.bankName,
          value: item.bankName
        }))
      ),
    {
      cacheKey: 'queryBanks',
      cacheTime: 24 * 60 * 60 * 1000,
      persisted: true
    }
  );

  // 请求支行列表数据
  const {
    run: runQueryBranchBanks,
    mutate: mutateBranchData,
    data: branchBanks = []
  } = useAsync(
    (...args: Parameters<typeof queryBranchBanks>) =>
      queryBranchBanks(...args).then((res) =>
        res.map((item) => ({
          label: item.fullBranchName,
          value: item.fullBranchName
        }))
      ),
    {
      autoRun: false
    }
  );

  React.useEffect(() => {
    mutateBranchData([]);
    if (bankName && isArray(branchBankAddressCode) && branchBankAddressCode.length > 0) {
      runQueryBranchBanks({
        bankName,
        province: branchBankAddressCode[0]!,
        city: branchBankAddressCode[1]!
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bankName, branchBankAddressCode]);

  return (
    <BizForm
      form={form}
      onFinish={(values) => {
        console.log(values);
      }}
    >
      <BizFormItemSelect
        label="银行名称"
        name="bankName"
        options={banks}
        selectProps={{
          showSearch: true,
          loading: queryBanksLoading,
          filterOption(inputValue, option) {
            if (inputValue) {
              return (
                ('' + option?.value).indexOf(inputValue) > -1 ||
                (typeof option?.label === 'string' && option?.label.indexOf(inputValue) > -1)
              );
            }
            return false;
          }
        }}
        required
      />
      <BizFormItem label="开户支行" required style={{ marginBottom: 0 }}>
        <Row gutter={10}>
          <Col span={24} md={12} lg={8}>
            <BizFormItemCascader
              label="省/市"
              name="branchBankAddressCode"
              placeholder="请选择省/市"
              hideLabel
              options={pc}
              allowClear={false}
              required
            />
          </Col>
          <Col span={24} md={12} lg={16}>
            <BizFormItemAutoComplete
              label="支行名称"
              name="branchBankName"
              placeholder="请输入支行名称"
              hideLabel
              allowClear
              options={branchBanks}
              normalize={(value) => (value ? value.trim() : value)}
              autoCompleteProps={{
                disabled: !hasBranchBankAddressCode || !bankName,
                filterOption: (inputValue, option) =>
                  (option!.value as string).indexOf(inputValue) > -1
              }}
              rules={[
                {
                  validator(rule, value) {
                    let errMsg = '';
                    if (!hasBranchBankAddressCode && !bankName) {
                      errMsg = '请先选择开户银行和开户支行省/市';
                    } else if (!hasBranchBankAddressCode) {
                      errMsg = '请先选择开户支行省/市';
                    } else if (!bankName) {
                      errMsg = '请先选择开户银行';
                    } else if (!value) {
                      errMsg = '请输入支行名称';
                    }
                    if (errMsg) {
                      return Promise.reject(errMsg);
                    }
                    return Promise.resolve();
                  }
                }
              ]}
              required
            />
          </Col>
        </Row>
      </BizFormItem>
    </BizForm>
  );
}

export default Demo;
