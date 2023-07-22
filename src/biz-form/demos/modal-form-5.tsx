import * as React from 'react';
import { Button, ConfigProvider } from 'antd';
import type { BizTableRequest, BizTableColumnType, BizTableActionType } from 'antd-more';
import { BizTable } from 'antd-more';
import Mock from 'mockjs';
import { sleep } from 'ut2';
import UpdateModal from './components/UpdateModal';

type DataItem = {
  id: number;
  name: string;
  resume: string;
};

const getDataApi = async ({ pageSize, pageNum }) => {
  await sleep();

  return {
    data: Mock.mock({
      // [`list|${pageSize}`]: [{
      'list|2': [
        {
          'id|+1': pageSize * (pageNum - 1),
          name: '@cname',
          resume: '@cparagraph'
        }
      ]
    }).list,
    total: 100
  };
};

const Demo = () => {
  const [visible, setVisible] = React.useState(false);
  const [editableRecord, setEditablRecord] = React.useState<DataItem>();

  const actionRef = React.useRef<BizTableActionType>();
  const columns: BizTableColumnType<DataItem> = React.useMemo(
    () => [
      {
        title: '姓名',
        dataIndex: 'name',
        width: 100
      },
      {
        title: '简介',
        dataIndex: 'resume'
      },
      {
        title: '操作',
        fixed: 'right',
        width: 80,
        render: (_, record) => (
          <a
            onClick={() => {
              setEditablRecord(record);
              setVisible(true);
            }}
          >
            修改
          </a>
        )
      }
    ],
    []
  );
  const request: BizTableRequest<DataItem> = ({ pageSize, current }) => {
    return getDataApi({
      pageSize,
      pageNum: current
    });
  };

  return (
    <>
      <BizTable
        request={request}
        columns={columns}
        rowKey="id"
        actionRef={actionRef}
        scroll={{
          x: 400
        }}
        toolbar={
          <Button
            type="primary"
            onClick={() => {
              setEditablRecord(undefined);
              setVisible(true);
            }}
          >
            新增
          </Button>
        }
        nowrap={false}
        toolbarAction
      />
      {/* 如果没有使用表格的全屏 toolbarAction.fullScreen ，就不用包裹 ConfigProvider */}
      <ConfigProvider getPopupContainer={() => document.querySelector('.antd-more-table')}>
        <UpdateModal
          visible={visible}
          onVisibleChange={setVisible}
          data={editableRecord}
          onChange={() => {
            // 数据变动后，重新加载数据
            actionRef.current?.reload();
          }}
        />
      </ConfigProvider>
    </>
  );
};

export default Demo;
