import * as React from 'react';
import { Form } from 'antd';
import type { FormListProps } from './antd.interface';
import ListFieldContext from '../ListFieldContext';

export interface BizFormListProps extends FormListProps {}

const BizFormList: React.FC<BizFormListProps> = ({ children, name, ...restProps }) => {
  const { parentListName = [] } = React.useContext(ListFieldContext); // FormList嵌套FormList的情况

  return (
    <ListFieldContext.Provider value={{ parentListName: [...parentListName, name] }}>
      <Form.List name={name} {...restProps}>
        {children}
      </Form.List>
    </ListFieldContext.Provider>
  );
};

export default BizFormList;
