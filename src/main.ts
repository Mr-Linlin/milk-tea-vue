import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from './plugins/element-plus'; // 导入封装的插件
import router from './router';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import './index.css';
import './style.css';
import 'element-plus/dist/index.css';
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate); //配置缓存持久化
const app = createApp(App);
// 使用封装的 Element Plus 插件
app.use(router);
app.use(ElementPlus);
app.use(pinia);
app.mount('#app');
