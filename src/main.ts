import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from './plugins/element-plus' // 导入封装的插件
import './index.css';
import './style.css';
const app = createApp(App)
// 使用封装的 Element Plus 插件
app.use(ElementPlus)
app.mount('#app')
