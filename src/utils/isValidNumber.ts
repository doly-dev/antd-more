// 是否为有效数字
function isValidNumber(val: any) {
  const numVal = typeof val === 'string' ? Number(val) : val;
  return typeof numVal === 'number' && !Number.isNaN(numVal);
}

export default isValidNumber;