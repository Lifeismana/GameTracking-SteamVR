var CLSTAMP = "9947453";
(() => {
  "use strict";
  var e,
    t = {
      5287: (e, t) => {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          o = Symbol.for("react.fragment"),
          a = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          u = Symbol.for("react.provider"),
          l = Symbol.for("react.context"),
          s = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var _ = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          S = Object.assign,
          m = {};
        function R(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || _);
        }
        function v() {}
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || _);
        }
        (R.prototype.isReactComponent = {}),
          (R.prototype.setState = function (e, t) {
            if ("object" != typeof e && "function" != typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (R.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (v.prototype = R.prototype);
        var h = (y.prototype = new v());
        (h.constructor = y), S(h, R.prototype), (h.isPureReactComponent = !0);
        var g = Array.isArray,
          b = Object.prototype.hasOwnProperty,
          O = { current: null },
          C = { key: !0, ref: !0, __self: !0, __source: !0 };
        function k(e, t, r) {
          var o,
            a = {},
            i = null,
            u = null;
          if (null != t)
            for (o in (void 0 !== t.ref && (u = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              b.call(t, o) && !C.hasOwnProperty(o) && (a[o] = t[o]);
          var l = arguments.length - 2;
          if (1 === l) a.children = r;
          else if (1 < l) {
            for (var s = Array(l), c = 0; c < l; c++) s[c] = arguments[c + 2];
            a.children = s;
          }
          if (e && e.defaultProps)
            for (o in (l = e.defaultProps)) void 0 === a[o] && (a[o] = l[o]);
          return {
            $$typeof: n,
            type: e,
            key: i,
            ref: u,
            props: a,
            _owner: O.current,
          };
        }
        function T(e) {
          return "object" == typeof e && null !== e && e.$$typeof === n;
        }
        var I = /\/+/g;
        function w(e, t) {
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
        function P(e, t, o, a, i) {
          var u = typeof e;
          ("undefined" !== u && "boolean" !== u) || (e = null);
          var l = !1;
          if (null === e) l = !0;
          else
            switch (u) {
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
              (i = i((l = e))),
              (e = "" === a ? "." + w(l, 0) : a),
              g(i)
                ? ((o = ""),
                  null != e && (o = e.replace(I, "$&/") + "/"),
                  P(i, t, o, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (T(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      o +
                        (!i.key || (l && l.key === i.key)
                          ? ""
                          : ("" + i.key).replace(I, "$&/") + "/") +
                        e,
                    )),
                  t.push(i)),
              1
            );
          if (((l = 0), (a = "" === a ? "." : a + ":"), g(e)))
            for (var s = 0; s < e.length; s++) {
              var c = a + w((u = e[s]), s);
              l += P(u, t, o, c, i);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" != typeof e
                ? null
                : "function" == typeof (e = (p && e[p]) || e["@@iterator"])
                  ? e
                  : null;
            })(e)),
            "function" == typeof c)
          )
            for (e = c.call(e), s = 0; !(u = e.next()).done; )
              l += P((u = u.value), t, o, (c = a + w(u, s++)), i);
          else if ("object" === u)
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
            P(e, r, "", "", function (e) {
              return t.call(n, e, o++);
            }),
            r
          );
        }
        function M(e) {
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
        var A = { current: null },
          F = { transition: null },
          V = {
            ReactCurrentDispatcher: A,
            ReactCurrentBatchConfig: F,
            ReactCurrentOwner: O,
          };
        function D() {
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
            if (!T(e))
              throw Error(
                "React.Children.only expected to receive a single React element child.",
              );
            return e;
          },
        }),
          (t.Component = R),
          (t.Fragment = o),
          (t.Profiler = i),
          (t.PureComponent = y),
          (t.StrictMode = a),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = V),
          (t.act = D),
          (t.cloneElement = function (e, t, r) {
            if (null == e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  ".",
              );
            var o = S({}, e.props),
              a = e.key,
              i = e.ref,
              u = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (u = O.current)),
                void 0 !== t.key && (a = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var l = e.type.defaultProps;
              for (s in t)
                b.call(t, s) &&
                  !C.hasOwnProperty(s) &&
                  (o[s] = void 0 === t[s] && void 0 !== l ? l[s] : t[s]);
            }
            var s = arguments.length - 2;
            if (1 === s) o.children = r;
            else if (1 < s) {
              l = Array(s);
              for (var c = 0; c < s; c++) l[c] = arguments[c + 2];
              o.children = l;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: a,
              ref: i,
              props: o,
              _owner: u,
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
              }).Provider = { $$typeof: u, _context: e }),
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
            return { $$typeof: s, render: e };
          }),
          (t.isValidElement = T),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: M,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = F.transition;
            F.transition = {};
            try {
              e();
            } finally {
              F.transition = t;
            }
          }),
          (t.unstable_act = D),
          (t.useCallback = function (e, t) {
            return A.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return A.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return A.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return A.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return A.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return A.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return A.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return A.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return A.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return A.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return A.current.useRef(e);
          }),
          (t.useState = function (e) {
            return A.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return A.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return A.current.useTransition();
          }),
          (t.version = "18.3.1");
      },
      6090: (e, t, n) => {
        n.d(t, {
          $: () => k.$,
          $Z: () => C.$Z,
          Ay: () => T,
          CU: () => o.CU,
          Ci: () => m.C,
          Cw: () => a.C,
          Ee: () => C.Ee,
          Em: () => d.Em,
          Fb: () => o.Fb,
          Fi: () => R.Fi,
          GQ: () => C.GQ,
          Gz: () => C.Gz,
          HW: () => C.HW,
          I0: () => r.I0,
          JZ: () => o.JZ,
          KI: () => k.KI,
          Ld: () => o.Ld,
          MQ: () => R.MQ,
          MV: () => C.MV,
          N: () => u.e,
          N1: () => S.N,
          NB: () => C.NB,
          NH: () => o.NH,
          O5: () => f.O,
          O6: () => o.O6,
          OH: () => C.OH,
          Oi: () => R.Oi,
          QB: () => o.QB,
          QR: () => k.QR,
          R$: () => C.R$,
          Se: () => o.Se,
          Uj: () => o.Uj,
          Vh: () => p.V,
          Xl: () => C.Xl,
          Y4: () => l.Y,
          Zk: () => R.Zk,
          _1: () => C._1,
          _h: () => R._h,
          _n: () => r._n,
          aX: () => p.a,
          b: () => C.b,
          b$: () => b.b,
          cB: () => g.L,
          dL: () => c.d,
          e_: () => o.e_,
          en: () => k.en,
          fD: () => k.fD,
          gN: () => C.gN,
          gO: () => i.g,
          k2: () => C.k2,
          kG: () => C.kG,
          ku: () => C.ku,
          lq: () => _.l,
          m$: () => v.m,
          mX: () => r.mX,
          mo: () => C.mo,
          mu: () => C.mu,
          nX: () => d.nX,
          ne: () => C.ne,
          nq: () => h.n,
          oN: () => o.oN,
          o_: () => o.o_,
          p0: () => o.p0,
          pM: () => C.pM,
          pg: () => r.pg,
          qF: () => o.qF,
          rF: () => s.H,
          rx: () => C.rx,
          sJ: () => y.$,
          sk: () => r.sk,
          tx: () => o.tx,
          uC: () => O.u,
          vx: () => o.vx,
        });
        var r = n(2824),
          o = n(6292),
          a = n(3389),
          i = (n(4120), n(9424)),
          u = n(1230),
          l = n(5830),
          s = n(6186),
          c = n(3361),
          d = (n(111), n(5723)),
          f = (n(3496), n(5178)),
          p = (n(428), n(9011), n(7350)),
          _ = n(6847),
          S = n(5227),
          m = (n(10), n(1808)),
          R = n(7019),
          v = (n(1988), n(2527), n(9864)),
          y = (n(4189), n(322), n(1977), n(6417)),
          h = n(2303),
          g = n(8715),
          b = (n(4397), n(5459)),
          O = n(8472),
          C = (n(1184), n(3725)),
          k = n(4367);
        const T = VRHTML;
      },
      3725: (e, t, n) => {
        var r, o, a, i;
        function u() {
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
          $Z: () => d,
          Ee: () => O,
          GQ: () => M,
          Gz: () => s,
          HW: () => v,
          MV: () => a,
          NB: () => _,
          OH: () => r,
          R$: () => u,
          Xl: () => h,
          _1: () => E,
          _E: () => l,
          b: () => g,
          gN: () => C,
          k2: () => I,
          kG: () => k,
          ku: () => p,
          mo: () => m,
          mu: () => i,
          ne: () => c,
          pM: () => o,
          rx: () => w,
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
          })(a || (a = {})),
          (function (e) {
            (e[(e.Seated = 0)] = "Seated"),
              (e[(e.Standing = 1)] = "Standing"),
              (e[(e.RawAndUncalibrated = 2)] = "RawAndUncalibrated");
          })(i || (i = {}));
        let l = 0,
          s = 0,
          c = -1;
        var d, f, p, _, S, m, R, v, y, h, g, b, O, C, k, T, I, w, P, E, M;
        !(function (e) {
          (e[(e.Invalid = 0)] = "Invalid"),
            (e[(e.RecenterCountdown = 1)] = "RecenterCountdown"),
            (e[(e.FloorAdjustExisting = 2)] = "FloorAdjustExisting"),
            (e[(e.RoomSetupFloor = 3)] = "RoomSetupFloor"),
            (e[(e.ClearRoomSetup = 4)] = "ClearRoomSetup");
        })(d || (d = {})),
          (function (e) {
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
          })(f || (f = {})),
          (function (e) {
            (e[(e.Activated = 0)] = "Activated"),
              (e[(e.Deactivated = 1)] = "Deactivated");
          })(p || (p = {})),
          (function (e) {
            (e[(e.NoDashboardTab = 8)] = "NoDashboardTab"),
              (e[(e.AcceptsGamepadEvents = 16)] = "AcceptsGamepadEvents"),
              (e[(e.ShowGamepadFocus = 32)] = "ShowGamepadFocus"),
              (e[(e.SendVRDiscreteScrollEvents = 64)] =
                "SendVRDiscreteScrollEvents"),
              (e[(e.SendVRTouchpadEvents = 128)] = "SendVRTouchpadEvents"),
              (e[(e.ShowTouchPadScrollWheel = 256)] =
                "ShowTouchPadScrollWheel"),
              (e[(e.TransferOwnershipToInternalProcess = 512)] =
                "TransferOwnershipToInternalProcess"),
              (e[(e.SideBySide_Parallel = 1024)] = "SideBySide_Parallel"),
              (e[(e.SideBySide_Crossed = 2048)] = "SideBySide_Crossed"),
              (e[(e.Panorama = 4096)] = "Panorama"),
              (e[(e.StereoPanorama = 8192)] = "StereoPanorama"),
              (e[(e.SortWithNonSceneOverlays = 16384)] =
                "SortWithNonSceneOverlays"),
              (e[(e.VisibleInDashboard = 32768)] = "VisibleInDashboard"),
              (e[(e.MakeOverlaysInteractiveIfVisible = 65536)] =
                "MakeOverlaysInteractiveIfVisible"),
              (e[(e.SendVRSmoothScrollEvents = 131072)] =
                "SendVRSmoothScrollEvents"),
              (e[(e.ProtectedContent = 262144)] = "ProtectedContent"),
              (e[(e.HideLaserIntersection = 524288)] = "HideLaserIntersection"),
              (e[(e.WantsModalBehavior = 1048576)] = "WantsModalBehavior"),
              (e[(e.IsPremultiplied = 2097152)] = "IsPremultiplied"),
              (e[(e.IgnoreTextureAlpha = 4194304)] = "IgnoreTextureAlpha"),
              (e[(e.EnableControlBarKeyboard = 16777216)] =
                "EnableControlBarKeyboard"),
              (e[(e.EnableControlBarClose = 33554432)] =
                "EnableControlBarClose"),
              (e[(e.MinimalControlBar = 67108864)] = "MinimalControlBar"),
              (e[(e.EnableClickStabilization = 134217728)] =
                "EnableClickStabilization"),
              (e[(e.MultiCursor = 268435456)] = "MultiCursor");
          })(_ || (_ = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"), (e[(e.Mouse = 1)] = "Mouse");
          })(S || (S = {})),
          (function (e) {
            (e[(e.Invalid = 0)] = "Invalid"),
              (e[(e.HMD = 1)] = "HMD"),
              (e[(e.Controller = 2)] = "Controller"),
              (e[(e.GenericTracker = 3)] = "GenericTracker"),
              (e[(e.TrackingReference = 4)] = "TrackingReference"),
              (e[(e.DisplayRedirect = 5)] = "DisplayRedirect");
          })(m || (m = {})),
          (function (e) {
            (e[(e.Unknown = 0)] = "Unknown"),
              (e[(e.NVIDIA = 1)] = "NVIDIA"),
              (e[(e.AMD = 2)] = "AMD");
          })(R || (R = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.Starting = 1)] = "Starting"),
              (e[(e.Quitting = 2)] = "Quitting"),
              (e[(e.Running = 3)] = "Running"),
              (e[(e.Waiting = 4)] = "Waiting");
          })(v || (v = {})),
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
          })(y || (y = {})),
          (function (e) {
            (e[(e.Normal = 0)] = "Normal"),
              (e[(e.Password = 1)] = "Password"),
              (e[(e.Submit = 2)] = "Submit");
          })(h || (h = {})),
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
          })(b || (b = {})),
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
          })(O || (O = {})),
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
          })(k || (k = {})),
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
          })(T || (T = {})),
          (function (e) {
            e[(e.Hostname = 0)] = "Hostname";
          })(I || (I = {})),
          (function (e) {
            (e[(e.Unavailable = 0)] = "Unavailable"),
              (e[(e.Active = 1)] = "Active"),
              (e[(e.Off = 2)] = "Off");
          })(w || (w = {})),
          (function (e) {
            (e[(e.Default = 1)] = "Default"), (e[(e.Floor = 2)] = "Floor");
          })(P || (P = {})),
          (function (e) {
            (e[(e.Inactive = 0)] = "Inactive"),
              (e[(e.PendingReset = 1)] = "PendingReset"),
              (e[(e.PendingResetIfNeeded = 2)] = "PendingResetIfNeeded"),
              (e[(e.Default = 3)] = "Default"),
              (e[(e.CV = 4)] = "CV"),
              (e[(e.Manual = 5)] = "Manual");
          })(E || (E = {})),
          (function (e) {
            (e[(e.Small = 0)] = "Small"),
              (e[(e.Medium = 1)] = "Medium"),
              (e[(e.Large = 2)] = "Large"),
              (e[(e.Gigantic = 3)] = "Gigantic"),
              (e[(e.Standing = 4)] = "Standing");
          })(M || (M = {}));
      },
      4170: (e, t, n) => {
        var r = n(1635),
          o = n(6540),
          a = n(5338),
          i = n(3236),
          u = n(6090),
          l = n(3714),
          s = n(1333);
        class c extends o.Component {
          constructor(e) {
            super(e),
              (this.m_toastMailbox = new u._n()),
              (this.state = { visible: !1, title: "", header: "", text: "" }),
              this.m_toastMailbox.Init("toast_renderer/main"),
              this.m_toastMailbox.RegisterHandler(
                "render_toast",
                this.OnRenderToast,
              ),
              s.HR.Init(!1);
          }
          OnRenderToast(e) {
            let t = u.Ay.VROverlayInternal.GetToastInfo(e.notification_id);
            t
              ? this.setState({
                  visible: !0,
                  title: t.sTitle,
                  header: t.sHeader || "",
                  text: t.sText,
                  image: t.sImageData,
                })
              : this.setState({
                  visible: !1,
                  title: "",
                  header: "",
                  text: "",
                  image: null,
                });
          }
          render() {
            return this.state.visible
              ? o.createElement(
                  "div",
                  { className: "VRNotificationRoot" },
                  o.createElement(
                    "div",
                    { className: "VRNotificationApplicationName" },
                    this.state.title,
                  ),
                  o.createElement(
                    "div",
                    { className: "VRNotificationFrame" },
                    o.createElement("div", {
                      className: "VRToastImage",
                      style: {
                        backgroundImage: this.state.image
                          ? "url('" + this.state.image + "')"
                          : "url('/dashboard/images/icons/notification_steamcog.png')",
                      },
                    }),
                    o.createElement(
                      "div",
                      { className: "VRNotificationTextWrapper" },
                      o.createElement(
                        "div",
                        { className: "VRNotificationHeader" },
                        this.state.header,
                      ),
                      o.createElement(
                        "div",
                        { className: "VRNotificationText" },
                        this.state.text,
                      ),
                    ),
                  ),
                )
              : null;
          }
        }
        (0, r.Cg)([i.o], c.prototype, "OnRenderToast", null),
          (0, l.uV)(
            [],
            null === u.Ay || void 0 === u.Ay ? void 0 : u.Ay.GetSteamLanguage(),
          )
            .then(() => {
              a.H(document.getElementById("root")).render(
                o.createElement(c, null),
              );
            })
            .catch((e) =>
              console.error("Failed to initialize notification toast:", e),
            );
      },
    },
    n = {};
  function r(e) {
    var o = n[e];
    if (void 0 !== o) return o.exports;
    var a = (n[e] = { exports: {} });
    return t[e].call(a.exports, a, a.exports, r), a.exports;
  }
  (r.m = t),
    (e = []),
    (r.O = (t, n, o, a) => {
      if (!n) {
        var i = 1 / 0;
        for (c = 0; c < e.length; c++) {
          for (var [n, o, a] = e[c], u = !0, l = 0; l < n.length; l++)
            (!1 & a || i >= a) && Object.keys(r.O).every((e) => r.O[e](n[l]))
              ? n.splice(l--, 1)
              : ((u = !1), a < i && (i = a));
          if (u) {
            e.splice(c--, 1);
            var s = o();
            void 0 !== s && (t = s);
          }
        }
        return t;
      }
      a = a || 0;
      for (var c = e.length; c > 0 && e[c - 1][2] > a; c--) e[c] = e[c - 1];
      e[c] = [n, o, a];
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
      var e = { 915: 0, 527: 0, 500: 0 };
      r.O.j = (t) => 0 === e[t];
      var t = (t, n) => {
          var o,
            a,
            [i, u, l] = n,
            s = 0;
          if (i.some((t) => 0 !== e[t])) {
            for (o in u) r.o(u, o) && (r.m[o] = u[o]);
            if (l) var c = l(r);
          }
          for (t && t(n); s < i.length; s++)
            (a = i[s]), r.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
          return r.O(c);
        },
        n = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var o = r.O(void 0, [967, 991, 305, 527, 452, 170, 537, 797, 906, 500], () =>
    r(4170),
  );
  o = r.O(o);
})(); //# sourceMappingURL=file:///c:/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/notificationtoast.js.map
