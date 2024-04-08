import * as React from 'react';
import { Space, Tooltip } from 'antd';
import type { TooltipProps } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

type WrapperTooltipProps = TooltipProps & {
  icon?: React.ReactNode;
};

export interface WithTooltipProps {
  label?: React.ReactNode;
  tooltip?: TooltipProps['title'] | WrapperTooltipProps;
}

function toTooltipProps(props: WithTooltipProps['tooltip']): WrapperTooltipProps | null {
  if (!props) {
    return null;
  }
  if (typeof props === 'object' && !React.isValidElement(props)) {
    return props as WrapperTooltipProps;
  }

  return {
    title: props
  };
}

const WithTooltip: React.FC<WithTooltipProps> = ({ label, tooltip }) => {
  if (!label) {
    return null;
  }

  const tooltipProps = toTooltipProps(tooltip);

  if (tooltipProps) {
    const { icon = <InfoCircleOutlined />, ...restTooltipProps } = tooltipProps;

    return (
      <Space size={4}>
        {label}
        <Tooltip {...restTooltipProps}>{icon}</Tooltip>
      </Space>
    );
  }

  return label as React.ReactElement;
};

export default WithTooltip;
