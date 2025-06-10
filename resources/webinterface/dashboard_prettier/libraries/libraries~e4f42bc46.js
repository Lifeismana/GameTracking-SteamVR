var CLSTAMP = "9806884";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [8],
  {
    961: (e, t, r) => {
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
      var r = Symbol.for("react.element"),
        n = Symbol.for("react.portal"),
        o = Symbol.for("react.fragment"),
        u = Symbol.for("react.strict_mode"),
        c = Symbol.for("react.profiler"),
        a = Symbol.for("react.provider"),
        f = Symbol.for("react.context"),
        i = Symbol.for("react.forward_ref"),
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
        w = { current: null },
        C = { key: !0, ref: !0, __self: !0, __source: !0 };
      function R(e, t, n) {
        var o,
          u = {},
          c = null,
          a = null;
        if (null != t)
          for (o in (void 0 !== t.ref && (a = t.ref),
          void 0 !== t.key && (c = "" + t.key),
          t))
            O.call(t, o) && !C.hasOwnProperty(o) && (u[o] = t[o]);
        var f = arguments.length - 2;
        if (1 === f) u.children = n;
        else if (1 < f) {
          for (var i = Array(f), l = 0; l < f; l++) i[l] = arguments[l + 2];
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
          _owner: w.current,
        };
      }
      function k(e) {
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
                (k(c) &&
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
            var l = u + j((a = e[i]), i);
            f += g(a, t, o, l, c);
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
          for (e = l.call(e), i = 0; !(a = e.next()).done; )
            f += g((a = a.value), t, o, (l = u + j(a, i++)), c);
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
      function P(e, t, r) {
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
      function x(e) {
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
      var L = { current: null },
        T = { transition: null },
        A = {
          ReactCurrentDispatcher: L,
          ReactCurrentBatchConfig: T,
          ReactCurrentOwner: w,
        };
      function D() {
        throw Error("act(...) is not supported in production builds of React.");
      }
      (t.Children = {
        map: P,
        forEach: function (e, t, r) {
          P(
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
            P(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            P(e, function (e) {
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
        (t.Profiler = c),
        (t.PureComponent = m),
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
          var o = _({}, e.props),
            u = e.key,
            c = e.ref,
            a = e._owner;
          if (null != t) {
            if (
              (void 0 !== t.ref && ((c = t.ref), (a = w.current)),
              void 0 !== t.key && (u = "" + t.key),
              e.type && e.type.defaultProps)
            )
              var f = e.type.defaultProps;
            for (i in t)
              O.call(t, i) &&
                !C.hasOwnProperty(i) &&
                (o[i] = void 0 === t[i] && void 0 !== f ? f[i] : t[i]);
          }
          var i = arguments.length - 2;
          if (1 === i) o.children = n;
          else if (1 < i) {
            f = Array(i);
            for (var l = 0; l < i; l++) f[l] = arguments[l + 2];
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
        (t.createElement = R),
        (t.createFactory = function (e) {
          var t = R.bind(null, e);
          return (t.type = e), t;
        }),
        (t.createRef = function () {
          return { current: null };
        }),
        (t.forwardRef = function (e) {
          return { $$typeof: i, render: e };
        }),
        (t.isValidElement = k),
        (t.lazy = function (e) {
          return {
            $$typeof: p,
            _payload: { _status: -1, _result: e },
            _init: x,
          };
        }),
        (t.memo = function (e, t) {
          return { $$typeof: s, type: e, compare: void 0 === t ? null : t };
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
          return L.current.useCallback(e, t);
        }),
        (t.useContext = function (e) {
          return L.current.useContext(e);
        }),
        (t.useDebugValue = function () {}),
        (t.useDeferredValue = function (e) {
          return L.current.useDeferredValue(e);
        }),
        (t.useEffect = function (e, t) {
          return L.current.useEffect(e, t);
        }),
        (t.useId = function () {
          return L.current.useId();
        }),
        (t.useImperativeHandle = function (e, t, r) {
          return L.current.useImperativeHandle(e, t, r);
        }),
        (t.useInsertionEffect = function (e, t) {
          return L.current.useInsertionEffect(e, t);
        }),
        (t.useLayoutEffect = function (e, t) {
          return L.current.useLayoutEffect(e, t);
        }),
        (t.useMemo = function (e, t) {
          return L.current.useMemo(e, t);
        }),
        (t.useReducer = function (e, t, r) {
          return L.current.useReducer(e, t, r);
        }),
        (t.useRef = function (e) {
          return L.current.useRef(e);
        }),
        (t.useState = function (e) {
          return L.current.useState(e);
        }),
        (t.useSyncExternalStore = function (e, t, r) {
          return L.current.useSyncExternalStore(e, t, r);
        }),
        (t.useTransition = function () {
          return L.current.useTransition();
        }),
        (t.version = "18.3.1");
    },
    6540: (e, t, r) => {
      e.exports = r(5287);
    },
    1635: (e, t, r) => {
      r.d(t, { Cg: () => n, sH: () => o });
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
      function o(e, t, r, n) {
        return new (r || (r = Promise))(function (o, u) {
          function c(e) {
            try {
              f(n.next(e));
            } catch (e) {
              u(e);
            }
          }
          function a(e) {
            try {
              f(n.throw(e));
            } catch (e) {
              u(e);
            }
          }
          function f(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })).then(c, a);
          }
          f((n = n.apply(e, t || [])).next());
        });
      }
      Object.create;
      Object.create;
      "function" == typeof SuppressedError && SuppressedError;
    },
  },
]); //# sourceMappingURL=file:///c:/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/libraries/libraries~e4f42bc46.js.map
