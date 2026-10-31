import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  A as t,
  C as n,
  P as r,
  b as i,
  j as a,
  l as o,
  o as s,
  p as c,
  s as l,
  w as u,
} from "./react.p3VyPFJt.mjs";
import { D as d, i as f, o as p, t as m } from "./motion.QrWBa877.mjs";
import {
  C as h,
  Dt as g,
  H as _,
  J as v,
  O as y,
  Ot as b,
  V as x,
  bt as S,
  dt as C,
  f as w,
  j as T,
  k as E,
  o as D,
} from "./framer.CEpgxWGc.mjs";
import {
  _ as O,
  c as k,
  g as A,
  h as j,
  l as M,
  s as N,
  u as P,
  v as F,
} from "./shared-lib.DyVg47t3.mjs";
var I, L, R, z, B, V, H, U, W, G, K;
function q() {
  return (q = e(() => {
    (l(),
      v(),
      m(),
      u(),
      F(),
      P(),
      (I = `framer-kwMUQ`),
      (L = { VmTG7P2JD: `framer-v-1mrsra0` }),
      (R = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (z = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (B = ({ value: e, children: n }) => {
        let r = t(p),
          i = e ?? r.transition,
          o = a(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ s(p.Provider, { value: o, children: n });
      }),
      (V = d.create(r)),
      (H = ({ height: e, id: t, name1: n, profileImage: r, title: i, width: a, ...o }) => ({
        ...o,
        ENWvXsjzc: n ?? o.ENWvXsjzc,
        gZ_iLYKZ6: r ?? o.gZ_iLYKZ6,
        T4oPRTdmz: i ?? o.T4oPRTdmz ?? `Author`,
      })),
      (U = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (W = /*#__PURE__*/ c(function (e, t) {
        let a = i(null),
          c = t ?? a,
          l = n(),
          { activeLocale: u, setLocale: p } = S(),
          m = C(),
          {
            style: v,
            className: y,
            layoutId: b,
            variant: x,
            gZ_iLYKZ6: E,
            ENWvXsjzc: D,
            T4oPRTdmz: O,
            ...k
          } = H(e),
          {
            baseVariant: A,
            classNames: M,
            clearLoadingGesture: P,
            gestureHandlers: F,
            gestureVariant: W,
            isLoading: G,
            setGestureState: K,
            setVariant: q,
            variants: J,
          } = g({ defaultVariant: `VmTG7P2JD`, ref: c, variant: x, variantClassNames: L }),
          Y = U(e, J),
          X = T(I, j, N);
        return /*#__PURE__*/ s(f, {
          id: b ?? l,
          children: /*#__PURE__*/ s(V, {
            animate: J,
            initial: !1,
            children: /*#__PURE__*/ s(B, {
              value: R,
              children: /*#__PURE__*/ o(d.div, {
                ...k,
                ...F,
                className: T(X, `framer-1mrsra0`, y, M),
                "data-border": !0,
                "data-framer-name": `card`,
                layoutDependency: Y,
                layoutId: `VmTG7P2JD`,
                ref: c,
                style: {
                  "--border-bottom-width": `1px`,
                  "--border-color": `var(--token-7f38a5f7-db27-44de-8aa2-b6753f733c7b, rgb(230, 230, 230))`,
                  "--border-left-width": `1px`,
                  "--border-right-width": `1px`,
                  "--border-style": `solid`,
                  "--border-top-width": `1px`,
                  backgroundColor: `var(--token-a9c881b7-a087-4bee-a49f-befc82631c31, rgb(242, 242, 242))`,
                  borderBottomLeftRadius: 50,
                  borderBottomRightRadius: 50,
                  borderTopLeftRadius: 50,
                  borderTopRightRadius: 50,
                  ...v,
                },
                children: [
                  /*#__PURE__*/ s(h, {
                    __fromCanvasComponent: !0,
                    children: /*#__PURE__*/ s(r, {
                      children: /*#__PURE__*/ s(d.p, {
                        className: `framer-styles-preset-oeqwx2`,
                        "data-styles-preset": `oInb0ma47`,
                        dir: `auto`,
                        style: {
                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                        },
                        children: `Author`,
                      }),
                    }),
                    className: `framer-1uih5cw`,
                    fonts: [`Inter`],
                    layoutDependency: Y,
                    layoutId: `ey6mSVpVh`,
                    style: {
                      "--extracted-r6o4lv": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                      "--framer-link-text-decoration": `underline`,
                      opacity: 0.8,
                    },
                    text: O,
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                  }),
                  /*#__PURE__*/ o(d.div, {
                    className: `framer-1vs51kq`,
                    "data-border": !0,
                    "data-framer-name": `Username`,
                    layoutDependency: Y,
                    layoutId: `TUFe88jow`,
                    style: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-7f38a5f7-db27-44de-8aa2-b6753f733c7b, rgb(219, 219, 219))`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                      backgroundColor: `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                      borderBottomLeftRadius: 30,
                      borderBottomRightRadius: 30,
                      borderTopLeftRadius: 30,
                      borderTopRightRadius: 30,
                    },
                    children: [
                      /*#__PURE__*/ s(w, {
                        background: {
                          alt: `men's gray crew-neck shirt`,
                          fit: `fill`,
                          intrinsicHeight: 3264,
                          intrinsicWidth: 4928,
                          loading: _((m?.y || 0) + (5 + ((m?.height || 49) - 10 - 39) / 2) + 5),
                          pixelHeight: 3264,
                          pixelWidth: 4928,
                          sizes: `29px`,
                          ...z(E),
                        },
                        className: `framer-v7m0fh`,
                        layoutDependency: Y,
                        layoutId: `ck6i43DrF`,
                        style: {
                          borderBottomLeftRadius: 20,
                          borderBottomRightRadius: 20,
                          borderTopLeftRadius: 20,
                          borderTopRightRadius: 20,
                        },
                      }),
                      /*#__PURE__*/ s(h, {
                        __fromCanvasComponent: !0,
                        children: /*#__PURE__*/ s(r, {
                          children: /*#__PURE__*/ s(d.p, {
                            className: `framer-styles-preset-nkt4ib`,
                            "data-styles-preset": `qofApnVkv`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                            },
                            children: `Orin`,
                          }),
                        }),
                        className: `framer-nd1ne0`,
                        fonts: [`Inter`],
                        layoutDependency: Y,
                        layoutId: `Wxbi7iVcb`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: D,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        });
      })),
      (G = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-kwMUQ.framer-1wsxg7f, .framer-kwMUQ .framer-1wsxg7f { display: block; }`,
        `.framer-kwMUQ.framer-1mrsra0 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 5px 5px 5px 15px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-kwMUQ .framer-1uih5cw, .framer-kwMUQ .framer-nd1ne0 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-kwMUQ .framer-1vs51kq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 7px; height: min-content; justify-content: center; overflow: visible; padding: 5px 15px 5px 5px; position: relative; width: min-content; }`,
        `.framer-kwMUQ .framer-v7m0fh { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 29px); overflow: var(--overflow-clip-fallback, clip); position: relative; width: 29px; will-change: var(--framer-will-change-override, transform); }`,
        ...A,
        ...k,
        `.framer-kwMUQ[data-border="true"]::after, .framer-kwMUQ [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      (K = b(W, G, `framer-kwMUQ`)),
      (K.displayName = `Author Card`),
      (K.defaultProps = { height: 49, width: 144.5 }),
      E(K, {
        gZ_iLYKZ6: { title: `Profile Image`, type: D.ResponsiveImage },
        ENWvXsjzc: { defaultValue: ``, title: `Name`, type: D.String },
        onENWvXsjzcChange: { changes: `ENWvXsjzc`, type: D.ChangeHandler },
        T4oPRTdmz: { defaultValue: `Author`, displayTextArea: !1, title: `Title`, type: D.String },
        onT4oPRTdmzChange: { changes: `T4oPRTdmz`, type: D.ChangeHandler },
      }),
      y(
        K,
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
          ...x(O),
          ...x(M),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
export { q as n, K as t };
//# sourceMappingURL=egdXKqnr5.C8ZEK5DQ.mjs.map
