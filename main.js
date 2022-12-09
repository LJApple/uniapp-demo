import App from './App'
import store from './store/index.js'
import http from './utils/http.js'
import uviewPlus from 'uview-plus'
import VueClipboard from 'vue-clipboard2'


// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false

App.mpType = 'app'
const app = new Vue({
  ...App,
  store
})
app.use(http)
app.$mount()
// #endif

// #ifdef VUE3
import {createSSRApp} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	app.use(store)
	app.use(http)
	app.use(uviewPlus)
	app.use(VueClipboard)
	return {
		app
	}
}
// #endif