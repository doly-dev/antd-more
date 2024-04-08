// 审核状态
// 1-审核中 2-审核通过 3-审核不通过
export enum ApproveStatus {
  Processing = '1',
  Approve = '2',
  Refused = '3'
}

// 审核状态选项
export const ApproveStatusOptions = [
  {
    value: ApproveStatus.Processing,
    label: '审核中',
    badge: {
      status: 'processing'
    },
    tag: {
      alias: '待审核',
      color: 'orange'
    }
  },
  {
    value: ApproveStatus.Approve,
    label: '审核通过',
    text: {
      style: {
        color: 'green'
      }
    },
    badge: {
      status: 'success'
    },
    tag: {
      color: 'green'
    }
  },
  {
    value: ApproveStatus.Refused,
    label: '审核不通过',
    text: {
      style: {
        color: 'red'
      }
    },
    badge: {
      status: 'error'
    },
    tag: {
      color: 'red'
    }
  }
];
