var CLSTAMP = "10585170";
(() => {
  "use strict";
  var e,
    t = {
      5287: (e, t) => {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          o = Symbol.for("react.fragment"),
          s = Symbol.for("react.strict_mode"),
          a = Symbol.for("react.profiler"),
          i = Symbol.for("react.provider"),
          l = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          p = Symbol.for("react.lazy"),
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
        function g(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = _),
            (this.updater = n || f);
        }
        function S() {}
        function v(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = _),
            (this.updater = n || f);
        }
        (g.prototype.isReactComponent = {}),
          (g.prototype.setState = function (e, t) {
            if ("object" != typeof e && "function" != typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (g.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (S.prototype = g.prototype);
        var y = (v.prototype = new S());
        (y.constructor = v), m(y, g.prototype), (y.isPureReactComponent = !0);
        var R = Array.isArray,
          b = Object.prototype.hasOwnProperty,
          O = { current: null },
          C = { key: !0, ref: !0, __self: !0, __source: !0 };
        function k(e, t, r) {
          var o,
            s = {},
            a = null,
            i = null;
          if (null != t)
            for (o in (void 0 !== t.ref && (i = t.ref),
            void 0 !== t.key && (a = "" + t.key),
            t))
              b.call(t, o) && !C.hasOwnProperty(o) && (s[o] = t[o]);
          var l = arguments.length - 2;
          if (1 === l) s.children = r;
          else if (1 < l) {
            for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
            s.children = u;
          }
          if (e && e.defaultProps)
            for (o in (l = e.defaultProps)) void 0 === s[o] && (s[o] = l[o]);
          return {
            $$typeof: n,
            type: e,
            key: a,
            ref: i,
            props: s,
            _owner: O.current,
          };
        }
        function w(e) {
          return "object" == typeof e && null !== e && e.$$typeof === n;
        }
        var T = /\/+/g;
        function P(e, t) {
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
        function M(e, t, o, s, a) {
          var i = typeof e;
          ("undefined" !== i && "boolean" !== i) || (e = null);
          var l = !1;
          if (null === e) l = !0;
          else
            switch (i) {
              case "string":
              case "number":
                l = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    l = !0;
                }
            }
          if (l)
            return (
              (a = a((l = e))),
              (e = "" === s ? "." + P(l, 0) : s),
              R(a)
                ? ((o = ""),
                  null != e && (o = e.replace(T, "$&/") + "/"),
                  M(a, t, o, "", function (e) {
                    return e;
                  }))
                : null != a &&
                  (w(a) &&
                    (a = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      a,
                      o +
                        (!a.key || (l && l.key === a.key)
                          ? ""
                          : ("" + a.key).replace(T, "$&/") + "/") +
                        e,
                    )),
                  t.push(a)),
              1
            );
          if (((l = 0), (s = "" === s ? "." : s + ":"), R(e)))
            for (var u = 0; u < e.length; u++) {
              var c = s + P((i = e[u]), u);
              l += M(i, t, o, c, a);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" != typeof e
                ? null
                : "function" == typeof (e = (h && e[h]) || e["@@iterator"])
                  ? e
                  : null;
            })(e)),
            "function" == typeof c)
          )
            for (e = c.call(e), u = 0; !(i = e.next()).done; )
              l += M((i = i.value), t, o, (c = s + P(i, u++)), a);
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
          return l;
        }
        function E(e, t, n) {
          if (null == e) return e;
          var r = [],
            o = 0;
          return (
            M(e, r, "", "", function (e) {
              return t.call(n, e, o++);
            }),
            r
          );
        }
        function A(e) {
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
        var I = { current: null },
          x = { transition: null },
          B = {
            ReactCurrentDispatcher: I,
            ReactCurrentBatchConfig: x,
            ReactCurrentOwner: O,
          };
        function H() {
          throw Error(
            "act(...) is not supported in production builds of React.",
          );
        }
        (t.Children = {
          map: E,
          forEach: function (e, t, n) {
            E(
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
              E(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              E(e, function (e) {
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
          (t.Component = g),
          (t.Fragment = o),
          (t.Profiler = a),
          (t.PureComponent = v),
          (t.StrictMode = s),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = B),
          (t.act = H),
          (t.cloneElement = function (e, t, r) {
            if (null == e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  ".",
              );
            var o = m({}, e.props),
              s = e.key,
              a = e.ref,
              i = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((a = t.ref), (i = O.current)),
                void 0 !== t.key && (s = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var l = e.type.defaultProps;
              for (u in t)
                b.call(t, u) &&
                  !C.hasOwnProperty(u) &&
                  (o[u] = void 0 === t[u] && void 0 !== l ? l[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) o.children = r;
            else if (1 < u) {
              l = Array(u);
              for (var c = 0; c < u; c++) l[c] = arguments[c + 2];
              o.children = l;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: s,
              ref: a,
              props: o,
              _owner: i,
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
              }).Provider = { $$typeof: i, _context: e }),
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
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = w),
          (t.lazy = function (e) {
            return {
              $$typeof: p,
              _payload: { _status: -1, _result: e },
              _init: A,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = x.transition;
            x.transition = {};
            try {
              e();
            } finally {
              x.transition = t;
            }
          }),
          (t.unstable_act = H),
          (t.useCallback = function (e, t) {
            return I.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return I.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return I.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return I.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return I.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return I.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return I.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return I.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return I.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return I.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return I.current.useRef(e);
          }),
          (t.useState = function (e) {
            return I.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return I.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return I.current.useTransition();
          }),
          (t.version = "18.3.1");
      },
      6090: (e, t, n) => {
        n.d(t, {
          Ay: () => u,
          GM: () => s.GM,
          I0: () => r.I0,
          M9: () => r.M9,
          OH: () => i.OH,
          Ox: () => i.Ox,
          R$: () => i.R$,
          Rk: () => i.Rk,
          Zk: () => a.Zk,
          _n: () => r._n,
          dL: () => o.d,
          en: () => l.en,
        });
        var r = n(2824),
          o = (n(3389), n(4120), n(1230), n(5830), n(6186), n(3361)),
          s = (n(111), n(5723), n(3496)),
          a =
            (n(5178),
            n(428),
            n(9011),
            n(7350),
            n(6847),
            n(5227),
            n(10),
            n(1808),
            n(7019)),
          i =
            (n(1988),
            n(2527),
            n(9864),
            n(4189),
            n(322),
            n(1977),
            n(6417),
            n(2303),
            n(8715),
            n(4397),
            n(5459),
            n(8472),
            n(1184),
            n(3725)),
          l = n(4367);
        const u = VRHTML;
      },
      1808: (e, t, n) => {
        var r = n(1635),
          o = n(3496),
          s = n(7019),
          a = n(3236);
        class i extends o._J {
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
              ? (n = (0, o.PG)(this.props.location, { x: 0, y: 0 }))
              : "number" == typeof this.props.location &&
                (n = (0, s.Lr)(this.props.location));
            let r = this.createSgNode(t);
            if (this.props.latched && null !== this.m_latchedPosition)
              (r.properties["anchor-u"] = this.m_latchedPosition.u),
                (r.properties["anchor-v"] = this.m_latchedPosition.v);
            else if (n) {
              const t = { u: 0.5 * n.x + 0.5, v: -0.5 * n.y + 0.5 },
                o =
                  !e.currentPanel || e.currentPanel.props.overlay_key
                    ? t
                    : e.currentPanel.scaleLocalUVToGlobal(t);
              (r.properties["anchor-u"] = o.u),
                (r.properties["anchor-v"] = o.v);
            } else {
              if (!e.currentPanel)
                return [
                  Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                  null,
                ];
              const n = t.ownerDocument,
                o = t.getBoundingClientRect(),
                s = o.left + o.width / 2,
                a = o.top + o.height / 2,
                i = e.currentPanel.m_Rect;
              if (s < i.x || s > i.x + i.width || a < i.y || a > i.y + i.height)
                return [
                  Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                  null,
                ];
              const l = n.defaultView.innerWidth,
                u = n.defaultView.innerHeight;
              if (!(u > 0 && l > 0))
                return [
                  Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                  null,
                ];
              (r.properties["anchor-u"] = s / l),
                (r.properties["anchor-v"] = a / u);
            }
            return (
              (this.m_latchedPosition = {
                u: r.properties["anchor-u"],
                v: r.properties["anchor-v"],
              }),
              [e, r]
            );
          }
        }
        (0, r.Cg)([a.o], i.prototype, "buildNode", null);
      },
      6292: (e, t, n) => {
        function r(e, t) {
          return { x: e.x * t, y: e.y * t, z: e.z * t };
        }
        function o(e) {
          if (void 0 === e) return;
          let t = 0.5 * e.x,
            n = 0.5 * e.y,
            r = 0.5 * e.z,
            o = Math.cos(t),
            s = Math.cos(n),
            a = Math.cos(r),
            i = Math.sin(t),
            l = Math.sin(n),
            u = Math.sin(r);
          return {
            w: o * s * a + i * l * u,
            x: i * s * a + o * l * u,
            y: o * l * a - i * s * u,
            z: o * s * u - i * l * a,
          };
        }
        n.d(t, { Fb: () => o, tx: () => r });
      },
      3725: (e, t, n) => {
        var r, o, s, a;
        function i() {
          var e;
          return null !==
            (e =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.Environment()) && void 0 !== e
            ? e
            : r.Unknown;
        }
        n.d(t, {
          OH: () => r,
          Ox: () => m,
          R$: () => i,
          Rk: () => d,
          _E: () => l,
        }),
          (function (e) {
            (e[(e.Desktop = 1)] = "Desktop"),
              (e[(e.Overlay = 2)] = "Overlay"),
              (e[(e.Unknown = 100)] = "Unknown");
          })(r || (r = {})),
          window.hasOwnProperty("VRHTML") || (window.VRHTML = null),
          (function (e) {
            (e[(e.Auto = 0)] = "Auto"),
              (e[(e.Low = 1)] = "Low"),
              (e[(e.Medium = 2)] = "Medium"),
              (e[(e.High = 3)] = "High");
          })(o || (o = {})),
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
          })(s || (s = {})),
          (function (e) {
            (e[(e.Seated = 0)] = "Seated"),
              (e[(e.Standing = 1)] = "Standing"),
              (e[(e.RawAndUncalibrated = 2)] = "RawAndUncalibrated");
          })(a || (a = {}));
        let l = 0;
        var u, c, d, p, h, f, m, _, g, S, v, y, R, b, O, C, k, w, T, P, M;
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
        })(u || (u = {})),
          (function (e) {
            (e[(e.Activated = 0)] = "Activated"),
              (e[(e.Deactivated = 1)] = "Deactivated");
          })(c || (c = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"), (e[(e.Mouse = 1)] = "Mouse");
          })(d || (d = {})),
          (function (e) {
            (e[(e.Invalid = 0)] = "Invalid"),
              (e[(e.HMD = 1)] = "HMD"),
              (e[(e.Controller = 2)] = "Controller"),
              (e[(e.GenericTracker = 3)] = "GenericTracker"),
              (e[(e.TrackingReference = 4)] = "TrackingReference"),
              (e[(e.DisplayRedirect = 5)] = "DisplayRedirect");
          })(p || (p = {})),
          (function (e) {
            (e[(e.Unknown = 0)] = "Unknown"),
              (e[(e.NVIDIA = 1)] = "NVIDIA"),
              (e[(e.AMD = 2)] = "AMD");
          })(h || (h = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.Starting = 1)] = "Starting"),
              (e[(e.Quitting = 2)] = "Quitting"),
              (e[(e.Running = 3)] = "Running"),
              (e[(e.Waiting = 4)] = "Waiting");
          })(f || (f = {})),
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
          })(m || (m = {})),
          (function (e) {
            (e[(e.Normal = 0)] = "Normal"),
              (e[(e.Password = 1)] = "Password"),
              (e[(e.Submit = 2)] = "Submit");
          })(_ || (_ = {})),
          (function (e) {
            (e[(e.SingleLine = 0)] = "SingleLine"),
              (e[(e.MultipleLines = 1)] = "MultipleLines");
          })(g || (g = {})),
          (function (e) {
            (e[(e.LaserMouse = 1)] = "LaserMouse"),
              (e[(e.Keyboard = 2)] = "Keyboard"),
              (e[(e.RoomView = 4)] = "RoomView"),
              (e[(e.DisplaySuppressed = 8)] = "DisplaySuppressed"),
              (e[(e.SystemButtonDown = 16)] = "SystemButtonDown"),
              (e[(e.DriverIsDrawingControllers = 32)] =
                "DriverIsDrawingControllers"),
              (e[(e.DriverRequestsApplicationPause = 64)] =
                "DriverRequestsApplicationPause"),
              (e[(e.DriverRequestsReducedRendering = 128)] =
                "DriverRequestsReducedRendering");
          })(S || (S = {})),
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
          })(v || (v = {})),
          (function (e) {
            (e[(e.ECameraExposure_Unknown = 0)] = "ECameraExposure_Unknown"),
              (e[(e.ECameraExposure_Nominal = 1)] = "ECameraExposure_Nominal"),
              (e[(e.ECameraExposure_HighExposure = 2)] =
                "ECameraExposure_HighExposure");
          })(y || (y = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.ThisSteamVR = 1)] = "ThisSteamVR"),
              (e[(e.AnotherSteamVR = 2)] = "AnotherSteamVR"),
              (e[(e.AnotherRuntime = 3)] = "AnotherRuntime"),
              (e[(e.Error = -1)] = "Error");
          })(R || (R = {})),
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
          })(b || (b = {})),
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
          })(O || (O = {})),
          (function (e) {
            e[(e.Hostname = 0)] = "Hostname";
          })(C || (C = {})),
          (function (e) {
            (e[(e.Unavailable = 0)] = "Unavailable"),
              (e[(e.Active = 1)] = "Active"),
              (e[(e.Off = 2)] = "Off");
          })(k || (k = {})),
          (function (e) {
            (e[(e.Default = 1)] = "Default"), (e[(e.Floor = 2)] = "Floor");
          })(w || (w = {})),
          (function (e) {
            (e[(e.Inactive = 0)] = "Inactive"),
              (e[(e.PendingReset = 1)] = "PendingReset"),
              (e[(e.PendingResetIfNeeded = 2)] = "PendingResetIfNeeded"),
              (e[(e.Default = 3)] = "Default"),
              (e[(e.CV = 4)] = "CV"),
              (e[(e.Manual = 5)] = "Manual");
          })(T || (T = {})),
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
          })(P || (P = {})),
          (function (e) {
            (e[(e.Small = 0)] = "Small"),
              (e[(e.Medium = 1)] = "Medium"),
              (e[(e.Large = 2)] = "Large"),
              (e[(e.Gigantic = 3)] = "Gigantic"),
              (e[(e.Standing = 4)] = "Standing");
          })(M || (M = {}));
      },
      6189: (e, t, n) => {
        n.d(t, { W: () => a });
        var r = n(6090);
        const o = Object.values(r.en).filter((e) => "number" == typeof e);
        function s(e, t) {
          return new Set([...e, ...t]);
        }
        class a {
          constructor() {
            this.m_mapSuppressedHaptics = new Map();
          }
          static get Instance() {
            return a.s_Instance || (a.s_Instance = new a()), a.s_Instance;
          }
          suppressHaptics(e, t) {
            const n = new Set(t);
            this.m_mapSuppressedHaptics.has(e)
              ? this.m_mapSuppressedHaptics.set(
                  e,
                  s(this.m_mapSuppressedHaptics.get(e), n),
                )
              : this.m_mapSuppressedHaptics.set(e, n);
          }
          suppressHapticsExcept(e, t) {
            const n = new Set(t),
              r = new Set(o.filter((e) => !n.has(e)));
            this.m_mapSuppressedHaptics.has(e)
              ? this.m_mapSuppressedHaptics.set(
                  e,
                  s(this.m_mapSuppressedHaptics.get(e), r),
                )
              : this.m_mapSuppressedHaptics.set(e, r);
          }
          unsuppressHaptics(e, t) {
            const n = new Set(t);
            var r, o;
            void 0 === t
              ? this.m_mapSuppressedHaptics.delete(e)
              : this.m_mapSuppressedHaptics.has(e) ||
                this.m_mapSuppressedHaptics.set(
                  e,
                  ((r = this.m_mapSuppressedHaptics.get(e)),
                  (o = n),
                  new Set([...r].filter((e) => !o.has(e)))),
                );
          }
          isHapticSuppressed(e) {
            return Array.from(this.m_mapSuppressedHaptics.values()).some((t) =>
              t.has(e),
            );
          }
          triggerHaptic(e) {
            (0, r.R$)() != r.OH.Overlay ||
              this.isHapticSuppressed(e) ||
              null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VROverlay.TriggerOverlayHapticEffect(
                VRHTML.VROverlay.ThisOverlayHandle(),
                e,
              );
          }
        }
        a.s_Instance = null;
      },
      4963: (e, t, n) => {
        n.d(t, { j: () => r, u: () => a });
        var r,
          o = n(1635),
          s = n(6090);
        !(function (e) {
          (e[(e.DashboardOpen = 0)] = "DashboardOpen"),
            (e[(e.DashboardClose = 1)] = "DashboardClose"),
            (e[(e.ControlBarButtonClick = 2)] = "ControlBarButtonClick"),
            (e[(e.ButtonClick = 3)] = "ButtonClick"),
            (e[(e.SurfaceClick = 4)] = "SurfaceClick"),
            (e[(e.VolumePreview = 5)] = "VolumePreview"),
            (e[(e.Grab = 6)] = "Grab"),
            (e[(e.GrabRelease = 7)] = "GrabRelease"),
            (e[(e.PagedSettingsNavigation = 8)] = "PagedSettingsNavigation");
        })(r || (r = {}));
        class a {
          constructor() {
            this.m_mapSoundElems = new Map();
          }
          static get Instance() {
            return a.s_Instance || (a.s_Instance = new a()), a.s_Instance;
          }
          preloadSounds() {
            if (!((0, s.R$)() != s.OH.Overlay || this.m_mapSoundElems.size > 0))
              for (let e in r) isNaN(Number(e)) || this.loadSounds(Number(e));
          }
          playSound(e) {
            return (0, o.sH)(this, void 0, void 0, function* () {
              if ((0, s.R$)() != s.OH.Overlay) return;
              if (null == e) return;
              const t = this.getAudioElems(e);
              if (!t || 0 == t.length) return;
              const n = t[Math.floor(Math.random() * t.length)];
              n.pause(), (n.currentTime = 0);
              try {
                yield n.play();
              } catch (t) {
                console.error(
                  `Failed to play sound effect "${r[e]}" (${n.src}, networkState=${n.networkState}, readyState=${n.readyState})`,
                );
              }
            });
          }
          loadSounds(e) {
            const t = a.Sources[e],
              n = t.source;
            if (!n) return void this.m_mapSoundElems.set(e, []);
            const r = ("string" == typeof n ? [n] : n).map((e) => {
              var n, r;
              let o = document.createElement("audio");
              return (
                (o.src = `${e}?t=${(new Date()).getTime()}`),
                (o.preload = "auto"),
                (o.volume = null !== (n = t.volume) && void 0 !== n ? n : 1),
                (null === (r = t.bRespectsGlobalVolume) || void 0 === r || r) &&
                  (o.volume *= 1),
                o
              );
            });
            this.m_mapSoundElems.set(e, r);
          }
          getAudioElems(e) {
            return (
              this.m_mapSoundElems.has(e) ||
                (console.warn(
                  "Playing a sound which was not preloaded. Consider calling SoundEffects.Instance.preloadSounds().",
                ),
                this.loadSounds(e)),
              this.m_mapSoundElems.get(e)
            );
          }
        }
        (a.Sources = {
          [r.DashboardOpen]: { source: "" },
          [r.DashboardClose]: { source: "" },
          [r.ControlBarButtonClick]: {
            source: "/dashboard/sounds/deck_ui_misc_10.wav",
          },
          [r.ButtonClick]: { source: "/dashboard/sounds/deck_ui_misc_10.wav" },
          [r.SurfaceClick]: { source: "" },
          [r.VolumePreview]: {
            source: "/dashboard/sounds/volume_change.wav",
            bRespectsGlobalVolume: !1,
          },
          [r.Grab]: { source: "" },
          [r.GrabRelease]: { source: "/dashboard/sounds/deck_ui_misc_10.wav" },
          [r.PagedSettingsNavigation]: {
            source: "/dashboard/sounds/deck_ui_navigation.wav",
          },
        }),
          (a.s_Instance = null);
      },
      3606: (e, t, n) => {
        n.d(t, { F2: () => o, Qv: () => r });
        const r = "system.messageoverlay",
          o = "/settings/steamvr/showAdvancedSettings";
      },
      1139: (e, t, n) => {
        n.d(t, { FH: () => a });
        var r = n(1635),
          o = (n(6540), n(3236)),
          s = n(7813);
        function a(...e) {
          return e
            .filter((e) => null != e && ("string" == typeof e || e[1]))
            .map((e) => ("string" == typeof e ? e : e[0]))
            .join(" ");
        }
        class i {
          constructor() {
            (this.onScroll = null),
              (this.onScrollStop = null),
              (this.m_elem = null),
              (this.m_rScrollableParents = []),
              (this.m_bScrolling = !1),
              (this.m_scrollStopTimeoutHandle = void 0),
              (0, s.makeObservable)(this);
          }
          ref(e) {
            this.m_elem && this.cleanup(),
              (this.m_elem = e),
              this.updateScrollableParents();
          }
          get isScrolling() {
            return this.m_bScrolling;
          }
          updateScrollableParents() {
            for (let e of this.m_rScrollableParents)
              e.removeEventListener("scroll", this.onParentScroll);
            this.m_rScrollableParents = (function (e) {
              let t = [];
              if (!e) return t;
              let n = e.parentElement;
              for (; n; ) {
                const e = n.scrollWidth > n.clientWidth,
                  r = n.scrollHeight > n.clientHeight;
                (e || r) && t.push(n), (n = n.parentElement);
              }
              return t;
            })(this.m_elem);
            for (let e of this.m_rScrollableParents)
              e.addEventListener("scroll", this.onParentScroll);
          }
          cleanup() {
            for (let e of this.m_rScrollableParents)
              e.removeEventListener("scroll", this.onParentScroll);
            (this.m_rScrollableParents = []),
              (this.m_elem = null),
              this.clearScrollStopTimeout();
          }
          onParentScroll() {
            var e;
            this.clearScrollStopTimeout(),
              (this.m_bScrolling = !0),
              (this.m_scrollStopTimeoutHandle = window.setTimeout(
                this.onScrollStopTimeout,
                50,
              )),
              null === (e = this.onScroll) || void 0 === e || e.call(this);
          }
          clearScrollStopTimeout() {
            window.clearTimeout(this.m_scrollStopTimeoutHandle),
              (this.m_scrollStopTimeoutHandle = void 0);
          }
          onScrollStopTimeout() {
            var e;
            this.m_bScrolling &&
              (null === (e = this.onScrollStop) ||
                void 0 === e ||
                e.call(this)),
              (this.m_bScrolling = !1);
          }
        }
        (0, r.Cg)([s.observable], i.prototype, "m_bScrolling", void 0),
          (0, r.Cg)([o.o], i.prototype, "ref", null),
          (0, r.Cg)([s.computed], i.prototype, "isScrolling", null),
          (0, r.Cg)([o.o], i.prototype, "onParentScroll", null),
          (0, r.Cg)([o.o], i.prototype, "onScrollStopTimeout", null);
      },
      6139: (e, t, n) => {
        var r = n(1635),
          o = n(6540),
          s = n(5338),
          a = n(1370),
          i = n(3236),
          l = n(6090),
          u = n(2505),
          c = n.n(u);
        class d {
          constructor() {
            (this.m_mapTokens = new Map()),
              (this.m_mapFallbackTokens = new Map());
          }
          InitFromObjects(e, t, n, r) {
            this.m_mapTokens.clear();
            let o = [t, e, r, n];
            for (let e in o) {
              let t = o[e];
              for (let e in t) {
                let n = t[e];
                for (let e in n) {
                  let t = e.toLowerCase();
                  this.m_mapTokens.has(t) || this.m_mapTokens.set(t, n[e]);
                }
              }
            }
          }
          LocalizeString(e) {
            if (!e || 0 == e.length || "#" != e.charAt(0)) return "";
            let t = this.m_mapTokens.get(e.substring(1).toLowerCase());
            return void 0 === t ? "" : t;
          }
          LocalizeStringFromFallback(e) {
            if (!e || 0 == e.length || "#" != e.charAt(0)) return "";
            let t = this.m_mapFallbackTokens.get(e.substring(1).toLowerCase());
            return void 0 === t ? "" : t;
          }
          static GetLocale() {
            const e = navigator.languages[0];
            try {
              const t =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.GetSystemLocale();
              if (!t) return e;
              d.s_Date.toLocaleTimeString(t);
              return t;
            } catch (t) {
              return e;
            }
          }
        }
        d.s_Date = new Date();
        const p = new d();
        window.LocalizationManager = p;
        var h = n(6138),
          f = n(1333),
          m = n(3606);
        function _(e) {
          return o.createElement(
            h.$,
            { className: "ButtonControl", onClick: e.onClick },
            e.label,
          );
        }
        (0, n(7813).configure)({ enforceActions: "never" });
        let g = class extends o.Component {
          constructor(e) {
            super(e),
              (this.nMaxButtons = 4),
              (this.m_mailbox = new l._n()),
              (this.state = {
                unCallingProcessID: 0,
                sCaptionText: "Default Caption",
                sMessageText: "Default text.",
                sButtonTexts: ["Button0", "Button1", "Button2", "Button3"],
              }),
              this.m_mailbox.Init("message_overlay/main").then(() => {
                this.m_mailbox.RegisterHandler(
                  "render_message",
                  this.OnRenderMessageOverlay,
                ),
                  this.m_mailbox.RegisterHandler(
                    "close_requested",
                    this.OnMessageOverlayCloseRequested,
                  ),
                  this.m_mailbox.RegisterHandler(
                    "process_quit",
                    this.OnProcessQuit,
                  );
              }),
              f.HR.Init(!1);
          }
          ResetState() {
            this.setState({
              unCallingProcessID: 0,
              sCaptionText: "Default Caption",
              sMessageText: "Default text.",
              sButtonTexts: ["Button0", "Button1", "Button2", "Button3"],
            });
          }
          OnProcessQuit(e) {
            return this.OnMessageOverlayCloseRequested(e);
          }
          OnMessageOverlayCloseRequested(e) {
            return e.unProcessID == this.state.unCallingProcessID
              ? (console.log(
                  "Close requested from owning process " +
                    this.state.unCallingProcessID,
                ),
                null === l.Ay ||
                  void 0 === l.Ay ||
                  l.Ay.VRDashboardManager.OnMessageOverlayResponse(
                    l.Ox.ApplicationQuit,
                  ),
                this.ResetState(),
                !0)
              : (console.log(
                  "Error: Close requested from process " +
                    e.unProcessID +
                    ", but owning process is " +
                    this.state.unCallingProcessID,
                ),
                !1);
          }
          OnRenderMessageOverlay(e) {
            console.log(
              "Message overlay requested from process " + e.unCallingProcessID,
            ),
              this.setState({
                unCallingProcessID: e.unCallingProcessID,
                sCaptionText: e.sCaptionText,
                sMessageText: e.sMessageText,
                sButtonTexts: e.sButtonTexts,
              }),
              null === l.Ay ||
                void 0 === l.Ay ||
                l.Ay.VRClient.ShowDashboardOverlay({
                  overlayKey: m.Qv,
                  sReason: "OnRenderMessageOverlay",
                });
          }
          ButtonClicked(e) {
            if (!l.Ay)
              return (
                console.log(
                  "Error: VRHTML isn't present--exiting without sending response.",
                ),
                void this.ResetState()
              );
            console.log(
              "Button " + e + " clicked, sending OnMessageOverlayResponse.",
            ),
              null === l.Ay ||
                void 0 === l.Ay ||
                l.Ay.VRDashboardManager.OnMessageOverlayResponse(e),
              this.ResetState();
          }
          render() {
            return o.createElement(
              "div",
              { className: "MessageOverlayContainer" },
              o.createElement(
                h.W,
                { className: "MessageOverlayPanel" },
                o.createElement(
                  "div",
                  { className: "MessageOverlayTextPanel" },
                  o.createElement("h1", null, this.state.sCaptionText),
                  o.createElement("p", null, this.state.sMessageText),
                ),
                o.createElement(
                  "div",
                  { className: "MessageOverlayButtonContainer" },
                  this.state.sButtonTexts[0] &&
                    o.createElement(_, {
                      label: this.state.sButtonTexts[0],
                      onClick: () => {
                        this.ButtonClicked(l.Ox.ButtonPress_0);
                      },
                    }),
                  this.state.sButtonTexts[1] &&
                    o.createElement(_, {
                      label: this.state.sButtonTexts[1],
                      onClick: () => {
                        this.ButtonClicked(l.Ox.ButtonPress_1);
                      },
                    }),
                  this.state.sButtonTexts[2] &&
                    o.createElement(_, {
                      label: this.state.sButtonTexts[2],
                      onClick: () => {
                        this.ButtonClicked(l.Ox.ButtonPress_2);
                      },
                    }),
                  this.state.sButtonTexts[3] &&
                    o.createElement(_, {
                      label: this.state.sButtonTexts[3],
                      onClick: () => {
                        this.ButtonClicked(l.Ox.ButtonPress_3);
                      },
                    }),
                ),
              ),
            );
          }
        };
        (0, r.Cg)([i.o], g.prototype, "OnProcessQuit", null),
          (0, r.Cg)([i.o], g.prototype, "OnMessageOverlayCloseRequested", null),
          (0, r.Cg)([i.o], g.prototype, "OnRenderMessageOverlay", null),
          (0, r.Cg)([i.o], g.prototype, "ButtonClicked", null),
          (g = (0, r.Cg)([a.PA], g)),
          null === l.Ay ||
            void 0 === l.Ay ||
            l.Ay.VROverlay.SetWidthInMeters(
              l.Ay.VROverlay.ThisOverlayHandle(),
              1.92,
            ),
          null === l.Ay ||
            void 0 === l.Ay ||
            l.Ay.VROverlay.SetFlag(l.Ay.VROverlay.ThisOverlayHandle(), 8, !0),
          null === l.Ay ||
            void 0 === l.Ay ||
            l.Ay.VROverlay.SetInputMethod(
              l.Ay.VROverlay.ThisOverlayHandle(),
              l.Rk.Mouse,
            ),
          (function (e, t) {
            t ||
              (t = (function () {
                let e = new Map([
                  ["en", "english"],
                  ["de", "german"],
                  ["fr", "french"],
                  ["it", "italian"],
                  ["ko", "korean"],
                  ["es-419", "latam"],
                  ["es", "spanish"],
                  ["zh-CN", "schinese"],
                  ["zh-TW", "tchinese"],
                  ["ru", "russian"],
                  ["th", "thai"],
                  ["ja", "japanese"],
                  ["pt", "portuguese"],
                  ["pl", "polish"],
                  ["da", "danish"],
                  ["nl", "dutch"],
                  ["fi", "finnish"],
                  ["no", "norwegian"],
                  ["sv", "swedish"],
                  ["hu", "hungarian"],
                  ["cs", "czech"],
                  ["ro", "romanian"],
                  ["tr", "turkish"],
                  ["pt-BR", "brazilian"],
                  ["bg", "bulgarian"],
                  ["el", "greek"],
                  ["uk", "ukranian"],
                  ["vi", "vietnamese"],
                ]);
                for (let t of navigator.languages) {
                  let n = t.split("-");
                  if (e.has(t)) return e.get(t);
                  if (e.has(n[0])) return e.get(n[0]);
                }
                return "english";
              })());
            let n = [],
              r = (e, t, n) => {
                let r,
                  o = Date.now().toString();
                return (
                  (r =
                    "drivers" == e
                      ? `/input/localization.json?t=${o}`
                      : "webhelper" == e
                        ? `/dashboard/localization/${e}_${t}.json?t=${o}`
                        : `localization/${e}_${t}.json?t=${o}`),
                  c()
                    .get(r)
                    .then((e) => {
                      n(e.data);
                    })
                    .catch(() => {})
                );
              },
              o = [],
              s = [],
              a = [],
              i = [];
            for (let s of e)
              n.push(
                r(s, t, (e) => {
                  o.push(e);
                }),
              ),
                "english" != t &&
                  n.push(
                    r(s, "english", (e) => {
                      a.push(e);
                    }),
                  );
            for (let e of ["webhelper"])
              n.push(
                r(e, t, (e) => {
                  s.push(e);
                }),
              ),
                "english" != t &&
                  n.push(
                    r(e, "english", (e) => {
                      i.push(e);
                    }),
                  );
            return (
              n.push(
                r("drivers", "", (e) => {
                  o.push(e);
                }),
              ),
              Promise.all(n).then(() => {
                p.InitFromObjects(o, s, a, i);
              })
            );
          })(
            [],
            null === l.Ay || void 0 === l.Ay ? void 0 : l.Ay.GetSteamLanguage(),
          )
            .then(() => {
              s.H(document.getElementById("root")).render(
                o.createElement(g, null),
              );
            })
            .catch((e) =>
              console.error("Failed to initialize message Overlay:", e),
            );
      },
    },
    n = {};
  function r(e) {
    var o = n[e];
    if (void 0 !== o) return o.exports;
    var s = (n[e] = { exports: {} });
    return t[e](s, s.exports, r), s.exports;
  }
  (r.m = t),
    (e = []),
    (r.O = (t, n, o, s) => {
      if (!n) {
        var a = 1 / 0;
        for (c = 0; c < e.length; c++) {
          for (var [n, o, s] = e[c], i = !0, l = 0; l < n.length; l++)
            (!1 & s || a >= s) && Object.keys(r.O).every((e) => r.O[e](n[l]))
              ? n.splice(l--, 1)
              : ((i = !1), s < a && (a = s));
          if (i) {
            e.splice(c--, 1);
            var u = o();
            void 0 !== u && (t = u);
          }
        }
        return t;
      }
      s = s || 0;
      for (var c = e.length; c > 0 && e[c - 1][2] > s; c--) e[c] = e[c - 1];
      e[c] = [n, o, s];
    }),
    (r.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return r.d(t, { a: t }), t;
    }),
    (r.d = (e, t) => {
      for (var n in t)
        r.o(t, n) &&
          !r.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (r.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = { 868: 0, 527: 0, 500: 0 };
      r.O.j = (t) => 0 === e[t];
      var t = (t, n) => {
          var o,
            s,
            [a, i, l] = n,
            u = 0;
          if (a.some((t) => 0 !== e[t])) {
            for (o in i) r.o(i, o) && (r.m[o] = i[o]);
            if (l) var c = l(r);
          }
          for (t && t(n); u < a.length; u++)
            (s = a[u]), r.o(e, s) && e[s] && e[s][0](), (e[s] = 0);
          return r.O(c);
        },
        n = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var o = r.O(void 0, [967, 978, 655, 305, 527, 797, 148, 500, 198, 652], () =>
    r(6139),
  );
  o = r.O(o);
})(); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/messageoverlay.js.map
