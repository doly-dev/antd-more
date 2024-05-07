import * as React from 'react';
import { Cascader } from 'antd';
import { isArray, uniqueId } from 'ut2';
import type { CascaderProps } from './antd.interface';
import type { BizFormItemProps } from './Item';
import BizFormItem from './Item';
import FieldContext from '../FieldContext';
import { InvalidFieldValue } from '../_util/transform';
import { useConfig } from '../../biz-config-provider';

export interface BizFormItemCascaderProps<DataNodeType = any>
  extends BizFormItemProps,
    Pick<CascaderProps<DataNodeType>, 'options' | 'placeholder' | 'fieldNames' | 'allowClear'> {
  names?: string[];
  cascaderProps?: Omit<CascaderProps<DataNodeType>, 'multiple'> & { multiple?: boolean };
}

function BizFormItemCascader<DataNodeType = any>(props: BizFormItemCascaderProps<DataNodeType>) {
  const { locale } = useConfig();
  const {
    placeholder = locale.form.common.selectPlaceholder,
    options = [],
    fieldNames,
    allowClear = true,
    names,
    name,
    cascaderProps = {},
    required = false,
    transform,
    ...restProps
  } = props;

  const hasNames = React.useMemo(() => isArray(names) && names.length > 0, [names]);
  const currentName = React.useMemo(
    () => name || (hasNames ? uniqueId('__am_cascader_') : name),
    [hasNames, name]
  );
  const { getPopupContainer } = React.useContext(FieldContext);
  const handleTransform = React.useCallback(
    (val, currentPathValues) => {
      const transVal = typeof transform === 'function' ? transform(val) : val;

      if (isArray(names) && names.length > 0 && currentPathValues) {
        names.forEach((item, index) => {
          currentPathValues[item] = isArray(transVal) ? transVal[index] : undefined;
        });
        return InvalidFieldValue;
      } else {
        return transVal;
      }
    },
    [names, transform]
  );

  return (
    <BizFormItem
      required={required}
      rules={[
        {
          validator(rule, value) {
            let errMsg = '';
            if (required && (!value || (cascaderProps?.multiple && value.length <= 0))) {
              errMsg = locale.form.common.selectRequired;
            }
            if (errMsg) {
              return Promise.reject(errMsg);
            }
            return Promise.resolve();
          }
        }
      ]}
      name={currentName}
      transform={handleTransform}
      {...restProps}
    >
      <Cascader
        placeholder={placeholder}
        getPopupContainer={getPopupContainer}
        fieldNames={fieldNames}
        allowClear={allowClear}
        {...cascaderProps}
        options={options}
      />
    </BizFormItem>
  );
}

export default BizFormItemCascader;
