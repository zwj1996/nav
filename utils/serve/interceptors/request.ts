import { LocalStorageKeys } from '@/enums/localstorage'
import type { AxiosInstance } from 'axios'
import { ElMessage } from 'element-plus'
import type { UserType } from '~/types/userinfo'
/**
 * 初始化请求拦截器
 * @param service axios实例对象
 */
export const initRequestInterceptors = (
  service: AxiosInstance,
  startProcess: ProcessHandlerFnType
) => {
  service.interceptors.request.use(
    (config: any) => {
      const token = useLocalStorage<UserType>(LocalStorageKeys.USERINFO)
      const showMessage = config.showMessage
      const message = config.message
      // 是否展示弹框提示，自定义提示信息
      if (showMessage) {
        config.headers.showMessage = true
        if (message) {
          config.headers.message = encodeURIComponent(message)
        }
      }
      // 是否展示头部进度条
      if (config.showProgress) {
        startProcess(config.url)
      }
      // 设置token
      if (token.value) {
        config.headers.token = token.value
      }
      return config
    },
    (error) => {
      ElMessage.warning('请稍后再试')
      return Promise.reject(error)
    }
  )
}
