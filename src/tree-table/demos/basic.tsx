import * as React from 'react';
import { Switch, Space, Tooltip } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { TreeTable } from 'antd-more';
import jsonData from './data1';

const Demo = () => {
  const [lastColumnMerged, setLastColumnMerged] = React.useState(true);
  const [halfToChecked, setHalfToChecked] = React.useState(false);

  const [value, setValue] = React.useState([
    'HOME',
    'MERCHANT_LIST',
    'MERCHANT_QUERY',
    'MERCHANT_ADD',
    'MERCHANT'
  ]);

  const handleChange = (val) => {
    console.log(val);
    setValue(val);
  };

  return (
    <>
      <Space>
        <div>
          lastColumnMerged{' '}
          <Tooltip title="最后一列合并展示">
            <ExclamationCircleOutlined />
          </Tooltip>{' '}
          : <Switch checked={lastColumnMerged} onChange={setLastColumnMerged} />
        </div>
        <div>
          halfToChecked{' '}
          <Tooltip title="半勾选转换为勾选，会影响onChange参数值">
            <ExclamationCircleOutlined />
          </Tooltip>{' '}
          : <Switch checked={halfToChecked} onChange={setHalfToChecked} />
        </div>
      </Space>
      <br />
      <br />
      <TreeTable
        treeData={jsonData}
        columnTitles={['一级菜单', '二级菜单', '操作']}
        value={value}
        onChange={handleChange}
        lastColumnMerged={lastColumnMerged}
        halfToChecked={halfToChecked}
      />
    </>
  );
};

export default Demo;
