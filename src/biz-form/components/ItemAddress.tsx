import * as React from 'react';
import { Cascader, Input, Row, Col } from 'antd';
import type { InputProps, CascaderProps, FormItemProps } from './antd.interface';
import { normalizeWhiteSpace } from '../_util/normalize';
import BizFormItem from './Item';
import type { BizFormItemProps } from './Item';

export interface FormItemAddressProps extends Omit<BizFormItemProps, 'name' | 'transform'> {
  options?: CascaderProps['options'];
  names: [FormItemProps['name'], FormItemProps['name']]; // 如 ['location', 'address']
  labels: [string, string]; // 如 ['省/市/区', '详细地址']
  formItemProps?: [BizFormItemProps, BizFormItemProps];
  inputProps?: InputProps;
  cascaderProps?: CascaderProps;
}

const FormItemAddress: React.FC<FormItemAddressProps> = ({
  names,
  labels,
  options = [],
  formItemProps = [{}, {}],
  inputProps = {},
  cascaderProps = {},

  style = {},
  required = false,
  ...restProps
}) => {
  const [
    { colProps: cascaderColProps, ...cascaderFormItemProps },
    { colProps: inputColProps, ...inputFormItemProps },
  ] = formItemProps;

  return (
    <BizFormItem required={required} style={{ marginBottom: 0, ...style }} {...restProps}>
      <Row gutter={10}>
        <Col span={24} md={12} lg={8} {...cascaderColProps}>
          <BizFormItem
            name={names[0]}
            rules={[
              {
                validator(rule, value) {
                  let errMsg = '';
                  if (!value || value.length <= 0) {
                    errMsg = required ? `请选择${labels[0]}` : '';
                  }
                  if (errMsg) {
                    return Promise.reject(errMsg);
                  }
                  return Promise.resolve();
                },
              },
            ]}
            {...cascaderFormItemProps}
          >
            <Cascader placeholder={`请选择${labels[0]}`} options={options} {...cascaderProps} />
          </BizFormItem>
        </Col>
        <Col span={24} md={12} lg={16} {...inputColProps}>
          <BizFormItem
            name={names[1]}
            normalize={normalizeWhiteSpace}
            rules={[
              {
                validator(rule, value) {
                  let errMsg = '';
                  if (!value) {
                    errMsg = required ? `请输入${labels[1]}` : '';
                  }
                  if (errMsg) {
                    return Promise.reject(errMsg);
                  }
                  return Promise.resolve();
                },
              },
            ]}
            {...inputFormItemProps}
          >
            <Input
              placeholder={`请输入${labels[1]}`}
              allowClear
              autoComplete="off"
              {...inputProps}
            />
          </BizFormItem>
        </Col>
      </Row>
    </BizFormItem>
  );
};

export default FormItemAddress;
