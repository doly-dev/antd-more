import * as React from 'react';
import type { CarouselProps, ColProps, RowProps } from 'antd';
import { Carousel, Row, Col } from 'antd';
import type { BannerItem, BannerItemObject } from './Banner';
import { prefixClass } from './config';
import './Side.less';

const prefixCls = `${prefixClass}-side`;

const defaultColSpan = {
  xs: 24,
  md: 12
};

export interface SideProps {
  rowProps?: RowProps;
  colProps?: ColProps | [ColProps, ColProps];
  banner?: BannerItem[];
  carouselProps?: CarouselProps;
  content?: React.ReactNode;
}

const Side: React.FC<SideProps> = ({ rowProps, colProps, banner = [], carouselProps, content }) => {
  const calcColProps = React.useMemo(() => {
    if (Array.isArray(colProps)) {
      return colProps;
    }
    return [colProps, colProps];
  }, [colProps]);

  return (
    <div className={prefixCls}>
      <Row gutter={[24, 24]} align="middle" {...rowProps}>
        <Col className={`${prefixCls}-banner`} {...defaultColSpan} {...calcColProps[0]}>
          {
            banner && banner.length > 0 && (
              <Carousel autoplay={banner.length > 1} {...carouselProps}>
                {banner.map((itemBanner, index) => {
                  const isReactElement = React.isValidElement(itemBanner);

                  let src = '';
                  let title = '';
                  let link, onClick;

                  if (!isReactElement) {
                    if (typeof itemBanner === 'string') {
                      src = itemBanner;
                    } else {
                      src = (itemBanner as BannerItemObject).src;
                      link = (itemBanner as BannerItemObject).link;
                      title = (itemBanner as BannerItemObject).title;
                      onClick = (itemBanner as BannerItemObject).onClick;
                    }
                  }

                  const key = isReactElement ? itemBanner.key : src + index;

                  return (
                    <div className={`${prefixCls}-item`} key={key}>
                      {isReactElement ? (
                        itemBanner
                      ) : link || onClick ? (
                        <a href={link} title={title} onClick={onClick}>
                          <img src={src} alt={title} />
                        </a>
                      ) : (
                        <img src={src} alt={title} />
                      )}
                    </div>
                  );
                })}
              </Carousel>
            )
          }
        </Col>
        <Col className={`${prefixCls}-content`} {...defaultColSpan} {...calcColProps[1]}>
          {content}
        </Col>
      </Row>
    </div>
  );
};

export default Side;
