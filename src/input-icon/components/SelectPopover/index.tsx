import * as React from 'react';
import { Popover } from 'antd';
import type { PopoverProps } from 'antd';
import SelectPanel from '../SelectPanel';
import type { SelectPanelProps } from '../SelectPanel';

import './index.less';

export interface SelectPopoverProps
  extends PopoverProps,
    Pick<SelectPanelProps, 'options' | 'onSelect' | 'showSearch' | 'column'> {}

const SelectPopover: React.FC<SelectPopoverProps> = ({
  trigger = 'click',
  placement = 'bottom',
  children,
  options,
  onSelect,
  showSearch,
  column,
  ...restProps
}) => {
  const [open, setOpen] = React.useState(false);
  const [rect, setRect] = React.useState<Record<string, any>>();
  const ref = React.useRef(null);

  const handleSelect = React.useCallback(
    (val) => {
      setOpen(false);
      onSelect?.(val);
    },
    [onSelect]
  );

  React.useEffect(() => {
    if (open) {
      setRect(ref.current.getBoundingClientRect());
    }
  }, [open]);

  return (
    <Popover
      trigger={trigger}
      placement={placement}
      open={open}
      onOpenChange={setOpen}
      content={
        <SelectPanel
          onSelect={handleSelect}
          options={options}
          showSearch={showSearch}
          column={column}
          visible={open}
          style={{ width: typeof rect?.width === 'number' ? rect.width - 32 : 'auto' }}
        />
      }
      {...restProps}
    >
      <div ref={ref}>{children}</div>
    </Popover>
  );
};

export default SelectPopover;
