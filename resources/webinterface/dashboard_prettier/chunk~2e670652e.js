var CLSTAMP = "10223590";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [170],
  {
    108: (e) => {
      e.exports = {
        recordingCircle: "svg_library_recordingCircle_2ovZQ",
        AnimationFadeOutIn: "svg_library_AnimationFadeOutIn_1lEwX",
      };
    },
    1184: (e, t, o) => {
      "use strict";
      var r,
        i = o(1635),
        n = o(3496),
        s = o(3236);
      !(function (e) {
        (e[(e.Disabled = 0)] = "Disabled"),
          (e[(e.WorldZeroY = 1)] = "WorldZeroY"),
          (e[(e.WorldDynamicFloor = 2)] = "WorldDynamicFloor");
      })(r || (r = {}));
      class a extends n._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "constraint";
        }
        buildNode(e, t) {
          const o = this.createSgNode(t);
          return (
            (o.properties["projection-constraint"] =
              this.props.projection_constraint),
            [e, o]
          );
        }
      }
      (0, i.Cg)([s.o], a.prototype, "buildNode", null);
    },
    4120: (e, t, o) => {
      "use strict";
      var r,
        i = o(1635),
        n = o(3496),
        s = o(3236);
      !(function (e) {
        (e[(e.RoomSetupFloor = 1)] = "RoomSetupFloor"),
          (e[(e.Locomotion = 2)] = "Locomotion"),
          (e[(e.QuickRecenter = 4)] = "QuickRecenter");
      })(r || (r = {}));
      class a extends n._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "constructglobals";
        }
        buildNode(e, t) {
          const o = this.createSgNode(t);
          return (
            (o.properties["scene-color-mult"] = (0, n.kJ)(
              this.props["scene-color-mult"],
            )),
            (o.properties["floor-color-mult"] = (0, n.kJ)(
              this.props["floor-color-mult"],
            )),
            (o.properties["scene-reflection-mult"] = (0, n.kJ)(
              this.props["scene-reflection-mult"],
            )),
            (o.properties["skydome-mult"] = (0, n.kJ)(
              this.props["skydome-mult"],
            )),
            (o.properties["roomview-mult"] = (0, n.UM)(
              this.props["roomview-mult"],
            )),
            (o.properties["allowed-action-sets"] = this.props[
              "allowed-action-sets"
            ].reduce((e, t) => e | t, 0)),
            (o.properties["inhibit-bounds-rendering"] =
              this.props["inhibit-bounds-rendering"]),
            (o.properties["pause-notifications"] =
              this.props["pause-notifications"]),
            (o.properties["roomview-enable-override"] =
              this.props["roomview-enable-override"]),
            (o.properties["systemlayer-msaa-enable-override"] =
              this.props["systemlayer-msaa-enable-override"]),
            (o.properties["construct-alpha-override"] =
              this.props["construct-alpha-override"]),
            [e, o]
          );
        }
      }
      (0, i.Cg)([s.o], a.prototype, "buildNode", null);
    },
    10: (e, t, o) => {
      "use strict";
      o(6540);
      var r = o(3496);
      r._J;
    },
    8313: (e, t, o) => {
      "use strict";
      o.d(t, { Fv: () => r });
      var r,
        i = o(1635),
        n = o(3496),
        s = o(3236);
      class a extends n._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "playspace-floorheight-adjust";
        }
        buildNode(e, t) {
          var o, r, i, n, s, a, l, d, p, u, c, m, v;
          const h = this.createSgNode(t);
          return (
            (h.properties["target-id"] = this.props.target_id),
            (h.properties["head-interaction-radius"] =
              null === (o = this.props) || void 0 === o
                ? void 0
                : o.head_interaction_radius),
            (h.properties["inactive-alpha-scale"] =
              null === (r = this.props) || void 0 === r
                ? void 0
                : r.inactive_alpha_scale),
            (h.properties["axis-radius"] =
              null === (i = this.props) || void 0 === i
                ? void 0
                : i.axis_radius),
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
      (0, i.Cg)([s.o], a.prototype, "buildNode", null);
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
      (0, i.Cg)([s.o], l.prototype, "buildNode", null),
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Circle = 1)] = "Circle"),
            (e[(e.Drawn = 2)] = "Drawn");
        })(r || (r = {}));
      class d extends n._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "playspace-draw-interaction";
        }
        buildNode(e, t) {
          var o, r;
          const i = this.createSgNode(t);
          return (
            (i.properties["target-id"] = this.props.target_id),
            (i.properties["radius-range"] =
              null === (o = this.props) || void 0 === o
                ? void 0
                : o.radius_range),
            (i.properties["center-selection-radius"] =
              null === (r = this.props) || void 0 === r
                ? void 0
                : r.center_selection_radius),
            [e, i]
          );
        }
      }
      (0, i.Cg)([s.o], d.prototype, "buildNode", null);
      class p extends n._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "playspace-outline";
        }
        buildNode(e, t) {
          var o, r, i, n, s, a, l, d;
          const p = this.createSgNode(t);
          return (
            (p.properties["generic-geo"] =
              null === (o = this.props) || void 0 === o
                ? void 0
                : o["generic-geo"]),
            (p.properties["hue-amplitude"] =
              null === (r = this.props) || void 0 === r
                ? void 0
                : r["hue-amplitude"]),
            (p.properties["hue-speed"] =
              null === (i = this.props) || void 0 === i
                ? void 0
                : i["hue-speed"]),
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
      (0, i.Cg)([s.o], p.prototype, "buildNode", null);
      class u extends n._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "playspace-dots";
        }
        buildNode(e, t) {
          var o, r, i, n, s, a, l, d, p;
          const u = this.createSgNode(t);
          return (
            (u.properties["tile-size"] =
              null === (o = this.props) || void 0 === o
                ? void 0
                : o["tile-size"]),
            (u.properties["max-radius"] =
              null === (r = this.props) || void 0 === r
                ? void 0
                : r["max-radius"]),
            (u.properties["min-radius"] =
              null === (i = this.props) || void 0 === i
                ? void 0
                : i["min-radius"]),
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
      (0, i.Cg)([s.o], u.prototype, "buildNode", null);
    },
    9011: (e, t, o) => {
      "use strict";
      var r = o(1635),
        i = o(3496),
        n = o(3236);
      class s extends i._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "tilefloor";
        }
        buildNode(e, t) {
          var o, r, n, s, a, l, d;
          const p = this.createSgNode(t);
          if (
            ((p.properties["tile-size"] = this.props["tile-size"]),
            (p.properties["tile-gap"] = this.props["tile-gap"]),
            (p.properties["inner-radius"] = this.props["inner-radius"]),
            (p.properties["outer-radius"] = this.props["outer-radius"]),
            (p.properties["fade-distance"] =
              null === (o = this.props) || void 0 === o
                ? void 0
                : o["fade-distance"]),
            (p.properties["min-tile-scale-at-periphery"] =
              this.props["min-tile-scale-at-periphery"]),
            (p.properties.height = (0, i.kJ)(this.props.height)),
            (p.properties.offset = [
              null === (r = this.props.offset) || void 0 === r ? void 0 : r.x,
              null === (n = this.props.offset) || void 0 === n ? void 0 : n.y,
            ]),
            "string" == typeof this.props.color)
          )
            p.properties.color = this.props.color;
          else if (this.props.color) {
            let e = (0, i.RH)(this.props.color, { r: 0, g: 0, b: 0 });
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
            (p.properties["pedestal-height"] = (0, i.kJ)(
              this.props["pedestal-height"],
            )),
            (p.properties["pedestal-radius"] = (0, i.kJ)(
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
      (0, r.Cg)([n.o], s.prototype, "buildNode", null);
    },
    111: (e, t, o) => {
      "use strict";
      o(6540);
      var r = o(3496);
      r._J;
    },
    3606: (e, t, o) => {
      "use strict";
      o.d(t, {
        $Z: () => ge,
        Bf: () => J,
        Bn: () => F,
        Bz: () => h,
        C6: () => y,
        D1: () => te,
        Ec: () => _e,
        El: () => he,
        Eo: () => i,
        F2: () => K,
        Fl: () => ue,
        GM: () => Z,
        GO: () => g,
        Hh: () => re,
        Ju: () => Y,
        Kh: () => d,
        MM: () => a,
        NX: () => D,
        Ni: () => U,
        P: () => N,
        Pi: () => Ce,
        Qv: () => w,
        R_: () => ve,
        So: () => M,
        Sp: () => R,
        Sx: () => p,
        Ul: () => c,
        Uv: () => _,
        Vv: () => ee,
        WS: () => W,
        Wm: () => S,
        Wt: () => b,
        XO: () => j,
        Y: () => A,
        Zw: () => f,
        aD: () => G,
        au: () => de,
        bl: () => E,
        cb: () => C,
        dw: () => u,
        gS: () => v,
        ge: () => V,
        i8: () => ce,
        iZ: () => H,
        j5: () => P,
        kk: () => s,
        kx: () => k,
        l3: () => n,
        lP: () => ne,
        mB: () => m,
        md: () => q,
        nJ: () => X,
        nY: () => I,
        np: () => r,
        qf: () => T,
        qt: () => pe,
        rG: () => se,
        tZ: () => ye,
        ui: () => le,
        uv: () => L,
        v0: () => l,
        vo: () => Q,
        w5: () => z,
        wi: () => x,
        wt: () => B,
        xP: () => ae,
        xY: () => $,
        x_: () => me,
        xz: () => oe,
        yl: () => ie,
        zM: () => O,
      });
      const r = "openvr.tool.steamvr_environments",
        i = "system.generated.steam.exe",
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
        _ = "system.window",
        C = "system.standalone",
        y = "system.systemui",
        b = "system.settings",
        f = "system.keyboard",
        S = "system.vrwebhelper.controllerbinding",
        w = "system.messageoverlay",
        M = "valve.steam",
        E = "valve.steam.desktopgame",
        x = "valve.steam.gamepadui.main",
        I = "valve.steam.gamepadui.keyboard",
        F = "valve.steam.desktop",
        N = "steamlink_openvr-overlay",
        L = "DashboardCurvatureOrigin",
        V = y + "::" + L,
        H = 2.667 / 1694,
        R = "DashboardControlStripTransform",
        D = "DashboardGrabHandleTransform",
        O = "DashboardOverlayControlBarOrigin",
        k = "DashboardGrabHandleTransform_Legacy",
        T = "/settings/steamvr/enableHomeApp",
        B = "/settings/steamvr/supersampleManualOverride",
        z = "/settings/steamvr/supersampleScale",
        P = "/settings/GpuSpeed/gpuSpeedRenderTargetScale",
        U = "/settings/camera/roomViewStyle",
        G = "/settings/steamvr/backgroundCameraHeight",
        W = "/settings/steamvr/backgroundDomeRadius",
        A = "/settings/steamvr/analogGain",
        Z = "/settings/driver_lighthouse/indexHmdColumnCorrection",
        K = "/settings/steamvr/showAdvancedSettings",
        j = "/settings/dashboard/lastAccessedExternalOverlayKey",
        J = "/settings/internal/dashboardInitialOverlay",
        q = "/settings/dashboard/position_2",
        Y = "/settings/dashboard/theaterCurvature",
        Q = "/settings/dashboard/theaterScreenSize",
        X = "/settings/dashboard/unifiedDashboard",
        $ = "/settings/dashboard/theaterScreenAlignment",
        ee = "/settings/collisionBounds/CollisionBoundsFadeDistance",
        te = "/settings/camera/roomView",
        oe = "/settings/camera/enableCamera",
        re = "/settings/camera/enableConstructRoomView",
        ie = "/settings/dashboard/enableWindowView",
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
        _e = "/settings/input/overlayMagnetismEnabled",
        Ce = "/settings/input/overlayMagnetismLockDistance",
        ye = "/settings/input/overlayMagnetismDeadZone";
    },
    2495: (e, t, o) => {
      "use strict";
      o.d(t, { b: () => u });
      var r = o(6090),
        i = o(4734),
        n = o(1370),
        s = o(6540),
        a = o(795),
        l = o(3606),
        d = o(5163),
        p = o(7261);
      const u = 2;
      (0, n.PA)(function (e) {
        const { desktop: t } = e,
          [o, n] = s.useState(void 0);
        return (
          s.useEffect(() => {
            if (o)
              return (
                i.Q.OnDesktopFrameCreated(o),
                () => i.Q.OnDesktopFrameDestroyed(o)
              );
          }, [o]),
          1 != t.overlay.eOverlayType
            ? null
            : t.overlay.unFlags & r.NB.VisibleInDashboard
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
                      r.Zk,
                      {
                        interactive: !0,
                        overlay_key: t.overlay.sOverlayKey,
                        height: u,
                        curvature_origin_id: l.ge,
                        origin: r.Oi.BottomCenter,
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
    3481: (e, t, o) => {
      "use strict";
      o.d(t, { JJ: () => v, Sq: () => i });
      var r,
        i,
        n = o(1635),
        s = o(7813),
        a = o(3236),
        l = o(1835),
        d = o(1909),
        p = o(1295),
        u = o(3514),
        c = o(2929);
      !(function (e) {
        (e[(e.Disconnected = 0)] = "Disconnected"),
          (e[(e.Pending = 1)] = "Pending"),
          (e[(e.Connected = 2)] = "Connected");
      })(r || (r = {}));
      class m {
        get canTryConnectingToSteam() {
          return l.SW.isVRGamepadUIReady && p.H.BHasMutualCapability(15);
        }
        get steamConnectionState() {
          return this.m_eSteamConnectionState;
        }
        get supportedFrameFeatures() {
          return this.steamConnectionState != r.Connected
            ? {}
            : { steamHelpsRenderFrame: !0 };
        }
        constructor() {
          (this.m_unNextFrameID = c.A),
            (this.m_unNextTabID = i.BaseIncrementingIDOffset),
            (this.m_mapLastSentFrameUpdate = new Map()),
            (this.m_mapLastSentFrameVisibility = new Map()),
            (this.m_mapFrames = new Map()),
            (this.m_eSteamConnectionState = r.Disconnected),
            (0, s.makeObservable)(this);
        }
        Init() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            (0, s.reaction)(
              () => this.canTryConnectingToSteam,
              (e) => {
                e && this.m_eSteamConnectionState == r.Disconnected
                  ? this.InitSteamConnection()
                  : e || (this.m_eSteamConnectionState = r.Disconnected);
              },
              { fireImmediately: !0 },
            ),
              (0, s.reaction)(
                () => this.frames.filter((e) => e.state == u.Iu.Destroyed),
                this.OnFramesDestroyed,
              ),
              (0, s.autorun)(this.SendUpdatesToSteam, { delay: 1e-4 });
          });
        }
        InitSteamConnection() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            (this.m_eSteamConnectionState = r.Pending),
              this.m_mapLastSentFrameUpdate.clear(),
              this.m_mapLastSentFrameVisibility.clear();
            try {
              yield d.p.Steam.InitFrameSystem({ destroy_all_frames: !1 });
              this.m_eSteamConnectionState = r.Connected;
            } catch (e) {
              console.error("CFrameStore failed to init Steam connection:", e),
                (this.m_eSteamConnectionState = r.Disconnected);
            }
          });
        }
        SendUpdatesToSteam() {
          var e;
          if (!this.supportedFrameFeatures.steamHelpsRenderFrame) return;
          const t = this.frames.map((e) => e.protoForSteam).filter(Boolean),
            o = new Set(t.map((e) => e.frame_id)),
            r = t.filter(
              (e) => this.m_mapLastSentFrameUpdate.get(e.frame_id) !== e,
            ),
            i = Array.from(this.m_mapLastSentFrameUpdate.keys()).filter(
              (e) => !o.has(e),
            );
          for (const e of r) this.m_mapLastSentFrameUpdate.set(e.frame_id, e);
          for (const e of i) this.m_mapLastSentFrameUpdate.delete(e);
          const n = [];
          for (const t of this.frames)
            t.isCurrentlyVisible !=
              (null !==
                (e = this.m_mapLastSentFrameVisibility.get(t.frameID)) &&
                void 0 !== e &&
                e) &&
              (n.push(t),
              this.m_mapLastSentFrameVisibility.set(
                t.frameID,
                t.isCurrentlyVisible,
              ));
          const a = {
            updated_frames: r,
            deleted_frames: i,
            shown_frames: n
              .filter((e) => e.isCurrentlyVisible)
              .map((e) => e.frameID),
            hidden_frames: n
              .filter((e) => !e.isCurrentlyVisible)
              .map((e) => e.frameID),
          };
          d.p.Steam.UpdateFrameUIs(a).then(
            (0, s.action)((e) => {
              var t, o;
              for (const r of null !== (t = e.results) && void 0 !== t ? t : [])
                null === (o = this.GetFrame(r.frame_id)) ||
                  void 0 === o ||
                  o.OnFrameUpdateResultFromSteam(r);
            }),
          );
        }
        OnFramesDestroyed(e) {
          e.forEach((e) => {
            this.m_mapFrames.delete(e.frameID);
          });
        }
        CreateFrame() {
          const e = new u.HC(this.m_unNextFrameID++, this.m_unNextTabID++);
          return (
            (0, s.when)(
              () => e.state != u.Iu.Uninitialized && e.state != u.Iu.Destroyed,
            ).then(() =>
              (0, s.runInAction)(() => this.m_mapFrames.set(e.frameID, e)),
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
              var o;
              return (
                (null === (o = t.tab) || void 0 === o ? void 0 : o.tab_id) === e
              );
            });
        }
        HasFramesWithAssociatedSummonKeys(e) {
          return this.GetFramesWithAssociatedSummonKeys(e).length > 0;
        }
      }
      (0, n.Cg)([s.observable], m.prototype, "m_mapFrames", void 0),
        (0, n.Cg)(
          [s.observable],
          m.prototype,
          "m_eSteamConnectionState",
          void 0,
        ),
        (0, n.Cg)([s.computed], m.prototype, "canTryConnectingToSteam", null),
        (0, n.Cg)([s.computed], m.prototype, "steamConnectionState", null),
        (0, n.Cg)([s.computed], m.prototype, "supportedFrameFeatures", null),
        (0, n.Cg)([s.action.bound], m.prototype, "InitSteamConnection", null),
        (0, n.Cg)([a.o], m.prototype, "SendUpdatesToSteam", null),
        (0, n.Cg)([s.action.bound], m.prototype, "OnFramesDestroyed", null),
        (0, n.Cg)([s.action], m.prototype, "CreateFrame", null),
        (0, n.Cg)([s.computed], m.prototype, "frames", null),
        (0, n.Cg)([a.o], m.prototype, "GetFrame", null),
        (0, n.Cg)(
          [a.o],
          m.prototype,
          "GetFramesWithAssociatedSummonKeys",
          null,
        ),
        (0, n.Cg)([a.o], m.prototype, "GetFrameWithTabId", null),
        (0, n.Cg)(
          [a.o],
          m.prototype,
          "HasFramesWithAssociatedSummonKeys",
          null,
        ),
        (function (e) {
          (e[(e.LegacyFloatingSteamMainMenu_VRSettings = c.A + 1)] =
            "LegacyFloatingSteamMainMenu_VRSettings"),
            (e[
              (e.BaseIncrementingIDOffset =
                e.LegacyFloatingSteamMainMenu_VRSettings + 1)
            ] = "BaseIncrementingIDOffset");
        })(i || (i = {}));
      const v = new m();
      window.FrameStore = v;
    },
    2563: (e, t, o) => {
      "use strict";
      o.d(t, {
        DE: () => T,
        Hz: () => N,
        L_: () => I,
        N2: () => U,
        Nd: () => z,
        OR: () => D,
        R0: () => R,
        Te: () => O,
        Tr: () => P,
        WO: () => k,
        Wn: () => B,
        gZ: () => H,
        oZ: () => G,
        vX: () => V,
      });
      var r,
        i = o(1635),
        n = o(6090),
        s = o(3236),
        a = o(7813),
        l = o(1370),
        d = o(6540),
        p = o(6138),
        u = o(6731),
        c = o(5615),
        m = o(917),
        v = o(4963),
        h = o(924),
        g = o(3606),
        _ = o(3714),
        C = o(6575),
        y = o(1139),
        b = o(3473),
        f = o(1333),
        S = o(5735),
        w = o.n(S),
        M = o(9283),
        E = o(1835),
        x = o(795);
      const I = (0, l.PA)(function (e) {
          return d.createElement(
            F,
            Object.assign({}, e, { VRGamepadUI: E.SW.isVRGamepadUI }),
          );
        }),
        F = (e) => {
          var t, o, r;
          const i = e.VRGamepadUI,
            s = (d.useRef(null), d.useRef(null)),
            a = null === (t = e.scrollable) || void 0 === t || t,
            l =
              null !== (o = e.foregroundReflectMultiplier) && void 0 !== o
                ? o
                : g.gS,
            m =
              null ===
                (r = f.HR.settings.get("/settings/dashboard/allowCurvature")) ||
              void 0 === r ||
              r
                ? g.uv
                : null;
          return d.createElement(
            d.Fragment,
            null,
            d.createElement(
              n.dL,
              { translation: { z: 1e-5 } },
              d.createElement(
                n.Zk,
                {
                  id: "dashboard_widget_panel_id",
                  visibility: e.visible ? n.Fi.Visible : n.Fi.Hidden,
                  debug_name: e.debugName,
                  curvature_origin_id: m,
                  origin: n.Oi.BottomCenter,
                  interactive: !0,
                  scrollable: a,
                  meters_per_pixel: i ? void 0 : g.iZ,
                  reflect: i ? void 0 : 0.2 * l,
                  width: i ? 2.67 : void 0,
                },
                d.createElement(x.gU, null),
                d.createElement(
                  u.vw,
                  { ref: s },
                  d.createElement(
                    p.W,
                    null,
                    d.createElement(
                      c.M,
                      {
                        scrollDirection: a ? c.D.Vertical : c.D.None,
                        className: (0, y.FH)(
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
      function N(e) {
        return d.createElement(
          p.$,
          { className: "PowerMenuButton", onClick: e.onClick },
          d.createElement("div", { className: "HoverGradient" }),
          d.createElement("div", { className: "ClickGradient" }),
          d.createElement("span", null, e.label),
          e.lineBelow && d.createElement("div", { className: "LineBelow" }),
        );
      }
      let L = class extends d.Component {
        constructor(e) {
          super(e), (0, a.makeObservable)(this);
        }
        get isShowingTooltip() {
          return E.SW.s_ControlBarCurrentlyShownTooltip === this;
        }
        show() {
          E.SW.s_ControlBarCurrentlyShownTooltip = this;
        }
        hide() {
          this.isShowingTooltip &&
            (E.SW.s_ControlBarCurrentlyShownTooltip = null);
        }
        render() {
          var e;
          const t =
              this.props.text && (this.props.shown || this.isShowingTooltip),
            o = this.props.translation
              ? this.props.translation
              : { x: 0, y: -0.2, z: 0.05 },
            r =
              null ===
                (e = f.HR.settings.get("/settings/dashboard/allowCurvature")) ||
              void 0 === e ||
              e
                ? g.uv
                : null;
          return d.createElement(
            "div",
            { style: { position: "absolute", left: "50%", top: "50%" } },
            d.createElement(
              C.l,
              { allowableParentSelectors: [".DashboardMain"] },
              d.createElement(
                n.dL,
                { translation: o },
                d.createElement(
                  n.Zk,
                  {
                    visibility: t ? n.Fi.Visible : n.Fi.SkipInSceneGraph,
                    meters_per_pixel: g.iZ,
                    curvature_origin_id: r,
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
      (0, i.Cg)([a.computed], L.prototype, "isShowingTooltip", null),
        (0, i.Cg)([a.action.bound], L.prototype, "show", null),
        (0, i.Cg)([a.action.bound], L.prototype, "hide", null),
        (L = (0, i.Cg)([l.PA], L));
      class V extends d.Component {
        static ShouldInvertThumbnail(e) {
          if (!e) return !1;
          if (((e = e.toLowerCase()), !V.s_mapShouldInvertThumbnail.has(e))) {
            let t = !1;
            e.endsWith(".svg") && (t = !0),
              e.startsWith("data:") &&
                V.k_rsThumbnailHashesToInvert.indexOf(w().hash(e)) >= 0 &&
                (t = !0),
              V.s_mapShouldInvertThumbnail.set(e, t);
          }
          return V.s_mapShouldInvertThumbnail.get(e);
        }
        render() {
          var e;
          const t = null !== (e = this.props.shadow) && void 0 !== e && e,
            o = V.ShouldInvertThumbnail(this.props.src);
          return d.createElement(
            "div",
            { className: "Icon" },
            t &&
              d.createElement("img", {
                className: "Shadow",
                src: this.props.src,
              }),
            d.createElement("img", {
              className: (0, y.FH)(["BlackToWhite", o]),
              src: this.props.src,
            }),
          );
        }
      }
      var H, R;
      (V.k_rsThumbnailHashesToInvert = [
        "5cbd0ebd6459cdaf75fdcafc5051f4e0",
        "c77452e60fc29227b33773ff6e74f8a1",
        "44b62220b39ba717fbfc65e3b4225491",
        "86bbab56235b55f6e5e7d288342931d7",
      ]),
        (V.s_mapShouldInvertThumbnail = new Map()),
        (function (e) {
          (e[(e.Large = 0)] = "Large"),
            (e[(e.Small = 1)] = "Small"),
            (e[(e.App = 2)] = "App");
        })(H || (H = {})),
        (function (e) {
          (e[(e.Center = 0)] = "Center"), (e[(e.Fill = 1)] = "Fill");
        })(R || (R = {}));
      const D = (e) =>
        d.createElement(
          "div",
          { className: (0, y.FH)("ControlBarGroup", H[e.style]) },
          e.children,
        );
      let O = class extends d.Component {
        constructor(e) {
          super(e), (this.m_refTooltip = d.createRef());
        }
        onMouseEnter() {
          var e, t, o;
          null === (e = this.m_refTooltip.current) || void 0 === e || e.show(),
            null === (o = (t = this.props).onMouseEnter) ||
              void 0 === o ||
              o.call(t);
        }
        onMouseLeave() {
          var e, t, o;
          null === (e = this.m_refTooltip.current) || void 0 === e || e.hide(),
            null === (o = (t = this.props).onMouseLeave) ||
              void 0 === o ||
              o.call(t);
        }
        render() {
          var e;
          return d.createElement(
            p.$,
            {
              className: (0, y.FH)(
                "ControlBarButton",
                this.props.additionalClassNames,
                R[
                  null !== (e = this.props.imageStyle) && void 0 !== e
                    ? e
                    : R.Center
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
              releaseSoundEffect: v.j.ControlBarButtonClick,
            },
            this.props.centerPanelAnchorID &&
              d.createElement(
                "div",
                { style: { position: "absolute", left: "50%", top: "50%" } },
                d.createElement(C.l, {
                  allowableParentSelectors: [".DashboardMain"],
                  panelAnchorID: this.props.centerPanelAnchorID,
                }),
              ),
            d.createElement(L, {
              text: this.props.label,
              ref: this.m_refTooltip,
            }),
            d.createElement(V, { src: this.props.imageUrl }),
          );
        }
      };
      (0, i.Cg)([s.o], O.prototype, "onMouseEnter", null),
        (0, i.Cg)([s.o], O.prototype, "onMouseLeave", null),
        (O = (0, i.Cg)([l.PA], O));
      const k = (e) =>
        d.createElement(
          D,
          { style: e.style },
          d.createElement(O, Object.assign({}, e)),
        );
      d.Component;
      class T extends d.Component {
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
          var e, t, o;
          const r = this.props.position,
            i = Math.asin(r) / Math.PI,
            s = null !== (e = this.props.scale) && void 0 !== e ? e : 1;
          return d.createElement(
            d.Fragment,
            null,
            d.createElement(
              n.Ci,
              { location: { x: r, y: -1 } },
              d.createElement(n.dL, {
                id: this.m_sAnchorID,
                translation: { y: 0.01 * Math.abs(i), z: -0.03 * Math.abs(i) },
                rotation: { y: 15 * i, z: 2 * i },
              }),
            ),
            d.createElement(
              C.b,
              {
                allowableParentSelectors: [".DashboardMain"],
                onPortalDidMount: this.onPortalDidMount,
              },
              d.createElement(
                n.N,
                { color: this.props.tintColor },
                d.createElement(
                  h.Sv,
                  {
                    additionalClassName: "ControlBarTrayAnimation",
                    visible: this.props.visible,
                    duration: 0.25,
                    onStartShowing: this.updateBackgroundSize,
                    onShown: this.updateBackgroundSize,
                  },
                  d.createElement(
                    n.dL,
                    {
                      parent_id: this.m_sAnchorID,
                      translation: { y: 0.04 * s, z: -0.01 },
                      scale: s,
                    },
                    d.createElement(
                      n.Zk,
                      {
                        curvature_origin_id:
                          null !== (t = this.props.curvatureOriginId) &&
                          void 0 !== t
                            ? t
                            : null,
                        origin: n.Oi.TopCenter,
                        interactive: !0,
                        scrollable: !0,
                        meters_per_pixel: g.iZ,
                        sort_depth_bias: this.props.sort_depth_bias,
                        debug_name: "control-bar-tray",
                      },
                      d.createElement(
                        "div",
                        {
                          className: (0, y.FH)(
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
                      n.dL,
                      { translation: { z: -1e-5 } },
                      d.createElement(
                        n.Zk,
                        {
                          curvature_origin_id:
                            null !== (o = this.props.curvatureOriginId) &&
                            void 0 !== o
                              ? o
                              : null,
                          origin: n.Oi.TopCenter,
                          interactive: !1,
                          scrollable: !1,
                          meters_per_pixel: 2 * g.iZ,
                          reflect: 0.005,
                          sampler: n._h.SingleTap,
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
      (0, i.Cg)([s.o], T.prototype, "onResizeObserved", null),
        (0, i.Cg)([s.o], T.prototype, "updateBackgroundSize", null),
        (0, i.Cg)([s.o], T.prototype, "onPortalDidMount", null);
      let B = class extends d.Component {
        constructor(e) {
          super(e), (this.state = { bSliding: !1, bHover: !1 });
        }
        onMouseEnter(e) {
          var t, o;
          this.setState({ bHover: !0 }),
            null === (o = (t = this.props).onMouseEnter) ||
              void 0 === o ||
              o.call(t, e);
        }
        onMouseLeave(e) {
          var t, o;
          this.setState({ bHover: !1 }),
            null === (o = (t = this.props).onMouseLeave) ||
              void 0 === o ||
              o.call(t, e);
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
              d.createElement(L, {
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
      (0, i.Cg)([s.o], B.prototype, "onMouseEnter", null),
        (0, i.Cg)([s.o], B.prototype, "onMouseLeave", null),
        (0, i.Cg)([s.o], B.prototype, "onInteractionStart", null),
        (0, i.Cg)([s.o], B.prototype, "onInteractionEnd", null),
        (B = (0, i.Cg)([l.PA], B));
      let z = class extends d.Component {
        constructor(e) {
          super(e), (this.m_refTooltip = d.createRef());
        }
        onMouseEnter(e) {
          var t, o, r;
          null === (t = this.m_refTooltip.current) || void 0 === t || t.show(),
            null === (r = (o = this.props).onMouseEnter) ||
              void 0 === r ||
              r.call(o, e);
        }
        onMouseLeave(e) {
          var t, o, r;
          null === (t = this.m_refTooltip.current) || void 0 === t || t.hide(),
            null === (r = (o = this.props).onMouseLeave) ||
              void 0 === r ||
              r.call(o, e);
        }
        render() {
          return d.createElement(
            p.$,
            Object.assign({}, this.props, {
              className: (0, y.FH)(
                "ButtonControl",
                "Round",
                this.props.className,
              ),
              onMouseEnter: this.onMouseEnter,
              onMouseLeave: this.onMouseLeave,
            }),
            this.props.title &&
              d.createElement(L, {
                text: this.props.title,
                ref: this.m_refTooltip,
              }),
            this.props.children,
          );
        }
      };
      (0, i.Cg)([s.o], z.prototype, "onMouseEnter", null),
        (0, i.Cg)([s.o], z.prototype, "onMouseLeave", null),
        (z = (0, i.Cg)([l.PA], z));
      let P = (r = class extends d.Component {
        constructor() {
          super(...arguments), (this.m_vecOriginalMousePosition = null);
        }
        componentWillUnmount() {
          this.stopSliding();
        }
        get slider() {
          var e;
          return null === (e = this.props.refVolumeTray.current) || void 0 === e
            ? void 0
            : e.slider;
        }
        onButtonMouseDown(e) {
          var t, o;
          (this.m_vecOriginalMousePosition = { x: e.clientX, y: e.clientY }),
            window.document.addEventListener("mouseup", this.onWindowMouseUp),
            window.document.addEventListener(
              "mousemove",
              this.onWindowMouseMove,
            ),
            null === (o = (t = this.props).onShowTray) ||
              void 0 === o ||
              o.call(t);
        }
        onWindowMouseMove(e) {
          if (!this.slider || this.slider.isSliding) return;
          const t = { x: e.clientX, y: e.clientY };
          (0, n.NH)((0, n.QB)(t, this.m_vecOriginalMousePosition)) >
            r.MIN_DRAG_THRESHOLD && this.startSliding(t);
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
          var e, t, o, r;
          window.document.removeEventListener("mouseup", this.onWindowMouseUp),
            window.document.removeEventListener(
              "mousemove",
              this.onWindowMouseMove,
            ),
            (null === (e = this.slider) || void 0 === e
              ? void 0
              : e.isSliding) &&
              (null === (o = (t = this.props).onHideTray) ||
                void 0 === o ||
                o.call(t)),
            null === (r = this.slider) ||
              void 0 === r ||
              r.stopExternalSliding();
        }
        render() {
          return d.createElement(O, {
            imageUrl: b.f.Instance.muted
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
      (P.MIN_DRAG_THRESHOLD = 35),
        (0, i.Cg)([s.o], P.prototype, "onButtonMouseDown", null),
        (0, i.Cg)([s.o], P.prototype, "onWindowMouseMove", null),
        (0, i.Cg)([s.o], P.prototype, "onWindowMouseUp", null),
        (P = r = (0, i.Cg)([l.PA], P));
      const U = (e) => {
          var t;
          const o = d.useRef(void 0),
            r = d.useRef(void 0),
            i = e.active;
          return (
            d.useEffect(() => {
              var e, t;
              null ===
                (t =
                  null === (e = r.current) || void 0 === e ? void 0 : e.elem) ||
                void 0 === t ||
                t.scrollIntoView({ behavior: "smooth", inline: "nearest" });
            }, [i]),
            d.createElement(
              p.$,
              {
                className: (0, y.FH)(
                  "ButtonControl",
                  ["Active", i],
                  ["WithIcon", !!e.iconUrl || !!e.icon],
                  e.additionalClassNames,
                ),
                onClick: e.onClick,
                onMouseDown: e.onMouseDown,
                onMouseUp: e.onMouseUp,
                onMouseEnter: () => {
                  var t;
                  null === (t = o.current) || void 0 === t || t.show(),
                    e.onMouseEnter && e.onMouseEnter();
                },
                onMouseLeave: () => {
                  var t;
                  null === (t = o.current) || void 0 === t || t.hide(),
                    e.onMouseLeave && e.onMouseLeave();
                },
                enabled: e.enabled,
                ref: r,
              },
              e.title &&
                d.createElement(L, {
                  text: e.title,
                  translation: e.tooltipTranslation,
                  ref: o,
                }),
              e.label && d.createElement("span", null, e.label),
              e.iconUrl &&
                d.createElement("img", {
                  className: (0, M.A)(
                    "Icon",
                    (null === (t = e.iconIsInverted) || void 0 === t || t) &&
                      "BlackToWhite",
                  ),
                  src: e.iconUrl,
                }),
              !e.iconUrl && e.icon,
            )
          );
        },
        G = (0, l.PA)(function (e) {
          var t;
          const o =
              E.SW.m_bKeyboardVisible &&
              E.SW.m_sKeyboardOverlayKey == e.overlayKey,
            r =
              null === (t = e.showTooltip) || void 0 === t || t
                ? o
                  ? (0, _.we)("#HideKeyboardTooltip")
                  : (0, _.we)("#ShowKeyboardTooltip")
                : void 0;
          return d.createElement(
            U,
            Object.assign(
              {
                key: o ? "hidebtn" : "showbtn",
                iconUrl: "/dashboard/images/icons/svr_keyboard.svg",
                title: r,
                additionalClassNames: (0, y.FH)(
                  "Keyboard",
                  e.additionalClassNames,
                ),
                onClick: () => {
                  if (o) VRHTML.VROverlay.HideKeyboard();
                  else {
                    let t =
                      n.QR.Minimal | n.QR.HideDoneKey | n.QR.ShowArrowKeys;
                    e.modal && (t |= n.QR.Modal);
                    try {
                      VRHTML.VROverlay.ShowKeyboardForOverlay(
                        e.overlayKey,
                        n.Xl.Normal,
                        n.b.SingleLine,
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
                    } catch (e) {
                      console.error(e);
                    }
                  }
                },
                active: o,
              },
              e,
            ),
          );
        });
    },
    2156: (e, t, o) => {
      "use strict";
      o.d(t, { O: () => h });
      var r = o(1635),
        i = o(6090),
        n = o(6540),
        s = o(9978),
        a = o(1370),
        l = o(1835),
        d = o(3606),
        p = o(3246);
      function u(e) {
        const { children: t, invertParentPanelPitch: o, pitch: r } = e;
        return o || 0 != r
          ? n.createElement(
              i.dL,
              {
                invert_parent_panel_pitch: null != o && o,
                curvature_pitch: null != r ? r : 0,
              },
              t,
            )
          : n.createElement(n.Fragment, null, t);
      }
      function c(e) {
        let { children: t, offsetPixels: o, offsetMeters: r } = e;
        (o = null != o ? o : { x: 0, y: 0, z: 0 }),
          (r = null != r ? r : { x: 0, y: 0, z: 0 });
        const s = (0, i.CU)(
          r,
          (0, i.tx)(o, l.SW.m_fVRGamepadUI_MetersPerPixel),
        );
        return 0 != s.x || 0 != s.y || 0 != s.z
          ? n.createElement(i.dL, { translation: s }, t)
          : n.createElement(n.Fragment, null, t);
      }
      function m(e) {
        const { children: t, rotation: o } = e;
        return null != o && (0 != o.x || 0 != o.y || 0 != o.z)
          ? n.createElement(i.dL, { rotation: o }, t)
          : n.createElement(n.Fragment, null, t);
      }
      function v(e) {
        return 1 == (null == e ? void 0 : e.parent_enum) ? 0 : d.gS;
      }
      function h(e) {
        var t,
          o,
          a,
          d,
          p,
          h,
          g,
          _,
          C,
          y,
          b,
          f,
          S,
          w,
          M,
          E,
          x,
          I,
          F,
          N,
          L,
          V,
          H,
          R,
          D,
          O,
          k,
          T,
          B,
          z,
          P,
          U,
          G,
          W,
          A,
          Z,
          K;
        const { popupRequest: j, children: J } = e,
          q = (0, r.Tt)(e, ["popupRequest", "children"]),
          Y = {
            x:
              null !==
                (o =
                  null === (t = null == j ? void 0 : j.origin_on_parent) ||
                  void 0 === t
                    ? void 0
                    : t.x) && void 0 !== o
                ? o
                : 0,
            y:
              null !==
                (d =
                  null === (a = null == j ? void 0 : j.origin_on_parent) ||
                  void 0 === a
                    ? void 0
                    : a.y) && void 0 !== d
                ? d
                : 0,
          },
          Q = {
            x:
              null !==
                (h =
                  null === (p = null == j ? void 0 : j.origin_on_popup) ||
                  void 0 === p
                    ? void 0
                    : p.x) && void 0 !== h
                ? h
                : 0,
            y:
              null !==
                (_ =
                  null === (g = null == j ? void 0 : j.origin_on_popup) ||
                  void 0 === g
                    ? void 0
                    : g.y) && void 0 !== _
                ? _
                : 0,
          },
          X = {
            u:
              null !==
                (y =
                  null === (C = null == j ? void 0 : j.clip_rect) ||
                  void 0 === C
                    ? void 0
                    : C.u_min) && void 0 !== y
                ? y
                : 0,
            v:
              null !==
                (f =
                  null === (b = null == j ? void 0 : j.clip_rect) ||
                  void 0 === b
                    ? void 0
                    : b.v_min) && void 0 !== f
                ? f
                : 0,
          },
          $ = {
            u:
              null !==
                (w =
                  null === (S = null == j ? void 0 : j.clip_rect) ||
                  void 0 === S
                    ? void 0
                    : S.u_max) && void 0 !== w
                ? w
                : 1,
            v:
              null !==
                (E =
                  null === (M = null == j ? void 0 : j.clip_rect) ||
                  void 0 === M
                    ? void 0
                    : M.v_max) && void 0 !== E
                ? E
                : 1,
          },
          ee = {
            x:
              null !==
                (I =
                  null === (x = null == j ? void 0 : j.offset) || void 0 === x
                    ? void 0
                    : x.x_pixels) && void 0 !== I
                ? I
                : 0,
            y:
              null !==
                (N =
                  null === (F = null == j ? void 0 : j.offset) || void 0 === F
                    ? void 0
                    : F.y_pixels) && void 0 !== N
                ? N
                : 0,
            z:
              null !==
                (V =
                  null === (L = null == j ? void 0 : j.offset) || void 0 === L
                    ? void 0
                    : L.z_pixels) && void 0 !== V
                ? V
                : 0,
          },
          te = {
            x:
              null !==
                (R =
                  null === (H = null == j ? void 0 : j.offset) || void 0 === H
                    ? void 0
                    : H.x_meters) && void 0 !== R
                ? R
                : 0,
            y:
              null !==
                (O =
                  null === (D = null == j ? void 0 : j.offset) || void 0 === D
                    ? void 0
                    : D.y_meters) && void 0 !== O
                ? O
                : 0,
            z:
              null !==
                (T =
                  null === (k = null == j ? void 0 : j.offset) || void 0 === k
                    ? void 0
                    : k.z_meters) && void 0 !== T
                ? T
                : 0,
          },
          oe = {
            x:
              null !==
                (z =
                  null === (B = null == j ? void 0 : j.rotation) || void 0 === B
                    ? void 0
                    : B.pitch_degrees) && void 0 !== z
                ? z
                : 0,
            y:
              null !==
                (U =
                  null === (P = null == j ? void 0 : j.rotation) || void 0 === P
                    ? void 0
                    : P.yaw_degrees) && void 0 !== U
                ? U
                : 0,
          },
          re =
            null === (G = null == j ? void 0 : j.inherit_parent_pitch) ||
            void 0 === G ||
            G,
          ie =
            null === (W = null == j ? void 0 : j.inherit_parent_curvature) ||
            void 0 === W ||
            W,
          ne =
            null === (A = null == j ? void 0 : j.interactive) ||
            void 0 === A ||
            A,
          se =
            null !== (Z = null == j ? void 0 : j.requires_laser) &&
            void 0 !== Z &&
            Z,
          ae =
            1 ==
            (null !== (K = null == j ? void 0 : j.sort_order) && void 0 !== K
              ? K
              : 0)
              ? 101
              : null,
          le = (function (e) {
            var t, o, r;
            const i =
                null !== (t = null == e ? void 0 : e.parent_overlay_key) &&
                void 0 !== t
                  ? t
                  : "",
              n =
                null !==
                  (r =
                    null === (o = null == e ? void 0 : e.offset) || void 0 === o
                      ? void 0
                      : o.z_pixels) && void 0 !== r
                  ? r
                  : 0;
            return i == (0, s.useObserver)(() => l.SW.dashboardBarOverlayKey) &&
              n >= 0
              ? -0.5
              : 0;
          })(j);
        n.useLayoutEffect(
          () => i.O5.Current().forceLayoutUpdate(),
          [X.u, X.v, $.u, $.v],
        );
        const de = n.createElement(
          u,
          { invertParentPanelPitch: !re },
          n.createElement(
            c,
            { offsetPixels: ee, offsetMeters: te },
            n.createElement(
              m,
              { rotation: oe },
              n.createElement(
                i.Zk,
                Object.assign(
                  {
                    debug_name: `VRGamepadUI-PooledPopup-${null == j ? void 0 : j.dashboard_popup_id}`,
                    interactive: ne,
                    requires_laser: se,
                    curvature: ie ? "inherit-from-parent-panel" : void 0,
                    overlay_key: null == j ? void 0 : j.popup_overlay_key,
                    origin: Q,
                    meters_per_pixel: l.SW.m_fVRGamepadUI_MetersPerPixel,
                    reflect: v(j),
                    sort_depth_bias: le,
                    uv_min: X,
                    uv_max: $,
                    sort_order: ae,
                  },
                  q,
                ),
                J,
              ),
            ),
          ),
        );
        return (null == j ? void 0 : j.parent_overlay_key)
          ? n.createElement(
              i.b$,
              { parent_overlay_key: null == j ? void 0 : j.parent_overlay_key },
              n.createElement(
                i.Ci,
                { key: j.dashboard_popup_id, location: Y },
                de,
              ),
            )
          : 1 == (null == j ? void 0 : j.parent_enum)
            ? n.createElement(
                i.dL,
                {
                  parent_path: "/user/head",
                  translation: { y: -0.4, z: -0.8 },
                  scale: { x: 0.4, y: 0.4, z: 0.4 },
                  rotation: { x: -20 },
                },
                de,
              )
            : (null == j ? void 0 : j.parent_device_path)
              ? n.createElement(
                  i.dL,
                  { parent_path: null == j ? void 0 : j.parent_device_path },
                  de,
                )
              : de;
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
    9471: (e, t, o) => {
      "use strict";
      o.d(t, {
        Pq: () => a,
        Xj: () => l,
        FG: () => n,
        YN: () => s,
        fr: () => d,
      });
      var r = o(1635),
        i = o(6540);
      o(108);
      function n(e) {
        return i.createElement(
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
          i.createElement(
            "g",
            null,
            i.createElement("path", {
              d: "M93.8,50v28.1c0,8.6-7,15.6-15.6,15.6H21.9c-8.6,0-15.6-7-15.6-15.6V21.9c0-8.6,7-15.6,15.6-15.6H50c1.7,0,3.1,1.4,3.1,3.1\n\t\t\t\ts-1.4,3.1-3.1,3.1H21.9c-5.2,0-9.4,4.2-9.4,9.4v56.3c0,5.2,4.2,9.4,9.4,9.4h56.3c5.2,0,9.4-4.2,9.4-9.4V50c0-1.7,1.4-3.1,3.1-3.1\n\t\t\t\tS93.8,48.3,93.8,50z M68.8,12.5h14.3L47.8,47.8c-1.2,1.2-1.2,3.2,0,4.4c0,0,0,0,0,0c1.2,1.2,3.2,1.2,4.4,0c0,0,0,0,0,0l35.3-35.3\n\t\t\t\tv14.3c0,1.7,1.4,3.1,3.1,3.1l0,0c1.7,0,3.1-1.4,3.1-3.1V9.4c0-0.8-0.3-1.6-0.9-2.2c-0.6-0.6-1.4-0.9-2.2-0.9H68.8\n\t\t\t\tc-1.7,0-3.1,1.4-3.1,3.1S67,12.5,68.8,12.5z",
            }),
          ),
        );
      }
      function s(e) {
        return i.createElement(
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
          i.createElement("path", {
            d: "M0 0v8h8v-2h-1v1h-6v-6h1v-1h-2zm4 0l1.5 1.5-2.5 2.5 1 1 2.5-2.5 1.5 1.5v-4h-4z",
          }),
        );
      }
      function a(e) {
        const { none: t, partial: o, right: n, left: s } = e,
          a = (0, r.Tt)(e, ["none", "partial", "right", "left"]);
        return t
          ? i.createElement(
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
              i.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M33.5871 3.5268L31.4417 1.38135L26.6841 6.13886C24.4873 5.49306 21.6236 5 18 5C7.5 5 3.38 9.14 3.38 9.14C3.38 9.14 0 20.56 0 25.2C0 27.1825 1.62275 28.7886 3.01931 29.8037L0.370949 32.452L2.5164 34.5975L33.5871 3.5268ZM23.2678 19.2678C23.0842 19.4513 22.8735 19.6049 22.6433 19.7232L17.3666 25H25L31 31C31 31 36 28.68 36 25.2C36 21.1218 33.3889 11.806 32.7566 9.60992L29.8137 12.5529C29.9361 12.852 30 13.1736 30 13.5C30 14.163 29.7366 14.7989 29.2678 15.2678C28.7989 15.7366 28.163 16 27.5 16C27.1736 16 26.852 15.9361 26.5529 15.8137L23.7232 18.6433C23.6049 18.8735 23.4513 19.0842 23.2678 19.2678ZM15 17H12V20H9V17H6V14H9V11H12V14H15V17Z",
              }),
            )
          : o || n
            ? i.createElement(
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
                i.createElement("path", {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M32.62 9.14C32.62 9.14 28.5 5 18 5V25H25L31 31C31 31 36 28.68 36 25.2C36 20.56 32.62 9.14 32.62 9.14ZM21.5 20C21.0055 20 20.5222 19.8534 20.1111 19.5787C19.7 19.304 19.3795 18.9135 19.1903 18.4567C19.0011 17.9999 18.9516 17.4972 19.048 17.0123C19.1445 16.5273 19.3826 16.0819 19.7322 15.7322C20.0819 15.3826 20.5273 15.1445 21.0123 15.048C21.4972 14.9516 21.9999 15.0011 22.4567 15.1903C22.9135 15.3795 23.304 15.7 23.5787 16.1111C23.8534 16.5222 24 17.0055 24 17.5C24 17.8283 23.9353 18.1534 23.8097 18.4567C23.6841 18.76 23.4999 19.0356 23.2678 19.2678C23.0356 19.4999 22.76 19.6841 22.4567 19.8097C22.1534 19.9353 21.8283 20 21.5 20ZM27.5 16C27.0055 16 26.5222 15.8534 26.1111 15.5787C25.7 15.304 25.3795 14.9135 25.1903 14.4567C25.0011 13.9999 24.9516 13.4972 25.048 13.0123C25.1445 12.5273 25.3826 12.0819 25.7322 11.7322C26.0819 11.3826 26.5273 11.1445 27.0123 11.048C27.4972 10.9516 27.9999 11.0011 28.4567 11.1903C28.9135 11.3795 29.304 11.7 29.5787 12.1111C29.8534 12.5222 30 13.0055 30 13.5C30 14.163 29.7366 14.7989 29.2678 15.2678C28.7989 15.7366 28.163 16 27.5 16Z",
                }),
                i.createElement("path", {
                  fill: "currentColor",
                  opacity: "0.5",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M3.38 9.14C3.38 9.14 0 20.56 0 25.2C0 28.68 5 31 5 31L11 25H18V5C7.5 5 3.38 9.14 3.38 9.14ZM15 17H12V20H9V17H6V14H9V11H12V14H15V17Z",
                }),
              )
            : s
              ? i.createElement(
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
                  i.createElement("path", {
                    fill: "currentColor",
                    opacity: "0.5",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M32.62 9.14C32.62 9.14 28.5 5 18 5V25H25L31 31C31 31 36 28.68 36 25.2C36 20.56 32.62 9.14 32.62 9.14ZM21.5 20C21.0055 20 20.5222 19.8534 20.1111 19.5787C19.7 19.304 19.3795 18.9135 19.1903 18.4567C19.0011 17.9999 18.9516 17.4972 19.048 17.0123C19.1445 16.5273 19.3826 16.0819 19.7322 15.7322C20.0819 15.3826 20.5273 15.1445 21.0123 15.048C21.4972 14.9516 21.9999 15.0011 22.4567 15.1903C22.9135 15.3795 23.304 15.7 23.5787 16.1111C23.8534 16.5222 24 17.0055 24 17.5C24 17.8283 23.9353 18.1534 23.8097 18.4567C23.6841 18.76 23.4999 19.0356 23.2678 19.2678C23.0356 19.4999 22.76 19.6841 22.4567 19.8097C22.1534 19.9353 21.8283 20 21.5 20ZM27.5 16C27.0055 16 26.5222 15.8534 26.1111 15.5787C25.7 15.304 25.3795 14.9135 25.1903 14.4567C25.0011 13.9999 24.9516 13.4972 25.048 13.0123C25.1445 12.5273 25.3826 12.0819 25.7322 11.7322C26.0819 11.3826 26.5273 11.1445 27.0123 11.048C27.4972 10.9516 27.9999 11.0011 28.4567 11.1903C28.9135 11.3795 29.304 11.7 29.5787 12.1111C29.8534 12.5222 30 13.0055 30 13.5C30 14.163 29.7366 14.7989 29.2678 15.2678C28.7989 15.7366 28.163 16 27.5 16Z",
                  }),
                  i.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3.38 9.14C3.38 9.14 0 20.56 0 25.2C0 28.68 5 31 5 31L11 25H18V5C7.5 5 3.38 9.14 3.38 9.14ZM15 17H12V20H9V17H6V14H9V11H12V14H15V17Z",
                  }),
                )
              : i.createElement(
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
                  i.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M32.62 9.14C32.62 9.14 28.5 5 18 5C7.5 5 3.38 9.14 3.38 9.14C3.38 9.14 0 20.56 0 25.2C0 28.68 5 31 5 31L11 25H25L31 31C31 31 36 28.68 36 25.2C36 20.56 32.62 9.14 32.62 9.14ZM15 17H12V20H9V17H6V14H9V11H12V14H15V17ZM21.5 20C21.0055 20 20.5222 19.8534 20.1111 19.5787C19.7 19.304 19.3795 18.9135 19.1903 18.4567C19.0011 17.9999 18.9516 17.4972 19.048 17.0123C19.1445 16.5273 19.3826 16.0819 19.7322 15.7322C20.0819 15.3826 20.5273 15.1445 21.0123 15.048C21.4972 14.9516 21.9999 15.0011 22.4567 15.1903C22.9135 15.3795 23.304 15.7 23.5787 16.1111C23.8534 16.5222 24 17.0055 24 17.5C24 17.8283 23.9353 18.1534 23.8097 18.4567C23.6841 18.76 23.4999 19.0356 23.2678 19.2678C23.0356 19.4999 22.76 19.6841 22.4567 19.8097C22.1534 19.9353 21.8283 20 21.5 20ZM27.5 16C27.0055 16 26.5222 15.8534 26.1111 15.5787C25.7 15.304 25.3795 14.9135 25.1903 14.4567C25.0011 13.9999 24.9516 13.4972 25.048 13.0123C25.1445 12.5273 25.3826 12.0819 25.7322 11.7322C26.0819 11.3826 26.5273 11.1445 27.0123 11.048C27.4972 10.9516 27.9999 11.0011 28.4567 11.1903C28.9135 11.3795 29.304 11.7 29.5787 12.1111C29.8534 12.5222 30 13.0055 30 13.5C30 14.163 29.7366 14.7989 29.2678 15.2678C28.7989 15.7366 28.163 16 27.5 16Z",
                  }),
                );
      }
      function l(e) {
        return i.createElement(
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
          i.createElement("path", {
            d: "M32 27V32H4V27H32ZM29 10.77L25.48 7.22998L18 14.72L10.5 7.22998L7 10.77L18 21.77L29 10.77Z",
            fill: "currentColor",
          }),
        );
      }
      function d(e) {
        return i.createElement(
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
          i.createElement("path", {
            fill: "currentColor",
            d: "M18 1C8.4375 1 1 3 1 3V23C1 23 5.70777 21.734 12.448 21.2165L18.0004 15.6641L23.5529 21.2166C30.2926 21.7342 35 23 35 23V3C35 3 27.5625 1 18 1Z",
          }),
          i.createElement("path", {
            fill: "currentColor",
            d: "M8 31.3209L11.2 34.5391L18 27.73L24.8182 34.5391L28 31.3209L18 21.3209L8 31.3209Z",
          }),
        );
      }
    },
    1909: (e, t, o) => {
      "use strict";
      o.d(t, { p: () => d });
      var r = o(1635),
        i = o(6090),
        n = o(4074),
        s = o(1526),
        a = o(4999);
      const l = new (class {
        constructor() {
          (this.m_SteamVR_Provider = new n.tC(this, a.f5)),
            (this.m_Steam_Client = new n.$k(this)),
            (this.m_Steam_ClientMethods = new a.oT(this.m_Steam_Client)),
            (this.m_mailbox = new i._n()),
            (this.m_unNextVRGamepadUIMessageId = 1);
        }
        get Steam() {
          return this.m_Steam_ClientMethods;
        }
        get SteamVR() {
          return this.m_SteamVR_Provider;
        }
        Init() {
          return (0, r.sH)(this, void 0, void 0, function* () {
            yield this.m_mailbox.Init("vrgamepadui_messages"),
              this.m_mailbox.RegisterHandler("vrgamepadui_message", (e) => {
                const t = (0, n.D7)(e.header);
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
          let o, r;
          try {
            o = s.DX.fromObject(e).serializeBase64String();
          } catch (e) {
            return n.Y7.HeaderSerializationFailure;
          }
          try {
            r = t.serializeBase64String();
          } catch (e) {
            return n.Y7.PayloadSerializationFailure;
          }
          try {
            this.m_mailbox
              .WaitForConnect()
              .then(() => {
                this.m_mailbox.SendMessage("web_steam_mailbox", {
                  type: "vrgamepadui_message",
                  header: o,
                  payload: r,
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
          return !0;
        }
      })();
      window.VRGamepadUIMessages = l;
      const d = l;
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_hotfix_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/chunk~2e670652e.js.map
