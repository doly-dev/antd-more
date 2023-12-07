import React from 'react';
import { BizTable } from 'antd-more';

function Demo() {
  return (
    <BizTable
      dataSource={[
        { name: '张三', age: 18 },
        { name: '李四', age: 22 }
      ]}
      columns={[
        { dataIndex: 'name', title: '姓名' },
        { dataIndex: 'age', title: '年龄' }
      ]}
      rowKey="name"
      pagination={{ pageSize: 1, showSizeChanger: false }}
      autoRequest={false}
    />
  );
}

export default Demo;
