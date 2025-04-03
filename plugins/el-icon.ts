import * as ElementPlusIconsVue from '@element-plus/icons-vue'
/** 注册element-plus的icon组件 */
export default defineNuxtPlugin({
  name: 'el-icon',
  enforce: 'pre', // 或 'post'
  hooks: {
    // 这里可以直接注册Nuxt应用运行时钩子
    'app:created'() {
      const nuxtApp = useNuxtApp()
      for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        nuxtApp.vueApp.component(key, component)
      }
    }
  },
  env: {
    // 如果不希望插件在仅渲染服务器端或孤立组件时运行，请将此值设置为`false`。
    islands: true
  }
})
