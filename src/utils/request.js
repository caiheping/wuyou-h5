import axios from 'axios'
import store from '@/store'
import { Toast } from 'vant'
import { baseUrl } from './config'

// 添加请求拦截器，在发送请求之前做些什么
axios.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么，允许在数据返回客户端前，修改响应的数据
  return response.data
}, function (error) {
  return Promise.reject(error)
})

// 封装数据返回失败提示函数
function errorState (response) {
  store.state.loading = false
  // 隐藏loading
  Toast({
    type: 'error',
    message: '网络错误'
  })
  throw new Error('网络错误')
}

// 封装数据返回成功提示函数
function successState (response) {
  store.state.loading = false
  return response
}

// 封装axios
function HttpRequest (url, method = 'GET', params = {}, isLoading = true) {
  if (isLoading) {
    store.state.loading = true
  }
  // 设置token
  url = baseUrl + url
  method = method.toUpperCase()
  let httpDefault = {
    method,
    url,
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    params: method === 'GET' || method === 'DELETE' ? params : null,
    data: method === 'POST' || method === 'PUT' ? params : null,
    timeout: 60000
  }
  return new Promise((resolve, reject) => {
    axios(httpDefault).then((response) => {
      successState(response)
      resolve(response)
    }).catch((response) => {
      errorState(response)
      reject(response)
    })
  })
}

export default HttpRequest
