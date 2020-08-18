import request from 'umi-request';

export async function queryInfoqItems(params) {
  return request('/api/items/infoq', {
    params,
  });
}
