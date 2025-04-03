import { ref } from 'vue'
import { defineStore } from 'pinia'

import dbZhJson from '@/assets/data/db_zh.json'
import dbEnJson from '@/assets/data/db_en.json'
export const useDbStore = defineStore('db', () => {
  const db = ref(dbZhJson)
  const allNavs = ref()
  const filter = ref()
  const activeMenu: any = ref(dbZhJson[0])
  const activeNav: any = ref(dbZhJson[0].nav[0])

  const jsonToArr = () => {
    const arr: any = []
    db.value.forEach(ditem => {
      ditem.nav.forEach(nitem => {
        nitem.nav.forEach(uitem => {
          uitem.nav.forEach(item => {
            arr.push(item)
          })
        })
      })
    })
    allNavs.value = [...arr]
  }
  jsonToArr()
  const setActiveMenu = async (menu: any) => {
    activeMenu.value = { ...menu }
    activeNav.value = { ...menu.nav[0] }
  }

  const setActiveNav = async (nav: any) => {
    activeNav.value = { ...nav }
  }
  const setFilter = async (f: String) => {
    filter.value = f
  }
  return {
    db, allNavs, setFilter, filter,
    setActiveMenu, activeMenu, setActiveNav, activeNav
  }
})
