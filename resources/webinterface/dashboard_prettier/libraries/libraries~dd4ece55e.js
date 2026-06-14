var CLSTAMP = "10731156";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [978],
  {
    2517: (e, t, r) => {
      r.d(t, { Xr: () => o });
      var n = (function () {
          function e(e) {
            var t = this;
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
                    clearTimeout(t.sweepTimeout),
                    (t.sweepTimeout = void 0);
                  var r = Date.now();
                  t.registrations.forEach(function (n, o) {
                    r - n.registeredAt >= e &&
                      (t.finalize(n.value), t.registrations.delete(o));
                  }),
                    t.registrations.size > 0 && t.scheduleSweep();
                },
              }),
              Object.defineProperty(this, "finalizeAllImmediately", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function () {
                  t.sweep(0);
                },
              });
          }
          return (
            Object.defineProperty(e.prototype, "register", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (e, t, r) {
                this.registrations.set(r, {
                  value: t,
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
    724: (e, t, r) => {
      var n = r(7813);
      if (!r(6540).useState)
        throw new Error("mobx-react-lite requires React with Hooks support");
      if (!n.makeObservable)
        throw new Error(
          "mobx-react-lite@3 requires mobx at least version 6 to be available",
        );
    },
    6356: (e, t, r) => {
      r.d(t, { E: () => o });
      var n = r(7813);
      function o(e) {
        return (0, n.getDependencyTree)(e);
      }
    },
    9889: (e, t, r) => {
      r.d(t, { r: () => n.unstable_batchedUpdates });
      var n = r(961);
    },
    1370: (e, t, r) => {
      r.d(t, { PA: () => y });
      var n = r(7813),
        o = r(6540),
        i = r(9698);
      function a(e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
      }
      var s = Symbol("patchMixins"),
        l = Symbol("patchedDefinition");
      function c(e, t) {
        for (
          var r = this,
            n = arguments.length,
            o = new Array(n > 2 ? n - 2 : 0),
            i = 2;
          i < n;
          i++
        )
          o[i - 2] = arguments[i];
        t.locks++;
        try {
          var a;
          return null != e && (a = e.apply(this, o)), a;
        } finally {
          t.locks--,
            0 === t.locks &&
              t.methods.forEach(function (e) {
                e.apply(r, o);
              });
        }
      }
      function u(e, t) {
        return function () {
          for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
            n[o] = arguments[o];
          c.call.apply(c, [this, e, t].concat(n));
        };
      }
      function d(e, t, r) {
        var n = (function (e, t) {
          var r = (e[s] = e[s] || {}),
            n = (r[t] = r[t] || {});
          return (n.locks = n.locks || 0), (n.methods = n.methods || []), n;
        })(e, t);
        n.methods.indexOf(r) < 0 && n.methods.push(r);
        var o = Object.getOwnPropertyDescriptor(e, t);
        if (!o || !o[l]) {
          var i = e[t],
            a = p(e, t, o ? o.enumerable : void 0, n, i);
          Object.defineProperty(e, t, a);
        }
      }
      function p(e, t, r, n, o) {
        var i,
          a = u(o, n);
        return (
          ((i = {})[l] = !0),
          (i.get = function () {
            return a;
          }),
          (i.set = function (o) {
            if (this === e) a = u(o, n);
            else {
              var i = p(this, t, r, n, o);
              Object.defineProperty(this, t, i);
            }
          }),
          (i.configurable = !0),
          (i.enumerable = r),
          i
        );
      }
      var f = Symbol("ObserverAdministration"),
        b = Symbol("isMobXReactObserver");
      function v(e) {
        var t;
        return null != (t = e[f])
          ? t
          : (e[f] = {
              reaction: null,
              mounted: !1,
              reactionInvalidatedBeforeMount: !1,
              forceUpdate: null,
              name: h(e.constructor),
              state: void 0,
              props: void 0,
              context: void 0,
            });
      }
      function h(e) {
        return e.displayName || e.name || "<component>";
      }
      function m(e) {
        var t = e.bind(this),
          r = v(this);
        return function () {
          r.reaction ||
            ((r.reaction = (function (e) {
              return new n.Reaction(e.name + ".render()", function () {
                if (e.mounted)
                  try {
                    null == e.forceUpdate || e.forceUpdate();
                  } catch (r) {
                    var t;
                    null == (t = e.reaction) || t.dispose(),
                      (e.reaction = null);
                  }
                else e.reactionInvalidatedBeforeMount = !0;
              });
            })(r)),
            r.mounted ||
              i._observerFinalizationRegistry.register(this, r, this));
          var e = void 0,
            o = void 0;
          if (
            (r.reaction.track(function () {
              try {
                o = (0, n._allowStateChanges)(!1, t);
              } catch (t) {
                e = t;
              }
            }),
            e)
          )
            throw e;
          return o;
        };
      }
      function w(e, t) {
        return (
          (0, i.isUsingStaticRendering)() &&
            console.warn(
              "[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.",
            ),
          this.state !== t ||
            !(function (e, t) {
              if (a(e, t)) return !0;
              if (
                "object" != typeof e ||
                null === e ||
                "object" != typeof t ||
                null === t
              )
                return !1;
              var r = Object.keys(e),
                n = Object.keys(t);
              if (r.length !== n.length) return !1;
              for (var o = 0; o < r.length; o++)
                if (
                  !Object.hasOwnProperty.call(t, r[o]) ||
                  !a(e[r[o]], t[r[o]])
                )
                  return !1;
              return !0;
            })(this.props, e)
        );
      }
      function y(e, t) {
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
                if (e[b]) {
                  var r = h(e);
                  throw new Error(
                    "The provided component class (" +
                      r +
                      ") has already been declared as an observer component.",
                  );
                }
                if (((e[b] = !0), t.componentWillReact))
                  throw new Error(
                    "The componentWillReact life-cycle event is no longer supported",
                  );
                if (e.__proto__ !== o.PureComponent)
                  if (t.shouldComponentUpdate) {
                    if (t.shouldComponentUpdate !== w)
                      throw new Error(
                        "It is not allowed to use shouldComponentUpdate in observer based components.",
                      );
                  } else t.shouldComponentUpdate = w;
                var n = t.render;
                if ("function" != typeof n) {
                  var a = h(e);
                  throw new Error(
                    "[mobx-react] class component (" +
                      a +
                      ") is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported.",
                  );
                }
                t.render = function () {
                  return (
                    Object.defineProperty(this, "render", {
                      configurable: !1,
                      writable: !1,
                      value: (0, i.isUsingStaticRendering)()
                        ? n
                        : m.call(this, n),
                    }),
                    this.render()
                  );
                };
                var s = t.componentDidMount;
                return (
                  (t.componentDidMount = function () {
                    var e = this,
                      t = v(this);
                    return (
                      (t.mounted = !0),
                      i._observerFinalizationRegistry.unregister(this),
                      (t.forceUpdate = function () {
                        return e.forceUpdate();
                      }),
                      (t.reaction && !t.reactionInvalidatedBeforeMount) ||
                        t.forceUpdate(),
                      null == s ? void 0 : s.apply(this, arguments)
                    );
                  }),
                  d(t, "componentWillUnmount", function () {
                    var e;
                    if (!(0, i.isUsingStaticRendering)()) {
                      var t = v(this);
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
