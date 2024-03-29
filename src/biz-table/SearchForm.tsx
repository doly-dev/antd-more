import * as React from 'react';
import type { CardProps, FormInstance } from 'antd';
import { Card } from 'antd';
import { isArray, uniqueId } from 'ut2';
import type { QueryFormProps } from '../biz-form';
import { BizForm, QueryForm } from '../biz-form';
import createFormItems from './_util/createFormItems';
import type { SearchProps } from './interface';

export declare interface SearchFormProps extends QueryFormProps {
  formItems?: Exclude<React.ReactNode, string | number | boolean | null | undefined>[];
  searchItems?: SearchProps[];
  cardProps?: CardProps;
  ref?: React.LegacyRef<FormInstance<any>>;
}

const SearchForm: React.FC<SearchFormProps> = React.forwardRef(
  ({ formItems, searchItems, cardProps, name, ...restProps }, ref) => {
    let items = [];
    const [form] = BizForm.useForm();

    if (isArray(formItems) && formItems.length > 0) {
      items = formItems;
    } else if (isArray(searchItems) && searchItems.length > 0) {
      items = createFormItems(searchItems, form);
    }

    const formName = React.useMemo(() => name || uniqueId('__am_bizTableSearchForm_'), [name]);
    React.useImperativeHandle(ref, () => form, [form]);

    if (items.length <= 0) {
      return null;
    }

    return (
      <Card
        bordered={false}
        {...cardProps}
        styles={{
          body: {
            paddingBottom: 0,
            ...cardProps?.bodyStyle,
            ...cardProps?.styles?.body
          }
        }}
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
