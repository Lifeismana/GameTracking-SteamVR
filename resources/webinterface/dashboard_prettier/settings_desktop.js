var CLSTAMP = "10715262";
(() => {
  var e,
    t = {
      108: (e) => {
        e.exports = {
          recordingCircle: "svg_library_recordingCircle_2ovZQ",
          AnimationFadeOutIn: "svg_library_AnimationFadeOutIn_1lEwX",
          Spinner: "svg_library_Spinner_1q9tu",
          SpinnerSpokeFade: "svg_library_SpinnerSpokeFade_2E-wW",
        };
      },
      9712: (e, t, r) => {
        "use strict";
        r.d(t, { n: () => n });
        var o = r(4452);
        function n(e) {
          var t = e.children,
            r = e.render;
          t &&
            r &&
            console.error(
              "MobX Observer: Do not use children and render in the same time in `Observer`",
            );
          var n = t || r;
          return "function" != typeof n ? null : (0, o.q)(n);
        }
        n.displayName = "Observer";
      },
      3542: (e, t, r) => {
        "use strict";
        r.d(t, { W: () => i });
        var o = r(7813),
          n = r(6540);
        function i(e) {
          var t = (0, n.useState)(function () {
            return (0, o.observable)(e, {}, { deep: !1 });
          })[0];
          return (
            (0, o.runInAction)(function () {
              Object.assign(t, e);
            }),
            t
          );
        }
      },
      5562: (e, t, r) => {
        "use strict";
        r.d(t, { i: () => i });
        var o = r(7813),
          n = r(6540);
        function i(e, t) {
          return (0, n.useState)(function () {
            return (0, o.observable)(e(), t, { autoBind: !0 });
          })[0];
        }
      },
      1154: (e, t, r) => {
        "use strict";
        r.d(t, { W: () => a });
        var o = r(7813),
          n = r(6540),
          i = r(3542);
        function a(e, t) {
          var r = t && (0, i.W)(t);
          return (0, n.useState)(function () {
            return (0, o.observable)(e(r), void 0, { autoBind: !0 });
          })[0];
        }
      },
      4452: (e, t, r) => {
        "use strict";
        r.d(t, { q: () => p });
        var o = r(7813),
          n = r(6540),
          i = r(6356),
          a = r(3815),
          s = r(3438),
          l = r(9888);
        function u(e) {
          e.reaction = new o.Reaction("observer".concat(e.name), function () {
            var t;
            (e.stateVersion = Symbol()),
              null === (t = e.onStoreChange) || void 0 === t || t.call(e);
          });
        }
        function p(e, t) {
          if ((void 0 === t && (t = "observed"), (0, a.P)())) return e();
          var r = n.useRef(null);
          if (!r.current) {
            var o = {
              reaction: null,
              onStoreChange: null,
              stateVersion: Symbol(),
              name: t,
              subscribe: function (e) {
                return (
                  s.Y.unregister(o),
                  (o.onStoreChange = e),
                  o.reaction || (u(o), (o.stateVersion = Symbol())),
                  function () {
                    var e;
                    (o.onStoreChange = null),
                      null === (e = o.reaction) || void 0 === e || e.dispose(),
                      (o.reaction = null);
                  }
                );
              },
              getSnapshot: function () {
                return o.stateVersion;
              },
            };
            r.current = o;
          }
          var p,
            _,
            d = r.current;
          if (
            (d.reaction || (u(d), s.Y.register(r, d, d)),
            n.useDebugValue(d.reaction, i.E),
            (0, l.useSyncExternalStore)(
              d.subscribe,
              d.getSnapshot,
              d.getSnapshot,
            ),
            d.reaction.track(function () {
              try {
                p = e();
              } catch (e) {
                _ = e;
              }
            }),
            _)
          )
            throw _;
          return p;
        }
      },
      3438: (e, t, r) => {
        "use strict";
        r.d(t, { Y: () => o });
        var o = new (r(2517).Xr)(function (e) {
          var t;
          null === (t = e.reaction) || void 0 === t || t.dispose(),
            (e.reaction = null);
        });
      },
      5287: (e, t) => {
        "use strict";
        var r = Symbol.for("react.element"),
          o = Symbol.for("react.portal"),
          n = Symbol.for("react.fragment"),
          i = Symbol.for("react.strict_mode"),
          a = Symbol.for("react.profiler"),
          s = Symbol.for("react.provider"),
          l = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          p = Symbol.for("react.suspense"),
          _ = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          c = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          g = {};
        function f(e, t, r) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = r || h);
        }
        function v() {}
        function S(e, t, r) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = r || h);
        }
        (f.prototype.isReactComponent = {}),
          (f.prototype.setState = function (e, t) {
            if ("object" != typeof e && "function" != typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (f.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (v.prototype = f.prototype);
        var y = (S.prototype = new v());
        (y.constructor = S), m(y, f.prototype), (y.isPureReactComponent = !0);
        var D = Array.isArray,
          R = Object.prototype.hasOwnProperty,
          C = { current: null },
          I = { key: !0, ref: !0, __self: !0, __source: !0 };
        function b(e, t, o) {
          var n,
            i = {},
            a = null,
            s = null;
          if (null != t)
            for (n in (void 0 !== t.ref && (s = t.ref),
            void 0 !== t.key && (a = "" + t.key),
            t))
              R.call(t, n) && !I.hasOwnProperty(n) && (i[n] = t[n]);
          var l = arguments.length - 2;
          if (1 === l) i.children = o;
          else if (1 < l) {
            for (var u = Array(l), p = 0; p < l; p++) u[p] = arguments[p + 2];
            i.children = u;
          }
          if (e && e.defaultProps)
            for (n in (l = e.defaultProps)) void 0 === i[n] && (i[n] = l[n]);
          return {
            $$typeof: r,
            type: e,
            key: a,
            ref: s,
            props: i,
            _owner: C.current,
          };
        }
        function B(e) {
          return "object" == typeof e && null !== e && e.$$typeof === r;
        }
        var P = /\/+/g;
        function M(e, t) {
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
        function F(e, t, n, i, a) {
          var s = typeof e;
          ("undefined" !== s && "boolean" !== s) || (e = null);
          var l = !1;
          if (null === e) l = !0;
          else
            switch (s) {
              case "string":
              case "number":
                l = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case r:
                  case o:
                    l = !0;
                }
            }
          if (l)
            return (
              (a = a((l = e))),
              (e = "" === i ? "." + M(l, 0) : i),
              D(a)
                ? ((n = ""),
                  null != e && (n = e.replace(P, "$&/") + "/"),
                  F(a, t, n, "", function (e) {
                    return e;
                  }))
                : null != a &&
                  (B(a) &&
                    (a = (function (e, t) {
                      return {
                        $$typeof: r,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      a,
                      n +
                        (!a.key || (l && l.key === a.key)
                          ? ""
                          : ("" + a.key).replace(P, "$&/") + "/") +
                        e,
                    )),
                  t.push(a)),
              1
            );
          if (((l = 0), (i = "" === i ? "." : i + ":"), D(e)))
            for (var u = 0; u < e.length; u++) {
              var p = i + M((s = e[u]), u);
              l += F(s, t, n, p, a);
            }
          else if (
            ((p = (function (e) {
              return null === e || "object" != typeof e
                ? null
                : "function" == typeof (e = (c && e[c]) || e["@@iterator"])
                  ? e
                  : null;
            })(e)),
            "function" == typeof p)
          )
            for (e = p.call(e), u = 0; !(s = e.next()).done; )
              l += F((s = s.value), t, n, (p = i + M(s, u++)), a);
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
          return l;
        }
        function w(e, t, r) {
          if (null == e) return e;
          var o = [],
            n = 0;
          return (
            F(e, o, "", "", function (e) {
              return t.call(r, e, n++);
            }),
            o
          );
        }
        function k(e) {
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
        var V = { current: null },
          O = { transition: null },
          A = {
            ReactCurrentDispatcher: V,
            ReactCurrentBatchConfig: O,
            ReactCurrentOwner: C,
          };
        function E() {
          throw Error(
            "act(...) is not supported in production builds of React.",
          );
        }
        (t.Children = {
          map: w,
          forEach: function (e, t, r) {
            w(
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
            if (!B(e))
              throw Error(
                "React.Children.only expected to receive a single React element child.",
              );
            return e;
          },
        }),
          (t.Component = f),
          (t.Fragment = n),
          (t.Profiler = a),
          (t.PureComponent = S),
          (t.StrictMode = i),
          (t.Suspense = p),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A),
          (t.act = E),
          (t.cloneElement = function (e, t, o) {
            if (null == e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  ".",
              );
            var n = m({}, e.props),
              i = e.key,
              a = e.ref,
              s = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((a = t.ref), (s = C.current)),
                void 0 !== t.key && (i = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var l = e.type.defaultProps;
              for (u in t)
                R.call(t, u) &&
                  !I.hasOwnProperty(u) &&
                  (n[u] = void 0 === t[u] && void 0 !== l ? l[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) n.children = o;
            else if (1 < u) {
              l = Array(u);
              for (var p = 0; p < u; p++) l[p] = arguments[p + 2];
              n.children = l;
            }
            return {
              $$typeof: r,
              type: e.type,
              key: i,
              ref: a,
              props: n,
              _owner: s,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: l,
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
          (t.createElement = b),
          (t.createFactory = function (e) {
            var t = b.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = B),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: k,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: _, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = O.transition;
            O.transition = {};
            try {
              e();
            } finally {
              O.transition = t;
            }
          }),
          (t.unstable_act = E),
          (t.useCallback = function (e, t) {
            return V.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return V.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return V.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return V.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return V.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, r) {
            return V.current.useImperativeHandle(e, t, r);
          }),
          (t.useInsertionEffect = function (e, t) {
            return V.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return V.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return V.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, r) {
            return V.current.useReducer(e, t, r);
          }),
          (t.useRef = function (e) {
            return V.current.useRef(e);
          }),
          (t.useState = function (e) {
            return V.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, r) {
            return V.current.useSyncExternalStore(e, t, r);
          }),
          (t.useTransition = function () {
            return V.current.useTransition();
          }),
          (t.version = "18.3.1");
      },
      6090: (e, t, r) => {
        "use strict";
        r.d(t, {
          $: () => B.$,
          $Z: () => B.$Z,
          Ay: () => P,
          CU: () => n.CU,
          Ci: () => g.C,
          Do: () => B.Do,
          Ee: () => b.Ee,
          Em: () => p.Em,
          Fb: () => n.Fb,
          Fi: () => f.Fi,
          Fz: () => B.Fz,
          GM: () => _.GM,
          GQ: () => b.GQ,
          GS: () => o.GS,
          Gz: () => b.Gz,
          HW: () => b.HW,
          I0: () => o.I0,
          IS: () => l.I,
          JZ: () => n.JZ,
          Jv: () => o.Jv,
          KI: () => B.KI,
          Kl: () => b.Kl,
          Ld: () => n.Ld,
          M9: () => o.M9,
          MQ: () => f.MQ,
          MV: () => b.MV,
          N: () => a.e,
          N1: () => m.N,
          NH: () => n.NH,
          O5: () => d.O,
          O6: () => n.O6,
          OH: () => b.OH,
          Oi: () => f.Oi,
          QB: () => n.QB,
          QR: () => B.QR,
          R$: () => b.R$,
          Se: () => n.Se,
          Uj: () => n.Uj,
          Vh: () => c.Vh,
          Wi: () => _.Wi,
          Wq: () => o.Wq,
          Xl: () => b.Xl,
          Xu: () => o.Xu,
          Y4: () => s.Y,
          YV: () => B.YV,
          Yu: () => b.Yu,
          ZP: () => B.ZP,
          Zk: () => f.Zk,
          _1: () => b._1,
          _h: () => f._h,
          _n: () => o._n,
          aX: () => c.aX,
          b: () => b.b,
          b$: () => R.b,
          b4: () => v.b,
          cB: () => D.L,
          dL: () => u.d,
          e_: () => n.e_,
          en: () => B.en,
          eo: () => B.eo,
          fD: () => B.fD,
          fk: () => B.fk,
          gN: () => b.gN,
          k2: () => b.k2,
          kG: () => b.kG,
          ku: () => b.ku,
          lq: () => h.l,
          m$: () => v.m,
          mH: () => c.mH,
          mX: () => o.mX,
          mo: () => b.mo,
          mu: () => b.mu,
          nX: () => p.nX,
          ne: () => b.ne,
          nq: () => y.n,
          o3: () => f.o3,
          oN: () => n.oN,
          pM: () => b.pM,
          pg: () => o.pg,
          q5: () => n.q5,
          qF: () => n.qF,
          rF: () => l.H,
          rx: () => b.rx,
          sJ: () => S.$,
          sn: () => o.sn,
          t$: () => I.t,
          tx: () => n.tx,
          uC: () => C.u,
          uS: () => i.u,
          vx: () => n.vx,
          xO: () => f.xO,
          yW: () => B.yW,
        });
        var o = r(2824),
          n = r(6292),
          i = r(119),
          a = (r(4120), r(1230)),
          s = r(5830),
          l = r(6186),
          u = r(3361),
          p = (r(111), r(5723)),
          _ = r(3496),
          d = r(5178),
          c = (r(428), r(9011), r(7350)),
          h = r(6847),
          m = r(5227),
          g = (r(10), r(1808)),
          f = r(7019),
          v = (r(1988), r(2527), r(9864)),
          S = (r(4189), r(322), r(1977), r(6417)),
          y = r(2303),
          D = r(8715),
          R = (r(4397), r(5459)),
          C = r(8472),
          I = (r(1184), r(1321)),
          b = r(3725),
          B = r(4367);
        const P = VRHTML;
      },
      9864: (e, t, r) => {
        "use strict";
        r.d(t, { b: () => o, m: () => a });
        var o,
          n = r(6540),
          i = r(3496);
        !(function (e) {
          (e[(e.Parent = 0)] = "Parent"), (e[(e.World = 1)] = "World");
        })(o || (o = {}));
        class a extends i._J {
          constructor(e) {
            super(e);
          }
          internalRender() {
            var e;
            const t = null === (e = this.props.enabled) || void 0 === e || e,
              r = this.props.rotation_start_angle_threshold
                ? (this.props.rotation_start_angle_threshold * Math.PI) / 180
                : null,
              o = this.props.rotation_stop_angle_threshold
                ? (this.props.rotation_stop_angle_threshold * Math.PI) / 180
                : null,
              i = this.props.rotation_ease_out_angle_threshold
                ? (this.props.rotation_ease_out_angle_threshold * Math.PI) / 180
                : null,
              a = this.props.rotation_min_angular_velocity
                ? (this.props.rotation_min_angular_velocity * Math.PI) / 180
                : null,
              s = this.props.rotation_max_angular_velocity
                ? (this.props.rotation_max_angular_velocity * Math.PI) / 180
                : null;
            return n.createElement(
              "vsg-elastic-head-transform",
              {
                "rotation-start-angle-threshold": r,
                "rotation-stop-angle-threshold": o,
                "rotation-ease-in-time": this.props.rotation_ease_in_time,
                "rotation-ease-in-power": this.props.rotation_ease_in_power,
                "rotation-ease-out-angle-threshold": i,
                "rotation-ease-out-power": this.props.rotation_ease_out_power,
                "rotation-min-angular-velocity": a,
                "rotation-max-angular-velocity": s,
                "translation-start-distance-threshold":
                  this.props.translation_start_distance_threshold,
                "translation-stop-distance-threshold":
                  this.props.translation_stop_distance_threshold,
                "translation-ease-in-time": this.props.translation_ease_in_time,
                "translation-ease-in-power":
                  this.props.translation_ease_in_power,
                "translation-ease-out-distance-threshold":
                  this.props.translation_ease_out_distance_threshold,
                "translation-ease-out-power":
                  this.props.translation_ease_out_power,
                "translation-velocity": this.props.translation_velocity,
                enabled: t,
                "lock-to-horizon": this.props.lock_to_horizon,
                "translation-parent": this.props.translation_parent,
                "rotation-translation-change-together":
                  this.props.rotation_translation_change_together,
              },
              this.props.children,
            );
          }
        }
      },
      5227: (e, t, r) => {
        "use strict";
        r.d(t, { N: () => i });
        var o = r(6540),
          n = r(3496);
        class i extends n._J {
          constructor(e) {
            super(e);
          }
          internalRender() {
            return o.createElement("vsg-line", {
              "target-id": this.props.target_id,
              thickness: this.props.thickness,
              "start-buffer": this.props.start_buffer,
              "end-buffer": this.props.end_buffer,
            });
          }
        }
      },
      7019: (e, t, r) => {
        "use strict";
        r.d(t, {
          Fi: () => a,
          Lr: () => y,
          MQ: () => i,
          Oi: () => o,
          Zk: () => D,
          _h: () => n,
          o3: () => s,
          xO: () => l,
        });
        var o,
          n,
          i,
          a,
          s,
          l,
          u = r(1635),
          p = r(6540),
          _ = r(3496),
          d = r(5178),
          c = r(3236),
          h = r(5723),
          m = r(7600),
          g = r(7727),
          f = r(1651),
          v = r(7813);
        function S(e) {
          if (e) return [e.u, e.v];
        }
        function y(e) {
          switch (e) {
            case o.TopLeft:
              return { x: -1, y: 1 };
            case o.TopCenter:
              return { x: 0, y: 1 };
            case o.TopRight:
              return { x: 1, y: 1 };
            case o.CenterLeft:
              return { x: -1, y: 0 };
            case o.Center:
              return { x: 0, y: 0 };
            case o.CenterRight:
              return { x: 1, y: 0 };
            case o.BottomLeft:
              return { x: -1, y: -1 };
            case o.BottomCenter:
              return { x: 0, y: -1 };
            case o.BottomRight:
              return { x: 1, y: -1 };
          }
        }
        !(function (e) {
          (e[(e.TopLeft = 0)] = "TopLeft"),
            (e[(e.TopCenter = 1)] = "TopCenter"),
            (e[(e.TopRight = 2)] = "TopRight"),
            (e[(e.CenterLeft = 3)] = "CenterLeft"),
            (e[(e.Center = 4)] = "Center"),
            (e[(e.CenterRight = 5)] = "CenterRight"),
            (e[(e.BottomLeft = 6)] = "BottomLeft"),
            (e[(e.BottomCenter = 7)] = "BottomCenter"),
            (e[(e.BottomRight = 8)] = "BottomRight");
        })(o || (o = {})),
          (function (e) {
            (e[(e.Auto = 0)] = "Auto"), (e[(e.SingleTap = 1)] = "SingleTap");
          })(n || (n = {})),
          (function (e) {
            (e[(e.Mono = 0)] = "Mono"),
              (e[(e.Parallel = 1)] = "Parallel"),
              (e[(e.Crossed = 2)] = "Crossed"),
              (e[(e.Panorama = 3)] = "Panorama"),
              (e[(e.StackedPanorama = 4)] = "StackedPanorama");
          })(i || (i = {})),
          (function (e) {
            (e[(e.Visible = 0)] = "Visible"),
              (e[(e.SkipInSceneGraph = 1)] = "SkipInSceneGraph"),
              (e[(e.Hidden = 2)] = "Hidden"),
              (e[(e.InvisibleButIntersectable = 3)] =
                "InvisibleButIntersectable");
          })(a || (a = {})),
          (function (e) {
            (e[(e.Default = 0)] = "Default"),
              (e[(e.Disabled = 1)] = "Disabled"),
              (e[(e.Low = 2)] = "Low");
          })(s || (s = {})),
          (function (e) {
            (e[(e.PixelOffset = 0)] = "PixelOffset"),
              (e[(e.ScaleAndCenter = 1)] = "ScaleAndCenter");
          })(l || (l = {}));
        class D extends _._J {
          constructor(e) {
            super(e),
              (this.m_Rect = { x: 0, y: 0, width: 0, height: 0 }),
              (this.m_nEmbeddedIndex = void 0),
              (this.m_LastDOMContentSize = void 0),
              (this.m_DOMContentSizeChangedCallbacks = new f.l()),
              (this.m_resizeObserver = null),
              (this.m_UVsMin = void 0),
              (this.m_UVsMax = void 0),
              (this.m_bOverdragBlocking = !1),
              (this.m_overdragBlockingElements = []);
            const t =
                void 0 !== this.props.width || void 0 !== this.props.height,
              r = void 0 !== this.props.meters_per_pixel,
              o = void 0 !== this.props.target_dpi_panel_id,
              n =
                void 0 !== this.props.rendermodel_component_device_index ||
                void 0 !== this.props.rendermodel_component_name,
              i =
                void 0 !== this.props.subview_parent_panel_id ||
                void 0 !== this.props.subview_parent_panel_key;
            if (
              n &&
              (void 0 === this.props.rendermodel_component_device_index ||
                void 0 === this.props.rendermodel_component_name)
            )
              throw new Error(
                "Panel requires both rendermodel_component_device_index and rendermodel_component_name to be a rendermodel texture.",
              );
            const a = [t, r, o, n, i].filter((e) => e).length,
              s =
                "an (explicit width and/or height), an explicit meters_per_pixel, a target_panel_dpi panel ID, a rendermodel name, or a parent overlay of which to become a subview.";
            if (0 == a)
              throw new Error(
                `Panel requires one of the following props: ${s}.`,
              );
            if (a > 1)
              throw new Error(
                `Panel cannot have more of the following of the following props: ${s}.`,
              );
            super.setBuildNodeOverride(this.buildNode);
          }
          get lastDOMContentSize() {
            return this.m_LastDOMContentSize;
          }
          RegisterForDOMContentSizeChangedCallback(e) {
            return this.m_DOMContentSizeChangedCallbacks.Register(e);
          }
          isExternal() {
            return !!this.props.overlay_key;
          }
          getExternalOverlayKey() {
            return this.props.overlay_key;
          }
          getEmbeddedIndex() {
            return this.m_nEmbeddedIndex;
          }
          componentWillReceiveProps_UNSAFE() {
            D.s_bPanelsAreDirty = !0;
          }
          componentDidMount() {
            super.componentDidMount(),
              (this.m_resizeObserver = new ResizeObserver(
                this.onResizeObserved,
              )),
              this.m_resizeObserver.observe(this.getCurrentRootElement()),
              (this.m_nEmbeddedIndex = d.O.Current().addEmbeddedPanelUVs(this)),
              (D.s_bPanelsAreDirty = !0),
              this.getCurrentRootElement().addEventListener(
                "mousedown",
                this.onPanelMouseDown,
              ),
              this.forceUpdate(),
              D.s_setAllPanels.add(this);
          }
          onResizeObserved(e, t) {
            d.O.Current().forceLayoutUpdate(),
              (this.m_LastDOMContentSize = {
                clientWidth: e[0].contentRect.width,
                clientHeight: e[0].contentRect.height,
              }),
              this.m_DOMContentSizeChangedCallbacks.Dispatch(
                this.m_LastDOMContentSize,
              );
          }
          componentWillUnmount() {
            D.s_setAllPanels.delete(this),
              this.m_resizeObserver &&
                (this.m_resizeObserver.disconnect(),
                (this.m_resizeObserver = null)),
              this.stopOverDragBlocking(),
              this.getCurrentRootElement().removeEventListener(
                "mousedown",
                this.onPanelMouseDown,
              ),
              (D.s_bPanelsAreDirty = !0),
              d.O.Current().removeEmbeddedPanelUVs(this),
              this.m_DOMContentSizeChangedCallbacks.ClearAllCallbacks(),
              super.componentWillUnmount();
          }
          onPanelMouseDown() {
            this.startOverDragBlocking();
          }
          startOverDragBlocking() {
            if (this.m_bOverdragBlocking) return;
            const e = document.body.getBoundingClientRect(),
              t = this.getCurrentRootElement().getBoundingClientRect();
            this.createOverdragBlockingElement(0, 0, e.width, t.y),
              this.createOverdragBlockingElement(
                0,
                t.y + t.height,
                e.width,
                e.height - t.height - t.y,
              ),
              this.createOverdragBlockingElement(0, t.y, t.x, t.height),
              this.createOverdragBlockingElement(
                t.x + t.width,
                t.y,
                e.width - t.width - t.x,
                t.height,
              ),
              window.document.addEventListener("mouseup", this.onWindowMouseUp),
              (this.m_bOverdragBlocking = !0);
          }
          stopOverDragBlocking() {
            this.m_bOverdragBlocking &&
              (this.m_overdragBlockingElements.forEach((e) => {
                document.body.removeChild(e);
              }),
              (this.m_overdragBlockingElements = []),
              window.document.removeEventListener(
                "mouseup",
                this.onWindowMouseUp,
              ),
              (this.m_bOverdragBlocking = !1));
          }
          createOverdragBlockingElement(e, t, r, o) {
            let n = document.createElement("div");
            (n.style.position = "absolute"),
              (n.style.top = t + "px"),
              (n.style.left = e + "px"),
              (n.style.width = r + "px"),
              (n.style.height = o + "px"),
              (n.style.zIndex = "90019001"),
              this.m_overdragBlockingElements.push(n),
              document.body.appendChild(n);
          }
          onWindowMouseUp(e) {
            this.stopOverDragBlocking();
          }
          getNodeType() {
            return "panel";
          }
          get visibility() {
            var e;
            return null !== (e = this.props.visibility) && void 0 !== e
              ? e
              : a.Visible;
          }
          buildNode(e, t) {
            var r, o, n, i, s, l, u, p, c, m, g, f;
            if (
              !(
                this.visibility == a.Visible ||
                this.visibility == a.InvisibleButIntersectable
              )
            )
              return [e, null];
            let v = Object.assign(Object.assign({}, e), {
                bInsideReparentedPanel: !1,
                currentPanel: this,
              }),
              D = this.createSgNode(t),
              R = { x: 0, y: 0 };
            R =
              "object" == typeof this.props.origin
                ? (0, _.PG)(this.props.origin)
                : y(this.props.origin);
            const C = this.props.overlay_key,
              I = (0, h.w5)();
            C && C.length > 0
              ? (D.properties.key = C)
              : I
                ? (D.properties.key = I)
                : (D.properties.overlay_handle = (0, h.X4)()),
              this.m_UVsMin &&
                (D.properties.uv_min =
                  null !== (r = S(this.m_UVsMin)) && void 0 !== r ? r : void 0),
              this.m_UVsMax &&
                (D.properties.uv_max =
                  null !== (o = S(this.m_UVsMax)) && void 0 !== o ? o : void 0);
            const b = 1 / d.O.Current().m_fCurrentScale;
            let B = this.props.frame_resize_scale_factor;
            return (
              this.props.is_frame_page_main_panel && (B = null != B ? B : 1),
              (D.properties.width =
                null !== (n = this.props.width) && void 0 !== n ? n : void 0),
              (D.properties.height =
                null !== (i = this.props.height) && void 0 !== i ? i : void 0),
              (D.properties["scale-index"] =
                null !== (s = this.props.scale_index) && void 0 !== s ? s : 0),
              (D.properties["min-width"] =
                null !== (l = this.props.min_width) && void 0 !== l
                  ? l
                  : void 0),
              (D.properties["target-width-anchor-id"] = (0, h.bl)(
                this.props.target_width_anchor_id,
              )),
              (D.properties["target-dpi-panel-id"] = (0, h.bl)(
                this.props.target_dpi_panel_id,
              )),
              (D.properties["target-dpi-multiplier"] =
                this.props.target_dpi_multiplier),
              (D.properties["meters-per-pixel"] =
                null != this.props.meters_per_pixel
                  ? this.props.meters_per_pixel * b
                  : void 0),
              (D.properties["subview-parent-panel-key"] =
                this.props.subview_parent_panel_key),
              (D.properties["subview-parent-panel-id"] =
                this.props.subview_parent_panel_id),
              (D.properties["subview-sizing"] = this.props.subview_sizing),
              (D.properties.curvature = this.props.curvature),
              (D.properties["curvature-origin-id"] = (0, h.bl)(
                this.props.curvature_origin_id,
              )),
              (D.properties.spherical = this.props.spherical),
              (D.properties.interactive = this.props.interactive),
              (D.properties.scrollable = this.props.scrollable),
              (D.properties.undocked = this.props.undocked),
              (D.properties.modal = this.props.modal),
              (D.properties["only-visible-with-laser"] =
                this.props.only_visible_with_laser),
              (D.properties["allow-input-capture"] =
                this.props.allow_input_capture),
              (D.properties["lasermouse-filtering"] =
                null === (u = this.props) || void 0 === u
                  ? void 0
                  : u.lasermouse_filtering),
              (D.properties["hide-laser-when-clicking"] =
                this.props.hide_lasermouse_when_clicking),
              (D.properties["hide-laser-intersection"] =
                null === (p = this.props) || void 0 === p
                  ? void 0
                  : p.hide_laser_intersection),
              (D.properties["make-overlays-interactive-if-visible"] =
                this.props.make_overlays_interactive_if_visible),
              (D.properties["is-grab-handle"] = this.props.is_grab_handle),
              (D.properties["embedded-uv-index"] = this.m_nEmbeddedIndex),
              (D.properties.origin = (0, _.Hm)(R)),
              (D.properties.debug_name = this.props.debug_name),
              (D.properties.sampler = this.props.sampler),
              (D.properties.reflect = this.props.reflect),
              (D.properties.stereoscopy = this.props.stereoscopy),
              (D.properties.rendermodel_component_device_index =
                this.props.rendermodel_component_device_index),
              (D.properties.rendermodel_component_name =
                this.props.rendermodel_component_name),
              (D.properties["texture-id"] = (0, h.bl)(this.props.texture_id)),
              (D.properties["sort-order"] = this.props.sort_order),
              (D.properties["sort-depth-bias"] = this.props.sort_depth_bias),
              (D.properties.visibility = this.visibility),
              (D.properties["frame-resize-scale-factor"] = B),
              (D.properties["main-panel-for-frame-page"] =
                this.props.is_frame_page_main_panel),
              (D.properties["steam-input-appid"] =
                null === (c = this.inputFocusParams) || void 0 === c
                  ? void 0
                  : c.unSteamInputAppID),
              (D.properties["vr-input-pid"] =
                null === (m = this.inputFocusParams) || void 0 === m
                  ? void 0
                  : m.unVRInputPID),
              (D.properties["can-take-keyboard-focus"] =
                null ===
                  (f =
                    null === (g = this.inputFocusParams) || void 0 === g
                      ? void 0
                      : g.bCanTakeKeyboardFocus) ||
                void 0 === f ||
                f),
              [v, D]
            );
          }
          scaleLocalUVToGlobal(e) {
            if (!this.m_UVsMin || !this.m_UVsMax) return;
            const t = this.m_UVsMax.u - this.m_UVsMin.u,
              r = this.m_UVsMax.v - this.m_UVsMin.v;
            return {
              u: this.m_UVsMin.u + t * e.u,
              v: this.m_UVsMin.v + r * e.v,
            };
          }
          updateLayoutValues() {
            if (this.props.overlay_key)
              return (
                (this.m_UVsMin = this.props.uv_min),
                void (this.m_UVsMax = this.props.uv_max)
              );
            this.m_Rect = this.getCurrentRootElement().getBoundingClientRect();
            let e = this.getCurrentRootElement().ownerDocument.defaultView;
            e &&
              ((this.m_UVsMin = {
                u: this.m_Rect.x / e.innerWidth,
                v: this.m_Rect.y / e.innerHeight,
              }),
              (this.m_UVsMax = {
                u: (this.m_Rect.x + this.m_Rect.width) / e.innerWidth,
                v: (this.m_Rect.y + this.m_Rect.height) / e.innerHeight,
              }));
          }
          PanelContextValue() {
            return this;
          }
          BCanUseStableSGIDs() {
            return !0;
          }
          internalRender() {
            return p.createElement(
              "vsg-node",
              {
                style: { display: this.visibility == a.Hidden ? "none" : null },
              },
              p.createElement(m.tH, null, this.props.children),
              this.props.is_frame_page_main_panel &&
                p.createElement(R, { panel: this, panelID: this.getID() }),
            );
          }
          get inputFocusParams() {
            return Object.assign(
              { bCanTakeKeyboardFocus: this.props.interactive },
              this.props.inputFocusParams,
            );
          }
          get isInputFocusable() {
            var e, t, r;
            return (
              (null === (e = this.inputFocusParams) || void 0 === e
                ? void 0
                : e.unSteamInputAppID) ||
              (null === (t = this.inputFocusParams) || void 0 === t
                ? void 0
                : t.unVRInputPID) ||
              (null === (r = this.inputFocusParams) || void 0 === r
                ? void 0
                : r.bCanTakeKeyboardFocus)
            );
          }
        }
        function R(e) {
          const { panel: t, panelID: r } = e,
            { page: o } = (0, g.N)();
          return (
            p.useEffect(() => {
              const { Unset: e } = null == o ? void 0 : o.SetMainPanel(t);
              return e;
            }, [o, t, r]),
            null
          );
        }
        (D.s_bPanelsAreDirty = !1),
          (D.s_setAllPanels = new v.ObservableSet()),
          (0, u.Cg)([c.o], D.prototype, "onResizeObserved", null),
          (0, u.Cg)([c.o], D.prototype, "onPanelMouseDown", null),
          (0, u.Cg)([c.o], D.prototype, "onWindowMouseUp", null),
          (0, u.Cg)([c.o], D.prototype, "buildNode", null),
          (window.s_setAllPanels = D.s_setAllPanels);
      },
      1808: (e, t, r) => {
        "use strict";
        r.d(t, { C: () => s });
        var o = r(1635),
          n = r(3496),
          i = r(7019),
          a = r(3236);
        class s extends n._J {
          constructor(e) {
            super(e),
              (this.m_latchedPosition = null),
              super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "panel-anchor";
          }
          relatch() {
            this.m_latchedPosition = null;
          }
          buildNode(e, t) {
            var r, o;
            if (!e.currentPanel && !e.bInsideReparentedPanel)
              return [
                Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                null,
              ];
            let a = null;
            "object" == typeof this.props.location
              ? (a = (0, n.PG)(this.props.location, { x: 0, y: 0 }))
              : "number" == typeof this.props.location &&
                (a = (0, i.Lr)(this.props.location));
            let s = this.createSgNode(t);
            if (this.props.latched && null !== this.m_latchedPosition)
              (s.properties["anchor-u"] = this.m_latchedPosition.u),
                (s.properties["anchor-v"] = this.m_latchedPosition.v);
            else if (a) {
              const t = { u: 0.5 * a.x + 0.5, v: -0.5 * a.y + 0.5 },
                r =
                  !e.currentPanel || e.currentPanel.props.overlay_key
                    ? t
                    : e.currentPanel.scaleLocalUVToGlobal(t);
              r &&
                ((s.properties["anchor-u"] = r.u),
                (s.properties["anchor-v"] = r.v));
            } else {
              if (!e.currentPanel)
                return [
                  Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                  null,
                ];
              const n = t.ownerDocument,
                i = t.getBoundingClientRect(),
                a = i.left + i.width / 2,
                l = i.top + i.height / 2,
                u = e.currentPanel.m_Rect;
              if (a < u.x || a > u.x + u.width || l < u.y || l > u.y + u.height)
                return [
                  Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                  null,
                ];
              const p =
                  null === (r = n.defaultView) || void 0 === r
                    ? void 0
                    : r.innerWidth,
                _ =
                  null === (o = n.defaultView) || void 0 === o
                    ? void 0
                    : o.innerHeight;
              if (!(_ && _ > 0 && p && p > 0))
                return [
                  Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                  null,
                ];
              (s.properties["anchor-u"] = a / p),
                (s.properties["anchor-v"] = l / _);
            }
            return (
              (this.m_latchedPosition = {
                u: s.properties["anchor-u"],
                v: s.properties["anchor-v"],
              }),
              [e, s]
            );
          }
        }
        (0, o.Cg)([a.o], s.prototype, "buildNode", null);
      },
      3361: (e, t, r) => {
        "use strict";
        r.d(t, { d: () => s });
        var o,
          n = r(6540),
          i = r(3496),
          a = r(6292);
        !(function (e) {
          (e[(e.Seated = 0)] = "Seated"),
            (e[(e.Standing = 1)] = "Standing"),
            (e[(e.Raw = 2)] = "Raw");
        })(o || (o = {}));
        class s extends i._J {
          constructor(e) {
            super(e);
            if (
              (void 0 === e.parent_path ? 0 : 1) +
                (void 0 === e.parent_origin ? 0 : 1) +
                (void 0 === e.parent_id ? 0 : 1) >
              1
            )
              throw new Error(
                "Transform cannot have more than one parent_ property set.",
              );
          }
          internalRender() {
            var e, t, r;
            let s, l, u, p;
            this.props.transform
              ? ((s = (0, i.j_)(this.props.transform.translation)),
                (l = this.props.transform.rotation),
                (u = this.props.transform.scale))
              : ((s = (0, i.XI)(this.props.translation)
                  ? null === (e = (0, i.UM)(this.props.translation)) ||
                    void 0 === e
                    ? void 0
                    : e.join(" ")
                  : (0, i.j_)(
                      (0, i.Wi)(this.props.translation, { x: 0, y: 0, z: 0 }),
                    )),
                (l =
                  this.props.rotation && "w" in this.props.rotation
                    ? this.props.rotation
                    : (0, a.Fb)(
                        (0, a.tx)(
                          (0, i.Wi)(this.props.rotation, { x: 0, y: 0, z: 0 }),
                          Math.PI / 180,
                        ),
                      )),
                (u =
                  "number" == typeof this.props.scale
                    ? {
                        x: this.props.scale,
                        y: this.props.scale,
                        z: this.props.scale,
                      }
                    : (0, i.Wi)(this.props.scale, { x: 1, y: 1, z: 1 }))),
              null !=
                (null === (t = this.props) || void 0 === t
                  ? void 0
                  : t.parent_origin) &&
                (p =
                  o[
                    null === (r = this.props) || void 0 === r
                      ? void 0
                      : r.parent_origin
                  ]);
            let _ = (0, i.hi)(l),
              d = (0, i.j_)(u);
            return n.createElement(
              "vsg-transform",
              {
                translation: s,
                rotation: _,
                scale: d,
                "curvature-pitch": this.props.curvature_pitch,
                "invert-parent-panel-pitch":
                  this.props.invert_parent_panel_pitch,
                "ignore-parent-scale": this.props.ignore_parent_scale,
                "transform-path": this.props.transform_path,
                "parent-path": this.props.parent_path,
                "parent-origin": p,
                "parent-id": this.props.parent_id,
                "frame-resize-scale-factor":
                  this.props.frame_resize_scale_factor,
              },
              this.props.children,
            );
          }
        }
      },
      3725: (e, t, r) => {
        "use strict";
        var o, n, i, a;
        function s() {
          var e;
          return null !==
            (e =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.Environment()) && void 0 !== e
            ? e
            : o.Unknown;
        }
        r.d(t, {
          Ee: () => D,
          GQ: () => k,
          Gz: () => u,
          HW: () => g,
          Kl: () => y,
          MV: () => i,
          OH: () => o,
          R$: () => s,
          Xl: () => v,
          Yu: () => R,
          _1: () => F,
          _E: () => l,
          b: () => S,
          gN: () => C,
          k2: () => B,
          kG: () => I,
          ku: () => d,
          mo: () => h,
          mu: () => a,
          ne: () => p,
          pM: () => n,
          rx: () => P,
        }),
          (function (e) {
            (e[(e.Desktop = 1)] = "Desktop"),
              (e[(e.Overlay = 2)] = "Overlay"),
              (e[(e.Unknown = 100)] = "Unknown");
          })(o || (o = {})),
          window.hasOwnProperty("VRHTML") || (window.VRHTML = null),
          (function (e) {
            (e[(e.Auto = 0)] = "Auto"),
              (e[(e.Low = 1)] = "Low"),
              (e[(e.Medium = 2)] = "Medium"),
              (e[(e.High = 3)] = "High");
          })(n || (n = {})),
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
          })(i || (i = {})),
          (function (e) {
            (e[(e.Seated = 0)] = "Seated"),
              (e[(e.Standing = 1)] = "Standing"),
              (e[(e.RawAndUncalibrated = 2)] = "RawAndUncalibrated");
          })(a || (a = {}));
        let l = 0,
          u = 0,
          p = 4294967295;
        var _, d, c, h, m, g, f, v, S, y, D, R, C, I, b, B, P, M, F, w, k;
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
        })(_ || (_ = {})),
          (function (e) {
            (e[(e.Activated = 0)] = "Activated"),
              (e[(e.Deactivated = 1)] = "Deactivated");
          })(d || (d = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"), (e[(e.Mouse = 1)] = "Mouse");
          })(c || (c = {})),
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
          })(m || (m = {})),
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
          })(f || (f = {})),
          (function (e) {
            (e[(e.Normal = 0)] = "Normal"),
              (e[(e.Password = 1)] = "Password"),
              (e[(e.Submit = 2)] = "Submit");
          })(v || (v = {})),
          (function (e) {
            (e[(e.SingleLine = 0)] = "SingleLine"),
              (e[(e.MultipleLines = 1)] = "MultipleLines");
          })(S || (S = {})),
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
          })(y || (y = {})),
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
          })(D || (D = {})),
          (function (e) {
            (e[(e.ECameraExposure_Unknown = 0)] = "ECameraExposure_Unknown"),
              (e[(e.ECameraExposure_Nominal = 1)] = "ECameraExposure_Nominal"),
              (e[(e.ECameraExposure_HighExposure = 2)] =
                "ECameraExposure_HighExposure");
          })(R || (R = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.ThisSteamVR = 1)] = "ThisSteamVR"),
              (e[(e.AnotherSteamVR = 2)] = "AnotherSteamVR"),
              (e[(e.AnotherRuntime = 3)] = "AnotherRuntime"),
              (e[(e.Error = -1)] = "Error");
          })(C || (C = {})),
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
          })(I || (I = {})),
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
          })(b || (b = {})),
          (function (e) {
            e[(e.Hostname = 0)] = "Hostname";
          })(B || (B = {})),
          (function (e) {
            (e[(e.Unavailable = 0)] = "Unavailable"),
              (e[(e.Active = 1)] = "Active"),
              (e[(e.Off = 2)] = "Off");
          })(P || (P = {})),
          (function (e) {
            (e[(e.Default = 1)] = "Default"), (e[(e.Floor = 2)] = "Floor");
          })(M || (M = {})),
          (function (e) {
            (e[(e.Inactive = 0)] = "Inactive"),
              (e[(e.PendingReset = 1)] = "PendingReset"),
              (e[(e.PendingResetIfNeeded = 2)] = "PendingResetIfNeeded"),
              (e[(e.Default = 3)] = "Default"),
              (e[(e.CV = 4)] = "CV"),
              (e[(e.Manual = 5)] = "Manual");
          })(F || (F = {})),
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
          })(w || (w = {})),
          (function (e) {
            (e[(e.Small = 0)] = "Small"),
              (e[(e.Medium = 1)] = "Medium"),
              (e[(e.Large = 2)] = "Large"),
              (e[(e.Gigantic = 3)] = "Gigantic"),
              (e[(e.Standing = 4)] = "Standing");
          })(k || (k = {}));
      },
      4367: (e, t, r) => {
        "use strict";
        var o, n, i, a, s, l, u, p, _, d, c, h, m, g, f, v, S;
        r.d(t, {
          $: () => _,
          $Z: () => d,
          Do: () => S,
          Fz: () => v,
          JR: () => s,
          KI: () => p,
          QR: () => a,
          YV: () => g,
          ZP: () => f,
          en: () => i,
          eo: () => c,
          fD: () => o,
          fk: () => h,
          yW: () => m,
        }),
          (function (e) {
            (e[(e.Invalid = 0)] = "Invalid"),
              (e[(e.TrackingSystemName_String = 1e3)] =
                "TrackingSystemName_String"),
              (e[(e.ModelNumber_String = 1001)] = "ModelNumber_String"),
              (e[(e.SerialNumber_String = 1002)] = "SerialNumber_String"),
              (e[(e.RenderModelName_String = 1003)] = "RenderModelName_String"),
              (e[(e.WillDriftInYaw_Bool = 1004)] = "WillDriftInYaw_Bool"),
              (e[(e.ManufacturerName_String = 1005)] =
                "ManufacturerName_String"),
              (e[(e.TrackingFirmwareVersion_String = 1006)] =
                "TrackingFirmwareVersion_String"),
              (e[(e.HardwareRevision_String = 1007)] =
                "HardwareRevision_String"),
              (e[(e.AllWirelessDongleDescriptions_String = 1008)] =
                "AllWirelessDongleDescriptions_String"),
              (e[(e.ConnectedWirelessDongle_String = 1009)] =
                "ConnectedWirelessDongle_String"),
              (e[(e.DeviceIsWireless_Bool = 1010)] = "DeviceIsWireless_Bool"),
              (e[(e.DeviceIsCharging_Bool = 1011)] = "DeviceIsCharging_Bool"),
              (e[(e.DeviceBatteryPercentage_Float = 1012)] =
                "DeviceBatteryPercentage_Float"),
              (e[(e.StatusDisplayTransform_Matrix34 = 1013)] =
                "StatusDisplayTransform_Matrix34"),
              (e[(e.Firmware_UpdateAvailable_Bool = 1014)] =
                "Firmware_UpdateAvailable_Bool"),
              (e[(e.Firmware_ManualUpdate_Bool = 1015)] =
                "Firmware_ManualUpdate_Bool"),
              (e[(e.Firmware_ManualUpdateURL_String = 1016)] =
                "Firmware_ManualUpdateURL_String"),
              (e[(e.HardwareRevision_Uint64 = 1017)] =
                "HardwareRevision_Uint64"),
              (e[(e.FirmwareVersion_Uint64 = 1018)] = "FirmwareVersion_Uint64"),
              (e[(e.FPGAVersion_Uint64 = 1019)] = "FPGAVersion_Uint64"),
              (e[(e.VRCVersion_Uint64 = 1020)] = "VRCVersion_Uint64"),
              (e[(e.RadioVersion_Uint64 = 1021)] = "RadioVersion_Uint64"),
              (e[(e.DongleVersion_Uint64 = 1022)] = "DongleVersion_Uint64"),
              (e[(e.BlockServerShutdown_Bool = 1023)] =
                "BlockServerShutdown_Bool"),
              (e[(e.CanUnifyCoordinateSystemWithHmd_Bool = 1024)] =
                "CanUnifyCoordinateSystemWithHmd_Bool"),
              (e[(e.ContainsProximitySensor_Bool = 1025)] =
                "ContainsProximitySensor_Bool"),
              (e[(e.DeviceProvidesBatteryStatus_Bool = 1026)] =
                "DeviceProvidesBatteryStatus_Bool"),
              (e[(e.DeviceCanPowerOff_Bool = 1027)] = "DeviceCanPowerOff_Bool"),
              (e[(e.Firmware_ProgrammingTarget_String = 1028)] =
                "Firmware_ProgrammingTarget_String"),
              (e[(e.DeviceClass_Int32 = 1029)] = "DeviceClass_Int32"),
              (e[(e.HasCamera_Bool = 1030)] = "HasCamera_Bool"),
              (e[(e.DriverVersion_String = 1031)] = "DriverVersion_String"),
              (e[(e.Firmware_ForceUpdateRequired_Bool = 1032)] =
                "Firmware_ForceUpdateRequired_Bool"),
              (e[(e.ViveSystemButtonFixRequired_Bool = 1033)] =
                "ViveSystemButtonFixRequired_Bool"),
              (e[(e.ParentDriver_Uint64 = 1034)] = "ParentDriver_Uint64"),
              (e[(e.ResourceRoot_String = 1035)] = "ResourceRoot_String"),
              (e[(e.RegisteredDeviceType_String = 1036)] =
                "RegisteredDeviceType_String"),
              (e[(e.InputProfilePath_String = 1037)] =
                "InputProfilePath_String"),
              (e[(e.NeverTracked_Bool = 1038)] = "NeverTracked_Bool"),
              (e[(e.NumCameras_Int32 = 1039)] = "NumCameras_Int32"),
              (e[(e.CameraFrameLayout_Int32 = 1040)] =
                "CameraFrameLayout_Int32"),
              (e[(e.CameraStreamFormat_Int32 = 1041)] =
                "CameraStreamFormat_Int32"),
              (e[(e.AdditionalDeviceSettingsPath_String = 1042)] =
                "AdditionalDeviceSettingsPath_String"),
              (e[(e.DevicePowerUsage_Float = 1052)] = "DevicePowerUsage_Float"),
              (e[(e.ActualTrackingSystemName_String = 1054)] =
                "ActualTrackingSystemName_String"),
              (e[(e.AllowCameraToggle_Bool = 1055)] = "AllowCameraToggle_Bool"),
              (e[(e.AllowLightSourceFrequency_Bool = 1056)] =
                "AllowLightSourceFrequency_Bool"),
              (e[(e.IsDedicatedVRHeadset_Bool = 1058)] =
                "IsDedicatedVRHeadset_Bool"),
              (e[(e.HasEyeTracker_Bool = 1060)] = "HasEyeTracker_Bool"),
              (e[(e.ReportsTimeSinceVSync_Bool = 2e3)] =
                "ReportsTimeSinceVSync_Bool"),
              (e[(e.SecondsFromVsyncToPhotons_Float = 2001)] =
                "SecondsFromVsyncToPhotons_Float"),
              (e[(e.DisplayFrequency_Float = 2002)] = "DisplayFrequency_Float"),
              (e[(e.UserIpdMeters_Float = 2003)] = "UserIpdMeters_Float"),
              (e[(e.CurrentUniverseId_Uint64 = 2004)] =
                "CurrentUniverseId_Uint64"),
              (e[(e.PreviousUniverseId_Uint64 = 2005)] =
                "PreviousUniverseId_Uint64"),
              (e[(e.DisplayFirmwareVersion_Uint64 = 2006)] =
                "DisplayFirmwareVersion_Uint64"),
              (e[(e.IsOnDesktop_Bool = 2007)] = "IsOnDesktop_Bool"),
              (e[(e.DisplayMCType_Int32 = 2008)] = "DisplayMCType_Int32"),
              (e[(e.DisplayMCOffset_Float = 2009)] = "DisplayMCOffset_Float"),
              (e[(e.DisplayMCScale_Float = 2010)] = "DisplayMCScale_Float"),
              (e[(e.EdidVendorID_Int32 = 2011)] = "EdidVendorID_Int32"),
              (e[(e.DisplayMCImageLeft_String = 2012)] =
                "DisplayMCImageLeft_String"),
              (e[(e.DisplayMCImageRight_String = 2013)] =
                "DisplayMCImageRight_String"),
              (e[(e.DisplayGCBlackClamp_Float = 2014)] =
                "DisplayGCBlackClamp_Float"),
              (e[(e.EdidProductID_Int32 = 2015)] = "EdidProductID_Int32"),
              (e[(e.CameraToHeadTransform_Matrix34 = 2016)] =
                "CameraToHeadTransform_Matrix34"),
              (e[(e.DisplayGCType_Int32 = 2017)] = "DisplayGCType_Int32"),
              (e[(e.DisplayGCOffset_Float = 2018)] = "DisplayGCOffset_Float"),
              (e[(e.DisplayGCScale_Float = 2019)] = "DisplayGCScale_Float"),
              (e[(e.DisplayGCPrescale_Float = 2020)] =
                "DisplayGCPrescale_Float"),
              (e[(e.DisplayGCImage_String = 2021)] = "DisplayGCImage_String"),
              (e[(e.LensCenterLeftU_Float = 2022)] = "LensCenterLeftU_Float"),
              (e[(e.LensCenterLeftV_Float = 2023)] = "LensCenterLeftV_Float"),
              (e[(e.LensCenterRightU_Float = 2024)] = "LensCenterRightU_Float"),
              (e[(e.LensCenterRightV_Float = 2025)] = "LensCenterRightV_Float"),
              (e[(e.UserHeadToEyeDepthMeters_Float = 2026)] =
                "UserHeadToEyeDepthMeters_Float"),
              (e[(e.CameraFirmwareVersion_Uint64 = 2027)] =
                "CameraFirmwareVersion_Uint64"),
              (e[(e.CameraFirmwareDescription_String = 2028)] =
                "CameraFirmwareDescription_String"),
              (e[(e.DisplayFPGAVersion_Uint64 = 2029)] =
                "DisplayFPGAVersion_Uint64"),
              (e[(e.DisplayBootloaderVersion_Uint64 = 2030)] =
                "DisplayBootloaderVersion_Uint64"),
              (e[(e.DisplayHardwareVersion_Uint64 = 2031)] =
                "DisplayHardwareVersion_Uint64"),
              (e[(e.AudioFirmwareVersion_Uint64 = 2032)] =
                "AudioFirmwareVersion_Uint64"),
              (e[(e.CameraCompatibilityMode_Int32 = 2033)] =
                "CameraCompatibilityMode_Int32"),
              (e[(e.ScreenshotHorizontalFieldOfViewDegrees_Float = 2034)] =
                "ScreenshotHorizontalFieldOfViewDegrees_Float"),
              (e[(e.ScreenshotVerticalFieldOfViewDegrees_Float = 2035)] =
                "ScreenshotVerticalFieldOfViewDegrees_Float"),
              (e[(e.DisplaySuppressed_Bool = 2036)] = "DisplaySuppressed_Bool"),
              (e[(e.DisplayAllowNightMode_Bool = 2037)] =
                "DisplayAllowNightMode_Bool"),
              (e[(e.DisplayMCImageWidth_Int32 = 2038)] =
                "DisplayMCImageWidth_Int32"),
              (e[(e.DisplayMCImageHeight_Int32 = 2039)] =
                "DisplayMCImageHeight_Int32"),
              (e[(e.DisplayMCImageNumChannels_Int32 = 2040)] =
                "DisplayMCImageNumChannels_Int32"),
              (e[(e.DisplayMCImageData_Binary = 2041)] =
                "DisplayMCImageData_Binary"),
              (e[(e.SecondsFromPhotonsToVblank_Float = 2042)] =
                "SecondsFromPhotonsToVblank_Float"),
              (e[(e.DriverDirectModeSendsVsyncEvents_Bool = 2043)] =
                "DriverDirectModeSendsVsyncEvents_Bool"),
              (e[(e.DisplayDebugMode_Bool = 2044)] = "DisplayDebugMode_Bool"),
              (e[(e.GraphicsAdapterLuid_Uint64 = 2045)] =
                "GraphicsAdapterLuid_Uint64"),
              (e[(e.DriverProvidedChaperonePath_String = 2048)] =
                "DriverProvidedChaperonePath_String"),
              (e[(e.ExpectedTrackingReferenceCount_Int32 = 2049)] =
                "ExpectedTrackingReferenceCount_Int32"),
              (e[(e.ExpectedControllerCount_Int32 = 2050)] =
                "ExpectedControllerCount_Int32"),
              (e[(e.NamedIconPathControllerLeftDeviceOff_String = 2051)] =
                "NamedIconPathControllerLeftDeviceOff_String"),
              (e[(e.NamedIconPathControllerRightDeviceOff_String = 2052)] =
                "NamedIconPathControllerRightDeviceOff_String"),
              (e[(e.NamedIconPathTrackingReferenceDeviceOff_String = 2053)] =
                "NamedIconPathTrackingReferenceDeviceOff_String"),
              (e[(e.DoNotApplyPrediction_Bool = 2054)] =
                "DoNotApplyPrediction_Bool"),
              (e[(e.CameraToHeadTransforms_Matrix34_Array = 2055)] =
                "CameraToHeadTransforms_Matrix34_Array"),
              (e[(e.DistortionMeshResolution_Int32 = 2056)] =
                "DistortionMeshResolution_Int32"),
              (e[(e.DriverIsDrawingControllers_Bool = 2057)] =
                "DriverIsDrawingControllers_Bool"),
              (e[(e.DriverRequestsApplicationPause_Bool = 2058)] =
                "DriverRequestsApplicationPause_Bool"),
              (e[(e.DriverRequestsReducedRendering_Bool = 2059)] =
                "DriverRequestsReducedRendering_Bool"),
              (e[(e.MinimumIpdStepMeters_Float = 2060)] =
                "MinimumIpdStepMeters_Float"),
              (e[(e.AudioBridgeFirmwareVersion_Uint64 = 2061)] =
                "AudioBridgeFirmwareVersion_Uint64"),
              (e[(e.ImageBridgeFirmwareVersion_Uint64 = 2062)] =
                "ImageBridgeFirmwareVersion_Uint64"),
              (e[(e.ImuToHeadTransform_Matrix34 = 2063)] =
                "ImuToHeadTransform_Matrix34"),
              (e[(e.ImuFactoryGyroBias_Vector3 = 2064)] =
                "ImuFactoryGyroBias_Vector3"),
              (e[(e.ImuFactoryGyroScale_Vector3 = 2065)] =
                "ImuFactoryGyroScale_Vector3"),
              (e[(e.ImuFactoryAccelerometerBias_Vector3 = 2066)] =
                "ImuFactoryAccelerometerBias_Vector3"),
              (e[(e.ImuFactoryAccelerometerScale_Vector3 = 2067)] =
                "ImuFactoryAccelerometerScale_Vector3"),
              (e[(e.ConfigurationIncludesLighthouse20Features_Bool = 2069)] =
                "ConfigurationIncludesLighthouse20Features_Bool"),
              (e[(e.Prop_AdditionalRadioFeatures_Uint64 = 2070)] =
                "Prop_AdditionalRadioFeatures_Uint64"),
              (e[(e.Prop_CameraWhiteBalance_Vector4_Array = 2071)] =
                "Prop_CameraWhiteBalance_Vector4_Array"),
              (e[(e.Prop_CameraDistortionFunction_Int32_Array = 2072)] =
                "Prop_CameraDistortionFunction_Int32_Array"),
              (e[(e.Prop_CameraDistortionCoefficients_Float_Array = 2073)] =
                "Prop_CameraDistortionCoefficients_Float_Array"),
              (e[(e.Prop_ExpectedControllerType_String = 2074)] =
                "Prop_ExpectedControllerType_String"),
              (e[(e.HmdTrackingStyle_Int32 = 2075)] = "HmdTrackingStyle_Int32"),
              (e[(e.DriverProvidedChaperoneVisibility_Bool = 2076)] =
                "DriverProvidedChaperoneVisibility_Bool"),
              (e[(e.HmdColumnCorrectionSettingPrefix_String = 2077)] =
                "HmdColumnCorrectionSettingPrefix_String"),
              (e[(e.CameraSupportsCompatibilityModes_Bool = 2078)] =
                "CameraSupportsCompatibilityModes_Bool"),
              (e[(e.SupportsRoomViewDepthProjection_Bool = 2079)] =
                "SupportsRoomViewDepthProjection_Bool"),
              (e[(e.DisplayAvailableFrameRates_Float_Array = 2080)] =
                "DisplayAvailableFrameRates_Float_Array"),
              (e[(e.DisplaySupportsRuntimeFramerateChange_Bool = 2084)] =
                "DisplaySupportsRuntimeFramerateChange_Bool"),
              (e[(e.DisplaySupportsAnalogGain_Bool = 2085)] =
                "DisplaySupportsAnalogGain_Bool"),
              (e[(e.DisplayMinAnalogGain_Float = 2086)] =
                "DisplayMinAnalogGain_Float"),
              (e[(e.DisplayMaxAnalogGain_Float = 2087)] =
                "DisplayMaxAnalogGain_Float"),
              (e[(e.DashboardLinkSupport_Int32 = 2097)] =
                "DashboardLinkSupport_Int32"),
              (e[(e.DisplayMinUIAnalogGain_Float = 2098)] =
                "DisplayMinUIAnalogGain_Float"),
              (e[(e.DashboardScale_Float = 2091)] = "DashboardScale_Float"),
              (e[(e.IpdUIRangeMinMeters_Float = 2100)] =
                "IpdUIRangeMinMeters_Float"),
              (e[(e.IpdUIRangeMaxMeters_Float = 2101)] =
                "IpdUIRangeMaxMeters_Float"),
              (e[(e.Hmd_SupportsHDCP14LegacyCompat_Bool = 2102)] =
                "Hmd_SupportsHDCP14LegacyCompat_Bool"),
              (e[(e.Hmd_SupportsMicMonitoring_Bool = 2103)] =
                "Hmd_SupportsMicMonitoring_Bool"),
              (e[(e.Hmd_SupportsDisplayPortTrainingMode_Bool = 2104)] =
                "Hmd_SupportsDisplayPortTrainingMode_Bool"),
              (e[(e.Hmd_SupportsRoomViewDirect_Bool = 2105)] =
                "Hmd_SupportsRoomViewDirect_Bool"),
              (e[(e.Hmd_SupportsAppThrottling_Bool = 2106)] =
                "Hmd_SupportsAppThrottling_Bool"),
              (e[(e.Hmd_SupportsGpuBusMonitoring_Bool = 2107)] =
                "Hmd_SupportsGpuBusMonitoring_Bool"),
              (e[(e.DriverProvidedIPDVisibility_Bool = 2108)] =
                "DriverProvidedIPDVisibility_Bool"),
              (e[(e.Prop_SupportsVRGamepadMode_Bool = 2117)] =
                "Prop_SupportsVRGamepadMode_Bool"),
              (e[(e.DriverRequestedMuraCorrectionMode_Int32 = 2200)] =
                "DriverRequestedMuraCorrectionMode_Int32"),
              (e[(e.DriverRequestedMuraFeather_InnerLeft_Int32 = 2201)] =
                "DriverRequestedMuraFeather_InnerLeft_Int32"),
              (e[(e.DriverRequestedMuraFeather_InnerRight_Int32 = 2202)] =
                "DriverRequestedMuraFeather_InnerRight_Int32"),
              (e[(e.DriverRequestedMuraFeather_InnerTop_Int32 = 2203)] =
                "DriverRequestedMuraFeather_InnerTop_Int32"),
              (e[(e.DriverRequestedMuraFeather_InnerBottom_Int32 = 2204)] =
                "DriverRequestedMuraFeather_InnerBottom_Int32"),
              (e[(e.DriverRequestedMuraFeather_OuterLeft_Int32 = 2205)] =
                "DriverRequestedMuraFeather_OuterLeft_Int32"),
              (e[(e.DriverRequestedMuraFeather_OuterRight_Int32 = 2206)] =
                "DriverRequestedMuraFeather_OuterRight_Int32"),
              (e[(e.DriverRequestedMuraFeather_OuterTop_Int32 = 2207)] =
                "DriverRequestedMuraFeather_OuterTop_Int32"),
              (e[(e.DriverRequestedMuraFeather_OuterBottom_Int32 = 2208)] =
                "DriverRequestedMuraFeather_OuterBottom_Int32"),
              (e[(e.Audio_SupportsDualSpeakerAndJackOutput_Bool = 2303)] =
                "Audio_SupportsDualSpeakerAndJackOutput_Bool"),
              (e[(e.Hmd_ForceRoomViewOutsideChaperone_Bool = 2500)] =
                "Hmd_ForceRoomViewOutsideChaperone_Bool"),
              (e[(e.AttachedDeviceId_String = 3e3)] =
                "AttachedDeviceId_String"),
              (e[(e.SupportedButtons_Uint64 = 3001)] =
                "SupportedButtons_Uint64"),
              (e[(e.Axis0Type_Int32 = 3002)] = "Axis0Type_Int32"),
              (e[(e.Axis1Type_Int32 = 3003)] = "Axis1Type_Int32"),
              (e[(e.Axis2Type_Int32 = 3004)] = "Axis2Type_Int32"),
              (e[(e.Axis3Type_Int32 = 3005)] = "Axis3Type_Int32"),
              (e[(e.Axis4Type_Int32 = 3006)] = "Axis4Type_Int32"),
              (e[(e.ControllerRoleHint_Int32 = 3007)] =
                "ControllerRoleHint_Int32"),
              (e[(e.FieldOfViewLeftDegrees_Float = 4e3)] =
                "FieldOfViewLeftDegrees_Float"),
              (e[(e.FieldOfViewRightDegrees_Float = 4001)] =
                "FieldOfViewRightDegrees_Float"),
              (e[(e.FieldOfViewTopDegrees_Float = 4002)] =
                "FieldOfViewTopDegrees_Float"),
              (e[(e.FieldOfViewBottomDegrees_Float = 4003)] =
                "FieldOfViewBottomDegrees_Float"),
              (e[(e.TrackingRangeMinimumMeters_Float = 4004)] =
                "TrackingRangeMinimumMeters_Float"),
              (e[(e.TrackingRangeMaximumMeters_Float = 4005)] =
                "TrackingRangeMaximumMeters_Float"),
              (e[(e.ModeLabel_String = 4006)] = "ModeLabel_String"),
              (e[(e.IconPathName_String = 5e3)] = "IconPathName_String"),
              (e[(e.NamedIconPathDeviceOff_String = 5001)] =
                "NamedIconPathDeviceOff_String"),
              (e[(e.NamedIconPathDeviceSearching_String = 5002)] =
                "NamedIconPathDeviceSearching_String"),
              (e[(e.NamedIconPathDeviceSearchingAlert_String = 5003)] =
                "NamedIconPathDeviceSearchingAlert_String"),
              (e[(e.NamedIconPathDeviceReady_String = 5004)] =
                "NamedIconPathDeviceReady_String"),
              (e[(e.NamedIconPathDeviceReadyAlert_String = 5005)] =
                "NamedIconPathDeviceReadyAlert_String"),
              (e[(e.NamedIconPathDeviceNotReady_String = 5006)] =
                "NamedIconPathDeviceNotReady_String"),
              (e[(e.NamedIconPathDeviceStandby_String = 5007)] =
                "NamedIconPathDeviceStandby_String"),
              (e[(e.NamedIconPathDeviceAlertLow_String = 5008)] =
                "NamedIconPathDeviceAlertLow_String"),
              (e[(e.DisplayHiddenArea_Binary_Start = 5100)] =
                "DisplayHiddenArea_Binary_Start"),
              (e[(e.DisplayHiddenArea_Binary_End = 5150)] =
                "DisplayHiddenArea_Binary_End"),
              (e[(e.ParentContainer = 5151)] = "ParentContainer"),
              (e[(e.UserConfigPath_String = 6e3)] = "UserConfigPath_String"),
              (e[(e.InstallPath_String = 6001)] = "InstallPath_String"),
              (e[(e.HasDisplayComponent_Bool = 6002)] =
                "HasDisplayComponent_Bool"),
              (e[(e.HasControllerComponent_Bool = 6003)] =
                "HasControllerComponent_Bool"),
              (e[(e.HasCameraComponent_Bool = 6004)] =
                "HasCameraComponent_Bool"),
              (e[(e.HasDriverDirectModeComponent_Bool = 6005)] =
                "HasDriverDirectModeComponent_Bool"),
              (e[(e.HasVirtualDisplayComponent_Bool = 6006)] =
                "HasVirtualDisplayComponent_Bool"),
              (e[(e.HasSpatialAnchorsSupport_Bool = 6007)] =
                "HasSpatialAnchorsSupport_Bool"),
              (e[(e.ControllerType_String = 7e3)] = "ControllerType_String"),
              (e[(e.LegacyInputProfile_String = 7001)] =
                "LegacyInputProfile_String"),
              (e[(e.VendorSpecific_Reserved_Start = 1e4)] =
                "VendorSpecific_Reserved_Start"),
              (e[(e.VendorSpecific_Reserved_End = 10999)] =
                "VendorSpecific_Reserved_End"),
              (e[(e.SupportsInHMDRoomSetup_Bool = 11003)] =
                "SupportsInHMDRoomSetup_Bool"),
              (e[(e.VRLinkClientHMDSupportsRoomSetupRequests_Bool = 11004)] =
                "VRLinkClientHMDSupportsRoomSetupRequests_Bool"),
              (e[(e.TrackedDeviceProperty_Max = 1e6)] =
                "TrackedDeviceProperty_Max");
          })(o || (o = {})),
          (function (e) {
            (e[(e.k_EButton_System = 0)] = "k_EButton_System"),
              (e[(e.k_EButton_ApplicationMenu = 1)] =
                "k_EButton_ApplicationMenu"),
              (e[(e.k_EButton_Grip = 2)] = "k_EButton_Grip"),
              (e[(e.k_EButton_DPad_Left = 3)] = "k_EButton_DPad_Left"),
              (e[(e.k_EButton_DPad_Up = 4)] = "k_EButton_DPad_Up"),
              (e[(e.k_EButton_DPad_Right = 5)] = "k_EButton_DPad_Right"),
              (e[(e.k_EButton_DPad_Down = 6)] = "k_EButton_DPad_Down"),
              (e[(e.k_EButton_A = 7)] = "k_EButton_A"),
              (e[(e.k_EButton_ProximitySensor = 31)] =
                "k_EButton_ProximitySensor"),
              (e[(e.k_EButton_Axis0 = 32)] = "k_EButton_Axis0"),
              (e[(e.k_EButton_Axis1 = 33)] = "k_EButton_Axis1"),
              (e[(e.k_EButton_Axis2 = 34)] = "k_EButton_Axis2"),
              (e[(e.k_EButton_Axis3 = 35)] = "k_EButton_Axis3"),
              (e[(e.k_EButton_Axis4 = 36)] = "k_EButton_Axis4"),
              (e[(e.k_EButton_SteamVR_Touchpad = 32)] =
                "k_EButton_SteamVR_Touchpad"),
              (e[(e.k_EButton_SteamVR_Trigger = 33)] =
                "k_EButton_SteamVR_Trigger"),
              (e[(e.k_EButton_Dashboard_Back = 2)] =
                "k_EButton_Dashboard_Back"),
              (e[(e.k_EButton_IndexController_A = 2)] =
                "k_EButton_IndexController_A"),
              (e[(e.k_EButton_IndexController_B = 1)] =
                "k_EButton_IndexController_B"),
              (e[(e.k_EButton_IndexController_JoyStick = 35)] =
                "k_EButton_IndexController_JoyStick"),
              (e[(e.k_EButton_Reserved0 = 50)] = "k_EButton_Reserved0"),
              (e[(e.k_EButton_Reserved1 = 51)] = "k_EButton_Reserved1"),
              (e[(e.k_EButton_Max = 64)] = "k_EButton_Max");
          })(n || (n = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.ButtonEnter = 1)] = "ButtonEnter"),
              (e[(e.ButtonLeave = 2)] = "ButtonLeave"),
              (e[(e.Snap = 3)] = "Snap"),
              (e[(e.Sliding = 4)] = "Sliding"),
              (e[(e.SlidingEdge = 5)] = "SlidingEdge");
          })(i || (i = {})),
          (function (e) {
            (e[(e.Minimal = 1)] = "Minimal"),
              (e[(e.Modal = 2)] = "Modal"),
              (e[(e.ShowArrowKeys = 4)] = "ShowArrowKeys"),
              (e[(e.HideDoneKey = 8)] = "HideDoneKey");
          })(a || (a = {})),
          (function (e) {
            (e[(e.Unknown = -1)] = "Unknown"),
              (e[(e.Idle = 0)] = "Idle"),
              (e[(e.UserInteraction = 1)] = "UserInteraction"),
              (e[(e.UserInteraction_Timeout = 2)] = "UserInteraction_Timeout"),
              (e[(e.Standby = 3)] = "Standby"),
              (e[(e.Idle_Timeout = 4)] = "Idle_Timeout");
          })(s || (s = {})),
          (function (e) {
            (e[(e.VRMouseButton_Left = 1)] = "VRMouseButton_Left"),
              (e[(e.VRMouseButton_Right = 2)] = "VRMouseButton_Right"),
              (e[(e.VRMouseButton_Middle = 4)] = "VRMouseButton_Middle");
          })(l || (l = {})),
          (function (e) {
            (e[(e.Notification_Shown = 600)] = "Notification_Shown"),
              (e[(e.Notification_Hidden = 601)] = "Notification_Hidden"),
              (e[(e.Notification_BeginInteraction = 602)] =
                "Notification_BeginInteraction"),
              (e[(e.Notification_Destroyed = 603)] = "Notification_Destroyed");
          })(u || (u = {})),
          (function (e) {
            (e[(e.TheaterFast = 0)] = "TheaterFast"),
              (e[(e.TheaterSlow = 1)] = "TheaterSlow");
          })(p || (p = {})),
          (function (e) {
            (e[(e.Constant = 0)] = "Constant"),
              (e[(e.Nearest = 1)] = "Nearest"),
              (e[(e.Linear = 2)] = "Linear"),
              (e[(e.SmoothStep = 3)] = "SmoothStep"),
              (e[(e.SmootherStep = 4)] = "SmootherStep");
          })(_ || (_ = {})),
          (function (e) {
            (e[(e.Invalid = 0)] = "Invalid"),
              (e[(e.RecenterCountdown = 1)] = "RecenterCountdown"),
              (e[(e.FloorAdjustExisting = 2)] = "FloorAdjustExisting"),
              (e[(e.RoomSetupFloor = 3)] = "RoomSetupFloor"),
              (e[(e.ClearRoomSetup = 4)] = "ClearRoomSetup"),
              (e[(e.RoomSetupFull = 5)] = "RoomSetupFull");
          })(d || (d = {})),
          (function (e) {
            (e[(e.Near = 0)] = "Near"),
              (e[(e.Middle = 1)] = "Middle"),
              (e[(e.Far = 2)] = "Far"),
              (e[(e.VRGamepadUI = 3)] = "VRGamepadUI");
          })(c || (c = {})),
          (function (e) {
            (e[(e.__LocalSteamVR = 0)] = "__LocalSteamVR"),
              (e[(e.__LocalSteam = 1)] = "__LocalSteam"),
              (e[(e.__RemoteSteamVR = 2)] = "__RemoteSteamVR"),
              (e[(e.__RemoteSteam = 3)] = "__RemoteSteam"),
              (e[(e.MutualLocal = 4)] = "MutualLocal"),
              (e[(e.MutualSteamVR = 5)] = "MutualSteamVR"),
              (e[(e.MutualSteam = 6)] = "MutualSteam");
          })(h || (h = {})),
          (function (e) {
            (e[(e.Dashboard = 1)] = "Dashboard"),
              (e[(e.LeftHand = 2)] = "LeftHand"),
              (e[(e.RightHand = 3)] = "RightHand"),
              (e[(e.World = 4)] = "World"),
              (e[(e.Theater = 5)] = "Theater"),
              (e[(e.Boot = 6)] = "Boot");
          })(m || (m = {})),
          (function (e) {
            (e[(e.Invalid = 0)] = "Invalid"),
              (e[(e.SceneApp = 1)] = "SceneApp"),
              (e[(e.Panel = 2)] = "Panel");
          })(g || (g = {})),
          (function (e) {
            (e[(e.ControllerPairing = 0)] = "ControllerPairing"),
              (e[(e.WelcomeToSteamFrame = 1)] = "WelcomeToSteamFrame"),
              (e[(e.SystemButtonHideDashboard = 2)] =
                "SystemButtonHideDashboard"),
              (e[(e.SystemButtonDashboardHidden = 3)] =
                "SystemButtonDashboardHidden"),
              (e[(e.SystemButtonShowDashboard = 4)] =
                "SystemButtonShowDashboard"),
              (e[(e.PairWifiDongle = 5)] = "PairWifiDongle"),
              (e[(e.TourSendOff = 6)] = "TourSendOff"),
              (e[(e.SteamGuidedTourFinished = 7)] = "SteamGuidedTourFinished");
          })(f || (f = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.ThirdPartyClient = 1)] = "ThirdPartyClient"),
              (e[(e.SteamVRClientUnified = 2)] = "SteamVRClientUnified"),
              (e[(e.SteamVRClientLegacyDual = 3)] = "SteamVRClientLegacyDual");
          })(v || (v = {})),
          (function (e) {
            (e[(e.Curved = 0)] = "Curved"), (e[(e.Flat = 1)] = "Flat");
          })(S || (S = {}));
      },
      8803: (e, t, r) => {
        "use strict";
        r.d(t, { ZW: () => _, m0: () => p });
        var o = r(1635),
          n = r(7813),
          i = r(3236),
          a = r(3676);
        const s = new Map(),
          l = new Map();
        (window.protoPathProperties = l), (window.protoPathPropertyDebug = !1);
        class u {
          constructor() {
            (this.m_bIsSystemUI = !1), (0, n.makeObservable)(this);
          }
          Init(e) {
            return (0, o.sH)(this, void 0, void 0, function* () {
              (this.m_bIsSystemUI = e),
                (0, n.reaction)(
                  () => a.m.connected,
                  (e, t) => {
                    t && !e && this.OnDisconnectedFromSteam();
                  },
                );
            });
          }
          OnDisconnectedFromSteam() {
            var e;
            if (this.m_bIsSystemUI)
              for (const t of null !== (e = window.VRPathProperties) &&
              void 0 !== e
                ? e
                : [])
                t.shouldUnsetVRPathPropertyOnSteamClose() &&
                  (null === VRHTML ||
                    void 0 === VRHTML ||
                    VRHTML.VRPathProperties.SetStringPathProperty(
                      t.getVRPathPropertyKey(),
                      "",
                    ));
          }
        }
        (0, o.Cg)([i.o], u.prototype, "OnDisconnectedFromSteam", null);
        const p = new u();
        function _(e) {
          let t;
          try {
            t = e.getVRPathPropertyKey();
            const r = e.serializeBase64String(),
              o = s.get(t);
            if (o && o == r) return;
            s.set(t, r),
              window.protoPathPropertyDebug && l.set(t, e.toObject()),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRPathProperties.SetStringPathProperty(t, r);
          } catch (e) {
            throw e;
          }
        }
        window.pathPropertyStore = p;
      },
      6185: (e, t, r) => {
        "use strict";
        r.d(t, { l: () => i });
        var o = r(6540);
        let n = 0;
        function i() {
          const e = o.useRef(void 0);
          return (
            void 0 === e.current && (e.current = "svgid_" + n++),
            [e.current, `url(#${e.current})`]
          );
        }
      },
      292: (e, t, r) => {
        "use strict";
        var o = r(1635),
          n = r(6540),
          i = r(5338),
          a = r(6090),
          s = r(3714),
          l = r(1333),
          u = r(9118),
          p = r(1532),
          _ = r(5802),
          d = r(6646),
          c = r(6663),
          h = r(1835),
          m = r(4007),
          g = r(7813),
          f = r(9125),
          v = r(6379),
          S = r(9926),
          y = r(8803);
        (0, g.configure)({ enforceActions: "never" }),
          (function () {
            (0, o.sH)(this, void 0, void 0, function* () {
              try {
                yield Promise.all([
                  (0, s.uV)(
                    ["vrmonitor", "bindingui"],
                    null === a.Ay || void 0 === a.Ay
                      ? void 0
                      : a.Ay.GetSteamLanguage(),
                  ),
                  l.HR.Init(!0),
                  u.W.Init(!0),
                  _.B$.Init(),
                  p.s.Init(),
                  d.X.Init(),
                ]),
                  yield Promise.all([
                    y.m0.Init(!1),
                    m.Q.Init(),
                    h.SW.Init(),
                    v.c.Init(),
                  ]),
                  yield Promise.all([S.Mg.Init(!1)]);
              } catch (e) {
                console.error("Failed to initialize desktop settings:", e);
              }
              (0, f.aj)().Init("SteamVR", CLSTAMP, (0, f.d4)()),
                (document.title = (0, s.we)("#Settings_Header_SteamVR")),
                i
                  .H(document.getElementById("root"))
                  .render(n.createElement(c.z, { env: "desktop-window" }));
            });
          })();
      },
      9888: (e, t, r) => {
        "use strict";
        e.exports = r(8493);
      },
    },
    r = {};
  function o(e) {
    var n = r[e];
    if (void 0 !== n) return n.exports;
    var i = (r[e] = { exports: {} });
    return t[e].call(i.exports, i, i.exports, o), i.exports;
  }
  (o.m = t),
    (e = []),
    (o.O = (t, r, n, i) => {
      if (!r) {
        var a = 1 / 0;
        for (p = 0; p < e.length; p++) {
          for (var [r, n, i] = e[p], s = !0, l = 0; l < r.length; l++)
            (!1 & i || a >= i) && Object.keys(o.O).every((e) => o.O[e](r[l]))
              ? r.splice(l--, 1)
              : ((s = !1), i < a && (a = i));
          if (s) {
            e.splice(p--, 1);
            var u = n();
            void 0 !== u && (t = u);
          }
        }
        return t;
      }
      i = i || 0;
      for (var p = e.length; p > 0 && e[p - 1][2] > i; p--) e[p] = e[p - 1];
      e[p] = [r, n, i];
    }),
    (o.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return o.d(t, { a: t }), t;
    }),
    (o.d = (e, t) => {
      for (var r in t)
        o.o(t, r) &&
          !o.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (o.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (o.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e = { 249: 0, 198: 0, 527: 0, 17: 0 };
      o.O.j = (t) => 0 === e[t];
      var t = (t, r) => {
          var n,
            i,
            [a, s, l] = r,
            u = 0;
          if (a.some((t) => 0 !== e[t])) {
            for (n in s) o.o(s, n) && (o.m[n] = s[n]);
            if (l) var p = l(o);
          }
          for (t && t(r); u < a.length; u++)
            (i = a[u]), o.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
          return o.O(p);
        },
        r = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var n = o.O(
    void 0,
    [967, 978, 352, 705, 948, 305, 527, 797, 554, 743, 366, 386, 17],
    () => o(292),
  );
  n = o.O(n);
})(); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/settings_desktop.js.map
