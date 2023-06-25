import * as React from 'react';
import type { CardProps, FormInstance } from 'antd';
import { Card } from 'antd';
import { uniqueId } from 'ut2';
import type { QueryFormProps } from '../biz-form';
import { BizForm, QueryForm } from '../biz-form';
import createFormItems from './_util/createFormItems';
import type { SearchProps } from './interface';

export declare interface SearchFormProps extends QueryFormProps {
  formItems?: Exclude<React.ReactNode, string | number | boolean | null | undefined>[];
  searchItems?: SearchProps[];
  cardProps?: CardProps;
  ref?: React.MutableRefObject<FormInstance | undefined> | ((instance: FormInstance<any>) => void);
}

const SearchForm: React.FC<SearchFormProps> = React.forwardRef(
  ({ formItems, searchItems, cardProps, name, ...restProps }, ref) => {
    let items = [];
    const [form] = BizForm.useForm();

    if (Array.isArray(formItems) && formItems.length > 0) {
      items = formItems;
    } else if (Array.isArray(searchItems) && searchItems.length > 0) {
      items = createFormItems(searchItems, form);
    }

    const formName = React.useMemo(
      () => name || uniqueId('__am_bizTableSearchForm_'),
      [name]
    );
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
          {items.map((item: any, index) =>
            React.cloneElement(item, {
              key: item?.key || item?.props?.key || index.toString()
            })
          )}
        </QueryForm>
      </Card>
    );
  }
);

export default SearchForm;
