pinia的使用

将对象持久化存储

使用示例

```
<template>
  <div>
    <p>ok</p>
  </div>
</template>

<script setup>
import useInfoStore from "@/stores/userInfo.js";
const userInfoStore = useInfoStore();

console.log(userInfoStore.info.nickname + "111");
</script>

<style></style>

```

步骤

1、安装

```
"pinia": "^2.1.7",
"pinia-persistedstate-plugin": "^0.1.0",
```

2、

```
import {defineStore} from 'pinia'
import { ref } from 'vue'

const useInfoStore = defineStore('userInfo', ()=>{
    const info = ref({})

    const setInfo = (newInfo) => {
        info.value = newInfo
    }

    const removeInfo = () =>{
        info.value = {}
    }

    return { info, setInfo, removeInfo }
},
{
    persist:true
})

export default useInfoStore;
```

```
import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useTokenStore = defineStore('token', ()=>{
    const token = ref('')
    const setToken = (newToken)=>{
        token.value = newToken
    }
    const removeToken = () =>{
        token.value = ''
    }
    return {
        token,setToken,removeToken
    }
},
{
    persist:true
})
```

3、无