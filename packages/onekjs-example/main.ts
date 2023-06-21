import { createApp } from 'vue';
import App from './app.vue';
import router from './router';
// import onekui from '@onekjs/ui';
import onekui from '@onekjs/web';
import OnekIcons from '@onekjs/icons';

const app = createApp(App);
app.use(onekui);
app.use(OnekIcons);
app.use(router);
app.mount('#app');
