import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  E as t,
  L as n,
  N as r,
  O as i,
  P as a,
  R as o,
  S as s,
  _ as c,
  a as l,
  b as u,
  d,
  g as f,
  h as p,
  i as m,
  n as h,
  r as g,
  t as _,
  w as v,
  y,
  z as b,
} from "./react.p3VyPFJt.mjs";
import {
  It as x,
  J as S,
  K as C,
  Pt as w,
  Q as T,
  Tt as E,
  Y as D,
  Z as O,
  _ as ee,
  bt as te,
  d as ne,
  lt as k,
  m as A,
  ot as j,
  pt as M,
  q as N,
  rt as P,
  s as F,
  st as I,
  tt as L,
  v as R,
} from "./framer.CEpgxWGc.mjs";
import { n as z, t as B } from "./toplevel-deps.C-kiZ8rO.mjs";
function V({ webPageId: e, children: t, style: n, ...r }) {
  let i = {
      pgJwkoDWo: {
        borderColor: `var(--token-7c303562-60ab-4c10-a495-fa92b0b66d14, rgb(255, 255, 255))`,
        borderStyle: `solid`,
        borderWidth: 1,
      },
    },
    a = {
      ...i,
      pgJwkoDWo: {
        borderColor: `var(--token-7f38a5f7-db27-44de-8aa2-b6753f733c7b, rgb(230, 230, 230))`,
        borderStyle: `solid`,
        borderWidth: 1,
      },
    },
    o = {
      ...i,
      pgJwkoDWo: {
        borderColor: `var(--token-a9c881b7-a087-4bee-a49f-befc82631c31, rgb(242, 242, 242))`,
        borderStyle: `solid`,
        borderWidth: 1,
      },
    },
    s =
      {
        augiA20Il: i,
        DeSByTurf: i,
        G7CG60dlp: a,
        H3B8pYtQG: a,
        IF3lVCAg9: o,
        oZjhJQFrN: o,
        pS1Xfqls7: a,
        T_zVflsz4: a,
      }[e] ?? {};
  switch (e) {
    case `augiA20Il`:
    case `DeSByTurf`:
    case `G7CG60dlp`:
    case `pS1Xfqls7`:
    case `oZjhJQFrN`:
    case `H3B8pYtQG`:
    case `T_zVflsz4`:
    case `IF3lVCAg9`:
      return d(B, { ...s, key: `Template1`, style: n }, t(!0));
    default:
      return t(!1);
  }
}
function H(e) {
  switch (e) {
    case `augiA20Il`:
    case `DeSByTurf`:
    case `G7CG60dlp`:
    case `pS1Xfqls7`:
    case `oZjhJQFrN`:
    case `H3B8pYtQG`:
    case `T_zVflsz4`:
    case `IF3lVCAg9`:
      return [
        { hash: `1be9rcj`, mediaQuery: `(max-width: 809.98px)` },
        { hash: `116qdhc`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
        { hash: `dgcwv5`, mediaQuery: `(min-width: 1200px)` },
      ];
    default:
      return;
  }
}
async function U({
  routeId: e,
  pathVariables: n,
  canonicalPathVariables: r,
  localeId: o,
  collectionItemId: l,
  contentLocaleId: f,
  shouldResolveInitialRouteContentState: p = !1,
}) {
  (I({
    checkServerSideRouter: !0,
    disableCustomCode: !1,
    disableHoverOnMobile: !1,
    editorBarDisableFrameAncestorsSecurity: !1,
    motionDivToDiv: !1,
    onPageRichTextBlockSelection: !0,
    scrollRestoration: !0,
    synchronousNavigationOnDesktop: !1,
    yieldOnTap: !1,
  }),
    j(X));
  let h = K[e].page.preload(),
    g = d(R, {
      isWebsite: !0,
      environment: `site`,
      routeId: e,
      pathVariables: n,
      canonicalPathVariables: r,
      routes: K,
      collectionUtils: J,
      serverDatabaseClient: Y,
      framerSiteId: X,
      notFoundPage: D(() => import("./YE-V-ze2afimkEz3PlphlIMdyxuXK5NcVWSoTW5ULuI.T6dzlo_1.mjs")),
      isReducedMotion: void 0,
      localeId: o,
      locales: q,
      preserveQueryParams: void 0,
      siteCanonicalURL: `https://digimk.framer.website`,
      EditorBar:
        b === void 0
          ? void 0
          : (() => {
              if (Q) console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
              else
                return D(async () => {
                  b.__framer_editorBarDependencies = {
                    __version: 3,
                    framer: { useCurrentRoute: M, useLocaleInfo: te, useRouter: E },
                    react: {
                      createElement: d,
                      Fragment: a,
                      memo: s,
                      useCallback: i,
                      useEffect: y,
                      useRef: u,
                      useState: c,
                      useLayoutEffect: t,
                    },
                    "react-dom": { createPortal: m },
                  };
                  let { createEditorBar: e } = await import(
                    `data:text/javascript,export%20const%20createEditorBar=()=>()=>null`
                  );
                  return { default: e() };
                });
            })(),
      adaptLayoutToTextDirection: !0,
      LayoutTemplate: V,
      loadSnippetsModule: new A(
        () => import("./BtFBXlpZfjwF0fXCJYHl7sHCpunOoHgdbsHYq5MZEac.U1APg39v.mjs")
      ),
      initialCollectionItemId: l,
      initialContentLocaleIdOverride: f,
    }),
    _ = d(ne, { children: g }),
    v = d(ee, {
      children: _,
      value: {
        global: {
          enter: {
            opacity: 0,
            rotate: 0,
            rotate3d: !1,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            transition: {
              damping: 30,
              delay: 0,
              duration: 0.2,
              ease: [0.27, 0, 0.51, 1],
              mass: 1,
              stiffness: 400,
              type: `tween`,
            },
            x: `0px`,
            y: `0px`,
          },
        },
        routes: {},
      },
    });
  return (await h, v);
}
function W() {
  Z && b.__framer_events.push(arguments);
}
async function G(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || b.__framer_hadFatalError) return;
    let r = t?.componentStack;
    if (n) {
      if (
        (console.warn(
          `Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:
`,
          e,
          r
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Caught a fatal error. Please report the following to the Framer team via https://www.framer.com/contact/:
`,
        e,
        r
      );
    W(n ? `published_site_load_recoverable_error` : `published_site_load_error`, {
      message: String(e),
      componentStack: r,
      stack: r ? void 0 : e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    });
  }
  try {
    let i, a, o, s, c, l, u;
    if (e)
      ((u = JSON.parse(t.dataset.framerHydrateV2)),
        (i = u.routeId),
        (a = u.localeId),
        (o = u.contentLocaleId),
        (s = u.pathVariables),
        (c = u.canonicalPathVariables),
        (l = u.breakpoints),
        (i = L(K, i)));
    else {
      L(K, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((i = t.get(`id`)), (a = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((s ??= {}), (s[e.slice(4)] = n));
      }
      if (!i || !a) {
        let e = C(K, decodeURIComponent(location.pathname), !0, q);
        ((i = e.routeId), (a = e.localeId), (s = e.pathVariables));
      }
    }
    let d = U({
      routeId: i,
      localeId: a,
      contentLocaleId: o,
      pathVariables: s,
      canonicalPathVariables: c,
      collectionItemId: e ? u?.collectionItemId : void 0,
      shouldResolveInitialRouteContentState: !e,
    });
    b !== void 0 &&
      (async () => {
        let e = K[i],
          t = q.find(({ id: e }) => (a ? e === a : e === "default")).code,
          n = u?.collectionItemId ?? null;
        if (n === null && e?.collectionId && J) {
          let r = await J[e.collectionId]?.(),
            [i] = Object.values(s);
          r && typeof i == `string` && (n = (await r.getRecordIdBySlug(i, t || void 0)) ?? null);
        }
        let r = Intl.DateTimeFormat().resolvedOptions(),
          o = r.timeZone,
          c = r.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          b.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: X,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: n,
              framerLocale: t || null,
              webPageId: e?.abTestingVariantId ?? i,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: b.location.href,
              hostname: b.location.hostname || null,
              pathname: b.location.pathname || null,
              hash: b.location.hash || null,
              search: b.location.search || null,
              timezone: o,
              locale: c,
            },
            `eager`,
          ]),
          await x({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, { detail: { framerLocale: t || null } })
          ));
      })();
    let f = await d;
    e
      ? (w(`framer-rewrite-breakpoints`, () => {
          (P(l), b.__framer_onRewriteBreakpoints?.(l));
        }),
        (Q ? (e) => e() : r)(() => {
          (T(), k(), _(t, f, { onRecoverableError: n }));
        }))
      : (await O(), g(t, { onRecoverableError: n }).render(f));
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var K, q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    if (
      (n(),
      S(),
      v(),
      l(),
      h(),
      z(),
      (K = {
        augiA20Il: {
          elements: {
            CZ86fk2uN: `contact`,
            JhphQE3lp: `process`,
            oXLUVASEz: `pricing`,
            VnW5NTYc5: `why-us`,
            wCrl5EG3s: `services`,
          },
          page: D(() => import("./LI1V-cfxGjseC7VnzF96EBUgyzMm3EsKsbHu3XY6_Eo.BDFfnH_b.mjs")),
          path: `/`,
        },
        DeSByTurf: {
          elements: {},
          page: D(() => import("./YE-V-ze2afimkEz3PlphlIMdyxuXK5NcVWSoTW5ULuI.T6dzlo_1.mjs")),
          path: `/404`,
        },
        G7CG60dlp: {
          elements: { URpi1EodE: `contact` },
          page: D(() => import("./q12_8aR5WerDotdVQwIj_NnDuoUGW-O-wG4qlwp7_iQ.DoMZhLw0.mjs")),
          path: `/blog`,
        },
        pS1Xfqls7: {
          elements: {},
          page: D(() => import("./mLi0Yy6aSLtxhQoNohFsGTZCaPyfkEQTmYBRiRtIm6o.CB0PaHLQ.mjs")),
          path: `/contact`,
        },
        oZjhJQFrN: {
          elements: {},
          page: D(() => import("./f0YvFaa0MDGCLZcMYUFXCoENlPGDqNeVn83ObGcO7Bo.7qaiXoMg.mjs")),
          path: `/case-studies`,
        },
        H3B8pYtQG: {
          collectionId: `GOOfSxABL`,
          elements: { tjzIyd5Jo: `contact` },
          page: D(() => import("./-AEVOMebNl3SiJmY3uxzIc3b5551bLC9Yy1dl8S0PyE.CJOxJYRk.mjs")),
          path: `/blog/:iL9ZpSkZM`,
        },
        T_zVflsz4: {
          collectionId: `NvVsF9Krs`,
          elements: {},
          page: D(() => import("./K7heJTOqGv4WOiHY-meZmzEy078msD2c6dptTiLvtAY.DtDzv8fI.mjs")),
          path: `/legal/:xsOQkQirM`,
        },
        IF3lVCAg9: {
          collectionId: `wt7eQU6AQ`,
          elements: { Nq5sulIsH: `contact` },
          page: D(() => import("./lFFLTblqdFWalIhglrcrfAzNXvndoZMwc5a3wHIuDjw.C6zy-not.mjs")),
          path: `/case-studies/:WUOYxBUlT`,
        },
      }),
      (q = [{ code: `en`, id: `default`, name: `English`, slug: ``, textDirection: `ltr` }]),
      (J = {
        GOOfSxABL: async () =>
          (await import("./WMW_S_ggcqIxT_LO0jmSMTNLAvebS-Ptd_OsbWpI_9c.CGm8viTM.mjs"))?.utils,
        NvVsF9Krs: async () =>
          (await import("./wsoa94MnhpEchxWQ5Kk50U2yj3XUI1YtuLG5mDTumKc.neAY4lVm.mjs"))?.utils,
        wt7eQU6AQ: async () =>
          (await import("./hS2js0Z1gdxgtLGeTUR9mNOjzZMZNlltCP0K9X6thGY.xwHsV2T8.mjs"))?.utils,
      }),
      (Y = void 0),
      (X = `8865d1b567667d2fc89345c91f0a4f1f90ce4acfe8ef97764209d1e3c7f0599a`),
      (Z = typeof document < `u`),
      (Q = Z && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(o.userAgent)),
      Z)
    ) {
      ((b.__framer_importFromPackage = (e, t) => () =>
        d(F, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
        (b.__framer_events = b.__framer_events || []),
        N());
      let e = document.getElementById(`main`);
      `framerHydrateV2` in e.dataset ? G(!0, e) : G(!1, e);
    }
  }))();
}
$();
export { H as getLayoutTemplateBreakpoints, U as getPageRoot };
//# sourceMappingURL=script_main.BNQMYfxP.mjs.map
