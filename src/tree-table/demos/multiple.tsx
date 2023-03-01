import * as React from 'react';
import { TreeTable } from 'antd-more';
import jsonData from './data3';

const Demo = () => {
  const [value, setValue] = React.useState([]);

  const handleChange = (val) => {
    console.log(val);
    setValue(val);
  };

  return (
    <TreeTable
      treeData={jsonData}
      columnTitles={['一级菜单', '二级菜单']}
      lastColumnMerged
      value={value}
      onChange={handleChange}
    />
  );
};

export default Demo;
