//定义路由模块
// 需要导入 vue模块 和 vue-router
// vue-router 需要下载  comp  install vue-router --save  保存到生产环境里面，以后项目上线了要用

import Vue from 'vue'
import VueRouter from 'vue-router'

// 使用
Vue.use(VueRouter)

// 创建组件
import Home from "../views/Home/Home.vue";
import Category from "../views/Category/Category.vue";
import Cart from "../views/Cart/Cart.vue";
import Mine from "../views/Mine/Mine.vue";
import Search from "../views/Search/Search.vue";
import Integration from "../views/Integration/Integration.vue";
import Register from "../views/Register/Register.vue"
import Login from "../views/Login/Login.vue"
import GoodList from "../views/GoodList/GoodList.vue"
import Detail from "../views/Detail/Detail"


//商品列表
import GoodListDates from "@/components/GoodListMain";
//搜索结果页面
import SearchList from "@/views/Search/SearchList"


//引入子路由
import Index from "../views/Home/children/Index.vue"
import Ele from "../views/Home/children/Ele.vue"
import Person from "../views/Home/children/Person.vue"
import Box from "../views/Home/children/Box.vue"
import Phone from "../views/Home/children/Phone.vue"
import Computer from "../views/Home/children/Computer.vue"
import House from "../views/Home/children/House.vue"
import Face from "../views/Home/children/Face.vue"


const routes = [{
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        name: 'home',
        component: Home,
        children: [{
            path: 'index',
            component: Index
        }, {
            path: 'ele',
            component: Ele
        }, {
            path: 'person',
            component: Person
        }, {
            path: 'box',
            component: Box
        }, {
            path: 'phone',
            component: Phone
        }, {
            path: 'computer',
            component: Computer
        }, {
            path: 'house',
            component: House
        }, {
            path: 'face',
            component: Face
        }, {
            path: '/home',
            redirect: '/home/index'
        }]
    },
    {
        path: '/category/:cid',
        name: 'category',
        component: Category
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart
    },
    {
        path: '/mine',
        name: 'mine',
        component: Mine
    },
    {
        path: '/search',
        name: 'search',
        component: Search
    },
    {
        path: '/searchList',
        name: 'searchList',
        component: SearchList
    },
    {
        path: '/integration',
        name: 'integration',
        component: Integration
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/goodlist/:cid',
        name: 'goodlist',
        component: GoodList
    },
    {
        path: '/goodListDates',
        name: 'goodListDates',
        component: GoodListDates
    },
    {
        path: '/goods/:cid',
        name: 'goods',
        component: Detail
    },
]

const router = new VueRouter({
    // 路由模式  默认为hish表示带有 # 号的， 
    // history表示去掉#号的
    // 在打包的时候必须使用hish模式
    // mode: 'hash', //mode: 'history',  
    routes
})

export default router