import path, { resolve } from "path"
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      /** @ 符号指向 src 目录 */
      "@": resolve(__dirname, "./src"),
      /** 解决 stream buffer 无法使用 */
      // stream: "stream-browserify",
      // buffer: "buffer-browserify"
    }
  },
  plugins: [vue()],
})
