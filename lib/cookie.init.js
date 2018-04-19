// 导入组件注册
import { component } from './package/components'
const cookieUI = {
	install(Vue, opt) {
		// 执行组件注册方法
		component(Vue, opt)
	}
}
// 向外暴露对外接口
export default cookieUI