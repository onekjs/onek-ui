import * as t from "./src/index.mjs";
import { default as r } from "./src/button/index.vue.mjs";
const n = {
  install: (o) => {
    for (const e in t)
      o.use(t[e]);
  }
};
export {
  r as Button,
  n as default
};
