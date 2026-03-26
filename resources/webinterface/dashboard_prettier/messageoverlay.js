var CLSTAMP = "10552726";
(() => {
  "use strict";
  var e,
    t = {
      6921: (e, t, n) => {
        n.r(t),
          n.d(t, {
            Observer: () => c.n,
            _observerFinalizationRegistry: () => s.Y,
            clearTimers: () => m,
            enableStaticRendering: () => l.e,
            isObserverBatched: () => a.m_,
            isUsingStaticRendering: () => l.P,
            observer: () => u.P,
            observerBatching: () => a.tl,
            useAsObservableSource: () => p.W,
            useLocalObservable: () => d.i,
            useLocalStore: () => f.W,
            useObserver: () => S,
            useStaticRendering: () => y,
          });
        n(724);
        var r,
          o = n(9889),
          a = n(8909),
          i = n(4452),
          l = n(3815),
          s = n(7380),
          u = n(6035),
          c = n(9712),
          d = n(5562),
          f = n(1154),
          p = n(3542);
        (0, a.tl)(o.r);
        var m =
          null !== (r = s.Y.finalizeAllImmediately) && void 0 !== r
            ? r
            : function () {};
        function S(e, t) {
          return void 0 === t && (t = "observed"), (0, i.q)(e, t);
        }
        function y(e) {
          (0, l.e)(e);
        }
      },
      6035: (e, t, n) => {
        n.d(t, { P: () => f });
        var r,
          o,
          a = n(6540),
          i = n(3815),
          l = n(4452),
          s = "function" == typeof Symbol && Symbol.for,
          u =
            null !==
              (o =
                null ===
                  (r = Object.getOwnPropertyDescriptor(
                    function () {},
                    "name",
                  )) || void 0 === r
                  ? void 0
                  : r.configurable) &&
            void 0 !== o &&
            o,
          c = s
            ? Symbol.for("react.forward_ref")
            : "function" == typeof a.forwardRef &&
              (0, a.forwardRef)(function (e) {
                return null;
              }).$$typeof,
          d = s
            ? Symbol.for("react.memo")
            : "function" == typeof a.memo &&
              (0, a.memo)(function (e) {
                return null;
              }).$$typeof;
        function f(e, t) {
          var n;
          if (d && e.$$typeof === d)
            throw new Error(
              "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
            );
          if ((0, i.P)()) return e;
          var r =
              null !== (n = null == t ? void 0 : t.forwardRef) &&
              void 0 !== n &&
              n,
            o = e,
            s = e.displayName || e.name;
          if (
            c &&
            e.$$typeof === c &&
            ((r = !0), "function" != typeof (o = e.render))
          )
            throw new Error(
              "[mobx-react-lite] `render` property of ForwardRef was not a function",
            );
          var f,
            m,
            S = function (e, t) {
              return (0, l.q)(function () {
                return o(e, t);
              }, s);
            };
          return (
            (S.displayName = e.displayName),
            u &&
              Object.defineProperty(S, "name", {
                value: e.name,
                writable: !0,
                configurable: !0,
              }),
            e.contextTypes && (S.contextTypes = e.contextTypes),
            r && (S = (0, a.forwardRef)(S)),
            (S = (0, a.memo)(S)),
            (f = e),
            (m = S),
            Object.keys(f).forEach(function (e) {
              p[e] ||
                Object.defineProperty(
                  m,
                  e,
                  Object.getOwnPropertyDescriptor(f, e),
                );
            }),
            S
          );
        }
        var p = {
          $$typeof: !0,
          render: !0,
          compare: !0,
          type: !0,
          displayName: !0,
        };
      },
      4452: (e, t, n) => {
        n.d(t, { q: () => c });
        var r = n(7813),
          o = n(6540),
          a = n(6356),
          i = n(3815),
          l = n(7380),
          s = n(9888);
        function u(e) {
          e.reaction = new r.Reaction("observer".concat(e.name), function () {
            var t;
            (e.stateVersion = Symbol()),
              null === (t = e.onStoreChange) || void 0 === t || t.call(e);
          });
        }
        function c(e, t) {
          if ((void 0 === t && (t = "observed"), (0, i.P)())) return e();
          var n = o.useRef(null);
          if (!n.current) {
            var r = {
              reaction: null,
              onStoreChange: null,
              stateVersion: Symbol(),
              name: t,
              subscribe: function (e) {
                return (
                  l.Y.unregister(r),
                  (r.onStoreChange = e),
                  r.reaction || (u(r), (r.stateVersion = Symbol())),
                  function () {
                    var e;
                    (r.onStoreChange = null),
                      null === (e = r.reaction) || void 0 === e || e.dispose(),
                      (r.reaction = null);
                  }
                );
              },
              getSnapshot: function () {
                return r.stateVersion;
              },
            };
            n.current = r;
          }
          var c,
            d,
            f = n.current;
          if (
            (f.reaction || (u(f), l.Y.register(n, f, f)),
            o.useDebugValue(f.reaction, a.E),
            (0, s.useSyncExternalStore)(
              f.subscribe,
              f.getSnapshot,
              f.getSnapshot,
            ),
            f.reaction.track(function () {
              try {
                c = e();
              } catch (e) {
                d = e;
              }
            }),
            d)
          )
            throw d;
          return c;
        }
      },
      5287: (e, t) => {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          o = Symbol.for("react.fragment"),
          a = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          l = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var m = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          S = Object.assign,
          y = {};
        function v(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = y),
            (this.updater = n || m);
        }
        function _() {}
        function h(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = y),
            (this.updater = n || m);
        }
        (v.prototype.isReactComponent = {}),
          (v.prototype.setState = function (e, t) {
            if ("object" != typeof e && "function" != typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (v.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (_.prototype = v.prototype);
        var g = (h.prototype = new _());
        (g.constructor = h), S(g, v.prototype), (g.isPureReactComponent = !0);
        var b = Array.isArray,
          R = Object.prototype.hasOwnProperty,
          O = { current: null },
          C = { key: !0, ref: !0, __self: !0, __source: !0 };
        function P(e, t, r) {
          var o,
            a = {},
            i = null,
            l = null;
          if (null != t)
            for (o in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              R.call(t, o) && !C.hasOwnProperty(o) && (a[o] = t[o]);
          var s = arguments.length - 2;
          if (1 === s) a.children = r;
          else if (1 < s) {
            for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
            a.children = u;
          }
          if (e && e.defaultProps)
            for (o in (s = e.defaultProps)) void 0 === a[o] && (a[o] = s[o]);
          return {
            $$typeof: n,
            type: e,
            key: i,
            ref: l,
            props: a,
            _owner: O.current,
          };
        }
        function T(e) {
          return "object" == typeof e && null !== e && e.$$typeof === n;
        }
        var E = /\/+/g;
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
        function M(e, t, o, a, i) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (l) {
              case "string":
              case "number":
                s = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    s = !0;
                }
            }
          if (s)
            return (
              (i = i((s = e))),
              (e = "" === a ? "." + k(s, 0) : a),
              b(i)
                ? ((o = ""),
                  null != e && (o = e.replace(E, "$&/") + "/"),
                  M(i, t, o, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (T(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      o +
                        (!i.key || (s && s.key === i.key)
                          ? ""
                          : ("" + i.key).replace(E, "$&/") + "/") +
                        e,
                    )),
                  t.push(i)),
              1
            );
          if (((s = 0), (a = "" === a ? "." : a + ":"), b(e)))
            for (var u = 0; u < e.length; u++) {
              var c = a + k((l = e[u]), u);
              s += M(l, t, o, c, i);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" != typeof e
                ? null
                : "function" == typeof (e = (p && e[p]) || e["@@iterator"])
                  ? e
                  : null;
            })(e)),
            "function" == typeof c)
          )
            for (e = c.call(e), u = 0; !(l = e.next()).done; )
              s += M((l = l.value), t, o, (c = a + k(l, u++)), i);
          else if ("object" === l)
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
          return s;
        }
        function w(e, t, n) {
          if (null == e) return e;
          var r = [],
            o = 0;
          return (
            M(e, r, "", "", function (e) {
              return t.call(n, e, o++);
            }),
            r
          );
        }
        function B(e) {
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
          x = { transition: null },
          A = {
            ReactCurrentDispatcher: I,
            ReactCurrentBatchConfig: x,
            ReactCurrentOwner: O,
          };
        function D() {
          throw Error(
            "act(...) is not supported in production builds of React.",
          );
        }
        (t.Children = {
          map: w,
          forEach: function (e, t, n) {
            w(
              e,
              function () {
                t.apply(this, arguments);
              },
              n,
            );
          },
          count: function (e) {
            var t = 0;
            return (
              w(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              w(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!T(e))
              throw Error(
                "React.Children.only expected to receive a single React element child.",
              );
            return e;
          },
        }),
          (t.Component = v),
          (t.Fragment = o),
          (t.Profiler = i),
          (t.PureComponent = h),
          (t.StrictMode = a),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A),
          (t.act = D),
          (t.cloneElement = function (e, t, r) {
            if (null == e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  ".",
              );
            var o = S({}, e.props),
              a = e.key,
              i = e.ref,
              l = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (l = O.current)),
                void 0 !== t.key && (a = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (u in t)
                R.call(t, u) &&
                  !C.hasOwnProperty(u) &&
                  (o[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) o.children = r;
            else if (1 < u) {
              s = Array(u);
              for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
              o.children = s;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: a,
              ref: i,
              props: o,
              _owner: l,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: l, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = P),
          (t.createFactory = function (e) {
            var t = P.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = T),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: B,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = x.transition;
            x.transition = {};
            try {
              e();
            } finally {
              x.transition = t;
            }
          }),
          (t.unstable_act = D),
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
          (t.useImperativeHandle = function (e, t, n) {
            return I.current.useImperativeHandle(e, t, n);
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
          (t.useReducer = function (e, t, n) {
            return I.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return I.current.useRef(e);
          }),
          (t.useState = function (e) {
            return I.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return I.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return I.current.useTransition();
          }),
          (t.version = "18.3.1");
      },
      6540: (e, t, n) => {
        e.exports = n(5287);
      },
      6090: (e, t, n) => {
        n.d(t, {
          $: () => P.$,
          $Z: () => C.$Z,
          Ay: () => T,
          CU: () => o.CU,
          Ci: () => y.C,
          Cw: () => a.C,
          Ee: () => C.Ee,
          Em: () => c.Em,
          Fb: () => o.Fb,
          Fi: () => v.Fi,
          GM: () => d.GM,
          GQ: () => C.GQ,
          Gz: () => C.Gz,
          HW: () => C.HW,
          I0: () => r.I0,
          IS: () => s.I,
          JZ: () => o.JZ,
          KI: () => P.KI,
          Ld: () => o.Ld,
          M9: () => r.M9,
          MQ: () => v.MQ,
          MV: () => C.MV,
          N: () => i.e,
          N1: () => S.N,
          NB: () => C.NB,
          NH: () => o.NH,
          O5: () => f.O,
          O6: () => o.O6,
          OH: () => C.OH,
          Oi: () => v.Oi,
          Ox: () => C.Ox,
          QB: () => o.QB,
          QR: () => P.QR,
          R$: () => C.R$,
          Rk: () => C.Rk,
          Se: () => o.Se,
          Uj: () => o.Uj,
          Vh: () => p.V,
          Xl: () => C.Xl,
          Y4: () => l.Y,
          Zk: () => v.Zk,
          _1: () => C._1,
          _h: () => v._h,
          _n: () => r._n,
          aX: () => p.a,
          b: () => C.b,
          b$: () => R.b,
          b4: () => _.b,
          cB: () => b.L,
          dL: () => u.d,
          e_: () => o.e_,
          en: () => P.en,
          fD: () => P.fD,
          gN: () => C.gN,
          k2: () => C.k2,
          kG: () => C.kG,
          ku: () => C.ku,
          lq: () => m.l,
          m$: () => _.m,
          mX: () => r.mX,
          mo: () => C.mo,
          mu: () => C.mu,
          nX: () => c.nX,
          ne: () => C.ne,
          nq: () => g.n,
          o3: () => v.o3,
          oN: () => o.oN,
          o_: () => o.o_,
          p0: () => o.p0,
          pM: () => C.pM,
          pg: () => r.pg,
          q5: () => o.q5,
          qF: () => o.qF,
          rF: () => s.H,
          rx: () => C.rx,
          sJ: () => h.$,
          sn: () => r.sn,
          tx: () => o.tx,
          uC: () => O.u,
          vx: () => o.vx,
        });
        var r = n(2824),
          o = n(6292),
          a = n(3389),
          i = (n(4120), n(1230)),
          l = n(5830),
          s = n(6186),
          u = n(3361),
          c = (n(111), n(5723)),
          d = n(3496),
          f = n(5178),
          p = (n(428), n(9011), n(7350)),
          m = n(6847),
          S = n(5227),
          y = (n(10), n(1808)),
          v = n(7019),
          _ = (n(1988), n(2527), n(9864)),
          h = (n(4189), n(322), n(1977), n(6417)),
          g = n(2303),
          b = n(8715),
          R = (n(4397), n(5459)),
          O = n(8472),
          C = (n(1184), n(3725)),
          P = n(4367);
        const T = VRHTML;
      },
      3725: (e, t, n) => {
        var r, o, a, i;
        function l() {
          var e;
          return null !==
            (e =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.Environment()) && void 0 !== e
            ? e
            : r.Unknown;
        }
        n.d(t, {
          $Z: () => d,
          Ee: () => O,
          GQ: () => x,
          Gz: () => u,
          HW: () => _,
          MV: () => a,
          NB: () => m,
          OH: () => r,
          Ox: () => h,
          R$: () => l,
          Rk: () => S,
          Xl: () => g,
          _1: () => B,
          _E: () => s,
          b: () => b,
          gN: () => P,
          k2: () => k,
          kG: () => T,
          ku: () => p,
          mo: () => y,
          mu: () => i,
          ne: () => c,
          pM: () => o,
          rx: () => M,
        }),
          (function (e) {
            (e[(e.Desktop = 1)] = "Desktop"),
              (e[(e.Overlay = 2)] = "Overlay"),
              (e[(e.Unknown = 100)] = "Unknown");
          })(r || (r = {})),
          window.hasOwnProperty("VRHTML") || (window.VRHTML = null),
          (function (e) {
            (e[(e.Auto = 0)] = "Auto"),
              (e[(e.Low = 1)] = "Low"),
              (e[(e.Medium = 2)] = "Medium"),
              (e[(e.High = 3)] = "High");
          })(o || (o = {})),
          (function (e) {
            (e[(e.TrackingResult_Uninitialized = 1)] =
              "TrackingResult_Uninitialized"),
              (e[(e.TrackingResult_Calibrating_InProgress = 100)] =
                "TrackingResult_Calibrating_InProgress"),
              (e[(e.TrackingResult_Calibrating_OutOfRange = 101)] =
                "TrackingResult_Calibrating_OutOfRange"),
              (e[(e.TrackingResult_Running_OK = 200)] =
                "TrackingResult_Running_OK"),
              (e[(e.TrackingResult_Running_OutOfRange = 201)] =
                "TrackingResult_Running_OutOfRange"),
              (e[(e.TrackingResult_Fallback_RotationOnly = 300)] =
                "TrackingResult_Fallback_RotationOnly");
          })(a || (a = {})),
          (function (e) {
            (e[(e.Seated = 0)] = "Seated"),
              (e[(e.Standing = 1)] = "Standing"),
              (e[(e.RawAndUncalibrated = 2)] = "RawAndUncalibrated");
          })(i || (i = {}));
        let s = 0,
          u = 0,
          c = 4294967295;
        var d, f, p, m, S, y, v, _, h, g, b, R, O, C, P, T, E, k, M, w, B, I, x;
        !(function (e) {
          (e[(e.Invalid = 0)] = "Invalid"),
            (e[(e.RecenterCountdown = 1)] = "RecenterCountdown"),
            (e[(e.FloorAdjustExisting = 2)] = "FloorAdjustExisting"),
            (e[(e.RoomSetupFloor = 3)] = "RoomSetupFloor"),
            (e[(e.ClearRoomSetup = 4)] = "ClearRoomSetup"),
            (e[(e.RoomSetupFull = 5)] = "RoomSetupFull");
        })(d || (d = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.Shown = 1)] = "Shown"),
              (e[(e.Hidden = 2)] = "Hidden"),
              (e[(e.Exposed = 3)] = "Exposed"),
              (e[(e.Moved = 4)] = "Moved"),
              (e[(e.Resized = 5)] = "Resized"),
              (e[(e.SizeChanged = 6)] = "SizeChanged"),
              (e[(e.Minimized = 7)] = "Minimized"),
              (e[(e.Maximized = 8)] = "Maximized"),
              (e[(e.Restored = 9)] = "Restored"),
              (e[(e.Enter = 10)] = "Enter"),
              (e[(e.Leave = 11)] = "Leave"),
              (e[(e.FocusGained = 12)] = "FocusGained"),
              (e[(e.FocusLost = 13)] = "FocusLost"),
              (e[(e.Close = 14)] = "Close"),
              (e[(e.TakeFocus = 15)] = "TakeFocus"),
              (e[(e.HitTest = 16)] = "HitTest");
          })(f || (f = {})),
          (function (e) {
            (e[(e.Activated = 0)] = "Activated"),
              (e[(e.Deactivated = 1)] = "Deactivated");
          })(p || (p = {})),
          (function (e) {
            (e[(e.NoDashboardTab = 8)] = "NoDashboardTab"),
              (e[(e.AcceptsGamepadEvents = 16)] = "AcceptsGamepadEvents"),
              (e[(e.ShowGamepadFocus = 32)] = "ShowGamepadFocus"),
              (e[(e.SendVRDiscreteScrollEvents = 64)] =
                "SendVRDiscreteScrollEvents"),
              (e[(e.SendVRTouchpadEvents = 128)] = "SendVRTouchpadEvents"),
              (e[(e.ShowTouchPadScrollWheel = 256)] =
                "ShowTouchPadScrollWheel"),
              (e[(e.TransferOwnershipToInternalProcess = 512)] =
                "TransferOwnershipToInternalProcess"),
              (e[(e.SideBySide_Parallel = 1024)] = "SideBySide_Parallel"),
              (e[(e.SideBySide_Crossed = 2048)] = "SideBySide_Crossed"),
              (e[(e.Panorama = 4096)] = "Panorama"),
              (e[(e.StereoPanorama = 8192)] = "StereoPanorama"),
              (e[(e.SortWithNonSceneOverlays = 16384)] =
                "SortWithNonSceneOverlays"),
              (e[(e.VisibleInDashboard = 32768)] = "VisibleInDashboard"),
              (e[(e.MakeOverlaysInteractiveIfVisible = 65536)] =
                "MakeOverlaysInteractiveIfVisible"),
              (e[(e.SendVRSmoothScrollEvents = 131072)] =
                "SendVRSmoothScrollEvents"),
              (e[(e.ProtectedContent = 262144)] = "ProtectedContent"),
              (e[(e.HideLaserIntersection = 524288)] = "HideLaserIntersection"),
              (e[(e.WantsModalBehavior = 1048576)] = "WantsModalBehavior"),
              (e[(e.IsPremultiplied = 2097152)] = "IsPremultiplied"),
              (e[(e.IgnoreTextureAlpha = 4194304)] = "IgnoreTextureAlpha"),
              (e[(e.EnableControlBarKeyboard = 16777216)] =
                "EnableControlBarKeyboard"),
              (e[(e.EnableControlBarClose = 33554432)] =
                "EnableControlBarClose"),
              (e[(e.MinimalControlBar = 67108864)] = "MinimalControlBar"),
              (e[(e.EnableClickStabilization = 134217728)] =
                "EnableClickStabilization"),
              (e[(e.MultiCursor = 268435456)] = "MultiCursor");
          })(m || (m = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"), (e[(e.Mouse = 1)] = "Mouse");
          })(S || (S = {})),
          (function (e) {
            (e[(e.Invalid = 0)] = "Invalid"),
              (e[(e.HMD = 1)] = "HMD"),
              (e[(e.Controller = 2)] = "Controller"),
              (e[(e.GenericTracker = 3)] = "GenericTracker"),
              (e[(e.TrackingReference = 4)] = "TrackingReference"),
              (e[(e.DisplayRedirect = 5)] = "DisplayRedirect");
          })(y || (y = {})),
          (function (e) {
            (e[(e.Unknown = 0)] = "Unknown"),
              (e[(e.NVIDIA = 1)] = "NVIDIA"),
              (e[(e.AMD = 2)] = "AMD");
          })(v || (v = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.Starting = 1)] = "Starting"),
              (e[(e.Quitting = 2)] = "Quitting"),
              (e[(e.Running = 3)] = "Running"),
              (e[(e.Waiting = 4)] = "Waiting");
          })(_ || (_ = {})),
          (function (e) {
            (e[(e.ButtonPress_0 = 0)] = "ButtonPress_0"),
              (e[(e.ButtonPress_1 = 1)] = "ButtonPress_1"),
              (e[(e.ButtonPress_2 = 2)] = "ButtonPress_2"),
              (e[(e.ButtonPress_3 = 3)] = "ButtonPress_3"),
              (e[(e.CouldntFindSystemOverlay = 4)] =
                "CouldntFindSystemOverlay"),
              (e[(e.CouldntFindOrCreateClientOverlay = 5)] =
                "CouldntFindOrCreateClientOverlay"),
              (e[(e.ApplicationQuit = 6)] = "ApplicationQuit");
          })(h || (h = {})),
          (function (e) {
            (e[(e.Normal = 0)] = "Normal"),
              (e[(e.Password = 1)] = "Password"),
              (e[(e.Submit = 2)] = "Submit");
          })(g || (g = {})),
          (function (e) {
            (e[(e.SingleLine = 0)] = "SingleLine"),
              (e[(e.MultipleLines = 1)] = "MultipleLines");
          })(b || (b = {})),
          (function (e) {
            (e[(e.LaserMouse = 1)] = "LaserMouse"),
              (e[(e.Keyboard = 2)] = "Keyboard"),
              (e[(e.RoomView = 4)] = "RoomView"),
              (e[(e.DisplaySuppressed = 8)] = "DisplaySuppressed"),
              (e[(e.SystemButtonDown = 16)] = "SystemButtonDown"),
              (e[(e.DriverIsDrawingControllers = 32)] =
                "DriverIsDrawingControllers"),
              (e[(e.DriverRequestsApplicationPause = 64)] =
                "DriverRequestsApplicationPause"),
              (e[(e.DriverRequestsReducedRendering = 128)] =
                "DriverRequestsReducedRendering");
          })(R || (R = {})),
          (function (e) {
            (e[(e.BULK_DEFAULT = 0)] = "BULK_DEFAULT"),
              (e[(e.BULK_64K_DMA = 1)] = "BULK_64K_DMA"),
              (e[(e.BULK_16K_DMA = 2)] = "BULK_16K_DMA"),
              (e[(e.BULK_8K_DMA = 3)] = "BULK_8K_DMA"),
              (e[(e.ISO_52FPS = 4)] = "ISO_52FPS"),
              (e[(e.ISO_50FPS = 5)] = "ISO_50FPS"),
              (e[(e.ISO_48FPS = 6)] = "ISO_48FPS"),
              (e[(e.ISO_46FPS = 7)] = "ISO_46FPS"),
              (e[(e.ISO_44FPS = 8)] = "ISO_44FPS"),
              (e[(e.ISO_42FPS = 9)] = "ISO_42FPS"),
              (e[(e.ISO_40FPS = 10)] = "ISO_40FPS"),
              (e[(e.ISO_35FPS = 11)] = "ISO_35FPS"),
              (e[(e.ISO_30FPS = 12)] = "ISO_30FPS"),
              (e[(e.ISO_15FPS = 13)] = "ISO_15FPS"),
              (e[(e.MAX_CAMERA_COMPAT_MODES = 14)] = "MAX_CAMERA_COMPAT_MODES");
          })(O || (O = {})),
          (function (e) {
            (e[(e.ECameraExposure_Unknown = 0)] = "ECameraExposure_Unknown"),
              (e[(e.ECameraExposure_Nominal = 1)] = "ECameraExposure_Nominal"),
              (e[(e.ECameraExposure_HighExposure = 2)] =
                "ECameraExposure_HighExposure");
          })(C || (C = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.ThisSteamVR = 1)] = "ThisSteamVR"),
              (e[(e.AnotherSteamVR = 2)] = "AnotherSteamVR"),
              (e[(e.AnotherRuntime = 3)] = "AnotherRuntime"),
              (e[(e.Error = -1)] = "Error");
          })(P || (P = {})),
          (function (e) {
            (e[(e.TrackedControllerRole_Invalid = 0)] =
              "TrackedControllerRole_Invalid"),
              (e[(e.TrackedControllerRole_LeftHand = 1)] =
                "TrackedControllerRole_LeftHand"),
              (e[(e.TrackedControllerRole_RightHand = 2)] =
                "TrackedControllerRole_RightHand"),
              (e[(e.TrackedControllerRole_OptOut = 3)] =
                "TrackedControllerRole_OptOut"),
              (e[(e.TrackedControllerRole_Treadmill = 4)] =
                "TrackedControllerRole_Treadmill"),
              (e[(e.TrackedControllerRole_Max = 5)] =
                "TrackedControllerRole_Max");
          })(T || (T = {})),
          (function (e) {
            (e[(e.Unknown = 0)] = "Unknown"),
              (e[(e.Steam_VRButton = 1)] = "Steam_VRButton"),
              (e[(e.Steam_StartSteamVRApp = 2)] = "Steam_StartSteamVRApp"),
              (e[(e.Watchdog_Unknown = 10)] = "Watchdog_Unknown"),
              (e[(e.Watchdog_Controller = 11)] = "Watchdog_Controller"),
              (e[(e.Watchdog_Hmd = 12)] = "Watchdog_Hmd"),
              (e[(e.AppLaunch_Unknown = 20)] = "AppLaunch_Unknown"),
              (e[(e.AppLaunch_Steam = 21)] = "AppLaunch_Steam"),
              (e[(e.SteamVR_Restart = 30)] = "SteamVR_Restart"),
              (e[(e.SteamVR_VRStartup = 31)] = "SteamVR_VRStartup");
          })(E || (E = {})),
          (function (e) {
            e[(e.Hostname = 0)] = "Hostname";
          })(k || (k = {})),
          (function (e) {
            (e[(e.Unavailable = 0)] = "Unavailable"),
              (e[(e.Active = 1)] = "Active"),
              (e[(e.Off = 2)] = "Off");
          })(M || (M = {})),
          (function (e) {
            (e[(e.Default = 1)] = "Default"), (e[(e.Floor = 2)] = "Floor");
          })(w || (w = {})),
          (function (e) {
            (e[(e.Inactive = 0)] = "Inactive"),
              (e[(e.PendingReset = 1)] = "PendingReset"),
              (e[(e.PendingResetIfNeeded = 2)] = "PendingResetIfNeeded"),
              (e[(e.Default = 3)] = "Default"),
              (e[(e.CV = 4)] = "CV"),
              (e[(e.Manual = 5)] = "Manual");
          })(B || (B = {})),
          (function (e) {
            (e[(e.OK = 1)] = "OK"),
              (e[(e.Warning = 100)] = "Warning"),
              (e[(e.Warning_BaseStationMayHaveMoved = 101)] =
                "Warning_BaseStationMayHaveMoved"),
              (e[(e.Warning_BaseStationRemoved = 102)] =
                "Warning_BaseStationRemoved"),
              (e[(e.Warning_SeatedBoundsInvalid = 103)] =
                "Warning_SeatedBoundsInvalid"),
              (e[(e.Error = 200)] = "Error"),
              (e[(e.Error_BaseStationUninitialized = 201)] =
                "Error_BaseStationUninitialized"),
              (e[(e.Error_BaseStationConflict = 202)] =
                "Error_BaseStationConflict"),
              (e[(e.Error_PlayAreaInvalid = 203)] = "Error_PlayAreaInvalid"),
              (e[(e.Error_CollisionBoundsInvalid = 204)] =
                "Error_CollisionBoundsInvalid");
          })(I || (I = {})),
          (function (e) {
            (e[(e.Small = 0)] = "Small"),
              (e[(e.Medium = 1)] = "Medium"),
              (e[(e.Large = 2)] = "Large"),
              (e[(e.Gigantic = 3)] = "Gigantic"),
              (e[(e.Standing = 4)] = "Standing");
          })(x || (x = {}));
      },
      1139: (e, t, n) => {
        n.d(t, { CH: () => c, FH: () => l, aw: () => u, jE: () => s });
        var r = n(1635),
          o = n(6540),
          a = n(3236),
          i = n(7813);
        function l(...e) {
          return e
            .filter((e) => null != e && ("string" == typeof e || e[1]))
            .map((e) => ("string" == typeof e ? e : e[0]))
            .join(" ");
        }
        function s(e, t) {
          let n = t;
          for (; n.parentElement && !e.some((e) => n.matches(e)); )
            n = n.parentElement;
          return n;
        }
        class u {
          constructor() {
            (this.onScroll = null),
              (this.onScrollStop = null),
              (this.m_elem = null),
              (this.m_rScrollableParents = []),
              (this.m_bScrolling = !1),
              (this.m_scrollStopTimeoutHandle = void 0),
              (0, i.makeObservable)(this);
          }
          ref(e) {
            this.m_elem && this.cleanup(),
              (this.m_elem = e),
              this.updateScrollableParents();
          }
          get isScrolling() {
            return this.m_bScrolling;
          }
          updateScrollableParents() {
            for (let e of this.m_rScrollableParents)
              e.removeEventListener("scroll", this.onParentScroll);
            this.m_rScrollableParents = (function (e) {
              let t = [];
              if (!e) return t;
              let n = e.parentElement;
              for (; n; ) {
                const e = n.scrollWidth > n.clientWidth,
                  r = n.scrollHeight > n.clientHeight;
                (e || r) && t.push(n), (n = n.parentElement);
              }
              return t;
            })(this.m_elem);
            for (let e of this.m_rScrollableParents)
              e.addEventListener("scroll", this.onParentScroll);
          }
          cleanup() {
            for (let e of this.m_rScrollableParents)
              e.removeEventListener("scroll", this.onParentScroll);
            (this.m_rScrollableParents = []),
              (this.m_elem = null),
              this.clearScrollStopTimeout();
          }
          onParentScroll() {
            var e;
            this.clearScrollStopTimeout(),
              (this.m_bScrolling = !0),
              (this.m_scrollStopTimeoutHandle = window.setTimeout(
                this.onScrollStopTimeout,
                50,
              )),
              null === (e = this.onScroll) || void 0 === e || e.call(this);
          }
          clearScrollStopTimeout() {
            window.clearTimeout(this.m_scrollStopTimeoutHandle),
              (this.m_scrollStopTimeoutHandle = void 0);
          }
          onScrollStopTimeout() {
            var e;
            this.m_bScrolling &&
              (null === (e = this.onScrollStop) ||
                void 0 === e ||
                e.call(this)),
              (this.m_bScrolling = !1);
          }
        }
        function c() {
          const [, e] = o.useState(0);
          return o.useCallback(() => e((e) => e + 1), []);
        }
        (0, r.Cg)([i.observable], u.prototype, "m_bScrolling", void 0),
          (0, r.Cg)([a.o], u.prototype, "ref", null),
          (0, r.Cg)([i.computed], u.prototype, "isScrolling", null),
          (0, r.Cg)([a.o], u.prototype, "onParentScroll", null),
          (0, r.Cg)([a.o], u.prototype, "onScrollStopTimeout", null);
      },
      1583: (e, t, n) => {
        var r = n(1635),
          o = n(6540),
          a = n(5338),
          i = n(1370),
          l = n(3236),
          s = n(6090),
          u = n(3714),
          c = n(6138),
          d = n(1333),
          f = n(3606);
        function p(e) {
          return o.createElement(
            c.$,
            { className: "ButtonControl", onClick: e.onClick },
            e.label,
          );
        }
        (0, n(7813).configure)({ enforceActions: "never" });
        let m = class extends o.Component {
          constructor(e) {
            super(e),
              (this.nMaxButtons = 4),
              (this.m_mailbox = new s._n()),
              (this.state = {
                unCallingProcessID: 0,
                sCaptionText: "Default Caption",
                sMessageText: "Default text.",
                sButtonTexts: ["Button0", "Button1", "Button2", "Button3"],
              }),
              this.m_mailbox.Init("message_overlay/main").then(() => {
                this.m_mailbox.RegisterHandler(
                  "render_message",
                  this.OnRenderMessageOverlay,
                ),
                  this.m_mailbox.RegisterHandler(
                    "close_requested",
                    this.OnMessageOverlayCloseRequested,
                  ),
                  this.m_mailbox.RegisterHandler(
                    "process_quit",
                    this.OnProcessQuit,
                  );
              }),
              d.HR.Init(!1);
          }
          ResetState() {
            this.setState({
              unCallingProcessID: 0,
              sCaptionText: "Default Caption",
              sMessageText: "Default text.",
              sButtonTexts: ["Button0", "Button1", "Button2", "Button3"],
            });
          }
          OnProcessQuit(e) {
            return this.OnMessageOverlayCloseRequested(e);
          }
          OnMessageOverlayCloseRequested(e) {
            return e.unProcessID == this.state.unCallingProcessID
              ? (console.log(
                  "Close requested from owning process " +
                    this.state.unCallingProcessID,
                ),
                null === s.Ay ||
                  void 0 === s.Ay ||
                  s.Ay.VRDashboardManager.OnMessageOverlayResponse(
                    s.Ox.ApplicationQuit,
                  ),
                this.ResetState(),
                !0)
              : (console.log(
                  "Error: Close requested from process " +
                    e.unProcessID +
                    ", but owning process is " +
                    this.state.unCallingProcessID,
                ),
                !1);
          }
          OnRenderMessageOverlay(e) {
            console.log(
              "Message overlay requested from process " + e.unCallingProcessID,
            ),
              this.setState({
                unCallingProcessID: e.unCallingProcessID,
                sCaptionText: e.sCaptionText,
                sMessageText: e.sMessageText,
                sButtonTexts: e.sButtonTexts,
              }),
              null === s.Ay ||
                void 0 === s.Ay ||
                s.Ay.VROverlay.ShowDashboard(f.Qv);
          }
          ButtonClicked(e) {
            if (!s.Ay)
              return (
                console.log(
                  "Error: VRHTML isn't present--exiting without sending response.",
                ),
                void this.ResetState()
              );
            console.log(
              "Button " + e + " clicked, sending OnMessageOverlayResponse.",
            ),
              null === s.Ay ||
                void 0 === s.Ay ||
                s.Ay.VRDashboardManager.OnMessageOverlayResponse(e),
              this.ResetState();
          }
          render() {
            return o.createElement(
              "div",
              { className: "MessageOverlayContainer" },
              o.createElement(
                c.W,
                { className: "MessageOverlayPanel" },
                o.createElement(
                  "div",
                  { className: "MessageOverlayTextPanel" },
                  o.createElement("h1", null, this.state.sCaptionText),
                  o.createElement("p", null, this.state.sMessageText),
                ),
                o.createElement(
                  "div",
                  { className: "MessageOverlayButtonContainer" },
                  this.state.sButtonTexts[0] &&
                    o.createElement(p, {
                      label: this.state.sButtonTexts[0],
                      onClick: () => {
                        this.ButtonClicked(s.Ox.ButtonPress_0);
                      },
                    }),
                  this.state.sButtonTexts[1] &&
                    o.createElement(p, {
                      label: this.state.sButtonTexts[1],
                      onClick: () => {
                        this.ButtonClicked(s.Ox.ButtonPress_1);
                      },
                    }),
                  this.state.sButtonTexts[2] &&
                    o.createElement(p, {
                      label: this.state.sButtonTexts[2],
                      onClick: () => {
                        this.ButtonClicked(s.Ox.ButtonPress_2);
                      },
                    }),
                  this.state.sButtonTexts[3] &&
                    o.createElement(p, {
                      label: this.state.sButtonTexts[3],
                      onClick: () => {
                        this.ButtonClicked(s.Ox.ButtonPress_3);
                      },
                    }),
                ),
              ),
            );
          }
        };
        (0, r.Cg)([l.o], m.prototype, "OnProcessQuit", null),
          (0, r.Cg)([l.o], m.prototype, "OnMessageOverlayCloseRequested", null),
          (0, r.Cg)([l.o], m.prototype, "OnRenderMessageOverlay", null),
          (0, r.Cg)([l.o], m.prototype, "ButtonClicked", null),
          (m = (0, r.Cg)([i.PA], m)),
          null === s.Ay ||
            void 0 === s.Ay ||
            s.Ay.VROverlay.SetWidthInMeters(
              s.Ay.VROverlay.ThisOverlayHandle(),
              1.92,
            ),
          null === s.Ay ||
            void 0 === s.Ay ||
            s.Ay.VROverlay.SetFlag(
              s.Ay.VROverlay.ThisOverlayHandle(),
              s.NB.NoDashboardTab,
              !0,
            ),
          null === s.Ay ||
            void 0 === s.Ay ||
            s.Ay.VROverlay.SetInputMethod(
              s.Ay.VROverlay.ThisOverlayHandle(),
              s.Rk.Mouse,
            ),
          (0, u.uV)(
            [],
            null === s.Ay || void 0 === s.Ay ? void 0 : s.Ay.GetSteamLanguage(),
          )
            .then(() => {
              a.H(document.getElementById("root")).render(
                o.createElement(m, null),
              );
            })
            .catch((e) =>
              console.error("Failed to initialize message Overlay:", e),
            );
      },
    },
    n = {};
  function r(e) {
    var o = n[e];
    if (void 0 !== o) return o.exports;
    var a = (n[e] = { exports: {} });
    return t[e].call(a.exports, a, a.exports, r), a.exports;
  }
  (r.m = t),
    (e = []),
    (r.O = (t, n, o, a) => {
      if (!n) {
        var i = 1 / 0;
        for (c = 0; c < e.length; c++) {
          for (var [n, o, a] = e[c], l = !0, s = 0; s < n.length; s++)
            (!1 & a || i >= a) && Object.keys(r.O).every((e) => r.O[e](n[s]))
              ? n.splice(s--, 1)
              : ((l = !1), a < i && (i = a));
          if (l) {
            e.splice(c--, 1);
            var u = o();
            void 0 !== u && (t = u);
          }
        }
        return t;
      }
      a = a || 0;
      for (var c = e.length; c > 0 && e[c - 1][2] > a; c--) e[c] = e[c - 1];
      e[c] = [n, o, a];
    }),
    (r.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return r.d(t, { a: t }), t;
    }),
    (r.d = (e, t) => {
      for (var n in t)
        r.o(t, n) &&
          !r.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (r.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (r.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e = { 868: 0, 57: 0, 527: 0, 500: 0 };
      r.O.j = (t) => 0 === e[t];
      var t = (t, n) => {
          var o,
            a,
            [i, l, s] = n,
            u = 0;
          if (i.some((t) => 0 !== e[t])) {
            for (o in l) r.o(l, o) && (r.m[o] = l[o]);
            if (s) var c = s(r);
          }
          for (t && t(n); u < i.length; u++)
            (a = i[u]), r.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
          return r.O(c);
        },
        n = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var o = r.O(void 0, [967, 991, 305, 527, 452, 170, 537, 797, 906, 500], () =>
    r(1583),
  );
  o = r.O(o);
})(); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/messageoverlay.js.map
