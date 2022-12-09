import Fly from 'flyio/dist/npm/wx'

const install = (app, vm) => {
	const fly = new Fly()
	
	// 添加请求拦截器
	fly.interceptors.request.use((request) => {
	    // 在发送请求之前做些什么
	    let token = uni.getStorageSync('aliToken')
	    if (token) {
	        request.headers['token'] = token
	    }
	    return request
	}, function(error) {
	    // 对请求错误做些什么
	    return Promise.reject(error)
	})
	
	// 添加响应拦截器
	fly.interceptors.response.use((res) => {
	    // 对响应数据做些事
	    return res
	}, (error) => {
	    return Promise.reject(error)
	})
	
	app.config.globalProperties.$http = fly
}

export default {
	install
}