import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
export default defineConfig({
  build: {
    target: 'modules',
    //打包文件目录
    outDir: 'es',
    //压缩
    minify: true,
    rollupOptions: {
      //忽略不需要打包的文件
      external: ['vue']
    },
    lib: {
      entry: './index.js',
      name: '@onekjs/icons'
    }
  },
  plugins: [vue()]
});
