import * as React from 'react';
import { isArray } from 'ut2';
import { Row, Col } from 'antd';
import { prefixClass } from './config';
import './index.less';

const prefixCls = `${prefixClass}-features`;

const colSpan = {
  xs: 24,
  sm: 12,
  md: 8,
  xxl: 6
};

type Feature = {
  title: React.ReactNode;
  icon?: React.ReactNode;
  description?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
};

export interface FeaturesProps {
  data?: Feature[];
}

const Features: React.FC<FeaturesProps> = ({ data = [] }) => {
  if (!isArray(data) || data.length <= 0) {
    return null;
  }

  return (
    <div className={prefixCls}>
      <Row gutter={[48, 48]}>
        {data.map(({ icon, title, description, onClick }, index) => (
          <Col
            {...colSpan}
            key={(typeof title === 'string' ? title : 'features-item-') + index}
            onClick={onClick}
          >
            <div className={`${prefixCls}-item`}>
              {icon && (
                <div className={`${prefixCls}-item-icon`}>
                  {typeof icon === 'string' ? <img src={icon} alt="" /> : icon}
                </div>
              )}
              <div className={`${prefixCls}-item-content`}>
                {title && <div className={`${prefixCls}-item-title`}>{title}</div>}
                {description && (
                  <div className={`${prefixCls}-item-description`}>{description}</div>
                )}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Features;
