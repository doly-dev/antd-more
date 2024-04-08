import * as React from 'react';
import { Button, message } from 'antd';
import type { BizTableColumnType } from 'antd-more';
import { BizTable } from 'antd-more';
import { useAsync } from 'rc-hooks';
import Mockjs from 'mockjs';
import { sleep } from 'ut2';
import FreightRule, { FreightRuleType } from './components/FreightRule';

type DataItem = {
  freight: number;
  freightRule: string;
  id: number;
  name: string;
};

const services = {
  async getData() {
    await sleep();
    const { data } = Mockjs.mock({
      'data|3-5': [
        {
          freight: '@float(0.01,999,0,2)',
          'freightRule|1': ['0', '1', '2'],
          'id|+1': 0,
          name: '@city'
        }
      ]
    }) as {
      data: {
        freight: number;
        freightRule: string;
        id: number;
        name: string;
      }[];
    };
    return {
      success: true,
      data: data.map((item) => {
        if (item.freightRule !== FreightRuleType.Need) {
          return {
            ...item,
            freight: 0
          };
        }
        return item;
      })
    };
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async update(data) {
    await sleep();
    return {
      success: true
    };
  }
};

function reducer(state, action) {
  const { type, ...rest } = action;

  switch (type) {
    case 'update':
      if (state.find((item) => item.id === action.id)) {
        return state.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              ...rest
            };
          }
          return item;
        });
      }
      return [...state, rest];
    case 'clear':
      return [];
    default:
      return state;
  }
}

const Freight = () => {
  const [state, dispatch] = React.useReducer(reducer, []);

  const columns: BizTableColumnType<DataItem> = [
    {
      valueType: 'indexBorder'
    },
    {
      title: '地区',
      dataIndex: 'name',
      width: 170
    },
    {
      title: '规则',
      dataIndex: 'freightRule',
      render: (_, record) => {
        const currentState = state.find((item) => item.id === record.id);
        return (
          <FreightRule
            {...record}
            {...currentState}
            onChange={(values) => {
              dispatch({
                type: 'update',
                ...values
              });
            }}
          />
        );
      }
    }
  ];

  const {
    data = [],
    refresh: refreshData,
    loading
  } = useAsync(() => services.getData().then((res) => res.data));
  const { run: update, loading: updating } = useAsync(() => services.update(state), {
    autoRun: false
  });

  const handleUpdate = () => {
    if (!state || state.length === 0) {
      message.info('没有修改项');
      return;
    }
    if (state.find((item) => item.freightRule === FreightRuleType.Need && item.freight === 0)) {
      message.error('运费不能为0');
      return;
    }
    update().then(() => {
      dispatch({ type: 'clear' });
      refreshData();
    });
  };

  return (
    <BizTable
      autoRequest={false}
      dataSource={data}
      columns={columns}
      pagination={false}
      rowKey="id"
      loading={loading || updating}
      toolbar={
        <Button type="primary" onClick={handleUpdate} disabled={loading} loading={updating}>
          更新
        </Button>
      }
      toolbarAction={{
        // fullScreen: true,
        // density: true,
        reload: false // 没有请求
        // columnSetting: true,
      }}
    />
  );
};

export default Freight;
