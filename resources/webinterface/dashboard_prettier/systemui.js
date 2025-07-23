var CLSTAMP = "9920024";
(() => {
  var e,
    t = {
      5572: (e) => {
        e.exports = {
          PersistentNotificationsContainer:
            "persistentnotifications_PersistentNotificationsContainer_1d_t7",
          TrackingDataRecordingNotification:
            "persistentnotifications_TrackingDataRecordingNotification_2E8Ek",
        };
      },
      108: (e) => {
        e.exports = {
          recordingCircle: "svg_library_recordingCircle_2ovZQ",
          AnimationFadeOutIn: "svg_library_AnimationFadeOutIn_1lEwX",
        };
      },
      9569: () => {},
      5287: (e, t) => {
        "use strict";
        var n = Symbol.for("react.element"),
          o = Symbol.for("react.portal"),
          r = Symbol.for("react.fragment"),
          i = Symbol.for("react.strict_mode"),
          s = Symbol.for("react.profiler"),
          a = Symbol.for("react.provider"),
          l = Symbol.for("react.context"),
          d = Symbol.for("react.forward_ref"),
          u = Symbol.for("react.suspense"),
          c = Symbol.for("react.memo"),
          p = Symbol.for("react.lazy"),
          m = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          v = Object.assign,
          g = {};
        function _(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        function f() {}
        function C(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        (_.prototype.isReactComponent = {}),
          (_.prototype.setState = function (e, t) {
            if ("object" != typeof e && "function" != typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (_.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (f.prototype = _.prototype);
        var y = (C.prototype = new f());
        (y.constructor = C), v(y, _.prototype), (y.isPureReactComponent = !0);
        var b = Array.isArray,
          L = Object.prototype.hasOwnProperty,
          E = { current: null },
          M = { key: !0, ref: !0, __self: !0, __source: !0 };
        function S(e, t, o) {
          var r,
            i = {},
            s = null,
            a = null;
          if (null != t)
            for (r in (void 0 !== t.ref && (a = t.ref),
            void 0 !== t.key && (s = "" + t.key),
            t))
              L.call(t, r) && !M.hasOwnProperty(r) && (i[r] = t[r]);
          var l = arguments.length - 2;
          if (1 === l) i.children = o;
          else if (1 < l) {
            for (var d = Array(l), u = 0; u < l; u++) d[u] = arguments[u + 2];
            i.children = d;
          }
          if (e && e.defaultProps)
            for (r in (l = e.defaultProps)) void 0 === i[r] && (i[r] = l[r]);
          return {
            $$typeof: n,
            type: e,
            key: s,
            ref: a,
            props: i,
            _owner: E.current,
          };
        }
        function w(e) {
          return "object" == typeof e && null !== e && e.$$typeof === n;
        }
        var R = /\/+/g;
        function x(e, t) {
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
        function T(e, t, r, i, s) {
          var a = typeof e;
          ("undefined" !== a && "boolean" !== a) || (e = null);
          var l = !1;
          if (null === e) l = !0;
          else
            switch (a) {
              case "string":
              case "number":
                l = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case o:
                    l = !0;
                }
            }
          if (l)
            return (
              (s = s((l = e))),
              (e = "" === i ? "." + x(l, 0) : i),
              b(s)
                ? ((r = ""),
                  null != e && (r = e.replace(R, "$&/") + "/"),
                  T(s, t, r, "", function (e) {
                    return e;
                  }))
                : null != s &&
                  (w(s) &&
                    (s = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      s,
                      r +
                        (!s.key || (l && l.key === s.key)
                          ? ""
                          : ("" + s.key).replace(R, "$&/") + "/") +
                        e,
                    )),
                  t.push(s)),
              1
            );
          if (((l = 0), (i = "" === i ? "." : i + ":"), b(e)))
            for (var d = 0; d < e.length; d++) {
              var u = i + x((a = e[d]), d);
              l += T(a, t, r, u, s);
            }
          else if (
            ((u = (function (e) {
              return null === e || "object" != typeof e
                ? null
                : "function" == typeof (e = (m && e[m]) || e["@@iterator"])
                  ? e
                  : null;
            })(e)),
            "function" == typeof u)
          )
            for (e = u.call(e), d = 0; !(a = e.next()).done; )
              l += T((a = a.value), t, r, (u = i + x(a, d++)), s);
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
          return l;
        }
        function k(e, t, n) {
          if (null == e) return e;
          var o = [],
            r = 0;
          return (
            T(e, o, "", "", function (e) {
              return t.call(n, e, r++);
            }),
            o
          );
        }
        function D(e) {
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
          V = { transition: null },
          H = {
            ReactCurrentDispatcher: P,
            ReactCurrentBatchConfig: V,
            ReactCurrentOwner: E,
          };
        function I() {
          throw Error(
            "act(...) is not supported in production builds of React.",
          );
        }
        (t.Children = {
          map: k,
          forEach: function (e, t, n) {
            k(
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
              k(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              k(e, function (e) {
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
          (t.Component = _),
          (t.Fragment = r),
          (t.Profiler = s),
          (t.PureComponent = C),
          (t.StrictMode = i),
          (t.Suspense = u),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = H),
          (t.act = I),
          (t.cloneElement = function (e, t, o) {
            if (null == e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  ".",
              );
            var r = v({}, e.props),
              i = e.key,
              s = e.ref,
              a = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((s = t.ref), (a = E.current)),
                void 0 !== t.key && (i = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var l = e.type.defaultProps;
              for (d in t)
                L.call(t, d) &&
                  !M.hasOwnProperty(d) &&
                  (r[d] = void 0 === t[d] && void 0 !== l ? l[d] : t[d]);
            }
            var d = arguments.length - 2;
            if (1 === d) r.children = o;
            else if (1 < d) {
              l = Array(d);
              for (var u = 0; u < d; u++) l[u] = arguments[u + 2];
              r.children = l;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: i,
              ref: s,
              props: r,
              _owner: a,
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
              }).Provider = { $$typeof: a, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = S),
          (t.createFactory = function (e) {
            var t = S.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: d, render: e };
          }),
          (t.isValidElement = w),
          (t.lazy = function (e) {
            return {
              $$typeof: p,
              _payload: { _status: -1, _result: e },
              _init: D,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: c, type: e, compare: void 0 === t ? null : t };
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
          (t.useImperativeHandle = function (e, t, n) {
            return P.current.useImperativeHandle(e, t, n);
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
          (t.useReducer = function (e, t, n) {
            return P.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return P.current.useRef(e);
          }),
          (t.useState = function (e) {
            return P.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return P.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return P.current.useTransition();
          }),
          (t.version = "18.3.1");
      },
      6090: (e, t, n) => {
        "use strict";
        n.d(t, {
          $: () => V.$,
          $Z: () => P.$Z,
          Ay: () => H,
          B4: () => v.B,
          CU: () => r.CU,
          Ci: () => y.C,
          Cw: () => i.C,
          Ee: () => P.Ee,
          Em: () => m.Em,
          FN: () => E.F,
          Fb: () => r.Fb,
          Fi: () => b.Fi,
          GQ: () => P.GQ,
          Gz: () => P.Gz,
          HW: () => P.HW,
          I0: () => o.I0,
          JK: () => p.J,
          JZ: () => r.JZ,
          KI: () => V.KI,
          Ld: () => r.Ld,
          MQ: () => b.MQ,
          MV: () => P.MV,
          N: () => l.e,
          N1: () => f.N,
          NB: () => P.NB,
          NH: () => r.NH,
          Nu: () => S.N,
          O5: () => h.O,
          O6: () => r.O6,
          OH: () => P.OH,
          Oi: () => b.Oi,
          QB: () => r.QB,
          QR: () => V.QR,
          Qc: () => D.Q,
          R$: () => P.R$,
          Rk: () => P.Rk,
          Se: () => r.Se,
          Uj: () => r.Uj,
          Vh: () => g.V,
          Xl: () => P.Xl,
          Y4: () => d.Y,
          Zk: () => b.Zk,
          _$: () => D._,
          _1: () => P._1,
          _F: () => r._F,
          _h: () => b._h,
          _n: () => o._n,
          aX: () => g.a,
          b: () => P.b,
          b$: () => T.b,
          cB: () => x.L,
          dL: () => c.d,
          e_: () => r.e_,
          en: () => V.en,
          ey: () => C.e,
          fD: () => V.fD,
          gN: () => P.gN,
          gO: () => a.g,
          k2: () => P.k2,
          kG: () => P.kG,
          ku: () => P.ku,
          lq: () => _.l,
          m$: () => L.m,
          mS: () => M.m,
          mX: () => o.mX,
          mo: () => P.mo,
          mu: () => P.mu,
          nX: () => m.nX,
          ne: () => P.ne,
          nq: () => R.n,
          o3: () => b.o3,
          oN: () => r.oN,
          o_: () => r.o_,
          oi: () => s.o,
          p0: () => r.p0,
          pM: () => P.pM,
          pg: () => o.pg,
          qF: () => r.qF,
          rF: () => u.H,
          rx: () => P.rx,
          sJ: () => w.$,
          sk: () => o.sk,
          tx: () => r.tx,
          uC: () => k.u,
          vx: () => r.vx,
          vz: () => s.v,
        });
        var o = n(2824),
          r = n(6292),
          i = n(3389),
          s = n(4120),
          a = n(9424),
          l = n(1230),
          d = n(5830),
          u = n(6186),
          c = n(3361),
          p = n(111),
          m = n(5723),
          h = (n(3496), n(5178)),
          v = (n(428), n(9011)),
          g = n(7350),
          _ = n(6847),
          f = n(5227),
          C = n(10),
          y = n(1808),
          b = n(7019),
          L = (n(1988), n(2527), n(9864)),
          E = n(4189),
          M = n(322),
          S = n(1977),
          w = n(6417),
          R = n(2303),
          x = n(8715),
          T = (n(4397), n(5459)),
          k = n(8472),
          D = n(1184),
          P = n(3725),
          V = n(4367);
        const H = VRHTML;
      },
      1977: (e, t, n) => {
        "use strict";
        n.d(t, { N: () => i });
        var o = n(6540),
          r = n(3496);
        class i extends r._J {
          constructor(e) {
            super(e);
          }
          internalRender() {
            return o.createElement(
              "vsg-callout-transform",
              { offset: (0, r.j_)(this.props.vOffset) },
              this.props.children,
            );
          }
        }
      },
      322: (e, t, n) => {
        "use strict";
        n.d(t, { m: () => s });
        var o = n(6540),
          r = n(4367),
          i = n(3361);
        class s extends o.Component {
          constructor(e) {
            super(e);
            let t = {};
            if (VRHTML)
              try {
                let e = VRHTML.VRProperties.GetStringProperty(
                  this.props.sDevicePath,
                  r.fD.RenderModelName_String,
                );
                if (e) {
                  let n =
                    VRHTML.VRRenderModelsInternal.FindComponentForInputSource(
                      e,
                      this.props.sInputPath,
                    );
                  if (n) {
                    let o =
                      VRHTML.VRRenderModels.GetComponentStateForDevicePath(
                        e,
                        n,
                        this.props.sDevicePath,
                      );
                    o && (t.xfTransform = o.xfTrackingToComponentLocal);
                  }
                }
              } catch (e) {
                console.log(
                  "Component transform invalid for ",
                  this.props.sDevicePath,
                );
              }
            this.state = t;
          }
          render() {
            return o.createElement(
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
      1184: (e, t, n) => {
        "use strict";
        n.d(t, { Q: () => o, _: () => a });
        var o,
          r = n(1635),
          i = n(3496),
          s = n(3236);
        !(function (e) {
          (e[(e.Disabled = 0)] = "Disabled"),
            (e[(e.WorldZeroY = 1)] = "WorldZeroY"),
            (e[(e.WorldDynamicFloor = 2)] = "WorldDynamicFloor");
        })(o || (o = {}));
        class a extends i._J {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "constraint";
          }
          buildNode(e, t) {
            const n = this.createSgNode(t);
            return (
              (n.properties["projection-constraint"] =
                this.props.projection_constraint),
              [e, n]
            );
          }
        }
        (0, r.Cg)([s.o], a.prototype, "buildNode", null);
      },
      4120: (e, t, n) => {
        "use strict";
        n.d(t, { o: () => a, v: () => o });
        var o,
          r = n(1635),
          i = n(3496),
          s = n(3236);
        !(function (e) {
          (e[(e.RoomSetupFloor = 1)] = "RoomSetupFloor"),
            (e[(e.Locomotion = 2)] = "Locomotion"),
            (e[(e.QuickRecenter = 4)] = "QuickRecenter");
        })(o || (o = {}));
        class a extends i._J {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "constructglobals";
          }
          buildNode(e, t) {
            const n = this.createSgNode(t);
            return (
              (n.properties["scene-color-mult"] = (0, i.kJ)(
                this.props["scene-color-mult"],
              )),
              (n.properties["floor-color-mult"] = (0, i.kJ)(
                this.props["floor-color-mult"],
              )),
              (n.properties["scene-reflection-mult"] = (0, i.kJ)(
                this.props["scene-reflection-mult"],
              )),
              (n.properties["skydome-mult"] = (0, i.kJ)(
                this.props["skydome-mult"],
              )),
              (n.properties["roomview-mult"] = (0, i.UM)(
                this.props["roomview-mult"],
              )),
              (n.properties["allowed-action-sets"] = this.props[
                "allowed-action-sets"
              ].reduce((e, t) => e | t, 0)),
              (n.properties["inhibit-bounds-rendering"] =
                this.props["inhibit-bounds-rendering"]),
              (n.properties["pause-notifications"] =
                this.props["pause-notifications"]),
              (n.properties["roomview-enable-override"] =
                this.props["roomview-enable-override"]),
              (n.properties["systemlayer-msaa-enable-override"] =
                this.props["systemlayer-msaa-enable-override"]),
              (n.properties["construct-alpha-override"] =
                this.props["construct-alpha-override"]),
              [e, n]
            );
          }
        }
        (0, r.Cg)([s.o], a.prototype, "buildNode", null);
      },
      9424: (e, t, n) => {
        "use strict";
        n.d(t, { g: () => d });
        var o = n(1635),
          r = n(6540),
          i = n(3496),
          s = n(3236),
          a = n(5723),
          l = n(6186);
        class d extends i._J {
          constructor(e) {
            var t;
            if (
              (super(e),
              void 0 !== this.props.iconUri &&
                void 0 !== this.props.iconOverlayKey)
            )
              throw new Error(
                "DashboardTab cannot have both an explicit iconUri and iconOverlayKey set in props.",
              );
            super.setBuildNodeOverride(this.buildNode),
              (this.m_sMountableUnqualifiedID =
                null !== (t = e.mountableUnqualifiedID) && void 0 !== t
                  ? t
                  : this.getSGID() + "_mountable");
          }
          getNodeType() {
            return "dashboardtab";
          }
          buildNode(e, t) {
            var n;
            const o = this.createSgNode(t);
            return (
              (o.properties.tab_name =
                null !== (n = this.props.tabName) && void 0 !== n ? n : ""),
              (o.properties.mountable_id = (0, a.bl)(
                this.m_sMountableUnqualifiedID,
              )),
              (o.properties.icon_uri = this.props.iconUri),
              (o.properties.icon_overlay_key = this.props.iconOverlayKey),
              (o.properties.summon_overlay_key = this.props.summonOverlayKey),
              [e, o]
            );
          }
          internalRender() {
            return r.createElement(
              "vsg-node",
              { id: this.props.id },
              r.createElement(
                l.I,
                { id: this.m_sMountableUnqualifiedID },
                this.props.children,
              ),
            );
          }
        }
        (0, o.Cg)([s.o], d.prototype, "buildNode", null);
      },
      9864: (e, t, n) => {
        "use strict";
        n.d(t, { m: () => s });
        var o,
          r = n(6540),
          i = n(3496);
        !(function (e) {
          (e[(e.LockedToParent = 0)] = "LockedToParent"),
            (e[(e.LockedToWorld = 1)] = "LockedToWorld");
        })(o || (o = {}));
        class s extends i._J {
          constructor(e) {
            super(e);
          }
          internalRender() {
            let e = this.props.start_angle_threshold
                ? (this.props.start_angle_threshold * Math.PI) / 180
                : null,
              t = this.props.stop_angle_threshold
                ? (this.props.stop_angle_threshold * Math.PI) / 180
                : null,
              n = this.props.ease_out_angle_threshold
                ? (this.props.ease_out_angle_threshold * Math.PI) / 180
                : null,
              o = this.props.min_angular_velocity
                ? (this.props.min_angular_velocity * Math.PI) / 180
                : null,
              i = this.props.max_angular_velocity
                ? (this.props.max_angular_velocity * Math.PI) / 180
                : null;
            return r.createElement(
              "vsg-elastic-head-transform",
              {
                "start-angle-threshold": e,
                "stop-angle-threshold": t,
                "ease-in-time": this.props.ease_in_time,
                "ease-in-power": this.props.ease_in_power,
                "ease-out-angle-threshold": n,
                "ease-out-power": this.props.ease_out_power,
                "min-angular-velocity": o,
                "max-angular-velocity": i,
                "lock-to-horizon": this.props.lock_to_horizon,
                "translation-behavior": this.props.translation_behavior,
              },
              this.props.children,
            );
          }
        }
      },
      4189: (e, t, n) => {
        "use strict";
        n.d(t, { F: () => s });
        var o = n(1635),
          r = n(3496),
          i = n(3236);
        class s extends r._J {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "head-facing-transform";
          }
          buildNode(e, t) {
            var n;
            const o = this.createSgNode(t);
            return (
              (o.properties.up =
                null !== (n = this.props.up) && void 0 !== n ? n : "world"),
              [e, o]
            );
          }
        }
        (0, o.Cg)([i.o], s.prototype, "buildNode", null);
      },
      5227: (e, t, n) => {
        "use strict";
        n.d(t, { N: () => i });
        var o = n(6540),
          r = n(3496);
        class i extends r._J {
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
      7019: (e, t, n) => {
        "use strict";
        n.d(t, {
          Fi: () => s,
          Lr: () => v,
          MQ: () => i,
          Oi: () => o,
          Zk: () => g,
          _h: () => r,
          o3: () => a,
        });
        var o,
          r,
          i,
          s,
          a,
          l = n(1635),
          d = n(6540),
          u = n(3496),
          c = n(5178),
          p = n(3236),
          m = n(5723);
        function h(e) {
          if (e) return [e.u, e.v];
        }
        function v(e) {
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
          })(r || (r = {})),
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
          })(s || (s = {})),
          (function (e) {
            (e[(e.Default = 0)] = "Default"),
              (e[(e.Disabled = 1)] = "Disabled"),
              (e[(e.Low = 2)] = "Low");
          })(a || (a = {}));
        class g extends u._J {
          constructor(e) {
            super(e),
              (this.m_Rect = { x: 0, y: 0, width: 0, height: 0 }),
              (this.m_nEmbeddedIndex = null),
              (this.m_resizeObserver = null),
              (this.m_UVsMin = void 0),
              (this.m_UVsMax = void 0),
              (this.m_bOverdragBlocking = !1),
              (this.m_overdragBlockingElements = []);
            const t =
                void 0 !== this.props.width || void 0 !== this.props.height,
              n = void 0 !== this.props.meters_per_pixel,
              o = void 0 !== this.props.target_dpi_panel_id,
              r =
                void 0 !== this.props.rendermodel_component_device_index ||
                void 0 !== this.props.rendermodel_component_name;
            if (
              r &&
              (void 0 === this.props.rendermodel_component_device_index ||
                void 0 === this.props.rendermodel_component_name)
            )
              throw new Error(
                "Panel requires both rendermodel_component_device_index and rendermodel_component_name to be a rendermodel texture.",
              );
            const i = [t, n, o, r].filter((e) => e).length,
              s =
                "an (explicit width and/or height), an explicit meters_per_pixel, a target_panel_dpi panel ID, or a rendermodel name";
            if (0 == i)
              throw new Error(
                `Panel requires one of the following props: ${s}.`,
              );
            if (i > 1)
              throw new Error(
                `Panel cannot have more of the following of the following props: ${s}.`,
              );
            super.setBuildNodeOverride(this.buildNode);
          }
          isExternal() {
            return !!this.props.overlay_key;
          }
          getEmbeddedIndex() {
            return this.m_nEmbeddedIndex;
          }
          componentWillReceiveProps_UNSAFE() {
            g.s_bPanelsAreDirty = !0;
          }
          componentDidMount() {
            super.componentDidMount(),
              (this.m_resizeObserver = new ResizeObserver(
                this.onResizeObserved,
              )),
              this.m_resizeObserver.observe(this.getCurrentRootElement()),
              (this.m_nEmbeddedIndex = c.O.Current().addEmbeddedPanelUVs(this)),
              (g.s_bPanelsAreDirty = !0),
              this.getCurrentRootElement().addEventListener(
                "mousedown",
                this.onPanelMouseDown,
              ),
              this.forceUpdate();
          }
          onResizeObserved(e, t) {
            c.O.Current().forceLayoutUpdate();
          }
          componentWillUnmount() {
            this.m_resizeObserver &&
              (this.m_resizeObserver.disconnect(),
              (this.m_resizeObserver = null)),
              this.stopOverDragBlocking(),
              this.getCurrentRootElement().removeEventListener(
                "mousedown",
                this.onPanelMouseDown,
              ),
              (g.s_bPanelsAreDirty = !0),
              c.O.Current().removeEmbeddedPanelUVs(this),
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
          createOverdragBlockingElement(e, t, n, o) {
            let r = document.createElement("div");
            (r.style.position = "absolute"),
              (r.style.top = t + "px"),
              (r.style.left = e + "px"),
              (r.style.width = n + "px"),
              (r.style.height = o + "px"),
              (r.style.zIndex = "90019001"),
              this.m_overdragBlockingElements.push(r),
              document.body.appendChild(r);
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
              : s.Visible;
          }
          buildNode(e, t) {
            var n, o, r, i, a, l, d;
            if (
              !(
                this.visibility == s.Visible ||
                this.visibility == s.InvisibleButIntersectable
              )
            )
              return [e, null];
            let c = Object.assign(Object.assign({}, e), {
                bInsideReparentedPanel: !1,
                currentPanel: this,
              }),
              p = this.createSgNode(t),
              g = { x: 0, y: 0 };
            g =
              "object" == typeof this.props.origin
                ? (0, u.PG)(this.props.origin, { x: 0, y: 0 })
                : v(this.props.origin);
            const _ = this.props.overlay_key,
              f = (0, m.w5)();
            return (
              _ && _.length > 0
                ? (p.properties.key = _)
                : f
                  ? (p.properties.key = f)
                  : (p.properties.overlay_handle = (0, m.X4)()),
              (p.properties.uv_min =
                null !== (n = h(this.m_UVsMin)) && void 0 !== n ? n : void 0),
              (p.properties.uv_max =
                null !== (o = h(this.m_UVsMax)) && void 0 !== o ? o : void 0),
              (p.properties.width =
                null !== (r = this.props.width) && void 0 !== r ? r : void 0),
              (p.properties.height =
                null !== (i = this.props.height) && void 0 !== i ? i : void 0),
              (p.properties["scale-index"] =
                null !== (a = this.props.scale_index) && void 0 !== a ? a : 0),
              (p.properties["min-width"] =
                null !== (l = this.props.min_width) && void 0 !== l
                  ? l
                  : void 0),
              (p.properties["target-width-anchor-id"] = (0, m.bl)(
                this.props.target_width_anchor_id,
              )),
              (p.properties["target-dpi-panel-id"] = (0, m.bl)(
                this.props.target_dpi_panel_id,
              )),
              (p.properties["target-dpi-multiplier"] =
                this.props.target_dpi_multiplier),
              (p.properties["meters-per-pixel"] = this.props.meters_per_pixel),
              (p.properties["subview-parent-panel-key"] =
                this.props.subview_parent_panel_key),
              (p.properties.curvature = this.props.curvature),
              (p.properties["curvature-origin-id"] = (0, m.bl)(
                this.props.curvature_origin_id,
              )),
              (p.properties.spherical = this.props.spherical),
              (p.properties.interactive = this.props.interactive),
              (p.properties.scrollable = this.props.scrollable),
              (p.properties.undocked = this.props.undocked),
              (p.properties.modal = this.props.modal),
              (p.properties["requires-laser"] = this.props.requires_laser),
              (p.properties["allow-input-capture"] =
                this.props.allow_input_capture),
              (p.properties["lasermouse-filtering"] =
                null === (d = this.props) || void 0 === d
                  ? void 0
                  : d.lasermouse_filtering),
              (p.properties["hide-laser-when-clicking"] =
                this.props.hide_lasermouse_when_clicking),
              (p.properties["make-overlays-interactive-if-visible"] =
                this.props.make_overlays_interactive_if_visible),
              (p.properties["is-grab-handle"] = this.props.is_grab_handle),
              (p.properties["embedded-uv-index"] = this.m_nEmbeddedIndex),
              (p.properties.origin = (0, u.Hm)(g)),
              (p.properties.debug_name = this.props.debug_name),
              (p.properties.sampler = this.props.sampler),
              (p.properties.reflect = this.props.reflect),
              (p.properties.stereoscopy = this.props.stereoscopy),
              (p.properties.rendermodel_component_device_index =
                this.props.rendermodel_component_device_index),
              (p.properties.rendermodel_component_name =
                this.props.rendermodel_component_name),
              (p.properties["texture-id"] = (0, m.bl)(this.props.texture_id)),
              (p.properties["sort-order"] = this.props.sort_order),
              (p.properties["sort-depth-bias"] = this.props.sort_depth_bias),
              (p.properties.visibility = this.visibility),
              [c, p]
            );
          }
          scaleLocalUVToGlobal(e) {
            const t = this.m_UVsMax.u - this.m_UVsMin.u,
              n = this.m_UVsMax.v - this.m_UVsMin.v;
            return {
              u: this.m_UVsMin.u + t * e.u,
              v: this.m_UVsMin.v + n * e.v,
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
            (this.m_UVsMin = {
              u: this.m_Rect.x / e.innerWidth,
              v: this.m_Rect.y / e.innerHeight,
            }),
              (this.m_UVsMax = {
                u: (this.m_Rect.x + this.m_Rect.width) / e.innerWidth,
                v: (this.m_Rect.y + this.m_Rect.height) / e.innerHeight,
              });
          }
          internalRender() {
            return d.createElement(
              "vsg-node",
              {
                style: { display: this.visibility == s.Hidden ? "none" : null },
              },
              this.props.children,
            );
          }
        }
        (g.s_bPanelsAreDirty = !1),
          (0, l.Cg)([p.o], g.prototype, "onResizeObserved", null),
          (0, l.Cg)([p.o], g.prototype, "onPanelMouseDown", null),
          (0, l.Cg)([p.o], g.prototype, "onWindowMouseUp", null),
          (0, l.Cg)([p.o], g.prototype, "buildNode", null);
      },
      1808: (e, t, n) => {
        "use strict";
        n.d(t, { C: () => a });
        var o = n(1635),
          r = n(3496),
          i = n(7019),
          s = n(3236);
        class a extends r._J {
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
            if (!e.currentPanel && !e.bInsideReparentedPanel)
              return [
                Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                null,
              ];
            let n = null;
            "object" == typeof this.props.location
              ? (n = (0, r.PG)(this.props.location, { x: 0, y: 0 }))
              : "number" == typeof this.props.location &&
                (n = (0, i.Lr)(this.props.location));
            let o = this.createSgNode(t);
            if (this.props.latched && null !== this.m_latchedPosition)
              (o.properties["anchor-u"] = this.m_latchedPosition.u),
                (o.properties["anchor-v"] = this.m_latchedPosition.v);
            else if (n) {
              const t = { u: 0.5 * n.x + 0.5, v: -0.5 * n.y + 0.5 },
                r =
                  !e.currentPanel || e.currentPanel.props.overlay_key
                    ? t
                    : e.currentPanel.scaleLocalUVToGlobal(t);
              (o.properties["anchor-u"] = r.u),
                (o.properties["anchor-v"] = r.v);
            } else {
              if (!e.currentPanel)
                return [
                  Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                  null,
                ];
              const n = t.ownerDocument,
                r = t.getBoundingClientRect(),
                i = r.left + r.width / 2,
                s = r.top + r.height / 2,
                a = e.currentPanel.m_Rect;
              if (i < a.x || i > a.x + a.width || s < a.y || s > a.y + a.height)
                return [
                  Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                  null,
                ];
              const l = n.defaultView.innerWidth,
                d = n.defaultView.innerHeight;
              if (!(d > 0 && l > 0))
                return [
                  Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                  null,
                ];
              (o.properties["anchor-u"] = i / l),
                (o.properties["anchor-v"] = s / d);
            }
            return (
              (this.m_latchedPosition = {
                u: o.properties["anchor-u"],
                v: o.properties["anchor-v"],
              }),
              [e, o]
            );
          }
        }
        (0, o.Cg)([s.o], a.prototype, "buildNode", null);
      },
      10: (e, t, n) => {
        "use strict";
        n.d(t, { e: () => i });
        var o = n(6540),
          r = n(3496);
        class i extends r._J {
          constructor(e) {
            super(e);
          }
          internalRender() {
            return o.createElement(
              "vsg-pin-to-view-transform",
              {
                "offscreen-z-depth": this.props.fOffscreenZDepth,
                "off-axis-limit": this.props.fOffAxisLimit,
                "transition-limit": this.props.fTransitionLimit,
              },
              this.props.children,
            );
          }
        }
      },
      8313: (e, t, n) => {
        "use strict";
        n.d(t, {
          $6: () => d,
          Fv: () => o,
          VJ: () => u,
          pF: () => a,
          rm: () => l,
        });
        var o,
          r = n(1635),
          i = n(3496),
          s = n(3236);
        class a extends i._J {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "playspace-floorheight-adjust";
          }
          buildNode(e, t) {
            var n, o, r, i, s, a, l, d, u, c, p, m, h;
            const v = this.createSgNode(t);
            return (
              (v.properties["target-id"] = this.props.target_id),
              (v.properties["head-interaction-radius"] =
                null === (n = this.props) || void 0 === n
                  ? void 0
                  : n.head_interaction_radius),
              (v.properties["inactive-alpha-scale"] =
                null === (o = this.props) || void 0 === o
                  ? void 0
                  : o.inactive_alpha_scale),
              (v.properties["axis-radius"] =
                null === (r = this.props) || void 0 === r
                  ? void 0
                  : r.axis_radius),
              (v.properties["axis-color-hsv"] =
                null === (i = this.props) || void 0 === i
                  ? void 0
                  : i.axis_color_hsv),
              (v.properties["dot-radius"] =
                null === (s = this.props) || void 0 === s
                  ? void 0
                  : s.dot_radius),
              (v.properties["dot-color-hsv"] =
                null === (a = this.props) || void 0 === a
                  ? void 0
                  : a.dot_color_hsv),
              (v.properties["dot-inner-alpha"] =
                null === (l = this.props) || void 0 === l
                  ? void 0
                  : l.dot_inner_alpha),
              (v.properties["dot-outer-alpha"] =
                null === (d = this.props) || void 0 === d
                  ? void 0
                  : d.dot_outer_alpha),
              (v.properties["rings-radius"] =
                null === (u = this.props) || void 0 === u
                  ? void 0
                  : u.rings_radius),
              (v.properties["rings-color-hsv"] =
                null === (c = this.props) || void 0 === c
                  ? void 0
                  : c.rings_color_hsv),
              (v.properties["rings-hue-amplitude"] =
                null === (p = this.props) || void 0 === p
                  ? void 0
                  : p.rings_hue_amplitude),
              (v.properties["rings-hue-speed"] =
                null === (m = this.props) || void 0 === m
                  ? void 0
                  : m.rings_hue_speed),
              (v.properties["rings-half-width"] =
                null === (h = this.props) || void 0 === h
                  ? void 0
                  : h.rings_half_width),
              [e, v]
            );
          }
        }
        (0, r.Cg)([s.o], a.prototype, "buildNode", null),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.Circle = 1)] = "Circle"),
              (e[(e.Drawn = 2)] = "Drawn");
          })(o || (o = {}));
        class l extends i._J {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "playspace-draw-interaction";
          }
          buildNode(e, t) {
            var n, o;
            const r = this.createSgNode(t);
            return (
              (r.properties["target-id"] = this.props.target_id),
              (r.properties["radius-range"] =
                null === (n = this.props) || void 0 === n
                  ? void 0
                  : n.radius_range),
              (r.properties["center-selection-radius"] =
                null === (o = this.props) || void 0 === o
                  ? void 0
                  : o.center_selection_radius),
              [e, r]
            );
          }
        }
        (0, r.Cg)([s.o], l.prototype, "buildNode", null);
        class d extends i._J {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "playspace-outline";
          }
          buildNode(e, t) {
            var n, o, r, i, s, a, l, d;
            const u = this.createSgNode(t);
            return (
              (u.properties["generic-geo"] =
                null === (n = this.props) || void 0 === n
                  ? void 0
                  : n["generic-geo"]),
              (u.properties["hue-amplitude"] =
                null === (o = this.props) || void 0 === o
                  ? void 0
                  : o["hue-amplitude"]),
              (u.properties["hue-speed"] =
                null === (r = this.props) || void 0 === r
                  ? void 0
                  : r["hue-speed"]),
              (u.properties["center-dot-radius"] =
                null === (i = this.props) || void 0 === i
                  ? void 0
                  : i["center-dot-radius"]),
              (u.properties["center-color-hsv"] =
                null === (s = this.props) || void 0 === s
                  ? void 0
                  : s["center-color-hsv"]),
              (u.properties["outline-color-hsv"] =
                null === (a = this.props) || void 0 === a
                  ? void 0
                  : a["outline-color-hsv"]),
              (u.properties["shadow-radius-delta"] =
                null === (l = this.props) || void 0 === l
                  ? void 0
                  : l["shadow-radius-delta"]),
              (u.properties["outline-shadow-alpha"] =
                null === (d = this.props) || void 0 === d
                  ? void 0
                  : d["outline-shadow-alpha"]),
              [e, u]
            );
          }
        }
        (0, r.Cg)([s.o], d.prototype, "buildNode", null);
        class u extends i._J {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "playspace-dots";
          }
          buildNode(e, t) {
            var n, o, r, i, s, a, l, d, u;
            const c = this.createSgNode(t);
            return (
              (c.properties["tile-size"] =
                null === (n = this.props) || void 0 === n
                  ? void 0
                  : n["tile-size"]),
              (c.properties["max-radius"] =
                null === (o = this.props) || void 0 === o
                  ? void 0
                  : o["max-radius"]),
              (c.properties["min-radius"] =
                null === (r = this.props) || void 0 === r
                  ? void 0
                  : r["min-radius"]),
              (c.properties["max-radius-fade"] =
                null === (i = this.props) || void 0 === i
                  ? void 0
                  : i["max-radius-fade"]),
              (c.properties["min-radius-fade"] =
                null === (s = this.props) || void 0 === s
                  ? void 0
                  : s["min-radius-fade"]),
              (c.properties["dot-half-size"] =
                null === (a = this.props) || void 0 === a
                  ? void 0
                  : a["dot-half-size"]),
              (c.properties["center-randomization"] =
                null === (l = this.props) || void 0 === l
                  ? void 0
                  : l["center-randomization"]),
              (c.properties["color-hsv"] =
                null === (d = this.props) || void 0 === d
                  ? void 0
                  : d["color-hsv"]),
              (c.properties["clip-to-playspace"] =
                null === (u = this.props) || void 0 === u
                  ? void 0
                  : u["clip-to-playspace"]),
              [e, c]
            );
          }
        }
        (0, r.Cg)([s.o], u.prototype, "buildNode", null);
      },
      5178: (e, t, n) => {
        "use strict";
        n.d(t, { O: () => d });
        var o,
          r = n(1635),
          i = n(6540),
          s = n(7019),
          a = n(3236),
          l = n(5723);
        !(function (e) {
          (e[(e.Canvas = 0)] = "Canvas"), (e[(e.Image = 1)] = "Image");
        })(o || (o = {}));
        class d extends i.Component {
          static get IsSceneGraphApp() {
            return null !== d.Current();
          }
          static Current() {
            return d.s_Current;
          }
          constructor(e) {
            super(e),
              (this.m_DomRef = null),
              (this.m_scalingDomRef = null),
              (this.m_DebugPointerRef = null),
              (this.m_Observer = null),
              (this.m_nEmbeddedDataWidth = 0),
              (this.m_mapPanels = new Map()),
              (this.m_rAvailableEmbeddedIndicesQueue = []),
              (this.m_rEmbeddedIndicesToClear = []),
              (this.m_fCurrentScale = 1),
              (this.m_CanvasRef = null),
              (this.m_CanvasContext = null),
              (this.m_Pixels = null),
              (this.m_nDirtyXMin = -1),
              (this.m_nDirtyXMax = -1),
              (this.m_EmbeddedDataImgRef = null),
              (this.m_EmbeddedDataImgRGBBuffer = null),
              (d.s_Current = this),
              (this.state = {
                bFontsLoaded: !1,
                nForcedUpdateNumber: 0,
                bShowDebugPointer: !1,
                eRenderMode: VRHTML.VRUtil.BSupportsCEFCanvas()
                  ? o.Canvas
                  : o.Image,
              }),
              (this.m_DomRef = i.createRef()),
              (this.m_scalingDomRef = i.createRef()),
              (this.m_CanvasRef = i.createRef()),
              (this.m_EmbeddedDataImgRef = i.createRef()),
              (this.m_DebugPointerRef = i.createRef());
          }
          toggleDebugPointer() {
            this.setState({ bShowDebugPointer: !this.state.bShowDebugPointer });
          }
          onMouseMove(e) {
            this.state.bShowDebugPointer &&
              this.m_DebugPointerRef.current &&
              (this.m_DebugPointerRef.current.style.transform =
                "translateX( " +
                e.clientX +
                "px ) translateY( " +
                e.clientY +
                "px )");
          }
          forceLayoutUpdate() {
            (s.Zk.s_bPanelsAreDirty = !0),
              this.setState({
                nForcedUpdateNumber: this.state.nForcedUpdateNumber + 1,
              });
          }
          componentDidMount() {
            let e = this.m_DomRef.current.ownerDocument,
              t = e.defaultView;
            e.body.classList.add("SGApp"),
              document.documentElement.classList.add("VROverlay"),
              (this.m_nEmbeddedDataWidth = t.innerWidth);
            let n = Math.max(
              0,
              Math.floor((this.m_nEmbeddedDataWidth - 1) / 3),
            );
            for (let e = 0; e < n; e++)
              this.m_rAvailableEmbeddedIndicesQueue.push(e);
            e.addEventListener("mousemove", this.onMouseMove),
              (this.m_Observer = new MutationObserver(this.onMutation)),
              this.m_Observer.observe(this.m_DomRef.current, {
                attributes: !0,
                attributeFilter: ["sg-forced-update-number", "overlay-key"],
                childList: !0,
                subtree: !0,
              }),
              this.createEmbeddedData(),
              t.addEventListener("load", this.forceLayoutUpdate),
              e.fonts.ready.then(() => this.setState({ bFontsLoaded: !0 })),
              (t.forceLayoutUpdate = this.forceLayoutUpdate),
              (t.toggleDebugPointer = this.toggleDebugPointer),
              (this.props.owning_overlay_key || this.props.web_secret) &&
                (0, l.Oe)(
                  this.props.owning_overlay_key,
                  this.m_DomRef.current,
                  this.props.web_secret,
                );
          }
          componentWillUnmount() {
            let e = this.m_DomRef.current.ownerDocument;
            e.body.classList.remove("SGApp"),
              document.documentElement.classList.remove("VROverlay"),
              this.m_Observer && this.m_Observer.disconnect(),
              e.removeEventListener("mousemove", this.onMouseMove);
          }
          render() {
            const e = this.state.eRenderMode == o.Image,
              t = this.state.eRenderMode == o.Canvas;
            let n = [];
            return (
              this.state.bShowDebugPointer && n.push("ShowDebugPointer"),
              i.createElement(
                "vsg-app",
                {
                  class: n.join(" "),
                  ref: this.m_DomRef,
                  "sg-forced-update-number": this.state.nForcedUpdateNumber,
                },
                i.createElement("div", {
                  className: "DebugPointer",
                  ref: this.m_DebugPointerRef,
                }),
                e &&
                  i.createElement("img", {
                    ref: this.m_EmbeddedDataImgRef,
                    className: "EmbeddedData",
                    height: d.k_EmbeddedDataRows,
                  }),
                t &&
                  i.createElement("canvas", {
                    ref: this.m_CanvasRef,
                    className: "EmbeddedData",
                    height: d.k_EmbeddedDataRows,
                  }),
                i.createElement(
                  "div",
                  { className: "AppSceneGraph", ref: this.m_scalingDomRef },
                  this.state.bFontsLoaded && this.props.children,
                ),
              )
            );
          }
          addEmbeddedPanelUVs(e) {
            return 0 === this.m_rAvailableEmbeddedIndicesQueue.length
              ? null
              : (this.m_mapPanels.set(e.getSGID(), e),
                this.m_rAvailableEmbeddedIndicesQueue.shift());
          }
          removeEmbeddedPanelUVs(e) {
            this.m_mapPanels.has(e.getSGID()) &&
              (this.m_mapPanels.delete(e.getSGID()),
              this.m_rAvailableEmbeddedIndicesQueue.push(e.getEmbeddedIndex()),
              this.m_rEmbeddedIndicesToClear.push(e.getEmbeddedIndex()));
          }
          onMutation(e, t) {
            this.updateAllPanelBounds();
          }
          createEmbeddedData() {
            this.state.eRenderMode == o.Image
              ? ((this.m_EmbeddedDataImgRef.current.width =
                  this.m_nEmbeddedDataWidth),
                this.m_EmbeddedDataImgRGBBuffer ||
                  (this.m_EmbeddedDataImgRGBBuffer =
                    VRHTML.VRUtil.CreateEmbeddedRGBScanline(
                      this.m_nEmbeddedDataWidth,
                      1,
                      4,
                    )))
              : this.state.eRenderMode == o.Canvas &&
                ((this.m_CanvasRef.current.width = this.m_nEmbeddedDataWidth),
                (this.m_CanvasContext =
                  this.m_CanvasRef.current.getContext("2d")),
                (this.m_CanvasContext.globalCompositeOperation = "copy"),
                (this.m_CanvasContext.imageSmoothingEnabled = !1),
                null === this.m_Pixels &&
                  (this.m_Pixels = this.m_CanvasContext.createImageData(
                    this.m_nEmbeddedDataWidth,
                    d.k_EmbeddedDataRows,
                  ))),
              this.updateAllPanelBounds();
          }
          updateAllPanelBounds() {
            let e = this.m_DomRef.current.ownerDocument.defaultView,
              t = this.m_scalingDomRef.current.getBoundingClientRect(),
              n = t.width / this.m_fCurrentScale,
              o = t.height / this.m_fCurrentScale,
              r = { x: e.innerWidth / n, y: e.innerHeight / o },
              i = Math.min(r.x, r.y, 1);
            i != this.m_fCurrentScale &&
              (1 != i
                ? this.m_scalingDomRef.current.setAttribute(
                    "style",
                    "transform: scale(" + i + "); transform-origin: top left",
                  )
                : this.m_scalingDomRef.current.removeAttribute("style"),
              (this.m_fCurrentScale = i),
              (s.Zk.s_bPanelsAreDirty = !0)),
              s.Zk.s_bPanelsAreDirty &&
                (this.m_mapPanels.forEach((e) => e.updateLayoutValues()),
                (0, l.my)(),
                (s.Zk.s_bPanelsAreDirty = !1),
                this.updateEmbeddedData());
          }
          updateEmbeddedData() {
            if (this.m_EmbeddedDataImgRef || this.m_CanvasRef)
              if (
                (this.setPixel(
                  0,
                  "V".charCodeAt(0),
                  "S".charCodeAt(0),
                  "G".charCodeAt(0),
                ),
                this.m_rEmbeddedIndicesToClear.forEach((e) => {
                  let t = 1 + 3 * e;
                  for (let e = 0; e < 3; e++) this.setPixel(t + e, 0, 0, 0, 0);
                }),
                (this.m_rEmbeddedIndicesToClear = []),
                this.m_mapPanels.forEach((e, t) => {
                  let n = e.m_Rect.x,
                    o = e.m_Rect.x + e.m_Rect.width,
                    r = e.m_Rect.y,
                    i = e.m_Rect.y + e.m_Rect.height,
                    s = 1 + 3 * e.getEmbeddedIndex();
                  if (e.isExternal() || n >= o || r >= i)
                    for (let e = 0; e < 3; e++)
                      this.setPixel(s + 1, 0, 0, 0, 0);
                  else
                    this.setPixel(s, (65280 & n) >> 8, 255 & n, 0),
                      this.setPixel(s + 1, (65280 & o) >> 8, 255 & o, 255 & r),
                      this.setPixel(
                        s + 2,
                        (65280 & i) >> 8,
                        255 & i,
                        (65280 & r) >> 8,
                      );
                }),
                this.m_EmbeddedDataImgRef && this.state.eRenderMode == o.Image)
              ) {
                const e = VRHTML.VRUtil.GetEmbeddedScanlineAsURIImage(
                  this.m_nEmbeddedDataWidth,
                  1,
                  4,
                );
                this.m_EmbeddedDataImgRef.current.src = e;
              } else if (
                this.m_CanvasRef &&
                this.state.eRenderMode == o.Canvas
              ) {
                let e = this.m_nDirtyXMax - this.m_nDirtyXMin + 1;
                this.m_CanvasContext.putImageData(
                  this.m_Pixels,
                  0,
                  0,
                  this.m_nDirtyXMin,
                  0,
                  e,
                  this.m_Pixels.height,
                ),
                  (this.m_nDirtyXMin = -1),
                  (this.m_nDirtyXMax = -1);
              }
          }
          setPixel(e, t, n, r, i = 255) {
            if (
              this.m_EmbeddedDataImgRGBBuffer &&
              this.state.eRenderMode == o.Image
            ) {
              const o = new DataView(this.m_EmbeddedDataImgRGBBuffer);
              o.setUint8(4 * e + 0, t),
                o.setUint8(4 * e + 1, n),
                o.setUint8(4 * e + 2, r),
                o.setUint8(4 * e + 3, i);
            } else
              this.m_Pixels &&
                this.state.eRenderMode == o.Canvas &&
                ((this.m_Pixels.data[4 * e + 0] = t),
                (this.m_Pixels.data[4 * e + 1] = n),
                (this.m_Pixels.data[4 * e + 2] = r),
                (this.m_Pixels.data[4 * e + 3] = i),
                (-1 === this.m_nDirtyXMin || e < this.m_nDirtyXMin) &&
                  (this.m_nDirtyXMin = e),
                (-1 === this.m_nDirtyXMax || e > this.m_nDirtyXMax) &&
                  (this.m_nDirtyXMax = e));
          }
        }
        (d.s_Current = null),
          (d.k_EmbeddedDataRows = 1),
          (0, r.Cg)([a.o], d.prototype, "toggleDebugPointer", null),
          (0, r.Cg)([a.o], d.prototype, "onMouseMove", null),
          (0, r.Cg)([a.o], d.prototype, "forceLayoutUpdate", null),
          (0, r.Cg)([a.o], d.prototype, "onMutation", null);
      },
      9011: (e, t, n) => {
        "use strict";
        n.d(t, { B: () => s });
        var o = n(1635),
          r = n(3496),
          i = n(3236);
        class s extends r._J {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "tilefloor";
          }
          buildNode(e, t) {
            var n, o, i, s, a, l, d;
            const u = this.createSgNode(t);
            if (
              ((u.properties["tile-size"] = this.props["tile-size"]),
              (u.properties["tile-gap"] = this.props["tile-gap"]),
              (u.properties["inner-radius"] = this.props["inner-radius"]),
              (u.properties["outer-radius"] = this.props["outer-radius"]),
              (u.properties["fade-distance"] =
                null === (n = this.props) || void 0 === n
                  ? void 0
                  : n["fade-distance"]),
              (u.properties["min-tile-scale-at-periphery"] =
                this.props["min-tile-scale-at-periphery"]),
              (u.properties.height = (0, r.kJ)(this.props.height)),
              (u.properties.offset = [
                null === (o = this.props.offset) || void 0 === o ? void 0 : o.x,
                null === (i = this.props.offset) || void 0 === i ? void 0 : i.y,
              ]),
              "string" == typeof this.props.color)
            )
              u.properties.color = this.props.color;
            else if (this.props.color) {
              let e = (0, r.RH)(this.props.color, { r: 0, g: 0, b: 0 });
              u.properties.color = [e.r, e.g, e.b];
            }
            return (
              (u.properties["center-randomization"] =
                null == this ? void 0 : this.props["center-randomization"]),
              this.props["luma-randomization"] &&
                ((u.properties["luma-randomization-min-gain"] =
                  this.props["luma-randomization"]["min-gain"]),
                (u.properties["luma-randomization-max-gain"] =
                  this.props["luma-randomization"]["max-gain"])),
              this.props["reflection-randomization"] &&
                ((u.properties["reflection-randomization-min-gain"] =
                  this.props["reflection-randomization"]["min-gain"]),
                (u.properties["reflection-randomization-max-gain"] =
                  this.props["reflection-randomization"]["max-gain"])),
              (u.properties["normal-randomization-degrees"] =
                null === (s = this.props) || void 0 === s
                  ? void 0
                  : s["normal-randomization-degrees"]),
              this.props.chevron &&
                ((u.properties["chevron-luma-scale"] =
                  this.props.chevron["luma-scale"]),
                (u.properties["chevron-reflection-scale"] =
                  this.props.chevron["reflection-scale"])),
              (u.properties["auto-subdivide"] =
                null === (a = this.props) || void 0 === a
                  ? void 0
                  : a["auto-subdivide"]),
              (u.properties["pedestal-height"] = (0, r.kJ)(
                this.props["pedestal-height"],
              )),
              (u.properties["pedestal-radius"] = (0, r.kJ)(
                this.props["pedestal-radius"],
              )),
              (u.properties["floor-aa-shader"] =
                null === (l = this.props) || void 0 === l
                  ? void 0
                  : l["floor-aa-shader"]),
              (u.properties["stable-fade"] =
                null === (d = this.props) || void 0 === d
                  ? void 0
                  : d["stable-fade"]),
              [e, u]
            );
          }
        }
        (0, o.Cg)([i.o], s.prototype, "buildNode", null);
      },
      111: (e, t, n) => {
        "use strict";
        n.d(t, { J: () => i });
        var o = n(6540),
          r = n(3496);
        class i extends r._J {
          constructor(e) {
            super(e);
          }
          internalRender() {
            return o.createElement(
              "vsg-tracking-state-visibility",
              {
                "visible-0dof": this.props.visibleIn0DOF,
                "visible-3dof": this.props.visibleIn3DOF,
                "visible-6dof": this.props.visibleIn6DOF,
              },
              this.props.children,
            );
          }
        }
      },
      6292: (e, t, n) => {
        "use strict";
        function o() {
          return {
            translation: { x: 0, y: 0, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: { x: 1, y: 1, z: 1 },
          };
        }
        function r(e, t) {
          return { x: e.x + t.x, y: e.y + t.y, z: e.z + t.z };
        }
        function i(e, t, n) {
          return {
            x: t.x + e * (n.x - t.x),
            y: t.y + e * (n.y - t.y),
            z: t.z + e * (n.z - t.z),
          };
        }
        function s(e, t) {
          return { x: e.x - t.x, y: e.y - t.y };
        }
        function a(e, t) {
          return { x: e.x - t.x, y: e.y - t.y, z: e.z - t.z };
        }
        function l(e, t) {
          return { x: e.x * t, y: e.y * t };
        }
        function d(e, t) {
          return { x: e.x * t, y: e.y * t, z: e.z * t };
        }
        function u(e) {
          return Math.sqrt(e.x * e.x + e.y * e.y);
        }
        function c(e) {
          return Math.sqrt(e.x * e.x + e.y * e.y + e.z * e.z);
        }
        function p(e) {
          if (void 0 === e) return;
          let t = 0.5 * e.x,
            n = 0.5 * e.y,
            o = 0.5 * e.z,
            r = Math.cos(t),
            i = Math.cos(n),
            s = Math.cos(o),
            a = Math.sin(t),
            l = Math.sin(n),
            d = Math.sin(o);
          return {
            w: r * i * s + a * l * d,
            x: a * i * s + r * l * d,
            y: r * l * s - a * i * d,
            z: r * i * d - a * l * s,
          };
        }
        function m(e) {
          let t = e[0][0] + e[1][1] + e[2][2];
          if (t > 0) {
            let n = 2 * Math.sqrt(t + 1);
            return {
              w: 0.25 * n,
              x: (e[1][2] - e[2][1]) / n,
              y: (e[2][0] - e[0][2]) / n,
              z: (e[0][1] - e[1][0]) / n,
            };
          }
          if (e[0][0] > e[1][1] && e[0][0] > e[2][2]) {
            let t = 2 * Math.sqrt(1 + e[0][0] - e[1][1] - e[2][2]);
            return {
              w: (e[1][2] - e[2][1]) / t,
              x: 0.25 * t,
              y: (e[1][0] + e[0][1]) / t,
              z: (e[2][2] + e[0][2]) / t,
            };
          }
          if (e[1][1] > e[2][2]) {
            let t = 2 * Math.sqrt(1 + e[1][1] - e[0][0] - e[2][2]);
            return {
              w: (e[2][0] - e[0][2]) / t,
              x: (e[1][0] + e[0][1]) / t,
              y: 0.25 * t,
              z: (e[2][1] + e[1][2]) / t,
            };
          }
          {
            let t = 2 * Math.sqrt(1 + e[2][2] - e[0][0] - e[1][1]);
            return {
              w: (e[0][1] - e[1][0]) / t,
              x: (e[2][0] + e[0][2]) / t,
              y: (e[2][1] + e[1][2]) / t,
              z: 0.25 * t,
            };
          }
        }
        function h(e, t) {
          let n = 2 * (e.y * t.z - e.z * t.y),
            o = 2 * (e.z * t.x - e.x * t.z),
            r = 2 * (e.x * t.y - e.y * t.x);
          return {
            x: t.x + e.w * n + e.y * r - e.z * o,
            y: t.y + e.w * o + e.z * n - e.x * r,
            z: t.z + e.w * r + e.x * o - e.y * n,
          };
        }
        function v(e, t, n) {
          return [
            [e.x, e.y, e.z],
            [t.x, t.y, t.z],
            [n.x, n.y, n.z],
          ];
        }
        function g(e) {
          return h(e.rotation, { x: 0, y: 0, z: -1 });
        }
        function _(e) {
          let t = c(e);
          return { x: e.x / t, y: e.y / t, z: e.z / t };
        }
        function f(e, t) {
          return {
            x: e.y * t.z - e.z * t.y,
            y: e.z * t.x - e.x * t.z,
            z: e.x * t.y - e.y * t.x,
          };
        }
        function C(e) {
          const t = { x: 0, y: 1, z: 0 };
          let n = g(e);
          (n.y = 0), (n = _(n));
          const o = v(_(f(n, t)), t, { x: -(r = n).x, y: -r.y, z: -r.z });
          var r;
          return { translation: e.translation, rotation: m(o), scale: e.scale };
        }
        n.d(t, {
          CU: () => r,
          Fb: () => p,
          JZ: () => a,
          Ld: () => m,
          NH: () => u,
          O6: () => l,
          QB: () => s,
          Se: () => i,
          Uj: () => c,
          _F: () => h,
          e_: () => _,
          oN: () => f,
          o_: () => g,
          p0: () => C,
          qF: () => v,
          tx: () => d,
          vx: () => o,
        });
      },
      3606: (e, t, n) => {
        "use strict";
        n.d(t, {
          $Z: () => me,
          Bf: () => q,
          Bn: () => x,
          Bz: () => h,
          C6: () => f,
          D1: () => ee,
          Ec: () => he,
          El: () => pe,
          Eo: () => r,
          F2: () => j,
          Fl: () => le,
          GM: () => G,
          GO: () => v,
          Ju: () => X,
          Kh: () => l,
          MM: () => s,
          NX: () => H,
          Ni: () => Z,
          P: () => T,
          Pi: () => ve,
          Qv: () => L,
          R_: () => ce,
          So: () => E,
          Sp: () => V,
          Sx: () => d,
          Ul: () => p,
          Uv: () => g,
          Vv: () => Y,
          Vx: () => w,
          WS: () => U,
          Wl: () => y,
          Wm: () => b,
          Wt: () => C,
          XO: () => $,
          Xk: () => c,
          Y: () => W,
          aD: () => z,
          bl: () => M,
          cb: () => _,
          dw: () => u,
          ge: () => D,
          i8: () => de,
          iZ: () => P,
          j5: () => F,
          kk: () => i,
          kx: () => N,
          lP: () => oe,
          mB: () => m,
          md: () => K,
          nY: () => R,
          np: () => o,
          qf: () => B,
          qt: () => ae,
          rG: () => re,
          tZ: () => ge,
          ui: () => se,
          uv: () => k,
          v0: () => a,
          vo: () => J,
          w5: () => O,
          wi: () => S,
          wt: () => A,
          xP: () => ie,
          xY: () => Q,
          x_: () => ue,
          xz: () => te,
          yl: () => ne,
          zM: () => I,
        });
        const o = "openvr.tool.steamvr_environments",
          r = "system.generated.steam.exe",
          i = "steam.app.",
          s = i + "250820",
          a = i + "330050",
          l = "system.dashboard.",
          d = "system.dashboard.quicklaunch",
          u = "system.dashboard.nowplaying",
          c = "system.dashboard.desktop",
          p = 0.25,
          m = 2,
          h = "current.scene.app.binding.list",
          v = "system.desktop",
          g = "system.window",
          _ = "system.standalone",
          f = "system.systemui",
          C = "system.settings",
          y = "system.keyboard",
          b = "system.vrwebhelper.controllerbinding",
          L = "system.messageoverlay",
          E = "valve.steam",
          M = "valve.steam.desktopgame",
          S = "valve.steam.gamepadui.main",
          w = "valve.steam.gamepadui.bar",
          R = "valve.steam.gamepadui.keyboard",
          x = "valve.steam.desktop",
          T = "steamlink_openvr-overlay",
          k = "DashboardCurvatureOrigin",
          D = f + "::" + k,
          P = 2.667 / 1694,
          V = "DashboardControlStripTransform",
          H = "DashboardGrabHandleTransform",
          I = "DashboardOverlayControlBarOrigin",
          N = "DashboardGrabHandleTransform_Legacy",
          B = "/settings/steamvr/enableHomeApp",
          A = "/settings/steamvr/supersampleManualOverride",
          O = "/settings/steamvr/supersampleScale",
          F = "/settings/GpuSpeed/gpuSpeedRenderTargetScale",
          Z = "/settings/camera/roomViewStyle",
          z = "/settings/steamvr/backgroundCameraHeight",
          U = "/settings/steamvr/backgroundDomeRadius",
          W = "/settings/steamvr/analogGain",
          G = "/settings/driver_lighthouse/indexHmdColumnCorrection",
          j = "/settings/steamvr/showAdvancedSettings",
          $ = "/settings/dashboard/lastAccessedExternalOverlayKey",
          q = "/settings/internal/dashboardInitialOverlay",
          K = "/settings/dashboard/position_2",
          X = "/settings/dashboard/theaterCurvature",
          J = "/settings/dashboard/theaterScreenSize",
          Q = "/settings/dashboard/theaterScreenAlignment",
          Y = "/settings/collisionBounds/CollisionBoundsFadeDistance",
          ee = "/settings/camera/roomView",
          te = "/settings/camera/enableCamera",
          ne = "/settings/dashboard/enableWindowView",
          oe = "/settings/dashboard/maxInlineTabs",
          re = "/settings/steamvr/maxRecommendedResolution",
          ie = "/settings/steamvr/disableKeyboardPrivacy",
          se = "/settings/camera/lightSourceFrequency",
          ae = "/settings/dashboard/expectSteam",
          le = "/settings/dashboard/allowLegacyControlBar",
          de = "/settings/openxr/metaUnityPluginCompatibility",
          ue = "/settings/input/overlayFilteringEnabled",
          ce = "/settings/input/overlayFilteringMinCutoff",
          pe = "/settings/input/overlayFilteringBeta",
          me = "/settings/input/overlayFilteringDerivCutoff",
          he = "/settings/input/overlayMagnetismEnabled",
          ve = "/settings/input/overlayMagnetismLockDistance",
          ge = "/settings/input/overlayMagnetismDeadZone";
      },
      2563: (e, t, n) => {
        "use strict";
        n.d(t, {
          DE: () => U,
          DN: () => W,
          Fu: () => Z,
          G3: () => R,
          HA: () => P,
          Hz: () => V,
          L_: () => T,
          MA: () => z,
          N2: () => q,
          OR: () => A,
          OT: () => x,
          R0: () => B,
          Te: () => O,
          Tr: () => $,
          WO: () => F,
          bR: () => D,
          gZ: () => N,
          oZ: () => K,
        });
        var o,
          r = n(1635),
          i = n(6090),
          s = n(3236),
          a = n(7813),
          l = n(4015),
          d = n(6540),
          u = n(6138),
          c = n(6731),
          p = n(5615),
          m = n(917),
          h = n(4963),
          v = n(924),
          g = n(3606),
          _ = n(3714),
          f = n(6575),
          C = n(1139),
          y = n(3473),
          b = n(1333),
          L = n(5735),
          E = n.n(L),
          M = n(998),
          S = n(9283),
          w = n(1835);
        const R = new a.Es();
        function x(e) {
          const { summonOverlayKey: t } = e,
            { ids: n, anchors: o } = d.useMemo(() => {
              const e = "DashboardPanel_" + t,
                n = {
                  strTopCenterAnchorID: e + "_TopCenter",
                  strCenterLeftAnchorID: e + "_CenterLeft",
                  strCenterRightAnchorID: e + "_CenterRight",
                  strBottomCenterAnchorID: e + "_BottomCenter",
                  strBottomRightAnchorID: e + "_BottomRight",
                };
              return {
                ids: n,
                anchors: d.createElement(
                  d.Fragment,
                  null,
                  d.createElement(i.Ci, {
                    id: n.strTopCenterAnchorID,
                    location: i.Oi.TopCenter,
                  }),
                  d.createElement(i.Ci, {
                    id: n.strCenterLeftAnchorID,
                    location: i.Oi.CenterLeft,
                  }),
                  d.createElement(i.Ci, {
                    id: n.strCenterRightAnchorID,
                    location: i.Oi.CenterRight,
                  }),
                  d.createElement(i.Ci, {
                    id: n.strBottomCenterAnchorID,
                    location: i.Oi.BottomCenter,
                  }),
                  d.createElement(i.Ci, {
                    id: n.strBottomRightAnchorID,
                    location: i.Oi.BottomRight,
                  }),
                ),
              };
            }, [t]);
          return (
            d.useEffect(
              () => (
                R.set(t, n),
                () => {
                  R.get(t) === n && R.delete(t);
                }
              ),
              [t, n],
            ),
            t ? o : null
          );
        }
        const T = (0, l.PA)(function (e) {
            return d.createElement(
              k,
              Object.assign({}, e, { VRGamepadUI: w.SW.isVRGamepadUI }),
            );
          }),
          k = (e) => {
            var t, n, o;
            const r = e.VRGamepadUI,
              s = d.useRef(null),
              a = d.useRef(null),
              l = null === (t = e.scrollable) || void 0 === t || t,
              m =
                null !== (n = e.foregroundReflectMultiplier) && void 0 !== n
                  ? n
                  : 1,
              h =
                null ===
                  (o = b.HR.settings.get(
                    "/settings/dashboard/allowCurvature",
                  )) ||
                void 0 === o ||
                o
                  ? g.uv
                  : null;
            return d.createElement(
              d.Fragment,
              null,
              d.createElement(
                i.Zk,
                {
                  visibility: e.visible ? i.Fi.Visible : i.Fi.Hidden,
                  debug_name: "homepanelbackground",
                  curvature_origin_id: h,
                  origin: i.Oi.BottomCenter,
                  interactive: !1,
                  scrollable: !1,
                  meters_per_pixel: r ? void 0 : 2 * g.iZ,
                  width: r ? 2.67 : void 0,
                  reflect: r ? 0 : 0.01,
                  sampler: i._h.SingleTap,
                },
                d.createElement(x, { summonOverlayKey: e.summonOverlayKey }),
                d.createElement(
                  c.u0,
                  { ref: s },
                  d.createElement("div", {
                    className: (0, C.FH)(
                      "DashboardPanelBackground",
                      e.additionalClassNames,
                    ),
                    style: e.additionalStyle,
                  }),
                ),
              ),
              d.createElement(
                i.dL,
                { translation: { z: 1e-5 } },
                d.createElement(
                  i.Zk,
                  {
                    id: "dashboard_widget_panel_id",
                    visibility: e.visible ? i.Fi.Visible : i.Fi.Hidden,
                    debug_name: e.debugName,
                    curvature_origin_id: h,
                    origin: i.Oi.BottomCenter,
                    interactive: !0,
                    scrollable: l,
                    meters_per_pixel: r ? void 0 : g.iZ,
                    reflect: r ? void 0 : 0.2 * m,
                    width: r ? 2.67 : void 0,
                  },
                  d.createElement(
                    c.vw,
                    { ref: a },
                    d.createElement(
                      u.W,
                      null,
                      d.createElement(
                        p.M,
                        {
                          scrollDirection: l ? p.D.Vertical : p.D.None,
                          className: (0, C.FH)(
                            "DashboardPanel",
                            e.additionalClassNames,
                          ),
                          style: e.additionalStyle,
                        },
                        e.children,
                      ),
                    ),
                  ),
                ),
              ),
            );
          };
        function D() {
          return d.createElement(
            "div",
            { className: "ActivitySpinner" },
            d.createElement("div", { className: "Bar" }),
            d.createElement("div", { className: "Bar" }),
            d.createElement("div", { className: "Bar" }),
          );
        }
        class P extends d.Component {
          constructor(e) {
            super(e), (this.state = { time: new Date() });
          }
          componentDidMount() {
            let e = 60 - (new Date().getSeconds() % 60) + 0.01;
            this.m_clockUpdateTimeout = window.setTimeout(
              this.updateTime,
              1e3 * e,
            );
          }
          componentWillUnmount() {
            clearTimeout(this.m_clockUpdateTimeout);
          }
          updateTime() {
            this.setState({ time: new Date() }),
              (this.m_clockUpdateTimeout = window.setTimeout(
                this.updateTime,
                6e4,
              ));
          }
          render() {
            const e = _.A0.GetLocale();
            let t = this.state.time.toLocaleTimeString(e, {
                hour: "numeric",
                minute: "2-digit",
              }),
              n = null;
            const o = t.toLowerCase(),
              r = Math.max(o.lastIndexOf("am"), o.lastIndexOf("pm"));
            return (
              r >= 0 && ((n = t.substring(r)), (t = t.substring(0, r - 1))),
              d.createElement(
                "div",
                { className: "ClockContainer" },
                d.createElement(
                  "div",
                  { className: "Clock" },
                  t,
                  " ",
                  d.createElement("span", { className: "Suffix" }, n),
                ),
              )
            );
          }
        }
        function V(e) {
          return d.createElement(
            u.$,
            { className: "PowerMenuButton", onClick: e.onClick },
            d.createElement("div", { className: "HoverGradient" }),
            d.createElement("div", { className: "ClickGradient" }),
            d.createElement("span", null, e.label),
            e.lineBelow && d.createElement("div", { className: "LineBelow" }),
          );
        }
        (0, r.Cg)([s.o], P.prototype, "updateTime", null);
        let H = class extends d.Component {
          constructor(e) {
            super(e), (0, a.Gn)(this);
          }
          get isShowingTooltip() {
            return w.SW.s_ControlBarCurrentlyShownTooltip === this;
          }
          show() {
            w.SW.s_ControlBarCurrentlyShownTooltip = this;
          }
          hide() {
            this.isShowingTooltip &&
              (w.SW.s_ControlBarCurrentlyShownTooltip = null);
          }
          render() {
            var e;
            const t =
                this.props.text && (this.props.shown || this.isShowingTooltip),
              n = this.props.translation
                ? this.props.translation
                : { x: 0, y: -0.2, z: 0.05 },
              o =
                null ===
                  (e = b.HR.settings.get(
                    "/settings/dashboard/allowCurvature",
                  )) ||
                void 0 === e ||
                e
                  ? g.uv
                  : null;
            return d.createElement(
              "div",
              { style: { position: "absolute", left: "50%", top: "50%" } },
              d.createElement(
                f.l,
                { allowableParentSelectors: [".DashboardMain"] },
                d.createElement(
                  i.dL,
                  { translation: n },
                  d.createElement(
                    i.Zk,
                    {
                      visibility: t ? i.Fi.Visible : i.Fi.SkipInSceneGraph,
                      meters_per_pixel: g.iZ,
                      curvature_origin_id: o,
                      debug_name: "control-bar-tooltip",
                    },
                    d.createElement(
                      "div",
                      { className: "ControlBarButtonTooltip" },
                      this.props.text,
                    ),
                  ),
                ),
              ),
            );
          }
        };
        (0, r.Cg)([a.EW], H.prototype, "isShowingTooltip", null),
          (0, r.Cg)([a.XI.bound], H.prototype, "show", null),
          (0, r.Cg)([a.XI.bound], H.prototype, "hide", null),
          (H = (0, r.Cg)([l.PA], H));
        class I extends d.Component {
          static ShouldInvertThumbnail(e) {
            if (!e) return !1;
            if (((e = e.toLowerCase()), !I.s_mapShouldInvertThumbnail.has(e))) {
              let t = !1;
              e.endsWith(".svg") && (t = !0),
                e.startsWith("data:") &&
                  I.k_rsThumbnailHashesToInvert.indexOf(E().hash(e)) >= 0 &&
                  (t = !0),
                I.s_mapShouldInvertThumbnail.set(e, t);
            }
            return I.s_mapShouldInvertThumbnail.get(e);
          }
          render() {
            var e;
            const t = null !== (e = this.props.shadow) && void 0 !== e && e,
              n = I.ShouldInvertThumbnail(this.props.src);
            return d.createElement(
              "div",
              { className: "Icon" },
              t &&
                d.createElement("img", {
                  className: "Shadow",
                  src: this.props.src,
                }),
              d.createElement("img", {
                className: (0, C.FH)(["BlackToWhite", n]),
                src: this.props.src,
              }),
            );
          }
        }
        var N, B;
        (I.k_rsThumbnailHashesToInvert = [
          "5cbd0ebd6459cdaf75fdcafc5051f4e0",
          "c77452e60fc29227b33773ff6e74f8a1",
          "44b62220b39ba717fbfc65e3b4225491",
          "86bbab56235b55f6e5e7d288342931d7",
        ]),
          (I.s_mapShouldInvertThumbnail = new Map()),
          (function (e) {
            (e[(e.Large = 0)] = "Large"),
              (e[(e.Small = 1)] = "Small"),
              (e[(e.App = 2)] = "App");
          })(N || (N = {})),
          (function (e) {
            (e[(e.Center = 0)] = "Center"), (e[(e.Fill = 1)] = "Fill");
          })(B || (B = {}));
        const A = (e) =>
          d.createElement(
            "div",
            { className: (0, C.FH)("ControlBarGroup", N[e.style]) },
            e.children,
          );
        let O = class extends d.Component {
          constructor(e) {
            super(e), (this.m_refTooltip = d.createRef());
          }
          onMouseEnter() {
            var e, t, n;
            null === (e = this.m_refTooltip.current) ||
              void 0 === e ||
              e.show(),
              null === (n = (t = this.props).onMouseEnter) ||
                void 0 === n ||
                n.call(t);
          }
          onMouseLeave() {
            var e, t, n;
            null === (e = this.m_refTooltip.current) ||
              void 0 === e ||
              e.hide(),
              null === (n = (t = this.props).onMouseLeave) ||
                void 0 === n ||
                n.call(t);
          }
          render() {
            var e;
            return d.createElement(
              u.$,
              {
                className: (0, C.FH)(
                  "ControlBarButton",
                  this.props.additionalClassNames,
                  B[
                    null !== (e = this.props.imageStyle) && void 0 !== e
                      ? e
                      : B.Center
                  ] + "Image",
                  ["Disabled", !1 === this.props.enabled],
                  ["Active", !!this.props.active],
                ),
                style: {
                  "--image-url": this.props.imageUrl
                    ? "url('" + this.props.imageUrl + "')"
                    : void 0,
                },
                onClick: this.props.onClick,
                onMouseDown: this.props.onMouseDown,
                onMouseEnter: this.onMouseEnter,
                onMouseLeave: this.onMouseLeave,
                releaseSoundEffect: h.j.ControlBarButtonClick,
              },
              this.props.centerPanelAnchorID &&
                d.createElement(
                  "div",
                  { style: { position: "absolute", left: "50%", top: "50%" } },
                  d.createElement(f.l, {
                    allowableParentSelectors: [".DashboardMain"],
                    panelAnchorID: this.props.centerPanelAnchorID,
                  }),
                ),
              d.createElement(H, {
                text: this.props.label,
                ref: this.m_refTooltip,
              }),
              d.createElement(I, { src: this.props.imageUrl }),
            );
          }
        };
        (0, r.Cg)([s.o], O.prototype, "onMouseEnter", null),
          (0, r.Cg)([s.o], O.prototype, "onMouseLeave", null),
          (O = (0, r.Cg)([l.PA], O));
        const F = (e) =>
          d.createElement(
            A,
            { style: e.style },
            d.createElement(O, Object.assign({}, e)),
          );
        class Z extends d.Component {
          constructor(e) {
            super(e),
              (this.m_BatteryStateChangedCallbackHandle = null),
              (this.m_DeviceRoleChangedCallbackHandle = null),
              (this.m_DeviceEventCallbackHandle = null),
              (this.deviceIndex = i.ne),
              (this.batteryLevelStable = null),
              (this.devicePowerUsage = null),
              (this.state = { batteryIconPath: null });
          }
          componentDidMount() {
            (this.m_BatteryStateChangedCallbackHandle =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.RegisterForBatteryStateChangedEvents(
                    this.onBatteryStateChanged,
                  )),
              (this.m_DeviceRoleChangedCallbackHandle =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.RegisterForDeviceRoleChangedEvents(
                      this.onDeviceRoleChanged,
                    )),
              (this.m_DeviceEventCallbackHandle =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.RegisterForDeviceEvents(this.onDeviceEvent)),
              this.update();
          }
          componentWillUnmount() {
            var e, t, n;
            null === (e = this.m_BatteryStateChangedCallbackHandle) ||
              void 0 === e ||
              e.unregister(),
              null === (t = this.m_DeviceRoleChangedCallbackHandle) ||
                void 0 === t ||
                t.unregister(),
              null === (n = this.m_DeviceEventCallbackHandle) ||
                void 0 === n ||
                n.unregister();
          }
          updateControllerStatus() {
            if (!VRHTML) return;
            let e = !1,
              t = !1,
              n = i.ne;
            if (
              (void 0 !== this.props.role
                ? (n = VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                    this.props.role,
                  ))
                : void 0 !== this.props.deviceIndex &&
                  (n = this.props.deviceIndex),
              n != this.deviceIndex &&
                ((this.batteryLevelStable = null),
                (this.devicePowerUsage = null),
                (this.deviceIndex = n)),
              n != i.ne)
            ) {
              if (
                ((e = VRHTML.VRProperties.GetBoolProperty(
                  n,
                  i.fD.DeviceProvidesBatteryStatus_Bool,
                )),
                e)
              ) {
                const e = VRHTML.VRProperties.GetFloatProperty(
                  n,
                  i.fD.DeviceBatteryPercentage_Float,
                );
                (t = VRHTML.VRProperties.GetBoolProperty(
                  n,
                  i.fD.DeviceIsCharging_Bool,
                )),
                  null == this.batteryLevelStable ||
                  0 == this.batteryLevelStable
                    ? (this.batteryLevelStable = e)
                    : ((this.batteryLevelStable = Math.min(
                        this.batteryLevelStable,
                        e + Z.kBatteryLevelHysteresis,
                        1,
                      )),
                      (this.batteryLevelStable = Math.max(
                        this.batteryLevelStable,
                        e - Z.kBatteryLevelHysteresis,
                        0,
                      )));
              }
              this.devicePowerUsage = VRHTML.VRProperties.GetFloatProperty(
                n,
                i.fD.DevicePowerUsage_Float,
              );
            }
            let o = M.C.GetBatteryIcon(
              e,
              t,
              this.batteryLevelStable,
              this.props.style,
            );
            o != this.state.batteryIconPath &&
              this.setState({ batteryIconPath: o });
          }
          update() {
            window.setTimeout(this.updateControllerStatus, 0);
          }
          onBatteryStateChanged(e) {
            this.update();
          }
          onDeviceRoleChanged() {
            this.update();
          }
          onDeviceEvent(e, t, n) {
            (e != i.ku.Activated && e != i.ku.Deactivated) || this.update();
          }
          render() {
            return d.createElement(
              "div",
              { className: "BatteryStatus" },
              this.devicePowerUsage &&
                d.createElement(
                  "div",
                  { className: "Label" },
                  " ",
                  Math.round(10 * this.devicePowerUsage) / 10,
                  " W ",
                ),
              d.createElement("img", { src: this.state.batteryIconPath }),
            );
          }
        }
        (Z.kBatteryLevelHysteresis = 0.02),
          (0, r.Cg)([s.o], Z.prototype, "updateControllerStatus", null),
          (0, r.Cg)([s.o], Z.prototype, "onBatteryStateChanged", null),
          (0, r.Cg)([s.o], Z.prototype, "onDeviceRoleChanged", null),
          (0, r.Cg)([s.o], Z.prototype, "onDeviceEvent", null);
        d.Component;
        const z = (e) =>
          d.createElement(
            "div",
            { className: "Title" },
            e.iconUrl && d.createElement(I, { src: e.iconUrl, shadow: !0 }),
            d.createElement("span", { className: "NoWrapText" }, e.name),
          );
        class U extends d.Component {
          constructor() {
            super(...arguments),
              (this.m_sAnchorID = Math.round(1e7 * Math.random()).toString()),
              (this.m_resizeObserver = null),
              (this.m_refPanelElem = d.createRef()),
              (this.m_refBackgroundElem = d.createRef());
          }
          componentWillUnmount() {
            this.m_resizeObserver &&
              (this.m_resizeObserver.disconnect(),
              (this.m_resizeObserver = null));
          }
          componentDidUpdate() {
            this.updateBackgroundSize();
          }
          onResizeObserved(e, t) {
            this.updateBackgroundSize();
          }
          updateBackgroundSize() {
            this.m_refPanelElem.current &&
              this.m_refBackgroundElem.current &&
              ((this.m_refBackgroundElem.current.style.width =
                this.m_refPanelElem.current.clientWidth / 2 + "px"),
              (this.m_refBackgroundElem.current.style.height =
                this.m_refPanelElem.current.clientHeight / 2 + "px"));
          }
          onPortalDidMount() {
            this.m_refPanelElem.current &&
              ((this.m_resizeObserver = new ResizeObserver(
                this.onResizeObserved,
              )),
              this.m_resizeObserver.observe(this.m_refPanelElem.current),
              this.updateBackgroundSize());
          }
          render() {
            var e, t, n;
            const o = this.props.position,
              r = Math.asin(o) / Math.PI,
              s = null !== (e = this.props.scale) && void 0 !== e ? e : 1;
            return d.createElement(
              d.Fragment,
              null,
              d.createElement(
                i.Ci,
                { location: { x: o, y: -1 } },
                d.createElement(i.dL, {
                  id: this.m_sAnchorID,
                  translation: {
                    y: 0.01 * Math.abs(r),
                    z: -0.03 * Math.abs(r),
                  },
                  rotation: { y: 15 * r, z: 2 * r },
                }),
              ),
              d.createElement(
                f.b,
                {
                  allowableParentSelectors: [".DashboardMain"],
                  onPortalDidMount: this.onPortalDidMount,
                },
                d.createElement(
                  i.N,
                  { color: this.props.tintColor },
                  d.createElement(
                    v.Sv,
                    {
                      additionalClassName: "ControlBarTrayAnimation",
                      visible: this.props.visible,
                      duration: 0.25,
                      onStartShowing: this.updateBackgroundSize,
                      onShown: this.updateBackgroundSize,
                    },
                    d.createElement(
                      i.dL,
                      {
                        parent_id: this.m_sAnchorID,
                        translation: { y: 0.04 * s, z: -0.01 },
                        scale: s,
                      },
                      d.createElement(
                        i.Zk,
                        {
                          curvature_origin_id:
                            null !== (t = this.props.curvatureOriginId) &&
                            void 0 !== t
                              ? t
                              : null,
                          origin: i.Oi.TopCenter,
                          interactive: !0,
                          scrollable: !0,
                          meters_per_pixel: g.iZ,
                          sort_depth_bias: this.props.sort_depth_bias,
                          debug_name: "control-bar-tray",
                        },
                        d.createElement(
                          "div",
                          {
                            className: (0, C.FH)(
                              "ControlBarTray",
                              this.props.additionalClassNames,
                            ),
                            onMouseEnter: this.props.onMouseEnter,
                            onMouseMove: this.props.onMouseMove,
                            onMouseLeave: this.props.onMouseLeave,
                            ref: this.m_refPanelElem,
                          },
                          this.props.children,
                        ),
                      ),
                      d.createElement(
                        i.dL,
                        { translation: { z: -1e-5 } },
                        d.createElement(
                          i.Zk,
                          {
                            curvature_origin_id:
                              null !== (n = this.props.curvatureOriginId) &&
                              void 0 !== n
                                ? n
                                : null,
                            origin: i.Oi.TopCenter,
                            interactive: !1,
                            scrollable: !1,
                            meters_per_pixel: 2 * g.iZ,
                            reflect: 0.005,
                            sampler: i._h.SingleTap,
                            sort_depth_bias: this.props.sort_depth_bias,
                            debug_name: "control-bar-tray-bg",
                          },
                          d.createElement("div", {
                            className: "ControlBarTrayBackground",
                            ref: this.m_refBackgroundElem,
                          }),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            );
          }
        }
        (0, r.Cg)([s.o], U.prototype, "onResizeObserved", null),
          (0, r.Cg)([s.o], U.prototype, "updateBackgroundSize", null),
          (0, r.Cg)([s.o], U.prototype, "onPortalDidMount", null);
        let W = class extends d.Component {
          constructor() {
            super(...arguments),
              (this.m_refSlider = d.createRef()),
              (this.m_refTray = d.createRef()),
              (this.m_bMouseInSlider = !1);
          }
          get slider() {
            return this.m_refSlider.current;
          }
          onSliderMouseEnter() {
            this.m_bMouseInSlider = !0;
          }
          onSliderMouseLeave() {
            this.m_bMouseInSlider = !1;
          }
          onSliderFinalChange() {
            var e, t;
            this.m_bMouseInSlider ||
              null === (t = (e = this.props).onFinalChangeMouseOutside) ||
              void 0 === t ||
              t.call(e);
          }
          get showAudioMirrorControls() {
            return (
              b.HR.settings.get(
                "/settings/audio/enablePlaybackMirrorIndependentVolume",
              ) && b.HR.settings.get("/settings/audio/enablePlaybackMirror")
            );
          }
          get enableAudioMirrorControls() {
            return !!b.HR.settings.get(
              "/settings/audio/activePlaybackMirrorDevice",
            );
          }
          render() {
            const e =
              (this.showAudioMirrorControls ? 3 : 2) >= 3
                ? 0
                : this.props.position;
            return d.createElement(
              U,
              Object.assign({}, this.props, {
                position: e,
                ref: this.m_refTray,
                additionalClassNames: "VolumeTray",
              }),
              d.createElement(
                "div",
                { className: "Section" },
                d.createElement(
                  j,
                  {
                    onClick: y.f.Instance.toggleMicrophoneMute,
                    title: y.f.Instance.microphoneMuted
                      ? (0, _.we)("#UnmuteMicrophone")
                      : (0, _.we)("#MuteMicrophone"),
                  },
                  d.createElement("img", {
                    className: "BlackToWhite",
                    src: y.f.Instance.microphoneMuted
                      ? "/dashboard/images/icons/svr_mic_mute.svg"
                      : "/dashboard/images/icons/svr_mic_active.svg",
                  }),
                ),
                d.createElement(G, {
                  title: (0, _.we)("#MicrophoneVolume"),
                  value: y.f.Instance.microphoneVolume,
                  onChange: y.f.Instance.setMicrophoneVolume,
                  onMouseEnter: this.onSliderMouseEnter,
                  onMouseLeave: this.onSliderMouseLeave,
                  onFinalChange: this.onSliderFinalChange,
                  renderValue: (e) => Math.round(100 * e) + "%",
                  valueStyleVariant: m.Te.OnHandle,
                  additionalClassName: (0, C.FH)([
                    "Muted",
                    y.f.Instance.microphoneMuted,
                  ]),
                  interactionEndSoundEffect: h.j.VolumePreview,
                }),
              ),
              this.showAudioMirrorControls &&
                d.createElement(
                  "div",
                  { className: "Section" },
                  d.createElement(
                    j,
                    {
                      onClick: y.f.Instance.toggleMirrorMute,
                      enabled: this.enableAudioMirrorControls,
                      title: y.f.Instance.mirrorMuted
                        ? (0, _.we)("#UnmuteAudioMirror")
                        : (0, _.we)("#MuteAudioMirror"),
                    },
                    d.createElement("img", {
                      className: "BlackToWhite",
                      src: y.f.Instance.mirrorMuted
                        ? "/dashboard/images/icons/svr_volume_mirror_mute.svg"
                        : "/dashboard/images/icons/svr_volume_mirror.svg",
                    }),
                  ),
                  d.createElement(G, {
                    title: (0, _.we)("#AudioMirrorVolume"),
                    value: y.f.Instance.mirrorVolume,
                    enabled: this.enableAudioMirrorControls,
                    onChange: y.f.Instance.setMirrorVolume,
                    onMouseEnter: this.onSliderMouseEnter,
                    onMouseLeave: this.onSliderMouseLeave,
                    onFinalChange: this.onSliderFinalChange,
                    renderValue: (e) => Math.round(100 * e) + "%",
                    valueStyleVariant: m.Te.OnHandle,
                    additionalClassName: (0, C.FH)([
                      "Muted",
                      y.f.Instance.mirrorMuted,
                    ]),
                    interactionEndSoundEffect: h.j.VolumePreview,
                  }),
                ),
              d.createElement(
                "div",
                { className: "Section" },
                d.createElement(
                  j,
                  {
                    onClick: y.f.Instance.toggleMute,
                    title: y.f.Instance.muted
                      ? (0, _.we)("#Unmute_Headset")
                      : (0, _.we)("#Mute_Headset"),
                  },
                  d.createElement("img", {
                    className: "BlackToWhite",
                    src: y.f.Instance.muted
                      ? "/dashboard/images/icons/svr_volume_mute.svg"
                      : "/dashboard/images/icons/svr_volume.svg",
                  }),
                ),
                d.createElement(G, {
                  title: (0, _.we)("#HeadsetVolume"),
                  sliderRef: this.m_refSlider,
                  value: y.f.Instance.volume,
                  onChange: y.f.Instance.setVolume,
                  onMouseEnter: this.onSliderMouseEnter,
                  onMouseLeave: this.onSliderMouseLeave,
                  onFinalChange: this.onSliderFinalChange,
                  renderValue: (e) => Math.round(100 * e) + "%",
                  valueStyleVariant: m.Te.OnHandle,
                  additionalClassName: (0, C.FH)(["Muted", y.f.Instance.muted]),
                  interactionEndSoundEffect: h.j.VolumePreview,
                }),
              ),
            );
          }
        };
        (0, r.Cg)([s.o], W.prototype, "onSliderMouseEnter", null),
          (0, r.Cg)([s.o], W.prototype, "onSliderMouseLeave", null),
          (0, r.Cg)([s.o], W.prototype, "onSliderFinalChange", null),
          (0, r.Cg)([a.EW], W.prototype, "showAudioMirrorControls", null),
          (0, r.Cg)([a.EW], W.prototype, "enableAudioMirrorControls", null),
          (W = (0, r.Cg)([l.PA], W));
        let G = class extends d.Component {
          constructor(e) {
            super(e), (this.state = { bSliding: !1, bHover: !1 });
          }
          onMouseEnter(e) {
            var t, n;
            this.setState({ bHover: !0 }),
              null === (n = (t = this.props).onMouseEnter) ||
                void 0 === n ||
                n.call(t, e);
          }
          onMouseLeave(e) {
            var t, n;
            this.setState({ bHover: !1 }),
              null === (n = (t = this.props).onMouseLeave) ||
                void 0 === n ||
                n.call(t, e);
          }
          onInteractionStart() {
            var e, t;
            this.setState({ bSliding: !0 }),
              null === (t = (e = this.props).onInteractionStart) ||
                void 0 === t ||
                t.call(e);
          }
          onInteractionEnd() {
            var e, t;
            this.setState({ bSliding: !1 }),
              null === (t = (e = this.props).onInteractionEnd) ||
                void 0 === t ||
                t.call(e);
          }
          render() {
            let e = Object.assign({}, this.props);
            return d.createElement(
              "div",
              { className: "SliderContainer" },
              this.props.title &&
                d.createElement(H, {
                  text: this.props.title,
                  shown: this.state.bHover || this.state.bSliding,
                }),
              d.createElement(
                m.Ap,
                Object.assign({}, e, {
                  onMouseEnter: this.onMouseEnter,
                  onMouseLeave: this.onMouseLeave,
                  onInteractionStart: this.onInteractionStart,
                  onInteractionEnd: this.onInteractionEnd,
                  ref: this.props.sliderRef,
                }),
              ),
            );
          }
        };
        (0, r.Cg)([s.o], G.prototype, "onMouseEnter", null),
          (0, r.Cg)([s.o], G.prototype, "onMouseLeave", null),
          (0, r.Cg)([s.o], G.prototype, "onInteractionStart", null),
          (0, r.Cg)([s.o], G.prototype, "onInteractionEnd", null),
          (G = (0, r.Cg)([l.PA], G));
        let j = class extends d.Component {
          constructor(e) {
            super(e), (this.m_refTooltip = d.createRef());
          }
          onMouseEnter(e) {
            var t, n, o;
            null === (t = this.m_refTooltip.current) ||
              void 0 === t ||
              t.show(),
              null === (o = (n = this.props).onMouseEnter) ||
                void 0 === o ||
                o.call(n, e);
          }
          onMouseLeave(e) {
            var t, n, o;
            null === (t = this.m_refTooltip.current) ||
              void 0 === t ||
              t.hide(),
              null === (o = (n = this.props).onMouseLeave) ||
                void 0 === o ||
                o.call(n, e);
          }
          render() {
            return d.createElement(
              u.$,
              Object.assign({}, this.props, {
                className: (0, C.FH)(
                  "ButtonControl",
                  "Round",
                  this.props.className,
                ),
                onMouseEnter: this.onMouseEnter,
                onMouseLeave: this.onMouseLeave,
              }),
              this.props.title &&
                d.createElement(H, {
                  text: this.props.title,
                  ref: this.m_refTooltip,
                }),
              this.props.children,
            );
          }
        };
        (0, r.Cg)([s.o], j.prototype, "onMouseEnter", null),
          (0, r.Cg)([s.o], j.prototype, "onMouseLeave", null),
          (j = (0, r.Cg)([l.PA], j));
        let $ = (o = class extends d.Component {
          constructor() {
            super(...arguments), (this.m_vecOriginalMousePosition = null);
          }
          componentWillUnmount() {
            this.stopSliding();
          }
          get slider() {
            var e;
            return null === (e = this.props.refVolumeTray.current) ||
              void 0 === e
              ? void 0
              : e.slider;
          }
          onButtonMouseDown(e) {
            var t, n;
            (this.m_vecOriginalMousePosition = { x: e.clientX, y: e.clientY }),
              window.document.addEventListener("mouseup", this.onWindowMouseUp),
              window.document.addEventListener(
                "mousemove",
                this.onWindowMouseMove,
              ),
              null === (n = (t = this.props).onShowTray) ||
                void 0 === n ||
                n.call(t);
          }
          onWindowMouseMove(e) {
            if (!this.slider || this.slider.isSliding) return;
            const t = { x: e.clientX, y: e.clientY };
            (0, i.NH)((0, i.QB)(t, this.m_vecOriginalMousePosition)) >
              o.MIN_DRAG_THRESHOLD && this.startSliding(t);
          }
          onWindowMouseUp(e) {
            this.stopSliding();
          }
          startSliding(e) {
            var t;
            null === (t = this.slider) ||
              void 0 === t ||
              t.startExternalSliding(e);
          }
          stopSliding() {
            var e, t, n, o;
            window.document.removeEventListener(
              "mouseup",
              this.onWindowMouseUp,
            ),
              window.document.removeEventListener(
                "mousemove",
                this.onWindowMouseMove,
              ),
              (null === (e = this.slider) || void 0 === e
                ? void 0
                : e.isSliding) &&
                (null === (n = (t = this.props).onHideTray) ||
                  void 0 === n ||
                  n.call(t)),
              null === (o = this.slider) ||
                void 0 === o ||
                o.stopExternalSliding();
          }
          render() {
            return d.createElement(O, {
              imageUrl: y.f.Instance.muted
                ? "/dashboard/images/icons/svr_volume_mute.svg"
                : "/dashboard/images/icons/svr_volume.svg",
              active: this.props.active,
              label: this.props.active ? null : (0, _.we)("#Volume"),
              onMouseDown: this.onButtonMouseDown,
              onMouseEnter: this.props.onMouseEnter,
              onMouseLeave: this.props.onMouseLeave,
            });
          }
        });
        ($.MIN_DRAG_THRESHOLD = 35),
          (0, r.Cg)([s.o], $.prototype, "onButtonMouseDown", null),
          (0, r.Cg)([s.o], $.prototype, "onWindowMouseMove", null),
          (0, r.Cg)([s.o], $.prototype, "onWindowMouseUp", null),
          ($ = o = (0, r.Cg)([l.PA], $));
        const q = (e) => {
          var t;
          const n = d.useRef(void 0);
          return d.createElement(
            u.$,
            {
              className: (0, C.FH)(
                "ButtonControl",
                ["Active", e.active],
                ["WithIcon", !!e.iconUrl || !!e.icon],
                e.additionalClassNames,
              ),
              onClick: e.onClick,
              onMouseDown: e.onMouseDown,
              onMouseUp: e.onMouseUp,
              onMouseEnter: () => {
                var t;
                null === (t = n.current) || void 0 === t || t.show(),
                  e.onMouseEnter && e.onMouseEnter();
              },
              onMouseLeave: () => {
                var t;
                null === (t = n.current) || void 0 === t || t.hide(),
                  e.onMouseLeave && e.onMouseLeave();
              },
              enabled: e.enabled,
            },
            e.title &&
              d.createElement(H, {
                text: e.title,
                translation: e.tooltipTranslation,
                ref: n,
              }),
            e.label && d.createElement("span", null, e.label),
            e.iconUrl &&
              d.createElement("img", {
                className: (0, S.A)(
                  "Icon",
                  (null === (t = e.iconIsInverted) || void 0 === t || t) &&
                    "BlackToWhite",
                ),
                src: e.iconUrl,
              }),
            !e.iconUrl && e.icon,
          );
        };
        function K(e) {
          var t, n;
          const o = (0, C.Nc)(),
            r =
              null !== (t = null == o ? void 0 : o.visible) &&
              void 0 !== t &&
              t &&
              e.overlayKey == o.overlayKey,
            s = d.useRef(!1),
            a =
              null === (n = e.showTooltip) || void 0 === n || n
                ? r
                  ? (0, _.we)("#HideKeyboardTooltip")
                  : (0, _.we)("#ShowKeyboardTooltip")
                : void 0;
          return d.createElement(
            q,
            Object.assign(
              {
                iconUrl: "/dashboard/images/icons/svr_keyboard.svg",
                title: a,
                additionalClassNames: (0, C.FH)(
                  "Keyboard",
                  e.additionalClassNames,
                ),
                onMouseDown: () => {
                  s.current = r;
                },
                onClick: () => {
                  if (s.current) VRHTML.VROverlay.HideKeyboard();
                  else {
                    let t =
                      i.QR.Minimal | i.QR.HideDoneKey | i.QR.ShowArrowKeys;
                    e.modal && (t |= i.QR.Modal),
                      VRHTML.VROverlay.ShowKeyboardForOverlay(
                        e.overlayKey,
                        i.Xl.Normal,
                        i.b.SingleLine,
                        t,
                        "Desktop Text",
                        1024,
                        "",
                        0,
                      ),
                      VRHTML.VROverlay.SetKeyboardPositionForOverlay(
                        e.overlayKey,
                        {},
                      );
                  }
                },
                active: r,
              },
              e,
            ),
          );
        }
      },
      2156: (e, t, n) => {
        "use strict";
        n.d(t, { F: () => m, O: () => p });
        var o = n(6090),
          r = n(6540),
          i = n(4015),
          s = n(1835),
          a = n(3606),
          l = n(3246);
        function d(e) {
          const { children: t, invertParentPanelPitch: n, pitch: i } = e;
          return n || 0 != i
            ? r.createElement(
                o.dL,
                {
                  invert_parent_panel_pitch: null != n && n,
                  curvature_pitch: null != i ? i : 0,
                },
                t,
              )
            : r.createElement(r.Fragment, null, t);
        }
        function u(e) {
          let { children: t, offsetPixels: n, offsetMeters: i } = e;
          (n = null != n ? n : { x: 0, y: 0, z: 0 }),
            (i = null != i ? i : { x: 0, y: 0, z: 0 });
          const a = (0, o.CU)(
            i,
            (0, o.tx)(n, s.SW.m_fVRGamepadUI_MetersPerPixel),
          );
          return 0 != a.x || 0 != a.y || 0 != a.z
            ? r.createElement(o.dL, { translation: a }, t)
            : r.createElement(r.Fragment, null, t);
        }
        function c(e) {
          const { children: t, rotation: n } = e;
          return null != n && (0 != n.x || 0 != n.y || 0 != n.z)
            ? r.createElement(o.dL, { rotation: n }, t)
            : r.createElement(r.Fragment, null, t);
        }
        function p(e) {
          var t,
            n,
            i,
            l,
            p,
            m,
            h,
            v,
            g,
            _,
            f,
            C,
            y,
            b,
            L,
            E,
            M,
            S,
            w,
            R,
            x,
            T,
            k,
            D,
            P,
            V,
            H,
            I,
            N,
            B,
            A,
            O,
            F,
            Z,
            z,
            U,
            W;
          const { popupRequest: G, reparent: j } = e,
            $ = null == j || j,
            q = {
              x:
                null !==
                  (n =
                    null === (t = G.origin_on_parent) || void 0 === t
                      ? void 0
                      : t.x) && void 0 !== n
                  ? n
                  : 0,
              y:
                null !==
                  (l =
                    null === (i = G.origin_on_parent) || void 0 === i
                      ? void 0
                      : i.y) && void 0 !== l
                  ? l
                  : 0,
            },
            K = {
              x:
                null !==
                  (m =
                    null === (p = G.origin_on_popup) || void 0 === p
                      ? void 0
                      : p.x) && void 0 !== m
                  ? m
                  : 0,
              y:
                null !==
                  (v =
                    null === (h = G.origin_on_popup) || void 0 === h
                      ? void 0
                      : h.y) && void 0 !== v
                  ? v
                  : 0,
            },
            X = {
              u:
                null !==
                  (_ =
                    null === (g = G.clip_rect) || void 0 === g
                      ? void 0
                      : g.u_min) && void 0 !== _
                  ? _
                  : 0,
              v:
                null !==
                  (C =
                    null === (f = G.clip_rect) || void 0 === f
                      ? void 0
                      : f.v_min) && void 0 !== C
                  ? C
                  : 0,
            },
            J = {
              u:
                null !==
                  (b =
                    null === (y = G.clip_rect) || void 0 === y
                      ? void 0
                      : y.u_max) && void 0 !== b
                  ? b
                  : 1,
              v:
                null !==
                  (E =
                    null === (L = G.clip_rect) || void 0 === L
                      ? void 0
                      : L.v_max) && void 0 !== E
                  ? E
                  : 1,
            },
            Q = {
              x:
                null !==
                  (S =
                    null === (M = G.offset) || void 0 === M
                      ? void 0
                      : M.x_pixels) && void 0 !== S
                  ? S
                  : 0,
              y:
                null !==
                  (R =
                    null === (w = G.offset) || void 0 === w
                      ? void 0
                      : w.y_pixels) && void 0 !== R
                  ? R
                  : 0,
              z:
                null !==
                  (T =
                    null === (x = G.offset) || void 0 === x
                      ? void 0
                      : x.z_pixels) && void 0 !== T
                  ? T
                  : 0,
            },
            Y = {
              x:
                null !==
                  (D =
                    null === (k = G.offset) || void 0 === k
                      ? void 0
                      : k.x_meters) && void 0 !== D
                  ? D
                  : 0,
              y:
                null !==
                  (V =
                    null === (P = G.offset) || void 0 === P
                      ? void 0
                      : P.y_meters) && void 0 !== V
                  ? V
                  : 0,
              z:
                null !==
                  (I =
                    null === (H = G.offset) || void 0 === H
                      ? void 0
                      : H.z_meters) && void 0 !== I
                  ? I
                  : 0,
            },
            ee = {
              x:
                null !==
                  (B =
                    null === (N = G.rotation) || void 0 === N
                      ? void 0
                      : N.pitch_degrees) && void 0 !== B
                  ? B
                  : 0,
              y:
                null !==
                  (O =
                    null === (A = G.rotation) || void 0 === A
                      ? void 0
                      : A.yaw_degrees) && void 0 !== O
                  ? O
                  : 0,
            },
            te = null === (F = G.inherit_parent_pitch) || void 0 === F || F,
            ne = null === (Z = G.inherit_parent_curvature) || void 0 === Z || Z,
            oe = null === (z = G.interactive) || void 0 === z || z,
            re = null !== (U = G.requires_laser) && void 0 !== U && U,
            ie =
              1 == (null !== (W = G.sort_order) && void 0 !== W ? W : 0)
                ? 101
                : null,
            se = (function (e) {
              var t, n, o;
              const r =
                  null !== (t = null == e ? void 0 : e.parent_overlay_key) &&
                  void 0 !== t
                    ? t
                    : "",
                i =
                  null !==
                    (o =
                      null === (n = null == e ? void 0 : e.offset) ||
                      void 0 === n
                        ? void 0
                        : n.z_pixels) && void 0 !== o
                    ? o
                    : 0;
              return r == a.Vx && i >= 0 ? -0.5 : 0;
            })(G);
          r.useLayoutEffect(
            () => o.O5.Current().forceLayoutUpdate(),
            [X.u, X.v, J.u, J.v],
          );
          const ae = r.createElement(
            d,
            { invertParentPanelPitch: !te },
            r.createElement(
              u,
              { offsetPixels: Q, offsetMeters: Y },
              r.createElement(
                c,
                { rotation: ee },
                r.createElement(o.Zk, {
                  debug_name: `VRGamepadUI-PooledPopup-${G.dashboard_popup_request_id}`,
                  interactive: oe,
                  requires_laser: re,
                  curvature: ne ? "inherit-from-parent-panel" : void 0,
                  overlay_key: G.popup_overlay_key,
                  origin: K,
                  meters_per_pixel: s.SW.m_fVRGamepadUI_MetersPerPixel,
                  reflect: 0.03,
                  sort_depth_bias: se,
                  uv_min: X,
                  uv_max: J,
                  sort_order: ie,
                }),
              ),
            ),
          );
          return G.parent_device_path
            ? r.createElement(o.dL, { parent_path: G.parent_device_path }, ae)
            : $
              ? r.createElement(
                  o.b$,
                  {
                    parent_overlay_key: G.parent_overlay_key,
                    key: G.dashboard_popup_request_id,
                  },
                  r.createElement(
                    o.Ci,
                    { key: G.dashboard_popup_request_id, location: q },
                    ae,
                  ),
                )
              : r.createElement(
                  o.Ci,
                  { key: G.dashboard_popup_request_id, location: q },
                  ae,
                );
        }
        const m = (0, i.PA)((e) => {
          const t = l.r.GetActivePooledPopups();
          return r.createElement(
            r.Fragment,
            null,
            t.map((e) =>
              r.createElement(p, {
                popupRequest: e,
                key: e.dashboard_popup_request_id,
              }),
            ),
          );
        });
      },
      4817: (e, t, n) => {
        "use strict";
        var o = n(1635),
          r = n(6540),
          i = n(5338),
          s = n(3236),
          a = n(6090),
          l = n(4015),
          d = n(1333),
          u = n(9728),
          c = n(3696),
          p = n(3606),
          m = n(6138),
          h = n(9471),
          v = n(8313),
          g = function (e, t) {
            return (
              (g =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                }),
              g(e, t)
            );
          };
        function _(e) {
          var t = e.className,
            n = e.counterClockwise,
            o = e.dashRatio,
            i = e.pathRadius,
            s = e.strokeWidth,
            a = e.style;
          return (0, r.createElement)("path", {
            className: t,
            style: Object.assign(
              {},
              a,
              C({ pathRadius: i, dashRatio: o, counterClockwise: n }),
            ),
            d: f({ pathRadius: i, counterClockwise: n }),
            strokeWidth: s,
            fillOpacity: 0,
          });
        }
        function f(e) {
          var t = e.pathRadius,
            n = e.counterClockwise ? 1 : 0;
          return (
            "\n      M 50,50\n      m 0,-" +
            t +
            "\n      a " +
            t +
            "," +
            t +
            " " +
            n +
            " 1 1 0," +
            2 * t +
            "\n      a " +
            t +
            "," +
            t +
            " " +
            n +
            " 1 1 0,-" +
            2 * t +
            "\n    "
          );
        }
        function C(e) {
          var t = e.counterClockwise,
            n = e.dashRatio,
            o = e.pathRadius,
            r = 2 * Math.PI * o,
            i = (1 - n) * r;
          return {
            strokeDasharray: r + "px " + r + "px",
            strokeDashoffset: (t ? -i : i) + "px",
          };
        }
        var y = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            (function (e, t) {
              function n() {
                this.constructor = e;
              }
              g(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((n.prototype = t.prototype), new n()));
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
                n = e.minValue,
                o = e.maxValue;
              return (Math.min(Math.max(t, n), o) - n) / (o - n);
            }),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.circleRatio,
                n = e.className,
                o = e.classes,
                i = e.counterClockwise,
                s = e.styles,
                a = e.strokeWidth,
                l = e.text,
                d = this.getPathRadius(),
                u = this.getPathRatio();
              return (0, r.createElement)(
                "svg",
                {
                  className: o.root + " " + n,
                  style: s.root,
                  viewBox: "0 0 100 100",
                  "data-test-id": "CircularProgressbar",
                },
                this.props.background
                  ? (0, r.createElement)("circle", {
                      className: o.background,
                      style: s.background,
                      cx: 50,
                      cy: 50,
                      r: 50,
                    })
                  : null,
                (0, r.createElement)(_, {
                  className: o.trail,
                  counterClockwise: i,
                  dashRatio: t,
                  pathRadius: d,
                  strokeWidth: a,
                  style: s.trail,
                }),
                (0, r.createElement)(_, {
                  className: o.path,
                  counterClockwise: i,
                  dashRatio: u * t,
                  pathRadius: d,
                  strokeWidth: a,
                  style: s.path,
                }),
                l
                  ? (0, r.createElement)(
                      "text",
                      { className: o.text, style: s.text, x: 50, y: 50 },
                      l,
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
              styles: {
                root: {},
                trail: {},
                path: {},
                text: {},
                background: {},
              },
              text: "",
            }),
            t
          );
        })(r.Component);
        var b = n(1139);
        function L(e) {
          const t = 0.04,
            [n, o] = r.useState(2.5);
          if (
            (r.useEffect(() => {
              n < 0 && (null == e || e.onTrigger());
              const r = setInterval(() => {
                o((e) => e - t);
              }, 40);
              return () => clearInterval(r);
            }, [e, n]),
            n < 0.12)
          )
            return null;
          const i = (100 * n) / 2.5;
          return r.createElement(
            "div",
            { className: "ProgressContainer" },
            r.createElement(y, {
              background: !0,
              backgroundPadding: 2,
              counterClockwise: !0,
              value: i,
            }),
            r.createElement(h.hU, null),
          );
        }
        function E(e) {
          return r.createElement(
            a.dL,
            { parent_path: "/user/head" },
            r.createElement(
              a.dL,
              { translation: { z: -0.5, y: -0.2 } },
              r.createElement(a.FN, null, e),
            ),
          );
        }
        function M(e) {
          return E(
            r.createElement(
              a.Zk,
              { width: 0.08, debug_name: "recenter_countdown" },
              r.createElement(L, Object.assign({}, e)),
            ),
          );
        }
        class S extends r.Component {
          constructor(e) {
            super(e),
              (this.m_deviceEventHandle = null),
              (this.m_progressIndicatorEventHandle = null);
            let t = {
              sIconPath: "",
              sDevicePath: "",
              sInputPath: "",
              sCurrentAction: void 0,
              flProgress: 0,
            };
            this.state = t;
          }
          componentDidMount() {
            VRHTML
              ? ((this.m_progressIndicatorEventHandle =
                  VRHTML.RegisterForProgressIndicatorEvents(
                    this.onProgressIndicatorEvent,
                  )),
                (this.m_deviceEventHandle = VRHTML.RegisterForDeviceEvents(
                  this.onDeviceEvent,
                )))
              : this.setState({
                  sCurrentAction: "/actions/foo/bar",
                  flProgress: 0.63,
                });
          }
          componentWillUnmount() {
            var e, t;
            null === (e = this.m_progressIndicatorEventHandle) ||
              void 0 === e ||
              e.unregister(),
              null === (t = this.m_deviceEventHandle) ||
                void 0 === t ||
                t.unregister();
          }
          onProgressIndicatorEvent(e, t, n, o, r) {
            let i = this.state;
            null == i.sCurrentAction &&
              0 != e &&
              ((i.sCurrentAction = r), (i.sDevicePath = n), (i.sInputPath = o)),
              i.sCurrentAction == r &&
                (0 == e
                  ? ((i.sCurrentAction = void 0), (i.flProgress = 0))
                  : (i.flProgress = e)),
              this.setState(i);
          }
          onDeviceEvent(e, t, n) {
            e == a.ku.Deactivated &&
              t == this.state.sDevicePath &&
              this.setState({ sCurrentAction: null, flProgress: 0 });
          }
          render() {
            const e = !1,
              t = this.state.flProgress;
            if (!this.state.sCurrentAction || t < 0.5 || t > 1) return null;
            {
              let n = { x: -0.05, y: 0.06, z: 0.02 };
              "/user/hand/left" == this.state.sDevicePath && (n.x = -n.x);
              const o =
                  "/user/head" == this.state.sDevicePath ||
                  "/input/system" == this.state.sInputPath ||
                  e,
                i = (100 * (t - 0.5)) / 0.5,
                s =
                  "/actions/quickrecenter/in/recenter" ==
                    this.state.sCurrentAction || e,
                l = 1 == t || e;
              let d = r.createElement(
                a.Zk,
                { width: 0.08, debug_name: "progressindicator" },
                r.createElement(
                  "div",
                  { className: (0, b.FH)("ProgressContainer", ["Throb", l]) },
                  r.createElement(y, {
                    background: !0,
                    backgroundPadding: 2,
                    value: i,
                  }),
                  s && r.createElement(h.hU, null),
                  !s &&
                    r.createElement("img", {
                      src: "/shared/images/steam_logo.svg",
                      className: "ProgressIcon",
                    }),
                ),
              );
              return o
                ? E(d)
                : r.createElement(
                    "div",
                    null,
                    r.createElement(
                      a.mS,
                      {
                        id: "progress_component",
                        sDevicePath: this.state.sDevicePath,
                        sInputPath: this.state.sInputPath,
                      },
                      r.createElement(
                        a.Nu,
                        { vOffset: n },
                        r.createElement(
                          a.ey,
                          {
                            fOffscreenZDepth: -0.3,
                            fOffAxisLimit: 21,
                            fTransitionLimit: 1,
                          },
                          r.createElement(a.N1, {
                            target_id: "progress_component",
                            thickness: 0.002,
                            start_buffer: 0.03,
                            end_buffer: 0.01,
                          }),
                          r.createElement(a.FN, null, d),
                        ),
                      ),
                    ),
                  );
            }
          }
        }
        (0, o.Cg)([s.o], S.prototype, "onProgressIndicatorEvent", null),
          (0, o.Cg)([s.o], S.prototype, "onDeviceEvent", null);
        const w = (0, l.PA)(function (e) {
            return r.createElement(
              "div",
              { className: "RoomSetupUI" },
              r.createElement(
                "div",
                { className: "Title" },
                "Adjust Floor Height",
                " ",
              ),
              r.createElement(
                "div",
                { className: "Body" },
                "Touch the floor (or use thumbstick) to adjust.",
              ),
              r.createElement(
                "div",
                { className: "ButtonRow" },
                r.createElement(
                  m.$,
                  {
                    className: "ButtonControl",
                    onClick: () => {
                      null === VRHTML ||
                        void 0 === VRHTML ||
                        VRHTML.VRChaperoneSetup.ResetPlayspaceFloorHeight(
                          a._1.Inactive,
                        ),
                        null == e || e.onCancel();
                    },
                  },
                  r.createElement(h.bm, null),
                  " ",
                  "Cancel",
                ),
                r.createElement(
                  m.$,
                  {
                    className: "ButtonControl",
                    onClick: () => {
                      null === VRHTML ||
                        void 0 === VRHTML ||
                        VRHTML.VRChaperoneSetup.ResetPlayspaceFloorHeight(
                          a._1.PendingReset,
                        );
                    },
                  },
                  "Reset",
                ),
                r.createElement(
                  m.$,
                  {
                    className: "ButtonControl Colorful",
                    onClick: () => {
                      (null == e ? void 0 : e.bNext) ||
                        null === VRHTML ||
                        void 0 === VRHTML ||
                        VRHTML.VRChaperoneSetup.CommitPlayspaceFloorHeight(),
                        null == e || e.onAccept();
                    },
                  },
                  (null == e ? void 0 : e.bNext) ? "Next" : "Accept",
                ),
              ),
            );
          }),
          R = (0, l.PA)(function (e) {
            return r.createElement(
              "div",
              { className: "RoomSetupUI" },
              r.createElement(
                "div",
                { className: "Title" },
                "Adjust Playspace",
              ),
              r.createElement(
                "div",
                { className: "Body" },
                "Drag to adjust size",
              ),
              r.createElement(
                "div",
                { className: "ButtonRow" },
                r.createElement(
                  m.$,
                  {
                    className: "ButtonControl",
                    onClick: null == e ? void 0 : e.onCancel,
                  },
                  r.createElement(h.bm, null),
                  " ",
                  "Cancel",
                ),
                !!(null == e ? void 0 : e.onBack) &&
                  r.createElement(
                    m.$,
                    {
                      className: "ButtonControl",
                      onClick: null == e ? void 0 : e.onBack,
                    },
                    "Back",
                  ),
                r.createElement(
                  m.$,
                  {
                    className: "ButtonControl Colorful",
                    onClick: () => {
                      null === VRHTML ||
                        void 0 === VRHTML ||
                        VRHTML.VRChaperoneSetup.CommitPlayspaceCircleBoundary(),
                        null == e || e.onAccept();
                    },
                  },
                  "Accept",
                ),
              ),
              r.createElement(
                "div",
                { className: "ButtonRow" },
                !!(null == e ? void 0 : e.onAdvanced) &&
                  r.createElement(
                    m.$,
                    {
                      className: "ButtonControl",
                      onClick: null == e ? void 0 : e.onAdvanced,
                    },
                    r.createElement(h.DO, null),
                    " ",
                    "Advanced",
                  ),
              ),
            );
          }),
          x = (0, l.PA)(function (e) {
            return r.createElement(
              "div",
              { className: "RoomSetupUI" },
              r.createElement(
                "div",
                { className: "Title" },
                "Draw Playspace (Advanced)",
              ),
              r.createElement(
                "div",
                { className: "Body" },
                "Use your controller to draw the safe playspace bounds.",
              ),
              r.createElement(
                "div",
                { className: "ButtonRow" },
                r.createElement(
                  m.$,
                  {
                    className: "ButtonControl",
                    onClick: null == e ? void 0 : e.onCancel,
                  },
                  r.createElement(h.bm, null),
                  " ",
                  "Cancel",
                ),
                r.createElement(
                  m.$,
                  {
                    className: "ButtonControl",
                    onClick: () => {
                      null === VRHTML ||
                        void 0 === VRHTML ||
                        VRHTML.VRChaperoneSetup.ResetPlayspaceBoundsDrawing();
                    },
                  },
                  "Reset",
                ),
                !!(null == e ? void 0 : e.onBack) &&
                  r.createElement(
                    m.$,
                    {
                      className: "ButtonControl",
                      onClick: null == e ? void 0 : e.onBack,
                    },
                    "Back",
                  ),
                r.createElement(
                  m.$,
                  {
                    className: "ButtonControl Colorful",
                    onClick: () => {
                      null === VRHTML ||
                        void 0 === VRHTML ||
                        VRHTML.VRChaperoneSetup.CommitPlayspaceBoundsDrawing(),
                        null == e || e.onAccept();
                    },
                  },
                  "Accept",
                ),
              ),
            );
          }),
          T = (0, l.PA)(function (e) {
            if (0 == c.H.roomSetupStep) return null;
            const t = () => {
                c.H.setRoomSetupStep(0, !0);
              },
              n = 1 != c.H.roomSetupStep;
            return r.createElement(
              a.Zk,
              {
                id: null == e ? void 0 : e.id,
                meters_per_pixel: 0.5 * p.iZ,
                interactive: n,
                scrollable: !1,
                debug_name: "room-setup-ui",
              },
              2 == c.H.roomSetupStep &&
                r.createElement(w, {
                  onAccept: () => {
                    c.H.setRoomSetupStep(0);
                  },
                  onCancel: t,
                  bNext: !1,
                }),
              3 == c.H.roomSetupStep &&
                r.createElement(w, {
                  onAccept: () => {
                    c.H.setRoomSetupStep(4);
                  },
                  onCancel: t,
                  bNext: !0,
                }),
              4 == c.H.roomSetupStep &&
                r.createElement(R, {
                  onCancel: t,
                  onAccept: () => {
                    c.H.setRoomSetupStep(0);
                  },
                  onBack: () => {
                    c.H.setRoomSetupStep(3);
                  },
                  onAdvanced: () => {
                    VRHTML.VRChaperoneSetup.ResetPlayspaceBoundsDrawing(),
                      c.H.setRoomSetupStep(5);
                  },
                }),
              5 == c.H.roomSetupStep &&
                r.createElement(x, {
                  onCancel: t,
                  onAccept: () => {
                    c.H.setRoomSetupStep(0);
                  },
                  onBack: () => {
                    c.H.setRoomSetupStep(4);
                  },
                }),
            );
          }),
          k = (0, l.PA)(function () {
            return r.createElement(
              "div",
              { className: "RoomSetupUI Slim" },
              r.createElement(
                "div",
                { className: "ButtonRow" },
                r.createElement(
                  m.$,
                  {
                    className: "ButtonControl",
                    onClick: () => {
                      c.H.m_bOkOutsideOfPlayspace = !0;
                    },
                  },
                  r.createElement(h.bm, null),
                ),
                r.createElement(
                  m.$,
                  {
                    className: "ButtonControl Colorful",
                    onClick: () => {
                      c.H.setRoomSetupStep(3);
                    },
                  },
                  r.createElement(h.DO, null),
                  " ",
                  "Setup Playspace",
                ),
              ),
            );
          }),
          D = (0, l.PA)(function () {
            var e;
            return null !==
              (e = d.HR.settings.get(
                "/settings/internal/enableSafeChaperone",
              )) &&
              void 0 !== e &&
              e
              ? u.G.Instance.SceneApplicationState == a.HW.None ||
                !c.H.m_bHmdOutOfBoundsStrict ||
                c.H.m_bOkOutsideOfPlayspace ||
                0 != c.H.roomSetupStep
                ? null
                : r.createElement(
                    a.dL,
                    { parent_path: "/user/head" },
                    r.createElement(
                      a.m$,
                      {
                        start_angle_threshold: 50,
                        stop_angle_threshold: 10,
                        ease_out_angle_threshold: 90,
                        min_angular_velocity: 105,
                        ease_in_power: 1.5,
                        lock_to_horizon: !0,
                      },
                      r.createElement(
                        a.dL,
                        { translation: { x: 0, y: -0.75, z: -0.9 } },
                        r.createElement(
                          a.FN,
                          null,
                          r.createElement(
                            a.Zk,
                            {
                              meters_per_pixel: 0.4 * p.iZ,
                              interactive: !0,
                              debug_name: "chaperone-popup",
                            },
                            r.createElement(k, null),
                          ),
                        ),
                      ),
                    ),
                  )
              : null;
          }),
          P = (0, l.PA)(function () {
            if (0 == c.H.roomSetupStep) return null;
            if (1 == c.H.roomSetupStep)
              return r.createElement(M, {
                onTrigger: () => {
                  c.H.setRoomSetupStep(0),
                    null === VRHTML ||
                      void 0 === VRHTML ||
                      VRHTML.VRChaperone.ResetZeroPose();
                },
              });
            {
              const e = 3 == c.H.roomSetupStep || 2 == c.H.roomSetupStep,
                t = 4 == c.H.roomSetupStep || 5 == c.H.roomSetupStep,
                n = 1,
                o = 20,
                i = (0, a.nX)(p.C6, "Floor-AdjustPlayspace-Receiver"),
                s = 1.25,
                l = 0.547,
                d = 0.55;
              return r.createElement(
                r.Fragment,
                null,
                r.createElement(
                  a.dL,
                  { parent_path: "/user/head" },
                  r.createElement(
                    a.m$,
                    {
                      start_angle_threshold: 30,
                      stop_angle_threshold: 10,
                      ease_out_angle_threshold: 90,
                      min_angular_velocity: 105,
                      ease_in_power: 1.5,
                      lock_to_horizon: !0,
                    },
                    r.createElement(
                      a.dL,
                      { translation: { y: -0.15 * s, z: -1 * s } },
                      r.createElement(T, null),
                    ),
                  ),
                  r.createElement(
                    a._$,
                    {
                      projection_constraint: a.Qc.WorldDynamicFloor,
                      inital_guess_alpha: 0.5,
                    },
                    r.createElement(
                      a.dL,
                      { rotation: { x: -90 } },
                      r.createElement(
                        a.Zk,
                        {
                          width: 50,
                          height: 50,
                          interactive: !0,
                          scrollable: !1,
                          debug_name: "playspace-laser-receiver-invisible",
                          id: i,
                          visibility: a.Fi.InvisibleButIntersectable,
                          lasermouse_filtering: a.o3.Low,
                          hide_lasermouse_when_clicking: !0,
                        },
                        r.createElement(
                          "div",
                          { className: "AdjustPlayspaceRoot" },
                          r.createElement("div", {
                            className: "AdjustPlayspaceRoot Invalid",
                          }),
                        ),
                      ),
                    ),
                  ),
                ),
                e &&
                  r.createElement(v.pF, {
                    target_id: i,
                    head_interaction_radius: 2.5,
                    inactive_alpha_scale: 0.5,
                    dot_radius: 0.04,
                    dot_color_hsv: [l, d, 0.8],
                    dot_inner_alpha: 1,
                    dot_outer_alpha: 0.2,
                    axis_radius: 0.001,
                    axis_color_hsv: [l, d, 1],
                    rings_color_hsv: [l, d, 0.8],
                    rings_radius: 0.004,
                    rings_half_width: 0.001,
                    rings_hue_amplitude: 0,
                    rings_hue_speed: 1,
                  }),
                t &&
                  r.createElement(v.rm, {
                    target_id: i,
                    radius_range: [n, o],
                    center_selection_radius: 0.1,
                  }),
                t &&
                  r.createElement(v.$6, {
                    "generic-geo": [0.001, 0.01],
                    "outline-color-hsv": [0.5, 0.95, 0.8],
                    "hue-amplitude": 0.1,
                    "hue-speed": 4 == c.H.roomSetupStep ? 2 : 1.25,
                    "outline-shadow-alpha": [1, 0.5],
                    "shadow-radius-delta": 0.01,
                    "center-dot-radius": 4 == c.H.roomSetupStep ? 0.1 : 0.04,
                    "center-color-hsv": [l, 1, 0.65],
                  }),
                r.createElement(v.VJ, {
                  "clip-to-playspace": !!t,
                  "tile-size": 0.075 * 1.5,
                  "dot-half-size": 0.004,
                  "max-radius": e ? 2.5 : 4,
                  "max-radius-fade": 0.5,
                  "min-radius": 0.3,
                  "min-radius-fade": 0.3,
                  "center-randomization": 0.35,
                  "color-hsv": [0.6, 0.95, 1],
                }),
              );
            }
          });
        var V = n(7496),
          H = n(3714);
        function I(e, t, n, o, r) {
          return t == n ? 0 : ((e - t) / (n - t)) * (r - o) + o;
        }
        class N extends r.Component {
          constructor(e) {
            super(e),
              (this.m_fadeStartTimeout = void 0),
              (this.m_fadeFinishTimeout = void 0),
              (this.m_mountTime = 0);
            const t =
                null === a.Ay || void 0 === a.Ay
                  ? void 0
                  : a.Ay.VRProperties.GetFloatProperty(
                      a.Gz,
                      a.fD.UserIpdMeters_Float,
                    ),
              n = 0.1 * Math.round(1e4 * (null != t ? t : 0.065));
            (this.state = { ipdValue: n, visible: !1, fading: !1 }),
              null === a.Ay ||
                void 0 === a.Ay ||
                a.Ay.RegisterForIPDEvents(this.IPDChanged);
          }
          componentDidMount() {
            this.m_mountTime = Date.now();
          }
          StartFade() {
            window.clearTimeout(this.m_fadeStartTimeout),
              (this.m_fadeStartTimeout = void 0),
              window.clearTimeout(this.m_fadeFinishTimeout),
              (this.m_fadeFinishTimeout = window.setTimeout(
                this.HideOverlay,
                N.kFadeDurationMs,
              )),
              this.setState({ fading: !0 });
          }
          HideOverlay() {
            this.setState({ visible: !1 });
          }
          IPDChanged(e) {
            const t = 0.1 * Math.round(1e4 * (null != e ? e : 0.065));
            if (!this.m_mountTime || this.state.ipdValue == t) return;
            (Date.now() - this.m_mountTime) / 1e3 < 2 ||
              (window.clearTimeout(this.m_fadeStartTimeout),
              (this.m_fadeStartTimeout = window.setTimeout(
                this.StartFade,
                N.kFadeDelayMs,
              )),
              window.clearTimeout(this.m_fadeFinishTimeout),
              (this.m_fadeFinishTimeout = 0),
              this.setState({ ipdValue: t, visible: !0, fading: !1 }));
          }
          ipdLensSpacer() {
            return r.createElement("div", {
              className: "IPDLensSpacer",
              style: { minWidth: "32px" },
            });
          }
          render() {
            var e, t, n;
            if (!this.state.visible) return null;
            let o = ["IPDParent"];
            this.state.fading && o.push("Fading");
            const i =
                0.9 *
                (null !==
                  (e =
                    null === a.Ay || void 0 === a.Ay
                      ? void 0
                      : a.Ay.VRProperties.GetFloatProperty(
                          a.Gz,
                          a.fD.DashboardScale_Float,
                        )) && void 0 !== e
                  ? e
                  : 1),
              s =
                1e3 *
                (null !==
                  (t =
                    null === a.Ay || void 0 === a.Ay
                      ? void 0
                      : a.Ay.VRProperties.GetFloatProperty(
                          a.Gz,
                          a.fD.IpdUIRangeMinMeters_Float,
                        )) && void 0 !== t
                  ? t
                  : 0.058),
              l =
                1e3 *
                (null !==
                  (n =
                    null === a.Ay || void 0 === a.Ay
                      ? void 0
                      : a.Ay.VRProperties.GetFloatProperty(
                          a.Gz,
                          a.fD.IpdUIRangeMaxMeters_Float,
                        )) && void 0 !== n
                  ? n
                  : 0.07),
              d = (function (e, t, n, o, i) {
                if (
                  !(
                    isFinite(e) &&
                    isFinite(t) &&
                    isFinite(n) &&
                    isFinite(o) &&
                    isFinite(i)
                  )
                )
                  return null;
                const s = 10,
                  a = [],
                  l = t / 25,
                  d = 10 * l,
                  u = d - 5 * l,
                  c = d - 10 * l,
                  p = d + 10 * l,
                  m = d + 5 * l;
                for (let t = o; t <= i; t += 0.5) {
                  const n = I(t, o, i, s, e - s);
                  a.push(
                    r.createElement("circle", {
                      key: "pip" + t,
                      cx: n,
                      cy: d,
                      r: "0.75",
                      stroke: "none",
                      fill: "rgb(128,128,128)",
                    }),
                  );
                }
                for (let t = o; t <= i; t += 2) {
                  const n = I(t, o, i, s, e - s);
                  a.push(
                    r.createElement("line", {
                      key: "line" + t,
                      x1: n,
                      y1: d,
                      x2: n,
                      y2: u,
                      style: { stroke: "rgb(96,96,96)", strokeWidth: 2 },
                    }),
                  );
                }
                {
                  let t = I(64, o, i, s, e - s);
                  a.push(
                    r.createElement("line", {
                      key: "centraltick",
                      x1: t,
                      y1: d,
                      x2: t,
                      y2: c,
                      style: { stroke: "rgb(164,164,164)", strokeWidth: 2 },
                    }),
                  );
                }
                {
                  let t = I(n - 0.5, o, i, s, e - s),
                    l = I(n + 0.5, o, i, s, e - s),
                    d =
                      t +
                      "," +
                      p +
                      " " +
                      l +
                      "," +
                      p +
                      " " +
                      0.5 * (t + l) +
                      "," +
                      m;
                  a.push(
                    r.createElement("polygon", {
                      key: "triangle",
                      points: d,
                      style: {
                        stroke: "rgb(128,128,128)",
                        strokeWidth: 1.5,
                        fill: "rgb(30,30,30)",
                      },
                    }),
                  );
                }
                return r.createElement(
                  "svg",
                  { width: e, height: t, viewBox: [0, 0, e, t].join(" ") },
                  a,
                );
              })(240, 50, this.state.ipdValue, s, l);
            return r.createElement(
              a.dL,
              { parent_path: "/user/head" },
              r.createElement(
                a.dL,
                {
                  translation: { y: -0.4, z: -0.87 },
                  rotation: { x: -30 },
                  scale: i,
                },
                r.createElement(
                  a.Zk,
                  {
                    width: void 0,
                    height: N.kPanelHeight,
                    interactive: !1,
                    sort_order: 1e3,
                    debug_name: "ipd",
                  },
                  r.createElement(
                    "div",
                    { className: o.join(" "), style: { width: N.kPixelWidth } },
                    r.createElement(
                      "div",
                      { className: "FlexColumn" },
                      r.createElement(
                        "div",
                        { className: "IPDNumberRow" },
                        r.createElement(
                          "div",
                          { className: "IPDNumberText" },
                          this.state.ipdValue.toFixed(1),
                        ),
                        r.createElement(
                          "div",
                          { className: "IPDLabelText" },
                          "mm",
                        ),
                      ),
                      r.createElement(
                        "div",
                        { className: "IPDSettingTextDesc" },
                        (0, H.we)("#IPD_Description"),
                      ),
                      r.createElement(
                        "div",
                        { className: "IPDLensRow" },
                        r.createElement(
                          "div",
                          { className: "IPDLens FlipImageHorizontal" },
                          " ",
                          d,
                          " ",
                        ),
                        this.ipdLensSpacer(),
                        r.createElement(
                          "div",
                          { className: "IPDLens" },
                          " ",
                          d,
                          " ",
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            );
          }
        }
        (N.kPanelHeight = 0.16),
          (N.kPixelWidth = 600),
          (N.kFadeDelayMs = 1e3),
          (N.kFadeDurationMs = 1e3),
          (0, o.Cg)([s.o], N.prototype, "StartFade", null),
          (0, o.Cg)([s.o], N.prototype, "HideOverlay", null),
          (0, o.Cg)([s.o], N.prototype, "IPDChanged", null);
        var B,
          A,
          O = n(2563),
          F = n(1835);
        !(function (e) {
          (e[(e.Opaque = 0)] = "Opaque"),
            (e[(e.FadingIn = 1)] = "FadingIn"),
            (e[(e.FadingOut = 2)] = "FadingOut");
        })(A || (A = {}));
        let Z = (B = class extends r.Component {
          constructor(e) {
            super(e),
              (this.m_hideTimeout = void 0),
              (this.m_fadeTimeout = void 0),
              (this.m_unresponsiveTimeout = void 0),
              (this.m_sceneApplicationStateChangedEventHandle = null),
              (this.m_mountedTime = void 0),
              (this.state = {
                visible: !1,
                opacity: A.Opaque,
                latchedAppName: "",
                latchedAppKey: "",
                latchedSceneApplicationState: null,
                alreadyHidDashboard: !1,
              }),
              d.HR.Init(!1);
          }
          componentDidMount() {
            (this.m_sceneApplicationStateChangedEventHandle =
              null === a.Ay || void 0 === a.Ay
                ? void 0
                : a.Ay.RegisterForSceneApplicationStateChangedEvents(
                    this.onSceneApplicationStateChanged,
                  )),
              (this.m_mountedTime = new Date().getTime()),
              this.updateTransitionState();
          }
          log(e) {
            let t = (new Date().getTime() - this.m_mountedTime) / 1e3;
            console.log("[transition] " + t + " " + e);
          }
          componentWillUnmount() {
            var e;
            this.m_unresponsiveTimeout &&
              (window.clearTimeout(this.m_unresponsiveTimeout),
              (this.m_unresponsiveTimeout = void 0)),
              this.m_fadeTimeout &&
                (window.clearTimeout(this.m_fadeTimeout),
                (this.m_fadeTimeout = void 0)),
              this.m_hideTimeout &&
                (window.clearTimeout(this.m_hideTimeout),
                (this.m_hideTimeout = void 0)),
              null === (e = this.m_sceneApplicationStateChangedEventHandle) ||
                void 0 === e ||
                e.unregister();
          }
          maybeHideDashboard(e) {
            if (this.state.alreadyHidDashboard) return;
            const t = a.Ay.VRApplications.GetStartingApplicationKey();
            t &&
              t != B.k_sHomeAppKey &&
              (a.Ay.VRDashboardManager.HideDashboard(e),
              this.setState({ alreadyHidDashboard: !0 }));
          }
          updateTransitionState() {
            if (!a.Ay) return;
            let e = a.Ay.VRApplications.GetSceneApplicationState();
            e == a.HW.Starting
              ? (this.state.latchedSceneApplicationState == a.HW.Quitting &&
                  this.resetLatchedValued(),
                this.setState({ latchedSceneApplicationState: e }),
                this.updateLatchedValues(),
                this.show(!1),
                this.cancelUnresponsiveTimeout(),
                this.maybeHideDashboard("transition_app_starting"))
              : e == a.HW.Quitting
                ? (this.state.latchedSceneApplicationState == a.HW.Starting &&
                    this.resetLatchedValued(),
                  this.setState({ latchedSceneApplicationState: e }),
                  this.updateLatchedValues(),
                  this.show(!1),
                  this.cancelUnresponsiveTimeout(),
                  this.maybeHideDashboard("transition_app_quitting"))
                : e == a.HW.Running
                  ? (this.cancelUnresponsiveTimeout(),
                    this.state.visible && this.startFadeOut())
                  : e == a.HW.None
                    ? (this.cancelUnresponsiveTimeout(),
                      this.state.visible && this.hideSoon())
                    : e == a.HW.Waiting &&
                      (this.state.visible
                        ? (this.cancelUnresponsiveTimeout(), this.show(!0))
                        : this.startUnresponsiveTimer());
          }
          startUnresponsiveTimer() {
            null == this.m_unresponsiveTimeout &&
              (this.m_unresponsiveTimeout = window.setTimeout(
                this.onUnresponsiveTimeout,
                B.kUnresponsiveDelayMs,
              ));
          }
          cancelUnresponsiveTimeout() {
            this.m_unresponsiveTimeout &&
              (window.clearTimeout(this.m_unresponsiveTimeout),
              (this.m_unresponsiveTimeout = void 0));
          }
          onUnresponsiveTimeout() {
            window.clearTimeout(this.m_unresponsiveTimeout),
              (this.m_unresponsiveTimeout = void 0),
              this.setState({ latchedSceneApplicationState: a.HW.Waiting }),
              this.show(!0),
              this.updateLatchedValues();
          }
          updateLatchedValues() {
            if (a.Ay)
              if (
                a.Ay.VRApplications.GetSceneApplicationState() == a.HW.Starting
              ) {
                let e = a.Ay.VRApplications.GetStartingApplicationKey();
                e && e.length > 0 && this.setState({ latchedAppKey: e });
                let t = a.Ay.GetStartingAppName();
                t && t.length > 0 && this.setState({ latchedAppName: t });
              } else {
                let e = a.Ay.VRApplications.GetSceneApplicationKey();
                e && e.length > 0 && this.setState({ latchedAppKey: e });
                let t = a.Ay.GetCurrentSceneFocusAppName();
                t && t.length > 0 && this.setState({ latchedAppName: t });
              }
          }
          onSceneApplicationStateChanged() {
            this.updateTransitionState();
          }
          show(e) {
            this.cancelFadeOutTimers(),
              e
                ? this.state.visible ||
                  this.setState({ visible: !0, opacity: A.FadingIn })
                : this.setState({ visible: !0, opacity: A.Opaque });
          }
          cancelFadeOutTimers() {
            this.m_fadeTimeout && window.clearTimeout(this.m_fadeTimeout),
              this.m_hideTimeout && window.clearTimeout(this.m_hideTimeout),
              (this.m_fadeTimeout = void 0),
              (this.m_hideTimeout = void 0);
          }
          hideSoon() {
            this.m_hideTimeout ||
              this.m_fadeTimeout ||
              (this.m_fadeTimeout = window.setTimeout(
                this.startFadeOut,
                B.kHideDelayMs,
              ));
          }
          startFadeOut() {
            this.m_fadeTimeout &&
              (window.clearTimeout(this.m_fadeTimeout),
              (this.m_fadeTimeout = void 0)),
              this.setState({ opacity: A.FadingOut }),
              (this.m_hideTimeout = window.setTimeout(
                this.hideAndResetLatchedValues,
                B.kFadeoutTimeMs,
              ));
          }
          resetLatchedValued() {
            this.setState({
              latchedAppName: "",
              latchedAppKey: "",
              latchedSceneApplicationState: null,
            });
          }
          hideAndResetLatchedValues() {
            this.cancelFadeOutTimers(),
              this.resetLatchedValued(),
              this.setState({
                visible: !1,
                opacity: A.Opaque,
                alreadyHidDashboard: !1,
              });
          }
          render() {
            if (!this.state.visible) return null;
            if (F.SW.m_bDashboardVisible) return null;
            let e = "",
              t = "";
            if (
              this.state.latchedAppKey &&
              this.state.latchedAppKey.length > 0 &&
              !this.state.latchedAppKey.includes("system.generated")
            )
              e = "/app/image?app_key=" + this.state.latchedAppKey;
            else {
              let n = 8;
              if (
                ((e =
                  "images/dynamictitle.000" +
                  (Math.abs(
                    (function (e) {
                      let t = 0,
                        n = 0;
                      for (; t < e.length; t++)
                        n = (Math.imul(31, n) + e.charCodeAt(t)) | 0;
                      return n;
                    })(this.state.latchedAppKey),
                  ) %
                    n) +
                  ".png"),
                (t = this.state.latchedAppName),
                !t)
              )
                return null;
            }
            let n = this.state.latchedAppKey === B.k_sHomeAppKey,
              o = !1,
              i = "";
            switch (this.state.latchedSceneApplicationState) {
              case a.HW.Quitting:
                i = (0, H.we)("#Now_Quitting");
                break;
              case a.HW.Starting:
                i = (0, H.we)(n ? "" : "#Now_Starting");
                break;
              case a.HW.Waiting:
                (i = (0, H.we)("#Now_Waiting")), (o = !0);
            }
            let s = i.length > 0,
              l = ["TransitionAppImage"],
              d = ["TransitionAppLabels"],
              u = ["TransitionAppSpinner"];
            this.state.opacity == A.FadingIn
              ? (l.push("FadingIn"), d.push("FadingIn"), u.push("FadingIn"))
              : this.state.opacity == A.FadingOut &&
                (l.push("FadingOut"), d.push("FadingOut"), u.push("FadingOut")),
              o && l.push("Waiting");
            let c = null;
            return (
              e.includes("revive.app") && (c = 310),
              r.createElement(
                a.sJ,
                null,
                r.createElement(
                  a.dL,
                  {
                    translation: { y: -0.1125, z: -F.SW.dashboardDistance },
                    scale: 0.244,
                  },
                  r.createElement(
                    a.Zk,
                    {
                      width: 1.5,
                      height: void 0,
                      interactive: !1,
                      origin: a.Oi.BottomCenter,
                      reflect: 0.05,
                      debug_name: "transition",
                    },
                    r.createElement(
                      "div",
                      {
                        className: l.join(" "),
                        style: {
                          backgroundImage: e ? "url('" + e + "')" : null,
                          height: c,
                        },
                      },
                      " ",
                      t,
                      " ",
                    ),
                  ),
                  s &&
                    r.createElement(
                      a.dL,
                      { translation: { y: 0.08, z: -0.08 } },
                      r.createElement(
                        a.Zk,
                        {
                          width: 1.275,
                          height: void 0,
                          interactive: !1,
                          origin: a.Oi.TopCenter,
                          debug_name: "transition-appstatus",
                        },
                        r.createElement(
                          "div",
                          { className: d.join(" ") },
                          r.createElement("div", { className: "AppStatus" }, i),
                        ),
                      ),
                    ),
                  o &&
                    r.createElement(
                      a.dL,
                      { translation: { y: 0.35, z: 0.05 } },
                      r.createElement(
                        a.Zk,
                        {
                          width: 1.5 * 0.1,
                          height: void 0,
                          interactive: !1,
                          debug_name: "transition-waiting",
                        },
                        r.createElement(
                          "div",
                          { className: u.join(" ") },
                          r.createElement(O.bR, null),
                        ),
                      ),
                    ),
                ),
              )
            );
          }
        });
        (Z.k_sHomeAppKey = "openvr.tool.steamvr_environments"),
          (Z.kHideDelayMs = 5e3),
          (Z.kUnresponsiveDelayMs = 2e3),
          (Z.kFadeoutTimeMs = 550),
          (0, o.Cg)([s.o], Z.prototype, "startUnresponsiveTimer", null),
          (0, o.Cg)([s.o], Z.prototype, "cancelUnresponsiveTimeout", null),
          (0, o.Cg)([s.o], Z.prototype, "onUnresponsiveTimeout", null),
          (0, o.Cg)([s.o], Z.prototype, "updateLatchedValues", null),
          (0, o.Cg)([s.o], Z.prototype, "onSceneApplicationStateChanged", null),
          (0, o.Cg)([s.o], Z.prototype, "show", null),
          (0, o.Cg)([s.o], Z.prototype, "cancelFadeOutTimers", null),
          (0, o.Cg)([s.o], Z.prototype, "hideSoon", null),
          (0, o.Cg)([s.o], Z.prototype, "startFadeOut", null),
          (0, o.Cg)([s.o], Z.prototype, "resetLatchedValued", null),
          (0, o.Cg)([s.o], Z.prototype, "hideAndResetLatchedValues", null),
          (Z = B = (0, o.Cg)([l.PA], Z));
        class z extends r.Component {
          constructor(e) {
            super(e), (this.state = {});
          }
          render() {
            if (!VRHTML) return null;
            let e = VRHTML.VRSystem.GetTrackedDeviceClasses(),
              t = [];
            return (
              e.forEach((e) => {
                e.eClass == a.mo.TrackingReference &&
                  e.sDevicePath &&
                  t.push(
                    r.createElement(
                      a.dL,
                      { parent_path: e.sDevicePath },
                      r.createElement(
                        a.FN,
                        null,
                        r.createElement(
                          a.Zk,
                          { width: 0.5, debug_name: "baseinfo" },
                          r.createElement(
                            "div",
                            { className: "FlexColumn" },
                            r.createElement(
                              "div",
                              { className: "Label" },
                              VRHTML.VRProperties.GetStringProperty(
                                e.sDevicePath,
                                a.fD.SerialNumber_String,
                              ),
                            ),
                            r.createElement(
                              "div",
                              { className: "Label" },
                              VRHTML.VRProperties.GetStringProperty(
                                e.sDevicePath,
                                a.fD.ManufacturerName_String,
                              ),
                            ),
                            r.createElement(
                              "div",
                              { className: "Label" },
                              VRHTML.VRProperties.GetStringProperty(
                                e.sDevicePath,
                                a.fD.ModelNumber_String,
                              ),
                            ),
                            r.createElement(
                              "div",
                              { className: "Label" },
                              "Channel: ",
                              VRHTML.VRProperties.GetStringProperty(
                                e.sDevicePath,
                                a.fD.ModeLabel_String,
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  );
              }),
              r.createElement(
                "div",
                { className: "CalloutTopLevelContainer" },
                t,
              )
            );
          }
        }
        var U = n(7813),
          W = n(998),
          G = n(4963),
          j = n(9118),
          $ = n(5802),
          q = n(1532),
          K = n(6646),
          X = (n(9569), n(5572)),
          J = n.n(X);
        (0, l.PA)(function () {
          return null;
        });
        const Q = (0, l.PA)(function () {
          return F.SW.m_bTrackingRecording
            ? r.createElement(
                "div",
                { className: J().TrackingDataRecordingNotification },
                r.createElement(h.Kj, null),
              )
            : null;
        });
        function Y() {
          return r.createElement(
            a.dL,
            { parent_path: "/user/head" },
            r.createElement(
              a.dL,
              {
                translation: { x: 0.2, y: 0.42, z: -0.87 },
                rotation: { x: 30 },
                scale: 1,
              },
              r.createElement(
                a.Zk,
                {
                  meters_per_pixel: p.iZ,
                  sort_order: 1e3,
                  debug_name: "persistent_notifications",
                  key: "persistent_notifications",
                },
                r.createElement(
                  "div",
                  { className: J().PersistentNotificationsContainer },
                  !1,
                  r.createElement(Q, null),
                ),
              ),
            ),
          );
        }
        class ee {
          constructor() {
            (this.m_audioContext = new AudioContext()),
              (this.m_mapAudioSourceForName = new Map());
          }
          GetSource(e, t, n) {
            return (
              this.m_mapAudioSourceForName.has(e) ||
                this.m_mapAudioSourceForName.set(e, this.CreateSource(t, n)),
              this.m_mapAudioSourceForName.get(e)
            );
          }
          PlaySource(e) {
            var t, n;
            this.m_mapAudioSourceForName.has(e) &&
              (null ===
                (n =
                  null === (t = this.m_mapAudioSourceForName.get(e).source) ||
                  void 0 === t
                    ? void 0
                    : t.mediaElement) ||
                void 0 === n ||
                n.play());
          }
          PauseSource(e) {
            var t, n;
            this.m_mapAudioSourceForName.has(e) &&
              (null ===
                (n =
                  null === (t = this.m_mapAudioSourceForName.get(e).source) ||
                  void 0 === t
                    ? void 0
                    : t.mediaElement) ||
                void 0 === n ||
                n.pause());
          }
          SetListener(e) {
            if (!e) return;
            const t = (0, a._F)(e.rotation, { x: 0, y: 0, z: -1 }),
              n = (0, a._F)(e.rotation, { x: 0, y: 1, z: 0 });
            this.m_audioContext.listener.positionX.setValueAtTime(
              0,
              this.m_audioContext.currentTime,
            ),
              this.m_audioContext.listener.positionY.setValueAtTime(
                0,
                this.m_audioContext.currentTime,
              ),
              this.m_audioContext.listener.positionZ.setValueAtTime(
                0,
                this.m_audioContext.currentTime,
              ),
              this.m_audioContext.listener.forwardX.setValueAtTime(
                t.x,
                this.m_audioContext.currentTime,
              ),
              this.m_audioContext.listener.forwardY.setValueAtTime(
                t.y,
                this.m_audioContext.currentTime,
              ),
              this.m_audioContext.listener.forwardZ.setValueAtTime(
                t.z,
                this.m_audioContext.currentTime,
              ),
              this.m_audioContext.listener.upX.setValueAtTime(
                n.x,
                this.m_audioContext.currentTime,
              ),
              this.m_audioContext.listener.upY.setValueAtTime(
                n.y,
                this.m_audioContext.currentTime,
              ),
              this.m_audioContext.listener.upZ.setValueAtTime(
                n.z,
                this.m_audioContext.currentTime,
              );
          }
          CreateSource(e, t) {
            const n = new MediaElementAudioSourceNode(this.m_audioContext, {
                mediaElement: t,
              }),
              o = new GainNode(this.m_audioContext);
            o.gain.setValueAtTime(e, this.m_audioContext.currentTime);
            const r = new ChannelSplitterNode(this.m_audioContext, {
                numberOfOutputs: 2,
              }),
              i = new Array(2);
            (i[0] = new PannerNode(this.m_audioContext)),
              (i[0].panningModel = "HRTF"),
              i[0].positionX.setValueAtTime(
                -1,
                this.m_audioContext.currentTime,
              ),
              i[0].positionY.setValueAtTime(0, this.m_audioContext.currentTime),
              i[0].positionZ.setValueAtTime(0, this.m_audioContext.currentTime),
              (i[1] = new PannerNode(this.m_audioContext)),
              (i[1].panningModel = "HRTF"),
              i[1].positionX.setValueAtTime(1, this.m_audioContext.currentTime),
              i[1].positionY.setValueAtTime(0, this.m_audioContext.currentTime),
              i[1].positionZ.setValueAtTime(0, this.m_audioContext.currentTime);
            const s = this.m_audioContext.destination;
            return (
              n.connect(o),
              o.connect(r),
              r.connect(i[0], 0),
              r.connect(i[1], 1),
              i[0].connect(s),
              i[1].connect(s),
              {
                source: n,
                gain: o,
                splitter: r,
                spatializers: i,
                destination: s,
              }
            );
          }
          static Get() {
            return (
              ee.s_singleton ||
                ((ee.s_singleton = new ee()),
                (window.g_TestAudioStore = ee.s_singleton)),
              ee.s_singleton
            );
          }
        }
        function te(e) {
          const { audioClip: t, volume: n } = e,
            o = r.useRef(void 0),
            [i, s] = r.useState();
          return (
            r.useEffect(() => {
              (null == o ? void 0 : o.current) &&
                s(ee.Get().GetSource(t, n, o.current));
            }, [t, o, n]),
            r.useEffect(() => {
              const e = window.setInterval(() => {
                var e;
                return ee
                  .Get()
                  .SetListener(
                    null ===
                      (e =
                        null === VRHTML || void 0 === VRHTML
                          ? void 0
                          : VRHTML.GetPose("/user/head", a.mu.Standing)) ||
                      void 0 === e
                      ? void 0
                      : e.xfDeviceToAbsoluteTracking,
                  );
              }, 100);
              return () => clearInterval(e);
            }, []),
            r.createElement("audio", {
              ref: o,
              src: t,
              preload: "auto",
              loop: !0,
            })
          );
        }
        const ne = 0.0508,
          oe = 0.0015875;
        let re = class extends r.Component {
          constructor(e) {
            super(e),
              (this.m_EventHandles = []),
              (this.state = { groupId: 0, groupName: "" });
          }
          componentDidMount() {}
          componentWillUnmount() {
            0;
          }
          render() {
            var e, t, n, o;
            const i =
                null !==
                  (e = d.HR.settings.get(
                    "/settings/dashboard/enableLTCReflections",
                  )) &&
                void 0 !== e &&
                e,
              s =
                null !==
                  (t = d.HR.settings.get(
                    "/settings/dashboard/theaterModeReflection",
                  )) && void 0 !== t
                  ? t
                  : 0.5,
              l =
                null !==
                  (n = d.HR.settings.get(
                    "/settings/dashboard/theaterModeBrightness",
                  )) && void 0 !== n
                  ? n
                  : 0.5,
              p = Math.pow(s, 2.2),
              m = Math.pow(l, 2.2),
              h = u.G.Instance.SceneApplicationState !== a.HW.None,
              v = F.SW.sceneAppDimmingActive,
              g = [0.35, 0.35, 0.35],
              _ = F.SW.isGroupMode;
            let f,
              C = [];
            if (
              (0 == c.H.roomSetupStep
                ? C.push(a.vz.QuickRecenter)
                : (2 != c.H.roomSetupStep && 3 != c.H.roomSetupStep) ||
                  C.push(a.vz.RoomSetupFloor),
              0 != c.H.roomSetupStep && 1 != c.H.roomSetupStep)
            )
              return r.createElement(
                r.Fragment,
                null,
                r.createElement(a.oi, {
                  "scene-color-mult": 0,
                  "floor-color-mult": 1,
                  "skydome-mult": 1,
                  "scene-reflection-mult": 0.25,
                  "roomview-mult": { to: g },
                  "allowed-action-sets": C,
                  "inhibit-bounds-rendering": !0,
                  "pause-notifications": !0,
                  "roomview-enable-override": !0,
                  "systemlayer-msaa-enable-override": !0,
                  "construct-alpha-override": 1,
                }),
              );
            if (
              ((f = h
                ? v
                  ? 0.15
                  : 1
                : {
                    channel: a.KI.TheaterSlow,
                    from: 1,
                    to: m,
                    interp: a.$.SmoothStep,
                  }),
              !c.H.m_bShowFloor)
            ) {
              const e =
                0.2 *
                (null !==
                  (o = d.HR.settings.get(
                    "/settings/dashboard/theaterModeSharpness",
                  )) && void 0 !== o
                  ? o
                  : 0.5);
              return r.createElement(
                r.Fragment,
                null,
                r.createElement(a.oi, {
                  "scene-color-mult": f,
                  "floor-color-mult": f,
                  "skydome-mult": 1,
                  "scene-reflection-mult": {
                    channel: a.KI.TheaterSlow,
                    from: 1,
                    to: p,
                    interp: a.$.SmoothStep,
                  },
                  "roomview-mult": { to: [1, 1, 1] },
                  "allowed-action-sets": C,
                }),
                i &&
                  F.SW.isTheaterMode &&
                  r.createElement(a.B4, {
                    "tile-size": 0.05588,
                    "tile-gap": oe,
                    "outer-radius": 3.75,
                    "fade-distance": 0.5,
                    height: 0.001,
                    "center-randomization": 0.25,
                    "luma-randomization": {
                      "min-gain": 0.15,
                      "max-gain": 0.175,
                    },
                    "reflection-randomization": {
                      "min-gain": e,
                      "max-gain": e,
                    },
                    "normal-randomization-degrees": 1.5,
                    chevron: { "luma-scale": 0.3, "reflection-scale": 0.2 },
                    "auto-subdivide": !1,
                    color: { r: 0.02, g: 0.04, b: 0.1 },
                  }),
              );
            }
            return r.createElement(
              "div",
              { className: "Construct" },
              r.createElement(a.oi, {
                "scene-color-mult": f,
                "floor-color-mult": f,
                "skydome-mult": {
                  channel: a.KI.TheaterSlow,
                  from: 1,
                  to: 0,
                  interp: a.$.SmoothStep,
                },
                "scene-reflection-mult": {
                  channel: a.KI.TheaterSlow,
                  from: 1,
                  to: p,
                  interp: a.$.SmoothStep,
                },
                "roomview-mult": {
                  channel: a.KI.TheaterSlow,
                  from: g,
                  to: [0.03, 0.04, 0.15],
                  interp: a.$.SmoothStep,
                },
                "allowed-action-sets": C,
              }),
              r.createElement(
                a.dL,
                { parent_path: _ ? "/system/locomotion/inverse" : void 0 },
                r.createElement(
                  a.dL,
                  { transform_path: _ ? "/remote/spawn/inverse" : void 0 },
                  i &&
                    c.H.m_bShowFloor &&
                    r.createElement(a.B4, {
                      "tile-size": ne,
                      "tile-gap": 0,
                      "outer-radius": 3.5,
                      "fade-distance": 0.5,
                      height: 0.001,
                      "center-randomization": 0.25,
                      "luma-randomization": {
                        "min-gain": 0.15,
                        "max-gain": 0.175,
                      },
                      "reflection-randomization": {
                        "min-gain": 0.1,
                        "max-gain": 0.1,
                      },
                      "normal-randomization-degrees": 1.5,
                      chevron: { "luma-scale": 0.5, "reflection-scale": 0.2 },
                      "auto-subdivide": !1,
                      "floor-aa-shader": !0,
                    }),
                  i &&
                    c.H.m_bShowFloorFar &&
                    !F.SW.isTheaterMode &&
                    r.createElement(a.B4, {
                      "tile-size": 1.016,
                      "tile-gap": 3 * oe,
                      "outer-radius": c.H.m_fBackgroundDomeRadius - 0.5,
                      "fade-distance": 1,
                      height: 0,
                      offset: {
                        x: c.H.m_fBackgroundOffsetX,
                        y: c.H.m_fBackgroundOffsetZ,
                      },
                      "center-randomization": 0,
                      "luma-randomization": {
                        "min-gain": 0.125,
                        "max-gain": 0.1375,
                      },
                      "reflection-randomization": {
                        "min-gain": 0,
                        "max-gain": 0,
                      },
                      "normal-randomization-degrees": 0,
                      "auto-subdivide": !0,
                    }),
                  !1,
                ),
              ),
              r.createElement(te, {
                audioClip: "/dashboard/sounds/dashboard_ambience_temp.wav",
                volume: 0.2,
              }),
            );
          }
        };
        re = (0, o.Cg)([l.PA], re);
        var ie,
          se = n(3246),
          ae = n(6943),
          le = n(1909),
          de = n(2156),
          ue = n(7600);
        class ce extends r.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new a._n()),
              this.m_mailbox.Init("systemui_devpanel");
          }
          onShowSceneAppBindings() {
            const e = u.G.Instance.SceneAppKey;
            if (e) {
              let t = { type: "request_binding_callouts", app_key: e };
              this.m_mailbox.SendMessage(a.I0, t);
            }
          }
          onShowDashboardBindings() {
            this.m_mailbox.SendMessage(a.I0, {
              type: "request_binding_callouts",
              app_key: "openvr.component.vrcompositor",
            });
          }
          onCrashRenderer() {
            null === VRHTML || void 0 === VRHTML || VRHTML.CrashRenderer();
          }
          onHangRenderer() {
            for (;;);
          }
          render() {
            return r.createElement(
              a.gO,
              {
                id: "dev_panel",
                tabName: "Dev Panel",
                iconUri: "/dashboard/images/icons/icon_settings.png",
                summonOverlayKey: "system.devpanel",
              },
              r.createElement(
                a.Zk,
                {
                  height: void 0,
                  width: 2,
                  interactive: !0,
                  scrollable: !0,
                  origin: a.Oi.BottomCenter,
                  debug_name: "DevPanel",
                },
                r.createElement(
                  m.W,
                  { className: "panel DevPanel" },
                  r.createElement("h1", null, "Developer Panel"),
                  r.createElement(
                    m.$,
                    {
                      className: "ButtonControl",
                      onClick: this.props.onToggleBaseInfo,
                    },
                    "Show Basestation Info",
                  ),
                  r.createElement(
                    m.$,
                    {
                      className: "ButtonControl",
                      onClick: this.onShowSceneAppBindings,
                    },
                    "Show Scene App Bindings",
                  ),
                  r.createElement(
                    m.$,
                    {
                      className: "ButtonControl",
                      onClick: this.onShowDashboardBindings,
                    },
                    "Show Dashboard Bindings",
                  ),
                  r.createElement(
                    m.$,
                    {
                      className: "ButtonControl",
                      onClick: this.onCrashRenderer,
                    },
                    "Crash Renderer",
                  ),
                  r.createElement(
                    m.$,
                    {
                      className: "ButtonControl",
                      onClick: this.onHangRenderer,
                    },
                    "Hang Renderer",
                  ),
                  r.createElement(
                    m.$,
                    {
                      className: "ButtonControl",
                      onClick: () => a.O5.Current().toggleDebugPointer(),
                    },
                    "Toggle Debug Pointer",
                  ),
                ),
              ),
            );
          }
        }
        (0, o.Cg)([s.o], ce.prototype, "onShowSceneAppBindings", null),
          (0, o.Cg)([s.o], ce.prototype, "onShowDashboardBindings", null),
          (0, o.Cg)([s.o], ce.prototype, "onCrashRenderer", null),
          (0, o.Cg)([s.o], ce.prototype, "onHangRenderer", null);
        class pe extends r.Component {
          constructor(e) {
            var t;
            super(e),
              (this.m_mailbox = new a._n()),
              this.m_mailbox.Init("base_station_status_overlay").then(() => {
                this.m_mailbox.RegisterHandler(
                  "waking_base_stations_state_changed",
                  this.onWakingBaseStationsStateChanged,
                );
              }),
              (this.state = {
                bWakingBaseStations:
                  null !==
                    (t =
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.MonitorController.GetWakingBaseStationsState()) &&
                  void 0 !== t &&
                  t,
                nImagesLoaded: 0,
              });
          }
          onWakingBaseStationsStateChanged(e) {
            this.setState({ bWakingBaseStations: !!e.waking_base_stations });
          }
          onImageLoaded() {
            this.setState({ nImagesLoaded: this.state.nImagesLoaded + 1 });
          }
          render() {
            let e = this.state.nImagesLoaded >= 2;
            return r.createElement(
              a.JK,
              { visibleIn0DOF: !0, visibleIn3DOF: !0, visibleIn6DOF: !1 },
              this.state.bWakingBaseStations &&
                r.createElement(
                  a.dL,
                  { parent_path: "/user/head", translation: { z: -2.75 } },
                  r.createElement(
                    a.Zk,
                    {
                      width: 2,
                      height: void 0,
                      interactive: !1,
                      debug_name: "basestation-1",
                    },
                    r.createElement(
                      "div",
                      {
                        className:
                          "WakingBaseStationsPanel" + (e ? " Loaded" : ""),
                      },
                      r.createElement("img", {
                        className: "Rainbow",
                        src: "/dashboard/images/rainbow.png",
                        onLoad: this.onImageLoaded,
                      }),
                      r.createElement("div", { className: "Ground" }),
                    ),
                  ),
                  r.createElement(
                    a.dL,
                    { translation: { z: 0.23 } },
                    r.createElement(
                      a.Zk,
                      {
                        width: 2,
                        height: void 0,
                        interactive: !1,
                        debug_name: "basestation-2",
                      },
                      r.createElement(
                        "div",
                        {
                          className:
                            "WakingBaseStationsPanel" + (e ? " Loaded" : ""),
                        },
                        r.createElement("img", {
                          className: "Base",
                          src: "/dashboard/images/base.png",
                          onLoad: this.onImageLoaded,
                        }),
                        r.createElement(
                          "h1",
                          null,
                          (0, H.we)("#WakingUpBaseStations"),
                        ),
                      ),
                    ),
                  ),
                ),
            );
          }
        }
        (0, o.Cg)(
          [s.o],
          pe.prototype,
          "onWakingBaseStationsStateChanged",
          null,
        ),
          (0, o.Cg)([s.o], pe.prototype, "onImageLoaded", null);
        let me = (ie = class extends r.Component {
          static bootstrap(e) {
            return (0, o.sH)(this, void 0, void 0, function* () {
              console.log("Bootstrap START");
              let t = document.querySelector(e);
              if (t)
                if ((0, a.R$)() == a.OH.Overlay) {
                  console.log("Bootstrapping " + e, t),
                    G.u.Instance.preloadSounds(),
                    null === VRHTML ||
                      void 0 === VRHTML ||
                      VRHTML.VROverlay.SetFlag(
                        VRHTML.VROverlay.ThisOverlayHandle(),
                        a.NB.MakeOverlaysInteractiveIfVisible,
                        !0,
                      ),
                    null === VRHTML ||
                      void 0 === VRHTML ||
                      VRHTML.VROverlay.SetInputMethod(
                        VRHTML.VROverlay.ThisOverlayHandle(),
                        a.Rk.Mouse,
                      );
                  try {
                    yield Promise.all([
                      (0, H.uV)(
                        ["vrmonitor", "dashboard", "bindingui"],
                        null === VRHTML || void 0 === VRHTML
                          ? void 0
                          : VRHTML.GetSteamLanguage(),
                      ),
                      d.HR.Init(!0),
                      j.W.Init(!0),
                      $.B$.Init(),
                      q.s.Init(),
                      K.X.Init(),
                    ]),
                      yield Promise.all([
                        ae.Q.Init(),
                        F.SW.Init(),
                        se.r.Init(),
                        c.H.Init(),
                      ]),
                      yield (0, le.I)();
                  } catch (e) {
                    console.error("Failed to initialize systemui:", e);
                  }
                  i.H(t).render(
                    r.createElement(a.O5, null, r.createElement(ie, null)),
                  );
                } else
                  console.error(
                    "Unable to boostrap systemUI because CurrentEnvironment() returns " +
                      a.OH[(0, a.R$)()],
                  );
              else
                console.error(
                  "Unable to boostrap systemUI because " + e + " was not found",
                );
            });
          }
          constructor(e) {
            super(e),
              (this.m_DashboardRequestedCallbackHandle = null),
              (this.m_mailbox = new a._n()),
              (this.m_DashboardRef = null),
              (this.m_DeviceEventCallbackHandle = null),
              (this.m_DashboardRef = r.createRef()),
              this.m_mailbox.Init("systemui").then(() => {}),
              (this.state = { bShowBaseInfo: !1 });
          }
          componentDidMount() {
            (window.toggleDevPanel = this.toggleDevPanel),
              (this.m_DeviceEventCallbackHandle =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.RegisterForDeviceEvents(this.DeviceEvent));
          }
          componentWillUnmount() {
            var e, t;
            null === (e = this.m_DashboardRequestedCallbackHandle) ||
              void 0 === e ||
              e.unregister(),
              null === (t = this.m_DeviceEventCallbackHandle) ||
                void 0 === t ||
                t.unregister();
          }
          toggleDevPanel() {
            this.setDevPanelVisible(!this.devPanelVisible);
          }
          get devPanelVisible() {
            return d.HR.settings.get(ie.k_sPropShowDevPanel);
          }
          setDevPanelVisible(e) {
            d.HR.SetSettingsValue(ie.k_sPropShowDevPanel, e);
          }
          onToggleBaseInfo() {
            this.setState({ bShowBaseInfo: !this.state.bShowBaseInfo });
          }
          DeviceEvent(e, t, n) {
            e == a.ku.Activated &&
              (null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VRSystem.GetTrackedDeviceClasses().some(
                    (e) => e.unIndex == n && e.eClass == a.mo.Controller,
                  )) &&
              this.forceUpdate();
          }
          render() {
            let e = [],
              t = 0;
            return (
              VRHTML.VRSystem.GetTrackedDeviceClasses().some(
                (n) => (
                  n.eClass == a.mo.Controller &&
                    (t++,
                    e.push(
                      r.createElement(
                        ue.tH,
                        { key: "controllerstatus_" + n.unIndex },
                        r.createElement(W.C, { trackedDeviceIndex: n.unIndex }),
                      ),
                    )),
                  t >= 8
                ),
              ),
              e.push(
                r.createElement(
                  ue.tH,
                  { key: "basestationstatus" },
                  r.createElement(pe, null),
                ),
              ),
              e.push(
                r.createElement(
                  ue.tH,
                  { key: "dashboard" },
                  r.createElement(V.cQ, { ref: this.m_DashboardRef }),
                ),
              ),
              e.push(
                r.createElement(
                  ue.tH,
                  { key: "transition" },
                  r.createElement(Z, null),
                ),
              ),
              this.devPanelVisible &&
                e.push(
                  r.createElement(
                    ue.tH,
                    { key: "devpanel" },
                    r.createElement(ce, {
                      onCloseDevPanel: () => this.setDevPanelVisible(!1),
                      onToggleBaseInfo: this.onToggleBaseInfo,
                    }),
                  ),
                ),
              this.state.bShowBaseInfo &&
                e.push(
                  r.createElement(
                    ue.tH,
                    { key: "baseinfo" },
                    r.createElement(z, null),
                  ),
                ),
              (null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VRProperties.GetBoolProperty(
                    a.Gz,
                    a.fD.DriverProvidedIPDVisibility_Bool,
                  )) ||
                e.push(
                  r.createElement(
                    ue.tH,
                    { key: "ipd" },
                    r.createElement(N, null),
                  ),
                ),
              e.push(
                r.createElement(
                  ue.tH,
                  { key: "progressindicator" },
                  r.createElement(S, null),
                ),
              ),
              e.push(
                r.createElement(
                  ue.tH,
                  { key: "chaperonesafety" },
                  r.createElement(D, null),
                ),
              ),
              e.push(
                r.createElement(
                  ue.tH,
                  { key: "pooledpopups" },
                  r.createElement(de.F, null),
                ),
              ),
              e.push(
                r.createElement(
                  ue.tH,
                  { key: "construct" },
                  r.createElement(re, null),
                ),
              ),
              e.push(
                r.createElement(
                  ue.tH,
                  { key: "roomsetup" },
                  r.createElement(P, null),
                ),
              ),
              e.push(
                r.createElement(
                  ue.tH,
                  { key: "persistentnotifications" },
                  r.createElement(Y, null),
                ),
              ),
              r.createElement("span", null, e)
            );
          }
        });
        (me.k_sPropShowDevPanel = "/settings/dashboard/showDevPanel"),
          (0, o.Cg)([s.o], me.prototype, "toggleDevPanel", null),
          (0, o.Cg)([U.EW], me.prototype, "devPanelVisible", null),
          (0, o.Cg)([s.o], me.prototype, "setDevPanelVisible", null),
          (0, o.Cg)([s.o], me.prototype, "onToggleBaseInfo", null),
          (0, o.Cg)([s.o], me.prototype, "DeviceEvent", null),
          (me = ie = (0, o.Cg)([l.PA], me)),
          console.log("systemui.tsx is running"),
          me.bootstrap("#root");
      },
      9471: (e, t, n) => {
        "use strict";
        n.d(t, {
          bm: () => _,
          Pq: () => h,
          Xj: () => v,
          DO: () => c,
          FG: () => d,
          YN: () => u,
          hU: () => p,
          WM: () => m,
          fr: () => g,
          Kj: () => f,
        });
        var o = n(1635),
          r = n(6540);
        let i = 0;
        function s() {
          const e = r.useRef(void 0);
          return (
            void 0 === e.current && (e.current = "svgid_" + i++),
            [e.current, `url(#${e.current})`]
          );
        }
        var a = n(108),
          l = n.n(a);
        function d(e) {
          return r.createElement(
            "svg",
            Object.assign(
              {
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                x: "0px",
                y: "0px",
                viewBox: "0 0 100 100",
                xmlSpace: "preserve",
              },
              e,
            ),
            r.createElement(
              "g",
              null,
              r.createElement("path", {
                d: "M93.8,50v28.1c0,8.6-7,15.6-15.6,15.6H21.9c-8.6,0-15.6-7-15.6-15.6V21.9c0-8.6,7-15.6,15.6-15.6H50c1.7,0,3.1,1.4,3.1,3.1\r\n\t\t\t\ts-1.4,3.1-3.1,3.1H21.9c-5.2,0-9.4,4.2-9.4,9.4v56.3c0,5.2,4.2,9.4,9.4,9.4h56.3c5.2,0,9.4-4.2,9.4-9.4V50c0-1.7,1.4-3.1,3.1-3.1\r\n\t\t\t\tS93.8,48.3,93.8,50z M68.8,12.5h14.3L47.8,47.8c-1.2,1.2-1.2,3.2,0,4.4c0,0,0,0,0,0c1.2,1.2,3.2,1.2,4.4,0c0,0,0,0,0,0l35.3-35.3\r\n\t\t\t\tv14.3c0,1.7,1.4,3.1,3.1,3.1l0,0c1.7,0,3.1-1.4,3.1-3.1V9.4c0-0.8-0.3-1.6-0.9-2.2c-0.6-0.6-1.4-0.9-2.2-0.9H68.8\r\n\t\t\t\tc-1.7,0-3.1,1.4-3.1,3.1S67,12.5,68.8,12.5z",
              }),
            ),
          );
        }
        function u(e) {
          return r.createElement(
            "svg",
            Object.assign(
              {
                fill: "#FFFFFF",
                xmlns: "http://www.w3.org/2000/svg",
                className: "SVGIcon_Button SVGIcon_Popout",
                viewBox: "0 0 8 8",
                x: "0px",
                y: "0px",
              },
              e,
            ),
            r.createElement("path", {
              d: "M0 0v8h8v-2h-1v1h-6v-6h1v-1h-2zm4 0l1.5 1.5-2.5 2.5 1 1 2.5-2.5 1.5 1.5v-4h-4z",
            }),
          );
        }
        function c(e) {
          return r.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                className: "SVGIcon_Button SVGIcon_Playspace",
                viewBox: "0 0 36 36",
                fill: "none",
              },
              e,
            ),
            r.createElement("path", {
              fill: "currentColor",
              d: "M15.6615 10.25C15.3525 10.7125 15.1875 11.2562 15.1875 11.8125C15.1867 12.1821 15.2589 12.5482 15.3999 12.8898C15.541 13.2314 15.7481 13.5417 16.0094 13.8031C16.2708 14.0644 16.5811 14.2715 16.9227 14.4126C17.2643 14.5536 17.6304 14.6258 18 14.625C18.5563 14.625 19.1 14.4601 19.5625 14.151C20.0251 13.842 20.3855 13.4027 20.5984 12.8888C20.8113 12.3749 20.867 11.8094 20.7585 11.2638C20.6499 10.7182 20.3821 10.2171 19.9887 9.82376C19.5954 9.43043 19.0943 9.16256 18.5487 9.05404C18.0031 8.94552 17.4376 9.00122 16.9237 9.21409C16.4098 9.42696 15.9705 9.78745 15.6615 10.25Z",
            }),
            r.createElement("path", {
              fill: "currentColor",
              d: "M14.4645 17.9645C15.4021 17.0268 16.6739 16.5 18 16.5C19.3261 16.5 20.5979 17.0268 21.5355 17.9645C22.4732 18.9021 23 20.1739 23 21.5V24H21L20.5 29H15.5L15 24H13V21.5C13 20.1739 13.5268 18.9021 14.4645 17.9645Z",
            }),
            r.createElement("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M18 0L35 7.00016V29L18 36L1 29V7.00016L18 0ZM4 27.7647V9.76471L18 4L32 9.76471V27.7647L24.6111 24.7222L24.1734 27.7864L27.1208 29L18 32.7556L8.87919 29L11.8266 27.7864L11.3889 24.7222L4 27.7647Z",
            }),
          );
        }
        function p(e) {
          return r.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                className: "SVGIcon_Button SVGIcon_Recenter",
                viewBox: "0 0 36 36",
                fill: "none",
              },
              e,
            ),
            r.createElement("path", {
              fill: "currentColor",
              d: "M14.7261 2.74994C14.2934 3.39746 14.0625 4.15874 14.0625 4.9375C14.0613 5.45491 14.1624 5.96744 14.3599 6.44568C14.5573 6.92392 14.8473 7.35845 15.2132 7.72431C15.5791 8.09017 16.0136 8.38016 16.4918 8.57763C16.9701 8.7751 17.4826 8.87616 18 8.875C18.7788 8.875 19.54 8.64407 20.1876 8.21141C20.8351 7.77876 21.3398 7.1638 21.6378 6.44432C21.9358 5.72483 22.0138 4.93313 21.8618 4.16933C21.7099 3.40553 21.3349 2.70394 20.7842 2.15327C20.2336 1.6026 19.532 1.22759 18.7682 1.07566C18.0044 0.92373 17.2127 1.00171 16.4932 1.29973C15.7737 1.59775 15.1587 2.10243 14.7261 2.74994Z",
            }),
            r.createElement("path", {
              fill: "currentColor",
              d: "M13.0503 13.5503C14.363 12.2375 16.1435 11.5 18 11.5C19.8565 11.5 21.637 12.2375 22.9497 13.5503C24.2625 14.863 25 16.6435 25 18.5V22H22.2L21.5 29H14.5L13.8 22H11V18.5C11 16.6435 11.7375 14.863 13.0503 13.5503Z",
            }),
            r.createElement("path", {
              fill: "currentColor",
              d: "M3 29C3 26.5645 5.66517 24.4196 9.70869 23.1656L10.0112 26.224C9.52728 26.393 9.07639 26.5754 8.66205 26.7688C6.18364 27.9254 6 28.9249 6 29C6 29.0751 6.18364 30.0746 8.66205 31.2312C10.8969 32.2741 14.1952 33 18 33C21.8048 33 25.1031 32.2741 27.3379 31.2312C29.8164 30.0746 30 29.0751 30 29C30 28.9249 29.8164 27.9254 27.3379 26.7688C26.9236 26.5754 26.4727 26.393 25.9888 26.224L26.2913 23.1656C30.3348 24.4196 33 26.5645 33 29C33 32.866 26.2843 36 18 36C9.71573 36 3 32.866 3 29Z",
            }),
          );
        }
        function m(e) {
          return r.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                className: "SVGIcon_Button",
                viewBox: "0 0 36 36",
                fill: "none",
              },
              e,
            ),
            r.createElement("path", {
              fill: "currentColor",
              d: "M11 9H29V19H26.6585C26.8797 19.6256 27 20.2987 27 21C27 21.3407 26.9716 21.6748 26.917 22H32V6H8V15.083C8.32521 15.0284 8.65929 15 9 15C9.70126 15 10.3744 15.1203 11 15.3415V9Z",
            }),
            r.createElement("path", {
              fill: "currentColor",
              d: "M9 24C10.6569 24 12 22.6569 12 21C12 19.3431 10.6569 18 9 18C7.34315 18 6 19.3431 6 21C6 22.6569 7.34315 24 9 24Z",
            }),
            r.createElement("path", {
              fill: "currentColor",
              d: "M21 24C22.6569 24 24 22.6569 24 21C24 19.3431 22.6569 18 21 18C19.3431 18 18 19.3431 18 21C18 22.6569 19.3431 24 21 24Z",
            }),
            r.createElement("path", {
              fill: "currentColor",
              d: "M26 30C26 27.2386 23.7614 25 21 25C18.2386 25 16 27.2386 16 30V32H26V30Z",
            }),
            r.createElement("path", {
              fill: "currentColor",
              d: "M14 30C14 27.2386 11.7614 25 9 25C6.23858 25 4 27.2386 4 30V32H14V30Z",
            }),
          );
        }
        function h(e) {
          const { none: t, partial: n, right: i, left: s } = e,
            a = (0, o.Tt)(e, ["none", "partial", "right", "left"]);
          return t
            ? r.createElement(
                "svg",
                Object.assign(
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "SVGIcon_Button SVGIcon_ControllerStatus",
                    viewBox: "0 0 36 36",
                    fill: "none",
                  },
                  a,
                ),
                r.createElement("path", {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M33.5871 3.5268L31.4417 1.38135L26.6841 6.13886C24.4873 5.49306 21.6236 5 18 5C7.5 5 3.38 9.14 3.38 9.14C3.38 9.14 0 20.56 0 25.2C0 27.1825 1.62275 28.7886 3.01931 29.8037L0.370949 32.452L2.5164 34.5975L33.5871 3.5268ZM23.2678 19.2678C23.0842 19.4513 22.8735 19.6049 22.6433 19.7232L17.3666 25H25L31 31C31 31 36 28.68 36 25.2C36 21.1218 33.3889 11.806 32.7566 9.60992L29.8137 12.5529C29.9361 12.852 30 13.1736 30 13.5C30 14.163 29.7366 14.7989 29.2678 15.2678C28.7989 15.7366 28.163 16 27.5 16C27.1736 16 26.852 15.9361 26.5529 15.8137L23.7232 18.6433C23.6049 18.8735 23.4513 19.0842 23.2678 19.2678ZM15 17H12V20H9V17H6V14H9V11H12V14H15V17Z",
                }),
              )
            : n || i
              ? r.createElement(
                  "svg",
                  Object.assign(
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      className: "SVGIcon_Button SVGIcon_ControllerStatus",
                      viewBox: "0 0 36 36",
                      fill: "none",
                    },
                    a,
                  ),
                  r.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M32.62 9.14C32.62 9.14 28.5 5 18 5V25H25L31 31C31 31 36 28.68 36 25.2C36 20.56 32.62 9.14 32.62 9.14ZM21.5 20C21.0055 20 20.5222 19.8534 20.1111 19.5787C19.7 19.304 19.3795 18.9135 19.1903 18.4567C19.0011 17.9999 18.9516 17.4972 19.048 17.0123C19.1445 16.5273 19.3826 16.0819 19.7322 15.7322C20.0819 15.3826 20.5273 15.1445 21.0123 15.048C21.4972 14.9516 21.9999 15.0011 22.4567 15.1903C22.9135 15.3795 23.304 15.7 23.5787 16.1111C23.8534 16.5222 24 17.0055 24 17.5C24 17.8283 23.9353 18.1534 23.8097 18.4567C23.6841 18.76 23.4999 19.0356 23.2678 19.2678C23.0356 19.4999 22.76 19.6841 22.4567 19.8097C22.1534 19.9353 21.8283 20 21.5 20ZM27.5 16C27.0055 16 26.5222 15.8534 26.1111 15.5787C25.7 15.304 25.3795 14.9135 25.1903 14.4567C25.0011 13.9999 24.9516 13.4972 25.048 13.0123C25.1445 12.5273 25.3826 12.0819 25.7322 11.7322C26.0819 11.3826 26.5273 11.1445 27.0123 11.048C27.4972 10.9516 27.9999 11.0011 28.4567 11.1903C28.9135 11.3795 29.304 11.7 29.5787 12.1111C29.8534 12.5222 30 13.0055 30 13.5C30 14.163 29.7366 14.7989 29.2678 15.2678C28.7989 15.7366 28.163 16 27.5 16Z",
                  }),
                  r.createElement("path", {
                    fill: "currentColor",
                    opacity: "0.5",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3.38 9.14C3.38 9.14 0 20.56 0 25.2C0 28.68 5 31 5 31L11 25H18V5C7.5 5 3.38 9.14 3.38 9.14ZM15 17H12V20H9V17H6V14H9V11H12V14H15V17Z",
                  }),
                )
              : s
                ? r.createElement(
                    "svg",
                    Object.assign(
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "SVGIcon_Button SVGIcon_ControllerStatus",
                        viewBox: "0 0 36 36",
                        fill: "none",
                      },
                      a,
                    ),
                    r.createElement("path", {
                      fill: "currentColor",
                      opacity: "0.5",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M32.62 9.14C32.62 9.14 28.5 5 18 5V25H25L31 31C31 31 36 28.68 36 25.2C36 20.56 32.62 9.14 32.62 9.14ZM21.5 20C21.0055 20 20.5222 19.8534 20.1111 19.5787C19.7 19.304 19.3795 18.9135 19.1903 18.4567C19.0011 17.9999 18.9516 17.4972 19.048 17.0123C19.1445 16.5273 19.3826 16.0819 19.7322 15.7322C20.0819 15.3826 20.5273 15.1445 21.0123 15.048C21.4972 14.9516 21.9999 15.0011 22.4567 15.1903C22.9135 15.3795 23.304 15.7 23.5787 16.1111C23.8534 16.5222 24 17.0055 24 17.5C24 17.8283 23.9353 18.1534 23.8097 18.4567C23.6841 18.76 23.4999 19.0356 23.2678 19.2678C23.0356 19.4999 22.76 19.6841 22.4567 19.8097C22.1534 19.9353 21.8283 20 21.5 20ZM27.5 16C27.0055 16 26.5222 15.8534 26.1111 15.5787C25.7 15.304 25.3795 14.9135 25.1903 14.4567C25.0011 13.9999 24.9516 13.4972 25.048 13.0123C25.1445 12.5273 25.3826 12.0819 25.7322 11.7322C26.0819 11.3826 26.5273 11.1445 27.0123 11.048C27.4972 10.9516 27.9999 11.0011 28.4567 11.1903C28.9135 11.3795 29.304 11.7 29.5787 12.1111C29.8534 12.5222 30 13.0055 30 13.5C30 14.163 29.7366 14.7989 29.2678 15.2678C28.7989 15.7366 28.163 16 27.5 16Z",
                    }),
                    r.createElement("path", {
                      fill: "currentColor",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M3.38 9.14C3.38 9.14 0 20.56 0 25.2C0 28.68 5 31 5 31L11 25H18V5C7.5 5 3.38 9.14 3.38 9.14ZM15 17H12V20H9V17H6V14H9V11H12V14H15V17Z",
                    }),
                  )
                : r.createElement(
                    "svg",
                    Object.assign(
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "SVGIcon_Button SVGIcon_ControllerStatus",
                        viewBox: "0 0 36 36",
                        fill: "none",
                      },
                      a,
                    ),
                    r.createElement("path", {
                      fill: "currentColor",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M32.62 9.14C32.62 9.14 28.5 5 18 5C7.5 5 3.38 9.14 3.38 9.14C3.38 9.14 0 20.56 0 25.2C0 28.68 5 31 5 31L11 25H25L31 31C31 31 36 28.68 36 25.2C36 20.56 32.62 9.14 32.62 9.14ZM15 17H12V20H9V17H6V14H9V11H12V14H15V17ZM21.5 20C21.0055 20 20.5222 19.8534 20.1111 19.5787C19.7 19.304 19.3795 18.9135 19.1903 18.4567C19.0011 17.9999 18.9516 17.4972 19.048 17.0123C19.1445 16.5273 19.3826 16.0819 19.7322 15.7322C20.0819 15.3826 20.5273 15.1445 21.0123 15.048C21.4972 14.9516 21.9999 15.0011 22.4567 15.1903C22.9135 15.3795 23.304 15.7 23.5787 16.1111C23.8534 16.5222 24 17.0055 24 17.5C24 17.8283 23.9353 18.1534 23.8097 18.4567C23.6841 18.76 23.4999 19.0356 23.2678 19.2678C23.0356 19.4999 22.76 19.6841 22.4567 19.8097C22.1534 19.9353 21.8283 20 21.5 20ZM27.5 16C27.0055 16 26.5222 15.8534 26.1111 15.5787C25.7 15.304 25.3795 14.9135 25.1903 14.4567C25.0011 13.9999 24.9516 13.4972 25.048 13.0123C25.1445 12.5273 25.3826 12.0819 25.7322 11.7322C26.0819 11.3826 26.5273 11.1445 27.0123 11.048C27.4972 10.9516 27.9999 11.0011 28.4567 11.1903C28.9135 11.3795 29.304 11.7 29.5787 12.1111C29.8534 12.5222 30 13.0055 30 13.5C30 14.163 29.7366 14.7989 29.2678 15.2678C28.7989 15.7366 28.163 16 27.5 16Z",
                    }),
                  );
        }
        function v(e) {
          return r.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                className: "SVGIcon_Button SVGIcon_Minimize",
                viewBox: "0 0 36 36",
                fill: "none",
              },
              e,
            ),
            r.createElement("path", {
              d: "M32 27V32H4V27H32ZM29 10.77L25.48 7.22998L18 14.72L10.5 7.22998L7 10.77L18 21.77L29 10.77Z",
              fill: "currentColor",
            }),
          );
        }
        function g(e) {
          return r.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                className: "SVGIcon_Button SVGIcon_TheaterMode",
                viewBox: "0 0 36 36",
                fill: "none",
              },
              e,
            ),
            r.createElement("path", {
              fill: "currentColor",
              d: "M18 1C8.4375 1 1 3 1 3V23C1 23 5.70777 21.734 12.448 21.2165L18.0004 15.6641L23.5529 21.2166C30.2926 21.7342 35 23 35 23V3C35 3 27.5625 1 18 1Z",
            }),
            r.createElement("path", {
              fill: "currentColor",
              d: "M8 31.3209L11.2 34.5391L18 27.73L24.8182 34.5391L28 31.3209L18 21.3209L8 31.3209Z",
            }),
          );
        }
        function _(e) {
          return r.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                className: "SVGIcon_Button SVGIcon_Close",
                viewBox: "0 0 36 36",
                fill: "none",
              },
              e,
            ),
            r.createElement("path", {
              d: "M32.12 7.41L28.59 3.88L18 14.46L7.41 3.88L3.88 7.41L14.46 18L3.88 28.59L7.41 32.12L18 21.54L28.59 32.12L32.12 28.59L21.54 18L32.12 7.41Z",
              fill: "currentColor",
            }),
          );
        }
        function f(e) {
          const [t, n] = s(),
            [o, i] = s();
          return r.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "500",
                height: "250",
                viewBox: "0 0 500 250",
                fill: "none",
              },
              e,
            ),
            r.createElement(
              "g",
              { clipPath: i },
              r.createElement(
                "mask",
                {
                  id: t,
                  style: { maskType: "luminance" },
                  maskUnits: "userSpaceOnUse",
                  x: "0",
                  y: "0",
                  width: "500",
                  height: "250",
                },
                r.createElement("path", {
                  fill: "white",
                  d: "M500 0H0V250H500V0Z",
                }),
              ),
              r.createElement(
                "g",
                { mask: n },
                r.createElement("path", {
                  fill: "#323232EE",
                  d: "M375 0H125C55.9644 0 0 55.9644 0 125C0 194.036 55.9644 250 125 250H375C444.036 250 500 194.036 500 125C500 55.9644 444.036 0 375 0Z",
                }),
                r.createElement("path", {
                  fill: "black",
                  d: "M310.749 58.0107C321.991 58.0522 333.222 58.2335 344.453 58.9082L345.688 58.9844C358.47 59.7916 371.932 61.2894 384.305 64.8662L384.905 65.042C397.49 68.7656 409.658 74.9172 418.358 85.415L418.564 85.667C427.273 96.3129 431.026 109.475 431.828 122.783L431.851 123.191C432.306 131.63 431.341 139.668 429.338 147.856L429.241 148.253C427.178 156.567 424.026 164.173 418.677 171.01L418.421 171.335C407.052 185.613 390.364 190.677 373.375 191.612L372.974 191.634C370.365 191.764 367.761 191.789 365.147 191.661L364.624 191.634C361.417 191.451 358.273 191.047 355.142 190.289C352.096 189.555 349.228 188.524 346.434 187.117L346.164 186.979C340.19 183.91 335.864 179.679 331.881 174.433C330.428 172.525 329.071 170.552 327.725 168.573L326.379 166.594C324.575 163.95 322.765 161.333 320.641 158.925C318.353 156.327 316.032 154.326 313.392 152.972C310.753 151.618 307.793 150.911 304.227 150.904C297.097 150.917 292.141 153.731 287.566 158.925C285.707 161.032 284.089 163.3 282.505 165.604L281.829 166.594C280.031 169.231 278.263 171.889 276.326 174.433L275.586 175.389C271.867 180.114 267.789 183.969 262.323 186.835L262.044 186.979C259.255 188.411 256.394 189.463 253.36 190.217L253.066 190.289C250.032 191.023 246.987 191.425 243.884 191.616L243.584 191.634C240.795 191.792 238.017 191.773 235.234 191.634C218.107 190.756 201.245 185.726 189.787 171.335C184.368 164.523 181.164 156.94 179.067 148.648L178.967 148.253C176.866 139.795 175.863 131.507 176.38 122.783L176.399 122.469C177.247 109.163 181.062 96.0212 189.85 85.415L190.058 85.166C198.882 74.6545 211.204 68.5422 223.902 64.8662L224.501 64.6943C237.109 61.1275 250.813 59.6846 263.755 58.9082L264.39 58.8711C275.722 58.2187 291.472 58.0466 304.078 58.0088C304.084 58.0032 304.092 58 304.101 58L306.624 58.001C306.865 58.0012 307.105 58.0016 307.345 58.002C308.51 58.0003 309.638 58 310.724 58C310.734 58 310.743 58.004 310.749 58.0107Z",
                }),
                r.createElement("path", {
                  fill: "white",
                  d: "M310.749 58.0107L306.448 62.0367C307.557 63.2216 309.105 63.8966 310.728 63.9026L310.749 58.0107ZM344.453 58.9082L344.815 53.0275L344.806 53.0269L344.453 58.9082ZM345.688 58.9844L346.059 53.1042L346.051 53.1037L345.688 58.9844ZM384.305 64.8662L385.963 59.2123C385.956 59.2102 385.948 59.2081 385.941 59.2061L384.305 64.8662ZM384.905 65.042L386.576 59.3922C386.572 59.3908 386.567 59.3894 386.562 59.3881L384.905 65.042ZM418.358 85.415L422.919 81.685C422.911 81.6752 422.903 81.6653 422.894 81.6555L418.358 85.415ZM418.564 85.667L414.003 89.397L414.004 89.3977L418.564 85.667ZM431.828 122.783L437.71 122.445C437.709 122.44 437.709 122.434 437.709 122.429L431.828 122.783ZM431.851 123.191L437.734 122.874C437.734 122.867 437.734 122.86 437.733 122.854L431.851 123.191ZM429.338 147.856L435.059 149.266L435.062 149.256L429.338 147.856ZM429.241 148.253L434.959 149.672L434.962 149.662L429.241 148.253ZM418.677 171.01L423.308 174.653C423.311 174.649 423.314 174.645 423.318 174.64L418.677 171.01ZM418.421 171.335L423.031 175.005C423.038 174.996 423.045 174.987 423.052 174.978L418.421 171.335ZM373.375 191.612L373.69 197.496L373.699 197.495L373.375 191.612ZM372.974 191.634L373.268 197.518C373.275 197.518 373.282 197.518 373.289 197.517L372.974 191.634ZM365.147 191.661L364.84 197.545C364.846 197.545 364.853 197.546 364.86 197.546L365.147 191.661ZM364.624 191.634L364.288 197.516C364.297 197.517 364.307 197.517 364.316 197.518L364.624 191.634ZM355.142 190.289L356.528 184.562L356.523 184.561L355.142 190.289ZM346.434 187.117L343.761 192.368C343.769 192.372 343.776 192.376 343.784 192.379L346.434 187.117ZM346.164 186.979L343.471 192.22C343.477 192.223 343.484 192.227 343.491 192.23L346.164 186.979ZM331.881 174.433L336.574 170.87L336.568 170.863L331.881 174.433ZM326.379 166.594L331.252 163.281L331.246 163.273L326.379 166.594ZM320.641 158.925L316.22 162.819L316.222 162.822L320.641 158.925ZM304.227 150.904L304.237 145.012C304.231 145.012 304.224 145.012 304.217 145.012L304.227 150.904ZM287.566 158.925L291.985 162.822L291.987 162.819L287.566 158.925ZM282.505 165.604L277.65 162.267L277.643 162.278L282.505 165.604ZM281.829 166.594L276.966 163.267L276.96 163.275L281.829 166.594ZM276.326 174.433L280.987 178.037C280.995 178.025 281.004 178.014 281.013 178.003L276.326 174.433ZM275.586 175.389L280.216 179.032C280.227 179.019 280.237 179.006 280.247 178.993L275.586 175.389ZM262.323 186.835L265.038 192.064C265.045 192.06 265.052 192.057 265.059 192.053L262.323 186.835ZM262.044 186.979L264.735 192.221C264.743 192.217 264.751 192.213 264.76 192.208L262.044 186.979ZM253.36 190.217L254.766 195.938L254.779 195.935L253.36 190.217ZM253.066 190.289L254.452 196.016C254.459 196.014 254.466 196.012 254.473 196.011L253.066 190.289ZM243.884 191.616L244.229 197.498C244.235 197.498 244.24 197.497 244.246 197.497L243.884 191.616ZM243.584 191.634L243.917 197.516H243.929L243.584 191.634ZM235.234 191.634L234.932 197.518H234.94L235.234 191.634ZM189.787 171.335L185.176 175.003L185.177 175.005L189.787 171.335ZM179.067 148.648L173.353 150.087L173.355 150.093L179.067 148.648ZM178.967 148.253L173.249 149.674C173.251 149.68 173.252 149.686 173.254 149.692L178.967 148.253ZM176.38 122.783L182.262 123.132V123.13L176.38 122.783ZM176.399 122.469L170.519 122.094C170.518 122.103 170.518 122.112 170.517 122.122L176.399 122.469ZM189.85 85.415L185.328 81.6379C185.323 81.6439 185.318 81.6499 185.313 81.656L189.85 85.415ZM190.058 85.166L185.545 81.3778C185.542 81.3815 185.539 81.3852 185.536 81.3889L190.058 85.166ZM223.902 64.8662L222.278 59.2024C222.273 59.2039 222.268 59.2053 222.263 59.2067L223.902 64.8662ZM224.501 64.6943L222.898 59.025C222.891 59.0268 222.884 59.0287 222.878 59.0306L224.501 64.6943ZM263.755 58.9082L263.411 53.0264L263.403 53.0269L263.755 58.9082ZM264.39 58.8711L264.051 52.989L264.046 52.9893L264.39 58.8711ZM304.078 58.0088L304.095 63.9006C305.56 63.8962 306.972 63.3461 308.053 62.3574L304.078 58.0088ZM304.101 58L304.103 52.1081H304.101V58ZM306.624 58.001L306.631 52.1091H306.627L306.624 58.001ZM307.345 58.002L307.336 63.8938C307.342 63.8938 307.348 63.8938 307.353 63.8938L307.345 58.002ZM310.724 58L310.731 52.1081H310.724V58ZM310.749 58.0107L310.728 63.9026C321.929 63.9439 333.032 64.1246 344.099 64.7895L344.453 58.9082L344.806 53.0269C333.412 52.3424 322.053 52.1606 310.771 52.1189L310.749 58.0107ZM344.453 58.9082L344.09 64.7889L345.325 64.8651L345.688 58.9844L346.051 53.1037L344.815 53.0275L344.453 58.9082ZM345.688 58.9844L345.317 64.8645C357.955 65.6626 370.913 67.1279 382.669 70.5263L384.305 64.8662L385.941 59.2061C372.951 55.4509 358.986 53.9206 346.059 53.1042L345.688 58.9844ZM384.305 64.8662L382.648 70.5201L383.247 70.6959L384.905 65.042L386.562 59.3881L385.963 59.2123L384.305 64.8662ZM384.905 65.042L383.233 70.6918C395.184 74.2276 406.136 79.9016 413.821 89.1746L418.358 85.415L422.894 81.6555C413.179 69.9329 399.796 63.3036 386.576 59.3922L384.905 65.042ZM418.358 85.415L413.797 89.145L414.003 89.397L418.564 85.667L423.125 81.937L422.919 81.685L418.358 85.415ZM418.564 85.667L414.004 89.3977C421.703 98.8088 425.195 110.654 425.946 123.137L431.828 122.783L437.709 122.429C436.858 108.296 432.844 93.8169 423.124 81.9362L418.564 85.667ZM431.828 122.783L425.945 123.121L425.969 123.529L431.851 123.191L437.733 122.854L437.71 122.445L431.828 122.783ZM431.851 123.191L425.968 123.509C426.387 131.272 425.506 138.725 423.615 146.457L429.338 147.856L435.062 149.256C437.176 140.611 438.226 131.988 437.734 122.874L431.851 123.191ZM429.338 147.856L423.617 146.447L423.52 146.844L429.241 148.253L434.962 149.662L435.059 149.266L429.338 147.856ZM429.241 148.253L423.522 146.834C421.599 154.587 418.74 161.368 414.037 167.379L418.677 171.01L423.318 174.64C429.312 166.978 432.757 158.547 434.959 149.672L429.241 148.253ZM418.677 171.01L414.047 167.367L413.791 167.692L418.421 171.335L423.052 174.978L423.308 174.653L418.677 171.01ZM418.421 171.335L413.812 167.665C403.912 180.099 389.182 184.841 373.052 185.729L373.375 191.612L373.699 197.495C391.545 196.513 410.193 191.128 423.031 175.005L418.421 171.335ZM373.375 191.612L373.061 185.729L372.659 185.75L372.974 191.634L373.289 197.517L373.69 197.496L373.375 191.612ZM372.974 191.634L372.68 185.749C370.229 185.872 367.821 185.893 365.434 185.776L365.147 191.661L364.86 197.546C367.7 197.684 370.501 197.656 373.268 197.518L372.974 191.634ZM365.147 191.661L365.454 185.777L364.931 185.75L364.624 191.634L364.316 197.518L364.84 197.545L365.147 191.661ZM364.624 191.634L364.959 185.751C362.027 185.584 359.245 185.22 356.528 184.562L355.142 190.289L353.756 196.016C357.302 196.874 360.807 197.317 364.288 197.516L364.624 191.634ZM355.142 190.289L356.523 184.561C353.891 183.927 351.451 183.047 349.084 181.855L346.434 187.117L343.784 192.379C347.005 194.001 350.302 195.183 353.762 196.017L355.142 190.289ZM346.434 187.117L349.107 181.866L348.836 181.729L346.164 186.979L343.491 192.23L343.761 192.368L346.434 187.117ZM346.164 186.979L348.856 181.739C343.902 179.193 340.211 175.661 336.574 170.87L331.881 174.433L327.189 177.995C331.517 183.696 336.478 188.627 343.471 192.22L346.164 186.979ZM331.881 174.433L336.568 170.863C335.22 169.092 333.941 167.235 332.597 165.26L327.725 168.573L322.853 171.886C324.202 173.868 325.636 175.957 327.194 178.003L331.881 174.433ZM327.725 168.573L332.598 165.261L331.252 163.281L326.379 166.594L321.507 169.906L322.853 171.886L327.725 168.573ZM326.379 166.594L331.246 163.273C329.455 160.648 327.457 157.746 325.06 155.027L320.641 158.925L316.222 162.822C318.074 164.921 319.695 167.252 321.513 169.915L326.379 166.594ZM320.641 158.925L325.062 155.03C322.471 152.088 319.587 149.528 316.081 147.729L313.392 152.972L310.703 158.214C312.476 159.124 314.235 160.566 316.22 162.819L320.641 158.925ZM313.392 152.972L316.081 147.729C312.522 145.904 308.628 145.02 304.237 145.012L304.227 150.904L304.217 156.796C306.958 156.801 308.983 157.332 310.703 158.214L313.392 152.972ZM304.227 150.904L304.217 145.012C295.074 145.029 288.602 148.836 283.145 155.03L287.566 158.925L291.987 162.819C295.68 158.627 299.121 156.805 304.237 156.796L304.227 150.904ZM287.566 158.925L283.147 155.027C281.04 157.416 279.257 159.929 277.65 162.267L282.505 165.604L287.361 168.942C288.922 166.67 290.374 164.648 291.985 162.822L287.566 158.925ZM282.505 165.604L277.643 162.278L276.966 163.267L281.829 166.594L286.691 169.92L287.368 168.931L282.505 165.604ZM281.829 166.594L276.96 163.275C275.108 165.993 273.456 168.477 271.638 170.863L276.326 174.433L281.013 178.003C283.07 175.301 284.954 172.469 286.697 169.912L281.829 166.594ZM276.326 174.433L271.665 170.829L270.925 171.785L275.586 175.389L280.247 178.993L280.987 178.037L276.326 174.433ZM275.586 175.389L270.956 171.745C267.595 176.017 264.122 179.238 259.586 181.617L262.323 186.835L265.059 192.053C271.455 188.699 276.14 184.212 280.216 179.032L275.586 175.389ZM262.323 186.835L259.607 181.606L259.329 181.751L262.044 186.979L264.76 192.208L265.038 192.064L262.323 186.835ZM262.044 186.979L259.354 181.738C256.989 182.951 254.558 183.849 251.94 184.498L253.36 190.217L254.779 195.935C258.231 195.078 261.521 193.871 264.735 192.221L262.044 186.979ZM253.36 190.217L251.953 184.495L251.659 184.568L253.066 190.289L254.473 196.011L254.766 195.938L253.36 190.217ZM253.066 190.289L251.68 184.562C249.048 185.199 246.354 185.561 243.522 185.735L243.884 191.616L244.246 197.497C247.62 197.289 251.017 196.847 254.452 196.016L253.066 190.289ZM243.884 191.616L243.539 185.734L243.24 185.752L243.584 191.634L243.929 197.516L244.229 197.498L243.884 191.616ZM243.584 191.634L243.252 185.751C240.708 185.895 238.143 185.88 235.527 185.749L235.234 191.634L234.94 197.518C237.891 197.666 240.881 197.688 243.917 197.516L243.584 191.634ZM235.234 191.634L235.535 185.75C219.259 184.916 204.374 180.196 194.396 167.665L189.787 171.335L185.177 175.005C198.117 191.255 216.956 196.597 234.932 197.518L235.234 191.634ZM189.787 171.335L194.398 167.667C189.633 161.678 186.732 154.923 184.779 147.204L179.067 148.648L173.355 150.093C175.597 158.956 179.102 167.367 185.176 175.003L189.787 171.335ZM179.067 148.648L184.78 147.209L184.681 146.814L178.967 148.253L173.254 149.692L173.353 150.087L179.067 148.648ZM178.967 148.253L184.685 146.832C182.7 138.841 181.786 131.157 182.262 123.132L176.38 122.783L170.499 122.434C169.94 131.858 171.032 140.749 173.249 149.674L178.967 148.253ZM176.38 122.783L182.262 123.13L182.281 122.816L176.399 122.469L170.517 122.122L170.499 122.436L176.38 122.783ZM176.399 122.469L182.279 122.844C183.074 110.369 186.62 98.5479 194.387 89.1741L189.85 85.415L185.313 81.656C175.504 93.4945 171.42 107.957 170.519 122.094L176.399 122.469ZM189.85 85.415L194.372 89.1922L194.58 88.9431L190.058 85.166L185.536 81.3889L185.328 81.6379L189.85 85.415ZM190.058 85.166L194.571 88.9543C202.369 79.6648 213.47 74.0202 225.54 70.5257L223.902 64.8662L222.263 59.2067C208.939 63.0641 195.396 69.6443 185.545 81.3778L190.058 85.166ZM223.902 64.8662L225.525 70.53L226.125 70.3581L224.501 64.6943L222.878 59.0306L222.278 59.2024L223.902 64.8662ZM224.501 64.6943L226.105 70.3637C238.097 66.9713 251.298 65.558 264.108 64.7895L263.755 58.9082L263.403 53.0269C250.328 53.8113 236.122 55.2838 222.898 59.025L224.501 64.6943ZM263.755 58.9082L264.099 64.79L264.734 64.7529L264.39 58.8711L264.046 52.9893L263.411 53.0264L263.755 58.9082ZM264.39 58.8711L264.729 64.7532C275.882 64.1111 291.486 63.9384 304.095 63.9006L304.078 58.0088L304.06 52.1169C291.458 52.1547 275.561 52.3263 264.051 52.989L264.39 58.8711ZM304.078 58.0088L308.053 62.3574C306.911 63.4009 305.478 63.8919 304.101 63.8919V58V52.1081C302.707 52.1081 301.256 52.6055 300.102 53.6601L304.078 58.0088ZM304.101 58L304.099 63.8919L306.622 63.8928L306.624 58.001L306.627 52.1091L304.103 52.1081L304.101 58ZM306.624 58.001L306.618 63.8928C306.857 63.8931 307.096 63.8935 307.336 63.8938L307.345 58.002L307.354 52.1101C307.114 52.1097 306.872 52.1094 306.631 52.1091L306.624 58.001ZM307.345 58.002L307.353 63.8938C308.514 63.8922 309.639 63.8919 310.724 63.8919V58V52.1081C309.637 52.1081 308.506 52.1085 307.337 52.1101L307.345 58.002ZM310.724 58L310.717 63.8919C309.155 63.8901 307.591 63.2586 306.448 62.0367L310.749 58.0107L315.051 53.9848C313.895 52.7495 312.313 52.1099 310.731 52.1081L310.724 58Z",
                }),
                r.createElement("path", {
                  className: l().recordingCircle,
                  fill: "#FF0000",
                  d: "M100.936 151.816C115.816 151.816 127.879 139.753 127.879 124.873C127.879 109.993 115.816 97.9297 100.936 97.9297C86.0556 97.9297 73.9927 109.993 73.9927 124.873C73.9927 139.753 86.0556 151.816 100.936 151.816Z",
                }),
                r.createElement("path", {
                  className: l().recordingCircle,
                  stroke: "#FF0000",
                  d: "M100.934 164.073C122.583 164.073 140.133 146.523 140.133 124.874C140.133 103.225 122.583 85.6752 100.934 85.6752C79.2851 85.6752 61.7352 103.225 61.7352 124.874C61.7352 146.523 79.2851 164.073 100.934 164.073Z",
                  strokeWidth: "4.67767",
                }),
              ),
            ),
            r.createElement(
              "defs",
              null,
              r.createElement(
                "clipPath",
                { id: o },
                r.createElement("rect", {
                  fill: "white",
                  width: "500",
                  height: "250",
                }),
              ),
            ),
          );
        }
      },
      1909: (e, t, n) => {
        "use strict";
        n.d(t, { I: () => l, p: () => d });
        var o = n(1635),
          r = n(6090),
          i = n(4074),
          s = n(7221);
        const a = new (class {
          constructor() {
            (this.m_SteamVR_Provider = new i.tC(this, s.f5)),
              (this.m_Steam_Client = new i.$k(this)),
              (this.m_Steam_ClientMethods = new s.oT(this.m_Steam_Client)),
              (this.m_mailbox = new r._n()),
              (this.m_unNextVRGamepadUIMessageId = 1);
          }
          get Steam() {
            return this.m_Steam_ClientMethods;
          }
          get SteamVR() {
            return this.m_SteamVR_Provider;
          }
          Init() {
            return (0, o.sH)(this, void 0, void 0, function* () {
              yield this.m_mailbox.Init("vrgamepadui_messages"),
                this.m_mailbox.RegisterHandler("vrgamepadui_message", (e) => {
                  const t = (0, i.D7)(e.header);
                  t &&
                    (null == t.response_to_message_id
                      ? this.m_SteamVR_Provider.HandleVRGamepadUIMessageRequest(
                          t,
                          e.payload,
                        )
                      : this.m_Steam_Client.HandleVRGamepadUIMessageResponse(
                          t,
                          e.payload,
                        ));
                });
            });
          }
          CreateVRGamepadUIMessageId() {
            return this.m_unNextVRGamepadUIMessageId++;
          }
          SendVRGamepadUIMessage(e, t) {
            if (!this.m_mailbox.connected) return i.Y7.SendFailure;
            let n, o;
            try {
              n = s.DX.fromObject(e).serializeBase64String();
            } catch (e) {
              return i.Y7.HeaderSerializationFailure;
            }
            try {
              o = t.serializeBase64String();
            } catch (e) {
              return i.Y7.PayloadSerializationFailure;
            }
            try {
              this.m_mailbox.SendMessage("web_steam_mailbox", {
                type: "vrgamepadui_message",
                header: n,
                payload: o,
              });
            } catch (e) {
              return i.Y7.SendFailure;
            }
            return i.Y7.Success;
          }
          IsConnected() {
            return this.m_mailbox.connected;
          }
        })();
        window.VRGamepadUIMessages = a;
        const l = () => a.Init(),
          d = a;
      },
    },
    n = {};
  function o(e) {
    var r = n[e];
    if (void 0 !== r) return r.exports;
    var i = (n[e] = { exports: {} });
    return t[e].call(i.exports, i, i.exports, o), i.exports;
  }
  (o.m = t),
    (e = []),
    (o.O = (t, n, r, i) => {
      if (!n) {
        var s = 1 / 0;
        for (u = 0; u < e.length; u++) {
          for (var [n, r, i] = e[u], a = !0, l = 0; l < n.length; l++)
            (!1 & i || s >= i) && Object.keys(o.O).every((e) => o.O[e](n[l]))
              ? n.splice(l--, 1)
              : ((a = !1), i < s && (s = i));
          if (a) {
            e.splice(u--, 1);
            var d = r();
            void 0 !== d && (t = d);
          }
        }
        return t;
      }
      i = i || 0;
      for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
      e[u] = [n, r, i];
    }),
    (o.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return o.d(t, { a: t }), t;
    }),
    (o.d = (e, t) => {
      for (var n in t)
        o.o(t, n) &&
          !o.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
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
    (() => {
      var e = { 378: 0, 170: 0, 797: 0, 542: 0, 527: 0, 500: 0, 17: 0 };
      o.O.j = (t) => 0 === e[t];
      var t = (t, n) => {
          var r,
            i,
            [s, a, l] = n,
            d = 0;
          if (s.some((t) => 0 !== e[t])) {
            for (r in a) o.o(a, r) && (o.m[r] = a[r]);
            if (l) var u = l(o);
          }
          for (t && t(n); d < s.length; d++)
            (i = s[d]), o.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
          return o.O(u);
        },
        n = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var r = o.O(void 0, [967, 991, 305, 527, 452, 537, 500, 458, 17], () =>
    o(4817),
  );
  r = o.O(r);
})(); //# sourceMappingURL=file:///c:/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/systemui.js.map
