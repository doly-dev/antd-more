import * as React from 'react';
import { Form, Cascader, Input, Row, Col } from 'antd';
import { FormItemProps } from 'antd/lib/form';
import { InputProps } from 'antd/lib/input';
import { CascaderProps, CascaderOptionType } from 'antd/lib/cascader';
import getLabel from '../_util/getLabel';
import normalizeWhiteSpace from '../_util/normalizeWhiteSpace';

type InternalNamePath = (string | number)[];
type NamePath = string | number | InternalNamePath;

export interface FormItemAddressProps extends FormItemProps {
  options?: CascaderOptionType[];
  names: [NamePath, NamePath]; // 如 ['location', 'address']
  labels: [string, string]; // 如 ['省/市/区', '详细地址']
  formItemProps?: [FormItemProps, FormItemProps];
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
  label,
  required = false,
  ...restProps
}) => {
  const labelTexts = React.useMemo(() => labels.map(getLabel), [labels]);

  return (
    <Form.Item
      label={label}
      required={required}
      style={{ marginBottom: 0, ...style }}
      {...restProps}
    >
      <Row gutter={10}>
        <Col span={24} md={12} lg={7}>
          <Form.Item
            name={names[0]}
            rules={[
              {
                validator(rule, value) {
                  let errMsg = '';
                  if (!value || value.length <= 0) {
                    errMsg = required ? `请选择${labelTexts[0]}` : '';
                  }
                  if (errMsg) {
                    return Promise.reject(errMsg);
                  }
                  return Promise.resolve();
                },
              },
            ]}
            {...formItemProps[0]}
          >
            <Cascader placeholder={`请选择${labelTexts[0]}`} options={options} {...cascaderProps} />
          </Form.Item>
        </Col>
        <Col span={24} md={12} lg={17}>
          <Form.Item
            name={names[1]}
            normalize={normalizeWhiteSpace}
            rules={[
              {
                validator(rule, value) {
                  let errMsg = '';
                  if (!value) {
                    errMsg = required ? `请输入${labelTexts[1]}` : '';
                  }
                  if (errMsg) {
                    return Promise.reject(errMsg);
                  }
                  return Promise.resolve();
                },
              },
            ]}
            {...formItemProps[1]}
          >
            <Input
              placeholder={`请输入${labelTexts[1]}`}
              allowClear
              autoComplete="off"
              {...inputProps}
            />
          </Form.Item>
        </Col>
      </Row>
    </Form.Item>
  );
};

export default FormItemAddress;
