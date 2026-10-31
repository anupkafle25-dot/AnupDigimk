import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import { J as t, W as n, x as r } from "./framer.CEpgxWGc.mjs";
import { a as i, r as a } from "./GOOfSxABL.twhvn8D-.mjs";
function o(e, t) {
  let n = e?.aWFsfKbgn,
    r = e?.I4rbfVg3w;
  return {
    breakpoints: [
      { hash: `ajj871`, mediaQuery: `(min-width: 1200px)` },
      { hash: `l5c8w8`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `gi4jxo`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: `Learn actionable strategies, content frameworks, and real-world insights to improve video performance and engagement.`,
    elements: { tjzIyd5Jo: `contact` },
    framerSearch: { index: !0 },
    robots: `max-image-preview:large`,
    serializationId: `framer-Ei6dT`,
    socialImage: u(r),
    title: `${n === void 0 ? `{{aWFsfKbgn}}` : l(n)} — Content Growth Insights`,
    viewport: `width=device-width`,
  };
}
async function s(e, t) {
  let a = new r(),
    s = {
      from: { alias: `H3B8pYtQG`, data: i, type: `Collection` },
      select: [
        { collection: `H3B8pYtQG`, name: `aWFsfKbgn`, type: `Identifier` },
        { collection: `H3B8pYtQG`, name: `I4rbfVg3w`, type: `Identifier` },
      ],
      where: n(e, `H3B8pYtQG`),
    },
    c = await a.query(s, t);
  if (c.length === 0) throw Error(`No data matches pathVariables`);
  let l = c[0];
  return o(l, t);
}
async function c(e, t) {
  let n = new r(),
    a = {
      from: { alias: `H3B8pYtQG`, data: i, type: `Collection` },
      select: [
        { collection: `H3B8pYtQG`, name: `aWFsfKbgn`, type: `Identifier` },
        { collection: `H3B8pYtQG`, name: `I4rbfVg3w`, type: `Identifier` },
      ],
    };
  for (let t of e) a.select.push({ collection: `H3B8pYtQG`, name: t, type: `Identifier` });
  return (await n.query(a, t)).map((n) => ({
    metadata: o(n, t),
    pathVariables: Object.fromEntries(e.map((e) => [e, n[e]])),
  }));
}
var l, u, d, f;
function p() {
  return (p = e(() => {
    (t(),
      a(),
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
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          fetchAllMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
export { o as a, p as i, c as n, d as o, s as r, f as t };
//# sourceMappingURL=H3B8pYtQG.CxNdgLTQ.mjs.map
