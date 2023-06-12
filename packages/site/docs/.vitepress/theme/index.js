import DefaultTheme from "vitepress/theme";
import onekui from "@onek/ui";
import DemoBlock from '@ruabick/vitepress-demo-block';
import '@ruabick/vitepress-demo-block/dist/style.css';

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    app.use(onekui);
    app.component('demo', DemoBlock);
  },
};