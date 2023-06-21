import DefaultTheme from "vitepress/theme";
// import onekui from "@onekjs/ui";
import onekui from "@onekjs/web";
import icons from "@onekjs/icons";
// import DemoBlock from '@ruabick/vitepress-demo-block';
// import '@ruabick/vitepress-demo-block/dist/style.css';
import DemoBlock from '@onekjs/demo-block';
import '@onekjs/demo-block/es/index.css';

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    app.use(onekui);
    app.use(icons);
    app.component('demo', DemoBlock);
  },
};
