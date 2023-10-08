import * as React from 'react';
import { divide, formatMoney, setDataURLPrefix } from 'util-helpers';
import type { EnumData } from 'antd-more';
import { BizField } from 'antd-more';
import { Typography } from 'antd';

// 超长省略展示
// 超过10个字，只展示前3后2
export const renderLongOmitted = (str?: string) => {
  if (str && str.length > 10) {
    const before = str.substring(0, 3);
    const after = str.substring(str.length - 2);
    return `${before}...${after}`;
  }
  return str;
};

// 格式化单位为分的金额
// 如果有特殊需求，比如前后加其他字段，可以使用 BizTable 的第二个参数 record
export const renderMoney = (num?: number | string) => {
  if ((typeof num === 'number' && !isNaN(num)) || (num && typeof num === 'string')) {
    return `¥${formatMoney(divide(num, 100))}`;
  }
  return '-';
};

// 转换base64图片buffer
export const renderBase64Buffer = (buffer?: string) => {
  if (buffer) {
    const base64 = setDataURLPrefix(buffer);
    return <BizField valueType="image" value={base64} />;
  }
  return '-';
};

// 状态和备注（错误原因）
export const renderStatusWithRemark = (text: string, valueEnum: EnumData = [], remark = '') => {
  const remarkView =
    typeof remark === 'string' && remark.indexOf('\n') > -1 ? (
      <>
        {remark.split('\n').map((item) => (
          <div key={item} style={{ marginBottom: 5 }}>
            {item}
          </div>
        ))}
      </>
    ) : (
      remark
    );

  return (
    <div>
      <BizField value={text} valueType="enumBadge" valueEnum={valueEnum} />
      {remark && (
        <div>
          <Typography.Text
            style={{ maxWidth: 140, color: 'gray' }}
            ellipsis={{ tooltip: remarkView }}
          >
            {remark}
          </Typography.Text>
        </div>
      )}
    </div>
  );
};
