import * as React from 'react';
import { Cascader, Input, Row, Col } from 'antd';
import type { InputProps, CascaderProps, FormItemProps } from './antd.interface';
import { normalizeWhiteSpace } from '../_util/normalize';
import type { BizFormItemProps } from './Item';
import BizFormItem from './Item';
import { useConfig } from '../../biz-config-provider';

export interface BizFormItemAddressProps<DataNodeType = any>
  extends Omit<BizFormItemProps, 'name' | 'transform'>,
    Pick<CascaderProps<DataNodeType>, 'options' | 'fieldNames'> {
  names: [FormItemProps['name'], FormItemProps['name']]; // 如 ['location', 'address']
  labels: [string, string]; // 如 ['省/市/区', '详细地址']
  formItemProps?: [BizFormItemProps, BizFormItemProps];
  inputProps?: InputProps;
  cascaderProps?: CascaderProps<DataNodeType>;
}

function BizFormItemAddress<DataNodeType = any>({
  names,
  labels,
  options = [],
  fieldNames,
  formItemProps = [{}, {}],
  inputProps = {},
  cascaderProps = {},

  style = {},
  required = false,
  ...restProps
}: BizFormItemAddressProps<DataNodeType>) {
  const { locale } = useConfig();
  const [
    { colProps: cascaderColProps, ...cascaderFormItemProps },
    { colProps: inputColProps, ...inputFormItemProps }
  ] = formItemProps;

  return (
    <BizFormItem required={required} style={{ marginBottom: 0, ...style }} {...restProps}>
      <Row gutter={10}>
        <Col span={24} md={12} lg={8} {...cascaderColProps}>
          <BizFormItem
            label={labels[0]}
            hideLabel
            name={names[0]}
            rules={[
              {
                validator(rule, value) {
                  let errMsg = '';
                  if (!value || value.length <= 0) {
                    errMsg = required ? locale.form.common.selectRequired : '';
                  }
                  if (errMsg) {
                    return Promise.reject(errMsg);
                  }
                  return Promise.resolve();
                }
              }
            ]}
            {...cascaderFormItemProps}
          >
            <Cascader
              placeholder={locale.form.common.selectPlaceholder + labels[0]}
              options={options}
              fieldNames={fieldNames}
              {...cascaderProps}
            />
          </BizFormItem>
        </Col>
        <Col span={24} md={12} lg={16} {...inputColProps}>
          <BizFormItem
            label={labels[1]}
            hideLabel
            name={names[1]}
            normalize={normalizeWhiteSpace}
            rules={[
              {
                required,
                message: locale.form.common.inputRequired
              }
            ]}
            {...inputFormItemProps}
          >
            <Input
              placeholder={locale.form.common.inputPlaceholder + labels[1]}
              allowClear
              autoComplete="off"
              {...inputProps}
            />
          </BizFormItem>
        </Col>
      </Row>
    </BizFormItem>
  );
}

export default BizFormItemAddress;
