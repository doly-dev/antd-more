// 标准化输入
import { toString } from 'ut2';
import { formatBankCard, formatMobile } from 'util-helpers';

// 标准化输入非空白符
export const normalizeWhiteSpace = (value: string) => {
  // 如果替换全部空字符，输入中文时有bug
  // return toString(value).replace(/\s/g, '');
  return toString(value).trim();
};

// 标准化输入银行卡号
export const normalizeBankCard = (value: string, format = true) => {
  const valueStr = toString(value);
  const reg = /[^\d]/g;
  const ret = valueStr.replace(reg, '');
  return format ? formatBankCard(ret) : ret;
};

// 标准化输入身份证号
export const normalizeIdCard = (value, format = true) => {
  const valueStr = toString(value);
  const reg = /[^\dx]/gi;
  const ret = valueStr.replace(reg, '').substring(0, 18);
  return format ? ret.toUpperCase() : ret;
};

// 标准化输入手机号码
export const normalizeMobile = (value, format = true) => {
  const valueStr = toString(value);
  const reg = /[^\d]/g;
  const ret = valueStr.replace(reg, '');
  return format ? formatMobile(ret) : ret;
};
