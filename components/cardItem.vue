<template>
  <!-- <div class="card-info" v-if="util">
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
  </div> -->
  <div v-if="util">
    <div class="card-container">
      <div class="card-front">
        <div class="card-inner">
          <div>
            <img v-Mlazy:img="util.icon" class="icon" v-if="util.icon" @error="util.icon = null" />
            <div class="icon-empty" v-else>{{ (util.name || '').substring(0, 1) }}</div>
          </div>
          <span>{{ util.name }}</span>
          <div>
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
          </div>
        </div>
      </div>

      <div class="card-back">
        <div class="card-inner">
          <div :title="util.desc" class="desc">
            {{ util.desc }}
          </div>

          <a @click.stop="goUtils(util.url)" class="visit-btn">
            <button>
              {{ $t('viewMsg') }}
            </button>
          </a>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <div class="btn" @click.stop="copy(util.url)">
        <el-icon size="16"><CopyDocument /></el-icon>
      </div>
      <div class="btn" @click.stop="goUtils(util.url)">
        <el-icon size="16"><Share /></el-icon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()
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
    ElMessage.success(t('copy.success'))
  }
</script>

<style lang="less" scoped>
  .util-name {
    font-size: 15px;
    font-weight: 500;
    line-height: 36px;
    color: #474747;
  }
  .card-footer {
    box-shadow:
      0 0 0 1px rgb(0 0 0 / 3%),
      0 2px 3px 0 rgb(0 0 0 / 6%);
    display: flex;
    height: 40px;
    line-height: 30px;
    padding-top: 6px;
  }
  .btn {
    flex: 1;
    cursor: pointer;
    text-align: center;
  }

  .star {
    color: #fadb14;
    font-size: 20px;
    display: inline-block;
    margin-right: 2px;
  }
  .icon {
    width: 56px;
    height: 56px;
    display: inline-block;
  }
  .icon-empty {
    width: 56px;
    height: 56px;
    display: inline-block;
    background: #c6e2ff;
    border-radius: 100%;
    text-align: center;
    line-height: 56px;
  }

  .card-container {
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-perspective: 1000px;
    perspective: 1000px;
  }

  .card-front,
  .card-back {
    background-size: cover;
    box-shadow:
      0 0 0 1px rgb(0 0 0 / 3%),
      0 2px 3px 0 rgb(0 0 0 / 6%);
    background-position: center;
    -webkit-transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
    -o-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition:
      transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1),
      -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    text-align: center;
    min-height: 175px;
    height: auto;
    border-radius: 4px;
    color: #fff;
    font-size: 1.5rem;
  }

  .card-back {
    background: #cedce7;
    background: linear-gradient(45deg, #cdbfec 0%, #9897ea 100%);
  }

  .card-front:after {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    content: '';
    display: block;
    opacity: 0.2;
    background-color: #ffffff;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .card-container:hover .card-front,
  .card-container:hover .card-back {
    -webkit-transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
    -o-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition:
      transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1),
      -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);

    .visit-btn {
      border: none;
      background: #fff;
      color: #778be5;
    }
  }

  .card-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  .card-back .desc {
    color: #ffffff;
    font-size: 14px;
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    margin-bottom: 8px;
  }

  .card-back a {
    color: #ffffff;
    font-size: 16px;
    line-height: 28px;
  }
  .card-inner {
    -webkit-transform: translateY(-50%) translateZ(60px) scale(0.94);
    transform: translateY(-50%) translateZ(60px) scale(0.94);
    top: 50%;
    position: absolute;
    left: 0;
    width: 100%;
    padding: 1rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 1px solid transparent;
    -webkit-perspective: inherit;
    perspective: inherit;
    z-index: 2;
    color: #555;
    font-weight: 800;
  }

  .card-container .card-back {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }

  .card-container .card-front {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }

  .card-container:hover .card-back {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }

  .card-container:hover .card-front {
    -webkit-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }

  // .card-front .card-inner .desc {
  //   font-size: 2rem;
  //   position: relative;
  // }

  // .card-front .card-inner .desc:after {
  //   // content: '';
  //   // width: 4rem;
  //   // height: 2px;
  //   // position: absolute;
  //   // background: #29f;
  //   // display: block;
  //   // left: 0;
  //   // right: 0;
  //   // margin: 0 auto;
  //   // bottom: -0.75rem;
  //   // border-radius: 24px;
  // }

  .visit-btn {
    color: #fff;
    border-radius: 5px;
    padding: 0 25px;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    outline: none;
  }

  .visit-btn:after {
    position: absolute;
    content: '';
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    direction: rtl;
    z-index: -1;
    box-shadow:
      -7px -7px 20px 0px #fff9,
      -4px -4px 5px 0px #fff9,
      7px 7px 20px 0px #0002,
      4px 4px 5px 0px #0001;
    transition: all 0.3s ease;
  }

  .visit-btn:hover {
    color: #000;
  }

  .visit-btn:hover:after {
    left: auto;
    right: 0;
    width: 100%;
  }

  .visit-btn:active {
    top: 2px;
  }

  @media (max-width: 768px) {
    .card-front:after {
      opacity: 1;
      background: none !important;
      border-radius: 4px;
      backdrop-filter: saturate(105%) brightness(110%) hue-rotate(8deg) invert(0.04);
    }

    .card-front,
    .card-back {
      background-size: cover;
      box-shadow: none;
      border-radius: 4px;
      min-height: 200px;
    }

    button {
      margin: 3px 0 0 0;
    }
  }
</style>
