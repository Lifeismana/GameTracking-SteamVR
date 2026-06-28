var CLSTAMP = "10770080";
(() => {
  "use strict";
  var e,
    t = {
      6874: (e, t, n) => {
        var r,
          o = n(7813),
          a = n(6540),
          i = (r = a) && "object" == typeof r && "default" in r ? r.default : r,
          s = n(961),
          u = n(9888);
        if (!a.useState)
          throw new Error("mobx-react-lite requires React with Hooks support");
        if (!o.makeObservable)
          throw new Error(
            "mobx-react-lite@3 requires mobx at least version 6 to be available",
          );
        function l(e) {
          e();
        }
        function c(e) {
          e || (e = l), o.configure({ reactionScheduler: e });
        }
        function d(e) {
          return o.getDependencyTree(e);
        }
        var m = !1;
        function f(e) {
          m = e;
        }
        function h() {
          return m;
        }
        var p,
          g,
          y = new (
            "undefined" != typeof FinalizationRegistry
              ? FinalizationRegistry
              : (function () {
                  function e(e) {
                    var t = this;
                    (this.finalize = void 0),
                      (this.registrations = new Map()),
                      (this.sweepTimeout = void 0),
                      (this.sweep = function (e) {
                        void 0 === e && (e = 1e4),
                          clearTimeout(t.sweepTimeout),
                          (t.sweepTimeout = void 0);
                        var n = Date.now();
                        t.registrations.forEach(function (r, o) {
                          n - r.registeredAt >= e &&
                            (t.finalize(r.value), t.registrations.delete(o));
                        }),
                          t.registrations.size > 0 && t.scheduleSweep();
                      }),
                      (this.finalizeAllImmediately = function () {
                        t.sweep(0);
                      }),
                      (this.finalize = e);
                  }
                  var t = e.prototype;
                  return (
                    (t.register = function (e, t, n) {
                      this.registrations.set(n, {
                        value: t,
                        registeredAt: Date.now(),
                      }),
                        this.scheduleSweep();
                    }),
                    (t.unregister = function (e) {
                      this.registrations.delete(e);
                    }),
                    (t.scheduleSweep = function () {
                      void 0 === this.sweepTimeout &&
                        (this.sweepTimeout = setTimeout(this.sweep, 1e4));
                    }),
                    e
                  );
                })()
          )(function (e) {
            var t;
            null == (t = e.reaction) || t.dispose(), (e.reaction = null);
          });
        function v(e) {
          e.reaction = new o.Reaction("observer" + e.name, function () {
            (e.stateVersion = Symbol()),
              null == e.onStoreChange || e.onStoreChange();
          });
        }
        function _(e, t) {
          if ((void 0 === t && (t = "observed"), h())) return e();
          var n = i.useRef(null);
          if (!n.current) {
            var r = {
              reaction: null,
              onStoreChange: null,
              stateVersion: Symbol(),
              name: t,
              subscribe: function (e) {
                return (
                  y.unregister(r),
                  (r.onStoreChange = e),
                  r.reaction || (v(r), (r.stateVersion = Symbol())),
                  function () {
                    var e;
                    (r.onStoreChange = null),
                      null == (e = r.reaction) || e.dispose(),
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
          var o,
            a,
            s = n.current;
          if (
            (s.reaction || (v(s), y.register(n, s, s)),
            i.useDebugValue(s.reaction, d),
            u.useSyncExternalStore(s.subscribe, s.getSnapshot, s.getSnapshot),
            s.reaction.track(function () {
              try {
                o = e();
              } catch (e) {
                a = e;
              }
            }),
            a)
          )
            throw a;
          return o;
        }
        var S,
          b = "function" == typeof Symbol && Symbol.for,
          C =
            null !=
              (p =
                null ==
                (g = Object.getOwnPropertyDescriptor(function () {}, "name"))
                  ? void 0
                  : g.configurable) && p,
          w = b
            ? Symbol.for("react.forward_ref")
            : "function" == typeof a.forwardRef &&
              a.forwardRef(function (e) {
                return null;
              }).$$typeof,
          R = b
            ? Symbol.for("react.memo")
            : "function" == typeof a.memo &&
              a.memo(function (e) {
                return null;
              }).$$typeof,
          k = {
            $$typeof: !0,
            render: !0,
            compare: !0,
            type: !0,
            displayName: !0,
          };
        function O(e) {
          var t = e.children,
            n = e.render;
          t &&
            n &&
            console.error(
              "MobX Observer: Do not use children and render in the same time in `Observer`",
            );
          var r = t || n;
          return "function" != typeof r ? null : _(r);
        }
        function E(e) {
          var t = a.useState(function () {
            return o.observable(e, {}, { deep: !1 });
          })[0];
          return (
            o.runInAction(function () {
              Object.assign(t, e);
            }),
            t
          );
        }
        (O.displayName = "Observer"), c(s.unstable_batchedUpdates);
        var D = null != (S = y.finalizeAllImmediately) ? S : function () {};
        t.useObserver = function (e, t) {
          return void 0 === t && (t = "observed"), _(e, t);
        };
      },
      6035: (e, t, n) => {
        n.d(t, { P: () => m });
        var r,
          o,
          a = n(6540),
          i = n(3815),
          s = n(4452),
          u = "function" == typeof Symbol && Symbol.for,
          l =
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
          c = u
            ? Symbol.for("react.forward_ref")
            : "function" == typeof a.forwardRef &&
              (0, a.forwardRef)(function (e) {
                return null;
              }).$$typeof,
          d = u
            ? Symbol.for("react.memo")
            : "function" == typeof a.memo &&
              (0, a.memo)(function (e) {
                return null;
              }).$$typeof;
        function m(e, t) {
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
            u = e.displayName || e.name;
          if (
            c &&
            e.$$typeof === c &&
            ((r = !0), "function" != typeof (o = e.render))
          )
            throw new Error(
              "[mobx-react-lite] `render` property of ForwardRef was not a function",
            );
          var m,
            h,
            p = function (e, t) {
              return (0, s.q)(function () {
                return o(e, t);
              }, u);
            };
          return (
            (p.displayName = e.displayName),
            l &&
              Object.defineProperty(p, "name", {
                value: e.name,
                writable: !0,
                configurable: !0,
              }),
            e.contextTypes && (p.contextTypes = e.contextTypes),
            r && (p = (0, a.forwardRef)(p)),
            (p = (0, a.memo)(p)),
            (m = e),
            (h = p),
            Object.keys(m).forEach(function (e) {
              f[e] ||
                Object.defineProperty(
                  h,
                  e,
                  Object.getOwnPropertyDescriptor(m, e),
                );
            }),
            p
          );
        }
        var f = {
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
          s = n(3438),
          u = n(9888);
        function l(e) {
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
                  s.Y.unregister(r),
                  (r.onStoreChange = e),
                  r.reaction || (l(r), (r.stateVersion = Symbol())),
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
            m = n.current;
          if (
            (m.reaction || (l(m), s.Y.register(n, m, m)),
            o.useDebugValue(m.reaction, a.E),
            (0, u.useSyncExternalStore)(
              m.subscribe,
              m.getSnapshot,
              m.getSnapshot,
            ),
            m.reaction.track(function () {
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
      3438: (e, t, n) => {
        n.d(t, { Y: () => r });
        var r = new (n(2517).Xr)(function (e) {
          var t;
          null === (t = e.reaction) || void 0 === t || t.dispose(),
            (e.reaction = null);
        });
      },
      5287: (e, t) => {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          o = Symbol.for("react.fragment"),
          a = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          s = Symbol.for("react.provider"),
          u = Symbol.for("react.context"),
          l = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          m = Symbol.for("react.lazy"),
          f = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          p = Object.assign,
          g = {};
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        function v() {}
        function _(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        (y.prototype.isReactComponent = {}),
          (y.prototype.setState = function (e, t) {
            if ("object" != typeof e && "function" != typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (y.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (v.prototype = y.prototype);
        var S = (_.prototype = new v());
        (S.constructor = _), p(S, y.prototype), (S.isPureReactComponent = !0);
        var b = Array.isArray,
          C = Object.prototype.hasOwnProperty,
          w = { current: null },
          R = { key: !0, ref: !0, __self: !0, __source: !0 };
        function k(e, t, r) {
          var o,
            a = {},
            i = null,
            s = null;
          if (null != t)
            for (o in (void 0 !== t.ref && (s = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              C.call(t, o) && !R.hasOwnProperty(o) && (a[o] = t[o]);
          var u = arguments.length - 2;
          if (1 === u) a.children = r;
          else if (1 < u) {
            for (var l = Array(u), c = 0; c < u; c++) l[c] = arguments[c + 2];
            a.children = l;
          }
          if (e && e.defaultProps)
            for (o in (u = e.defaultProps)) void 0 === a[o] && (a[o] = u[o]);
          return {
            $$typeof: n,
            type: e,
            key: i,
            ref: s,
            props: a,
            _owner: w.current,
          };
        }
        function O(e) {
          return "object" == typeof e && null !== e && e.$$typeof === n;
        }
        var E = /\/+/g;
        function D(e, t) {
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
        function P(e, t, o, a, i) {
          var s = typeof e;
          ("undefined" !== s && "boolean" !== s) || (e = null);
          var u = !1;
          if (null === e) u = !0;
          else
            switch (s) {
              case "string":
              case "number":
                u = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    u = !0;
                }
            }
          if (u)
            return (
              (i = i((u = e))),
              (e = "" === a ? "." + D(u, 0) : a),
              b(i)
                ? ((o = ""),
                  null != e && (o = e.replace(E, "$&/") + "/"),
                  P(i, t, o, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (O(i) &&
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
                        (!i.key || (u && u.key === i.key)
                          ? ""
                          : ("" + i.key).replace(E, "$&/") + "/") +
                        e,
                    )),
                  t.push(i)),
              1
            );
          if (((u = 0), (a = "" === a ? "." : a + ":"), b(e)))
            for (var l = 0; l < e.length; l++) {
              var c = a + D((s = e[l]), l);
              u += P(s, t, o, c, i);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" != typeof e
                ? null
                : "function" == typeof (e = (f && e[f]) || e["@@iterator"])
                  ? e
                  : null;
            })(e)),
            "function" == typeof c)
          )
            for (e = c.call(e), l = 0; !(s = e.next()).done; )
              u += P((s = s.value), t, o, (c = a + D(s, l++)), i);
          else if ("object" === s)
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
          return u;
        }
        function I(e, t, n) {
          if (null == e) return e;
          var r = [],
            o = 0;
          return (
            P(e, r, "", "", function (e) {
              return t.call(n, e, o++);
            }),
            r
          );
        }
        function T(e) {
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
        var x = { current: null },
          F = { transition: null },
          M = {
            ReactCurrentDispatcher: x,
            ReactCurrentBatchConfig: F,
            ReactCurrentOwner: w,
          };
        function N() {
          throw Error(
            "act(...) is not supported in production builds of React.",
          );
        }
        (t.Children = {
          map: I,
          forEach: function (e, t, n) {
            I(
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
              I(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              I(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!O(e))
              throw Error(
                "React.Children.only expected to receive a single React element child.",
              );
            return e;
          },
        }),
          (t.Component = y),
          (t.Fragment = o),
          (t.Profiler = i),
          (t.PureComponent = _),
          (t.StrictMode = a),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M),
          (t.act = N),
          (t.cloneElement = function (e, t, r) {
            if (null == e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  ".",
              );
            var o = p({}, e.props),
              a = e.key,
              i = e.ref,
              s = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (s = w.current)),
                void 0 !== t.key && (a = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var u = e.type.defaultProps;
              for (l in t)
                C.call(t, l) &&
                  !R.hasOwnProperty(l) &&
                  (o[l] = void 0 === t[l] && void 0 !== u ? u[l] : t[l]);
            }
            var l = arguments.length - 2;
            if (1 === l) o.children = r;
            else if (1 < l) {
              u = Array(l);
              for (var c = 0; c < l; c++) u[c] = arguments[c + 2];
              o.children = u;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: a,
              ref: i,
              props: o,
              _owner: s,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: u,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: s, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = k),
          (t.createFactory = function (e) {
            var t = k.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: l, render: e };
          }),
          (t.isValidElement = O),
          (t.lazy = function (e) {
            return {
              $$typeof: m,
              _payload: { _status: -1, _result: e },
              _init: T,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = F.transition;
            F.transition = {};
            try {
              e();
            } finally {
              F.transition = t;
            }
          }),
          (t.unstable_act = N),
          (t.useCallback = function (e, t) {
            return x.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return x.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return x.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return x.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return x.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return x.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return x.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return x.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return x.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return x.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return x.current.useRef(e);
          }),
          (t.useState = function (e) {
            return x.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return x.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return x.current.useTransition();
          }),
          (t.version = "18.3.1");
      },
      6540: (e, t, n) => {
        e.exports = n(5287);
      },
      6090: (e, t, n) => {
        n.d(t, {
          $: () => O.$,
          $Z: () => O.$Z,
          Ay: () => E,
          CU: () => o.CU,
          Ci: () => g.C,
          Do: () => O.Do,
          Ee: () => O.Ee,
          Em: () => c.Em,
          Fb: () => o.Fb,
          Fi: () => y.Fi,
          Fz: () => O.Fz,
          GM: () => d.GM,
          GQ: () => k.GQ,
          GS: () => r.GS,
          Gz: () => k.Gz,
          HW: () => k.HW,
          I0: () => r.I0,
          IS: () => u.I,
          JZ: () => o.JZ,
          Jv: () => r.Jv,
          KI: () => O.KI,
          Kl: () => k.Kl,
          Ld: () => o.Ld,
          M9: () => r.M9,
          MQ: () => y.MQ,
          MV: () => k.MV,
          N: () => i.e,
          N1: () => p.N,
          NH: () => o.NH,
          O5: () => m.O,
          O6: () => o.O6,
          OH: () => k.OH,
          Oi: () => y.Oi,
          QB: () => o.QB,
          QR: () => O.QR,
          R$: () => k.R$,
          Se: () => o.Se,
          Uj: () => o.Uj,
          Vh: () => f.Vh,
          Wi: () => d.Wi,
          Wq: () => r.Wq,
          Xl: () => k.Xl,
          Xu: () => r.Xu,
          Y4: () => s.Y,
          YV: () => O.YV,
          Yu: () => O.Yu,
          ZP: () => O.ZP,
          Zk: () => y.Zk,
          _1: () => k._1,
          _8: () => O._8,
          _h: () => y._h,
          _n: () => r._n,
          aX: () => f.aX,
          b: () => k.b,
          b$: () => C.b,
          b4: () => v.b,
          cB: () => b.L,
          dL: () => l.d,
          ds: () => O.ds,
          e_: () => o.e_,
          en: () => O.en,
          eo: () => O.eo,
          f9: () => O.f9,
          fD: () => O.fD,
          fk: () => O.fk,
          gN: () => k.gN,
          k2: () => k.k2,
          kG: () => k.kG,
          ku: () => k.ku,
          lq: () => h.l,
          m$: () => v.m,
          mH: () => f.mH,
          mX: () => r.mX,
          mu: () => k.mu,
          nX: () => c.nX,
          ne: () => k.ne,
          nq: () => S.n,
          o3: () => y.o3,
          oN: () => o.oN,
          pM: () => k.pM,
          pg: () => r.pg,
          q5: () => o.q5,
          qF: () => o.qF,
          rF: () => u.H,
          rx: () => k.rx,
          sJ: () => _.$,
          sn: () => r.sn,
          t$: () => R.t,
          tx: () => o.tx,
          uC: () => w.u,
          uS: () => a.u,
          vx: () => o.vx,
          xO: () => y.xO,
          yW: () => O.yW,
        });
        var r = n(2824),
          o = n(6292),
          a = n(119),
          i = (n(4120), n(1230)),
          s = n(5830),
          u = n(6186),
          l = n(3361),
          c = (n(111), n(5723)),
          d = n(3496),
          m = n(5178),
          f = (n(428), n(9011), n(7350)),
          h = n(6847),
          p = n(5227),
          g = (n(10), n(1808)),
          y = n(7019),
          v = (n(1988), n(2527), n(9864)),
          _ = (n(4189), n(322), n(1977), n(6417)),
          S = n(2303),
          b = n(8715),
          C = (n(4397), n(5459)),
          w = n(8472),
          R = (n(1184), n(1321)),
          k = n(3725),
          O = n(4367);
        const E = VRHTML;
      },
      3725: (e, t, n) => {
        var r, o, a, i;
        function s() {
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
          GQ: () => P,
          Gz: () => l,
          HW: () => g,
          Kl: () => S,
          MV: () => a,
          OH: () => r,
          R$: () => s,
          Xl: () => v,
          _1: () => E,
          _E: () => u,
          b: () => _,
          gN: () => b,
          k2: () => R,
          kG: () => C,
          ku: () => m,
          mu: () => i,
          ne: () => c,
          pM: () => o,
          rx: () => k,
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
        let u = 0,
          l = 0,
          c = 4294967295;
        var d, m, f, h, p, g, y, v, _, S, b, C, w, R, k, O, E, D, P;
        !(function (e) {
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
        })(d || (d = {})),
          (function (e) {
            (e[(e.Activated = 0)] = "Activated"),
              (e[(e.Deactivated = 1)] = "Deactivated");
          })(m || (m = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"), (e[(e.Mouse = 1)] = "Mouse");
          })(f || (f = {})),
          (function (e) {
            (e[(e.Invalid = 0)] = "Invalid"),
              (e[(e.HMD = 1)] = "HMD"),
              (e[(e.Controller = 2)] = "Controller"),
              (e[(e.GenericTracker = 3)] = "GenericTracker"),
              (e[(e.TrackingReference = 4)] = "TrackingReference"),
              (e[(e.DisplayRedirect = 5)] = "DisplayRedirect");
          })(h || (h = {})),
          (function (e) {
            (e[(e.Unknown = 0)] = "Unknown"),
              (e[(e.NVIDIA = 1)] = "NVIDIA"),
              (e[(e.AMD = 2)] = "AMD");
          })(p || (p = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.Starting = 1)] = "Starting"),
              (e[(e.Quitting = 2)] = "Quitting"),
              (e[(e.Running = 3)] = "Running"),
              (e[(e.Waiting = 4)] = "Waiting");
          })(g || (g = {})),
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
          })(y || (y = {})),
          (function (e) {
            (e[(e.Normal = 0)] = "Normal"),
              (e[(e.Password = 1)] = "Password"),
              (e[(e.Submit = 2)] = "Submit");
          })(v || (v = {})),
          (function (e) {
            (e[(e.SingleLine = 0)] = "SingleLine"),
              (e[(e.MultipleLines = 1)] = "MultipleLines");
          })(_ || (_ = {})),
          (function (e) {
            (e[(e.LaserMouse = 1)] = "LaserMouse"),
              (e[(e.RoomViewFullyOccludingApp = 2)] =
                "RoomViewFullyOccludingApp"),
              (e[(e.DisplaySuppressed = 4)] = "DisplaySuppressed"),
              (e[(e.SystemButtonDown = 8)] = "SystemButtonDown"),
              (e[(e.DriverIsDrawingControllers = 16)] =
                "DriverIsDrawingControllers"),
              (e[(e.DriverRequestsApplicationPause = 32)] =
                "DriverRequestsApplicationPause"),
              (e[(e.DriverRequestsReducedRendering = 64)] =
                "DriverRequestsReducedRendering"),
              (e[(e.DashboardTutorial = 128)] = "DashboardTutorial"),
              (e[(e.GamepadMode = 512)] = "GamepadMode"),
              (e[(e.SystemKeyboardPrivacy = 1024)] = "SystemKeyboardPrivacy");
          })(S || (S = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.ThisSteamVR = 1)] = "ThisSteamVR"),
              (e[(e.AnotherSteamVR = 2)] = "AnotherSteamVR"),
              (e[(e.AnotherRuntime = 3)] = "AnotherRuntime"),
              (e[(e.ThisSteamVR64BitOnly = 4)] = "ThisSteamVR64BitOnly"),
              (e[(e.Error = -1)] = "Error");
          })(b || (b = {})),
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
          })(C || (C = {})),
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
          })(w || (w = {})),
          (function (e) {
            e[(e.Hostname = 0)] = "Hostname";
          })(R || (R = {})),
          (function (e) {
            (e[(e.Unavailable = 0)] = "Unavailable"),
              (e[(e.Active = 1)] = "Active"),
              (e[(e.Off = 2)] = "Off");
          })(k || (k = {})),
          (function (e) {
            (e[(e.Default = 1)] = "Default"), (e[(e.Floor = 2)] = "Floor");
          })(O || (O = {})),
          (function (e) {
            (e[(e.Inactive = 0)] = "Inactive"),
              (e[(e.PendingReset = 1)] = "PendingReset"),
              (e[(e.PendingResetIfNeeded = 2)] = "PendingResetIfNeeded"),
              (e[(e.Default = 3)] = "Default"),
              (e[(e.CV = 4)] = "CV"),
              (e[(e.Manual = 5)] = "Manual");
          })(E || (E = {})),
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
          })(D || (D = {})),
          (function (e) {
            (e[(e.Small = 0)] = "Small"),
              (e[(e.Medium = 1)] = "Medium"),
              (e[(e.Large = 2)] = "Large"),
              (e[(e.Gigantic = 3)] = "Gigantic"),
              (e[(e.Standing = 4)] = "Standing");
          })(P || (P = {}));
      },
      3714: (e, t, n) => {
        n.d(t, { A0: () => r, we: () => o });
        n(6540), n(2505);
        class r {
          constructor() {
            (this.m_mapTokens = new Map()),
              (this.m_mapFallbackTokens = new Map());
          }
          InitFromObjects(e, t, n, r) {
            this.m_mapTokens.clear();
            let o = [t, e, r, n];
            for (let e in o) {
              let t = o[e];
              for (let e in t) {
                let n = t[e];
                for (let e in n) {
                  let t = e.toLowerCase();
                  this.m_mapTokens.has(t) || this.m_mapTokens.set(t, n[e]);
                }
              }
            }
          }
          LocalizeString(e) {
            if (!e || 0 == e.length || "#" != e.charAt(0)) return "";
            let t = this.m_mapTokens.get(e.substring(1).toLowerCase());
            return void 0 === t ? "" : t;
          }
          LocalizeStringFromFallback(e) {
            if (!e || 0 == e.length || "#" != e.charAt(0)) return "";
            let t = this.m_mapFallbackTokens.get(e.substring(1).toLowerCase());
            return void 0 === t ? "" : t;
          }
          static GetLocale() {
            const e = navigator.languages[0];
            try {
              const t =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.GetSystemLocale();
              if (!t) return e;
              r.s_Date.toLocaleTimeString(t);
              return t;
            } catch (t) {
              return e;
            }
          }
        }
        function o(e, ...t) {
          let n = a.LocalizeString(e);
          return n
            ? (t.length > 0 &&
                (n = n.replace(/%(\d+)\$s/g, function (e, n) {
                  return void 0 !== t[n - 1] ? String(t[n - 1]) : e;
                })),
              n)
            : e;
        }
        r.s_Date = new Date();
        const a = new r();
        window.LocalizationManager = a;
      },
      4728: (e, t, n) => {
        function r(e, t, n) {
          return null == e || isNaN(e) ? e : Math.max(t, Math.min(n, e));
        }
        n.d(t, { OQ: () => r });
      },
      9513: (e, t, n) => {
        var r = n(1635),
          o = n(6540),
          a = n(5338),
          i = n(3236),
          s = n(6090),
          u = n(7813),
          l = n(1370),
          c = n(1333);
        class d {
          constructor(e, t, n) {
            (this.keyCode = e), (this.shift = t), (this.control = n);
          }
          equals(e) {
            return (
              e &&
              this.keyCode === e.keyCode &&
              this.shift === e.shift &&
              this.control === e.control
            );
          }
          get isValid() {
            return (
              ((e = this.keyCode) > 47 && e < 58) ||
              32 == e ||
              13 == e ||
              (e > 64 && e < 91) ||
              (e > 95 && e < 112) ||
              (e > 185 && e < 193) ||
              (e > 218 && e < 223) ||
              (function (e) {
                return e >= 37 && e <= 40;
              })(this.keyCode)
            );
            var e;
          }
          get character() {
            switch (this.keyCode) {
              case 8:
                return "Backspace";
              case 9:
                return "Tab";
              case 13:
                return "Enter";
              case 16:
                return "Shift";
              case 17:
                return "Ctrl";
              case 18:
                return "Alt";
              case 19:
                return "Pause/Break";
              case 20:
                return "Caps Lock";
              case 27:
                return "Esc";
              case 32:
                return "Space";
              case 33:
                return "Page Up";
              case 34:
                return "Page Down";
              case 35:
                return "End";
              case 36:
                return "Home";
              case 37:
                return "Left";
              case 38:
                return "Up";
              case 39:
                return "Right";
              case 40:
                return "Down";
              case 45:
                return "Insert";
              case 46:
                return "Delete";
              case 91:
                return "Windows";
              case 93:
                return "Right Click";
              case 96:
                return "Numpad 0";
              case 97:
                return "Numpad 1";
              case 98:
                return "Numpad 2";
              case 99:
                return "Numpad 3";
              case 100:
                return "Numpad 4";
              case 101:
                return "Numpad 5";
              case 102:
                return "Numpad 6";
              case 103:
                return "Numpad 7";
              case 104:
                return "Numpad 8";
              case 105:
                return "Numpad 9";
              case 106:
                return "Numpad *";
              case 107:
                return "Numpad +";
              case 109:
                return "Numpad -";
              case 110:
                return "Numpad .";
              case 111:
                return "Numpad /";
              case 112:
                return "F1";
              case 113:
                return "F2";
              case 114:
                return "F3";
              case 115:
                return "F4";
              case 116:
                return "F5";
              case 117:
                return "F6";
              case 118:
                return "F7";
              case 119:
                return "F8";
              case 120:
                return "F9";
              case 121:
                return "F10";
              case 122:
                return "F11";
              case 123:
                return "F12";
              case 144:
                return "Num Lock";
              case 145:
                return "Scroll Lock";
              case 182:
                return "My Computer";
              case 183:
                return "My Calculator";
              case 186:
                return ";";
              case 187:
                return "=";
              case 188:
                return ",";
              case 189:
                return "-";
              case 190:
                return ".";
              case 191:
                return "/";
              case 192:
                return "`";
              case 219:
                return "[";
              case 220:
                return "\\";
              case 221:
                return "]";
              case 222:
                return "'";
              default:
                return String.fromCharCode(this.keyCode);
            }
          }
          static fromSerializedString(e) {
            let t = e.split(",");
            if (3 !== t.length) return null;
            let n = Number.parseInt(t[0]),
              r = Number.parseInt(t[1]),
              o = Number.parseInt(t[2]);
            return new d(n, r > 0, o > 0);
          }
          toSerializedString() {
            return [
              this.keyCode,
              this.shift ? 1 : 0,
              this.control ? 1 : 0,
            ].join(",");
          }
          toString() {
            let e = this.character;
            return (
              this.shift && (e = "shift + " + e),
              this.control && (e = "ctrl + " + e),
              e
            );
          }
          render() {
            return o.createElement(
              "span",
              null,
              this.control && "control",
              this.control &&
                o.createElement("span", { className: "Plus" }, " + "),
              this.shift && "shift",
              this.shift &&
                o.createElement("span", { className: "Plus" }, " + "),
              this.character,
            );
          }
        }
        class m {
          constructor(e, t) {
            (this.shortcut = void 0),
              (this.sCommand = e),
              (this.sMailbox = t),
              (this.refButton = o.createRef()),
              (0, u.makeObservable)(this);
          }
        }
        (0, r.Cg)([u.observable], m.prototype, "shortcut", void 0);
        class f {
          dumpShortcuts() {
            let e = ["Defaults:"];
            this.rCommands.forEach((t) => {
              t.shortcut &&
                e.push(
                  '"' +
                    t.sCommand +
                    '": new KeyboardShortcut( ' +
                    t.shortcut.keyCode +
                    ", " +
                    (t.shortcut.shift ? "true" : "false") +
                    ", " +
                    (t.shortcut.control ? "true" : "false") +
                    " ), // " +
                    t.shortcut.toString().toLowerCase(),
                );
            }),
              console.log(e.join("\n"));
          }
          constructor(e) {
            (this.rCommands = []),
              (this.rCommands = e),
              (window.dumpShortcuts = this.dumpShortcuts);
          }
          initializeKeyboardShortcuts() {
            return (0, r.sH)(this, void 0, void 0, function* () {
              this.resetCommandShortcuts(!1), yield this.loadCommandShortcuts();
            });
          }
          getCommandForShortcut(e) {
            if (!e) return null;
            let t = this.rCommands.filter((t) => e.equals(t.shortcut));
            return t.length > 0 ? t[0] : null;
          }
          resetCommandShortcuts(e) {
            this.rCommands.forEach((e) => this.resetCommandShortcut(e, !1)),
              e && this.saveCommandShortcuts();
          }
          getCommandForName(e) {
            let t = this.rCommands.filter((t) => t.sCommand === e);
            return t.length > 0 ? t[0] : null;
          }
          loadCommandShortcuts() {
            return (0, r.sH)(this, void 0, void 0, function* () {
              let e;
              try {
                e = yield c.HR.GetSettingsValue(f.k_sPropDebugCommandShortcuts);
              } catch (e) {
                return;
              }
              e &&
                e.split(";").forEach((e) => {
                  let t = e.split(":");
                  if (2 !== t.length) return;
                  let n = this.getCommandForName(t[0]),
                    r = d.fromSerializedString(t[1]);
                  n && r && this.bindCommandToShortcut(n, r, !1);
                });
            });
          }
          saveCommandShortcuts() {
            let e = this.rCommands
              .filter(
                (e) =>
                  !(
                    !e.shortcut ||
                    (e.sCommand in f.k_DefaultShortcuts &&
                      f.k_DefaultShortcuts[e.sCommand].equals(e.shortcut))
                  ),
              )
              .map((e) => e.sCommand + ":" + e.shortcut.toSerializedString())
              .join(";");
            c.HR.SetSettingsStringValueWithoutSchema(
              f.k_sPropDebugCommandShortcuts,
              e,
            );
          }
          bindCommandToShortcut(e, t, n) {
            let r = this.getCommandForShortcut(t);
            r && (r.shortcut = null),
              (e.shortcut = t),
              n && this.saveCommandShortcuts();
          }
          resetCommandShortcut(e, t) {
            let n = null;
            e.sCommand in f.k_DefaultShortcuts &&
              (n = f.k_DefaultShortcuts[e.sCommand]),
              this.bindCommandToShortcut(e, n, t);
          }
        }
        (f.k_sPropDebugCommandShortcuts =
          "/settings/steamvr/debugCommandShortcuts"),
          (f.k_DefaultShortcuts = {
            application_render_model_visibility_toggle: new d(69, !1, !1),
            application_throttling_frame_count_cycle: new d(82, !1, !1),
            application_throttling_toggle: new d(82, !0, !1),
            async_mode_running_start_toggle: new d(85, !1, !1),
            async_mode_toggle: new d(65, !0, !1),
            black_clamp_toggle: new d(75, !1, !1),
            camera_room_view_toggle: new d(67, !1, !1),
            collision_bounds_center_marker_toggle: new d(73, !1, !1),
            collision_bounds_ground_perimeter_toggle: new d(80, !1, !1),
            collision_bounds_play_space_toggle: new d(79, !1, !1),
            collision_bounds_style_cycle: new d(72, !1, !1),
            debug_counter_increment: new d(32, !1, !1),
            flip_universe_transform_toggle: new d(70, !0, !1),
            gpu_profiler_capture: new d(86, !1, !1),
            grid_mode_cycle: new d(71, !1, !1),
            ipd_offset_decrement: new d(189, !1, !1),
            ipd_offset_increment: new d(187, !1, !1),
            latency_testing_toggle: new d(190, !0, !1),
            motion_vector_debug_mode_toggle: new d(74, !0, !1),
            pixel_line_double_sim_toggle: new d(89, !1, !1),
            reflection_map_reload: new d(88, !1, !1),
            screenshot_all_request: new d(83, !0, !1),
            screenshot_request: new d(83, !1, !1),
            seated_position_reset: new d(90, !1, !1),
            shaders_force_reload: new d(220, !1, !1),
            simulate_3dof_toggle: new d(84, !1, !1),
            single_frame_stepping_request: new d(190, !1, !1),
            user_brightness_decrement: new d(186, !1, !1),
            user_brightness_increment: new d(222, !1, !1),
            vsync_to_photons_big_decrement: new d(219, !0, !1),
            vsync_to_photons_big_increment: new d(221, !0, !1),
            vsync_to_photons_decrement: new d(219, !1, !1),
            vsync_to_photons_increment: new d(221, !1, !1),
          }),
          (0, r.Cg)([i.o], f.prototype, "dumpShortcuts", null),
          (0, r.Cg)([i.o], f.prototype, "resetCommandShortcut", null);
        let h = class extends o.Component {
          constructor(e) {
            super(e),
              (this.previousOnKeyDown = null),
              (this.refSearchInput = null),
              (this.state = {
                commands: new f([]),
                editingCommand: null,
                sSearch: sessionStorage.getItem("search") || "",
                bFocused: document.hasFocus(),
              }),
              (this.refSearchInput = o.createRef()),
              c.HR.Init(!1),
              (this.mailbox = new s._n()),
              this.mailbox.Init("debugcommands").then(() =>
                (0, r.sH)(this, void 0, void 0, function* () {
                  console.log("[debugcommands] Requesting commands..");
                  let e = { type: "get_debug_commands" },
                    t = yield this.mailbox.SendMessageAndWaitForResponse(
                      s.Wq,
                      e,
                      "get_debug_commands_response",
                    ),
                    n = yield this.mailbox.SendMessageAndWaitForResponse(
                      s.pg,
                      e,
                      "get_debug_commands_response",
                    ),
                    r = t.commands.concat(n.commands);
                  try {
                    if (
                      yield c.HR.GetSettingsValue("/settings/steamvr/usePrism")
                    ) {
                      let t = yield this.mailbox.SendMessageAndWaitForResponse(
                        "prism_mailbox",
                        e,
                        "get_debug_commands_response",
                      );
                      r = r.concat(t.commands);
                    }
                  } catch (e) {}
                  let o = new f(r.map((e) => new m(e.command, e.mailbox)));
                  yield o.initializeKeyboardShortcuts(),
                    this.setState({ commands: o });
                }),
              );
          }
          componentDidMount() {
            (this.previousOnKeyDown = window.onkeypress),
              (window.onkeydown = this.onKeyDown),
              window.addEventListener("focus", this.onWindowFocus),
              window.addEventListener("blur", this.onWindowBlur);
          }
          componentWillUnmount() {
            (window.onkeydown = this.previousOnKeyDown),
              window.removeEventListener("focus", this.onWindowFocus),
              window.removeEventListener("blur", this.onWindowBlur);
          }
          onWindowFocus() {
            setTimeout(() => this.setState({ bFocused: !0 }), 0);
          }
          onWindowBlur() {
            setTimeout(() => this.setState({ bFocused: !1 }), 0),
              this.endEdit();
          }
          startEdit(e) {
            this.setState({ editingCommand: e });
          }
          endEdit() {
            this.setState({ editingCommand: null });
          }
          sendDebugCommand(e) {
            console.log("Sending debug command: " + e.sCommand),
              e.refButton.current &&
                (e.refButton.current.classList.add("Active"),
                setTimeout(() => {
                  e.refButton.current.classList.remove("Active");
                }, 150));
            let t = { type: e.sCommand };
            this.mailbox.SendMessage(e.sMailbox, t);
          }
          onKeyDown(e) {
            if (
              this.refSearchInput.current &&
              this.refSearchInput.current === document.activeElement
            )
              return void (
                "Escape" === e.key && this.refSearchInput.current.blur()
              );
            if ("Escape" === e.key && this.isEditing)
              return void this.endEdit();
            let t = new d(e.keyCode, e.shiftKey, e.ctrlKey);
            if (t.isValid) {
              if (this.isEditing)
                this.state.commands.bindCommandToShortcut(
                  this.state.editingCommand,
                  t,
                  !0,
                ),
                  this.endEdit();
              else {
                let e = this.state.commands.getCommandForShortcut(t);
                e && this.sendDebugCommand(e);
              }
              switch (e.keyCode) {
                case 37:
                case 38:
                case 39:
                case 40:
                case 32:
                  e.preventDefault();
              }
            }
          }
          get isEditing() {
            return null !== this.state.editingCommand;
          }
          setSearch(e) {
            sessionStorage.setItem("search", e), this.setState({ sSearch: e });
          }
          onSearchChanged() {
            this.refSearchInput.current &&
              this.setSearch(this.refSearchInput.current.value);
          }
          clearSearch() {
            this.refSearchInput.current &&
              ((this.refSearchInput.current.value = ""),
              setTimeout(() => this.refSearchInput.current.focus(), 0)),
              this.setSearch("");
          }
          onResetShortcuts() {
            this.state.commands.resetCommandShortcuts(!0);
          }
          render() {
            let e = ["DebugCommandsList"];
            return (
              this.isEditing && e.push("Editing"),
              o.createElement(
                "div",
                { className: "DebugCommands" },
                o.createElement(
                  "div",
                  { className: "Header" },
                  o.createElement(
                    "div",
                    { className: "InnerContainer" },
                    o.createElement("input", {
                      type: "text",
                      placeholder: "Search debug commands",
                      ref: this.refSearchInput,
                      onChange: this.onSearchChanged,
                      value: this.state.sSearch || "",
                    }),
                    this.state.sSearch &&
                      o.createElement(
                        "div",
                        {
                          className: "ClearSearchButton",
                          onClick: this.clearSearch,
                        },
                        "×",
                      ),
                    o.createElement(
                      "div",
                      {
                        className: "ButtonControl",
                        onClick: this.onResetShortcuts,
                      },
                      o.createElement("span", null, "Reset Shortcuts"),
                    ),
                  ),
                ),
                o.createElement(
                  "div",
                  { className: e.join(" ") },
                  this.state.commands.rCommands
                    .filter(
                      (e) =>
                        !this.state.sSearch ||
                        e.sCommand
                          .toLowerCase()
                          .indexOf(this.state.sSearch.toLocaleLowerCase()) >= 0,
                    )
                    .map((e) => {
                      let t = ["ButtonControl", "DebugCommandButton"],
                        n = this.state.editingCommand === e;
                      n && t.push("Editing");
                      let r = !!e.shortcut;
                      t.push(r ? "Bound" : "Unbound");
                      let a = o.createElement("span", null, "unbound");
                      return (
                        n
                          ? (a = o.createElement(
                              "span",
                              null,
                              "type shortcut...",
                            ))
                          : e.shortcut && (a = e.shortcut.render()),
                        o.createElement(
                          "div",
                          {
                            key: e.sCommand,
                            ref: e.refButton,
                            onClick: () => this.sendDebugCommand(e),
                            className: t.join(" "),
                          },
                          o.createElement(
                            "div",
                            { className: "CommandName" },
                            e.sCommand,
                          ),
                          o.createElement(
                            "div",
                            {
                              className: "KeyboardShortcut",
                              onClick: (t) => {
                                t.stopPropagation(), this.startEdit(e);
                              },
                            },
                            a,
                          ),
                        )
                      );
                    }),
                ),
                this.isEditing &&
                  o.createElement("div", {
                    className: "EditingFade",
                    onClick: this.endEdit,
                  }),
                !this.state.bFocused &&
                  o.createElement(
                    "div",
                    { className: "Footer" },
                    o.createElement(
                      "h1",
                      null,
                      "Click to enable keyboard shortcuts",
                    ),
                  ),
              )
            );
          }
        };
        (0, r.Cg)([i.o], h.prototype, "onWindowFocus", null),
          (0, r.Cg)([i.o], h.prototype, "onWindowBlur", null),
          (0, r.Cg)([i.o], h.prototype, "endEdit", null),
          (0, r.Cg)([i.o], h.prototype, "onKeyDown", null),
          (0, r.Cg)([u.computed], h.prototype, "isEditing", null),
          (0, r.Cg)([i.o], h.prototype, "onSearchChanged", null),
          (0, r.Cg)([i.o], h.prototype, "clearSearch", null),
          (0, r.Cg)([i.o], h.prototype, "onResetShortcuts", null),
          (h = (0, r.Cg)([l.PA], h)),
          a.H(document.getElementById("root")).render(o.createElement(h, null)),
          (window.document.title = "Debug Commands");
      },
      9383: (e, t, n) => {
        n.d(t, {
          CL: () => C,
          JP: () => r,
          JQ: () => b,
          P9: () => S,
          gU: () => w,
          sj: () => _,
        });
        var r,
          o = n(1635),
          a = n(7813),
          i = n(296),
          s = n(6090),
          u = n(6540),
          l = n(3606),
          c = n(921),
          d = n(7727),
          m = n(3779),
          f = n(1651),
          h = n(9961),
          p = n(776),
          g = n(4007),
          y = n(2741),
          v = n(1391);
        !(function (e) {
          (e[(e.Alive = 0)] = "Alive"), (e[(e.Destroyed = 1)] = "Destroyed");
        })(r || (r = {}));
        class _ {
          get OnDestroyed() {
            return this.m_OnDestroyed;
          }
          get frame() {
            return this.m_Frame;
          }
          get pageID() {
            return this.m_unPageID;
          }
          get state() {
            return this.m_eState;
          }
          get summonOverlayKey() {
            return this.m_sSummonOverlayKey;
          }
          get isExternalDashboardOverlay() {
            return !!this.m_bExternalDashboardOverlay;
          }
          get isActivePage() {
            return this.m_Frame.activePageID === this.m_unPageID;
          }
          get isActiveAndVisiblePage() {
            return this.isActivePage && this.frame.isCurrentlyVisible;
          }
          get mountableID() {
            return `frame:${this.frame.frameID}:page:${this.pageID}:mountable`;
          }
          get latestContentSize() {
            return this.size.latestContentSize;
          }
          get logPrefix() {
            let e = this.frame.title;
            return (
              e.length > y.kr && (e = e.substring(0, y.kr - 3) + "..."),
              `${this.frame.frameID}[${this.pageID}] "${e}"`
            );
          }
          RegisterComponent(e) {
            this.m_setComponents.add(e);
          }
          constructor(e, t, n) {
            (this.props = void 0),
              (this.m_eState = r.Alive),
              (this.m_OnDestroyed = new f.l()),
              (this.m_sSummonOverlayKey = void 0),
              (this.m_bExternalDashboardOverlay = !1),
              (this.m_mainPanel = void 0),
              (this.Log = new p.wd("Frame", () => this.logPrefix)),
              (this.m_setComponents = new Set()),
              (this.keyboard = new m.Y(this)),
              (this.sharing = void 0),
              (this.size = new h.wP(this)),
              (this.focus = new v.v(this)),
              (this.m_Frame = e),
              (this.m_unPageID = t),
              (this.props = n),
              (0, a.makeObservable)(this);
          }
          Init() {
            for (const e of this.m_setComponents) e.Init();
          }
          DestroyPage() {
            this.m_eState != r.Destroyed &&
              ((this.m_eState = r.Destroyed),
              this.m_OnDestroyed.Dispatch(),
              this.m_OnDestroyed.ClearAllCallbacks());
          }
          SetSummonOverlayKey(e) {
            this.m_sSummonOverlayKey = e;
          }
          SetIsExternalDashboardOverlay(e) {
            this.m_bExternalDashboardOverlay = e;
          }
          SetMainPanel(e) {
            if (!e) return { Unset: () => {} };
            this.m_mainPanel = e;
            const t = this.size.SetMainPanel(e).Unset;
            return {
              Unset: () => {
                (this.m_mainPanel = void 0), t();
              },
            };
          }
          get mainPanelID() {
            if (this.m_mainPanel) {
              const e = this.m_mainPanel.getID();
              if (null == e) return;
              return (0, s.nX)(l.C6, e);
            }
            if (this.isExternalDashboardOverlay) {
              if (null == this.summonOverlayKey) return;
              return (0, s.nX)(l.cb, this.summonOverlayKey) + "_Panel";
            }
          }
          get mainPanelSGID() {
            var e;
            return this.m_mainPanel
              ? this.m_mainPanel.getSGID()
              : (this.isExternalDashboardOverlay &&
                  null != this.summonOverlayKey &&
                  (null === (e = g.Q.GetOverlayInfo(this.summonOverlayKey)) ||
                  void 0 === e
                    ? void 0
                    : e.unStandalonePanelSGID)) ||
                  void 0;
          }
          GetPanelAnchorID(e) {
            if (!this.isExternalDashboardOverlay)
              return `frame:${this.frame.frameID}:page:${this.pageID}:anchor:${e}`;
            {
              if (null == this.summonOverlayKey) return;
              const t = (0, s.nX)(l.cb, this.summonOverlayKey);
              switch (e) {
                case s.Oi.TopCenter:
                  return t + "_TopCenter";
                case s.Oi.CenterLeft:
                  return t + "_CenterLeft";
                case s.Oi.CenterRight:
                  return t + "_CenterRight";
                case s.Oi.BottomCenter:
                  return t + "_BottomCenter";
                case s.Oi.BottomRight:
                  return t + "_BottomRight";
              }
            }
          }
        }
        (0, o.Cg)([a.observable], _.prototype, "props", void 0),
          (0, o.Cg)([a.observable], _.prototype, "m_eState", void 0),
          (0, o.Cg)([a.observable], _.prototype, "m_sSummonOverlayKey", void 0),
          (0, o.Cg)(
            [a.observable],
            _.prototype,
            "m_bExternalDashboardOverlay",
            void 0,
          ),
          (0, o.Cg)([a.observable], _.prototype, "m_mainPanel", void 0),
          (0, o.Cg)([a.computed], _.prototype, "state", null),
          (0, o.Cg)([a.computed], _.prototype, "summonOverlayKey", null),
          (0, o.Cg)(
            [a.computed],
            _.prototype,
            "isExternalDashboardOverlay",
            null,
          ),
          (0, o.Cg)([a.computed], _.prototype, "isActivePage", null),
          (0, o.Cg)([a.computed], _.prototype, "isActiveAndVisiblePage", null),
          (0, o.Cg)([a.computed], _.prototype, "mountableID", null),
          (0, o.Cg)([a.computed], _.prototype, "latestContentSize", null),
          (0, o.Cg)([a.computed], _.prototype, "logPrefix", null),
          (0, o.Cg)([a.action], _.prototype, "DestroyPage", null),
          (0, o.Cg)([a.action], _.prototype, "SetSummonOverlayKey", null),
          (0, o.Cg)(
            [a.action],
            _.prototype,
            "SetIsExternalDashboardOverlay",
            null,
          ),
          (0, o.Cg)([a.action], _.prototype, "SetMainPanel", null),
          (0, o.Cg)([a.computed], _.prototype, "mainPanelID", null),
          (0, o.Cg)([a.computed], _.prototype, "mainPanelSGID", null);
        const S = u.forwardRef(function (e, t) {
            const { children: n, summonOverlayKey: r } = e,
              { frame: o } = (0, d.N)(),
              l = u.useMemo(() => o.CreatePage(e), [o]);
            u.useLayoutEffect(() =>
              (0, a.runInAction)(() => {
                l.props = e;
              }),
            ),
              u.useEffect(() => l.SetSummonOverlayKey(r), [l, o, r]),
              (0, c.D5)(t, l),
              u.useEffect(() => (l.Init(), () => l.DestroyPage()), [l]);
            const m = (0, i.q3)(() => l.mountableID);
            return u.createElement(
              d.t.Provider,
              { value: { frame: o, page: l } },
              u.createElement(s.IS, { id: m }, n),
            );
          }),
          b = u.forwardRef(function (e, t) {
            var n, r;
            const {
                requireExternalOverlay: a = !0,
                overlayKey: m,
                componentProps: f,
              } = e,
              h = (0, o.Tt)(e, [
                "requireExternalOverlay",
                "overlayKey",
                "componentProps",
              ]),
              { frame: p } = (0, d.N)(),
              y = u.useCallback(
                (e) => {
                  null == e || e.SetIsExternalDashboardOverlay(!0),
                    (0, c.cZ)(t, e);
                },
                [t],
              ),
              v = (0, i.q3)(() => p.curvature.curvatureTransformOriginID),
              _ = (0, i.q3)(() => g.Q.GetOverlayInfo(m)),
              b =
                null !== (n = null == _ ? void 0 : _.unFlags) && void 0 !== n
                  ? n
                  : 0,
              C = (16 & b) > 0,
              w = (1073741824 & b) > 0;
            return a && !_
              ? null
              : u.createElement(
                  S,
                  Object.assign({}, h, {
                    summonOverlayKey:
                      null !== (r = e.summonOverlayKey) && void 0 !== r ? r : m,
                    ref: y,
                    componentProps: Object.assign(Object.assign({}, f), {
                      keyboard: Object.assign(
                        { overlayKeyForKeyboardInput: m },
                        null == f ? void 0 : f.keyboard,
                      ),
                      focus: Object.assign(
                        {
                          vrClientPID: C ? _.unClientPID : void 0,
                          steamInputAppID: w ? _.unSteamInputAppID : void 0,
                        },
                        null == f ? void 0 : f.focus,
                      ),
                    }),
                  }),
                  u.createElement(s.rF, { mountedId: (0, s.nX)(l.cb, m) }),
                  u.createElement(s.dL, {
                    id: (0, s.nX)(l.cb, m) + "_CurvatureOrigin",
                    parent_id: v,
                  }),
                  h.children,
                );
          });
        function C(e) {
          const { page: t } = (0, d.N)();
          if ((0, i.q3)(() => (null == t ? void 0 : t.isActiveAndVisiblePage)))
            return u.createElement(u.Fragment, null, e.children);
        }
        function w(e) {
          const { frame: t, page: n } = (0, d.N)();
          if (t && n && !n.isExternalDashboardOverlay)
            return u.createElement(
              u.Fragment,
              null,
              y.i_.map((e) =>
                u.createElement(s.Ci, {
                  key: e,
                  id: n.GetPanelAnchorID(e),
                  location: e,
                }),
              ),
            );
        }
      },
      8493: (e, t, n) => {
        var r = n(6540);
        var o =
            "function" == typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e == 1 / t)) ||
                    (e != e && t != t)
                  );
                },
          a = r.useState,
          i = r.useEffect,
          s = r.useLayoutEffect,
          u = r.useDebugValue;
        function l(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !o(e, n);
          } catch (e) {
            return !0;
          }
        }
        var c =
          "undefined" == typeof window ||
          void 0 === window.document ||
          void 0 === window.document.createElement
            ? function (e, t) {
                return t();
              }
            : function (e, t) {
                var n = t(),
                  r = a({ inst: { value: n, getSnapshot: t } }),
                  o = r[0].inst,
                  c = r[1];
                return (
                  s(
                    function () {
                      (o.value = n),
                        (o.getSnapshot = t),
                        l(o) && c({ inst: o });
                    },
                    [e, n, t],
                  ),
                  i(
                    function () {
                      return (
                        l(o) && c({ inst: o }),
                        e(function () {
                          l(o) && c({ inst: o });
                        })
                      );
                    },
                    [e],
                  ),
                  u(n),
                  n
                );
              };
        t.useSyncExternalStore =
          void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : c;
      },
      9888: (e, t, n) => {
        e.exports = n(8493);
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
          for (var [n, o, a] = e[c], s = !0, u = 0; u < n.length; u++)
            (!1 & a || i >= a) && Object.keys(r.O).every((e) => r.O[e](n[u]))
              ? n.splice(u--, 1)
              : ((s = !1), a < i && (i = a));
          if (s) {
            e.splice(c--, 1);
            var l = o();
            void 0 !== l && (t = l);
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
      var e = { 866: 0, 260: 0, 154: 0, 982: 0, 47: 0, 264: 0, 204: 0 };
      r.O.j = (t) => 0 === e[t];
      var t = (t, n) => {
          var o,
            a,
            [i, s, u] = n,
            l = 0;
          if (i.some((t) => 0 !== e[t])) {
            for (o in s) r.o(s, o) && (r.m[o] = s[o]);
            if (u) var c = u(r);
          }
          for (t && t(n); l < i.length; l++)
            (a = i[l]), r.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
          return r.O(c);
        },
        n = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var o = r.O(void 0, [967, 991, 305, 170, 452, 797, 906], () => r(9513));
  o = r.O(o);
})(); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/debugcommands.js.map
