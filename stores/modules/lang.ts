import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLangStore = defineStore('lang', () => {
  const lang = ref('zh')

  const setLang = async (data: any) => {
    lang.value = data
  }
  return { setLang, lang }
})
