import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  A as t,
  C as n,
  P as r,
  b as i,
  c as a,
  j as o,
  l as s,
  o as c,
  p as l,
  s as u,
  w as ee,
} from "./react.p3VyPFJt.mjs";
import { D as d, i as te, o as ne, t as re } from "./motion.QrWBa877.mjs";
import {
  B as f,
  C as p,
  Ct as ie,
  H as m,
  J as ae,
  Nt as h,
  O as g,
  Ot as _,
  P as v,
  T as oe,
  V as y,
  W as se,
  _t as ce,
  a as b,
  b as x,
  bt as le,
  dt as ue,
  f as S,
  ft as de,
  g as fe,
  h as pe,
  ht as me,
  i as C,
  j as he,
  jt as w,
  mt as ge,
  n as _e,
  nt as T,
  u as ve,
  wt as ye,
  xt as be,
  y as xe,
  yt as Se,
} from "./framer.CEpgxWGc.mjs";
import {
  C as E,
  D as Ce,
  E as we,
  M as Te,
  O as Ee,
  S as D,
  T as De,
  d as Oe,
  f as O,
  g as k,
  h as A,
  j,
  l as ke,
  m as Ae,
  p as je,
  u as Me,
  w as Ne,
  x as Pe,
} from "./toplevel-deps.C-kiZ8rO.mjs";
import {
  _ as M,
  c as Fe,
  g as Ie,
  h as Le,
  l as Re,
  n as ze,
  s as Be,
  t as N,
  u as P,
  v as Ve,
} from "./shared-lib.DyVg47t3.mjs";
import { n as He, t as F } from "./BS_aIWztT.lorCK4Ub.mjs";
import { n as Ue, t as I } from "./C707vaXbi.CKWdD5ko.mjs";
import { i as We, n as Ge, r as Ke, t as qe } from "./b4Vi5dGVu.rsNNFa5h.mjs";
import { i as Je, n as Ye, r as Xe, t as Ze } from "./TvB1KcdPP.DYPBTdbv.mjs";
import { n as Qe, t as L } from "./sVU2uyc7q.1Q8oHNtQ.mjs";
import {
  a as $e,
  c as et,
  d as tt,
  f as nt,
  i as rt,
  l as it,
  n as at,
  o as ot,
  r as st,
  s as ct,
  t as lt,
  u as ut,
} from "./q02gAgqMp.17HoXGLM.mjs";
import { a as dt, r as ft } from "./GOOfSxABL.twhvn8D-.mjs";
import { n as pt, t as R } from "./egdXKqnr5.C8ZEK5DQ.mjs";
import { a as mt, i as ht } from "./H3B8pYtQG.CxNdgLTQ.mjs";
var gt,
  z,
  _t,
  vt,
  yt,
  bt,
  B,
  xt,
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  V,
  H,
  U,
  W,
  kt,
  At,
  jt,
  G,
  Mt,
  Nt,
  K,
  Pt,
  q,
  Ft,
  J,
  It,
  Lt,
  Y,
  X,
  Rt,
  Z,
  zt,
  Q,
  Bt,
  Vt,
  Ht,
  $,
  Ut;
