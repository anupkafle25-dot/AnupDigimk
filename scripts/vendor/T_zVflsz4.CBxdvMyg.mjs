import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import { J as t, W as n, x as r } from "./framer.CEpgxWGc.mjs";
import { i, t as a } from "./NvVsF9Krs.G4seV-0d.mjs";
function o(e, t) {
  let n = e?.kg2UHbfa9;
  return {
    breakpoints: [
      { hash: `1vuyrod`, mediaQuery: `(min-width: 1200px)` },
      { hash: `5u9f5w`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `914a4e`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: `Read our policies including privacy, terms of service, and other legal information regarding the use of this website.`,
    elements: {},
    framerSearch: { index: !0 },
    robots: `max-image-preview:large`,
    serializationId: `framer-DopbF`,
    socialImage: `https://framerusercontent.com/assets/h7tNfuaSddR1o7nNLm1U35pSrc.jpg`,
    title: `${n === void 0 ? `{{kg2UHbfa9}}` : l(n)} - Reelo - Short Content Agency`,
    viewport: `width=device-width`,
  };
}
async function s(e, t) {
  let i = new r(),
    s = {
      from: { alias: `T_zVflsz4`, data: a, type: `Collection` },
      select: [{ collection: `T_zVflsz4`, name: `kg2UHbfa9`, type: `Identifier` }],
      where: n(e, `T_zVflsz4`),
    },
    c = await i.query(s, t);
  if (c.length === 0) throw Error(`No data matches pathVariables`);
  let l = c[0];
  return o(l, t);
}
async function c(e, t) {
  let n = new r(),
    i = {
      from: { alias: `T_zVflsz4`, data: a, type: `Collection` },
      select: [{ collection: `T_zVflsz4`, name: `kg2UHbfa9`, type: `Identifier` }],
    };
  for (let t of e) i.select.push({ collection: `T_zVflsz4`, name: t, type: `Identifier` });
  return (await n.query(i, t)).map((n) => ({
    metadata: o(n, t),
    pathVariables: Object.fromEntries(e.map((e) => [e, n[e]])),
  }));
}
var l, u, d;
function f() {
  return (f = e(() => {
    (t(),
      i(),
      (l = (e) => (typeof e == `string` ? e : String(e))),
      (u = 1),
      (d = {
        exports: {
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          fetchMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          fetchAllMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
export { o as a, f as i, c as n, u as o, s as r, d as t };
//# sourceMappingURL=T_zVflsz4.CBxdvMyg.mjs.map
