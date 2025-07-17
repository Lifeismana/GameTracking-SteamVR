var CLSTAMP = "9906892";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [526],
  {
    2505: (e, t, r) => {
      e.exports = r(8015);
    },
    961: (e, t, r) => {
      "use strict";
      !(function e() {
        if (
          "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
          "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
        )
          try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
          } catch (e) {
            console.error(e);
          }
      })(),
        (e.exports = r(2551));
    },
    5287: (e, t) => {
      "use strict";
      var r = Symbol.for("react.element"),
        n = Symbol.for("react.portal"),
        o = Symbol.for("react.fragment"),
        u = Symbol.for("react.strict_mode"),
        c = Symbol.for("react.profiler"),
        a = Symbol.for("react.provider"),
        f = Symbol.for("react.context"),
        i = Symbol.for("react.forward_ref"),
        s = Symbol.for("react.suspense"),
        l = Symbol.for("react.memo"),
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
        _ = Object.assign,
        h = {};
      function b(e, t, r) {
        (this.props = e),
          (this.context = t),
          (this.refs = h),
          (this.updater = r || d);
      }
      function v() {}
      function m(e, t, r) {
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
        (v.prototype = b.prototype);
      var S = (m.prototype = new v());
      (S.constructor = m), _(S, b.prototype), (S.isPureReactComponent = !0);
      var E = Array.isArray,
        O = Object.prototype.hasOwnProperty,
        C = { current: null },
        R = { key: !0, ref: !0, __self: !0, __source: !0 };
      function k(e, t, n) {
        var o,
          u = {},
          c = null,
          a = null;
        if (null != t)
          for (o in (void 0 !== t.ref && (a = t.ref),
          void 0 !== t.key && (c = "" + t.key),
          t))
            O.call(t, o) && !R.hasOwnProperty(o) && (u[o] = t[o]);
        var f = arguments.length - 2;
        if (1 === f) u.children = n;
        else if (1 < f) {
          for (var i = Array(f), s = 0; s < f; s++) i[s] = arguments[s + 2];
          u.children = i;
        }
        if (e && e.defaultProps)
          for (o in (f = e.defaultProps)) void 0 === u[o] && (u[o] = f[o]);
        return {
          $$typeof: r,
          type: e,
          key: c,
          ref: a,
          props: u,
          _owner: C.current,
        };
      }
      function w(e) {
        return "object" == typeof e && null !== e && e.$$typeof === r;
      }
      var $ = /\/+/g;
      function j(e, t) {
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
      function g(e, t, o, u, c) {
        var a = typeof e;
        ("undefined" !== a && "boolean" !== a) || (e = null);
        var f = !1;
        if (null === e) f = !0;
        else
          switch (a) {
            case "string":
            case "number":
              f = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case r:
                case n:
                  f = !0;
              }
          }
        if (f)
          return (
            (c = c((f = e))),
            (e = "" === u ? "." + j(f, 0) : u),
            E(c)
              ? ((o = ""),
                null != e && (o = e.replace($, "$&/") + "/"),
                g(c, t, o, "", function (e) {
                  return e;
                }))
              : null != c &&
                (w(c) &&
                  (c = (function (e, t) {
                    return {
                      $$typeof: r,
                      type: e.type,
                      key: t,
                      ref: e.ref,
                      props: e.props,
                      _owner: e._owner,
                    };
                  })(
                    c,
                    o +
                      (!c.key || (f && f.key === c.key)
                        ? ""
                        : ("" + c.key).replace($, "$&/") + "/") +
                      e,
                  )),
                t.push(c)),
            1
          );
        if (((f = 0), (u = "" === u ? "." : u + ":"), E(e)))
          for (var i = 0; i < e.length; i++) {
            var s = u + j((a = e[i]), i);
            f += g(a, t, o, s, c);
          }
        else if (
          ((s = (function (e) {
            return null === e || "object" != typeof e
              ? null
              : "function" == typeof (e = (y && e[y]) || e["@@iterator"])
                ? e
                : null;
          })(e)),
          "function" == typeof s)
        )
          for (e = s.call(e), i = 0; !(a = e.next()).done; )
            f += g((a = a.value), t, o, (s = u + j(a, i++)), c);
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
        return f;
      }
      function L(e, t, r) {
        if (null == e) return e;
        var n = [],
          o = 0;
        return (
          g(e, n, "", "", function (e) {
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
      var x = { current: null },
        T = { transition: null },
        A = {
          ReactCurrentDispatcher: x,
          ReactCurrentBatchConfig: T,
          ReactCurrentOwner: C,
        };
      function D() {
        throw Error("act(...) is not supported in production builds of React.");
      }
      (t.Children = {
        map: L,
        forEach: function (e, t, r) {
          L(
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
            L(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            L(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!w(e))
            throw Error(
              "React.Children.only expected to receive a single React element child.",
            );
          return e;
        },
      }),
        (t.Component = b),
        (t.Fragment = o),
        (t.Profiler = c),
        (t.PureComponent = m),
        (t.StrictMode = u),
        (t.Suspense = s),
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A),
        (t.act = D),
        (t.cloneElement = function (e, t, n) {
          if (null == e)
            throw Error(
              "React.cloneElement(...): The argument must be a React element, but you passed " +
                e +
                ".",
            );
          var o = _({}, e.props),
            u = e.key,
            c = e.ref,
            a = e._owner;
          if (null != t) {
            if (
              (void 0 !== t.ref && ((c = t.ref), (a = C.current)),
              void 0 !== t.key && (u = "" + t.key),
              e.type && e.type.defaultProps)
            )
              var f = e.type.defaultProps;
            for (i in t)
              O.call(t, i) &&
                !R.hasOwnProperty(i) &&
                (o[i] = void 0 === t[i] && void 0 !== f ? f[i] : t[i]);
          }
          var i = arguments.length - 2;
          if (1 === i) o.children = n;
          else if (1 < i) {
            f = Array(i);
            for (var s = 0; s < i; s++) f[s] = arguments[s + 2];
            o.children = f;
          }
          return {
            $$typeof: r,
            type: e.type,
            key: u,
            ref: c,
            props: o,
            _owner: a,
          };
        }),
        (t.createContext = function (e) {
          return (
            ((e = {
              $$typeof: f,
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
        (t.createElement = k),
        (t.createFactory = function (e) {
          var t = k.bind(null, e);
          return (t.type = e), t;
        }),
        (t.createRef = function () {
          return { current: null };
        }),
        (t.forwardRef = function (e) {
          return { $$typeof: i, render: e };
        }),
        (t.isValidElement = w),
        (t.lazy = function (e) {
          return {
            $$typeof: p,
            _payload: { _status: -1, _result: e },
            _init: P,
          };
        }),
        (t.memo = function (e, t) {
          return { $$typeof: l, type: e, compare: void 0 === t ? null : t };
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
        (t.useImperativeHandle = function (e, t, r) {
          return x.current.useImperativeHandle(e, t, r);
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
        (t.useReducer = function (e, t, r) {
          return x.current.useReducer(e, t, r);
        }),
        (t.useRef = function (e) {
          return x.current.useRef(e);
        }),
        (t.useState = function (e) {
          return x.current.useState(e);
        }),
        (t.useSyncExternalStore = function (e, t, r) {
          return x.current.useSyncExternalStore(e, t, r);
        }),
        (t.useTransition = function () {
          return x.current.useTransition();
        }),
        (t.version = "18.3.1");
    },
    6540: (e, t, r) => {
      "use strict";
      e.exports = r(5287);
    },
    1635: (e, t, r) => {
      "use strict";
      r.d(t, { Cg: () => n });
      function n(e, t, r, n) {
        var o,
          u = arguments.length,
          c =
            u < 3
              ? t
              : null === n
                ? (n = Object.getOwnPropertyDescriptor(t, r))
                : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          c = Reflect.decorate(e, t, r, n);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (o = e[a]) &&
              (c = (u < 3 ? o(c) : u > 3 ? o(t, r, c) : o(t, r)) || c);
        return u > 3 && c && Object.defineProperty(t, r, c), c;
      }
      Object.create;
      Object.create;
      "function" == typeof SuppressedError && SuppressedError;
    },
  },
]); //# sourceMappingURL=file:///c:/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/libraries/libraries~f9de2b6b6.js.map
