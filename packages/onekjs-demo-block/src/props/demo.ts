export const basicProps = {
  code: { type: String, default: '' },
  highlightedCode: { type: String, default: '' },
  title: { type: String },
  desc: { type: String },
  lang: { type: String, default: 'vue' },
  defaultExpand: { type: Boolean, default: false },
  importMap: { type: Object, default: () => ({}) }
}