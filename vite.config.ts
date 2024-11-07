import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8888',  // 后端服务器地址
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/app/, '')  // 重写路径
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 配置 @ 指向 src 目录
    },
  },
  plugins: [vue()],
})
