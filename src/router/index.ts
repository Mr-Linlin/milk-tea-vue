import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { useGlobalStore } from '@/stores/global';
import { storeToRefs } from 'pinia';
// 定义路由
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'layout',
    meta: { title: '首页' },
    component: () => import("@/views/layout/index.vue"),
    redirect: '/home-page',
    children: [
      {
        path: '/home-page',
        name: "home",
        component: () => import('@/views/home/index.vue')
      }
    ]
  },
  {
    path: '/product-page',
    component: () => import('@/views/layout/index.vue'),
    redirect: '/product-list',
    children: [
      {
        path: '/product-list',
        name: "商品列表",
        component: () => import('@/views/home/index.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
  }
]
// 创建路由实例并传入 `routes` 配置
const router = createRouter({
  history: createWebHistory(), // 使用 HTML5 的历史模式
  routes
})
router.beforeEach(async (to, _from, next) => {
  document.title = '茶道云端'
  const globalStore = useGlobalStore();
  const { token } = storeToRefs(globalStore);
  // 判断 token 是否存在
  if (!token.value) {
    if (to.name !== 'login') {
      return next({ name: 'login' }); // 使用 next({ name: 'login' }) 重定向
    }
  }
  next();
})
export default router
