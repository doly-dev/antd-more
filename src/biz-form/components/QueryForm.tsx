import * as React from 'react';
import classnames from 'classnames';
import { Row, Col, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import type { BaseFormProps } from './BaseForm';
import BaseForm from './BaseForm';
import BizFormItem from './Item';
import { useConfig } from '../../biz-config-provider';

const prefixCls = 'antd-more-form';

export interface CollapseProps {
  collapsed: boolean;
  onToggle?: (collapsed: boolean) => void;
}

const Collapse: React.FC<CollapseProps> = React.memo(({ collapsed, onToggle }) => {
  const { locale } = useConfig();
  const handleToggle = () => {
    onToggle?.(!collapsed);
  };
  return (
    <a onClick={handleToggle} className={`${prefixCls}-query-collapse`}>
      {collapsed ? locale.form.common.expand : locale.form.common.collapsed}
      <DownOutlined
        style={{
          marginLeft: '0.5em',
          transition: '0.3s all',
          transform: `rotate(${collapsed ? 0 : 0.5}turn)`
        }}
      />
    </a>
  );
});

export interface QueryFormProps<Values = any> extends BaseFormProps<Values> {
  submitText?: string;
  resetText?: string;
  defaultCollapsed?: boolean;
  defaultColsNumber?: number;
}

const colSpan = {
  xs: 24,
  md: 12,
  lg: 8,
  xxl: 6
};

function QueryForm<Values = any>(props: QueryFormProps<Values>) {
  const { locale } = useConfig();
  const {
    layout = 'horizontal',
    submitter,
    submitText = locale.form.common.search,
    resetText = locale.form.common.reset,
    defaultCollapsed = true,
    defaultColsNumber,
    className,
    ...restProps
  } = props;
  const [collapsed, setCollapsed] = React.useState(defaultCollapsed);

  return (
    <BaseForm
      submitter={{
        submitText,
        resetText,
        // render: (_, dom) => dom.reverse(),
        ...submitter
      }}
      className={classnames(`${prefixCls}-query`, className)}
      layout={layout}
      contentRender={(items, internalSubmitter) => {
        const enabledCollapse =
          typeof defaultColsNumber === 'number' && defaultColsNumber < items.length;
        return (
          <Row gutter={16}>
            {items.map((item: any, index) => {
              const { colProps, ...restItemProps } = item.props;
              const hidden =
                (collapsed && enabledCollapse && index >= defaultColsNumber) ||
                restItemProps?.hidden;
              return (
                <Col
                  key={item?.key || item.name + index.toString()}
                  {...colSpan}
                  {...colProps}
                  style={hidden ? { display: 'none' } : {}}
                >
                  {React.cloneElement(item, restItemProps)}
                </Col>
              );
            })}
            <Col
              style={{
                display: 'flex',
                flex: '1',
                flexWrap: 'nowrap',
                alignItems: 'flex-start',
                justifyContent: 'flex-end'
              }}
            >
              <BizFormItem label=" " colon={false} hideLabel={layout !== 'vertical'}>
                <Space>
                  {internalSubmitter}
                  {enabledCollapse && <Collapse collapsed={collapsed} onToggle={setCollapsed} />}
                </Space>
              </BizFormItem>
            </Col>
          </Row>
        );
      }}
      {...restProps}
      formComponentType="QueryForm"
    />
  );
}

export default QueryForm;
