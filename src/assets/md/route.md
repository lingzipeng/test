```
import { createRouter,createWebHistory } from "vue-router"
import loginVue from '../components/login.vue'
import layoutVue from '../components/layout.vue'
import myVue from "../components/function/my.vue"

const routes = [
    { path: '/login', component: loginVue},
    { path: '/', component: layoutVue,redirect: '/function/my',children:[
        {path: '/function/my', component: myVue},
    ]}
]


//创建路由
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})


export default router
```



router基本设置

未完善...