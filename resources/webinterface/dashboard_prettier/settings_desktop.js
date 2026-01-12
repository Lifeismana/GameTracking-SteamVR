var CLSTAMP = "10355840";
(() => {
  "use strict";
  var e,
    t = {
      6035: (e, t, r) => {
        r.d(t, { P: () => p });
        var n,
          o,
          u = r(6540),
          i = r(3815),
          a = r(4452),
          c = "function" == typeof Symbol && Symbol.for,
          f =
            null !==
              (o =
                null ===
                  (n = Object.getOwnPropertyDescriptor(
                    function () {},
                    "name",
                  )) || void 0 === n
                  ? void 0
                  : n.configurable) &&
            void 0 !== o &&
            o,
          l = c
            ? Symbol.for("react.forward_ref")
            : "function" == typeof u.forwardRef &&
              (0, u.forwardRef)(function (e) {
                return null;
              }).$$typeof,
          s = c
            ? Symbol.for("react.memo")
            : "function" == typeof u.memo &&
              (0, u.memo)(function (e) {
                return null;
              }).$$typeof;
        function p(e, t) {
          var r;
          if (s && e.$$typeof === s)
            throw new Error(
              "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
            );
          if ((0, i.P)()) return e;
          var n =
              null !== (r = null == t ? void 0 : t.forwardRef) &&
              void 0 !== r &&
              r,
            o = e,
            c = e.displayName || e.name;
          if (
            l &&
            e.$$typeof === l &&
            ((n = !0), "function" != typeof (o = e.render))
          )
            throw new Error(
              "[mobx-react-lite] `render` property of ForwardRef was not a function",
            );
          var p,
            d,
            m = function (e, t) {
              return (0, a.q)(function () {
                return o(e, t);
              }, c);
            };
          return (
            (m.displayName = e.displayName),
            f &&
              Object.defineProperty(m, "name", {
                value: e.name,
                writable: !0,
                configurable: !0,
              }),
            e.contextTypes && (m.contextTypes = e.contextTypes),
            n && (m = (0, u.forwardRef)(m)),
            (m = (0, u.memo)(m)),
            (p = e),
            (d = m),
            Object.keys(p).forEach(function (e) {
              y[e] ||
                Object.defineProperty(
                  d,
                  e,
                  Object.getOwnPropertyDescriptor(p, e),
                );
            }),
            m
          );
        }
        var y = {
          $$typeof: !0,
          render: !0,
          compare: !0,
          type: !0,
          displayName: !0,
        };
      },
      4452: (e, t, r) => {
        r.d(t, { q: () => l });
        var n = r(7813),
          o = r(6540),
          u = r(6356),
          i = r(3815),
          a = r(7380),
          c = r(9888);
        function f(e) {
          e.reaction = new n.Reaction("observer".concat(e.name), function () {
            var t;
            (e.stateVersion = Symbol()),
              null === (t = e.onStoreChange) || void 0 === t || t.call(e);
          });
        }
        function l(e, t) {
          if ((void 0 === t && (t = "observed"), (0, i.P)())) return e();
          var r = o.useRef(null);
          if (!r.current) {
            var n = {
              reaction: null,
              onStoreChange: null,
              stateVersion: Symbol(),
              name: t,
              subscribe: function (e) {
                return (
                  a.Y.unregister(n),
                  (n.onStoreChange = e),
                  n.reaction || (f(n), (n.stateVersion = Symbol())),
                  function () {
                    var e;
                    (n.onStoreChange = null),
                      null === (e = n.reaction) || void 0 === e || e.dispose(),
                      (n.reaction = null);
                  }
                );
              },
              getSnapshot: function () {
                return n.stateVersion;
              },
            };
            r.current = n;
          }
          var l,
            s,
            p = r.current;
          if (
            (p.reaction || (f(p), a.Y.register(r, p, p)),
            o.useDebugValue(p.reaction, u.E),
            (0, c.useSyncExternalStore)(
              p.subscribe,
              p.getSnapshot,
              p.getSnapshot,
            ),
            p.reaction.track(function () {
              try {
                l = e();
              } catch (e) {
                s = e;
              }
            }),
            s)
          )
            throw s;
          return l;
        }
      },
      5287: (e, t) => {
        var r = Symbol.for("react.element"),
          n = Symbol.for("react.portal"),
          o = Symbol.for("react.fragment"),
          u = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          a = Symbol.for("react.provider"),
          c = Symbol.for("react.context"),
          f = Symbol.for("react.forward_ref"),
          l = Symbol.for("react.suspense"),
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
          m = Object.assign,
          v = {};
        function b(e, t, r) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = r || d);
        }
        function h() {}
        function _(e, t, r) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
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
          (h.prototype = b.prototype);
        var S = (_.prototype = new h());
        (S.constructor = _), m(S, b.prototype), (S.isPureReactComponent = !0);
        var g = Array.isArray,
          w = Object.prototype.hasOwnProperty,
          $ = { current: null },
          O = { key: !0, ref: !0, __self: !0, __source: !0 };
        function R(e, t, n) {
          var o,
            u = {},
            i = null,
            a = null;
          if (null != t)
            for (o in (void 0 !== t.ref && (a = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              w.call(t, o) && !O.hasOwnProperty(o) && (u[o] = t[o]);
          var c = arguments.length - 2;
          if (1 === c) u.children = n;
          else if (1 < c) {
            for (var f = Array(c), l = 0; l < c; l++) f[l] = arguments[l + 2];
            u.children = f;
          }
          if (e && e.defaultProps)
            for (o in (c = e.defaultProps)) void 0 === u[o] && (u[o] = c[o]);
          return {
            $$typeof: r,
            type: e,
            key: i,
            ref: a,
            props: u,
            _owner: $.current,
          };
        }
        function k(e) {
          return "object" == typeof e && null !== e && e.$$typeof === r;
        }
        var E = /\/+/g;
        function C(e, t) {
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
              (e = "" === u ? "." + C(c, 0) : u),
              g(i)
                ? ((o = ""),
                  null != e && (o = e.replace(E, "$&/") + "/"),
                  j(i, t, o, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (k(i) &&
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
                          : ("" + i.key).replace(E, "$&/") + "/") +
                        e,
                    )),
                  t.push(i)),
              1
            );
          if (((c = 0), (u = "" === u ? "." : u + ":"), g(e)))
            for (var f = 0; f < e.length; f++) {
              var l = u + C((a = e[f]), f);
              c += j(a, t, o, l, i);
            }
          else if (
            ((l = (function (e) {
              return null === e || "object" != typeof e
                ? null
                : "function" == typeof (e = (y && e[y]) || e["@@iterator"])
                  ? e
                  : null;
            })(e)),
            "function" == typeof l)
          )
            for (e = l.call(e), f = 0; !(a = e.next()).done; )
              c += j((a = a.value), t, o, (l = u + C(a, f++)), i);
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
        function P(e) {
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
        var I = { current: null },
          M = { transition: null },
          V = {
            ReactCurrentDispatcher: I,
            ReactCurrentBatchConfig: M,
            ReactCurrentOwner: $,
          };
        function N() {
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
            if (!k(e))
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
          (t.Suspense = l),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = V),
          (t.act = N),
          (t.cloneElement = function (e, t, n) {
            if (null == e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  ".",
              );
            var o = m({}, e.props),
              u = e.key,
              i = e.ref,
              a = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (a = $.current)),
                void 0 !== t.key && (u = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var c = e.type.defaultProps;
              for (f in t)
                w.call(t, f) &&
                  !O.hasOwnProperty(f) &&
                  (o[f] = void 0 === t[f] && void 0 !== c ? c[f] : t[f]);
            }
            var f = arguments.length - 2;
            if (1 === f) o.children = n;
            else if (1 < f) {
              c = Array(f);
              for (var l = 0; l < f; l++) c[l] = arguments[l + 2];
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
          (t.createElement = R),
          (t.createFactory = function (e) {
            var t = R.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: f, render: e };
          }),
          (t.isValidElement = k),
          (t.lazy = function (e) {
            return {
              $$typeof: p,
              _payload: { _status: -1, _result: e },
              _init: P,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: s, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = M.transition;
            M.transition = {};
            try {
              e();
            } finally {
              M.transition = t;
            }
          }),
          (t.unstable_act = N),
          (t.useCallback = function (e, t) {
            return I.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return I.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return I.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return I.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return I.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, r) {
            return I.current.useImperativeHandle(e, t, r);
          }),
          (t.useInsertionEffect = function (e, t) {
            return I.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return I.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return I.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, r) {
            return I.current.useReducer(e, t, r);
          }),
          (t.useRef = function (e) {
            return I.current.useRef(e);
          }),
          (t.useState = function (e) {
            return I.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, r) {
            return I.current.useSyncExternalStore(e, t, r);
          }),
          (t.useTransition = function () {
            return I.current.useTransition();
          }),
          (t.version = "18.3.1");
      },
      6540: (e, t, r) => {
        e.exports = r(5287);
      },
      6090: (e, t, r) => {
        r.d(t, {
          $: () => R.$,
          $Z: () => O.$Z,
          Ay: () => k,
          CU: () => o.CU,
          Ci: () => v.C,
          Cw: () => u.C,
          Ee: () => O.Ee,
          Em: () => l.Em,
          Fb: () => o.Fb,
          Fi: () => b.Fi,
          GM: () => s.GM,
          GQ: () => O.GQ,
          Gz: () => O.Gz,
          HW: () => O.HW,
          I0: () => n.I0,
          IS: () => c.I,
          JZ: () => o.JZ,
          KI: () => R.KI,
          Ld: () => o.Ld,
          M9: () => n.M9,
          MQ: () => b.MQ,
          MV: () => O.MV,
          N: () => i.e,
          N1: () => m.N,
          NB: () => O.NB,
          NH: () => o.NH,
          O5: () => p.O,
          O6: () => o.O6,
          OH: () => O.OH,
          Oi: () => b.Oi,
          QB: () => o.QB,
          QR: () => R.QR,
          R$: () => O.R$,
          Se: () => o.Se,
          Uj: () => o.Uj,
          Vh: () => y.V,
          Xl: () => O.Xl,
          Y4: () => a.Y,
          Zk: () => b.Zk,
          _1: () => O._1,
          _h: () => b._h,
          _n: () => n._n,
          aX: () => y.a,
          b: () => O.b,
          b$: () => w.b,
          b4: () => h.b,
          cB: () => g.L,
          dL: () => f.d,
          e_: () => o.e_,
          en: () => R.en,
          fD: () => R.fD,
          gN: () => O.gN,
          k2: () => O.k2,
          kG: () => O.kG,
          ku: () => O.ku,
          lq: () => d.l,
          m$: () => h.m,
          mX: () => n.mX,
          mo: () => O.mo,
          mu: () => O.mu,
          nX: () => l.nX,
          ne: () => O.ne,
          nq: () => S.n,
          o3: () => b.o3,
          oN: () => o.oN,
          o_: () => o.o_,
          p0: () => o.p0,
          pM: () => O.pM,
          pg: () => n.pg,
          q5: () => o.q5,
          qF: () => o.qF,
          rF: () => c.H,
          rx: () => O.rx,
          sJ: () => _.$,
          sn: () => n.sn,
          tx: () => o.tx,
          uC: () => $.u,
          vx: () => o.vx,
        });
        var n = r(2824),
          o = r(6292),
          u = r(3389),
          i = (r(4120), r(1230)),
          a = r(5830),
          c = r(6186),
          f = r(3361),
          l = (r(111), r(5723)),
          s = r(3496),
          p = r(5178),
          y = (r(428), r(9011), r(7350)),
          d = r(6847),
          m = r(5227),
          v = (r(10), r(1808)),
          b = r(7019),
          h = (r(1988), r(2527), r(9864)),
          _ = (r(4189), r(322), r(1977), r(6417)),
          S = r(2303),
          g = r(8715),
          w = (r(4397), r(5459)),
          $ = r(8472),
          O = (r(1184), r(3725)),
          R = r(4367);
        const k = VRHTML;
      },
      292: (e, t, r) => {
        var n = r(1635),
          o = r(6540),
          u = r(5338),
          i = r(6090),
          a = r(3714),
          c = r(1333),
          f = r(9118),
          l = r(1532),
          s = r(5802),
          p = r(6646),
          y = r(6663),
          d = r(1835),
          m = r(4007),
          v = r(7813),
          b = r(582),
          h = r(6379);
        (0, v.configure)({ enforceActions: "never" }),
          (function () {
            (0, n.sH)(this, void 0, void 0, function* () {
              try {
                yield Promise.all([
                  (0, a.uV)(
                    ["vrmonitor", "bindingui"],
                    null === i.Ay || void 0 === i.Ay
                      ? void 0
                      : i.Ay.GetSteamLanguage(),
                  ),
                  c.HR.Init(!0),
                  f.W.Init(!0),
                  s.B$.Init(),
                  l.s.Init(),
                  p.X.Init(),
                ]),
                  yield Promise.all([m.Q.Init(), d.SW.Init(), h.c.Init()]);
              } catch (e) {
                console.error("Failed to initialize desktop settings:", e);
              }
              (0, b.aj)().Init("SteamVR", CLSTAMP, (0, b.d4)()),
                (document.title = (0, a.we)("#Settings_Header_SteamVR")),
                u
                  .H(document.getElementById("root"))
                  .render(o.createElement(y.z, { env: "desktop-window" }));
            });
          })();
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
        for (l = 0; l < e.length; l++) {
          for (var [r, o, u] = e[l], a = !0, c = 0; c < r.length; c++)
            (!1 & u || i >= u) && Object.keys(n.O).every((e) => n.O[e](r[c]))
              ? r.splice(c--, 1)
              : ((a = !1), u < i && (i = u));
          if (a) {
            e.splice(l--, 1);
            var f = o();
            void 0 !== f && (t = f);
          }
        }
        return t;
      }
      u = u || 0;
      for (var l = e.length; l > 0 && e[l - 1][2] > u; l--) e[l] = e[l - 1];
      e[l] = [r, o, u];
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
    (n.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e = { 249: 0, 527: 0, 17: 0 };
      n.O.j = (t) => 0 === e[t];
      var t = (t, r) => {
          var o,
            u,
            [i, a, c] = r,
            f = 0;
          if (i.some((t) => 0 !== e[t])) {
            for (o in a) n.o(a, o) && (n.m[o] = a[o]);
            if (c) var l = c(n);
          }
          for (t && t(r); f < i.length; f++)
            (u = i[f]), n.o(e, u) && e[u] && e[u][0](), (e[u] = 0);
          return n.O(l);
        },
        r = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var o = n.O(
    void 0,
    [967, 991, 305, 527, 452, 170, 537, 797, 906, 554, 57, 17],
    () => n(292),
  );
  o = n.O(o);
})(); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/settings_desktop.js.map
