import { resolve } from 'path';

//组件库根目录
export const webPath = resolve(__dirname, '../../packages/onekjs-web');

//pkg根目录
export const pkgPath = resolve(__dirname, '../../packages/');

// example
export const examplePath = resolve(__dirname, '../../example/');

// site component
export const webSitePath = resolve(
  __dirname,
  '../../packages/onekjs-site/docs/components'
);

// icons
export const iconsPath = resolve(__dirname, '../../packages/onekjs-icons');
