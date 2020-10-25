import Vue from 'vue'
import App from './App.vue'

// 导入路由模块
import router from './router/index'
import store from './store'


//引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import LyTab from 'ly-tab'
import Loading from '@/components/Loading.vue'

Vue.use(LyTab)
Vue.use(MintUI)

Vue.use(Loading)



Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')