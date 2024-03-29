import * as React from 'react';
import BizTableBase from './BizTable';
import type { BizTableProps } from './BizTable';
import EditableBizTable from './EditableBizTable';
import type {
  EditableBizTableProps,
  EditableBizTableActionType,
  EditableBizTableEditable
} from './EditableBizTable';
import type { BizTableActionType, BizTableRequest, BizTableColumnType } from './interface';

function BizTable<RecordType extends object = any>(props: BizTableProps<RecordType>) {
  return <BizTableBase<RecordType> {...props} />;
}

BizTable.EditableBizTable = EditableBizTable;

export type {
  BizTableActionType,
  BizTableRequest,
  BizTableColumnType,
  BizTableProps,
  EditableBizTableProps,
  EditableBizTableActionType,
  EditableBizTableEditable
};

export default BizTable;
