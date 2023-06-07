import { defineComponent as r, computed as u, openBlock as s, createElementBlock as l, normalizeClass as p, unref as c, renderSlot as a } from "vue";
import "./style/index.css";
const m = {
  name: "o-button"
}, d = /* @__PURE__ */ r({
  ...m,
  props: {
    type: null
  },
  setup(o) {
    const t = o, e = u(() => ({ [`o-button--${t.type}`]: t.type }));
    return (n, f) => (s(), l("button", {
      class: p(["o-button", c(e)])
    }, [
      a(n.$slots, "default")
    ], 2));
  }
});
export {
  d as default
};
