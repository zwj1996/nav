<template>
  <div class="card-info" v-if="util">
    <span class="star" v-for="rate in util.rate" :key="rate">
      <svg
        viewBox="64 64 896 896"
        focusable="false"
        fill="currentColor"
        width="1em"
        height="1em"
        data-icon="star"
        aria-hidden="true"
      >
        <path
          d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"
        ></path>
      </svg>
    </span>
    <div class="util-name">
      <img v-Mlazy:img="util.icon" class="icon" v-if="util.icon" @error="util.icon = null" />
      <div class="icon-empty" v-else>{{ (util.name || '').substring(0, 1) }}</div>
      {{ util.name }}
    </div>
    <div class="desc" :title="util.desc">{{ util.desc }}</div>
  </div>
  <div class="card-footer">
    <div class="btn" @click.stop="copy(util.url)">
      <el-icon size="16"><CopyDocument /></el-icon>
    </div>
    <div class="btn" @click.stop="goUtils(util.url)">
      <el-icon size="16"><Share /></el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    util: {
      type: Object
    }
  })
  /** 点击去工具的官网 */
  const goUtils = (link: string) => {
    window.open(link)
  }
  const copy = (link: string) => {
    useCopy(link)
  }
</script>

<style lang="less">
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
    padding: 8px 8px 0 8px;
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
