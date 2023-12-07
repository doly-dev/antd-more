import React from 'react';
import {
  BizConfigProvider,
  BizDescriptions,
  BizForm,
  BizFormItemInput,
  BizFormItemNumber,
  BizTable
} from 'antd-more';
import { Divider } from 'antd';

function Demo() {
  return (
    <BizConfigProvider
      bizDescriptions={{
        column: 2,
        bordered: true,
        className: 'context-class',
        size: 'small'
      }}
      bizForm={{
        labelWidth: 120,
        className: 'context-class'
      }}
      bizTable={{
        autoRequest: false,
        pagination: false,
        size: 'small',
        className: 'context-class'
      }}
    >
      <h3>描述列表</h3>
      <h4>读取上下文配置</h4>
      <BizDescriptions>
        <BizDescriptions.Item label="姓名">xxx</BizDescriptions.Item>
        <BizDescriptions.Item label="年龄">xxx</BizDescriptions.Item>
        <BizDescriptions.Item label="身高">xxx</BizDescriptions.Item>
        <BizDescriptions.Item label="体重">xxx</BizDescriptions.Item>
      </BizDescriptions>
      <Divider />
      <h4>部分自定义配置</h4>
      <BizDescriptions column={3} bordered={false} className="custom-class">
        <BizDescriptions.Item label="姓名">xxx</BizDescriptions.Item>
        <BizDescriptions.Item label="年龄">xxx</BizDescriptions.Item>
        <BizDescriptions.Item label="身高">xxx</BizDescriptions.Item>
        <BizDescriptions.Item label="体重">xxx</BizDescriptions.Item>
      </BizDescriptions>
      <Divider />
      <h3>表单</h3>
      <h4>读取上下文配置</h4>
      <BizForm
        name="context-1"
        onFinish={(values) => {
          console.log(values);
        }}
      >
        <BizFormItemInput label="姓名" name="name" />
        <BizFormItemNumber label="年龄" name="age" precision={0} />
      </BizForm>
      <Divider />
      <h4>部分自定义配置</h4>
      <BizForm
        name="context-2"
        className="custom-class"
        layout="vertical"
        onFinish={(values) => {
          console.log(values);
        }}
      >
        <BizFormItemInput label="姓名" name="name" />
        <BizFormItemNumber label="年龄" name="age" precision={0} />
      </BizForm>
      <Divider />
      <h3>表格</h3>
      <h4>读取上下文配置</h4>
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
      />
      <Divider />
      <h4>部分自定义配置</h4>
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
        className="custom-class"
        size="large"
      />
    </BizConfigProvider>
  );
}

export default Demo;
