<template>
  <el-menu :default-active="activeNavId" class="w-full h-full" @select="handleSelect">
    <template v-for="nav in navData" :key="nav.id">
      <el-menu-item :index="nav.id + ''">{{ nav.title }}</el-menu-item>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
  import { useDbStore } from '@/stores/modules/db'
  const store = useDbStore()
  const navData = computed(() => store.activeMenu.nav)
  const activeNavId = computed(() => store.activeNav.id + '')
  const handleSelect = (key: string, keyPath: string[]) => {
    const nav = store.activeMenu.nav.find((menu) => menu.id + '' === key)
    store.setActiveNav(nav)
  }
</script>

<style scoped lang="less">
  .el-menu--horizontal.el-menu {
    border-bottom: none;
    height: 100%;
  }
  .el-menu--horizontal {
    & > .el-menu-item.is-active,
    :deep(.el-sub-menu.is-active .el-sub-menu__title) {
      border-bottom: none;
    }
  }
</style>
