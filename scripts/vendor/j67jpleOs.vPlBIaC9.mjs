import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  A as t,
  C as n,
  P as r,
  _ as i,
  b as a,
  j as o,
  l as s,
  o as c,
  p as l,
  s as u,
  w as ee,
} from "./react.p3VyPFJt.mjs";
import { D as d, i as te, o as f, t as p } from "./motion.QrWBa877.mjs";
import {
  B as m,
  C as ne,
  Dt as re,
  E as h,
  H as ie,
  J as g,
  O as _,
  Ot as v,
  P as y,
  V as b,
  bt as ae,
  dt as oe,
  f as se,
  i as x,
  j as S,
  k as C,
  o as w,
} from "./framer.CEpgxWGc.mjs";
import { _ as T, g as E, h as ce, v as D } from "./shared-lib.DyVg47t3.mjs";
import { n as O, t as k } from "./C707vaXbi.CKWdD5ko.mjs";
import { i as A, n as j, r as M, t as le } from "./b4Vi5dGVu.rsNNFa5h.mjs";
function N(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var P, F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X;
function Z() {
  return (Z = e(() => {
    (u(),
      g(),
      p(),
      ee(),
      A(),
      D(),
      O(),
      (P = m(k)),
      (F = { BBZqBIg5j: { hover: !0 }, oiYmEL_Br: { hover: !0 } }),
      (I = [`BBZqBIg5j`, `oiYmEL_Br`, `j0kJfbbTG`]),
      (L = `framer-sbMGh`),
      (R = {
        BBZqBIg5j: `framer-v-1f6erwm`,
        j0kJfbbTG: `framer-v-o8fltp`,
        oiYmEL_Br: `framer-v-15uc48c`,
      }),
      (z = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (B = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (V = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (H = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          a = o(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ c(f.Provider, { value: a, children: n });
      }),
      (U = { "Mobile No Hover": `j0kJfbbTG`, Card: `BBZqBIg5j`, Featured: `oiYmEL_Br` }),
      (W = d.create(r)),
      (G = (e, t) => {
        let [n, r] = i(e),
          [a, o] = i(e);
        return t ? [e, t] : (e !== a && (r(e), o(e)), [n, r]);
      }),
      (K = ({
        bGFill: e,
        bGHoverFill: t,
        featured: n,
        height: r,
        id: i,
        image: a,
        number: o,
        pillFill: s,
        pillHoverFill: c,
        text: l,
        text2: u,
        width: ee,
        ...d
      }) => ({
        ...d,
        aaZ7FnCrE:
          s ??
          d.aaZ7FnCrE ??
          `var(--token-a9c881b7-a087-4bee-a49f-befc82631c31, rgb(242, 242, 242))`,
        aOLblxFCP:
          c ??
          d.aOLblxFCP ??
          `var(--token-a9c881b7-a087-4bee-a49f-befc82631c31, rgb(242, 242, 242))`,
        dZV3zs1YR:
          u ?? d.dZV3zs1YR ?? `Break down the exact structure behind high-performing videos.`,
        IyoI1V3GF: a ??
          d.IyoI1V3GF ?? {
            alt: ``,
            pixelHeight: 1516,
            pixelWidth: 790,
            src: `https://framerusercontent.com/images/8vjbDllwI4ez894ndVDGgZlyNE.png?width=790&height=1516`,
            srcSet: `https://framerusercontent.com/images/8vjbDllwI4ez894ndVDGgZlyNE.png?scale-down-to=1024&width=790&height=1516 533w,https://framerusercontent.com/images/8vjbDllwI4ez894ndVDGgZlyNE.png?width=790&height=1516 790w`,
          },
        j8k6n0B91:
          e ??
          d.j8k6n0B91 ??
          `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
        jE0SeosuS: o ?? d.jE0SeosuS ?? `Growth`,
        Qhy4ARekQ: n ?? d.Qhy4ARekQ ?? !0,
        r1iDEKhi9:
          t ??
          d.r1iDEKhi9 ??
          `var(--token-a9c881b7-a087-4bee-a49f-befc82631c31, rgb(242, 242, 242))`,
        snx_V7FlZ: l ?? d.snx_V7FlZ ?? `How to Go From 0 to 100K Views on Short-Form Content`,
        variant: U[d.variant] ?? d.variant ?? `BBZqBIg5j`,
      })),
      (q = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (J = /*#__PURE__*/ l(function (e, t) {
        let i = a(null),
          o = t ?? i,
          l = n(),
          { activeLocale: u, setLocale: ee } = ae(),
          f = oe(),
          {
            style: p,
            className: m,
            layoutId: g,
            variant: _,
            IyoI1V3GF: v,
            snx_V7FlZ: y,
            dZV3zs1YR: b,
            jE0SeosuS: C,
            onjE0SeosuSChange: w,
            Qhy4ARekQ: T,
            j8k6n0B91: E,
            r1iDEKhi9: D,
            aaZ7FnCrE: O,
            aOLblxFCP: A,
            ...j
          } = K(e),
          [M, P] = G(C, w),
          {
            baseVariant: U,
            classNames: J,
            clearLoadingGesture: Y,
            gestureHandlers: X,
            gestureVariant: Z,
            isLoading: ue,
            setGestureState: de,
            setVariant: fe,
            variants: Q,
          } = re({
            cycleOrder: I,
            defaultVariant: `BBZqBIg5j`,
            enabledGestures: F,
            ref: o,
            variant: _,
            variantClassNames: R,
          }),
          $ = q(e, Q),
          pe = S(L, le, ce);
        return /*#__PURE__*/ c(te, {
          id: g ?? l,
          children: /*#__PURE__*/ c(W, {
            animate: Q,
            initial: !1,
            children: /*#__PURE__*/ c(H, {
              value: z,
              children: /*#__PURE__*/ s(d.div, {
                ...j,
                ...X,
                className: S(pe, `framer-1f6erwm`, m, J),
                "data-border": !0,
                "data-framer-name": `Card`,
                layoutDependency: $,
                layoutId: `BBZqBIg5j`,
                ref: o,
                style: {
                  "--border-bottom-width": `1px`,
                  "--border-color": `var(--token-7f38a5f7-db27-44de-8aa2-b6753f733c7b, rgb(219, 219, 219))`,
                  "--border-left-width": `1px`,
                  "--border-right-width": `1px`,
                  "--border-style": `solid`,
                  "--border-top-width": `1px`,
                  backgroundColor: E,
                  borderBottomLeftRadius: 30,
                  borderBottomRightRadius: 30,
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                  ...p,
                },
                variants: {
                  "BBZqBIg5j-hover": { backgroundColor: D },
                  "oiYmEL_Br-hover": { backgroundColor: D },
                },
                ...N(
                  {
                    "BBZqBIg5j-hover": { "data-framer-name": void 0 },
                    "oiYmEL_Br-hover": { "data-framer-name": void 0 },
                    j0kJfbbTG: { "data-framer-name": `Mobile No Hover` },
                    oiYmEL_Br: { "data-framer-name": `Featured` },
                  },
                  U,
                  Z
                ),
                children: [
                  /*#__PURE__*/ c(se, {
                    background: {
                      alt: ``,
                      fit: `fill`,
                      pixelHeight: 1516,
                      pixelWidth: 790,
                      sizes: `calc(${f?.width || `100vw`} - 20px)`,
                      ...B(v),
                    },
                    className: `framer-1txylji`,
                    layoutDependency: $,
                    layoutId: `MYcMq8B8o`,
                    style: {
                      borderBottomLeftRadius: 20,
                      borderBottomRightRadius: 20,
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                    },
                    ...N(
                      {
                        oiYmEL_Br: {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: ie((f?.y || 0) + 10),
                            pixelHeight: 1516,
                            pixelWidth: 790,
                            sizes: `max((${f?.width || `100vw`} - 30px) / 2, 1px)`,
                            ...B(v),
                          },
                        },
                      },
                      U,
                      Z
                    ),
                  }),
                  /*#__PURE__*/ s(d.div, {
                    className: `framer-ppbucc`,
                    layoutDependency: $,
                    layoutId: `V4w5e9ckY`,
                    children: [
                      /*#__PURE__*/ c(d.div, {
                        className: `framer-rj1pa5`,
                        layoutDependency: $,
                        layoutId: `O8zeJ75pn`,
                        children: /*#__PURE__*/ s(d.div, {
                          className: `framer-1f1udlv`,
                          layoutDependency: $,
                          layoutId: `JGFaASSaO`,
                          children: [
                            /*#__PURE__*/ c(ne, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ c(r, {
                                children: /*#__PURE__*/ c(d.h4, {
                                  className: `framer-styles-preset-liyb9t`,
                                  "data-styles-preset": `b4Vi5dGVu`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `left`,
                                    "--framer-text-color": `var(--extracted-1eung3n, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                  },
                                  children: `How to Go From 0 to 100K Views on Short-Form Content`,
                                }),
                              }),
                              className: `framer-nlq55z`,
                              fonts: [`Inter`],
                              layoutDependency: $,
                              layoutId: `MQsyyMray`,
                              style: {
                                "--extracted-1eung3n": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              text: y,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            /*#__PURE__*/ c(ne, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ c(r, {
                                children: /*#__PURE__*/ c(d.p, {
                                  className: `framer-styles-preset-oeqwx2`,
                                  "data-styles-preset": `oInb0ma47`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `left`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                  },
                                  children: `Break down the exact structure behind high-performing videos.`,
                                }),
                              }),
                              className: `framer-1o10l97`,
                              fonts: [`Inter`],
                              layoutDependency: $,
                              layoutId: `mQPniEuUM`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                                opacity: 0.8,
                              },
                              text: b,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      }),
                      /*#__PURE__*/ s(d.div, {
                        className: `framer-ir3qqq`,
                        layoutDependency: $,
                        layoutId: `qTIBZkAU2`,
                        children: [
                          T !== !1 &&
                            /*#__PURE__*/ c(x, {
                              height: 47,
                              children: /*#__PURE__*/ c(h, {
                                className: `framer-7mojk4-container`,
                                layoutDependency: $,
                                layoutId: `geyvbumSA-container`,
                                nodeId: `geyvbumSA`,
                                rendersWithMotion: !0,
                                scopeId: `j67jpleOs`,
                                children: /*#__PURE__*/ c(k, {
                                  EUBO2osZo: `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                                  height: `100%`,
                                  id: `geyvbumSA`,
                                  layoutId: `geyvbumSA`,
                                  Mn4MWxttI: `var(--token-4f650eff-568d-45ee-b0f2-21d9c022e3ce, rgb(124, 110, 255))`,
                                  QhARj87DK: `Featured`,
                                  variant: V(`GBYPdzICv`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          /*#__PURE__*/ c(x, {
                            height: 47,
                            children: /*#__PURE__*/ c(h, {
                              className: `framer-8vog0w-container`,
                              layoutDependency: $,
                              layoutId: `o0aJcKi0N-container`,
                              nodeId: `o0aJcKi0N`,
                              rendersWithMotion: !0,
                              scopeId: `j67jpleOs`,
                              children: /*#__PURE__*/ c(k, {
                                EUBO2osZo: `var(--token-4608043d-0105-434c-bf26-f4b71a19bbe5, rgb(51, 51, 51))`,
                                height: `100%`,
                                id: `o0aJcKi0N`,
                                layoutId: `o0aJcKi0N`,
                                Mn4MWxttI: O,
                                onQhARj87DKChange: P,
                                QhARj87DK: M,
                                variant: V(`GBYPdzICv`),
                                width: `100%`,
                                ...N(
                                  {
                                    "BBZqBIg5j-hover": { Mn4MWxttI: A },
                                    "oiYmEL_Br-hover": { Mn4MWxttI: A },
                                  },
                                  U,
                                  Z
                                ),
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        });
      })),
      (Y = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-sbMGh.framer-ivh2ih, .framer-sbMGh .framer-ivh2ih { display: block; }`,
        `.framer-sbMGh.framer-1f6erwm { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 10px; position: relative; width: 657px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-sbMGh .framer-1txylji { aspect-ratio: 1.8625730994152048 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 342px); overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-sbMGh .framer-ppbucc { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: visible; padding: 20px; position: relative; width: 100%; }`,
        `.framer-sbMGh .framer-rj1pa5 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-sbMGh .framer-1f1udlv { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-sbMGh .framer-nlq55z, .framer-sbMGh .framer-1o10l97 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-sbMGh .framer-ir3qqq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-sbMGh .framer-7mojk4-container, .framer-sbMGh .framer-8vog0w-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-sbMGh.framer-v-15uc48c.framer-1f6erwm { flex-direction: row; }`,
        `.framer-sbMGh.framer-v-15uc48c .framer-1txylji { align-self: stretch; aspect-ratio: unset; flex: 1 0 0px; height: auto; width: 1px; }`,
        `.framer-sbMGh.framer-v-15uc48c .framer-ppbucc { flex: 1 0 0px; width: 1px; }`,
        `.framer-sbMGh.framer-v-15uc48c .framer-rj1pa5 { order: 0; }`,
        `.framer-sbMGh.framer-v-15uc48c .framer-ir3qqq { order: 1; }`,
        `.framer-sbMGh.framer-v-o8fltp.framer-1f6erwm { cursor: unset; }`,
        `.framer-sbMGh.framer-v-15uc48c.hover .framer-1txylji { aspect-ratio: unset; }`,
        ...j,
        ...E,
        `.framer-sbMGh[data-border="true"]::after, .framer-sbMGh [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      (X = v(J, Y, `framer-sbMGh`)),
      (X.displayName = `Case Study Card`),
      (X.defaultProps = { height: 551, width: 657 }),
      C(X, {
        variant: {
          options: [`BBZqBIg5j`, `oiYmEL_Br`, `j0kJfbbTG`],
          optionTitles: [`Card`, `Featured`, `Mobile No Hover`],
          title: `Variant`,
          type: w.Enum,
        },
        IyoI1V3GF: {
          __defaultAssetReference: `data:framer/asset-reference,8vjbDllwI4ez894ndVDGgZlyNE.png?originalFilename=Screenshot+2026-04-10+at+11.27.52%C3%A2%C2%80%C2%AFPM.png&preferredSize=auto&width=790&height=1516`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,8vjbDllwI4ez894ndVDGgZlyNE.png?originalFilename=Screenshot+2026-04-10+at+11.27.52%C3%A2%C2%80%C2%AFPM.png&preferredSize=auto&width=790&height=1516`,
          },
          title: `Image`,
          type: w.ResponsiveImage,
        },
        snx_V7FlZ: {
          defaultValue: `How to Go From 0 to 100K Views on Short-Form Content`,
          displayTextArea: !1,
          title: `Text`,
          type: w.String,
        },
        onsnx_V7FlZChange: { changes: `snx_V7FlZ`, type: w.ChangeHandler },
        dZV3zs1YR: {
          defaultValue: `Break down the exact structure behind high-performing videos.`,
          displayTextArea: !1,
          title: `Text 2`,
          type: w.String,
        },
        ondZV3zs1YRChange: { changes: `dZV3zs1YR`, type: w.ChangeHandler },
        jE0SeosuS: { defaultValue: `Growth`, displayTextArea: !1, title: `Number`, type: w.String },
        onjE0SeosuSChange: { changes: `jE0SeosuS`, type: w.ChangeHandler },
        Qhy4ARekQ: { defaultValue: !0, title: `Featured?`, type: w.Boolean },
        onQhy4ARekQChange: { changes: `Qhy4ARekQ`, type: w.ChangeHandler },
        j8k6n0B91: {
          defaultValue: `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255)) /* {"name":"White"} */`,
          title: `BG Fill`,
          type: w.Color,
        },
        r1iDEKhi9: {
          defaultValue: `var(--token-a9c881b7-a087-4bee-a49f-befc82631c31, rgb(242, 242, 242)) /* {"name":"BG"} */`,
          title: `BG Hover Fill`,
          type: w.Color,
        },
        aaZ7FnCrE: {
          defaultValue: `var(--token-a9c881b7-a087-4bee-a49f-befc82631c31, rgb(242, 242, 242))`,
          title: `Pill Fill`,
          type: w.Color,
        },
        aOLblxFCP: {
          defaultValue: `var(--token-a9c881b7-a087-4bee-a49f-befc82631c31, rgb(242, 242, 242))`,
          title: `Pill Hover Fill`,
          type: w.Color,
        },
      }),
      _(
        X,
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
          ...P,
          ...b(M),
          ...b(T),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (X.loader = { load: (e, t) => (t.locale, Promise.allSettled([y(k, {}, t)])) }));
  }))();
}
export { Z as n, X as t };
//# sourceMappingURL=j67jpleOs.vPlBIaC9.mjs.map
