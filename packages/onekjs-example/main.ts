import { createApp } from 'vue';
import App from './app.vue';
import router from './router';
// import onekui from '@onekjs/ui';
import onekui from '@onekjs/web';

const app = createApp(App);
app.use(onekui);
app.use(router);
app.mount('#app');
