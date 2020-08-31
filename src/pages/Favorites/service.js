import request from 'umi-request';

export async function queryFavoritesItems(params) {
  return request('/api/favorites/items', {
    params,
  });
}
