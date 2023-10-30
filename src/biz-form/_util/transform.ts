// 转换

import type { Moment } from 'moment';
import moment from 'moment';

// 标识日期无效值的value
export const InvalidFieldValue = `date_range_invalid_${Math.random()}`;

// 转换日期
export function transformDate(date: Moment | string, format: string): string;
export function transformDate(date: (Moment | string)[], format: string): string;
export function transformDate(date: Moment | string | (Moment | string)[], format: string) {
  if (moment.isMoment(date)) {
    return date.format(format);
  }
  if (Array.isArray(date) && date.length > 0) {
    return date.map((item) => transformDate(item, format));
  }
  if (date && typeof date === 'string') {
    return moment(date, format).format(format);
  }
  return date;
}

// 转换表单值
export function transformFormValues(values: any, transforms: any, currentLevelValues?: any) {
  if (
    (Array.isArray(values) && values.length <= 0 && !currentLevelValues) ||
    (Array.isArray(transforms) && transforms.length <= 0) ||
    !transforms
  ) {
    return values;
  }

  let ret;

  if (Array.isArray(values) && Array.isArray(transforms)) {
    ret = values.map((item, index) => {
      if (typeof item === 'object' || Array.isArray(item)) {
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
      if (typeof values[key] === 'object' || Array.isArray(values[key])) {
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
