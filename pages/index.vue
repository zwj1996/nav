<template>
  <div class="container">
    <el-container class="container_body">
      <el-header class="container_header">
        <Header />
      </el-header>
      <el-container class="container_main">
        <el-aside width="120px">
          <Asider />
        </el-aside>
        <el-main class="container_info">
          <searchComponent />
          <nuxt-page />
        </el-main>
      </el-container>
    </el-container>
    <Extra class="extra"></Extra>
  </div>
</template>

<script setup lang="ts">
  const nuxtApp = useNuxtApp()
  useHead({ ...nuxtApp.$setHead('home') })

  // useHead({
  //   title: t('title'),
  //   meta: [
  //     { hid: 'keywords', name: 'keywords', content: '关键词，导航' },
  //     { hid: 'description', name: 'description', content: '这是一个导航网站' }
  //   ]
  // })
  definePageMeta({
    redirect: '/collect',
    title: '首页',
    hideInMenu: false
  })
</script>

<style scoped lang="less">
  .container {
    background: #dfe5eb;
    padding: 16px 14%;
    height: 100vh;
    position: relative;
  }
  .container_body {
    background: #f5f5f5;
    height: 100%;
  }
  .container_header {
    padding: 0;
    height: 60px;
  }

  .container_main {
    height: calc(100vh - 60px);
    overflow-y: auto;
  }
  .container_info {
    background: #fff;
    padding: 8px 16px;
  }
</style>
