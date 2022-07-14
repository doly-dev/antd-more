import * as React from 'react';
import type { TableColumnType } from 'antd';
import { Tooltip, Popover, Tree, Checkbox } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import TableContext from '../../TableContext';

import './index.less';

const prefixCls = 'antd-more-table';

function getColumnKey(column: TableColumnType<any>, index: number) {
  return `${column.dataIndex || ''}-${column.key || ''}-${index}`;
}

const ColumnSetting = () => {
  const { columns, setColumns: setNewColumns } = React.useContext(TableContext);

  const columnsKey = React.useMemo(() => columns.map(getColumnKey), [columns]); // 全部列的 key
  const [selectedKey, setSelectedKey] = React.useState<React.Key[]>(columnsKey); // 当前显示的列 key ，默认全部选中

  const checkAll = React.useMemo(
    () => selectedKey.length === columns.length,
    [selectedKey, columns]
  );
  const indeterminate = React.useMemo(
    () => selectedKey.length > 0 && selectedKey.length !== columns.length,
    [selectedKey, columns]
  );

  React.useEffect(() => {
    setNewColumns(columns.filter((item, index) => selectedKey.includes(columnsKey[index])));
  }, [columns, columnsKey, selectedKey, setNewColumns]);

  // 当 columns 变了以后，重置 seletedKey
  React.useEffect(() => {
    setSelectedKey(columnsKey);
  }, [columnsKey]);

  const treeData = React.useMemo(() => {
    return columns.map((item, index) => {
      return {
        key: columnsKey[index],
        title: (item.title || '') as React.ReactNode
      };
    });
  }, [columns, columnsKey]);

  const onCheckAllChange = React.useCallback(() => {
    if (selectedKey.length === columns.length) {
      setSelectedKey([]);
    } else {
      setSelectedKey(columnsKey.slice());
    }
  }, [selectedKey.length, columns.length, columnsKey]);

  const onCheck = React.useCallback((checkedKeysValue: React.Key[]) => {
    setSelectedKey(checkedKeysValue);
  }, []);

  return (
    <Popover
      title={
        <Checkbox
          indeterminate={indeterminate}
          onChange={onCheckAllChange}
          checked={checkAll}
          style={{ height: '32px', lineHeight: '32px' }}
        >
          全选
        </Checkbox>
      }
      content={
        <Tree
          checkable
          selectable={false}
          blockNode
          onCheck={onCheck}
          checkedKeys={selectedKey}
          treeData={treeData}
          className={`${prefixCls}-column-setting`}
        />
      }
      arrowPointAtCenter
      placement="bottomRight"
      trigger={['click']}
    >
      <Tooltip title="列设置">
        <SettingOutlined />
      </Tooltip>
    </Popover>
  );
};

export default ColumnSetting;
