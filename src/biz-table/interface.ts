import type { TableColumnType, FormInstance } from 'antd';
import type { SorterResult, TableCurrentDataSource } from 'antd/lib/table/interface';
import type { BizFieldValueType, EnumData, BizFieldProps } from '../biz-field';
import type { BizFormItemProps } from '../biz-form';
import type { ItemTypes } from './_util/constants';
import type { WithTooltipProps } from '../biz-descriptions/WithTooltip';

export interface AsyncFnReturn<D = any> extends Record<string | number, any> {
  data: D[];
  total?: number;
}

export type BizTableActionType = {
  reload: () => void;
  reset: () => void;
  submit: () => void;
  submitAndCurrent: (current: number) => void;
};

export interface RequestParams extends Record<string | number, any> {
  pageSize: number;
  current: number;
}
export interface RequestExtra<RecordType = any>
  extends Pick<TableCurrentDataSource<RecordType>, 'currentDataSource'> {
  action: 'paginate' | 'sort' | 'filter' | 'reload' | 'reset' | 'submit';
}
export type RequestFilters = Record<string, (string | number | boolean)[] | null>;
export type RequestSorter<RecordType> = SorterResult<RecordType> | SorterResult<RecordType>[];

export type BizTableRequest<RecordType = any> = (
  params: RequestParams,
  filters: RequestFilters,
  sorter: RequestSorter<RecordType>,
  extra: RequestExtra<RecordType>
) => Promise<AsyncFnReturn<RecordType>>;

export interface SearchProps<RecordType = any>
  extends Partial<Pick<TableColumnType<RecordType>, 'dataIndex' | 'title'>>,
    Partial<BizFormItemProps>,
    Record<string | number, any> {
  valueType?: BizFieldValueType;
  valueEnum?: EnumData;
  itemType?: keyof typeof ItemTypes;
  order?: number; // 定义查询表单项的排列顺序，越小越靠前。参照flex的order，默认都为0
  render?: (
    originItem: InternalColumnType<RecordType>,
    dom: React.ReactElement,
    form: FormInstance
  ) => React.ReactElement;
}

interface EditableProps<RecordType = any> extends Omit<SearchProps<RecordType>, 'order'> {}

interface InternalColumnType<RecordType = any>
  extends Omit<TableColumnType<RecordType>, 'dataIndex'> {
  dataIndex?: string | number | (string | number)[];
  valueType?: BizFieldValueType;
  valueEnum?: EnumData;
  tooltip?: WithTooltipProps['tooltip'];
  nowrap?: boolean;
  field?:
    | Omit<BizFieldProps, 'value'>
    | ((text: any, record: RecordType, index: number) => Omit<BizFieldProps, 'value'>);
  search?: boolean | SearchProps<RecordType>; // 显示搜索 或 搜索配置
  editable?:
    | boolean
    | EditableProps<RecordType>
    | ((text: any, record: RecordType, index: number) => boolean | EditableProps<RecordType>); // 编辑模式下的配置
  table?: boolean; // 是否显示在表格列中，部分设置列可能只为了设置 search

  /**
   * @deprecated Please set `order` in `search`
   */
  order?: number; // 用于search表单排序，数字越小越靠前
}

interface ColumnGroupType<RecordType> extends Omit<InternalColumnType<RecordType>, 'dataIndex'> {
  children: BizTableColumnType<RecordType>;
}

export type BizTableColumnType<RecordType = any> = (
  | ColumnGroupType<RecordType>
  | InternalColumnType<RecordType>
)[];

type ToolbarActionConfig = {
  fullScreen?: boolean;
  density?: boolean;
  reload?: boolean;
  columnSetting?: boolean;
};

export interface ToolbarActionProps {
  config?: boolean | ToolbarActionConfig;
}
