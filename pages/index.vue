<template>
  <div class="container">
    <div class="bg">
      <!-- <div class="img1">
        <img src="../assets/images/bg-txt1.png" />
      </div>
      <div class="img2">
        <img src="../assets/images/bg-txt2.png" />
      </div> -->
      <div class="share-btn">
        <el-button @click="copy">
          <span class="icon">
            <icon type="earth" />
          </span>
          {{ $t('shareMsg') }}
        </el-button>
      </div>
      <div class="search-group">
        <searchComponent />
      </div>
      <Extra class="extra"></Extra>
    </div>
    <el-main class="container_info">
      <nuxt-page />
    </el-main>

    <!-- <div class="container-2">
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
    
    </div> -->
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()
  const nuxtApp = useNuxtApp()
  useHead({ ...nuxtApp.$setHead('home') })
  definePageMeta({
    redirect: '/collect',
    title: '首页',
    hideInMenu: false
  })
  const copy = () => {
    useCopy(window.location.href)
    ElMessage.success(t('copy.success'))
  }
</script>

<style scoped lang="less">
  .container {
    background: #f8f8f8;
    height: 100vh;
    width: 100vw;
    position: relative;
    overflow-y: auto;
  }
  .bg {
    background: url('../assets/images/bg.png');
    width: 100vw;
    height: 60vh;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-bottom: -2rem;
    z-index: 2;
    position: relative;
    .search-group {
      position: absolute;
      bottom: 5rem;
      width: 100%;
    }
    .share-btn {
      text-align: center;
      position: absolute;
      bottom: 18rem;
      width: 100%;
      button {
        background: #7b61ff;
        color: #fff;
        border: 0;
        font-size: 1rem;
      }
    }
    .img1 {
      padding-top: 8rem;
      margin-bottom: 2rem;
      text-align: center;
      img {
        margin: 0 auto;
        height: 30px;
      }
    }
    .img2 {
      margin-bottom: 2rem;
      text-align: center;
      img {
        margin: 0 auto;
        height: 36px;
      }
    }
    .icon {
      margin-right: 4px;
    }
  }

  .container_info {
    padding: 3rem 2rem;
    position: relative;
  }

  .container_body {
    background: #f8f8f8;
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
</style>