function Wt() {
  return (Wt = e(() => {
    (u(),
      ae(),
      re(),
      ee(),
      Te(),
      He(),
      Ue(),
      pt(),
      ze(),
      Qe(),
      ft(),
      Ee(),
      We(),
      nt(),
      Ne(),
      k(),
      et(),
      Ve(),
      rt(),
      P(),
      Je(),
      O(),
      ht(),
      (gt = f(N)),
      (z = h(b)),
      (_t = f(I)),
      (vt = h(p)),
      (yt = h(d.div)),
      (bt = f(R)),
      (B = w(b)),
      (xt = w(d.div)),
      (St = f(L)),
      (Ct = f(F)),
      (wt = {
        EA0LzWhot: `(min-width: 810px) and (max-width: 1199.98px)`,
        McfQq28os: `(max-width: 809.98px)`,
        s5D2kAPfe: `(min-width: 1200px)`,
      }),
      (Tt = []),
      (Et = `framer-Ei6dT`),
      (Dt = {
        EA0LzWhot: `framer-v-l5c8w8`,
        McfQq28os: `framer-v-gi4jxo`,
        s5D2kAPfe: `framer-v-ajj871`,
      }),
      (Ot = (e, t, n) => (e && t ? `position` : n)),
      (V = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (H = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: V,
        x: 0,
        y: 0,
      }),
      (U = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 20,
      }),
      (W = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (kt = (e, t, n) => {
        if (typeof e != `string`) return ``;
        let r = new Date(e);
        if (isNaN(r.getTime())) return ``;
        let i = `en-US`;
        try {
          return r.toLocaleString(n || i, t);
        } catch {
          return r.toLocaleString(i, t);
        }
      }),
      (At = { dateStyle: `medium`, timeZone: `UTC` }),
      (jt = (e, t) => kt(e, At, t)),
      (G = { bounce: 0.2, delay: 0.1, duration: 0.4, type: `spring` }),
      (Mt = {
        opacity: 0.8,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: G,
        x: 0,
        y: 0,
      }),
      (Nt = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: G,
        x: 0,
        y: 0,
      }),
      (K = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Pt = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (q = { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Ft = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: q,
        x: 0,
        y: 0,
      }),
      (J = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 20,
      }),
      (It = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: V,
        x: 0,
        y: 20,
      }),
      (Lt = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: G,
        x: 0,
        y: 20,
      }),
      (Y = (e, t) =>
        typeof e == `string` && typeof t == `string`
          ? e.toLowerCase() === t.toLowerCase()
          : e === t),
      (X = (e) => ({
        from: { alias: `lpfeM9G2F`, data: dt, type: `Collection` },
        limit: { type: `LiteralValue`, value: 10 },
        select: [
          { collection: `lpfeM9G2F`, name: `iL9ZpSkZM`, type: `Identifier` },
          { collection: `lpfeM9G2F`, name: `dsDZBGyql`, type: `Identifier` },
          { collection: `lpfeM9G2F`, name: `FRRNt7Uih`, type: `Identifier` },
          { collection: `lpfeM9G2F`, name: `I4rbfVg3w`, type: `Identifier` },
          { collection: `lpfeM9G2F`, name: `aWFsfKbgn`, type: `Identifier` },
          { collection: `lpfeM9G2F`, name: `NlibW0prl`, type: `Identifier` },
          { collection: `lpfeM9G2F`, name: `i4IC_WNq8`, type: `Identifier` },
          { collection: `lpfeM9G2F`, name: `AtGis4dQI`, type: `Identifier` },
          { collection: `lpfeM9G2F`, name: `CeOVyI4XJ`, type: `Identifier` },
          { collection: `lpfeM9G2F`, name: `id`, type: `Identifier` },
        ],
        where: {
          operator: `not`,
          type: `UnaryOperation`,
          value: {
            left: { collection: `lpfeM9G2F`, name: `aWFsfKbgn`, type: `Identifier` },
            operator: `==`,
            right: { type: `LiteralValue`, value: e },
            type: `BinaryOperation`,
          },
        },
      })),
      (Rt = ({ query: e, pageSize: t, children: n }) => n(ie(e))),
      (Z = { Desktop: `s5D2kAPfe`, Phone: `McfQq28os`, Tablet: `EA0LzWhot` }),
      (zt = ({ value: e }) =>
        ce()
          ? null
          : /*#__PURE__*/ c(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (Q = (e) => ({
        from: { alias: `H3B8pYtQG`, data: dt, type: `Collection` },
        select: [
          { collection: `H3B8pYtQG`, name: `aWFsfKbgn`, type: `Identifier` },
          { collection: `H3B8pYtQG`, name: `NlibW0prl`, type: `Identifier` },
          { collection: `H3B8pYtQG`, name: `Z0BG6Ui7w`, type: `Identifier` },
          { collection: `H3B8pYtQG`, name: `AtGis4dQI`, type: `Identifier` },
          { collection: `H3B8pYtQG`, name: `dsDZBGyql`, type: `Identifier` },
          { collection: `H3B8pYtQG`, name: `FRRNt7Uih`, type: `Identifier` },
          { collection: `H3B8pYtQG`, name: `CeOVyI4XJ`, type: `Identifier` },
          { collection: `H3B8pYtQG`, name: `I4rbfVg3w`, type: `Identifier` },
          { collection: `H3B8pYtQG`, name: `gwvbaELi_`, type: `Identifier` },
          { collection: `H3B8pYtQG`, name: `XTn_3lSiZ`, type: `Identifier` },
          { collection: `H3B8pYtQG`, name: `yDCiGQjbQ`, type: `Identifier` },
        ],
        where: e,
      })),
      (Bt = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Z[r.variant] ?? r.variant ?? `s5D2kAPfe`,
      })),
      (Vt = /*#__PURE__*/ l(function (e, l) {
        let u = i(null),
          ee = l ?? u,
          re = n(),
          { activeLocale: f, setLocale: ae } = le(),
          h = ue(),
          g = de(),
          [_] = ie(Q(se(g, `H3B8pYtQG`))),
          v = (e) => {
            if (!_) throw new fe(`No data matches path variables: ${JSON.stringify(g)}`);
            return _[e];
          },
          {
            style: y,
            className: ce,
            layoutId: w,
            variant: T,
            aWFsfKbgn: E = v(`aWFsfKbgn`) ?? ``,
            NlibW0prl: Ce = v(`NlibW0prl`) ?? ``,
            Z0BG6Ui7w: we = v(`Z0BG6Ui7w`),
            AtGis4dQI: Te = v(`AtGis4dQI`) ?? ``,
            dsDZBGyql: Ee = v(`dsDZBGyql`) ?? ``,
            FRRNt7Uih: D = v(`FRRNt7Uih`),
            CeOVyI4XJ: Oe = v(`CeOVyI4XJ`) ?? ``,
            I4rbfVg3w: O = v(`I4rbfVg3w`),
            gwvbaELi_: k = v(`gwvbaELi_`),
            XTn_3lSiZ: A = v(`XTn_3lSiZ`),
            yDCiGQjbQ: Ae = v(`yDCiGQjbQ`) ?? ``,
            ...Me
          } = Bt(e),
          Ne = o(() => mt({ aWFsfKbgn: E, I4rbfVg3w: O }, f), [E, O, f]);
        be(Ne);
        let [M, Fe] = me(T, wt, !1),
          Ie = he(Et, ke, Le, Pe, je, qe, $e, Ze, Be, De, it, lt),
          Re = t(ve)?.isLayoutTemplate,
          ze = !!t(ne)?.transition?.layout,
          P = Ot(Re, ze),
          Ve = Se(),
          He = ye(`tjzIyd5Jo`),
          Ue = i(null);
        return (
          ge({}),
          /*#__PURE__*/ c(ve.Provider, {
            value: {
              activeVariantId: M,
              humanReadableVariantMap: Z,
              primaryVariantId: `s5D2kAPfe`,
              variantClassNames: Dt,
            },
            children: /*#__PURE__*/ s(te, {
              id: w ?? re,
              children: [
                /*#__PURE__*/ c(zt, {
                  value: `html body { background: var(--token-a9c881b7-a087-4bee-a49f-befc82631c31, rgb(242, 242, 242)); }`,
                }),
                /*#__PURE__*/ s(d.div, {
                  ...Me,
                  className: he(Ie, `framer-ajj871`, ce),
                  ref: ee,
                  style: { ...y },
                  children: [
                    /*#__PURE__*/ s(d.header, {
                      className: `framer-1iomhgk`,
                      "data-border": !0,
                      "data-framer-name": `Hero Wrapper`,
                      layout: P,
                      children: [
                        /*#__PURE__*/ c(`div`, {
                          className: `framer-yghoeb`,
                          children: /*#__PURE__*/ c(`div`, {
                            className: `framer-6s85ke`,
                            children: /*#__PURE__*/ s(`div`, {
                              className: `framer-1qd0yr2`,
                              "data-framer-name": `H1 + Para`,
                              children: [
                                /*#__PURE__*/ c(`div`, {
                                  className: `framer-5udubb`,
                                  children: /*#__PURE__*/ s(`div`, {
                                    className: `framer-tp1xef`,
                                    children: [
                                      /*#__PURE__*/ s(`div`, {
                                        className: `framer-lu4cue`,
                                        children: [
                                          /*#__PURE__*/ c(C, {
                                            height: 40,
                                            y:
                                              (h?.y || 0) +
                                              140 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              160 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              3.5,
                                            children: /*#__PURE__*/ c(z, {
                                              animate: H,
                                              className: `framer-76y6ym-container`,
                                              "data-framer-appear-id": `76y6ym`,
                                              initial: U,
                                              nodeId: `BjhY3jnM3`,
                                              optimized: !0,
                                              rendersWithMotion: !0,
                                              scopeId: `H3B8pYtQG`,
                                              children: /*#__PURE__*/ c(N, {
                                                gJ8H561ZB: Te,
                                                height: `100%`,
                                                id: `BjhY3jnM3`,
                                                layoutId: `BjhY3jnM3`,
                                                variant: W(`WgYBRr9mM`),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                          /*#__PURE__*/ c(C, {
                                            height: 47,
                                            y:
                                              (h?.y || 0) +
                                              140 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              160 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                            children: /*#__PURE__*/ c(z, {
                                              animate: H,
                                              className: `framer-1qs6vt4-container`,
                                              "data-framer-appear-id": `1qs6vt4`,
                                              initial: U,
                                              nodeId: `A67l1dZkU`,
                                              optimized: !0,
                                              rendersWithMotion: !0,
                                              scopeId: `H3B8pYtQG`,
                                              children: /*#__PURE__*/ c(I, {
                                                EUBO2osZo: `var(--token-4608043d-0105-434c-bf26-f4b71a19bbe5, rgb(51, 51, 51))`,
                                                height: `100%`,
                                                id: `A67l1dZkU`,
                                                layoutId: `A67l1dZkU`,
                                                Mn4MWxttI: `var(--token-a9c881b7-a087-4bee-a49f-befc82631c31, rgb(242, 242, 242))`,
                                                QhARj87DK: jt(we, Ve),
                                                variant: W(`GBYPdzICv`),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                          /*#__PURE__*/ c(C, {
                                            height: 47,
                                            y:
                                              (h?.y || 0) +
                                              140 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              160 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                            children: /*#__PURE__*/ c(z, {
                                              animate: H,
                                              className: `framer-ys0wwo-container`,
                                              "data-framer-appear-id": `ys0wwo`,
                                              initial: U,
                                              nodeId: `rvrByECZJ`,
                                              optimized: !0,
                                              rendersWithMotion: !0,
                                              scopeId: `H3B8pYtQG`,
                                              children: /*#__PURE__*/ c(I, {
                                                EUBO2osZo: `var(--token-4608043d-0105-434c-bf26-f4b71a19bbe5, rgb(51, 51, 51))`,
                                                height: `100%`,
                                                id: `rvrByECZJ`,
                                                layoutId: `rvrByECZJ`,
                                                Mn4MWxttI: `var(--token-a9c881b7-a087-4bee-a49f-befc82631c31, rgb(242, 242, 242))`,
                                                QhARj87DK: Oe,
                                                variant: W(`GBYPdzICv`),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                      /*#__PURE__*/ s(yt, {
                                        animate: H,
                                        className: `framer-5zbfgs`,
                                        "data-framer-appear-id": `5zbfgs`,
                                        "data-framer-name": `h1`,
                                        initial: U,
                                        optimized: !0,
                                        children: [
                                          /*#__PURE__*/ c(p, {
                                            __fromCanvasComponent: !0,
                                            children: /*#__PURE__*/ c(r, {
                                              children: /*#__PURE__*/ c(`h1`, {
                                                className: `framer-styles-preset-1q787c3`,
                                                "data-styles-preset": `y8eR9t98C`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                                                },
                                                children: `Insights That Drive`,
                                              }),
                                            }),
                                            className: `framer-wa1xn2`,
                                            fonts: [`Inter`],
                                            text: E,
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          /*#__PURE__*/ c(vt, {
                                            __fromCanvasComponent: !0,
                                            animate: Mt,
                                            children: /*#__PURE__*/ c(r, {
                                              children: /*#__PURE__*/ c(`p`, {
                                                className: `framer-styles-preset-oeqwx2`,
                                                "data-styles-preset": `oInb0ma47`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                                                },
                                                children: `Break down the exact mistakes that kill retention — and how to fix them instantly.`,
                                              }),
                                            }),
                                            className: `framer-17otfna`,
                                            "data-framer-appear-id": `17otfna`,
                                            fonts: [`Inter`],
                                            initial: U,
                                            optimized: !0,
                                            text: Ce,
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                                /*#__PURE__*/ c(C, {
                                  height: 49,
                                  y: (h?.y || 0) + 140 + 0 + 0 + 0 + 0 + 160 + 0 + 0 + 319,
                                  children: /*#__PURE__*/ c(z, {
                                    animate: Nt,
                                    className: `framer-xvi9b6-container`,
                                    "data-framer-appear-id": `xvi9b6`,
                                    initial: U,
                                    nodeId: `rvZ0Tb1To`,
                                    optimized: !0,
                                    rendersWithMotion: !0,
                                    scopeId: `H3B8pYtQG`,
                                    children: /*#__PURE__*/ c(R, {
                                      ENWvXsjzc: Ee,
                                      gZ_iLYKZ6: K(D),
                                      height: `100%`,
                                      id: `rvZ0Tb1To`,
                                      layoutId: `rvZ0Tb1To`,
                                      T4oPRTdmz: `Author`,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                        /*#__PURE__*/ c(B, {
                          __framer__animate: { transition: q },
                          __framer__animateOnce: !1,
                          __framer__enter: Pt,
                          __framer__exit: Ft,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-1vd2a4b-container`,
                          children: /*#__PURE__*/ c(x, {
                            breakpoint: M,
                            overrides: {
                              EA0LzWhot: {
                                fallbackImage: `https://framerusercontent.com/images/d6uf2mq4gpyZlUitMdS8DtGpyQ.png?scale-down-to=810&width=1620&height=1169`,
                              },
                              McfQq28os: {
                                fallbackImage: `https://framerusercontent.com/images/7EjdYSHdg6mmOvD0oBBMkUWWY.png?scale-down-to=495&width=780&height=989`,
                              },
                            },
                            children: /*#__PURE__*/ c(oe, {
                              __fromCanvasComponent: !0,
                              animated: j.animated,
                              buffers: j.buffers,
                              fallbackImage: `https://framerusercontent.com/images/p5c0vLSzxb3GL7ZNkPTGY9uo2U.png?scale-down-to=1200&width=2400&height=1234`,
                              fragmentShader: j.fragment,
                              height: `100%`,
                              heightmapSource: j.heightmapSource,
                              mode: `progressive`,
                              mouse: j.mouse && { enabled: j.mouse === `enabledByDefault` },
                              resolutionScale: j.resolutionScale,
                              skipInitialFallback: !0,
                              uniforms: {
                                u_blendAmount: { type: `number`, value: 0.54 },
                                u_colors: {
                                  type: `array`,
                                  value: [
                                    `var(--token-a9c881b7-a087-4bee-a49f-befc82631c31, rgb(242, 242, 242))`,
                                    `rgb(207, 207, 207)`,
                                    `var(--token-a9c881b7-a087-4bee-a49f-befc82631c31, rgb(242, 242, 242))`,
                                    `rgb(227, 227, 227)`,
                                  ],
                                },
                                u_maskSoftness: { type: `number`, value: 2 },
                                u_seed: { type: `number`, value: 32 },
                                u_waveAmplitude: { type: `number`, value: 3 },
                                u_waveAngle: { type: `number`, value: 112 },
                                u_waveFreqX: { type: `number`, value: 1.3 },
                                u_waveFreqY: { type: `number`, value: 6 },
                                u_waveSpeed: { type: `number`, value: 0.61 },
                              },
                              vertexShader: j.vertex,
                              width: `100%`,
                            }),
                          }),
                        }),
                      ],
                    }),
                    /*#__PURE__*/ s(d.div, {
                      className: `framer-ytkg3o`,
                      layout: P,
                      children: [
                        /*#__PURE__*/ s(`div`, {
                          className: `framer-1didsxh`,
                          children: [
                            /*#__PURE__*/ c(x, {
                              breakpoint: M,
                              overrides: {
                                EA0LzWhot: {
                                  background: {
                                    alt: `a person holding a cell phone in their hand`,
                                    fit: `fill`,
                                    loading: m((h?.y || 0) + 140 + 788 + 100 + 0 + 0 + 0),
                                    pixelHeight: 4e3,
                                    pixelWidth: 6e3,
                                    sizes: `calc(min(${h?.width || `100vw`} - 40px, 1050px) - 40px)`,
                                    ...K(O),
                                  },
                                },
                                McfQq28os: {
                                  background: {
                                    alt: `a person holding a cell phone in their hand`,
                                    fit: `fill`,
                                    loading: m((h?.y || 0) + 140 + 748 + 60 + 0 + 0 + 0),
                                    pixelHeight: 4e3,
                                    pixelWidth: 6e3,
                                    sizes: `calc(min(${h?.width || `100vw`} - 40px, 1050px) - 40px)`,
                                    ...K(O),
                                  },
                                },
                              },
                              children: /*#__PURE__*/ c(S, {
                                background: {
                                  alt: `a person holding a cell phone in their hand`,
                                  fit: `fill`,
                                  loading: m((h?.y || 0) + 140 + 788 + 100 + 0 + 0 + 0),
                                  pixelHeight: 4e3,
                                  pixelWidth: 6e3,
                                  sizes: `min(${h?.width || `100vw`} - 40px, 1050px)`,
                                  ...K(O),
                                },
                                className: `framer-1su6n3e`,
                                "data-framer-name": `Banner`,
                                fitImageDimension: `height`,
                              }),
                            }),
                            /*#__PURE__*/ s(`div`, {
                              className: `framer-bo73ao`,
                              children: [
                                /*#__PURE__*/ c(x, {
                                  breakpoint: M,
                                  overrides: {
                                    EA0LzWhot: {
                                      background: {
                                        alt: `person using both laptop and smartphone`,
                                        fit: `fill`,
                                        loading: m((h?.y || 0) + 140 + 788 + 100 + 0 + 0 + 523 + 0),
                                        pixelHeight: 3233,
                                        pixelWidth: 4849,
                                        sizes: `max((min(${h?.width || `100vw`} - 40px, 1050px) - 50px) / 2, 1px)`,
                                        ...K(k),
                                      },
                                    },
                                    McfQq28os: {
                                      background: {
                                        alt: `person using both laptop and smartphone`,
                                        fit: `fill`,
                                        loading: m(
                                          (h?.y || 0) + 140 + 748 + 60 + 0 + 0 + 243 + 0 + 0
                                        ),
                                        pixelHeight: 3233,
                                        pixelWidth: 4849,
                                        sizes: `calc(min(${h?.width || `100vw`} - 40px, 1050px) - 40px)`,
                                        ...K(k),
                                      },
                                      fitImageDimension: `height`,
                                    },
                                  },
                                  children: /*#__PURE__*/ c(S, {
                                    background: {
                                      alt: `person using both laptop and smartphone`,
                                      fit: `fill`,
                                      loading: m((h?.y || 0) + 140 + 788 + 100 + 0 + 0 + 710 + 0),
                                      pixelHeight: 3233,
                                      pixelWidth: 4849,
                                      sizes: `max((min(${h?.width || `100vw`} - 40px, 1050px) - 10px) / 2, 1px)`,
                                      ...K(k),
                                    },
                                    className: `framer-3l74ks`,
                                    "data-framer-name": `Banner`,
                                  }),
                                }),
                                /*#__PURE__*/ c(x, {
                                  breakpoint: M,
                                  overrides: {
                                    EA0LzWhot: {
                                      background: {
                                        alt: `boy in black long sleeve shirt sitting on chair in front of black flat screen tv`,
                                        fit: `fill`,
                                        loading: m((h?.y || 0) + 140 + 788 + 100 + 0 + 0 + 523 + 0),
                                        pixelHeight: 4916,
                                        pixelWidth: 3933,
                                        sizes: `max((min(${h?.width || `100vw`} - 40px, 1050px) - 50px) / 2, 1px)`,
                                        ...K(A),
                                      },
                                    },
                                    McfQq28os: {
                                      background: {
                                        alt: `boy in black long sleeve shirt sitting on chair in front of black flat screen tv`,
                                        fit: `fill`,
                                        loading: m(
                                          (h?.y || 0) + 140 + 748 + 60 + 0 + 0 + 243 + 0 + 243
                                        ),
                                        pixelHeight: 4916,
                                        pixelWidth: 3933,
                                        sizes: `calc(min(${h?.width || `100vw`} - 40px, 1050px) - 40px)`,
                                        ...K(A),
                                      },
                                      fitImageDimension: `height`,
                                    },
                                  },
                                  children: /*#__PURE__*/ c(S, {
                                    background: {
                                      alt: `boy in black long sleeve shirt sitting on chair in front of black flat screen tv`,
                                      fit: `fill`,
                                      loading: m((h?.y || 0) + 140 + 788 + 100 + 0 + 0 + 710 + 0),
                                      pixelHeight: 4916,
                                      pixelWidth: 3933,
                                      sizes: `max((min(${h?.width || `100vw`} - 40px, 1050px) - 10px) / 2, 1px)`,
                                      ...K(A),
                                    },
                                    className: `framer-9d0cy0`,
                                    "data-framer-name": `Banner`,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        /*#__PURE__*/ c(p, {
                          __fromCanvasComponent: !0,
                          children: Ae,
                          className: `framer-vcasyt`,
                          "data-framer-name": `Content`,
                          fonts: [`Inter`],
                          stylesPresetsClassNames: {
                            a: `framer-styles-preset-6ovftn`,
                            blockquote: `framer-styles-preset-1mjxuqs`,
                            code: `framer-styles-preset-140re42`,
                            h1: `framer-styles-preset-1q787c3`,
                            h2: `framer-styles-preset-151rane`,
                            h3: `framer-styles-preset-mcct0z`,
                            h4: `framer-styles-preset-liyb9t`,
                            h5: `framer-styles-preset-j9rsvf`,
                            h6: `framer-styles-preset-qhwfes`,
                            p: `framer-styles-preset-nkt4ib`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    /*#__PURE__*/ c(d.div, {
                      className: `framer-12m1986`,
                      "data-framer-name": `Blog`,
                      layout: P,
                      children: /*#__PURE__*/ s(`div`, {
                        className: `framer-1ghtybm`,
                        children: [
                          /*#__PURE__*/ c(`div`, {
                            className: `framer-8zbo2b`,
                            "data-framer-name": `H1 + Para`,
                            children: /*#__PURE__*/ s(`div`, {
                              className: `framer-zl3ctz`,
                              children: [
                                /*#__PURE__*/ c(x, {
                                  breakpoint: M,
                                  overrides: {
                                    EA0LzWhot: {
                                      y: (h?.y || 0) + 140 + 2227 + 0 + 0 + 100 + 0 + 0 + 0 + 0 + 0,
                                    },
                                    McfQq28os: {
                                      y: (h?.y || 0) + 140 + 2107 + 0 + 0 + 100 + 0 + 0 + 0 + 0 + 0,
                                    },
                                  },
                                  children: /*#__PURE__*/ c(C, {
                                    height: 40,
                                    y: (h?.y || 0) + 140 + 2414 + 0 + 0 + 100 + 0 + 0 + 0 + 0 + 0,
                                    children: /*#__PURE__*/ c(B, {
                                      __framer__animate: { transition: V },
                                      __framer__animateOnce: !0,
                                      __framer__enter: J,
                                      __framer__exit: It,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0.5,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-128xpwt-container`,
                                      nodeId: `OLnSBBGbV`,
                                      rendersWithMotion: !0,
                                      scopeId: `H3B8pYtQG`,
                                      children: /*#__PURE__*/ c(N, {
                                        gJ8H561ZB: `Blog`,
                                        height: `100%`,
                                        id: `OLnSBBGbV`,
                                        layoutId: `OLnSBBGbV`,
                                        variant: W(`WgYBRr9mM`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                                /*#__PURE__*/ c(xt, {
                                  __framer__animate: { transition: G },
                                  __framer__animateOnce: !0,
                                  __framer__enter: J,
                                  __framer__exit: Lt,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-750wvv`,
                                  "data-framer-name": `h1`,
                                  children: /*#__PURE__*/ c(p, {
                                    __fromCanvasComponent: !0,
                                    children: /*#__PURE__*/ c(r, {
                                      children: /*#__PURE__*/ c(`h2`, {
                                        className: `framer-styles-preset-151rane`,
                                        "data-styles-preset": `F2j_sq2oH`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                                        },
                                        children: `More insights that drive proper growth`,
                                      }),
                                    }),
                                    className: `framer-1ahzbo9`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                          }),
                          /*#__PURE__*/ c(`div`, {
                            className: `framer-bg2y9h`,
                            children: /*#__PURE__*/ c(_e, {
                              children: /*#__PURE__*/ c(Rt, {
                                query: X(E),
                                children: (e, t, n) => {
                                  let i = e?.length ?? 0,
                                    o = Y(i, 0);
                                  return /*#__PURE__*/ s(a, {
                                    children: [
                                      e?.map(
                                        (
                                          {
                                            AtGis4dQI: e,
                                            aWFsfKbgn: t,
                                            CeOVyI4XJ: n,
                                            dsDZBGyql: r,
                                            FRRNt7Uih: i,
                                            i4IC_WNq8: a,
                                            I4rbfVg3w: o,
                                            id: s,
                                            iL9ZpSkZM: l,
                                            NlibW0prl: u,
                                          },
                                          ee
                                        ) => (
                                          (l ??= ``),
                                          (r ??= ``),
                                          (t ??= ``),
                                          (u ??= ``),
                                          (a ??= !0),
                                          (e ??= ``),
                                          (n ??= ``),
                                          /*#__PURE__*/ c(
                                            te,
                                            {
                                              id: `lpfeM9G2F-${s}`,
                                              children: /*#__PURE__*/ c(xe.Provider, {
                                                value: { iL9ZpSkZM: l },
                                                children: /*#__PURE__*/ c(pe, {
                                                  href: {
                                                    pathVariables: { iL9ZpSkZM: l },
                                                    webPageId: `H3B8pYtQG`,
                                                  },
                                                  motionChild: !0,
                                                  nodeId: `gFuIrRdBo`,
                                                  scopeId: `H3B8pYtQG`,
                                                  children: /*#__PURE__*/ c(d.a, {
                                                    className: `framer-kxpuos framer-1h078qa`,
                                                    children: /*#__PURE__*/ c(x, {
                                                      breakpoint: M,
                                                      overrides: {
                                                        EA0LzWhot: {
                                                          width: `max(max(min(${h?.width || `100vw`} - 40px, 1050px) - 40px, 50px), 1px)`,
                                                          y:
                                                            (h?.y || 0) +
                                                            140 +
                                                            2227 +
                                                            0 +
                                                            0 +
                                                            100 +
                                                            173.8 +
                                                            0 +
                                                            0 +
                                                            0,
                                                        },
                                                        McfQq28os: {
                                                          width: `max(max(min(${h?.width || `100vw`} - 40px, 1050px) - 40px, 50px), 1px)`,
                                                          y:
                                                            (h?.y || 0) +
                                                            140 +
                                                            2107 +
                                                            0 +
                                                            0 +
                                                            100 +
                                                            143.8 +
                                                            0 +
                                                            0 +
                                                            0,
                                                        },
                                                      },
                                                      children: /*#__PURE__*/ c(C, {
                                                        height: 600,
                                                        width: `max(max((min(${h?.width || `100vw`} - 40px, 1050px) - 10px) / 2, 50px), 1px)`,
                                                        y:
                                                          (h?.y || 0) +
                                                          140 +
                                                          2414 +
                                                          0 +
                                                          0 +
                                                          100 +
                                                          173.8 +
                                                          0 +
                                                          0 +
                                                          0,
                                                        children: /*#__PURE__*/ c(b, {
                                                          className: `framer-9nlaos-container`,
                                                          nodeId: `TXJ3FN36M`,
                                                          scopeId: `H3B8pYtQG`,
                                                          children: /*#__PURE__*/ c(L, {
                                                            bsDCZchni: `var(--token-a9c881b7-a087-4bee-a49f-befc82631c31, rgb(242, 242, 242))`,
                                                            DhLlEvLaE: e,
                                                            foAQUCBnE: `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                                                            height: `100%`,
                                                            hFaiNEXka: n,
                                                            id: `TXJ3FN36M`,
                                                            iLHjFY0be: K(o),
                                                            iPYaynR38: a,
                                                            KjEnGrkde: u,
                                                            layoutId: `TXJ3FN36M`,
                                                            LQaN4Yv7B: r,
                                                            SrF5YknXa: `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                                                            style: { width: `100%` },
                                                            tIeCith52: t,
                                                            variant: W(`rlXQaNieG`),
                                                            w3kBo1Ri2: K(i),
                                                            width: `100%`,
                                                            Yl065Fy4l: `var(--token-a9c881b7-a087-4bee-a49f-befc82631c31, rgb(242, 242, 242))`,
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            },
                                            s
                                          )
                                        )
                                      ),
                                      o !== !1 &&
                                        /*#__PURE__*/ c(`div`, {
                                          className: `framer-1rbd9fn`,
                                          "data-border": !0,
                                          "data-framer-name": `Empty State`,
                                          children: /*#__PURE__*/ c(p, {
                                            __fromCanvasComponent: !0,
                                            children: /*#__PURE__*/ c(r, {
                                              children: /*#__PURE__*/ c(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `rgb(153, 153, 153)`,
                                                },
                                                children: `No items`,
                                              }),
                                            }),
                                            className: `framer-1pjtiuv`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                    ],
                                  });
                                },
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                    /*#__PURE__*/ c(x, {
                      breakpoint: M,
                      overrides: {
                        EA0LzWhot: { y: (h?.y || 0) + 140 + 3970.8 },
                        McfQq28os: { y: (h?.y || 0) + 140 + 3220.8 },
                      },
                      children: /*#__PURE__*/ c(C, {
                        height: 867,
                        width: `calc(${h?.width || `100vw`} - 40px)`,
                        y: (h?.y || 0) + 140 + 4157.8,
                        children: /*#__PURE__*/ c(b, {
                          className: `framer-hbtbtp-container`,
                          id: He,
                          layout: P,
                          nodeId: `tjzIyd5Jo`,
                          ref: Ue,
                          scopeId: `H3B8pYtQG`,
                          children: /*#__PURE__*/ c(x, {
                            breakpoint: M,
                            overrides: {
                              EA0LzWhot: {
                                mv4nSZxSZ: `100px 20px 100px 20px`,
                                variant: W(`Tevou_hBQ`),
                              },
                              McfQq28os: {
                                mv4nSZxSZ: `60px 20px 60px 20px`,
                                variant: W(`IBr5aMcRq`),
                              },
                            },
                            children: /*#__PURE__*/ c(F, {
                              height: `100%`,
                              id: `tjzIyd5Jo`,
                              KcJ7oF4Ul: `var(--token-a9c881b7-a087-4bee-a49f-befc82631c31, rgb(242, 242, 242))`,
                              layoutId: `tjzIyd5Jo`,
                              mv4nSZxSZ: `100px 0px 100px 0px`,
                              style: { width: `100%` },
                              variant: W(`Af0aSGxHz`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                /*#__PURE__*/ c(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      })),
      (Ht = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-Ei6dT.framer-1h078qa, .framer-Ei6dT .framer-1h078qa { display: block; }`,
        `.framer-Ei6dT.framer-ajj871 { align-content: center; align-items: center; background-color: var(--token-a9c881b7-a087-4bee-a49f-befc82631c31, #f2f2f2); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 160px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 140px 20px 140px 20px; position: relative; width: 1200px; }`,
        `.framer-Ei6dT .framer-1iomhgk { --border-bottom-width: 1px; --border-color: var(--token-7f38a5f7-db27-44de-8aa2-b6753f733c7b, #dbdbdb); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, #ffffff); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Ei6dT .framer-yghoeb { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1050px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Ei6dT .framer-6s85ke { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: center; max-width: 1050px; overflow: visible; padding: 160px 0px 100px 0px; position: relative; width: 1px; }`,
        `.framer-Ei6dT .framer-1qd0yr2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; max-width: 650px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-Ei6dT .framer-5udubb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Ei6dT .framer-tp1xef, .framer-Ei6dT .framer-zl3ctz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Ei6dT .framer-lu4cue, .framer-Ei6dT .framer-bo73ao { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Ei6dT .framer-76y6ym-container, .framer-Ei6dT .framer-1qs6vt4-container, .framer-Ei6dT .framer-ys0wwo-container, .framer-Ei6dT .framer-xvi9b6-container { flex: none; height: auto; position: relative; width: auto; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-Ei6dT .framer-5zbfgs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-Ei6dT .framer-wa1xn2, .framer-Ei6dT .framer-1ahzbo9 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Ei6dT .framer-17otfna { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; opacity: 0.8; position: relative; white-space: pre-wrap; width: 90%; will-change: var(--framer-will-change-effect-override, transform); word-break: break-word; word-wrap: break-word; }`,
        `.framer-Ei6dT .framer-1vd2a4b-container { -webkit-mask: linear-gradient(0deg, rgba(0, 0, 0, 0) 3%, rgba(0,0,0,1) 37%, rgba(0,0,0,1) 72%, rgba(0, 0, 0, 0) 95%) add; bottom: 0px; flex: none; left: 0px; mask: linear-gradient(0deg, rgba(0,0,0,0) 3%, rgba(0,0,0,1) 37%, rgba(0,0,0,1) 72%, rgba(0, 0, 0, 0) 95%) add; position: absolute; right: 0px; top: 0px; z-index: 0; }`,
        `.framer-Ei6dT .framer-ytkg3o { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; max-width: 1050px; padding: 100px 0px 100px 0px; position: relative; width: 100%; }`,
        `.framer-Ei6dT .framer-1didsxh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Ei6dT .framer-1su6n3e { border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-Ei6dT .framer-3l74ks, .framer-Ei6dT .framer-9d0cy0 { border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; flex: 1 0 0px; height: 400px; position: relative; width: 1px; }`,
        `.framer-Ei6dT .framer-vcasyt { --framer-paragraph-spacing: 32px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Ei6dT .framer-12m1986 { align-content: center; align-items: center; background-color: var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, #ffffff); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Ei6dT .framer-1ghtybm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; max-width: 1050px; overflow: var(--overflow-clip-fallback, clip); padding: 100px 0px 100px 0px; position: relative; width: 100%; }`,
        `.framer-Ei6dT .framer-8zbo2b { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; max-width: 650px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-Ei6dT .framer-128xpwt-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-Ei6dT .framer-750wvv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Ei6dT .framer-bg2y9h { display: grid; flex: none; gap: 10px 10px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Ei6dT .framer-kxpuos { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; text-decoration: none; width: 100%; }`,
        `.framer-Ei6dT .framer-9nlaos-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-Ei6dT .framer-1rbd9fn { --border-bottom-width: 1px; --border-color: rgba(136, 136, 136, 0.2); --border-left-width: 1px; --border-right-width: 1px; --border-style: dashed; --border-top-width: 1px; align-content: center; align-items: center; align-self: start; background-color: rgba(204, 204, 204, 0.2); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100px; justify-content: center; justify-self: start; min-height: 100%; min-width: 100%; padding: 10px; position: relative; width: 100%; }`,
        `.framer-Ei6dT .framer-1pjtiuv { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-Ei6dT .framer-hbtbtp-container { flex: none; height: auto; position: relative; width: 100%; }`,
        ...Me,
        ...Ie,
        ...D,
        ...Ae,
        ...Ge,
        ...ot,
        ...Ye,
        ...Fe,
        ...we,
        ...ut,
        ...at,
        `.framer-Ei6dT[data-border="true"]::after, .framer-Ei6dT [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-Ei6dT.framer-ajj871 { width: 810px; } .framer-Ei6dT .framer-6s85ke { padding: 160px 20px 100px 20px; } .framer-Ei6dT .framer-1qd0yr2, .framer-Ei6dT .framer-8zbo2b { max-width: 500px; } .framer-Ei6dT .framer-ytkg3o, .framer-Ei6dT .framer-1ghtybm { padding: 100px 20px 100px 20px; } .framer-Ei6dT .framer-bg2y9h { grid-template-columns: repeat(1, minmax(50px, 1fr)); }}`,
        `@media (max-width: 809.98px) { .framer-Ei6dT.framer-ajj871 { width: 390px; } .framer-Ei6dT .framer-6s85ke { padding: 160px 20px 60px 20px; } .framer-Ei6dT .framer-1qd0yr2, .framer-Ei6dT .framer-8zbo2b { max-width: 380px; } .framer-Ei6dT .framer-ytkg3o { padding: 60px 20px 60px 20px; } .framer-Ei6dT .framer-bo73ao { flex-direction: column; } .framer-Ei6dT .framer-3l74ks, .framer-Ei6dT .framer-9d0cy0 { flex: none; height: auto; width: 100%; } .framer-Ei6dT .framer-1ghtybm { gap: 30px; padding: 100px 20px 100px 20px; } .framer-Ei6dT .framer-bg2y9h { grid-auto-rows: min-content; grid-template-columns: repeat(1, minmax(50px, 1fr)); }}`,
      ]),
      ($ = _(Vt, Ht, `framer-Ei6dT`)),
      ($.displayName = `Articles`),
      ($.defaultProps = { height: 7324, width: 1200 }),
      g(
        $,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...gt,
          ..._t,
          ...bt,
          ...St,
          ...Ct,
          ...y(Oe),
          ...y(M),
          ...y(E),
          ...y(A),
          ...y(Ke),
          ...y(ct),
          ...y(Xe),
          ...y(Re),
          ...y(Ce),
          ...y(tt),
          ...y(st),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      ($.loader = {
        load: (e, t) => {
          let n = t.locale,
            r = T.get(Q(se(t.pathVariables, `H3B8pYtQG`)), n).readMaybeAsync();
          return Promise.allSettled([
            v(N, {}, t),
            v(I, {}, t),
            v(R, {}, t),
            v(F, {}, t),
            (async () => {
              let [e] = (await r) ?? [];
              return T.get(X(e?.aWFsfKbgn), n).preload();
            })(),
            (async () => {
              let [e] = (await r) ?? [],
                i = (await T.get(X(e?.aWFsfKbgn), n).readMaybeAsync()) ?? [];
              return Promise.allSettled(i.flatMap((e) => v(L, {}, t)));
            })(),
          ]);
        },
      }),
      (Ut = {
        exports: {
          queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FramerH3B8pYtQG`,
            slots: [],
            annotations: {
              framerContractVersion: `1`,
              framerImmutableVariables: `true`,
              framerAutoSizeImages: `true`,
              framerIntrinsicHeight: `7324`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"EA0LzWhot":{"layout":["fixed","auto"]},"McfQq28os":{"layout":["fixed","auto"]}}}`,
              framerColorSyntax: `true`,
              framerAcceptsLayoutTemplate: `true`,
              framerComponentViewportWidth: `true`,
              framerDisplayContentsDiv: `false`,
              framerScrollSections: `{"tjzIyd5Jo":{"pattern":":tjzIyd5Jo","name":"contact"}}`,
              framerResponsiveScreen: `true`,
              framerLayoutTemplateFlowEffect: `true`,
              framerIntrinsicWidth: `1200`,
            },
          },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
Wt();
export { Ut as __FramerMetadata__, $ as default, Tt as queryParamNames };
//# sourceMappingURL=-AEVOMebNl3SiJmY3uxzIc3b5551bLC9Yy1dl8S0PyE.CJOxJYRk.mjs.map
