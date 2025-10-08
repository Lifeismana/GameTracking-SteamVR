var CLSTAMP = "10128440";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [454],
  {
    6035: (e, n, o) => {
      o.d(n, { P: () => S });
      var t,
        r,
        a = o(6540),
        i = o(3815),
        l = o(4452),
        s = "function" == typeof Symbol && Symbol.for,
        u =
          null !==
            (r =
              null ===
                (t = Object.getOwnPropertyDescriptor(function () {}, "name")) ||
              void 0 === t
                ? void 0
                : t.configurable) &&
          void 0 !== r &&
          r,
        d = s
          ? Symbol.for("react.forward_ref")
          : "function" == typeof a.forwardRef &&
            (0, a.forwardRef)(function (e) {
              return null;
            }).$$typeof,
        c = s
          ? Symbol.for("react.memo")
          : "function" == typeof a.memo &&
            (0, a.memo)(function (e) {
              return null;
            }).$$typeof;
      function S(e, n) {
        var o;
        if (c && e.$$typeof === c)
          throw new Error(
            "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
          );
        if ((0, i.P)()) return e;
        var t =
            null !== (o = null == n ? void 0 : n.forwardRef) &&
            void 0 !== o &&
            o,
          r = e,
          s = e.displayName || e.name;
        if (
          d &&
          e.$$typeof === d &&
          ((t = !0), "function" != typeof (r = e.render))
        )
          throw new Error(
            "[mobx-react-lite] `render` property of ForwardRef was not a function",
          );
        var S,
          m,
          R = function (e, n) {
            return (0, l.q)(function () {
              return r(e, n);
            }, s);
          };
        return (
          (R.displayName = e.displayName),
          u &&
            Object.defineProperty(R, "name", {
              value: e.name,
              writable: !0,
              configurable: !0,
            }),
          e.contextTypes && (R.contextTypes = e.contextTypes),
          t && (R = (0, a.forwardRef)(R)),
          (R = (0, a.memo)(R)),
          (S = e),
          (m = R),
          Object.keys(S).forEach(function (e) {
            _[e] ||
              Object.defineProperty(
                m,
                e,
                Object.getOwnPropertyDescriptor(S, e),
              );
          }),
          R
        );
      }
      var _ = {
        $$typeof: !0,
        render: !0,
        compare: !0,
        type: !0,
        displayName: !0,
      };
    },
    4452: (e, n, o) => {
      o.d(n, { q: () => d });
      var t = o(7813),
        r = o(6540),
        a = o(6356),
        i = o(3815),
        l = o(7380),
        s = o(9888);
      function u(e) {
        e.reaction = new t.Reaction("observer".concat(e.name), function () {
          var n;
          (e.stateVersion = Symbol()),
            null === (n = e.onStoreChange) || void 0 === n || n.call(e);
        });
      }
      function d(e, n) {
        if ((void 0 === n && (n = "observed"), (0, i.P)())) return e();
        var o = r.useRef(null);
        if (!o.current) {
          var t = {
            reaction: null,
            onStoreChange: null,
            stateVersion: Symbol(),
            name: n,
            subscribe: function (e) {
              return (
                l.Y.unregister(t),
                (t.onStoreChange = e),
                t.reaction || (u(t), (t.stateVersion = Symbol())),
                function () {
                  var e;
                  (t.onStoreChange = null),
                    null === (e = t.reaction) || void 0 === e || e.dispose(),
                    (t.reaction = null);
                }
              );
            },
            getSnapshot: function () {
              return t.stateVersion;
            },
          };
          o.current = t;
        }
        var d,
          c,
          S = o.current;
        if (
          (S.reaction || (u(S), l.Y.register(o, S, S)),
          r.useDebugValue(S.reaction, a.E),
          (0, s.useSyncExternalStore)(
            S.subscribe,
            S.getSnapshot,
            S.getSnapshot,
          ),
          S.reaction.track(function () {
            try {
              d = e();
            } catch (e) {
              c = e;
            }
          }),
          c)
        )
          throw c;
        return d;
      }
    },
    6540: (e, n, o) => {
      e.exports = o(5287);
    },
    6090: (e, n, o) => {
      o.d(n, {
        $: () => k.$,
        $Z: () => h.$Z,
        Ay: () => y,
        CU: () => r.CU,
        Ci: () => f.C,
        Cw: () => a.C,
        Ee: () => h.Ee,
        Em: () => d.Em,
        Fb: () => r.Fb,
        Fi: () => p.Fi,
        GM: () => c.GM,
        GQ: () => h.GQ,
        Gz: () => h.Gz,
        HW: () => h.HW,
        I0: () => t.I0,
        IS: () => s.I,
        JZ: () => r.JZ,
        KI: () => k.KI,
        Ld: () => r.Ld,
        MQ: () => p.MQ,
        MV: () => h.MV,
        N: () => i.e,
        N1: () => R.N,
        NB: () => h.NB,
        NH: () => r.NH,
        O5: () => S.O,
        O6: () => r.O6,
        OH: () => h.OH,
        Oi: () => p.Oi,
        QB: () => r.QB,
        QR: () => k.QR,
        R$: () => h.R$,
        Se: () => r.Se,
        Uj: () => r.Uj,
        Vh: () => _.V,
        Xl: () => h.Xl,
        Y4: () => l.Y,
        Zk: () => p.Zk,
        _1: () => h._1,
        _h: () => p._h,
        _n: () => t._n,
        aX: () => _.a,
        b: () => h.b,
        b$: () => O.b,
        cB: () => C.L,
        dL: () => u.d,
        e_: () => r.e_,
        en: () => k.en,
        fD: () => k.fD,
        gN: () => h.gN,
        k2: () => h.k2,
        kG: () => h.kG,
        ku: () => h.ku,
        lq: () => m.l,
        mX: () => t.mX,
        mo: () => h.mo,
        mu: () => h.mu,
        nX: () => d.nX,
        ne: () => h.ne,
        nq: () => v.n,
        oN: () => r.oN,
        o_: () => r.o_,
        p0: () => r.p0,
        pM: () => h.pM,
        pg: () => t.pg,
        qF: () => r.qF,
        rF: () => s.H,
        rx: () => h.rx,
        sJ: () => g.$,
        sk: () => t.sk,
        sn: () => t.sn,
        tx: () => r.tx,
        uC: () => b.u,
        vx: () => r.vx,
      });
      var t = o(2824),
        r = o(6292),
        a = o(3389),
        i = (o(4120), o(1230)),
        l = o(5830),
        s = o(6186),
        u = o(3361),
        d = (o(111), o(5723)),
        c = o(3496),
        S = o(5178),
        _ = (o(428), o(9011), o(7350)),
        m = o(6847),
        R = o(5227),
        f = (o(10), o(1808)),
        p = o(7019),
        g = (o(1988), o(2527), o(9864), o(4189), o(322), o(1977), o(6417)),
        v = o(2303),
        C = o(8715),
        O = (o(4397), o(5459)),
        b = o(8472),
        h = (o(1184), o(3725)),
        k = o(4367);
      const y = VRHTML;
    },
    3725: (e, n, o) => {
      var t, r, a, i;
      function l() {
        var e;
        return null !==
          (e =
            null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.Environment()) && void 0 !== e
          ? e
          : t.Unknown;
      }
      o.d(n, {
        $Z: () => c,
        Ee: () => h,
        GQ: () => B,
        Gz: () => u,
        HW: () => g,
        MV: () => a,
        NB: () => m,
        OH: () => t,
        R$: () => l,
        Xl: () => C,
        _1: () => w,
        _E: () => s,
        b: () => O,
        gN: () => y,
        k2: () => E,
        kG: () => M,
        ku: () => _,
        mo: () => f,
        mu: () => i,
        ne: () => d,
        pM: () => r,
        rx: () => I,
      }),
        (function (e) {
          (e[(e.Desktop = 1)] = "Desktop"),
            (e[(e.Overlay = 2)] = "Overlay"),
            (e[(e.Unknown = 100)] = "Unknown");
        })(t || (t = {})),
        window.hasOwnProperty("VRHTML") || (window.VRHTML = null),
        (function (e) {
          (e[(e.Auto = 0)] = "Auto"),
            (e[(e.Low = 1)] = "Low"),
            (e[(e.Medium = 2)] = "Medium"),
            (e[(e.High = 3)] = "High");
        })(r || (r = {})),
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
        d = 4294967295;
      var c, S, _, m, R, f, p, g, v, C, O, b, h, k, y, M, P, E, I, T, w, A, B;
      !(function (e) {
        (e[(e.Invalid = 0)] = "Invalid"),
          (e[(e.RecenterCountdown = 1)] = "RecenterCountdown"),
          (e[(e.FloorAdjustExisting = 2)] = "FloorAdjustExisting"),
          (e[(e.RoomSetupFloor = 3)] = "RoomSetupFloor"),
          (e[(e.ClearRoomSetup = 4)] = "ClearRoomSetup");
      })(c || (c = {})),
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
        })(S || (S = {})),
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
        })(m || (m = {})),
        (function (e) {
          (e[(e.None = 0)] = "None"), (e[(e.Mouse = 1)] = "Mouse");
        })(R || (R = {})),
        (function (e) {
          (e[(e.Invalid = 0)] = "Invalid"),
            (e[(e.HMD = 1)] = "HMD"),
            (e[(e.Controller = 2)] = "Controller"),
            (e[(e.GenericTracker = 3)] = "GenericTracker"),
            (e[(e.TrackingReference = 4)] = "TrackingReference"),
            (e[(e.DisplayRedirect = 5)] = "DisplayRedirect");
        })(f || (f = {})),
        (function (e) {
          (e[(e.Unknown = 0)] = "Unknown"),
            (e[(e.NVIDIA = 1)] = "NVIDIA"),
            (e[(e.AMD = 2)] = "AMD");
        })(p || (p = {})),
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
            (e[(e.CouldntFindSystemOverlay = 4)] = "CouldntFindSystemOverlay"),
            (e[(e.CouldntFindOrCreateClientOverlay = 5)] =
              "CouldntFindOrCreateClientOverlay"),
            (e[(e.ApplicationQuit = 6)] = "ApplicationQuit");
        })(v || (v = {})),
        (function (e) {
          (e[(e.Normal = 0)] = "Normal"),
            (e[(e.Password = 1)] = "Password"),
            (e[(e.Submit = 2)] = "Submit");
        })(C || (C = {})),
        (function (e) {
          (e[(e.SingleLine = 0)] = "SingleLine"),
            (e[(e.MultipleLines = 1)] = "MultipleLines");
        })(O || (O = {})),
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
        })(h || (h = {})),
        (function (e) {
          (e[(e.ECameraExposure_Unknown = 0)] = "ECameraExposure_Unknown"),
            (e[(e.ECameraExposure_Nominal = 1)] = "ECameraExposure_Nominal"),
            (e[(e.ECameraExposure_HighExposure = 2)] =
              "ECameraExposure_HighExposure");
        })(k || (k = {})),
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.ThisSteamVR = 1)] = "ThisSteamVR"),
            (e[(e.AnotherSteamVR = 2)] = "AnotherSteamVR"),
            (e[(e.AnotherRuntime = 3)] = "AnotherRuntime"),
            (e[(e.Error = -1)] = "Error");
        })(y || (y = {})),
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
        })(M || (M = {})),
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
        })(P || (P = {})),
        (function (e) {
          e[(e.Hostname = 0)] = "Hostname";
        })(E || (E = {})),
        (function (e) {
          (e[(e.Unavailable = 0)] = "Unavailable"),
            (e[(e.Active = 1)] = "Active"),
            (e[(e.Off = 2)] = "Off");
        })(I || (I = {})),
        (function (e) {
          (e[(e.Default = 1)] = "Default"), (e[(e.Floor = 2)] = "Floor");
        })(T || (T = {})),
        (function (e) {
          (e[(e.Inactive = 0)] = "Inactive"),
            (e[(e.PendingReset = 1)] = "PendingReset"),
            (e[(e.PendingResetIfNeeded = 2)] = "PendingResetIfNeeded"),
            (e[(e.Default = 3)] = "Default"),
            (e[(e.CV = 4)] = "CV"),
            (e[(e.Manual = 5)] = "Manual");
        })(w || (w = {})),
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
        })(B || (B = {}));
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/chunk~90cf3e499.js.map
