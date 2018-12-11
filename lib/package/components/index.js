// 导入组件
import { CQr } from "./c-qr"
// 创建模块组件数组
const components = [CQr]
const component = (Vue, opt) => {
	// 循环注册全局组件
	components.map(item => {
		Vue.component(item.name, item)
	})
}
// 向外暴露一个组件注册方法以及多个单独组件
export { component, CQr }
