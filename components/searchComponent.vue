<template>
  <div class="box">
    <div>
      <el-input
        :placeholder="$t('searchMsg')"
        @keyup.enter="doSearch"
        v-model="filter"
        size="large"
        class="search-input"
      >
        <template #suffix>
          <el-button @click="doSearch" class="btn">
            <el-icon><Search /></el-icon>
          </el-button>
        </template>
      </el-input>
    </div>
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
    color: #fff;
    width: 50vw;
    margin: 0 auto;
    p {
      text-align: left;
    }
    .btn {
      background: #7b61ff;
      color: #fff;
      border: 0;
      font-size: 1rem;
    }
  }
</style>
