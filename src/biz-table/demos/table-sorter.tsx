import * as React from 'react';
import { Table } from 'antd';
import { isArray, sleep } from 'ut2';

type DataType = {
  name: string;
};

const mockData = [{ name: '' }, { name: '张三' }, { name: '李四' }];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const request = async (params) => {
  // const { current, pageSize, ...restParams } = params;
  await sleep();
  return { data: mockData };
};

const Demo = () => {
  return (
    <Table<DataType>
      dataSource={mockData}
      columns={[
        {
          title: '序号',
          render: (_, r, i) => i.toString(),
          filters: [
            {
              text: '1',
              value: '1'
            }
          ]
        },
        {
          dataIndex: 'name',
          title: '名字',
          sorter: true
        }
      ]}
      rowKey="name"
      onChange={(page, filters, sorter, extra) => {
        console.log(page, filters, sorter, extra);
        if (!isArray(sorter)) {
          console.log(sorter.order);
        }
      }}
    />
  );
};

export default Demo;
