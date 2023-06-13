import * as React from 'react';
import { useUpdateEffect, useControllableValue } from 'rc-hooks';
import { uniqueId } from 'ut2';
import type { BizFormProps, BizFormExtraInstance } from '../../biz-form';
import { BizForm } from '../../biz-form';
import ChildFormContext from '../../biz-form/ChildFormContext';
import type { BizTableProps } from '../BizTable';
import BizTable from '../BizTable';
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
    'form' | 'name' | 'onValuesChange' | 'transformRecordActionRef' | 'component' | 'formExtraRef'
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

const EditableBizTable = <RecordType extends object = any>(props: EditableBizTableProps<RecordType>) => {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    value: outValue,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    dataSource,
    onValuesChange,
    editable,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onChange,
    onTableChange,

    rowKey: outRowKey,
    size,
    ...restProps
  } = props;
  const [form] = BizForm.useForm();
  const formName = React.useMemo(() => uniqueId('editable_form_name_'), []);
  const [value, setValue] = useControllableValue(props, {
    defaultValue: [],
    trigger: typeof onValuesChange === 'function' ? 'onValuesChange' : 'onChange'
  });
  const [newRecords, setNewRecords] = React.useState<
    { index: number; rowKey: Key; recordConfig: Partial<RecordType> }[]
  >([]); // 新增记录

  const editableKeyMapRef = React.useRef<{ value: Record<string, any> }>();
  const triggerTimer = React.useRef(null);
  const innerTriggerFlag = React.useRef(false); // 标识内部触发 onValusChange 

  const { regChildForm, unregChildForm } = React.useContext(ChildFormContext) || {};

  React.useEffect(() => {
    regChildForm?.(formName, form);
    return () => unregChildForm?.(formName);
  }, [form, formName, regChildForm, unregChildForm]);

  useUpdateEffect(() => {
    clearTimeout(triggerTimer.current);
    if (innerTriggerFlag.current) {
      innerTriggerFlag.current = false;
      triggerTimer.current = setTimeout(() => {
        triggerValuesChange();
      });
    }
  }, [value, newRecords]);

  // 转换值
  const formExtraRef = React.useRef<BizFormExtraInstance>();
  const handleValuesChange = (val, allValue) => {
    if (typeof onValuesChange === 'function') {
      const ret = formExtraRef.current?.transformFieldsValue(allValue) || {};
      const editableValues = editableKeyMapRef.current.value;
      onValuesChange(
        Object.keys(ret).map((item) => ({
          ...editableValues[item]?.record,
          ...ret[item]
        }))
      );
    }
  };

  // 手动触发value change
  const triggerValuesChange = () => {
    if (typeof onValuesChange === 'function') {
      const ret = formExtraRef.current?.getTransformFieldsValue() || {};
      const editableValues = editableKeyMapRef.current.value;
      onValuesChange(
        Object.keys(ret).map((item) => ({
          ...editableValues[item]?.record,
          ...ret[item]
        }))
      );
    }
  };

  const getCurentRowKey = React.useCallback(
    (record: any) => getRowKey(outRowKey)(record) as Key,
    [outRowKey]
  );

  // 验证行的表单项
  const validateFieldsByRowKey = async (rowKey: Key) => {
    const editableValues = editableKeyMapRef.current.value;
    if (editableValues[rowKey]) {
      // console.log(editableValues[rowKey]);
      return await form.validateFields(editableValues[rowKey]?.nameList);
    }
  };

  // 获取行的数据
  const getFieldsByRowKey = React.useCallback(
    (rowKey: Key) => {
      const editableValues = editableKeyMapRef.current.value;
      if (
        editable?.editableKeys &&
        editable?.editableKeys.indexOf(rowKey) > -1 &&
        editableValues[rowKey]
      ) {
        const values = form.getFieldsValue(editableValues[rowKey]?.nameList);
        const transformValues = formExtraRef.current?.transformFieldsValue(values) || {};
        const retValue = (Object.values(transformValues) as object[])[0];
        return { ...editableValues[rowKey]?.record, ...retValue };
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
  };

  // 重置时：
  // 1.重置当前行或全部表单的值
  const handleReset = (rowKey: Key) => {
    const editableValues = editableKeyMapRef.current.value;
    if (rowKey) {
      editableValues[rowKey]?.nameList &&
        form.resetFields(editableValues[rowKey]?.nameList);
    } else {
      form.resetFields();
    }
    triggerValuesChange();
  };

  // 清除全部未保存的新增记录
  const clearNewRecords = () => {
    clearFieldsByRowKey(newRecords.map((item) => item.rowKey));
    innerTriggerFlag.current = true;
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
    setValue(newValue);
    editable?.onChange?.(
      editable?.editableKeys.filter((item) => item !== rowKey),
      fieldsValue
    );
    setTimeout(() => handleReset(rowKey), 0);
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
      setValue(newValue);
    }
    editable?.onChange?.(
      editable?.editableKeys.filter((item) => item !== rowKey),
      fieldsValue
    );
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
    editable?.onChange?.([...(editable?.editableKeys || []), rowKey], fieldsValue);
  };

  // 新增
  // 第一个参数为初始数据，必须包含rowKey值
  // 第二个参数为插入的位置，默认为最后位置
  // 记录新增的key，将数据加入内部数据中。更新编辑状态
  const handleAdd = (record: Partial<RecordType>, index?: number) => {
    const currentIndex = getAddRecordIndex(index, (value?.length || 0) + newRecords.length);
    const currentRowKey = getCurentRowKey(record);

    editable?.onChange?.([...(editable?.editableKeys || []), currentRowKey], record);

    setTimeout(() => {
      // 如果通过外部值实时变化，无需使用新增记录
      // if (outValue && typeof onValuesChange === 'function') {
      if (typeof onValuesChange === 'function') {
        const newValue = value?.slice() || [];
        newValue.splice(currentIndex, 0, record as any);
        setValue(newValue);
      } else {
        innerTriggerFlag.current = true;
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
    });
  };

  // 获取所有新增记录
  const getNewRecords = () => {
    const values = form.getFieldsValue();
    return newRecords.map((item) => ({ ...item.recordConfig, ...values[item.rowKey] }));
  };

  const handleDataSourceChange = (records) => {
    innerTriggerFlag.current = true;
    form.setFieldsValue({});
    setValue(records);
    restProps?.onDataSourceChange?.(records);
    setNewRecords([]);
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
      formExtraRef={formExtraRef}
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
