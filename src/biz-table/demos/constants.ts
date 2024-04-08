// 审核状态
// 1-待审核 2-审核通过 3-审核拒绝
export enum ApproveStatus {
  Processing = '1',
  Approve = '2',
  Refused = '3'
}

// 审核状态选项
export const ApproveStatusOptions = [
  {
    label: '待审核',
    value: ApproveStatus.Processing,
    badge: {
      status: 'processing'
    }
  },
  {
    label: '审核通过',
    value: ApproveStatus.Approve,
    badge: {
      status: 'success'
    }
  },
  {
    label: '审核拒绝',
    value: ApproveStatus.Refused,
    badge: {
      status: 'error'
    }
  }
];

// 银行
export enum Bank {
  BOC = 'BOC',
  BCM = 'BCM',
  ABC = 'ABC'
}

// 银行选项
export const BankOptions = [
  {
    label: '中国银行',
    value: Bank.BOC
  },
  {
    label: '交通银行',
    value: Bank.BCM
  },
  {
    label: '中国农业银行',
    value: Bank.ABC
  }
];
