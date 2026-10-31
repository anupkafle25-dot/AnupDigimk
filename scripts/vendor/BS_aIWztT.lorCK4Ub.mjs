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
import { D as d, i as te, o as f, t as p } from "./motion.QrWBa877.mjs";
import {
  B as m,
  C as h,
  Dt as ne,
  E as g,
  J as _,
  O as v,
  Ot as y,
  P as b,
  V as x,
  bt as re,
  c as ie,
  dt as ae,
  et as oe,
  i as S,
  it as C,
  j as w,
  jt as T,
  k as E,
  l as D,
  o as O,
  w as k,
} from "./framer.CEpgxWGc.mjs";
import { C as A, S as j, w as se, x as ce } from "./toplevel-deps.C-kiZ8rO.mjs";
import {
  _ as le,
  d as ue,
  f as de,
  g as M,
  h as fe,
  m as N,
  n as P,
  p as F,
  t as I,
  v as pe,
} from "./shared-lib.DyVg47t3.mjs";
import { n as me, t as L } from "./sa9XtqcAk.Dnno9vp6.mjs";
function R(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var he, z, B, V, H, U, W, G, K, q, J, Y, X, Z, ge, _e, ve, ye, be, xe, Se, Ce, Q;
function $() {
  return ($ = e(() => {
    (u(),
      _(),
      p(),
      ee(),
      se(),
      pe(),
      N(),
      P(),
      me(),
      (he = m(I)),
      (z = T(g)),
      (B = T(d.div)),
      (V = m(L)),
      (H = [`Af0aSGxHz`, `Tevou_hBQ`, `IBr5aMcRq`]),
      (U = `framer-5FPzN`),
      (W = {
        Af0aSGxHz: `framer-v-oq8lse`,
        IBr5aMcRq: `framer-v-mkxc0u`,
        Tevou_hBQ: `framer-v-emxzyi`,
      }),
      (G = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (K = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (q = {
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
      (J = {
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
      (Y = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (X = { bounce: 0.2, delay: 0.1, duration: 0.4, type: `spring` }),
      (Z = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: X,
        x: 0,
        y: 20,
      }),
      (ge = (e, t, n) => {
        switch (e.state) {
          case `success`:
            return t.success ?? n;
          case `pending`:
            return t.pending ?? n;
          case `error`:
            return t.error ?? n;
          case `incomplete`:
            return t.incomplete ?? n;
          default:
            return n;
        }
      }),
      (_e = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          a = o(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ c(f.Provider, { value: a, children: n });
      }),
      (ve = { Desktop: `Af0aSGxHz`, Phone: `IBr5aMcRq`, Tablet: `Tevou_hBQ` }),
      (ye = d.create(r)),
      (be = ({ bGFill: e, height: t, id: n, padding: r, width: i, ...a }) => ({
        ...a,
        KcJ7oF4Ul:
          e ??
          a.KcJ7oF4Ul ??
          `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
        mv4nSZxSZ: r ?? a.mv4nSZxSZ ?? `60px 0px 60px 0px`,
        variant: ve[a.variant] ?? a.variant ?? `Af0aSGxHz`,
      })),
      (xe = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Se = /*#__PURE__*/ l(function (e, t) {
        let o = i(null),
          l = t ?? o,
          u = n(),
          { activeLocale: ee, setLocale: f } = re(),
          p = ae(),
          {
            style: m,
            className: _,
            layoutId: v,
            variant: y,
            mv4nSZxSZ: b,
            KcJ7oF4Ul: x,
            ...C
          } = be(e),
          {
            baseVariant: T,
            classNames: E,
            clearLoadingGesture: O,
            gestureHandlers: A,
            gestureVariant: j,
            isLoading: se,
            setGestureState: le,
            setVariant: de,
            variants: M,
          } = ne({
            cycleOrder: H,
            defaultVariant: `Af0aSGxHz`,
            ref: l,
            variant: y,
            variantClassNames: W,
          }),
          N = xe(e, M),
          P = w(U, ce, fe, ue),
          F = typeof b == `string` ? oe(b) : { top: b, right: b, bottom: b, left: b };
        return /*#__PURE__*/ c(te, {
          id: v ?? u,
          children: /*#__PURE__*/ c(ye, {
            animate: M,
            initial: !1,
            children: /*#__PURE__*/ c(_e, {
              value: G,
              children: /*#__PURE__*/ c(d.section, {
                ...C,
                ...A,
                className: w(P, `framer-oq8lse`, _, E),
                "data-framer-name": `Desktop`,
                layoutDependency: N,
                layoutId: `Af0aSGxHz`,
                ref: l,
                style: { backgroundColor: x, ...m },
                ...R(
                  {
                    IBr5aMcRq: { "data-framer-name": `Phone` },
                    Tevou_hBQ: { "data-framer-name": `Tablet` },
                  },
                  T,
                  j
                ),
                children: /*#__PURE__*/ s(d.div, {
                  className: `framer-16r9yzf`,
                  "data-framer-name": `Wrap`,
                  layoutDependency: N,
                  layoutId: `jEVWIoe0d`,
                  style: { "--1xj8jn9": K(b) },
                  children: [
                    /*#__PURE__*/ s(d.div, {
                      className: `framer-wp6s63`,
                      layoutDependency: N,
                      layoutId: `KlaL1VyeQ`,
                      children: [
                        /*#__PURE__*/ c(d.div, {
                          className: `framer-19gnn5e`,
                          "data-framer-name": `H1 + Para`,
                          layoutDependency: N,
                          layoutId: `Y2aC1F813`,
                          children: /*#__PURE__*/ s(d.div, {
                            className: `framer-5c7mq4`,
                            layoutDependency: N,
                            layoutId: `i04EXKjhK`,
                            children: [
                              /*#__PURE__*/ c(S, {
                                height: 40,
                                children: /*#__PURE__*/ c(z, {
                                  __framer__animate: { transition: G },
                                  __framer__animateOnce: !0,
                                  __framer__enter: q,
                                  __framer__exit: J,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 1,
                                  className: `framer-3v38pr-container`,
                                  layoutDependency: N,
                                  layoutId: `R6buULfD9-container`,
                                  nodeId: `R6buULfD9`,
                                  rendersWithMotion: !0,
                                  scopeId: `BS_aIWztT`,
                                  children: /*#__PURE__*/ c(I, {
                                    gJ8H561ZB: `Contact`,
                                    height: `100%`,
                                    id: `R6buULfD9`,
                                    layoutId: `R6buULfD9`,
                                    variant: Y(`WgYBRr9mM`),
                                    width: `100%`,
                                    ...R({ IBr5aMcRq: { variant: Y(`RobTiRcba`) } }, T, j),
                                  }),
                                }),
                              }),
                              /*#__PURE__*/ c(B, {
                                __framer__animate: { transition: X },
                                __framer__animateOnce: !0,
                                __framer__enter: q,
                                __framer__exit: Z,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __smartComponentFX: !0,
                                __targetOpacity: 1,
                                className: `framer-y8n1vi`,
                                "data-framer-name": `h1`,
                                layoutDependency: N,
                                layoutId: `DzrrVagWE`,
                                children: /*#__PURE__*/ c(h, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ c(r, {
                                    children: /*#__PURE__*/ s(d.h2, {
                                      className: `framer-styles-preset-151rane`,
                                      "data-styles-preset": `F2j_sq2oH`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--extracted-1of0zx5, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                      },
                                      children: [
                                        `Get your content with proper `,
                                        /*#__PURE__*/ c(d.span, {
                                          style: {
                                            "--framer-text-color": `var(--extracted-1qn201a, rgb(0, 106, 255))`,
                                          },
                                          children: `strategy`,
                                        }),
                                      ],
                                    }),
                                  }),
                                  className: `framer-17f5zj0`,
                                  fonts: [`Inter`],
                                  layoutDependency: N,
                                  layoutId: `qFMINVK8L`,
                                  style: {
                                    "--extracted-1of0zx5": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                                    "--extracted-1qn201a": `rgb(0, 106, 255)`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...R(
                                    {
                                      IBr5aMcRq: {
                                        children: /*#__PURE__*/ c(r, {
                                          children: /*#__PURE__*/ s(d.h2, {
                                            className: `framer-styles-preset-151rane`,
                                            "data-styles-preset": `F2j_sq2oH`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `var(--extracted-1of0zx5, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                            },
                                            children: [
                                              `Get your content with proper `,
                                              /*#__PURE__*/ c(d.span, {
                                                style: {
                                                  "--framer-text-color": `var(--extracted-1qn201a, rgb(0, 106, 255))`,
                                                },
                                                children: `strategy`,
                                              }),
                                            ],
                                          }),
                                        }),
                                      },
                                      Tevou_hBQ: {
                                        children: /*#__PURE__*/ c(r, {
                                          children: /*#__PURE__*/ c(d.h2, {
                                            className: `framer-styles-preset-151rane`,
                                            "data-styles-preset": `F2j_sq2oH`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `left`,
                                              "--framer-text-color": `var(--extracted-1of0zx5, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                            },
                                            children: `Get your content with strategy`,
                                          }),
                                        }),
                                      },
                                    },
                                    T,
                                    j
                                  ),
                                }),
                              }),
                            ],
                          }),
                        }),
                        /*#__PURE__*/ s(B, {
                          __framer__animate: { transition: X },
                          __framer__animateOnce: !0,
                          __framer__enter: q,
                          __framer__exit: Z,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          className: `framer-8j902`,
                          layoutDependency: N,
                          layoutId: `qiSuB1ElF`,
                          children: [
                            /*#__PURE__*/ s(d.div, {
                              className: `framer-11nb4ul`,
                              layoutDependency: N,
                              layoutId: `eFN0IjNtm`,
                              children: [
                                /*#__PURE__*/ c(k, {
                                  className: `framer-vshrhp`,
                                  layoutDependency: N,
                                  layoutId: `L906UbkZr`,
                                  radius: 2,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18 18" overflow="visible"><path d="M 7.207 4.493 C 7.94 3.007 10.06 3.007 10.793 4.493 C 10.933 4.775 11.064 5.041 11.18 5.276 C 11.471 5.866 12.034 6.275 12.686 6.37 C 12.945 6.408 13.238 6.45 13.549 6.496 C 15.19 6.734 15.845 8.75 14.658 9.907 C 14.432 10.127 14.22 10.334 14.033 10.516 C 13.561 10.976 13.346 11.637 13.457 12.286 C 13.502 12.544 13.552 12.835 13.605 13.145 C 13.885 14.779 12.169 16.026 10.702 15.254 C 10.424 15.108 10.162 14.97 9.93 14.849 C 9.348 14.542 8.652 14.542 8.07 14.849 C 7.838 14.97 7.576 15.108 7.297 15.255 C 5.83 16.026 4.115 14.78 4.395 13.146 C 4.448 12.836 4.498 12.544 4.543 12.286 C 4.654 11.638 4.439 10.976 3.967 10.516 C 3.78 10.333 3.568 10.126 3.342 9.907 C 2.155 8.75 2.81 6.734 4.451 6.496 C 4.762 6.45 5.055 6.408 5.314 6.37 C 5.966 6.275 6.529 5.866 6.82 5.276 C 6.936 5.041 7.067 4.775 7.207 4.493 Z" fill="rgb(23, 23, 23)"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                                /*#__PURE__*/ c(k, {
                                  className: `framer-qeg0p9`,
                                  layoutDependency: N,
                                  layoutId: `WDpjTRMKl`,
                                  radius: 2,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18 18" overflow="visible"><path d="M 7.207 4.493 C 7.94 3.007 10.06 3.007 10.793 4.493 C 10.933 4.775 11.064 5.041 11.18 5.276 C 11.471 5.866 12.034 6.275 12.686 6.37 C 12.945 6.408 13.238 6.45 13.549 6.496 C 15.19 6.734 15.845 8.75 14.658 9.907 C 14.432 10.127 14.22 10.334 14.033 10.516 C 13.561 10.976 13.346 11.637 13.457 12.286 C 13.502 12.544 13.552 12.835 13.605 13.145 C 13.885 14.779 12.169 16.026 10.702 15.254 C 10.424 15.108 10.162 14.97 9.93 14.849 C 9.348 14.542 8.652 14.542 8.07 14.849 C 7.838 14.97 7.576 15.108 7.297 15.255 C 5.83 16.026 4.115 14.78 4.395 13.146 C 4.448 12.836 4.498 12.544 4.543 12.286 C 4.654 11.638 4.439 10.976 3.967 10.516 C 3.78 10.333 3.568 10.126 3.342 9.907 C 2.155 8.75 2.81 6.734 4.451 6.496 C 4.762 6.45 5.055 6.408 5.314 6.37 C 5.966 6.275 6.529 5.866 6.82 5.276 C 6.936 5.041 7.067 4.775 7.207 4.493 Z" fill="var(--token-4f650eff-568d-45ee-b0f2-21d9c022e3ce, rgb(255, 66, 66)) /* {&quot;name&quot;:&quot;Main&quot;} */"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                                /*#__PURE__*/ c(k, {
                                  className: `framer-1w2yg1k`,
                                  layoutDependency: N,
                                  layoutId: `zlzBMIguL`,
                                  radius: 2,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18 18" overflow="visible"><path d="M 7.207 4.493 C 7.94 3.007 10.06 3.007 10.793 4.493 C 10.933 4.775 11.064 5.041 11.18 5.276 C 11.471 5.866 12.034 6.275 12.686 6.37 C 12.945 6.408 13.238 6.45 13.549 6.496 C 15.19 6.734 15.845 8.75 14.658 9.907 C 14.432 10.127 14.22 10.334 14.033 10.516 C 13.561 10.976 13.346 11.637 13.457 12.286 C 13.502 12.544 13.552 12.835 13.605 13.145 C 13.885 14.779 12.169 16.026 10.702 15.254 C 10.424 15.108 10.162 14.97 9.93 14.849 C 9.348 14.542 8.652 14.542 8.07 14.849 C 7.838 14.97 7.576 15.108 7.297 15.255 C 5.83 16.026 4.115 14.78 4.395 13.146 C 4.448 12.836 4.498 12.544 4.543 12.286 C 4.654 11.638 4.439 10.976 3.967 10.516 C 3.78 10.333 3.568 10.126 3.342 9.907 C 2.155 8.75 2.81 6.734 4.451 6.496 C 4.762 6.45 5.055 6.408 5.314 6.37 C 5.966 6.275 6.529 5.866 6.82 5.276 C 6.936 5.041 7.067 4.775 7.207 4.493 Z" fill="var(--token-4f650eff-568d-45ee-b0f2-21d9c022e3ce, rgb(255, 66, 66)) /* {&quot;name&quot;:&quot;Main&quot;} */"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                                /*#__PURE__*/ c(k, {
                                  className: `framer-1rlu39p`,
                                  layoutDependency: N,
                                  layoutId: `AqdemQ2pt`,
                                  radius: 2,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18 18" overflow="visible"><path d="M 7.207 4.493 C 7.94 3.007 10.06 3.007 10.793 4.493 C 10.933 4.775 11.064 5.041 11.18 5.276 C 11.471 5.866 12.034 6.275 12.686 6.37 C 12.945 6.408 13.238 6.45 13.549 6.496 C 15.19 6.734 15.845 8.75 14.658 9.907 C 14.432 10.127 14.22 10.334 14.033 10.516 C 13.561 10.976 13.346 11.637 13.457 12.286 C 13.502 12.544 13.552 12.835 13.605 13.145 C 13.885 14.779 12.169 16.026 10.702 15.254 C 10.424 15.108 10.162 14.97 9.93 14.849 C 9.348 14.542 8.652 14.542 8.07 14.849 C 7.838 14.97 7.576 15.108 7.297 15.255 C 5.83 16.026 4.115 14.78 4.395 13.146 C 4.448 12.836 4.498 12.544 4.543 12.286 C 4.654 11.638 4.439 10.976 3.967 10.516 C 3.78 10.333 3.568 10.126 3.342 9.907 C 2.155 8.75 2.81 6.734 4.451 6.496 C 4.762 6.45 5.055 6.408 5.314 6.37 C 5.966 6.275 6.529 5.866 6.82 5.276 C 6.936 5.041 7.067 4.775 7.207 4.493 Z" fill="var(--token-4f650eff-568d-45ee-b0f2-21d9c022e3ce, rgb(255, 66, 66)) /* {&quot;name&quot;:&quot;Main&quot;} */"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                                /*#__PURE__*/ c(k, {
                                  className: `framer-2ko996`,
                                  layoutDependency: N,
                                  layoutId: `ZQ4VvrTqT`,
                                  radius: 2,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18 18" overflow="visible"><path d="M 7.207 4.493 C 7.94 3.007 10.06 3.007 10.793 4.493 C 10.933 4.775 11.064 5.041 11.18 5.276 C 11.471 5.866 12.034 6.275 12.686 6.37 C 12.945 6.408 13.238 6.45 13.549 6.496 C 15.19 6.734 15.845 8.75 14.658 9.907 C 14.432 10.127 14.22 10.334 14.033 10.516 C 13.561 10.976 13.346 11.637 13.457 12.286 C 13.502 12.544 13.552 12.835 13.605 13.145 C 13.885 14.779 12.169 16.026 10.702 15.254 C 10.424 15.108 10.162 14.97 9.93 14.849 C 9.348 14.542 8.652 14.542 8.07 14.849 C 7.838 14.97 7.576 15.108 7.297 15.255 C 5.83 16.026 4.115 14.78 4.395 13.146 C 4.448 12.836 4.498 12.544 4.543 12.286 C 4.654 11.638 4.439 10.976 3.967 10.516 C 3.78 10.333 3.568 10.126 3.342 9.907 C 2.155 8.75 2.81 6.734 4.451 6.496 C 4.762 6.45 5.055 6.408 5.314 6.37 C 5.966 6.275 6.529 5.866 6.82 5.276 C 6.936 5.041 7.067 4.775 7.207 4.493 Z" fill="var(--token-4f650eff-568d-45ee-b0f2-21d9c022e3ce, rgb(255, 66, 66)) /* {&quot;name&quot;:&quot;Main&quot;} */"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            /*#__PURE__*/ c(h, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ c(r, {
                                children: /*#__PURE__*/ c(d.p, {
                                  className: `framer-styles-preset-oeqwx2`,
                                  "data-styles-preset": `oInb0ma47`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                  },
                                  children: `4.8/5 rating base on 400+ reviews`,
                                }),
                              }),
                              className: `framer-1t6g744`,
                              fonts: [`Inter`],
                              layoutDependency: N,
                              layoutId: `XBDe5X7N3`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                    /*#__PURE__*/ c(ie, {
                      action: `https://api.framer.com/forms/v1/forms/c861369d-29ed-4d38-8acb-1c5b73820200/submit`,
                      className: `framer-ffq1p2`,
                      "data-border": !0,
                      "data-framer-name": `Form`,
                      layoutDependency: N,
                      layoutId: `fXr7uSjLa`,
                      nodeId: `fXr7uSjLa`,
                      redirectUrl: `/`,
                      style: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `var(--token-4608043d-0105-434c-bf26-f4b71a19bbe5, rgb(51, 51, 51))`,
                        "--border-left-width": `1px`,
                        "--border-right-width": `1px`,
                        "--border-style": `solid`,
                        "--border-top-width": `1px`,
                        backgroundColor: `rgb(31, 31, 31)`,
                        borderBottomLeftRadius: 30,
                        borderBottomRightRadius: 30,
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                      },
                      children: (e) =>
                        /*#__PURE__*/ c(a, {
                          children: /*#__PURE__*/ s(d.div, {
                            className: `framer-1yixgb1`,
                            "data-framer-name": `Labels`,
                            layoutDependency: N,
                            layoutId: `KrRwo8fcN`,
                            children: [
                              /*#__PURE__*/ s(d.label, {
                                className: `framer-xfoqsp`,
                                layoutDependency: N,
                                layoutId: `iZmN_jTwS`,
                                children: [
                                  /*#__PURE__*/ c(h, {
                                    __fromCanvasComponent: !0,
                                    children: /*#__PURE__*/ c(r, {
                                      children: /*#__PURE__*/ c(d.p, {
                                        className: `framer-styles-preset-19454e5`,
                                        "data-styles-preset": `WNsU_e1Xl`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255)))`,
                                        },
                                        children: `Name`,
                                      }),
                                    }),
                                    className: `framer-1olhwnj`,
                                    fonts: [`Inter`],
                                    layoutDependency: N,
                                    layoutId: `pmE3xCnsN`,
                                    style: {
                                      "--extracted-r6o4lv": `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                                      opacity: 0.6,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ c(D, {
                                    className: `framer-5fjtko`,
                                    inputName: `Name`,
                                    layoutDependency: N,
                                    layoutId: `qL7k4uHOv`,
                                    placeholder: `Jane Smith`,
                                    required: !0,
                                    style: {
                                      "--framer-input-background": `var(--token-4f650eff-568d-45ee-b0f2-21d9c022e3ce, rgb(23, 23, 23))`,
                                      "--framer-input-border-bottom-width": `1px`,
                                      "--framer-input-border-color": `var(--token-4608043d-0105-434c-bf26-f4b71a19bbe5, rgb(51, 51, 51))`,
                                      "--framer-input-border-left-width": `1px`,
                                      "--framer-input-border-radius-bottom-left": `10px`,
                                      "--framer-input-border-radius-bottom-right": `10px`,
                                      "--framer-input-border-radius-top-left": `10px`,
                                      "--framer-input-border-radius-top-right": `10px`,
                                      "--framer-input-border-right-width": `1px`,
                                      "--framer-input-border-style": `solid`,
                                      "--framer-input-border-top-width": `1px`,
                                      "--framer-input-font-color": `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                                      "--framer-input-icon-mask-image": `none`,
                                      "--framer-input-placeholder-color": `rgba(230, 230, 230, 0.5)`,
                                    },
                                    type: `text`,
                                  }),
                                ],
                              }),
                              /*#__PURE__*/ s(d.label, {
                                className: `framer-128oa7o`,
                                layoutDependency: N,
                                layoutId: `wmVr12TCB`,
                                children: [
                                  /*#__PURE__*/ c(h, {
                                    __fromCanvasComponent: !0,
                                    children: /*#__PURE__*/ c(r, {
                                      children: /*#__PURE__*/ c(d.p, {
                                        className: `framer-styles-preset-19454e5`,
                                        "data-styles-preset": `WNsU_e1Xl`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255)))`,
                                        },
                                        children: `Email`,
                                      }),
                                    }),
                                    className: `framer-fnuhj8`,
                                    fonts: [`Inter`],
                                    layoutDependency: N,
                                    layoutId: `qec5xdnjD`,
                                    style: {
                                      "--extracted-r6o4lv": `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                                      opacity: 0.6,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ c(D, {
                                    className: `framer-9hd0h`,
                                    inputName: `Email`,
                                    layoutDependency: N,
                                    layoutId: `aCA3r3F6w`,
                                    placeholder: `jane@gmail.com`,
                                    required: !0,
                                    style: {
                                      "--framer-input-background": `var(--token-4f650eff-568d-45ee-b0f2-21d9c022e3ce, rgb(23, 23, 23))`,
                                      "--framer-input-border-bottom-width": `1px`,
                                      "--framer-input-border-color": `var(--token-4608043d-0105-434c-bf26-f4b71a19bbe5, rgb(51, 51, 51))`,
                                      "--framer-input-border-left-width": `1px`,
                                      "--framer-input-border-radius-bottom-left": `10px`,
                                      "--framer-input-border-radius-bottom-right": `10px`,
                                      "--framer-input-border-radius-top-left": `10px`,
                                      "--framer-input-border-radius-top-right": `10px`,
                                      "--framer-input-border-right-width": `1px`,
                                      "--framer-input-border-style": `solid`,
                                      "--framer-input-border-top-width": `1px`,
                                      "--framer-input-font-color": `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                                      "--framer-input-icon-mask-image": `none`,
                                      "--framer-input-placeholder-color": `rgba(230, 230, 230, 0.5)`,
                                    },
                                    type: `email`,
                                  }),
                                ],
                              }),
                              /*#__PURE__*/ s(d.label, {
                                className: `framer-1vsut79`,
                                layoutDependency: N,
                                layoutId: `WeLOVDTp0`,
                                children: [
                                  /*#__PURE__*/ c(h, {
                                    __fromCanvasComponent: !0,
                                    children: /*#__PURE__*/ c(r, {
                                      children: /*#__PURE__*/ c(d.p, {
                                        className: `framer-styles-preset-19454e5`,
                                        "data-styles-preset": `WNsU_e1Xl`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255)))`,
                                        },
                                        children: `Phone`,
                                      }),
                                    }),
                                    className: `framer-1vopln6`,
                                    fonts: [`Inter`],
                                    layoutDependency: N,
                                    layoutId: `E2prguLk7`,
                                    style: {
                                      "--extracted-r6o4lv": `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                                      opacity: 0.6,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ c(D, {
                                    className: `framer-6hvdjt`,
                                    inputName: `Phone`,
                                    layoutDependency: N,
                                    layoutId: `EKRMukQQM`,
                                    placeholder: `+99 393 222 111`,
                                    style: {
                                      "--framer-input-background": `var(--token-4f650eff-568d-45ee-b0f2-21d9c022e3ce, rgb(23, 23, 23))`,
                                      "--framer-input-border-bottom-width": `1px`,
                                      "--framer-input-border-color": `var(--token-4608043d-0105-434c-bf26-f4b71a19bbe5, rgb(51, 51, 51))`,
                                      "--framer-input-border-left-width": `1px`,
                                      "--framer-input-border-radius-bottom-left": `10px`,
                                      "--framer-input-border-radius-bottom-right": `10px`,
                                      "--framer-input-border-radius-top-left": `10px`,
                                      "--framer-input-border-radius-top-right": `10px`,
                                      "--framer-input-border-right-width": `1px`,
                                      "--framer-input-border-style": `solid`,
                                      "--framer-input-border-top-width": `1px`,
                                      "--framer-input-font-color": `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                                      "--framer-input-icon-mask-image": `none`,
                                      "--framer-input-placeholder-color": `rgba(230, 230, 230, 0.5)`,
                                    },
                                    type: `tel`,
                                  }),
                                ],
                              }),
                              /*#__PURE__*/ s(d.label, {
                                className: `framer-svapu2`,
                                layoutDependency: N,
                                layoutId: `fv3Lev17o`,
                                children: [
                                  /*#__PURE__*/ c(h, {
                                    __fromCanvasComponent: !0,
                                    children: /*#__PURE__*/ c(r, {
                                      children: /*#__PURE__*/ c(d.p, {
                                        className: `framer-styles-preset-19454e5`,
                                        "data-styles-preset": `WNsU_e1Xl`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255)))`,
                                        },
                                        children: `Message`,
                                      }),
                                    }),
                                    className: `framer-10ur97n`,
                                    fonts: [`Inter`],
                                    layoutDependency: N,
                                    layoutId: `indJqgBwQ`,
                                    style: {
                                      "--extracted-r6o4lv": `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                                      opacity: 0.6,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  /*#__PURE__*/ c(D, {
                                    className: `framer-liotpr`,
                                    inputName: `Email`,
                                    layoutDependency: N,
                                    layoutId: `aGxiqjC5_`,
                                    placeholder: `jane@gmail.com`,
                                    required: !0,
                                    style: {
                                      "--framer-input-background": `var(--token-4f650eff-568d-45ee-b0f2-21d9c022e3ce, rgb(23, 23, 23))`,
                                      "--framer-input-border-bottom-width": `1px`,
                                      "--framer-input-border-color": `var(--token-4608043d-0105-434c-bf26-f4b71a19bbe5, rgb(51, 51, 51))`,
                                      "--framer-input-border-left-width": `1px`,
                                      "--framer-input-border-radius-bottom-left": `10px`,
                                      "--framer-input-border-radius-bottom-right": `10px`,
                                      "--framer-input-border-radius-top-left": `10px`,
                                      "--framer-input-border-radius-top-right": `10px`,
                                      "--framer-input-border-right-width": `1px`,
                                      "--framer-input-border-style": `solid`,
                                      "--framer-input-border-top-width": `1px`,
                                      "--framer-input-font-color": `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                                      "--framer-input-icon-mask-image": `none`,
                                      "--framer-input-placeholder-color": `rgba(230, 230, 230, 0.5)`,
                                    },
                                    type: `textarea`,
                                  }),
                                ],
                              }),
                              /*#__PURE__*/ c(S, {
                                height: 44,
                                width: `calc((min(${p?.width || `100vw`}, 1050px) - ${(F?.left ?? 0) + (F?.right ?? 0)}px) - 60px)`,
                                ...R(
                                  {
                                    IBr5aMcRq: {
                                      width: `calc((min(${p?.width || `100vw`}, 1050px) - ${(F?.left ?? 0) + (F?.right ?? 0)}px) - 40px)`,
                                    },
                                  },
                                  T,
                                  j
                                ),
                                children: /*#__PURE__*/ c(g, {
                                  className: `framer-12fehuj-container`,
                                  "data-framer-name": `Form Btn`,
                                  layoutDependency: N,
                                  layoutId: `mfis2xSdB-container`,
                                  name: `Form Btn`,
                                  nodeId: `mfis2xSdB`,
                                  rendersWithMotion: !0,
                                  scopeId: `BS_aIWztT`,
                                  children: /*#__PURE__*/ c(L, {
                                    height: `100%`,
                                    id: `mfis2xSdB`,
                                    layoutId: `mfis2xSdB`,
                                    name: `Form Btn`,
                                    style: { width: `100%` },
                                    type: `submit`,
                                    variant: ge(
                                      e,
                                      {
                                        error: `gAjaZJJ9j`,
                                        pending: `Tcddd1rdd`,
                                        success: `mNV4aQKo_`,
                                      },
                                      Y(`XBxq31m7w`)
                                    ),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      })),
      (Ce = [
        `.framer-5FPzN.framer-yvddgc, .framer-5FPzN .framer-yvddgc { display: block; }`,
        `.framer-5FPzN.framer-oq8lse { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-5FPzN .framer-16r9yzf { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; max-width: 1050px; overflow: var(--overflow-clip-fallback, clip); padding: var(--1xj8jn9); position: relative; width: 100%; }`,
        `.framer-5FPzN .framer-wp6s63 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-5FPzN .framer-19gnn5e { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 560px; overflow: visible; padding: 0px; position: relative; width: 1px; z-index: 2; }`,
        `.framer-5FPzN .framer-5c7mq4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-5FPzN .framer-3v38pr-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-5FPzN .framer-y8n1vi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-5FPzN .framer-17f5zj0 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-5FPzN .framer-8j902 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-5FPzN .framer-11nb4ul { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-5FPzN .framer-vshrhp, .framer-5FPzN .framer-qeg0p9, .framer-5FPzN .framer-1w2yg1k, .framer-5FPzN .framer-1rlu39p, .framer-5FPzN .framer-2ko996 { height: 18px; position: relative; width: 18px; }`,
        `.framer-5FPzN .framer-1t6g744, .framer-5FPzN .framer-1olhwnj, .framer-5FPzN .framer-fnuhj8, .framer-5FPzN .framer-1vopln6, .framer-5FPzN .framer-10ur97n { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-5FPzN .framer-ffq1p2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 30px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-5FPzN .framer-1yixgb1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 4; }`,
        `.framer-5FPzN .framer-xfoqsp, .framer-5FPzN .framer-128oa7o, .framer-5FPzN .framer-1vsut79, .framer-5FPzN .framer-svapu2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-5FPzN .framer-5fjtko, .framer-5FPzN .framer-9hd0h, .framer-5FPzN .framer-6hvdjt { --framer-input-focused-border-color: var(--token-7f38a5f7-db27-44de-8aa2-b6753f733c7b, #e6e6e6); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-family: "Manrope"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 16px; --framer-input-font-weight: 400; --framer-input-padding: 12px; --framer-input-wrapper-height: auto; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-5FPzN .framer-liotpr { --framer-input-focused-border-color: var(--token-7f38a5f7-db27-44de-8aa2-b6753f733c7b, #e6e6e6); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-family: "Manrope"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 16px; --framer-input-font-weight: 400; --framer-input-padding: 12px; --framer-input-wrapper-height: auto; --framer-textarea-resize: vertical; flex: none; height: auto; min-height: 100px; position: relative; width: 100%; }`,
        `.framer-5FPzN .framer-12fehuj-container { flex: none; height: auto; position: relative; width: 100%; z-index: 3; }`,
        `.framer-5FPzN.framer-v-emxzyi.framer-oq8lse { width: 810px; }`,
        `.framer-5FPzN.framer-v-emxzyi .framer-wp6s63 { gap: 30px; justify-content: flex-start; }`,
        `.framer-5FPzN.framer-v-mkxc0u.framer-oq8lse { width: 390px; }`,
        `.framer-5FPzN.framer-v-mkxc0u .framer-16r9yzf { gap: 30px; }`,
        `.framer-5FPzN.framer-v-mkxc0u .framer-wp6s63 { align-content: center; align-items: center; flex-direction: column; gap: 30px; justify-content: flex-start; }`,
        `.framer-5FPzN.framer-v-mkxc0u .framer-19gnn5e { flex: none; max-width: 380px; width: 100%; }`,
        `.framer-5FPzN.framer-v-mkxc0u .framer-5c7mq4, .framer-5FPzN.framer-v-mkxc0u .framer-8j902 { align-content: center; align-items: center; }`,
        `.framer-5FPzN.framer-v-mkxc0u .framer-11nb4ul { gap: 3px; }`,
        `.framer-5FPzN.framer-v-mkxc0u .framer-ffq1p2 { padding: 20px; }`,
        ...j,
        ...M,
        ...de,
        `.framer-5FPzN[data-border="true"]::after, .framer-5FPzN [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      (Q = y(Se, Ce, `framer-5FPzN`)),
      (Q.displayName = `Contact`),
      (Q.defaultProps = { height: 868, width: 1200 }),
      E(Q, {
        variant: {
          options: [`Af0aSGxHz`, `Tevou_hBQ`, `IBr5aMcRq`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: O.Enum,
        },
        mv4nSZxSZ: { defaultValue: `60px 0px 60px 0px`, title: `Padding`, type: O.Padding },
        KcJ7oF4Ul: {
          defaultValue: `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255)) /* {"name":"White"} */`,
          title: `BG Fill`,
          type: O.Color,
        },
      }),
      v(
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
              {
                cssFamilyName: `Manrope`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Manrope`,
                url: `../../assets/misc/UXO4O7K2G3HI3D2VKD7UXVJVJD26P4BQ.woff2`,
                weight: `400`,
              },
            ],
          },
          ...he,
          ...V,
          ...x(A),
          ...x(le),
          ...x(F),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Q.loader = { load: (e, t) => C([() => b(I, {}, t), () => b(L, {}, t)], t) }));
  }))();
}
export { $ as n, Q as t };
//# sourceMappingURL=BS_aIWztT.lorCK4Ub.mjs.map
