<template>
  <div class="box">
    <el-collapse v-model="activeNames" v-for="group in list" :key="group.title" class="bg-white">
      <el-collapse-item :name="group.title">
        <template #title>
          <span class="group-title">
            {{ group.title + ' × ' + group.nav.length }}
          </span>
        </template>
        <div class="flex items-center flex-wrap grid grid-cols-3">
          <el-card shadow="hover" v-for="util in group.nav" :key="util.name" class="card">
            <cardItem :util="util" />
          </el-card>
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
