import request from '@/utils/request.js'

//登录
export const loginService = (data) => {
    const params = new URLSearchParams();
    for (let key in data) {
        params.append(key, data[key]);
    }
    return request.post('/user/login', params);
}

//获取用户详细的信息
export const userInfoService = () =>{
    return request.get('/user/userInfo')
}