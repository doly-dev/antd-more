import * as React from 'react';
import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons';
import { message, Tooltip } from 'antd';
import TableContext from '../../TableContext';
import { useConfig } from '../../../biz-config-provider';

const FullScreenIcon = () => {
  const { locale } = useConfig();
  const { rootRef, isFullScreen, setFullScreen } = React.useContext(TableContext);

  React.useEffect(() => {
    rootRef.current.onfullscreenchange = (e) => {
      setFullScreen(document.fullscreenElement === e.target);
    };
  }, [rootRef, setFullScreen]);

  const fullScreen = React.useCallback(() => {
    return Promise.resolve(rootRef.current.requestFullscreen());
  }, [rootRef]);

  const toggleFullScreen = React.useCallback(() => {
    if (!document.fullscreenEnabled) {
      message.warning(locale.table.toolbar.unsupportFullScreenTiptext);
      return;
    }

    if (!document.fullscreenElement) {
      fullScreen().catch((err: any) => message.error(err.message));
    } else {
      document.exitFullscreen();
    }
  }, [fullScreen, locale.table.toolbar.unsupportFullScreenTiptext]);

  return isFullScreen ? (
    <Tooltip title={locale.table.toolbar.exitFullScreen}>
      <FullscreenExitOutlined onClick={toggleFullScreen} />
    </Tooltip>
  ) : (
    <Tooltip title={locale.table.toolbar.fullScreen}>
      <FullscreenOutlined onClick={toggleFullScreen} />
    </Tooltip>
  );
};

export default FullScreenIcon;
