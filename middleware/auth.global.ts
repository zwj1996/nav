import { LocalStorageKeys } from '~/enums/localstorage'

export default defineNuxtRouteMiddleware((to) => {
  // if (process.server) 
  // const nuxtApp = useNuxtApp()
  // if (process.client && nuxtApp.isHydrating && nuxtApp.payload.serverRendered) {
  //   if (to.path !== '/login' && !getItem(LocalStorageKeys.USERINFO)) {
  //     return navigateTo('/login')
  //   }
  // }

  return
})
