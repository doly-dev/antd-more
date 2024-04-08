/**
 * compact: true
 */
import * as React from 'react';
import { GithubOutlined } from '@ant-design/icons';
import { BizUserLayout } from 'antd-more';
import LoginBox from './LoginBox';

function Demo() {
  return (
    <BizUserLayout
      logo={<img src="https://doly-dev.github.io/logo.png" alt="LOGO" />}
      title="antd-more"
      banner={[
        'https://dummyimage.com/1920x400',
        'https://dummyimage.com/1920x400',
        'https://dummyimage.com/1920x400'
      ]}
      bannerRightContent={<LoginBox />}
      sideBanner={[
        'https://dummyimage.com/500x500',
        'https://dummyimage.com/500x500',
        'https://dummyimage.com/500x500'
      ]}
      sideContent={
        <div style={{ maxWidth: 450, margin: '0 auto' }}>
          <LoginBox />
        </div>
      }
      features={[
        {
          icon: 'https://dummyimage.com/80x80',
          title: '统计精准、数据安全稳定',
          description: '依托大数据能力输出，算法科学，数据安全有保障'
        },
        {
          icon: 'https://dummyimage.com/80x80',
          title: '功能丰富、进阶分析强大',
          description: '基础报表完善，涵盖留存、新增、漏斗高级分析功能'
        },
        {
          icon: 'https://dummyimage.com/80x80',
          title: '平台运营、展业轻松不累',
          description: '完善的全面管理工具，经营数据分析，助您高效运营'
        }
      ]}
      footer={{
        links: [
          {
            text: 'antd-more',
            link: 'https://doly-dev.github.io/antd-more/latest/index.html#/components'
          },
          {
            icon: <GithubOutlined />,
            link: 'https://github.com/doly-dev/antd-more'
          },
          {
            text: 'doly-icons',
            link: 'https://doly-dev.github.io/doly-icons/latest/index.html#/icons'
          }
        ],
        copyright: `©️ 2020-${new Date().getFullYear()} doly-dev`
      }}
    />
  );
}

export default Demo;
