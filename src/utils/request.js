import axios from "axios";
import { ElMessage } from 'element-plus';
import { useTokenStore } from '../stores/token.js';
import router from '../router'

const baseURL = '/api';
const instance = axios.create({baseURL})

//请求拦截器
instance.interceptors.request.use(
    (config)=>{
        //在发送之前
        let TokenStore = useTokenStore()
        if(TokenStore.token){
            config.headers.Authorization=TokenStore.token
        }
        return config
    },
    //错误
    (err)=>{
        Promise.reject(err)
    }
)

//响应拦截器
instance.interceptors.response.use(
    result=>{
        if(result.data.code === 0){
            return result.data;
        }
        //操作失败
        ElMessage.error(result.data.msg?result.data.msg:'服务异常')
        return Promise.reject(result.data)
    },
    err=>{
        if(err.response.status === 401){
            ElMessage.error('请先登录')
            router.push('/login')
        }else{
            ElMessage.error('服务异常')
        }
        return Promise.reject(err)
    }
)


export default instance;