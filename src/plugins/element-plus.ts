import type { App } from 'vue'
import {
  ElButton,
  ElInput,
  ElMessage,
  ElNotification,
  ElMessageBox,
  // 如果还有其他需要全局注册的组件，也可以在此处引入
} from 'element-plus'

const components = [
  ElButton,
  ElInput,
  // 添加其他组件
]

const plugins = [
  ElMessage,
  ElNotification,
  ElMessageBox,
  // 添加其他插件
]

export default {
  install(app: App): void {
    // 注册全局组件
    components.forEach(component => {
      app.component(<string>component.name, component)
    })
    // 注册全局方法
    plugins.forEach(plugin => {
      app.config.globalProperties[`$${plugin.name}`] = plugin
    })
  }
}
