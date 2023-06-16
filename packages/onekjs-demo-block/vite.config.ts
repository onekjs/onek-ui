import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

export default () => {
  return {
    plugins: [vue(), dts()],
    build: {
      target: 'modules',
      //打包文件目录
      outDir: './es',
      cssCodeSplit: true,
      rollupOptions: {
        input: './src/index.ts',
        external: ['vue', 'css'],
        output: {
          globals: {
            vue: 'Vue'
          }
        }
      },
      lib: {
        entry: './src/index.ts',
        name: 'onekjs-block',
        fileName: 'onekjs-block'
      }
    }
  };
};
