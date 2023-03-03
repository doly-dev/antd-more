import * as React from 'react';
import type { TableProps } from 'antd';

type SizeType = TableProps<any>['size'];

export type ColumnConfigKeys = (string | number)[];

export type TableContextProps = {
  size?: SizeType;
  setSize?: (size: SizeType) => void;
  reload?: () => void;
  rootRef?: React.RefObject<HTMLDivElement>;
  isFullScreen?: boolean;
  setFullScreen?: (isFullScreen: boolean) => void;
  columns?: TableProps<any>['columns'];
  columnConfigKeys?: ColumnConfigKeys;
  setColumnConfigKeys?: (keys: ColumnConfigKeys) => void;
};

const TableContext = React.createContext<TableContextProps>({});

export default TableContext;
