// 导入组件
import cookieQr from './cookie-Qr'
// 创建模块组件数组
const components = [cookieQr]
const component = (Vue, opt) => {
	// 循环注册全局组件
	components.map((component) => {
		Vue.component(component.name, component)
	})
}
// 向外暴露多个单独组件
export { component, cookieQr }
