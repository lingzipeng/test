<template>
  <div>
    <p>我的</p>
    <button @click="ok">11</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const ok = () => {
  router.push("/ok")
}
</script>

<style></style>
