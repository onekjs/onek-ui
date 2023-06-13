import * as o from "./src/index.mjs";
import { Button as a } from "./src/button/index.mjs";
const e = {
  install: (t) => {
    for (const n in o)
      t.use(o[n]);
  }
};
export {
  a as Button,
  e as default
};
