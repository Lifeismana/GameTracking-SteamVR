var CLSTAMP = "10355840";
(() => {
  "use strict";
  var e,
    t = {
      6035: (e, t, r) => {
        r.d(t, { P: () => p });
        var n,
          o,
          a = r(6540),
          i = r(3815),
          u = r(4452),
          c = "function" == typeof Symbol && Symbol.for,
          l =
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
          s = c
            ? Symbol.for("react.forward_ref")
            : "function" == typeof a.forwardRef &&
              (0, a.forwardRef)(function (e) {
                return null;
              }).$$typeof,
          f = c
            ? Symbol.for("react.memo")
            : "function" == typeof a.memo &&
              (0, a.memo)(function (e) {
                return null;
              }).$$typeof;
        function p(e, t) {
          var r;
          if (f && e.$$typeof === f)
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
            s &&
            e.$$typeof === s &&
            ((n = !0), "function" != typeof (o = e.render))
          )
            throw new Error(
              "[mobx-react-lite] `render` property of ForwardRef was not a function",
            );
          var p,
            y,
            m = function (e, t) {
              return (0, u.q)(function () {
                return o(e, t);
              }, c);
            };
          return (
            (m.displayName = e.displayName),
            l &&
              Object.defineProperty(m, "name", {
                value: e.name,
                writable: !0,
                configurable: !0,
              }),
            e.contextTypes && (m.contextTypes = e.contextTypes),
            n && (m = (0, a.forwardRef)(m)),
            (m = (0, a.memo)(m)),
            (p = e),
            (y = m),
            Object.keys(p).forEach(function (e) {
              d[e] ||
                Object.defineProperty(
                  y,
                  e,
                  Object.getOwnPropertyDescriptor(p, e),
                );
            }),
            m
          );
        }
        var d = {
          $$typeof: !0,
          render: !0,
          compare: !0,
          type: !0,
          displayName: !0,
        };
      },
      4452: (e, t, r) => {
        r.d(t, { q: () => s });
        var n = r(7813),
          o = r(6540),
          a = r(6356),
          i = r(3815),
          u = r(7380),
          c = r(9888);
        function l(e) {
          e.reaction = new n.Reaction("observer".concat(e.name), function () {
            var t;
            (e.stateVersion = Symbol()),
              null === (t = e.onStoreChange) || void 0 === t || t.call(e);
          });
        }
        function s(e, t) {
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
                  u.Y.unregister(n),
                  (n.onStoreChange = e),
                  n.reaction || (l(n), (n.stateVersion = Symbol())),
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
          var s,
            f,
            p = r.current;
          if (
            (p.reaction || (l(p), u.Y.register(r, p, p)),
            o.useDebugValue(p.reaction, a.E),
            (0, c.useSyncExternalStore)(
              p.subscribe,
              p.getSnapshot,
              p.getSnapshot,
            ),
            p.reaction.track(function () {
              try {
                s = e();
              } catch (e) {
                f = e;
              }
            }),
            f)
          )
            throw f;
          return s;
        }
      },
      5287: (e, t) => {
        var r = Symbol.for("react.element"),
          n = Symbol.for("react.portal"),
          o = Symbol.for("react.fragment"),
          a = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          u = Symbol.for("react.provider"),
          c = Symbol.for("react.context"),
          l = Symbol.for("react.forward_ref"),
          s = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          p = Symbol.for("react.lazy"),
          d = Symbol.iterator;
        var y = {
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
            (this.updater = r || y);
        }
        function h() {}
        function _(e, t, r) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = r || y);
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
        var g = (_.prototype = new h());
        (g.constructor = _), m(g, b.prototype), (g.isPureReactComponent = !0);
        var S = Array.isArray,
          w = Object.prototype.hasOwnProperty,
          R = { current: null },
          O = { key: !0, ref: !0, __self: !0, __source: !0 };
        function E(e, t, n) {
          var o,
            a = {},
            i = null,
            u = null;
          if (null != t)
            for (o in (void 0 !== t.ref && (u = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              w.call(t, o) && !O.hasOwnProperty(o) && (a[o] = t[o]);
          var c = arguments.length - 2;
          if (1 === c) a.children = n;
          else if (1 < c) {
            for (var l = Array(c), s = 0; s < c; s++) l[s] = arguments[s + 2];
            a.children = l;
          }
          if (e && e.defaultProps)
            for (o in (c = e.defaultProps)) void 0 === a[o] && (a[o] = c[o]);
          return {
            $$typeof: r,
            type: e,
            key: i,
            ref: u,
            props: a,
            _owner: R.current,
          };
        }
        function $(e) {
          return "object" == typeof e && null !== e && e.$$typeof === r;
        }
        var x = /\/+/g;
        function k(e, t) {
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
        function C(e, t, o, a, i) {
          var u = typeof e;
          ("undefined" !== u && "boolean" !== u) || (e = null);
          var c = !1;
          if (null === e) c = !0;
          else
            switch (u) {
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
              (e = "" === a ? "." + k(c, 0) : a),
              S(i)
                ? ((o = ""),
                  null != e && (o = e.replace(x, "$&/") + "/"),
                  C(i, t, o, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  ($(i) &&
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
                          : ("" + i.key).replace(x, "$&/") + "/") +
                        e,
                    )),
                  t.push(i)),
              1
            );
          if (((c = 0), (a = "" === a ? "." : a + ":"), S(e)))
            for (var l = 0; l < e.length; l++) {
              var s = a + k((u = e[l]), l);
              c += C(u, t, o, s, i);
            }
          else if (
            ((s = (function (e) {
              return null === e || "object" != typeof e
                ? null
                : "function" == typeof (e = (d && e[d]) || e["@@iterator"])
                  ? e
                  : null;
            })(e)),
            "function" == typeof s)
          )
            for (e = s.call(e), l = 0; !(u = e.next()).done; )
              c += C((u = u.value), t, o, (s = a + k(u, l++)), i);
          else if ("object" === u)
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
        function N(e, t, r) {
          if (null == e) return e;
          var n = [],
            o = 0;
          return (
            C(e, n, "", "", function (e) {
              return t.call(r, e, o++);
            }),
            n
          );
        }
        function j(e) {
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
        var T = { current: null },
          V = { transition: null },
          I = {
            ReactCurrentDispatcher: T,
            ReactCurrentBatchConfig: V,
            ReactCurrentOwner: R,
          };
        function P() {
          throw Error(
            "act(...) is not supported in production builds of React.",
          );
        }
        (t.Children = {
          map: N,
          forEach: function (e, t, r) {
            N(
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
              N(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              N(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!$(e))
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
          (t.StrictMode = a),
          (t.Suspense = s),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I),
          (t.act = P),
          (t.cloneElement = function (e, t, n) {
            if (null == e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  ".",
              );
            var o = m({}, e.props),
              a = e.key,
              i = e.ref,
              u = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (u = R.current)),
                void 0 !== t.key && (a = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var c = e.type.defaultProps;
              for (l in t)
                w.call(t, l) &&
                  !O.hasOwnProperty(l) &&
                  (o[l] = void 0 === t[l] && void 0 !== c ? c[l] : t[l]);
            }
            var l = arguments.length - 2;
            if (1 === l) o.children = n;
            else if (1 < l) {
              c = Array(l);
              for (var s = 0; s < l; s++) c[s] = arguments[s + 2];
              o.children = c;
            }
            return {
              $$typeof: r,
              type: e.type,
              key: a,
              ref: i,
              props: o,
              _owner: u,
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
              }).Provider = { $$typeof: u, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = E),
          (t.createFactory = function (e) {
            var t = E.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: l, render: e };
          }),
          (t.isValidElement = $),
          (t.lazy = function (e) {
            return {
              $$typeof: p,
              _payload: { _status: -1, _result: e },
              _init: j,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = V.transition;
            V.transition = {};
            try {
              e();
            } finally {
              V.transition = t;
            }
          }),
          (t.unstable_act = P),
          (t.useCallback = function (e, t) {
            return T.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return T.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return T.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return T.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return T.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, r) {
            return T.current.useImperativeHandle(e, t, r);
          }),
          (t.useInsertionEffect = function (e, t) {
            return T.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return T.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return T.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, r) {
            return T.current.useReducer(e, t, r);
          }),
          (t.useRef = function (e) {
            return T.current.useRef(e);
          }),
          (t.useState = function (e) {
            return T.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, r) {
            return T.current.useSyncExternalStore(e, t, r);
          }),
          (t.useTransition = function () {
            return T.current.useTransition();
          }),
          (t.version = "18.3.1");
      },
      6540: (e, t, r) => {
        e.exports = r(5287);
      },
      6090: (e, t, r) => {
        r.d(t, {
          $: () => E.$,
          $Z: () => O.$Z,
          Ay: () => $,
          CU: () => o.CU,
          Ci: () => v.C,
          Cw: () => a.C,
          Ee: () => O.Ee,
          Em: () => s.Em,
          Fb: () => o.Fb,
          Fi: () => b.Fi,
          GM: () => f.GM,
          GQ: () => O.GQ,
          Gz: () => O.Gz,
          HW: () => O.HW,
          I0: () => n.I0,
          IS: () => c.I,
          JZ: () => o.JZ,
          KI: () => E.KI,
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
          QR: () => E.QR,
          R$: () => O.R$,
          Se: () => o.Se,
          Uj: () => o.Uj,
          Vh: () => d.V,
          Xl: () => O.Xl,
          Y4: () => u.Y,
          Zk: () => b.Zk,
          _1: () => O._1,
          _h: () => b._h,
          _n: () => n._n,
          aX: () => d.a,
          b: () => O.b,
          b$: () => w.b,
          b4: () => h.b,
          cB: () => S.L,
          dL: () => l.d,
          e_: () => o.e_,
          en: () => E.en,
          fD: () => E.fD,
          gN: () => O.gN,
          k2: () => O.k2,
          kG: () => O.kG,
          ku: () => O.ku,
          lq: () => y.l,
          m$: () => h.m,
          mX: () => n.mX,
          mo: () => O.mo,
          mu: () => O.mu,
          nX: () => s.nX,
          ne: () => O.ne,
          nq: () => g.n,
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
          uC: () => R.u,
          vx: () => o.vx,
        });
        var n = r(2824),
          o = r(6292),
          a = r(3389),
          i = (r(4120), r(1230)),
          u = r(5830),
          c = r(6186),
          l = r(3361),
          s = (r(111), r(5723)),
          f = r(3496),
          p = r(5178),
          d = (r(428), r(9011), r(7350)),
          y = r(6847),
          m = r(5227),
          v = (r(10), r(1808)),
          b = r(7019),
          h = (r(1988), r(2527), r(9864)),
          _ = (r(4189), r(322), r(1977), r(6417)),
          g = r(2303),
          S = r(8715),
          w = (r(4397), r(5459)),
          R = r(8472),
          O = (r(1184), r(3725)),
          E = r(4367);
        const $ = VRHTML;
      },
      4170: (e, t, r) => {
        var n = r(1635),
          o = r(6540),
          a = r(5338),
          i = r(3236),
          u = r(6090),
          c = r(3714),
          l = r(1333),
          s = r(7813),
          f = r(582);
        (0, s.configure)({ enforceActions: "never" });
        class p extends o.Component {
          constructor(e) {
            super(e),
              (this.m_toastMailbox = new u._n()),
              (this.state = { visible: !1, title: "", header: "", text: "" }),
              this.m_toastMailbox.Init("toast_renderer/main"),
              this.m_toastMailbox.RegisterHandler(
                "render_toast",
                this.OnRenderToast,
              ),
              l.HR.Init(!1);
          }
          OnRenderToast(e) {
            var t;
            let r =
              null ===
                (t =
                  null === u.Ay || void 0 === u.Ay
                    ? void 0
                    : u.Ay.VROverlayInternal) || void 0 === t
                ? void 0
                : t.GetToastInfo(e.notification_id);
            r
              ? this.setState({
                  visible: !0,
                  title: r.sTitle,
                  header: r.sHeader || "",
                  text: r.sText,
                  image: r.sImageData,
                })
              : this.setState({
                  visible: !1,
                  title: "",
                  header: "",
                  text: "",
                  image: null,
                });
          }
          render() {
            return this.state.visible
              ? o.createElement(
                  "div",
                  { className: "VRNotificationRoot" },
                  o.createElement(
                    "div",
                    { className: "VRNotificationApplicationName" },
                    this.state.title,
                  ),
                  o.createElement(
                    "div",
                    { className: "VRNotificationFrame" },
                    o.createElement("div", {
                      className: "VRToastImage",
                      style: {
                        backgroundImage: this.state.image
                          ? "url('" + this.state.image + "')"
                          : "url('/dashboard/images/icons/notification_steamcog.png')",
                      },
                    }),
                    o.createElement(
                      "div",
                      { className: "VRNotificationTextWrapper" },
                      o.createElement(
                        "div",
                        { className: "VRNotificationHeader" },
                        this.state.header,
                      ),
                      o.createElement(
                        "div",
                        { className: "VRNotificationText" },
                        this.state.text,
                      ),
                    ),
                  ),
                )
              : null;
          }
        }
        (0, n.Cg)([i.o], p.prototype, "OnRenderToast", null),
          (0, c.uV)(
            [],
            null === u.Ay || void 0 === u.Ay ? void 0 : u.Ay.GetSteamLanguage(),
          )
            .then(() => {
              (0, f.aj)().Init("SteamVR", CLSTAMP, (0, f.d4)()),
                a
                  .H(document.getElementById("root"))
                  .render(o.createElement(p, null));
            })
            .catch((e) =>
              console.error("Failed to initialize notification toast:", e),
            );
      },
    },
    r = {};
  function n(e) {
    var o = r[e];
    if (void 0 !== o) return o.exports;
    var a = (r[e] = { exports: {} });
    return t[e].call(a.exports, a, a.exports, n), a.exports;
  }
  (n.m = t),
    (e = []),
    (n.O = (t, r, o, a) => {
      if (!r) {
        var i = 1 / 0;
        for (s = 0; s < e.length; s++) {
          for (var [r, o, a] = e[s], u = !0, c = 0; c < r.length; c++)
            (!1 & a || i >= a) && Object.keys(n.O).every((e) => n.O[e](r[c]))
              ? r.splice(c--, 1)
              : ((u = !1), a < i && (i = a));
          if (u) {
            e.splice(s--, 1);
            var l = o();
            void 0 !== l && (t = l);
          }
        }
        return t;
      }
      a = a || 0;
      for (var s = e.length; s > 0 && e[s - 1][2] > a; s--) e[s] = e[s - 1];
      e[s] = [r, o, a];
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
      var e = { 915: 0, 527: 0, 500: 0 };
      n.O.j = (t) => 0 === e[t];
      var t = (t, r) => {
          var o,
            a,
            [i, u, c] = r,
            l = 0;
          if (i.some((t) => 0 !== e[t])) {
            for (o in u) n.o(u, o) && (n.m[o] = u[o]);
            if (c) var s = c(n);
          }
          for (t && t(r); l < i.length; l++)
            (a = i[l]), n.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
          return n.O(s);
        },
        r = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var o = n.O(
    void 0,
    [967, 991, 305, 527, 452, 170, 537, 797, 906, 500, 554, 57],
    () => n(4170),
  );
  o = n.O(o);
})(); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/notificationtoast.js.map
