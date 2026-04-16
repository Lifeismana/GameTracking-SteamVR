var CLSTAMP = "10590646";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [978],
  {
    6035: (e, r, t) => {
      t.d(r, { P: () => p });
      var n,
        o,
        i = t(6540),
        a = t(3815),
        s = t(4452),
        c = "function" == typeof Symbol && Symbol.for,
        l =
          null !==
            (o =
              null ===
                (n = Object.getOwnPropertyDescriptor(function () {}, "name")) ||
              void 0 === n
                ? void 0
                : n.configurable) &&
          void 0 !== o &&
          o,
        u = c
          ? Symbol.for("react.forward_ref")
          : "function" == typeof i.forwardRef &&
            (0, i.forwardRef)(function (e) {
              return null;
            }).$$typeof,
        f = c
          ? Symbol.for("react.memo")
          : "function" == typeof i.memo &&
            (0, i.memo)(function (e) {
              return null;
            }).$$typeof;
      function p(e, r) {
        var t;
        if (f && e.$$typeof === f)
          throw new Error(
            "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
          );
        if ((0, a.P)()) return e;
        var n =
            null !== (t = null == r ? void 0 : r.forwardRef) &&
            void 0 !== t &&
            t,
          o = e,
          c = e.displayName || e.name;
        if (
          u &&
          e.$$typeof === u &&
          ((n = !0), "function" != typeof (o = e.render))
        )
          throw new Error(
            "[mobx-react-lite] `render` property of ForwardRef was not a function",
          );
        var p,
          b,
          m = function (e, r) {
            return (0, s.q)(function () {
              return o(e, r);
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
          n && (m = (0, i.forwardRef)(m)),
          (m = (0, i.memo)(m)),
          (p = e),
          (b = m),
          Object.keys(p).forEach(function (e) {
            d[e] ||
              Object.defineProperty(
                b,
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
    2517: (e, r, t) => {
      t.d(r, { Xr: () => o });
      var n = (function () {
          function e(e) {
            var r = this;
            Object.defineProperty(this, "finalize", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: e,
            }),
              Object.defineProperty(this, "registrations", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: new Map(),
              }),
              Object.defineProperty(this, "sweepTimeout", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "sweep", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function (e) {
                  void 0 === e && (e = 1e4),
                    clearTimeout(r.sweepTimeout),
                    (r.sweepTimeout = void 0);
                  var t = Date.now();
                  r.registrations.forEach(function (n, o) {
                    t - n.registeredAt >= e &&
                      (r.finalize(n.value), r.registrations.delete(o));
                  }),
                    r.registrations.size > 0 && r.scheduleSweep();
                },
              }),
              Object.defineProperty(this, "finalizeAllImmediately", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function () {
                  r.sweep(0);
                },
              });
          }
          return (
            Object.defineProperty(e.prototype, "register", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, r, t) {
                this.registrations.set(t, {
                  value: r,
                  registeredAt: Date.now(),
                }),
                  this.scheduleSweep();
              },
            }),
            Object.defineProperty(e.prototype, "unregister", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e) {
                this.registrations.delete(e);
              },
            }),
            Object.defineProperty(e.prototype, "scheduleSweep", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                void 0 === this.sweepTimeout &&
                  (this.sweepTimeout = setTimeout(this.sweep, 1e4));
              },
            }),
            e
          );
        })(),
        o =
          "undefined" != typeof FinalizationRegistry ? FinalizationRegistry : n;
    },
    724: (e, r, t) => {
      var n = t(7813);
      if (!t(6540).useState)
        throw new Error("mobx-react-lite requires React with Hooks support");
      if (!n.makeObservable)
        throw new Error(
          "mobx-react-lite@3 requires mobx at least version 6 to be available",
        );
    },
    6356: (e, r, t) => {
      t.d(r, { E: () => o });
      var n = t(7813);
      function o(e) {
        return (0, n.getDependencyTree)(e);
      }
    },
    9889: (e, r, t) => {
      t.d(r, { r: () => n.unstable_batchedUpdates });
      var n = t(961);
    },
    1370: (e, r, t) => {
      t.d(r, { PA: () => w });
      var n = t(7813),
        o = t(6540),
        i = t(5266);
      function a(e, r) {
        return e === r ? 0 !== e || 1 / e == 1 / r : e != e && r != r;
      }
      var s = Symbol("patchMixins"),
        c = Symbol("patchedDefinition");
      function l(e, r) {
        for (
          var t = this,
            n = arguments.length,
            o = new Array(n > 2 ? n - 2 : 0),
            i = 2;
          i < n;
          i++
        )
          o[i - 2] = arguments[i];
        r.locks++;
        try {
          var a;
          return null != e && (a = e.apply(this, o)), a;
        } finally {
          r.locks--,
            0 === r.locks &&
              r.methods.forEach(function (e) {
                e.apply(t, o);
              });
        }
      }
      function u(e, r) {
        return function () {
          for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
            n[o] = arguments[o];
          l.call.apply(l, [this, e, r].concat(n));
        };
      }
      function f(e, r, t) {
        var n = (function (e, r) {
          var t = (e[s] = e[s] || {}),
            n = (t[r] = t[r] || {});
          return (n.locks = n.locks || 0), (n.methods = n.methods || []), n;
        })(e, r);
        n.methods.indexOf(t) < 0 && n.methods.push(t);
        var o = Object.getOwnPropertyDescriptor(e, r);
        if (!o || !o[c]) {
          var i = e[r],
            a = p(e, r, o ? o.enumerable : void 0, n, i);
          Object.defineProperty(e, r, a);
        }
      }
      function p(e, r, t, n, o) {
        var i,
          a = u(o, n);
        return (
          ((i = {})[c] = !0),
          (i.get = function () {
            return a;
          }),
          (i.set = function (o) {
            if (this === e) a = u(o, n);
            else {
              var i = p(this, r, t, n, o);
              Object.defineProperty(this, r, i);
            }
          }),
          (i.configurable = !0),
          (i.enumerable = t),
          i
        );
      }
      var d = Symbol("ObserverAdministration"),
        b = Symbol("isMobXReactObserver");
      function m(e) {
        var r;
        return null != (r = e[d])
          ? r
          : (e[d] = {
              reaction: null,
              mounted: !1,
              reactionInvalidatedBeforeMount: !1,
              forceUpdate: null,
              name: v(e.constructor),
              state: void 0,
              props: void 0,
              context: void 0,
            });
      }
      function v(e) {
        return e.displayName || e.name || "<component>";
      }
      function h(e) {
        var r = e.bind(this),
          t = m(this);
        return function () {
          t.reaction ||
            ((t.reaction = (function (e) {
              return new n.Reaction(e.name + ".render()", function () {
                if (e.mounted)
                  try {
                    null == e.forceUpdate || e.forceUpdate();
                  } catch (t) {
                    var r;
                    null == (r = e.reaction) || r.dispose(),
                      (e.reaction = null);
                  }
                else e.reactionInvalidatedBeforeMount = !0;
              });
            })(t)),
            t.mounted ||
              i._observerFinalizationRegistry.register(this, t, this));
          var e = void 0,
            o = void 0;
          if (
            (t.reaction.track(function () {
              try {
                o = (0, n._allowStateChanges)(!1, r);
              } catch (r) {
                e = r;
              }
            }),
            e)
          )
            throw e;
          return o;
        };
      }
      function y(e, r) {
        return (
          (0, i.isUsingStaticRendering)() &&
            console.warn(
              "[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.",
            ),
          this.state !== r ||
            !(function (e, r) {
              if (a(e, r)) return !0;
              if (
                "object" != typeof e ||
                null === e ||
                "object" != typeof r ||
                null === r
              )
                return !1;
              var t = Object.keys(e),
                n = Object.keys(r);
              if (t.length !== n.length) return !1;
              for (var o = 0; o < t.length; o++)
                if (
                  !Object.hasOwnProperty.call(r, t[o]) ||
                  !a(e[t[o]], r[t[o]])
                )
                  return !1;
              return !0;
            })(this.props, e)
        );
      }
      function w(e, r) {
        if (r && "class" !== r.kind)
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
                var r = e.prototype;
                if (e[b]) {
                  var t = v(e);
                  throw new Error(
                    "The provided component class (" +
                      t +
                      ") has already been declared as an observer component.",
                  );
                }
                if (((e[b] = !0), r.componentWillReact))
                  throw new Error(
                    "The componentWillReact life-cycle event is no longer supported",
                  );
                if (e.__proto__ !== o.PureComponent)
                  if (r.shouldComponentUpdate) {
                    if (r.shouldComponentUpdate !== y)
                      throw new Error(
                        "It is not allowed to use shouldComponentUpdate in observer based components.",
                      );
                  } else r.shouldComponentUpdate = y;
                var n = r.render;
                if ("function" != typeof n) {
                  var a = v(e);
                  throw new Error(
                    "[mobx-react] class component (" +
                      a +
                      ") is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported.",
                  );
                }
                r.render = function () {
                  return (
                    Object.defineProperty(this, "render", {
                      configurable: !1,
                      writable: !1,
                      value: (0, i.isUsingStaticRendering)()
                        ? n
                        : h.call(this, n),
                    }),
                    this.render()
                  );
                };
                var s = r.componentDidMount;
                return (
                  (r.componentDidMount = function () {
                    var e = this,
                      r = m(this);
                    return (
                      (r.mounted = !0),
                      i._observerFinalizationRegistry.unregister(this),
                      (r.forceUpdate = function () {
                        return e.forceUpdate();
                      }),
                      (r.reaction && !r.reactionInvalidatedBeforeMount) ||
                        r.forceUpdate(),
                      null == s ? void 0 : s.apply(this, arguments)
                    );
                  }),
                  f(r, "componentWillUnmount", function () {
                    var e;
                    if (!(0, i.isUsingStaticRendering)()) {
                      var r = m(this);
                      null == (e = r.reaction) || e.dispose(),
                        (r.reaction = null),
                        (r.forceUpdate = null),
                        (r.mounted = !1),
                        (r.reactionInvalidatedBeforeMount = !1);
                    }
                  }),
                  e
                );
              })(e)
            : (0, i.observer)(e)
        );
      }
      o.version.split(".")[0];
      if (!o.Component)
        throw new Error("mobx-react requires React to be available");
      if (!n.observable)
        throw new Error("mobx-react requires mobx to be available");
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/libraries/libraries~dd4ece55e.js.map
