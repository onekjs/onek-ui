import { build } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

const root_path = 'packages/onekjs-icons';

async function buildIcons() {
  await build({
    build: {
      target: 'modules',
      //打包文件目录
      outDir: 'packages/onekjs-icons/es',
      cssCodeSplit: true,
      rollupOptions: {
        input: 'packages/onekjs-icons/index.ts',
        external: ['vue', 'css'],
        output: {
          globals: {
            vue: 'Vue'
          }
        }
      },
      lib: {
        entry: 'packages/onekjs-icons/index.ts',
        name: 'onekjs-icons',
        fileName: 'onekjs-icons'
      }
    },
    plugins: [
      vue(),
      dts({
        root: root_path,
        outputDir: './es/',
        //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
        tsConfigFilePath: '../../tsconfig.json'
      }),
      {
        name: 'style',
        generateBundle(config, bundle) {
          const keys = Object.keys(bundle);
          for (const key of keys) {
            const bundler: any = bundle[key as any];
            // 添加css issues https://github.com/vitejs/vite/issues/1579
            if (key === 'onekjs-icons.mjs') {
              bundler.code = `import './index.css'; ${bundler.code}`;
            }
          }
        }
      }
    ]
  });
}
buildIcons();
