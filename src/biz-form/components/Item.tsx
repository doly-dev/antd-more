import * as React from 'react';
import { Form } from 'antd';
import type { FormItemProps, ColProps } from './antd.interface';
import type { FiledContextProps } from '../FieldContext';
import FieldContext from '../FieldContext';
import ListFieldContext from '../ListFieldContext';
import WrapperFormElement from './form/WrapperFormElement';
import classNames from 'classnames';
import '../index.less';

const formItemPlaceholderLabelClass = 'antd-more-form-item-placeholder-label';

// 初始值（可能脱敏）->格式化->验证（转换再验证）
// 输入->格式化->验证（转换再验证）
// 提交->验证（转换再验证）->转换后的值

type TransformFn<T = any> = (value: T, currentPathValues?: any) => T | any;

export interface BizFormItemProps
  extends FormItemProps,
    Pick<FiledContextProps, 'hideLabel' | 'labelWidth'> {
  transform?: TransformFn;
  colProps?: ColProps;
  extendRules?: FormItemProps['rules'];
  placeholderLabel?: boolean;
  renderField?: (dom: React.ReactElement) => React.ReactElement;
  contentBefore?: React.ReactNode;
  contentAfter?: React.ReactNode;
  contentConfig?: {
    align?: React.CSSProperties['alignItems'];
  };
}

const BizFormItem: React.FC<BizFormItemProps> & {
  useStatus: typeof Form.Item.useStatus;
} = ({
  children,
  transform,
  renderField,
  name,
  label,
  colon,
  className,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  colProps,
  rules = [],
  extendRules = [],
  labelWidth,
  placeholderLabel,
  hideLabel,
  labelCol,
  contentBefore,
  contentAfter,
  contentConfig,
  shouldUpdate,
  ...restProps
}) => {
  const {
    setFieldTransform,
    hideLabel: formHideLabel,
    labelWidth: formLabelWidth,
    labelCol: formLabelCol
  } = React.useContext(FieldContext);
  const { parentListName } = React.useContext(ListFieldContext);

  const labelColProps = React.useMemo(() => {
    const { style: formLabelStyle, ...restFormLabelCol } = formLabelCol || {};
    const internalLabelWidth = typeof labelWidth !== 'undefined' ? labelWidth : formLabelWidth;
    const internalHideLabel = typeof hideLabel !== 'undefined' ? hideLabel : formHideLabel;
    const labelStyle: React.CSSProperties = {};
    if (internalHideLabel) {
      labelStyle.display = 'none';
    }
    if (
      internalLabelWidth !== false &&
      internalLabelWidth !== null &&
      typeof internalLabelWidth !== 'undefined'
    ) {
      labelStyle.width = internalLabelWidth;
    }
    return {
      ...restFormLabelCol,
      ...labelCol,
      style: {
        ...formLabelStyle,
        ...labelStyle,
        ...labelCol?.style
      }
    };
  }, [labelWidth, hideLabel, labelCol, formHideLabel, formLabelWidth, formLabelCol]);

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
      labelCol={labelColProps}
      shouldUpdate={shouldUpdate}
      label={label !== undefined ? label : placeholderLabel ? ' ' : undefined}
      colon={colon !== undefined ? colon : placeholderLabel ? false : undefined}
      className={classNames(className, { [formItemPlaceholderLabelClass]: placeholderLabel })}
      {...restProps}
    >
      {shouldUpdate ? (
        (...args) => {
          const innerChildren = typeof children === 'function' ? children(...args) : children;
          return (
            <WrapperFormElement before={contentBefore} after={contentAfter} {...contentConfig}>
              {renderField ? renderField(innerChildren as React.ReactElement) : innerChildren}
            </WrapperFormElement>
          );
        }
      ) : (
        <WrapperFormElement before={contentBefore} after={contentAfter} {...contentConfig}>
          {renderField ? renderField(children as React.ReactElement) : children}
        </WrapperFormElement>
      )}
    </Form.Item>
  );
};

BizFormItem.useStatus = Form.Item.useStatus;

export default BizFormItem;
