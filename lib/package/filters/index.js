// 导入过滤方法
import CTime from "./cTime"
// 创建模块组件数组
const filters = [CTime]
const filter = (Vue, opt) => {
  // 循环注册全局组件
  filters.map(item => {
    Vue.filter(item.name, item.fn)
  })
}
// 向外暴露一个过滤器注册方法
export { filter }
