import * as React from 'react';
import { Dropdown, Tooltip } from 'antd';
import { ColumnHeightOutlined } from '@ant-design/icons';
import TableContext from '../../TableContext';
import type { TableContextProps } from '../../TableContext';
import { useConfig } from '../../../biz-config-provider';

const DensityIcon = () => {
  const { locale } = useConfig();
  const { size, setSize } = React.useContext(TableContext);

  return (
    <Dropdown
      menu={{
        style: {
          width: 80
        },
        selectedKeys: [!size || size === 'large' ? 'default' : size],
        onClick({ key }) {
          setSize?.(key as TableContextProps['size']);
        },
        items: [
          {
            label: locale.table.toolbar.densityDefault,
            key: 'default'
          },
          {
            label: locale.table.toolbar.densityMiddle,
            key: 'middle'
          },
          {
            label: locale.table.toolbar.densitySmall,
            key: 'small'
          }
        ]
      }}
      trigger={['click']}
    >
      <Tooltip title={locale.table.toolbar.density}>
        <ColumnHeightOutlined />
      </Tooltip>
    </Dropdown>
  );
};

export default DensityIcon;
