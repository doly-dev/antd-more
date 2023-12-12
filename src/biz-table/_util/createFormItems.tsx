import * as React from 'react';
import { isArray } from 'ut2';
import type { FormInstance } from 'antd';
import type { NamePath } from 'antd/es/form/interface';
import type { SearchProps } from '../interface';
import { DateFormat } from '../../biz-field/_util/dateUtil';
import { ItemTypes, ValueTypeToItemType, DatePickerMap } from './constants';

function compare(a, b) {
  const o1 = a.order || 0;
  const o2 = b.order || 0;
  if (o1 > o2) {
    return 1;
  } else if (o1 < o2) {
    return -1;
  } else {
    return 0;
  }
}

export function createFormItem({ search, ...restProps }: SearchProps, form: FormInstance) {
  let options = restProps;

  if (typeof search === 'object') {
    options = {
      ...options,
      ...search
    };
  }

  const {
    render,
    itemType,
    valueType,
    valueEnum,
    label,
    name,
    title,
    dataIndex,
    originItem,
    ...restOptions
  } = options;

  const type: string = itemType || valueType;

  const FormItemComp = ValueTypeToItemType[type]
    ? ItemTypes[ValueTypeToItemType[type]]
    : ItemTypes[type] || ItemTypes.input;
  const pickerProps = DatePickerMap[type] ? { picker: DatePickerMap[type] } : {};
  const formatProps = type === valueType && DateFormat[type] ? { format: DateFormat[type] } : {};
  const showTimeProps = type === 'dateTime' || type === 'dateTimeRange' ? { showTime: true } : {};

  const dom = (
    <FormItemComp
      label={label || title}
      name={name || (dataIndex as NamePath)}
      options={valueEnum}
      {...showTimeProps}
      {...formatProps}
      {...pickerProps}
      {...restOptions}
    />
  );

  if (typeof render === 'function') {
    return render(originItem, dom, form);
  }

  return dom;
}

function createFormItems(options: SearchProps[], form: FormInstance) {
  if (!isArray(options) || options.length <= 0) {
    return null;
  }

  return (
    options
      .sort(compare)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .map(({ order, ...restItem }, index) =>
        createFormItem(
          { key: restItem.dataIndex || restItem.name || index.toString(), ...restItem },
          form
        )
      )
  );
}

export default createFormItems;
