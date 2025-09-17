var CLSTAMP = "10075201";
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
        n = o(1635),
        i = o(3496),
        s = o(3236);
      !(function (e) {
        (e[(e.Disabled = 0)] = "Disabled"),
          (e[(e.WorldZeroY = 1)] = "WorldZeroY"),
          (e[(e.WorldDynamicFloor = 2)] = "WorldDynamicFloor");
      })(r || (r = {}));
      class a extends i._J {
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
      (0, n.Cg)([s.o], a.prototype, "buildNode", null);
    },
    4120: (e, t, o) => {
      "use strict";
      var r,
        n = o(1635),
        i = o(3496),
        s = o(3236);
      !(function (e) {
        (e[(e.RoomSetupFloor = 1)] = "RoomSetupFloor"),
          (e[(e.Locomotion = 2)] = "Locomotion"),
          (e[(e.QuickRecenter = 4)] = "QuickRecenter");
      })(r || (r = {}));
      class a extends i._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "constructglobals";
        }
        buildNode(e, t) {
          const o = this.createSgNode(t);
          return (
            (o.properties["scene-color-mult"] = (0, i.kJ)(
              this.props["scene-color-mult"],
            )),
            (o.properties["floor-color-mult"] = (0, i.kJ)(
              this.props["floor-color-mult"],
            )),
            (o.properties["scene-reflection-mult"] = (0, i.kJ)(
              this.props["scene-reflection-mult"],
            )),
            (o.properties["skydome-mult"] = (0, i.kJ)(
              this.props["skydome-mult"],
            )),
            (o.properties["roomview-mult"] = (0, i.UM)(
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
      (0, n.Cg)([s.o], a.prototype, "buildNode", null);
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
        n = o(1635),
        i = o(3496),
        s = o(3236);
      class a extends i._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "playspace-floorheight-adjust";
        }
        buildNode(e, t) {
          var o, r, n, i, s, a, l, d, u, p, c, m, h;
          const v = this.createSgNode(t);
          return (
            (v.properties["target-id"] = this.props.target_id),
            (v.properties["head-interaction-radius"] =
              null === (o = this.props) || void 0 === o
                ? void 0
                : o.head_interaction_radius),
            (v.properties["inactive-alpha-scale"] =
              null === (r = this.props) || void 0 === r
                ? void 0
                : r.inactive_alpha_scale),
            (v.properties["axis-radius"] =
              null === (n = this.props) || void 0 === n
                ? void 0
                : n.axis_radius),
            (v.properties["axis-color-hsv"] =
              null === (i = this.props) || void 0 === i
                ? void 0
                : i.axis_color_hsv),
            (v.properties["dot-radius"] =
              null === (s = this.props) || void 0 === s
                ? void 0
                : s.dot_radius),
            (v.properties["dot-color-hsv"] =
              null === (a = this.props) || void 0 === a
                ? void 0
                : a.dot_color_hsv),
            (v.properties["dot-inner-alpha"] =
              null === (l = this.props) || void 0 === l
                ? void 0
                : l.dot_inner_alpha),
            (v.properties["dot-outer-alpha"] =
              null === (d = this.props) || void 0 === d
                ? void 0
                : d.dot_outer_alpha),
            (v.properties["rings-radius"] =
              null === (u = this.props) || void 0 === u
                ? void 0
                : u.rings_radius),
            (v.properties["rings-color-hsv"] =
              null === (p = this.props) || void 0 === p
                ? void 0
                : p.rings_color_hsv),
            (v.properties["rings-hue-amplitude"] =
              null === (c = this.props) || void 0 === c
                ? void 0
                : c.rings_hue_amplitude),
            (v.properties["rings-hue-speed"] =
              null === (m = this.props) || void 0 === m
                ? void 0
                : m.rings_hue_speed),
            (v.properties["rings-half-width"] =
              null === (h = this.props) || void 0 === h
                ? void 0
                : h.rings_half_width),
            [e, v]
          );
        }
      }
      (0, n.Cg)([s.o], a.prototype, "buildNode", null),
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Circle = 1)] = "Circle"),
            (e[(e.Drawn = 2)] = "Drawn");
        })(r || (r = {}));
      class l extends i._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "playspace-draw-interaction";
        }
        buildNode(e, t) {
          var o, r;
          const n = this.createSgNode(t);
          return (
            (n.properties["target-id"] = this.props.target_id),
            (n.properties["radius-range"] =
              null === (o = this.props) || void 0 === o
                ? void 0
                : o.radius_range),
            (n.properties["center-selection-radius"] =
              null === (r = this.props) || void 0 === r
                ? void 0
                : r.center_selection_radius),
            [e, n]
          );
        }
      }
      (0, n.Cg)([s.o], l.prototype, "buildNode", null);
      class d extends i._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "playspace-outline";
        }
        buildNode(e, t) {
          var o, r, n, i, s, a, l, d;
          const u = this.createSgNode(t);
          return (
            (u.properties["generic-geo"] =
              null === (o = this.props) || void 0 === o
                ? void 0
                : o["generic-geo"]),
            (u.properties["hue-amplitude"] =
              null === (r = this.props) || void 0 === r
                ? void 0
                : r["hue-amplitude"]),
            (u.properties["hue-speed"] =
              null === (n = this.props) || void 0 === n
                ? void 0
                : n["hue-speed"]),
            (u.properties["center-dot-radius"] =
              null === (i = this.props) || void 0 === i
                ? void 0
                : i["center-dot-radius"]),
            (u.properties["center-color-hsv"] =
              null === (s = this.props) || void 0 === s
                ? void 0
                : s["center-color-hsv"]),
            (u.properties["outline-color-hsv"] =
              null === (a = this.props) || void 0 === a
                ? void 0
                : a["outline-color-hsv"]),
            (u.properties["shadow-radius-delta"] =
              null === (l = this.props) || void 0 === l
                ? void 0
                : l["shadow-radius-delta"]),
            (u.properties["outline-shadow-alpha"] =
              null === (d = this.props) || void 0 === d
                ? void 0
                : d["outline-shadow-alpha"]),
            [e, u]
          );
        }
      }
      (0, n.Cg)([s.o], d.prototype, "buildNode", null);
      class u extends i._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "playspace-dots";
        }
        buildNode(e, t) {
          var o, r, n, i, s, a, l, d, u;
          const p = this.createSgNode(t);
          return (
            (p.properties["tile-size"] =
              null === (o = this.props) || void 0 === o
                ? void 0
                : o["tile-size"]),
            (p.properties["max-radius"] =
              null === (r = this.props) || void 0 === r
                ? void 0
                : r["max-radius"]),
            (p.properties["min-radius"] =
              null === (n = this.props) || void 0 === n
                ? void 0
                : n["min-radius"]),
            (p.properties["max-radius-fade"] =
              null === (i = this.props) || void 0 === i
                ? void 0
                : i["max-radius-fade"]),
            (p.properties["min-radius-fade"] =
              null === (s = this.props) || void 0 === s
                ? void 0
                : s["min-radius-fade"]),
            (p.properties["dot-half-size"] =
              null === (a = this.props) || void 0 === a
                ? void 0
                : a["dot-half-size"]),
            (p.properties["center-randomization"] =
              null === (l = this.props) || void 0 === l
                ? void 0
                : l["center-randomization"]),
            (p.properties["color-hsv"] =
              null === (d = this.props) || void 0 === d
                ? void 0
                : d["color-hsv"]),
            (p.properties["clip-to-playspace"] =
              null === (u = this.props) || void 0 === u
                ? void 0
                : u["clip-to-playspace"]),
            [e, p]
          );
        }
      }
      (0, n.Cg)([s.o], u.prototype, "buildNode", null);
    },
    9011: (e, t, o) => {
      "use strict";
      var r = o(1635),
        n = o(3496),
        i = o(3236);
      class s extends n._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "tilefloor";
        }
        buildNode(e, t) {
          var o, r, i, s, a, l, d;
          const u = this.createSgNode(t);
          if (
            ((u.properties["tile-size"] = this.props["tile-size"]),
            (u.properties["tile-gap"] = this.props["tile-gap"]),
            (u.properties["inner-radius"] = this.props["inner-radius"]),
            (u.properties["outer-radius"] = this.props["outer-radius"]),
            (u.properties["fade-distance"] =
              null === (o = this.props) || void 0 === o
                ? void 0
                : o["fade-distance"]),
            (u.properties["min-tile-scale-at-periphery"] =
              this.props["min-tile-scale-at-periphery"]),
            (u.properties.height = (0, n.kJ)(this.props.height)),
            (u.properties.offset = [
              null === (r = this.props.offset) || void 0 === r ? void 0 : r.x,
              null === (i = this.props.offset) || void 0 === i ? void 0 : i.y,
            ]),
            "string" == typeof this.props.color)
          )
            u.properties.color = this.props.color;
          else if (this.props.color) {
            let e = (0, n.RH)(this.props.color, { r: 0, g: 0, b: 0 });
            u.properties.color = [e.r, e.g, e.b];
          }
          return (
            (u.properties["center-randomization"] =
              null == this ? void 0 : this.props["center-randomization"]),
            this.props["luma-randomization"] &&
              ((u.properties["luma-randomization-min-gain"] =
                this.props["luma-randomization"]["min-gain"]),
              (u.properties["luma-randomization-max-gain"] =
                this.props["luma-randomization"]["max-gain"])),
            this.props["reflection-randomization"] &&
              ((u.properties["reflection-randomization-min-gain"] =
                this.props["reflection-randomization"]["min-gain"]),
              (u.properties["reflection-randomization-max-gain"] =
                this.props["reflection-randomization"]["max-gain"])),
            (u.properties["normal-randomization-degrees"] =
              null === (s = this.props) || void 0 === s
                ? void 0
                : s["normal-randomization-degrees"]),
            this.props.chevron &&
              ((u.properties["chevron-luma-scale"] =
                this.props.chevron["luma-scale"]),
              (u.properties["chevron-reflection-scale"] =
                this.props.chevron["reflection-scale"])),
            (u.properties["auto-subdivide"] =
              null === (a = this.props) || void 0 === a
                ? void 0
                : a["auto-subdivide"]),
            (u.properties["pedestal-height"] = (0, n.kJ)(
              this.props["pedestal-height"],
            )),
            (u.properties["pedestal-radius"] = (0, n.kJ)(
              this.props["pedestal-radius"],
            )),
            (u.properties["floor-aa-shader"] =
              null === (l = this.props) || void 0 === l
                ? void 0
                : l["floor-aa-shader"]),
            (u.properties["stable-fade"] =
              null === (d = this.props) || void 0 === d
                ? void 0
                : d["stable-fade"]),
            [e, u]
          );
        }
      }
      (0, r.Cg)([i.o], s.prototype, "buildNode", null);
    },
    111: (e, t, o) => {
      "use strict";
      o(6540);
      var r = o(3496);
      r._J;
    },
    6292: (e, t, o) => {
      "use strict";
      function r() {
        return {
          translation: { x: 0, y: 0, z: 0 },
          rotation: { w: 1, x: 0, y: 0, z: 0 },
          scale: { x: 1, y: 1, z: 1 },
        };
      }
      function n(e, t) {
        return { x: e.x + t.x, y: e.y + t.y, z: e.z + t.z };
      }
      function i(e, t, o) {
        return {
          x: t.x + e * (o.x - t.x),
          y: t.y + e * (o.y - t.y),
          z: t.z + e * (o.z - t.z),
        };
      }
      function s(e, t) {
        return { x: e.x - t.x, y: e.y - t.y };
      }
      function a(e, t) {
        return { x: e.x - t.x, y: e.y - t.y, z: e.z - t.z };
      }
      function l(e, t) {
        return { x: e.x * t, y: e.y * t };
      }
      function d(e, t) {
        return { x: e.x * t, y: e.y * t, z: e.z * t };
      }
      function u(e) {
        return Math.sqrt(e.x * e.x + e.y * e.y);
      }
      function p(e) {
        return Math.sqrt(e.x * e.x + e.y * e.y + e.z * e.z);
      }
      function c(e) {
        if (void 0 === e) return;
        let t = 0.5 * e.x,
          o = 0.5 * e.y,
          r = 0.5 * e.z,
          n = Math.cos(t),
          i = Math.cos(o),
          s = Math.cos(r),
          a = Math.sin(t),
          l = Math.sin(o),
          d = Math.sin(r);
        return {
          w: n * i * s + a * l * d,
          x: a * i * s + n * l * d,
          y: n * l * s - a * i * d,
          z: n * i * d - a * l * s,
        };
      }
      function m(e) {
        let t = e[0][0] + e[1][1] + e[2][2];
        if (t > 0) {
          let o = 2 * Math.sqrt(t + 1);
          return {
            w: 0.25 * o,
            x: (e[1][2] - e[2][1]) / o,
            y: (e[2][0] - e[0][2]) / o,
            z: (e[0][1] - e[1][0]) / o,
          };
        }
        if (e[0][0] > e[1][1] && e[0][0] > e[2][2]) {
          let t = 2 * Math.sqrt(1 + e[0][0] - e[1][1] - e[2][2]);
          return {
            w: (e[1][2] - e[2][1]) / t,
            x: 0.25 * t,
            y: (e[1][0] + e[0][1]) / t,
            z: (e[2][2] + e[0][2]) / t,
          };
        }
        if (e[1][1] > e[2][2]) {
          let t = 2 * Math.sqrt(1 + e[1][1] - e[0][0] - e[2][2]);
          return {
            w: (e[2][0] - e[0][2]) / t,
            x: (e[1][0] + e[0][1]) / t,
            y: 0.25 * t,
            z: (e[2][1] + e[1][2]) / t,
          };
        }
        {
          let t = 2 * Math.sqrt(1 + e[2][2] - e[0][0] - e[1][1]);
          return {
            w: (e[0][1] - e[1][0]) / t,
            x: (e[2][0] + e[0][2]) / t,
            y: (e[2][1] + e[1][2]) / t,
            z: 0.25 * t,
          };
        }
      }
      function h(e, t) {
        let o = 2 * (e.y * t.z - e.z * t.y),
          r = 2 * (e.z * t.x - e.x * t.z),
          n = 2 * (e.x * t.y - e.y * t.x);
        return {
          x: t.x + e.w * o + e.y * n - e.z * r,
          y: t.y + e.w * r + e.z * o - e.x * n,
          z: t.z + e.w * n + e.x * r - e.y * o,
        };
      }
      function v(e, t, o) {
        return [
          [e.x, e.y, e.z],
          [t.x, t.y, t.z],
          [o.x, o.y, o.z],
        ];
      }
      function g(e) {
        return h(e.rotation, { x: 0, y: 0, z: -1 });
      }
      function _(e) {
        let t = p(e);
        return { x: e.x / t, y: e.y / t, z: e.z / t };
      }
      function y(e, t) {
        return {
          x: e.y * t.z - e.z * t.y,
          y: e.z * t.x - e.x * t.z,
          z: e.x * t.y - e.y * t.x,
        };
      }
      function C(e) {
        const t = { x: 0, y: 1, z: 0 };
        let o = g(e);
        (o.y = 0), (o = _(o));
        const r = v(_(y(o, t)), t, { x: -(n = o).x, y: -n.y, z: -n.z });
        var n;
        return { translation: e.translation, rotation: m(r), scale: e.scale };
      }
      o.d(t, {
        CU: () => n,
        Fb: () => c,
        JZ: () => a,
        Ld: () => m,
        NH: () => u,
        O6: () => l,
        QB: () => s,
        Se: () => i,
        Uj: () => p,
        e_: () => _,
        oN: () => y,
        o_: () => g,
        p0: () => C,
        qF: () => v,
        tx: () => d,
        vx: () => r,
      });
    },
    3606: (e, t, o) => {
      "use strict";
      o.d(t, {
        $Z: () => ye,
        Bf: () => Y,
        Bn: () => N,
        Bz: () => g,
        C6: () => b,
        D1: () => re,
        Ec: () => Ce,
        El: () => _e,
        Eo: () => n,
        F2: () => q,
        Fl: () => me,
        GM: () => j,
        GO: () => _,
        Hh: () => ie,
        Ju: () => Q,
        Kh: () => d,
        MM: () => a,
        NX: () => k,
        Ni: () => A,
        P: () => z,
        Pi: () => be,
        Qv: () => w,
        R_: () => ge,
        So: () => x,
        Sp: () => H,
        Sx: () => u,
        Ul: () => m,
        Uv: () => y,
        Vv: () => oe,
        Vx: () => F,
        WS: () => Z,
        Wm: () => M,
        Wt: () => f,
        XO: () => J,
        Xk: () => c,
        Y: () => K,
        Zw: () => S,
        aD: () => W,
        au: () => pe,
        bl: () => E,
        cb: () => C,
        dw: () => p,
        gS: () => v,
        ge: () => L,
        i8: () => he,
        iZ: () => D,
        j5: () => U,
        kk: () => s,
        kx: () => B,
        l3: () => i,
        lP: () => ae,
        mB: () => h,
        md: () => $,
        nJ: () => ee,
        nY: () => T,
        np: () => r,
        qf: () => O,
        qt: () => ce,
        rG: () => le,
        tZ: () => fe,
        ui: () => ue,
        uv: () => V,
        v0: () => l,
        vo: () => X,
        w5: () => G,
        wi: () => I,
        wt: () => P,
        xP: () => de,
        xY: () => te,
        x_: () => ve,
        xz: () => ne,
        yl: () => se,
        zM: () => R,
      });
      const r = "openvr.tool.steamvr_environments",
        n = "system.generated.steam.exe",
        i = "vrlink.client",
        s = "steam.app.",
        a = s + "250820",
        l = s + "330050",
        d = "system.dashboard.",
        u = "system.dashboard.quicklaunch",
        p = "system.dashboard.nowplaying",
        c = "system.dashboard.desktop",
        m = 0.25,
        h = 2,
        v = 0.03,
        g = "current.scene.app.binding.list",
        _ = "system.desktop",
        y = "system.window",
        C = "system.standalone",
        b = "system.systemui",
        f = "system.settings",
        S = "system.keyboard",
        M = "system.vrwebhelper.controllerbinding",
        w = "system.messageoverlay",
        x = "valve.steam",
        E = "valve.steam.desktopgame",
        I = "valve.steam.gamepadui.main",
        F = "valve.steam.gamepadui.bar",
        T = "valve.steam.gamepadui.keyboard",
        N = "valve.steam.desktop",
        z = "steamlink_openvr-overlay",
        V = "DashboardCurvatureOrigin",
        L = b + "::" + V,
        D = 2.667 / 1694,
        H = "DashboardControlStripTransform",
        k = "DashboardGrabHandleTransform",
        R = "DashboardOverlayControlBarOrigin",
        B = "DashboardGrabHandleTransform_Legacy",
        O = "/settings/steamvr/enableHomeApp",
        P = "/settings/steamvr/supersampleManualOverride",
        G = "/settings/steamvr/supersampleScale",
        U = "/settings/GpuSpeed/gpuSpeedRenderTargetScale",
        A = "/settings/camera/roomViewStyle",
        W = "/settings/steamvr/backgroundCameraHeight",
        Z = "/settings/steamvr/backgroundDomeRadius",
        K = "/settings/steamvr/analogGain",
        j = "/settings/driver_lighthouse/indexHmdColumnCorrection",
        q = "/settings/steamvr/showAdvancedSettings",
        J = "/settings/dashboard/lastAccessedExternalOverlayKey",
        Y = "/settings/internal/dashboardInitialOverlay",
        $ = "/settings/dashboard/position_2",
        Q = "/settings/dashboard/theaterCurvature",
        X = "/settings/dashboard/theaterScreenSize",
        ee = "/settings/dashboard/unifiedDashboard",
        te = "/settings/dashboard/theaterScreenAlignment",
        oe = "/settings/collisionBounds/CollisionBoundsFadeDistance",
        re = "/settings/camera/roomView",
        ne = "/settings/camera/enableCamera",
        ie = "/settings/camera/enableConstructRoomView",
        se = "/settings/dashboard/enableWindowView",
        ae = "/settings/dashboard/maxInlineTabs",
        le = "/settings/steamvr/maxRecommendedResolution",
        de = "/settings/steamvr/disableKeyboardPrivacy",
        ue = "/settings/camera/lightSourceFrequency",
        pe = "/settings/steamvr/ipdHUD",
        ce = "/settings/dashboard/expectSteam",
        me = "/settings/dashboard/allowLegacyControlBar",
        he = "/settings/openxr/metaUnityPluginCompatibility",
        ve = "/settings/input/overlayFilteringEnabled",
        ge = "/settings/input/overlayFilteringMinCutoff",
        _e = "/settings/input/overlayFilteringBeta",
        ye = "/settings/input/overlayFilteringDerivCutoff",
        Ce = "/settings/input/overlayMagnetismEnabled",
        be = "/settings/input/overlayMagnetismLockDistance",
        fe = "/settings/input/overlayMagnetismDeadZone";
    },
    3481: (e, t, o) => {
      "use strict";
      o.d(t, { J: () => c });
      var r,
        n = o(1635),
        i = o(7813),
        s = o(3236),
        a = o(1835),
        l = o(1909),
        d = o(1295),
        u = o(3514);
      !(function (e) {
        (e[(e.Disconnected = 0)] = "Disconnected"),
          (e[(e.Pending = 1)] = "Pending"),
          (e[(e.Connected = 2)] = "Connected");
      })(r || (r = {}));
      class p {
        get canTryConnectingToSteam() {
          return a.SW.isVRGamepadUIReady && d.H.BHasMutualCapability(15);
        }
        get steamConnectionState() {
          return this.m_eSteamConnectionState;
        }
        get supportedFrameFeatures() {
          return this.steamConnectionState != r.Connected
            ? {}
            : { frameMenus: !0 };
        }
        constructor() {
          var e, t;
          (this.m_nNextFrameID = Number.parseInt(
            null !==
              (e = sessionStorage.getItem(p.k_strNextFrameIDStorageKey)) &&
              void 0 !== e
              ? e
              : "1",
          )),
            (this.m_mapLastSentFrameUpdate = new Map()),
            (this.m_mapLastSentFrameVisibility = new Map()),
            (this.m_mapFrames = new Map()),
            (this.m_eSteamConnectionState = r.Disconnected),
            (this.m_mapTabIDForTabMapping = new Map()),
            (this.m_mapTabMappingForTabID = new Map()),
            (this.m_unNextTabId = Number.parseInt(
              null !==
                (t = sessionStorage.getItem(p.k_strNextTabIDStorageKey)) &&
                void 0 !== t
                ? t
                : (2).toString(),
            )),
            (0, i.makeObservable)(this);
        }
        Init() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            (0, i.reaction)(
              () => this.canTryConnectingToSteam,
              (e) => {
                e && this.m_eSteamConnectionState == r.Disconnected
                  ? this.InitSteamConnection()
                  : e || (this.m_eSteamConnectionState = r.Disconnected);
              },
              { fireImmediately: !0 },
            ),
              (0, i.reaction)(
                () => this.frames.filter((e) => e.state == u.Iu.Destroyed),
                this.OnFramesDestroyed,
              ),
              (0, i.autorun)(this.SendUpdatesToSteam, { delay: 1e-4 });
          });
        }
        InitSteamConnection() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            (this.m_eSteamConnectionState = r.Pending),
              this.m_mapLastSentFrameUpdate.clear(),
              this.m_mapLastSentFrameVisibility.clear();
            try {
              yield l.p.Steam.InitFrameSystem({ destroy_all_frames: !1 });
              this.m_eSteamConnectionState = r.Connected;
            } catch (e) {
              console.error("CFrameStore failed to init Steam connection:", e),
                (this.m_eSteamConnectionState = r.Disconnected);
            }
          });
        }
        SendUpdatesToSteam() {
          var e;
          if (!this.supportedFrameFeatures.frameMenus) return;
          const t = this.frames.map((e) => e.protoForSteam).filter(Boolean),
            o = new Set(t.map((e) => e.frame_id)),
            r = t.filter(
              (e) => this.m_mapLastSentFrameUpdate.get(e.frame_id) !== e,
            ),
            n = Array.from(this.m_mapLastSentFrameUpdate.keys()).filter(
              (e) => !o.has(e),
            );
          for (const e of r) this.m_mapLastSentFrameUpdate.set(e.frame_id, e);
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
          const a = {
            updated_frames: r,
            deleted_frames: n,
            shown_frames: s
              .filter((e) => e.isCurrentlyVisible)
              .map((e) => e.frameID),
            hidden_frames: s
              .filter((e) => !e.isCurrentlyVisible)
              .map((e) => e.frameID),
          };
          l.p.Steam.UpdateFrameUIs(a).then(
            (0, i.action)((e) => {
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
          const e = new u.HC(this.m_nNextFrameID++);
          return (
            sessionStorage.setItem(
              p.k_strNextFrameIDStorageKey,
              this.m_nNextFrameID.toString(),
            ),
            this.m_mapFrames.set(e.frameID, e),
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
        HasFramesWithAssociatedSummonKeys(e) {
          return this.GetFramesWithAssociatedSummonKeys(e).length > 0;
        }
        GetTabIDForFrame(e) {
          return this.GetTabIdForTabMapping(`frame:${e.frameID}`);
        }
        GetTabIDForDesktop(e) {
          return this.GetTabIdForTabMapping(`desktop:${e}`);
        }
        GetTabIDForWindow(e) {
          return this.GetTabIdForTabMapping(`window:${e}`);
        }
        GetTabIdForTabMapping(e) {
          if (!this.m_mapTabIDForTabMapping.has(e)) {
            const t = this.m_unNextTabId;
            this.m_unNextTabId++,
              sessionStorage.setItem(
                p.k_strNextTabIDStorageKey,
                this.m_unNextTabId.toString(),
              ),
              this.m_mapTabIDForTabMapping.set(e, t),
              this.m_mapTabMappingForTabID.set(t, e);
          }
          return this.m_mapTabIDForTabMapping.get(e);
        }
        GetTabMappingForTabID(e) {
          const t = this.m_mapTabMappingForTabID.get(e);
          if (!t) return;
          const [o, r] = t.split(":"),
            n = Number.parseInt(r);
          switch (o) {
            case "frame":
              return { type: o, frame: this.GetFrame(n) };
            case "desktop":
              return { type: o, unDesktopID: n };
            case "window":
              return { type: o, unWindowID: n };
            default:
              return;
          }
        }
      }
      (p.k_strNextFrameIDStorageKey = "next_frame_id"),
        (p.k_strNextTabIDStorageKey = "next_tab_id"),
        (0, n.Cg)([i.observable], p.prototype, "m_mapFrames", void 0),
        (0, n.Cg)(
          [i.observable],
          p.prototype,
          "m_eSteamConnectionState",
          void 0,
        ),
        (0, n.Cg)([i.computed], p.prototype, "canTryConnectingToSteam", null),
        (0, n.Cg)([i.computed], p.prototype, "steamConnectionState", null),
        (0, n.Cg)([i.computed], p.prototype, "supportedFrameFeatures", null),
        (0, n.Cg)([i.action.bound], p.prototype, "InitSteamConnection", null),
        (0, n.Cg)([s.o], p.prototype, "SendUpdatesToSteam", null),
        (0, n.Cg)([i.action.bound], p.prototype, "OnFramesDestroyed", null),
        (0, n.Cg)([i.action], p.prototype, "CreateFrame", null),
        (0, n.Cg)([s.o], p.prototype, "GetFrame", null),
        (0, n.Cg)(
          [s.o],
          p.prototype,
          "GetFramesWithAssociatedSummonKeys",
          null,
        ),
        (0, n.Cg)(
          [s.o],
          p.prototype,
          "HasFramesWithAssociatedSummonKeys",
          null,
        );
      const c = new p();
      window.FrameStore = c;
    },
    2563: (e, t, o) => {
      "use strict";
      o.d(t, {
        DE: () => R,
        DN: () => B,
        Hz: () => T,
        L_: () => I,
        N2: () => U,
        OR: () => D,
        R0: () => L,
        Te: () => H,
        Tr: () => G,
        WO: () => k,
        gZ: () => V,
        oZ: () => A,
        vX: () => z,
      });
      var r,
        n = o(1635),
        i = o(6090),
        s = o(3236),
        a = o(7813),
        l = o(1370),
        d = o(6540),
        u = o(6138),
        p = o(6731),
        c = o(5615),
        m = o(917),
        h = o(4963),
        v = o(924),
        g = o(3606),
        _ = o(3714),
        y = o(6575),
        C = o(1139),
        b = o(3473),
        f = o(1333),
        S = o(5735),
        M = o.n(S),
        w = o(9283),
        x = o(1835),
        E = o(795);
      const I = (0, l.PA)(function (e) {
          return d.createElement(
            F,
            Object.assign({}, e, { VRGamepadUI: x.SW.isVRGamepadUI }),
          );
        }),
        F = (e) => {
          var t, o, r;
          const n = e.VRGamepadUI,
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
              i.dL,
              { translation: { z: 1e-5 } },
              d.createElement(
                i.Zk,
                {
                  id: "dashboard_widget_panel_id",
                  visibility: e.visible ? i.Fi.Visible : i.Fi.Hidden,
                  debug_name: e.debugName,
                  curvature_origin_id: m,
                  origin: i.Oi.BottomCenter,
                  interactive: !0,
                  scrollable: a,
                  meters_per_pixel: n ? void 0 : g.iZ,
                  reflect: n ? void 0 : 0.2 * l,
                  width: n ? 2.67 : void 0,
                },
                d.createElement(E.gU, null),
                d.createElement(
                  p.vw,
                  { ref: s },
                  d.createElement(
                    u.W,
                    null,
                    d.createElement(
                      c.M,
                      {
                        scrollDirection: a ? c.D.Vertical : c.D.None,
                        className: (0, C.FH)(
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
      function T(e) {
        return d.createElement(
          u.$,
          { className: "PowerMenuButton", onClick: e.onClick },
          d.createElement("div", { className: "HoverGradient" }),
          d.createElement("div", { className: "ClickGradient" }),
          d.createElement("span", null, e.label),
          e.lineBelow && d.createElement("div", { className: "LineBelow" }),
        );
      }
      let N = class extends d.Component {
        constructor(e) {
          super(e), (0, a.makeObservable)(this);
        }
        get isShowingTooltip() {
          return x.SW.s_ControlBarCurrentlyShownTooltip === this;
        }
        show() {
          x.SW.s_ControlBarCurrentlyShownTooltip = this;
        }
        hide() {
          this.isShowingTooltip &&
            (x.SW.s_ControlBarCurrentlyShownTooltip = null);
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
              y.l,
              { allowableParentSelectors: [".DashboardMain"] },
              d.createElement(
                i.dL,
                { translation: o },
                d.createElement(
                  i.Zk,
                  {
                    visibility: t ? i.Fi.Visible : i.Fi.SkipInSceneGraph,
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
      (0, n.Cg)([a.computed], N.prototype, "isShowingTooltip", null),
        (0, n.Cg)([a.action.bound], N.prototype, "show", null),
        (0, n.Cg)([a.action.bound], N.prototype, "hide", null),
        (N = (0, n.Cg)([l.PA], N));
      class z extends d.Component {
        static ShouldInvertThumbnail(e) {
          if (!e) return !1;
          if (((e = e.toLowerCase()), !z.s_mapShouldInvertThumbnail.has(e))) {
            let t = !1;
            e.endsWith(".svg") && (t = !0),
              e.startsWith("data:") &&
                z.k_rsThumbnailHashesToInvert.indexOf(M().hash(e)) >= 0 &&
                (t = !0),
              z.s_mapShouldInvertThumbnail.set(e, t);
          }
          return z.s_mapShouldInvertThumbnail.get(e);
        }
        render() {
          var e;
          const t = null !== (e = this.props.shadow) && void 0 !== e && e,
            o = z.ShouldInvertThumbnail(this.props.src);
          return d.createElement(
            "div",
            { className: "Icon" },
            t &&
              d.createElement("img", {
                className: "Shadow",
                src: this.props.src,
              }),
            d.createElement("img", {
              className: (0, C.FH)(["BlackToWhite", o]),
              src: this.props.src,
            }),
          );
        }
      }
      var V, L;
      (z.k_rsThumbnailHashesToInvert = [
        "5cbd0ebd6459cdaf75fdcafc5051f4e0",
        "c77452e60fc29227b33773ff6e74f8a1",
        "44b62220b39ba717fbfc65e3b4225491",
        "86bbab56235b55f6e5e7d288342931d7",
      ]),
        (z.s_mapShouldInvertThumbnail = new Map()),
        (function (e) {
          (e[(e.Large = 0)] = "Large"),
            (e[(e.Small = 1)] = "Small"),
            (e[(e.App = 2)] = "App");
        })(V || (V = {})),
        (function (e) {
          (e[(e.Center = 0)] = "Center"), (e[(e.Fill = 1)] = "Fill");
        })(L || (L = {}));
      const D = (e) =>
        d.createElement(
          "div",
          { className: (0, C.FH)("ControlBarGroup", V[e.style]) },
          e.children,
        );
      let H = class extends d.Component {
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
            u.$,
            {
              className: (0, C.FH)(
                "ControlBarButton",
                this.props.additionalClassNames,
                L[
                  null !== (e = this.props.imageStyle) && void 0 !== e
                    ? e
                    : L.Center
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
              releaseSoundEffect: h.j.ControlBarButtonClick,
            },
            this.props.centerPanelAnchorID &&
              d.createElement(
                "div",
                { style: { position: "absolute", left: "50%", top: "50%" } },
                d.createElement(y.l, {
                  allowableParentSelectors: [".DashboardMain"],
                  panelAnchorID: this.props.centerPanelAnchorID,
                }),
              ),
            d.createElement(N, {
              text: this.props.label,
              ref: this.m_refTooltip,
            }),
            d.createElement(z, { src: this.props.imageUrl }),
          );
        }
      };
      (0, n.Cg)([s.o], H.prototype, "onMouseEnter", null),
        (0, n.Cg)([s.o], H.prototype, "onMouseLeave", null),
        (H = (0, n.Cg)([l.PA], H));
      const k = (e) =>
        d.createElement(
          D,
          { style: e.style },
          d.createElement(H, Object.assign({}, e)),
        );
      d.Component;
      class R extends d.Component {
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
            n = Math.asin(r) / Math.PI,
            s = null !== (e = this.props.scale) && void 0 !== e ? e : 1;
          return d.createElement(
            d.Fragment,
            null,
            d.createElement(
              i.Ci,
              { location: { x: r, y: -1 } },
              d.createElement(i.dL, {
                id: this.m_sAnchorID,
                translation: { y: 0.01 * Math.abs(n), z: -0.03 * Math.abs(n) },
                rotation: { y: 15 * n, z: 2 * n },
              }),
            ),
            d.createElement(
              y.b,
              {
                allowableParentSelectors: [".DashboardMain"],
                onPortalDidMount: this.onPortalDidMount,
              },
              d.createElement(
                i.N,
                { color: this.props.tintColor },
                d.createElement(
                  v.Sv,
                  {
                    additionalClassName: "ControlBarTrayAnimation",
                    visible: this.props.visible,
                    duration: 0.25,
                    onStartShowing: this.updateBackgroundSize,
                    onShown: this.updateBackgroundSize,
                  },
                  d.createElement(
                    i.dL,
                    {
                      parent_id: this.m_sAnchorID,
                      translation: { y: 0.04 * s, z: -0.01 },
                      scale: s,
                    },
                    d.createElement(
                      i.Zk,
                      {
                        curvature_origin_id:
                          null !== (t = this.props.curvatureOriginId) &&
                          void 0 !== t
                            ? t
                            : null,
                        origin: i.Oi.TopCenter,
                        interactive: !0,
                        scrollable: !0,
                        meters_per_pixel: g.iZ,
                        sort_depth_bias: this.props.sort_depth_bias,
                        debug_name: "control-bar-tray",
                      },
                      d.createElement(
                        "div",
                        {
                          className: (0, C.FH)(
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
                      i.dL,
                      { translation: { z: -1e-5 } },
                      d.createElement(
                        i.Zk,
                        {
                          curvature_origin_id:
                            null !== (o = this.props.curvatureOriginId) &&
                            void 0 !== o
                              ? o
                              : null,
                          origin: i.Oi.TopCenter,
                          interactive: !1,
                          scrollable: !1,
                          meters_per_pixel: 2 * g.iZ,
                          reflect: 0.005,
                          sampler: i._h.SingleTap,
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
      (0, n.Cg)([s.o], R.prototype, "onResizeObserved", null),
        (0, n.Cg)([s.o], R.prototype, "updateBackgroundSize", null),
        (0, n.Cg)([s.o], R.prototype, "onPortalDidMount", null);
      let B = class extends d.Component {
        constructor() {
          super(...arguments),
            (this.m_refSlider = d.createRef()),
            (this.m_refTray = d.createRef()),
            (this.m_bMouseInSlider = !1);
        }
        get slider() {
          return this.m_refSlider.current;
        }
        onSliderMouseEnter() {
          this.m_bMouseInSlider = !0;
        }
        onSliderMouseLeave() {
          this.m_bMouseInSlider = !1;
        }
        onSliderFinalChange() {
          var e, t;
          this.m_bMouseInSlider ||
            null === (t = (e = this.props).onFinalChangeMouseOutside) ||
            void 0 === t ||
            t.call(e);
        }
        get showAudioMirrorControls() {
          return (
            f.HR.settings.get(
              "/settings/audio/enablePlaybackMirrorIndependentVolume",
            ) && f.HR.settings.get("/settings/audio/enablePlaybackMirror")
          );
        }
        get enableAudioMirrorControls() {
          return !!f.HR.settings.get(
            "/settings/audio/activePlaybackMirrorDevice",
          );
        }
        render() {
          const e =
            (this.showAudioMirrorControls ? 3 : 2) >= 3
              ? 0
              : this.props.position;
          return d.createElement(
            R,
            Object.assign({}, this.props, {
              position: e,
              ref: this.m_refTray,
              additionalClassNames: "VolumeTray",
            }),
            d.createElement(
              "div",
              { className: "Section" },
              d.createElement(
                P,
                {
                  onClick: b.f.Instance.toggleMicrophoneMute,
                  title: b.f.Instance.microphoneMuted
                    ? (0, _.we)("#UnmuteMicrophone")
                    : (0, _.we)("#MuteMicrophone"),
                },
                d.createElement("img", {
                  className: "BlackToWhite",
                  src: b.f.Instance.microphoneMuted
                    ? "/dashboard/images/icons/svr_mic_mute.svg"
                    : "/dashboard/images/icons/svr_mic_active.svg",
                }),
              ),
              d.createElement(O, {
                title: (0, _.we)("#MicrophoneVolume"),
                value: b.f.Instance.microphoneVolume,
                onChange: b.f.Instance.setMicrophoneVolume,
                onMouseEnter: this.onSliderMouseEnter,
                onMouseLeave: this.onSliderMouseLeave,
                onFinalChange: this.onSliderFinalChange,
                renderValue: (e) => Math.round(100 * e) + "%",
                valueStyleVariant: m.Te.OnHandle,
                additionalClassName: (0, C.FH)([
                  "Muted",
                  b.f.Instance.microphoneMuted,
                ]),
                interactionEndSoundEffect: h.j.VolumePreview,
              }),
            ),
            this.showAudioMirrorControls &&
              d.createElement(
                "div",
                { className: "Section" },
                d.createElement(
                  P,
                  {
                    onClick: b.f.Instance.toggleMirrorMute,
                    enabled: this.enableAudioMirrorControls,
                    title: b.f.Instance.mirrorMuted
                      ? (0, _.we)("#UnmuteAudioMirror")
                      : (0, _.we)("#MuteAudioMirror"),
                  },
                  d.createElement("img", {
                    className: "BlackToWhite",
                    src: b.f.Instance.mirrorMuted
                      ? "/dashboard/images/icons/svr_volume_mirror_mute.svg"
                      : "/dashboard/images/icons/svr_volume_mirror.svg",
                  }),
                ),
                d.createElement(O, {
                  title: (0, _.we)("#AudioMirrorVolume"),
                  value: b.f.Instance.mirrorVolume,
                  enabled: this.enableAudioMirrorControls,
                  onChange: b.f.Instance.setMirrorVolume,
                  onMouseEnter: this.onSliderMouseEnter,
                  onMouseLeave: this.onSliderMouseLeave,
                  onFinalChange: this.onSliderFinalChange,
                  renderValue: (e) => Math.round(100 * e) + "%",
                  valueStyleVariant: m.Te.OnHandle,
                  additionalClassName: (0, C.FH)([
                    "Muted",
                    b.f.Instance.mirrorMuted,
                  ]),
                  interactionEndSoundEffect: h.j.VolumePreview,
                }),
              ),
            d.createElement(
              "div",
              { className: "Section" },
              d.createElement(
                P,
                {
                  onClick: b.f.Instance.toggleMute,
                  title: b.f.Instance.muted
                    ? (0, _.we)("#Unmute_Headset")
                    : (0, _.we)("#Mute_Headset"),
                },
                d.createElement("img", {
                  className: "BlackToWhite",
                  src: b.f.Instance.muted
                    ? "/dashboard/images/icons/svr_volume_mute.svg"
                    : "/dashboard/images/icons/svr_volume.svg",
                }),
              ),
              d.createElement(O, {
                title: (0, _.we)("#HeadsetVolume"),
                sliderRef: this.m_refSlider,
                value: b.f.Instance.volume,
                onChange: b.f.Instance.setVolume,
                onMouseEnter: this.onSliderMouseEnter,
                onMouseLeave: this.onSliderMouseLeave,
                onFinalChange: this.onSliderFinalChange,
                renderValue: (e) => Math.round(100 * e) + "%",
                valueStyleVariant: m.Te.OnHandle,
                additionalClassName: (0, C.FH)(["Muted", b.f.Instance.muted]),
                interactionEndSoundEffect: h.j.VolumePreview,
              }),
            ),
          );
        }
      };
      (0, n.Cg)([s.o], B.prototype, "onSliderMouseEnter", null),
        (0, n.Cg)([s.o], B.prototype, "onSliderMouseLeave", null),
        (0, n.Cg)([s.o], B.prototype, "onSliderFinalChange", null),
        (0, n.Cg)([a.computed], B.prototype, "showAudioMirrorControls", null),
        (0, n.Cg)([a.computed], B.prototype, "enableAudioMirrorControls", null),
        (B = (0, n.Cg)([l.PA], B));
      let O = class extends d.Component {
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
              d.createElement(N, {
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
      (0, n.Cg)([s.o], O.prototype, "onMouseEnter", null),
        (0, n.Cg)([s.o], O.prototype, "onMouseLeave", null),
        (0, n.Cg)([s.o], O.prototype, "onInteractionStart", null),
        (0, n.Cg)([s.o], O.prototype, "onInteractionEnd", null),
        (O = (0, n.Cg)([l.PA], O));
      let P = class extends d.Component {
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
            u.$,
            Object.assign({}, this.props, {
              className: (0, C.FH)(
                "ButtonControl",
                "Round",
                this.props.className,
              ),
              onMouseEnter: this.onMouseEnter,
              onMouseLeave: this.onMouseLeave,
            }),
            this.props.title &&
              d.createElement(N, {
                text: this.props.title,
                ref: this.m_refTooltip,
              }),
            this.props.children,
          );
        }
      };
      (0, n.Cg)([s.o], P.prototype, "onMouseEnter", null),
        (0, n.Cg)([s.o], P.prototype, "onMouseLeave", null),
        (P = (0, n.Cg)([l.PA], P));
      let G = (r = class extends d.Component {
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
          (0, i.NH)((0, i.QB)(t, this.m_vecOriginalMousePosition)) >
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
          return d.createElement(H, {
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
      (G.MIN_DRAG_THRESHOLD = 35),
        (0, n.Cg)([s.o], G.prototype, "onButtonMouseDown", null),
        (0, n.Cg)([s.o], G.prototype, "onWindowMouseMove", null),
        (0, n.Cg)([s.o], G.prototype, "onWindowMouseUp", null),
        (G = r = (0, n.Cg)([l.PA], G));
      const U = (e) => {
          var t;
          const o = d.useRef(void 0);
          return d.createElement(
            u.$,
            {
              className: (0, C.FH)(
                "ButtonControl",
                ["Active", e.active],
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
            },
            e.title &&
              d.createElement(N, {
                text: e.title,
                translation: e.tooltipTranslation,
                ref: o,
              }),
            e.label && d.createElement("span", null, e.label),
            e.iconUrl &&
              d.createElement("img", {
                className: (0, w.A)(
                  "Icon",
                  (null === (t = e.iconIsInverted) || void 0 === t || t) &&
                    "BlackToWhite",
                ),
                src: e.iconUrl,
              }),
            !e.iconUrl && e.icon,
          );
        },
        A = (0, l.PA)(function (e) {
          var t;
          const o =
              x.SW.m_bKeyboardVisible &&
              x.SW.m_sKeyboardOverlayKey == e.overlayKey,
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
                additionalClassNames: (0, C.FH)(
                  "Keyboard",
                  e.additionalClassNames,
                ),
                onClick: () => {
                  if (o) VRHTML.VROverlay.HideKeyboard();
                  else {
                    let t =
                      i.QR.Minimal | i.QR.HideDoneKey | i.QR.ShowArrowKeys;
                    e.modal && (t |= i.QR.Modal),
                      VRHTML.VROverlay.ShowKeyboardForOverlay(
                        e.overlayKey,
                        i.Xl.Normal,
                        i.b.SingleLine,
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
      var r = o(6090),
        n = o(6540),
        i = o(9978),
        s = o(1370),
        a = o(1835),
        l = o(3606),
        d = o(3246);
      function u(e) {
        const { children: t, invertParentPanelPitch: o, pitch: i } = e;
        return o || 0 != i
          ? n.createElement(
              r.dL,
              {
                invert_parent_panel_pitch: null != o && o,
                curvature_pitch: null != i ? i : 0,
              },
              t,
            )
          : n.createElement(n.Fragment, null, t);
      }
      function p(e) {
        let { children: t, offsetPixels: o, offsetMeters: i } = e;
        (o = null != o ? o : { x: 0, y: 0, z: 0 }),
          (i = null != i ? i : { x: 0, y: 0, z: 0 });
        const s = (0, r.CU)(
          i,
          (0, r.tx)(o, a.SW.m_fVRGamepadUI_MetersPerPixel),
        );
        return 0 != s.x || 0 != s.y || 0 != s.z
          ? n.createElement(r.dL, { translation: s }, t)
          : n.createElement(n.Fragment, null, t);
      }
      function c(e) {
        const { children: t, rotation: o } = e;
        return null != o && (0 != o.x || 0 != o.y || 0 != o.z)
          ? n.createElement(r.dL, { rotation: o }, t)
          : n.createElement(n.Fragment, null, t);
      }
      function m(e) {
        return 1 == (null == e ? void 0 : e.parent_enum) ? 0 : l.gS;
      }
      function h(e) {
        var t,
          o,
          s,
          h,
          v,
          g,
          _,
          y,
          C,
          b,
          f,
          S,
          M,
          w,
          x,
          E,
          I,
          F,
          T,
          N,
          z,
          V,
          L,
          D,
          H,
          k,
          R,
          B,
          O,
          P,
          G,
          U,
          A,
          W,
          Z,
          K,
          j,
          q;
        const {
            forceReparentToCurrentPanel: J = !1,
            forceReparentToTransformID: Y,
          } = e,
          $ = (0, i.useObserver)(() => d.r.GetRequestForID(e.popupRequestID)),
          Q = null !== (t = e.popupRequest) && void 0 !== t ? t : $,
          X = {
            x:
              null !==
                (s =
                  null === (o = null == Q ? void 0 : Q.origin_on_parent) ||
                  void 0 === o
                    ? void 0
                    : o.x) && void 0 !== s
                ? s
                : 0,
            y:
              null !==
                (v =
                  null === (h = null == Q ? void 0 : Q.origin_on_parent) ||
                  void 0 === h
                    ? void 0
                    : h.y) && void 0 !== v
                ? v
                : 0,
          },
          ee = {
            x:
              null !==
                (_ =
                  null === (g = null == Q ? void 0 : Q.origin_on_popup) ||
                  void 0 === g
                    ? void 0
                    : g.x) && void 0 !== _
                ? _
                : 0,
            y:
              null !==
                (C =
                  null === (y = null == Q ? void 0 : Q.origin_on_popup) ||
                  void 0 === y
                    ? void 0
                    : y.y) && void 0 !== C
                ? C
                : 0,
          },
          te = {
            u:
              null !==
                (f =
                  null === (b = null == Q ? void 0 : Q.clip_rect) ||
                  void 0 === b
                    ? void 0
                    : b.u_min) && void 0 !== f
                ? f
                : 0,
            v:
              null !==
                (M =
                  null === (S = null == Q ? void 0 : Q.clip_rect) ||
                  void 0 === S
                    ? void 0
                    : S.v_min) && void 0 !== M
                ? M
                : 0,
          },
          oe = {
            u:
              null !==
                (x =
                  null === (w = null == Q ? void 0 : Q.clip_rect) ||
                  void 0 === w
                    ? void 0
                    : w.u_max) && void 0 !== x
                ? x
                : 1,
            v:
              null !==
                (I =
                  null === (E = null == Q ? void 0 : Q.clip_rect) ||
                  void 0 === E
                    ? void 0
                    : E.v_max) && void 0 !== I
                ? I
                : 1,
          },
          re = {
            x:
              null !==
                (T =
                  null === (F = null == Q ? void 0 : Q.offset) || void 0 === F
                    ? void 0
                    : F.x_pixels) && void 0 !== T
                ? T
                : 0,
            y:
              null !==
                (z =
                  null === (N = null == Q ? void 0 : Q.offset) || void 0 === N
                    ? void 0
                    : N.y_pixels) && void 0 !== z
                ? z
                : 0,
            z:
              null !==
                (L =
                  null === (V = null == Q ? void 0 : Q.offset) || void 0 === V
                    ? void 0
                    : V.z_pixels) && void 0 !== L
                ? L
                : 0,
          },
          ne = {
            x:
              null !==
                (H =
                  null === (D = null == Q ? void 0 : Q.offset) || void 0 === D
                    ? void 0
                    : D.x_meters) && void 0 !== H
                ? H
                : 0,
            y:
              null !==
                (R =
                  null === (k = null == Q ? void 0 : Q.offset) || void 0 === k
                    ? void 0
                    : k.y_meters) && void 0 !== R
                ? R
                : 0,
            z:
              null !==
                (O =
                  null === (B = null == Q ? void 0 : Q.offset) || void 0 === B
                    ? void 0
                    : B.z_meters) && void 0 !== O
                ? O
                : 0,
          },
          ie = {
            x:
              null !==
                (G =
                  null === (P = null == Q ? void 0 : Q.rotation) || void 0 === P
                    ? void 0
                    : P.pitch_degrees) && void 0 !== G
                ? G
                : 0,
            y:
              null !==
                (A =
                  null === (U = null == Q ? void 0 : Q.rotation) || void 0 === U
                    ? void 0
                    : U.yaw_degrees) && void 0 !== A
                ? A
                : 0,
          },
          se =
            null === (W = null == Q ? void 0 : Q.inherit_parent_pitch) ||
            void 0 === W ||
            W,
          ae =
            null === (Z = null == Q ? void 0 : Q.inherit_parent_curvature) ||
            void 0 === Z ||
            Z,
          le =
            null === (K = null == Q ? void 0 : Q.interactive) ||
            void 0 === K ||
            K,
          de =
            null !== (j = null == Q ? void 0 : Q.requires_laser) &&
            void 0 !== j &&
            j,
          ue =
            1 ==
            (null !== (q = null == Q ? void 0 : Q.sort_order) && void 0 !== q
              ? q
              : 0)
              ? 101
              : null,
          pe = (function (e) {
            var t, o, r;
            const n =
                null !== (t = null == e ? void 0 : e.parent_overlay_key) &&
                void 0 !== t
                  ? t
                  : "",
              i =
                null !==
                  (r =
                    null === (o = null == e ? void 0 : e.offset) || void 0 === o
                      ? void 0
                      : o.z_pixels) && void 0 !== r
                  ? r
                  : 0;
            return n == l.Vx && i >= 0 ? -0.5 : 0;
          })(Q);
        n.useLayoutEffect(
          () => r.O5.Current().forceLayoutUpdate(),
          [te.u, te.v, oe.u, oe.v],
        );
        const ce = n.createElement(
          u,
          { invertParentPanelPitch: !se },
          n.createElement(
            p,
            { offsetPixels: re, offsetMeters: ne },
            n.createElement(
              c,
              { rotation: ie },
              n.createElement(r.Zk, {
                debug_name: `VRGamepadUI-PooledPopup-${null == Q ? void 0 : Q.dashboard_popup_id}`,
                interactive: le,
                requires_laser: de,
                curvature: ae ? "inherit-from-parent-panel" : void 0,
                overlay_key: null == Q ? void 0 : Q.popup_overlay_key,
                origin: ee,
                meters_per_pixel: a.SW.m_fVRGamepadUI_MetersPerPixel,
                reflect: m(Q),
                sort_depth_bias: pe,
                uv_min: te,
                uv_max: oe,
                sort_order: ue,
              }),
            ),
          ),
        );
        let me;
        return (
          J
            ? (me = n.createElement(r.Ci, { location: X }, ce))
            : Y
              ? (me = n.createElement(r.dL, { parent_id: Y }, ce))
              : (null == Q ? void 0 : Q.parent_overlay_key)
                ? (me = n.createElement(
                    r.b$,
                    {
                      parent_overlay_key:
                        null == Q ? void 0 : Q.parent_overlay_key,
                    },
                    n.createElement(
                      r.Ci,
                      { key: Q.dashboard_popup_id, location: X },
                      ce,
                    ),
                  ))
                : 1 == (null == Q ? void 0 : Q.parent_enum)
                  ? (me = n.createElement(
                      r.dL,
                      {
                        parent_path: "/user/head",
                        translation: { y: -0.4, z: -0.8 },
                        scale: { x: 0.4, y: 0.4, z: 0.4 },
                        rotation: { x: -20 },
                      },
                      ce,
                    ))
                  : (null == Q ? void 0 : Q.parent_device_path) &&
                    (me = n.createElement(
                      r.dL,
                      {
                        parent_path: null == Q ? void 0 : Q.parent_device_path,
                      },
                      ce,
                    )),
          me
        );
      }
      (0, s.PA)((e) =>
        n.createElement(
          n.Fragment,
          null,
          d.r.requestIDs.map((e) =>
            n.createElement(h, { popupRequestID: e, key: e }),
          ),
        ),
      );
    },
    9471: (e, t, o) => {
      "use strict";
      o.d(t, {
        Pq: () => a,
        Xj: () => l,
        FG: () => i,
        YN: () => s,
        fr: () => d,
      });
      var r = o(1635),
        n = o(6540);
      o(108);
      function i(e) {
        return n.createElement(
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
          n.createElement(
            "g",
            null,
            n.createElement("path", {
              d: "M93.8,50v28.1c0,8.6-7,15.6-15.6,15.6H21.9c-8.6,0-15.6-7-15.6-15.6V21.9c0-8.6,7-15.6,15.6-15.6H50c1.7,0,3.1,1.4,3.1,3.1\r\n\t\t\t\ts-1.4,3.1-3.1,3.1H21.9c-5.2,0-9.4,4.2-9.4,9.4v56.3c0,5.2,4.2,9.4,9.4,9.4h56.3c5.2,0,9.4-4.2,9.4-9.4V50c0-1.7,1.4-3.1,3.1-3.1\r\n\t\t\t\tS93.8,48.3,93.8,50z M68.8,12.5h14.3L47.8,47.8c-1.2,1.2-1.2,3.2,0,4.4c0,0,0,0,0,0c1.2,1.2,3.2,1.2,4.4,0c0,0,0,0,0,0l35.3-35.3\r\n\t\t\t\tv14.3c0,1.7,1.4,3.1,3.1,3.1l0,0c1.7,0,3.1-1.4,3.1-3.1V9.4c0-0.8-0.3-1.6-0.9-2.2c-0.6-0.6-1.4-0.9-2.2-0.9H68.8\r\n\t\t\t\tc-1.7,0-3.1,1.4-3.1,3.1S67,12.5,68.8,12.5z",
            }),
          ),
        );
      }
      function s(e) {
        return n.createElement(
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
          n.createElement("path", {
            d: "M0 0v8h8v-2h-1v1h-6v-6h1v-1h-2zm4 0l1.5 1.5-2.5 2.5 1 1 2.5-2.5 1.5 1.5v-4h-4z",
          }),
        );
      }
      function a(e) {
        const { none: t, partial: o, right: i, left: s } = e,
          a = (0, r.Tt)(e, ["none", "partial", "right", "left"]);
        return t
          ? n.createElement(
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
              n.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M33.5871 3.5268L31.4417 1.38135L26.6841 6.13886C24.4873 5.49306 21.6236 5 18 5C7.5 5 3.38 9.14 3.38 9.14C3.38 9.14 0 20.56 0 25.2C0 27.1825 1.62275 28.7886 3.01931 29.8037L0.370949 32.452L2.5164 34.5975L33.5871 3.5268ZM23.2678 19.2678C23.0842 19.4513 22.8735 19.6049 22.6433 19.7232L17.3666 25H25L31 31C31 31 36 28.68 36 25.2C36 21.1218 33.3889 11.806 32.7566 9.60992L29.8137 12.5529C29.9361 12.852 30 13.1736 30 13.5C30 14.163 29.7366 14.7989 29.2678 15.2678C28.7989 15.7366 28.163 16 27.5 16C27.1736 16 26.852 15.9361 26.5529 15.8137L23.7232 18.6433C23.6049 18.8735 23.4513 19.0842 23.2678 19.2678ZM15 17H12V20H9V17H6V14H9V11H12V14H15V17Z",
              }),
            )
          : o || i
            ? n.createElement(
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
                n.createElement("path", {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M32.62 9.14C32.62 9.14 28.5 5 18 5V25H25L31 31C31 31 36 28.68 36 25.2C36 20.56 32.62 9.14 32.62 9.14ZM21.5 20C21.0055 20 20.5222 19.8534 20.1111 19.5787C19.7 19.304 19.3795 18.9135 19.1903 18.4567C19.0011 17.9999 18.9516 17.4972 19.048 17.0123C19.1445 16.5273 19.3826 16.0819 19.7322 15.7322C20.0819 15.3826 20.5273 15.1445 21.0123 15.048C21.4972 14.9516 21.9999 15.0011 22.4567 15.1903C22.9135 15.3795 23.304 15.7 23.5787 16.1111C23.8534 16.5222 24 17.0055 24 17.5C24 17.8283 23.9353 18.1534 23.8097 18.4567C23.6841 18.76 23.4999 19.0356 23.2678 19.2678C23.0356 19.4999 22.76 19.6841 22.4567 19.8097C22.1534 19.9353 21.8283 20 21.5 20ZM27.5 16C27.0055 16 26.5222 15.8534 26.1111 15.5787C25.7 15.304 25.3795 14.9135 25.1903 14.4567C25.0011 13.9999 24.9516 13.4972 25.048 13.0123C25.1445 12.5273 25.3826 12.0819 25.7322 11.7322C26.0819 11.3826 26.5273 11.1445 27.0123 11.048C27.4972 10.9516 27.9999 11.0011 28.4567 11.1903C28.9135 11.3795 29.304 11.7 29.5787 12.1111C29.8534 12.5222 30 13.0055 30 13.5C30 14.163 29.7366 14.7989 29.2678 15.2678C28.7989 15.7366 28.163 16 27.5 16Z",
                }),
                n.createElement("path", {
                  fill: "currentColor",
                  opacity: "0.5",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M3.38 9.14C3.38 9.14 0 20.56 0 25.2C0 28.68 5 31 5 31L11 25H18V5C7.5 5 3.38 9.14 3.38 9.14ZM15 17H12V20H9V17H6V14H9V11H12V14H15V17Z",
                }),
              )
            : s
              ? n.createElement(
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
                  n.createElement("path", {
                    fill: "currentColor",
                    opacity: "0.5",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M32.62 9.14C32.62 9.14 28.5 5 18 5V25H25L31 31C31 31 36 28.68 36 25.2C36 20.56 32.62 9.14 32.62 9.14ZM21.5 20C21.0055 20 20.5222 19.8534 20.1111 19.5787C19.7 19.304 19.3795 18.9135 19.1903 18.4567C19.0011 17.9999 18.9516 17.4972 19.048 17.0123C19.1445 16.5273 19.3826 16.0819 19.7322 15.7322C20.0819 15.3826 20.5273 15.1445 21.0123 15.048C21.4972 14.9516 21.9999 15.0011 22.4567 15.1903C22.9135 15.3795 23.304 15.7 23.5787 16.1111C23.8534 16.5222 24 17.0055 24 17.5C24 17.8283 23.9353 18.1534 23.8097 18.4567C23.6841 18.76 23.4999 19.0356 23.2678 19.2678C23.0356 19.4999 22.76 19.6841 22.4567 19.8097C22.1534 19.9353 21.8283 20 21.5 20ZM27.5 16C27.0055 16 26.5222 15.8534 26.1111 15.5787C25.7 15.304 25.3795 14.9135 25.1903 14.4567C25.0011 13.9999 24.9516 13.4972 25.048 13.0123C25.1445 12.5273 25.3826 12.0819 25.7322 11.7322C26.0819 11.3826 26.5273 11.1445 27.0123 11.048C27.4972 10.9516 27.9999 11.0011 28.4567 11.1903C28.9135 11.3795 29.304 11.7 29.5787 12.1111C29.8534 12.5222 30 13.0055 30 13.5C30 14.163 29.7366 14.7989 29.2678 15.2678C28.7989 15.7366 28.163 16 27.5 16Z",
                  }),
                  n.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3.38 9.14C3.38 9.14 0 20.56 0 25.2C0 28.68 5 31 5 31L11 25H18V5C7.5 5 3.38 9.14 3.38 9.14ZM15 17H12V20H9V17H6V14H9V11H12V14H15V17Z",
                  }),
                )
              : n.createElement(
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
                  n.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M32.62 9.14C32.62 9.14 28.5 5 18 5C7.5 5 3.38 9.14 3.38 9.14C3.38 9.14 0 20.56 0 25.2C0 28.68 5 31 5 31L11 25H25L31 31C31 31 36 28.68 36 25.2C36 20.56 32.62 9.14 32.62 9.14ZM15 17H12V20H9V17H6V14H9V11H12V14H15V17ZM21.5 20C21.0055 20 20.5222 19.8534 20.1111 19.5787C19.7 19.304 19.3795 18.9135 19.1903 18.4567C19.0011 17.9999 18.9516 17.4972 19.048 17.0123C19.1445 16.5273 19.3826 16.0819 19.7322 15.7322C20.0819 15.3826 20.5273 15.1445 21.0123 15.048C21.4972 14.9516 21.9999 15.0011 22.4567 15.1903C22.9135 15.3795 23.304 15.7 23.5787 16.1111C23.8534 16.5222 24 17.0055 24 17.5C24 17.8283 23.9353 18.1534 23.8097 18.4567C23.6841 18.76 23.4999 19.0356 23.2678 19.2678C23.0356 19.4999 22.76 19.6841 22.4567 19.8097C22.1534 19.9353 21.8283 20 21.5 20ZM27.5 16C27.0055 16 26.5222 15.8534 26.1111 15.5787C25.7 15.304 25.3795 14.9135 25.1903 14.4567C25.0011 13.9999 24.9516 13.4972 25.048 13.0123C25.1445 12.5273 25.3826 12.0819 25.7322 11.7322C26.0819 11.3826 26.5273 11.1445 27.0123 11.048C27.4972 10.9516 27.9999 11.0011 28.4567 11.1903C28.9135 11.3795 29.304 11.7 29.5787 12.1111C29.8534 12.5222 30 13.0055 30 13.5C30 14.163 29.7366 14.7989 29.2678 15.2678C28.7989 15.7366 28.163 16 27.5 16Z",
                  }),
                );
      }
      function l(e) {
        return n.createElement(
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
          n.createElement("path", {
            d: "M32 27V32H4V27H32ZM29 10.77L25.48 7.22998L18 14.72L10.5 7.22998L7 10.77L18 21.77L29 10.77Z",
            fill: "currentColor",
          }),
        );
      }
      function d(e) {
        return n.createElement(
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
          n.createElement("path", {
            fill: "currentColor",
            d: "M18 1C8.4375 1 1 3 1 3V23C1 23 5.70777 21.734 12.448 21.2165L18.0004 15.6641L23.5529 21.2166C30.2926 21.7342 35 23 35 23V3C35 3 27.5625 1 18 1Z",
          }),
          n.createElement("path", {
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
        n = o(6090),
        i = o(4074),
        s = o(1526),
        a = o(4999);
      const l = new (class {
        constructor() {
          (this.m_SteamVR_Provider = new i.tC(this, a.f5)),
            (this.m_Steam_Client = new i.$k(this)),
            (this.m_Steam_ClientMethods = new a.oT(this.m_Steam_Client)),
            (this.m_mailbox = new n._n()),
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
                const t = (0, i.D7)(e.header);
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
            return i.Y7.HeaderSerializationFailure;
          }
          try {
            r = t.serializeBase64String();
          } catch (e) {
            return i.Y7.PayloadSerializationFailure;
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
            return i.Y7.SendFailure;
          }
          return i.Y7.Success;
        }
        IsConnected() {
          return !0;
        }
      })();
      window.VRGamepadUIMessages = l;
      const d = l;
    },
  },
]); //# sourceMappingURL=file:///c:/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/chunk~2e670652e.js.map
