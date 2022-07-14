import * as React from 'react';
import { Form } from 'antd';
import type { FormItemProps, ColProps } from './antd.interface';
import FieldContext from '../FieldContext';
import ListFieldContext from '../ListFieldContext';
import WrapperFormElement from './form/WrapperFormElement';

// 初始值（可能脱敏）->格式化->验证（转换再验证）
// 输入->格式化->验证（转换再验证）
// 提交->验证（转换再验证）->转换后的值

type TransformFn<T = any> = (value: T, currentPathValues?: any) => T | any;

export interface BizFormItemProps extends FormItemProps {
  transform?: TransformFn;
  colProps?: ColProps;
  extendRules?: FormItemProps['rules'];
  labelWidth?: number | 'auto';
  hideLabel?: boolean;
  renderField?: (dom: React.ReactElement) => React.ReactElement;
  contentBefore?: React.ReactNode;
  contentAfter?: React.ReactNode;
  contentConfig?: {
    align?: React.CSSProperties['alignItems'];
  };
}

const BizFormItem: React.FC<BizFormItemProps> = ({
  children,
  transform,
  renderField,
  name,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  colProps,
  rules = [],
  extendRules = [],
  labelWidth,
  hideLabel,
  labelCol,
  contentBefore,
  contentAfter,
  contentConfig,
  shouldUpdate,
  trigger = 'onChange',
  ...restProps
}) => {
  const {
    setFieldTransform,
    layout,
    hideLabel: formHideLabel,
    labelCol: formLabelCol
  } = React.useContext(FieldContext);
  const { parentListName } = React.useContext(ListFieldContext);

  const labelColProps = React.useMemo(() => {
    const { flex: formLabelFlex, style: formLabelStyle, ...restFormLabelCol } = formLabelCol || {};
    const formLabelColFlex = formLabelFlex && labelWidth !== 'auto' ? { flex: formLabelFlex } : {};
    const labelFlex =
      layout !== 'vertical' && labelWidth && labelWidth !== 'auto'
        ? { flex: `0 0 ${labelWidth}px` }
        : formLabelColFlex;
    const labelStyle = {
      ...formLabelStyle,
      ...(formHideLabel && hideLabel === false ? { display: 'block' } : {}),
      ...(hideLabel ? { display: 'none' } : {}),
      ...labelCol?.style
    };
    const realLabelStyle = Object.keys(labelStyle).length > 0 ? { style: labelStyle } : undefined;
    return {
      ...restFormLabelCol,
      ...labelFlex,
      ...labelCol,
      ...realLabelStyle
    };
  }, [layout, labelWidth, hideLabel, labelCol, formHideLabel, formLabelCol]);

  React.useEffect(() => {
    if (name && transform && setFieldTransform) {
      setFieldTransform(name, transform, parentListName);
    }
  }, [name, parentListName, setFieldTransform, transform]);

  return (
    <Form.Item
      name={name}
      validateFirst
      rules={[...rules, ...extendRules]}
      labelCol={Object.keys(labelColProps).length > 0 ? labelColProps : undefined}
      shouldUpdate={shouldUpdate}
      trigger={trigger}
      {...restProps}
    >
      {shouldUpdate ? (
        (...args) => {
          const innerChildren = typeof children === 'function' ? children(...args) : children;
          return (
            <WrapperFormElement
              before={contentBefore}
              after={contentAfter}
              trigger={trigger}
              {...contentConfig}
            >
              {renderField ? renderField(innerChildren as React.ReactElement) : innerChildren}
            </WrapperFormElement>
          );
        }
      ) : (
        <WrapperFormElement
          before={contentBefore}
          after={contentAfter}
          trigger={trigger}
          {...contentConfig}
        >
          {renderField ? renderField(children as React.ReactElement) : children}
        </WrapperFormElement>
      )}
    </Form.Item>
  );
};

export default BizFormItem;
