import * as t from "./src/index.mjs";
import { Button as i } from "./src/button/index.mjs";
const n = {
  install: (e) => {
    for (let o in t)
      e.use(t[o]);
  }
};
export {
  i as Button,
  n as default
};
