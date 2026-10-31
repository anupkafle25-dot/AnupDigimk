import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import { L as t, o as n, s as r, w as i, y as a, z as o } from "./react.p3VyPFJt.mjs";
import { J as s, k as c, o as l } from "./framer.CEpgxWGc.mjs";
function u(e) {
  let {
    inactiveTitles:
      t = `Come Back 👀 | Your next viral edit is waiting | Still planning your content?`,
    intervalMs: r = 2500,
  } = e;
  return (
    a(() => {
      let e = document.title,
        n = t
          .split(`|`)
          .map((e) => e.trim())
          .filter(Boolean),
        i = null,
        a = 0,
        s = () => {
          if (document.hidden) {
            if (n.length === 0) {
              document.title = `Come Back 👀`;
              return;
            }
            ((document.title = n[a]),
              (i = o.setInterval(() => {
                ((a = (a + 1) % n.length), (document.title = n[a]));
              }, r)));
          } else ((i &&= (clearInterval(i), null)), (a = 0), (document.title = e));
        };
      return (
        document.addEventListener(`visibilitychange`, s),
        () => {
          (document.removeEventListener(`visibilitychange`, s),
            i && clearInterval(i),
            (document.title = e));
        }
      );
    }, [t, r]),
    /*#__PURE__*/ n(`div`, { style: { width: 0, height: 0 } })
  );
}
function d() {
  return (d = e(() => {
    (t(),
      r(),
      i(),
      s(),
      c(u, {
        inactiveTitles: {
          type: l.String,
          title: `Messages`,
          defaultValue: `Come Back 👀 | Your next viral edit is waiting | Still planning your content?`,
        },
        intervalMs: {
          type: l.Number,
          title: `Interval`,
          defaultValue: 2500,
          min: 1e3,
          max: 1e4,
          step: 500,
        },
      }));
  }))();
}
export { d as n, u as t };
//# sourceMappingURL=DynamicTabTitle.Bf7lZ63m.mjs.map
