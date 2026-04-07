var CLSTAMP = "10579910";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [47, 260],
  {
    2593: (e, t, r) => {
      e.exports = r(6874);
    },
    6874: (e, t, r) => {
      var n,
        o = r(7813),
        u = r(6540),
        i = (n = u) && "object" == typeof n && "default" in n ? n.default : n,
        a = r(961),
        c = r(9888);
      if (!u.useState)
        throw new Error("mobx-react-lite requires React with Hooks support");
      if (!o.makeObservable)
        throw new Error(
          "mobx-react-lite@3 requires mobx at least version 6 to be available",
        );
      function s(e) {
        e();
      }
      function l(e) {
        e || (e = s), o.configure({ reactionScheduler: e });
      }
      function f(e) {
        return o.getDependencyTree(e);
      }
      var p = !1;
      function d(e) {
        p = e;
      }
      function v() {
        return p;
      }
      var y,
        b,
        h = new (
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
                      var r = Date.now();
                      t.registrations.forEach(function (n, o) {
                        r - n.registeredAt >= e &&
                          (t.finalize(n.value), t.registrations.delete(o));
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
                  (t.register = function (e, t, r) {
                    this.registrations.set(r, {
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
      function m(e) {
        e.reaction = new o.Reaction("observer" + e.name, function () {
          (e.stateVersion = Symbol()),
            null == e.onStoreChange || e.onStoreChange();
        });
      }
      function S(e, t) {
        if ((void 0 === t && (t = "observed"), v())) return e();
        var r = i.useRef(null);
        if (!r.current) {
          var n = {
            reaction: null,
            onStoreChange: null,
            stateVersion: Symbol(),
            name: t,
            subscribe: function (e) {
              return (
                h.unregister(n),
                (n.onStoreChange = e),
                n.reaction || (m(n), (n.stateVersion = Symbol())),
                function () {
                  var e;
                  (n.onStoreChange = null),
                    null == (e = n.reaction) || e.dispose(),
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
        var o,
          u,
          a = r.current;
        if (
          (a.reaction || (m(a), h.register(r, a, a)),
          i.useDebugValue(a.reaction, f),
          c.useSyncExternalStore(a.subscribe, a.getSnapshot, a.getSnapshot),
          a.reaction.track(function () {
            try {
              o = e();
            } catch (e) {
              u = e;
            }
          }),
          u)
        )
          throw u;
        return o;
      }
      var g,
        w = "function" == typeof Symbol && Symbol.for,
        _ =
          null !=
            (y =
              null ==
              (b = Object.getOwnPropertyDescriptor(function () {}, "name"))
                ? void 0
                : b.configurable) && y,
        E = w
          ? Symbol.for("react.forward_ref")
          : "function" == typeof u.forwardRef &&
            u.forwardRef(function (e) {
              return null;
            }).$$typeof,
        R = w
          ? Symbol.for("react.memo")
          : "function" == typeof u.memo &&
            u.memo(function (e) {
              return null;
            }).$$typeof,
        O = {
          $$typeof: !0,
          render: !0,
          compare: !0,
          type: !0,
          displayName: !0,
        };
      function C(e) {
        var t = e.children,
          r = e.render;
        t &&
          r &&
          console.error(
            "MobX Observer: Do not use children and render in the same time in `Observer`",
          );
        var n = t || r;
        return "function" != typeof n ? null : S(n);
      }
      function k(e) {
        var t = u.useState(function () {
          return o.observable(e, {}, { deep: !1 });
        })[0];
        return (
          o.runInAction(function () {
            Object.assign(t, e);
          }),
          t
        );
      }
      (C.displayName = "Observer"), l(a.unstable_batchedUpdates);
      var $ = null != (g = h.finalizeAllImmediately) ? g : function () {};
      t.useObserver = function (e, t) {
        return void 0 === t && (t = "observed"), S(e, t);
      };
    },
    5266: (e, t, r) => {
      r.r(t),
        r.d(t, {
          Observer: () => s,
          _observerFinalizationRegistry: () => a.Y,
          clearTimers: () => b,
          enableStaticRendering: () => i.e,
          isObserverBatched: () => o.m_,
          isUsingStaticRendering: () => i.P,
          observer: () => c.P,
          observerBatching: () => o.tl,
          useAsObservableSource: () => v,
          useLocalObservable: () => d,
          useLocalStore: () => y,
          useObserver: () => h,
          useStaticRendering: () => m,
        });
      r(724);
      var n = r(9889),
        o = r(8909),
        u = r(4452),
        i = r(3815),
        a = r(3438),
        c = r(6035);
      function s(e) {
        var t = e.children,
          r = e.render;
        t &&
          r &&
          console.error(
            "MobX Observer: Do not use children and render in the same time in `Observer`",
          );
        var n = t || r;
        return "function" != typeof n ? null : (0, u.q)(n);
      }
      s.displayName = "Observer";
      var l,
        f = r(7813),
        p = r(6540);
      function d(e, t) {
        return (0, p.useState)(function () {
          return (0, f.observable)(e(), t, { autoBind: !0 });
        })[0];
      }
      function v(e) {
        var t = (0, p.useState)(function () {
          return (0, f.observable)(e, {}, { deep: !1 });
        })[0];
        return (
          (0, f.runInAction)(function () {
            Object.assign(t, e);
          }),
          t
        );
      }
      function y(e, t) {
        var r = t && v(t);
        return (0, p.useState)(function () {
          return (0, f.observable)(e(r), void 0, { autoBind: !0 });
        })[0];
      }
      (0, o.tl)(n.r);
      var b =
        null !== (l = a.Y.finalizeAllImmediately) && void 0 !== l
          ? l
          : function () {};
      function h(e, t) {
        return void 0 === t && (t = "observed"), (0, u.q)(e, t);
      }
      function m(e) {
        (0, i.e)(e);
      }
    },
    4452: (e, t, r) => {
      r.d(t, { q: () => l });
      var n = r(7813),
        o = r(6540),
        u = r(6356),
        i = r(3815),
        a = r(3438),
        c = r(9888);
      function s(e) {
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
                n.reaction || (s(n), (n.stateVersion = Symbol())),
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
          f,
          p = r.current;
        if (
          (p.reaction || (s(p), a.Y.register(r, p, p)),
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
              f = e;
            }
          }),
          f)
        )
          throw f;
        return l;
      }
    },
    3438: (e, t, r) => {
      r.d(t, { Y: () => n });
      var n = new (r(2517).Xr)(function (e) {
        var t;
        null === (t = e.reaction) || void 0 === t || t.dispose(),
          (e.reaction = null);
      });
    },
    5287: (e, t) => {
      var r = Symbol.for("react.element"),
        n = Symbol.for("react.portal"),
        o = Symbol.for("react.fragment"),
        u = Symbol.for("react.strict_mode"),
        i = Symbol.for("react.profiler"),
        a = Symbol.for("react.provider"),
        c = Symbol.for("react.context"),
        s = Symbol.for("react.forward_ref"),
        l = Symbol.for("react.suspense"),
        f = Symbol.for("react.memo"),
        p = Symbol.for("react.lazy"),
        d = Symbol.iterator;
      var v = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        y = Object.assign,
        b = {};
      function h(e, t, r) {
        (this.props = e),
          (this.context = t),
          (this.refs = b),
          (this.updater = r || v);
      }
      function m() {}
      function S(e, t, r) {
        (this.props = e),
          (this.context = t),
          (this.refs = b),
          (this.updater = r || v);
      }
      (h.prototype.isReactComponent = {}),
        (h.prototype.setState = function (e, t) {
          if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error(
              "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
            );
          this.updater.enqueueSetState(this, e, t, "setState");
        }),
        (h.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }),
        (m.prototype = h.prototype);
      var g = (S.prototype = new m());
      (g.constructor = S), y(g, h.prototype), (g.isPureReactComponent = !0);
      var w = Array.isArray,
        _ = Object.prototype.hasOwnProperty,
        E = { current: null },
        R = { key: !0, ref: !0, __self: !0, __source: !0 };
      function O(e, t, n) {
        var o,
          u = {},
          i = null,
          a = null;
        if (null != t)
          for (o in (void 0 !== t.ref && (a = t.ref),
          void 0 !== t.key && (i = "" + t.key),
          t))
            _.call(t, o) && !R.hasOwnProperty(o) && (u[o] = t[o]);
        var c = arguments.length - 2;
        if (1 === c) u.children = n;
        else if (1 < c) {
          for (var s = Array(c), l = 0; l < c; l++) s[l] = arguments[l + 2];
          u.children = s;
        }
        if (e && e.defaultProps)
          for (o in (c = e.defaultProps)) void 0 === u[o] && (u[o] = c[o]);
        return {
          $$typeof: r,
          type: e,
          key: i,
          ref: a,
          props: u,
          _owner: E.current,
        };
      }
      function C(e) {
        return "object" == typeof e && null !== e && e.$$typeof === r;
      }
      var k = /\/+/g;
      function $(e, t) {
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
            (e = "" === u ? "." + $(c, 0) : u),
            w(i)
              ? ((o = ""),
                null != e && (o = e.replace(k, "$&/") + "/"),
                j(i, t, o, "", function (e) {
                  return e;
                }))
              : null != i &&
                (C(i) &&
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
                        : ("" + i.key).replace(k, "$&/") + "/") +
                      e,
                  )),
                t.push(i)),
            1
          );
        if (((c = 0), (u = "" === u ? "." : u + ":"), w(e)))
          for (var s = 0; s < e.length; s++) {
            var l = u + $((a = e[s]), s);
            c += j(a, t, o, l, i);
          }
        else if (
          ((l = (function (e) {
            return null === e || "object" != typeof e
              ? null
              : "function" == typeof (e = (d && e[d]) || e["@@iterator"])
                ? e
                : null;
          })(e)),
          "function" == typeof l)
        )
          for (e = l.call(e), s = 0; !(a = e.next()).done; )
            c += j((a = a.value), t, o, (l = u + $(a, s++)), i);
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
      function V(e) {
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
        T = { transition: null },
        A = {
          ReactCurrentDispatcher: P,
          ReactCurrentBatchConfig: T,
          ReactCurrentOwner: E,
        };
      function D() {
        throw Error("act(...) is not supported in production builds of React.");
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
          if (!C(e))
            throw Error(
              "React.Children.only expected to receive a single React element child.",
            );
          return e;
        },
      }),
        (t.Component = h),
        (t.Fragment = o),
        (t.Profiler = i),
        (t.PureComponent = S),
        (t.StrictMode = u),
        (t.Suspense = l),
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A),
        (t.act = D),
        (t.cloneElement = function (e, t, n) {
          if (null == e)
            throw Error(
              "React.cloneElement(...): The argument must be a React element, but you passed " +
                e +
                ".",
            );
          var o = y({}, e.props),
            u = e.key,
            i = e.ref,
            a = e._owner;
          if (null != t) {
            if (
              (void 0 !== t.ref && ((i = t.ref), (a = E.current)),
              void 0 !== t.key && (u = "" + t.key),
              e.type && e.type.defaultProps)
            )
              var c = e.type.defaultProps;
            for (s in t)
              _.call(t, s) &&
                !R.hasOwnProperty(s) &&
                (o[s] = void 0 === t[s] && void 0 !== c ? c[s] : t[s]);
          }
          var s = arguments.length - 2;
          if (1 === s) o.children = n;
          else if (1 < s) {
            c = Array(s);
            for (var l = 0; l < s; l++) c[l] = arguments[l + 2];
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
        (t.createElement = O),
        (t.createFactory = function (e) {
          var t = O.bind(null, e);
          return (t.type = e), t;
        }),
        (t.createRef = function () {
          return { current: null };
        }),
        (t.forwardRef = function (e) {
          return { $$typeof: s, render: e };
        }),
        (t.isValidElement = C),
        (t.lazy = function (e) {
          return {
            $$typeof: p,
            _payload: { _status: -1, _result: e },
            _init: V,
          };
        }),
        (t.memo = function (e, t) {
          return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
        }),
        (t.startTransition = function (e) {
          var t = T.transition;
          T.transition = {};
          try {
            e();
          } finally {
            T.transition = t;
          }
        }),
        (t.unstable_act = D),
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
    8493: (e, t, r) => {
      var n = r(6540);
      var o =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        u = n.useState,
        i = n.useEffect,
        a = n.useLayoutEffect,
        c = n.useDebugValue;
      function s(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var r = t();
          return !o(e, r);
        } catch (e) {
          return !0;
        }
      }
      var l =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var r = t(),
                n = u({ inst: { value: r, getSnapshot: t } }),
                o = n[0].inst,
                l = n[1];
              return (
                a(
                  function () {
                    (o.value = r), (o.getSnapshot = t), s(o) && l({ inst: o });
                  },
                  [e, r, t],
                ),
                i(
                  function () {
                    return (
                      s(o) && l({ inst: o }),
                      e(function () {
                        s(o) && l({ inst: o });
                      })
                    );
                  },
                  [e],
                ),
                c(r),
                r
              );
            };
      t.useSyncExternalStore =
        void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : l;
    },
    9888: (e, t, r) => {
      e.exports = r(8493);
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/libraries/libraries~462078e7f.js.map
