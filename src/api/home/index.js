import HttpRequest from '../../utils/request'

// 查询
export function banners (query = {}) {
  return HttpRequest('/banners/', 'GET', query)
}
