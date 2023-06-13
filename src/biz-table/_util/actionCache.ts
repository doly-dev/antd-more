import { uniqueId } from 'ut2';

// 创建一个操作缓存key
function createActionCacheKey() {
  return uniqueId('bizTable');
}

const actionCache = {};

export { createActionCacheKey };

export default actionCache;
