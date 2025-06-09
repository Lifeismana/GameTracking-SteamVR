var CLSTAMP = "9806884";
(() => {
  "use strict";
  var e,
    t = {
      6090: (e, t, n) => {
        n.d(t, {
          $: () => R.$,
          $Z: () => O.$Z,
          Ay: () => w,
          CU: () => s.CU,
          Ci: () => S.C,
          Cw: () => a.C,
          Ee: () => O.Ee,
          Em: () => d.Em,
          Fb: () => s.Fb,
          Fi: () => g.Fi,
          GQ: () => O.GQ,
          Gz: () => O.Gz,
          HW: () => O.HW,
          I0: () => o.I0,
          JZ: () => s.JZ,
          KI: () => R.KI,
          Ld: () => s.Ld,
          MQ: () => g.MQ,
          MV: () => O.MV,
          N: () => i.e,
          N1: () => v.N,
          NB: () => O.NB,
          NH: () => s.NH,
          O5: () => h.O,
          O6: () => s.O6,
          OH: () => O.OH,
          Oi: () => g.Oi,
          QB: () => s.QB,
          QR: () => R.QR,
          R$: () => O.R$,
          Se: () => s.Se,
          Uj: () => s.Uj,
          Vh: () => u.V,
          Xl: () => O.Xl,
          Y4: () => r.Y,
          Zk: () => g.Zk,
          _1: () => O._1,
          _h: () => g._h,
          _n: () => o._n,
          aX: () => u.a,
          b: () => O.b,
          b$: () => E.b,
          cB: () => _.L,
          dL: () => m.d,
          e_: () => s.e_,
          en: () => R.en,
          fD: () => R.fD,
          gN: () => O.gN,
          gO: () => l.g,
          k2: () => O.k2,
          kG: () => O.kG,
          ku: () => O.ku,
          lq: () => p.l,
          mX: () => o.mX,
          mo: () => O.mo,
          mu: () => O.mu,
          nX: () => d.nX,
          ne: () => O.ne,
          nq: () => C.n,
          oN: () => s.oN,
          o_: () => s.o_,
          p0: () => s.p0,
          pM: () => O.pM,
          pg: () => o.pg,
          qF: () => s.qF,
          rF: () => c.H,
          rx: () => O.rx,
          sJ: () => b.$,
          sk: () => o.sk,
          tx: () => s.tx,
          uC: () => f.u,
          vx: () => s.vx,
        });
        var o = n(2824),
          s = n(6292),
          a = n(3389),
          l = (n(4120), n(9424)),
          i = n(1230),
          r = n(5830),
          c = n(6186),
          m = n(3361),
          d = (n(111), n(5723)),
          h = (n(3496), n(5178)),
          u = (n(428), n(9011), n(7350)),
          p = n(6847),
          v = n(5227),
          S = (n(10), n(1808)),
          g = n(7019),
          b = (n(1988), n(2527), n(9864), n(4189), n(322), n(1977), n(6417)),
          C = n(2303),
          _ = n(8715),
          E = (n(4397), n(5459)),
          f = n(8472),
          O = (n(1184), n(3725)),
          R = n(4367);
        const w = VRHTML;
      },
      3725: (e, t, n) => {
        var o, s, a, l;
        function i() {
          var e;
          return null !==
            (e =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.Environment()) && void 0 !== e
            ? e
            : o.Unknown;
        }
        n.d(t, {
          $Z: () => d,
          Ee: () => O,
          GQ: () => L,
          Gz: () => c,
          HW: () => b,
          MV: () => a,
          NB: () => p,
          OH: () => o,
          R$: () => i,
          Xl: () => _,
          _1: () => y,
          _E: () => r,
          b: () => E,
          gN: () => R,
          k2: () => T,
          kG: () => w,
          ku: () => u,
          mo: () => S,
          mu: () => l,
          ne: () => m,
          pM: () => s,
          rx: () => N,
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
          })(s || (s = {})),
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
          })(l || (l = {}));
        let r = 0,
          c = 0,
          m = -1;
        var d, h, u, p, v, S, g, b, C, _, E, f, O, R, w, k, T, N, M, y, L;
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
          })(h || (h = {})),
          (function (e) {
            (e[(e.Activated = 0)] = "Activated"),
              (e[(e.Deactivated = 1)] = "Deactivated");
          })(u || (u = {})),
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
          })(p || (p = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"), (e[(e.Mouse = 1)] = "Mouse");
          })(v || (v = {})),
          (function (e) {
            (e[(e.Invalid = 0)] = "Invalid"),
              (e[(e.HMD = 1)] = "HMD"),
              (e[(e.Controller = 2)] = "Controller"),
              (e[(e.GenericTracker = 3)] = "GenericTracker"),
              (e[(e.TrackingReference = 4)] = "TrackingReference"),
              (e[(e.DisplayRedirect = 5)] = "DisplayRedirect");
          })(S || (S = {})),
          (function (e) {
            (e[(e.Unknown = 0)] = "Unknown"),
              (e[(e.NVIDIA = 1)] = "NVIDIA"),
              (e[(e.AMD = 2)] = "AMD");
          })(g || (g = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.Starting = 1)] = "Starting"),
              (e[(e.Quitting = 2)] = "Quitting"),
              (e[(e.Running = 3)] = "Running"),
              (e[(e.Waiting = 4)] = "Waiting");
          })(b || (b = {})),
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
          })(C || (C = {})),
          (function (e) {
            (e[(e.Normal = 0)] = "Normal"),
              (e[(e.Password = 1)] = "Password"),
              (e[(e.Submit = 2)] = "Submit");
          })(_ || (_ = {})),
          (function (e) {
            (e[(e.SingleLine = 0)] = "SingleLine"),
              (e[(e.MultipleLines = 1)] = "MultipleLines");
          })(E || (E = {})),
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
          })(f || (f = {})),
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
          })(w || (w = {})),
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
          })(k || (k = {})),
          (function (e) {
            e[(e.Hostname = 0)] = "Hostname";
          })(T || (T = {})),
          (function (e) {
            (e[(e.Unavailable = 0)] = "Unavailable"),
              (e[(e.Active = 1)] = "Active"),
              (e[(e.Off = 2)] = "Off");
          })(N || (N = {})),
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
          })(y || (y = {})),
          (function (e) {
            (e[(e.Small = 0)] = "Small"),
              (e[(e.Medium = 1)] = "Medium"),
              (e[(e.Large = 2)] = "Large"),
              (e[(e.Gigantic = 3)] = "Gigantic"),
              (e[(e.Standing = 4)] = "Standing");
          })(L || (L = {}));
      },
      1139: (e, t, n) => {
        n.d(t, {
          FH: () => r,
          Nc: () => d,
          aw: () => m,
          e6: () => i,
          jE: () => c,
        });
        var o = n(1635),
          s = n(6540),
          a = n(3236),
          l = n(7813);
        function i(e) {
          let t = window.location.search.substring(1).split("&");
          for (let n = 0; n < t.length; n++) {
            let o = t[n].split("=");
            if (decodeURIComponent(o[0]).toUpperCase() == e.toUpperCase())
              return decodeURIComponent(o[1]);
          }
          return "";
        }
        function r(...e) {
          return e
            .filter((e) => null != e && ("string" == typeof e || e[1]))
            .map((e) => ("string" == typeof e ? e : e[0]))
            .join(" ");
        }
        function c(e, t) {
          let n = t;
          for (; n.parentElement && !e.some((e) => n.matches(e)); )
            n = n.parentElement;
          return n;
        }
        class m {
          constructor() {
            (this.onScroll = null),
              (this.onScrollStop = null),
              (this.m_elem = null),
              (this.m_rScrollableParents = []),
              (this.m_bScrolling = !1),
              (this.m_scrollStopTimeoutHandle = void 0),
              (0, l.Gn)(this);
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
                  o = n.scrollHeight > n.clientHeight;
                (e || o) && t.push(n), (n = n.parentElement);
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
        function d() {
          const [e, t] = s.useState(null),
            n = s.useCallback(() => {
              t(
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.VRDashboardManager.GetKeyboardInputInfo(),
              );
            }, []);
          return (
            s.useEffect(n, []),
            s.useEffect(() => {
              const e =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.RegisterForKeyboardVisibilityChangedEvents(() =>
                      n(),
                    );
              return () => (null == e ? void 0 : e.unregister());
            }, [n]),
            e
          );
        }
        (0, o.Cg)([l.sH], m.prototype, "m_bScrolling", void 0),
          (0, o.Cg)([a.o], m.prototype, "ref", null),
          (0, o.Cg)([l.EW], m.prototype, "isScrolling", null),
          (0, o.Cg)([a.o], m.prototype, "onParentScroll", null),
          (0, o.Cg)([a.o], m.prototype, "onScrollStopTimeout", null);
      },
      157: (e, t, n) => {
        var o = n(1635),
          s = n(6540),
          a = n(5338),
          l = n(4015),
          i = n(1139),
          r = n(6090),
          c = n(3714),
          m = n(6646),
          d = n(6725),
          h = n(3236),
          u = n(5471);
        n(7750);
        class p extends s.Component {
          constructor(e) {
            super(e),
              (this.state = {
                sSelectedOption: this.props.sValueSelectedItem,
                bVisible: !1,
              });
          }
          componentWillMount() {
            null != this.props.bShowOptionsOnStart &&
              this.setState({ bVisible: this.props.bShowOptionsOnStart });
          }
          componentWillReceiveProps(e) {
            null != e.bShowOptionsOnStart &&
              e.bShowOptionsOnStart != this.props.bShowOptionsOnStart &&
              this.setState({ bVisible: e.bShowOptionsOnStart });
          }
          Show(e) {
            this.setState({ bVisible: !0 }), e.stopPropagation();
          }
          Hide(e) {
            this.setState({ bVisible: !1 }), e && e.stopPropagation();
          }
          OnOptionChanged(e, t) {
            this.setState({ sSelectedOption: t }),
              this.props.fnOptionSelected(t),
              this.Hide(e);
          }
          render() {
            let e = this.props.vecOptions.map((e, t) => {
                if ("-" == e.sValue)
                  return s.createElement("div", {
                    key: t,
                    className: "InlineSeparator",
                  });
                if ("-blank" == e.sValue)
                  return s.createElement(
                    "div",
                    { key: t, className: "InlineBlankSeparator" },
                    e.sLocalized,
                  );
                if ("-nonitem" == e.sValue)
                  return s.createElement(
                    "div",
                    { key: t, className: "InlineNonItemSeparator" },
                    e.sLocalized,
                  );
                if ("-subHeader" == e.sValue)
                  return s.createElement(
                    "div",
                    { key: t, className: "InlineSubHeaderSeparator" },
                    e.sLocalized,
                  );
                {
                  let n,
                    o,
                    a = "InlineDropdownItem";
                  return (
                    this.props.sValueSelectedItem == e.sValue &&
                      (a += " Selected"),
                    null != e.sRequiredLocalized &&
                      (n = s.createElement(
                        "span",
                        { className: "BindingLabelActionRequirement" },
                        e.sRequiredLocalized,
                      )),
                    null != e.sLocalizedDescription &&
                      (o = s.createElement(
                        u.Ay,
                        {
                          content: e.sLocalizedDescription,
                          theme: "ControllerBindingToolTip",
                        },
                        s.createElement(
                          "span",
                          { className: "SourceModeHelp" },
                          "?",
                        ),
                      )),
                    s.createElement(
                      "div",
                      {
                        key: t,
                        className: a,
                        onClick: (t) => {
                          this.OnOptionChanged(t, e.sValue);
                        },
                      },
                      e.sLocalized,
                      n,
                      o,
                    )
                  );
                }
              }),
              t =
                "InlineDropdownLabel " +
                (null == this.props.sHeaderClass
                  ? ""
                  : this.props.sHeaderClass),
              n =
                "InlineOptionsDropDownRodal " +
                (null == this.props.sModalClass ? "" : this.props.sModalClass);
            let o = this.props.sLocalizedSelectedItem;
            !o &&
              this.state.sSelectedOption &&
              this.props.vecOptions.forEach((e) => {
                e.sValue == this.state.sSelectedOption && (o = e.sLocalized);
              });
            let a = this.props.bReadOnly ? () => {} : this.Show;
            return s.createElement(
              "div",
              { className: t, onClick: a },
              o &&
                s.createElement(
                  "div",
                  { className: this.props.sMainButtonClass },
                  o,
                ),
              s.createElement(
                d.A,
                {
                  visible: this.state.bVisible,
                  onClose: this.Hide,
                  customStyles: {
                    width: "60%",
                    height: "fit-content",
                    maxHeight: "90%",
                    display: "flex",
                  },
                  showCloseButton: !1,
                  animation: "fade",
                  className: n,
                  closeOnEsc: !0,
                },
                this.state.bVisible &&
                  s.createElement(
                    "div",
                    { className: "FlexColumn InlineDropdownModalWrapper" },
                    this.props.sModalTitleString &&
                      s.createElement(
                        "div",
                        { className: "Label ModalHeader" },
                        this.props.sModalTitleString,
                      ),
                    s.createElement(
                      "div",
                      { className: "FlexColumn InlineDropdownItemWrapper" },
                      e,
                    ),
                  ),
              ),
            );
          }
        }
        (0, o.Cg)([h.o], p.prototype, "Show", null),
          (0, o.Cg)([h.o], p.prototype, "Hide", null),
          (0, o.Cg)([h.o], p.prototype, "OnOptionChanged", null);
        s.Component;
        let v = class extends s.Component {
          constructor(e) {
            super(e);
          }
          render() {
            return null;
          }
        };
        v = (0, o.Cg)([l.PA], v);
        let S = class extends s.Component {
          constructor(e) {
            super(e),
              (this.m_SVGElement = void 0),
              (this.unscaleFactor = 1),
              (this.scaleFactor = 1),
              (this.scaledCenter = { x: 0, y: 0 }),
              (this.center = { x: 0, y: 0 });
          }
          componentWillMount() {
            m.X.ToggleRoomOverview(!0);
          }
          componentWillUnmount() {
            m.X.ToggleRoomOverview(!1);
          }
          calculateScale() {
            let e = { x: 0, y: 0 },
              t = { x: 0, y: 0 };
            if (m.X.roomoverview.devices && m.X.roomoverview.devices.length)
              for (let n of m.X.roomoverview.devices)
                (e.x = Math.min(n.position[0], e.x)),
                  (t.x = Math.max(n.position[0], t.x)),
                  (e.y = Math.min(n.position[1], e.y)),
                  (t.y = Math.max(n.position[1], t.y));
            if (m.X.roomoverview.collision && m.X.roomoverview.collision.length)
              for (let n of m.X.roomoverview.collision)
                (e.x = Math.min(n[0], e.x)),
                  (t.x = Math.max(n[0], t.x)),
                  (e.y = Math.min(n[1], e.y)),
                  (t.y = Math.max(n[1], t.y));
            if (
              ((this.unscaleFactor = 1.2 * Math.max(t.x - e.x, t.y - e.y)),
              this.m_SVGElement)
            ) {
              let e = this.m_SVGElement.getBoundingClientRect().width,
                t = this.m_SVGElement.getBoundingClientRect().height;
              (this.scaleFactor = Math.min(e, t)),
                (this.scaledCenter =
                  e > t ? { x: (e - t) / 2, y: 0 } : { x: 0, y: (t - e) / 2 });
            }
            this.center = {
              x: e.x + (t.x - e.x) / 2,
              y: e.y + (t.y - e.y) / 2,
            };
          }
          scaleCoordinate(e) {
            return (
              (e.x -= this.center.x),
              (e.y -= this.center.y),
              (e.x /= -this.unscaleFactor),
              (e.y /= this.unscaleFactor),
              (e.x += 0.5),
              (e.y += 0.5),
              (e.x *= this.scaleFactor),
              (e.y *= this.scaleFactor),
              (e.x += this.scaledCenter.x),
              (e.y += this.scaledCenter.y),
              e
            );
          }
          BindSVGRef(e) {
            this.m_SVGElement = e;
          }
          ResizeSVG() {
            this.calculateScale(), this.render();
          }
          render() {
            return null;
          }
        };
        (0, o.Cg)([h.o], S.prototype, "BindSVGRef", null),
          (0, o.Cg)([h.o], S.prototype, "ResizeSVG", null),
          (S = (0, o.Cg)([l.PA], S));
        var g = n(7813);
        class b {
          constructor() {
            (this.m_wsWebSocketToServer = void 0),
              (this.connected = !1),
              (this.vecMessages = []),
              (this.vecMessageBuffer = g.sH.array()),
              (0, g.Gn)(this);
          }
          OpenWebSocketToHost() {
            return new Promise((e, t) => {
              console.log("Connecting vconsole..."),
                (this.m_wsWebSocketToServer = new WebSocket(
                  "ws://" + window.location.host,
                )),
                this.m_wsWebSocketToServer.addEventListener("open", (t) => {
                  this.OnWebSocketOpen(t), e();
                }),
                this.m_wsWebSocketToServer.addEventListener("message", (e) => {
                  this.OnWebSocketMessage(e);
                }),
                this.m_wsWebSocketToServer.addEventListener("close", (e) => {
                  this.OnWebSocketClose(e);
                });
            });
          }
          Init() {
            return (0, o.sH)(this, void 0, void 0, function* () {
              this.connected ||
                ((this.vecMessages = []),
                (0, g.fm)(
                  () => {
                    this.vecMessages = this.vecMessages
                      .concat(
                        this.vecMessageBuffer.splice(
                          0,
                          this.vecMessageBuffer.length,
                        ),
                      )
                      .map((e, t) => ({ item: e, index: t }))
                      .sort(
                        (e, t) =>
                          e.item.nTimestamp - t.item.nTimestamp ||
                          e.index - t.index,
                      )
                      .map(({ item: e }) => e);
                  },
                  { delay: 300 },
                ),
                yield this.OpenWebSocketToHost());
            });
          }
          OnWebSocketOpen(e) {
            (this.connected = !0),
              this.WebSocketSend("console_open"),
              window.addEventListener("beforeunload", () => {
                this.WebSocketSend("console_close");
              });
          }
          OnWebSocketClose(e) {
            console.log("Lost connection to host..."),
              (this.connected = !1),
              this.OpenWebSocketToHost();
          }
          WebSocketSend(e) {
            null != this.m_wsWebSocketToServer &&
              1 == this.m_wsWebSocketToServer.readyState &&
              this.m_wsWebSocketToServer.send(e);
          }
          OnWebSocketMessage(e) {
            let t = JSON.parse(e.data);
            this.OnConsoleMessage(t);
          }
          OnConsoleMessage(e) {
            let t = e.sMessage.indexOf("-");
            (e.sTimestamp = e.sMessage.substr(0, t)),
              (e.sMessage = e.sMessage.substr(t + 1)),
              this.vecMessageBuffer.push(e);
          }
        }
        (0, o.Cg)([g.sH], b.prototype, "connected", void 0),
          (0, o.Cg)([g.sH], b.prototype, "vecMessages", void 0),
          (0, o.Cg)([h.o], b.prototype, "OpenWebSocketToHost", null),
          (0, o.Cg)([h.o], b.prototype, "OnWebSocketOpen", null),
          (0, o.Cg)([h.o], b.prototype, "OnWebSocketClose", null),
          (0, o.Cg)([h.o], b.prototype, "WebSocketSend", null),
          (0, o.Cg)([h.o], b.prototype, "OnWebSocketMessage", null);
        const C = new b();
        window.VRConsoleState = C;
        let _ = class extends s.Component {
          constructor(e) {
            super(e), (this.state = { showLogName: !1, showTimestamp: !0 });
          }
          scrollToBottom() {
            this.messagesEnd.scrollIntoView(), (this.historyChanged = !1);
          }
          componentDidMount() {
            this.scrollToBottom();
          }
          componentWillUpdate(e) {
            if (
              ((this.historyChanged =
                e.messages.length !== this.props.messages.length),
              this.historyChanged)
            ) {
              const e = this.messageContainer.scrollTop,
                t =
                  this.messageContainer.scrollHeight -
                  this.messageContainer.clientHeight;
              this.scrollAtBottom = t <= 0 || e === t;
            }
          }
          componentDidUpdate() {
            this.historyChanged && this.scrollAtBottom && this.scrollToBottom();
          }
          onCheckboxChange(e, t) {
            switch (e) {
              case "showLogName":
                this.setState({ showLogName: t });
                break;
              case "showTimestamp":
                this.setState({ showTimestamp: t });
            }
          }
          render() {
            let e = [];
            return (
              C.connected &&
                (e = this.props.messages.map((e, t) =>
                  s.createElement(
                    "div",
                    { key: "log_" + t, className: "LogLine " + e.sLogName },
                    this.state.showLogName &&
                      s.createElement(
                        "div",
                        { className: "LogSource" },
                        e.sLogName,
                      ),
                    this.state.showTimestamp &&
                      s.createElement(
                        "div",
                        { className: "LogTime" },
                        e.sTimestamp,
                      ),
                    s.createElement(
                      "div",
                      { className: "LogMessage" },
                      e.sMessage,
                    ),
                  ),
                )),
              s.createElement(
                "div",
                null,
                s.createElement(
                  "div",
                  { className: "ConsoleOptions FlexRow" },
                  s.createElement(
                    "div",
                    null,
                    s.createElement("input", {
                      id: "lognamecheckbox",
                      type: "checkbox",
                      checked: this.state.showLogName,
                      onChange: (e) => {
                        this.onCheckboxChange("showLogName", e.target.checked);
                      },
                    }),
                    s.createElement(
                      "label",
                      { htmlFor: "lognamecheckbox", className: "Label" },
                      (0, c.we)("#VRDevConsole_ShowLogName"),
                    ),
                  ),
                  s.createElement(
                    "div",
                    null,
                    s.createElement("input", {
                      id: "timestampcheckbox",
                      type: "checkbox",
                      checked: this.state.showTimestamp,
                      onChange: (e) => {
                        this.onCheckboxChange(
                          "showTimestamp",
                          e.target.checked,
                        );
                      },
                    }),
                    s.createElement(
                      "label",
                      { htmlFor: "timestampcheckbox", className: "Label" },
                      (0, c.we)("#VRDevConsole_Showtimestamp"),
                    ),
                  ),
                ),
                s.createElement(
                  "div",
                  {
                    className: "ConsoleContainer",
                    ref: (e) => {
                      this.messageContainer = e;
                    },
                  },
                  e,
                  s.createElement("div", {
                    ref: (e) => {
                      this.messagesEnd = e;
                    },
                  }),
                ),
              )
            );
          }
        };
        (0, o.Cg)([h.o], _.prototype, "onCheckboxChange", null),
          (_ = (0, o.Cg)([l.PA], _));
        let E = class extends s.Component {
          constructor(e) {
            super(e),
              (this.state = { bVisible: !1, DeviceTopology: null }),
              m.X.GetUSBDeviceList().then((e) => {
                console.log(e), this.setState({ DeviceTopology: e });
              });
          }
          OnOpenRodal() {
            this.setState({ bVisible: !0 });
          }
          OnCloseRodal() {
            this.setState({ bVisible: !1 });
          }
          BuildUSBTree(e) {
            let t = [];
            for (let n of e)
              n.sName &&
                t.push(s.createElement("div", { className: "Label" }, n.sName)),
                n.sDriverManufacturer &&
                  t.push(
                    s.createElement(
                      "div",
                      { className: "USBChild FlexColumn" },
                      s.createElement(
                        "div",
                        { className: "Label" },
                        n.sDriverManufacturer,
                      ),
                      s.createElement(
                        "div",
                        { className: "Label" },
                        n.sDriverVersion,
                      ),
                    ),
                  ),
                n.sDeviceManufacturer &&
                  t.push(
                    s.createElement(
                      "div",
                      { className: "USBChild FlexColumn" },
                      s.createElement(
                        "div",
                        { className: "Label" },
                        n.sDeviceManufacturer,
                      ),
                      s.createElement(
                        "div",
                        { className: "Label" },
                        n.sDeviceProduct,
                        " ( ",
                        n.sDeviceSerial,
                        " )",
                      ),
                    ),
                  ),
                n.children &&
                  t.push(
                    s.createElement(
                      "div",
                      { className: "USBChild FlexColumn" },
                      this.BuildUSBTree(n.children),
                    ),
                  );
            return t;
          }
          render() {
            return s.createElement(
              "div",
              null,
              s.createElement(
                "div",
                { className: "ButtonControl", onClick: this.OnOpenRodal },
                this.props.sLabel,
              ),
              s.createElement(
                d.A,
                {
                  visible: this.state.bVisible,
                  onClose: this.OnCloseRodal,
                  showCloseButton: !0,
                  animation: "fade",
                  customStyles: { width: "60%", height: "fit-content" },
                  className: "BindingChordsModal",
                  closeOnEsc: !0,
                },
                s.createElement(
                  "div",
                  { className: "USBTopologyContainer" },
                  this.state.DeviceTopology &&
                    this.state.DeviceTopology.usb_devices &&
                    this.BuildUSBTree(
                      this.state.DeviceTopology.usb_devices.children,
                    ),
                ),
              ),
            );
          }
        };
        (0, o.Cg)([h.o], E.prototype, "OnOpenRodal", null),
          (0, o.Cg)([h.o], E.prototype, "OnCloseRodal", null),
          (E = (0, o.Cg)([l.PA], E));
        let f = class extends s.Component {
          constructor(e) {
            super(e);
          }
          render() {
            return s.createElement(
              "div",
              { className: "FlexColumn DevFiles" },
              s.createElement(
                "div",
                null,
                s.createElement(
                  "div",
                  { className: "ButtonControl" },
                  s.createElement(
                    "a",
                    { href: "/path_handles.json" },
                    (0, c.we)("#VRDevFiles_PathHandles"),
                  ),
                ),
              ),
              s.createElement(E, {
                sLabel: (0, c.we)("#VRDevFiles_USBDevices"),
              }),
              s.createElement(
                "div",
                { className: "Label Title" },
                (0, c.we)("#VRDevFiles_JSON"),
              ),
              s.createElement(
                "div",
                { className: "Label" },
                s.createElement(
                  "a",
                  { target: "_blank", href: "/system.json" },
                  "system.json",
                ),
              ),
              s.createElement(
                "div",
                { className: "Label" },
                s.createElement(
                  "a",
                  { target: "_blank", href: "/displays.json" },
                  "displays.json",
                ),
              ),
              s.createElement(
                "div",
                { className: "Label" },
                s.createElement(
                  "a",
                  { target: "_blank", href: "/devices.json" },
                  "devices.json",
                ),
              ),
              s.createElement(
                "div",
                { className: "Label" },
                s.createElement(
                  "a",
                  { target: "_blank", href: "/settings.json" },
                  "settings.json",
                ),
              ),
              s.createElement(
                "div",
                { className: "Label" },
                s.createElement(
                  "a",
                  { target: "_blank", href: "/drivers.json" },
                  "drivers.json",
                ),
              ),
              s.createElement(
                "div",
                { className: "Label" },
                s.createElement(
                  "a",
                  { target: "_blank", href: "/resourceddrivers.json" },
                  "resourcesdrivers.json",
                ),
              ),
              s.createElement(
                "div",
                { className: "Label" },
                s.createElement(
                  "a",
                  { target: "_blank", href: "/vrpathreg.json" },
                  "vrpathreg.json",
                ),
              ),
              s.createElement(
                "div",
                { className: "Label" },
                s.createElement(
                  "a",
                  { target: "_blank", href: "/vrfirmware.json" },
                  "vrfirmware.json",
                ),
              ),
              s.createElement(
                "div",
                { className: "Label Title" },
                (0, c.we)("#VRDevFiles_Logging"),
              ),
              s.createElement(
                "div",
                { className: "Label" },
                s.createElement(
                  "a",
                  { target: "_blank", href: "/logs/vrserver.txt" },
                  "vrserver.txt",
                ),
              ),
              s.createElement(
                "div",
                { className: "Label" },
                s.createElement(
                  "a",
                  { target: "_blank", href: "/logs/vrmonitor.txt" },
                  "vrmonitor.txt",
                ),
              ),
              s.createElement(
                "div",
                { className: "Label" },
                s.createElement(
                  "a",
                  { target: "_blank", href: "/logs/vrcompositor.txt" },
                  "vrcompositor.txt",
                ),
              ),
              s.createElement(
                "div",
                { className: "Label" },
                s.createElement(
                  "a",
                  { target: "_blank", href: "/logs/vrclient_vrcompositor.txt" },
                  "vrclient_vrcompositor.txt",
                ),
              ),
              s.createElement(
                "div",
                { className: "Label" },
                s.createElement(
                  "a",
                  { target: "_blank", href: "/logs/firmware_update.txt" },
                  "firmware_update.txt",
                ),
              ),
              s.createElement(
                "div",
                { className: "Label" },
                s.createElement(
                  "a",
                  { target: "_blank", href: "/logs/vrserver_previous.txt" },
                  "vrserver_previous.txt",
                ),
              ),
              s.createElement(
                "div",
                { className: "Label" },
                s.createElement(
                  "a",
                  { target: "_blank", href: "/logs/vrdashboard.txt" },
                  "vrdashboard.txt",
                ),
              ),
              s.createElement(
                "div",
                { className: "Label Title" },
                (0, c.we)("#VRDevFiles_Configuration"),
              ),
              s.createElement(
                "div",
                { className: "Label" },
                s.createElement(
                  "a",
                  { target: "_blank", href: "/config/chaperone_info.vrchap" },
                  "chaperone_info.vrchap",
                ),
              ),
              s.createElement(
                "div",
                { className: "Label" },
                s.createElement(
                  "a",
                  { target: "_blank", href: "/config/steamvr.vrsettings" },
                  "steamvr.vrsettings",
                ),
              ),
              s.createElement(
                "div",
                { className: "Label" },
                s.createElement(
                  "a",
                  { target: "_blank", href: "/config/appconfig.json" },
                  "appconfig.json",
                ),
              ),
              s.createElement(
                "div",
                { className: "Label" },
                s.createElement(
                  "a",
                  {
                    target: "_blank",
                    href: "/config/lighthouse/lighthousedb.json",
                  },
                  "lighthouse/lighthousedb.json",
                ),
              ),
            );
          }
        };
        var O;
        (f = (0, o.Cg)([l.PA], f)),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.RoomOverview = 1)] = "RoomOverview"),
              (e[(e.Console = 2)] = "Console"),
              (e[(e.Files = 3)] = "Files");
          })(O || (O = {}));
        let R = class extends s.Component {
          constructor(e) {
            super(e), (this.state = { eState: O.Console }), C.Init();
          }
          render() {
            return s.createElement(
              "div",
              { className: "FlexColumn" },
              s.createElement(
                "div",
                { className: "FlexFullWidthRowCentered DevHeader" },
                s.createElement(
                  "div",
                  {
                    onClick: () => {
                      this.setState({ eState: O.Console });
                    },
                    className: "ButtonControl",
                  },
                  (0, c.we)("#VRMonitor_DevNav_Console"),
                ),
                s.createElement(
                  "div",
                  {
                    onClick: () => {
                      this.setState({ eState: O.RoomOverview });
                    },
                    className: "ButtonControl",
                  },
                  (0, c.we)("#VRMonitor_DevNav_RoomOverview"),
                ),
                s.createElement(
                  "div",
                  {
                    onClick: () => {
                      this.setState({ eState: O.Files });
                    },
                    className: "ButtonControl",
                  },
                  (0, c.we)("#VRMonitor_DevNav_Files"),
                ),
              ),
              this.state.eState == O.Console &&
                s.createElement(_, { messages: C.vecMessages }),
              this.state.eState == O.RoomOverview && s.createElement(S, null),
              this.state.eState == O.Files && s.createElement(f, null),
            );
          }
        };
        R = (0, o.Cg)([l.PA], R);
        var w = n(9118);
        let k = class extends s.Component {
          render() {
            let e =
                null == this.props.bShowBackButton ||
                this.props.bShowBackButton,
              t = null != this.props.fnOpenOptionsModal,
              n = "PageTitleLabel";
            return (
              this.props.strSubTitle || (n += " SingleTitle"),
              s.createElement(
                "div",
                {
                  className:
                    "PageTitleBar" + (w.W.IsSteamAvailable ? "" : " NoSteam"),
                },
                s.createElement(
                  "div",
                  { className: "FlexFullWidthRowCentered TitleBarMainRow" },
                  s.createElement(
                    "div",
                    { className: "TitleBarSection" },
                    e &&
                      s.createElement(
                        "div",
                        {
                          className:
                            "ButtonControl FlexRow PageTitleButton PageTitleBackButton AllCaps",
                          onClick: () => {
                            this.props.fnOnClick();
                          },
                        },
                        s.createElement("img", {
                          className: "ActionButtonImage",
                          src: "images/bindingui/icon_back.svg",
                        }),
                        (0, c.we)("#Button_Back"),
                      ),
                  ),
                  s.createElement(
                    "div",
                    {
                      className: "AllCaps PageTitle TitleBarSection FlexColumn",
                    },
                    s.createElement(
                      "div",
                      { className: n },
                      this.props.strTitle,
                    ),
                    this.props.strSubTitle &&
                      s.createElement(
                        "div",
                        { className: "AllCaps PageSubTitle PageTitleLabel" },
                        this.props.strSubTitle,
                      ),
                  ),
                  t &&
                    s.createElement(
                      "div",
                      { className: "TitleBarSection" },
                      s.createElement(
                        u.Ay,
                        {
                          content: (0, c.we)(
                            "#BindingUI_OptionsButton_tooltip",
                          ),
                          theme: "ControllerBindingToolTip",
                        },
                        s.createElement(
                          "div",
                          {
                            className:
                              "ButtonControl FlexRow OptionsButton PageTitleButton AllCaps",
                            onClick: this.props.fnOpenOptionsModal,
                          },
                          (0, c.we)("#BindingUI_OptionsButton"),
                        ),
                      ),
                    ),
                ),
                !w.W.IsSteamAvailable &&
                  s.createElement(
                    "div",
                    { className: "NoSteamWarning" },
                    (0, c.we)("#NoSteamWarning"),
                  ),
              )
            );
          }
        };
        k = (0, o.Cg)([l.PA], k);
        var T,
          N = n(1333);
        !(function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Overview = 1)] = "Overview"),
            (e[(e.Settings = 2)] = "Settings"),
            (e[(e.Help = 3)] = "Help"),
            (e[(e.Developer = 4)] = "Developer");
        })(T || (T = {}));
        let M = class extends s.Component {
          constructor(e) {
            super(e);
            let t = T.Overview;
            switch ((0, i.e6)("page")) {
              case "developer":
                t = T.Developer;
                break;
              case "settings":
                t = T.Settings;
                break;
              case "help":
                t = T.Help;
            }
            (this.state = { eState: t }), m.X.Init(), N.HR.Init(!1);
          }
          render() {
            if (!m.X.connected)
              return s.createElement(
                "div",
                { className: "FlexColumn FullPage" },
                s.createElement(
                  "div",
                  { className: "Label" },
                  "Under development",
                ),
              );
            let e = (0, c.we)("#VRMonitor_Nav_Overview");
            return (
              this.state.eState == T.Settings
                ? (e = (0, c.we)("#VRMonitor_Nav_Settings"))
                : this.state.eState == T.Help
                  ? (e = (0, c.we)("#VRMonitor_Nav_Help"))
                  : this.state.eState == T.Developer &&
                    (e = (0, c.we)("#VRMonitor_Nav_Developer")),
              s.createElement(
                "div",
                { className: "FullWidth" },
                s.createElement(k, {
                  bShowBackButton: this.state.eState != T.Overview,
                  fnOnClick: () => {
                    this.setState({ eState: T.Overview });
                  },
                  strTitle: e,
                  strSubTitle: "",
                }),
                this.state.eState == T.Overview &&
                  s.createElement(
                    "div",
                    { className: "FlexFullWidthRowCentered" },
                    s.createElement(
                      "div",
                      {
                        onClick: () => {
                          this.setState({ eState: T.Overview });
                        },
                        className: "ButtonControl",
                      },
                      (0, c.we)("#VRMonitor_Nav_Overview"),
                    ),
                    s.createElement(
                      "div",
                      {
                        onClick: () => {
                          this.setState({ eState: T.Settings });
                        },
                        className: "ButtonControl",
                      },
                      (0, c.we)("#VRMonitor_Nav_Settings"),
                    ),
                    s.createElement(
                      "div",
                      {
                        onClick: () => {
                          this.setState({ eState: T.Help });
                        },
                        className: "ButtonControl",
                      },
                      (0, c.we)("#VRMonitor_Nav_Help"),
                    ),
                    s.createElement(
                      "div",
                      {
                        onClick: () => {
                          this.setState({ eState: T.Developer });
                        },
                        className: "ButtonControl",
                      },
                      (0, c.we)("#VRMonitor_Nav_Developer"),
                    ),
                  ),
                this.state.eState == T.Overview && s.createElement(v, null),
                this.state.eState == T.Settings &&
                  s.createElement("h1", null, "TODO"),
                this.state.eState == T.Developer && s.createElement(R, null),
              )
            );
          }
        };
        M = (0, o.Cg)([l.PA], M);
        const y = document.getElementById("root");
        (0, r.R$)() == r.OH.Overlay && y.classList.add("VROverlay"),
          (0, c.uV)(
            ["vrmonitor"],
            null === r.Ay || void 0 === r.Ay ? void 0 : r.Ay.GetSteamLanguage(),
          )
            .then(() => {
              var e;
              (e = M), a.H(y).render(s.createElement(e, null));
            })
            .catch((e) => console.log("FAILED TO INITIALIZE VRMonitor", e));
      },
    },
    n = {};
  function o(e) {
    var s = n[e];
    if (void 0 !== s) return s.exports;
    var a = (n[e] = { exports: {} });
    return t[e].call(a.exports, a, a.exports, o), a.exports;
  }
  (o.m = t),
    (e = []),
    (o.O = (t, n, s, a) => {
      if (!n) {
        var l = 1 / 0;
        for (m = 0; m < e.length; m++) {
          for (var [n, s, a] = e[m], i = !0, r = 0; r < n.length; r++)
            (!1 & a || l >= a) && Object.keys(o.O).every((e) => o.O[e](n[r]))
              ? n.splice(r--, 1)
              : ((i = !1), a < l && (l = a));
          if (i) {
            e.splice(m--, 1);
            var c = s();
            void 0 !== c && (t = c);
          }
        }
        return t;
      }
      a = a || 0;
      for (var m = e.length; m > 0 && e[m - 1][2] > a; m--) e[m] = e[m - 1];
      e[m] = [n, s, a];
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
      var e = { 303: 0, 57: 0, 270: 0, 885: 0 };
      o.O.j = (t) => 0 === e[t];
      var t = (t, n) => {
          var s,
            a,
            [l, i, r] = n,
            c = 0;
          if (l.some((t) => 0 !== e[t])) {
            for (s in i) o.o(i, s) && (o.m[s] = i[s]);
            if (r) var m = r(o);
          }
          for (t && t(n); c < l.length; c++)
            (a = l[c]), o.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
          return o.O(m);
        },
        n = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var s = o.O(
    void 0,
    [498, 299, 804, 465, 270, 582, 510, 844, 723, 177, 496, 885],
    () => o(157),
  );
  s = o.O(s);
})(); //# sourceMappingURL=file:///c:/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/vrmonitor.js.map
