<template>
  <div class="box">
    <el-collapse v-model="activeNames" v-for="group in list" :key="group.title" class="bg-white">
      <el-collapse-item :name="group.title">
        <template #title>
          <span class="group-title">
            {{ group.title + ' × ' + group.nav.length }}
          </span>
        </template>
        <div class="flex items-center flex-wrap grid grid-cols-4">
          <div v-for="util in group.nav" :key="util.name" class="card">
            <cardItem :util="util" />
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup lang="ts">
  import { useDbStore } from '@/stores/modules/db' //引入
  import { useCopy } from '@/utils'
  const store = useDbStore()
  definePageMeta({
    title: '工具集合',
    hideInMenu: false
  })
  const activeNames = ref([])
  const list = computed(() => store.activeNav.nav)

  watch(
    () => store.activeNav.nav,
    (newValue) => {
      activeNames.value = (store.activeNav.nav || []).map((item) => item.title)
    },
    {
      immediate: true,
      deep: true
    }
  )
  /** 点击去工具的官网 */
  const goUtils = (link: string) => {
    window.open(link)
  }
  const copy = (link: string) => {
    useCopy(link)
  }
</script>
<style lang="less" scoped>
  .card {
    margin: 12px 8px;
  }
  .group-title {
    color: #3f51b5;
    font-size: 18px;
    font-weight: 500;
  }
  .el-collapse {
    border: 0;
  }
</style>
