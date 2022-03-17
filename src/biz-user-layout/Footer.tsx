import * as React from 'react';
import { Space } from 'antd';
import { prefixClass } from './config';
import './Footer.less';

const prefixCls = `${prefixClass}-footer`;

type FooterLinkItem = {
  text?: React.ReactNode;
  icon?: React.ReactNode;
  link?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  links?: FooterLinkItem[];
  copyright?: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({ links = [], copyright, children }) => {
  return (
    <div className={`${prefixCls}`}>
      {children}
      {links && links.length > 0 && (
        <Space className={`${prefixCls}-links`} size="large">
          {links.map((itemLink, index) => (
            <a href={itemLink?.link} onClick={itemLink?.onClick} key={'footer-links-' + index}>
              {itemLink?.icon &&
                (typeof itemLink.icon === 'string' ? (
                  <img src={itemLink.icon} alt="" />
                ) : (
                  itemLink.icon
                ))}
              {itemLink.text}
            </a>
          ))}
        </Space>
      )}
      {copyright && <div className={`${prefixCls}-copyright`}>{copyright}</div>}
    </div>
  );
};

export default Footer;
