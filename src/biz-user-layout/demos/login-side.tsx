/**
 * compact: true
 */
import * as React from 'react';
import { BizUserLayout } from 'antd-more';
import LoginBox from './LoginBox';
import ImageSideBanner from './images/login_banner.jpg';
import styles from './login-side.less';

function Demo() {
  return (
    <BizUserLayout
      className={styles.wrapper}
      logo="https://www.caijinfeng.com/assets/images/logo-doly@3x.png"
      title="antd-more"
      sideBanner={[ImageSideBanner]}
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
