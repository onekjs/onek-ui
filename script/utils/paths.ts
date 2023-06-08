import { resolve } from 'path';

//组件库根目录
export const componentPath = resolve(__dirname, '../../packages/components');

//pkg根目录
export const pkgPath = resolve(__dirname, '../../packages/');

// example
export const examplePath = resolve(__dirname, '../../example/');

// site component
export const siteComponentsPath = resolve(
  __dirname,
  '../../site/docs/components'
);
