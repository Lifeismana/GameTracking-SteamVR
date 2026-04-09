var CLSTAMP = "10585170";
(() => {
  "use strict";
  var e,
    t = {
      6090: (e, t, o) => {
        o.d(t, {
          Ay: () => p,
          Ci: () => r.C,
          GM: () => l.GM,
          I0: () => n.I0,
          M9: () => n.M9,
          NH: () => i.NH,
          O6: () => i.O6,
          OH: () => c.OH,
          QB: () => i.QB,
          R$: () => c.R$,
          Rk: () => c.Rk,
          Zk: () => a.Zk,
          _n: () => n._n,
          dL: () => s.d,
          en: () => d.en,
          fD: () => d.fD,
        });
        var n = o(2824),
          i = o(6292),
          s = (o(3389), o(4120), o(1230), o(5830), o(6186), o(3361)),
          l = (o(111), o(5723), o(3496)),
          r =
            (o(5178),
            o(428),
            o(9011),
            o(7350),
            o(6847),
            o(5227),
            o(10),
            o(1808)),
          a = o(7019),
          c =
            (o(1988),
            o(2527),
            o(9864),
            o(4189),
            o(322),
            o(1977),
            o(6417),
            o(2303),
            o(8715),
            o(4397),
            o(5459),
            o(8472),
            o(1184),
            o(3725)),
          d = o(4367);
        const p = VRHTML;
      },
      1808: (e, t, o) => {
        o.d(t, { C: () => r });
        var n = o(1635),
          i = o(3496),
          s = o(7019),
          l = o(3236);
        class r extends i._J {
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
            let o = null;
            "object" == typeof this.props.location
              ? (o = (0, i.PG)(this.props.location, { x: 0, y: 0 }))
              : "number" == typeof this.props.location &&
                (o = (0, s.Lr)(this.props.location));
            let n = this.createSgNode(t);
            if (this.props.latched && null !== this.m_latchedPosition)
              (n.properties["anchor-u"] = this.m_latchedPosition.u),
                (n.properties["anchor-v"] = this.m_latchedPosition.v);
            else if (o) {
              const t = { u: 0.5 * o.x + 0.5, v: -0.5 * o.y + 0.5 },
                i =
                  !e.currentPanel || e.currentPanel.props.overlay_key
                    ? t
                    : e.currentPanel.scaleLocalUVToGlobal(t);
              (n.properties["anchor-u"] = i.u),
                (n.properties["anchor-v"] = i.v);
            } else {
              if (!e.currentPanel)
                return [
                  Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                  null,
                ];
              const o = t.ownerDocument,
                i = t.getBoundingClientRect(),
                s = i.left + i.width / 2,
                l = i.top + i.height / 2,
                r = e.currentPanel.m_Rect;
              if (s < r.x || s > r.x + r.width || l < r.y || l > r.y + r.height)
                return [
                  Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                  null,
                ];
              const a = o.defaultView.innerWidth,
                c = o.defaultView.innerHeight;
              if (!(c > 0 && a > 0))
                return [
                  Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                  null,
                ];
              (n.properties["anchor-u"] = s / a),
                (n.properties["anchor-v"] = l / c);
            }
            return (
              (this.m_latchedPosition = {
                u: n.properties["anchor-u"],
                v: n.properties["anchor-v"],
              }),
              [e, n]
            );
          }
        }
        (0, n.Cg)([l.o], r.prototype, "buildNode", null);
      },
      6292: (e, t, o) => {
        function n(e, t) {
          return { x: e.x - t.x, y: e.y - t.y };
        }
        function i(e, t) {
          return { x: e.x * t, y: e.y * t };
        }
        function s(e, t) {
          return { x: e.x * t, y: e.y * t, z: e.z * t };
        }
        function l(e) {
          return Math.sqrt(e.x * e.x + e.y * e.y);
        }
        function r(e) {
          if (void 0 === e) return;
          let t = 0.5 * e.x,
            o = 0.5 * e.y,
            n = 0.5 * e.z,
            i = Math.cos(t),
            s = Math.cos(o),
            l = Math.cos(n),
            r = Math.sin(t),
            a = Math.sin(o),
            c = Math.sin(n);
          return {
            w: i * s * l + r * a * c,
            x: r * s * l + i * a * c,
            y: i * a * l - r * s * c,
            z: i * s * c - r * a * l,
          };
        }
        o.d(t, {
          Fb: () => r,
          NH: () => l,
          O6: () => i,
          QB: () => n,
          tx: () => s,
        });
      },
      3725: (e, t, o) => {
        var n, i, s, l;
        function r() {
          var e;
          return null !==
            (e =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.Environment()) && void 0 !== e
            ? e
            : n.Unknown;
        }
        o.d(t, { OH: () => n, R$: () => r, Rk: () => p, _E: () => a }),
          (function (e) {
            (e[(e.Desktop = 1)] = "Desktop"),
              (e[(e.Overlay = 2)] = "Overlay"),
              (e[(e.Unknown = 100)] = "Unknown");
          })(n || (n = {})),
          window.hasOwnProperty("VRHTML") || (window.VRHTML = null),
          (function (e) {
            (e[(e.Auto = 0)] = "Auto"),
              (e[(e.Low = 1)] = "Low"),
              (e[(e.Medium = 2)] = "Medium"),
              (e[(e.High = 3)] = "High");
          })(i || (i = {})),
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
          })(l || (l = {}));
        let a = 0;
        var c, d, p, h, u, m, g, S, _, C, y, f, b, v, A, I, B, w, O, E, M;
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
        })(c || (c = {})),
          (function (e) {
            (e[(e.Activated = 0)] = "Activated"),
              (e[(e.Deactivated = 1)] = "Deactivated");
          })(d || (d = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"), (e[(e.Mouse = 1)] = "Mouse");
          })(p || (p = {})),
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
          })(u || (u = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.Starting = 1)] = "Starting"),
              (e[(e.Quitting = 2)] = "Quitting"),
              (e[(e.Running = 3)] = "Running"),
              (e[(e.Waiting = 4)] = "Waiting");
          })(m || (m = {})),
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
          })(g || (g = {})),
          (function (e) {
            (e[(e.Normal = 0)] = "Normal"),
              (e[(e.Password = 1)] = "Password"),
              (e[(e.Submit = 2)] = "Submit");
          })(S || (S = {})),
          (function (e) {
            (e[(e.SingleLine = 0)] = "SingleLine"),
              (e[(e.MultipleLines = 1)] = "MultipleLines");
          })(_ || (_ = {})),
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
          })(y || (y = {})),
          (function (e) {
            (e[(e.ECameraExposure_Unknown = 0)] = "ECameraExposure_Unknown"),
              (e[(e.ECameraExposure_Nominal = 1)] = "ECameraExposure_Nominal"),
              (e[(e.ECameraExposure_HighExposure = 2)] =
                "ECameraExposure_HighExposure");
          })(f || (f = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.ThisSteamVR = 1)] = "ThisSteamVR"),
              (e[(e.AnotherSteamVR = 2)] = "AnotherSteamVR"),
              (e[(e.AnotherRuntime = 3)] = "AnotherRuntime"),
              (e[(e.Error = -1)] = "Error");
          })(b || (b = {})),
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
          })(v || (v = {})),
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
          })(A || (A = {})),
          (function (e) {
            e[(e.Hostname = 0)] = "Hostname";
          })(I || (I = {})),
          (function (e) {
            (e[(e.Unavailable = 0)] = "Unavailable"),
              (e[(e.Active = 1)] = "Active"),
              (e[(e.Off = 2)] = "Off");
          })(B || (B = {})),
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
          })(O || (O = {})),
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
          })(E || (E = {})),
          (function (e) {
            (e[(e.Small = 0)] = "Small"),
              (e[(e.Medium = 1)] = "Medium"),
              (e[(e.Large = 2)] = "Large"),
              (e[(e.Gigantic = 3)] = "Gigantic"),
              (e[(e.Standing = 4)] = "Standing");
          })(M || (M = {}));
      },
      6731: (e, t, o) => {
        o.d(t, { wM: () => h });
        var n,
          i = o(1635),
          s = o(6540),
          l = o(3236),
          r = o(1139),
          a = o(7813),
          c = o(1370);
        const d = s.createContext(null);
        class p {
          constructor() {
            (this.m_stack = a.observable.array([])),
              (this.m_bSViewtackWasChangedInThisCallStack = !0),
              (this.m_nCallStackClearedTimeout = void 0),
              window.addEventListener("keydown", this.onWindowKeyDown),
              window.addEventListener("click", this.onWindowClick);
          }
          cleanup() {
            window.clearTimeout(this.m_nCallStackClearedTimeout),
              window.removeEventListener("keydown", this.onWindowKeyDown),
              window.removeEventListener("click", this.onWindowClick);
          }
          onWindowKeyDown(e) {
            "Escape" == e.key && this.dismissTopView();
          }
          onWindowClick(e) {
            const t = this.topView;
            t &&
              t.div &&
              !this.m_bSViewtackWasChangedInThisCallStack &&
              (t.shouldDismissOnClickAnywhere ||
                t.shouldDismissOnClickInViewStack) &&
              !t.isPointInDiv(e.clientX, e.clientY) &&
              (t.shouldDismissOnClickAnywhere ||
                t == this.bottomView ||
                t
                  .getViewsBelow()
                  .some((t) => t.isPointInDiv(e.clientX, e.clientY))) &&
              t.dismissView();
          }
          get size() {
            return this.m_stack.length;
          }
          dismissTopView() {
            var e;
            null === (e = this.topView) || void 0 === e || e.dismissView();
          }
          get hasViews() {
            return this.m_stack.length > 0;
          }
          get bottomView() {
            return this.hasViews ? this.m_stack[0] : null;
          }
          get topView() {
            return this.hasViews ? this.m_stack[this.m_stack.length - 1] : null;
          }
          getViewsBelow(e) {
            const t = this.m_stack.indexOf(e);
            return t < 0 ? [] : this.m_stack.slice(0, t);
          }
          getViewsAbove(e) {
            const t = this.m_stack.indexOf(e);
            return t < 0 ? [] : this.m_stack.slice(t + 1);
          }
          getViewLevel(e) {
            return this.m_stack.indexOf(e);
          }
          pushView(e) {
            this.m_stack.push(e), this.setViewJustAddedOrRemoved();
          }
          removeView(e) {
            this.m_stack.splice(this.m_stack.indexOf(e), 1),
              this.setViewJustAddedOrRemoved();
          }
          setViewJustAddedOrRemoved() {
            window.clearTimeout(this.m_nCallStackClearedTimeout),
              (this.m_bSViewtackWasChangedInThisCallStack = !0),
              (this.m_nCallStackClearedTimeout = window.setTimeout(
                () => (this.m_bSViewtackWasChangedInThisCallStack = !1),
                0,
              ));
          }
        }
        (0, i.Cg)([l.o], p.prototype, "cleanup", null),
          (0, i.Cg)([l.o], p.prototype, "onWindowKeyDown", null),
          (0, i.Cg)([l.o], p.prototype, "onWindowClick", null),
          (0, i.Cg)([a.computed], p.prototype, "size", null),
          (0, i.Cg)([a.action.bound], p.prototype, "dismissTopView", null),
          (0, i.Cg)([a.computed], p.prototype, "hasViews", null),
          (0, i.Cg)([a.computed], p.prototype, "bottomView", null),
          (0, i.Cg)([a.computed], p.prototype, "topView", null),
          (0, i.Cg)([a.action], p.prototype, "pushView", null),
          (0, i.Cg)([a.action], p.prototype, "removeView", null);
        let h = (n = class extends s.Component {
          get viewStack() {
            return this.m_ViewStack;
          }
          get isTopView() {
            return this.viewStack.topView == this;
          }
          getViewsBelow() {
            var e, t;
            return null !==
              (t =
                null === (e = this.viewStack) || void 0 === e
                  ? void 0
                  : e.getViewsBelow(this)) && void 0 !== t
              ? t
              : [];
          }
          getViewsAbove() {
            var e, t;
            return null !==
              (t =
                null === (e = this.viewStack) || void 0 === e
                  ? void 0
                  : e.getViewsAbove(this)) && void 0 !== t
              ? t
              : [];
          }
          get viewLevel() {
            var e, t;
            return null !==
              (t =
                null === (e = this.viewStack) || void 0 === e
                  ? void 0
                  : e.getViewLevel(this)) && void 0 !== t
              ? t
              : 0;
          }
          get viewShouldFadeForModal() {
            return this.getViewsAbove().some((e) => e.fadesViewsBelow);
          }
          get shouldDismissOnClickInViewStack() {
            var e;
            return (
              null !== (e = this.props.shouldDismissOnClickInViewStack) &&
              void 0 !== e &&
              e
            );
          }
          get shouldDismissOnClickAnywhere() {
            var e;
            return (
              null !== (e = this.props.shouldDismissOnClickAnywhere) &&
              void 0 !== e &&
              e
            );
          }
          get fadesViewsBelow() {
            return this.m_bFadesViewsBelow;
          }
          dismissView() {
            var e, t;
            null === (t = (e = this.props).onDismissRequested) ||
              void 0 === t ||
              t.call(e);
          }
          get div() {
            return this.m_viewRef.current;
          }
          isPointInDiv(e, t) {
            if (!this.div) return !1;
            const o = this.div.getBoundingClientRect();
            return e >= o.left && e <= o.right && t >= o.top && t <= o.bottom;
          }
          constructor(e) {
            super(e),
              (this.m_viewRef = s.createRef()),
              (this.m_ViewStack = null),
              (this.m_bOwnsViewStack = !1),
              (this.m_bFadesViewsBelow = !1),
              (0, a.makeObservable)(this);
          }
          componentDidMount() {
            (this.m_bFadesViewsBelow = this.props.fadesViewsBelow),
              this.addToViewStack();
          }
          componentWillUnmount() {
            this.removeFromViewStack();
          }
          addToViewStack() {
            this.context
              ? (this.m_ViewStack = this.context)
              : (this.m_ViewStack = new p()),
              this.viewStack.pushView(this);
          }
          removeFromViewStack() {
            this.viewStack.removeView(this),
              this.m_bOwnsViewStack &&
                (this.m_ViewStack.cleanup(),
                (this.m_ViewStack = null),
                (this.m_bOwnsViewStack = !1));
          }
          render() {
            const e = this.props,
              {
                shouldDismissOnClickAnywhere: t,
                shouldDismissOnClickInViewStack: o,
                fadesViewsBelow: l,
                onDismissRequested: a,
              } = e,
              c = (0, i.Tt)(e, [
                "shouldDismissOnClickAnywhere",
                "shouldDismissOnClickInViewStack",
                "fadesViewsBelow",
                "onDismissRequested",
              ]),
              p = s.createElement(
                "div",
                Object.assign({}, c, {
                  className: (0, r.FH)(
                    "View",
                    [n.k_FadedForModalClassName, this.viewShouldFadeForModal],
                    c.className,
                  ),
                  style: Object.assign(Object.assign({}, c.style), {
                    zIndex: 3e3 + this.viewLevel,
                  }),
                  ref: this.m_viewRef,
                }),
                c.children,
              );
            return null === this.context
              ? s.createElement(d.Provider, { value: this.viewStack }, p)
              : p;
          }
        });
        (h.k_FadedForModalClassName = "FadedForModal"),
          (h.contextType = d),
          (0, i.Cg)([a.observable], h.prototype, "m_ViewStack", void 0),
          (0, i.Cg)([a.computed], h.prototype, "isTopView", null),
          (0, i.Cg)([a.computed], h.prototype, "viewLevel", null),
          (0, i.Cg)([a.computed], h.prototype, "viewShouldFadeForModal", null),
          (0, i.Cg)([l.o], h.prototype, "dismissView", null),
          (0, i.Cg)([a.action.bound], h.prototype, "addToViewStack", null),
          (0, i.Cg)([a.action.bound], h.prototype, "removeFromViewStack", null),
          (h = n = (0, i.Cg)([c.PA], h));
        s.forwardRef((e, t) =>
          s.createElement(h, Object.assign({}, e, { ref: t }), e.children),
        );
        let u = class extends s.Component {
          constructor(e) {
            super(e), (this.state = { viewStack: null });
          }
          setFloatingViewStack(e) {
            this.setState({ viewStack: e });
          }
          render() {
            var e, t, o;
            const n =
              null !==
                (o =
                  null ===
                    (t =
                      null === (e = this.state.viewStack) || void 0 === e
                        ? void 0
                        : e.bottomView) || void 0 === t
                    ? void 0
                    : t.viewShouldFadeForModal) &&
              void 0 !== o &&
              o;
            return s.createElement(
              "div",
              Object.assign({}, this.props, {
                className: (0, r.FH)(
                  "View",
                  [h.k_FadedForModalClassName, n],
                  this.props.className,
                ),
              }),
              this.props.children,
            );
          }
        };
        u = (0, i.Cg)([c.PA], u);
      },
      3606: (e, t, o) => {
        o.d(t, { F2: () => n });
        const n = "/settings/steamvr/showAdvancedSettings";
      },
      3714: (e, t, o) => {
        o.d(t, { uV: () => a, we: () => l });
        o(6540);
        var n = o(2505),
          i = o.n(n);
        class s {
          constructor() {
            (this.m_mapTokens = new Map()),
              (this.m_mapFallbackTokens = new Map());
          }
          InitFromObjects(e, t, o, n) {
            this.m_mapTokens.clear();
            let i = [t, e, n, o];
            for (let e in i) {
              let t = i[e];
              for (let e in t) {
                let o = t[e];
                for (let e in o) {
                  let t = e.toLowerCase();
                  this.m_mapTokens.has(t) || this.m_mapTokens.set(t, o[e]);
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
              s.s_Date.toLocaleTimeString(t);
              return t;
            } catch (t) {
              return e;
            }
          }
        }
        function l(e, ...t) {
          let o = r.LocalizeString(e);
          return o
            ? (t.length > 0 &&
                (o = o.replace(/%(\d+)\$s/g, function (e, o) {
                  return void 0 !== t[o - 1] ? String(t[o - 1]) : e;
                })),
              o)
            : e;
        }
        s.s_Date = new Date();
        const r = new s();
        function a(e, t) {
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
                let o = t.split("-");
                if (e.has(t)) return e.get(t);
                if (e.has(o[0])) return e.get(o[0]);
              }
              return "english";
            })());
          let o = [],
            n = (e, t, o) => {
              let n,
                s = Date.now().toString();
              return (
                (n =
                  "drivers" == e
                    ? `/input/localization.json?t=${s}`
                    : "webhelper" == e
                      ? `/dashboard/localization/${e}_${t}.json?t=${s}`
                      : `localization/${e}_${t}.json?t=${s}`),
                i()
                  .get(n)
                  .then((e) => {
                    o(e.data);
                  })
                  .catch(() => {})
              );
            },
            s = [],
            l = [],
            a = [],
            c = [];
          for (let i of e)
            o.push(
              n(i, t, (e) => {
                s.push(e);
              }),
            ),
              "english" != t &&
                o.push(
                  n(i, "english", (e) => {
                    a.push(e);
                  }),
                );
          for (let e of ["webhelper"])
            o.push(
              n(e, t, (e) => {
                l.push(e);
              }),
            ),
              "english" != t &&
                o.push(
                  n(e, "english", (e) => {
                    c.push(e);
                  }),
                );
          return (
            o.push(
              n("drivers", "", (e) => {
                s.push(e);
              }),
            ),
            Promise.all(o).then(() => {
              r.InitFromObjects(s, l, a, c);
            })
          );
        }
        window.LocalizationManager = r;
      },
      6575: (e, t, o) => {
        o.d(t, { b: () => l });
        var n = o(6540),
          i = o(961),
          s = o(1139);
        o(6090);
        class l extends n.Component {
          constructor(e) {
            super(e),
              (this.m_elemPortalContainer = null),
              (this.m_elemPortal = null),
              (this.m_refAnchor = n.createRef()),
              (this.state = { bInDOM: !1 }),
              (this.m_elemPortal = document.createElement("div")),
              this.m_elemPortal.classList.add(l.ELEM_CLASS);
          }
          get anchorElement() {
            return this.m_refAnchor.current;
          }
          get portalContainer() {
            var e;
            return this.m_refAnchor.current
              ? (null === this.m_elemPortalContainer &&
                  (this.m_elemPortalContainer = (0, s.jE)(
                    [
                      "body",
                      "vsg-app",
                      "vsg-mountable",
                      ...(null !== (e = this.props.allowableParentSelectors) &&
                      void 0 !== e
                        ? e
                        : []),
                    ],
                    this.m_refAnchor.current,
                  )),
                this.m_elemPortalContainer)
              : null;
          }
          componentDidMount() {
            this.portalContainer.appendChild(this.m_elemPortal),
              this.setState({ bInDOM: !0 }, this.props.onPortalDidMount);
          }
          componentWillUnmount() {
            this.portalContainer.removeChild(this.m_elemPortal);
          }
          render() {
            if (!this.props.children) return null;
            return (
              delete Object.assign({}, this.props).allowableParentSelectors,
              n.createElement(
                n.Fragment,
                null,
                n.createElement("div", {
                  className: "ParentPortalAnchor",
                  ref: this.m_refAnchor,
                }),
                this.m_elemPortal &&
                  this.state.bInDOM &&
                  this.props.children &&
                  i.createPortal(this.props.children, this.m_elemPortal),
              )
            );
          }
        }
        l.ELEM_CLASS = "v-parent-portal";
        n.Component;
      },
      1139: (e, t, o) => {
        o.d(t, { FH: () => r, aw: () => c, e6: () => l, jE: () => a });
        var n = o(1635),
          i = (o(6540), o(3236)),
          s = o(7813);
        function l(e) {
          let t = window.location.search.substring(1).split("&");
          for (let o = 0; o < t.length; o++) {
            let n = t[o].split("=");
            if (decodeURIComponent(n[0]).toUpperCase() == e.toUpperCase())
              return decodeURIComponent(n[1]);
          }
          return "";
        }
        function r(...e) {
          return e
            .filter((e) => null != e && ("string" == typeof e || e[1]))
            .map((e) => ("string" == typeof e ? e : e[0]))
            .join(" ");
        }
        function a(e, t) {
          let o = t;
          for (; o.parentElement && !e.some((e) => o.matches(e)); )
            o = o.parentElement;
          return o;
        }
        class c {
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
              let o = e.parentElement;
              for (; o; ) {
                const e = o.scrollWidth > o.clientWidth,
                  n = o.scrollHeight > o.clientHeight;
                (e || n) && t.push(o), (o = o.parentElement);
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
        (0, n.Cg)([s.observable], c.prototype, "m_bScrolling", void 0),
          (0, n.Cg)([i.o], c.prototype, "ref", null),
          (0, n.Cg)([s.computed], c.prototype, "isScrolling", null),
          (0, n.Cg)([i.o], c.prototype, "onParentScroll", null),
          (0, n.Cg)([i.o], c.prototype, "onScrollStopTimeout", null);
      },
      2248: (e, t, o) => {
        var n,
          i = o(1635),
          s = o(6540),
          l = o(5338),
          r = o(1370),
          a = o(6725),
          c = o(6090),
          d = o(1139),
          p = o(3714),
          h = o(3236),
          u = o(2505),
          m = o.n(u),
          g = o(7813),
          S = o(9118),
          _ = o(1532),
          C = o(8108);
        !(function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.List = 1)] = "List"),
            (e[(e.ViewBinding = 2)] = "ViewBinding"),
            (e[(e.EditBinding = 3)] = "EditBinding"),
            (e[(e.AppSelect = 4)] = "AppSelect"),
            (e[(e.Debugger = 5)] = "Debugger");
        })(n || (n = {}));
        class y {
          constructor() {
            (this.m_State = n.None),
              (this.m_bLoading = !1),
              (this.m_rBindingList = void 0),
              (this.m_bShowBindingListError = !1),
              (this.m_sBindingListError = void 0),
              (this.m_bCanCloseBindingListError = !0),
              (this.m_timeoutLoading = void 0),
              (this.m_pathUpdateTimer = void 0),
              (this.m_bStandaloneSettingsPage = !1),
              (this.m_bDesktopMode = !1),
              (0, g.makeObservable)(this);
          }
          Init() {
            window.addEventListener("popstate", this.OnPopState),
              history.pushState({ direction: "back" }, "back"),
              history.pushState({ direction: "current" }, "current"),
              history.pushState({ direction: "forward" }, "forward"),
              history.back();
            let e = "bindingui/" + c.OH[(0, c.R$)()];
            (this.m_mailbox = new c._n()),
              this.m_mailbox.Init(e),
              this.m_mailbox.RegisterHandler(
                "show_app_select",
                this.OnShowAppSelect,
              ),
              this.m_mailbox.RegisterHandler(
                "show_app_binding",
                this.OnShowAppBinding,
              ),
              this.m_mailbox.RegisterHandler(
                "show_input_debugger",
                this.OnShowInputDebugger,
              ),
              this.m_mailbox.RegisterHandler(
                "binding_load_failed",
                this.OnBindingLoadFailed,
              ),
              (0, g.autorun)(this.UpdateWindowTitle);
          }
          ShowOverlayInDashboard() {
            null === c.Ay ||
              void 0 === c.Ay ||
              c.Ay.VRClient.ShowDashboardOverlay({
                overlayKey: "system.vrwebhelper.controllerbinding",
                sReason: "cinputui_showoverlayindashboard",
              });
          }
          OnShowAppSelect(e) {
            (this.m_bStandaloneSettingsPage = !1), this.ShowAppSelect();
          }
          OnShowInputDebugger(e) {
            (this.m_bStandaloneSettingsPage = !1), this.ShowDebugger();
          }
          OnShowAppBinding(e) {
            (this.m_bStandaloneSettingsPage = !1),
              (this.Loading = !0),
              _.s.UpdateApplications().then(() => {
                if (
                  ((0, c.R$)() == c.OH.Overlay
                    ? this.ShowOverlayInDashboard()
                    : (0, c.R$)() == c.OH.Desktop && c.Ay.ShowBindingUI(!0),
                  !_.s.GetApp(e.app_key))
                )
                  return (
                    console.log(
                      "Warning: Could not find app key: " +
                        e.app_key +
                        " showing app select.",
                    ),
                    void this.ShowAppSelect()
                  );
                F.SetSelectedApp(e.app_key, !0),
                  F.ReloadCurrentApp().then(() => {
                    if (e.controller_type)
                      return (
                        F.SetSelectedController(e.controller_type, !0),
                        void F.ReloadControllerConfiguration().then(() => {
                          e.action_set && F.SetSelectedActionSet(e.action_set),
                            (this.Loading = !1),
                            this.EditCurrentBinding();
                        })
                      );
                    (this.Loading = !1), this.ShowBindingList();
                  });
              });
          }
          OnBindingLoadFailed(e) {
            console.log(
              "OnBindingLoadFailed: " +
                e.app_key +
                " " +
                e.controller_type +
                " " +
                e.error,
            ),
              _.s.UpdateApplications().then(() => {
                if (!_.s.ShouldShowBindingFailureForApp(e.app_key)) return;
                if (
                  !F.ShouldShowBindingFailureForControllerType(
                    e.controller_type,
                  )
                )
                  return;
                F.RememberFailedLoadUri(e.uri),
                  F.SetSelectedApp(e.app_key),
                  F.SetSelectedController(e.controller_type);
                let t = _.s.GetApp(e.app_key),
                  o = S.W.GetControllerTypeInfo(e.controller_type);
                if (!o) return;
                let n = S.W.LocalizeControllerString(o, e.controller_type);
                this.ShowBindingList(
                  (0, p.we)(
                    e.error,
                    t ? t.name : (0, p.we)("#unknown_application"),
                    n,
                  ),
                ),
                  null === c.Ay || void 0 === c.Ay || c.Ay.ShowBindingUI(!1);
              });
          }
          SetStandaloneSettingsPage(e) {
            this.m_bStandaloneSettingsPage = e;
          }
          SetDesktopMode(e) {
            this.m_bDesktopMode = e;
          }
          get DesktopMode() {
            return this.m_bDesktopMode;
          }
          SetBindingListError(e, t = !0) {
            (this.m_bShowBindingListError = null != e),
              (this.m_sBindingListError = e),
              (this.m_bCanCloseBindingListError = t);
          }
          get ShowBindingListError() {
            return this.m_bShowBindingListError;
          }
          get BindingListError() {
            return this.m_sBindingListError;
          }
          get CanCloseBindingListError() {
            return this.m_bCanCloseBindingListError;
          }
          OnPopState(e) {
            let t = "";
            e.state && e.state.direction && (t = e.state.direction),
              "back" == t
                ? (this.m_bStandaloneSettingsPage &&
                    (this.SetStandaloneSettingsPage(!1),
                    this.ReturnToSettingsUI()),
                  this.GoBackPage(),
                  history.forward())
                : "forward" == t && (history.back(), this.GoForwardPage());
          }
          GoBackPage() {
            switch (this.m_State) {
              default:
              case n.None:
              case n.AppSelect:
                break;
              case n.Debugger:
              case n.List:
                this.ShowAppSelect();
                break;
              case n.EditBinding:
              case n.ViewBinding:
                this.ShowBindingList();
            }
          }
          GoForwardPage() {
            switch (this.m_State) {
              default:
              case n.None:
              case n.AppSelect:
                this.ShowBindingList();
                break;
              case n.List:
                this.CurrentBinding.url == F.LoadedBindingURL
                  ? this.EditCurrentBinding()
                  : this.ViewCurrentBinding();
              case n.EditBinding:
              case n.ViewBinding:
            }
          }
          get GetUIState() {
            return this.m_State;
          }
          get BindingQueryResults() {
            return this.m_rBindingList;
          }
          get Loading() {
            return this.m_bLoading;
          }
          set Loading(e) {
            (this.m_bLoading = e),
              e
                ? (this.m_timeoutLoading && clearTimeout(this.m_timeoutLoading),
                  (this.m_timeoutLoading = window.setTimeout(() => {
                    this.Loading = !1;
                  }, 1e4)))
                : this.m_timeoutLoading && clearTimeout(this.m_timeoutLoading);
          }
          IsSafeToResetControllerType(e, t) {
            return (
              this.m_State == n.AppSelect ||
              this.m_State == n.None ||
              ("TrackedDeviceClass_HMD" == e &&
                "TrackedDeviceClass_Controller" == t)
            );
          }
          EditCurrentBinding() {
            this.m_State = n.EditBinding;
          }
          ViewCurrentBinding() {
            this.m_State = n.ViewBinding;
          }
          ShowBindingList(e = void 0) {
            (this.m_bStandaloneSettingsPage = !1),
              this.SetBindingListError(e),
              (this.m_State = n.List),
              (this.Loading = !1);
          }
          get CurrentBinding() {
            if (this.BindingQueryResults)
              return f.BindingQueryResults.find(
                (e) => e.url == F.SelectedBindingURL,
              );
          }
          ReturnToSettingsUI() {
            this.ShowAppSelect(),
              null === c.Ay ||
                void 0 === c.Ay ||
                c.Ay.ShowSettingsUI((0, c.R$)() == c.OH.Desktop);
          }
          ShowAppSelect() {
            (this.m_bStandaloneSettingsPage = !1),
              (this.Loading = !0),
              _.s
                .UpdateApplications()
                .then(() => {
                  (0, g.runInAction)(() => {
                    (this.Loading = !1), (this.m_State = n.AppSelect);
                  });
                })
                .catch(() => {
                  this.Loading = !1;
                });
          }
          UpdatePathsTimeout() {
            try {
              C.J.UpdatePaths().then(() => {
                this.m_State == n.Debugger
                  ? (this.m_pathUpdateTimer = window.setTimeout(
                      this.UpdatePathsTimeout,
                      500,
                    ))
                  : (this.m_pathUpdateTimer = void 0);
              });
            } catch (e) {
              console.log("Stopping debugger timer because", e);
            }
          }
          ShowDebugger() {
            (this.Loading = !0),
              _.s
                .UpdateApplications()
                .then(() => {
                  this.Loading = !1;
                  let e = _.s.GetApp(F.SelectedApp);
                  e &&
                    e.client_container_handle &&
                    C.J.AddSubscribedContainer(e.client_container_handle),
                    (this.m_State = n.Debugger),
                    (this.m_pathUpdateTimer = window.setTimeout(
                      this.UpdatePathsTimeout,
                      500,
                    )),
                    c.Ay.ShowBindingUI((0, c.R$)() == c.OH.Desktop);
                })
                .catch(() => {
                  this.Loading = !1;
                });
          }
          GetBindingList() {
            return (0, i.sH)(this, void 0, void 0, function* () {
              var e;
              (0, g.runInAction)(() => {
                (this.Loading = !0), (this.m_rBindingList = []);
              });
              try {
                const t = F.SelectedControllerTypeInfo,
                  o = yield F.QueryBindingList(
                    F.SelectedApp,
                    null !== (e = null == t ? void 0 : t.controller_type) &&
                      void 0 !== e
                      ? e
                      : "",
                  );
                o.success &&
                  (0, g.runInAction)(() => {
                    this.m_rBindingList = o.results;
                  });
              } catch (e) {
                this.SetBindingListError(
                  (0, p.we)("#BindingUI_WorkshopBindingLoadFailed"),
                ),
                  console.error("Failed to load workshop bindings " + e);
              } finally {
                this.Loading = !1;
              }
            });
          }
          UpdateWindowTitle() {
            setTimeout(() => {
              switch (this.GetUIState) {
                case n.AppSelect:
                case n.Debugger:
                case n.EditBinding:
                case n.List:
                case n.None:
                case n.ViewBinding:
                  document.title = (0, p.we)(
                    "#BindingUI_WindowTitle_ControllerBinding",
                  );
              }
            }, 0);
          }
        }
        (0, i.Cg)([g.observable], y.prototype, "m_State", void 0),
          (0, i.Cg)([g.observable], y.prototype, "m_bLoading", void 0),
          (0, i.Cg)([g.observable], y.prototype, "m_rBindingList", void 0),
          (0, i.Cg)(
            [g.observable],
            y.prototype,
            "m_bShowBindingListError",
            void 0,
          ),
          (0, i.Cg)([g.observable], y.prototype, "m_sBindingListError", void 0),
          (0, i.Cg)(
            [g.observable],
            y.prototype,
            "m_bCanCloseBindingListError",
            void 0,
          ),
          (0, i.Cg)([g.observable], y.prototype, "m_bDesktopMode", void 0),
          (0, i.Cg)([h.o], y.prototype, "OnShowAppSelect", null),
          (0, i.Cg)([h.o], y.prototype, "OnShowInputDebugger", null),
          (0, i.Cg)([h.o], y.prototype, "OnShowAppBinding", null),
          (0, i.Cg)([h.o], y.prototype, "OnBindingLoadFailed", null),
          (0, i.Cg)([g.computed], y.prototype, "DesktopMode", null),
          (0, i.Cg)([h.o], y.prototype, "SetBindingListError", null),
          (0, i.Cg)([g.computed], y.prototype, "ShowBindingListError", null),
          (0, i.Cg)([g.computed], y.prototype, "BindingListError", null),
          (0, i.Cg)(
            [g.computed],
            y.prototype,
            "CanCloseBindingListError",
            null,
          ),
          (0, i.Cg)([h.o], y.prototype, "OnPopState", null),
          (0, i.Cg)([h.o], y.prototype, "GoBackPage", null),
          (0, i.Cg)([h.o], y.prototype, "GoForwardPage", null),
          (0, i.Cg)([g.computed], y.prototype, "GetUIState", null),
          (0, i.Cg)([g.computed], y.prototype, "BindingQueryResults", null),
          (0, i.Cg)([g.computed], y.prototype, "Loading", null),
          (0, i.Cg)([h.o], y.prototype, "IsSafeToResetControllerType", null),
          (0, i.Cg)([g.action.bound], y.prototype, "EditCurrentBinding", null),
          (0, i.Cg)([h.o], y.prototype, "ViewCurrentBinding", null),
          (0, i.Cg)([h.o], y.prototype, "ShowBindingList", null),
          (0, i.Cg)([g.computed], y.prototype, "CurrentBinding", null),
          (0, i.Cg)([h.o], y.prototype, "ReturnToSettingsUI", null),
          (0, i.Cg)([h.o], y.prototype, "ShowAppSelect", null),
          (0, i.Cg)([h.o], y.prototype, "UpdatePathsTimeout", null),
          (0, i.Cg)([h.o], y.prototype, "ShowDebugger", null),
          (0, i.Cg)([h.o], y.prototype, "GetBindingList", null),
          (0, i.Cg)([h.o], y.prototype, "UpdateWindowTitle", null);
        const f = new y();
        window.inputUI = f;
        var b,
          v = o(3804);
        class A {
          constructor() {
            (this.path = void 0),
              (this.mode = void 0),
              (this.parameters = new Map()),
              (this.inputs = new Map()),
              (0, g.makeObservable)(this);
          }
        }
        (0, i.Cg)([g.observable], A.prototype, "path", void 0),
          (0, i.Cg)([g.observable], A.prototype, "mode", void 0),
          (0, i.Cg)([g.observable], A.prototype, "parameters", void 0),
          (0, i.Cg)([g.observable], A.prototype, "inputs", void 0);
        class I {
          constructor() {
            (this.path = void 0),
              (this.output = void 0),
              (0, g.makeObservable)(this);
          }
        }
        (0, i.Cg)([g.observable], I.prototype, "path", void 0),
          (0, i.Cg)([g.observable], I.prototype, "output", void 0),
          (0, i.Cg)([g.observable], I.prototype, "parameters", void 0);
        class B {
          constructor() {
            (this.path = void 0),
              (this.output = void 0),
              (0, g.makeObservable)(this);
          }
        }
        (0, i.Cg)([g.observable], B.prototype, "path", void 0),
          (0, i.Cg)([g.observable], B.prototype, "output", void 0);
        class w {
          constructor() {
            (this.path = void 0),
              (this.output = void 0),
              (0, g.makeObservable)(this);
          }
        }
        (0, i.Cg)([g.observable], w.prototype, "path", void 0),
          (0, i.Cg)([g.observable], w.prototype, "output", void 0),
          (0, i.Cg)([g.observable], w.prototype, "parameters", void 0);
        class O {
          constructor() {
            (this.output = void 0),
              (this.inputs = new Array()),
              (0, g.makeObservable)(this);
          }
        }
        (0, i.Cg)([g.observable], O.prototype, "output", void 0),
          (0, i.Cg)([g.observable], O.prototype, "inputs", void 0);
        class E {
          constructor() {
            (this.chords = void 0),
              (this.poses = void 0),
              (this.haptics = void 0),
              (this.sources = void 0),
              (this.skeleton = void 0),
              (0, g.makeObservable)(this);
          }
        }
        (0, i.Cg)([g.observable], E.prototype, "chords", void 0),
          (0, i.Cg)([g.observable], E.prototype, "poses", void 0),
          (0, i.Cg)([g.observable], E.prototype, "haptics", void 0),
          (0, i.Cg)([g.observable], E.prototype, "sources", void 0),
          (0, i.Cg)([g.observable], E.prototype, "skeleton", void 0);
        class M {
          constructor() {
            (this.vecRequired = []), (this.vecSuggested = []);
          }
        }
        class k {
          constructor() {
            (this.device_path_string = void 0),
              (this.device_path_handle = void 0),
              (this.role = void 0),
              (this.controller_role = void 0),
              (0, g.makeObservable)(this);
          }
        }
        (0, i.Cg)([g.observable], k.prototype, "device_path_string", void 0),
          (0, i.Cg)([g.observable], k.prototype, "device_path_handle", void 0),
          (0, i.Cg)([g.observable], k.prototype, "role", void 0),
          (0, i.Cg)([g.observable], k.prototype, "controller_role", void 0);
        class P {
          constructor() {
            (this.trackers = void 0),
              (this.valid_roles = []),
              (0, g.makeObservable)(this);
          }
        }
        function N(e) {
          return new Promise(function (t, o) {
            m()
              .get("/input/getactions.json?app_key=" + e)
              .then((o) => {
                console.log("Loaded action manifest for ", e), t(o.data);
              })
              .catch((e) => {
                o(e);
              });
          });
        }
        (0, i.Cg)([g.observable], P.prototype, "trackers", void 0),
          (0, i.Cg)([g.observable], P.prototype, "valid_roles", void 0);
        class T {
          constructor(e, t) {
            (this.x = e), (this.y = t), this.toString.bind(this);
          }
          toString() {
            return this.x + "," + this.y;
          }
        }
        class R {
          constructor(e, t, o, n, i) {
            (this.m_BindingUISource = void 0),
              (this.m_ControllerProfile = void 0),
              (this.m_sDeviceInputPath = void 0),
              (this.m_eButtonSide = void 0),
              (this.m_sInputPath = void 0),
              (this.m_sActionSet = void 0),
              (this.m_BindingStoreObserverDisposer = void 0),
              (this.m_iNewSourceEntry = -1),
              (this.m_sDeviceInputPath = e),
              (this.m_ControllerProfile = t),
              (this.m_eButtonSide = o),
              (this.m_sInputPath = n),
              (this.m_sActionSet = i),
              (this.m_BindingStoreObserverDisposer = (0, g.observe)(F, (e) => {
                "m_LoadedBinding" == e.name && this.UpdateBindingSource();
              })),
              this.UpdateBindingSource(),
              F.RegisterBindingWatcher(this.UpdateBindingSource.bind(this)),
              (0, g.makeObservable)(this);
          }
          cancelWatcher() {
            this.m_BindingStoreObserverDisposer(),
              F.UnregisterBindingWatcher(this.UpdateBindingSource);
          }
          UpdateBindingSource() {
            this.m_BindingUISource = F.GetActionBinding(
              this.GetFullInputPath,
              this.m_sActionSet,
            );
          }
          get GetFullInputPath() {
            let e = this.m_sDeviceInputPath + this.m_sInputPath;
            return (e = e.replace(/([^:]\/)\/+/g, "$1")), e;
          }
          GetSVGEndPoint() {
            return new T(
              this.m_ControllerProfile.input_source[this.m_sInputPath]
                .binding_image_point[0],
              this.m_ControllerProfile.input_source[this.m_sInputPath]
                .binding_image_point[1],
            );
          }
          get GetButtonSide() {
            return this.m_eButtonSide;
          }
          get GetNumModes() {
            return this.m_BindingUISource ? this.m_BindingUISource.length : 0;
          }
          GetActionForInputType(e, t) {
            if (
              this.m_BindingUISource &&
              this.m_BindingUISource[e].inputs &&
              this.m_BindingUISource[e].inputs.has(t)
            ) {
              let o = this.m_BindingUISource[e].inputs.get(t).output,
                n = F.GetActionByName(o);
              if (!n) {
                let e = F.GetSimulatedActionByPath(o);
                e && (n = F.CreateActionDefinitionForSimulatedAction(e));
              }
              let i = F.GetAliasInfo(o);
              return (
                n &&
                  i &&
                  i.alias_name &&
                  ((n = Object.assign({}, n)),
                  (n.localized_name = i.alias_name)),
                n
              );
            }
          }
          GetClickAction(e) {
            return this.GetActionForInputType(e, "click");
          }
          GetTouchAction(e) {
            return this.GetActionForInputType(e, "touch");
          }
          GetPositionAction(e) {
            return this.GetActionForInputType(e, "position");
          }
          GetHeldAction(e) {
            return this.GetActionForInputType(e, "held");
          }
          GetLongAction(e) {
            return this.GetActionForInputType(e, "long");
          }
          GetSingleAction(e) {
            return this.GetActionForInputType(e, "single");
          }
          GetDoubleAction(e) {
            return this.GetActionForInputType(e, "double");
          }
          GetNorthAction(e) {
            return this.GetActionForInputType(e, "north");
          }
          GetEastAction(e) {
            return this.GetActionForInputType(e, "east");
          }
          GetSouthAction(e) {
            return this.GetActionForInputType(e, "south");
          }
          GetWestAction(e) {
            return this.GetActionForInputType(e, "west");
          }
          GetCenterAction(e) {
            return this.GetActionForInputType(e, "center");
          }
          GetScrollAction(e) {
            return this.GetActionForInputType(e, "scroll");
          }
          GetPullAction(e) {
            return this.GetActionForInputType(e, "pull");
          }
          GetForceAction(e) {
            return this.GetActionForInputType(e, "force");
          }
          GetConstantAction(e) {
            return this.GetActionForInputType(e, "constant");
          }
          GetGrabAction(e) {
            return this.GetActionForInputType(e, "grab");
          }
          GetValueAction(e) {
            return this.GetActionForInputType(e, "value");
          }
          get GetControllerInputName() {
            return S.W.LocalizeDriverString(
              this.m_ControllerProfile.resource_root,
              this.m_sInputPath,
            );
          }
          get GetModes() {
            return this.m_BindingUISource ? this.m_BindingUISource : [];
          }
          GetMode(e) {
            return this.m_BindingUISource &&
              e >= 0 &&
              e < this.m_BindingUISource.length
              ? this.m_BindingUISource[e].mode
              : "none";
          }
          get GetInputSourceType() {
            return this.m_ControllerProfile.input_source[this.m_sInputPath]
              .type;
          }
          get GetInputSource() {
            return this.m_ControllerProfile.input_source[this.m_sInputPath];
          }
          get GetInputSourceClickSupport() {
            return (
              !(
                this.m_ControllerProfile.input_source[this.m_sInputPath]
                  .force &&
                !this.m_ControllerProfile.input_source[this.m_sInputPath].click
              ) &&
              ("knuckles" != this.m_ControllerProfile.controller_type ||
                "/input/trackpad" != this.m_sInputPath) &&
                !(
                  !this.m_ControllerProfile.input_source[this.m_sInputPath]
                    .click &&
                  !this.m_ControllerProfile.input_source[this.m_sInputPath]
                    .touch
                ) &&
              (this.m_ControllerProfile.input_source[this.m_sInputPath].click ||
                this.m_ControllerProfile.input_source[this.m_sInputPath].touch)
            );
          }
          get GetInputSourceTouchSupport() {
            return (
              !(
                !this.m_ControllerProfile.input_source[this.m_sInputPath]
                  .touch &&
                !this.m_ControllerProfile.input_source[this.m_sInputPath]
                  .proximity
              ) &&
              (this.m_ControllerProfile.input_source[this.m_sInputPath].touch ||
                this.m_ControllerProfile.input_source[this.m_sInputPath]
                  .proximity)
            );
          }
          get GetInputSourceForceSupport() {
            return (
              !!this.m_ControllerProfile.input_source[this.m_sInputPath]
                .force &&
              this.m_ControllerProfile.input_source[this.m_sInputPath].force
            );
          }
          get GetInputSourceDefaultDeadzone() {
            return this.m_ControllerProfile.input_source[this.m_sInputPath]
              .default_dead_zone_pct
              ? this.m_ControllerProfile.input_source[this.m_sInputPath]
                  .default_dead_zone_pct
              : 0;
          }
          SetInputMode(e, t) {
            !this.m_BindingUISource ||
            t < 0 ||
            t >= this.m_BindingUISource.length
              ? console.error("SetInputMode: Invalid mode index for new mode")
              : (this.ClearNewModeIfSet(t),
                F.SetInputModeForInputSource(this.GetFullInputPath, t, e));
          }
          AddInputMode(e) {
            this.m_iNewSourceEntry = F.AddInputModeForSource(
              this.GetFullInputPath,
              e,
            );
          }
          DeleteInputMode(e) {
            !this.m_BindingUISource ||
            e < 0 ||
            e >= this.m_BindingUISource.length
              ? console.error("SetInputMode: Invalid mode index for new mode")
              : F.DeleteInputModeForSource(this.GetFullInputPath, e);
          }
          ClearNewModeIfSet(e) {
            -1 != this.m_iNewSourceEntry &&
              this.m_iNewSourceEntry == e &&
              (this.m_iNewSourceEntry = -1);
          }
          BHasModeSelectionPending(e) {
            return -1 != this.m_iNewSourceEntry && this.m_iNewSourceEntry == e;
          }
          SetClickAction(e, t) {
            F.SetActionForInputModeType(this.GetFullInputPath, e, "click", t, [
              "button",
              "trackpad",
              "joystick",
              "trigger",
              "toggle_button",
              "complex_button",
            ]);
          }
          SetTouchAction(e, t) {
            F.SetActionForInputModeType(this.GetFullInputPath, e, "touch", t, [
              "button",
              "trackpad",
              "joystick",
              "trigger",
              "toggle_button",
              "complex_button",
            ]);
          }
          SetHeldAction(e, t) {
            F.SetActionForInputModeType(this.GetFullInputPath, e, "held", t, [
              "button",
              "complex_button",
            ]);
          }
          SetLongAction(e, t) {
            F.SetActionForInputModeType(this.GetFullInputPath, e, "long", t, [
              "button",
              "complex_button",
            ]);
          }
          SetSingleAction(e, t) {
            F.SetActionForInputModeType(this.GetFullInputPath, e, "single", t, [
              "button",
              "complex_button",
            ]);
          }
          SetDoubleAction(e, t) {
            F.SetActionForInputModeType(this.GetFullInputPath, e, "double", t, [
              "button",
              "complex_button",
            ]);
          }
          SetPositionAction(e, t) {
            F.SetActionForInputModeType(
              this.GetFullInputPath,
              e,
              "position",
              t,
              ["trackpad", "joystick"],
            );
          }
          SetNorthAction(e, t) {
            F.SetActionForInputModeType(this.GetFullInputPath, e, "north", t, [
              "dpad",
              "dpad_click",
              "dpad_touch",
            ]);
          }
          SetEastAction(e, t) {
            F.SetActionForInputModeType(this.GetFullInputPath, e, "east", t, [
              "dpad",
              "dpad_click",
              "dpad_touch",
            ]);
          }
          SetSouthAction(e, t) {
            F.SetActionForInputModeType(this.GetFullInputPath, e, "south", t, [
              "dpad",
              "dpad_click",
              "dpad_touch",
            ]);
          }
          SetWestAction(e, t) {
            F.SetActionForInputModeType(this.GetFullInputPath, e, "west", t, [
              "dpad",
              "dpad_click",
              "dpad_touch",
            ]);
          }
          SetCenterAction(e, t) {
            F.SetActionForInputModeType(this.GetFullInputPath, e, "center", t, [
              "dpad",
              "dpad_click",
              "dpad_touch",
            ]);
          }
          SetScrollAction(e, t) {
            F.SetActionForInputModeType(this.GetFullInputPath, e, "scroll", t, [
              "scroll",
            ]);
          }
          SetPullAction(e, t) {
            F.SetActionForInputModeType(this.GetFullInputPath, e, "pull", t, [
              "trigger",
            ]);
          }
          SetForceAction(e, t) {
            F.SetActionForInputModeType(this.GetFullInputPath, e, "force", t, [
              "force_sensor",
            ]);
          }
          SetGrabAction(e, t) {
            F.SetActionForInputModeType(this.GetFullInputPath, e, "grab", t, [
              "grab",
            ]);
          }
          SetValueAction(e, t) {
            F.SetActionForInputModeType(this.GetFullInputPath, e, "value", t, [
              "scalar_constant",
            ]);
          }
          SetConstantAction(e, t) {
            F.SetActionForInputModeType(
              this.GetFullInputPath,
              e,
              "constant",
              t,
              ["static_bool"],
            );
          }
          CopyActions(e) {
            F.ClearModesForInputPath(this.GetFullInputPath),
              e.GetModes.forEach((e, t) => {
                F.AddInputModeForSource(this.GetFullInputPath, e.mode),
                  e.inputs.forEach((e, o) => {
                    F.SetActionForInputModeType(
                      this.GetFullInputPath,
                      t,
                      o,
                      e.output,
                      [],
                    );
                  });
              });
          }
          BindingsMatch(e) {
            let t = e.GetModes;
            if (this.GetModes.length != t.length) return !1;
            for (let e = 0; e < t.length; e++) {
              let o = t[e],
                n = this.GetModes.filter((e) => e.mode == o.mode);
              if (n.length > 0) {
                let e = !0;
                return (
                  n[0].inputs.forEach((t, n) => {
                    (o.inputs.has(n) && o.inputs.get(n).output == t.output) ||
                      (e = !1);
                  }),
                  e
                );
              }
              return !1;
            }
            return !0;
          }
          SetClickParameter(e, t, o) {
            F.SetParameterForInputModeType(
              this.GetFullInputPath,
              e,
              "click",
              t,
              o,
            );
          }
          SetTouchParameter(e, t, o) {
            F.SetParameterForInputModeType(
              this.GetFullInputPath,
              e,
              "touch",
              t,
              o,
            );
          }
          SetParameter(e, t, o, n) {
            F.SetParameterForInputModeType(this.GetFullInputPath, e, t, o, n);
          }
          GetClickParameter(e, t) {
            return F.GetParameterForInputModeType(
              this.GetFullInputPath,
              e,
              "click",
              t,
            );
          }
          GetTouchParameter(e, t) {
            return F.GetParameterForInputModeType(
              this.GetFullInputPath,
              e,
              "touch",
              t,
            );
          }
          GetParameter(e, t, o) {
            return F.GetParameterForInputModeType(
              this.GetFullInputPath,
              e,
              t,
              o,
            );
          }
          GetTrackpadInvertState(e) {
            switch (
              F.GetParameterForInputModeType(
                this.GetFullInputPath,
                e,
                "trackpad",
                "invert",
              )
            ) {
              case "x":
                return "x";
              case "y":
                return "y";
              case "xy":
                return "xy";
              default:
                return "";
            }
          }
          SetTrackpadInvertState(e, t) {
            let o = "";
            switch (t) {
              case "x":
                o = "x";
                break;
              case "y":
                o = "y";
                break;
              case "xy":
                o = "xy";
            }
            F.SetParameterForInputModeType(
              this.GetFullInputPath,
              e,
              "trackpad",
              "invert",
              o,
            );
          }
        }
        (0, i.Cg)([g.observable], R.prototype, "m_BindingUISource", void 0),
          (0, i.Cg)([g.observable], R.prototype, "m_ControllerProfile", void 0),
          (0, i.Cg)([g.observable], R.prototype, "m_sDeviceInputPath", void 0),
          (0, i.Cg)([g.observable], R.prototype, "m_eButtonSide", void 0),
          (0, i.Cg)([g.observable], R.prototype, "m_sInputPath", void 0),
          (0, i.Cg)([g.observable], R.prototype, "m_sActionSet", void 0),
          (0, i.Cg)([h.o], R.prototype, "cancelWatcher", null),
          (0, i.Cg)([g.action], R.prototype, "UpdateBindingSource", null),
          (0, i.Cg)([g.computed], R.prototype, "GetFullInputPath", null),
          (0, i.Cg)([h.o], R.prototype, "GetSVGEndPoint", null),
          (0, i.Cg)([g.computed], R.prototype, "GetButtonSide", null),
          (0, i.Cg)([g.computed], R.prototype, "GetNumModes", null),
          (0, i.Cg)([h.o], R.prototype, "GetActionForInputType", null),
          (0, i.Cg)([h.o], R.prototype, "GetClickAction", null),
          (0, i.Cg)([h.o], R.prototype, "GetTouchAction", null),
          (0, i.Cg)([h.o], R.prototype, "GetPositionAction", null),
          (0, i.Cg)([h.o], R.prototype, "GetHeldAction", null),
          (0, i.Cg)([h.o], R.prototype, "GetLongAction", null),
          (0, i.Cg)([h.o], R.prototype, "GetSingleAction", null),
          (0, i.Cg)([h.o], R.prototype, "GetDoubleAction", null),
          (0, i.Cg)([h.o], R.prototype, "GetNorthAction", null),
          (0, i.Cg)([h.o], R.prototype, "GetEastAction", null),
          (0, i.Cg)([h.o], R.prototype, "GetSouthAction", null),
          (0, i.Cg)([h.o], R.prototype, "GetWestAction", null),
          (0, i.Cg)([h.o], R.prototype, "GetCenterAction", null),
          (0, i.Cg)([h.o], R.prototype, "GetScrollAction", null),
          (0, i.Cg)([h.o], R.prototype, "GetPullAction", null),
          (0, i.Cg)([h.o], R.prototype, "GetForceAction", null),
          (0, i.Cg)([h.o], R.prototype, "GetConstantAction", null),
          (0, i.Cg)([h.o], R.prototype, "GetGrabAction", null),
          (0, i.Cg)([h.o], R.prototype, "GetValueAction", null),
          (0, i.Cg)([g.computed], R.prototype, "GetControllerInputName", null),
          (0, i.Cg)([g.computed], R.prototype, "GetModes", null),
          (0, i.Cg)([h.o], R.prototype, "GetMode", null),
          (0, i.Cg)([g.computed], R.prototype, "GetInputSourceType", null),
          (0, i.Cg)([g.computed], R.prototype, "GetInputSource", null),
          (0, i.Cg)(
            [g.computed],
            R.prototype,
            "GetInputSourceClickSupport",
            null,
          ),
          (0, i.Cg)(
            [g.computed],
            R.prototype,
            "GetInputSourceTouchSupport",
            null,
          ),
          (0, i.Cg)(
            [g.computed],
            R.prototype,
            "GetInputSourceForceSupport",
            null,
          ),
          (0, i.Cg)(
            [g.computed],
            R.prototype,
            "GetInputSourceDefaultDeadzone",
            null,
          ),
          (0, i.Cg)([g.action], R.prototype, "SetInputMode", null),
          (0, i.Cg)([g.action], R.prototype, "AddInputMode", null),
          (0, i.Cg)([g.action], R.prototype, "DeleteInputMode", null),
          (0, i.Cg)([h.o], R.prototype, "ClearNewModeIfSet", null),
          (0, i.Cg)([h.o], R.prototype, "BHasModeSelectionPending", null),
          (0, i.Cg)([g.action], R.prototype, "SetClickAction", null),
          (0, i.Cg)([g.action], R.prototype, "SetTouchAction", null),
          (0, i.Cg)([g.action], R.prototype, "SetHeldAction", null),
          (0, i.Cg)([g.action], R.prototype, "SetLongAction", null),
          (0, i.Cg)([g.action], R.prototype, "SetSingleAction", null),
          (0, i.Cg)([g.action], R.prototype, "SetDoubleAction", null),
          (0, i.Cg)([g.action], R.prototype, "SetPositionAction", null),
          (0, i.Cg)([g.action], R.prototype, "SetNorthAction", null),
          (0, i.Cg)([g.action], R.prototype, "SetEastAction", null),
          (0, i.Cg)([g.action], R.prototype, "SetSouthAction", null),
          (0, i.Cg)([g.action], R.prototype, "SetWestAction", null),
          (0, i.Cg)([g.action], R.prototype, "SetCenterAction", null),
          (0, i.Cg)([g.action], R.prototype, "SetScrollAction", null),
          (0, i.Cg)([g.action], R.prototype, "SetPullAction", null),
          (0, i.Cg)([g.action], R.prototype, "SetForceAction", null),
          (0, i.Cg)([g.action], R.prototype, "SetGrabAction", null),
          (0, i.Cg)([g.action], R.prototype, "SetValueAction", null),
          (0, i.Cg)([g.action], R.prototype, "SetConstantAction", null),
          (0, i.Cg)([g.action], R.prototype, "CopyActions", null),
          (0, i.Cg)([h.o], R.prototype, "BindingsMatch", null),
          (0, i.Cg)([g.action], R.prototype, "SetClickParameter", null),
          (0, i.Cg)([g.action], R.prototype, "SetTouchParameter", null),
          (0, i.Cg)([g.action], R.prototype, "SetParameter", null),
          (0, i.Cg)([g.action], R.prototype, "GetClickParameter", null),
          (0, i.Cg)([g.action], R.prototype, "GetTouchParameter", null),
          (0, i.Cg)([g.action], R.prototype, "GetParameter", null),
          (0, i.Cg)([h.o], R.prototype, "GetTrackpadInvertState", null),
          (0, i.Cg)([g.action], R.prototype, "SetTrackpadInvertState", null);
        class L {
          constructor(e, t, o) {
            (this.m_sSaveType = e),
              (this.m_OutstandingSaveBindingResolve = t),
              (this.m_OutstandingSaveBindingReject = o);
          }
          resolve(e) {
            this.m_OutstandingSaveBindingResolve(e);
          }
          reject(e) {
            this.m_OutstandingSaveBindingReject(e);
          }
          get SaveType() {
            return this.m_sSaveType;
          }
        }
        (0, i.Cg)([h.o], L.prototype, "resolve", null),
          (0, i.Cg)([h.o], L.prototype, "reject", null),
          (function (e) {
            (e[(e.eWebSocketState_Unknown = 0)] = "eWebSocketState_Unknown"),
              (e[(e.eWebSocketState_Disconnected = 1)] =
                "eWebSocketState_Disconnected"),
              (e[(e.eWebSocketState_Connecting = 2)] =
                "eWebSocketState_Connecting"),
              (e[(e.eWebSocketState_Connected = 3)] =
                "eWebSocketState_Connected");
          })(b || (b = {}));
        class D {
          constructor() {
            (this.m_wsWebSocketToServer = void 0),
              (this.m_eWebSocketState = b.eWebSocketState_Unknown),
              (this.m_timerWebSocket = void 0),
              (this.m_dateStartTime = new Date()),
              (this.m_sLoadedBindingURI = void 0),
              (this.m_LoadedBinding = void 0),
              (this.m_ModifiedBindingSet = g.observable.map()),
              (this.m_ModifiedOptions = g.observable.map()),
              (this.m_ModifiedAliases = g.observable.map()),
              (this.m_sName = void 0),
              (this.m_sDescription = void 0),
              (this.m_sInteractionProfile = void 0),
              (this.m_SelectedApp = void 0),
              (this.m_SelectedAppActions = void 0),
              (this.m_sSelectedActionSet = void 0),
              (this.m_sSelectedControllerType = void 0),
              (this.m_TrackerBindingSetup = void 0),
              (this.m_bControllerTypeSelectedByUser = !1),
              (this.m_OutstandingSaveBindingCalls = []),
              (this.m_vecBindingSetWatchers = Array()),
              (this.m_mapUnoundActions = new Map()),
              (this.m_bIsMissingRequiredActions = !1),
              (this.m_rKnownFailedBindingUris = []),
              (this.m_ControllerWatchers = new Map()),
              (this.m_ModifiedSimulatedActions = g.observable.map()),
              (this.m_nNextSimulatedActionId = 1),
              (this.m_nBindingSubscriptionChangedCanary = 1),
              (this.m_bIsSaving = !1),
              (this.m_bHasPendingSave = !1),
              (0, g.makeObservable)(this);
          }
          OpenWebSocketToHost() {
            return new Promise((e, t) => {
              this.m_eWebSocketState != b.eWebSocketState_Connecting &&
                this.m_eWebSocketState != b.eWebSocketState_Connected &&
                (this.m_wsWebSocketToServer &&
                  delete this.m_wsWebSocketToServer,
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
                }),
                (this.m_eWebSocketState = b.eWebSocketState_Connecting)),
                this.m_timerWebSocket ||
                  (this.m_timerWebSocket = window.setTimeout(
                    this.OpenWebSocketToHost,
                    1e3,
                  ));
            });
          }
          Init() {
            return (0, i.sH)(this, void 0, void 0, function* () {
              yield this.OpenWebSocketToHost(), yield this.RefreshInputState();
            });
          }
          CountDevicesWithControllerType(e) {
            let t = 0;
            return (
              S.W.ConnectedDevices.forEach((o) => {
                o.controller_type == e && t++;
              }),
              t
            );
          }
          ComputeControllerTypeScore(e) {
            let t = this.CountDevicesWithControllerType(e.controller_type),
              o =
                ((null === c.Ay || void 0 === c.Ay ? void 0 : c.Ay.HasHMD())
                  ? null === c.Ay || void 0 === c.Ay
                    ? void 0
                    : c.Ay.VRProperties.GetStringProperty(
                        "/user/head",
                        c.fD.Prop_ExpectedControllerType_String,
                      )
                  : void 0) == e.controller_type
                  ? 2
                  : 1;
            return 1e3 * (999 - e.priority) + 10 * t + o;
          }
          GetBestControllerType() {
            let e,
              t = 0;
            return (
              S.W.ControllerTypes.forEach((o) => {
                let n = this.ComputeControllerTypeScore(o);
                n > t && ((e = o), (t = n));
              }),
              e
            );
          }
          RefreshInputState() {
            return (0, i.sH)(this, void 0, void 0, function* () {
              let e = S.W.KnownControllerTypes.size;
              return S.W.GetInputState().then(() => {
                this.m_SelectedApp &&
                  e != S.W.KnownControllerTypes.size &&
                  this.ReloadCurrentApp();
                let t = !1;
                const o = this.GetBestControllerType();
                let n = S.W.FindDeviceClassForControllerType(
                  this.m_sSelectedControllerType,
                );
                if (
                  null != o &&
                  this.m_sSelectedControllerType != o.controller_type &&
                  !this.m_bControllerTypeSelectedByUser
                ) {
                  let e = S.W.FindDeviceClassForControllerType(
                    o.controller_type,
                  );
                  f.IsSafeToResetControllerType(n, e) &&
                    ((this.m_sSelectedControllerType = o.controller_type),
                    (t = !0));
                }
                return t ? this.ReloadControllerConfiguration() : null;
              });
            });
          }
          get SteamVRUnavailable() {
            return this.m_eWebSocketState == b.eWebSocketState_Connecting ||
              this.m_eWebSocketState == b.eWebSocketState_Unknown
              ? Date.now() - this.m_dateStartTime.getTime() > 1e4
              : this.m_eWebSocketState != b.eWebSocketState_Connected;
          }
          get ActionSets() {
            if (
              null == this.m_SelectedAppActions ||
              null == this.m_SelectedAppActions.action_sets
            )
              return [];
            let e = [];
            return (
              this.m_SelectedAppActions.action_sets.forEach((t) => {
                if ("hidden" != t.usage) {
                  let o = !0;
                  t.required_options &&
                    t.required_options.forEach((e) => {
                      this.GetOptionValue(e) || (o = !1);
                    });
                  let n = !1;
                  t.forbidden_options &&
                    t.forbidden_options.forEach((e) => {
                      this.GetOptionValue(e) && (n = !0);
                    }),
                    o && !n && e.push(t);
                }
              }),
              e
            );
          }
          get ManifestOptions() {
            return null == this.m_SelectedAppActions ||
              null == this.m_SelectedAppActions.action_sets ||
              null == this.m_SelectedAppActions.options
              ? []
              : this.m_SelectedAppActions.options;
          }
          get SecondaryControllerOptions() {
            return [
              {
                name: "returnBindingsWithLeftHand",
                localized_name: (0, p.we)(
                  "#SecondaryController_ReturnWithLeftHand",
                ),
                type: "bool",
                default: !1,
              },
              {
                name: "returnBindingsWithRightHand",
                localized_name: (0, p.we)(
                  "#SecondaryController_ReturnWithRightHand",
                ),
                type: "bool",
                default: !1,
              },
              {
                name: "returnBindingsWithHead",
                localized_name: (0, p.we)(
                  "#SecondaryController_ReturnWithHead",
                ),
                type: "bool",
                default: !1,
              },
            ];
          }
          GetOptionDefault(e) {
            let t = !1;
            return (
              this.ManifestOptions.forEach((o) => {
                o.name == e && (t = o.default);
              }),
              t
            );
          }
          GetOptionValue(e) {
            return this.m_ModifiedOptions.has(e)
              ? this.m_ModifiedOptions.get(e)
              : void 0;
          }
          HasOptionValue(e) {
            return this.m_ModifiedOptions.has(e);
          }
          SetOptionValue(e, t) {
            null == t
              ? this.m_ModifiedOptions.delete(e)
              : this.m_ModifiedOptions.set(e, t),
              this.NotifyWatchersOfChange();
          }
          GetAliasInfo(e) {
            return this.m_ModifiedAliases.has(e)
              ? this.m_ModifiedAliases.get(e)
              : null;
          }
          SetAliasName(e, t) {
            if (this.m_ModifiedAliases.has(e)) {
              let o = this.m_ModifiedAliases.get(e);
              (o.alias_name = t),
                this.m_ModifiedAliases.set(e, o),
                this.NotifyWatchersOfChange();
            } else {
              let o = { alias_name: t, hidden: !1 };
              this.m_ModifiedAliases.set(e, o), this.NotifyWatchersOfChange();
            }
          }
          SetAliasHidden(e, t) {
            if (this.m_ModifiedAliases.has(e)) {
              let o = this.m_ModifiedAliases.get(e);
              (o.hidden = t),
                this.m_ModifiedAliases.set(e, o),
                this.NotifyWatchersOfChange();
            } else {
              let o = { alias_name: "", hidden: t };
              this.m_ModifiedAliases.set(e, o), this.NotifyWatchersOfChange();
            }
          }
          ComputeSimulatedActionPathFromId(e) {
            return "/simactions/" + e;
          }
          GetSimulatedActionByPath(e) {
            return this.m_ModifiedSimulatedActions.has(e)
              ? this.m_ModifiedSimulatedActions.get(e)
              : void 0;
          }
          SetSimulatedActionByPath(e, t) {
            this.m_ModifiedSimulatedActions.set(e, t),
              this.NotifyWatchersOfChange();
          }
          AddSimulatedAction(e) {
            let t = {
                name: "",
                type: e,
                id: this.m_nNextSimulatedActionId++,
                output: "",
              },
              o = this.ComputeSimulatedActionPathFromId(t.id);
            this.m_ModifiedSimulatedActions.set(o, t),
              this.NotifyWatchersOfChange();
          }
          DeleteSimulatedActionByPath(e) {
            this.m_ModifiedSimulatedActions.delete(e),
              this.NotifyWatchersOfChange();
          }
          get SimulatedActions() {
            return Array.from(this.m_ModifiedSimulatedActions.values());
          }
          get SelectedApp() {
            return this.m_SelectedApp ? this.m_SelectedApp.key : void 0;
          }
          get SelectedAppActions() {
            return this.m_SelectedAppActions;
          }
          get CurrentAppCanAccessPrivateInputs() {
            return (
              _.s.IsAppAllowedPrivateInputs(this.m_SelectedApp.key) ||
              S.W.ShouldSendSystemButtonToAllApps
            );
          }
          get SelectedControllerTypeInfo() {
            if (S.W.IsValid && null != this.m_sSelectedControllerType)
              return S.W.GetControllerTypeInfo(this.m_sSelectedControllerType);
          }
          DeviceForControllerType(e, t) {
            let o = S.W.GetControllerTypeInfo(e);
            if (!o) return;
            let n = !1,
              i = S.W.ConnectedDevices.find((i) => {
                if (i.controller_type == e) {
                  if (((n = !0), !t)) return !0;
                  if ("controller_handed" != o.input_bindingui_mode) return !0;
                  let e = 1 == t ? "/left" : "/right";
                  if (i.root_path && i.root_path.indexOf(e) >= 0) return !0;
                }
                return !1;
              });
            return (
              i ||
              (n
                ? S.W.ConnectedDevices.find((t) => t.controller_type == e)
                : void 0)
            );
          }
          get CurrentBindingSaveType() {
            if (null != this.m_LoadedBinding)
              return "developer" == this.m_LoadedBinding.save_type &&
                F.SelectedBindingIsLegacy
                ? "developer_legacy"
                : this.m_LoadedBinding.save_type;
          }
          get CurrentBindingActionManifestVersion() {
            return this.m_LoadedBinding &&
              this.m_LoadedBinding.binding_config &&
              this.m_LoadedBinding.binding_config.action_manifest_version
              ? this.m_LoadedBinding.binding_config.action_manifest_version
              : 0;
          }
          get SelectedActionSet() {
            return this.m_sSelectedActionSet;
          }
          get SelectedActionSetDetails() {
            if (
              null != this.m_SelectedAppActions &&
              null != this.m_sSelectedActionSet
            )
              return this.m_SelectedAppActions.action_sets.find(
                (e) => e.name == this.m_sSelectedActionSet,
              );
          }
          get SelectedActionSetActions() {
            return this.GetActionSetActions(this.m_sSelectedActionSet);
          }
          GetSelectedAppDefaultBinding(e) {
            if (null != this.m_SelectedAppActions)
              return this.m_SelectedAppActions.default_bindings &&
                this.m_SelectedAppActions.default_bindings.hasOwnProperty(e)
                ? this.m_SelectedAppActions.default_bindings[e]
                : void 0;
          }
          GetActionSetActions(e) {
            if (null == this.m_SelectedAppActions || null == e) return [];
            let t = this.m_SelectedAppActions.action_sets.find(
              (t) => t.name == e,
            );
            return t ? t.actions : [];
          }
          GetActionByName(e) {
            if (
              null == this.m_SelectedApp ||
              !this.m_SelectedAppActions.action_sets
            )
              return;
            let t,
              o = e.toLowerCase();
            return (
              this.m_SelectedAppActions.action_sets.forEach((e) => {
                if (!e.actions) return;
                let n = e.actions.find((e) => e.name.toLowerCase() == o);
                n && (t = n);
              }),
              t
            );
          }
          GetActionSetLocalizedNameByName(e) {
            for (const t of this.m_SelectedAppActions.action_sets)
              if (t.name == e && t.localized_name) return t.localized_name;
            return e;
          }
          get UnboundActions() {
            this.m_bIsMissingRequiredActions = !1;
            for (let e of this.ActionSets) {
              let t = [],
                o = [];
              if (!e.actions) break;
              for (let n of e.actions)
                if (
                  "optional" != n.requirement &&
                  !this.IsActionBound(e, n.name)
                ) {
                  let e = this.GetAliasInfo(n.name);
                  if (e) {
                    if (e.hidden) continue;
                    e.alias_name &&
                      ((n = Object.assign({}, n)),
                      (n.localized_name = e.alias_name));
                  }
                  "mandatory" == n.requirement ? t.push(n) : o.push(n);
                }
              if (
                (t.length > 0 && (this.m_bIsMissingRequiredActions = !0),
                this.m_mapUnoundActions.has(e.name))
              ) {
                let n = this.m_mapUnoundActions.get(e.name);
                (n.vecRequired = t), (n.vecSuggested = o);
              } else
                this.m_mapUnoundActions.set(e.name, {
                  vecRequired: t,
                  vecSuggested: o,
                });
            }
            let e = this.SelectedControllerTypeInfo;
            return (
              e &&
                "TrackedDeviceClass_HMD" == e.device_class &&
                (this.m_bIsMissingRequiredActions = !1),
              this.IsSecondaryController &&
                (this.m_bIsMissingRequiredActions = !1),
              this.m_mapUnoundActions
            );
          }
          get UnboundRequiredActionStrings() {
            this.UnboundActions;
            let e = [];
            for (let t of this.ActionSets) {
              const o = t.localized_name ? t.localized_name : t.name;
              let n = this.m_mapUnoundActions.get(t.name);
              n &&
                n.vecRequired.length > 0 &&
                n.vecRequired.forEach((t) => {
                  const n = t.localized_name ? t.localized_name : t.name;
                  e.push(`${o}: ${n}`);
                });
            }
            return e;
          }
          get HasUnboundActions() {
            return this.UnboundActions, this.m_bIsMissingRequiredActions;
          }
          IsActionBound(e, t) {
            t = t.toLowerCase();
            let o = this.GetActionSetSources(e.name);
            if (o)
              for (let e of o) {
                let o = !1;
                if (
                  (e.inputs.forEach((e) => {
                    e.output.toLowerCase() == t && (o = !0);
                  }),
                  o)
                )
                  return !0;
              }
            let n = this.GetActionSetChords(e.name);
            if (n)
              for (let e of n)
                if (e.output && e.output.toLowerCase() == t) return !0;
            let i = this.GetActionSetPoses(e.name);
            if (i)
              for (let e of i)
                if (e.output && e.output.toLowerCase() == t) return !0;
            let s = this.GetActionSetHaptics(e.name);
            if (s)
              for (let e of s)
                if (e.output && e.output.toLowerCase() == t) return !0;
            let l = this.GetActionSetSkeleton(e.name);
            if (l)
              for (let e of l)
                if (e.output && e.output.toLowerCase() == t) return !0;
            return !1;
          }
          GetActionSetPoses(e) {
            return this.m_ModifiedBindingSet.has(e)
              ? this.m_ModifiedBindingSet.get(e).poses
              : [];
          }
          get SelectedActionSetPoses() {
            return this.GetActionSetPoses(this.m_sSelectedActionSet);
          }
          GetActionSetHaptics(e) {
            return this.m_ModifiedBindingSet.has(e)
              ? this.m_ModifiedBindingSet.get(e).haptics
              : [];
          }
          get SelectedActionSetHaptics() {
            return this.GetActionSetHaptics(this.m_sSelectedActionSet);
          }
          GetActionSetSkeleton(e) {
            return this.m_ModifiedBindingSet.has(e)
              ? this.m_ModifiedBindingSet.get(e).skeleton
              : [];
          }
          get SelectedActionSetSkeletons() {
            return this.GetActionSetSkeleton(this.m_sSelectedActionSet);
          }
          GetActionSetChords(e) {
            return this.m_ModifiedBindingSet.has(e)
              ? this.m_ModifiedBindingSet.get(e).chords
              : [];
          }
          get SelectedActionSetChords() {
            return this.GetActionSetChords(this.m_sSelectedActionSet);
          }
          get SelectedActionSetChordCount() {
            let e = this.SelectedActionSetChords;
            return e ? e.length : 0;
          }
          GetActionSetSources(e) {
            if (null == this.m_ModifiedBindingSet || null == e) return;
            let t = this.m_ModifiedBindingSet;
            return t.has(e) ? t.get(e).sources : void 0;
          }
          get SelectedActionSetSources() {
            return this.GetActionSetSources(this.m_sSelectedActionSet);
          }
          get BSelectedActionSetHasPoses() {
            return (
              null != this.m_LoadedBinding &&
              null != this.m_sSelectedActionSet &&
              null != this.SelectedActionSetActions &&
              !this.SelectedBindingIsLegacy &&
              this.SelectedActionSetActions.filter((e) => "pose" == e.type)
                .length > 0
            );
          }
          get BSelectedActionSetHasBoundPoses() {
            if (
              !this.BSelectedActionSetHasPoses ||
              !this.SelectedActionSetPoses ||
              null == this.SelectedActionSetActions
            )
              return !1;
            for (let e of this.SelectedActionSetPoses)
              if (e.output && "none" != e.output) return !0;
            return !1;
          }
          get BSelectedActionSetHasHaptics() {
            return (
              null != this.m_LoadedBinding &&
              null != this.m_sSelectedActionSet &&
              null != this.SelectedActionSetActions &&
              this.SelectedActionSetActions.filter((e) => "vibration" == e.type)
                .length > 0
            );
          }
          get BSelectedActionSetHasBoundHaptics() {
            if (
              !this.BSelectedActionSetHasHaptics ||
              !this.SelectedActionSetHaptics ||
              null == this.SelectedActionSetActions
            )
              return !1;
            for (let e of this.SelectedActionSetHaptics)
              if (e.output && "none" != e.output) return !0;
            return !1;
          }
          get BSelectedActionSetHasSkeletons() {
            if (
              null == this.m_LoadedBinding ||
              null == this.m_sSelectedActionSet ||
              null == this.SelectedActionSetActions
            )
              return !1;
            if (
              0 ==
              this.SelectedActionSetActions.filter((e) => "skeleton" == e.type)
                .length
            )
              return !1;
            return (
              null != this.SelectedControllerTypeInfo &&
              !!this.GetFirstInputSourceOfType("skeleton")
            );
          }
          get BSelectedActionSetHasBoundSkeletons() {
            if (
              !this.BSelectedActionSetHasSkeletons ||
              !this.SelectedActionSetSkeletons ||
              null == this.SelectedActionSetActions
            )
              return !1;
            for (let e of this.SelectedActionSetSkeletons)
              if (e.output && "none" != e.output) return !0;
            return !1;
          }
          ClearSelectedApp() {
            this.m_SelectedApp = void 0;
          }
          SetSelectedApp(e, t) {
            if (
              (console.log(`Setting selected app to app key: ${e}.`),
              null == this.m_SelectedApp || e != this.m_SelectedApp.key)
            ) {
              (this.m_rKnownFailedBindingUris = []),
                this.m_ControllerWatchers.clear();
              let o = _.s.GetApp(e);
              o &&
                ((this.m_SelectedApp = o),
                console.log(`Successfully set selected app to app key: ${e}.`),
                t || this.ReloadCurrentApp());
            }
          }
          ReloadCurrentApp() {
            return (0, i.sH)(this, void 0, void 0, function* () {
              (this.m_sLoadedBindingURI = void 0),
                (this.m_sSelectedActionSet = void 0),
                yield this.LoadActionManifest();
              let e = this.ActionSets;
              e.length > 0 &&
                (null == this.m_sSelectedActionSet ||
                  !this.m_SelectedAppActions.action_sets.hasOwnProperty(
                    this.m_sSelectedActionSet,
                  )) &&
                (this.m_sSelectedActionSet = e[0].name),
                yield this.ReloadControllerConfiguration();
            });
          }
          SetSelectedController(e, t) {
            if (e != this.m_sSelectedControllerType) {
              let o = S.W.GetControllerTypeInfo(e);
              o &&
                (this.m_ControllerWatchers.clear(),
                (this.m_sSelectedControllerType = o.controller_type),
                (this.m_bControllerTypeSelectedByUser = !0),
                (this.m_sLoadedBindingURI = void 0),
                t || this.ReloadControllerConfiguration());
            }
          }
          SetSelectedActionSet(e) {
            e != this.m_sSelectedActionSet && (this.m_sSelectedActionSet = e);
          }
          LocalizeStringForSelectedControllerType(e) {
            let t = this.SelectedControllerTypeInfo;
            return t && t.resource_root
              ? S.W.LocalizeDriverString(t.resource_root, e)
              : e;
          }
          LocalizePathNameForSelectedControllerType(e) {
            let t;
            return (
              [
                "/user/hand/secondary",
                "/user/hand/primary",
                "/user/hand/left",
                "/user/hand/right",
                "/user/head",
              ].forEach((o) => {
                0 != e.indexOf(o) || (t = o);
              }),
              t
                ? (0, p.we)("#" + t) +
                  " " +
                  this.LocalizeStringForSelectedControllerType(e.replace(t, ""))
                : e
            );
          }
          get SelectedControllerTypeLocalizedName() {
            let e = this.SelectedControllerTypeInfo;
            return e
              ? e.resource_root
                ? S.W.LocalizeDriverString(e.resource_root, e.controller_type)
                : e.controller_type
              : "";
          }
          RegisterBindingWatcher(e) {
            null == this.m_vecBindingSetWatchers.find((t) => t == e) &&
              this.m_vecBindingSetWatchers.push(e);
          }
          UnregisterBindingWatcher(e) {
            let t = this.m_vecBindingSetWatchers.indexOf(e);
            t >= 0 && this.m_vecBindingSetWatchers.splice(t, 1);
          }
          GetActionBinding(e, t) {
            if (null == this.m_ModifiedBindingSet) return;
            let o = this.m_ModifiedBindingSet;
            if (o.has(t)) {
              let n = o.get(t).sources;
              if (n) {
                let t = n.filter((t) => t.path == e);
                if (t) return t;
              }
            }
          }
          GetInputModesForSourceType(e, t) {
            let o = [];
            switch (e) {
              case "button":
                o = ["button", "-", "toggle_button", "scalar_constant"];
                break;
              case "trackpad":
                o = [
                  "trackpad",
                  "dpad",
                  "-",
                  "scroll",
                  "radial",
                  "button",
                  "toggle_button",
                ];
                break;
              case "trigger":
                o = [
                  "trigger",
                  "button",
                  "-",
                  "toggle_button",
                  "scalar_constant",
                ];
                break;
              case "joystick":
                o = [
                  "joystick",
                  "dpad",
                  "-",
                  "scroll",
                  "radial",
                  "button",
                  "toggle_button",
                ];
                break;
              case "pinch":
                o = ["grab"];
                break;
              default:
                o = [];
            }
            return (
              t && (o.push("force_sensor"), "trigger" == e && o.push("grab")), o
            );
          }
          GetBooleanInputOptionsForMode(e) {
            switch (e) {
              case "toggle_button":
              case "trackpad":
              case "trigger":
                return ["click", "touch"];
              case "button":
                return ["single", "double", "held", "long", "click", "touch"];
              case "dpad_click":
              case "dpad_touch":
              case "dpad":
                return ["west", "east", "north", "south", "center"];
              case "trackpad_scroll":
              case "force_sensor":
              default:
                return [];
              case "grab":
                return ["grab"];
            }
          }
          GetActionBindingsOfType(e, t) {
            if (
              null == this.m_SelectedApp ||
              null == this.m_sSelectedActionSet ||
              null == this.m_SelectedAppActions.action_sets
            )
              return [];
            let o = this.SelectedActionSetDetails;
            if (!o) return [];
            if (null == o.actions) return [];
            let n = [];
            return (
              o.actions.forEach((o) => {
                let i = this.m_ModifiedAliases.get(o.name);
                if (o.type == e && (!i || !i.hidden || t))
                  if (i && i.alias_name) {
                    let e = Object.assign({}, o);
                    (e.localized_name = i.alias_name), n.push(e);
                  } else n.push(o);
              }),
              t ||
                this.m_ModifiedSimulatedActions.forEach((t) => {
                  if (this.GetActionTypeFromSimulatedActionType(t.type) == e) {
                    this.ComputeSimulatedActionPathFromId(t.id),
                      t.name ? t.name : ((0, p.we)("UnnamedSimAction"), t.id);
                    n.push(this.CreateActionDefinitionForSimulatedAction(t));
                  }
                }),
              n
            );
          }
          GetActionTypeFromSimulatedActionType(e) {
            switch (e) {
              case "fake_trigger":
              case "fake_trackpad_click":
                return "boolean";
              default:
                return "unknown";
            }
          }
          CreateActionDefinitionForSimulatedAction(e) {
            return {
              name: this.ComputeSimulatedActionPathFromId(e.id),
              localized_name: e.name
                ? e.name
                : (0, p.we)("UnnamedSimAction") + e.id,
              type: this.GetActionTypeFromSimulatedActionType(e.type),
            };
          }
          get GetBooleanActionBindings() {
            return this.GetActionBindingsOfType("boolean");
          }
          get GetVector1ActionBindings() {
            return this.GetActionBindingsOfType("vector1");
          }
          get GetLiteralVector1ActionBindings() {
            return this.GetActionBindingsOfType("vector1", !0);
          }
          get GetVector2ActionBindings() {
            return this.GetActionBindingsOfType("vector2");
          }
          get GetVector3ActionBindings() {
            return this.GetActionBindingsOfType("vector3");
          }
          get GetPoseActionBindings() {
            return this.GetActionBindingsOfType("pose");
          }
          get GetHapticsActionBindings() {
            return this.GetActionBindingsOfType("vibration");
          }
          get GetSkeletonActionBindings() {
            return this.GetActionBindingsOfType("skeleton");
          }
          get ConfigName() {
            return this.m_sName;
          }
          get ConfigDescription() {
            return this.m_sDescription;
          }
          GetPoseAction(e) {
            if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
              return;
            let t = this.m_ModifiedBindingSet.get(
              this.m_sSelectedActionSet,
            ).poses;
            if (null == t) return;
            let o = t.filter((t) => t.output.toLowerCase() == e.toLowerCase());
            return o.length ? o : void 0;
          }
          GetPoseActionByPath(e) {
            if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
              return;
            let t = this.m_ModifiedBindingSet.get(
              this.m_sSelectedActionSet,
            ).poses;
            if (null == t) return;
            let o = t.filter((t) => t.path.toLowerCase() == e.toLowerCase());
            return o.length ? o : void 0;
          }
          GetHapticsAction(e) {
            if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
              return;
            let t = this.m_ModifiedBindingSet.get(
              this.m_sSelectedActionSet,
            ).haptics;
            if (null == t) return;
            let o = t.filter((t) => t.output.toLowerCase() == e.toLowerCase());
            return o.length ? o : void 0;
          }
          GetHapticsActionByPath(e) {
            if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
              return;
            let t = this.m_ModifiedBindingSet.get(
              this.m_sSelectedActionSet,
            ).haptics;
            if (null == t) return;
            let o = t.filter((t) => t.path.toLowerCase() == e.toLowerCase());
            return o.length ? o : void 0;
          }
          GetSkeletonAction(e) {
            if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
              return;
            let t = this.m_ModifiedBindingSet.get(
              this.m_sSelectedActionSet,
            ).skeleton;
            if (null == t) return;
            let o = t.filter((t) => t.output.toLowerCase() == e.toLowerCase());
            return o.length ? o : void 0;
          }
          GetSkeletonActionByPath(e) {
            if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
              return;
            let t = this.m_ModifiedBindingSet.get(
              this.m_sSelectedActionSet,
            ).skeleton;
            if (null == t) return;
            let o = t.filter((t) => t.path.toLowerCase() == e.toLowerCase());
            return o.length ? o : void 0;
          }
          NotifyWatchersOfChange() {
            console.log("Binding file changed"),
              this.m_vecBindingSetWatchers.forEach((e) => {
                e();
              }),
              this.AutosaveBinding();
          }
          SetActionForInputModeType(e, t, o, n, i) {
            if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
              return void console.error(
                "SetActionForInputModeType: Invalid action set specified",
              );
            class s {
              constructor(e, t) {
                (this.mode = e), (this.sourceIdx = t);
              }
            }
            let l = [];
            if (
              (this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .sources.forEach((t, o) => {
                  t.path == e && l.push(new s(t, o));
                }),
              l.length <= t)
            )
              return void console.warn(
                "Invalid mode index (",
                t,
                ") for path ",
                e,
              );
            let r = l[t].sourceIdx;
            if (r >= 0) {
              let e = this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet)
                .sources[r];
              if (e.inputs && e.inputs.has(o) && e.inputs.get(o).output == n)
                return void console.log(
                  "Trying to set new action to old action for type",
                  o,
                  " action is ",
                  n,
                );
              if (i.length > 0 && !i.find((t) => t == e.mode))
                return void console.log(
                  "Trying to set invalid input type of ",
                  o,
                  " for current mode ",
                  e.mode,
                );
              e.inputs || (e.inputs = g.observable.map()),
                "none" == n
                  ? e.inputs.has(o) && e.inputs.delete(o)
                  : e.inputs.has(o)
                    ? (e.inputs.get(o).output = n)
                    : e.inputs.set(o, { output: n }),
                this.NotifyWatchersOfChange();
            }
          }
          SetParameterForInputModeType(e, t, o, n, i) {
            if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
              return void console.error(
                "SetParameterForInputModeType: Invalid action set specified",
              );
            let s = [];
            if (
              (this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .sources.forEach((t, o) => {
                  t.path == e && s.push(o);
                }),
              s.length <= t)
            )
              return void console.warn(
                "Invalid mode index (",
                t,
                ") for path ",
                e,
              );
            let l = s[t];
            if (l >= 0) {
              let e = this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet)
                .sources[l];
              if (!e.inputs)
                return void console.log(
                  "SetParameterForInputModeType: Trying to set parameter for missing input type of ",
                  o,
                  " for current mode ",
                  e.mode,
                );
              e.parameters || (e.parameters = g.observable.map()),
                e.parameters.get(n) != i &&
                  (null == i ? e.parameters.delete(n) : e.parameters.set(n, i),
                  this.NotifyWatchersOfChange());
            }
          }
          SetParameterForPose(e, t, o) {
            e
              ? ((null == e ? void 0 : e.parameters) ||
                  (e.parameters = g.observable.map()),
                e.parameters.get(t) != o &&
                  (null == o || (Array.isArray(o) && o.every((e) => 0 === e))
                    ? e.parameters.delete(t)
                    : e.parameters.set(t, o),
                  this.NotifyWatchersOfChange()))
              : console.error(
                  "SetParameterForPose: Trying to set parameter for unknown pose.",
                );
          }
          GetParameterForPose(e, t) {
            return (null == e ? void 0 : e.parameters) &&
              (null == e ? void 0 : e.parameters.has(t))
              ? e.parameters.get(t)
              : null;
          }
          SetParameterForSkeleton(e, t, o) {
            e
              ? ((null == e ? void 0 : e.parameters) ||
                  (e.parameters = g.observable.map()),
                e.parameters.get(t) != o &&
                  (null == o || (Array.isArray(o) && o.every((e) => 0 === e))
                    ? e.parameters.delete(t)
                    : e.parameters.set(t, o),
                  this.NotifyWatchersOfChange()))
              : console.error(
                  "SetParameterForSkeleton: Trying to set parameter for unknown skeleton.",
                );
          }
          GetParameterForSkeleton(e, t) {
            return (null == e ? void 0 : e.parameters) &&
              (null == e ? void 0 : e.parameters.has(t))
              ? e.parameters.get(t)
              : null;
          }
          GetParameterForInputModeType(e, t, o, n) {
            if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
              return (
                console.error(
                  "SetParameterForInputModeType: Invalid action set specified",
                ),
                null
              );
            let i = [];
            if (
              (this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .sources.forEach((t, o) => {
                  t.path == e && i.push(o);
                }),
              i.length <= t)
            )
              return (
                console.warn("Invalid mode index (", t, ") for path ", e), null
              );
            let s = i[t];
            if (s >= 0) {
              let e = this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet)
                .sources[s];
              return e.inputs
                ? e.parameters && e.parameters.has(n)
                  ? e.parameters.get(n)
                  : null
                : (console.log(
                    "GetParameterForInputModeType: Trying to get parameter for missing input type of ",
                    o,
                    " for current mode ",
                    e.mode,
                  ),
                  null);
            }
            return null;
          }
          AddActionSetIfRequired() {
            if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet)) {
              let e = new E();
              (e.sources = []),
                this.m_ModifiedBindingSet.set(this.m_sSelectedActionSet, e);
            }
          }
          AddInputModeForSource(e, t) {
            this.AddActionSetIfRequired();
            let o = new A();
            return (
              (o.mode = t),
              (o.path = e),
              (o.inputs = g.observable.map()),
              this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .sources.push(o),
              this.NotifyWatchersOfChange(),
              this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .sources.filter((t) => t.path.toLowerCase() == e.toLowerCase())
                .length - 1
            );
          }
          DeleteInputModeForSource(e, t) {
            if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
              return void console.error(
                "AddInputModeForType: Invalid action set specified",
              );
            let o = [];
            if (
              (this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .sources.forEach((t, n) => {
                  t.path.toLowerCase() == e.toLowerCase() && o.push(n);
                }),
              o.length <= t)
            )
              return void console.warn(
                "Invalid mode index (",
                t,
                ") for path ",
                e,
              );
            let n = o[t];
            -1 != n
              ? (this.m_ModifiedBindingSet
                  .get(this.m_sSelectedActionSet)
                  .sources.splice(n, 1),
                this.NotifyWatchersOfChange())
              : console.error(
                  "DeleteInputModeForSource: Mode not found for source",
                );
          }
          SetInputModeForInputSource(e, t, o) {
            if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
              return void console.error(
                "SetActionForInputModeType: Invalid action set specified",
              );
            let n = [];
            if (
              (this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .sources.forEach((t, o) => {
                  t.path.toLowerCase() == e.toLowerCase() && n.push(o);
                }),
              n.length <= t)
            )
              return void console.warn(
                "Invalid mode index (",
                t,
                ") for path ",
                e,
              );
            let i = n[t];
            if (-1 != i) {
              let t = this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet)
                .sources[i];
              if (t.path == e) {
                if (t.mode == o)
                  return void console.log(
                    "Trying to set new input mode to old mode!",
                  );
                let n = JSON.parse((0, v.E)(t)),
                  s = new A();
                switch (
                  ((s.mode = o),
                  (s.path = e),
                  (s.inputs = g.observable.map()),
                  o)
                ) {
                  case "button":
                  case "toggle_button":
                    switch (n.mode) {
                      case "complex_button":
                        n.inputs.single &&
                          (s.inputs.set("single", n.inputs.single),
                          s.inputs.set("click", n.inputs.single)),
                          n.inputs.long && s.inputs.set("long", n.inputs.long),
                          n.inputs.press &&
                            s.inputs.set("press", n.inputs.press),
                          n.inputs.double &&
                            s.inputs.set("double", n.inputs.double),
                          n.inputs.touch &&
                            s.inputs.set("touch", n.inputs.touch);
                        break;
                      case "button":
                      case "toggle_button":
                      case "trackpad":
                      case "trigger":
                        n.inputs.click && s.inputs.set("click", n.inputs.click),
                          n.inputs.touch &&
                            s.inputs.set("touch", n.inputs.touch);
                    }
                    break;
                  case "complex_button":
                    switch (n.mode) {
                      case "toggle_button":
                      case "button":
                      case "trackpad":
                      case "trigger":
                        n.inputs.click &&
                          s.inputs.set("single", n.inputs.click);
                    }
                    break;
                  case "trackpad":
                    switch (n.mode) {
                      case "complex_button":
                        n.inputs.single &&
                          s.inputs.set("click", n.inputs.single);
                        break;
                      case "toggle_button":
                      case "button":
                      case "trigger":
                        n.inputs.click && s.inputs.set("click", n.inputs.click),
                          n.inputs.touch &&
                            s.inputs.set("touch", n.inputs.touch);
                    }
                    break;
                  case "trigger":
                    switch (n.mode) {
                      case "complex_button":
                        n.inputs.single &&
                          s.inputs.set("click", n.inputs.single);
                        break;
                      case "toggle_button":
                      case "trackpad":
                      case "button":
                        n.inputs.click && s.inputs.set("click", n.inputs.click),
                          n.inputs.touch &&
                            s.inputs.set("touch", n.inputs.touch);
                    }
                }
                return (
                  (this.m_ModifiedBindingSet.get(
                    this.m_sSelectedActionSet,
                  ).sources[i] = s),
                  void this.NotifyWatchersOfChange()
                );
              }
            } else
              console.error(
                "SetActionForInputModeType: trying to change a mode for a source that we don't have already",
              );
          }
          ClearModesForInputPath(e) {
            this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet)
              ? (this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).sources = this.m_ModifiedBindingSet
                  .get(this.m_sSelectedActionSet)
                  .sources.filter(
                    (t) => t.path.toLowerCase() != e.toLowerCase(),
                  ))
              : console.error(
                  "ClearModesForInputPath: Invalid action set specified",
                );
          }
          SetInputPathForPose(e, t) {
            if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
              return void console.error(
                "SetActionForPose: Invalid action set specified",
              );
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses ||
              (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses =
                []);
            let o = this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .poses.findIndex(
                (t) =>
                  t.path.toLowerCase() == e.path.toLowerCase() &&
                  t.output.toLowerCase() == e.output.toLowerCase(),
              );
            -1 == o &&
              ((o =
                this.m_ModifiedBindingSet
                  .get(this.m_sSelectedActionSet)
                  .poses.push(new I()) - 1),
              (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses[
                o
              ].output = e.output)),
              this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses[o]
                .path != t
                ? ((this.m_ModifiedBindingSet.get(
                    this.m_sSelectedActionSet,
                  ).poses[o].path = t),
                  this.NotifyWatchersOfChange())
                : console.log(
                    "Trying to set new pose action path to old action path!",
                  );
          }
          SetPoseForInputPath(e, t) {
            this.AddActionSetIfRequired(),
              this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses ||
                (this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).poses = []);
            let o = this.GetPoseForInputPath(e);
            if (!o) {
              const t =
                this.m_ModifiedBindingSet
                  .get(this.m_sSelectedActionSet)
                  .poses.push(new I()) - 1;
              (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses[
                t
              ].path = e),
                (o = this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet)
                  .poses[t]);
            }
            o.output != t
              ? ((o.output = t), this.NotifyWatchersOfChange())
              : console.log(
                  "Trying to set new pose action path to old action path!",
                );
          }
          GetPoseForInputPath(e) {
            if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
              return void console.error(
                "SetActionForPose: Invalid action set specified",
              );
            let t = this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .poses.findIndex((t) => t.path.toLowerCase() == e.toLowerCase());
            return -1 != t
              ? this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses[
                  t
                ]
              : void 0;
          }
          GetSkeletonForInputPath(e) {
            if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
              return void console.error(
                "SetActionForPose: Invalid action set specified",
              );
            let t = this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .skeleton.findIndex(
                (t) => t.path.toLowerCase() == e.toLowerCase(),
              );
            return -1 != t
              ? this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet)
                  .skeleton[t]
              : void 0;
          }
          GetFirstInputSourceOfType(e) {
            let t = this.SelectedControllerTypeInfo;
            if (null != t)
              for (let o of Object.keys(t.input_source)) {
                if (t.input_source[o].type == e) return o;
              }
          }
          AddDefaultPose(e, t) {
            if (
              (this.AddActionSetIfRequired(),
              this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses ||
                (this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).poses = []),
              null == this.SelectedControllerTypeInfo)
            )
              return;
            let o = this.GetFirstInputSourceOfType("pose");
            if (!o) return;
            let n = new (class {})();
            (n.output = e), (n.path = o), this.SetInputPathForPose(n, o);
          }
          SetInputPathForHaptics(e, t) {
            if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
              return void console.error(
                "SetInputPathForHaptics: Invalid action set specified",
              );
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics ||
              (this.m_ModifiedBindingSet.get(
                this.m_sSelectedActionSet,
              ).haptics = []);
            let o = this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .haptics.findIndex(
                (t) =>
                  t.path.toLowerCase() == e.path.toLowerCase() &&
                  t.output.toLowerCase() == e.output.toLowerCase(),
              );
            -1 == o &&
              ((o =
                this.m_ModifiedBindingSet
                  .get(this.m_sSelectedActionSet)
                  .haptics.push(new B()) - 1),
              (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics[
                o
              ].output = e.output)),
              this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics[
                o
              ].path != t
                ? ((this.m_ModifiedBindingSet.get(
                    this.m_sSelectedActionSet,
                  ).haptics[o].path = t),
                  this.NotifyWatchersOfChange())
                : console.log(
                    "Trying to set new haptics action path to old action path!",
                  );
          }
          SetHapticsForInputPath(e, t) {
            if (
              (this.AddActionSetIfRequired(),
              !this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            )
              return void console.error(
                "SetHapticsForInputPath: Invalid action set specified",
              );
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics ||
              (this.m_ModifiedBindingSet.get(
                this.m_sSelectedActionSet,
              ).haptics = []);
            let o = this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .haptics.findIndex(
                (t) => t.path.toLowerCase() == e.toLowerCase(),
              );
            -1 == o &&
              ((o =
                this.m_ModifiedBindingSet
                  .get(this.m_sSelectedActionSet)
                  .haptics.push(new I()) - 1),
              (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics[
                o
              ].path = e)),
              this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics[
                o
              ].output != t
                ? ((this.m_ModifiedBindingSet.get(
                    this.m_sSelectedActionSet,
                  ).haptics[o].output = t),
                  this.NotifyWatchersOfChange())
                : console.log(
                    "Trying to set new haptic action path to old action path!",
                  );
          }
          AddDefaultHaptics(e, t) {
            this.AddActionSetIfRequired(),
              this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet)
                .haptics ||
                (this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).haptics = []);
            let o = this.GetFirstInputSourceOfType("haptic");
            if (!o) return;
            let n = t + o;
            let i = new (class {})();
            (i.output = e), (i.path = n), this.SetInputPathForHaptics(i, n);
          }
          SetInputPathForSkeleton(e, t) {
            if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
              return void console.error(
                "SetInputPathForSkeleton: Invalid action set specified",
              );
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton ||
              (this.m_ModifiedBindingSet.get(
                this.m_sSelectedActionSet,
              ).skeleton = []);
            let o = this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .skeleton.findIndex(
                (t) =>
                  t.path.toLowerCase() == e.path.toLowerCase() &&
                  t.output.toLowerCase() == e.output.toLowerCase(),
              );
            -1 == o &&
              ((o =
                this.m_ModifiedBindingSet
                  .get(this.m_sSelectedActionSet)
                  .skeleton.push(new w()) - 1),
              (this.m_ModifiedBindingSet.get(
                this.m_sSelectedActionSet,
              ).skeleton[o].output = e.output)),
              this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton[
                o
              ].path != t
                ? ((this.m_ModifiedBindingSet.get(
                    this.m_sSelectedActionSet,
                  ).skeleton[o].path = t),
                  this.NotifyWatchersOfChange())
                : console.log(
                    "Trying to set new skeleton action path to old action path!",
                  );
          }
          SetSkeletonForInputPath(e, t) {
            if (
              (this.AddActionSetIfRequired(),
              !this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            )
              return void console.error(
                "SetSkeletonForInputPath: Invalid action set specified",
              );
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton ||
              (this.m_ModifiedBindingSet.get(
                this.m_sSelectedActionSet,
              ).skeleton = []);
            let o = this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .skeleton.findIndex(
                (t) => t.path.toLowerCase() == e.toLowerCase(),
              );
            -1 == o &&
              ((o =
                this.m_ModifiedBindingSet
                  .get(this.m_sSelectedActionSet)
                  .skeleton.push(new I()) - 1),
              (this.m_ModifiedBindingSet.get(
                this.m_sSelectedActionSet,
              ).skeleton[o].path = e)),
              this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton[
                o
              ].output != t
                ? ((this.m_ModifiedBindingSet.get(
                    this.m_sSelectedActionSet,
                  ).skeleton[o].output = t),
                  this.NotifyWatchersOfChange())
                : console.log(
                    "Trying to set new skeleton action path to old action path!",
                  );
          }
          AddDefaultSkeleton(e, t) {
            this.AddActionSetIfRequired(),
              this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet)
                .skeleton ||
                (this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).skeleton = []);
            let o = this.GetFirstInputSourceOfType("skeleton");
            if (!o) return;
            let n = t + o;
            let i = new (class {})();
            (i.output = e), (i.path = n), this.SetInputPathForSkeleton(i, n);
          }
          SetActionForChord(e, t) {
            if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
              return void console.error(
                "SetActionForChord: Invalid action set specified",
              );
            let o = this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .chords.findIndex((t) => t == e);
            -1 != o
              ? this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords[
                  o
                ].output != t
                ? ((this.m_ModifiedBindingSet.get(
                    this.m_sSelectedActionSet,
                  ).chords[o].output = t),
                  this.NotifyWatchersOfChange())
                : console.log("Trying to set new chord action to old action!")
              : console.error(
                  "SetActionForChord: Invalid chord  specified ",
                  e,
                );
          }
          DeleteChord(e) {
            if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
              return void console.error(
                "DeleteChordForSource: Invalid action set specified",
              );
            let t = this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .chords.findIndex((t) => t == e);
            -1 != t
              ? (this.m_ModifiedBindingSet
                  .get(this.m_sSelectedActionSet)
                  .chords.splice(t, 1),
                this.NotifyWatchersOfChange())
              : console.error(
                  "DeleteChordForSource: Invalid chord  specified ",
                  e,
                );
          }
          AddChord() {
            this.AddActionSetIfRequired(),
              this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords ||
                (this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).chords = []);
            this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .chords.push(new O());
            this.NotifyWatchersOfChange();
          }
          DeleteSourceFromChord(e, t) {
            if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
              return void console.error(
                "DeleteSourceFromChord: Invalid action set specified",
              );
            let o = this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .chords.findIndex((t) => t == e);
            if (-1 != o) {
              let e = this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .chords[o].inputs.findIndex((e) => e[0] == t);
              -1 != e &&
                (this.m_ModifiedBindingSet
                  .get(this.m_sSelectedActionSet)
                  .chords[o].inputs.splice(e, 1),
                this.NotifyWatchersOfChange());
            } else
              console.error(
                "DeleteSourceFromChord: Invalid chord  specified ",
                e,
              );
          }
          SetInputTypeForChord(e, t, o) {
            if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
              return void console.error(
                "SetInputsForChord: Invalid action set specified",
              );
            let n = this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .chords.findIndex((t) => t == e);
            if (-1 != n) {
              let e = this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .chords[n].inputs.findIndex((e) => e[0] == t);
              if (-1 == e)
                return void console.log(
                  "Invalid bounds for new input chord, trying to add type without source",
                );
              if (
                this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords[
                  n
                ].inputs[e][1] == o
              )
                return void console.log(
                  "Trying to set new chord inputs to old inputs!",
                );
              (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords[
                n
              ].inputs[e][1] = o),
                this.NotifyWatchersOfChange();
            } else
              console.error("SetInputsForChord: Invalid chord  specified ", e);
          }
          SetInputSourceForChord(e, t, o) {
            if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
              return void console.error(
                "SetInputsForChord: Invalid action set specified",
              );
            let n = this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .chords.findIndex((t) => t == e);
            if (-1 != n) {
              let e = this.GetActionBinding(t, this.SelectedActionSet);
              if (!e)
                return void console.log(
                  "Failed to find action binding for path",
                );
              let i = "click";
              if (
                (e.length &&
                  (i = this.GetBooleanInputOptionsForMode(e[0].mode)[0]),
                null == o)
              )
                this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords[
                  n
                ].inputs ||
                  (this.m_ModifiedBindingSet.get(
                    this.m_sSelectedActionSet,
                  ).chords[n].inputs = new Array()),
                  this.m_ModifiedBindingSet
                    .get(this.m_sSelectedActionSet)
                    .chords[n].inputs.push([t, i]);
              else {
                let e = this.m_ModifiedBindingSet
                  .get(this.m_sSelectedActionSet)
                  .chords[n].inputs.findIndex((e) => e[0] == o);
                if (-1 == e)
                  return void console.log(
                    "Trying to set replace chord input path when we didn't have that path!",
                  );
                if (
                  this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet)
                    .chords[n].inputs[e][0] == t
                )
                  return void console.log(
                    "Trying to set new chord inputs to old inputs!",
                  );
                (this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).chords[n].inputs[e][0] = t),
                  (this.m_ModifiedBindingSet.get(
                    this.m_sSelectedActionSet,
                  ).chords[n].inputs[e][1] = i);
              }
              this.NotifyWatchersOfChange();
            } else
              console.error("SetInputsForChord: Invalid chord  specified ", e);
          }
          LoadActionManifest() {
            return (0, i.sH)(this, void 0, void 0, function* () {
              return new Promise((e, t) => {
                N(this.m_SelectedApp.key).then((t) => {
                  null == t.error
                    ? ((0, g.runInAction)(() => {
                        this.m_SelectedAppActions = t;
                      }),
                      null == this.m_sLoadedBindingURI &&
                        t.current_binding_url.hasOwnProperty(
                          this.m_sSelectedControllerType,
                        ) &&
                        (this.m_sLoadedBindingURI =
                          t.current_binding_url[
                            this.m_sSelectedControllerType
                          ]))
                    : ((0, g.runInAction)(() => {
                        (this.m_SelectedAppActions = void 0),
                          (this.m_sLoadedBindingURI = void 0);
                      }),
                      f.SetBindingListError(
                        (0, p.we)("#ActionManifestError_UnknownError"),
                        !1,
                      )),
                    e();
                });
              });
            });
          }
          get SelectedBindingURL() {
            return null != this.m_sSelectedControllerType &&
              null != this.m_SelectedAppActions &&
              null != this.m_SelectedAppActions.current_binding_url &&
              this.m_SelectedAppActions.current_binding_url.hasOwnProperty(
                this.m_sSelectedControllerType,
              )
              ? this.m_SelectedAppActions.current_binding_url[
                  this.m_sSelectedControllerType
                ]
              : void 0;
          }
          get LoadedBindingURL() {
            return this.m_sLoadedBindingURI;
          }
          get SelectedBindingIsLegacy() {
            return (
              !this.m_SelectedAppActions ||
              "legacy" == this.m_SelectedAppActions.category
            );
          }
          get SelectedBindingIsOpenXR() {
            return "openxr" == this.m_SelectedAppActions.category;
          }
          get IsSecondaryController() {
            if (!this.m_sSelectedControllerType) return !1;
            let e = S.W.FindRootPathForControllerType(
              this.m_sSelectedControllerType,
            );
            return (
              "/user/treadmill" == e ||
              "/user/gamepad" == e ||
              "/user/stylus" == e
            );
          }
          ReloadControllerConfiguration() {
            return (0, i.sH)(this, void 0, void 0, function* () {
              if (
                !(
                  this.m_SelectedAppActions &&
                  this.m_sLoadedBindingURI &&
                  this.SelectedApp &&
                  this.SelectedControllerTypeInfo
                )
              )
                return;
              let e = yield (function (e, t, o) {
                return (0, i.sH)(this, void 0, void 0, function* () {
                  let n = (yield m().get(
                    "/input/loadbindingfromurl.json?binding_url=" +
                      encodeURI(o) +
                      "&controller_type=" +
                      encodeURI(t) +
                      "&app_key=" +
                      encodeURI(e),
                  )).data;
                  if (n.success) return n;
                  throw new Error(n.error);
                });
              })(
                this.m_SelectedApp.key,
                this.SelectedControllerTypeInfo.controller_type,
                this.m_sLoadedBindingURI,
              );
              this.OnBindingConfigLoaded(e);
            });
          }
          UpdateTrackerBindings() {
            return (0, i.sH)(this, void 0, void 0, function* () {
              let e = yield this.GetTrackerBindings();
              this.m_TrackerBindingSetup = e;
            });
          }
          get TrackerBindings() {
            return (
              null == this.m_TrackerBindingSetup &&
                this.UpdateTrackerBindings(),
              this.m_TrackerBindingSetup
            );
          }
          GetTrackerBindings() {
            return (0, i.sH)(this, void 0, void 0, function* () {
              return new Promise(function (e, t) {
                m()
                  .get("/input/gettrackerbindings.json")
                  .then((t) => {
                    e(t.data);
                  })
                  .catch((e) => {
                    t(e);
                  });
              });
            });
          }
          GetTrackerBinding(e) {
            for (let t of this.m_TrackerBindingSetup.trackers)
              if (t.device_path_string == e) return t;
            return null;
          }
          SetTrackerBinding(e, t, o) {
            let n = { device_path: e, role: t, controller_role: o };
            const i = (0, v.E)(n);
            console.log("Saving tracker binding " + e),
              m()
                .post("/input/settrackerbinding.action", i)
                .then((e) => {
                  console.log("SetTrackerBinding response: ", e.data),
                    this.UpdateTrackerBindings();
                })
                .catch((e) => {});
          }
          PulseHaptics(e) {
            let t = { path_handle: e };
            const o = (0, v.E)(t);
            m()
              .post("/input/pulsehaptics.action", o)
              .then((e) => {
                console.log("PulseHaptics response: ", e.data);
              })
              .catch((e) => {});
          }
          get KnownControllerTypes() {
            let e = [];
            return (
              S.W.KnownControllerTypes.forEach((t) => {
                e.push(t);
              }),
              e
            );
          }
          PreserveCurrentBindingForUpgrade() {
            let e = f.CurrentBinding;
            return e && "autosave" == e.type
              ? this.SaveCurrentBinding(
                  (0, p.we)("#PreservedAutosaveName"),
                  "",
                  "personal",
                )
              : Promise.resolve(null);
          }
          GetDefaultBindingNameForSaveType(e) {
            let t = F.SelectedControllerTypeInfo,
              o = S.W.LocalizeControllerString(t, t ? t.controller_type : "");
            switch (e) {
              default:
              case "autosave":
                return (0, p.we)(
                  "#BindingUI_SaveDefaultName",
                  this.m_SelectedApp.name,
                  o,
                );
              case "personal":
                return (0, p.we)(
                  "#BindingUI_SaveDefaultName_Personal",
                  this.m_SelectedApp.name,
                  o,
                );
              case "public":
                return (0, p.we)(
                  "#BindingUI_SaveDefaultName_Public",
                  S.W.CurrentUserPersonaName,
                );
              case "replace_default":
                return F.ConfigName;
            }
          }
          AutosaveBinding() {
            return (0, i.sH)(this, void 0, void 0, function* () {
              if (this.m_bIsSaving)
                return (
                  console.log("Currently saving, adding a pending save."),
                  void (this.m_bHasPendingSave = !0)
                );
              this.m_sName ||
                (this.m_sName =
                  this.GetDefaultBindingNameForSaveType("autosave"));
              try {
                const e = yield this.SaveCurrentBinding(
                  this.m_sName,
                  this.m_sDescription,
                  "autosave",
                );
                F.SetBindingURL(e.uri);
              } finally {
                (this.m_bIsSaving = !1),
                  this.m_bHasPendingSave &&
                    ((this.m_bHasPendingSave = !1), this.AutosaveBinding());
              }
            });
          }
          SaveCurrentBinding(e, t, o) {
            return (0, i.sH)(this, void 0, void 0, function* () {
              this.HasUnboundActions,
                (this.m_sName = e),
                (this.m_sDescription = t);
              let n = this.m_sInteractionProfile.trim(),
                i = {
                  app_key: this.SelectedApp,
                  controller_type:
                    this.SelectedControllerTypeInfo.controller_type,
                  save_type: o,
                };
              i.binding = {
                name: e,
                description: t,
                action_manifest_version: this.m_SelectedAppActions.version,
                interaction_profile: n,
                category: this.m_SelectedAppActions.category,
                controller_type:
                  this.SelectedControllerTypeInfo.controller_type,
                bindings: this.m_ModifiedBindingSet,
                options: this.m_ModifiedOptions,
                alias_info: this.m_ModifiedAliases,
                simulated_actions: Array.from(
                  this.m_ModifiedSimulatedActions.values(),
                ),
                app_key: this.SelectedApp,
              };
              const s = (0, v.E)(i);
              return (
                console.log(
                  "Saving binding " +
                    e +
                    " for app '" +
                    this.SelectedApp +
                    "'.",
                ),
                new Promise((e, t) => {
                  let n = new L(o, e, t);
                  this.m_OutstandingSaveBindingCalls.push(n),
                    m()
                      .post("/input/savebinding.action", s)
                      .then((e) => {
                        e.data.error
                          ? (console.log(
                              "SaveCurrentBinding failed:",
                              e.data.error,
                            ),
                            t(e.data.error))
                          : console.log("SaveCurrentBinding Successful");
                      })
                      .catch((e) => {
                        t(e);
                      });
                })
              );
            });
          }
          PublishBindingToWorkshop(e) {
            return (0, i.sH)(this, void 0, void 0, function* () {
              let t = { app_key: this.SelectedApp, description: e };
              t.binding = {
                bindings: this.m_ModifiedBindingSet,
                controller_type:
                  this.SelectedControllerTypeInfo.controller_type,
              };
              const o = (0, v.E)(t);
              yield new Promise(function (e, t) {
                m()
                  .post("/input/submitworkshopbinding.action", o)
                  .then((t) => {
                    console.log("PublishBindingToWorkshop response: ", t), e();
                  })
                  .catch((e) => {
                    t(e);
                  });
              });
            });
          }
          OnWebSocketOpen(e) {
            console.log("Websocket connected"),
              (this.m_eWebSocketState = b.eWebSocketState_Connected),
              this.WebSocketSend("input_open"),
              this.m_timerWebSocket && clearTimeout(this.m_timerWebSocket),
              window.addEventListener("beforeunload", () => {
                this.WebSocketSend("input_close");
              });
          }
          OnWebSocketClose(e) {
            console.log("Websocket closed ", e),
              (this.m_eWebSocketState = b.eWebSocketState_Disconnected),
              this.OpenWebSocketToHost();
          }
          WebSocketSend(e) {
            null != this.m_wsWebSocketToServer &&
              1 == this.m_wsWebSocketToServer.readyState &&
              this.m_wsWebSocketToServer.send(e);
          }
          OnWorkshopUploadComplete(e) {
            if (
              (console.log("OnWorkshopUploadComplete: ", e),
              e.app_key != F.SelectedApp)
            )
              return void console.log(
                `Ignoring binding load for an app we aren't viewing. Pending: ${e.app_key}. Current: ${F.SelectedApp}.`,
              );
            if (this.m_OutstandingSaveBindingCalls.length <= 0)
              return void console.log(
                "Got workshop upload result without pending resolve",
              );
            let t = this.m_OutstandingSaveBindingCalls.shift();
            e.success ? (t.resolve(e), this.LoadActionManifest()) : t.reject(e);
          }
          OnPendingFileSaved(e) {
            let t = e.success ? "Success" : e.error;
            console.log(`OnPendingFileSaved: ${t}. ${e}`),
              e.app_key == F.SelectedApp ||
                console.log(
                  `Ignoring pending file saved for an app we aren't viewing. Pending: ${e.app_key}. Current: ${F.SelectedApp}.`,
                );
          }
          get SaveNoticeText() {
            if (this.m_OutstandingSaveBindingCalls.length > 0) {
              let e = !1;
              return (
                this.m_OutstandingSaveBindingCalls.forEach((t) => {
                  ("personal" != t.SaveType && "public" != t.SaveType) ||
                    (e = !0);
                }),
                e ? "#SaveNotice_Uploading" : "#SaveNotice_Saving"
              );
            }
          }
          OnBindingConfigLoaded(e) {
            if (
              (console.log(
                "OnBindingConfigLoaded: ",
                e,
                " selected action set:",
                this.m_sSelectedActionSet,
              ),
              e.app_key != F.SelectedApp)
            )
              return void console.log(
                `Ignoring binding load for an app we aren't viewing. Pending: ${e.app_key}. Current: ${F.SelectedApp}.`,
              );
            if (e.uri != this.m_sLoadedBindingURI)
              return void console.log(
                `Ignoring binding load for an config url ${e.uri} we aren't viewing ${this.m_sLoadedBindingURI}`,
              );
            this.m_ControllerWatchers.clear(),
              (this.m_LoadedBinding = e),
              (this.m_ModifiedBindingSet = g.observable.map());
            let t = (0, p.we)("#unknown_application"),
              o = _.s.GetApp(F.SelectedApp);
            if (
              (o && (t = o.name),
              (this.m_sName = ""),
              (this.m_sDescription = ""),
              (this.m_sInteractionProfile = " "),
              e.binding_config &&
                (e.binding_config.hasOwnProperty("name") &&
                  (this.m_sName = e.binding_config.name),
                e.binding_config.hasOwnProperty("description") &&
                  (this.m_sDescription = e.binding_config.description),
                e.binding_config.hasOwnProperty("interaction_profile") &&
                  (this.m_sInteractionProfile =
                    e.binding_config.interaction_profile)),
              "" == this.m_sName)
            ) {
              let e = F.SelectedControllerTypeInfo,
                o = S.W.LocalizeControllerString(e, e ? e.controller_type : "");
              this.m_sName = (0, p.we)("#BindingUI_SaveDefaultName", t, o);
            }
            e.binding_config &&
              e.binding_config.bindings &&
              (Object.keys(e.binding_config.bindings).forEach((t) => {
                var o, n, i;
                let s = new E();
                (s.chords = e.binding_config.bindings[t].chords),
                  (s.poses = []),
                  null === (o = e.binding_config.bindings[t].poses) ||
                    void 0 === o ||
                    o.forEach((e) => {
                      let t = new I();
                      (t.output = e.output),
                        (t.path = e.path),
                        null != e.parameters &&
                          Object.keys(e.parameters).length > 0 &&
                          ((t.parameters = g.observable.map()),
                          e.hasOwnProperty("parameters") &&
                            Object.keys(e.parameters).forEach((o) => {
                              t.parameters.set(o, e.parameters[o]);
                            })),
                        s.poses.push(t);
                    }),
                  (s.haptics = e.binding_config.bindings[t].haptics),
                  (s.skeleton = []),
                  null === (n = e.binding_config.bindings[t].skeleton) ||
                    void 0 === n ||
                    n.forEach((e) => {
                      let t = new w();
                      (t.output = e.output),
                        (t.path = e.path),
                        null != e.parameters &&
                          Object.keys(e.parameters).length > 0 &&
                          ((t.parameters = g.observable.map()),
                          e.hasOwnProperty("parameters") &&
                            Object.keys(e.parameters).forEach((o) => {
                              t.parameters.set(o, e.parameters[o]);
                            })),
                        s.skeleton.push(t);
                    }),
                  (s.sources = []),
                  null === (i = e.binding_config.bindings[t].sources) ||
                    void 0 === i ||
                    i.forEach((e) => {
                      let t = new A();
                      (t.mode = e.mode),
                        (t.path = e.path),
                        (t.inputs = g.observable.map()),
                        e.hasOwnProperty("inputs") &&
                          Object.keys(e.inputs).forEach((o) => {
                            t.inputs.set(o, e.inputs[o]);
                          }),
                        null != e.parameters &&
                          Object.keys(e.parameters).length > 0 &&
                          ((t.parameters = g.observable.map()),
                          e.hasOwnProperty("parameters") &&
                            Object.keys(e.parameters).forEach((o) => {
                              t.parameters.set(o, e.parameters[o]);
                            })),
                        s.sources.push(t);
                    }),
                  this.m_ModifiedBindingSet.set(t, s);
              }),
              this.m_ModifiedOptions.clear(),
              e.binding_config.options &&
                (Object.keys(e.binding_config.options).forEach((t) => {
                  this.m_ModifiedOptions.set(t, e.binding_config.options[t]);
                }),
                this.ManifestOptions.forEach((e) => {
                  this.m_ModifiedOptions.has(e.name) ||
                    this.m_ModifiedOptions.set(e.name, e.default);
                })),
              this.m_ModifiedAliases.clear(),
              e.binding_config.alias_info &&
                Object.keys(e.binding_config.alias_info).forEach((t) => {
                  this.m_ModifiedAliases.set(t, e.binding_config.alias_info[t]);
                }),
              this.m_ModifiedSimulatedActions.clear(),
              e.binding_config.simulated_actions &&
                e.binding_config.simulated_actions.forEach((e) => {
                  let t = this.ComputeSimulatedActionPathFromId(e.id);
                  this.m_ModifiedSimulatedActions.set(t, e),
                    e.id >= this.m_nNextSimulatedActionId &&
                      (this.m_nNextSimulatedActionId = e.id + 1);
                })),
              this.m_vecBindingSetWatchers.forEach((e) => {
                e();
              });
          }
          QueryBindingList(e, t) {
            return (
              null != this.m_OutstandingQueryResolve &&
                console.warn(
                  "About to start second binding list query when one is already pending",
                  this.m_OutstandingQueryResolve,
                ),
              new Promise((o, n) => {
                (this.m_OutstandingQueryResolve = o),
                  m()
                    .get(
                      `/input/queryworkshopbindings.json?app_key=${e}&controller_type=${t}`,
                    )
                    .then((e) => {
                      console.log("QueryBindingList: ajax request successful");
                    })
                    .catch((e) => {
                      n(e);
                    });
              })
            );
          }
          DeleteBinding(e) {
            null != this.m_OutstandingDeleteResolve &&
              console.warn(
                "About to start second binding delete when one is already pending",
                this.m_OutstandingDeleteResolve,
              );
            let t = { url: e };
            const o = (0, v.E)(t);
            return new Promise((t, n) => {
              (this.m_OutstandingDeleteResolve = t),
                (this.m_sOutstandingDeleteURL = e),
                m()
                  .post("/input/deleteconfig.action", o)
                  .then((e) => {
                    console.log("Delete ajax request successful");
                  })
                  .catch((e) => {
                    n(e);
                  });
            });
          }
          OnBindingDeleteComplete(e) {
            null != this.m_OutstandingDeleteResolve
              ? e.url == this.m_sOutstandingDeleteURL &&
                ((this.m_sOutstandingDeleteURL = void 0),
                this.m_OutstandingDeleteResolve(e),
                (this.m_OutstandingDeleteResolve = void 0),
                console.log("OnDeleteComplete: ", e))
              : console.warn(
                  "Missing outstanding query resolve for binding delete",
                );
          }
          ShouldShowBindingFailureForControllerType(e) {
            if (null == e || "" == e) return !1;
            let t = S.W.GetControllerTypeInfo(e);
            return !!t && !!t.should_show_binding_errors;
          }
          HasBindingUriFailedToLoad(e) {
            return -1 != this.m_rKnownFailedBindingUris.indexOf(e);
          }
          RememberFailedLoadUri(e) {
            this.m_rKnownFailedBindingUris.push(e);
          }
          OnQueryResults(e) {
            console.log("OnQueryResults: ", e),
              null != this.m_OutstandingQueryResolve
                ? (this.m_OutstandingQueryResolve(e),
                  (this.m_OutstandingQueryResolve = void 0))
                : console.warn(
                    "Missing outstanding query resolve for binding query",
                  );
          }
          SelectConfig(e, t, o) {
            if (
              ((this.m_sLoadedBindingURI = o),
              console.log("Selecting config " + o + " for app " + e),
              this.SelectedBindingURL == o)
            )
              return (
                console.debug("Selecting the config we already have set", o),
                new Promise((e, t) => {
                  e();
                })
              );
            let n = { app_key: e, controller_type: t, url: o };
            const i = (0, v.E)(n);
            return (
              null != this.m_OutstandingSelectConfigResolve &&
                console.warn(
                  "About to start second select config when one is already pending",
                  this.m_OutstandingSelectConfigResolve,
                ),
              new Promise((e, t) => {
                (this.m_OutstandingSelectConfigResolve = e),
                  m()
                    .post("/input/selectconfig.action", i)
                    .then((e) => {
                      console.log("selectconfig ajax request successful");
                    })
                    .catch((e) => {
                      t(e);
                    });
              })
            );
          }
          OnSelectConfigComplete(e) {
            null != this.m_OutstandingSelectConfigResolve
              ? (this.m_OutstandingSelectConfigResolve(),
                (this.m_OutstandingSelectConfigResolve = void 0),
                console.log("OnSelectConfigComplete: ", e))
              : e.error_to_show
                ? f.ShowBindingList(e.error_to_show)
                : console.warn(
                    "Missing outstanding query resolve for select config",
                  );
          }
          OnTrackersBindingChanged(e) {
            this.GetTrackerBindings().then((e) => {
              this.m_TrackerBindingSetup = e;
            });
          }
          OnActionManifestReloaded(e) {
            e.app_key == F.SelectedApp && this.ReloadCurrentApp();
          }
          SetBindingURL(e) {
            this.m_sLoadedBindingURI = e;
          }
          OnActionBindingsReloaded(e) {
            this.RefreshInputState();
          }
          GetControllerWatcherForSourceFromControllerType(e, t, o, n) {
            let i = "" + e.controller_type + t + o + n;
            if (!this.m_ControllerWatchers.has(i)) {
              let s = "";
              if ("controller_handed" == e.input_bindingui_mode)
                switch (t) {
                  case 1:
                    s = "/user/hand/left";
                    break;
                  case 2:
                    s = "/user/hand/right";
                }
              else {
                let t = S.W.ConnectedDevices.find(
                  (t) => t.controller_type == e.controller_type,
                );
                t && t.root_path
                  ? (s = t.root_path)
                  : console.log(
                      "Unable to find device path for controller type ",
                      e,
                    );
              }
              this.m_ControllerWatchers.set(i, new R(s, e, t, o, n));
            }
            return this.m_ControllerWatchers.get(i);
          }
          OnWebSocketMessage(e) {
            let t = JSON.parse(e.data);
            if ("jsonid" in t && "vr_input_get_notifications" == t.jsonid)
              for (let e in t.notifications) {
                let o = t.notifications[e];
                switch (o.type) {
                  case "pending_file_saved":
                    this.OnPendingFileSaved(o);
                    break;
                  case "workshop_upload_complete":
                    this.OnWorkshopUploadComplete(o);
                    break;
                  case "query_results":
                    this.OnQueryResults(o);
                    break;
                  case "action_bindings_reloaded":
                    this.OnActionBindingsReloaded(o);
                    break;
                  case "delete_binding_complete":
                    this.OnBindingDeleteComplete(o);
                    break;
                  case "select_config_complete":
                    this.OnSelectConfigComplete(o);
                    break;
                  case "trackers_binding_changed":
                    this.OnTrackersBindingChanged(o);
                    break;
                  case "action_manifest_reloaded":
                    this.OnActionManifestReloaded(o);
                    break;
                  case "refresh_input_state":
                    this.RefreshInputState();
                    break;
                  case "binding_subscription_changed":
                    this.m_nBindingSubscriptionChangedCanary++;
                }
              }
          }
          get BindingConfig() {
            return null == this.m_ModifiedBindingSet
              ? ""
              : (0, v.E)(this.m_ModifiedBindingSet, null, "\t");
          }
          get BindingSubscriptionChangedCanary() {
            return this.m_nBindingSubscriptionChangedCanary;
          }
          GetInteractionProfile() {
            return this.m_sInteractionProfile;
          }
          SetInteractionProfile(e) {
            let t = this.m_sInteractionProfile != e;
            (this.m_sInteractionProfile = e),
              t && this.NotifyWatchersOfChange();
          }
          GetInteractionProfiles() {
            return this.m_SelectedAppActions.interaction_profiles;
          }
          GetSimulatedControllerProperties() {
            var e;
            const t =
              null !== (e = this.GetOptionValue("simulated_controller_type")) &&
              void 0 !== e
                ? e
                : "";
            return {
              strSimulatedControllerType: t,
              strLocalizedSimulatedControllerType:
                this.LocalizeStringForSelectedControllerType(t),
              bIsSimulatingController: t && "none" != t,
              bIsSimulatingHMD: this.GetOptionValue("simulate_hmd"),
              bIsSimulatingRenderModel: this.GetOptionValue(
                "simulate_rendermodel",
              ),
            };
          }
        }
        (0, i.Cg)([g.observable], D.prototype, "m_eWebSocketState", void 0),
          (0, i.Cg)([g.observable], D.prototype, "m_sLoadedBindingURI", void 0),
          (0, i.Cg)([g.observable], D.prototype, "m_LoadedBinding", void 0),
          (0, i.Cg)(
            [g.observable],
            D.prototype,
            "m_ModifiedBindingSet",
            void 0,
          ),
          (0, i.Cg)([g.observable], D.prototype, "m_ModifiedOptions", void 0),
          (0, i.Cg)([g.observable], D.prototype, "m_ModifiedAliases", void 0),
          (0, i.Cg)([g.observable], D.prototype, "m_sName", void 0),
          (0, i.Cg)([g.observable], D.prototype, "m_sDescription", void 0),
          (0, i.Cg)(
            [g.observable],
            D.prototype,
            "m_sInteractionProfile",
            void 0,
          ),
          (0, i.Cg)([g.observable], D.prototype, "m_SelectedApp", void 0),
          (0, i.Cg)(
            [g.observable],
            D.prototype,
            "m_SelectedAppActions",
            void 0,
          ),
          (0, i.Cg)(
            [g.observable],
            D.prototype,
            "m_sSelectedActionSet",
            void 0,
          ),
          (0, i.Cg)(
            [g.observable],
            D.prototype,
            "m_sSelectedControllerType",
            void 0,
          ),
          (0, i.Cg)(
            [g.observable],
            D.prototype,
            "m_TrackerBindingSetup",
            void 0,
          ),
          (0, i.Cg)(
            [g.observable],
            D.prototype,
            "m_OutstandingSaveBindingCalls",
            void 0,
          ),
          (0, i.Cg)(
            [g.observable],
            D.prototype,
            "m_ModifiedSimulatedActions",
            void 0,
          ),
          (0, i.Cg)(
            [g.observable],
            D.prototype,
            "m_nBindingSubscriptionChangedCanary",
            void 0,
          ),
          (0, i.Cg)([h.o], D.prototype, "OpenWebSocketToHost", null),
          (0, i.Cg)([g.computed], D.prototype, "SteamVRUnavailable", null),
          (0, i.Cg)([g.computed], D.prototype, "ActionSets", null),
          (0, i.Cg)([g.computed], D.prototype, "ManifestOptions", null),
          (0, i.Cg)(
            [g.computed],
            D.prototype,
            "SecondaryControllerOptions",
            null,
          ),
          (0, i.Cg)([g.action], D.prototype, "SetOptionValue", null),
          (0, i.Cg)([g.action], D.prototype, "AddSimulatedAction", null),
          (0, i.Cg)(
            [g.action],
            D.prototype,
            "DeleteSimulatedActionByPath",
            null,
          ),
          (0, i.Cg)([g.computed], D.prototype, "SelectedApp", null),
          (0, i.Cg)([g.computed], D.prototype, "SelectedAppActions", null),
          (0, i.Cg)(
            [g.computed],
            D.prototype,
            "CurrentAppCanAccessPrivateInputs",
            null,
          ),
          (0, i.Cg)(
            [g.computed],
            D.prototype,
            "SelectedControllerTypeInfo",
            null,
          ),
          (0, i.Cg)([g.computed], D.prototype, "CurrentBindingSaveType", null),
          (0, i.Cg)(
            [g.computed],
            D.prototype,
            "CurrentBindingActionManifestVersion",
            null,
          ),
          (0, i.Cg)([g.computed], D.prototype, "SelectedActionSet", null),
          (0, i.Cg)(
            [g.computed],
            D.prototype,
            "SelectedActionSetDetails",
            null,
          ),
          (0, i.Cg)(
            [g.computed],
            D.prototype,
            "SelectedActionSetActions",
            null,
          ),
          (0, i.Cg)([h.o], D.prototype, "GetSelectedAppDefaultBinding", null),
          (0, i.Cg)([h.o], D.prototype, "GetActionByName", null),
          (0, i.Cg)([g.computed], D.prototype, "SelectedActionSetPoses", null),
          (0, i.Cg)(
            [g.computed],
            D.prototype,
            "SelectedActionSetHaptics",
            null,
          ),
          (0, i.Cg)(
            [g.computed],
            D.prototype,
            "SelectedActionSetSkeletons",
            null,
          ),
          (0, i.Cg)([g.computed], D.prototype, "SelectedActionSetChords", null),
          (0, i.Cg)(
            [g.computed],
            D.prototype,
            "SelectedActionSetChordCount",
            null,
          ),
          (0, i.Cg)(
            [g.computed],
            D.prototype,
            "SelectedActionSetSources",
            null,
          ),
          (0, i.Cg)(
            [g.computed],
            D.prototype,
            "BSelectedActionSetHasPoses",
            null,
          ),
          (0, i.Cg)(
            [g.computed],
            D.prototype,
            "BSelectedActionSetHasBoundPoses",
            null,
          ),
          (0, i.Cg)(
            [g.computed],
            D.prototype,
            "BSelectedActionSetHasHaptics",
            null,
          ),
          (0, i.Cg)(
            [g.computed],
            D.prototype,
            "BSelectedActionSetHasBoundHaptics",
            null,
          ),
          (0, i.Cg)(
            [g.computed],
            D.prototype,
            "BSelectedActionSetHasSkeletons",
            null,
          ),
          (0, i.Cg)(
            [g.computed],
            D.prototype,
            "BSelectedActionSetHasBoundSkeletons",
            null,
          ),
          (0, i.Cg)([g.action], D.prototype, "ClearSelectedApp", null),
          (0, i.Cg)([g.action], D.prototype, "SetSelectedApp", null),
          (0, i.Cg)([g.action], D.prototype, "SetSelectedController", null),
          (0, i.Cg)([g.action], D.prototype, "SetSelectedActionSet", null),
          (0, i.Cg)(
            [h.o],
            D.prototype,
            "LocalizeStringForSelectedControllerType",
            null,
          ),
          (0, i.Cg)(
            [h.o],
            D.prototype,
            "LocalizePathNameForSelectedControllerType",
            null,
          ),
          (0, i.Cg)(
            [g.computed],
            D.prototype,
            "SelectedControllerTypeLocalizedName",
            null,
          ),
          (0, i.Cg)([g.action], D.prototype, "RegisterBindingWatcher", null),
          (0, i.Cg)([g.action], D.prototype, "UnregisterBindingWatcher", null),
          (0, i.Cg)([g.action], D.prototype, "GetActionBinding", null),
          (0, i.Cg)([h.o], D.prototype, "GetInputModesForSourceType", null),
          (0, i.Cg)([h.o], D.prototype, "GetBooleanInputOptionsForMode", null),
          (0, i.Cg)([h.o], D.prototype, "GetActionBindingsOfType", null),
          (0, i.Cg)(
            [g.computed],
            D.prototype,
            "GetBooleanActionBindings",
            null,
          ),
          (0, i.Cg)(
            [g.computed],
            D.prototype,
            "GetVector1ActionBindings",
            null,
          ),
          (0, i.Cg)(
            [g.computed],
            D.prototype,
            "GetLiteralVector1ActionBindings",
            null,
          ),
          (0, i.Cg)(
            [g.computed],
            D.prototype,
            "GetVector2ActionBindings",
            null,
          ),
          (0, i.Cg)(
            [g.computed],
            D.prototype,
            "GetVector3ActionBindings",
            null,
          ),
          (0, i.Cg)([g.computed], D.prototype, "GetPoseActionBindings", null),
          (0, i.Cg)(
            [g.computed],
            D.prototype,
            "GetHapticsActionBindings",
            null,
          ),
          (0, i.Cg)(
            [g.computed],
            D.prototype,
            "GetSkeletonActionBindings",
            null,
          ),
          (0, i.Cg)([g.computed], D.prototype, "ConfigName", null),
          (0, i.Cg)([g.computed], D.prototype, "ConfigDescription", null),
          (0, i.Cg)([h.o], D.prototype, "GetPoseAction", null),
          (0, i.Cg)([h.o], D.prototype, "GetPoseActionByPath", null),
          (0, i.Cg)([h.o], D.prototype, "GetHapticsAction", null),
          (0, i.Cg)([h.o], D.prototype, "GetHapticsActionByPath", null),
          (0, i.Cg)([h.o], D.prototype, "GetSkeletonAction", null),
          (0, i.Cg)([h.o], D.prototype, "GetSkeletonActionByPath", null),
          (0, i.Cg)([h.o], D.prototype, "NotifyWatchersOfChange", null),
          (0, i.Cg)([g.action], D.prototype, "SetActionForInputModeType", null),
          (0, i.Cg)(
            [g.action],
            D.prototype,
            "SetParameterForInputModeType",
            null,
          ),
          (0, i.Cg)([h.o], D.prototype, "AddActionSetIfRequired", null),
          (0, i.Cg)([g.action], D.prototype, "AddInputModeForSource", null),
          (0, i.Cg)([g.action], D.prototype, "DeleteInputModeForSource", null),
          (0, i.Cg)(
            [g.action],
            D.prototype,
            "SetInputModeForInputSource",
            null,
          ),
          (0, i.Cg)([g.action], D.prototype, "ClearModesForInputPath", null),
          (0, i.Cg)([g.action], D.prototype, "SetInputPathForPose", null),
          (0, i.Cg)([g.action], D.prototype, "SetPoseForInputPath", null),
          (0, i.Cg)([g.action], D.prototype, "AddDefaultPose", null),
          (0, i.Cg)([g.action], D.prototype, "SetInputPathForHaptics", null),
          (0, i.Cg)([g.action], D.prototype, "SetHapticsForInputPath", null),
          (0, i.Cg)([g.action], D.prototype, "AddDefaultHaptics", null),
          (0, i.Cg)([g.action], D.prototype, "SetInputPathForSkeleton", null),
          (0, i.Cg)([g.action], D.prototype, "SetSkeletonForInputPath", null),
          (0, i.Cg)([g.action], D.prototype, "AddDefaultSkeleton", null),
          (0, i.Cg)([g.action], D.prototype, "SetActionForChord", null),
          (0, i.Cg)([g.action], D.prototype, "DeleteChord", null),
          (0, i.Cg)([g.action], D.prototype, "AddChord", null),
          (0, i.Cg)([g.action], D.prototype, "DeleteSourceFromChord", null),
          (0, i.Cg)([g.action], D.prototype, "SetInputTypeForChord", null),
          (0, i.Cg)([g.action], D.prototype, "SetInputSourceForChord", null),
          (0, i.Cg)([g.action], D.prototype, "LoadActionManifest", null),
          (0, i.Cg)([g.computed], D.prototype, "SelectedBindingURL", null),
          (0, i.Cg)([g.computed], D.prototype, "LoadedBindingURL", null),
          (0, i.Cg)([g.computed], D.prototype, "SelectedBindingIsLegacy", null),
          (0, i.Cg)([g.computed], D.prototype, "SelectedBindingIsOpenXR", null),
          (0, i.Cg)([g.computed], D.prototype, "IsSecondaryController", null),
          (0, i.Cg)([g.computed], D.prototype, "TrackerBindings", null),
          (0, i.Cg)([g.action], D.prototype, "GetTrackerBindings", null),
          (0, i.Cg)([h.o], D.prototype, "SetTrackerBinding", null),
          (0, i.Cg)([h.o], D.prototype, "PulseHaptics", null),
          (0, i.Cg)([g.computed], D.prototype, "KnownControllerTypes", null),
          (0, i.Cg)([h.o], D.prototype, "AutosaveBinding", null),
          (0, i.Cg)([h.o], D.prototype, "OnWebSocketOpen", null),
          (0, i.Cg)([h.o], D.prototype, "OnWebSocketClose", null),
          (0, i.Cg)([h.o], D.prototype, "WebSocketSend", null),
          (0, i.Cg)(
            [g.action.bound],
            D.prototype,
            "OnWorkshopUploadComplete",
            null,
          ),
          (0, i.Cg)([h.o], D.prototype, "OnPendingFileSaved", null),
          (0, i.Cg)([g.computed], D.prototype, "SaveNoticeText", null),
          (0, i.Cg)([h.o], D.prototype, "QueryBindingList", null),
          (0, i.Cg)([h.o], D.prototype, "DeleteBinding", null),
          (0, i.Cg)([h.o], D.prototype, "OnBindingDeleteComplete", null),
          (0, i.Cg)(
            [h.o],
            D.prototype,
            "ShouldShowBindingFailureForControllerType",
            null,
          ),
          (0, i.Cg)([h.o], D.prototype, "OnQueryResults", null),
          (0, i.Cg)([h.o], D.prototype, "SelectConfig", null),
          (0, i.Cg)([h.o], D.prototype, "OnSelectConfigComplete", null),
          (0, i.Cg)([h.o], D.prototype, "OnTrackersBindingChanged", null),
          (0, i.Cg)([h.o], D.prototype, "OnActionManifestReloaded", null),
          (0, i.Cg)([h.o], D.prototype, "SetBindingURL", null),
          (0, i.Cg)([h.o], D.prototype, "OnActionBindingsReloaded", null),
          (0, i.Cg)(
            [h.o],
            D.prototype,
            "GetControllerWatcherForSourceFromControllerType",
            null,
          ),
          (0, i.Cg)([h.o], D.prototype, "OnWebSocketMessage", null),
          (0, i.Cg)([g.computed], D.prototype, "BindingConfig", null),
          (0, i.Cg)(
            [g.computed],
            D.prototype,
            "BindingSubscriptionChangedCanary",
            null,
          );
        const F = new D();
        window.controllerBindingStore = F;
        var x = o(7960),
          V = o(3068),
          G = o(5471);
        o(7750);
        class H {
          constructor(e, t, o, n) {
            (this.sValue = e),
              (this.sLocalized = t),
              (this.sRequiredLocalized = o),
              (this.sLocalizedDescription = n);
          }
        }
        class U extends s.Component {
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
                  let o,
                    n,
                    i = "InlineDropdownItem";
                  return (
                    this.props.sValueSelectedItem == e.sValue &&
                      (i += " Selected"),
                    null != e.sRequiredLocalized &&
                      (o = s.createElement(
                        "span",
                        { className: "BindingLabelActionRequirement" },
                        e.sRequiredLocalized,
                      )),
                    null != e.sLocalizedDescription &&
                      (n = s.createElement(
                        G.Ay,
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
                        className: i,
                        onClick: (t) => {
                          this.OnOptionChanged(t, e.sValue);
                        },
                      },
                      e.sLocalized,
                      o,
                      n,
                    )
                  );
                }
              }),
              t =
                "InlineDropdownLabel " +
                (null == this.props.sHeaderClass
                  ? ""
                  : this.props.sHeaderClass),
              o =
                "InlineOptionsDropDownRodal " +
                (null == this.props.sModalClass ? "" : this.props.sModalClass);
            let n = this.props.sLocalizedSelectedItem;
            !n &&
              this.state.sSelectedOption &&
              this.props.vecOptions.forEach((e) => {
                e.sValue == this.state.sSelectedOption && (n = e.sLocalized);
              });
            let i = this.props.bReadOnly ? () => {} : this.Show;
            return s.createElement(
              "div",
              { className: t, onClick: i },
              n &&
                s.createElement(
                  "div",
                  { className: this.props.sMainButtonClass },
                  n,
                ),
              s.createElement(
                a.A,
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
                  className: o,
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
        (0, i.Cg)([h.o], U.prototype, "Show", null),
          (0, i.Cg)([h.o], U.prototype, "Hide", null),
          (0, i.Cg)([h.o], U.prototype, "OnOptionChanged", null);
        let W = class extends s.Component {
          constructor(e) {
            super(e), (this.state = { bShowDeleteConfirmModal: !1 });
          }
          OnDelete() {
            this.setState({ bShowDeleteConfirmModal: !0 });
          }
          OnDeleteConfirmed() {
            this.setState({ bShowDeleteConfirmModal: !1 }),
              this.props.bReadOnly ||
                this.props.controllerWatcher.forEach((e) => {
                  e.DeleteInputMode(this.props.iMode);
                });
          }
          OnDeleteCancel() {
            this.setState({ bShowDeleteConfirmModal: !1 });
          }
          OnSourceModeChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetInputMode(e, this.props.iMode);
            });
          }
          renderDeleteConfirmModal() {
            let e = this.props.controllerWatcher[0];
            return s.createElement(
              a.A,
              {
                visible: this.state.bShowDeleteConfirmModal,
                onClose: this.OnDeleteCancel,
                showCloseButton: !1,
                animation: "fade",
                className: "ModeSettingsModal",
                closeOnEsc: !0,
              },
              this.state.bShowDeleteConfirmModal &&
                s.createElement(
                  "div",
                  { className: "FlexFullHeightColumnCentered" },
                  s.createElement(
                    "div",
                    { className: "Label" },
                    (0, p.we)(
                      "#BindingUI_Mode_Delete_Confirm",
                      (0, p.we)(
                        "#SourceInputMode_" + e.GetMode(this.props.iMode),
                      ),
                      e.GetControllerInputName,
                    ),
                  ),
                  s.createElement(
                    "div",
                    { className: "FlexRow" },
                    s.createElement(
                      "div",
                      {
                        className: "ButtonControl",
                        onClick: this.OnDeleteConfirmed,
                      },
                      (0, p.we)("#Button_Delete"),
                    ),
                    s.createElement(
                      "div",
                      {
                        className: "ButtonControl",
                        onClick: this.OnDeleteCancel,
                      },
                      (0, p.we)("#Button_Cancel"),
                    ),
                  ),
                ),
            );
          }
          render() {
            let e = this.props.controllerWatcher[0];
            if (!this.props.bEditMode)
              return s.createElement(
                "div",
                { className: "FlexRow BindingHeaderWrapper" },
                s.createElement(
                  "div",
                  { className: "Label BindingLabel ReadOnly BindingHeader" },
                  (0, p.we)(
                    "#SourceInputMode_UseAs",
                    (0, p.we)(
                      "#SourceInputMode_" + e.GetMode(this.props.iMode),
                    ),
                  ),
                ),
                !this.props.bReadOnly &&
                  s.createElement("img", {
                    className:
                      "ActionButtonImage SourceModeButtonImage FlexRightAlignChild",
                    src: "images/bindingui/icon_trash.svg",
                    onClick: this.OnDelete,
                  }),
                this.renderDeleteConfirmModal(),
              );
            let t = F.GetInputModesForSourceType(
              e.GetInputSourceType,
              e.GetInputSourceForceSupport,
            );
            if (0 == t.length) return null;
            let o = t.map(
              (e, t) =>
                new H(
                  e,
                  (0, p.we)("#SourceInputMode_" + e),
                  null,
                  (0, p.we)("#SourceInputMode_" + e + "_tooltip"),
                ),
            );
            o.push(new H("none", (0, p.we)("#SourceInputMode_none")));
            let n =
                1 == e.GetButtonSide
                  ? "#BindingUI_LeftHandController"
                  : "#BindingUI_RightHandController",
              i = F.SelectedControllerTypeLocalizedName;
            0 != e.GetButtonSide && (i = (0, p.we)(n, i, ""));
            let l = (0, p.we)(
              "#SourceInputMode_SelectMode",
              i,
              e.GetControllerInputName,
            );
            return s.createElement(
              "div",
              { className: "FlexRow BindingHeaderWrapper" },
              s.createElement(U, {
                sModalTitleString: l,
                vecOptions: o,
                sValueSelectedItem: e.GetMode(this.props.iMode),
                bShowOptionsOnStart: this.props.bShowModeOptionsDropDownOnStart,
                sLocalizedSelectedItem: (0, p.we)(
                  "#SourceInputMode_" + e.GetMode(this.props.iMode),
                ),
                fnOptionSelected: this.OnSourceModeChanged,
              }),
              s.createElement("img", {
                className:
                  "ActionButtonImage SourceModeButtonImage FlexRightAlignChild",
                src: "images/bindingui/icon_trash.svg",
                onClick: this.OnDelete,
              }),
              this.renderDeleteConfirmModal(),
            );
          }
        };
        (0, i.Cg)([h.o], W.prototype, "OnDelete", null),
          (0, i.Cg)([h.o], W.prototype, "OnDeleteConfirmed", null),
          (0, i.Cg)([h.o], W.prototype, "OnDeleteCancel", null),
          (0, i.Cg)([h.o], W.prototype, "OnSourceModeChanged", null),
          (0, i.Cg)([h.o], W.prototype, "renderDeleteConfirmModal", null),
          (W = (0, i.Cg)([r.PA], W));
        class z extends s.Component {
          render() {
            let e =
                null == this.props.SelectedAction
                  ? "none"
                  : this.props.SelectedAction.name,
              t =
                null == this.props.SelectedAction
                  ? (0, p.we)("#SourceInputAction_none")
                  : this.props.SelectedAction.localized_name,
              o = "FlexRow BindingActionWrapper";
            null == this.props.SelectedAction && (o += " None");
            let n = "Label BindingLabel";
            return (
              this.props.bReadOnly && (n += " ReadOnly"),
              s.createElement(
                "div",
                { className: o },
                s.createElement(
                  G.Ay,
                  {
                    content: (0, p.we)(
                      this.props.sLocalizedInputType + "_tooltip",
                    ),
                    theme: "ControllerBindingToolTip",
                  },
                  s.createElement(
                    "div",
                    { className: n },
                    (0, p.we)(this.props.sLocalizedInputType),
                  ),
                ),
                !this.props.bReadOnly &&
                  s.createElement(U, {
                    vecOptions: this.props.vecOptions,
                    sValueSelectedItem: e,
                    sHeaderClass: "BindingLabelAction",
                    sLocalizedSelectedItem: t,
                    fnOptionSelected: this.props.fnOptionSelected,
                  }),
                this.props.bReadOnly &&
                  s.createElement(
                    "div",
                    { className: n + " BindingLabelAction" },
                    t,
                  ),
              )
            );
          }
        }
        class j extends s.Component {
          constructor(e) {
            super(e),
              (this.state = {
                bEditMode: this.props.bStartInEditMode,
                bSettingsVisible: !1,
              });
          }
          componentWillReceiveProps(e) {
            e.bReadOnly &&
              this.state.bEditMode &&
              (this.setState({ bEditMode: !1 }), this.props.ParentEdit(!1)),
              e.sActionSet != this.props.sActionSet && this.LoadDefaults();
          }
          LoadDefaults() {
            if (null == this.defaultProperties) return;
            let e = this.props.controllerWatcher[0];
            e.GetInputSourceClickSupport && e.GetClickAction(this.props.iMode);
            for (let e of this.defaultProperties)
              this.props.controllerWatcher.forEach((t) => {
                let o = t.GetParameter(this.props.iMode, e.mode, e.property);
                (o =
                  null == o
                    ? e.default
                    : "float" == e.type
                      ? parseFloat(o)
                      : "int" == e.type
                        ? parseInt(o)
                        : "bool" == e.type
                          ? "true" == o || "1" == o
                          : o.toString()),
                  (this.state[e.variableName] = o);
              });
          }
          EnsurePropertySet(e) {
            let t = !1;
            for (let o of this.defaultProperties)
              if (o.property == e) {
                (t = !0),
                  this.props.controllerWatcher.forEach((e) => {
                    if (
                      null ==
                      e.GetParameter(this.props.iMode, o.mode, o.property)
                    ) {
                      console.log(
                        "Setting currently unset param to default: ",
                        e.GetParameter(this.props.iMode, o.mode, o.property),
                        this.props.iMode,
                        o.mode,
                        o.property,
                        o.default.toString(),
                      ),
                        e.SetParameter(
                          this.props.iMode,
                          o.mode,
                          o.property,
                          o.default.toString(),
                        );
                      let t = {};
                      (t[o.variableName] = o.default), this.setState(t);
                    }
                  });
                break;
              }
            t ||
              console.log(
                "Tried to ensure property value %s was set, which is not in the property map.",
                e,
              );
          }
          onPropertyChanged(e, t) {
            let o = !1;
            for (let n of this.defaultProperties)
              if (n.property == e) {
                o = !0;
                let e = {};
                (e[n.variableName] = t),
                  this.setState(e),
                  this.props.controllerWatcher.forEach((e) => {
                    e.SetParameter(
                      this.props.iMode,
                      n.mode,
                      n.property,
                      t.toString(),
                    );
                  });
                break;
              }
            o ||
              console.log(
                "Tried to set property %s which is not in the property map.",
                e,
              );
          }
          onPropertyReset(e) {
            return new Promise((t) => {
              for (let o of this.defaultProperties)
                if (o.property == e) {
                  let e = {};
                  (e[o.variableName] = o.default),
                    this.setState(e, t),
                    this.props.controllerWatcher.forEach((e) => {
                      e.SetParameter(
                        this.props.iMode,
                        o.mode,
                        o.property,
                        void 0,
                      );
                    });
                  break;
                }
            });
          }
          OnEdit(e) {
            this.props.bReadOnly ||
              this.state.bEditMode == e ||
              (this.setState({ bEditMode: e }),
              this.props.ParentEdit(e),
              e &&
                this.props.controllerWatcher[0].ClearNewModeIfSet(
                  this.props.iMode,
                ));
          }
          OnShowModeSettings() {
            this.setState({ bSettingsVisible: !0 });
          }
          CloseModeSettings() {
            this.setState({ bSettingsVisible: !1 });
          }
          BModeHasSettings() {
            return !1;
          }
          renderSettingsModal() {
            return s.createElement(
              a.A,
              {
                visible: this.state.bSettingsVisible,
                customStyles: {
                  width: "80%",
                  maxWidth: "40em",
                  height: "fit-content",
                  maxHeight: "90%",
                  display: "flex",
                  padding: "0px",
                },
                onClose: this.CloseModeSettings,
                showCloseButton: !1,
                animation: "fade",
                className: "ModeSettingsModal",
                closeOnEsc: !0,
              },
              this.state.bSettingsVisible && this.renderSettingsContent(),
            );
          }
          renderSettingsContent() {
            return s.createElement("div", null);
          }
          renderFooter() {
            return this.props.bReadOnly
              ? s.createElement("div", {
                  className:
                    "FlexFullHeightColumnCentered SourceModeFooterWrapper",
                })
              : s.createElement(
                  "div",
                  {
                    className:
                      "FlexFullHeightColumnCentered SourceModeFooterWrapper",
                  },
                  s.createElement("hr", { className: "SourceModeFooterHR" }),
                  !this.state.bEditMode &&
                    s.createElement("img", {
                      className:
                        "ActionButtonImage SourceModeButtonImage SourceModeFooterEdit",
                      src: "images/bindingui/icon_edit.svg",
                      onClick: (e) => {
                        this.OnEdit(!this.state.bEditMode);
                      },
                    }),
                  this.state.bEditMode &&
                    s.createElement(
                      "div",
                      {
                        className:
                          "FlexFullWidthRowLeftJustified SourceModeFooterButtons",
                      },
                      s.createElement("img", {
                        className:
                          "ActionButtonImage SourceModeButtonImage SourceModeFooterEdit",
                        src: "images/bindingui/icon_done.svg",
                        onClick: (e) => {
                          this.OnEdit(!this.state.bEditMode);
                        },
                      }),
                      this.BModeHasSettings() &&
                        s.createElement("img", {
                          className:
                            "ActionButtonImage SourceModeButtonImage FlexRightAlignChild",
                          src: "images/bindingui/icon_settings.svg",
                          onClick: this.OnShowModeSettings,
                        }),
                    ),
                );
          }
          renderHeader() {
            let e = this.BModeHasSettings();
            return s.createElement(
              "div",
              null,
              s.createElement(W, {
                controllerWatcher: this.props.controllerWatcher,
                iMode: this.props.iMode,
                bReadOnly: this.props.bReadOnly,
                bEditMode: this.state.bEditMode,
                bShowModeOptionsDropDownOnStart:
                  this.props.bShowModeOptionsDropDownOnStart,
              }),
              e && this.renderSettingsModal(),
            );
          }
          get WrapperClasses() {
            let e = "SourceModeGroup FlexColumn";
            return this.state.bEditMode && (e += " Edit"), e;
          }
          AddNoneItems(e) {
            e.push(new H("-blank", "")),
              e.push(new H("none", (0, p.we)("#SourceInputAction_none")));
          }
          AddBlankItem(e) {
            e.push(new H("-blank", ""));
          }
          AddNoActionsItem(e) {
            e.push(new H("-nonitem", (0, p.we)("#SourceInputAction_NoItems")));
          }
          AddHeaderItem(e, t) {
            e.push(new H("-subHeader", (0, p.we)(t)));
          }
          GetCombinedBooleanVector1DropDownItems() {
            let e = [];
            return (
              this.GetBooleanDropDownItems(e, !1),
              this.GetVector1DropDownItems(e, !1),
              this.AddNoneItems(e),
              e
            );
          }
          GetBooleanDropDownItems(e, t) {
            this.AddHeaderItem(e, "#SourceInputSubHeader_BooleanActions");
            let o = F.GetBooleanActionBindings.map((e, t) =>
              this.GetActionDropDownItem(e),
            );
            null == o || 0 == o.length
              ? this.AddNoActionsItem(e)
              : e.push(...o),
              this.AddBlankItem(e),
              t && this.AddNoneItems(e);
          }
          GetVector1DropDownItems(e, t) {
            this.AddHeaderItem(e, "#SourceInputSubHeader_Vector1Actions");
            let o = F.GetVector1ActionBindings.map((e, t) =>
              this.GetActionDropDownItem(e),
            );
            null == o || 0 == o.length
              ? this.AddNoActionsItem(e)
              : e.push(...o),
              this.AddBlankItem(e),
              t && this.AddNoneItems(e);
          }
          GetVector2DropDownItems(e, t) {
            this.AddHeaderItem(e, "#SourceInputSubHeader_Vector2Actions");
            let o = F.GetVector2ActionBindings.map((e, t) =>
              this.GetActionDropDownItem(e),
            );
            null == o || 0 == o.length
              ? this.AddNoActionsItem(e)
              : e.push(...o),
              this.AddBlankItem(e),
              t && this.AddNoneItems(e);
          }
          GetVector3DropDownItems(e, t) {
            this.AddHeaderItem(e, "#SourceInputSubHeader_Vector3Actions");
            let o = F.GetVector3ActionBindings.map((e, t) =>
              this.GetActionDropDownItem(e),
            );
            null == o || 0 == o.length
              ? this.AddNoActionsItem(e)
              : e.push(...o),
              this.AddBlankItem(e),
              t && this.AddNoneItems(e);
          }
          GetSkeletonDropDownItems(e, t) {
            this.AddHeaderItem(e, "#SourceInputSubHeader_SkeletonActions");
            let o = F.GetSkeletonActionBindings.map((e, t) =>
              this.GetActionDropDownItem(e),
            );
            null == o || 0 == o.length
              ? this.AddNoActionsItem(e)
              : e.push(...o),
              this.AddBlankItem(e),
              t && this.AddNoneItems(e);
          }
          GetPoseDropDownItems(e, t) {
            this.AddHeaderItem(e, "#SourceInputSubHeader_PoseActions");
            let o = F.GetPoseActionBindings.map((e, t) =>
              this.GetActionDropDownItem(e),
            );
            null == o || 0 == o.length
              ? this.AddNoActionsItem(e)
              : e.push(...o),
              this.AddBlankItem(e),
              t && this.AddNoneItems(e);
          }
          GetHapticsDropDownItems(e, t) {
            this.AddHeaderItem(e, "#SourceInputSubHeader_HapticsActions");
            let o = F.GetHapticsActionBindings.map((e, t) =>
              this.GetActionDropDownItem(e),
            );
            null == o || 0 == o.length
              ? this.AddNoActionsItem(e)
              : e.push(...o),
              this.AddBlankItem(e),
              t && this.AddNoneItems(e);
          }
          GetActionDropDownItem(e) {
            let t,
              o = e.localized_name;
            return (
              "mandatory" == e.requirement &&
                (t =
                  " (" + (0, p.we)("#BindingUI_SelectAction_Required") + ")"),
              new H(e.name, o, t)
            );
          }
        }
        (0, i.Cg)([h.o], j.prototype, "onPropertyChanged", null),
          (0, i.Cg)([h.o], j.prototype, "onPropertyReset", null),
          (0, i.Cg)([h.o], j.prototype, "OnEdit", null),
          (0, i.Cg)([h.o], j.prototype, "OnShowModeSettings", null),
          (0, i.Cg)([h.o], j.prototype, "CloseModeSettings", null),
          (0, i.Cg)([h.o], j.prototype, "renderFooter", null),
          (0, i.Cg)([h.o], j.prototype, "renderHeader", null),
          (0, i.Cg)([g.computed], j.prototype, "WrapperClasses", null);
        const q = 0.25,
          $ = q;
        class K extends s.Component {
          render() {
            return s.createElement(
              "div",
              { className: "FlexRow InputSettingsRow" },
              s.createElement(
                G.Ay,
                {
                  content: (0, p.we)(this.props.labelName + "_tooltip"),
                  theme: "ControllerBindingToolTip",
                },
                s.createElement(
                  "label",
                  {
                    className: "InputSettingsLabel",
                    htmlFor: this.props.elementId,
                  },
                  (0, p.we)(this.props.labelName),
                ),
              ),
              s.createElement(
                "div",
                {
                  className:
                    "FlexColumn InputSettingsInputContainer" +
                    (this.props.halfSplit ? " HalfSplit" : ""),
                },
                s.createElement(
                  "div",
                  null,
                  s.createElement("input", {
                    id: this.props.elementId,
                    type: "range",
                    min: this.props.min,
                    max: this.props.max,
                    step: this.props.step,
                    value: this.props.value,
                    onChange: (e) => {
                      this.props.onChange(parseFloat(e.target.value));
                    },
                  }),
                ),
                s.createElement(
                  "div",
                  { className: "Label RangeLabel" },
                  this.props.renderValue(this.props.value),
                ),
              ),
              this.props.onReset &&
                s.createElement(
                  "div",
                  {
                    className: "InputSettingsResetButton",
                    onClick: this.props.onReset,
                  },
                  (0, p.we)("#SourceInputMode_ResetParameterToDefault"),
                ),
            );
          }
        }
        class J extends s.Component {
          render() {
            return s.createElement(
              "div",
              { className: "FlexRow InputSettingsRow" },
              s.createElement(
                G.Ay,
                {
                  content: (0, p.we)(this.props.labelName + "_tooltip"),
                  theme: "ControllerBindingToolTip",
                },
                s.createElement(
                  "label",
                  {
                    className: "InputSettingsLabel",
                    htmlFor: this.props.elementId,
                  },
                  (0, p.we)(this.props.labelName),
                ),
              ),
              s.createElement(
                "div",
                { className: "FlexColumn InputSettingsInputContainer" },
                s.createElement("input", {
                  id: this.props.elementId,
                  type: "checkbox",
                  checked: this.props.value,
                  onChange: (e) => {
                    this.props.onChange(e.target.checked);
                  },
                }),
              ),
              s.createElement(
                "div",
                {
                  className: "InputSettingsResetButton",
                  onClick: this.props.onReset,
                },
                (0, p.we)("#SourceInputMode_ResetParameterToDefault"),
              ),
            );
          }
        }
        class Q extends s.Component {
          render() {
            return s.createElement(
              "div",
              { className: "FlexRow InputSettingsRow" },
              s.createElement(
                G.Ay,
                {
                  content: (0, p.we)(this.props.labelName + "_tooltip"),
                  theme: "ControllerBindingToolTip",
                },
                s.createElement(
                  "label",
                  {
                    className: "InputSettingsLabel",
                    htmlFor: this.props.elementId,
                  },
                  (0, p.we)(this.props.labelName),
                ),
              ),
              s.createElement(
                "div",
                { className: "FlexColumn InputSettingsInputContainer" },
                s.createElement(U, {
                  vecOptions: this.props.vecValues,
                  sValueSelectedItem: this.props.selectedValue,
                  sHeaderClass: "BindingLabelAction",
                  sLocalizedSelectedItem: this.props.selectedValueLocalized,
                  fnOptionSelected: this.props.onChange,
                }),
              ),
              s.createElement(
                "div",
                {
                  className: "InputSettingsResetButton",
                  onClick: this.props.onReset,
                },
                (0, p.we)("#SourceInputMode_ResetParameterToDefault"),
              ),
            );
          }
        }
        let X = class extends j {
          constructor(e) {
            super(e);
            let t = this.props.controllerWatcher[0].GetInputSource,
              o = t.value || t.force ? 0.2 : 0;
            (this.defaultProperties = [
              {
                property: "click_activate_threshold",
                default: q,
                type: "float",
                variableName: "flClickActivateSensitivity",
                mode: "click",
              },
              {
                property: "touch_activate_threshold",
                default: $,
                type: "float",
                variableName: "flTouchActivateSensitivity",
                mode: "touch",
              },
              {
                property: "click_deactivate_threshold",
                default: 0.2,
                type: "float",
                variableName: "flClickDeactivateSensitivity",
                mode: "click",
              },
              {
                property: "touch_deactivate_threshold",
                default: 0.2,
                type: "float",
                variableName: "flTouchDeactivateSensitivity",
                mode: "touch",
              },
              {
                property: "click_initial_state",
                default: !1,
                type: "bool",
                variableName: "bClickButtonInitialState",
                mode: "click",
              },
              {
                property: "touch_initial_state",
                default: !1,
                type: "bool",
                variableName: "bTouchButtonInitialState",
                mode: "touch",
              },
              {
                property: "force_input",
                default: "",
                type: "string",
                variableName: "strSelectedForceInput",
                mode: "click",
              },
              {
                property: "haptic_amplitude",
                default: o,
                type: "float",
                variableName: "flHapticAmplitude",
                mode: "click",
              },
              {
                property: "haptic_frequency",
                default: 20,
                type: "float",
                variableName: "flHapticFrequency",
                mode: "click",
              },
              {
                property: "haptic_duration",
                default: 0,
                type: "float",
                variableName: "flHapticDuration",
                mode: "click",
              },
            ]),
              this.LoadDefaults(),
              this.BModeHasSettings.bind(this),
              (0, V.enableUniqueIds)(this);
          }
          OnClickActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetClickAction(this.props.iMode, e);
            });
          }
          OnTouchActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetTouchAction(this.props.iMode, e);
            });
          }
          BModeHasSettings() {
            return !0;
          }
          renderSliderValue(e) {
            return Math.round(100 * e).toString();
          }
          renderSliderRawValue(e) {
            return e.toString();
          }
          LocalizeForceInputModeString(e) {
            switch (e) {
              case "click":
                return (0, p.we)("#SourceInputMode_Click");
              case "touch":
                return (0, p.we)("#SourceInputMode_Touch");
              case "value":
                return (0, p.we)("#SourceInputMode_Pull");
              case "force":
                return (0, p.we)("#SourceInputMode_Force");
              case "":
                return (0, p.we)("#SourceInputMode_Default");
            }
            return (0, p.we)("#SourceInputMode_Default");
          }
          get BShowClickOptions() {
            let e = this.props.controllerWatcher[0],
              t = e.GetInputSource;
            return (
              (t.value || t.force) && null != e.GetClickAction(this.props.iMode)
            );
          }
          get BShowTouchOptions() {
            let e = this.props.controllerWatcher[0];
            return (
              e.GetInputSourceTouchSupport &&
              null != e.GetTouchAction(this.props.iMode)
            );
          }
          renderSettingsContent() {
            let e,
              t,
              o,
              n = this.props.controllerWatcher[0].GetInputSource,
              i = [];
            n.click &&
              i.push(
                new H("click", this.LocalizeForceInputModeString("click")),
              ),
              n.touch &&
                i.push(
                  new H("touch", this.LocalizeForceInputModeString("touch")),
                ),
              n.value &&
                i.push(
                  new H("value", this.LocalizeForceInputModeString("value")),
                ),
              n.force &&
                i.push(
                  new H("force", this.LocalizeForceInputModeString("force")),
                ),
              i.length > 1 &&
                i.push(new H("", this.LocalizeForceInputModeString("")));
            let l = this.BShowClickOptions,
              r = this.BShowTouchOptions,
              a = "";
            return (
              this.hasOwnProperty("nextUniqueId") && (a = this.nextUniqueId()),
              l &&
                (e = s.createElement(
                  "div",
                  { className: "FlexColumn" },
                  s.createElement(K, {
                    labelName: "#SourceInputMode_ClickActivateThreshold",
                    elementId: a,
                    min: 0,
                    max: 1,
                    step: 0.05,
                    value: this.state.flClickActivateSensitivity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "click_activate_threshold",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "click_activate_threshold",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                  s.createElement(K, {
                    labelName: "#SourceInputMode_ClickDeactivateThreshold",
                    elementId: a,
                    min: 0,
                    max: 1,
                    step: 0.05,
                    value: this.state.flClickDeactivateSensitivity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "click_deactivate_threshold",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "click_deactivate_threshold",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                )),
              r &&
                (t = s.createElement(
                  "div",
                  { className: "FlexColumn" },
                  s.createElement(K, {
                    labelName: "#SourceInputMode_TouchActivateThreshold",
                    elementId: a,
                    min: 0,
                    max: 1,
                    step: 0.05,
                    value: this.state.flTouchActivateSensitivity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "touch_activate_threshold",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "touch_activate_threshold",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                  s.createElement(K, {
                    labelName: "#SourceInputMode_TouchDeactivateThreshold",
                    elementId: a,
                    min: 0,
                    max: 1,
                    step: 0.05,
                    value: this.state.flTouchDeactivateSensitivity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "touch_deactivate_threshold",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "touch_deactivate_threshold",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                )),
              this.props.bToggleButtonMode &&
                (o = [
                  s.createElement(J, {
                    key: "click_initial_state",
                    labelName: "#SourceInputMode_ClickInitialState",
                    elementId: a,
                    value: this.state.bClickButtonInitialState,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "click_initial_state",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "click_initial_state",
                    ),
                  }),
                  s.createElement(J, {
                    key: "touch_initial_state",
                    labelName: "#SourceInputMode_TouchInitialState",
                    elementId: a,
                    value: this.state.bTouchButtonInitialState,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "touch_initial_state",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "touch_initial_state",
                    ),
                  }),
                ]),
              s.createElement(
                "div",
                { className: "InputSettingsModal" },
                s.createElement(
                  "div",
                  { className: "ChordBindingHeader FlexColumn" },
                  s.createElement(
                    "div",
                    { className: "FlexFullWidthRowCentered" },
                    s.createElement("img", {
                      className:
                        "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                      src: "images/bindingui/icon_modal_edit_header.svg",
                    }),
                    s.createElement(
                      "div",
                      { className: "Label Title TitleCenter AllCaps" },
                      (0, p.we)("#BindingSettingsModal_Title"),
                    ),
                  ),
                ),
                e,
                t,
                o,
                i.length > 1 &&
                  s.createElement(Q, {
                    labelName: "#SourceInputMode_ButtonModeInputForce_Click",
                    elementId: a,
                    vecValues: i,
                    selectedValue: this.state.strSelectedForceInput,
                    selectedValueLocalized: this.LocalizeForceInputModeString(
                      this.state.strSelectedForceInput,
                    ),
                    onReset: this.onPropertyReset.bind(this, "force_input"),
                    onChange: this.onPropertyChanged.bind(this, "force_input"),
                  }),
                s.createElement(K, {
                  labelName: "#SourceInputMode_HapticAmplitude",
                  elementId: a,
                  min: 0,
                  max: 1,
                  step: 0.05,
                  value: this.state.flHapticAmplitude,
                  onReset: this.onPropertyReset.bind(this, "haptic_amplitude"),
                  onChange: this.onPropertyChanged.bind(
                    this,
                    "haptic_amplitude",
                  ),
                  renderValue: this.renderSliderValue,
                }),
                s.createElement(K, {
                  labelName: "#SourceInputMode_HapticDuration",
                  elementId: a,
                  min: 0,
                  max: 4,
                  step: 0.1,
                  value: this.state.flHapticDuration,
                  onReset: this.onPropertyReset.bind(this, "haptic_duration"),
                  onChange: this.onPropertyChanged.bind(
                    this,
                    "haptic_duration",
                  ),
                  renderValue: this.renderSliderRawValue,
                }),
                s.createElement(K, {
                  labelName: "#SourceInputMode_HapticFrequency",
                  elementId: a,
                  min: 15,
                  max: 3e3,
                  step: 1,
                  value: this.state.flHapticFrequency,
                  onReset: this.onPropertyReset.bind(this, "haptic_frequency"),
                  onChange: this.onPropertyChanged.bind(
                    this,
                    "haptic_frequency",
                  ),
                  renderValue: this.renderSliderRawValue,
                }),
                s.createElement(
                  "div",
                  {
                    className: "InputSettingsCloseButton Label AllCaps",
                    onClick: this.CloseModeSettings,
                  },
                  (0, p.we)("#Button_Close"),
                ),
              )
            );
          }
          render() {
            let e = this.props.controllerWatcher[0],
              t = this.GetCombinedBooleanVector1DropDownItems();
            return s.createElement(
              "div",
              { className: this.WrapperClasses },
              this.renderHeader(),
              s.createElement(z, {
                sLocalizedInputType: "#SourceInputMode_Click",
                SelectedAction: e.GetClickAction(this.props.iMode),
                vecOptions: t,
                fnOptionSelected: this.OnClickActionChanged,
                bReadOnly: !this.state.bEditMode,
              }),
              e.GetInputSourceTouchSupport &&
                s.createElement(z, {
                  sLocalizedInputType: "#SourceInputMode_Touch",
                  SelectedAction: e.GetTouchAction(this.props.iMode),
                  vecOptions: t,
                  fnOptionSelected: this.OnTouchActionChanged,
                  bReadOnly: !this.state.bEditMode,
                }),
              this.renderFooter(),
            );
          }
        };
        (0, i.Cg)([h.o], X.prototype, "OnClickActionChanged", null),
          (0, i.Cg)([h.o], X.prototype, "OnTouchActionChanged", null),
          (0, i.Cg)([g.computed], X.prototype, "BShowClickOptions", null),
          (0, i.Cg)([g.computed], X.prototype, "BShowTouchOptions", null),
          (X = (0, i.Cg)([r.PA], X));
        let Y = class extends j {
          constructor(e) {
            super(e),
              (this.defaultProperties = [
                {
                  property: "long_press_delay",
                  default: 1,
                  type: "float",
                  variableName: "flLongPressDelay",
                  mode: "click",
                },
                {
                  property: "double_press_delay",
                  default: 0.25,
                  type: "float",
                  variableName: "flDoublePressDelay",
                  mode: "click",
                },
                {
                  property: "click_activate_threshold",
                  default: q,
                  type: "float",
                  variableName: "flClickActivateSensitivity",
                  mode: "click",
                },
                {
                  property: "touch_activate_threshold",
                  default: $,
                  type: "float",
                  variableName: "flTouchActivateSensitivity",
                  mode: "touch",
                },
                {
                  property: "click_deactivate_threshold",
                  default: 0.2,
                  type: "float",
                  variableName: "flClickDeactivateSensitivity",
                  mode: "click",
                },
                {
                  property: "touch_deactivate_threshold",
                  default: 0.2,
                  type: "float",
                  variableName: "flTouchDeactivateSensitivity",
                  mode: "touch",
                },
                {
                  property: "click_initial_state",
                  default: !1,
                  type: "bool",
                  variableName: "bClickButtonInitialState",
                  mode: "click",
                },
                {
                  property: "touch_initial_state",
                  default: !1,
                  type: "bool",
                  variableName: "bTouchButtonInitialState",
                  mode: "touch",
                },
                {
                  property: "force_input",
                  default: "",
                  type: "string",
                  variableName: "strSelectedForceInput",
                  mode: "cick",
                },
                {
                  property: "haptic_amplitude",
                  default: 0.2,
                  type: "float",
                  variableName: "flHapticAmplitude",
                  mode: "click",
                },
                {
                  property: "haptic_frequency",
                  default: 20,
                  type: "float",
                  variableName: "flHapticFrequency",
                  mode: "click",
                },
                {
                  property: "haptic_duration",
                  default: 0,
                  type: "float",
                  variableName: "flHapticDuration",
                  mode: "click",
                },
                {
                  property: "touchy_click",
                  default: !1,
                  type: "bool",
                  variableName: "bTouchyClick",
                  mode: "touch",
                },
              ]),
              this.LoadDefaults();
          }
          get IsComplex() {
            let e = this.props.controllerWatcher[0];
            return !!(
              this.state.bShowAdvanced ||
              e.GetHeldAction(this.props.iMode) ||
              e.GetDoubleAction(this.props.iMode) ||
              e.GetLongAction(this.props.iMode)
            );
          }
          BModeHasSettings() {
            return !0;
          }
          renderSliderValue(e) {
            return Math.round(100 * e).toString();
          }
          renderSliderRawValue(e) {
            return e.toString();
          }
          LocalizeForceInputModeString(e) {
            switch (e) {
              case "click":
                return (0, p.we)("#SourceInputMode_Click");
              case "touch":
                return (0, p.we)("#SourceInputMode_Touch");
              case "value":
                return (0, p.we)("#SourceInputMode_Pull");
              case "force":
                return (0, p.we)("#SourceInputMode_Force");
              case "position":
                return (0, p.we)("#SourceInputMode_Position");
              case "":
                return (0, p.we)("#SourceInputMode_Default");
            }
            return (0, p.we)("#SourceInputMode_Default");
          }
          get BShowClickOptions() {
            let e = this.props.controllerWatcher[0],
              t = this.RInputOptions,
              o = e.GetInputSource;
            return (
              o.value ||
              o.force ||
              "position" == this.state.strSelectedForceInput ||
              (1 == t.length &&
                "position" == t[0] &&
                null != e.GetClickAction(this.props.iMode))
            );
          }
          get BShowTouchOptions() {
            let e = this.props.controllerWatcher[0];
            return (
              e.GetInputSourceTouchSupport &&
              null != e.GetTouchAction(this.props.iMode)
            );
          }
          get RInputOptions() {
            let e = this.props.controllerWatcher[0].GetInputSource,
              t = [];
            return (
              e.click && t.push("click"),
              e.touch && t.push("touch"),
              e.value && t.push("value"),
              e.force && t.push("force"),
              ("joystick" != e.type && "trackpad" != e.type) ||
                t.push("position"),
              t
            );
          }
          renderSettingsContent() {
            let e,
              t,
              o,
              n = this.props.controllerWatcher[0],
              i = (n.GetInputSource, this.RInputOptions),
              l = [];
            i.length > 1 && i.push("");
            for (let e of i)
              l.push(new H(e, this.LocalizeForceInputModeString(e)));
            let r = this.BShowClickOptions,
              a = this.BShowTouchOptions,
              c = "";
            return (
              this.hasOwnProperty("nextUniqueId") && (c = this.nextUniqueId()),
              r &&
                (e = s.createElement(
                  "div",
                  { className: "FlexColumn" },
                  s.createElement(K, {
                    labelName: "#SourceInputMode_ClickActivateThreshold",
                    elementId: c,
                    min: 0,
                    max: 1,
                    step: 0.05,
                    value: this.state.flClickActivateSensitivity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "click_activate_threshold",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "click_activate_threshold",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                  s.createElement(K, {
                    labelName: "#SourceInputMode_ClickDeactivateThreshold",
                    elementId: c,
                    min: 0,
                    max: 1,
                    step: 0.05,
                    value: this.state.flClickDeactivateSensitivity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "click_deactivate_threshold",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "click_deactivate_threshold",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                )),
              a &&
                (t = s.createElement(
                  "div",
                  { className: "FlexColumn" },
                  s.createElement(K, {
                    labelName: "#SourceInputMode_TouchActivateThreshold",
                    elementId: c,
                    min: 0,
                    max: 1,
                    step: 0.05,
                    value: this.state.flTouchActivateSensitivity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "touch_activate_threshold",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "touch_activate_threshold",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                  s.createElement(K, {
                    labelName: "#SourceInputMode_TouchDeactivateThreshold",
                    elementId: c,
                    min: 0,
                    max: 1,
                    step: 0.05,
                    value: this.state.flTouchDeactivateSensitivity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "touch_deactivate_threshold",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "touch_deactivate_threshold",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                )),
              this.props.bToggleButtonMode &&
                (o = [
                  s.createElement(J, {
                    key: "click_initial_state",
                    labelName: "#SourceInputMode_ClickInitialState",
                    elementId: c,
                    value: this.state.bClickButtonInitialState,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "click_initial_state",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "click_initial_state",
                    ),
                  }),
                  s.createElement(J, {
                    key: "touch_initial_state",
                    labelName: "#SourceInputMode_TouchInitialState",
                    elementId: c,
                    value: this.state.bTouchButtonInitialState,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "touch_initial_state",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "touch_initial_state",
                    ),
                  }),
                ]),
              s.createElement(
                "div",
                { className: "InputSettingsModal" },
                s.createElement(
                  "div",
                  { className: "ChordBindingHeader FlexColumn" },
                  s.createElement(
                    "div",
                    { className: "FlexFullWidthRowCentered" },
                    s.createElement("img", {
                      className:
                        "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                      src: "images/bindingui/icon_modal_edit_header.svg",
                    }),
                    s.createElement(
                      "div",
                      { className: "Label Title TitleCenter AllCaps" },
                      (0, p.we)("#BindingSettingsModal_Title"),
                    ),
                  ),
                ),
                e,
                t,
                o,
                l.length > 1 &&
                  s.createElement(Q, {
                    labelName: "#SourceInputMode_ButtonModeInputForce_Click",
                    elementId: c,
                    vecValues: l,
                    selectedValue: this.state.strSelectedForceInput,
                    selectedValueLocalized: this.LocalizeForceInputModeString(
                      this.state.strSelectedForceInput,
                    ),
                    onReset: this.onPropertyReset.bind(this, "force_input"),
                    onChange: this.onPropertyChanged.bind(this, "force_input"),
                  }),
                s.createElement(K, {
                  labelName: "#SourceInputMode_HapticAmplitude",
                  elementId: c,
                  min: 0,
                  max: 1,
                  step: 0.05,
                  value: this.state.flHapticAmplitude,
                  onReset: this.onPropertyReset.bind(this, "haptic_amplitude"),
                  onChange: this.onPropertyChanged.bind(
                    this,
                    "haptic_amplitude",
                  ),
                  renderValue: this.renderSliderValue,
                }),
                s.createElement(K, {
                  labelName: "#SourceInputMode_HapticDuration",
                  elementId: c,
                  min: 0,
                  max: 4,
                  step: 0.1,
                  value: this.state.flHapticDuration,
                  onReset: this.onPropertyReset.bind(this, "haptic_duration"),
                  onChange: this.onPropertyChanged.bind(
                    this,
                    "haptic_duration",
                  ),
                  renderValue: this.renderSliderRawValue,
                }),
                s.createElement(K, {
                  labelName: "#SourceInputMode_HapticFrequency",
                  elementId: c,
                  min: 15,
                  max: 3e3,
                  step: 1,
                  value: this.state.flHapticFrequency,
                  onReset: this.onPropertyReset.bind(this, "haptic_frequency"),
                  onChange: this.onPropertyChanged.bind(
                    this,
                    "haptic_frequency",
                  ),
                  renderValue: this.renderSliderRawValue,
                }),
                "complex" == this.state.sSubMode &&
                  s.createElement(
                    "div",
                    null,
                    s.createElement(K, {
                      labelName: "#SourceInputMode_LongPressDelay",
                      elementId: c,
                      min: 0,
                      max: 1,
                      step: 0.05,
                      value: this.state.flLongPressDelay,
                      onReset: this.onPropertyReset.bind(
                        this,
                        "long_press_delay",
                      ),
                      onChange: this.onPropertyChanged.bind(
                        this,
                        "long_press_delay",
                      ),
                      renderValue: this.renderSliderValue,
                    }),
                    s.createElement(K, {
                      labelName: "#SourceInputMode_DoublePressDelay",
                      elementId: c,
                      min: 0,
                      max: 1,
                      step: 0.05,
                      value: this.state.flDoublePressDelay,
                      onReset: this.onPropertyReset.bind(
                        this,
                        "double_press_delay",
                      ),
                      onChange: this.onPropertyChanged.bind(
                        this,
                        "double_press_delay",
                      ),
                      renderValue: this.renderSliderValue,
                    }),
                  ),
                n.GetInputSourceTouchSupport &&
                  s.createElement(J, {
                    key: "touchy_click",
                    labelName: "#SourceInputMode_TouchyClick",
                    elementId: c,
                    value: this.state.bTouchyClick,
                    onReset: this.onPropertyReset.bind(this, "touchy_click"),
                    onChange: this.onPropertyChanged.bind(this, "touchy_click"),
                  }),
                s.createElement(
                  "div",
                  {
                    className: "InputSettingsCloseButton Label AllCaps",
                    onClick: this.CloseModeSettings,
                  },
                  (0, p.we)("#Button_Close"),
                ),
              )
            );
          }
          OnHeldActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetHeldAction(this.props.iMode, e);
            });
          }
          OnLongActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetLongAction(this.props.iMode, e);
            });
          }
          OnSingleActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetSingleAction(this.props.iMode, e);
            });
          }
          OnDoubleActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetDoubleAction(this.props.iMode, e);
            });
          }
          OnClickActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetClickAction(this.props.iMode, e);
            });
          }
          OnTouchActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetTouchAction(this.props.iMode, e);
            });
          }
          OnToggleComplex() {
            this.state.bEditMode && this.setState({ bShowAdvanced: !0 });
          }
          render() {
            let e = this.props.controllerWatcher[0],
              t = this.GetCombinedBooleanVector1DropDownItems(),
              o = this.IsComplex;
            return s.createElement(
              "div",
              { className: this.WrapperClasses },
              this.renderHeader(),
              o &&
                s.createElement(
                  "div",
                  null,
                  s.createElement(z, {
                    sLocalizedInputType: "#SourceInputMode_Single",
                    SelectedAction: e.GetClickAction(this.props.iMode),
                    vecOptions: t,
                    fnOptionSelected: this.OnClickActionChanged,
                    bReadOnly: !this.state.bEditMode,
                  }),
                  s.createElement(z, {
                    sLocalizedInputType: "#SourceInputMode_Double",
                    SelectedAction: e.GetDoubleAction(this.props.iMode),
                    vecOptions: t,
                    fnOptionSelected: this.OnDoubleActionChanged,
                    bReadOnly: !this.state.bEditMode,
                  }),
                  s.createElement(z, {
                    sLocalizedInputType: "#SourceInputMode_Long",
                    SelectedAction: e.GetLongAction(this.props.iMode),
                    vecOptions: t,
                    fnOptionSelected: this.OnLongActionChanged,
                    bReadOnly: !this.state.bEditMode,
                  }),
                  s.createElement(z, {
                    sLocalizedInputType: "#SourceInputMode_Held",
                    SelectedAction: e.GetHeldAction(this.props.iMode),
                    vecOptions: t,
                    fnOptionSelected: this.OnHeldActionChanged,
                    bReadOnly: !this.state.bEditMode,
                  }),
                  e.GetInputSourceTouchSupport &&
                    s.createElement(z, {
                      sLocalizedInputType: "#SourceInputMode_Touch",
                      SelectedAction: e.GetTouchAction(this.props.iMode),
                      vecOptions: t,
                      fnOptionSelected: this.OnTouchActionChanged,
                      bReadOnly: !this.state.bEditMode,
                    }),
                ),
              !o &&
                s.createElement(
                  "div",
                  null,
                  s.createElement(z, {
                    sLocalizedInputType: "#SourceInputMode_Click",
                    SelectedAction: e.GetClickAction(this.props.iMode),
                    vecOptions: t,
                    fnOptionSelected: this.OnClickActionChanged,
                    bReadOnly: !this.state.bEditMode,
                  }),
                  e.GetInputSourceTouchSupport &&
                    s.createElement(z, {
                      sLocalizedInputType: "#SourceInputMode_Touch",
                      SelectedAction: e.GetTouchAction(this.props.iMode),
                      vecOptions: t,
                      fnOptionSelected: this.OnTouchActionChanged,
                      bReadOnly: !this.state.bEditMode,
                    }),
                  s.createElement(
                    "div",
                    {
                      className:
                        "SourceInputShowMore" +
                        (this.state.bEditMode ? "" : " Disabled"),
                      onClick: this.OnToggleComplex,
                    },
                    (0, p.we)("#SourceInputMode_MoreOptions"),
                  ),
                ),
              this.renderFooter(),
            );
          }
        };
        (0, i.Cg)([g.computed], Y.prototype, "IsComplex", null),
          (0, i.Cg)([g.computed], Y.prototype, "BShowClickOptions", null),
          (0, i.Cg)([g.computed], Y.prototype, "BShowTouchOptions", null),
          (0, i.Cg)([g.computed], Y.prototype, "RInputOptions", null),
          (0, i.Cg)([h.o], Y.prototype, "OnHeldActionChanged", null),
          (0, i.Cg)([h.o], Y.prototype, "OnLongActionChanged", null),
          (0, i.Cg)([h.o], Y.prototype, "OnSingleActionChanged", null),
          (0, i.Cg)([h.o], Y.prototype, "OnDoubleActionChanged", null),
          (0, i.Cg)([h.o], Y.prototype, "OnClickActionChanged", null),
          (0, i.Cg)([h.o], Y.prototype, "OnTouchActionChanged", null),
          (0, i.Cg)([h.o], Y.prototype, "OnToggleComplex", null),
          (Y = (0, i.Cg)([r.PA], Y));
        let Z = class extends j {
          constructor(e) {
            super(e),
              (this.defaultProperties = [
                {
                  property: "long_press_delay",
                  default: 1,
                  type: "float",
                  variableName: "flLongPressDelay",
                  mode: "click",
                },
                {
                  property: "double_press_delay",
                  default: 0.25,
                  type: "float",
                  variableName: "flDoublePressDelay",
                  mode: "click",
                },
              ]),
              this.LoadDefaults();
          }
          BModeHasSettings() {
            return !0;
          }
          renderSliderValue(e) {
            return e.toString();
          }
          renderSettingsContent() {
            this.props.controllerWatcher[0];
            let e = "";
            return (
              this.hasOwnProperty("nextUniqueId") && (e = this.nextUniqueId()),
              s.createElement(
                "div",
                { className: "InputSettingsModal" },
                s.createElement(
                  "div",
                  { className: "ChordBindingHeader FlexColumn" },
                  s.createElement(
                    "div",
                    { className: "FlexFullWidthRowCentered" },
                    s.createElement("img", {
                      className:
                        "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                      src: "images/bindingui/icon_modal_edit_header.svg",
                    }),
                    s.createElement(
                      "div",
                      { className: "Label Title TitleCenter AllCaps" },
                      (0, p.we)("#BindingSettingsModal_Title"),
                    ),
                  ),
                ),
                s.createElement(K, {
                  labelName: "#SourceInputMode_LongPressDelay",
                  elementId: e,
                  min: 0,
                  max: 1,
                  step: 0.05,
                  value: this.state.flLongPressDelay,
                  onReset: this.onPropertyReset.bind(this, "long_press_delay"),
                  onChange: this.onPropertyChanged.bind(
                    this,
                    "long_press_delay",
                  ),
                  renderValue: this.renderSliderValue,
                }),
                s.createElement(K, {
                  labelName: "#SourceInputMode_DoublePressDelay",
                  elementId: e,
                  min: 0,
                  max: 1,
                  step: 0.05,
                  value: this.state.flDoublePressDelay,
                  onReset: this.onPropertyReset.bind(
                    this,
                    "double_press_delay",
                  ),
                  onChange: this.onPropertyChanged.bind(
                    this,
                    "double_press_delay",
                  ),
                  renderValue: this.renderSliderValue,
                }),
                s.createElement(
                  "div",
                  {
                    className: "InputSettingsCloseButton Label AllCaps",
                    onClick: this.CloseModeSettings,
                  },
                  (0, p.we)("#Button_Close"),
                ),
              )
            );
          }
          OnHeldActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetHeldAction(this.props.iMode, e);
            });
          }
          OnLongActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetLongAction(this.props.iMode, e);
            });
          }
          OnSingleActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetSingleAction(this.props.iMode, e);
            });
          }
          OnDoubleActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetDoubleAction(this.props.iMode, e);
            });
          }
          OnClickActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetClickAction(this.props.iMode, e);
            });
          }
          OnTouchActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetTouchAction(this.props.iMode, e);
            });
          }
          render() {
            let e = this.props.controllerWatcher[0],
              t = this.GetCombinedBooleanVector1DropDownItems();
            return s.createElement(
              "div",
              { className: this.WrapperClasses },
              this.renderHeader(),
              s.createElement(
                "div",
                null,
                s.createElement(z, {
                  sLocalizedInputType: "#SourceInputMode_Single",
                  SelectedAction: e.GetSingleAction(this.props.iMode),
                  vecOptions: t,
                  fnOptionSelected: this.OnSingleActionChanged,
                  bReadOnly: !this.state.bEditMode,
                }),
                s.createElement(z, {
                  sLocalizedInputType: "#SourceInputMode_Double",
                  SelectedAction: e.GetDoubleAction(this.props.iMode),
                  vecOptions: t,
                  fnOptionSelected: this.OnDoubleActionChanged,
                  bReadOnly: !this.state.bEditMode,
                }),
                s.createElement(z, {
                  sLocalizedInputType: "#SourceInputMode_Long",
                  SelectedAction: e.GetLongAction(this.props.iMode),
                  vecOptions: t,
                  fnOptionSelected: this.OnLongActionChanged,
                  bReadOnly: !this.state.bEditMode,
                }),
                s.createElement(z, {
                  sLocalizedInputType: "#SourceInputMode_Held",
                  SelectedAction: e.GetHeldAction(this.props.iMode),
                  vecOptions: t,
                  fnOptionSelected: this.OnHeldActionChanged,
                  bReadOnly: !this.state.bEditMode,
                }),
                e.GetInputSourceTouchSupport &&
                  s.createElement(z, {
                    sLocalizedInputType: "#SourceInputMode_Touch",
                    SelectedAction: e.GetTouchAction(this.props.iMode),
                    vecOptions: t,
                    fnOptionSelected: this.OnTouchActionChanged,
                    bReadOnly: !this.state.bEditMode,
                  }),
              ),
              this.renderFooter(),
            );
          }
        };
        (0, i.Cg)([h.o], Z.prototype, "OnHeldActionChanged", null),
          (0, i.Cg)([h.o], Z.prototype, "OnLongActionChanged", null),
          (0, i.Cg)([h.o], Z.prototype, "OnSingleActionChanged", null),
          (0, i.Cg)([h.o], Z.prototype, "OnDoubleActionChanged", null),
          (0, i.Cg)([h.o], Z.prototype, "OnClickActionChanged", null),
          (0, i.Cg)([h.o], Z.prototype, "OnTouchActionChanged", null),
          (Z = (0, i.Cg)([r.PA], Z));
        let ee = class extends j {
          render() {
            return s.createElement(
              "div",
              { className: this.WrapperClasses },
              this.renderHeader(),
              this.renderFooter(),
            );
          }
        };
        ee = (0, i.Cg)([r.PA], ee);
        let te = class extends j {
          constructor(e) {
            super(e),
              (this.defaultProperties = [
                {
                  property: "sub_mode",
                  default:
                    "joystick" ==
                    this.props.controllerWatcher[0].GetInputSourceType
                      ? "touch"
                      : "click",
                  type: "string",
                  variableName: "sSubMode",
                  mode: "click",
                },
                {
                  property: "overlap_pct",
                  default: 50,
                  type: "float",
                  variableName: "flOverlapPct",
                  mode: "click",
                },
                {
                  property: "deadzone_pct",
                  default: 25,
                  type: "float",
                  variableName: "flDeadzonePct",
                  mode: "click",
                },
                {
                  property: "sticky",
                  default: !1,
                  type: "boolean",
                  variableName: "bStickyDpad",
                  mode: "click",
                },
              ]),
              this.LoadDefaults(),
              "dpad" == this.props.sMode && this.EnsurePropertySet("sub_mode");
          }
          BModeHasSettings() {
            return !0;
          }
          renderSliderValue(e) {
            return Math.round(e).toString();
          }
          renderSettingsContent() {
            this.props.controllerWatcher[0];
            let e = "";
            return (
              this.hasOwnProperty("nextUniqueId") && (e = this.nextUniqueId()),
              s.createElement(
                "div",
                { className: "InputSettingsModal" },
                s.createElement(
                  "div",
                  { className: "ChordBindingHeader FlexColumn" },
                  s.createElement(
                    "div",
                    { className: "FlexFullWidthRowCentered" },
                    s.createElement("img", {
                      className:
                        "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                      src: "images/bindingui/icon_modal_edit_header.svg",
                    }),
                    s.createElement(
                      "div",
                      { className: "Label Title TitleCenter AllCaps" },
                      (0, p.we)("#BindingSettingsModal_Title"),
                    ),
                  ),
                ),
                s.createElement(K, {
                  labelName: "#SourceInputMode_OverlapPercent",
                  elementId: e,
                  min: 0,
                  max: 100,
                  step: 5,
                  value: this.state.flOverlapPct,
                  onReset: this.onPropertyReset.bind(this, "overlap_pct"),
                  onChange: this.onPropertyChanged.bind(this, "overlap_pct"),
                  renderValue: this.renderSliderValue,
                }),
                s.createElement(K, {
                  labelName: "#SourceInputMode_DeadzonePercent",
                  elementId: e,
                  min: 0,
                  max: 100,
                  step: 5,
                  value: this.state.flDeadzonePct,
                  onReset: this.onPropertyReset.bind(this, "deadzone_pct"),
                  onChange: this.onPropertyChanged.bind(this, "deadzone_pct"),
                  renderValue: this.renderSliderValue,
                }),
                s.createElement(J, {
                  key: "click_initial_state",
                  labelName: "#SourceInputMode_StickyDpad",
                  elementId: e,
                  value: this.state.bStickyDpad,
                  onReset: this.onPropertyReset.bind(this, "sticky"),
                  onChange: this.onPropertyChanged.bind(this, "sticky"),
                }),
                s.createElement(
                  "div",
                  {
                    className: "InputSettingsCloseButton Label AllCaps",
                    onClick: this.CloseModeSettings,
                  },
                  (0, p.we)("#Button_Close"),
                ),
              )
            );
          }
          OnActionChanged(e, t) {
            this.props.controllerWatcher.forEach((o) => {
              F.SetActionForInputModeType(
                o.GetFullInputPath,
                this.props.iMode,
                e,
                t,
                ["dpad", "dpad_click", "dpad_touch"],
              );
            });
          }
          render() {
            let e = this.props.controllerWatcher[0],
              t = this.GetCombinedBooleanVector1DropDownItems(),
              o = "dpad" == this.props.sMode,
              n = [
                new H("click", (0, p.we)("#SourceInputMode_Click")),
                new H("touch", (0, p.we)("#SourceInputMode_Touch")),
              ],
              i =
                (this.state.sSubMode,
                "click" == this.state.sSubMode
                  ? (0, p.we)("#SourceInputMode_Click")
                  : (0, p.we)("#SourceInputMode_Touch"));
            return s.createElement(
              "div",
              { className: this.WrapperClasses },
              this.renderHeader(),
              o &&
                s.createElement(
                  "div",
                  { className: "FlexRow BindingActionWrapper" },
                  s.createElement(
                    "div",
                    { className: "Label BindingLabel" },
                    (0, p.we)("#SourceInputMode_SubMode"),
                  ),
                  s.createElement(
                    "div",
                    { className: "Label BindingLabel BindingAction" },
                    this.state.bEditMode &&
                      s.createElement(U, {
                        sLocalizedSelectedItem: i,
                        sValueSelectedItem: this.state.sSubMode,
                        vecOptions: n,
                        fnOptionSelected: this.onPropertyChanged.bind(
                          this,
                          "sub_mode",
                        ),
                      }),
                    !this.state.bEditMode && i,
                  ),
                ),
              s.createElement(z, {
                sLocalizedInputType: "#SourceInputMode_North",
                SelectedAction: e.GetNorthAction(this.props.iMode),
                vecOptions: t,
                fnOptionSelected: this.OnActionChanged.bind(this, "north"),
                bReadOnly: !this.state.bEditMode,
              }),
              s.createElement(z, {
                sLocalizedInputType: "#SourceInputMode_East",
                SelectedAction: e.GetEastAction(this.props.iMode),
                vecOptions: t,
                fnOptionSelected: this.OnActionChanged.bind(this, "east"),
                bReadOnly: !this.state.bEditMode,
              }),
              s.createElement(z, {
                sLocalizedInputType: "#SourceInputMode_South",
                SelectedAction: e.GetSouthAction(this.props.iMode),
                vecOptions: t,
                fnOptionSelected: this.OnActionChanged.bind(this, "south"),
                bReadOnly: !this.state.bEditMode,
              }),
              s.createElement(z, {
                sLocalizedInputType: "#SourceInputMode_West",
                SelectedAction: e.GetWestAction(this.props.iMode),
                vecOptions: t,
                fnOptionSelected: this.OnActionChanged.bind(this, "west"),
                bReadOnly: !this.state.bEditMode,
              }),
              s.createElement(z, {
                sLocalizedInputType: "#SourceInputMode_Center",
                SelectedAction: e.GetCenterAction(this.props.iMode),
                vecOptions: t,
                fnOptionSelected: this.OnActionChanged.bind(this, "center"),
                bReadOnly: !this.state.bEditMode,
              }),
              this.renderFooter(),
            );
          }
        };
        (0, i.Cg)([h.o], te.prototype, "OnActionChanged", null),
          (te = (0, i.Cg)([r.PA], te));
        let oe = class extends j {
          constructor(e) {
            super(e);
            let t = this.props.controllerWatcher[0];
            (this.defaultProperties = []),
              "joystick" == this.props.sMode &&
                this.defaultProperties.push(
                  {
                    property: "sticky_click",
                    default: !1,
                    type: "boolean",
                    variableName: "bStickyClick",
                    mode: "joystick",
                  },
                  {
                    property: "sticky_activate_threshold",
                    default: 0.4,
                    type: "float",
                    variableName: "flStickyActivate",
                    mode: "joystick",
                  },
                  {
                    property: "sticky_deactivate_threshold",
                    default: 0.3,
                    type: "float",
                    variableName: "flStickyDeactivate",
                    mode: "joystick",
                  },
                );
            let o = t.GetInputSourceDefaultDeadzone;
            this.defaultProperties.push(
              {
                property: "deadzone_pct",
                default: o,
                type: "float",
                variableName: "flDeadzonePct",
                mode: "joystick",
              },
              {
                property: "maxzone_pct",
                default: 100,
                type: "float",
                variableName: "flMaxzonePct",
                mode: "joystick",
              },
              {
                property: "exponent",
                default: 1,
                type: "float",
                variableName: "flExponent",
                mode: "trackpad",
              },
            ),
              this.LoadDefaults(),
              (this.state.eTrackpadInvertMode = t.GetTrackpadInvertState(
                this.props.iMode,
              ));
          }
          BModeHasSettings() {
            return !0;
          }
          OnTrackpadInvertModeChanged(e, t) {
            let o = this.props.controllerWatcher[0],
              n = o.GetTrackpadInvertState(this.props.iMode);
            switch (e) {
              case "y":
                n = t ? ("x" == n ? "xy" : "y") : "xy" == n ? "x" : "";
                break;
              case "x":
                n = t ? ("y" == n ? "xy" : "x") : "xy" == n ? "y" : "";
            }
            o.SetTrackpadInvertState(this.props.iMode, n),
              this.setState({ eTrackpadInvertMode: n });
          }
          OnTrackpadInvertModeReset() {
            this.setState({ eTrackpadInvertMode: "" });
          }
          renderSettingsContent() {
            this.props.controllerWatcher[0];
            let e = "";
            this.hasOwnProperty("nextUniqueId") && (e = this.nextUniqueId());
            let t = [];
            return (
              "joystick" == this.props.sMode &&
                ((t = [
                  s.createElement(J, {
                    labelName: "#SourceInputMode_StickyClick",
                    elementId: e,
                    key: e,
                    value: this.state.bStickyClick,
                    onReset: this.onPropertyReset.bind(this, "sticky_click"),
                    onChange: this.onPropertyChanged.bind(this, "sticky_click"),
                  }),
                ]),
                this.state.bStickyClick &&
                  (t.push(
                    s.createElement(K, {
                      labelName: "#SourceInputMode_StickyClick_Activate",
                      elementId: e,
                      key: e,
                      min: 0,
                      max: 1,
                      step: 0.05,
                      value: this.state.flStickyActivate,
                      onReset: this.onPropertyReset.bind(
                        this,
                        "sticky_activate_threshold",
                      ),
                      onChange: this.onPropertyChanged.bind(
                        this,
                        "sticky_activate_threshold",
                      ),
                      renderValue: (e) => (e ? e.toString() : "-"),
                    }),
                  ),
                  t.push(
                    s.createElement(K, {
                      labelName: "#SourceInputMode_StickyClick_Deactivate",
                      elementId: e,
                      key: e,
                      min: 0,
                      max: 1,
                      step: 0.05,
                      value: this.state.flStickyDeactivate,
                      onReset: this.onPropertyReset.bind(
                        this,
                        "sticky_deactivate_threshold",
                      ),
                      onChange: this.onPropertyChanged.bind(
                        this,
                        "sticky_deactivate_threshold",
                      ),
                      renderValue: (e) => (e ? e.toString() : "-"),
                    }),
                  ))),
              s.createElement(
                "div",
                { className: "InputSettingsModal" },
                s.createElement(
                  "div",
                  { className: "ChordBindingHeader FlexColumn" },
                  s.createElement(
                    "div",
                    { className: "FlexFullWidthRowCentered" },
                    s.createElement("img", {
                      className:
                        "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                      src: "images/bindingui/icon_modal_edit_header.svg",
                    }),
                    s.createElement(
                      "div",
                      { className: "Label Title TitleCenter AllCaps" },
                      (0, p.we)("#BindingSettingsModal_Title"),
                    ),
                  ),
                ),
                s.createElement(J, {
                  labelName: "#SourceInputMode_InvertYAxis",
                  elementId: e,
                  value:
                    "y" == this.state.eTrackpadInvertMode ||
                    "xy" == this.state.eTrackpadInvertMode,
                  onReset: this.OnTrackpadInvertModeReset,
                  onChange: this.OnTrackpadInvertModeChanged.bind(this, "y"),
                }),
                s.createElement(J, {
                  labelName: "#SourceInputMode_InvertXAxis",
                  elementId: e,
                  value:
                    "x" == this.state.eTrackpadInvertMode ||
                    "xy" == this.state.eTrackpadInvertMode,
                  onReset: this.OnTrackpadInvertModeReset,
                  onChange: this.OnTrackpadInvertModeChanged.bind(this, "x"),
                }),
                s.createElement(K, {
                  labelName: "#SourceInputMode_DeadZone",
                  elementId: e,
                  key: e,
                  min: 0,
                  max: 100,
                  step: 5,
                  value: this.state.flDeadzonePct,
                  onReset: this.onPropertyReset.bind(this, "deadzone_pct"),
                  onChange: this.onPropertyChanged.bind(this, "deadzone_pct"),
                  renderValue: (e) => (e ? e.toString() : "-"),
                }),
                s.createElement(K, {
                  labelName: "#SourceInputMode_MaxZone",
                  elementId: e,
                  key: e,
                  min: 5,
                  max: 100,
                  step: 5,
                  value: this.state.flMaxzonePct,
                  onReset: this.onPropertyReset.bind(this, "maxzone_pct"),
                  onChange: this.onPropertyChanged.bind(this, "maxzone_pct"),
                  renderValue: (e) => (e ? e.toString() : "-"),
                }),
                s.createElement(K, {
                  labelName: "#SourceInputMode_Exponent",
                  elementId: e,
                  key: e,
                  min: 0.25,
                  max: 4,
                  step: 0.05,
                  value: this.state.flExponent,
                  onReset: this.onPropertyReset.bind(this, "exponent"),
                  onChange: this.onPropertyChanged.bind(this, "exponent"),
                  renderValue: (e) => (e ? e.toFixed(2) : "-"),
                }),
                t,
                s.createElement(
                  "div",
                  {
                    className: "InputSettingsCloseButton Label AllCaps",
                    onClick: this.CloseModeSettings,
                  },
                  (0, p.we)("#Button_Close"),
                ),
              )
            );
          }
          OnClickActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetClickAction(this.props.iMode, e);
            });
          }
          OnTouchActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetTouchAction(this.props.iMode, e);
            });
          }
          OnPositionActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetPositionAction(this.props.iMode, e);
            });
          }
          render() {
            let e = this.props.controllerWatcher[0],
              t = this.GetCombinedBooleanVector1DropDownItems(),
              o = [];
            return (
              this.GetVector2DropDownItems(o, !0),
              s.createElement(
                "div",
                { className: this.WrapperClasses },
                this.renderHeader(),
                e.GetInputSourceClickSupport &&
                  s.createElement(z, {
                    sLocalizedInputType: "#SourceInputMode_Click",
                    SelectedAction: e.GetClickAction(this.props.iMode),
                    vecOptions: t,
                    fnOptionSelected: this.OnClickActionChanged,
                    bReadOnly: !this.state.bEditMode,
                  }),
                e.GetInputSourceTouchSupport &&
                  s.createElement(z, {
                    sLocalizedInputType: "#SourceInputMode_Touch",
                    SelectedAction: e.GetTouchAction(this.props.iMode),
                    vecOptions: t,
                    fnOptionSelected: this.OnTouchActionChanged,
                    bReadOnly: !this.state.bEditMode,
                  }),
                s.createElement(z, {
                  sLocalizedInputType: "#SourceInputMode_Position",
                  SelectedAction: e.GetPositionAction(this.props.iMode),
                  vecOptions: o,
                  fnOptionSelected: this.OnPositionActionChanged,
                  bReadOnly: !this.state.bEditMode,
                }),
                this.renderFooter(),
              )
            );
          }
        };
        (0, i.Cg)([h.o], oe.prototype, "OnTrackpadInvertModeChanged", null),
          (0, i.Cg)([h.o], oe.prototype, "OnTrackpadInvertModeReset", null),
          (0, i.Cg)([h.o], oe.prototype, "OnClickActionChanged", null),
          (0, i.Cg)([h.o], oe.prototype, "OnTouchActionChanged", null),
          (0, i.Cg)([h.o], oe.prototype, "OnPositionActionChanged", null),
          (oe = (0, i.Cg)([r.PA], oe));
        let ne = class extends j {
          constructor(e) {
            super(e),
              (this.defaultProperties = [
                {
                  property: "scroll_mode",
                  default: "discrete",
                  type: "string",
                  variableName: "sScrollMode",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_trackpad_aspect_ratio",
                  type: "float",
                  default: 1,
                  variableName: "fSmoothScrollTrackpadAspectRatio",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_multiplier",
                  type: "float",
                  default: 23.3,
                  variableName: "fSmoothScrollMultiplier",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_acceleration_power",
                  type: "float",
                  default: 1.5,
                  variableName: "fSmoothScrollAccelerationPower",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_haptic_notches_per_touchpad",
                  type: "float",
                  default: 16,
                  variableName: "fSmoothScrollHapticNotchesPerTouchpad",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_min_scroll_start_distance",
                  type: "float",
                  default: 0.2,
                  variableName: "fSmoothScrollMinScrollStartDistance",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_min_throw_velocity",
                  type: "float",
                  default: 1,
                  variableName: "fSmoothScrollMinThrowVelocity",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_max_scroll_velocity",
                  type: "float",
                  default: 4,
                  variableName: "fSmoothScrollMaxScrollVelocity",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_deceleration",
                  type: "float",
                  default: 0.975,
                  variableName: "fSmoothScrollDeceleration",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_min_last_velocities_to_average",
                  type: "float",
                  default: 1,
                  variableName: "unSmoothScrollMinLastVelocitiesToAverage",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_max_last_velocities_to_average",
                  type: "float",
                  default: 4,
                  variableName: "unSmoothScrollMaxLastVelocitiesToAverage",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_thrown_termination_velocity",
                  type: "float",
                  default: 1,
                  variableName: "fSmoothScrollThrownTerminationVelocity",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_edge_scroll_threshold",
                  type: "float",
                  default: 0.85,
                  variableName: "fSmoothScrollEdgeScrollThreshold",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_edge_scroll_threshold_vertical_bias",
                  type: "float",
                  default: 0,
                  variableName: "fSmoothScrollEdgeScrollThresholdVerticalBias",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_edge_scroll_velocity",
                  type: "float",
                  default: 0.77,
                  variableName: "fSmoothScrollEdgeScrollVelocity",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_edge_min_swipe",
                  type: "float",
                  default: 0.5,
                  variableName: "fSmoothScrollEdgeMinSwipe",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_min_side_scroll_ratio",
                  type: "float",
                  default: 3,
                  variableName: "fSmoothScrollMinSideScrollRatio",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_joystick_max_scroll_velocity",
                  type: "float",
                  default: 20,
                  variableName: "fSmoothScrollJoystickMaxScrollVelocity",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_joystick_min_input_magnitude",
                  type: "float",
                  default: 0.01,
                  variableName: "fSmoothScrollJoystickMinInputMagnitude",
                  mode: "touch",
                },
                {
                  property: "discrete_scroll_trackpad_globalscalefactor",
                  type: "float",
                  default: 1,
                  variableName: "fDiscreteScrollTrackpadGlobalScaleFactor",
                  mode: "touch",
                },
                {
                  property:
                    "discrete_scroll_trackpad_haptic_on_touchstart_enabled",
                  type: "bool",
                  default: false,
                  variableName:
                    "bDiscreteScrollTrackpadHapticOnTouchStartEnabled",
                  mode: "click",
                },
                {
                  property:
                    "discrete_scroll_trackpad_direct_directionlock_enabled",
                  type: "bool",
                  default: false,
                  variableName:
                    "bDiscreteScrollTrackpadLockGestureDirectionEnabled",
                  mode: "click",
                },
                {
                  property: "discrete_scroll_trackpad_noisethreshold_ontouch",
                  type: "float",
                  default: 0.15,
                  variableName: "fDiscreteScrollTrackpadNoiseReductionOnTouch",
                  mode: "touch",
                },
                {
                  property: "discrete_scroll_trackpad_noisethreshold_onmove",
                  type: "float",
                  default: 0.01,
                  variableName: "fDiscreteScrollTrackpadNoiseReductionOnMove",
                  mode: "touch",
                },
                {
                  property:
                    "discrete_scroll_trackpad_noisethreshold_onreversal",
                  type: "float",
                  default: 0.045,
                  variableName:
                    "fDiscreteScrollTrackpadNoiseReductionOnReversal",
                  mode: "touch",
                },
                {
                  property: "discrete_scroll_trackpad_accumthreshold_ontouch",
                  type: "float",
                  default: 0.78,
                  variableName: "fDiscreteScrollTrackpadAccumThresholdOnTouch",
                  mode: "touch",
                },
                {
                  property: "discrete_scroll_trackpad_accumthreshold_onmove",
                  type: "float",
                  default: 0.28,
                  variableName: "fDiscreteScrollTrackpadAccumThresholdOnMove",
                  mode: "touch",
                },
                {
                  property:
                    "discrete_scroll_trackpad_accumthreshold_onreversal",
                  type: "float",
                  default: 0.84,
                  variableName:
                    "fDiscreteScrollTrackpadAccumThresholdOnReversal",
                  mode: "touch",
                },
                {
                  property: "discrete_scroll_trackpad_flick_enabled",
                  type: "bool",
                  default: true,
                  variableName: "bDiscreteScrollTrackpadFlickEnabled",
                  mode: "click",
                },
                {
                  property: "discrete_scroll_trackpad_flick_threshold",
                  type: "float",
                  default: 0.0025,
                  variableName: "fDiscreteScrollTrackpadFlickThreshold",
                  mode: "touch",
                },
                {
                  property: "discrete_scroll_trackpad_flick_multiplier",
                  type: "float",
                  default: 1,
                  variableName: "fDiscreteScrollTrackpadFlickScrollMultiplier",
                  mode: "touch",
                },
                {
                  property: "discrete_scroll_trackpad_flick_speed",
                  type: "float",
                  default: 0.975,
                  variableName: "fDiscreteScrollTrackpadFlickSpeed",
                  mode: "touch",
                },
                {
                  property: "discrete_scroll_trackpad_slideandhold_enabled",
                  type: "bool",
                  default: true,
                  variableName:
                    "bDiscreteScrollTrackpadSlideAndHoldGestureEnabled",
                  mode: "click",
                },
                {
                  property: "discrete_scroll_trackpad_slideandhold_scalefactor",
                  type: "float",
                  default: 1,
                  variableName:
                    "fDiscreteScrollTrackpadSlideAndHoldScaleFactor",
                  mode: "touch",
                },
                {
                  property:
                    "discrete_scroll_trackpad_slideandhold_pulseratefactor",
                  type: "float",
                  default: 1,
                  variableName:
                    "fDiscreteScrollTrackpadSlideAndHoldPulseRateFactor",
                  mode: "touch",
                },
                {
                  property: "discrete_scroll_trackpad_slideandhold_bordertop",
                  type: "float",
                  default: 0.55,
                  variableName: "fDiscreteScrollTrackpadSlideAndHoldBorderTop",
                  mode: "touch",
                },
                {
                  property:
                    "discrete_scroll_trackpad_slideandhold_borderbottom",
                  type: "float",
                  default: -0.65,
                  variableName:
                    "fDiscreteScrollTrackpadSlideAndHoldBorderBottom",
                  mode: "touch",
                },
                {
                  property:
                    "discrete_scroll_trackpad_slideandhold_hapticenabled",
                  type: "bool",
                  default: true,
                  variableName:
                    "bDiscreteScrollTrackpadSlideAndHoldHapticEnabled",
                  mode: "click",
                },
                {
                  property: "discrete_scroll_joystick_ratefactor",
                  type: "float",
                  default: 1,
                  variableName: "fDiscreteScrollJoystickScrollRate",
                  mode: "touch",
                },
                {
                  property: "discrete_scroll_joystick_scalefactor",
                  type: "float",
                  default: 1,
                  variableName: "fDiscreteScrollJoystickScrollScale",
                  mode: "touch",
                },
                {
                  property: "discrete_scroll_joystick_deadzone_horizontal",
                  type: "float",
                  default: 0.1,
                  variableName:
                    "fDiscreteScrollJoystickScrollDeadzoneHorizontal",
                  mode: "touch",
                },
                {
                  property: "discrete_scroll_joystick_deadzone_vertical",
                  type: "float",
                  default: 0.1,
                  variableName: "fDiscreteScrollJoystickScrollDeadzoneVertical",
                  mode: "touch",
                },
              ]),
              this.LoadDefaults();
          }
          OnSave() {
            this.setState({ bEditMode: !1 });
          }
          OnScrollActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetScrollAction(this.props.iMode, e);
            });
          }
          BModeHasSettings() {
            return !0;
          }
          renderSliderValue(e) {
            return e.toString();
          }
          LocalizeScrollModeString(e) {
            switch (e) {
              case "smooth":
                return (0, p.we)("#SourceInputMode_ScrollMode_Smooth");
              case "discrete":
                return (0, p.we)("#SourceInputMode_ScrollMode_Discrete");
            }
            return (0, p.we)("#SourceInputMode_Default");
          }
          renderSettingsContent() {
            this.props.controllerWatcher[0];
            let e = "";
            this.hasOwnProperty("nextUniqueId") && (e = this.nextUniqueId());
            let t = [
                new H("smooth", this.LocalizeScrollModeString("smooth")),
                new H("discrete", this.LocalizeScrollModeString("discrete")),
              ],
              o = "smooth" === this.state.sScrollMode,
              n =
                "joystick" ==
                this.props.controllerWatcher[0].GetInputSourceType;
            return s.createElement(
              "div",
              { className: "InputSettingsModal" },
              s.createElement(
                "div",
                { className: "ChordBindingHeader FlexColumn" },
                s.createElement(
                  "div",
                  { className: "FlexFullWidthRowCentered" },
                  s.createElement("img", {
                    className:
                      "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                    src: "images/bindingui/icon_modal_edit_header.svg",
                  }),
                  s.createElement(
                    "div",
                    { className: "Label Title TitleCenter AllCaps" },
                    (0, p.we)("#BindingSettingsModal_Title"),
                  ),
                ),
              ),
              s.createElement(
                "div",
                { className: "InputSettingsScrollablePanel" },
                s.createElement(Q, {
                  labelName: "#SourceInputMode_ScrollMode",
                  elementId: e,
                  vecValues: t,
                  selectedValue: this.state.sScrollMode,
                  selectedValueLocalized: this.LocalizeScrollModeString(
                    this.state.sScrollMode,
                  ),
                  onReset: this.onPropertyReset.bind(this, "scroll_mode"),
                  onChange: this.onPropertyChanged.bind(this, "scroll_mode"),
                }),
                o &&
                  !n &&
                  s.createElement(K, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_TrackpadAspectRatio",
                    elementId: e,
                    min: 0.2,
                    max: 5,
                    step: 0.1,
                    value: this.state.fSmoothScrollTrackpadAspectRatio,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_trackpad_aspect_ratio",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_trackpad_aspect_ratio",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  !n &&
                  s.createElement(K, {
                    labelName: "#SourceInputMode_SmoothScroll_Multiplier",
                    elementId: e,
                    min: 0.1,
                    max: 100,
                    step: 0.1,
                    value: this.state.fSmoothScrollMultiplier,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_multiplier",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_multiplier",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  !n &&
                  s.createElement(K, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_AccelerationPower",
                    elementId: e,
                    min: 1,
                    max: 5,
                    step: 0.1,
                    value: this.state.fSmoothScrollAccelerationPower,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_acceleration_power",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_acceleration_power",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  !n &&
                  s.createElement(K, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_NotchesPerTouchpad",
                    elementId: e,
                    min: 1,
                    max: 64,
                    step: 1,
                    value: this.state.fSmoothScrollHapticNotchesPerTouchpad,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_haptic_notches_per_touchpad",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_haptic_notches_per_touchpad",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  !n &&
                  s.createElement(K, {
                    labelName: "#SourceInputMode_SmoothScroll_StartDistance",
                    elementId: e,
                    min: 0.01,
                    max: 1,
                    step: 0.01,
                    value: this.state.fSmoothScrollMinScrollStartDistance,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_min_scroll_start_distance",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_min_scroll_start_distance",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  !n &&
                  s.createElement(K, {
                    labelName: "#SourceInputMode_SmoothScroll_MinThrowVelocity",
                    elementId: e,
                    min: 0.1,
                    max: 5,
                    step: 0.1,
                    value: this.state.fSmoothScrollMinThrowVelocity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_min_throw_velocity",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_min_throw_velocity",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  !n &&
                  s.createElement(K, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_MaxScrollVelocity",
                    elementId: e,
                    min: 0.5,
                    max: 15,
                    step: 0.1,
                    value: this.state.fSmoothScrollMaxScrollVelocity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_max_scroll_velocity",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_max_scroll_velocity",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  !n &&
                  s.createElement(K, {
                    labelName: "#SourceInputMode_SmoothScroll_Deceleration",
                    elementId: e,
                    min: 0.5,
                    max: 1,
                    step: 0.01,
                    value: this.state.fSmoothScrollDeceleration,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_deceleration",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_deceleration",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  !n &&
                  s.createElement(K, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_MinLastVelocitiesToAverage",
                    elementId: e,
                    min: 1,
                    max: 10,
                    step: 1,
                    value: this.state.unSmoothScrollMinLastVelocitiesToAverage,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_min_last_velocities_to_average",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_min_last_velocities_to_average",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  !n &&
                  s.createElement(K, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_MaxLastVelocitiesToAverage",
                    elementId: e,
                    min: 1,
                    max: 20,
                    step: 1,
                    value: this.state.unSmoothScrollMaxLastVelocitiesToAverage,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_max_last_velocities_to_average",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_max_last_velocities_to_average",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  !n &&
                  s.createElement(K, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_ThrownTerminationVelocity",
                    elementId: e,
                    min: 0.1,
                    max: 5,
                    step: 0.1,
                    value: this.state.fSmoothScrollThrownTerminationVelocity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_thrown_termination_velocity",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_thrown_termination_velocity",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  !n &&
                  s.createElement(K, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_EdgeScrollThreshold",
                    elementId: e,
                    min: 0.1,
                    max: 2,
                    step: 0.05,
                    value: this.state.fSmoothScrollEdgeScrollThreshold,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_edge_scroll_threshold",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_edge_scroll_threshold",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  !n &&
                  s.createElement(K, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_EdgeScrollThresholdVerticalBias",
                    elementId: e,
                    min: -1,
                    max: 1,
                    step: 0.01,
                    value:
                      this.state.fSmoothScrollEdgeScrollThresholdVerticalBias,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_edge_scroll_threshold_vertical_bias",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_edge_scroll_threshold_vertical_bias",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  !n &&
                  s.createElement(K, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_EdgeScrollVelocity",
                    elementId: e,
                    min: 0,
                    max: 5,
                    step: 0.01,
                    value: this.state.fSmoothScrollEdgeScrollVelocity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_edge_scroll_velocity",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_edge_scroll_velocity",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  !n &&
                  s.createElement(K, {
                    labelName: "#SourceInputMode_SmoothScroll_EdgeMinSwipe",
                    elementId: e,
                    min: 0,
                    max: 1,
                    step: 0.01,
                    value: this.state.fSmoothScrollEdgeMinSwipe,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_edge_min_swipe",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_edge_min_swipe",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  !n &&
                  s.createElement(K, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_MinSideScrollRatio",
                    elementId: e,
                    min: 1,
                    max: 5,
                    step: 0.5,
                    value: this.state.fSmoothScrollMinSideScrollRatio,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_min_side_scroll_ratio",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_min_side_scroll_ratio",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  n &&
                  s.createElement(K, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_MaxScrollVelocity",
                    elementId: e,
                    min: 0.5,
                    max: 50,
                    step: 0.1,
                    value: this.state.fSmoothScrollJoystickMaxScrollVelocity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_joystick_max_scroll_velocity",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_joystick_max_scroll_velocity",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  n &&
                  s.createElement(K, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_Joystick_MinInputMagnitude",
                    elementId: e,
                    min: 0.005,
                    max: 0.2,
                    step: 0.005,
                    value: this.state.fSmoothScrollJoystickMinInputMagnitude,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_joystick_min_input_magnitude",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_joystick_min_input_magnitude",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                !o &&
                  !n &&
                  s.createElement(K, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0.2,
                    max: 5,
                    step: 0.1,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_GlobalScaleFactor",
                    value: this.state.fDiscreteScrollTrackpadGlobalScaleFactor,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_globalscalefactor",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_globalscalefactor",
                    ),
                  }),
                !o &&
                  !n &&
                  s.createElement(J, {
                    elementId: e,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_HapticOnTouchStart",
                    key: "discrete_scroll_trackpad_haptic_on_touchstart_enabled",
                    value:
                      this.state
                        .bDiscreteScrollTrackpadHapticOnTouchStartEnabled,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_haptic_on_touchstart_enabled",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_haptic_on_touchstart_enabled",
                    ),
                  }),
                !o &&
                  !n &&
                  s.createElement(J, {
                    elementId: e,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_DirectDirectionLock",
                    key: "discrete_scroll_trackpad_direct_directionlock_enabled",
                    value:
                      this.state
                        .bDiscreteScrollTrackpadLockGestureDirectionEnabled,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_direct_directionlock_enabled",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_direct_directionlock_enabled",
                    ),
                  }),
                !o &&
                  !n &&
                  s.createElement(K, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0.01,
                    max: 0.3,
                    step: 0.005,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_NoiseThreshold_OnTouch",
                    value:
                      this.state.fDiscreteScrollTrackpadNoiseReductionOnTouch,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_noisethreshold_ontouch",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_noisethreshold_ontouch",
                    ),
                  }),
                !o &&
                  !n &&
                  s.createElement(K, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0.01,
                    max: 0.3,
                    step: 0.005,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_NoiseThreshold_OnMove",
                    value:
                      this.state.fDiscreteScrollTrackpadNoiseReductionOnMove,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_noisethreshold_onmove",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_noisethreshold_onmove",
                    ),
                  }),
                !o &&
                  !n &&
                  s.createElement(K, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0.01,
                    max: 0.3,
                    step: 0.005,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_NoiseThreshold_OnReversal",
                    value:
                      this.state
                        .fDiscreteScrollTrackpadNoiseReductionOnReversal,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_noisethreshold_onreversal",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_noisethreshold_onreversal",
                    ),
                  }),
                !o &&
                  !n &&
                  s.createElement(K, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0.1,
                    max: 1,
                    step: 0.01,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_AccumThreshold_OnTouch",
                    value:
                      this.state.fDiscreteScrollTrackpadAccumThresholdOnTouch,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_accumthreshold_ontouch",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_accumthreshold_ontouch",
                    ),
                  }),
                !o &&
                  !n &&
                  s.createElement(K, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0.1,
                    max: 1,
                    step: 0.01,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_AccumThreshold_OnMove",
                    value:
                      this.state.fDiscreteScrollTrackpadAccumThresholdOnMove,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_accumthreshold_onmove",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_accumthreshold_onmove",
                    ),
                  }),
                !o &&
                  !n &&
                  s.createElement(K, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0.1,
                    max: 1,
                    step: 0.01,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_AccumThreshold_OnReversal",
                    value:
                      this.state
                        .fDiscreteScrollTrackpadAccumThresholdOnReversal,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_accumthreshold_onreversal",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_accumthreshold_onreversal",
                    ),
                  }),
                !o &&
                  !n &&
                  s.createElement(J, {
                    elementId: e,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_FlickEnabled",
                    key: "discrete_scroll_trackpad_flick_enabled",
                    value: this.state.bDiscreteScrollTrackpadFlickEnabled,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_flick_enabled",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_flick_enabled",
                    ),
                  }),
                !o &&
                  !n &&
                  s.createElement(K, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0.001,
                    max: 0.1,
                    step: 0.001,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_FlickThreshold",
                    value: this.state.fDiscreteScrollTrackpadFlickThreshold,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_flick_threshold",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_flick_threshold",
                    ),
                  }),
                !o &&
                  !n &&
                  s.createElement(K, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0.1,
                    max: 3,
                    step: 0.1,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_FlickScrollMultiplier",
                    value:
                      this.state.fDiscreteScrollTrackpadFlickScrollMultiplier,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_flick_multiplier",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_flick_multiplier",
                    ),
                  }),
                !o &&
                  !n &&
                  s.createElement(K, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0.9,
                    max: 0.999,
                    step: 0.001,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_FlickThrowSpeed",
                    value: this.state.fDiscreteScrollTrackpadFlickSpeed,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_flick_speed",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_flick_speed",
                    ),
                  }),
                !o &&
                  !n &&
                  s.createElement(J, {
                    elementId: e,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_SlideAndHoldEnabled",
                    key: "discrete_scroll_trackpad_slideandhold_enabled",
                    value:
                      this.state
                        .bDiscreteScrollTrackpadSlideAndHoldGestureEnabled,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_slideandhold_enabled",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_slideandhold_enabled",
                    ),
                  }),
                !o &&
                  !n &&
                  s.createElement(K, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0.02,
                    max: 4,
                    step: 0.01,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_SlideAndHoldScaleFactor",
                    value:
                      this.state.fDiscreteScrollTrackpadSlideAndHoldScaleFactor,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_slideandhold_scalefactor",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_slideandhold_scalefactor",
                    ),
                  }),
                !o &&
                  !n &&
                  s.createElement(K, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0.2,
                    max: 4,
                    step: 0.1,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_SlideAndHoldPulseRate",
                    value:
                      this.state
                        .fDiscreteScrollTrackpadSlideAndHoldPulseRateFactor,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_slideandhold_pulseratefactor",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_slideandhold_pulseratefactor",
                    ),
                  }),
                !o &&
                  !n &&
                  s.createElement(K, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0,
                    max: 1,
                    step: 0.01,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_SlideAndHoldBorderTop",
                    value:
                      this.state.fDiscreteScrollTrackpadSlideAndHoldBorderTop,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_slideandhold_bordertop",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_slideandhold_bordertop",
                    ),
                  }),
                !o &&
                  !n &&
                  s.createElement(K, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: -1,
                    max: 0,
                    step: 0.01,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_SlideAndHoldBorderBottom",
                    value:
                      this.state
                        .fDiscreteScrollTrackpadSlideAndHoldBorderBottom,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_slideandhold_borderbottom",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_slideandhold_borderbottom",
                    ),
                  }),
                !o &&
                  !n &&
                  s.createElement(J, {
                    elementId: e,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_SlideAndHoldHapticEnabled",
                    key: "discrete_scroll_trackpad_slideandhold_hapticenabled",
                    value:
                      this.state
                        .bDiscreteScrollTrackpadSlideAndHoldHapticEnabled,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_slideandhold_hapticenabled",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_slideandhold_hapticenabled",
                    ),
                  }),
                !o &&
                  n &&
                  s.createElement(K, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0.01,
                    max: 4,
                    step: 0.01,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Joystick_ScrollRateFactor",
                    value: this.state.fDiscreteScrollJoystickScrollRate,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_joystick_ratefactor",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_joystick_ratefactor",
                    ),
                  }),
                !o &&
                  n &&
                  s.createElement(K, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0.01,
                    max: 4,
                    step: 0.01,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Joystick_ScrollScaleFactor",
                    value: this.state.fDiscreteScrollJoystickScrollScale,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_joystick_scalefactor",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_joystick_scalefactor",
                    ),
                  }),
                !o &&
                  n &&
                  s.createElement(K, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0.01,
                    max: 0.5,
                    step: 0.01,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Joystick_Deadzone_Horizontal",
                    value:
                      this.state
                        .fDiscreteScrollJoystickScrollDeadzoneHorizontal,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_joystick_deadzone_horizontal",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_joystick_deadzone_horizontal",
                    ),
                  }),
                !o &&
                  n &&
                  s.createElement(K, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0.01,
                    max: 0.5,
                    step: 0.01,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Joystick_Deadzone_Vertical",
                    value:
                      this.state.fDiscreteScrollJoystickScrollDeadzoneVertical,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_joystick_deadzone_vertical",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_joystick_deadzone_vertical",
                    ),
                  }),
              ),
              s.createElement(
                "div",
                {
                  className: "InputSettingsCloseButton Label AllCaps",
                  onClick: this.CloseModeSettings,
                },
                (0, p.we)("#Button_Close"),
              ),
            );
          }
          render() {
            let e = this.props.controllerWatcher[0],
              t = [];
            return (
              this.GetVector2DropDownItems(t, !0),
              s.createElement(
                "div",
                { className: this.WrapperClasses },
                this.renderHeader(),
                s.createElement(z, {
                  sLocalizedInputType: "#SourceInputMode_Scroll",
                  SelectedAction: e.GetScrollAction(this.props.iMode),
                  vecOptions: t,
                  fnOptionSelected: this.OnScrollActionChanged,
                  bReadOnly: !this.state.bEditMode,
                }),
                this.renderFooter(),
              )
            );
          }
        };
        (0, i.Cg)([h.o], ne.prototype, "OnSave", null),
          (0, i.Cg)([h.o], ne.prototype, "OnScrollActionChanged", null),
          (ne = (0, i.Cg)([r.PA], ne));
        let ie = class extends j {
          OnClickActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetClickAction(this.props.iMode, e);
            });
          }
          OnTouchActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetTouchAction(this.props.iMode, e);
            });
          }
          OnPullActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetPullAction(this.props.iMode, e);
            });
          }
          render() {
            let e = this.props.controllerWatcher[0],
              t = this.GetCombinedBooleanVector1DropDownItems(),
              o = [];
            return (
              this.GetVector1DropDownItems(o, !0),
              s.createElement(
                "div",
                { className: this.WrapperClasses },
                this.renderHeader(),
                e.GetInputSourceClickSupport &&
                  s.createElement(z, {
                    sLocalizedInputType: "#SourceInputMode_TriggerClick",
                    SelectedAction: e.GetClickAction(this.props.iMode),
                    vecOptions: t,
                    fnOptionSelected: this.OnClickActionChanged,
                    bReadOnly: !this.state.bEditMode,
                  }),
                e.GetInputSourceTouchSupport &&
                  s.createElement(z, {
                    sLocalizedInputType: "#SourceInputMode_Touch",
                    SelectedAction: e.GetTouchAction(this.props.iMode),
                    vecOptions: t,
                    fnOptionSelected: this.OnTouchActionChanged,
                    bReadOnly: !this.state.bEditMode,
                  }),
                s.createElement(z, {
                  sLocalizedInputType: "#SourceInputMode_Pull",
                  SelectedAction: e.GetPullAction(this.props.iMode),
                  vecOptions: o,
                  fnOptionSelected: this.OnPullActionChanged,
                  bReadOnly: !this.state.bEditMode,
                }),
                this.renderFooter(),
              )
            );
          }
        };
        (0, i.Cg)([h.o], ie.prototype, "OnClickActionChanged", null),
          (0, i.Cg)([h.o], ie.prototype, "OnTouchActionChanged", null),
          (0, i.Cg)([h.o], ie.prototype, "OnPullActionChanged", null),
          (ie = (0, i.Cg)([r.PA], ie));
        let se = class extends j {
          OnForceActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetForceAction(this.props.iMode, e);
            });
          }
          render() {
            let e = this.props.controllerWatcher[0],
              t = [];
            return (
              this.GetVector1DropDownItems(t, !0),
              s.createElement(
                "div",
                { className: this.WrapperClasses },
                this.renderHeader(),
                e.GetInputSourceForceSupport &&
                  s.createElement(z, {
                    sLocalizedInputType: "#SourceInputMode_Force",
                    SelectedAction: e.GetForceAction(this.props.iMode),
                    vecOptions: t,
                    fnOptionSelected: this.OnForceActionChanged,
                    bReadOnly: !this.state.bEditMode,
                  }),
                this.renderFooter(),
              )
            );
          }
        };
        (0, i.Cg)([h.o], se.prototype, "OnForceActionChanged", null),
          (se = (0, i.Cg)([r.PA], se));
        let le = class extends j {
          constructor(e) {
            super(e),
              (this.defaultProperties = [
                {
                  property: "value",
                  default: !0,
                  type: "string",
                  variableName: "sConstantBool",
                  mode: "static_bool",
                },
              ]),
              this.LoadDefaults(),
              this.BModeHasSettings.bind(this),
              (0, V.enableUniqueIds)(this);
          }
          GetActionArity() {
            return this.props.controllerWatcher[0].GetValueAction(
              this.props.iMode,
            )
              ? 1
              : 0;
          }
          renderSettingsContent() {
            this.props.controllerWatcher[0];
            let e = "";
            this.hasOwnProperty("nextUniqueId") && (e = this.nextUniqueId());
            let t = [];
            t.push(new H("true", (0, p.we)("#True"))),
              t.push(new H("false", (0, p.we)("#False"))),
              console.log(
                "this.state.sConstantBool: " + this.state.sConstantBool,
              );
            this.GetActionArity();
            return s.createElement(
              "div",
              { className: "InputSettingsModal" },
              s.createElement(
                "div",
                { className: "ChordBindingHeader FlexColumn" },
                s.createElement(
                  "div",
                  { className: "FlexFullWidthRowCentered" },
                  s.createElement("img", {
                    className:
                      "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                    src: "images/bindingui/icon_modal_edit_header.svg",
                  }),
                  s.createElement(
                    "div",
                    { className: "Label Title TitleCenter AllCaps" },
                    (0, p.we)("#BindingSettingsModal_Title"),
                  ),
                ),
              ),
              s.createElement(
                "div",
                { className: "FlexColumn" },
                s.createElement(Q, {
                  labelName: "#SourceInputMode_StaticBool_Value",
                  elementId: e,
                  vecValues: t,
                  selectedValue: this.state.sConstantBool,
                  selectedValueLocalized: (0, p.we)(
                    "true" == this.state.sConstantBool ? "#True" : "#False",
                  ),
                  onReset: this.onPropertyReset.bind(this, "value"),
                  onChange: this.onPropertyChanged.bind(this, "value"),
                }),
              ),
              s.createElement(
                "div",
                {
                  className: "InputSettingsCloseButton Label AllCaps",
                  onClick: this.CloseModeSettings,
                },
                (0, p.we)("#Button_Close"),
              ),
            );
          }
          BModeHasSettings() {
            return !0;
          }
          OnConstantActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetConstantAction(this.props.iMode, e);
            });
          }
          render() {
            let e = this.props.controllerWatcher[0],
              t = [];
            return (
              this.GetBooleanDropDownItems(t, !0),
              s.createElement(
                "div",
                { className: this.WrapperClasses },
                this.renderHeader(),
                s.createElement(z, {
                  sLocalizedInputType: "#SourceInputMode_StaticBool",
                  SelectedAction: e.GetConstantAction(this.props.iMode),
                  vecOptions: t,
                  fnOptionSelected: this.OnConstantActionChanged,
                  bReadOnly: !this.state.bEditMode,
                }),
                this.renderFooter(),
              )
            );
          }
        };
        (0, i.Cg)([h.o], le.prototype, "OnConstantActionChanged", null),
          (le = (0, i.Cg)([r.PA], le));
        let re = class extends j {
          constructor(e) {
            super(e),
              (this.defaultProperties = [
                {
                  property: "capsense_enable_threshold",
                  default: 0.8,
                  type: "float",
                  variableName: "flCapsenseEnableThreshold",
                  mode: "grab",
                },
                {
                  property: "value_hold_threshold",
                  default: 0.7,
                  type: "float",
                  variableName: "flGrabThreshold",
                  mode: "grab",
                },
                {
                  property: "value_release_threshold",
                  default: 0.65,
                  type: "float",
                  variableName: "flReleaseThreshold",
                  mode: "grab",
                },
                {
                  property: "force_hold_threshold",
                  default: 0.1,
                  type: "float",
                  variableName: "flForceHoldThreshold",
                  mode: "grab",
                },
                {
                  property: "force_release_threshold",
                  default: 0.05,
                  type: "float",
                  variableName: "flForceReleaseThreshold",
                  mode: "grab",
                },
                {
                  property: "downgrade_speed",
                  default: 1,
                  type: "float",
                  variableName: "flDowngradeSpeed",
                  mode: "grab",
                },
                {
                  property: "drop_speed",
                  default: 0.1,
                  type: "float",
                  variableName: "flDropSpeed",
                  mode: "grab",
                },
                {
                  property: "haptic_amplitude",
                  default: 0,
                  type: "float",
                  variableName: "flHapticAmplitude",
                  mode: "grab",
                },
                {
                  property: "haptic_frequency",
                  default: 20,
                  type: "float",
                  variableName: "flHapticFrequency",
                  mode: "grab",
                },
                {
                  property: "haptic_duration",
                  default: 0,
                  type: "float",
                  variableName: "flHapticDuration",
                  mode: "grab",
                },
              ]),
              this.LoadDefaults(),
              this.BModeHasSettings.bind(this),
              (0, V.enableUniqueIds)(this);
          }
          OnGrabActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetGrabAction(this.props.iMode, e);
            });
          }
          BModeHasSettings() {
            return !0;
          }
          renderNormalizedSliderValue(e) {
            return Math.round(100 * e).toString();
          }
          renderSliderRawValue(e) {
            return e.toString();
          }
          renderNormalizedSplitSliderValue(e, t, o) {
            let n = (e > 1 ? o : t) + ": ";
            return (e = e > 1 ? e - 1 : e), n + Math.round(100 * e).toString();
          }
          renderSpeedSliderValue(e) {
            return (
              e.toString() + " " + (0, p.we)("#MetersPerSecond_Abbreviation")
            );
          }
          renderSettingsContent() {
            let e = this.props.controllerWatcher[0],
              t = "pinch" == e.GetInputSourceType,
              o = (0, p.we)(
                "pinch" == e.GetInputSourceType
                  ? "#SourceInputMode_Pull"
                  : "#SourceInputMode_Proximity",
              ),
              n = !("pinch" == e.GetInputSourceType),
              l = "";
            return (
              this.hasOwnProperty("nextUniqueId") && (l = this.nextUniqueId()),
              s.createElement(
                "div",
                { className: "InputSettingsModal" },
                s.createElement(
                  "div",
                  { className: "ChordBindingHeader FlexColumn" },
                  s.createElement(
                    "div",
                    { className: "FlexFullWidthRowCentered" },
                    s.createElement("img", {
                      className:
                        "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                      src: "images/bindingui/icon_modal_edit_header.svg",
                    }),
                    s.createElement(
                      "div",
                      { className: "Label Title TitleCenter AllCaps" },
                      (0, p.we)("#BindingSettingsModal_Title"),
                    ),
                  ),
                ),
                s.createElement(
                  "div",
                  { className: "FlexColumn" },
                  t &&
                    s.createElement(K, {
                      labelName: "#SourceInputMode_CapsenseEnableThreshold",
                      elementId: l,
                      min: 0,
                      max: 1,
                      step: 0.05,
                      value: this.state.flCapsenseEnableThreshold,
                      onReset: this.onPropertyReset.bind(
                        this,
                        "capsense_enable_threshold",
                      ),
                      onChange: this.onPropertyChanged.bind(
                        this,
                        "capsense_enable_threshold",
                      ),
                      renderValue: this.renderNormalizedSliderValue,
                    }),
                  s.createElement(K, {
                    labelName: "#SourceInputMode_GrabThreshold",
                    elementId: l,
                    halfSplit: n,
                    min: 0,
                    max: n ? 2 : 1,
                    step: 0.05,
                    value: this.state.flGrabThreshold,
                    onReset: () =>
                      (0, i.sH)(this, void 0, void 0, function* () {
                        yield this.onPropertyReset("value_hold_threshold");
                        const e = this.state.flGrabThreshold;
                        this.state.flReleaseThreshold > e &&
                          this.setState({ flReleaseThreshold: e });
                      }),
                    onChange: (e) => {
                      this.state.flReleaseThreshold > e &&
                        this.setState({ flReleaseThreshold: e }),
                        this.onPropertyChanged("value_hold_threshold", e);
                    },
                    renderValue: (e) =>
                      this.renderNormalizedSplitSliderValue(
                        e,
                        o,
                        (0, p.we)("#SourceInputMode_Force"),
                      ),
                  }),
                  s.createElement(K, {
                    labelName: "#SourceInputMode_ReleaseThreshold",
                    elementId: l,
                    halfSplit: n,
                    min: 0,
                    max: n ? 2 : 1,
                    step: 0.05,
                    value: this.state.flReleaseThreshold,
                    onReset: () =>
                      (0, i.sH)(this, void 0, void 0, function* () {
                        yield this.onPropertyReset("value_release_threshold");
                        const e = this.state.flReleaseThreshold;
                        this.state.flGrabThreshold < e &&
                          this.setState({ flGrabThreshold: e });
                      }),
                    onChange: (e) => {
                      this.state.flGrabThreshold < e &&
                        this.setState({ flGrabThreshold: e }),
                        this.onPropertyChanged("value_release_threshold", e);
                    },
                    renderValue: (e) =>
                      this.renderNormalizedSplitSliderValue(
                        e,
                        o,
                        (0, p.we)("#SourceInputMode_Force"),
                      ),
                  }),
                  s.createElement(
                    "div",
                    {
                      className: "InputSettingsCloseButton Label AllCaps",
                      onClick: () => {
                        this.setState({
                          bShowAdvanced: !this.state.bShowAdvanced,
                        });
                      },
                    },
                    (0, p.we)(
                      this.state.bShowAdvanced
                        ? "#DisplaySettings_HideAdvancedSettings"
                        : "#DisplaySettings_ShowAdvancedSettings",
                    ),
                  ),
                  this.state.bShowAdvanced &&
                    s.createElement(
                      "div",
                      null,
                      !1,
                      s.createElement(K, {
                        labelName: "#SourceInputMode_ForceHoldThreshold",
                        elementId: l,
                        min: 0,
                        max: 1,
                        step: 0.05,
                        value: this.state.flForceHoldThreshold,
                        onReset: this.onPropertyReset.bind(
                          this,
                          "force_hold_threshold",
                        ),
                        onChange: this.onPropertyChanged.bind(
                          this,
                          "force_hold_threshold",
                        ),
                        renderValue: this.renderNormalizedSliderValue,
                      }),
                      s.createElement(K, {
                        labelName: "#SourceInputMode_ForceReleaseThreshold",
                        elementId: l,
                        min: 0,
                        max: 1,
                        step: 0.05,
                        value: this.state.flForceReleaseThreshold,
                        onReset: this.onPropertyReset.bind(
                          this,
                          "force_release_threshold",
                        ),
                        onChange: this.onPropertyChanged.bind(
                          this,
                          "force_release_threshold",
                        ),
                        renderValue: this.renderNormalizedSliderValue,
                      }),
                      s.createElement(K, {
                        labelName: "#SourceInputMode_DowngradeSpeed",
                        elementId: l,
                        min: 0,
                        max: 10,
                        step: 0.1,
                        value: this.state.flDowngradeSpeed,
                        onReset: this.onPropertyReset.bind(
                          this,
                          "downgrade_speed",
                        ),
                        onChange: this.onPropertyChanged.bind(
                          this,
                          "downgrade_speed",
                        ),
                        renderValue: this.renderSpeedSliderValue,
                      }),
                      s.createElement(K, {
                        labelName: "#SourceInputMode_DropSpeed",
                        elementId: l,
                        min: 0,
                        max: 10,
                        step: 0.1,
                        value: this.state.flDropSpeed,
                        onReset: this.onPropertyReset.bind(this, "drop_speed"),
                        onChange: this.onPropertyChanged.bind(
                          this,
                          "drop_speed",
                        ),
                        renderValue: this.renderSpeedSliderValue,
                      }),
                    ),
                ),
                s.createElement(
                  "div",
                  {
                    className: "InputSettingsCloseButton Label AllCaps",
                    onClick: this.CloseModeSettings,
                  },
                  (0, p.we)("#Button_Close"),
                ),
              )
            );
          }
          render() {
            let e = this.props.controllerWatcher[0],
              t = this.GetCombinedBooleanVector1DropDownItems();
            return s.createElement(
              "div",
              { className: this.WrapperClasses },
              this.renderHeader(),
              s.createElement(z, {
                sLocalizedInputType: "#SourceInputMode_Grab",
                SelectedAction: e.GetGrabAction(this.props.iMode),
                vecOptions: t,
                fnOptionSelected: this.OnGrabActionChanged,
                bReadOnly: !this.state.bEditMode,
              }),
              this.renderFooter(),
            );
          }
        };
        (0, i.Cg)([h.o], re.prototype, "OnGrabActionChanged", null),
          (re = (0, i.Cg)([r.PA], re));
        let ae = class extends j {
          constructor(e) {
            super(e),
              (this.defaultProperties = [
                {
                  property: "on/x",
                  default: 1,
                  type: "float",
                  variableName: "flOnX",
                  mode: "scalar_constant",
                },
                {
                  property: "off/x",
                  default: 0,
                  type: "float",
                  variableName: "flOffX",
                  mode: "scalar_constant",
                },
                {
                  property: "on/y",
                  default: 1,
                  type: "float",
                  variableName: "flOnY",
                  mode: "scalar_constant",
                },
                {
                  property: "off/y",
                  default: 0,
                  type: "float",
                  variableName: "flOffY",
                  mode: "scalar_constant",
                },
                {
                  property: "on/z",
                  default: 1,
                  type: "float",
                  variableName: "flOnZ",
                  mode: "scalar_constant",
                },
                {
                  property: "off/z",
                  default: 0,
                  type: "float",
                  variableName: "flOffZ",
                  mode: "scalar_constant",
                },
              ]),
              this.LoadDefaults(),
              this.BModeHasSettings.bind(this),
              (0, V.enableUniqueIds)(this);
          }
          OnValueActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetValueAction(this.props.iMode, e);
            });
          }
          BModeHasSettings() {
            return this.GetActionArity() >= 1;
          }
          renderNormalizedSliderValue(e) {
            return e.toFixed(1);
          }
          renderSettingsContent() {
            this.props.controllerWatcher[0];
            let e = "";
            this.hasOwnProperty("nextUniqueId") && (e = this.nextUniqueId());
            let t = this.GetActionArity();
            return s.createElement(
              "div",
              { className: "InputSettingsModal" },
              s.createElement(
                "div",
                { className: "ChordBindingHeader FlexColumn" },
                s.createElement(
                  "div",
                  { className: "FlexFullWidthRowCentered" },
                  s.createElement("img", {
                    className:
                      "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                    src: "images/bindingui/icon_modal_edit_header.svg",
                  }),
                  s.createElement(
                    "div",
                    { className: "Label Title TitleCenter AllCaps" },
                    (0, p.we)("#BindingSettingsModal_Title"),
                  ),
                ),
              ),
              s.createElement(
                "div",
                { className: "FlexColumn" },
                t >= 1 &&
                  s.createElement(K, {
                    labelName: "#SourceInputMode_ScalarOffX",
                    elementId: e,
                    min: -1,
                    max: 1,
                    step: 0.1,
                    value: this.state.flOffX,
                    onReset: this.onPropertyReset.bind(this, "off/x"),
                    onChange: this.onPropertyChanged.bind(this, "off/x"),
                    renderValue: this.renderNormalizedSliderValue,
                  }),
                t >= 2 &&
                  s.createElement(K, {
                    labelName: "#SourceInputMode_ScalarOffY",
                    elementId: e,
                    min: -1,
                    max: 1,
                    step: 0.1,
                    value: this.state.flOffY,
                    onReset: this.onPropertyReset.bind(this, "off/y"),
                    onChange: this.onPropertyChanged.bind(this, "off/y"),
                    renderValue: this.renderNormalizedSliderValue,
                  }),
                t >= 3 &&
                  s.createElement(K, {
                    labelName: "#SourceInputMode_ScalarOffZ",
                    elementId: e,
                    min: -1,
                    max: 1,
                    step: 0.1,
                    value: this.state.flOffZ,
                    onReset: this.onPropertyReset.bind(this, "off/z"),
                    onChange: this.onPropertyChanged.bind(this, "off/z"),
                    renderValue: this.renderNormalizedSliderValue,
                  }),
              ),
              s.createElement(
                "div",
                {
                  className: "InputSettingsCloseButton Label AllCaps",
                  onClick: this.CloseModeSettings,
                },
                (0, p.we)("#Button_Close"),
              ),
            );
          }
          GetActionArity() {
            let e = this.props.controllerWatcher[0].GetValueAction(
              this.props.iMode,
            );
            if (!e) return 0;
            switch (e.type) {
              case "vector1":
                return 1;
              case "vector2":
                return 2;
              case "vector3":
                return 3;
              default:
                return 0;
            }
          }
          render() {
            let e = this.props.controllerWatcher[0],
              t = [];
            this.GetVector1DropDownItems(t, !1),
              this.GetVector2DropDownItems(t, !1),
              this.GetVector3DropDownItems(t, !1),
              this.AddNoneItems(t);
            let o = "";
            this.hasOwnProperty("nextUniqueId") && (o = this.nextUniqueId());
            let n = this.GetActionArity();
            return s.createElement(
              "div",
              { className: this.WrapperClasses },
              this.renderHeader(),
              s.createElement(z, {
                sLocalizedInputType: "#SourceInputMode_ScalarValue",
                SelectedAction: e.GetValueAction(this.props.iMode),
                vecOptions: t,
                fnOptionSelected: this.OnValueActionChanged,
                bReadOnly: !this.state.bEditMode,
              }),
              n >= 1 &&
                s.createElement(K, {
                  labelName: "#SourceInputMode_ScalarOnX",
                  elementId: o,
                  min: -1,
                  max: 1,
                  step: 0.1,
                  value: this.state.flOnX,
                  onChange: this.onPropertyChanged.bind(this, "on/x"),
                  renderValue: this.renderNormalizedSliderValue,
                }),
              n >= 2 &&
                s.createElement(K, {
                  labelName: "#SourceInputMode_ScalarOnY",
                  elementId: o,
                  min: -1,
                  max: 1,
                  step: 0.1,
                  value: this.state.flOnY,
                  onChange: this.onPropertyChanged.bind(this, "on/y"),
                  renderValue: this.renderNormalizedSliderValue,
                }),
              n >= 3 &&
                s.createElement(K, {
                  labelName: "#SourceInputMode_ScalarOnZ",
                  elementId: o,
                  min: -1,
                  max: 1,
                  step: 0.1,
                  value: this.state.flOnZ,
                  onChange: this.onPropertyChanged.bind(this, "on/z"),
                  renderValue: this.renderNormalizedSliderValue,
                }),
              this.renderFooter(),
            );
          }
        };
        (0, i.Cg)([h.o], ae.prototype, "OnValueActionChanged", null),
          (ae = (0, i.Cg)([r.PA], ae));
        let ce = class extends s.Component {
          constructor(e) {
            super(e), (this.state = { bInEditMode: !1 });
          }
          OnEdit(e) {
            this.setState({ bInEditMode: e });
          }
          componentWillMount() {
            this.setState({
              bInEditMode:
                this.props.controllerWatcher[0].BHasModeSelectionPending(
                  this.props.iMode,
                ),
            });
          }
          componentWillReceiveProps(e) {
            e.iMode != this.props.iMode &&
              this.setState({
                bInEditMode:
                  this.props.controllerWatcher[0].BHasModeSelectionPending(
                    e.iMode,
                  ),
              });
          }
          render() {
            let e = {
              controllerWatcher: this.props.controllerWatcher,
              iMode: this.props.iMode,
              sMode: this.props.sMode,
              ParentEdit: this.OnEdit,
              bReadOnly: this.props.bReadOnly,
              bStartInEditMode: this.state.bInEditMode,
              bShowModeOptionsDropDownOnStart:
                this.props.controllerWatcher[0].BHasModeSelectionPending(
                  this.props.iMode,
                ),
              bToggleButtonMode: "toggle_button" == this.props.sMode,
              sActionSet: F.SelectedActionSet,
            };
            switch (this.props.sMode) {
              case "toggle_button":
                return s.createElement(X, Object.assign({}, e));
              case "trackpad":
              case "joystick":
                return s.createElement(oe, Object.assign({}, e));
              case "complex_button":
                return s.createElement(Z, Object.assign({}, e));
              case "button":
                return s.createElement(Y, Object.assign({}, e));
              case "dpad":
              case "dpad_touch":
              case "dpad_click":
                return s.createElement(te, Object.assign({}, e));
              case "scroll":
              case "trackpad_scroll":
                return s.createElement(ne, Object.assign({}, e));
              case "trigger":
                return s.createElement(ie, Object.assign({}, e));
              case "force_sensor":
                return s.createElement(se, Object.assign({}, e));
              case "grab":
                return s.createElement(re, Object.assign({}, e));
              case "scalar_constant":
                return s.createElement(ae, Object.assign({}, e));
              case "static_bool":
                return s.createElement(le, Object.assign({}, e));
              default:
                return s.createElement(ee, Object.assign({}, e));
            }
          }
        };
        (0, i.Cg)([h.o], ce.prototype, "OnEdit", null),
          (ce = (0, i.Cg)([r.PA], ce));
        class de {
          constructor(e, t, o, n) {
            (this.x = e),
              (this.y = t),
              (this.width = o),
              (this.nPointScale = n),
              this.toString.bind(this);
          }
          toString() {
            return (
              this.x + "," + this.y + "," + this.width + "," + this.nPointScale
            );
          }
        }
        let pe = class extends s.Component {
          constructor() {
            super(...arguments),
              (this.m_HTMLButton = void 0),
              (this.m_SVGElement = void 0);
          }
          AddMode() {
            this.props.controllerWatcher.forEach((e) => {
              e.AddInputMode("none");
            });
          }
          componentWillUnmount() {
            this.props.controllerWatcher.forEach((e) => {
              e.cancelWatcher();
            });
          }
          BindButtonRef(e) {
            (this.m_HTMLButton = e), this.m_HTMLButton && this.UpdateSVGPath();
          }
          BindSVGRef(e) {
            (this.m_SVGElement = e), this.UpdateSVGPath();
          }
          UpdateSVGPath() {
            if (
              this.m_HTMLButton &&
              this.m_SVGElement &&
              this.props.ptControllerImagePosition
            ) {
              let e = this.m_SVGElement.children.namedItem("SourcePath"),
                t = this.m_SVGElement.children.namedItem("SourceLine"),
                o = this.m_SVGElement.children.namedItem("SourceCircle"),
                n = this.props.controllerWatcher[0],
                i = 2 == this.props.eControllerButtonSide,
                s = 0 == this.props.eControllerButtonSide,
                l = this.m_HTMLButton.getBoundingClientRect(),
                r = this.m_SVGElement.getBoundingClientRect(),
                a = n.GetSVGEndPoint();
              (a.x *= this.props.ptControllerImagePosition.nPointScale),
                (a.y *= this.props.ptControllerImagePosition.nPointScale),
                s ||
                  i ||
                  (a.x = this.props.ptControllerImagePosition.width - a.x),
                (a.x += this.props.ptControllerImagePosition.x - r.left),
                (a.y += this.props.ptControllerImagePosition.y - r.top);
              let c = new T(0, l.top - r.top);
              c.x = i ? l.left - 10 : l.right + 10;
              let d = i ? -20 : 20,
                p = c.x + d + "," + c.y + " " + a.x + "," + a.y;
              e.setAttribute("points", p);
              let h = c.x + "," + c.y + " " + (c.x + d) + "," + c.y;
              t.setAttribute("points", h),
                o.setAttribute("cx", a.x + ""),
                o.setAttribute("cy", a.y + "");
            }
          }
          OnMouseEnter(e) {
            this.UpdateSVGPath(),
              this.m_SVGElement &&
                this.m_SVGElement.classList.add("MenuSVGVisible");
          }
          OnMouseLeave(e) {
            this.m_SVGElement &&
              this.m_SVGElement.classList.remove("MenuSVGVisible");
          }
          render() {
            let e = this.props.strSVGClass;
            e += " MenuSVG";
            let t = this.props.controllerWatcher[0],
              o = 0,
              n = t.GetModes.map(
                (e, t) => (
                  ++o,
                  s.createElement(ce, {
                    key: t,
                    sMode: e.mode,
                    iMode: t,
                    controllerWatcher: this.props.controllerWatcher,
                    bReadOnly: this.props.bReadOnly,
                  })
                ),
              );
            return s.createElement(
              "div",
              {
                className: "FlexColumn BindingInputSection",
                onMouseEnter: this.OnMouseEnter,
                onMouseLeave: this.OnMouseLeave,
              },
              s.createElement(
                "div",
                { className: "FlexRow" },
                s.createElement(
                  "div",
                  { className: "Label Title" },
                  t.GetControllerInputName,
                ),
                !this.props.bReadOnly &&
                  s.createElement(
                    "div",
                    {
                      className: "Label FlexRightAlignChild",
                      onClick: this.AddMode,
                    },
                    s.createElement("img", {
                      className: "ActionButtonImage",
                      src: "images/bindingui/icon_add.svg",
                    }),
                  ),
              ),
              s.createElement("hr", { ref: this.BindButtonRef }),
              o > 0 && s.createElement("div", { className: "FlexColumn" }, n),
              s.createElement(x.A, { onReflow: this.UpdateSVGPath }),
              s.createElement(
                "svg",
                {
                  className: e,
                  xmlns: "http://www.w3.org/2000/svg",
                  ref: this.BindSVGRef,
                },
                s.createElement(
                  "defs",
                  null,
                  s.createElement(
                    "radialGradient",
                    { id: "buttonGradient" },
                    s.createElement("stop", {
                      offset: "0%",
                      stopColor: "#ffffff",
                      stopOpacity: "0.8",
                    }),
                    s.createElement("stop", {
                      offset: "100%",
                      stopColor: "#ffffff",
                      stopOpacity: "0",
                    }),
                  ),
                ),
                s.createElement("polyline", {
                  id: "SourceLine",
                  stroke: "#ffffff",
                  strokeWidth: "0.1rem",
                  fill: "transparent",
                }),
                s.createElement("polyline", {
                  id: "SourcePath",
                  stroke: "#ffffff",
                  strokeWidth: "0.1rem",
                  fill: "transparent",
                }),
                s.createElement("circle", {
                  id: "SourceCircle",
                  r: "2rem",
                  fill: "url(#buttonGradient)",
                }),
              ),
            );
          }
        };
        (0, i.Cg)([h.o], pe.prototype, "AddMode", null),
          (0, i.Cg)([h.o], pe.prototype, "BindButtonRef", null),
          (0, i.Cg)([h.o], pe.prototype, "BindSVGRef", null),
          (0, i.Cg)([h.o], pe.prototype, "UpdateSVGPath", null),
          (0, i.Cg)([h.o], pe.prototype, "OnMouseEnter", null),
          (0, i.Cg)([h.o], pe.prototype, "OnMouseLeave", null),
          (pe = (0, i.Cg)([r.PA], pe));
        let he = class extends s.Component {
          render() {
            let e = F.SelectedControllerTypeInfo;
            if (!e || !this.props.selectedActionSet) return null;
            F.SelectedControllerTypeLocalizedName;
            let t = [];
            Object.keys(e.input_source).forEach((o) => {
              t.push({ name: o, order: e.input_source[o].order });
            }),
              t.sort((e, t) => e.order - t.order);
            let o = t.map((t, o) => {
              let n = e.input_source[t.name];
              if ("pose" == n.type || "vibration" == n.type) return null;
              if (
                "InputValueVisibility_SteamVRInternal" == n.visibility &&
                !F.CurrentAppCanAccessPrivateInputs
              )
                return null;
              if (
                "InputValueVisibility_AvailableButHidden" == n.visibility &&
                !S.W.ShowHiddenInputs
              )
                return null;
              if (null != n.side)
                switch (n.side) {
                  case "left":
                    if (1 != this.props.eControllerButtonSide) return null;
                    break;
                  case "right":
                    if (2 != this.props.eControllerButtonSide) return null;
                }
              let i = [];
              return (
                i.push(
                  F.GetControllerWatcherForSourceFromControllerType(
                    e,
                    this.props.eControllerButtonSide,
                    t.name,
                    this.props.selectedActionSet.name,
                  ),
                ),
                this.props.eControllerButtonOtherSide &&
                  0 != this.props.eControllerButtonOtherSide.valueOf() &&
                  i.push(
                    F.GetControllerWatcherForSourceFromControllerType(
                      e,
                      this.props.eControllerButtonOtherSide,
                      t.name,
                      this.props.selectedActionSet.name,
                    ),
                  ),
                s.createElement(pe, {
                  key: o,
                  controllerWatcher: i,
                  strSVGClass: this.props.strSVGClass,
                  bReadOnly: this.props.bReadOnly,
                  eControllerButtonSide: this.props.eControllerButtonSide,
                  ptControllerImagePosition:
                    this.props.ptControllerImagePosition,
                })
              );
            });
            return s.createElement("div", null, o);
          }
        };
        he = (0, i.Cg)([r.PA], he);
        let ue = class extends s.Component {
          constructor(e) {
            super(e),
              (this.m_LeftControllerImage = void 0),
              (this.m_RightControllerImage = void 0),
              this.props.bSingleMode
                ? (this.state = {
                    bMirrorBinding: !0,
                    ptLeftController: new de(0, 0, 0, 0),
                    ptRightController: new de(0, 0, 0, 0),
                  })
                : this.props.selectedActionSet &&
                    "single" != this.props.selectedActionSet.usage
                  ? ((this.state = {
                      bMirrorBinding: !1,
                      ptLeftController: new de(0, 0, 0, 0),
                      ptRightController: new de(0, 0, 0, 0),
                    }),
                    this.props.fnSetMirroredMode(!1))
                  : this.props.selectedActionSet &&
                    ((this.state = {
                      bMirrorBinding: !0,
                      ptLeftController: new de(0, 0, 0, 0),
                      ptRightController: new de(0, 0, 0, 0),
                    }),
                    this.props.fnSetMirroredMode(!0));
          }
          componentWillReceiveProps(e) {
            let t = !1,
              o = e.selectedActionSet;
            if (
              o &&
              (!this.props.selectedActionSet ||
                o.name != this.props.selectedActionSet.name)
            ) {
              if ("single" == o.usage) {
                (t = !0),
                  Object.keys(
                    F.SelectedControllerTypeInfo.input_source,
                  ).forEach((e) => {
                    let n = F.GetControllerWatcherForSourceFromControllerType(
                        F.SelectedControllerTypeInfo,
                        1,
                        e,
                        o.name,
                      ),
                      i = F.GetControllerWatcherForSourceFromControllerType(
                        F.SelectedControllerTypeInfo,
                        2,
                        e,
                        o.name,
                      );
                    t = t && i.BindingsMatch(n);
                  });
              }
              this.setState({ bMirrorBinding: t }),
                this.props.fnSetMirroredMode(t);
            }
          }
          ToggleMirrorMode(e) {
            if ("single" == this.props.selectedActionSet.usage) {
              let t = this.state.bMirrorBinding;
              if (
                (this.setState({ bMirrorBinding: e }),
                this.props.fnSetMirroredMode(!this.state.bMirrorBinding),
                !t)
              ) {
                Object.keys(F.SelectedControllerTypeInfo.input_source).forEach(
                  (e) => {
                    let t = F.GetControllerWatcherForSourceFromControllerType(
                      F.SelectedControllerTypeInfo,
                      1,
                      e,
                      this.props.selectedActionSet.name,
                    );
                    F.GetControllerWatcherForSourceFromControllerType(
                      F.SelectedControllerTypeInfo,
                      2,
                      e,
                      this.props.selectedActionSet.name,
                    ).CopyActions(t);
                  },
                );
              }
            }
          }
          UpdatePositionHelper(e) {
            let t = 1,
              o = 0,
              n = 0,
              i = 0;
            if (e) {
              let s = e.getBoundingClientRect();
              if (((i = s.width), e.naturalWidth > 0))
                return (
                  (t = s.height / e.naturalHeight),
                  (n = s.left),
                  (o = s.top),
                  new de(n, o, i, t)
                );
            }
          }
          OnUpdateControllerPicturePosition() {
            this.setState({
              ptLeftController: this.UpdatePositionHelper(
                this.m_LeftControllerImage,
              ),
            }),
              this.setState({
                ptRightController: this.UpdatePositionHelper(
                  this.m_RightControllerImage,
                ),
              });
          }
          BindLeftControllerImage(e) {
            (this.m_LeftControllerImage = e),
              this.setState({ ptLeftController: this.UpdatePositionHelper(e) });
          }
          BindRightControllerImage(e) {
            (this.m_RightControllerImage = e),
              this.setState({
                ptRightController: this.UpdatePositionHelper(e),
              });
          }
          render() {
            let e = F.SelectedControllerTypeInfo;
            if (!e) return null;
            let t = "",
              o = "";
            this.props.bSingleMode ||
              ((t = e.input_bindingui_left.transform
                ? e.input_bindingui_left.transform
                : ""),
              (o = e.input_bindingui_left.uri
                ? e.input_bindingui_left.uri
                : ""));
            let n = e.input_bindingui_right.transform
                ? e.input_bindingui_right.transform
                : "",
              i = e.input_bindingui_right.uri
                ? e.input_bindingui_right.uri
                : "",
              l = "",
              r = this.props.selectedActionSet,
              a = !1,
              c = 0;
            if (!this.props.bSingleMode) {
              if (null == r)
                return (
                  console.warn(
                    "ControllerBindingHandedControllers::render - Got undefined actionSet.",
                  ),
                  null
                );
              "single" == r.usage &&
                ((l = this.state.bMirrorBinding ? "Mirrored" : ""),
                (a = !this.props.bReadOnly),
                this.state.bMirrorBinding && (c = 2));
            }
            let d = F.SelectedControllerTypeLocalizedName,
              h = (0, p.we)("#BindingUI_LeftHandController", d),
              u = (0, p.we)("#BindingUI_RightHandController", d),
              m =
                (this.props.bReadOnly,
                !this.props.bReadOnly ||
                  (F.SelectedActionSetChords &&
                    F.SelectedActionSetChords.length > 0));
            const g = F.GetSimulatedControllerProperties();
            return s.createElement(
              "div",
              {
                className:
                  "BindingSectionWrapper " +
                  (this.props.bSingleMode
                    ? " BindingButtonRowSingleDevice"
                    : ""),
              },
              s.createElement(
                "div",
                { className: "BindingControllerImageColumns FlexColumn" },
                s.createElement(
                  "div",
                  { className: "FlexRow" },
                  !this.props.bSingleMode &&
                    s.createElement(
                      "div",
                      { className: "FlexColumn ControllerImageColumn" },
                      s.createElement("img", {
                        className: "ControllerImage ControllerImageLeft",
                        src: o,
                        style: { transform: t },
                        ref: this.BindLeftControllerImage,
                        onLoad: this.OnUpdateControllerPicturePosition,
                      }),
                      s.createElement(x.A, {
                        onReflow: this.OnUpdateControllerPicturePosition,
                      }),
                    ),
                  s.createElement(
                    "div",
                    { className: l + " ControllerImageColumn FlexColumn" },
                    s.createElement("img", {
                      className: "ControllerImage ControllerImageRight",
                      src: i,
                      style: { transform: n },
                      ref: this.BindRightControllerImage,
                      onLoad: this.OnUpdateControllerPicturePosition,
                    }),
                    s.createElement(x.A, {
                      onReflow: this.OnUpdateControllerPicturePosition,
                    }),
                  ),
                ),
                s.createElement(
                  "div",
                  {
                    className:
                      "FlexColumnCentered ControllerImageColumnButtons",
                  },
                  s.createElement(
                    "div",
                    { className: "FlexFullWidthRowCentered" },
                    m &&
                      s.createElement(
                        G.Ay,
                        {
                          content: (0, p.we)("#BindingUI_ChordsButton_tooltip"),
                          theme: "ControllerBindingToolTip",
                        },
                        s.createElement(
                          "div",
                          {
                            className:
                              "Label TitleCenter ToggleMirror ButtonControl",
                            onClick: this.props.fnOpenChordBindingsModal,
                          },
                          (0, p.we)("#BindingUI_ChordsButton"),
                        ),
                      ),
                    F.BSelectedActionSetHasPoses &&
                      s.createElement(
                        G.Ay,
                        {
                          content: (0, p.we)("#BindingUI_PosesButton_tooltip"),
                          theme: "ControllerBindingToolTip",
                        },
                        s.createElement(
                          "div",
                          {
                            className:
                              "Label TitleCenter ToggleMirror ButtonControl",
                            onClick: this.props.fnOpenPoseBindingsModal,
                          },
                          (0, p.we)("#BindingUI_PosesButton"),
                        ),
                      ),
                    F.BSelectedActionSetHasHaptics &&
                      s.createElement(
                        G.Ay,
                        {
                          content: (0, p.we)(
                            "#BindingUI_HapticsButton_tooltip",
                          ),
                          theme: "ControllerBindingToolTip",
                        },
                        s.createElement(
                          "div",
                          {
                            className:
                              "Label TitleCenter ToggleMirror ButtonControl",
                            onClick: this.props.fnOpenHapticsBindingsModal,
                          },
                          (0, p.we)("#BindingUI_HapticsButton"),
                        ),
                      ),
                    F.BSelectedActionSetHasSkeletons &&
                      s.createElement(
                        G.Ay,
                        {
                          content: (0, p.we)(
                            "#BindingUI_SkeletonButton_tooltip",
                          ),
                          theme: "ControllerBindingToolTip",
                        },
                        s.createElement(
                          "div",
                          {
                            className:
                              "Label TitleCenter ToggleMirror ButtonControl",
                            onClick: this.props.fnOpenSkeletonBindingsModal,
                          },
                          (0, p.we)("#BindingUI_SkeletonButton"),
                        ),
                      ),
                  ),
                  a &&
                    s.createElement(
                      "div",
                      null,
                      s.createElement("input", {
                        type: "checkbox",
                        checked: this.state.bMirrorBinding,
                        onChange: (e) => {
                          this.ToggleMirrorMode(e.target.checked);
                        },
                      }),
                      s.createElement(
                        "div",
                        { className: "Label" },
                        (0, p.we)("#BindingUI_MirrorMode"),
                      ),
                    ),
                ),
                g.bIsSimulatingController &&
                  s.createElement(
                    "div",
                    {
                      className:
                        "FlexFullWidthRowCentered SimulatedControllerInfoSection",
                    },
                    s.createElement(
                      "p",
                      null,
                      s.createElement(
                        "b",
                        null,
                        (0, p.we)("#BindingUI_CompatibilityModeInfo"),
                      ),
                      ": ",
                      (0, p.we)("#BindingUI_CompatibilityModeAppearingAsInfo"),
                      " ",
                      s.createElement(
                        "u",
                        null,
                        g.strLocalizedSimulatedControllerType,
                      ),
                    ),
                    s.createElement(
                      G.Ay,
                      {
                        content: (0, p.we)(
                          "#BindingUI_SimulatingControllerInfo_tooltip",
                        ),
                        theme: "ControllerBindingToolTip",
                      },
                      s.createElement(
                        "span",
                        { className: "SimulatedControllerInfoHelp" },
                        "?",
                      ),
                    ),
                  ),
              ),
              this.props.bSingleMode &&
                s.createElement(
                  "div",
                  { className: "BindingSection FlexRow" },
                  s.createElement(
                    "div",
                    { className: "BindingButtonRow FlexColumn" },
                    s.createElement(he, {
                      eControllerButtonSide: 0,
                      strSVGClass: "Left",
                      bReadOnly: this.props.bReadOnly,
                      selectedActionSet: F.SelectedActionSetDetails,
                      ptControllerImagePosition: this.state.ptRightController,
                    }),
                  ),
                ),
              !this.props.bSingleMode &&
                s.createElement(
                  "div",
                  { className: "BindingSection FlexRow" },
                  s.createElement(
                    "div",
                    { className: "BindingButtonRow FlexColumn" },
                    s.createElement(
                      "div",
                      { className: "Label Title ControllerTitle" },
                      h,
                    ),
                    s.createElement(he, {
                      eControllerButtonSide: 1,
                      strSVGClass: "MenuLeftLine",
                      bReadOnly: this.props.bReadOnly,
                      eControllerButtonOtherSide: c,
                      selectedActionSet: this.props.selectedActionSet,
                      ptControllerImagePosition: this.state.ptLeftController,
                    }),
                  ),
                  s.createElement(
                    "div",
                    { className: "BindingButtonRow FlexColumn " + l },
                    s.createElement(
                      "div",
                      { className: "Label Title ControllerTitle" },
                      u,
                    ),
                    s.createElement(he, {
                      eControllerButtonSide: 2,
                      strSVGClass: "MenuRightLine",
                      bReadOnly:
                        this.props.bReadOnly || this.state.bMirrorBinding,
                      selectedActionSet: this.props.selectedActionSet,
                      ptControllerImagePosition: this.state.ptRightController,
                    }),
                  ),
                ),
            );
          }
        };
        (0, i.Cg)([h.o], ue.prototype, "ToggleMirrorMode", null),
          (0, i.Cg)([h.o], ue.prototype, "UpdatePositionHelper", null),
          (0, i.Cg)(
            [h.o],
            ue.prototype,
            "OnUpdateControllerPicturePosition",
            null,
          ),
          (0, i.Cg)([h.o], ue.prototype, "BindLeftControllerImage", null),
          (0, i.Cg)([h.o], ue.prototype, "BindRightControllerImage", null),
          (ue = (0, i.Cg)([r.PA], ue));
        let me = class extends s.Component {
          constructor(e) {
            var t;
            super(e),
              (this.onAxisChanged = (e) => (t) => {
                let o = t.currentTarget.valueAsNumber;
                Number.isNaN(o) && (o = 0);
                const n = Math.min(Math.max(o, this.props.min), this.props.max);
                this.setState(
                  (t) => {
                    const o = [...t.vec];
                    return (o[e] = n), { vec: o };
                  },
                  () => this.props.onChange(this.state.vec, this.props.name),
                );
              }),
              (this.modifyAxis = (e, t) => {
                this.setState(
                  (o) => {
                    const n = [...o.vec],
                      i = this.props.step,
                      s = "up" === t ? i : -i,
                      l = n[e] + s;
                    return (
                      (n[e] = Math.min(
                        Math.max(l, this.props.min),
                        this.props.max,
                      )),
                      { vec: n }
                    );
                  },
                  () => this.props.onChange(this.state.vec, this.props.name),
                );
              }),
              (this.onReset = () => {
                this.setState({ vec: [0, 0, 0] }, () =>
                  this.props.onChange(this.state.vec, this.props.name),
                );
              });
            let o = ["X", "Y", "Z"];
            if (Array.isArray(e.axisNames))
              for (const [t, n] of e.axisNames.entries())
                n &&
                  (n && n.startsWith("#") ? (o[t] = (0, p.we)(n)) : (o[t] = n));
            this.state = {
              vec:
                null !== (t = this.props.vector) && void 0 !== t
                  ? t
                  : [0, 0, 0],
              axisNames: o,
            };
          }
          componentDidUpdate(e) {
            e.vector !== this.props.vector &&
              null != this.props.vector &&
              this.setState({ vec: this.props.vector });
          }
          render() {
            const {
                labelName: e,
                elementId: t,
                renderValue: o,
                min: n,
                max: i,
                step: l,
              } = this.props,
              [r, a, c] = this.state.vec;
            return s.createElement(
              "div",
              { className: "FlexRow InputSettingsRow" },
              s.createElement(
                G.Ay,
                {
                  content: (0, p.we)(e + "_tooltip"),
                  theme: "ControllerBindingToolTip",
                },
                s.createElement(
                  "label",
                  {
                    className: "InputSettingsLabel InputSettingsPoseLabel",
                    htmlFor: t,
                  },
                  (0, p.we)(e),
                ),
              ),
              s.createElement(
                "div",
                { className: "FlexColumn InputSettingsVector3Container" },
                [r, a, c].map((e, r) => {
                  const a = r;
                  return s.createElement(
                    "div",
                    { className: "FlexRow InputSettingsVector3Row", key: a },
                    s.createElement(
                      "span",
                      { className: "InputSettingsVector3Label" },
                      this.state.axisNames[a],
                    ),
                    s.createElement(
                      "div",
                      { className: "InputSettingsPoseNumber" },
                      s.createElement("input", {
                        id: `${t}_text_${a}`,
                        className: "InputSettingsVector3",
                        type: "number",
                        value: o(e),
                        onChange: this.onAxisChanged(a),
                        min: n,
                        max: i,
                        step: l,
                      }),
                      s.createElement(
                        "div",
                        { className: "InputSettingsPoseNumberArrows" },
                        s.createElement(
                          "button",
                          {
                            type: "button",
                            onClick: () => this.modifyAxis(a, "up"),
                          },
                          "▲",
                        ),
                        s.createElement(
                          "button",
                          {
                            type: "button",
                            onClick: () => this.modifyAxis(a, "down"),
                          },
                          "▼",
                        ),
                      ),
                    ),
                  );
                }),
              ),
              s.createElement(
                "div",
                {
                  className: "InputSettingsResetButton",
                  onClick: this.onReset,
                },
                (0, p.we)("#SourceInputMode_ResetParameterToDefault"),
              ),
            );
          }
        };
        var ge;
        (me = (0, i.Cg)([r.PA], me)),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.Pose = 1)] = "Pose"),
              (e[(e.Haptics = 2)] = "Haptics"),
              (e[(e.Skeleton = 3)] = "Skeleton");
          })(ge || (ge = {}));
        let Se = class extends s.Component {
          constructor(e) {
            super(e);
            const {
              vecExistingPositionOffset: t,
              vecExistingRotationOffset: o,
            } = this.setupCurrentAction();
            (this.state = {
              SVGElement: void 0,
              WrapperHTMLElement: void 0,
              bSettingsVisible: !1,
              vecPositionOffset: t,
              vecRotationOffset: o,
            }),
              (this.currentAction = void 0);
          }
          componentDidUpdate() {
            this.UpdateSVGPath();
          }
          BindSVGRef(e) {
            this.setState({ SVGElement: e }), this.UpdateSVGPath();
          }
          BindWrapperElement(e) {
            this.setState({ WrapperHTMLElement: e }), this.UpdateSVGPath();
          }
          UpdateSVGPath() {
            if (this.state.SVGElement) {
              let e = this.state.SVGElement.children.namedItem("SourcePath"),
                t = this.state.SVGElement.children.namedItem("SourceLine"),
                o = this.state.SVGElement.children.namedItem("SourceCircle"),
                n = Object.assign({}, this.props.endPoint),
                i = Object.assign({}, this.props.startPoint);
              if (this.state.WrapperHTMLElement) {
                let e = this.state.WrapperHTMLElement.getBoundingClientRect(),
                  t =
                    this.state.WrapperHTMLElement.parentElement.parentElement.parentElement.getBoundingClientRect();
                i.y += e.top - t.top + e.height / 2;
              }
              let s = 20,
                l = i.x + s + "," + i.y + " " + n.x + "," + n.y;
              e.setAttribute("points", l);
              let r = i.x + "," + i.y + " " + (i.x + s) + "," + i.y;
              t.setAttribute("points", r),
                o.setAttribute("cx", n.x + ""),
                o.setAttribute("cy", n.y + "");
            }
          }
          OnActionChanged(e) {
            switch (this.props.type) {
              case "pose":
                return this.OnPoseActionChanged(e);
              case "vibration":
                return this.OnHapticsActionChanged(e);
              case "skeleton":
                return this.OnSkeletonActionChanged(e);
              default:
                console.log("Unknown type: ", this.props.type);
            }
          }
          FullInputPaths() {
            return this.props.vecDevicePathsToSet.map(
              (e) => e + this.props.sInputPath,
            );
          }
          CurrentAction() {
            return this.currentAction;
          }
          OnShowSettings() {
            this.setState({ bSettingsVisible: !0 });
            this.state.WrapperHTMLElement.parentElement.style.overflow =
              "hidden";
          }
          CloseSettings() {
            this.setState({ bSettingsVisible: !1 });
            this.state.WrapperHTMLElement.parentElement.style.overflow = "auto";
          }
          BHasSettings() {
            return !1;
          }
          OnPoseActionChanged(e) {
            this.FullInputPaths().forEach((t) => {
              F.SetPoseForInputPath(t, e);
            });
          }
          OnHapticsActionChanged(e) {
            this.FullInputPaths().forEach((t) => {
              F.SetHapticsForInputPath(t, e);
            });
          }
          OnSkeletonActionChanged(e) {
            this.FullInputPaths().forEach((t) => {
              F.SetSkeletonForInputPath(t, e);
            });
          }
          OnPositionOffsetChanged(e) {
            this.setState({ vecPositionOffset: e }),
              "pose" == this.props.type
                ? this.FullInputPaths().forEach((t) => {
                    const o = F.GetPoseForInputPath(t);
                    F.SetParameterForPose(o, "offset_position", e);
                  })
                : "skeleton" == this.props.type &&
                  this.FullInputPaths().forEach((t) => {
                    const o = F.GetSkeletonForInputPath(t);
                    F.SetParameterForSkeleton(o, "offset_position", e);
                  });
          }
          OnRotationOffsetChanged(e) {
            this.setState({ vecRotationOffset: e }),
              "pose" == this.props.type
                ? this.FullInputPaths().forEach((t) => {
                    const o = F.GetPoseForInputPath(t);
                    F.SetParameterForPose(o, "offset_rotation", e);
                  })
                : "skeleton" == this.props.type &&
                  this.FullInputPaths().forEach((t) => {
                    const o = F.GetSkeletonForInputPath(t);
                    F.SetParameterForSkeleton(o, "offset_rotation", e);
                  });
          }
          renderSettingsModal() {
            return s.createElement(
              a.A,
              {
                visible: this.state.bSettingsVisible,
                customStyles: {
                  width: "80%",
                  maxWidth: "40em",
                  height: "fit-content",
                  maxHeight: "90%",
                  display: "flex",
                  padding: "0px",
                },
                onClose: this.CloseSettings,
                showCloseButton: !1,
                animation: "fade",
                className: "ModeSettingsModal",
                closeOnEsc: !0,
              },
              this.state.bSettingsVisible && this.renderSettingsContent(),
            );
          }
          renderSettingsContent() {
            let e = "";
            return (
              this.hasOwnProperty("nextUniqueId") && (e = this.nextUniqueId()),
              s.createElement(
                "div",
                { className: "InputSettingsModal" },
                s.createElement(
                  "div",
                  { className: "ChordBindingHeader FlexColumn" },
                  s.createElement(
                    "div",
                    { className: "FlexFullWidthRowCentered" },
                    s.createElement("img", {
                      className:
                        "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                      src: "images/bindingui/icon_modal_edit_header.svg",
                    }),
                    s.createElement(
                      "div",
                      { className: "Label Title TitleCenter AllCaps" },
                      (0, p.we)("#BindingSettingsModal_Title"),
                    ),
                  ),
                ),
                s.createElement(
                  "div",
                  { className: "FlexColumn" },
                  s.createElement(me, {
                    labelName: "#SourceInputMode_PositionOffset",
                    elementId: e,
                    vector: this.state.vecPositionOffset,
                    onChange: this.OnPositionOffsetChanged,
                    renderValue: (e) => e.toFixed(2),
                    min: -0.3,
                    max: 0.3,
                    step: 0.01,
                    axisNames: ["#X", "#Y", "#Z"],
                  }),
                ),
                s.createElement(
                  "div",
                  { className: "FlexColumn" },
                  s.createElement(me, {
                    labelName: "#SourceInputMode_RotationOffset",
                    elementId: e,
                    vector: this.state.vecRotationOffset,
                    onChange: this.OnRotationOffsetChanged,
                    renderValue: (e) => e.toFixed(2),
                    min: -180,
                    max: 180,
                    step: 5,
                    axisNames: ["#Pitch", "#Yaw", "#Roll"],
                  }),
                ),
                s.createElement(
                  "div",
                  {
                    className: "InputSettingsCloseButton Label AllCaps",
                    onClick: this.CloseSettings,
                  },
                  (0, p.we)("#Button_Close"),
                ),
              )
            );
          }
          setupCurrentAction() {
            let e,
              t,
              o,
              n,
              i = "",
              s = (0, p.we)("#SourceInputMode_none"),
              l = this.FullInputPaths()[0],
              r = F.LocalizePathNameForSelectedControllerType(l);
            switch (this.props.type) {
              case "pose":
                (e = F.GetPoseActionByPath(l)),
                  (t = "#SourceInputSubHeader_PoseActions");
                break;
              case "skeleton":
                (e = F.GetSkeletonActionByPath(l)),
                  (t = "#SourceInputSubHeader_SkeletonActions");
                break;
              case "vibration":
                (e = F.GetHapticsActionByPath(l)),
                  (t = "#SourceInputSubHeader_HapticsActions");
                break;
              default:
                console.log(
                  "ControllerPoseBindingItem doesn't know how to handle items of type:",
                  this.props.type,
                );
            }
            let a = F.SelectedActionSetActions.filter(
              (e) =>
                !!(
                  "skeleton" != this.props.type ||
                  ("skeleton" == e.type &&
                    e.skeleton &&
                    this.props.InputSource.skeleton &&
                    e.skeleton.toLowerCase() ==
                      this.props.InputSource.skeleton.toLowerCase())
                ) && e.type == this.props.type,
            ).map((t, l) => {
              let r;
              return (
                e &&
                  e[0].output.toLowerCase() == t.name.toLowerCase() &&
                  ((this.currentAction = t),
                  (i = t.name),
                  (s = t.localized_name),
                  (o = F.GetParameterForPose(e[0], "offset_position")),
                  (n = F.GetParameterForPose(e[0], "offset_rotation"))),
                "mandatory" == t.requirement &&
                  (r =
                    " (" + (0, p.we)("#BindingUI_SelectAction_Required") + ")"),
                new H(t.name, t.localized_name, r)
              );
            });
            return {
              poses: e,
              poseOptions: a,
              sourceNameString: r,
              sCurrentPose: i,
              sCurrentPoseLocalized: s,
              sHeaderName: t,
              sFullPath: l,
              vecExistingPositionOffset: o,
              vecExistingRotationOffset: n,
            };
          }
          render() {
            const {
              poses: e,
              poseOptions: t,
              sourceNameString: o,
              sCurrentPose: n,
              sCurrentPoseLocalized: i,
              sHeaderName: l,
            } = this.setupCurrentAction();
            (null != t && 0 != t.length) ||
              t.push(
                new H("-nonitem", (0, p.we)("#SourceInputAction_NoItems")),
              ),
              t.unshift(new H("-subHeader", (0, p.we)(l))),
              t.push(new H("-blank", "")),
              t.push(new H("none", (0, p.we)("#SourceInputMode_none")));
            const r =
              (null == e ? void 0 : e.length) > 0 && "pose" == this.props.type;
            return s.createElement(
              "div",
              {
                className: "PoseActionListEntryWrapper",
                ref: this.BindWrapperElement,
              },
              s.createElement(
                "div",
                { className: "FlexRow PoseActionListEntry" },
                s.createElement(
                  "div",
                  { className: "Label PoseActionLabel" },
                  o,
                ),
                s.createElement(
                  "div",
                  { className: "FlexRow" },
                  s.createElement(U, {
                    vecOptions: t,
                    sValueSelectedItem: n,
                    sHeaderClass: "PoseActionLabelDropdown",
                    bReadOnly: !1,
                    sLocalizedSelectedItem: i,
                    fnOptionSelected: this.OnActionChanged,
                  }),
                  r &&
                    s.createElement("img", {
                      className:
                        "ActionButtonImage FlexRightAlignChild PoseActionSettingsButton",
                      src: "images/bindingui/icon_settings.svg",
                      onClick: this.OnShowSettings,
                    }),
                  s.createElement(x.A, { onReflow: this.UpdateSVGPath }),
                ),
              ),
              r && this.renderSettingsModal(),
              null != this.CurrentAction() &&
                this.props.endPoint.x > 0 &&
                this.props.endPoint.y > 0 &&
                s.createElement(
                  "svg",
                  {
                    className: "BindingPoseLineSVG",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: this.BindSVGRef,
                  },
                  s.createElement(
                    "defs",
                    null,
                    s.createElement(
                      "radialGradient",
                      { id: "buttonGradient" },
                      s.createElement("stop", {
                        offset: "0%",
                        stopColor: "var(--bordercolor)",
                        stopOpacity: "0.8",
                      }),
                      s.createElement("stop", {
                        offset: "100%",
                        stopColor: "var(--bordercolor)",
                        stopOpacity: "0",
                      }),
                    ),
                  ),
                  s.createElement("polyline", {
                    id: "SourceLine",
                    stroke: "var(--bordercolor)",
                    strokeWidth: "0.1rem",
                    fill: "transparent",
                  }),
                  s.createElement("polyline", {
                    id: "SourcePath",
                    stroke: "var(--bordercolor)",
                    strokeWidth: "0.1rem",
                    fill: "transparent",
                  }),
                  s.createElement("circle", {
                    id: "SourceCircle",
                    r: "2rem",
                    fill: "url(#buttonGradient)",
                  }),
                ),
              this.props.bIncludeHR && s.createElement("hr", null),
            );
          }
        };
        (0, i.Cg)([h.o], Se.prototype, "BindSVGRef", null),
          (0, i.Cg)([h.o], Se.prototype, "BindWrapperElement", null),
          (0, i.Cg)([h.o], Se.prototype, "UpdateSVGPath", null),
          (0, i.Cg)([h.o], Se.prototype, "OnActionChanged", null),
          (0, i.Cg)([h.o], Se.prototype, "OnShowSettings", null),
          (0, i.Cg)([h.o], Se.prototype, "CloseSettings", null),
          (0, i.Cg)([h.o], Se.prototype, "OnPoseActionChanged", null),
          (0, i.Cg)([h.o], Se.prototype, "OnHapticsActionChanged", null),
          (0, i.Cg)([h.o], Se.prototype, "OnSkeletonActionChanged", null),
          (0, i.Cg)([h.o], Se.prototype, "OnPositionOffsetChanged", null),
          (0, i.Cg)([h.o], Se.prototype, "OnRotationOffsetChanged", null),
          (Se = (0, i.Cg)([r.PA], Se));
        let _e = class extends s.Component {
          render() {
            let e;
            switch (this.props.eActionType) {
              case ge.Pose:
                e = "pose";
                break;
              case ge.Haptics:
                e = "vibration";
                break;
              case ge.Skeleton:
                e = "skeleton";
            }
            let t = F.SelectedActionSetActions.filter((t) => t.type == e);
            if (0 == t.length) return null;
            let o = F.SelectedControllerTypeInfo,
              n = F.SelectedControllerTypeInfo.input_source,
              i = [];
            if (
              "controller_handed" ==
              F.SelectedControllerTypeInfo.input_bindingui_mode
            )
              i = ["/user/hand/left", "/user/hand/right"];
            else {
              let e = F.DeviceForControllerType(o.controller_type);
              e &&
                (e.root_path && i.push(e.root_path),
                e.root_path_alt && i.push(e.root_path_alt));
            }
            if (0 == i.length)
              return console.log("Missing base root path for controller"), null;
            F.GetPoseActionBindings;
            let l,
              r = [],
              a = 0;
            for (let o in n) {
              let l = n[o];
              for (let c of i) {
                if (l.type != e) continue;
                let d = "none";
                if (
                  ("/user/hand/right" == c
                    ? (d = "right")
                    : "/user/hand/left" == c && (d = "left"),
                  l.side && l.side != d)
                )
                  continue;
                let p = c + o,
                  h = "left" == d,
                  u = h
                    ? this.props.ptLeftController.x
                    : this.props.ptRightController.x,
                  m = h
                    ? this.props.ptLeftController.y
                    : this.props.ptRightController.y,
                  g = new T(0, 0);
                if (
                  (n.hasOwnProperty(o) &&
                    ((g.x = l.binding_image_point[0]),
                    (g.y = l.binding_image_point[1]),
                    (g.x *= this.props.nPointScale),
                    (g.y *= this.props.nPointScale)),
                  h ? (g.x = u - g.x) : (g.x += u),
                  (g.y += m),
                  h && this.props.bSlaveSecondaryControllerBinding)
                )
                  continue;
                let S = new T(this.props.ptPoseListOffset.x + 5, 0),
                  _ = (a++, t.length, [c]);
                this.props.bSlaveSecondaryControllerBinding && (_ = i),
                  r.push(
                    s.createElement(Se, {
                      key: p,
                      InputSource: l,
                      sInputPath: o,
                      type: e,
                      vecDevicePathsToSet: _,
                      startPoint: S,
                      endPoint: g,
                    }),
                  );
              }
            }
            switch (this.props.eActionType) {
              case ge.Pose:
                l = (0, p.we)("#BindingUI_PoseListTitle");
                break;
              case ge.Haptics:
                l = (0, p.we)("#BindingUI_HapticsListTitle");
                break;
              case ge.Skeleton:
                l = (0, p.we)("#BindingUI_SkeletonListTitle");
            }
            return s.createElement(
              "div",
              { className: "FlexColumn" },
              s.createElement("div", { className: "Label Title AllCaps" }, l),
              r,
            );
          }
        };
        _e = (0, i.Cg)([r.PA], _e);
        let Ce = class extends s.Component {
          render() {
            let e = F.SelectedControllerTypeInfo.input_source,
              t = new T(
                e[this.props.vecPosePath[0]].binding_image_point[0],
                e[this.props.vecPosePath[0]].binding_image_point[1],
              );
            (t.x *= this.props.nPointScale),
              (t.y *= this.props.nPointScale),
              this.props.bLeftHandController
                ? (t.x = this.props.ptController.x - t.x)
                : (t.x += this.props.ptController.x),
              (t.y += this.props.ptController.y);
            let o = "";
            this.props.vecPosePath.forEach((e, t) => {
              0 != t && (o += ","),
                (o += F.LocalizeStringForSelectedControllerType(e));
            });
            let n = this.props.bLeftHandController ? "start" : "end",
              i = this.props.bLeftHandController ? 6 : -6;
            return s.createElement(
              "svg",
              {
                className: "BindingPosePointSVG ",
                xmlns: "http://www.w3.org/2000/svg",
              },
              s.createElement(
                "defs",
                null,
                s.createElement(
                  "radialGradient",
                  { id: "buttonGradient" },
                  s.createElement("stop", {
                    offset: "0%",
                    stopColor: "var(--bordercolor)",
                    stopOpacity: "1",
                  }),
                  s.createElement("stop", {
                    offset: "100%",
                    stopColor: "var(--bordercolor)",
                    stopOpacity: "0",
                  }),
                ),
                s.createElement(
                  "filter",
                  {
                    id: "background",
                    x: "-10%",
                    y: "-10%",
                    width: "120%",
                    height: "120%",
                  },
                  s.createElement("feFlood", { floodColor: "#1d4e62e0" }),
                  s.createElement("feComposite", { in: "SourceGraphic" }),
                ),
                s.createElement(
                  "filter",
                  {
                    id: "shadow",
                    x: "-20%",
                    y: "-20%",
                    width: "140%",
                    height: "140%",
                  },
                  s.createElement("feGaussianBlur", {
                    stdDeviation: "2 2",
                    result: "shadow",
                  }),
                  s.createElement("feOffset", { dx: "1", dy: "1" }),
                ),
              ),
              s.createElement(
                "text",
                {
                  textAnchor: n,
                  filter: "url(#shadow)",
                  x: t.x + i,
                  y: t.y,
                  style: { fill: "black", fontSize: 24 },
                },
                o,
              ),
              s.createElement(
                "text",
                {
                  textAnchor: n,
                  filter: "url(#background)",
                  x: t.x + i,
                  y: t.y,
                  style: { fill: "var(--descriptiontext)", fontSize: 24 },
                },
                o,
              ),
              s.createElement("circle", {
                id: "SourceCircle",
                cx: t.x,
                cy: t.y,
                r: "0.5rem",
                fill: "url(#buttonGradient)",
              }),
            );
          }
        };
        Ce = (0, i.Cg)([r.PA], Ce);
        let ye = class extends s.Component {
          constructor(e) {
            super(e),
              (this.m_LeftControllerImage = void 0),
              (this.m_RightControllerImage = void 0),
              (this.m_SVGElement = void 0),
              (this.m_PropsListDiv = void 0),
              (this.state = {
                ptLeftController: new T(0, 0),
                ptRightController: new T(0, 0),
                nPointScale: 0,
                ptDivList: new T(0, 0),
              });
          }
          OnUpdateControllerPicturePosition() {
            if (
              this.m_LeftControllerImage &&
              !this.props.bSlaveSecondaryControllerBinding
            ) {
              let e = 0,
                t = 0,
                o = this.m_LeftControllerImage;
              if (o) {
                let n = o.getBoundingClientRect();
                o.naturalWidth > 0 &&
                  ((t =
                    n.right -
                    o.parentElement.parentElement.parentElement.getBoundingClientRect()
                      .left),
                  (e =
                    n.top -
                    o.parentElement.parentElement.parentElement.getBoundingClientRect()
                      .top));
              }
              this.setState({ ptLeftController: new T(t, e) });
            }
            if (this.m_RightControllerImage) {
              let e = 1,
                t = 0,
                o = 0,
                n = this.m_RightControllerImage;
              if (n) {
                let i = n.getBoundingClientRect();
                n.naturalWidth > 0 &&
                  ((e = i.height / n.naturalHeight),
                  (o =
                    i.left -
                    n.parentElement.parentElement.parentElement.getBoundingClientRect()
                      .left),
                  (o += (i.width - n.naturalWidth * e) / 2),
                  (t =
                    i.top -
                    n.parentElement.parentElement.parentElement.getBoundingClientRect()
                      .top));
              }
              this.setState({ ptRightController: new T(o, t), nPointScale: e });
            }
            if (this.m_PropsListDiv) {
              let e = this.m_PropsListDiv.getBoundingClientRect(),
                t =
                  this.m_PropsListDiv.parentElement.parentElement.getBoundingClientRect();
              this.setState({ ptDivList: new T(e.width, e.top - t.top) });
            }
          }
          BindLeftControllerImage(e) {
            (this.m_LeftControllerImage = e),
              this.OnUpdateControllerPicturePosition();
          }
          BindRightControllerImage(e) {
            (this.m_RightControllerImage = e),
              this.OnUpdateControllerPicturePosition();
          }
          BindPropsListDiv(e) {
            (this.m_PropsListDiv = e), this.OnUpdateControllerPicturePosition();
          }
          render() {
            let e,
              t,
              o = "",
              n = "",
              i = "",
              l = "",
              r = F.SelectedControllerTypeInfo;
            switch (this.props.eActionSourceType) {
              case ge.Pose:
                (e = "pose"), (t = (0, p.we)("#BindingUI_PoseTitle"));
                break;
              case ge.Haptics:
                (e = "vibration"), (t = (0, p.we)("#BindingUI_HapticsTitle"));
                break;
              case ge.Skeleton:
                (e = "skeleton"), (t = (0, p.we)("#BindingUI_SkeletonTitle"));
            }
            (l = r.input_bindingui_right.uri),
              (n = r.input_bindingui_right.transform),
              this.props.bSlaveSecondaryControllerBinding ||
                ((o = r.input_bindingui_left.transform),
                (i = r.input_bindingui_left.uri));
            let a = function (t, o, n, i, s) {
                let l = t.input_source[i];
                if (l.type == e && (null == l.side || l.side == n)) {
                  let e = new T(
                    l.binding_image_point[0],
                    l.binding_image_point[1],
                  );
                  o.hasOwnProperty(e.toString()) || (o[e.toString()] = []),
                    o[e.toString()].push(i);
                }
              },
              c = {},
              d = {};
            Object.keys(r.input_source).forEach(a.bind(null, r, c, "left")),
              Object.keys(r.input_source).forEach(a.bind(null, r, d, "right"));
            let h = Object.keys(c).map((e, t) =>
                s.createElement(Ce, {
                  key: t,
                  vecPosePath: c[e],
                  ptController: this.state.ptLeftController,
                  nPointScale: this.state.nPointScale,
                  ptPoseListOffset: this.state.ptDivList,
                  bLeftHandController: !0,
                }),
              ),
              u = Object.keys(d).map((e, t) =>
                s.createElement(Ce, {
                  key: t,
                  vecPosePath: d[e],
                  ptController: this.state.ptRightController,
                  nPointScale: this.state.nPointScale,
                  ptPoseListOffset: this.state.ptDivList,
                  bLeftHandController: !1,
                }),
              );
            return s.createElement(
              "div",
              { className: "FlexFullHeightColumnCentered" },
              s.createElement(
                "div",
                { className: "FlexRow PoseTitleBar" },
                s.createElement("img", {
                  className:
                    "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                  src: "images/bindingui/icon_modal_edit_header.svg",
                }),
                s.createElement(
                  "div",
                  { className: "Label Title TitleCenter AllCaps" },
                  t,
                ),
              ),
              s.createElement(
                "div",
                {
                  className:
                    "FlexFullWidthRowCentered PoseMainContent PositionRelative",
                },
                s.createElement(
                  "div",
                  { className: "PoseBindingPoints" },
                  !this.props.bSlaveSecondaryControllerBinding && h,
                  u,
                ),
                s.createElement(
                  "div",
                  {
                    className: "FlexColumn PoseActionsList",
                    ref: this.BindPropsListDiv,
                  },
                  s.createElement(_e, {
                    eActionType: this.props.eActionSourceType,
                    bSingleControllerMode: this.props.bSingleControllerMode,
                    ptRightController: this.state.ptRightController,
                    ptLeftController: this.state.ptLeftController,
                    bReadOnly: this.props.bReadOnly,
                    nPointScale: this.state.nPointScale,
                    ptPoseListOffset: this.state.ptDivList,
                    bSlaveSecondaryControllerBinding:
                      this.props.bSlaveSecondaryControllerBinding,
                  }),
                  s.createElement(x.A, {
                    onReflow: this.OnUpdateControllerPicturePosition,
                  }),
                ),
                s.createElement(
                  "div",
                  { className: "FlexRow PoseControllerPictures" },
                  !this.props.bSlaveSecondaryControllerBinding &&
                    s.createElement(
                      "div",
                      { className: "ControllerImageContainer" },
                      s.createElement("img", {
                        className: "ControllerImage",
                        src: i,
                        style: { transform: o },
                        ref: this.BindLeftControllerImage,
                      }),
                    ),
                  s.createElement(
                    "div",
                    { className: "ControllerImageContainer" },
                    s.createElement("img", {
                      className: "ControllerImage",
                      src: l,
                      style: { transform: n },
                      ref: this.BindRightControllerImage,
                    }),
                  ),
                ),
                s.createElement(x.A, {
                  onReflow: this.OnUpdateControllerPicturePosition,
                }),
              ),
              s.createElement(
                "div",
                {
                  className: "ChordBindingCloseButton Label AllCaps",
                  onClick: this.props.fnCloseModal,
                },
                (0, p.we)("#Button_Close"),
              ),
            );
          }
        };
        (0, i.Cg)(
          [h.o],
          ye.prototype,
          "OnUpdateControllerPicturePosition",
          null,
        ),
          (0, i.Cg)([h.o], ye.prototype, "BindLeftControllerImage", null),
          (0, i.Cg)([h.o], ye.prototype, "BindRightControllerImage", null),
          (0, i.Cg)([h.o], ye.prototype, "BindPropsListDiv", null),
          (ye = (0, i.Cg)([r.PA], ye));
        let fe = class extends s.Component {
          OnActionOutputChanged(e) {
            F.SetActionForChord(this.props.chord, e);
          }
          DeleteChord() {
            F.DeleteChord(this.props.chord);
          }
          DeleteSourceFromChord(e, t) {
            F.DeleteSourceFromChord(this.props.chord, e);
          }
          AddSourceToChord() {
            let e = this.props.chord.inputs
              ? this.props.chord.inputs.length
              : 0;
            F.SetInputSourceForChord(
              this.props.chord,
              F.SelectedActionSetSources[e].path,
            );
          }
          render() {
            let e = F.SelectedActionSetActions.filter(
                (e) => "boolean" == e.type,
              ),
              t = "",
              o = "none",
              n = !1;
            this.props.chord.output
              ? ((t = this.props.chord.output),
                (o = this.props.chord.output.toLowerCase()))
              : (n = !0);
            let i,
              l = e.map(
                (e, o) => (
                  this.props.chord.output &&
                    e.name.toLowerCase() ==
                      this.props.chord.output.toLowerCase() &&
                    (t = e.localized_name),
                  new H(e.name.toLowerCase(), e.localized_name)
                ),
              ),
              r = F.SelectedActionSetSources;
            return r && 0 != r.length
              ? (this.props.chord.inputs
                  ? (i = this.props.chord.inputs.map((e, t) => {
                      let o = s.createElement(
                        "div",
                        { className: "Label ChordBindingPlusLabel" },
                        s.createElement("img", {
                          className: "ActionButtonImage ChordBindingImage",
                          src: "images/bindingui/icon_plus.svg",
                        }),
                      );
                      return s.createElement(
                        "div",
                        { className: "FlexFullHeightColumnCentered", key: t },
                        s.createElement(
                          "div",
                          { className: "FlexRow ChordBindingEntry" },
                          s.createElement(
                            "div",
                            { className: "FlexColumn" },
                            (function (e, t, o, n) {
                              let i = t
                                .filter((t) => {
                                  let n = o.inputs.filter(
                                    (e) => e[0] == t.path,
                                  );
                                  return t.path == e || 0 == n.length;
                                })
                                .map(
                                  (e, t) =>
                                    new H(
                                      e.path,
                                      F.LocalizePathNameForSelectedControllerType(
                                        e.path,
                                      ),
                                    ),
                                );
                              return s.createElement(
                                "div",
                                { className: "ChordBindingInputType" },
                                s.createElement(U, {
                                  vecOptions: i,
                                  sValueSelectedItem: e,
                                  sLocalizedSelectedItem:
                                    F.LocalizePathNameForSelectedControllerType(
                                      e,
                                    ),
                                  fnOptionSelected: function (t) {
                                    F.SetInputSourceForChord(o, t, e);
                                  },
                                  bReadOnly: n,
                                }),
                              );
                            })(e[0], r, this.props.chord, this.props.bReadOnly),
                            (function (e, t, o, n) {
                              let i = F.GetActionBinding(
                                e,
                                F.SelectedActionSet,
                              );
                              if (!i || 0 == i.length) return null;
                              let l = [],
                                r = "";
                              if (
                                (i.forEach((e) => {
                                  let o = F.GetBooleanInputOptionsForMode(
                                    e.mode,
                                  );
                                  for (let n of o)
                                    l.push({
                                      sActionBindMode: e.mode,
                                      sInputOption: n,
                                    }),
                                      n == t && (r = e.mode);
                                }),
                                0 == l.length)
                              )
                                return null;
                              let a = l.map(
                                (e, t) =>
                                  new H(
                                    e.sInputOption,
                                    (0, p.we)(
                                      "#SourceInputMode_" + e.sActionBindMode,
                                    ) +
                                      " " +
                                      (0, p.we)(
                                        "#SourceInputMode_" + e.sInputOption,
                                      ),
                                  ),
                              );
                              return s.createElement(
                                "div",
                                { className: "ChordBindingInputType" },
                                s.createElement(U, {
                                  vecOptions: a,
                                  sValueSelectedItem: t,
                                  sLocalizedSelectedItem:
                                    (0, p.we)("#SourceInputMode_" + r) +
                                    " " +
                                    (0, p.we)("#SourceInputMode_" + t),
                                  fnOptionSelected: function (t) {
                                    F.SetInputTypeForChord(o, e, t);
                                  },
                                  bReadOnly: n,
                                }),
                              );
                            })(
                              e[0],
                              e[1],
                              this.props.chord,
                              this.props.bReadOnly,
                            ),
                          ),
                          !this.props.bReadOnly &&
                            s.createElement("img", {
                              onClick: () => {
                                this.DeleteSourceFromChord(e[0], e[1]);
                              },
                              className:
                                "ActionButtonImage ChordBindingEntryDelete",
                              src: "images/bindingui/icon_trash.svg",
                            }),
                        ),
                        t != this.props.chord.inputs.length - 1 && o,
                      );
                    }))
                  : n || this.AddSourceToChord(),
                s.createElement(
                  "div",
                  { className: "FlexColumn" },
                  s.createElement(
                    "div",
                    { className: "FlexRow ChordBindingRow" },
                    s.createElement(
                      "div",
                      { className: "FlexColumn ChordBindingSet" },
                      s.createElement(U, {
                        sHeaderClass: "ChordBindingAction",
                        vecOptions: l,
                        sValueSelectedItem: o,
                        sModalTitleString: (0, p.we)(
                          "#BindingUI_Chord_SelectActionModalHeader",
                        ),
                        bShowOptionsOnStart: n,
                        sLocalizedSelectedItem: t,
                        fnOptionSelected: this.OnActionOutputChanged,
                        bReadOnly: this.props.bReadOnly,
                      }),
                    ),
                    s.createElement("img", {
                      className: "ActionButtonImage ChordBindingImage",
                      src: "images/bindingui/icon_arrow_right.svg",
                    }),
                    s.createElement(
                      "div",
                      {
                        className:
                          "FlexFullHeightColumnCentered ChordBindingSet",
                      },
                      i,
                    ),
                    !this.props.bReadOnly &&
                      s.createElement(
                        "div",
                        {
                          className:
                            "FlexFullHeightColumnCentered ChordEntryActionColumn",
                        },
                        s.createElement(
                          "div",
                          {
                            onClick: this.AddSourceToChord,
                            className:
                              "Label ChordManageButtons ChordBindingBigButton AllCaps",
                          },
                          s.createElement("img", {
                            className: "ActionButtonImage",
                            src: "images/bindingui/icon_add.svg",
                          }),
                          (0, p.we)("#BindingUI_AddChordInput"),
                        ),
                        s.createElement(
                          "div",
                          {
                            onClick: this.DeleteChord,
                            className:
                              "Label ChordManageButtons ChordBindingBigButton AllCaps",
                          },
                          s.createElement("img", {
                            className: "ActionButtonImage",
                            src: "images/bindingui/icon_trash.svg",
                          }),
                          (0, p.we)("#BindingUI_DeleteChord"),
                        ),
                      ),
                  ),
                  s.createElement("div", {
                    className: "FlexRow ChordButtonRow",
                  }),
                ))
              : null;
          }
        };
        (0, i.Cg)([h.o], fe.prototype, "OnActionOutputChanged", null),
          (0, i.Cg)([h.o], fe.prototype, "DeleteChord", null),
          (0, i.Cg)([h.o], fe.prototype, "DeleteSourceFromChord", null),
          (0, i.Cg)([h.o], fe.prototype, "AddSourceToChord", null),
          (fe = (0, i.Cg)([r.PA], fe));
        let be = class extends s.Component {
          constructor(e) {
            super(e);
          }
          AddChord() {
            F.AddChord();
          }
          render() {
            let e = [],
              t = F.SelectedActionSetChords;
            return (
              t &&
                t.length &&
                (e = t.map((e, o) =>
                  s.createElement(
                    "div",
                    { key: o },
                    s.createElement(fe, {
                      chord: e,
                      bReadOnly: this.props.bReadOnly,
                    }),
                    o != t.length - 1 && s.createElement("hr", null),
                  ),
                )),
              s.createElement(
                "div",
                { className: "FlexColumn ChordBindingModal" },
                s.createElement(
                  "div",
                  { className: "ChordBindingHeader FlexColumn" },
                  s.createElement(
                    "div",
                    { className: "FlexFullWidthRowCentered" },
                    s.createElement("img", {
                      className:
                        "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                      src: "images/bindingui/icon_modal_edit_header.svg",
                    }),
                    s.createElement(
                      "div",
                      { className: "Label Title TitleCenter AllCaps" },
                      (0, p.we)("#BindingUI_ChordTitle"),
                    ),
                  ),
                ),
                s.createElement(
                  "div",
                  {
                    className:
                      "FlexColumn ChordBindingContents ChordBindingChordsList",
                  },
                  e,
                  !this.props.bReadOnly &&
                    s.createElement(
                      "div",
                      {
                        className:
                          "Label ChordManageButtons ChordBindingBigButton AllCaps AddChordButton",
                        onClick: this.AddChord,
                      },
                      s.createElement("img", {
                        className: "ActionButtonImage",
                        src: "images/bindingui/icon_add.svg",
                      }),
                      (0, p.we)("#BindingUI_AddChord"),
                    ),
                ),
                s.createElement(
                  "div",
                  {
                    className: "ChordBindingCloseButton Label AllCaps",
                    onClick: this.props.fnCloseModal,
                  },
                  (0, p.we)("#Button_Close"),
                ),
              )
            );
          }
        };
        (0, i.Cg)([h.o], be.prototype, "AddChord", null),
          (be = (0, i.Cg)([r.PA], be));
        let ve = class extends s.Component {
          render() {
            let e =
                null == this.props.bShowBackButton ||
                this.props.bShowBackButton,
              t = null != this.props.fnOpenOptionsModal,
              o = "PageTitleLabel";
            return (
              this.props.strSubTitle || (o += " SingleTitle"),
              s.createElement(
                "div",
                {
                  className:
                    "PageTitleBar" + (S.W.IsSteamAvailable ? "" : " NoSteam"),
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
                        (0, p.we)("#Button_Back"),
                      ),
                  ),
                  s.createElement(
                    "div",
                    {
                      className: "AllCaps PageTitle TitleBarSection FlexColumn",
                    },
                    s.createElement(
                      "div",
                      { className: o },
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
                        G.Ay,
                        {
                          content: (0, p.we)(
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
                          (0, p.we)("#BindingUI_OptionsButton"),
                        ),
                      ),
                    ),
                ),
                !S.W.IsSteamAvailable &&
                  s.createElement(
                    "div",
                    { className: "NoSteamWarning" },
                    (0, p.we)("#NoSteamWarning"),
                  ),
              )
            );
          }
        };
        ve = (0, i.Cg)([r.PA], ve);
        let Ae = class extends s.Component {
          constructor(e) {
            super(e);
          }
          CloseSaveDialog() {
            this.props.ParentClose();
          }
          render() {
            let e = [];
            return (
              F.ActionSets.forEach((t) => {
                F.GetActionSetActions(t.name).forEach((t) => {
                  let o = F.GetAliasInfo(t.name);
                  o &&
                    o.hidden &&
                    "vibration" != t.type &&
                    "skeleton" != t.type &&
                    "pose" != t.type &&
                    e.push(
                      s.createElement(
                        "div",
                        { className: "FlexRow HiddenAliasRow" },
                        s.createElement(
                          "div",
                          { className: "Label HiddenAliasName" },
                          t.localized_name,
                        ),
                        s.createElement(
                          "div",
                          {
                            className: "Label ButtonControl",
                            onClick: () => {
                              F.SetAliasHidden(t.name, !1);
                            },
                          },
                          (0, p.we)("#ShowActionButton"),
                        ),
                      ),
                    );
                });
              }),
              s.createElement(
                a.A,
                {
                  visible: !0,
                  onClose: this.CloseSaveDialog,
                  animation: "fade",
                  customStyles: {
                    width: "fit-content",
                    height: "auto",
                    paddingTop: "4rem",
                    maxHeight: "90%",
                  },
                  className: "HiddenActionsModal",
                  closeOnEsc: !0,
                },
                s.createElement(
                  "div",
                  { className: "FlexColumn HiddenActionsWrapper" },
                  e,
                ),
              )
            );
          }
        };
        (0, i.Cg)([h.o], Ae.prototype, "CloseSaveDialog", null),
          (Ae = (0, i.Cg)([r.PA], Ae));
        let Ie = class extends s.Component {
          constructor(e) {
            super(e);
            let t = F.GetAliasInfo(this.props.sAction);
            this.state = t
              ? { sUserSuppliedName: t.alias_name, bHidden: t.hidden }
              : { sUserSuppliedName: "", bHidden: !1 };
          }
          onHiddenChanged(e) {
            this.setState({ bHidden: e }),
              F.SetAliasHidden(this.props.sAction, e);
          }
          onNameChanged(e) {
            this.setState({ sUserSuppliedName: e }),
              F.SetAliasName(this.props.sAction, e);
          }
          render() {
            let e = "InputOption" + this.props.sAction;
            return s.createElement(
              "div",
              { className: "FlexRow SetupLegacyRow" },
              s.createElement(
                "div",
                { className: "Label ActionAliasAction" },
                (0, p.we)(F.GetActionByName(this.props.sAction).localized_name),
              ),
              s.createElement("input", {
                id: e + "name",
                type: "text",
                value: this.state.sUserSuppliedName,
                onChange: (e) => {
                  this.onNameChanged(e.target.value);
                },
                className: "ActionAliasUserSuppliedName",
                readOnly: this.props.readOnly,
              }),
              !this.props.readOnly &&
                s.createElement(
                  "div",
                  {
                    className: "Label ButtonControl",
                    onClick: () => {
                      F.SetAliasHidden(this.props.sAction, !0);
                    },
                  },
                  (0, p.we)("#HideActionButton"),
                ),
            );
          }
        };
        (0, i.Cg)([h.o], Ie.prototype, "onHiddenChanged", null),
          (0, i.Cg)([h.o], Ie.prototype, "onNameChanged", null),
          (Ie = (0, i.Cg)([r.PA], Ie));
        let Be = class extends s.Component {
          constructor(e) {
            super(e),
              (this.state = { bShowActionPicker: !1, bShowHiddenActions: !1 });
          }
          OnShowHidden() {
            this.setState({ bShowHiddenActions: !0 });
          }
          OnCloseHidden() {
            this.setState({ bShowHiddenActions: !1 });
          }
          render() {
            let e = [];
            return (
              F.ActionSets.forEach((t) => {
                F.GetActionSetActions(t.name).forEach((t) => {
                  let o = F.GetAliasInfo(t.name);
                  (o && o.hidden) ||
                    ("vibration" != t.type &&
                      "skeleton" != t.type &&
                      "pose" != t.type &&
                      e.push(t.name));
                });
              }),
              s.createElement(
                "div",
                null,
                s.createElement(
                  "div",
                  { className: "FlexColumn" },
                  s.createElement(
                    "div",
                    { className: "LegacySectionHeader Label" },
                    (0, p.we)("#LegacySetup_ActionAliasesHeader"),
                  ),
                  e.map((e, t) =>
                    s.createElement(Ie, {
                      sAction: e,
                      key: e,
                      readOnly: this.props.readOnly,
                    }),
                  ),
                ),
                this.state.bShowHiddenActions &&
                  s.createElement(Ae, { ParentClose: this.OnCloseHidden }),
                !this.props.readOnly &&
                  s.createElement(
                    "div",
                    {
                      className:
                        "FlexRow SetupLegacyRow ActionAliasButtonWrapper",
                    },
                    s.createElement(
                      "div",
                      {
                        className: "Label ButtonControl",
                        onClick: this.OnShowHidden,
                      },
                      (0, p.we)("#ShowAllAliases"),
                    ),
                  ),
              )
            );
          }
        };
        (0, i.Cg)([h.o], Be.prototype, "OnShowHidden", null),
          (0, i.Cg)([h.o], Be.prototype, "OnCloseHidden", null),
          (Be = (0, i.Cg)([r.PA], Be));
        class we extends s.Component {
          constructor(e) {
            super(e),
              (this.state = {
                bValue: F.GetOptionValue(this.props.sOptionName),
              });
          }
          onCheckboxChanged(e) {
            F.SetOptionValue(this.props.sOptionName, e),
              this.setState({ bValue: e });
          }
          render() {
            let e = "InputOption" + this.props.sOptionName;
            return s.createElement(
              "div",
              { className: "FlexRow SetupLegacyRow" },
              s.createElement(
                "div",
                { className: "FlexColumn" },
                s.createElement("input", {
                  id: e,
                  type: "checkbox",
                  checked: this.state.bValue,
                  value: this.props.sOptionName,
                  onChange: (e) => {
                    this.onCheckboxChanged(e.target.checked);
                  },
                  disabled: this.props.readOnly,
                }),
              ),
              s.createElement(
                "label",
                { className: "InputOptionLabel", htmlFor: e },
                this.props.sOptionLocalizedName,
              ),
            );
          }
        }
        (0, i.Cg)([h.o], we.prototype, "onCheckboxChanged", null);
        class Oe extends s.Component {
          constructor(e) {
            super(e);
            let t = F.GetOptionValue(this.props.sOptionName);
            t || (t = "none"), (this.state = { sValue: t });
          }
          OnControllerDropdownChanged(e) {
            F.SetOptionValue(this.props.sOptionName, e),
              this.setState({ sValue: e });
          }
          render() {
            let e = F.SelectedAppActions.simulation_types,
              t = [];
            for (let o of e)
              "TrackedDeviceClass_Controller" == o.device_type &&
                t.push(
                  new H(o.controller_type, (0, p.we)("#" + o.controller_type)),
                );
            t.push(new H("none", (0, p.we)("#None")));
            let o = "InputOption" + this.props.sOptionName;
            return s.createElement(
              "div",
              { className: "FlexRow SetupLegacyRow" },
              s.createElement(
                "div",
                { className: "FlexColumn" },
                s.createElement(U, {
                  vecOptions: t,
                  sModalClass: "PinTop",
                  sValueSelectedItem: this.state.sValue,
                  fnOptionSelected: this.OnControllerDropdownChanged,
                }),
              ),
              s.createElement(
                "label",
                { className: "InputOptionLabel", htmlFor: o },
                this.props.sOptionLocalizedName,
              ),
            );
          }
        }
        (0, i.Cg)([h.o], Oe.prototype, "OnControllerDropdownChanged", null);
        class Ee extends s.Component {
          constructor(e) {
            super(e);
          }
          onCheckboxChanged(e, t) {
            F.SetOptionValue(e, t), this.forceUpdate();
          }
          render() {
            return this.props.options.map((e, t) => {
              switch (e.type) {
                case "bool":
                  return s.createElement(we, {
                    sOptionName: e.name,
                    sOptionLocalizedName: e.localized_name,
                    key: e.name,
                    readOnly: this.props.readOnly,
                  });
                case "string":
                  return "simulated_controller_type" == e.name
                    ? s.createElement(Oe, {
                        sOptionName: e.name,
                        sOptionLocalizedName: e.localized_name,
                        key: e.name,
                        readOnly: this.props.readOnly,
                      })
                    : null;
                default:
                  return null;
              }
            });
          }
        }
        (0, i.Cg)([h.o], Ee.prototype, "onCheckboxChanged", null);
        class Me extends s.Component {
          constructor(e) {
            super(e),
              (this.state = {
                sName: this.props.simAction.name,
                sOutputAction: this.props.simAction.output
                  ? this.props.simAction.output
                  : "none",
              });
          }
          onNameChanged(e) {
            this.setState({ sName: e });
            let t = this.props.simAction;
            t.name = e;
            let o = F.ComputeSimulatedActionPathFromId(t.id);
            F.SetSimulatedActionByPath(o, t);
          }
          onActionChanged(e) {
            this.setState({ sOutputAction: e });
            let t = this.props.simAction;
            t.output = "none" == e ? "" : e;
            let o = F.ComputeSimulatedActionPathFromId(t.id);
            F.SetSimulatedActionByPath(o, t);
          }
          onDelete() {
            let e = F.ComputeSimulatedActionPathFromId(this.props.simAction.id);
            F.DeleteSimulatedActionByPath(e);
          }
          render() {
            let e = F.GetLiteralVector1ActionBindings.map(
              (e, t) => new H(e.name, e.localized_name),
            );
            e.push(new H("none", (0, p.we)("#SourceInputAction_none")));
            let t = "InputOption" + this.props.simAction.id;
            return s.createElement(
              "div",
              { className: "FlexRow SetupLegacyRow" },
              s.createElement(
                "div",
                { className: "SimulatedActionType Label" },
                (0, p.we)("#SimulatedAction_FakeTrigger"),
              ),
              s.createElement("input", {
                id: t + "name",
                type: "text",
                value: this.state.sName,
                onChange: (e) => {
                  this.onNameChanged(e.target.value);
                },
                className: "ActionAliasUserSuppliedName",
                readOnly: this.props.readOnly,
              }),
              s.createElement(U, {
                vecOptions: e,
                sValueSelectedItem: this.state.sOutputAction,
                sHeaderClass: "BindingLabelAction",
                sMainButtonClass: "SimActionTargetLabel",
                fnOptionSelected: this.onActionChanged,
                bReadOnly: this.props.readOnly,
              }),
              !this.props.readOnly &&
                s.createElement(
                  "div",
                  { className: "Label ButtonControl", onClick: this.onDelete },
                  (0, p.we)("#DeleteSimulatedAction"),
                ),
            );
          }
        }
        (0, i.Cg)([h.o], Me.prototype, "onNameChanged", null),
          (0, i.Cg)([h.o], Me.prototype, "onActionChanged", null),
          (0, i.Cg)([h.o], Me.prototype, "onDelete", null);
        class ke extends s.Component {
          constructor(e) {
            super(e),
              (this.state = {
                sName: this.props.simAction.name,
                sOutputHand: this.props.simAction.output
                  ? this.props.simAction.output
                  : "none",
                fPositionX: this.props.simAction.position_x
                  ? this.props.simAction.position_x
                  : 0,
                fPositionY: this.props.simAction.position_y
                  ? this.props.simAction.position_y
                  : 0,
              });
          }
          onNameChanged(e) {
            this.setState({ sName: e });
            let t = this.props.simAction;
            t.name = e;
            let o = F.ComputeSimulatedActionPathFromId(t.id);
            F.SetSimulatedActionByPath(o, t);
          }
          onOutputChanged(e) {
            this.setState({ sOutputHand: e });
            let t = this.props.simAction;
            t.output = "none" == e ? "" : e;
            let o = F.ComputeSimulatedActionPathFromId(t.id);
            F.SetSimulatedActionByPath(o, t);
          }
          onDelete() {
            let e = F.ComputeSimulatedActionPathFromId(this.props.simAction.id);
            F.DeleteSimulatedActionByPath(e);
          }
          OnClickTrackpad(e) {
            let t = e.currentTarget.getBoundingClientRect(),
              o = (e.clientX - t.left) / (0.5 * t.width) - 1,
              n = -1 * ((e.clientY - t.top) / (0.5 * t.height) - 1);
            this.setState({ fPositionX: o, fPositionY: n });
            let i = this.props.simAction;
            (i.position_x = o), (i.position_y = n);
            let s = F.ComputeSimulatedActionPathFromId(i.id);
            F.SetSimulatedActionByPath(s, i);
          }
          render() {
            let e = [];
            F.GetOptionValue("mirror_actions") ||
              (e.push(new H("left", (0, p.we)("#TrackpadClickLeft"))),
              e.push(new H("right", (0, p.we)("#TrackpadClickRight"))),
              e.push(new H("none", (0, p.we)("#TrackpadClickNone"))));
            let t = "InputOption" + this.props.simAction.id,
              o = {
                left: (100 * (this.state.fPositionX + 1)) / 2 + "%",
                top: 100 - (100 * (this.state.fPositionY + 1)) / 2 + "%",
              };
            return s.createElement(
              "div",
              { className: "FlexRow SetupLegacyRow" },
              s.createElement(
                "div",
                { className: "SimulatedActionType Label" },
                (0, p.we)("#SimulatedAction_FakeTrackpadClick"),
              ),
              s.createElement("input", {
                id: t + "name",
                type: "text",
                value: this.state.sName,
                onChange: (e) => {
                  this.onNameChanged(e.target.value);
                },
                className: "ActionAliasUserSuppliedName",
                readOnly: this.props.readOnly,
              }),
              e.length > 0 &&
                s.createElement(U, {
                  sMainButtonClass: "SimActionTargetLabel",
                  vecOptions: e,
                  sValueSelectedItem: this.state.sOutputHand,
                  sHeaderClass: "BindingLabelAction",
                  fnOptionSelected: this.onOutputChanged,
                  bReadOnly: this.props.readOnly,
                }),
              s.createElement(
                "div",
                {
                  className: "TrackpadSelectionBackground",
                  onClick: this.props.readOnly
                    ? null
                    : (e) => this.OnClickTrackpad(e),
                },
                s.createElement("div", {
                  className: "TrackpadSelectionPip",
                  style: o,
                }),
              ),
              !this.props.readOnly &&
                s.createElement(
                  "div",
                  { className: "Label ButtonControl", onClick: this.onDelete },
                  (0, p.we)("#DeleteSimulatedAction"),
                ),
            );
          }
        }
        (0, i.Cg)([h.o], ke.prototype, "onNameChanged", null),
          (0, i.Cg)([h.o], ke.prototype, "onOutputChanged", null),
          (0, i.Cg)([h.o], ke.prototype, "onDelete", null),
          (0, i.Cg)([h.o], ke.prototype, "OnClickTrackpad", null);
        let Pe = class extends s.Component {
          constructor(e) {
            super(e);
          }
          OnCreateSimAction(e) {
            F.AddSimulatedAction(e);
          }
          CreateEntry(e) {
            switch (e.type) {
              case "fake_trigger":
                return s.createElement(Me, {
                  key: e.id,
                  simAction: e,
                  readOnly: this.props.readOnly,
                });
              case "fake_trackpad_click":
                return s.createElement(ke, {
                  key: e.id,
                  simAction: e,
                  readOnly: this.props.readOnly,
                });
              default:
                return null;
            }
          }
          render() {
            let e = [];
            return (
              e.push(
                new H(
                  "fake_trigger",
                  (0, p.we)("#SimulatedAction_FakeTrigger"),
                ),
              ),
              e.push(
                new H(
                  "fake_trackpad_click",
                  (0, p.we)("#SimulatedAction_FakeTrackpadClick"),
                ),
              ),
              s.createElement(
                "div",
                { className: "FlexColumn" },
                s.createElement(
                  "div",
                  { className: "LegacySectionHeader Label" },
                  (0, p.we)("#LegacySetup_SimulatedActionHeader"),
                ),
                F.SimulatedActions.map((e, t) => this.CreateEntry(e)),
                !this.props.readOnly &&
                  s.createElement(
                    "div",
                    { className: "SimulatedActionsAddWrapper" },
                    s.createElement(U, {
                      sMainButtonClass: "AddSimActionButton",
                      vecOptions: e,
                      sValueSelectedItem: "",
                      sLocalizedSelectedItem: (0, p.we)("#AddSimulatedAction"),
                      sHeaderClass: "BindingLabelAction",
                      fnOptionSelected: this.OnCreateSimAction,
                    }),
                  ),
              )
            );
          }
        };
        (0, i.Cg)([h.o], Pe.prototype, "OnCreateSimAction", null),
          (Pe = (0, i.Cg)([r.PA], Pe));
        let Ne = class extends s.Component {
          constructor(e) {
            super(e),
              (this.controllerTypeOptions = []),
              (this.rendermodelTypeOptions = []);
            let t = F.GetOptionValue("device_offsets");
            null == t && (t = []),
              t.find((e) => "left_hand" == e.role) ||
                t.push({
                  role: "left_hand",
                  offset_position: [0, 0, 0],
                  offset_rotation: [0, 0, 0],
                }),
              t.find((e) => "right_hand" == e.role) ||
                t.push({
                  role: "right_hand",
                  offset_position: [0, 0, 0],
                  offset_rotation: [0, 0, 0],
                });
            const o = F.SelectedAppActions.simulation_types.sort(
              function (e, t) {
                return e.device_type < t.device_type;
              },
            );
            this.controllerTypeOptions = [];
            for (let e of o)
              "TrackedDeviceClass_Controller" == e.device_type &&
                this.controllerTypeOptions.push({
                  sName: (0, p.we)("#" + e.controller_type),
                  sValue: e.controller_type,
                  sTooltip: e.controller_type,
                });
            this.controllerTypeOptions.push({
              sName: (0, p.we)("#None"),
              sValue: "none",
              sTooltip: (0, p.we)("#None"),
            }),
              (this.rendermodelTypeOptions = []);
            const n = ["full", "name_only", "none"];
            for (let e of n)
              this.rendermodelTypeOptions.push({
                sName: (0, p.we)(
                  "#BindingUI_Options_simulate_rendermodel_type_" +
                    e +
                    "_Label",
                ),
                sValue: e,
                sTooltip: (0, p.we)(
                  "#BindingUI_Options_simulate_rendermodel_type_" +
                    e +
                    "_tooltip",
                ),
              });
            this.state = { bShowOffsetsModal: !1, vecOffsets: t };
          }
          OpenOffsetsModal() {
            this.setState({ bShowOffsetsModal: !0 });
          }
          CloseOffsetsModal() {
            this.setState({ bShowOffsetsModal: !1 });
          }
          OnPositionOffsetChanged(e, t) {
            const o = this.state.vecOffsets.map((o) =>
              o.role === t
                ? Object.assign(Object.assign({}, o), { offset_position: e })
                : o,
            );
            this.setState({ vecOffsets: o }), this.SetOffsetsOptionValue(o);
          }
          OnRotationOffsetChanged(e, t) {
            const o = this.state.vecOffsets.map((o) =>
              o.role === t
                ? Object.assign(Object.assign({}, o), { offset_rotation: e })
                : o,
            );
            this.setState({ vecOffsets: o }), this.SetOffsetsOptionValue(o);
          }
          SetOffsetsOptionValue(e) {
            F.SetOptionValue("device_offsets", this.GetOffsetsValue(e));
          }
          GetOffsetsValue(e) {
            const t = [];
            for (const o of e)
              (this.HasData(o.offset_position) ||
                this.HasData(o.offset_rotation)) &&
                t.push(o);
            return t.length > 0 ? t : void 0;
          }
          HasData(e) {
            return !(
              null == e ||
              (Array.isArray(e) && e.every((e) => 0 === e))
            );
          }
          renderOffsetsContent() {
            let e = "";
            this.hasOwnProperty("nextUniqueId") && (e = this.nextUniqueId());
            const t = this.state.vecOffsets.find((e) => "left_hand" == e.role),
              o = this.state.vecOffsets.find((e) => "right_hand" == e.role);
            return s.createElement(
              "div",
              { className: "InputSettingsModal" },
              s.createElement(
                "div",
                { className: "ChordBindingHeader FlexColumn" },
                s.createElement(
                  "div",
                  { className: "FlexFullWidthRowCentered" },
                  s.createElement("img", {
                    className:
                      "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                    src: "images/bindingui/icon_modal_edit_header.svg",
                  }),
                  s.createElement(
                    "div",
                    { className: "Label Title TitleCenter AllCaps" },
                    (0, p.we)("#BindingSettingsModal_OffsetsTitle"),
                  ),
                ),
              ),
              s.createElement(
                "div",
                { className: "FlexColumn" },
                s.createElement(me, {
                  labelName: "#SourceInputMode_LeftController_PositionOffset",
                  elementId: e,
                  vector: t.offset_position,
                  onChange: this.OnPositionOffsetChanged,
                  renderValue: (e) => e.toFixed(2),
                  min: -0.3,
                  max: 0.3,
                  step: 0.01,
                  axisNames: ["#X", "#Y", "#Z"],
                  name: t.role,
                }),
              ),
              s.createElement(
                "div",
                { className: "FlexColumn" },
                s.createElement(me, {
                  labelName: "#SourceInputMode_LeftController_RotationOffset",
                  elementId: e,
                  vector: t.offset_rotation,
                  onChange: this.OnRotationOffsetChanged,
                  renderValue: (e) => e.toFixed(2),
                  min: -180,
                  max: 180,
                  step: 5,
                  axisNames: ["#Pitch", "#Yaw", "#Roll"],
                  name: t.role,
                }),
              ),
              s.createElement("hr", null),
              s.createElement(
                "div",
                { className: "FlexColumn" },
                s.createElement(me, {
                  labelName: "#SourceInputMode_RightController_PositionOffset",
                  elementId: e,
                  vector: o.offset_position,
                  onChange: this.OnPositionOffsetChanged,
                  renderValue: (e) => e.toFixed(2),
                  min: -0.3,
                  max: 0.3,
                  step: 0.01,
                  axisNames: ["#X", "#Y", "#Z"],
                  name: o.role,
                }),
              ),
              s.createElement(
                "div",
                { className: "FlexColumn" },
                s.createElement(me, {
                  labelName: "#SourceInputMode_RightController_RotationOffset",
                  elementId: e,
                  vector: o.offset_rotation,
                  onChange: this.OnRotationOffsetChanged,
                  renderValue: (e) => e.toFixed(2),
                  min: -180,
                  max: 180,
                  step: 5,
                  axisNames: ["#Pitch", "#Yaw", "#Roll"],
                  name: o.role,
                }),
              ),
              s.createElement(
                "div",
                {
                  className: "InputSettingsCloseButton Label AllCaps",
                  onClick: this.CloseOffsetsModal,
                },
                (0, p.we)("#Button_Close"),
              ),
            );
          }
          render() {
            var e;
            let t = "openxr" == F.SelectedAppActions.category,
              o =
                (null === (e = F.SelectedAppActions.interaction_profiles) ||
                void 0 === e
                  ? void 0
                  : e.length) > 0,
              n = F.GetOptionValue("simulated_controller_type"),
              i = n && "none" != n;
            return s.createElement(
              "div",
              { className: "FlexColumn ChordBindingModal" },
              s.createElement(
                "div",
                { className: "ChordBindingHeader FlexColumn" },
                s.createElement(
                  "div",
                  { className: "FlexFullWidthRowCentered" },
                  s.createElement("img", {
                    className:
                      "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                    src: "images/bindingui/icon_modal_edit_header.svg",
                  }),
                  s.createElement(
                    "div",
                    { className: "Label Title TitleCenter AllCaps" },
                    (0, p.we)("#BindingUI_OptionsTitle"),
                  ),
                ),
              ),
              s.createElement(
                "div",
                {
                  className:
                    "FlexColumn ChordBindingContents ChordBindingChordsList",
                },
                t &&
                  o &&
                  s.createElement(Te, { bReadOnly: this.props.bReadOnly }),
                !t &&
                  s.createElement(Re, {
                    sOptionName: "simulated_controller_type",
                    vecOptionItems: this.controllerTypeOptions,
                    bReadOnly: this.props.bReadOnly,
                  }),
                !t &&
                  i &&
                  s.createElement(Re, {
                    sOptionName: "simulate_rendermodel",
                    vecOptionItems: this.rendermodelTypeOptions,
                    bReadOnly: this.props.bReadOnly,
                  }),
                !t &&
                  i &&
                  s.createElement(Le, {
                    sOptionName: "simulate_hmd",
                    bReadOnly: this.props.bReadOnly,
                    bDefaultValue: !0,
                  }),
                s.createElement(
                  "div",
                  { className: "FlexRow SetupLegacyRow" },
                  s.createElement(
                    G.Ay,
                    {
                      content: (0, p.we)(
                        "#BindingUI_Options_ControllerOffsets_tooltip",
                      ),
                      theme: "ControllerBindingToolTip",
                    },
                    s.createElement(
                      "label",
                      { className: "InputOptionLabel" },
                      (0, p.we)("#BindingUI_Options_ControllerOffsets_Label"),
                    ),
                  ),
                  s.createElement(
                    "div",
                    { className: "FlexColumn" },
                    s.createElement(
                      "div",
                      {
                        onClick: this.OpenOffsetsModal,
                        className:
                          "Label ChordManageButtons ChordBindingBigButton AllCaps",
                      },
                      (0, p.we)("#BindingUI_Configure"),
                    ),
                  ),
                ),
              ),
              s.createElement(
                "div",
                {
                  className: "ChordBindingCloseButton Label AllCaps",
                  onClick: this.props.fnCloseModal,
                },
                (0, p.we)("#Button_Close"),
              ),
              s.createElement(
                a.A,
                {
                  visible: this.state.bShowOffsetsModal,
                  onClose: this.CloseOffsetsModal,
                  showCloseButton: !1,
                  animation: "fade",
                  className: "BindingChordsModal",
                  closeOnEsc: !0,
                  customStyles: {
                    width: "80%",
                    maxWidth: "40em",
                    height: "fit-content",
                    maxHeight: "90%",
                    display: "flex",
                    padding: "0px",
                  },
                },
                this.state.bShowOffsetsModal && this.renderOffsetsContent(),
              ),
            );
          }
        };
        (0, i.Cg)([h.o], Ne.prototype, "OpenOffsetsModal", null),
          (0, i.Cg)([h.o], Ne.prototype, "CloseOffsetsModal", null),
          (0, i.Cg)([h.o], Ne.prototype, "OnPositionOffsetChanged", null),
          (0, i.Cg)([h.o], Ne.prototype, "OnRotationOffsetChanged", null),
          (Ne = (0, i.Cg)([r.PA], Ne));
        class Te extends s.Component {
          constructor(e) {
            super(e);
            let t = F.GetInteractionProfile();
            t || (t = " "), (this.state = { sValue: t });
          }
          OnInteractionProfileDropdownChanged(e) {
            F.SetInteractionProfile(e), this.setState({ sValue: e });
          }
          render() {
            let e = F.GetInteractionProfiles(),
              t = [];
            return (
              e.forEach(function (e) {
                let o = e.replace("/interaction_profiles/", "");
                t.push(new H(e, o, null, e));
              }),
              t.push(new H(" ", (0, p.we)("#None"))),
              s.createElement(
                "div",
                { className: "FlexRow SetupLegacyRow" },
                s.createElement(
                  G.Ay,
                  {
                    content: (0, p.we)(
                      "#BindingUI_Options_InteractionProfile_tooltip",
                    ),
                    theme: "ControllerBindingToolTip",
                  },
                  s.createElement(
                    "label",
                    { className: "InputOptionLabel" },
                    (0, p.we)("#BindingUI_Options_InteractionProfile_Label"),
                  ),
                ),
                s.createElement(
                  "div",
                  { className: "FlexColumn" },
                  s.createElement(
                    G.Ay,
                    {
                      content: this.state.sValue,
                      theme: "ControllerBindingToolTip",
                    },
                    s.createElement(
                      "div",
                      null,
                      s.createElement(U, {
                        vecOptions: t,
                        sModalClass: "PinTop",
                        sValueSelectedItem: this.state.sValue,
                        fnOptionSelected:
                          this.OnInteractionProfileDropdownChanged,
                        bReadOnly: this.props.bReadOnly,
                      }),
                    ),
                  ),
                ),
              )
            );
          }
        }
        (0, i.Cg)(
          [h.o],
          Te.prototype,
          "OnInteractionProfileDropdownChanged",
          null,
        );
        class Re extends s.Component {
          constructor(e) {
            super(e), (this.vecOptionValues = []);
            let t = F.GetOptionValue(e.sOptionName);
            t || (t = "none"),
              (!0 !== t && "true" != t) || (t = "name_only"),
              (this.state = { sValue: t });
            for (let e of this.props.vecOptionItems)
              this.vecOptionValues.push({
                sValue: e.sValue,
                sLocalized: e.sName,
                sLocalizedDescription: e.sTooltip,
              });
          }
          OnStringDropdownChanged(e) {
            F.SetOptionValue(this.props.sOptionName, e),
              this.setState({ sValue: e });
          }
          render() {
            let e = " ";
            for (let t of this.props.vecOptionItems)
              this.state.sValue == t.sValue && (e = t.sTooltip);
            return s.createElement(
              "div",
              { className: "FlexRow SetupLegacyRow" },
              s.createElement(
                G.Ay,
                {
                  content: (0, p.we)(
                    "#BindingUI_Options_" + this.props.sOptionName + "_tooltip",
                  ),
                  theme: "ControllerBindingToolTip",
                },
                s.createElement(
                  "label",
                  { className: "InputOptionLabel" },
                  (0, p.we)(
                    "#BindingUI_Options_" + this.props.sOptionName + "_Label",
                  ),
                ),
              ),
              s.createElement(
                "div",
                { className: "FlexColumn" },
                s.createElement(
                  G.Ay,
                  { content: e, theme: "ControllerBindingToolTip" },
                  s.createElement(
                    "div",
                    null,
                    s.createElement(U, {
                      vecOptions: this.vecOptionValues,
                      sModalClass: "PinTop",
                      sValueSelectedItem: this.state.sValue,
                      fnOptionSelected: this.OnStringDropdownChanged,
                      bReadOnly: this.props.bReadOnly,
                    }),
                  ),
                ),
              ),
            );
          }
        }
        (0, i.Cg)([h.o], Re.prototype, "OnStringDropdownChanged", null);
        class Le extends s.Component {
          constructor(e) {
            super(e);
            let t = !1;
            F.HasOptionValue(e.sOptionName)
              ? (t = F.GetOptionValue(e.sOptionName))
              : null != e.bDefaultValue && (t = e.bDefaultValue),
              (this.state = { bValue: t });
          }
          onCheckboxChanged(e) {
            F.SetOptionValue(this.props.sOptionName, e),
              this.setState({ bValue: e });
          }
          render() {
            return s.createElement(
              "div",
              { className: "FlexRow SetupLegacyRow" },
              s.createElement(
                G.Ay,
                {
                  content: (0, p.we)(
                    "#BindingUI_Options_" + this.props.sOptionName + "_tooltip",
                  ),
                  theme: "ControllerBindingToolTip",
                },
                s.createElement(
                  "label",
                  { className: "InputOptionLabel" },
                  (0, p.we)(
                    "#BindingUI_Options_" + this.props.sOptionName + "_Label",
                  ),
                ),
              ),
              s.createElement(
                "div",
                { className: "FlexColumn" },
                s.createElement("input", {
                  id: "BindingOption_" + this.props.sOptionName,
                  type: "checkbox",
                  checked: this.state.bValue,
                  value: this.props.sOptionName,
                  onChange: (e) => {
                    this.onCheckboxChanged(e.target.checked);
                  },
                  disabled: this.props.bReadOnly,
                }),
              ),
            );
          }
        }
        (0, i.Cg)([h.o], Le.prototype, "onCheckboxChanged", null);
        var De,
          Fe = o(5615);
        !(function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Personal = 1)] = "Personal"),
            (e[(e.Public = 2)] = "Public"),
            (e[(e.LocalFile = 3)] = "LocalFile"),
            (e[(e.ReplaceDefault = 4)] = "ReplaceDefault"),
            (e[(e.AddNewDefault = 5)] = "AddNewDefault");
        })(De || (De = {}));
        let xe = class extends s.Component {
          constructor(e) {
            super(e),
              (this.m_NameInput = null),
              (this.m_DescriptionInput = null),
              (this.m_bSavedOnce = !1),
              (this.state = { sError: null });
          }
          CloseSaveDialog() {
            this.props.ParentClose();
          }
          GetSaveTypeString(e) {
            switch (e) {
              default:
                return null;
              case De.Personal:
                return "personal";
              case De.Public:
                return "public";
              case De.LocalFile:
                return "local_file";
              case De.AddNewDefault:
              case De.ReplaceDefault:
                return "replace_default";
            }
          }
          ConfirmBindingName() {
            if (this.m_bSavedOnce) return;
            (this.m_bSavedOnce = !0),
              console.log(
                "Confirmed: ",
                this.m_NameInput.value,
                this.m_DescriptionInput.value,
              );
            let e = this.GetSaveTypeString(this.props.eSaveType);
            e
              ? F.SaveCurrentBinding(
                  this.m_NameInput.value,
                  this.m_DescriptionInput.value,
                  e,
                )
                  .then((e) => {
                    F.SetBindingURL(e.uri), this.CloseSaveDialog();
                  })
                  .catch((e) => {
                    const t = (null == e ? void 0 : e.message)
                      ? null == e
                        ? void 0
                        : e.message
                      : e;
                    console.log("Save failed: ", t),
                      this.setState({ sError: t });
                  })
              : console.error("Invalid save type: ", this.props.eSaveType);
          }
          BindNameInput(e) {
            this.m_NameInput = e;
          }
          BindDescriptionInput(e) {
            this.m_DescriptionInput = e;
          }
          GetUnboundActionItems() {
            const e = F.UnboundActions;
            let t = [];
            for (const o of e) {
              const [e, { vecRequired: n }] = o;
              for (const o of n)
                t.push(
                  `${F.GetActionSetLocalizedNameByName(e)}: ${o.localized_name}`,
                );
            }
            const o = t.length;
            return o > 5 && ((t = t.slice(0, 5)), t.push("+ " + (o - 5))), t;
          }
          render() {
            let e = F.GetDefaultBindingNameForSaveType(
              this.GetSaveTypeString(this.props.eSaveType),
            );
            return s.createElement(
              a.A,
              {
                visible: !0,
                onClose: this.CloseSaveDialog,
                showCloseButton: !1,
                animation: "fade",
                customStyles: { width: "60%", height: "fit-content" },
                className: "BindingChordsModal",
                closeOnEsc: !0,
              },
              s.createElement(
                "div",
                { className: "SaveDialogWrapper FlexColumn" },
                s.createElement(
                  "div",
                  { className: "FlexRow SaveTitleBar" },
                  s.createElement("img", {
                    className:
                      "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                    src: "images/bindingui/icon_download.svg",
                  }),
                  s.createElement(
                    "div",
                    { className: "Label Title TitleCenter AllCaps" },
                    (0, p.we)("#BindingUI_SaveTitle"),
                  ),
                ),
                this.state.sError &&
                  s.createElement(
                    "div",
                    { className: "BindingSaveErrorHeader" },
                    s.createElement(
                      "div",
                      { className: "BindingSaveErrorMessage" },
                      (0, p.we)(this.state.sError),
                    ),
                  ),
                this.props.eSaveType == De.Personal &&
                  s.createElement(
                    "div",
                    { className: "Label Title" },
                    (0, p.we)("#BindingUI_Save_Personal"),
                  ),
                this.props.eSaveType == De.Public &&
                  s.createElement(
                    "div",
                    { className: "Label Title" },
                    (0, p.we)("#BindingUI_Save_Public"),
                  ),
                this.props.eSaveType == De.LocalFile &&
                  s.createElement(
                    "div",
                    { className: "Label Title" },
                    (0, p.we)("#BindingUI_Save_Export"),
                  ),
                (this.props.eSaveType == De.ReplaceDefault ||
                  this.props.eSaveType == De.AddNewDefault) &&
                  s.createElement(
                    "div",
                    { className: "Label Title" },
                    (0, p.we)("#BindingUI_Save_ReplaceDefault"),
                  ),
                this.props.eSaveType == De.AddNewDefault &&
                  s.createElement(
                    "div",
                    { className: "Label" },
                    (0, p.we)("#BindingUI_Save_AddNewDefault"),
                  ),
                s.createElement(
                  "label",
                  { className: "Label", htmlFor: "SaveDialogName" },
                  (0, p.we)("#BindingUI_Binding_Name"),
                  " ",
                ),
                s.createElement("input", {
                  type: "text",
                  defaultValue: e,
                  ref: this.BindNameInput,
                }),
                s.createElement(
                  "label",
                  { className: "Label", htmlFor: "SaveDialogDescription" },
                  (0, p.we)("#BindingUI_Binding_Description"),
                ),
                s.createElement("textarea", {
                  cols: 80,
                  rows: 5,
                  ref: this.BindDescriptionInput,
                  defaultValue: this.props.sDescription,
                  placeholder: (0, p.we)(
                    "BindingUI_SaveDescriptionPlaceholder",
                  ),
                }),
                s.createElement(
                  "div",
                  { className: "FlexRow SaveBottomButtonRow" },
                  s.createElement(
                    "div",
                    {
                      onClick: this.ConfirmBindingName,
                      className: "ButtonControl",
                    },
                    (0, p.we)("#BindingUI_SaveBinding"),
                  ),
                  s.createElement(
                    "div",
                    {
                      onClick: this.CloseSaveDialog,
                      className: "ButtonControl",
                    },
                    (0, p.we)("#Button_Cancel"),
                  ),
                ),
              ),
            );
          }
        };
        (0, i.Cg)([h.o], xe.prototype, "CloseSaveDialog", null),
          (0, i.Cg)([h.o], xe.prototype, "ConfirmBindingName", null),
          (0, i.Cg)([h.o], xe.prototype, "BindNameInput", null),
          (0, i.Cg)([h.o], xe.prototype, "BindDescriptionInput", null),
          (0, i.Cg)([h.o], xe.prototype, "GetUnboundActionItems", null),
          (xe = (0, i.Cg)([r.PA], xe));
        let Ve = class extends s.Component {
          render() {
            let e = this.props.UnboundActions.vecRequired.map((e, t) =>
                s.createElement(
                  "div",
                  { key: t },
                  (0, p.we)(
                    "#BindingUI_UnboundActions_Required",
                    e.localized_name,
                  ),
                ),
              ),
              t = this.props.UnboundActions.vecSuggested.map((e, t) =>
                s.createElement(
                  "div",
                  { key: t },
                  (0, p.we)(
                    "#BindingUI_UnboundActions_Suggested",
                    e.localized_name,
                  ),
                ),
              ),
              o = "UnboundActionsOverlay";
            return (
              this.props.Visible && (e.length || t.length) && (o += " Visible"),
              this.props.Visible &&
                s.createElement(
                  "div",
                  { className: o },
                  s.createElement(
                    "div",
                    { className: "FlexColumn" },
                    s.createElement(
                      "div",
                      { className: "Label Title" },
                      (0, p.we)("#BindingUI_UnboundActions_Title"),
                    ),
                    e,
                    t,
                  ),
                )
            );
          }
        };
        var Ge;
        (Ve = (0, i.Cg)([r.PA], Ve)),
          (function (e) {
            (e[(e.ActionSet = 0)] = "ActionSet"),
              (e[(e.LegacySetup = 1)] = "LegacySetup"),
              (e[(e.SecondaryControllerSetup = 2)] =
                "SecondaryControllerSetup");
          })(Ge || (Ge = {}));
        let He = class extends s.Component {
          constructor(e) {
            super(e),
              (this.state = {
                bDeveloperOutput: !1,
                bShowPoseBindings: !1,
                bShowBindingSettings: !1,
                bBindingUIInMirroredMode: !1,
                bShowHapticsBindings: !1,
                bShowChordBindings: !1,
                bShowOptionsModal: !1,
                eSaveType: De.None,
                bShowSelectConfirmModal: !1,
                bShowSkeletonBindings: !1,
                bEditBindingOnSelectConfirm: !1,
                bShowUnboundActionsOverlay: !1,
                vecUnboundActions: { vecRequired: [], vecSuggested: [] },
                eTabType: Ge.ActionSet,
                bShowConfirmSaveWithUnbound: !1,
                bHasConfirmedSaveWithUnbound: !1,
              });
          }
          OnAppDropdownChanged(e) {
            F.SetSelectedApp(e);
          }
          OnActionSetDropdownChanged(e) {
            this.setState({ eTabType: Ge.ActionSet }),
              F.SetSelectedActionSet(e);
          }
          ToggleDeveloperOutput() {
            this.setState({ bDeveloperOutput: !this.state.bDeveloperOutput });
          }
          OpenPoseBindingsModal() {
            this.setState({ bShowPoseBindings: !0 });
          }
          ClosePoseBindingsModal() {
            this.setState({ bShowPoseBindings: !1 });
          }
          OpenHapticsBindingsModal() {
            this.setState({ bShowHapticsBindings: !0 });
          }
          CloseHapticsBindingsModal() {
            this.setState({ bShowHapticsBindings: !1 });
          }
          OpenSkeletonBindingsModal() {
            this.setState({ bShowSkeletonBindings: !0 });
          }
          CloseSkeletonBindingsModal() {
            this.setState({ bShowSkeletonBindings: !1 });
          }
          OpenChordBindingsModal() {
            this.setState({ bShowChordBindings: !0 });
          }
          CloseChordBindingsModal() {
            this.setState({ bShowChordBindings: !1 });
          }
          OpenOptionsModal() {
            this.setState({ bShowOptionsModal: !0 });
          }
          CloseOptionsModal() {
            this.setState({ bShowOptionsModal: !1 });
          }
          CloseSaveModal() {
            this.setState({ eSaveType: De.None });
          }
          ShowPublicModal() {
            F.HasUnboundActions && !this.state.bHasConfirmedSaveWithUnbound
              ? this.setState({ bShowConfirmSaveWithUnbound: !0 })
              : this.setState({ eSaveType: De.Public });
          }
          ShowPersonalModal() {
            F.HasUnboundActions &&
              !this.state.bHasConfirmedSaveWithUnbound &&
              this.setState({ bShowConfirmSaveWithUnbound: !0 }),
              this.setState({ eSaveType: De.Personal });
          }
          ShowExportModal() {
            F.HasUnboundActions &&
              !this.state.bHasConfirmedSaveWithUnbound &&
              this.setState({ bShowConfirmSaveWithUnbound: !0 }),
              this.setState({ eSaveType: De.LocalFile });
          }
          ShowReplaceDefaultModal() {
            F.HasUnboundActions &&
              !this.state.bHasConfirmedSaveWithUnbound &&
              this.setState({ bShowConfirmSaveWithUnbound: !0 });
            let e =
              null !=
              F.GetSelectedAppDefaultBinding(
                F.SelectedControllerTypeInfo.controller_type,
              );
            this.setState({
              eSaveType: e ? De.ReplaceDefault : De.AddNewDefault,
            });
          }
          ShowUnboundActionsOverlay(e) {
            this.setState({
              bShowUnboundActionsOverlay: !0,
              vecUnboundActions: e,
            });
          }
          HideUnboundActionsOverlay() {
            this.setState({ bShowUnboundActionsOverlay: !1 });
          }
          SetBindingUIInMirroredMode(e) {
            this.state.bBindingUIInMirroredMode != e &&
              this.setState({ bBindingUIInMirroredMode: e });
          }
          SelectThisBinding(e, t) {
            f.Loading = !0;
            let o = F.SelectedControllerTypeInfo;
            F.SelectConfig(F.SelectedApp, o ? o.controller_type : "", e).then(
              () => {
                F.ReloadCurrentApp().then(() => {
                  t ? f.EditCurrentBinding() : f.ShowBindingList(),
                    setTimeout(() => {
                      f.Loading = !1;
                    }, 1);
                });
              },
            );
          }
          SelectWouldOverwriteAutosave() {
            let e = f.CurrentBinding;
            return (
              !!e &&
              this.props.bReadOnlyView && "autosave" == e.type &&
              e.url != F.LoadedBindingURL
            );
          }
          ShouldShowSelectConfirmDialog() {
            return (
              this.ThisConfigNeedsUpgrade() ||
              this.SelectWouldOverwriteAutosave()
            );
          }
          OnSelectBinding(e) {
            this.ShouldShowSelectConfirmDialog()
              ? this.setState({
                  bShowSelectConfirmModal: !0,
                  bEditBindingOnSelectConfirm: e,
                })
              : this.OnSelectConfirmed(F.LoadedBindingURL, e);
          }
          ThisConfigNeedsUpgrade() {
            let e = F.SelectedAppActions;
            return (
              F.CurrentBindingActionManifestVersion < e.minimum_required_version
            );
          }
          OnSelectConfirmed(e, t) {
            this.ThisConfigNeedsUpgrade()
              ? (F.PreserveCurrentBindingForUpgrade().then(() => {
                  F.AutosaveBinding();
                }),
                this.OnSelectDone())
              : (this.SelectThisBinding(e, t), this.OnSelectDone());
          }
          OnSelectDone() {
            this.setState({ bShowSelectConfirmModal: !1 });
          }
          OnSaveCurrentBinding(e) {
            let t = f.CurrentBinding;
            F.SetBindingURL(t.url),
              F.ReloadControllerConfiguration().then(() => {
                F.SaveCurrentBinding(t.name, t.description, "personal").then(
                  () => {
                    e();
                  },
                );
              });
          }
          renderSelectConfirmModal() {
            let e,
              t = null,
              o = !0,
              n = (0, p.we)("#Button_Discard");
            if (this.ThisConfigNeedsUpgrade()) {
              let i = _.s.GetApp(F.SelectedApp);
              (e = (0, p.we)("#BindingUI_List_Upgrade_Confirm", i.name)),
                (o = this.SelectWouldOverwriteAutosave()),
                o
                  ? (t = (0, p.we)("#BindingUI_List_Select_Confirm_Convert"))
                  : (n = (0, p.we)("#Button_Import"));
            } else e = (0, p.we)("#BindingUI_List_Select_Confirm");
            let i = null;
            return (
              f.DesktopMode || (i = { height: "30%", width: "30%" }),
              s.createElement(
                a.A,
                {
                  visible: this.state.bShowSelectConfirmModal,
                  onClose: this.OnSelectDone,
                  showCloseButton: !1,
                  animation: "fade",
                  className: "ModeSettingsModal",
                  closeOnEsc: !0,
                  customStyles: i,
                },
                this.state.bShowSelectConfirmModal &&
                  s.createElement(
                    "div",
                    { className: "FlexFullHeightColumnCentered" },
                    s.createElement(
                      "div",
                      { className: "Label Title" },
                      (0, p.we)("#BindingUI_ConfirmSelect_Title"),
                    ),
                    s.createElement("div", { className: "Label" }, e),
                    t &&
                      s.createElement(
                        "div",
                        { className: "Label SecondRow" },
                        t,
                      ),
                    s.createElement(
                      "div",
                      { className: "FlexRow BottomButtons" },
                      s.createElement(
                        "div",
                        {
                          className: "ButtonControl",
                          onClick: () =>
                            this.OnSelectConfirmed(
                              F.LoadedBindingURL,
                              this.state.bEditBindingOnSelectConfirm,
                            ),
                        },
                        n,
                      ),
                      o &&
                        s.createElement(
                          "div",
                          {
                            className: "ButtonControl",
                            onClick: this.OnSaveClicked,
                          },
                          (0, p.we)("#Button_Save"),
                        ),
                      s.createElement(
                        "div",
                        {
                          className: "ButtonControl",
                          onClick: this.OnSelectDone,
                        },
                        (0, p.we)("#Button_Cancel"),
                      ),
                    ),
                  ),
              )
            );
          }
          renderSaveWithUnboundModal() {
            let e = "";
            F.UnboundRequiredActionStrings.forEach((t) => {
              e += `${t}\n`;
            });
            const t = Math.max(F.UnboundRequiredActionStrings.length, 4);
            return s.createElement(
              a.A,
              {
                visible: this.state.bShowConfirmSaveWithUnbound,
                onClose: this.OnConfirmUnboundCancel,
                showCloseButton: !1,
                animation: "fade",
                className: "BindingChordsModal",
                closeOnEsc: !0,
                customStyles: { height: "fit-content", width: "60%" },
              },
              s.createElement(
                "div",
                { className: "SaveDialogWrapper FlexColumn" },
                s.createElement(
                  "div",
                  { className: "FlexRow SaveTitleBar" },
                  s.createElement("img", {
                    className:
                      "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                    src: "images/bindingui/icon_download.svg",
                  }),
                  s.createElement(
                    "div",
                    { className: "Label Title TitleCenter AllCaps" },
                    (0, p.we)("#BindingUI_ConfirmSaveWithUnbound_Title"),
                  ),
                ),
                s.createElement(
                  "label",
                  { className: "Label" },
                  (0, p.we)("#BindingUI_ConfirmSaveWithUnbound_Description"),
                  " ",
                ),
                s.createElement("br", null),
                s.createElement(
                  "label",
                  { className: "Label" },
                  (0, p.we)("#BindingUI_ConfirmSaveWithUnbound_ListUnbound"),
                  " ",
                ),
                s.createElement("textarea", {
                  cols: 80,
                  rows: t,
                  style: { resize: "none", color: "#FF0000" },
                  readOnly: !0,
                  defaultValue: e,
                }),
                s.createElement("br", null),
                s.createElement(
                  "label",
                  { className: "Label" },
                  (0, p.we)("#BindingUI_ConfirmSaveWithUnbound_AreYouSure"),
                  " ",
                ),
                s.createElement(
                  "div",
                  { className: "FlexRow SaveBottomButtonRow" },
                  s.createElement(
                    "div",
                    {
                      className: "ButtonControl",
                      onClick: this.OnConfirmUnboundSave,
                    },
                    (0, p.we)(
                      "#BindingUI_ConfirmSaveWithUnbound_ConfirmButton",
                    ),
                  ),
                  s.createElement(
                    "div",
                    {
                      className: "ButtonControl",
                      onClick: this.OnConfirmUnboundCancel,
                    },
                    (0, p.we)("#Button_Cancel"),
                  ),
                ),
              ),
            );
          }
          OnConfirmUnboundSave() {
            this.setState({
              bShowConfirmSaveWithUnbound: !1,
              bHasConfirmedSaveWithUnbound: !0,
            });
          }
          OnConfirmUnboundCancel() {
            this.setState({
              bShowConfirmSaveWithUnbound: !1,
              eSaveType: De.None,
            });
          }
          OnSaveClicked() {
            let e = F.LoadedBindingURL;
            this.OnSaveCurrentBinding(() =>
              this.OnSelectConfirmed(e, this.state.bEditBindingOnSelectConfirm),
            );
          }
          OnLegacySetup() {
            this.setState({ eTabType: Ge.LegacySetup });
          }
          OnSecondaryControllerSetup() {
            this.setState({ eTabType: Ge.SecondaryControllerSetup });
          }
          render() {
            let e = F.ActionSets,
              t = e.map((e, t) => {
                let o = "Label Tab PositionRelative",
                  n = new M();
                F.UnboundActions.has(e.name) &&
                  (n = F.UnboundActions.get(e.name));
                let i = n.vecRequired.length + n.vecSuggested.length;
                return (
                  n.vecRequired.length > 0
                    ? (o += " Error")
                    : n.vecSuggested.length > 0 && (o += " Warning"),
                  e.name == F.SelectedActionSet &&
                    this.state.eTabType == Ge.ActionSet &&
                    (o += " Selected"),
                  s.createElement(
                    "div",
                    {
                      key: t,
                      className: o,
                      onMouseEnter: () => {
                        this.ShowUnboundActionsOverlay(n);
                      },
                      onMouseLeave: this.HideUnboundActionsOverlay,
                      onClick: () => {
                        this.OnActionSetDropdownChanged(e.name);
                      },
                    },
                    e.localized_name,
                    i > 0 &&
                      s.createElement(
                        "div",
                        { className: "UnboundActionsCount" },
                        i,
                      ),
                  )
                );
              });
            if (F.SelectedBindingIsLegacy || F.ManifestOptions.length > 0) {
              let e = "Label Tab PositionRelative";
              this.state.eTabType == Ge.LegacySetup && (e += " Selected"),
                t.push(
                  s.createElement(
                    "div",
                    {
                      key: "action_aliases",
                      className: e,
                      onClick: this.OnLegacySetup,
                    },
                    (0, p.we)("#LegacySetupTab"),
                  ),
                );
            }
            if (F.IsSecondaryController) {
              let e = "Label Tab PositionRelative";
              this.state.eTabType == Ge.SecondaryControllerSetup &&
                (e += " Selected"),
                t.push(
                  s.createElement(
                    "div",
                    {
                      key: "action_aliases",
                      className: e,
                      onClick: this.OnSecondaryControllerSetup,
                    },
                    (0, p.we)("#SecondaryControllerTab"),
                  ),
                );
            }
            let o,
              n = !1,
              i = !1;
            F.SelectedControllerTypeInfo &&
              this.state.eTabType == Ge.ActionSet &&
              ((o = F.SelectedControllerTypeInfo),
              (n = "controller_handed" == o.input_bindingui_mode),
              (i =
                "hmd" == o.input_bindingui_mode ||
                "single_device" == o.input_bindingui_mode));
            let l = this.state.bDeveloperOutput
              ? "Hide Developer output"
              : "Show Developer output";
            const r = {
                width: "60%",
                height: "auto",
                padding: "0px",
                maxHeight: "90%",
              },
              c = {
                width: "fit-content",
                height: "fit-content",
                padding: "0px",
                maxHeight: "90%",
              };
            let h = _.s.GetApp(F.SelectedApp),
              u = "";
            h && (u = h.name);
            let m,
              g = this.props.bReadOnlyView
                ? (0, p.we)("#BindingUI_ViewPageTitle", F.ConfigName)
                : (0, p.we)("#BindingUI_EditPageTitle", F.ConfigName),
              C = "#BindingUI_PageSubTitle",
              y = F.GetOptionValue("variant");
            y &&
              ((m = (0, p.we)("#BindingVariant_" + y)),
              (C = "#BindingUI_PageSubTitle_WithVariant"));
            let b = (0, p.we)(
                C,
                F.SelectedControllerTypeLocalizedName,
                u,
                (0, p.we)("#BindingUI_BindingType_" + F.CurrentBindingSaveType),
                m,
              ),
              v = !this.ThisConfigNeedsUpgrade() && this.props.bReadOnlyView,
              A = this.ThisConfigNeedsUpgrade();
            return s.createElement(
              "div",
              { className: "FlexColumn FullPage" },
              s.createElement(
                "div",
                { className: "TopRow FlexColumn" },
                s.createElement(
                  "div",
                  { className: "FlexColumn DescriptionTopRow" },
                  s.createElement(ve, {
                    fnOnClick: f.ShowBindingList,
                    strTitle: g,
                    strSubTitle: b,
                    fnOpenOptionsModal: this.OpenOptionsModal,
                  }),
                ),
                e.length > 0 &&
                  s.createElement(
                    Fe.M,
                    {
                      scrollDirection: Fe.D.Horizontal,
                      className: (0, d.FH)("ActionTabContainer", "TabRow"),
                    },
                    t,
                  ),
                this.state.eTabType == Ge.ActionSet &&
                  s.createElement(Ve, {
                    Visible: this.state.bShowUnboundActionsOverlay,
                    UnboundActions: this.state.vecUnboundActions,
                  }),
                F.SaveNoticeText &&
                  s.createElement(
                    "div",
                    { className: "UnboundActionsOverlay Visible" },
                    (0, p.we)(F.SaveNoticeText),
                  ),
              ),
              n &&
                s.createElement(ue, {
                  bSingleMode: !1,
                  selectedActionSet: F.SelectedActionSetDetails,
                  fnSetMirroredMode: this.SetBindingUIInMirroredMode,
                  fnOpenChordBindingsModal: this.OpenChordBindingsModal,
                  fnOpenHapticsBindingsModal: this.OpenHapticsBindingsModal,
                  fnOpenPoseBindingsModal: this.OpenPoseBindingsModal,
                  fnOpenSkeletonBindingsModal: this.OpenSkeletonBindingsModal,
                  bReadOnly: this.props.bReadOnlyView,
                }),
              i &&
                s.createElement(ue, {
                  bSingleMode: !0,
                  fnOpenChordBindingsModal: this.OpenChordBindingsModal,
                  fnOpenHapticsBindingsModal: this.OpenHapticsBindingsModal,
                  fnOpenPoseBindingsModal: this.OpenPoseBindingsModal,
                  fnOpenSkeletonBindingsModal: this.OpenSkeletonBindingsModal,
                  bReadOnly: this.props.bReadOnlyView,
                }),
              this.state.eTabType == Ge.LegacySetup &&
                s.createElement(
                  "div",
                  { className: "LegacySetupWrapper" },
                  s.createElement(
                    "div",
                    { className: "LegacySetupContents" },
                    s.createElement(Ee, {
                      readOnly: this.props.bReadOnlyView,
                      options: F.ManifestOptions,
                    }),
                    s.createElement(Be, { readOnly: this.props.bReadOnlyView }),
                    s.createElement(Pe, { readOnly: this.props.bReadOnlyView }),
                  ),
                ),
              this.state.eTabType == Ge.SecondaryControllerSetup &&
                s.createElement(
                  "div",
                  { className: "LegacySetupWrapper" },
                  s.createElement(
                    "div",
                    { className: "LegacySetupContents" },
                    s.createElement(Ee, {
                      readOnly: this.props.bReadOnlyView,
                      options: F.SecondaryControllerOptions,
                    }),
                  ),
                ),
              s.createElement(
                "div",
                { className: "BottomButtonRow" },
                s.createElement("hr", { className: "BottomButtonHR" }),
                s.createElement(
                  "div",
                  {
                    className: "BindingManageButtons FlexFullWidthRowCentered",
                  },
                  !this.props.bReadOnlyView &&
                    s.createElement(
                      "div",
                      {
                        className: "FlexColumn ButtonControl SteamRequired",
                        onClick: this.ShowPublicModal,
                      },
                      (0, p.we)("#BindingUI_PublishToWorkshop"),
                    ),
                  !this.props.bReadOnlyView &&
                    s.createElement(
                      "div",
                      {
                        className: "FlexColumn ButtonControl SteamRequired",
                        onClick: this.ShowPersonalModal,
                      },
                      (0, p.we)("#BindingUI_SavePersonal"),
                    ),
                  v &&
                    s.createElement(
                      "div",
                      {
                        className: "FlexColumn ButtonControl",
                        onClick: () => {
                          this.OnSelectBinding(!1);
                        },
                      },
                      (0, p.we)("#BindingUI_SelectThisBinding"),
                    ),
                  v &&
                    s.createElement(
                      "div",
                      {
                        className: "FlexColumn ButtonControl",
                        onClick: () => {
                          this.OnSelectBinding(!0);
                        },
                      },
                      (0, p.we)("#BindingUI_EditThisBinding"),
                    ),
                  A &&
                    s.createElement(
                      "div",
                      {
                        className: "FlexColumn ButtonControl",
                        onClick: () => {
                          this.OnSelectBinding(!0);
                        },
                      },
                      (0, p.we)("#BindingUI_ImportThisBinding"),
                    ),
                  S.W.BDevMode &&
                    s.createElement("div", {
                      className: "BindingManageButtonsHR",
                    }),
                  S.W.BDevMode &&
                    s.createElement(
                      "div",
                      {
                        className: "FlexColumn ButtonControl",
                        onClick: this.ToggleDeveloperOutput,
                      },
                      l,
                    ),
                  S.W.BDevMode &&
                    s.createElement(
                      "div",
                      {
                        className: "FlexColumn ButtonControl",
                        onClick: this.ShowExportModal,
                      },
                      (0, p.we)("#BindingUI_ExportBindingFile"),
                    ),
                  S.W.BDevMode &&
                    !F.SelectedBindingIsLegacy &&
                    !F.SelectedBindingIsOpenXR &&
                    s.createElement(
                      "div",
                      {
                        className: "FlexColumn ButtonControl",
                        onClick: this.ShowReplaceDefaultModal,
                      },
                      (0, p.we)("#BindingUI_ReplaceDefaultFile"),
                    ),
                  F.BSelectedActionSetHasPoses &&
                    s.createElement(
                      a.A,
                      {
                        visible: this.state.bShowPoseBindings,
                        onClose: this.ClosePoseBindingsModal,
                        showCloseButton: !1,
                        animation: "fade",
                        customStyles: r,
                        className: "BindingPosesModal",
                        closeOnEsc: !0,
                      },
                      this.state.bShowPoseBindings &&
                        s.createElement(ye, {
                          fnCloseModal: this.ClosePoseBindingsModal,
                          eActionSourceType: ge.Pose,
                          bSingleControllerMode: i,
                          bSlaveSecondaryControllerBinding: !(
                            n && !this.state.bBindingUIInMirroredMode
                          ),
                          bReadOnly: this.props.bReadOnlyView,
                        }),
                    ),
                  F.BSelectedActionSetHasHaptics &&
                    s.createElement(
                      a.A,
                      {
                        visible: this.state.bShowHapticsBindings,
                        onClose: this.CloseHapticsBindingsModal,
                        showCloseButton: !1,
                        animation: "fade",
                        customStyles: r,
                        className: "BindingPosesModal",
                        closeOnEsc: !0,
                      },
                      this.state.bShowHapticsBindings &&
                        s.createElement(ye, {
                          fnCloseModal: this.CloseHapticsBindingsModal,
                          eActionSourceType: ge.Haptics,
                          bSingleControllerMode: i,
                          bSlaveSecondaryControllerBinding: !(
                            n && !this.state.bBindingUIInMirroredMode
                          ),
                          bReadOnly: this.props.bReadOnlyView,
                        }),
                    ),
                  F.BSelectedActionSetHasSkeletons &&
                    s.createElement(
                      a.A,
                      {
                        visible: this.state.bShowSkeletonBindings,
                        onClose: this.CloseSkeletonBindingsModal,
                        showCloseButton: !1,
                        animation: "fade",
                        customStyles: r,
                        className: "BindingPosesModal",
                        closeOnEsc: !0,
                      },
                      this.state.bShowSkeletonBindings &&
                        s.createElement(ye, {
                          fnCloseModal: this.CloseSkeletonBindingsModal,
                          eActionSourceType: ge.Skeleton,
                          bSingleControllerMode: i,
                          bSlaveSecondaryControllerBinding: !(
                            n && !this.state.bBindingUIInMirroredMode
                          ),
                          bReadOnly: this.props.bReadOnlyView,
                        }),
                    ),
                  s.createElement(
                    a.A,
                    {
                      visible: this.state.bShowChordBindings,
                      onClose: this.CloseChordBindingsModal,
                      showCloseButton: !1,
                      animation: "fade",
                      className: "BindingChordsModal",
                      closeOnEsc: !0,
                      customStyles: c,
                    },
                    this.state.bShowChordBindings &&
                      s.createElement(be, {
                        fnCloseModal: this.CloseChordBindingsModal,
                        bReadOnly: this.props.bReadOnlyView,
                      }),
                  ),
                  s.createElement(
                    a.A,
                    {
                      visible: this.state.bShowOptionsModal,
                      onClose: this.CloseOptionsModal,
                      showCloseButton: !1,
                      animation: "fade",
                      className: "BindingChordsModal",
                      closeOnEsc: !0,
                      customStyles: c,
                    },
                    this.state.bShowOptionsModal &&
                      s.createElement(Ne, {
                        fnCloseModal: this.CloseOptionsModal,
                        bReadOnly: this.props.bReadOnlyView,
                      }),
                  ),
                ),
                s.createElement(
                  "div",
                  { className: "DebugButtons FlexFullWidthRowCentered" },
                  this.state.bDeveloperOutput &&
                    s.createElement("textarea", {
                      readOnly: !0,
                      style: { width: "1000px", height: "400px" },
                      value: F.BindingConfig,
                    }),
                ),
              ),
              !this.state.bShowConfirmSaveWithUnbound &&
                this.state.eSaveType != De.None &&
                s.createElement(xe, {
                  sDescription: F.ConfigDescription,
                  eSaveType: this.state.eSaveType,
                  ParentClose: this.CloseSaveModal,
                }),
              !this.state.bShowConfirmSaveWithUnbound &&
                this.renderSelectConfirmModal(),
              this.renderSaveWithUnboundModal(),
            );
          }
        };
        (0, i.Cg)([h.o], He.prototype, "OnAppDropdownChanged", null),
          (0, i.Cg)([h.o], He.prototype, "OnActionSetDropdownChanged", null),
          (0, i.Cg)([h.o], He.prototype, "ToggleDeveloperOutput", null),
          (0, i.Cg)([h.o], He.prototype, "OpenPoseBindingsModal", null),
          (0, i.Cg)([h.o], He.prototype, "ClosePoseBindingsModal", null),
          (0, i.Cg)([h.o], He.prototype, "OpenHapticsBindingsModal", null),
          (0, i.Cg)([h.o], He.prototype, "CloseHapticsBindingsModal", null),
          (0, i.Cg)([h.o], He.prototype, "OpenSkeletonBindingsModal", null),
          (0, i.Cg)([h.o], He.prototype, "CloseSkeletonBindingsModal", null),
          (0, i.Cg)([h.o], He.prototype, "OpenChordBindingsModal", null),
          (0, i.Cg)([h.o], He.prototype, "CloseChordBindingsModal", null),
          (0, i.Cg)([h.o], He.prototype, "OpenOptionsModal", null),
          (0, i.Cg)([h.o], He.prototype, "CloseOptionsModal", null),
          (0, i.Cg)([h.o], He.prototype, "CloseSaveModal", null),
          (0, i.Cg)([h.o], He.prototype, "ShowPublicModal", null),
          (0, i.Cg)([h.o], He.prototype, "ShowPersonalModal", null),
          (0, i.Cg)([h.o], He.prototype, "ShowExportModal", null),
          (0, i.Cg)([h.o], He.prototype, "ShowReplaceDefaultModal", null),
          (0, i.Cg)([h.o], He.prototype, "ShowUnboundActionsOverlay", null),
          (0, i.Cg)([h.o], He.prototype, "HideUnboundActionsOverlay", null),
          (0, i.Cg)([h.o], He.prototype, "SetBindingUIInMirroredMode", null),
          (0, i.Cg)([h.o], He.prototype, "SelectThisBinding", null),
          (0, i.Cg)([h.o], He.prototype, "OnSelectBinding", null),
          (0, i.Cg)([h.o], He.prototype, "OnSelectConfirmed", null),
          (0, i.Cg)([h.o], He.prototype, "OnSelectDone", null),
          (0, i.Cg)([h.o], He.prototype, "OnSaveCurrentBinding", null),
          (0, i.Cg)([h.o], He.prototype, "renderSelectConfirmModal", null),
          (0, i.Cg)([h.o], He.prototype, "renderSaveWithUnboundModal", null),
          (0, i.Cg)([h.o], He.prototype, "OnConfirmUnboundSave", null),
          (0, i.Cg)([h.o], He.prototype, "OnConfirmUnboundCancel", null),
          (0, i.Cg)([h.o], He.prototype, "OnSaveClicked", null),
          (0, i.Cg)([h.o], He.prototype, "OnLegacySetup", null),
          (0, i.Cg)([h.o], He.prototype, "OnSecondaryControllerSetup", null),
          (He = (0, i.Cg)([r.PA], He));
        class Ue {
          constructor(e) {
            (this.m_communityData = void 0),
              (this.m_bLoadingData = !1),
              (this.m_sSteamID = void 0),
              (this.m_dateLastUpdate = void 0),
              (this.m_sSteamID = e),
              e.length > 0 && this.EnsureCommunityDataLoaded(),
              (0, g.makeObservable)(this);
          }
          get community_data_ready() {
            return void 0 !== this.m_communityData;
          }
          get avatar_url() {
            return this.m_communityData && this.m_communityData.avatar_url;
          }
          get persona_name() {
            return this.m_communityData && this.m_communityData.persona_name;
          }
          get player_level() {
            return this.m_communityData && this.m_communityData.level;
          }
          get player_level_class() {
            return this.m_communityData && this.m_communityData.level_class;
          }
          get player_badge() {
            return this.m_communityData && this.m_communityData.favorite_badge;
          }
          get player_in_game() {
            return this.m_communityData && this.m_communityData.in_game;
          }
          EnsureCommunityDataLoaded() {
            if (void 0 === this.m_communityData && !this.m_bLoadingData) {
              this.m_bLoadingData = !0;
              let e = "https://steamcommunity.com/";
              m()
                .get(e + "miniprofile/s" + this.m_sSteamID + "/json")
                .then((e) => {
                  let t = e.data;
                  t &&
                    t.avatar_url &&
                    ((this.m_communityData = t),
                    (this.m_dateLastUpdate = new Date())),
                    (this.m_bLoadingData = !1);
                })
                .catch((e) => {
                  console.log(e), (this.m_bLoadingData = !1);
                });
            }
          }
        }
        (0, i.Cg)([g.observable], Ue.prototype, "m_communityData", void 0),
          (0, i.Cg)([h.o], Ue.prototype, "EnsureCommunityDataLoaded", null);
        class We {
          constructor() {
            (this.m_SteamCommunityUsers = g.observable.map()),
              (0, g.makeObservable)(this);
          }
          GetUserInformation(e) {
            return (
              this.m_SteamCommunityUsers.has(e) ||
                this.RequestUserInformation(e),
              this.m_SteamCommunityUsers.get(e)
            );
          }
          RequestUserInformation(e) {
            this.m_SteamCommunityUsers.hasOwnProperty(e) ||
              this.m_SteamCommunityUsers.set(e, new Ue(e));
          }
        }
        (0, i.Cg)(
          [g.observable],
          We.prototype,
          "m_SteamCommunityUsers",
          void 0,
        ),
          (0, i.Cg)([h.o], We.prototype, "GetUserInformation", null),
          (0, i.Cg)([h.o], We.prototype, "RequestUserInformation", null);
        const ze = new We();
        window.steamcommunity = ze;
        let je = class extends s.Component {
          constructor(e) {
            super(e), (this.state = { bIsVisible: !0 });
          }
          CloseDialog() {
            this.setState({ bIsVisible: !1 });
          }
          render() {
            let e = null;
            return (
              f.DesktopMode || (e = { height: "30%", width: "30%" }),
              s.createElement(
                a.A,
                {
                  visible: this.state.bIsVisible,
                  onClose: this.CloseDialog,
                  showCloseButton: !1,
                  animation: "fade",
                  className: "BindingChordsModal",
                  closeOnEsc: !0,
                  customStyles: e,
                },
                s.createElement(
                  "div",
                  {
                    className:
                      "SaveDialogWrapper FlexColumn LoadErrorDialogWrapper",
                  },
                  s.createElement(
                    "div",
                    { className: "Label TitleCenter" },
                    this.props.sError,
                  ),
                  s.createElement(
                    "div",
                    {
                      className:
                        "FlexRow SaveBottomButtonRow LoadErrorCloseButton",
                    },
                    this.props.bCanClose
                      ? s.createElement(
                          "div",
                          {
                            onClick: this.CloseDialog,
                            className: "ButtonControl",
                          },
                          (0, p.we)("#Button_Close"),
                        )
                      : s.createElement(
                          "div",
                          {
                            className: "ButtonControl",
                            onClick: () => {
                              F.ClearSelectedApp(),
                                f.ShowAppSelect(),
                                this.CloseDialog();
                            },
                          },
                          (0, p.we)("#BindingUI_List_ErrorReturnToAppSelect"),
                        ),
                  ),
                ),
              )
            );
          }
        };
        (0, i.Cg)([h.o], je.prototype, "CloseDialog", null),
          (je = (0, i.Cg)([r.PA], je));
        let qe = class extends s.Component {
          constructor(e) {
            super(e);
            let t = F.SelectedAppActions;
            (this.state = {
              bShowDeleteConfirmModal: !1,
              bShowUpgradeConfirmModal: !1,
              bOldVersion:
                !!t && this.props.result.actionManifestVersion < t.version,
            }),
              this.props.result.steamIDOwner.length &&
                "0" != this.props.result.steamIDOwner &&
                ze.RequestUserInformation(this.props.result.steamIDOwner);
          }
          OnDelete() {
            this.setState({ bShowDeleteConfirmModal: !0 });
          }
          OnDeleteConfirmed() {
            return (0, i.sH)(this, void 0, void 0, function* () {
              this.setState({ bShowDeleteConfirmModal: !1 }),
                yield F.DeleteBinding(this.props.result.url),
                yield f.GetBindingList();
            });
          }
          OnDeleteCancel() {
            this.setState({ bShowDeleteConfirmModal: !1 });
          }
          renderDeleteConfirmModal(e) {
            return s.createElement(
              a.A,
              {
                visible: this.state.bShowDeleteConfirmModal,
                onClose: this.OnDeleteCancel,
                showCloseButton: !1,
                animation: "fade",
                className: "ModeSettingsModal",
                closeOnEsc: !0,
              },
              this.state.bShowDeleteConfirmModal &&
                s.createElement(
                  "div",
                  { className: "FlexFullHeightColumnCentered" },
                  s.createElement(
                    "div",
                    { className: "Label" },
                    (0, p.we)("#BindingUI_List_Delete_Confirm", e.name),
                  ),
                  s.createElement(
                    "div",
                    { className: "FlexRow" },
                    s.createElement(
                      "div",
                      {
                        className: "ButtonControl",
                        onClick: this.OnDeleteConfirmed,
                      },
                      (0, p.we)("#Button_Delete"),
                    ),
                    s.createElement(
                      "div",
                      {
                        className: "ButtonControl",
                        onClick: this.OnDeleteCancel,
                      },
                      (0, p.we)("#Button_Cancel"),
                    ),
                  ),
                ),
            );
          }
          OnView() {
            this.props.fnViewBinding(
              this.props.result.url,
              !this.props.bCurrentlySelectedBinding,
            );
          }
          OnSelect() {
            this.props.fnSelectBinding(this.props.result.url);
          }
          render() {
            var e;
            let t,
              o,
              n = new Date(),
              i = new Date(1e3 * this.props.result.time),
              l =
                n.getTime() - i.getTime() > 1728e5
                  ? i.toLocaleDateString()
                  : i.toLocaleString(),
              r = this.props.result,
              a = "developer" == r.type,
              c = "0" != r.steamIDOwner && !a,
              d = _.s.GetApp(F.SelectedApp),
              h = d ? d.name : "";
            a &&
              ((r.name && 0 != r.name.length) ||
                (F.SelectedBindingIsLegacy
                  ? (r.name = (0, p.we)(
                      "#BindingUI_List_Legacy_Binding_Title",
                      h,
                    ))
                  : (r.name = (0, p.we)(
                      "#BindingUI_List_Developer_Binding_Title",
                      h,
                    ))),
              (r.description && 0 != r.description.length) ||
                (F.SelectedBindingIsLegacy
                  ? (r.description = (0, p.we)(
                      "#BindingUI_List_Legacy_Binding_Description",
                    ))
                  : (r.description = (0, p.we)(
                      "#BindingUI_List_Developer_Binding_Description",
                    )))),
              c &&
                ((o = ze.GetUserInformation(r.steamIDOwner).avatar_url),
                (t = ze.GetUserInformation(r.steamIDOwner).persona_name));
            let u = this.props.bCurrentlySelectedBinding
                ? (0, p.we)("#BindingUI_List_Edit")
                : (0, p.we)("#BindingUI_List_View"),
              m = r.name;
            "autosave" == r.type &&
              (m = (0, p.we)("#BindingUI_List_Autosave", r.name));
            let g = null;
            this.state.bOldVersion &&
              (g = this.props.bCurrentlySelectedBinding
                ? (0, p.we)(
                    "#BindingUI_List_OldVersionWarning_CurrentBinding",
                    h,
                  )
                : (0, p.we)("#BindingUI_List_OldVersionWarning", h));
            let S = null;
            if (r.secondsPlayed > 0) {
              let e = r.secondsPlayed / 60;
              S = (0, p.we)("#BindingUI_List_MinutesPlayed", e.toFixed(0));
            }
            let C = null;
            if (r.secondsPlayedThisMonth > 0) {
              let e = r.secondsPlayedThisMonth / 60;
              C = (0, p.we)(
                "#BindingUI_List_MinutesPlayedThisMonth",
                e.toFixed(0),
              );
            }
            let y =
                null === (e = F.SelectedControllerTypeInfo) || void 0 === e
                  ? void 0
                  : e.controller_type,
              f =
                null != r.controllerType &&
                "" != r.controllerType &&
                r.controllerType != y;
            return s.createElement(
              "div",
              { className: "BindingEntry FlexRow" },
              o &&
                s.createElement("img", {
                  className: "SteamCommunityProfileImage",
                  src: o,
                }),
              c &&
                !o &&
                s.createElement("div", {
                  className: "SteamCommunityProfileImage",
                }),
              s.createElement(
                "div",
                { className: "BindingDetails" },
                !this.props.bCurrentlySelectedBinding &&
                  this.props.fnSelectBinding &&
                  s.createElement(
                    "div",
                    {
                      className:
                        "BindingListEntryButton ButtonControl BindingSelectButton",
                      onClick: this.OnSelect,
                    },
                    (0, p.we)("#BindingUI_List_Select"),
                  ),
                !F.HasBindingUriFailedToLoad(r.url) &&
                  s.createElement(
                    "div",
                    {
                      className:
                        "BindingListEntryButton ButtonControl BindingSelectButton",
                      onClick: this.OnView,
                    },
                    u,
                  ),
                r.owned &&
                  !this.props.bCurrentlySelectedBinding &&
                  s.createElement(
                    "div",
                    {
                      className:
                        "BindingListEntryButton BindingSelectButton DeleteButton ButtonControl",
                      onClick: () => {
                        this.OnDelete();
                      },
                    },
                    s.createElement("img", {
                      className: "ActionButtonImage",
                      src: "images/bindingui/icon_trash.svg",
                    }),
                  ),
                s.createElement(
                  "span",
                  { className: "BindingName" },
                  m,
                  s.createElement("br", null),
                ),
                s.createElement(
                  "span",
                  { className: "BindingDescription" },
                  r.description,
                  s.createElement("br", null),
                ),
                t &&
                  s.createElement(
                    "span",
                    { className: "BindingSteamPersonaName Label" },
                    (0, p.we)("#BindingUI_List_PublishedBy", t),
                    s.createElement("br", null),
                  ),
                r.time > 0 &&
                  s.createElement(
                    "span",
                    { className: "BindingLastUpdated" },
                    (0, p.we)("#BindingUI_List_LastUpdated"),
                    l,
                    C && " - " + C,
                    S && " - " + S,
                    s.createElement("br", null),
                  ),
                g &&
                  s.createElement(
                    "span",
                    { className: "ConvertWarning" },
                    g,
                    s.createElement("br", null),
                  ),
                f &&
                  s.createElement(
                    "div",
                    { className: "RemappedInfo" },
                    s.createElement("hr", { className: "RemappedInfoHr" }),
                    s.createElement(
                      "span",
                      { className: "RemappedInfoSpan" },
                      s.createElement("img", {
                        className: "InformationButtonImage",
                        src: "images/bindingui/icon_information.svg",
                      }),
                      (0, p.we)("#BindingUI_Compatibility_Remapped_Text"),
                    ),
                  ),
              ),
              s.createElement("div", {
                className: "FlexRow BindingEntryActionButtons",
              }),
              this.renderDeleteConfirmModal(r),
            );
          }
        };
        (0, i.Cg)([h.o], qe.prototype, "OnDelete", null),
          (0, i.Cg)([h.o], qe.prototype, "OnDeleteConfirmed", null),
          (0, i.Cg)([h.o], qe.prototype, "OnDeleteCancel", null),
          (0, i.Cg)([h.o], qe.prototype, "renderDeleteConfirmModal", null),
          (0, i.Cg)([h.o], qe.prototype, "OnView", null),
          (0, i.Cg)([h.o], qe.prototype, "OnSelect", null),
          (qe = (0, i.Cg)([r.PA], qe));
        let $e = class extends s.Component {
          constructor(e) {
            super(e), (this.state = { bIsBindingsLoading: !0 });
          }
          RefreshBindingList() {
            return (0, i.sH)(this, void 0, void 0, function* () {
              this.setState({ bIsBindingsLoading: !0 }),
                yield f.GetBindingList(),
                this.setState({ bIsBindingsLoading: !1 });
            });
          }
          componentDidMount() {
            return (0, i.sH)(this, void 0, void 0, function* () {
              yield this.RefreshBindingList();
            });
          }
          CreateBinding() {
            this.ViewBinding(F.SelectedBindingURL, !1);
          }
          SelectBinding(e) {
            f.Loading = !0;
            let t = F.SelectedControllerTypeInfo;
            F.SelectConfig(F.SelectedApp, t ? t.controller_type : "", e).then(
              () => {
                F.ReloadCurrentApp();
              },
            );
          }
          ViewBinding(e, t) {
            if (((f.Loading = !0), t))
              F.SetBindingURL(e),
                F.ReloadControllerConfiguration().then(() => {
                  f.ViewCurrentBinding(),
                    setTimeout(() => {
                      f.Loading = !1;
                    }, 1);
                });
            else {
              let t = F.SelectedControllerTypeInfo;
              F.SelectConfig(F.SelectedApp, t ? t.controller_type : "", e).then(
                () => {
                  F.ReloadCurrentApp().then(() => {
                    f.EditCurrentBinding(),
                      setTimeout(() => {
                        f.Loading = !1;
                      }, 1);
                  });
                },
              );
            }
          }
          OnControllerDropdownChanged(e) {
            return (0, i.sH)(this, void 0, void 0, function* () {
              F.SetSelectedController(e), yield this.RefreshBindingList();
            });
          }
          ComputeResultsSection(e, t) {
            f.CurrentBinding && f.CurrentBinding.type;
            let o = f.BindingQueryResults,
              n = [];
            o &&
              o.length > 0 &&
              (n = o
                .filter(t)
                .map((e, t) =>
                  s.createElement(qe, {
                    key: t,
                    currentBinding: f.CurrentBinding,
                    result: e,
                    fnViewBinding: this.ViewBinding,
                    fnSelectBinding: this.SelectBinding,
                    bCurrentlySelectedBinding: !1,
                  }),
                ));
            return (
              n.length > 0 &&
              s.createElement(
                "div",
                null,
                s.createElement(
                  "div",
                  { className: "BindingListSectionHeader" },
                  (0, p.we)(e),
                ),
                s.createElement(
                  "div",
                  { className: "FlexRowWithWrap BindingListSection" },
                  n,
                ),
              )
            );
          }
          CreateControllerTypeDropdown() {
            let e = [],
              t = _.s.IsAppAllowedPrivateInputs(F.SelectedApp);
            S.W.ControllerTypes.forEach((o) => {
              (t || "InputValueVisibility_SteamVRInternal" != o.visibility) &&
                "InputValueVisibility_None" != o.visibility &&
                e.push(o);
            }),
              e.sort((e, t) => e.priority - t.priority);
            let o = [];
            e.forEach((e) => {
              o.push(
                new H(
                  e.controller_type,
                  S.W.LocalizeDriverString(e.resource_root, e.controller_type),
                ),
              );
            });
            let n = "",
              i = "",
              l = F.SelectedControllerTypeInfo;
            l &&
              (l.input_bindingui_right.transform &&
                (n = l.input_bindingui_right.transform),
              (i = l.input_bindingui_right.uri));
            l.device_class;
            return s.createElement(
              "div",
              { className: "FlexColumn ControllerTypeWrapper" },
              s.createElement(
                "div",
                { className: "BindingListSectionHeader Label" },
                (0, p.we)("#BindingList_ControllerOption"),
              ),
              s.createElement(
                "div",
                { className: "FlexRow ControllerTypeButton BindingEntry" },
                s.createElement("img", {
                  className: "ControllerImage",
                  src: i,
                  style: { transform: n },
                }),
                s.createElement(U, {
                  vecOptions: o,
                  sModalClass: "PinTop",
                  sValueSelectedItem: l ? l.controller_type : "",
                  sLocalizedSelectedItem: S.W.LocalizeControllerString(
                    l,
                    l ? l.controller_type : "",
                  ),
                  fnOptionSelected: this.OnControllerDropdownChanged,
                }),
              ),
            );
          }
          render() {
            let e = _.s.GetApp(F.SelectedApp),
              t = "";
            e && (t = e.name);
            let o = f.CurrentBinding,
              n = "#BindingUI_List_DeveloperSection";
            F.SelectedBindingIsLegacy && (n = "#BindingUI_List_LegacySection");
            let i = [];
            return (
              null != f.BindingQueryResults &&
                (i = f.BindingQueryResults.filter((e) => "autosave" != e.type)),
              s.createElement(
                "div",
                { className: "FlexColumn FullPage" },
                s.createElement(ve, {
                  fnOnClick: f.ShowAppSelect,
                  strTitle: (0, p.we)("#BindingList_PageTitle", t),
                }),
                s.createElement(
                  "div",
                  { className: "BindingUITopSection FlexRow" },
                  s.createElement(
                    "div",
                    { className: "CurrentSection FlexColumn" },
                    s.createElement(
                      "div",
                      { className: "BindingListSectionHeader" },
                      (0, p.we)("#BindingUI_List_CurrentSection"),
                    ),
                    o &&
                      s.createElement(qe, {
                        result: o,
                        currentBinding: f.CurrentBinding,
                        fnViewBinding: this.ViewBinding,
                        bCurrentlySelectedBinding: !0,
                      }),
                  ),
                  this.CreateControllerTypeDropdown(),
                ),
                s.createElement("hr", null),
                this.state.bIsBindingsLoading
                  ? s.createElement(
                      s.Fragment,
                      null,
                      s.createElement(
                        "div",
                        { className: "BindingUILoadingSection" },
                        s.createElement(
                          "p",
                          { className: "BindingUILoadingHeader" },
                          (0, p.we)("#BindingUI_List_Loading"),
                        ),
                      ),
                    )
                  : s.createElement(
                      s.Fragment,
                      null,
                      s.createElement(
                        "div",
                        { className: "AppBindingSection" },
                        this.ComputeResultsSection(
                          n,
                          (e) =>
                            "developer" == e.type &&
                            e.url != F.SelectedBindingURL,
                        ),
                        this.ComputeResultsSection(
                          "#BindingUI_List_ImportSection",
                          (e) =>
                            "local_file" == e.type &&
                            e.url != F.SelectedBindingURL,
                        ),
                        this.ComputeResultsSection(
                          "#BindingUI_List_PersonalSection",
                          (e) =>
                            "personal" == e.type &&
                            e.url != F.SelectedBindingURL,
                        ),
                        this.ComputeResultsSection(
                          "#BindingUI_List_OwnedSection",
                          (e) =>
                            "public" == e.type &&
                            e.owned &&
                            e.url != F.SelectedBindingURL,
                        ),
                        this.ComputeResultsSection(
                          "#BindingUI_List_PublicSection",
                          (e) =>
                            "public" == e.type &&
                            !e.owned &&
                            e.url != F.SelectedBindingURL,
                        ),
                        0 == i.length &&
                          s.createElement(
                            "div",
                            null,
                            s.createElement(
                              "div",
                              null,
                              s.createElement(
                                "div",
                                { className: "Label" },
                                (0, p.we)("#BindingUI_List_NoBindingsFound"),
                              ),
                            ),
                          ),
                        s.createElement(
                          "div",
                          {
                            className: "ButtonControl DeveloperLabel Inline",
                            onClick: this.CreateBinding,
                          },
                          (0, p.we)("#BindingUI_List_CreateBinding"),
                        ),
                      ),
                    ),
                f.ShowBindingListError &&
                  s.createElement(je, {
                    sError: f.BindingListError,
                    bCanClose: f.CanCloseBindingListError,
                  }),
              )
            );
          }
        };
        (0, i.Cg)([h.o], $e.prototype, "RefreshBindingList", null),
          (0, i.Cg)([h.o], $e.prototype, "CreateBinding", null),
          (0, i.Cg)([h.o], $e.prototype, "SelectBinding", null),
          (0, i.Cg)([h.o], $e.prototype, "ViewBinding", null),
          (0, i.Cg)([h.o], $e.prototype, "OnControllerDropdownChanged", null),
          (0, i.Cg)([h.o], $e.prototype, "ComputeResultsSection", null),
          (0, i.Cg)([h.o], $e.prototype, "CreateControllerTypeDropdown", null),
          ($e = (0, i.Cg)([r.PA], $e));
        let Ke = class extends s.Component {
          constructor(e) {
            super(e),
              (this.state = {
                strImageURL: _.s.GetAppImageURL(this.props.app.key),
              });
          }
          componentWillReceiveProps(e) {
            e.app.key != this.props.app.key &&
              this.setState({ strImageURL: _.s.GetAppImageURL(e.app.key) });
          }
          render() {
            return s.createElement(
              "div",
              {
                className: "AppSelectContainer",
                onClick: () => {
                  this.props.fnSelectApp(this.props.app.key);
                },
              },
              s.createElement("div", {
                className: "AppImage",
                style: {
                  backgroundImage: "url('" + this.state.strImageURL + "')",
                },
              }),
              s.createElement(
                "div",
                { className: "AppSelectName AllCaps" },
                this.props.app.name,
              ),
            );
          }
        };
        Ke = (0, i.Cg)([r.PA], Ke);
        let Je = class extends s.Component {
          constructor(e) {
            super(e),
              (this.m_bInHeadset = !1),
              (this.m_bInHeadset = !!c.Ay && !f.DesktopMode),
              (this.state = { bShowRecentApps: !1 });
          }
          SelectApplication(e) {
            F.SetSelectedApp(e), f.ShowBindingList();
          }
          OnShowMoreApps() {
            this.setState({ bShowRecentApps: !0 });
          }
          renderAppColumn() {
            let e = _.s.GetApp("openvr.component.vrcompositor"),
              t = _.s.GetApp("openvr.tool.steamvr_environments"),
              o = _.s.GetRecentApps();
            t && (o = o.filter((e) => e.key != t.key));
            let n,
              i = _.s.GetCurrentSceneProcess();
            return (
              !i && o.length > 0 && (i = o[0]),
              i && (o = o.filter((e) => e.key != i.key)),
              (n = this.state.bShowRecentApps
                ? s.createElement(
                    "div",
                    { className: "AppSelectList" },
                    s.createElement(
                      "div",
                      { className: "AppSelectListItems" },
                      o.map((e, t) =>
                        s.createElement(Ke, {
                          key: t,
                          app: e,
                          fnSelectApp: this.SelectApplication,
                        }),
                      ),
                    ),
                  )
                : s.createElement(
                    "div",
                    {
                      className: "ButtonControl AppSelectShowMoreButton",
                      onClick: this.OnShowMoreApps,
                    },
                    (0, p.we)("#AppSelect_ShowMoreApps"),
                  )),
              s.createElement(
                "div",
                { className: "AppSelectColumn" },
                s.createElement(
                  "div",
                  { className: "AppSelectList" },
                  s.createElement(
                    "div",
                    { className: "AppSelectListItems" },
                    i &&
                      s.createElement(Ke, {
                        app: i,
                        fnSelectApp: this.SelectApplication,
                      }),
                    e &&
                      s.createElement(Ke, {
                        app: e,
                        fnSelectApp: this.SelectApplication,
                      }),
                    t &&
                      s.createElement(Ke, {
                        app: t,
                        fnSelectApp: this.SelectApplication,
                      }),
                  ),
                ),
                n,
              )
            );
          }
          render() {
            return s.createElement(
              "div",
              { className: "AppSelectPageWrapper" },
              s.createElement(ve, {
                fnOnClick: f.ReturnToSettingsUI,
                strTitle: (0, p.we)("#AppSelect_EditBindings"),
                bShowBackButton: this.m_bInHeadset,
              }),
              s.createElement(
                "div",
                { className: "AppSelectColumnWrapper" },
                this.renderAppColumn(),
              ),
            );
          }
        };
        (0, i.Cg)([h.o], Je.prototype, "SelectApplication", null),
          (0, i.Cg)([h.o], Je.prototype, "OnShowMoreApps", null),
          (Je = (0, i.Cg)([r.PA], Je));
        var Qe,
          Xe = o(6138),
          Ye = o(6731),
          Ze = o(6575);
        !(function (e) {
          e[(e.Separator = 0)] = "Separator";
        })(Qe || (Qe = {}));
        class et extends s.Component {
          constructor() {
            super(...arguments),
              (this.m_refView = s.createRef()),
              (this.m_refScrollPanel = s.createRef()),
              (this.m_refSelectedButton = s.createRef()),
              (this.m_refParentPortal = s.createRef()),
              (this.m_elemBoundingParent = window.document.body);
          }
          renderDropdownItem(e, t) {
            switch (typeof e) {
              case "number":
                return this.renderDropdownSpecialItem(e, t);
              case "object":
                return this.renderDropdownValueItem(e);
            }
          }
          renderDropdownSpecialItem(e, t) {
            return e === Qe.Separator
              ? s.createElement("div", {
                  className: "Separator",
                  key: "separator" + t,
                })
              : null;
          }
          renderDropdownValueItem(e) {
            return s.createElement(
              Xe.$,
              {
                key: JSON.stringify(e.value),
                ref:
                  e == this.props.selectedItem
                    ? this.m_refSelectedButton
                    : null,
                className: (0, d.FH)("DropdownPopoverButton", [
                  "Selected",
                  e == this.props.selectedItem,
                ]),
                onClick: () => this.setValue(e.value),
              },
              e.sLabel,
            );
          }
          setValue(e) {
            var t, o;
            this.props.onChange && this.props.onChange(e),
              null === (o = (t = this.props).onDismissRequested) ||
                void 0 === o ||
                o.call(t);
          }
          render() {
            return s.createElement(
              Ze.b,
              {
                ref: this.m_refParentPortal,
                allowableParentSelectors: [
                  "body",
                  ".SettingsMain",
                  ".DesktopHandWidget",
                  ".HMDPanel",
                  "vsg-app",
                  "vsg-mountable",
                  "[vsg-type=panel]",
                ],
                onPortalDidMount: this.updateLayout,
              },
              s.createElement(
                Ye.wM,
                {
                  ref: this.m_refView,
                  shouldDismissOnClickAnywhere: !0,
                  shouldDismissOnClickInViewStack: !0,
                  fadesViewsBelow: !1,
                  onDismissRequested: this.props.onDismissRequested,
                  className: (0, d.FH)("Dropdown", "Popover"),
                },
                s.createElement(
                  Fe.M,
                  {
                    scrollDirection: Fe.D.Vertical,
                    ref: this.m_refScrollPanel,
                  },
                  this.props.items.map(this.renderDropdownItem),
                ),
              ),
            );
          }
          componentDidMount() {
            var e;
            this.m_elemBoundingParent = (0, d.jE)(
              [
                "body",
                "[vsg-type=panel]",
                ".SettingsSidebarPageModalContainer",
              ],
              null === (e = this.m_refParentPortal.current) || void 0 === e
                ? void 0
                : e.anchorElement,
            );
          }
          updateLayout() {
            var e, t, o, n;
            const i =
                null === (e = this.m_refView.current) || void 0 === e
                  ? void 0
                  : e.div,
              s =
                null === (t = this.m_refScrollPanel.current) || void 0 === t
                  ? void 0
                  : t.div;
            if (!i || !s) return;
            const l =
                null !==
                  (n =
                    null === (o = this.props.buttonRef.current) || void 0 === o
                      ? void 0
                      : o.elem.clientWidth) && void 0 !== n
                  ? n
                  : 0,
              r = this.m_elemBoundingParent.getBoundingClientRect();
            (s.style.minWidth = l + "px"),
              (s.style.maxWidth =
                r.width - 2 * et.POPOVER_BOUNDS_MARGIN + "px"),
              (s.style.maxHeight =
                r.height - 2 * et.POPOVER_BOUNDS_MARGIN + "px");
            const a = this.props.buttonRef.current.elem.getBoundingClientRect();
            let c = a.left,
              d = a.top;
            const p = i.getBoundingClientRect(),
              h = this.m_elemBoundingParent.getBoundingClientRect(),
              u = h.left + et.POPOVER_BOUNDS_MARGIN,
              m = h.right - et.POPOVER_BOUNDS_MARGIN,
              g = h.top + et.POPOVER_BOUNDS_MARGIN,
              S = h.bottom - et.POPOVER_BOUNDS_MARGIN;
            if (this.m_refSelectedButton.current) {
              d -=
                this.m_refSelectedButton.current.elem.getBoundingClientRect()
                  .top - p.top;
            }
            const _ = d;
            c < u && (c = u),
              c + p.width > m && (c = m - p.width),
              d < g && (d = g),
              d + p.height > S && (d = S - p.height),
              (c = Math.round(c)),
              (d = Math.round(d)),
              (i.scrollTop = d - _),
              (i.style.transform =
                "translateX(" + c + "px) translateY(" + d + "px)");
          }
        }
        (et.POPOVER_BOUNDS_MARGIN = 10),
          (0, i.Cg)([h.o], et.prototype, "renderDropdownItem", null),
          (0, i.Cg)([h.o], et.prototype, "renderDropdownSpecialItem", null),
          (0, i.Cg)([h.o], et.prototype, "renderDropdownValueItem", null),
          (0, i.Cg)([h.o], et.prototype, "setValue", null),
          (0, i.Cg)([h.o], et.prototype, "updateLayout", null);
        class tt extends s.Component {
          constructor(e) {
            super(e),
              (this.m_refButton = s.createRef()),
              (this.m_scrollWatcher = new d.aw()),
              (this.state = { bShowingOptions: !1 }),
              (this.m_scrollWatcher.onScroll = this.onParentScroll);
          }
          componentWillUnmount() {
            this.m_scrollWatcher.cleanup();
          }
          componentDidUpdate(e, t) {
            this.state.bShowingOptions &&
              !t.bShowingOptions &&
              this.m_scrollWatcher.updateScrollableParents();
          }
          onParentScroll() {
            this.hideDropdown();
          }
          get value() {
            return void 0 !== this.props.value ? this.props.value : null;
          }
          get selectedItem() {
            const e = this.value;
            for (let t of this.props.items)
              if ("object" == typeof t && t.value == e) return t;
            return null;
          }
          showDropdown() {
            this.setState({ bShowingOptions: !0 });
          }
          hideDropdown() {
            this.setState({ bShowingOptions: !1 });
          }
          render() {
            const e = this.selectedItem,
              t =
                void 0 !== this.props.defaultLabel
                  ? this.props.defaultLabel
                  : (0, p.we)("#Settings_SelectAnOption"),
              o = e ? e.sLabel : t;
            return s.createElement(
              s.Fragment,
              null,
              s.createElement(
                Xe.$,
                {
                  ref: this.m_refButton,
                  className: "ButtonControl Dropdown",
                  onClick: this.showDropdown,
                  enabled:
                    this.props.items &&
                    (this.props.items.length > 1 ||
                      (1 == this.props.items.length && !this.props.value)),
                  style: {
                    pointerEvents: this.state.bShowingOptions
                      ? "none"
                      : "initial",
                  },
                },
                s.createElement("span", { ref: this.m_scrollWatcher.ref }, o),
              ),
              this.state.bShowingOptions &&
                s.createElement(
                  et,
                  Object.assign({}, this.props, {
                    selectedItem: e,
                    buttonRef: this.m_refButton,
                    onDismissRequested: this.hideDropdown,
                  }),
                ),
            );
          }
        }
        (0, i.Cg)([h.o], tt.prototype, "onParentScroll", null),
          (0, i.Cg)([g.computed], tt.prototype, "value", null),
          (0, i.Cg)([g.computed], tt.prototype, "selectedItem", null),
          (0, i.Cg)([h.o], tt.prototype, "showDropdown", null),
          (0, i.Cg)([h.o], tt.prototype, "hideDropdown", null);
        class ot extends s.Component {
          constructor(e) {
            super(e),
              (this.state = { value: void 0 === e.value ? null : e.value });
          }
          onChange(e) {
            this.setState({ value: e }),
              this.props.onChange && this.props.onChange(e);
          }
          render() {
            let e = Object.assign({}, this.props);
            return (
              (e.onChange = this.onChange),
              (e.value = this.state.value),
              s.createElement(tt, Object.assign({}, e))
            );
          }
        }
        (0, i.Cg)([h.o], ot.prototype, "onChange", null);
        var nt = o(7379);
        const it = ({ quaternion: e, width: t, height: o }) => {
          const n = (0, s.useRef)(null),
            i = (0, s.useCallback)(
              (t, o, n) => {
                t.clearRect(0, 0, o, n), (t.lineWidth = 3);
                const i = o / 2,
                  s = n / 2,
                  l = o / 2,
                  r = (e, t) => {
                    const o = t.w * e.x + t.y * e.z - t.z * e.y,
                      n = t.w * e.y + t.z * e.x - t.x * e.z,
                      i = t.w * e.z + t.x * e.y - t.y * e.x,
                      s = -t.x * e.x - t.y * e.y - t.z * e.z;
                    return {
                      x: o * t.w + s * -t.x + n * -t.z - i * -t.y,
                      y: n * t.w + s * -t.y + i * -t.x - o * -t.z,
                      z: i * t.w + s * -t.z + o * -t.y - n * -t.x,
                    };
                  },
                  a = [
                    { x: 0, y: l, z: 0 },
                    { x: 0, y: -l, z: 0 },
                  ],
                  c = [
                    { x: 0, y: 0, z: l },
                    { x: 0, y: 0, z: -l },
                  ],
                  d = [
                    { x: l, y: 0, z: 0 },
                    { x: -l, y: 0, z: 0 },
                  ].map((t) => r(t, e)),
                  p = a.map((t) => r(t, e)),
                  h = c.map((t) => r(t, e)),
                  u = (e, o, n, l) => {
                    const r = t.createLinearGradient(i + e.x, s - e.y, i, s);
                    r.addColorStop(0, n),
                      r.addColorStop(1, l),
                      (t.strokeStyle = r),
                      t.beginPath(),
                      t.moveTo(i + e.x, s - e.y),
                      t.lineTo(i + o.x, s - o.y),
                      t.stroke();
                  };
                u(d[1], d[0], "#00000000", "#FF0000DD"),
                  u(p[1], p[0], "#00000000", "#00FF00DD"),
                  u(h[1], h[0], "#00000000", "#2222FFFF");
              },
              [e],
            );
          return (
            (0, s.useEffect)(() => {
              const e = n.current;
              if (e) {
                const t = e.getContext("2d");
                if (t) {
                  const o = e.width,
                    n = e.height;
                  i(t, o, n);
                }
              }
            }, [e, t, o, i]),
            s.createElement(
              "div",
              { className: "AxisWrapper" },
              s.createElement("canvas", {
                className: "AxisCanvas",
                ref: n,
                width: t,
                height: o,
              }),
            )
          );
        };
        var st, lt, rt;
        !(function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Boolean = 1)] = "Boolean"),
            (e[(e.Vector1 = 2)] = "Vector1"),
            (e[(e.Vector2 = 3)] = "Vector2"),
            (e[(e.Vector3 = 4)] = "Vector3"),
            (e[(e.Pose = 20)] = "Pose"),
            (e[(e.SimpleHaptic = 21)] = "SimpleHaptic"),
            (e[(e.Skeleton = 22)] = "Skeleton"),
            (e[(e.EyeTracking = 23)] = "EyeTracking");
        })(st || (st = {})),
          (function (e) {
            (e[(e.Estimated = 0)] = "Estimated"),
              (e[(e.Partial = 1)] = "Partial"),
              (e[(e.Full = 2)] = "Full");
          })(lt || (lt = {})),
          (function (e) {
            (e[(e.Unknown = 0)] = "Unknown"),
              (e[(e.Boolean = 1)] = "Boolean"),
              (e[(e.Scalar = 2)] = "Scalar"),
              (e[(e.Pose = 3)] = "Pose"),
              (e[(e.Skeleton = 4)] = "Skeleton"),
              (e[(e.Haptic = 5)] = "Haptic");
          })(rt || (rt = {}));
        let at = 16777216;
        function ct(e) {
          return "number" != typeof e
            ? "-"
            : e >= at && e <= 33554431
              ? (0, p.we)("#InputDebugger_Priority_Overlay", e - at)
              : e.toFixed(0);
        }
        class dt extends s.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new c._n()),
              (this.m_msgNextState = null),
              this.m_mailbox.Init("input_debugger"),
              this.m_mailbox.RegisterHandler("input_frame", this.OnInputFrame),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRPathProperties.SetInt32PathProperty(
                  "/input_debugger_pid",
                  0,
                ),
              (this.state = {});
          }
          OnSelectApp(e) {
            this.setState({
              sCurrentApp: e,
              latestState: null,
              actionManifest: null,
              sError: null,
              sCurrentActionSet: null,
            });
            let t = _.s.GetApp(e);
            t.pid &&
              (null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRPathProperties.SetInt32PathProperty(
                  "/input_debugger_pid",
                  t.pid,
                )),
              N(e)
                .then((e) => {
                  this.setState({ actionManifest: e });
                })
                .catch((e) => {
                  this.setState({
                    sError: (0, p.we)("InputDebugger_ActionManifestFailed"),
                  });
                });
          }
          OnInputFrame(e) {
            if (null == this.state.sCurrentApp) {
              let t = _.s.FindAppByPid(e.pid);
              t && this.OnSelectApp(t.key);
            }
            !this.state.sCurrentActionSet &&
              e.actions &&
              this.SetActionSet(e.actions[0].actionSet),
              (this.m_msgNextState = e);
          }
          componentDidMount() {
            this.m_timerStateUpdate = window.setInterval(() => {
              this.m_msgNextState &&
                (this.setState({ latestState: this.m_msgNextState }),
                (this.m_msgNextState = null));
            }, 100);
          }
          componentWillUnmount() {
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRPathProperties.SetInt32PathProperty(
                "/input_debugger_pid",
                0,
              ),
              this.m_timerStateUpdate &&
                window.clearInterval(this.m_timerStateUpdate);
          }
          GetActionSetName(e) {
            let t;
            return (
              this.state.actionManifest &&
                (t = this.state.actionManifest.action_sets.find(
                  (t) => t.name.toLowerCase() == e.toLowerCase(),
                )),
              t ? t.localized_name : e
            );
          }
          GetActionName(e) {
            let t;
            if (this.state.actionManifest)
              for (let o of this.state.actionManifest.action_sets)
                if (
                  ((t = o.actions.find(
                    (t) => t.name.toLowerCase() == e.toLowerCase(),
                  )),
                  t)
                )
                  break;
            return t ? t.localized_name : e;
          }
          GetMaxPriority(e) {
            var t, o, n, i, s, l;
            return Math.max(
              null !==
                (n =
                  null ===
                    (o =
                      null === (t = this.state.latestState) || void 0 === t
                        ? void 0
                        : t.priorityMap) || void 0 === o
                    ? void 0
                    : o[e]) && void 0 !== n
                ? n
                : null,
              null !==
                (l =
                  null ===
                    (s =
                      null === (i = this.state.latestState) || void 0 === i
                        ? void 0
                        : i.globalPriorityMap) || void 0 === s
                    ? void 0
                    : s[e]) && void 0 !== l
                ? l
                : null,
            );
          }
          renderActionSets() {
            if (!this.state.latestState.activeActionSets)
              return s.createElement(
                "div",
                { className: "Label" },
                (0, p.we)("#InputDebugger_NoActiveActionSets"),
              );
            let e = [];
            for (let t of this.state.latestState.activeActionSets) {
              let o, n;
              t.secondaryActionSet
                ? ((o = t.secondaryActionSet), (n = this.GetActionSetName(o)))
                : ((n = (0, p.we)("#InputDebugger_None")), (o = ""));
              let i = this.GetActionSetName(t.actionSet),
                l = t.restrictToDevice
                  ? t.restrictToDevice
                  : (0, p.we)("#InputDebugger_None");
              e.push(
                s.createElement(
                  "div",
                  {
                    className: "ActiveActionSet",
                    key: t.actionSet + t.restrictToDevice,
                  },
                  s.createElement(
                    "div",
                    { className: "Label ActionSetName" },
                    i,
                  ),
                  s.createElement(
                    "div",
                    { className: "Label ActionSetPath" },
                    t.actionSet,
                  ),
                  s.createElement(
                    "div",
                    { className: "Label ActionSetPriority" },
                    ct(t.priority),
                  ),
                  s.createElement(
                    "div",
                    { className: "Label ActionSetDevice" },
                    l,
                  ),
                  s.createElement(
                    "div",
                    { className: "Label ActionSetSecondaryName" },
                    n,
                  ),
                  s.createElement(
                    "div",
                    { className: "Label ActionSetSecondaryPath" },
                    o,
                  ),
                ),
              );
            }
            return s.createElement(
              s.Fragment,
              null,
              s.createElement(
                "div",
                { className: "Label InputDebuggerSectionHeading" },
                (0, p.we)("#InputDebugger_ActiveActionSets"),
              ),
              s.createElement(
                "div",
                { className: "ActiveActionSetContainer" },
                s.createElement(
                  "div",
                  { className: "ActiveActionSetsHeader" },
                  s.createElement(
                    "div",
                    { style: { gridColumn: "1 / span 2" }, className: "Label" },
                    (0, p.we)("#InputDebugger_ActionSetName"),
                  ),
                  s.createElement(
                    "div",
                    { style: { gridColumn: "3" }, className: "Label" },
                    (0, p.we)("#InputDebugger_Priority"),
                  ),
                  s.createElement(
                    "div",
                    { style: { gridColumn: "4" }, className: "Label" },
                    (0, p.we)("#InputDebugger_Device"),
                  ),
                  s.createElement(
                    "div",
                    { style: { gridColumn: "5 / span 2" }, className: "Label" },
                    (0, p.we)("#InputDebugger_SecondaryActionSetName"),
                  ),
                ),
                e,
              ),
            );
          }
          SetActionSet(e) {
            this.setState({ sCurrentActionSet: e });
          }
          ShowFilterState(e) {
            this.setState({ sFilterPath: e });
          }
          renderActionHeader(e) {
            switch (e) {
              case st.Boolean:
              case st.Vector1:
              case st.Vector2:
              case st.Vector3:
                return [
                  s.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "source" },
                    (0, p.we)("#InputDebugger_Source"),
                  ),
                  s.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "binding" },
                    (0, p.we)("#InputDebugger_Binding"),
                  ),
                  s.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "active" },
                    (0, p.we)("#InputDebugger_Active"),
                  ),
                  s.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "origin" },
                    (0, p.we)("#InputDebugger_ActiveOrigin"),
                  ),
                  s.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "value" },
                    (0, p.we)("#InputDebugger_Value"),
                  ),
                ];
              case st.Pose:
                return [
                  s.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "source" },
                    (0, p.we)("#InputDebugger_Source"),
                  ),
                  s.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "binding" },
                    (0, p.we)("#InputDebugger_Binding"),
                  ),
                  s.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "active" },
                    (0, p.we)("#InputDebugger_Active"),
                  ),
                  s.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "origin" },
                    (0, p.we)("#InputDebugger_ActiveOrigin"),
                  ),
                  s.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "position" },
                    (0, p.we)("#InputDebugger_Pose_Position"),
                  ),
                  s.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "rotation" },
                    (0, p.we)("#InputDebugger_Pose_Rotation"),
                  ),
                  s.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "state" },
                    (0, p.we)("#InputDebugger_Pose_State"),
                  ),
                ];
              case st.EyeTracking:
                return [
                  s.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "source" },
                    (0, p.we)("#InputDebugger_Source"),
                  ),
                  s.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "binding" },
                    (0, p.we)("#InputDebugger_Binding"),
                  ),
                  s.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "active" },
                    (0, p.we)("#InputDebugger_Active"),
                  ),
                  s.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "origin" },
                    (0, p.we)("#InputDebugger_ActiveOrigin"),
                  ),
                  s.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "tracked" },
                    (0, p.we)("#InputDebugger_Tracked"),
                  ),
                  s.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "valid" },
                    (0, p.we)("#InputDebugger_Valid"),
                  ),
                  s.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "origin_position" },
                    (0, p.we)("#InputDebugger_EyeTracking_Origin"),
                  ),
                  s.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "target_position" },
                    (0, p.we)("#InputDebugger_EyeTracking_Target"),
                  ),
                ];
              default:
                return null;
            }
          }
          renderBoolean(e, t) {
            return s.createElement(
              "div",
              {
                className: (0, d.FH)(
                  "BooleanValue",
                  ["IsTrue", e],
                  "Label",
                  "ActionEntry",
                ),
                key: t,
              },
              e ? "TRUE" : "false",
            );
          }
          renderScalar(e, t) {
            return s.createElement(
              "div",
              { className: (0, d.FH)("Label", "ActionEntry"), key: t },
              e.toFixed(2),
            );
          }
          renderBinding(e, t) {
            var o, n;
            if (
              null === (o = e.binding) || void 0 === o
                ? void 0
                : o.startsWith("/filters/")
            )
              return s.createElement(
                "div",
                {
                  className: "Label ActionEntry FilterLink",
                  key: t + "_binding",
                },
                s.createElement(
                  "a",
                  {
                    href: "#",
                    onClick: () => {
                      this.ShowFilterState(e.binding);
                    },
                  },
                  (0, p.we)("#InputDebugger_FilterDetails"),
                ),
              );
            {
              let o = this.GetMaxPriority(e.binding),
                i = null !== (n = e.binding) && void 0 !== n ? n : "-";
              return (
                "number" == typeof o &&
                  (i += " " + (0, p.we)("#InputDebugger_PriorityValue", ct(o))),
                s.createElement(
                  "div",
                  {
                    className: "Label ActionEntry",
                    key: t + e.inputSource + "_binding",
                  },
                  i,
                )
              );
            }
          }
          renderActionEntry(e, t, o) {
            var n, i, l, r, a, c, d, p, h;
            switch (e.type) {
              case st.Boolean:
                let e = t.data;
                return [
                  s.createElement(
                    "div",
                    { className: "Label ActionEntry", key: o + "_source" },
                    null !== (n = t.inputSource) && void 0 !== n ? n : "-",
                  ),
                  this.renderBinding(t, o),
                  this.renderBoolean(t.data.active, o + "_active"),
                  s.createElement(
                    "div",
                    { className: "Label ActionEntry", key: o + "_origin" },
                    null !== (i = t.data.activeOrigin) && void 0 !== i
                      ? i
                      : "-",
                  ),
                  this.renderBoolean(e.state, o + "_value"),
                ];
              case st.Vector1:
              case st.Vector2:
              case st.Vector3:
                let u = t.data,
                  m = u.x.toFixed(2);
                return (
                  void 0 !== u.y && (m += ", " + u.y.toFixed(2)),
                  void 0 !== u.z && (m += ", " + u.z.toFixed(2)),
                  [
                    s.createElement(
                      "div",
                      { className: "Label ActionEntry", key: o + "_source" },
                      null !== (l = t.inputSource) && void 0 !== l ? l : "-",
                    ),
                    this.renderBinding(t, o),
                    this.renderBoolean(t.data.active, o + "_active"),
                    s.createElement(
                      "div",
                      { className: "Label ActionEntry", key: o + "_origin" },
                      null !== (r = t.data.activeOrigin) && void 0 !== r
                        ? r
                        : "-",
                    ),
                    s.createElement(
                      "div",
                      { className: "Label ActionEntry", key: o + "_value" },
                      m,
                    ),
                  ]
                );
              case st.Pose:
                let g = t.data,
                  S = `${g.position_x.toFixed(2)}, ${g.position_y.toFixed(2)}, ${g.position_z.toFixed(2)}`,
                  _ = {
                    x: g.rotation_x,
                    y: g.rotation_y,
                    z: g.rotation_z,
                    w: g.rotation_w,
                  },
                  C = `(${g.rotation_x.toFixed(2)}, ${g.rotation_y.toFixed(2)}, ${g.rotation_z.toFixed(2)})`;
                return [
                  s.createElement(
                    "div",
                    { className: "Label ActionEntry", key: o + "_source" },
                    null !== (a = t.inputSource) && void 0 !== a ? a : "-",
                  ),
                  this.renderBinding(t, o),
                  this.renderBoolean(t.data.active, o + "_active"),
                  s.createElement(
                    "div",
                    { className: "Label ActionEntry", key: o + "_origin" },
                    null !== (c = t.data.activeOrigin) && void 0 !== c
                      ? c
                      : "-",
                  ),
                  s.createElement(
                    "div",
                    { className: "Label ActionEntry", key: o + "_position" },
                    g ? S : "-",
                  ),
                  s.createElement(
                    "div",
                    { className: "Label ActionEntry", key: o + "_rotation" },
                    null != C ? C : "-",
                    s.createElement(it, {
                      quaternion: _,
                      width: 50,
                      height: 50,
                    }),
                  ),
                  s.createElement(
                    "div",
                    { className: "Label ActionEntry", key: o + "_state" },
                    null !== (d = g.tracking) && void 0 !== d ? d : "-",
                  ),
                ];
              case st.EyeTracking:
                let y = t.data,
                  f = `${y.origin_position_x.toFixed(5)}, ${y.origin_position_y.toFixed(5)}, ${y.origin_position_z.toFixed(5)}`,
                  b = `${y.target_position_x.toFixed(5)}, ${y.target_position_y.toFixed(5)}, ${y.target_position_z.toFixed(5)}`;
                return [
                  s.createElement(
                    "div",
                    { className: "Label ActionEntry", key: o + "_source" },
                    null !== (p = t.inputSource) && void 0 !== p ? p : "-",
                  ),
                  this.renderBinding(t, o),
                  this.renderBoolean(t.data.active, o + "_active"),
                  s.createElement(
                    "div",
                    { className: "Label ActionEntry", key: o + "_origin" },
                    null !== (h = t.data.activeOrigin) && void 0 !== h
                      ? h
                      : "-",
                  ),
                  this.renderBoolean(y.tracked, o + "_tracked"),
                  this.renderBoolean(y.valid, o + "_valid"),
                  s.createElement(
                    "div",
                    {
                      className: "Label ActionEntry",
                      key: o + "_origin_position",
                    },
                    y ? f : "-",
                  ),
                  s.createElement(
                    "div",
                    {
                      className: "Label ActionEntry",
                      key: o + "_target_position",
                    },
                    y ? b : "-",
                  ),
                ];
              default:
                return null;
            }
          }
          renderAction(e) {
            if (!e) return [null, 0];
            let t = this.renderActionHeader(e.type);
            if (!t) return [null, 0];
            let o = [t],
              n = 1;
            if (e.entries)
              for (let i of e.entries) {
                let s = this.renderActionEntry(e, i, (n++).toString());
                if (s) {
                  if (s.length != t.length)
                    throw new Error(
                      "Values must have the same length as header",
                    );
                  o.push(s);
                }
              }
            let i = [];
            for (let e = 0; e < o[0].length; e++)
              for (let t = 0; t < o.length; t++) i.push(o[t][e]);
            let l = Math.max(o.length, 5);
            return [
              s.createElement(
                "div",
                { className: "Action", key: e.path },
                s.createElement(
                  "div",
                  {
                    className: "ActionName Label",
                    style: { gridColumn: "1 / " + (l + 1) },
                  },
                  this.GetActionName(e.path),
                  s.createElement(
                    "span",
                    { className: "ActionPath" },
                    " (",
                    e.path,
                    ")",
                  ),
                ),
                i,
              ),
              l,
            ];
          }
          renderCurrentActions() {
            if (!this.state.sCurrentActionSet) return null;
            let e = new Set(),
              t = [],
              o = 0;
            for (let n of this.state.latestState.actions)
              if (n.actionSet == this.state.sCurrentActionSet) {
                let [i, s] = this.renderAction(n);
                if (!i) continue;
                (o = Math.max(s, o)), t.push(i), e.add(n.path.toLowerCase());
              }
            if (this.state.actionManifest) {
              let n = this.state.actionManifest.action_sets.find(
                (e) => e.name == this.state.sCurrentActionSet,
              );
              if (n)
                for (let i of n.actions)
                  e.has(i.name.toLowerCase()) ||
                    ("pose" != i.type &&
                      "skeleton" != i.type &&
                      "vibration" != i.type &&
                      (t.push(
                        s.createElement(
                          "div",
                          { className: "Action", key: i.name },
                          s.createElement(
                            "div",
                            {
                              className: "ActionName Label",
                              style: { gridColumn: "1 / " + (o + 1) },
                            },
                            i.localized_name,
                            s.createElement(
                              "span",
                              { className: "ActionPath" },
                              " (",
                              i.name,
                              ")",
                            ),
                          ),
                          s.createElement(
                            "div",
                            { className: "Unbound Label" },
                            (0, p.we)("#InputDebugger_ActionUnbound"),
                          ),
                        ),
                      ),
                      e.add(i.name.toLowerCase())));
            }
            return s.createElement(
              "div",
              { className: "ActionListWrapper" },
              s.createElement("div", { className: "ActionList" }, t),
            );
          }
          renderActions() {
            if (!this.state.latestState.actions)
              return s.createElement(
                "div",
                { className: "Label" },
                (0, p.we)("#InputDebugger_NoActions"),
              );
            let e = new Set();
            for (let t of this.state.latestState.actions) e.add(t.actionSet);
            let t = [];
            for (let o of e)
              t.push(
                s.createElement(
                  Xe.$,
                  {
                    onClick: () => {
                      this.SetActionSet(o);
                    },
                    key: o,
                    className: (0, d.FH)("ActionSetButton", "ButtonControl", [
                      "Selected",
                      o == this.state.sCurrentActionSet,
                    ]),
                  },
                  this.GetActionSetName(o),
                ),
              );
            return s.createElement(
              s.Fragment,
              null,
              s.createElement(
                "div",
                { className: "Label InputDebuggerSectionHeading" },
                (0, p.we)("#InputDebugger_Actions"),
              ),
              s.createElement(
                "div",
                { className: "ActionContainer" },
                s.createElement("div", { className: "ActionSetButtons" }, t),
                this.renderCurrentActions(),
              ),
            );
          }
          renderLatestState() {
            return this.state.latestState
              ? s.createElement(
                  "div",
                  { className: "DebuggerState" },
                  this.renderActionSets(),
                  this.renderActions(),
                )
              : s.createElement(
                  "div",
                  { className: "Label" },
                  (0, p.we)("#InputDebugger_WaitingForApp"),
                );
          }
          FindFilter(e) {
            var t, o;
            if (this.state.latestState && this.state.latestState.filters)
              for (let n of this.state.latestState.filters) {
                if (
                  null === (t = n.inputs) || void 0 === t
                    ? void 0
                    : t.find((t) => t.path == e)
                )
                  return n;
                if (
                  null === (o = n.outputs) || void 0 === o
                    ? void 0
                    : o.find((t) => t.path == e)
                )
                  return n;
              }
          }
          renderFilterIO(e, t) {
            let o;
            switch (e.type) {
              case rt.Boolean:
                o = this.renderBoolean(e.value);
                break;
              case rt.Scalar:
                o = this.renderScalar(e.value);
                break;
              default:
                o = s.createElement("div", { className: "Label" }, rt[e.type]);
            }
            let n = this.GetMaxPriority(e.path);
            return s.createElement(
              "div",
              { className: "FilterIO", key: e.path },
              s.createElement("div", { className: "Label" }, e.path, ": "),
              o,
              t &&
                e.path.startsWith("/filters/") &&
                s.createElement(
                  "a",
                  {
                    href: "#",
                    onClick: () => {
                      this.ShowFilterState(e.path);
                    },
                  },
                  (0, p.we)("#InputDebugger_FilterDetails"),
                ),
              "number" == typeof n &&
                s.createElement(
                  "div",
                  { className: "Label" },
                  (0, p.we)("#InputDebugger_PriorityValue", ct(n)),
                ),
              e.suppressedByPriority &&
                s.createElement(
                  "div",
                  { className: "Label Suppressed" },
                  (0, p.we)("#InputDebugger_Suppressed"),
                ),
            );
          }
          renderFilterState() {
            if (!this.state.sFilterPath) return null;
            let e = this.FindFilter(this.state.sFilterPath),
              t = [];
            for (let o in e.parameters) {
              let n,
                i = e.parameters[o];
              switch (typeof i) {
                case "boolean":
                  n = i ? "true" : "false";
                  break;
                case "number":
                  n = i.toFixed(2);
                  break;
                default:
                  n = JSON.stringify(i);
              }
              t.push(
                s.createElement(
                  "div",
                  { className: "Label", key: o },
                  o,
                  ": ",
                  n,
                ),
              );
            }
            let o = [];
            for (let t of e.inputs) o.push(this.renderFilterIO(t, !0));
            o ||
              o.push(
                s.createElement(
                  "div",
                  { className: "Label", key: "none" },
                  (0, p.we)("#InputDebugger_None"),
                ),
              );
            let n = [];
            for (let t of e.outputs) n.push(this.renderFilterIO(t, !1));
            return (
              n ||
                n.push(
                  s.createElement(
                    "div",
                    { className: "Label", key: "none" },
                    (0, p.we)("#InputDebugger_None"),
                  ),
                ),
              s.createElement(
                nt.a,
                {
                  onDismissRequested: () => {
                    this.ShowFilterState(null);
                  },
                  className: "FilterDetails",
                },
                s.createElement(
                  "div",
                  { className: "Label InputDebuggerSectionHeading" },
                  (0, p.we)("#InputDebugger_FilterState_Title", e.name),
                  " ",
                ),
                s.createElement(
                  "div",
                  { className: "Label" },
                  (0, p.we)("#InputDebugger_FilterType"),
                  e.type,
                ),
                t &&
                  s.createElement(
                    s.Fragment,
                    null,
                    s.createElement(
                      "div",
                      { className: "Label InputDebuggerHeading" },
                      (0, p.we)("#InputDebugger_Parameters"),
                    ),
                    s.createElement("div", { className: "ParameterList" }, t),
                  ),
                s.createElement(
                  "div",
                  { className: "Label InputDebuggerHeading" },
                  (0, p.we)("#InputDebugger_Inputs"),
                ),
                s.createElement("div", { className: "InputList" }, o),
                s.createElement(
                  "div",
                  { className: "Label InputDebuggerHeading" },
                  (0, p.we)("#InputDebugger_Outputs"),
                ),
                s.createElement("div", { className: "OutputList" }, n),
              )
            );
          }
          render() {
            let e = _.s.GetRunningApps(),
              t = [];
            for (let o of e)
              t.push({ value: o.key, sLabel: `${o.name} (pid: ${o.pid})` });
            return s.createElement(
              "div",
              { className: "DebuggerMain" },
              s.createElement(ve, {
                fnOnClick: f.ReturnToSettingsUI,
                strTitle: (0, p.we)("#InputDebugger_Title"),
              }),
              s.createElement(
                "div",
                { className: "AppDropdownWrapper" },
                s.createElement(tt, {
                  items: t,
                  onChange: this.OnSelectApp,
                  value: this.state.sCurrentApp,
                  defaultLabel: (0, p.we)("#InputDebugger_SelectApplication"),
                }),
              ),
              !this.state.actionManifest &&
                s.createElement(
                  "div",
                  { className: "Label" },
                  (0, p.we)("#InputDebugger_ActionManifestLoading"),
                ),
              this.state.sError &&
                s.createElement(
                  "div",
                  { className: "Label Error" },
                  this.state.sError,
                ),
              this.renderLatestState(),
              this.renderFilterState(),
            );
          }
        }
        (0, i.Cg)([h.o], dt.prototype, "OnSelectApp", null),
          (0, i.Cg)([h.o], dt.prototype, "OnInputFrame", null),
          (0, i.Cg)([h.o], dt.prototype, "SetActionSet", null);
        var pt = o(1333);
        let ht = class extends s.Component {
          constructor(e) {
            super(e);
          }
          render() {
            f.Loading
              ? document.body.classList.add("Loading")
              : document.body.classList.remove("Loading"),
              S.W.IsSteamAvailable
                ? document.body.classList.remove("SteamUnavailable")
                : document.body.classList.add("SteamUnavailable");
            return (
              (0, c.R$)() === c.OH.Overlay &&
                document.body.classList.add("ControllerMainBorderRadius"),
              s.createElement(
                "div",
                { className: "FullPage InputContainer" },
                (f.GetUIState == n.ViewBinding ||
                  f.GetUIState == n.EditBinding) &&
                  s.createElement(He, {
                    bReadOnlyView: f.GetUIState == n.ViewBinding,
                  }),
                f.GetUIState == n.List && s.createElement($e, null),
                f.GetUIState == n.AppSelect && s.createElement(Je, null),
                f.GetUIState == n.Debugger && s.createElement(dt, null),
                f.GetUIState == n.None && s.createElement("div", null),
                s.createElement(
                  a.A,
                  {
                    visible: F.SteamVRUnavailable,
                    showCloseButton: !1,
                    onClose: () => {},
                    animation: "fade",
                    className: "ModeSettingsModal",
                    closeOnEsc: !1,
                    customStyles: { width: "60%", height: "60%" },
                  },
                  s.createElement(
                    "div",
                    { className: "FlexFullHeightColumnCentered" },
                    s.createElement(
                      "div",
                      { className: "Title Label" },
                      (0, p.we)("#BindingUI_SteamVRUnavailable"),
                    ),
                  ),
                ),
              )
            );
          }
        };
        ht = (0, i.Cg)([r.PA], ht);
        const ut = document.getElementById("root");
        (0, p.uV)(
          ["bindingui"],
          null === VRHTML || void 0 === VRHTML
            ? void 0
            : VRHTML.GetSteamLanguage(),
        )
          .then(() => C.J.Init())
          .then(() => _.s.Init())
          .then(() => S.W.Init())
          .then(() => pt.HR.Init(!1))
          .then(() => F.Init())
          .then(() =>
            (function () {
              return (0, i.sH)(this, void 0, void 0, function* () {
                f.SetDesktopMode((0, d.e6)("desktop").length > 0),
                  VRHTML &&
                    !f.DesktopMode &&
                    (document.body.parentElement.classList.add("VROverlay"),
                    VRHTML.VROverlay.SetWidthInMeters(
                      VRHTML.VROverlay.ThisOverlayHandle(),
                      3,
                    ),
                    VRHTML.VROverlay.SetFlag(
                      VRHTML.VROverlay.ThisOverlayHandle(),
                      8,
                      !0,
                    ),
                    VRHTML.VROverlay.SetFlag(
                      VRHTML.VROverlay.ThisOverlayHandle(),
                      16777216,
                      !0,
                    ),
                    VRHTML.VROverlay.SetFlag(
                      VRHTML.VROverlay.ThisOverlayHandle(),
                      256,
                      !0,
                    ),
                    VRHTML.VROverlay.SetFlag(
                      VRHTML.VROverlay.ThisOverlayHandle(),
                      131072,
                      !0,
                    ),
                    VRHTML.VROverlay.SetInputMethod(
                      VRHTML.VROverlay.ThisOverlayHandle(),
                      c.Rk.Mouse,
                    ));
                let e = (0, d.e6)("debugger");
                if (null != e && e.length > 0) return void f.ShowDebugger();
                let t = (0, d.e6)("app");
                if (null != t && t.length > 0 && _.s.GetApp(t)) {
                  F.SetSelectedApp(t);
                  let e = (0, d.e6)("controller");
                  if (null != e && e.length > 0) {
                    F.SetSelectedController(e);
                    let t = (0, d.e6)("action_set");
                    return (
                      null != t &&
                        t.length > 0 &&
                        F.SetSelectedActionSet("/actions/" + t),
                      void ((0, d.e6)("read_only").length > 0
                        ? f.ViewCurrentBinding()
                        : f.EditCurrentBinding())
                    );
                  }
                  f.ShowBindingList();
                } else f.ShowAppSelect();
              });
            })(),
          )
          .then(() => f.Init())
          .then(() => {
            var e;
            (e = ht), l.H(ut).render(s.createElement(e, null));
          })
          .catch((e) => console.log("FAILED TO INITIALIZE BINDINGUI " + e));
      },
    },
    o = {};
  function n(e) {
    var i = o[e];
    if (void 0 !== i) return i.exports;
    var s = (o[e] = { exports: {} });
    return t[e](s, s.exports, n), s.exports;
  }
  (n.m = t),
    (e = []),
    (n.O = (t, o, i, s) => {
      if (!o) {
        var l = 1 / 0;
        for (d = 0; d < e.length; d++) {
          for (var [o, i, s] = e[d], r = !0, a = 0; a < o.length; a++)
            (!1 & s || l >= s) && Object.keys(n.O).every((e) => n.O[e](o[a]))
              ? o.splice(a--, 1)
              : ((r = !1), s < l && (l = s));
          if (r) {
            e.splice(d--, 1);
            var c = i();
            void 0 !== c && (t = c);
          }
        }
        return t;
      }
      s = s || 0;
      for (var d = e.length; d > 0 && e[d - 1][2] > s; d--) e[d] = e[d - 1];
      e[d] = [o, i, s];
    }),
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (n.d = (e, t) => {
      for (var o in t)
        n.o(t, o) &&
          !n.o(e, o) &&
          Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = { 600: 0, 527: 0 };
      n.O.j = (t) => 0 === e[t];
      var t = (t, o) => {
          var i,
            s,
            [l, r, a] = o,
            c = 0;
          if (l.some((t) => 0 !== e[t])) {
            for (i in r) n.o(r, i) && (n.m[i] = r[i]);
            if (a) var d = a(n);
          }
          for (t && t(o); c < l.length; c++)
            (s = l[c]), n.o(e, s) && e[s] && e[s][0](), (e[s] = 0);
          return n.O(d);
        },
        o = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      o.forEach(t.bind(null, 0)), (o.push = t.bind(null, o.push.bind(o)));
    })();
  var i = n.O(
    void 0,
    [967, 978, 705, 908, 305, 527, 797, 148, 798, 743, 198, 652],
    () => n(2248),
  );
  i = n.O(i);
})(); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/controllerbindingui.js.map
