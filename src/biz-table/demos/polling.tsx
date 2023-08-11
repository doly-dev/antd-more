import * as React from 'react';
import type { BizTableRequest, BizTableColumnType, BizTableActionType } from 'antd-more';
import { BizTable } from 'antd-more';
import { getApplyList } from './service';
import type { DataItem } from './service';
import { Space, Switch } from 'antd';

const columns: BizTableColumnType<DataItem> = [
  {
    valueType: 'indexBorder'
  },
  {
    dataIndex: 'applyCode',
    title: '申请编号',
    tooltip: '提示文字',
    search: true
  },
  {
    dataIndex: 'createTime',
    title: '提交时间',
    valueType: 'dateTime',
    search: {
      valueType: 'date',
      order: 1
    }
  },
  {
    dataIndex: 'applicantName',
    title: '经办员'
  },
  {
    dataIndex: 'approveTime',
    title: '审核时间',
    tooltip: '提示文字',
    sorter: true,
    valueType: 'dateTime',
    search: {
      valueType: 'dateTimeRange',
      names: ['startTime', 'endTime'],
      colProps: { lg: 12, md: 24 },
      order: 2
    }
  },
  {
    dataIndex: 'approverName',
    title: '审核员',
    search: true
  }
];

const Demo = () => {
  const [polling, setPolling] = React.useState(false);
  const actionRef = React.useRef<BizTableActionType>();
  const request: BizTableRequest<DataItem> = (params, filters, sorter, extra) => {
    const { pageSize, current, ...restParams } = params;
    console.log(params, filters, sorter, extra);

    return getApplyList({
      page: {
        pageSize,
        pageNum: current
      },
      data: restParams
    }).then((res) => {
      return {
        total: res.pageInfo.total,
        data: res.data
      };
    });
  };

  const handleChangePolling = (val: boolean) => {
    setPolling(val);

    if (val) {
      // 此处使用延时，是因为 pollingInterval 依赖 polling 配置，所以要等 setState 更新后再触发请求。
      setTimeout(() => {
        // 开启后需要触发一次请求才生效
        actionRef.current?.reload();
      });
    }
  }

  return (
    <div>
      <Space style={{ marginBottom: 16 }}>
        自动轮询<Switch checkedChildren="开启" unCheckedChildren="关闭" checked={polling} onChange={handleChangePolling} />
      </Space>

      <BizTable
        request={request}
        columns={columns}
        rowKey="applyCode"
        toolbarAction
        actionRef={actionRef}
        asyncOptions={{
          pollingInterval: polling ? 3000 : undefined
        }}
      />
    </div>
  );
};

export default Demo;
