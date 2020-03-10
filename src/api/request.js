import axios from './index' //二次封装axios

export const getData=(page,pageSize)=>{
  // 分页的接口
  // return axios.get('/pagelist',{params:{page,pageSize}})
  return axios.get('/api/?v=0.34051042892390315&from=')
}