import { defineStore } from 'pinia';
interface LoginData {
  token: string;
  userInfo: userData;
  menus: any[];
}
interface userData {
  userName: string;
  url: string;
}
export const useGlobalStore = defineStore('global', {
  state: () => ({
    defaultActive: '/',
    isCollapse: false,
    token: '',
    userInfo: {
      userName: '',
      url: '',
    },
    menus: [
      {
        path: '/',
        name: '首页',
        icon: 'ChromeFilled',
      },
      {
        path: '/product-management',
        name: '商品管理',
        icon: 'HelpFilled',
        children: [
          {
            path: '/product-list',
            name: '商品列表',
          },
        ],
      },
    ],
  }),
  getters: {},
  actions: {
    signOut() {
      this.token = '';
      this.userInfo = { url: '', userName: '' };
      location.reload();
    },
    login(data: LoginData) {
      console.log(data, '登录成功');
      this.token = data.token;
      this.userInfo = data.userInfo;
    },
  },
  persist: {
    storage: localStorage,
    paths: ['defaultActive', 'token', 'isCollapse', 'menus', 'userInfo'],
  },
});
