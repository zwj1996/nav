<template>
  <div class="box">
    <el-input
      :placeholder="$t('searchMsg')"
      @keyup.enter="doSearch"
      v-model="filter"
      class="search-input"
    >
      <template #append>
        <el-button :icon="Search" />
      </template>
    </el-input>
  </div>
</template>

<script setup lang="ts">
  import { Search } from '@element-plus/icons-vue'
  import { useDbStore } from '@/stores/modules/db' //引入
  const store = useDbStore()
  const router = useRouter()
  const route = useRoute()
  const filter = ref(store.filter)
  watch(route, () => {
    initData()
  })
  const initData = () => {
    filter.value = route.query.filter || ''
  }
  initData()
  const doSearch = () => {
    router.push({
      path: '/searchResult',
      query: { filter: filter.value }
    })
  }
</script>

<style scoped lang="less">
  .box {
    margin-bottom: 12px;
    text-align: center;
  }
  .search-input {
    width: 50%;
  }
</style>
