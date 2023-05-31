import * as React from 'react';
import { useEffect, useMemo, useRef } from 'react';
import type { FormInstance } from 'antd';
import type { BizTableActionType, BizTableProps, BizTableRequest } from 'antd-more';
import { BizTable } from 'antd-more';
import { omit } from 'lodash';
import dayjs from 'dayjs';
import { memoryCache } from './storage';

interface BizTableWithCacheProps extends Omit<BizTableProps, 'formRef'> {
  cacheKey: string;
  formRef?: React.MutableRefObject<FormInstance | undefined>;
}

const BizTableWithCache: React.FC<BizTableWithCacheProps> = ({
  cacheKey,
  request,
  pagination,
  autoRequest,
  actionRef: outerActionRef,
  formRef: outerFormRef,
  columns = [],
  ...restProps
}) => {
  const cache = memoryCache.get(cacheKey);
  const innerFormRef = useRef<FormInstance>();
  const formRef = outerFormRef ? outerFormRef : innerFormRef;
  const innerActionRef = useRef<BizTableActionType>();
  const actionRef = outerActionRef ? outerActionRef : innerActionRef;
  const internalRequest: BizTableRequest = async (params, ...args) => {
    memoryCache.set(cacheKey, params);
    return request?.(params, ...args);
  };

  const cacheTransformNames = useMemo(() => {
    const result: Record<string, any[]> = {};
    columns.forEach(item => {
      if (typeof item.search === 'object' && Array.isArray(item.search.names)) {
        const name = item.search.name || item.search.dataIndex || (item as any).dataIndex;
        result[name] = item.search.names;
      }
    })
    return result;
  }, [columns]);

  useEffect(() => {
    const formValues = memoryCache.get(cacheKey);
    if (autoRequest !== false || formValues) {
      if (typeof cacheTransformNames === 'object' && formValues) {
        Object.keys(cacheTransformNames).forEach((key) => {
          if (Array.isArray(cacheTransformNames[key]) && cacheTransformNames[key].length > 0) {
            formValues[key] = cacheTransformNames[key].map((field) => {
              const val = formValues[field] ? dayjs(formValues[field]) : formValues[field];
              delete formValues[field];
              return val;
            });
          }
        });
      }
      formRef.current?.setFieldsValue({ ...omit(formValues, ['current', 'pageSize']) });
      actionRef.current?.submitAndCurrent(formValues?.current || 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoRequest]);

  return (
    <BizTable
      request={internalRequest}
      autoRequest={false}
      pagination={pagination !== false ? { pageSize: cache?.pageSize, ...pagination } : false}
      formRef={formRef}
      actionRef={actionRef}
      columns={columns}
      {...restProps}
    />
  );
};

export default BizTableWithCache;