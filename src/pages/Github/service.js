import request from 'umi-request';

export async function queryGithubItems(params) {
  return request('/api/items/github', {
    params,
  });
}
