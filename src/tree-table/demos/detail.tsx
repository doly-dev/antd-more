import * as React from 'react';
import { TreeTable } from 'antd-more';
import jsonData from './data1';

function Demo() {
  return (
    <TreeTable
      treeData={jsonData}
      columnTitles={['一级菜单', '二级菜单', '操作']}
      lastColumnMerged
      halfToChecked
      hideCheckbox
      size="small"
    // 异步加载数据可以添加loading状态
    // locale={
    //   loading
    //     ? {
    //         emptyText: '数据加载中...',
    //       }
    //     : undefined
    // }
    />
  );
}

export default Demo;