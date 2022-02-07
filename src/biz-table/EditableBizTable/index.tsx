import * as React from 'react';
import { useUpdateEffect } from 'rc-hooks';
import type { BizFormProps } from '../../biz-form';
import type { TransformRecordActionType } from '../../biz-form/components/BaseForm';
import { BizForm } from '../../biz-form';
import { transformFormValues } from '../../biz-form/_util/transform';
import ChildFormContext from '../../biz-form/ChildFormContext';
import type { BizTableProps } from '../BizTable';
import BizTable from '../BizTable';
import createUniqueId from '../_util/createUniqueId';
import getRowKey from '../_util/getRowKey';

type Key = string | number;

function getAddRecordIndex(index, len): number {
  if (typeof index !== 'number' || Number.isNaN(index)) {
    return len;
  }
  if (index <= 0) {
    return 0;
  }
  if (len <= 0) {
    return 0;
  }
  if (index >= len) {
    return len;
  }
  return index;
}

export interface EditableBizTableActionType<RecordType = any> {
  save: (rowKey: Key) => void;
  delete: (rowKey: Key) => void;
  cancel: (rowKey: Key) => void;
  add: (record: RecordType, index?: number) => void;
  edit: (rowKey: Key) => void;

  setFields: (rowKey: Key, record: Partial<RecordType>) => void; // 设置单行表单值
  reset: (rowKey?: Key) => void; // 重置单行表单或全部
  clearNewRecords: () => void; // 清除全部新增项
  getNewRecords: () => void; // 获取所有新增项
  setDataSource: (records: RecordType[]) => void; // 手动设置数据源
}

export interface EditableBizTableEditable<RecordType = any> {
  onSave?: (rowKey: Key, record: RecordType, isNewRecord: boolean) => Promise<any>;
  onDelete?: (rowKey: Key, record: RecordType, isNewRecord: boolean) => Promise<any>;
  editableKeys?: Key[];
  onChange?: (editableKeys: Key[], editableRow: Partial<RecordType>) => void;
  editableActionRef?: React.MutableRefObject<EditableBizTableActionType<RecordType> | undefined>;
  formProps?: Omit<
    BizFormProps,
    'form' | 'name' | 'onValuesChange' | 'transformRecordActionRef' | 'component'
  >;
}

export interface EditableBizTableProps<RecordType extends object = any>
  extends Omit<BizTableProps<RecordType>, 'onChange'> {
  onValuesChange?: (values: RecordType[]) => void;
  value?: RecordType[];
  editable?: EditableBizTableEditable<RecordType>;

  // 保存 或 删除后需要更新表格数据
  onChange?: (values: RecordType[]) => void;
  onTableChange?: BizTableProps<RecordType>['onChange'];
}

