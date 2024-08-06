<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500"
  >
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
      <div class="text-center mb-6">
        <img
          src="~@/assets/images/logo.png"
          alt="Logo"
          class="mx-auto mb-4 w-20 h-20"
        />
        <h1 class="text-2xl font-bold text-gray-800">
          {{ isLogin ? '茶道云端后台管理系统' : '注册新账户' }}
        </h1>
      </div>
      <transition name="fade" mode="out-in">
        <div>
          <!-- 登录表单 -->
          <div v-if="isLogin">
            <div class="mb-4 flex items-center">
              <label
                class="w-14 mr-2 text-right block text-gray-700 text-sm font-bold"
                for="username"
              >
                用户名
              </label>
              <input
                v-model="loginForm.username"
                type="text"
                id="username"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="请输入用户名"
                required
              />
            </div>
            <div class="mb-6 flex items-center">
              <label
                class="w-14 mr-2 text-right block text-gray-700 text-sm font-bold"
                for="password"
              >
                密码
              </label>
              <input
                v-model="loginForm.password"
                type="password"
                id="password"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="请输入密码"
                required
              />
            </div>
            <div class="flex items-center">
              <el-checkbox v-model="rememberMe" label="记住我" size="large" />
              <a
                href="#"
                class="ml-3 inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                @click.prevent="forgotPassword"
                >忘记密码?</a
              >
            </div>
          </div>

          <!-- 注册表单 -->
          <div v-else>
            <div class="mb-4 flex items-center">
              <label
                class="w-14 mr-2 text-right block text-gray-700 text-sm font-bold"
                for="newUsername"
              >
                用户名
              </label>
              <input
                v-model="registerForm.newUsername"
                type="text"
                id="newUsername"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="请输入新用户名"
                required
              />
            </div>
            <div class="mb-4 flex items-center">
              <label
                class="w-14 mr-2 text-right block text-gray-700 text-sm font-bold"
                for="email"
              >
                邮箱
              </label>
              <input
                v-model="registerForm.email"
                type="email"
                id="email"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="请输入邮箱"
                required
              />
            </div>
            <div class="mb-6 flex items-center">
              <label
                class="w-14 mr-2 text-right block text-gray-700 text-sm font-bold"
                for="newPassword"
              >
                密码
              </label>
              <input
                v-model="registerForm.newPassword"
                type="password"
                id="newPassword"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="请输入新密码"
                required
              />
            </div>
          </div>

          <div class="mt-6">
            <button
              @click="handleSubmit"
              type="submit"
              class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              {{ isLogin ? '登录' : '注册' }}
            </button>
          </div>
        </div>
      </transition>

      <div class="mt-4 text-center">
        <a
          href="#"
          class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          @click.prevent="toggleForm"
        >
          {{ isLogin ? '没有账户？注册' : '已有账户？登录' }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useGlobalStore } from '@/stores/global';
import { useRouter } from 'vue-router';
const router = useRouter();
const globalStore = useGlobalStore();

// 状态变量
const isLogin = ref(true);
const loginForm = reactive({
  username: '',
  password: '',
});
const rememberMe = ref(false);

// 注册表单字段
const registerForm = reactive({
  newUsername: '',
  email: '',
  newPassword: '',
});

// 登录和注册处理
const handleSubmit = () => {
  if (isLogin.value) {
    // 处理登录
    if (!loginForm.username || !loginForm.password) {
      ElMessage({
        message: '请输入用户名和密码',
        type: 'warning',
        plain: true,
      });
      return;
    }
    const userInfo = {
      userName: '林',
      url: 'https://sns-webpic-qc.xhscdn.com/202408061051/1a8cf0ec951fe04d8790a07cf1df76e9/1040g2sg31652lrvshacg5o88ret85votbo63b10!nd_dft_wlteh_webp_3',
    };
    // 模拟登录逻辑
    globalStore.login({ token: 'scjhsjcshjchsj', userInfo: userInfo });
    ElMessage({
      message: '登录成功',
      type: 'success',
      plain: true,
    });
    router.push('/');
  } else {
    // 处理注册
    if (
      !registerForm.newUsername ||
      !registerForm.email ||
      !registerForm.newPassword
    ) {
      ElMessage({
        message: '请输入所有注册信息',
        type: 'warning',
        plain: true,
      });
      return;
    }
    // 模拟注册逻辑
    ElMessage({
      message: '注册成功！请登录',
      type: 'success',
      plain: true,
    });
    // 重置字段
    registerForm.newUsername = '';
    registerForm.email = '';
    registerForm.newPassword = '';
    // 切换回登录表单
    isLogin.value = true;
  }
};

// 忘记密码
const forgotPassword = () => {
  ElMessage({
    message: '请联系管理员修改密码！',
    type: 'warning',
    plain: true,
  });
};

// 切换表单
const toggleForm = () => {
  isLogin.value = !isLogin.value;
};
</script>

<style scoped>
body {
  background-color: #f8f8f8;
}

/* 过渡效果 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
