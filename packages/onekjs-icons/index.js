export { default as icon_list } from './icon-list-json.json';
import * as components from './src/index';
export * from './src/index';
export * from './src/loadSprites';
import './src/style.less';

export default {
  install: (app) => {
    for (const name in components) {
      app.use(components[name]);
    }
  }
};
