import * as React from 'react';
import { isArray } from 'ut2';
import type { SelectProps } from '../components/antd.interface';

type Params<T = any[]> = {
  options: T;
  excludeValues?: ((options: T) => any[]) | any[];
  all?: boolean;
  allValue?: any;
  allName?: React.ReactNode;
  fieldNames?: SelectProps['fieldNames'];
};

function useFilterOptions<T extends Record<string, any>[] = any[]>({
  options,
  excludeValues: outExcludeValues = [],
  all,
  allValue,
  allName,
  fieldNames
}: Params<T>) {
  const { value: valueKey, label: labelKey } = React.useMemo(
    () => ({
      value: 'value',
      label: 'label',
      ...fieldNames
    }),
    [fieldNames]
  );

  const excludeValues = React.useMemo(() => {
    if (typeof outExcludeValues === 'function') {
      return outExcludeValues(options);
    }
    return outExcludeValues;
  }, [options, outExcludeValues]);

  const result = React.useMemo(() => {
    const ret = [] as T;
    if (all) {
      ret.push({ [valueKey]: allValue, [labelKey]: allName });
    }
    if (isArray(options) && options.length > 0) {
      options.forEach((item) => {
        if (!excludeValues.includes(item?.[valueKey])) {
          ret.push({
            [labelKey]: item?.name,
            ...item
          });
        }
      });
    }
    return ret;
  }, [all, options, valueKey, allValue, labelKey, allName, excludeValues]);
  return result;
}

export default useFilterOptions;
