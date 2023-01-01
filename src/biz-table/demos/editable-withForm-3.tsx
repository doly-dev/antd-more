import * as React from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import { Popconfirm, Row, Col } from 'antd';
import type { EditableBizTableActionType, BizTableColumnType } from 'antd-more';
import {
  BizForm,
  BizFormItem,
  BizFormItemInput,
  BizFormItemDate,
  BizFormItemNumber,
  BizTable,
  BizField
} from 'antd-more';
import { formatBankCard } from 'util-helpers';
import Mock from 'mockjs';
import { BankOptions, ApproveStatusOptions } from './constants';

Mock.Random.extend({
  bank() {
    return this.pick(BankOptions.map((item) => item.value));
  }
});

const defaultData = Mock.mock({
  'list|2-5': [
    {
      'id|+1': 1,
      'merchantName|2-5': '@cword',
      bank: '@bank',
      'bankCardNo|100000000-10000000000000000': 1,
      'money|0-10000.2': null,
      materials: [],
      remark: null, // '@cparagraph'
      'status|1': ["1", "2", "3"]
    }
  ]
}).list;

const { EditableBizTable } = BizTable;

const colspanConfig = {
  xxl: 6,
  lg: 8,
  md: 12,
  xs: 24
};

const Demo = () => {
  const [editableKeys, setEditableKeys] = React.useState(() => defaultData.map((item) => item.id));
  const editableActionRef = React.useRef<EditableBizTableActionType>();

  const columns: BizTableColumnType = [
    {
      render: (_, record) => (
        <Popconfirm
          title={`确认删除${record.merchantName}？`}
          onConfirm={() => editableActionRef.current.delete(record.id)}
        >
          <a style={{ fontSize: 20 }}>
            <DeleteOutlined />
          </a>
        </Popconfirm>
      )
    },
    {
      title: '收款方',
      render: (_, record) => {
        return (
          <>
            <div>
              {record.merchantName}
              -
              <BizField value={record.bank} valueType="enum" valueEnum={BankOptions} />
            </div>
            <div>{formatBankCard(`${record.bankCardNo}`)}</div>
          </>
        );
      }
    },
    {
      dataIndex: 'status',
      title: '审核状态',
      valueType: 'enumBadge',
      valueEnum: ApproveStatusOptions,
      width: 120,
      editable: {
        required: true,
        selectProps: {
          allowClear: true
        }
      }
    },
    {
      dataIndex: 'money',
      title: '金额',
      editable: {
        itemType: 'number',
        gt: 0,
        required: true
      }
    },
    {
      dataIndex: 'materials',
      title: '材料文件',
      width: 200,
      editable: {
        itemType: 'upload',
        required: true,
        style: {
          width: 184
        }
      }
    },
    {
      dataIndex: 'remark',
      title: '备注',
      valueType: 'text',
      editable: {
        itemType: 'textarea',
        inputProps: {
          autoSize: true,
          maxLength: 100
        }
      }
    }
  ];

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     const ret = defaultData.slice(0, 1);
  //     console.log(ret);
  //     editableActionRef.current.setDataSource(ret);
  //   }, 3000);
  // });

  return (
    <BizForm
      name="editable-5"
      onFinish={(values) => {
        console.log('onFinish ', values);
      }}
      initialValues={{
        list: defaultData
      }}
      submitter={{
        noReset: true,
        render: (_, dom) => dom
      }}
    >
      <Row gutter={16}>
        <Col {...colspanConfig}>
          <BizFormItemInput label="商品编号" name="goodsNo" />
        </Col>
        <Col {...colspanConfig}>
          <BizFormItemDate label="交易日期" name="tradeDate" />
        </Col>
        <Col {...colspanConfig}>
          <BizFormItemNumber label="终端编号" name="terminalNo" />
        </Col>
      </Row>
      <BizFormItem
        label="付款列表"
        name="list"
        trigger="onValuesChange"
        hideLabel
      >
        <EditableBizTable
          rowKey="id"
          columns={columns}
          editable={{
            editableKeys,
            onChange: setEditableKeys,
            editableActionRef
          }}
          size="middle"
        />
      </BizFormItem>
    </BizForm>
  );
};

export default Demo;
