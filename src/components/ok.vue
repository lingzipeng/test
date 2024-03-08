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
