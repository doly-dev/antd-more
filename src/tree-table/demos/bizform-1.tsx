import * as React from 'react';
import { BizForm, BizFormItem, BizFormItemInput, TreeTable } from 'antd-more';
import jsonData from './data1';

const Demo = () => {
  return (
    <BizForm
      name="tree-table-bizform-1"
      initialValues={{
        roles: ['HOME', 'MERCHANT_LIST', 'MERCHANT_QUERY', 'MERCHANT_ADD', 'MERCHANT']
      }}
      onFinish={(values) => {
        console.log(values);
      }}
      layout="vertical"
    >
      <BizFormItemInput label="角色名称" name="roleName" />
      <BizFormItem label="角色权限" name="roles">
        <TreeTable
          treeData={jsonData}
          columnTitles={['一级菜单', '二级菜单', '操作']}
          lastColumnMerged
        />
      </BizFormItem>
    </BizForm>
  );
};

export default Demo;
