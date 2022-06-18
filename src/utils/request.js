import axios from 'axios'

// create an axios instance
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    timeout: 200000 // request timeout
  })

  // response interceptor
service.interceptors.response.use(
  
    response => {
      const res = response.data
  
      if (response.status !== 200) {
        return Promise.reject(new Error(res.message || 'Error'))
      } else {
        return res
      }
    },
    error => {
      if (error.status !== 401) {
      }
      return Promise.reject(error)
    }
  )
  
  export default service
  