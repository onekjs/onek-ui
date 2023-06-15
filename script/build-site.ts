import { createSite } from './create-site';
import { build } from 'vitepress';

async function run() {
  await createSite();
  await build('./packages/onekjs-site/docs');
}

run();
