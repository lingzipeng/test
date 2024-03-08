import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-persistedstate-plugin'

const app = createApp(App)
const pinia = createPinia();
const persist = createPersistedState();

pinia.use(persist)

app.use(router)
app.use(pinia)
app.use(ElementPlus)
app.mount('#app')
