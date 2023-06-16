import type { App } from 'vue';
import { defineComponent } from 'vue';
import _Icons from './icons.vue';
import './iconfont/iconfont.js';
import _icons from './icons.json';

const newComponentInstance = (instance: any, name: string) => {
  return defineComponent({
    ...instance,
    props: {
      ...instance.props,
      name: {
        default: name
      }
    }
  });
};

export const Icons = {
  install: (app: App) => {
    _icons.forEach((item) => {
      const icon = newComponentInstance(_Icons, item.name);
      app.component(`${_Icons.name}-${item.name}`, icon);
    });
    app.component(_Icons.name, _Icons);
  }
};

export default Icons;
