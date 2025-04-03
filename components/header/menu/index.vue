<template>
  <el-menu :default-active="activeMenu" class="e-menu" mode="horizontal" @select="handleSelect">
    <template v-for="topMenu in menuData" :key="topMenu.id">
      <el-menu-item :index="topMenu.id + ''">
        {{ topMenu.title }}
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
  import { useDbStore } from '@/stores/modules/db'
  const activeMenu = ref('1')
  const route = useRoute()
  const router = useRouter()
  const store = useDbStore()
  const menuData = computed(() => store.db)
  const handleSelect = (key: string, keyPath: string[]) => {
    const activeMenu = store.db.find((menu) => menu.id + '' === key)
    store.setActiveMenu(activeMenu)
    if (route.path !== '/collect') {
      router.push('/collect')
    }
  }
</script>

<style scoped lang="less">
  .e-menu {
    width: 100%;
    padding-right: 60px;
  }
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
