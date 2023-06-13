import { defineComponent as n, computed as s, openBlock as d, createElementBlock as p, normalizeClass as i, unref as u, renderSlot as r } from "vue";
import "./style/index.css";
const f = ["disabled"], c = {
  name: "o-button"
}, y = /* @__PURE__ */ n({
  ...c,
  props: {
    type: { default: "default" },
    size: { default: "normal" },
    plain: { type: Boolean, default: !1 },
    link: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(l) {
    const e = l, t = "o-button", o = s(() => ({
      [`${t}--${e.size}`]: e.size,
      [`${t}--${e.type}`]: e.type,
      [`${t}--${e.type}--link`]: e.link,
      [`${t}--${e.type}--plain`]: e.plain,
      [`${t}--${e.type}--disabled`]: e.disabled
    }));
    return (a, b) => (d(), p("button", {
      disabled: e.disabled,
      class: i(["o-button", u(o)])
    }, [
      r(a.$slots, "default")
    ], 10, f));
  }
});
export {
  y as default
};
