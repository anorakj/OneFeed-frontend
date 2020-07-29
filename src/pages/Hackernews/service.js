import request from 'umi-request';

export async function queryHackernewsItems(params) {
  return request('/api/items/hackernews', {
    params,
  });
}
