var CLSTAMP = "10579910";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [948, 154, 264],
  {
    2505: (e, t, n) => {
      e.exports = n(8015);
    },
    3815: (e, t, n) => {
      "use strict";
      n.d(t, { P: () => o, e: () => i });
      var r = !1;
      function i(e) {
        r = e;
      }
      function o() {
        return r;
      }
    },
    8909: (e, t, n) => {
      "use strict";
      n.d(t, { m_: () => a, tl: () => o });
      var r = n(7813);
      function i(e) {
        e();
      }
      function o(e) {
        e || (e = i), (0, r.configure)({ reactionScheduler: e });
      }
      var a = function () {
        return !0;
      };
    },
    296: (e, t, n) => {
      "use strict";
      var r,
        i = n(7813),
        o = n(6540),
        a = (r = o) && "object" == typeof r && "default" in r ? r.default : r,
        s = n(5266);
      function u(e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
      }
      var c = {
          $$typeof: 1,
          render: 1,
          compare: 1,
          type: 1,
          childContextTypes: 1,
          contextType: 1,
          contextTypes: 1,
          defaultProps: 1,
          getDefaultProps: 1,
          getDerivedStateFromError: 1,
          getDerivedStateFromProps: 1,
          mixins: 1,
          displayName: 1,
          propTypes: 1,
        },
        l = Symbol("patchMixins"),
        f = Symbol("patchedDefinition");
      function h(e, t) {
        for (
          var n = this,
            r = arguments.length,
            i = new Array(r > 2 ? r - 2 : 0),
            o = 2;
          o < r;
          o++
        )
          i[o - 2] = arguments[o];
        t.locks++;
        try {
          var a;
          return null != e && (a = e.apply(this, i)), a;
        } finally {
          t.locks--,
            0 === t.locks &&
              t.methods.forEach(function (e) {
                e.apply(n, i);
              });
        }
      }
      function v(e, t) {
        return function () {
          for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
            r[i] = arguments[i];
          h.call.apply(h, [this, e, t].concat(r));
        };
      }
      function d(e, t, n) {
        var r = (function (e, t) {
          var n = (e[l] = e[l] || {}),
            r = (n[t] = n[t] || {});
          return (r.locks = r.locks || 0), (r.methods = r.methods || []), r;
        })(e, t);
        r.methods.indexOf(n) < 0 && r.methods.push(n);
        var i = Object.getOwnPropertyDescriptor(e, t);
        if (!i || !i[f]) {
          var o = (function e(t, n, r, i, o) {
            var a,
              s = v(o, i);
            return (
              ((a = {})[f] = !0),
              (a.get = function () {
                return s;
              }),
              (a.set = function (o) {
                if (this === t) s = v(o, i);
                else {
                  var a = e(this, n, r, i, o);
                  Object.defineProperty(this, n, a);
                }
              }),
              (a.configurable = !0),
              (a.enumerable = r),
              a
            );
          })(e, t, i ? i.enumerable : void 0, r, e[t]);
          Object.defineProperty(e, t, o);
        }
      }
      var _ = Symbol("ObserverAdministration"),
        p = Symbol("isMobXReactObserver");
      function b(e) {
        var t;
        return null != (t = e[_])
          ? t
          : (e[_] = {
              reaction: null,
              mounted: !1,
              reactionInvalidatedBeforeMount: !1,
              forceUpdate: null,
              name: y(e.constructor),
              state: void 0,
              props: void 0,
              context: void 0,
            });
      }
      function y(e) {
        return e.displayName || e.name || "<component>";
      }
      function g(e) {
        var t = e.bind(this),
          n = b(this);
        return function () {
          n.reaction ||
            ((n.reaction = (function (e) {
              return new i.Reaction(e.name + ".render()", function () {
                if (e.mounted)
                  try {
                    null == e.forceUpdate || e.forceUpdate();
                  } catch (n) {
                    var t;
                    null == (t = e.reaction) || t.dispose(),
                      (e.reaction = null);
                  }
                else e.reactionInvalidatedBeforeMount = !0;
              });
            })(n)),
            n.mounted ||
              s._observerFinalizationRegistry.register(this, n, this));
          var e = void 0,
            r = void 0;
          if (
            (n.reaction.track(function () {
              try {
                r = i._allowStateChanges(!1, t);
              } catch (t) {
                e = t;
              }
            }),
            e)
          )
            throw e;
          return r;
        };
      }
      function m(e, t) {
        return (
          s.isUsingStaticRendering() &&
            console.warn(
              "[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.",
            ),
          this.state !== t ||
            !(function (e, t) {
              if (u(e, t)) return !0;
              if (
                "object" != typeof e ||
                null === e ||
                "object" != typeof t ||
                null === t
              )
                return !1;
              var n = Object.keys(e),
                r = Object.keys(t);
              if (n.length !== r.length) return !1;
              for (var i = 0; i < n.length; i++)
                if (
                  !Object.hasOwnProperty.call(t, n[i]) ||
                  !u(e[n[i]], t[n[i]])
                )
                  return !1;
              return !0;
            })(this.props, e)
        );
      }
      function O(e, t) {
        if (t && "class" !== t.kind)
          throw new Error(
            "The @observer decorator can be used on classes only",
          );
        return (
          !0 === e.isMobxInjector &&
            console.warn(
              "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
            ),
          Object.prototype.isPrototypeOf.call(o.Component, e) ||
          Object.prototype.isPrototypeOf.call(o.PureComponent, e)
            ? (function (e) {
                var t = e.prototype;
                if (e[p]) {
                  var n = y(e);
                  throw new Error(
                    "The provided component class (" +
                      n +
                      ") has already been declared as an observer component.",
                  );
                }
                if (((e[p] = !0), t.componentWillReact))
                  throw new Error(
                    "The componentWillReact life-cycle event is no longer supported",
                  );
                if (e.__proto__ !== o.PureComponent)
                  if (t.shouldComponentUpdate) {
                    if (t.shouldComponentUpdate !== m)
                      throw new Error(
                        "It is not allowed to use shouldComponentUpdate in observer based components.",
                      );
                  } else t.shouldComponentUpdate = m;
                var r = t.render;
                if ("function" != typeof r) {
                  var i = y(e);
                  throw new Error(
                    "[mobx-react] class component (" +
                      i +
                      ") is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported.",
                  );
                }
                t.render = function () {
                  return (
                    Object.defineProperty(this, "render", {
                      configurable: !1,
                      writable: !1,
                      value: s.isUsingStaticRendering() ? r : g.call(this, r),
                    }),
                    this.render()
                  );
                };
                var a = t.componentDidMount;
                return (
                  (t.componentDidMount = function () {
                    var e = this,
                      t = b(this);
                    return (
                      (t.mounted = !0),
                      s._observerFinalizationRegistry.unregister(this),
                      (t.forceUpdate = function () {
                        return e.forceUpdate();
                      }),
                      (t.reaction && !t.reactionInvalidatedBeforeMount) ||
                        t.forceUpdate(),
                      null == a ? void 0 : a.apply(this, arguments)
                    );
                  }),
                  d(t, "componentWillUnmount", function () {
                    var e;
                    if (!s.isUsingStaticRendering()) {
                      var t = b(this);
                      null == (e = t.reaction) || e.dispose(),
                        (t.reaction = null),
                        (t.forceUpdate = null),
                        (t.mounted = !1),
                        (t.reactionInvalidatedBeforeMount = !1);
                    }
                  }),
                  e
                );
              })(e)
            : s.observer(e)
        );
      }
      function w() {
        return (w = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(null, arguments);
      }
      var A = ["children"],
        S = a.createContext({});
      function j(e) {
        var t = e.children,
          n = (function (e, t) {
            if (null == e) return {};
            var n = {};
            for (var r in e)
              if ({}.hasOwnProperty.call(e, r)) {
                if (t.indexOf(r) >= 0) continue;
                n[r] = e[r];
              }
            return n;
          })(e, A),
          r = a.useContext(S),
          i = a.useRef(w({}, r, n));
        return a.createElement(S.Provider, { value: i.current }, t);
      }
      function x(e, t, n, r) {
        var i,
          o,
          s,
          u = a.forwardRef(function (n, r) {
            var i = w({}, n),
              o = a.useContext(S);
            return (
              Object.assign(i, e(o || {}, i) || {}),
              r && (i.ref = r),
              a.createElement(t, i)
            );
          });
        return (
          r && (u = O(u)),
          (u.isMobxInjector = !0),
          (i = t),
          (o = u),
          (s = Object.getOwnPropertyNames(Object.getPrototypeOf(i))),
          Object.getOwnPropertyNames(i).forEach(function (e) {
            c[e] ||
              -1 !== s.indexOf(e) ||
              Object.defineProperty(
                o,
                e,
                Object.getOwnPropertyDescriptor(i, e),
              );
          }),
          (u.wrappedComponent = t),
          (u.displayName = (function (e, t) {
            var n =
              e.displayName ||
              e.name ||
              (e.constructor && e.constructor.name) ||
              "Component";
            return t ? "inject-with-" + t + "(" + n + ")" : "inject(" + n + ")";
          })(t, n)),
          u
        );
      }
      j.displayName = "MobXProvider";
      var k = Number.parseInt(a.version.split(".")[0]),
        E = !1,
        P = Symbol("disposeOnUnmountProto"),
        C = Symbol("disposeOnUnmountInst");
      function R() {
        var e = this;
        [].concat(this[P] || [], this[C] || []).forEach(function (t) {
          var n = "string" == typeof t ? e[t] : t;
          null != n &&
            (Array.isArray(n)
              ? n.map(function (e) {
                  return e();
                })
              : n());
        });
      }
      function T(e) {
        function t(t, n, r, o, a, s) {
          for (
            var u = arguments.length, c = new Array(u > 6 ? u - 6 : 0), l = 6;
            l < u;
            l++
          )
            c[l - 6] = arguments[l];
          return i.untracked(function () {
            return (
              (o = o || "<<anonymous>>"),
              (s = s || r),
              null == n[r]
                ? t
                  ? new Error(
                      "The " +
                        a +
                        " `" +
                        s +
                        "` is marked as required in `" +
                        o +
                        "`, but its value is `" +
                        (null === n[r] ? "null" : "undefined") +
                        "`.",
                    )
                  : null
                : e.apply(void 0, [n, r, o, a, s].concat(c))
            );
          });
        }
        var n = t.bind(null, !1);
        return (n.isRequired = t.bind(null, !0)), n;
      }
      function B(e) {
        var t = typeof e;
        return Array.isArray(e)
          ? "array"
          : e instanceof RegExp
            ? "object"
            : (function (e, t) {
                  return (
                    "symbol" === e ||
                    "Symbol" === t["@@toStringTag"] ||
                    ("function" == typeof Symbol && t instanceof Symbol)
                  );
                })(t, e)
              ? "symbol"
              : t;
      }
      function D(e, t) {
        return T(function (n, r, o, a, s) {
          return i.untracked(function () {
            if (e && B(n[r]) === t.toLowerCase()) return null;
            var a;
            switch (t) {
              case "Array":
                a = i.isObservableArray;
                break;
              case "Object":
                a = i.isObservableObject;
                break;
              case "Map":
                a = i.isObservableMap;
                break;
              default:
                throw new Error("Unexpected mobxType: " + t);
            }
            var u = n[r];
            if (!a(u)) {
              var c = (function (e) {
                  var t = B(e);
                  if ("object" === t) {
                    if (e instanceof Date) return "date";
                    if (e instanceof RegExp) return "regexp";
                  }
                  return t;
                })(u),
                l = e ? " or javascript `" + t.toLowerCase() + "`" : "";
              return new Error(
                "Invalid prop `" +
                  s +
                  "` of type `" +
                  c +
                  "` supplied to `" +
                  o +
                  "`, expected `mobx.Observable" +
                  t +
                  "`" +
                  l +
                  ".",
              );
            }
            return null;
          });
        });
      }
      function N(e, t) {
        return T(function (n, r, o, a, s) {
          for (
            var u = arguments.length, c = new Array(u > 5 ? u - 5 : 0), l = 5;
            l < u;
            l++
          )
            c[l - 5] = arguments[l];
          return i.untracked(function () {
            if ("function" != typeof t)
              return new Error(
                "Property `" +
                  s +
                  "` of component `" +
                  o +
                  "` has invalid PropType notation.",
              );
            var i = D(e, "Array")(n, r, o, a, s);
            if (i instanceof Error) return i;
            for (var u = n[r], l = 0; l < u.length; l++)
              if (
                (i = t.apply(
                  void 0,
                  [u, l, o, a, s + "[" + l + "]"].concat(c),
                )) instanceof Error
              )
                return i;
            return null;
          });
        });
      }
      var V = {
        observableArray: D(!1, "Array"),
        observableArrayOf: N.bind(null, !1),
        observableMap: D(!1, "Map"),
        observableObject: D(!1, "Object"),
        arrayOrObservableArray: D(!0, "Array"),
        arrayOrObservableArrayOf: N.bind(null, !0),
        objectOrObservableObject: D(!0, "Object"),
      };
      if (!o.Component)
        throw new Error("mobx-react requires React to be available");
      if (!i.observable)
        throw new Error("mobx-react requires mobx to be available");
      Object.defineProperty(t, "q3", {
        enumerable: !0,
        get: function () {
          return s.useObserver;
        },
      }),
        (t.PA = O);
    },
    7813: (e, t, n) => {
      "use strict";
      n.r(t),
        n.d(t, {
          $mobx: () => W,
          FlowCancellationError: () => bn,
          ObservableMap: () => wr,
          ObservableSet: () => jr,
          Reaction: () => Rt,
          _allowStateChanges: () => ze,
          _allowStateChangesInsideComputed: () => $t,
          _allowStateReadsEnd: () => _t,
          _allowStateReadsStart: () => dt,
          _autoAction: () => Xt,
          _endAction: () => Fe,
          _getAdministration: () => Xr,
          _getGlobalState: () => wt,
          _interceptReads: () => jn,
          _isComputingDerivation: () => st,
          _resetGlobalState: () => At,
          _startAction: () => He,
          action: () => zt,
          autorun: () => Jt,
          comparer: () => X,
          computed: () => Me,
          configure: () => ln,
          createAtom: () => z,
          defineProperty: () => In,
          entries: () => Nn,
          extendObservable: () => fn,
          flow: () => On,
          flowResult: () => An,
          get: () => Un,
          getAtom: () => zr,
          getDebugName: () => $r,
          getDependencyTree: () => hn,
          getObserverTree: () => dn,
          has: () => Mn,
          intercept: () => xn,
          isAction: () => Yt,
          isBoxedObservable: () => Je,
          isComputed: () => En,
          isComputedProp: () => Pn,
          isFlow: () => Sn,
          isFlowCancellationError: () => yn,
          isObservable: () => Rn,
          isObservableArray: () => yr,
          isObservableMap: () => Ar,
          isObservableObject: () => Br,
          isObservableProp: () => Tn,
          isObservableSet: () => xr,
          keys: () => Bn,
          makeAutoObservable: () => ar,
          makeObservable: () => ir,
          observable: () => De,
          observe: () => Gn,
          onBecomeObserved: () => rn,
          onBecomeUnobserved: () => on,
          onReactionError: () => Tt,
          override: () => Q,
          ownKeys: () => Kn,
          reaction: () => en,
          remove: () => Ln,
          runInAction: () => $t,
          set: () => Vn,
          spy: () => Mt,
          toJS: () => Hn,
          trace: () => Fn,
          transaction: () => zn,
          untracked: () => ft,
          values: () => Dn,
          when: () => Xn,
        });
      function r(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        throw new Error(
          "number" == typeof e
            ? "[MobX] minified error nr: " +
                e +
                (n.length ? " " + n.map(String).join(",") : "") +
                ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts"
            : "[MobX] " + e,
        );
      }
      var i = {};
      function o() {
        return "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof window
            ? window
            : void 0 !== n.g
              ? n.g
              : "undefined" != typeof self
                ? self
                : i;
      }
      var a = Object.assign,
        s = Object.getOwnPropertyDescriptor,
        u = Object.defineProperty,
        c = Object.prototype,
        l = [];
      Object.freeze(l);
      var f = {};
      Object.freeze(f);
      var h = "undefined" != typeof Proxy,
        v = Object.toString();
      function d() {
        h || r("Proxy not available");
      }
      function _(e) {
        var t = !1;
        return function () {
          if (!t) return (t = !0), e.apply(this, arguments);
        };
      }
      var p = function () {};
      function b(e) {
        return "function" == typeof e;
      }
      function y(e) {
        switch (typeof e) {
          case "string":
          case "symbol":
          case "number":
            return !0;
        }
        return !1;
      }
      function g(e) {
        return null !== e && "object" == typeof e;
      }
      function m(e) {
        if (!g(e)) return !1;
        var t = Object.getPrototypeOf(e);
        if (null == t) return !0;
        var n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
        return "function" == typeof n && n.toString() === v;
      }
      function O(e) {
        var t = null == e ? void 0 : e.constructor;
        return (
          !!t &&
          ("GeneratorFunction" === t.name ||
            "GeneratorFunction" === t.displayName)
        );
      }
      function w(e, t, n) {
        u(e, t, { enumerable: !1, writable: !0, configurable: !0, value: n });
      }
      function A(e, t, n) {
        u(e, t, { enumerable: !1, writable: !1, configurable: !0, value: n });
      }
      function S(e, t) {
        var n = "isMobX" + e;
        return (
          (t.prototype[n] = !0),
          function (e) {
            return g(e) && !0 === e[n];
          }
        );
      }
      function j(e) {
        return (
          null != e && "[object Map]" === Object.prototype.toString.call(e)
        );
      }
      function x(e) {
        return (
          null != e && "[object Set]" === Object.prototype.toString.call(e)
        );
      }
      var k = void 0 !== Object.getOwnPropertySymbols;
      var E =
        "undefined" != typeof Reflect && Reflect.ownKeys
          ? Reflect.ownKeys
          : k
            ? function (e) {
                return Object.getOwnPropertyNames(e).concat(
                  Object.getOwnPropertySymbols(e),
                );
              }
            : Object.getOwnPropertyNames;
      function P(e) {
        return null === e ? null : "object" == typeof e ? "" + e : e;
      }
      function C(e, t) {
        return c.hasOwnProperty.call(e, t);
      }
      var R =
        Object.getOwnPropertyDescriptors ||
        function (e) {
          var t = {};
          return (
            E(e).forEach(function (n) {
              t[n] = s(e, n);
            }),
            t
          );
        };
      function T(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function B(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, U(r.key), r);
        }
      }
      function D(e, t, n) {
        return (
          t && B(e.prototype, t),
          n && B(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function N(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (n) return (n = n.call(e)).next.bind(n);
        if (
          Array.isArray(e) ||
          (n = (function (e, t) {
            if (e) {
              if ("string" == typeof e) return T(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? T(e, t)
                    : void 0
              );
            }
          })(e)) ||
          (t && e && "number" == typeof e.length)
        ) {
          n && (e = n);
          var r = 0;
          return function () {
            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      }
      function V() {
        return (
          (V = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          V.apply(null, arguments)
        );
      }
      function L(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          M(e, t);
      }
      function M(e, t) {
        return (
          (M = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          M(e, t)
        );
      }
      function U(e) {
        var t = (function (e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == typeof t ? t : t + "";
      }
      var I = Symbol("mobx-stored-annotations");
      function K(e) {
        return Object.assign(function (t, n) {
          if (q(n)) return e.decorate_20223_(t, n);
          G(t, n, e);
        }, e);
      }
      function G(e, t, n) {
        C(e, I) || w(e, I, V({}, e[I])),
          (function (e) {
            return e.annotationType_ === J;
          })(n) || (e[I][t] = n);
      }
      function q(e) {
        return "object" == typeof e && "string" == typeof e.kind;
      }
      var W = Symbol("mobx administration"),
        H = (function () {
          function e(e) {
            void 0 === e && (e = "Atom"),
              (this.name_ = void 0),
              (this.isPendingUnobservation = !1),
              (this.isBeingObserved = !1),
              (this.observers_ = new Set()),
              (this.diffValue_ = 0),
              (this.lastAccessedBy_ = 0),
              (this.lowestObserverState_ = tt.NOT_TRACKING_),
              (this.onBOL = void 0),
              (this.onBUOL = void 0),
              (this.name_ = e);
          }
          var t = e.prototype;
          return (
            (t.onBO = function () {
              this.onBOL &&
                this.onBOL.forEach(function (e) {
                  return e();
                });
            }),
            (t.onBUO = function () {
              this.onBUOL &&
                this.onBUOL.forEach(function (e) {
                  return e();
                });
            }),
            (t.reportObserved = function () {
              return Pt(this);
            }),
            (t.reportChanged = function () {
              kt(), Ct(this), Et();
            }),
            (t.toString = function () {
              return this.name_;
            }),
            e
          );
        })(),
        F = S("Atom", H);
      function z(e, t, n) {
        void 0 === t && (t = p), void 0 === n && (n = p);
        var r = new H(e);
        return t !== p && rn(r, t), n !== p && on(r, n), r;
      }
      var X = {
        identity: function (e, t) {
          return e === t;
        },
        structural: function (e, t) {
          return Qr(e, t);
        },
        default: function (e, t) {
          return Object.is
            ? Object.is(e, t)
            : e === t
              ? 0 !== e || 1 / e == 1 / t
              : e != e && t != t;
        },
        shallow: function (e, t) {
          return Qr(e, t, 1);
        },
      };
      function $(e, t, n) {
        return Rn(e)
          ? e
          : Array.isArray(e)
            ? De.array(e, { name: n })
            : m(e)
              ? De.object(e, void 0, { name: n })
              : j(e)
                ? De.map(e, { name: n })
                : x(e)
                  ? De.set(e, { name: n })
                  : "function" != typeof e || Yt(e) || Sn(e)
                    ? e
                    : O(e)
                      ? On(e)
                      : Xt(n, e);
      }
      function Y(e) {
        return e;
      }
      var J = "override",
        Q = K({
          annotationType_: J,
          make_: function (e, t) {
            0;
            0;
            return 0;
          },
          extend_: function (e, t, n, i) {
            r(
              "'" +
                this.annotationType_ +
                "' can only be used with 'makeObservable'",
            );
          },
          decorate_20223_: function (e, t) {
            console.warn(
              "'" +
                this.annotationType_ +
                "' cannot be used with decorators - this is a no-op",
            );
          },
        });
      function Z(e, t) {
        return {
          annotationType_: e,
          options_: t,
          make_: ee,
          extend_: te,
          decorate_20223_: ne,
        };
      }
      function ee(e, t, n, r) {
        var i;
        if (null != (i = this.options_) && i.bound)
          return null === this.extend_(e, t, n, !1) ? 0 : 1;
        if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
        if (Yt(n.value)) return 1;
        var o = re(e, this, t, n, !1);
        return u(r, t, o), 2;
      }
      function te(e, t, n, r) {
        var i = re(e, this, t, n);
        return e.defineProperty_(t, i, r);
      }
      function ne(e, t) {
        var n = t.kind,
          i = t.name,
          o = t.addInitializer,
          a = this;
        if ("field" != n) {
          var s, u, c, l, f, h;
          if ("method" == n)
            return (
              Yt(e) ||
                ((u = e),
                (e = qe(
                  null != (c = null == (l = a.options_) ? void 0 : l.name)
                    ? c
                    : i.toString(),
                  u,
                  null !=
                    (f = null == (h = a.options_) ? void 0 : h.autoAction) && f,
                ))),
              null != (s = this.options_) &&
                s.bound &&
                o(function () {
                  var e = this,
                    t = e[i].bind(e);
                  (t.isMobxAction = !0), (e[i] = t);
                }),
              e
            );
          r(
            "Cannot apply '" +
              a.annotationType_ +
              "' to '" +
              String(i) +
              "' (kind: " +
              n +
              "):\n'" +
              a.annotationType_ +
              "' can only be used on properties with a function value.",
          );
        } else
          o(function () {
            G(this, i, a);
          });
      }
      function re(e, t, n, r, i) {
        var o, a, s, u, c, l, f, h;
        void 0 === i && (i = Ot.safeDescriptors),
          (h = r),
          t.annotationType_,
          h.value;
        var v,
          d = r.value;
        null != (o = t.options_) &&
          o.bound &&
          (d = d.bind(null != (v = e.proxy_) ? v : e.target_));
        return {
          value: qe(
            null != (a = null == (s = t.options_) ? void 0 : s.name)
              ? a
              : n.toString(),
            d,
            null != (u = null == (c = t.options_) ? void 0 : c.autoAction) && u,
            null != (l = t.options_) && l.bound
              ? null != (f = e.proxy_)
                ? f
                : e.target_
              : void 0,
          ),
          configurable: !i || e.isPlainObject_,
          enumerable: !1,
          writable: !i,
        };
      }
      function ie(e, t) {
        return {
          annotationType_: e,
          options_: t,
          make_: oe,
          extend_: ae,
          decorate_20223_: se,
        };
      }
      function oe(e, t, n, r) {
        var i;
        if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
        if (
          null != (i = this.options_) &&
          i.bound &&
          (!C(e.target_, t) || !Sn(e.target_[t])) &&
          null === this.extend_(e, t, n, !1)
        )
          return 0;
        if (Sn(n.value)) return 1;
        var o = ue(e, this, t, n, !1, !1);
        return u(r, t, o), 2;
      }
      function ae(e, t, n, r) {
        var i,
          o = ue(e, this, t, n, null == (i = this.options_) ? void 0 : i.bound);
        return e.defineProperty_(t, o, r);
      }
      function se(e, t) {
        var n;
        var r = t.name,
          i = t.addInitializer;
        return (
          Sn(e) || (e = On(e)),
          null != (n = this.options_) &&
            n.bound &&
            i(function () {
              var e = this,
                t = e[r].bind(e);
              (t.isMobXFlow = !0), (e[r] = t);
            }),
          e
        );
      }
      function ue(e, t, n, r, i, o) {
        var a;
        void 0 === o && (o = Ot.safeDescriptors),
          (a = r),
          t.annotationType_,
          a.value;
        var s,
          u = r.value;
        (Sn(u) || (u = On(u)), i) &&
          ((u = u.bind(null != (s = e.proxy_) ? s : e.target_)).isMobXFlow =
            !0);
        return {
          value: u,
          configurable: !o || e.isPlainObject_,
          enumerable: !1,
          writable: !o,
        };
      }
      function ce(e, t) {
        return {
          annotationType_: e,
          options_: t,
          make_: le,
          extend_: fe,
          decorate_20223_: he,
        };
      }
      function le(e, t, n) {
        return null === this.extend_(e, t, n, !1) ? 0 : 1;
      }
      function fe(e, t, n, r) {
        return (
          (function (e, t, n, r) {
            t.annotationType_, r.get;
            0;
          })(0, this, 0, n),
          e.defineComputedProperty_(
            t,
            V({}, this.options_, { get: n.get, set: n.set }),
            r,
          )
        );
      }
      function he(e, t) {
        var n = this,
          r = t.name;
        return (
          (0, t.addInitializer)(function () {
            var t = Cr(this)[W],
              i = V({}, n.options_, { get: e, context: this });
            i.name || (i.name = "ObservableObject." + r.toString()),
              t.values_.set(r, new et(i));
          }),
          function () {
            return this[W].getObservablePropValue_(r);
          }
        );
      }
      function ve(e, t) {
        return {
          annotationType_: e,
          options_: t,
          make_: de,
          extend_: _e,
          decorate_20223_: pe,
        };
      }
      function de(e, t, n) {
        return null === this.extend_(e, t, n, !1) ? 0 : 1;
      }
      function _e(e, t, n, r) {
        var i, o;
        return (
          (function (e, t) {
            t.annotationType_;
            0;
          })(0, this),
          e.defineObservableProperty_(
            t,
            n.value,
            null != (i = null == (o = this.options_) ? void 0 : o.enhancer)
              ? i
              : $,
            r,
          )
        );
      }
      function pe(e, t) {
        var n = this,
          r = t.kind,
          i = t.name,
          o = new WeakSet();
        function a(e, t) {
          var r,
            a,
            s = Cr(e)[W],
            u = new Ye(
              t,
              null != (r = null == (a = n.options_) ? void 0 : a.enhancer)
                ? r
                : $,
              "ObservableObject." + i.toString(),
              !1,
            );
          s.values_.set(i, u), o.add(e);
        }
        if ("accessor" == r)
          return {
            get: function () {
              return (
                o.has(this) || a(this, e.get.call(this)),
                this[W].getObservablePropValue_(i)
              );
            },
            set: function (e) {
              return (
                o.has(this) || a(this, e), this[W].setObservablePropValue_(i, e)
              );
            },
            init: function (e) {
              return o.has(this) || a(this, e), e;
            },
          };
      }
      var be = "true",
        ye = ge();
      function ge(e) {
        return {
          annotationType_: be,
          options_: e,
          make_: me,
          extend_: Oe,
          decorate_20223_: we,
        };
      }
      function me(e, t, n, r) {
        var i, o, a, s;
        if (n.get) return Me.make_(e, t, n, r);
        if (n.set) {
          var c = qe(t.toString(), n.set);
          return r === e.target_
            ? null ===
              e.defineProperty_(t, {
                configurable: !Ot.safeDescriptors || e.isPlainObject_,
                set: c,
              })
              ? 0
              : 2
            : (u(r, t, { configurable: !0, set: c }), 2);
        }
        if (r !== e.target_ && "function" == typeof n.value)
          return O(n.value)
            ? (null != (s = this.options_) && s.autoBind ? On.bound : On).make_(
                e,
                t,
                n,
                r,
              )
            : (null != (a = this.options_) && a.autoBind ? Xt.bound : Xt).make_(
                e,
                t,
                n,
                r,
              );
        var l,
          f =
            !1 === (null == (i = this.options_) ? void 0 : i.deep)
              ? De.ref
              : De;
        "function" == typeof n.value &&
          null != (o = this.options_) &&
          o.autoBind &&
          (n.value = n.value.bind(null != (l = e.proxy_) ? l : e.target_));
        return f.make_(e, t, n, r);
      }
      function Oe(e, t, n, r) {
        var i, o, a;
        if (n.get) return Me.extend_(e, t, n, r);
        if (n.set)
          return e.defineProperty_(
            t,
            {
              configurable: !Ot.safeDescriptors || e.isPlainObject_,
              set: qe(t.toString(), n.set),
            },
            r,
          );
        "function" == typeof n.value &&
          null != (i = this.options_) &&
          i.autoBind &&
          (n.value = n.value.bind(null != (a = e.proxy_) ? a : e.target_));
        return (
          !1 === (null == (o = this.options_) ? void 0 : o.deep) ? De.ref : De
        ).extend_(e, t, n, r);
      }
      function we(e, t) {
        r("'" + this.annotationType_ + "' cannot be used as a decorator");
      }
      var Ae = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
      function Se(e) {
        return e || Ae;
      }
      Object.freeze(Ae);
      var je = ve("observable"),
        xe = ve("observable.ref", { enhancer: Y }),
        ke = ve("observable.shallow", {
          enhancer: function (e, t, n) {
            return null == e || Br(e) || yr(e) || Ar(e) || xr(e)
              ? e
              : Array.isArray(e)
                ? De.array(e, { name: n, deep: !1 })
                : m(e)
                  ? De.object(e, void 0, { name: n, deep: !1 })
                  : j(e)
                    ? De.map(e, { name: n, deep: !1 })
                    : x(e)
                      ? De.set(e, { name: n, deep: !1 })
                      : void 0;
          },
        }),
        Ee = ve("observable.struct", {
          enhancer: function (e, t) {
            return Qr(e, t) ? t : e;
          },
        }),
        Pe = K(je);
      function Ce(e) {
        return !0 === e.deep
          ? $
          : !1 === e.deep
            ? Y
            : (t = e.defaultDecorator) &&
                null != (n = null == (r = t.options_) ? void 0 : r.enhancer)
              ? n
              : $;
        var t, n, r;
      }
      function Re(e, t, n) {
        return q(t)
          ? je.decorate_20223_(e, t)
          : y(t)
            ? void G(e, t, je)
            : Rn(e)
              ? e
              : m(e)
                ? De.object(e, t, n)
                : Array.isArray(e)
                  ? De.array(e, t)
                  : j(e)
                    ? De.map(e, t)
                    : x(e)
                      ? De.set(e, t)
                      : "object" == typeof e && null !== e
                        ? e
                        : De.box(e, t);
      }
      a(Re, Pe);
      var Te,
        Be,
        De = a(Re, {
          box: function (e, t) {
            var n = Se(t);
            return new Ye(e, Ce(n), n.name, !0, n.equals);
          },
          array: function (e, t) {
            var n = Se(t);
            return (!1 === Ot.useProxies || !1 === n.proxy ? Fr : fr)(
              e,
              Ce(n),
              n.name,
            );
          },
          map: function (e, t) {
            var n = Se(t);
            return new wr(e, Ce(n), n.name);
          },
          set: function (e, t) {
            var n = Se(t);
            return new jr(e, Ce(n), n.name);
          },
          object: function (e, t, n) {
            return Yr(function () {
              return fn(
                !1 === Ot.useProxies || !1 === (null == n ? void 0 : n.proxy)
                  ? Cr({}, n)
                  : (function (e, t) {
                      var n, r;
                      return (
                        d(),
                        (e = Cr(e, t)),
                        null != (r = (n = e[W]).proxy_)
                          ? r
                          : (n.proxy_ = new Proxy(e, Jn))
                      );
                    })({}, n),
                e,
                t,
              );
            });
          },
          ref: K(xe),
          shallow: K(ke),
          deep: Pe,
          struct: K(Ee),
        }),
        Ne = "computed",
        Ve = ce(Ne),
        Le = ce("computed.struct", { equals: X.structural }),
        Me = function (e, t) {
          if (q(t)) return Ve.decorate_20223_(e, t);
          if (y(t)) return G(e, t, Ve);
          if (m(e)) return K(ce(Ne, e));
          var n = m(t) ? t : {};
          return (n.get = e), n.name || (n.name = e.name || ""), new et(n);
        };
      Object.assign(Me, Ve), (Me.struct = K(Le));
      var Ue = 0,
        Ie = 1,
        Ke =
          null !=
            (Te =
              null == (Be = s(function () {}, "name"))
                ? void 0
                : Be.configurable) && Te,
        Ge = {
          value: "action",
          configurable: !0,
          writable: !1,
          enumerable: !1,
        };
      function qe(e, t, n, r) {
        function i() {
          return We(e, n, t, r || this, arguments);
        }
        return (
          void 0 === n && (n = !1),
          (i.isMobxAction = !0),
          (i.toString = function () {
            return t.toString();
          }),
          Ke && ((Ge.value = e), u(i, "name", Ge)),
          i
        );
      }
      function We(e, t, n, r, i) {
        var o = He(e, t, r, i);
        try {
          return n.apply(r, i);
        } catch (e) {
          throw ((o.error_ = e), e);
        } finally {
          Fe(o);
        }
      }
      function He(e, t, n, r) {
        var i = Ot.trackingDerivation,
          o = !t || !i;
        kt();
        var a = Ot.allowStateChanges;
        o && (ht(), (a = Xe(!0)));
        var s = {
          runAsAction_: o,
          prevDerivation_: i,
          prevAllowStateChanges_: a,
          prevAllowStateReads_: dt(!0),
          notifySpy_: !1,
          startTime_: 0,
          actionId_: Ie++,
          parentActionId_: Ue,
        };
        return (Ue = s.actionId_), s;
      }
      function Fe(e) {
        Ue !== e.actionId_ && r(30),
          (Ue = e.parentActionId_),
          void 0 !== e.error_ && (Ot.suppressReactionErrors = !0),
          $e(e.prevAllowStateChanges_),
          _t(e.prevAllowStateReads_),
          Et(),
          e.runAsAction_ && vt(e.prevDerivation_),
          (Ot.suppressReactionErrors = !1);
      }
      function ze(e, t) {
        var n = Xe(e);
        try {
          return t();
        } finally {
          $e(n);
        }
      }
      function Xe(e) {
        var t = Ot.allowStateChanges;
        return (Ot.allowStateChanges = e), t;
      }
      function $e(e) {
        Ot.allowStateChanges = e;
      }
      var Ye = (function (e) {
          function t(t, n, r, i, o) {
            var a;
            return (
              void 0 === r && (r = "ObservableValue"),
              void 0 === i && (i = !0),
              void 0 === o && (o = X.default),
              ((a = e.call(this, r) || this).enhancer = void 0),
              (a.name_ = void 0),
              (a.equals = void 0),
              (a.hasUnreportedChange_ = !1),
              (a.interceptors_ = void 0),
              (a.changeListeners_ = void 0),
              (a.value_ = void 0),
              (a.dehancer = void 0),
              (a.enhancer = n),
              (a.name_ = r),
              (a.equals = o),
              (a.value_ = n(t, void 0, r)),
              a
            );
          }
          L(t, e);
          var n = t.prototype;
          return (
            (n.dehanceValue = function (e) {
              return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (n.set = function (e) {
              this.value_;
              if ((e = this.prepareNewValue_(e)) !== Ot.UNCHANGED) {
                0, this.setNewValue_(e);
              }
            }),
            (n.prepareNewValue_ = function (e) {
              if ((ut(this), Qn(this))) {
                var t = er(this, { object: this, type: ur, newValue: e });
                if (!t) return Ot.UNCHANGED;
                e = t.newValue;
              }
              return (
                (e = this.enhancer(e, this.value_, this.name_)),
                this.equals(this.value_, e) ? Ot.UNCHANGED : e
              );
            }),
            (n.setNewValue_ = function (e) {
              var t = this.value_;
              (this.value_ = e),
                this.reportChanged(),
                tr(this) &&
                  rr(this, {
                    type: ur,
                    object: this,
                    newValue: e,
                    oldValue: t,
                  });
            }),
            (n.get = function () {
              return this.reportObserved(), this.dehanceValue(this.value_);
            }),
            (n.intercept_ = function (e) {
              return Zn(this, e);
            }),
            (n.observe_ = function (e, t) {
              return (
                t &&
                  e({
                    observableKind: "value",
                    debugObjectName: this.name_,
                    object: this,
                    type: ur,
                    newValue: this.value_,
                    oldValue: void 0,
                  }),
                nr(this, e)
              );
            }),
            (n.raw = function () {
              return this.value_;
            }),
            (n.toJSON = function () {
              return this.get();
            }),
            (n.toString = function () {
              return this.name_ + "[" + this.value_ + "]";
            }),
            (n.valueOf = function () {
              return P(this.get());
            }),
            (n[Symbol.toPrimitive] = function () {
              return this.valueOf();
            }),
            t
          );
        })(H),
        Je = S("ObservableValue", Ye);
      function Qe(e, t) {
        return !!(e & t);
      }
      function Ze(e, t, n) {
        return n ? (e |= t) : (e &= ~t), e;
      }
      var et = (function () {
        function e(e) {
          (this.dependenciesState_ = tt.NOT_TRACKING_),
            (this.observing_ = []),
            (this.newObserving_ = null),
            (this.observers_ = new Set()),
            (this.diffValue_ = 0),
            (this.runId_ = 0),
            (this.lastAccessedBy_ = 0),
            (this.lowestObserverState_ = tt.UP_TO_DATE_),
            (this.unboundDepsCount_ = 0),
            (this.value_ = new it(null)),
            (this.name_ = void 0),
            (this.triggeredBy_ = void 0),
            (this.flags_ = 0),
            (this.derivation = void 0),
            (this.setter_ = void 0),
            (this.isTracing_ = nt.NONE),
            (this.scope_ = void 0),
            (this.equals_ = void 0),
            (this.requiresReaction_ = void 0),
            (this.keepAlive_ = void 0),
            (this.onBOL = void 0),
            (this.onBUOL = void 0),
            e.get || r(31),
            (this.derivation = e.get),
            (this.name_ = e.name || "ComputedValue"),
            e.set && (this.setter_ = qe("ComputedValue-setter", e.set)),
            (this.equals_ =
              e.equals ||
              (e.compareStructural || e.struct ? X.structural : X.default)),
            (this.scope_ = e.context),
            (this.requiresReaction_ = e.requiresReaction),
            (this.keepAlive_ = !!e.keepAlive);
        }
        var t = e.prototype;
        return (
          (t.onBecomeStale_ = function () {
            !(function (e) {
              if (e.lowestObserverState_ !== tt.UP_TO_DATE_) return;
              (e.lowestObserverState_ = tt.POSSIBLY_STALE_),
                e.observers_.forEach(function (e) {
                  e.dependenciesState_ === tt.UP_TO_DATE_ &&
                    ((e.dependenciesState_ = tt.POSSIBLY_STALE_),
                    e.onBecomeStale_());
                });
            })(this);
          }),
          (t.onBO = function () {
            this.onBOL &&
              this.onBOL.forEach(function (e) {
                return e();
              });
          }),
          (t.onBUO = function () {
            this.onBUOL &&
              this.onBUOL.forEach(function (e) {
                return e();
              });
          }),
          (t.get = function () {
            if (
              (this.isComputing && r(32, this.name_, this.derivation),
              0 !== Ot.inBatch || 0 !== this.observers_.size || this.keepAlive_)
            ) {
              if ((Pt(this), at(this))) {
                var e = Ot.trackingContext;
                this.keepAlive_ && !e && (Ot.trackingContext = this),
                  this.trackAndCompute() &&
                    (function (e) {
                      if (e.lowestObserverState_ === tt.STALE_) return;
                      (e.lowestObserverState_ = tt.STALE_),
                        e.observers_.forEach(function (t) {
                          t.dependenciesState_ === tt.POSSIBLY_STALE_
                            ? (t.dependenciesState_ = tt.STALE_)
                            : t.dependenciesState_ === tt.UP_TO_DATE_ &&
                              (e.lowestObserverState_ = tt.UP_TO_DATE_);
                        });
                    })(this),
                  (Ot.trackingContext = e);
              }
            } else
              at(this) &&
                (this.warnAboutUntrackedRead_(),
                kt(),
                (this.value_ = this.computeValue_(!1)),
                Et());
            var t = this.value_;
            if (ot(t)) throw t.cause;
            return t;
          }),
          (t.set = function (e) {
            if (this.setter_) {
              this.isRunningSetter && r(33, this.name_),
                (this.isRunningSetter = !0);
              try {
                this.setter_.call(this.scope_, e);
              } finally {
                this.isRunningSetter = !1;
              }
            } else r(34, this.name_);
          }),
          (t.trackAndCompute = function () {
            var e = this.value_,
              t = this.dependenciesState_ === tt.NOT_TRACKING_,
              n = this.computeValue_(!0),
              r = t || ot(e) || ot(n) || !this.equals_(e, n);
            return r && (this.value_ = n), r;
          }),
          (t.computeValue_ = function (e) {
            this.isComputing = !0;
            var t,
              n = Xe(!1);
            if (e) t = ct(this, this.derivation, this.scope_);
            else if (!0 === Ot.disableErrorBoundaries)
              t = this.derivation.call(this.scope_);
            else
              try {
                t = this.derivation.call(this.scope_);
              } catch (e) {
                t = new it(e);
              }
            return $e(n), (this.isComputing = !1), t;
          }),
          (t.suspend_ = function () {
            this.keepAlive_ || (lt(this), (this.value_ = void 0));
          }),
          (t.observe_ = function (e, t) {
            var n = this,
              r = !0,
              i = void 0;
            return Jt(function () {
              var o = n.get();
              if (!r || t) {
                var a = ht();
                e({
                  observableKind: "computed",
                  debugObjectName: n.name_,
                  type: ur,
                  object: n,
                  newValue: o,
                  oldValue: i,
                }),
                  vt(a);
              }
              (r = !1), (i = o);
            });
          }),
          (t.warnAboutUntrackedRead_ = function () {}),
          (t.toString = function () {
            return this.name_ + "[" + this.derivation.toString() + "]";
          }),
          (t.valueOf = function () {
            return P(this.get());
          }),
          (t[Symbol.toPrimitive] = function () {
            return this.valueOf();
          }),
          D(e, [
            {
              key: "isComputing",
              get: function () {
                return Qe(this.flags_, e.isComputingMask_);
              },
              set: function (t) {
                this.flags_ = Ze(this.flags_, e.isComputingMask_, t);
              },
            },
            {
              key: "isRunningSetter",
              get: function () {
                return Qe(this.flags_, e.isRunningSetterMask_);
              },
              set: function (t) {
                this.flags_ = Ze(this.flags_, e.isRunningSetterMask_, t);
              },
            },
            {
              key: "isBeingObserved",
              get: function () {
                return Qe(this.flags_, e.isBeingObservedMask_);
              },
              set: function (t) {
                this.flags_ = Ze(this.flags_, e.isBeingObservedMask_, t);
              },
            },
            {
              key: "isPendingUnobservation",
              get: function () {
                return Qe(this.flags_, e.isPendingUnobservationMask_);
              },
              set: function (t) {
                this.flags_ = Ze(this.flags_, e.isPendingUnobservationMask_, t);
              },
            },
          ])
        );
      })();
      (et.isComputingMask_ = 1),
        (et.isRunningSetterMask_ = 2),
        (et.isBeingObservedMask_ = 4),
        (et.isPendingUnobservationMask_ = 8);
      var tt,
        nt,
        rt = S("ComputedValue", et);
      !(function (e) {
        (e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
          (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
          (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
          (e[(e.STALE_ = 2)] = "STALE_");
      })(tt || (tt = {})),
        (function (e) {
          (e[(e.NONE = 0)] = "NONE"),
            (e[(e.LOG = 1)] = "LOG"),
            (e[(e.BREAK = 2)] = "BREAK");
        })(nt || (nt = {}));
      var it = function (e) {
        (this.cause = void 0), (this.cause = e);
      };
      function ot(e) {
        return e instanceof it;
      }
      function at(e) {
        switch (e.dependenciesState_) {
          case tt.UP_TO_DATE_:
            return !1;
          case tt.NOT_TRACKING_:
          case tt.STALE_:
            return !0;
          case tt.POSSIBLY_STALE_:
            for (
              var t = dt(!0), n = ht(), r = e.observing_, i = r.length, o = 0;
              o < i;
              o++
            ) {
              var a = r[o];
              if (rt(a)) {
                if (Ot.disableErrorBoundaries) a.get();
                else
                  try {
                    a.get();
                  } catch (e) {
                    return vt(n), _t(t), !0;
                  }
                if (e.dependenciesState_ === tt.STALE_) return vt(n), _t(t), !0;
              }
            }
            return pt(e), vt(n), _t(t), !1;
        }
      }
      function st() {
        return null !== Ot.trackingDerivation;
      }
      function ut(e) {}
      function ct(e, t, n) {
        var r = dt(!0);
        pt(e),
          (e.newObserving_ = new Array(
            0 === e.runId_ ? 100 : e.observing_.length,
          )),
          (e.unboundDepsCount_ = 0),
          (e.runId_ = ++Ot.runId);
        var i,
          o = Ot.trackingDerivation;
        if (
          ((Ot.trackingDerivation = e),
          Ot.inBatch++,
          !0 === Ot.disableErrorBoundaries)
        )
          i = t.call(n);
        else
          try {
            i = t.call(n);
          } catch (e) {
            i = new it(e);
          }
        return (
          Ot.inBatch--,
          (Ot.trackingDerivation = o),
          (function (e) {
            for (
              var t = e.observing_,
                n = (e.observing_ = e.newObserving_),
                r = tt.UP_TO_DATE_,
                i = 0,
                o = e.unboundDepsCount_,
                a = 0;
              a < o;
              a++
            ) {
              var s = n[a];
              0 === s.diffValue_ &&
                ((s.diffValue_ = 1), i !== a && (n[i] = s), i++),
                s.dependenciesState_ > r && (r = s.dependenciesState_);
            }
            (n.length = i), (e.newObserving_ = null), (o = t.length);
            for (; o--; ) {
              var u = t[o];
              0 === u.diffValue_ && jt(u, e), (u.diffValue_ = 0);
            }
            for (; i--; ) {
              var c = n[i];
              1 === c.diffValue_ && ((c.diffValue_ = 0), St(c, e));
            }
            r !== tt.UP_TO_DATE_ &&
              ((e.dependenciesState_ = r), e.onBecomeStale_());
          })(e),
          _t(r),
          i
        );
      }
      function lt(e) {
        var t = e.observing_;
        e.observing_ = [];
        for (var n = t.length; n--; ) jt(t[n], e);
        e.dependenciesState_ = tt.NOT_TRACKING_;
      }
      function ft(e) {
        var t = ht();
        try {
          return e();
        } finally {
          vt(t);
        }
      }
      function ht() {
        var e = Ot.trackingDerivation;
        return (Ot.trackingDerivation = null), e;
      }
      function vt(e) {
        Ot.trackingDerivation = e;
      }
      function dt(e) {
        var t = Ot.allowStateReads;
        return (Ot.allowStateReads = e), t;
      }
      function _t(e) {
        Ot.allowStateReads = e;
      }
      function pt(e) {
        if (e.dependenciesState_ !== tt.UP_TO_DATE_) {
          e.dependenciesState_ = tt.UP_TO_DATE_;
          for (var t = e.observing_, n = t.length; n--; )
            t[n].lowestObserverState_ = tt.UP_TO_DATE_;
        }
      }
      var bt = [
          "mobxGuid",
          "spyListeners",
          "enforceActions",
          "computedRequiresReaction",
          "reactionRequiresObservable",
          "observableRequiresReaction",
          "allowStateReads",
          "disableErrorBoundaries",
          "runId",
          "UNCHANGED",
          "useProxies",
        ],
        yt = function () {
          (this.version = 6),
            (this.UNCHANGED = {}),
            (this.trackingDerivation = null),
            (this.trackingContext = null),
            (this.runId = 0),
            (this.mobxGuid = 0),
            (this.inBatch = 0),
            (this.pendingUnobservations = []),
            (this.pendingReactions = []),
            (this.isRunningReactions = !1),
            (this.allowStateChanges = !1),
            (this.allowStateReads = !0),
            (this.enforceActions = !0),
            (this.spyListeners = []),
            (this.globalReactionErrorHandlers = []),
            (this.computedRequiresReaction = !1),
            (this.reactionRequiresObservable = !1),
            (this.observableRequiresReaction = !1),
            (this.disableErrorBoundaries = !1),
            (this.suppressReactionErrors = !1),
            (this.useProxies = !0),
            (this.verifyProxies = !1),
            (this.safeDescriptors = !0);
        },
        gt = !0,
        mt = !1,
        Ot = (function () {
          var e = o();
          return (
            e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (gt = !1),
            e.__mobxGlobals &&
              e.__mobxGlobals.version !== new yt().version &&
              (gt = !1),
            gt
              ? e.__mobxGlobals
                ? ((e.__mobxInstanceCount += 1),
                  e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
                  e.__mobxGlobals)
                : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new yt()))
              : (setTimeout(function () {
                  mt || r(35);
                }, 1),
                new yt())
          );
        })();
      function wt() {
        return Ot;
      }
      function At() {
        var e = new yt();
        for (var t in e) -1 === bt.indexOf(t) && (Ot[t] = e[t]);
        Ot.allowStateChanges = !Ot.enforceActions;
      }
      function St(e, t) {
        e.observers_.add(t),
          e.lowestObserverState_ > t.dependenciesState_ &&
            (e.lowestObserverState_ = t.dependenciesState_);
      }
      function jt(e, t) {
        e.observers_.delete(t), 0 === e.observers_.size && xt(e);
      }
      function xt(e) {
        !1 === e.isPendingUnobservation &&
          ((e.isPendingUnobservation = !0), Ot.pendingUnobservations.push(e));
      }
      function kt() {
        Ot.inBatch++;
      }
      function Et() {
        if (0 === --Ot.inBatch) {
          Nt();
          for (var e = Ot.pendingUnobservations, t = 0; t < e.length; t++) {
            var n = e[t];
            (n.isPendingUnobservation = !1),
              0 === n.observers_.size &&
                (n.isBeingObserved && ((n.isBeingObserved = !1), n.onBUO()),
                n instanceof et && n.suspend_());
          }
          Ot.pendingUnobservations = [];
        }
      }
      function Pt(e) {
        var t = Ot.trackingDerivation;
        return null !== t
          ? (t.runId_ !== e.lastAccessedBy_ &&
              ((e.lastAccessedBy_ = t.runId_),
              (t.newObserving_[t.unboundDepsCount_++] = e),
              !e.isBeingObserved &&
                Ot.trackingContext &&
                ((e.isBeingObserved = !0), e.onBO())),
            e.isBeingObserved)
          : (0 === e.observers_.size && Ot.inBatch > 0 && xt(e), !1);
      }
      function Ct(e) {
        e.lowestObserverState_ !== tt.STALE_ &&
          ((e.lowestObserverState_ = tt.STALE_),
          e.observers_.forEach(function (e) {
            e.dependenciesState_ === tt.UP_TO_DATE_ && e.onBecomeStale_(),
              (e.dependenciesState_ = tt.STALE_);
          }));
      }
      var Rt = (function () {
        function e(e, t, n, r) {
          void 0 === e && (e = "Reaction"),
            (this.name_ = void 0),
            (this.onInvalidate_ = void 0),
            (this.errorHandler_ = void 0),
            (this.requiresObservable_ = void 0),
            (this.observing_ = []),
            (this.newObserving_ = []),
            (this.dependenciesState_ = tt.NOT_TRACKING_),
            (this.diffValue_ = 0),
            (this.runId_ = 0),
            (this.unboundDepsCount_ = 0),
            (this.isDisposed_ = !1),
            (this.isScheduled_ = !1),
            (this.isTrackPending_ = !1),
            (this.isRunning_ = !1),
            (this.isTracing_ = nt.NONE),
            (this.name_ = e),
            (this.onInvalidate_ = t),
            (this.errorHandler_ = n),
            (this.requiresObservable_ = r);
        }
        var t = e.prototype;
        return (
          (t.onBecomeStale_ = function () {
            this.schedule_();
          }),
          (t.schedule_ = function () {
            this.isScheduled_ ||
              ((this.isScheduled_ = !0), Ot.pendingReactions.push(this), Nt());
          }),
          (t.isScheduled = function () {
            return this.isScheduled_;
          }),
          (t.runReaction_ = function () {
            if (!this.isDisposed_) {
              kt(), (this.isScheduled_ = !1);
              var e = Ot.trackingContext;
              if (((Ot.trackingContext = this), at(this))) {
                this.isTrackPending_ = !0;
                try {
                  this.onInvalidate_();
                } catch (e) {
                  this.reportExceptionInDerivation_(e);
                }
              }
              (Ot.trackingContext = e), Et();
            }
          }),
          (t.track = function (e) {
            if (!this.isDisposed_) {
              kt();
              0, (this.isRunning_ = !0);
              var t = Ot.trackingContext;
              Ot.trackingContext = this;
              var n = ct(this, e, void 0);
              (Ot.trackingContext = t),
                (this.isRunning_ = !1),
                (this.isTrackPending_ = !1),
                this.isDisposed_ && lt(this),
                ot(n) && this.reportExceptionInDerivation_(n.cause),
                Et();
            }
          }),
          (t.reportExceptionInDerivation_ = function (e) {
            var t = this;
            if (this.errorHandler_) this.errorHandler_(e, this);
            else {
              if (Ot.disableErrorBoundaries) throw e;
              var n = "[mobx] uncaught error in '" + this + "'";
              Ot.suppressReactionErrors || console.error(n, e),
                Ot.globalReactionErrorHandlers.forEach(function (n) {
                  return n(e, t);
                });
            }
          }),
          (t.dispose = function () {
            this.isDisposed_ ||
              ((this.isDisposed_ = !0),
              this.isRunning_ || (kt(), lt(this), Et()));
          }),
          (t.getDisposer_ = function (e) {
            var t = this,
              n = function n() {
                t.dispose(),
                  null == e ||
                    null == e.removeEventListener ||
                    e.removeEventListener("abort", n);
              };
            return (
              null == e ||
                null == e.addEventListener ||
                e.addEventListener("abort", n),
              (n[W] = this),
              n
            );
          }),
          (t.toString = function () {
            return "Reaction[" + this.name_ + "]";
          }),
          (t.trace = function (e) {
            void 0 === e && (e = !1), Fn(this, e);
          }),
          e
        );
      })();
      function Tt(e) {
        return (
          Ot.globalReactionErrorHandlers.push(e),
          function () {
            var t = Ot.globalReactionErrorHandlers.indexOf(e);
            t >= 0 && Ot.globalReactionErrorHandlers.splice(t, 1);
          }
        );
      }
      var Bt = 100,
        Dt = function (e) {
          return e();
        };
      function Nt() {
        Ot.inBatch > 0 || Ot.isRunningReactions || Dt(Vt);
      }
      function Vt() {
        Ot.isRunningReactions = !0;
        for (var e = Ot.pendingReactions, t = 0; e.length > 0; ) {
          ++t === Bt &&
            (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
          for (var n = e.splice(0), r = 0, i = n.length; r < i; r++)
            n[r].runReaction_();
        }
        Ot.isRunningReactions = !1;
      }
      var Lt = S("Reaction", Rt);
      function Mt(e) {
        return (
          console.warn("[mobx.spy] Is a no-op in production builds"),
          function () {}
        );
      }
      var Ut = "action",
        It = "autoAction",
        Kt = "<unnamed action>",
        Gt = Z(Ut),
        qt = Z("action.bound", { bound: !0 }),
        Wt = Z(It, { autoAction: !0 }),
        Ht = Z("autoAction.bound", { autoAction: !0, bound: !0 });
      function Ft(e) {
        return function (t, n) {
          return b(t)
            ? qe(t.name || Kt, t, e)
            : b(n)
              ? qe(t, n, e)
              : q(n)
                ? (e ? Wt : Gt).decorate_20223_(t, n)
                : y(n)
                  ? G(t, n, e ? Wt : Gt)
                  : y(t)
                    ? K(Z(e ? It : Ut, { name: t, autoAction: e }))
                    : void 0;
        };
      }
      var zt = Ft(!1);
      Object.assign(zt, Gt);
      var Xt = Ft(!0);
      function $t(e) {
        return We(e.name || Kt, !1, e, this, void 0);
      }
      function Yt(e) {
        return b(e) && !0 === e.isMobxAction;
      }
      function Jt(e, t) {
        var n, r, i, o;
        void 0 === t && (t = f);
        var a,
          s = null != (n = null == (r = t) ? void 0 : r.name) ? n : "Autorun";
        if (!t.scheduler && !t.delay)
          a = new Rt(
            s,
            function () {
              this.track(l);
            },
            t.onError,
            t.requiresObservable,
          );
        else {
          var u = Zt(t),
            c = !1;
          a = new Rt(
            s,
            function () {
              c ||
                ((c = !0),
                u(function () {
                  (c = !1), a.isDisposed_ || a.track(l);
                }));
            },
            t.onError,
            t.requiresObservable,
          );
        }
        function l() {
          e(a);
        }
        return (
          (null != (i = t) && null != (i = i.signal) && i.aborted) ||
            a.schedule_(),
          a.getDisposer_(null == (o = t) ? void 0 : o.signal)
        );
      }
      Object.assign(Xt, Wt), (zt.bound = K(qt)), (Xt.bound = K(Ht));
      var Qt = function (e) {
        return e();
      };
      function Zt(e) {
        return e.scheduler
          ? e.scheduler
          : e.delay
            ? function (t) {
                return setTimeout(t, e.delay);
              }
            : Qt;
      }
      function en(e, t, n) {
        var r, i, o;
        void 0 === n && (n = f);
        var a,
          s,
          u,
          c = null != (r = n.name) ? r : "Reaction",
          l = zt(
            c,
            n.onError
              ? ((a = n.onError),
                (s = t),
                function () {
                  try {
                    return s.apply(this, arguments);
                  } catch (e) {
                    a.call(this, e);
                  }
                })
              : t,
          ),
          h = !n.scheduler && !n.delay,
          v = Zt(n),
          d = !0,
          _ = !1,
          p = n.compareStructural ? X.structural : n.equals || X.default,
          b = new Rt(
            c,
            function () {
              d || h ? y() : _ || ((_ = !0), v(y));
            },
            n.onError,
            n.requiresObservable,
          );
        function y() {
          if (((_ = !1), !b.isDisposed_)) {
            var t = !1,
              r = u;
            b.track(function () {
              var n = ze(!1, function () {
                return e(b);
              });
              (t = d || !p(u, n)), (u = n);
            }),
              ((d && n.fireImmediately) || (!d && t)) && l(u, r, b),
              (d = !1);
          }
        }
        return (
          (null != (i = n) && null != (i = i.signal) && i.aborted) ||
            b.schedule_(),
          b.getDisposer_(null == (o = n) ? void 0 : o.signal)
        );
      }
      var tn = "onBO",
        nn = "onBUO";
      function rn(e, t, n) {
        return an(tn, e, t, n);
      }
      function on(e, t, n) {
        return an(nn, e, t, n);
      }
      function an(e, t, n, r) {
        var i = "function" == typeof r ? zr(t, n) : zr(t),
          o = b(r) ? r : n,
          a = e + "L";
        return (
          i[a] ? i[a].add(o) : (i[a] = new Set([o])),
          function () {
            var e = i[a];
            e && (e.delete(o), 0 === e.size && delete i[a]);
          }
        );
      }
      var sn = "never",
        un = "always",
        cn = "observed";
      function ln(e) {
        !0 === e.isolateGlobalState &&
          (function () {
            if (
              ((Ot.pendingReactions.length ||
                Ot.inBatch ||
                Ot.isRunningReactions) &&
                r(36),
              (mt = !0),
              gt)
            ) {
              var e = o();
              0 === --e.__mobxInstanceCount && (e.__mobxGlobals = void 0),
                (Ot = new yt());
            }
          })();
        var t,
          n,
          i = e.useProxies,
          a = e.enforceActions;
        if (
          (void 0 !== i &&
            (Ot.useProxies =
              i === un || (i !== sn && "undefined" != typeof Proxy)),
          "ifavailable" === i && (Ot.verifyProxies = !0),
          void 0 !== a)
        ) {
          var s = a === un ? un : a === cn;
          (Ot.enforceActions = s),
            (Ot.allowStateChanges = !0 !== s && s !== un);
        }
        [
          "computedRequiresReaction",
          "reactionRequiresObservable",
          "observableRequiresReaction",
          "disableErrorBoundaries",
          "safeDescriptors",
        ].forEach(function (t) {
          t in e && (Ot[t] = !!e[t]);
        }),
          (Ot.allowStateReads = !Ot.observableRequiresReaction),
          e.reactionScheduler &&
            ((t = e.reactionScheduler),
            (n = Dt),
            (Dt = function (e) {
              return t(function () {
                return n(e);
              });
            }));
      }
      function fn(e, t, n, r) {
        var i = R(t);
        return (
          Yr(function () {
            var t = Cr(e, r)[W];
            E(i).forEach(function (e) {
              t.extend_(e, i[e], !n || !(e in n) || n[e]);
            });
          }),
          e
        );
      }
      function hn(e, t) {
        return vn(zr(e, t));
      }
      function vn(e) {
        var t,
          n = { name: e.name_ };
        return (
          e.observing_ &&
            e.observing_.length > 0 &&
            (n.dependencies = ((t = e.observing_), Array.from(new Set(t))).map(
              vn,
            )),
          n
        );
      }
      function dn(e, t) {
        return _n(zr(e, t));
      }
      function _n(e) {
        var t = { name: e.name_ };
        return (
          (function (e) {
            return e.observers_ && e.observers_.size > 0;
          })(e) &&
            (t.observers = Array.from(
              (function (e) {
                return e.observers_;
              })(e),
            ).map(_n)),
          t
        );
      }
      var pn = 0;
      function bn() {
        this.message = "FLOW_CANCELLED";
      }
      function yn(e) {
        return e instanceof bn;
      }
      bn.prototype = Object.create(Error.prototype);
      var gn = ie("flow"),
        mn = ie("flow.bound", { bound: !0 }),
        On = Object.assign(function (e, t) {
          if (q(t)) return gn.decorate_20223_(e, t);
          if (y(t)) return G(e, t, gn);
          var n = e,
            r = n.name || "<unnamed flow>",
            i = function () {
              var e,
                t = arguments,
                i = ++pn,
                o = zt(r + " - runid: " + i + " - init", n).apply(this, t),
                a = void 0,
                s = new Promise(function (t, n) {
                  var s = 0;
                  function u(e) {
                    var t;
                    a = void 0;
                    try {
                      t = zt(
                        r + " - runid: " + i + " - yield " + s++,
                        o.next,
                      ).call(o, e);
                    } catch (e) {
                      return n(e);
                    }
                    l(t);
                  }
                  function c(e) {
                    var t;
                    a = void 0;
                    try {
                      t = zt(
                        r + " - runid: " + i + " - yield " + s++,
                        o.throw,
                      ).call(o, e);
                    } catch (e) {
                      return n(e);
                    }
                    l(t);
                  }
                  function l(e) {
                    if (!b(null == e ? void 0 : e.then))
                      return e.done
                        ? t(e.value)
                        : (a = Promise.resolve(e.value)).then(u, c);
                    e.then(l, n);
                  }
                  (e = n), u(void 0);
                });
              return (
                (s.cancel = zt(r + " - runid: " + i + " - cancel", function () {
                  try {
                    a && wn(a);
                    var t = o.return(void 0),
                      n = Promise.resolve(t.value);
                    n.then(p, p), wn(n), e(new bn());
                  } catch (t) {
                    e(t);
                  }
                })),
                s
              );
            };
          return (i.isMobXFlow = !0), i;
        }, gn);
      function wn(e) {
        b(e.cancel) && e.cancel();
      }
      function An(e) {
        return e;
      }
      function Sn(e) {
        return !0 === (null == e ? void 0 : e.isMobXFlow);
      }
      function jn(e, t, n) {
        var r;
        return (
          Ar(e) || yr(e) || Je(e) ? (r = Xr(e)) : Br(e) && (r = Xr(e, t)),
          (r.dehancer = "function" == typeof t ? t : n),
          function () {
            r.dehancer = void 0;
          }
        );
      }
      function xn(e, t, n) {
        return b(n)
          ? (function (e, t, n) {
              return Xr(e, t).intercept_(n);
            })(e, t, n)
          : (function (e, t) {
              return Xr(e).intercept_(t);
            })(e, t);
      }
      function kn(e, t) {
        if (void 0 === t) return rt(e);
        if (!1 === Br(e)) return !1;
        if (!e[W].values_.has(t)) return !1;
        var n = zr(e, t);
        return rt(n);
      }
      function En(e) {
        return kn(e);
      }
      function Pn(e, t) {
        return kn(e, t);
      }
      function Cn(e, t) {
        return (
          !!e &&
          (void 0 !== t
            ? !!Br(e) && e[W].values_.has(t)
            : Br(e) || !!e[W] || F(e) || Lt(e) || rt(e))
        );
      }
      function Rn(e) {
        return Cn(e);
      }
      function Tn(e, t) {
        return Cn(e, t);
      }
      function Bn(e) {
        return Br(e)
          ? e[W].keys_()
          : Ar(e) || xr(e)
            ? Array.from(e.keys())
            : yr(e)
              ? e.map(function (e, t) {
                  return t;
                })
              : void r(5);
      }
      function Dn(e) {
        return Br(e)
          ? Bn(e).map(function (t) {
              return e[t];
            })
          : Ar(e)
            ? Bn(e).map(function (t) {
                return e.get(t);
              })
            : xr(e)
              ? Array.from(e.values())
              : yr(e)
                ? e.slice()
                : void r(6);
      }
      function Nn(e) {
        return Br(e)
          ? Bn(e).map(function (t) {
              return [t, e[t]];
            })
          : Ar(e)
            ? Bn(e).map(function (t) {
                return [t, e.get(t)];
              })
            : xr(e)
              ? Array.from(e.entries())
              : yr(e)
                ? e.map(function (e, t) {
                    return [t, e];
                  })
                : void r(7);
      }
      function Vn(e, t, n) {
        if (2 !== arguments.length || xr(e))
          Br(e)
            ? e[W].set_(t, n)
            : Ar(e)
              ? e.set(t, n)
              : xr(e)
                ? e.add(t)
                : yr(e)
                  ? ("number" != typeof t && (t = parseInt(t, 10)),
                    t < 0 && r("Invalid index: '" + t + "'"),
                    kt(),
                    t >= e.length && (e.length = t + 1),
                    (e[t] = n),
                    Et())
                  : r(8);
        else {
          kt();
          var i = t;
          try {
            for (var o in i) Vn(e, o, i[o]);
          } finally {
            Et();
          }
        }
      }
      function Ln(e, t) {
        Br(e)
          ? e[W].delete_(t)
          : Ar(e) || xr(e)
            ? e.delete(t)
            : yr(e)
              ? ("number" != typeof t && (t = parseInt(t, 10)), e.splice(t, 1))
              : r(9);
      }
      function Mn(e, t) {
        return Br(e)
          ? e[W].has_(t)
          : Ar(e) || xr(e)
            ? e.has(t)
            : yr(e)
              ? t >= 0 && t < e.length
              : void r(10);
      }
      function Un(e, t) {
        if (Mn(e, t))
          return Br(e)
            ? e[W].get_(t)
            : Ar(e)
              ? e.get(t)
              : yr(e)
                ? e[t]
                : void r(11);
      }
      function In(e, t, n) {
        if (Br(e)) return e[W].defineProperty_(t, n);
        r(39);
      }
      function Kn(e) {
        if (Br(e)) return e[W].ownKeys_();
        r(38);
      }
      function Gn(e, t, n, r) {
        return b(n)
          ? (function (e, t, n, r) {
              return Xr(e, t).observe_(n, r);
            })(e, t, n, r)
          : (function (e, t, n) {
              return Xr(e).observe_(t, n);
            })(e, t, n);
      }
      function qn(e, t, n) {
        return e.set(t, n), n;
      }
      function Wn(e, t) {
        if (null == e || "object" != typeof e || e instanceof Date || !Rn(e))
          return e;
        if (Je(e) || rt(e)) return Wn(e.get(), t);
        if (t.has(e)) return t.get(e);
        if (yr(e)) {
          var n = qn(t, e, new Array(e.length));
          return (
            e.forEach(function (e, r) {
              n[r] = Wn(e, t);
            }),
            n
          );
        }
        if (xr(e)) {
          var r = qn(t, e, new Set());
          return (
            e.forEach(function (e) {
              r.add(Wn(e, t));
            }),
            r
          );
        }
        if (Ar(e)) {
          var i = qn(t, e, new Map());
          return (
            e.forEach(function (e, n) {
              i.set(n, Wn(e, t));
            }),
            i
          );
        }
        var o = qn(t, e, {});
        return (
          Kn(e).forEach(function (n) {
            c.propertyIsEnumerable.call(e, n) && (o[n] = Wn(e[n], t));
          }),
          o
        );
      }
      function Hn(e, t) {
        return Wn(e, new Map());
      }
      function Fn() {}
      function zn(e, t) {
        void 0 === t && (t = void 0), kt();
        try {
          return e.apply(t);
        } finally {
          Et();
        }
      }
      function Xn(e, t, n) {
        return 1 === arguments.length || (t && "object" == typeof t)
          ? (function (e, t) {
              var n, r, i;
              0;
              if (null != t && null != (n = t.signal) && n.aborted)
                return Object.assign(
                  Promise.reject(new Error("WHEN_ABORTED")),
                  {
                    cancel: function () {
                      return null;
                    },
                  },
                );
              var o = new Promise(function (n, o) {
                var a,
                  s = $n(e, n, V({}, t, { onError: o }));
                (r = function () {
                  s(), o(new Error("WHEN_CANCELLED"));
                }),
                  (i = function () {
                    s(), o(new Error("WHEN_ABORTED"));
                  }),
                  null == t ||
                    null == (a = t.signal) ||
                    null == a.addEventListener ||
                    a.addEventListener("abort", i);
              }).finally(function () {
                var e;
                return null == t ||
                  null == (e = t.signal) ||
                  null == e.removeEventListener
                  ? void 0
                  : e.removeEventListener("abort", i);
              });
              return (o.cancel = r), o;
            })(e, t)
          : $n(e, t, n || {});
      }
      function $n(e, t, n) {
        var r;
        if ("number" == typeof n.timeout) {
          var i = new Error("WHEN_TIMEOUT");
          r = setTimeout(function () {
            if (!a[W].isDisposed_) {
              if ((a(), !n.onError)) throw i;
              n.onError(i);
            }
          }, n.timeout);
        }
        n.name = "When";
        var o = qe("When-effect", t),
          a = Jt(function (t) {
            ze(!1, e) && (t.dispose(), r && clearTimeout(r), o());
          }, n);
        return a;
      }
      function Yn(e) {
        return e[W];
      }
      On.bound = K(mn);
      var Jn = {
        has: function (e, t) {
          return Yn(e).has_(t);
        },
        get: function (e, t) {
          return Yn(e).get_(t);
        },
        set: function (e, t, n) {
          var r;
          return !!y(t) && (null == (r = Yn(e).set_(t, n, !0)) || r);
        },
        deleteProperty: function (e, t) {
          var n;
          return !!y(t) && (null == (n = Yn(e).delete_(t, !0)) || n);
        },
        defineProperty: function (e, t, n) {
          var r;
          return null == (r = Yn(e).defineProperty_(t, n)) || r;
        },
        ownKeys: function (e) {
          return Yn(e).ownKeys_();
        },
        preventExtensions: function (e) {
          r(13);
        },
      };
      function Qn(e) {
        return void 0 !== e.interceptors_ && e.interceptors_.length > 0;
      }
      function Zn(e, t) {
        var n = e.interceptors_ || (e.interceptors_ = []);
        return (
          n.push(t),
          _(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
          })
        );
      }
      function er(e, t) {
        var n = ht();
        try {
          for (
            var i = [].concat(e.interceptors_ || []), o = 0, a = i.length;
            o < a && ((t = i[o](t)) && !t.type && r(14), t);
            o++
          );
          return t;
        } finally {
          vt(n);
        }
      }
      function tr(e) {
        return void 0 !== e.changeListeners_ && e.changeListeners_.length > 0;
      }
      function nr(e, t) {
        var n = e.changeListeners_ || (e.changeListeners_ = []);
        return (
          n.push(t),
          _(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
          })
        );
      }
      function rr(e, t) {
        var n = ht(),
          r = e.changeListeners_;
        if (r) {
          for (var i = 0, o = (r = r.slice()).length; i < o; i++) r[i](t);
          vt(n);
        }
      }
      function ir(e, t, n) {
        return (
          Yr(function () {
            var r = Cr(e, n)[W];
            null != t ||
              (t = (function (e) {
                return C(e, I) || w(e, I, V({}, e[I])), e[I];
              })(e)),
              E(t).forEach(function (e) {
                return r.make_(e, t[e]);
              });
          }),
          e
        );
      }
      var or = Symbol("mobx-keys");
      function ar(e, t, n) {
        return m(e)
          ? fn(e, e, t, n)
          : (Yr(function () {
              var r = Cr(e, n)[W];
              if (!e[or]) {
                var i = Object.getPrototypeOf(e),
                  o = new Set([].concat(E(e), E(i)));
                o.delete("constructor"), o.delete(W), w(i, or, o);
              }
              e[or].forEach(function (e) {
                return r.make_(e, !t || !(e in t) || t[e]);
              });
            }),
            e);
      }
      var sr = "splice",
        ur = "update",
        cr = {
          get: function (e, t) {
            var n = e[W];
            return t === W
              ? n
              : "length" === t
                ? n.getArrayLength_()
                : "string" != typeof t || isNaN(t)
                  ? C(hr, t)
                    ? hr[t]
                    : e[t]
                  : n.get_(parseInt(t));
          },
          set: function (e, t, n) {
            var r = e[W];
            return (
              "length" === t && r.setArrayLength_(n),
              "symbol" == typeof t || isNaN(t)
                ? (e[t] = n)
                : r.set_(parseInt(t), n),
              !0
            );
          },
          preventExtensions: function () {
            r(15);
          },
        },
        lr = (function () {
          function e(e, t, n, r) {
            void 0 === e && (e = "ObservableArray"),
              (this.owned_ = void 0),
              (this.legacyMode_ = void 0),
              (this.atom_ = void 0),
              (this.values_ = []),
              (this.interceptors_ = void 0),
              (this.changeListeners_ = void 0),
              (this.enhancer_ = void 0),
              (this.dehancer = void 0),
              (this.proxy_ = void 0),
              (this.lastKnownLength_ = 0),
              (this.owned_ = n),
              (this.legacyMode_ = r),
              (this.atom_ = new H(e)),
              (this.enhancer_ = function (e, n) {
                return t(e, n, "ObservableArray[..]");
              });
          }
          var t = e.prototype;
          return (
            (t.dehanceValue_ = function (e) {
              return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (t.dehanceValues_ = function (e) {
              return void 0 !== this.dehancer && e.length > 0
                ? e.map(this.dehancer)
                : e;
            }),
            (t.intercept_ = function (e) {
              return Zn(this, e);
            }),
            (t.observe_ = function (e, t) {
              return (
                void 0 === t && (t = !1),
                t &&
                  e({
                    observableKind: "array",
                    object: this.proxy_,
                    debugObjectName: this.atom_.name_,
                    type: "splice",
                    index: 0,
                    added: this.values_.slice(),
                    addedCount: this.values_.length,
                    removed: [],
                    removedCount: 0,
                  }),
                nr(this, e)
              );
            }),
            (t.getArrayLength_ = function () {
              return this.atom_.reportObserved(), this.values_.length;
            }),
            (t.setArrayLength_ = function (e) {
              ("number" != typeof e || isNaN(e) || e < 0) &&
                r("Out of range: " + e);
              var t = this.values_.length;
              if (e !== t)
                if (e > t) {
                  for (var n = new Array(e - t), i = 0; i < e - t; i++)
                    n[i] = void 0;
                  this.spliceWithArray_(t, 0, n);
                } else this.spliceWithArray_(e, t - e);
            }),
            (t.updateArrayLength_ = function (e, t) {
              e !== this.lastKnownLength_ && r(16),
                (this.lastKnownLength_ += t),
                this.legacyMode_ && t > 0 && Hr(e + t + 1);
            }),
            (t.spliceWithArray_ = function (e, t, n) {
              var r = this;
              this.atom_;
              var i = this.values_.length;
              if (
                (void 0 === e
                  ? (e = 0)
                  : e > i
                    ? (e = i)
                    : e < 0 && (e = Math.max(0, i + e)),
                (t =
                  1 === arguments.length
                    ? i - e
                    : null == t
                      ? 0
                      : Math.max(0, Math.min(t, i - e))),
                void 0 === n && (n = l),
                Qn(this))
              ) {
                var o = er(this, {
                  object: this.proxy_,
                  type: sr,
                  index: e,
                  removedCount: t,
                  added: n,
                });
                if (!o) return l;
                (t = o.removedCount), (n = o.added);
              }
              if (
                ((n =
                  0 === n.length
                    ? n
                    : n.map(function (e) {
                        return r.enhancer_(e, void 0);
                      })),
                this.legacyMode_)
              ) {
                var a = n.length - t;
                this.updateArrayLength_(i, a);
              }
              var s = this.spliceItemsIntoValues_(e, t, n);
              return (
                (0 === t && 0 === n.length) || this.notifyArraySplice_(e, n, s),
                this.dehanceValues_(s)
              );
            }),
            (t.spliceItemsIntoValues_ = function (e, t, n) {
              var r;
              if (n.length < 1e4)
                return (r = this.values_).splice.apply(r, [e, t].concat(n));
              var i = this.values_.slice(e, e + t),
                o = this.values_.slice(e + t);
              this.values_.length += n.length - t;
              for (var a = 0; a < n.length; a++) this.values_[e + a] = n[a];
              for (var s = 0; s < o.length; s++)
                this.values_[e + n.length + s] = o[s];
              return i;
            }),
            (t.notifyArrayChildUpdate_ = function (e, t, n) {
              var r = !this.owned_ && !1,
                i = tr(this),
                o =
                  i || r
                    ? {
                        observableKind: "array",
                        object: this.proxy_,
                        type: ur,
                        debugObjectName: this.atom_.name_,
                        index: e,
                        newValue: t,
                        oldValue: n,
                      }
                    : null;
              this.atom_.reportChanged(), i && rr(this, o);
            }),
            (t.notifyArraySplice_ = function (e, t, n) {
              var r = !this.owned_ && !1,
                i = tr(this),
                o =
                  i || r
                    ? {
                        observableKind: "array",
                        object: this.proxy_,
                        debugObjectName: this.atom_.name_,
                        type: sr,
                        index: e,
                        removed: n,
                        added: t,
                        removedCount: n.length,
                        addedCount: t.length,
                      }
                    : null;
              this.atom_.reportChanged(), i && rr(this, o);
            }),
            (t.get_ = function (e) {
              if (!(this.legacyMode_ && e >= this.values_.length))
                return (
                  this.atom_.reportObserved(),
                  this.dehanceValue_(this.values_[e])
                );
              console.warn("[mobx] Out of bounds read: " + e);
            }),
            (t.set_ = function (e, t) {
              var n = this.values_;
              if (
                (this.legacyMode_ && e > n.length && r(17, e, n.length),
                e < n.length)
              ) {
                this.atom_;
                var i = n[e];
                if (Qn(this)) {
                  var o = er(this, {
                    type: ur,
                    object: this.proxy_,
                    index: e,
                    newValue: t,
                  });
                  if (!o) return;
                  t = o.newValue;
                }
                (t = this.enhancer_(t, i)) !== i &&
                  ((n[e] = t), this.notifyArrayChildUpdate_(e, t, i));
              } else {
                for (
                  var a = new Array(e + 1 - n.length), s = 0;
                  s < a.length - 1;
                  s++
                )
                  a[s] = void 0;
                (a[a.length - 1] = t), this.spliceWithArray_(n.length, 0, a);
              }
            }),
            e
          );
        })();
      function fr(e, t, n, r) {
        return (
          void 0 === n && (n = "ObservableArray"),
          void 0 === r && (r = !1),
          d(),
          Yr(function () {
            var i = new lr(n, t, r, !1);
            A(i.values_, W, i);
            var o = new Proxy(i.values_, cr);
            return (
              (i.proxy_ = o), e && e.length && i.spliceWithArray_(0, 0, e), o
            );
          })
        );
      }
      var hr = {
        clear: function () {
          return this.splice(0);
        },
        replace: function (e) {
          var t = this[W];
          return t.spliceWithArray_(0, t.values_.length, e);
        },
        toJSON: function () {
          return this.slice();
        },
        splice: function (e, t) {
          for (
            var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2;
            i < n;
            i++
          )
            r[i - 2] = arguments[i];
          var o = this[W];
          switch (arguments.length) {
            case 0:
              return [];
            case 1:
              return o.spliceWithArray_(e);
            case 2:
              return o.spliceWithArray_(e, t);
          }
          return o.spliceWithArray_(e, t, r);
        },
        spliceWithArray: function (e, t, n) {
          return this[W].spliceWithArray_(e, t, n);
        },
        push: function () {
          for (
            var e = this[W], t = arguments.length, n = new Array(t), r = 0;
            r < t;
            r++
          )
            n[r] = arguments[r];
          return e.spliceWithArray_(e.values_.length, 0, n), e.values_.length;
        },
        pop: function () {
          return this.splice(Math.max(this[W].values_.length - 1, 0), 1)[0];
        },
        shift: function () {
          return this.splice(0, 1)[0];
        },
        unshift: function () {
          for (
            var e = this[W], t = arguments.length, n = new Array(t), r = 0;
            r < t;
            r++
          )
            n[r] = arguments[r];
          return e.spliceWithArray_(0, 0, n), e.values_.length;
        },
        reverse: function () {
          return (
            Ot.trackingDerivation && r(37, "reverse"),
            this.replace(this.slice().reverse()),
            this
          );
        },
        sort: function () {
          Ot.trackingDerivation && r(37, "sort");
          var e = this.slice();
          return e.sort.apply(e, arguments), this.replace(e), this;
        },
        remove: function (e) {
          var t = this[W],
            n = t.dehanceValues_(t.values_).indexOf(e);
          return n > -1 && (this.splice(n, 1), !0);
        },
      };
      function vr(e, t) {
        "function" == typeof Array.prototype[e] && (hr[e] = t(e));
      }
      function dr(e) {
        return function () {
          var t = this[W];
          t.atom_.reportObserved();
          var n = t.dehanceValues_(t.values_);
          return n[e].apply(n, arguments);
        };
      }
      function _r(e) {
        return function (t, n) {
          var r = this,
            i = this[W];
          return (
            i.atom_.reportObserved(),
            i.dehanceValues_(i.values_)[e](function (e, i) {
              return t.call(n, e, i, r);
            })
          );
        };
      }
      function pr(e) {
        return function () {
          var t = this,
            n = this[W];
          n.atom_.reportObserved();
          var r = n.dehanceValues_(n.values_),
            i = arguments[0];
          return (
            (arguments[0] = function (e, n, r) {
              return i(e, n, r, t);
            }),
            r[e].apply(r, arguments)
          );
        };
      }
      vr("at", dr),
        vr("concat", dr),
        vr("flat", dr),
        vr("includes", dr),
        vr("indexOf", dr),
        vr("join", dr),
        vr("lastIndexOf", dr),
        vr("slice", dr),
        vr("toString", dr),
        vr("toLocaleString", dr),
        vr("toSorted", dr),
        vr("toSpliced", dr),
        vr("with", dr),
        vr("every", _r),
        vr("filter", _r),
        vr("find", _r),
        vr("findIndex", _r),
        vr("findLast", _r),
        vr("findLastIndex", _r),
        vr("flatMap", _r),
        vr("forEach", _r),
        vr("map", _r),
        vr("some", _r),
        vr("toReversed", _r),
        vr("reduce", pr),
        vr("reduceRight", pr);
      var br = S("ObservableArrayAdministration", lr);
      function yr(e) {
        return g(e) && br(e[W]);
      }
      var gr = {},
        mr = "add",
        Or = "delete",
        wr = (function () {
          function e(e, t, n) {
            var i = this;
            void 0 === t && (t = $),
              void 0 === n && (n = "ObservableMap"),
              (this.enhancer_ = void 0),
              (this.name_ = void 0),
              (this[W] = gr),
              (this.data_ = void 0),
              (this.hasMap_ = void 0),
              (this.keysAtom_ = void 0),
              (this.interceptors_ = void 0),
              (this.changeListeners_ = void 0),
              (this.dehancer = void 0),
              (this.enhancer_ = t),
              (this.name_ = n),
              b(Map) || r(18),
              Yr(function () {
                (i.keysAtom_ = z("ObservableMap.keys()")),
                  (i.data_ = new Map()),
                  (i.hasMap_ = new Map()),
                  e && i.merge(e);
              });
          }
          var t = e.prototype;
          return (
            (t.has_ = function (e) {
              return this.data_.has(e);
            }),
            (t.has = function (e) {
              var t = this;
              if (!Ot.trackingDerivation) return this.has_(e);
              var n = this.hasMap_.get(e);
              if (!n) {
                var r = (n = new Ye(this.has_(e), Y, "ObservableMap.key?", !1));
                this.hasMap_.set(e, r),
                  on(r, function () {
                    return t.hasMap_.delete(e);
                  });
              }
              return n.get();
            }),
            (t.set = function (e, t) {
              var n = this.has_(e);
              if (Qn(this)) {
                var r = er(this, {
                  type: n ? ur : mr,
                  object: this,
                  newValue: t,
                  name: e,
                });
                if (!r) return this;
                t = r.newValue;
              }
              return n ? this.updateValue_(e, t) : this.addValue_(e, t), this;
            }),
            (t.delete = function (e) {
              var t = this;
              if (
                (this.keysAtom_, Qn(this)) &&
                !er(this, { type: Or, object: this, name: e })
              )
                return !1;
              if (this.has_(e)) {
                var n = tr(this),
                  r = n
                    ? {
                        observableKind: "map",
                        debugObjectName: this.name_,
                        type: Or,
                        object: this,
                        oldValue: this.data_.get(e).value_,
                        name: e,
                      }
                    : null;
                return (
                  zn(function () {
                    var n;
                    t.keysAtom_.reportChanged(),
                      null == (n = t.hasMap_.get(e)) || n.setNewValue_(!1),
                      t.data_.get(e).setNewValue_(void 0),
                      t.data_.delete(e);
                  }),
                  n && rr(this, r),
                  !0
                );
              }
              return !1;
            }),
            (t.updateValue_ = function (e, t) {
              var n = this.data_.get(e);
              if ((t = n.prepareNewValue_(t)) !== Ot.UNCHANGED) {
                var r = tr(this),
                  i = r
                    ? {
                        observableKind: "map",
                        debugObjectName: this.name_,
                        type: ur,
                        object: this,
                        oldValue: n.value_,
                        name: e,
                        newValue: t,
                      }
                    : null;
                0, n.setNewValue_(t), r && rr(this, i);
              }
            }),
            (t.addValue_ = function (e, t) {
              var n = this;
              this.keysAtom_,
                zn(function () {
                  var r,
                    i = new Ye(t, n.enhancer_, "ObservableMap.key", !1);
                  n.data_.set(e, i),
                    (t = i.value_),
                    null == (r = n.hasMap_.get(e)) || r.setNewValue_(!0),
                    n.keysAtom_.reportChanged();
                });
              var r = tr(this),
                i = r
                  ? {
                      observableKind: "map",
                      debugObjectName: this.name_,
                      type: mr,
                      object: this,
                      name: e,
                      newValue: t,
                    }
                  : null;
              r && rr(this, i);
            }),
            (t.get = function (e) {
              return this.has(e)
                ? this.dehanceValue_(this.data_.get(e).get())
                : this.dehanceValue_(void 0);
            }),
            (t.dehanceValue_ = function (e) {
              return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (t.keys = function () {
              return this.keysAtom_.reportObserved(), this.data_.keys();
            }),
            (t.values = function () {
              var e = this,
                t = this.keys();
              return ti({
                next: function () {
                  var n = t.next(),
                    r = n.done,
                    i = n.value;
                  return { done: r, value: r ? void 0 : e.get(i) };
                },
              });
            }),
            (t.entries = function () {
              var e = this,
                t = this.keys();
              return ti({
                next: function () {
                  var n = t.next(),
                    r = n.done,
                    i = n.value;
                  return { done: r, value: r ? void 0 : [i, e.get(i)] };
                },
              });
            }),
            (t[Symbol.iterator] = function () {
              return this.entries();
            }),
            (t.forEach = function (e, t) {
              for (var n, r = N(this); !(n = r()).done; ) {
                var i = n.value,
                  o = i[0],
                  a = i[1];
                e.call(t, a, o, this);
              }
            }),
            (t.merge = function (e) {
              var t = this;
              return (
                Ar(e) && (e = new Map(e)),
                zn(function () {
                  var n, i, o;
                  m(e)
                    ? (function (e) {
                        var t = Object.keys(e);
                        if (!k) return t;
                        var n = Object.getOwnPropertySymbols(e);
                        return n.length
                          ? [].concat(
                              t,
                              n.filter(function (t) {
                                return c.propertyIsEnumerable.call(e, t);
                              }),
                            )
                          : t;
                      })(e).forEach(function (n) {
                        return t.set(n, e[n]);
                      })
                    : Array.isArray(e)
                      ? e.forEach(function (e) {
                          var n = e[0],
                            r = e[1];
                          return t.set(n, r);
                        })
                      : j(e)
                        ? ((n = e),
                          (i = Object.getPrototypeOf(n)),
                          (o = Object.getPrototypeOf(i)),
                          null !== Object.getPrototypeOf(o) && r(19, e),
                          e.forEach(function (e, n) {
                            return t.set(n, e);
                          }))
                        : null != e && r(20, e);
                }),
                this
              );
            }),
            (t.clear = function () {
              var e = this;
              zn(function () {
                ft(function () {
                  for (var t, n = N(e.keys()); !(t = n()).done; ) {
                    var r = t.value;
                    e.delete(r);
                  }
                });
              });
            }),
            (t.replace = function (e) {
              var t = this;
              return (
                zn(function () {
                  for (
                    var n,
                      i = (function (e) {
                        if (j(e) || Ar(e)) return e;
                        if (Array.isArray(e)) return new Map(e);
                        if (m(e)) {
                          var t = new Map();
                          for (var n in e) t.set(n, e[n]);
                          return t;
                        }
                        return r(21, e);
                      })(e),
                      o = new Map(),
                      a = !1,
                      s = N(t.data_.keys());
                    !(n = s()).done;
                  ) {
                    var u = n.value;
                    if (!i.has(u))
                      if (t.delete(u)) a = !0;
                      else {
                        var c = t.data_.get(u);
                        o.set(u, c);
                      }
                  }
                  for (var l, f = N(i.entries()); !(l = f()).done; ) {
                    var h = l.value,
                      v = h[0],
                      d = h[1],
                      _ = t.data_.has(v);
                    if ((t.set(v, d), t.data_.has(v))) {
                      var p = t.data_.get(v);
                      o.set(v, p), _ || (a = !0);
                    }
                  }
                  if (!a)
                    if (t.data_.size !== o.size) t.keysAtom_.reportChanged();
                    else
                      for (
                        var b = t.data_.keys(),
                          y = o.keys(),
                          g = b.next(),
                          O = y.next();
                        !g.done;
                      ) {
                        if (g.value !== O.value) {
                          t.keysAtom_.reportChanged();
                          break;
                        }
                        (g = b.next()), (O = y.next());
                      }
                  t.data_ = o;
                }),
                this
              );
            }),
            (t.toString = function () {
              return "[object ObservableMap]";
            }),
            (t.toJSON = function () {
              return Array.from(this);
            }),
            (t.observe_ = function (e, t) {
              return nr(this, e);
            }),
            (t.intercept_ = function (e) {
              return Zn(this, e);
            }),
            D(e, [
              {
                key: "size",
                get: function () {
                  return this.keysAtom_.reportObserved(), this.data_.size;
                },
              },
              {
                key: Symbol.toStringTag,
                get: function () {
                  return "Map";
                },
              },
            ])
          );
        })(),
        Ar = S("ObservableMap", wr);
      var Sr = {},
        jr = (function () {
          function e(e, t, n) {
            var i = this;
            void 0 === t && (t = $),
              void 0 === n && (n = "ObservableSet"),
              (this.name_ = void 0),
              (this[W] = Sr),
              (this.data_ = new Set()),
              (this.atom_ = void 0),
              (this.changeListeners_ = void 0),
              (this.interceptors_ = void 0),
              (this.dehancer = void 0),
              (this.enhancer_ = void 0),
              (this.name_ = n),
              b(Set) || r(22),
              (this.enhancer_ = function (e, r) {
                return t(e, r, n);
              }),
              Yr(function () {
                (i.atom_ = z(i.name_)), e && i.replace(e);
              });
          }
          var t = e.prototype;
          return (
            (t.dehanceValue_ = function (e) {
              return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (t.clear = function () {
              var e = this;
              zn(function () {
                ft(function () {
                  for (var t, n = N(e.data_.values()); !(t = n()).done; ) {
                    var r = t.value;
                    e.delete(r);
                  }
                });
              });
            }),
            (t.forEach = function (e, t) {
              for (var n, r = N(this); !(n = r()).done; ) {
                var i = n.value;
                e.call(t, i, i, this);
              }
            }),
            (t.add = function (e) {
              var t = this;
              if (
                (this.atom_, Qn(this)) &&
                !er(this, { type: mr, object: this, newValue: e })
              )
                return this;
              if (!this.has(e)) {
                zn(function () {
                  t.data_.add(t.enhancer_(e, void 0)), t.atom_.reportChanged();
                });
                var n = !1,
                  r = tr(this),
                  i = r
                    ? {
                        observableKind: "set",
                        debugObjectName: this.name_,
                        type: mr,
                        object: this,
                        newValue: e,
                      }
                    : null;
                n, r && rr(this, i);
              }
              return this;
            }),
            (t.delete = function (e) {
              var t = this;
              if (
                Qn(this) &&
                !er(this, { type: Or, object: this, oldValue: e })
              )
                return !1;
              if (this.has(e)) {
                var n = tr(this),
                  r = n
                    ? {
                        observableKind: "set",
                        debugObjectName: this.name_,
                        type: Or,
                        object: this,
                        oldValue: e,
                      }
                    : null;
                return (
                  zn(function () {
                    t.atom_.reportChanged(), t.data_.delete(e);
                  }),
                  n && rr(this, r),
                  !0
                );
              }
              return !1;
            }),
            (t.has = function (e) {
              return (
                this.atom_.reportObserved(),
                this.data_.has(this.dehanceValue_(e))
              );
            }),
            (t.entries = function () {
              var e = 0,
                t = Array.from(this.keys()),
                n = Array.from(this.values());
              return ti({
                next: function () {
                  var r = e;
                  return (
                    (e += 1),
                    r < n.length
                      ? { value: [t[r], n[r]], done: !1 }
                      : { done: !0 }
                  );
                },
              });
            }),
            (t.keys = function () {
              return this.values();
            }),
            (t.values = function () {
              this.atom_.reportObserved();
              var e = this,
                t = 0,
                n = Array.from(this.data_.values());
              return ti({
                next: function () {
                  return t < n.length
                    ? { value: e.dehanceValue_(n[t++]), done: !1 }
                    : { done: !0 };
                },
              });
            }),
            (t.intersection = function (e) {
              return x(e)
                ? e.intersection(this)
                : new Set(this).intersection(e);
            }),
            (t.union = function (e) {
              return x(e) ? e.union(this) : new Set(this).union(e);
            }),
            (t.difference = function (e) {
              return new Set(this).difference(e);
            }),
            (t.symmetricDifference = function (e) {
              return x(e)
                ? e.symmetricDifference(this)
                : new Set(this).symmetricDifference(e);
            }),
            (t.isSubsetOf = function (e) {
              return new Set(this).isSubsetOf(e);
            }),
            (t.isSupersetOf = function (e) {
              return new Set(this).isSupersetOf(e);
            }),
            (t.isDisjointFrom = function (e) {
              return x(e)
                ? e.isDisjointFrom(this)
                : new Set(this).isDisjointFrom(e);
            }),
            (t.replace = function (e) {
              var t = this;
              return (
                xr(e) && (e = new Set(e)),
                zn(function () {
                  Array.isArray(e) || x(e)
                    ? (t.clear(),
                      e.forEach(function (e) {
                        return t.add(e);
                      }))
                    : null != e && r("Cannot initialize set from " + e);
                }),
                this
              );
            }),
            (t.observe_ = function (e, t) {
              return nr(this, e);
            }),
            (t.intercept_ = function (e) {
              return Zn(this, e);
            }),
            (t.toJSON = function () {
              return Array.from(this);
            }),
            (t.toString = function () {
              return "[object ObservableSet]";
            }),
            (t[Symbol.iterator] = function () {
              return this.values();
            }),
            D(e, [
              {
                key: "size",
                get: function () {
                  return this.atom_.reportObserved(), this.data_.size;
                },
              },
              {
                key: Symbol.toStringTag,
                get: function () {
                  return "Set";
                },
              },
            ])
          );
        })(),
        xr = S("ObservableSet", jr),
        kr = Object.create(null),
        Er = "remove",
        Pr = (function () {
          function e(e, t, n, r) {
            void 0 === t && (t = new Map()),
              void 0 === r && (r = ye),
              (this.target_ = void 0),
              (this.values_ = void 0),
              (this.name_ = void 0),
              (this.defaultAnnotation_ = void 0),
              (this.keysAtom_ = void 0),
              (this.changeListeners_ = void 0),
              (this.interceptors_ = void 0),
              (this.proxy_ = void 0),
              (this.isPlainObject_ = void 0),
              (this.appliedAnnotations_ = void 0),
              (this.pendingKeys_ = void 0),
              (this.target_ = e),
              (this.values_ = t),
              (this.name_ = n),
              (this.defaultAnnotation_ = r),
              (this.keysAtom_ = new H("ObservableObject.keys")),
              (this.isPlainObject_ = m(this.target_));
          }
          var t = e.prototype;
          return (
            (t.getObservablePropValue_ = function (e) {
              return this.values_.get(e).get();
            }),
            (t.setObservablePropValue_ = function (e, t) {
              var n = this.values_.get(e);
              if (n instanceof et) return n.set(t), !0;
              if (Qn(this)) {
                var r = er(this, {
                  type: ur,
                  object: this.proxy_ || this.target_,
                  name: e,
                  newValue: t,
                });
                if (!r) return null;
                t = r.newValue;
              }
              if ((t = n.prepareNewValue_(t)) !== Ot.UNCHANGED) {
                var i = tr(this),
                  o = i
                    ? {
                        type: ur,
                        observableKind: "object",
                        debugObjectName: this.name_,
                        object: this.proxy_ || this.target_,
                        oldValue: n.value_,
                        name: e,
                        newValue: t,
                      }
                    : null;
                0, n.setNewValue_(t), i && rr(this, o);
              }
              return !0;
            }),
            (t.get_ = function (e) {
              return (
                Ot.trackingDerivation && !C(this.target_, e) && this.has_(e),
                this.target_[e]
              );
            }),
            (t.set_ = function (e, t, n) {
              return (
                void 0 === n && (n = !1),
                C(this.target_, e)
                  ? this.values_.has(e)
                    ? this.setObservablePropValue_(e, t)
                    : n
                      ? Reflect.set(this.target_, e, t)
                      : ((this.target_[e] = t), !0)
                  : this.extend_(
                      e,
                      {
                        value: t,
                        enumerable: !0,
                        writable: !0,
                        configurable: !0,
                      },
                      this.defaultAnnotation_,
                      n,
                    )
              );
            }),
            (t.has_ = function (e) {
              if (!Ot.trackingDerivation) return e in this.target_;
              this.pendingKeys_ || (this.pendingKeys_ = new Map());
              var t = this.pendingKeys_.get(e);
              return (
                t ||
                  ((t = new Ye(
                    e in this.target_,
                    Y,
                    "ObservableObject.key?",
                    !1,
                  )),
                  this.pendingKeys_.set(e, t)),
                t.get()
              );
            }),
            (t.make_ = function (e, t) {
              if ((!0 === t && (t = this.defaultAnnotation_), !1 !== t)) {
                if ((Nr(this, t, e), !(e in this.target_))) {
                  var n;
                  if (null != (n = this.target_[I]) && n[e]) return;
                  r(1, t.annotationType_, this.name_ + "." + e.toString());
                }
                for (var i = this.target_; i && i !== c; ) {
                  var o = s(i, e);
                  if (o) {
                    var a = t.make_(this, e, o, i);
                    if (0 === a) return;
                    if (1 === a) break;
                  }
                  i = Object.getPrototypeOf(i);
                }
                Dr(this, t, e);
              }
            }),
            (t.extend_ = function (e, t, n, r) {
              if (
                (void 0 === r && (r = !1),
                !0 === n && (n = this.defaultAnnotation_),
                !1 === n)
              )
                return this.defineProperty_(e, t, r);
              Nr(this, n, e);
              var i = n.extend_(this, e, t, r);
              return i && Dr(this, n, e), i;
            }),
            (t.defineProperty_ = function (e, t, n) {
              void 0 === n && (n = !1), this.keysAtom_;
              try {
                kt();
                var r = this.delete_(e);
                if (!r) return r;
                if (Qn(this)) {
                  var i = er(this, {
                    object: this.proxy_ || this.target_,
                    name: e,
                    type: mr,
                    newValue: t.value,
                  });
                  if (!i) return null;
                  var o = i.newValue;
                  t.value !== o && (t = V({}, t, { value: o }));
                }
                if (n) {
                  if (!Reflect.defineProperty(this.target_, e, t)) return !1;
                } else u(this.target_, e, t);
                this.notifyPropertyAddition_(e, t.value);
              } finally {
                Et();
              }
              return !0;
            }),
            (t.defineObservableProperty_ = function (e, t, n, r) {
              void 0 === r && (r = !1), this.keysAtom_;
              try {
                kt();
                var i = this.delete_(e);
                if (!i) return i;
                if (Qn(this)) {
                  var o = er(this, {
                    object: this.proxy_ || this.target_,
                    name: e,
                    type: mr,
                    newValue: t,
                  });
                  if (!o) return null;
                  t = o.newValue;
                }
                var a = Tr(e),
                  s = {
                    configurable: !Ot.safeDescriptors || this.isPlainObject_,
                    enumerable: !0,
                    get: a.get,
                    set: a.set,
                  };
                if (r) {
                  if (!Reflect.defineProperty(this.target_, e, s)) return !1;
                } else u(this.target_, e, s);
                var c = new Ye(t, n, "ObservableObject.key", !1);
                this.values_.set(e, c),
                  this.notifyPropertyAddition_(e, c.value_);
              } finally {
                Et();
              }
              return !0;
            }),
            (t.defineComputedProperty_ = function (e, t, n) {
              void 0 === n && (n = !1), this.keysAtom_;
              try {
                kt();
                var r = this.delete_(e);
                if (!r) return r;
                if (Qn(this))
                  if (
                    !er(this, {
                      object: this.proxy_ || this.target_,
                      name: e,
                      type: mr,
                      newValue: void 0,
                    })
                  )
                    return null;
                t.name || (t.name = "ObservableObject.key"),
                  (t.context = this.proxy_ || this.target_);
                var i = Tr(e),
                  o = {
                    configurable: !Ot.safeDescriptors || this.isPlainObject_,
                    enumerable: !1,
                    get: i.get,
                    set: i.set,
                  };
                if (n) {
                  if (!Reflect.defineProperty(this.target_, e, o)) return !1;
                } else u(this.target_, e, o);
                this.values_.set(e, new et(t)),
                  this.notifyPropertyAddition_(e, void 0);
              } finally {
                Et();
              }
              return !0;
            }),
            (t.delete_ = function (e, t) {
              if (
                (void 0 === t && (t = !1), this.keysAtom_, !C(this.target_, e))
              )
                return !0;
              if (
                Qn(this) &&
                !er(this, {
                  object: this.proxy_ || this.target_,
                  name: e,
                  type: Er,
                })
              )
                return null;
              try {
                var n;
                kt();
                var r,
                  i = tr(this),
                  o = this.values_.get(e),
                  a = void 0;
                if (!o && i)
                  a = null == (r = s(this.target_, e)) ? void 0 : r.value;
                if (t) {
                  if (!Reflect.deleteProperty(this.target_, e)) return !1;
                } else delete this.target_[e];
                if (
                  (o &&
                    (this.values_.delete(e),
                    o instanceof Ye && (a = o.value_),
                    Ct(o)),
                  this.keysAtom_.reportChanged(),
                  null == (n = this.pendingKeys_) ||
                    null == (n = n.get(e)) ||
                    n.set(e in this.target_),
                  i)
                ) {
                  var u = {
                    type: Er,
                    observableKind: "object",
                    object: this.proxy_ || this.target_,
                    debugObjectName: this.name_,
                    oldValue: a,
                    name: e,
                  };
                  0, i && rr(this, u);
                }
              } finally {
                Et();
              }
              return !0;
            }),
            (t.observe_ = function (e, t) {
              return nr(this, e);
            }),
            (t.intercept_ = function (e) {
              return Zn(this, e);
            }),
            (t.notifyPropertyAddition_ = function (e, t) {
              var n,
                r = tr(this);
              if (r) {
                var i = r
                  ? {
                      type: mr,
                      observableKind: "object",
                      debugObjectName: this.name_,
                      object: this.proxy_ || this.target_,
                      name: e,
                      newValue: t,
                    }
                  : null;
                0, r && rr(this, i);
              }
              null == (n = this.pendingKeys_) ||
                null == (n = n.get(e)) ||
                n.set(!0),
                this.keysAtom_.reportChanged();
            }),
            (t.ownKeys_ = function () {
              return this.keysAtom_.reportObserved(), E(this.target_);
            }),
            (t.keys_ = function () {
              return this.keysAtom_.reportObserved(), Object.keys(this.target_);
            }),
            e
          );
        })();
      function Cr(e, t) {
        var n;
        if (C(e, W)) return e;
        var r =
            null != (n = null == t ? void 0 : t.name) ? n : "ObservableObject",
          i = new Pr(
            e,
            new Map(),
            String(r),
            (function (e) {
              var t;
              return e
                ? null != (t = e.defaultDecorator)
                  ? t
                  : ge(e)
                : void 0;
            })(t),
          );
        return w(e, W, i), e;
      }
      var Rr = S("ObservableObjectAdministration", Pr);
      function Tr(e) {
        return (
          kr[e] ||
          (kr[e] = {
            get: function () {
              return this[W].getObservablePropValue_(e);
            },
            set: function (t) {
              return this[W].setObservablePropValue_(e, t);
            },
          })
        );
      }
      function Br(e) {
        return !!g(e) && Rr(e[W]);
      }
      function Dr(e, t, n) {
        var r;
        null == (r = e.target_[I]) || delete r[n];
      }
      function Nr(e, t, n) {}
      var Vr,
        Lr,
        Mr = qr(0),
        Ur = (function () {
          var e = !1,
            t = {};
          return (
            Object.defineProperty(t, "0", {
              set: function () {
                e = !0;
              },
            }),
            (Object.create(t)[0] = 1),
            !1 === e
          );
        })(),
        Ir = 0,
        Kr = function () {};
      (Vr = Kr),
        (Lr = Array.prototype),
        Object.setPrototypeOf
          ? Object.setPrototypeOf(Vr.prototype, Lr)
          : void 0 !== Vr.prototype.__proto__
            ? (Vr.prototype.__proto__ = Lr)
            : (Vr.prototype = Lr);
      var Gr = (function (e) {
        function t(t, n, r, i) {
          var o;
          return (
            void 0 === r && (r = "ObservableArray"),
            void 0 === i && (i = !1),
            (o = e.call(this) || this),
            Yr(function () {
              var e = new lr(r, n, i, !0);
              (e.proxy_ = o),
                A(o, W, e),
                t && t.length && o.spliceWithArray(0, 0, t),
                Ur && Object.defineProperty(o, "0", Mr);
            }),
            o
          );
        }
        L(t, e);
        var n = t.prototype;
        return (
          (n.concat = function () {
            this[W].atom_.reportObserved();
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return Array.prototype.concat.apply(
              this.slice(),
              t.map(function (e) {
                return yr(e) ? e.slice() : e;
              }),
            );
          }),
          (n[Symbol.iterator] = function () {
            var e = this,
              t = 0;
            return ti({
              next: function () {
                return t < e.length
                  ? { value: e[t++], done: !1 }
                  : { done: !0, value: void 0 };
              },
            });
          }),
          D(t, [
            {
              key: "length",
              get: function () {
                return this[W].getArrayLength_();
              },
              set: function (e) {
                this[W].setArrayLength_(e);
              },
            },
            {
              key: Symbol.toStringTag,
              get: function () {
                return "Array";
              },
            },
          ])
        );
      })(Kr);
      function qr(e) {
        return {
          enumerable: !1,
          configurable: !0,
          get: function () {
            return this[W].get_(e);
          },
          set: function (t) {
            this[W].set_(e, t);
          },
        };
      }
      function Wr(e) {
        u(Gr.prototype, "" + e, qr(e));
      }
      function Hr(e) {
        if (e > Ir) {
          for (var t = Ir; t < e + 100; t++) Wr(t);
          Ir = e;
        }
      }
      function Fr(e, t, n) {
        return new Gr(e, t, n);
      }
      function zr(e, t) {
        if ("object" == typeof e && null !== e) {
          if (yr(e)) return void 0 !== t && r(23), e[W].atom_;
          if (xr(e)) return e.atom_;
          if (Ar(e)) {
            if (void 0 === t) return e.keysAtom_;
            var n = e.data_.get(t) || e.hasMap_.get(t);
            return n || r(25, t, $r(e)), n;
          }
          if (Br(e)) {
            if (!t) return r(26);
            var i = e[W].values_.get(t);
            return i || r(27, t, $r(e)), i;
          }
          if (F(e) || rt(e) || Lt(e)) return e;
        } else if (b(e) && Lt(e[W])) return e[W];
        r(28);
      }
      function Xr(e, t) {
        return (
          e || r(29),
          void 0 !== t
            ? Xr(zr(e, t))
            : F(e) || rt(e) || Lt(e) || Ar(e) || xr(e)
              ? e
              : e[W]
                ? e[W]
                : void r(24, e)
        );
      }
      function $r(e, t) {
        var n;
        if (void 0 !== t) n = zr(e, t);
        else {
          if (Yt(e)) return e.name;
          n = Br(e) || Ar(e) || xr(e) ? Xr(e) : zr(e);
        }
        return n.name_;
      }
      function Yr(e) {
        var t = ht(),
          n = Xe(!0);
        kt();
        try {
          return e();
        } finally {
          Et(), $e(n), vt(t);
        }
      }
      Object.entries(hr).forEach(function (e) {
        var t = e[0],
          n = e[1];
        "concat" !== t && w(Gr.prototype, t, n);
      }),
        Hr(1e3);
      var Jr = c.toString;
      function Qr(e, t, n) {
        return void 0 === n && (n = -1), Zr(e, t, n);
      }
      function Zr(e, t, n, r, i) {
        if (e === t) return 0 !== e || 1 / e == 1 / t;
        if (null == e || null == t) return !1;
        if (e != e) return t != t;
        var o = typeof e;
        if ("function" !== o && "object" !== o && "object" != typeof t)
          return !1;
        var a = Jr.call(e);
        if (a !== Jr.call(t)) return !1;
        switch (a) {
          case "[object RegExp]":
          case "[object String]":
            return "" + e == "" + t;
          case "[object Number]":
            return +e != +e ? +t != +t : 0 === +e ? 1 / +e == 1 / t : +e === +t;
          case "[object Date]":
          case "[object Boolean]":
            return +e === +t;
          case "[object Symbol]":
            return (
              "undefined" != typeof Symbol &&
              Symbol.valueOf.call(e) === Symbol.valueOf.call(t)
            );
          case "[object Map]":
          case "[object Set]":
            n >= 0 && n++;
        }
        (e = ei(e)), (t = ei(t));
        var s = "[object Array]" === a;
        if (!s) {
          if ("object" != typeof e || "object" != typeof t) return !1;
          var u = e.constructor,
            c = t.constructor;
          if (
            u !== c &&
            !(b(u) && u instanceof u && b(c) && c instanceof c) &&
            "constructor" in e &&
            "constructor" in t
          )
            return !1;
        }
        if (0 === n) return !1;
        n < 0 && (n = -1), (i = i || []);
        for (var l = (r = r || []).length; l--; )
          if (r[l] === e) return i[l] === t;
        if ((r.push(e), i.push(t), s)) {
          if ((l = e.length) !== t.length) return !1;
          for (; l--; ) if (!Zr(e[l], t[l], n - 1, r, i)) return !1;
        } else {
          var f,
            h = Object.keys(e);
          if (((l = h.length), Object.keys(t).length !== l)) return !1;
          for (; l--; )
            if (!C(t, (f = h[l])) || !Zr(e[f], t[f], n - 1, r, i)) return !1;
        }
        return r.pop(), i.pop(), !0;
      }
      function ei(e) {
        return yr(e)
          ? e.slice()
          : j(e) || Ar(e) || x(e) || xr(e)
            ? Array.from(e.entries())
            : e;
      }
      function ti(e) {
        return (e[Symbol.iterator] = ni), e;
      }
      function ni() {
        return this;
      }
      ["Symbol", "Map", "Set"].forEach(function (e) {
        void 0 === o()[e] &&
          r("MobX requires global '" + e + "' to be available or polyfilled");
      }),
        "object" == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ &&
          __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
            spy: Mt,
            extras: { getDebugName: $r },
            $mobx: W,
          });
    },
    6540: (e, t, n) => {
      "use strict";
      e.exports = n(5287);
    },
    5735: (e) => {
      e.exports = (function (e) {
        "use strict";
        var t = [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
        ];
        function n(e, t) {
          var n = e[0],
            r = e[1],
            i = e[2],
            o = e[3];
          (r =
            ((((r +=
              ((((i =
                ((((i +=
                  ((((o =
                    ((((o +=
                      ((((n =
                        ((((n +=
                          (((r & i) | (~r & o)) + t[0] - 680876936) | 0) <<
                          7) |
                          (n >>> 25)) +
                          r) |
                        0) &
                        r) |
                        (~n & i)) +
                        t[1] -
                        389564586) |
                      0) <<
                      12) |
                      (o >>> 20)) +
                      n) |
                    0) &
                    n) |
                    (~o & r)) +
                    t[2] +
                    606105819) |
                  0) <<
                  17) |
                  (i >>> 15)) +
                  o) |
                0) &
                o) |
                (~i & n)) +
                t[3] -
                1044525330) |
              0) <<
              22) |
              (r >>> 10)) +
              i) |
            0),
            (r =
              ((((r +=
                ((((i =
                  ((((i +=
                    ((((o =
                      ((((o +=
                        ((((n =
                          ((((n +=
                            (((r & i) | (~r & o)) + t[4] - 176418897) | 0) <<
                            7) |
                            (n >>> 25)) +
                            r) |
                          0) &
                          r) |
                          (~n & i)) +
                          t[5] +
                          1200080426) |
                        0) <<
                        12) |
                        (o >>> 20)) +
                        n) |
                      0) &
                      n) |
                      (~o & r)) +
                      t[6] -
                      1473231341) |
                    0) <<
                    17) |
                    (i >>> 15)) +
                    o) |
                  0) &
                  o) |
                  (~i & n)) +
                  t[7] -
                  45705983) |
                0) <<
                22) |
                (r >>> 10)) +
                i) |
              0),
            (r =
              ((((r +=
                ((((i =
                  ((((i +=
                    ((((o =
                      ((((o +=
                        ((((n =
                          ((((n +=
                            (((r & i) | (~r & o)) + t[8] + 1770035416) | 0) <<
                            7) |
                            (n >>> 25)) +
                            r) |
                          0) &
                          r) |
                          (~n & i)) +
                          t[9] -
                          1958414417) |
                        0) <<
                        12) |
                        (o >>> 20)) +
                        n) |
                      0) &
                      n) |
                      (~o & r)) +
                      t[10] -
                      42063) |
                    0) <<
                    17) |
                    (i >>> 15)) +
                    o) |
                  0) &
                  o) |
                  (~i & n)) +
                  t[11] -
                  1990404162) |
                0) <<
                22) |
                (r >>> 10)) +
                i) |
              0),
            (r =
              ((((r +=
                ((((i =
                  ((((i +=
                    ((((o =
                      ((((o +=
                        ((((n =
                          ((((n +=
                            (((r & i) | (~r & o)) + t[12] + 1804603682) | 0) <<
                            7) |
                            (n >>> 25)) +
                            r) |
                          0) &
                          r) |
                          (~n & i)) +
                          t[13] -
                          40341101) |
                        0) <<
                        12) |
                        (o >>> 20)) +
                        n) |
                      0) &
                      n) |
                      (~o & r)) +
                      t[14] -
                      1502002290) |
                    0) <<
                    17) |
                    (i >>> 15)) +
                    o) |
                  0) &
                  o) |
                  (~i & n)) +
                  t[15] +
                  1236535329) |
                0) <<
                22) |
                (r >>> 10)) +
                i) |
              0),
            (r =
              ((((r +=
                ((((i =
                  ((((i +=
                    ((((o =
                      ((((o +=
                        ((((n =
                          ((((n +=
                            (((r & o) | (i & ~o)) + t[1] - 165796510) | 0) <<
                            5) |
                            (n >>> 27)) +
                            r) |
                          0) &
                          i) |
                          (r & ~i)) +
                          t[6] -
                          1069501632) |
                        0) <<
                        9) |
                        (o >>> 23)) +
                        n) |
                      0) &
                      r) |
                      (n & ~r)) +
                      t[11] +
                      643717713) |
                    0) <<
                    14) |
                    (i >>> 18)) +
                    o) |
                  0) &
                  n) |
                  (o & ~n)) +
                  t[0] -
                  373897302) |
                0) <<
                20) |
                (r >>> 12)) +
                i) |
              0),
            (r =
              ((((r +=
                ((((i =
                  ((((i +=
                    ((((o =
                      ((((o +=
                        ((((n =
                          ((((n +=
                            (((r & o) | (i & ~o)) + t[5] - 701558691) | 0) <<
                            5) |
                            (n >>> 27)) +
                            r) |
                          0) &
                          i) |
                          (r & ~i)) +
                          t[10] +
                          38016083) |
                        0) <<
                        9) |
                        (o >>> 23)) +
                        n) |
                      0) &
                      r) |
                      (n & ~r)) +
                      t[15] -
                      660478335) |
                    0) <<
                    14) |
                    (i >>> 18)) +
                    o) |
                  0) &
                  n) |
                  (o & ~n)) +
                  t[4] -
                  405537848) |
                0) <<
                20) |
                (r >>> 12)) +
                i) |
              0),
            (r =
              ((((r +=
                ((((i =
                  ((((i +=
                    ((((o =
                      ((((o +=
                        ((((n =
                          ((((n +=
                            (((r & o) | (i & ~o)) + t[9] + 568446438) | 0) <<
                            5) |
                            (n >>> 27)) +
                            r) |
                          0) &
                          i) |
                          (r & ~i)) +
                          t[14] -
                          1019803690) |
                        0) <<
                        9) |
                        (o >>> 23)) +
                        n) |
                      0) &
                      r) |
                      (n & ~r)) +
                      t[3] -
                      187363961) |
                    0) <<
                    14) |
                    (i >>> 18)) +
                    o) |
                  0) &
                  n) |
                  (o & ~n)) +
                  t[8] +
                  1163531501) |
                0) <<
                20) |
                (r >>> 12)) +
                i) |
              0),
            (r =
              ((((r +=
                ((((i =
                  ((((i +=
                    ((((o =
                      ((((o +=
                        ((((n =
                          ((((n +=
                            (((r & o) | (i & ~o)) + t[13] - 1444681467) | 0) <<
                            5) |
                            (n >>> 27)) +
                            r) |
                          0) &
                          i) |
                          (r & ~i)) +
                          t[2] -
                          51403784) |
                        0) <<
                        9) |
                        (o >>> 23)) +
                        n) |
                      0) &
                      r) |
                      (n & ~r)) +
                      t[7] +
                      1735328473) |
                    0) <<
                    14) |
                    (i >>> 18)) +
                    o) |
                  0) &
                  n) |
                  (o & ~n)) +
                  t[12] -
                  1926607734) |
                0) <<
                20) |
                (r >>> 12)) +
                i) |
              0),
            (r =
              ((((r +=
                (((i =
                  ((((i +=
                    (((o =
                      ((((o +=
                        (((n =
                          ((((n += ((r ^ i ^ o) + t[5] - 378558) | 0) << 4) |
                            (n >>> 28)) +
                            r) |
                          0) ^
                          r ^
                          i) +
                          t[8] -
                          2022574463) |
                        0) <<
                        11) |
                        (o >>> 21)) +
                        n) |
                      0) ^
                      n ^
                      r) +
                      t[11] +
                      1839030562) |
                    0) <<
                    16) |
                    (i >>> 16)) +
                    o) |
                  0) ^
                  o ^
                  n) +
                  t[14] -
                  35309556) |
                0) <<
                23) |
                (r >>> 9)) +
                i) |
              0),
            (r =
              ((((r +=
                (((i =
                  ((((i +=
                    (((o =
                      ((((o +=
                        (((n =
                          ((((n += ((r ^ i ^ o) + t[1] - 1530992060) | 0) <<
                            4) |
                            (n >>> 28)) +
                            r) |
                          0) ^
                          r ^
                          i) +
                          t[4] +
                          1272893353) |
                        0) <<
                        11) |
                        (o >>> 21)) +
                        n) |
                      0) ^
                      n ^
                      r) +
                      t[7] -
                      155497632) |
                    0) <<
                    16) |
                    (i >>> 16)) +
                    o) |
                  0) ^
                  o ^
                  n) +
                  t[10] -
                  1094730640) |
                0) <<
                23) |
                (r >>> 9)) +
                i) |
              0),
            (r =
              ((((r +=
                (((i =
                  ((((i +=
                    (((o =
                      ((((o +=
                        (((n =
                          ((((n += ((r ^ i ^ o) + t[13] + 681279174) | 0) <<
                            4) |
                            (n >>> 28)) +
                            r) |
                          0) ^
                          r ^
                          i) +
                          t[0] -
                          358537222) |
                        0) <<
                        11) |
                        (o >>> 21)) +
                        n) |
                      0) ^
                      n ^
                      r) +
                      t[3] -
                      722521979) |
                    0) <<
                    16) |
                    (i >>> 16)) +
                    o) |
                  0) ^
                  o ^
                  n) +
                  t[6] +
                  76029189) |
                0) <<
                23) |
                (r >>> 9)) +
                i) |
              0),
            (r =
              ((((r +=
                (((i =
                  ((((i +=
                    (((o =
                      ((((o +=
                        (((n =
                          ((((n += ((r ^ i ^ o) + t[9] - 640364487) | 0) << 4) |
                            (n >>> 28)) +
                            r) |
                          0) ^
                          r ^
                          i) +
                          t[12] -
                          421815835) |
                        0) <<
                        11) |
                        (o >>> 21)) +
                        n) |
                      0) ^
                      n ^
                      r) +
                      t[15] +
                      530742520) |
                    0) <<
                    16) |
                    (i >>> 16)) +
                    o) |
                  0) ^
                  o ^
                  n) +
                  t[2] -
                  995338651) |
                0) <<
                23) |
                (r >>> 9)) +
                i) |
              0),
            (r =
              ((((r +=
                (((o =
                  ((((o +=
                    ((r ^
                      ((n =
                        ((((n += ((i ^ (r | ~o)) + t[0] - 198630844) | 0) <<
                          6) |
                          (n >>> 26)) +
                          r) |
                        0) |
                        ~i)) +
                      t[7] +
                      1126891415) |
                    0) <<
                    10) |
                    (o >>> 22)) +
                    n) |
                  0) ^
                  ((i =
                    ((((i += ((n ^ (o | ~r)) + t[14] - 1416354905) | 0) << 15) |
                      (i >>> 17)) +
                      o) |
                    0) |
                    ~n)) +
                  t[5] -
                  57434055) |
                0) <<
                21) |
                (r >>> 11)) +
                i) |
              0),
            (r =
              ((((r +=
                (((o =
                  ((((o +=
                    ((r ^
                      ((n =
                        ((((n += ((i ^ (r | ~o)) + t[12] + 1700485571) | 0) <<
                          6) |
                          (n >>> 26)) +
                          r) |
                        0) |
                        ~i)) +
                      t[3] -
                      1894986606) |
                    0) <<
                    10) |
                    (o >>> 22)) +
                    n) |
                  0) ^
                  ((i =
                    ((((i += ((n ^ (o | ~r)) + t[10] - 1051523) | 0) << 15) |
                      (i >>> 17)) +
                      o) |
                    0) |
                    ~n)) +
                  t[1] -
                  2054922799) |
                0) <<
                21) |
                (r >>> 11)) +
                i) |
              0),
            (r =
              ((((r +=
                (((o =
                  ((((o +=
                    ((r ^
                      ((n =
                        ((((n += ((i ^ (r | ~o)) + t[8] + 1873313359) | 0) <<
                          6) |
                          (n >>> 26)) +
                          r) |
                        0) |
                        ~i)) +
                      t[15] -
                      30611744) |
                    0) <<
                    10) |
                    (o >>> 22)) +
                    n) |
                  0) ^
                  ((i =
                    ((((i += ((n ^ (o | ~r)) + t[6] - 1560198380) | 0) << 15) |
                      (i >>> 17)) +
                      o) |
                    0) |
                    ~n)) +
                  t[13] +
                  1309151649) |
                0) <<
                21) |
                (r >>> 11)) +
                i) |
              0),
            (r =
              ((((r +=
                (((o =
                  ((((o +=
                    ((r ^
                      ((n =
                        ((((n += ((i ^ (r | ~o)) + t[4] - 145523070) | 0) <<
                          6) |
                          (n >>> 26)) +
                          r) |
                        0) |
                        ~i)) +
                      t[11] -
                      1120210379) |
                    0) <<
                    10) |
                    (o >>> 22)) +
                    n) |
                  0) ^
                  ((i =
                    ((((i += ((n ^ (o | ~r)) + t[2] + 718787259) | 0) << 15) |
                      (i >>> 17)) +
                      o) |
                    0) |
                    ~n)) +
                  t[9] -
                  343485551) |
                0) <<
                21) |
                (r >>> 11)) +
                i) |
              0),
            (e[0] = (n + e[0]) | 0),
            (e[1] = (r + e[1]) | 0),
            (e[2] = (i + e[2]) | 0),
            (e[3] = (o + e[3]) | 0);
        }
        function r(e) {
          var t,
            n = [];
          for (t = 0; t < 64; t += 4)
            n[t >> 2] =
              e.charCodeAt(t) +
              (e.charCodeAt(t + 1) << 8) +
              (e.charCodeAt(t + 2) << 16) +
              (e.charCodeAt(t + 3) << 24);
          return n;
        }
        function i(e) {
          var t,
            n = [];
          for (t = 0; t < 64; t += 4)
            n[t >> 2] =
              e[t] + (e[t + 1] << 8) + (e[t + 2] << 16) + (e[t + 3] << 24);
          return n;
        }
        function o(e) {
          var t,
            i,
            o,
            a,
            s,
            u,
            c = e.length,
            l = [1732584193, -271733879, -1732584194, 271733878];
          for (t = 64; t <= c; t += 64) n(l, r(e.substring(t - 64, t)));
          for (
            i = (e = e.substring(t - 64)).length,
              o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              t = 0;
            t < i;
            t += 1
          )
            o[t >> 2] |= e.charCodeAt(t) << ((t % 4) << 3);
          if (((o[t >> 2] |= 128 << ((t % 4) << 3)), t > 55))
            for (n(l, o), t = 0; t < 16; t += 1) o[t] = 0;
          return (
            (a = (a = 8 * c).toString(16).match(/(.*?)(.{0,8})$/)),
            (s = parseInt(a[2], 16)),
            (u = parseInt(a[1], 16) || 0),
            (o[14] = s),
            (o[15] = u),
            n(l, o),
            l
          );
        }
        function a(e) {
          var t,
            r,
            o,
            a,
            s,
            u,
            c = e.length,
            l = [1732584193, -271733879, -1732584194, 271733878];
          for (t = 64; t <= c; t += 64) n(l, i(e.subarray(t - 64, t)));
          for (
            r = (e = t - 64 < c ? e.subarray(t - 64) : new Uint8Array(0))
              .length,
              o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              t = 0;
            t < r;
            t += 1
          )
            o[t >> 2] |= e[t] << ((t % 4) << 3);
          if (((o[t >> 2] |= 128 << ((t % 4) << 3)), t > 55))
            for (n(l, o), t = 0; t < 16; t += 1) o[t] = 0;
          return (
            (a = (a = 8 * c).toString(16).match(/(.*?)(.{0,8})$/)),
            (s = parseInt(a[2], 16)),
            (u = parseInt(a[1], 16) || 0),
            (o[14] = s),
            (o[15] = u),
            n(l, o),
            l
          );
        }
        function s(e) {
          var n,
            r = "";
          for (n = 0; n < 4; n += 1)
            r += t[(e >> (8 * n + 4)) & 15] + t[(e >> (8 * n)) & 15];
          return r;
        }
        function u(e) {
          var t;
          for (t = 0; t < e.length; t += 1) e[t] = s(e[t]);
          return e.join("");
        }
        function c(e) {
          return (
            /[\u0080-\uFFFF]/.test(e) && (e = unescape(encodeURIComponent(e))),
            e
          );
        }
        function l(e, t) {
          var n,
            r = e.length,
            i = new ArrayBuffer(r),
            o = new Uint8Array(i);
          for (n = 0; n < r; n += 1) o[n] = e.charCodeAt(n);
          return t ? o : i;
        }
        function f(e) {
          return String.fromCharCode.apply(null, new Uint8Array(e));
        }
        function h(e, t, n) {
          var r = new Uint8Array(e.byteLength + t.byteLength);
          return (
            r.set(new Uint8Array(e)),
            r.set(new Uint8Array(t), e.byteLength),
            n ? r : r.buffer
          );
        }
        function v(e) {
          var t,
            n = [],
            r = e.length;
          for (t = 0; t < r - 1; t += 2) n.push(parseInt(e.substr(t, 2), 16));
          return String.fromCharCode.apply(String, n);
        }
        function d() {
          this.reset();
        }
        return (
          u(o("hello")),
          "undefined" == typeof ArrayBuffer ||
            ArrayBuffer.prototype.slice ||
            (function () {
              function t(e, t) {
                return (e = 0 | e || 0) < 0
                  ? Math.max(e + t, 0)
                  : Math.min(e, t);
              }
              ArrayBuffer.prototype.slice = function (n, r) {
                var i,
                  o,
                  a,
                  s,
                  u = this.byteLength,
                  c = t(n, u),
                  l = u;
                return (
                  r !== e && (l = t(r, u)),
                  c > l
                    ? new ArrayBuffer(0)
                    : ((i = l - c),
                      (o = new ArrayBuffer(i)),
                      (a = new Uint8Array(o)),
                      (s = new Uint8Array(this, c, i)),
                      a.set(s),
                      o)
                );
              };
            })(),
          (d.prototype.append = function (e) {
            return this.appendBinary(c(e)), this;
          }),
          (d.prototype.appendBinary = function (e) {
            (this._buff += e), (this._length += e.length);
            var t,
              i = this._buff.length;
            for (t = 64; t <= i; t += 64)
              n(this._hash, r(this._buff.substring(t - 64, t)));
            return (this._buff = this._buff.substring(t - 64)), this;
          }),
          (d.prototype.end = function (e) {
            var t,
              n,
              r = this._buff,
              i = r.length,
              o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (t = 0; t < i; t += 1)
              o[t >> 2] |= r.charCodeAt(t) << ((t % 4) << 3);
            return (
              this._finish(o, i),
              (n = u(this._hash)),
              e && (n = v(n)),
              this.reset(),
              n
            );
          }),
          (d.prototype.reset = function () {
            return (
              (this._buff = ""),
              (this._length = 0),
              (this._hash = [1732584193, -271733879, -1732584194, 271733878]),
              this
            );
          }),
          (d.prototype.getState = function () {
            return {
              buff: this._buff,
              length: this._length,
              hash: this._hash.slice(),
            };
          }),
          (d.prototype.setState = function (e) {
            return (
              (this._buff = e.buff),
              (this._length = e.length),
              (this._hash = e.hash),
              this
            );
          }),
          (d.prototype.destroy = function () {
            delete this._hash, delete this._buff, delete this._length;
          }),
          (d.prototype._finish = function (e, t) {
            var r,
              i,
              o,
              a = t;
            if (((e[a >> 2] |= 128 << ((a % 4) << 3)), a > 55))
              for (n(this._hash, e), a = 0; a < 16; a += 1) e[a] = 0;
            (r = (r = 8 * this._length).toString(16).match(/(.*?)(.{0,8})$/)),
              (i = parseInt(r[2], 16)),
              (o = parseInt(r[1], 16) || 0),
              (e[14] = i),
              (e[15] = o),
              n(this._hash, e);
          }),
          (d.hash = function (e, t) {
            return d.hashBinary(c(e), t);
          }),
          (d.hashBinary = function (e, t) {
            var n = u(o(e));
            return t ? v(n) : n;
          }),
          (d.ArrayBuffer = function () {
            this.reset();
          }),
          (d.ArrayBuffer.prototype.append = function (e) {
            var t,
              r = h(this._buff.buffer, e, !0),
              o = r.length;
            for (this._length += e.byteLength, t = 64; t <= o; t += 64)
              n(this._hash, i(r.subarray(t - 64, t)));
            return (
              (this._buff =
                t - 64 < o
                  ? new Uint8Array(r.buffer.slice(t - 64))
                  : new Uint8Array(0)),
              this
            );
          }),
          (d.ArrayBuffer.prototype.end = function (e) {
            var t,
              n,
              r = this._buff,
              i = r.length,
              o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (t = 0; t < i; t += 1) o[t >> 2] |= r[t] << ((t % 4) << 3);
            return (
              this._finish(o, i),
              (n = u(this._hash)),
              e && (n = v(n)),
              this.reset(),
              n
            );
          }),
          (d.ArrayBuffer.prototype.reset = function () {
            return (
              (this._buff = new Uint8Array(0)),
              (this._length = 0),
              (this._hash = [1732584193, -271733879, -1732584194, 271733878]),
              this
            );
          }),
          (d.ArrayBuffer.prototype.getState = function () {
            var e = d.prototype.getState.call(this);
            return (e.buff = f(e.buff)), e;
          }),
          (d.ArrayBuffer.prototype.setState = function (e) {
            return (e.buff = l(e.buff, !0)), d.prototype.setState.call(this, e);
          }),
          (d.ArrayBuffer.prototype.destroy = d.prototype.destroy),
          (d.ArrayBuffer.prototype._finish = d.prototype._finish),
          (d.ArrayBuffer.hash = function (e, t) {
            var n = u(a(new Uint8Array(e)));
            return t ? v(n) : n;
          }),
          d
        );
      })();
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/libraries/libraries~0d3b9ff33.js.map
