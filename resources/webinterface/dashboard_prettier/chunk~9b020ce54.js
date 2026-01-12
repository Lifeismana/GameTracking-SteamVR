var CLSTAMP = "10355840";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [542, 57],
  {
    6921: (e, t, n) => {
      n.r(t),
        n.d(t, {
          Observer: () => c.n,
          _observerFinalizationRegistry: () => s.Y,
          clearTimers: () => f,
          enableStaticRendering: () => l.e,
          isObserverBatched: () => a.m_,
          isUsingStaticRendering: () => l.P,
          observer: () => u.P,
          observerBatching: () => a.tl,
          useAsObservableSource: () => _.W,
          useLocalObservable: () => d.i,
          useLocalStore: () => p.W,
          useObserver: () => S,
          useStaticRendering: () => h,
        });
      n(724);
      var r,
        o = n(9889),
        a = n(8909),
        i = n(4452),
        l = n(3815),
        s = n(7380),
        u = n(6035),
        c = n(9712),
        d = n(5562),
        p = n(1154),
        _ = n(3542);
      (0, a.tl)(o.r);
      var f =
        null !== (r = s.Y.finalizeAllImmediately) && void 0 !== r
          ? r
          : function () {};
      function S(e, t) {
        return void 0 === t && (t = "observed"), (0, i.q)(e, t);
      }
      function h(e) {
        (0, l.e)(e);
      }
    },
    5287: (e, t) => {
      var n = Symbol.for("react.element"),
        r = Symbol.for("react.portal"),
        o = Symbol.for("react.fragment"),
        a = Symbol.for("react.strict_mode"),
        i = Symbol.for("react.profiler"),
        l = Symbol.for("react.provider"),
        s = Symbol.for("react.context"),
        u = Symbol.for("react.forward_ref"),
        c = Symbol.for("react.suspense"),
        d = Symbol.for("react.memo"),
        p = Symbol.for("react.lazy"),
        _ = Symbol.iterator;
      var f = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        S = Object.assign,
        h = {};
      function m(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = h),
          (this.updater = n || f);
      }
      function v() {}
      function g(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = h),
          (this.updater = n || f);
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
      var y = (g.prototype = new v());
      (y.constructor = g), S(y, m.prototype), (y.isPureReactComponent = !0);
      var R = Array.isArray,
        b = Object.prototype.hasOwnProperty,
        C = { current: null },
        P = { key: !0, ref: !0, __self: !0, __source: !0 };
      function E(e, t, r) {
        var o,
          a = {},
          i = null,
          l = null;
        if (null != t)
          for (o in (void 0 !== t.ref && (l = t.ref),
          void 0 !== t.key && (i = "" + t.key),
          t))
            b.call(t, o) && !P.hasOwnProperty(o) && (a[o] = t[o]);
        var s = arguments.length - 2;
        if (1 === s) a.children = r;
        else if (1 < s) {
          for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
          a.children = u;
        }
        if (e && e.defaultProps)
          for (o in (s = e.defaultProps)) void 0 === a[o] && (a[o] = s[o]);
        return {
          $$typeof: n,
          type: e,
          key: i,
          ref: l,
          props: a,
          _owner: C.current,
        };
      }
      function k(e) {
        return "object" == typeof e && null !== e && e.$$typeof === n;
      }
      var w = /\/+/g;
      function O(e, t) {
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
      function T(e, t, o, a, i) {
        var l = typeof e;
        ("undefined" !== l && "boolean" !== l) || (e = null);
        var s = !1;
        if (null === e) s = !0;
        else
          switch (l) {
            case "string":
            case "number":
              s = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case n:
                case r:
                  s = !0;
              }
          }
        if (s)
          return (
            (i = i((s = e))),
            (e = "" === a ? "." + O(s, 0) : a),
            R(i)
              ? ((o = ""),
                null != e && (o = e.replace(w, "$&/") + "/"),
                T(i, t, o, "", function (e) {
                  return e;
                }))
              : null != i &&
                (k(i) &&
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
                      (!i.key || (s && s.key === i.key)
                        ? ""
                        : ("" + i.key).replace(w, "$&/") + "/") +
                      e,
                  )),
                t.push(i)),
            1
          );
        if (((s = 0), (a = "" === a ? "." : a + ":"), R(e)))
          for (var u = 0; u < e.length; u++) {
            var c = a + O((l = e[u]), u);
            s += T(l, t, o, c, i);
          }
        else if (
          ((c = (function (e) {
            return null === e || "object" != typeof e
              ? null
              : "function" == typeof (e = (_ && e[_]) || e["@@iterator"])
                ? e
                : null;
          })(e)),
          "function" == typeof c)
        )
          for (e = c.call(e), u = 0; !(l = e.next()).done; )
            s += T((l = l.value), t, o, (c = a + O(l, u++)), i);
        else if ("object" === l)
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
        return s;
      }
      function I(e, t, n) {
        if (null == e) return e;
        var r = [],
          o = 0;
        return (
          T(e, r, "", "", function (e) {
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
        D = {
          ReactCurrentDispatcher: A,
          ReactCurrentBatchConfig: F,
          ReactCurrentOwner: C,
        };
      function B() {
        throw Error("act(...) is not supported in production builds of React.");
      }
      (t.Children = {
        map: I,
        forEach: function (e, t, n) {
          I(
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
            I(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            I(e, function (e) {
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
        (t.Component = m),
        (t.Fragment = o),
        (t.Profiler = i),
        (t.PureComponent = g),
        (t.StrictMode = a),
        (t.Suspense = c),
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D),
        (t.act = B),
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
            l = e._owner;
          if (null != t) {
            if (
              (void 0 !== t.ref && ((i = t.ref), (l = C.current)),
              void 0 !== t.key && (a = "" + t.key),
              e.type && e.type.defaultProps)
            )
              var s = e.type.defaultProps;
            for (u in t)
              b.call(t, u) &&
                !P.hasOwnProperty(u) &&
                (o[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u]);
          }
          var u = arguments.length - 2;
          if (1 === u) o.children = r;
          else if (1 < u) {
            s = Array(u);
            for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
            o.children = s;
          }
          return {
            $$typeof: n,
            type: e.type,
            key: a,
            ref: i,
            props: o,
            _owner: l,
          };
        }),
        (t.createContext = function (e) {
          return (
            ((e = {
              $$typeof: s,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
              _defaultValue: null,
              _globalName: null,
            }).Provider = { $$typeof: l, _context: e }),
            (e.Consumer = e)
          );
        }),
        (t.createElement = E),
        (t.createFactory = function (e) {
          var t = E.bind(null, e);
          return (t.type = e), t;
        }),
        (t.createRef = function () {
          return { current: null };
        }),
        (t.forwardRef = function (e) {
          return { $$typeof: u, render: e };
        }),
        (t.isValidElement = k),
        (t.lazy = function (e) {
          return {
            $$typeof: p,
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
        (t.unstable_act = B),
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
    6540: (e, t, n) => {
      e.exports = n(5287);
    },
    9864: (e, t, n) => {
      n.d(t, { b: () => r, m: () => i });
      var r,
        o = n(6540),
        a = n(3496);
      !(function (e) {
        (e[(e.Parent = 0)] = "Parent"), (e[(e.World = 1)] = "World");
      })(r || (r = {}));
      class i extends a._J {
        constructor(e) {
          super(e);
        }
        internalRender() {
          var e;
          const t = null === (e = this.props.enabled) || void 0 === e || e,
            n = this.props.rotation_start_angle_threshold
              ? (this.props.rotation_start_angle_threshold * Math.PI) / 180
              : null,
            r = this.props.rotation_stop_angle_threshold
              ? (this.props.rotation_stop_angle_threshold * Math.PI) / 180
              : null,
            a = this.props.rotation_ease_out_angle_threshold
              ? (this.props.rotation_ease_out_angle_threshold * Math.PI) / 180
              : null,
            i = this.props.rotation_min_angular_velocity
              ? (this.props.rotation_min_angular_velocity * Math.PI) / 180
              : null,
            l = this.props.rotation_max_angular_velocity
              ? (this.props.rotation_max_angular_velocity * Math.PI) / 180
              : null;
          return o.createElement(
            "vsg-elastic-head-transform",
            {
              "rotation-start-angle-threshold": n,
              "rotation-stop-angle-threshold": r,
              "rotation-ease-in-time": this.props.rotation_ease_in_time,
              "rotation-ease-in-power": this.props.rotation_ease_in_power,
              "rotation-ease-out-angle-threshold": a,
              "rotation-ease-out-power": this.props.rotation_ease_out_power,
              "rotation-min-angular-velocity": i,
              "rotation-max-angular-velocity": l,
              "translation-start-distance-threshold":
                this.props.translation_start_distance_threshold,
              "translation-stop-distance-threshold":
                this.props.translation_stop_distance_threshold,
              "translation-ease-in-time": this.props.translation_ease_in_time,
              "translation-ease-in-power": this.props.translation_ease_in_power,
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
    3725: (e, t, n) => {
      var r, o, a, i;
      function l() {
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
        Ee: () => C,
        GQ: () => F,
        Gz: () => u,
        HW: () => v,
        MV: () => a,
        NB: () => f,
        OH: () => r,
        R$: () => l,
        Rk: () => S,
        Xl: () => y,
        _1: () => M,
        _E: () => s,
        b: () => R,
        gN: () => E,
        k2: () => O,
        kG: () => k,
        ku: () => _,
        mo: () => h,
        mu: () => i,
        ne: () => c,
        pM: () => o,
        rx: () => T,
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
      let s = 0,
        u = 0,
        c = 4294967295;
      var d, p, _, f, S, h, m, v, g, y, R, b, C, P, E, k, w, O, T, I, M, A, F;
      !(function (e) {
        (e[(e.Invalid = 0)] = "Invalid"),
          (e[(e.RecenterCountdown = 1)] = "RecenterCountdown"),
          (e[(e.FloorAdjustExisting = 2)] = "FloorAdjustExisting"),
          (e[(e.RoomSetupFloor = 3)] = "RoomSetupFloor"),
          (e[(e.ClearRoomSetup = 4)] = "ClearRoomSetup"),
          (e[(e.RoomSetupFull = 5)] = "RoomSetupFull");
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
        })(p || (p = {})),
        (function (e) {
          (e[(e.Activated = 0)] = "Activated"),
            (e[(e.Deactivated = 1)] = "Deactivated");
        })(_ || (_ = {})),
        (function (e) {
          (e[(e.NoDashboardTab = 8)] = "NoDashboardTab"),
            (e[(e.AcceptsGamepadEvents = 16)] = "AcceptsGamepadEvents"),
            (e[(e.ShowGamepadFocus = 32)] = "ShowGamepadFocus"),
            (e[(e.SendVRDiscreteScrollEvents = 64)] =
              "SendVRDiscreteScrollEvents"),
            (e[(e.SendVRTouchpadEvents = 128)] = "SendVRTouchpadEvents"),
            (e[(e.ShowTouchPadScrollWheel = 256)] = "ShowTouchPadScrollWheel"),
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
            (e[(e.EnableControlBarClose = 33554432)] = "EnableControlBarClose"),
            (e[(e.MinimalControlBar = 67108864)] = "MinimalControlBar"),
            (e[(e.EnableClickStabilization = 134217728)] =
              "EnableClickStabilization"),
            (e[(e.MultiCursor = 268435456)] = "MultiCursor");
        })(f || (f = {})),
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
        })(v || (v = {})),
        (function (e) {
          (e[(e.ButtonPress_0 = 0)] = "ButtonPress_0"),
            (e[(e.ButtonPress_1 = 1)] = "ButtonPress_1"),
            (e[(e.ButtonPress_2 = 2)] = "ButtonPress_2"),
            (e[(e.ButtonPress_3 = 3)] = "ButtonPress_3"),
            (e[(e.CouldntFindSystemOverlay = 4)] = "CouldntFindSystemOverlay"),
            (e[(e.CouldntFindOrCreateClientOverlay = 5)] =
              "CouldntFindOrCreateClientOverlay"),
            (e[(e.ApplicationQuit = 6)] = "ApplicationQuit");
        })(g || (g = {})),
        (function (e) {
          (e[(e.Normal = 0)] = "Normal"),
            (e[(e.Password = 1)] = "Password"),
            (e[(e.Submit = 2)] = "Submit");
        })(y || (y = {})),
        (function (e) {
          (e[(e.SingleLine = 0)] = "SingleLine"),
            (e[(e.MultipleLines = 1)] = "MultipleLines");
        })(R || (R = {})),
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
        })(C || (C = {})),
        (function (e) {
          (e[(e.ECameraExposure_Unknown = 0)] = "ECameraExposure_Unknown"),
            (e[(e.ECameraExposure_Nominal = 1)] = "ECameraExposure_Nominal"),
            (e[(e.ECameraExposure_HighExposure = 2)] =
              "ECameraExposure_HighExposure");
        })(P || (P = {})),
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.ThisSteamVR = 1)] = "ThisSteamVR"),
            (e[(e.AnotherSteamVR = 2)] = "AnotherSteamVR"),
            (e[(e.AnotherRuntime = 3)] = "AnotherRuntime"),
            (e[(e.Error = -1)] = "Error");
        })(E || (E = {})),
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
        })(w || (w = {})),
        (function (e) {
          e[(e.Hostname = 0)] = "Hostname";
        })(O || (O = {})),
        (function (e) {
          (e[(e.Unavailable = 0)] = "Unavailable"),
            (e[(e.Active = 1)] = "Active"),
            (e[(e.Off = 2)] = "Off");
        })(T || (T = {})),
        (function (e) {
          (e[(e.Default = 1)] = "Default"), (e[(e.Floor = 2)] = "Floor");
        })(I || (I = {})),
        (function (e) {
          (e[(e.Inactive = 0)] = "Inactive"),
            (e[(e.PendingReset = 1)] = "PendingReset"),
            (e[(e.PendingResetIfNeeded = 2)] = "PendingResetIfNeeded"),
            (e[(e.Default = 3)] = "Default"),
            (e[(e.CV = 4)] = "CV"),
            (e[(e.Manual = 5)] = "Manual");
        })(M || (M = {})),
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
        })(A || (A = {})),
        (function (e) {
          (e[(e.Small = 0)] = "Small"),
            (e[(e.Medium = 1)] = "Medium"),
            (e[(e.Large = 2)] = "Large"),
            (e[(e.Gigantic = 3)] = "Gigantic"),
            (e[(e.Standing = 4)] = "Standing");
        })(F || (F = {}));
    },
    1139: (e, t, n) => {
      n.d(t, { CH: () => c, FH: () => l, aw: () => u, jE: () => s });
      var r = n(1635),
        o = n(6540),
        a = n(3236),
        i = n(7813);
      function l(...e) {
        return e
          .filter((e) => null != e && ("string" == typeof e || e[1]))
          .map((e) => ("string" == typeof e ? e : e[0]))
          .join(" ");
      }
      function s(e, t) {
        let n = t;
        for (; n.parentElement && !e.some((e) => n.matches(e)); )
          n = n.parentElement;
        return n;
      }
      class u {
        constructor() {
          (this.onScroll = null),
            (this.onScrollStop = null),
            (this.m_elem = null),
            (this.m_rScrollableParents = []),
            (this.m_bScrolling = !1),
            (this.m_scrollStopTimeoutHandle = void 0),
            (0, i.makeObservable)(this);
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
            (null === (e = this.onScrollStop) || void 0 === e || e.call(this)),
            (this.m_bScrolling = !1);
        }
      }
      function c() {
        const [, e] = o.useState(0);
        return o.useCallback(() => e((e) => e + 1), []);
      }
      (0, r.Cg)([i.observable], u.prototype, "m_bScrolling", void 0),
        (0, r.Cg)([a.o], u.prototype, "ref", null),
        (0, r.Cg)([i.computed], u.prototype, "isScrolling", null),
        (0, r.Cg)([a.o], u.prototype, "onParentScroll", null),
        (0, r.Cg)([a.o], u.prototype, "onScrollStopTimeout", null);
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/chunk~9b020ce54.js.map
