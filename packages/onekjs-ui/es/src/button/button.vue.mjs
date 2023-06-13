import { defineComponent as f, computed as s, openBlock as a, createElementBlock as i, unref as l, normalizeClass as m, createCommentVNode as _, renderSlot as b, createElementVNode as d } from "vue";
import "./style/index.css";
const k = ["disabled"], y = {
  key: 0,
  class: "o-button-loading"
}, $ = /* @__PURE__ */ d("svg", {
  t: "1686634731795",
  class: "o-button-loading--icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "2396",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
}, [
  /* @__PURE__ */ d("path", {
    d: "M512 170.666667v85.333333a256 256 0 1 1-223.573333 131.2L213.930667 345.6A341.333333 341.333333 0 1 0 512 170.666667z",
    fill: "#fff",
    opacity: ".3",
    "p-id": "2397"
  })
], -1), g = [
  $
], h = {
  name: "o-button"
}, C = /* @__PURE__ */ f({
  ...h,
  props: {
    type: { default: "default" },
    size: { default: "normal" },
    plain: { type: Boolean, default: !1 },
    link: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(p, { emit: c }) {
    const e = p, t = "o-button", n = s(() => e.loading), r = s(() => ({
      [`${t}-${e.size}`]: e.size,
      [`${t}-${e.type}`]: e.type,
      [`${t}-${e.type}--link`]: e.link,
      [`${t}-${e.type}--plain`]: e.plain,
      [`${t}-${e.type}--disabled`]: e.disabled || e.loading
    })), u = (o) => {
      c("click", o);
    };
    return (o, w) => (a(), i("button", {
      onClick: u,
      disabled: e.disabled || l(n),
      class: m(["o-button", l(r)])
    }, [
      l(n) ? (a(), i("span", y, g)) : _("", !0),
      b(o.$slots, "default")
    ], 10, k));
  }
});
export {
  C as default
};
