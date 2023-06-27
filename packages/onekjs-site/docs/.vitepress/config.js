import components from '../components/index.json'
import { applyPlugins } from '@ruabick/md-demo-plugins';

export default {
  outDir: '../../../docs',
  base: process.env.NODE_ENV === 'production' ? '/onek-ui/' : '/',
  themeConfig: {
    siteTitle: "onekui",
    nav: [
      { text: "指南", link: "/guild/quickstart" },
      { text: "组件", link: "/components/button/" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/onekjs/onek-ui" },
    ],
    sidebar: {
      "/guild/": [
        {
          text: "基础",
          items: [
            {
              text: "快速开始",
              link: "/guild/quickstart",
            }
          ],
        }
      ],
      "/components/": [
        {
          text: "基础组件",
          items: components
        },
      ],
    },
  },
  markdown: {
    config(md) {
      applyPlugins(md);
    }
  }
};
