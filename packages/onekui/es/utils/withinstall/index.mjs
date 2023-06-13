const e = (n) => (n.install = (t) => {
  const a = n.name || n.__name;
  t.component(a, n);
}, n);
export {
  e as default
};
