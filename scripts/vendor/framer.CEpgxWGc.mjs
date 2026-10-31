import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  A as t,
  C as n,
  D as r,
  E as i,
  I as a,
  L as o,
  M as s,
  N as c,
  O as l,
  P as u,
  R as d,
  S as f,
  T as p,
  _ as m,
  a as h,
  b as g,
  c as _,
  d as v,
  f as y,
  h as b,
  i as x,
  j as S,
  l as C,
  m as w,
  o as T,
  p as E,
  s as D,
  u as O,
  v as k,
  w as A,
  x as j,
  y as M,
  z as N,
} from "./react.p3VyPFJt.mjs";
import {
  $ as P,
  A as F,
  B as I,
  C as ee,
  D as L,
  F as te,
  G as ne,
  H as re,
  I as ie,
  J as ae,
  K as oe,
  L as se,
  M as ce,
  N as R,
  O as z,
  P as le,
  Q as ue,
  R as de,
  S as B,
  T as fe,
  U as pe,
  V as me,
  W as he,
  X as ge,
  Y as _e,
  Z as ve,
  _ as ye,
  a as be,
  at as xe,
  b as Se,
  c as Ce,
  d as we,
  et as Te,
  f as Ee,
  g as De,
  h as Oe,
  i as ke,
  it as Ae,
  j as je,
  k as Me,
  l as Ne,
  m as Pe,
  n as Fe,
  nt as Ie,
  o as Le,
  p as Re,
  q as ze,
  r as Be,
  rt as Ve,
  s as He,
  tt as Ue,
  u as We,
  v as Ge,
  w as Ke,
  x as qe,
  y as Je,
  z as Ye,
} from "./motion.QrWBa877.mjs";
function Xe(e) {
  return `data:image/svg+xml,${e.replaceAll(`#`, `%23`).replaceAll(`'`, `%27`).replaceAll(`"`, `%22`)}`;
}
function Ze(e) {
  return typeof e == `function`;
}
function Qe(e) {
  return typeof e == `boolean`;
}
function V(e) {
  return typeof e == `string`;
}
function H(e) {
  return Number.isFinite(e);
}
function $e(e) {
  return Array.isArray(e);
}
function U(e) {
  return typeof e == `object` && !!e && !$e(e);
}
function et(e) {
  for (let t in e) return !1;
  return !0;
}
function tt(e) {
  return e === void 0;
}
function nt(e) {
  return e === null;
}
function rt(e) {
  return e == null;
}
function it(e) {
  return e instanceof Date && !Number.isNaN(e.getTime());
}
function at(e) {
  return U(e) && Ze(e.return);
}
function ot(e) {
  return U(e) && Ze(e.then);
}
function st(e) {
  return e instanceof Promise;
}
function ct(e) {
  return `url('${Xe(e)}')`;
}
function lt(e, t) {
  let n = t instanceof Error ? (t.stack ?? t.message) : t;
  return `${e ? `${e}\n` : ``}In case the issue persists, report this to the Framer team via https://www.framer.com/contact/${n ? `:\n${n}` : `.`}`;
}
function W(e, t) {
  if (e) return;
  if (typeof t == `function`)
    try {
      t = t();
    } catch {
      t = `(assert message threw)`;
    }
  typeof t == `string` && t.length > 2048 && (t = t.slice(0, 2048) + `…`);
  let n = Error(t ? `Assertion Error: ` + t : `Assertion Error`);
  if (n.stack)
    try {
      let e = n.stack.split(`
`);
      e[1]?.includes(`assert`)
        ? (e.splice(1, 1),
          (n.stack = e.join(`
`)))
        : e[0]?.includes(`assert`) &&
          (e.splice(0, 1),
          (n.stack = e.join(`
`)));
    } catch {}
  throw n;
}
function ut(e, t) {
  throw t instanceof Error
    ? t
    : Error(
        t === void 0
          ? e
            ? `Unexpected value: ${e}`
            : `Application entered invalid state`
          : String(t)
      );
}
function dt() {
  return Mt.location.origin === `https://screenshot.framer.invalid`;
}
function ft(e, t, n = Pt) {
  if (e && !n.has(e) && typeof document < `u`) {
    if ((n.add(e), !t)) {
      if (!Ft) {
        let e = document.createElement(`style`);
        if (
          (e.setAttribute(`type`, `text/css`),
          e.setAttribute(`data-framer-css`, `true`),
          !document.head)
        ) {
          console.warn(`not injecting CSS: the document is missing a <head> element`);
          return;
        }
        if ((document.head.appendChild(e), e.sheet)) Ft = e.sheet;
        else {
          console.warn(`not injecting CSS: injected <style> element does not have a sheet`, e);
          return;
        }
      }
      t = Ft;
    }
    try {
      t.insertRule(e, t.cssRules.length);
    } catch {}
  }
}
function pt(e) {
  return typeof e == `number` ? e : e.startsWith(`--`) ? K.variable(e) : e === `` ? `""` : e;
}
function mt(e) {
  return e !== Kt && e !== qt;
}
function ht(e) {
  for (let t in e) if (mt(t) && e?.[t] === !0) return !0;
  return !1;
}
function gt(e, t, n, r, i) {
  let a = j.useRef(null),
    o = j.useCallback(
      (e) => {
        t &&
          a.current !== !1 &&
          ((a.current = !1),
          e.currentTarget.setCustomValidity(` `),
          e.currentTarget.reportValidity(),
          t(e));
      },
      [t]
    ),
    s = j.useCallback(
      (r) => {
        if ((n?.(r), !t && !e)) return;
        let i = r.target.validity;
        a.current === !1 &&
          !ht(i) &&
          (r.currentTarget.setCustomValidity(``),
          r.target.reportValidity(),
          (a.current = !0),
          e?.());
      },
      [t, e, n]
    ),
    c = j.useCallback(
      (e) => {
        if (!t) {
          r?.(e);
          return;
        }
        if (a.current === !1) return;
        let n = e.currentTarget.validity;
        ht(n) ? o(e) : r?.(e);
      },
      [o, r, t]
    );
  return j.useMemo(() => ({ onInvalid: o, onChange: s, onBlur: c, onFocus: i }), [o, s, c, i]);
}
function _t(e, t, n) {
  let r = e + Math.max(t, 1) - 1;
  switch (n) {
    case `decimal`:
      return vt(r);
    case `lower-alpha`:
    case `upper-alpha`:
    case `lower-latin`:
    case `upper-latin`:
      return yt(r);
    case `lower-roman`:
    case `upper-roman`:
      return xt(r);
    default:
      return vt(r);
  }
}
function vt(e) {
  return String(e).length;
}
function yt(e) {
  let t = 1;
  for (; bt(t) < e;) t++;
  return t;
}
function bt(e) {
  let t = 0;
  for (let n = 0; n < e; n++) t += 26 ** (n + 1);
  return t;
}
function xt(e) {
  let t = 0;
  for (let n of Zt) {
    if (e < n) return t;
    t++;
  }
  let n = Math.floor((e - 888) / 1e3);
  return n >= 1 ? Math.max(t, n + 12) : t;
}
function St(e, t) {
  return K.variable(...e.flatMap((e) => [`${e}-rgb`, e]), t);
}
function Ct(e, t) {
  return `${e} > ${t}, ${e} > .ssr-variant > ${t}`;
}
var wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  jt,
  Mt,
  Nt,
  G,
  Pt,
  Ft,
  It,
  Lt,
  Rt,
  zt,
  Bt,
  Vt,
  K,
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt,
  Xt,
  Zt,
  Qt,
  $t,
  en,
  tn,
  nn,
  rn,
  an,
  on,
  sn,
  cn,
  ln;
function un() {
  return (un = e(() => {
    (o(),
      A(),
      (wt = () => {}),
      (Tt = N !== void 0),
      (Et =
        Tt &&
        (d.webdriver || /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(d.userAgent))),
      (Dt = Tt && typeof N.requestIdleCallback == `function`),
      (Ot = Dt ? N.requestIdleCallback : setTimeout),
      (kt = () => wt),
      (At = () => !0),
      (jt = () => !1),
      (Mt = Tt
        ? N
        : {
            addEventListener: () => {},
            removeEventListener: () => {},
            dispatchEvent: () => !1,
            ResizeObserver: void 0,
            onpointerdown: !1,
            onpointermove: !1,
            onpointerup: !1,
            ontouchstart: !1,
            ontouchmove: !1,
            ontouchend: !1,
            onmousedown: !1,
            onmousemove: !1,
            onmouseup: !1,
            devicePixelRatio: 1,
            scrollX: 0,
            scrollY: 0,
            location: { hash: ``, hostname: ``, href: ``, origin: ``, pathname: ``, search: `` },
            document: { baseURI: ``, cookie: ``, referrer: null },
            setTimeout: () => 0,
            clearTimeout: () => {},
            setInterval: () => 0,
            clearInterval: () => {},
            requestAnimationFrame: () => 0,
            cancelAnimationFrame: () => {},
            requestIdleCallback: () => 0,
            getSelection: () => null,
            matchMedia: (e) => ({
              matches: !1,
              media: e,
              onchange: () => {},
              addEventListener: () => {},
              removeEventListener: () => {},
              addListener: () => {},
              removeListener: () => {},
              dispatchEvent: () => !1,
            }),
            innerHeight: 0,
            innerWidth: 0,
            SVGSVGElement: {},
            open: function (e, t, n) {},
            __framer_events: [],
          }),
      (Nt = { target: dt() ? `EXPORT` : `PREVIEW`, zoom: 1 }),
      (G = {
        canvas: `CANVAS`,
        export: `EXPORT`,
        thumbnail: `THUMBNAIL`,
        preview: `PREVIEW`,
        current: () => Nt.target,
        hasRestrictions: () => {
          let e = Nt.target;
          return e === `CANVAS` || e === `EXPORT`;
        },
      }),
      (Pt = /* @__PURE__ */ new Set()),
      (It = /* @__PURE__ */ (function (e) {
        return (
          (e.Padding = `--framer-input-padding`),
          (e.BorderRadiusTopLeft = `--framer-input-border-radius-top-left`),
          (e.BorderRadiusTopRight = `--framer-input-border-radius-top-right`),
          (e.BorderRadiusBottomRight = `--framer-input-border-radius-bottom-right`),
          (e.BorderRadiusBottomLeft = `--framer-input-border-radius-bottom-left`),
          (e.CornerShape = `--framer-input-corner-shape`),
          (e.BorderColor = `--framer-input-border-color`),
          (e.BorderTopWidth = `--framer-input-border-top-width`),
          (e.BorderRightWidth = `--framer-input-border-right-width`),
          (e.BorderBottomWidth = `--framer-input-border-bottom-width`),
          (e.BorderLeftWidth = `--framer-input-border-left-width`),
          (e.BorderStyle = `--framer-input-border-style`),
          (e.Background = `--framer-input-background`),
          (e.FontFamily = `--framer-input-font-family`),
          (e.FontWeight = `--framer-input-font-weight`),
          (e.FontSize = `--framer-input-font-size`),
          (e.FontColor = `--framer-input-font-color`),
          (e.FontStyle = `--framer-input-font-style`),
          (e.FontLetterSpacing = `--framer-input-font-letter-spacing`),
          (e.FontTextAlignment = `--framer-input-font-text-alignment`),
          (e.FontLineHeight = `--framer-input-font-line-height`),
          (e.FontOpenType = `--framer-input-font-open-type-features`),
          (e.FontVariationAxes = `--framer-input-font-variation-axes`),
          (e.PlaceholderColor = `--framer-input-placeholder-color`),
          (e.BoxShadow = `--framer-input-box-shadow`),
          (e.FocusedBorderColor = `--framer-input-focused-border-color`),
          (e.FocusedBorderWidth = `--framer-input-focused-border-width`),
          (e.FocusedBorderStyle = `--framer-input-focused-border-style`),
          (e.FocusedBackground = `--framer-input-focused-background`),
          (e.FocusedBoxShadow = `--framer-input-focused-box-shadow`),
          (e.FocusedTransition = `--framer-input-focused-transition`),
          (e.BooleanCheckedBackground = `--framer-input-boolean-checked-background`),
          (e.BooleanCheckedBorderColor = `--framer-input-boolean-checked-border-color`),
          (e.BooleanCheckedBorderWidth = `--framer-input-boolean-checked-border-width`),
          (e.BooleanCheckedBorderStyle = `--framer-input-boolean-checked-border-style`),
          (e.BooleanCheckedBoxShadow = `--framer-input-boolean-checked-box-shadow`),
          (e.BooleanCheckedTransition = `--framer-input-boolean-checked-transition`),
          (e.InvalidTextColor = `--framer-input-invalid-text-color`),
          (e.IconBackgroundImage = `--framer-input-icon-image`),
          (e.IconMaskImage = `--framer-input-icon-mask-image`),
          (e.IconColor = `--framer-input-icon-color`),
          (e.IconContent = `--framer-input-icon-content`),
          (e.WrapperHeight = `--framer-input-wrapper-height`),
          e
        );
      })({})),
      (Lt = It),
      (Rt = `framer-form-input`),
      (zt = `framer-form-input-wrapper`),
      (Bt = `framer-form-input-empty`),
      (Vt = `framer-form-input-forced-focus`),
      (K = /* @__PURE__ */ (() => {
        function e(e, t) {
          let n = ` `;
          for (let e in t) {
            let r = t[e];
            (W(r !== void 0, "Encountered `undefined` in CSSDeclaration"),
              (n += `${e.replace(/([A-Z])/gu, `-$1`).toLowerCase()}: ${pt(r)}; `));
          }
          return e + ` {` + n + `}`;
        }
        return (
          (e.variable = (...e) => {
            let t = e[e.length - 1];
            W(t !== void 0, "Zero variables passed to `css.variable`");
            let n = t.startsWith(`--`) ? `var(${t})` : t;
            for (let t = e.length - 2; t >= 0; t--) n = `var(${e[t]}, ${n})`;
            return n;
          }),
          e
        );
      })()),
      (Ht = [
        K(`.${Rt}`, {
          padding: K.variable(Lt.Padding),
          background: `transparent`,
          fontFamily: K.variable(Lt.FontFamily),
          fontWeight: K.variable(Lt.FontWeight),
          fontSize: K.variable(Lt.FontSize),
          fontStyle: K.variable(Lt.FontStyle),
          color: K.variable(Lt.FontColor),
          fontFeatureSettings: K.variable(Lt.FontOpenType),
          fontVariationSettings: K.variable(Lt.FontVariationAxes),
          border: `none`,
          textOverflow: `ellipsis`,
          whiteSpace: `nowrap`,
          overflow: `hidden`,
          width: `100%`,
          height: K.variable(Lt.WrapperHeight, `100%`),
          letterSpacing: K.variable(Lt.FontLetterSpacing),
          textAlign: K.variable(Lt.FontTextAlignment),
          lineHeight: K.variable(Lt.FontLineHeight),
        }),
        K(`.${Rt}:focus-visible`, { outline: `none` }),
      ]),
      (Ut = [K(`.${zt}`, { overflow: `hidden` })]),
      (Wt = `var(${Lt.BorderTopWidth}) var(${Lt.BorderRightWidth}) var(${Lt.BorderBottomWidth}) var(${Lt.BorderLeftWidth})`),
      (Gt = [
        `.${zt}:after {
        content: "";
        pointer-events: none;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-top-left-radius: var(${Lt.BorderRadiusTopLeft});
        border-top-right-radius: var(${Lt.BorderRadiusTopRight});
        border-bottom-right-radius: var(${Lt.BorderRadiusBottomRight});
        border-bottom-left-radius: var(${Lt.BorderRadiusBottomLeft});
        corner-shape: var(${Lt.CornerShape});
        border-color: var(${Lt.BorderColor});
        border-top-width: var(${Lt.BorderTopWidth});
        border-right-width: var(${Lt.BorderRightWidth});
        border-bottom-width: var(${Lt.BorderBottomWidth});
        border-left-width: var(${Lt.BorderLeftWidth});
        border-style: var(${Lt.BorderStyle});
        transition: var(${Lt.FocusedTransition});
        transition-property: border-color, border-width, border-style, border-top-left-radius, border-top-right-radius, border-bottom-right-radius, border-bottom-left-radius, corner-shape;
    }`,
      ]),
      (Kt = `customError`),
      (qt = `valid`),
      (Jt = {
        backgroundRepeat: `no-repeat`,
        backgroundSize: `16px`,
        maskRepeat: `no-repeat`,
        maskSize: `16px`,
        backgroundColor: K.variable(Lt.IconColor),
      }),
      (Yt = {
        content: ``,
        display: `block`,
        position: `absolute`,
        right: 0,
        top: 0,
        bottom: 0,
        width: `16px`,
        boxSizing: `content-box`,
        padding: K.variable(Lt.Padding),
        border: `none`,
        pointerEvents: `none`,
        ...Jt,
      }),
      (Xt = `--max-list-digits`),
      (Zt = [1, 2, 3, 8, 18, 28, 38, 88, 188, 288, 388, 888]),
      (Qt = { display: `flex`, flexDirection: `column`, justifyContent: `flex-start` }),
      ($t = { display: `inline-block` }),
      (en = { display: `block` }),
      (tn = [
        `
        [data-framer-component-type="RichTextContainer"] {
            display: ${Qt.display};
            flex-direction: ${Qt.flexDirection};
            justify-content: ${Qt.justifyContent};
            outline: none;
            flex-shrink: 0;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        figure.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        ol.framer-text,
        ul.framer-text {
            margin: 0;
            padding: 0;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text,
        mark.framer-text,
        span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-font-style-preview, var(--framer-blockquote-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-font-weight-preview, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-text-transform, none));
            text-decoration-line: var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial));
            text-decoration-style: var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial));
            text-decoration-color: var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial));
            text-decoration-thickness: var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial));
            text-decoration-skip-ink: var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial));
            text-underline-offset: var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
            text-align: var(--framer-blockquote-text-alignment, var(--framer-text-alignment, start));
            -webkit-text-stroke-width: var(--framer-text-stroke-width, initial);
            -webkit-text-stroke-color: var(--framer-text-stroke-color, initial);
            -moz-font-feature-settings: var(--framer-font-open-type-features, initial);
            -webkit-font-feature-settings: var(--framer-font-open-type-features, initial);
            font-feature-settings: var(--framer-font-open-type-features, initial);
            font-variation-settings: var(--framer-font-variation-axes-preview, var(--framer-font-variation-axes, normal));
            text-wrap: var(--framer-text-wrap-override, var(--framer-text-wrap));
        }
    `,
        `
        mark.framer-text,
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text {
            background-color: var(--framer-blockquote-text-background-color, var(--framer-text-background-color, initial));
            border-radius: var(--framer-blockquote-text-background-radius, var(--framer-text-background-radius, initial));
            corner-shape: var(--framer-blockquote-text-background-corner-shape, var(--framer-text-background-corner-shape, initial));
            padding: var(--framer-blockquote-text-background-padding, var(--framer-text-background-padding, initial));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            p.framer-text,
            div.framer-text,
            h1.framer-text,
            h2.framer-text,
            h3.framer-text,
            h4.framer-text,
            h5.framer-text,
            h6.framer-text,
            li.framer-text,
            ol.framer-text,
            ul.framer-text,
            span.framer-text:not([data-text-fill]) {
                color: ${St([`--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                -webkit-text-stroke-color: ${St([`--framer-text-stroke-color`], `initial`)};
            }

            mark.framer-text {
                background-color: ${St([`--framer-blockquote-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-fit-text .framer-text {
            white-space: nowrap;
            white-space-collapse: preserve;
        }
    `,
        `
        strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold, var(--framer-font-family-bold));
            font-style: var(--framer-blockquote-font-style-bold, var(--framer-font-style-bold));
            font-weight: var(--framer-blockquote-font-weight-bold, var(--framer-font-weight-bold, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold, var(--framer-font-variation-axes-bold));
        }
    `,
        `
        em.framer-text {
            font-family: var(--framer-blockquote-font-family-italic, var(--framer-font-family-italic));
            font-style: var(--framer-blockquote-font-style-italic, var(--framer-font-style-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-italic, var(--framer-font-weight-italic));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-italic, var(--framer-font-variation-axes-italic));
        }
    `,
        `
        em.framer-text > strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold-italic, var(--framer-font-family-bold-italic));
            font-style: var(--framer-blockquote-font-style-bold-italic, var(--framer-font-style-bold-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-bold-italic, var(--framer-font-weight-bold-italic, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold-italic, var(--framer-font-variation-axes-bold-italic));
        }
    `,
        `
        p.framer-text:not(:first-child),
        div.framer-text:not(:first-child),
        h1.framer-text:not(:first-child),
        h2.framer-text:not(:first-child),
        h3.framer-text:not(:first-child),
        h4.framer-text:not(:first-child),
        h5.framer-text:not(:first-child),
        h6.framer-text:not(:first-child),
        ol.framer-text:not(:first-child),
        ul.framer-text:not(:first-child),
        blockquote.framer-text:not(:first-child),
        table.framer-text:not(:first-child),
        figure.framer-text:not(:first-child),
        .framer-image.framer-text:not(:first-child) {
            margin-top: var(--framer-blockquote-paragraph-spacing, var(--framer-paragraph-spacing, 0));
        }
    `,
        `
        li.framer-text > ul.framer-text:nth-child(2),
        li.framer-text > ol.framer-text:nth-child(2) {
            margin-top: 0;
        }
    `,
        `
        .framer-text[data-text-fill] {
            display: ${$t.display};
            background-clip: text;
            -webkit-background-clip: text;
            /* make this a transparent color if you want to visualise the clipping  */
            -webkit-text-fill-color: transparent;
            padding: max(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / 2));
            margin: min(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / -2));
        }
    `,
        `
        code.framer-text,
        code.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text,
            code.framer-text span.framer-text:not([data-text-fill]) {
                color: ${St([`--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
            }
        }
    `,
        `
        blockquote.framer-text {
            margin-block-start: initial;
            margin-block-end: initial;
            margin-inline-start: initial;
            margin-inline-end: initial;
            unicode-bidi: initial;
        }
    `,
        `
        a.framer-text,
        a.framer-text span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link],
        span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            /* Ensure the color is inherited from the link style rather than the parent text for nested spans */
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-font-family, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-font-style, var(--framer-blockquote-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-font-weight, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-text-transform, var(--framer-blockquote-text-transform, var(--framer-text-transform, none)));
            /* Cursor inherit to overwrite the user agent stylesheet on rich text links. */
            cursor: var(--framer-custom-cursors, pointer);
            /* Don't inherit background styles from any parent text style. */
            background-color: initial;
            border-radius: var(--framer-link-text-background-radius, initial);
            corner-shape: var(--framer-link-text-background-corner-shape, initial);
            padding: var(--framer-link-text-background-padding, initial);
        }
    `,
        `
        a.framer-text,
        span.framer-text[data-nested-link] {
            color: var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            /* Don't inherit background styles from any parent text style. */
            background-color: var(--framer-link-text-background-color, initial);
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text,
            span.framer-text[data-nested-link] {
                color: ${St([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${St([`--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${St([`--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
    code.framer-text a.framer-text,
    code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
    code.framer-text span.framer-text[data-nested-link],
    code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
        font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
        font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
        font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
        color: inherit;
        font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
    }
`,
        `
    code.framer-text a.framer-text,
    code.framer-text span.framer-text[data-nested-link] {
        color: var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
    }
`,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text,
        code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-nested-link],
        code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            color: ${St([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
`,
        `
        /* Linked images keep the radius and padding of their image style. */
        a.framer-text:where(:not(.framer-image)):hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link]:hover,
        span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-blockquote-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-blockquote-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-blockquote-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-text-background-radius, var(--framer-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-text-background-corner-shape, var(--framer-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-text-background-padding, var(--framer-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: ${St([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
            background-color: ${St([`--framer-link-hover-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            text-decoration-color: ${St([`--framer-link-hover-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
        }
    }
    `,
        `
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: ${St([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
   `,
        `
        a.framer-text:where(:not(.framer-image))[data-framer-page-link-current],
        a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            border-radius: var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial));
            corner-shape: var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial));
            padding: var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            background-color: var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current],
            span.framer-text[data-framer-page-link-current]{
                color: ${St([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${St([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
                text-decoration-color: ${St([`--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: inherit;
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current],
            code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current],
            code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
                color: ${St([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${St([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        a.framer-text:where(:not(.framer-image))[data-framer-page-link-current]:hover,
        a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current]:hover,
            span.framer-text[data-framer-page-link-current]:hover {
                color: ${St([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${St([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${St([`--framer-link-hover-text-decoration-color`, `--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current]:hover,
        code.framer-text span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current]:hover,
            code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current]:hover,
            code.framer-text span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
                color: ${St([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${St([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-image.framer-text {
            display: ${en.display};
            max-width: 100%;
            height: auto;
        }
    `,
        `
        /* A linked image gets its image style on both the link and the image; only the image draws the border and shadow. */
        a.framer-image.framer-text {
            border: none;
            box-shadow: none;
        }
    `,
        `
        .text-styles-preset-reset.framer-text {
            --framer-font-family: Inter, Inter Placeholder, sans-serif;
            --framer-font-style: normal;
            --framer-font-weight: 500;
            --framer-text-color: #000;
            --framer-font-size: 16px;
            --framer-letter-spacing: 0;
            --framer-text-transform: none;
            --framer-text-decoration: none;
            --framer-text-decoration-style: none;
            --framer-text-decoration-color: none;
            --framer-text-decoration-thickness: none;
            --framer-text-decoration-skip-ink: none;
            --framer-text-decoration-offset: none;
            --framer-line-height: 1.2em;
            --framer-text-alignment: start;
            --framer-font-open-type-features: normal;
            --framer-text-background-color: initial;
            --framer-text-background-radius: initial;
            --framer-text-background-corner-shape: initial;
            --framer-text-background-padding: initial;
        }
    `,
        `
        ol.framer-text {
            --list-style-type: decimal;
        }
    `,
        `
        ul.framer-text,
        ol.framer-text {
            padding-inline-start: 0;
            position: relative;
        }
    `,
        `
        li.framer-text {
            counter-increment: list-item;
            list-style: "";
            padding-inline-start: 2ch;
        }
    `,
        `
        ol.framer-text > li.framer-text {
            padding-inline-start: calc(calc(var(${Xt}, 1) + 1) * 1ch);
        }
    `,
        `
        ol.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: counter(list-item, var(--list-style-type)) ".";
            font-variant-numeric: tabular-nums;
        }
    `,
        `
        ul.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: "•";
        }
    `,
        `
        .framer-table-wrapper {
            overflow-x: auto;
        }
    `,
        `
        table.framer-text,
        .framer-table-wrapper table.framer-text {
            border-collapse: separate;
            border-spacing: 0;
            table-layout: auto;
            word-break: normal;
            width: 100%;
        }
    `,
        `
        td.framer-text,
        th.framer-text {
            min-width: 16ch;
            overflow-wrap: anywhere;
            vertical-align: top;
        }
    `,
        `
        ${Ct(`.framer-text-module[data-width="fill"]`, `:first-child`)} {
            width: 100% !important;
        }
    `,
      ]),
      (nn = `--text-truncation-display-inline-for-safari-16`),
      (rn = `--text-truncation-display-none-for-safari-16`),
      (an = `--text-truncation-line-break-for-safari-16`),
      (on = [
        `div.framer-text`,
        `p.framer-text`,
        `h1.framer-text`,
        `h2.framer-text`,
        `h3.framer-text`,
        `h4.framer-text`,
        `h5.framer-text`,
        `h6.framer-text`,
        `ol.framer-text`,
        `ul.framer-text`,
        `li.framer-text`,
        `blockquote.framer-text`,
        `.framer-text.framer-image`,
      ]),
      (sn = `(background: -webkit-named-image(i))`),
      (cn = `(contain-intrinsic-size: inherit)`),
      (ln = [
        `@supports ${sn} and (not ${cn}) {
        /* Render block-like elements inline when text is truncated, otherwise default to user agent (revert)  */
        ${on.join(`, `)} { display: var(${nn}, revert) }

        /* Add a line break after each block-like element that we render inline, to resemble the block-like behavior */
        ${on.map((e) => `${e}::after`).join(`, `)} { content: var(${an}); white-space: pre; }

        /* Don't render modules (e.g. videos, code-blocks), or tables when text is truncated, because often these can't be truncated and their children might be block elements */
        .framer-text.framer-text-module,
        .framer-text.framer-table-wrapper { display: var(${rn}, revert) }

        /* Render text-fill elements inline when text is truncated, otherwise default to their default value (e.g. inline-block) */
        p.framer-text[data-text-fill] { display: var(${nn}, ${$t.display}) }
    }`,
      ]));
  }))();
}
function dn(e, t, n) {
  if (Yy.has(e)) return;
  let r = Promise.resolve()
    .then(t)
    .then((t) => (Yy.set(e, t), t))
    .catch((t) => {
      throw (Yy.delete(e), console.warn(`Failed to preload lazy module from ${n}`, t), t);
    });
  (r.catch(wt), Yy.set(e, r));
}
function fn(e, t) {
  Tt && (Xy.set(e, t), Zy.has(e) && dn(e, t, `registered loader ${e}`));
}
function pn() {
  if (!Tt) return;
  let e = document.querySelectorAll(`[rel="modulepreload"][data-framer-lazy]`);
  for (let t of e) {
    let e = t.getAttribute(`data-framer-lazy`),
      n = t.getAttribute(`href`);
    if (!e || !n) continue;
    let r = e.startsWith(Qy),
      i = r ? e.slice(1) : e;
    if (!i) continue;
    Zy.add(i);
    let a = Xy.get(i);
    a
      ? dn(i, a, `registered loader ${i}`)
      : r &&
        dn(
          i,
          () =>
            import(
              /* @vite-ignore */
              n
            ),
          n
        );
  }
}
function mn(e) {
  return typeof e == `object` && !!e && !w(e) && eb in e;
}
function hn(e, t) {
  if (t in e) return e[t];
  throw Error(`Module does not contain export '${t}'`);
}
function gn(e, t = `default`, n) {
  n && fn(n, e);
  let r,
    i,
    a,
    o = () => {
      if (i || !n || !Yy.has(n)) return;
      let e = Yy.get(n);
      st(e) ? s(() => e) : (i = hn(e, t));
    },
    s = (e) =>
      i
        ? Promise.resolve(i)
        : ((r ||= e()
            .then((e) => {
              let n = hn(e, t);
              return ((i = n), n);
            })
            .catch((e) => {
              a = e;
            })),
          r),
    c = !1,
    l = E(function (t, r) {
      if (
        (M(() => {
          c = !0;
        }, []),
        a)
      )
        throw a;
      if ((o(), n !== void 0 && $y !== void 0 && $y.add(n), !i)) throw s(e);
      return /* @__PURE__ */ T(i, { ref: r, ...t });
    });
  return (
    (l.preload = () => (o(), s(e))),
    (l.getStatus = () => ({ hasLoaded: i !== void 0, hasRendered: c })),
    l
  );
}
function _n(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function vn(e) {
  return e === null || !(nb in e) ? !1 : typeof e.equals == `function`;
}
function yn(e, t) {
  return e === t || (e !== e && t !== t);
}
function bn(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0;) if (!yn(e[r], t[r])) return !1;
  return !0;
}
function xn(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0;) if (!Dn(e[r], t[r], !0)) return !1;
  return !0;
}
function Sn(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!yn(r, t.get(n))) return !1;
  return !0;
}
function Cn(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!Dn(r, t.get(n), !0)) return !1;
  return !0;
}
function wn(e, t) {
  if (e.size !== t.size) return !1;
  for (let n of e.keys()) if (!t.has(n)) return !1;
  return !0;
}
function Tn(e, t) {
  let n = tb(e);
  if (n.length !== tb(t).length) return !1;
  for (let r of n)
    if (!_n(t, r) || (!(r === `_owner` && _n(e, `$$typeof`) && e.$$typeof) && !yn(e[r], t[r])))
      return !1;
  return !0;
}
function En(e, t) {
  let n = tb(e);
  if (n.length !== tb(t).length) return !1;
  for (let r of n)
    if (!_n(t, r) || (!(r === `_owner` && _n(e, `$$typeof`) && e.$$typeof) && !Dn(e[r], t[r], !0)))
      return !1;
  return !0;
}
function Dn(e, t, n) {
  if (e === t) return !0;
  if (!e || !t) return e !== e && t !== t;
  let r = typeof e;
  if (r !== typeof t || r !== `object`) return !1;
  let i = Array.isArray(e),
    a = Array.isArray(t);
  if (i && a) return n ? xn(e, t) : bn(e, t);
  if (i !== a) return !1;
  let o = e instanceof Map,
    s = t instanceof Map;
  if (o && s) return n ? Cn(e, t) : Sn(e, t);
  if (o !== s) return !1;
  let c = e instanceof Set,
    l = t instanceof Set;
  if (c && l) return wn(e, t);
  if (c !== l) return !1;
  let u = e instanceof Date,
    d = t instanceof Date;
  if (u && d) return e.getTime() === t.getTime();
  if (u !== d) return !1;
  let f = e instanceof RegExp,
    p = t instanceof RegExp;
  return f && p
    ? e.toString() === t.toString()
    : f === p
      ? vn(e) && vn(t)
        ? e.equals(t)
        : n
          ? En(e, t)
          : Tn(e, t)
      : !1;
}
function On(e, t, n = !0) {
  try {
    return Dn(e, t, n);
  } catch (e) {
    if (e instanceof Error && /stack|recursion/iu.exec(e.message))
      return (
        console.warn(`Warning: isEqual does not handle circular references.`, e.name, e.message),
        !1
      );
    throw e;
  }
}
function kn(e) {
  return j.useCallback((t) => e[t], [e]);
}
function An({ api: e, children: t }) {
  return /* @__PURE__ */ T(rb.Provider, { value: e, children: t });
}
function jn() {
  return j.useContext(rb);
}
function Mn({ routes: e, children: t }) {
  let n = kn(e),
    r = S(() => ({ getRoute: n }), [n]);
  return /* @__PURE__ */ T(rb.Provider, { value: r, children: t });
}
function Nn() {
  let e = jn(),
    n = t(ib),
    r = n?.routeId ?? e.currentRouteId,
    i = n?.routeId ? n.pathVariables : e.currentPathVariables,
    a = n?.routeId ? void 0 : e.currentCanonicalPathVariables,
    o = r ? e.getRoute?.(r) : void 0;
  return S(() => {
    if (r && o) return { ...o, id: r, pathVariables: i, canonicalPathVariables: a };
  }, [a, r, i, o]);
}
function Pn() {
  let e = Nn();
  if (e) return `${e.id}-${JSON.stringify(e.pathVariables)}`;
}
function Fn(e) {
  let t = Nn(),
    n = j.useRef(t);
  !On(n.current, t) && t && ((n.current = t), e(t));
}
function In(e) {
  let t = jn();
  if (e) return t.getRoute?.(e);
}
function Ln(e, t) {
  if (t && e) return e.elements && t in e.elements ? e.elements[t] : t;
}
function Rn(e) {
  let t = [`pointerdown`, `pointerup`, `keydown`, `keyup`],
    n = (e) => {
      let n = e.type;
      t.includes(n) && performance.mark(`framer-navigation-input`, { detail: { type: n } });
    };
  for (let r = 0; r < t.length; r++) document.addEventListener(t[r], n, { signal: e });
  return () => {
    for (let e = 0; e < t.length; e++) document.removeEventListener(t[e], n);
  };
}
function zn(e, t) {
  let n = Nn(),
    r = In(t) ?? n;
  return j.useMemo(() => (r ? Ln(r, e) : e), [e, r]);
}
function Bn() {
  return Nn()?.pathVariables;
}
function Vn(e) {
  let t = Object.getPrototypeOf(e);
  return (
    t === Object.prototype ||
    t === null ||
    Object.getPrototypeOf(t) === null ||
    Object.getOwnPropertyNames(t).sort().join(`\0`) === fb
  );
}
function Hn(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function Un(e) {
  return typeof Buffer < `u` && Buffer.isBuffer(e);
}
function Wn(e) {
  switch (e) {
    case `"`:
      return `\\"`;
    case `<`:
      return `\\u003C`;
    case `\\`:
      return `\\\\`;
    case `
`:
      return `\\n`;
    case `\r`:
      return `\\r`;
    case `	`:
      return `\\t`;
    case `\b`:
      return `\\b`;
    case `\f`:
      return `\\f`;
    case `\u2028`:
      return `\\u2028`;
    case `\u2029`:
      return `\\u2029`;
    default:
      return e < ` ` ? `\\u${e.charCodeAt(0).toString(16).padStart(4, `0`)}` : ``;
  }
}
function Gn(e) {
  let t = ``,
    n = 0,
    r = e.length;
  for (let i = 0; i < r; i += 1) {
    let r = e[i],
      a = Wn(r);
    a && ((t += e.slice(n, i) + a), (n = i + 1));
  }
  return `"${n === 0 ? e : t + e.slice(n)}"`;
}
function Kn(e) {
  return Object.getOwnPropertySymbols(e).filter(
    (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
  );
}
function qn(e) {
  return pb.test(e) ? `.` + e : `[` + JSON.stringify(e) + `]`;
}
function Jn(e) {
  return !(!Number.isInteger(e) || e < 0 || e > ub);
}
function Yn(e) {
  return !(!Number.isInteger(e) || e < 0 || e > lb);
}
function Xn(e) {
  if (e.length === 0 || (e.length > 1 && e.charCodeAt(0) === 48)) return !1;
  for (let t = 0; t < e.length; t++) {
    let n = e.charCodeAt(t);
    if (n < 48 || n > 57) return !1;
  }
  return Jn(+e);
}
function Zn(e) {
  for (var t = e.length - 1; t >= 0 && !Xn(e[t]); t--);
  return t + 1;
}
function Qn(e) {
  let t = Object.keys(e);
  return ((t.length = Zn(t)), t);
}
function $n(e) {
  return new Uint8Array(e).toBase64();
}
function er(e) {
  return Uint8Array.fromBase64(e).buffer;
}
function tr(e) {
  return Buffer.from(e).toString(`base64`);
}
function nr(e) {
  return Uint8Array.from(Buffer.from(e, `base64`)).buffer;
}
function rr(e) {
  let t = new Uint8Array(e),
    n = ``,
    r = 32768;
  for (let e = 0; e < t.length; e += r) {
    let i = t.subarray(e, e + r);
    n += String.fromCharCode.apply(null, i);
  }
  return btoa(n);
}
function ir(e) {
  let t = atob(e),
    n = t.length,
    r = new Uint8Array(n);
  for (let e = 0; e < n; e++) r[e] = t.charCodeAt(e);
  return r.buffer;
}
function ar(e, t) {
  if (!t) return e;
  let n = {};
  for (let r of Object.keys(e)) n[r] = t[r] ?? e[r];
  return n;
}
function or(e, t, n) {
  return sr(JSON.parse(e), t, n);
}
function sr(e, t, n) {
  let r = ar(Cb, n?.operations);
  if (typeof e == `number`) return s(e, !0);
  if (!Array.isArray(e) || e.length === 0) throw Error(`Invalid input`);
  let i = e,
    a = Array(i.length),
    o = null;
  function s(e, n = !1) {
    if (e === -1) return r.fromPrimitive(void 0);
    if (e === -3) return r.fromPrimitive(NaN);
    if (e === -4) return r.fromPrimitive(1 / 0);
    if (e === -5) return r.fromPrimitive(-1 / 0);
    if (e === -6) return r.fromPrimitive(-0);
    if (n || typeof e != `number`) throw Error(`Invalid input`);
    if (e in a) return a[e];
    if (e >= i.length) throw Error(`Invalid input`);
    let c = i[e];
    if (!c || typeof c != `object`) a[e] = r.fromPrimitive(c);
    else if (Array.isArray(c)) {
      if (typeof c[0] == `string`) {
        let n = c[0],
          l = t && Object.hasOwn(t, n) ? t[n] : void 0;
        if (l) {
          let t = c[1];
          if ((typeof t != `number` && (t = i.push(c[1]) - 1), Object.hasOwn(a, t)))
            return (a[e] = l(a[t]));
          if (((o ??= /* @__PURE__ */ new Set()), o.has(t)))
            throw Error(`Invalid circular reference`);
          return (o.add(t), (a[e] = l(s(t))), o.delete(t), a[e]);
        }
        switch (n) {
          case `Date`:
            a[e] = r.fromISOString(c[1]);
            break;
          case `Set`:
            let t = r.createSet();
            a[e] = t;
            for (let e = 1; e < c.length; e += 1) r.addValue(t, s(c[e]));
            break;
          case `Map`:
            let o = r.createMap();
            a[e] = o;
            for (let e = 1; e < c.length; e += 2) r.addEntry(o, s(c[e]), s(c[e + 1]));
            break;
          case `RegExp`:
            a[e] = r.fromRegExpInfo(c[1], c[2]);
            break;
          case `Object`: {
            let t = c[1];
            if (typeof i[t] == `object` && i[t][0] !== `BigInt`) throw Error(`Invalid input`);
            a[e] = r.box(s(t));
            break;
          }
          case `BigInt`:
            a[e] = r.fromPrimitive(BigInt(c[1]));
            break;
          case `null`:
            let l = r.createNullPrototypeObject();
            a[e] = l;
            for (let e = 1; e < c.length; e += 2) {
              let t = c[e];
              if (typeof t != `string`) throw Error(`Cannot parse an object with a non-string key`);
              if (t === `__proto__`)
                throw Error("Cannot parse an object with a `__proto__` property");
              r.set(l, t, s(c[e + 1]));
            }
            break;
          case `Int8Array`:
          case `Uint8Array`:
          case `Uint8ClampedArray`:
          case `Int16Array`:
          case `Uint16Array`:
          case `Float16Array`:
          case `Int32Array`:
          case `Uint32Array`:
          case `Float32Array`:
          case `Float64Array`:
          case `BigInt64Array`:
          case `BigUint64Array`:
          case `DataView`: {
            if (i[c[1]][0] !== `ArrayBuffer`) throw Error(`Invalid data`);
            let t = s(c[1]);
            a[e] = r.fromViewInfo(n, t, c[2], c[3]);
            break;
          }
          case `ArrayBuffer`: {
            let t = c[1];
            if (typeof t != `string`) throw Error(`Invalid ArrayBuffer encoding`);
            a[e] = r.fromArrayBuffer(_b(t));
            break;
          }
          case `URL`:
          case `URLSearchParams`:
          case `Temporal.Duration`:
          case `Temporal.Instant`:
          case `Temporal.PlainDate`:
          case `Temporal.PlainTime`:
          case `Temporal.PlainDateTime`:
          case `Temporal.PlainMonthDay`:
          case `Temporal.PlainYearMonth`:
          case `Temporal.ZonedDateTime`:
            a[e] = r.fromStringValue(n, c[1]);
            break;
          default:
            throw Error(`Unknown type ${n}`);
        }
      } else if (c[0] === -7) {
        let t = c[1];
        if (!Yn(t)) throw Error(`Invalid input`);
        let n = r.createSparseArray(t);
        a[e] = n;
        for (let e = 2; e < c.length; e += 2) {
          let i = c[e];
          if (!Jn(i) || i >= t) throw Error(`Invalid input`);
          r.set(n, i, s(c[e + 1]));
        }
      } else {
        let t = r.createArray(c.length);
        a[e] = t;
        for (let e = 0; e < c.length; e += 1) {
          let n = c[e];
          n !== -2 && r.set(t, e, s(n));
        }
      }
    } else {
      let t = r.createObject();
      a[e] = t;
      for (let e of Object.keys(c)) {
        if (e === `__proto__`) throw Error("Cannot parse an object with a `__proto__` property");
        r.set(t, e, s(c[e]));
      }
    }
    return a[e];
  }
  return s(0);
}
function cr(e, t, n) {
  let r = lr(!1, e, t, n);
  return typeof r == `string` ? r : `[${r.join(`,`)}]`;
}
function lr(e, t, n, r) {
  let i = ar(bb, r?.operations),
    a = [],
    o = /* @__PURE__ */ new Map(),
    s = [];
  if (n) for (let e of Object.getOwnPropertyNames(n)) s.push({ key: e, fn: n[e] });
  let c = [],
    l = 0;
  function u(n, r) {
    let d = i.typeOf(n);
    if (d === `undefined`) return -1;
    let f;
    if (d === `number`) {
      if (((f = i.toPrimitive(n)), Number.isNaN(f))) return -3;
      if (f === 1 / 0) return -4;
      if (f === -1 / 0) return -5;
      if (f === 0 && 1 / f < 0) return -6;
    }
    let p = i.identify(n);
    if (o.has(p)) return o.get(p);
    ((r ??= l++), o.set(p, r));
    for (let { key: e, fn: t } of s) {
      let i = t(n);
      if (i) return ((a[r] = `["${e}",${u(i)}]`), r);
    }
    if (d === `function`) throw new db(`Cannot stringify a function`, c, n, t);
    if (d === `symbol`) throw new db(`Cannot stringify a Symbol primitive`, c, n, t);
    let m = ``;
    if (d !== `object`) m = ur(d === `number` ? f : i.toPrimitive(n));
    else if (i.isThenable(n)) {
      if (!e)
        throw new db(
          `Cannot stringify a Promise or thenable — use stringifyAsync instead`,
          c,
          n,
          t
        );
      ((m = i.toPromise(n).then((e) => {
        let t = u(e, r);
        t < 0 && (a[r] = t);
      })),
        m.catch(() => {}));
    } else {
      let e = i.tagOf(n);
      switch (e) {
        case `Number`:
        case `String`:
        case `Boolean`:
        case `BigInt`:
          m = `["Object",${u(i.unbox(n))}]`;
          break;
        case `Date`:
          m = `["Date","${i.toISOString(n)}"]`;
          break;
        case `URL`:
          m = `["URL",${Gn(i.toStringValue(n))}]`;
          break;
        case `URLSearchParams`:
          m = `["URLSearchParams",${Gn(i.toStringValue(n))}]`;
          break;
        case `RegExp`:
          let { source: r, flags: a } = i.regExpInfo(n);
          m = a ? `["RegExp",${Gn(r)},"${a}"]` : `["RegExp",${Gn(r)}]`;
          break;
        case `Array`: {
          let e = !1,
            t = i.lengthOf(n);
          m = `[`;
          for (let r = 0; r < t; r += 1)
            if ((r > 0 && (m += `,`), i.hasOwn(n, r)))
              (c.push(`[${r}]`), (m += u(i.get(n, r))), c.pop());
            else if (e) m += -2;
            else {
              let r = i.indicesOf(n),
                a = r.length,
                o = String(t).length;
              if ((t - a) * 3 > 4 + o + a * (o + 1)) {
                m = `[-7,` + t;
                for (let e = 0; e < r.length; e++) {
                  let t = r[e];
                  (c.push(`[${t}]`), (m += `,` + t + `,` + u(i.get(n, t))), c.pop());
                }
                break;
              }
              ((e = !0), (m += -2));
            }
          m += `]`;
          break;
        }
        case `Set`:
          m = `["Set"`;
          for (let e of i.valuesOf(n)) m += `,${u(e)}`;
          m += `]`;
          break;
        case `Map`:
          m = `["Map"`;
          for (let [e, t] of i.entriesOf(n)) {
            let n = i.typeOf(e),
              r = n !== `object` && n !== `function` && n !== `symbol`;
            (c.push(`.get(${r ? ur(i.toPrimitive(e)) : `...`})`),
              (m += `,${u(e)},${u(t)}`),
              c.pop());
          }
          m += `]`;
          break;
        case `Int8Array`:
        case `Uint8Array`:
        case `Uint8ClampedArray`:
        case `Int16Array`:
        case `Uint16Array`:
        case `Float16Array`:
        case `Int32Array`:
        case `Uint32Array`:
        case `Float32Array`:
        case `Float64Array`:
        case `BigInt64Array`:
        case `BigUint64Array`: {
          let t = i.viewInfo(n);
          ((m = `["` + e + `",` + u(t.buffer)),
            t.byteLength !== t.bufferByteLength && (m += `,${t.byteOffset},${t.length}`),
            (m += `]`));
          break;
        }
        case `DataView`: {
          let t = i.viewInfo(n);
          ((m = `["` + e + `",` + u(t.buffer)),
            t.byteLength !== t.bufferByteLength && (m += `,${t.byteOffset},${t.byteLength}`),
            (m += `]`));
          break;
        }
        case `ArrayBuffer`:
          m = `["ArrayBuffer","${gb(i.toArrayBuffer(n))}"]`;
          break;
        case `Temporal.Duration`:
        case `Temporal.Instant`:
        case `Temporal.PlainDate`:
        case `Temporal.PlainTime`:
        case `Temporal.PlainDateTime`:
        case `Temporal.PlainMonthDay`:
        case `Temporal.PlainYearMonth`:
        case `Temporal.ZonedDateTime`:
          m = `["${e}",${Gn(i.toStringValue(n))}]`;
          break;
        default: {
          let e = i.shapeOf(n);
          if (e.kind === `not-plain`) throw new db(`Cannot stringify arbitrary non-POJOs`, c, n, t);
          if (e.kind === `symbol-keys`)
            throw new db(`Cannot stringify POJOs with symbolic keys`, c, n, t);
          if (e.kind === `null-proto`) {
            m = `["null"`;
            for (let r of e.keys) {
              if (r === `__proto__`)
                throw new db(`Cannot stringify objects with __proto__ keys`, c, n, t);
              (c.push(qn(r)), (m += `,${Gn(r)},${u(i.get(n, r))}`), c.pop());
            }
            m += `]`;
          } else {
            m = `{`;
            let r = !1;
            for (let a of e.keys) {
              if (a === `__proto__`)
                throw new db(`Cannot stringify objects with __proto__ keys`, c, n, t);
              (r && (m += `,`),
                (r = !0),
                c.push(qn(a)),
                (m += `${Gn(a)}:${u(i.get(n, a))}`),
                c.pop());
            }
            m += `}`;
          }
        }
      }
    }
    return ((a[r] = m), r);
  }
  let d = u(t);
  return d < 0 ? `${d}` : a;
}
function ur(e) {
  let t = typeof e;
  return t === `string`
    ? Gn(e)
    : e === void 0
      ? `-1`
      : e === 0 && 1 / e < 0
        ? `-6`
        : t === `bigint`
          ? `["BigInt","${e}"]`
          : String(e);
}
function dr(e, t, n = `lazy`) {
  switch ((Mt.__framer_events?.push([e, t, n]), e)) {
    case `published_site_click`: {
      let { trackingId: e, href: n } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:click`, { detail: { trackingId: e, href: n } })
        );
      break;
    }
    case `published_site_form_submit`: {
      let { trackingId: e } = t;
      e &&
        document.dispatchEvent(new CustomEvent(`framer:formsubmit`, { detail: { trackingId: e } }));
      break;
    }
    case `published_site_pageview`: {
      let { framerLocale: e } = t;
      document.dispatchEvent(new CustomEvent(`framer:pageview`, { detail: { framerLocale: e } }));
      break;
    }
    case `published_site_trigger_invoke`: {
      let { trackingId: e } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:triggerinvoke`, { detail: { trackingId: e } })
        );
      break;
    }
  }
}
function fr(e) {
  return V(e) && (e === `` || wb.test(e));
}
function pr() {
  return {
    [Tb.QueryCache]: /* @__PURE__ */ new Map(),
    [Tb.CollectionUtilsCache]: /* @__PURE__ */ new Map(),
  };
}
function mr() {
  if (!Tt) return;
  if (Eb !== void 0) return Eb;
  let e = document.getElementById(`__framer__handoverData`);
  if (e) {
    try {
      Eb = or(e.text) ?? pr();
    } catch (e) {
      ((Eb = pr()), console.warn(`Failed to parse handover data. Falling back to network.`, e));
    }
    return (
      Ot(() => {
        (e?.remove(), (e = null));
      }),
      Eb
    );
  }
}
function hr(e, t) {
  if (
    (console.warn(
      lt(
        `Failed to resolve raw query result from DOM during hydration for: ${t}. This might make the page load slightly slower.`
      )
    ),
    Math.random() < 0.01)
  ) {
    let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
    dr(`published_site_load_error`, { message: String(e), stack: t });
  }
}
function gr(e, t) {
  let n = mr();
  return n ? n[e].has(t) : !1;
}
function _r(e, t) {
  let n = mr();
  if (!n) return;
  let r = n[e];
  if (!r.has(t)) return;
  let i = r.get(t);
  return (r.delete(t), i);
}
function vr(e) {
  return e?.id ?? `default`;
}
function yr(e, t, n, r) {
  return `${e}|${t}|${n}|${r}`;
}
function br(e) {
  return (t) => {
    if (!e) return;
    let n = e[t];
    if (!n) return;
    if (Ab.has(n)) return Ab.get(n);
    let r = new Mb(n, t);
    return (Ab.set(n, r), r);
  };
}
function xr({ children: e, collectionUtils: t }) {
  let n = S(() => ({ get: br(t) }), [t]);
  return /* @__PURE__ */ T(jb.Provider, { value: n, children: e });
}
function Sr() {
  return t(jb);
}
function Cr(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function wr() {
  return d === void 0 ? void 0 : d;
}
function Tr() {
  let e = wr();
  return e ? Nb.test(e.platform) : !1;
}
function Er() {
  let e = wr();
  return e
    ? Pb.test(e.platform)
      ? !0
      : Fb.test(e.platform) && e.maxTouchPoints != null && e.maxTouchPoints > 2
    : !1;
}
function Dr() {
  return Tr() || Er();
}
function Or() {
  let e = wr();
  return e ? Ib.test(e.userAgent) : !1;
}
function kr() {
  let e = wr();
  return e ? Lb.test(e.userAgent) && Rb.test(e.vendor) && !Or() : !1;
}
function Ar() {
  let e = wr();
  return e ? zb.test(e.userAgent) && Bb.test(e.vendor) : !1;
}
function jr() {
  let e = wr();
  return e ? Vb.test(e.userAgent) : !1;
}
function Mr() {
  return typeof document == `object`;
}
function Nr() {
  let e = wr();
  if (!e) return -1;
  let t = Hb.exec(e.userAgent);
  return t?.[1] ? parseFloat(t[1]) : -1;
}
function Pr() {
  let e = wr();
  return e ? Ub.test(e.userAgent) : !1;
}
function Fr() {
  return !1;
}
function Ir() {
  let e = wr();
  return e && Wb.test(e.userAgent) ? `tablet` : e && Gb.test(e.userAgent) ? `phone` : `desktop`;
}
function Lr() {
  return Ir() === `desktop`;
}
function Rr(e) {
  return Dr() ? e.metaKey : e.ctrlKey;
}
function zr() {}
async function Br() {}
function Vr(e) {
  return typeof e == `function` ? e() : e;
}
function Hr(e, t) {
  return Yb[e] > Yb[t];
}
function Ur() {
  if (typeof scheduler < `u`) return scheduler;
}
function Wr(e, t) {
  let n = e?.priority,
    r = Ur();
  return n === `background`
    ? (t?.() ?? Cr(1))
    : r?.yield
      ? r.yield(e).catch(zr)
      : r?.postTask
        ? r.postTask(zr, e).catch(zr)
        : t
          ? t()
          : n === `user-blocking`
            ? Xb
            : Cr(0);
}
function Gr(e, t, n) {
  let r = -1 / 0,
    i,
    a = /* @__PURE__ */ new Set();
  function o() {
    for (let e of a) e();
    a.clear();
  }
  function s() {
    return document.hidden ? (o(), !0) : !1;
  }
  function c() {
    Mr() && (document.addEventListener(`visibilitychange`, s), N.addEventListener(`pagehide`, o));
  }
  function l(n) {
    return new Promise((r) => {
      (setTimeout(r, Zb),
        e(() => {
          Wr(n, t).then(r);
        }));
    });
  }
  function u(e) {
    return Mr()
      ? new Promise((t) => {
          let n = !0,
            r = () => {
              n && ((n = !1), a.delete(r), t());
            };
          (a.add(r), s() || c(), e.then(r, r));
        })
      : e;
  }
  function d(e, n) {
    let { continueAfter: r, ensureContinueBeforeUnload: i, ...a } = e,
      o = (n ?? r === `paint`) ? l(a) : Wr(a, t);
    return i ? u(o) : o;
  }
  function f(e, t, n) {
    n && e.pendingPaintYieldCount++;
    let a = d(t, n),
      o = t.signal,
      s = !0,
      c = (t) => {
        s &&
          ((s = !1),
          o?.removeEventListener(`abort`, l),
          t && (r = performance.now()),
          n && e.pendingPaintYieldCount--,
          i === e && e.pendingPaintYieldCount === 0 && (i = void 0));
      },
      l = () => c(!1);
    return (
      o?.aborted ? l() : o?.addEventListener(`abort`, l, { once: !0 }),
      a.then(
        () => c(!0),
        () => c(!0)
      ),
      a
    );
  }
  function p(e, t) {
    let a = i;
    if (!a) {
      let n = performance.now(),
        o = t ?? (e.priority === `user-blocking` ? Kb : qb),
        s = Mr() && document.hidden ? Jb : o;
      if (n - r < s) return;
      ((a = { pendingPaintYieldCount: 0 }), (i = a));
    }
    let o = e.continueAfter === `paint` && (a.pendingPaintYieldCount > 0 || n?.() !== !1);
    return f(a, e, o);
  }
  function m(e) {
    let { batch: n, batchDuration: r, ...i } = e ?? {};
    return !Mr() && !t ? (n ? void 0 : Xb) : n ? p(i, r) : d(i);
  }
  return m;
}
function Kr(e, t = !1) {
  let n = ``;
  if (N !== void 0) {
    if (t) n = N.location.search;
    else {
      let e = N.history?.state?.queryParamBackAnchorSearch;
      n = e === void 0 ? N.location.search : e === `` ? `` : `?${e}`;
    }
  }
  return n ? qr(n, e) : e;
}
function qr(e, t) {
  let n = t.indexOf(`#`),
    r = n === -1 ? t : t.substring(0, n),
    i = n === -1 ? `` : t.substring(n),
    a = r.indexOf(`?`),
    o = a === -1 ? r : r.substring(0, a),
    s = a === -1 ? `` : r.substring(a),
    c = new URLSearchParams(s),
    l = new URLSearchParams(e);
  for (let [e, t] of l) c.has(e) || (e !== ex && c.append(e, t));
  let u = c.toString();
  return u === `` ? r + i : o + `?` + u + i;
}
async function Jr(e, t, n, r, i, a, o) {
  let s = e,
    c = !1,
    l = { ...a },
    u = Array.from(s.matchAll(tx)),
    d = await Promise.all(
      u.map(async (e) => {
        let s = e?.[0],
          u = e?.[1];
        if (!s || !u) throw Error(`Failed to replace path variables: unexpected regex match group`);
        let d = a[u];
        if (!d || !V(d)) throw Error(`No slug found for path variable ${u}`);
        let f = o?.get(i);
        if (!f || !t) return d;
        let p = f.getRecordIdBySlug(d, t),
          m = st(p) ? await p : p;
        if (!m) return d;
        let h = f.getSlugByRecordId(m, n),
          g = st(h) ? await h : h;
        if (!g) {
          c = !0;
          let e = f.getSlugByRecordId(m, r),
            t = st(e) ? await e : e;
          return (t && (l[u] = t), t ?? d);
        }
        return ((l[u] = g), g);
      })
    ),
    f = 0,
    p = ``,
    m = !1;
  for (let e = 0; e < u.length; e++) {
    let t = u[e],
      n = d[e];
    t &&
      n &&
      ((p += s.substring(f, t.index)),
      (f = (t.index ?? 0) + (t[0]?.length ?? 0)),
      (p += d[e]),
      (m = !0));
  }
  return (
    m && ((p += s.substring(f)), (s = p)),
    { path: s, pathVariables: l, isMissingInLocale: c }
  );
}
function Yr(e, t) {
  return t ? `/${t}${e}` : e;
}
async function Xr({
  currentLocale: e,
  nextLocale: t,
  defaultLocale: n,
  route: r,
  pathVariables: i,
  collectionUtils: a,
  preserveQueryParams: o,
}) {
  let { path: s, pathLocalized: c } = r,
    l = c?.[t.id] ?? s,
    u = { path: l, pathVariables: i, isMissingInLocale: !1 };
  if (!l) return u;
  if (i && r.collectionId)
    try {
      u = await Jr(l, e, t, n, r.collectionId, i, a);
    } catch {}
  return (
    u.path !== void 0 && (u.path = Yr(u.path, t.slug)),
    o && u.path && (u.path = Kr(u.path, !0)),
    u
  );
}
async function Zr({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r }) {
  let i = n?.collectionId;
  if (!i) return;
  let a = t?.get(i);
  if (!a || !r || !n?.path) return;
  let o = Array.from(n.path.matchAll(tx)).at(-1)?.[1];
  if (!o) return;
  let s = r[o];
  if (V(s)) return a.getRecordIdBySlug(s, e ?? void 0);
}
async function Qr({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r }) {
  if (!e || e.id === "default") return;
  let i = n?.collectionId;
  if (!i) return;
  let a = t?.get(i);
  if (!a?.getContentLocaleIdByRecordId) return;
  let o = await Zr({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r });
  if (o) return a.getContentLocaleIdByRecordId(o, e);
}
async function $r({
  activeLocale: e,
  defaultLocale: t,
  collectionUtilsCache: n,
  locales: r,
  pathVariables: i,
  route: a,
  routeId: o,
}) {
  if (!e || !a) return {};
  let s =
      (await Qr({ activeLocale: e, collectionUtils: n, currentRoute: a, pathVariables: i })) ??
      a.canonicalLocaleIdByLocaleId?.[e.id],
    c = s ? r.find(({ id: e }) => e === s) : void 0;
  if (!c || c.id === e.id) return { contentLocaleId: s };
  let { pathVariables: l } = await Xr({
    currentLocale: e,
    nextLocale: c,
    defaultLocale: t,
    route: a,
    routeId: o,
    pathVariables: i,
    collectionUtils: n,
    preserveQueryParams: !1,
  });
  return On(l ?? {}, i ?? {}, !1)
    ? { contentLocaleId: s }
    : { contentLocaleId: s, canonicalPathVariables: l };
}
function ei() {
  return j.useContext(ix);
}
function ti() {
  return ei().activeLocale?.code ?? `en-US`;
}
function ni() {
  return j.useContext(ax);
}
function ri() {
  let e = Sr(),
    { getRoute: t } = jn(),
    { activeLocale: n, locales: r } = ei();
  return l(
    (i, a, o) => {
      if (!i || !t) return;
      let s = t(i),
        { pathVariables: c } = a;
      return ai(
        s,
        {
          routeId: i,
          pathVariables: c,
          locale: a.locale ?? n ?? void 0,
          locales: r,
          collectionUtils: e,
        },
        o
      );
    },
    [t, e, n, r]
  );
}
function ii(e, t = !0) {
  let n = ri();
  M(() => {
    if (t && ox) for (let t of e) n(t, {});
  }, [e, t, n]);
}
async function ai(e, t, n = {}) {
  if (!ox || !e) return;
  let { priority: r = `background`, yieldBeforePreload: i = !0, shouldLoadRouteData: a = !0 } = n,
    o = e.page;
  if (!o || !mn(o)) return;
  let s = a && !!t;
  if (!o.getStatus().hasLoaded || s) {
    i && (await $b({ priority: r }));
    try {
      let n = await o.preload();
      s && t && n && (await oi(n, e, t, r));
    } catch {}
  }
}
async function oi(e, t, n, r) {
  let i = e.loader;
  if (!i?.load) return;
  let { canonicalPathVariables: a } = await $r({
      activeLocale: n.locale ?? null,
      defaultLocale: n.locales?.find((e) => e.id === ob),
      collectionUtilsCache: n.collectionUtils,
      locales: n.locales ?? [],
      pathVariables: n.pathVariables,
      route: t,
      routeId: n.routeId,
    }),
    o = {
      signal: n.signal ?? new AbortController().signal,
      pathVariables: n.pathVariables ?? {},
      canonicalPathVariables: a,
      routeId: n.routeId,
      locale: n.locale,
      priority: r,
      collectionUtils: n.collectionUtils,
    };
  try {
    await i.load({}, o);
  } catch {}
}
function si() {
  if (sx) return;
  sx = !0;
  let e = !1,
    t = () => {
      e = !0;
    };
  (N.addEventListener(`popstate`, t, { once: !0 }),
    queueMicrotask(() => {
      if ((N.removeEventListener(`popstate`, t), e)) {
        let e = `Popstate called synchronously during pushState(). Please report this to the Framer team.`;
        (console.error(e), dr(`published_site_load_recoverable_error`, { message: e }));
      }
    }));
}
function ci({ children: e, value: t }) {
  return /* @__PURE__ */ T(cx.Provider, { value: t, children: e });
}
function li() {
  return j.useContext(cx);
}
function ui(e, t, { global: n, routes: r }) {
  return r[e]?.[t] || n;
}
function di(e) {
  let t = lx,
    n = e.next(0),
    r = [n.value];
  for (; !n.done && t < ux;) ((n = e.next(t)), r.push(n.value), (t += lx));
  return (
    r.length === 1 && r.push(n.value),
    { easing: `linear(${r.join(`,`)})`, duration: t - lx }
  );
}
function fi(e) {
  return [parseFloat(e), e.endsWith(`px`) ? `px` : `%`];
}
function pi(e) {
  let { innerWidth: t, innerHeight: n } = N,
    [r, i] = fi(e.x),
    [a, o] = fi(e.y);
  return { x: i === `px` ? r : (r / 100) * t, y: o === `px` ? a : (a / 100) * n };
}
function mi(e) {
  let [t, n] = fi(e);
  return n === `px` ? `calc(100% - ${t}px)` : `${100 - t}%`;
}
function hi(e) {
  let { x: t, y: n } = pi(e);
  return Math.hypot(Math.max(t, N.innerWidth - t), Math.max(n, N.innerHeight - n));
}
function gi(e, t, n, r) {
  let i = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
  return (e.mask && (i += r?.makeKeyframe?.(e.mask, t, n) || ``), i);
}
function _i(e) {
  return e ? px[e] : void 0;
}
function vi(e, { transition: t, ...n }) {
  let r = `view-transition-` + e,
    i = { duration: `0s`, easing: `linear` };
  if (t.type === `tween`)
    ((i.duration = t.duration + `s`), (i.easing = `cubic-bezier(${t.ease.join(`,`)})`));
  else if (yi(t)) {
    let { easing: e, duration: n } = di(
      te({ keyframes: [0, 1], ...bi(t), restDelta: 0.001, restSpeed: 1e-4 })
    );
    ((i.duration = n + `ms`), (i.easing = e));
  }
  let a = _i(n?.mask?.type),
    o = gi(n, `start`, e, a),
    s = gi({ ...mx, mask: n.mask }, `end`, e, a);
  return (
    e === `exit` && ([o, s] = [s, o]),
    `
        ${n.mask && a?.makePropertyRules ? a.makePropertyRules(n.mask) : ``}

        @keyframes ${r} {
            0% {
                ${o}
            }

            100% {
                ${s}
            }
        }

        ::view-transition-${e === `enter` ? `new` : `old`}(root) {
            animation-name: ${r};
            animation-duration: ${i.duration};
            animation-delay: ${t.delay}s;
            animation-timing-function: ${i.easing};
            animation-fill-mode: both;
            ${n.mask && a?.makeStyles ? a.makeStyles(n.mask, e) : ``}
        }
    `
  );
}
function yi(e) {
  return e.type === `spring`;
}
function bi(e) {
  return e.durationBasedSpring
    ? { duration: e.duration * 1e3, bounce: e.bounce }
    : { stiffness: e.stiffness, damping: e.damping, mass: e.mass };
}
function xi({ exit: e = gx, enter: t }) {
  let n = document.createElement(`style`);
  n.id = hx;
  let r = `
        @media (prefers-reduced-motion) {
            ::view-transition-group(*),
            ::view-transition-old(*),
            ::view-transition-new(*) {
                animation: none !important;
            }
        }
    `;
  ((e.mask || t.mask || e.opacity || t.opacity || e.transition.delay || t.transition.delay) &&
    (r += `
            ::view-transition-old(*),
            ::view-transition-new(*) {
                mix-blend-mode: normal;
            }
        `),
    (r += `
        ::view-transition-old(*),
        ::view-transition-new(*) {
            backface-visibility: hidden;
        }
    `),
    (r += vi(`exit`, e)),
    (r += vi(`enter`, t)),
    (n.textContent = r),
    document.head.appendChild(n));
}
function Si() {
  Ot(() => {
    Ge.render(() => {
      performance.mark(`framer-vt-remove`);
      let e = document.getElementById(hx);
      e && document.head.removeChild(e);
    });
  });
}
function Ci() {
  return !!document.startViewTransition;
}
function wi(e) {
  return new Promise((t) => {
    Ge.render(() => {
      (performance.mark(`framer-vt-style`), xi(e), t());
    });
  });
}
async function Ti(e, t, n) {
  if (!Ci()) {
    e();
    return;
  }
  if ((await wi(t), n?.aborted)) return;
  performance.mark(`framer-vt`);
  let r = document.startViewTransition(async () => {
    (performance.mark(`framer-vt-freeze`),
      !n?.aborted && (n?.addEventListener(`abort`, () => r.skipTransition()), await e()));
  });
  return (
    r.updateCallbackDone
      .then(() => {
        performance.mark(`framer-vt-unfreeze`);
      })
      .catch(_x),
    Promise.all([r.ready, r.finished])
      .then(() => {
        (performance.mark(`framer-vt-finished`), Si());
      })
      .catch(_x),
    r
  );
}
function Ei() {
  let e = li(),
    t = g(void 0);
  return (
    M(() => {
      t.current &&= (t.current(), void 0);
    }),
    l(
      (n, r, i, a) => {
        let o = ui(n, r, e);
        if (o) {
          let e = new Promise((e) => {
            t.current = e;
          });
          return Ti(
            async () => {
              (i(), await e);
            },
            o,
            a
          );
        }
        i();
      },
      [e]
    )
  );
}
function Di(e, t) {
  Ot(() => {
    let n = document.querySelector(`link[rel='canonical']`);
    if (!n) return;
    let r = new URL(e, t);
    ((r.search = ``), n.setAttribute(`href`, r.toString()));
  });
}
function Oi(e, t) {
  Ot(() => {
    let n = document.querySelector(`link[rel='canonical'][data-framer-generated-canonical]`);
    if (
      !e ||
      document.querySelector(`link[rel='canonical']:not([data-framer-generated-canonical])`)
    ) {
      n?.remove();
      return;
    }
    let r = new URL(e, t ?? document.baseURI);
    ((r.search = ``), (r.hash = ``));
    let i = n ?? document.createElement(`link`);
    (i.setAttribute(`rel`, `canonical`),
      i.setAttribute(`data-framer-generated-canonical`, ``),
      i.setAttribute(`href`, r.toString()),
      document.head.append(i));
  });
}
function ki(e) {
  Ot(() => {
    let t = Array.from(
      document.querySelectorAll(`link[rel='alternate'][hreflang][data-framer-generated-hreflang]`)
    );
    if (document.querySelector(`link[rel='canonical']:not([data-framer-generated-canonical])`)) {
      for (let e of t) e.remove();
      return;
    }
    let n = /* @__PURE__ */ new Map();
    for (let e of t) {
      let t = e.getAttribute(`hreflang`);
      t && n.set(t, e);
    }
    let r = /* @__PURE__ */ new Set();
    for (let { href: t, hrefLang: i } of e) {
      r.add(i);
      let e = n.get(i) ?? document.createElement(`link`);
      (e.setAttribute(`rel`, `alternate`),
        e.setAttribute(`data-framer-generated-hreflang`, ``),
        e.setAttribute(`href`, t),
        e.setAttribute(`hreflang`, i),
        document.head.append(e));
    }
    for (let e of t) {
      let t = e.getAttribute(`hreflang`);
      (!t || !r.has(t)) && e.remove();
    }
  });
}
//! Credit to Astro | MIT License
function Ai(e, t, n, r = i) {
  r(() => {
    let t = async (e) => (await $b({ ...n, continueAfter: `paint` }), e()),
      r = t(e);
    return () => {
      (async () => {
        let e = await r;
        e && t(e);
      })();
    };
  }, t);
}
function ji(e) {
  let t = g(/* @__PURE__ */ new Set());
  return (
    Ai(
      () => {
        for (let e of t.current) e();
        t.current.clear();
      },
      void 0,
      { priority: `user-blocking` }
    ),
    l(
      (n) => {
        let r,
          i = new Promise((e) => {
            ((r = e), t.current.add(e));
          });
        if (!e) return { promise: i, measureDetail: n, ignore: null };
        let a = `${e}-start`,
          o = `${e}-end`,
          s = !1;
        return (
          performance.mark(a),
          i
            .finally(() => {
              s || (performance.mark(o), performance.measure(e, { start: a, end: o, detail: n }));
            })
            .catch((e) => {
              console.error(e);
            }),
          {
            promise: i,
            measureDetail: n,
            ignore: () => {
              ((s = !0), r && (t.current.delete(r), r()));
            },
          }
        );
      },
      [e]
    )
  );
}
function Mi(e) {
  return U(e) && `routeId` in e;
}
function Ni(e = N.history.state) {
  return Mi(e) ? e : void 0;
}
function Pi(e) {
  return e?.entryId;
}
function Fi(e) {
  bx = e;
}
function Ii() {
  return bx;
}
function Li() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}
function Ri(e, t) {
  return zi(e, Pi(e) ?? Pi(t));
}
function zi(e, t = Li()) {
  return { ...e, entryId: t };
}
function Bi(e, t) {
  (performance.mark(`framer-history-replace`), Fi(Ri(e, Ni())), t && Di(t, N.location.href));
  let n =
    !t || t === N.location.href
      ? N.History.prototype.replaceState.bind(N.history)
      : N.history.replaceState.bind(N.history);
  try {
    n(bx, ``, t);
  } catch {}
}
function Vi(e) {
  (performance.mark(`framer-history-replace`),
    Fi(zi(e)),
    History.prototype.replaceState.call(N.history, bx, ``, void 0));
}
function Hi(e, t) {
  (performance.mark(`framer-history-push`), Fi(zi(e)), Di(t, N.location.href), si());
  try {
    N.history.pushState(bx, ``, t);
  } catch {}
}
function Ui({
  disabled: e,
  routeId: t,
  initialPathVariables: n,
  initialLocaleId: r,
  initialContentLocaleId: a,
  initialCanonicalPathVariables: o,
}) {
  i(() => {
    if (e) return;
    performance.mark(`framer-history-set-initial-state`);
    let i = N.location.hash ? N.location.hash.slice(1) : void 0;
    Bi({
      ...Ni(),
      routeId: t,
      hash: i,
      pathVariables: n,
      localeId: r,
      contentLocaleId: a,
      canonicalPathVariables: o,
    });
  }, []);
}
function Wi(e, t, n) {
  let r = Ei(),
    i = ji(`framer-route-change`),
    { onHistoryTraversal: a, usesCustomScrollRestoration: o } = e,
    s = o ? `manual` : `after-transition`,
    c = g(void 0),
    u = l(() => {
      (c.current?.resolve(), (c.current = void 0));
    }, []),
    d = l(
      async ({ state: e }) => {
        if (!Mi(e)) return;
        let o = i({ popstate: !0 }),
          c = Rn();
        (o.promise.finally(c), Pi(Ii()) !== (Pi(e) ?? Pi(Ni())) && a(), Fi(e));
        let {
            routeId: l,
            hash: d,
            pathVariables: f,
            localeId: p,
            contentLocaleId: m,
            canonicalPathVariables: h,
          } = e,
          g = V(d) ? d : N.location.hash ? N.location.hash.slice(1) : void 0,
          _ = !1,
          v = () => {
            _ ||=
              (n(
                l,
                V(p) ? p : void 0,
                g,
                N.location.pathname + N.location.search + N.location.hash,
                U(f) ? f : void 0,
                m,
                h,
                !0,
                o,
                !1
              ),
              !0);
          },
          y = s === `after-transition`;
        (await Promise.resolve(r(t.current, l, v))
          .then((e) => e?.updateCallbackDone)
          .catch(v)
          .finally(() => {
            y || u();
          }),
          await o.promise,
          y && u(),
          await N.navigation?.transition?.finished.catch(wt),
          yx(),
          Di(N.location.href));
      },
      [t, i, a, u, n, r, s]
    ),
    f = l(
      (e) => {
        if (e.navigationType !== `traverse` || !e.canIntercept) return;
        let t = e.destination?.getState();
        Mi(t) &&
          e.intercept({
            async handler() {
              (await new Promise((e, t) => {
                c.current = { resolve: e, reject: t };
              }),
                (c.current = void 0));
            },
            scroll: s,
          });
      },
      [s]
    );
  M(
    () => (
      N.addEventListener(`popstate`, d),
      xx && N.navigation.addEventListener(`navigate`, f),
      () => {
        (N.removeEventListener(`popstate`, d),
          xx && N.navigation.removeEventListener(`navigate`, f));
      }
    ),
    [d, f]
  );
}
async function Gi(e) {
  return (
    (await fetch(e, { method: `HEAD`, redirect: `manual` })).type === `opaqueredirect` &&
    ((N.location.href = N.location.origin + e), !0)
  );
}
function Ki() {
  let e = Sr();
  return l((t) => qi({ ...t, collectionUtils: e }), [e]);
}
async function qi({ sitePrefix: e, ...t }) {
  let n = await Xr(t);
  if (n) {
    try {
      localStorage.preferredLocale = t.nextLocale.code;
    } catch {}
    try {
      if (!V(n.path)) throw Error(`Expected result.path to be a string`);
      if (
        (n.isMissingInLocale ||
          (t.route.includedLocales && !t.route.includedLocales.includes(t.nextLocale.id))) &&
        (await Gi(e + n.path))
      )
        return;
    } catch {}
    return n;
  }
}
function Ji(e) {
  let t = g(Promise.resolve()),
    n = g(),
    r = l(
      (r) => {
        if (r.navigationType === `traverse` || !r.canIntercept) return;
        let i = n.current;
        (i?.signal.addEventListener(`abort`, () => {
          i.abort(`user aborted`);
        }),
          r.intercept({ handler: () => t.current, scroll: e ? `manual` : `after-transition` }));
      },
      [e]
    );
  return l(
    (e, i, a) => {
      xx
        ? ((t.current = e),
          (n.current = i),
          N.navigation.addEventListener(`navigate`, r),
          a?.(),
          e.finally(() => {
            t.current === e &&
              ((n.current = void 0), N.navigation.removeEventListener(`navigate`, r));
          }))
        : a?.();
    },
    [r]
  );
}
function Yi(e) {
  let t = 0,
    n = e.length;
  for (; t < n && e[t] === `-`;) t++;
  for (; n > t && e[n - 1] === `-`;) n--;
  return e.slice(t, n);
}
function Xi(e) {
  return Yi(e.trim().toLowerCase().replace(Sx, `-`));
}
function Zi({ children: e, value: t }) {
  return /* @__PURE__ */ T(wx.Provider, { value: t, children: e });
}
function Qi() {
  return t(wx);
}
function $i(e, t) {
  let n = m(() => ({ inputs: t, result: e() }))[0],
    r = g(!0),
    i = g(n),
    a =
      r.current || (t && i.current.inputs && On(t, i.current.inputs, !1))
        ? i.current
        : { inputs: t, result: e() };
  return (
    M(() => {
      ((r.current = !1), (i.current = a));
    }, [a]),
    a.result
  );
}
function ea(e, t) {
  return $i(() => e, t);
}
function ta() {
  return N.location.search;
}
function na() {
  return ``;
}
function ra(e) {
  return (
    Ex.add(e),
    N.addEventListener(`popstate`, e),
    () => {
      (Ex.delete(e), N.removeEventListener(`popstate`, e));
    }
  );
}
function ia() {
  for (let e of Ex) e();
}
function aa({ children: e, routerRenderKey: t, isNavigationCommitPending: n }) {
  let i = Qi() === `preview`,
    [a, o] = m(``),
    s = g(t);
  Tx(() => {
    s.current = t;
  }, [t]);
  let u = r(ra, ta, na),
    d = k(u),
    f = t !== k(t),
    p = i ? a : f ? u : d,
    h = l(
      async (e) => {
        if (i) {
          c(() => {
            o((t) => e(new URLSearchParams(t)).toString());
          });
          return;
        }
        let r = n(),
          a = t;
        if ((await $b({ continueAfter: `paint` }), r || n() || s.current !== a)) return;
        let l = Ni();
        if (!l) return;
        let u = new URL(N.location.href),
          d = e(u.searchParams).toString();
        u.search = d;
        let f = l.queryParamBackAnchorSearch,
          p = N.location.search.slice(1),
          m = f === void 0 && d !== p,
          h = f !== void 0 && d === f,
          g = { ...l, queryParamBackAnchorSearch: h ? void 0 : (f ?? (m ? p : void 0)) },
          _ = u.toString();
        (m || h ? Hi(g, _) : Bi(g, _), ia());
      },
      [n, i, t]
    ),
    _ = $i(() => ({ urlSearchParams: new URLSearchParams(p), replaceSearchParams: h }), [p, h]);
  return /* @__PURE__ */ T(Dx.Provider, { value: _, children: e });
}
function oa(e, t) {
  if (!e.startsWith(`/`) || !t.startsWith(`/`))
    throw Error(`from/to paths are expected to be absolute`);
  let [n] = sa(e),
    [r, i] = sa(t),
    a = ca(n, r);
  return (
    a === `` && (a = `.`),
    !a.startsWith(`.`) && !a.startsWith(`/`) && (a = `./` + a),
    a + `/` + i
  );
}
function sa(e) {
  let t = e.lastIndexOf(`/`);
  return [e.substring(0, t + 1), e.substring(t + 1)];
}
function ca(e, t) {
  if (e === t || ((e = `/` + la(e)), (t = `/` + la(t)), e === t)) return ``;
  let n = e.length,
    r = n - 1,
    i = t.length - 1,
    a = r < i ? r : i,
    o = -1,
    s = 0;
  for (; s < a; s++) {
    let n = Ax(e, 1 + s);
    if (n !== Ax(t, 1 + s)) break;
    n === kx && (o = s);
  }
  if (s === a) {
    if (i > a) {
      if (Ax(t, 1 + s) === kx) return Mx(t, 1 + s + 1);
      if (s === 0) return Mx(t, 1 + s);
    } else r > a && (Ax(e, 1 + s) === kx ? (o = s) : s === 0 && (o = 0));
  }
  let c = ``;
  for (s = 1 + o + 1; s <= n; ++s)
    (s === n || Ax(e, s) === kx) && (c += c.length === 0 ? `..` : `/..`);
  return `${c}${Mx(t, 1 + o)}`;
}
function la(e) {
  let t = ``,
    n = 0,
    r = -1,
    i = 0,
    a = 0;
  for (let o = 0; o <= e.length; ++o) {
    if (o < e.length) a = Ax(e, o);
    else if (Px(a)) break;
    else a = kx;
    if (Px(a)) {
      if (r !== o - 1 && i !== 1) {
        if (i === 2) {
          if (t.length < 2 || n !== 2 || Ax(t, t.length - 1) !== Ox || Ax(t, t.length - 2) !== Ox) {
            if (t.length > 2) {
              let e = jx(t, Nx);
              (e === -1 ? ((t = ``), (n = 0)) : ((t = Mx(t, 0, e)), (n = t.length - 1 - jx(t, Nx))),
                (r = o),
                (i = 0));
              continue;
            }
            if (t.length !== 0) {
              ((t = ``), (n = 0), (r = o), (i = 0));
              continue;
            }
          }
        } else
          (t.length > 0 ? (t += `${Nx}${Mx(e, r + 1, o)}`) : (t = Mx(e, r + 1, o)),
            (n = o - r - 1));
      }
      ((r = o), (i = 0));
    } else a === Ox && i !== -1 ? ++i : (i = -1);
  }
  return t;
}
function ua(e) {
  if (!e) return ``;
  let t;
  try {
    t = new URL(e);
  } catch {
    return ``;
  }
  return t.pathname === `/` || N.location.origin !== t.origin
    ? ``
    : t.pathname.endsWith(`/`)
      ? t.pathname.slice(0, -1)
      : t.pathname;
}
function da(e, t) {
  let n = e.replace(tx, (e, n) => t[n] ?? e);
  if (!n.includes(`:`)) return n;
}
function fa(e, t, n) {
  let r = Object.assign({}, t.elements, n);
  if (e.startsWith(`:`)) {
    let n = e.slice(1),
      i = t.elementPatterns?.[n];
    if (i) return da(i, r);
  }
  if (e.includes(`:`)) return da(e, r);
  let i = t.elements?.[e];
  return i ? da(i, r) : e;
}
function pa(
  e,
  {
    currentRoutePath: t,
    currentRoutePathLocalized: n,
    currentPathVariables: r,
    hash: i,
    pathVariables: a,
    hashVariables: o,
    relative: s = !0,
    preserveQueryParams: c,
    onlyHash: l = !1,
    siteCanonicalURL: u,
    localeId: d,
    localeSlug: f,
  }
) {
  let p;
  if ((i && e && (p = fa(i, e, o)), l)) return p ?? ``;
  let m = t ?? `/`;
  (n && d && (m = n[d] ?? m), r && (m = m.replace(tx, (e, t) => String(r[t] || e))));
  let h = (d ? e?.pathLocalized?.[d] : void 0) ?? e?.path ?? `/`;
  a && (h = h.replace(tx, (e, t) => String(a[t] || e)));
  let g = !!(m === h && p),
    _ = !g && a !== void 0 && t !== void 0 && e?.path !== void 0 && t === e.path && m !== h;
  if (s) {
    if (Fx.has(m) && N !== void 0) {
      let e = ua(u);
      h = oa(N.location.pathname, e + h);
    } else h = oa(m, h);
  } else h = Yr(h, f);
  let v = g || _;
  return ((c || v) && (h = Kr(h, v)), p && (h = `${h}#${p}`), h);
}
function ma(e, t) {
  let n = document.currentScript?.parentElement;
  n &&
    n.addEventListener(`submit`, (r) => {
      n.hasAttribute(e) || (r.preventDefault(), n.setAttribute(t, ``));
    });
}
function ha() {
  return `(${ma.toString()})("${Rx}","${zx}")`;
}
function ga(e, t) {
  M(() => {
    let n = e.current;
    if (!n || (n.setAttribute(Rx, ``), !n.hasAttribute(zx))) return;
    n.removeAttribute(zx);
    let r = !1;
    return (
      queueMicrotask(() => {
        r || (n.reportValidity() && t(n));
      }),
      () => {
        r = !0;
      }
    );
  }, []);
}
function _a() {
  let e = new Event(`change`, { bubbles: !0 });
  return ((e[Ix] = 1), e);
}
function va() {
  let e = new MouseEvent(`click`, { bubbles: !0 });
  return ((e[Ix] = 1), e);
}
function ya(e) {
  return e instanceof HTMLInputElement && (e.type === `checkbox` || e.type === `radio`)
    ? `checked`
    : `value`;
}
function ba(e) {
  return Ix in e && e[Ix] === 1;
}
function xa(e) {
  return Lx in e.nativeEvent && e.nativeEvent[Lx] === 1;
}
function Sa(e) {
  let t = g(!1),
    n = g(null),
    i = r(kt, jt, Bx);
  return (
    M(() => {
      if (!i) return;
      let r = n.current;
      if (t.current || !r) return;
      t.current = !0;
      let a = ya(r),
        o = r[a];
      if (o === (a === `checked` ? !!e : e)) return;
      if (r.type === `radio` && o === !0) {
        ((r.checked = !1), r.dispatchEvent(va()));
        return;
      }
      if (a === `checked`) {
        let e = va();
        ((e[Lx] = 1), r.dispatchEvent(e), r.dispatchEvent(va()));
        return;
      }
      if (r.nodeName === `SELECT`) {
        r.dispatchEvent(_a());
        return;
      }
      let s = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(r), a)?.set;
      if (!s) return;
      s.call(r, ``);
      let c = _a();
      ((c[Lx] = 1),
        r.dispatchEvent(c),
        queueMicrotask(() => {
          (s.call(r, o), r.dispatchEvent(_a()));
        }));
    }, [i]),
    n
  );
}
function Ca() {
  if (!Vx) return;
  ((Ux = !0), performance.mark(`framer-react-event-handling-start`));
  let e = { capture: !0 },
    t = document.body;
  Vx.forEach((n) => t.addEventListener(n, Hx, e));
}
function wa() {
  return (
    M(() => {
      if (!Ux || !Vx) return;
      let e = { capture: !0 },
        t = document.body;
      (Vx.forEach((n) => t.removeEventListener(n, Hx, e)),
        (Vx = void 0),
        performance.mark(`framer-react-event-handling-end`));
    }, []),
    null
  );
}
function Ta(e) {
  let t = !1;
  return function (...n) {
    if (!t) return ((t = !0), e.apply(this, n));
  };
}
function Ea(e, t, n) {
  try {
    performance.measure(e, t, n);
  } catch (t) {
    console.warn(`Could not measure ${e}`, t);
  }
}
function Da() {
  ((Gx = new Wx()), Gx.render.markStart());
}
function Oa() {
  (s(() => {
    Gx?.useInsertionEffects.markRouterStart();
  }, []),
    i(() => {
      Gx?.useLayoutEffects.markRouterStart();
    }, []),
    M(() => {
      Gx?.useEffects.markRouterStart();
    }, []));
}
function ka() {
  (s(() => {
    (Gx?.render.markEnd(), Gx?.useInsertionEffects.markStart());
  }, []),
    i(() => {
      (Gx?.useLayoutEffects.markStart(),
        document.visibilityState === `visible`
          ? Ge.read(() => {
              (Gx?.browserRendering.requestAnimationFrame.markStart(),
                Gx?.unattributedHydrationOverhead.measure());
            })
          : (Kx = !0));
    }, []),
    M(() => {
      (Gx?.useEffects.markStart(),
        Gx?.browserRendering.hasStarted ||
          (Gx?.mutationEffects.measure(), Gx?.useEffects.markAreSynchronous()));
    }, []));
}
function Aa() {
  (s(() => {
    Gx?.useInsertionEffects.markEnd();
  }, []),
    i(() => {
      (Gx?.useLayoutEffects.markEnd(),
        !(Kx || document.visibilityState !== `visible`) &&
          Ge.read(() => {
            (Gx?.browserRendering.requestAnimationFrame.markEnd(),
              $b().then(() => {
                Gx?.browserRendering.layoutStylePaint.markEnd();
              }));
          }));
    }, []),
    M(() => {
      Gx?.useEffects.markEnd();
    }, []));
}
function ja() {
  return (ka(), null);
}
function Ma() {
  return (Aa(), null);
}
function Na(e, t) {
  let n = { style: t, "data-framer-root": `` };
  return j.isValidElement(e) ? j.cloneElement(e, n) : /* @__PURE__ */ T(e, { ...n });
}
function Pa() {
  return Xx;
}
function Fa(e) {
  if (Zx?.lastRoutes !== e) {
    let t = {},
      n = {},
      r = [],
      i = {},
      a = e;
    for (let r in e) {
      let i = e[r];
      W(i, `route must be defined`);
      let { path: a, pathLocalized: o } = i;
      if (a && ((t[a] = { path: a, depth: Ra(a), routeId: r }), o))
        for (let e in o) {
          let t = o[e];
          W(t, `localizedPath must be defined`);
          let i = Ra(t),
            a = (n[e] ||= {});
          a[t] = { path: t, depth: i, routeId: r };
        }
    }
    ((r = Object.values(t)), r.sort(({ depth: e }, { depth: t }) => t - e));
    for (let e in n) {
      let t = n[e];
      if (!t) continue;
      let r = Object.values(t);
      (r.sort(({ depth: e }, { depth: t }) => t - e), (i[e] = r));
    }
    Zx = { pathRoutes: t, pathRoutesLocalized: n, paths: r, pathsLocalized: i, lastRoutes: a };
  }
  return {
    pathRoutes: Zx.pathRoutes,
    paths: Zx.paths,
    pathRoutesLocalized: Zx.pathRoutesLocalized,
    pathsLocalized: Zx.pathsLocalized,
  };
}
function Ia(e, t, n = !0, r = Pa()) {
  return La(e, t, r, n);
}
function La(e, t, n, r = !0) {
  let { pathRoutes: i, paths: a, pathRoutesLocalized: o, pathsLocalized: s } = Fa(e),
    c,
    l,
    u = !1;
  if (n.length > 0) {
    let e = t.split(`/`).find(Boolean);
    if (
      (e &&
        ((c = n.find(({ slug: t }) => t === e)),
        c && ((l = c.id), (t = t.substring(c.slug.length + 1)), (u = !0))),
      !l)
    ) {
      let e = n.find(({ slug: e }) => e === ``);
      e && (l = e.id);
    }
  }
  if (l && u) {
    let e = o[l],
      n = e ? e[t] : void 0;
    if (n) {
      let e = za(t, n.path);
      if (e.isMatch) return { routeId: n.routeId, localeId: l, pathVariables: e.pathVariables };
    }
  }
  let d = i[t];
  if (d) {
    let e = za(t, d.path);
    if (e.isMatch) return { routeId: d.routeId, localeId: l, pathVariables: e.pathVariables };
  }
  if (l && u) {
    let e = s[l];
    if (e)
      for (let { path: n, routeId: r } of e) {
        let e = za(t, n);
        if (e.isMatch) return { routeId: r, localeId: l, pathVariables: e.pathVariables };
      }
  }
  for (let { path: e, routeId: n } of a) {
    let r = za(t, e);
    if (r.isMatch) return { routeId: n, localeId: l, pathVariables: r.pathVariables };
  }
  if (!r) throw Error(`No exact match found for path`);
  let f = i[`/`];
  if (f) return { routeId: f.routeId, localeId: l };
  let p = Object.keys(e)[0];
  if (!p) throw Error(`Router should not have undefined routes`);
  return { routeId: p, localeId: l };
}
function Ra(e) {
  let t = e.replace(/^\/|\/$/gu, ``);
  return t === `` ? 0 : t.split(`/`).length;
}
function za(e, t) {
  let n = [],
    r = Ba(t).replace(tx, (e, t) => (n.push(t), `([^/]+)`)),
    i = RegExp(r + `$`),
    a = e.match(i);
  if (!a) return { isMatch: !1 };
  if (a.length === 1) return { isMatch: !0 };
  let o = {},
    s = a.slice(1);
  for (let e = 0; e < n.length; ++e) {
    let t = n[e];
    if (t === void 0) continue;
    let r = s[e],
      i = o[t];
    if (i) {
      if (i !== r) return { isMatch: !1 };
    } else {
      if (r === void 0) throw Error(`Path variable values cannot be undefined`);
      o[t] = r;
    }
  }
  return { isMatch: !0, pathVariables: o };
}
function Ba(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/gu, `\\$&`).replace(/-/gu, `\\x2d`);
}
function Va(e) {
  return e.startsWith(`"`) && e.endsWith(`"`) ? e.slice(1, -1) : e;
}
function Ha(e) {
  let t = /* @__PURE__ */ new Map();
  if (!e) return t;
  for (let n of e.split(`,`)) {
    let [e, ...r] = n.split(`;`),
      i = e?.trim().toLowerCase();
    if (!i) continue;
    let a = ``;
    for (let e of r) {
      let t = e.indexOf(`=`);
      t !== -1 && e.slice(0, t).trim().toLowerCase() === `desc` && (a = Va(e.slice(t + 1).trim()));
    }
    t.set(i, a);
  }
  return t;
}
function Ua(e, t) {
  let n = e.toLowerCase(),
    r = Ha(t).get(n);
  if (r !== void 0) return { name: n, description: r };
}
function Wa(e) {
  if (N === void 0 || typeof performance > `u` || !(`PerformanceServerTiming` in N)) return;
  let t = performance.getEntriesByType(`navigation`)[0]?.serverTiming;
  if (!t || t.length === 0) return;
  let n = t.find((t) => t.name === e);
  if (n) return { name: n.name, description: n.description };
}
function Ga() {
  let e = Wa(`abtests`);
  return new URLSearchParams(e?.description);
}
function Ka(e, t, n) {
  let r = e[n];
  if (!r) return;
  let i = r.abTestingParentId ?? n,
    a = e[i];
  if (!a) return;
  let { abTestingParentId: o, ...s } = r,
    c = a.elements || r.elements ? { ...a.elements, ...r.elements } : void 0;
  e[i] = {
    ...s,
    includedLocales: a.includedLocales,
    elements: c,
    abTestingVariantId: n,
    abTestId: t,
  };
}
function qa(e, t) {
  for (let [n, r] of t) Ka(e, n, r);
}
function Ja(e) {
  for (let t in e) e[t]?.abTestingParentId && delete e[t];
}
function Ya(e, t) {
  if (!e[t] || !e[t].abTestingParentId) return;
  let n = e[t].abTestingParentId,
    r = e[n],
    { abTestingParentId: i, ...a } = e[t],
    o = r?.elements || a.elements ? { ...r?.elements, ...a.elements } : void 0;
  e[n] = { ...a, includedLocales: r?.includedLocales, elements: o, abTestingVariantId: t };
}
function Xa(e, t) {
  if (N === void 0) return t;
  let n = t;
  if (t) {
    Ya(e, t);
    let r = e[t]?.abTestingParentId;
    r && (n = r);
  }
  return (qa(e, Ga()), Ja(e), n);
}
function Za(e) {
  (M(() => {
    if (e.robots) {
      let t = document.querySelector(`meta[name="robots"]`);
      t
        ? t.setAttribute(`content`, e.robots)
        : ((t = document.createElement(`meta`)),
          t.setAttribute(`name`, `robots`),
          t.setAttribute(`content`, e.robots),
          document.head.appendChild(t));
    }
  }, [e.robots]),
    s(() => {
      ((document.title = e.title || ``),
        e.viewport &&
          document.querySelector(`meta[name="viewport"]`)?.setAttribute(`content`, e.viewport));
    }, [e.title, e.viewport]));
}
function Qa(e, ...t) {
  Qx.has(e) || (Qx.add(e), console.warn(e, ...t));
}
function $a(e, t, n) {
  Qa(`Deprecation warning: ${e} will be removed in version ${t}${n ? `, use ${n} instead` : ``}.`);
}
function eo(e) {
  return (
    typeof e == `object` &&
    !!e &&
    tS in e &&
    e[tS] instanceof Function &&
    nS in e &&
    e[nS] instanceof Function
  );
}
function to(e, t) {
  return {
    interpolate(e, n) {
      let r = e.get(),
        i = n.get(),
        a = eS(r);
      return (e) => {
        let n = t.interpolate(r, i)(e);
        return (a.set(n), a);
      };
    },
    difference(e, n) {
      let r = e.get();
      return t.difference(r, n.get());
    },
  };
}
function no(e, t) {
  let n = 10 ** Math.round(Math.abs(t));
  return Math.round(e * n) / n;
}
function ro(e, t) {
  return t === 0 ? Math.round(e) : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function io(e) {
  return Math.round(e * 2) / 2;
}
function ao(e, t) {
  return { x: e, y: t };
}
function oo(e, t, n, r = !1) {
  let [i, a] = t,
    [o, s] = n,
    c = a - i;
  if (c === 0) return (s + o) / 2;
  let l = s - o;
  if (l === 0) return o;
  let u = o + ((e - i) / c) * l;
  if (r === !0) {
    if (o < s) {
      if (u < o) return o;
      if (u > s) return s;
    } else {
      if (u > o) return o;
      if (u < s) return s;
    }
  }
  return u;
}
function so(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function co(e) {
  let t = lo(e);
  return t === void 0 ? 0 : e.includes(`%`) ? t / 100 : t;
}
function lo(e) {
  let t = /\d?\.?\d+/u.exec(e);
  return t ? Number(t[0]) : void 0;
}
function uo(e, t, n) {
  return (
    (oS.rgb_r = e / 255),
    (oS.rgb_g = t / 255),
    (oS.rgb_b = n / 255),
    oS.rgbToHsluv(),
    { h: oS.hsluv_h, s: oS.hsluv_s, l: oS.hsluv_l }
  );
}
function fo(e, t, n, r = 1) {
  return (
    (oS.hsluv_h = e),
    (oS.hsluv_s = t),
    (oS.hsluv_l = n),
    oS.hsluvToRgb(),
    { r: oS.rgb_r * 255, g: oS.rgb_g * 255, b: oS.rgb_b * 255, a: r }
  );
}
function po(e, t, n, r) {
  let i = Math.round(e),
    a = Math.round(t * 100),
    o = Math.round(n * 100);
  return r === void 0 || r === 1
    ? `hsv(` + i + `, ` + a + `%, ` + o + `%)`
    : `hsva(` + i + `, ` + a + `%, ` + o + `%, ` + r + `)`;
}
function mo(e, t, n) {
  return {
    r: so(e) ? xo(e, 255) * 255 : 0,
    g: so(t) ? xo(t, 255) * 255 : 0,
    b: so(n) ? xo(n, 255) * 255 : 0,
  };
}
function ho(e, t, n, r) {
  let i = [
    wo(Math.round(e).toString(16)),
    wo(Math.round(t).toString(16)),
    wo(Math.round(n).toString(16)),
  ];
  return r &&
    i[0].charAt(0) === i[0].charAt(1) &&
    i[1].charAt(0) === i[1].charAt(1) &&
    i[2].charAt(0) === i[2].charAt(1)
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join(``);
}
function go(e, t, n) {
  let r,
    i,
    a = xo(e, 255),
    o = xo(t, 255),
    s = xo(n, 255),
    c = Math.max(a, o, s),
    l = Math.min(a, o, s),
    u = (i = r = (c + l) / 2);
  if (c === l) u = i = 0;
  else {
    let e = c - l;
    switch (((i = r > 0.5 ? e / (2 - c - l) : e / (c + l)), c)) {
      case a:
        u = (o - s) / e + (o < s ? 6 : 0);
        break;
      case o:
        u = (s - a) / e + 2;
        break;
      case s:
        u = (a - o) / e + 4;
    }
    u /= 6;
  }
  return { h: u * 360, s: i, l: r };
}
function _o(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function vo(e, t, n) {
  let r, i, a;
  if (((e = xo(e, 360)), (t = xo(t * 100, 100)), (n = xo(n * 100, 100)), t === 0)) r = i = a = n;
  else {
    let o = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - o;
    ((r = _o(s, o, e + 1 / 3)), (i = _o(s, o, e)), (a = _o(s, o, e - 1 / 3)));
  }
  return { r: r * 255, g: i * 255, b: a * 255 };
}
function yo(e, t, n) {
  ((e = xo(e, 255)), (t = xo(t, 255)), (n = xo(n, 255)));
  let r = Math.max(e, t, n),
    i = Math.min(e, t, n),
    a = r - i,
    o = 0,
    s = r === 0 ? 0 : a / r,
    c = r;
  if (r === i) o = 0;
  else {
    switch (r) {
      case e:
        o = (t - n) / a + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / a + 2;
        break;
      case n:
        o = (e - t) / a + 4;
    }
    o /= 6;
  }
  return { h: o, s, v: c };
}
function bo(e, t, n) {
  ((e = xo(e, 360) * 6), (t = xo(t * 100, 100)), (n = xo(n * 100, 100)));
  let r = Math.floor(e),
    i = e - r,
    a = n * (1 - t),
    o = n * (1 - i * t),
    s = n * (1 - (1 - i) * t),
    c = r % 6,
    l = [n, o, a, a, s, n][c],
    u = [s, n, n, o, a, a][c],
    d = [a, a, s, n, n, o][c];
  return { r: l * 255, g: u * 255, b: d * 255 };
}
function xo(e, t) {
  let n, r;
  if (((n = typeof t == `string` ? parseFloat(t) : t), typeof e == `string`)) {
    So(e) && (e = `100%`);
    let t = Co(e);
    ((r = Math.min(n, Math.max(0, parseFloat(e)))), t && (r = Math.floor(r * n) / 100));
  } else r = e;
  return Math.abs(r - n) < 1e-6 ? 1 : (r % n) / n;
}
function So(e) {
  return typeof e == `string` && e.includes(`.`) && parseFloat(e) === 1;
}
function Co(e) {
  return typeof e == `string` && e.includes(`%`);
}
function wo(e) {
  return e.length === 1 ? `0` + e : `` + e;
}
function To(e) {
  if (e.includes(`gradient(`) || e.includes(`var(`)) return !1;
  let t = e
      .replace(/^[\s,#]+/u, ``)
      .trimEnd()
      .toLowerCase(),
    n = iS[t];
  if ((n && (t = n), t === `transparent`)) return { r: 0, g: 0, b: 0, a: 0, format: `name` };
  let r;
  return (r = sS.rgb.exec(t))
    ? {
        r: parseInt(r[1] ?? ``),
        g: parseInt(r[2] ?? ``),
        b: parseInt(r[3] ?? ``),
        a: 1,
        format: `rgb`,
      }
    : (r = sS.rgba.exec(t))
      ? {
          r: parseInt(r[1] ?? ``),
          g: parseInt(r[2] ?? ``),
          b: parseInt(r[3] ?? ``),
          a: parseFloat(r[4] ?? ``),
          format: `rgb`,
        }
      : (r = sS.hsl.exec(t))
        ? { h: parseInt(r[1] ?? ``), s: co(r[2] ?? ``), l: co(r[3] ?? ``), a: 1, format: `hsl` }
        : (r = sS.hsla.exec(t))
          ? {
              h: parseInt(r[1] ?? ``),
              s: co(r[2] ?? ``),
              l: co(r[3] ?? ``),
              a: parseFloat(r[4] ?? ``),
              format: `hsl`,
            }
          : (r = sS.hsv.exec(t))
            ? { h: parseInt(r[1] ?? ``), s: co(r[2] ?? ``), v: co(r[3] ?? ``), a: 1, format: `hsv` }
            : (r = sS.hsva.exec(t))
              ? {
                  h: parseInt(r[1] ?? ``),
                  s: co(r[2] ?? ``),
                  v: co(r[3] ?? ``),
                  a: parseFloat(r[4] ?? ``),
                  format: `hsv`,
                }
              : (r = sS.hex8.exec(t))
                ? {
                    r: Eo(r[1] ?? ``),
                    g: Eo(r[2] ?? ``),
                    b: Eo(r[3] ?? ``),
                    a: Do(r[4] ?? ``),
                    format: n ? `name` : `hex`,
                  }
                : (r = sS.hex6.exec(t))
                  ? {
                      r: Eo(r[1] ?? ``),
                      g: Eo(r[2] ?? ``),
                      b: Eo(r[3] ?? ``),
                      a: 1,
                      format: n ? `name` : `hex`,
                    }
                  : (r = sS.hex4.exec(t))
                    ? {
                        r: Eo(`${r[1]}${r[1]}`),
                        g: Eo(`${r[2]}${r[2]}`),
                        b: Eo(`${r[3]}${r[3]}`),
                        a: Do(r[4] + `` + r[4]),
                        format: n ? `name` : `hex`,
                      }
                    : (r = sS.hex3.exec(t))
                      ? {
                          r: Eo(`${r[1]}${r[1]}`),
                          g: Eo(`${r[2]}${r[2]}`),
                          b: Eo(`${r[3]}${r[3]}`),
                          a: 1,
                          format: n ? `name` : `hex`,
                        }
                      : !1;
}
function Eo(e) {
  return parseInt(e, 16);
}
function Do(e) {
  return Eo(e) / 255;
}
function Oo(e) {
  let t = cS.exec(e);
  if (!t) return null;
  let { r: n = `0`, g: r = `0`, b: i = `0`, a } = t.groups ?? {};
  return { r: parseFloat(n), g: parseFloat(r), b: parseFloat(i), a: a ? parseFloat(a) : 1 };
}
function ko(e = 0) {
  let t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
}
function Ao({ r: e, g: t, b: n, a: r }) {
  return { r: ko(e), g: ko(t), b: ko(n), a: r };
}
function jo(e = 0) {
  let t = Math.abs(e);
  return t > 0.0031308 ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - 0.055) : e * 12.92;
}
function Mo({ r: e, g: t, b: n, a: r }) {
  return { r: jo(e), g: jo(t), b: jo(n), a: r };
}
function No({ r: e, g: t, b: n, a: r }) {
  let i = Math.max(e, t, n),
    a = Math.min(e, t, n),
    o = { h: 0, s: i === 0 ? 0 : 1 - a / i, v: i, a: r };
  return (
    i - a !== 0 &&
      (o.h =
        (i === e
          ? (t - n) / (i - a) + (t < n ? 6 : 0)
          : i === t
            ? (n - e) / (i - a) + 2
            : (e - t) / (i - a) + 4) * 60),
    o
  );
}
function Po(e) {
  return (e %= 360) < 0 ? e + 360 : e;
}
function Fo({ h: e = 0, s: t = 0, v: n = 0, a: r = 1 }) {
  let i = Po(e),
    a = Math.abs(((i / 60) % 2) - 1);
  switch (Math.floor(i / 60)) {
    case 0:
      return { r: n, g: n * (1 - t * a), b: n * (1 - t), a: r };
    case 1:
      return { r: n * (1 - t * a), g: n, b: n * (1 - t), a: r };
    case 2:
      return { r: n * (1 - t), g: n, b: n * (1 - t * a), a: r };
    case 3:
      return { r: n * (1 - t), g: n * (1 - t * a), b: n, a: r };
    case 4:
      return { r: n * (1 - t * a), g: n * (1 - t), b: n, a: r };
    case 5:
      return { r: n, g: n * (1 - t), b: n * (1 - t * a), a: r };
    default:
      return { r: n * (1 - t), g: n * (1 - t), b: n * (1 - t), a: r };
  }
}
function Io(e) {
  return fS(dS(e));
}
function Lo(e) {
  return uS(lS(e));
}
function Ro(e, t, n, r = 1) {
  let i;
  return (
    typeof e == `number` &&
    !Number.isNaN(e) &&
    typeof t == `number` &&
    !Number.isNaN(t) &&
    typeof n == `number` &&
    !Number.isNaN(n)
      ? (i = Vo({ r: e, g: t, b: n, a: r }))
      : typeof e == `string`
        ? (i = zo(e))
        : typeof e == `object` &&
          (i =
            e.hasOwnProperty(`r`) && e.hasOwnProperty(`g`) && e.hasOwnProperty(`b`)
              ? Vo(e)
              : Ho(e)),
    i
  );
}
function zo(e) {
  let t = To(e);
  if (t) return t.format === `hsl` ? Ho(t) : t.format === `hsv` ? Bo(t) : Vo(t);
}
function Bo(e) {
  let t = bo(e.h, e.s, e.v);
  return { ...go(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : Uo(e.a) };
}
function Vo(e) {
  let t = mo(e.r, e.g, e.b);
  return { ...go(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : Uo(e.a) };
}
function Ho(e) {
  let t,
    n,
    r,
    i = { r: 0, g: 0, b: 0 },
    a = { h: 0, s: 0, l: 0 };
  return (
    (t = so(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (n = so(e.s) ? e.s : 1),
    typeof e.s == `string` && (n = lo(e.s)),
    (r = so(e.l) ? e.l : 0.5),
    typeof e.l == `string` && (r = lo(e.l)),
    (i = vo(t, n, r)),
    (a = { h: t, s: n, l: r }),
    { ...i, ...a, a: e.a === void 0 ? 1 : e.a, format: `hsl` }
  );
}
function Uo(e) {
  return ((e = parseFloat(e)), e < 0 && (e = 0), (Number.isNaN(e) || e > 1) && (e = 1), e);
}
function Wo({ children: e }) {
  if (t(ES).top) return /* @__PURE__ */ T(_, { children: e });
  let n = g({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
      count: { byId: {}, byName: {} },
    }),
    r = g({ byId: {}, byName: {}, byLastId: {}, byPossibleId: {}, byLastName: {}, byLayoutId: {} }),
    i = g(/* @__PURE__ */ new Set()).current,
    a = l(({ id: e, name: t, duplicatedFrom: a }) => {
      if (!e) return null;
      let o = t ? `byName` : `byId`,
        s = n.current[o][e];
      if (s) return s;
      let c = t || e;
      if (!a && !i.has(c) && (!n.current.byLayoutId[c] || n.current.byLayoutId[c] === c))
        return (
          n.current.count[o][c] === void 0 &&
            ((n.current.count[o][c] = 0), (n.current.byLayoutId[c] = c), (r.current[o][e] = c)),
          i.add(c),
          c
        );
      let l;
      if (a?.length)
        for (let s = a.length - 1; s >= 0; s--) {
          let c = a[s];
          W(!!c, `duplicatedId must be defined`);
          let u = n.current[o][c],
            d = n.current.byLastId[c];
          if (d && !l) {
            let e = n.current.byLayoutId[d],
              r = !e || e === t;
            d && !i.has(d) && (!t || r) && (l = [d, c]);
          }
          let f = u ? n.current.byLayoutId[u] : void 0,
            p = !f || f === t;
          if (u && !i.has(u) && (!t || p))
            return ((r.current[o][e] = u), (r.current.byLastId[c] = u), i.add(u), u);
        }
      let u = n.current.byLastId[e];
      if (u && !i.has(u)) return (i.add(u), (r.current.byId[e] = u), u);
      if (l) {
        let [t, n] = l;
        return ((r.current[o][e] = t), (r.current.byLastId[n] = t), i.add(t), t);
      }
      let d = n.current.byPossibleId[e];
      if (d && !i.has(d)) return (i.add(d), (r.current.byId[e] = d), d);
      let f = a?.[0],
        p = t || f || e,
        { layoutId: m, value: h } = Go(p, (n.current.count[o][p] ?? -1) + 1, i);
      if (((n.current.count[o][p] = h), (r.current[o][e] = m), a?.length && !t)) {
        let e = a[a.length - 1];
        if ((e && (r.current.byLastId[e] = m), a.length > 1))
          for (let e = 0; e < a.length - 1; e++) {
            let t = a[e];
            t !== void 0 && (r.current.byPossibleId[t] || (r.current.byPossibleId[t] = m));
          }
      }
      return ((r.current.byLayoutId[m] = c), i.add(m), m);
    }, []),
    o = l(() => {
      ((n.current = {
        byId: { ...n.current.byId, ...r.current.byId },
        byLastId: { ...n.current.byLastId, ...r.current.byLastId },
        byPossibleId: { ...n.current.byPossibleId, ...r.current.byPossibleId },
        byName: { ...n.current.byName, ...r.current.byName },
        byLastName: { ...n.current.byLastName, ...r.current.byLastName },
        byLayoutId: { ...n.current.byLayoutId, ...r.current.byLayoutId },
        count: { ...n.current.count, byName: {} },
      }),
        (r.current = {
          byId: {},
          byName: {},
          byLastId: {},
          byPossibleId: {},
          byLastName: {},
          byLayoutId: {},
        }),
        i.clear());
    }, []),
    s = g({ getLayoutId: a, persistLayoutIdCache: o, top: !0, enabled: !0 }).current;
  return /* @__PURE__ */ T(ES.Provider, { value: s, children: e });
}
function Go(e, t, n) {
  let r = t,
    i = r ? `${e}-${r}` : e;
  for (; n.has(i);) (r++, (i = `${e}-${r}`));
  return { layoutId: i, value: r };
}
function Ko({ enabled: e = !0, ...n }) {
  let r = t(ES),
    i = S(() => ({ ...r, enabled: e }), [e]);
  return /* @__PURE__ */ T(ES.Provider, { ...n, value: i });
}
function qo(e) {
  let t = g(null);
  return (t.current === null && (t.current = e()), t.current);
}
function Jo(e) {
  let { error: t, file: n } = e,
    r = n ? `Error in ${Yo(n)}` : `Error`,
    i = t instanceof Error ? t.message : `` + t;
  return /* @__PURE__ */ C(`div`, {
    style: OS,
    children: [
      /* @__PURE__ */ T(`div`, { className: `text`, style: AS, children: r }),
      i && /* @__PURE__ */ T(`div`, { className: `text`, style: jS, children: i }),
    ],
  });
}
function Yo(e) {
  return e.startsWith(`./`) ? e.replace(`./`, ``) : e;
}
function Xo() {
  let e = G.current();
  return e === G.canvas || e === G.export;
}
function Zo() {
  let [e] = m(() => Xo());
  return e;
}
/**
 * @license Emotion v11.0.0
 * MIT License
 *
 * Copyright (c) Emotion team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
function Qo(e) {
  let t = Object.create(Object.prototype);
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
function $o(e, t) {
  if (e === void 0 || t === void 0) return;
  let n = e,
    r = t,
    i = 0;
  t > e && ((n = t), (r = e), (i = 1));
  let a = n / r,
    o = [];
  for (let e of US) {
    if (n <= e) return o;
    o.push({ maxSideSize: e, width: i === 0 ? e : Math.trunc(e / a) });
  }
  return o;
}
function es(e, t) {
  try {
    let n = new URL(e);
    return (
      t ? n.searchParams.set(`scale-down-to`, `${t}`) : n.searchParams.delete(`scale-down-to`),
      n.toString()
    );
  } catch {
    return e;
  }
}
function ts(e, t, n) {
  if (!n || n.length === 0 || !t.pixelWidth) return;
  let r = [];
  for (let t of n) {
    if (t.width < 512) continue;
    let n = es(e, t.maxSideSize);
    r.push(`${n} ${t.width}w`);
  }
  return (r.push(`${es(e, null)} ${t.pixelWidth}w`), r.join(`, `) || void 0);
}
function ns(e, t, n) {
  if (!t.pixelWidth || !t.pixelHeight || !n?.width || !n?.height) return;
  let r = [],
    i = Math.max(t.pixelWidth, t.pixelHeight),
    a = Math.max(n.width / t.pixelWidth, n.height / t.pixelHeight);
  for (let t of HS) {
    let n = es(e, Math.round(i * t * a));
    r.push({ src: n, scale: t });
  }
  return r;
}
function rs(e, t, n) {
  if (![`auto`, `lossless`].includes(t.preferredSize ?? ``)) return { src: n, srcSet: void 0 };
  if (e) {
    let r = ns(n, t, e);
    if (!r?.length) return { src: n, srcSet: void 0 };
    let [i, ...a] = r;
    return { src: i?.src, srcSet: a.map(({ src: e, scale: t }) => `${e} ${t}x`).join(`, `) };
  }
  return { src: n, srcSet: ts(n, t, $o(t.pixelWidth, t.pixelHeight)) };
}
function is() {
  return {
    backgroundRepeat: `repeat`,
    backgroundPosition: `left top`,
    backgroundSize: `64px auto`,
    backgroundImage: ct(zS.imagePlaceholderSvg),
  };
}
function as(e) {
  switch (e) {
    case `fit`:
      return `contain`;
    case `stretch`:
      return `fill`;
    default:
      return `cover`;
  }
}
function os(e, t) {
  let n = e ?? `center`,
    r = t ?? `center`;
  return n === `center` && r === `center` ? `center` : n + ` ` + r;
}
function ss(e) {
  return {
    display: `block`,
    width: `100%`,
    height: `100%`,
    ...VS,
    objectPosition: os(e.positionX, e.positionY),
    objectFit: as(e.fit),
  };
}
function cs(e) {
  let t = j.useRef(e ? `auto` : `async`),
    n = l((e) => {
      ((t.current = `auto`), (e.decoding = `auto`));
    }, []),
    r = l(
      (e) => {
        n(e.currentTarget);
      },
      [n]
    ),
    i = l(
      (e) => {
        e?.complete && n(e);
      },
      [n]
    );
  return { decoding: t.current, onImageLoad: r, onImageMount: i };
}
function ls({
  image: e,
  containerSize: t,
  nodeId: n,
  alt: r,
  draggable: i,
  avoidAsyncDecoding: a,
}) {
  let o = zS.useImageSource(e, t, n),
    s = ss(e),
    { decoding: c, onImageLoad: l, onImageMount: u } = cs(a),
    { srcSet: d, src: f } =
      `srcSet` in e ? { src: o, srcSet: e.srcSet } : rs(e.nodeFixedSize, e, o);
  return /* @__PURE__ */ T(`img`, {
    suppressHydrationWarning: !0,
    ref: u,
    decoding: c,
    fetchpriority: e.fetchPriority,
    loading: e.loading,
    width: e.pixelWidth,
    height: e.pixelHeight,
    sizes: d ? e.sizes : void 0,
    srcSet: d,
    src: f,
    onLoad: l,
    alt: r ?? e.alt ?? ``,
    style: s,
    draggable: i,
  });
}
function us({ image: e, containerSize: t, nodeId: n }) {
  let r = j.useRef(null),
    i = zS.useImageElement(e, t, n),
    a = ss(e);
  return (
    j.useLayoutEffect(() => {
      let e = r.current;
      if (e !== null)
        return (
          e.appendChild(i),
          () => {
            e.removeChild(i);
          }
        );
    }, [i]),
    Object.assign(i.style, a),
    /* @__PURE__ */ T(`div`, { ref: r, style: { display: `contents`, ...VS } })
  );
}
function ds({ nodeId: e, image: t, containerSize: n }) {
  let r = j.useRef(null),
    i = zS.useImageSource(t, n, e);
  return (
    j.useLayoutEffect(() => {
      let n = r.current;
      if (n === null) return;
      let a = ss(t);
      zS.renderOptimizedCanvasImage(n, i, a, e);
    }, [e, t, i]),
    /* @__PURE__ */ T(`div`, { ref: r, style: { display: `contents`, ...VS } })
  );
}
function fs({ layoutId: e, image: t, ...n }) {
  e && (e += `-background`);
  let r = null,
    i = !!e,
    a = null;
  if (V(t.src)) {
    if (t.fit === `tile` && t.pixelWidth && t.pixelHeight) {
      let e = H(t.backgroundSize) ? t.backgroundSize : 1,
        n = { width: Math.round(e * t.pixelWidth), height: Math.round(e * t.pixelHeight) },
        o = io(e * (t.pixelWidth / 2)),
        s = zS.useImageSource(t, n);
      ((r = {
        ...WS,
        backgroundImage: `url(${s})`,
        backgroundRepeat: `repeat`,
        backgroundPosition: os(t.positionX, t.positionY),
        opacity: void 0,
        border: 0,
        backgroundSize: `${o}px auto`,
      }),
        (a = null),
        (i = !0));
    } else
      a =
        G.current() === G.canvas
          ? zS.canRenderOptimizedCanvasImage(zS.useImageSource(t))
            ? /* @__PURE__ */ T(ds, { image: t, ...n })
            : /* @__PURE__ */ T(us, { image: t, ...n })
          : /* @__PURE__ */ T(ls, { image: t, avoidAsyncDecoding: G.current() === G.export, ...n });
  }
  let o = a ? WS : (r ?? { ...WS, ...is() });
  return i
    ? /* @__PURE__ */ T(L.div, {
        layoutId: e,
        style: o,
        "data-framer-background-image-wrapper": !0,
        children: a,
      })
    : /* @__PURE__ */ T(`div`, {
        style: o,
        "data-framer-background-image-wrapper": !0,
        children: a,
      });
}
function ps(e, t, n = !0) {
  let { borderWidth: r, borderStyle: i, borderColor: a } = e;
  if (!r) return;
  let o, s, c, l;
  (typeof r == `number`
    ? (o = s = c = l = r)
    : ((o = r.top || 0), (s = r.bottom || 0), (c = r.left || 0), (l = r.right || 0)),
    (o !== 0 || s !== 0 || c !== 0 || l !== 0) &&
      (n && o === s && o === c && o === l
        ? (t.border = `${o}px ${i} ${a}`)
        : ((t.borderStyle = e.borderStyle),
          (t.borderColor = e.borderColor),
          (t.borderTopWidth = `${o}px`),
          (t.borderBottomWidth = `${s}px`),
          (t.borderLeftWidth = `${c}px`),
          (t.borderRightWidth = `${l}px`))));
}
function ms(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let n = {
    position: `absolute`,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    ...VS,
    pointerEvents: `none`,
  };
  return e.border
    ? ((n.border = e.border), /* @__PURE__ */ T(L.div, { style: n }))
    : (ps(e, n, !1), /* @__PURE__ */ T(L.div, { "data-frame-border": !0, style: n, layoutId: t }));
}
function hs(e, t) {
  let { _forwardedOverrideId: n, _forwardedOverrides: r, id: i } = t,
    a = n ?? i,
    o = r && a ? r[a] : void 0;
  return (o && typeof o == `string` && (e = { ...e, src: o }), e);
}
function gs(e) {
  let { background: t, image: n } = e;
  if (n !== void 0 && t && !KS.isImageObject(t)) return;
  let r = null;
  if (((r = V(n) ? { alt: ``, src: n } : eS.get(t, null)), KS.isImageObject(r))) return hs(r, e);
}
function _s(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function vs(e) {
  return typeof e != `string` && typeof e != `number`;
}
function ys(e) {
  return e != null && typeof e != `boolean` && !_s(e);
}
function q(e) {
  return Number.isFinite(e);
}
function bs(e) {
  return (Math.PI / 180) * e;
}
function xs(e) {
  return tt(e) ? !1 : e === 2 || e === 5;
}
function Ss(e) {
  if (typeof e == `string`) {
    let t = e.trim();
    if (t === `auto`) return 2;
    if (t.endsWith(`fr`)) return 3;
    if (t.endsWith(`%`)) return 1;
    if (t.endsWith(`vw`) || t.endsWith(`vh`)) return 4;
  }
  return 0;
}
function Cs(e, t, n, r) {
  if (typeof t == `string`) {
    if (t.endsWith(`%`) && n)
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * n.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * n.height;
      }
    if (t.endsWith(`vh`)) {
      if (!r) return ws(e);
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * r.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * r.height;
      }
    }
    return parseFloat(t);
  }
  return t;
}
function ws(e) {
  switch (e) {
    case `minWidth`:
    case `minHeight`:
      return -1 / 0;
    case `maxWidth`:
    case `maxHeight`:
      return 1 / 0;
    default:
      ut(e, `unknown constraint key`);
  }
}
function Ts(e, t, n, r) {
  return (
    t.minHeight && (e = Math.max(Cs(`minHeight`, t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(Cs(`maxHeight`, t.maxHeight, n, r), e)),
    e
  );
}
function Es(e, t, n, r) {
  return (
    t.minWidth && (e = Math.max(Cs(`minWidth`, t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(Cs(`maxWidth`, t.maxWidth, n, r), e)),
    e
  );
}
function Ds(e, t, n, r, i) {
  let a = Es(q(e) ? e : ZS, n, r, i),
    o = Ts(q(t) ? t : QS, n, r, i);
  return (
    q(n.aspectRatio) &&
      n.aspectRatio > 0 &&
      (q(n.left) && q(n.right)
        ? (o = a / n.aspectRatio)
        : (q(n.top) && q(n.bottom)) || n.widthType === 0
          ? (a = o * n.aspectRatio)
          : (o = a / n.aspectRatio)),
    { width: a, height: o }
  );
}
function Os(e, t) {
  return !q(e) || !q(t) ? null : e + t;
}
function ks(e) {
  return (
    typeof e.right == `string` ||
    typeof e.bottom == `string` ||
    (typeof e.left == `string` && (!e.center || e.center === `y`)) ||
    (typeof e.top == `string` && (!e.center || e.center === `x`))
  );
}
function As(e) {
  return !e._constraints || ks(e) ? !1 : e._constraints.enabled;
}
function js(e) {
  let { size: t } = e,
    { width: n, height: r } = e;
  return (
    q(t) && (n === void 0 && (n = t), r === void 0 && (r = t)),
    q(n) && q(r) ? { width: n, height: r } : null
  );
}
function Ms(e) {
  let t = js(e);
  if (t === null) return null;
  let { left: n, top: r } = e;
  return q(n) && q(r) ? { x: n, y: r, ...t } : null;
}
function Ns(e, t, n = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let r = t === 1 || t === 2;
  if (!As(e) || r) return Ms(e);
  let i = Ps(e),
    a = Fs(t),
    o = a ? { sizing: a, positioning: a, viewport: null } : null;
  return XS.toRect(i, o, null, n, null);
}
function Ps(e) {
  let { left: t, right: n, top: r, bottom: i, center: a, _constraints: o, size: s } = e,
    { width: c, height: l } = e;
  (c === void 0 && (c = s), l === void 0 && (l = s));
  let { aspectRatio: u, autoSize: d } = o,
    f = YS.quickfix({
      left: q(t),
      right: q(n),
      top: q(r),
      bottom: q(i),
      widthType: Ss(c),
      heightType: Ss(l),
      aspectRatio: u || null,
      fixedSize: d === !0,
    }),
    p = null,
    m = null,
    h = 0,
    g = 0;
  if (f.widthType !== 0 && typeof c == `string`) {
    let e = parseFloat(c);
    c.endsWith(`fr`) ? ((h = 3), (p = e)) : c === `auto` ? (h = 2) : ((h = 1), (p = e / 100));
  } else c !== void 0 && typeof c != `string` && (p = c);
  if (f.heightType !== 0 && typeof l == `string`) {
    let e = parseFloat(l);
    l.endsWith(`fr`)
      ? ((g = 3), (m = e))
      : l === `auto`
        ? (g = 2)
        : ((g = 1), (m = parseFloat(l) / 100));
  } else l !== void 0 && typeof l != `string` && (m = l);
  let _ = 0.5,
    v = 0.5;
  return (
    (a === !0 || a === `x`) && ((f.left = !1), typeof t == `string` && (_ = parseFloat(t) / 100)),
    (a === !0 || a === `y`) && ((f.top = !1), typeof r == `string` && (v = parseFloat(r) / 100)),
    {
      left: f.left ? t : null,
      right: f.right ? n : null,
      top: f.top ? r : null,
      bottom: f.bottom ? i : null,
      widthType: h,
      heightType: g,
      width: p,
      height: m,
      aspectRatio: f.aspectRatio || null,
      centerAnchorX: _,
      centerAnchorY: v,
      minHeight: e.minHeight,
      maxHeight: e.maxHeight,
      minWidth: e.minWidth,
      maxWidth: e.maxWidth,
    }
  );
}
function Fs(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function Is() {
  return j.useContext($S).parentSize;
}
function Ls(e) {
  return typeof e == `object`;
}
function Rs(e) {
  return Ls(e) ? e.width : e;
}
function zs(e) {
  return Ls(e) ? e.height : e;
}
function Bs(e, t) {
  return /* @__PURE__ */ T(eC, { parentSize: t, children: e });
}
function Vs(e) {
  return Ns(e, Is(), !0);
}
function Hs({ width: e, height: t }) {
  return e === `auto` || e === `min-content` || t === `auto` || t === `min-content`;
}
function Us(e) {
  if (e) {
    if (e.pixelHeight && e.pixelWidth) return { width: e.pixelWidth, height: e.pixelHeight };
    if (e.src === void 0) return { width: 1, height: 1 };
  }
}
function Ws(e) {
  return e && e !== `search` && e !== `slot` && e !== `template` ? L[e] : L.div;
}
function Gs() {
  return !1;
}
function Ks() {
  return dt() ? G.preview : G.current();
}
function qs() {
  return (cC ??= import("./chunk.B3RYC8bk.DdeR-r3F.mjs").then((e) => {
    if (((lC = e.getCombinedCSSRules), Mr())) for (let e of lC()) ft(e, void 0);
    return e;
  }));
}
function Js() {
  return lC ? lC() : (Mr() && qs(), []);
}
function Ys(e) {
  return aC(e, Js, `framer-lib-combinedCSSRules`);
}
function Xs(e, t, n) {
  ((e[`data-framer-layout-hint-center-x`] = t === !0 || t === `x` || void 0),
    (e[`data-framer-layout-hint-center-y`] = t === !0 || t === `y` || void 0),
    (e[`data-framer-layout-hint-x`] = n?.x),
    (e[`data-framer-layout-hint-y`] = n?.y));
}
function Zs(e, t) {
  let n = {};
  return (
    G.current() === G.canvas &&
      Xs(n, uC ? e : void 0, {
        x: typeof t?.x == `number` ? t.x : void 0,
        y: typeof t?.y == `number` ? t.y : void 0,
      }),
    n
  );
}
function Qs(e) {
  return e.replace(/^id_/u, ``).replace(/\\/gu, ``);
}
function $s(e, t) {
  if (!t && ((t = e.children), !t)) return { props: e, children: t };
  let n = e._forwardedOverrides;
  return (
    n &&
      (t = j.Children.map(t, (e) =>
        j.isValidElement(e) ? j.cloneElement(e, { _forwardedOverrides: n }) : e
      )),
    { props: e, children: t }
  );
}
function ec(e) {
  return (t, n) =>
    e === !0
      ? `translate(-50%, -50%) ${n}`
      : e === `x`
        ? `translateX(-50%) ${n}`
        : e === `y`
          ? `translateY(-50%) ${n}`
          : n || `none`;
}
function tc(e, { specificLayoutId: n, postfix: r } = {}) {
  let { name: i, layoutIdKey: a, duplicatedFrom: o, __fromCodeComponentNode: s = !1, drag: c } = e,
    { getLayoutId: l, enabled: u } = t(ES);
  return S(() => {
    if (!u) return e.layoutId;
    let t = n || e.layoutId;
    if (!t && (c || !a || s)) return;
    let d = t || l({ id: a, name: i, duplicatedFrom: o });
    if (d) return r ? `${d}-${r}` : d;
  }, [u]);
}
function nc() {
  let [e, t] = j.useState(0);
  return j.useCallback(() => t((e) => e + 1), []);
}
function rc(e) {
  let t = nc();
  M(() => {
    let n = e?.current;
    if (n)
      return (
        pC?.observeElementWithCallback(e.current, t),
        () => {
          pC?.unobserve(n);
        }
      );
  }, [e, t]);
}
function ic(e) {
  return [
    ...(e.firstElementChild &&
    e.firstElementChild.hasAttribute(`data-framer-size-compatibility-wrapper`)
      ? e.firstElementChild.children
      : e.children),
  ]
    .filter(ac)
    .map(oc);
}
function ac(e) {
  return e instanceof HTMLBaseElement ||
    e instanceof HTMLHeadElement ||
    e instanceof HTMLLinkElement ||
    e instanceof HTMLMetaElement ||
    e instanceof HTMLScriptElement ||
    e instanceof HTMLStyleElement ||
    e instanceof HTMLTitleElement
    ? !1
    : e instanceof HTMLElement || e instanceof SVGElement;
}
function oc(e) {
  if (!(e instanceof HTMLElement) || e.children.length === 0 || e.style.display !== `contents`)
    return e;
  let t = [...e.children].find(ac);
  return t ? oc(t) : e;
}
function sc(e, n, r = () => [], i = {}) {
  let { id: a, visible: o, _needsMeasure: s } = e,
    { skipHook: c = !1 } = i,
    l = t(dC),
    u = G.current() === G.canvas;
  Tx(() => {
    !u ||
      l ||
      c ||
      (n.current && a && o && s && zS.queueMeasureRequest(Qs(a), n.current, r(n.current)));
  });
}
function cc(e) {
  let t = e.closest(`[data-framer-component-container]`);
  t && zS.queueMeasureRequest(Qs(t.id), t, ic(t));
}
function lc(e) {
  e.willChange = `transform`;
  let t = G.current() === G.canvas;
  gC && t && (e.translateZ = mC);
}
function uc(e) {
  ((e.willChange = `transform`), dc(e, !0));
}
function dc(e, t) {
  let n = G.current() === G.canvas;
  if (!gC || !n) return;
  let r = (V(e.transform) && e.transform) || ``;
  t ? r.includes(hC) || (e.transform = r + hC) : (e.transform = r.replace(hC, ``));
}
function fc(e, t, n, r = !0) {
  if (!e) return;
  let i = MS(e.style),
    a = n || i[t],
    o = () => {
      pc(a) && (i[t] = a);
    };
  ((i[t] = null), r ? Promise.resolve().then(o) : setTimeout(o, 0));
}
function pc(e) {
  return V(e) || H(e) || nt(e);
}
function mc(e, t) {
  if (e.size < t) return;
  let n = Math.round(Math.random());
  for (let t of e.keys()) (++n & 1) != 1 && e.delete(t);
}
function hc(e, t, n, r) {
  let i = t.get(n);
  if (i) return i;
  mc(t, e);
  let a = r(n);
  return (t.set(n, a), a);
}
function gc(e, t) {
  let n = [e, t];
  return bC.test(e) ? e : hc(1e3, xC, n, () => yC.multiplyAlpha(e, t));
}
function _c(e, t = 1) {
  let n;
  return (
    (n =
      `stops` in e
        ? e.stops
        : [
            { value: e.start, position: 0 },
            { value: e.end, position: 1 },
          ]),
    t === 1 ? n : n.map((e) => ({ ...e, value: gc(e.value, t) }))
  );
}
function vc(e, t) {
  let n = 0;
  return (
    _c(e, t).forEach((e) => {
      n ^= vC(e.value) ^ e.position;
    }),
    n
  );
}
function yc(e) {
  return e && SC.every((t) => t in e);
}
function bc(e) {
  return e && CC.every((t) => t in e);
}
function xc({ background: e, backgroundColor: t }, n) {
  t
    ? typeof t == `string` || hS(t)
      ? (n.backgroundColor = t)
      : X.isColorObject(e) && (n.backgroundColor = e.initialValue || X.toRgbString(e))
    : e &&
      ((e = eS.get(e, null)),
      typeof e == `string` || hS(e)
        ? (n.background = e)
        : TC.isLinearGradient(e)
          ? (n.background = TC.toCSS(e))
          : DC.isRadialGradient(e)
            ? (n.background = DC.toCSS(e))
            : X.isColorObject(e) && (n.backgroundColor = e.initialValue || X.toRgbString(e)));
}
function J(e, t, n, r) {
  (r === void 0 && (r = t), e[t] !== void 0 && (n[r] = e[t]));
}
function Sc(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function Cc(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function wc(e) {
  if (!e) return {};
  let t = {};
  (e.preserve3d === !0
    ? (t.transformStyle = `preserve-3d`)
    : e.preserve3d === !1 && (t.transformStyle = `flat`),
    e.backfaceVisible === !0
      ? (t.backfaceVisibility = `visible`)
      : e.backfaceVisible === !1 && (t.backfaceVisibility = `hidden`),
    t.backfaceVisibility && (t.WebkitBackfaceVisibility = t.backfaceVisibility),
    e.perspective !== void 0 && (t.perspective = t.WebkitPerspective = e.perspective),
    e.__fromCanvasComponent ||
      (e.center === !0
        ? ((t.left = `50%`), (t.top = `50%`))
        : e.center === `x`
          ? (t.left = `50%`)
          : e.center === `y` && (t.top = `50%`)));
  let { cornerShape: n } = e;
  return (
    Ke(n)
      ? (t.cornerShape = de(() => `superellipse(${n.get()})`))
      : n !== void 0 && (t.cornerShape = `superellipse(${n})`),
    J(e, `size`, t),
    J(e, `width`, t),
    J(e, `height`, t),
    J(e, `minWidth`, t),
    J(e, `minHeight`, t),
    J(e, `top`, t),
    J(e, `right`, t),
    J(e, `bottom`, t),
    J(e, `left`, t),
    J(e, `position`, t),
    J(e, `overflow`, t),
    J(e, `opacity`, t),
    e._border?.borderWidth || J(e, `border`, t),
    J(e, `borderRadius`, t),
    J(e, `radius`, t, `borderRadius`),
    J(e, `color`, t),
    J(e, `shadow`, t, `boxShadow`),
    J(e, `x`, t),
    J(e, `y`, t),
    J(e, `z`, t),
    J(e, `rotate`, t),
    J(e, `rotateX`, t),
    J(e, `rotateY`, t),
    J(e, `rotateZ`, t),
    J(e, `scale`, t),
    J(e, `scaleX`, t),
    J(e, `scaleY`, t),
    J(e, `skew`, t),
    J(e, `skewX`, t),
    J(e, `skewY`, t),
    J(e, `originX`, t),
    J(e, `originY`, t),
    J(e, `originZ`, t),
    xc(e, t),
    t
  );
}
function Tc(e) {
  for (let t in e)
    if (
      t === `drag` ||
      t.startsWith(`while`) ||
      (typeof MS(e)[t] == `function` && t.startsWith(`on`) && !t.includes(`Animation`))
    )
      return !0;
  return !1;
}
function Ec(e) {
  if (e.drag) return `grab`;
  for (let t in e) if (kC.has(t)) return `pointer`;
}
function Dc(e) {
  return Oc(e) ? !0 : e.style ? !!Oc(e.style) : !1;
}
function Oc(e) {
  return AC in e && (e[AC] === `scroll` || e[AC] === `auto`);
}
function kc(e) {
  let {
      left: t,
      top: n,
      bottom: r,
      right: i,
      width: a,
      height: o,
      center: s,
      _constraints: c,
      size: l,
      widthType: u,
      heightType: d,
      positionFixed: f,
      positionAbsolute: p,
    } = e,
    m = R(e.minWidth),
    h = R(e.minHeight),
    g = R(e.maxWidth),
    _ = R(e.maxHeight);
  return {
    top: R(n),
    left: R(t),
    bottom: R(r),
    right: R(i),
    width: R(a),
    height: R(o),
    size: R(l),
    center: s,
    _constraints: c,
    widthType: u,
    heightType: d,
    positionFixed: f,
    positionAbsolute: p,
    minWidth: m,
    minHeight: h,
    maxWidth: g,
    maxHeight: _,
  };
}
function Ac(e) {
  let n = t(dC),
    { style: r, _initialStyle: i, __fromCanvasComponent: a, size: o } = e,
    s = kc(e),
    c = Vs(s),
    l = {
      display: `block`,
      flex: r?.flex ?? `0 0 auto`,
      userSelect: G.current() === G.preview ? void 0 : `none`,
    };
  e.__fromCanvasComponent ||
    (l.backgroundColor = e.background === void 0 ? `rgba(0, 170, 255, 0.3)` : void 0);
  let u = !Tc(e) && !e.__fromCanvasComponent && !Dc(e),
    d = !e.style || !(`pointerEvents` in e.style);
  u && d && (l.pointerEvents = `none`);
  let f = j.Children.count(e.children) > 0 &&
      j.Children.toArray(e.children).every((e) => typeof e == `string` || typeof e == `number`) && {
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        textAlign: `center`,
      },
    p = wc(e);
  (o === void 0 && !a && (Sc(p) || (l.width = jC.width), Cc(p) || (l.height = jC.height)),
    s.minWidth !== void 0 && (l.minWidth = s.minWidth),
    s.minHeight !== void 0 && (l.minHeight = s.minHeight));
  let m = {};
  (As(s) &&
    c &&
    !Hs(e) &&
    (m = { left: c.x, top: c.y, width: c.width, height: c.height, right: void 0, bottom: void 0 }),
    Object.assign(l, f, i, p, m, r),
    Object.assign(l, {
      overflowX: l.overflowX ?? l.overflow,
      overflowY: l.overflowY ?? l.overflow,
      overflow: void 0,
    }),
    _C.applyWillChange(e, l, !0));
  let h = l;
  l.transform || (h = { x: 0, y: 0, ...l });
  let g = Xo();
  return (
    e.positionSticky
      ? (!g || zS.isOnPageCanvas || n) &&
        ((h.position = `sticky`),
        (h.willChange = `transform`),
        (h.top = e.positionStickyTop),
        (h.right = e.positionStickyRight),
        (h.bottom = e.positionStickyBottom),
        (h.left = e.positionStickyLeft))
      : g &&
        (e.positionFixed
          ? (h.position = zS.isOnPageCanvas ? `fixed` : `absolute`)
          : e.positionAbsolute && (h.position = `absolute`)),
    `rotate` in h && h.rotate === void 0 && delete h.rotate,
    [h, c]
  );
}
function jc(e) {
  let t = {};
  for (let n in e)
    (fe(n) || PS(n)) && !MC.has(n)
      ? (t[n] = MS(e)[n])
      : (n === `positionTransition` || n === `layoutTransition`) &&
        ((t.layout = !0),
        typeof MS(e)[n] != `boolean` && !e.transition && (t.transition = MS(e)[n]));
  return t;
}
function Mc(e) {
  return `data-framer-name` in e;
}
function Nc(e, t, n, r) {
  if (r) return n ? { width: n.width, height: n.height } : 1;
  let { _usesDOMRect: i } = e,
    { widthType: a = 0, heightType: o = 0, width: s, height: c } = t;
  return n && !i
    ? n
    : a === 0 && o === 0 && typeof s == `number` && typeof c == `number`
      ? { width: s, height: c }
      : i || e.positionFixed || e.positionAbsolute
        ? 2
        : 0;
}
function Pc(e) {
  return /* @__PURE__ */ T(L.div, { layoutId: FC, style: RC, children: e.children });
}
function Fc(e, t) {
  Ze(e) ? e(t) : Ic(e) && (e.current = t);
}
function Ic(e) {
  return U(e) && `current` in e;
}
function Lc() {
  let e = qo(() => /* @__PURE__ */ new Set()),
    t = qo(() => /* @__PURE__ */ new Map());
  return qo(() => (n, r) => ({
    get current() {
      return n.current;
    },
    set current(i) {
      i !== n.current &&
        ((n.current = i),
        r && r(i),
        t.forEach((e, t) => {
          e ? e() : t(null);
        }),
        i === null
          ? (t.clear(), e.clear())
          : e.forEach((e) => {
              let n = e(i);
              t.set(e, n);
            }));
    },
    observe(r) {
      e.add(r);
      let i = n.current;
      if (i) {
        let e = r(i);
        t.set(r, e);
      }
    },
    unobserve(n) {
      if (!n || (e.delete(n), !t.has(n))) return;
      let r = t.get(n);
      (r ? r() : n(null), t.delete(n));
    },
  }));
}
function Rc(e) {
  let t = g(null),
    n = Lc();
  return qo(() => (Ic(e) ? n(e) : Ze(e) ? n(t, e) : n(t)));
}
function zc(e, t, n) {
  let r = g(),
    i = g();
  ($i(
    () => {
      i.current !== void 0 && (i.current = !0);
    },
    n ?? [{}]
  ),
    e &&
      i.current !== !1 &&
      ((i.current = !1), e.unobserve(r.current), e.observe(t), (r.current = t)));
}
function Bc(e, t, n, r, i, a, o) {
  let s = e.get(t);
  return (
    (!s || s.root !== r?.current) &&
      ((s = new zC({ root: r?.current, rootMargin: a, threshold: o })), e.set(t, s)),
    s.observeElementWithCallback(n, i),
    () => {
      s.unobserve(n);
    }
  );
}
function Vc(e, n, r) {
  let i = qo(() => `${r.rootMargin}`),
    a = t(BC),
    { enabled: o, root: s, rootMargin: c, threshold: l } = r;
  zc(
    e,
    (e) => {
      if (o && e !== null) return Bc(a, i, e, s, n, c, l);
    },
    [o, n, s, c, l]
  );
}
function Hc(e, t, n) {
  let r = j.useRef({ isInView: !1, hasAnimatedOnce: !1 }),
    { enabled: i, animateOnce: a, threshold: o, rootMargin: s = `0px 0px 0px 0px` } = n,
    c = j.useCallback(
      (e) => {
        let { isInView: n, hasAnimatedOnce: i } = r.current,
          s = Wc(e, o?.y ?? 0);
        if (s && !n) {
          if (a && i) return;
          ((r.current.hasAnimatedOnce = !0), (r.current.isInView = !0), t(!0));
        } else if (!s && n) {
          if (((r.current.isInView = !1), a)) return;
          t(!1);
        }
      },
      [a, o?.y, t]
    );
  VC(e, c, { threshold: HC, rootMargin: s, enabled: i ?? !0 });
}
function Uc(e, t) {
  return t.height === 0 ? 0 : e.height / Math.min(t.height, Mt.innerHeight);
}
function Wc({ boundingClientRect: e, intersectionRect: t, isIntersecting: n }, r) {
  return e.height === 0 ? n : n && Uc(t, e) >= r;
}
function Gc() {
  return t(KC);
}
function Kc() {
  return /* @__PURE__ */ new Map();
}
function qc() {
  return qo(Kc);
}
function Jc(e, n = []) {
  let { register: r, deregister: i } = t(qC);
  M(() => {
    if (e) return (r(e), () => i(e));
  }, [r, i, ...n]);
}
function Yc(e, t) {
  return !(
    t.isCurrent === void 0 ||
    e.isCurrent !== t.isCurrent ||
    e.isPrevious !== t.isPrevious ||
    (t.isCurrent && e.isOverlayed !== t.isOverlayed)
  );
}
function Xc(e, t, n) {
  let r = { ...e };
  return (
    t &&
      (q(t.originX) && (r.originX = t.originX),
      q(t.originY) && (r.originY = t.originY),
      q(t.originZ) && (r.originZ = t.originZ)),
    n &&
      (q(n.originX) && (r.originX = n.originX),
      q(n.originY) && (r.originY = n.originY),
      q(n.originZ) && (r.originZ = n.originZ)),
    r
  );
}
function Zc(e) {
  if (!e || !(`rotateX` in e || `rotateY` in e || `z` in e)) return !1;
  let t = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0,
    n =
      e?.transition?.rotateX.from !== 0 ||
      e?.transition?.rotateY.from !== 0 ||
      e?.transition?.z.from !== 0;
  return t || n;
}
function Qc(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `right`) {
    case `right`:
      return $C.PushLeft;
    case `left`:
      return $C.PushRight;
    case `bottom`:
      return $C.PushUp;
    case `top`:
      return $C.PushDown;
  }
}
function $c(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return $C.OverlayLeft;
    case `left`:
      return $C.OverlayRight;
    case `bottom`:
      return $C.OverlayUp;
    case `top`:
      return $C.OverlayDown;
  }
}
function el(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return $C.FlipLeft;
    case `left`:
      return $C.FlipRight;
    case `bottom`:
      return $C.FlipUp;
    case `top`:
      return $C.FlipDown;
  }
}
function tl(e, t) {
  switch (t.type) {
    case `addOverlay`:
      return rl(e, t.transition, t.component);
    case `removeOverlay`:
      return il(e);
    case `add`:
      return al(e, t.key, t.transition, t.component);
    case `remove`:
      return cl(e);
    case `update`:
      return nl(e, t.key, t.component);
    case `back`:
      return ol(e);
    case `forward`:
      return sl(e);
    default:
      return;
  }
}
function nl(e, t, n) {
  return { ...e, containers: { ...e.containers, [t]: n } };
}
function rl(e, t, n) {
  let r = e.overlayStack[e.currentOverlay];
  if (r && r.component === n) return;
  let i = e.overlayItemId + 1,
    a = [...e.overlayStack, { key: `stack-${i}`, component: n, transition: t }];
  return {
    ...e,
    overlayStack: a,
    overlayItemId: i,
    currentOverlay: Math.max(0, Math.min(e.currentOverlay + 1, a.length - 1)),
    previousOverlay: e.currentOverlay,
  };
}
function il(e) {
  return { ...e, overlayStack: [], currentOverlay: -1, previousOverlay: e.currentOverlay };
}
function al(e, t, n, r) {
  (e.containers[t] || (e.containers[t] = r),
    (e.history = e.history.slice(0, e.current + 1)),
    (e.visualIndex = Math.max(e.history.length, 0)));
  let i = e.history[e.history.length - 1],
    a = i?.key === t;
  if (((e.overlayStack = []), a && e.currentOverlay > -1))
    return { ...e, currentOverlay: -1, previousOverlay: e.currentOverlay };
  if (a) return;
  let o = e.containerVisualIndex[t],
    s = e.containerIsRemoved[t],
    c = i?.key && n.withMagicMotion ? pl(t, o, s, e.history) : !0;
  e.history.push({
    key: t,
    transition: n,
    visualIndex: c ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t],
  });
  let l = e.current + 1,
    u = e.current;
  for (let t in e.containerIndex)
    e.containerIndex[t] === l && (e.containerIndex[t] = dl(t, e.history));
  e.containerIndex[t] = l;
  let { containerVisualIndex: d, containerIsRemoved: f } = ll(e, t, c),
    p = fl(l, u, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: l,
    previous: u,
    containerVisualIndex: d,
    containerIsRemoved: f,
    transitionForContainer: p,
    previousTransition: null,
    currentOverlay: -1,
    historyItemId: e.historyItemId + 1,
    previousOverlay: e.currentOverlay,
  };
}
function ol(e) {
  let t = { ...e.containers },
    n = cl(e);
  if (n) return ((n.containers = t), n);
}
function sl(e) {
  let t = e.history[e.current + 1];
  if (!t) return;
  let { key: n, transition: r, component: i } = t,
    a = [...e.history],
    o = al(e, n, r, i);
  if (o) return ((o.history = a), o);
}
function cl(e) {
  let t = e.history.slice(0, e.current + 1);
  if (t.length === 1) return;
  let n = t.pop();
  if (!n) return;
  let r = t[t.length - 1];
  (W(r, `The navigation history must have at least one component`),
    (e.containerIndex[r.key] = t.length - 1),
    t.every((e) => e.key !== n.key) && delete e.containers[n.key]);
  let i = e.current - 1,
    a = e.current,
    {
      containerIsRemoved: o,
      containerVisualIndex: s,
      previousTransition: c,
      visualIndex: l,
    } = ul(e, r, n),
    u = fl(i, a, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: i,
    previous: a,
    containerIsRemoved: o,
    containerVisualIndex: s,
    previousTransition: c,
    visualIndex: l,
    transitionForContainer: u,
  };
}
function ll(e, t, n) {
  let r = {
    containerVisualIndex: { ...e.containerVisualIndex },
    containerIsRemoved: { ...e.containerIsRemoved },
  };
  if (n) ((r.containerVisualIndex[t] = e.history.length - 1), (r.containerIsRemoved[t] = !1));
  else {
    let n = e.containerVisualIndex[t];
    for (let [t, i] of Object.entries(e.containerVisualIndex))
      n !== void 0 && i > n && (r.containerIsRemoved[t] = !0);
  }
  return r;
}
function ul(e, t, n) {
  let r = [t.key, n.key],
    i = e.history[e.history.length - 2],
    a = e.previousTransition === null ? null : { ...e.previousTransition },
    o = {
      containerIsRemoved: { ...e.containerIsRemoved },
      containerVisualIndex: { ...e.containerVisualIndex },
      previousTransition: a,
      visualIndex: e.visualIndex,
    };
  i && r.push(i.key);
  let s = e.containerVisualIndex[t.key],
    c = e.containerVisualIndex[n.key],
    l =
      (s !== void 0 && c !== void 0 && s <= c) ||
      (t.visualIndex !== void 0 && t.visualIndex < e.history.length - 1),
    u = t.visualIndex;
  return (
    l
      ? ((o.containerIsRemoved[n.key] = !0),
        (o.containerVisualIndex[t.key] = u === void 0 ? e.history.length - 1 : u))
      : ((o.visualIndex = e.visualIndex + 1), (o.containerVisualIndex[t.key] = e.visualIndex + 1)),
    n.transition.withMagicMotion && (o.previousTransition = n.transition || null),
    (e.containerIsRemoved[t.key] = !1),
    o
  );
}
function dl(e, t) {
  for (let n = t.length; n > t.length; n--) if (t[n]?.key === e) return n;
  return -1;
}
function fl(e, t, n, r, i) {
  let a = { ...i };
  for (let [i, o] of Object.entries(r)) {
    let r = ml(o, { current: e, previous: t, history: n });
    r && (a[i] = r);
  }
  return a;
}
function pl(e, t, n, r) {
  return n || t === void 0
    ? !0
    : t === 0
      ? !1
      : r.slice(t, r.length).some((t) => t.key === e)
        ? !0
        : !r.slice(0, t - 1).some((t) => t.key === e);
}
function ml(e, t) {
  let { current: n, previous: r, history: i } = t;
  if (e === n || e === r) {
    if (e === n && n > r) {
      let t = i[e];
      return hl(`enter`, t?.transition.enter, t?.transition.animation);
    }
    if (e === r && n > r) {
      let t = i[e + 1];
      return hl(`exit`, t?.transition.exit, t?.transition.animation);
    }
    if (e === n && n < r) {
      let t = i[e + 1];
      return hl(`enter`, t?.transition.exit, t?.transition.animation);
    }
    if (e === r && n < r) {
      let t = i[e];
      return hl(`exit`, t?.transition.enter, t?.transition.animation);
    }
  }
}
function hl(e, t, n) {
  let r = {},
    i = {};
  return (
    tw.forEach((e) => {
      ((r[e] = XC[e]), (i[e] = { ...n, from: XC[e] }));
    }),
    t &&
      Object.keys(t).forEach((a) => {
        if (t[a] === void 0) return;
        let o = t[a],
          s = typeof t[a] == `string` ? `${MS(XC)[a]}%` : MS(XC)[a];
        ((MS(r)[a] = e === `enter` ? s : o),
          (i[a] = { ...n, from: e === `enter` ? o : s, velocity: 0 }));
      }),
    { ...r, transition: { ...i } }
  );
}
function gl(e) {
  let t, n;
  return (
    e.current === -1 ? (n = e.history[e.previous]) : (t = e.history[e.current]),
    { currentOverlayItem: t, previousOverlayItem: n }
  );
}
function _l({ currentOverlayItem: e }) {
  return e?.transition?.exit;
}
function vl({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e?.transition?.animation
    ? e.transition.animation
    : t?.transition?.animation
      ? t.transition.animation
      : aw;
}
function yl({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e ? e.transition.backfaceVisible : t?.transition?.backfaceVisible;
}
function bl(e) {
  if (e.backdropColor) return e.backdropColor;
  if (e.overCurrentContext) return `rgba(4,4,15,.4)`;
}
function xl(e, t) {
  let { current: n, history: r } = t;
  if (e === n) {
    let t = r[e];
    return !t?.transition || t.transition.backfaceVisible;
  }
  if (e < n) {
    let t = r[e + 1];
    return !t?.transition || t.transition.backfaceVisible;
  }
  {
    let t = r[e];
    return !t?.transition || t.transition.backfaceVisible;
  }
}
function Sl(e, t) {
  let n = t.history[e];
  if (n) return n.transition.enter;
}
function Cl(e, t) {
  let { current: n, previous: r, history: i } = t;
  return (e === r && n > r) || (e === n && n < r)
    ? i[e + 1]?.transition?.backfaceVisible
    : i[e]?.transition?.backfaceVisible;
}
function wl(e, t) {
  let { current: n, history: r } = t;
  if (e !== n) {
    if (e < n) {
      let t = r[e + 1];
      if (t?.transition) return t.transition.exit;
    } else {
      let t = r[e];
      if (t?.transition) return t.transition.enter;
    }
  }
}
function Tl(e, t) {
  let { current: n, previous: r, history: i } = t,
    a = r > n ? r : n;
  if (e < a) {
    let t = i[e + 1];
    if (t?.transition?.animation) return t.transition.animation;
  } else if (e !== a) {
    let t = i[e];
    if (t?.transition?.animation) return t.transition.animation;
  } else {
    let t = i[e];
    if (t?.transition.animation) return t.transition.animation;
  }
  return aw;
}
function El(e, t, n) {
  let { current: r, previous: i, history: a } = t;
  return !!((n && a.length > 1) || (e !== i && e !== r) || r === i);
}
function Dl(e, t) {
  let { current: n, previous: r } = t;
  return e > n && e > r ? !1 : e === n;
}
function Ol(e) {
  return j.Children.map(e.component, (t) => {
    if (!ys(t) || !vs(t) || !t.props) return t;
    let n = { style: t.props.style ?? {} },
      r = e?.transition?.position,
      i = !r || (r.left !== void 0 && r.right !== void 0),
      a = !r || (r.top !== void 0 && r.bottom !== void 0),
      o = `style` in t.props ? U(t.props.style) : !0;
    return (
      i && (`width` in t.props && (n.width = `100%`), o && (n.style.width = `100%`)),
      a && (`height` in t.props && (n.height = `100%`), o && (n.style.height = `100%`)),
      j.cloneElement(t, n)
    );
  });
}
function kl(e, t) {
  if (e.goBackOnTapOutside !== !1) return t;
}
function Al(e, t) {
  let n = P(),
    r = he();
  return /* @__PURE__ */ T(iw, {
    ref: (e) => {
      t && (typeof t == `function` ? t(e) : (t.current = e));
    },
    ...e,
    resetProjection: n,
    skipLayoutAnimation: r,
    children: e.children,
  });
}
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function jl(e) {
  return U(e) || Ze(e);
}
function Ml(e) {
  return !!e && cw in e && e[cw] === !0;
}
function Nl(e) {
  try {
    switch (e.type) {
      case `string`:
      case `collectionreference`:
      case `color`:
      case `date`:
      case `link`:
      case `boxshadow`:
      case `padding`:
      case `borderradius`:
      case `gap`:
      case `dimension`:
        return V(e.defaultValue) ? e.defaultValue : void 0;
      case `boolean`:
        return Qe(e.defaultValue) ? e.defaultValue : void 0;
      case `enum`:
        return tt(e.defaultValue)
          ? void 0
          : e.options.includes(e.defaultValue)
            ? e.defaultValue
            : void 0;
      case `fusednumber`:
      case `number`:
        return H(e.defaultValue) ? e.defaultValue : void 0;
      case `transition`:
        return U(e.defaultValue) ? e.defaultValue : void 0;
      case `border`:
        return U(e.defaultValue) ? e.defaultValue : void 0;
      case `font`:
      case `location`:
        return U(e.defaultValue) ? e.defaultValue : void 0;
      case `linkrelvalues`:
        return $e(e.defaultValue) ? e.defaultValue : void 0;
      case `multicollectionreference`:
        return $e(e.defaultValue) ? e.defaultValue : void 0;
      case `object`: {
        let t = U(e.defaultValue) ? e.defaultValue : {};
        return (U(e.controls) && Pl(t, e.controls), t);
      }
      case `array`:
        return $e(e.defaultValue) ? e.defaultValue : void 0;
      case `motionvalue`:
      case `file`:
      case `image`:
      case `richtext`:
      case `pagescope`:
      case `eventhandler`:
      case `changehandler`:
      case `segmentedenum`:
      case `responsiveimage`:
      case `componentinstance`:
      case `slot`:
      case `scrollsectionref`:
      case `customcursor`:
      case `cursor`:
      case `trackingid`:
      case `vectorsetitem`:
        return;
      default:
        return;
    }
  } catch {
    return;
  }
}
function Pl(e, t) {
  for (let n in t) {
    let r = t[n];
    if (!r) continue;
    let i = e[n];
    if (!tt(i) || Ml(r)) continue;
    let a = Nl(r);
    tt(a) || (e[n] = a);
  }
}
function Fl(e) {
  if (U(e.defaultProps)) return e.defaultProps;
  let t = {};
  return ((e.defaultProps = t), t);
}
function Il(e, t) {
  jl(e) && Pl(Fl(e), t);
}
function Ll(e, t) {
  Object.assign(e, { [lw]: t });
}
function Rl(e, t, n) {
  (Object.assign(e, { propertyControls: t }), Il(e, t), n !== void 0 && Ll(e, n));
}
function zl(e) {
  return e.propertyControls;
}
function Bl(e) {
  return hw in e;
}
function Vl(e, t) {
  if (!Bl(e)) return;
  let n = eS.getNumber(e.opacity);
  n !== 1 && (t.opacity = n);
}
function Hl(e) {
  let t = [];
  if (e && e.length) {
    let n = e.map((e) => `drop-shadow(${e.x}px ${e.y}px ${e.blur}px ${e.color})`);
    t.push(...n);
  }
  return t;
}
function Ul(e, t) {
  if (!e.shadows || e.shadows.length === 0) return;
  let n = e.shadows.map((e) => `${e.x}px ${e.y}px ${e.blur}px ${e.color}`).join(`, `);
  n && (t.textShadow = n);
}
function Wl(e, t) {
  let n = [];
  (q(e.brightness) && n.push(`brightness(${e.brightness / 100})`),
    q(e.contrast) && n.push(`contrast(${e.contrast / 100})`),
    q(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`),
    q(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`),
    q(e.invert) && n.push(`invert(${e.invert / 100})`),
    q(e.saturate) && n.push(`saturate(${e.saturate / 100})`),
    q(e.sepia) && n.push(`sepia(${e.sepia / 100})`),
    q(e.blur) && n.push(`blur(${e.blur}px)`),
    e.dropShadows && n.push(...Hl(e.dropShadows)),
    n.length !== 0 && (t.filter = t.WebkitFilter = n.join(` `)));
}
function Gl(e, t) {
  q(e.backgroundBlur) &&
    (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`);
}
function Kl(e, t) {
  (Gl(e, t), Wl(e, t));
}
function ql(e, t) {
  let n,
    r = (...r) => {
      (Mt.clearTimeout(n), (n = Mt.setTimeout(e, t, ...r)));
    };
  return (
    (r.cancel = () => {
      Mt.clearTimeout(n);
    }),
    r
  );
}
function Jl(e, t = 2) {
  let n = 0;
  if (typeof e == `number`) n = e;
  else if (typeof e == `string`) n = parseFloat(e);
  else return;
  if (Number.isInteger(n)) return n;
  let r = 1;
  for (; t-- > 0;) r *= 10;
  return (n < 0 && (r *= -1), Math.round(n * r) / r);
}
function Yl(e) {
  if (e === `none`) return null;
  let t = e
      .trim()
      .split(/\s+/u)
      .map((e) => Jl(e)),
    [n, r, i, a] = t;
  switch (t.length) {
    case 1:
      return q(n) ? { top: n, right: n, bottom: n, left: n } : null;
    case 2:
      return !q(n) || !q(r) ? null : { top: n, right: r, bottom: n, left: r };
    case 3:
      return !q(n) || !q(r) || !q(i) ? null : { top: n, right: r, bottom: i, left: r };
    case 4:
      return !q(n) || !q(r) || !q(i) || !q(a) ? null : { top: n, right: r, bottom: i, left: a };
    default:
      return null;
  }
}
function Xl(...e) {
  return e.filter(Boolean).join(` `);
}
function Zl(e) {
  if (e.startsWith(bw)) return e.substr(xw);
}
function Ql(e, t, n) {
  let r = p.map(e, (e) => (w(e) ? a(e, t) : e));
  return n ? r : /* @__PURE__ */ T(_, { children: r });
}
function $l(e) {
  let t = qo(() => eu(e));
  return (t.useSetup(e), t.cloneAsElement);
}
function eu(e) {
  let t = { forwardedRef: e, childRef: null, ref: null };
  t.ref = tu(t);
  let n = (e, n) => {
      if (!t.forwardedRef && t.forwardedRef === e) {
        t.ref = n;
        return;
      }
      let r = !1;
      (t.childRef !== n && ((t.childRef = n), (r = !0)),
        t.forwardedRef !== e && ((t.forwardedRef = e), (r = !0)),
        r && (t.ref = tu(t)));
    },
    r = !1;
  function i(i, o) {
    if (r)
      throw ReferenceError(
        `useCloneChildrenWithPropsAndRef: You should not call cloneChildrenWithPropsAndRef more than once during the render cycle.`
      );
    return (
      (r = !0),
      p.count(i) > 1 && e && ((t.forwardedRef = void 0), (t.ref = t.childRef)),
      p.map(i, (e) => {
        if (w(e)) {
          let r = `ref` in e ? e.ref : void 0;
          n(t.forwardedRef, r);
          let i = Ze(o) ? o(e.props) : o;
          return a(e, t.ref === r ? i : { ...i, ref: t.ref });
        }
        return e;
      })
    );
  }
  let o = function (e, t) {
    return /* @__PURE__ */ T(_, { children: i(e, t) });
  };
  return (
    (o.cloneAsArray = i),
    {
      useSetup: (e) => {
        ((r = !1), n(e, t.childRef));
      },
      cloneAsElement: o,
    }
  );
}
function tu(e) {
  if (!e.forwardedRef) return e.childRef;
  let { forwardedRef: t, childRef: n } = e;
  return (e) => {
    (Fc(n, e), Fc(t, e));
  };
}
function nu(e, t, n, r, i, a, o, s) {
  let c = j.Children.toArray(t),
    l = c[0];
  if (c.length !== 1 || !j.isValidElement(l))
    return (
      console.warn(`PropertyOverrides: expected exactly one React element for a child`, t),
      o(t, n)
    );
  let u = [],
    d = [];
  for (let [t] of Object.entries(r)) {
    if (t === i) continue;
    let n = e[t];
    if (!n || !ou(l.props, n)) {
      d.push(t);
      continue;
    }
    let r = au([t], a);
    r.length && u.push({ variants: r, propOverrides: n });
  }
  if (u.length === 0) return o(l, n);
  let f = au([i, ...d], a);
  f.length && u.unshift({ variants: f });
  let p = [];
  for (let { variants: e, propOverrides: t } of u) {
    if (s && !e.includes(s)) continue;
    let c = s ? `active-branch` : e.join(`+`),
      d = /* @__PURE__ */ T(
        Cw.Provider,
        {
          value: { primaryVariantId: i, variants: new Set(e) },
          children: o(l, t ? { ...n, ...t } : n),
        },
        c
      ),
      f = iu(e, a, r);
    (f.length
      ? (W(u.length > 1, `Must branch out when there are hiddenClassNames`),
        (d = /* @__PURE__ */ T(
          `div`,
          { className: `${ww} ${f.join(` `)}`, suppressHydrationWarning: !0, children: d },
          c
        )))
      : W(u.length === 1, `Cannot branch out when hiddenClassNames is empty`),
      p.push(d));
  }
  return (
    W(!s || p.length === 1, `Must render exactly one branch when activeVariantId is given`),
    s ? p : [...p, /* @__PURE__ */ T(`div`, { className: Tw }, `property-overrides-separator`)]
  );
}
function ru(e) {
  return e.split(`-`)[2];
}
function iu(e, t, n) {
  let r = [];
  for (let [i, a] of Object.entries(n)) {
    let n = t && !t.has(i);
    e.includes(i) || n || r.push(`hidden-${ru(a)}`);
  }
  return r;
}
function au(e, t) {
  return t ? e.filter((e) => t.has(e)) : e;
}
function ou(e, t) {
  for (let n of Object.keys(t)) if (!On(e[n], t[n], !0)) return !0;
  return !1;
}
function su(e, t, n) {
  return !n || !e ? t : { ...t, ...n[e] };
}
function cu(e) {
  return j.forwardRef(({ optimized: t, ...n }, r) => {
    let i = j.useContext(Sw),
      a = j.useContext(Cw)?.variants,
      o = n[Nw];
    o && !Mr() && jw.setAll(o, a, t ? n : null, i);
    let s = Fw(n);
    return /* @__PURE__ */ T(e, { ref: r, ...n, ...s });
  });
}
function lu(e) {
  return V(e) || Array.isArray(e);
}
function uu(e) {
  return e in Rw;
}
function du(e, t) {
  let n = qo(() => ({ values: Lw(t ? e : void 0) }));
  return (
    j.useEffect(() => {
      if (!t)
        for (let e of Iw) {
          let t = Rw[e];
          tt(t) || n.values[e].set(t);
        }
    }, [t]),
    n
  );
}
function fu(
  {
    loopEffectEnabled: e,
    loopRepeatDelay: t,
    loopTransition: n,
    loopRepeatType: r,
    loop: i,
    loopPauseOffscreen: a,
  },
  o
) {
  let s = ue(),
    u = qo(Lw),
    d = g(!1),
    f = Hw(),
    p = g(null),
    h = l(async () => {
      if (!i) return;
      let e = n || void 0,
        t = d.current && r === `mirror`,
        a = t ? Rw : i,
        o = t ? i : Rw;
      return (
        (d.current = !d.current),
        (p.current = Promise.all(
          Iw.map((t) => {
            if (!(s && t !== `opacity`))
              return (
                u[t].jump(o[t] ?? Rw[t]),
                new Promise((n) => {
                  let r = { ...e, onComplete: () => n() },
                    i = a[t] ?? o[t];
                  typeof i == `number` && Pe(u[t], i, r);
                })
              );
          })
        )),
        p.current
      );
    }, [i, r, n, s]),
    [_, v] = m(!1),
    y = g(!1),
    b = l(async () => {
      e && y.current && (await h(), await f(t ?? 0), b());
    }, [h, f, e, t]),
    x = l(() => {
      y.current || ((y.current = !0), c(() => v(!0)), b());
    }, [b]),
    C = l((e = !0) => {
      (Iw.forEach((e) => {
        u[e].stop();
      }),
        Iw.forEach((e) => {
          u[e].set(Rw[e]);
        }),
        (d.current = !1),
        e && ((y.current = !1), c(() => v(!1))));
    }, []),
    w = e && i,
    T = l(() => {
      document.hidden ? C(!1) : y.current && ((y.current = !1), x());
    }, [x, C]);
  (M(() => {
    if (w)
      return (
        document.addEventListener(`visibilitychange`, T),
        () => {
          document.removeEventListener(`visibilitychange`, T);
        }
      );
  }, [w, T]),
    M(() => {
      (w && a) || (w ? x() : C());
    }, [x, C, a, w]),
    M(() => () => C(), [C]));
  let E = g(!1),
    D = l(async () => {
      p.current && (await p.current, !E.current && C());
    }, [C]),
    O = l(
      (e) => {
        e.isIntersecting ? ((E.current = !0), x()) : ((E.current = !1), D());
      },
      [x, D]
    );
  VC(o, O, { enabled: w && a });
  let k = _ || !a;
  return S(() => ({ values: u, style: w && k ? zw : Bw }), [w, k]);
}
function pu(e, t, n, r, i) {
  let a = n / 100 - 1;
  return (i ? (t - r) * a : 0) + -e * a;
}
function mu(e, n, r) {
  let { speed: i = 100, offset: a = 0, adjustPosition: o = !1, parallaxTransformEnabled: s } = e,
    c = j.useRef(null),
    l = ue(),
    u = j.useCallback(
      (e) => (c.current === null || i === 100 ? 0 : pu(e, c.current, i, a, o)),
      [i, a, o]
    ),
    { scrollY: d } = Te(),
    f = Ie(d, u),
    p = ze(o && c.current === null ? `hidden` : r),
    m = ze(0),
    h = t(BC);
  return (
    zc(
      n,
      (e) => {
        if (e === null || !s) return;
        let t = Bc(h, `undefined`, e, null, (e) => {
          ((c.current = e.boundingClientRect.top),
            Ge.update(() => {
              (f.set(u(d.get())), o && p.set(r ?? `initial`));
            }),
            t());
        });
        return t;
      },
      [o, s]
    ),
    Fn(() => {
      s && f.set(0);
    }),
    { values: { y: l || !s ? m : f }, style: s ? { ...zw, visibility: p } : Bw }
  );
}
function hu(e) {
  return typeof e == `object` && !!e;
}
function gu(e) {
  if (hu(e)) return e?.transition;
}
function _u(e, t, n, r, i, a) {
  let o = gu(e);
  return Promise.all(
    Iw.map(
      (s) =>
        new Promise((c) => {
          if (n && s !== `opacity`) return c();
          let l = t.values[s];
          l.stop();
          let u = hu(e) ? (e?.[s] ?? Rw[s]) : Rw[s];
          if ((Ke(u) && (u = u.get()), !H(u))) return c();
          let d = Ae.get(r.current);
          d && d.setBaseTarget(s, u);
          let f;
          if (V(i) && !l?.hasAnimated && Mt.MotionHandoffAnimation) {
            let e = Mt.MotionHandoffAnimation(i, s, Ge);
            e && (f = e);
          } else V(i) && Mt.MotionCancelOptimisedAnimation?.(i, s, Ge);
          a ? l.set(u) : Pe(l, u, { ...o, velocity: 0, startTime: f, onComplete: () => c() });
        })
    )
  );
}
function vu(
  { initial: e, animate: t, exit: n, presenceInitial: r, presenceAnimate: i, presenceExit: a },
  o,
  s,
  c,
  l
) {
  let u = r ?? e,
    d = i ?? t,
    f = a ?? n,
    [p, m] = ge(),
    h = g({ lastPresence: !1, lastAnimate: d, hasMounted: !1, running: !1 }),
    _ = qo(() => {
      let e = u ?? c;
      if (!U(e)) return { values: Lw() };
      let t = {};
      for (let n in e) {
        let r = U(e) ? e[n] : void 0;
        H(r) && (t[n] = r);
      }
      return { values: Lw(t) };
    });
  zc(
    o,
    (e) => {
      let { hasMounted: t } = h.current;
      if (t && d) return;
      let n = Ae.get(e);
      if (n) {
        Object.assign(h.current, { hasMounted: !0 });
        for (let e in _.values) {
          if (!uu(e)) continue;
          let t = c?.[e];
          n.setBaseTarget(e, H(t) ? t : Rw[e]);
        }
      }
    },
    [d]
  );
  let v = ue();
  zc(o, (e) => {
    if (!s) {
      m?.();
      return;
    }
    if (e === null) return;
    if (p !== h.current.lastPresence) {
      (Object.assign(h.current, { lastPresence: p }),
        p
          ? u &&
            d &&
            (Object.assign(h.current, { running: !0 }),
            _u(d, _, v, o, l).then(() => Object.assign(h.current, { running: !1 })))
          : f
            ? (Object.assign(h.current, { running: !0 }),
              _u(f, _, v, o, l)
                .then(() => Object.assign(h.current, { running: !1 }))
                .then(() => m()))
            : m());
      return;
    }
    let { lastAnimate: t, running: n } = h.current;
    !On(d, t) &&
      d &&
      (Object.assign(h.current, { lastAnimate: d }),
      _u(d, _, v, o, l, !n).then(() => Object.assign(h.current, { running: !1 })));
  });
  let y = s && d;
  return S(() => ({ values: _.values, style: y ? zw : Bw }), [y]);
}
function yu(e, t) {
  let n = 0,
    r = e;
  for (; r && r !== t && r instanceof HTMLElement;) ((n += r.offsetTop), (r = r.offsetParent));
  return n;
}
function bu(e, t = 0, n) {
  let r = [],
    i = [];
  for (let a = e.length; a >= 0; a--) {
    let { ref: o, offset: s } = e[a] ?? {};
    if (!o?.current) continue;
    let c = yu(o.current, document.documentElement) - Gw - (s ?? 0) - t,
      l = o.current?.clientHeight ?? 0,
      u = r[r.length - 1],
      d = Math.max(c + l, 0);
    (r.push(c),
      i.unshift(Math.max(c, 0), u === void 0 ? d : Math.min(d, Math.max(u - 1, 0))),
      n?.(a));
  }
  return i;
}
function xu(e, t = 0) {
  return e < t ? `up` : `down`;
}
function Su(e, t, n = {}) {
  let { direction: r, target: i } = e ?? {},
    { repeat: a = !0, enabled: o = !0 } = n,
    s = Pn();
  j.useEffect(() => {
    if (!r || !o) return;
    let e,
      n = 0,
      s,
      c;
    return le((o, { y: l }) => {
      if ((!a && c === i) || l.current > l.scrollLength || l.current < 0) return;
      let u = xu(l.current, e);
      e = l.current;
      let d = u !== s;
      if (((s = u), d)) n = l.current;
      else {
        if (Math.abs(l.current - n) < Kw) return;
        let e = u === r ? i : void 0;
        (e !== c && t(e), (c = e));
      }
    });
  }, [s, r, a, i, o, t]);
}
function Cu(e, t, n) {
  let r = bu(e, t),
    i = [...Jw],
    a = r[0];
  if (!H(a)) return Yw;
  if ((a > 1 && (r.unshift(0, a - 1), i.unshift(`initial`, `initial`)), n)) {
    let e = r[r.length - 1];
    if (!H(e)) return Yw;
    (r.push(e + 1), i.push(`exit`));
  }
  return { inputRange: r, outputRange: i };
}
function wu(e) {
  return {
    x: e?.x ?? Rw.x,
    y: e?.y ?? Rw.y,
    scale: e?.scale ?? Rw.scale,
    opacity: e?.opacity ?? Rw.opacity,
    transformPerspective: e?.transformPerspective ?? Rw.transformPerspective,
    rotate: e?.rotate ?? Rw.rotate,
    rotateX: e?.rotateX ?? Rw.rotateX,
    rotateY: e?.rotateY ?? Rw.rotateY,
    skewX: e?.skewX ?? Rw.skewX,
    skewY: e?.skewY ?? Rw.skewY,
    transition: e?.transition ?? void 0,
  };
}
function Tu({ opacity: e, targetOpacity: t, perspective: n, enter: r, exit: i, animate: a, ...o }) {
  return j.useMemo(
    () => ({
      initial: r ?? wu({ ...o, opacity: e ?? t ?? 1, transformPerspective: n }),
      animate: a ?? wu({ opacity: t }),
      exit: i ?? wu(),
    }),
    [a, o, r, i, e, t, n]
  );
}
function Eu(e, t) {
  let n = ue(),
    r = Tu(e),
    i = e.styleAppearEffectEnabled,
    a = du(i ? r.initial : r.animate, i),
    o = j.useRef({
      isPlaying: !1,
      scheduledAppearState: void 0,
      lastAppearState: !e.styleAppearEffectEnabled,
    }),
    s = Pn(),
    c = j.useRef(),
    l = j.useCallback(async ({ transition: i, ...o }, s) => {
      let l = i ?? r.animate.transition ?? e.transition;
      await c.current;
      let u = Ae.get(t.current);
      c.current = Promise.all(
        Iw.map((e) => {
          s && a.values[e].set(r.initial[e] ?? Rw[e]);
          let t = o[e] ?? Rw[e];
          return (
            u && typeof t != `object` && u.setBaseTarget(e, t),
            new Promise((r) => {
              if (n && e !== `opacity`) (H(t) && a.values[e].set(t), r());
              else {
                let n = { restDelta: e === `scale` ? 0.001 : void 0, ...l, onComplete: () => r() };
                typeof t == `number` && Pe(a.values[e], t, n);
              }
            })
          );
        })
      );
    }, []),
    u = e.animateOnce && o.current.lastAppearState === !0;
  Hc(
    t,
    (e) => {
      let { isPlaying: t, lastAppearState: n } = o.current;
      t
        ? (o.current.scheduledAppearState = e)
        : ((o.current.scheduledAppearState = void 0),
          (o.current.lastAppearState = e),
          n !== e && l(e ? r.animate : r.exit, e));
    },
    {
      enabled: !e.targets && e.styleAppearEffectEnabled && !e.scrollDirection && !u,
      animateOnce: !!e.animateOnce,
      threshold: { y: e.threshold },
    }
  );
  let d = e.targets && i && !e.scrollDirection;
  return (
    j.useEffect(() => {
      if (!d) return;
      let t = { initial: !0 },
        n = `initial`;
      return le((i, { y: a }) => {
        let { targets: o } = e;
        if (!o || !o[0] || (o[0].ref && !o[0].ref.current)) return;
        let { inputRange: s, outputRange: c } = Cu(
          o,
          (e.threshold ?? 0) * a.containerLength,
          !!e.exit
        );
        if (s.length === 0 || s.length !== c.length) return;
        let u = se(a.current, s, c);
        if ((e.animateOnce && t[u]) || ((t[u] = !0), n === u)) return;
        n = u;
        let d = MS(r)[u];
        d && l(d);
      });
    }, [s, d]),
    Su(e.scrollDirection, (e) => void l(e ?? r.animate), { enabled: i, repeat: !e.animateOnce }),
    Fn(() => {
      if (i && (e.targets || e.scrollDirection))
        for (let e of Iw) a.values[e].set(r.initial?.[e] ?? Rw[e]);
    }),
    S(() => ({ values: a.values, style: i ? zw : Bw }), [i])
  );
}
function Du(e, t) {
  let n = j.useRef({});
  j.useEffect(() => {
    if (t !== void 0)
      for (let r of tb(e)) {
        let i = e[r],
          a,
          o;
        function s() {
          let e = n.current[r];
          (e && e.stop(),
            (n.current[r] = Oe({
              keyframes: [i.get(), o],
              velocity: i.getVelocity(),
              ...t,
              restDelta: 0.001,
              onUpdate: a,
            })));
        }
        i.attach((e, t) => ((o = e), (a = t), Ge.postRender(s), i.get()));
      }
  }, [JSON.stringify(t)]);
}
function Ou(e, t) {
  let n = Qw();
  return {
    inputRange: bu(e, t, (t) => {
      let r = e[t - 1]?.target,
        i = e[t]?.target;
      for (let e of Iw) n[e]?.unshift(r?.[e] ?? 0, i?.[e] ?? 0);
    }),
    effectKeyOutputRange: n,
  };
}
function ku(e) {
  let t = Qw();
  for (let { target: n } of e) for (let e of Iw) t[e]?.push(n[e]);
  return t;
}
function Au(
  {
    transformTrigger: e,
    styleTransformEffectEnabled: t,
    transformTargets: n,
    spring: r,
    transformViewportThreshold: a = 0,
  },
  o
) {
  let s = ue(),
    c = du(Zw(n, s), t),
    l = !t || !n,
    u = e === `onScrollTarget`,
    d = Pn();
  return (
    i(() => {
      if (!l && u)
        return le((e, { y: t }) => {
          if (!n[0] || (n[0].ref && !n[0].ref.current)) return;
          let { inputRange: r, effectKeyOutputRange: i } = Ou(n, a * t.containerLength);
          if (r.length !== 0)
            for (let e of Iw)
              (s && e !== `opacity`) ||
                (r.length === i[e].length &&
                  i[e][0] !== void 0 &&
                  c.values[e].set(se(t.current, r, i[e])));
        });
    }, [s, u, a, n, l]),
    zc(
      o,
      (t) => {
        if (l || u || t === null) return;
        let r = ku(n);
        return le(
          (e, { y: t }) => {
            for (let e of Iw)
              (s && e !== `opacity`) ||
                ($w.length === r[e].length &&
                  r[e][0] !== void 0 &&
                  c.values[e].set(se(t.progress, $w, r[e])));
          },
          e === `onInView` ? { target: t ?? void 0, offset: [`start end`, `end end`] } : void 0
        );
      },
      [d, s, e, u, n, l]
    ),
    Du(c.values, r),
    Fn(() => {
      if (l) return;
      let e = Zw(n, s);
      for (let t of Iw) c.values[t].set(e?.[t] ?? Rw[t]);
    }),
    j.useMemo(() => ({ values: c.values, style: t ? zw : Bw }), [t])
  );
}
function ju(e, t, n) {
  return (!(e in n) && t in n) || n[e] === !0;
}
function Mu(e) {
  let t = {
    parallax: {},
    styleAppear: {},
    styleTransform: {},
    presence: { animate: e.animate, initial: e.initial, exit: e.exit },
    loop: {},
    forwardedProps: {},
    targetOpacityValue: e.__targetOpacity,
    withPerspective: e.__perspectiveFX,
    inSmartComponent: e.__smartComponentFX,
  };
  for (let n in e) {
    if (n === `__targetOpacity` || n === `__perspectiveFX` || n === `__smartComponentFX`) continue;
    let r = Zl(n);
    if (r) {
      for (let i of tT)
        if (eT[i]?.has(r)) {
          t[i][r] = MS(e)[n];
          break;
        }
    } else t.forwardedProps[n] = MS(e)[n];
  }
  return (
    (t.parallax.parallaxTransformEnabled = ju(`parallaxTransformEnabled`, `speed`, t.parallax)),
    (t.styleAppear.styleAppearEffectEnabled = ju(
      `styleAppearEffectEnabled`,
      `animateOnce`,
      t.styleAppear
    )),
    t
  );
}
function Nu(e) {
  return U(e) && iT in e;
}
function Pu(e, t) {
  if (!e || !U(e)) return t;
  for (let n in e) {
    let r = e[n];
    Ke(r) && uu(n) && H(r.get()) && t[n].push(r);
  }
}
function Fu(e) {
  return V(e) || Array.isArray(e);
}
function Iu({ componentIdentifier: e, children: n }) {
  return n(t(oT)[e] ?? {});
}
function Lu() {
  return j.useContext(sT);
}
function Ru(e) {
  let t = tc(e),
    { layoutIdKey: n, duplicatedFrom: r, ...i } = e;
  return { layoutId: t, ...i };
}
function zu(e) {
  return (
    e instanceof Error &&
    (e.message.includes(`A component suspended while responding to synchronous input.`) ||
      e.message.includes(`Minified React error #426`))
  );
}
function Bu() {
  if (N === void 0 || pT)
    return /* @__PURE__ */ T(`div`, {
      hidden: !0,
      dangerouslySetInnerHTML: { __html: `<!-- SuspenseThatPreservesDOM fallback rendered -->` },
    });
  throw hT;
}
function Vu({ children: e }) {
  return t(_T)
    ? /* @__PURE__ */ T(_, { children: e })
    : /* @__PURE__ */ T(b, { fallback: gT, children: e });
}
function Hu() {
  return /* @__PURE__ */ T(`div`, {
    hidden: !0,
    dangerouslySetInnerHTML: { __html: `<!-- Code boundary fallback rendered -->` },
  });
}
function Uu(e, t) {
  if (!Tt || Math.random() > 0.01) return;
  let n = e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    r = t?.componentStack;
  dr(`published_site_load_recoverable_error`, {
    message: String(e),
    stack: n,
    componentStack: n ? void 0 : r,
  });
}
function Wu(...e) {
  console.error(...e);
}
function Gu() {
  return G.current() !== G.canvas;
}
function Ku({ getErrorMessage: e, fallback: t, children: n }) {
  return Gu()
    ? /* @__PURE__ */ T(qu, {
        fallback: t,
        children: /* @__PURE__ */ T(yT, { fallback: t, getErrorMessage: e, children: n }),
      })
    : n;
}
function qu({ children: e, fallback: t = vT }) {
  return N === void 0
    ? /* @__PURE__ */ T(b, { fallback: t, children: e })
    : /* @__PURE__ */ T(Vu, { children: e });
}
function Ju() {
  return /* @__PURE__ */ T(`div`, {
    style: {
      padding: `12px 16px`,
      borderWidth: 1,
      borderRadius: 6,
      borderStyle: `solid`,
      borderColor: `rgba(149, 149, 149, 0.15)`,
      backgroundColor: `rgba(149, 149, 149, 0.1)`,
      fontSize: 12,
      color: `#a5a5a5`,
    },
    children: `Code component disabled`,
  });
}
function Yu() {
  return j.useContext(xT);
}
function Xu() {
  let e = Yu();
  return j.useMemo(() => {
    if (!e) return;
    let t = e;
    for (; t.parent && t.parent.level > 0;) t = t.parent;
    return t;
  }, [e]);
}
function Zu({ children: e, scopeId: t, nodeId: n }) {
  let r = Yu(),
    i = j.useMemo(
      () => ({ level: (r?.level ?? 0) + 1, scopeId: t, nodeId: n, parent: r }),
      [t, n, r]
    );
  return /* @__PURE__ */ T(xT.Provider, { value: i, children: e });
}
function Qu(e, t) {
  return `${ST}${e}:${t}`;
}
function $u(e, t) {
  return td(`component`, e, t);
}
function ed(e, t) {
  return td(`override`, e, t);
}
function td(e, t, n) {
  return `A code ${e} crashed while rendering due to the error above. To find and fix it, open the project in the editor → open Quick Actions (press Cmd+K or Ctrl+K) → paste this: ${Qu(t, n)} → click “Show Layer”.`;
}
function nd(e, t, n, r, i, a) {
  let o = id(e, t, n, a);
  return (o && !i && r) || (o && i);
}
function rd(e, t, n, r) {
  return id(e, t, n, r);
}
function id(e, t, n, r) {
  return !!(tt(n) || (n === 1 && r && e === t));
}
function ad(e, t, n, r, i, a) {
  let o = Yu();
  if (tt(t) || tt(n)) return /* @__PURE__ */ T(bT, { children: e });
  let { disableCustomCode: s } = dT();
  return s && r
    ? /* @__PURE__ */ T(Ju, {})
    : (nd(t, o?.scopeId, o?.level, r ?? !1, i ?? !1, a ?? !1) &&
        (e = /* @__PURE__ */ T(Ku, {
          getErrorMessage: $u.bind(null, t, n),
          fallback: null,
          children: e,
        })),
      i && (e = /* @__PURE__ */ T(Zu, { scopeId: t, nodeId: n, children: e })),
      e);
}
function od() {
  if (TT !== void 0 || N === void 0) return;
  let e = Mt.matchMedia(`(any-hover: hover)`);
  ((TT = e.matches),
    e.addEventListener(`change`, function (e) {
      let t = e.matches;
      if (t !== TT) {
        TT = t;
        for (let e of ET) e();
      }
    }));
}
function sd() {
  return (od(), cd());
}
function cd() {
  return TT ?? !1;
}
function ld(e) {
  return (
    ET.add(e),
    od(),
    () => {
      ET.delete(e);
    }
  );
}
function ud(e = !1) {
  let [t, n] = m(e);
  return (
    Tx(function () {
      function e(e = !0) {
        let t = cd();
        e ? c(() => n(t)) : n(t);
      }
      let t = ld(e);
      return (e(!1), t);
    }, []),
    t
  );
}
function dd(e, t, n) {
  let r = {};
  for (let [, i] of e)
    for (let e of i) {
      let i = r[e] ?? t[e] ?? n[e];
      i && (r[e] = i);
    }
  return r;
}
function fd(e) {
  return !(!e || e.placement || e.alignment);
}
function pd(e) {
  switch (e) {
    case `start`:
      return `0%`;
    case `center`:
      return `-50%`;
    case `end`:
      return `-100%`;
    default:
      ut(e);
  }
}
function md(e, t = `center`) {
  switch (e) {
    case `top`:
      return `${pd(t)}, -100%`;
    case `right`:
      return `0%, ${pd(t)}`;
    case `bottom`:
      return `${pd(t)}, 0%`;
    case `left`:
      return `-100%, ${pd(t)}`;
    default:
      return `-50%, -50%`;
  }
}
function hd(e, t) {
  let n = document.elementFromPoint(e, t);
  for (; n;) {
    if (n === document.body) return;
    let e = n.getAttribute(`data-framer-cursor`);
    if (e) return e;
    if (n.hasAttribute(`data-framer-portal-id`)) {
      let e = n.getAttribute(NT);
      ((n = n.parentElement), e && (n = document.getElementById(e) ?? n));
    } else n = n.parentElement;
  }
}
function gd(e) {
  let { registerCursors: r } = t(DT),
    a = qo(() => e),
    o = n();
  i(() => r(a, o), [r, o]);
}
function _d(e) {
  return !!(e && typeof e == `object` && FT in e);
}
function vd(e) {
  return `${e.scopeId}:${e.nodeId}:${e.furthestExternalComponent?.scopeId}:${e.furthestExternalComponent?.nodeId}`;
}
function yd() {
  return G.current() === G.canvas;
}
function bd(e) {
  return e !== void 0 && !!(e.startsWith(`#`) || e.startsWith(`/`) || e.startsWith(`.`));
}
function xd(e, t) {
  try {
    return !!new URL(e).protocol;
  } catch {}
  return t;
}
function Sd(e, t, n, r) {
  if (V(e)) {
    let i = bd(e);
    if (!t.routes || !t.getRoute || !n || !i) return;
    let [a] = e.split(`#`, 2);
    if (a === void 0) return;
    let [o] = a.split(`?`, 2);
    if (o === void 0) return;
    try {
      let { routeId: e } = Ia(t.routes, o, o === ``, r);
      return t.getRoute(e);
    } catch {
      return;
    }
  }
  let { webPageId: i } = e;
  return t.getRoute?.(i);
}
function Cd(e) {
  return V(e) && e.startsWith(`data:${HT}`);
}
function wd(e) {
  if (Cd(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(17),
        r = t.searchParams,
        i = r.has(RT) ? r.get(RT) : void 0,
        a,
        o = r.get(zT),
        s = r.get(BT),
        c = r.get(VT);
      return (
        o &&
          s &&
          c &&
          (a = {
            collection: o,
            collectionItemId: s,
            pathVariables: Object.fromEntries(new URLSearchParams(c).entries()),
          }),
        { target: n === `none` ? null : n, element: i === `none` ? void 0 : i, collectionItem: a }
      );
    } catch {
      return;
    }
}
function Td(e, t, n) {
  let r = t.getAttribute(`data-framer-page-link-target`),
    i,
    a;
  if (r) {
    i = t.getAttribute(`data-framer-page-link-element`) ?? void 0;
    let e = t.getAttribute(`data-framer-page-link-path-variables`);
    e && (a = Object.fromEntries(new URLSearchParams(e).entries()));
  } else {
    let e = t.getAttribute(`href`);
    if (!e) return !1;
    let n = wd(e);
    if (!n?.target) return !1;
    ((r = n.target), (i = n.element ?? void 0), (a = n.collectionItem?.pathVariables));
  }
  let o = i ? t.dataset.framerSmoothScroll !== void 0 : void 0;
  return (e(r, i, Object.assign({}, n, a), o), !0);
}
function Ed(e) {
  if (!Cd(e)) return e;
  let t = wd(e);
  if (!t) return;
  let { target: n, element: r, collectionItem: i } = t;
  if (n) return { webPageId: n, hash: r ?? void 0, pathVariables: Dd(i) };
}
function Dd(e) {
  if (!e) return;
  let t = {};
  for (let n in e.pathVariables) {
    let r = e.pathVariables[n];
    r && (t[n] = r);
  }
  return t;
}
function Od(e, n, r, i, a, o) {
  let s = t(UT),
    c = Xu(),
    u = S(() => ({ scopeId: n, nodeId: r, furthestExternalComponent: c }), [n, r, c]),
    d = jn(),
    f = Nn(),
    { locales: m } = ei(),
    h = S(() => {
      let e = _d(i) ? i : Ed(i);
      if (e) return Sd(e, d, f, m);
    }, [f, i, d, m]),
    g = !!(!yd() && s?.nodeId && u.nodeId),
    _ = l(
      (e) => {
        a.href &&
          (e.preventDefault(),
          e.stopPropagation(),
          Rr(e) ? jd(a.href, ``, `_blank`) : h ? a.navigate?.() : jd(a.href, a.rel, a.target));
      },
      [a, h]
    ),
    y = l(
      (e) => {
        a.href && (e.preventDefault(), e.stopPropagation(), jd(a.href, ``, `_blank`));
      },
      [a]
    ),
    b = l(
      (e) => {
        a.href &&
          e.key === `Enter` &&
          (e.preventDefault(),
          e.stopPropagation(),
          h ? a.navigate?.() : jd(a.href, a.rel, a.target));
      },
      [a, h]
    );
  zc(
    o,
    (e) => {
      e !== null && g && (e.dataset.hydrated = `true`);
    },
    [g]
  );
  let x = e;
  return (
    g &&
      (p.forEach(e, (e) => {
        Ad(e) &&
          (W(
            kd(s),
            "outerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          W(
            kd(u),
            "innerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          LT.collectNestedLink(s, u));
      }),
      (x = p.map(e, (e) => {
        if (!Ad(e)) return e;
        let t = Md(e.type),
          { children: n, ...r } = e.props,
          i = {
            ...r,
            "data-nested-link": !0,
            role: `link`,
            tabIndex: 0,
            onClick: _,
            onAuxClick: y,
            onKeyDown: b,
            as: r.as && Md(r.as),
          },
          a = `ref` in e ? e.ref : void 0;
        return v(t, { ...i, ref: a }, n);
      }))),
    /* @__PURE__ */ T(UT.Provider, { value: u, children: x })
  );
}
function kd(e) {
  return !tt(e?.nodeId);
}
function Ad(e) {
  return w(e) && (Md(e.type) !== e.type || Md(e.props.as) !== e.props.as);
}
function jd(e, t, n) {
  let r = document.createElement(`a`);
  ((r.href = e),
    t && (r.rel = t),
    n && (r.target = n),
    document.body.appendChild(r),
    r.click(),
    r.remove());
}
function Md(e) {
  return e === `a` ? `span` : ee(e) && Ye(e) === `a` ? L.span : e;
}
function Nd({ component: e, props: n }) {
  let r = t(Sw),
    i = v(e, n);
  if ((`variant` in n && n.variant != null) || !r) return i;
  let { activeVariantId: a, humanReadableVariantMap: o } = r;
  if (!a || !o) return i;
  let s = {};
  for (let [e, t] of Object.entries(o)) s[t] = { variant: e };
  return /* @__PURE__ */ T(Dw, { overrides: s, breakpoint: a, children: i });
}
function Pd(e) {
  KT = e;
}
function Fd() {
  return KT;
}
function Id(e, t) {
  return e instanceof HTMLAnchorElement
    ? e
    : e instanceof Element
      ? e === t
        ? null
        : Id(e.parentElement, t)
      : null;
}
function Ld({ children: e }) {
  return /* @__PURE__ */ T(Vu, { children: e });
}
function Rd(e) {
  return E(function (t, n) {
    return /* @__PURE__ */ T(Ld, { children: /* @__PURE__ */ T(e, { ...t, ref: n }) });
  });
}
function zd(e, t, n, r, i, a) {
  let { webPageId: o, hash: s, pathVariables: c, hashVariables: l } = n;
  return Vd(e, t, o, s, a, c, l, i, r);
}
function Bd(e, t, n, r) {
  if (e.routes && e.getRoute && bd(t))
    try {
      let [i, a] = t.split(`#`, 2);
      W(i !== void 0, `A href must have a defined pathname.`);
      let [o] = i.split(`?`, 2);
      W(o !== void 0, `A href must have a defined pathname.`);
      let s = o === ``,
        { routeId: c, pathVariables: l, localeId: u } = Ia(e.routes, o, s, r),
        d = e.getRoute(c);
      if (d)
        return {
          routeId: c,
          route: d,
          href: t,
          elementId: a,
          pathVariables: Object.assign({}, n, l),
          locale: u ? r?.find(({ id: e }) => e === u) : void 0,
        };
    } catch {}
}
function Vd(e, t, n, r, i, a, o, s, c) {
  let l = { ...i, ...a, ...s?.path },
    u = { ...i, ...o, ...s?.hash },
    d = e.getRoute?.(n),
    f = pa(d, {
      currentRoutePath: t?.path,
      currentRoutePathLocalized: t?.pathLocalized,
      currentPathVariables: t?.pathVariables,
      hash: r,
      pathVariables: l,
      hashVariables: u,
      preserveQueryParams: e.preserveQueryParams,
      siteCanonicalURL: e.siteCanonicalURL,
      localeId: c?.id,
    });
  return {
    routeId: n,
    route: d,
    href: f,
    elementId: f.split(`#`, 2)[1],
    pathVariables: l,
    locale: c ?? void 0,
  };
}
function Hd() {
  let e = t(JT),
    n = Nn()?.pathVariables;
  return e || n;
}
function Ud(e, { webPageId: t, hash: n, pathVariables: r }, i) {
  if (t !== e.id || n) return !1;
  if (e.path && e.pathVariables) {
    let t = Object.assign({}, i, r);
    for (let [, n] of e.path.matchAll(qT)) if (!n || e.pathVariables[n] !== t[n]) return !1;
  }
  return !0;
}
function Wd() {
  return !!Wa(`ss-only-routes`);
}
function Gd(e) {
  if (N === void 0) return;
  let t = N.location.href,
    n;
  try {
    n = new URL(e, t);
  } catch {
    return;
  }
  return ((n.hash = ``), n);
}
function Kd(e) {
  return Ua(`rewrite`, e)?.description === `external`;
}
function qd() {
  if (!dT().checkServerSideRouter) return !1;
  if (QT === void 0) {
    let e = Wd();
    (($T = !e && Ar() && Nr() < 16.4), (QT = e || $T));
  }
  return QT;
}
function Jd(e, t) {
  if (e.type === `opaqueredirect` || !e.ok) return { decision: `server` };
  let n = e.headers.get(`Framer-Location`);
  if (n)
    try {
      return { decision: `server`, redirectUrl: new URL(n, t).href };
    } catch {
      return { decision: `server` };
    }
  let r = e.headers.get(`Framer-Site-Id`);
  return r === null
    ? { decision: Kd(e.headers.get(`server-timing`)) ? `server` : `client` }
    : { decision: r === Fd() ? `client` : `server` };
}
async function Yd(e) {
  let t = await fetch(e, {
    method: `HEAD`,
    redirect: `manual`,
    credentials: `same-origin`,
    headers: { "Framer-Navigation": `true` },
  });
  if (
    ($T &&
      t.type !== `opaqueredirect` &&
      t.status !== 0 &&
      t.ok &&
      !t.headers.has(`Framer-Location`) &&
      (($T = !1), Ua(`ss-only-routes`, t.headers.get(`server-timing`)) || (QT = !1)),
    t.status >= 500)
  )
    throw Error(`Transient response status ${t.status}`);
  return Jd(t, e);
}
function Xd(e, t) {
  YT.has(e) && YT.set(e, t);
}
async function Zd(e) {
  await Cr(XT);
  try {
    Xd(e, await Yd(e));
  } catch {
    YT.delete(e);
  }
}
async function Qd(e) {
  try {
    let t = await Yd(e);
    return (Xd(e, t), t);
  } catch {
    return (Zd(e), { decision: `server` });
  }
}
function $d(e) {
  if (!qd()) return;
  let t = Gd(e);
  if (!t || t.origin !== N.location.origin) return;
  let n = t.href;
  YT.has(n) || YT.set(n, Qd(n));
}
function ef(e) {
  let t = Gd(e);
  if (!t) return;
  let n = YT.get(t.href);
  return n && !st(n) ? n : void 0;
}
async function tf(e) {
  let t = Gd(e);
  if (!t) return;
  let n = YT.get(t.href);
  if (n) return st(n) ? Promise.race([n, Cr(ZT).then(() => void 0)]) : n;
}
function nf() {
  let e = d.connection || d.mozConnection || d.webkitConnection || {},
    t = d.deviceMemory && d.deviceMemory < nE,
    n,
    r,
    i;
  function a() {
    ((n = e.effectiveType || ``),
      (r = e.saveData || n.includes(`2g`)),
      (i = n === `3g` || t ? rE : iE));
  }
  (e.addEventListener?.(`change`, a), a());
  let o = new IntersectionObserver(l, { threshold: tE }),
    s = 0;
  async function c(e, t) {
    if (r) return;
    $d(e.navigationUrl);
    let { id: n, preload: a } = e,
      l = sE.get(n);
    if (!l?.size || oE.has(n)) return;
    if (s >= i) {
      setTimeout(() => c(e, t), eE);
      return;
    }
    (++s, oE.add(n));
    let u = a()?.catch(() => {});
    (o.unobserve(t), aE.delete(t));
    for (let e of l) (o.unobserve(e), aE.delete(e));
    (l.clear(), sE.delete(n), await u, --s);
  }
  function l(e) {
    for (let t of e) {
      let e = t.target,
        n = aE.get(e);
      if (!n || oE.has(n.id)) {
        (o.unobserve(e), aE.delete(e));
        continue;
      }
      let r = n.id,
        i = sE.get(r),
        a = sE.get(r)?.size ?? 0;
      t.isIntersecting
        ? (i ? i.add(e) : sE.set(r, /* @__PURE__ */ new Set([e])), setTimeout(() => c(n, e), eE))
        : (i && i.delete(e), a <= 1 && sE.delete(r));
    }
  }
  return (e, t, n, r) => {
    if (!oE.has(n))
      return (
        aE.set(e, { id: n, preload: t, navigationUrl: r }),
        o.observe(e),
        () => {
          (aE.delete(e), o.unobserve(e));
        }
      );
  };
}
function rf(e, t) {
  let n = bd(e),
    r = {
      href: e === `` || xd(e, n) ? e : `https://${e}`,
      target: af(t?.openInNewTab, n),
      rel: n ? void 0 : t?.rel,
    };
  return (
    t?.preserveParams && ((r.href = Kr(r.href ?? e)), (r[`data-framer-preserve-params`] = !0)),
    t?.trackLinkClick &&
      (r.onClick = () => {
        t.trackLinkClick(e);
      }),
    r
  );
}
function af(e, t) {
  return e === void 0 ? (t ? void 0 : `_blank`) : e ? `_blank` : void 0;
}
function of(e, t) {
  console.warn(
    lt(`Failed to resolve slug: ${e instanceof Error ? e.message : (t ?? `Unknown error`)}`)
  );
}
function sf(e, t, n) {
  try {
    let r = t?.get(e.collectionId);
    if (!r)
      return of(void 0, `Couldn't find collection utils for collection id: "${e.collectionId}"`);
    let i = r.getSlugByRecordId(e.collectionItemId, n ?? void 0);
    return st(i) ? i.catch(of) : i;
  } catch (e) {
    of(e);
  }
}
async function cf(e, t, n, r) {
  async function i(e) {
    if (!e) return {};
    let t = {};
    for (let i in e) {
      let a = e[i];
      W(a, `unresolvedSlug should be defined`);
      let o = sf(a, r, n),
        s = st(o) ? await o : o;
      s && (t[i] = s);
    }
    return t;
  }
  let [a, o] = await Promise.allSettled([i(e), i(t)]);
  return {
    path: a.status === `fulfilled` ? a.value : void 0,
    hash: o.status === `fulfilled` ? o.value : void 0,
  };
}
function lf(e, t, n, r, i = []) {
  function a(e) {
    if (!e) return;
    let t = {};
    for (let a in e) {
      let o = e[a];
      if (!o) continue;
      let s = sf(o, r, n);
      st(s) ? i.push(s) : s && (t[a] = s);
    }
    return t;
  }
  let o = { path: a(e), hash: a(t) };
  return i.length > 0 ? Promise.allSettled(i) : o;
}
function uf() {
  let e = Sr();
  return l((t, n, r, i = []) => lf(t, n, r, e, i), [e]);
}
function df({ nodeId: e, clickTrackingId: t, router: n, href: r, activeLocale: i }) {
  let a = Sr();
  return l(
    async (o) => {
      if (!n.pageviewEventData?.current) return;
      let s =
          n.pageviewEventData.current instanceof Promise
            ? await n.pageviewEventData.current
            : n.pageviewEventData.current,
        c = _d(r) ? r : Ed(r);
      if (!_d(c))
        return dr(
          `published_site_click`,
          {
            ...s,
            href: o ? ff(o) : null,
            nodeId: e ?? null,
            trackingId: t || null,
            targetRoutePath: null,
            targetWebPageId: null,
            targetCollectionItemId: null,
          },
          `eager`
        );
      let l = c.webPageId,
        u = n?.getRoute?.(l),
        d = u?.path ?? null,
        f = null;
      if (u?.collectionId && c.pathVariables) {
        let e = a?.get(u.collectionId);
        if (!e) return;
        let [t] = Object.values(c.pathVariables);
        if (V(t)) {
          let n = e.getRecordIdBySlug(t, i || void 0);
          f = (st(n) ? await n : n) ?? null;
        }
      }
      return dr(
        `published_site_click`,
        {
          ...s,
          href: o ? ff(o) : null,
          nodeId: e ?? null,
          trackingId: t ?? null,
          targetRoutePath: d,
          targetWebPageId: l,
          targetCollectionItemId: f,
        },
        `eager`
      );
    },
    [e, t, n, r, i, a]
  );
}
function ff(e) {
  try {
    let t = new URL(e, Mt.document.baseURI);
    return t.origin === Mt.location.origin ? t.pathname + t.search + t.hash : t.href;
  } catch {
    return e;
  }
}
function pf(e, t, n, r, i, a, o) {
  (n(), e.navigate?.(t, r, i, a, o));
}
function mf(e, t, n) {
  return async (r) => {
    let i = Rr(r),
      a = Id(r.target),
      o = !a || a.getAttribute(`target`) === `_blank`,
      s = !i && !o,
      c = () => void t(e);
    s
      ? (r.preventDefault(), n(c))
      : (await $b({
          priority: `user-blocking`,
          ensureContinueBeforeUnload: !0,
          continueAfter: `paint`,
        }),
        c());
  };
}
function hf(e, t, n) {
  return async (r) => {
    let i = await gf(t);
    i.decision === `client` ? n(r) : _f(t ?? e, r, i.redirectUrl);
  };
}
async function gf(e) {
  return !e || !qd()
    ? { decision: `client` }
    : ef(e) || ($d(e), (await tf(e)) ?? { decision: `server` });
}
async function _f(e, t, n) {
  (await $b({ priority: `user-blocking`, ensureContinueBeforeUnload: !0, continueAfter: `paint` }),
    t?.(),
    N.location.assign(vf(e, n)));
}
function vf(e, t) {
  if (!t) return e;
  try {
    let n = new URL(e, N.location.href),
      r = new URL(t);
    return (n.hash && !r.hash && (r.hash = n.hash), r.href);
  } catch {
    return t;
  }
}
function yf(e) {
  let t = ua(e);
  if (t && N.location.pathname === t) {
    let e = new URL(N.location.href);
    return ((e.pathname = `${t}/`), e.href);
  }
  return N.location.href;
}
function bf(e, t, n) {
  if (t || N === void 0) return;
  let r = yf(n),
    i;
  try {
    i = new URL(e, r);
  } catch {
    return;
  }
  let a = new URL(r);
  if (i.origin === a.origin && (i.pathname !== a.pathname || i.search !== a.search)) return i.href;
}
function xf(e, t, n, r, i, a, o, s) {
  if (!n) return rf(e, r);
  let c = Bd(t, e, s, o);
  if (!c) return rf(e, r);
  let { routeId: l, route: u, elementId: d, pathVariables: f, locale: p } = c;
  if (!u) return rf(e, r);
  let m = pa(u, {
      currentRoutePath: n.path,
      currentRoutePathLocalized: n.pathLocalized,
      currentPathVariables: n.pathVariables,
      hash: d,
      pathVariables: f,
      preserveQueryParams: t.preserveQueryParams && !Et,
      siteCanonicalURL: t.siteCanonicalURL,
      localeId: a,
    }),
    h = af(r.openInNewTab, !0),
    g = h === `_blank`,
    _ = bf(m, g, t.siteCanonicalURL),
    v = { pathVariables: f, locale: p },
    y = hf(m, _, (e) =>
      pf(
        t,
        l,
        () =>
          i(l, v, { priority: `user-blocking`, yieldBeforePreload: !1, shouldLoadRouteData: !g }),
        d,
        f,
        r.smoothScroll,
        e
      )
    );
  return {
    href: m,
    target: h,
    onClick: mf(m, r.trackLinkClick, y),
    navigate: y,
    "data-framer-page-link-current":
      (n && Ud(n, { webPageId: l, hash: d, pathVariables: f }, s)) || void 0,
    preload: () =>
      i(l, v, { priority: `background`, yieldBeforePreload: !0, shouldLoadRouteData: !g }),
    _routeId: l,
    _pathVariables: f,
    _locale: p,
    _navigationUrl: _,
  };
}
function Sf(e, t, n) {
  let r = Cf(e.style, t.style),
    i = { ...e, ...t, ...(r && { style: r }), ref: n },
    { onTap: a, onClick: o } = t;
  if (!a && !o) return i;
  let { onClick: s, onTap: c } = e;
  return {
    ...i,
    onClick:
      o || s
        ? (e) => {
            (Ze(s) && s?.(e), o?.(e));
          }
        : void 0,
    onTap:
      a || c
        ? (e, t) => {
            (Ze(c) && c?.(e, t), a?.(e, t));
          }
        : void 0,
  };
}
function Cf(e, t) {
  let n = U(e) ? e : void 0,
    r = n && !et(n),
    i = t && !et(t);
  if (r || i) return { ...n, ...t };
}
function wf(e, t, n) {
  if (!(t && Er())) return e;
  let { onClick: r, ...i } = e;
  return r ? (n ? { ...i, onTap: r, onClick: Tf } : { ...i, onTap: r }) : e;
}
function Tf(e) {
  let t = Id(e.target);
  t && t.getAttribute(`target`) !== `_blank` && e.preventDefault();
}
function Ef(e, t, n, r, i, a) {
  let o = _d(e) ? e : Ed(e);
  if (!_d(o)) return V(e) ? rf(e).href : void 0;
  if (!t.getRoute || !t.currentRouteId) return;
  let s = t.getRoute(t.currentRouteId),
    {
      webPageId: c,
      hash: l,
      pathVariables: u,
      hashVariables: d,
      unresolvedHashSlugs: f,
      unresolvedPathSlugs: p,
    } = o,
    m = t.getRoute(c),
    h = p || f ? a?.(p, f) : void 0;
  if (st(h)) return;
  let g = Object.assign({}, t.currentPathVariables, n, u, h?.path),
    _ = Object.assign({}, t.currentPathVariables, n, d, h?.hash);
  return pa(m, {
    currentRoutePath: s?.path,
    currentRoutePathLocalized: s?.pathLocalized,
    currentPathVariables: t.currentPathVariables,
    hash: l,
    pathVariables: g,
    hashVariables: _,
    relative: !1,
    preserveQueryParams: t.preserveQueryParams,
    onlyHash: r,
    siteCanonicalURL: t.siteCanonicalURL,
    localeId: i?.id,
    localeSlug: i?.slug,
  });
}
function Df() {
  return function () {
    async function e(e) {
      let t = new TextEncoder().encode(e),
        n = await crypto.subtle.digest(`SHA-256`, t);
      return Array.from(new Uint8Array(n))
        .map((e) => e.toString(16).padStart(2, `0`))
        .join(``);
    }
    function t(e) {
      let t = ``;
      for (let n = 0; n < e; n++)
        t += `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`.charAt(
          Math.floor(Math.random() * 62)
        );
      return t;
    }
    addEventListener(`message`, async (n) => {
      let { salt: r, difficulty: i, tokenLength: a, maxTime: o } = n.data,
        s = `0`.repeat(i),
        c = performance.now(),
        l = !0;
      for (; l;) {
        if (performance.now() - c > o) {
          ((l = !1), postMessage({ success: !1 }));
          return;
        }
        let n = t(a),
          i = `${Date.now()}:${n}`,
          u = await e(r + i);
        if (u.startsWith(s)) {
          postMessage({ success: !0, secret: i, hash: u });
          return;
        }
      }
    });
  }.toString();
}
async function Of() {
  return new Promise((e, t) => {
    let n = URL.createObjectURL(new Blob([`(`, Df(), `)()`], { type: `application/javascript` })),
      r = new Worker(n);
    ((r.onmessage = (t) => {
      (r.terminate(),
        URL.revokeObjectURL(n),
        t.data.success ? e({ secret: t.data.secret, hash: t.data.hash }) : e(void 0));
    }),
      (r.onerror = (e) => {
        (r.terminate(), URL.revokeObjectURL(n), t(e));
      }),
      r.postMessage({ salt: uE, difficulty: dE, tokenLength: fE, maxTime: pE }));
  });
}
function kf(e) {
  let t = /* @__PURE__ */ new Set();
  for (let n of e.elements)
    Af(n) && !n.disabled && n.name && (n.name.startsWith(`__framer`) || t.add(n.name));
  return Array.from(t);
}
function Af(e) {
  return (
    e instanceof HTMLSelectElement ||
    e instanceof HTMLTextAreaElement ||
    (e instanceof HTMLInputElement &&
      ![`file`, `submit`, `reset`, `button`, `image`].includes(e.type))
  );
}
function jf(e, t) {
  let n = Array.from(t.keys()).filter((t) => !e.includes(t));
  return [...e, ...n].map(encodeURIComponent).join(`,`);
}
function Mf(e, t) {
  try {
    let n = t.cookie.match(`(^|;) ?framerFormsUTMTags=([^;]*)(;|$)`);
    if (n !== null && n[2]) {
      let t = JSON.parse(decodeURIComponent(n[2]));
      if (!t || typeof t != `object`) return;
      [`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `gclid`].forEach(
        (n) => {
          typeof t[n] == `string` && e.append(n, t[n]);
        }
      );
    }
  } catch {}
}
function Nf() {
  let e = j.useContext(DE),
    t = j.useMemo(
      () =>
        gE.map((e) => ({
          inputRef: j.createRef(),
          originalName: e,
          methodsUsed: { setAttribute: !1, valueProperty: !1 },
        })),
      []
    );
  return {
    states: t,
    convertHoneypotFieldsForSubmission: j.useCallback(() => {
      t.forEach((e) => {
        let t = e.inputRef.current;
        t && (t.name = `${mE}_${e.originalName}`);
      });
    }, [t]),
    replaceHoneypotWithMetadata: j.useCallback(
      (n) => {
        let r = t.length,
          i = 0,
          a = [];
        (t.forEach((e) => {
          let t = e.inputRef.current;
          if (t) {
            let r = t.name,
              o = t.value;
            if (o) {
              i++;
              let t = {
                [vE.name]: e.originalName,
                [vE.value]: o,
                [vE.setAttribute]: e.methodsUsed.setAttribute,
                [vE.valueProperty]: e.methodsUsed.valueProperty,
                [vE.isInputEventTrusted]: e.methodsUsed.isInputEventTrusted,
                [vE.inputChangeTimeSinceModuleLoad]: e.methodsUsed.inputChangeTimeSinceModuleLoad,
                [vE.wasFilledBeforeHydration]: e.methodsUsed.wasFilledBeforeHydration,
              };
              a.push(JSON.stringify(t));
            }
            (n.delete(r), (t.name = e.originalName));
          }
        }),
          n.append(`${mE}_${yE.fieldData}`, `[${a.join(`,`)}]`),
          n.append(`${mE}_${yE.fieldCount}`, r.toString()),
          n.append(`${mE}_${yE.fieldFilledCount}`, i.toString()),
          n.append(`${mE}_${yE.hpVersion}`, hE),
          n.append(`${mE}_${yE.siteId}`, e || ``),
          n.append(`${mE}_${yE.timeToSubmissionSinceModuleLoad}`, bE()));
      },
      [t, e]
    ),
  };
}
function Pf({ states: e }) {
  return /* @__PURE__ */ T(_, {
    children: e.map((e) => /* @__PURE__ */ T(xE, { inputStateRef: e }, `hp_${e.originalName}`)),
  });
}
function Ff({ router: e, nodeId: t, submitTrackingId: n }) {
  e?.pageviewEventData?.current &&
    (e.pageviewEventData.current instanceof Promise
      ? e.pageviewEventData.current.then((e) => {
          If(e, t, n);
        })
      : If(e.pageviewEventData.current, t, n));
}
function If(e, t, n) {
  return dr(
    `published_site_form_submit`,
    { ...e, nodeId: t ?? null, trackingId: n || null },
    `eager`
  );
}
function Lf({ state: e }, { type: t }) {
  switch (t) {
    case `complete`:
      return e === `error` ? EE : TE;
    case `incomplete`:
      return e === `error` ? EE : wE;
    case `submit`:
      return SE;
    case `success`:
      return CE;
    case `error`:
      return EE;
    default:
      ut(t);
  }
}
function Rf({ state: e }) {
  return e === `incomplete` || e === `complete`;
}
function zf(e) {
  e.preventDefault();
}
function Bf(e, t) {
  let n = xd(e, !1) ? e : `https://${e}`,
    r = document.createElement(`a`);
  ((r.href = n),
    (r.target = `_self`),
    (r.style.display = `none`),
    t.current && (t.current.appendChild(r), r.click(), r.remove()));
}
function Vf(e) {
  if (e.children.length === 0) return !1;
  for (let t of e.children)
    if (
      t instanceof HTMLInputElement ||
      t instanceof HTMLTextAreaElement ||
      t instanceof HTMLSelectElement
    ) {
      if (t.required && t.value === ``) return !0;
    } else if (Vf(t)) return !0;
  return !1;
}
async function Hf(e, t, n, r) {
  let i = await Of();
  if (!i) throw Error(`Failed to calculate proof of work`);
  let a = { "Framer-Site-Id": r, "Framer-POW": i.secret, "Framer-Form-Fields": jf(n, t) },
    o = await fetch(e, { body: t, method: `POST`, headers: a });
  if (o.ok) return o;
  {
    let e = await o.json(),
      t = `Failed to submit form`;
    throw Uf(e) ? Error(`${t} - ${e.error.message}`) : Error(t);
  }
}
function Uf(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `error` in e &&
    U(e.error) &&
    `message` in e.error &&
    typeof e.error.message == `string`
  );
}
function Wf({ EditorBar: e, fast: n = !1 }) {
  let i = t(DE),
    a = r(kt, n ? jE : ME, jt),
    o = dT(),
    s = S(() => {
      let e = {},
        t;
      for (t in o)
        o.hasOwnProperty(t) &&
          (t.startsWith(`editorBar`) || t.startsWith(`onPage`)) &&
          (e[t] = o[t]);
      return e;
    }, [o]);
  return !e || !i || !a
    ? null
    : /* @__PURE__ */ T(AE, {
        children: /* @__PURE__ */ T(b, {
          children: /* @__PURE__ */ T(e, { framerSiteId: i, features: s }),
        }),
      });
}
function Gf(e, t) {
  return e.replace(tx, (e, n) => {
    let r = t[n];
    return typeof r != `string` || r.length === 0 ? e : encodeURIComponent(r);
  });
}
function Kf({ currentRoutePath: e, routerAPI: t, children: n }) {
  let r = g(),
    i = g(),
    a = g(t),
    o = g(null);
  ((a.current = t),
    M(() => {
      e && ((r.current ??= /* @__PURE__ */ new Set()), r.current.add(e), i.current?.(e));
    }, [e]));
  let [s] = m(() => ({
    getInitialState: () => ({
      visitedPages: r.current ?? /* @__PURE__ */ new Set(),
      getCurrentRoutePath: () =>
        a.current ? Jf(a.current, a.current.currentRouteId, a.current.currentPathVariables) : ``,
      resolveRoute: (e) => (a.current ? Jf(a.current, e.webPageId, e.pathVariables) : ``),
      setRouteChangeHandler: (e) => {
        i.current = e;
      },
      sendTrackingEvent: async (e) => {
        a.current && qf(a.current.pageviewEventData.current, e);
      },
    }),
    triggerStateRef: o,
  }));
  return /* @__PURE__ */ T(NE.Provider, { value: s, children: n });
}
async function qf(e, t) {
  if (!fr(t.trackingId)) return;
  let n = e instanceof Promise ? await e : e;
  n &&
    dr(`published_site_trigger_invoke`, { ...n, ...t, trackingId: t.trackingId || null }, `lazy`);
}
function Jf(e, t, n) {
  let r = e.getRoute(t);
  return r?.path ? (n ? Gf(r.path, n) : r.path) : ``;
}
function Yf(e, t) {
  if (e.routeId !== t.routeId) return !1;
  if (e.pathVariables === t.pathVariables) return !0;
  let n = e.pathVariables || {},
    r = t.pathVariables || {};
  return n.length === r.length && Object.keys(n).every((e) => n[e] === r[e]);
}
function Xf() {
  let e = Intl.DateTimeFormat().resolvedOptions();
  ((PE = e.timeZone), (FE = e.locale));
}
function Zf({
  routeId: e,
  url: t,
  pathVariables: n,
  localeId: r,
  contentLocaleId: i,
  canonicalPathVariables: a,
}) {
  Hi(
    {
      routeId: e,
      pathVariables: n,
      localeId: r,
      paginationInfo: Ni()?.paginationInfo,
      contentLocaleId: i,
      canonicalPathVariables: a,
    },
    t
  );
}
function Qf(e, t, n) {
  let { path: r } = t;
  if (!r) return;
  let {
      historyPath: i,
      hash: a,
      pathVariables: o,
      localeId: s,
      currentRoutePath: c,
      contentLocaleId: l,
      canonicalPathVariables: u,
    } = n,
    d = c !== void 0 && c === r,
    f = Ni();
  Hi(
    {
      routeId: e,
      hash: a,
      pathVariables: o,
      contentLocaleId: l,
      canonicalPathVariables: u,
      localeId: s,
      queryParamBackAnchorSearch: d ? f?.queryParamBackAnchorSearch : void 0,
    },
    i
  );
}
function $f(e, t, n, r) {
  let i = Ni();
  t.path &&
    i?.hash !== n.hash &&
    (r?.(),
    Hi(
      {
        routeId: e,
        hash: n.hash,
        pathVariables: n.pathVariables,
        localeId: n.localeId,
        queryParamBackAnchorSearch: i?.queryParamBackAnchorSearch,
        paginationInfo: i?.paginationInfo,
        contentLocaleId: i?.contentLocaleId,
        canonicalPathVariables: i?.canonicalPathVariables,
      },
      pa(t, n)
    ));
}
function ep() {
  return Nr() >= 17 ? zE : RE;
}
function tp(e = sp) {
  let t = (e) => {
    e.persisted && up();
  };
  Ar() && (N.addEventListener(`pageshow`, t), (LE = Date.now() - ep()));
  let n = np(),
    r = cp(e);
  return function () {
    (N.removeEventListener(`pageshow`, t), n(), r());
  };
}
function np() {
  let e = N.history.scrollRestoration;
  return (
    (N.history.scrollRestoration = `manual`),
    function () {
      N.history.scrollRestoration = e;
    }
  );
}
function rp(e) {
  return U(e) && typeof e.x == `number` && typeof e.y == `number`;
}
function ip() {
  return { x: N.scrollX, y: N.scrollY };
}
function ap() {
  let e = Ni();
  if (!e) return;
  let { scrollPosition: t } = e;
  if (rp(t)) return t;
}
function op(e) {
  let t = Ni();
  t && (Bi({ ...t, scrollPosition: e }), Ar() && (LE = Date.now()));
}
function sp(e, t = !1) {
  let n = ap();
  if (!(n && n.x === e.x && n.y === e.y)) {
    if (Ar() && !t) {
      let e = ep();
      if (Date.now() - LE < e) return;
    }
    op(e);
  }
}
function cp(e) {
  let t = () => {
      e(ip());
    },
    n = () => {
      e(ip(), !0);
    },
    r = () => {
      document.visibilityState === `hidden` && n();
    };
  (document.addEventListener(`visibilitychange`, r), N.addEventListener(`pagehide`, n));
  let i = () => {
    (document.removeEventListener(`visibilitychange`, r), N.removeEventListener(`pagehide`, n));
  };
  if (!(`onscrollend` in N)) {
    let e = lp(t);
    return function () {
      (i(), e());
    };
  }
  return (
    N.addEventListener(`scrollend`, t),
    function () {
      (i(), N.removeEventListener(`scrollend`, t));
    }
  );
}
function lp(e) {
  let t, n;
  function r() {
    (clearTimeout(t), (t = void 0), (n = void 0));
  }
  let i = () => {
      let t = n;
      (r(), t !== void 0 && Pi(Ni()) === t && e());
    },
    a = () => {
      let e = Pi(Ni());
      if (e === void 0) {
        r();
        return;
      }
      (clearTimeout(t), (n = e));
      let a = Ar() ? ep() : 100;
      t = N.setTimeout(i, a);
    };
  return (
    N.addEventListener(`scroll`, a),
    function () {
      (N.removeEventListener(`scroll`, a), r());
    }
  );
}
function up() {
  let e = ap();
  return e ? (N.scrollTo(e.x, e.y), !0) : !1;
}
function dp(e, t) {
  let n = t ? { behavior: `smooth`, block: `start`, inline: `nearest` } : void 0;
  e.scrollIntoView(n);
}
function fp(e, t) {
  let n = e && document.getElementById(e);
  if (n) return (dp(n, t), !0);
}
function pp(e, t, n) {
  n !== `preserve-scroll-position` &&
    Ge.render(
      () => {
        (n === `restore-scroll-position` && up()) || fp(e, t) || N.scrollTo(0, 0);
      },
      !1,
      !0
    );
}
function mp(e, t) {
  Ge.read(() => {
    N.scrollY === 0 &&
      N.scrollX === 0 &&
      Ge.render(
        () => {
          up() || fp(e, t);
        },
        !1,
        !0
      );
  });
}
function hp(e) {
  let t = dT().scrollRestoration,
    n = g(void 0),
    r = g(!1),
    a = !(!t || e),
    o = l(
      (e) => {
        ((n.current = e), a && (r.current = !0));
      },
      [a]
    ),
    s = l((e, t = !1) => {
      r.current || sp(e, t);
    }, []),
    c = l(() => {
      a && (r.current = !0);
    }, [a]),
    u = l(() => n.current !== void 0 || r.current, []),
    d = l((e, t) => {
      let i = n.current;
      i &&
        i.routeId === e &&
        i.remountKey === t &&
        ((n.current = void 0), (r.current = !1), pp(i.hash, i.shouldSmoothScroll, i.behavior));
    }, []);
  return (
    i(() => {
      if (a) return tp(s);
    }, [a, s]),
    {
      usesCustomScrollRestoration: a,
      isNavigationCommitPending: u,
      onHistoryTraversal: c,
      scheduleScroll: o,
      commitNavigationScroll: d,
    }
  );
}
function gp({ currentRouteId: e, remountKey: t, scrollRestoration: n }) {
  let { commitNavigationScroll: r, usesCustomScrollRestoration: a } = n;
  return (
    i(() => {
      r(e, t);
    }),
    M(() => {
      a && mp(N.location.hash.slice(1) || void 0, !1);
    }, []),
    null
  );
}
function _p() {
  let [e, t] = j.useState(0);
  return [e, j.useCallback(() => t((e) => e + 1), [])];
}
function vp({ children: e, loadSnippetsModule: t }) {
  return /* @__PURE__ */ T(XE.Provider, { value: t, children: e });
}
function yp() {
  return j.useContext(XE);
}
function bp(e) {
  return { start: `<!-- Snippet: ${e} -->`, end: `<!-- SnippetEnd: ${e} -->` };
}
async function xp(e, t, n = `beforeend`) {
  let r, i;
  switch (n) {
    case `beforebegin`:
      (W(t.parentNode, `Can't use 'beforebegin' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t));
      break;
    case `afterend`:
      (W(t.parentNode, `Can't use 'afterend' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t.nextSibling));
      break;
    case `afterbegin`:
      ((r = t), (i = t.firstChild));
      break;
    case `beforeend`:
      ((r = t), (i = null));
      break;
    default:
      ut(n);
  }
  let a = document.createRange();
  (a.selectNodeContents(r), await Sp(a.createContextualFragment(e), r, i));
}
async function Sp(e, t, n) {
  for (let r = e.firstChild; r; r = r.nextSibling) {
    if (r instanceof HTMLScriptElement) {
      let e = Cp(r, t, n);
      e !== void 0 && (await e);
      continue;
    }
    let e = r.cloneNode(!1);
    (t.insertBefore(e, n), r.firstChild && (await Sp(r, e, null)));
  }
}
function Cp(e, t, n) {
  let r = e.cloneNode(!0);
  if (
    !e.hasAttribute(`src`) ||
    e.hasAttribute(`async`) ||
    e.hasAttribute(`defer`) ||
    e.getAttribute(`type`)?.toLowerCase() === `module`
  )
    t.insertBefore(r, n);
  else return wp(r, t, n);
}
function wp(e, t, n) {
  return new Promise((r) => {
    ((e.onload = e.onerror = r), t.insertBefore(e, n));
  });
}
function Tp(e) {
  let t, n;
  switch (e) {
    case `bodyStart`:
      ((t = KE), (n = qE));
      break;
    case `bodyEnd`:
      ((t = JE), (n = YE));
      break;
    case `headStart`:
      ((t = HE), (n = UE));
      break;
    case `headEnd`:
      ((t = WE), (n = GE));
  }
  let r = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head,
    i = null,
    a = null;
  for (let e of r.childNodes) {
    if (e.nodeType !== Node.COMMENT_NODE) continue;
    let r = `<!--${e.nodeValue}-->`;
    r === t ? (i = e) : r === n && (a = e);
  }
  return { start: i, end: a };
}
function Ep(e, t, n) {
  if (!t || !n) return { start: null, end: null };
  let r = null,
    i = null,
    { start: a, end: o } = bp(e),
    s = t.nextSibling;
  for (; s && s !== n;) {
    if (s.nodeType !== Node.COMMENT_NODE) {
      s = s.nextSibling;
      continue;
    }
    let e = `<!--${s.nodeValue}-->`;
    if (e === a) r = s;
    else if (e === o) {
      i = s;
      break;
    }
    s = s.nextSibling;
  }
  return { start: r, end: i };
}
async function Dp(e, t, n) {
  if (t.length === 0) return;
  let { start: r, end: i } = Tp(e),
    a = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head;
  for (let e of t) {
    let { start: t, end: o } = Ep(e.id, r, i),
      s = t && o;
    if (s && e.loadMode === `once`) continue;
    if ((Op(t, o), s)) {
      await xp(e.code, o, `beforebegin`);
      continue;
    }
    let { start: c, end: l } = bp(e.id),
      u = `${c}\n${e.code}\n${l}`,
      d = Ap(e.id, n, r, i);
    d ? await xp(u, d, `afterend`) : await xp(u, r ?? a, r ? `afterend` : `beforeend`);
  }
}
function Op(e, t) {
  if (!e || !t) return;
  let n = e.nextSibling;
  for (; n && n !== t;) {
    let e = n.nextSibling;
    (kp(n) && n.remove(), (n = e));
  }
}
function kp(e) {
  if (e.nodeType !== Node.ELEMENT_NODE) return !0;
  if (e.nodeName === `SCRIPT`) {
    let t = e.type;
    if (!t || t === `text/javascript` || t === `module`) return !1;
  }
  return !0;
}
function Ap(e, t, n, r) {
  let i = t.indexOf(e) - 1;
  if (i < 0) return null;
  for (let e = i; e >= 0; e--) {
    let i = t[e];
    if (!i) continue;
    let a = Ep(i, n, r).end;
    if (a) return a;
  }
  return null;
}
function jp() {
  let e = yp();
  return l(
    async (t, n, r, i) => {
      if (!e) return;
      let a = document.getElementById(BE)?.dataset[VE] !== void 0;
      if (i && a) return;
      let { getSnippets: o, snippetsSorting: s } = await e.readMaybeAsync(),
        c = await o(t, n, r);
      for (let e in c) {
        let t = e,
          n = c[t],
          r = s[t];
        await Dp(t, n, r);
      }
    },
    [e]
  );
}
function Mp(e, t) {
  e.startsWith(`/`) && (e = `.` + e);
  let n = new URL(t);
  return (n.pathname.endsWith(`/`) || (n.pathname += `/`), new URL(e, n).href);
}
async function Np({
  siteCanonicalURL: e,
  activeLocale: t,
  contentLocale: n,
  currentRoute: r,
  currentRouteId: i,
  currentPathVariables: a,
  locales: o,
  collectionUtils: s,
}) {
  if (!e || !t || !n || !r) return;
  let c,
    l = [],
    u = o.find((e) => e.id === ob),
    { path: d } = await Xr({
      currentLocale: t,
      nextLocale: n,
      defaultLocale: u,
      route: r,
      routeId: i,
      pathVariables: a,
      collectionUtils: s,
      preserveQueryParams: !1,
    });
  d && (c = Mp(d, e));
  let f;
  for (let n of o) {
    if (r.includedLocales && !r.includedLocales.includes(n.id)) continue;
    let { path: o, isMissingInLocale: c } = await Xr({
      currentLocale: t,
      nextLocale: n,
      defaultLocale: u,
      route: r,
      routeId: i,
      pathVariables: a,
      collectionUtils: s,
      preserveQueryParams: !1,
    });
    if (!o || c) continue;
    let d = Mp(o, e);
    (l.push({ href: d, hrefLang: n.code }), n.id === "default" && (f = d));
  }
  return (
    f && l.push({ href: f, hrefLang: `x-default` }),
    () => {
      (Oi(c, N.location.href), ki(l));
    }
  );
}
function Pp({
  activeLocale: e,
  contentLocale: t,
  currentPathVariables: n,
  currentRoute: r,
  currentRouteId: i,
  isInitialNavigation: a,
  locales: o,
  siteCanonicalURL: s,
}) {
  let c = Sr(),
    l = jp();
  M(() => {
    let u = !0,
      d = () => void (u = !1);
    return !e || !t
      ? (l(i, n ?? {}, e, a).catch((e) => {
          u && Uu(e);
        }),
        d)
      : ((e.id === t.id
          ? /* @__PURE__ */ Br()
          : Xr({
              currentLocale: e,
              nextLocale: t,
              defaultLocale: o.find(({ id: e }) => e === ob),
              route: r,
              routeId: i,
              pathVariables: n,
              collectionUtils: c,
              preserveQueryParams: !1,
            })
        )
          .then(async (d) => {
            if (!u) return;
            let f = d ? d.pathVariables : n;
            if ((await l(i, f ?? {}, t, a), !u)) return;
            let p = await Np({
              siteCanonicalURL: s,
              activeLocale: e,
              contentLocale: t,
              currentRoute: r,
              currentRouteId: i,
              currentPathVariables: n,
              locales: o,
              collectionUtils: c,
            });
            u && p?.();
          })
          .catch((e) => {
            u && Uu(e);
          }),
        d);
  }, [e, c, t, n, r, i, a, l, o, s]);
}
function Fp(e) {
  if (!e) return wt;
  let t = !1;
  return () => {
    t || ((t = !0), e?.());
  };
}
function Ip(e) {
  let t = Ji(e),
    n = g(void 0),
    r = l(() => {
      (n.current?.abort(), (n.current = void 0));
    }, []);
  return {
    startNavigation: l(
      async (e, i, a, o = !0) => {
        r();
        let s = o ? new AbortController() : void 0;
        n.current = s;
        let c = s?.signal,
          l = Rn(c);
        if ((i.promise.finally(l), a === void 0)) return (e(c), i.promise);
        let u,
          d = new Promise((e, t) => {
            ((u = e), c?.addEventListener(`abort`, t));
          }).catch(wt);
        if ((t(d, s, a), e(c), await i.promise, c?.aborted)) return;
        let f = N.navigation?.transition;
        u();
        try {
          await f?.finished;
        } catch (e) {
          console.error(`Navigation transition failed`, e);
        }
        c?.aborted || yx();
      },
      [r, t]
    ),
    cancelPendingNavigation: r,
  };
}
function Lp({
  defaultPageStyle: e,
  disableHistory: t,
  initialPathVariables: n,
  initialRoute: r,
  notFoundPage: a,
  collectionUtils: o,
  routes: s,
  initialLocaleId: d,
  initialCollectionItemId: f,
  initialContentLocaleIdOverride: p,
  locales: m = ab,
  initialCanonicalPathVariables: h,
  preserveQueryParams: _ = !1,
  LayoutTemplate: v,
  EditorBar: y,
  siteCanonicalURL: b,
  adaptLayoutToTextDirection: x,
}) {
  (Oa(),
    Ui({
      disabled: t,
      routeId: r,
      initialPathVariables: n,
      initialLocaleId: d,
      initialContentLocaleId: p,
      initialCanonicalPathVariables: h,
    }));
  let w = Ei(),
    [E, D] = _p(),
    O = ji(`framer-route-change`),
    k = S(() => (!dT().synchronousNavigationOnDesktop || !Lr() ? c : (e) => e()), []),
    A = g(!0),
    j = g(),
    P = g(0),
    F = g(r),
    I = g(n),
    ee = g(),
    L = g(d),
    te = hp(t),
    { isNavigationCommitPending: ne, usesCustomScrollRestoration: re } = te,
    { startNavigation: ie, cancelPendingNavigation: ae } = Ip(re),
    oe = Sr(),
    se = te.scheduleScroll,
    ce = L.current,
    R = F.current,
    z = I.current,
    le = s[R],
    ue = le?.path;
  if (!le) throw Error(`Router cannot find route for ${R}`);
  let de = S(() => m.find(({ id: e }) => e === ob), [m]),
    B = S(() => m.find(({ id: e }) => (ce ? e === ce : e === "default")) ?? null, [ce, m]),
    {
      contentLocale: fe,
      currentCanonicalPathVariables: pe,
      pageExistsInCurrentLocale: me,
      setRouteContentState: he,
    } = zp({
      activeLocale: B,
      currentRoute: le,
      initialCanonicalPathVariables: h,
      initialContentLocaleIdOverride: p,
      locales: m,
      routes: s,
    }),
    ge = B?.textDirection ?? `ltr`,
    _e = x ? ge : `ltr`;
  i(() => {
    x && document.documentElement.setAttribute(`dir`, ge);
  }, [ge, x]);
  let ve = B?.code;
  i(() => {
    ve && document.documentElement.setAttribute(`lang`, ve);
  }, [ve]);
  let ye = Ki(),
    be = S(
      () => ({
        activeLocale: B,
        contentLocale: fe,
        locales: m,
        setLocale: async (e) => {
          let n = ++P.current,
            r = O({ localized: !0 });
          if ((await $b({ priority: `user-blocking`, continueAfter: `paint` }), n !== P.current)) {
            r.ignore?.();
            return;
          }
          let i;
          V(e) ? (i = e) : U(e) && (i = e.id);
          let a = m.find(({ id: e }) => e === i);
          if (!a) {
            r.ignore?.();
            return;
          }
          let o = F.current,
            c = s[o];
          if (!c) {
            r.ignore?.();
            return;
          }
          let l = ua(b);
          try {
            let e = await ye({
              currentLocale: B,
              nextLocale: a,
              route: c,
              routeId: o,
              defaultLocale: de,
              pathVariables: I.current,
              preserveQueryParams: _,
              sitePrefix: l,
            });
            if (!e || n !== P.current) {
              r.ignore?.();
              return;
            }
            let i = e.path && l + e.path,
              { contentLocaleId: s, canonicalPathVariables: u } = await $r({
                activeLocale: a,
                defaultLocale: de,
                collectionUtilsCache: oe,
                locales: m,
                pathVariables: e.pathVariables,
                route: c,
                routeId: o,
              });
            if (n !== P.current) {
              r.ignore?.();
              return;
            }
            ((A.current = !1),
              (L.current = a.id),
              (j.current = i),
              (I.current = e.pathVariables),
              he(s, u));
            let d = c.path && e.pathVariables ? Gf(c.path, e.pathVariables) : c.path;
            (se({
              routeId: o,
              remountKey: `${a.id}${d}`,
              hash: void 0,
              shouldSmoothScroll: !1,
              behavior: `preserve-scroll-position`,
            }),
              ie(
                () => {
                  w(o, o, () => k(D));
                },
                r,
                t
                  ? void 0
                  : i
                    ? () => {
                        Zf({
                          routeId: o,
                          url: i,
                          pathVariables: e.pathVariables,
                          localeId: a.id,
                          contentLocaleId: s,
                          canonicalPathVariables: u,
                        });
                      }
                    : void 0,
                !1
              ));
          } catch {
            r.ignore?.();
          }
        },
      }),
      [B, de, fe, t, D, m, _, he, s, se, ie, w, O, k, ye, oe, b]
    ),
    xe = l(
      (e, t, n, r, i, a, o, c, l, u, d) => {
        A.current = !1;
        let f = F.current,
          p = s[e],
          m = Ln(p, n),
          h = p?.path && i ? Gf(p.path, i) : p?.path;
        ((F.current = e),
          (L.current = t),
          (I.current = i),
          (ee.current = void 0),
          he(a, o),
          (j.current = r),
          se({
            routeId: e,
            remountKey: `${t}${h}`,
            hash: m,
            shouldSmoothScroll: u ?? !1,
            behavior: c
              ? re
                ? `restore-scroll-position`
                : `preserve-scroll-position`
              : `scroll-to-hash-or-top`,
          }),
          c
            ? (ae(), k(D))
            : ie(
                (t) => {
                  w(f, e, () => k(D), t);
                },
                l,
                d,
                !0
              ));
      },
      [D, he, s, re, se, ie, w, k, ae]
    );
  (Wi(te, F, xe),
    M(() => {
      if (t) return;
      let e = () => {
        let e = Ni(),
          t = N.location.hash === `` ? void 0 : N.location.hash.slice(1);
        (e && Ln(s[e.routeId], e.hash) === t) ||
          Vi({
            ...(e ||
              (Ii() ?? { routeId: F.current, pathVariables: I.current, localeId: L.current })),
            hash: t,
            scrollPosition: void 0,
          });
      };
      return (N.addEventListener(`hashchange`, e), () => N.removeEventListener(`hashchange`, e));
    }, [t, s]));
  let Se = l(
      async (e, n, r, i, a) => {
        let o = s[e],
          c = mn(o?.page) ? o.page.getStatus() : void 0,
          l = c?.hasRendered,
          u = O({ cached: l, preloaded: l ? void 0 : c?.hasLoaded }),
          d = Fp(a);
        if (
          ($b({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }).then(d),
          await $b({ priority: `user-blocking`, continueAfter: `paint` }),
          r)
        ) {
          let e = /* @__PURE__ */ new Set(),
            t = o?.path ?? `/`;
          for (let n of t.matchAll(tx)) {
            let t = n[1];
            if (t === void 0) throw Error(`A matching path variable should not be undefined`);
            e.add(t);
          }
          r = Object.fromEntries(Object.entries(r).filter(([t]) => e.has(t)));
        }
        let f = Ln(o, n),
          p = I.current,
          h = L.current;
        if (
          ee.current === void 0 &&
          Yf({ routeId: F.current, pathVariables: p }, { routeId: e, pathVariables: r })
        ) {
          let a = ne();
          if (a) {
            let t = o?.path && r ? Gf(o.path, r) : o?.path;
            se({
              routeId: e,
              remountKey: `${h}${t}`,
              hash: f,
              shouldSmoothScroll: i ?? !1,
              behavior: `scroll-to-hash-or-top`,
            });
          } else ae();
          (u.ignore?.(), !a && re && pp(f, i, `scroll-to-hash-or-top`));
          let c = s[e];
          (!t &&
            c &&
            $f(
              e,
              c,
              {
                currentRoutePath: c.path,
                currentRoutePathLocalized: c.pathLocalized,
                currentPathVariables: p,
                pathVariables: r,
                hash: n,
                localeId: h,
                preserveQueryParams: _,
                siteCanonicalURL: b,
              },
              d
            ),
            !a && !re && pp(f, i, `scroll-to-hash-or-top`));
          return;
        }
        if (!o) return;
        let g = s[F.current],
          v =
            ua(b) +
            pa(o, {
              currentRoutePath: g?.path,
              currentRoutePathLocalized: g?.pathLocalized,
              currentPathVariables: p,
              hash: n,
              pathVariables: r,
              localeId: h,
              localeSlug: m.find(({ id: e }) => e === h)?.slug,
              preserveQueryParams: _,
              relative: !1,
              siteCanonicalURL: b,
            }),
          y = {};
        ee.current = y;
        let { contentLocaleId: x, canonicalPathVariables: S } = await $r({
          activeLocale: B,
          defaultLocale: de,
          collectionUtilsCache: oe,
          locales: m,
          pathVariables: r,
          route: o,
          routeId: e,
        });
        ee.current === y &&
          xe(
            e,
            h,
            n,
            v,
            r,
            x,
            S,
            !1,
            u,
            i,
            t
              ? void 0
              : () => {
                  (d(),
                    Qf(e, o, {
                      historyPath: v,
                      currentRoutePath: g?.path,
                      hash: n,
                      pathVariables: r,
                      contentLocaleId: x,
                      canonicalPathVariables: S,
                      localeId: h,
                    }));
                }
          );
      },
      [ae, s, m, xe, t, _, b, O, re, ne, se, oe, de, B]
    ),
    Ce = kn(s),
    we = j.current,
    Te = IE(le, R, we, z, B, f),
    Ee = A.current;
  Pp({
    activeLocale: B,
    contentLocale: fe,
    currentPathVariables: z,
    currentRoute: le,
    currentRouteId: R,
    isInitialNavigation: Ee,
    locales: m,
    siteCanonicalURL: b,
  });
  let De = S(
      () => ({
        navigate: Se,
        getRoute: Ce,
        currentRouteId: R,
        currentPathVariables: z,
        currentCanonicalPathVariables: pe,
        routes: s,
        collectionUtils: o,
        preserveQueryParams: _,
        pageviewEventData: Te,
        siteCanonicalURL: b,
        isInitialNavigation: Ee,
      }),
      [Se, Ce, R, z, pe, s, o, _, b, Te, Ee]
    ),
    Oe = ue && z ? Gf(ue, z) : ue,
    ke = `${ce}${Oe}`,
    Ae = qo(() => ({ ...e, display: `contents` }));
  return /* @__PURE__ */ T(An, {
    api: De,
    children: /* @__PURE__ */ T(ix.Provider, {
      value: be,
      children: /* @__PURE__ */ T(ax.Provider, {
        value: _e,
        children: /* @__PURE__ */ T(jT, {
          children: /* @__PURE__ */ T(aa, {
            routerRenderKey: E,
            isNavigationCommitPending: te.isNavigationCommitPending,
            children: /* @__PURE__ */ C(Kf, {
              currentRoutePath: Oe,
              routerAPI: De,
              children: [
                y && /* @__PURE__ */ T(Wf, { EditorBar: y, fast: !0 }),
                /* @__PURE__ */ T(mT, {
                  children: /* @__PURE__ */ C(Vu, {
                    children: [
                      /* @__PURE__ */ T(qx.Start, {}),
                      /* @__PURE__ */ T(gp, {
                        currentRouteId: R,
                        remountKey: ke,
                        scrollRestoration: te,
                      }),
                      /* @__PURE__ */ T(Yx, {
                        notFoundPage: a,
                        defaultPageStyle: e,
                        routerRenderKey: E,
                        children: /* @__PURE__ */ T(Rp, {
                          LayoutTemplate: v,
                          webPageId: le?.abTestingVariantId ?? R,
                          style: e,
                          children: (t) =>
                            /* @__PURE__ */ T(
                              u,
                              { children: me ? Na(le.page, t ? Ae : e) : a && Na(a, e) },
                              ke
                            ),
                        }),
                      }),
                      y && /* @__PURE__ */ T(Wf, { EditorBar: y }),
                      /* @__PURE__ */ T(wa, {}),
                      /* @__PURE__ */ T(qx.End, {}),
                    ],
                  }),
                }),
              ],
            }),
          }),
        }),
      }),
    }),
  });
}
function Rp({ LayoutTemplate: e, webPageId: t, style: n, children: r }) {
  return e ? /* @__PURE__ */ T(e, { webPageId: t, style: n, children: r }) : r(!1);
}
function zp({
  activeLocale: e,
  currentRoute: t,
  initialCanonicalPathVariables: n,
  initialContentLocaleIdOverride: r,
  locales: i,
  routes: a,
}) {
  let o = g(n),
    s = g(r),
    c = s.current,
    u = !e || !t.includedLocales || t.includedLocales.includes(e.id),
    d = S(() => {
      if (!e) return null;
      let n;
      return (
        (n = u
          ? (c ?? t?.canonicalLocaleIdByLocaleId?.[e.id])
          : Object.values(a).find((e) => e.path && Fx.has(e.path))?.canonicalLocaleIdByLocaleId?.[
              e.id
            ]),
        n ? (i.find(({ id: e }) => e === n) ?? e) : e
      );
    }, [e, t, i, c, u, a]),
    f = l((e, t) => {
      ((s.current = e), (o.current = t));
    }, []);
  return {
    contentLocale: d,
    currentCanonicalPathVariables: o.current,
    pageExistsInCurrentLocale: u,
    setRouteContentState: f,
  };
}
function Bp(e) {
  return new Promise((t, n) => {
    try {
      new URL(e);
      let r = new Image();
      ((r.onload = () => t()), (r.onerror = n), (r.src = e));
    } catch (e) {
      n(e);
    }
  });
}
function Vp(e) {
  return typeof e == `object` && !!e;
}
function Hp(e, t) {
  if (t === ``) return e;
  let n = t.split(/[.[\]]+/u).filter((e) => e.length > 0),
    r = e;
  for (let e of n) {
    if (!Vp(r)) return;
    r = r[e];
  }
  return r;
}
function Up(e) {
  return `${e.credentials}:${e.url}`;
}
function Wp(e) {
  return V(e) && !Number.isNaN(Number(e));
}
function Gp(e, t) {
  switch (e) {
    case `string`:
      return V(t) || H(t);
    case `color`:
      return V(t);
    case `boolean`:
      return Qe(t);
    case `number`:
      return H(t) || Wp(t);
    case `link`:
    case `image`:
      return V(t) && xd(t, !1);
    default:
      return !1;
  }
}
function Kp(e, t) {
  if (e.status === `loading`) return t.fallbackValue;
  if (e.status === `error`) throw e.error;
  let n = Hp(e.data, t.resultKeyPath);
  if (tt(n)) throw Error(`Key '${t.resultKeyPath}' not found in response`);
  if (!Gp(t.resultOutputType, n))
    throw Error(`Resolved value '${n}' is not valid for type '${t.resultOutputType}'`);
  return n;
}
function qp(e) {
  return Math.max(e * 1e3, QE);
}
function Jp(e, t) {
  if (G.current() === G.canvas) return !1;
  let n = qp(t);
  return Date.now() >= e + n;
}
function Yp({ client: e, children: t }) {
  return /* @__PURE__ */ T(iD.Provider, { value: e, children: t });
}
function Xp(e) {
  let {
    RootComponent: t,
    isWebsite: n,
    environment: r,
    routeId: i,
    framerSiteId: a,
    pathVariables: o,
    canonicalPathVariables: s,
    routes: c,
    collectionUtils: l,
    serverDatabaseClient: u,
    notFoundPage: d,
    isReducedMotion: f = !1,
    skipAnimations: p = !1,
    includeDataObserver: m = !1,
    localeId: h,
    locales: g,
    preserveQueryParams: _,
    EditorBar: v,
    defaultPageStyle: y,
    disableHistory: b,
    LayoutTemplate: x,
    siteCanonicalURL: S,
    adaptLayoutToTextDirection: C,
    loadSnippetsModule: w,
    initialCollectionItemId: E,
    initialContentLocaleIdOverride: D,
  } = e;
  if (
    (j.useEffect(() => {
      n || wS.start();
    }, []),
    n)
  )
    return /* @__PURE__ */ T(Zi, {
      value: r ?? `preview`,
      children: /* @__PURE__ */ T(be, {
        reducedMotion: p ? `always` : f ? `user` : `never`,
        skipAnimations: p,
        children: /* @__PURE__ */ T(xr, {
          collectionUtils: l,
          children: /* @__PURE__ */ T(Yp, {
            client: u,
            children: /* @__PURE__ */ T(rD, {
              children: /* @__PURE__ */ T(DE.Provider, {
                value: a,
                children: /* @__PURE__ */ T(vp, {
                  loadSnippetsModule: w,
                  children: /* @__PURE__ */ T(Lp, {
                    initialRoute: i,
                    initialPathVariables: o,
                    initialCanonicalPathVariables: s,
                    initialLocaleId: h,
                    initialCollectionItemId: E,
                    initialContentLocaleIdOverride: D,
                    routes: c,
                    collectionUtils: l,
                    notFoundPage: d,
                    locales: g,
                    defaultPageStyle: y ?? { minHeight: `100vh`, width: `auto` },
                    preserveQueryParams: _,
                    EditorBar: v,
                    disableHistory: b,
                    LayoutTemplate: x,
                    siteCanonicalURL: S,
                    adaptLayoutToTextDirection: C,
                  }),
                }),
              }),
            }),
          }),
        }),
      }),
    });
  {
    let e = m ? yw : j.Fragment;
    return /* @__PURE__ */ T(e, {
      children: /* @__PURE__ */ T(Mn, {
        routes: c,
        children: /* @__PURE__ */ T(ow, {
          children: j.isValidElement(t) ? t : j.createElement(t, { key: i }),
        }),
      }),
    });
  }
}
function Zp(e, t) {
  let n = jn(),
    { activeLocale: r } = ei(),
    i = uf();
  return $i(() => {
    let t = [],
      a = (e) => {
        if (e)
          return V(e) || _d(e)
            ? Ef(e, n, void 0, void 0, r, o)
            : Ef(e.href, n, e.implicitPathVariables, e.refKey, r, o);
      };
    function o(e, n) {
      return i(e, n, r, t);
    }
    let s = e(a);
    if (t.length > 0) throw Promise.allSettled(t);
    return s;
  }, [n, r, i, ...t]);
}
function Qp(e) {
  return {
    trace(...t) {
      return zS.getLogger(e)?.trace(...t);
    },
    debug(...t) {
      return zS.getLogger(e)?.debug(...t);
    },
    info(...t) {
      return zS.getLogger(e)?.info(...t);
    },
    warn(...t) {
      return zS.getLogger(e)?.warn(...t);
    },
    error(...t) {
      return zS.getLogger(e)?.error(...t);
    },
    get enabled() {
      return zS.getLogger(e) !== void 0;
    },
  };
}
function $p() {
  return (
    Symbol.dispose ||
      Object.defineProperty(Symbol, "dispose", {
        value: Symbol.for(`Symbol.dispose`),
        writable: !1,
        enumerable: !1,
        configurable: !1,
      }),
    Symbol.dispose
  );
}
function em() {
  var e =
      typeof SuppressedError == `function`
        ? SuppressedError
        : function (e, t) {
            var n = Error();
            return ((n.name = `SuppressedError`), (n.error = e), (n.suppressed = t), n);
          },
    t = {},
    n = [];
  function r(e, t) {
    if (t != null) {
      if (Object(t) !== t)
        throw TypeError(
          `using declarations can only be used with objects, functions, null, or undefined.`
        );
      if (e) var r = t[Symbol.asyncDispose || Symbol.for(`Symbol.asyncDispose`)];
      if (r === void 0 && ((r = t[Symbol.dispose || Symbol.for(`Symbol.dispose`)]), e)) var i = r;
      if (typeof r != `function`) throw TypeError(`Object is not disposable.`);
      (i &&
        (r = function () {
          try {
            i.call(t);
          } catch (e) {
            return Promise.reject(e);
          }
        }),
        n.push({ v: t, d: r, a: e }));
    } else e && n.push({ d: t, a: e });
    return t;
  }
  return {
    e: t,
    u: r.bind(null, !1),
    a: r.bind(null, !0),
    d: function () {
      var r,
        i = this.e,
        a = 0;
      function o() {
        for (; (r = n.pop());)
          try {
            if (!r.a && a === 1) return ((a = 0), n.push(r), Promise.resolve().then(o));
            if (r.d) {
              var e = r.d.call(r.v);
              if (r.a) return ((a |= 2), Promise.resolve(e).then(o, s));
            } else a |= 1;
          } catch (e) {
            return s(e);
          }
        if (a === 1) return i === t ? Promise.resolve() : Promise.reject(i);
        if (i !== t) throw i;
      }
      function s(n) {
        return ((i = i === t ? n : new e(n, i)), o());
      }
      return o();
    },
  };
}
function tm() {
  return oD.priority;
}
function nm(e) {
  let t = oD;
  return (
    (oD = e),
    {
      [$p()]() {
        oD = t;
      },
    }
  );
}
function rm(e = oD.priority, t = oD.canYield) {
  if (!t || e === void 0) return;
  let n = Vr(e);
  return $b({ batch: !0, priority: n });
}
function im(e) {
  try {
    var t = em();
    t.u(nm({ priority: oD.priority, canYield: !1 }));
    let n = e.next();
    return (W(n.done, `Generator must not yield`), n.value);
  } catch (e) {
    t.e = e;
  } finally {
    t.d();
  }
}
async function am(e, t, n = oD.priority, r = oD.canYield) {
  let i = { priority: n, canYield: r },
    a = t;
  if (a === void 0)
    try {
      var o = em();
      (o.u(nm(i)), (a = e.next()));
    } catch (e) {
      o.e = e;
    } finally {
      o.d();
    }
  for (; !a.done;)
    try {
      var s = em();
      let t = await a.value,
        o = rm(n, r);
      (o && (await o), s.u(nm(i)), (a = e.next(t)));
    } catch (e) {
      s.e = e;
    } finally {
      s.d();
    }
  return a.value;
}
function om(e, t = oD.priority, n = oD.canYield) {
  try {
    var r = em();
    r.u(nm({ priority: t, canYield: n }));
    let i = e.next();
    return i.done ? i.value : am(e, i, t, n);
  } catch (e) {
    r.e = e;
  } finally {
    r.d();
  }
}
function* sm(e, t = oD.priority) {
  let n = {},
    r = Object.keys(e),
    i = [];
  for (let a of r) {
    let r = e[a];
    if (at(r)) {
      let e = r.next();
      e.done
        ? (n[a] = e.value)
        : i.push(
            am(r, e, t).then((e) => {
              n[a] = e;
            })
          );
    } else n[a] = r;
  }
  return (i.length > 0 && (yield Promise.all(i)), n);
}
function* cm(e, t = oD.priority) {
  let n = [],
    r = e.keys(),
    i = [];
  for (let a of r) {
    let r = rm(t);
    r && (yield r);
    let o = e[a];
    if (at(o)) {
      let e = o.next();
      e.done
        ? (n[a] = e.value)
        : i.push(
            am(o, e, t).then((e) => {
              n[a] = e;
            })
          );
    } else n[a] = o;
  }
  return (i.length > 0 && (yield Promise.all(i)), n);
}
function lm(e) {
  return fm(e) || hm(e);
}
function um(e) {
  return $e(e) && e.every(U);
}
function dm(e) {
  return U(e) && Ze(e.read) && Ze(e.preload);
}
function fm(e) {
  return um(e) || dm(e);
}
function pm(e) {
  return U(e) && U(e.schema);
}
function mm(e) {
  return U(e) && U(e.collectionByLocaleId);
}
function hm(e) {
  return pm(e) || mm(e);
}
function gm(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = Gm(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function _m(e, t) {
  return e?.type === `array`
    ? { type: `array`, value: e.value.map((e) => sD.cast(e, t.definition)) }
    : null;
}
function vm(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function ym(e) {
  switch (e?.type) {
    case `boolean`:
      return e;
    case `number`:
    case `string`:
      return { type: `boolean`, value: !!e.value };
  }
  return null;
}
function bm(e) {
  return ym(e)?.value ?? !1;
}
function xm(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Sm(e) {
  return e?.type === `color` ? e : null;
}
function Cm(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function wm(e) {
  switch (e?.type) {
    case `date`:
      return e;
    case `number`:
    case `string`: {
      let t = new Date(e.value);
      return it(t) ? { type: `date`, value: t.toISOString() } : null;
    }
  }
  return null;
}
function Tm(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Em(e) {
  switch (e?.type) {
    case `enum`:
      return e;
    case `string`:
      return { type: `enum`, value: e.value };
  }
  return null;
}
function Dm(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Om(e) {
  return e?.type === `file` ? e : null;
}
function km(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Am(e) {
  switch (e?.type) {
    case `link`:
      return e;
    case `string`:
      try {
        let { protocol: t } = new URL(e.value);
        return t === `http:` || t === `https:` ? { type: `link`, value: e.value } : null;
      } catch {
        return null;
      }
  }
  return null;
}
function jm(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Mm(e) {
  switch (e?.type) {
    case `number`:
    case `string`: {
      let t = Number(e.value);
      return Number.isFinite(t) ? { type: `number`, value: t } : null;
    }
  }
  return null;
}
function Nm(e) {
  return Mm(e)?.value ?? null;
}
function Pm(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = Gm(e.value[o] ?? null, t.value[s] ?? null, n);
    if (c !== 0) return c;
  }
  return 0;
}
function Fm(e, t) {
  if (e?.type === `object`) {
    let n = {},
      r = Object.entries(t.definitions);
    for (let [t, i] of r) {
      let r = e.value[t] ?? null;
      n[t] = sD.cast(r, i);
    }
    return { type: `object`, value: n };
  }
  return null;
}
function Im(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Lm(e) {
  return e?.type === `responsiveimage` ? e : null;
}
function Rm(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function zm(e) {
  return e?.type === `richtext` ? e : null;
}
function Bm(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function Vm(e) {
  return e?.type === `vectorsetitem` ? e : null;
}
function Hm(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function Um(e) {
  switch (e?.type) {
    case `string`:
      return e;
    case `number`:
      return { type: `string`, value: String(e.value) };
  }
  return null;
}
function Wm(e) {
  return Um(e)?.value ?? null;
}
function Gm(e, t, n) {
  if (nt(e) || nt(t)) return (W(e === t), 0);
  switch (e.type) {
    case `array`:
      return (W(e.type === t.type), gm(e, t, n));
    case `boolean`:
      return (W(e.type === t.type), vm(e, t));
    case `color`:
      return (W(e.type === t.type), xm(e, t));
    case `date`:
      return (W(e.type === t.type), Cm(e, t));
    case `enum`:
      return (W(e.type === t.type), Tm(e, t));
    case `file`:
      return (W(e.type === t.type), Dm(e, t));
    case `link`:
      return (W(e.type === t.type), km(e, t));
    case `number`:
      return (W(e.type === t.type), jm(e, t));
    case `object`:
      return (W(e.type === t.type), Pm(e, t, n));
    case `responsiveimage`:
      return (W(e.type === t.type), Im(e, t));
    case `richtext`:
      return (W(e.type === t.type), Rm(e, t));
    case `vectorsetitem`:
      return (W(e.type === t.type), Bm(e, t));
    case `string`:
      return (W(e.type === t.type), Hm(e, t, n));
    default:
      ut(e);
  }
}
async function Km(e, t) {
  return dm(e) ? (await e.preload(t), e.read(t)) : e;
}
function qm(e) {
  return e.includes(fD);
}
function Jm(e) {
  if (!hm(e) || !e.id) return;
  let t = uD.get(e.id);
  if (!t) return (uD.set(e.id, new WeakRef(e)), e.id);
  if (t.deref() === e) return e.id;
}
function Ym(e) {
  let t = Jm(e);
  if (t) return t;
  let n = dD.get(e);
  if (n) return n;
  let r = `${fD}${Math.random().toString(16).slice(2)}`;
  return (dD.set(e, r), r);
}
function Xm(e, t) {
  if (fm(e)) {
    let n = Ym(e) + (t?.id ?? `default`),
      r = pD.get(n);
    if (r) return r;
    let i = new lD(e, t);
    return (pD.set(n, i), i);
  }
  if (pm(e)) return e;
  if (mm(e)) {
    for (; t;) {
      let n = e.collectionByLocaleId[t.id];
      if (n) return n;
      t = t.fallback;
    }
    return e.collectionByLocaleId.default;
  }
  ut(e, `Unsupported collection type`);
}
function Zm(e) {
  return e;
}
function Qm(e) {
  return Ze(e.getHash);
}
function Y(e, ...t) {
  let n = `${e}(`;
  for (let e = 0; e < t.length; e++) {
    e > 0 && (n += `, `);
    let r = t[e];
    U(r) && Qm(r) ? (n += r.getHash()) : (n += JSON.stringify(r) ?? ``);
  }
  return Zm(`${n})`);
}
function $m(e) {
  if (e === void 0) return;
  if (typeof e != `function`) return e;
  let t = e();
  return () => e() ?? t;
}
function eh(e) {
  if (e !== void 0) return Vr(e);
}
function th(e, t) {
  return { collectionId: Ym(e), pointer: t };
}
function nh(e) {
  return U(e) && V(e.collectionId);
}
function rh(e, t) {
  return { collectionId: Ym(e), pointer: t };
}
function ih(e) {
  return U(e) && V(e.collectionId);
}
function ah(e, t) {
  let n = /* @__PURE__ */ new Map();
  function r(e) {
    if (U(e)) {
      if (e.type === `Collection` && lm(e.data)) {
        let r = Xm(e.data, t),
          i = Ym(r);
        n.set(i, r);
      } else
        for (let t in e) {
          let n = e[t];
          r(n);
        }
    } else if ($e(e)) for (let t of e) r(t);
  }
  return (r(e), n);
}
function oh(e) {
  return e;
}
function sh(e) {
  return e;
}
function ch(e) {
  return e;
}
function lh() {
  return 25;
}
function uh() {
  return 12500;
}
function dh(e) {
  return Array(e).fill({ type: `All` });
}
function fh(e) {
  return e;
}
function ph(e, t) {
  if (e) return;
  if (typeof t == `function`)
    try {
      t = t();
    } catch {
      t = `(assert message threw)`;
    }
  typeof t == `string` && t.length > 2048 && (t = t.slice(0, 2048) + `…`);
  let n = new bO(t ? `Assertion Error: ` + t : `Assertion Error`);
  if (n.stack)
    try {
      let e = n.stack.split(`
`);
      e[1]?.includes(`assert`)
        ? (e.splice(1, 1),
          (n.stack = e.join(`
`)))
        : e[0]?.includes(`assert`) &&
          (e.splice(0, 1),
          (n.stack = e.join(`
`)));
    } catch {}
  throw n;
}
function mh(e) {
  let t = /* @__PURE__ */ new Set();
  if (!e) return t;
  ph(e.type === `array`, () => `ScalarIntersection expects an array, got: ${e.type}`);
  for (let n of e.value)
    n &&
      (ph(
        n.type === `string`,
        () => `ScalarIntersection expects an array of strings, got an array with: ${n.type}`
      ),
      t.add(n.value));
  return t;
}
function hh(e, t) {
  switch (e?.type) {
    case `array`:
      for (let n of e.value) hh(n, t);
      return;
    case `object`:
      for (let n in e.value) hh(e.value[n], t);
      return;
    case `richtext`:
      t.preloadRichTextValue(e);
      return;
    case `vectorsetitem`:
      t.preloadVectorSetItemValue(e);
      return;
  }
}
function gh(e) {
  return e.collection ? `"${e.collection}"."${e.name}"` : `"${e.name}"`;
}
function _h(e) {
  return typeof e.value == `string` ? `'${e.value}'` : e.value;
}
function vh(e) {
  return `${e.functionName}(${e.arguments.map((e) => Ch(e)).join(`, `)})`;
}
function yh(e) {
  let t = `CASE`;
  e.value && (t += ` ${Ch(e.value)}`);
  for (let n of e.conditions) t += ` WHEN ${Ch(n.when)} THEN ${Ch(n.then)}`;
  return (e.else && (t += ` ELSE ${Ch(e.else)}`), (t += ` END`), t);
}
function bh(e) {
  let t = Ch(e.value);
  return `${e.operator.toUpperCase()} ${t}`;
}
function xh(e) {
  let t = Ch(e.left),
    n = Ch(e.right);
  return `${t} ${e.operator.toUpperCase()} ${n}`;
}
function Sh(e) {
  return `CAST(${Ch(e.value)} as ${e.dataType})`;
}
function Ch(e) {
  switch (e.type) {
    case `Identifier`:
      return gh(e);
    case `LiteralValue`:
      return _h(e);
    case `FunctionCall`:
      return vh(e);
    case `Case`:
      return yh(e);
    case `UnaryOperation`:
      return bh(e);
    case `BinaryOperation`:
      return xh(e);
    case `TypeCast`:
      return Sh(e);
    case `Select`:
      return `${Oh(e)}`;
    default:
      ut(e);
  }
}
function wh(e) {
  return pm(e.data)
    ? `Collection`
    : e.alias
      ? `"${e.data.displayName}" AS "${e.alias}"`
      : `"${e.data.displayName}"`;
}
function Th(e) {
  let t = `${Eh(e.left)} LEFT JOIN ${Eh(e.right)}`;
  return (e.constraint && (t += ` ON ${Ch(e.constraint)}`), t);
}
function Eh(e) {
  switch (e.type) {
    case `Collection`:
      return wh(e);
    case `LeftJoin`:
      return Th(e);
    default:
      ut(e);
  }
}
function Dh(e) {
  let t = ``;
  return (
    e.split(/\s+/u).forEach((e) => {
      e !== `` &&
        ([`SELECT`, `FROM`, `WHERE`, `ORDER`, `LIMIT`, `OFFSET`].includes(e)
          ? (t += `\n${e}`)
          : [`AND`, `OR`].includes(e)
            ? (t += `\n\t${e}`)
            : (t += ` ${e}`));
    }),
    t.trim()
  );
}
function Oh(e) {
  let t = ``;
  return (
    (t += `SELECT ${e.select
      .map((e) => {
        let t = Ch(e);
        return e.alias ? `${t} AS "${e.alias}"` : t;
      })
      .join(`, `)}`),
    (t += ` FROM ${Eh(e.from)}`),
    e.where && (t += ` WHERE ${Ch(e.where)}`),
    e.orderBy &&
      (t += ` ORDER BY ${e.orderBy.map((e) => `${Ch(e)} ${e.direction ?? `asc`}`).join(`, `)}`),
    e.limit && (t += ` LIMIT ${Ch(e.limit)}`),
    e.offset && (t += ` OFFSET ${Ch(e.offset)}`),
    Dh(t)
  );
}
function kh(e) {
  return U(e) && e.type === `Collection`;
}
function Ah(e, t) {
  return kh(t) && lm(t.data) ? Ym(t.data) : t;
}
function jh(e, t) {
  let n = t?.id ?? `default`;
  return JSON.stringify(e, Ah) + n;
}
function Mh(e) {
  let { activeLocale: t } = ei();
  return LO.get(e, t).use();
}
function Nh(e, t) {
  let n = Object.entries(e ?? {})
    .filter(([, e]) => !(tt(e) || U(e)))
    .map(([e, n]) => ({
      type: `BinaryOperation`,
      operator: `==`,
      left: {
        type: `TypeCast`,
        value: { type: `Identifier`, name: e, collection: t },
        dataType: `STRING`,
      },
      right: { type: `LiteralValue`, value: String(n) },
    }));
  return n.length === 0
    ? { type: `LiteralValue`, value: !1 }
    : n.reduce((e, t) => ({ type: `BinaryOperation`, operator: `and`, left: e, right: t }));
}
function Ph(e) {
  let t = g(e);
  return (
    s(() => {
      t.current = e;
    }, [e]),
    ea((...e) => {
      let n = t.current;
      return n(...e);
    }, [])
  );
}
function Fh(e, t) {
  (e.forEach((e) => clearTimeout(e)),
    e.clear(),
    t.forEach((e) => e?.(`Callback cancelled by variant change`)),
    t.clear());
}
function Ih() {
  return /* @__PURE__ */ new Set();
}
function Lh(e) {
  let t = qo(Ih),
    n = qo(Ih);
  return (
    Jc(() => () => Fh(n, t)),
    M(() => () => Fh(n, t), []),
    M(() => {
      Fh(n, t);
    }, [e]),
    g({
      activeVariantCallback:
        (e) =>
        async (...n) =>
          new Promise((r, i) => {
            (t.add(i), e(...n).then(r));
          }).catch(() => {}),
      delay: async (e, t) => {
        (await new Promise((e) => {
          n.add(globalThis.setTimeout(() => e(!0), t));
        }),
          e());
      },
    }).current
  );
}
function Rh(e, t, n) {
  return j.useCallback(
    (r) => (!n || !e ? {} : t ? Object.assign({}, n[e]?.[r], n[t]?.[r]) : n[e]?.[r] || {}),
    [e, t, n]
  );
}
function zh(e) {
  for (let [t, n] of Object.entries(e)) if (Mt.matchMedia(n).matches) return t;
}
function Bh(e) {
  let t = [];
  for (let { hash: n, mediaQuery: r } of e) r && Mt.matchMedia(r).matches && t.push(n);
  if (t.length > 0) return t;
  let n = e[0]?.hash;
  if (n) return [n];
}
function Vh(e, n, r = !0) {
  let i = t(rw),
    a = Zo(),
    o = dt(),
    s = Mr() && (!a || o),
    u = g(s ? (zh(n) ?? e) : e),
    d = g(r && i ? e : u.current),
    f = nc(),
    p = ne(),
    m = l(
      (e) => {
        if (e !== u.current || e !== d.current) {
          function t() {
            ((u.current = d.current = e),
              c(() => {
                f();
              }));
          }
          a
            ? t()
            : p(() => {
                t();
              });
        }
      },
      [p, f, a]
    );
  return (
    Tx(() => {
      a && m(o ? (zh(n) ?? e) : e);
    }, [e, o, a, n, m]),
    Tx(() => {
      r && i === !0 && m(u.current);
    }, []),
    M(() => {
      if (!s || o) return;
      let e = [];
      for (let [t, r] of Object.entries(n)) {
        let n = Mt.matchMedia(r),
          i = (e) => {
            e.matches && m(t);
          };
        (Hh(n, i), e.push([n, i]));
      }
      return () => e.forEach(([e, t]) => Uh(e, t));
    }, [o, n, m, s]),
    [u.current, d.current]
  );
}
function Hh(e, t) {
  e.addEventListener ? e.addEventListener(`change`, t) : e.addListener(t);
}
function Uh(e, t) {
  e.removeEventListener ? e.removeEventListener(`change`, t) : e.removeListener(t);
}
function Wh(e) {
  setTimeout(e, 1);
}
function Gh(e) {
  let t = /* @__PURE__ */ new Set(),
    n = Bh(e);
  if (n)
    for (let e of n)
      for (let n of document.querySelectorAll(`.hidden-` + e))
        (Kh(n.previousSibling) && t.add(n.previousSibling), n.parentNode?.removeChild(n));
  (Dt ? Mt.requestIdleCallback : Wh)(() => {
    document.querySelector(RO)?.remove();
  });
  for (let e of document.querySelectorAll(`.ssr-variant:empty`))
    (Kh(e.previousSibling) && t.add(e.previousSibling), e.parentNode?.removeChild(e));
  for (let e of t)
    qh(e.nextSibling) && (e.parentNode?.removeChild(e.nextSibling), e.parentNode?.removeChild(e));
}
function Kh(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `$`;
}
function qh(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `/$`;
}
function Jh(e, t) {
  if (e[t]) return e[t];
  if (!(t in e)) return e.default;
}
function Yh(e, t) {
  if (Xo()) return;
  let n = j.useRef(!0),
    r = j.useRef(t);
  (Jc((t, i) => {
    let a = t && !i;
    if (!n.current && a) {
      let t = Jh(r.current, e);
      t && t();
    }
    n.current = a;
  }, []),
    j.useEffect(() => {
      if (n.current) {
        let t = Jh(r.current, e);
        t && t();
      }
    }, [e]));
}
function Xh(e) {
  return U(e) && zO in e && e.page !== void 0;
}
function Zh(e, t) {
  return `${e}-${t}`;
}
function Qh(e, t) {
  let n = e.indexOf(t) + 1;
  n >= e.length && (n = 0);
  let r = e[n];
  return (W(r !== void 0, `nextVariant should be defined`), r);
}
function $h(e, t) {
  if (e) {
    if (t) {
      let n = e[t];
      if (n) return n;
    }
    return e.default;
  }
}
function eg(e, t, n, r, i) {
  let { hover: a, pressed: o, loading: s, error: c } = e || {};
  if (c && i) return `error`;
  if (s && r) return `loading`;
  if (o && n) return `pressed`;
  if (a && t) return `hover`;
}
function tg(e, t) {
  return t[e] || `framer-v-${e}`;
}
function ng(e, t, n) {
  return e && n.has(e) ? e : t;
}
function rg() {
  let e = g(),
    t = g(),
    n = l(() => {
      e.current &&
        (document.removeEventListener(`visibilitychange`, e.current),
        (e.current = void 0),
        (t.current = void 0));
    }, []);
  return (
    M(
      () => () => {
        n();
      },
      [n]
    ),
    l(
      (r) => {
        if (!document.hidden) {
          (r(), n());
          return;
        }
        if (((t.current = r), e.current)) return;
        let i = () => {
          document.hidden || (t.current?.(), n());
        };
        ((e.current = i), document.addEventListener(`visibilitychange`, i));
      },
      [n]
    )
  );
}
function ig() {
  let e = g(),
    n = g(!1),
    r = g(),
    i = t(BC);
  return (
    M(
      () => () => {
        (e.current?.(), (r.current = void 0), (e.current = void 0));
      },
      []
    ),
    l(
      (t, a) => {
        if (!a?.current || n.current) {
          t();
          return;
        }
        if (((r.current = t), e.current)) return;
        let o = !1;
        e.current = Bc(i, `undefined`, a.current, null, (e) => {
          ((n.current = e.isIntersecting),
            !o &&
              ((o = !0),
              queueMicrotask(() => {
                ((o = !1), n.current && r.current?.());
              })));
        });
      },
      [i]
    )
  );
}
function ag(e) {
  let t = rg(),
    n = ig();
  return l(
    (r, i = !1) => {
      Et ? r() : t(i && e ? () => n(r, e) : r);
    },
    [t, n, e]
  );
}
async function og() {
  return new Promise((e) => {
    let t = e;
    (setTimeout(() => {
      t && (performance.mark(`wait-for-click-fallback`), t());
    }, 150),
      (HO = () => {
        (e(), (t = void 0));
      }));
  });
}
function sg(e) {
  e.button === 0 && (performance.mark(`pointerdown-listener`), (VO = og()));
}
function cg() {
  (performance.mark(`click-received-listener`), (VO = void 0), HO?.(), (HO = void 0));
}
function lg(e = !1) {
  M(() => {
    e &&
      (document.addEventListener(`pointerup`, sg, !0),
      document.__proto__.addEventListener.call(document, `click`, cg, !0));
  }, [e]);
}
function ug({
  variant: e,
  defaultVariant: t,
  transitions: n,
  enabledGestures: r,
  cycleOrder: i = [],
  variantProps: a = {},
  variantClassNames: o = {},
  ref: s,
}) {
  let u = nc(),
    d = yd(),
    f = qo(() => new Set(i));
  lg(dT().yieldOnTap);
  let p = ag(s),
    m = g({
      isHovered: !1,
      isHoveredHasUpdated: !1,
      isPressed: !1,
      isPressedHasUpdated: !1,
      isError: !1,
      hasPressedVariants: !0,
      baseVariant: ng(e, t, f),
      lastVariant: e,
      gestureVariant: void 0,
      loadedBaseVariant: {},
      defaultVariant: t,
      enabledGestures: r,
      cycleOrder: i,
      transitions: n,
    }),
    h = l((e) => {
      let {
          isHovered: t,
          isPressed: n,
          isError: r,
          enabledGestures: i,
          defaultVariant: a,
        } = m.current,
        o = ng(e, a, f),
        s = eg(i?.[o], t, n, !1, r);
      return [o, s ? Zh(o, s) : void 0];
    }, []),
    _ = l(
      async (e, t, n, r, i = !1, a = !1) => {
        let [o, s] = h(r);
        if (o === e && s === t) return;
        (a && (m.current.isError = !1),
          (m.current.baseVariant = o || n),
          (m.current.gestureVariant = s));
        let l = dT().yieldOnTap && m.current.isPressedHasUpdated;
        (l &&
          VO &&
          (performance.mark(`wait-for-tap-start`),
          await VO,
          performance.measure(`wait-for-tap`, `wait-for-tap-start`)),
          l &&
            (performance.mark(`yield-on-tap-start`),
            await $b({ priority: `user-blocking`, continueAfter: `paint` }),
            performance.measure(`yield-on-tap`, `yield-on-tap-start`)));
        let {
          isHovered: d,
          isPressed: f,
          isHoveredHasUpdated: g,
          isPressedHasUpdated: _,
        } = m.current;
        d || g || f || _ ? c(u) : p(() => c(u), i);
      },
      [h, u, p]
    ),
    v = l(
      ({ isHovered: e, isPressed: t, isError: n }) => {
        e && !d && dT().disableHoverOnMobile && !sd() && (e = !1);
        let r = t !== m.current.isPressed,
          i = e !== m.current.isHovered;
        (e !== void 0 && (m.current.isHovered = e),
          t !== void 0 && (m.current.isPressed = t),
          n !== void 0 && (m.current.isError = n));
        let { baseVariant: a, gestureVariant: o, defaultVariant: s } = m.current;
        ((m.current.isPressedHasUpdated = r),
          (m.current.isHoveredHasUpdated = i),
          _(a, o, s, a, !1));
      },
      [_, d]
    ),
    y = l(
      (e, t = !1) => {
        let { defaultVariant: n, cycleOrder: r, baseVariant: i, gestureVariant: a } = m.current,
          o = e === BO ? Qh(r || [], i || n) : e;
        _(i, a, n, o, t, !0);
      },
      [_]
    ),
    b = l(() => {
      let { baseVariant: e } = m.current;
      ((m.current.loadedBaseVariant[e] = !0), p(() => c(u), !0));
    }, [u, p]);
  if (e !== m.current.lastVariant) {
    let [t, n] = h(e);
    ((m.current.lastVariant = t),
      (t !== m.current.baseVariant || n !== m.current.gestureVariant) &&
        ((m.current.baseVariant = t), (m.current.gestureVariant = n)));
  }
  let {
      baseVariant: x,
      gestureVariant: C,
      defaultVariant: w,
      enabledGestures: T,
      isHovered: E,
      isPressed: D,
      isError: O,
      loadedBaseVariant: k,
    } = m.current,
    A = Rh(m.current.baseVariant, m.current.gestureVariant, a);
  return S(() => {
    let e = [];
    x !== w && e.push(x);
    let t = T?.[x]?.loading,
      n = !O && !d && !!t && !k[x],
      r = n ? Zh(x, `loading`) : C;
    r && e.push(r);
    let i = T?.[x],
      a = { onMouseEnter: () => v({ isHovered: !0 }), onMouseLeave: () => v({ isHovered: !1 }) };
    return (
      i?.pressed &&
        Object.assign(a, {
          onTapStart: () => v({ isPressed: !0 }),
          onTapCancel: () => v({ isPressed: !1 }),
          onTap: () => v({ isPressed: !1 }),
        }),
      {
        variants: e,
        baseVariant: x,
        gestureVariant: r,
        isLoading: n,
        transition: $h(m.current.transitions, x),
        setVariant: y,
        setGestureState: v,
        clearLoadingGesture: b,
        addVariantProps: A,
        gestureHandlers: a,
        classNames: Xl(tg(x, o), eg(i, E, D, n, O)),
      }
    );
  }, [x, C, E, D, k, A, y, w, T, v, b, o]);
}
function dg(e, { scopeId: t, nodeId: n, override: r, inComponentSlot: i }) {
  if (dT().disableCustomCode) return e;
  if (!Gu()) return pg(e, r, t, n);
  let a = fg(e, r, t, n),
    o = !1;
  function s(r, s) {
    let c = Yu();
    if (rd(t, c?.scopeId, c?.level, i ?? !1))
      return a.status === `success`
        ? /* @__PURE__ */ T(Cx.Provider, {
            value: n,
            children: /* @__PURE__ */ T(Ku, {
              getErrorMessage: ed.bind(null, t, n),
              fallback: /* @__PURE__ */ T(e, { ...r, ref: s }),
              children: /* @__PURE__ */ T(a.Component, { ...r, ref: s }),
            }),
          })
        : ((o ||= (Wu(a.error), Wu(ed(t, n)), Uu(a.error), !0)),
          /* @__PURE__ */ T(e, { ...r, ref: s }));
    if (a.status === `success`)
      return /* @__PURE__ */ T(Cx.Provider, {
        value: n,
        children: /* @__PURE__ */ T(a.Component, { ...r, ref: s }),
      });
    throw a.error;
  }
  return j.forwardRef(s);
}
function fg(e, t, n, r) {
  try {
    return { status: `success`, Component: pg(e, t, n, r) };
  } catch (e) {
    return { status: `error`, error: e };
  }
}
function pg(e, t, n, r) {
  let i = UO.get(t);
  i || ((i = /* @__PURE__ */ new WeakMap()), UO.set(t, i));
  let a = i.get(e);
  a || ((a = /* @__PURE__ */ new Map()), i.set(e, a));
  let o = `${n}:${r}`;
  if (a.has(o)) return a.get(o);
  let s = t(e);
  return (a.set(o, s), s);
}
function mg(e) {
  let t = [];
  return (
    p.forEach(e, (e) => {
      w(e) && e.type === u ? t.push(...mg(e.props.children)) : e && t.push(e);
    }),
    t
  );
}
function hg(e, t, n) {
  let r = Math.floor(e / n),
    i = r * n,
    a = 0;
  for (let n = 0; n < t.length; n++) {
    let { end: r } = t[n];
    if (((a = n), r + i > e)) break;
  }
  return a + r * t.length;
}
function gg(e, t, n, r) {
  if (t.length === 0) return 0;
  let i = t[t.length - 1].end + n,
    a = r ?? e + (t[0]?.end ?? 0),
    o = hg(e, t, i) + 1,
    s = 0,
    c = !1;
  for (; !c;) {
    let { start: e, end: n } = t[xe(0, t.length, o)],
      r = Math.floor(o / t.length) * i;
    ((s = e + r), n + r > a ? (c = !0) : o++);
  }
  return s;
}
function _g(e, t, n, r, i) {
  if (t.length === 0) return 0;
  let a = t[t.length - 1].end + n,
    o = r ?? e - (i ?? 0),
    s = hg(e, t, a),
    c = e,
    l = !1;
  for (; !l;) {
    let { start: r, end: u } = t[xe(0, t.length, s)],
      d = u - r,
      f = r + Math.floor(s / t.length) * a;
    o <= f + n || f >= e
      ? ((c = f), s--)
      : o <= f
        ? ((c = f), (l = !0))
        : (((i && d > i) || (c === e && o >= f)) && (c = f), (l = !0));
  }
  return c;
}
function vg() {
  let e = t(WO);
  return (Mg(e, `useTicker must be used within a Ticker component`), e);
}
function yg() {
  let e = t(GO);
  return (Mg(e, `useTickerItem must be used within a TickerItem`), e);
}
function bg(e, t) {
  return (t?.offsetWidth ?? N.innerWidth) - (e.offsetLeft + e.offsetWidth);
}
function xg(e, t) {
  return e === `y` ? JO : t === `ltr` ? qO : YO;
}
function Sg({
  children: e,
  offset: t,
  axis: n,
  listSize: r = 0,
  numItems: i,
  itemIndex: a,
  positionInSet: o,
  cloneIndex: s,
  bounds: c,
  alignItems: l,
  reproject: u = !0,
  size: d = `auto`,
  safeMargin: f,
}) {
  let { start: p, end: m } = c,
    { visibleLength: h, direction: g, inset: _ } = vg(),
    { sign: v } = xg(n, g),
    y = Ie(() => {
      if (!u) return 0;
      let e = t.get();
      if ((!p && !m) || !r) return 0;
      if (e * v + c.end <= -_ - f) return r * v;
      if (f > 0) {
        let t = h - f - _;
        if (e * v + c.start >= t) return -r * v;
      }
      return 0;
    }),
    b = Ie(() => {
      let e = t.get(),
        n = y.get();
      return (!p && !m) || !r ? 0 : e * v + p + n * v;
    }),
    x =
      s === void 0
        ? {
            "aria-hidden": !1,
            "aria-posinset": o ?? a + 1,
            "aria-setsize": i,
            "data-item-index": a,
          }
        : { "aria-hidden": !0 },
    S = d === `fill`,
    C = l === `stretch` ? `100%` : `fit-content`,
    w = {
      className: s === void 0 ? `ticker-item` : `clone-item`,
      style: {
        flexGrow: 0,
        flexShrink: 0,
        position: `relative`,
        flexBasis: d === `fill` ? `100%` : void 0,
        display: S ? `grid` : void 0,
        gridTemplateColumns: S ? `1fr` : void 0,
        gridTemplateRows: S ? `1fr` : void 0,
        minWidth: S ? 0 : void 0,
        minHeight: S ? 0 : void 0,
        height: n === `x` ? C : void 0,
        width: n === `y` ? C : void 0,
        x: n === `x` ? y : 0,
        y: n === `y` ? y : 0,
      },
      ...x,
    };
  return /* @__PURE__ */ T(GO.Provider, {
    value: { start: p, end: m, offset: b, projection: y, itemIndex: a, cloneIndex: s, props: w },
    children: d === `manual` ? e : /* @__PURE__ */ T(Cg, { children: e }),
  });
}
function Cg({ children: e }) {
  let { props: t } = yg();
  return /* @__PURE__ */ T(L.li, { ...t, children: e });
}
function wg(e, t, n, r, i) {
  let a = g(!1);
  M(() => {
    let o = e.current;
    if (!o) return;
    let s = !1,
      c = new AbortController(),
      l = { signal: c.signal },
      u = { ...l, capture: !0 },
      d = t === `x` ? `scrollLeft` : `scrollTop`,
      f = t === `x` ? `offsetLeft` : `offsetTop`,
      p = t === `x` ? `ArrowLeft` : `ArrowUp`,
      m = t === `x` ? `ArrowRight` : `ArrowDown`,
      h = [],
      g = 0,
      _ = () => {
        let e = h[g];
        e &&
          (e.focus({ preventScroll: !0 }),
          n.set(-e[f]),
          (o[d] = 0),
          Ge.render(() => {
            o[d] = 0;
          }));
      },
      v = (e) => {
        if (e.key === `Tab`) {
          (e.preventDefault(), x());
          let t = Array.from(
            document.querySelectorAll(
              `a, button, input, textarea, select, [tabindex]:not([tabindex="-1"]), [contenteditable="true"]`
            )
          ).filter(Eg);
          t.sort(Tg);
          let n = t[e.shiftKey ? 0 : t.length - 1],
            r = e.shiftKey ? t.length - 1 : 0;
          if (o.contains(n)) {
            t[r].focus();
            return;
          }
          {
            let n = t.indexOf(h[g]),
              r = e.shiftKey ? -1 : 1;
            for (let e = n; e < t.length && e >= 0; e += r) {
              let n = t[e];
              if (!o.contains(n)) {
                n.focus();
                return;
              }
            }
          }
        } else (e.key === p ? g-- : e.key === m && g++, (g = xe(0, h.length, g)), _());
      },
      y = () => {
        a.current ||
          ((h = Array.from(
            o.querySelectorAll(
              `.ticker-item a, .ticker-item button, .ticker-item input, .ticker-item textarea, .ticker-item select, .ticker-item [tabindex]:not([tabindex="-1"]), .ticker-item [contenteditable="true"]`
            )
          ).filter(Eg)),
          (g = 0),
          h.length &&
            (i(!0),
            (a.current = !0),
            _(),
            N.addEventListener(`focus`, b, u),
            N.addEventListener(`blur`, b, u),
            o.addEventListener(`keydown`, v, l)));
      },
      b = (e) => {
        (!e.target || !(e.target instanceof HTMLElement) || !o.contains(e.target)) && x();
      },
      x = () => {
        a.current &&
          ((a.current = !1),
          i(!1),
          r.set(n.get()),
          N.removeEventListener(`focus`, b),
          N.removeEventListener(`blur`, b),
          o.removeEventListener(`keydown`, v));
      },
      S = (e) => {
        let { target: t } = e;
        Eg(t) && (a.current || y());
      },
      C = () => {
        s || ((s = !0), o.addEventListener(`focus`, S, u), N.addEventListener(`pointermove`, w, l));
      },
      w = () => {
        s &&
          ((s = !1),
          o.removeEventListener(`focus`, S, !0),
          N.removeEventListener(`pointermove`, w, l));
      };
    return (
      N.addEventListener(`keydown`, C, l),
      o.addEventListener(
        `pointerdown`,
        (e) => {
          let t = e.target.closest(`[aria-hidden="true"]`);
          t && t.removeAttribute(`aria-hidden`);
        },
        l
      ),
      o.addEventListener(
        `scroll`,
        () => {
          ((o.scrollLeft = 0), (o.scrollTop = 0));
        },
        l
      ),
      () => {
        (c.abort(), x());
      }
    );
  }, []);
}
function Tg(e, t) {
  return e.tabIndex >= 1 && t.tabIndex >= 1
    ? e.tabIndex - t.tabIndex
    : e.tabIndex >= 1 && t.tabIndex <= 0
      ? -1
      : +(t.tabIndex >= 1 && e.tabIndex <= 0);
}
function Eg(e) {
  return e instanceof HTMLElement;
}
function Dg(e) {
  return e.end - e.start;
}
function Og(e) {
  return e[e.length - 1].end - e[0].start;
}
function kg(e, t, n) {
  let r = Og(t),
    i = Math.max(...t.map(Dg)),
    a = 0,
    o = 0;
  for (; o < e;) ((o = (r + n) * (a + 1) - i), a++);
  return Math.max(a - 1, 0);
}
function Ag(
  {
    items: e,
    velocity: t = 50,
    hoverFactor: n = 1,
    gap: r = 10,
    axis: i = `x`,
    align: a = `center`,
    offset: o,
    isStatic: s = !1,
    itemSize: c = `auto`,
    overflow: u = !1,
    loop: d = !0,
    children: f,
    as: p = `div`,
    snap: h,
    safeMargin: _ = 0,
    fade: v = 0,
    fadeTransition: y,
    pageTransition: b,
    ...x
  },
  C
) {
  let w = g(null),
    E = re(C, w),
    D = g(null),
    [O, k] = m({
      direction: `ltr`,
      visibleLength: 0,
      inset: 0,
      totalItemLength: 0,
      containerLength: 0,
      itemPositions: [],
      itemBounds: [],
      itemSetPositions: [],
      isMeasured: !1,
      maxInset: null,
    }),
    A = XO[a] || a,
    { sign: j } = xg(i, O.direction);
  if (s) {
    let t = ze(0),
      n = S(() => ({ ...O, gap: r, clampOffset: Me, offset: t, renderedOffset: t }), [O, r, t]);
    return /* @__PURE__ */ T(WO.Provider, {
      value: n,
      children: /* @__PURE__ */ T(jg, {
        containerProps: x,
        containerRef: E,
        gap: r,
        axis: i,
        alignItems: A,
        offset: t,
        renderedOffset: t,
        items: e,
        itemSize: c,
        state: O,
        overflow: u,
        safeMargin: _,
        isStatic: !0,
        as: p,
        fade: v,
        sign: j,
        children: f,
      }),
    });
  }
  let [M, P] = m(!1),
    F = ze(1),
    I = ze(0);
  o ??= I;
  let ee = Ie(() =>
      O.direction === `rtl` && i === `x`
        ? xe(O.totalItemLength + r + O.inset, O.inset, o.get())
        : xe(-O.totalItemLength - r - O.inset, -O.inset, o.get())
    ),
    L = ze(0),
    te = M ? L : d ? ee : o,
    ne = pe(w, { margin: `100px` }),
    ie = _e(),
    ae = ne && ie,
    se = ve(),
    R = () => {
      if (!w.current || !D.current) return;
      let e = N.getComputedStyle(w.current).direction,
        { measureItem: t, lengthProp: n, viewportLengthProp: r, getCumulativeInset: a } = xg(i, e),
        o = i === `x` ? `paddingLeft` : `paddingTop`,
        s = i === `x` ? `paddingRight` : `paddingBottom`,
        c = w.current,
        l = D.current.querySelectorAll(`.ticker-item`);
      if (!l.length) return;
      let f = !1,
        p = [],
        m = [],
        h = [];
      for (let e = 0; e < l.length; e++) {
        let n = l[e],
          r = Number(n.dataset.itemIndex),
          i = t(n, c);
        (p.push(i), (m[r] = i), (h[r] = p.length));
        let a = O.itemBounds[r];
        (!a || i.start !== a.start || i.end !== a.end) && (f = !0);
      }
      let g = Math.min(c[n], N[r]),
        v = u ? N[r] : g;
      _ > 0 && (v += _ * 2);
      let y = Og(p),
        b = N.getComputedStyle(c),
        x = parseInt(b[o] ?? 0),
        S = parseInt(b[s] ?? 0),
        C = u ? a(l[0]) : x,
        T = d === !1 ? Math.max(0, y - g + x + S) : null;
      (v !== O.visibleLength ||
        y !== O.totalItemLength ||
        C !== O.inset ||
        O.itemPositions.length !== p.length ||
        f) &&
        k({
          direction: e,
          visibleLength: v,
          itemPositions: p,
          itemBounds: m,
          itemSetPositions: h,
          totalItemLength: y,
          inset: C,
          containerLength: g,
          maxInset: T,
          isMeasured: !0,
        });
    };
  oe(() => {
    if (!ae || !w.current) return;
    R();
    let e = u ? ce(R) : void 0,
      t = ce(w.current, R);
    return () => {
      (e?.(), t());
    };
  }, [e, ae, u]);
  let z = O.totalItemLength > 0;
  me(
    z && ae && o === I && !se
      ? (e, n) => {
          let r = (n / 1e3) * (t * j * F.get());
          o.set(o.get() - r);
        }
      : Me
  );
  let le = S(
      () => (!z || !O.visibleLength ? 0 : kg(O.visibleLength, O.itemPositions, r)),
      [z, O, r]
    ),
    ue = O.totalItemLength === 0 ? 0 : (O.totalItemLength + r) * (le + 1),
    de = [];
  if (d)
    for (let t = 0; t < le; t++) {
      let n = [];
      e.forEach((a, o) => {
        let s = O.itemBounds[o],
          l = (O.totalItemLength + r) * (t + 1),
          u = s ? { start: s.start + l, end: s.end + l } : QO;
        n.push(
          /* @__PURE__ */ T(
            Sg,
            {
              offset: te,
              axis: i,
              listSize: ue,
              itemIndex: o,
              cloneIndex: o,
              bounds: u,
              alignItems: A,
              size: c,
              safeMargin: _,
              numItems: O.isMeasured ? O.itemPositions.length : e.length,
              children: a,
            },
            `clone-${t}-${o}`
          )
        );
      });
      let a = `ticker-group-${t}`;
      de.push(/* @__PURE__ */ T(ke, { id: a, children: n }, a));
    }
  wg(w, i, L, o, P);
  let B = l((e) => (O.maxInset === null ? e : ye(-O.maxInset, 0, e)), [O.maxInset]),
    fe = S(
      () => ({ ...O, gap: r, clampOffset: B, offset: o, renderedOffset: te }),
      [O, r, B, o, te]
    );
  return /* @__PURE__ */ T(WO.Provider, {
    value: fe,
    children: /* @__PURE__ */ T(jg, {
      containerProps: x,
      containerRef: E,
      listRef: D,
      gap: r,
      axis: i,
      alignItems: A,
      isMeasured: z,
      isInView: ae,
      offset: o,
      renderedOffset: te,
      items: e,
      itemSize: c,
      clonedItems: de,
      clampOffset: B,
      snap: h,
      safeMargin: _,
      onPointerEnter: () => {
        Pe(F, n);
      },
      onPointerLeave: () => {
        Pe(F, 1);
      },
      totalListSize: ue,
      state: O,
      overflow: u,
      loop: d,
      as: p,
      fade: v,
      sign: j,
      fadeTransition: y,
      pageTransition: b,
      children: f,
    }),
  });
}
function jg({
  children: e,
  containerProps: t,
  containerRef: n,
  listRef: r,
  gap: i,
  axis: a,
  alignItems: o,
  isMeasured: s,
  isInView: c,
  isStatic: l,
  items: u,
  offset: d,
  clonedItems: f,
  clampOffset: p,
  renderedOffset: m,
  onPointerEnter: h,
  onPointerLeave: v,
  totalListSize: y,
  itemSize: b,
  overflow: x,
  state: w,
  safeMargin: E,
  snap: D,
  loop: O,
  as: k,
  fade: A,
  sign: j,
  fadeTransition: M = tk,
  pageTransition: N,
}) {
  let P = S(() => L.create(k), [k]),
    F = {},
    { maxInset: I } = w;
  I !== null &&
    (F =
      a === `x`
        ? j > 0
          ? { left: I * -1, right: 0 }
          : { right: I, left: 0 }
        : { top: I * -1, bottom: 0 });
  let {
      drag: ee,
      _dragX: te,
      _dragY: ne,
      dragMomentum: re = !1,
      onDragEnd: ie,
      onPointerDown: oe,
      ...se
    } = t,
    ce = ie,
    R = oe,
    z = a === `x` ? te : ne,
    le = g(null),
    ue = () => {
      le.current &&= (le.current.stop(), null);
    };
  !ce &&
    ee &&
    z &&
    ((R = () => {
      (z.jump(d.get()), ue());
    }),
    (ce = (e, { velocity: t }) => {
      let n = d.get();
      (ue(),
        Ge.postRender(() => {
          let e = n + t[a] * (D ? 0.3 : 0.8);
          if (D) {
            if (t[a] < 0) e = -gg(-n, w.itemPositions, i, -e);
            else if (t[a] > 0) e = -_g(-n, w.itemPositions, i, -e, w.containerLength);
            else {
              let t = -gg(-n, w.itemPositions, i, -n),
                r = -_g(-n, w.itemPositions, i, -n, w.containerLength);
              e = Math.abs(n - t) < Math.abs(n - r) ? t : r;
            }
          }
          let r = O
            ? {}
            : j > 0
              ? { max: 0, min: F[a === `x` ? `left` : `top`] }
              : { min: 0, max: F.right };
          le.current = Pe(
            z,
            p(e * j) * j,
            D
              ? N
              : {
                  type: `inertia`,
                  velocity: t[a],
                  modifyTarget: () => e,
                  bounceDamping: 40,
                  bounceStiffness: 400,
                  ...r,
                }
          );
        }));
    }));
  let de = ze(+!O),
    B = ze(0),
    fe = xg(a, w.direction),
    pe = typeof A == `number` ? `px` : ``,
    me = Ie(
      () =>
        `linear-gradient(to ${fe.direction}, rgba(0,0,0,${de.get()}) 0px, black ${A}${pe}, black calc(100% - ${A}${pe}), rgba(0,0,0,${B.get()}) 100%)`
    ),
    he = A ? { maskImage: me, WebkitMaskImage: me } : {},
    ge = g({ start: !0, end: !1 });
  return (
    ae(m, `change`, (e) => {
      if (I === null) return;
      let t = I * -1;
      ((e *= j),
        e < 0
          ? ge.current.start && (Pe(de, 0, M), (ge.current.start = !1))
          : ge.current.start || (Pe(de, 1, M), (ge.current.start = !0)),
        e > t
          ? ge.current.end && (Pe(B, 0, M), (ge.current.end = !1))
          : ge.current.end || (Pe(B, 1, M), (ge.current.end = !0)));
    }),
    /* @__PURE__ */ C(_, {
      children: [
        /* @__PURE__ */ T(P, {
          ...se,
          ref: n,
          style: {
            overflowX: !x && a === `x` ? `clip` : void 0,
            overflowY: !x && a === `y` ? `clip` : void 0,
            ...$O,
            ...t.style,
            ...he,
          },
          onPointerEnter: h,
          onPointerLeave: v,
          drag: ee,
          _dragX: te,
          _dragY: ne,
          dragConstraints: F,
          dragMomentum: re,
          onPointerDown: R,
          onDragEnd: ce,
          children: /* @__PURE__ */ C(L.ul, {
            ref: r,
            style: {
              ...ek,
              flexDirection: a === `x` ? `row` : `column`,
              gap: `${i}px`,
              x: a === `x` ? m : 0,
              y: a === `y` ? m : 0,
              opacity: s || l ? 1 : 0,
              alignItems: o,
              willChange: s && c ? `transform` : void 0,
              width: `100%`,
              height: `100%`,
              maxHeight: `100%`,
              maxWidth: `100%`,
            },
            children: [
              u.map((e, t) =>
                /* @__PURE__ */ T(
                  Sg,
                  {
                    axis: a,
                    offset: m,
                    listSize: y,
                    itemIndex: t,
                    bounds: w.itemBounds[t] ?? QO,
                    alignItems: o,
                    size: b,
                    reproject: O,
                    safeMargin: E,
                    positionInSet: w.itemSetPositions[t],
                    numItems: w.isMeasured ? w.itemPositions.length : u.length,
                    children: e,
                  },
                  `original-` + t
                )
              ),
              f || null,
            ],
          }),
        }),
        ` `,
        e,
      ],
    })
  );
}
function Mg(e, t) {
  if (!e) throw Error(t);
}
function Ng(e) {
  return -Math.sign(e);
}
function Pg(
  e,
  {
    axis: t = `y`,
    onWheel: n,
    onSwipe: r,
    swipeThreshold: i = 100,
    swipeTimeout: a = 150,
    jitterThreshold: o = 2,
    lineHeight: s = 16,
  }
) {
  let c = `IDLE`,
    l = 0,
    u = 0,
    d = 0,
    f = !1,
    p = 0,
    m = !1,
    h = null,
    g = (e) => {
      let g = t === `x` && !e.shiftKey ? e.deltaX : e.deltaY,
        _ = t === `x` && !e.shiftKey ? e.deltaY : e.deltaX;
      if (Math.abs(g) < Math.abs(_)) return;
      (n || r) && e.preventDefault();
      let v = -(e.deltaMode === WheelEvent.DOM_DELTA_LINE ? g * s : g);
      if (v === 0) return;
      (h && clearTimeout(h),
        (h = setTimeout(() => {
          ((c = `IDLE`), (m = !1), (l = 0));
        }, a)),
        c === `IDLE` && (c = `WHEELING`));
      let y = Ng(v);
      function b(e, t) {
        ((c = `SWIPING`),
          (m = !0),
          (u = Ng(t)),
          (f = !1),
          (p = 0),
          (d = Math.abs(e)),
          r?.(u),
          (l = (Math.abs(t) % i) * u));
      }
      switch (c) {
        case `WHEELING`: {
          let e = l + v;
          r && !m && Math.abs(e) >= i ? b(v, e) : ((l = e), n?.(v));
          break;
        }
        case `SWIPING`: {
          let e = Math.abs(v),
            t = y !== u,
            a = !1;
          if (d > 0) {
            let t = e - d;
            (t < 0 && (f = !0), f && t > o ? (p++, p > 2 && (a = !0)) : (p = 0));
          }
          if (t || a) {
            m = !1;
            let e = v;
            r && !m && Math.abs(e) >= i ? b(v, e) : ((c = `WHEELING`), (l = e), n?.(v));
            break;
          }
          d = e;
          break;
        }
      }
    };
  return (
    e.addEventListener(`wheel`, g, { passive: !1 }),
    () => {
      (h && clearTimeout(h), e.removeEventListener(`wheel`, g));
    }
  );
}
function Fg() {
  let e = t(nk);
  return (Gg(!!e, `useCarousel must be used within a Carousel component`), e);
}
function Ig(e, t, n) {
  let r = Math.floor(e / n),
    i = r * n,
    a = 0;
  for (let n = 0; n < t.length; n++) {
    let { end: r } = t[n];
    if (((a = n), r + i > e)) break;
  }
  return a + r * t.length;
}
function Lg(e, t, n, r, i) {
  if (t.length === 0) return 0;
  let a = t[t.length - 1].end + n,
    o = r ?? e - (i ?? 0),
    s = Ig(e, t, a),
    c = e,
    l = !1;
  for (; !l;) {
    let { start: r, end: u } = t[xe(0, t.length, s)],
      d = u - r,
      f = r + Math.floor(s / t.length) * a;
    o <= f + n || f >= e
      ? ((c = f), s--)
      : o <= f
        ? ((c = f), (l = !0))
        : (((i && d > i) || (c === e && o >= f)) && (c = f), (l = !0));
  }
  return c;
}
function Rg(e, t, n, r) {
  return Lg(e, n, r, e - t, t);
}
function zg(e, t, n, r) {
  if (t.length === 0) return 0;
  let i = t[t.length - 1].end + n,
    a = r ?? e + (t[0]?.end ?? 0),
    o = Ig(e, t, i) + 1,
    s = 0,
    c = !1;
  for (; !c;) {
    let { start: e, end: n } = t[xe(0, t.length, o)],
      r = Math.floor(o / t.length) * i;
    ((s = e + r), n + r > a ? (c = !0) : o++);
  }
  return s;
}
function Bg(e, t, n, r) {
  return zg(e, n, r, e + t);
}
function Vg(e, t, n, r = !0) {
  let i = { insets: [], visibleLength: t };
  if (e.length === 0) return i;
  let a = [e[0].start];
  for (let r = 1; r < e.length; r++) {
    let { start: i, end: o } = e[r];
    if (a[a.length - 1] + t < o) {
      if (n !== null) {
        if (i <= n) a.push(i);
        else {
          a.push(n);
          break;
        }
      } else a.push(i);
    }
  }
  if (r && n !== null && a.length > 1) {
    let r = a[a.length - 1],
      i = [];
    for (let e = 0; e < a.length - 1; e++) i.push(a[e + 1] - a[e]);
    let o = i.reduce((e, t) => e + t, 0) / i.length;
    if (n - r < o * 0.5) {
      let r = Vg(e, t * 0.75, n, !1);
      if (r.insets.length === a.length) return r;
    }
  }
  return { insets: a, visibleLength: t };
}
function Hg(e, t, n, r) {
  let i = -e,
    a = r === null ? Math.floor(i / n) : 0,
    o = a * n;
  for (let e = t.length - 1; e >= 0; e--) {
    let r = t[e] + o,
      s = xe(0, t.length, e - 1),
      c = (e === 0 ? a - 1 : a) * n,
      l = t[s] + c,
      u = (r - l) / 2,
      d = xe(0, t.length, e + 1),
      f = (e === t.length - 1 ? a + 1 : a) * n,
      p = t[d] + f;
    if (i < p - (p - r) / 2 && i >= l + u) return e;
  }
  return 0;
}
function Ug({
  children: e,
  offset: t,
  targetOffset: n,
  tugOffset: r,
  loop: i = !0,
  transition: a,
  tickerRef: o,
  axis: s = `x`,
  snap: c = `page`,
  page: l,
  wheelSwipeThreshold: u,
}) {
  let d = g(!0),
    {
      clampOffset: f,
      totalItemLength: p,
      itemPositions: h,
      containerLength: _,
      gap: v,
      maxInset: y,
      direction: b,
      isMeasured: x,
    } = vg(),
    S = p + v,
    C = Vg(h, _, y),
    w = C.insets.length,
    { sign: E } = xg(s, b),
    D = g(void 0),
    O = g(!1);
  M(() => {
    if (l === void 0 || !x || w === 0) return;
    let e = ye(0, w - 1, l),
      r = -C.insets[e] * E;
    O.current
      ? D.current !== l && ((D.current = l), n.jump(r), t.jump(r))
      : ((O.current = !0), (D.current = l), n.jump(r), t.jump(r));
  }, [x, w, l, E, n, t, C.insets]);
  let k = (e) => ({
      current: Hg(e * E, C.insets, S, y),
      isNextActive: i ? !0 : e * -E < y,
      isPrevActive: i ? !0 : e * -E > 0,
    }),
    [A, j] = m(() => k(n.get()));
  M(() => {
    N();
  }, [_, p]);
  let N = () => {
    let e = k(n.get());
    (e.current !== A.current ||
      e.isNextActive !== A.isNextActive ||
      e.isPrevActive !== A.isPrevActive) &&
      j(e);
  };
  ae(n, `change`, (e) => {
    (t.set(e), N());
  });
  let P = g(null),
    F = () => {
      P.current &&= (P.current.stop(), null);
    };
  M(() => {
    t.attach((e, n) => {
      (F(),
        d.current
          ? n(e)
          : (P.current = new Be({
              keyframes: [t.get(), e],
              velocity: ye(-2e3, 2e3, t.getVelocity()),
              ...a,
              onUpdate: n,
              onComplete: () => {
                P.current = null;
              },
            })),
        (d.current = !0));
    }, F);
  }, []);
  let I = (e) => {
      let t = f(e);
      (n.stop(), (d.current = !1), n.set(t * E));
    },
    ee = (e, t) => {
      let i = -e(-n.get() * E, C.visibleLength, h, v),
        a = f(i);
      a * E === n.get() ? Pe(r, 0, { velocity: t * E * 400, ...ik }) : I(a);
    },
    L = () => ee(Bg, -1),
    te = () => ee(Rg, 1),
    ne = (e) => {
      let t = (i ? Math.floor((-n.get() * E) / S) : 0) * -S;
      I(-C.insets[e] + t);
    },
    re = g({ nextPage: L, prevPage: te, clampOffset: f });
  return (
    M(() => {
      re.current = { nextPage: L, prevPage: te, clampOffset: f };
    }, [L, te, f]),
    M(() => {
      let e = o.current;
      if (e)
        return Pg(e, {
          axis: s,
          swipeThreshold: u,
          onSwipe: c
            ? (e) => {
                let { nextPage: t, prevPage: n } = re.current;
                e * E === 1 ? t() : n();
              }
            : void 0,
          onWheel: (e) => {
            let { clampOffset: r } = re.current,
              i = t.get() + e,
              a = E > 0 ? r(i) : ye(0, y, i);
            n.jump(y ? a : i);
          },
        });
    }, [s, c, t, E]),
    /* @__PURE__ */ T(nk.Provider, {
      value: {
        currentPage: A.current,
        isNextActive: A.isNextActive,
        isPrevActive: A.isPrevActive,
        totalPages: w,
        nextPage: L,
        prevPage: te,
        gotoPage: ne,
        offset: t,
        targetOffset: n,
      },
      children: e,
    })
  );
}
function Wg({
  children: e,
  loop: t = !0,
  transition: n = rk,
  axis: r = `x`,
  snap: i = `page`,
  page: a,
  wheelSwipeThreshold: o,
  ...s
}) {
  let c = g(null),
    l = ze(0),
    u = ze(0),
    d = ze(0),
    f = Ie(() => d.get() + u.get());
  return /* @__PURE__ */ T(ZO, {
    role: `region`,
    "aria-roledescription": `carousel`,
    offset: f,
    loop: t,
    ref: c,
    axis: r,
    drag: r,
    _dragX: r === `x` && l,
    _dragY: r === `y` && l,
    snap: i,
    pageTransition: n,
    ...s,
    children: /* @__PURE__ */ T(Ug, {
      tickerRef: c,
      loop: t,
      offset: u,
      tugOffset: d,
      targetOffset: l,
      transition: n,
      snap: i,
      axis: r,
      page: a,
      wheelSwipeThreshold: o,
      children: e,
    }),
  });
}
function Gg(e, t) {
  if (!e) throw Error(t);
}
function Kg({ intervalSeconds: e }) {
  let { nextPage: t, currentPage: n, isNextActive: r } = Fg(),
    i = ze(0);
  return (
    M(() => {
      if (!r) return;
      let n = Pe(i, [0, 1], { duration: e, ease: `linear`, onComplete: t });
      return () => n.stop();
    }, [e, i, n, r, t]),
    null
  );
}
function qg(e, t) {
  if (typeof e == `number` && Number.isFinite(e)) return e;
  if (!V(e)) return;
  let n = e.split(` `),
    r = n[0],
    i = n[1] ?? n[0],
    a = t === `x` ? i : r;
  if (!a) return;
  let o = parseInt(a);
  return Number.isNaN(o) ? void 0 : o;
}
function Jg(e, t) {
  if (q(e)) return e;
  if (!V(e)) return;
  let n = e.split(` `),
    r = n[0],
    i = n[1] ?? n[0];
  if (t === `x` && i) return Yg(parseInt(i));
  if (t === `y` && r) return Yg(parseInt(r));
}
function Yg(e) {
  return Number.isNaN(e) ? void 0 : e;
}
function Xg(e) {
  let {
    carouselEffectEnabled: t,
    carouselEffectAlign: n,
    carouselEffectAutoPlay: r,
    carouselEffectControls: i,
    carouselEffectGap: a,
    carouselEffectInterval: o,
    carouselEffectLoop: s,
    carouselEffectOverflow: c,
    carouselEffectSnap: l,
    carouselEffectStackDirection: u,
    carouselEffectXOverflow: d,
    carouselEffectYOverflow: f,
    tickerEffectEnabled: p,
    tickerEffectAlign: m,
    tickerEffectDirectionModifier: h,
    tickerEffectDraggable: g,
    tickerEffectGap: _,
    tickerEffectHoverModifier: v,
    tickerEffectIsDataRepeater: y,
    tickerEffectOverflow: b,
    tickerEffectPosition: x,
    tickerEffectStackDirection: S,
    tickerEffectVelocity: C,
    tickerEffectXOverflow: w,
    tickerEffectYOverflow: T,
    ...E
  } = e;
  return {
    carouselEffectProps: {
      carouselEffectAlign: n,
      carouselEffectAutoPlay: r,
      carouselEffectControls: i,
      carouselEffectGap: a,
      carouselEffectInterval: o,
      carouselEffectLoop: s,
      carouselEffectOverflow: c,
      carouselEffectSnap: l,
      carouselEffectStackDirection: u,
      carouselEffectXOverflow: d,
      carouselEffectYOverflow: f,
    },
    tickerEffectProps: {
      tickerEffectAlign: m,
      tickerEffectDirectionModifier: h,
      tickerEffectDraggable: g,
      tickerEffectGap: _,
      tickerEffectHoverModifier: v,
      tickerEffectIsDataRepeater: y,
      tickerEffectOverflow: b,
      tickerEffectPosition: x,
      tickerEffectStackDirection: S,
      tickerEffectVelocity: C,
      tickerEffectXOverflow: w,
      tickerEffectYOverflow: T,
    },
    domProps: E,
  };
}
function Zg(e) {
  return typeof HTMLVideoElement < `u` && e instanceof HTMLVideoElement;
}
function Qg(e) {
  typeof ImageBitmap < `u` && e instanceof ImageBitmap
    ? e.close()
    : Zg(e) && (e.pause(), e.removeAttribute(`src`), e.load());
}
function $g(e) {
  for (let t of Object.values(e)) t.type === `sampler2D` && Qg(t.value);
}
function e_(e, t) {
  return new Promise((n, r) => {
    let i = document.createElement(`video`);
    ((i.crossOrigin = `anonymous`),
      (i.muted = !0),
      (i.loop = !0),
      i.setAttribute(`playsinline`, ``),
      (i.preload = `auto`));
    let a = `Video texture load aborted`;
    if (t?.aborted) {
      (Qg(i), r(/* @__PURE__ */ Error(a)));
      return;
    }
    let o = () => u(a),
      s = () => u(`Failed to load video texture from "${e}"`),
      c = N.setTimeout(() => u(`Timed out loading video texture from "${e}"`), mk);
    function l() {
      (N.clearTimeout(c), t?.removeEventListener(`abort`, o), i.removeEventListener(`error`, s));
    }
    function u(e) {
      (l(), Qg(i), r(Error(e)));
    }
    (t?.addEventListener(`abort`, o, { once: !0 }),
      i.addEventListener(
        `loadeddata`,
        () => {
          (l(), n(i));
        },
        { once: !0 }
      ),
      i.addEventListener(`error`, s, { once: !0 }),
      (i.src = e));
  });
}
function t_(e, t) {
  let n = e.createBuffer();
  if (!n) throw Error(`Failed to create buffer`);
  return (e.bindBuffer(e.ARRAY_BUFFER, n), e.bufferData(e.ARRAY_BUFFER, t, e.STATIC_DRAW), n);
}
function n_(e, t, n, r) {
  let i = e.getAttribLocation(t, `a_position`);
  i >= 0 &&
    (e.bindBuffer(e.ARRAY_BUFFER, n),
    e.enableVertexAttribArray(i),
    e.vertexAttribPointer(i, 2, e.FLOAT, !1, 0, 0));
  let a = e.getAttribLocation(t, `a_texCoord`);
  a >= 0 &&
    (e.bindBuffer(e.ARRAY_BUFFER, r),
    e.enableVertexAttribArray(a),
    e.vertexAttribPointer(a, 2, e.FLOAT, !1, 0, 0));
}
function r_(e, t) {
  return {
    [gk.time.name]: e.getUniformLocation(t, gk.time.name),
    [gk.resolution.name]: e.getUniformLocation(t, gk.resolution.name),
    [gk.deltaTime.name]: e.getUniformLocation(t, gk.deltaTime.name),
    [gk.pixelRatio.name]: e.getUniformLocation(t, gk.pixelRatio.name),
    [gk.mousePosition.name]: e.getUniformLocation(t, gk.mousePosition.name),
    [gk.mousePointerDown.name]: e.getUniformLocation(t, gk.mousePointerDown.name),
    [gk.mouseHover.name]: e.getUniformLocation(t, gk.mouseHover.name),
  };
}
function i_(e, t) {
  let n = e.createTexture();
  if (!n) throw Error(`Failed to create buffer texture`);
  return (
    e.bindTexture(e.TEXTURE_2D, n),
    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t),
    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, t),
    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
    n
  );
}
function a_(e, t) {
  let n = e.createFramebuffer();
  if (!n) throw Error(`Failed to create buffer framebuffer`);
  return (
    e.bindFramebuffer(e.FRAMEBUFFER, n),
    e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, t, 0),
    n
  );
}
function o_(e, t, n) {
  let r = e.checkFramebufferStatus(e.FRAMEBUFFER);
  if (r !== e.FRAMEBUFFER_COMPLETE)
    throw Error(
      `Shader buffer "${t}" framebuffer is incomplete (format: "${n}", status: 0x${r.toString(16)}).`
    );
}
function s_(e, t) {
  switch (t) {
    case `rgba8`:
      return { internalFormat: e.RGBA8, uploadFormat: e.RGBA, pixelType: e.UNSIGNED_BYTE };
    case `r8`:
      return { internalFormat: e.R8, uploadFormat: e.RED, pixelType: e.UNSIGNED_BYTE };
    case `rg16f`:
      return { internalFormat: e.RG16F, uploadFormat: e.RG, pixelType: e.HALF_FLOAT };
    case `rgba16f`:
      return { internalFormat: e.RGBA16F, uploadFormat: e.RGBA, pixelType: e.HALF_FLOAT };
    case `rgba32f`:
      return { internalFormat: e.RGBA32F, uploadFormat: e.RGBA, pixelType: e.FLOAT };
  }
}
function c_(e) {
  return e === `rg16f` || e === `rgba16f` || e === `rgba32f`;
}
function l_(e) {
  return e.startsWith(`u_`) && e.length > 2;
}
function u_(e) {
  return l_(e) && e.endsWith(bk);
}
function d_(e) {
  return l_(e) && e.endsWith(xk);
}
function f_(e) {
  return l_(e) && e.endsWith(`_buffer`);
}
function p_(e) {
  return e.replace(Ck, `_`);
}
function m_(e) {
  return `u_${p_(e)}`;
}
function h_(e) {
  return `${e}${xk}`;
}
function g_(e) {
  return `u_${p_(e)}${bk}`;
}
function __(e) {
  return `u_${p_(e)}${Sk}`;
}
function v_(e) {
  return `NUM_${p_(e)
    .replace(/[a-z0-9](?=[A-Z])/gu, `$&_`)
    .toUpperCase()}`;
}
function y_(e) {
  switch (e) {
    case `number`:
    case `enum`:
      return `float`;
    case `boolean`:
      return `float`;
    case `color`:
      return `vec4`;
    case `responsiveimage`:
    case `file`:
      return `sampler2D`;
    default:
      ut(e);
  }
}
function b_(e = {}) {
  let { propertyControls: t, heightmapSource: n, bufferNames: r } = e,
    i = [wk, Tk, ``, Ek, Dk],
    a = t ? Object.values(t) : [];
  if (a.length > 0) {
    if (a.some((e) => e?.type === `array`)) {
      i.push(``);
      for (let e in t) {
        let n = t[e];
        if (n && n.type === `array`) {
          if (n.control?.type !== `color`)
            throw Error(
              `Shader array control "${e}" is not supported. Only color arrays may be defined.`
            );
          if (!H(n.maxCount)) throw Error(`Shader array control "${e}" must have a maxCount.`);
          i.push(`#define ${v_(e)} ${n.maxCount}`);
        }
      }
    }
    i.push(``);
    for (let e in t) {
      let n = t[e];
      if (n) {
        if (n.type === `array`) {
          let t = m_(e);
          (i.push(`uniform vec4 ${t}[${v_(e)}];`), i.push(`uniform int ${h_(t)};`));
        } else {
          let t = y_(n.type);
          i.push(`uniform ${t} ${m_(e)};`);
        }
      }
    }
  }
  if ((n && i.push(`uniform sampler2D ${g_(n)};`), r && r.length > 0)) {
    i.push(``);
    for (let e of r) i.push(`uniform sampler2D ${__(e)};`);
  }
  i.push(``);
  for (let e of Object.values(gk)) i.push(`uniform ${e.glslType} ${e.name};`);
  return (
    i.push(``),
    i.join(`
`)
  );
}
function x_(e, t, n = {}) {
  let r = b_(n);
  return t ? `${r}${t}\n${e}` : r + e;
}
function S_(e, t, n) {
  if (e)
    return e.map((e) => ({
      uniformName: __(e.name),
      fragment: x_(e.fragment, t, n),
      resolutionScale: e.resolutionScale ?? Ok,
      format: e.format ?? kk,
    }));
}
function C_(e) {
  w_(e);
  let t = e.buffers ? e.buffers.map((e) => e.name) : void 0,
    n = x_(e.fragment, e.common, {
      propertyControls: e.propertyControls,
      heightmapSource: e.heightmapSource,
      bufferNames: t,
    }),
    r = S_(e.buffers, e.common, {
      propertyControls: e.propertyControls,
      heightmapSource: e.heightmapSource,
      bufferNames: t,
    });
  return { ...e, fragment: n, buffers: r, [Ak]: !0 };
}
function w_(e) {
  let t = /* @__PURE__ */ new Map();
  if (e.propertyControls)
    for (let n in e.propertyControls) {
      if (l_(n) || n === `u_`) throw Error(`Property control key "${n}" must not start with "u_".`);
      let e = m_(n);
      if (u_(e)) throw Error(`Property control key "${n}" must not end with "_heightmap".`);
      if (d_(e)) throw Error(`Property control key "${n}" must not end with "_length".`);
      if (f_(e)) throw Error(`Property control key "${n}" must not end with "_buffer".`);
      let r = t.get(e);
      if (r !== void 0)
        throw Error(
          `Property control keys "${r}" and "${n}" both resolve to the same uniform "${e}".`
        );
      t.set(e, n);
    }
  if (e.heightmapSource) {
    let t = e.propertyControls?.[e.heightmapSource];
    if (!t || t.type !== `responsiveimage`)
      throw Error(
        `heightmapSource "${e.heightmapSource}" must reference a ResponsiveImage property control.`
      );
  }
  if (e.buffers)
    for (let n of e.buffers) {
      if (l_(n.name)) throw Error(`Shader buffer name "${n.name}" must not start with "u_".`);
      let e = __(n.name),
        r = t.get(e);
      if (r !== void 0)
        throw Error(
          r === n.name
            ? `Duplicate shader buffer name "${n.name}".`
            : `Shader buffer names "${r}" and "${n.name}" both resolve to the same uniform "${e}".`
        );
      if (
        (t.set(e, n.name),
        n.resolutionScale !== void 0 &&
          (!H(n.resolutionScale) || n.resolutionScale <= 0 || n.resolutionScale > 1))
      )
        throw Error(
          `Shader buffer "${n.name}" has invalid resolutionScale ${n.resolutionScale}. Must be in the range (0, 1].`
        );
      if (n.format !== void 0 && !hk.has(n.format))
        throw Error(
          `Shader buffer "${n.name}" has invalid format "${n.format}". Must be one of: ${[...hk].join(`, `)}.`
        );
    }
}
function T_(e, t = 0) {
  let n = e.indexOf(`var(`, t);
  if (n === -1) return null;
  let r = n + 4,
    i = 1,
    a;
  for (let t = r; t < e.length; t++)
    if (e[t] === `(`) i++;
    else if (e[t] === `)`) {
      if ((i--, i === 0)) return { start: n, end: t + 1, commaIndex: a };
    } else a === void 0 && e[t] === `,` && (a = t);
  return null;
}
function E_(e, t) {
  if (!t) return {};
  let { start: n, end: r, commaIndex: i } = t,
    a = e.substring(r).trim();
  return i
    ? {
        customProperty: e.substring(n + 4, i),
        fallback: e.substring(i + 1, r - 1).trim(),
        metadata: a,
      }
    : { customProperty: e.substring(n + 4, r - 1), metadata: a };
}
function D_(e) {
  return E_(e, T_(e));
}
function O_(e, t) {
  if (e.size < t) return;
  let n = e.keys().next().value;
  n !== void 0 && e.delete(n);
}
function k_(e, t) {
  if (!P_(e)) return;
  let n = t?.();
  if (!n) return A_(e);
  let r = Nk.generate(n, () => A_(e));
  if (r instanceof HTMLCanvasElement) return r;
}
function A_(e) {
  let t = N_(e);
  if (!t) return;
  let n = Pk / Math.min(t.width, t.height),
    r = Pk * Pk,
    i = t.width * n * (t.height * n);
  i > r && (n *= Math.sqrt(r / i));
  let a = Math.max(1, Math.round(t.width * n)),
    o = Math.max(1, Math.round(t.height * n)),
    s = document.createElement(`canvas`);
  ((s.width = a), (s.height = o));
  let c = s.getContext(`2d`);
  if (!c) return;
  c.drawImage(t.source, 0, 0, a, o);
  let l = c.getImageData(0, 0, a, o).data,
    u = a * o,
    d = new Uint8Array(u);
  for (let e = 0; e < u; e++) d[e] = +((l[e * 4 + 3] ?? 0) > 0);
  let f = new Uint8Array(u);
  for (let e = 0; e < u; e++) {
    if (d[e] === 0) continue;
    let t = e % a,
      n = Math.floor(e / a);
    if (t === 0 || t === a - 1 || n === 0 || n === o - 1) continue;
    let r = !1;
    for (let e = -1; e <= 1 && !r; e++)
      for (let i = -1; i <= 1 && !r; i++)
        (i !== 0 || e !== 0) && d[(n + e) * a + (t + i)] === 0 && (r = !0);
    r || (f[e] = 1);
  }
  let p = j_(f, a, o),
    m = 0;
  for (let e = 0; e < u; e++) {
    let t = p[e] ?? 0;
    t > m && (m = t);
  }
  let h = document.createElement(`canvas`);
  ((h.width = a), (h.height = o));
  let g = h.getContext(`2d`);
  if (!g) return;
  let _ = g.createImageData(a, o);
  for (let e = 0; e < u; e++) {
    let t = m > 0 ? (p[e] ?? 0) / m : 0;
    ((_.data[e * 4] = Math.round(t * 255)),
      (_.data[e * 4 + 1] = 255 - (l[e * 4 + 3] ?? 0)),
      (_.data[e * 4 + 2] = d[e] ? 255 : 0),
      (_.data[e * 4 + 3] = 255));
  }
  g.putImageData(_, 0, 0);
  let v = document.createElement(`canvas`);
  ((v.width = t.width), (v.height = t.height));
  let y = v.getContext(`2d`);
  if (y) return ((y.imageSmoothingEnabled = !0), y.drawImage(h, 0, 0, t.width, t.height), v);
}
function j_(e, t, n) {
  let r = t * n,
    i = new Float32Array(r),
    a = 0.01,
    o = [],
    s = [];
  for (let i = 0; i < r; i++) {
    if (e[i] === 0) continue;
    let r = i % t,
      a = Math.floor(i / t);
    ((r + a) % 2 == 0 ? o : s).push(
      i,
      a > 0 ? i - t : -1,
      a < n - 1 ? i + t : -1,
      r > 0 ? i - 1 : -1,
      r < t - 1 ? i + 1 : -1
    );
  }
  let c = new Int32Array(o),
    l = new Int32Array(s),
    u = -0.95,
    d = 1.95 / 4;
  for (let e = 0; e < 50; e++) (M_(c, i, u, d, a), M_(l, i, u, d, a));
  return i;
}
function M_(e, t, n, r, i) {
  for (let a = 0; a < e.length; a += 5) {
    let o = e[a] ?? 0,
      s = e[a + 1] ?? -1,
      c = e[a + 2] ?? -1,
      l = e[a + 3] ?? -1,
      u = e[a + 4] ?? -1,
      d = s >= 0 ? (t[s] ?? 0) : 0,
      f = c >= 0 ? (t[c] ?? 0) : 0,
      p = l >= 0 ? (t[l] ?? 0) : 0,
      m = u >= 0 ? (t[u] ?? 0) : 0;
    t[o] = n * (t[o] ?? 0) + r * (i + d + f + p + m);
  }
}
function N_(e) {
  if (e instanceof HTMLImageElement) {
    let t = e.naturalWidth,
      n = e.naturalHeight;
    return t > 0 && n > 0 ? { source: e, width: t, height: n } : void 0;
  }
  if (e instanceof HTMLCanvasElement)
    return e.width > 0 && e.height > 0 ? { source: e, width: e.width, height: e.height } : void 0;
}
function P_(e) {
  return e instanceof HTMLImageElement || e instanceof HTMLCanvasElement;
}
function F_(e) {
  (e.controller.abort(), e.promise.then(Qg, () => {}));
}
function I_(e, t) {
  let n = D_(e);
  if (!n.customProperty) return e;
  if (t) {
    let e = getComputedStyle(t).getPropertyValue(n.customProperty).trim();
    if (e) return pS.srgbFromValue(e);
  }
  return pS.srgbFromValue(n.fallback ?? e);
}
function L_(e, t) {
  let n = I_(e, t),
    r = X.toRgb(X(n));
  return [r.r / 255, r.g / 255, r.b / 255, r.a];
}
function R_(e, t, n) {
  return B_(e)
    ? n
      ? t?.aborted
        ? Promise.reject(/* @__PURE__ */ Error(`Texture load aborted`))
        : z_(Ik.acquire(n, e), t)
      : e_(e, t)
    : z_(
        Nk.load(e, () => U_(e)),
        t
      );
}
function z_(e, t) {
  return t
    ? new Promise((n, r) => {
        let i = () => r(/* @__PURE__ */ Error(`Texture load aborted`));
        t.aborted
          ? i()
          : (t.addEventListener(`abort`, i, { once: !0 }),
            e.then(
              (e) => {
                (t.removeEventListener(`abort`, i), n(e));
              },
              (e) => {
                (t.removeEventListener(`abort`, i), r(e));
              }
            ));
      })
    : e;
}
function B_(e) {
  return K_(e, Vk);
}
function V_(e) {
  let { value: t } = e;
  if (V(t)) return t;
  if (U(t) && `src` in t) return t.src;
}
function H_(e) {
  let t = /* @__PURE__ */ new Set();
  for (let n of Object.values(e)) n.type === `file` && B_(n.value) && t.add(n.value);
  return t;
}
function U_(e) {
  return new Promise((t, n) => {
    let r = new Image();
    ((r.crossOrigin = `anonymous`),
      (r.onload = () => t(G_(r) ?? r)),
      (r.onerror = (t) => {
        let r =
          t instanceof ErrorEvent && t.message
            ? `Failed to load texture from "${e}": ${t.message}`
            : `Failed to load texture from "${e}"`;
        n(Error(r));
      }),
      (r.src = e));
  });
}
function W_(e) {
  if (e instanceof HTMLImageElement) return e.src || void 0;
  if (e instanceof HTMLCanvasElement) return e.dataset.src || void 0;
}
function G_(e) {
  if (!q_(e.src)) return;
  let t = e.naturalWidth,
    n = e.naturalHeight;
  if (t <= 0 || n <= 0) return;
  let r = Uk / Math.max(t, n),
    i = Math.max(1, Math.round(t * r)),
    a = Math.max(1, Math.round(n * r)),
    o = document.createElement(`canvas`);
  ((o.width = i), (o.height = a));
  let s = o.getContext(`2d`);
  if (s) return (s.drawImage(e, 0, 0, i, a), (o.dataset.src = e.src), o);
}
function K_(e, t) {
  try {
    let n = new URL(e, `https://placeholder`).pathname.toLowerCase();
    return t.some((e) => n.endsWith(e));
  } catch {
    let n = e.toLowerCase();
    return t.some((e) => n.includes(e));
  }
}
function q_(e) {
  return K_(e, [Hk]);
}
async function J_(e, t, n, r) {
  switch (e.type) {
    case `number`:
    case `enum`:
      return { type: `float`, value: e.value };
    case `boolean`:
      return { type: `boolean`, value: e.value };
    case `color`:
      return { type: `vec4`, value: L_(e.value, t) };
    case `responsiveimage`:
    case `file`: {
      let t = V_(e);
      return t ? { type: `sampler2D`, value: await R_(t, n, r) } : void 0;
    }
    case `array`:
      return { type: `vec4[]`, value: e.value.map((e) => L_(e, t)) };
    default:
      ut(e);
  }
}
async function Y_(e, t, n, r) {
  let i = {},
    a = n ? m_(n) : void 0,
    o = t?.current ?? null;
  try {
    for (let [s, c] of Object.entries(e)) {
      let e = await J_(c, o, r, t);
      if (
        e &&
        ((i[s] = e),
        c.type === `array` && (i[h_(s)] = { type: `int`, value: c.value.length }),
        n && a && s === a && e.type === `sampler2D`)
      ) {
        let t = k_(e.value, () => W_(e.value));
        t && (i[g_(n)] = { type: `sampler2D`, value: t });
      }
    }
  } catch (e) {
    throw (t || $g(i), e);
  }
  return i;
}
function X_(e) {
  return typeof e == `number` ? e : e === `performance` ? 0.75 : e === `consistent` ? 0 : 1;
}
function Z_(e, t, n) {
  let r = e * Rk;
  return { currentTime: r, elapsedTime: r - t, deltaTime: n === t ? 1 / 60 : r - n };
}
function Q_() {
  return t(Xk);
}
function $_(e) {
  let t = g(e);
  return (On(t.current, e) || (t.current = e), t.current);
}
function ev(e, t, n, r, i) {
  let [a, o] = m({}),
    [s, l] = m(e === void 0),
    u = $_(e);
  return (
    M(() => () => Ik.releaseAll(t), [t]),
    M(() => {
      if (!u) {
        (Ik.releaseAll(t),
          c(() => {
            (o({}), l(!0));
          }));
        return;
      }
      let e = new AbortController();
      return (
        Y_(u, t, n, e.signal)
          .then((n) => {
            e.signal.aborted ||
              (Ik.keepOnly(t, H_(u)),
              c(() => {
                (o(n), l(!0));
              }),
              r?.());
          })
          .catch(() => {
            e.signal.aborted || (Ik.releaseAll(t), i?.());
          }),
        () => e.abort()
      );
    }, [u, t, n, r, i]),
    { resolvedUniforms: a, haveUniformsResolved: s }
  );
}
function tv(e, t) {
  (M(() => {
    let n = e.current;
    if (!n) return;
    let r = new ResizeObserver(t);
    return (
      r.observe(n),
      () => {
        r.disconnect();
      }
    );
  }, [e, t]),
    nv(t));
}
function nv(e) {
  M(() => {
    let t = matchMedia(`(resolution: ${N.devicePixelRatio}dppx)`),
      n = () => {
        (e(),
          t.removeEventListener(`change`, n),
          (t = matchMedia(`(resolution: ${N.devicePixelRatio}dppx)`)),
          t.addEventListener(`change`, n));
      };
    return (
      t.addEventListener(`change`, n),
      () => {
        t.removeEventListener(`change`, n);
      }
    );
  }, [e]);
}
function rv(e, t, n, r, a, o, s, u) {
  let d = ue() === !0 || G.current() === G.export,
    f = s || d,
    p,
    h,
    _,
    v;
  if (e !== null) {
    let r = e !== Yk.noSlot;
    ((p = !r), (h = (o ?? !0) && t && !n && !d && !u), (_ = r && !h), (v = `instant`));
  } else ((p = a === `fallback` || !r), (h = (o ?? !0) && !d && !u), (_ = !h), (v = a));
  let [y, b] = m(!1),
    x = l(() => {
      c(() => b(!0));
    }, []);
  (i(() => {
    y && t && c(() => b(!1));
  }, [y, t]),
    y && (p = !0));
  let [S, C] = m(!1),
    w = l(() => {
      c(() => C(!0));
    }, []),
    T = l(() => {
      c(() => C(!1));
    }, []),
    E = g(t);
  return (
    i(() => {
      let e = !E.current && t;
      ((E.current = t), e && S && T());
    }, [S, t, T]),
    S && (p = !0),
    a !== `fallback` && s && !y && !S && r && e !== Yk.noSlot && (p = !1),
    {
      isFallbackOnly: p,
      effectiveAnimated: h,
      effectiveSingleFrame: _,
      effectiveMode: v,
      shouldSkipFallbackOverlay: f,
      onContextLost: x,
      onUniformResolutionSucceeded: T,
      onUniformResolutionFailed: w,
    }
  );
}
function iv(e = !0) {
  let [t, n] = m(!e);
  return (
    Tx(() => {
      if (!e) {
        c(() => n(!0));
        return;
      }
      c(() => n(!1));
      let t = N.setTimeout(() => {
        c(() => n(!0));
      }, Zk);
      return () => {
        clearTimeout(t);
      };
    }, [e]),
    t
  );
}
function av(e, t) {
  for (let n of Object.values(e)) n.type === `sampler2D` && Zg(n.value) && t(n.value);
}
function ov(e, t, n) {
  let r = g(!1);
  i(() => {
    let i = t && !r.current;
    r.current = t;
    let a = !1;
    (av(e, (e) => {
      t
        ? (i && (e.currentTime = 0), e.play().catch(() => {}))
        : (e.pause(),
          e.currentTime !== 0 &&
            (e.addEventListener(`seeked`, () => n(), { once: !0 }), (e.currentTime = 0), (a = !0)));
    }),
      a && n());
  }, [e, t, n]);
}
function sv({
  vertexShader: e = qk,
  fragmentShader: t = Jk,
  animated: n = !0,
  resolutionScale: r,
  uniforms: a,
  onError: o,
  onReady: s,
  onContextLost: u,
  onUniformResolutionSucceeded: d,
  onUniformResolutionFailed: f,
  singleFrame: p = !1,
  heightmapSource: h,
  mouseDataRef: _,
  buffers: v,
}) {
  let y = g(null),
    b = g(null),
    x = g(0),
    S = g(0),
    C = g(0),
    w = g(null),
    [E, D] = m(!1),
    O = g(s);
  i(() => {
    O.current = s;
  }, [s]);
  let k = g(u);
  i(() => {
    k.current = u;
  }, [u]);
  let { resolvedUniforms: A, haveUniformsResolved: j } = ev(a, y, h, d, f),
    P = g(A),
    F = g(n);
  i(() => {
    F.current = n;
  }, [n]);
  let I = g(p);
  i(() => {
    I.current = p;
  }, [p]);
  let ee = g(!1),
    L = l(() => {
      !ee.current &&
        j &&
        ((ee.current = !0),
        O.current?.(),
        (w.current = requestAnimationFrame(() => {
          ((w.current = null), performance.mark?.(`shader_rendered`));
        })));
    }, [j]),
    te = g({ width: 0, height: 0, dpr: 0 }),
    ne = g({ width: 0, height: 0, dpr: 0 }),
    re = l(() => {
      let e = y.current;
      e && (te.current = { width: e.offsetWidth, height: e.offsetHeight, dpr: N.devicePixelRatio });
    }, []),
    ie = l(() => {
      let e = b.current;
      if (!e) return;
      let t = te.current,
        n = ne.current;
      (t.width !== n.width || t.height !== n.height || t.dpr !== n.dpr) &&
        (e.resize(), (ne.current = { ...t }));
    }, []),
    ae = l(
      (e) => {
        let t = b.current;
        if (!t) return;
        if (I.current) {
          if (!j) return;
          (ie(), t.render(0, 0, P.current, _?.current ?? Bk), L());
          return;
        }
        if (!j) {
          x.current = requestAnimationFrame(ae);
          return;
        }
        (ee.current || ((S.current = e * Rk), (C.current = S.current)), ie());
        let { currentTime: n, elapsedTime: r, deltaTime: i } = Z_(e, S.current, C.current);
        ((C.current = n),
          t.render(r, i, P.current, _?.current ?? Bk),
          L(),
          !I.current && F.current && (x.current = requestAnimationFrame(ae)));
      },
      [j, L, _, ie]
    ),
    oe = l(() => {
      let e = b.current;
      e && j && (ie(), e.render(0, 0, P.current, _?.current ?? Bk), L());
    }, [j, _, L, ie]);
  (i(() => {
    ((P.current = A), I.current && b.current && oe());
  }, [A, oe]),
    ov(A, n && !p && j && E, oe),
    M(() => {
      let n = y.current;
      if (n && j) {
        ee.current = !1;
        try {
          let i = new yk(n, e, t, X_(r), k.current, v);
          ((b.current = i),
            (ne.current = { width: 0, height: 0, dpr: 0 }),
            re(),
            ie(),
            (S.current = performance.now() * Rk),
            (C.current = S.current),
            I.current ? oe() : (x.current = requestAnimationFrame(ae)),
            c(() => D(!0)));
        } catch (e) {
          (c(() => D(!1)), o && e instanceof Error && o(e));
        }
        return () => {
          (cancelAnimationFrame(x.current),
            w.current !== null && cancelAnimationFrame(w.current),
            b.current?.dispose(),
            (b.current = null));
        };
      }
    }, [e, t, r, ae, oe, o, v, j, re, ie]));
  let se = g(n),
    ce = g(p);
  return (
    M(() => {
      let e = n && !se.current,
        t = !p && ce.current;
      ((e || t) &&
        b.current &&
        ((S.current = performance.now() * Rk),
        (C.current = S.current),
        (x.current = requestAnimationFrame(ae))),
        (se.current = n),
        (ce.current = p));
    }, [n, p, ae]),
    tv(
      y,
      l(() => {
        let e = b.current;
        if (!e || !j) return;
        if ((re(), I.current)) {
          oe();
          return;
        }
        ie();
        let {
          currentTime: t,
          elapsedTime: n,
          deltaTime: r,
        } = Z_(performance.now(), S.current, C.current);
        ((C.current = t), e.render(n, r, P.current, _?.current ?? Bk));
      }, [j, _, oe, re, ie])
    ),
    /* @__PURE__ */ T(`canvas`, { ref: y, style: Qk, draggable: !1 })
  );
}
function cv() {
  ((tA = z(0)), (nA = z(0)));
  let e = 0,
    t = 0;
  function n() {
    tA && nA && (tA.set(e), nA.set(t));
  }
  N !== void 0 &&
    (N.addEventListener(
      `pointermove`,
      uv((r) => {
        ((e = r.clientX), (t = r.clientY), Ge.update(n));
      })
    ),
    N.addEventListener(`dragover`, (r) => {
      ((e = r.clientX), (t = r.clientY), Ge.update(n));
    }));
}
function lv(e = !0) {
  return (e && !tA && cv(), { x: tA, y: nA });
}
function uv(e) {
  return (t) => {
    t.pointerType === `mouse` && e(t);
  };
}
function dv(e) {
  let t = e ?? rA;
  return t.duration === void 0 ? t : { ...t, duration: t.duration * 1e3 };
}
function fv(e, t, n) {
  return !e || e.width <= 0 || e.height <= 0
    ? [zk, zk]
    : [(t - e.left) / e.width, 1 - (n - e.top) / e.height];
}
function pv(e, t) {
  let n = g(Bk),
    r = t?.enabled ?? !1,
    i = dv(t?.springOptions),
    a = g(null),
    o = l(() => {
      let t = e.current;
      t && (a.current = t.getBoundingClientRect());
    }, [e]),
    { x: s, y: c } = lv(r),
    u = ze(0),
    d = ze(0),
    f = s ?? u,
    p = c ?? d,
    m = Ie(f, (e) => fv(a.current, e, p.get())[0]),
    h = Ie(p, (e) => fv(a.current, f.get(), e)[1]),
    _ = ze(0),
    v = ze(0),
    y = Ue(m, i),
    b = Ue(h, i),
    x = Ue(_, i),
    S = Ue(v, i),
    C = Ve(y),
    w = Ve(b);
  return (
    M(() => {
      if (!r) return;
      let t = e.current;
      if (!t) return;
      o();
      let i = !1;
      N.addEventListener(`scroll`, o, { passive: !0, capture: !0 });
      let a = ce(o),
        s = ce(t, o),
        c = Je(
          t,
          () => (
            o(),
            i || ((i = !0), y.jump(m.get()), b.jump(h.get())),
            Ge.update(() => v.set(1)),
            () => Ge.update(() => v.set(0))
          )
        ),
        l = je(t, () => (Ge.update(() => _.set(1)), () => Ge.update(() => _.set(0))));
      return () => {
        (N.removeEventListener(`scroll`, o, { capture: !0 }), a(), s(), c(), l(), (n.current = Bk));
      };
    }, [r, e, m, h, _, v, y, b, o]),
    mv(
      r,
      l(() => {
        n.current = {
          position: [y.get(), b.get(), C.get(), w.get()],
          pointerDown: x.get(),
          hover: S.get(),
        };
      }, [y, b, x, S, C, w])
    ),
    n
  );
}
function mv(e, t) {
  M(() => {
    if (!e) return;
    let n = 0,
      r = performance.now();
    function i(e) {
      (t(e, e - r), (r = e), (n = requestAnimationFrame(i)));
    }
    return ((n = requestAnimationFrame(i)), () => cancelAnimationFrame(n));
  }, [e, t]);
}
function hv(e, t, n) {
  let r = Q_(),
    [i, a] = m(Yk.noSlot);
  return (
    M(() => {
      if (!r || !e) return;
      (r.register(e, t, n), c(() => a(r.getSlotStatus(e))));
      let i = r.subscribe(e, () => {
        c(() => a(r.getSlotStatus(e)));
      });
      return () => {
        i();
      };
    }, [r, e, t, n]),
    M(() => {
      if (r && e)
        return () => {
          r.deregister(e);
        };
    }, [r, e]),
    r ? i : null
  );
}
function gv(e, t, n, r = cA) {
  let [i, a] = j.useState(e),
    [o, s] = j.useState(e);
  return (
    t && e !== o && (s(e), a(e)),
    [
      i,
      a,
      j.useCallback(
        (e) => {
          xa(e) ||
            (t && a(r(e)),
            n &&
              j.startTransition(() => {
                n(e);
              }));
        },
        [r, n, t]
      ),
    ]
  );
}
function _v(e, t) {
  return !e || t !== `date` ? e : e.includes(`T`) ? e.split(`T`)[0] : e;
}
function vv() {
  return /* @__PURE__ */ T(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    width: `8`,
    height: `8`,
    viewBox: `0 0 8 8`,
    "aria-hidden": `true`,
    children: /* @__PURE__ */ T(`path`, {
      d: `m1.5 6.5 5-5M6.5 6.5l-5-5`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.5`,
      strokeLinecap: `round`,
    }),
  });
}
function yv(e, t) {
  M(() => {
    function n(n) {
      n.key === `Escape` && e && (n.preventDefault(), n.stopPropagation(), t());
    }
    return (N.addEventListener(`keyup`, n), () => N.removeEventListener(`keyup`, n));
  }, [e, t]);
}
function bv(e, t, n, r) {
  let i = N.innerHeight - r,
    a = Math.min(N.innerWidth - n, t),
    o = i / e;
  return Math.min(a, o);
}
function xv(e, { width: t, height: n }) {
  if (!e.src || !e.srcSet) return;
  let r = new N.Image();
  return (
    (r.src = e.src),
    (r.srcset = e.srcSet),
    (r.sizes = e.sizes || ``),
    (r.width = t),
    (r.height = n),
    r.decode()
  );
}
function Sv() {
  return (
    document.getElementById(`template-overlay`) ??
    document.getElementById(`overlay`) ??
    document.body
  );
}
function Cv(e, t) {
  return H(e) ? e : (t ?? 0);
}
function wv(e) {
  return Cv(e?.paddingTop, e?.padding) + Cv(e?.paddingBottom, e?.padding);
}
function Tv(e) {
  return Cv(e?.paddingLeft, e?.padding) + Cv(e?.paddingRight, e?.padding);
}
function Ev(e, t) {
  if (!e || !t?.src) return t;
  let n = new URL(t.src);
  return (
    n.searchParams.delete(`scale-down-to`),
    n.searchParams.delete(`lossless`),
    {
      ...t,
      sizes: `min(100vw, ${e.maxWidth - Tv(e)}px)`,
      srcSet: rs(t.nodeFixedSize, t, t.src).srcSet,
    }
  );
}
function Dv(e) {
  if (!e) return !1;
  for (let t in e) {
    if (!(t in bA)) continue;
    let n = bA[t],
      r = e[t];
    if (H(n) && H(r) && n !== r) return !0;
  }
  return !1;
}
function Ov(e) {
  let t = Ae.get(e.current);
  if (!t) return !1;
  if (Dv(t.projection?.latestValues)) return !0;
  let n = t.projection?.path;
  if (!n || n.length === 0) return !1;
  for (let e of n) if (Dv(e.latestValues)) return !0;
  return !1;
}
function kv(e) {
  return E(function ({ lightbox: r, lightboxClassName: i, onClick: a, ...o }, s) {
    let d = t(Le),
      f = t(lk),
      p = !!f,
      h = g(null),
      v = s ?? h,
      y = g(),
      b = S(() => Ev(r, o.background), [r, o.background]),
      [w, E] = m(!1),
      [D, O] = m(),
      k = l(() => {
        r &&
          (w
            ? c(() => {
                E(!0);
              })
            : Ge.read(() => {
                if (!v.current) return;
                let e = getComputedStyle(v.current),
                  t =
                    v.current.getAttribute(`data-border`) === `true`
                      ? getComputedStyle(v.current, `::after`)
                      : void 0,
                  n = v.current.offsetWidth ?? 1,
                  i = v.current.offsetHeight ?? 1,
                  a = Ov(v) || p ? { duration: 0 } : r.transition;
                c(() => {
                  (O({
                    borderRadius: e.borderRadius,
                    aspectRatio: n / (i || 1),
                    borderTop: t?.borderTopWidth,
                    borderRight: t?.borderRightWidth,
                    borderBottom: t?.borderBottomWidth,
                    borderLeft: t?.borderLeftWidth,
                    borderStyle: t?.borderStyle,
                    borderColor: t?.borderColor,
                    transition: a,
                    imageRendering: e.imageRendering,
                    filter: e.filter,
                  }),
                    E(!0),
                    f?.stop());
                });
              }));
      }, [r, w, v, f?.stop, p]),
      A = D?.aspectRatio ?? 1,
      j = Ph(() => {
        if (!r || !b?.src) return;
        let e = y.current?.[b.src];
        if (e) return e;
        let t = bv(A, r.maxWidth, Tv(r), wv(r)),
          n = xv(b, { width: t, height: t * A });
        return ((y.current = { [b.src]: n }), n);
      }),
      N = l(
        async (e) => {
          (a?.(e), !w && r && b && (await j(), k()));
        },
        [a, k, w, b, r, j]
      ),
      P = l((e) => {
        (e?.stopPropagation(),
          c(() => {
            E(!1);
          }));
      }, []);
    (yv(w, P),
      M(() => {
        if (!r) return;
        let e;
        function t() {
          e = setTimeout(() => {
            j();
          }, 50);
        }
        function n() {
          clearTimeout(e);
        }
        let i = v.current;
        return (
          i?.addEventListener(`mouseenter`, t),
          i?.addEventListener(`mouseleave`, n),
          i?.addEventListener(`pointerdown`, j),
          () => {
            (n(),
              i?.removeEventListener(`mouseenter`, t),
              i?.removeEventListener(`mouseleave`, n),
              i?.removeEventListener(`pointerdown`, j));
          }
        );
      }, [j, v, r]));
    let F = n(),
      I = D?.transition ?? o.transition ?? d.transition,
      ee = D?.borderRadius,
      te = D?.imageRendering,
      ne = D?.filter,
      re = D?.borderTop,
      ie = D?.borderRight,
      ae = D?.borderBottom,
      oe = D?.borderLeft,
      se = D?.borderStyle,
      ce = D?.borderColor,
      R = !!(re || ie || ae || oe || se || ce),
      z = R
        ? {
            "--border-top-width": re,
            "--border-right-width": ie,
            "--border-bottom-width": ae,
            "--border-left-width": oe,
            "--border-style": se,
            "--border-color": ce,
          }
        : void 0,
      le = { [NT]: o.id },
      ue = Cv(r?.paddingTop, r?.padding),
      de = Cv(r?.paddingBottom, r?.padding),
      B = Cv(r?.paddingLeft, r?.padding),
      fe = Cv(r?.paddingRight, r?.padding),
      pe = D?.borderRadius ? { ...o.style, borderRadius: D.borderRadius } : o.style,
      me = w ? (o.layoutDependency ? `${o.layoutDependency}-open` : `open`) : o.layoutDependency,
      he = p && w ? void 0 : (o.layoutId ?? (r ? F : void 0));
    return /* @__PURE__ */ C(_, {
      children: [
        /* @__PURE__ */ T(e, {
          ...o,
          style: pe,
          onClick: N,
          layoutId: he,
          ref: v,
          layoutDependency: me,
          transition: I,
        }),
        /* @__PURE__ */ T(Fe, {
          onExitComplete: () => {
            c(() => {
              (O(void 0), f?.start());
            });
          },
          children:
            w &&
            r &&
            b &&
            /* @__PURE__ */ T(
              u,
              {
                children: x(
                  /* @__PURE__ */ C(_, {
                    children: [
                      /* @__PURE__ */ T(L.div, {
                        ...le,
                        className: i,
                        onClick: P,
                        style: {
                          position: `fixed`,
                          inset: 0,
                          zIndex: r.zIndex,
                          backgroundColor: r.backdrop ?? `transparent`,
                        },
                        transition: I,
                        initial: xA,
                        animate: SA,
                        exit: xA,
                      }),
                      /* @__PURE__ */ T(L.div, {
                        ...le,
                        className: i,
                        style: {
                          alignItems: `center`,
                          display: `flex`,
                          inset: `${ue}px ${fe}px ${de}px ${B}px`,
                          justifyContent: `center`,
                          pointerEvents: `none`,
                          position: `fixed`,
                          zIndex: r.zIndex,
                        },
                        children: /* @__PURE__ */ T(`div`, {
                          style: {
                            alignItems: `center`,
                            aspectRatio: A,
                            display: `flex`,
                            justifyContent: `center`,
                            maxHeight: `100%`,
                            position: `relative`,
                            width: `100%`,
                            maxWidth: r.maxWidth,
                          },
                          children: /* @__PURE__ */ T(L.div, {
                            layoutId: he,
                            transition: I,
                            onClick: k,
                            className: `framer-lightbox-container`,
                            "data-border": R,
                            style: {
                              aspectRatio: A,
                              borderRadius: ee,
                              bottom: 0,
                              position: `absolute`,
                              top: 0,
                              userSelect: `none`,
                              imageRendering: te,
                              filter: ne,
                              ...z,
                            },
                            children: /* @__PURE__ */ T(fs, {
                              image: b,
                              alt: b.alt,
                              draggable: o.draggable,
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  Sv()
                ),
              },
              `backdrop`
            ),
        }),
      ],
    });
  });
}
function Av(e) {
  return j.isValidElement(e) ? e.props[`data-framer-order-id`] : void 0;
}
function jv(e, t) {
  let n = /* @__PURE__ */ new Map(),
    r = [],
    i = new Set(t);
  for (let t of e) {
    let e = Av(t);
    e && i.has(e) ? n.set(e, t) : r.push(t);
  }
  let a = [];
  for (let e of t) {
    let t = n.get(e);
    t && a.push(t);
  }
  return [...a, ...r];
}
function Mv(e, t) {
  let n = j.Children.toArray(e);
  return t
    ? n.flatMap((e) =>
        j.isValidElement(e) && e.type === j.Fragment ? j.Children.toArray(e.props.children) : e
      )
    : n;
}
function Nv(e, t) {
  let n = Array.from({ length: e }, () => []);
  return (
    t.forEach((t, r) => {
      let i = Iv(e, r);
      n[i]?.push(t);
    }),
    n
  );
}
function Pv(e) {
  return { display: `flex`, flexDirection: `column`, rowGap: e, width: `100%` };
}
function Fv(e) {
  return `masonry-stack-${e}`;
}
function Iv(e, t) {
  return e <= 0 ? 0 : t % e;
}
function Lv(e) {
  let t = {};
  for (let n in e) (fe(n) || PS(n)) && (t[n] = e[n]);
  return t;
}
function Rv(e, t) {
  return DA && !t
    ? Document.parseHTMLUnsafe(e)
    : ((EA ??= new DOMParser()), EA.parseFromString(e, t ?? `text/html`));
}
function zv(e) {
  return e
    .replaceAll(`&`, `&amp;`)
    .replaceAll(`<`, `&lt;`)
    .replaceAll(`>`, `&gt;`)
    .replaceAll(`"`, `&quot;`)
    .replaceAll(`'`, `&#39;`);
}
function Bv(e, t, n, r) {
  return e.replace(OA, (e, i, a, o, s, c, l) => {
    if (a.toLowerCase() !== `a`) return e;
    let u = s || c,
      d = wd(u.replace(/&amp;/gu, `&`));
    if (!d?.target) return e;
    let f = t(d.target);
    if (!Xh(f) || !Xh(n)) return e;
    let p = f.path,
      m = n.path;
    if (!p || !m) return e;
    let h = ` data-framer-page-link-target="${d.target}"`,
      g = Ln(f, d.element ?? void 0);
    g && (h += ` data-framer-page-link-element="${d.element}"`);
    let _ = Ed(u);
    if (!_ || V(_)) return e;
    Ud(n, _, r) && (h += ` data-framer-page-link-current`);
    let v = p,
      y = Object.assign({}, r, d.collectionItem?.pathVariables);
    if (
      (Object.keys(y).length > 0 && (v = v.replace(qT, (e, t) => `` + y[t])),
      d.collectionItem?.pathVariables)
    ) {
      let e = new URLSearchParams(d.collectionItem.pathVariables);
      h += ` data-framer-page-link-path-variables="${e}"`;
    }
    return ((v = oa(m, v)), i + o + `"${zv(v + (g ? `#${g}` : ``))}"` + h + l);
  });
}
function Vv(e, t) {
  return e.length === t.length && e.every((e, n) => e === t[n]);
}
function Hv(e) {
  switch (e) {
    case `top`:
      return `flex-start`;
    case `center`:
      return `center`;
    case `bottom`:
      return `flex-end`;
  }
}
function Uv(e, t, n) {
  let r = g([]);
  Vv(r.current, e) ||
    ((r.current = e),
    zS.fontStore.loadFonts(e).then(({ newlyLoadedFontCount: e }) => {
      t && n.current && G.current() === G.canvas && e > 0 && cc(n.current);
    }));
}
function Wv() {
  return { current: null };
}
async function Gv(e, t) {
  let n = e.current;
  if (n) return n;
  let r,
    i = new Promise((e, n) => {
      ((r = e), t.signal.addEventListener(`abort`, () => n()));
    });
  return (
    Object.defineProperty(e, "current", {
      get() {
        return n;
      },
      set(e) {
        ((n = e), e === null ? t.abort() : r(e));
      },
      configurable: !0,
    }),
    i
  );
}
function Kv(e) {
  return e in MA;
}
function qv(e, t) {
  let n = {};
  for (let r in e) {
    if (!Kv(r)) continue;
    let i = e[r],
      a = MA[r];
    tt(i) || tt(a) || (t && r !== `opacity`) || (n[r] = [i, a]);
  }
  return n;
}
function Jv(e, t = `character`, n, r, i) {
  if (r) {
    let t = Wv();
    return (n.add(t), /* @__PURE__ */ T(`span`, { ref: t, style: i, children: e }));
  }
  switch (t) {
    case `character`:
    case `line`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let a = t === r,
          o = e.length <= 12;
        return /* @__PURE__ */ C(
          u,
          {
            children: [
              /* @__PURE__ */ T(`span`, {
                style: { whiteSpace: o ? `nowrap` : `unset` },
                children: e.match(NA)?.map((e, t) => {
                  let r = Wv();
                  return (
                    n.add(r),
                    /* @__PURE__ */ T(`span`, { ref: r, style: i, children: e }, e + t)
                  );
                }),
              }),
              a ? null : ` `,
            ],
          },
          e + t + a
        );
      });
    }
    case `word`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let a = t === r,
          o = Wv();
        return (
          n.add(o),
          /* @__PURE__ */ C(
            u,
            {
              children: [
                /* @__PURE__ */ T(`span`, { ref: o, style: i, children: e }),
                a ? null : ` `,
              ],
            },
            e + t + a
          )
        );
      });
    }
    default:
      return e;
  }
}
function Yv(e) {
  let t = e.type;
  switch (t) {
    case `appear`:
      return e.tokenization ?? `character`;
    default:
      ut(t);
  }
}
function Xv(e) {
  let t = [];
  return (
    H(e.x) && t.push(`translateX(${e.x}px)`),
    H(e.y) && t.push(`translateY(${e.y}px)`),
    H(e.scale) && t.push(`scale(${e.scale})`),
    H(e.rotate) && t.push(`rotate(${e.rotate}deg)`),
    H(e.rotateX) && t.push(`rotateX(${e.rotateX}deg)`),
    H(e.rotateY) && t.push(`rotateY(${e.rotateY}deg)`),
    H(e.skewX) && t.push(`skewX(${e.skewX}deg)`),
    H(e.skewY) && t.push(`skewY(${e.skewY}deg)`),
    t.join(` `)
  );
}
function Zv(e, t, n, r) {
  if (!n?.effect) return;
  let i = n.type;
  switch (i) {
    case `appear`:
      switch (n.tokenization) {
        case `element`:
          return !e || !t
            ? void 0
            : {
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : Xv(n.effect),
              };
        default:
          return !e || !t
            ? { display: `inline-block` }
            : {
                display: `inline-block`,
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : Xv(n.effect),
              };
      }
    default:
      ut(i);
  }
}
function Qv(e, t, n) {
  let r = qo(() => /* @__PURE__ */ new Set()),
    i = Xo(),
    a = n || !i,
    o = ue(),
    s = g({ hasMounted: !1, hasAnimatedOnce: !1, isAnimating: !1, effect: e });
  s.current.effect = e;
  let c = e?.trigger ?? `onMount`,
    l = e?.target,
    u = e?.threshold;
  M(() => {
    if (!a || n) return;
    s.current.hasMounted = !0;
    function e() {
      let { effect: e } = s.current;
      if (
        !a ||
        !e ||
        (e?.repeat !== !0 && s.current.hasAnimatedOnce) ||
        (e?.type === `appear` && s.current.isAnimating)
      )
        return;
      Object.assign(s.current, { hasAnimatedOnce: !0, isAnimating: !0 });
      let t = e.type;
      switch (t) {
        case `appear`: {
          let { transition: t, startDelay: n, repeat: i, tokenization: a } = e,
            c = { current: void 0 };
          return (
            ey(
              a,
              e.effect,
              r,
              t,
              n,
              i,
              o,
              () => {
                Object.assign(s.current, { isAnimating: !1 });
              },
              c
            ),
            () => c.current?.()
          );
        }
        default:
          ut(t);
      }
    }
    switch (c) {
      case `onMount`:
        e();
        return;
      case `onInView`: {
        let n = t?.current;
        return n ? Se(n, e, { amount: u ?? 0 }) : void 0;
      }
      case `onScrollTarget`: {
        let t = l?.ref?.current;
        return t
          ? Se(t, e, {
              amount: u ?? 0,
              root: document,
              margin: l?.offset ? `${l.offset}px 0px 0px 0px` : void 0,
            })
          : void 0;
      }
      default:
        ut(c);
    }
  }, [a, r, n, t, l, u, c]);
  let d = !!e,
    f = e ? Yv(e) : void 0;
  return S(
    () => ({
      getTokenizer: () => {
        if ((r.clear(), !d)) return;
        let { hasMounted: e, hasAnimatedOnce: t, effect: i } = s.current,
          c = Zv(a, n || $v(e, t, i), s.current.effect, o);
        return {
          text: (e) => Jv(e, f, r, o, c),
          props: (e) => {
            if (i?.tokenization !== `element`) return;
            let t = Wv();
            return (r.add(t), { ref: t, style: { ...e, ...c } });
          },
        };
      },
      play: () => {
        let { effect: e } = s.current;
        if (!e) return;
        let t = e.type;
        switch (t) {
          case `appear`: {
            let { transition: t, startDelay: n } = e;
            ey(f, e.effect, r, t, n, !1, o);
            break;
          }
          default:
            ut(t);
        }
      },
    }),
    [a, d, r, n, f]
  );
}
function $v(e, t, n) {
  return !(
    (e && n?.trigger === `onMount`) ||
    (t && !n?.repeat && (n?.trigger === `onInView` || n?.trigger === `onScrollTarget`))
  );
}
async function ey(e = `character`, t, n, r, i = 0, a = !1, o, s, c) {
  let l = qv(t, o),
    u = new AbortController();
  switch ((c && (c.current = () => u.abort()), e)) {
    case `character`:
    case `element`:
    case `word`: {
      let e = await ty(n, u);
      if (
        e === null ||
        (Pe(e, l, { ...r, restDelta: 0.001, delay: ie(r?.delay ?? 0, { startDelay: i }) }).then(
          () => s?.()
        ),
        !a || !c)
      )
        return;
      c.current = () => {
        let n = o ? { opacity: t.opacity } : t;
        Pe(e, n, { ...r, restDelta: 0.001, delay: ie(r?.delay ?? 0, { startDelay: i }) });
      };
      return;
    }
    case `line`: {
      try {
        for (let e of n) await Gv(e, u);
      } catch {
        return;
      }
      let e;
      if (
        (Ge.read(() => {
          ((e = ny(n)),
            e.length !== 0 &&
              Ge.update(() => {
                let t = e.map((e, t) =>
                  Pe(e, l, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) })
                );
                Promise.all(t).then(() => s?.());
              }));
        }),
        !a || !c)
      )
        return;
      c.current = () => {
        if (e.length === 0) return;
        let n = o ? { opacity: t.opacity } : t;
        e.forEach((e, t) => {
          Pe(e, n, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) });
        });
      };
      return;
    }
    default:
      ut(e);
  }
}
async function ty(e, t) {
  if (e.size === 0) return null;
  let n = [];
  for (let r of e)
    try {
      let e = await Gv(r, t);
      e && n.push(e);
    } catch {
      return null;
    }
  return n;
}
function ny(e) {
  let t = [],
    n = [],
    r = null;
  for (let i of e) {
    if (!i.current) continue;
    let e = i.current.offsetTop,
      a = i.current.offsetHeight;
    (!a || r === null || e === r ? n.push(i.current) : (t.push(n), (n = [i.current])),
      a && (r = e));
  }
  return (t.push(n), t);
}
function ry(e) {
  return e.type === u;
}
function iy(e) {
  return e.type === `br`;
}
function ay(e, t, n, r, i = {}, o, s = ry(e) ? -1 : 0) {
  let c = p.toArray(e.props.children);
  tt(n) || (c = c.slice(0, 1));
  let l = !0;
  c = c.map((e) => {
    if (((!w(e) || !iy(e)) && (l = !1), w(e))) return ay(e, t, n, r, i, o, s + 1);
    let a = tt(n) ? e : n;
    return V(a) && o ? o.text(a) : a;
  });
  let { "data-preset-tag": u, ...d } = e.props;
  if (V(e.type) || ee(e.type)) {
    let n = Ye(e.type) || e.type,
      a = u || n,
      f = V(a) ? t?.[a] : void 0;
    ((d.className = Xl(`framer-text`, d.className, f)),
      o && s === 0 && !l && Object.assign(d, o.props(d.style)));
    let m = n === `h1` || n === `h2` || n === `h3` || n === `h4` || n === `h5` || n === `h6`,
      h = t?.anchor;
    if (m && h) {
      let e = oy(c, i);
      d.id = e;
      let t = Xl(`framer-text`, h),
        n = /* @__PURE__ */ T(`a`, { href: `#${e}`, className: t, children: c });
      ((d.style = { ...d.style, scrollMarginTop: r }), (c = [n]));
    }
    a === `ol` &&
      (d.style = {
        ...d.style,
        [Xt]: cy(d.start ?? 1, p.count(d.children), d.style?.[`--list-style-type`] ?? ``),
      });
  }
  return a(e, d, ...c);
}
function oy(e, t) {
  let n = Xi(e.map(sy).join(``)),
    r = t[n] ?? 0;
  return (r > 0 && (n += `-${r}`), (t[n] = r + 1), n);
}
function sy(e) {
  return V(e) || H(e)
    ? e.toString()
    : w(e)
      ? sy(e.props.children)
      : Array.isArray(e)
        ? e.map(sy).join(``)
        : ``;
}
function cy(e, t, n) {
  return _t(Number(e) || 1, t, n);
}
function ly(e) {
  let t = (e * Math.PI) / 180,
    n = { x: -Math.sin(t) * 100, y: Math.cos(t) * 100 },
    r = ao(n.x, n.y),
    i = qS(ao(0.5, 0.5), r),
    a = Z.points({ x: 0, y: 0, width: 1, height: 1 }),
    o = a
      .map((e) => ({ point: e, distance: ao.distance(r, e) }))
      .sort((e, t) => e.distance - t.distance),
    s = o[0]?.point,
    c = o[1]?.point;
  W(s && c, `linearGradientLine: Must have 2 closest points.`);
  let [l, u] = a.filter((e) => !ao.isEqual(e, s) && !ao.isEqual(e, c));
  W(l && u, `linearGradientLine: Must have 2 opposing points.`);
  let d = qS.intersection(i, qS(s, c)),
    f = qS.intersection(i, qS(l, u));
  return (W(d && f, `linearGradientLine: Must have a start and end point.`), qS(d, f));
}
function uy(e, t) {
  let n = ly(e.angle),
    r = _c(e),
    i = r[0]?.position ?? 0,
    a = r[r.length - 1]?.position ?? 1,
    o = qS.pointAtPercentDistance(n, i),
    s = qS.pointAtPercentDistance(n, a),
    c = B([i, a], [0, 1]);
  return {
    id: `id${t}g${TC.hash(e)}`,
    x1: o.x,
    y1: o.y,
    x2: s.x,
    y2: s.y,
    stops: r.map((t) => ({
      color: t.value,
      alpha: yC.getAlpha(t.value) * e.alpha,
      position: c(t.position),
    })),
  };
}
function dy(e, t) {
  return {
    id: `id${t}g${DC.hash(e)}`,
    widthFactor: e.widthFactor,
    heightFactor: e.heightFactor,
    centerAnchorX: e.centerAnchorX,
    centerAnchorY: e.centerAnchorY,
    stops: _c(e).map((t) => ({
      color: t.value,
      alpha: yC.getAlpha(t.value) * e.alpha,
      position: t.position,
    })),
  };
}
function fy(e) {
  if (!V(e) || e.charAt(e.length - 1) !== `%`) return !1;
  let t = e.slice(0, -1);
  return H(parseFloat(t));
}
function py(e) {
  let t = e.slice(0, -1),
    n = parseFloat(t);
  return H(n) ? n : 50;
}
function my(e) {
  return fy(e) ? py(e) / 100 : e === `left` ? 0 : e === `right` ? 1 : 0.5;
}
function hy(e) {
  return fy(e) ? py(e) / 100 : e === `top` ? 0 : e === `bottom` ? 1 : 0.5;
}
function gy(e, t, n, r) {
  if (((e = eS.get(e, `#09F`)), !KS.isImageObject(e) || !e.pixelWidth || !e.pixelHeight)) return;
  let i = e.pixelWidth,
    a = e.pixelHeight,
    o,
    { fit: s } = e,
    c = 1,
    l = 1,
    u = 0,
    d = 0;
  if (s === `fill` || s === `fit` || s === `tile` || !s) {
    let n = 1,
      f = 1,
      p = i / a,
      m = t.height * p,
      h = t.width / p,
      g = m / t.width,
      _ = h / t.height;
    if (s === `tile`) {
      ((e.backgroundSize ??= 1),
        (c = Math.round(e.backgroundSize * (i / 2))),
        (l = Math.round(e.backgroundSize * (a / 2))));
      let n = t.x ?? 0,
        s = t.y ?? 0,
        f = 0,
        p = 0;
      (r && ((f = n), (p = s)),
        (u = (t.width - c) * my(e.positionX) + f),
        (d = (t.height - l) * hy(e.positionY) + p),
        (o = `translate(${u + n}, ${d + s})`));
    } else
      ((s === `fill` || !s ? _ > g : _ < g)
        ? ((f = _), (d = (1 - _) * hy(e.positionY)))
        : ((n = g), (u = (1 - g) * my(e.positionX))),
        (o = `translate(${u}, ${d}) scale(${n}, ${f})`));
  }
  return {
    id: `id${n}g-fillImage`,
    path: e.src ?? ``,
    transform: o,
    width: c,
    height: l,
    offsetX: u,
    offsetY: d,
  };
}
function _y(e) {
  return e.startsWith(`data:${VA}`);
}
function vy(e, t) {
  if (/^\w+:/u.test(e) && !_y(e)) return e;
  t = typeof t == `number` ? (t <= 512 ? 512 : t <= 1024 ? 1024 : t <= 2048 ? 2048 : 4096) : void 0;
  let n = G.current() === G.export;
  return zS.assetResolver(e, { pixelSize: t, isExport: n }) ?? ``;
}
function yy(e, t) {
  return (M(() => qA.subscribeToTemplate(e), [e]), qA.template(e, t));
}
function by(e) {
  try {
    let t = Rv(e).getElementsByTagName(`svg`)[0];
    if (!t) throw Error(`no svg element found`);
    return t;
  } catch {
    return;
  }
}
function xy(e, t) {
  Cy(e, Sy(t));
}
function Sy(e) {
  return e.replace(/[^\w\-:.]|^[^a-z]+/gi, ``);
}
function Cy(e, t) {
  (wy(e, t),
    Array.from(e.children).forEach((e) => {
      Cy(e, t);
    }));
}
function wy(e, t) {
  e.getAttributeNames().forEach((n) => {
    let r = e.getAttribute(n);
    if (!r) return;
    if ((n === `id` && e.setAttribute(n, `${t}_${r}`), n === `href` || n === `xlink:href`)) {
      let [i, a] = r.split(`#`);
      if (i) return;
      e.setAttribute(n, `#${t}_${a}`);
      return;
    }
    let i = `url(#`;
    if (r.includes(i)) {
      let a = r.replace(i, `${i}${t}_`);
      e.setAttribute(n, a);
    }
  });
}
function Ty(e) {
  if (!e) return;
  let t = /(-?[\d.]+)([a-z%]*)/u.exec(e);
  if (t?.[1] !== void 0 && t?.[2] !== void 0 && !t[2]?.startsWith(`%`))
    return Math.round(parseFloat(t[1]) * (JA[t[2]] || 1));
}
function Ey(e) {
  let t = Ty(e.getAttribute(`width`)),
    n = Ty(e.getAttribute(`height`));
  if (typeof t == `number` && typeof n == `number` && !(t <= 0 || n <= 0))
    return { width: t, height: n };
}
function Dy(e) {
  return e.indexOf(`image`) >= 0;
}
function Oy(e) {
  return e.indexOf(`var(--`) >= 0;
}
function ky(e) {
  return !!(
    e.borderRadius ||
    e.borderBottomLeftRadius ||
    e.borderBottomRightRadius ||
    e.borderTopLeftRadius ||
    e.borderTopRightRadius
  );
}
function Ay(e, t) {
  let n = e.current;
  if (!n) return;
  let r = t.providedWindow ?? Mt,
    i = n.firstElementChild;
  if (!i || !(i instanceof r.SVGSVGElement)) return;
  if (!i.getAttribute(`viewBox`)) {
    let e = qA.getViewBox(t.svg);
    e && i.setAttribute(`viewBox`, e);
  }
  let { withExternalLayout: a, parentSize: o } = t;
  if (!a && As(t) && o !== 1 && o !== 2) return;
  let { intrinsicWidth: s, intrinsicHeight: c, _constraints: l } = t;
  (i.viewBox?.baseVal?.width === 0 &&
    i.viewBox?.baseVal?.height === 0 &&
    q(s) &&
    q(c) &&
    i.setAttribute(`viewBox`, `0 0 ${s} ${c}`),
    l?.aspectRatio
      ? i.setAttribute(`preserveAspectRatio`, ``)
      : i.setAttribute(`preserveAspectRatio`, `none`),
    i.setAttribute(`width`, `100%`),
    i.setAttribute(`height`, `100%`));
}
function jy({ height: e, width: t, isCarouselControl: n, children: r }) {
  let i = My();
  if (n) return null;
  if (!i || !r) return r;
  let { props: a } = i;
  return /* @__PURE__ */ T(L.li, {
    ...a,
    style: { ...a.style, width: t ?? `fit-content`, height: e ?? `fit-content` },
    children: r,
  });
}
function My() {
  try {
    return yg();
  } catch {
    return;
  }
}
function Ny(e) {
  return e > $A ? `lazy` : void 0;
}
function Py(e, t, n) {
  let r = Ly(t);
  (!n?.supportsExplicitInterCodegen &&
    !r.some((e) => e.explicitInter === !1) &&
    r.push({ explicitInter: !1, fonts: [] }),
    Object.assign(e, { fonts: r }));
}
function Fy(e) {
  return e ? (e.fonts ?? Pa()) : Pa();
}
function Iy(e) {
  return e.length === 0 ? [{ explicitInter: !1, fonts: [] }] : Ly(e);
}
function Ly(e) {
  let t = { explicitInter: !1, fonts: [] },
    n = [];
  for (let r of e)
    Ry(r)
      ? n.push({ explicitInter: r.explicitInter, fonts: r.fonts.map(zy) })
      : t.fonts.push(zy(r));
  return (t.fonts.length > 0 && n.push(t), n);
}
function Ry(e) {
  return tj in e;
}
function zy(e) {
  let t = By(e) || Vy(e) ? e : Hy(e);
  return Vy(t) ? t : Uy(t);
}
function By(e) {
  return `source` in e;
}
function Vy(e) {
  return `cssFamilyName` in e;
}
function Hy(e) {
  let t;
  return (
    (t = e.url.startsWith(`https://fonts.gstatic.com/s/`)
      ? `google`
      : e.url.startsWith(`https://framerusercontent.com/third-party-assets/fontshare/`)
        ? `fontshare`
        : `custom`),
    { ...e, source: t }
  );
}
function Uy(e) {
  let { family: t, ...n } = e,
    r = e.variationAxes && e.source !== `custom` ? `${t} ${ej}` : t;
  return { ...n, uiFamilyName: t, cssFamilyName: r };
}
function Wy(e, t) {
  let n = `${e}-start`;
  (performance.mark(n), t());
  let r = `${e}-end`;
  (performance.mark(r), performance.measure(e, n, r));
}
function Gy(e, t) {
  let n = $b({ batch: !0, priority: t.priority, signal: t.signal });
  return n ? n.then(e) : e();
}
async function Ky(e, t) {
  let n = [],
    r = !0;
  for (let i of e) {
    if (!r) {
      let e = $b({ batch: !0, priority: t.priority, signal: t.signal });
      e && (await e);
    }
    r = !1;
    try {
      let e = i();
      n.push(
        Promise.resolve(e).then(
          (e) => ({ status: `fulfilled`, value: e }),
          (e) => ({ status: `rejected`, reason: e })
        )
      );
    } catch (e) {
      n.push(Promise.resolve({ status: `rejected`, reason: e }));
    }
  }
  return Promise.all(n);
}
function qy(e) {
  return e.loader;
}
function Jy(e, t, n) {
  let r = qy(e);
  return r ? r.load(t, n) : Promise.resolve(void 0);
}
var Yy,
  Xy,
  Zy,
  Qy,
  $y,
  eb,
  tb,
  nb,
  rb,
  ib,
  ab,
  ob,
  sb,
  cb,
  lb,
  ub,
  db,
  fb,
  pb,
  mb,
  hb,
  gb,
  _b,
  vb,
  yb,
  bb,
  xb,
  Sb,
  Cb,
  wb,
  Tb,
  Eb,
  Db,
  Ob,
  kb,
  Ab,
  jb,
  Mb,
  Nb,
  Pb,
  Fb,
  Ib,
  Lb,
  Rb,
  zb,
  Bb,
  Vb,
  Hb,
  Ub,
  Wb,
  Gb,
  Kb,
  qb,
  Jb,
  Yb,
  Xb,
  Zb,
  Qb,
  $b,
  ex,
  tx,
  nx,
  rx,
  ix,
  ax,
  ox,
  sx,
  cx,
  lx,
  ux,
  dx,
  fx,
  px,
  mx,
  hx,
  gx,
  _x,
  vx,
  yx,
  bx,
  xx,
  Sx,
  Cx,
  wx,
  Tx,
  Ex,
  Dx,
  Ox,
  kx,
  Ax,
  jx,
  Mx,
  Nx,
  Px,
  Fx,
  Ix,
  Lx,
  Rx,
  zx,
  Bx,
  Vx,
  Hx,
  Ux,
  Wx,
  Gx,
  Kx,
  qx,
  Jx,
  Yx,
  Xx,
  Zx,
  Qx,
  $x,
  eS,
  tS,
  nS,
  rS,
  iS,
  aS,
  oS,
  sS,
  cS,
  lS,
  uS,
  dS,
  fS,
  pS,
  mS,
  X,
  hS,
  gS,
  _S,
  vS,
  yS,
  bS,
  xS,
  SS,
  CS,
  wS,
  TS,
  ES,
  DS,
  OS,
  kS,
  AS,
  jS,
  MS,
  NS,
  PS,
  FS,
  IS,
  LS,
  RS,
  zS,
  BS,
  VS,
  HS,
  US,
  WS,
  GS,
  KS,
  qS,
  Z,
  JS,
  YS,
  XS,
  ZS,
  QS,
  $S,
  eC,
  tC,
  nC,
  rC,
  iC,
  aC,
  oC,
  sC,
  cC,
  lC,
  uC,
  dC,
  fC,
  pC,
  mC,
  hC,
  gC,
  _C,
  vC,
  yC,
  bC,
  xC,
  SC,
  CC,
  wC,
  TC,
  EC,
  DC,
  OC,
  kC,
  AC,
  jC,
  MC,
  NC,
  PC,
  FC,
  IC,
  LC,
  RC,
  zC,
  BC,
  VC,
  HC,
  UC,
  WC,
  GC,
  KC,
  qC,
  JC,
  YC,
  XC,
  ZC,
  QC,
  $C,
  ew,
  tw,
  nw,
  rw,
  iw,
  aw,
  ow,
  sw,
  cw,
  lw,
  uw,
  dw,
  fw,
  pw,
  mw,
  hw,
  gw,
  _w,
  vw,
  yw,
  bw,
  xw,
  Sw,
  Cw,
  ww,
  Tw,
  Ew,
  Dw,
  Ow,
  kw,
  Aw,
  jw,
  Mw,
  Nw,
  Pw,
  Fw,
  Iw,
  Lw,
  Rw,
  zw,
  Bw,
  Vw,
  Hw,
  Uw,
  Ww,
  Gw,
  Kw,
  qw,
  Jw,
  Yw,
  Xw,
  Zw,
  Qw,
  $w,
  eT,
  tT,
  nT,
  rT,
  iT,
  aT,
  oT,
  sT,
  cT,
  lT,
  uT,
  dT,
  fT,
  pT,
  mT,
  hT,
  gT,
  _T,
  vT,
  yT,
  bT,
  xT,
  ST,
  CT,
  wT,
  TT,
  ET,
  DT,
  OT,
  kT,
  AT,
  jT,
  MT,
  NT,
  PT,
  FT,
  IT,
  LT,
  RT,
  zT,
  BT,
  VT,
  HT,
  UT,
  WT,
  GT,
  KT,
  qT,
  JT,
  YT,
  XT,
  ZT,
  QT,
  $T,
  eE,
  tE,
  nE,
  rE,
  iE,
  aE,
  oE,
  sE,
  cE,
  lE,
  uE,
  dE,
  fE,
  pE,
  mE,
  hE,
  gE,
  _E,
  vE,
  yE,
  bE,
  xE,
  SE,
  CE,
  wE,
  TE,
  EE,
  DE,
  OE,
  kE,
  AE,
  jE,
  ME,
  NE,
  PE,
  FE,
  IE,
  LE,
  RE,
  zE,
  BE,
  VE,
  HE,
  UE,
  WE,
  GE,
  KE,
  qE,
  JE,
  YE,
  XE,
  ZE,
  QE,
  $E,
  eD,
  tD,
  nD,
  rD,
  iD,
  aD,
  oD,
  sD,
  cD,
  lD,
  uD,
  dD,
  fD,
  pD,
  mD,
  hD,
  gD,
  _D,
  vD,
  yD,
  bD,
  Q,
  xD,
  SD,
  CD,
  wD,
  TD,
  $,
  ED,
  DD,
  OD,
  kD,
  AD,
  jD,
  MD,
  ND,
  PD,
  FD,
  ID,
  LD,
  RD,
  zD,
  BD,
  VD,
  HD,
  UD,
  WD,
  GD,
  KD,
  qD,
  JD,
  YD,
  XD,
  ZD,
  QD,
  $D,
  eO,
  tO,
  nO,
  rO,
  iO,
  aO,
  oO,
  sO,
  cO,
  lO,
  uO,
  dO,
  fO,
  pO,
  mO,
  hO,
  gO,
  _O,
  vO,
  yO,
  bO,
  xO,
  SO,
  CO,
  wO,
  TO,
  EO,
  DO,
  OO,
  kO,
  AO,
  jO,
  MO,
  NO,
  PO,
  FO,
  IO,
  LO,
  RO,
  zO,
  BO,
  VO,
  HO,
  UO,
  WO,
  GO,
  KO,
  qO,
  JO,
  YO,
  XO,
  ZO,
  QO,
  $O,
  ek,
  tk,
  nk,
  rk,
  ik,
  ak,
  ok,
  sk,
  ck,
  lk,
  uk,
  dk,
  fk,
  pk,
  mk,
  hk,
  gk,
  _k,
  vk,
  yk,
  bk,
  xk,
  Sk,
  Ck,
  wk,
  Tk,
  Ek,
  Dk,
  Ok,
  kk,
  Ak,
  jk,
  Mk,
  Nk,
  Pk,
  Fk,
  Ik,
  Lk,
  Rk,
  zk,
  Bk,
  Vk,
  Hk,
  Uk,
  Wk,
  Gk,
  Kk,
  qk,
  Jk,
  Yk,
  Xk,
  Zk,
  Qk,
  $k,
  eA,
  tA,
  nA,
  rA,
  iA,
  aA,
  oA,
  sA,
  cA,
  lA,
  uA,
  dA,
  fA,
  pA,
  mA,
  hA,
  gA,
  _A,
  vA,
  yA,
  bA,
  xA,
  SA,
  CA,
  wA,
  TA,
  EA,
  DA,
  OA,
  kA,
  AA,
  jA,
  MA,
  NA,
  PA,
  FA,
  IA,
  LA,
  RA,
  zA,
  BA,
  VA,
  HA,
  UA,
  WA,
  GA,
  KA,
  qA,
  JA,
  YA,
  XA,
  ZA,
  QA,
  $A,
  ej,
  tj;
function nj() {
  return (nj = e(() => {
    (o(),
      qe(),
      un(),
      A(),
      D(),
      h(),
      (Yy = /* @__PURE__ */ new Map()),
      (Xy = /* @__PURE__ */ new Map()),
      (Zy = /* @__PURE__ */ new Set()),
      (Qy = `:`),
      ($y = Tt ? void 0 : /* @__PURE__ */ new Set()),
      (eb = `preload`),
      (tb = Object.keys),
      (nb = `equals`),
      (rb = /* @__PURE__ */ j.createContext({})),
      (ib = /* @__PURE__ */ j.createContext({})),
      (ab = []),
      (ob = `default`),
      (sb = { Pending: `pending`, Fulfilled: `fulfilled`, Rejected: `rejected` }),
      (cb = class e {
        resolver;
        cacheHash;
        static is(t) {
          return t instanceof e;
        }
        promiseState = sb.Pending;
        preloadPromise;
        value;
        reason;
        get status() {
          return (this.preload(), this.state);
        }
        get state() {
          return this.promiseState;
        }
        constructor(e, t) {
          ((this.resolver = e), (this.cacheHash = t), t !== void 0 && fn(t, e));
        }
        then(e, t) {
          return this.promiseState === sb.Fulfilled
            ? Promise.resolve(this.value).then(e, t)
            : this.promiseState === sb.Rejected
              ? Promise.reject(this.reason).then(e, t)
              : this.readAsync().then(e, t);
        }
        preload() {
          if (this.promiseState !== sb.Pending) return;
          if (this.preloadPromise) return this.preloadPromise;
          this.cacheHash !== void 0 && $y !== void 0 && $y.add(this.cacheHash);
          let e = (e) => {
              ((this.promiseState = sb.Fulfilled), (this.value = e));
            },
            t = (e) => {
              ((this.promiseState = sb.Rejected), (this.reason = e));
            },
            n;
          try {
            n = this.cacheHash && Yy.has(this.cacheHash) ? Yy.get(this.cacheHash) : this.resolver();
          } catch (e) {
            t(e);
            return;
          }
          if (!st(n)) {
            e(n);
            return;
          }
          let r = n.then(e, t);
          return ((this.preloadPromise = r), r);
        }
        read = () => {
          if (this.promiseState === sb.Fulfilled) return this.value;
          throw this.promiseState === sb.Rejected
            ? this.reason
            : Error(`Need to call preload() before read()`);
        };
        async readAsync() {
          return this.readMaybeAsync();
        }
        readMaybeAsync() {
          let e = this.preload();
          return e ? e.then(this.read) : this.read();
        }
        use() {
          let e = this.preload();
          if (e) throw e;
          return this.read();
        }
      }),
      (lb = 2 ** 32 - 1),
      (ub = lb - 1),
      (db = class extends Error {
        constructor(e, t, n, r) {
          (super(e),
            (this.name = `DevalueError`),
            (this.path = t.join(``)),
            (this.value = n),
            (this.root = r));
        }
      }),
      (fb = /* @__PURE__ */ Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`)),
      (pb = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/),
      (mb = typeof Uint8Array.fromBase64 == `function`),
      (hb = typeof process == `object` && process.versions?.node !== void 0),
      (gb = mb ? $n : hb ? tr : rr),
      (_b = mb ? er : hb ? nr : ir),
      (vb = /* @__PURE__ */ Object.freeze({ kind: `not-plain` })),
      (yb = /* @__PURE__ */ Object.freeze({ kind: `symbol-keys` })),
      (bb = /* @__PURE__ */ Object.freeze({
        identify: (e) => e,
        typeOf: (e) => (e === null ? `null` : typeof e),
        toPrimitive: (e) => e,
        tagOf: (e) => Hn(e),
        isThenable: (e) => typeof e.then == `function`,
        toPromise: (e) => Promise.resolve(e),
        unbox: (e) => e.valueOf(),
        toISOString: (e) => (isNaN(e.getDate()) ? `` : e.toISOString()),
        toStringValue: (e) => e.toString(),
        regExpInfo: (e) => ({ source: e.source, flags: e.flags }),
        valuesOf: (e) => e,
        entriesOf: (e) => e,
        viewInfo: (e) => (
          Un(e) && (e = new Uint8Array(e)),
          {
            buffer: e.buffer,
            byteOffset: e.byteOffset,
            byteLength: e.byteLength,
            length: e.length,
            bufferByteLength: e.buffer.byteLength,
          }
        ),
        toArrayBuffer: (e) => e,
        lengthOf: (e) => e.length,
        hasOwn: (e, t) => Object.hasOwn(e, t),
        indicesOf: (e) => Qn(e),
        shapeOf: (e) =>
          Vn(e)
            ? Kn(e).length > 0
              ? yb
              : {
                  kind: Object.getPrototypeOf(e) === null ? `null-proto` : `plain`,
                  keys: Object.keys(e),
                }
            : vb,
        get: (e, t) => e[t],
      })),
      (xb = Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, `byteLength`).get),
      (Sb =
        typeof SharedArrayBuffer > `u`
          ? void 0
          : Object.getOwnPropertyDescriptor(SharedArrayBuffer.prototype, `byteLength`).get),
      (Cb = /* @__PURE__ */ Object.freeze({
        fromPrimitive: (e) => e,
        fromISOString: (e) => new Date(e),
        fromStringValue: (e, t) =>
          e === `URL`
            ? new URL(t)
            : e === `URLSearchParams`
              ? new URLSearchParams(t)
              : Temporal[e.slice(9)].from(t),
        fromArrayBuffer: (e) => e,
        fromRegExpInfo: (e, t) => new RegExp(e, t),
        fromViewInfo: (e, t, n, r) => {
          try {
            xb.call(t);
          } catch (e) {
            if (!Sb) throw e;
            Sb.call(t);
          }
          let i = globalThis[e];
          return n === void 0 ? new i(t) : new i(t, n, r);
        },
        box: (e) => Object(e),
        createArray: (e) => Array(e),
        createSparseArray: (e) => {
          let t = [];
          return ((t[ub] = void 0), delete t[ub], (t.length = e), t);
        },
        createObject: () => ({}),
        createNullPrototypeObject: () => Object.create(null),
        createSet: () => /* @__PURE__ */ new Set(),
        createMap: () => /* @__PURE__ */ new Map(),
        set: (e, t, n) => {
          e[t] = n;
        },
        addValue: (e, t) => {
          e.add(t);
        },
        addEntry: (e, t, n) => {
          e.set(t, n);
        },
      })),
      (wb = /^[a-z0-9]+(?:-[a-z0-9]+)*$/u),
      (Tb = { QueryCache: 0, CollectionUtilsCache: 1 }),
      (Db = class {
        payload = pr();
        isEmpty = !0;
        set(e, t, n) {
          (this.payload[e].set(t, n), (this.isEmpty = !1));
        }
        has(e, t) {
          return this.payload[e].has(t);
        }
        get(e, t) {
          return this.payload[e].get(t);
        }
        toString() {
          if (!this.isEmpty)
            try {
              return cr(this.payload);
            } catch (e) {
              console.error(`Failed to serialize handover data.`, e);
              return;
            }
        }
        clear() {
          for (let e of Object.values(this.payload)) e.clear();
          this.isEmpty = !0;
        }
      }),
      (Ob = Tt ? void 0 : new Db()),
      (kb = Tb.CollectionUtilsCache),
      (Ab = /* @__PURE__ */ new WeakMap()),
      (jb = /* @__PURE__ */ O(void 0)),
      (Mb = class {
        collectionId;
        module;
        cacheMap = /* @__PURE__ */ new Map();
        constructor(e, t) {
          ((this.collectionId = t),
            (this.module = new cb(async () => {
              try {
                let t = await e();
                return (W(t, `Couldn't find CollectionUtils`), t);
              } catch (e) {
                console.error(lt(`Failed to import collection module.`, e));
                return;
              }
            })));
        }
        callUtilsMethod(e, t, n) {
          let r = vr(n),
            i = yr(e, this.collectionId, r, t);
          if (this.cacheMap.has(i)) {
            let e = this.cacheMap.get(i)?.readMaybeAsync();
            if (Ob !== void 0) {
              if (st(e)) return e.then((e) => (Ob.set(kb, i, e), e));
              Ob.set(kb, i, e);
            }
            return e;
          }
          if (gr(kb, i)) {
            let e = _r(kb, i);
            return (this.cacheMap.set(i, new cb(() => e)), e);
          }
          let a = this.module.readMaybeAsync(),
            o = st(a),
            s;
          try {
            s = o ? a.then((r) => r?.[e]?.(t, n)) : a?.[e]?.(t, n);
          } catch (e) {
            (console.error(lt(`Failed to call CollectionUtils method.`, e)), (s = void 0));
          }
          if (s === void 0) {
            (Ob !== void 0 && Ob.set(kb, i, s), this.cacheMap.set(i, s));
            return;
          }
          let c = new cb(async () => {
            try {
              let e = st(s) ? await s : s;
              return (Ob !== void 0 && Ob.set(kb, i, e), e);
            } catch (e) {
              console.error(lt(`Failed to call CollectionUtils method.`, e));
              return;
            }
          });
          return (this.cacheMap.set(i, c), c.readMaybeAsync());
        }
        getSlugByRecordId(e, t) {
          return this.callUtilsMethod(`getSlugByRecordId`, e, t);
        }
        getRecordIdBySlug(e, t) {
          return this.callUtilsMethod(`getRecordIdBySlug`, e, t);
        }
        getContentLocaleIdByRecordId(e, t) {
          return this.callUtilsMethod(`getContentLocaleIdByRecordId`, e, t);
        }
      }),
      (Nb = /Mac/u),
      (Pb = /iPhone|iPod|iPad/iu),
      (Fb = /MacIntel/iu),
      (Ib = /Edg\//u),
      (Lb = /Chrome/u),
      (Rb = /Google Inc/u),
      (zb = /Safari/u),
      (Bb = /Apple Computer/u),
      (Vb = /Firefox\/\d+\.\d+$/u),
      (Hb = /Version\/([\d.]+)/u),
      (Ub = /FramerX/u),
      (Wb = /tablet|iPad|Nexus 9/iu),
      (Gb = /mobi/iu),
      (Kb = 1e3 / 60),
      (qb = 40),
      (Jb = 500),
      (Yb = { background: 0, "user-visible": 1, "user-blocking": 2 }),
      (Xb = /* @__PURE__ */ Promise.resolve()),
      (Zb = 100),
      (Qb = (e) => {
        Ge.read(e, !1, !0);
      }),
      ($b = /* @__PURE__ */ Gr(Qb)),
      (ex = `framer_variant`),
      (tx = /* @__PURE__ */ RegExp(`:([a-z]\\w*)`, `gi`)),
      (nx = async () => {}),
      (rx = { contentLocale: null, activeLocale: null, locales: [], setLocale: nx }),
      (ix = /* @__PURE__ */ (() => {
        let e = j.createContext(rx);
        return ((e.displayName = `LocaleInfoContext`), e);
      })()),
      (ax = /* @__PURE__ */ (() => {
        let e = j.createContext(`ltr`);
        return ((e.displayName = `LayoutDirectionContext`), e);
      })()),
      (ox = !Et),
      (sx = !1),
      (cx = /* @__PURE__ */ j.createContext({ global: void 0, routes: {} })),
      (lx = 10),
      (ux = 1e4),
      (dx = (e) => `--view-transition-${e}`),
      (fx = {
        makeKeyframe: (e, t, n) => {
          let r = 0;
          return (
            ((n === `exit` && e.angularDirection === `clockwise` && t === `start`) ||
              (n === `exit` && e.angularDirection === `counter-clockwise` && t === `end`) ||
              (n === `enter` && e.angularDirection === `counter-clockwise` && t === `start`) ||
              (n === `enter` && e.angularDirection === `clockwise` && t === `end`)) &&
              (r = (e.sweepAngle / 360) * 100),
            `${dx(`conic-offset`)}: ${r}%;`
          );
        },
        makeStyles: (e, t) => {
          let n = `var(${dx(`conic-offset`)})`,
            r =
              (t === `exit` && e.angularDirection === `clockwise`) ||
              (t === `enter` && e.angularDirection === `counter-clockwise`),
            i = r ? `transparent` : `black`,
            a = r ? `black` : `transparent`,
            o = `conic-gradient(from `;
          return (
            (o += `${e.angle}deg at ${e.x} ${e.y}, `),
            (o += `${i} 0%, ${i} ${n}, `),
            (o += `${a} ${n}, ${a} 100%)`),
            `mask-image: ${o}; -webkit-mask-image: ${o};`
          );
        },
        makePropertyRules: () => `
        @property ${dx(`conic-offset`)} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `,
      }),
      (px = {
        circle: {
          makeKeyframe: (e, t) => `${dx(`circle-progress`)}: ${t === `start` ? 0 : 1};`,
          makeStyles: (e) => {
            let t = `calc(100% * ${`var(${dx(`circle-progress`)})`})`,
              n = `radial-gradient(circle ${hi(e)}px at ${e.x} ${e.y}, black ${t}, transparent ${t})`;
            return `mask-image: ${n}; -webkit-mask-image: ${n};`;
          },
          makePropertyRules: () => `
        @property ${dx(`circle-progress`)} {
            syntax: '<number>';
            initial-value: 0;
            inherits: false;
        }
    `,
        },
        conic: fx,
        inset: {
          makeKeyframe: (e, t) =>
            t === `start`
              ? `clip-path: inset(${e.y} ${mi(e.x)} ${mi(e.y)} ${e.x} round ${e.round}px);`
              : `clip-path: inset(0 round 0);`,
        },
        blinds: {
          makeKeyframe: (e, t, n) => {
            let [, r] = fi(e.width),
              i = `0${r}`;
            return (
              ((t === `start` && n === `exit`) || (t === `end` && n === `enter`)) && (i = e.width),
              `${dx(`blinds-width`)}: ${i};`
            );
          },
          makeStyles: (e, t) => {
            let n = `var(${dx(`blinds-width`)})`,
              r = t === `exit` ? `transparent` : `black`,
              i = t === `exit` ? `black` : `transparent`,
              a = `repeating-linear-gradient(`;
            return (
              (a += e.angle + 90 + `deg, `),
              (a += `${r} 0px, ${r} ${n}, `),
              (a += `${i} ${n}, ${i} ${e.width})`),
              `mask-image: ${a}; -webkit-mask-image: ${a};`
            );
          },
          makePropertyRules: () => `
            @property ${dx(`blinds-width`)} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `,
        },
        wipe: {
          makeKeyframe: (e, t, n) => {
            let r = +((t === `start` && n === `exit`) || (t === `end` && n === `enter`));
            return `${dx(`wipe-offset`)}: ${r};`;
          },
          makeStyles: (e, t) => {
            let n = `var(${dx(`wipe-offset`)})`,
              r = t === `exit` ? `transparent` : `black`,
              i = t === `exit` ? `black` : `transparent`,
              a = `linear-gradient(`;
            return (
              (a += e.angle + 90 + `deg, `),
              (a += `${r} calc(calc(0% - ${e.width}) + calc(calc(100% + ${e.width}) * ${n})), `),
              (a += `${i} calc(calc(100% + ${e.width}) * ${n}))`),
              `mask-image: ${a}; -webkit-mask-image: ${a};`
            );
          },
          makePropertyRules: () => `
            @property ${dx(`wipe-offset`)} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `,
        },
      }),
      (mx = {
        opacity: 1,
        x: `0px`,
        y: `0px`,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
      }),
      (hx = `view-transition-styles`),
      (gx = {
        x: `0px`,
        y: `0px`,
        scale: 1,
        opacity: 1,
        rotate3d: !1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
        transition: {
          type: `tween`,
          delay: 0,
          duration: 0.2,
          ease: [0.27, 0, 0.51, 1],
          stiffness: 400,
          damping: 30,
          mass: 1,
        },
      }),
      (_x = () => {}),
      (yx = () => {
        let e = document.title;
        e &&
          (document.ariaNotify
            ? document.ariaNotify(e, { priority: `high` })
            : (vx ||
                ((vx = document.createElement(`div`)),
                vx.setAttribute(`aria-live`, `assertive`),
                vx.setAttribute(`aria-atomic`, `true`),
                (vx.style.position = `absolute`),
                (vx.style.transform = `scale(0)`),
                document.body.append(vx)),
              setTimeout(() => {
                vx.textContent = e;
              }, 60)));
      }),
      (xx =
        Tt &&
        typeof N.navigation?.back == `function` &&
        !(
          /* @__PURE__ */ (() => {
            if (d === void 0) return !1;
            let e = d.userAgent,
              t = e.indexOf(`Chrome/`),
              n = +e.slice(t + 7, e.indexOf(`.`, t));
            return n > 101 && n < 128;
          })()
        ) &&
        !Ar()),
      (Sx = /[\s?#[\]@!$&'*+,;:="<>%{}|\\^`/]+/gu),
      (Cx = /* @__PURE__ */ j.createContext(null)),
      (wx = /* @__PURE__ */ (() => {
        let e = O(`preview`);
        return ((e.displayName = `RenderTargetEnvironmentContext`), e);
      })()),
      (Tx = typeof document < `u` ? i : M),
      (Ex = /* @__PURE__ */ new Set()),
      (Dx = /* @__PURE__ */ (() => {
        let e = O({ urlSearchParams: new URLSearchParams(), replaceSearchParams: async () => {} });
        return ((e.displayName = `URLSearchParamsContext`), e);
      })()),
      (Ox = 46),
      (kx = 47),
      (Ax = (e, t) => e.charCodeAt(t)),
      (jx = (e, t) => e.lastIndexOf(t)),
      (Mx = (e, t, n) => e.slice(t, n)),
      (Nx = `/`),
      (Px = (e) => e === kx),
      (Fx = /* @__PURE__ */ new Set([`/404.html`, `/404`, `/404/`])),
      (Ix = `__f_replay`),
      (Lx = `__f_replay_ignore`),
      (Rx = `data-framer-form-hydrated`),
      (zx = `data-framer-form-pending-submit`),
      (Bx = () => Tt),
      (Vx =
        /* @__PURE__ */ `mousedown.mouseup.touchcancel.touchend.touchstart.auxclick.dblclick.pointercancel.pointerdown.pointerup.dragend.dragstart.drop.compositionend.compositionstart.keydown.keypress.keyup.input.textInput.copy.cut.paste.click.change.contextmenu.reset`.split(
          `.`
        )),
      (Hx = (e) => {
        e.target?.closest?.(`#main`) &&
          (ba(e) ||
            (e.stopPropagation(), performance.mark(`framer-react-event-handling-prevented`)));
      }),
      (Ux = !1),
      (Wx = class {
        markRenderStart = Ta(() => {
          performance.mark(`framer-hydration-start`);
        });
        markRenderEnd = Ta(() => {
          (performance.mark(`framer-hydration-render-end`),
            Ea(`framer-hydration-render`, `framer-hydration-start`, `framer-hydration-render-end`));
        });
        markUseInsertionEffectsStart = Ta(() => {
          performance.mark(`framer-hydration-insertion-effects-start`);
        });
        markUseInsertionEffectRouterStart = Ta(() => {
          performance.mark(`framer-hydration-router-insertion-effect`);
        });
        markUseInsertionEffectsEnd = Ta(() => {
          (performance.mark(`framer-hydration-insertion-effects-end`),
            Ea(
              `framer-hydration-insertion-effects`,
              `framer-hydration-insertion-effects-start`,
              `framer-hydration-insertion-effects-end`
            ));
        });
        markUseLayoutEffectsStart = Ta(() => {
          performance.mark(`framer-hydration-layout-effects-start`);
        });
        markRouterUseLayoutEffectStart = Ta(() => {
          performance.mark(`framer-hydration-router-layout-effect`);
        });
        markUseLayoutEffectsEnd = Ta(() => {
          (performance.mark(`framer-hydration-layout-effects-end`),
            Ea(
              `framer-hydration-layout-effects`,
              `framer-hydration-layout-effects-start`,
              `framer-hydration-layout-effects-end`
            ));
        });
        markUseEffectsStart = Ta(() => {
          performance.mark(`framer-hydration-effects-start`);
        });
        markUseEffectsRouterStart = Ta(() => {
          performance.mark(`framer-hydration-router-effect`);
        });
        markUseEffectsAreSynchronous = Ta(() => {
          performance.mark(`framer-hydration-effects-sync`);
        });
        markUseEffectsEnd = Ta(() => {
          (performance.mark(`framer-hydration-effects-end`),
            Ea(
              `framer-hydration-effects`,
              performance.getEntriesByName(`framer-hydration-first-paint`)[0]?.name ??
                performance.getEntriesByName(`framer-hydration-effects-start`)[0]?.name,
              `framer-hydration-effects-end`
            ));
        });
        markRafStart = Ta(() => {
          ((this.browserRendering.hasStarted = !0),
            performance.mark(`framer-hydration-browser-render-start`));
        });
        markRafEnd = Ta(() => {
          (performance.mark(`framer-hydration-browser-raf-end`),
            Ea(
              `framer-hydration-raf`,
              `framer-hydration-browser-render-start`,
              `framer-hydration-browser-raf-end`
            ));
        });
        markLayoutStylePaintEnd = Ta(() => {
          (performance.mark(`framer-hydration-first-paint`),
            Ea(
              `framer-hydration-time-to-first-paint`,
              `framer-hydration-start`,
              `framer-hydration-first-paint`
            ),
            Ea(
              `framer-hydration-browser-render`,
              `framer-hydration-browser-raf-end`,
              `framer-hydration-first-paint`
            ));
        });
        measureMutationEffects = Ta(() => {
          Ea(
            `framer-hydration-commit`,
            `framer-hydration-layout-effects-end`,
            `framer-hydration-effects-start`
          );
        });
        measureUnattributedHydrationOverhead = Ta(() => {
          Ea(
            `framer-hydration-uho`,
            performance.getEntriesByName(`framer-hydration-effects-end`)[0]?.name ??
              performance.getEntriesByName(`framer-hydration-layout-effects-end`)[0]?.name,
            `framer-hydration-browser-render-start`
          );
        });
        render = { markStart: () => this.markRenderStart(), markEnd: () => this.markRenderEnd() };
        mutationEffects = { measure: () => this.measureMutationEffects() };
        useInsertionEffects = {
          markStart: () => this.markUseInsertionEffectsStart(),
          markRouterStart: () => this.markUseInsertionEffectRouterStart(),
          markEnd: () => this.markUseInsertionEffectsEnd(),
        };
        useLayoutEffects = {
          markStart: () => this.markUseLayoutEffectsStart(),
          markRouterStart: () => this.markRouterUseLayoutEffectStart(),
          markEnd: () => this.markUseLayoutEffectsEnd(),
        };
        useEffects = {
          markStart: () => this.markUseEffectsStart(),
          markRouterStart: () => this.markUseEffectsRouterStart(),
          markEnd: () => this.markUseEffectsEnd(),
          markAreSynchronous: () => this.markUseEffectsAreSynchronous(),
        };
        browserRendering = {
          hasStarted: !1,
          requestAnimationFrame: {
            markStart: () => this.markRafStart(),
            markEnd: () => this.markRafEnd(),
          },
          layoutStylePaint: { markEnd: () => this.markLayoutStylePaintEnd() },
        };
        unattributedHydrationOverhead = {
          measure: () => this.measureUnattributedHydrationOverhead(),
        };
      }),
      (Kx = !1),
      (qx = { Start: ja, End: Ma }),
      (Jx = class extends Error {}),
      (Yx = class extends y {
        constructor(e) {
          (super(e), (this.state = { error: void 0, routerRenderKey: e.routerRenderKey }));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          if (e.routerRenderKey !== t.routerRenderKey) {
            let n = { routerRenderKey: e.routerRenderKey };
            return (t.error && (n.error = void 0), n);
          }
          return null;
        }
        render() {
          if (this.state.error === void 0) return this.props.children;
          if (!(this.state.error instanceof Jx)) throw this.state.error;
          let { notFoundPage: e, defaultPageStyle: t } = this.props;
          if (!e) throw this.state.error;
          return Na(e, t);
        }
      }),
      (Xx = /* @__PURE__ */ Object.freeze([])),
      (Qx = /* @__PURE__ */ new Set()),
      ($x = class {
        observers = /* @__PURE__ */ new Set();
        transactions = {};
        add(e) {
          this.observers.add(e);
          let t = !1;
          return () => {
            t || ((t = !0), this.remove(e));
          };
        }
        remove(e) {
          this.observers.delete(e);
        }
        notify(e, t) {
          if (t) {
            let n = this.transactions[t] || e;
            ((n.value = e.value), (this.transactions[t] = n));
          } else this.callObservers(e);
        }
        finishTransaction(e) {
          let t = this.transactions[e];
          return (delete this.transactions[e], this.callObservers(t, e));
        }
        callObservers(e, t) {
          let n = [];
          return (
            new Set(this.observers).forEach((r) => {
              typeof r == `function` ? r(e, t) : (r.update(e, t), n.push(r.finish));
            }),
            n
          );
        }
      }),
      (eS = /* @__PURE__ */ (() => {
        function e(e) {
          return (
            $a(
              `Animatable()`,
              `2.0.0`,
              `the new animation API (https://www.framer.com/api/animation/)`
            ),
            eo(e) ? e : new rS(e)
          );
        }
        return (
          (e.transaction = (e) => {
            let t = Math.random(),
              n = /* @__PURE__ */ new Set();
            e((e, r) => {
              (e.set(r, t), n.add(e));
            }, t);
            let r = [];
            (n.forEach((e) => {
              r.push(...e.finishTransaction(t));
            }),
              r.forEach((e) => {
                e(t);
              }));
          }),
          (e.getNumber = (t, n = 0) => e.get(t, n)),
          (e.get = (e, t) => (e == null ? t : eo(e) ? e.get() : e)),
          (e.objectToValues = (e) => {
            if (!e) return e;
            let t = {};
            for (let n in e) {
              let r = e[n];
              t[n] = eo(r) ? r.get() : r;
            }
            return t;
          }),
          e
        );
      })()),
      (tS = `onUpdate`),
      (nS = `finishTransaction`),
      (rS = class {
        value;
        observers = new $x();
        constructor(e) {
          this.value = e;
        }
        static interpolationFor(e, t) {
          if (eo(e)) return to(e, t);
        }
        get() {
          return this.value;
        }
        set(e, t) {
          let n = this.value;
          (eo(e) && (e = e.get()), (this.value = e));
          let r = { value: e, oldValue: n };
          this.observers.notify(r, t);
        }
        finishTransaction(e) {
          return this.observers.finishTransaction(e);
        }
        onUpdate(e) {
          return this.observers.add(e);
        }
      }),
      (function (e) {
        ((e.isQuadrilateralPoints = (e) => e?.length === 4),
          (e.add = (...e) => e.reduce((e, t) => ({ x: e.x + t.x, y: e.y + t.y }), { x: 0, y: 0 })),
          (e.subtract = (e, t) => ({ x: e.x - t.x, y: e.y - t.y })),
          (e.multiply = (e, t) => ({ x: e.x * t, y: e.y * t })),
          (e.divide = (e, t) => ({ x: e.x / t, y: e.y / t })),
          (e.absolute = (e) => ({ x: Math.abs(e.x), y: Math.abs(e.y) })),
          (e.reverse = (e) => ({ x: e.x * -1, y: e.y * -1 })),
          (e.pixelAligned = (e, t = { x: 0, y: 0 }) => ({ x: ro(e.x, t.x), y: ro(e.y, t.y) })),
          (e.distance = (e, t) => {
            let n = Math.abs(e.x - t.x),
              r = Math.abs(e.y - t.y);
            return Math.sqrt(n * n + r * r);
          }),
          (e.angle = (e, t) => (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI - 90),
          (e.angleFromX = (e, t) => (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI),
          (e.isEqual = (e, t) => e.x === t.x && e.y === t.y),
          (e.rotationNormalizer = () => {
            let e;
            return (t) => {
              typeof e != `number` && (e = t);
              let n = e - t,
                r = Math.abs(n) + 180,
                i = Math.floor(r / 360);
              return (n < 180 && (t -= i * 360), n > 180 && (t += i * 360), (e = t), t);
            };
          }));
        function t(e, t) {
          return { x: (e.x + t.x) / 2, y: (e.y + t.y) / 2 };
        }
        e.center = t;
        function n(e) {
          let t = 0,
            n = 0;
          return (
            e.forEach((e) => {
              ((t += e.x), (n += e.y));
            }),
            { x: t / e.length, y: n / e.length }
          );
        }
        e.centroid = n;
        function r(e) {
          let t = ao.centroid(e),
            n = /* @__PURE__ */ new Map();
          for (let r = 0; r < e.length; r++) {
            let i = e[r];
            i && n.set(i, Math.atan2(i.y - t.y, i.x - t.x));
          }
          return e.sort((e, t) => (n.get(e) ?? 0) - (n.get(t) ?? 0));
        }
        e.sortClockwise = r;
      })((ao ||= {})),
      (iS = {
        aliceblue: `f0f8ff`,
        antiquewhite: `faebd7`,
        aqua: `0ff`,
        aquamarine: `7fffd4`,
        azure: `f0ffff`,
        beige: `f5f5dc`,
        bisque: `ffe4c4`,
        black: `000`,
        blanchedalmond: `ffebcd`,
        blue: `00f`,
        blueviolet: `8a2be2`,
        brown: `a52a2a`,
        burlywood: `deb887`,
        burntsienna: `ea7e5d`,
        cadetblue: `5f9ea0`,
        chartreuse: `7fff00`,
        chocolate: `d2691e`,
        coral: `ff7f50`,
        cornflowerblue: `6495ed`,
        cornsilk: `fff8dc`,
        crimson: `dc143c`,
        cyan: `0ff`,
        darkblue: `00008b`,
        darkcyan: `008b8b`,
        darkgoldenrod: `b8860b`,
        darkgray: `a9a9a9`,
        darkgreen: `006400`,
        darkgrey: `a9a9a9`,
        darkkhaki: `bdb76b`,
        darkmagenta: `8b008b`,
        darkolivegreen: `556b2f`,
        darkorange: `ff8c00`,
        darkorchid: `9932cc`,
        darkred: `8b0000`,
        darksalmon: `e9967a`,
        darkseagreen: `8fbc8f`,
        darkslateblue: `483d8b`,
        darkslategray: `2f4f4f`,
        darkslategrey: `2f4f4f`,
        darkturquoise: `00ced1`,
        darkviolet: `9400d3`,
        deeppink: `ff1493`,
        deepskyblue: `00bfff`,
        dimgray: `696969`,
        dimgrey: `696969`,
        dodgerblue: `1e90ff`,
        firebrick: `b22222`,
        floralwhite: `fffaf0`,
        forestgreen: `228b22`,
        fuchsia: `f0f`,
        gainsboro: `dcdcdc`,
        ghostwhite: `f8f8ff`,
        gold: `ffd700`,
        goldenrod: `daa520`,
        gray: `808080`,
        green: `008000`,
        greenyellow: `adff2f`,
        grey: `808080`,
        honeydew: `f0fff0`,
        hotpink: `ff69b4`,
        indianred: `cd5c5c`,
        indigo: `4b0082`,
        ivory: `fffff0`,
        khaki: `f0e68c`,
        lavender: `e6e6fa`,
        lavenderblush: `fff0f5`,
        lawngreen: `7cfc00`,
        lemonchiffon: `fffacd`,
        lightblue: `add8e6`,
        lightcoral: `f08080`,
        lightcyan: `e0ffff`,
        lightgoldenrodyellow: `fafad2`,
        lightgray: `d3d3d3`,
        lightgreen: `90ee90`,
        lightgrey: `d3d3d3`,
        lightpink: `ffb6c1`,
        lightsalmon: `ffa07a`,
        lightseagreen: `20b2aa`,
        lightskyblue: `87cefa`,
        lightslategray: `789`,
        lightslategrey: `789`,
        lightsteelblue: `b0c4de`,
        lightyellow: `ffffe0`,
        lime: `0f0`,
        limegreen: `32cd32`,
        linen: `faf0e6`,
        magenta: `f0f`,
        maroon: `800000`,
        mediumaquamarine: `66cdaa`,
        mediumblue: `0000cd`,
        mediumorchid: `ba55d3`,
        mediumpurple: `9370db`,
        mediumseagreen: `3cb371`,
        mediumslateblue: `7b68ee`,
        mediumspringgreen: `00fa9a`,
        mediumturquoise: `48d1cc`,
        mediumvioletred: `c71585`,
        midnightblue: `191970`,
        mintcream: `f5fffa`,
        mistyrose: `ffe4e1`,
        moccasin: `ffe4b5`,
        navajowhite: `ffdead`,
        navy: `000080`,
        oldlace: `fdf5e6`,
        olive: `808000`,
        olivedrab: `6b8e23`,
        orange: `ffa500`,
        orangered: `ff4500`,
        orchid: `da70d6`,
        palegoldenrod: `eee8aa`,
        palegreen: `98fb98`,
        paleturquoise: `afeeee`,
        palevioletred: `db7093`,
        papayawhip: `ffefd5`,
        peachpuff: `ffdab9`,
        peru: `cd853f`,
        pink: `ffc0cb`,
        plum: `dda0dd`,
        powderblue: `b0e0e6`,
        purple: `800080`,
        rebeccapurple: `663399`,
        red: `f00`,
        rosybrown: `bc8f8f`,
        royalblue: `4169e1`,
        saddlebrown: `8b4513`,
        salmon: `fa8072`,
        sandybrown: `f4a460`,
        seagreen: `2e8b57`,
        seashell: `fff5ee`,
        sienna: `a0522d`,
        silver: `c0c0c0`,
        skyblue: `87ceeb`,
        slateblue: `6a5acd`,
        slategray: `708090`,
        slategrey: `708090`,
        snow: `fffafa`,
        springgreen: `00ff7f`,
        steelblue: `4682b4`,
        tan: `d2b48c`,
        teal: `008080`,
        thistle: `d8bfd8`,
        tomato: `ff6347`,
        turquoise: `40e0d0`,
        violet: `ee82ee`,
        wheat: `f5deb3`,
        white: `fff`,
        whitesmoke: `f5f5f5`,
        yellow: `ff0`,
        yellowgreen: `9acd32`,
      }),
      (aS = class e {
        constructor() {
          ((this.hex = `#000000`),
            (this.rgb_r = 0),
            (this.rgb_g = 0),
            (this.rgb_b = 0),
            (this.xyz_x = 0),
            (this.xyz_y = 0),
            (this.xyz_z = 0),
            (this.luv_l = 0),
            (this.luv_u = 0),
            (this.luv_v = 0),
            (this.lch_l = 0),
            (this.lch_c = 0),
            (this.lch_h = 0),
            (this.hsluv_h = 0),
            (this.hsluv_s = 0),
            (this.hsluv_l = 0),
            (this.hpluv_h = 0),
            (this.hpluv_p = 0),
            (this.hpluv_l = 0),
            (this.r0s = 0),
            (this.r0i = 0),
            (this.r1s = 0),
            (this.r1i = 0),
            (this.g0s = 0),
            (this.g0i = 0),
            (this.g1s = 0),
            (this.g1i = 0),
            (this.b0s = 0),
            (this.b0i = 0),
            (this.b1s = 0),
            (this.b1i = 0));
        }
        static fromLinear(e) {
          return e <= 0.0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - 0.055;
        }
        static toLinear(e) {
          return e > 0.04045 ? ((e + 0.055) / 1.055) ** 2.4 : e / 12.92;
        }
        static yToL(t) {
          return t <= e.epsilon ? (t / e.refY) * e.kappa : 116 * (t / e.refY) ** (1 / 3) - 16;
        }
        static lToY(t) {
          return t <= 8 ? (e.refY * t) / e.kappa : e.refY * ((t + 16) / 116) ** 3;
        }
        static rgbChannelToHex(t) {
          let n = Math.round(t * 255),
            r = n % 16,
            i = ((n - r) / 16) | 0;
          return e.hexChars.charAt(i) + e.hexChars.charAt(r);
        }
        static hexToRgbChannel(t, n) {
          let r = e.hexChars.indexOf(t.charAt(n)),
            i = e.hexChars.indexOf(t.charAt(n + 1));
          return (r * 16 + i) / 255;
        }
        static distanceFromOriginAngle(e, t, n) {
          let r = t / (Math.sin(n) - e * Math.cos(n));
          return r < 0 ? 1 / 0 : r;
        }
        static distanceFromOrigin(e, t) {
          return Math.abs(t) / Math.sqrt(e ** 2 + 1);
        }
        static min6(e, t, n, r, i, a) {
          return Math.min(e, Math.min(t, Math.min(n, Math.min(r, Math.min(i, a)))));
        }
        rgbToHex() {
          ((this.hex = `#`),
            (this.hex += e.rgbChannelToHex(this.rgb_r)),
            (this.hex += e.rgbChannelToHex(this.rgb_g)),
            (this.hex += e.rgbChannelToHex(this.rgb_b)));
        }
        hexToRgb() {
          ((this.hex = this.hex.toLowerCase()),
            (this.rgb_r = e.hexToRgbChannel(this.hex, 1)),
            (this.rgb_g = e.hexToRgbChannel(this.hex, 3)),
            (this.rgb_b = e.hexToRgbChannel(this.hex, 5)));
        }
        xyzToRgb() {
          ((this.rgb_r = e.fromLinear(
            e.m_r0 * this.xyz_x + e.m_r1 * this.xyz_y + e.m_r2 * this.xyz_z
          )),
            (this.rgb_g = e.fromLinear(
              e.m_g0 * this.xyz_x + e.m_g1 * this.xyz_y + e.m_g2 * this.xyz_z
            )),
            (this.rgb_b = e.fromLinear(
              e.m_b0 * this.xyz_x + e.m_b1 * this.xyz_y + e.m_b2 * this.xyz_z
            )));
        }
        rgbToXyz() {
          let t = e.toLinear(this.rgb_r),
            n = e.toLinear(this.rgb_g),
            r = e.toLinear(this.rgb_b);
          ((this.xyz_x = 0.41239079926595 * t + 0.35758433938387 * n + 0.18048078840183 * r),
            (this.xyz_y = 0.21263900587151 * t + 0.71516867876775 * n + 0.072192315360733 * r),
            (this.xyz_z = 0.019330818715591 * t + 0.11919477979462 * n + 0.95053215224966 * r));
        }
        xyzToLuv() {
          let t = this.xyz_x + 15 * this.xyz_y + 3 * this.xyz_z,
            n = 4 * this.xyz_x,
            r = 9 * this.xyz_y;
          (t === 0 ? ((n = NaN), (r = NaN)) : ((n /= t), (r /= t)),
            (this.luv_l = e.yToL(this.xyz_y)),
            this.luv_l === 0
              ? ((this.luv_u = 0), (this.luv_v = 0))
              : ((this.luv_u = 13 * this.luv_l * (n - e.refU)),
                (this.luv_v = 13 * this.luv_l * (r - e.refV))));
        }
        luvToXyz() {
          if (this.luv_l === 0) {
            ((this.xyz_x = 0), (this.xyz_y = 0), (this.xyz_z = 0));
            return;
          }
          let t = this.luv_u / (13 * this.luv_l) + e.refU,
            n = this.luv_v / (13 * this.luv_l) + e.refV;
          ((this.xyz_y = e.lToY(this.luv_l)),
            (this.xyz_x = 0 - (9 * this.xyz_y * t) / ((t - 4) * n - t * n)),
            (this.xyz_z = (9 * this.xyz_y - 15 * n * this.xyz_y - n * this.xyz_x) / (3 * n)));
        }
        luvToLch() {
          if (
            ((this.lch_l = this.luv_l),
            (this.lch_c = Math.sqrt(this.luv_u * this.luv_u + this.luv_v * this.luv_v)),
            this.lch_c < 1e-8)
          )
            this.lch_h = 0;
          else {
            let e = Math.atan2(this.luv_v, this.luv_u);
            ((this.lch_h = (e * 180) / Math.PI), this.lch_h < 0 && (this.lch_h = 360 + this.lch_h));
          }
        }
        lchToLuv() {
          let e = (this.lch_h / 180) * Math.PI;
          ((this.luv_l = this.lch_l),
            (this.luv_u = Math.cos(e) * this.lch_c),
            (this.luv_v = Math.sin(e) * this.lch_c));
        }
        calculateBoundingLines(t) {
          let n = (t + 16) ** 3 / 1560896,
            r = n > e.epsilon ? n : t / e.kappa,
            i = r * (284517 * e.m_r0 - 94839 * e.m_r2),
            a = r * (838422 * e.m_r2 + 769860 * e.m_r1 + 731718 * e.m_r0),
            o = r * (632260 * e.m_r2 - 126452 * e.m_r1),
            s = r * (284517 * e.m_g0 - 94839 * e.m_g2),
            c = r * (838422 * e.m_g2 + 769860 * e.m_g1 + 731718 * e.m_g0),
            l = r * (632260 * e.m_g2 - 126452 * e.m_g1),
            u = r * (284517 * e.m_b0 - 94839 * e.m_b2),
            d = r * (838422 * e.m_b2 + 769860 * e.m_b1 + 731718 * e.m_b0),
            f = r * (632260 * e.m_b2 - 126452 * e.m_b1);
          ((this.r0s = i / o),
            (this.r0i = (a * t) / o),
            (this.r1s = i / (o + 126452)),
            (this.r1i = ((a - 769860) * t) / (o + 126452)),
            (this.g0s = s / l),
            (this.g0i = (c * t) / l),
            (this.g1s = s / (l + 126452)),
            (this.g1i = ((c - 769860) * t) / (l + 126452)),
            (this.b0s = u / f),
            (this.b0i = (d * t) / f),
            (this.b1s = u / (f + 126452)),
            (this.b1i = ((d - 769860) * t) / (f + 126452)));
        }
        calcMaxChromaHpluv() {
          let t = e.distanceFromOrigin(this.r0s, this.r0i),
            n = e.distanceFromOrigin(this.r1s, this.r1i),
            r = e.distanceFromOrigin(this.g0s, this.g0i),
            i = e.distanceFromOrigin(this.g1s, this.g1i),
            a = e.distanceFromOrigin(this.b0s, this.b0i),
            o = e.distanceFromOrigin(this.b1s, this.b1i);
          return e.min6(t, n, r, i, a, o);
        }
        calcMaxChromaHsluv(t) {
          let n = (t / 360) * Math.PI * 2,
            r = e.distanceFromOriginAngle(this.r0s, this.r0i, n),
            i = e.distanceFromOriginAngle(this.r1s, this.r1i, n),
            a = e.distanceFromOriginAngle(this.g0s, this.g0i, n),
            o = e.distanceFromOriginAngle(this.g1s, this.g1i, n),
            s = e.distanceFromOriginAngle(this.b0s, this.b0i, n),
            c = e.distanceFromOriginAngle(this.b1s, this.b1i, n);
          return e.min6(r, i, a, o, s, c);
        }
        hsluvToLch() {
          if (this.hsluv_l > 99.9999999) ((this.lch_l = 100), (this.lch_c = 0));
          else if (this.hsluv_l < 1e-8) ((this.lch_l = 0), (this.lch_c = 0));
          else {
            ((this.lch_l = this.hsluv_l), this.calculateBoundingLines(this.hsluv_l));
            let e = this.calcMaxChromaHsluv(this.hsluv_h);
            this.lch_c = (e / 100) * this.hsluv_s;
          }
          this.lch_h = this.hsluv_h;
        }
        lchToHsluv() {
          if (this.lch_l > 99.9999999) ((this.hsluv_s = 0), (this.hsluv_l = 100));
          else if (this.lch_l < 1e-8) ((this.hsluv_s = 0), (this.hsluv_l = 0));
          else {
            this.calculateBoundingLines(this.lch_l);
            let e = this.calcMaxChromaHsluv(this.lch_h);
            ((this.hsluv_s = (this.lch_c / e) * 100), (this.hsluv_l = this.lch_l));
          }
          this.hsluv_h = this.lch_h;
        }
        hpluvToLch() {
          if (this.hpluv_l > 99.9999999) ((this.lch_l = 100), (this.lch_c = 0));
          else if (this.hpluv_l < 1e-8) ((this.lch_l = 0), (this.lch_c = 0));
          else {
            ((this.lch_l = this.hpluv_l), this.calculateBoundingLines(this.hpluv_l));
            let e = this.calcMaxChromaHpluv();
            this.lch_c = (e / 100) * this.hpluv_p;
          }
          this.lch_h = this.hpluv_h;
        }
        lchToHpluv() {
          if (this.lch_l > 99.9999999) ((this.hpluv_p = 0), (this.hpluv_l = 100));
          else if (this.lch_l < 1e-8) ((this.hpluv_p = 0), (this.hpluv_l = 0));
          else {
            this.calculateBoundingLines(this.lch_l);
            let e = this.calcMaxChromaHpluv();
            ((this.hpluv_p = (this.lch_c / e) * 100), (this.hpluv_l = this.lch_l));
          }
          this.hpluv_h = this.lch_h;
        }
        hsluvToRgb() {
          (this.hsluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb());
        }
        hpluvToRgb() {
          (this.hpluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb());
        }
        hsluvToHex() {
          (this.hsluvToRgb(), this.rgbToHex());
        }
        hpluvToHex() {
          (this.hpluvToRgb(), this.rgbToHex());
        }
        rgbToHsluv() {
          (this.rgbToXyz(), this.xyzToLuv(), this.luvToLch(), this.lchToHpluv(), this.lchToHsluv());
        }
        rgbToHpluv() {
          (this.rgbToXyz(), this.xyzToLuv(), this.luvToLch(), this.lchToHpluv(), this.lchToHpluv());
        }
        hexToHsluv() {
          (this.hexToRgb(), this.rgbToHsluv());
        }
        hexToHpluv() {
          (this.hexToRgb(), this.rgbToHpluv());
        }
      }),
      (aS.hexChars = `0123456789abcdef`),
      (aS.refY = 1),
      (aS.refU = 0.19783000664283),
      (aS.refV = 0.46831999493879),
      (aS.kappa = 903.2962962),
      (aS.epsilon = 0.0088564516),
      (aS.m_r0 = 3.240969941904521),
      (aS.m_r1 = -1.537383177570093),
      (aS.m_r2 = -0.498610760293),
      (aS.m_g0 = -0.96924363628087),
      (aS.m_g1 = 1.87596750150772),
      (aS.m_g2 = 0.041555057407175),
      (aS.m_b0 = 0.055630079696993),
      (aS.m_b1 = -0.20397695888897),
      (aS.m_b2 = 1.056971514242878),
      (oS = /* @__PURE__ */ new aS()),
      (sS = /* @__PURE__ */ (() => {
        let e = `(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)`,
          t = `[\\s|\\(]+(` + e + `)[,|\\s]+(` + e + `)[,|\\s]+(` + e + `)\\s*\\)?`,
          n =
            `[\\s|\\(]+(` +
            e +
            `)[,|\\s]+(` +
            e +
            `)[,|\\s]+(` +
            e +
            `)[,|\\s]+(` +
            e +
            `)\\s*\\)?`;
        return {
          rgb: RegExp(`rgb` + t),
          rgba: RegExp(`rgba` + n),
          hsl: RegExp(`hsl` + t),
          hsla: RegExp(`hsla` + n),
          hsv: RegExp(`hsv` + t),
          hsva: RegExp(`hsva` + n),
          hex3: /^([\da-f])([\da-f])([\da-f])$/iu,
          hex6: /^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
          hex4: /^#?([\da-f])([\da-f])([\da-f])([\da-f])$/iu,
          hex8: /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
        };
      })()),
      (cS =
        /^color\(display-p3\s+(?<r>\d+\.\d+|\d+|\.\d+)\s+(?<g>\d+\.\d+|\d+|\.\d+)\s+(?<b>\d+\.\d+|\d+|\.\d+)(?:\s*\/\s*(?<a>\d+\.\d+|\d+|\.\d+))?\)$/u),
      (lS = (e) => {
        let { r: t, g: n, b: r, a: i } = Ao(e);
        return {
          x: 0.486570948648216 * t + 0.265667693169093 * n + 0.1982172852343625 * r,
          y: 0.2289745640697487 * t + 0.6917385218365062 * n + 0.079286914093745 * r,
          z: 0 * t + 0.0451133818589026 * n + 1.043944368900976 * r,
          a: i,
        };
      }),
      (uS = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        Mo({
          r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * n,
          g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * n,
          b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * n,
          a: r,
        })),
      (dS = (e) => {
        let { r: t, g: n, b: r, a: i } = Ao(e);
        return {
          x: 0.4123907992659593 * t + 0.357584339383878 * n + 0.1804807884018343 * r,
          y: 0.2126390058715102 * t + 0.715168678767756 * n + 0.0721923153607337 * r,
          z: 0.0193308187155918 * t + 0.119194779794626 * n + 0.9505321522496607 * r,
          a: i,
        };
      }),
      (fS = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        Mo({
          r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * n,
          g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * n,
          b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * n,
          a: r,
        })),
      (pS = class e {
        format = `p3`;
        r;
        g;
        b;
        a;
        constructor(e) {
          ((this.r = e.r ?? 0), (this.g = e.g ?? 0), (this.b = e.b ?? 0), (this.a = e.a ?? 1));
        }
        hsv() {
          return No(this);
        }
        rgb() {
          return Lo(this);
        }
        hsl() {
          return go(this.r, this.g, this.b);
        }
        toString(e = `p3`, t) {
          switch (e) {
            case `p3`: {
              let e = t?.r ?? this.r,
                n = t?.g ?? this.g,
                r = t?.b ?? this.b,
                i = t?.a ?? this.a;
              return i === 1
                ? `color(display-p3 ${e} ${n} ${r})`
                : `color(display-p3 ${e} ${n} ${r} / ${i})`;
            }
            case `srgb`: {
              let e = this.rgb(),
                n = Math.round(Math.max(0, Math.min(e.r, 1)) * 100) / 100,
                r = Math.round(Math.max(0, Math.min(e.g, 1)) * 100) / 100,
                i = Math.round(Math.max(0, Math.min(e.b, 1)) * 100) / 100,
                a = t?.r ?? n * 255,
                o = t?.g ?? r * 255,
                s = t?.b ?? i * 255,
                c = t?.a ?? e.a ?? 1;
              return c === 1 ? `rgb(${a}, ${o}, ${s})` : `rgba(${a}, ${o}, ${s}, ${c})`;
            }
          }
        }
        static isP3String(e) {
          return e.startsWith(`color(display-p3`);
        }
        static fromHSV(t, n = `p3`) {
          switch (n) {
            case `p3`:
              return new e(Fo(t));
            case `srgb`:
              return new e(Io(Fo(t)));
          }
        }
        static fromRGB(t) {
          return new e(
            Io({
              r: Math.round((t.r / 255) * 1e4) / 1e4,
              g: Math.round((t.g / 255) * 1e4) / 1e4,
              b: Math.round((t.b / 255) * 1e4) / 1e4,
              a: t.a ?? 1,
            })
          );
        }
        static fromRGBString(t) {
          let n = X(t);
          if (n) return e.fromRGB(n);
        }
        static fromString(t) {
          if (!e.isP3String(t)) return;
          let n = Oo(t);
          if (n) return new e({ r: n.r, g: n.g, b: n.b, a: n.a });
        }
        static srgbFromValue(t) {
          if (!V(t) || !X.isP3String(t)) return t;
          let n = e.fromString(t);
          return n ? n.toString(`srgb`) : t;
        }
        static multiplyAlpha(t, n) {
          return new e({ r: t.r, g: t.g, b: t.b, a: t.a * n });
        }
      }),
      (mS = /* @__PURE__ */ new Map()),
      (X = /* @__PURE__ */ (() => {
        function e(n, r, i, a) {
          if (typeof n == `string`) {
            let r = mS.get(n);
            return (
              r || ((r = t(n)), r === void 0 ? { ...e(`black`), isValid: !1 } : (mS.set(n, r), r))
            );
          }
          let o = t(n, r, i, a);
          return o === void 0 ? { ...e(`black`), isValid: !1 } : o;
        }
        function t(t, n, r, i) {
          if (t === ``) return;
          let a = Ro(t, n, r, i);
          if (a) {
            let n = {
              r: a.r,
              g: a.g,
              b: a.b,
              a: a.a,
              h: a.h,
              s: a.s,
              l: a.l,
              initialValue: typeof t == `string` && a.format !== `hsv` ? t : void 0,
              roundA: Math.round(100 * a.a) / 100,
              format: a.format,
              mix: e.mix,
              toValue: () => e.toRgbString(n),
            };
            return n;
          }
        }
        let n = {
          isRGB(e) {
            return e === `rgb` || e === `rgba`;
          },
          isHSL(e) {
            return e === `hsl` || e === `hsla`;
          },
        };
        ((e.inspect = (e, t) =>
          e.format === `hsl`
            ? `<${e.constructor.name} h:${e.h} s:${e.s} l:${e.l} a:${e.a}>`
            : e.format === `hex` || e.format === `name`
              ? `<${e.constructor.name} "${t}">`
              : `<${e.constructor.name} r:${e.r} g:${e.g} b:${e.b} a:${e.a}>`),
          (e.isColor = (t) => (typeof t == `string` ? e.isColorString(t) : e.isColorObject(t))),
          (e.isColorString = (e) => typeof e == `string` && To(e) !== !1),
          (e.isColorObject = (e) =>
            U(e) &&
            typeof e.r == `number` &&
            typeof e.g == `number` &&
            typeof e.b == `number` &&
            typeof e.h == `number` &&
            typeof e.s == `number` &&
            typeof e.l == `number` &&
            typeof e.a == `number` &&
            typeof e.roundA == `number` &&
            typeof e.format == `string`),
          (e.toString = (t) => e.toRgbString(t)),
          (e.toHex = (e, t = !1) => ho(e.r, e.g, e.b, t)),
          (e.toHexString = (t, n = !1) => `#${e.toHex(t, n)}`),
          (e.isP3String = (e) => typeof e == `string` && pS.isP3String(e)),
          (e.toRgbString = (e) =>
            e.a === 1
              ? `rgb(` + Math.round(e.r) + `, ` + Math.round(e.g) + `, ` + Math.round(e.b) + `)`
              : `rgba(` +
                Math.round(e.r) +
                `, ` +
                Math.round(e.g) +
                `, ` +
                Math.round(e.b) +
                `, ` +
                e.roundA +
                `)`),
          (e.toHusl = (e) => ({ ...uo(e.r, e.g, e.b), a: e.roundA })),
          (e.toHslString = (t) => {
            let n = e.toHsl(t),
              r = Math.round(n.h),
              i = Math.round(n.s * 100),
              a = Math.round(n.l * 100);
            return t.a === 1
              ? `hsl(` + r + `, ` + i + `%, ` + a + `%)`
              : `hsla(` + r + `, ` + i + `%, ` + a + `%, ` + t.roundA + `)`;
          }),
          (e.toHsv = (e) => {
            let t = yo(e.r, e.g, e.b);
            return { h: t.h * 360, s: t.s, v: t.v, a: e.a };
          }),
          (e.toHsvString = (e) => {
            let t = yo(e.r, e.g, e.b),
              n = Math.round(t.h * 360),
              r = Math.round(t.s * 100),
              i = Math.round(t.v * 100);
            return e.a === 1
              ? `hsv(` + n + `, ` + r + `%, ` + i + `%)`
              : `hsva(` + n + `, ` + r + `%, ` + i + `%, ` + e.roundA + `)`;
          }),
          (e.toName = (e) => {
            if (e.a === 0) return `transparent`;
            if (e.a < 1) return !1;
            let t = ho(e.r, e.g, e.b, !0);
            for (let e of Object.keys(iS)) if (iS[e] === t) return e;
            return !1;
          }),
          (e.toHsl = (e) => ({ h: Math.round(e.h), s: e.s, l: e.l, a: e.a })),
          (e.toRgb = (e) => ({
            r: Math.round(e.r),
            g: Math.round(e.g),
            b: Math.round(e.b),
            a: e.a,
          })),
          (e.brighten = (t, n = 10) => {
            let r = e.toRgb(t);
            return (
              (r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(n / 100))))),
              (r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(n / 100))))),
              (r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(n / 100))))),
              e(r)
            );
          }),
          (e.lighten = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.l += n / 100), (r.l = Math.min(1, Math.max(0, r.l))), e(r));
          }),
          (e.darken = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.l -= n / 100), (r.l = Math.min(1, Math.max(0, r.l))), e(r));
          }),
          (e.saturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.s += n / 100), (r.s = Math.min(1, Math.max(0, r.s))), e(r));
          }),
          (e.desaturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.s -= n / 100), (r.s = Math.min(1, Math.max(0, r.s))), e(r));
          }),
          (e.grayscale = (t) => e.desaturate(t, 100)),
          (e.hueRotate = (t, n) => {
            let r = e.toHsl(t);
            return ((r.h += n), (r.h = r.h > 360 ? r.h - 360 : r.h), e(r));
          }),
          (e.alpha = (t, n = 1) => e({ r: t.r, g: t.g, b: t.b, a: n })),
          (e.transparent = (t) => e.alpha(t, 0)),
          (e.multiplyAlpha = (t, n = 1) => e({ r: t.r, g: t.g, b: t.b, a: t.a * n })),
          (e.alphaComposite = (t, n) => {
            if (t.a === 1) return t;
            if (n.a < 1)
              throw Error(
                "Bottom color must be fully opaque for alpha blending, you should check and determine your own strategy for resolving alpha bottom layers, ie. `Color.alphaComposite(bottom, Color('white'))`"
              );
            return t.a === 0
              ? n
              : e({
                  r: Math.round(t.r * t.a + n.r * (1 - t.a)),
                  g: Math.round(t.g * t.a + n.g * (1 - t.a)),
                  b: Math.round(t.b * t.a + n.b * (1 - t.a)),
                  a: 1,
                });
          }),
          (e.interpolate = (t, n, r = `rgb`) => {
            if (!e.isColorObject(t) || !e.isColorObject(n))
              throw TypeError(`Both arguments for Color.interpolate must be Color objects`);
            return (i) => e.mixAsColor(t, n, i, !1, r);
          }),
          (e.mix = (t, n, { model: r = `rgb` } = {}) => {
            let i = typeof t == `string` ? e(t) : t,
              a = e.interpolate(i, n, r);
            return (t) => e.toRgbString(a(t));
          }),
          (e.mixAsColor = (t, r, i = 0.5, a = !1, o = `rgb`) => {
            let s = null;
            if (n.isRGB(o))
              s = e({
                r: oo(i, [0, 1], [t.r, r.r], a),
                g: oo(i, [0, 1], [t.g, r.g], a),
                b: oo(i, [0, 1], [t.b, r.b], a),
                a: oo(i, [0, 1], [t.a, r.a], a),
              });
            else {
              let c, l;
              (n.isHSL(o)
                ? ((c = e.toHsl(t)), (l = e.toHsl(r)))
                : ((c = e.toHusl(t)), (l = e.toHusl(r))),
                c.s === 0 ? (c.h = l.h) : l.s === 0 && (l.h = c.h));
              let u = c.h,
                d = l.h,
                f = d - u;
              f > 180 ? (f = d - 360 - u) : f < -180 && (f = d + 360 - u);
              let p = {
                h: oo(i, [0, 1], [u, u + f], a),
                s: oo(i, [0, 1], [c.s, l.s], a),
                l: oo(i, [0, 1], [c.l, l.l], a),
                a: oo(i, [0, 1], [t.a, r.a], a),
              };
              s = n.isHSL(o) ? e(p) : e(fo(p.h, p.s, p.l, p.a));
            }
            return s;
          }),
          (e.random = (t = 1) => {
            function n() {
              return Math.floor(Math.random() * 255);
            }
            return e(`rgba(` + n() + `, ` + n() + `, ` + n() + `, ` + t + `)`);
          }),
          (e.grey = (t = 0.5, n = 1) => (
            (t = Math.floor(t * 255)),
            e(`rgba(` + t + `, ` + t + `, ` + t + `, ` + n + `)`)
          )),
          (e.gray = e.grey),
          (e.rgbToHsl = (e, t, n) => go(e, t, n)),
          (e.isValidColorProperty = (t, n) =>
            !(
              (t.toLowerCase().slice(-5) !== `color` && t !== `fill` && t !== `stroke`) ||
              typeof n != `string` ||
              !e.isColorString(n)
            )),
          (e.difference = (e, t) => {
            let n = (e.r + t.r) / 2,
              r = e.r - t.r,
              i = e.g - t.g,
              a = e.b - t.b,
              o = r ** 2,
              s = i ** 2,
              c = a ** 2;
            return Math.sqrt(2 * o + 4 * s + 3 * c + (n * (o - c)) / 256);
          }),
          (e.equal = (e, t, n = 0.1) =>
            !(
              Math.abs(e.r - t.r) >= n ||
              Math.abs(e.g - t.g) >= n ||
              Math.abs(e.b - t.b) >= n ||
              Math.abs(e.a - t.a) * 256 >= n
            )));
        function r(e) {
          e /= 255;
          let t = Math.abs(e);
          return t < 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
        }
        return (
          (e.luminance = (t) => {
            let { r: n, g: i, b: a } = e.toRgb(t);
            return 0.2126 * r(n) + 0.7152 * r(i) + 0.0722 * r(a);
          }),
          (e.contrast = (t, n) => {
            let r = e.luminance(t),
              i = e.luminance(n);
            return (Math.max(r, i) + 0.05) / (Math.min(r, i) + 0.05);
          }),
          e
        );
      })()),
      (hS = (e) => e instanceof Ce),
      (gS = /* @__PURE__ */ Ee((e, t) => {
        var n = Object.prototype.hasOwnProperty,
          r = `~`;
        function i() {}
        Object.create && ((i.prototype = Object.create(null)), new i().__proto__ || (r = !1));
        function a(e, t, n) {
          ((this.fn = e), (this.context = t), (this.once = n || !1));
        }
        function o(e, t, n, i, o) {
          if (typeof n != `function`) throw TypeError(`The listener must be a function`);
          var s = new a(n, i || e, o),
            c = r ? r + t : t;
          return (
            e._events[c]
              ? e._events[c].fn
                ? (e._events[c] = [e._events[c], s])
                : e._events[c].push(s)
              : ((e._events[c] = s), e._eventsCount++),
            e
          );
        }
        function s(e, t) {
          --e._eventsCount === 0 ? (e._events = new i()) : delete e._events[t];
        }
        function c() {
          ((this._events = new i()), (this._eventsCount = 0));
        }
        ((c.prototype.eventNames = function () {
          var e = [],
            t,
            i;
          if (this._eventsCount === 0) return e;
          for (i in (t = this._events)) n.call(t, i) && e.push(r ? i.slice(1) : i);
          return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e;
        }),
          (c.prototype.listeners = function (e) {
            var t = r ? r + e : e,
              n = this._events[t];
            if (!n) return [];
            if (n.fn) return [n.fn];
            for (var i = 0, a = n.length, o = Array(a); i < a; i++) o[i] = n[i].fn;
            return o;
          }),
          (c.prototype.listenerCount = function (e) {
            var t = r ? r + e : e,
              n = this._events[t];
            return n ? (n.fn ? 1 : n.length) : 0;
          }),
          (c.prototype.emit = function (e, t, n, i, a, o) {
            var s = r ? r + e : e;
            if (!this._events[s]) return !1;
            var c = this._events[s],
              l = arguments.length,
              u,
              d;
            if (c.fn) {
              switch ((c.once && this.removeListener(e, c.fn, void 0, !0), l)) {
                case 1:
                  return (c.fn.call(c.context), !0);
                case 2:
                  return (c.fn.call(c.context, t), !0);
                case 3:
                  return (c.fn.call(c.context, t, n), !0);
                case 4:
                  return (c.fn.call(c.context, t, n, i), !0);
                case 5:
                  return (c.fn.call(c.context, t, n, i, a), !0);
                case 6:
                  return (c.fn.call(c.context, t, n, i, a, o), !0);
              }
              for (d = 1, u = Array(l - 1); d < l; d++) u[d - 1] = arguments[d];
              c.fn.apply(c.context, u);
            } else {
              var f = c.length,
                p;
              for (d = 0; d < f; d++)
                switch ((c[d].once && this.removeListener(e, c[d].fn, void 0, !0), l)) {
                  case 1:
                    c[d].fn.call(c[d].context);
                    break;
                  case 2:
                    c[d].fn.call(c[d].context, t);
                    break;
                  case 3:
                    c[d].fn.call(c[d].context, t, n);
                    break;
                  case 4:
                    c[d].fn.call(c[d].context, t, n, i);
                    break;
                  default:
                    if (!u) for (p = 1, u = Array(l - 1); p < l; p++) u[p - 1] = arguments[p];
                    c[d].fn.apply(c[d].context, u);
                }
            }
            return !0;
          }),
          (c.prototype.on = function (e, t, n) {
            return o(this, e, t, n, !1);
          }),
          (c.prototype.once = function (e, t, n) {
            return o(this, e, t, n, !0);
          }),
          (c.prototype.removeListener = function (e, t, n, i) {
            var a = r ? r + e : e;
            if (!this._events[a]) return this;
            if (!t) return (s(this, a), this);
            var o = this._events[a];
            if (o.fn) o.fn === t && (!i || o.once) && (!n || o.context === n) && s(this, a);
            else {
              for (var c = 0, l = [], u = o.length; c < u; c++)
                (o[c].fn !== t || (i && !o[c].once) || (n && o[c].context !== n)) && l.push(o[c]);
              l.length ? (this._events[a] = l.length === 1 ? l[0] : l) : s(this, a);
            }
            return this;
          }),
          (c.prototype.removeAllListeners = function (e) {
            var t;
            return (
              e
                ? ((t = r ? r + e : e), this._events[t] && s(this, t))
                : ((this._events = new i()), (this._eventsCount = 0)),
              this
            );
          }),
          (c.prototype.off = c.prototype.removeListener),
          (c.prototype.addListener = c.prototype.on),
          (c.prefixed = r),
          (c.EventEmitter = c),
          t !== void 0 && (t.exports = c));
      })),
      (_S = gS().EventEmitter),
      (vS = class {
        _emitter = new _S();
        eventNames() {
          return this._emitter.eventNames();
        }
        eventListeners() {
          let e = {};
          for (let t of this._emitter.eventNames()) e[t] = this._emitter.listeners(t);
          return e;
        }
        on(e, t) {
          this.addEventListener(e, t, !1, !1, this);
        }
        off(e, t) {
          this.removeEventListeners(e, t);
        }
        once(e, t) {
          this.addEventListener(e, t, !0, !1, this);
        }
        unique(e, t) {
          this.addEventListener(e, t, !1, !0, this);
        }
        addEventListener(e, t, n, r, i) {
          if (r) {
            for (let e of this._emitter.eventNames()) if (t === this._emitter.listeners(e)) return;
          }
          n === !0 ? this._emitter.once(e, t, i) : this._emitter.addListener(e, t, i);
        }
        removeEventListeners(e, t) {
          e ? this._emitter.removeListener(e, t) : this.removeAllEventListeners();
        }
        removeAllEventListeners() {
          this._emitter.removeAllListeners();
        }
        countEventListeners(e) {
          if (e) return this._emitter.listeners(e).length;
          {
            let e = 0;
            for (let t of this._emitter.eventNames()) e += this._emitter.listeners(t).length;
            return e;
          }
        }
        emit(e, ...t) {
          this._emitter.emit(e, ...t);
        }
      }),
      (yS = (e) => {
        setTimeout(e, 1 / 60);
      }),
      (bS = Mt.requestAnimationFrame || yS),
      (xS = (e) => bS(e)),
      (SS = 1 / 60),
      (CS = class extends vS {
        _started = !1;
        _frame = 0;
        _frameTasks = [];
        addFrameTask(e) {
          this._frameTasks.push(e);
        }
        _processFrameTasks() {
          let e = this._frameTasks,
            t = e.length;
          if (t !== 0) {
            for (let n = 0; n < t; n++) e[n]?.();
            e.length = 0;
          }
        }
        static set TimeStep(e) {
          SS = e;
        }
        static get TimeStep() {
          return SS;
        }
        constructor(e = !1) {
          (super(), e && this.start());
        }
        start() {
          return (this._started || ((this._frame = 0), (this._started = !0), xS(this.tick)), this);
        }
        stop() {
          return ((this._started = !1), this);
        }
        get frame() {
          return this._frame;
        }
        get time() {
          return this._frame * SS;
        }
        tick = () => {
          this._started &&
            (xS(this.tick),
            this.emit(`update`, this._frame, SS),
            this.emit(`render`, this._frame, SS),
            this._processFrameTasks(),
            this._frame++);
        };
      }),
      (wS = /* @__PURE__ */ new CS()),
      (TS = (e) => ({
        correct: (t, { projectionDelta: n, treeScale: r }) => {
          if ((typeof t == `string` && (t = parseFloat(t)), t === 0)) return `0px`;
          let i = t;
          return (
            n && r && ((i = Math.round(t / n[e].scale / r[e])), (i = Math.max(i, 1))),
            i + `px`
          );
        },
      })),
      Re({
        borderTopWidth: TS(`y`),
        borderLeftWidth: TS(`x`),
        borderRightWidth: TS(`x`),
        borderBottomWidth: TS(`y`),
      }),
      (ES = /* @__PURE__ */ j.createContext({
        getLayoutId: (e) => null,
        persistLayoutIdCache: () => {},
        top: !1,
        enabled: !0,
      })),
      (DS = {
        background: void 0,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`,
        lineHeight: `1.4em`,
        textOverflow: `ellipsis`,
        overflow: `hidden`,
        minHeight: 0,
        width: `100%`,
        height: `100%`,
      }),
      (OS = {
        ...DS,
        border: `1px solid rgba(149, 149, 149, 0.15)`,
        borderRadius: 6,
        fontSize: `12px`,
        backgroundColor: `rgba(149, 149, 149, 0.1)`,
        color: `#a5a5a5`,
      }),
      (kS = {
        overflow: `hidden`,
        whiteSpace: `nowrap`,
        textOverflow: `ellipsis`,
        maxWidth: `100%`,
        flexShrink: 0,
        padding: `0 10px`,
      }),
      (AS = { ...kS, fontWeight: 500 }),
      (jS = {
        ...kS,
        whiteSpace: `pre`,
        maxHeight: `calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))`,
        WebkitMaskImage: `linear-gradient(to bottom, black 80%, transparent 100%)`,
      }),
      (MS = (e) => e),
      (NS =
        /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u),
      (PS = /* #__PURE__ */ Qo(
        (e) =>
          NS.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
      )),
      (FS = (e) => () => {
        Qa(e);
      }),
      (IS = () => () => {}),
      (LS = {
        imagePlaceholderSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="126" height="126"><path id="a" d="M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z" fill="rgb(136, 136, 136, 0.2)" fill-rule="evenodd"/></svg>`,
        useImageSource(e) {
          return e.src ?? ``;
        },
        useImageElement(e, t, n) {
          let r = zS.useImageSource(e, t, n);
          return S(() => {
            let t = new Image();
            return ((t.src = r), e.srcSet && (t.srcset = e.srcSet), t);
          }, [r, e.srcSet]);
        },
        canRenderOptimizedCanvasImage() {
          return !1;
        },
        fontStore: {
          isSelectorLoaded() {
            return !0;
          },
          async loadFonts() {
            return { newlyLoadedFontCount: 0 };
          },
          async loadWebFontsFromSelectors() {
            return [];
          },
          async loadMissingFonts() {},
        },
        isOnPageCanvas: !1,
      }),
      (RS = !1),
      (zS = /* @__PURE__ */ new Proxy(LS, {
        get(e, t, n) {
          return Reflect.has(e, t)
            ? Reflect.get(e, t, n)
            : [`getLogger`].includes(String(t))
              ? IS()
              : FS(
                  RS
                    ? `${String(t)} is not available in this version of Framer.`
                    : `${String(t)} is only available inside of Framer. https://www.framer.com/`
                );
        },
      })),
      (BS = {
        isSelectorLoaded(e) {
          return zS.fontStore.isSelectorLoaded(e);
        },
        loadFonts(e) {
          return zS.fontStore.loadFonts(e);
        },
        loadWebFontsFromSelectors(e) {
          return zS.fontStore.loadWebFontsFromSelectors(e);
        },
        loadMissingFonts(e, t) {
          return zS.fontStore.loadMissingFonts(e, t);
        },
      }),
      (VS = { borderRadius: `inherit`, cornerShape: `inherit` }),
      (HS = [1, 2, 2.2]),
      (US = [512, 1024, 2048, 4096]),
      (WS = { position: `absolute`, ...VS, top: 0, right: 0, bottom: 0, left: 0 }),
      (GS = `src`),
      (KS = {
        isImageObject: function (e) {
          return !e || typeof e == `string` ? !1 : typeof e == `object` && GS in e;
        },
      }),
      (qS = /* @__PURE__ */ (() => {
        function e(e, t) {
          return { a: e, b: t };
        }
        return (
          (e.offset = (t, n) => {
            let r = bs(ao.angleFromX(t.a, t.b)),
              i = n * Math.sin(r),
              a = n * Math.cos(r);
            return e({ x: t.a.x + i, y: t.a.y - a }, { x: t.b.x + i, y: t.b.y - a });
          }),
          (e.intersection = (e, t, n) => {
            let r = e.a.x,
              i = e.a.y,
              a = e.b.x,
              o = e.b.y,
              s = t.a.x,
              c = t.a.y,
              l = t.b.x,
              u = t.b.y,
              d = (l - s) * (c - i) - (u - c) * (s - r),
              f = (l - s) * (o - i) - (u - c) * (a - r),
              p = (a - r) * (c - i) - (o - i) * (s - r);
            if ((d === 0 && f === 0) || f === 0) return null;
            let m = d / f,
              h = p / f;
            return n && (m < 0 || m > 1 || h < 0 || h > 1)
              ? null
              : { x: r + m * (a - r), y: i + m * (o - i) };
          }),
          (e.intersectionAngle = (e, t) => {
            let n = e.b.x - e.a.x,
              r = e.b.y - e.a.y,
              i = t.b.x - t.a.x,
              a = t.b.y - t.a.y;
            return Math.atan2(n * a - r * i, n * i + r * a) * (180 / Math.PI);
          }),
          (e.isOrthogonal = (e) => e.a.x === e.b.x || e.a.y === e.b.y),
          (e.perpendicular = (t, n) => {
            let r = t.a.x - t.b.x,
              i = t.a.y - t.b.y;
            return e(ao(n.x - i, n.y + r), n);
          }),
          (e.projectPoint = (t, n) => {
            let r = e.perpendicular(t, n);
            return e.intersection(t, r);
          }),
          (e.pointAtPercentDistance = (t, n) => {
            let r = e.distance(t),
              i = (n * r) / r;
            return { x: i * t.b.x + (1 - i) * t.a.x, y: i * t.b.y + (1 - i) * t.a.y };
          }),
          (e.distance = (e) => ao.distance(e.a, e.b)),
          e
        );
      })()),
      (Z = {
        equals: function (e, t) {
          return e === t
            ? !0
            : !e || !t
              ? !1
              : e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
        },
        from: (e) => ({ x: e.x, y: e.y, width: e.width, height: e.height }),
        atOrigin: (e) => ({ x: 0, y: 0, width: e.width, height: e.height }),
        fromTwoPoints: (e, t) => ({
          x: Math.min(e.x, t.x),
          y: Math.min(e.y, t.y),
          width: Math.abs(e.x - t.x),
          height: Math.abs(e.y - t.y),
        }),
        fromRect: (e) => ({
          x: e.left,
          y: e.top,
          width: e.right - e.left,
          height: e.bottom - e.top,
        }),
        multiply: (e, t) => ({ x: e.x * t, y: e.y * t, width: e.width * t, height: e.height * t }),
        divide: (e, t) => Z.multiply(e, 1 / t),
        offset: (e, t) => {
          let n = typeof t.x == `number` ? t.x : 0,
            r = typeof t.y == `number` ? t.y : 0;
          return { ...e, x: e.x + n, y: e.y + r };
        },
        inflate: (e, t) => {
          if (t === 0) return e;
          let n = 2 * t;
          return { x: e.x - t, y: e.y - t, width: e.width + n, height: e.height + n };
        },
        pixelAligned: (e) => {
          let t = Math.round(e.x),
            n = Math.round(e.y),
            r = Math.round(e.x + e.width),
            i = Math.round(e.y + e.height);
          return { x: t, y: n, width: Math.max(r - t, 0), height: Math.max(i - n, 0) };
        },
        halfPixelAligned: (e) => {
          let t = Math.round(e.x * 2) / 2,
            n = Math.round(e.y * 2) / 2,
            r = Math.round((e.x + e.width) * 2) / 2,
            i = Math.round((e.y + e.height) * 2) / 2;
          return { x: t, y: n, width: Math.max(r - t, 1), height: Math.max(i - n, 1) };
        },
        round: (e, t = 0) => ({
          x: no(e.x, t),
          y: no(e.y, t),
          width: no(e.width, t),
          height: no(e.height, t),
        }),
        roundToOutside: (e) => {
          let t = Math.floor(e.x),
            n = Math.floor(e.y),
            r = Math.ceil(e.x + e.width),
            i = Math.ceil(e.y + e.height);
          return { x: t, y: n, width: Math.max(r - t, 0), height: Math.max(i - n, 0) };
        },
        minX: (e) => e.x,
        maxX: (e) => e.x + e.width,
        minY: (e) => e.y,
        maxY: (e) => e.y + e.height,
        positions: (e) => ({
          minX: e.x,
          midX: e.x + e.width / 2,
          maxX: Z.maxX(e),
          minY: e.y,
          midY: e.y + e.height / 2,
          maxY: Z.maxY(e),
        }),
        center: (e) => ({ x: e.x + e.width / 2, y: e.y + e.height / 2 }),
        boundingRectFromPoints: (e) => {
          let t = 1 / 0,
            n = -1 / 0,
            r = 1 / 0,
            i = -1 / 0;
          for (let a = 0; a < e.length; a++) {
            let o = e[a];
            ((t = Math.min(t, o.x)),
              (n = Math.max(n, o.x)),
              (r = Math.min(r, o.y)),
              (i = Math.max(i, o.y)));
          }
          return { x: t, y: r, width: n - t, height: i - r };
        },
        fromPoints: (e) => {
          let [t, n, r, i] = e,
            { x: a, y: o } = t;
          return { x: a, y: o, width: ao.distance(t, n), height: ao.distance(t, i) };
        },
        merge: (...e) => {
          let t = { x: Math.min(...e.map(Z.minX)), y: Math.min(...e.map(Z.minY)) },
            n = { x: Math.max(...e.map(Z.maxX)), y: Math.max(...e.map(Z.maxY)) };
          return Z.fromTwoPoints(t, n);
        },
        intersection: (e, t) => {
          let n = Math.max(e.x, t.x),
            r = Math.min(e.x + e.width, t.x + t.width),
            i = Math.max(e.y, t.y),
            a = Math.min(e.y + e.height, t.y + t.height);
          return { x: n, y: i, width: r - n, height: a - i };
        },
        points: (e) => [
          { x: Z.minX(e), y: Z.minY(e) },
          { x: Z.minX(e), y: Z.maxY(e) },
          { x: Z.maxX(e), y: Z.minY(e) },
          { x: Z.maxX(e), y: Z.maxY(e) },
        ],
        pointsAtOrigin: (e) => [
          { x: 0, y: 0 },
          { x: e.width, y: 0 },
          { x: e.width, y: e.height },
          { x: 0, y: e.height },
        ],
        transform: (e, t) => {
          let { x: n, y: r } = t.transformPoint({ x: e.x, y: e.y }),
            { x: i, y: a } = t.transformPoint({ x: e.x + e.width, y: e.y }),
            { x: o, y: s } = t.transformPoint({ x: e.x + e.width, y: e.y + e.height }),
            { x: c, y: l } = t.transformPoint({ x: e.x, y: e.y + e.height }),
            u = Math.min(n, i, o, c),
            d = Math.max(n, i, o, c) - u,
            f = Math.min(r, a, s, l);
          return { x: u, y: f, width: d, height: Math.max(r, a, s, l) - f };
        },
        containsPoint: (e, t) =>
          !(
            t.x < Z.minX(e) ||
            t.x > Z.maxX(e) ||
            t.y < Z.minY(e) ||
            t.y > Z.maxY(e) ||
            Number.isNaN(e.x) ||
            Number.isNaN(e.y)
          ),
        containsRect: (e, t) => {
          for (let n of Z.points(t)) if (!Z.containsPoint(e, n)) return !1;
          return !0;
        },
        toCSS: (e) => ({
          display: `block`,
          transform: `translate(${e.x}px, ${e.y}px)`,
          width: `${e.width}px`,
          height: `${e.height}px`,
        }),
        inset: (e, t) => ({
          x: e.x + t,
          y: e.y + t,
          width: Math.max(0, e.width - 2 * t),
          height: Math.max(0, e.height - 2 * t),
        }),
        intersects: (e, t) =>
          !(t.x >= Z.maxX(e) || Z.maxX(t) <= e.x || t.y >= Z.maxY(e) || Z.maxY(t) <= e.y),
        overlapHorizontally: (e, t) => {
          let n = Z.maxX(e),
            r = Z.maxX(t);
          return n > t.x && r > e.x;
        },
        overlapVertically: (e, t) => {
          let n = Z.maxY(e),
            r = Z.maxY(t);
          return n > t.y && r > e.y;
        },
        doesNotIntersect: (e, t) => !t.some((t) => Z.intersects(t, e)),
        isEqual: (e, t) => Z.equals(e, t),
        cornerPoints: (e) => {
          let t = e.x,
            n = e.x + e.width,
            r = e.y,
            i = e.y + e.height;
          return [
            { x: t, y: r },
            { x: n, y: r },
            { x: n, y: i },
            { x: t, y: i },
          ];
        },
        midPoints: (e) => {
          let t = e.x,
            n = e.x + e.width / 2,
            r = e.x + e.width,
            i = e.y,
            a = e.y + e.height / 2,
            o = e.y + e.height;
          return [
            { x: n, y: i },
            { x: r, y: a },
            { x: n, y: o },
            { x: t, y: a },
          ];
        },
        pointDistance: (e, t) => {
          let n = 0,
            r = 0;
          return (
            t.x < e.x ? (n = e.x - t.x) : t.x > Z.maxX(e) && (n = t.x - Z.maxX(e)),
            t.y < e.y ? (r = e.y - t.y) : t.y > Z.maxY(e) && (r = t.y - Z.maxY(e)),
            ao.distance({ x: n, y: r }, { x: 0, y: 0 })
          );
        },
        delta: (e, t) => {
          let n = { x: Z.minX(e), y: Z.minY(e) },
            r = { x: Z.minX(t), y: Z.minY(t) };
          return { x: n.x - r.x, y: n.y - r.y };
        },
        withMinSize: (e, t) => {
          let { width: n, height: r } = t,
            i = e.width - n,
            a = e.height - r;
          return {
            width: Math.max(e.width, n),
            height: Math.max(e.height, r),
            x: e.width < n ? e.x + i / 2 : e.x,
            y: e.height < r ? e.y + a / 2 : e.y,
          };
        },
        anyPointsOutsideRect: (e, t) => {
          let n = Z.minX(e),
            r = Z.minY(e),
            i = Z.maxX(e),
            a = Z.maxY(e);
          for (let e of t) if (e.x < n || e.x > i || e.y < r || e.y > a) return !0;
          return !1;
        },
        edges: (e) => {
          let [t, n, r, i] = Z.cornerPoints(e);
          return [qS(t, n), qS(n, r), qS(r, i), qS(i, t)];
        },
        rebaseRectOnto: (e, t, n, r) => {
          let i = { ...e };
          switch (n) {
            case `bottom`:
            case `top`:
              switch (r) {
                case `start`:
                  i.x = t.x;
                  break;
                case `center`:
                  i.x = t.x + t.width / 2 - e.width / 2;
                  break;
                case `end`:
                  i.x = t.x + t.width - e.width;
                  break;
                default:
                  ut(r);
              }
              break;
            case `left`:
              i.x = t.x - e.width;
              break;
            case `right`:
              i.x = t.x + t.width;
              break;
            default:
              ut(n);
          }
          switch (n) {
            case `left`:
            case `right`:
              switch (r) {
                case `start`:
                  i.y = t.y;
                  break;
                case `center`:
                  i.y = t.y + t.height / 2 - e.height / 2;
                  break;
                case `end`:
                  i.y = t.y + t.height - e.height;
                  break;
                default:
                  ut(r);
              }
              break;
            case `top`:
              i.y = t.y - e.height;
              break;
            case `bottom`:
              i.y = t.y + t.height;
              break;
            default:
              ut(n);
          }
          return i;
        },
        constrain: (e, t) => {
          if (!t) return e;
          let n = Math.max(e.y, t.y);
          n = Math.min(n, t.y + t.height - e.height);
          let r = Math.max(e.x, t.x);
          return (
            (r = Math.min(r, t.x + t.width - e.width)),
            { x: r, y: n, width: e.width, height: e.height }
          );
        },
        closestEdge: (e, t) => {
          let n = Z.center(e),
            r = qS(t, n),
            i = Z.edges(e);
          for (let e = 0; e < i.length; e++) {
            let t = i[e];
            if (t && qS.intersection(r, t, !0)) {
              let n = JS[e];
              return (W(n, () => `Invalid edge name: ${JSON.stringify(JS)}`), { edge: t, name: n });
            }
          }
        },
        closestRect: (e, t) => {
          let n = 0,
            r = e[0];
          W(r, `Rect array is empty`);
          let i = Z.pointDistance(r, t);
          for (let a = 1; a < e.length; a += 1) {
            let o = e[a];
            W(o);
            let s = Z.pointDistance(o, t);
            if ((s < i && ((n = a), (r = o), (i = s)), i === 0)) break;
          }
          return { rect: r, index: n };
        },
      }),
      (JS = [`top`, `right`, `bottom`, `left`]),
      (YS = {
        quickfix: (e) => (
          (xs(e.widthType) || xs(e.heightType)) && (e.aspectRatio = null),
          q(e.aspectRatio) &&
            (e.left && e.right && (e.widthType = 0),
            e.top && e.bottom && (e.heightType = 0),
            e.left && e.right && e.top && e.bottom && (e.bottom = !1),
            e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
          e.left &&
            e.right &&
            ((e.fixedSize || xs(e.widthType) || q(e.maxWidth)) && (e.right = !1),
            (e.widthType = 0)),
          e.top &&
            e.bottom &&
            ((e.fixedSize || xs(e.heightType) || q(e.maxHeight)) && (e.bottom = !1),
            (e.heightType = 0)),
          e
        ),
      }),
      (XS = {
        fromProperties: (e) => {
          let {
              left: t,
              right: n,
              top: r,
              bottom: i,
              width: a,
              height: o,
              centerX: s,
              centerY: c,
              aspectRatio: l,
              autoSize: u,
            } = e,
            d = YS.quickfix({
              left: q(t) || eo(t),
              right: q(n) || eo(n),
              top: q(r) || eo(r),
              bottom: q(i) || eo(i),
              widthType: Ss(a),
              heightType: Ss(o),
              aspectRatio: l || null,
              fixedSize: u === !0,
            }),
            f = null,
            p = null,
            m = 0,
            h = 0;
          if (d.widthType !== 0 && typeof a == `string`) {
            let e = parseFloat(a);
            a.endsWith(`fr`)
              ? ((m = 3), (f = e))
              : a === `auto`
                ? (m = 2)
                : ((m = 1), (f = e / 100));
          } else a !== void 0 && typeof a != `string` && (f = eS.getNumber(a));
          if (d.heightType !== 0 && typeof o == `string`) {
            let e = parseFloat(o);
            o.endsWith(`fr`)
              ? ((h = 3), (p = e))
              : o === `auto`
                ? (h = 2)
                : ((h = 1), (p = parseFloat(o) / 100));
          } else o !== void 0 && typeof o != `string` && (p = eS.getNumber(o));
          let g = 0.5,
            _ = 0.5;
          return (
            s && (g = parseFloat(s) / 100),
            c && (_ = parseFloat(c) / 100),
            {
              left: d.left ? eS.getNumber(t) : null,
              right: d.right ? eS.getNumber(n) : null,
              top: d.top ? eS.getNumber(r) : null,
              bottom: d.bottom ? eS.getNumber(i) : null,
              widthType: m,
              heightType: h,
              width: f,
              height: p,
              aspectRatio: d.aspectRatio || null,
              centerAnchorX: g,
              centerAnchorY: _,
            }
          );
        },
        toSize: (e, t, n, r) => {
          let i = null,
            a = null,
            o = t?.sizing ? eS.getNumber(t?.sizing.width) : null,
            s = t?.sizing ? eS.getNumber(t?.sizing.height) : null,
            c = Os(e.left, e.right);
          if (o && q(c)) i = o - c;
          else if (n && xs(e.widthType)) i = n.width;
          else if (q(e.width))
            switch (e.widthType) {
              case 0:
                i = e.width;
                break;
              case 3:
                i = r ? (r.freeSpaceInParent.width / r.freeSpaceUnitDivisor.width) * e.width : null;
                break;
              case 1:
              case 4:
                o && (i = o * e.width);
                break;
              case 2:
              case 5:
                break;
              default:
                ut(e.widthType);
            }
          let l = Os(e.top, e.bottom);
          if (s && q(l)) a = s - l;
          else if (n && xs(e.heightType)) a = n.height;
          else if (q(e.height))
            switch (e.heightType) {
              case 0:
                a = e.height;
                break;
              case 3:
                a = r
                  ? (r.freeSpaceInParent.height / r.freeSpaceUnitDivisor.height) * e.height
                  : null;
                break;
              case 1:
              case 4:
                s && (a = s * e.height);
                break;
              case 2:
              case 5:
                break;
              default:
                ut(e.heightType);
            }
          return Ds(i, a, e, { height: s ?? 0, width: o ?? 0 }, t?.viewport);
        },
        toRect: (e, t = null, n = null, r = !1, i = null) => {
          let a = e.left || 0,
            o = e.top || 0,
            { width: s, height: c } = XS.toSize(e, t, n, i),
            l = t?.positioning ?? null,
            u = l ? eS.getNumber(l.width) : null,
            d = l ? eS.getNumber(l.height) : null;
          (e.left === null
            ? u && e.right !== null
              ? (a = u - e.right - s)
              : u && (a = e.centerAnchorX * u - s / 2)
            : (a = e.left),
            e.top === null
              ? d && e.bottom !== null
                ? (o = d - e.bottom - c)
                : d && (o = e.centerAnchorY * d - c / 2)
              : (o = e.top));
          let f = { x: a, y: o, width: s, height: c };
          return r ? Z.pixelAligned(f) : f;
        },
      }),
      (ZS = 200),
      (QS = 200),
      ($S = /* @__PURE__ */ j.createContext({ parentSize: 0 })),
      (eC = (e) => {
        let t = Is(),
          { parentSize: n, children: r } = e,
          i = j.useMemo(() => ({ parentSize: n }), [Rs(n), zs(n)]);
        return t === 1
          ? r
            ? /* @__PURE__ */ T(_, { children: r })
            : null
          : /* @__PURE__ */ T($S.Provider, { value: i, children: r });
      }),
      (tC = /* @__PURE__ */ j.createContext(void 0)),
      (nC = `style[data-framer-css-ssr-minified]`),
      (rC = /* #__PURE__ */ (() => {
        if (!Mr()) return /* @__PURE__ */ new Set();
        let e = document.querySelector(nC)?.getAttribute(`data-framer-components`);
        return e ? new Set(e.split(` `)) : /* @__PURE__ */ new Set();
      })()),
      (iC = `data-framer-css-ssr`),
      (aC = (e, t, n) => (
        Gs() &&
          n !== void 0 &&
          !Ze(t) &&
          (Array.isArray(t)
            ? t
            : t.split(`
`)
          ).filter(Boolean),
        j.forwardRef((r, i) => {
          let { sheet: a, cache: o } = j.useContext(tC) ?? {},
            c = n;
          if (!Mr()) {
            Ze(t) && (t = t(Ks(), r));
            let e = Array.isArray(t)
              ? t.join(`
`)
              : t;
            sC.add(e, c);
          }
          return (
            s(() => {
              (c && rC.has(c)) ||
                (Ze(t)
                  ? t(Ks(), r)
                  : Array.isArray(t)
                    ? t
                    : t.split(`
`)
                ).forEach((e) => e && ft(e, a, o));
            }, []),
            /* @__PURE__ */ T(e, { ...r, ref: i })
          );
        })
      )),
      (oC = class {
        styles = /* @__PURE__ */ new Set();
        componentIds = /* @__PURE__ */ new Set();
        add(e, t) {
          (this.styles.add(e), t && this.componentIds.add(t));
        }
        getStyles() {
          return this.styles;
        }
        getComponentIds() {
          return this.componentIds;
        }
        clear() {
          (this.styles.clear(), this.componentIds.clear());
        }
      }),
      (sC = /* @__PURE__ */ new oC()),
      (uC = /* @__PURE__ */ kr()),
      (dC = /* @__PURE__ */ j.createContext(!1)),
      (fC = class {
        sharedResizeObserver;
        callbacks = /* @__PURE__ */ new WeakMap();
        constructor() {
          this.sharedResizeObserver = new ResizeObserver(this.updateResizedElements.bind(this));
        }
        updateResizedElements(e) {
          for (let t of e) {
            let e = this.callbacks.get(t.target);
            e && e(t.contentRect);
          }
        }
        observeElementWithCallback(e, t) {
          (this.sharedResizeObserver.observe(e), this.callbacks.set(e, t));
        }
        unobserve(e) {
          (this.sharedResizeObserver.unobserve(e), this.callbacks.delete(e));
        }
      }),
      (pC = Mr() ? new fC() : void 0),
      (mC = `0.000001px`),
      (hC = ` translateZ(${mC})`),
      (gC = Pr() || Ar() || Fr()),
      (_C = /* @__PURE__ */ (() => {
        class e extends y {
          static defaultProps = {};
          static applyWillChange(e, t, n) {
            e.willChangeTransform && (n ? lc(t) : uc(t));
          }
          layerElement = null;
          setLayerElement = (e) => {
            this.layerElement = e;
          };
          shouldComponentUpdate(e, t) {
            return e._needsMeasure || this.state !== t || !On(this.props, e);
          }
          componentDidUpdate(e) {
            MS(this.props).clip &&
              MS(this.props).radius === 0 &&
              MS(e).radius !== 0 &&
              fc(this.layerElement, `overflow`, `hidden`, !1);
          }
        }
        return e;
      })()),
      (vC = (e) => {
        let t = 0,
          n,
          r;
        if (e.length === 0) return t;
        for (n = 0; n < e.length; n++) ((r = e.charCodeAt(n)), (t = (t << 5) - t + r), (t |= 0));
        return t;
      }),
      (yC = {
        hueRotate: (e, t) => X.toHslString(X.hueRotate(X(e), t)),
        setAlpha: (e, t) => X.toRgbString(X.alpha(X(e), t)),
        getAlpha: (e) => {
          let t = To(e);
          return t ? t.a : 1;
        },
        multiplyAlpha: (e, t) => X.toRgbString(X.multiplyAlpha(X(e), t)),
        toHexValue: (e) => X.toHex(X(e)).toUpperCase(),
        toHex: (e) => X.toHexString(X(e)).toUpperCase(),
        toRgb: (e) => X.toRgb(X(e)),
        toRgbString: (e) => X.toRgbString(X(e)),
        toHSV: (e) => X.toHsv(X(e)),
        toHSL: (e) => X.toHsl(X(e)),
        toHslString: (e) => X.toHslString(X(e)),
        toHsvString: (e) => X.toHsvString(X(e)),
        hsvToHSLString: (e) => X.toHslString(X(po(e.h, e.s, e.v, e.a))),
        hsvToHexValue: (e) => X.toHex(X(po(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToHex: (e) => X.toHexString(X(po(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToRgbString: (e) => X.toRgbString(X(po(e.h, e.s, e.v, e.a))),
        hsvToString: (e) => po(e.h, e.s, e.v),
        rgbaToString: (e) => X.toRgbString(X(e)),
        rgbToHexValue: (e) => X.toHex(X(e)),
        rgbToHexString: (e) => X.toHexString(X(e)),
        hslToString: (e) => X.toHslString(X(e)),
        hslToRgbString: (e) => X.toRgbString(X(e)),
        toColorPickerSquare: (e) => X.toRgbString(X({ h: e, s: 1, l: 0.5, a: 1 })),
        isValid: (e) => X(e).isValid !== !1,
        equals: (e, t) =>
          X.isP3String(e) || X.isP3String(t)
            ? e === t
            : (typeof e == `string` && (e = X(e)),
              typeof t == `string` && (t = X(t)),
              X.equal(e, t)),
        toHexOrRgbaString: (e) => {
          let t = X(e);
          return t.a === 1 ? X.toHexString(t) : X.toRgbString(t);
        },
        toFormatString: (e) => (X.isP3String(e) ? e : X.toRgbString(X(e))),
      }),
      (bC = /var\(.+\)/u),
      (xC = /* @__PURE__ */ new Map()),
      (SC = [`stops`]),
      (CC = [`start`, `end`]),
      (wC = [`angle`, `alpha`]),
      (TC = {
        isLinearGradient: (e) => U(e) && wC.every((t) => t in e) && (bc(e) || yc(e)),
        hash: (e) => e.angle ^ vc(e, e.alpha),
        toCSS: (e, t, n) => {
          let r = _c(e, e.alpha),
            i = t === void 0 ? e.angle : t;
          return `linear-gradient(${Math.round(i)}deg, ${r.map((e) => `${n?.(e.value) ?? e.value} ${e.position * 100}%`).join(`, `)})`;
        },
      }),
      (EC = [`widthFactor`, `heightFactor`, `centerAnchorX`, `centerAnchorY`, `alpha`]),
      (DC = {
        isRadialGradient: (e) => U(e) && EC.every((t) => t in e) && (bc(e) || yc(e)),
        hash: (e) =>
          e.centerAnchorX ^ e.centerAnchorY ^ e.widthFactor ^ e.heightFactor ^ vc(e, e.alpha),
        toCSS: (e, t) => {
          let { alpha: n, widthFactor: r, heightFactor: i, centerAnchorX: a, centerAnchorY: o } = e,
            s = _c(e, n),
            c = s.map((e, n) => {
              let r = s[n + 1],
                i = e.position === 1 && r?.position === 1 ? e.position - 1e-4 : e.position;
              return `${t?.(e.value) ?? e.value} ${i * 100}%`;
            });
          return `radial-gradient(${r * 100}% ${i * 100}% at ${a * 100}% ${o * 100}%, ${c.join(`, `)})`;
        },
      }),
      (OC = [
        `onClick`,
        `onDoubleClick`,
        `onMouse`,
        `onMouseDown`,
        `onMouseUp`,
        `onTapDown`,
        `onTap`,
        `onTapUp`,
        `onPointer`,
        `onPointerDown`,
        `onPointerUp`,
        `onTouch`,
        `onTouchDown`,
        `onTouchUp`,
      ]),
      (kC = /* @__PURE__ */ new Set([...OC, ...OC.map((e) => `${e}Capture`)])),
      (AC = `overflow`),
      (jC = { x: 0, y: 0, width: 200, height: 200 }),
      (MC = /* @__PURE__ */ new Set([
        `width`,
        `height`,
        `opacity`,
        `overflow`,
        `radius`,
        `background`,
        `color`,
        `x`,
        `y`,
        `z`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `rotateZ`,
        `scale`,
        `scaleX`,
        `scaleY`,
        `skew`,
        `skewX`,
        `skewY`,
        `originX`,
        `originY`,
        `originZ`,
      ])),
      (NC = /* @__PURE__ */ E(function (e, n) {
        let { name: r, center: i, border: a, _border: o, __portal: s } = e,
          { props: c, children: l } = $s(e),
          u = jc(c),
          d = tc(e),
          f = Ec(e),
          p = g(null),
          m = n ?? p,
          h = {
            "data-framer-component-type": e.componentType ?? `Frame`,
            "data-framer-cursor": f,
            "data-framer-highlight": f === `pointer` || void 0,
            "data-layoutid": d,
            "data-framer-offset-parent-id": MS(e)[`data-framer-offset-parent-id`],
          };
        !Mc(e) && r && (MS(h)[`data-framer-name`] = r);
        let [v, y] = Ac(c),
          b = kc(c),
          x = Hs(b),
          S = i && !(y && !x && As(b)) ? i : void 0;
        (S ? (u.transformTemplate ||= ec(i)) : (u.transformTemplate ||= void 0),
          Object.assign(h, Zs(S, c.style)),
          sc(e, m));
        let w = gs(e),
          E = Nc(c, b, y, t(dC)),
          D = Bs(
            /* @__PURE__ */ C(_, {
              children: [
                w
                  ? /* @__PURE__ */ T(fs, {
                      alt: e.alt ?? ``,
                      image: w,
                      containerSize: y ?? void 0,
                      nodeId: e.id && Qs(e.id),
                      layoutId: d,
                    })
                  : null,
                l,
                /* @__PURE__ */ T(ms, { ...o, border: a, layoutId: d }),
              ],
            }),
            E
          ),
          O = Ws(e.as),
          k = Us(w);
        return (
          e.fitImageDimension &&
            k &&
            ((v[e.fitImageDimension] = `auto`), (v.aspectRatio = k.width / k.height)),
          /* @__PURE__ */ C(O, { ...h, ...u, layoutId: d, style: v, ref: m, children: [D, s] })
        );
      })),
      (PC = /* @__PURE__ */ Ys(
        /* @__PURE__ */ E(function (e, t) {
          let { visible: n = !0 } = e;
          return n ? /* @__PURE__ */ T(NC, { ...e, ref: t }) : null;
        })
      )),
      (FC = `__LAYOUT_TREE_ROOT`),
      (IC = /* @__PURE__ */ j.createContext({
        schedulePromoteTree: () => {},
        scheduleProjectionDidUpdate: () => {},
        initLead: () => {},
      })),
      (LC = class extends y {
        shouldAnimate = !1;
        transition;
        lead;
        follow;
        scheduledPromotion = !1;
        scheduledDidUpdate = !1;
        getSnapshotBeforeUpdate() {
          if (!this.scheduledPromotion || !this.lead || !this.follow) return null;
          let e = this.lead?.layoutMaybeMutated && !this.shouldAnimate;
          return (
            this.lead.projectionNodes.forEach((t) => {
              t?.promote({
                needsReset: e,
                transition: this.shouldAnimate ? this.transition : void 0,
                preserveFollowOpacity:
                  t.options.layoutId === `__LAYOUT_TREE_ROOT` && !this.follow?.isExiting,
              });
            }),
            this.shouldAnimate
              ? (this.follow.layoutMaybeMutated = !0)
              : this.scheduleProjectionDidUpdate(),
            (this.lead.layoutMaybeMutated = !1),
            (this.transition = void 0),
            (this.scheduledPromotion = !1),
            null
          );
        }
        componentDidUpdate() {
          if (!this.lead) return null;
          this.scheduledDidUpdate &&= (this.lead.rootProjectionNode?.root?.didUpdate(), !1);
        }
        scheduleProjectionDidUpdate = () => {
          this.scheduledDidUpdate = !0;
        };
        schedulePromoteTree = (e, t, n) => {
          ((this.follow = this.lead),
            (this.shouldAnimate = n),
            (this.lead = e),
            (this.transition = t),
            (this.scheduledPromotion = !0));
        };
        initLead = (e, t) => {
          ((this.follow = this.lead),
            (this.lead = e),
            this.follow && t && (this.follow.layoutMaybeMutated = !0));
        };
        sharedLayoutContext = {
          schedulePromoteTree: this.schedulePromoteTree,
          scheduleProjectionDidUpdate: this.scheduleProjectionDidUpdate,
          initLead: this.initLead,
        };
        render() {
          return /* @__PURE__ */ T(IC.Provider, {
            value: this.sharedLayoutContext,
            children: this.props.children,
          });
        }
      }),
      (RC = { width: `100%`, height: `100%`, backgroundColor: `none` }),
      (zC = class {
        sharedIntersectionObserver;
        callbacks = /* @__PURE__ */ new WeakMap();
        constructor(e) {
          this.sharedIntersectionObserver = new IntersectionObserver(
            this.intersectionObserverCallback.bind(this),
            e
          );
        }
        intersectionObserverCallback(e, t) {
          for (let n of e) {
            let e = this.callbacks.get(n.target);
            e && e(n, t);
          }
        }
        observeElementWithCallback(e, t) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.observe(e), this.callbacks.set(e, t));
        }
        unobserve(e) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.unobserve(e), this.callbacks.delete(e));
        }
        get root() {
          return this.sharedIntersectionObserver?.root;
        }
      }),
      (BC = /* @__PURE__ */ O(/* @__PURE__ */ new Map())),
      (VC = typeof IntersectionObserver > `u` ? wt : Vc),
      (HC = /* @__PURE__ */ Array(100)
        .fill(void 0)
        .map((e, t) => t * 0.01)),
      (UC = /* @__PURE__ */ j.createContext(null)),
      (WC = class extends y {
        layoutMaybeMutated = !1;
        projectionNodes = /* @__PURE__ */ new Map();
        rootProjectionNode;
        isExiting;
        componentDidMount() {
          this.props.isLead &&
            this.props.sharedLayoutContext.initLead(this, !!this.props.animatesLayout);
        }
        shouldComponentUpdate(e) {
          let {
            isLead: t,
            isExiting: n,
            isOverlayed: r,
            animatesLayout: i,
            transition: a,
            sharedLayoutContext: o,
          } = e;
          if (((this.isExiting = n), t === void 0)) return !0;
          let s = !this.props.isLead && t,
            c = this.props.isExiting && !n,
            l = s || c,
            u = !!this.props.isLead && !t,
            d = this.props.isOverlayed !== r;
          return (
            (l || u) && this.projectionNodes.forEach((e) => e?.willUpdate()),
            l ? o.schedulePromoteTree(this, a, !!i) : d && o.scheduleProjectionDidUpdate(),
            !!l && !!i
          );
        }
        shouldPreserveFollowOpacity = (e) =>
          e.options.layoutId === `__LAYOUT_TREE_ROOT` && !this.props.isExiting;
        switchLayoutGroupContext = {
          register: (e) => this.addChild(e),
          deregister: (e) => this.removeChild(e),
          transition:
            this.props.isLead !== void 0 && this.props.animatesLayout
              ? this.props.transition
              : void 0,
          shouldPreserveFollowOpacity: this.shouldPreserveFollowOpacity,
        };
        addChild(e) {
          let t = e.options.layoutId;
          t && (this.projectionNodes.set(t, e), this.setRootChild(e));
        }
        setRootChild(e) {
          if (!this.rootProjectionNode) return (this.rootProjectionNode = e);
          this.rootProjectionNode =
            this.rootProjectionNode.depth < e.depth ? this.rootProjectionNode : e;
        }
        removeChild(e) {
          let t = e.options.layoutId;
          t && this.projectionNodes.delete(t);
        }
        render() {
          return /* @__PURE__ */ T(We.Provider, {
            value: this.switchLayoutGroupContext,
            children: this.props.children,
          });
        }
      }),
      (GC = (e) => {
        let t = j.useContext(IC);
        return /* @__PURE__ */ T(WC, { ...e, sharedLayoutContext: t });
      }),
      (KC = /* @__PURE__ */ j.createContext(!0)),
      (qC = /* @__PURE__ */ O({ register: () => {}, deregister: () => {} })),
      (JC = ({ isCurrent: e, isOverlayed: t, children: n }) => {
        let r = qc(),
          i = l(
            (e) => {
              r.has(e)
                ? console.warn(`NavigationTargetWrapper: already registered`)
                : r.set(e, void 0);
            },
            [r]
          ),
          a = l(
            (e) => {
              (r.get(e)?.(), r.delete(e));
            },
            [r]
          ),
          o = g({ register: i, deregister: a }).current;
        return (
          M(
            () => (
              r.forEach((n, i) => {
                let a = i(e, t);
                r.set(i, Ze(a) ? a : void 0);
              }),
              () => {
                r.forEach((e, t) => {
                  e && (e(), r.set(t, void 0));
                });
              }
            ),
            [e, t, r]
          ),
          /* @__PURE__ */ T(qC.Provider, { value: o, children: n })
        );
      }),
      (YC = /* @__PURE__ */ j.memo(function ({
        isLayeredContainer: e,
        isCurrent: n,
        isPrevious: r,
        isOverlayed: i = !1,
        visible: a,
        transitionProps: o,
        children: s,
        backdropColor: c,
        onTapBackdrop: l,
        backfaceVisible: u,
        exitBackfaceVisible: d,
        animation: f,
        exitAnimation: p,
        instant: m,
        initialProps: h,
        exitProps: _,
        position: v = { top: 0, right: 0, bottom: 0, left: 0 },
        withMagicMotion: y,
        index: b,
        areMagicMotionLayersPresent: x,
        id: S,
        isInitial: w,
      }) {
        let E = I(),
          D = t(Ne),
          { persistLayoutIdCache: O } = t(ES),
          k = g({
            wasCurrent: void 0,
            wasPrevious: !1,
            wasBeingRemoved: !1,
            wasReset: !0,
            origins: Xc({}, h, o),
          }),
          A = g(null),
          j = D !== null && !D.isPresent;
        (n && k.current.wasCurrent === void 0 && O(),
          M(() => {
            if (e || !E) return;
            if (j) {
              k.current = { ...k.current, wasBeingRemoved: j };
              return;
            }
            let { wasPrevious: t, wasCurrent: i } = k.current,
              a = (n && !i) || (!j && k.current.wasBeingRemoved && n),
              s = r && !t,
              c = Xc(k.current.origins, h, o),
              l = k.current.wasReset;
            (a || s
              ? (E.stop(), E.start({ zIndex: b, ...c, ...o }), (l = !1))
              : l === !1 && (E.stop(), E.set({ zIndex: b, ...XC, opacity: 0 }), (l = !0)),
              (k.current = {
                wasCurrent: !!n,
                wasPrevious: !!r,
                wasBeingRemoved: !1,
                wasReset: l,
                origins: c,
              }));
          }, [n, r, j]));
        let N = m ? { type: !1 } : `velocity` in f ? { ...f, velocity: 0 } : f,
          P = m ? { type: !1 } : p || f,
          F = { ...v };
        ((F.left === void 0 || F.right === void 0) && (F.width = `auto`),
          (F.top === void 0 || F.bottom === void 0) && (F.height = `auto`));
        let ee = (Zc(o) || Zc(h)) && (e || n || r) ? 1200 : void 0,
          L = { ...XC, ...k.current.origins },
          te = e
            ? {
                initial: { ...L, ...h },
                animate: { ...L, ...o, transition: N },
                exit: { ...L, ..._, transition: f },
              }
            : { animate: E, exit: { ...L, ..._, transition: P } },
          ne = !(j || x === !1),
          re = !!n && ne,
          ie = n && w;
        return /* @__PURE__ */ C(PC, {
          "data-framer-component-type": `NavigationContainerWrapper`,
          width: `100%`,
          height: `100%`,
          style: {
            position: `absolute`,
            transformStyle: `flat`,
            backgroundColor: `transparent`,
            overflow: `hidden`,
            zIndex: e || j || (n && y) ? b : void 0,
            pointerEvents: void 0,
            visibility: a ? `visible` : `hidden`,
            perspective: ee,
          },
          children: [
            e &&
              /* @__PURE__ */ T(PC, {
                width: `100%`,
                height: `100%`,
                "data-framer-component-type": `NavigationContainerBackdrop`,
                transition: f,
                initial: { opacity: m && a ? 1 : 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                backgroundColor: c || `transparent`,
                onTap: j ? void 0 : l,
              }),
            /* @__PURE__ */ T(PC, {
              ...F,
              ...te,
              transition: {
                default: N,
                originX: { type: !1 },
                originY: { type: !1 },
                originZ: { type: !1 },
              },
              backgroundColor: `transparent`,
              backfaceVisible: j ? d : u,
              "data-framer-component-type": `NavigationContainer`,
              "data-framer-is-current-navigation-target": !!n,
              style: { pointerEvents: void 0, opacity: ie || e || (n && y) ? 1 : 0 },
              "data-is-present": ne ? void 0 : !1,
              ref: A,
              children: /* @__PURE__ */ T(UC.Provider, {
                value: A,
                children: /* @__PURE__ */ T(KC.Provider, {
                  value: re,
                  children: /* @__PURE__ */ T(JC, {
                    isCurrent: re,
                    isOverlayed: i,
                    children: /* @__PURE__ */ T(GC, {
                      isLead: n,
                      animatesLayout: !!y,
                      transition: N,
                      isExiting: !ne,
                      isOverlayed: i,
                      id: S,
                      children: s,
                    }),
                  }),
                }),
              }),
            }),
          ],
        });
      }, Yc)),
      (XC = {
        x: 0,
        y: 0,
        z: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: 0.5,
        originY: 0.5,
        originZ: 0,
        opacity: 1,
      }),
      (ZC = class {
        warning = () => {
          Qa(`The Navigator API is only available inside of Framer: https://www.framer.com/`);
        };
        goBack = () => this.warning();
        instant = () => this.warning();
        fade = () => this.warning();
        push = () => this.warning();
        modal = () => this.warning();
        overlay = () => this.warning();
        flip = () => this.warning();
        customTransition = () => this.warning();
        magicMotion = () => this.warning();
      }),
      (QC = /* @__PURE__ */ O(/* @__PURE__ */ new ZC())),
      ($C = {
        Fade: { exit: { opacity: 0 }, enter: { opacity: 0 } },
        PushLeft: { exit: { x: `-30%` }, enter: { x: `100%` } },
        PushRight: { exit: { x: `30%` }, enter: { x: `-100%` } },
        PushUp: { exit: { y: `-30%` }, enter: { y: `100%` } },
        PushDown: { exit: { y: `30%` }, enter: { y: `-100%` } },
        Instant: { animation: { type: !1 }, enter: { opacity: 0 } },
        Modal: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { center: !0 },
          enter: { opacity: 0, scale: 1.2 },
        },
        OverlayLeft: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { right: 0, top: 0, bottom: 0 },
          enter: { x: `100%` },
        },
        OverlayRight: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { left: 0, top: 0, bottom: 0 },
          enter: { x: `-100%` },
        },
        OverlayUp: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { bottom: 0, left: 0, right: 0 },
          enter: { y: `100%` },
        },
        OverlayDown: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { top: 0, left: 0, right: 0 },
          enter: { y: `-100%` },
        },
        FlipLeft: { backfaceVisible: !1, exit: { rotateY: -180 }, enter: { rotateY: 180 } },
        FlipRight: { backfaceVisible: !1, exit: { rotateY: 180 }, enter: { rotateY: -180 } },
        FlipUp: { backfaceVisible: !1, exit: { rotateX: 180 }, enter: { rotateX: -180 } },
        FlipDown: { backfaceVisible: !1, exit: { rotateX: -180 }, enter: { rotateX: 180 } },
        MagicMotion: { withMagicMotion: !0 },
      }),
      (ew = () => ({
        current: -1,
        previous: -1,
        currentOverlay: -1,
        previousOverlay: -1,
        visualIndex: 0,
        overlayItemId: 0,
        historyItemId: 0,
        history: [],
        overlayStack: [],
        containers: {},
        containerIndex: {},
        containerVisualIndex: {},
        containerIsRemoved: {},
        transitionForContainer: {},
        previousTransition: null,
      })),
      (tw = /* @__PURE__ */ tb(XC)),
      (nw = /* @__PURE__ */ j.createContext(void 0)),
      (rw = /* @__PURE__ */ j.createContext(void 0)),
      (iw = /* @__PURE__ */ (() => {
        class e extends y {
          #e = null;
          state = ew();
          static defaultProps = { enabled: !0 };
          static contextType = nw;
          constructor(e) {
            super(e);
            let t = this.props.children;
            if (!t || !ys(t) || !vs(t)) return;
            let n = { ...$C.Instant },
              r = {
                type: `add`,
                key: t.key?.toString() || `stack-${this.state.historyItemId + 1}`,
                transition: n,
                component: t,
              },
              i = tl(this.state, r);
            i && (this.state = i);
          }
          componentDidMount() {
            let e = this.state.history[this.state.current];
            e && this.context?.(e.key);
          }
          UNSAFE_componentWillReceiveProps(e) {
            let t = e.children;
            if (!ys(t) || !vs(t)) return;
            let n = t.key?.toString();
            n &&
              (this.state.history.length === 0
                ? this.#i(t, $C.Instant)
                : this.#r({ type: `update`, key: n, component: t }));
          }
          componentWillUnmount() {
            this.props.resetProjection?.();
          }
          #t(e) {
            let { current: t, previous: n, currentOverlay: r, previousOverlay: i } = this.state;
            return e.overCurrentContext
              ? { current: r, previous: i, history: this.state.overlayStack }
              : { current: t, previous: n, history: this.state.history };
          }
          #n() {
            return globalThis.event ? this.#e === globalThis.event.timeStamp : !1;
          }
          #r = (e) => {
            if (!this.props.enabled && this.state.history.length > 0) return;
            let t = tl(this.state, e);
            if (!t) return;
            let { skipLayoutAnimation: n } = this.props,
              r = t.history[t.current],
              i =
                (e.type === `add` && e.transition.withMagicMotion) ||
                (e.type === `forward` && r?.transition.withMagicMotion) ||
                (e.type === `remove` && !!t.previousTransition),
              a = () => {
                (this.setState(t), r?.key && this.context?.(r.key));
              };
            n && !i ? n(a) : a();
          };
          #i(e, t, n) {
            if (
              this.#n() ||
              ((this.#e = globalThis.event?.timeStamp || null), !e || !ys(e) || !vs(e))
            )
              return;
            let r = { ...t, ...n };
            if (r.overCurrentContext)
              return this.#r({ type: `addOverlay`, transition: r, component: e });
            let i = e.key?.toString() || `stack-${this.state.historyItemId + 1}`;
            this.#r({ type: `add`, key: i, transition: r, component: e });
          }
          goBack = () => {
            if (!this.#n())
              return (
                (this.#e = globalThis.event?.timeStamp || null),
                this.state.currentOverlay === -1
                  ? this.#r({ type: `remove` })
                  : this.#r({ type: `removeOverlay` })
              );
          };
          instant(e) {
            this.#i(e, $C.Instant, void 0);
          }
          fade(e, t) {
            this.#i(e, $C.Fade, t);
          }
          push(e, t) {
            this.#i(e, Qc(t), t);
          }
          modal(e, t) {
            this.#i(e, $C.Modal, t);
          }
          overlay(e, t) {
            this.#i(e, $c(t), t);
          }
          flip(e, t) {
            this.#i(e, el(t), t);
          }
          magicMotion(e, t) {
            this.#i(e, $C.MagicMotion, t);
          }
          customTransition(e, t) {
            this.#i(e, t);
          }
          render() {
            let e = this.#t({ overCurrentContext: !1 }),
              t = this.#t({ overCurrentContext: !0 }),
              n = gl(t),
              r = t.current > -1,
              i = this.state.history.length === 1,
              a = [];
            for (let [t, n] of Object.entries(this.state.containers)) {
              let o = this.state.containerIndex[t];
              W(o !== void 0, `Container's index must be registered`);
              let s = this.state.containerVisualIndex[t];
              W(s !== void 0, `Container's visual index must be registered`);
              let c = this.state.containerIsRemoved[t],
                l = this.state.history[o],
                u = this.state.transitionForContainer[t],
                d = o === this.state.current,
                f = o === this.state.previous,
                p = !d && c,
                m = l?.transition?.withMagicMotion || (d && !!this.state.previousTransition);
              a.push(
                /* @__PURE__ */ T(
                  YC,
                  {
                    id: t,
                    index: s,
                    isInitial: i,
                    isCurrent: d,
                    isPrevious: f,
                    isOverlayed: r,
                    visible: d || f,
                    position: l?.transition?.position,
                    instant: El(o, e),
                    transitionProps: u,
                    animation: Tl(o, e),
                    backfaceVisible: Cl(o, e),
                    exitAnimation: l?.transition?.animation,
                    exitBackfaceVisible: l?.transition?.backfaceVisible,
                    exitProps: l?.transition?.enter,
                    withMagicMotion: m,
                    areMagicMotionLayersPresent: !p && void 0,
                    children: /* @__PURE__ */ T(Pc, {
                      children: Ol({ component: n, transition: l?.transition }),
                    }),
                  },
                  t
                )
              );
            }
            let o = this.state.overlayStack.map((e, n) =>
              /* @__PURE__ */ T(
                YC,
                {
                  isLayeredContainer: !0,
                  isCurrent: n === this.state.currentOverlay,
                  position: e.transition.position,
                  initialProps: Sl(n, t),
                  transitionProps: wl(n, t),
                  instant: El(n, t, !0),
                  animation: Tl(n, t),
                  exitProps: e.transition.enter,
                  visible: Dl(n, t),
                  backdropColor: bl(e.transition),
                  backfaceVisible: xl(n, t),
                  onTapBackdrop: kl(e.transition, this.goBack),
                  index: this.state.current + 1 + n,
                  children: Ol({ component: e.component, transition: e.transition }),
                },
                e.key
              )
            );
            return /* @__PURE__ */ T(PC, {
              "data-framer-component-type": `NavigationRoot`,
              top: 0,
              left: 0,
              width: `100%`,
              height: `100%`,
              position: `relative`,
              style: {
                overflow: `hidden`,
                backgroundColor: `unset`,
                pointerEvents: void 0,
                ...this.props.style,
              },
              children: /* @__PURE__ */ T(QC.Provider, {
                value: this,
                children: /* @__PURE__ */ C(rw.Provider, {
                  value: i,
                  children: [
                    /* @__PURE__ */ T(YC, {
                      isLayeredContainer: !0,
                      position: void 0,
                      initialProps: {},
                      instant: !1,
                      transitionProps: _l(n),
                      animation: vl(n),
                      backfaceVisible: yl(n),
                      visible: !0,
                      backdropColor: void 0,
                      onTapBackdrop: void 0,
                      index: 0,
                      children: /* @__PURE__ */ T(Wo, {
                        children: /* @__PURE__ */ T(LC, {
                          children: /* @__PURE__ */ T(Fe, {
                            presenceAffectsLayout: !1,
                            children: a,
                          }),
                        }),
                      }),
                    }),
                    /* @__PURE__ */ T(Fe, { children: o }),
                  ],
                }),
              }),
            });
          }
        }
        return e;
      })()),
      (aw = { stiffness: 500, damping: 50, restDelta: 1, type: `spring` }),
      (ow = /* @__PURE__ */ Ys(/* @__PURE__ */ j.forwardRef(Al))),
      (sw = /* @__PURE__ */ (function (e) {
        return (
          (e.Boolean = `boolean`),
          (e.Number = `number`),
          (e.MotionValue = `motionvalue`),
          (e.Dimension = `dimension`),
          (e.String = `string`),
          (e.RichText = `richtext`),
          (e.FusedNumber = `fusednumber`),
          (e.Enum = `enum`),
          (e.SegmentedEnum = `segmentedenum`),
          (e.Color = `color`),
          (e.Image = `image`),
          (e.ResponsiveImage = `responsiveimage`),
          (e.File = `file`),
          (e.ComponentInstance = `componentinstance`),
          (e.Slot = `slot`),
          (e.Array = `array`),
          (e.EventHandler = `eventhandler`),
          (e.ChangeHandler = `changehandler`),
          (e.Transition = `transition`),
          (e.BoxShadow = `boxshadow`),
          (e.Link = `link`),
          (e.Date = `date`),
          (e.Object = `object`),
          (e.Font = `font`),
          (e.PageScope = `pagescope`),
          (e.ScrollSectionRef = `scrollsectionref`),
          (e.CustomCursor = `customcursor`),
          (e.Border = `border`),
          (e.Cursor = `cursor`),
          (e.Padding = `padding`),
          (e.BorderRadius = `borderradius`),
          (e.Gap = `gap`),
          (e.CollectionReference = `collectionreference`),
          (e.MultiCollectionReference = `multicollectionreference`),
          (e.TrackingId = `trackingid`),
          (e.VectorSetItem = `vectorsetitem`),
          (e.LinkRelValues = `linkrelvalues`),
          (e.Location = `location`),
          e
        );
      })({})),
      (cw = `optional`),
      (lw = `outputControls`),
      (uw = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (dw = /* @__PURE__ */ Symbol(`private`)),
      (fw = /* @__PURE__ */ (() => {
        function e(e = {}, t = !1, n = !0) {
          let r = {
              [dw]: {
                makeAnimatables: t,
                observeAnimatables: n,
                observers: new $x(),
                reset() {
                  for (let t in i)
                    if (uw(i, t)) {
                      let n = uw(e, t) ? MS(e)[t] : void 0;
                      n === void 0 ? delete i[t] : (i[t] = n);
                    }
                },
                transactions: /* @__PURE__ */ new Set(),
              },
            },
            i = new Proxy(r, mw);
          return (Object.assign(i, e), i);
        }
        return (
          (e.resetObject = (e) => e[dw].reset()),
          (e.addObserver = (e, t) => e[dw].observers.add(t)),
          e
        );
      })()),
      (pw = class {
        set = (e, t, n, r) => {
          if (t === dw) return !1;
          let i = e[dw],
            a,
            o;
          if (
            (eo(n) ? ((a = n), (o = a.get())) : (o = n),
            i.makeAnimatables &&
              typeof n != `function` &&
              typeof n != `object` &&
              !a &&
              (a = eS(n)),
            i.observeAnimatables && a)
          ) {
            let e = i.transactions;
            a.onUpdate({
              update: (t, n) => {
                (n && e.add(n), i.observers.notify({ value: r }, n));
              },
              finish: (t) => {
                e.delete(t) && i.observers.finishTransaction(t);
              },
            });
          }
          let s = !1,
            c = !0,
            l = MS(e)[t];
          if (l !== void 0) {
            eo(l) ? ((c = l.get() !== o), l.set(o)) : ((c = l !== o), (MS(e)[t] = o));
            let n = typeof o == `object` && !!o;
            ((Array.isArray(o) || n) && (c = !0), (s = !0));
          } else (a && (n = a), (s = Reflect.set(e, t, n)));
          return (c && i.observers.notify({ value: r }), s);
        };
        get = (e, t, n) => {
          if (t === dw) return MS(e)[t];
          let r = Reflect.get(e, t, n);
          return typeof r == `function` ? r.bind(n) : r;
        };
        deleteProperty(e, t) {
          let n = Reflect.deleteProperty(e, t);
          return (e[dw].observers.notify({ value: e }), n);
        }
        ownKeys(e) {
          let t = Reflect.ownKeys(e),
            n = t.indexOf(dw);
          return (n !== -1 && t.splice(n, 1), t);
        }
        getOwnPropertyDescriptor(e, t) {
          if (t !== dw) return Reflect.getOwnPropertyDescriptor(e, t);
        }
      }),
      (mw = /* @__PURE__ */ new pw()),
      (hw = `opacity`),
      (gw = /* @__PURE__ */ (() => {
        function e(t = {}) {
          let n = fw(t, !1, !1);
          return (e.addData(n), n);
        }
        return (
          (e._stores = []),
          (e.addData = (t) => {
            e._stores.push(t);
          }),
          (e.reset = () => {
            e._stores.forEach((e) => fw.resetObject(e));
          }),
          (e.addObserver = (e, t) => fw.addObserver(e, t)),
          e
        );
      })()),
      (_w = { update: 0 }),
      (vw = /* @__PURE__ */ j.createContext({ update: NaN })),
      (yw = class extends y {
        observers = [];
        state = _w;
        taskAdded = !1;
        frameTask = () => {
          (this.setState({ update: this.state.update + 1 }), (this.taskAdded = !1));
        };
        observer = () => {
          this.taskAdded || ((this.taskAdded = !0), wS.addFrameTask(this.frameTask));
        };
        componentWillUnmount() {
          (this.observers.map((e) => e()), gw.reset());
        }
        render() {
          let { children: e } = this.props;
          return (
            this.observers.map((e) => e()),
            (this.observers = []),
            gw._stores.forEach((e) => {
              let t = gw.addObserver(e, this.observer);
              this.observers.push(t);
            }),
            /* @__PURE__ */ T(vw.Provider, { value: { ...this.state }, children: e })
          );
        }
      }),
      (bw = `__framer__`),
      (xw = 10),
      (Sw = /* @__PURE__ */ j.createContext(void 0)),
      (Cw = /* @__PURE__ */ j.createContext(void 0)),
      (ww = `ssr-variant`),
      (Tw = `ssr-variant-group-separator`),
      (Ew = /* @__PURE__ */ j.forwardRef(function (e, t) {
        let n = $l(t),
          r = j.useContext(Cw),
          i = j.useSyncExternalStore(kt, jt, At),
          a = qo(() => (i ? (Mr() ? 1 : 2) : 0)),
          o = j.useContext(Sw);
        return $i(() => {
          let { breakpoint: t, overrides: i, children: s, ...c } = e;
          if (!o)
            return (
              console.warn(`PropertyOverrides is missing GeneratedComponentContext`),
              n(s, c)
            );
          let { primaryVariantId: l, variantClassNames: u } = o,
            d = r?.primaryVariantId === l ? r?.variants : void 0;
          switch (a) {
            case 0:
              return n(s, su(t, c, i));
            case 1:
              return nu(i, s, c, u, l, d, n, t);
            case 2:
              return nu(i, s, c, u, l, d, Ql, void 0);
            default:
              ut(a);
          }
        }, [o, r, n, e]);
      })),
      (Dw = /* @__PURE__ */ aC(Ew, `.${ww} { display: contents }`, `PropertyOverrides`)),
      (Ow = `default`),
      (kw = /* @__PURE__ */ new Set([Ow])),
      (Aw = class {
        entries = /* @__PURE__ */ new Map();
        set(e, t, n, r) {
          switch (t) {
            case `transformTemplate`:
              (W(typeof n == `string`, `transformTemplate must be a string, received: ${n}`),
                this.setHash(e, r, { transformTemplate: n, legacy: !0 }));
              break;
            case `initial`:
            case `animate`:
              (W(typeof n == `object`, `${t} must be a valid object, received: ${n}`),
                this.setHash(e, r, { [t]: n, legacy: !0 }));
          }
        }
        setHash(e, t = Ow, n) {
          let r = this.entries.get(e) ?? {},
            i = r[t] ?? {};
          ((r[t] = n === null ? null : { ...i, ...n }), this.entries.set(e, r));
        }
        #e = {};
        variantHash(e, t) {
          if (e === t?.primaryVariantId) return Ow;
          let n = this.#e[e];
          if (n) return n;
          let r = t?.variantClassNames[e];
          return r ? (this.#e[e] = ru(r)) : Ow;
        }
        setAll(e, t = kw, n, r) {
          if (n === null) {
            for (let n of t) this.setHash(e, this.variantHash(n, r), null);
            return;
          }
          let i = Ze(n.transformTemplate) ? n.transformTemplate?.({}, Mw) : void 0,
            a = n.__framer__presenceInitial ?? n.initial,
            o = n.__framer__presenceAnimate ?? n.animate,
            s = {
              initial: U(a) ? a : void 0,
              animate: U(o) ? o : void 0,
              transformTemplate: V(i) ? i : void 0,
            };
          for (let n of t) this.setHash(e, this.variantHash(n, r), s);
        }
        clear() {
          this.entries.clear();
        }
        toObject() {
          return Object.fromEntries(this.entries);
        }
      }),
      (jw = /* @__PURE__ */ new Aw()),
      (Mw = `__Appear_Animation_Transform__`),
      (Nw = `data-framer-appear-id`),
      (Pw = `data-framer-appear-animation`),
      (Fw = (e) => {
        if (Xo())
          return {
            animate: lu(e.animate) ? e.animate : void 0,
            initial: lu(e.initial) ? e.initial : void 0,
            exit: void 0,
          };
      }),
      (Iw = [
        `opacity`,
        `x`,
        `y`,
        `scale`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `skewX`,
        `skewY`,
        `transformPerspective`,
      ]),
      (Lw = (e) => ({
        x: z(e?.x ?? 0),
        y: z(e?.y ?? 0),
        opacity: z(e?.opacity ?? 1),
        scale: z(e?.scale ?? 1),
        rotate: z(e?.rotate ?? 0),
        rotateX: z(e?.rotateX ?? 0),
        rotateY: z(e?.rotateY ?? 0),
        skewX: z(e?.skewX ?? 0),
        skewY: z(e?.skewY ?? 0),
        transformPerspective: z(e?.transformPerspective ?? 0),
      })),
      (Rw = {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        transformPerspective: 0,
      }),
      (zw = /* @__PURE__ */ Object.freeze({ willChange: `transform` })),
      (Bw = /* @__PURE__ */ Object.freeze({})),
      (Vw = /* @__PURE__ */ new Set([
        `loopEffectEnabled`,
        `loopTransition`,
        `loop`,
        `loopRepeatType`,
        `loopRepeatDelay`,
        `loopPauseOffscreen`,
      ])),
      (Hw = () => {
        let e = g();
        return (
          M(
            () => () => {
              clearTimeout(e.current);
            },
            []
          ),
          async (t) =>
            new Promise((n) => {
              e.current = setTimeout(() => {
                n(!0);
              }, t * 1e3);
            })
        );
      }),
      (Uw = /* @__PURE__ */ new Set([
        `speed`,
        `adjustPosition`,
        `offset`,
        `parallaxTransformEnabled`,
      ])),
      (Ww = /* @__PURE__ */ new Set([`presenceInitial`, `presenceAnimate`, `presenceExit`])),
      (Gw = 1),
      (Kw = 4),
      (qw = /* @__PURE__ */ new Set([
        `threshold`,
        `animateOnce`,
        `opacity`,
        `targetOpacity`,
        `x`,
        `y`,
        `scale`,
        `transition`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `perspective`,
        `enter`,
        `exit`,
        `animate`,
        `styleAppearEffectEnabled`,
        `targets`,
        `scrollDirection`,
      ])),
      (Jw = [`animate`, `animate`]),
      (Yw = { inputRange: [], outputRange: [] }),
      (Xw = /* @__PURE__ */ new Set([
        `transformViewportThreshold`,
        `styleTransformEffectEnabled`,
        `transformTargets`,
        `spring`,
        `transformTrigger`,
      ])),
      (Zw = (e, t) => {
        let n = e?.[0]?.target;
        return t ? { opacity: n?.opacity ?? 1 } : n;
      }),
      (Qw = () => ({
        opacity: [],
        x: [],
        y: [],
        scale: [],
        rotate: [],
        rotateX: [],
        rotateY: [],
        skewX: [],
        skewY: [],
        transformPerspective: [],
      })),
      ($w = [0, 1]),
      (eT = { parallax: Uw, styleAppear: qw, styleTransform: Xw, loop: Vw, presence: Ww }),
      (tT = /* @__PURE__ */ tb(eT)),
      (nT = (e) => e.reduce((e, t) => (e += t), 0)),
      (rT = (e) => e.reduce((e, t) => (e *= t), 1)),
      (iT = `current`),
      (aT = (e) =>
        j.forwardRef((t, n) => {
          let r = !ee(e);
          if (t.__withFX) {
            let i = { ...t };
            return (
              r || Reflect.deleteProperty(i, `__withFX`),
              /* @__PURE__ */ T(e, { ...i, animate: void 0, initial: void 0, exit: void 0, ref: n })
            );
          }
          let i = Fw(t);
          if (i) return /* @__PURE__ */ T(e, { ...Mu(t).forwardedProps, ...i, ref: n });
          let {
              parallax: a = {},
              styleAppear: o = {},
              styleTransform: s = {},
              presence: c = {},
              loop: l = {},
              forwardedProps: u,
              targetOpacityValue: d,
              withPerspective: f,
              inSmartComponent: p = !1,
            } = Mu(t),
            m = Rc(n),
            { values: h, style: g } = vu(
              c,
              m,
              p,
              tt(d) ? t.style : { ...t.style, opacity: void 0 },
              t[F]
            ),
            { values: _, style: v } = mu(a, m, t.style?.visibility),
            { values: y, style: b } = Au(s, m),
            { values: x, style: S } = Eu(o, m),
            { values: C, style: w } = fu(l, m),
            E = j.useMemo(() => {
              let e = new Ce(d ?? 1);
              return {
                scale: [x.scale, C.scale, h.scale, y.scale],
                opacity: [x.opacity, C.opacity, h.opacity, e, y.opacity],
                x: [x.x, C.x, h.x, y.x],
                y: [x.y, C.y, _.y, h.y, y.y],
                rotate: [x.rotate, C.rotate, h.rotate, y.rotate],
                rotateX: [x.rotateX, C.rotateX, h.rotateX, y.rotateX],
                rotateY: [x.rotateY, C.rotateY, h.rotateY, y.rotateY],
                skewX: [x.skewX, C.skewX, h.skewX, y.skewX],
                skewY: [x.skewY, C.skewY, h.skewY, y.skewY],
                transformPerspective: [y.transformPerspective, x.transformPerspective],
              };
            }, [d, y, _, x, C, h]);
          Pu(t.style, E);
          let D = Ie(E.scale, rT),
            O = Ie(E.opacity, rT),
            k = Ie(E.x, nT),
            A = Ie(E.y, nT),
            M = Ie(E.rotate, nT),
            N = Ie(E.rotateX, nT),
            P = Ie(E.rotateY, nT),
            I = Ie(E.skewX, nT),
            L = Ie(E.skewY, nT),
            te = Ie(E.transformPerspective, nT),
            { drag: ne, dragConstraints: re } = u;
          rc(ne && Nu(re) ? re : void 0);
          let ie = {
            opacity: O,
            scale: D,
            x: k,
            y: A,
            rotate: M,
            rotateX: N,
            rotateY: P,
            skewX: I,
            skewY: L,
          };
          tt(f) && (ie.transformPerspective = te);
          let ae = Fu(t.animate) ? t.animate : void 0,
            oe = Fu(t.initial) ? t.initial : void 0,
            se = Fu(t.exit) ? t.exit : void 0,
            ce = p && !c.presenceInitial ? { initial: oe, animate: ae, exit: se } : {},
            R = r ? { __withFX: !0 } : {};
          return /* @__PURE__ */ T(e, {
            ...u,
            ...ce,
            ...R,
            style: { ...t.style, ...v, ...b, ...w, ...ie, ...S, ...g },
            values: h,
            ref: m,
          });
        })),
      (oT = /* @__PURE__ */ O({})),
      (sT = /* @__PURE__ */ j.createContext({})),
      (cT = /* @__PURE__ */ j.forwardRef(function (
        { width: e, height: t, y: n, children: r, ...i },
        a
      ) {
        let o = j.useMemo(() => ({ width: e, height: t, y: n }), [e, t, n]),
          s = $l(a);
        return /* @__PURE__ */ T(sT.Provider, { value: o, children: s(r, i) });
      })),
      (lT = (e) =>
        j.forwardRef((t, n) => {
          let r = Ru(t);
          return /* @__PURE__ */ T(e, { ...r, ref: n });
        })),
      (uT = {}),
      (dT = () => uT),
      (fT = (e) => {
        uT = e;
      }),
      (pT = !1),
      (mT = class extends y {
        state = { error: void 0 };
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e, t) {
          if (!zu(e)) return;
          let n = t?.componentStack;
          console.error(
            `Caught an error in SynchronousSuspenseErrorBoundary:

`,
            e,
            `

Component stack:
`,
            n,
            `

This error indicates a state update wasn’t wrapped with \`startTransition\`. Some of the UI might flash as a result. ` +
              lt(
                `If you are the author of this website, update external components and check recently added custom code or code overrides.`
              )
          );
          let r = e instanceof Error && typeof e.stack == `string` ? e.stack : void 0;
          dr(`published_site_load_recoverable_error`, {
            message: String(e),
            stack: r,
            componentStack: r ? void 0 : n,
          });
        }
        render() {
          let e = this.state.error;
          if (e === void 0) return this.props.children;
          if (!zu(e)) throw e;
          return ((pT = !0), this.props.children);
        }
      }),
      (hT = N === void 0 ? null : new Promise(() => {})),
      (gT = /* @__PURE__ */ T(Bu, {})),
      (_T = /* @__PURE__ */ (() => {
        let e = O(!1);
        return ((e.displayName = `DisableSuspenseSuspenseThatPreservesDomContext`), e);
      })()),
      (vT = /* @__PURE__ */ T(Hu, {})),
      (yT = class extends y {
        state = { hasError: !1 };
        static getDerivedStateFromError() {
          return { hasError: !0 };
        }
        componentDidCatch(e, t) {
          (Wu(this.props.getErrorMessage(), t?.componentStack), Uu(e, t));
        }
        render() {
          let { children: e, fallback: t = vT } = this.props,
            { hasError: n } = this.state;
          return n ? t : e;
        }
      }),
      (bT = class extends y {
        state = { hasError: !1 };
        componentDidCatch(e, t) {
          let n = t?.componentStack;
          (console.error(
            `Error in component (see previous log). This component has been hidden. Please check any custom code or code overrides to fix.`,
            n
          ),
            this.setState({ hasError: !0 }),
            Uu(e, t));
        }
        render() {
          let { children: e } = this.props,
            { hasError: t } = this.state;
          return t ? null : e;
        }
      }),
      (xT = /* @__PURE__ */ j.createContext(void 0)),
      (ST = `code-crash:`),
      (CT = /* @__PURE__ */ lT(
        /* @__PURE__ */ j.forwardRef(function (
          {
            children: e,
            layoutId: t,
            as: n,
            scopeId: r,
            nodeId: i,
            isAuthoredByUser: a,
            isModuleExternal: o,
            inComponentSlot: s,
            rendersWithMotion: c,
            __withFX: l,
            ...u
          },
          d
        ) {
          let f = qo(() => (t ? `${t}-container` : void 0)),
            p = Ws(n),
            m = ad(
              j.Children.map(e, (e) =>
                j.isValidElement(e) ? j.cloneElement(e, { layoutId: t ?? e.props.layoutId }) : e
              ),
              r,
              i,
              a,
              o,
              s
            );
          return /* @__PURE__ */ T(p, {
            layoutId: f,
            ...u,
            ref: d,
            children: /* @__PURE__ */ T(dC.Provider, {
              value: !0,
              children: /* @__PURE__ */ T(Cx.Provider, {
                value: i ?? null,
                children: /* @__PURE__ */ T(Ko, {
                  enabled: !1,
                  children: /* @__PURE__ */ T(ke, {
                    id: t ?? ``,
                    inherit: u.layout ? !0 : `id`,
                    children: m,
                  }),
                }),
              }),
            }),
          });
        })
      )),
      (wT = /* @__PURE__ */ j.forwardRef(function (e, t) {
        let {
            as: n,
            children: r,
            scopeId: i,
            nodeId: a,
            isAuthoredByUser: o,
            rendersWithMotion: s,
            isModuleExternal: c,
            inComponentSlot: l,
            ...u
          } = e,
          d = ad(r, i, a, o, c, l),
          f = e.as ?? `div`;
        if (e.rendersWithMotion) {
          let n = Ws(f);
          return /* @__PURE__ */ T(Cx.Provider, {
            value: a ?? null,
            children: /* @__PURE__ */ T(n, { ...u, ref: t, style: e.style, children: d }),
          });
        }
        {
          let n = f,
            { layoutId: r, layoutDependency: i, ...o } = u;
          return /* @__PURE__ */ T(Cx.Provider, {
            value: a ?? null,
            children: /* @__PURE__ */ T(n, { ...o, ref: t, style: e.style, children: d }),
          });
        }
      })),
      (ET = /* @__PURE__ */ new Set()),
      (DT = /* @__PURE__ */ O({ onRegisterCursors: () => () => {}, registerCursors: () => {} })),
      (OT = `framer-cursor-none`),
      (kT = `framer-pointer-events-none`),
      (AT = /* @__PURE__ */ f(function ({ children: e }) {
        let t = qo(() => {
            let e = /* @__PURE__ */ new Set(),
              t = {},
              n = /* @__PURE__ */ new Map();
            return {
              onRegisterCursors: (n) => (n(t), e.add(n), () => e.delete(n)),
              registerCursors: (r, i) => {
                (n.set(i, Object.keys(r)), (t = dd(n, t, r)));
                for (let n of e) n(t);
                return () => {
                  n.delete(i);
                };
              },
            };
          }),
          n = ue();
        return /* @__PURE__ */ C(DT.Provider, {
          value: t,
          children: [e, !n && /* @__PURE__ */ T(PT, {})],
        });
      })),
      (jT = /* @__PURE__ */ aC(
        AT,
        [
          `.${OT}, .${OT} * { cursor: none !important; }`,
          `.${kT}, .${kT} * { pointer-events: none !important; }`,
        ],
        `framer-lib-cursors-host`
      )),
      (MT = { position: `fixed`, top: 0, left: 0, zIndex: 13, pointerEvents: `none` }),
      (NT = `data-framer-portal-id`),
      (PT = /* @__PURE__ */ f(function () {
        let { onRegisterCursors: e } = t(DT),
          n = ud(!1),
          r = ze(0),
          a = ze(0),
          o = ze(0),
          s = g(null),
          c = g({ cursors: {}, cursorHash: void 0 }),
          u = nc();
        (M(() => {
          if (!n) return;
          let e = 0,
            t = 0;
          function i() {
            (r.set(e), a.set(t), Pe(o, 1, { type: `tween`, duration: 0.2 }));
          }
          let l = () => {
            if (et(c.current.cursors)) return;
            let n = hd(e, t);
            n !== c.current.cursorHash && ((c.current.cursorHash = n), Ge.update(() => u()));
          };
          function d(n) {
            n.pointerType === `touch`
              ? De(l)
              : (Ge.read(l, !0), (e = n.clientX), (t = n.clientY), Ge.update(i));
          }
          function f(e) {
            if (e.target === s.current || !s.current) return;
            let t = new PointerEvent(e.type, {
              bubbles: !0,
              cancelable: e.cancelable,
              pointerType: e.pointerType,
              pointerId: e.pointerId,
              composed: e.composed,
              isPrimary: e.isPrimary,
              buttons: e.buttons,
              button: e.button,
            });
            Ge.update(() => {
              s.current?.dispatchEvent(t);
            });
          }
          return (
            Mt.addEventListener(`pointermove`, d),
            document.addEventListener(`pointerdown`, f),
            document.addEventListener(`pointerup`, f),
            Ge.read(l, !0),
            () => {
              (Mt.removeEventListener(`pointermove`, d),
                document.removeEventListener(`pointerdown`, f),
                document.removeEventListener(`pointerup`, f),
                De(l));
            }
          );
        }, [o, r, a, u, n]),
          M(() => {
            if (!n) return;
            function e() {
              Pe(o, 0, { type: `tween`, duration: 0.2 });
            }
            return (
              document.addEventListener(`mouseleave`, e),
              Mt.addEventListener(`blur`, e),
              () => {
                (document.removeEventListener(`mouseleave`, e), Mt.removeEventListener(`blur`, e));
              }
            );
          }, [o, n]),
          i(() => {
            function t(e) {
              ((c.current.cursors = e),
                (c.current.cursorHash = et(e) ? null : hd(r.get(), a.get())),
                u());
            }
            let n = e(t);
            return () => {
              (n(), document.body.classList.toggle(OT, !1));
            };
          }, [r, a, e, u]));
        let { cursors: d, cursorHash: f } = c.current,
          p = f ? d[f] : null,
          m = fd(p);
        i(() => {
          n && document.body.classList.toggle(OT, m);
        }, [m, n]);
        let h = p?.component,
          _ = p?.transition ?? { duration: 0 },
          v = _.duration === void 0 ? _ : { ..._, duration: _.duration * 1e3 },
          y = Ue(r, v),
          x = Ue(a, v),
          S = Ie(() => y.get() + (p?.offset?.x ?? 0)),
          C = Ie(() => x.get() + (p?.offset?.y ?? 0)),
          w = p?.alignment,
          E = p?.placement,
          D = l((e, t) => `translate(${md(E, w)}) ${t}`, [w, E]);
        return !n || !p || !h
          ? null
          : /* @__PURE__ */ T(b, {
              children: /* @__PURE__ */ T(h, {
                transformTemplate: D,
                style: { ...MT, x: S, y: C, opacity: o },
                globalTapTarget: !0,
                variant: p?.variant,
                ref: s,
                className: kT,
              }),
            });
      })),
      (FT = `webPageId`),
      (IT = class {
        collectedLinks = /* @__PURE__ */ new Map();
        nestingInfo = /* @__PURE__ */ new Map();
        clear() {
          (this.collectedLinks.clear(), this.nestingInfo.clear());
        }
        getLinks() {
          let e = /* @__PURE__ */ new Map();
          for (let [t, n] of this.nestingInfo) {
            let r = this.collectedLinks.get(t);
            W(r, `Outer link not found: ${t}`);
            let i = Array.from(n).map((e) => {
              let t = this.collectedLinks.get(e);
              return (W(t, `Inner link not found: ${e}`), t);
            });
            e.set(r, i);
          }
          return e;
        }
        collectNestedLink(e, t) {
          if ((Tt && !Fr()) || !e.nodeId || !t.nodeId) return;
          (this.collectedLinks.set(vd(e), e), this.collectedLinks.set(vd(t), t));
          let n = this.nestingInfo.get(vd(e)) ?? /* @__PURE__ */ new Set();
          (n.add(vd(t)), this.nestingInfo.set(vd(e), n));
        }
      }),
      (LT = /* @__PURE__ */ new IT()),
      (RT = `element`),
      (zT = `collection`),
      (BT = `collectionItemId`),
      (VT = `pathVariables`),
      (HT = `framer/page-link,`),
      (UT = /* @__PURE__ */ O(void 0)),
      (WT = /* @__PURE__ */ j.forwardRef(function ({ Component: e, ...t }, n) {
        return e ? /* @__PURE__ */ T(e, { ...t, ref: n }) : null;
      })),
      (GT = class extends y {
        state = { error: void 0 };
        message = `Made UI non-interactive due to an error.`;
        messageFatal = `Fatal error.`;
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e) {
          if (
            ((N.__framer_hadFatalError = !0),
            `cause` in e && (e = e.cause),
            console.error(lt(Et ? this.message : this.messageFatal, e)),
            Math.random() > 0.5)
          )
            return;
          let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
          dr(`published_site_load_error`, { message: String(e), stack: t });
        }
        render() {
          let e = this.state.error;
          if (!e) return this.props.children;
          let t = `cause` in e ? e.cause : e,
            n = /-->/gu,
            r = (Et && document.getElementById(`main`)?.innerHTML) || ``;
          return /* @__PURE__ */ T(`div`, {
            style: { display: `contents` },
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: {
              __html:
                `<!-- DOM replaced by GracefullyDegradingErrorBoundary due to "${t.message.replace(n, `--!>`)}". ${lt()}: --><!-- Stack: ${e.stack?.replace(n, `--!>`)} -->` +
                r,
            },
          });
        }
      }),
      (qT = /:([a-z]\w*)/gi),
      (JT = /* @__PURE__ */ O(void 0)),
      (YT = /* @__PURE__ */ new Map()),
      (XT = 500),
      (ZT = 500),
      ($T = !1),
      (eE = 500),
      (tE = 0.9),
      (nE = 1.7),
      (rE = 4),
      (iE = 1 / 0),
      (aE = /* @__PURE__ */ new WeakMap()),
      (oE = /* @__PURE__ */ new Set()),
      (sE = /* @__PURE__ */ new Map()),
      (cE = !ox || typeof IntersectionObserver > `u` ? null : /* @__PURE__ */ nf()),
      (lE = /* @__PURE__ */ Rd(
        /* @__PURE__ */ E(function (
          {
            children: e,
            href: t,
            openInNewTab: n,
            smoothScroll: r,
            clickTrackingId: i,
            relValues: a,
            preserveParams: o,
            nodeId: s,
            scopeId: c,
            motionChild: l,
            ...u
          },
          d
        ) {
          let f = jn(),
            p = Nn(),
            m = Hd(),
            { activeLocale: h, locales: g } = ei(),
            _ = uf(),
            v = ri(),
            y = yd(),
            b = df({ nodeId: s, clickTrackingId: i, router: f, href: t, activeLocale: h }),
            x = S(() => {
              if (!t) return {};
              let e = _d(t) ? t : Ed(t);
              if (!e) return {};
              if (V(e))
                return xf(
                  e,
                  f,
                  p,
                  {
                    openInNewTab: n,
                    trackLinkClick: b,
                    rel: a?.join(` `),
                    preserveParams: o,
                    smoothScroll: r,
                  },
                  v,
                  h?.id,
                  g,
                  m
                );
              let { unresolvedPathSlugs: i, unresolvedHashSlugs: s } = e,
                c = _(i, s, h);
              if (st(c)) throw c;
              let {
                  routeId: l,
                  href: u,
                  elementId: d,
                  pathVariables: y,
                  locale: x,
                } = zd(f, p, e, h, c, m),
                S = af(n, !0),
                C = S === `_blank`,
                w = bf(u, C, f.siteCanonicalURL),
                T = { pathVariables: y, locale: x },
                E = hf(u, w, (e) =>
                  pf(
                    f,
                    l,
                    () =>
                      v(l, T, {
                        priority: `user-blocking`,
                        yieldBeforePreload: !1,
                        shouldLoadRouteData: !C,
                      }),
                    d,
                    y,
                    r,
                    e
                  )
                );
              return {
                href: u,
                target: S,
                onClick: mf(u, b, E),
                "data-framer-page-link-current": (p && Ud(p, e, m)) || void 0,
                navigate: E,
                preload: () =>
                  v(l, T, {
                    priority: `background`,
                    yieldBeforePreload: !0,
                    shouldLoadRouteData: !C,
                  }),
                _routeId: l,
                _pathVariables: y,
                _locale: x,
                _navigationUrl: w,
              };
            }, [t, f, h, m, n, p, r, b, a, g, o, _, v]),
            C = Rc(w(e) && `ref` in e ? e.ref : void 0),
            {
              navigate: T,
              preload: E,
              _routeId: D,
              _pathVariables: O,
              _locale: k,
              _navigationUrl: A,
              ...j
            } = x;
          zc(
            C,
            (e) => {
              if (e !== null && D && E && A && !y)
                return cE?.(e, E, `${D}:${k?.id}:${JSON.stringify(O)}`, A);
            },
            [E, D, O, k, A, y]
          );
          let M = !!T;
          return Od(
            $l(d).cloneAsArray(e, (e) => Sf(e, { ...u, ...wf(j, l, M) }, C)),
            c,
            s,
            t,
            x,
            C
          );
        })
      )),
      (uE = `framer`),
      (dE = 3),
      (fE = 30),
      (pE = 1e4),
      (mE = `__framer`),
      (hE = `3`),
      (gE = [
        `website`,
        `company`,
        `message`,
        `subject`,
        `title`,
        `description`,
        `feedback`,
        `notes`,
        `details`,
        `remarks`,
        `comments`,
      ]),
      (_E = /* @__PURE__ */ Date.now()),
      (vE = {
        name: 0,
        value: 1,
        setAttribute: 2,
        valueProperty: 3,
        isInputEventTrusted: 4,
        inputChangeTimeSinceModuleLoad: 5,
        wasFilledBeforeHydration: 6,
      }),
      (yE = {
        fieldData: 0,
        fieldCount: 1,
        fieldFilledCount: 2,
        hpVersion: 3,
        siteId: 4,
        timeToSubmissionSinceModuleLoad: 5,
      }),
      (bE = () => ((Date.now() - _E) / 1e3).toFixed(2)),
      (xE = ({ inputStateRef: e }) => {
        let { inputRef: t, originalName: n } = e;
        return (
          j.useLayoutEffect(() => {
            let n = t.current;
            if (!n) return;
            let r = e.methodsUsed;
            n.value && (r.wasFilledBeforeHydration = !0);
          }, [t, e]),
          j.useEffect(() => {
            let n = t.current;
            if (!n) return;
            let r = e.methodsUsed,
              i = Element.prototype.setAttribute,
              a = i.bind(n);
            n.setAttribute = function (e, t) {
              (e === `value` && ((r.setAttribute = !0), (r.inputChangeTimeSinceModuleLoad = bE())),
                a(e, t));
            };
            let o = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, `value`);
            o &&
              Object.defineProperty(n, "value", {
                configurable: !0,
                enumerable: !0,
                get: function () {
                  return o.get?.call(this) ?? ``;
                },
                set: function (e) {
                  ((r.valueProperty = !0),
                    (r.inputChangeTimeSinceModuleLoad = bE()),
                    o.set?.call(this, e));
                },
              });
            let s = (e) => {
              ((r.isInputEventTrusted = e.isTrusted), (r.inputChangeTimeSinceModuleLoad = bE()));
            };
            return (
              n.addEventListener(`input`, s),
              () => {
                ((n.setAttribute = i.bind(n)),
                  o && Object.defineProperty(n, "value", o),
                  n.removeEventListener(`input`, s));
              }
            );
          }, [t, e]),
          /* @__PURE__ */ T(`input`, {
            ref: t,
            type: `text`,
            name: n,
            suppressHydrationWarning: !0,
            tabIndex: -1,
            autoComplete: `one-time-code`,
            "aria-hidden": `true`,
            style: { position: `absolute`, transform: `scale(0)` },
            defaultValue: ``,
            "data-1p-ignore": !0,
            "data-lpignore": `true`,
            "data-form-type": `other`,
            "data-bwignore": !0,
          })
        );
      }),
      (SE = { state: `pending` }),
      (CE = { state: `success` }),
      (wE = { state: `incomplete` }),
      (TE = { state: `complete` }),
      (EE = { state: `error` }),
      (DE = /* @__PURE__ */ j.createContext(void 0)),
      (OE = /* @__PURE__ */ j.forwardRef(function (
        {
          action: e,
          children: n,
          redirectUrl: r,
          onSuccess: i,
          onError: a,
          onLoading: o,
          submitTrackingId: s,
          nodeId: l,
          ...u
        },
        d
      ) {
        let f = j.useRef(null),
          p = re(d, f),
          {
            states: m,
            convertHoneypotFieldsForSubmission: h,
            replaceHoneypotWithMetadata: g,
          } = Nf(),
          _ = jn(),
          v = Nn(),
          y = Hd(),
          b = Sr(),
          [x, S] = j.useReducer(Lf, wE),
          { activeLocale: w, locales: E } = ei(),
          D = t(DE),
          O = j.useRef({ onSuccess: i, onError: a, onLoading: o });
        O.current = { onSuccess: i, onError: a, onLoading: o };
        let k = j.useRef(!1);
        async function A(e) {
          if (V(e)) {
            let t = Bd(_, e, y, E);
            if (!t) {
              Bf(e, f);
              return;
            }
            let { routeId: n, elementId: r, pathVariables: i } = t;
            _.navigate?.(n, r, i);
            return;
          }
          W(
            _d(e),
            () => `Expected link to be either a LinkToWebPage or a string: ${JSON.stringify(e)}`
          );
          let t = await cf(e.unresolvedPathSlugs, e.unresolvedHashSlugs, w, b),
            { routeId: n, elementId: r, pathVariables: i } = zd(_, v, e, w, t, y);
          _.navigate?.(n, r, i);
        }
        let M = (e) => {
          (e.preventDefault(), N(e.currentTarget));
        };
        async function N(t) {
          if (!e || !D || k.current) return;
          ((k.current = !0), h());
          let n = new FormData(t),
            i = kf(t);
          (await $b({ priority: `user-visible`, continueAfter: `paint` }),
            g(n),
            c(() => S({ type: `submit` })),
            Mf(n, Mt.document));
          for (let [e, t] of n) t instanceof File && n.delete(e);
          try {
            (O.current.onLoading?.(),
              Ff({ router: _, nodeId: l, submitTrackingId: s, activeLocale: w }),
              await Hf(e, n, i, D),
              c(() => S({ type: `success` })),
              O.current.onSuccess?.(),
              r && (await A(r)));
          } catch (e) {
            (c(() => S({ type: `error` })), O.current.onError?.(), console.error(e));
          }
          k.current = !1;
        }
        let P = (e) => {
            let { target: t, currentTarget: n, key: r } = e;
            t instanceof HTMLTextAreaElement ||
              (r === `Enter` && n.checkValidity() && (e.preventDefault(), M(e)));
          },
          F = async (e) => {
            let t = e.currentTarget;
            (await $b({ priority: `background`, continueAfter: `paint` }),
              c(() => S({ type: Vf(t) ? `incomplete` : `complete` })));
          };
        ga(f, (e) => void N(e));
        let I = j.useMemo(() => n(x), [n, x]);
        return /* @__PURE__ */ C(L.form, {
          ...u,
          method: `post`,
          "data-framer-form": ``,
          onSubmit: Rf(x) ? M : zf,
          onKeyDown: P,
          onChange: F,
          ref: p,
          children: [
            I,
            /* @__PURE__ */ T(Pf, { states: m }),
            /* @__PURE__ */ T(`script`, { dangerouslySetInnerHTML: { __html: ha() } }),
            /* @__PURE__ */ C(`noscript`, {
              children: [
                /* @__PURE__ */ T(`style`, {
                  children: `[data-framer-form] input[name=framer-noscript] { position: absolute; transform: scale(0); }`,
                }),
                /* @__PURE__ */ T(`input`, {
                  required: !0,
                  pattern: `(?!)`,
                  name: `framer-noscript`,
                  tabIndex: -1,
                  "aria-label": `Enable JavaScript to submit this form`,
                  title: `Enable JavaScript to submit this form`,
                }),
                /* @__PURE__ */ T(`p`, { children: `Enable JavaScript to submit this form.` }),
              ],
            }),
          ],
        });
      })),
      (kE = `__framer_force_showing_editorbar_since`),
      (AE = class extends y {
        state = { error: void 0 };
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        render() {
          return this.state.error ? null : this.props.children;
        }
      }),
      (jE = () => {
        try {
          return !!localStorage[kE];
        } catch {
          return !1;
        }
      }),
      (ME = () => !jE()),
      (NE = /* @__PURE__ */ (() => {
        let e = O(void 0);
        return ((e.displayName = `TriggerStateContext`), e);
      })()),
      (PE = null),
      (FE = null),
      Ot(Xf),
      (IE = (e, n, r, i, a, o) => {
        let s = t(DE),
          c = g(),
          l = Sr(),
          u = g(!0);
        return (
          M(() => {
            function t() {
              (!PE || !FE) && Xf();
              let t = r ? new URL(r, Mt.location.href) : Mt.location,
                c = {
                  version: 2,
                  abTestId: e?.abTestId,
                  framerSiteId: s ?? null,
                  webPageId: e?.abTestingVariantId ?? n,
                  routePath: e?.path || `/`,
                  collectionItemId: null,
                  framerLocale: a?.code || null,
                  referrer: null,
                  url: t.href,
                  hostname: t.hostname,
                  pathname: t.pathname,
                  search: t.search || null,
                  hash: t.hash || null,
                  timezone: PE,
                  locale: FE,
                },
                d = u.current && o !== void 0 ? o : void 0;
              return e?.collectionId && i
                ? (async () => {
                    let t = d ?? null;
                    if (d === void 0) {
                      let n = e.collectionId && l?.get(e.collectionId),
                        [r] = Object.values(i);
                      if (n && V(r)) {
                        let e = n.getRecordIdBySlug(r, a || void 0);
                        t = (st(e) ? await e : e) ?? null;
                      }
                    }
                    return { ...c, collectionItemId: t };
                  })()
                : c;
            }
            (async () => {
              let e = (c.current = t()),
                n = e instanceof Promise ? await e : e;
              ((c.current = n),
                u.current ? (u.current = !1) : dr(`published_site_pageview`, n, `eager`));
            })();
            let d = async (e) => {
              if (e.persisted) {
                let e = (c.current = t()),
                  n = e instanceof Promise ? await e : e;
                ((c.current = n), dr(`published_site_pageview`, n, `eager`));
              }
            };
            return (
              N.addEventListener(`pageshow`, d),
              () => {
                N.removeEventListener(`pageshow`, d);
              }
            );
          }, [e, n, r, i, a, s, l, o]),
          c
        );
      }),
      (LE = 0),
      (RE = 500),
      (zE = 200),
      (BE = `main`),
      (VE = `framerGeneratedPage`),
      (HE = `<!-- Start of headStart -->`),
      (UE = `<!-- End of headStart -->`),
      (WE = `<!-- Start of headEnd -->`),
      (GE = `<!-- End of headEnd -->`),
      (KE = `<!-- Start of bodyStart -->`),
      (qE = `<!-- End of bodyStart -->`),
      (JE = `<!-- Start of bodyEnd -->`),
      (YE = `<!-- End of bodyEnd -->`),
      (XE = /* @__PURE__ */ j.createContext(void 0)),
      (ZE = { status: `loading`, data: void 0 }),
      (QE = 5e3),
      ($E = () => {}),
      (eD = class e {
        static cacheKey = `framer-fetch-client-cache`;
        responseValues = /* @__PURE__ */ new Map();
        #e = /* @__PURE__ */ new Map();
        #t = /* @__PURE__ */ new Set();
        #n = /* @__PURE__ */ new Map();
        #r = /* @__PURE__ */ new Map();
        #i = /* @__PURE__ */ new Map();
        #a = /* @__PURE__ */ new Map();
        unmount() {
          for (let [e, t] of this.#a) (clearInterval(t), this.#a.delete(e));
        }
        stopQueryRefetching(e) {
          let t = Up(e),
            n = this.#a.get(t);
          n && (clearInterval(n), this.#a.delete(t));
        }
        startQueryRefetching(e) {
          let t = Up(e),
            n = this.#a.get(t),
            r = this.#n.get(t);
          if (n || !r) return;
          let i = Math.min(qp(r), 2 ** 31 - 1),
            a = Mt.setInterval(() => {
              if (document.visibilityState === `hidden`) return;
              let n = this.#r.get(t);
              r && n && this.fetchWithCache({ ...e, cacheDuration: r });
            }, i);
          this.#a.set(t, a);
        }
        hydrateCache() {
          try {
            let t = localStorage.getItem(e.cacheKey);
            if (!t) return;
            let n = JSON.parse(t);
            if (typeof n != `object`) throw Error(`Invalid cache data`);
            for (let e in n) {
              let t = n[e];
              if (!Array.isArray(t) || t.length !== 3) throw Error(`Invalid cache data`);
              let [r, i, a] = t;
              Jp(r, i) ||
                (this.#r.set(e, r),
                this.#n.set(e, i),
                this.responseValues.set(e, { status: `success`, data: a }));
            }
          } catch {
            try {
              localStorage.removeItem(e.cacheKey);
            } catch {}
          }
        }
        setResponseValue(e, t) {
          (this.responseValues.set(e, t), this.persistCache());
          let n = this.#e.get(e);
          if (n) for (let e of n) e();
        }
        persistCache = ql(() => {
          let t = {};
          for (let [e, n] of this.responseValues) {
            if (!n || n.status !== `success`) continue;
            let r = this.#n.get(e);
            if (!r || r === 0) continue;
            let i = this.#r.get(e);
            i && ((i && Jp(i, r)) || (t[e] = [i, r, n.data]));
          }
          try {
            localStorage.setItem(e.cacheKey, JSON.stringify(t));
          } catch {}
        }, 500);
        async prefetch(e) {
          if (!Mr() || !xd(e.url, !1)) return;
          let t = Up(e);
          (this.#t.add(t), await this.fetchWithCache(e));
          let n = this.getValue(t);
          if (!n || n.status === `loading`) throw Error(`Unexpected result status for prefetch`);
          let r = this.#e.get(t);
          for (let e of r ?? []) e();
          let i = Kp(n, e);
          return (e.resultOutputType === `image` && V(i) && (await Bp(i).catch($E)), i);
        }
        async fetchWithCache(e) {
          if (!Mr()) return;
          let t = Up(e),
            n = this.#i.get(t);
          if (n) return n;
          let r = this.#r.get(t),
            i = r && Jp(r, e.cacheDuration);
          if (this.responseValues.has(t) && !i) return;
          this.responseValues.get(t) || this.setResponseValue(t, ZE);
          let a = (async () => {
            try {
              let n = await fetch(e.url, { method: `GET`, credentials: e.credentials });
              if (!n.ok) {
                this.setResponseValue(t, {
                  status: `error`,
                  error: /* @__PURE__ */ Error(`Invalid Response Status`),
                  data: void 0,
                });
                return;
              }
              let r = await n.json();
              (this.setResponseValue(t, { status: `success`, data: r }),
                this.#r.set(t, Date.now()));
            } catch (e) {
              this.setResponseValue(t, { status: `error`, error: e, data: void 0 });
            }
          })();
          return (
            this.#i.set(t, a),
            a.finally(() => {
              this.#i.delete(t);
            }),
            a
          );
        }
        getValue(e, t = !1) {
          if (!t || this.#t.has(e)) return this.responseValues.get(e);
        }
        subscribe(e, t, n = !1) {
          let { url: r, cacheDuration: i } = e;
          if (!xd(r, !1)) return $E;
          let a = Up(e),
            o = this.#n.get(a);
          ((!o || i < o) && this.#n.set(a, i),
            n || (this.startQueryRefetching(e), this.fetchWithCache(e)));
          let s = this.#e.get(a) ?? /* @__PURE__ */ new Set();
          return (
            s.add(t),
            this.#e.set(a, s),
            () => {
              let n = this.#e.get(a);
              n && (n.delete(t), n.size === 0 && (this.#e.delete(a), this.stopQueryRefetching(e)));
            }
          );
        }
      }),
      (tD = /* @__PURE__ */ O(void 0)),
      (nD = /* @__PURE__ */ O(!0)),
      (rD = ({ children: e, client: t }) => {
        let [n] = m(() => t ?? new eD()),
          [r, i] = m(!0);
        return (
          M(
            () => (
              n.hydrateCache(),
              c(() => {
                i(!1);
              }),
              () => n.unmount()
            ),
            [n]
          ),
          /* @__PURE__ */ T(nD.Provider, {
            value: r,
            children: /* @__PURE__ */ T(tD.Provider, { value: n, children: e }),
          })
        );
      }),
      (iD = /* @__PURE__ */ (() => {
        let e = O(void 0);
        return ((e.displayName = `ServerDatabaseClientContext`), e);
      })()),
      (He.WillChange = class extends we {
        add(e) {
          e !== `backgroundColor` && super.add(e);
        }
      }),
      (aD = /* @__PURE__ */ Rd(
        /* @__PURE__ */ E(function ({ links: e, children: t, ...n }, r) {
          return $l(r)(t(Zp((t) => e.map(t), [e])), n);
        })
      )),
      (oD = { priority: void 0, canYield: !0 }),
      (sD = {
        cast(e, t) {
          switch (t.type) {
            case `array`:
              return _m(e, t);
            case `boolean`:
              return ym(e);
            case `color`:
              return Sm(e);
            case `date`:
              return wm(e);
            case `enum`:
              return Em(e);
            case `file`:
              return Om(e);
            case `link`:
              return Am(e);
            case `number`:
              return Mm(e);
            case `object`:
              return Fm(e, t);
            case `responsiveimage`:
              return Lm(e);
            case `richtext`:
              return zm(e);
            case `string`:
              return Um(e);
            case `vectorsetitem`:
              return Vm(e);
            case `unknown`:
              return e;
            default:
              ut(t, `Unsupported cast`);
          }
        },
        parse(e) {
          return Qe(e)
            ? { type: `boolean`, value: e }
            : it(e)
              ? { type: `date`, value: e.toISOString() }
              : H(e)
                ? { type: `number`, value: e }
                : V(e)
                  ? { type: `string`, value: e }
                  : $e(e)
                    ? { type: `array`, value: e.map(sD.parse) }
                    : null;
        },
        equal(e, t, n) {
          return e?.type === t?.type && Gm(e, t, n) === 0;
        },
        lessThan(e, t, n) {
          return e?.type === t?.type && Gm(e, t, n) < 0;
        },
        lessThanOrEqual(e, t, n) {
          return e?.type === t?.type && Gm(e, t, n) <= 0;
        },
        greaterThan(e, t, n) {
          return e?.type === t?.type && Gm(e, t, n) > 0;
        },
        greaterThanOrEqual(e, t, n) {
          return e?.type === t?.type && Gm(e, t, n) >= 0;
        },
        in(e, t, n) {
          return t?.type === `array` && t.value.some((t) => sD.equal(t, e, n));
        },
        indexOf(e, t, n) {
          return e?.type === `array` ? e.value.findIndex((e) => sD.equal(e, t, n)) : -1;
        },
        contains(e, t, n) {
          let r = Wm(e),
            i = Wm(t);
          return nt(r) || nt(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.includes(i));
        },
        startsWith(e, t, n) {
          let r = Wm(e),
            i = Wm(t);
          return nt(r) || nt(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.startsWith(i));
        },
        endsWith(e, t, n) {
          let r = Wm(e),
            i = Wm(t);
          return nt(r) || nt(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.endsWith(i));
        },
        length(e) {
          return e?.type === `array` ? e.value.length : 0;
        },
        stringify(e) {
          if (e === null) return `null`;
          switch (e.type) {
            case `array`:
              return `[${e.value.map(sD.stringify).join(`, `)}]`;
            case `boolean`:
            case `number`:
              return String(e.value);
            case `string`:
              return `'${e.value}'`;
            case `enum`:
              return `'${e.value}' /* Enum */`;
            case `color`:
              return `'${e.value}' /* Color */`;
            case `date`:
              return `'${e.value}' /* Date */`;
            case `richtext`:
              return `RichText`;
            case `vectorsetitem`:
              return `VectorSetItem`;
            case `responsiveimage`:
              return `ResponsiveImage`;
            case `file`:
              return `File`;
            case `link`:
              return V(e.value) ? `'${e.value}' /* Link */` : `Link`;
            case `object`:
              return `Object`;
            default:
              ut(e);
          }
        },
      }),
      (cD = { type: `unknown`, isNullable: !0 }),
      (lD = class {
        collection;
        locale;
        schema;
        indexes = [];
        constructor(e, t) {
          ((this.collection = e), (this.locale = t));
          let n = zl(e);
          W(n, `Collection does not have properties`);
          let r = { id: { type: `string`, isNullable: !1 } },
            i = Object.entries(n);
          for (let [e, t] of i) {
            if (!t) continue;
            let n = t.type;
            (W(n !== `array`, `Array properties are not supported`),
              W(n !== `object`, `Object properties are not supported`),
              (r[e] = { type: n, isNullable: !0 }));
          }
          this.schema = r;
        }
        getDatabaseItem(e, t) {
          let n = {},
            r = Number(t);
          for (let t in this.schema) {
            let i = e[t];
            if (rt(i)) continue;
            let a = this.schema[t];
            tt(a) ||
              (W(a.type !== `unknown`, `Invalid definition type`),
              (n[t] =
                a.type === `richtext`
                  ? { type: a.type, value: { itemIndex: r, key: t } }
                  : { type: a.type, value: i }));
          }
          return { pointer: t, data: n };
        }
        async resolveRichText(e) {
          let { itemIndex: t, key: n } = e,
            r = (await Km(this.collection, this.locale))[t]?.[n];
          return cb.is(r) ? r.readMaybeAsync() : r;
        }
        async scanItems(e) {
          let t = await Km(this.collection, this.locale),
            n = [];
          for (let r = 0; r < t.length; r++) {
            let i = rm(e);
            i && (await i);
            let a = t[r];
            W(a, `Can't find collection item`);
            let o = String(r);
            n.push(this.getDatabaseItem(a, o));
          }
          return n;
        }
        async resolveItems(e, t) {
          let n = await Km(this.collection, this.locale),
            r = [];
          for (let i of e) {
            let e = rm(t);
            e && (await e);
            let a = n[Number(i)];
            (W(a, `Can't find collection item`), r.push(this.getDatabaseItem(a, i)));
          }
          return r;
        }
        compareItems(e, t) {
          return Number(e.pointer) - Number(t.pointer);
        }
      }),
      (uD = /* @__PURE__ */ new Map()),
      (dD = /* @__PURE__ */ new WeakMap()),
      (fD = `$r_`),
      (pD = /* @__PURE__ */ new Map()),
      (mD = class {
        collections;
        priority;
        constructor(e, t, n) {
          ((this.collections = ah(e, t)), (this.priority = $m(n)));
        }
        *resolveArrayValue(e) {
          return yield* cm(e.value.map((e) => this.resolveValue(e)));
        }
        *resolveObjectValue(e) {
          let t = {};
          for (let n in e.value) {
            let r = e.value[n];
            t[n] = this.resolveValue(r);
          }
          return yield* sm(t);
        }
        richTextCache = /* @__PURE__ */ new WeakMap();
        loadRichTextValue(e) {
          let t = e.value;
          W(nh(t), `Rich text pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          W(n, `Can't find collection for rich text pointer`);
          let r = this.richTextCache.get(n) ?? /* @__PURE__ */ new Map();
          this.richTextCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a = n.resolveRichText(t.pointer);
          return (r.set(t.pointer, a), a);
        }
        preloadRichTextValue(e) {
          this.loadRichTextValue(e);
        }
        *resolveRichTextValue(e) {
          let t = this.loadRichTextValue(e);
          return ot(t) ? yield t : t;
        }
        vectorSetItemCache = /* @__PURE__ */ new WeakMap();
        loadVectorSetItemValue(e) {
          let t = e.value;
          W(ih(t), `Vector set item pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          (W(n, `Can't find collection for vector set item pointer`),
            W(n.resolveVectorSetItem, `Can't resolve vector set item pointer`));
          let r = this.vectorSetItemCache.get(n) ?? /* @__PURE__ */ new Map();
          this.vectorSetItemCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a = n.resolveVectorSetItem(t.pointer);
          return (r.set(t.pointer, a), a);
        }
        preloadVectorSetItemValue(e) {
          this.loadVectorSetItemValue(e);
        }
        *resolveVectorSetItemValue(e) {
          let t = this.loadVectorSetItemValue(e);
          return ot(t) ? yield t : t;
        }
        *resolveValue(e) {
          switch (e?.type) {
            case `array`:
              return yield* this.resolveArrayValue(e);
            case `object`:
              return yield* this.resolveObjectValue(e);
            case `richtext`:
              return yield* this.resolveRichTextValue(e);
            case `vectorsetitem`:
              return yield* this.resolveVectorSetItemValue(e);
          }
          return e?.value ?? null;
        }
      }),
      (hD = `index`),
      (gD = class extends Set {
        merge(e) {
          for (let t of e) this.add(t);
        }
        equals(e) {
          if (this === e) return !0;
          if (this.size !== e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        subsetOf(e) {
          if (this === e) return !0;
          if (this.size > e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        getHash() {
          let e = [];
          for (let t of this) e.push(t.id);
          return (e.sort((e, t) => e - t), Y(this.name, ...e));
        }
      }),
      (_D = class {
        id;
        name;
        data;
        indexes = new yD();
        fields = new Q();
        fieldByName = /* @__PURE__ */ new Map();
        constructor(e, t, n) {
          ((this.id = e), (this.name = t), (this.data = n));
        }
        addNamedField(e, t) {
          (this.fields.add(t), this.fieldByName.set(e, t));
        }
        getFieldByName(e) {
          return this.fieldByName.get(e);
        }
      }),
      (vD = class {
        id;
        data;
        collection;
        lookupNodes;
        constraint;
        ordering;
        resolvedFields = new Q();
        constructor(e, t, n, r, i, a) {
          ((this.id = e),
            (this.data = t),
            (this.collection = n),
            (this.lookupNodes = r),
            (this.constraint = i),
            (this.ordering = a));
          for (let e in t.schema) {
            let t = n.getFieldByName(e);
            t && this.resolvedFields.add(t);
          }
        }
      }),
      (yD = class extends gD {
        name = `Indexes`;
      }),
      (bD = class {
        id;
        name;
        definition;
        collection;
        constructor(e, t, n, r) {
          ((this.id = e), (this.name = t), (this.definition = n), (this.collection = r));
        }
        getValue(e) {
          W(this.name, `Can only get value of field with a name`);
          let t = e.data[this.name];
          return t ? this.wrapPointers(t) : null;
        }
        wrapPointers(e) {
          switch (e?.type) {
            case `array`:
              return { type: `array`, value: e.value.map((e) => this.wrapPointers(e)) };
            case `object`: {
              let t = {};
              for (let n in e.value) t[n] = this.wrapPointers(e.value[n]);
              return { type: `object`, value: t };
            }
            case `richtext`:
              return (
                W(this.collection, `Rich text field must have a collection`),
                { type: `richtext`, value: th(this.collection.data, e.value) }
              );
            case `vectorsetitem`:
              return (
                W(this.collection, `Vector set item field must have a collection`),
                { type: `vectorsetitem`, value: rh(this.collection.data, e.value) }
              );
          }
          return e;
        }
      }),
      (Q = class extends gD {
        name = `Fields`;
      }),
      (xD = class {
        field;
        direction;
        constructor(e, t = `asc`) {
          ((this.field = e), (this.direction = t));
        }
        getHash() {
          return Y(`OrderingField`, this.field.id, this.direction);
        }
      }),
      (SD = class {
        fields = [];
        constructor(e) {
          e && this.merge(e);
        }
        get length() {
          return this.fields.length;
        }
        getHash() {
          return Y(`Ordering`, ...this.fields);
        }
        push(e) {
          this.fields.push(e);
        }
        merge(e) {
          this.fields.push(...e.fields);
        }
        equals(e) {
          return this === e || (this.length === e.length && this.getHash() === e.getHash());
        }
        providedByFields(e) {
          for (let { field: t } of this.fields) if (!e.has(t) && t.name !== `index`) return !1;
          return !0;
        }
      }),
      (CD = class {
        ordering;
        resolvedFields;
        constructor(e, t) {
          ((this.ordering = e), (this.resolvedFields = t));
        }
        getHash() {
          return Y(`RequiredProps`, this.ordering, this.resolvedFields);
        }
        get isMinimal() {
          return this.ordering.length === 0 && this.resolvedFields.size === 0;
        }
        canProvide(e) {
          return this.canProvideOrdering(e) && this.canProvideResolvedFields(e);
        }
        canProvideOrdering(e) {
          return this.ordering.length === 0 || e.canProvideOrdering(this.ordering);
        }
        canProvideResolvedFields(e) {
          return this.resolvedFields.size === 0 || e.canProvideResolvedFields(this.resolvedFields);
        }
      }),
      (wD = class e {
        parent;
        node;
        takeNode() {
          let e = this.node;
          return (W(e, `Node is missing`), (this.node = void 0), e);
        }
        setNode(e) {
          (W(!this.node, `Node already set`), (this.node = e));
        }
        ordering;
        setOrdering(e) {
          this.ordering = e;
        }
        fields = [];
        fieldsByName = /* @__PURE__ */ new Map();
        constructor(e) {
          this.parent = e;
        }
        push() {
          return new e(this);
        }
        replace() {
          return new e(this.parent);
        }
        addField(e) {
          this.fields.push(e);
          let t = this.fieldsByName.get(e.name);
          t ? t.push(e) : this.fieldsByName.set(e.name, [e]);
        }
        addFieldsFromScope(e) {
          for (let t of e.fields) this.fields.push(t);
          for (let [t, n] of e.fieldsByName) {
            let e = this.fieldsByName.get(t);
            e ? e.push(...n) : this.fieldsByName.set(t, n.slice());
          }
        }
        resolveField(e, t) {
          let n = this.fieldsByName.get(e);
          if (n) {
            let e;
            for (let r of n)
              if (!(t && r.collectionName !== t)) {
                if (e) throw Error(`Ambiguous fields`);
                e = r;
              }
            if (e) return e;
          }
          return this.parent?.resolveField(e, t);
        }
        has(e) {
          return this.fieldsByName.get(e.name)?.includes(e) ? !0 : (this.parent?.has(e) ?? !1);
        }
        getRequiredOrdering() {
          return this.ordering ?? new SD();
        }
        getRequiredResolvedFields() {
          let e = new Q();
          for (let { field: t } of this.fields) t.collection && e.add(t);
          return e;
        }
        getRequiredProps() {
          return new CD(this.getRequiredOrdering(), this.getRequiredResolvedFields());
        }
        getNamedFields() {
          let e = {};
          for (let { name: t, field: n } of this.fields) e[t] = n;
          return e;
        }
        getSingleField() {
          W(this.fields.length === 1, `Scope must contain exactly one field`);
          let e = this.fields[0];
          return (W(e, `Field must exist`), e.field);
        }
      }),
      (TD = 1e3),
      ($ = class e {
        network;
        constructor(e) {
          this.network = e;
        }
        static estimate(t, n) {
          let r = lh(),
            i = uh(),
            a = t * r + n / i;
          return new e(a);
        }
        static max(t, n) {
          let r = Math.max(t.network, n.network);
          return new e(r);
        }
        static compare(e, t) {
          return e.network < t.network ? -1 : +(e.network > t.network);
        }
        add(e) {
          return ((this.network += e.network), this);
        }
        toString() {
          return `${this.network}ms`;
        }
      }),
      (ED = class {
        pointers = /* @__PURE__ */ new Map();
        values = /* @__PURE__ */ new Map();
        getKey() {
          let e = [];
          for (let [t, n] of this.pointers) e.push(`${t.id}-${n}`);
          return e.sort().join(`-`);
        }
        addValue(e, t) {
          this.values.set(e, t);
        }
        getValue(e) {
          return this.values.get(e) ?? null;
        }
        mergeValues(e) {
          for (let [t, n] of e.values) this.addValue(t, n);
        }
        addPointer(e, t) {
          this.pointers.set(e, t);
        }
        getPointer(e) {
          return this.pointers.get(e);
        }
        mergePointers(e) {
          for (let [t, n] of e.pointers) this.addPointer(t, n);
        }
        merge(e) {
          (this.mergeValues(e), this.mergePointers(e));
        }
      }),
      (DD = class e {
        fields;
        tuples;
        constructor(e, t = []) {
          ((this.fields = e), (this.tuples = t));
        }
        push(e) {
          this.tuples.push(e);
        }
        filter(t) {
          let n = this.tuples.filter(t);
          return new e(this.fields, n);
        }
        map(t, n) {
          let r = this.tuples.map(n);
          return new e(t, r);
        }
        sort(t) {
          let n = Array.from(this.tuples).sort(t);
          return new e(this.fields, n);
        }
        slice(t, n) {
          let r = this.tuples.slice(t, n);
          return new e(this.fields, r);
        }
        union(t) {
          let n = new Q();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = /* @__PURE__ */ new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            (r.add(t), i.push(e));
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            r.has(t) || i.push(e);
          }
          return i;
        }
        intersection(t) {
          let n = new Q();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = /* @__PURE__ */ new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            r.add(t);
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            r.has(t) && i.push(e);
          }
          return i;
        }
      }),
      (OD = class {
        isSynchronous;
        constructor(e) {
          this.isSynchronous = e;
        }
      }),
      (kD = class extends OD {
        group;
        getGroup() {
          return (W(this.group, `Node must be in a group`), this.group);
        }
        setGroup(e) {
          (W(!this.group, `Node is already in a group`), (this.group = e));
        }
        evaluateSync() {
          return im(this.evaluate(void 0));
        }
        evaluateAsync(e) {
          return am(this.evaluate(void 0), void 0, e);
        }
      }),
      (AD = class {
        input;
        field;
        constructor(e, t) {
          ((this.input = e), (this.field = t));
        }
        getHash() {
          return Y(`ProjectionField`, this.input, this.field.id);
        }
      }),
      (jD = class e extends kD {
        input;
        projections;
        passthrough;
        inputGroup;
        constructor(e, t, n) {
          let r = e.isSynchronous;
          for (let e of t) r &&= e.input.isSynchronous;
          (super(r),
            (this.input = e),
            (this.projections = t),
            (this.passthrough = n),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return Y(`RelationalProject`, this.inputGroup.id, ...this.projections, this.passthrough);
        }
        getOutputFields() {
          let e = new Q();
          e.merge(this.passthrough);
          for (let t of this.projections) e.add(t.field);
          return e;
        }
        canProvideOrdering(e) {
          let t = new Q();
          for (let e of this.projections) t.add(e.field);
          for (let { field: n } of e.fields) if (t.has(n)) return !1;
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          for (let e of this.projections) (t.merge(e.input.referencedFields), t.delete(e.field));
          return new CD(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = new $(0);
          for (let t of this.projections) {
            let n = t.input.optimize(e);
            i = $.max(i, n);
          }
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.projections.map((e) => new AD(e.input.getOptimized(), e.field));
          return new e(r, i, this.passthrough);
        }
        *evaluate(e) {
          let t = this.getOutputFields(),
            n = yield* this.input.evaluate(e),
            r = yield* cm(
              n.tuples.map((t) =>
                cm(
                  this.projections.map((n) => sm({ field: n.field, value: n.input.evaluate(e, t) }))
                )
              )
            );
          return n.map(t, (e, t) => {
            let n = new ED();
            n.mergePointers(e);
            for (let t of this.passthrough) {
              let r = e.getValue(t);
              n.addValue(t, r);
            }
            let i = r[t];
            W(i, `Projections must exist`);
            for (let { field: e, value: t } of i) n.addValue(e, t);
            return n;
          });
        }
      }),
      (MD = { type: 0 }),
      (ND = class extends OD {
        referencedFields;
        referencedOuterFields;
        isSynchronous;
        constructor(e, t, n) {
          (super(n),
            (this.referencedFields = e),
            (this.referencedOuterFields = t),
            (this.isSynchronous = n));
        }
        evaluateSync() {
          return im(this.evaluate(void 0, void 0));
        }
        evaluateAsync() {
          return am(this.evaluate(void 0, void 0));
        }
      }),
      (PD = { type: 0 }),
      (FD = class {
        when;
        then;
        constructor(e, t) {
          ((this.when = e), (this.then = t));
        }
        getHash() {
          return Y(`CaseCondition`, this.when, this.then);
        }
      }),
      (ID = class e extends ND {
        input;
        conditions;
        otherwise;
        definition = { type: `unknown`, isNullable: !0 };
        constructor(e, t, n) {
          let r = new Q(),
            i = new Q(),
            a = !0;
          e &&
            (r.merge(e.referencedFields),
            i.merge(e.referencedOuterFields),
            (a &&= e.isSynchronous));
          for (let { when: e, then: n } of t)
            (r.merge(e.referencedFields),
              i.merge(e.referencedOuterFields),
              (a &&= e.isSynchronous),
              r.merge(n.referencedFields),
              i.merge(n.referencedOuterFields),
              (a &&= n.isSynchronous));
          (n &&
            (r.merge(n.referencedFields),
            i.merge(n.referencedOuterFields),
            (a &&= n.isSynchronous)),
            super(r, i, a),
            (this.input = e),
            (this.conditions = t),
            (this.otherwise = n));
        }
        getHash() {
          return Y(`ScalarCase`, this.input, ...this.conditions, this.otherwise);
        }
        optimize(e) {
          this.input?.optimize(e);
          for (let t of this.conditions) (t.when.optimize(e), t.then.optimize(e));
          return (this.otherwise?.optimize(e), new $(0));
        }
        getOptimized() {
          let t = this.input?.getOptimized(),
            n = this.conditions.map((e) => new FD(e.when.getOptimized(), e.then.getOptimized())),
            r = this.otherwise?.getOptimized();
          return new e(t, n, r);
        }
        *evaluate(e, t) {
          let {
            input: n,
            conditions: r,
            otherwise: i,
          } = yield* sm({
            input: this.input?.evaluate(e, t) ?? null,
            conditions: cm(
              this.conditions.map((n) =>
                sm({ when: n.when.evaluate(e, t), then: n.then.evaluate(e, t) })
              )
            ),
            otherwise: this.otherwise?.evaluate(e, t) ?? null,
          });
          if (this.input) {
            for (let { when: e, then: t } of r) if (sD.equal(n, e, PD)) return t;
          } else for (let { when: e, then: t } of r) if (bm(e)) return t;
          return i;
        }
      }),
      (LD = class {
        normalizer;
        query;
        locale;
        collectionId = 0;
        indexId = 0;
        fieldId = 0;
        subqueries = [];
        constructor(e, t, n) {
          ((this.normalizer = e), (this.query = t), (this.locale = n));
        }
        build() {
          let e = new wD();
          return this.buildQuery(e, this.query);
        }
        buildQuery(e, t) {
          let n = { type: `Select`, ...t };
          return this.buildSelect(e, n);
        }
        buildSelect(e, t) {
          let n = this.buildFrom(e, t.from),
            r = n.getRequiredOrdering();
          if (t.where) {
            let e = n.takeNode(),
              r = this.buildExpression(n, t.where),
              i = this.normalizer.newRelationalFilter(e, r);
            n.setNode(i);
          }
          let i = [],
            a = new Q(),
            o;
          if (t.orderBy) {
            o = new SD();
            for (let e of t.orderBy)
              if (e.type === `Identifier`) {
                let t = n.resolveField(e.name, e.collection);
                if (tt(t)) continue;
                a.add(t.field);
                let r = new xD(t.field, e.direction);
                o.push(r);
              } else {
                let t = this.buildExpression(n, e),
                  r = new bD(ch(this.fieldId++), void 0, t.definition, void 0),
                  a = new AD(t, r);
                i.push(a);
                let s = new xD(r, e.direction);
                o.push(s);
              }
            o.merge(r);
          } else o = r;
          let s = this.buildSelectList(n, t.select, a, i);
          if ((s.setOrdering(o), t.offset)) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.offset),
              i = this.normalizer.newRelationalOffset(n, r, o);
            s.setNode(i);
          }
          if (t.limit) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.limit),
              i = this.normalizer.newRelationalLimit(n, r, o);
            s.setNode(i);
          }
          return s;
        }
        buildSelectList(e, t, n, r) {
          let i = e.push(),
            a = new Q(n),
            o = [...r];
          for (let n of t)
            if (n.type === `Identifier`) {
              let t = e.resolveField(n.name, n.collection);
              if (tt(t)) continue;
              (a.add(t.field), i.addField({ ...t, name: n.alias ?? t.name }));
            } else {
              let t = this.buildExpression(e, n);
              W(n.alias, `Subqueries should have an alias`);
              let r = ch(this.fieldId++),
                a = n.alias,
                s = new bD(r, a, t.definition, void 0),
                c = new AD(t, s);
              (o.push(c), i.addField({ field: s, name: a }));
            }
          let s = e.takeNode(),
            c = this.normalizer.newRelationalProject(s, o, a);
          return (i.setNode(c), i);
        }
        buildFrom(e, t) {
          switch (t.type) {
            case `Collection`:
              return this.buildCollection(e, t);
            case `LeftJoin`:
              return this.buildJoin(e, t);
            default:
              ut(t, `Unsupported from type`);
          }
        }
        buildCollection(e, t) {
          let n = e.push(),
            r = Xm(t.data, this.locale),
            i = t.alias,
            a = new _D(oh(this.collectionId++), i, r);
          for (let [e, t] of Object.entries(r.schema)) {
            let r = new bD(ch(this.fieldId++), e, t, a);
            (n.addField({ field: r, name: e, collectionName: i }), a.addNamedField(e, r));
          }
          {
            let e = new bD(ch(this.fieldId++), hD, { type: `number`, isNullable: !1 }, a);
            n.addField({ field: e, name: hD, collectionName: i });
            let t = new SD(),
              r = new xD(e);
            (t.push(r), n.setOrdering(t));
          }
          for (let e of r.indexes) {
            let t = [];
            for (let r of e.fields) {
              let e = this.buildExpression(n, r);
              t.push(e);
            }
            let r;
            e.where && (r = this.buildExpression(n, e.where));
            let i = new SD(),
              o = new vD(sh(this.indexId++), e, a, t, r, i);
            a.indexes.add(o);
          }
          let o = this.normalizer.newRelationalScan(a);
          return (n.setNode(o), n);
        }
        buildJoin(e, t) {
          let n = this.buildFrom(e, t.left),
            r = this.buildFrom(e, t.right),
            i = new SD(),
            a = n.getRequiredOrdering();
          i.merge(a);
          let o = r.getRequiredOrdering();
          i.merge(o);
          let s = e.push();
          (s.addFieldsFromScope(n), s.addFieldsFromScope(r), s.setOrdering(i));
          let c = this.buildExpression(s, t.constraint),
            l = n.takeNode(),
            u = r.takeNode(),
            d;
          switch (t.type) {
            case `LeftJoin`:
              d = this.normalizer.newRelationalLeftJoin(l, u, c);
              break;
            default:
              ut(t.type, `Unsupported join type`);
          }
          return (s.setNode(d), s);
        }
        buildExpression(e, t) {
          switch (t.type) {
            case `Identifier`:
              return this.buildIdentifier(e, t);
            case `LiteralValue`:
              return this.buildLiteralValue(t);
            case `FunctionCall`:
              return this.buildFunctionCall(e, t);
            case `Case`:
              return this.buildCase(e, t);
            case `UnaryOperation`:
              return this.buildUnaryOperation(e, t);
            case `BinaryOperation`:
              return this.buildBinaryOperation(e, t);
            case `TypeCast`:
              return this.buildTypeCast(e, t);
            case `Select`:
              throw Error(`Subqueries are only supported inside subquery function calls`);
            default:
              ut(t, `Unsupported expression`);
          }
        }
        buildIdentifier(e, t) {
          let n = e.resolveField(t.name, t.collection);
          if (n) {
            let e = !1;
            for (let t of this.subqueries)
              e
                ? t.referencedOuterFields.add(n.field)
                : ((e = t.inScope.has(n)), e && t.referencedFields.add(n.field));
            return this.normalizer.newScalarVariable(n.field, e);
          }
          return this.normalizer.newScalarConstant(cD, null);
        }
        buildLiteralValue(e) {
          let t = sD.parse(e.value);
          return this.normalizer.newScalarConstant(cD, t);
        }
        buildFunctionCall(e, t) {
          let n = (n) => {
              let r = t.arguments[n];
              return (W(r, `Missing argument`), this.buildExpression(e, r));
            },
            r = t.functionName;
          switch (r) {
            case `CONTAINS`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarContains(e, t);
            }
            case `STARTS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarStartsWith(e, t);
            }
            case `ENDS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarEndsWith(e, t);
            }
            case `LENGTH`: {
              let e = n(0);
              return this.normalizer.newScalarLength(e);
            }
            case `INDEX_OF`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIndexOf(e, t);
            }
            case `ARRAY`: {
              let n = t.arguments[0];
              return (
                W(n, `Missing argument`),
                W(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryArray(e, n)
              );
            }
            case `FLAT_ARRAY`: {
              let n = t.arguments[0];
              return (
                W(n, `Missing argument`),
                W(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryFlatArray(e, n)
              );
            }
            case `INTERSECT`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIntersection(e, t);
            }
            default:
              ut(r, `Unsupported function name`);
          }
        }
        buildSubqueryArray(e, t) {
          try {
            let n = new RD(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getNamedFields(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildSubqueryFlatArray(e, t) {
          try {
            let n = new RD(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getSingleField(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarFlatArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildCase(e, t) {
          let n;
          t.value && (n = this.buildExpression(e, t.value));
          let r = t.conditions.map(
              (t) => new FD(this.buildExpression(e, t.when), this.buildExpression(e, t.then))
            ),
            i;
          return (
            t.else && (i = this.buildExpression(e, t.else)),
            this.normalizer.newScalarCase(n, r, i)
          );
        }
        buildUnaryOperation(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.operator) {
            case `not`:
              return this.normalizer.newScalarNot(n);
            default:
              ut(t.operator, `Unsupported unary operator`);
          }
        }
        buildBinaryOperation(e, t) {
          let n = this.buildExpression(e, t.left),
            r = this.buildExpression(e, t.right);
          switch (t.operator) {
            case `and`:
              return this.normalizer.newScalarAnd(n, r);
            case `or`:
              return this.normalizer.newScalarOr(n, r);
            case `==`:
              return this.normalizer.newScalarEquals(n, r);
            case `!=`:
              return this.normalizer.newScalarNotEquals(n, r);
            case `<`:
              return this.normalizer.newScalarLessThan(n, r);
            case `<=`:
              return this.normalizer.newScalarLessThanOrEqual(n, r);
            case `>`:
              return this.normalizer.newScalarGreaterThan(n, r);
            case `>=`:
              return this.normalizer.newScalarGreaterThanOrEqual(n, r);
            case `in`:
              return this.normalizer.newScalarIn(n, r);
            default:
              ut(t.operator, `Unsupported binary operator`);
          }
        }
        buildTypeCast(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.dataType) {
            case `BOOLEAN`:
              return this.normalizer.newScalarCast(n, { type: `boolean`, isNullable: !0 });
            case `DATE`:
              return this.normalizer.newScalarCast(n, { type: `date`, isNullable: !0 });
            case `NUMBER`:
              return this.normalizer.newScalarCast(n, { type: `number`, isNullable: !0 });
            case `STRING`:
              return this.normalizer.newScalarCast(n, { type: `string`, isNullable: !0 });
            default:
              throw Error(`Unsupported data type`);
          }
        }
      }),
      (RD = class {
        inScope;
        referencedFields = new Q();
        referencedOuterFields = new Q();
        constructor(e) {
          this.inScope = e;
        }
      }),
      (zD = class e extends kD {
        input;
        predicate;
        inputGroup;
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.predicate = t),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return Y(`RelationalFilter`, this.inputGroup.id, this.predicate);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          return (t.merge(this.predicate.referencedFields), new CD(e.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.predicate.optimize(e);
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.predicate.getOptimized();
          return new e(r, i);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e),
            n = yield* cm(t.tuples.map((t) => this.predicate.evaluate(e, t)));
          return t.filter((e, t) => bm(n[t] ?? null));
        }
      }),
      (BD = class e extends kD {
        index;
        query;
        constructor(e, t) {
          (super(!1), (this.index = e), (this.query = t));
        }
        getHash() {
          return Y(`RelationalIndexLookup`, this.index.id, ...this.query);
        }
        getOutputFields() {
          return this.index.collection.fields;
        }
        canProvideOrdering(e) {
          return e.equals(this.index.ordering);
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.index.resolvedFields);
        }
        optimize() {
          let e = this.query.every((e) => e.type === `All`);
          return $.estimate(1, e ? 100 * TD : 50 * TD);
        }
        getOptimized() {
          return new e(this.index, this.query);
        }
        *evaluate() {
          let e = this.index,
            t = e.collection,
            n = this.getOutputFields(),
            r = yield e.data.lookupItems(this.query, tm()),
            i = tm(),
            a = [];
          for (let n of r) {
            let r = rm(i);
            r && (yield r);
            let o = new ED();
            for (let r of e.resolvedFields) {
              let e = r.getValue(n);
              (o.addPointer(t, n.pointer), o.addValue(r, e));
            }
            a.push(o);
          }
          return new DD(n, a);
        }
      }),
      (VD = class e extends kD {
        left;
        right;
        leftGroup;
        rightGroup;
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        getHash() {
          return Y(`RelationalIntersection`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new Q(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          return new CD(new SD(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return $.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t),
            a = this.rightGroup.getOptimized(i);
          return new e(r, a);
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* sm({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.intersection(n);
        }
      }),
      (HD = class e extends kD {
        collection;
        constructor(e) {
          (super(!1), (this.collection = e));
        }
        getHash() {
          return Y(`RelationalScan`, this.collection.id);
        }
        getOutputFields() {
          return this.collection.fields;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.collection.fields);
        }
        optimize() {
          return $.estimate(1, 200 * TD);
        }
        getOptimized() {
          return new e(this.collection);
        }
        *evaluate() {
          let e = this.collection,
            t = this.getOutputFields(),
            n = yield e.data.scanItems(tm()),
            r = tm(),
            i = [];
          for (let a of n) {
            let n = rm(r);
            n && (yield n);
            let o = new ED();
            for (let n of t) {
              let t = n.getValue(a);
              (o.addPointer(e, a.pointer), o.addValue(n, t));
            }
            i.push(o);
          }
          return new DD(t, i);
        }
      }),
      (UD = class e extends kD {
        left;
        right;
        leftGroup;
        rightGroup;
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        getHash() {
          return Y(`RelationalUnion`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new Q(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          return new CD(new SD(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return $.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t),
            a = this.rightGroup.getOptimized(i);
          return new e(r, a);
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* sm({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.union(n);
        }
      }),
      (WD = class e extends ND {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return Y(`ScalarAnd`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* sm({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: bm(n) && bm(r) };
        }
      }),
      (GD = class extends ND {
        definition;
        value;
        constructor(e, t) {
          let n = new Q(),
            r = new Q();
          (super(n, r, !0), (this.definition = e), (this.value = t));
        }
        getHash() {
          return Y(`ScalarConstant`, this.definition, this.value);
        }
        optimize() {
          return new $(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate() {
          return this.value;
        }
      }),
      (KD = { type: 0 }),
      (qD = class e extends ND {
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        getHash() {
          return Y(`ScalarContains`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* sm({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: sD.contains(n, r, KD) };
        }
      }),
      (JD = { type: 0 }),
      (YD = class e extends ND {
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        getHash() {
          return Y(`ScalarEndsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* sm({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: sD.endsWith(n, r, JD) };
        }
      }),
      (XD = class e extends ND {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return Y(`ScalarEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* sm({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: sD.equal(n, r, MD) };
        }
      }),
      (ZD = class e extends ND {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return Y(`ScalarGreaterThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* sm({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: sD.greaterThan(n, r, MD) };
        }
      }),
      (QD = class e extends ND {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return Y(`ScalarGreaterThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* sm({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: sD.greaterThanOrEqual(n, r, MD) };
        }
      }),
      ($D = class e extends ND {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return Y(`ScalarLessThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* sm({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: sD.lessThan(n, r, MD) };
        }
      }),
      (eO = class e extends ND {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return Y(`ScalarLessThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* sm({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: sD.lessThanOrEqual(n, r, MD) };
        }
      }),
      (tO = class e extends ND {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return Y(`ScalarNotEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* sm({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !sD.equal(n, r, MD) };
        }
      }),
      (nO = class e extends ND {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return Y(`ScalarOr`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* sm({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: bm(n) || bm(r) };
        }
      }),
      (rO = { type: 0 }),
      (iO = class e extends ND {
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        getHash() {
          return Y(`ScalarStartsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* sm({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: sD.startsWith(n, r, rO) };
        }
      }),
      (aO = class {
        normalizer;
        memo;
        constructor(e) {
          ((this.normalizer = e), (this.memo = e.memo));
        }
        explore(e) {
          let t = e.getGroup();
          if (e instanceof zD) {
            if (e.predicate instanceof WD) {
              let n = new VD(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
            if (e.predicate instanceof nO) {
              let n = new UD(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
          }
          if (e instanceof HD)
            for (let n of e.collection.indexes) {
              if (n.constraint) continue;
              let e = new BD(n, dh(n.lookupNodes.length));
              this.memo.addRelational(e, t);
            }
          if (e instanceof zD) {
            for (let n of e.inputGroup.nodes)
              if (n instanceof HD)
                for (let r of n.collection.indexes) {
                  if (
                    e.predicate instanceof XD &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof GD &&
                    r.data.supportedLookupTypes.includes(`Equals`)
                  ) {
                    let n = dh(r.lookupNodes.length);
                    n[0] = { type: `Equals`, value: e.predicate.right.value };
                    let i = new BD(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof tO &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof GD &&
                    r.data.supportedLookupTypes.includes(`NotEquals`)
                  ) {
                    let n = dh(r.lookupNodes.length);
                    n[0] = { type: `NotEquals`, value: e.predicate.right.value };
                    let i = new BD(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof $D &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof GD &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = dh(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new BD(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof eO &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof GD &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = dh(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new BD(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof ZD &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof GD &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = dh(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new BD(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof QD &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof GD &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = dh(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new BD(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof qD &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof GD &&
                    r.data.supportedLookupTypes.includes(`Contains`)
                  ) {
                    let n = dh(r.lookupNodes.length);
                    n[0] = { type: `Contains`, value: e.predicate.target.value };
                    let i = new BD(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof iO &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof GD &&
                    r.data.supportedLookupTypes.includes(`StartsWith`)
                  ) {
                    let n = dh(r.lookupNodes.length);
                    n[0] = { type: `StartsWith`, value: e.predicate.target.value };
                    let i = new BD(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof YD &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof GD &&
                    r.data.supportedLookupTypes.includes(`EndsWith`)
                  ) {
                    let n = dh(r.lookupNodes.length);
                    n[0] = { type: `EndsWith`, value: e.predicate.target.value };
                    let i = new BD(r, n);
                    this.memo.addRelational(i, t);
                  }
                }
          }
        }
      }),
      (oO = class {
        id;
        relational;
        nodes = [];
        winners = /* @__PURE__ */ new Map();
        constructor(e, t) {
          ((this.id = e), (this.relational = t));
        }
        addNode(e) {
          (this.nodes.push(e), e.setGroup(this));
        }
        getWinner(e) {
          let t = e.getHash(),
            n = this.winners.get(t);
          if (n) return n;
          let r = new sO();
          return (this.winners.set(t, r), r);
        }
        getOptimized(e) {
          let t = this.getWinner(e);
          W(t.node, `Group not optimized`);
          let n = t.node.getOptimized(e);
          return (n.setGroup(this), n);
        }
      }),
      (sO = class {
        node;
        cost = new $(1 / 0);
        nodes = [];
        update(e, t) {
          (this.nodes.push(e), $.compare(t, this.cost) < 0 && ((this.node = e), (this.cost = t)));
        }
      }),
      (cO = class {
        outputFields;
        constructor(e) {
          this.outputFields = e;
        }
        isCompatible(e) {
          return this.outputFields.equals(e.outputFields);
        }
      }),
      (lO = class {
        nodes = /* @__PURE__ */ new Map();
        groups = [];
        addGroup(e) {
          let t = new oO(fh(this.groups.length), e);
          return (this.groups.push(t), t);
        }
        addRelational(e, t) {
          let n = e.getHash(),
            r = this.nodes.get(n);
          if (r) return r;
          this.nodes.set(n, e);
          let i = new cO(e.getOutputFields());
          return (
            (t ??= this.addGroup(i)),
            t.addNode(e),
            W(i.isCompatible(t.relational), `Group has inconsistent relational props`),
            e
          );
        }
        addScalar(e) {
          let t = e.getHash();
          return this.nodes.get(t) || (this.nodes.set(t, e), e);
        }
      }),
      (uO = class e extends kD {
        left;
        right;
        constraint;
        leftGroup;
        rightGroup;
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous && n.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.constraint = n),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        getHash() {
          return Y(`RelationalLeftJoin`, this.leftGroup.id, this.rightGroup.id, this.constraint);
        }
        getOutputFields() {
          let e = new Q();
          return (
            e.merge(this.leftGroup.relational.outputFields),
            e.merge(this.rightGroup.relational.outputFields),
            e
          );
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e, t) {
          let n = new Q(),
            r = e.relational.outputFields;
          for (let e of t.resolvedFields) r.has(e) && n.add(e);
          for (let e of this.constraint.referencedFields) r.has(e) && n.add(e);
          return new CD(new SD(), n);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = e.optimizeGroup(this.rightGroup, i),
            o = this.constraint.optimize(e);
          return $.max($.max(r, a), o);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = this.rightGroup.getOptimized(i),
            o = this.constraint.getOptimized();
          return new e(r, a, o);
        }
        *evaluateScalarEquals(e, t, n, r, i) {
          let a = /* @__PURE__ */ new Map();
          for (let e of t.tuples) {
            let t = yield* r.evaluate(i, e),
              n = JSON.stringify(t?.value ?? null),
              o = a.get(n) ?? [];
            (o.push(e), a.set(n, o));
          }
          let o = new DD(this.getOutputFields());
          for (let t of e.tuples) {
            let e = yield* n.evaluate(i, t),
              r = JSON.stringify(e?.value ?? null),
              s = a.get(r) ?? [];
            if (s.length === 0) o.push(t);
            else
              for (let e of s) {
                let n = new ED();
                (n.merge(t), n.merge(e), o.push(n));
              }
          }
          return o;
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* sm({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          if (this.constraint instanceof XD) {
            if (
              this.constraint.left.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields
              ) &&
              this.constraint.right.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.left,
                this.constraint.right,
                e
              );
            if (
              this.constraint.right.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields
              ) &&
              this.constraint.left.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.right,
                this.constraint.left,
                e
              );
          }
          let r = new DD(this.getOutputFields());
          for (let i of t.tuples) {
            let t = !1;
            for (let a of n.tuples) {
              let n = new ED();
              (n.merge(i),
                n.merge(a),
                bm(yield* this.constraint.evaluate(e, n)) && (r.push(n), (t = !0)));
            }
            t || r.push(i);
          }
          return r;
        }
      }),
      (dO = class e extends kD {
        input;
        limit;
        ordering;
        inputGroup;
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.limit = t),
            (this.ordering = n),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return Y(`RelationalLimit`, this.inputGroup.id, this.limit);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          return (t.merge(this.limit.referencedFields), new CD(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.limit.optimize(e);
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.limit.getOptimized();
          return new e(r, i, this.ordering);
        }
        *evaluate(e) {
          let { input: t, limit: n } = yield* sm({
              input: this.input.evaluate(e),
              limit: this.limit.evaluate(e, void 0),
            }),
            r = Nm(n) ?? 1 / 0;
          return r === 1 / 0 ? t : t.slice(0, r);
        }
      }),
      (fO = class e extends kD {
        input;
        offset;
        ordering;
        inputGroup;
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.offset = t),
            (this.ordering = n),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return Y(`RelationalOffset`, this.inputGroup.id, this.offset);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          return (t.merge(this.offset.referencedFields), new CD(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.offset.optimize(e);
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.offset.getOptimized();
          return new e(r, i, this.ordering);
        }
        *evaluate(e) {
          let { input: t, offset: n } = yield* sm({
              input: this.input.evaluate(e),
              offset: this.offset.evaluate(e, void 0),
            }),
            r = Nm(n) ?? 0;
          return r === 0 ? t : t.slice(r);
        }
      }),
      (pO = class e extends ND {
        input;
        namedFields;
        ordering;
        referencedFields;
        referencedOuterFields;
        inputGroup;
        definition;
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.namedFields = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            (this.inputGroup = e.getGroup()));
          let a = {},
            o = Object.entries(t);
          for (let [e, t] of o) a[e] = t.definition;
          this.definition = {
            type: `array`,
            isNullable: !1,
            definition: { type: `object`, isNullable: !1, definitions: a },
          };
        }
        getHash() {
          let e = {},
            t = Object.entries(this.namedFields);
          for (let [n, r] of t) e[n] = r.id;
          return Y(
            `ScalarArray`,
            this.inputGroup.id,
            e,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new Q(),
            t = Object.values(this.namedFields);
          for (let n of t) tt(n.collection) || e.add(n);
          return new CD(this.ordering, e);
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new $(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps(),
            n = this.inputGroup.getOptimized(t);
          return new e(
            n,
            this.namedFields,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        *evaluate(e, t) {
          let n = new ED();
          (e && n.merge(e), t && n.merge(t));
          let r = yield* this.input.evaluate(n),
            i = Object.entries(this.namedFields);
          return {
            type: `array`,
            value: r.tuples.map((e) => {
              let t = {};
              for (let [n, r] of i) t[n] = e.getValue(r);
              return { type: `object`, value: t };
            }),
          };
        }
      }),
      (mO = class e extends ND {
        input;
        definition;
        constructor(e, t) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            (this.input = e),
            (this.definition = t),
            W(t.isNullable, `Unsupported non-nullable cast`));
        }
        getHash() {
          return Y(`ScalarCast`, this.input, this.definition);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t, this.definition);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return sD.cast(n, this.definition);
        }
      }),
      (hO = class e extends ND {
        input;
        field;
        ordering;
        referencedFields;
        referencedOuterFields;
        inputGroup;
        definition;
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.field = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            (this.inputGroup = e.getGroup()),
            (this.definition = { type: `array`, isNullable: !1, definition: t.definition }));
        }
        getHash() {
          return Y(
            `ScalarFlatArray`,
            this.inputGroup.id,
            this.field.id,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new Q();
          return (tt(this.field.collection) || e.add(this.field), new CD(this.ordering, e));
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new $(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps(),
            n = this.inputGroup.getOptimized(t);
          return new e(
            n,
            this.field,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        *evaluate(e, t) {
          let n = new ED();
          return (
            e && n.merge(e),
            t && n.merge(t),
            {
              type: `array`,
              value: (yield* this.input.evaluate(n)).tuples.map((e) => e.getValue(this.field)),
            }
          );
        }
      }),
      (gO = { type: 0 }),
      (_O = class e extends ND {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return Y(`ScalarIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* sm({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: sD.in(n, r, gO) };
        }
      }),
      (vO = { type: 1 }),
      (yO = class e extends ND {
        source;
        target;
        definition = { type: `number`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        getHash() {
          return Y(`ScalarIndexOf`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* sm({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `number`, value: sD.indexOf(n, r, vO) };
        }
      }),
      (bO = class extends Error {}),
      (xO = class e extends ND {
        left;
        right;
        definition = {
          type: `array`,
          definition: { type: `string`, isNullable: !1 },
          isNullable: !1,
        };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return Y(`ScalarIntersection`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* sm({
              left: this.left.evaluate(e, t),
              right: this.right.evaluate(e, t),
            }),
            i = mh(n),
            a = mh(r),
            o = [],
            s = i.size < a.size ? i : a,
            c = s === i ? a : i;
          for (let e of s) c.has(e) && o.push({ type: `string`, value: e });
          return { type: `array`, value: o };
        }
      }),
      (SO = class e extends ND {
        input;
        definition = { type: `number`, isNullable: !1 };
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), (this.input = e));
        }
        getHash() {
          return Y(`ScalarLength`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return { type: `number`, value: sD.length(n) };
        }
      }),
      (CO = class e extends ND {
        input;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), (this.input = e));
        }
        getHash() {
          return Y(`ScalarNot`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t);
        }
        *evaluate(e, t) {
          return { type: `boolean`, value: !bm(yield* this.input.evaluate(e, t)) };
        }
      }),
      (wO = { type: 0 }),
      (TO = class e extends ND {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return Y(`ScalarNotIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* sm({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !sD.in(n, r, wO) };
        }
      }),
      (EO = class extends ND {
        field;
        isOuterField;
        definition;
        constructor(e, t) {
          W(e.name !== hD, `Invalid field name`);
          let n = new Q(),
            r = new Q();
          (t ? r.add(e) : n.add(e),
            super(n, r, !0),
            (this.field = e),
            (this.isOuterField = t),
            (this.definition = e.definition));
        }
        getHash() {
          return Y(`ScalarVariable`, this.field.id, this.isOuterField);
        }
        optimize() {
          return new $(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate(e, t) {
          return this.isOuterField
            ? (W(e, `Context must exist`), e.getValue(this.field))
            : (W(t, `Tuple must exist`), t.getValue(this.field));
        }
      }),
      (DO = class {
        memo;
        constructor(e) {
          this.memo = e;
        }
        finishRelational(e) {
          return this.memo.addRelational(e);
        }
        newRelationalScan(e) {
          let t = new HD(e);
          return this.finishRelational(t);
        }
        newRelationalIndexLookup(e, t) {
          let n = new BD(e, t);
          return this.finishRelational(n);
        }
        newRelationalLeftJoin(e, t, n) {
          let r = new uO(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalRightJoin(e, t, n) {
          return this.newRelationalLeftJoin(t, e, n);
        }
        newRelationalFilter(e, t) {
          if (t instanceof GD && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (e instanceof uO && t.referencedFields.subsetOf(e.leftGroup.relational.outputFields)) {
            let n = this.newRelationalFilter(e.left, t);
            return this.newRelationalLeftJoin(n, e.right, e.constraint);
          }
          let n = new zD(e, t);
          return this.finishRelational(n);
        }
        newRelationalProject(e, t, n) {
          let r = new jD(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalLimit(e, t, n) {
          if (
            e instanceof jD &&
            t.referencedFields.subsetOf(e.inputGroup.relational.outputFields) &&
            n.providedByFields(e.inputGroup.relational.outputFields)
          ) {
            let r = this.newRelationalLimit(e.input, t, n);
            return this.newRelationalProject(r, e.projections, e.passthrough);
          }
          let r = new dO(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalOffset(e, t, n) {
          let r = new fO(e, t, n);
          return this.finishRelational(r);
        }
        finishScalar(e) {
          if (
            !(e instanceof GD) &&
            e.isSynchronous &&
            e.referencedFields.size === 0 &&
            e.referencedOuterFields.size === 0
          ) {
            let t = e.evaluateSync();
            return this.newScalarConstant(e.definition, t);
          }
          return this.memo.addScalar(e);
        }
        removeUnknown(e, t) {
          if (e.definition.type !== `unknown` || t.type === `unknown`) return e;
          let n = { ...t, isNullable: !0 };
          return this.newScalarCast(e, n);
        }
        newScalarVariable(e, t) {
          let n = new EO(e, t);
          return this.finishScalar(n);
        }
        newScalarConstant(e, t) {
          let n = new GD(e, t);
          return this.finishScalar(n);
        }
        newScalarNot(e) {
          if (e instanceof CO)
            return e.input.definition.type === `boolean`
              ? e.input
              : this.newScalarCast(e.input, { type: `boolean`, isNullable: !0 });
          if (e instanceof XD) return this.newScalarNotEquals(e.left, e.right);
          if (e instanceof tO) return this.newScalarEquals(e.left, e.right);
          if (e instanceof $D) return this.newScalarGreaterThanOrEqual(e.left, e.right);
          if (e instanceof eO) return this.newScalarGreaterThan(e.left, e.right);
          if (e instanceof ZD) return this.newScalarLessThanOrEqual(e.left, e.right);
          if (e instanceof QD) return this.newScalarLessThan(e.left, e.right);
          if (e instanceof WD) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarOr(t, n);
          }
          if (e instanceof nO) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarAnd(t, n);
          }
          let t = new CO(e);
          return this.finishScalar(t);
        }
        newScalarAnd(e, t) {
          if (t instanceof GD && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (
            (e instanceof GD && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof GD && t.value?.type === `boolean` && t.value.value === !1)
          )
            return t;
          if (e instanceof GD && e.value?.type === `boolean` && e.value.value === !1) return e;
          let n = new WD(e, t);
          return this.finishScalar(n);
        }
        newScalarOr(e, t) {
          if (t instanceof GD && t.value?.type === `boolean` && t.value.value === !0) return t;
          if (
            (e instanceof GD && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof GD && t.value?.type === `boolean` && t.value.value === !1)
          )
            return e;
          if (e instanceof GD && e.value?.type === `boolean` && e.value.value === !1) return t;
          let n = new nO(e, t);
          return this.finishScalar(n);
        }
        newScalarEquals(e, t) {
          let n = e instanceof EO;
          if (t instanceof EO && !n) return this.newScalarEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new XD(e, t);
          return this.finishScalar(r);
        }
        newScalarNotEquals(e, t) {
          let n = e instanceof EO;
          if (t instanceof EO && !n) return this.newScalarNotEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new tO(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThan(e, t) {
          let n = e instanceof EO;
          if (t instanceof EO && !n) return this.newScalarGreaterThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new $D(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThanOrEqual(e, t) {
          let n = e instanceof EO;
          if (t instanceof EO && !n) return this.newScalarGreaterThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new eO(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThan(e, t) {
          let n = e instanceof EO;
          if (t instanceof EO && !n) return this.newScalarLessThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new ZD(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThanOrEqual(e, t) {
          let n = e instanceof EO;
          if (t instanceof EO && !n) return this.newScalarLessThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new QD(e, t);
          return this.finishScalar(r);
        }
        newScalarIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new _O(e, t);
          return this.finishScalar(r);
        }
        newScalarNotIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new TO(e, t);
          return this.finishScalar(r);
        }
        newScalarCase(e, t, n) {
          if (e) {
            let n = [];
            for (let { when: r, then: i } of t) {
              let t = new FD(this.removeUnknown(r, e.definition), i);
              n.push(t);
            }
            t = n;
          }
          let r = new ID(e, t, n);
          return this.finishScalar(r);
        }
        newScalarContains(e, t) {
          let n = new qD(e, t);
          return this.finishScalar(n);
        }
        newScalarStartsWith(e, t) {
          let n = new iO(e, t);
          return this.finishScalar(n);
        }
        newScalarEndsWith(e, t) {
          let n = new YD(e, t);
          return this.finishScalar(n);
        }
        newScalarLength(e) {
          let t = new SO(e);
          return this.finishScalar(t);
        }
        newScalarIndexOf(e, t) {
          let n = new yO(e, t);
          return this.finishScalar(n);
        }
        newScalarArray(e, t, n, r, i) {
          let a = new pO(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarFlatArray(e, t, n, r, i) {
          let a = new hO(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarIntersection(e, t) {
          let n = new xO(e, t);
          return this.finishScalar(n);
        }
        newScalarCast(e, t) {
          if (e.definition.type === t.type) return e;
          let n = new mO(e, t);
          return this.finishScalar(n);
        }
      }),
      (OO = class extends kD {}),
      (kO = class e extends OO {
        input;
        fields;
        resolver;
        inputGroup;
        constructor(e, t, n) {
          (super(!1),
            (this.input = e),
            (this.fields = t),
            (this.resolver = n),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return Y(`EnforcerResolve`, this.inputGroup.id, this.fields);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.fields);
        }
        getInputRequiredProps(e) {
          let t = new Q();
          return new CD(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return $.estimate(0, 100 * TD).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n);
          return new e(r, this.fields, this.resolver);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e);
          W(this.fields.subsetOf(t.fields), `Fields can't be resolved`);
          let n = /* @__PURE__ */ new Map();
          for (let e of this.fields) {
            W(e.collection, `Collection required to resolve field`);
            let t = n.get(e.collection);
            (t || ((t = new Q()), n.set(e.collection, t)), t.add(e));
          }
          for (let e of t.tuples) for (let t of this.fields) hh(e.getValue(t), this.resolver);
          let r = yield Promise.all(
            Array.from(n).map(async ([e, n]) => {
              let r = [];
              for (let n of t.tuples) {
                let t = n.getPointer(e);
                t && r.push(t);
              }
              let i = await e.data.resolveItems(r, this.resolver.priority);
              return (
                W(i.length === r.length, `Invalid number of items`),
                { collection: e, fields: n, items: i, nextItemIndex: 0 }
              );
            })
          );
          return t.map(t.fields, (e) => {
            let t = new ED();
            t.merge(e);
            for (let n of r) {
              let { collection: r, fields: i, items: a } = n,
                o = e.getPointer(r);
              if (!o) continue;
              let s = a[n.nextItemIndex++];
              (W(s, `Item not found`), W(s.pointer === o, `Pointer mismatch`));
              for (let e of i) {
                let n = e.getValue(s);
                t.addValue(e, n);
              }
            }
            return t;
          });
        }
      }),
      (AO = { type: 0 }),
      (jO = class e extends OO {
        input;
        ordering;
        inputGroup;
        constructor(e, t) {
          (super(e.isSynchronous),
            (this.input = e),
            (this.ordering = t),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return Y(`EnforcerSort`, this.inputGroup.id, this.ordering);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          for (let { field: e } of this.ordering.fields)
            e.name !== `index` && (tt(e.collection) || t.add(e));
          return new CD(new SD(), t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return new $(0).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n);
          return new e(r, this.ordering);
        }
        *evaluate(e) {
          return (yield* this.input.evaluate(e)).sort((e, t) => {
            for (let { field: n, direction: r } of this.ordering.fields) {
              let i = r === `asc`;
              if (n.name === `index`) {
                let r = n.collection;
                W(r, `Collection required for sorting`);
                let a = e.getPointer(r);
                W(a, `Pointer required for sorting`);
                let o = { pointer: a, data: {} },
                  s = t.getPointer(r);
                W(s, `Pointer required for sorting`);
                let c = { pointer: s, data: {} },
                  l = r.data.compareItems(o, c);
                return i ? l : -l;
              }
              let a = e.getValue(n),
                o = t.getValue(n);
              if (!sD.equal(a, o, AO)) {
                if (nt(a) || sD.lessThan(a, o, AO)) return i ? -1 : 1;
                if (nt(o) || sD.greaterThan(a, o, AO)) return i ? 1 : -1;
                throw Error(`Invalid comparison`);
              }
            }
            return 0;
          });
        }
      }),
      (MO = class {
        query;
        locale;
        resolver;
        memo = new lO();
        normalizer = new DO(this.memo);
        explorer = new aO(this.normalizer);
        constructor(e, t, n) {
          ((this.query = e), (this.locale = t), (this.resolver = n));
        }
        optimize(e) {
          let t = new LD(this.normalizer, this.query, this.locale).build(),
            n = rm(e);
          return n ? n.then(() => this.optimizeBuiltQuery(t)) : this.optimizeBuiltQuery(t);
        }
        optimizeBuiltQuery(e) {
          let t = e.takeNode().getGroup(),
            n = e.getRequiredProps();
          return (this.optimizeGroup(t, n), [t.getOptimized(n), e.getNamedFields()]);
        }
        optimizeGroup(e, t) {
          let n = e.getWinner(t);
          if (n.node) return n.cost;
          let r = e.nodes[0];
          (W(r, `Normalized node not found`), this.createEnforcer(n, r, t));
          for (let r of e.nodes) {
            if (t.canProvide(r)) {
              let e = r.optimize(this, t);
              n.update(r, e);
            }
            t.isMinimal && this.explorer.explore(r);
          }
          return n.cost;
        }
        createEnforcer(e, t, n) {
          if (n.resolvedFields.size > 0) {
            let r = new kO(t, n.resolvedFields, this.resolver),
              i = r.optimize(this, n);
            e.update(r, i);
          }
          if (n.ordering.length > 0) {
            let r = new jO(t, n.ordering),
              i = r.optimize(this, n);
            e.update(r, i);
          }
        }
      }),
      (NO = /* @__PURE__ */ Qp(`query-engine`)),
      (PO = class {
        async evalQuery(e, t, n, r) {
          NO.enabled && NO.debug(`Query:\n${Oh(e)}`);
          let i = new mD(e, t, r),
            a = new MO(e, t, i),
            o = rm(i.priority);
          o && (await o);
          let s = a.optimize(r),
            [c, l] = st(s) ? await s : s,
            u = rm(r);
          u && (await u);
          let d = await c.evaluateAsync(r),
            f = Object.entries(l),
            p = [],
            m = [];
          for (let e of d.tuples) {
            let t = rm(r);
            t && (await t);
            let a = {},
              o = {};
            for (let [t, r] of f) {
              let s = e.getValue(r);
              ((a[t] = i.resolveValue(s)), n && (o[t] = s));
            }
            (n && p.push(o), m.push(sm(a, r)));
          }
          let h = om(cm(m, r), r);
          return n ? [st(h) ? await h : h, p] : h;
        }
        async serializeableQuery(e, t, n) {
          return this.evalQuery(e, t, !0, n);
        }
        async query(e, t, n) {
          return this.evalQuery(e, t, !1, n);
        }
        resolveSerializableQueryResult(e, t, n, r) {
          let i = new mD(t, n, r);
          return om(
            cm(
              e.map((e) => {
                let t = {},
                  n;
                for (n in e) {
                  let r = e[n];
                  t[n] = i.resolveValue(r);
                }
                return sm(t);
              })
            ),
            void 0,
            !1
          );
        }
      }),
      (FO = Tb.QueryCache),
      (IO = class {
        queryEngine;
        maxSize;
        cache = /* @__PURE__ */ new Map();
        serializedCache = Ob === void 0 ? void 0 : /* @__PURE__ */ new Map();
        constructor(e, t = 1 / 0) {
          ((this.queryEngine = e), (this.maxSize = t));
        }
        clear() {
          (this.cache.clear(), this.serializedCache?.clear());
        }
        prune() {
          if (!(this.cache.size <= this.maxSize))
            for (let [e, t] of this.cache) {
              if (this.cache.size <= this.maxSize) break;
              t.value.state !== `pending` &&
                (this.cache.delete(e), this.serializedCache?.delete(e));
            }
        }
        get(e, t, n) {
          let r = jh(e, t),
            i = this.cache.get(r);
          if (i) {
            let a = eh(n) ?? `user-visible`,
              o = eh(i.priority);
            if (o === void 0 && n !== void 0 && i.value.state === `pending`)
              return (this.cache.delete(r), this.get(e, t, n));
            if (o !== void 0 && Hr(a, o) && i.value.state === `pending`)
              return (this.cache.delete(r), this.get(e, t, a));
            if (
              (this.cache.delete(r),
              this.cache.set(r, i),
              Ob !== void 0 &&
                this.serializedCache !== void 0 &&
                !qm(r) &&
                i.value.state === `fulfilled`)
            ) {
              let e = this.serializedCache.get(r);
              e !== void 0 && Ob.set(FO, r, e);
            }
            return i.value;
          }
          let a = new cb(() => {
            let i = qm(r),
              a = i ? void 0 : _r(FO, r);
            if (a)
              try {
                return this.queryEngine.resolveSerializableQueryResult(a, e, t);
              } catch (e) {
                hr(e, r);
              }
            return Ob !== void 0 && !i
              ? this.queryEngine
                  .serializeableQuery(e, t, n)
                  .then(([e, t]) => (this.serializedCache?.set(r, t), Ob.set(FO, r, t), e))
              : this.queryEngine.query(e, t, n);
          });
          return (this.cache.set(r, { value: a, priority: n }), this.prune(), a);
        }
      }),
      (LO = /* @__PURE__ */ new IO(/* @__PURE__ */ new PO())),
      (RO = `style[data-framer-breakpoint-css]`),
      (zO = `page`),
      (BO = /* @__PURE__ */ Symbol(`cycle`)),
      (UO = /* @__PURE__ */ new WeakMap()),
      (WO = /* @__PURE__ */ (() => {
        let e = O(null);
        return ((e.displayName = `TickerContext`), e);
      })()),
      (GO = /* @__PURE__ */ (() => {
        let e = O(void 0);
        return ((e.displayName = `TickerItemContext`), e);
      })()),
      (KO = (e, t, n, r, i) => ({
        sign: 1,
        direction: i,
        lengthProp: t,
        viewportLengthProp: n,
        paddingStartProp: r,
        measureItem: (n) => ({ start: n[e], end: n[e] + n[t] }),
        getCumulativeInset: (t) => {
          let n = 0,
            r = t;
          for (; r;) ((n += r[e]), (r = r.offsetParent));
          return n;
        },
      })),
      (qO = /* @__PURE__ */ KO(`offsetLeft`, `offsetWidth`, `innerWidth`, `paddingLeft`, `right`)),
      (JO = /* @__PURE__ */ KO(`offsetTop`, `offsetHeight`, `innerHeight`, `paddingTop`, `bottom`)),
      (YO = {
        ...qO,
        sign: -1,
        direction: `left`,
        paddingStartProp: `paddingRight`,
        measureItem: (e, t) => {
          let n = e.offsetWidth,
            r = bg(e, t);
          return { start: r, end: r + n };
        },
        getCumulativeInset: (e) => {
          let t = 0,
            n = e;
          for (; n;) ((t += bg(n, n.offsetParent)), (n = n.offsetParent));
          return t;
        },
      }),
      (XO = { start: `flex-start`, end: `flex-end` }),
      (ZO = /* @__PURE__ */ E(Ag)),
      (QO = { start: 0, end: 0 }),
      ($O = { display: `flex`, position: `relative` }),
      (ek = {
        display: `flex`,
        position: `relative`,
        willChange: `transform`,
        listStyleType: `none`,
        padding: 0,
        margin: 0,
        justifyContent: `flex-start`,
      }),
      (tk = { duration: 0.2, ease: `linear` }),
      (nk = /* @__PURE__ */ (() => {
        let e = O(null);
        return ((e.displayName = `CarouselContext`), e);
      })()),
      (rk = { type: `spring`, stiffness: 200, damping: 40 }),
      (ik = { type: `spring`, stiffness: 80, damping: 10 }),
      (ak = { height: `100%`, width: `100%` }),
      (ok = /* @__PURE__ */ E(function (e, t) {
        let {
            children: n,
            carouselEffectStackDirection: r,
            carouselEffectAlign: i,
            carouselEffectGap: a,
            carouselEffectXOverflow: o,
            carouselEffectYOverflow: s,
            carouselEffectOverflow: c,
            carouselEffectLoop: l,
            carouselEffectAutoPlay: u,
            carouselEffectInterval: d,
            carouselEffectSnap: f,
            carouselEffectControls: p,
            as: m,
            ...h
          } = e,
          g = Zo(),
          _ = r?.startsWith(`column`) ? `y` : `x`,
          v = (_ === `x` ? (o ?? c ?? `visible`) : (s ?? c ?? `visible`)) === `visible`,
          y = qg(a, _),
          b = f === !0 ? `page` : f,
          x = mg(n),
          w = S(() => L.create(m), [m]);
        return /* @__PURE__ */ T(w, {
          ...h,
          ref: t,
          children: /* @__PURE__ */ C(Wg, {
            axis: _,
            align: i ?? `center`,
            gap: y,
            isStatic: g,
            itemSize: `manual`,
            overflow: v,
            loop: l,
            snap: b,
            items: x,
            style: ak,
            children: [u && /* @__PURE__ */ T(Kg, { intervalSeconds: d ?? 1.5 }), p],
          }),
        });
      })),
      (sk = /* @__PURE__ */ E(function (e, t) {
        let {
            children: n,
            as: r,
            tickerEffectVelocity: i,
            tickerEffectAlign: a,
            axis: o,
            directionModifier: s,
            hoverModifier: c,
            gap: l,
            overflow: u,
            playState: d,
            ...f
          } = e,
          p = r ?? L.div,
          m = Zo(),
          h = (d === `paused` ? 0 : (i ?? 100)) * s;
        return /* @__PURE__ */ T(ZO, {
          ref: t,
          as: p,
          ...f,
          gap: l,
          axis: o,
          align: a ?? `center`,
          isStatic: m,
          velocity: h,
          hoverFactor: c,
          itemSize: `manual`,
          overflow: u,
        });
      })),
      (ck = /* @__PURE__ */ E(function (e, t) {
        let {
            children: n,
            as: r,
            tickerEffectVelocity: i,
            tickerEffectAlign: a,
            axis: o,
            directionModifier: s,
            hoverModifier: c,
            gap: l,
            overflow: u,
            playState: d,
            ...f
          } = e,
          p = r ?? L.div,
          m = ni() === `rtl` && o === `x` ? -1 : 1,
          h = (d === `paused` ? 0 : (i ?? 100)) * s * m,
          _ = ze(0),
          v = g(0),
          y = g(!1),
          b = g(!1),
          x = g(!1),
          S = (e) => {
            x.current &&
              e.target &&
              e.target !== e.currentTarget &&
              (e.preventDefault(), e.stopPropagation());
          };
        return (
          me((e, t) => {
            let n = Math.abs(_.getVelocity()),
              r = b.current ? h * c : h;
            if (performance.now() > v.current && (!y.current || n < Math.abs(r))) {
              let e = (t / 1e3) * r,
                n = _.get() - e;
              ((y.current &&= (_.stop(), !1)), _.set(n));
            }
          }),
          M(() => {
            d === `paused` && _.stop();
          }, [d, _]),
          /* @__PURE__ */ T(ZO, {
            ref: t,
            as: p,
            ...f,
            gap: l,
            axis: o,
            align: a ?? `center`,
            itemSize: `manual`,
            overflow: u,
            _dragX: o === `x` ? _ : void 0,
            _dragY: o === `y` ? _ : void 0,
            offset: _,
            drag: o,
            dragMomentum: !0,
            onClickCapture: S,
            onDragStart: () => {
              x.current = !0;
            },
            onDragEnd: () => {
              ((v.current = performance.now()),
                (y.current = !0),
                setTimeout(() => {
                  x.current = !1;
                }, 5));
            },
            onMouseEnter: () => {
              b.current = !0;
            },
            onMouseLeave: () => {
              b.current = !1;
            },
          })
        );
      })),
      (lk = /* @__PURE__ */ (() => {
        let e = O(void 0);
        return ((e.displayName = `TickerContext`), e);
      })()),
      (uk = ({ onPlayStateChange: e, children: t }) => {
        let n = S(
          () => ({ start: () => c(() => e(`running`)), stop: () => c(() => e(`paused`)) }),
          [e]
        );
        return /* @__PURE__ */ T(lk.Provider, { value: n, children: t });
      }),
      (dk = /* @__PURE__ */ E(function (e, t) {
        let {
            children: n,
            tickerEffectDraggable: r,
            tickerEffectStackDirection: i,
            tickerEffectXOverflow: a,
            tickerEffectYOverflow: o,
            tickerEffectOverflow: s,
            tickerEffectGap: c,
            tickerEffectDirectionModifier: l,
            tickerEffectHoverModifier: u,
            tickerEffectPosition: d,
            tickerEffectIsDataRepeater: f,
            style: p,
            ...h
          } = e,
          g = Zo(),
          [_, v] = m(`running`),
          y = i?.startsWith(`column`) ? `y` : `x`,
          b = l === `reverse` ? -1 : 1,
          x = q(u) ? u / 100 : 1,
          S = (y === `x` ? (a ?? s ?? `visible`) : (o ?? s ?? `visible`)) === `visible`,
          C = Jg(c, y),
          w = mg(n),
          E = { ...p, "--ticker-cms-total-children": f ? w.length : void 0, position: d };
        return g || !r
          ? /* @__PURE__ */ T(uk, {
              onPlayStateChange: v,
              children: /* @__PURE__ */ T(sk, {
                ...h,
                style: E,
                ref: t,
                axis: y,
                gap: C,
                overflow: S,
                directionModifier: b,
                hoverModifier: x,
                items: w,
                playState: _,
              }),
            })
          : /* @__PURE__ */ T(uk, {
              onPlayStateChange: v,
              children: /* @__PURE__ */ T(ck, {
                ...h,
                style: E,
                ref: t,
                axis: y,
                gap: C,
                overflow: S,
                directionModifier: b,
                hoverModifier: x,
                items: w,
                playState: _,
              }),
            });
      })),
      (fk = (e) => (t) => {
        let { carouselEffectProps: n, tickerEffectProps: r, domProps: i } = Xg(t);
        return t.carouselEffectEnabled
          ? /* @__PURE__ */ T(ok, { ...n, ...i, as: e })
          : t.tickerEffectEnabled
            ? /* @__PURE__ */ T(dk, { ...r, ...i, as: e })
            : /* @__PURE__ */ T(e, { ...i });
      }),
      (pk = (e) =>
        j.forwardRef((t, n) => {
          let {
              flowEffectEnabled: r,
              flowEffectTransition: i,
              isNestedFlowEffect: a,
              transition: o,
              ...s
            } = t,
            c = S(() => (i ? { default: o, layout: i } : o), [o, i]);
          if (!r) return /* @__PURE__ */ T(e, { ...s, ref: n, transition: o });
          let l = /* @__PURE__ */ T(e, { ...s, ref: n });
          return (
            i && (l = /* @__PURE__ */ T(be, { transition: c, children: l })),
            a || (l = /* @__PURE__ */ T(ke, { children: l })),
            l
          );
        })),
      (mk = 1e4),
      (hk = /* @__PURE__ */ new Set([`rgba8`, `r8`, `rg16f`, `rgba16f`, `rgba32f`])),
      (gk = {
        time: { name: `u_time`, glslType: `float` },
        resolution: { name: `u_resolution`, glslType: `vec2` },
        deltaTime: { name: `u_deltaTime`, glslType: `float` },
        pixelRatio: { name: `u_pixelRatio`, glslType: `float` },
        mousePosition: { name: `u_mousePosition`, glslType: `vec4` },
        mousePointerDown: { name: `u_mousePointerDown`, glslType: `float` },
        mouseHover: { name: `u_mouseHover`, glslType: `float` },
      }),
      (_k = `webglcontextlost`),
      (vk = () => {}),
      (yk = class {
        gl;
        canvas;
        contextLostHandler;
        disposed = !1;
        pixelRatio = N === void 0 ? 1 : N.devicePixelRatio;
        resolutionScale;
        lastBufferWidth = 0;
        lastBufferHeight = 0;
        onContextLost;
        resources;
        textures = /* @__PURE__ */ new Map();
        get customTextureUnitBase() {
          return this.resources.bufferPasses.length;
        }
        constructor(e, t, n, r, i = vk, a = []) {
          ((this.resolutionScale = r), (this.canvas = e), (this.onContextLost = i));
          let o = e.getContext(`webgl2`, {
            alpha: !0,
            premultipliedAlpha: !1,
            antialias: !1,
            powerPreference: `default`,
            preserveDrawingBuffer: e instanceof OffscreenCanvas,
          });
          if (!o) throw Error(`WebGL2 not supported`);
          ((this.gl = o),
            (this.contextLostHandler = (e) => {
              (e.preventDefault(), this.dispose(), this.onContextLost?.());
            }),
            e.addEventListener(_k, this.contextLostHandler));
          try {
            this.resources = this.buildResources(t, n, a);
          } catch (t) {
            throw (e.removeEventListener(_k, this.contextLostHandler), t);
          }
          let { mainPass: s, bufferPasses: c } = this.resources;
          (o.clearColor(0, 0, 0, 0),
            c.length === 0 && (o.useProgram(s.program), o.bindVertexArray(s.vao)));
        }
        buildResources(e, t, n) {
          let { gl: r, canvas: i } = this,
            a = n.find((e) => c_(e.format));
          if (a && !r.getExtension(`EXT_color_buffer_float`))
            throw Error(
              `Shader buffer "${a.uniformName}" requested format "${a.format}" but the EXT_color_buffer_float extension is not available.`
            );
          let o = !a || !!r.getExtension(`OES_texture_float_linear`),
            s = this.compileShader(r.VERTEX_SHADER, e),
            c,
            l = [],
            u,
            d,
            f,
            p = [];
          try {
            c = this.linkFragmentProgram(s, t);
            for (let e of n) l.push([this.linkFragmentProgram(s, e.fragment), e]);
            ((u = t_(r, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]))),
              (d = t_(r, new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]))),
              (f = this.buildPassState(c, n, u, d)));
            for (let e = 0; e < l.length; e++) {
              let t = l[e];
              if (!t) continue;
              let [r, i] = t;
              p.push(this.buildBufferPass(r, i, n, o, e, u, d));
            }
            return (
              this.allocateBufferPassStorages(p, i.width, i.height),
              this.bindStaticSamplerUnits(f, p),
              { positionBuffer: u, texCoordBuffer: d, mainPass: f, bufferPasses: p }
            );
          } catch (e) {
            for (let e of p) this.disposeBufferPass(e);
            for (let e = p.length; e < l.length; e++) {
              let t = l[e];
              t && r.deleteProgram(t[0]);
            }
            throw (
              f ? this.disposePass(f) : c && r.deleteProgram(c),
              d && r.deleteBuffer(d),
              u && r.deleteBuffer(u),
              e
            );
          } finally {
            r.deleteShader(s);
          }
        }
        render(e, t, n, r) {
          this.disposed ||
            (this.resources.bufferPasses.length === 0
              ? this.renderSinglePass(e, t, n, r)
              : this.renderMultiPass(e, t, n, r));
        }
        renderSinglePass(e, t, n, r) {
          let {
            gl: i,
            canvas: a,
            resources: { mainPass: o },
          } = this;
          (this.updatePassBuiltIns(o, e, t, r, a.width, a.height),
            this.applyCustomUniforms(o, n, this.customTextureUnitBase),
            i.clear(i.COLOR_BUFFER_BIT),
            i.drawArrays(i.TRIANGLES, 0, 6));
        }
        renderMultiPass(e, t, n, r) {
          let {
            gl: i,
            canvas: a,
            resources: { mainPass: o, bufferPasses: s },
            customTextureUnitBase: c,
          } = this;
          for (let e of s)
            (i.activeTexture(i.TEXTURE0 + e.textureUnit),
              i.bindTexture(i.TEXTURE_2D, e.textures[+(e.writeIdx === 0)]));
          for (let a of s)
            (i.useProgram(a.program),
              i.bindVertexArray(a.vao),
              this.updatePassBuiltIns(a, e, t, r, a.width, a.height),
              this.applyCustomUniforms(a, n, c),
              i.bindFramebuffer(i.FRAMEBUFFER, a.fbos[a.writeIdx]),
              i.viewport(0, 0, a.width, a.height),
              i.clear(i.COLOR_BUFFER_BIT),
              i.drawArrays(i.TRIANGLES, 0, 6),
              i.activeTexture(i.TEXTURE0 + a.textureUnit),
              i.bindTexture(i.TEXTURE_2D, a.textures[a.writeIdx]),
              (a.writeIdx = +(a.writeIdx === 0)));
          (i.useProgram(o.program),
            i.bindVertexArray(o.vao),
            this.updatePassBuiltIns(o, e, t, r, a.width, a.height),
            this.applyCustomUniforms(o, n, c),
            i.bindFramebuffer(i.FRAMEBUFFER, null),
            i.viewport(0, 0, a.width, a.height),
            i.clear(i.COLOR_BUFFER_BIT),
            i.drawArrays(i.TRIANGLES, 0, 6));
        }
        resize() {
          if (this.disposed) return;
          let { canvas: e } = this;
          if (e instanceof OffscreenCanvas)
            throw Error(`resize() is not supported for OffscreenCanvas.`);
          let t = e.offsetWidth,
            n = e.offsetHeight,
            r = N.devicePixelRatio,
            i = Math.max(r * this.resolutionScale, 1);
          this.pixelRatio = i;
          let a = t * i,
            o = n * i;
          if (a !== this.lastBufferWidth || o !== this.lastBufferHeight) {
            ((this.lastBufferWidth = a),
              (this.lastBufferHeight = o),
              (e.width = a),
              (e.height = o),
              this.gl.viewport(0, 0, a, o));
            try {
              this.allocateBufferPassStorages(this.resources.bufferPasses, a, o);
            } catch (e) {
              throw (this.dispose(), e);
            }
          }
        }
        resizeOffscreenCanvas(e, t, n) {
          if (!this.disposed) {
            (n !== void 0 && (this.pixelRatio = n), this.gl.viewport(0, 0, e, t));
            try {
              this.allocateBufferPassStorages(this.resources.bufferPasses, e, t);
            } catch (e) {
              throw (this.dispose(), e);
            }
          }
        }
        finish() {
          this.disposed || this.gl.finish();
        }
        dispose() {
          if (this.disposed) return;
          ((this.disposed = !0), this.canvas.removeEventListener(_k, this.contextLostHandler));
          for (let [, e] of this.textures) e.source && !Zg(e.source) && Qg(e.source);
          if (this.gl.isContextLost()) return;
          let { gl: e, resources: t } = this;
          for (let e of t.bufferPasses) this.disposeBufferPass(e);
          (this.disposePass(t.mainPass),
            e.deleteBuffer(t.positionBuffer),
            e.deleteBuffer(t.texCoordBuffer));
          for (let [, t] of this.textures) e.deleteTexture(t.texture);
          this.textures.clear();
        }
        disposePass(e) {
          let { gl: t } = this;
          (t.deleteVertexArray(e.vao), t.deleteProgram(e.program));
        }
        disposeBufferPass(e) {
          let { gl: t } = this;
          this.disposePass(e);
          for (let n of e.textures) t.deleteTexture(n);
          for (let n of e.fbos) t.deleteFramebuffer(n);
        }
        buildPassState(e, t, n, r) {
          let { gl: i } = this,
            a = i.createVertexArray();
          if (!a) throw Error(`Failed to create vertex array object`);
          (i.bindVertexArray(a), n_(i, e, n, r), i.bindVertexArray(null));
          let o = r_(i, e),
            s = /* @__PURE__ */ new Map();
          for (let n of t) s.set(n.uniformName, i.getUniformLocation(e, n.uniformName));
          return {
            program: e,
            vao: a,
            builtInLocations: o,
            customLocations: /* @__PURE__ */ new Map(),
            bufferSamplerLocations: s,
          };
        }
        buildBufferPass(e, t, n, r, i, a, o) {
          let s = this.buildPassState(e, n, a, o),
            { gl: c } = this,
            l = s_(c, t.format),
            u = c_(t.format) && !r ? c.NEAREST : c.LINEAR,
            d = i_(c, u),
            f = i_(c, u),
            p = a_(c, d),
            m = a_(c, f);
          return (
            c.bindFramebuffer(c.FRAMEBUFFER, null),
            c.bindTexture(c.TEXTURE_2D, null),
            {
              ...s,
              uniformName: t.uniformName,
              resolutionScale: t.resolutionScale,
              format: t.format,
              internalFormat: l.internalFormat,
              uploadFormat: l.uploadFormat,
              pixelType: l.pixelType,
              width: 0,
              height: 0,
              textures: [d, f],
              fbos: [p, m],
              writeIdx: 0,
              textureUnit: i,
            }
          );
        }
        bindStaticSamplerUnits(e, t) {
          let { gl: n } = this,
            r = [e, ...t];
          for (let e of r) {
            n.useProgram(e.program);
            for (let r of t) {
              let t = e.bufferSamplerLocations.get(r.uniformName);
              t && n.uniform1i(t, r.textureUnit);
            }
          }
        }
        allocateBufferPassStorages(e, t, n) {
          for (let r of e) this.allocateBufferPassStorage(r, t, n);
        }
        allocateBufferPassStorage(e, t, n) {
          let { gl: r } = this,
            i = Math.max(1, Math.floor(t * e.resolutionScale)),
            a = Math.max(1, Math.floor(n * e.resolutionScale));
          if (i === e.width && a === e.height) return;
          ((e.width = i), (e.height = a));
          for (let t of e.textures)
            (r.bindTexture(r.TEXTURE_2D, t),
              r.texImage2D(
                r.TEXTURE_2D,
                0,
                e.internalFormat,
                i,
                a,
                0,
                e.uploadFormat,
                e.pixelType,
                null
              ));
          r.bindTexture(r.TEXTURE_2D, null);
          let [o, s, c, l] = r.getParameter(r.VIEWPORT);
          for (let t of e.fbos)
            (r.bindFramebuffer(r.FRAMEBUFFER, t),
              o_(r, e.uniformName, e.format),
              r.viewport(0, 0, i, a),
              r.clear(r.COLOR_BUFFER_BIT));
          (r.bindFramebuffer(r.FRAMEBUFFER, null), r.viewport(o, s, c, l));
        }
        compileShader(e, t) {
          let { gl: n } = this,
            r = n.createShader(e);
          if (!r) throw Error(`Failed to create shader`);
          if (
            (n.shaderSource(r, t), n.compileShader(r), !n.getShaderParameter(r, n.COMPILE_STATUS))
          ) {
            let t = n.getShaderInfoLog(r);
            n.deleteShader(r);
            let i = e === n.VERTEX_SHADER ? `Vertex` : `Fragment`;
            throw Error(`${i} shader compilation failed: ${t}`);
          }
          return r;
        }
        linkFragmentProgram(e, t) {
          let { gl: n } = this,
            r = this.compileShader(n.FRAGMENT_SHADER, t);
          try {
            let t = n.createProgram();
            if (!t) throw Error(`Failed to create program`);
            if (
              (n.attachShader(t, e),
              n.attachShader(t, r),
              n.linkProgram(t),
              !n.getProgramParameter(t, n.LINK_STATUS))
            ) {
              let e = n.getProgramInfoLog(t);
              throw (n.deleteProgram(t), Error(`Program linking failed: ${e}`));
            }
            return t;
          } finally {
            n.deleteShader(r);
          }
        }
        setUniform(e, t) {
          if (e !== null)
            switch (t.type) {
              case `boolean`:
                this.gl.uniform1f(e, +!!t.value);
                break;
              case `float`:
                this.gl.uniform1f(e, t.value);
                break;
              case `int`:
                this.gl.uniform1i(e, t.value);
                break;
              case `vec2`:
                this.gl.uniform2fv(e, t.value);
                break;
              case `vec4`:
                this.gl.uniform4fv(e, t.value);
                break;
              case `vec4[]`:
                this.gl.uniform4fv(e, t.value.flat());
            }
        }
        bindTexture(e, t, n) {
          let { gl: r, textures: i } = this,
            a = i.get(e),
            o = !a;
          if (o) {
            let t = r.createTexture();
            if (!t) return;
            ((a = { texture: t, source: null }), i.set(e, a));
          }
          a &&
            (r.activeTexture(r.TEXTURE0 + n),
            r.bindTexture(r.TEXTURE_2D, a.texture),
            Zg(t)
              ? this.uploadVideoFrame(a, t, o)
              : (o || a.source !== t) &&
                (a.source && !Zg(a.source) && Qg(a.source),
                (a.source = t),
                r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, t),
                r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE),
                r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE),
                r.generateMipmap(r.TEXTURE_2D),
                r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR_MIPMAP_LINEAR),
                r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR)));
        }
        uploadVideoFrame(e, t, n) {
          let { gl: r } = this;
          if (t.readyState < t.HAVE_CURRENT_DATA || t.seeking) return;
          let { videoWidth: i, videoHeight: a, currentTime: o } = t;
          i !== 0 &&
            a !== 0 &&
            (e.source && e.source !== t && !Zg(e.source) && Qg(e.source),
            n || e.source !== t || e.videoWidth !== i || e.videoHeight !== a
              ? (r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE),
                r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE),
                r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR),
                r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR),
                r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, t),
                (e.source = t),
                (e.videoWidth = i),
                (e.videoHeight = a),
                (e.videoTime = o))
              : e.videoTime !== o &&
                (r.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, r.RGBA, r.UNSIGNED_BYTE, t),
                (e.videoTime = o)));
        }
        applyCustomUniforms(e, t, n) {
          if (!t) return;
          let { gl: r } = this,
            i = n;
          for (let n in t) {
            let a = t[n];
            if (!a) continue;
            let o = e.customLocations.get(n);
            (o === void 0 &&
              ((o = r.getUniformLocation(e.program, n)), e.customLocations.set(n, o)),
              a.type === `sampler2D`
                ? (this.bindTexture(n, a.value, i), o !== null && r.uniform1i(o, i), i++)
                : this.setUniform(o, a));
          }
        }
        updatePassBuiltIns(e, t, n, r, i, a) {
          let { gl: o, pixelRatio: s } = this,
            c = e.builtInLocations;
          (c[gk.time.name] !== null && o.uniform1f(c[gk.time.name], t),
            c[gk.resolution.name] !== null && o.uniform2f(c[gk.resolution.name], i, a),
            c[gk.deltaTime.name] !== null && o.uniform1f(c[gk.deltaTime.name], n),
            c[gk.pixelRatio.name] !== null && o.uniform1f(c[gk.pixelRatio.name], s),
            c[gk.mousePosition.name] !== null && o.uniform4fv(c[gk.mousePosition.name], r.position),
            c[gk.mousePointerDown.name] !== null &&
              o.uniform1f(c[gk.mousePointerDown.name], r.pointerDown),
            c[gk.mouseHover.name] !== null && o.uniform1f(c[gk.mouseHover.name], r.hover));
        }
      }),
      (bk = `_heightmap`),
      (xk = `_length`),
      (Sk = `_buffer`),
      (Ck = /\W/gu),
      (wk = `#version 300 es`),
      (Tk = `precision highp float;`),
      (Ek = `in vec2 v_uv;`),
      (Dk = `out vec4 fragColor;`),
      (Ok = 0.5),
      (kk = `rgba8`),
      (Ak = `__framer_shaderConfig__`),
      (jk = /* @__PURE__ */ f(function ({ src: e }) {
        return e
          ? /* @__PURE__ */ T(fs, {
              image: { src: e, fit: `fill`, loading: `lazy` },
              draggable: !1,
              alt: ``,
            })
          : null;
      })),
      (Mk = class {
        loaders = /* @__PURE__ */ new Map();
        generated = /* @__PURE__ */ new Map();
        load(e, t) {
          let n = this.loaders.get(e);
          if (n) return n;
          let r = t();
          return (
            r.catch(() => {
              this.loaders.get(e) === r && this.loaders.delete(e);
            }),
            O_(this.loaders, 30),
            this.loaders.set(e, r),
            r
          );
        }
        generate(e, t) {
          let n = this.generated.get(e);
          if (n) return n;
          let r = t();
          if (r) return (O_(this.generated, 20), this.generated.set(e, r), r);
        }
        clear() {
          (this.loaders.clear(), this.generated.clear());
        }
        get loadedSize() {
          return this.loaders.size;
        }
        get generatedSize() {
          return this.generated.size;
        }
      }),
      (Nk = /* @__PURE__ */ new Mk()),
      (Pk = 1024),
      (Fk = class {
        byOwner = /* @__PURE__ */ new Map();
        acquire(e, t) {
          let n = this.byOwner.get(e);
          n || ((n = /* @__PURE__ */ new Map()), this.byOwner.set(e, n));
          let r = n.get(t);
          if (r) return r.promise;
          if (this.size >= 24)
            return Promise.reject(
              /* @__PURE__ */ Error(`Video decoder pool is full (max 24); "${t}" falls back.`)
            );
          let i = new AbortController(),
            a = e_(t, i.signal);
          return (
            a.catch(() => {
              n.get(t)?.promise === a && n.delete(t);
            }),
            n.set(t, { promise: a, controller: i }),
            a
          );
        }
        keepOnly(e, t) {
          let n = this.byOwner.get(e);
          if (n) {
            for (let [e, r] of n) t.has(e) || (n.delete(e), F_(r));
            n.size === 0 && this.byOwner.delete(e);
          }
        }
        releaseAll(e) {
          let t = this.byOwner.get(e);
          if (t) {
            for (let e of t.values()) F_(e);
            this.byOwner.delete(e);
          }
        }
        get size() {
          let e = 0;
          for (let t of this.byOwner.values()) e += t.size;
          return e;
        }
      }),
      (Ik = /* @__PURE__ */ new Fk()),
      (Lk = { position: `absolute`, inset: 0, width: `100%`, height: `100%` }),
      (Rk = 0.001),
      (zk = -999),
      (Bk = { position: [zk, zk, 0, 0], pointerDown: 0, hover: 0 }),
      (Vk = [`.mp4`, `.m4v`]),
      (Hk = `.svg`),
      (Uk = 4096),
      (Wk = {
        display: `block`,
        width: `100%`,
        height: `100%`,
        objectFit: `cover`,
        position: `absolute`,
        inset: 0,
      }),
      (Gk = { position: `absolute`, inset: 0 }),
      (Kk = /* @__PURE__ */ f(function ({ src: e, hidden: t = !1, onDisplaySrcChange: n }) {
        let [r, a] = m(e),
          [o, s] = m(void 0),
          [l, u] = m(r),
          d = g(null);
        r !== l && (s(l), u(r));
        let f = g(n);
        i(() => {
          f.current = n;
        }, [n]);
        let p = g(!0);
        if (
          (i(() => {
            p.current ? (p.current = !1) : o || f.current?.();
          }, [r]),
          M(() => {
            if (e === r) return;
            let t = !0;
            if (e) {
              let n = new Image();
              n.src = e;
              let r = () => (t ? c(() => a(e)) : void 0);
              typeof n.decode == `function` ? n.decode().then(r).catch(r) : (n.onload = r);
            } else c(() => a(void 0));
            return () => {
              t = !1;
            };
          }, [e, r]),
          M(() => {
            let e = d.current;
            if (!e || !o) return;
            let t = !1,
              n = e.animate([{ opacity: 0 }, { opacity: 1 }], {
                duration: 300,
                easing: `ease-in-out`,
                fill: `forwards`,
              });
            return (
              (n.onfinish = () => {
                t || (c(() => s(void 0)), f.current?.());
              }),
              () => {
                ((t = !0), n.cancel());
              }
            );
          }, [o]),
          !r)
        )
          return null;
        let h = { ...Lk, opacity: +!t, pointerEvents: t ? `none` : void 0 };
        return /* @__PURE__ */ C(`div`, {
          style: h,
          children: [
            o &&
              /* @__PURE__ */ T(
                `img`,
                { src: o, decoding: `async`, style: Wk, draggable: !1, alt: `` },
                `prev-${o}`
              ),
            /* @__PURE__ */ T(
              `div`,
              {
                ref: o ? d : void 0,
                style: Gk,
                children: /* @__PURE__ */ T(`img`, {
                  src: r,
                  style: Wk,
                  decoding: `async`,
                  draggable: !1,
                  alt: ``,
                }),
              },
              r
            ),
          ],
        });
      })),
      (qk = `#version 300 es
precision highp float;

in vec2 a_position;
in vec2 a_texCoord;

out vec2 v_uv;

void main() {
    v_uv = a_texCoord;
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`),
      (Jk = `#version 300 es
precision highp float;

in vec2 v_uv;
out vec4 fragColor;

void main() {
    fragColor = vec4(0.0);
}
`),
      (Yk = { noSlot: 0, singleFrame: 1, animate: 2 }),
      (Xk = /* @__PURE__ */ O(null)),
      (Zk = 300),
      (Qk = { display: `block`, width: `100%`, height: `100%` }),
      ($k = 250),
      (eA = /* @__PURE__ */ f(function ({
        mode: e,
        fallbackImage: t,
        skipInitialFallback: n,
        vertexShader: r,
        fragmentShader: a,
        animated: o,
        resolutionScale: s,
        uniforms: u,
        onError: d,
        onReady: f,
        singleFrame: p,
        onContextLost: h,
        onUniformResolutionSucceeded: v,
        onUniformResolutionFailed: y,
        heightmapSource: b,
        mouseDataRef: x,
        buffers: S,
      }) {
        let [w, E] = m(!1),
          [D, O] = m(!1),
          k = e === `progressive`,
          A = !!t,
          j = !!(n && A),
          P = k && A && !j,
          F = iv(P),
          I = g(f);
        i(() => {
          I.current = f;
        }, [f]);
        let ee = l(() => {
          (c(() => E(!0)), I.current?.());
        }, []);
        M(() => {
          if (!k || !w || !F) return;
          let e = N.setTimeout(() => {
            c(() => O(!0));
          }, $k);
          return () => {
            clearTimeout(e);
          };
        }, [k, F, w]);
        let L = P && !F,
          te = p || L || (k && !j && !D),
          ne = A && !j && (!F || !w);
        return /* @__PURE__ */ C(_, {
          children: [
            /* @__PURE__ */ T(`div`, {
              style: { ...Lk, opacity: +!L },
              children: /* @__PURE__ */ T(sv, {
                vertexShader: r,
                fragmentShader: a,
                animated: o,
                resolutionScale: s,
                singleFrame: te,
                uniforms: u,
                onError: d,
                onReady: ee,
                onContextLost: h,
                onUniformResolutionSucceeded: v,
                onUniformResolutionFailed: y,
                heightmapSource: b,
                mouseDataRef: x,
                buffers: S,
              }),
            }),
            t &&
              !j &&
              /* @__PURE__ */ T(`div`, {
                style: {
                  ...Lk,
                  opacity: +!!ne,
                  transition: `opacity 200ms ease-in-out`,
                  pointerEvents: `none`,
                },
                children: /* @__PURE__ */ T(jk, { src: t }),
              }),
          ],
        });
      })),
      (rA = { duration: 0 }),
      (iA = /* @__PURE__ */ E(function (
        {
          mode: e = `instant`,
          fallbackImage: t,
          skipInitialFallback: r,
          placeholder: a,
          style: o,
          width: s,
          height: u,
          vertexShader: d,
          fragmentShader: f,
          animated: p,
          uniforms: h,
          onError: g,
          onReady: _,
          resolutionScale: v,
          poolId: y,
          isSelected: b = !1,
          isMultiSelected: x = !1,
          isPreviewActive: S = !1,
          heightmapSource: w,
          mouse: E,
          buffers: D,
          ...O
        },
        k
      ) {
        let A = Rc(k),
          j = Qi(),
          N = G.current() === G.preview && j === `preview`,
          P = !!(t && (r || N)),
          F = yd(),
          I = pv(A, F ? void 0 : E),
          [ee, L] = m(P),
          te = l((e) => {
            c(() => L(e.isIntersecting));
          }, []);
        VC(A, te, { threshold: 0, enabled: !0 });
        let ne = n(),
          re = hv(y ?? ne, b, ee);
        M(() => {
          performance.mark?.(`shader_register`);
        }, []);
        let {
            isFallbackOnly: ie,
            effectiveAnimated: ae,
            effectiveSingleFrame: oe,
            effectiveMode: se,
            shouldSkipFallbackOverlay: ce,
            onContextLost: R,
            onUniformResolutionSucceeded: z,
            onUniformResolutionFailed: le,
          } = rv(re, b, x, ee, e, p, P, S),
          [ue, de] = m(!1);
        i(() => {
          ie && c(() => de(!1));
        }, [ie]);
        let B = l(() => {
            (c(() => de(!0)), _?.());
          }, [_]),
          fe = {
            vertexShader: d,
            fragmentShader: f,
            uniforms: h,
            resolutionScale: v,
            onError: g,
            onContextLost: R,
            onUniformResolutionSucceeded: z,
            onUniformResolutionFailed: le,
            heightmapSource: w,
            buffers: D,
          },
          pe = { style: o, width: s, height: u, ...O };
        if (F) {
          let e = !ie && (P || ue);
          return /* @__PURE__ */ C(aA, {
            ref: A,
            ...pe,
            children: [
              !ie &&
                /* @__PURE__ */ T(eA, {
                  mode: se,
                  skipInitialFallback: ce,
                  onReady: B,
                  ...fe,
                  animated: ae,
                  singleFrame: oe,
                  mouseDataRef: I,
                }),
              /* @__PURE__ */ T(Kk, { src: t, hidden: e }),
              ie && !t && a,
            ],
          });
        }
        return ie
          ? /* @__PURE__ */ T(aA, {
              ref: A,
              ...pe,
              children: ce && !ee ? null : /* @__PURE__ */ T(jk, { src: t }),
            })
          : /* @__PURE__ */ T(aA, {
              ref: A,
              ...pe,
              children: /* @__PURE__ */ T(eA, {
                mode: se,
                fallbackImage: t,
                skipInitialFallback: ce,
                onReady: _,
                ...fe,
                animated: ae,
                singleFrame: oe,
                mouseDataRef: I,
              }),
            });
      })),
      (aA = /* @__PURE__ */ E(function ({ children: e, style: t, ...n }, r) {
        let i = { borderRadius: `inherit`, cornerShape: `inherit`, ...t, overflow: `hidden` };
        return /* @__PURE__ */ T(PC, {
          ref: r,
          __fromCanvasComponent: !0,
          style: i,
          ...n,
          componentType: `Shader`,
          children: e,
        });
      })),
      (oA = /* @__PURE__ */ j.createContext(void 0)),
      (sA = () => j.useContext(oA)),
      (cA = (e) => e.target.value),
      (lA = {
        "data-1p-ignore": !0,
        "data-lpignore": !0,
        "data-form-type": `other`,
        autocomplete: `off`,
      }),
      (uA = /* @__PURE__ */ E(function (e, t) {
        let {
            "aria-label": n,
            "aria-labelledby": r,
            "aria-describedby": i,
            autoFocus: a,
            className: o,
            inputName: s,
            max: u,
            min: d,
            placeholder: f,
            required: p,
            step: m,
            style: h,
            type: g,
            maxLength: _,
            value: v,
            defaultValue: y,
            autofillEnabled: b,
            onChange: x,
            onBlur: S,
            onInvalid: w,
            onFocus: E,
            onValid: D,
            onClear: O,
            ...k
          } = e,
          A = _v(v ?? y, g),
          [j, M, N] = gv(A ?? ``, !0, x),
          P = Sa(A),
          F = l(() => {
            (M(``), O && c(() => O()));
          }, [O, M]),
          I = gt(D, w, N, S, E),
          ee = l(
            (e) => {
              e.target === e.currentTarget && P.current?.focus();
            },
            [P]
          );
        if (g === `hidden`)
          return /* @__PURE__ */ T(L.input, { type: `hidden`, name: s, defaultValue: y });
        let te = b === !1 ? lA : void 0,
          ne = !!j,
          re = !!O && ne,
          ie = Xl(dA, zt, o, g === `text` && fA, g === `textarea` && pA);
        return /* @__PURE__ */ C(L.div, {
          ref: t,
          onClick: ee,
          style: h,
          className: ie,
          ...k,
          children: [
            g === `textarea`
              ? /* @__PURE__ */ T(L.textarea, {
                  ref: P,
                  ...te,
                  ...I,
                  "aria-label": n,
                  "aria-labelledby": r,
                  "aria-describedby": i,
                  required: p,
                  autoFocus: a,
                  name: s,
                  placeholder: f,
                  className: Rt,
                  value: j,
                  maxLength: _,
                })
              : /* @__PURE__ */ T(L.input, {
                  ref: P,
                  ...te,
                  ...I,
                  "aria-label": n,
                  "aria-labelledby": r,
                  "aria-describedby": i,
                  type: g,
                  required: p,
                  autoFocus: a,
                  name: s,
                  placeholder: f,
                  className: Xl(Rt, !ne && `framer-form-input-empty`),
                  value: j,
                  min: d,
                  max: u,
                  step: m,
                  maxLength: _,
                }),
            re &&
              /* @__PURE__ */ T(`button`, {
                type: `button`,
                className: mA,
                onClick: F,
                "aria-label": `Clear`,
                children: /* @__PURE__ */ T(vv, {}),
              }),
          ],
        });
      })),
      (dA = `framer-form-text-input`),
      (fA = `framer-form-text-input-type`),
      (pA = `framer-form-textarea-input-type`),
      (mA = `framer-form-text-input-clear`),
      (hA = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path d="m1.5 8 7-7M9 5.5l-3 3" stroke="%23999" stroke-width="1.5" stroke-linecap="round"></path></svg>`),
      (gA = `<svg xmlns="http://www.w3.org/2000/svg" transform="scale(-1, 1)" width="14" height="14"><path d="m1.5 8 7-7M9 5.5l-3 3" stroke="%23999" stroke-width="1.5" stroke-linecap="round"></path></svg>`),
      (_A = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="rgb(153, 153, 153)" d="M3 5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2H3Z" opacity=".3"/><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-width="1.5" d="M3.25 5.25a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2ZM3 6.75h9.5"/></svg>`),
      (vA = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-width="1.5" d="M2.5 8a5.5 5.5 0 1 1 11 0 5.5 5.5 0 1 1-11 0Z"/><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.75 8.25v-3m0 3h2"/></svg>`),
      (yA = /* @__PURE__ */ aC(
        uA,
        [
          ...Ht,
          ...Gt,
          ...Ut,
          K(`.${zt}`, {
            boxShadow: K.variable(`--framer-input-box-shadow`),
            borderTopLeftRadius: K.variable(`--framer-input-border-radius-top-left`),
            borderTopRightRadius: K.variable(`--framer-input-border-radius-top-right`),
            borderBottomRightRadius: K.variable(`--framer-input-border-radius-bottom-right`),
            borderBottomLeftRadius: K.variable(`--framer-input-border-radius-bottom-left`),
            cornerShape: K.variable(`--framer-input-corner-shape`),
            background: K.variable(`--framer-input-background`),
            transition: K.variable(`--framer-input-focused-transition`),
            transitionProperty: `background, box-shadow`,
          }),
          K(`.${dA} .${Rt}::placeholder`, {
            color: K.variable(`--framer-input-placeholder-color`),
          }),
          K(`.${dA}`, {
            display: `flex`,
            alignItems: `center`,
            padding: K.variable(`--framer-input-padding`),
          }),
          K(`.${dA} .${Rt}`, { flex: 1, minWidth: 0, width: `auto`, padding: 0 }),
          K(`.${dA}.${pA}`, { padding: 0 }),
          K(`.${dA}.${pA} textarea.${Rt}`, {
            width: `100%`,
            padding: K.variable(`--framer-input-padding`),
          }),
          K(`.${dA} .${Rt}[type="date"], .${dA} .${Rt}[type="time"]`, {
            "-webkit-appearance": `none`,
            appearance: `none`,
          }),
          K(`.${dA} .${Rt}::-webkit-date-and-time-value`, { textAlign: `start` }),
          K(`.${dA} textarea`, {
            display: `flex`,
            resize: K.variable(`--framer-textarea-resize`),
            overflowY: `auto`,
            minHeight: `inherit`,
            maxHeight: `inherit`,
            whiteSpace: `break-spaces`,
          }),
          K(`.${dA} textarea::-webkit-resizer`, { background: `no-repeat ${ct(hA)}` }),
          K(`.${dA}:dir(rtl) textarea::-webkit-resizer`, { background: `no-repeat ${ct(gA)}` }),
          K(`.${dA} textarea::-webkit-scrollbar`, { cursor: `pointer`, background: `transparent` }),
          K(`.${dA} textarea::-webkit-scrollbar-thumb:window-inactive`, { opacity: 0 }),
          K(`.${dA} textarea::-webkit-scrollbar-corner`, {
            background: `none`,
            backgroundColor: `transparent`,
            outline: `none`,
          }),
          K(`.${dA} .${Rt}::-webkit-datetime-edit`, {
            height: K.variable(`--framer-input-font-line-height`),
          }),
          K(`.${dA} .${Rt}.${Bt}::-webkit-datetime-edit`, {
            color: K.variable(`--framer-input-placeholder-color`),
            "-webkit-text-fill-color": K.variable(`--framer-input-placeholder-color`),
            overflow: `visible`,
          }),
          K(`.${dA}.${fA}::before`, {
            content: K.variable(`--framer-input-icon-content`, `none`),
            display: `block`,
            flexShrink: 0,
            width: `16px`,
            height: `16px`,
            marginRight: `8px`,
            ...Jt,
            backgroundPosition: `center`,
            maskPosition: `center`,
            maskImage: K.variable(`--framer-input-icon-mask-image`),
            backgroundImage: K.variable(`--framer-input-icon-image`),
          }),
          K(`.${dA} .${Rt}[type="date"]::before, .${dA} .${Rt}[type="time"]::before`, {
            ...Yt,
            paddingLeft: `10px`,
            maskPosition: `10px center`,
            backgroundPosition: `10px center`,
          }),
          K(`.${dA} .${Rt}[type="date"]::before`, {
            maskImage: K.variable(`--framer-input-icon-mask-image`, ct(_A)),
            backgroundImage: K.variable(`--framer-input-icon-image`),
          }),
          K(`.${dA} .${Rt}[type="time"]::before`, {
            maskImage: K.variable(`--framer-input-icon-mask-image`, ct(vA)),
            backgroundImage: K.variable(`--framer-input-icon-image`),
          }),
          K(`.${dA} .${Rt}::-webkit-calendar-picker-indicator`, {
            opacity: 0,
            position: `absolute`,
            right: 0,
            top: 0,
            bottom: 0,
            padding: K.variable(`--framer-input-padding`),
            paddingTop: 0,
            paddingBottom: 0,
            width: `16px`,
            height: `100%`,
          }),
          K(`.${dA}:focus-within, .${dA}.${Vt}`, {
            boxShadow: K.variable(`--framer-input-focused-box-shadow`, `--framer-input-box-shadow`),
            background: K.variable(
              `--framer-input-focused-background`,
              `--framer-input-background`
            ),
          }),
          K(`.${dA}:focus-within::after, .${dA}.${Vt}::after`, {
            borderColor: K.variable(
              `--framer-input-focused-border-color`,
              `--framer-input-border-color`
            ),
            borderStyle: K.variable(
              `--framer-input-focused-border-style`,
              `--framer-input-border-style`
            ),
            borderWidth: K.variable(`--framer-input-focused-border-width`, Wt),
          }),
          K(`.${mA}`, {
            display: `flex`,
            order: 2,
            alignItems: `center`,
            justifyContent: `center`,
            flexShrink: 0,
            width: `16px`,
            height: `16px`,
            marginLeft: `8px`,
            padding: 0,
            border: `none`,
            background: `transparent`,
            cursor: `pointer`,
            color: K.variable(`--framer-input-placeholder-color`),
            transition: `color 0.15s ease`,
            outline: `none`,
          }),
          K(`.${mA}:hover, .${mA}:focus-visible`, {
            color: K.variable(`--framer-input-font-color`),
          }),
        ],
        `framer-lib-form-plain-text-input`
      )),
      (bA = {
        x: void 0,
        y: void 0,
        z: 0,
        translateX: void 0,
        translateY: void 0,
        translateZ: 0,
        rotate: void 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: void 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: void 0,
        originY: void 0,
        originZ: void 0,
        perspective: 0,
        transformPerspective: 0,
      }),
      (xA = { opacity: 0 }),
      (SA = { opacity: 1 }),
      (CA = /* @__PURE__ */ kv(
        /* @__PURE__ */ j.forwardRef(function (e, t) {
          let {
              background: n,
              children: r,
              alt: i,
              draggable: a,
              fitImageDimension: o,
              style: s,
              ...l
            } = e,
            u = { ...s },
            d = S(() => Us(n), [n]),
            [f, p] = m();
          j.useEffect(() => {
            if (!n?.src || !o || d) return;
            let e = document.createElement(`img`);
            ((e.onload = () => {
              e.naturalWidth &&
                e.naturalHeight &&
                c(() => p({ width: e.naturalWidth, height: e.naturalHeight }));
            }),
              (e.src = n.src));
          }, [n?.src, o, d]);
          let h = d ?? f;
          (o && h && ((u[o] = `auto`), (u.aspectRatio = h.width / h.height)),
            n && delete u.background);
          let g = Ws(e.as);
          return /* @__PURE__ */ C(g, {
            ...l,
            style: u,
            ref: t,
            draggable: a,
            children: [n && /* @__PURE__ */ T(fs, { image: n, alt: i, draggable: a }), r],
          });
        })
      )),
      (wA = /* @__PURE__ */ j.memo(function ({
        trackCount: e,
        rowGap: t,
        parentIsDataRepeater: n = !1,
        itemsOrder: r,
        children: i,
      }) {
        let a = Mv(i, n);
        r?.length && (a = jv(a, r));
        let o = Nv(e, a),
          s = Pv(t);
        return o.map((e, t) => /* @__PURE__ */ T(`div`, { style: s, children: e }, Fv(t)));
      })),
      (TA = (e) =>
        E(function (
          {
            columnMasonryLayoutEnabled: t,
            trackCount: n = 1,
            rowGap: r,
            parentIsDataRepeater: i,
            itemsOrder: a,
            children: o,
            style: s,
            ...c
          },
          l
        ) {
          if (!t) return /* @__PURE__ */ T(e, { ref: l, style: s, ...c, children: o });
          let u = { ...s, gridTemplateColumns: `repeat(${n}, 1fr)` };
          return /* @__PURE__ */ T(e, {
            ref: l,
            style: u,
            ...c,
            children: /* @__PURE__ */ T(wA, {
              trackCount: n,
              rowGap: r,
              parentIsDataRepeater: i,
              itemsOrder: a,
              children: o,
            }),
          });
        })),
      (DA = !jr() && typeof Document < `u` && typeof Document.parseHTMLUnsafe == `function`),
      (OA =
        /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi),
      (kA = `{{ text-placeholder }}`),
      (AA = `rich-text-wrapper`),
      (jA = /* @__PURE__ */ Ys(
        /* @__PURE__ */ E(function (e, n) {
          let {
              id: r,
              name: i,
              html: a,
              htmlFromDesign: o,
              text: s,
              textFromDesign: c,
              fonts: l = [],
              width: u,
              height: d,
              left: f,
              right: p,
              top: m,
              bottom: h,
              center: _,
              className: v,
              stylesPresetsClassName: y,
              visible: b = !0,
              opacity: x,
              rotation: C = 0,
              verticalAlignment: w = `top`,
              isEditable: E = !1,
              environment: D = G.current,
              withExternalLayout: O = !1,
              positionSticky: k,
              positionStickyTop: A,
              positionStickyRight: j,
              positionStickyBottom: N,
              positionStickyLeft: P,
              __htmlStructure: F,
              __fromCanvasComponent: I = !1,
              _forwardedOverrideId: ee,
              _forwardedOverrides: te,
              _usesDOMRect: ne,
              children: re,
              ...ie
            } = e,
            ae = Is(),
            oe = tc(e),
            se = g(null),
            ce = n ?? se,
            { navigate: R, getRoute: z } = jn(),
            le = Nn();
          (ii(e.preload ?? []), sc(e, ce));
          let ue = t(dC),
            de = yd(),
            B = s,
            fe = ee ?? r;
          if (fe && te) {
            let e = te[fe];
            typeof e == `string` && (B = e);
          }
          let pe = ``;
          if (B) {
            let e = zv(B);
            pe = F ? F.replace(kA, e) : `<p>${e}</p>`;
          } else if (a) pe = a;
          else if (c) {
            let e = zv(c);
            pe = F ? F.replace(kA, e) : `<p>${e}</p>`;
          } else o && (pe = o);
          let me = Hd(),
            he = S(() => (de || !z || !le ? pe : Bv(pe, z, le, me)), [pe, z, le, me]);
          if (
            (M(() => {
              let e = ce.current;
              if (e === null) return;
              function t(e) {
                let t = Id(e.target, ce.current);
                !Rr(e) &&
                  R &&
                  t &&
                  t.getAttribute(`target`) !== `_blank` &&
                  Td(R, t, me) &&
                  e.preventDefault();
              }
              return (
                e.addEventListener(`click`, t),
                () => {
                  e.removeEventListener(`click`, t);
                }
              );
            }, [R, me]),
            Uv(l, I, ce),
            !b)
          )
            return null;
          let ge = E && D() === G.canvas,
            _e = {
              outline: `none`,
              display: `flex`,
              flexDirection: `column`,
              justifyContent: Hv(w),
              opacity: ge ? 0 : x,
              flexShrink: 0,
            },
            ve = G.hasRestrictions(),
            ye = Ns(e, ae || 0, !1),
            be = ne && (u === `auto` || d === `auto`),
            xe = !!e.transformTemplate || !ye || !ve || I || be,
            Se = xe ? (e.transformTemplate ?? ec(_)) : void 0;
          if (!O) {
            if (ye && ve && !be) {
              let e = eS.getNumber(C).toFixed(4);
              ((_e.transform = `translate(${ye.x}px, ${ye.y}px) rotate(${e}deg)`),
                (_e.width = ye.width),
                (_e.minWidth = ye.width),
                (_e.height = ye.height));
            } else
              ((_e.left = f),
                (_e.right = p),
                (_e.top = m),
                (_e.bottom = h),
                (_e.width = u),
                (_e.height = d),
                (_e.rotate = C));
            k
              ? (!de || ue) &&
                ((_e.position = `sticky`),
                (_e.willChange = `transform`),
                (_e.top = A),
                (_e.right = j),
                (_e.bottom = N),
                (_e.left = P))
              : de && (e.positionFixed || e.positionAbsolute) && (_e.position = `absolute`);
          }
          return (
            Kl(e, _e),
            Ul(e, _e),
            Object.assign(_e, e.style),
            /* @__PURE__ */ T(L.div, {
              id: r,
              ref: ce,
              ...Lv(MS(ie)),
              ...Zs(xe ? _ : void 0, e.style),
              style: _e,
              layoutId: oe,
              "data-framer-name": i,
              "data-framer-component-type": `DeprecatedRichText`,
              "data-center": _,
              className: Xl(v, y, AA),
              transformTemplate: Se,
              dangerouslySetInnerHTML: { __html: he },
            })
          );
        })
      )),
      (MA = {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        filter: `none`,
      }),
      (NA =
        /\p{Regional_Indicator}{2}|\p{Emoji}\p{Emoji_Modifier}?\p{Variation_Selector}?(?:\u{200d}\p{Emoji}\p{Emoji_Modifier}?\p{Variation_Selector}?)*|./gu),
      (PA = /* @__PURE__ */ E(function (e, t) {
        return /* @__PURE__ */ T(`svg`, { ...e, ref: t, children: e.children });
      })),
      (FA = /* @__PURE__ */ L.create(PA)),
      (IA = /* @__PURE__ */ E(function ({ viewBoxScale: e, viewBox: t, children: n, ...r }, i) {
        return /* @__PURE__ */ T(FA, {
          ...r,
          ref: i,
          viewBox: t,
          children: /* @__PURE__ */ T(L.foreignObject, {
            width: `100%`,
            height: `100%`,
            className: `framer-fit-text`,
            transform: `scale(${e})`,
            style: { overflow: `visible`, transformOrigin: `center center` },
            children: n,
          }),
        });
      })),
      (LA = []),
      (RA = `RichTextContainer`),
      (zA = /* @__PURE__ */ E(function (e, n) {
        let {
            __fromCanvasComponent: r = !1,
            _forwardedOverrideId: i,
            _forwardedOverrides: a,
            _usesDOMRect: o,
            anchorLinkOffsetY: s,
            as: c,
            bottom: l,
            center: u,
            children: d,
            environment: f = G.current,
            fonts: p = LA,
            height: m,
            isEditable: h = !1,
            left: _,
            name: v,
            opacity: y,
            positionSticky: b,
            positionStickyBottom: x,
            positionStickyLeft: C,
            positionStickyRight: w,
            positionStickyTop: E,
            right: D,
            rotation: O = 0,
            style: k,
            _initialStyle: A,
            stylesPresetsClassNames: j,
            text: M,
            top: N,
            verticalAlignment: P = `top`,
            visible: F = !0,
            width: I,
            withExternalLayout: ee = !1,
            viewBox: L,
            viewBoxScale: te = 1,
            effect: ne,
            ...re
          } = e,
          ie = Is(),
          ae = f(),
          oe = ae === G.canvas,
          se = oe || ae === G.export,
          ce = t(dC),
          R = tc(e),
          z = g(null),
          le = n ?? z;
        (sc(e, le), Uv(p, r, le));
        let ue = Qv(ne, le),
          de = S(() => {
            if (d) return ay(d, j, M, s, void 0, ue.getTokenizer());
          }, [d, j, M, s, ue]);
        if (!F) return null;
        let B = { opacity: h && oe ? 0 : y },
          fe = Hv(P);
        fe !== Qt.justifyContent && (B.justifyContent = fe);
        let pe = {},
          me = G.hasRestrictions(),
          he = Ns(e, ie || 0, !1),
          ge = o && (I === `auto` || m === `auto`),
          _e = !!e.transformTemplate || !he || !me || r || ge,
          ve = _e ? (e.transformTemplate ?? ec(u)) : void 0;
        (ee ||
          (he && me && !ge
            ? ((pe.x = he.x + (H(k?.x) ? k.x : 0)),
              (pe.y = he.y + (H(k?.y) ? k.y : 0)),
              (pe.left = 0),
              (pe.top = 0),
              (B.rotate = eS.getNumber(O)),
              (B.width = he.width),
              (B.minWidth = he.width),
              (B.height = he.height))
            : ((B.left = _),
              (B.right = D),
              (B.top = N),
              (B.bottom = l),
              (B.width = I),
              (B.height = m),
              (B.rotate = O)),
          b
            ? (!se || ce) &&
              ((B.position = `sticky`),
              (B.willChange = `transform`),
              (B.top = E),
              (B.right = w),
              (B.bottom = x),
              (B.left = C))
            : oe && (e.positionFixed || e.positionAbsolute) && (B.position = `absolute`)),
          Kl(e, B),
          Ul(e, B),
          Object.assign(B, A, k, pe),
          R && (re.layout = `preserve-aspect`));
        let ye = Ws(e.as),
          be = re[`data-framer-name`] ?? v,
          xe = Lv(MS(re)),
          Se = Zs(_e ? u : void 0, k);
        return V(e.viewBox)
          ? e.as === void 0
            ? /* @__PURE__ */ T(IA, {
                ...xe,
                ...Se,
                ref: le,
                style: B,
                layoutId: R,
                viewBox: L,
                viewBoxScale: te,
                transformTemplate: ve,
                "data-framer-name": be,
                "data-framer-component-type": RA,
                children: de,
              })
            : /* @__PURE__ */ T(ye, {
                ...xe,
                ...Se,
                ref: le,
                style: B,
                layoutId: R,
                transformTemplate: ve,
                "data-framer-name": be,
                "data-framer-component-type": RA,
                children: /* @__PURE__ */ T(IA, {
                  viewBox: L,
                  viewBoxScale: te,
                  style: { width: `100%`, height: `100%` },
                  children: de,
                }),
              })
          : /* @__PURE__ */ T(ye, {
              ...xe,
              ...Se,
              ref: le,
              style: B,
              layoutId: R,
              transformTemplate: ve,
              "data-framer-name": be,
              "data-framer-component-type": RA,
              children: de,
            });
      })),
      (BA = /* @__PURE__ */ Ys(
        /* @__PURE__ */ E(function ({ children: e, html: t, htmlFromDesign: n, ...r }, i) {
          let a = t || e || n;
          if (V(a)) {
            !r.stylesPresetsClassName &&
              U(r.stylesPresetsClassNames) &&
              (r.stylesPresetsClassName = Object.values(r.stylesPresetsClassNames).join(` `));
            let e = { [V(t) ? `html` : `htmlFromDesign`]: a };
            return /* @__PURE__ */ T(jA, { ...r, ...e, ref: i });
          }
          if (!r.stylesPresetsClassNames && V(r.stylesPresetsClassName)) {
            let [e, t, n, i, a] = r.stylesPresetsClassName.split(` `);
            e === void 0 || t === void 0 || n === void 0 || i === void 0 || a === void 0
              ? console.warn(
                  `Encountered invalid stylesPresetsClassNames: ${r.stylesPresetsClassNames}`
                )
              : (r.stylesPresetsClassNames = { h1: e, h2: t, h3: n, p: i, a });
          }
          return /* @__PURE__ */ T(zA, { ...r, ref: i, children: w(a) ? a : void 0 });
        })
      )),
      (VA = `framer/asset-reference,`),
      (HA = ({
        id: e,
        path: t,
        transform: n,
        repeat: r,
        width: i,
        height: a,
        offsetX: o,
        offsetY: s,
      }) => {
        let c = vy(t);
        return /* @__PURE__ */ T(`pattern`, {
          id: e,
          width: r ? i : `100%`,
          height: r ? a : `100%`,
          patternContentUnits: r ? void 0 : `objectBoundingBox`,
          patternUnits: r ? `userSpaceOnUse` : void 0,
          x: r ? o : void 0,
          y: r ? s : void 0,
          children: /* @__PURE__ */ T(
            `image`,
            {
              width: r ? i : 1,
              height: r ? a : 1,
              href: c,
              preserveAspectRatio: `none`,
              transform: r ? void 0 : n,
              x: r ? 0 : void 0,
              y: r ? 0 : void 0,
            },
            c
          ),
        });
      }),
      (UA = /* @__PURE__ */ Mr()),
      (WA = class {
        id;
        svg;
        innerHTML;
        viewBox;
        count;
        constructor(e, t, n, r, i = 0) {
          ((this.id = e),
            (this.svg = t),
            (this.innerHTML = n),
            (this.viewBox = r),
            (this.count = i));
        }
      }),
      (GA = `position: absolute; overflow: hidden; bottom: 0; left: 0; width: 0; height: 0; z-index: 0; contain: strict`),
      (KA = class {
        entries = /* @__PURE__ */ new Map();
        vectorSetItems = /* @__PURE__ */ new Map();
        debugGetEntries() {
          return this.entries;
        }
        subscribe(e, t, n, r) {
          if (!e || e === ``) return ``;
          let i = this.entries.get(e);
          if (!i) {
            n ||= `svg${String(vC(e))}_${String(e.length)}`;
            let a = e,
              o,
              s = by(e);
            (s &&
              (t && xy(s, n),
              (s.id = n),
              (o = Ey(s)),
              s.removeAttribute(`xmlns`),
              s.removeAttribute(`xlink`),
              s.removeAttribute(`xmlns:xlink`),
              (a = s.outerHTML)),
              (i = this.createDOMElementFor(a, n, o, r)),
              this.entries.set(e, i));
          }
          return ((i.count += 1), i.innerHTML);
        }
        getViewBox(e) {
          if (e && e !== ``) return this.entries.get(e)?.viewBox;
        }
        unsubscribe(e) {
          if (!e || e === ``) return;
          let t = this.entries.get(e);
          t && (--t.count, !(t.count > 0) && setTimeout(() => this.maybeRemoveEntry(e), 5e3));
        }
        maybeRemoveEntry(e) {
          let t = this.entries.get(e);
          t && (t.count > 0 || (this.entries.delete(e), this.removeDOMElement(t)));
        }
        removeDOMElement(e) {
          UA && document?.getElementById(e.id)?.remove();
        }
        getOrCreateTemplateContainer() {
          let e = document.getElementById(`svg-templates`);
          if (e) return e;
          let t = document.createElement(`div`);
          return (
            (t.id = `svg-templates`),
            (t.ariaHidden = `true`),
            (t.style.cssText = GA),
            document.body.appendChild(t),
            t
          );
        }
        maybeAppendTemplate(e, t) {
          if (document.getElementById(e)) return;
          let n = document.createElement(`div`);
          n.innerHTML = t;
          let r = n.firstElementChild;
          r && ((r.id = e), this.getOrCreateTemplateContainer().appendChild(r));
        }
        createDOMElementFor(e, t, n, r) {
          UA && this.maybeAppendTemplate(t, e);
          let i = n ? `0 0 ${n.width} ${n.height}` : void 0,
            a = i ? ` viewBox="${i}"` : ``;
          return new WA(
            t,
            e,
            `<svg style="width:100%;height:100%;${r ? `overflow: visible;` : ``}"${a}><use href="#${t}"/></svg>`,
            i
          );
        }
        template(e, t) {
          return (
            this.vectorSetItems.get(e) ||
              (this.vectorSetItems.set(e, { svg: t, count: 0 }), !UA) ||
              this.maybeAppendTemplate(e, t),
            `#${e}`
          );
        }
        subscribeToTemplate(e) {
          let t = this.vectorSetItems.get(e);
          if (t)
            return (
              t.count++,
              () => {
                let t = this.vectorSetItems.get(e);
                t &&
                  (t.count--,
                  !(t.count > 0) &&
                    setTimeout(() => {
                      this.vectorSetItems.get(e)?.count ||
                        (this.vectorSetItems.delete(e),
                        UA && document?.getElementById(e)?.remove());
                    }, 5e3));
              }
            );
        }
        clear() {
          this.entries.clear();
        }
        generateTemplates() {
          let e = [];
          return (
            e.push(`<div id="svg-templates" style="${GA}" aria-hidden="true">`),
            this.entries.forEach((t) => e.push(t.svg)),
            this.vectorSetItems.forEach((t, n) => {
              let r = t.svg;
              e.push(r.includes(`id="${n}"`) ? r : r.replace(/^<svg/u, `<svg id="${n}"`));
            }),
            e.push(`</div>`),
            e.join(`
`)
          );
        }
      }),
      (qA = /* @__PURE__ */ new KA()),
      (JA = {
        cm: 96 / 2.54,
        mm: 96 / 2.54 / 10,
        Q: 96 / 2.54 / 40,
        in: 96,
        pc: 16,
        pt: 96 / 72,
        px: 1,
        em: 16,
        ex: 8,
        ch: 8,
        rem: 16,
      }),
      (YA = /* @__PURE__ */ E(function (e, t) {
        let n = Is(),
          r = tc(e),
          i = j.useRef(null),
          a = t ?? i,
          o = sA();
        return (
          sc(e, i),
          /* @__PURE__ */ T(ZA, {
            ...e,
            innerRef: a,
            parentSize: n,
            layoutId: r,
            providedWindow: o,
          })
        );
      })),
      (XA = 5e4),
      (ZA = class e extends _C {
        static supportsConstraints = !0;
        static defaultSVGProps = {
          left: void 0,
          right: void 0,
          top: void 0,
          bottom: void 0,
          style: void 0,
          _constraints: { enabled: !0, aspectRatio: null },
          parentSize: 0,
          rotation: 0,
          visible: !0,
          svg: ``,
          shadows: [],
        };
        static defaultProps = { ..._C.defaultProps, ...e.defaultSVGProps };
        static frame(e) {
          return Ns(e, e.parentSize || 0);
        }
        container = j.createRef();
        svgElement = null;
        setSVGElement = (e) => {
          ((this.svgElement = e), this.setLayerElement(e));
        };
        previouslyRenderedSVG = ``;
        get frame() {
          return Ns(this.props, this.props.parentSize || 0);
        }
        unmountedSVG = ``;
        componentDidMount() {
          if (this.unmountedSVG) {
            let { svgContentId: e } = this.props,
              t = e ? `svg${e}` : null;
            (qA.subscribe(this.unmountedSVG, !e, t),
              (this.previouslyRenderedSVG = this.unmountedSVG));
          }
          this.props.svgContentId || Ay(this.container, this.props);
        }
        componentWillUnmount() {
          (qA.unsubscribe(this.previouslyRenderedSVG),
            (this.unmountedSVG = this.previouslyRenderedSVG),
            (this.previouslyRenderedSVG = ``));
        }
        componentDidUpdate(e) {
          if ((super.componentDidUpdate(e), this.props.svgContentId)) return;
          let { fill: t } = this.props;
          (KS.isImageObject(t) &&
            KS.isImageObject(e.fill) &&
            t.src !== e.fill.src &&
            fc(this.svgElement, `fill`, null, !1),
            Ay(this.container, this.props));
        }
        collectLayout(e, t) {
          if (this.props.withExternalLayout) {
            ((t.width = `100%`), (t.height = `100%`), (t.aspectRatio = `inherit`));
            return;
          }
          let n = this.frame,
            {
              rotation: r,
              intrinsicWidth: i,
              intrinsicHeight: a,
              width: o,
              height: s,
            } = this.props,
            c = eS.getNumber(r);
          if (
            ((e.opacity = q(this.props.opacity) ? this.props.opacity : 1), G.hasRestrictions() && n)
          ) {
            (Object.assign(e, {
              transform: `translate(${n.x}px, ${n.y}px) rotate(${c.toFixed(4)}deg)`,
              width: `${n.width}px`,
              height: `${n.height}px`,
            }),
              As(this.props) && (e.position = `absolute`));
            let r = n.width / (i || 1),
              o = n.height / (a || 1);
            t.transformOrigin = `top left`;
            let { zoom: s, target: l } = Nt;
            if (l === G.export) {
              let e = s > 1 ? s : 1;
              ((t.transform = `scale(${r * e}, ${o * e})`), (t.zoom = 1 / e));
            } else t.transform = `scale(${r}, ${o})`;
            i && a && ((t.width = i), (t.height = a));
            return;
          }
          let { left: l, right: u, top: d, bottom: f } = this.props;
          (Object.assign(e, {
            left: l,
            right: u,
            top: d,
            bottom: f,
            width: o,
            height: s,
            rotate: c,
          }),
            Object.assign(t, { left: 0, top: 0, bottom: 0, right: 0, position: `absolute` }));
        }
        render() {
          let {
            id: e,
            visible: t,
            style: n,
            fill: r,
            svg: i,
            intrinsicHeight: a,
            intrinsicWidth: o,
            title: s,
            description: c,
            layoutId: l,
            className: u,
            variants: d,
            withExternalLayout: f,
            innerRef: p,
            svgContentId: m,
            height: h,
            opacity: g,
            width: v,
            requiresOverflowVisible: y,
            ...b
          } = this.props;
          if (!f && (!t || !e)) return null;
          let x = e ?? l ?? `svg`,
            S = this.frame,
            w = S || { width: o || 100, height: a || 100 },
            E = { ...n, imageRendering: `pixelated`, flexShrink: 0 },
            D = {};
          (this.collectLayout(E, D),
            Vl(this.props, E),
            Kl(this.props, E),
            _C.applyWillChange(this.props, E, !1));
          let O = null;
          if (typeof r == `string` || X.isColorObject(r)) {
            let e = X.isColorObject(r) ? r.initialValue || X.toRgbString(r) : r;
            ((E.fill = e), (E.color = e));
          } else if (TC.isLinearGradient(r)) {
            let t = r,
              n = `${encodeURI(e || ``)}g${TC.hash(t)}`;
            E.fill = `url(#${n})`;
            let { stops: i, x1: a, x2: o, y1: s, y2: c } = uy(t, x);
            O = /* @__PURE__ */ T(`svg`, {
              ref: this.setSVGElement,
              width: `100%`,
              height: `100%`,
              style: { position: `absolute` },
              role: `presentation`,
              children: /* @__PURE__ */ T(`linearGradient`, {
                id: n,
                x1: a,
                x2: o,
                y1: s,
                y2: c,
                children: i.map((e, t) =>
                  /* @__PURE__ */ T(
                    `stop`,
                    { offset: e.position, stopColor: e.color, stopOpacity: e.alpha },
                    t
                  )
                ),
              }),
            });
          } else if (DC.isRadialGradient(r)) {
            let t = r,
              n = `${encodeURI(e || ``)}g${DC.hash(t)}`;
            E.fill = `url(#${n})`;
            let i = dy(t, x);
            O = /* @__PURE__ */ T(`svg`, {
              ref: this.setSVGElement,
              width: `100%`,
              height: `100%`,
              style: { position: `absolute` },
              role: `presentation`,
              children: /* @__PURE__ */ T(`radialGradient`, {
                id: n,
                cy: t.centerAnchorY,
                cx: t.centerAnchorX,
                r: t.widthFactor,
                children: i.stops.map((e, t) =>
                  /* @__PURE__ */ T(
                    `stop`,
                    { offset: e.position, stopColor: e.color, stopOpacity: e.alpha },
                    t
                  )
                ),
              }),
            });
          } else if (KS.isImageObject(r)) {
            let e = gy(r, w, x);
            e &&
              ((E.fill = `url(#${e.id})`),
              (O = /* @__PURE__ */ T(`svg`, {
                ref: this.setSVGElement,
                width: `100%`,
                height: `100%`,
                style: { position: `absolute` },
                role: `presentation`,
                children: /* @__PURE__ */ T(`defs`, { children: /* @__PURE__ */ T(HA, { ...e }) }),
              })));
          }
          let k = { "data-framer-component-type": `SVG` },
            A = !S;
          Object.assign(k, Zs(A ? this.props.center : void 0, this.props.style));
          let j =
              !y &&
              !O &&
              !E.fill &&
              !E.background &&
              !E.backgroundImage &&
              i.length < XA &&
              !Dy(i) &&
              !Oy(i),
            M = null;
          if (j)
            ((E.backgroundSize = `100% 100%`),
              (E.backgroundImage = ct(i)),
              qA.unsubscribe(this.previouslyRenderedSVG),
              (this.previouslyRenderedSVG = ``));
          else {
            let e = m ? `svg${m}` : null,
              t = qA.subscribe(i, !m, e, y);
            (qA.unsubscribe(this.previouslyRenderedSVG),
              (this.previouslyRenderedSVG = i),
              ky(E) && (E.overflow = `hidden`),
              (M = /* @__PURE__ */ C(_, {
                children: [
                  O,
                  /* @__PURE__ */ T(
                    `div`,
                    {
                      className: `svgContainer`,
                      style: D,
                      ref: this.container,
                      dangerouslySetInnerHTML: { __html: t },
                    },
                    KS.isImageObject(r) ? r.src : ``
                  ),
                ],
              })));
          }
          let N = Ws(this.props.as),
            { href: P, target: F, rel: I, onClick: ee, onTap: L } = this.props,
            te = s || c;
          return /* @__PURE__ */ T(N, {
            ...k,
            ...Lv(MS(b)),
            layoutId: l,
            transformTemplate: A ? ec(this.props.center) : void 0,
            id: e,
            ref: p,
            style: E,
            className: u,
            variants: d,
            tabIndex: this.props.tabIndex,
            role: te ? `img` : void 0,
            "aria-label": s,
            "aria-description": c,
            "aria-hidden": te ? void 0 : `true`,
            onTap: L,
            onClick: ee,
            href: P,
            target: F,
            rel: I,
            children: M,
          });
        }
      }),
      (QA = /* @__PURE__ */ Ys(YA)),
      ($A = 1e3),
      (ej = `Variable`),
      (tj = `explicitInter`),
      (Ce.prototype.addChild = function ({ transformer: e = (e) => e }) {
        let t = z(e(this.get()));
        return (this.onChange((n) => t.set(e(n))), t);
      }));
  }))();
}
export {
  LT as $,
  sC as A,
  TA as At,
  Fy as B,
  tn as Bt,
  BA as C,
  Mh as Ct,
  jy as D,
  ug as Dt,
  wT as E,
  yy as Et,
  Pw as F,
  fk as Ft,
  Ob as G,
  Ny as H,
  jw as I,
  $b as It,
  nj as J,
  Ia as K,
  Nw as L,
  G as Lt,
  C_ as M,
  pk as Mt,
  BS as N,
  cu as Nt,
  Py as O,
  aC as Ot,
  Jy as P,
  Wy as Pt,
  Da as Q,
  Mw as R,
  un as Rt,
  aD as S,
  Yh as St,
  iA as T,
  jn as Tt,
  zl as U,
  Iy as V,
  ln as Vt,
  Nh as W,
  $y as X,
  gn as Y,
  qs as Z,
  ci as _,
  yd as _t,
  CT as a,
  Gy as at,
  Dw as b,
  ei as bt,
  OE as c,
  qA as ct,
  GT as d,
  Lu as dt,
  Yl as et,
  CA as f,
  Bn as ft,
  Jx as g,
  Gc as gt,
  lE as h,
  Vh as ht,
  cT as i,
  Ky as it,
  Xl as j,
  aT as jt,
  Rl as k,
  dg as kt,
  yA as l,
  Ca as lt,
  cb as m,
  gd as mt,
  Ld as n,
  LO as nt,
  sw as o,
  Pd as ot,
  WT as p,
  Nn as pt,
  pn as q,
  Iu as r,
  Gh as rt,
  Jo as s,
  fT as st,
  Nd as t,
  Xa as tt,
  Sw as u,
  Lh as ut,
  Xp as v,
  Zo as vt,
  QA as w,
  zn as wt,
  PO as x,
  Za as xt,
  JT as y,
  ti as yt,
  iC as z,
  ft as zt,
};
//# sourceMappingURL=framer.CEpgxWGc.mjs.map
