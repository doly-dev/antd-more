import * as React from 'react';
import classnames from 'classnames';
import { Form, Row, Col, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import type { BaseFormProps } from './BaseForm';
import BaseForm from './BaseForm';

const prefixCls = 'antd-more-form';

export interface CollapseProps {
  collapsed: boolean;
  onToggle?: (collapsed: boolean) => void;
}

const Collapse: React.FC<CollapseProps> = React.memo(({ collapsed, onToggle }) => {
  const handleToggle = () => {
    onToggle?.(!collapsed);
  };
  return (
    <a onClick={handleToggle} className={`${prefixCls}-query-collapse`}>
      {collapsed ? '展开' : '收起'}
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

const formItemHideLabelClass = 'antd-more-form-item-hide-label';

export interface QueryFormProps extends BaseFormProps {
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

const QueryForm: React.FC<QueryFormProps> = (props) => {
  const {
    layout = 'horizontal',
    submitter,
    submitText = '查询',
    resetText = '重置',
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
              const hidden = collapsed && enabledCollapse && index >= defaultColsNumber;
              return (
                <Col
                  key={item?.key || item.name + index.toString()}
                  {...colSpan}
                  {...colProps}
                  style={hidden ? { display: 'none' } : {}}
                >
                  {React.cloneElement(item, {
                    hidden,
                    ...restItemProps
                  })}
                </Col>
              );
            })}
            <Col
              style={{
                display: 'flex',
                flex: 'auto',
                flexWrap: 'nowrap',
                alignItems: 'flex-start',
                justifyContent: 'flex-end'
              }}
            >
              <Form.Item
                label=" "
                colon={false}
                className={layout !== 'vertical' ? formItemHideLabelClass : ''}
              >
                <Space>
                  {internalSubmitter}
                  {enabledCollapse && <Collapse collapsed={collapsed} onToggle={setCollapsed} />}
                </Space>
              </Form.Item>
            </Col>
          </Row>
        );
      }}
      {...restProps}
    />
  );
};

export default QueryForm;
