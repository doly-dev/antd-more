import { uniqueId } from 'ut2';

// 创建一个操作缓存key
function createActionCacheKey() {
  return uniqueId('__am_bizTable_');
}

const actionCache = {};

export { createActionCacheKey };

export default actionCache;
