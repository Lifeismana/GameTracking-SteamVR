var CLSTAMP = "10770080";
(() => {
  "use strict";
  var e,
    t = {
      6090: (e, t, n) => {
        n.d(t, {
          $: () => I.$,
          $Z: () => I.$Z,
          Ay: () => P,
          CU: () => a.CU,
          Ci: () => y.C,
          Do: () => I.Do,
          Ee: () => I.Ee,
          Em: () => d.Em,
          Fb: () => a.Fb,
          Fi: () => h.Fi,
          Fz: () => I.Fz,
          GM: () => m.GM,
          GQ: () => D.GQ,
          GS: () => r.GS,
          Gz: () => D.Gz,
          HW: () => D.HW,
          I0: () => r.I0,
          IS: () => s.I,
          JZ: () => a.JZ,
          Jv: () => r.Jv,
          KI: () => I.KI,
          Kl: () => D.Kl,
          Ld: () => a.Ld,
          M9: () => r.M9,
          MQ: () => h.MQ,
          MV: () => D.MV,
          N: () => o.e,
          N1: () => p.N,
          NH: () => a.NH,
          O5: () => c.O,
          O6: () => a.O6,
          OH: () => D.OH,
          Oi: () => h.Oi,
          QB: () => a.QB,
          QR: () => I.QR,
          R$: () => D.R$,
          Se: () => a.Se,
          Uj: () => a.Uj,
          Vh: () => g.Vh,
          Wi: () => m.Wi,
          Wq: () => r.Wq,
          Xl: () => D.Xl,
          Xu: () => r.Xu,
          Y4: () => l.Y,
          YV: () => I.YV,
          Yu: () => I.Yu,
          ZP: () => I.ZP,
          Zk: () => h.Zk,
          _1: () => D._1,
          _8: () => I._8,
          _h: () => h._h,
          _n: () => r._n,
          aX: () => g.aX,
          b: () => D.b,
          b$: () => R.b,
          b4: () => _.b,
          cB: () => S.L,
          dL: () => u.d,
          ds: () => I.ds,
          e_: () => a.e_,
          en: () => I.en,
          eo: () => I.eo,
          f9: () => I.f9,
          fD: () => I.fD,
          fk: () => I.fk,
          gN: () => D.gN,
          k2: () => D.k2,
          kG: () => D.kG,
          ku: () => D.ku,
          lq: () => v.l,
          m$: () => _.m,
          mH: () => g.mH,
          mX: () => r.mX,
          mu: () => D.mu,
          nX: () => d.nX,
          ne: () => D.ne,
          nq: () => O.n,
          o3: () => h.o3,
          oN: () => a.oN,
          pM: () => D.pM,
          pg: () => r.pg,
          q5: () => a.q5,
          qF: () => a.qF,
          rF: () => s.H,
          rx: () => D.rx,
          sJ: () => f.$,
          sn: () => r.sn,
          t$: () => C.t,
          tx: () => a.tx,
          uC: () => b.u,
          uS: () => i.u,
          vx: () => a.vx,
          xO: () => h.xO,
          yW: () => I.yW,
        });
        var r = n(2824),
          a = n(6292),
          i = n(119),
          o = (n(4120), n(1230)),
          l = n(5830),
          s = n(6186),
          u = n(3361),
          d = (n(111), n(5723)),
          m = n(3496),
          c = n(5178),
          g = (n(428), n(9011), n(7350)),
          v = n(6847),
          p = n(5227),
          y = (n(10), n(1808)),
          h = n(7019),
          _ = (n(1988), n(2527), n(9864)),
          f = (n(4189), n(322), n(1977), n(6417)),
          O = n(2303),
          S = n(8715),
          R = (n(4397), n(5459)),
          b = n(8472),
          C = (n(1184), n(1321)),
          D = n(3725),
          I = n(4367);
        const P = VRHTML;
      },
      3725: (e, t, n) => {
        var r, a, i, o;
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
          GQ: () => M,
          Gz: () => u,
          HW: () => y,
          Kl: () => O,
          MV: () => i,
          OH: () => r,
          R$: () => l,
          Xl: () => _,
          _1: () => P,
          _E: () => s,
          b: () => f,
          gN: () => S,
          k2: () => C,
          kG: () => R,
          ku: () => c,
          mu: () => o,
          ne: () => d,
          pM: () => a,
          rx: () => D,
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
          })(a || (a = {})),
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
          })(o || (o = {}));
        let s = 0,
          u = 0,
          d = 4294967295;
        var m, c, g, v, p, y, h, _, f, O, S, R, b, C, D, I, P, k, M;
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
        })(m || (m = {})),
          (function (e) {
            (e[(e.Activated = 0)] = "Activated"),
              (e[(e.Deactivated = 1)] = "Deactivated");
          })(c || (c = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"), (e[(e.Mouse = 1)] = "Mouse");
          })(g || (g = {})),
          (function (e) {
            (e[(e.Invalid = 0)] = "Invalid"),
              (e[(e.HMD = 1)] = "HMD"),
              (e[(e.Controller = 2)] = "Controller"),
              (e[(e.GenericTracker = 3)] = "GenericTracker"),
              (e[(e.TrackingReference = 4)] = "TrackingReference"),
              (e[(e.DisplayRedirect = 5)] = "DisplayRedirect");
          })(v || (v = {})),
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
          })(y || (y = {})),
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
          })(h || (h = {})),
          (function (e) {
            (e[(e.Normal = 0)] = "Normal"),
              (e[(e.Password = 1)] = "Password"),
              (e[(e.Submit = 2)] = "Submit");
          })(_ || (_ = {})),
          (function (e) {
            (e[(e.SingleLine = 0)] = "SingleLine"),
              (e[(e.MultipleLines = 1)] = "MultipleLines");
          })(f || (f = {})),
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
          })(O || (O = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.ThisSteamVR = 1)] = "ThisSteamVR"),
              (e[(e.AnotherSteamVR = 2)] = "AnotherSteamVR"),
              (e[(e.AnotherRuntime = 3)] = "AnotherRuntime"),
              (e[(e.ThisSteamVR64BitOnly = 4)] = "ThisSteamVR64BitOnly"),
              (e[(e.Error = -1)] = "Error");
          })(S || (S = {})),
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
          })(R || (R = {})),
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
          })(C || (C = {})),
          (function (e) {
            (e[(e.Unavailable = 0)] = "Unavailable"),
              (e[(e.Active = 1)] = "Active"),
              (e[(e.Off = 2)] = "Off");
          })(D || (D = {})),
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
          })(P || (P = {})),
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
          })(k || (k = {})),
          (function (e) {
            (e[(e.Small = 0)] = "Small"),
              (e[(e.Medium = 1)] = "Medium"),
              (e[(e.Large = 2)] = "Large"),
              (e[(e.Gigantic = 3)] = "Gigantic"),
              (e[(e.Standing = 4)] = "Standing");
          })(M || (M = {}));
      },
      9383: (e, t, n) => {
        n.d(t, {
          CL: () => R,
          JP: () => r,
          JQ: () => S,
          P9: () => O,
          gU: () => b,
          sj: () => f,
        });
        var r,
          a = n(1635),
          i = n(7813),
          o = n(296),
          l = n(6090),
          s = n(6540),
          u = n(3606),
          d = n(921),
          m = n(7727),
          c = n(3779),
          g = n(1651),
          v = n(9961),
          p = n(776),
          y = n(4007),
          h = n(2741),
          _ = n(1391);
        !(function (e) {
          (e[(e.Alive = 0)] = "Alive"), (e[(e.Destroyed = 1)] = "Destroyed");
        })(r || (r = {}));
        class f {
          get OnDestroyed() {
            return this.m_OnDestroyed;
          }
          get frame() {
            return this.m_Frame;
          }
          get pageID() {
            return this.m_unPageID;
          }
          get state() {
            return this.m_eState;
          }
          get summonOverlayKey() {
            return this.m_sSummonOverlayKey;
          }
          get isExternalDashboardOverlay() {
            return !!this.m_bExternalDashboardOverlay;
          }
          get isActivePage() {
            return this.m_Frame.activePageID === this.m_unPageID;
          }
          get isActiveAndVisiblePage() {
            return this.isActivePage && this.frame.isCurrentlyVisible;
          }
          get mountableID() {
            return `frame:${this.frame.frameID}:page:${this.pageID}:mountable`;
          }
          get latestContentSize() {
            return this.size.latestContentSize;
          }
          get logPrefix() {
            let e = this.frame.title;
            return (
              e.length > h.kr && (e = e.substring(0, h.kr - 3) + "..."),
              `${this.frame.frameID}[${this.pageID}] "${e}"`
            );
          }
          RegisterComponent(e) {
            this.m_setComponents.add(e);
          }
          constructor(e, t, n) {
            (this.props = void 0),
              (this.m_eState = r.Alive),
              (this.m_OnDestroyed = new g.l()),
              (this.m_sSummonOverlayKey = void 0),
              (this.m_bExternalDashboardOverlay = !1),
              (this.m_mainPanel = void 0),
              (this.Log = new p.wd("Frame", () => this.logPrefix)),
              (this.m_setComponents = new Set()),
              (this.keyboard = new c.Y(this)),
              (this.sharing = void 0),
              (this.size = new v.wP(this)),
              (this.focus = new _.v(this)),
              (this.m_Frame = e),
              (this.m_unPageID = t),
              (this.props = n),
              (0, i.makeObservable)(this);
          }
          Init() {
            for (const e of this.m_setComponents) e.Init();
          }
          DestroyPage() {
            this.m_eState != r.Destroyed &&
              ((this.m_eState = r.Destroyed),
              this.m_OnDestroyed.Dispatch(),
              this.m_OnDestroyed.ClearAllCallbacks());
          }
          SetSummonOverlayKey(e) {
            this.m_sSummonOverlayKey = e;
          }
          SetIsExternalDashboardOverlay(e) {
            this.m_bExternalDashboardOverlay = e;
          }
          SetMainPanel(e) {
            if (!e) return { Unset: () => {} };
            this.m_mainPanel = e;
            const t = this.size.SetMainPanel(e).Unset;
            return {
              Unset: () => {
                (this.m_mainPanel = void 0), t();
              },
            };
          }
          get mainPanelID() {
            if (this.m_mainPanel) {
              const e = this.m_mainPanel.getID();
              if (null == e) return;
              return (0, l.nX)(u.C6, e);
            }
            if (this.isExternalDashboardOverlay) {
              if (null == this.summonOverlayKey) return;
              return (0, l.nX)(u.cb, this.summonOverlayKey) + "_Panel";
            }
          }
          get mainPanelSGID() {
            var e;
            return this.m_mainPanel
              ? this.m_mainPanel.getSGID()
              : (this.isExternalDashboardOverlay &&
                  null != this.summonOverlayKey &&
                  (null === (e = y.Q.GetOverlayInfo(this.summonOverlayKey)) ||
                  void 0 === e
                    ? void 0
                    : e.unStandalonePanelSGID)) ||
                  void 0;
          }
          GetPanelAnchorID(e) {
            if (!this.isExternalDashboardOverlay)
              return `frame:${this.frame.frameID}:page:${this.pageID}:anchor:${e}`;
            {
              if (null == this.summonOverlayKey) return;
              const t = (0, l.nX)(u.cb, this.summonOverlayKey);
              switch (e) {
                case l.Oi.TopCenter:
                  return t + "_TopCenter";
                case l.Oi.CenterLeft:
                  return t + "_CenterLeft";
                case l.Oi.CenterRight:
                  return t + "_CenterRight";
                case l.Oi.BottomCenter:
                  return t + "_BottomCenter";
                case l.Oi.BottomRight:
                  return t + "_BottomRight";
              }
            }
          }
        }
        (0, a.Cg)([i.observable], f.prototype, "props", void 0),
          (0, a.Cg)([i.observable], f.prototype, "m_eState", void 0),
          (0, a.Cg)([i.observable], f.prototype, "m_sSummonOverlayKey", void 0),
          (0, a.Cg)(
            [i.observable],
            f.prototype,
            "m_bExternalDashboardOverlay",
            void 0,
          ),
          (0, a.Cg)([i.observable], f.prototype, "m_mainPanel", void 0),
          (0, a.Cg)([i.computed], f.prototype, "state", null),
          (0, a.Cg)([i.computed], f.prototype, "summonOverlayKey", null),
          (0, a.Cg)(
            [i.computed],
            f.prototype,
            "isExternalDashboardOverlay",
            null,
          ),
          (0, a.Cg)([i.computed], f.prototype, "isActivePage", null),
          (0, a.Cg)([i.computed], f.prototype, "isActiveAndVisiblePage", null),
          (0, a.Cg)([i.computed], f.prototype, "mountableID", null),
          (0, a.Cg)([i.computed], f.prototype, "latestContentSize", null),
          (0, a.Cg)([i.computed], f.prototype, "logPrefix", null),
          (0, a.Cg)([i.action], f.prototype, "DestroyPage", null),
          (0, a.Cg)([i.action], f.prototype, "SetSummonOverlayKey", null),
          (0, a.Cg)(
            [i.action],
            f.prototype,
            "SetIsExternalDashboardOverlay",
            null,
          ),
          (0, a.Cg)([i.action], f.prototype, "SetMainPanel", null),
          (0, a.Cg)([i.computed], f.prototype, "mainPanelID", null),
          (0, a.Cg)([i.computed], f.prototype, "mainPanelSGID", null);
        const O = s.forwardRef(function (e, t) {
            const { children: n, summonOverlayKey: r } = e,
              { frame: a } = (0, m.N)(),
              u = s.useMemo(() => a.CreatePage(e), [a]);
            s.useLayoutEffect(() =>
              (0, i.runInAction)(() => {
                u.props = e;
              }),
            ),
              s.useEffect(() => u.SetSummonOverlayKey(r), [u, a, r]),
              (0, d.D5)(t, u),
              s.useEffect(() => (u.Init(), () => u.DestroyPage()), [u]);
            const c = (0, o.q3)(() => u.mountableID);
            return s.createElement(
              m.t.Provider,
              { value: { frame: a, page: u } },
              s.createElement(l.IS, { id: c }, n),
            );
          }),
          S = s.forwardRef(function (e, t) {
            var n, r;
            const {
                requireExternalOverlay: i = !0,
                overlayKey: c,
                componentProps: g,
              } = e,
              v = (0, a.Tt)(e, [
                "requireExternalOverlay",
                "overlayKey",
                "componentProps",
              ]),
              { frame: p } = (0, m.N)(),
              h = s.useCallback(
                (e) => {
                  null == e || e.SetIsExternalDashboardOverlay(!0),
                    (0, d.cZ)(t, e);
                },
                [t],
              ),
              _ = (0, o.q3)(() => p.curvature.curvatureTransformOriginID),
              f = (0, o.q3)(() => y.Q.GetOverlayInfo(c)),
              S =
                null !== (n = null == f ? void 0 : f.unFlags) && void 0 !== n
                  ? n
                  : 0,
              R = (16 & S) > 0,
              b = (1073741824 & S) > 0;
            return i && !f
              ? null
              : s.createElement(
                  O,
                  Object.assign({}, v, {
                    summonOverlayKey:
                      null !== (r = e.summonOverlayKey) && void 0 !== r ? r : c,
                    ref: h,
                    componentProps: Object.assign(Object.assign({}, g), {
                      keyboard: Object.assign(
                        { overlayKeyForKeyboardInput: c },
                        null == g ? void 0 : g.keyboard,
                      ),
                      focus: Object.assign(
                        {
                          vrClientPID: R ? f.unClientPID : void 0,
                          steamInputAppID: b ? f.unSteamInputAppID : void 0,
                        },
                        null == g ? void 0 : g.focus,
                      ),
                    }),
                  }),
                  s.createElement(l.rF, { mountedId: (0, l.nX)(u.cb, c) }),
                  s.createElement(l.dL, {
                    id: (0, l.nX)(u.cb, c) + "_CurvatureOrigin",
                    parent_id: _,
                  }),
                  v.children,
                );
          });
        function R(e) {
          const { page: t } = (0, m.N)();
          if ((0, o.q3)(() => (null == t ? void 0 : t.isActiveAndVisiblePage)))
            return s.createElement(s.Fragment, null, e.children);
        }
        function b(e) {
          const { frame: t, page: n } = (0, m.N)();
          if (t && n && !n.isExternalDashboardOverlay)
            return s.createElement(
              s.Fragment,
              null,
              h.i_.map((e) =>
                s.createElement(l.Ci, {
                  key: e,
                  id: n.GetPanelAnchorID(e),
                  location: e,
                }),
              ),
            );
        }
      },
      292: (e, t, n) => {
        var r = n(1635),
          a = n(6540),
          i = n(5338),
          o = n(6090),
          l = n(3714),
          s = n(1333),
          u = n(9118),
          d = n(1532),
          m = n(5802),
          c = n(6646),
          g = n(6663),
          v = n(1835),
          p = n(4007),
          y = n(7813),
          h = n(9125),
          _ = n(6379),
          f = n(9926),
          O = n(8803);
        (0, y.configure)({ enforceActions: "never" }),
          (function () {
            (0, r.sH)(this, void 0, void 0, function* () {
              try {
                yield Promise.all([
                  (0, l.uV)(
                    ["vrmonitor", "bindingui"],
                    null === o.Ay || void 0 === o.Ay
                      ? void 0
                      : o.Ay.GetSteamLanguage(),
                  ),
                  s.HR.Init(!0),
                  u.W.Init(!0),
                  m.B$.Init(),
                  d.s.Init(),
                  c.X.Init(),
                ]),
                  yield Promise.all([
                    O.m0.Init(!1),
                    p.Q.Init(),
                    v.SW.Init(),
                    _.c.Init(),
                  ]),
                  yield Promise.all([f.Mg.Init(!1)]);
              } catch (e) {
                console.error("Failed to initialize desktop settings:", e);
              }
              (0, h.aj)().Init("SteamVR", CLSTAMP, (0, h.d4)()),
                (document.title = (0, l.we)("#Settings_Header_SteamVR")),
                i
                  .H(document.getElementById("root"))
                  .render(a.createElement(g.z, { env: "desktop-window" }));
            });
          })();
      },
    },
    n = {};
  function r(e) {
    var a = n[e];
    if (void 0 !== a) return a.exports;
    var i = (n[e] = { exports: {} });
    return t[e].call(i.exports, i, i.exports, r), i.exports;
  }
  (r.m = t),
    (e = []),
    (r.O = (t, n, a, i) => {
      if (!n) {
        var o = 1 / 0;
        for (d = 0; d < e.length; d++) {
          for (var [n, a, i] = e[d], l = !0, s = 0; s < n.length; s++)
            (!1 & i || o >= i) && Object.keys(r.O).every((e) => r.O[e](n[s]))
              ? n.splice(s--, 1)
              : ((l = !1), i < o && (o = i));
          if (l) {
            e.splice(d--, 1);
            var u = a();
            void 0 !== u && (t = u);
          }
        }
        return t;
      }
      i = i || 0;
      for (var d = e.length; d > 0 && e[d - 1][2] > i; d--) e[d] = e[d - 1];
      e[d] = [n, a, i];
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
    (r.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e = { 249: 0, 204: 0, 527: 0, 17: 0 };
      r.O.j = (t) => 0 === e[t];
      var t = (t, n) => {
          var a,
            i,
            [o, l, s] = n,
            u = 0;
          if (o.some((t) => 0 !== e[t])) {
            for (a in l) r.o(l, a) && (r.m[a] = l[a]);
            if (s) var d = s(r);
          }
          for (t && t(n); u < o.length; u++)
            (i = o[u]), r.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
          return r.O(d);
        },
        n = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var a = r.O(
    void 0,
    [967, 991, 260, 305, 527, 170, 452, 797, 906, 554, 17],
    () => r(292),
  );
  a = r.O(a);
})(); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/settings_desktop.js.map