const EditableBizTable = <RecordType extends object = any>({
  value: outValue,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  dataSource,
  onValuesChange,
  editable,
  onChange,
  onTableChange,

  rowKey: outRowKey,
  size,
  ...restProps
}: EditableBizTableProps<RecordType>) => {
  const [form] = BizForm.useForm();
  const formName = React.useMemo(() => createUniqueId(), []);
  const [value, setValue] = React.useState(outValue || []);
  const [newRecords, setNewRecords] = React.useState<
    { index: number; rowKey: Key; recordConfig: Partial<RecordType> }[]
  >([]); // 新增记录

  const editableKeyMapRef = React.useRef<Record<string, any>>({});

  const { regChildForm, unregChildForm } = React.useContext(ChildFormContext) || {};

  React.useEffect(() => {
    regChildForm?.(formName, form);
    return () => unregChildForm?.(formName);
  }, [form, formName, regChildForm, unregChildForm]);

  const changeValue = (val) => {
    if (typeof outValue !== 'undefined' && typeof onChange === 'function') {
      onChange?.(val);
    } else {
      setValue(val);
    }
  };

  useUpdateEffect(() => {
    if (typeof outValue !== 'undefined' && typeof onChange === 'function') {
      setValue(outValue);
    }
  }, [outValue]);

  useUpdateEffect(() => {
    if (typeof outValue === 'undefined') {
      onChange?.(value);
    }
  }, [value]);

  // 转换值
  const transformRecordActionRef = React.useRef<TransformRecordActionType>();
  const handleValuesChange = (val, allValue) => {
    if (typeof onValuesChange === 'function') {
      const ret = transformFormValues(allValue, transformRecordActionRef.current?.get());
      onValuesChange(
        Object.keys(ret).map((item) => ({
          ...editableKeyMapRef.current[item]?.record,
          ...ret[item]
        }))
      );
    }
  };

  // 手动触发value change
  const triggerValuesChange = () => {
    if (typeof onValuesChange === 'function') {
      const values = form.getFieldsValue();
      const ret = transformFormValues(values, transformRecordActionRef.current?.get());
      onValuesChange(
        Object.keys(ret).map((item) => ({
          ...editableKeyMapRef.current[item]?.record,
          ...ret[item]
        }))
      );
    }
  };

  const getCurentRowKey = React.useCallback((record) => getRowKey(outRowKey)(record), [outRowKey]);

  // 验证行的表单项
  const validateFieldsByRowKey = async (rowKey: Key) => {
    if (editableKeyMapRef.current[rowKey]) {
      // console.log(editableKeyMapRef.current[rowKey]);
      await form.validateFields(editableKeyMapRef.current[rowKey]?.nameList);
    }
  };

  // 获取行的数据
  const getFieldsByRowKey = React.useCallback(
    (rowKey: Key) => {
      if (
        editable?.editableKeys &&
        editable?.editableKeys.indexOf(rowKey) > -1 &&
        editableKeyMapRef.current[rowKey]
      ) {
        const values = form.getFieldsValue(editableKeyMapRef.current[rowKey]?.nameList);
        const transformValues = transformFormValues(
          values,
          transformRecordActionRef.current?.get()
        );
        const retValue = (Object.values(transformValues) as object[])[0];
        return { ...editableKeyMapRef.current[rowKey]?.record, ...retValue };
      } else {
        return value.find((item) => getCurentRowKey(item) === rowKey);
      }
    },
    [editable?.editableKeys, form, getCurentRowKey, value]
  );

  const getConcatValue = React.useCallback(() => {
    if (newRecords.length <= 0) {
      return value;
    }
    const newValue = [...value];
    newRecords
      .sort((a, b) => a.index - b.index)
      .forEach((item) => {
        newValue.splice(item.index, 0, { ...item.recordConfig, ...getFieldsByRowKey(item.rowKey) });
      });
    return newValue;
  }, [newRecords, value, getFieldsByRowKey]);

  // 获取真实的索引位置（支持新增和编辑多行）
  const getRealIndex = (rowKey: Key) => {
    const retValue = getConcatValue().filter(
      (item) =>
        !newRecords.find(
          (nrItem) => getCurentRowKey(item) === nrItem.rowKey && getCurentRowKey(item) !== rowKey
        )
    );
    const retIndex = retValue.findIndex((item) => getCurentRowKey(item) === rowKey);
    return retIndex;
  };

  const setFieldsByRowKey = (rowKey: Key, record: object) => {
    const formValues = form.getFieldsValue();
    const rowFields = getFieldsByRowKey(rowKey);

    form.setFieldsValue({ ...formValues, [rowKey]: { ...rowFields, ...record } });
  };

  const clearFieldsByRowKey = (rowKey: Key | Key[]) => {
    const rowKeys = Array.isArray(rowKey) ? rowKey : [rowKey];
    const formValues = form.getFieldsValue();
    rowKeys.forEach((item) => {
      delete formValues[item];
    });
    form.setFieldsValue(formValues);
    triggerValuesChange();
  };

  // 重置时：
  // 1.重置当前行或全部表单的值
  const handleReset = (rowKey: Key) => {
    if (rowKey) {
      editableKeyMapRef.current[rowKey]?.nameList &&
        form.resetFields(editableKeyMapRef.current[rowKey]?.nameList);
    } else {
      form.resetFields();
    }
    triggerValuesChange();
  };

  // 清除全部未保存的新增记录
  const clearNewRecords = () => {
    clearFieldsByRowKey(newRecords.map((item) => item.rowKey));
    setNewRecords([]);
  };

  // 保存时：
  // 1.验证该行表单项
  // 2.验证通过后触发onSave，返回不为false时才保存
  // 3.onSave执行成功后取消编辑状态，如果在新增记录中则删除
  const handleSave = async (rowKey: Key) => {
    await validateFieldsByRowKey(rowKey);

    const fieldsValue = getFieldsByRowKey(rowKey);

    // 是否为新增数据
    const currentNewRecord = newRecords.find((item) => item.rowKey === rowKey);
    await editable?.onSave?.(rowKey, fieldsValue, !!currentNewRecord);

    let newValue;
    if (currentNewRecord) {
      setNewRecords(newRecords.filter((item) => item.rowKey !== rowKey));
      newValue = [...value];
      newValue.splice(getRealIndex(currentNewRecord.rowKey), 0, {
        ...currentNewRecord.recordConfig,
        ...fieldsValue
      });
    } else {
      newValue = value.map((item) => (getCurentRowKey(item) === rowKey ? fieldsValue : item));
    }
    changeValue(newValue);
    editable?.onChange?.(
      editable?.editableKeys.filter((item) => item !== rowKey),
      fieldsValue
    );
    handleReset(rowKey);
  };

  // 删除时，触发onDelete，onDelete执行成功后更新数据
  const handleDelete = async (rowKey: Key) => {
    const fieldsValue = getFieldsByRowKey(rowKey);

    // 是否为新增数据
    const currentNewRecord = newRecords.find((item) => item.rowKey === rowKey);
    await editable?.onDelete?.(rowKey, fieldsValue, !!currentNewRecord);

    if (currentNewRecord) {
      setNewRecords(
        newRecords
          .filter((item) => item.rowKey !== rowKey)
          .map((item) => {
            const newItem = { ...item };
            if (item.index >= currentNewRecord.index) {
              newItem.index -= 1;
            }
            return newItem;
          })
      );
    } else {
      const newValue = value.filter((item) => getCurentRowKey(item) !== rowKey);
      changeValue(newValue);
    }
    editable?.onChange?.(
      editable?.editableKeys.filter((item) => item !== rowKey),
      fieldsValue
    );
    clearFieldsByRowKey(rowKey);
  };

  // 取消
  // 如果是新增的数据项则删除，否则更新编辑状态
  const handleCancel = (rowKey: Key) => {
    const currentNewRecord = newRecords.find((item) => item.rowKey === rowKey);

    if (currentNewRecord) {
      handleDelete(rowKey);
      return;
    }

    const fieldsValue = getFieldsByRowKey(rowKey);
    editable?.onChange?.(
      editable?.editableKeys.filter((item) => item !== rowKey),
      fieldsValue
    );
    handleReset(rowKey);
  };

  // 设置编辑状态
  const handleEdit = (rowKey: Key) => {
    if (editable?.editableKeys && editable?.editableKeys.indexOf(rowKey) > -1) {
      return;
    }

    const fieldsValue = getFieldsByRowKey(rowKey);
    editable?.onChange?.([...editable?.editableKeys, rowKey], fieldsValue);
  };

  // 新增
  // 第一个参数为初始数据，必须包含rowKey值
  // 第二个参数为插入的位置，默认为最后位置
  // 记录新增的key，将数据加入内部数据中。更新编辑状态
  const handleAdd = (record: Partial<RecordType>, index?: number) => {
    const currentIndex = getAddRecordIndex(index, value.length + newRecords.length);
    const currentRowKey = getCurentRowKey(record);

    // 如果通过外部值实时变化，无需使用新增记录
    if (outValue && typeof onValuesChange === 'function') {
      const newValue = value.slice();
      newValue.splice(currentIndex, 0, record as any);
      setValue(newValue);
    } else {
      const tmpNewRecords = newRecords.map((item) => {
        const newItem = { ...item };
        if (item.index >= currentIndex) {
          newItem.index += 1;
        }
        return newItem;
      });
      setNewRecords([
        ...tmpNewRecords,
        {
          index: currentIndex,
          rowKey: currentRowKey,
          recordConfig: record
        }
      ]);
    }
    editable?.onChange?.([...editable?.editableKeys, currentRowKey], record);
    setTimeout(() => triggerValuesChange(), 0); // dom渲染后再触发更新
  };

  // 获取所有新增记录
  const getNewRecords = () => {
    const values = form.getFieldsValue();
    return newRecords.map((item) => ({ ...item.recordConfig, ...values[item.rowKey] }));
  };

  const handleDataSourceChange = (records) => {
    form.setFieldsValue({});
    changeValue(records);
    restProps?.onDataSourceChange?.(records);
    setNewRecords([]);
    // 手动触发
    setTimeout(() => triggerValuesChange(), 0);
  };

  React.useImperativeHandle(editable?.editableActionRef, () => ({
    save: handleSave,
    delete: handleDelete,
    cancel: handleCancel,
    add: handleAdd,
    edit: handleEdit,

    setFields: setFieldsByRowKey,
    reset: handleReset,
    clearNewRecords,
    getNewRecords,

    setDataSource: handleDataSourceChange
  }));

  const concatValue = React.useMemo(getConcatValue, [getConcatValue]);

  return (
    <BizForm
      submitter={false}
      hideLabel
      size={size}
      {...editable?.formProps}
      name={formName}
      component={false}
      onValuesChange={handleValuesChange}
      transformRecordActionRef={transformRecordActionRef}
      form={form}
    >
      <BizTable
        pagination={false}
        autoRequest={false}
        rowKey={outRowKey}
        size={size}
        {...restProps}
        editableForm={form}
        editableKeys={editable?.editableKeys || []}
        onChange={onTableChange}
        dataSource={concatValue}
        editableKeyMapRef={editableKeyMapRef}
        onDataSourceChange={handleDataSourceChange}
      />
    </BizForm>
  );
};

export default EditableBizTable;
