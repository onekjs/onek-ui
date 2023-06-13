# 快速开始

跟随以下的步骤，快速上手组件库的使用。

vue >= 3.2.0

注意：由于 Vue3 不再支持 IE 浏览器环境，ArcoVue 也不再支持 IE 浏览器环境。

## 安装

```shell
# npm
npm install --save-dev @onekjs/ui
# yarn
yarn add --dev @onekjs/ui
```

## 完整引入
```js
import { createApp } from 'vue'
import Onekui from '@onekjs/ui';
import App from './App.vue';

const app = createApp(App);
app.use(Onekui);
app.mount('#app');
```