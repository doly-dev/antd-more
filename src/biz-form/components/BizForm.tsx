import * as React from 'react';
import { Form, Space } from 'antd';
import Item from './Item';
import List from './List';

import BaseForm from './BaseForm';
import type { BaseFormProps, FormExtraInstance } from './BaseForm';
import { useConfig } from '../../biz-config-provider';

export type BizFormProps = BaseFormProps;
export type BizFormExtraInstance<Values = any> = FormExtraInstance<Values>;

const BizForm: React.FC<BizFormProps> & {
  Item: typeof Item;
  List: typeof List;
  useForm: typeof Form.useForm;
  Provider: typeof Form.Provider;
  ErrorList: typeof Form.ErrorList;
  useFormInstance: typeof Form.useFormInstance;
  useWatch: typeof Form.useWatch;
} = (props) => {
  const { bizForm: contextProps } = useConfig();
  const { submitter, ...restProps } = { ...contextProps, ...props };
  const submitterProps = typeof submitter === 'boolean' || !submitter ? {} : submitter;
  const submitterConfig =
    typeof submitter === 'undefined' || submitter
      ? {
          render: (_, dom) => (
            <Item placeholderLabel style={{ marginBottom: 0 }}>
              {Array.isArray(dom) && dom.length > 1 ? <Space>{dom}</Space> : dom}
            </Item>
          ),
          ...submitterProps
        }
      : false;

  return (
    <BaseForm
      submitter={submitterConfig}
      contentRender={(items, submitters) => (
        <>
          {items}
          {submitters}
        </>
      )}
      {...restProps}
    />
  );
};

BizForm.Item = Item;
BizForm.List = List;
BizForm.useForm = Form.useForm;
BizForm.Provider = Form.Provider;
BizForm.ErrorList = Form.ErrorList;
BizForm.useFormInstance = Form.useFormInstance;
BizForm.useWatch = Form.useWatch;

export default BizForm;
