// 转换

import type { Dayjs } from 'dayjs';
import { isArray } from 'ut2';
import dayjs, { formatQuarter } from '../../utils/dayjs-wrapper';
import { DateFormat } from './dateUtil';

// 标识日期无效值的value
export const InvalidFieldValue = `__invalid_random_value_${Math.random()}__`;

// 转换日期
export function transformDate(date: Dayjs | string, format: string): string;
export function transformDate(date: (Dayjs | string)[], format: string): string;
export function transformDate(date: Dayjs | string | (Dayjs | string)[], format: string) {
  if (dayjs.isDayjs(date)) {
    return format === DateFormat.quarter ? formatQuarter(date) : date.format(format);
  }
  if (isArray(date) && date.length > 0) {
    return date.map((item) => transformDate(item, format));
  }
  return date;
}

// 转换表单值
export function transformFormValues(values: any, transforms: any, currentLevelValues?: any) {
  if (
    (isArray(values) && values.length <= 0 && !currentLevelValues) ||
    (isArray(transforms) && transforms.length <= 0) ||
    !transforms
  ) {
    return values;
  }

  let ret;

  if (isArray(values) && isArray(transforms)) {
    ret = values.map((item, index) => {
      if (typeof item === 'object' || isArray(item)) {
        return transformFormValues(item, transforms[index]);
      }
      if (typeof transforms[index] === 'function') {
        return transforms[index](item);
      }
      return item;
    });
  } else if (typeof values === 'object' && typeof transforms === 'object') {
    ret = {};
    // eslint-disable-next-line
    for (const key in values) {
      if (typeof values[key] === 'object' || isArray(values[key])) {
        ret[key] = transformFormValues(values[key], transforms[key], ret);
      } else if (typeof transforms[key] === 'function') {
        ret[key] = transforms[key](values[key], ret);
      } else {
        ret[key] = values[key];
      }
      if (ret[key] === InvalidFieldValue) {
        delete ret[key];
      }
    }
  } else if (typeof transforms === 'function') {
    ret = transforms(values, currentLevelValues);
  } else {
    ret = values;
  }

  return ret;
}
