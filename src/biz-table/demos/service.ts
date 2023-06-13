import Mock from 'mockjs';
import { sleep } from 'ut2';
import type { ApproveStatus } from './constants';

export type DataItem = {
  applyCode: string;
  applicantName: string;
  approverName: string;
  createTime: string;
  approveTime: string;
  approveResult: ApproveStatus;
  money: number;
  remark: string;
};

type ApplyListResponse = {
  data: DataItem[];
  pageInfo: {
    total: number;
    pages: number;
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const applyList = ({ page: { pageNum, pageSize }, data = {} }) =>
  Mock.mock({
    [`data|${pageSize}`]: [
      {
        applyCode: '@word(6)',
        applicantName: '@cname',
        approverName: '@cname',
        createTime: '@datetime',
        approveTime: '@datetime',
        'approveResult|1': ["1", "2", "3"],
        'money|0-10000.0-2': 0,
        remark: '@cword(10,20)'
      }
    ],
    pageInfo: {
      total: 50,
      pages: 10
    }
  }) as ApplyListResponse;

export async function getApplyList(params) {
  await sleep();
  return applyList(params);
}
