import request from '@/utils/request'

// export function login(data) {
//   return request({
//     url: '/system/user/login',
//     method: 'post',
//     data
//   })
// }
export function login(data) {
  return request({
    url: '/system/user/login',
    method: 'post',
    data,
    headers: {
      'Content-Type': 'application/x-www-item-urlencoded'
    },
    transformRequest: [data => {
      const formData = new FormData()
      for (const key in data) {
        formData.append(key, data[key])
      }
      return formData
    }]
  })
}
export function getInfo(token) {
  return request({
    url: '/system/user/userinfo',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
