// 周期
// 1-日 2-月 3-季
export enum Cycle {
  Day = '1',
  Month = '2',
  Quarter = '3'
}

// 周期选项
export const CycleOptions = [
  {
    label: '按日',
    value: Cycle.Day
  },
  {
    label: '按月',
    value: Cycle.Month
  },
  {
    label: '按季度',
    value: Cycle.Quarter
  }
];

// 返佣周期
// 1-日 2-月
export enum RakebackeCycle {
  Day = '1',
  Month = '2'
}

// 返佣周期选项
export const RakebackeCycleOptions = [
  {
    label: '日返',
    value: RakebackeCycle.Day
  },
  {
    label: '月返',
    value: RakebackeCycle.Month
  }
];

// 收款账号选项
export const BillAccountOptions = [
  {
    label: '张三',
    value: 'a'
  },
  {
    label: '李四',
    value: 'b'
  }
];
