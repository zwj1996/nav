<template>
  <div class="box">
    <div class="flex items-center flex-wrap grid grid-cols-3" v-if="list.length">
      <el-card shadow="hover" v-for="util in list" :key="util.name" class="card">
        <cardItem :util="util" />
      </el-card>
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

<style lang="less">
  .card {
    height: 168px;
    padding: 6px;
    margin-bottom: 12px;
    margin-right: 12px;
  }
  .card-info {
    height: 96px;
  }
  .group-title {
    color: #3f51b5;
    font-size: 18px;
    font-weight: 500;
  }
  .util-name {
    font-size: 15px;
    font-weight: 500;
    line-height: 36px;
    color: #474747;
  }
  .desc {
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-top: 4px;
    font-size: 11px;
    color: #8b8b8b;
  }
  .card-footer {
    border-top: 1px solid #ddd;
    display: flex;
    height: 30px;
    line-height: 30px;
    padding-top: 6px;
  }
  .btn {
    flex: 1;
    cursor: pointer;
    text-align: center;
  }
  .card .el-card__body {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 16px 16px 0 16px;
  }
  .card-info {
    flex: 1;
  }

  .el-collapse {
    border: 0;
  }
  .star {
    color: #fadb14;
    font-size: 20px;
    display: inline-block;
    margin-right: 2px;
  }
  .icon {
    width: 36px;
    height: 36px;
    display: inline-block;
  }
  .icon-empty {
    width: 36px;
    height: 36px;
    display: inline-block;
    background: #c6e2ff;
    border-radius: 100%;
    text-align: center;
    line-height: 36px;
  }
</style>
