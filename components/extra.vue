<template>
  <div class="box">
    <div class="box-1">
      <img
        class="iconfont"
        src="assets/images/china.svg"
        @click="setLang('en')"
        v-if="lang === 'zh'"
      />
      <img class="iconfont" src="assets/images/ua.svg" @click="setLang('zh')" v-else />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useLangStore } from '@/stores/modules/lang'
  const { setLocale } = useI18n()
  const store = useLangStore()
  const lang = computed(() => store.lang)
  const setLang = (lang: string) => {
    store.setLang(lang)
    setLocale(lang)
  }
</script>

<style scoped lang="less">
  .box {
    position: absolute;
    z-index: 999;
    right: 40px;
    bottom: 40px;
  }
  .box-1 {
    background: #fff;
    border-radius: 100%;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
  }
  .iconfont {
    width: 48px;
    height: 48px;
    cursor: pointer;
  }
</style>
