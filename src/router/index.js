import { createRouter, createWebHistory } from "vue-router"
import loginVue from '../components/login.vue'
import layoutVue from '../components/layout.vue'
import myVue from "../components/function/my.vue"
import otherVue from "../components/function/other.vue"
import okVue from '../components/ok.vue'

const routes = [
    { path: '/', redirect: '/login' }, // 添加重定向到登录页面的路由
    { path: '/login', component: loginVue },
    { path: '/ok', component: okVue },
    {
        path: '/layout',
        component: layoutVue,
        redirect: '/function/my',
        children: [
            { path: '/function/my', component: myVue },
            { path: '/function/other', component: otherVue }
        ]
    },
];

//创建路由
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})


export default router