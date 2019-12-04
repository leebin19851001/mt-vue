import axios from 'axios'

axios.defaults.baseURL = 'https://api.duyiedu.com'
axios.interceptors.request.use(function (config) {
    config.params = {
        ...config.params,
        appkey: 'leebin19851001_1547731445676'
    }
    return config;
}, function (){
    return new Promise.reject(error)
})

export default axios;