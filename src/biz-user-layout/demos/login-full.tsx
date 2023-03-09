/**
 * compact: true
 */
import * as React from 'react';
import { BizUserLayout } from 'antd-more';
import LoginBox from './LoginBox';
import styles from './login-full.module.less';

function Demo() {
  return (
    <BizUserLayout
      className={styles.wrapper}
      title="antd-more"
      banner={['https://dummyimage.com/1920x400', 'https://dummyimage.com/1920x400']}
      bannerRightContent={<LoginBox />}
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
        copyright: `©️ ${new Date().getFullYear()} doly-dev`
      }}
    />
  );
}

export default Demo;
