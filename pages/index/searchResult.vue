<template>
  <div class="box">
    <div class="flex items-center flex-wrap grid grid-cols-4" v-if="list.length">
      <div v-for="util in list" :key="util.name" class="card">
        <cardItem :util="util" />
      </div>
    </div>
    <div v-else>
      <el-empty :description="$t('emptyMsg')" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useDbStore } from '@/stores/modules/db' //引入
  const store = useDbStore()
  definePageMeta({
    title: '搜索结果',
    hideInMenu: false
  })
  const route = useRoute()

  const router = useRouter()
  const list = computed(() => {
    return store.allNavs.filter((item: any) => {
      return item.name.includes(filter.value) || item.desc.includes(filter.value)
    })
  })
  const filter = ref()
  watch(route, () => {
    initData()
  })
  const initData = () => {
    const str = route.query.filter || ''
    if (str) {
      filter.value = str
    } else {
      router.push('/collect')
    }
  }
  initData()
</script>

<style lang="less" scoped>
  .card {
    margin: 8px;
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
