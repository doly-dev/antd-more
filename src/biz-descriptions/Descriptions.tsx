import * as React from 'react';
import { isArray } from 'ut2';
import { Descriptions } from 'antd';
import type { DescriptionsProps } from 'antd';
import type { DescriptionsItemProps } from 'antd/lib/descriptions/Item';
import BizField from '../biz-field';
import type { BizFieldValueType, EnumData, BizFieldProps } from '../biz-field';
import WithTooltip from './WithTooltip';
import type { WithTooltipProps } from './WithTooltip';
import { useConfig } from '../biz-config-provider';

export interface BizDescriptionsItemProps<DataType extends object = any>
  extends DescriptionsItemProps {
  valueType?: BizFieldValueType;
  valueEnum?: EnumData;
  tooltip?: WithTooltipProps['tooltip'];
  field?:
    | Partial<BizFieldProps>
    | ((text: any, record?: DataType, index?: number) => Partial<BizFieldProps>);
  key?: string | number;
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

function BizDescriptions<DataType extends object = any>(props: BizDescriptionsProps<DataType>) {
  const { bizDescriptions: contextProps } = useConfig();
  const {
    dataSource,
    columns,
    children,
    title: outTitle,
    tooltip,
    ...restProps
  } = { ...contextProps, ...props };
  const title = React.useMemo(
    () => (outTitle && tooltip ? <WithTooltip label={outTitle} tooltip={tooltip} /> : outTitle),
    [outTitle, tooltip]
  );

  const getChilds = (childs) => {
    return React.Children.map(childs, (item: any) => {
      if (item && item?.props) {
        if (item.type === Symbol.for('react.fragment') && item.props.children) {
          return getChilds(item.props.children);
        }
        return createDescriptionsItem(item.props);
      }
      return item;
    });
  };

  const currentDom = getChilds(children);

  if (
    typeof dataSource === 'object' &&
    dataSource !== null &&
    isArray(columns) &&
    columns.length > 0
  ) {
    return (
      <Descriptions title={title} {...restProps}>
        {currentDom}
        {columns.map(
          (
            { title: internalTitle, label: internalLabel, dataIndex, render, ...restColItem },
            index
          ) => {
            let currentDataValue;
            if (isArray(dataIndex)) {
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
    <Descriptions title={title} {...restProps}>
      {currentDom}
    </Descriptions>
  );
}

BizDescriptions.Item = DescriptionsItem;

export default BizDescriptions;
