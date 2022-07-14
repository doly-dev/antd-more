import { useState, useEffect, useCallback, useRef } from 'react';
import type { AsyncOptions, AsyncFunction } from 'rc-hooks';
import { useAsync } from 'rc-hooks';
import actionCache from './_util/actionCache';
import type { RequestFilters, RequestSorter, RequestExtra, AsyncFnReturn } from './interface';

interface ParamsRef<DataType> {
  params: any;
  filters: RequestFilters;
  sorter: RequestSorter<DataType>;
  extra: RequestExtra<DataType>;
}

interface Options<DataType = any> extends AsyncOptions<DataType> {
  defaultTotal?: number;
  defaultPageSize?: number;
  actionCacheKey?: string;
}

// 显示数据总量
const showTotal = (total: number) => `共 ${total} 条数据`;

function usePagination<DataType = any>(
  asyncFn: AsyncFunction,
  {
    defaultTotal = 0,
    defaultPageSize = 10,
    actionCacheKey = '',
    autoRun,
    onSuccess,
    ...restOptions
  }: Options<AsyncFnReturn<DataType>> = {}
) {
  const [data, setData] = useState([]);

  const pageRef = useRef({
    current: 1,
    pageSize: defaultPageSize,
    total: defaultTotal
  }); // 分页
  const paramsRef = useRef<ParamsRef<DataType>>({
    params: {},
    filters: {},
    sorter: {},
    extra: {
      currentDataSource: [],
      action: 'submit'
    }
  }); // 请求参数，这里不使用 useAsync 缓存params，因为里面可能包含了分页数据

  const request = useAsync<AsyncFnReturn<DataType>>(asyncFn, {
    ...restOptions,
    autoRun: false,
    onSuccess: (res, params) => {
      // 1. 设置分页和数据
      pageRef.current.total = res?.total || 0;
      setData(res.data || []);

      if (typeof onSuccess === 'function') {
        onSuccess(res, params);
      }
    }
  });

  const run = useCallback(
    (params?: any) => {
      // 如果查询参数变化，重置参数和分页
      if (params) {
        paramsRef.current.params = params;
        pageRef.current.current = 1;
      }
      const { pageSize, current } = pageRef.current;
      const { params: paramsRet, filters, sorter, extra } = paramsRef.current;
      const action = actionCacheKey ? actionCache[actionCacheKey] : extra.action;

      // 2. 传入参数，发起请求
      return request.run({ ...paramsRet, pageSize, current }, filters, sorter, {
        currentDataSource: data,
        action
      });
    },
    [actionCacheKey, data, request]
  );

  const refresh = useCallback(() => {
    return run();
  }, [run]);

  // 修改分页、筛选、排序
  const onTableChange = useCallback(
    (pagination, filters, sorter, extra) => {
      pageRef.current = {
        ...pageRef.current,
        ...pagination
      };
      paramsRef.current = {
        ...paramsRef.current,
        filters,
        sorter,
        extra
      };
      if (actionCacheKey) {
        actionCache[actionCacheKey] = extra.action;
      }
      return run();
    },
    [actionCacheKey, run]
  );

  useEffect(() => {
    if (typeof autoRun === 'undefined' || autoRun) {
      run();
    }
  }, [autoRun, run]);

  return {
    ...request,
    run,
    refresh,
    data,
    onTableChange,
    pagination: {
      showTotal,
      showSizeChanger: true,
      showQuickJumper: true,
      ...pageRef.current
    }
  };
}

export default usePagination;
