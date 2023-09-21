import * as React from 'react';
import type { TreeProps, TreeDataNode } from 'antd';
import { Tooltip, Popover, Tree, Checkbox } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { useUpdateEffect } from 'rc-hooks';
import TableContext from '../../TableContext';

import './index.less';

const prefixCls = 'antd-more-table';

const ColumnSetting = () => {
  const { columns, columnConfigKeys, setColumnConfigKeys } = React.useContext(TableContext);
  const [sortedKeys, setSortedKeys] = React.useState(() => columns.map((item) => item.key));
  const [selectedKeys, setSelectedKeys] = React.useState<React.Key[]>(columnConfigKeys); // 无序

  // 是否全选
  const checkAll = React.useMemo(
    () => selectedKeys.length === sortedKeys.length,
    [selectedKeys, sortedKeys]
  );
  // 是否部分选中
  const indeterminate = React.useMemo(
    () => selectedKeys.length > 0 && selectedKeys.length !== sortedKeys.length,
    [selectedKeys, sortedKeys]
  );

  // 当列数据发生变化时
  useUpdateEffect(() => {
    const allColumnKey = columns.map((item) => item.key);
    setSortedKeys(allColumnKey);
    setSelectedKeys(allColumnKey);
  }, [columns]);

  // 当 columns 顺序或显示/隐藏变了以后重置
  React.useEffect(() => {
    const newColumnKeys = [];
    sortedKeys.forEach((key) => {
      if (selectedKeys.find((item) => item === key)) {
        newColumnKeys.push(key);
      }
    });
    setColumnConfigKeys(newColumnKeys);
  }, [sortedKeys, selectedKeys, setColumnConfigKeys]);

  const treeData = React.useMemo(() => {
    return sortedKeys.map((key) => {
      return {
        key,
        title: (columns.find((item) => item.key === key)?.title || '') as React.ReactNode
      };
    });
  }, [columns, sortedKeys]);

  const onCheckAllChange = React.useCallback(() => {
    if (checkAll) {
      setSelectedKeys([]);
    } else {
      setSelectedKeys(columns.map((item) => item.key));
    }
  }, [checkAll, columns]);

  const onCheck = React.useCallback((checkedKeysValue: React.Key[]) => {
    setSelectedKeys(checkedKeysValue);
  }, []);

  const onDrop: TreeProps['onDrop'] = (info) => {
    // console.log(info);
    const dropKey = info.node.key;
    const dragKey = info.dragNode.key;
    const dropPos = info.node.pos.split('-');
    const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);

    const loop = (
      data: TreeDataNode[],
      key: React.Key,
      callback: (node: TreeDataNode, i: number, data: TreeDataNode[]) => void
    ) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].key === key) {
          return callback(data[i], i, data);
        }
        if (data[i].children) {
          loop(data[i].children, key, callback);
        }
      }
    };
    const data = [...treeData];

    // Find dragObject
    let dragObj: TreeDataNode;
    loop(data, dragKey, (item, index, arr) => {
      arr.splice(index, 1);
      dragObj = item;
    });

    if (!info.dropToGap) {
      // Drop on the content
      loop(data, dropKey, (item) => {
        item.children = item.children || [];
        // where to insert 示例添加到头部，可以是随意位置
        item.children.unshift(dragObj);
      });
      // } else if (
      //   ((info.node as any).props.children || []).length > 0 && // Has children
      //   (info.node as any).props.expanded && // Is expanded
      //   dropPosition === 1 // On the bottom gap
      // ) {
      //   loop(data, dropKey, (item) => {
      //     item.children = item.children || [];
      //     // where to insert 示例添加到头部，可以是随意位置
      //     item.children.unshift(dragObj);
      //     // in previous version, we use item.children.push(dragObj) to insert the
      //     // item to the tail of the children
      //   });
    } else {
      let ar: TreeDataNode[] = [];
      let i: number;
      loop(data, dropKey, (_item, index, arr) => {
        ar = arr;
        i = index;
      });
      if (dropPosition === -1) {
        ar.splice(i, 0, dragObj);
      } else {
        ar.splice(i + 1, 0, dragObj);
      }
    }
    setSortedKeys(data.map((item) => item.key));
  };

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
          checkedKeys={selectedKeys}
          treeData={treeData}
          className={`${prefixCls}-column-setting`}
          draggable
          onDrop={onDrop}
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
