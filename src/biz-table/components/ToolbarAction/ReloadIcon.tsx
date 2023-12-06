import * as React from 'react';
import { Tooltip } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';
import TableContext from '../../TableContext';
import { useConfig } from '../../../biz-config-provider';

const DensityIcon = () => {
  const { locale } = useConfig();
  const { reload } = React.useContext(TableContext);

  return (
    <Tooltip title={locale.table.toolbar.reload}>
      <ReloadOutlined onClick={reload} />
    </Tooltip>
  );
};

export default DensityIcon;
