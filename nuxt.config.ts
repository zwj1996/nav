
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      title: '默认标题',
      meta: [
        { name: 'description', content: '全局描述' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  devtools: { enabled: true },
  i18n: {
    strategy: 'prefix_and_default', // 添加路由前缀的方式
    locales: ["en", "zh"], //配置语种
    defaultLocale: 'zh', // 默认语种
    vueI18n: './i18n.config.ts', // 通过vueI18n配置
  },
  modules: ['@element-plus/nuxt', '@pinia/nuxt', '@nuxtjs/i18n',],
  css: ['~/assets/css/tailwind.css'],
  plugins: ['~/plugins/el-icon', '~/plugins/reset'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  vite: {
    optimizeDeps: {
      include: ["unhead > getActiveHead"]  // 强制包含缺失的导出
    }
  },
  devServer: {
    port: 1024
  },

  compatibilityDate: '2025-04-01'
})