var CLSTAMP = "9839182";
(() => {
  "use strict";
  var e,
    t = {
      5287: (e, t) => {
        var r = Symbol.for("react.element"),
          n = Symbol.for("react.portal"),
          o = Symbol.for("react.fragment"),
          u = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          a = Symbol.for("react.provider"),
          c = Symbol.for("react.context"),
          l = Symbol.for("react.forward_ref"),
          f = Symbol.for("react.suspense"),
          s = Symbol.for("react.memo"),
          p = Symbol.for("react.lazy"),
          y = Symbol.iterator;
        var d = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          v = Object.assign,
          h = {};
        function b(e, t, r) {
          (this.props = e),
            (this.context = t),
            (this.refs = h),
            (this.updater = r || d);
        }
        function m() {}
        function _(e, t, r) {
          (this.props = e),
            (this.context = t),
            (this.refs = h),
            (this.updater = r || d);
        }
        (b.prototype.isReactComponent = {}),
          (b.prototype.setState = function (e, t) {
            if ("object" != typeof e && "function" != typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (b.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (m.prototype = b.prototype);
        var S = (_.prototype = new m());
        (S.constructor = _), v(S, b.prototype), (S.isPureReactComponent = !0);
        var g = Array.isArray,
          k = Object.prototype.hasOwnProperty,
          w = { current: null },
          O = { key: !0, ref: !0, __self: !0, __source: !0 };
        function $(e, t, n) {
          var o,
            u = {},
            i = null,
            a = null;
          if (null != t)
            for (o in (void 0 !== t.ref && (a = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              k.call(t, o) && !O.hasOwnProperty(o) && (u[o] = t[o]);
          var c = arguments.length - 2;
          if (1 === c) u.children = n;
          else if (1 < c) {
            for (var l = Array(c), f = 0; f < c; f++) l[f] = arguments[f + 2];
            u.children = l;
          }
          if (e && e.defaultProps)
            for (o in (c = e.defaultProps)) void 0 === u[o] && (u[o] = c[o]);
          return {
            $$typeof: r,
            type: e,
            key: i,
            ref: a,
            props: u,
            _owner: w.current,
          };
        }
        function E(e) {
          return "object" == typeof e && null !== e && e.$$typeof === r;
        }
        var C = /\/+/g;
        function R(e, t) {
          return "object" == typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function j(e, t, o, u, i) {
          var a = typeof e;
          ("undefined" !== a && "boolean" !== a) || (e = null);
          var c = !1;
          if (null === e) c = !0;
          else
            switch (a) {
              case "string":
              case "number":
                c = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case r:
                  case n:
                    c = !0;
                }
            }
          if (c)
            return (
              (i = i((c = e))),
              (e = "" === u ? "." + R(c, 0) : u),
              g(i)
                ? ((o = ""),
                  null != e && (o = e.replace(C, "$&/") + "/"),
                  j(i, t, o, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (E(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: r,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      o +
                        (!i.key || (c && c.key === i.key)
                          ? ""
                          : ("" + i.key).replace(C, "$&/") + "/") +
                        e,
                    )),
                  t.push(i)),
              1
            );
          if (((c = 0), (u = "" === u ? "." : u + ":"), g(e)))
            for (var l = 0; l < e.length; l++) {
              var f = u + R((a = e[l]), l);
              c += j(a, t, o, f, i);
            }
          else if (
            ((f = (function (e) {
              return null === e || "object" != typeof e
                ? null
                : "function" == typeof (e = (y && e[y]) || e["@@iterator"])
                  ? e
                  : null;
            })(e)),
            "function" == typeof f)
          )
            for (e = f.call(e), l = 0; !(a = e.next()).done; )
              c += j((a = a.value), t, o, (f = u + R(a, l++)), i);
          else if ("object" === a)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead.",
              ))
            );
          return c;
        }
        function x(e, t, r) {
          if (null == e) return e;
          var n = [],
            o = 0;
          return (
            j(e, n, "", "", function (e) {
              return t.call(r, e, o++);
            }),
            n
          );
        }
        function I(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              },
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var P = { current: null },
          N = { transition: null },
          F = {
            ReactCurrentDispatcher: P,
            ReactCurrentBatchConfig: N,
            ReactCurrentOwner: w,
          };
        function V() {
          throw Error(
            "act(...) is not supported in production builds of React.",
          );
        }
        (t.Children = {
          map: x,
          forEach: function (e, t, r) {
            x(
              e,
              function () {
                t.apply(this, arguments);
              },
              r,
            );
          },
          count: function (e) {
            var t = 0;
            return (
              x(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              x(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!E(e))
              throw Error(
                "React.Children.only expected to receive a single React element child.",
              );
            return e;
          },
        }),
          (t.Component = b),
          (t.Fragment = o),
          (t.Profiler = i),
          (t.PureComponent = _),
          (t.StrictMode = u),
          (t.Suspense = f),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = F),
          (t.act = V),
          (t.cloneElement = function (e, t, n) {
            if (null == e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  ".",
              );
            var o = v({}, e.props),
              u = e.key,
              i = e.ref,
              a = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (a = w.current)),
                void 0 !== t.key && (u = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var c = e.type.defaultProps;
              for (l in t)
                k.call(t, l) &&
                  !O.hasOwnProperty(l) &&
                  (o[l] = void 0 === t[l] && void 0 !== c ? c[l] : t[l]);
            }
            var l = arguments.length - 2;
            if (1 === l) o.children = n;
            else if (1 < l) {
              c = Array(l);
              for (var f = 0; f < l; f++) c[f] = arguments[f + 2];
              o.children = c;
            }
            return {
              $$typeof: r,
              type: e.type,
              key: u,
              ref: i,
              props: o,
              _owner: a,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: c,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: a, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = $),
          (t.createFactory = function (e) {
            var t = $.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: l, render: e };
          }),
          (t.isValidElement = E),
          (t.lazy = function (e) {
            return {
              $$typeof: p,
              _payload: { _status: -1, _result: e },
              _init: I,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: s, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = N.transition;
            N.transition = {};
            try {
              e();
            } finally {
              N.transition = t;
            }
          }),
          (t.unstable_act = V),
          (t.useCallback = function (e, t) {
            return P.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return P.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return P.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return P.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return P.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, r) {
            return P.current.useImperativeHandle(e, t, r);
          }),
          (t.useInsertionEffect = function (e, t) {
            return P.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return P.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return P.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, r) {
            return P.current.useReducer(e, t, r);
          }),
          (t.useRef = function (e) {
            return P.current.useRef(e);
          }),
          (t.useState = function (e) {
            return P.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, r) {
            return P.current.useSyncExternalStore(e, t, r);
          }),
          (t.useTransition = function () {
            return P.current.useTransition();
          }),
          (t.version = "18.3.1");
      },
      6090: (e, t, r) => {
        r.d(t, {
          $: () => O.$,
          $Z: () => w.$Z,
          Ay: () => $,
          CU: () => o.CU,
          Ci: () => h.C,
          Cw: () => u.C,
          Ee: () => w.Ee,
          Em: () => s.Em,
          Fb: () => o.Fb,
          Fi: () => b.Fi,
          GQ: () => w.GQ,
          Gz: () => w.Gz,
          HW: () => w.HW,
          I0: () => n.I0,
          JZ: () => o.JZ,
          KI: () => O.KI,
          Ld: () => o.Ld,
          MQ: () => b.MQ,
          MV: () => w.MV,
          N: () => a.e,
          N1: () => v.N,
          NB: () => w.NB,
          NH: () => o.NH,
          O5: () => p.O,
          O6: () => o.O6,
          OH: () => w.OH,
          Oi: () => b.Oi,
          QB: () => o.QB,
          QR: () => O.QR,
          R$: () => w.R$,
          Se: () => o.Se,
          Uj: () => o.Uj,
          Vh: () => y.V,
          Xl: () => w.Xl,
          Y4: () => c.Y,
          Zk: () => b.Zk,
          _1: () => w._1,
          _h: () => b._h,
          _n: () => n._n,
          aX: () => y.a,
          b: () => w.b,
          b$: () => g.b,
          cB: () => S.L,
          dL: () => f.d,
          e_: () => o.e_,
          en: () => O.en,
          fD: () => O.fD,
          gN: () => w.gN,
          gO: () => i.g,
          k2: () => w.k2,
          kG: () => w.kG,
          ku: () => w.ku,
          lq: () => d.l,
          mX: () => n.mX,
          mo: () => w.mo,
          mu: () => w.mu,
          nX: () => s.nX,
          ne: () => w.ne,
          nq: () => _.n,
          oN: () => o.oN,
          o_: () => o.o_,
          p0: () => o.p0,
          pM: () => w.pM,
          pg: () => n.pg,
          qF: () => o.qF,
          rF: () => l.H,
          rx: () => w.rx,
          sJ: () => m.$,
          sk: () => n.sk,
          tx: () => o.tx,
          uC: () => k.u,
          vx: () => o.vx,
        });
        var n = r(2824),
          o = r(6292),
          u = r(3389),
          i = (r(4120), r(9424)),
          a = r(1230),
          c = r(5830),
          l = r(6186),
          f = r(3361),
          s = (r(111), r(5723)),
          p = (r(3496), r(5178)),
          y = (r(428), r(9011), r(7350)),
          d = r(6847),
          v = r(5227),
          h = (r(10), r(1808)),
          b = r(7019),
          m = (r(1988), r(2527), r(9864), r(4189), r(322), r(1977), r(6417)),
          _ = r(2303),
          S = r(8715),
          g = (r(4397), r(5459)),
          k = r(8472),
          w = (r(1184), r(3725)),
          O = r(4367);
        const $ = VRHTML;
      },
      292: (e, t, r) => {
        var n = r(6540),
          o = r(5338),
          u = r(6090),
          i = r(3714),
          a = r(1333),
          c = r(9118),
          l = r(1532),
          f = r(5802),
          s = r(6646),
          p = r(5818),
          y = r(1835),
          d = r(6943);
        Promise.all([
          (0, i.uV)(
            ["vrmonitor", "bindingui"],
            null === u.Ay || void 0 === u.Ay ? void 0 : u.Ay.GetSteamLanguage(),
          ),
          a.HR.Init(!0),
          c.W.Init(!0),
          f.B$.Init(),
          l.s.Init(),
          s.X.Init(),
          d.Q.Init(),
          y.SW.Init(),
        ])
          .then(() => {
            (document.title = (0, i.we)("#Settings_Header_SteamVR")),
              o
                .H(document.getElementById("root"))
                .render(n.createElement(p.z, { visible: !0 }));
          })
          .catch((e) => console.error("Failed to initialize vr settings:", e));
      },
    },
    r = {};
  function n(e) {
    var o = r[e];
    if (void 0 !== o) return o.exports;
    var u = (r[e] = { exports: {} });
    return t[e].call(u.exports, u, u.exports, n), u.exports;
  }
  (n.m = t),
    (e = []),
    (n.O = (t, r, o, u) => {
      if (!r) {
        var i = 1 / 0;
        for (f = 0; f < e.length; f++) {
          for (var [r, o, u] = e[f], a = !0, c = 0; c < r.length; c++)
            (!1 & u || i >= u) && Object.keys(n.O).every((e) => n.O[e](r[c]))
              ? r.splice(c--, 1)
              : ((a = !1), u < i && (i = u));
          if (a) {
            e.splice(f--, 1);
            var l = o();
            void 0 !== l && (t = l);
          }
        }
        return t;
      }
      u = u || 0;
      for (var f = e.length; f > 0 && e[f - 1][2] > u; f--) e[f] = e[f - 1];
      e[f] = [r, o, u];
    }),
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = { 249: 0, 270: 0, 885: 0 };
      n.O.j = (t) => 0 === e[t];
      var t = (t, r) => {
          var o,
            u,
            [i, a, c] = r,
            l = 0;
          if (i.some((t) => 0 !== e[t])) {
            for (o in a) n.o(a, o) && (n.m[o] = a[o]);
            if (c) var f = c(n);
          }
          for (t && t(r); l < i.length; l++)
            (u = i[l]), n.o(e, u) && e[u] && e[u][0](), (e[u] = 0);
          return n.O(f);
        },
        r = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var o = n.O(
    void 0,
    [498, 299, 804, 270, 582, 510, 844, 723, 177, 496, 885, 57],
    () => n(292),
  );
  o = n.O(o);
})(); //# sourceMappingURL=file:///c:/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/settings_desktop.js.map
