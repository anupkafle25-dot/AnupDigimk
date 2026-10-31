import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  A as t,
  C as n,
  O as r,
  P as i,
  S as a,
  _ as o,
  b as s,
  c as ee,
  j as c,
  l,
  o as u,
  p as d,
  s as f,
  w as p,
  y as m,
} from "./react.p3VyPFJt.mjs";
import { D as h, U as g, i as te, o as _, t as v, w as y } from "./motion.QrWBa877.mjs";
import {
  At as b,
  B as x,
  C as S,
  Ct as ne,
  Dt as re,
  E as C,
  H as w,
  J as T,
  Lt as E,
  Nt as D,
  O,
  Ot as k,
  P as A,
  S as j,
  T as ie,
  Tt as ae,
  U as oe,
  V as M,
  W as se,
  _t as N,
  a as P,
  b as F,
  bt as I,
  dt as ce,
  f as L,
  ft as le,
  g as ue,
  gt as de,
  h as fe,
  ht as pe,
  i as R,
  j as z,
  jt as me,
  k as he,
  mt as ge,
  n as _e,
  nt as ve,
  o as B,
  u as ye,
  ut as be,
  wt as xe,
  xt as Se,
  y as Ce,
} from "./framer.CEpgxWGc.mjs";
import {
  C as we,
  D as Te,
  E as Ee,
  M as De,
  O as Oe,
  S as V,
  T as ke,
  d as Ae,
  f as H,
  g as je,
  h as Me,
  i as Ne,
  j as U,
  l as Pe,
  m as W,
  p as Fe,
  r as Ie,
  u as Le,
  w as Re,
  x as ze,
} from "./toplevel-deps.C-kiZ8rO.mjs";
import { _ as Be, g as Ve, h as He, n as Ue, t as We, v as Ge } from "./shared-lib.DyVg47t3.mjs";
import { n as Ke, t as qe } from "./BS_aIWztT.lorCK4Ub.mjs";
import {
  S as Je,
  _ as Ye,
  a as Xe,
  b as Ze,
  c as Qe,
  f as $e,
  h as et,
  i as tt,
  l as nt,
  m as rt,
  n as it,
  o as at,
  r as ot,
  s as st,
  t as ct,
  u as lt,
  y as ut,
} from "./NumberCounter_2.CqhhJLCi.mjs";
import { i as dt, n as ft, r as pt, t as mt } from "./b4Vi5dGVu.rsNNFa5h.mjs";
import { i as ht, n as gt, r as _t, t as vt } from "./TvB1KcdPP.DYPBTdbv.mjs";
import {
  a as yt,
  c as bt,
  d as xt,
  f as St,
  i as Ct,
  l as wt,
  n as Tt,
  o as Et,
  r as Dt,
  s as Ot,
  t as kt,
  u as At,
} from "./q02gAgqMp.17HoXGLM.mjs";
import { n as jt, t as Mt } from "./j67jpleOs.vPlBIaC9.mjs";
import { i as Nt, t as Pt } from "./wt7eQU6AQ.BHMc4clc.mjs";
import { n as Ft, t as It } from "./egdXKqnr5.C8ZEK5DQ.mjs";
import { a as Lt, i as Rt } from "./IF3lVCAg9.kEKkYgdj.mjs";
function zt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Bt, Vt, Ht, Ut, Wt, Gt, Kt, qt, Jt, Yt, G;
function Xt() {
  return (Xt = e(() => {
    (f(),
      T(),
      v(),
      p(),
      at(),
      (Bt = x(Xe)),
      (Vt = [`x56EKWvGI`, `pWd5pN4rC`]),
      (Ht = `framer-Bh8uB`),
      (Ut = { pWd5pN4rC: `framer-v-177eu2c`, x56EKWvGI: `framer-v-1lbg3p3` }),
      (Wt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Gt = ({ value: e, children: n }) => {
        let r = t(_),
          i = e ?? r.transition,
          a = c(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ u(_.Provider, { value: a, children: n });
      }),
      (Kt = { "Icon Small": `pWd5pN4rC`, Icon: `x56EKWvGI` }),
      (qt = h.create(i)),
      (Jt = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Kt[r.variant] ?? r.variant ?? `x56EKWvGI`,
      })),
      (Yt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (G = k(
        /* @__PURE__ */ d(function (e, t) {
          let r = s(null),
            i = t ?? r,
            a = n(),
            { activeLocale: o, setLocale: ee } = I();
          ce();
          let { style: c, className: l, layoutId: d, variant: f, ...p } = Jt(e),
            {
              baseVariant: m,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: v,
              gestureVariant: y,
              isLoading: b,
              setGestureState: x,
              setVariant: S,
              variants: ne,
            } = re({
              cycleOrder: Vt,
              defaultVariant: `x56EKWvGI`,
              ref: i,
              variant: f,
              variantClassNames: Ut,
            }),
            C = Yt(e, ne),
            w = z(Ht);
          return /*#__PURE__*/ u(te, {
            id: d ?? a,
            children: /*#__PURE__*/ u(qt, {
              animate: ne,
              initial: !1,
              children: /*#__PURE__*/ u(Gt, {
                value: Wt,
                children: /*#__PURE__*/ u(h.div, {
                  ...p,
                  ...v,
                  className: z(w, `framer-1lbg3p3`, l, g),
                  "data-framer-name": `Icon`,
                  layoutDependency: C,
                  layoutId: `x56EKWvGI`,
                  ref: i,
                  style: {
                    backgroundColor: `var(--token-546c97ad-1a15-42de-a692-c00043b436f2, rgb(255, 255, 255))`,
                    borderBottomLeftRadius: 80.45,
                    borderBottomRightRadius: 80.45,
                    borderTopLeftRadius: 80.45,
                    borderTopRightRadius: 80.45,
                    ...c,
                  },
                  ...zt({ pWd5pN4rC: { "data-framer-name": `Icon Small` } }, m, y),
                  children: /*#__PURE__*/ u(Xe, {
                    animated: !0,
                    className: `framer-1kxq24f`,
                    layoutDependency: C,
                    layoutId: `l8Bgouvr6`,
                    style: {
                      "--1m6trwb": 1,
                      "--21h8s6": `var(--token-385efb18-273b-4274-97fe-e0c9e9a7b6b4, rgb(0, 0, 0))`,
                      "--pgex8v": 1.5,
                    },
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-Bh8uB.framer-o5os97, .framer-Bh8uB .framer-o5os97 { display: block; }`,
          `.framer-Bh8uB.framer-1lbg3p3 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 20.11px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 20.11px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-Bh8uB .framer-1kxq24f { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 49px); position: relative; width: 48px; }`,
          `.framer-Bh8uB.framer-v-177eu2c.framer-1lbg3p3 { padding: 10px; }`,
          `.framer-Bh8uB.framer-v-177eu2c .framer-1kxq24f { height: var(--framer-aspect-ratio-supported, 35px); width: 35px; }`,
        ],
        `framer-Bh8uB`
      )),
      (G.displayName = `Play Icon Cursor`),
      (G.defaultProps = { height: 88.5, width: 88.5 }),
      he(G, {
        variant: {
          options: [`x56EKWvGI`, `pWd5pN4rC`],
          optionTitles: [`Icon`, `Icon Small`],
          title: `Variant`,
          type: B.Enum,
        },
      }),
      O(G, [{ explicitInter: !0, fonts: [] }, ...Bt], { supportsExplicitInterCodegen: !0 }));
  }))();
}
function Zt(e) {
  let {
    width: t,
    height: n,
    topLeft: r,
    topRight: i,
    bottomRight: a,
    bottomLeft: o,
    id: s,
    children: ee,
    ...c
  } = e;
  return c;
}
function Qt(e) {
  let t = Zt(e);
  return /*#__PURE__*/ u(sn, { ...t });
}
function $t(e) {
  let t = de(),
    n = s(!1),
    i = s(!1),
    a = r((t) => {
      if (!e.current) return;
      let n = (t === 1 ? 0.999 : t) * e.current.duration,
        r = Math.abs(e.current.currentTime - n) < 0.1;
      e.current.duration > 0 && !r && (e.current.currentTime = n);
    }, []);
  return {
    play: r(() => {
      let r = e.current;
      r &&
        ((r.preload = `auto`),
        !(
          r.currentTime > 0 &&
          r.onplaying &&
          !r.paused &&
          !r.ended &&
          r.readyState >= r.HAVE_CURRENT_DATA
        ) &&
          r &&
          !n.current &&
          t &&
          ((n.current = !0),
          (i.current = !0),
          r
            .play()
            .catch((e) => {})
            .finally(() => (n.current = !1))));
    }, []),
    pause: r(() => {
      e.current && !n.current && (e.current.pause(), (i.current = !1));
    }, []),
    setProgress: a,
    isPlaying: i,
  };
}
function en({ playingProp: e, muted: t, loop: n, playsinline: r, controls: i }) {
  let [a] = o(() => e),
    [s, ee] = o(!1);
  e !== a && !s && ee(!0);
  let c = a && t && n && r && !i && !s,
    l;
  return ((l = c ? `on-viewport` : a ? `on-mount` : `no-autoplay`), l);
}
function tn(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function nn(e) {
  return (e.match(/[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu) || []).map(tn).join(` `);
}
var rn, an, on, sn, cn;
function ln() {
  return (ln = e(() => {
    (f(),
      T(),
      v(),
      nt(),
      p(),
      (function (e) {
        ((e.Fill = `fill`),
          (e.Contain = `contain`),
          (e.Cover = `cover`),
          (e.None = `none`),
          (e.ScaleDown = `scale-down`));
      })((rn ||= {})),
      (function (e) {
        ((e.Video = `Upload`), (e.Url = `URL`));
      })((an ||= {})),
      (on = `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`),
      (sn = /*#__PURE__*/ a(function (e) {
        let {
            srcType: t = `URL`,
            srcUrl: n,
            srcFile: r = ``,
            posterEnabled: i = !1,
            controls: a = !1,
            playing: o = !0,
            loop: ee = !0,
            muted: l = !0,
            playsinline: d = !0,
            restartOnEnter: f = !1,
            objectFit: p = `cover`,
            backgroundColor: h = `rgba(0,0,0,0)`,
            radius: te = 0,
            volume: _ = 25,
            startTime: v = 0,
            poster: b,
            playing: x,
            progress: S,
            onSeeked: ne,
            onPause: re,
            onPlay: C,
            onEnd: w,
            onClick: T,
            onMouseEnter: D,
            onMouseLeave: O,
            onMouseDown: k,
            onMouseUp: A,
          } = e,
          j = s(),
          ie = Ye(),
          ae = s(null),
          oe = s(null),
          M = rt(),
          se = et(),
          N = M || se === E.export,
          P = $e(e),
          F = N
            ? `no-autoplay`
            : en({ playingProp: x, muted: l, loop: ee, playsinline: d, controls: a }),
          I = N ? !0 : g(j),
          ce = !N && g(j, { margin: `10%`, once: !0 }),
          L = v === 100 ? 99.9 : v,
          { play: le, pause: ue, setProgress: de, isPlaying: fe } = $t(j);
        (m(() => {
          N || (F !== `on-viewport` && (x ? le() : ue()));
        }, [F, x]),
          m(() => {
            N || (I && x && F !== `no-autoplay` && le(), F === `on-viewport` && ue());
          }, [F, I, x]),
          m(() => {
            !M || b || i || L || !j.current || (j.current.currentTime = 0.01);
          }, [i, b, L]));
        let pe = s(!1);
        (m(() => {
          if (!pe.current) {
            pe.current = !0;
            return;
          }
          let e = y(S) ? S.get() : (S ?? 0) * 0.01;
          de((e ?? 0) || (L ?? 0) / 100);
        }, [L, r, n, S]),
          m(() => {
            if (y(S)) return S.on(`change`, (e) => de(e));
          }, [S]),
          ut(() => {
            ae.current !== null && j.current && ((!oe && ee) || !ae.current) && le();
          }),
          Ze(() => {
            j.current && ((oe.current = j.current.ended), (ae.current = j.current.paused), ue());
          }));
        let R = c(() => {
          if (t === `URL`) return n + ``;
          if (t === `Upload`) return r + ``;
        }, [t, r, n, L]);
        return (
          m(() => {
            ie && j.current && F === `on-mount` && setTimeout(() => le(), 50);
          }, []),
          m(() => {
            j.current && !l && (j.current.volume = (_ ?? 0) / 100);
          }, [_]),
          /*#__PURE__*/ u(`video`, {
            onClick: T,
            onMouseEnter: D,
            onMouseLeave: O,
            onMouseDown: k,
            onMouseUp: A,
            src: R,
            loop: ee,
            ref: j,
            onSeeked: (e) => ne?.(e),
            onPause: (e) => re?.(e),
            onPlay: (e) => C?.(e),
            onEnded: (e) => w?.(e),
            autoPlay: fe.current || F === `on-mount` || (x && F === `on-viewport` && I),
            preload: fe.current
              ? `auto`
              : N && !b
                ? `metadata`
                : F !== `on-mount` && !ce
                  ? `none`
                  : `metadata`,
            poster:
              i && !r && n === on
                ? `https://framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg`
                : i && b
                  ? b
                  : void 0,
            onLoadedData: () => {
              let e = j.current;
              e &&
                (e.currentTime < 0.3 && L > 0 && de((L ?? 0) * 0.01),
                (fe.current || F === `on-mount` || (x && F === `on-viewport` && I)) && le());
            },
            controls: a,
            muted: N ? !0 : l,
            playsInline: d,
            style: {
              cursor: T ? `pointer` : `auto`,
              width: `100%`,
              height: `100%`,
              borderRadius: P,
              display: `block`,
              objectFit: p,
              backgroundColor: h,
              objectPosition: `50% 50%`,
            },
          })
        );
      })),
      (Qt.displayName = `Video`),
      (cn = [`cover`, `fill`, `contain`, `scale-down`, `none`]),
      he(Qt, {
        srcType: {
          type: B.Enum,
          displaySegmentedControl: !0,
          title: `Source`,
          options: [`URL`, `Upload`],
        },
        srcUrl: {
          type: B.String,
          title: `URL`,
          defaultValue: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
          hidden(e) {
            return e.srcType === `Upload`;
          },
        },
        srcFile: {
          type: B.File,
          title: `File`,
          allowedFileTypes: [`mp4`, `webm`],
          hidden(e) {
            return e.srcType === `URL`;
          },
        },
        playing: { type: B.Boolean, title: `Playing`, enabledTitle: `Yes`, disabledTitle: `No` },
        ...lt,
        posterEnabled: {
          type: B.Boolean,
          title: `Poster`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
        },
        poster: {
          type: B.Image,
          title: `Image`,
          hidden: ({ posterEnabled: e }) => !e,
          description: `We recommend adding a poster. [Learn more](https://www.framer.com/help/articles/how-are-videos-optimized-in-framer/).`,
        },
        backgroundColor: { type: B.Color, title: `Background`, defaultValue: `rgba(0,0,0,0)` },
        startTime: { title: `Start Time`, type: B.Number, min: 0, max: 100, step: 0.1, unit: `%` },
        loop: { type: B.Boolean, title: `Loop`, enabledTitle: `Yes`, disabledTitle: `No` },
        objectFit: { type: B.Enum, title: `Fit`, options: cn, optionTitles: cn.map(nn) },
        controls: {
          type: B.Boolean,
          title: `Controls`,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
          defaultValue: !1,
        },
        muted: { type: B.Boolean, title: `Muted`, enabledTitle: `Yes`, disabledTitle: `No` },
        volume: {
          type: B.Number,
          max: 100,
          min: 0,
          unit: `%`,
          hidden: ({ muted: e }) => e,
          defaultValue: 25,
        },
        onEnd: { type: B.EventHandler },
        onSeeked: { type: B.EventHandler },
        onPause: { type: B.EventHandler },
        onPlay: { type: B.EventHandler },
        ...Je,
      }));
  }))();
}
function un(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var dn, fn, pn, mn, hn, gn, _n, vn, yn, bn, xn, Sn, Cn, wn, Tn, En, Dn, On, K;
function kn() {
  return (kn = e(() => {
    (f(),
      T(),
      v(),
      p(),
      Xt(),
      ln(),
      Qe(),
      (dn = x(Qt)),
      (fn = x(G)),
      (pn = D(me(h.div))),
      (mn = oe(st)),
      (hn = [`kt4GV4tJA`, `kYn5IGWyb`, `OQaSnTuMF`, `MISHtEuxr`]),
      (gn = `framer-NWH93`),
      (_n = {
        kt4GV4tJA: `framer-v-pr3x0a`,
        kYn5IGWyb: `framer-v-atxjqq`,
        MISHtEuxr: `framer-v-1pmzybz`,
        OQaSnTuMF: `framer-v-1bb2b5w`,
      }),
      (vn = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { delay: 0.3, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: `tween` },
        x: 0,
        y: 0,
      }),
      (yn = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 30,
      }),
      (bn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (xn = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e.src
          : typeof e == `string`
            ? e
            : void 0),
      (Sn = (e, t) => `translate(-50%, -50%) ${t}`),
      (Cn = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (wn = ({ value: e, children: n }) => {
        let r = t(_),
          i = e ?? r.transition,
          a = c(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ u(_.Provider, { value: a, children: n });
      }),
      (Tn = {
        "Mobile Pause": `OQaSnTuMF`,
        "Mobile Playing": `MISHtEuxr`,
        "Video Pause": `kt4GV4tJA`,
        "Video Playing": `kYn5IGWyb`,
      }),
      (En = h.create(i)),
      (Dn = ({
        cursor: e,
        cursor2: t,
        height: n,
        id: r,
        poster: i,
        videoFile: a,
        width: o,
        ...s
      }) => ({
        ...s,
        A1DmE1Zxn: t ?? s.A1DmE1Zxn,
        bBsOnIO8s: e ?? s.bBsOnIO8s,
        H1_kbvtPp: i ??
          s.H1_kbvtPp ?? {
            pixelHeight: 2160,
            pixelWidth: 3840,
            src: `https://framerusercontent.com/images/Phag8gRECrPFuAul2CXvBk8BfOI.jpg?width=3840&height=2160`,
            srcSet: `https://framerusercontent.com/images/Phag8gRECrPFuAul2CXvBk8BfOI.jpg?scale-down-to=512&width=3840&height=2160 512w,https://framerusercontent.com/images/Phag8gRECrPFuAul2CXvBk8BfOI.jpg?scale-down-to=1024&width=3840&height=2160 1024w,https://framerusercontent.com/images/Phag8gRECrPFuAul2CXvBk8BfOI.jpg?scale-down-to=2048&width=3840&height=2160 2048w,https://framerusercontent.com/images/Phag8gRECrPFuAul2CXvBk8BfOI.jpg?width=3840&height=2160 3840w`,
          },
        variant: Tn[s.variant] ?? s.variant ?? `kt4GV4tJA`,
        zP7W0Xh67:
          a ?? s.zP7W0Xh67 ?? `https://framerusercontent.com/assets/2aIaonOFW8QIZp8muUIsZ8U9Es.mp4`,
      })),
      (On = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (K = k(
        /* @__PURE__ */ d(function (e, t) {
          let r = s(null),
            i = t ?? r,
            a = n(),
            { activeLocale: o, setLocale: ee } = I(),
            c = ce(),
            {
              style: d,
              className: f,
              layoutId: p,
              variant: m,
              bBsOnIO8s: h,
              A1DmE1Zxn: g,
              zP7W0Xh67: _,
              H1_kbvtPp: v,
              ...y
            } = Dn(e),
            {
              baseVariant: b,
              classNames: x,
              clearLoadingGesture: S,
              gestureHandlers: ne,
              gestureVariant: w,
              isLoading: T,
              setGestureState: E,
              setVariant: D,
              variants: O,
            } = re({
              cycleOrder: hn,
              defaultVariant: `kt4GV4tJA`,
              ref: i,
              variant: m,
              variantClassNames: _n,
            }),
            k = On(e, O),
            { activeVariantCallback: A, delay: j } = be(b),
            ie = A(async (...e) => {
              (E({ isPressed: !1 }), D(`kYn5IGWyb`));
            }),
            ae = A(async (...e) => {
              (E({ isPressed: !1 }), D(`kt4GV4tJA`));
            }),
            oe = A(async (...e) => {
              (E({ isPressed: !1 }), D(`MISHtEuxr`));
            }),
            M = A(async (...e) => {
              (E({ isPressed: !1 }), D(`OQaSnTuMF`));
            }),
            se = z(gn),
            N = () => b === `OQaSnTuMF`;
          return /*#__PURE__*/ u(te, {
            id: p ?? a,
            children: /*#__PURE__*/ u(En, {
              animate: O,
              initial: !1,
              children: /*#__PURE__*/ u(wn, {
                value: bn,
                children: /*#__PURE__*/ l(pn, {
                  ...y,
                  ...ne,
                  __framer__presenceAnimate: vn,
                  __framer__presenceInitial: yn,
                  __perspectiveFX: !1,
                  __smartComponentFX: !0,
                  __targetOpacity: 1,
                  className: z(se, `framer-pr3x0a`, f, x),
                  "data-border": !0,
                  "data-framer-appear-id": `pr3x0a`,
                  "data-framer-cursor": h,
                  "data-framer-name": `Video Pause`,
                  "data-highlight": !0,
                  layoutDependency: k,
                  layoutId: `kt4GV4tJA`,
                  onTap: ie,
                  optimized: !0,
                  ref: i,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-7f38a5f7-db27-44de-8aa2-b6753f733c7b, rgb(230, 230, 230))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                    borderBottomLeftRadius: 30,
                    borderBottomRightRadius: 30,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    ...d,
                  },
                  variants: {
                    MISHtEuxr: {
                      borderBottomLeftRadius: 15,
                      borderBottomRightRadius: 15,
                      borderTopLeftRadius: 15,
                      borderTopRightRadius: 15,
                    },
                    OQaSnTuMF: {
                      borderBottomLeftRadius: 15,
                      borderBottomRightRadius: 15,
                      borderTopLeftRadius: 15,
                      borderTopRightRadius: 15,
                    },
                  },
                  ...un(
                    {
                      kYn5IGWyb: {
                        "data-framer-cursor": g,
                        "data-framer-name": `Video Playing`,
                        onTap: ae,
                      },
                      MISHtEuxr: { "data-framer-name": `Mobile Playing`, onTap: M },
                      OQaSnTuMF: { "data-framer-name": `Mobile Pause`, onTap: oe },
                    },
                    b,
                    w
                  ),
                  children: [
                    /*#__PURE__*/ u(R, {
                      children: /*#__PURE__*/ u(C, {
                        className: `framer-n13b9d-container`,
                        isModuleExternal: !0,
                        layoutDependency: k,
                        layoutId: `FiktFfvyE-container`,
                        nodeId: `FiktFfvyE`,
                        rendersWithMotion: !0,
                        scopeId: `JTmhoX_Q9`,
                        children: /*#__PURE__*/ u(Qt, {
                          backgroundColor: `rgba(255, 255, 255, 0)`,
                          borderRadius: 20,
                          bottomLeftRadius: 20,
                          bottomRightRadius: 20,
                          controls: !1,
                          height: `100%`,
                          id: `FiktFfvyE`,
                          isMixedBorderRadius: !1,
                          layoutId: `FiktFfvyE`,
                          loop: !1,
                          muted: !1,
                          objectFit: `cover`,
                          playing: !1,
                          poster: xn(v),
                          posterEnabled: !0,
                          srcFile: _,
                          srcType: `Upload`,
                          srcUrl: `https://youtu.be/4PZYb86j4wg?si=rpA8KC4jHwNF8DOJ`,
                          startTime: 0,
                          style: { height: `100%`, width: `100%` },
                          topLeftRadius: 20,
                          topRightRadius: 20,
                          volume: 25,
                          width: `100%`,
                          ...un(
                            {
                              kYn5IGWyb: { playing: !0 },
                              MISHtEuxr: {
                                borderRadius: 10,
                                bottomLeftRadius: 10,
                                bottomRightRadius: 10,
                                playing: !0,
                                topLeftRadius: 10,
                                topRightRadius: 10,
                              },
                              OQaSnTuMF: {
                                borderRadius: 10,
                                bottomLeftRadius: 10,
                                bottomRightRadius: 10,
                                topLeftRadius: 10,
                                topRightRadius: 10,
                              },
                            },
                            b,
                            w
                          ),
                        }),
                      }),
                    }),
                    N() &&
                      /*#__PURE__*/ u(R, {
                        ...un(
                          {
                            OQaSnTuMF: {
                              height: 88,
                              y: (c?.y || 0) + ((c?.height || 224) * 0.5000000000000002 - 44),
                            },
                          },
                          b,
                          w
                        ),
                        children: /*#__PURE__*/ u(C, {
                          className: `framer-r4v2z3-container`,
                          isModuleExternal: !0,
                          layoutDependency: k,
                          layoutId: `FZbtlRoIs-container`,
                          nodeId: `FZbtlRoIs`,
                          rendersWithMotion: !0,
                          scopeId: `JTmhoX_Q9`,
                          transformTemplate: Sn,
                          children: /*#__PURE__*/ u(G, {
                            height: `100%`,
                            id: `FZbtlRoIs`,
                            layoutId: `FZbtlRoIs`,
                            variant: Cn(`pWd5pN4rC`),
                            width: `100%`,
                          }),
                        }),
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-NWH93.framer-1xgw27o, .framer-NWH93 .framer-1xgw27o { display: block; }`,
          `.framer-NWH93.framer-pr3x0a { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 10px; position: relative; width: 1080px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-NWH93 .framer-n13b9d-container { aspect-ratio: 1.7857142857142858 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 597px); position: relative; width: 100%; }`,
          `.framer-NWH93 .framer-r4v2z3-container { flex: none; height: auto; left: 50%; position: absolute; top: 50%; width: auto; z-index: 2; }`,
          `.framer-NWH93.framer-v-1bb2b5w.framer-pr3x0a, .framer-NWH93.framer-v-1pmzybz.framer-pr3x0a { padding: 5px; width: 390px; }`,
          `.framer-NWH93.framer-v-1bb2b5w .framer-n13b9d-container, .framer-NWH93.framer-v-1pmzybz .framer-n13b9d-container { height: var(--framer-aspect-ratio-supported, 214px); }`,
          `.framer-NWH93[data-border="true"]::after, .framer-NWH93 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-NWH93`
      )),
      (K.displayName = `Video Component`),
      (K.defaultProps = { height: 616.5, width: 1080 }),
      he(K, {
        variant: {
          options: [`kt4GV4tJA`, `kYn5IGWyb`, `OQaSnTuMF`, `MISHtEuxr`],
          optionTitles: [`Video Pause`, `Video Playing`, `Mobile Pause`, `Mobile Playing`],
          title: `Variant`,
          type: B.Enum,
        },
        bBsOnIO8s: { title: `Cursor`, type: B.CustomCursor },
        A1DmE1Zxn: { title: `Cursor 2`, type: B.CustomCursor },
        zP7W0Xh67: mn?.srcFile && {
          ...mn.srcFile,
          __defaultAssetReference: `data:framer/asset-reference,2aIaonOFW8QIZp8muUIsZ8U9Es.mp4?originalFilename=4928375-uhd_3840_2160_25fps.mp4`,
          description: void 0,
          hidden: void 0,
          title: `Video File`,
        },
        onzP7W0Xh67Change: { changes: `zP7W0Xh67`, type: B.ChangeHandler },
        H1_kbvtPp: {
          __defaultAssetReference: `data:framer/asset-reference,Phag8gRECrPFuAul2CXvBk8BfOI.jpg?originalFilename=Preview.jpg&width=3840&height=2160`,
          title: `Poster`,
          type: B.ResponsiveImage,
        },
      }),
      O(K, [{ explicitInter: !0, fonts: [] }, ...dn, ...fn], { supportsExplicitInterCodegen: !0 }),
      (K.loader = { load: (e, t) => (t.locale, Promise.allSettled([A(G, {}, t)])) }));
  }))();
}
var An, jn, Mn, Nn, Pn, Fn, In, Ln, Rn, zn, q;
function Bn() {
  return (Bn = e(() => {
    (f(),
      T(),
      v(),
      p(),
      it(),
      Ge(),
      (An = x(ct)),
      (jn = `framer-2IW8g`),
      (Mn = { UUsIdG2fQ: `framer-v-tzmuzd` }),
      (Nn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Pn = ({ value: e, children: n }) => {
        let r = t(_),
          i = e ?? r.transition,
          a = c(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ u(_.Provider, { value: a, children: n });
      }),
      (Fn = h.create(i)),
      (In = ({ end: e, height: t, id: n, suffix: r, title: i, width: a, ...o }) => ({
        ...o,
        by_PAp5ff: r ?? o.by_PAp5ff ?? `K+`,
        Tpy945gY2: e ?? o.Tpy945gY2 ?? 120,
        zS_nwTIQ1: i ?? o.zS_nwTIQ1 ?? `Views`,
      })),
      (Ln = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Rn = /*#__PURE__*/ d(function (e, t) {
        let r = s(null),
          a = t ?? r,
          o = n(),
          { activeLocale: ee, setLocale: c } = I();
        ce();
        let {
            style: d,
            className: f,
            layoutId: p,
            variant: m,
            Tpy945gY2: g,
            zS_nwTIQ1: _,
            by_PAp5ff: v,
            ...y
          } = In(e),
          {
            baseVariant: b,
            classNames: x,
            clearLoadingGesture: ne,
            gestureHandlers: w,
            gestureVariant: T,
            isLoading: E,
            setGestureState: D,
            setVariant: O,
            variants: k,
          } = re({ defaultVariant: `UUsIdG2fQ`, ref: a, variant: m, variantClassNames: Mn }),
          A = Ln(e, k),
          j = z(jn, He);
        return /*#__PURE__*/ u(te, {
          id: p ?? o,
          children: /*#__PURE__*/ u(Fn, {
            animate: k,
            initial: !1,
            children: /*#__PURE__*/ u(Pn, {
              value: Nn,
              children: /*#__PURE__*/ l(h.div, {
                ...y,
                ...w,
                className: z(j, `framer-tzmuzd`, f, x),
                "data-border": !0,
                "data-framer-name": `Card`,
                layoutDependency: A,
                layoutId: `UUsIdG2fQ`,
                ref: a,
                style: {
                  "--border-bottom-width": `1px`,
                  "--border-color": `rgb(237, 237, 237)`,
                  "--border-left-width": `1px`,
                  "--border-right-width": `1px`,
                  "--border-style": `solid`,
                  "--border-top-width": `1px`,
                  backgroundColor: `var(--token-a9c881b7-a087-4bee-a49f-befc82631c31, rgb(242, 242, 242))`,
                  borderBottomLeftRadius: 30,
                  borderBottomRightRadius: 30,
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                  ...d,
                },
                children: [
                  /*#__PURE__*/ u(R, {
                    children: /*#__PURE__*/ u(C, {
                      className: `framer-8yv2yb-container`,
                      "data-code-component-plugin-id": `84d4c1`,
                      isAuthoredByUser: !0,
                      isModuleExternal: !0,
                      layoutDependency: A,
                      layoutId: `GWKZItFHh-container`,
                      nodeId: `GWKZItFHh`,
                      rendersWithMotion: !0,
                      scopeId: `Obni1kubx`,
                      children: /*#__PURE__*/ u(ct, {
                        align: `center`,
                        autoStart: !0,
                        color: `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                        decimals: 0,
                        delay: 0,
                        duration: 1.5,
                        easing: `easeOut`,
                        end: g,
                        font: {
                          fontFamily: `"Manrope", "Manrope Placeholder", sans-serif`,
                          fontSize: `32px`,
                          fontStyle: `normal`,
                          fontWeight: 600,
                          letterSpacing: `-0.04em`,
                          lineHeight: `1em`,
                        },
                        height: `100%`,
                        id: `GWKZItFHh`,
                        layoutId: `GWKZItFHh`,
                        loop: !1,
                        resetOnReentry: !1,
                        start: 0,
                        suffix: v,
                        width: `100%`,
                      }),
                    }),
                  }),
                  /*#__PURE__*/ u(h.div, {
                    className: `framer-r5ykj3`,
                    layoutDependency: A,
                    layoutId: `t0BoC8t7E`,
                    children: /*#__PURE__*/ u(S, {
                      __fromCanvasComponent: !0,
                      children: /*#__PURE__*/ u(i, {
                        children: /*#__PURE__*/ u(h.p, {
                          className: `framer-styles-preset-oeqwx2`,
                          "data-styles-preset": `oInb0ma47`,
                          dir: `auto`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                          },
                          children: `Views`,
                        }),
                      }),
                      className: `framer-rs0nqa`,
                      fonts: [`Inter`],
                      layoutDependency: A,
                      layoutId: `a8TBc3M8Z`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: _,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                  }),
                ],
              }),
            }),
          }),
        });
      })),
      (zn = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-2IW8g.framer-1g0gv8f, .framer-2IW8g .framer-1g0gv8f { display: block; }`,
        `.framer-2IW8g.framer-tzmuzd { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 30px; position: relative; width: 410px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-2IW8g .framer-8yv2yb-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-2IW8g .framer-r5ykj3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-2IW8g .framer-rs0nqa { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        ...Ve,
        `.framer-2IW8g[data-border="true"]::after, .framer-2IW8g [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      (q = k(Rn, zn, `framer-2IW8g`)),
      (q.displayName = `Performance Card`),
      (q.defaultProps = { height: 179, width: 410 }),
      he(q, {
        Tpy945gY2: { defaultValue: 120, title: `End`, type: B.Number },
        onTpy945gY2Change: { changes: `Tpy945gY2`, type: B.ChangeHandler },
        zS_nwTIQ1: { defaultValue: `Views`, displayTextArea: !1, title: `Title`, type: B.String },
        onzS_nwTIQ1Change: { changes: `zS_nwTIQ1`, type: B.ChangeHandler },
        by_PAp5ff: { defaultValue: `K+`, placeholder: `%`, title: `Suffix`, type: B.String },
        onby_PAp5ffChange: { changes: `by_PAp5ff`, type: B.ChangeHandler },
      }),
      O(
        q,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Manrope`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Manrope`,
                url: `../../assets/misc/JNU3GNMUBPWW6V6JTED3S27XL5HN7NM5.woff2`,
                weight: `600`,
              },
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
          ...An,
          ...M(Be),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
var Vn,
  Hn,
  Un,
  Wn,
  Gn,
  Kn,
  qn,
  Jn,
  J,
  Yn,
  Xn,
  Zn,
  Qn,
  $n,
  er,
  tr,
  nr,
  rr,
  ir,
  ar,
  or,
  Y,
  sr,
  cr,
  X,
  lr,
  ur,
  dr,
  Z,
  Q,
  fr,
  pr,
  $,
  mr,
  hr,
  gr,
  _r,
  vr,
  yr,
  br,
  xr,
  Sr,
  Cr,
  wr,
  Tr,
  Er,
  Dr,
  Or,
  kr,
  Ar;
function jr() {
  return (jr = e(() => {
    (f(),
      T(),
      v(),
      p(),
      De(),
      Ke(),
      Ft(),
      jt(),
      kn(),
      tt(),
      Bn(),
      Ue(),
      Ne(),
      Nt(),
      Oe(),
      dt(),
      St(),
      Re(),
      je(),
      bt(),
      Ge(),
      Ct(),
      ht(),
      H(),
      Rt(),
      (Vn = x(We)),
      (Hn = D(P)),
      (Un = D(S)),
      (Wn = D(h.div)),
      (Gn = x(It)),
      (Kn = x(q)),
      (qn = me(P)),
      (Jn = x(K)),
      (J = me(L)),
      (Yn = b(h.div)),
      (Xn = me(h.div)),
      (Zn = x(Mt)),
      (Qn = x(Ie)),
      ($n = x(qe)),
      (er = x(ot)),
      (tr = {
        C7bfNg0Nn: `(min-width: 810px) and (max-width: 1199.98px)`,
        KSa8KtveY: `(max-width: 809.98px)`,
        xqaFP9nWa: `(min-width: 1200px)`,
      }),
      (nr = () => typeof document < `u`),
      (rr = []),
      (ir = `framer-CSANC`),
      (ar = {
        C7bfNg0Nn: `framer-v-1l7wspp`,
        KSa8KtveY: `framer-v-dbq4x7`,
        xqaFP9nWa: `framer-v-88uf17`,
      }),
      (or = (e, t, n) => (e && t ? `position` : n)),
      (Y = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (sr = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Y,
        x: 0,
        y: 0,
      }),
      (cr = {
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
      (X = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (lr = { bounce: 0.2, delay: 0.1, duration: 0.4, type: `spring` }),
      (ur = {
        opacity: 0.8,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: lr,
        x: 0,
        y: 0,
      }),
      (dr = {
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
      (Z = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Q = {
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
      (fr = { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (pr = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: fr,
        x: 0,
        y: 0,
      }),
      ($ = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Y,
        x: 0,
        y: 0,
      }),
      (mr = {
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
      (hr = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Y,
        x: 0,
        y: 20,
      }),
      (gr = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: lr,
        x: 0,
        y: 20,
      }),
      (_r = (e, t) =>
        typeof e == `string` && typeof t == `string`
          ? e.toLowerCase() === t.toLowerCase()
          : e === t),
      (vr = (e) => ({
        from: { alias: `T8oZQMdKx`, data: Pt, type: `Collection` },
        limit: { type: `LiteralValue`, value: 4 },
        select: [
          { collection: `T8oZQMdKx`, name: `WUOYxBUlT`, type: `Identifier` },
          { collection: `T8oZQMdKx`, name: `k5wtIPkbZ`, type: `Identifier` },
          { collection: `T8oZQMdKx`, name: `Coa2ayQ4h`, type: `Identifier` },
          { collection: `T8oZQMdKx`, name: `tKimEGjql`, type: `Identifier` },
          { collection: `T8oZQMdKx`, name: `pgUXdcP9T`, type: `Identifier` },
          { collection: `T8oZQMdKx`, name: `id`, type: `Identifier` },
        ],
        where: {
          operator: `not`,
          type: `UnaryOperation`,
          value: {
            left: { collection: `T8oZQMdKx`, name: `Coa2ayQ4h`, type: `Identifier` },
            operator: `==`,
            right: { type: `LiteralValue`, value: e },
            type: `BinaryOperation`,
          },
        },
      })),
      (yr = ({ query: e, pageSize: t, children: n }) => n(ne(e))),
      (br = { Desktop: `xqaFP9nWa`, Phone: `KSa8KtveY`, Tablet: `C7bfNg0Nn` }),
      (xr = ({ value: e }) =>
        N()
          ? null
          : /*#__PURE__*/ u(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (Sr = (e) => ({
        from: { alias: `IF3lVCAg9`, data: Pt, type: `Collection` },
        select: [
          { collection: `IF3lVCAg9`, name: `Coa2ayQ4h`, type: `Identifier` },
          { collection: `IF3lVCAg9`, name: `XpTnJBMUk`, type: `Identifier` },
          { collection: `IF3lVCAg9`, name: `PcE46EOik`, type: `Identifier` },
          { collection: `IF3lVCAg9`, name: `JvipO8mEd`, type: `Identifier` },
          { collection: `IF3lVCAg9`, name: `MPEheHdEv`, type: `Identifier` },
          { collection: `IF3lVCAg9`, name: `bPiJgUl59`, type: `Identifier` },
          { collection: `IF3lVCAg9`, name: `GURs1T8VC`, type: `Identifier` },
          { collection: `IF3lVCAg9`, name: `alGoXMRMd`, type: `Identifier` },
          { collection: `IF3lVCAg9`, name: `vdNnDAZaI`, type: `Identifier` },
          { collection: `IF3lVCAg9`, name: `zE1WAzCai`, type: `Identifier` },
          { collection: `IF3lVCAg9`, name: `nrBWuYEhH`, type: `Identifier` },
          { collection: `IF3lVCAg9`, name: `k5wtIPkbZ`, type: `Identifier` },
          { collection: `IF3lVCAg9`, name: `fzhWiV8sS`, type: `Identifier` },
          { collection: `IF3lVCAg9`, name: `nr0Wstjz0`, type: `Identifier` },
          { collection: `IF3lVCAg9`, name: `tKimEGjql`, type: `Identifier` },
          { collection: `IF3lVCAg9`, name: `J5A3EFMqV`, type: `Identifier` },
          { collection: `IF3lVCAg9`, name: `YZvKfVmOh`, type: `Identifier` },
          { collection: `IF3lVCAg9`, name: `pgUXdcP9T`, type: `Identifier` },
          { collection: `IF3lVCAg9`, name: `fEmsjQmtf`, type: `Identifier` },
        ],
        where: e,
      })),
      (Cr = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: br[r.variant] ?? r.variant ?? `xqaFP9nWa`,
      })),
      (wr = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (Tr = { component: ot, transition: wr, variant: `qVpDFd__L` }),
      (Er = { component: ot, transition: wr, variant: `UeDhBGhcP` }),
      (Dr = /*#__PURE__*/ d(function (e, r) {
        let a = s(null),
          o = r ?? a,
          d = n(),
          { activeLocale: f, setLocale: p } = I(),
          m = ce(),
          g = le(),
          [v] = ne(Sr(se(g, `IF3lVCAg9`))),
          y = (e) => {
            if (!v) throw new ue(`No data matches path variables: ${JSON.stringify(g)}`);
            return v[e];
          },
          {
            style: b,
            className: x,
            layoutId: re,
            variant: C,
            Coa2ayQ4h: T = y(`Coa2ayQ4h`) ?? ``,
            XpTnJBMUk: E = y(`XpTnJBMUk`),
            PcE46EOik: D = y(`PcE46EOik`),
            JvipO8mEd: O = y(`JvipO8mEd`),
            MPEheHdEv: k = y(`MPEheHdEv`),
            bPiJgUl59: A = y(`bPiJgUl59`),
            GURs1T8VC: oe = y(`GURs1T8VC`),
            alGoXMRMd: M = y(`alGoXMRMd`),
            vdNnDAZaI: N = y(`vdNnDAZaI`),
            zE1WAzCai: L = y(`zE1WAzCai`),
            nrBWuYEhH: de = y(`nrBWuYEhH`),
            k5wtIPkbZ: me = y(`k5wtIPkbZ`),
            fzhWiV8sS: he = y(`fzhWiV8sS`),
            nr0Wstjz0: ve = y(`nr0Wstjz0`),
            tKimEGjql: B = y(`tKimEGjql`) ?? ``,
            J5A3EFMqV: be = y(`J5A3EFMqV`) ?? ``,
            YZvKfVmOh: we = y(`YZvKfVmOh`),
            pgUXdcP9T: Te = y(`pgUXdcP9T`) ?? ``,
            fEmsjQmtf: Ee = y(`fEmsjQmtf`) ?? ``,
            ...De
          } = Cr(e),
          Oe = c(() => Lt({ Coa2ayQ4h: T, k5wtIPkbZ: me }, f), [T, me, f]);
        Se(Oe);
        let [V, Ae] = pe(C, tr, !1),
          H = z(ir, Pe, He, ze, Fe, mt, yt, vt, ke, wt, kt),
          je = t(ye)?.isLayoutTemplate,
          Me = !!t(_)?.transition?.layout,
          Ne = or(je, Me),
          W = () => !nr() || V !== `KSa8KtveY`;
        ae();
        let Le = xe(`Nq5sulIsH`),
          Re = s(null);
        return (
          ge({ "1gf862j": Tr, dpperr: Er }),
          /*#__PURE__*/ u(ye.Provider, {
            value: {
              activeVariantId: V,
              humanReadableVariantMap: br,
              primaryVariantId: `xqaFP9nWa`,
              variantClassNames: ar,
            },
            children: /*#__PURE__*/ l(te, {
              id: re ?? d,
              children: [
                /*#__PURE__*/ u(xr, {
                  value: `html body { background: var(--token-a9c881b7-a087-4bee-a49f-befc82631c31, rgb(242, 242, 242)); }`,
                }),
                /*#__PURE__*/ l(h.div, {
                  ...De,
                  className: z(H, `framer-88uf17`, x),
                  ref: o,
                  style: { ...b },
                  children: [
                    /*#__PURE__*/ l(h.header, {
                      className: `framer-ehye8l`,
                      "data-border": !0,
                      "data-framer-name": `Hero Wrapper`,
                      layout: Ne,
                      children: [
                        /*#__PURE__*/ l(`div`, {
                          className: `framer-bsnio3`,
                          children: [
                            /*#__PURE__*/ l(`div`, {
                              className: `framer-ul8bmz`,
                              "data-framer-name": `H1 + Para`,
                              children: [
                                /*#__PURE__*/ l(`div`, {
                                  className: `framer-1gcs5mf`,
                                  children: [
                                    /*#__PURE__*/ u(`div`, {
                                      className: `framer-jqarx9`,
                                      children: /*#__PURE__*/ u(R, {
                                        height: 40,
                                        y:
                                          (m?.y || 0) +
                                          140 +
                                          0 +
                                          0 +
                                          0 +
                                          160 +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                        children: /*#__PURE__*/ u(Hn, {
                                          animate: sr,
                                          className: `framer-1flxp0x-container`,
                                          "data-framer-appear-id": `1flxp0x`,
                                          initial: cr,
                                          nodeId: `H2Y3EKyVN`,
                                          optimized: !0,
                                          rendersWithMotion: !0,
                                          scopeId: `IF3lVCAg9`,
                                          children: /*#__PURE__*/ u(We, {
                                            gJ8H561ZB: Te,
                                            height: `100%`,
                                            id: `H2Y3EKyVN`,
                                            layoutId: `H2Y3EKyVN`,
                                            variant: X(`WgYBRr9mM`),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    /*#__PURE__*/ l(Wn, {
                                      animate: sr,
                                      className: `framer-ixpxgw`,
                                      "data-framer-appear-id": `ixpxgw`,
                                      "data-framer-name": `h1`,
                                      initial: cr,
                                      optimized: !0,
                                      children: [
                                        /*#__PURE__*/ u(S, {
                                          __fromCanvasComponent: !0,
                                          children: /*#__PURE__*/ u(i, {
                                            children: /*#__PURE__*/ u(`h1`, {
                                              className: `framer-styles-preset-1q787c3`,
                                              "data-styles-preset": `y8eR9t98C`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                                              },
                                              children: `Insights That Drive`,
                                            }),
                                          }),
                                          className: `framer-1iujdyt`,
                                          fonts: [`Inter`],
                                          text: T,
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        /*#__PURE__*/ u(Un, {
                                          __fromCanvasComponent: !0,
                                          animate: ur,
                                          children: /*#__PURE__*/ u(i, {
                                            children: /*#__PURE__*/ u(`p`, {
                                              className: `framer-styles-preset-oeqwx2`,
                                              "data-styles-preset": `oInb0ma47`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                                              },
                                              children: `A complete content system redesign that turned inconsistent posting into predictable growth.`,
                                            }),
                                          }),
                                          className: `framer-sqaxs7`,
                                          "data-framer-appear-id": `sqaxs7`,
                                          fonts: [`Inter`],
                                          initial: cr,
                                          optimized: !0,
                                          text: B,
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                /*#__PURE__*/ u(R, {
                                  height: 49,
                                  y: (m?.y || 0) + 140 + 0 + 0 + 0 + 160 + 0 + 0 + 312,
                                  children: /*#__PURE__*/ u(Hn, {
                                    animate: dr,
                                    className: `framer-18euhfh-container`,
                                    "data-framer-appear-id": `18euhfh`,
                                    initial: cr,
                                    nodeId: `d6tohmvpT`,
                                    optimized: !0,
                                    rendersWithMotion: !0,
                                    scopeId: `IF3lVCAg9`,
                                    children: /*#__PURE__*/ u(It, {
                                      ENWvXsjzc: be,
                                      gZ_iLYKZ6: Z(we),
                                      height: `100%`,
                                      id: `d6tohmvpT`,
                                      layoutId: `d6tohmvpT`,
                                      T4oPRTdmz: `Client`,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            /*#__PURE__*/ l(`div`, {
                              className: `framer-1lcjial`,
                              "data-framer-name": `Stat`,
                              children: [
                                /*#__PURE__*/ u(F, {
                                  breakpoint: V,
                                  overrides: {
                                    C7bfNg0Nn: {
                                      width: `max((min(min(${m?.width || `100vw`} - 40px, 1050px) - 40px, 1050px) - 10px) / 2, 50px)`,
                                      y: (m?.y || 0) + 140 + 0 + 0 + 0 + 160 + 421 + 0 + 0,
                                    },
                                    KSa8KtveY: {
                                      width: `max(min(min(${m?.width || `100vw`} - 40px, 1050px) - 40px, 1050px), 50px)`,
                                      y: (m?.y || 0) + 140 + 0 + 0 + 0 + 160 + 421 + 0 + 0,
                                    },
                                  },
                                  children: /*#__PURE__*/ u(R, {
                                    height: 179,
                                    width: `max((min(${m?.width || `100vw`} - 40px, 1050px) - 30px) / 4, 1px)`,
                                    y: (m?.y || 0) + 140 + 0 + 0 + 0 + 160 + 421 + 0,
                                    children: /*#__PURE__*/ u(P, {
                                      className: `framer-3in34m-container`,
                                      nodeId: `BXE0YPhqb`,
                                      scopeId: `IF3lVCAg9`,
                                      children: /*#__PURE__*/ u(q, {
                                        by_PAp5ff: `K+`,
                                        height: `100%`,
                                        id: `BXE0YPhqb`,
                                        layoutId: `BXE0YPhqb`,
                                        style: { width: `100%` },
                                        Tpy945gY2: 120,
                                        width: `100%`,
                                        zS_nwTIQ1: `Views`,
                                      }),
                                    }),
                                  }),
                                }),
                                /*#__PURE__*/ u(F, {
                                  breakpoint: V,
                                  overrides: {
                                    C7bfNg0Nn: {
                                      width: `max((min(min(${m?.width || `100vw`} - 40px, 1050px) - 40px, 1050px) - 10px) / 2, 50px)`,
                                      y: (m?.y || 0) + 140 + 0 + 0 + 0 + 160 + 421 + 0 + 0,
                                    },
                                    KSa8KtveY: {
                                      width: `max(min(min(${m?.width || `100vw`} - 40px, 1050px) - 40px, 1050px), 50px)`,
                                      y: (m?.y || 0) + 140 + 0 + 0 + 0 + 160 + 421 + 0 + 189,
                                    },
                                  },
                                  children: /*#__PURE__*/ u(R, {
                                    height: 179,
                                    width: `max((min(${m?.width || `100vw`} - 40px, 1050px) - 30px) / 4, 1px)`,
                                    y: (m?.y || 0) + 140 + 0 + 0 + 0 + 160 + 421 + 0,
                                    children: /*#__PURE__*/ u(P, {
                                      className: `framer-1w925dd-container`,
                                      nodeId: `XC1vn7oS2`,
                                      scopeId: `IF3lVCAg9`,
                                      children: /*#__PURE__*/ u(q, {
                                        by_PAp5ff: `x`,
                                        height: `100%`,
                                        id: `XC1vn7oS2`,
                                        layoutId: `XC1vn7oS2`,
                                        style: { width: `100%` },
                                        Tpy945gY2: 3.2,
                                        width: `100%`,
                                        zS_nwTIQ1: `Engagement`,
                                      }),
                                    }),
                                  }),
                                }),
                                /*#__PURE__*/ u(F, {
                                  breakpoint: V,
                                  overrides: {
                                    C7bfNg0Nn: {
                                      width: `max((min(min(${m?.width || `100vw`} - 40px, 1050px) - 40px, 1050px) - 10px) / 2, 50px)`,
                                      y: (m?.y || 0) + 140 + 0 + 0 + 0 + 160 + 421 + 0 + 189,
                                    },
                                    KSa8KtveY: {
                                      width: `max(min(min(${m?.width || `100vw`} - 40px, 1050px) - 40px, 1050px), 50px)`,
                                      y: (m?.y || 0) + 140 + 0 + 0 + 0 + 160 + 421 + 0 + 378,
                                    },
                                  },
                                  children: /*#__PURE__*/ u(R, {
                                    height: 179,
                                    width: `max((min(${m?.width || `100vw`} - 40px, 1050px) - 30px) / 4, 1px)`,
                                    y: (m?.y || 0) + 140 + 0 + 0 + 0 + 160 + 421 + 0,
                                    children: /*#__PURE__*/ u(P, {
                                      className: `framer-1au045q-container`,
                                      nodeId: `jWVEebEop`,
                                      scopeId: `IF3lVCAg9`,
                                      children: /*#__PURE__*/ u(q, {
                                        by_PAp5ff: `%`,
                                        height: `100%`,
                                        id: `jWVEebEop`,
                                        layoutId: `jWVEebEop`,
                                        style: { width: `100%` },
                                        Tpy945gY2: 85,
                                        width: `100%`,
                                        zS_nwTIQ1: `Avg Watch Time`,
                                      }),
                                    }),
                                  }),
                                }),
                                /*#__PURE__*/ u(F, {
                                  breakpoint: V,
                                  overrides: {
                                    C7bfNg0Nn: {
                                      width: `max((min(min(${m?.width || `100vw`} - 40px, 1050px) - 40px, 1050px) - 10px) / 2, 50px)`,
                                      y: (m?.y || 0) + 140 + 0 + 0 + 0 + 160 + 421 + 0 + 189,
                                    },
                                    KSa8KtveY: {
                                      width: `max(min(min(${m?.width || `100vw`} - 40px, 1050px) - 40px, 1050px), 50px)`,
                                      y: (m?.y || 0) + 140 + 0 + 0 + 0 + 160 + 421 + 0 + 567,
                                    },
                                  },
                                  children: /*#__PURE__*/ u(R, {
                                    height: 179,
                                    width: `max((min(${m?.width || `100vw`} - 40px, 1050px) - 30px) / 4, 1px)`,
                                    y: (m?.y || 0) + 140 + 0 + 0 + 0 + 160 + 421 + 0,
                                    children: /*#__PURE__*/ u(P, {
                                      className: `framer-ccf06j-container`,
                                      nodeId: `xFigTGU4x`,
                                      scopeId: `IF3lVCAg9`,
                                      children: /*#__PURE__*/ u(q, {
                                        by_PAp5ff: ``,
                                        height: `100%`,
                                        id: `xFigTGU4x`,
                                        layoutId: `xFigTGU4x`,
                                        style: { width: `100%` },
                                        Tpy945gY2: 14,
                                        width: `100%`,
                                        zS_nwTIQ1: `Days Execution`,
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        /*#__PURE__*/ u(qn, {
                          __framer__animate: { transition: fr },
                          __framer__animateOnce: !1,
                          __framer__enter: Q,
                          __framer__exit: pr,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-lu8i2n-container`,
                          children: /*#__PURE__*/ u(F, {
                            breakpoint: V,
                            overrides: {
                              C7bfNg0Nn: {
                                fallbackImage: `https://framerusercontent.com/images/f3HAROQqCWCkn751VOYrTUPsU.png?scale-down-to=1007&width=1620&height=2013`,
                              },
                              KSa8KtveY: {
                                fallbackImage: `https://framerusercontent.com/images/r1Dwlr8VPvxFFdkOrtHrIoDRLwE.png?scale-down-to=1313&width=780&height=2625`,
                              },
                            },
                            children: /*#__PURE__*/ u(ie, {
                              __fromCanvasComponent: !0,
                              animated: U.animated,
                              buffers: U.buffers,
                              fallbackImage: `https://framerusercontent.com/images/NqwTWrLL6P1aZkW5biNUfhW5Pos.png?scale-down-to=1200&width=2400&height=1712`,
                              fragmentShader: U.fragment,
                              height: `100%`,
                              heightmapSource: U.heightmapSource,
                              mode: `progressive`,
                              mouse: U.mouse && { enabled: U.mouse === `enabledByDefault` },
                              resolutionScale: U.resolutionScale,
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
                              vertexShader: U.vertex,
                              width: `100%`,
                            }),
                          }),
                        }),
                      ],
                    }),
                    /*#__PURE__*/ u(h.div, {
                      className: `framer-h9cni6`,
                      layout: Ne,
                      children: /*#__PURE__*/ l(`div`, {
                        className: `framer-1voo68k`,
                        children: [
                          /*#__PURE__*/ u(F, {
                            breakpoint: V,
                            overrides: {
                              C7bfNg0Nn: {
                                width: `min(max(${m?.width || `100vw`} - 80px, 1px), 1050px)`,
                                y: (m?.y || 0) + 140 + 1209 + 0 + 100 + 0,
                              },
                              KSa8KtveY: {
                                width: `min(${m?.width || `100vw`} - 80px, 1050px)`,
                                y: (m?.y || 0) + 140 + 1547 + 0 + 0 + 60 + 0,
                              },
                            },
                            children: /*#__PURE__*/ u(R, {
                              height: 616,
                              width: `min(max(${m?.width || `100vw`} - 40px, 1px), 1050px)`,
                              y: (m?.y || 0) + 140 + 1020 + 0 + 100 + 0,
                              children: /*#__PURE__*/ u(P, {
                                className: `framer-1w5xh6a-container`,
                                "data-framer-name": `Video`,
                                name: `Video`,
                                nodeId: `tfWZylLYG`,
                                scopeId: `IF3lVCAg9`,
                                children: /*#__PURE__*/ u(F, {
                                  breakpoint: V,
                                  overrides: {
                                    KSa8KtveY: {
                                      A1DmE1Zxn: void 0,
                                      bBsOnIO8s: void 0,
                                      variant: X(`OQaSnTuMF`),
                                    },
                                  },
                                  children: /*#__PURE__*/ u(K, {
                                    A1DmE1Zxn: `dpperr`,
                                    bBsOnIO8s: `1gf862j`,
                                    H1_kbvtPp: Z(he),
                                    height: `100%`,
                                    id: `tfWZylLYG`,
                                    layoutId: `tfWZylLYG`,
                                    name: `Video`,
                                    style: { width: `100%` },
                                    variant: X(`kt4GV4tJA`),
                                    width: `100%`,
                                    zP7W0Xh67: ve,
                                  }),
                                }),
                              }),
                            }),
                          }),
                          /*#__PURE__*/ u(S, {
                            __fromCanvasComponent: !0,
                            children: Ee,
                            className: `framer-1b6a281`,
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
                              p: `framer-styles-preset-oeqwx2`,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          /*#__PURE__*/ u(F, {
                            breakpoint: V,
                            overrides: {
                              C7bfNg0Nn: { trackCount: 2 },
                              KSa8KtveY: { trackCount: 1 },
                            },
                            children: /*#__PURE__*/ l(Yn, {
                              className: `framer-1x5xqc3`,
                              columnMasonryLayoutEnabled: !0,
                              parentIsDataRepeater: !1,
                              rowGap: 10,
                              trackCount: 3,
                              children: [
                                /*#__PURE__*/ u(F, {
                                  breakpoint: V,
                                  overrides: {
                                    C7bfNg0Nn: {
                                      background: {
                                        alt: `person writing on brown wooden table near white ceramic mug`,
                                        fit: `fill`,
                                        intrinsicHeight: 2832,
                                        intrinsicWidth: 4240,
                                        loading: w(
                                          (m?.y || 0) + 140 + 1209 + 0 + 100 + 912 + 0 + 0
                                        ),
                                        pixelHeight: 3456,
                                        pixelWidth: 5184,
                                        sizes: `max((min(max(${m?.width || `100vw`} - 80px, 1px), 1050px) - 10px) / 2, 50px)`,
                                        ...Z(E),
                                      },
                                    },
                                    KSa8KtveY: {
                                      background: {
                                        alt: `person writing on brown wooden table near white ceramic mug`,
                                        fit: `fill`,
                                        intrinsicHeight: 2832,
                                        intrinsicWidth: 4240,
                                        loading: w(
                                          (m?.y || 0) + 140 + 1547 + 0 + 0 + 60 + 832 + 0 + 0
                                        ),
                                        pixelHeight: 3456,
                                        pixelWidth: 5184,
                                        sizes: `max(min(${m?.width || `100vw`} - 80px, 1050px), 50px)`,
                                        ...Z(E),
                                      },
                                    },
                                  },
                                  children: /*#__PURE__*/ u(J, {
                                    __framer__animate: { transition: Y },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Q,
                                    __framer__exit: $,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                      alt: `person writing on brown wooden table near white ceramic mug`,
                                      fit: `fill`,
                                      intrinsicHeight: 2832,
                                      intrinsicWidth: 4240,
                                      loading: w((m?.y || 0) + 140 + 1020 + 0 + 100 + 912 + 0 + 0),
                                      pixelHeight: 3456,
                                      pixelWidth: 5184,
                                      sizes: `max((min(max(${m?.width || `100vw`} - 40px, 1px), 1050px) - 20px) / 3, 50px)`,
                                      ...Z(E),
                                    },
                                    className: `framer-rygt7y`,
                                    fitImageDimension: `height`,
                                    id: `rygt7y`,
                                    lightbox: {
                                      backdrop: `rgba(0, 0, 0, 0.8)`,
                                      maxWidth: 800,
                                      padding: 20,
                                      transition: Y,
                                      zIndex: 10,
                                    },
                                    lightboxClassName: H,
                                  }),
                                }),
                                /*#__PURE__*/ u(F, {
                                  breakpoint: V,
                                  overrides: {
                                    C7bfNg0Nn: {
                                      background: {
                                        alt: `A wooden nightstand with a lamp and plant.`,
                                        fit: `fill`,
                                        intrinsicHeight: 6229,
                                        intrinsicWidth: 4672,
                                        loading: w(
                                          (m?.y || 0) + 140 + 1209 + 0 + 100 + 912 + 0 + 0
                                        ),
                                        pixelHeight: 6e3,
                                        pixelWidth: 4e3,
                                        sizes: `max((min(max(${m?.width || `100vw`} - 80px, 1px), 1050px) - 10px) / 2, 50px)`,
                                        ...Z(O),
                                      },
                                    },
                                    KSa8KtveY: {
                                      background: {
                                        alt: `A wooden nightstand with a lamp and plant.`,
                                        fit: `fill`,
                                        intrinsicHeight: 6229,
                                        intrinsicWidth: 4672,
                                        loading: w(
                                          (m?.y || 0) + 140 + 1547 + 0 + 0 + 60 + 832 + 0 + 535
                                        ),
                                        pixelHeight: 6e3,
                                        pixelWidth: 4e3,
                                        sizes: `max(min(${m?.width || `100vw`} - 80px, 1050px), 50px)`,
                                        ...Z(O),
                                      },
                                    },
                                  },
                                  children: /*#__PURE__*/ u(J, {
                                    __framer__animate: { transition: Y },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Q,
                                    __framer__exit: $,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                      alt: `A wooden nightstand with a lamp and plant.`,
                                      fit: `fill`,
                                      intrinsicHeight: 6229,
                                      intrinsicWidth: 4672,
                                      loading: w((m?.y || 0) + 140 + 1020 + 0 + 100 + 912 + 0 + 0),
                                      pixelHeight: 6e3,
                                      pixelWidth: 4e3,
                                      sizes: `max((min(max(${m?.width || `100vw`} - 40px, 1px), 1050px) - 20px) / 3, 50px)`,
                                      ...Z(O),
                                    },
                                    className: `framer-cg9ns5`,
                                    fitImageDimension: `height`,
                                    id: `cg9ns5`,
                                    lightbox: {
                                      backdrop: `rgba(0, 0, 0, 0.8)`,
                                      maxWidth: 800,
                                      padding: 20,
                                      transition: Y,
                                      zIndex: 10,
                                    },
                                    lightboxClassName: H,
                                  }),
                                }),
                                /*#__PURE__*/ u(F, {
                                  breakpoint: V,
                                  overrides: {
                                    C7bfNg0Nn: {
                                      background: {
                                        alt: `MacBook Pro`,
                                        fit: `fill`,
                                        intrinsicHeight: 6056,
                                        intrinsicWidth: 4037,
                                        loading: w(
                                          (m?.y || 0) + 140 + 1209 + 0 + 100 + 912 + 0 + 580
                                        ),
                                        pixelHeight: 4806,
                                        pixelWidth: 3605,
                                        sizes: `max((min(max(${m?.width || `100vw`} - 80px, 1px), 1050px) - 10px) / 2, 50px)`,
                                        ...Z(k),
                                      },
                                    },
                                    KSa8KtveY: {
                                      background: {
                                        alt: `MacBook Pro`,
                                        fit: `fill`,
                                        intrinsicHeight: 6056,
                                        intrinsicWidth: 4037,
                                        loading: w(
                                          (m?.y || 0) + 140 + 1547 + 0 + 0 + 60 + 832 + 0 + 1070
                                        ),
                                        pixelHeight: 4806,
                                        pixelWidth: 3605,
                                        sizes: `max(min(${m?.width || `100vw`} - 80px, 1050px), 50px)`,
                                        ...Z(k),
                                      },
                                    },
                                  },
                                  children: /*#__PURE__*/ u(J, {
                                    __framer__animate: { transition: Y },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Q,
                                    __framer__exit: $,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                      alt: `MacBook Pro`,
                                      fit: `fill`,
                                      intrinsicHeight: 6056,
                                      intrinsicWidth: 4037,
                                      loading: w((m?.y || 0) + 140 + 1020 + 0 + 100 + 912 + 0 + 0),
                                      pixelHeight: 4806,
                                      pixelWidth: 3605,
                                      sizes: `max((min(max(${m?.width || `100vw`} - 40px, 1px), 1050px) - 20px) / 3, 50px)`,
                                      ...Z(k),
                                    },
                                    className: `framer-1qyzjou`,
                                    fitImageDimension: `height`,
                                    id: `1qyzjou`,
                                    lightbox: {
                                      backdrop: `rgba(0, 0, 0, 0.8)`,
                                      maxWidth: 800,
                                      padding: 20,
                                      transition: Y,
                                      zIndex: 10,
                                    },
                                    lightboxClassName: H,
                                  }),
                                }),
                                /*#__PURE__*/ u(F, {
                                  breakpoint: V,
                                  overrides: {
                                    C7bfNg0Nn: {
                                      background: {
                                        alt: `person using both laptop and smartphone`,
                                        fit: `fill`,
                                        intrinsicHeight: 6229,
                                        intrinsicWidth: 4672,
                                        loading: w(
                                          (m?.y || 0) + 140 + 1209 + 0 + 100 + 912 + 0 + 580
                                        ),
                                        pixelHeight: 3233,
                                        pixelWidth: 4849,
                                        sizes: `max((min(max(${m?.width || `100vw`} - 80px, 1px), 1050px) - 10px) / 2, 50px)`,
                                        ...Z(A),
                                      },
                                    },
                                    KSa8KtveY: {
                                      background: {
                                        alt: `person using both laptop and smartphone`,
                                        fit: `fill`,
                                        intrinsicHeight: 6229,
                                        intrinsicWidth: 4672,
                                        loading: w(
                                          (m?.y || 0) + 140 + 1547 + 0 + 0 + 60 + 832 + 0 + 1605
                                        ),
                                        pixelHeight: 3233,
                                        pixelWidth: 4849,
                                        sizes: `max(min(${m?.width || `100vw`} - 80px, 1050px), 50px)`,
                                        ...Z(A),
                                      },
                                    },
                                  },
                                  children: /*#__PURE__*/ u(J, {
                                    __framer__animate: { transition: Y },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Q,
                                    __framer__exit: $,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    background: {
                                      alt: `person using both laptop and smartphone`,
                                      fit: `fill`,
                                      intrinsicHeight: 6229,
                                      intrinsicWidth: 4672,
                                      loading: w(
                                        (m?.y || 0) + 140 + 1020 + 0 + 100 + 912 + 0 + 525
                                      ),
                                      pixelHeight: 3233,
                                      pixelWidth: 4849,
                                      sizes: `max((min(max(${m?.width || `100vw`} - 40px, 1px), 1050px) - 20px) / 3, 50px)`,
                                      ...Z(A),
                                    },
                                    className: `framer-vwq8sg`,
                                    fitImageDimension: `height`,
                                    id: `vwq8sg`,
                                    lightbox: {
                                      backdrop: `rgba(0, 0, 0, 0.8)`,
                                      maxWidth: 800,
                                      padding: 20,
                                      transition: Y,
                                      zIndex: 10,
                                    },
                                    lightboxClassName: H,
                                  }),
                                }),
                                W() &&
                                  /*#__PURE__*/ u(F, {
                                    breakpoint: V,
                                    overrides: {
                                      C7bfNg0Nn: {
                                        background: {
                                          alt: `person using both laptop and smartphone`,
                                          fit: `fill`,
                                          intrinsicHeight: 6764,
                                          intrinsicWidth: 5411,
                                          loading: w(
                                            (m?.y || 0) + 140 + 1209 + 0 + 100 + 912 + 0 + 1160
                                          ),
                                          pixelHeight: 3233,
                                          pixelWidth: 4849,
                                          sizes: `max((min(max(${m?.width || `100vw`} - 80px, 1px), 1050px) - 10px) / 2, 50px)`,
                                          ...Z(M),
                                        },
                                      },
                                    },
                                    children: /*#__PURE__*/ u(J, {
                                      __framer__animate: { transition: Y },
                                      __framer__animateOnce: !0,
                                      __framer__enter: Q,
                                      __framer__exit: $,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0.5,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      background: {
                                        alt: `person using both laptop and smartphone`,
                                        fit: `fill`,
                                        intrinsicHeight: 6764,
                                        intrinsicWidth: 5411,
                                        loading: w(
                                          (m?.y || 0) + 140 + 1020 + 0 + 100 + 912 + 0 + 525
                                        ),
                                        pixelHeight: 3233,
                                        pixelWidth: 4849,
                                        sizes: `max((min(max(${m?.width || `100vw`} - 40px, 1px), 1050px) - 20px) / 3, 50px)`,
                                        ...Z(M),
                                      },
                                      className: `framer-oe3yw8 hidden-dbq4x7`,
                                      fitImageDimension: `height`,
                                      id: `oe3yw8`,
                                      lightbox: {
                                        backdrop: `rgba(0, 0, 0, 0.8)`,
                                        maxWidth: 800,
                                        padding: 20,
                                        transition: Y,
                                        zIndex: 10,
                                      },
                                      lightboxClassName: H,
                                    }),
                                  }),
                                W() &&
                                  /*#__PURE__*/ u(F, {
                                    breakpoint: V,
                                    overrides: {
                                      C7bfNg0Nn: {
                                        background: {
                                          alt: `person in white long-sleeved shirt`,
                                          fit: `fill`,
                                          intrinsicHeight: 6764,
                                          intrinsicWidth: 5411,
                                          loading: w(
                                            (m?.y || 0) + 140 + 1209 + 0 + 100 + 912 + 0 + 1160
                                          ),
                                          pixelHeight: 5085,
                                          pixelWidth: 4068,
                                          sizes: `max((min(max(${m?.width || `100vw`} - 80px, 1px), 1050px) - 10px) / 2, 50px)`,
                                          ...Z(N),
                                        },
                                      },
                                    },
                                    children: /*#__PURE__*/ u(J, {
                                      __framer__animate: { transition: Y },
                                      __framer__animateOnce: !0,
                                      __framer__enter: Q,
                                      __framer__exit: $,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0.5,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      background: {
                                        alt: `person in white long-sleeved shirt`,
                                        fit: `fill`,
                                        intrinsicHeight: 6764,
                                        intrinsicWidth: 5411,
                                        loading: w(
                                          (m?.y || 0) + 140 + 1020 + 0 + 100 + 912 + 0 + 525
                                        ),
                                        pixelHeight: 5085,
                                        pixelWidth: 4068,
                                        sizes: `max((min(max(${m?.width || `100vw`} - 40px, 1px), 1050px) - 20px) / 3, 50px)`,
                                        ...Z(N),
                                      },
                                      className: `framer-3ynfet hidden-dbq4x7`,
                                      fitImageDimension: `height`,
                                      id: `3ynfet`,
                                      lightbox: {
                                        backdrop: `rgba(0, 0, 0, 0.8)`,
                                        maxWidth: 800,
                                        padding: 20,
                                        transition: Y,
                                        zIndex: 10,
                                      },
                                      lightboxClassName: H,
                                    }),
                                  }),
                                W() &&
                                  /*#__PURE__*/ u(F, {
                                    breakpoint: V,
                                    overrides: {
                                      C7bfNg0Nn: {
                                        background: {
                                          alt: `Clapperboard with youtube logo on green screen.`,
                                          fit: `fill`,
                                          intrinsicHeight: 6764,
                                          intrinsicWidth: 5411,
                                          loading: w(
                                            (m?.y || 0) + 140 + 1209 + 0 + 100 + 912 + 0 + 1740
                                          ),
                                          pixelHeight: 3888,
                                          pixelWidth: 5184,
                                          sizes: `max((min(max(${m?.width || `100vw`} - 80px, 1px), 1050px) - 10px) / 2, 50px)`,
                                          ...Z(L),
                                        },
                                      },
                                    },
                                    children: /*#__PURE__*/ u(J, {
                                      __framer__animate: { transition: Y },
                                      __framer__animateOnce: !0,
                                      __framer__enter: Q,
                                      __framer__exit: $,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0.5,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      background: {
                                        alt: `Clapperboard with youtube logo on green screen.`,
                                        fit: `fill`,
                                        intrinsicHeight: 6764,
                                        intrinsicWidth: 5411,
                                        loading: w(
                                          (m?.y || 0) + 140 + 1020 + 0 + 100 + 912 + 0 + 1050
                                        ),
                                        pixelHeight: 3888,
                                        pixelWidth: 5184,
                                        sizes: `max((min(max(${m?.width || `100vw`} - 40px, 1px), 1050px) - 20px) / 3, 50px)`,
                                        ...Z(L),
                                      },
                                      className: `framer-5swrs4 hidden-dbq4x7`,
                                      fitImageDimension: `height`,
                                      id: `5swrs4`,
                                      lightbox: {
                                        backdrop: `rgba(0, 0, 0, 0.8)`,
                                        maxWidth: 800,
                                        padding: 20,
                                        transition: Y,
                                        zIndex: 10,
                                      },
                                      lightboxClassName: H,
                                    }),
                                  }),
                                W() &&
                                  /*#__PURE__*/ u(F, {
                                    breakpoint: V,
                                    overrides: {
                                      C7bfNg0Nn: {
                                        background: {
                                          alt: `woman with sunglasses standing outdoor during daytime`,
                                          fit: `fill`,
                                          intrinsicHeight: 2832,
                                          intrinsicWidth: 4240,
                                          loading: w(
                                            (m?.y || 0) + 140 + 1209 + 0 + 100 + 912 + 0 + 1740
                                          ),
                                          pixelHeight: 5774,
                                          pixelWidth: 3849,
                                          sizes: `max((min(max(${m?.width || `100vw`} - 80px, 1px), 1050px) - 10px) / 2, 50px)`,
                                          ...Z(D),
                                        },
                                      },
                                    },
                                    children: /*#__PURE__*/ u(J, {
                                      __framer__animate: { transition: Y },
                                      __framer__animateOnce: !0,
                                      __framer__enter: Q,
                                      __framer__exit: $,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0.5,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      background: {
                                        alt: `woman with sunglasses standing outdoor during daytime`,
                                        fit: `fill`,
                                        intrinsicHeight: 2832,
                                        intrinsicWidth: 4240,
                                        loading: w(
                                          (m?.y || 0) + 140 + 1020 + 0 + 100 + 912 + 0 + 1050
                                        ),
                                        pixelHeight: 5774,
                                        pixelWidth: 3849,
                                        sizes: `max((min(max(${m?.width || `100vw`} - 40px, 1px), 1050px) - 20px) / 3, 50px)`,
                                        ...Z(D),
                                      },
                                      className: `framer-wsufzo hidden-dbq4x7`,
                                      fitImageDimension: `height`,
                                      id: `wsufzo`,
                                      lightbox: {
                                        backdrop: `rgba(0, 0, 0, 0.8)`,
                                        maxWidth: 800,
                                        padding: 20,
                                        transition: Y,
                                        zIndex: 10,
                                      },
                                      lightboxClassName: H,
                                    }),
                                  }),
                                W() &&
                                  /*#__PURE__*/ u(F, {
                                    breakpoint: V,
                                    overrides: {
                                      C7bfNg0Nn: {
                                        background: {
                                          alt: `a remote control next to a keyboard`,
                                          fit: `fill`,
                                          intrinsicHeight: 6764,
                                          intrinsicWidth: 5411,
                                          loading: w(
                                            (m?.y || 0) + 140 + 1209 + 0 + 100 + 912 + 0 + 2320
                                          ),
                                          pixelHeight: 4865,
                                          pixelWidth: 3892,
                                          sizes: `max((min(max(${m?.width || `100vw`} - 80px, 1px), 1050px) - 10px) / 2, 50px)`,
                                          ...Z(de),
                                        },
                                      },
                                    },
                                    children: /*#__PURE__*/ u(J, {
                                      __framer__animate: { transition: Y },
                                      __framer__animateOnce: !0,
                                      __framer__enter: Q,
                                      __framer__exit: $,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0.5,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      background: {
                                        alt: `a remote control next to a keyboard`,
                                        fit: `fill`,
                                        intrinsicHeight: 6764,
                                        intrinsicWidth: 5411,
                                        loading: w(
                                          (m?.y || 0) + 140 + 1020 + 0 + 100 + 912 + 0 + 1050
                                        ),
                                        pixelHeight: 4865,
                                        pixelWidth: 3892,
                                        sizes: `max((min(max(${m?.width || `100vw`} - 40px, 1px), 1050px) - 20px) / 3, 50px)`,
                                        ...Z(de),
                                      },
                                      className: `framer-1xluaon hidden-dbq4x7`,
                                      fitImageDimension: `height`,
                                      id: `1xluaon`,
                                      lightbox: {
                                        backdrop: `rgba(0, 0, 0, 0.8)`,
                                        maxWidth: 800,
                                        padding: 20,
                                        transition: Y,
                                        zIndex: 10,
                                      },
                                      lightboxClassName: H,
                                    }),
                                  }),
                                W() &&
                                  /*#__PURE__*/ u(F, {
                                    breakpoint: V,
                                    overrides: {
                                      C7bfNg0Nn: {
                                        background: {
                                          alt: `man in white t-shirt holding black video camera`,
                                          fit: `fill`,
                                          intrinsicHeight: 6056,
                                          intrinsicWidth: 4037,
                                          loading: w(
                                            (m?.y || 0) + 140 + 1209 + 0 + 100 + 912 + 0 + 2320
                                          ),
                                          pixelHeight: 1861,
                                          pixelWidth: 2792,
                                          sizes: `max((min(max(${m?.width || `100vw`} - 80px, 1px), 1050px) - 10px) / 2, 50px)`,
                                          ...Z(oe),
                                        },
                                      },
                                    },
                                    children: /*#__PURE__*/ u(J, {
                                      __framer__animate: { transition: Y },
                                      __framer__animateOnce: !0,
                                      __framer__enter: Q,
                                      __framer__exit: $,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0.5,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      background: {
                                        alt: `man in white t-shirt holding black video camera`,
                                        fit: `fill`,
                                        intrinsicHeight: 6056,
                                        intrinsicWidth: 4037,
                                        loading: w(
                                          (m?.y || 0) + 140 + 1020 + 0 + 100 + 912 + 0 + 1575
                                        ),
                                        pixelHeight: 1861,
                                        pixelWidth: 2792,
                                        sizes: `max((min(max(${m?.width || `100vw`} - 40px, 1px), 1050px) - 20px) / 3, 50px)`,
                                        ...Z(oe),
                                      },
                                      className: `framer-frzpxg hidden-dbq4x7`,
                                      fitImageDimension: `height`,
                                      id: `frzpxg`,
                                      lightbox: {
                                        backdrop: `rgba(0, 0, 0, 0.8)`,
                                        maxWidth: 800,
                                        padding: 20,
                                        transition: Y,
                                        zIndex: 10,
                                      },
                                      lightboxClassName: H,
                                    }),
                                  }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                    /*#__PURE__*/ u(h.div, {
                      className: `framer-16yhrcy`,
                      "data-framer-name": `Blog`,
                      layout: Ne,
                      children: /*#__PURE__*/ l(`div`, {
                        className: `framer-td6kd4`,
                        children: [
                          /*#__PURE__*/ u(`div`, {
                            className: `framer-sf8dkx`,
                            "data-framer-name": `H1 + Para`,
                            children: /*#__PURE__*/ l(`div`, {
                              className: `framer-qewier`,
                              children: [
                                /*#__PURE__*/ u(F, {
                                  breakpoint: V,
                                  overrides: {
                                    C7bfNg0Nn: {
                                      y: (m?.y || 0) + 140 + 5371 + 0 + 0 + 100 + 0 + 0 + 0 + 0 + 0,
                                    },
                                    KSa8KtveY: {
                                      y: (m?.y || 0) + 140 + 4789 + 0 + 0 + 60 + 0 + 0 + 0 + 0 + 0,
                                    },
                                  },
                                  children: /*#__PURE__*/ u(R, {
                                    height: 40,
                                    y: (m?.y || 0) + 140 + 4382 + 0 + 0 + 100 + 0 + 0 + 0 + 0 + 0,
                                    children: /*#__PURE__*/ u(qn, {
                                      __framer__animate: { transition: Y },
                                      __framer__animateOnce: !0,
                                      __framer__enter: mr,
                                      __framer__exit: hr,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0.5,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-c0qg2l-container`,
                                      nodeId: `j5MNAnBvL`,
                                      rendersWithMotion: !0,
                                      scopeId: `IF3lVCAg9`,
                                      children: /*#__PURE__*/ u(We, {
                                        gJ8H561ZB: `Case Study`,
                                        height: `100%`,
                                        id: `j5MNAnBvL`,
                                        layoutId: `j5MNAnBvL`,
                                        variant: X(`WgYBRr9mM`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                                /*#__PURE__*/ u(Xn, {
                                  __framer__animate: { transition: lr },
                                  __framer__animateOnce: !0,
                                  __framer__enter: mr,
                                  __framer__exit: gr,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-5ldv5f`,
                                  "data-framer-name": `h1`,
                                  children: /*#__PURE__*/ u(F, {
                                    breakpoint: V,
                                    overrides: {
                                      C7bfNg0Nn: {
                                        children: /*#__PURE__*/ u(i, {
                                          children: /*#__PURE__*/ u(`h2`, {
                                            className: `framer-styles-preset-151rane`,
                                            "data-styles-preset": `F2j_sq2oH`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                                            },
                                            children: `Browse insightful case studies`,
                                          }),
                                        }),
                                      },
                                    },
                                    children: /*#__PURE__*/ u(S, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ u(i, {
                                        children: /*#__PURE__*/ u(`h2`, {
                                          className: `framer-styles-preset-151rane`,
                                          "data-styles-preset": `F2j_sq2oH`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                                          },
                                          children: `Browse more insightful case studies`,
                                        }),
                                      }),
                                      className: `framer-19qr42t`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                          /*#__PURE__*/ u(`div`, {
                            className: `framer-42q0z1`,
                            "data-framer-name": `Case Study`,
                            children: /*#__PURE__*/ u(_e, {
                              children: /*#__PURE__*/ u(yr, {
                                query: vr(T),
                                children: (e, t, n) => {
                                  let r = e?.length ?? 0,
                                    a = _r(r, 0);
                                  return /*#__PURE__*/ l(ee, {
                                    children: [
                                      e?.map(
                                        (
                                          {
                                            Coa2ayQ4h: e,
                                            id: t,
                                            k5wtIPkbZ: n,
                                            pgUXdcP9T: r,
                                            tKimEGjql: i,
                                            WUOYxBUlT: a,
                                          },
                                          o
                                        ) => (
                                          (a ??= ``),
                                          (e ??= ``),
                                          (i ??= ``),
                                          (r ??= ``),
                                          /*#__PURE__*/ u(
                                            te,
                                            {
                                              id: `T8oZQMdKx-${t}`,
                                              children: /*#__PURE__*/ u(Ce.Provider, {
                                                value: { WUOYxBUlT: a },
                                                children: /*#__PURE__*/ u(fe, {
                                                  href: {
                                                    pathVariables: { WUOYxBUlT: a },
                                                    webPageId: `IF3lVCAg9`,
                                                  },
                                                  motionChild: !0,
                                                  nodeId: `G5rTaS9M9`,
                                                  openInNewTab: !1,
                                                  scopeId: `IF3lVCAg9`,
                                                  children: /*#__PURE__*/ u(h.a, {
                                                    className: `framer-djt593 framer-zcalgx`,
                                                    "data-framer-name": `Case Study Card`,
                                                    children: /*#__PURE__*/ u(F, {
                                                      breakpoint: V,
                                                      overrides: {
                                                        C7bfNg0Nn: {
                                                          width: `max(max((min(${m?.width || `100vw`} - 40px, 1050px) - 50px) / 2, 50px), 1px)`,
                                                          y:
                                                            (m?.y || 0) +
                                                            140 +
                                                            5371 +
                                                            0 +
                                                            0 +
                                                            100 +
                                                            173.8 +
                                                            0 +
                                                            0 +
                                                            0,
                                                        },
                                                        KSa8KtveY: {
                                                          width: `max(max(min(${m?.width || `100vw`} - 40px, 1050px) - 40px, 50px), 1px)`,
                                                          y:
                                                            (m?.y || 0) +
                                                            140 +
                                                            4789 +
                                                            0 +
                                                            0 +
                                                            60 +
                                                            143.8 +
                                                            0 +
                                                            0 +
                                                            0,
                                                        },
                                                      },
                                                      children: /*#__PURE__*/ u(R, {
                                                        height: 551,
                                                        width: `max(max((min(${m?.width || `100vw`} - 40px, 1050px) - 10px) / 2, 50px), 1px)`,
                                                        y:
                                                          (m?.y || 0) +
                                                          140 +
                                                          4382 +
                                                          0 +
                                                          0 +
                                                          100 +
                                                          173.8 +
                                                          0 +
                                                          0 +
                                                          0,
                                                        children: /*#__PURE__*/ u(P, {
                                                          className: `framer-qr8hjs-container`,
                                                          nodeId: `R54whj1Jg`,
                                                          scopeId: `IF3lVCAg9`,
                                                          children: /*#__PURE__*/ u(Mt, {
                                                            aaZ7FnCrE: `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                                                            aOLblxFCP: `var(--token-a9c881b7-a087-4bee-a49f-befc82631c31, rgb(242, 242, 242))`,
                                                            dZV3zs1YR: i,
                                                            height: `100%`,
                                                            id: `R54whj1Jg`,
                                                            IyoI1V3GF: Z(n),
                                                            j8k6n0B91: `var(--token-a9c881b7-a087-4bee-a49f-befc82631c31, rgb(242, 242, 242))`,
                                                            jE0SeosuS: r,
                                                            layoutId: `R54whj1Jg`,
                                                            Qhy4ARekQ: !1,
                                                            r1iDEKhi9: `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                                                            snx_V7FlZ: e,
                                                            style: { width: `100%` },
                                                            variant: X(`BBZqBIg5j`),
                                                            width: `100%`,
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            },
                                            t
                                          )
                                        )
                                      ),
                                      a !== !1 &&
                                        /*#__PURE__*/ u(`div`, {
                                          className: `framer-1mhc32k`,
                                          "data-border": !0,
                                          "data-framer-name": `Empty State`,
                                          children: /*#__PURE__*/ u(S, {
                                            __fromCanvasComponent: !0,
                                            children: /*#__PURE__*/ u(i, {
                                              children: /*#__PURE__*/ u(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `rgb(153, 153, 153)`,
                                                },
                                                children: `No items`,
                                              }),
                                            }),
                                            className: `framer-v1qod`,
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
                          /*#__PURE__*/ u(j, {
                            links: [
                              { href: { webPageId: `oZjhJQFrN` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `oZjhJQFrN` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `oZjhJQFrN` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              /*#__PURE__*/ u(F, {
                                breakpoint: V,
                                overrides: {
                                  C7bfNg0Nn: { y: (m?.y || 0) + 140 + 5371 + 0 + 0 + 100 + 794.8 },
                                  KSa8KtveY: {
                                    width: `calc(min(${m?.width || `100vw`} - 40px, 1050px) - 40px)`,
                                    y: (m?.y || 0) + 140 + 4789 + 0 + 0 + 60 + 734.8,
                                  },
                                },
                                children: /*#__PURE__*/ u(R, {
                                  height: 44,
                                  y: (m?.y || 0) + 140 + 4382 + 0 + 0 + 100 + 794.8,
                                  children: /*#__PURE__*/ u(P, {
                                    className: `framer-11zvocl-container`,
                                    nodeId: `pfgODHu5o`,
                                    scopeId: `IF3lVCAg9`,
                                    children: /*#__PURE__*/ u(F, {
                                      breakpoint: V,
                                      overrides: {
                                        C7bfNg0Nn: { arrAKCynS: e[1] },
                                        KSa8KtveY: {
                                          arrAKCynS: e[2],
                                          style: { width: `100%` },
                                          variant: X(`y674jXdOH`),
                                        },
                                      },
                                      children: /*#__PURE__*/ u(Ie, {
                                        arrAKCynS: e[0],
                                        height: `100%`,
                                        id: `pfgODHu5o`,
                                        layoutId: `pfgODHu5o`,
                                        leLsKUYDS: `View All`,
                                        Llv8Wzb_B: `40px`,
                                        variant: X(`NPcMhI0aR`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                          }),
                        ],
                      }),
                    }),
                    /*#__PURE__*/ u(F, {
                      breakpoint: V,
                      overrides: {
                        C7bfNg0Nn: { y: (m?.y || 0) + 140 + 6569.8 },
                        KSa8KtveY: { y: (m?.y || 0) + 140 + 5847.8 },
                      },
                      children: /*#__PURE__*/ u(R, {
                        height: 867,
                        width: `calc(${m?.width || `100vw`} - 40px)`,
                        y: (m?.y || 0) + 140 + 5580.8,
                        children: /*#__PURE__*/ u(P, {
                          className: `framer-1xsw0kb-container`,
                          id: Le,
                          layout: Ne,
                          nodeId: `Nq5sulIsH`,
                          ref: Re,
                          scopeId: `IF3lVCAg9`,
                          children: /*#__PURE__*/ u(F, {
                            breakpoint: V,
                            overrides: {
                              C7bfNg0Nn: {
                                mv4nSZxSZ: `60px 20px 60px 20px`,
                                variant: X(`Tevou_hBQ`),
                              },
                              KSa8KtveY: {
                                mv4nSZxSZ: `60px 20px 60px 20px`,
                                variant: X(`IBr5aMcRq`),
                              },
                            },
                            children: /*#__PURE__*/ u(qe, {
                              height: `100%`,
                              id: `Nq5sulIsH`,
                              KcJ7oF4Ul: `var(--token-a9c881b7-a087-4bee-a49f-befc82631c31, rgb(242, 242, 242))`,
                              layoutId: `Nq5sulIsH`,
                              mv4nSZxSZ: `100px 0px 100px 0px`,
                              style: { width: `100%` },
                              variant: X(`Af0aSGxHz`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                /*#__PURE__*/ u(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      })),
      (Or = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-CSANC.framer-zcalgx, .framer-CSANC .framer-zcalgx { display: block; }`,
        `.framer-CSANC.framer-88uf17 { align-content: center; align-items: center; background-color: var(--token-a9c881b7-a087-4bee-a49f-befc82631c31, #f2f2f2); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 160px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 140px 20px 140px 20px; position: relative; width: 1200px; }`,
        `.framer-CSANC .framer-ehye8l { --border-bottom-width: 1px; --border-color: var(--token-7f38a5f7-db27-44de-8aa2-b6753f733c7b, #dbdbdb); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, #ffffff); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-CSANC .framer-bsnio3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; max-width: 1050px; overflow: var(--overflow-clip-fallback, clip); padding: 160px 0px 100px 0px; position: relative; width: 100%; }`,
        `.framer-CSANC .framer-ul8bmz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; max-width: 650px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-CSANC .framer-1gcs5mf, .framer-CSANC .framer-qewier { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-CSANC .framer-jqarx9, .framer-CSANC .framer-h9cni6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-CSANC .framer-1flxp0x-container, .framer-CSANC .framer-18euhfh-container { flex: none; height: auto; position: relative; width: auto; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-CSANC .framer-ixpxgw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-CSANC .framer-1iujdyt, .framer-CSANC .framer-19qr42t { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-CSANC .framer-sqaxs7 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; opacity: 0.8; position: relative; white-space: pre-wrap; width: 90%; will-change: var(--framer-will-change-effect-override, transform); word-break: break-word; word-wrap: break-word; }`,
        `.framer-CSANC .framer-1lcjial { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1050px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-CSANC .framer-3in34m-container, .framer-CSANC .framer-1w925dd-container, .framer-CSANC .framer-1au045q-container, .framer-CSANC .framer-ccf06j-container, .framer-CSANC .framer-qr8hjs-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-CSANC .framer-lu8i2n-container { -webkit-mask: linear-gradient(0deg, rgba(0, 0, 0, 0) 3%, rgba(0,0,0,1) 37%, rgba(0,0,0,1) 72%, rgba(0, 0, 0, 0) 95%) add; bottom: 0px; flex: none; left: 0px; mask: linear-gradient(0deg, rgba(0,0,0,0) 3%, rgba(0,0,0,1) 37%, rgba(0,0,0,1) 72%, rgba(0, 0, 0, 0) 95%) add; position: absolute; right: 0px; top: 0px; z-index: 0; }`,
        `.framer-CSANC .framer-1voo68k { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: flex-start; max-width: 1050px; padding: 100px 0px 100px 0px; position: relative; width: 1px; }`,
        `.framer-CSANC .framer-1w5xh6a-container { flex: none; height: auto; position: relative; width: 100%; z-index: 2; }`,
        `.framer-CSANC .framer-1b6a281 { --framer-paragraph-spacing: 32px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-CSANC .framer-1x5xqc3 { display: grid; flex: none; gap: 10px; height: min-content; max-width: 1050px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-CSANC .framer-rygt7y, .framer-CSANC .framer-cg9ns5, .framer-CSANC .framer-1qyzjou, .framer-CSANC .framer-vwq8sg, .framer-CSANC .framer-oe3yw8, .framer-CSANC .framer-3ynfet, .framer-CSANC .framer-5swrs4, .framer-CSANC .framer-wsufzo, .framer-CSANC .framer-1xluaon, .framer-CSANC .framer-frzpxg { align-content: center; align-items: center; align-self: start; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; justify-self: start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-CSANC .framer-16yhrcy { align-content: center; align-items: center; background-color: var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, #ffffff); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-CSANC .framer-td6kd4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; max-width: 1050px; overflow: var(--overflow-clip-fallback, clip); padding: 100px 0px 100px 0px; position: relative; width: 100%; }`,
        `.framer-CSANC .framer-sf8dkx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; max-width: 650px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-CSANC .framer-c0qg2l-container, .framer-CSANC .framer-11zvocl-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-CSANC .framer-5ldv5f { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-CSANC .framer-42q0z1 { display: grid; flex: none; gap: 10px 10px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(50px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
        `.framer-CSANC .framer-djt593 { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; text-decoration: none; width: 100%; }`,
        `.framer-CSANC .framer-1mhc32k { --border-bottom-width: 1px; --border-color: rgba(136, 136, 136, 0.2); --border-left-width: 1px; --border-right-width: 1px; --border-style: dashed; --border-top-width: 1px; align-content: center; align-items: center; align-self: start; background-color: rgba(204, 204, 204, 0.2); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100px; justify-content: center; justify-self: start; min-height: 100%; min-width: 100%; padding: 10px; position: relative; width: 100%; }`,
        `.framer-CSANC .framer-v1qod { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-CSANC .framer-1xsw0kb-container { flex: none; height: auto; position: relative; width: 100%; }`,
        ...Le,
        ...Ve,
        ...V,
        ...W,
        ...ft,
        ...Et,
        ...gt,
        ...Ee,
        ...At,
        ...Tt,
        `.framer-CSANC[data-border="true"]::after, .framer-CSANC [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-CSANC.framer-88uf17 { width: 810px; } .framer-CSANC .framer-bsnio3 { padding: 160px 20px 100px 20px; } .framer-CSANC .framer-ul8bmz, .framer-CSANC .framer-sf8dkx { max-width: 500px; } .framer-CSANC .framer-1lcjial { align-content: unset; align-items: unset; display: grid; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); } .framer-CSANC .framer-3in34m-container, .framer-CSANC .framer-1w925dd-container, .framer-CSANC .framer-1au045q-container, .framer-CSANC .framer-ccf06j-container { align-self: start; flex: none; justify-self: start; width: 100%; } .framer-CSANC .framer-h9cni6 { padding: 0px 20px 0px 20px; } .framer-CSANC .framer-td6kd4 { padding: 100px 20px 100px 20px; }}`,
        `@media (max-width: 809.98px) { .framer-CSANC.framer-88uf17 { width: 390px; } .framer-CSANC .framer-bsnio3 { padding: 160px 20px 60px 20px; } .framer-CSANC .framer-ul8bmz { max-width: 380px; } .framer-CSANC .framer-1lcjial { align-content: unset; align-items: unset; display: grid; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(1, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); } .framer-CSANC .framer-3in34m-container, .framer-CSANC .framer-1w925dd-container, .framer-CSANC .framer-1au045q-container, .framer-CSANC .framer-ccf06j-container { align-self: start; flex: none; justify-self: start; position: sticky; top: 100px; width: 100%; z-index: 1; } .framer-CSANC .framer-h9cni6 { flex-direction: column; padding: 0px 20px 0px 20px; } .framer-CSANC .framer-1voo68k { flex: none; gap: 60px; padding: 60px 0px 60px 0px; width: 100%; } .framer-CSANC .framer-rygt7y, .framer-CSANC .framer-cg9ns5, .framer-CSANC .framer-1qyzjou, .framer-CSANC .framer-vwq8sg { z-index: 1; } .framer-CSANC .framer-td6kd4 { gap: 30px; padding: 60px 20px 60px 20px; } .framer-CSANC .framer-42q0z1 { grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-CSANC .framer-11zvocl-container { width: 100%; }}`,
      ]),
      (kr = k(Dr, Or, `framer-CSANC`)),
      (kr.displayName = `Case Studies`),
      (kr.defaultProps = { height: 7988.5, width: 1200 }),
      O(
        kr,
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
          ...Vn,
          ...Gn,
          ...Kn,
          ...Jn,
          ...Zn,
          ...Qn,
          ...$n,
          ...er,
          ...M(Ae),
          ...M(Be),
          ...M(we),
          ...M(Me),
          ...M(pt),
          ...M(Ot),
          ...M(_t),
          ...M(Te),
          ...M(xt),
          ...M(Dt),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (kr.loader = {
        load: (e, t) => {
          let n = t.locale,
            r = ve.get(Sr(se(t.pathVariables, `IF3lVCAg9`)), n).readMaybeAsync();
          return Promise.allSettled([
            A(We, {}, t),
            A(It, {}, t),
            A(q, {}, t),
            A(K, {}, t),
            A(Ie, {}, t),
            A(qe, {}, t),
            (async () => {
              let [e] = (await r) ?? [];
              return ve.get(vr(e?.Coa2ayQ4h), n).preload();
            })(),
            (async () => {
              let [e] = (await r) ?? [],
                i = (await ve.get(vr(e?.Coa2ayQ4h), n).readMaybeAsync()) ?? [];
              return Promise.allSettled(i.flatMap((e) => A(Mt, {}, t)));
            })(),
          ]);
        },
      }),
      (Ar = {
        exports: {
          queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FramerIF3lVCAg9`,
            slots: [],
            annotations: {
              framerIntrinsicHeight: `7988.5`,
              framerImmutableVariables: `true`,
              framerIntrinsicWidth: `1200`,
              framerResponsiveScreen: `true`,
              framerColorSyntax: `true`,
              framerAutoSizeImages: `true`,
              framerContractVersion: `1`,
              framerScrollSections: `{"Nq5sulIsH":{"pattern":":Nq5sulIsH","name":"contact"}}`,
              framerComponentViewportWidth: `true`,
              framerAcceptsLayoutTemplate: `true`,
              framerDisplayContentsDiv: `false`,
              framerLayoutTemplateFlowEffect: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"C7bfNg0Nn":{"layout":["fixed","auto"]},"KSa8KtveY":{"layout":["fixed","auto"]}}}`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
jr();
export { Ar as __FramerMetadata__, kr as default, rr as queryParamNames };
//# sourceMappingURL=lFFLTblqdFWalIhglrcrfAzNXvndoZMwc5a3wHIuDjw.C6zy-not.mjs.map
