import { createApp } from 'vue';
import App from './app.vue';
import onekui from 'onekui';

const app = createApp(App);
app.use(onekui);
app.mount('#app');
