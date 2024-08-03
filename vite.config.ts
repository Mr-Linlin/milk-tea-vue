import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths'
import { fileURLToPath, URL } from 'url'  // 导入 Node.js 的 URL 模块

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tsconfigPaths()  // 使用插件来解析 tsconfig 中的路径别名
  ],
  css: {
    preprocessorOptions: {
      less: {
        // 这里可以定义全局的 Less 变量、mixin 等
        additionalData: ``  // 假设你有一个全局的变量文件
      }
    }
  },
  resolve: {
    alias: {
      // 使用 import.meta.url 和 fileURLToPath 处理路径
      '@': fileURLToPath(new URL('./src', import.meta.url)), // 为 src 配置别名
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@styles': fileURLToPath(new URL('./src/assets/styles', import.meta.url)),
      '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
      '@store': fileURLToPath(new URL('./src/store', import.meta.url)),
      // 添加其他需要的别名
    }
  },
  server: {
    open: true,
    port: 8084,
    proxy: {
      // 选项写法
      '/api': {
        target: 'http://43.138.149.42:7003/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
