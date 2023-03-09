/**
 * compact: true
 */
import * as React from 'react';
import { BizUserLayout } from 'antd-more';
import LoginBox from './LoginBox';
import ImageSideBanner from './images/login_banner.jpg';
import styles from './login-side.module.less';

function Demo() {
  return (
    <BizUserLayout
      className={styles.wrapper}
      logo={<img src="https://doly-dev.github.io/logo.png" alt="LOGO" />}
      title="antd-more"
      sideBanner={[ImageSideBanner]}
      sideRowProps={{
        style: {
          flexDirection: 'row-reverse'
        }
      }}
      sideContent={
        <div style={{ maxWidth: 450, margin: '0 auto' }}>
          <LoginBox />
        </div>
      }
      footer={{
        copyright: `©️ ${new Date().getFullYear()} doly-dev`
      }}
    />
  );
}

export default Demo;
