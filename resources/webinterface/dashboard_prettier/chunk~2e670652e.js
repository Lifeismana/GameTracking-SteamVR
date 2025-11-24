var CLSTAMP = "10258017";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [170],
  {
    108: (e) => {
      e.exports = {
        recordingCircle: "svg_library_recordingCircle_2ovZQ",
        AnimationFadeOutIn: "svg_library_AnimationFadeOutIn_1lEwX",
      };
    },
    1184: (e, t, i) => {
      "use strict";
      var o,
        r = i(1635),
        n = i(3496),
        s = i(3236);
      !(function (e) {
        (e[(e.Disabled = 0)] = "Disabled"),
          (e[(e.WorldZeroY = 1)] = "WorldZeroY"),
          (e[(e.WorldDynamicFloor = 2)] = "WorldDynamicFloor");
      })(o || (o = {}));
      class a extends n._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "constraint";
        }
        buildNode(e, t) {
          const i = this.createSgNode(t);
          return (
            (i.properties["projection-constraint"] =
              this.props.projection_constraint),
            [e, i]
          );
        }
      }
      (0, r.Cg)([s.o], a.prototype, "buildNode", null);
    },
    4120: (e, t, i) => {
      "use strict";
      var o,
        r = i(1635),
        n = i(3496),
        s = i(3236);
      !(function (e) {
        (e[(e.RoomSetupFloor = 1)] = "RoomSetupFloor"),
          (e[(e.Locomotion = 2)] = "Locomotion"),
          (e[(e.QuickRecenter = 4)] = "QuickRecenter");
      })(o || (o = {}));
      class a extends n._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "constructglobals";
        }
        buildNode(e, t) {
          const i = this.createSgNode(t);
          return (
            (i.properties["scene-color-mult"] = (0, n.kJ)(
              this.props["scene-color-mult"],
            )),
            (i.properties["floor-color-mult"] = (0, n.kJ)(
              this.props["floor-color-mult"],
            )),
            (i.properties["scene-reflection-mult"] = (0, n.kJ)(
              this.props["scene-reflection-mult"],
            )),
            (i.properties["skydome-mult"] = (0, n.kJ)(
              this.props["skydome-mult"],
            )),
            (i.properties["roomview-mult"] = (0, n.UM)(
              this.props["roomview-mult"],
            )),
            (i.properties["allowed-action-sets"] = this.props[
              "allowed-action-sets"
            ].reduce((e, t) => e | t, 0)),
            (i.properties["inhibit-bounds-rendering"] =
              this.props["inhibit-bounds-rendering"]),
            (i.properties["pause-notifications"] =
              this.props["pause-notifications"]),
            (i.properties["roomview-enable-override"] =
              this.props["roomview-enable-override"]),
            (i.properties["systemlayer-msaa-enable-override"] =
              this.props["systemlayer-msaa-enable-override"]),
            (i.properties["construct-alpha-override"] =
              this.props["construct-alpha-override"]),
            [e, i]
          );
        }
      }
      (0, r.Cg)([s.o], a.prototype, "buildNode", null);
    },
    10: (e, t, i) => {
      "use strict";
      i(6540);
      var o = i(3496);
      o._J;
    },
    8313: (e, t, i) => {
      "use strict";
      i.d(t, { Fv: () => o });
      var o,
        r = i(1635),
        n = i(3496),
        s = i(3236);
      class a extends n._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "playspace-floorheight-adjust";
        }
        buildNode(e, t) {
          var i, o, r, n, s, a, l, d, p, u, c, m, v;
          const h = this.createSgNode(t);
          return (
            (h.properties["target-id"] = this.props.target_id),
            (h.properties["head-interaction-radius"] =
              null === (i = this.props) || void 0 === i
                ? void 0
                : i.head_interaction_radius),
            (h.properties["inactive-alpha-scale"] =
              null === (o = this.props) || void 0 === o
                ? void 0
                : o.inactive_alpha_scale),
            (h.properties["axis-radius"] =
              null === (r = this.props) || void 0 === r
                ? void 0
                : r.axis_radius),
            (h.properties["axis-color-hsv"] =
              null === (n = this.props) || void 0 === n
                ? void 0
                : n.axis_color_hsv),
            (h.properties["dot-radius"] =
              null === (s = this.props) || void 0 === s
                ? void 0
                : s.dot_radius),
            (h.properties["dot-color-hsv"] =
              null === (a = this.props) || void 0 === a
                ? void 0
                : a.dot_color_hsv),
            (h.properties["dot-inner-alpha"] =
              null === (l = this.props) || void 0 === l
                ? void 0
                : l.dot_inner_alpha),
            (h.properties["dot-outer-alpha"] =
              null === (d = this.props) || void 0 === d
                ? void 0
                : d.dot_outer_alpha),
            (h.properties["rings-radius"] =
              null === (p = this.props) || void 0 === p
                ? void 0
                : p.rings_radius),
            (h.properties["rings-color-hsv"] =
              null === (u = this.props) || void 0 === u
                ? void 0
                : u.rings_color_hsv),
            (h.properties["rings-hue-amplitude"] =
              null === (c = this.props) || void 0 === c
                ? void 0
                : c.rings_hue_amplitude),
            (h.properties["rings-hue-speed"] =
              null === (m = this.props) || void 0 === m
                ? void 0
                : m.rings_hue_speed),
            (h.properties["rings-half-width"] =
              null === (v = this.props) || void 0 === v
                ? void 0
                : v.rings_half_width),
            [e, h]
          );
        }
      }
      (0, r.Cg)([s.o], a.prototype, "buildNode", null);
      class l extends n._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "playspace-floordetection-geo";
        }
        buildNode(e, t) {
          return [e, this.createSgNode(t)];
        }
      }
      (0, r.Cg)([s.o], l.prototype, "buildNode", null),
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Circle = 1)] = "Circle"),
            (e[(e.Drawn = 2)] = "Drawn");
        })(o || (o = {}));
      class d extends n._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "playspace-draw-interaction";
        }
        buildNode(e, t) {
          var i, o;
          const r = this.createSgNode(t);
          return (
            (r.properties["target-id"] = this.props.target_id),
            (r.properties["radius-range"] =
              null === (i = this.props) || void 0 === i
                ? void 0
                : i.radius_range),
            (r.properties["center-selection-radius"] =
              null === (o = this.props) || void 0 === o
                ? void 0
                : o.center_selection_radius),
            [e, r]
          );
        }
      }
      (0, r.Cg)([s.o], d.prototype, "buildNode", null);
      class p extends n._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "playspace-outline";
        }
        buildNode(e, t) {
          var i, o, r, n, s, a, l, d;
          const p = this.createSgNode(t);
          return (
            (p.properties["generic-geo"] =
              null === (i = this.props) || void 0 === i
                ? void 0
                : i["generic-geo"]),
            (p.properties["hue-amplitude"] =
              null === (o = this.props) || void 0 === o
                ? void 0
                : o["hue-amplitude"]),
            (p.properties["hue-speed"] =
              null === (r = this.props) || void 0 === r
                ? void 0
                : r["hue-speed"]),
            (p.properties["center-dot-radius"] =
              null === (n = this.props) || void 0 === n
                ? void 0
                : n["center-dot-radius"]),
            (p.properties["center-color-hsv"] =
              null === (s = this.props) || void 0 === s
                ? void 0
                : s["center-color-hsv"]),
            (p.properties["outline-color-hsv"] =
              null === (a = this.props) || void 0 === a
                ? void 0
                : a["outline-color-hsv"]),
            (p.properties["shadow-radius-delta"] =
              null === (l = this.props) || void 0 === l
                ? void 0
                : l["shadow-radius-delta"]),
            (p.properties["outline-shadow-alpha"] =
              null === (d = this.props) || void 0 === d
                ? void 0
                : d["outline-shadow-alpha"]),
            [e, p]
          );
        }
      }
      (0, r.Cg)([s.o], p.prototype, "buildNode", null);
      class u extends n._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "playspace-dots";
        }
        buildNode(e, t) {
          var i, o, r, n, s, a, l, d, p;
          const u = this.createSgNode(t);
          return (
            (u.properties["tile-size"] =
              null === (i = this.props) || void 0 === i
                ? void 0
                : i["tile-size"]),
            (u.properties["max-radius"] =
              null === (o = this.props) || void 0 === o
                ? void 0
                : o["max-radius"]),
            (u.properties["min-radius"] =
              null === (r = this.props) || void 0 === r
                ? void 0
                : r["min-radius"]),
            (u.properties["max-radius-fade"] =
              null === (n = this.props) || void 0 === n
                ? void 0
                : n["max-radius-fade"]),
            (u.properties["min-radius-fade"] =
              null === (s = this.props) || void 0 === s
                ? void 0
                : s["min-radius-fade"]),
            (u.properties["dot-half-size"] =
              null === (a = this.props) || void 0 === a
                ? void 0
                : a["dot-half-size"]),
            (u.properties["center-randomization"] =
              null === (l = this.props) || void 0 === l
                ? void 0
                : l["center-randomization"]),
            (u.properties["color-hsv"] =
              null === (d = this.props) || void 0 === d
                ? void 0
                : d["color-hsv"]),
            (u.properties["clip-to-playspace"] =
              null === (p = this.props) || void 0 === p
                ? void 0
                : p["clip-to-playspace"]),
            [e, u]
          );
        }
      }
      (0, r.Cg)([s.o], u.prototype, "buildNode", null);
    },
    9011: (e, t, i) => {
      "use strict";
      var o = i(1635),
        r = i(3496),
        n = i(3236);
      class s extends r._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "tilefloor";
        }
        buildNode(e, t) {
          var i, o, n, s, a, l, d;
          const p = this.createSgNode(t);
          if (
            ((p.properties["tile-size"] = this.props["tile-size"]),
            (p.properties["tile-gap"] = this.props["tile-gap"]),
            (p.properties["inner-radius"] = this.props["inner-radius"]),
            (p.properties["outer-radius"] = this.props["outer-radius"]),
            (p.properties["fade-distance"] =
              null === (i = this.props) || void 0 === i
                ? void 0
                : i["fade-distance"]),
            (p.properties["min-tile-scale-at-periphery"] =
              this.props["min-tile-scale-at-periphery"]),
            (p.properties.height = (0, r.kJ)(this.props.height)),
            (p.properties.offset = [
              null === (o = this.props.offset) || void 0 === o ? void 0 : o.x,
              null === (n = this.props.offset) || void 0 === n ? void 0 : n.y,
            ]),
            "string" == typeof this.props.color)
          )
            p.properties.color = this.props.color;
          else if (this.props.color) {
            let e = (0, r.RH)(this.props.color, { r: 0, g: 0, b: 0 });
            p.properties.color = [e.r, e.g, e.b];
          }
          return (
            (p.properties["center-randomization"] =
              null == this ? void 0 : this.props["center-randomization"]),
            this.props["luma-randomization"] &&
              ((p.properties["luma-randomization-min-gain"] =
                this.props["luma-randomization"]["min-gain"]),
              (p.properties["luma-randomization-max-gain"] =
                this.props["luma-randomization"]["max-gain"])),
            this.props["reflection-randomization"] &&
              ((p.properties["reflection-randomization-min-gain"] =
                this.props["reflection-randomization"]["min-gain"]),
              (p.properties["reflection-randomization-max-gain"] =
                this.props["reflection-randomization"]["max-gain"])),
            (p.properties["normal-randomization-degrees"] =
              null === (s = this.props) || void 0 === s
                ? void 0
                : s["normal-randomization-degrees"]),
            this.props.chevron &&
              ((p.properties["chevron-luma-scale"] =
                this.props.chevron["luma-scale"]),
              (p.properties["chevron-reflection-scale"] =
                this.props.chevron["reflection-scale"])),
            (p.properties["auto-subdivide"] =
              null === (a = this.props) || void 0 === a
                ? void 0
                : a["auto-subdivide"]),
            (p.properties["pedestal-height"] = (0, r.kJ)(
              this.props["pedestal-height"],
            )),
            (p.properties["pedestal-radius"] = (0, r.kJ)(
              this.props["pedestal-radius"],
            )),
            (p.properties["floor-aa-shader"] =
              null === (l = this.props) || void 0 === l
                ? void 0
                : l["floor-aa-shader"]),
            (p.properties["stable-fade"] =
              null === (d = this.props) || void 0 === d
                ? void 0
                : d["stable-fade"]),
            [e, p]
          );
        }
      }
      (0, o.Cg)([n.o], s.prototype, "buildNode", null);
    },
    111: (e, t, i) => {
      "use strict";
      i(6540);
      var o = i(3496);
      o._J;
    },
    3606: (e, t, i) => {
      "use strict";
      i.d(t, {
        $Z: () => ge,
        Bf: () => q,
        Bn: () => M,
        Bz: () => h,
        C6: () => y,
        D1: () => te,
        Ec: () => Ce,
        El: () => he,
        Eo: () => r,
        F2: () => A,
        Fl: () => ue,
        GM: () => J,
        GO: () => g,
        Hh: () => oe,
        Ju: () => Y,
        Kh: () => d,
        MM: () => a,
        NX: () => D,
        Ni: () => T,
        P: () => H,
        Pi: () => _e,
        Qv: () => w,
        R_: () => ve,
        So: () => x,
        Sp: () => k,
        Sx: () => p,
        Ul: () => c,
        Uv: () => C,
        Vv: () => ee,
        WS: () => Z,
        Wm: () => b,
        Wt: () => f,
        XO: () => j,
        Y: () => W,
        Zw: () => S,
        aD: () => U,
        au: () => de,
        bl: () => V,
        cb: () => _,
        dw: () => u,
        gS: () => v,
        ge: () => L,
        i8: () => ce,
        iZ: () => R,
        j5: () => P,
        kk: () => s,
        kx: () => O,
        l3: () => n,
        lP: () => ne,
        mB: () => m,
        md: () => K,
        nJ: () => X,
        nY: () => I,
        np: () => o,
        qf: () => z,
        qt: () => pe,
        r4: () => fe,
        rG: () => se,
        tZ: () => ye,
        ui: () => le,
        uv: () => N,
        v0: () => l,
        vo: () => Q,
        w5: () => G,
        wi: () => F,
        wt: () => B,
        xP: () => ae,
        xY: () => $,
        x_: () => me,
        xz: () => ie,
        yl: () => re,
        zM: () => E,
      });
      const o = "openvr.tool.steamvr_environments",
        r = "system.generated.steam.exe",
        n = "vrlink.client",
        s = "steam.app.",
        a = s + "250820",
        l = s + "330050",
        d = "system.dashboard.",
        p = "system.dashboard.quicklaunch",
        u = "system.dashboard.nowplaying",
        c = 0.25,
        m = 2,
        v = 0.03,
        h = "current.scene.app.binding.list",
        g = "system.desktop",
        C = "system.window",
        _ = "system.standalone",
        y = "system.systemui",
        f = "system.settings",
        S = "system.keyboard",
        b = "system.vrwebhelper.controllerbinding",
        w = "system.messageoverlay",
        x = "valve.steam",
        V = "valve.steam.desktopgame",
        F = "valve.steam.gamepadui.main",
        I = "valve.steam.gamepadui.keyboard",
        M = "valve.steam.desktop",
        H = "steamlink_openvr-overlay",
        N = "DashboardCurvatureOrigin",
        L = y + "::" + N,
        R = 2.667 / 1694,
        k = "DashboardControlStripTransform",
        D = "DashboardGrabHandleTransform",
        E = "DashboardOverlayControlBarOrigin",
        O = "DashboardGrabHandleTransform_Legacy",
        z = "/settings/steamvr/enableHomeApp",
        B = "/settings/steamvr/supersampleManualOverride",
        G = "/settings/steamvr/supersampleScale",
        P = "/settings/GpuSpeed/gpuSpeedRenderTargetScale",
        T = "/settings/camera/roomViewStyle",
        U = "/settings/steamvr/backgroundCameraHeight",
        Z = "/settings/steamvr/backgroundDomeRadius",
        W = "/settings/steamvr/analogGain",
        J = "/settings/driver_lighthouse/indexHmdColumnCorrection",
        A = "/settings/steamvr/showAdvancedSettings",
        j = "/settings/dashboard/lastAccessedExternalOverlayKey",
        q = "/settings/internal/dashboardInitialOverlay",
        K = "/settings/dashboard/position_2",
        Y = "/settings/dashboard/theaterCurvature",
        Q = "/settings/dashboard/theaterScreenSize",
        X = "/settings/dashboard/unifiedDashboard",
        $ = "/settings/dashboard/theaterScreenAlignment",
        ee = "/settings/collisionBounds/CollisionBoundsFadeDistance",
        te = "/settings/camera/roomView",
        ie = "/settings/camera/enableCamera",
        oe = "/settings/camera/enableConstructRoomView",
        re = "/settings/dashboard/enableWindowView",
        ne = "/settings/dashboard/maxInlineTabs",
        se = "/settings/steamvr/maxRecommendedResolution",
        ae = "/settings/steamvr/disableKeyboardPrivacy",
        le = "/settings/camera/lightSourceFrequency",
        de = "/settings/steamvr/ipdHUD",
        pe = "/settings/dashboard/expectSteam",
        ue = "/settings/dashboard/allowLegacyControlBar",
        ce = "/settings/openxr/metaUnityPluginCompatibility",
        me = "/settings/input/overlayFilteringEnabled",
        ve = "/settings/input/overlayFilteringMinCutoff",
        he = "/settings/input/overlayFilteringBeta",
        ge = "/settings/input/overlayFilteringDerivCutoff",
        Ce = "/settings/input/overlayMagnetismEnabled",
        _e = "/settings/input/overlayMagnetismLockDistance",
        ye = "/settings/input/overlayMagnetismDeadZone",
        fe = "/steam/websocketconnected";
    },
    2495: (e, t, i) => {
      "use strict";
      i.d(t, { b: () => u });
      var o = i(6090),
        r = i(4734),
        n = i(1370),
        s = i(6540),
        a = i(795),
        l = i(3606),
        d = i(8037),
        p = i(7261);
      const u = 2;
      (0, n.PA)(function (e) {
        const { desktop: t } = e,
          [i, n] = s.useState(void 0);
        return (
          s.useEffect(() => {
            if (i)
              return (
                r.Q.OnDesktopFrameCreated(i),
                () => r.Q.OnDesktopFrameDestroyed(i)
              );
          }, [i]),
          1 != t.overlay.eOverlayType
            ? null
            : t.overlay.unFlags & o.NB.VisibleInDashboard
              ? s.createElement(
                  a.wI,
                  {
                    title: t.strLocalizedName,
                    iconEnum: 15,
                    showTabInDashboardBar: !0,
                    ref: n,
                  },
                  s.createElement(
                    a.P9,
                    {
                      summonOverlayKey: t.overlay.sOverlayKey,
                      renderChildren: "always",
                    },
                    s.createElement(
                      o.Zk,
                      {
                        interactive: !0,
                        overlay_key: t.overlay.sOverlayKey,
                        height: u,
                        curvature_origin_id: l.ge,
                        origin: o.Oi.BottomCenter,
                        debug_name: t.overlay.sOverlayKey,
                        scale_index: (0, d.HX)(p.$z.Dashboard),
                      },
                      s.createElement(a.gU, null),
                    ),
                  ),
                )
              : null
        );
      });
    },
    3481: (e, t, i) => {
      "use strict";
      i.d(t, { JJ: () => h, Sq: () => m });
      var o = i(1635),
        r = i(7813),
        n = i(3236),
        s = i(1835),
        a = i(1909),
        l = i(1295),
        d = i(3514),
        p = i(2929);
      const u = new (i(776).wd)("FrameStore");
      var c, m;
      !(function (e) {
        (e[(e.Disconnected = 0)] = "Disconnected"),
          (e[(e.Pending = 1)] = "Pending"),
          (e[(e.Connected = 2)] = "Connected");
      })(c || (c = {}));
      class v {
        get canTryConnectingToSteam() {
          return s.SW.isVRGamepadUIReady && l.H.BHasMutualCapability(15);
        }
        get steamConnectionState() {
          return this.m_eSteamConnectionState;
        }
        get supportedFrameFeatures() {
          return this.steamConnectionState != c.Connected
            ? {}
            : { steamHelpsRenderFrame: !0 };
        }
        constructor() {
          (this.m_unNextFrameID = p.A),
            (this.m_unNextTabID = m.BaseIncrementingIDOffset),
            (this.m_mapLastSentFrameUpdate = new Map()),
            (this.m_mapLastSentFrameVisibility = new Map()),
            (this.m_mapFrames = new Map()),
            (this.m_eSteamConnectionState = c.Disconnected),
            (this.m_initCallHandle = void 0),
            (0, r.makeObservable)(this);
        }
        Init() {
          return (0, o.sH)(this, void 0, void 0, function* () {
            (0, r.reaction)(
              () => this.canTryConnectingToSteam,
              (e) => {
                e ? this.InitSteamConnection() : this.CleanupSteamConnection();
              },
              { fireImmediately: !0 },
            ),
              (0, r.reaction)(
                () => this.frames.filter((e) => e.state == d.Iu.Destroyed),
                this.OnFramesDestroyed,
              ),
              (0, r.autorun)(this.SendUpdatesToSteam, { delay: 1e-4 });
          });
        }
        InitSteamConnection() {
          this.m_eSteamConnectionState == c.Disconnected
            ? ((this.m_eSteamConnectionState = c.Pending),
              this.m_mapLastSentFrameUpdate.clear(),
              this.m_mapLastSentFrameVisibility.clear(),
              u.Info("InitSteamConnection - Calling Steam.InitFrameSystem..."),
              (this.m_initCallHandle = a.p.Steam.InitFrameSystem(
                {},
                { nMaxTimeoutRetries: "infinite" },
              )),
              this.m_initCallHandle
                .then(() => {
                  u.Info(
                    "InitSteamConnection call to Steam.InitFrameSystem succeeded.",
                  ),
                    (this.m_eSteamConnectionState = c.Connected);
                })
                .catch((e) => {
                  8 == e.info.error_code
                    ? u.Info(
                        "InitSteamConnection call to Steam.InitFrameSystem cancelled.",
                      )
                    : u.Error(
                        "InitSteamConnection call to Steam.InitFrameSystem failed:",
                        e,
                      ),
                    (this.m_eSteamConnectionState = c.Disconnected),
                    (this.m_initCallHandle = void 0),
                    this.CleanupSteamConnection();
                }))
            : u.Info(
                "InitSteamConnection - State is already",
                c[this.m_eSteamConnectionState],
              );
        }
        CleanupSteamConnection() {
          (this.m_eSteamConnectionState = c.Disconnected),
            this.m_mapLastSentFrameUpdate.clear(),
            this.m_mapLastSentFrameVisibility.clear(),
            this.m_initCallHandle &&
              !this.m_initCallHandle.BCancelled() &&
              this.m_initCallHandle.cancel(),
            (this.m_initCallHandle = void 0);
        }
        SendUpdatesToSteam() {
          var e;
          if (!this.supportedFrameFeatures.steamHelpsRenderFrame) return;
          const t = this.frames.map((e) => e.protoForSteam).filter(Boolean),
            i = new Set(t.map((e) => e.frame_id)),
            o = t.filter(
              (e) => this.m_mapLastSentFrameUpdate.get(e.frame_id) !== e,
            ),
            n = Array.from(this.m_mapLastSentFrameUpdate.keys()).filter(
              (e) => !i.has(e),
            );
          for (const e of o) this.m_mapLastSentFrameUpdate.set(e.frame_id, e);
          for (const e of n) this.m_mapLastSentFrameUpdate.delete(e);
          const s = [];
          for (const t of this.frames)
            t.isCurrentlyVisible !=
              (null !==
                (e = this.m_mapLastSentFrameVisibility.get(t.frameID)) &&
                void 0 !== e &&
                e) &&
              (s.push(t),
              this.m_mapLastSentFrameVisibility.set(
                t.frameID,
                t.isCurrentlyVisible,
              ));
          const l = {
            updated_frames: o,
            deleted_frames: n,
            shown_frames: s
              .filter((e) => e.isCurrentlyVisible)
              .map((e) => e.frameID),
            hidden_frames: s
              .filter((e) => !e.isCurrentlyVisible)
              .map((e) => e.frameID),
          };
          a.p.Steam.UpdateFrameUIs(l, { nTimeoutMS: 6e4 }).then(
            (0, r.action)((e) => {
              var t, i;
              for (const o of null !== (t = e.results) && void 0 !== t ? t : [])
                null === (i = this.GetFrame(o.frame_id)) ||
                  void 0 === i ||
                  i.OnFrameUpdateResultFromSteam(o);
            }),
          );
        }
        OnFramesDestroyed(e) {
          e.forEach((e) => {
            this.m_mapFrames.delete(e.frameID);
          });
        }
        CreateFrame() {
          const e = new d.HC(this.m_unNextFrameID++, this.m_unNextTabID++);
          return (
            (0, r.when)(
              () => e.state != d.Iu.Uninitialized && e.state != d.Iu.Destroyed,
            ).then(() =>
              (0, r.runInAction)(() => this.m_mapFrames.set(e.frameID, e)),
            ),
            e
          );
        }
        get frames() {
          return Array.from(this.m_mapFrames.values());
        }
        GetFrame(e) {
          return this.m_mapFrames.get(e);
        }
        GetFramesWithAssociatedSummonKeys(e) {
          return this.frames.filter((t) =>
            t.associatedSummonOverlayKeys.includes(e),
          );
        }
        GetFrameWithTabId(e) {
          if (null != e)
            return this.frames.find((t) => {
              var i;
              return (
                (null === (i = t.tab) || void 0 === i ? void 0 : i.tab_id) === e
              );
            });
        }
        HasFramesWithAssociatedSummonKeys(e) {
          return this.GetFramesWithAssociatedSummonKeys(e).length > 0;
        }
      }
      (0, o.Cg)([r.observable], v.prototype, "m_mapFrames", void 0),
        (0, o.Cg)(
          [r.observable],
          v.prototype,
          "m_eSteamConnectionState",
          void 0,
        ),
        (0, o.Cg)([r.computed], v.prototype, "canTryConnectingToSteam", null),
        (0, o.Cg)([r.computed], v.prototype, "steamConnectionState", null),
        (0, o.Cg)([r.computed], v.prototype, "supportedFrameFeatures", null),
        (0, o.Cg)([r.action.bound], v.prototype, "InitSteamConnection", null),
        (0, o.Cg)(
          [r.action.bound],
          v.prototype,
          "CleanupSteamConnection",
          null,
        ),
        (0, o.Cg)([n.o], v.prototype, "SendUpdatesToSteam", null),
        (0, o.Cg)([r.action.bound], v.prototype, "OnFramesDestroyed", null),
        (0, o.Cg)([r.action], v.prototype, "CreateFrame", null),
        (0, o.Cg)([r.computed], v.prototype, "frames", null),
        (0, o.Cg)([n.o], v.prototype, "GetFrame", null),
        (0, o.Cg)(
          [n.o],
          v.prototype,
          "GetFramesWithAssociatedSummonKeys",
          null,
        ),
        (0, o.Cg)([n.o], v.prototype, "GetFrameWithTabId", null),
        (0, o.Cg)(
          [n.o],
          v.prototype,
          "HasFramesWithAssociatedSummonKeys",
          null,
        ),
        (function (e) {
          (e[(e.LegacyFloatingSteamMainMenu_VRSettings = p.A + 1)] =
            "LegacyFloatingSteamMainMenu_VRSettings"),
            (e[
              (e.BaseIncrementingIDOffset =
                e.LegacyFloatingSteamMainMenu_VRSettings + 1)
            ] = "BaseIncrementingIDOffset");
        })(m || (m = {}));
      const h = new v();
      window.FrameStore = h;
    },
    2156: (e, t, i) => {
      "use strict";
      i.d(t, { O: () => h });
      var o = i(1635),
        r = i(6090),
        n = i(6540),
        s = i(9978),
        a = i(1370),
        l = i(1835),
        d = i(3606),
        p = i(3246);
      function u(e) {
        const { children: t, invertParentPanelPitch: i, pitch: o } = e;
        return i || 0 != o
          ? n.createElement(
              r.dL,
              {
                invert_parent_panel_pitch: null != i && i,
                curvature_pitch: null != o ? o : 0,
              },
              t,
            )
          : n.createElement(n.Fragment, null, t);
      }
      function c(e) {
        let { children: t, offsetPixels: i, offsetMeters: o } = e;
        (i = null != i ? i : { x: 0, y: 0, z: 0 }),
          (o = null != o ? o : { x: 0, y: 0, z: 0 });
        const s = (0, r.CU)(
          o,
          (0, r.tx)(i, l.SW.m_fVRGamepadUI_MetersPerPixel),
        );
        return 0 != s.x || 0 != s.y || 0 != s.z
          ? n.createElement(r.dL, { translation: s }, t)
          : n.createElement(n.Fragment, null, t);
      }
      function m(e) {
        const { children: t, rotation: i } = e;
        return null != i && (0 != i.x || 0 != i.y || 0 != i.z)
          ? n.createElement(r.dL, { rotation: i }, t)
          : n.createElement(n.Fragment, null, t);
      }
      function v(e) {
        return 1 == (null == e ? void 0 : e.parent_enum) ? 0 : d.gS;
      }
      function h(e) {
        var t,
          i,
          a,
          d,
          p,
          h,
          g,
          C,
          _,
          y,
          f,
          S,
          b,
          w,
          x,
          V,
          F,
          I,
          M,
          H,
          N,
          L,
          R,
          k,
          D,
          E,
          O,
          z,
          B,
          G,
          P,
          T,
          U,
          Z,
          W,
          J,
          A,
          j,
          q;
        const { popupRequest: K, children: Y } = e,
          Q = (0, o.Tt)(e, ["popupRequest", "children"]),
          X = {
            x:
              null !==
                (i =
                  null === (t = null == K ? void 0 : K.origin_on_parent) ||
                  void 0 === t
                    ? void 0
                    : t.x) && void 0 !== i
                ? i
                : 0,
            y:
              null !==
                (d =
                  null === (a = null == K ? void 0 : K.origin_on_parent) ||
                  void 0 === a
                    ? void 0
                    : a.y) && void 0 !== d
                ? d
                : 0,
          },
          $ = {
            x:
              null !==
                (h =
                  null === (p = null == K ? void 0 : K.origin_on_popup) ||
                  void 0 === p
                    ? void 0
                    : p.x) && void 0 !== h
                ? h
                : 0,
            y:
              null !==
                (C =
                  null === (g = null == K ? void 0 : K.origin_on_popup) ||
                  void 0 === g
                    ? void 0
                    : g.y) && void 0 !== C
                ? C
                : 0,
          },
          ee = {
            u:
              null !==
                (y =
                  null === (_ = null == K ? void 0 : K.clip_rect) ||
                  void 0 === _
                    ? void 0
                    : _.u_min) && void 0 !== y
                ? y
                : 0,
            v:
              null !==
                (S =
                  null === (f = null == K ? void 0 : K.clip_rect) ||
                  void 0 === f
                    ? void 0
                    : f.v_min) && void 0 !== S
                ? S
                : 0,
          },
          te = {
            u:
              null !==
                (w =
                  null === (b = null == K ? void 0 : K.clip_rect) ||
                  void 0 === b
                    ? void 0
                    : b.u_max) && void 0 !== w
                ? w
                : 1,
            v:
              null !==
                (V =
                  null === (x = null == K ? void 0 : K.clip_rect) ||
                  void 0 === x
                    ? void 0
                    : x.v_max) && void 0 !== V
                ? V
                : 1,
          },
          ie = {
            x:
              null !==
                (I =
                  null === (F = null == K ? void 0 : K.offset) || void 0 === F
                    ? void 0
                    : F.x_pixels) && void 0 !== I
                ? I
                : 0,
            y:
              null !==
                (H =
                  null === (M = null == K ? void 0 : K.offset) || void 0 === M
                    ? void 0
                    : M.y_pixels) && void 0 !== H
                ? H
                : 0,
            z:
              null !==
                (L =
                  null === (N = null == K ? void 0 : K.offset) || void 0 === N
                    ? void 0
                    : N.z_pixels) && void 0 !== L
                ? L
                : 0,
          },
          oe = {
            x:
              null !==
                (k =
                  null === (R = null == K ? void 0 : K.offset) || void 0 === R
                    ? void 0
                    : R.x_meters) && void 0 !== k
                ? k
                : 0,
            y:
              null !==
                (E =
                  null === (D = null == K ? void 0 : K.offset) || void 0 === D
                    ? void 0
                    : D.y_meters) && void 0 !== E
                ? E
                : 0,
            z:
              null !==
                (z =
                  null === (O = null == K ? void 0 : K.offset) || void 0 === O
                    ? void 0
                    : O.z_meters) && void 0 !== z
                ? z
                : 0,
          },
          re = {
            x:
              null !==
                (G =
                  null === (B = null == K ? void 0 : K.rotation) || void 0 === B
                    ? void 0
                    : B.pitch_degrees) && void 0 !== G
                ? G
                : 0,
            y:
              null !==
                (T =
                  null === (P = null == K ? void 0 : K.rotation) || void 0 === P
                    ? void 0
                    : P.yaw_degrees) && void 0 !== T
                ? T
                : 0,
          },
          ne =
            null === (U = null == K ? void 0 : K.inherit_parent_pitch) ||
            void 0 === U ||
            U,
          se =
            null === (Z = null == K ? void 0 : K.inherit_parent_curvature) ||
            void 0 === Z ||
            Z,
          ae =
            null === (W = null == K ? void 0 : K.interactive) ||
            void 0 === W ||
            W,
          le =
            null !== (J = null == K ? void 0 : K.requires_laser) &&
            void 0 !== J &&
            J;
        let de =
          null !==
            (j =
              null === (A = null == K ? void 0 : K.scale) || void 0 === A
                ? void 0
                : A.scaler_value) && void 0 !== j
            ? j
            : 1;
        const pe =
            1 ==
            (null !== (q = null == K ? void 0 : K.sort_order) && void 0 !== q
              ? q
              : 0)
              ? 101
              : null,
          ue = (function (e) {
            var t, i, o;
            const r =
                null !== (t = null == e ? void 0 : e.parent_overlay_key) &&
                void 0 !== t
                  ? t
                  : "",
              n =
                null !==
                  (o =
                    null === (i = null == e ? void 0 : e.offset) || void 0 === i
                      ? void 0
                      : i.z_pixels) && void 0 !== o
                  ? o
                  : 0;
            return r == (0, s.useObserver)(() => l.SW.dashboardBarOverlayKey) &&
              n >= 0
              ? -0.5
              : 0;
          })(K);
        n.useLayoutEffect(
          () => r.O5.Current().forceLayoutUpdate(),
          [ee.u, ee.v, te.u, te.v],
        );
        const ce = n.createElement(
          u,
          { invertParentPanelPitch: !ne },
          n.createElement(
            c,
            { offsetPixels: ie, offsetMeters: oe },
            n.createElement(
              m,
              { rotation: re },
              n.createElement(
                r.Zk,
                Object.assign(
                  {
                    debug_name: `VRGamepadUI-PooledPopup-${null == K ? void 0 : K.dashboard_popup_id}`,
                    interactive: ae,
                    requires_laser: le,
                    curvature: se ? "inherit-from-parent-panel" : void 0,
                    overlay_key: null == K ? void 0 : K.popup_overlay_key,
                    origin: $,
                    meters_per_pixel: l.SW.m_fVRGamepadUI_MetersPerPixel * de,
                    reflect: v(K),
                    sort_depth_bias: ue,
                    uv_min: ee,
                    uv_max: te,
                    sort_order: pe,
                  },
                  Q,
                ),
                Y,
              ),
            ),
          ),
        );
        return (null == K ? void 0 : K.parent_overlay_key)
          ? n.createElement(
              r.b$,
              { parent_overlay_key: null == K ? void 0 : K.parent_overlay_key },
              n.createElement(
                r.Ci,
                { key: K.dashboard_popup_id, location: X },
                ce,
              ),
            )
          : (null == K ? void 0 : K.parent_device_path)
            ? n.createElement(
                r.dL,
                { parent_path: null == K ? void 0 : K.parent_device_path },
                ce,
              )
            : ce;
      }
      function g(e) {
        return (
          null != (null == e ? void 0 : e.parent_device_path) ||
          null != (null == e ? void 0 : e.parent_enum) ||
          null != (null == e ? void 0 : e.parent_overlay_key)
        );
      }
      (0, a.PA)((e) =>
        n.createElement(
          n.Fragment,
          null,
          p.r.requests
            .filter(g)
            .map((e) =>
              n.createElement(h, {
                popupRequest: e,
                key: e.dashboard_popup_id,
              }),
            ),
        ),
      );
    },
    9471: (e, t, i) => {
      "use strict";
      i.d(t, {
        Pq: () => a,
        Xj: () => l,
        FG: () => n,
        YN: () => s,
        fr: () => d,
      });
      var o = i(1635),
        r = i(6540);
      i(108);
      function n(e) {
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
              d: "M93.8,50v28.1c0,8.6-7,15.6-15.6,15.6H21.9c-8.6,0-15.6-7-15.6-15.6V21.9c0-8.6,7-15.6,15.6-15.6H50c1.7,0,3.1,1.4,3.1,3.1\n\t\t\t\ts-1.4,3.1-3.1,3.1H21.9c-5.2,0-9.4,4.2-9.4,9.4v56.3c0,5.2,4.2,9.4,9.4,9.4h56.3c5.2,0,9.4-4.2,9.4-9.4V50c0-1.7,1.4-3.1,3.1-3.1\n\t\t\t\tS93.8,48.3,93.8,50z M68.8,12.5h14.3L47.8,47.8c-1.2,1.2-1.2,3.2,0,4.4c0,0,0,0,0,0c1.2,1.2,3.2,1.2,4.4,0c0,0,0,0,0,0l35.3-35.3\n\t\t\t\tv14.3c0,1.7,1.4,3.1,3.1,3.1l0,0c1.7,0,3.1-1.4,3.1-3.1V9.4c0-0.8-0.3-1.6-0.9-2.2c-0.6-0.6-1.4-0.9-2.2-0.9H68.8\n\t\t\t\tc-1.7,0-3.1,1.4-3.1,3.1S67,12.5,68.8,12.5z",
            }),
          ),
        );
      }
      function s(e) {
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
      function a(e) {
        const { none: t, partial: i, right: n, left: s } = e,
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
          : i || n
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
      function l(e) {
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
      function d(e) {
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
    },
    1909: (e, t, i) => {
      "use strict";
      i.d(t, { p: () => v });
      var o = i(1635),
        r = i(6090),
        n = i(4074),
        s = i(1526),
        a = i(4999),
        l = i(776),
        d = i(3606),
        p = i(7813);
      const u = new l.wd("VRGamepadUIMessages");
      class c {
        get Steam() {
          return this.m_Steam_ClientMethods;
        }
        get SteamVR() {
          return this.m_SteamVR_Provider;
        }
        get Log() {
          return u;
        }
        constructor() {
          (this.m_SteamVR_Provider = new n.tC(this, a.f5)),
            (this.m_Steam_Client = new n.$k(this)),
            (this.m_Steam_ClientMethods = new a.oT(this.m_Steam_Client)),
            (this.m_mailbox = new r._n()),
            (this.m_bSteamWebsocketConnected = !1),
            (this.m_unNextVRGamepadUIMessageId =
              1e6 * Math.floor((Math.random() * n.Cg) / 1e6)),
            (0, p.makeObservable)(this);
        }
        Init() {
          return (0, o.sH)(this, void 0, void 0, function* () {
            var e;
            try {
              this.m_bSteamWebsocketConnected =
                null !==
                  (e =
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.VRPathProperties.GetBoolPathProperty(d.r4)) &&
                void 0 !== e &&
                e;
            } catch (e) {
              this.Log.Debug(e);
            }
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRPathProperties.RegisterForBoolPathPropertyChangedEvents(
                d.r4,
                (e) => {
                  (this.m_bSteamWebsocketConnected = e),
                    this.m_Steam_Client.NotifyConnectionStateChanged(e);
                },
              ),
              (0, p.autorun)(() =>
                this.m_Steam_Client.NotifyConnectionStateChanged(
                  this.IsConnected(),
                ),
              ),
              yield this.m_mailbox.Init("vrgamepadui_messages"),
              this.m_mailbox.RegisterHandler("vrgamepadui_message", (e) => {
                const t = (0, n.D7)(e.header);
                t &&
                  ((0, n.hC)(t)
                    ? this.m_SteamVR_Provider.HandleVRGamepadUIMessageRequest(
                        t,
                        e.payload,
                      )
                    : (0, n.fb)(t)
                      ? this.m_Steam_Client.HandleVRGamepadUIMessageResponse(
                          t,
                          e.payload,
                        )
                      : u.Error(
                          "Received message from Steam that's neither a request nor response. Header:",
                          JSON.stringify(t),
                        ));
              });
          });
        }
        CreateVRGamepadUIMessageId() {
          return (
            (this.m_unNextVRGamepadUIMessageId =
              this.m_unNextVRGamepadUIMessageId % (n.Cg - 1)),
            this.m_unNextVRGamepadUIMessageId++
          );
        }
        SendVRGamepadUIMessage(e, t) {
          let i, o;
          try {
            i = s.DX.fromObject(e).serializeBase64String();
          } catch (e) {
            return n.Y7.HeaderSerializationFailure;
          }
          try {
            o = t.serializeBase64String();
          } catch (e) {
            return n.Y7.PayloadSerializationFailure;
          }
          try {
            this.m_mailbox
              .WaitForConnect()
              .then(() => {
                this.m_mailbox.SendMessage("web_steam_mailbox", {
                  type: "vrgamepadui_message",
                  header: i,
                  payload: o,
                });
              })
              .catch((e) => {
                console.error(
                  "Failed to send VRGamepadUIMessage via Mailbox:",
                  e,
                );
              });
          } catch (e) {
            return n.Y7.SendFailure;
          }
          return n.Y7.Success;
        }
        IsConnected() {
          return this.m_bSteamWebsocketConnected && this.m_mailbox.connected;
        }
      }
      (0, o.Cg)(
        [p.observable],
        c.prototype,
        "m_bSteamWebsocketConnected",
        void 0,
      );
      const m = new c();
      window.VRGamepadUIMessages = m;
      const v = m;
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/chunk~2e670652e.js.map
