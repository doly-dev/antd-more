import React from 'react';
import type { FormProps, FormItemProps } from './components/antd.interface';

export type TransformFn<T = any> = (value: T) => T;

export interface FiledContextProps extends Pick<FormProps, 'layout' | 'labelCol' | 'form'> {
  setFieldTransform?: (
    name: FormItemProps['name'],
    transform?: TransformFn | undefined,
    parentList?: FormItemProps['name'][]
  ) => void;
  hideLabel?: boolean;
  labelWidth?: number | string | false | null;
  getPopupContainer?: (e: HTMLElement) => HTMLElement;
  formComponentType?: 'DrawerForm' | 'ModalForm' | 'QueryForm';
}

const FieldContext = React.createContext<FiledContextProps>({
  setFieldTransform: () => {},
  hideLabel: false
});

export default FieldContext;

// 挂着标识到 formItem 上，每个 formItem 设置 name 时，获取标识。
// 如果有多级 List，兼容多层级嵌套
// 需要在 transform 中，添加一个参数用来记录嵌套List的标识
