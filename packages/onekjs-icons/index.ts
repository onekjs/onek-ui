import type { App } from 'vue';
import { defineComponent } from 'vue';
import _Icons from './icons.vue';

const list = ['sousuo', 'gengduo'];

const newIcons = (name: string) => {
  return defineComponent({
    ..._Icons,
    props: {
      name: {
        default: name
      },
      type: {
        default: 'svg'
      },
      size: {
        default: 32
      }
    }
  });
};

export const Icons = {
  install: (app: App) => {
    list.forEach((name) => {
      const icon = newIcons(name);
      app.component(`${_Icons.name}-${name}`, icon);
    });
    app.component(_Icons.name, _Icons);
  }
};

export default Icons;
