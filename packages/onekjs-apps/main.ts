import { createApp } from 'vue';
import App from './app.vue';
// import onekui from '@onekjs/ui';
import onekui from '@onekjs/components';

const app = createApp(App);
app.use(onekui);
app.mount('#app');
