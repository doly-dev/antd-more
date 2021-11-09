import * as React from 'react';
import { Descriptions } from 'antd';
import type { DescriptionsProps } from 'antd';
import type { DescriptionsItemProps } from 'antd/lib/descriptions/Item';
import BizField from '../biz-field';
import type { ValueType, EnumData, BizFieldProps } from '../biz-field';
import WithTooltip from './WithTooltip';
import type { WithTooltipProps } from './WithTooltip';

export interface BizDescriptionsItemProps<DataType extends object = any>
  extends DescriptionsItemProps {
  valueType?: ValueType;
  valueEnum?: EnumData;
  tooltip?: WithTooltipProps['tooltip'];
  field?:
    | Partial<BizFieldProps>
    | ((text: any, record?: DataType, index?: number) => Partial<BizFieldProps>);
  key?: React.ReactText;
  dataSource?: DataType;
  index?: number;
}

function createDescriptionsItem<DataType extends object = any>({
  valueType,
  valueEnum,
  children,
  label,
  tooltip,
  field,
  dataSource,
  index,
  ...restProps
}: BizDescriptionsItemProps<DataType>) {
  const fieldProps = typeof field === 'function' ? field(children, dataSource, index) : field;

  return (
    <Descriptions.Item
      label={label && tooltip ? <WithTooltip label={label} tooltip={tooltip} /> : label}
      {...restProps}
    >
      <BizField value={children} valueType={valueType} valueEnum={valueEnum} {...fieldProps} />
    </Descriptions.Item>
  );
}

const DescriptionsItem: React.FC<BizDescriptionsItemProps> = (props) =>
  createDescriptionsItem(props);

type DataIndex = string | number;

export interface BizDescriptionsColumnItemProps<DataType extends object = any>
  extends Omit<BizDescriptionsItemProps<DataType>, 'children' | 'field'> {
  field?:
    | Partial<BizFieldProps>
    | ((text: any, record: DataType, index: number) => Partial<BizFieldProps>);
  dataIndex?: DataIndex | DataIndex[];
  title?: React.ReactNode;
  render?: (value: any, dataSource: DataType, index: number) => React.ReactNode;
}

export interface BizDescriptionsProps<DataType extends object = any> extends DescriptionsProps {
  dataSource?: DataType;
  columns?: BizDescriptionsColumnItemProps<DataType>[];
  tooltip?: WithTooltipProps['tooltip'];
}

function BizDescriptions<DataType extends object = any>({
  dataSource,
  columns,
  children,
  title,
  tooltip,
  column,
  ...restProps
}: BizDescriptionsProps<DataType>) {
  const defaultProps = React.useMemo(
    () => ({
      title: title && tooltip ? <WithTooltip label={title} tooltip={tooltip} /> : title,
      column: column || { xs: 1, md: 2, lg: 3, xxl: 4 }
    }),
    [title, tooltip, column]
  );

  const currentDom = React.Children.map(children, (item: any) =>
    createDescriptionsItem(item.props)
  );

  if (
    typeof dataSource === 'object' &&
    dataSource !== null &&
    Array.isArray(columns) &&
    columns.length > 0
  ) {
    return (
      <Descriptions {...defaultProps} {...restProps}>
        {currentDom}
        {columns.map(
          (
            { title: internalTitle, label: internalLabel, dataIndex, render, ...restColItem },
            index
          ) => {
            let currentDataValue;
            if (Array.isArray(dataIndex)) {
              currentDataValue = dataIndex.map((subItem) => dataSource[subItem]);
            } else if (typeof dataIndex === 'string' || typeof dataIndex === 'number') {
              currentDataValue = dataSource[dataIndex];
            } else {
              currentDataValue = dataSource;
            }

            const child =
              typeof render === 'function'
                ? render(currentDataValue, dataSource, index)
                : currentDataValue;

            return createDescriptionsItem({
              key: index,
              label: internalLabel || internalTitle,
              children: child,
              dataSource,
              index,
              ...restColItem
            });
          }
        )}
      </Descriptions>
    );
  }

  return (
    <Descriptions {...defaultProps} {...restProps}>
      {currentDom}
    </Descriptions>
  );
}

BizDescriptions.Item = DescriptionsItem;

export default BizDescriptions;
