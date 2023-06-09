import { createApp } from 'vue';
import App from './app.vue';
// import onekui from 'onekui';
import onekui from '@onek/components';

const app = createApp(App);
app.use(onekui);
app.mount('#app');
