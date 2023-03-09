/**
 * compact: true
 */
import * as React from 'react';
import { BizUserLayout } from 'antd-more';
import LoginBox from './LoginBox';
import BackgroundImage from './images/bg-login.jpg';
import styles from './login-fullscreen.module.less';

function Demo() {
  return (
    <BizUserLayout
      className={styles.wrapper}
      title="antd-more"
      banner={[BackgroundImage]}
      bannerRightContent={<LoginBox />}
    />
  );
}

export default Demo;
