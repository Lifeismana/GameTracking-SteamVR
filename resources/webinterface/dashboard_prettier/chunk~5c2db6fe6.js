var CLSTAMP = "9839182";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [57],
  {
    3725: (e, n, t) => {
      var o, l, r, i;
      function a() {
        var e;
        return null !==
          (e =
            null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.Environment()) && void 0 !== e
          ? e
          : o.Unknown;
      }
      t.d(n, {
        $Z: () => d,
        Ee: () => P,
        GQ: () => L,
        Gz: () => u,
        HW: () => g,
        MV: () => r,
        NB: () => m,
        OH: () => o,
        R$: () => a,
        Xl: () => T,
        _1: () => w,
        _E: () => s,
        b: () => f,
        gN: () => M,
        k2: () => k,
        kG: () => b,
        ku: () => _,
        mo: () => p,
        mu: () => i,
        ne: () => c,
        pM: () => l,
        rx: () => I,
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
        })(l || (l = {})),
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
        })(r || (r = {})),
        (function (e) {
          (e[(e.Seated = 0)] = "Seated"),
            (e[(e.Standing = 1)] = "Standing"),
            (e[(e.RawAndUncalibrated = 2)] = "RawAndUncalibrated");
        })(i || (i = {}));
      let s = 0,
        u = 0,
        c = -1;
      var d, S, _, m, R, p, h, g, v, T, f, C, P, M, b, O, k, I, A, w, L;
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
        })(T || (T = {})),
        (function (e) {
          (e[(e.SingleLine = 0)] = "SingleLine"),
            (e[(e.MultipleLines = 1)] = "MultipleLines");
        })(f || (f = {})),
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
        })(C || (C = {})),
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
        })(P || (P = {})),
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.ThisSteamVR = 1)] = "ThisSteamVR"),
            (e[(e.AnotherSteamVR = 2)] = "AnotherSteamVR"),
            (e[(e.AnotherRuntime = 3)] = "AnotherRuntime"),
            (e[(e.Error = -1)] = "Error");
        })(M || (M = {})),
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
        })(k || (k = {})),
        (function (e) {
          (e[(e.Unavailable = 0)] = "Unavailable"),
            (e[(e.Active = 1)] = "Active"),
            (e[(e.Off = 2)] = "Off");
        })(I || (I = {})),
        (function (e) {
          (e[(e.Default = 1)] = "Default"), (e[(e.Floor = 2)] = "Floor");
        })(A || (A = {})),
        (function (e) {
          (e[(e.Inactive = 0)] = "Inactive"),
            (e[(e.PendingReset = 1)] = "PendingReset"),
            (e[(e.PendingResetIfNeeded = 2)] = "PendingResetIfNeeded"),
            (e[(e.Default = 3)] = "Default"),
            (e[(e.CV = 4)] = "CV"),
            (e[(e.Manual = 5)] = "Manual");
        })(w || (w = {})),
        (function (e) {
          (e[(e.Small = 0)] = "Small"),
            (e[(e.Medium = 1)] = "Medium"),
            (e[(e.Large = 2)] = "Large"),
            (e[(e.Gigantic = 3)] = "Gigantic"),
            (e[(e.Standing = 4)] = "Standing");
        })(L || (L = {}));
    },
    1139: (e, n, t) => {
      t.d(n, { FH: () => a, Nc: () => c, aw: () => u, jE: () => s });
      var o = t(1635),
        l = t(6540),
        r = t(3236),
        i = t(7813);
      function a(...e) {
        return e
          .filter((e) => null != e && ("string" == typeof e || e[1]))
          .map((e) => ("string" == typeof e ? e : e[0]))
          .join(" ");
      }
      function s(e, n) {
        let t = n;
        for (; t.parentElement && !e.some((e) => t.matches(e)); )
          t = t.parentElement;
        return t;
      }
      class u {
        constructor() {
          (this.onScroll = null),
            (this.onScrollStop = null),
            (this.m_elem = null),
            (this.m_rScrollableParents = []),
            (this.m_bScrolling = !1),
            (this.m_scrollStopTimeoutHandle = void 0),
            (0, i.Gn)(this);
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
            let n = [];
            if (!e) return n;
            let t = e.parentElement;
            for (; t; ) {
              const e = t.scrollWidth > t.clientWidth,
                o = t.scrollHeight > t.clientHeight;
              (e || o) && n.push(t), (t = t.parentElement);
            }
            return n;
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
        const [e, n] = l.useState(null),
          t = l.useCallback(() => {
            n(
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VRDashboardManager.GetKeyboardInputInfo(),
            );
          }, []);
        return (
          l.useEffect(t, []),
          l.useEffect(() => {
            const e =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.RegisterForKeyboardVisibilityChangedEvents(() => t());
            return () => (null == e ? void 0 : e.unregister());
          }, [t]),
          e
        );
      }
      (0, o.Cg)([i.sH], u.prototype, "m_bScrolling", void 0),
        (0, o.Cg)([r.o], u.prototype, "ref", null),
        (0, o.Cg)([i.EW], u.prototype, "isScrolling", null),
        (0, o.Cg)([r.o], u.prototype, "onParentScroll", null),
        (0, o.Cg)([r.o], u.prototype, "onScrollStopTimeout", null);
    },
  },
]); //# sourceMappingURL=file:///c:/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/chunk~5c2db6fe6.js.map
