import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

export default (() => {
  return {
    plugins: [
      vue(),
      dts(),
    ],
    build: {
      lib: {
        entry: resolve(__dirname, './src/index.ts'),
        name: '@onekjs/demo-block',
      },
    },
  }
});