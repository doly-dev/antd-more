import * as React from 'react';
import { Row, Col } from 'antd';
import classnames from 'classnames';
import type { HeaderProps } from './Header';
import Header from './Header';
import type { BannerProps } from './Banner';
import Banner from './Banner';
import type { SideProps } from './Side';
import Side from './Side';
import type { FeaturesProps } from './Features';
import Features from './Features';
import type { FooterProps } from './Footer';
import Footer from './Footer';
import { prefixClass } from './config';
import './index.less';

const prefixCls = prefixClass;

export interface BizUserLayoutProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>,
    HeaderProps {
  renderHeader?: (props: BizUserLayoutProps) => React.ReactNode; // 自定义渲染头部
  hideHeader?: boolean;
  banner?: BannerProps['data'];
  bannerCarouselProps?: BannerProps['carouselProps'];
  bannerRightContent?: BannerProps['rightContent'];
  sideRowProps?: SideProps['rowProps'];
  sideColProps?: SideProps['colProps'];
  sideBanner?: SideProps['banner'];
  sideBannerCarouselProps?: SideProps['carouselProps'];
  sideContent?: SideProps['content'];
  features?: FeaturesProps['data'];
  footer?: FooterProps;
}

const BizUserLayout: React.FC<BizUserLayoutProps> = (props) => {
  const {
    logo,
    title,
    onClickLogo,
    headerRightContent,
    renderHeader,
    hideHeader,

    banner = [],
    bannerCarouselProps,
    bannerRightContent,

    sideRowProps,
    sideColProps,
    sideBanner = [],
    sideBannerCarouselProps,
    sideContent,

    features = [],

    footer,

    className,
    children,
    ...restProps
  } = props;

  const headerProps = { logo, title, headerRightContent, onClickLogo };
  const bannerProps = {
    data: banner,
    carouselProps: bannerCarouselProps,
    rightContent: bannerRightContent
  };
  const sideProps = {
    rowProps: sideRowProps,
    colProps: sideColProps,
    banner: sideBanner,
    carouselProps: sideBannerCarouselProps,
    content: sideContent
  };

  return (
    <div className={classnames(prefixCls, className)} {...restProps}>
      {!hideHeader &&
        (typeof renderHeader === 'function' ? renderHeader(props) : <Header {...headerProps} />)}
      <main className={`${prefixCls}-content`}>
        <Row gutter={[0, 64]}>
          {banner && banner.length > 0 && (
            <Col span={24}>
              <Banner {...bannerProps} />
            </Col>
          )}
          {(sideBanner.length > 0 || sideContent) && (
            <Col span={24}>
              <Side {...sideProps} />
            </Col>
          )}
          {children && <Col span={24}>{children}</Col>}
          {features && features.length > 0 && (
            <Col span={24}>
              <Features data={features} />
            </Col>
          )}
        </Row>
      </main>
      <Footer {...footer} />
    </div>
  );
};

export default BizUserLayout;
