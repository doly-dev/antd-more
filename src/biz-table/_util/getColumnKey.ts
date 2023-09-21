import type { TableColumnType } from 'antd';

function getColumnKey(column: TableColumnType<any>, index: number, parentKey: React.Key = '') {
  if (column?.key) {
    return column.key;
  }

  return `${parentKey}-${column?.dataIndex || index}`;
}

export default getColumnKey;
