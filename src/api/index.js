import axios from 'axios'

var service = axios.create({
  bashURL:'api', // 所有请求都会带上api
  'content-type':'application/json',
  timeout:5000
})
// 请求拦截器
// service.interceptors.request.use(config)=>{
//   console.log('发请求了 带上token')
//   return config
// }

// // 响应拦截器
// service.interceptors.response.use((res)=>{
//   return res.data
// })

export default service