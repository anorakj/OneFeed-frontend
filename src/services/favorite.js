import request from '@/utils/request';

export async function addFavorites(params) {
  return request('/api/favorites/item/id', {
    method: 'POST',
    data: params,
  });
}

export async function deleteFavorites(params) {
  return request('/api/favorites/item/delete', {
    method: 'POST',
    data: params,
  });
}
