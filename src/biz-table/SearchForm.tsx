import * as React from 'react';
import type { CardProps, FormInstance } from 'antd';
import { Card } from 'antd';
import { isArray, uniqueId } from 'ut2';
import type { QueryFormProps } from '../biz-form';
import { BizForm, QueryForm } from '../biz-form';
import createFormItems from './_util/createFormItems';
import type { SearchProps } from './interface';

export interface SearchFormProps extends QueryFormProps {
  formItems?: Exclude<React.ReactNode, string | number | boolean | null | undefined>[];
  searchItems?: SearchProps[];
  cardProps?: CardProps;
}

const SearchForm = React.forwardRef<FormInstance, SearchFormProps>(
  ({ formItems, searchItems, cardProps, name, ...restProps }, ref) => {
    const [form] = BizForm.useForm();

    const items = React.useMemo(() => {
      if (isArray(formItems) && formItems.length > 0) {
        return formItems;
      } else if (isArray(searchItems) && searchItems.length > 0) {
        return createFormItems(searchItems, form);
      }
      return [];
    }, [form, formItems, searchItems]);

    const formName = React.useMemo(() => name || uniqueId('__am_bizTableSearchForm_'), [name]);
    React.useImperativeHandle(ref, () => form, [form]);

    if (items.length <= 0) {
      return null;
    }

    return (
      <Card
        bordered={false}
        {...cardProps}
        bodyStyle={{ paddingBottom: 0, ...cardProps?.bodyStyle }}
      >
        <QueryForm form={form} name={formName} {...restProps}>
          {items}
        </QueryForm>
      </Card>
    );
  }
);

export default SearchForm;
