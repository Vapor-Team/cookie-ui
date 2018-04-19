import cookieQr from './src/main'
// 注册组件
cookieQr.install = (Vue) => {
	Vue.component(cookieQr.name, cookieQr)
}
// 对外提供注册组件接口
export default cookieQr
