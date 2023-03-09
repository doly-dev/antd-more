/**
 * compact: true
 */
import * as React from 'react';
import { BizUserLayout } from 'antd-more';
import LoginBox from './LoginBox';
import BackgroundImage from './images/bg-login.jpg';
import styles from './login-fullscreen-column.module.less';

function Demo() {
  return (
    <BizUserLayout
      className={styles.wrapper}
      hideHeader
      sideRowProps={{
        gutter: 0
      }}
      sideBanner={[BackgroundImage]}
      sideContent={
        <div className={styles.content}>
          <div style={{ padding: 16, textAlign: 'right' }}>
            <h1>LOGO</h1>
          </div>
          <div style={{ maxWidth: 450, margin: '0 auto' }}>
            <LoginBox />
          </div>
        </div>
      }
    />
  );
}

export default Demo;
