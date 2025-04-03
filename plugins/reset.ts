import { setRem } from '~/utils/page/rem'
export default defineNuxtPlugin({
  name: 'reset',
  enforce: 'pre', // 或 'post'
  hooks: {
    // 这里可以直接注册Nuxt应用运行时钩子
    'app:mounted'() {
      setRem()
      window.onresize = function () {
        setRem()
      }
    }
  },
  env: {
    // 如果不希望插件在仅渲染服务器端或孤立组件时运行，请将此值设置为`false`。
    islands: true
  }
})
