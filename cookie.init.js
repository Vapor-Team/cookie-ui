// 导入组件
import cookieQr from './components/cookieQr.vue'

const cookieUI = {
  install: function (Vue) {
    // 注册全局组件：二维码组件
    Vue.component('cookieQr', cookieQr)
  }
}
export default cookieUI