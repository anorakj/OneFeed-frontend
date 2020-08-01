import request from '@/utils/request';

export async function updateAll() {
  return request(`/api/crawler/fetch`, { method: 'post' });
}
