// 单独导入组件
import { CQr } from "./package/components/c-qr"

// 导入组件、指令、过滤器等数组进行注册
import { component } from "./package/components"
import { directive } from "./package/directives"
import { filter } from "./package/filters"
const CUI = {
	install(Vue, opt) {
		// 执行组件注册方法
		component(Vue, opt)
		// 执行注册指令方法
		directive(Vue, opt)
		// 执行注册过滤器方法
		filter(Vue, opt)
	}
}
// 向外暴露对外接口
export { CUI, CQr }
