import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import { J as t, W as n, x as r } from "./framer.CEpgxWGc.mjs";
import { i, t as a } from "./wt7eQU6AQ.BHMc4clc.mjs";
function o(e, t) {
  let n = e?.Coa2ayQ4h,
    r = e?.k5wtIPkbZ;
  return {
    breakpoints: [
      { hash: `88uf17`, mediaQuery: `(min-width: 1200px)` },
      { hash: `1l7wspp`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `dbq4x7`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: `A detailed breakdown of how content strategy, editing, and structure improved performance, engagement, and reach.`,
    elements: { Nq5sulIsH: `contact` },
    framerSearch: { index: !0 },
    robots: `max-image-preview:large`,
    serializationId: `framer-CSANC`,
    socialImage: u(r),
    title: `${n === void 0 ? `{{Coa2ayQ4h}}` : l(n)} — Content Growth Case Study`,
    viewport: `width=device-width`,
  };
}
async function s(e, t) {
  let i = new r(),
    s = {
      from: { alias: `IF3lVCAg9`, data: a, type: `Collection` },
      select: [
        { collection: `IF3lVCAg9`, name: `Coa2ayQ4h`, type: `Identifier` },
        { collection: `IF3lVCAg9`, name: `k5wtIPkbZ`, type: `Identifier` },
      ],
      where: n(e, `IF3lVCAg9`),
    },
    c = await i.query(s, t);
  if (c.length === 0) throw Error(`No data matches pathVariables`);
  let l = c[0];
  return o(l, t);
}
async function c(e, t) {
  let n = new r(),
    i = {
      from: { alias: `IF3lVCAg9`, data: a, type: `Collection` },
      select: [
        { collection: `IF3lVCAg9`, name: `Coa2ayQ4h`, type: `Identifier` },
        { collection: `IF3lVCAg9`, name: `k5wtIPkbZ`, type: `Identifier` },
      ],
    };
  for (let t of e) i.select.push({ collection: `IF3lVCAg9`, name: t, type: `Identifier` });
  return (await n.query(i, t)).map((n) => ({
    metadata: o(n, t),
    pathVariables: Object.fromEntries(e.map((e) => [e, n[e]])),
  }));
}
var l, u, d, f;
function p() {
  return (p = e(() => {
    (t(),
      i(),
      (l = (e) => (typeof e == `string` ? e : String(e))),
      (u = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e.src
          : typeof e == `string`
            ? e
            : void 0),
      (d = 1),
      (f = {
        exports: {
          fetchMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          fetchAllMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
export { o as a, p as i, c as n, d as o, s as r, f as t };
//# sourceMappingURL=IF3lVCAg9.kEKkYgdj.mjs.map
