// .dumi/theme/layouts/GlobalLayout.tsx
import React from 'react';
import { ConfigProvider, theme } from 'antd';
import { useOutlet, usePrefersColor } from 'dumi';

const GlobalLayout: React.FC = () => {
  const outlet = useOutlet();
  // color 为当前应用的主题色，dark or light
  const [color] = usePrefersColor();

  return (
    <ConfigProvider
      theme={{
        algorithm: color === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm
      }}
    >
      {outlet}
    </ConfigProvider>
  );
};

export default GlobalLayout;
