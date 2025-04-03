<template>
  <el-config-provider :locale="zhCn">
    <nuxt-page />
  </el-config-provider>
</template>

<script lang="ts" setup>
  import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
</script>

<style>
  html,
  body {
    margin: 0;
    padding: 0;
    font-size: 16px;
  }
  .page-enter-active,
  .page-leave-active {
    transition: all 0.2s;
  }

  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    filter: blur(1rem);
  }
</style>
