import { defineConfig } from 'vite';
export default defineConfig({
  build: {
    target: 'modules',
    //打包文件目录
    outDir: 'es',
    //压缩
    minify: true,
    lib: {
      entry: './index.js',
      name: '@onekjs/icons'
    }
  }
});
