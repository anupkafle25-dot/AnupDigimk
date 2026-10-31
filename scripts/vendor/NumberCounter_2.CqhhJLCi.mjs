import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  A as t,
  C as n,
  L as r,
  O as i,
  P as a,
  R as o,
  S as s,
  _ as c,
  b as l,
  j as u,
  l as d,
  o as f,
  p,
  s as m,
  w as h,
  y as g,
} from "./react.p3VyPFJt.mjs";
import { D as _, U as v, i as y, o as b, t as x, w as S } from "./motion.QrWBa877.mjs";
import {
  Dt as C,
  Et as w,
  J as T,
  Lt as E,
  O as D,
  Ot as O,
  bt as k,
  dt as A,
  gt as j,
  j as M,
  k as N,
  o as P,
  p as F,
  vt as ee,
} from "./framer.CEpgxWGc.mjs";
var I, L, R;
function z() {
  return (z = e(() => {
    (T(),
      (I = {
        position: `relative`,
        width: `100%`,
        height: `100%`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }),
      (L = {
        ...I,
        borderRadius: 6,
        background: `rgba(136, 85, 255, 0.3)`,
        color: `#85F`,
        border: `1px dashed #85F`,
        flexDirection: `column`,
      }),
      (R = {
        onClick: { type: P.EventHandler },
        onMouseEnter: { type: P.EventHandler },
        onMouseLeave: { type: P.EventHandler },
      }),
      P.Number,
      P.Boolean,
      P.String,
      P.Enum);
  }))();
}
function te(e, t) {
  return B(!0, e, t);
}
function ne(e, t) {
  return B(!1, e, t);
}
function B(e, t, n = !0) {
  let r = j();
  g(() => {
    n && r === e && t();
  }, [r]);
}
function V() {
  return (V = e(() => {
    (T(), h());
  }))();
}
function H() {
  return (H = e(() => {
    h();
  }))();
}
function U() {
  return (U = e(() => {
    T();
  }))();
}
function W() {
  return (W = e(() => {
    T();
  }))();
}
function G() {
  return (G = e(() => {
    h();
  }))();
}
function K() {
  return (K = e(() => {
    T();
  }))();
}
var q, re;
function J() {
  return (J = e(() => {
    (r(),
      h(),
      (q = () => {
        if (o !== void 0) {
          let e = o.userAgent.toLowerCase();
          return (
            (e.indexOf(`safari`) > -1 ||
              e.indexOf(`framermobile`) > -1 ||
              e.indexOf(`framerx`) > -1) &&
            e.indexOf(`chrome`) < 0
          );
        }
        return !1;
      }),
      (re = () => u(() => q(), [])));
  }))();
}
function Y() {
  return (Y = e(() => {
    (h(), W());
  }))();
}
function X() {
  return (X = e(() => {
    (h(), T(), W(), H());
  }))();
}
function ie() {
  return (ie = e(() => {
    (T(), h(), z());
  }))();
}
function ae() {
  return u(() => E.current(), []);
}
function oe() {
  return u(() => E.current() === E.canvas, []);
}
function se() {
  return (se = e(() => {
    (h(), T());
  }))();
}
function ce() {
  return (ce = e(() => {
    h();
  }))();
}
function le(e) {
  let {
    borderRadius: t,
    isMixedBorderRadius: n,
    topLeftRadius: r,
    topRightRadius: i,
    bottomRightRadius: a,
    bottomLeftRadius: o,
  } = e;
  return u(() => (n ? `${r}px ${i}px ${a}px ${o}px` : `${t}px`), [t, n, r, i, a, o]);
}
var ue;
function de() {
  return (de = e(() => {
    (h(),
      T(),
      (ue = {
        borderRadius: {
          title: `Radius`,
          type: P.FusedNumber,
          toggleKey: `isMixedBorderRadius`,
          toggleTitles: [`Radius`, `Radius per corner`],
          valueKeys: [`topLeftRadius`, `topRightRadius`, `bottomRightRadius`, `bottomLeftRadius`],
          valueLabels: [`TL`, `TR`, `BR`, `BL`],
          min: 0,
        },
      }),
      P.FusedNumber);
  }))();
}
function fe() {
  return (fe = e(() => {
    (z(), V(), H(), U(), W(), G(), K(), J(), Y(), X(), ie(), se(), ce(), de());
  }))();
}
function pe(e) {
  let {
    width: t,
    height: n,
    topLeft: r,
    topRight: i,
    bottomRight: a,
    bottomLeft: o,
    id: s,
    children: c,
    ...l
  } = e;
  return l;
}
function me(e) {
  let t = pe(e);
  return /*#__PURE__*/ f(Se, { ...t });
}
function he(e) {
  let t = j(),
    n = l(!1),
    r = l(!1),
    a = i((t) => {
      if (!e.current) return;
      let n = (t === 1 ? 0.999 : t) * e.current.duration,
        r = Math.abs(e.current.currentTime - n) < 0.1;
      e.current.duration > 0 && !r && (e.current.currentTime = n);
    }, []);
  return {
    play: i(() => {
      let i = e.current;
      i &&
        ((i.preload = `auto`),
        !(
          i.currentTime > 0 &&
          i.onplaying &&
          !i.paused &&
          !i.ended &&
          i.readyState >= i.HAVE_CURRENT_DATA
        ) &&
          i &&
          !n.current &&
          t &&
          ((n.current = !0),
          (r.current = !0),
          i
            .play()
            .catch((e) => {})
            .finally(() => (n.current = !1))));
    }, []),
    pause: i(() => {
      e.current && !n.current && (e.current.pause(), (r.current = !1));
    }, []),
    setProgress: a,
    isPlaying: r,
  };
}
function ge({ playingProp: e, muted: t, loop: n, playsinline: r, controls: i }) {
  let [a] = c(e),
    [o, s] = c(!1);
  e !== a && !o && s(!0);
  let l = a && t && n && r && !i && !o,
    u;
  return ((u = l ? `on-viewport` : a ? `on-mount` : `no-autoplay`), u);
}
function _e(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function ve(e) {
  return (e.match(/[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu) || []).map(_e).join(` `);
}
var ye, be, xe, Se, Ce;
function we() {
  return (we = e(() => {
    (m(),
      T(),
      x(),
      fe(),
      h(),
      (function (e) {
        ((e.Fill = `fill`),
          (e.Contain = `contain`),
          (e.Cover = `cover`),
          (e.None = `none`),
          (e.ScaleDown = `scale-down`));
      })((ye ||= {})),
      (function (e) {
        ((e.Video = `Upload`), (e.Url = `URL`));
      })((be ||= {})),
      (xe = `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`),
      (Se = /*#__PURE__*/ s(function (e) {
        let {
            srcType: t = `URL`,
            srcUrl: n,
            srcFile: r = ``,
            posterEnabled: i = !1,
            controls: a = !1,
            playing: o = !0,
            loop: s = !0,
            muted: c = !0,
            playsinline: d = !0,
            restartOnEnter: p = !1,
            objectFit: m = `cover`,
            backgroundColor: h = `rgba(0,0,0,0)`,
            radius: _ = 0,
            volume: y = 25,
            startTime: b = 0,
            poster: x,
            playing: C,
            progress: w,
            onSeeked: T,
            onPause: D,
            onPlay: O,
            onEnd: k,
            onClick: A,
            onMouseEnter: j,
            onMouseLeave: M,
            onMouseDown: N,
            onMouseUp: P,
          } = e,
          F = l(),
          ee = re(),
          I = l(null),
          L = l(null),
          R = oe(),
          z = ae(),
          B = R || z === E.export,
          V = le(e),
          H = B
            ? `no-autoplay`
            : ge({ playingProp: C, muted: c, loop: s, playsinline: d, controls: a }),
          U = B ? !0 : v(F),
          W = !B && v(F, { margin: `10%`, once: !0 }),
          G = b === 100 ? 99.9 : b,
          { play: K, pause: q, setProgress: J, isPlaying: Y } = he(F);
        (g(() => {
          B || (H !== `on-viewport` && (C ? K() : q()));
        }, [H, C]),
          g(() => {
            B || (U && C && H !== `no-autoplay` && K(), H === `on-viewport` && q());
          }, [H, U, C]),
          g(() => {
            !R || x || i || G || !F.current || (F.current.currentTime = 0.01);
          }, [i, x, G]));
        let X = l(!1);
        (g(() => {
          if (!X.current) {
            X.current = !0;
            return;
          }
          let e = S(w) ? w.get() : (w ?? 0) * 0.01;
          J((e ?? 0) || (G ?? 0) / 100);
        }, [G, r, n, w]),
          g(() => {
            if (S(w)) return w.on(`change`, (e) => J(e));
          }, [w]),
          te(() => {
            I.current !== null && F.current && ((!L && s) || !I.current) && K();
          }),
          ne(() => {
            F.current && ((L.current = F.current.ended), (I.current = F.current.paused), q());
          }));
        let ie = u(() => {
          if (t === `URL`) return n + ``;
          if (t === `Upload`) return r + ``;
        }, [t, r, n, G]);
        return (
          g(() => {
            ee && F.current && H === `on-mount` && setTimeout(() => K(), 50);
          }, []),
          g(() => {
            F.current && !c && (F.current.volume = (y ?? 0) / 100);
          }, [y]),
          /*#__PURE__*/ f(`video`, {
            onClick: A,
            onMouseEnter: j,
            onMouseLeave: M,
            onMouseDown: N,
            onMouseUp: P,
            src: ie,
            loop: s,
            ref: F,
            onSeeked: (e) => T?.(e),
            onPause: (e) => D?.(e),
            onPlay: (e) => O?.(e),
            onEnded: (e) => k?.(e),
            autoPlay: Y.current || H === `on-mount` || (C && H === `on-viewport` && U),
            preload: Y.current
              ? `auto`
              : B && !x
                ? `metadata`
                : H !== `on-mount` && !W
                  ? `none`
                  : `metadata`,
            poster:
              i && !r && n === xe
                ? `https://framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg`
                : i && x
                  ? x
                  : void 0,
            onLoadedData: () => {
              let e = F.current;
              e &&
                (e.currentTime < 0.3 && G > 0 && J((G ?? 0) * 0.01),
                (Y.current || H === `on-mount` || (C && H === `on-viewport` && U)) && K());
            },
            controls: a,
            muted: B ? !0 : c,
            playsInline: d,
            style: {
              cursor: A ? `pointer` : `auto`,
              width: `100%`,
              height: `100%`,
              borderRadius: V,
              display: `block`,
              objectFit: m,
              backgroundColor: h,
              objectPosition: `50% 50%`,
            },
          })
        );
      })),
      (me.displayName = `Video`),
      (Ce = [`cover`, `fill`, `contain`, `scale-down`, `none`]),
      N(me, {
        srcType: {
          type: P.Enum,
          displaySegmentedControl: !0,
          title: `Source`,
          options: [`URL`, `Upload`],
        },
        srcUrl: {
          type: P.String,
          title: `URL`,
          defaultValue: `https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
          hidden(e) {
            return e.srcType === `Upload`;
          },
        },
        srcFile: {
          type: P.File,
          title: `File`,
          allowedFileTypes: [`mp4`, `webm`],
          description: `Only MP4 and WebM`,
          hidden(e) {
            return e.srcType === `URL`;
          },
        },
        playing: { type: P.Boolean, title: `Playing`, enabledTitle: `Yes`, disabledTitle: `No` },
        ...ue,
        posterEnabled: {
          type: P.Boolean,
          title: `Poster`,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
        },
        poster: {
          type: P.Image,
          title: `Image`,
          hidden: ({ posterEnabled: e }) => !e,
          description: `We recommend adding a poster. [Learn more](https://www.framer.com/help/articles/how-are-videos-optimized-in-framer/).`,
        },
        backgroundColor: { type: P.Color, title: `Background`, defaultValue: `rgba(0,0,0,0)` },
        startTime: { title: `Start Time`, type: P.Number, min: 0, max: 100, step: 0.1, unit: `%` },
        loop: { type: P.Boolean, title: `Loop`, enabledTitle: `Yes`, disabledTitle: `No` },
        objectFit: { type: P.Enum, title: `Fit`, options: Ce, optionTitles: Ce.map(ve) },
        controls: {
          type: P.Boolean,
          title: `Controls`,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
          defaultValue: !1,
        },
        muted: { type: P.Boolean, title: `Muted`, enabledTitle: `Yes`, disabledTitle: `No` },
        volume: {
          type: P.Number,
          max: 100,
          min: 0,
          unit: `%`,
          hidden: ({ muted: e }) => e,
          defaultValue: 25,
        },
        onEnd: { type: P.EventHandler },
        onSeeked: { type: P.EventHandler },
        onPause: { type: P.EventHandler },
        onPlay: { type: P.EventHandler },
        ...R,
      }));
  }))();
}
var Te, Ee, De, Oe, ke, Ae, Z;
function je() {
  return (je = e(() => {
    (m(),
      T(),
      h(),
      (Te = `var(--framer-icon-mask)`),
      (Ee = /*#__PURE__*/ p(function (e, t) {
        return /*#__PURE__*/ f(`svg`, { ...e, ref: t, children: e.children });
      })),
      (De = _.create(Ee)),
      (Oe = /*#__PURE__*/ p((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? /*#__PURE__*/ f(De, { ...a, layoutId: r, ref: t, children: i })
          : /*#__PURE__*/ f(`svg`, { ...a, ref: t, children: i });
      })),
      (ke = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0.75 16.5 C 0.336 16.5 0 16.164 0 15.75 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 4.5 0 C 4.914 0 5.25 0.336 5.25 0.75 L 5.25 15.75 C 5.25 16.164 4.914 16.5 4.5 16.5 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="16.5px" id="bjzv2vyiE" transform="translate(14.25 3.75)" width="5.25px"/><path d="M 0.75 16.5 C 0.336 16.5 0 16.164 0 15.75 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 4.5 0 C 4.914 0 5.25 0.336 5.25 0.75 L 5.25 15.75 C 5.25 16.164 4.914 16.5 4.5 16.5 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="16.5px" id="bil1FrzZp" transform="translate(4.5 3.75)" width="5.25px"/><path d="M 0.75 16.5 C 0.336 16.5 0 16.164 0 15.75 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 4.5 0 C 4.914 0 5.25 0.336 5.25 0.75 L 5.25 15.75 C 5.25 16.164 4.914 16.5 4.5 16.5 Z" fill="transparent" height="16.5px" id="huwkPkncM" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(14.25 3.75)" width="5.25px"/><path d="M 0.75 16.5 C 0.336 16.5 0 16.164 0 15.75 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 4.5 0 C 4.914 0 5.25 0.336 5.25 0.75 L 5.25 15.75 C 5.25 16.164 4.914 16.5 4.5 16.5 Z" fill="transparent" height="16.5px" id="vRiS9o8hW" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(4.5 3.75)" width="5.25px"/></svg>`),
      (Ae = ({ alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o }) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh,
      })),
      (Z = O(
        /* @__PURE__ */ p(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              ezTt3ayMo: o,
              lschgej4H: s,
              qxTvv_EBh: c,
              ...l
            } = Ae(e),
            u = w(`1411738543`, ke);
          return /*#__PURE__*/ f(Oe, {
            ...l,
            className: M(`framer-gRrkJ`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": c, "--21h8s6": o, "--pgex8v": s, ...n },
            viewBox: `0 0 24 24`,
            children: /*#__PURE__*/ f(`use`, { href: u }),
          });
        }),
        [
          `.framer-gRrkJ { -webkit-mask: ${Te}; aspect-ratio: 1; display: block; mask: ${Te}; width: 24px; }`,
        ],
        `framer-gRrkJ`
      )),
      (Z.displayName = `Pause`),
      N(Z, {
        ezTt3ayMo: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: P.Color },
        lschgej4H: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 6,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: P.Number,
        },
        qxTvv_EBh: {
          defaultValue: 0,
          displayStepper: !0,
          hidden: !1,
          max: 1,
          min: 0,
          step: 0.1,
          title: `Alpha`,
          type: P.Number,
        },
      }));
  }))();
}
var Me, Ne, Pe, Fe, Ie, Le, Q;
function Re() {
  return (Re = e(() => {
    (m(),
      T(),
      h(),
      (Me = `var(--framer-icon-mask)`),
      (Ne = /*#__PURE__*/ p(function (e, t) {
        return /*#__PURE__*/ f(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Pe = _.create(Ne)),
      (Fe = /*#__PURE__*/ p((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? /*#__PURE__*/ f(Pe, { ...a, layoutId: r, ref: t, children: i })
          : /*#__PURE__*/ f(`svg`, { ...a, ref: t, children: i });
      })),
      (Ie = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0.736 L 0 17.259 C 0.005 17.527 0.153 17.772 0.388 17.902 C 0.623 18.031 0.91 18.025 1.139 17.886 L 14.647 9.625 C 14.866 9.492 15 9.254 15 8.997 C 15 8.741 14.866 8.503 14.647 8.37 L 1.139 0.109 C 0.91 -0.03 0.623 -0.036 0.388 0.093 C 0.153 0.222 0.005 0.468 0 0.736 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="17.99464343330372px" id="aA4uwAbk9" transform="translate(6.75 3.003)" width="15.000071766041629px"/><path d="M 0 0.736 L 0 17.259 C 0.005 17.527 0.153 17.772 0.388 17.902 C 0.623 18.031 0.91 18.025 1.139 17.886 L 14.647 9.625 C 14.866 9.492 15 9.254 15 8.997 C 15 8.741 14.866 8.503 14.647 8.37 L 1.139 0.109 C 0.91 -0.03 0.623 -0.036 0.388 0.093 C 0.153 0.222 0.005 0.468 0 0.736 Z" fill="transparent" height="17.99464343330372px" id="dfZTdlcyH" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(6.75 3.003)" width="15.000071766041629px"/></svg>`),
      (Le = ({ alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o }) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh,
      })),
      (Q = O(
        /* @__PURE__ */ p(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              ezTt3ayMo: o,
              lschgej4H: s,
              qxTvv_EBh: c,
              ...l
            } = Le(e),
            u = w(`3492944464`, Ie);
          return /*#__PURE__*/ f(Fe, {
            ...l,
            className: M(`framer-Lyd6D`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": c, "--21h8s6": o, "--pgex8v": s, ...n },
            viewBox: `0 0 24 24`,
            children: /*#__PURE__*/ f(`use`, { href: u }),
          });
        }),
        [
          `.framer-Lyd6D { -webkit-mask: ${Me}; aspect-ratio: 1; display: block; mask: ${Me}; width: 24px; }`,
        ],
        `framer-Lyd6D`
      )),
      (Q.displayName = `Play`),
      N(Q, {
        ezTt3ayMo: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: P.Color },
        lschgej4H: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 6,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: P.Number,
        },
        qxTvv_EBh: {
          defaultValue: 0,
          displayStepper: !0,
          hidden: !1,
          max: 1,
          min: 0,
          step: 0.1,
          title: `Alpha`,
          type: P.Number,
        },
      }));
  }))();
}
function ze(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Be, Ve, He, Ue, We, Ge, Ke, qe, Je, $;
function Ye() {
  return (Ye = e(() => {
    (m(),
      T(),
      x(),
      h(),
      je(),
      Re(),
      (Be = [`qVpDFd__L`, `FYLhsC0x3`, `TFuPYIsuB`, `UeDhBGhcP`]),
      (Ve = `framer-hXw2Y`),
      (He = {
        FYLhsC0x3: `framer-v-5p6z1q`,
        qVpDFd__L: `framer-v-tbytlc`,
        TFuPYIsuB: `framer-v-z69b8i`,
        UeDhBGhcP: `framer-v-1rnqt6`,
      }),
      (Ue = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (We = ({ value: e, children: n }) => {
        let r = t(b),
          i = e ?? r.transition,
          a = u(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ f(b.Provider, { value: a, children: n });
      }),
      (Ge = {
        "Pause Small": `TFuPYIsuB`,
        "Play Small": `FYLhsC0x3`,
        Pause: `UeDhBGhcP`,
        Play: `qVpDFd__L`,
      }),
      (Ke = _.create(a)),
      (qe = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Ge[r.variant] ?? r.variant ?? `qVpDFd__L`,
      })),
      (Je = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = O(
        /* @__PURE__ */ p(function (e, t) {
          let r = l(null),
            i = t ?? r,
            a = n(),
            { activeLocale: o, setLocale: s } = k();
          A();
          let { style: c, className: u, layoutId: d, variant: p, ...m } = qe(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: v,
              gestureHandlers: b,
              gestureVariant: x,
              isLoading: S,
              setGestureState: w,
              setVariant: T,
              variants: E,
            } = C({
              cycleOrder: Be,
              defaultVariant: `qVpDFd__L`,
              ref: i,
              variant: p,
              variantClassNames: He,
            }),
            D = Je(e, E),
            O = M(Ve);
          return /*#__PURE__*/ f(y, {
            id: d ?? a,
            children: /*#__PURE__*/ f(Ke, {
              animate: E,
              initial: !1,
              children: /*#__PURE__*/ f(We, {
                value: Ue,
                children: /*#__PURE__*/ f(_.div, {
                  ...m,
                  ...b,
                  className: M(O, `framer-tbytlc`, u, g),
                  "data-framer-name": `Play`,
                  layoutDependency: D,
                  layoutId: `qVpDFd__L`,
                  ref: i,
                  style: {
                    backgroundColor: `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                    borderBottomLeftRadius: 80.45,
                    borderBottomRightRadius: 80.45,
                    borderTopLeftRadius: 80.45,
                    borderTopRightRadius: 80.45,
                    ...c,
                  },
                  ...ze(
                    {
                      FYLhsC0x3: { "data-framer-name": `Play Small` },
                      TFuPYIsuB: { "data-framer-name": `Pause Small` },
                      UeDhBGhcP: { "data-framer-name": `Pause` },
                    },
                    h,
                    x
                  ),
                  children: /*#__PURE__*/ f(F, {
                    animated: !0,
                    className: `framer-4oq45s`,
                    Component: Q,
                    layoutDependency: D,
                    layoutId: `ByByoumXs`,
                    style: {
                      "--1m6trwb": 1,
                      "--21h8s6": `var(--token-385efb18-273b-4274-97fe-e0c9e9a7b6b4, rgb(0, 0, 0))`,
                      "--pgex8v": 1.5,
                    },
                    ...ze({ TFuPYIsuB: { Component: Z }, UeDhBGhcP: { Component: Z } }, h, x),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-hXw2Y.framer-396sio, .framer-hXw2Y .framer-396sio { display: block; }`,
          `.framer-hXw2Y.framer-tbytlc { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 20.11px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 20.11px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-hXw2Y .framer-4oq45s { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 49px); position: relative; width: 48px; }`,
          `.framer-hXw2Y.framer-v-5p6z1q.framer-tbytlc, .framer-hXw2Y.framer-v-z69b8i.framer-tbytlc { padding: 10px; }`,
          `.framer-hXw2Y.framer-v-5p6z1q .framer-4oq45s, .framer-hXw2Y.framer-v-z69b8i .framer-4oq45s { height: var(--framer-aspect-ratio-supported, 35px); width: 35px; }`,
        ],
        `framer-hXw2Y`
      )),
      ($.displayName = `Play + Pause Cursor`),
      ($.defaultProps = { height: 88.5, width: 88.5 }),
      N($, {
        variant: {
          options: [`qVpDFd__L`, `FYLhsC0x3`, `TFuPYIsuB`, `UeDhBGhcP`],
          optionTitles: [`Play`, `Play Small`, `Pause Small`, `Pause`],
          title: `Variant`,
          type: P.Enum,
        },
      }),
      D($, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  }))();
}
function Xe(e, t) {
  return e.toLocaleString(void 0, { minimumFractionDigits: t, maximumFractionDigits: t });
}
function Ze(e) {
  let {
      start: t = 0,
      end: n = 100,
      duration: r = 1.5,
      delay: a = 0,
      decimals: o = 0,
      easing: s = `easeOut`,
      font: f,
      color: p,
      align: m,
      autoStart: h,
      loop: _,
      resetOnReentry: y,
      suffix: b,
      style: x,
    } = e,
    S = ee(),
    C = l(null),
    w = v(C, { once: !_ && !y }),
    [T, D] = c(t),
    [O, k] = c(!1),
    [A, j] = c(0),
    M = l(null),
    N = l(null),
    P = i(() => {
      if (S || E.current() === E.thumbnail) {
        D(n);
        return;
      }
      let e = null,
        i = null;
      function o(a) {
        e ||= a;
        let c = (a - e) / 1e3,
          l = Math.min(1, Math.max(0, c / r)),
          u = Qe[s] || Qe.easeOut,
          d = t + (n - t) * u(l);
        (D(l < 1 ? d : n),
          l < 1
            ? ((i = requestAnimationFrame(o)), (N.current = i))
            : _ &&
              (M.current = setTimeout(() => {
                (D(t), j((e) => e + 1));
              }, 300)));
      }
      a > 0
        ? (M.current = setTimeout(() => {
            (D(t), (i = requestAnimationFrame(o)), (N.current = i));
          }, a * 1e3))
        : (D(t), (i = requestAnimationFrame(o)), (N.current = i));
    }, [t, n, r, a, s, _, S]);
  (g(() => {
    h && (w ? k(!0) : y && (k(!1), D(t)));
  }, [w, h, y, t]),
    g(() => {
      if (O)
        return (
          P(),
          () => {
            (N.current && cancelAnimationFrame(N.current), M.current && clearTimeout(M.current));
          }
        );
    }, [O, A, P]));
  let F = () => {
      h || k(!0);
    },
    I = u(
      () => ({
        ...x,
        display: `inline-block`,
        width: x && x.width === `100%` ? `100%` : `max-content`,
        height: x && x.height === `100%` ? `100%` : `max-content`,
        textAlign: m,
        color: p,
        ...f,
        cursor: h ? `default` : `pointer`,
        userSelect: `none`,
      }),
      [x, m, p, f, h]
    );
  return /*#__PURE__*/ d(`span`, {
    ref: C,
    style: I,
    "aria-live": `polite`,
    tabIndex: 0,
    onClick: F,
    children: [Xe(T, o), b],
  });
}
var Qe;
function $e() {
  return ($e = e(() => {
    (m(),
      h(),
      T(),
      (Qe = {
        linear: (e) => e,
        easeIn: (e) => e * e,
        easeOut: (e) => e * (2 - e),
        easeInOut: (e) => (e < 0.5 ? 2 * e * e : -1 + (4 - 2 * e) * e),
      }),
      N(Ze, {
        start: { type: P.Number, title: `Start`, defaultValue: 0 },
        end: { type: P.Number, title: `End`, defaultValue: 100 },
        duration: {
          type: P.Number,
          title: `Duration`,
          defaultValue: 1.5,
          min: 0.1,
          max: 10,
          step: 0.1,
          unit: `s`,
        },
        delay: {
          type: P.Number,
          title: `Delay`,
          defaultValue: 0,
          min: 0,
          max: 5,
          step: 0.1,
          unit: `s`,
        },
        decimals: {
          type: P.Number,
          title: `Decimals`,
          defaultValue: 0,
          min: 0,
          max: 6,
          step: 1,
          displayStepper: !0,
        },
        easing: {
          type: P.Enum,
          title: `Easing`,
          options: [`linear`, `easeIn`, `easeOut`, `easeInOut`],
          optionTitles: [`Linear`, `Ease In`, `Ease Out`, `Ease In Out`],
          defaultValue: `easeOut`,
          displaySegmentedControl: !0,
        },
        font: {
          type: P.Font,
          title: `Font`,
          controls: `extended`,
          defaultFontType: `sans-serif`,
          defaultValue: {
            fontSize: `40px`,
            variant: `Bold`,
            letterSpacing: `-0.04em`,
            lineHeight: `1em`,
          },
        },
        color: { type: P.Color, title: `Color`, defaultValue: `#000000` },
        align: {
          type: P.Enum,
          title: `Align`,
          options: [`left`, `center`, `right`],
          optionTitles: [`Left`, `Center`, `Right`],
          defaultValue: `center`,
          displaySegmentedControl: !0,
        },
        suffix: { type: P.String, title: `Suffix`, defaultValue: ``, placeholder: `%` },
        autoStart: {
          type: P.Boolean,
          title: `Auto Start`,
          defaultValue: !0,
          enabledTitle: `Auto`,
          disabledTitle: `Manual`,
        },
        loop: {
          type: P.Boolean,
          title: `Loop`,
          defaultValue: !1,
          enabledTitle: `Loop`,
          disabledTitle: `Once`,
        },
        resetOnReentry: {
          type: P.Boolean,
          title: `Reset on Re-entry`,
          defaultValue: !1,
          enabledTitle: `Reset`,
          disabledTitle: `No Reset`,
        },
      }));
  }))();
}
export {
  L as C,
  R as S,
  re as _,
  Q as a,
  ne as b,
  we as c,
  de as d,
  le as f,
  J as g,
  ae as h,
  Ye as i,
  fe as l,
  oe as m,
  $e as n,
  Re as o,
  se as p,
  $ as r,
  me as s,
  Ze as t,
  ue as u,
  V as v,
  z as w,
  I as x,
  te as y,
};
//# sourceMappingURL=NumberCounter_2.CqhhJLCi.mjs.map
