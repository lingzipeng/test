<template>
  <div>
    <el-container>
      <el-header class="header">Header</el-header>
      <el-container>
        <el-aside width="200px">
          <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
            <el-radio-button :value="false">expand</el-radio-button>
            <el-radio-button :value="true">collapse</el-radio-button>
          </el-radio-group>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
            router
          >
            <el-menu-item index="/function/my">
              <el-icon><location /></el-icon>
              <template #title>Navigator Two</template>
            </el-menu-item>
            <el-menu-item index="/function/other">
              <el-icon><icon-menu /></el-icon>
              <template #title>Navigator Two</template>
            </el-menu-item>
            <el-menu-item index="3">
              <el-icon><document /></el-icon>
              <template #title>Navigator Three</template>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon><setting /></el-icon>
              <template #title>Navigator Four</template>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main
          ><div style="height: 500px"><router-view></router-view></div
        ></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
import { userInfoService } from "@/api/user.js";
import useInfoStore from "@/stores/userInfo.js";

const router = useRouter();
const isCollapse = ref(true);
const userInfoStore = useInfoStore();
//获取用户详细信息
const getUserInfo = async () => {
  let result = await userInfoService();
  userInfoStore.setInfo(result.data);
};
console.log(userInfoStore.info.nickname)
</script>

<style>
.header {
  width: 1300px;
  height: 200px;
  background-color: rgb(176, 213, 240);
}
</style>
