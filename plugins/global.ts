//global.ts    多语言

import { useLangStore } from '@/stores/modules/lang'
export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      setHead: (page: any) => {
        const store: any = useLangStore()
        let { title, keywords, description } = store.headJson[store.lang][page]
        return {
          title,
          meta: [
            { hid: 'keywords', name: 'keywords', content: keywords },
            { hid: 'description', name: 'description', content: description }
          ]
        }
      }
    }
  };
})



