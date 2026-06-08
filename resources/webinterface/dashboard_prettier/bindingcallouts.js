var CLSTAMP = "10715262";
(() => {
  "use strict";
  var t,
    e = {
      9712: (t, e, o) => {
        o.d(e, { n: () => r });
        var n = o(4452);
        function r(t) {
          var e = t.children,
            o = t.render;
          e &&
            o &&
            console.error(
              "MobX Observer: Do not use children and render in the same time in `Observer`",
            );
          var r = e || o;
          return "function" != typeof r ? null : (0, n.q)(r);
        }
        r.displayName = "Observer";
      },
      3542: (t, e, o) => {
        o.d(e, { W: () => i });
        var n = o(7813),
          r = o(6540);
        function i(t) {
          var e = (0, r.useState)(function () {
            return (0, n.observable)(t, {}, { deep: !1 });
          })[0];
          return (
            (0, n.runInAction)(function () {
              Object.assign(e, t);
            }),
            e
          );
        }
      },
      5562: (t, e, o) => {
        o.d(e, { i: () => i });
        var n = o(7813),
          r = o(6540);
        function i(t, e) {
          return (0, r.useState)(function () {
            return (0, n.observable)(t(), e, { autoBind: !0 });
          })[0];
        }
      },
      1154: (t, e, o) => {
        o.d(e, { W: () => s });
        var n = o(7813),
          r = o(6540),
          i = o(3542);
        function s(t, e) {
          var o = e && (0, i.W)(e);
          return (0, r.useState)(function () {
            return (0, n.observable)(t(o), void 0, { autoBind: !0 });
          })[0];
        }
      },
      4452: (t, e, o) => {
        o.d(e, { q: () => c });
        var n = o(7813),
          r = o(6540),
          i = o(6356),
          s = o(3815),
          a = o(3438),
          l = o(9888);
        function u(t) {
          t.reaction = new n.Reaction("observer".concat(t.name), function () {
            var e;
            (t.stateVersion = Symbol()),
              null === (e = t.onStoreChange) || void 0 === e || e.call(t);
          });
        }
        function c(t, e) {
          if ((void 0 === e && (e = "observed"), (0, s.P)())) return t();
          var o = r.useRef(null);
          if (!o.current) {
            var n = {
              reaction: null,
              onStoreChange: null,
              stateVersion: Symbol(),
              name: e,
              subscribe: function (t) {
                return (
                  a.Y.unregister(n),
                  (n.onStoreChange = t),
                  n.reaction || (u(n), (n.stateVersion = Symbol())),
                  function () {
                    var t;
                    (n.onStoreChange = null),
                      null === (t = n.reaction) || void 0 === t || t.dispose(),
                      (n.reaction = null);
                  }
                );
              },
              getSnapshot: function () {
                return n.stateVersion;
              },
            };
            o.current = n;
          }
          var c,
            p,
            d = o.current;
          if (
            (d.reaction || (u(d), a.Y.register(o, d, d)),
            r.useDebugValue(d.reaction, i.E),
            (0, l.useSyncExternalStore)(
              d.subscribe,
              d.getSnapshot,
              d.getSnapshot,
            ),
            d.reaction.track(function () {
              try {
                c = t();
              } catch (t) {
                p = t;
              }
            }),
            p)
          )
            throw p;
          return c;
        }
      },
      3438: (t, e, o) => {
        o.d(e, { Y: () => n });
        var n = new (o(2517).Xr)(function (t) {
          var e;
          null === (e = t.reaction) || void 0 === e || e.dispose(),
            (t.reaction = null);
        });
      },
      5287: (t, e) => {
        var o = Symbol.for("react.element"),
          n = Symbol.for("react.portal"),
          r = Symbol.for("react.fragment"),
          i = Symbol.for("react.strict_mode"),
          s = Symbol.for("react.profiler"),
          a = Symbol.for("react.provider"),
          l = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          p = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          h = Symbol.iterator;
        var f = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          _ = {};
        function v(t, e, o) {
          (this.props = t),
            (this.context = e),
            (this.refs = _),
            (this.updater = o || f);
        }
        function g() {}
        function y(t, e, o) {
          (this.props = t),
            (this.context = e),
            (this.refs = _),
            (this.updater = o || f);
        }
        (v.prototype.isReactComponent = {}),
          (v.prototype.setState = function (t, e) {
            if ("object" != typeof t && "function" != typeof t && null != t)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
              );
            this.updater.enqueueSetState(this, t, e, "setState");
          }),
          (v.prototype.forceUpdate = function (t) {
            this.updater.enqueueForceUpdate(this, t, "forceUpdate");
          }),
          (g.prototype = v.prototype);
        var b = (y.prototype = new g());
        (b.constructor = y), m(b, v.prototype), (b.isPureReactComponent = !0);
        var C = Array.isArray,
          S = Object.prototype.hasOwnProperty,
          R = { current: null },
          k = { key: !0, ref: !0, __self: !0, __source: !0 };
        function w(t, e, n) {
          var r,
            i = {},
            s = null,
            a = null;
          if (null != e)
            for (r in (void 0 !== e.ref && (a = e.ref),
            void 0 !== e.key && (s = "" + e.key),
            e))
              S.call(e, r) && !k.hasOwnProperty(r) && (i[r] = e[r]);
          var l = arguments.length - 2;
          if (1 === l) i.children = n;
          else if (1 < l) {
            for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
            i.children = u;
          }
          if (t && t.defaultProps)
            for (r in (l = t.defaultProps)) void 0 === i[r] && (i[r] = l[r]);
          return {
            $$typeof: o,
            type: t,
            key: s,
            ref: a,
            props: i,
            _owner: R.current,
          };
        }
        function O(t) {
          return "object" == typeof t && null !== t && t.$$typeof === o;
        }
        var N = /\/+/g;
        function T(t, e) {
          return "object" == typeof t && null !== t && null != t.key
            ? (function (t) {
                var e = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  t.replace(/[=:]/g, function (t) {
                    return e[t];
                  })
                );
              })("" + t.key)
            : e.toString(36);
        }
        function x(t, e, r, i, s) {
          var a = typeof t;
          ("undefined" !== a && "boolean" !== a) || (t = null);
          var l = !1;
          if (null === t) l = !0;
          else
            switch (a) {
              case "string":
              case "number":
                l = !0;
                break;
              case "object":
                switch (t.$$typeof) {
                  case o:
                  case n:
                    l = !0;
                }
            }
          if (l)
            return (
              (s = s((l = t))),
              (t = "" === i ? "." + T(l, 0) : i),
              C(s)
                ? ((r = ""),
                  null != t && (r = t.replace(N, "$&/") + "/"),
                  x(s, e, r, "", function (t) {
                    return t;
                  }))
                : null != s &&
                  (O(s) &&
                    (s = (function (t, e) {
                      return {
                        $$typeof: o,
                        type: t.type,
                        key: e,
                        ref: t.ref,
                        props: t.props,
                        _owner: t._owner,
                      };
                    })(
                      s,
                      r +
                        (!s.key || (l && l.key === s.key)
                          ? ""
                          : ("" + s.key).replace(N, "$&/") + "/") +
                        t,
                    )),
                  e.push(s)),
              1
            );
          if (((l = 0), (i = "" === i ? "." : i + ":"), C(t)))
            for (var u = 0; u < t.length; u++) {
              var c = i + T((a = t[u]), u);
              l += x(a, e, r, c, s);
            }
          else if (
            ((c = (function (t) {
              return null === t || "object" != typeof t
                ? null
                : "function" == typeof (t = (h && t[h]) || t["@@iterator"])
                  ? t
                  : null;
            })(t)),
            "function" == typeof c)
          )
            for (t = c.call(t), u = 0; !(a = t.next()).done; )
              l += x((a = a.value), e, r, (c = i + T(a, u++)), s);
          else if ("object" === a)
            throw (
              ((e = String(t)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === e
                    ? "object with keys {" + Object.keys(t).join(", ") + "}"
                    : e) +
                  "). If you meant to render a collection of children, use an array instead.",
              ))
            );
          return l;
        }
        function E(t, e, o) {
          if (null == t) return t;
          var n = [],
            r = 0;
          return (
            x(t, n, "", "", function (t) {
              return e.call(o, t, r++);
            }),
            n
          );
        }
        function P(t) {
          if (-1 === t._status) {
            var e = t._result;
            (e = e()).then(
              function (e) {
                (0 !== t._status && -1 !== t._status) ||
                  ((t._status = 1), (t._result = e));
              },
              function (e) {
                (0 !== t._status && -1 !== t._status) ||
                  ((t._status = 2), (t._result = e));
              },
            ),
              -1 === t._status && ((t._status = 0), (t._result = e));
          }
          if (1 === t._status) return t._result.default;
          throw t._result;
        }
        var A = { current: null },
          M = { transition: null },
          I = {
            ReactCurrentDispatcher: A,
            ReactCurrentBatchConfig: M,
            ReactCurrentOwner: R,
          };
        function V() {
          throw Error(
            "act(...) is not supported in production builds of React.",
          );
        }
        (e.Children = {
          map: E,
          forEach: function (t, e, o) {
            E(
              t,
              function () {
                e.apply(this, arguments);
              },
              o,
            );
          },
          count: function (t) {
            var e = 0;
            return (
              E(t, function () {
                e++;
              }),
              e
            );
          },
          toArray: function (t) {
            return (
              E(t, function (t) {
                return t;
              }) || []
            );
          },
          only: function (t) {
            if (!O(t))
              throw Error(
                "React.Children.only expected to receive a single React element child.",
              );
            return t;
          },
        }),
          (e.Component = v),
          (e.Fragment = r),
          (e.Profiler = s),
          (e.PureComponent = y),
          (e.StrictMode = i),
          (e.Suspense = c),
          (e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I),
          (e.act = V),
          (e.cloneElement = function (t, e, n) {
            if (null == t)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  t +
                  ".",
              );
            var r = m({}, t.props),
              i = t.key,
              s = t.ref,
              a = t._owner;
            if (null != e) {
              if (
                (void 0 !== e.ref && ((s = e.ref), (a = R.current)),
                void 0 !== e.key && (i = "" + e.key),
                t.type && t.type.defaultProps)
              )
                var l = t.type.defaultProps;
              for (u in e)
                S.call(e, u) &&
                  !k.hasOwnProperty(u) &&
                  (r[u] = void 0 === e[u] && void 0 !== l ? l[u] : e[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) r.children = n;
            else if (1 < u) {
              l = Array(u);
              for (var c = 0; c < u; c++) l[c] = arguments[c + 2];
              r.children = l;
            }
            return {
              $$typeof: o,
              type: t.type,
              key: i,
              ref: s,
              props: r,
              _owner: a,
            };
          }),
          (e.createContext = function (t) {
            return (
              ((t = {
                $$typeof: l,
                _currentValue: t,
                _currentValue2: t,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: a, _context: t }),
              (t.Consumer = t)
            );
          }),
          (e.createElement = w),
          (e.createFactory = function (t) {
            var e = w.bind(null, t);
            return (e.type = t), e;
          }),
          (e.createRef = function () {
            return { current: null };
          }),
          (e.forwardRef = function (t) {
            return { $$typeof: u, render: t };
          }),
          (e.isValidElement = O),
          (e.lazy = function (t) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: t },
              _init: P,
            };
          }),
          (e.memo = function (t, e) {
            return { $$typeof: p, type: t, compare: void 0 === e ? null : e };
          }),
          (e.startTransition = function (t) {
            var e = M.transition;
            M.transition = {};
            try {
              t();
            } finally {
              M.transition = e;
            }
          }),
          (e.unstable_act = V),
          (e.useCallback = function (t, e) {
            return A.current.useCallback(t, e);
          }),
          (e.useContext = function (t) {
            return A.current.useContext(t);
          }),
          (e.useDebugValue = function () {}),
          (e.useDeferredValue = function (t) {
            return A.current.useDeferredValue(t);
          }),
          (e.useEffect = function (t, e) {
            return A.current.useEffect(t, e);
          }),
          (e.useId = function () {
            return A.current.useId();
          }),
          (e.useImperativeHandle = function (t, e, o) {
            return A.current.useImperativeHandle(t, e, o);
          }),
          (e.useInsertionEffect = function (t, e) {
            return A.current.useInsertionEffect(t, e);
          }),
          (e.useLayoutEffect = function (t, e) {
            return A.current.useLayoutEffect(t, e);
          }),
          (e.useMemo = function (t, e) {
            return A.current.useMemo(t, e);
          }),
          (e.useReducer = function (t, e, o) {
            return A.current.useReducer(t, e, o);
          }),
          (e.useRef = function (t) {
            return A.current.useRef(t);
          }),
          (e.useState = function (t) {
            return A.current.useState(t);
          }),
          (e.useSyncExternalStore = function (t, e, o) {
            return A.current.useSyncExternalStore(t, e, o);
          }),
          (e.useTransition = function () {
            return A.current.useTransition();
          }),
          (e.version = "18.3.1");
      },
      6090: (t, e, o) => {
        o.d(e, {
          $: () => x.$,
          $Z: () => x.$Z,
          Ay: () => E,
          CU: () => r.CU,
          Ci: () => _.C,
          Do: () => x.Do,
          Ee: () => T.Ee,
          Em: () => c.Em,
          FN: () => y.F,
          Fb: () => r.Fb,
          Fi: () => v.Fi,
          Fz: () => x.Fz,
          GM: () => p.GM,
          GQ: () => T.GQ,
          GS: () => n.GS,
          Gz: () => T.Gz,
          HW: () => T.HW,
          I0: () => n.I0,
          IS: () => l.I,
          JZ: () => r.JZ,
          Jv: () => n.Jv,
          KI: () => x.KI,
          Kl: () => T.Kl,
          Ld: () => r.Ld,
          M9: () => n.M9,
          MQ: () => v.MQ,
          MV: () => T.MV,
          N: () => s.e,
          N1: () => m.N,
          NH: () => r.NH,
          Nu: () => C.N,
          O5: () => d.O,
          O6: () => r.O6,
          OH: () => T.OH,
          Oi: () => v.Oi,
          QB: () => r.QB,
          QR: () => x.QR,
          R$: () => T.R$,
          Rk: () => T.Rk,
          Se: () => r.Se,
          Uj: () => r.Uj,
          Vh: () => h.Vh,
          Wi: () => p.Wi,
          Wq: () => n.Wq,
          Xl: () => T.Xl,
          Xu: () => n.Xu,
          Y4: () => a.Y,
          YV: () => x.YV,
          Yu: () => T.Yu,
          ZP: () => x.ZP,
          Zk: () => v.Zk,
          _1: () => T._1,
          _h: () => v._h,
          _n: () => n._n,
          aX: () => h.aX,
          b: () => T.b,
          b$: () => w.b,
          b4: () => g.b,
          cB: () => k.L,
          dL: () => u.d,
          e_: () => r.e_,
          en: () => x.en,
          eo: () => x.eo,
          fD: () => x.fD,
          fk: () => x.fk,
          gN: () => T.gN,
          k2: () => T.k2,
          kG: () => T.kG,
          ku: () => T.ku,
          lq: () => f.l,
          m$: () => g.m,
          mH: () => h.mH,
          mS: () => b.m,
          mX: () => n.mX,
          mo: () => T.mo,
          mu: () => T.mu,
          nX: () => c.nX,
          ne: () => T.ne,
          nq: () => R.n,
          o3: () => v.o3,
          oN: () => r.oN,
          pM: () => T.pM,
          pg: () => n.pg,
          q5: () => r.q5,
          qF: () => r.qF,
          rF: () => l.H,
          rx: () => T.rx,
          sJ: () => S.$,
          sn: () => n.sn,
          t$: () => N.t,
          tx: () => r.tx,
          uC: () => O.u,
          uS: () => i.u,
          vx: () => r.vx,
          xO: () => v.xO,
          yW: () => x.yW,
        });
        var n = o(2824),
          r = o(6292),
          i = o(119),
          s = (o(4120), o(1230)),
          a = o(5830),
          l = o(6186),
          u = o(3361),
          c = (o(111), o(5723)),
          p = o(3496),
          d = o(5178),
          h = (o(428), o(9011), o(7350)),
          f = o(6847),
          m = o(5227),
          _ = (o(10), o(1808)),
          v = o(7019),
          g = (o(1988), o(2527), o(9864)),
          y = o(4189),
          b = o(322),
          C = o(1977),
          S = o(6417),
          R = o(2303),
          k = o(8715),
          w = (o(4397), o(5459)),
          O = o(8472),
          N = (o(1184), o(1321)),
          T = o(3725),
          x = o(4367);
        const E = VRHTML;
      },
      1977: (t, e, o) => {
        o.d(e, { N: () => i });
        var n = o(6540),
          r = o(3496);
        class i extends r._J {
          constructor(t) {
            super(t);
          }
          internalRender() {
            return n.createElement(
              "vsg-callout-transform",
              { offset: (0, r.j_)(this.props.vOffset) },
              this.props.children,
            );
          }
        }
      },
      322: (t, e, o) => {
        o.d(e, { m: () => s });
        var n = o(6540),
          r = o(4367),
          i = o(3361);
        class s extends n.Component {
          constructor(t) {
            super(t);
            let e = {};
            if (VRHTML)
              try {
                let t = VRHTML.VRProperties.GetStringProperty(
                  this.props.sDevicePath,
                  r.fD.RenderModelName_String,
                );
                if (t) {
                  let o =
                    VRHTML.VRRenderModelsInternal.FindComponentForInputSource(
                      t,
                      this.props.sInputPath,
                    );
                  if (o) {
                    let n =
                      VRHTML.VRRenderModels.GetComponentStateForDevicePath(
                        t,
                        o,
                        this.props.sDevicePath,
                      );
                    n && (e.xfTransform = n.xfTrackingToComponentLocal);
                  }
                }
              } catch (t) {
                console.log(
                  "Component transform invalid for ",
                  this.props.sDevicePath,
                );
              }
            this.state = e;
          }
          render() {
            return n.createElement(
              i.d,
              {
                id: this.props.id,
                parent_path: this.props.sDevicePath,
                transform: this.state.xfTransform,
              },
              this.props.children,
            );
          }
        }
      },
      1184: (t, e, o) => {
        var n,
          r = o(1635),
          i = o(3496),
          s = o(3236);
        !(function (t) {
          (t[(t.Disabled = 0)] = "Disabled"),
            (t[(t.WorldZeroY = 1)] = "WorldZeroY"),
            (t[(t.WorldDynamicFloor = 2)] = "WorldDynamicFloor");
        })(n || (n = {}));
        class a extends i._J {
          constructor(t) {
            super(t), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "constraint";
          }
          buildNode(t, e) {
            const o = this.createSgNode(e);
            return (
              (o.properties["projection-constraint"] =
                this.props.projection_constraint),
              [t, o]
            );
          }
        }
        (0, r.Cg)([s.o], a.prototype, "buildNode", null);
      },
      4120: (t, e, o) => {
        var n,
          r = o(1635),
          i = o(3496),
          s = o(3236);
        !(function (t) {
          (t[(t.RoomSetupFloor = 1)] = "RoomSetupFloor"),
            (t[(t.Locomotion = 2)] = "Locomotion"),
            (t[(t.QuickRecenter = 4)] = "QuickRecenter");
        })(n || (n = {}));
        class a extends i._J {
          constructor(t) {
            super(t), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "constructglobals";
          }
          buildNode(t, e) {
            const o = this.createSgNode(e);
            return (
              (o.properties["scene-color-mult"] = (0, i.kJ)(
                this.props["scene-color-mult"],
              )),
              (o.properties["floor-color-mult"] = (0, i.kJ)(
                this.props["floor-color-mult"],
              )),
              (o.properties["scene-reflection-mult"] = (0, i.kJ)(
                this.props["scene-reflection-mult"],
              )),
              (o.properties["skydome-mult"] = (0, i.kJ)(
                this.props["skydome-mult"],
              )),
              (o.properties["aurora-blur"] = (0, i.kJ)(
                this.props["aurora-blur"],
              )),
              (o.properties["roomview-mult"] = (0, i.UM)(
                this.props["roomview-mult"],
              )),
              (o.properties["allowed-action-sets"] = this.props[
                "allowed-action-sets"
              ].reduce((t, e) => t | e, 0)),
              (o.properties["inhibit-bounds-rendering"] =
                this.props["inhibit-bounds-rendering"]),
              (o.properties["pause-notifications"] =
                this.props["pause-notifications"]),
              (o.properties["roomview-enable-override"] =
                this.props["roomview-enable-override"]),
              (o.properties["systemlayer-msaa-enable-override"] =
                this.props["systemlayer-msaa-enable-override"]),
              (o.properties["construct-alpha-override"] =
                this.props["construct-alpha-override"]),
              [t, o]
            );
          }
        }
        (0, r.Cg)([s.o], a.prototype, "buildNode", null);
      },
      9864: (t, e, o) => {
        o.d(e, { b: () => n, m: () => s });
        var n,
          r = o(6540),
          i = o(3496);
        !(function (t) {
          (t[(t.Parent = 0)] = "Parent"), (t[(t.World = 1)] = "World");
        })(n || (n = {}));
        class s extends i._J {
          constructor(t) {
            super(t);
          }
          internalRender() {
            var t;
            const e = null === (t = this.props.enabled) || void 0 === t || t,
              o = this.props.rotation_start_angle_threshold
                ? (this.props.rotation_start_angle_threshold * Math.PI) / 180
                : null,
              n = this.props.rotation_stop_angle_threshold
                ? (this.props.rotation_stop_angle_threshold * Math.PI) / 180
                : null,
              i = this.props.rotation_ease_out_angle_threshold
                ? (this.props.rotation_ease_out_angle_threshold * Math.PI) / 180
                : null,
              s = this.props.rotation_min_angular_velocity
                ? (this.props.rotation_min_angular_velocity * Math.PI) / 180
                : null,
              a = this.props.rotation_max_angular_velocity
                ? (this.props.rotation_max_angular_velocity * Math.PI) / 180
                : null;
            return r.createElement(
              "vsg-elastic-head-transform",
              {
                "rotation-start-angle-threshold": o,
                "rotation-stop-angle-threshold": n,
                "rotation-ease-in-time": this.props.rotation_ease_in_time,
                "rotation-ease-in-power": this.props.rotation_ease_in_power,
                "rotation-ease-out-angle-threshold": i,
                "rotation-ease-out-power": this.props.rotation_ease_out_power,
                "rotation-min-angular-velocity": s,
                "rotation-max-angular-velocity": a,
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
                enabled: e,
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
      4189: (t, e, o) => {
        o.d(e, { F: () => s });
        var n = o(1635),
          r = o(3496),
          i = o(3236);
        class s extends r._J {
          constructor(t) {
            super(t), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "head-facing-transform";
          }
          buildNode(t, e) {
            var o;
            const n = this.createSgNode(e);
            return (
              (n.properties.up =
                null !== (o = this.props.up) && void 0 !== o ? o : "world"),
              [t, n]
            );
          }
        }
        (0, n.Cg)([i.o], s.prototype, "buildNode", null);
      },
      5227: (t, e, o) => {
        o.d(e, { N: () => i });
        var n = o(6540),
          r = o(3496);
        class i extends r._J {
          constructor(t) {
            super(t);
          }
          internalRender() {
            return n.createElement("vsg-line", {
              "target-id": this.props.target_id,
              thickness: this.props.thickness,
              "start-buffer": this.props.start_buffer,
              "end-buffer": this.props.end_buffer,
            });
          }
        }
      },
      1808: (t, e, o) => {
        o.d(e, { C: () => a });
        var n = o(1635),
          r = o(3496),
          i = o(7019),
          s = o(3236);
        class a extends r._J {
          constructor(t) {
            super(t),
              (this.m_latchedPosition = null),
              super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "panel-anchor";
          }
          relatch() {
            this.m_latchedPosition = null;
          }
          buildNode(t, e) {
            var o, n;
            if (!t.currentPanel && !t.bInsideReparentedPanel)
              return [
                Object.assign(Object.assign({}, t), { bShouldAbort: !0 }),
                null,
              ];
            let s = null;
            "object" == typeof this.props.location
              ? (s = (0, r.PG)(this.props.location, { x: 0, y: 0 }))
              : "number" == typeof this.props.location &&
                (s = (0, i.Lr)(this.props.location));
            let a = this.createSgNode(e);
            if (this.props.latched && null !== this.m_latchedPosition)
              (a.properties["anchor-u"] = this.m_latchedPosition.u),
                (a.properties["anchor-v"] = this.m_latchedPosition.v);
            else if (s) {
              const e = { u: 0.5 * s.x + 0.5, v: -0.5 * s.y + 0.5 },
                o =
                  !t.currentPanel || t.currentPanel.props.overlay_key
                    ? e
                    : t.currentPanel.scaleLocalUVToGlobal(e);
              o &&
                ((a.properties["anchor-u"] = o.u),
                (a.properties["anchor-v"] = o.v));
            } else {
              if (!t.currentPanel)
                return [
                  Object.assign(Object.assign({}, t), { bShouldAbort: !0 }),
                  null,
                ];
              const r = e.ownerDocument,
                i = e.getBoundingClientRect(),
                s = i.left + i.width / 2,
                l = i.top + i.height / 2,
                u = t.currentPanel.m_Rect;
              if (s < u.x || s > u.x + u.width || l < u.y || l > u.y + u.height)
                return [
                  Object.assign(Object.assign({}, t), { bShouldAbort: !0 }),
                  null,
                ];
              const c =
                  null === (o = r.defaultView) || void 0 === o
                    ? void 0
                    : o.innerWidth,
                p =
                  null === (n = r.defaultView) || void 0 === n
                    ? void 0
                    : n.innerHeight;
              if (!(p && p > 0 && c && c > 0))
                return [
                  Object.assign(Object.assign({}, t), { bShouldAbort: !0 }),
                  null,
                ];
              (a.properties["anchor-u"] = s / c),
                (a.properties["anchor-v"] = l / p);
            }
            return (
              (this.m_latchedPosition = {
                u: a.properties["anchor-u"],
                v: a.properties["anchor-v"],
              }),
              [t, a]
            );
          }
        }
        (0, n.Cg)([s.o], a.prototype, "buildNode", null);
      },
      10: (t, e, o) => {
        o(6540);
        var n = o(3496);
        n._J;
      },
      9011: (t, e, o) => {
        var n = o(1635),
          r = o(3496),
          i = o(3236);
        class s extends r._J {
          constructor(t) {
            super(t), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "tilefloor";
          }
          buildNode(t, e) {
            var o, n, i, s, a, l, u;
            const c = this.createSgNode(e);
            if (
              ((c.properties["tile-size"] = this.props["tile-size"]),
              (c.properties["tile-gap"] = this.props["tile-gap"]),
              (c.properties["inner-radius"] = this.props["inner-radius"]),
              (c.properties["outer-radius"] = this.props["outer-radius"]),
              (c.properties["fade-distance"] =
                null === (o = this.props) || void 0 === o
                  ? void 0
                  : o["fade-distance"]),
              (c.properties["min-tile-scale-at-periphery"] =
                this.props["min-tile-scale-at-periphery"]),
              (c.properties.height = (0, r.kJ)(this.props.height)),
              null != this.props.offset &&
                (c.properties.offset = [
                  null === (n = this.props.offset) || void 0 === n
                    ? void 0
                    : n.x,
                  null === (i = this.props.offset) || void 0 === i
                    ? void 0
                    : i.y,
                ]),
              "string" == typeof this.props.color)
            )
              c.properties.color = this.props.color;
            else if (this.props.color) {
              let t = (0, r.RH)(this.props.color, { r: 0, g: 0, b: 0 });
              c.properties.color = [t.r, t.g, t.b];
            }
            return (
              (c.properties["center-randomization"] =
                null == this ? void 0 : this.props["center-randomization"]),
              this.props["luma-randomization"] &&
                ((c.properties["luma-randomization-min-gain"] =
                  this.props["luma-randomization"]["min-gain"]),
                (c.properties["luma-randomization-max-gain"] =
                  this.props["luma-randomization"]["max-gain"])),
              this.props["reflection-randomization"] &&
                ((c.properties["reflection-randomization-min-gain"] =
                  this.props["reflection-randomization"]["min-gain"]),
                (c.properties["reflection-randomization-max-gain"] =
                  this.props["reflection-randomization"]["max-gain"])),
              (c.properties["normal-randomization-degrees"] =
                null === (s = this.props) || void 0 === s
                  ? void 0
                  : s["normal-randomization-degrees"]),
              this.props.chevron &&
                ((c.properties["chevron-luma-scale"] =
                  this.props.chevron["luma-scale"]),
                (c.properties["chevron-reflection-scale"] =
                  this.props.chevron["reflection-scale"])),
              (c.properties["auto-subdivide"] =
                null === (a = this.props) || void 0 === a
                  ? void 0
                  : a["auto-subdivide"]),
              (c.properties["pedestal-height"] = (0, r.kJ)(
                this.props["pedestal-height"],
              )),
              (c.properties["pedestal-radius"] = (0, r.kJ)(
                this.props["pedestal-radius"],
              )),
              (c.properties["floor-aa-shader"] =
                null === (l = this.props) || void 0 === l
                  ? void 0
                  : l["floor-aa-shader"]),
              (c.properties["stable-fade"] =
                null === (u = this.props) || void 0 === u
                  ? void 0
                  : u["stable-fade"]),
              [t, c]
            );
          }
        }
        (0, n.Cg)([i.o], s.prototype, "buildNode", null);
      },
      111: (t, e, o) => {
        o(6540);
        var n = o(3496);
        n._J;
      },
      8803: (t, e, o) => {
        o.d(e, { ZW: () => p });
        var n = o(1635),
          r = o(7813),
          i = o(3236),
          s = o(3676);
        const a = new Map(),
          l = new Map();
        (window.protoPathProperties = l), (window.protoPathPropertyDebug = !1);
        class u {
          constructor() {
            (this.m_bIsSystemUI = !1), (0, r.makeObservable)(this);
          }
          Init(t) {
            return (0, n.sH)(this, void 0, void 0, function* () {
              (this.m_bIsSystemUI = t),
                (0, r.reaction)(
                  () => s.m.connected,
                  (t, e) => {
                    e && !t && this.OnDisconnectedFromSteam();
                  },
                );
            });
          }
          OnDisconnectedFromSteam() {
            var t;
            if (this.m_bIsSystemUI)
              for (const e of null !== (t = window.VRPathProperties) &&
              void 0 !== t
                ? t
                : [])
                e.shouldUnsetVRPathPropertyOnSteamClose() &&
                  (null === VRHTML ||
                    void 0 === VRHTML ||
                    VRHTML.VRPathProperties.SetStringPathProperty(
                      e.getVRPathPropertyKey(),
                      "",
                    ));
          }
        }
        (0, n.Cg)([i.o], u.prototype, "OnDisconnectedFromSteam", null);
        const c = new u();
        function p(t) {
          let e;
          try {
            e = t.getVRPathPropertyKey();
            const o = t.serializeBase64String(),
              n = a.get(e);
            if (n && n == o) return;
            a.set(e, o),
              window.protoPathPropertyDebug && l.set(e, t.toObject()),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRPathProperties.SetStringPathProperty(e, o);
          } catch (t) {
            throw t;
          }
        }
        window.pathPropertyStore = c;
      },
      1278: (t, e, o) => {
        var n = o(1635),
          r = o(6540),
          i = o(5338),
          s = o(3236),
          a = o(6090),
          l = o(5802),
          u = o(3714),
          c = o(9118),
          p = o(1532),
          d = o(6138),
          h = o(1333),
          f = o(1370),
          m = o(1835),
          _ = o(7813),
          v = o(9125);
        function g(t, e) {
          let o = "";
          switch (e.mode) {
            case "dpad":
            case "dpad_touch":
            case "dpad_click":
              o =
                "/input/thumbstick" == e.input_path ||
                "/input/joystick" == e.input_path
                  ? "_" + e.slot
                  : "_dpad_" + e.slot;
              break;
            case "button":
              ("/input/trackpad" != e.input_path &&
                "/input/joystick" != e.input_path) ||
                (o = "_click");
          }
          switch (e.slot) {
            case "position":
              o = "_move";
              break;
            case "scroll":
              o = "_scroll";
          }
          let n = "/dashboard/images/bindingcallouts/";
          switch (e.input_path) {
            case "/input/a":
              return n + "button_a.svg";
            case "/input/b":
              return n + "button_b.svg";
            case "/input/x":
              return n + "button_x.svg";
            case "/input/y":
              return n + "button_y.svg";
            case "/input/grip":
              return n + "button_grip.svg";
            case "/input/system":
              return n + "button_system.svg";
            case "/input/application_menu":
              return n + "button_menu.svg";
            case "/input/trackpad":
              return "knuckles" == t
                ? n + "button_trackbutton" + o + ".svg"
                : n + "button_trackpad" + o + ".svg";
            case "/input/thumbstick":
            case "/input/joystick":
              return n + "button_thumbstick" + o + ".svg";
            case "/input/trigger":
              return n + "button_trigger.svg";
          }
          return null;
        }
        function y(t) {
          switch (t) {
            case "north":
            case "south":
            case "east":
            case "west":
            case "center":
              return "dpad";
            default:
              return "button";
          }
        }
        (0, _.configure)({ enforceActions: "never" });
        class b extends r.Component {
          constructor(t) {
            super(t), (this.state = {});
          }
          renderSlot(t, e) {
            let o,
              n = g(this.props.controllerType, t);
            o = n
              ? r.createElement("img", {
                  className: "BindingCalloutIcon",
                  src: n,
                })
              : r.createElement("div", { className: "BindingCalloutIcon" });
            let i,
              s = (function (t) {
                let e = "/dashboard/images/bindingcallouts/";
                switch (t.mode) {
                  case "dpad":
                  case "dpad_click":
                    return e + "modifier_click.svg";
                  case "dpad_touch":
                    return e + "modifier_touch.svg";
                }
                switch (t.slot) {
                  case "grab":
                  case "click":
                  case "single":
                    return e + "modifier_click.svg";
                  case "double":
                    return e + "modifier_doubleclick.svg";
                  case "long":
                    return e + "modifier_long.svg";
                  case "held":
                    return e + "modifier_held.svg";
                  case "scroll":
                  case "position":
                  case "touch":
                    return e + "modifier_touch.svg";
                  case "force":
                    return e + "modifier_force.svg";
                }
                return null;
              })(t);
            return (
              (i = s
                ? r.createElement("img", {
                    className: "BindingCalloutModifierIcon",
                    src: s,
                  })
                : r.createElement("div", {
                    className: "BindingCalloutModifierIcon",
                  })),
              r.createElement(
                "div",
                { className: "BindingCalloutContents", key: e },
                o,
                i,
                r.createElement(
                  "div",
                  { className: "BindingCalloutLabelContainer" },
                  r.createElement(
                    "div",
                    { className: "Label" },
                    t.localized_action_name,
                  ),
                  r.createElement(
                    "div",
                    { className: "BindingCalloutModeSlot" },
                    this.props.localizedInputName,
                    " : ",
                    (0, u.we)("#SourceInputMode_" + t.slot),
                  ),
                ),
              )
            );
          }
          render() {
            let t = "BindingCallout";
            this.props.leftAlign
              ? (t += " AlignCalloutRight")
              : (t += " AlignCalloutLeft"),
              this.props.inputActive && (t += " CalloutInputActive");
            let e =
              this.props.devicePath +
              this.props.inputCallout.input_path +
              "_component";
            return r.createElement(
              "div",
              { className: "BindingCalloutContainer" },
              r.createElement(a.mS, {
                id: e,
                sDevicePath: this.props.devicePath,
                sInputPath: this.props.inputCallout.input_path,
                key: e,
              }),
              r.createElement(
                "div",
                { className: t },
                this.props.inputCallout.slot_callouts.map((t, e) =>
                  this.renderSlot(t, String(e)),
                ),
                r.createElement(
                  "div",
                  { className: "CalloutAnchorPoint" },
                  r.createElement(
                    a.Ci,
                    null,
                    this.props.inputActive &&
                      r.createElement(a.N1, {
                        target_id: e,
                        thickness: 0.002,
                        start_buffer: 0,
                        end_buffer: 0,
                      }),
                  ),
                ),
              ),
            );
          }
        }
        class C extends r.Component {
          constructor(t) {
            super(t), (this.state = {});
          }
          render() {
            let t = [],
              e = [];
            for (let o of this.props.chordCallout.inputs) {
              let n = o.device_path + o.input_path + o.slot,
                i = {
                  device_path: o.device_path,
                  input_path: o.input_path,
                  mode: y(o.slot),
                  slot: o.slot,
                  localized_action_name:
                    this.props.chordCallout.localized_action_name,
                };
              t.length > 0 &&
                t.push(
                  r.createElement(
                    "div",
                    { className: "ChordCalloutPlus", key: "plus" + t.length },
                    "+",
                  ),
                ),
                t.push(
                  r.createElement("img", {
                    className: "BindingCalloutIcon",
                    key: n + "_icon",
                    src: g(this.props.controllerType, i),
                  }),
                ),
                e.push(
                  r.createElement(
                    "div",
                    { className: "BindingCalloutModeSlot", key: n + "_text" },
                    c.W.LocalizeControllerString(
                      this.props.controllerTypeInfo,
                      o.input_path,
                    ),
                    " : ",
                    (0, u.we)("#SourceInputMode_" + o.slot),
                  ),
                );
            }
            let o = "ChordCalloutContainer";
            return (
              this.props.inputActive && (o += " CalloutInputActive"),
              r.createElement(
                "div",
                { className: o },
                r.createElement("div", { className: "ChordCalloutHeader" }, t),
                r.createElement(
                  "div",
                  { className: "ChordCalloutBody" },
                  r.createElement(
                    "div",
                    { className: "Label" },
                    this.props.chordCallout.localized_action_name,
                  ),
                  e,
                ),
              )
            );
          }
        }
        class S extends r.Component {
          constructor(t) {
            super(t),
              (this.m_mailbox = new a._n()),
              (this.m_sMailboxName = void 0),
              (this.m_sMailboxName =
                "devicecallout/" +
                this.props.device.device_path.replace(/\//g, "_")),
              this.m_mailbox.Init(this.m_sMailboxName).then(() => {
                this.m_mailbox.RegisterHandler(
                  "input_active_state",
                  this.OnInputActiveState,
                );
                let t = {
                  type: "request_input_in_use_updates",
                  device_path: this.props.device.device_path,
                  mailbox: this.m_sMailboxName,
                };
                this.m_mailbox.SendMessage(a.mX, t);
              });
            let e = {};
            for (let t of Object.keys(this.props.device.input_callouts))
              e[t] = !1;
            this.state = { input_state: e };
          }
          OnInputActiveState(t) {
            let e = Object.assign({}, this.state.input_state);
            (e[t.input_path] = t.state), this.setState({ input_state: e });
          }
          componentWillUnmount() {
            let t = {
              type: "cancel_input_in_use_updates",
              device_path: this.props.device.device_path,
              mailbox: this.m_sMailboxName,
            };
            this.m_mailbox.SendMessage(a.mX, t);
          }
          render() {
            if (!VRHTML) return null;
            if (
              !VRHTML.VRSystem.IsDevicePathValid(this.props.device.device_path)
            )
              return null;
            let t = -0.05,
              e = { x: -0.08, y: 0.05, z: 0.12 },
              o = !0;
            "/user/hand/left" == this.props.device.device_path &&
              ((e.x = -e.x), (t = -t), (o = !1));
            let n = c.W.GetControllerTypeInfo(this.props.controllerType);
            if (!n) return null;
            let i = [],
              s = Object.keys(this.props.device.input_callouts);
            for (let t of s) {
              let e = this.props.device.input_callouts[t],
                a = t;
              n && (a = c.W.LocalizeControllerString(n, t));
              let l = n.input_source[t],
                u = 999;
              l && l.order && (u = l.order);
              let p = r.createElement(b, {
                devicePath: this.props.device.device_path,
                inputCallout: e,
                leftAlign: o,
                inputActive:
                  1 == s.length || this.state.input_state[e.input_path],
                localizedInputName: a,
                controllerType: this.props.controllerType,
                key: this.props.device.device_path + t,
              });
              i.push({ order: u, callout: p });
            }
            i.sort((t, e) => t.order - e.order);
            let l = i.map((t) => t.callout),
              u = [];
            for (let t of this.props.device.chords) {
              let e = !1;
              for (let o of t.inputs)
                e = e || this.state.input_state[o.input_path];
              u.push(
                r.createElement(C, {
                  controllerTypeInfo: n,
                  chordCallout: t,
                  controllerType: this.props.controllerType,
                  key: "chord_" + u.length,
                  inputActive: e,
                }),
              );
            }
            return r.createElement(
              a.dL,
              { parent_path: this.props.device.device_path },
              r.createElement(
                a.Nu,
                { vOffset: e },
                r.createElement(
                  a.FN,
                  null,
                  r.createElement(
                    a.dL,
                    { rotation: { y: o ? 7 : -7 } },
                    r.createElement(
                      a.dL,
                      { translation: { x: t } },
                      r.createElement(
                        a.Zk,
                        { width: 0.1, debug_name: "bindingcallouts-2" },
                        r.createElement(
                          "div",
                          { className: "FlexColumn BindingCalloutColumn" },
                          l,
                          u,
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            );
          }
        }
        (0, n.Cg)([s.o], S.prototype, "OnInputActiveState", null);
        class R extends r.Component {
          constructor(t) {
            super(t);
          }
          render() {
            return this.props.devices
              ? r.createElement(
                  "div",
                  { className: "DeviceCalloutList" },
                  Object.keys(this.props.devices).map((t) =>
                    r.createElement(
                      "div",
                      { key: t, className: "DeviceCalloutListEntry" },
                      r.createElement(S, {
                        device: this.props.devices[t],
                        controllerType: this.props.controllerType,
                        key: t,
                      }),
                    ),
                  ),
                )
              : null;
          }
        }
        let k = class extends r.Component {
          constructor(t) {
            super(t),
              (this.m_mailbox = new a._n()),
              this.m_mailbox.Init(a.I0).then(() => {
                this.m_mailbox.RegisterHandler(
                  "request_binding_callouts",
                  this.OnRequestBindingCallouts,
                ),
                  this.m_mailbox.RegisterHandler(
                    "cancel_binding_callouts",
                    this.OnCancelBindingCallouts,
                  ),
                  this.m_mailbox.RegisterHandler(
                    "should_show_binding_callouts",
                    this.OnShouldShowBindingCallouts,
                  ),
                  this.m_mailbox.RegisterHandler(
                    "request_tutorial_callout",
                    this.OnRequestTutorialCallout,
                  );
              }),
              h.HR.Init(!1),
              (this.state = {});
          }
          GetDefaultControllerType() {
            let t = VRHTML.VRSystem.GetTrackedDeviceClasses(),
              e = t.find((t) => t.eClass == a.mo.Controller);
            return (
              e || (e = t.find((t) => t.eClass == a.mo.HMD)),
              e
                ? VRHTML.VRProperties.GetStringProperty(
                    e.unIndex,
                    a.fD.ControllerType_String,
                  )
                : null
            );
          }
          SendShouldShowBindingCalloutsResponse(t, e) {
            let o = {
              type: "should_show_binding_callouts_response",
              app_key: t.app_key,
              has_callouts: e,
            };
            this.m_mailbox.SendResponse(t, o);
          }
          OnShouldShowBindingCallouts(t) {
            let e = this.GetDefaultControllerType();
            (0, l.xM)(t.app_key)
              .then((o) => {
                let n = "legacy" == o.category,
                  r = !n;
                if (n) {
                  r =
                    o.current_binding_url[e] !=
                    (o.default_bindings && o.default_bindings[e]);
                }
                return r
                  ? (this.SendShouldShowBindingCalloutsResponse(t, !0), null)
                  : (0, l.mQ)(t.app_key, e, o.current_binding_url[e]);
              })
              .then((e) => {
                let o = !1;
                if (e.binding_config.alias_info)
                  for (let t in e.binding_config.alias_info) {
                    let n = e.binding_config.alias_info[t];
                    if (!n.hidden && n.alias_name) {
                      o = !0;
                      break;
                    }
                  }
                e.binding_config.simulated_actions &&
                  e.binding_config.simulated_actions.length > 0 &&
                  (o = !0),
                  this.SendShouldShowBindingCalloutsResponse(t, o);
              })
              .catch((e) => {
                this.SendShouldShowBindingCalloutsResponse(t, !1);
              });
          }
          OnRequestBindingCallouts(t) {
            let e,
              o = t.controller_type
                ? t.controller_type
                : this.GetDefaultControllerType();
            (0, l.xM)(t.app_key)
              .then(
                (n) => (
                  (e = n), (0, l.mQ)(t.app_key, o, e.current_binding_url[o])
                ),
              )
              .then((n) => {
                (Object.assign({}, t).controller_type = o),
                  this.ShowCallouts(t, o, e, n.binding_config);
              })
              .catch((t) => {
                console.log("Request for bindings failed: ", t);
              });
          }
          OnCancelBindingCallouts(t) {
            this.state.sAppKey == t.app_key && this.OnCloseCallouts();
          }
          OnRequestTutorialCallout(t) {
            this.setState({
              actionManifest: null,
              bindingConfig: null,
              sActionSet: null,
              sRestrictToAction: null,
              sAppKey: t.app_key,
              sControllerType: t.controller_type,
              tutorialCallout: t,
            });
          }
          IsActionSetAllowed(t, e) {
            if (t.required_options)
              for (let o of t.required_options) if (!e.options[o]) return !1;
            if (t.forbidden_options)
              for (let o of t.forbidden_options) if (e.options[o]) return !1;
            return !0;
          }
          DoesActionSetHaveBindings(t, e) {
            var o, n;
            const r =
              null ===
                (n =
                  null === (o = e.bindings) || void 0 === o
                    ? void 0
                    : o[t.name]) || void 0 === n
                ? void 0
                : n.sources;
            if (Array.isArray(r) && r.length > 0) {
              let e = !1;
              for (let o of t.actions)
                if (!o.hide_callout) {
                  e = !0;
                  break;
                }
              return e;
            }
            return !1;
          }
          DetermineDefaultActionSet(t, e) {
            for (let o of t.action_sets)
              if (
                this.IsActionSetAllowed(o, e) &&
                this.DoesActionSetHaveBindings(o, e)
              )
                return o.name;
          }
          ShowCallouts(t, e, o, n) {
            let r = null,
              i = null;
            if (t.action) {
              t: for (let e of o.action_sets)
                if (this.DoesActionSetHaveBindings(e, n))
                  for (let o of e.actions)
                    if (o.name.toUpperCase() == t.action.toUpperCase()) {
                      r = e.name;
                      break t;
                    }
              i = t.action.toUpperCase();
            } else
              r = t.action_sets
                ? t.action_sets[0]
                : this.DetermineDefaultActionSet(o, n);
            r &&
              this.setState({
                actionManifest: o,
                bindingConfig: n,
                sActionSet: r,
                sRestrictToAction: i,
                sAppKey: t.app_key,
                sControllerType: e,
              });
          }
          ComputeCalloutsForActionSet(t) {
            let e = [],
              o = this.state.bindingConfig.bindings[t.name];
            if (o && o.sources)
              for (let n of o.sources)
                if (n.inputs)
                  for (let o of Object.keys(n.inputs)) {
                    let r = n.inputs[o];
                    if (!r.output) continue;
                    if (
                      this.state.sRestrictToAction &&
                      r.output.toUpperCase() != this.state.sRestrictToAction
                    )
                      continue;
                    let i = n.path.indexOf("/input");
                    if (-1 == i) continue;
                    let s = {
                        device_path: n.path.substring(0, i),
                        input_path: n.path.substring(i),
                        mode: n.mode,
                        slot: o,
                        localized_action_name: null,
                      },
                      a = t.actions.find(
                        (t) => t.name.toUpperCase() == r.output.toUpperCase(),
                      );
                    if (a) {
                      if (a.hide_callout) continue;
                      let t = a.localized_name,
                        e =
                          this.state.bindingConfig.alias_info &&
                          this.state.bindingConfig.alias_info[a.name];
                      if (e && (e.alias_name && (t = e.alias_name), e.hidden))
                        continue;
                      s.localized_action_name = t;
                    } else if (r.output.startsWith("/simactions/")) {
                      let t = parseInt(
                          r.output.slice(r.output.lastIndexOf("/") + 1),
                        ),
                        e = this.state.bindingConfig.simulated_actions.find(
                          (e) => e.id == t,
                        );
                      if (!e) continue;
                      s.localized_action_name = e.name;
                    }
                    s.localized_action_name && e.push(s);
                  }
            return e;
          }
          ComputeChordCalloutsForActionSet(t) {
            let e = [],
              o = this.state.bindingConfig.bindings[t.name];
            if (o && o.chords)
              for (let n of o.chords) {
                if (!n.inputs || !n.output) continue;
                if (
                  this.state.sRestrictToAction &&
                  n.output.toUpperCase() != this.state.sRestrictToAction
                )
                  continue;
                let o = t.actions.find(
                  (t) => t.name.toUpperCase() == n.output.toUpperCase(),
                );
                if (!o) continue;
                let r = { inputs: [], localized_action_name: o.localized_name };
                for (let t of n.inputs) {
                  if (2 != t.length) continue;
                  let e = t[0].indexOf("/input");
                  if (-1 == e) continue;
                  let o = {
                    device_path: t[0].substring(0, e),
                    input_path: t[0].substring(e),
                    slot: t[1],
                  };
                  r.inputs.push(o);
                }
                r.inputs.length > 0 && e.push(r);
              }
            return e;
          }
          ComputeGroupedCallouts() {
            if (
              !(
                this.state.actionManifest &&
                this.state.bindingConfig &&
                this.state.sActionSet &&
                this.state.sAppKey &&
                this.state.sControllerType
              )
            )
              return {};
            let t = [],
              e = [];
            for (let o of this.state.actionManifest.action_sets)
              (o.name != this.state.sActionSet &&
                o.display_with != this.state.sActionSet) ||
                ((t = t.concat(this.ComputeCalloutsForActionSet(o))),
                (e = e.concat(this.ComputeChordCalloutsForActionSet(o))));
            return this.GroupCallouts(t, e);
          }
          GroupCallouts(t, e) {
            let o = {};
            for (let e of t) {
              let t = e.device_path.toLowerCase();
              o.hasOwnProperty(t) ||
                (o[t] = { device_path: t, input_callouts: {}, chords: [] });
              let n = o[t];
              n.input_callouts.hasOwnProperty(e.input_path) ||
                (n.input_callouts[e.input_path] = {
                  input_path: e.input_path,
                  slot_callouts: [],
                }),
                n.input_callouts[e.input_path].slot_callouts.push(e);
            }
            for (let t of e) {
              if (0 == t.inputs.length) continue;
              let e = t.inputs[0].device_path.toLowerCase(),
                n = !1;
              for (let o of t.inputs)
                if (o.device_path.toLowerCase() != e) {
                  n = !0;
                  break;
                }
              n
                ? console.log(
                    "chord is multi-device, which we don't know how to draw yet",
                    t,
                  )
                : o[e].chords.push(t);
            }
            return o;
          }
          OnSelectActionSet(t) {
            this.setState({ sActionSet: t });
          }
          OnCloseCallouts() {
            this.setState({
              actionManifest: void 0,
              bindingConfig: void 0,
              sActionSet: void 0,
              sRestrictToAction: void 0,
              sAppKey: void 0,
              sControllerType: void 0,
              tutorialCallout: void 0,
            });
          }
          renderTutorialCallout() {
            let t = {
                device_path: this.state.tutorialCallout.device_path,
                input_path: this.state.tutorialCallout.input_path,
                mode: this.state.tutorialCallout.mode,
                slot: this.state.tutorialCallout.slot,
                localized_action_name:
                  this.state.tutorialCallout.localized_action_name,
              },
              e = {
                input_path: this.state.tutorialCallout.input_path,
                slot_callouts: [t],
              },
              o = {
                device_path: this.state.tutorialCallout.device_path,
                input_callouts: {},
                chords: [],
              };
            o.input_callouts[this.state.tutorialCallout.input_path] = e;
            let n = {};
            return (
              (n[this.state.tutorialCallout.device_path] = o),
              r.createElement(R, {
                devices: n,
                controllerType: this.state.sControllerType,
              })
            );
          }
          render() {
            if (this.state.tutorialCallout) return this.renderTutorialCallout();
            let t = this.ComputeGroupedCallouts();
            if (0 == Object.keys(t).length) return null;
            let e = [];
            this.state.actionManifest.action_sets.forEach((t) => {
              if (
                this.IsActionSetAllowed(t, this.state.bindingConfig) &&
                !t.display_with &&
                this.DoesActionSetHaveBindings(t, this.state.bindingConfig)
              ) {
                let o = "ActionSetName ButtonControl";
                t.name == this.state.sActionSet && (o += " ActionSetSelected"),
                  e.push(
                    r.createElement(
                      d.$,
                      {
                        className: o,
                        onClick: () => {
                          this.OnSelectActionSet(t.name);
                        },
                        key: t.name,
                      },
                      t.localized_name,
                    ),
                  );
              }
            });
            let o = p.s.GetApp(this.state.sAppKey);
            return r.createElement(
              "div",
              { className: "CalloutTopLevelContainer" },
              !this.state.sRestrictToAction &&
                r.createElement(
                  "div",
                  { className: "CalloutActionSetDialogContainer" },
                  r.createElement(
                    a.dL,
                    { parent_path: "/user/head" },
                    r.createElement(
                      a.m$,
                      {
                        rotation_start_angle_threshold: 40,
                        rotation_stop_angle_threshold: 5,
                      },
                      r.createElement(
                        a.dL,
                        { rotation: { x: -10, y: 10, z: 0 } },
                        r.createElement(
                          a.dL,
                          {
                            translation: {
                              x: -0,
                              y: -0,
                              z: -0.85 * m.SW.dashboardDistance,
                            },
                          },
                          r.createElement(
                            a.Zk,
                            {
                              width: 0.65 * m.SW.dashboardScale,
                              interactive: !0,
                              debug_name: "bindingcallouts-1",
                            },
                            r.createElement(
                              d.W,
                              { className: "BindingCalloutActionPanel" },
                              o &&
                                r.createElement(
                                  "div",
                                  { className: "BindingCalloutAppHeader" },
                                  r.createElement("img", {
                                    className: "BindingCalloutImage",
                                    src: p.s.GetAppImageURL(this.state.sAppKey),
                                  }),
                                  r.createElement(
                                    "div",
                                    { className: "BindingCalloutTitle" },
                                    "Controller Bindings",
                                  ),
                                  r.createElement(
                                    "div",
                                    { className: "BindingCalloutConfigName" },
                                    this.state.bindingConfig.name,
                                  ),
                                ),
                              r.createElement(
                                "div",
                                { className: "BindingCalloutActionList" },
                                e,
                                r.createElement(
                                  d.$,
                                  {
                                    className: "ButtonControl CloseButton",
                                    onClick: this.OnCloseCallouts,
                                  },
                                  "Close",
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              r.createElement(R, {
                devices: t,
                controllerType: this.state.sControllerType,
              }),
            );
          }
        };
        (0, n.Cg)([s.o], k.prototype, "OnShouldShowBindingCallouts", null),
          (0, n.Cg)([s.o], k.prototype, "OnRequestBindingCallouts", null),
          (0, n.Cg)([s.o], k.prototype, "OnCancelBindingCallouts", null),
          (0, n.Cg)([s.o], k.prototype, "OnRequestTutorialCallout", null),
          (0, n.Cg)([s.o], k.prototype, "OnCloseCallouts", null),
          (k = (0, n.Cg)([f.PA], k)),
          null === VRHTML ||
            void 0 === VRHTML ||
            VRHTML.VROverlay.SetFlag(
              VRHTML.VROverlay.ThisOverlayHandle(),
              65536,
              !0,
            ),
          null === VRHTML ||
            void 0 === VRHTML ||
            VRHTML.VROverlay.SetInputMethod(
              VRHTML.VROverlay.ThisOverlayHandle(),
              a.Rk.Mouse,
            ),
          (0, u.uV)(
            ["bindingui"],
            null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.GetSteamLanguage(),
          )
            .then(() => c.W.Init())
            .then(() => p.s.Init())
            .then(() => {
              (0, v.aj)().Init("SteamVR", CLSTAMP, (0, v.d4)()),
                i
                  .H(document.getElementById("root"))
                  .render(
                    r.createElement(a.O5, null, r.createElement(k, null)),
                  );
            });
      },
      9888: (t, e, o) => {
        t.exports = o(8493);
      },
    },
    o = {};
  function n(t) {
    var r = o[t];
    if (void 0 !== r) return r.exports;
    var i = (o[t] = { exports: {} });
    return e[t].call(i.exports, i, i.exports, n), i.exports;
  }
  (n.m = e),
    (t = []),
    (n.O = (e, o, r, i) => {
      if (!o) {
        var s = 1 / 0;
        for (c = 0; c < t.length; c++) {
          for (var [o, r, i] = t[c], a = !0, l = 0; l < o.length; l++)
            (!1 & i || s >= i) && Object.keys(n.O).every((t) => n.O[t](o[l]))
              ? o.splice(l--, 1)
              : ((a = !1), i < s && (s = i));
          if (a) {
            t.splice(c--, 1);
            var u = r();
            void 0 !== u && (e = u);
          }
        }
        return e;
      }
      i = i || 0;
      for (var c = t.length; c > 0 && t[c - 1][2] > i; c--) t[c] = t[c - 1];
      t[c] = [o, r, i];
    }),
    (n.n = (t) => {
      var e = t && t.__esModule ? () => t.default : () => t;
      return n.d(e, { a: e }), e;
    }),
    (n.d = (t, e) => {
      for (var o in e)
        n.o(e, o) &&
          !n.o(t, o) &&
          Object.defineProperty(t, o, { enumerable: !0, get: e[o] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (n.r = (t) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (() => {
      var t = { 241: 0, 527: 0, 500: 0 };
      n.O.j = (e) => 0 === t[e];
      var e = (e, o) => {
          var r,
            i,
            [s, a, l] = o,
            u = 0;
          if (s.some((e) => 0 !== t[e])) {
            for (r in a) n.o(a, r) && (n.m[r] = a[r]);
            if (l) var c = l(n);
          }
          for (e && e(o); u < s.length; u++)
            (i = s[u]), n.o(t, i) && t[i] && t[i][0](), (t[i] = 0);
          return n.O(c);
        },
        o = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      o.forEach(e.bind(null, 0)), (o.push = e.bind(null, o.push.bind(o)));
    })();
  var r = n.O(
    void 0,
    [967, 978, 352, 705, 948, 305, 527, 554, 500, 743, 366, 386, 838],
    () => n(1278),
  );
  r = n.O(r);
})(); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/bindingcallouts.js.map
