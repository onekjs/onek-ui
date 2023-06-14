import type { App } from 'vue';

import _Icons from './icons.vue';

const list = ['sousuo', 'gengduo'];

export const Icons = {
  install: (app: App) => {
    list.forEach((item) => {
      (_Icons as any).props.name.default = item;
      app.component(`${(_Icons as any).name}-${item}`, _Icons);
    });
    app.component((_Icons as any).name, _Icons);
  }
};
export default Icons;
