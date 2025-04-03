import { ref } from 'vue'
import { defineStore } from 'pinia'
import i18nData from "../../assets/lang/headJson.json";
export const useLangStore = defineStore('lang', () => {
  const lang = ref('en')
  const headJson = ref(i18nData)
  const setLang = async (data: any) => {
    lang.value = data
  }
  return { setLang, lang, headJson }
})
