import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  A as t,
  C as n,
  P as r,
  b as ee,
  j as te,
  l as i,
  o as a,
  p as o,
  s,
  w as c,
} from "./react.p3VyPFJt.mjs";
import { D as l, i as ne, o as re, t as ie } from "./motion.QrWBa877.mjs";
import {
  B as u,
  C as ae,
  J as oe,
  Nt as d,
  O as f,
  Ot as p,
  P as m,
  S as se,
  T as ce,
  Tt as le,
  V as h,
  _t as g,
  a as _,
  b as v,
  bt as ue,
  dt as de,
  ht as fe,
  i as y,
  it as b,
  j as x,
  jt as S,
  mt as pe,
  u as C,
  xt as me,
} from "./framer.CEpgxWGc.mjs";
import {
  M as he,
  d as w,
  f as T,
  i as E,
  j as D,
  l as ge,
  r as O,
  u as k,
} from "./toplevel-deps.C-kiZ8rO.mjs";
import { _ as _e, g as ve, h as ye, n as be, t as A, v as xe } from "./shared-lib.DyVg47t3.mjs";
import { n as Se, t as j } from "./DynamicTabTitle.Bf7lZ63m.mjs";
import { n as Ce, r as we } from "./DeSByTurf.CqNAZsPr.mjs";
var M, N, P, F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Te, Z, Ee, De, Oe, ke, Q, Ae;
function $() {
  return ($ = e(() => {
    (s(),
      oe(),
      ie(),
      c(),
      he(),
      be(),
      E(),
      Se(),
      xe(),
      T(),
      Ce(),
      (M = u(A)),
      (N = d(_)),
      (P = d(ae)),
      (F = d(l.div)),
      (I = u(O)),
      (L = S(_)),
      (R = u(j)),
      (z = {
        JPKOCTsKi: `(min-width: 810px) and (max-width: 1199.98px)`,
        qrm4RMj58: `(min-width: 1200px)`,
        TNJhV0yRs: `(max-width: 809.98px)`,
      }),
      (B = []),
      (V = `framer-WXgtm`),
      (H = {
        JPKOCTsKi: `framer-v-1l65p5f`,
        qrm4RMj58: `framer-v-1v2p80o`,
        TNJhV0yRs: `framer-v-15ehirc`,
      }),
      (U = (e, t, n) => (e && t ? `position` : n)),
      (W = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` },
        x: 0,
        y: 0,
      }),
      (G = {
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
      (K = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (q = {
        opacity: 0.8,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0.2, delay: 0.1, duration: 0.4, type: `spring` },
        x: 0,
        y: 0,
      }),
      (J = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0.2, delay: 0.2, duration: 0.4, type: `spring` },
        x: 0,
        y: 0,
      }),
      (Y = {
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
      (X = { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Te = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: X,
        x: 0,
        y: 0,
      }),
      (Z = { Desktop: `qrm4RMj58`, Phone: `TNJhV0yRs`, Tablet: `JPKOCTsKi` }),
      (Ee = ({ value: e }) =>
        g()
          ? null
          : /*#__PURE__*/ a(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (De = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Z[r.variant] ?? r.variant ?? `qrm4RMj58`,
      })),
      (Oe = /*#__PURE__*/ o(function (e, o) {
        let s = ee(null),
          c = o ?? s,
          ie = n(),
          { activeLocale: u, setLocale: oe } = ue(),
          d = de(),
          { style: f, className: p, layoutId: m, variant: h, ...g } = De(e),
          b = te(() => we({}, u), [u]);
        me(b);
        let [S, he] = fe(h, z, !1),
          w = x(V, ge, ye),
          T = t(C)?.isLayoutTemplate,
          E = !!t(re)?.transition?.layout,
          k = U(T, E);
        return (
          le(),
          pe({}),
          /*#__PURE__*/ a(C.Provider, {
            value: {
              activeVariantId: S,
              humanReadableVariantMap: Z,
              primaryVariantId: `qrm4RMj58`,
              variantClassNames: H,
            },
            children: /*#__PURE__*/ i(ne, {
              id: m ?? ie,
              children: [
                /*#__PURE__*/ a(Ee, {
                  value: `html body { background: var(--token-a9c881b7-a087-4bee-a49f-befc82631c31, rgb(242, 242, 242)); }`,
                }),
                /*#__PURE__*/ i(l.div, {
                  ...g,
                  className: x(w, `framer-1v2p80o`, p),
                  ref: c,
                  style: { ...f },
                  children: [
                    /*#__PURE__*/ i(l.header, {
                      className: `framer-ube727`,
                      "data-framer-name": `Hero Wrapper`,
                      layout: k,
                      children: [
                        /*#__PURE__*/ a(`div`, {
                          className: `framer-18al0b7`,
                          children: /*#__PURE__*/ i(`div`, {
                            className: `framer-14djfi1`,
                            "data-framer-name": `H1 + Para`,
                            children: [
                              /*#__PURE__*/ i(`div`, {
                                className: `framer-1jiu8gr`,
                                children: [
                                  /*#__PURE__*/ a(y, {
                                    height: 40,
                                    y: (d?.y || 0) + 0 + 0 + 0 + 0 + 160 + 212 + 0 + 0 + 0 + 0,
                                    children: /*#__PURE__*/ a(N, {
                                      animate: W,
                                      className: `framer-1h8pyvt-container`,
                                      "data-framer-appear-id": `1h8pyvt`,
                                      initial: G,
                                      nodeId: `DrVZwx0bh`,
                                      optimized: !0,
                                      rendersWithMotion: !0,
                                      scopeId: `DeSByTurf`,
                                      children: /*#__PURE__*/ a(v, {
                                        breakpoint: S,
                                        overrides: { TNJhV0yRs: { variant: K(`RobTiRcba`) } },
                                        children: /*#__PURE__*/ a(A, {
                                          gJ8H561ZB: `404`,
                                          height: `100%`,
                                          id: `DrVZwx0bh`,
                                          layoutId: `DrVZwx0bh`,
                                          variant: K(`WgYBRr9mM`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  /*#__PURE__*/ i(F, {
                                    animate: W,
                                    className: `framer-12gx03`,
                                    "data-framer-appear-id": `12gx03`,
                                    "data-framer-name": `h1`,
                                    initial: G,
                                    optimized: !0,
                                    children: [
                                      /*#__PURE__*/ a(ae, {
                                        __fromCanvasComponent: !0,
                                        children: /*#__PURE__*/ a(r, {
                                          children: /*#__PURE__*/ a(`h1`, {
                                            className: `framer-styles-preset-1q787c3`,
                                            "data-styles-preset": `y8eR9t98C`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                                            },
                                            children: `This page is not available currently`,
                                          }),
                                        }),
                                        className: `framer-5rttz7`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      /*#__PURE__*/ a(v, {
                                        breakpoint: S,
                                        overrides: {
                                          TNJhV0yRs: {
                                            children: /*#__PURE__*/ a(r, {
                                              children: /*#__PURE__*/ a(`p`, {
                                                className: `framer-styles-preset-oeqwx2`,
                                                "data-styles-preset": `oInb0ma47`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                                                },
                                                children: `The page you’re looking for doesn’t exist, was moved, or never existed.`,
                                              }),
                                            }),
                                          },
                                        },
                                        children: /*#__PURE__*/ a(P, {
                                          __fromCanvasComponent: !0,
                                          animate: q,
                                          children: /*#__PURE__*/ a(r, {
                                            children: /*#__PURE__*/ a(`p`, {
                                              className: `framer-styles-preset-oeqwx2`,
                                              "data-styles-preset": `oInb0ma47`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                                              },
                                              children: `The page you’re looking for doesn’t exist, was moved, or never existed in the first place.`,
                                            }),
                                          }),
                                          className: `framer-180qnpo`,
                                          "data-framer-appear-id": `180qnpo`,
                                          fonts: [`Inter`],
                                          initial: G,
                                          optimized: !0,
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              /*#__PURE__*/ a(F, {
                                animate: J,
                                className: `framer-p75ilu`,
                                "data-framer-appear-id": `p75ilu`,
                                initial: G,
                                optimized: !0,
                                children: /*#__PURE__*/ a(se, {
                                  links: [
                                    {
                                      href: { webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    /*#__PURE__*/ a(v, {
                                      breakpoint: S,
                                      overrides: {
                                        TNJhV0yRs: {
                                          width: `min(min(${d?.width || `100vw`}, 1050px) - 40px, 380px)`,
                                          y:
                                            (d?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            160 +
                                            212 +
                                            0 +
                                            312 +
                                            0 +
                                            0,
                                        },
                                      },
                                      children: /*#__PURE__*/ a(y, {
                                        height: 44,
                                        y: (d?.y || 0) + 0 + 0 + 0 + 0 + 160 + 212 + 0 + 312 + 0,
                                        children: /*#__PURE__*/ a(_, {
                                          className: `framer-1ur6hoe-container`,
                                          nodeId: `gytm7mPMk`,
                                          scopeId: `DeSByTurf`,
                                          children: /*#__PURE__*/ a(v, {
                                            breakpoint: S,
                                            overrides: {
                                              JPKOCTsKi: { arrAKCynS: e[1] },
                                              TNJhV0yRs: {
                                                arrAKCynS: e[2],
                                                style: { width: `100%` },
                                                variant: K(`y674jXdOH`),
                                              },
                                            },
                                            children: /*#__PURE__*/ a(O, {
                                              arrAKCynS: e[0],
                                              height: `100%`,
                                              id: `gytm7mPMk`,
                                              layoutId: `gytm7mPMk`,
                                              leLsKUYDS: `Back to Home`,
                                              Llv8Wzb_B: `40px`,
                                              variant: K(`NPcMhI0aR`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                }),
                              }),
                            ],
                          }),
                        }),
                        /*#__PURE__*/ a(L, {
                          __framer__animate: { transition: X },
                          __framer__animateOnce: !1,
                          __framer__enter: Y,
                          __framer__exit: Te,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-clfp8v-container`,
                          children: /*#__PURE__*/ a(v, {
                            breakpoint: S,
                            overrides: {
                              JPKOCTsKi: {
                                fallbackImage: `https://framerusercontent.com/images/F18Ya0gMgIDpYSh0GDYMtZIkxk.png?scale-down-to=1080&width=1620&height=2160`,
                              },
                              TNJhV0yRs: {
                                fallbackImage: `https://framerusercontent.com/images/ikDMNOsgFW0VEk6YfENTwT0AbwU.png?scale-down-to=200&width=400&height=400`,
                              },
                            },
                            children: /*#__PURE__*/ a(ce, {
                              __fromCanvasComponent: !0,
                              animated: D.animated,
                              buffers: D.buffers,
                              fallbackImage: `https://framerusercontent.com/images/iQ2xys7b0tLOv4T37NFdbrUsdU.png?scale-down-to=1200&width=2400&height=1600`,
                              fragmentShader: D.fragment,
                              height: `100%`,
                              heightmapSource: D.heightmapSource,
                              mode: `progressive`,
                              mouse: D.mouse && { enabled: D.mouse === `enabledByDefault` },
                              resolutionScale: D.resolutionScale,
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
                              vertexShader: D.vertex,
                              width: `100%`,
                            }),
                          }),
                        }),
                      ],
                    }),
                    /*#__PURE__*/ a(y, {
                      children: /*#__PURE__*/ a(_, {
                        className: `framer-no28fc-container`,
                        isAuthoredByUser: !0,
                        layout: k,
                        nodeId: `US7MnNRQF`,
                        scopeId: `DeSByTurf`,
                        children: /*#__PURE__*/ a(j, {
                          height: `100%`,
                          id: `US7MnNRQF`,
                          inactiveTitles: `Come Back 👀 | Your next viral edit is waiting | Still planning your content?`,
                          intervalMs: 2500,
                          layoutId: `US7MnNRQF`,
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
                /*#__PURE__*/ a(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      })),
      (ke = [
        `.framer-WXgtm.framer-xphd6h, .framer-WXgtm .framer-xphd6h { display: block; }`,
        `.framer-WXgtm.framer-1v2p80o { align-content: center; align-items: center; background-color: var(--token-a9c881b7-a087-4bee-a49f-befc82631c31, #f2f2f2); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-WXgtm .framer-ube727 { align-content: center; align-items: center; background-color: var(--token-a9c881b7-a087-4bee-a49f-befc82631c31, #f2f2f2); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-WXgtm .framer-18al0b7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: 100vh; justify-content: center; max-width: 1050px; overflow: var(--overflow-clip-fallback, clip); padding: 160px 0px 60px 0px; position: relative; width: 100%; }`,
        `.framer-WXgtm .framer-14djfi1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; max-width: 650px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-WXgtm .framer-1jiu8gr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-WXgtm .framer-1h8pyvt-container { flex: none; height: auto; position: relative; width: auto; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-WXgtm .framer-12gx03 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-WXgtm .framer-5rttz7 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-WXgtm .framer-180qnpo { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; opacity: 0.8; position: relative; white-space: pre-wrap; width: 90%; will-change: var(--framer-will-change-effect-override, transform); word-break: break-word; word-wrap: break-word; }`,
        `.framer-WXgtm .framer-p75ilu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-WXgtm .framer-1ur6hoe-container, .framer-WXgtm .framer-no28fc-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-WXgtm .framer-clfp8v-container { -webkit-mask: linear-gradient(0deg, rgba(0, 0, 0, 0) 3%, rgba(0,0,0,1) 37%, rgba(0,0,0,1) 72%, rgba(0, 0, 0, 0) 95%) add; bottom: 0px; flex: none; left: 0px; mask: linear-gradient(0deg, rgba(0,0,0,0) 3%, rgba(0,0,0,1) 37%, rgba(0,0,0,1) 72%, rgba(0, 0, 0, 0) 95%) add; position: absolute; right: 0px; top: 0px; z-index: 0; }`,
        ...k,
        ...ve,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-WXgtm.framer-1v2p80o { width: 810px; } .framer-WXgtm .framer-14djfi1 { max-width: 500px; }}`,
        `@media (max-width: 809.98px) { .framer-WXgtm.framer-1v2p80o { width: 390px; } .framer-WXgtm .framer-18al0b7 { padding: 160px 20px 60px 20px; } .framer-WXgtm .framer-14djfi1 { max-width: 380px; } .framer-WXgtm .framer-p75ilu { flex-direction: column; } .framer-WXgtm .framer-1ur6hoe-container { width: 100%; }}`,
      ]),
      (Q = p(Oe, ke, `framer-WXgtm`)),
      (Q.displayName = `Home`),
      (Q.defaultProps = { height: 1763, width: 1200 }),
      f(
        Q,
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
          ...M,
          ...I,
          ...R,
          ...h(w),
          ...h(_e),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Q.loader = { load: (e, t) => b([() => m(A, {}, t), () => m(O, {}, t)], t) }),
      (Ae = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `FramerDeSByTurf`,
            slots: [],
            annotations: {
              framerScrollSections: `false`,
              framerDisplayContentsDiv: `false`,
              framerAutoSizeImages: `true`,
              framerLayoutTemplateFlowEffect: `true`,
              framerAcceptsLayoutTemplate: `true`,
              framerIntrinsicHeight: `1763`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"JPKOCTsKi":{"layout":["fixed","auto"]},"TNJhV0yRs":{"layout":["fixed","auto"]}}}`,
              framerImmutableVariables: `true`,
              framerComponentViewportWidth: `true`,
              framerResponsiveScreen: `true`,
              framerColorSyntax: `true`,
              framerIntrinsicWidth: `1200`,
              framerContractVersion: `1`,
            },
          },
          queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
$();
export { Ae as __FramerMetadata__, Q as default, B as queryParamNames };
//# sourceMappingURL=YE-V-ze2afimkEz3PlphlIMdyxuXK5NcVWSoTW5ULuI.T6dzlo_1.mjs.map
