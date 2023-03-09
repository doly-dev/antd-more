import * as React from 'react';
import { TreeTable } from 'antd-more';
import jsonData from './data1';
import styles from './detail.module.less';

function Demo() {
  return (
    <TreeTable
      treeData={jsonData}
      columnTitles={['一级菜单', '二级菜单', '操作']}
      lastColumnMerged
      halfToChecked
      className={styles.wrapper}
      size="small"
    // loading={loading}
    // locale={{
    //   emptyText: '数据加载中...',
    // }}
    />
  );
}

export default Demo;