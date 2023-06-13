import * as React from 'react';
import { TreeTable } from 'antd-more';
import { sleep } from 'ut2';
import jsonData from './data1';

const Demo = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [value, setValue] = React.useState(['MERCHANT_ADD', 'MERCHANT_DETAIL']);

  const handleChange = (val) => {
    console.log(val);
    setValue(val);
  };

  React.useEffect(() => {
    const getData = async () => {
      await sleep();
      setData(jsonData);
      setLoading(false);
    };

    getData();
  }, []);

  return (
    <TreeTable
      treeData={data}
      columnTitles={['一级菜单', '二级菜单', '操作']}
      lastColumnMerged
      value={value}
      onChange={handleChange}
      loading={loading}
    />
  );
};

export default Demo;
