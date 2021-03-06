import axios from 'axios'

//设置响应数据的返回格式
axios.interceptors.response.use(response=>{
  return response.data.data;//直接返回数据中data选项中的data[想要的数据]
})

//请求home组件的数据接口
export let getHome = ()=>{
  return axios.get('/static/mock/index.json')
}

//请求city组件的数据接口
export let getCities = ()=>{
  return axios.get('/static/mock/city.json')
}

//请求detail组件的数据接口
export let getDetails= (id)=>{
  return axios.get("/static/mock/detail/"+id+".json")
}

//请求week组件的数据接口
export let getWeeks = (id)=>{
  return axios.get('/static/mock/week/'+id+'.json')
}

