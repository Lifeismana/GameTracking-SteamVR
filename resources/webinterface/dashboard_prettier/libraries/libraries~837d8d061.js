var CLSTAMP = "10465124";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [267],
  {
    6921: (e, t, r) => {
      r.r(t),
        r.d(t, {
          Observer: () => l.n,
          _observerFinalizationRegistry: () => c.Y,
          clearTimers: () => y,
          enableStaticRendering: () => i.e,
          isObserverBatched: () => a.m_,
          isUsingStaticRendering: () => i.P,
          observer: () => s.P,
          observerBatching: () => a.tl,
          useAsObservableSource: () => d.W,
          useLocalObservable: () => f.i,
          useLocalStore: () => p.W,
          useObserver: () => h,
          useStaticRendering: () => b,
        });
      r(724);
      var n,
        o = r(9889),
        a = r(8909),
        u = r(4452),
        i = r(3815),
        c = r(7380),
        s = r(6035),
        l = r(9712),
        f = r(5562),
        p = r(1154),
        d = r(3542);
      (0, a.tl)(o.r);
      var y =
        null !== (n = c.Y.finalizeAllImmediately) && void 0 !== n
          ? n
          : function () {};
      function h(e, t) {
        return void 0 === t && (t = "observed"), (0, u.q)(e, t);
      }
      function b(e) {
        (0, i.e)(e);
      }
    },
    6035: (e, t, r) => {
      r.d(t, { P: () => p });
      var n,
        o,
        a = r(6540),
        u = r(3815),
        i = r(4452),
        c = "function" == typeof Symbol && Symbol.for,
        s =
          null !==
            (o =
              null ===
                (n = Object.getOwnPropertyDescriptor(function () {}, "name")) ||
              void 0 === n
                ? void 0
                : n.configurable) &&
          void 0 !== o &&
          o,
        l = c
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
        if ((0, u.P)()) return e;
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
          y,
          h = function (e, t) {
            return (0, i.q)(function () {
              return o(e, t);
            }, c);
          };
        return (
          (h.displayName = e.displayName),
          s &&
            Object.defineProperty(h, "name", {
              value: e.name,
              writable: !0,
              configurable: !0,
            }),
          e.contextTypes && (h.contextTypes = e.contextTypes),
          n && (h = (0, a.forwardRef)(h)),
          (h = (0, a.memo)(h)),
          (p = e),
          (y = h),
          Object.keys(p).forEach(function (e) {
            d[e] ||
              Object.defineProperty(
                y,
                e,
                Object.getOwnPropertyDescriptor(p, e),
              );
          }),
          h
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
      r.d(t, { q: () => l });
      var n = r(7813),
        o = r(6540),
        a = r(6356),
        u = r(3815),
        i = r(7380),
        c = r(9888);
      function s(e) {
        e.reaction = new n.Reaction("observer".concat(e.name), function () {
          var t;
          (e.stateVersion = Symbol()),
            null === (t = e.onStoreChange) || void 0 === t || t.call(e);
        });
      }
      function l(e, t) {
        if ((void 0 === t && (t = "observed"), (0, u.P)())) return e();
        var r = o.useRef(null);
        if (!r.current) {
          var n = {
            reaction: null,
            onStoreChange: null,
            stateVersion: Symbol(),
            name: t,
            subscribe: function (e) {
              return (
                i.Y.unregister(n),
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
          (p.reaction || (s(p), i.Y.register(r, p, p)),
          o.useDebugValue(p.reaction, a.E),
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
    5237: (e, t, r) => {
      r.d(t, { QF: () => c });
      var n = r(6540),
        o = function (e, t) {
          return (
            (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
              }),
            o(e, t)
          );
        };
      function a(e) {
        var t = e.className,
          r = e.counterClockwise,
          o = e.dashRatio,
          a = e.pathRadius,
          c = e.strokeWidth,
          s = e.style;
        return (0, n.createElement)("path", {
          className: t,
          style: Object.assign(
            {},
            s,
            i({ pathRadius: a, dashRatio: o, counterClockwise: r }),
          ),
          d: u({ pathRadius: a, counterClockwise: r }),
          strokeWidth: c,
          fillOpacity: 0,
        });
      }
      function u(e) {
        var t = e.pathRadius,
          r = e.counterClockwise ? 1 : 0;
        return (
          "\n      M 50,50\n      m 0,-" +
          t +
          "\n      a " +
          t +
          "," +
          t +
          " " +
          r +
          " 1 1 0," +
          2 * t +
          "\n      a " +
          t +
          "," +
          t +
          " " +
          r +
          " 1 1 0,-" +
          2 * t +
          "\n    "
        );
      }
      function i(e) {
        var t = e.counterClockwise,
          r = e.dashRatio,
          n = e.pathRadius,
          o = 2 * Math.PI * n,
          a = (1 - r) * o;
        return {
          strokeDasharray: o + "px " + o + "px",
          strokeDashoffset: (t ? -a : a) + "px",
        };
      }
      var c = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          (function (e, t) {
            function r() {
              this.constructor = e;
            }
            o(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((r.prototype = t.prototype), new r()));
          })(t, e),
          (t.prototype.getBackgroundPadding = function () {
            return this.props.background ? this.props.backgroundPadding : 0;
          }),
          (t.prototype.getPathRadius = function () {
            return (
              50 - this.props.strokeWidth / 2 - this.getBackgroundPadding()
            );
          }),
          (t.prototype.getPathRatio = function () {
            var e = this.props,
              t = e.value,
              r = e.minValue,
              n = e.maxValue;
            return (Math.min(Math.max(t, r), n) - r) / (n - r);
          }),
          (t.prototype.render = function () {
            var e = this.props,
              t = e.circleRatio,
              r = e.className,
              o = e.classes,
              u = e.counterClockwise,
              i = e.styles,
              c = e.strokeWidth,
              s = e.text,
              l = this.getPathRadius(),
              f = this.getPathRatio();
            return (0, n.createElement)(
              "svg",
              {
                className: o.root + " " + r,
                style: i.root,
                viewBox: "0 0 100 100",
                "data-test-id": "CircularProgressbar",
              },
              this.props.background
                ? (0, n.createElement)("circle", {
                    className: o.background,
                    style: i.background,
                    cx: 50,
                    cy: 50,
                    r: 50,
                  })
                : null,
              (0, n.createElement)(a, {
                className: o.trail,
                counterClockwise: u,
                dashRatio: t,
                pathRadius: l,
                strokeWidth: c,
                style: i.trail,
              }),
              (0, n.createElement)(a, {
                className: o.path,
                counterClockwise: u,
                dashRatio: f * t,
                pathRadius: l,
                strokeWidth: c,
                style: i.path,
              }),
              s
                ? (0, n.createElement)(
                    "text",
                    { className: o.text, style: i.text, x: 50, y: 50 },
                    s,
                  )
                : null,
            );
          }),
          (t.defaultProps = {
            background: !1,
            backgroundPadding: 0,
            circleRatio: 1,
            classes: {
              root: "CircularProgressbar",
              trail: "CircularProgressbar-trail",
              path: "CircularProgressbar-path",
              text: "CircularProgressbar-text",
              background: "CircularProgressbar-background",
            },
            counterClockwise: !1,
            className: "",
            maxValue: 100,
            minValue: 0,
            strokeWidth: 8,
            styles: { root: {}, trail: {}, path: {}, text: {}, background: {} },
            text: "",
          }),
          t
        );
      })(n.Component);
    },
    5287: (e, t) => {
      var r = Symbol.for("react.element"),
        n = Symbol.for("react.portal"),
        o = Symbol.for("react.fragment"),
        a = Symbol.for("react.strict_mode"),
        u = Symbol.for("react.profiler"),
        i = Symbol.for("react.provider"),
        c = Symbol.for("react.context"),
        s = Symbol.for("react.forward_ref"),
        l = Symbol.for("react.suspense"),
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
        h = Object.assign,
        b = {};
      function m(e, t, r) {
        (this.props = e),
          (this.context = t),
          (this.refs = b),
          (this.updater = r || y);
      }
      function v() {}
      function g(e, t, r) {
        (this.props = e),
          (this.context = t),
          (this.refs = b),
          (this.updater = r || y);
      }
      (m.prototype.isReactComponent = {}),
        (m.prototype.setState = function (e, t) {
          if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error(
              "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
            );
          this.updater.enqueueSetState(this, e, t, "setState");
        }),
        (m.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }),
        (v.prototype = m.prototype);
      var _ = (g.prototype = new v());
      (_.constructor = g), h(_, m.prototype), (_.isPureReactComponent = !0);
      var k = Array.isArray,
        w = Object.prototype.hasOwnProperty,
        S = { current: null },
        R = { key: !0, ref: !0, __self: !0, __source: !0 };
      function C(e, t, n) {
        var o,
          a = {},
          u = null,
          i = null;
        if (null != t)
          for (o in (void 0 !== t.ref && (i = t.ref),
          void 0 !== t.key && (u = "" + t.key),
          t))
            w.call(t, o) && !R.hasOwnProperty(o) && (a[o] = t[o]);
        var c = arguments.length - 2;
        if (1 === c) a.children = n;
        else if (1 < c) {
          for (var s = Array(c), l = 0; l < c; l++) s[l] = arguments[l + 2];
          a.children = s;
        }
        if (e && e.defaultProps)
          for (o in (c = e.defaultProps)) void 0 === a[o] && (a[o] = c[o]);
        return {
          $$typeof: r,
          type: e,
          key: u,
          ref: i,
          props: a,
          _owner: S.current,
        };
      }
      function P(e) {
        return "object" == typeof e && null !== e && e.$$typeof === r;
      }
      var x = /\/+/g;
      function E(e, t) {
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
      function $(e, t, o, a, u) {
        var i = typeof e;
        ("undefined" !== i && "boolean" !== i) || (e = null);
        var c = !1;
        if (null === e) c = !0;
        else
          switch (i) {
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
            (u = u((c = e))),
            (e = "" === a ? "." + E(c, 0) : a),
            k(u)
              ? ((o = ""),
                null != e && (o = e.replace(x, "$&/") + "/"),
                $(u, t, o, "", function (e) {
                  return e;
                }))
              : null != u &&
                (P(u) &&
                  (u = (function (e, t) {
                    return {
                      $$typeof: r,
                      type: e.type,
                      key: t,
                      ref: e.ref,
                      props: e.props,
                      _owner: e._owner,
                    };
                  })(
                    u,
                    o +
                      (!u.key || (c && c.key === u.key)
                        ? ""
                        : ("" + u.key).replace(x, "$&/") + "/") +
                      e,
                  )),
                t.push(u)),
            1
          );
        if (((c = 0), (a = "" === a ? "." : a + ":"), k(e)))
          for (var s = 0; s < e.length; s++) {
            var l = a + E((i = e[s]), s);
            c += $(i, t, o, l, u);
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
          for (e = l.call(e), s = 0; !(i = e.next()).done; )
            c += $((i = i.value), t, o, (l = a + E(i, s++)), u);
        else if ("object" === i)
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
      function O(e, t, r) {
        if (null == e) return e;
        var n = [],
          o = 0;
        return (
          $(e, n, "", "", function (e) {
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
      var N = { current: null },
        V = { transition: null },
        T = {
          ReactCurrentDispatcher: N,
          ReactCurrentBatchConfig: V,
          ReactCurrentOwner: S,
        };
      function I() {
        throw Error("act(...) is not supported in production builds of React.");
      }
      (t.Children = {
        map: O,
        forEach: function (e, t, r) {
          O(
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
            O(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            O(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!P(e))
            throw Error(
              "React.Children.only expected to receive a single React element child.",
            );
          return e;
        },
      }),
        (t.Component = m),
        (t.Fragment = o),
        (t.Profiler = u),
        (t.PureComponent = g),
        (t.StrictMode = a),
        (t.Suspense = l),
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T),
        (t.act = I),
        (t.cloneElement = function (e, t, n) {
          if (null == e)
            throw Error(
              "React.cloneElement(...): The argument must be a React element, but you passed " +
                e +
                ".",
            );
          var o = h({}, e.props),
            a = e.key,
            u = e.ref,
            i = e._owner;
          if (null != t) {
            if (
              (void 0 !== t.ref && ((u = t.ref), (i = S.current)),
              void 0 !== t.key && (a = "" + t.key),
              e.type && e.type.defaultProps)
            )
              var c = e.type.defaultProps;
            for (s in t)
              w.call(t, s) &&
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
            key: a,
            ref: u,
            props: o,
            _owner: i,
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
            }).Provider = { $$typeof: i, _context: e }),
            (e.Consumer = e)
          );
        }),
        (t.createElement = C),
        (t.createFactory = function (e) {
          var t = C.bind(null, e);
          return (t.type = e), t;
        }),
        (t.createRef = function () {
          return { current: null };
        }),
        (t.forwardRef = function (e) {
          return { $$typeof: s, render: e };
        }),
        (t.isValidElement = P),
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
        (t.unstable_act = I),
        (t.useCallback = function (e, t) {
          return N.current.useCallback(e, t);
        }),
        (t.useContext = function (e) {
          return N.current.useContext(e);
        }),
        (t.useDebugValue = function () {}),
        (t.useDeferredValue = function (e) {
          return N.current.useDeferredValue(e);
        }),
        (t.useEffect = function (e, t) {
          return N.current.useEffect(e, t);
        }),
        (t.useId = function () {
          return N.current.useId();
        }),
        (t.useImperativeHandle = function (e, t, r) {
          return N.current.useImperativeHandle(e, t, r);
        }),
        (t.useInsertionEffect = function (e, t) {
          return N.current.useInsertionEffect(e, t);
        }),
        (t.useLayoutEffect = function (e, t) {
          return N.current.useLayoutEffect(e, t);
        }),
        (t.useMemo = function (e, t) {
          return N.current.useMemo(e, t);
        }),
        (t.useReducer = function (e, t, r) {
          return N.current.useReducer(e, t, r);
        }),
        (t.useRef = function (e) {
          return N.current.useRef(e);
        }),
        (t.useState = function (e) {
          return N.current.useState(e);
        }),
        (t.useSyncExternalStore = function (e, t, r) {
          return N.current.useSyncExternalStore(e, t, r);
        }),
        (t.useTransition = function () {
          return N.current.useTransition();
        }),
        (t.version = "18.3.1");
    },
    6540: (e, t, r) => {
      e.exports = r(5287);
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/libraries/libraries~837d8d061.js.map
