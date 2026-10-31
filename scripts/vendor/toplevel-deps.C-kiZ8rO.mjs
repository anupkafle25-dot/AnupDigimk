import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  A as t,
  C as n,
  L as r,
  P as i,
  b as a,
  c as o,
  j as s,
  l as c,
  o as l,
  p as u,
  s as d,
  w as f,
  y as p,
  z as m,
} from "./react.p3VyPFJt.mjs";
import { D as h, i as g, o as _, t as v } from "./motion.QrWBa877.mjs";
import {
  B as y,
  C as b,
  D as x,
  Dt as ee,
  E as S,
  Et as C,
  Ft as w,
  H as te,
  J as T,
  Lt as E,
  M as D,
  Mt as O,
  N as k,
  Nt as A,
  O as j,
  Ot as M,
  P as N,
  S as P,
  T as ne,
  Tt as re,
  V as F,
  _t as ie,
  a as ae,
  b as I,
  bt as oe,
  c as L,
  dt as se,
  f as ce,
  h as R,
  ht as le,
  i as z,
  it as ue,
  j as B,
  jt as de,
  k as V,
  l as fe,
  mt as pe,
  o as H,
  u as me,
  ut as he,
} from "./framer.CEpgxWGc.mjs";
function ge(e, t, n) {
  return Math.max(e, Math.min(t, n));
}
var _e, ve, ye, be, xe, Se;
function Ce() {
  return (Ce = e(() => {
    (r(),
      (_e = class {
        advance(e) {
          if (!this.isRunning) return;
          let t = !1;
          if (this.lerp)
            ((this.value = (function (e, t, n, r) {
              return (function (e, t, n) {
                return (1 - n) * e + n * t;
              })(e, t, 1 - Math.exp(-n * r));
            })(this.value, this.to, 60 * this.lerp, e)),
              Math.round(this.value) === this.to && ((this.value = this.to), (t = !0)));
          else {
            this.currentTime += e;
            let n = ge(0, this.currentTime / this.duration, 1);
            t = n >= 1;
            let r = t ? 1 : this.easing(n);
            this.value = this.from + (this.to - this.from) * r;
          }
          (t && this.stop(), this.onUpdate?.(this.value, t));
        }
        stop() {
          this.isRunning = !1;
        }
        fromTo(
          e,
          t,
          { lerp: n = 0.1, duration: r = 1, easing: i = (e) => e, onStart: a, onUpdate: o }
        ) {
          ((this.from = this.value = e),
            (this.to = t),
            (this.lerp = n),
            (this.duration = r),
            (this.easing = i),
            (this.currentTime = 0),
            (this.isRunning = !0),
            a?.(),
            (this.onUpdate = o));
        }
      }),
      (ve = class {
        constructor({ wrapper: e, content: t, autoResize: n = !0, debounce: r = 250 } = {}) {
          ((this.wrapper = e),
            (this.content = t),
            n &&
              ((this.debouncedResize = (function (e, t) {
                let n;
                return function () {
                  let r = arguments,
                    i = this;
                  (clearTimeout(n),
                    (n = setTimeout(function () {
                      e.apply(i, r);
                    }, t)));
                };
              })(this.resize, r)),
              this.wrapper === m
                ? m.addEventListener(`resize`, this.debouncedResize, !1)
                : ((this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize)),
                  this.wrapperResizeObserver.observe(this.wrapper)),
              (this.contentResizeObserver = new ResizeObserver(this.debouncedResize)),
              this.contentResizeObserver.observe(this.content)),
            this.resize());
        }
        destroy() {
          (this.wrapperResizeObserver?.disconnect(),
            this.contentResizeObserver?.disconnect(),
            m.removeEventListener(`resize`, this.debouncedResize, !1));
        }
        resize = () => {
          (this.onWrapperResize(), this.onContentResize());
        };
        onWrapperResize = () => {
          this.wrapper === m
            ? ((this.width = m.innerWidth), (this.height = m.innerHeight))
            : ((this.width = this.wrapper.clientWidth), (this.height = this.wrapper.clientHeight));
        };
        onContentResize = () => {
          this.wrapper === m
            ? ((this.scrollHeight = this.content.scrollHeight),
              (this.scrollWidth = this.content.scrollWidth))
            : ((this.scrollHeight = this.wrapper.scrollHeight),
              (this.scrollWidth = this.wrapper.scrollWidth));
        };
        get limit() {
          return { x: this.scrollWidth - this.width, y: this.scrollHeight - this.height };
        }
      }),
      (ye = class {
        constructor() {
          this.events = {};
        }
        emit(e, ...t) {
          let n = this.events[e] || [];
          for (let e = 0, r = n.length; e < r; e++) n[e](...t);
        }
        on(e, t) {
          return (
            this.events[e]?.push(t) || (this.events[e] = [t]),
            () => {
              this.events[e] = this.events[e]?.filter((e) => t !== e);
            }
          );
        }
        off(e, t) {
          this.events[e] = this.events[e]?.filter((e) => t !== e);
        }
        destroy() {
          this.events = {};
        }
      }),
      (be = 100 / 6),
      (xe = class {
        constructor(e, { wheelMultiplier: t = 1, touchMultiplier: n = 1 }) {
          ((this.element = e),
            (this.wheelMultiplier = t),
            (this.touchMultiplier = n),
            (this.touchStart = { x: null, y: null }),
            (this.emitter = new ye()),
            m.addEventListener(`resize`, this.onWindowResize, !1),
            this.onWindowResize(),
            this.element.addEventListener(`wheel`, this.onWheel, { passive: !1 }),
            this.element.addEventListener(`touchstart`, this.onTouchStart, { passive: !1 }),
            this.element.addEventListener(`touchmove`, this.onTouchMove, { passive: !1 }),
            this.element.addEventListener(`touchend`, this.onTouchEnd, { passive: !1 }));
        }
        on(e, t) {
          return this.emitter.on(e, t);
        }
        destroy() {
          (this.emitter.destroy(),
            m.removeEventListener(`resize`, this.onWindowResize, !1),
            this.element.removeEventListener(`wheel`, this.onWheel, { passive: !1 }),
            this.element.removeEventListener(`touchstart`, this.onTouchStart, { passive: !1 }),
            this.element.removeEventListener(`touchmove`, this.onTouchMove, { passive: !1 }),
            this.element.removeEventListener(`touchend`, this.onTouchEnd, { passive: !1 }));
        }
        onTouchStart = (e) => {
          let { clientX: t, clientY: n } = e.targetTouches ? e.targetTouches[0] : e;
          ((this.touchStart.x = t),
            (this.touchStart.y = n),
            (this.lastDelta = { x: 0, y: 0 }),
            this.emitter.emit(`scroll`, { deltaX: 0, deltaY: 0, event: e }));
        };
        onTouchMove = (e) => {
          let { clientX: t, clientY: n } = e.targetTouches ? e.targetTouches[0] : e,
            r = -(t - this.touchStart.x) * this.touchMultiplier,
            i = -(n - this.touchStart.y) * this.touchMultiplier;
          ((this.touchStart.x = t),
            (this.touchStart.y = n),
            (this.lastDelta = { x: r, y: i }),
            this.emitter.emit(`scroll`, { deltaX: r, deltaY: i, event: e }));
        };
        onTouchEnd = (e) => {
          this.emitter.emit(`scroll`, {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: e,
          });
        };
        onWheel = (e) => {
          let { deltaX: t, deltaY: n, deltaMode: r } = e;
          ((t *= r === 1 ? be : r === 2 ? this.windowWidth : 1),
            (n *= r === 1 ? be : r === 2 ? this.windowHeight : 1),
            (t *= this.wheelMultiplier),
            (n *= this.wheelMultiplier),
            this.emitter.emit(`scroll`, { deltaX: t, deltaY: n, event: e }));
        };
        onWindowResize = () => {
          ((this.windowWidth = m.innerWidth), (this.windowHeight = m.innerHeight));
        };
      }),
      (Se = class {
        constructor({
          wrapper: e = m,
          content: t = document.documentElement,
          wheelEventsTarget: n = e,
          eventsTarget: r = n,
          smoothWheel: i = !0,
          syncTouch: a = !1,
          syncTouchLerp: o = 0.075,
          touchInertiaMultiplier: s = 35,
          duration: c,
          easing: l = (e) => Math.min(1, 1.001 - 2 ** (-10 * e)),
          lerp: u = !c && 0.1,
          infinite: d = !1,
          orientation: f = `vertical`,
          gestureOrientation: p = `vertical`,
          touchMultiplier: h = 1,
          wheelMultiplier: g = 1,
          autoResize: _ = !0,
          prevent: v = !1,
          __experimental__naiveDimensions: y = !1,
        } = {}) {
          ((this.__isScrolling = !1),
            (this.__isStopped = !1),
            (this.__isLocked = !1),
            (this.onVirtualScroll = ({ deltaX: e, deltaY: t, event: n }) => {
              if (n.ctrlKey) return;
              let r = n.type.includes(`touch`),
                i = n.type.includes(`wheel`);
              if (
                ((this.isTouching = n.type === `touchstart` || n.type === `touchmove`),
                this.options.syncTouch &&
                  r &&
                  n.type === `touchstart` &&
                  !this.isStopped &&
                  !this.isLocked)
              )
                return void this.reset();
              let a = e === 0 && t === 0,
                o =
                  (this.options.gestureOrientation === `vertical` && t === 0) ||
                  (this.options.gestureOrientation === `horizontal` && e === 0);
              if (a || o) return;
              let s = n.composedPath();
              s = s.slice(0, s.indexOf(this.rootElement));
              let c = this.options.prevent;
              if (
                s.find(
                  (e) =>
                    (typeof c == `function` ? c?.(e) : c) ||
                    e.hasAttribute?.call(e, `data-lenis-prevent`) ||
                    (r && e.hasAttribute?.call(e, `data-lenis-prevent-touch`)) ||
                    (i && e.hasAttribute?.call(e, `data-lenis-prevent-wheel`)) ||
                    (e.classList?.contains(`lenis`) && !e.classList?.contains(`lenis-stopped`))
                )
              )
                return;
              if (this.isStopped || this.isLocked) return void n.preventDefault();
              if (!((this.options.syncTouch && r) || (this.options.smoothWheel && i)))
                return ((this.isScrolling = `native`), void this.animate.stop());
              n.preventDefault();
              let l = t;
              this.options.gestureOrientation === `both`
                ? (l = Math.abs(t) > Math.abs(e) ? t : e)
                : this.options.gestureOrientation === `horizontal` && (l = e);
              let u = r && this.options.syncTouch,
                d = r && n.type === `touchend` && Math.abs(l) > 5;
              (d && (l = this.velocity * this.options.touchInertiaMultiplier),
                this.scrollTo(
                  this.targetScroll + l,
                  Object.assign(
                    { programmatic: !1 },
                    u
                      ? { lerp: d ? this.options.syncTouchLerp : 1 }
                      : {
                          lerp: this.options.lerp,
                          duration: this.options.duration,
                          easing: this.options.easing,
                        }
                  )
                ));
            }),
            (this.onNativeScroll = () => {
              if (
                (clearTimeout(this.__resetVelocityTimeout),
                delete this.__resetVelocityTimeout,
                this.__preventNextNativeScrollEvent)
              )
                delete this.__preventNextNativeScrollEvent;
              else if (!1 === this.isScrolling || this.isScrolling === `native`) {
                let e = this.animatedScroll;
                ((this.animatedScroll = this.targetScroll = this.actualScroll),
                  (this.lastVelocity = this.velocity),
                  (this.velocity = this.animatedScroll - e),
                  (this.direction = Math.sign(this.animatedScroll - e)),
                  (this.isScrolling = `native`),
                  this.emit(),
                  this.velocity !== 0 &&
                    (this.__resetVelocityTimeout = setTimeout(() => {
                      ((this.lastVelocity = this.velocity),
                        (this.velocity = 0),
                        (this.isScrolling = !1),
                        this.emit());
                    }, 400)));
              }
            }),
            (m.lenisVersion = `1.1.2`),
            (e !== document.documentElement && e !== document.body) || (e = m),
            (this.options = {
              wrapper: e,
              content: t,
              wheelEventsTarget: n,
              eventsTarget: r,
              smoothWheel: i,
              syncTouch: a,
              syncTouchLerp: o,
              touchInertiaMultiplier: s,
              duration: c,
              easing: l,
              lerp: u,
              infinite: d,
              gestureOrientation: p,
              orientation: f,
              touchMultiplier: h,
              wheelMultiplier: g,
              autoResize: _,
              prevent: v,
              __experimental__naiveDimensions: y,
            }),
            (this.animate = new _e()),
            (this.emitter = new ye()),
            (this.dimensions = new ve({ wrapper: e, content: t, autoResize: _ })),
            this.updateClassName(),
            (this.userData = {}),
            (this.time = 0),
            (this.velocity = this.lastVelocity = 0),
            (this.isLocked = !1),
            (this.isStopped = !1),
            (this.isScrolling = !1),
            (this.targetScroll = this.animatedScroll = this.actualScroll),
            this.options.wrapper.addEventListener(`scroll`, this.onNativeScroll, !1),
            (this.virtualScroll = new xe(r, { touchMultiplier: h, wheelMultiplier: g })),
            this.virtualScroll.on(`scroll`, this.onVirtualScroll));
        }
        destroy() {
          (this.emitter.destroy(),
            this.options.wrapper.removeEventListener(`scroll`, this.onNativeScroll, !1),
            this.virtualScroll.destroy(),
            this.dimensions.destroy(),
            this.cleanUpClassName());
        }
        on(e, t) {
          return this.emitter.on(e, t);
        }
        off(e, t) {
          return this.emitter.off(e, t);
        }
        setScroll(e) {
          this.isHorizontal ? (this.rootElement.scrollLeft = e) : (this.rootElement.scrollTop = e);
        }
        resize() {
          this.dimensions.resize();
        }
        emit({ userData: e = {} } = {}) {
          ((this.userData = e), this.emitter.emit(`scroll`, this), (this.userData = {}));
        }
        reset() {
          ((this.isLocked = !1),
            (this.isScrolling = !1),
            (this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.lastVelocity = this.velocity = 0),
            this.animate.stop());
        }
        start() {
          this.isStopped && ((this.isStopped = !1), this.reset());
        }
        stop() {
          this.isStopped || ((this.isStopped = !0), this.animate.stop(), this.reset());
        }
        raf(e) {
          let t = e - (this.time || e);
          ((this.time = e), this.animate.advance(0.001 * t));
        }
        scrollTo(
          e,
          {
            offset: t = 0,
            immediate: n = !1,
            lock: r = !1,
            duration: i = this.options.duration,
            easing: a = this.options.easing,
            lerp: o = !i && this.options.lerp,
            onStart: s,
            onComplete: c,
            force: l = !1,
            programmatic: u = !0,
            userData: d = {},
          } = {}
        ) {
          if ((!this.isStopped && !this.isLocked) || l) {
            if ([`top`, `left`, `start`].includes(e)) e = 0;
            else if ([`bottom`, `right`, `end`].includes(e)) e = this.limit;
            else {
              let n;
              if (
                (typeof e == `string`
                  ? (n = document.querySelector(e))
                  : e != null && e.nodeType && (n = e),
                n)
              ) {
                if (this.options.wrapper !== m) {
                  let e = this.options.wrapper.getBoundingClientRect();
                  t -= this.isHorizontal ? e.left : e.top;
                }
                let r = n.getBoundingClientRect();
                e = (this.isHorizontal ? r.left : r.top) + this.animatedScroll;
              }
            }
            if (typeof e == `number`) {
              if (
                ((e += t),
                (e = Math.round(e)),
                this.options.infinite
                  ? u && (this.targetScroll = this.animatedScroll = this.scroll)
                  : (e = ge(0, e, this.limit)),
                n)
              )
                return (
                  (this.animatedScroll = this.targetScroll = e),
                  this.setScroll(this.scroll),
                  this.reset(),
                  void (c == null || c(this))
                );
              e !== this.targetScroll &&
                (u || (this.targetScroll = e),
                this.animate.fromTo(this.animatedScroll, e, {
                  duration: i,
                  easing: a,
                  lerp: o,
                  onStart: () => {
                    (r && (this.isLocked = !0), (this.isScrolling = `smooth`), s?.(this));
                  },
                  onUpdate: (e, t) => {
                    ((this.isScrolling = `smooth`),
                      (this.lastVelocity = this.velocity),
                      (this.velocity = e - this.animatedScroll),
                      (this.direction = Math.sign(this.velocity)),
                      (this.animatedScroll = e),
                      this.setScroll(this.scroll),
                      u && (this.targetScroll = e),
                      t || this.emit({ userData: d }),
                      t &&
                        (this.reset(),
                        this.emit({ userData: d }),
                        c?.(this),
                        (this.__preventNextNativeScrollEvent = !0)));
                  },
                }));
            }
          }
        }
        get rootElement() {
          return this.options.wrapper === m ? document.documentElement : this.options.wrapper;
        }
        get limit() {
          return this.options.__experimental__naiveDimensions
            ? this.isHorizontal
              ? this.rootElement.scrollWidth - this.rootElement.clientWidth
              : this.rootElement.scrollHeight - this.rootElement.clientHeight
            : this.dimensions.limit[this.isHorizontal ? `x` : `y`];
        }
        get isHorizontal() {
          return this.options.orientation === `horizontal`;
        }
        get actualScroll() {
          return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop;
        }
        get scroll() {
          return this.options.infinite
            ? (function (e, t) {
                return ((e % t) + t) % t;
              })(this.animatedScroll, this.limit)
            : this.animatedScroll;
        }
        get progress() {
          return this.limit === 0 ? 1 : this.scroll / this.limit;
        }
        get isScrolling() {
          return this.__isScrolling;
        }
        set isScrolling(e) {
          this.__isScrolling !== e && ((this.__isScrolling = e), this.updateClassName());
        }
        get isStopped() {
          return this.__isStopped;
        }
        set isStopped(e) {
          this.__isStopped !== e && ((this.__isStopped = e), this.updateClassName());
        }
        get isLocked() {
          return this.__isLocked;
        }
        set isLocked(e) {
          this.__isLocked !== e && ((this.__isLocked = e), this.updateClassName());
        }
        get isSmooth() {
          return this.isScrolling === `smooth`;
        }
        get className() {
          let e = `lenis`;
          return (
            this.isStopped && (e += ` lenis-stopped`),
            this.isLocked && (e += ` lenis-locked`),
            this.isScrolling && (e += ` lenis-scrolling`),
            this.isScrolling === `smooth` && (e += ` lenis-smooth`),
            e
          );
        }
        updateClassName() {
          (this.cleanUpClassName(),
            (this.rootElement.className =
              `${this.rootElement.className} ${this.className}`.trim()));
        }
        cleanUpClassName() {
          this.rootElement.className = this.rootElement.className
            .replace(/lenis(-\w+)?/g, ``)
            .trim();
        }
      }));
  }))();
}
function we(e) {
  let { intensity: t } = e,
    n = a(null);
  return (
    p(() => {
      if (n.current)
        try {
          n.current.scrollTo(0, { immediate: !0 });
        } catch (e) {
          console.error(`Error scrolling to top:`, e);
        }
    }, [n]),
    p(() => {
      let e = () => {
        try {
          let e = document.querySelector(`[data-frameruni-stop-scroll]`),
            t = document.documentElement,
            r = t && t.style && t.style.overflow === `hidden`;
          n.current && (e || r ? n.current.stop() : n.current.start());
        } catch (e) {
          console.error(`Error in checkForStopScroll:`, e);
        }
      };
      e();
      let t, r;
      try {
        ((t = new MutationObserver(e)),
          (r = new MutationObserver(e)),
          document &&
            document.documentElement &&
            (t.observe(document.documentElement, {
              childList: !0,
              subtree: !0,
              attributes: !0,
              attributeFilter: [`data-frameruni-stop-scroll`],
            }),
            r.observe(document.documentElement, { attributes: !0, attributeFilter: [`style`] })));
      } catch (e) {
        console.error(`Error setting up observers:`, e);
      }
      return () => {
        try {
          (t && t.disconnect(), r && r.disconnect());
        } catch (e) {
          console.error(`Error disconnecting observers:`, e);
        }
      };
    }, []),
    p(() => {
      try {
        if (!document) return;
        let e = document.getElementsByTagName(`*`);
        for (let t = 0; t < e.length; t++) {
          let n = e[t];
          if (n)
            try {
              let e = m.getComputedStyle(n);
              e &&
                e.getPropertyValue(`overflow`) === `auto` &&
                n.setAttribute(`data-lenis-prevent`, `true`);
            } catch (e) {
              console.error(`Error getting computed style:`, e);
            }
        }
      } catch (e) {
        console.error(`Error in overflow detection:`, e);
      }
    }, []),
    p(() => {
      try {
        if (typeof Se != `function`) {
          console.error(`Lenis is not available`);
          return;
        }
        n.current = new Se({ duration: (t || 10) / 10 });
        let e = (t) => {
            if (n.current)
              try {
                (n.current.raf(t), requestAnimationFrame(e));
              } catch (e) {
                console.error(`Error in animation frame:`, e);
              }
          },
          r = requestAnimationFrame(e);
        return () => {
          if ((cancelAnimationFrame(r), n.current))
            try {
              (n.current.destroy(), (n.current = null));
            } catch (e) {
              console.error(`Error destroying Lenis:`, e);
            }
        };
      } catch (e) {
        return (console.error(`Error initializing Lenis:`, e), () => {});
      }
    }, [t]),
    p(() => {
      try {
        if (!document || !n.current) return;
        let e = Array.from(document.querySelectorAll(`a[href]`) || [])
            .filter((e) => {
              if (!e) return !1;
              let t = e;
              if (!t.href) return !1;
              let n =
                  t.href.startsWith(m.location.origin) ||
                  t.href.startsWith(`./`) ||
                  t.href.startsWith(`/`),
                r = t.href.includes(`#`);
              return n && r;
            })
            .map((e) => {
              try {
                let t = e,
                  n = t.href.includes(`#`) ? `#${t.href.split(`#`).pop()}` : ``,
                  r = n ? decodeURIComponent(n) : ``,
                  i = 0;
                try {
                  if (r) {
                    let e = document.querySelector(r);
                    if (e) {
                      let t = m.getComputedStyle(e).scrollMarginTop;
                      i = (t && parseInt(t)) || 0;
                    }
                  }
                } catch (e) {
                  console.error(`Error finding target element:`, e);
                }
                return { href: n, scrollMargin: i, anchorElement: t };
              } catch (e) {
                return (console.error(`Error processing anchor:`, e), null);
              }
            })
            .filter(Boolean),
          t = (e, t, r) => {
            try {
              (e && e.preventDefault && e.preventDefault(),
                n.current && t && n.current.scrollTo(t, { offset: -(r || 0) }));
            } catch (e) {
              console.error(`Error in anchor click handler:`, e);
            }
          },
          r = e.map(
            ({ href: e, scrollMargin: n }) =>
              (r) =>
                t(r, e, n)
          );
        return (
          e.forEach(({ anchorElement: e }, t) => {
            e && r[t] && e.addEventListener(`click`, r[t]);
          }),
          () => {
            e.forEach(({ anchorElement: e }, t) => {
              e && r[t] && e.removeEventListener(`click`, r[t]);
            });
          }
        );
      } catch (e) {
        return (console.error(`Error setting up anchor links:`, e), () => {});
      }
    }, [n]),
    /*#__PURE__*/ l(`div`, { style: e.style })
  );
}
var Te;
function Ee() {
  return (Ee = e(() => {
    (r(),
      d(),
      T(),
      Ce(),
      f(),
      (Te = M(
        we,
        [
          `html.lenis { height: auto; }`,
          `.lenis.lenis-smooth { scroll-behavior: auto !important; }`,
          `.lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }`,
          `.lenis.lenis-stopped { overflow: hidden; }`,
          `.lenis.lenis-scrolling iframe { pointer-events: none; }`,
        ],
        ``
      )),
      (Te.displayName = `Smooth Scroll`),
      V(Te, {
        intensity: {
          title: `Intensity`,
          type: H.Number,
          defaultValue: 10,
          min: 0,
          description: `More components at [Framer University](https://frameruni.link/cc).`,
        },
      }));
  }))();
}
var U;
function De() {
  return (De = e(() => {
    (T(),
      (U = D({
        title: `Wave Gradient`,
        fragment: `
#define S(a,b,t) smoothstep(a,b,t)

mat2 Rot(float a) {
    float s = sin(a), c = cos(a);
    return mat2(c, -s, s, c);
}

vec2 hash(vec2 p) {
    float s = u_seed;
    vec2 k1 = vec2(2127.1 + s * 13.37, 81.17 + s * 7.31);
    vec2 k2 = vec2(1269.5 + s * 11.13, 283.37 + s * 5.79);
    p = vec2(dot(p, k1), dot(p, k2));
    return fract(sin(p) * (43758.5453 + s * 1.618));
}

float noise(in vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    float n = mix(
        mix(dot(-1.0 + 2.0 * hash(i), f),
            dot(-1.0 + 2.0 * hash(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
        mix(dot(-1.0 + 2.0 * hash(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
            dot(-1.0 + 2.0 * hash(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x),
        u.y
    );
    return 0.5 + 0.5 * n;
}

vec3 getColor(int idx) {
    if (u_colors_length < 1) return vec3(0.0);
    int safeIdx = clamp(idx, 0, u_colors_length - 1);
    return u_colors[safeIdx].rgb;
}

float seedF(float base) {
    return base * (1.0 + 0.5 * sin(u_seed * 3.17 + base));
}

vec2 warpUV(vec2 uv) {
    float t = u_time * u_waveSpeed;

    float angleOffset = sin(u_seed * 2.73) * 30.0;
    mat2 dirRot = Rot(radians(u_waveAngle + angleOffset));
    vec2 ruv = dirRot * uv;

    float fxMod = seedF(u_waveFreqX);
    float fyMod = seedF(u_waveFreqY);

    float phaseX = fract(sin(u_seed * 7.19) * 437.58) * 6.2832;
    float phaseY = fract(cos(u_seed * 3.41) * 291.37) * 6.2832;

    // Core wave with seed-dependent harmonics
    float harmonic = sin(u_seed * 1.23) * 0.5;
    float a = fyMod * ruv.y - sin(ruv.x * fxMod + ruv.y - t + phaseX);
    a += harmonic * sin(ruv.x * fxMod * 2.0 + ruv.y * 0.5 + t * 0.7 + phaseY);

    // Smoothstep mask (unchanged)
    a = smoothstep(
        cos(a) * u_maskSoftness,
        sin(a) * u_maskSoftness + 3.,
        cos(a - fyMod * ruv.y) - sin(a - fxMod * ruv.x)
    );

    a *= u_waveAmplitude;

    uv = cos(a) * uv + sin(a) * vec2(-uv.y, uv.x);
    return uv;
}

void main() {
    vec2 fragCoord = v_uv * u_resolution;
    vec2 uv = fragCoord / u_resolution.xy;
    float ratio = u_resolution.x / u_resolution.y;
    float t = u_time * u_waveSpeed;

    vec2 tuv = uv - 0.5;

    vec2 seedShift = vec2(sin(u_seed * 4.37), cos(u_seed * 5.91)) * 100.0;
    float degree = noise(vec2(t * 0.1, tuv.x * tuv.y) + seedShift);
    tuv.y *= 1.0 / ratio;
    tuv *= Rot(radians((degree - 0.5) * 720.0 + 180.0));
    tuv.y *= ratio;

    // Seed-rotate uv2 before warping
    vec2 uv2 = (fragCoord * 2.0 - u_resolution.xy) / (u_resolution.x + u_resolution.y) * 2.0;
    float preRotAngle = fract(sin(u_seed * 5.63) * 173.29) * 6.2832;
    uv2 *= Rot(preRotAngle);
    vec2 warped = warpUV(uv2) * 0.5 + 0.5;

    vec2 blendUV = mix(tuv, warped - 0.5, u_blendAmount);

    float layerRot1 = -5.0 + sin(u_seed * 1.83) * 20.0;
    float layerRot2 = 10.0 + cos(u_seed * 2.47) * 20.0;

    vec3 c0 = getColor(0);
    vec3 c1 = getColor(1);
    vec3 c2 = getColor(2);
    vec3 c3 = getColor(3);

    vec3 layer1 = mix(c0, c2, S(-0.3, 0.3, (blendUV * Rot(radians(layerRot1))).x));
    vec3 layer2 = mix(c3, c1, S(-0.3, 0.3, (blendUV * Rot(radians(layerRot2))).x));
    vec3 col = mix(layer1, layer2, S(0.3, -0.3, blendUV.y));

    col = mix(col, col * col + 0.5 * sqrt(col), 0.3);

    fragColor = vec4(col, 1.0);
}
`,
        propertyControls: {
          colors: {
            type: H.Array,
            title: `Colors`,
            control: { type: H.Color },
            maxCount: 4,
            defaultValue: [`#FF3624`, `#9EABFF`, `#FFAE00`, `#E29EFF`],
          },
          seed: { type: H.Number, title: `Seed`, defaultValue: 32, min: 0, max: 100, step: 1 },
          waveSpeed: {
            type: H.Number,
            title: `Speed`,
            defaultValue: 1.5,
            min: 0,
            max: 3,
            step: 0.01,
          },
          waveFreqX: {
            type: H.Number,
            title: `Freq X`,
            defaultValue: 0.9,
            min: 0.1,
            max: 6,
            step: 0.1,
          },
          waveFreqY: {
            type: H.Number,
            title: `Freq Y`,
            defaultValue: 6,
            min: 0.1,
            max: 6,
            step: 0.1,
          },
          waveAngle: {
            type: H.Number,
            title: `Angle`,
            defaultValue: 105,
            min: -180,
            max: 180,
            step: 1,
          },
          waveAmplitude: {
            type: H.Number,
            title: `Amplitude`,
            defaultValue: 2.1,
            min: 0.5,
            max: 3,
            step: 0.01,
          },
          maskSoftness: {
            type: H.Number,
            title: `Softness`,
            defaultValue: 0.74,
            min: 0.01,
            max: 2,
            step: 0.01,
          },
          blendAmount: {
            type: H.Number,
            title: `Blend`,
            defaultValue: 0.54,
            min: 0,
            max: 1,
            step: 0.01,
          },
        },
      })));
  }))();
}
var Oe, ke, Ae, je, Me, Ne, W;
function Pe() {
  return (Pe = e(() => {
    (d(),
      T(),
      f(),
      (Oe = `var(--framer-icon-mask)`),
      (ke = /*#__PURE__*/ u(function (e, t) {
        return /*#__PURE__*/ l(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Ae = h.create(ke)),
      (je = /*#__PURE__*/ u((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? /*#__PURE__*/ l(Ae, { ...a, layoutId: r, ref: t, children: i })
          : /*#__PURE__*/ l(`svg`, { ...a, ref: t, children: i });
      })),
      (Me = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 12.731 12.731 L 10.449 19.007 C 10.34 19.3 10.059 19.496 9.746 19.496 C 9.432 19.496 9.152 19.3 9.043 19.007 L 6.765 12.731 L 0.489 10.449 C 0.195 10.34 0 10.059 0 9.746 C 0 9.432 0.195 9.152 0.489 9.043 L 6.765 6.765 L 9.047 0.489 C 9.156 0.195 9.436 0 9.75 0 C 10.063 0 10.344 0.195 10.453 0.489 L 12.735 6.765 L 19.01 9.047 C 19.304 9.156 19.499 9.436 19.499 9.75 C 19.499 10.063 19.304 10.344 19.01 10.453 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="19.495522090984686px" id="XWY4XiNtR" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(2.252 2.252)" width="19.499272090984686px"/></svg>`),
      (Ne = ({ alpha: e, color: t, height: n, id: r, width: i, width1: a, ...o }) => ({
        ...o,
        ezTt3ayMo: t ?? o.ezTt3ayMo ?? `rgb(0, 0, 0)`,
        lschgej4H: a ?? o.lschgej4H ?? 1.5,
        qxTvv_EBh: e ?? o.qxTvv_EBh,
      })),
      (W = M(
        /* @__PURE__ */ u(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              ezTt3ayMo: o,
              lschgej4H: s,
              qxTvv_EBh: c,
              ...u
            } = Ne(e),
            d = C(`2663420067`, Me);
          return /*#__PURE__*/ l(je, {
            ...u,
            className: B(`framer-yInj6`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m6trwb": c, "--21h8s6": o, "--pgex8v": s, ...n },
            viewBox: `0 0 24 24`,
            children: /*#__PURE__*/ l(`use`, { href: d }),
          });
        }),
        [
          `.framer-yInj6 { -webkit-mask: ${Oe}; aspect-ratio: 1; display: block; mask: ${Oe}; width: 24px; }`,
        ],
        `framer-yInj6`
      )),
      (W.displayName = `Star Four`),
      V(W, {
        ezTt3ayMo: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: H.Color },
        lschgej4H: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 6,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: H.Number,
        },
        qxTvv_EBh: {
          defaultValue: 0,
          displayStepper: !0,
          hidden: !1,
          max: 1,
          min: 0,
          step: 0.1,
          title: `Alpha`,
          type: H.Number,
        },
      }));
  }))();
}
var Fe, Ie, Le;
function Re() {
  return (Re = e(() => {
    (T(),
      k.loadFonts([]),
      (Fe = [{ explicitInter: !0, fonts: [] }]),
      (Ie = [
        `.framer-LA6Oo .framer-styles-preset-6ovftn:not(.rich-text-wrapper), .framer-LA6Oo .framer-styles-preset-6ovftn.rich-text-wrapper a { --framer-link-hover-text-color: var(--token-4608043d-0105-434c-bf26-f4b71a19bbe5, #333333); }`,
      ]),
      (Le = `framer-LA6Oo`));
  }))();
}
var ze, Be, Ve;
function He() {
  return (He = e(() => {
    (T(),
      k.loadFonts([`FS;Manrope-semibold`, `FS;Manrope-bold`]),
      (ze = [
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
              cssFamilyName: `Manrope`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Manrope`,
              url: `../../assets/misc/6P4FPMFQH7CCC7RZ4UU4NKSGJ2RLF7V5.woff2`,
              weight: `700`,
            },
          ],
        },
      ]),
      (Be = [
        `.framer-weFK5 .framer-styles-preset-151rane:not(.rich-text-wrapper), .framer-weFK5 .framer-styles-preset-151rane.rich-text-wrapper h2 { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 58px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.05em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-123fbd15-23fe-45de-b318-115472c638cd, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-weFK5 .framer-styles-preset-151rane:not(.rich-text-wrapper), .framer-weFK5 .framer-styles-preset-151rane.rich-text-wrapper h2 { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 52px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.05em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-123fbd15-23fe-45de-b318-115472c638cd, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-weFK5 .framer-styles-preset-151rane:not(.rich-text-wrapper), .framer-weFK5 .framer-styles-preset-151rane.rich-text-wrapper h2 { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 36px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.05em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-123fbd15-23fe-45de-b318-115472c638cd, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (Ve = `framer-weFK5`));
  }))();
}
var Ue, We, Ge;
function Ke() {
  return (Ke = e(() => {
    (T(),
      k.loadFonts([`FS;Manrope-regular`, `FS;Manrope-bold`]),
      (Ue = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Manrope`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Manrope`,
              url: `../../assets/misc/UXO4O7K2G3HI3D2VKD7UXVJVJD26P4BQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Manrope`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Manrope`,
              url: `../../assets/misc/6P4FPMFQH7CCC7RZ4UU4NKSGJ2RLF7V5.woff2`,
              weight: `700`,
            },
          ],
        },
      ]),
      (We = [
        `.framer-cH0Vd .framer-styles-preset-ayx75q:not(.rich-text-wrapper), .framer-cH0Vd .framer-styles-preset-ayx75q.rich-text-wrapper p { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-cH0Vd .framer-styles-preset-ayx75q:not(.rich-text-wrapper), .framer-cH0Vd .framer-styles-preset-ayx75q.rich-text-wrapper p { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-cH0Vd .framer-styles-preset-ayx75q:not(.rich-text-wrapper), .framer-cH0Vd .framer-styles-preset-ayx75q.rich-text-wrapper p { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 15px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (Ge = `framer-cH0Vd`));
  }))();
}
var qe, Je, Ye;
function Xe() {
  return (Xe = e(() => {
    (T(),
      k.loadFonts([`FS;Manrope-medium`, `Inter-Black`, `Inter-BlackItalic`, `Inter-BoldItalic`]),
      (qe = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Manrope`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Manrope`,
              url: `../../assets/misc/CIM4KQCLZSMMLWPVH25IDDSTY4ENPHEY.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/mkY5Sgyq51ik0AMrSBwhm9DJg.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/X5hj6qzcHUYv7h1390c8Rhm6550.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/gQhNpS3tN86g8RcVKYUUaKt2oMQ.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/cugnVhSraaRyANCaUtI5FV17wk.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/5HcVoGak8k5agFJSaKa4floXVu0.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/rZ5DdENNqIdFTIyQQiP5isO7M.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/P2Bw01CtL0b9wqygO0sSVogWbo.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/05KsVHGDmqXSBXM4yRZ65P8i0s.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/ky8ovPukK4dJ1Pxq74qGhOqCYI.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/vvNSqIj42qeQ2bvCRBIWKHscrc.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/3ZmXbBKToJifDV9gwcifVd1tEY.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/FNfhX3dt4ChuLJq2PwdlxHO7PU.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/gcnfba68tfm7qAyrWRCf9r34jg.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/efTfQcBJ53kM2pB1hezSZ3RDUFs.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/H89BbHkbHDzlxZzxi8uPzTsp90.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/ia3uin3hQWqDrVloC1zEtYHWw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/2A4Xx7CngadFGlVV4xrO06OBHY.woff2`,
              weight: `700`,
            },
          ],
        },
      ]),
      (Je = [
        `.framer-6mTSb .framer-styles-preset-mcct0z:not(.rich-text-wrapper), .framer-6mTSb .framer-styles-preset-mcct0z.rich-text-wrapper h3 { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 28px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: -0.02em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-123fbd15-23fe-45de-b318-115472c638cd, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-6mTSb .framer-styles-preset-mcct0z:not(.rich-text-wrapper), .framer-6mTSb .framer-styles-preset-mcct0z.rich-text-wrapper h3 { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 22px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: -0.02em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-123fbd15-23fe-45de-b318-115472c638cd, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-6mTSb .framer-styles-preset-mcct0z:not(.rich-text-wrapper), .framer-6mTSb .framer-styles-preset-mcct0z.rich-text-wrapper h3 { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: -0.02em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-123fbd15-23fe-45de-b318-115472c638cd, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (Ye = `framer-6mTSb`));
  }))();
}
var Ze, Qe, $e;
function et() {
  return (et = e(() => {
    (T(),
      k.loadFonts([`FS;Manrope-bold`, `FS;Manrope-extrabold`]),
      (Ze = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Manrope`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Manrope`,
              url: `../../assets/misc/6P4FPMFQH7CCC7RZ4UU4NKSGJ2RLF7V5.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Manrope`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Manrope`,
              url: `../../assets/misc/K4ZMLVLHYIFVTTTWGVOTVGOFUUX7NVGI.woff2`,
              weight: `800`,
            },
          ],
        },
      ]),
      (Qe = [
        `.framer-Cn7BO .framer-styles-preset-1q787c3:not(.rich-text-wrapper), .framer-Cn7BO .framer-styles-preset-1q787c3.rich-text-wrapper h1 { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 70px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-bold: 800; --framer-letter-spacing: -0.05em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: center; --framer-text-color: var(--token-123fbd15-23fe-45de-b318-115472c638cd, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-Cn7BO .framer-styles-preset-1q787c3:not(.rich-text-wrapper), .framer-Cn7BO .framer-styles-preset-1q787c3.rich-text-wrapper h1 { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 58px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-bold: 800; --framer-letter-spacing: -0.05em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: center; --framer-text-color: var(--token-123fbd15-23fe-45de-b318-115472c638cd, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-Cn7BO .framer-styles-preset-1q787c3:not(.rich-text-wrapper), .framer-Cn7BO .framer-styles-preset-1q787c3.rich-text-wrapper h1 { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 36px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-bold: 800; --framer-letter-spacing: -0.05em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: center; --framer-text-color: var(--token-123fbd15-23fe-45de-b318-115472c638cd, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      ($e = `framer-Cn7BO`));
  }))();
}
var tt, nt, rt, it, at, ot, st, ct, lt, G;
function ut() {
  return (ut = e(() => {
    (d(),
      T(),
      v(),
      f(),
      Re(),
      Ke(),
      (tt = `framer-LYjEk`),
      (nt = { S7Fxo8jKE: `framer-v-julqjb` }),
      (rt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (it = ({ value: e, children: n }) => {
        let r = t(_),
          i = e ?? r.transition,
          a = s(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ l(_.Provider, { value: a, children: n });
      }),
      (at = h.create(i)),
      (ot = ({ height: e, id: t, link: n, title: r, width: i, ...a }) => ({
        ...a,
        R46GlcUaM: n ?? a.R46GlcUaM,
        sbNmroH_d: r ?? a.sbNmroH_d ?? `Home`,
      })),
      (st = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (ct = /*#__PURE__*/ u(function (e, t) {
        let r = a(null),
          o = t ?? r,
          s = n(),
          { activeLocale: c, setLocale: u } = oe();
        se();
        let {
            style: d,
            className: f,
            layoutId: p,
            variant: m,
            sbNmroH_d: _,
            R46GlcUaM: v,
            ...y
          } = ot(e),
          {
            baseVariant: x,
            classNames: S,
            clearLoadingGesture: C,
            gestureHandlers: w,
            gestureVariant: te,
            isLoading: T,
            setGestureState: E,
            setVariant: D,
            variants: O,
          } = ee({ defaultVariant: `S7Fxo8jKE`, ref: o, variant: m, variantClassNames: nt }),
          k = st(e, O),
          A = B(tt, Ge, Le);
        return /*#__PURE__*/ l(g, {
          id: p ?? s,
          children: /*#__PURE__*/ l(at, {
            animate: O,
            initial: !1,
            children: /*#__PURE__*/ l(it, {
              value: rt,
              children: /*#__PURE__*/ l(h.div, {
                ...y,
                ...w,
                className: B(A, `framer-julqjb`, f, S),
                "data-framer-name": `Desktop`,
                layoutDependency: k,
                layoutId: `S7Fxo8jKE`,
                ref: o,
                style: { ...d },
                children: /*#__PURE__*/ l(b, {
                  __fromCanvasComponent: !0,
                  children: /*#__PURE__*/ l(i, {
                    children: /*#__PURE__*/ l(h.p, {
                      className: `framer-styles-preset-ayx75q`,
                      "data-styles-preset": `I8nYi38vp`,
                      dir: `auto`,
                      style: {
                        "--framer-text-alignment": `left`,
                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                      },
                      children: /*#__PURE__*/ l(R, {
                        href: v,
                        motionChild: !0,
                        nodeId: `CwL7jWaK_`,
                        openInNewTab: !1,
                        relValues: [],
                        scopeId: `eHXNYIVHK`,
                        smoothScroll: !0,
                        children: /*#__PURE__*/ l(h.a, {
                          className: `framer-styles-preset-6ovftn`,
                          "data-styles-preset": `b1FQusCg6`,
                          children: `Home`,
                        }),
                      }),
                    }),
                  }),
                  className: `framer-dr23ki`,
                  fonts: [`Inter`],
                  layoutDependency: k,
                  layoutId: `CwL7jWaK_`,
                  style: {
                    "--extracted-r6o4lv": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                  },
                  text: _,
                  verticalAlignment: `top`,
                  withExternalLayout: !0,
                }),
              }),
            }),
          }),
        });
      })),
      (lt = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-LYjEk.framer-ulmhwc, .framer-LYjEk .framer-ulmhwc { display: block; }`,
        `.framer-LYjEk.framer-julqjb { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 55px; }`,
        `.framer-LYjEk .framer-dr23ki { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        ...We,
        ...Ie,
      ]),
      (G = M(ct, lt, `framer-LYjEk`)),
      (G.displayName = `Menu Item`),
      (G.defaultProps = { height: 24, width: 55 }),
      V(G, {
        sbNmroH_d: { defaultValue: `Home`, displayTextArea: !1, title: `Title`, type: H.String },
        onsbNmroH_dChange: { changes: `sbNmroH_d`, type: H.ChangeHandler },
        R46GlcUaM: { title: `Link`, type: H.Link },
      }),
      j(
        G,
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
          ...F(Ue),
          ...F(Fe),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
var dt, ft, pt;
function mt() {
  return (mt = e(() => {
    (T(),
      k.loadFonts([`FS;Manrope-medium`, `FS;Manrope-bold`]),
      (dt = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Manrope`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Manrope`,
              url: `../../assets/misc/CIM4KQCLZSMMLWPVH25IDDSTY4ENPHEY.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Manrope`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Manrope`,
              url: `../../assets/misc/6P4FPMFQH7CCC7RZ4UU4NKSGJ2RLF7V5.woff2`,
              weight: `700`,
            },
          ],
        },
      ]),
      (ft = [
        `.framer-86EVe .framer-styles-preset-1rt8l9:not(.rich-text-wrapper), .framer-86EVe .framer-styles-preset-1rt8l9.rich-text-wrapper p { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.02em; --framer-line-height: 0.8em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-86EVe .framer-styles-preset-1rt8l9:not(.rich-text-wrapper), .framer-86EVe .framer-styles-preset-1rt8l9.rich-text-wrapper p { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 17px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.02em; --framer-line-height: 0.8em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-86EVe .framer-styles-preset-1rt8l9:not(.rich-text-wrapper), .framer-86EVe .framer-styles-preset-1rt8l9.rich-text-wrapper p { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.02em; --framer-line-height: 0.8em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (pt = `framer-86EVe`));
  }))();
}
function ht(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var gt, _t, vt, yt, bt, xt, St, Ct, wt, Tt, Et, Dt, Ot, kt, At, jt, Mt, Nt, K;
function Pt() {
  return (Pt = e(() => {
    (d(),
      T(),
      v(),
      f(),
      mt(),
      (gt = de(h.div)),
      (_t = { MDnO3RGuD: { hover: !0 } }),
      (vt = [`MDnO3RGuD`, `vfm15FG6f`, `Q_F069Nmj`, `P_TINRc5S`, `HlI5h7SAO`]),
      (yt = `framer-mDF6B`),
      (bt = {
        HlI5h7SAO: `framer-v-v3t2b3`,
        MDnO3RGuD: `framer-v-c1ynmq`,
        P_TINRc5S: `framer-v-qwe9b3`,
        Q_F069Nmj: `framer-v-c157ru`,
        vfm15FG6f: `framer-v-1dlq1z5`,
      }),
      (xt = { delay: 0, duration: 0.2, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (St = {
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
      (Ct = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (wt = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Ct,
        x: 0,
        y: 0,
      }),
      (Tt = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` }),
      (Et = {
        opacity: 0,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Dt = ({ value: e, children: n }) => {
        let r = t(_),
          i = e ?? r.transition,
          a = s(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ l(_.Provider, { value: a, children: n });
      }),
      (Ot = {
        Default: `MDnO3RGuD`,
        Disabled: `Q_F069Nmj`,
        Error: `HlI5h7SAO`,
        Loading: `vfm15FG6f`,
        Success: `P_TINRc5S`,
      }),
      (kt = h.create(i)),
      (At = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Ot[r.variant] ?? r.variant ?? `MDnO3RGuD`,
      })),
      (jt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Mt = /*#__PURE__*/ u(function (e, t) {
        let r = a(null),
          o = t ?? r,
          s = n(),
          { activeLocale: u, setLocale: d } = oe();
        se();
        let { style: f, className: p, layoutId: m, variant: _, ...v } = At(e),
          {
            baseVariant: y,
            classNames: x,
            clearLoadingGesture: S,
            gestureHandlers: C,
            gestureVariant: w,
            isLoading: te,
            setGestureState: T,
            setVariant: E,
            variants: D,
          } = ee({
            cycleOrder: vt,
            defaultVariant: `MDnO3RGuD`,
            enabledGestures: _t,
            ref: o,
            variant: _,
            variantClassNames: bt,
          }),
          O = jt(e, D),
          k = B(yt, pt),
          A = () => w === `MDnO3RGuD-hover`;
        return /*#__PURE__*/ l(g, {
          id: m ?? s,
          children: /*#__PURE__*/ l(kt, {
            animate: D,
            initial: !1,
            children: /*#__PURE__*/ l(Dt, {
              value: xt,
              children: /*#__PURE__*/ l(h.button, {
                ...v,
                ...C,
                className: B(k, `framer-c1ynmq`, p, x),
                "data-border": !0,
                "data-framer-name": `Default`,
                "data-reset": `button`,
                layoutDependency: O,
                layoutId: `MDnO3RGuD`,
                ref: o,
                style: {
                  "--border-bottom-width": `1px`,
                  "--border-color": `var(--token-4608043d-0105-434c-bf26-f4b71a19bbe5, rgb(51, 51, 51))`,
                  "--border-left-width": `1px`,
                  "--border-right-width": `1px`,
                  "--border-style": `solid`,
                  "--border-top-width": `1px`,
                  backgroundColor: `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                  borderBottomLeftRadius: 30,
                  borderBottomRightRadius: 30,
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                  opacity: 1,
                  ...f,
                },
                variants: {
                  "MDnO3RGuD-hover": { opacity: 1 },
                  HlI5h7SAO: { backgroundColor: `rgba(255, 34, 68, 0.15)`, opacity: 1 },
                  P_TINRc5S: { opacity: 1 },
                  Q_F069Nmj: { opacity: 0.5 },
                },
                ...ht(
                  {
                    "MDnO3RGuD-hover": { "data-framer-name": void 0 },
                    HlI5h7SAO: { "data-framer-name": `Error` },
                    P_TINRc5S: { "data-framer-name": `Success` },
                    Q_F069Nmj: { "data-framer-name": `Disabled` },
                    vfm15FG6f: { "data-framer-name": `Loading` },
                  },
                  y,
                  w
                ),
                children: /*#__PURE__*/ c(h.div, {
                  className: `framer-1kr4wmn`,
                  layoutDependency: O,
                  layoutId: `OscYexcFo`,
                  children: [
                    A() &&
                      /*#__PURE__*/ l(h.div, {
                        className: `framer-ciajwq`,
                        layoutDependency: O,
                        layoutId: `dtaEJccCP`,
                        children: /*#__PURE__*/ l(gt, {
                          __framer__animate: { transition: Ct },
                          __framer__animateOnce: !1,
                          __framer__enter: St,
                          __framer__exit: wt,
                          __framer__loop: Et,
                          __framer__loopEffectEnabled: !0,
                          __framer__loopPauseOffscreen: !0,
                          __framer__loopRepeatDelay: 0,
                          __framer__loopRepeatType: `mirror`,
                          __framer__loopTransition: Tt,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          className: `framer-1eqdydd`,
                          layoutDependency: O,
                          layoutId: `ghaOY2oN7`,
                          style: {
                            backgroundColor: `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                            borderBottomLeftRadius: 30,
                            borderBottomRightRadius: 30,
                            borderTopLeftRadius: 30,
                            borderTopRightRadius: 30,
                          },
                        }),
                      }),
                    /*#__PURE__*/ l(b, {
                      __fromCanvasComponent: !0,
                      children: /*#__PURE__*/ l(i, {
                        children: /*#__PURE__*/ l(h.p, {
                          className: `framer-styles-preset-1rt8l9`,
                          "data-styles-preset": `DJ_jb3woG`,
                          dir: `auto`,
                          style: {
                            "--framer-text-alignment": `center`,
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255)))`,
                          },
                          children: `Submit`,
                        }),
                      }),
                      className: `framer-n0ppm5`,
                      fonts: [`Inter`],
                      layoutDependency: O,
                      layoutId: `bjD6O9PdJ`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                        opacity: 1,
                      },
                      variants: {
                        "MDnO3RGuD-hover": { opacity: 0.8 },
                        HlI5h7SAO: {
                          "--extracted-r6o4lv": `var(--token-6027fb09-b6d7-4a35-be6b-ee5163abd9d5, rgb(255, 79, 79))`,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...ht(
                        {
                          HlI5h7SAO: {
                            children: /*#__PURE__*/ l(i, {
                              children: /*#__PURE__*/ l(h.p, {
                                className: `framer-styles-preset-1rt8l9`,
                                "data-styles-preset": `DJ_jb3woG`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-alignment": `center`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6027fb09-b6d7-4a35-be6b-ee5163abd9d5, rgb(255, 79, 79)))`,
                                },
                                children: `Error`,
                              }),
                            }),
                          },
                          P_TINRc5S: {
                            children: /*#__PURE__*/ l(i, {
                              children: /*#__PURE__*/ l(h.p, {
                                className: `framer-styles-preset-1rt8l9`,
                                "data-styles-preset": `DJ_jb3woG`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-alignment": `center`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255)))`,
                                },
                                children: `Thank you`,
                              }),
                            }),
                          },
                          vfm15FG6f: {
                            children: /*#__PURE__*/ l(i, {
                              children: /*#__PURE__*/ l(h.p, {
                                className: `framer-styles-preset-1rt8l9`,
                                "data-styles-preset": `DJ_jb3woG`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-alignment": `center`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255)))`,
                                },
                                children: `Loading`,
                              }),
                            }),
                          },
                        },
                        y,
                        w
                      ),
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      })),
      (Nt = [
        `.framer-mDF6B.framer-2d69m2, .framer-mDF6B .framer-2d69m2 { display: block; }`,
        `.framer-mDF6B.framer-c1ynmq { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 15px 20px 15px 20px; position: relative; width: 140px; }`,
        `.framer-mDF6B .framer-1kr4wmn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-mDF6B .framer-ciajwq { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: visible; padding: 2px 0px 0px 0px; position: relative; width: min-content; }`,
        `.framer-mDF6B .framer-1eqdydd { aspect-ratio: 1 / 1; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 5px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-mDF6B .framer-n0ppm5 { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
        `.framer-mDF6B.framer-v-1dlq1z5.framer-c1ynmq, .framer-mDF6B.framer-v-c157ru.framer-c1ynmq, .framer-mDF6B.framer-v-qwe9b3.framer-c1ynmq, .framer-mDF6B.framer-v-v3t2b3.framer-c1ynmq { cursor: unset; }`,
        `.framer-mDF6B.framer-v-c1ynmq.hover.framer-c1ynmq { width: 114px; }`,
        ...ft,
        `.framer-mDF6B[data-border="true"]::after, .framer-mDF6B [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      (K = M(Mt, Nt, `framer-mDF6B`)),
      (K.displayName = `Footer Form Button`),
      (K.defaultProps = { height: 44, width: 140 }),
      V(K, {
        variant: {
          options: [`MDnO3RGuD`, `vfm15FG6f`, `Q_F069Nmj`, `P_TINRc5S`, `HlI5h7SAO`],
          optionTitles: [`Default`, `Loading`, `Disabled`, `Success`, `Error`],
          title: `Variant`,
          type: H.Enum,
        },
      }),
      j(
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
          ...F(dt),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
function Ft(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var It, Lt, Rt, zt, Bt, Vt, Ht, Ut, Wt, Gt, Kt, qt, Jt, Yt, Xt, Zt, Qt, $t, en, q;
function tn() {
  return (tn = e(() => {
    (d(),
      T(),
      v(),
      f(),
      mt(),
      (It = de(h.div)),
      (Lt = { NPcMhI0aR: { hover: !0 }, WbG8Rb16u: { hover: !0 }, Z9KBZRf_p: { hover: !0 } }),
      (Rt = [`NPcMhI0aR`, `Z9KBZRf_p`, `WbG8Rb16u`, `y674jXdOH`, `FHv7_ay7p`, `QxvVmZpIs`]),
      (zt = `framer-zxsTj`),
      (Bt = {
        FHv7_ay7p: `framer-v-1k93j3h`,
        NPcMhI0aR: `framer-v-y78rqe`,
        QxvVmZpIs: `framer-v-1txi2qd`,
        WbG8Rb16u: `framer-v-x12m6t`,
        y674jXdOH: `framer-v-nxf638`,
        Z9KBZRf_p: `framer-v-2px6wh`,
      }),
      (Vt = (e, t) => {
        if (typeof e == `number` && Number.isFinite(e)) return Math.max(0, e) + `px`;
        if (typeof e != `string` || typeof t != `number`) return;
        let n = e.split(` `);
        return n[t] || n[t - 2] || n[0];
      }),
      (Ht = { delay: 0, duration: 0.2, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Ut = {
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
      (Wt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Gt = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Wt,
        x: 0,
        y: 0,
      }),
      (Kt = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` }),
      (qt = {
        opacity: 0,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Jt = ({ value: e, children: n }) => {
        let r = t(_),
          i = e ?? r.transition,
          a = s(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ l(_.Provider, { value: a, children: n });
      }),
      (Yt = {
        "Mobile Black": `y674jXdOH`,
        "Mobile White Border": `QxvVmZpIs`,
        "Mobile White": `FHv7_ay7p`,
        "White Border": `WbG8Rb16u`,
        Main: `NPcMhI0aR`,
        White: `Z9KBZRf_p`,
      }),
      (Xt = h.create(i)),
      (Zt = ({ click: e, height: t, id: n, link: r, radius: i, title: a, width: o, ...s }) => ({
        ...s,
        arrAKCynS: r ?? s.arrAKCynS,
        iFMm5vzrn: e ?? s.iFMm5vzrn,
        leLsKUYDS: a ?? s.leLsKUYDS ?? `Get in touch`,
        Llv8Wzb_B: i ?? s.Llv8Wzb_B ?? `40px`,
        variant: Yt[s.variant] ?? s.variant ?? `NPcMhI0aR`,
      })),
      (Qt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($t = /*#__PURE__*/ u(function (e, t) {
        let r = a(null),
          o = t ?? r,
          s = n(),
          { activeLocale: u, setLocale: d } = oe();
        se();
        let {
            style: f,
            className: p,
            layoutId: m,
            variant: _,
            leLsKUYDS: v,
            arrAKCynS: y,
            Llv8Wzb_B: x,
            iFMm5vzrn: S,
            ...C
          } = Zt(e),
          {
            baseVariant: w,
            classNames: te,
            clearLoadingGesture: T,
            gestureHandlers: E,
            gestureVariant: D,
            isLoading: O,
            setGestureState: k,
            setVariant: A,
            variants: j,
          } = ee({
            cycleOrder: Rt,
            defaultVariant: `NPcMhI0aR`,
            enabledGestures: Lt,
            ref: o,
            variant: _,
            variantClassNames: Bt,
          }),
          M = Qt(e, j),
          { activeVariantCallback: N, delay: P } = he(w),
          ne = N(async (...e) => {
            if ((k({ isPressed: !1 }), S && (await S(...e)) === !1)) return !1;
          }),
          re = B(zt, pt),
          F = () => !![`NPcMhI0aR-hover`, `Z9KBZRf_p-hover`, `WbG8Rb16u-hover`].includes(D);
        return /*#__PURE__*/ l(g, {
          id: m ?? s,
          children: /*#__PURE__*/ l(Xt, {
            animate: j,
            initial: !1,
            children: /*#__PURE__*/ l(Jt, {
              value: Ht,
              children: /*#__PURE__*/ l(R, {
                href: y,
                motionChild: !0,
                nodeId: `NPcMhI0aR`,
                openInNewTab: !1,
                scopeId: `XZ2Inc0W0`,
                smoothScroll: !0,
                children: /*#__PURE__*/ l(h.a, {
                  ...C,
                  ...E,
                  className: `${B(re, `framer-y78rqe`, p, te)} framer-bjh383`,
                  "data-framer-name": `Main`,
                  "data-highlight": !0,
                  layoutDependency: M,
                  layoutId: `NPcMhI0aR`,
                  onTap: ne,
                  ref: o,
                  style: {
                    "--border-bottom-width": `0px`,
                    "--border-color": `rgba(0, 0, 0, 0)`,
                    "--border-left-width": `0px`,
                    "--border-right-width": `0px`,
                    "--border-style": `solid`,
                    "--border-top-width": `0px`,
                    backgroundColor: `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                    borderBottomLeftRadius: Vt(x, 3),
                    borderBottomRightRadius: Vt(x, 2),
                    borderTopLeftRadius: Vt(x, 0),
                    borderTopRightRadius: Vt(x, 1),
                    ...f,
                  },
                  variants: {
                    "NPcMhI0aR-hover": {
                      "--border-bottom-width": `0px`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-top-width": `0px`,
                    },
                    "WbG8Rb16u-hover": {
                      "--border-color": `var(--token-7f38a5f7-db27-44de-8aa2-b6753f733c7b, rgb(219, 219, 219))`,
                    },
                    "Z9KBZRf_p-hover": {
                      "--border-bottom-width": `0px`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-top-width": `0px`,
                    },
                    FHv7_ay7p: {
                      "--border-bottom-width": `0px`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-top-width": `0px`,
                      backgroundColor: `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                    },
                    QxvVmZpIs: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-7f38a5f7-db27-44de-8aa2-b6753f733c7b, rgb(230, 230, 230))`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                      backgroundColor: `rgba(0, 0, 0, 0)`,
                    },
                    WbG8Rb16u: {
                      "--border-bottom-width": `2px`,
                      "--border-color": `var(--token-7f38a5f7-db27-44de-8aa2-b6753f733c7b, rgb(230, 230, 230))`,
                      "--border-left-width": `2px`,
                      "--border-right-width": `2px`,
                      "--border-style": `solid`,
                      "--border-top-width": `2px`,
                      backgroundColor: `rgba(0, 0, 0, 0)`,
                    },
                    y674jXdOH: {
                      "--border-bottom-width": `0px`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-top-width": `0px`,
                    },
                    Z9KBZRf_p: {
                      backgroundColor: `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                    },
                  },
                  ...Ft(
                    {
                      "NPcMhI0aR-hover": { "data-framer-name": void 0 },
                      "WbG8Rb16u-hover": { "data-framer-name": void 0 },
                      "Z9KBZRf_p-hover": { "data-framer-name": void 0 },
                      FHv7_ay7p: { "data-framer-name": `Mobile White` },
                      QxvVmZpIs: { "data-border": !0, "data-framer-name": `Mobile White Border` },
                      WbG8Rb16u: { "data-border": !0, "data-framer-name": `White Border` },
                      y674jXdOH: { "data-framer-name": `Mobile Black` },
                      Z9KBZRf_p: { "data-framer-name": `White` },
                    },
                    w,
                    D
                  ),
                  children: /*#__PURE__*/ c(h.div, {
                    className: `framer-fy7tw`,
                    layoutDependency: M,
                    layoutId: `IR14eS08_`,
                    children: [
                      F() &&
                        /*#__PURE__*/ l(h.div, {
                          className: `framer-129gpck`,
                          layoutDependency: M,
                          layoutId: `A97wg6Lxt`,
                          children: /*#__PURE__*/ l(It, {
                            className: `framer-19db7fj`,
                            layoutDependency: M,
                            layoutId: `adnCVeddT`,
                            style: {
                              backgroundColor: `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                              borderBottomLeftRadius: 30,
                              borderBottomRightRadius: 30,
                              borderTopLeftRadius: 30,
                              borderTopRightRadius: 30,
                            },
                            variants: {
                              "NPcMhI0aR-hover": { backgroundColor: `rgb(255, 255, 255)` },
                              "WbG8Rb16u-hover": {
                                backgroundColor: `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                              },
                              "Z9KBZRf_p-hover": {
                                backgroundColor: `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                              },
                            },
                            ...Ft(
                              {
                                "NPcMhI0aR-hover": {
                                  __framer__animate: { transition: Wt },
                                  __framer__animateOnce: !1,
                                  __framer__enter: Ut,
                                  __framer__exit: Gt,
                                  __framer__loop: qt,
                                  __framer__loopEffectEnabled: !0,
                                  __framer__loopPauseOffscreen: !0,
                                  __framer__loopRepeatDelay: 0,
                                  __framer__loopRepeatType: `mirror`,
                                  __framer__loopTransition: Kt,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 1,
                                },
                                "WbG8Rb16u-hover": {
                                  __framer__animate: { transition: Wt },
                                  __framer__animateOnce: !1,
                                  __framer__enter: Ut,
                                  __framer__exit: Gt,
                                  __framer__loop: qt,
                                  __framer__loopEffectEnabled: !0,
                                  __framer__loopPauseOffscreen: !0,
                                  __framer__loopRepeatDelay: 0,
                                  __framer__loopRepeatType: `mirror`,
                                  __framer__loopTransition: Kt,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 1,
                                },
                                "Z9KBZRf_p-hover": {
                                  __framer__animate: { transition: Wt },
                                  __framer__animateOnce: !1,
                                  __framer__enter: Ut,
                                  __framer__exit: Gt,
                                  __framer__loop: qt,
                                  __framer__loopEffectEnabled: !0,
                                  __framer__loopPauseOffscreen: !0,
                                  __framer__loopRepeatDelay: 0,
                                  __framer__loopRepeatType: `mirror`,
                                  __framer__loopTransition: Kt,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 1,
                                },
                              },
                              w,
                              D
                            ),
                          }),
                        }),
                      /*#__PURE__*/ l(b, {
                        __fromCanvasComponent: !0,
                        children: /*#__PURE__*/ l(i, {
                          children: /*#__PURE__*/ l(h.p, {
                            className: `framer-styles-preset-1rt8l9`,
                            "data-styles-preset": `DJ_jb3woG`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255)))`,
                            },
                            children: `Get in touch`,
                          }),
                        }),
                        className: `framer-i4wbch`,
                        fonts: [`Inter`],
                        layoutDependency: M,
                        layoutId: `PNX3Rr3ox`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: v,
                        variants: {
                          FHv7_ay7p: {
                            "--extracted-r6o4lv": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                          },
                          QxvVmZpIs: {
                            "--extracted-r6o4lv": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                          },
                          WbG8Rb16u: {
                            "--extracted-r6o4lv": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                          },
                          Z9KBZRf_p: {
                            "--extracted-r6o4lv": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...Ft(
                          {
                            FHv7_ay7p: {
                              children: /*#__PURE__*/ l(i, {
                                children: /*#__PURE__*/ l(h.p, {
                                  className: `framer-styles-preset-1rt8l9`,
                                  "data-styles-preset": `DJ_jb3woG`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                  },
                                  children: `Get in touch`,
                                }),
                              }),
                            },
                            QxvVmZpIs: {
                              children: /*#__PURE__*/ l(i, {
                                children: /*#__PURE__*/ l(h.p, {
                                  className: `framer-styles-preset-1rt8l9`,
                                  "data-styles-preset": `DJ_jb3woG`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                  },
                                  children: `Get in touch`,
                                }),
                              }),
                            },
                            WbG8Rb16u: {
                              children: /*#__PURE__*/ l(i, {
                                children: /*#__PURE__*/ l(h.p, {
                                  className: `framer-styles-preset-1rt8l9`,
                                  "data-styles-preset": `DJ_jb3woG`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                  },
                                  children: `Get in touch`,
                                }),
                              }),
                            },
                            Z9KBZRf_p: {
                              children: /*#__PURE__*/ l(i, {
                                children: /*#__PURE__*/ l(h.p, {
                                  className: `framer-styles-preset-1rt8l9`,
                                  "data-styles-preset": `DJ_jb3woG`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                  },
                                  children: `Get in touch`,
                                }),
                              }),
                            },
                          },
                          w,
                          D
                        ),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          }),
        });
      })),
      (en = [
        `.framer-zxsTj.framer-bjh383, .framer-zxsTj .framer-bjh383 { display: block; }`,
        `.framer-zxsTj.framer-y78rqe { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 15px 20px 15px 20px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-zxsTj .framer-fy7tw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; z-index: 2; }`,
        `.framer-zxsTj .framer-129gpck { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: visible; padding: 2px 0px 0px 0px; position: relative; width: min-content; }`,
        `.framer-zxsTj .framer-19db7fj { aspect-ratio: 1 / 1; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 5px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-zxsTj .framer-i4wbch { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        ...ft,
        `.framer-zxsTj[data-border="true"]::after, .framer-zxsTj [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      (q = M($t, en, `framer-zxsTj`)),
      (q.displayName = `Button`),
      (q.defaultProps = { height: 44, width: 139 }),
      V(q, {
        variant: {
          options: [`NPcMhI0aR`, `Z9KBZRf_p`, `WbG8Rb16u`, `y674jXdOH`, `FHv7_ay7p`, `QxvVmZpIs`],
          optionTitles: [
            `Main`,
            `White`,
            `White Border`,
            `Mobile Black`,
            `Mobile White`,
            `Mobile White Border`,
          ],
          title: `Variant`,
          type: H.Enum,
        },
        leLsKUYDS: {
          defaultValue: `Get in touch`,
          displayTextArea: !1,
          title: `Title`,
          type: H.String,
        },
        onleLsKUYDSChange: { changes: `leLsKUYDS`, type: H.ChangeHandler },
        arrAKCynS: { title: `Link`, type: H.Link },
        Llv8Wzb_B: { defaultValue: `40px`, title: `Radius`, type: H.BorderRadius },
        iFMm5vzrn: { title: `Click`, type: H.EventHandler },
      }),
      j(
        q,
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
          ...F(dt),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
function J(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var nn,
  rn,
  an,
  on,
  sn,
  cn,
  ln,
  un,
  dn,
  fn,
  pn,
  mn,
  hn,
  Y,
  gn,
  _n,
  vn,
  yn,
  bn,
  xn,
  Sn,
  Cn,
  wn,
  Tn,
  En,
  Dn,
  X;
function On() {
  return (On = e(() => {
    (d(),
      T(),
      v(),
      f(),
      De(),
      Pe(),
      Re(),
      He(),
      Ke(),
      Xe(),
      et(),
      ut(),
      Pt(),
      tn(),
      (nn = y(q)),
      (rn = de(h.div)),
      (an = y(G)),
      (on = y(K)),
      (sn = y(W)),
      (cn = w(h.div)),
      (ln = de(S)),
      (un = A(ln)),
      (dn = [`MzmrI7HKa`, `c9mmVCYFm`, `ENEJMQb5q`]),
      (fn = `framer-YhRHM`),
      (pn = {
        c9mmVCYFm: `framer-v-seysat`,
        ENEJMQb5q: `framer-v-pb2zng`,
        MzmrI7HKa: `framer-v-17fbv7s`,
      }),
      (mn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (hn = {
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
      (Y = { bounce: 0.2, delay: 0.1, duration: 0.4, type: `spring` }),
      (gn = {
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
      (_n = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (vn = (e, t, n) => {
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
      (yn = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { delay: 0.1, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` },
        x: 0,
        y: 0,
      }),
      (bn = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (xn = ({ value: e, children: n }) => {
        let r = t(_),
          i = e ?? r.transition,
          a = s(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ l(_.Provider, { value: a, children: n });
      }),
      (Sn = { Desktop: `MzmrI7HKa`, Mobile: `ENEJMQb5q`, Tablet: `c9mmVCYFm` }),
      (Cn = h.create(i)),
      (wn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Sn[r.variant] ?? r.variant ?? `MzmrI7HKa`,
      })),
      (Tn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (En = /*#__PURE__*/ u(function (e, t) {
        let r = a(null),
          s = t ?? r,
          u = n(),
          { activeLocale: d, setLocale: f } = oe(),
          p = se(),
          { style: m, className: _, layoutId: v, variant: y, ...C } = wn(e),
          {
            baseVariant: w,
            classNames: te,
            clearLoadingGesture: T,
            gestureHandlers: E,
            gestureVariant: D,
            isLoading: O,
            setGestureState: k,
            setVariant: A,
            variants: j,
          } = ee({
            cycleOrder: dn,
            defaultVariant: `MzmrI7HKa`,
            ref: s,
            variant: y,
            variantClassNames: pn,
          }),
          M = Tn(e, j),
          N = B(fn, Ve, Ge, Ye, Le, $e);
        return (
          re(),
          /*#__PURE__*/ l(g, {
            id: v ?? u,
            children: /*#__PURE__*/ l(Cn, {
              animate: j,
              initial: !1,
              children: /*#__PURE__*/ l(xn, {
                value: mn,
                children: /*#__PURE__*/ c(h.footer, {
                  ...C,
                  ...E,
                  className: B(N, `framer-17fbv7s`, _, te),
                  "data-framer-name": `Desktop`,
                  layoutDependency: M,
                  layoutId: `MzmrI7HKa`,
                  ref: s,
                  style: {
                    backgroundColor: `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                    ...m,
                  },
                  ...J(
                    {
                      c9mmVCYFm: { "data-framer-name": `Tablet` },
                      ENEJMQb5q: { "data-framer-name": `Mobile` },
                    },
                    w,
                    D
                  ),
                  children: [
                    /*#__PURE__*/ c(h.div, {
                      className: `framer-1s89gi3`,
                      "data-framer-name": `Wrap`,
                      layoutDependency: M,
                      layoutId: `b3OkP9zio`,
                      children: [
                        /*#__PURE__*/ c(rn, {
                          __framer__animate: { transition: Y },
                          __framer__animateOnce: !0,
                          __framer__enter: hn,
                          __framer__exit: gn,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          className: `framer-gbd2m1`,
                          layoutDependency: M,
                          layoutId: `awGiSR7tT`,
                          children: [
                            /*#__PURE__*/ c(h.div, {
                              className: `framer-1lc1rf1`,
                              "data-framer-name": `h1`,
                              layoutDependency: M,
                              layoutId: `rJxCw0hN8`,
                              children: [
                                /*#__PURE__*/ l(b, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ l(i, {
                                    children: /*#__PURE__*/ l(h.h2, {
                                      className: `framer-styles-preset-151rane`,
                                      "data-styles-preset": `F2j_sq2oH`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--extracted-1of0zx5, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                      },
                                      children: `Ready to scale your brand reach?`,
                                    }),
                                  }),
                                  className: `framer-1pfwh0k`,
                                  fonts: [`Inter`],
                                  layoutDependency: M,
                                  layoutId: `QyC4JlsGv`,
                                  style: {
                                    "--extracted-1of0zx5": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...J(
                                    {
                                      c9mmVCYFm: {
                                        children: /*#__PURE__*/ l(i, {
                                          children: /*#__PURE__*/ l(h.h2, {
                                            className: `framer-styles-preset-151rane`,
                                            "data-styles-preset": `F2j_sq2oH`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `left`,
                                              "--framer-text-color": `var(--extracted-1of0zx5, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                            },
                                            children: `Ready to scale your brand reach?`,
                                          }),
                                        }),
                                      },
                                      ENEJMQb5q: {
                                        children: /*#__PURE__*/ l(i, {
                                          children: /*#__PURE__*/ l(h.h2, {
                                            className: `framer-styles-preset-151rane`,
                                            "data-styles-preset": `F2j_sq2oH`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `left`,
                                              "--framer-text-color": `var(--extracted-1of0zx5, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                            },
                                            children: `Ready to scale your brand reach?`,
                                          }),
                                        }),
                                      },
                                    },
                                    w,
                                    D
                                  ),
                                }),
                                /*#__PURE__*/ l(b, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ l(i, {
                                    children: /*#__PURE__*/ l(h.p, {
                                      className: `framer-styles-preset-ayx75q`,
                                      "data-styles-preset": `I8nYi38vp`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                      },
                                      children: `Let’s build a system that consistently drives views, engagement, and results.`,
                                    }),
                                  }),
                                  className: `framer-9iwbs0`,
                                  fonts: [`Inter`],
                                  layoutDependency: M,
                                  layoutId: `X2kQS19cQ`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...J(
                                    {
                                      c9mmVCYFm: {
                                        children: /*#__PURE__*/ l(i, {
                                          children: /*#__PURE__*/ l(h.p, {
                                            className: `framer-styles-preset-ayx75q`,
                                            "data-styles-preset": `I8nYi38vp`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `left`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                            },
                                            children: `Let’s build a system that consistently drives views, engagement, and results.`,
                                          }),
                                        }),
                                      },
                                      ENEJMQb5q: {
                                        children: /*#__PURE__*/ l(i, {
                                          children: /*#__PURE__*/ l(h.p, {
                                            className: `framer-styles-preset-ayx75q`,
                                            "data-styles-preset": `I8nYi38vp`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `left`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                            },
                                            children: `Let’s build a system that consistently drives views, engagement, and results.`,
                                          }),
                                        }),
                                      },
                                    },
                                    w,
                                    D
                                  ),
                                }),
                              ],
                            }),
                            /*#__PURE__*/ l(z, {
                              height: 44,
                              children: /*#__PURE__*/ l(S, {
                                className: `framer-dpemh2-container`,
                                layoutDependency: M,
                                layoutId: `OO9v5_XGg-container`,
                                nodeId: `OO9v5_XGg`,
                                rendersWithMotion: !0,
                                scopeId: `iH646AyHe`,
                                children: /*#__PURE__*/ l(q, {
                                  arrAKCynS: `https://calendar.app.google/LNk2WtSjjwQDDLYD9`,
                                  height: `100%`,
                                  id: `OO9v5_XGg`,
                                  layoutId: `OO9v5_XGg`,
                                  leLsKUYDS: `Book a Call`,
                                  Llv8Wzb_B: `40px`,
                                  variant: _n(`NPcMhI0aR`),
                                  width: `100%`,
                                  ...J({ ENEJMQb5q: { variant: _n(`y674jXdOH`) } }, w, D),
                                }),
                              }),
                            }),
                          ],
                        }),
                        /*#__PURE__*/ c(rn, {
                          __framer__animate: { transition: Y },
                          __framer__animateOnce: !0,
                          __framer__enter: hn,
                          __framer__exit: gn,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          className: `framer-x6xa1`,
                          "data-framer-name": `All Links`,
                          layoutDependency: M,
                          layoutId: `u_J6VGkBq`,
                          ...J({ ENEJMQb5q: { __framer__styleAppearEffectEnabled: void 0 } }, w, D),
                          children: [
                            /*#__PURE__*/ c(rn, {
                              __framer__animate: { transition: Y },
                              __framer__animateOnce: !0,
                              __framer__enter: hn,
                              __framer__exit: gn,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __perspectiveFX: !1,
                              __smartComponentFX: !0,
                              __targetOpacity: 1,
                              className: `framer-1xbxnmm`,
                              "data-framer-name": `Link 01`,
                              layoutDependency: M,
                              layoutId: `yI6AliYot`,
                              children: [
                                /*#__PURE__*/ l(b, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ l(i, {
                                    children: /*#__PURE__*/ l(h.h3, {
                                      className: `framer-styles-preset-mcct0z`,
                                      "data-styles-preset": `JIvkOqTK6`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-a0htzi, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                      },
                                      children: `Company `,
                                    }),
                                  }),
                                  className: `framer-xdgcv9`,
                                  fonts: [`Inter`],
                                  layoutDependency: M,
                                  layoutId: `NME_40xby`,
                                  style: {
                                    "--extracted-a0htzi": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                /*#__PURE__*/ c(h.ul, {
                                  className: `framer-1bk4zsg`,
                                  "data-framer-name": `All Items`,
                                  layoutDependency: M,
                                  layoutId: `RUUdGd3Mm`,
                                  children: [
                                    /*#__PURE__*/ l(P, {
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
                                        /*#__PURE__*/ l(z, {
                                          height: 24,
                                          ...J(
                                            {
                                              c9mmVCYFm: {
                                                width: `max((min(${p?.width || `100vw`}, 1050px) - 50px) / 2, 50px)`,
                                              },
                                            },
                                            w,
                                            D
                                          ),
                                          children: /*#__PURE__*/ l(S, {
                                            as: `li`,
                                            className: `framer-1um5xcu-container`,
                                            layoutDependency: M,
                                            layoutId: `aZmGjvKft-container`,
                                            nodeId: `aZmGjvKft`,
                                            rendersWithMotion: !0,
                                            scopeId: `iH646AyHe`,
                                            children: /*#__PURE__*/ l(G, {
                                              height: `100%`,
                                              id: `aZmGjvKft`,
                                              layoutId: `aZmGjvKft`,
                                              R46GlcUaM: e[0],
                                              sbNmroH_d: `Home`,
                                              style: { width: `100%` },
                                              width: `100%`,
                                              ...J(
                                                {
                                                  c9mmVCYFm: { R46GlcUaM: e[1] },
                                                  ENEJMQb5q: { R46GlcUaM: e[2] },
                                                },
                                                w,
                                                D
                                              ),
                                            }),
                                          }),
                                        }),
                                    }),
                                    /*#__PURE__*/ l(P, {
                                      links: [
                                        {
                                          href: { hash: `:wCrl5EG3s`, webPageId: `augiA20Il` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { hash: `:wCrl5EG3s`, webPageId: `augiA20Il` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { hash: `:wCrl5EG3s`, webPageId: `augiA20Il` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (e) =>
                                        /*#__PURE__*/ l(z, {
                                          height: 24,
                                          ...J(
                                            {
                                              c9mmVCYFm: {
                                                width: `max((min(${p?.width || `100vw`}, 1050px) - 50px) / 2, 50px)`,
                                              },
                                            },
                                            w,
                                            D
                                          ),
                                          children: /*#__PURE__*/ l(S, {
                                            as: `li`,
                                            className: `framer-leax83-container`,
                                            layoutDependency: M,
                                            layoutId: `yGD2Relxd-container`,
                                            nodeId: `yGD2Relxd`,
                                            rendersWithMotion: !0,
                                            scopeId: `iH646AyHe`,
                                            children: /*#__PURE__*/ l(G, {
                                              height: `100%`,
                                              id: `yGD2Relxd`,
                                              layoutId: `yGD2Relxd`,
                                              R46GlcUaM: e[0],
                                              sbNmroH_d: `Services`,
                                              style: { width: `100%` },
                                              width: `100%`,
                                              ...J(
                                                {
                                                  c9mmVCYFm: { R46GlcUaM: e[1] },
                                                  ENEJMQb5q: { R46GlcUaM: e[2] },
                                                },
                                                w,
                                                D
                                              ),
                                            }),
                                          }),
                                        }),
                                    }),
                                    /*#__PURE__*/ l(P, {
                                      links: [
                                        {
                                          href: { hash: `:e2_bywhGS`, webPageId: `augiA20Il` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { hash: `:e2_bywhGS`, webPageId: `augiA20Il` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { hash: `:e2_bywhGS`, webPageId: `augiA20Il` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (e) =>
                                        /*#__PURE__*/ l(z, {
                                          height: 24,
                                          ...J(
                                            {
                                              c9mmVCYFm: {
                                                width: `max((min(${p?.width || `100vw`}, 1050px) - 50px) / 2, 50px)`,
                                              },
                                            },
                                            w,
                                            D
                                          ),
                                          children: /*#__PURE__*/ l(S, {
                                            as: `li`,
                                            className: `framer-1aw9ju9-container`,
                                            layoutDependency: M,
                                            layoutId: `x_iLwdB4T-container`,
                                            nodeId: `x_iLwdB4T`,
                                            rendersWithMotion: !0,
                                            scopeId: `iH646AyHe`,
                                            children: /*#__PURE__*/ l(G, {
                                              height: `100%`,
                                              id: `x_iLwdB4T`,
                                              layoutId: `x_iLwdB4T`,
                                              R46GlcUaM: e[0],
                                              sbNmroH_d: `Projects`,
                                              style: { width: `100%` },
                                              width: `100%`,
                                              ...J(
                                                {
                                                  c9mmVCYFm: { R46GlcUaM: e[1] },
                                                  ENEJMQb5q: { R46GlcUaM: e[2] },
                                                },
                                                w,
                                                D
                                              ),
                                            }),
                                          }),
                                        }),
                                    }),
                                    /*#__PURE__*/ l(z, {
                                      height: 24,
                                      ...J(
                                        {
                                          c9mmVCYFm: {
                                            width: `max((min(${p?.width || `100vw`}, 1050px) - 50px) / 2, 50px)`,
                                          },
                                        },
                                        w,
                                        D
                                      ),
                                      children: /*#__PURE__*/ l(S, {
                                        as: `li`,
                                        className: `framer-g5mk0d-container`,
                                        layoutDependency: M,
                                        layoutId: `CZjteSdl4-container`,
                                        nodeId: `CZjteSdl4`,
                                        rendersWithMotion: !0,
                                        scopeId: `iH646AyHe`,
                                        children: /*#__PURE__*/ l(G, {
                                          height: `100%`,
                                          id: `CZjteSdl4`,
                                          layoutId: `CZjteSdl4`,
                                          R46GlcUaM: `https://wa.me/9779767267448`,
                                          sbNmroH_d: `Contact`,
                                          style: { width: `100%` },
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            /*#__PURE__*/ c(rn, {
                              __framer__animate: { transition: Y },
                              __framer__animateOnce: !0,
                              __framer__enter: hn,
                              __framer__exit: gn,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __perspectiveFX: !1,
                              __smartComponentFX: !0,
                              __targetOpacity: 1,
                              className: `framer-5uc8jp`,
                              "data-framer-name": `Link 01`,
                              layoutDependency: M,
                              layoutId: `LTaZk0jD0`,
                              children: [
                                /*#__PURE__*/ l(b, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ l(i, {
                                    children: /*#__PURE__*/ l(h.h3, {
                                      className: `framer-styles-preset-mcct0z`,
                                      "data-styles-preset": `JIvkOqTK6`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-a0htzi, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                      },
                                      children: `Legal`,
                                    }),
                                  }),
                                  className: `framer-sg57t0`,
                                  fonts: [`Inter`],
                                  layoutDependency: M,
                                  layoutId: `ZlchNpNZa`,
                                  style: {
                                    "--extracted-a0htzi": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                /*#__PURE__*/ c(h.ul, {
                                  className: `framer-13ddsd1`,
                                  "data-framer-name": `All Items`,
                                  layoutDependency: M,
                                  layoutId: `VAGHcjnOK`,
                                  children: [
                                    /*#__PURE__*/ l(P, {
                                      links: [
                                        {
                                          href: {
                                            pathVariables: { xsOQkQirM: `privacy-policy` },
                                            unresolvedPathSlugs: {
                                              xsOQkQirM: {
                                                collectionId: `NvVsF9Krs`,
                                                collectionItemId: `oK5m5DBt3`,
                                              },
                                            },
                                            webPageId: `T_zVflsz4`,
                                          },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: {
                                            pathVariables: { xsOQkQirM: `privacy-policy` },
                                            unresolvedPathSlugs: {
                                              xsOQkQirM: {
                                                collectionId: `NvVsF9Krs`,
                                                collectionItemId: `oK5m5DBt3`,
                                              },
                                            },
                                            webPageId: `T_zVflsz4`,
                                          },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: {
                                            pathVariables: { xsOQkQirM: `privacy-policy` },
                                            unresolvedPathSlugs: {
                                              xsOQkQirM: {
                                                collectionId: `NvVsF9Krs`,
                                                collectionItemId: `oK5m5DBt3`,
                                              },
                                            },
                                            webPageId: `T_zVflsz4`,
                                          },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (e) =>
                                        /*#__PURE__*/ l(z, {
                                          height: 24,
                                          ...J(
                                            {
                                              c9mmVCYFm: {
                                                width: `min(max((min(${p?.width || `100vw`}, 1050px) - 50px) / 2, 50px), 165px)`,
                                              },
                                              ENEJMQb5q: {
                                                width: `calc(min(${p?.width || `100vw`}, 1050px) - 40px)`,
                                              },
                                            },
                                            w,
                                            D
                                          ),
                                          children: /*#__PURE__*/ l(S, {
                                            as: `li`,
                                            className: `framer-qcyzig-container`,
                                            layoutDependency: M,
                                            layoutId: `MzEKUggia-container`,
                                            nodeId: `MzEKUggia`,
                                            rendersWithMotion: !0,
                                            scopeId: `iH646AyHe`,
                                            children: /*#__PURE__*/ l(G, {
                                              height: `100%`,
                                              id: `MzEKUggia`,
                                              layoutId: `MzEKUggia`,
                                              R46GlcUaM: e[0],
                                              sbNmroH_d: `Privacy Policy`,
                                              style: { width: `100%` },
                                              width: `100%`,
                                              ...J(
                                                {
                                                  c9mmVCYFm: { R46GlcUaM: e[1] },
                                                  ENEJMQb5q: { R46GlcUaM: e[2] },
                                                },
                                                w,
                                                D
                                              ),
                                            }),
                                          }),
                                        }),
                                    }),
                                    /*#__PURE__*/ l(P, {
                                      links: [
                                        {
                                          href: {
                                            pathVariables: { xsOQkQirM: `terms-conditions` },
                                            unresolvedPathSlugs: {
                                              xsOQkQirM: {
                                                collectionId: `NvVsF9Krs`,
                                                collectionItemId: `YinQT1c6i`,
                                              },
                                            },
                                            webPageId: `T_zVflsz4`,
                                          },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: {
                                            pathVariables: { xsOQkQirM: `terms-conditions` },
                                            unresolvedPathSlugs: {
                                              xsOQkQirM: {
                                                collectionId: `NvVsF9Krs`,
                                                collectionItemId: `YinQT1c6i`,
                                              },
                                            },
                                            webPageId: `T_zVflsz4`,
                                          },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: {
                                            pathVariables: { xsOQkQirM: `terms-conditions` },
                                            unresolvedPathSlugs: {
                                              xsOQkQirM: {
                                                collectionId: `NvVsF9Krs`,
                                                collectionItemId: `YinQT1c6i`,
                                              },
                                            },
                                            webPageId: `T_zVflsz4`,
                                          },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (e) =>
                                        /*#__PURE__*/ l(z, {
                                          height: 24,
                                          ...J(
                                            {
                                              c9mmVCYFm: {
                                                width: `min(max((min(${p?.width || `100vw`}, 1050px) - 50px) / 2, 50px), 165px)`,
                                              },
                                              ENEJMQb5q: {
                                                width: `calc(min(${p?.width || `100vw`}, 1050px) - 40px)`,
                                              },
                                            },
                                            w,
                                            D
                                          ),
                                          children: /*#__PURE__*/ l(S, {
                                            as: `li`,
                                            className: `framer-pcjz3n-container`,
                                            layoutDependency: M,
                                            layoutId: `IV346ObAr-container`,
                                            nodeId: `IV346ObAr`,
                                            rendersWithMotion: !0,
                                            scopeId: `iH646AyHe`,
                                            children: /*#__PURE__*/ l(G, {
                                              height: `100%`,
                                              id: `IV346ObAr`,
                                              layoutId: `IV346ObAr`,
                                              R46GlcUaM: e[0],
                                              sbNmroH_d: `Terms & Condition`,
                                              style: { width: `100%` },
                                              width: `100%`,
                                              ...J(
                                                {
                                                  c9mmVCYFm: { R46GlcUaM: e[1] },
                                                  ENEJMQb5q: { R46GlcUaM: e[2] },
                                                },
                                                w,
                                                D
                                              ),
                                            }),
                                          }),
                                        }),
                                    }),
                                    /*#__PURE__*/ l(P, {
                                      links: [
                                        {
                                          href: {
                                            pathVariables: { xsOQkQirM: `refund-policy` },
                                            unresolvedPathSlugs: {
                                              xsOQkQirM: {
                                                collectionId: `NvVsF9Krs`,
                                                collectionItemId: `eWmj9eNSW`,
                                              },
                                            },
                                            webPageId: `T_zVflsz4`,
                                          },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: {
                                            pathVariables: { xsOQkQirM: `refund-policy` },
                                            unresolvedPathSlugs: {
                                              xsOQkQirM: {
                                                collectionId: `NvVsF9Krs`,
                                                collectionItemId: `eWmj9eNSW`,
                                              },
                                            },
                                            webPageId: `T_zVflsz4`,
                                          },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: {
                                            pathVariables: { xsOQkQirM: `refund-policy` },
                                            unresolvedPathSlugs: {
                                              xsOQkQirM: {
                                                collectionId: `NvVsF9Krs`,
                                                collectionItemId: `eWmj9eNSW`,
                                              },
                                            },
                                            webPageId: `T_zVflsz4`,
                                          },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (e) =>
                                        /*#__PURE__*/ l(z, {
                                          height: 24,
                                          ...J(
                                            {
                                              c9mmVCYFm: {
                                                width: `min(max((min(${p?.width || `100vw`}, 1050px) - 50px) / 2, 50px), 165px)`,
                                              },
                                              ENEJMQb5q: {
                                                width: `calc(min(${p?.width || `100vw`}, 1050px) - 40px)`,
                                              },
                                            },
                                            w,
                                            D
                                          ),
                                          children: /*#__PURE__*/ l(S, {
                                            as: `li`,
                                            className: `framer-1dyq2vy-container`,
                                            layoutDependency: M,
                                            layoutId: `cqbuQ6lqL-container`,
                                            nodeId: `cqbuQ6lqL`,
                                            rendersWithMotion: !0,
                                            scopeId: `iH646AyHe`,
                                            children: /*#__PURE__*/ l(G, {
                                              height: `100%`,
                                              id: `cqbuQ6lqL`,
                                              layoutId: `cqbuQ6lqL`,
                                              R46GlcUaM: e[0],
                                              sbNmroH_d: `Refund Policy`,
                                              style: { width: `100%` },
                                              width: `100%`,
                                              ...J(
                                                {
                                                  c9mmVCYFm: { R46GlcUaM: e[1] },
                                                  ENEJMQb5q: { R46GlcUaM: e[2] },
                                                },
                                                w,
                                                D
                                              ),
                                            }),
                                          }),
                                        }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            /*#__PURE__*/ c(rn, {
                              __framer__animate: { transition: Y },
                              __framer__animateOnce: !0,
                              __framer__enter: hn,
                              __framer__exit: gn,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __perspectiveFX: !1,
                              __smartComponentFX: !0,
                              __targetOpacity: 1,
                              className: `framer-1h3lk4y`,
                              "data-framer-name": `Link 01`,
                              layoutDependency: M,
                              layoutId: `uU0jX8IG_`,
                              children: [
                                /*#__PURE__*/ l(b, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ l(i, {
                                    children: /*#__PURE__*/ l(h.h3, {
                                      className: `framer-styles-preset-mcct0z`,
                                      "data-styles-preset": `JIvkOqTK6`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-a0htzi, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                      },
                                      children: `Address`,
                                    }),
                                  }),
                                  className: `framer-172yper`,
                                  fonts: [`Inter`],
                                  layoutDependency: M,
                                  layoutId: `jpaYWH1ol`,
                                  style: {
                                    "--extracted-a0htzi": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                /*#__PURE__*/ c(h.ul, {
                                  className: `framer-k6rwzb`,
                                  "data-framer-name": `All Items`,
                                  layoutDependency: M,
                                  layoutId: `ZYv4HidEp`,
                                  children: [
                                    /*#__PURE__*/ l(b, {
                                      __fromCanvasComponent: !0,
                                      as: `li`,
                                      children: /*#__PURE__*/ l(i, {
                                        children: /*#__PURE__*/ l(h.p, {
                                          className: `framer-styles-preset-ayx75q`,
                                          "data-styles-preset": `I8nYi38vp`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                          },
                                          children: /*#__PURE__*/ l(R, {
                                            href: `https://www.google.com/maps`,
                                            motionChild: !0,
                                            nodeId: `fVYpage5e`,
                                            openInNewTab: !0,
                                            relValues: [],
                                            scopeId: `iH646AyHe`,
                                            smoothScroll: !1,
                                            children: /*#__PURE__*/ l(h.a, {
                                              className: `framer-styles-preset-6ovftn`,
                                              "data-styles-preset": `b1FQusCg6`,
                                              children: `Banglore, India`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      className: `framer-1jikqzp`,
                                      fonts: [`Inter`],
                                      layoutDependency: M,
                                      layoutId: `fVYpage5e`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    /*#__PURE__*/ l(b, {
                                      __fromCanvasComponent: !0,
                                      as: `li`,
                                      children: /*#__PURE__*/ l(i, {
                                        children: /*#__PURE__*/ l(h.p, {
                                          className: `framer-styles-preset-ayx75q`,
                                          "data-styles-preset": `I8nYi38vp`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                          },
                                          children: /*#__PURE__*/ l(R, {
                                            href: `mailto:officialdigimk@gmail.com`,
                                            motionChild: !0,
                                            nodeId: `GyYMEzFsv`,
                                            openInNewTab: !0,
                                            relValues: [],
                                            scopeId: `iH646AyHe`,
                                            smoothScroll: !1,
                                            children: /*#__PURE__*/ l(h.a, {
                                              className: `framer-styles-preset-6ovftn`,
                                              "data-styles-preset": `b1FQusCg6`,
                                              children: `officialdigimk@gmail.com`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      className: `framer-7t5d9p`,
                                      fonts: [`Inter`],
                                      layoutDependency: M,
                                      layoutId: `GyYMEzFsv`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    /*#__PURE__*/ l(b, {
                                      __fromCanvasComponent: !0,
                                      as: `li`,
                                      children: /*#__PURE__*/ l(i, {
                                        children: /*#__PURE__*/ l(h.p, {
                                          className: `framer-styles-preset-ayx75q`,
                                          "data-styles-preset": `I8nYi38vp`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                          },
                                          children: /*#__PURE__*/ l(R, {
                                            href: `https://www.instagram.com/anup.ae/`,
                                            motionChild: !0,
                                            nodeId: `be75SMms2`,
                                            openInNewTab: !0,
                                            relValues: [],
                                            scopeId: `iH646AyHe`,
                                            smoothScroll: !1,
                                            children: /*#__PURE__*/ l(h.a, {
                                              className: `framer-styles-preset-6ovftn`,
                                              "data-styles-preset": `b1FQusCg6`,
                                              children: `@anup.ae`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      className: `framer-fjcte5`,
                                      fonts: [`Inter`],
                                      layoutDependency: M,
                                      layoutId: `be75SMms2`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            /*#__PURE__*/ c(rn, {
                              __framer__animate: { transition: Y },
                              __framer__animateOnce: !0,
                              __framer__enter: hn,
                              __framer__exit: gn,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __perspectiveFX: !1,
                              __smartComponentFX: !0,
                              __targetOpacity: 1,
                              className: `framer-65wbah`,
                              "data-framer-name": `Form Links`,
                              layoutDependency: M,
                              layoutId: `mpJ027gqb`,
                              children: [
                                /*#__PURE__*/ l(b, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ l(i, {
                                    children: /*#__PURE__*/ l(h.h3, {
                                      className: `framer-styles-preset-mcct0z`,
                                      "data-styles-preset": `JIvkOqTK6`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-a0htzi, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                      },
                                      children: `Newsletter`,
                                    }),
                                  }),
                                  className: `framer-nhr2k7`,
                                  fonts: [`Inter`],
                                  layoutDependency: M,
                                  layoutId: `ol80Nw17b`,
                                  style: {
                                    "--extracted-a0htzi": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                /*#__PURE__*/ c(h.div, {
                                  className: `framer-1lxbqts`,
                                  "data-framer-name": `Content`,
                                  layoutDependency: M,
                                  layoutId: `XT7yh6xFf`,
                                  children: [
                                    /*#__PURE__*/ l(b, {
                                      __fromCanvasComponent: !0,
                                      children: /*#__PURE__*/ l(i, {
                                        children: /*#__PURE__*/ l(h.p, {
                                          className: `framer-styles-preset-ayx75q`,
                                          "data-styles-preset": `I8nYi38vp`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                          },
                                          children: `Get the latest updates in your inbox`,
                                        }),
                                      }),
                                      className: `framer-369u1r`,
                                      fonts: [`Inter`],
                                      layoutDependency: M,
                                      layoutId: `hJp4jLEGU`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                        "--framer-link-text-decoration": `underline`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                      ...J(
                                        {
                                          ENEJMQb5q: {
                                            children: /*#__PURE__*/ l(i, {
                                              children: /*#__PURE__*/ l(h.p, {
                                                className: `framer-styles-preset-ayx75q`,
                                                "data-styles-preset": `I8nYi38vp`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `left`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                                },
                                                children: `Get the latest updates in your inbox`,
                                              }),
                                            }),
                                          },
                                        },
                                        w,
                                        D
                                      ),
                                    }),
                                    /*#__PURE__*/ l(L, {
                                      action: `https://api.framer.com/forms/v1/forms/4c802196-a217-4106-accc-b7dffe59e7d1/submit`,
                                      className: `framer-4vmf9n`,
                                      layoutDependency: M,
                                      layoutId: `ws_oA4nxZ`,
                                      nodeId: `ws_oA4nxZ`,
                                      redirectUrl: { webPageId: `augiA20Il` },
                                      children: (e) =>
                                        /*#__PURE__*/ c(o, {
                                          children: [
                                            /*#__PURE__*/ l(h.label, {
                                              className: `framer-iy8141`,
                                              layoutDependency: M,
                                              layoutId: `vh1uDgqWR`,
                                              children: /*#__PURE__*/ l(fe, {
                                                className: `framer-thpmm8`,
                                                inputName: `Email`,
                                                layoutDependency: M,
                                                layoutId: `BBG5uIB4t`,
                                                placeholder: `Enter your email`,
                                                required: !0,
                                                style: {
                                                  "--framer-input-background": `var(--token-a9c881b7-a087-4bee-a49f-befc82631c31, rgb(242, 242, 242))`,
                                                  "--framer-input-border-bottom-width": `1px`,
                                                  "--framer-input-border-color": `var(--token-acded813-a79e-4616-ad2c-8f627c954dde, rgb(194, 194, 194))`,
                                                  "--framer-input-border-left-width": `1px`,
                                                  "--framer-input-border-radius-bottom-left": `45px`,
                                                  "--framer-input-border-radius-bottom-right": `45px`,
                                                  "--framer-input-border-radius-top-left": `45px`,
                                                  "--framer-input-border-radius-top-right": `45px`,
                                                  "--framer-input-border-right-width": `1px`,
                                                  "--framer-input-border-style": `solid`,
                                                  "--framer-input-border-top-width": `1px`,
                                                  "--framer-input-font-color": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                                                  "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                                  "--framer-input-placeholder-color": `rgba(51, 51, 51, 0.5)`,
                                                },
                                                type: `email`,
                                              }),
                                            }),
                                            /*#__PURE__*/ l(z, {
                                              height: 44,
                                              ...J(
                                                {
                                                  c9mmVCYFm: {
                                                    width: `min(max((min(${p?.width || `100vw`}, 1050px) - 50px) / 2, 50px), 267px)`,
                                                  },
                                                  ENEJMQb5q: {
                                                    width: `calc(min(${p?.width || `100vw`}, 1050px) - 40px)`,
                                                  },
                                                },
                                                w,
                                                D
                                              ),
                                              children: /*#__PURE__*/ l(S, {
                                                className: `framer-1kfcciq-container`,
                                                layoutDependency: M,
                                                layoutId: `oA8CkkfmH-container`,
                                                nodeId: `oA8CkkfmH`,
                                                rendersWithMotion: !0,
                                                scopeId: `iH646AyHe`,
                                                children: /*#__PURE__*/ l(K, {
                                                  height: `100%`,
                                                  id: `oA8CkkfmH`,
                                                  layoutId: `oA8CkkfmH`,
                                                  style: { width: `100%` },
                                                  type: `submit`,
                                                  variant: vn(
                                                    e,
                                                    {
                                                      error: `HlI5h7SAO`,
                                                      pending: `vfm15FG6f`,
                                                      success: `P_TINRc5S`,
                                                    },
                                                    _n(`MDnO3RGuD`)
                                                  ),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    /*#__PURE__*/ l(h.div, {
                      className: `framer-1u3qpcx`,
                      "data-framer-name": `Stripe`,
                      layoutDependency: M,
                      layoutId: `dsrp6sbRj`,
                      style: {
                        backgroundColor: `var(--token-4f650eff-568d-45ee-b0f2-21d9c022e3ce, rgb(255, 66, 66))`,
                      },
                      children: /*#__PURE__*/ l(h.div, {
                        className: `framer-18v4mwb`,
                        "data-framer-name": `Wrap`,
                        layoutDependency: M,
                        layoutId: `SgElx1CPb`,
                        children: /*#__PURE__*/ c(cn, {
                          className: `framer-m21qa4`,
                          layoutDependency: M,
                          layoutId: `WxC7Htxpu`,
                          style: {
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            mask: `linear-gradient(270deg, rgba(0,0,0,0) 0%, rgb(0, 0, 0) 22%, rgba(0, 0, 0, 1) 84%, rgba(0, 0, 0, 0) 100%) add`,
                            WebkitMask: `linear-gradient(270deg, rgba(0,0,0,0) 0%, rgb(0, 0, 0) 22%, rgba(0, 0, 0, 1) 84%, rgba(0, 0, 0, 0) 100%) add`,
                          },
                          tickerEffectAlign: `center`,
                          tickerEffectDirectionModifier: `default`,
                          tickerEffectDraggable: !1,
                          tickerEffectEnabled: !0,
                          tickerEffectGap: `30px`,
                          tickerEffectHoverModifier: 100,
                          tickerEffectOverflow: `visible`,
                          tickerEffectPosition: `relative`,
                          tickerEffectStackDirection: `row`,
                          tickerEffectVelocity: 30,
                          children: [
                            /*#__PURE__*/ l(x, {
                              children: /*#__PURE__*/ l(b, {
                                __fromCanvasComponent: !0,
                                children: /*#__PURE__*/ l(i, {
                                  children: /*#__PURE__*/ l(h.h1, {
                                    className: `framer-styles-preset-1q787c3`,
                                    "data-styles-preset": `y8eR9t98C`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-gdpscs, var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255)))`,
                                    },
                                    children: `Digimk`,
                                  }),
                                }),
                                className: `framer-19wh5fi`,
                                fonts: [`Inter`],
                                layoutDependency: M,
                                layoutId: `QRbXHT_e3`,
                                style: {
                                  "--extracted-gdpscs": `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            /*#__PURE__*/ l(x, {
                              children: /*#__PURE__*/ l(W, {
                                animated: !0,
                                className: `framer-1035m8b`,
                                layoutDependency: M,
                                layoutId: `czsGbU4Bp`,
                                style: {
                                  "--1m6trwb": 1,
                                  "--21h8s6": `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                                  "--pgex8v": 0,
                                  rotate: 45,
                                },
                              }),
                            }),
                            /*#__PURE__*/ l(x, {
                              children: /*#__PURE__*/ l(b, {
                                __fromCanvasComponent: !0,
                                children: /*#__PURE__*/ l(i, {
                                  children: /*#__PURE__*/ l(h.h1, {
                                    className: `framer-styles-preset-1q787c3`,
                                    "data-styles-preset": `y8eR9t98C`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-gdpscs, var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255)))`,
                                    },
                                    children: `Creative`,
                                  }),
                                }),
                                className: `framer-10p565k`,
                                fonts: [`Inter`],
                                layoutDependency: M,
                                layoutId: `Bk1kbpJ6i`,
                                style: {
                                  "--extracted-gdpscs": `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            /*#__PURE__*/ l(x, {
                              children: /*#__PURE__*/ l(W, {
                                animated: !0,
                                className: `framer-157ica9`,
                                layoutDependency: M,
                                layoutId: `UfqDUEaxS`,
                                style: {
                                  "--1m6trwb": 1,
                                  "--21h8s6": `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                                  "--pgex8v": 0,
                                  rotate: 45,
                                },
                              }),
                            }),
                            /*#__PURE__*/ l(x, {
                              children: /*#__PURE__*/ l(b, {
                                __fromCanvasComponent: !0,
                                children: /*#__PURE__*/ l(i, {
                                  children: /*#__PURE__*/ l(h.h1, {
                                    className: `framer-styles-preset-1q787c3`,
                                    "data-styles-preset": `y8eR9t98C`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-gdpscs, var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255)))`,
                                    },
                                    children: `Agency`,
                                  }),
                                }),
                                className: `framer-1101szy`,
                                fonts: [`Inter`],
                                layoutDependency: M,
                                layoutId: `BPLoLbu80`,
                                style: {
                                  "--extracted-gdpscs": `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            /*#__PURE__*/ l(x, {
                              children: /*#__PURE__*/ l(W, {
                                animated: !0,
                                className: `framer-13tjm99`,
                                layoutDependency: M,
                                layoutId: `R732cXoYO`,
                                style: {
                                  "--1m6trwb": 1,
                                  "--21h8s6": `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                                  "--pgex8v": 1.5,
                                  rotate: 45,
                                },
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    /*#__PURE__*/ l(un, {
                      __perspectiveFX: !1,
                      __smartComponentFX: !0,
                      __targetOpacity: 1,
                      animate: yn,
                      className: `framer-3ozn8m-container`,
                      "data-framer-appear-id": `3ozn8m`,
                      initial: bn,
                      layoutDependency: M,
                      layoutId: `tDk4tbCBq-container`,
                      optimized: !0,
                      rendersWithMotion: !0,
                      style: {
                        mask: `linear-gradient(0deg, rgba(0,0,0,0) 3%, rgb(0, 0, 0) 30.96846846846847%, rgba(0,0,0,1) 74.07446509009009%, rgba(0, 0, 0, 0) 100%) add`,
                        WebkitMask: `linear-gradient(0deg, rgba(0,0,0,0) 3%, rgb(0, 0, 0) 30.96846846846847%, rgba(0,0,0,1) 74.07446509009009%, rgba(0, 0, 0, 0) 100%) add`,
                      },
                      children: /*#__PURE__*/ l(ne, {
                        __fromCanvasComponent: !0,
                        animated: U.animated,
                        buffers: U.buffers,
                        fallbackImage: `https://framerusercontent.com/images/aOjJDslhyqucVridvO6ZVAR2QpA.png?scale-down-to=1200&width=2400&height=1926`,
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
                          u_maskSoftness: { type: `number`, value: 1.89 },
                          u_seed: { type: `number`, value: 32 },
                          u_waveAmplitude: { type: `number`, value: 2.5 },
                          u_waveAngle: { type: `number`, value: 105 },
                          u_waveFreqX: { type: `number`, value: 0.9 },
                          u_waveFreqY: { type: `number`, value: 6 },
                          u_waveSpeed: { type: `number`, value: 0.61 },
                        },
                        vertexShader: U.vertex,
                        width: `100%`,
                        ...J(
                          {
                            c9mmVCYFm: {
                              fallbackImage: `https://framerusercontent.com/images/yetKOpbsYVFvmSps13VFuqpDBY.png?scale-down-to=1228&width=1620&height=2456`,
                            },
                            ENEJMQb5q: {
                              fallbackImage: `https://framerusercontent.com/images/uihVf6EcW2wTcsYPtkOKQNHxDc.png?scale-down-to=390&width=780&height=400`,
                            },
                          },
                          w,
                          D
                        ),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          })
        );
      })),
      (Dn = [
        `.framer-YhRHM.framer-ukb9ok, .framer-YhRHM .framer-ukb9ok { display: block; }`,
        `.framer-YhRHM.framer-17fbv7s { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 100px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-YhRHM .framer-1s89gi3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: center; max-width: 1050px; overflow: var(--overflow-clip-fallback, clip); padding: 100px 0px 100px 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-YhRHM .framer-gbd2m1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-YhRHM .framer-1lc1rf1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; max-width: 700px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-YhRHM .framer-1pfwh0k, .framer-YhRHM .framer-172yper, .framer-YhRHM .framer-1jikqzp, .framer-YhRHM .framer-7t5d9p, .framer-YhRHM .framer-fjcte5, .framer-YhRHM .framer-nhr2k7, .framer-YhRHM .framer-369u1r { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-YhRHM .framer-9iwbs0 { flex: none; height: auto; max-width: 420px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-YhRHM .framer-dpemh2-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-YhRHM .framer-x6xa1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-YhRHM .framer-1xbxnmm { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-YhRHM .framer-xdgcv9, .framer-YhRHM .framer-sg57t0, .framer-YhRHM .framer-19wh5fi, .framer-YhRHM .framer-10p565k, .framer-YhRHM .framer-1101szy { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-YhRHM .framer-1bk4zsg { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; list-style: none; margin: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: auto; }`,
        `.framer-YhRHM .framer-1um5xcu-container, .framer-YhRHM .framer-leax83-container, .framer-YhRHM .framer-1aw9ju9-container, .framer-YhRHM .framer-g5mk0d-container, .framer-YhRHM .framer-qcyzig-container, .framer-YhRHM .framer-pcjz3n-container, .framer-YhRHM .framer-1dyq2vy-container, .framer-YhRHM .framer-1kfcciq-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-YhRHM .framer-5uc8jp { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: center; max-width: 165px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-YhRHM .framer-13ddsd1, .framer-YhRHM .framer-k6rwzb { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; list-style: none; margin: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-YhRHM .framer-1h3lk4y { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: center; max-width: 198px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-YhRHM .framer-65wbah { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: center; max-width: 267px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-YhRHM .framer-1lxbqts { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-YhRHM .framer-4vmf9n { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-YhRHM .framer-iy8141 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-YhRHM .framer-thpmm8 { --framer-input-focused-border-color: var(--token-4608043d-0105-434c-bf26-f4b71a19bbe5, #333333); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-family: "Manrope"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1em; --framer-input-font-size: 16px; --framer-input-font-weight: 500; --framer-input-padding: 10px 10px 10px 20px; --framer-input-wrapper-height: auto; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-YhRHM .framer-1u3qpcx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-YhRHM .framer-18v4mwb { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 50px 0px 50px 0px; position: relative; width: 100%; }`,
        `.framer-YhRHM .framer-m21qa4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-YhRHM .framer-1035m8b, .framer-YhRHM .framer-157ica9 { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 28px; }`,
        `.framer-YhRHM .framer-13tjm99 { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 25px; }`,
        `.framer-YhRHM .framer-3ozn8m-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 0; }`,
        `.framer-YhRHM.framer-v-seysat.framer-17fbv7s { width: 810px; }`,
        `.framer-YhRHM.framer-v-seysat .framer-1s89gi3 { align-content: flex-start; align-items: flex-start; padding: 100px 20px 100px 20px; }`,
        `.framer-YhRHM.framer-v-seysat .framer-gbd2m1 { align-content: flex-start; align-items: flex-start; justify-content: flex-start; max-width: 560px; }`,
        `.framer-YhRHM.framer-v-seysat .framer-1lc1rf1, .framer-YhRHM.framer-v-pb2zng .framer-gbd2m1, .framer-YhRHM.framer-v-pb2zng .framer-1lc1rf1 { align-content: flex-start; align-items: flex-start; }`,
        `.framer-YhRHM.framer-v-seysat .framer-x6xa1 { align-content: unset; align-items: unset; display: grid; gap: 60px 10px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); justify-content: center; }`,
        `.framer-YhRHM.framer-v-seysat .framer-1xbxnmm { align-self: start; justify-self: start; width: 100%; }`,
        `.framer-YhRHM.framer-v-seysat .framer-5uc8jp, .framer-YhRHM.framer-v-seysat .framer-1h3lk4y, .framer-YhRHM.framer-v-seysat .framer-65wbah { align-self: start; flex: none; justify-self: start; width: 100%; }`,
        `.framer-YhRHM.framer-v-pb2zng.framer-17fbv7s { width: 390px; }`,
        `.framer-YhRHM.framer-v-pb2zng .framer-1s89gi3 { gap: 50px; padding: 60px 20px 60px 20px; }`,
        `.framer-YhRHM.framer-v-pb2zng .framer-x6xa1 { flex-direction: column; gap: 30px 10px; justify-content: flex-start; }`,
        `.framer-YhRHM.framer-v-pb2zng .framer-5uc8jp, .framer-YhRHM.framer-v-pb2zng .framer-1h3lk4y, .framer-YhRHM.framer-v-pb2zng .framer-65wbah { flex: none; max-width: unset; width: 100%; }`,
        ...Be,
        ...We,
        ...Je,
        ...Ie,
        ...Qe,
      ]),
      (X = M(En, Dn, `framer-YhRHM`)),
      (X.displayName = `Footer`),
      (X.defaultProps = { height: 963, width: 1200 }),
      V(X, {
        variant: {
          options: [`MzmrI7HKa`, `c9mmVCYFm`, `ENEJMQb5q`],
          optionTitles: [`Desktop`, `Tablet`, `Mobile`],
          title: `Variant`,
          type: H.Enum,
        },
      }),
      j(
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
              {
                cssFamilyName: `Manrope`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Manrope`,
                url: `../../assets/misc/CIM4KQCLZSMMLWPVH25IDDSTY4ENPHEY.woff2`,
                weight: `500`,
              },
            ],
          },
          ...nn,
          ...an,
          ...on,
          ...sn,
          ...F(ze),
          ...F(Ue),
          ...F(qe),
          ...F(Fe),
          ...F(Ze),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (X.loader = {
        load: (e, t) =>
          ue(
            [
              () => N(q, {}, t),
              () => N(G, {}, t),
              () => N(K, {}, t),
              () => t.collectionUtils?.get(`NvVsF9Krs`)?.getSlugByRecordId(`oK5m5DBt3`, t.locale),
              () => t.collectionUtils?.get(`NvVsF9Krs`)?.getSlugByRecordId(`YinQT1c6i`, t.locale),
              () => t.collectionUtils?.get(`NvVsF9Krs`)?.getSlugByRecordId(`eWmj9eNSW`, t.locale),
            ],
            t
          ),
      }));
  }))();
}
var kn, An, jn;
function Mn() {
  return (Mn = e(() => {
    (T(),
      k.loadFonts([`FS;Manrope-semibold`, `FS;Manrope-bold`]),
      (kn = [
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
              cssFamilyName: `Manrope`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Manrope`,
              url: `../../assets/misc/6P4FPMFQH7CCC7RZ4UU4NKSGJ2RLF7V5.woff2`,
              weight: `700`,
            },
          ],
        },
      ]),
      (An = [
        `.framer-FLJLL .framer-styles-preset-itgzhy:not(.rich-text-wrapper), .framer-FLJLL .framer-styles-preset-itgzhy.rich-text-wrapper p { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 28px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.02em; --framer-line-height: 1.6em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-123fbd15-23fe-45de-b318-115472c638cd, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (jn = `framer-FLJLL`));
  }))();
}
function Nn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Pn, Fn, In, Ln, Rn, zn, Bn, Vn, Hn, Un, Z;
function Wn() {
  return (Wn = e(() => {
    (d(),
      T(),
      v(),
      f(),
      (Pn = [`EGftLxJji`, `UWpUbEUIu`, `eXN6q1QUg`]),
      (Fn = `framer-Mp3pe`),
      (In = {
        EGftLxJji: `framer-v-1096zlf`,
        eXN6q1QUg: `framer-v-174a4ty`,
        UWpUbEUIu: `framer-v-xkv3ya`,
      }),
      (Ln = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Rn = (e, t) => `translateX(-50%) ${t}`),
      (zn = ({ value: e, children: n }) => {
        let r = t(_),
          i = e ?? r.transition,
          a = s(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ l(_.Provider, { value: a, children: n });
      }),
      (Bn = { Large: `eXN6q1QUg`, Logo: `EGftLxJji`, Smaller: `UWpUbEUIu` }),
      (Vn = h.create(i)),
      (Hn = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        hEmiqlBhb: e ?? i.hEmiqlBhb,
        variant: Bn[i.variant] ?? i.variant ?? `EGftLxJji`,
      })),
      (Un = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Z = M(
        /* @__PURE__ */ u(function (e, t) {
          let r = a(null),
            o = t ?? r,
            s = n(),
            { activeLocale: u, setLocale: d } = oe(),
            f = se(),
            { style: p, className: m, layoutId: _, variant: v, hEmiqlBhb: y, ...x } = Hn(e),
            {
              baseVariant: S,
              classNames: C,
              clearLoadingGesture: w,
              gestureHandlers: T,
              gestureVariant: E,
              isLoading: D,
              setGestureState: O,
              setVariant: k,
              variants: A,
            } = ee({
              cycleOrder: Pn,
              defaultVariant: `EGftLxJji`,
              ref: o,
              variant: v,
              variantClassNames: In,
            }),
            j = Un(e, A),
            { activeVariantCallback: M, delay: N } = he(S),
            P = M(async (...e) => {
              if ((O({ isPressed: !1 }), y && (await y(...e)) === !1)) return !1;
            }),
            ne = B(Fn);
          return /*#__PURE__*/ l(g, {
            id: _ ?? s,
            children: /*#__PURE__*/ l(Vn, {
              animate: A,
              initial: !1,
              children: /*#__PURE__*/ l(zn, {
                value: Ln,
                children: /*#__PURE__*/ l(R, {
                  href: { webPageId: `augiA20Il` },
                  motionChild: !0,
                  nodeId: `EGftLxJji`,
                  openInNewTab: !1,
                  scopeId: `Rh642ldhj`,
                  children: /*#__PURE__*/ c(h.a, {
                    ...x,
                    ...T,
                    className: `${B(ne, `framer-1096zlf`, m, C)} framer-kozmt3`,
                    "data-framer-name": `Logo`,
                    "data-highlight": !0,
                    layoutDependency: j,
                    layoutId: `EGftLxJji`,
                    onTap: P,
                    ref: o,
                    style: { ...p },
                    ...Nn(
                      {
                        eXN6q1QUg: { "data-framer-name": `Large` },
                        UWpUbEUIu: { "data-framer-name": `Smaller` },
                      },
                      S,
                      E
                    ),
                    children: [
                      /*#__PURE__*/ l(ce, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 245.6,
                          intrinsicWidth: 200,
                          loading: te((f?.y || 0) + -14),
                          pixelHeight: 307,
                          pixelWidth: 250,
                          sizes: `calc(${(f?.height || 34) - -14} / 1.228)`,
                          src: `../../assets/images/7lGp25Y8XbRYc5klHnCcyPhAl8Q.png`,
                        },
                        className: `framer-eowooh`,
                        "data-framer-name": `Saas practice_SaaS_Practice_2026-08-04_01.12.06-removebg-preview`,
                        layoutDependency: j,
                        layoutId: `vdNlkvGtu`,
                      }),
                      /*#__PURE__*/ l(b, {
                        __fromCanvasComponent: !0,
                        children: /*#__PURE__*/ l(i, {
                          children: /*#__PURE__*/ l(h.p, {
                            dir: `auto`,
                            style: {
                              "--font-selector": `RlM7Q2xhc2ggR3JvdGVzay1tZWRpdW0=`,
                              "--framer-font-family": `"Clash Grotesk", "Clash Grotesk Placeholder", sans-serif`,
                              "--framer-font-size": `28px`,
                              "--framer-font-weight": `500`,
                              "--framer-line-height": `1em`,
                              "--framer-text-color": `var(--extracted-r6o4lv, rgb(54, 168, 255))`,
                            },
                            children: `Digimk`,
                          }),
                        }),
                        className: `framer-5rt5yp`,
                        fonts: [`FS;Clash Grotesk-medium`],
                        layoutDependency: j,
                        layoutId: `AAZWhA4LS`,
                        style: {
                          "--extracted-r6o4lv": `rgb(54, 168, 255)`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        transformTemplate: Rn,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...Nn(
                          {
                            UWpUbEUIu: {
                              children: /*#__PURE__*/ l(i, {
                                children: /*#__PURE__*/ l(h.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7Q2xhc2ggR3JvdGVzay1tZWRpdW0=`,
                                    "--framer-font-family": `"Clash Grotesk", "Clash Grotesk Placeholder", sans-serif`,
                                    "--framer-font-size": `20px`,
                                    "--framer-font-weight": `500`,
                                    "--framer-line-height": `1em`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(54, 168, 255))`,
                                  },
                                  children: `Digimk`,
                                }),
                              }),
                            },
                          },
                          S,
                          E
                        ),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-Mp3pe.framer-kozmt3, .framer-Mp3pe .framer-kozmt3 { display: block; }`,
          `.framer-Mp3pe.framer-1096zlf { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 34px; min-width: 168px; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-Mp3pe .framer-eowooh { aspect-ratio: 0.8143322475570033 / 1; bottom: 0px; flex: none; left: -5px; overflow: visible; position: absolute; top: -14px; width: auto; z-index: 1; }`,
          `.framer-Mp3pe .framer-5rt5yp { bottom: 0px; flex: none; height: auto; left: 50%; position: absolute; white-space: pre; width: auto; z-index: 1; }`,
        ],
        `framer-Mp3pe`
      )),
      (Z.displayName = `Logo`),
      (Z.defaultProps = { height: 34, width: 168 }),
      V(Z, {
        variant: {
          options: [`EGftLxJji`, `UWpUbEUIu`, `eXN6q1QUg`],
          optionTitles: [`Logo`, `Smaller`, `Large`],
          title: `Variant`,
          type: H.Enum,
        },
        hEmiqlBhb: { title: `Click`, type: H.EventHandler },
      }),
      j(
        Z,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Clash Grotesk`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Clash Grotesk`,
                url: `../../assets/misc/DJS4RYGIUYUXJQOHY5VCZPKSTXUSHTSP.woff2`,
                weight: `500`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
function Q(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Gn, Kn, qn, Jn, Yn, Xn, Zn, Qn, $n, er, tr, nr, rr, ir, ar, or, sr, cr, $;
function lr() {
  return (lr = e(() => {
    (d(),
      T(),
      v(),
      f(),
      Re(),
      Mn(),
      Wn(),
      tn(),
      (Gn = y(Z)),
      (Kn = y(q)),
      (qn = A(de(h.div))),
      (Jn = [`QdL3QXxj0`, `xqiGo3xlH`, `JQUPDSygQ`, `vT3vaGDRl`]),
      (Yn = `framer-yNwN9`),
      (Xn = {
        JQUPDSygQ: `framer-v-1xloo1b`,
        QdL3QXxj0: `framer-v-1d1kab1`,
        vT3vaGDRl: `framer-v-1a54wf1`,
        xqiGo3xlH: `framer-v-1ghghep`,
      }),
      (Zn = { damping: 40, delay: 0, mass: 1, stiffness: 400, type: `spring` }),
      (Qn = (e, t) => `translateY(-50%) ${t}`),
      ($n = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (er = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { delay: 0.2, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` },
        x: 0,
        y: 0,
      }),
      (tr = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (nr = ({ value: e, children: n }) => {
        let r = t(_),
          i = e ?? r.transition,
          a = s(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ l(_.Provider, { value: a, children: n });
      }),
      (rr = {
        "Desktop - Open": `vT3vaGDRl`,
        "Phone Closed": `xqiGo3xlH`,
        "Phone Opened": `JQUPDSygQ`,
        Desktop: `QdL3QXxj0`,
      }),
      (ir = h.create(i)),
      (ar = ({ border: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        Ly5GoFpct: e ??
          i.Ly5GoFpct ?? {
            borderColor: `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255)) /* {"name":"White"} */`,
            borderStyle: `solid`,
            borderWidth: 1,
          },
        variant: rr[i.variant] ?? i.variant ?? `QdL3QXxj0`,
      })),
      (or = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (sr = /*#__PURE__*/ u(function (e, t) {
        let r = a(null),
          o = t ?? r,
          s = n(),
          { activeLocale: u, setLocale: d } = oe(),
          f = se(),
          { style: p, className: m, layoutId: _, variant: v, Ly5GoFpct: y, ...x } = ar(e),
          {
            baseVariant: C,
            classNames: w,
            clearLoadingGesture: te,
            gestureHandlers: T,
            gestureVariant: E,
            isLoading: D,
            setGestureState: O,
            setVariant: k,
            variants: A,
          } = ee({
            cycleOrder: Jn,
            defaultVariant: `QdL3QXxj0`,
            ref: o,
            variant: v,
            variantClassNames: Xn,
          }),
          j = or(e, A),
          { activeVariantCallback: M, delay: N } = he(C),
          ne = M(async (...e) => {
            k(`QdL3QXxj0`);
          }),
          F = M(async (...e) => {
            k(`xqiGo3xlH`);
          }),
          ie = M(async (...e) => {
            k(`vT3vaGDRl`);
          }),
          ae = M(async (...e) => {
            k(`JQUPDSygQ`);
          }),
          I = M(async (...e) => {
            k(`xqiGo3xlH`);
          }),
          L = M(async (...e) => {
            k(`QdL3QXxj0`);
          }),
          ce = M(async (...e) => {
            k(`xqiGo3xlH`);
          }),
          le = M(async (...e) => {
            k(`QdL3QXxj0`);
          }),
          ue = B(Yn, jn, Le),
          de = () => !![`JQUPDSygQ`, `vT3vaGDRl`].includes(C);
        return (
          re(),
          /*#__PURE__*/ l(g, {
            id: _ ?? s,
            children: /*#__PURE__*/ l(ir, {
              animate: A,
              initial: !1,
              children: /*#__PURE__*/ l(nr, {
                value: Zn,
                children: /*#__PURE__*/ c(h.nav, {
                  ...x,
                  ...T,
                  className: B(ue, `framer-1d1kab1`, m, w),
                  "data-border": !0,
                  "data-framer-name": `Desktop`,
                  layoutDependency: j,
                  layoutId: `QdL3QXxj0`,
                  ref: o,
                  style: {
                    "--border-bottom-width": (y?.borderBottomWidth ?? y?.borderWidth) + `px`,
                    "--border-color": y?.borderColor,
                    "--border-left-width": (y?.borderLeftWidth ?? y?.borderWidth) + `px`,
                    "--border-right-width": (y?.borderRightWidth ?? y?.borderWidth) + `px`,
                    "--border-style": y?.borderStyle,
                    "--border-top-width": (y?.borderTopWidth ?? y?.borderWidth) + `px`,
                    backdropFilter: `blur(12px)`,
                    backgroundColor: `rgba(255, 255, 255, 0.6)`,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    WebkitBackdropFilter: `blur(12px)`,
                    ...p,
                  },
                  ...Q(
                    {
                      JQUPDSygQ: { "data-framer-name": `Phone Opened` },
                      vT3vaGDRl: { "data-framer-name": `Desktop - Open` },
                      xqiGo3xlH: { "data-framer-name": `Phone Closed` },
                    },
                    C,
                    E
                  ),
                  children: [
                    /*#__PURE__*/ c(h.div, {
                      className: `framer-17h505s`,
                      "data-framer-name": `Wrapper`,
                      layoutDependency: j,
                      layoutId: `FC4YaAyvg`,
                      ...Q({ xqiGo3xlH: { transformTemplate: Qn } }, C, E),
                      children: [
                        /*#__PURE__*/ l(z, {
                          height: 34,
                          y: (f?.y || 0) + 15 + (((f?.height || 70) - 30 - 40) / 2 + 0 + 0) + 3,
                          ...Q(
                            {
                              JQUPDSygQ: { y: (f?.y || 0) + 12 + 0 + 3 },
                              vT3vaGDRl: {
                                y:
                                  (f?.y || 0) +
                                  15 +
                                  (((f?.height || 349) - 30 - 318.4) / 2 + 0 + 0) +
                                  3,
                              },
                              xqiGo3xlH: {
                                y: (f?.y || 0) + ((f?.height || 64) * 0.5000000000000002 - 20) + 3,
                              },
                            },
                            C,
                            E
                          ),
                          children: /*#__PURE__*/ l(S, {
                            className: `framer-1uh957s-container`,
                            layoutDependency: j,
                            layoutId: `pjFhMTbGO-container`,
                            nodeId: `pjFhMTbGO`,
                            rendersWithMotion: !0,
                            scopeId: `PzXZl9mMB`,
                            children: /*#__PURE__*/ l(Z, {
                              height: `100%`,
                              hEmiqlBhb: ne,
                              id: `pjFhMTbGO`,
                              layoutId: `pjFhMTbGO`,
                              variant: $n(`EGftLxJji`),
                              width: `100%`,
                              ...Q(
                                { JQUPDSygQ: { hEmiqlBhb: F }, xqiGo3xlH: { hEmiqlBhb: F } },
                                C,
                                E
                              ),
                            }),
                          }),
                        }),
                        /*#__PURE__*/ c(h.div, {
                          className: `framer-1jqh4hi`,
                          "data-framer-name": `Icon`,
                          "data-highlight": !0,
                          layoutDependency: j,
                          layoutId: `DdRYriKoB`,
                          onTap: ie,
                          style: {
                            backgroundColor: `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                          },
                          variants: {
                            JQUPDSygQ: { backgroundColor: `rgb(0, 0, 0)` },
                            xqiGo3xlH: { backgroundColor: `rgb(0, 0, 0)` },
                          },
                          ...Q(
                            {
                              JQUPDSygQ: { onTap: I },
                              vT3vaGDRl: { onTap: L },
                              xqiGo3xlH: { onTap: ae },
                            },
                            C,
                            E
                          ),
                          children: [
                            /*#__PURE__*/ l(h.div, {
                              className: `framer-1676kmb`,
                              "data-framer-name": `Bottom`,
                              layoutDependency: j,
                              layoutId: `jbIBe7Btc`,
                              style: {
                                backgroundColor: `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10,
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                                rotate: 0,
                              },
                              variants: {
                                JQUPDSygQ: { backgroundColor: `rgb(255, 255, 255)`, rotate: -45 },
                                vT3vaGDRl: { rotate: -45 },
                                xqiGo3xlH: { backgroundColor: `rgb(255, 255, 255)` },
                              },
                            }),
                            /*#__PURE__*/ l(h.div, {
                              className: `framer-r21me7`,
                              "data-framer-name": `Top`,
                              layoutDependency: j,
                              layoutId: `HLZ3ttNxG`,
                              style: {
                                backgroundColor: `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10,
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                                rotate: 0,
                              },
                              variants: {
                                JQUPDSygQ: { backgroundColor: `rgb(255, 255, 255)`, rotate: 45 },
                                vT3vaGDRl: { rotate: 45 },
                                xqiGo3xlH: { backgroundColor: `rgb(255, 255, 255)` },
                              },
                            }),
                          ],
                        }),
                      ],
                    }),
                    de() &&
                      /*#__PURE__*/ c(qn, {
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        animate: er,
                        className: `framer-1ruf8ey`,
                        "data-framer-appear-id": `1ruf8ey`,
                        "data-framer-name": `Menu`,
                        "data-highlight": !0,
                        initial: tr,
                        layoutDependency: j,
                        layoutId: `JPY5SQPm2`,
                        onTap: I,
                        optimized: !0,
                        ...Q(
                          {
                            JQUPDSygQ: { "data-highlight": void 0, onTap: void 0 },
                            vT3vaGDRl: { onTap: L },
                          },
                          C,
                          E
                        ),
                        children: [
                          /*#__PURE__*/ c(h.div, {
                            className: `framer-1otylbd`,
                            layoutDependency: j,
                            layoutId: `wPF6aOsbM`,
                            ...Q({ vT3vaGDRl: { "data-highlight": !0, onTap: L } }, C, E),
                            children: [
                              /*#__PURE__*/ l(b, {
                                __fromCanvasComponent: !0,
                                children: /*#__PURE__*/ l(i, {
                                  children: /*#__PURE__*/ l(h.p, {
                                    className: `framer-styles-preset-itgzhy`,
                                    "data-styles-preset": `oRnXSo0jn`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                    },
                                    children: /*#__PURE__*/ l(R, {
                                      href: { webPageId: `augiA20Il` },
                                      motionChild: !0,
                                      nodeId: `kSN4EUYwr`,
                                      openInNewTab: !1,
                                      relValues: [],
                                      scopeId: `PzXZl9mMB`,
                                      smoothScroll: !1,
                                      children: /*#__PURE__*/ l(h.a, {
                                        className: `framer-styles-preset-6ovftn`,
                                        "data-styles-preset": `b1FQusCg6`,
                                        children: `Home`,
                                      }),
                                    }),
                                  }),
                                }),
                                className: `framer-z504u4`,
                                fonts: [`Inter`],
                                layoutDependency: j,
                                layoutId: `kSN4EUYwr`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...Q(
                                  {
                                    JQUPDSygQ: {
                                      "data-highlight": !0,
                                      children: /*#__PURE__*/ l(i, {
                                        children: /*#__PURE__*/ l(h.p, {
                                          className: `framer-styles-preset-itgzhy`,
                                          "data-styles-preset": `oRnXSo0jn`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                          },
                                          children: /*#__PURE__*/ l(R, {
                                            href: { webPageId: `augiA20Il` },
                                            motionChild: !0,
                                            nodeId: `kSN4EUYwr`,
                                            openInNewTab: !1,
                                            relValues: [],
                                            scopeId: `PzXZl9mMB`,
                                            smoothScroll: !1,
                                            children: /*#__PURE__*/ l(h.a, {
                                              className: `framer-styles-preset-6ovftn`,
                                              "data-styles-preset": `b1FQusCg6`,
                                              children: `Home`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      onTap: I,
                                    },
                                    vT3vaGDRl: { "data-highlight": !0, onTap: L },
                                  },
                                  C,
                                  E
                                ),
                              }),
                              /*#__PURE__*/ l(b, {
                                __fromCanvasComponent: !0,
                                children: /*#__PURE__*/ l(i, {
                                  children: /*#__PURE__*/ l(h.p, {
                                    className: `framer-styles-preset-itgzhy`,
                                    "data-styles-preset": `oRnXSo0jn`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                    },
                                    children: /*#__PURE__*/ l(R, {
                                      href: { webPageId: `augiA20Il` },
                                      motionChild: !0,
                                      nodeId: `QQHGLU6tw`,
                                      openInNewTab: !1,
                                      relValues: [],
                                      scopeId: `PzXZl9mMB`,
                                      smoothScroll: !0,
                                      children: /*#__PURE__*/ l(h.a, {
                                        className: `framer-styles-preset-6ovftn`,
                                        "data-styles-preset": `b1FQusCg6`,
                                        children: `Services`,
                                      }),
                                    }),
                                  }),
                                }),
                                className: `framer-v7y9tx`,
                                fonts: [`Inter`],
                                layoutDependency: j,
                                layoutId: `QQHGLU6tw`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...Q(
                                  {
                                    JQUPDSygQ: {
                                      "data-highlight": !0,
                                      children: /*#__PURE__*/ l(i, {
                                        children: /*#__PURE__*/ l(h.p, {
                                          className: `framer-styles-preset-itgzhy`,
                                          "data-styles-preset": `oRnXSo0jn`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                          },
                                          children: /*#__PURE__*/ l(R, {
                                            href: { hash: `:wCrl5EG3s`, webPageId: `augiA20Il` },
                                            motionChild: !0,
                                            nodeId: `QQHGLU6tw`,
                                            openInNewTab: !1,
                                            relValues: [],
                                            scopeId: `PzXZl9mMB`,
                                            smoothScroll: !0,
                                            children: /*#__PURE__*/ l(h.a, {
                                              className: `framer-styles-preset-6ovftn`,
                                              "data-styles-preset": `b1FQusCg6`,
                                              children: `Services`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      onTap: I,
                                    },
                                    vT3vaGDRl: {
                                      "data-highlight": !0,
                                      children: /*#__PURE__*/ l(i, {
                                        children: /*#__PURE__*/ l(h.p, {
                                          className: `framer-styles-preset-itgzhy`,
                                          "data-styles-preset": `oRnXSo0jn`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                          },
                                          children: /*#__PURE__*/ l(R, {
                                            href: { hash: `:wCrl5EG3s`, webPageId: `augiA20Il` },
                                            motionChild: !0,
                                            nodeId: `QQHGLU6tw`,
                                            openInNewTab: !1,
                                            relValues: [],
                                            scopeId: `PzXZl9mMB`,
                                            smoothScroll: !0,
                                            children: /*#__PURE__*/ l(h.a, {
                                              className: `framer-styles-preset-6ovftn`,
                                              "data-styles-preset": `b1FQusCg6`,
                                              children: `Services`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      onTap: L,
                                    },
                                  },
                                  C,
                                  E
                                ),
                              }),
                              /*#__PURE__*/ l(b, {
                                __fromCanvasComponent: !0,
                                children: /*#__PURE__*/ l(i, {
                                  children: /*#__PURE__*/ l(h.p, {
                                    className: `framer-styles-preset-itgzhy`,
                                    "data-styles-preset": `oRnXSo0jn`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                    },
                                    children: /*#__PURE__*/ l(R, {
                                      href: { webPageId: `augiA20Il` },
                                      motionChild: !0,
                                      nodeId: `XBeJ0aVm9`,
                                      openInNewTab: !1,
                                      relValues: [],
                                      scopeId: `PzXZl9mMB`,
                                      smoothScroll: !0,
                                      children: /*#__PURE__*/ l(h.a, {
                                        className: `framer-styles-preset-6ovftn`,
                                        "data-styles-preset": `b1FQusCg6`,
                                        children: `Process`,
                                      }),
                                    }),
                                  }),
                                }),
                                className: `framer-19o6xln`,
                                fonts: [`Inter`],
                                layoutDependency: j,
                                layoutId: `XBeJ0aVm9`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...Q(
                                  {
                                    JQUPDSygQ: {
                                      "data-highlight": !0,
                                      children: /*#__PURE__*/ l(i, {
                                        children: /*#__PURE__*/ l(h.p, {
                                          className: `framer-styles-preset-itgzhy`,
                                          "data-styles-preset": `oRnXSo0jn`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                          },
                                          children: /*#__PURE__*/ l(R, {
                                            href: { hash: `:VnW5NTYc5`, webPageId: `augiA20Il` },
                                            motionChild: !0,
                                            nodeId: `XBeJ0aVm9`,
                                            openInNewTab: !1,
                                            relValues: [],
                                            scopeId: `PzXZl9mMB`,
                                            smoothScroll: !0,
                                            children: /*#__PURE__*/ l(h.a, {
                                              className: `framer-styles-preset-6ovftn`,
                                              "data-styles-preset": `b1FQusCg6`,
                                              children: `Why Us`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      onTap: I,
                                    },
                                    vT3vaGDRl: {
                                      "data-highlight": !0,
                                      children: /*#__PURE__*/ l(i, {
                                        children: /*#__PURE__*/ l(h.p, {
                                          className: `framer-styles-preset-itgzhy`,
                                          "data-styles-preset": `oRnXSo0jn`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                          },
                                          children: /*#__PURE__*/ l(R, {
                                            href: { hash: `:VnW5NTYc5`, webPageId: `augiA20Il` },
                                            motionChild: !0,
                                            nodeId: `XBeJ0aVm9`,
                                            openInNewTab: !1,
                                            relValues: [],
                                            scopeId: `PzXZl9mMB`,
                                            smoothScroll: !0,
                                            children: /*#__PURE__*/ l(h.a, {
                                              className: `framer-styles-preset-6ovftn`,
                                              "data-styles-preset": `b1FQusCg6`,
                                              children: `Why Us`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      onTap: L,
                                    },
                                  },
                                  C,
                                  E
                                ),
                              }),
                              /*#__PURE__*/ l(b, {
                                __fromCanvasComponent: !0,
                                children: /*#__PURE__*/ l(i, {
                                  children: /*#__PURE__*/ l(h.p, {
                                    className: `framer-styles-preset-itgzhy`,
                                    "data-styles-preset": `oRnXSo0jn`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                    },
                                    children: /*#__PURE__*/ l(R, {
                                      href: { webPageId: `augiA20Il` },
                                      motionChild: !0,
                                      nodeId: `Pfme7xm7J`,
                                      openInNewTab: !1,
                                      relValues: [],
                                      scopeId: `PzXZl9mMB`,
                                      smoothScroll: !0,
                                      children: /*#__PURE__*/ l(h.a, {
                                        className: `framer-styles-preset-6ovftn`,
                                        "data-styles-preset": `b1FQusCg6`,
                                        children: `Pricing`,
                                      }),
                                    }),
                                  }),
                                }),
                                className: `framer-efz81s`,
                                fonts: [`Inter`],
                                layoutDependency: j,
                                layoutId: `Pfme7xm7J`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...Q(
                                  {
                                    JQUPDSygQ: {
                                      "data-highlight": !0,
                                      children: /*#__PURE__*/ l(i, {
                                        children: /*#__PURE__*/ l(h.p, {
                                          className: `framer-styles-preset-itgzhy`,
                                          "data-styles-preset": `oRnXSo0jn`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                          },
                                          children: /*#__PURE__*/ l(R, {
                                            href: { hash: `:oXLUVASEz`, webPageId: `augiA20Il` },
                                            motionChild: !0,
                                            nodeId: `Pfme7xm7J`,
                                            openInNewTab: !1,
                                            relValues: [],
                                            scopeId: `PzXZl9mMB`,
                                            smoothScroll: !0,
                                            children: /*#__PURE__*/ l(h.a, {
                                              className: `framer-styles-preset-6ovftn`,
                                              "data-styles-preset": `b1FQusCg6`,
                                              children: `Pricing`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      onTap: I,
                                    },
                                    vT3vaGDRl: {
                                      "data-highlight": !0,
                                      children: /*#__PURE__*/ l(i, {
                                        children: /*#__PURE__*/ l(h.p, {
                                          className: `framer-styles-preset-itgzhy`,
                                          "data-styles-preset": `oRnXSo0jn`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                          },
                                          children: /*#__PURE__*/ l(R, {
                                            href: { hash: `:oXLUVASEz`, webPageId: `augiA20Il` },
                                            motionChild: !0,
                                            nodeId: `Pfme7xm7J`,
                                            openInNewTab: !1,
                                            relValues: [],
                                            scopeId: `PzXZl9mMB`,
                                            smoothScroll: !0,
                                            children: /*#__PURE__*/ l(h.a, {
                                              className: `framer-styles-preset-6ovftn`,
                                              "data-styles-preset": `b1FQusCg6`,
                                              children: `Pricing`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      onTap: L,
                                    },
                                  },
                                  C,
                                  E
                                ),
                              }),
                              /*#__PURE__*/ l(b, {
                                __fromCanvasComponent: !0,
                                children: /*#__PURE__*/ l(i, {
                                  children: /*#__PURE__*/ l(h.p, {
                                    className: `framer-styles-preset-itgzhy`,
                                    "data-styles-preset": `oRnXSo0jn`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                    },
                                    children: /*#__PURE__*/ l(R, {
                                      href: { webPageId: `ZOlVkUVZl` },
                                      motionChild: !0,
                                      nodeId: `brM0dweuQ`,
                                      openInNewTab: !1,
                                      relValues: [],
                                      scopeId: `PzXZl9mMB`,
                                      smoothScroll: !1,
                                      children: /*#__PURE__*/ l(h.a, {
                                        className: `framer-styles-preset-6ovftn`,
                                        "data-styles-preset": `b1FQusCg6`,
                                        children: `Team`,
                                      }),
                                    }),
                                  }),
                                }),
                                className: `framer-1phzb8y`,
                                fonts: [`Inter`],
                                layoutDependency: j,
                                layoutId: `brM0dweuQ`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...Q(
                                  {
                                    JQUPDSygQ: {
                                      "data-highlight": !0,
                                      children: /*#__PURE__*/ l(i, {
                                        children: /*#__PURE__*/ l(h.p, {
                                          className: `framer-styles-preset-itgzhy`,
                                          "data-styles-preset": `oRnXSo0jn`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                          },
                                          children: /*#__PURE__*/ l(R, {
                                            href: { webPageId: `oZjhJQFrN` },
                                            motionChild: !0,
                                            nodeId: `brM0dweuQ`,
                                            openInNewTab: !1,
                                            relValues: [],
                                            scopeId: `PzXZl9mMB`,
                                            smoothScroll: !1,
                                            children: /*#__PURE__*/ l(h.a, {
                                              className: `framer-styles-preset-6ovftn`,
                                              "data-styles-preset": `b1FQusCg6`,
                                              children: `Case Study`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      onTap: I,
                                    },
                                    vT3vaGDRl: {
                                      "data-highlight": !0,
                                      children: /*#__PURE__*/ l(i, {
                                        children: /*#__PURE__*/ l(h.p, {
                                          className: `framer-styles-preset-itgzhy`,
                                          "data-styles-preset": `oRnXSo0jn`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                          },
                                          children: /*#__PURE__*/ l(R, {
                                            href: { webPageId: `oZjhJQFrN` },
                                            motionChild: !0,
                                            nodeId: `brM0dweuQ`,
                                            openInNewTab: !1,
                                            relValues: [],
                                            scopeId: `PzXZl9mMB`,
                                            smoothScroll: !1,
                                            children: /*#__PURE__*/ l(h.a, {
                                              className: `framer-styles-preset-6ovftn`,
                                              "data-styles-preset": `b1FQusCg6`,
                                              children: `Case Study`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      onTap: L,
                                    },
                                  },
                                  C,
                                  E
                                ),
                              }),
                              /*#__PURE__*/ l(b, {
                                __fromCanvasComponent: !0,
                                children: /*#__PURE__*/ l(i, {
                                  children: /*#__PURE__*/ l(h.p, {
                                    className: `framer-styles-preset-itgzhy`,
                                    "data-styles-preset": `oRnXSo0jn`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                    },
                                    children: /*#__PURE__*/ l(R, {
                                      href: { webPageId: `eFcSzAoqz` },
                                      motionChild: !0,
                                      nodeId: `P0YcbMbjs`,
                                      openInNewTab: !1,
                                      relValues: [],
                                      scopeId: `PzXZl9mMB`,
                                      smoothScroll: !1,
                                      children: /*#__PURE__*/ l(h.a, {
                                        className: `framer-styles-preset-6ovftn`,
                                        "data-styles-preset": `b1FQusCg6`,
                                        children: `Blogs`,
                                      }),
                                    }),
                                  }),
                                }),
                                className: `framer-1moamhg`,
                                fonts: [`Inter`],
                                layoutDependency: j,
                                layoutId: `P0YcbMbjs`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...Q(
                                  {
                                    JQUPDSygQ: {
                                      "data-highlight": !0,
                                      children: /*#__PURE__*/ l(i, {
                                        children: /*#__PURE__*/ l(h.p, {
                                          className: `framer-styles-preset-itgzhy`,
                                          "data-styles-preset": `oRnXSo0jn`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                          },
                                          children: /*#__PURE__*/ l(R, {
                                            href: { webPageId: `G7CG60dlp` },
                                            motionChild: !0,
                                            nodeId: `P0YcbMbjs`,
                                            openInNewTab: !1,
                                            relValues: [],
                                            scopeId: `PzXZl9mMB`,
                                            smoothScroll: !1,
                                            children: /*#__PURE__*/ l(h.a, {
                                              className: `framer-styles-preset-6ovftn`,
                                              "data-styles-preset": `b1FQusCg6`,
                                              children: `Blogs`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      onTap: I,
                                    },
                                    vT3vaGDRl: {
                                      "data-highlight": !0,
                                      children: /*#__PURE__*/ l(i, {
                                        children: /*#__PURE__*/ l(h.p, {
                                          className: `framer-styles-preset-itgzhy`,
                                          "data-styles-preset": `oRnXSo0jn`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-123fbd15-23fe-45de-b318-115472c638cd, rgb(0, 0, 0)))`,
                                          },
                                          children: /*#__PURE__*/ l(R, {
                                            href: { webPageId: `G7CG60dlp` },
                                            motionChild: !0,
                                            nodeId: `P0YcbMbjs`,
                                            openInNewTab: !1,
                                            relValues: [],
                                            scopeId: `PzXZl9mMB`,
                                            smoothScroll: !1,
                                            children: /*#__PURE__*/ l(h.a, {
                                              className: `framer-styles-preset-6ovftn`,
                                              "data-styles-preset": `b1FQusCg6`,
                                              children: `Blog`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      onTap: L,
                                    },
                                  },
                                  C,
                                  E
                                ),
                              }),
                            ],
                          }),
                          /*#__PURE__*/ l(P, {
                            links: [
                              { href: { webPageId: `pS1Xfqls7` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `pS1Xfqls7` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              /*#__PURE__*/ l(z, {
                                height: 44,
                                ...Q(
                                  {
                                    JQUPDSygQ: {
                                      width: `calc(${f?.width || `100vw`} - 30px)`,
                                      y: (f?.y || 0) + 12 + 100 + 0 + 478.8,
                                    },
                                    vT3vaGDRl: {
                                      width: `calc(${f?.width || `100vw`} - 50px)`,
                                      y:
                                        (f?.y || 0) +
                                        15 +
                                        (((f?.height || 349) - 30 - 318.4) / 2 + 40 + 30) +
                                        0 +
                                        204.4,
                                    },
                                  },
                                  C,
                                  E
                                ),
                                children: /*#__PURE__*/ l(S, {
                                  className: `framer-19j2r9l-container`,
                                  layoutDependency: j,
                                  layoutId: `hiv7WKodE-container`,
                                  nodeId: `hiv7WKodE`,
                                  rendersWithMotion: !0,
                                  scopeId: `PzXZl9mMB`,
                                  children: /*#__PURE__*/ l(q, {
                                    height: `100%`,
                                    id: `hiv7WKodE`,
                                    layoutId: `hiv7WKodE`,
                                    leLsKUYDS: `Get in touch`,
                                    Llv8Wzb_B: `40px`,
                                    variant: $n(`NPcMhI0aR`),
                                    width: `100%`,
                                    ...Q(
                                      {
                                        JQUPDSygQ: {
                                          arrAKCynS: e[0],
                                          iFMm5vzrn: ce,
                                          Llv8Wzb_B: `15px`,
                                          style: { width: `100%` },
                                        },
                                        vT3vaGDRl: {
                                          arrAKCynS: e[1],
                                          iFMm5vzrn: le,
                                          Llv8Wzb_B: `15px`,
                                          style: { width: `100%` },
                                        },
                                      },
                                      C,
                                      E
                                    ),
                                  }),
                                }),
                              }),
                          }),
                        ],
                      }),
                  ],
                }),
              }),
            }),
          })
        );
      })),
      (cr = [
        `.framer-yNwN9.framer-1n8k12x, .framer-yNwN9 .framer-1n8k12x { display: block; }`,
        `.framer-yNwN9.framer-1d1kab1 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 15px; position: relative; width: 513px; }`,
        `.framer-yNwN9 .framer-17h505s { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1280px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-yNwN9 .framer-1uh957s-container, .framer-yNwN9 .framer-19j2r9l-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-yNwN9 .framer-1jqh4hi { cursor: pointer; flex: none; height: 40px; overflow: hidden; position: relative; width: 40px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-yNwN9 .framer-1676kmb { flex: none; height: 2px; left: calc(50.00000000000002% - 20px / 2); overflow: hidden; position: absolute; top: calc(62.50000000000002% - 2px / 2); width: 20px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-yNwN9 .framer-r21me7 { flex: none; height: 2px; left: calc(50.00000000000002% - 20px / 2); overflow: hidden; position: absolute; top: calc(37.50000000000002% - 2px / 2); width: 20px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-yNwN9 .framer-1ruf8ey { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-yNwN9 .framer-1otylbd { display: grid; flex: none; gap: 20px 20px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-yNwN9 .framer-z504u4, .framer-yNwN9 .framer-v7y9tx, .framer-yNwN9 .framer-19o6xln, .framer-yNwN9 .framer-efz81s, .framer-yNwN9 .framer-1phzb8y, .framer-yNwN9 .framer-1moamhg { align-self: start; flex: none; height: auto; justify-self: start; position: relative; white-space: pre; width: 100%; }`,
        `.framer-yNwN9.framer-v-1ghghep.framer-1d1kab1 { display: block; gap: 0px; height: 64px; padding: unset; width: 390px; }`,
        `.framer-yNwN9.framer-v-1ghghep .framer-17h505s { left: 15px; position: absolute; right: 15px; top: 50%; width: unset; }`,
        `.framer-yNwN9.framer-v-1xloo1b.framer-1d1kab1 { gap: 60px; justify-content: flex-start; padding: 12px 15px 15px 15px; width: 390px; }`,
        `.framer-yNwN9.framer-v-1xloo1b .framer-17h505s { order: 0; }`,
        `.framer-yNwN9.framer-v-1xloo1b .framer-1676kmb, .framer-yNwN9.framer-v-1xloo1b .framer-r21me7, .framer-yNwN9.framer-v-1a54wf1 .framer-1676kmb, .framer-yNwN9.framer-v-1a54wf1 .framer-r21me7 { top: calc(50.00000000000002% - 2px / 2); }`,
        `.framer-yNwN9.framer-v-1xloo1b .framer-1ruf8ey { cursor: unset; gap: 60px; order: 1; }`,
        `.framer-yNwN9.framer-v-1xloo1b .framer-1otylbd { gap: 30px 20px; grid-template-columns: repeat(1, minmax(50px, 1fr)); }`,
        `.framer-yNwN9.framer-v-1xloo1b .framer-z504u4, .framer-yNwN9.framer-v-1xloo1b .framer-v7y9tx, .framer-yNwN9.framer-v-1xloo1b .framer-19o6xln, .framer-yNwN9.framer-v-1xloo1b .framer-efz81s, .framer-yNwN9.framer-v-1xloo1b .framer-1phzb8y, .framer-yNwN9.framer-v-1xloo1b .framer-1moamhg, .framer-yNwN9.framer-v-1a54wf1 .framer-1otylbd, .framer-yNwN9.framer-v-1a54wf1 .framer-z504u4, .framer-yNwN9.framer-v-1a54wf1 .framer-v7y9tx, .framer-yNwN9.framer-v-1a54wf1 .framer-19o6xln, .framer-yNwN9.framer-v-1a54wf1 .framer-efz81s, .framer-yNwN9.framer-v-1a54wf1 .framer-1phzb8y, .framer-yNwN9.framer-v-1a54wf1 .framer-1moamhg { cursor: pointer; }`,
        `.framer-yNwN9.framer-v-1xloo1b .framer-19j2r9l-container, .framer-yNwN9.framer-v-1a54wf1 .framer-19j2r9l-container { width: 100%; }`,
        `.framer-yNwN9.framer-v-1a54wf1 .framer-1ruf8ey { padding: 0px 20px 0px 0px; }`,
        ...An,
        ...Ie,
        `.framer-yNwN9[data-border="true"]::after, .framer-yNwN9 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      ($ = M(sr, cr, `framer-yNwN9`)),
      ($.displayName = `Navigation`),
      ($.defaultProps = { height: 70, width: 513 }),
      V($, {
        variant: {
          options: [`QdL3QXxj0`, `xqiGo3xlH`, `JQUPDSygQ`, `vT3vaGDRl`],
          optionTitles: [`Desktop`, `Phone Closed`, `Phone Opened`, `Desktop - Open`],
          title: `Variant`,
          type: H.Enum,
        },
        Ly5GoFpct: {
          defaultValue: {
            borderColor: `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255)) /* {"name":"White"} */`,
            borderStyle: `solid`,
            borderWidth: 1,
          },
          title: `Border`,
          type: H.Border,
        },
      }),
      j(
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
          ...Gn,
          ...Kn,
          ...F(kn),
          ...F(Fe),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      ($.loader = { load: (e, t) => (t.locale, Promise.allSettled([N(Z, {}, t), N(q, {}, t)])) }));
  }))();
}
var ur, dr, fr, pr, mr, hr, gr, _r, vr, yr, br, xr, Sr, Cr, wr, Tr, Er, Dr, Or, kr, Ar, jr, Mr, Nr;
function Pr() {
  return (Pr = e(() => {
    (d(),
      T(),
      v(),
      f(),
      Ee(),
      On(),
      lr(),
      (ur = y($)),
      (dr = A(h.div)),
      (fr = y(Te)),
      (pr = y(X)),
      (mr = O(h.div)),
      (hr = {
        cksXyybG0: `(max-width: 809.98px)`,
        eUNCoGOdT: `(min-width: 810px) and (max-width: 1199.98px)`,
        IqkuZjtQY: `(min-width: 1200px)`,
      }),
      (gr = `framer-pcsMn`),
      (_r = {
        cksXyybG0: `framer-v-1be9rcj`,
        eUNCoGOdT: `framer-v-116qdhc`,
        IqkuZjtQY: `framer-v-dgcwv5`,
      }),
      (vr = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (yr = (e, t) => `translateX(-50%) ${t}`),
      (br = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (xr = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { delay: 0.1, duration: 0.6, ease: [0.44, 0, 0.56, 1], type: `tween` },
        x: 0,
        y: 0,
      }),
      (Sr = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Cr = {
        cksXyybG0: [
          `.framer-pcsMn .framer-197ddwn-container { left: 20px; right: 20px; width: unset; }`,
        ],
        eUNCoGOdT: [`.framer-pcsMn .framer-1ck1gcc { will-change: unset; }`],
      }),
      (wr = Object.keys(Cr)),
      (Tr = { cksXyybG0: `.framer-1be9rcj-override`, eUNCoGOdT: `.framer-116qdhc-override` }),
      (Er = [
        `.framer-pcsMn.framer-ehv5sl, .framer-pcsMn .framer-ehv5sl { display: block; }`,
        `.framer-pcsMn.framer-dgcwv5 { align-content: center; align-items: center; background-color: var(--token-a9c881b7-a087-4bee-a49f-befc82631c31, #f2f2f2); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-pcsMn .framer-197ddwn-container { flex: none; height: auto; left: 50%; order: -1000; position: var(--framer-canvas-fixed-position, fixed); top: 20px; width: 650px; z-index: 10; }`,
        `.framer-pcsMn .framer-1tgpkr4 { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: -0px; position: relative; width: 0px; }`,
        `.framer-pcsMn .framer-1ck1gcc { -webkit-backdrop-filter: blur(10px); -webkit-mask: linear-gradient(180deg, rgba(0, 0, 0, 0) 19.05792511261261%, rgba(0, 0, 0, 0.65) 100%) add; backdrop-filter: blur(10px); background-color: rgba(255, 255, 255, 0.2); bottom: calc(calc(100% - min(var(--framer-viewport-height, 100%), 100%)) + 0px); flex: none; height: 150px; left: 0px; mask: linear-gradient(180deg, rgba(0,0,0,0) 19.05792511261261%, rgba(0, 0, 0, 0.65) 100%) add; order: 1002; overflow: var(--overflow-clip-fallback, clip); position: var(--framer-canvas-fixed-position, fixed); right: 0px; will-change: var(--framer-will-change-effect-override, transform); z-index: 5; }`,
        `.framer-pcsMn .framer-14ls5bn-container { flex: none; height: auto; order: 1003; position: relative; width: auto; }`,
        `.framer-pcsMn .framer-1nh0s0e-container { flex: none; height: auto; order: 1004; position: relative; width: 100%; }`,
        `[data-layout-template="true"] > #overlay { margin-bottom: -0px; }`,
      ]),
      (Dr = {
        cksXyybG0: `(max-width: 809.98px)`,
        eUNCoGOdT: `(min-width: 810px) and (max-width: 1199.98px)`,
        IqkuZjtQY: `(min-width: 1200px)`,
      }),
      (Or = { Desktop: `IqkuZjtQY`, Phone: `cksXyybG0`, Tablet: `eUNCoGOdT` }),
      (kr = ({ value: e }) =>
        ie()
          ? null
          : /*#__PURE__*/ l(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (Ar = ({ height: e, id: t, navBorder: n, width: r, ...i }) => ({
        ...i,
        pgJwkoDWo: n ??
          i.pgJwkoDWo ?? {
            borderColor: `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255)) /* {"name":"White"} */`,
            borderStyle: `solid`,
            borderWidth: 1,
          },
        variant: Or[i.variant] ?? i.variant ?? `IqkuZjtQY`,
      })),
      (jr = /*#__PURE__*/ u(function (e, t) {
        let r = a(null),
          i = t ?? r,
          o = n(),
          { activeLocale: s, setLocale: u } = oe(),
          {
            style: d,
            className: f,
            layoutId: p,
            variant: m,
            pgJwkoDWo: h,
            children: _,
            ...v
          } = Ar(e),
          [y, b] = le(m, hr, !1),
          x = B(gr);
        return (
          pe({}),
          /*#__PURE__*/ l(me.Provider, {
            value: {
              activeVariantId: y,
              humanReadableVariantMap: Or,
              isLayoutTemplate: !0,
              primaryVariantId: `IqkuZjtQY`,
              variantClassNames: _r,
            },
            children: /*#__PURE__*/ c(g, {
              id: p ?? o,
              children: [
                /*#__PURE__*/ l(kr, {
                  value: `:root body { background: var(--token-a9c881b7-a087-4bee-a49f-befc82631c31, rgb(242, 242, 242)); }`,
                }),
                /*#__PURE__*/ c(mr, {
                  ...v,
                  className: B(x, `framer-dgcwv5`, f),
                  "data-layout-template": !0,
                  flowEffectEnabled: !0,
                  flowEffectTransition: vr,
                  isNestedFlowEffect: !1,
                  ref: i,
                  style: { ...d },
                  children: [
                    /*#__PURE__*/ l(I, {
                      breakpoint: y,
                      overrides: { cksXyybG0: { width: `calc(100vw - 40px)` } },
                      children: /*#__PURE__*/ l(z, {
                        height: 70,
                        width: `650px`,
                        y: 20,
                        children: /*#__PURE__*/ l(I, {
                          breakpoint: y,
                          overrides: {
                            cksXyybG0: {
                              "data-framer-layout-hint-center-x": void 0,
                              transformTemplate: void 0,
                            },
                          },
                          children: /*#__PURE__*/ l(ae, {
                            className: `framer-197ddwn-container`,
                            "data-framer-layout-hint-center-x": !0,
                            layout: `position`,
                            layoutScroll: !0,
                            nodeId: `I0kse7O5_`,
                            rendersWithMotion: !0,
                            scopeId: `uJLWmEfJU`,
                            transformTemplate: yr,
                            children: /*#__PURE__*/ l(I, {
                              breakpoint: y,
                              overrides: {
                                cksXyybG0: { variant: br(`xqiGo3xlH`) },
                                eUNCoGOdT: { variant: br(`xqiGo3xlH`) },
                              },
                              children: /*#__PURE__*/ l($, {
                                height: `100%`,
                                id: `I0kse7O5_`,
                                layoutId: `I0kse7O5_`,
                                Ly5GoFpct: h,
                                style: { width: `100%` },
                                variant: br(`QdL3QXxj0`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      }),
                    }),
                    _,
                    /*#__PURE__*/ l(`div`, { className: `framer-1tgpkr4` }),
                    /*#__PURE__*/ l(I, {
                      breakpoint: y,
                      overrides: {
                        eUNCoGOdT: { animate: void 0, initial: void 0, optimized: void 0 },
                      },
                      children: /*#__PURE__*/ l(dr, {
                        animate: xr,
                        className: `framer-1ck1gcc`,
                        "data-framer-appear-id": `1ck1gcc`,
                        initial: Sr,
                        layout: `position`,
                        optimized: !0,
                      }),
                    }),
                    /*#__PURE__*/ l(z, {
                      children: /*#__PURE__*/ l(ae, {
                        className: `framer-14ls5bn-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: `position`,
                        nodeId: `tzQVNWm5f`,
                        rendersWithMotion: !0,
                        scopeId: `uJLWmEfJU`,
                        children: /*#__PURE__*/ l(Te, {
                          height: `100%`,
                          id: `tzQVNWm5f`,
                          intensity: 6,
                          layoutId: `tzQVNWm5f`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    /*#__PURE__*/ l(z, {
                      height: 963,
                      width: `100vw`,
                      y: 1200,
                      children: /*#__PURE__*/ l(ae, {
                        className: `framer-1nh0s0e-container`,
                        layout: `position`,
                        nodeId: `RmInjaJY6`,
                        rendersWithMotion: !0,
                        scopeId: `uJLWmEfJU`,
                        children: /*#__PURE__*/ l(I, {
                          breakpoint: y,
                          overrides: {
                            cksXyybG0: { variant: br(`ENEJMQb5q`) },
                            eUNCoGOdT: { variant: br(`c9mmVCYFm`) },
                          },
                          children: /*#__PURE__*/ l(X, {
                            height: `100%`,
                            id: `RmInjaJY6`,
                            layoutId: `RmInjaJY6`,
                            style: { width: `100%` },
                            variant: br(`MzmrI7HKa`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                /*#__PURE__*/ l(`div`, { id: `template-overlay` }),
              ],
            }),
          })
        );
      })),
      (Mr = (e) =>
        e !== E.canvas && e !== E.export
          ? [...Er, ...wr.map((e) => `@media ${Dr[e]} { ${Cr[e].join(` `)} }`)]
          : [
              ...Er,
              ...wr.flatMap((e) => {
                let t = Tr[e];
                return Cr[e].map((e) => `${t} {${e}}`);
              }),
            ]),
      (Nr = M(jr, Mr, `framer-pcsMn`)),
      (Nr.displayName = `Template`),
      (Nr.defaultProps = { height: 1e3, width: 1200 }),
      V(Nr, {
        pgJwkoDWo: {
          defaultValue: {
            borderColor: `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255)) /* {"name":"White"} */`,
            borderStyle: `solid`,
            borderWidth: 1,
          },
          title: `Nav Border`,
          type: H.Border,
        },
      }),
      j(Nr, [{ explicitInter: !0, fonts: [] }, ...ur, ...fr, ...pr], {
        supportsExplicitInterCodegen: !0,
      }),
      (Nr.loader = { load: (e, t) => (t.locale, Promise.allSettled([N($, {}, t), N(X, {}, t)])) }));
  }))();
}
export {
  Pe as A,
  ze as C,
  Fe as D,
  Ie as E,
  De as M,
  Re as O,
  Be as S,
  Le as T,
  Ge as _,
  pt as a,
  Ke as b,
  mt as c,
  Ze as d,
  et as f,
  Xe as g,
  qe as h,
  tn as i,
  U as j,
  W as k,
  $e as l,
  Je as m,
  Pr as n,
  ft as o,
  Ye as p,
  q as r,
  dt as s,
  Nr as t,
  Qe as u,
  We as v,
  He as w,
  Ve as x,
  Ue as y,
};
//# sourceMappingURL=toplevel-deps.C-kiZ8rO.mjs.map
