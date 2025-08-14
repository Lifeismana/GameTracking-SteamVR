var CLSTAMP = "9975066";
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
      class l extends n._J {
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
      (0, i.Cg)([s.o], l.prototype, "buildNode", null);
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
      class l extends n._J {
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
      (0, i.Cg)([s.o], l.prototype, "buildNode", null);
    },
    9424: (e, t, o) => {
      "use strict";
      o.d(t, { g: () => d });
      var r = o(1635),
        i = o(6540),
        n = o(3496),
        s = o(3236),
        l = o(5723),
        a = o(6186);
      class d extends n._J {
        constructor(e) {
          var t;
          if (
            (super(e),
            void 0 !== this.props.iconUri &&
              void 0 !== this.props.iconOverlayKey)
          )
            throw new Error(
              "DashboardTab cannot have both an explicit iconUri and iconOverlayKey set in props.",
            );
          super.setBuildNodeOverride(this.buildNode),
            (this.m_sMountableUnqualifiedID =
              null !== (t = e.mountableUnqualifiedID) && void 0 !== t
                ? t
                : this.getSGID() + "_mountable");
        }
        getNodeType() {
          return "dashboardtab";
        }
        buildNode(e, t) {
          var o;
          const r = this.createSgNode(t);
          return (
            (r.properties.tab_name =
              null !== (o = this.props.tabName) && void 0 !== o ? o : ""),
            (r.properties.mountable_id = (0, l.bl)(
              this.m_sMountableUnqualifiedID,
            )),
            (r.properties.icon_uri = this.props.iconUri),
            (r.properties.icon_overlay_key = this.props.iconOverlayKey),
            (r.properties.summon_overlay_key = this.props.summonOverlayKey),
            [e, r]
          );
        }
        internalRender() {
          return i.createElement(
            "vsg-node",
            { id: this.props.id },
            i.createElement(
              a.I,
              { id: this.m_sMountableUnqualifiedID },
              this.props.children,
            ),
          );
        }
      }
      (0, r.Cg)([s.o], d.prototype, "buildNode", null);
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
      class l extends n._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "playspace-floorheight-adjust";
        }
        buildNode(e, t) {
          var o, r, i, n, s, l, a, d, u, p, c, h, m;
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
              null === (i = this.props) || void 0 === i
                ? void 0
                : i.axis_radius),
            (v.properties["axis-color-hsv"] =
              null === (n = this.props) || void 0 === n
                ? void 0
                : n.axis_color_hsv),
            (v.properties["dot-radius"] =
              null === (s = this.props) || void 0 === s
                ? void 0
                : s.dot_radius),
            (v.properties["dot-color-hsv"] =
              null === (l = this.props) || void 0 === l
                ? void 0
                : l.dot_color_hsv),
            (v.properties["dot-inner-alpha"] =
              null === (a = this.props) || void 0 === a
                ? void 0
                : a.dot_inner_alpha),
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
              null === (h = this.props) || void 0 === h
                ? void 0
                : h.rings_hue_speed),
            (v.properties["rings-half-width"] =
              null === (m = this.props) || void 0 === m
                ? void 0
                : m.rings_half_width),
            [e, v]
          );
        }
      }
      (0, i.Cg)([s.o], l.prototype, "buildNode", null),
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Circle = 1)] = "Circle"),
            (e[(e.Drawn = 2)] = "Drawn");
        })(r || (r = {}));
      class a extends n._J {
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
      (0, i.Cg)([s.o], a.prototype, "buildNode", null);
      class d extends n._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "playspace-outline";
        }
        buildNode(e, t) {
          var o, r, i, n, s, l, a, d;
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
              null === (i = this.props) || void 0 === i
                ? void 0
                : i["hue-speed"]),
            (u.properties["center-dot-radius"] =
              null === (n = this.props) || void 0 === n
                ? void 0
                : n["center-dot-radius"]),
            (u.properties["center-color-hsv"] =
              null === (s = this.props) || void 0 === s
                ? void 0
                : s["center-color-hsv"]),
            (u.properties["outline-color-hsv"] =
              null === (l = this.props) || void 0 === l
                ? void 0
                : l["outline-color-hsv"]),
            (u.properties["shadow-radius-delta"] =
              null === (a = this.props) || void 0 === a
                ? void 0
                : a["shadow-radius-delta"]),
            (u.properties["outline-shadow-alpha"] =
              null === (d = this.props) || void 0 === d
                ? void 0
                : d["outline-shadow-alpha"]),
            [e, u]
          );
        }
      }
      (0, i.Cg)([s.o], d.prototype, "buildNode", null);
      class u extends n._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "playspace-dots";
        }
        buildNode(e, t) {
          var o, r, i, n, s, l, a, d, u;
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
              null === (i = this.props) || void 0 === i
                ? void 0
                : i["min-radius"]),
            (p.properties["max-radius-fade"] =
              null === (n = this.props) || void 0 === n
                ? void 0
                : n["max-radius-fade"]),
            (p.properties["min-radius-fade"] =
              null === (s = this.props) || void 0 === s
                ? void 0
                : s["min-radius-fade"]),
            (p.properties["dot-half-size"] =
              null === (l = this.props) || void 0 === l
                ? void 0
                : l["dot-half-size"]),
            (p.properties["center-randomization"] =
              null === (a = this.props) || void 0 === a
                ? void 0
                : a["center-randomization"]),
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
          var o, r, n, s, l, a, d;
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
            (u.properties.height = (0, i.kJ)(this.props.height)),
            (u.properties.offset = [
              null === (r = this.props.offset) || void 0 === r ? void 0 : r.x,
              null === (n = this.props.offset) || void 0 === n ? void 0 : n.y,
            ]),
            "string" == typeof this.props.color)
          )
            u.properties.color = this.props.color;
          else if (this.props.color) {
            let e = (0, i.RH)(this.props.color, { r: 0, g: 0, b: 0 });
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
              null === (l = this.props) || void 0 === l
                ? void 0
                : l["auto-subdivide"]),
            (u.properties["pedestal-height"] = (0, i.kJ)(
              this.props["pedestal-height"],
            )),
            (u.properties["pedestal-radius"] = (0, i.kJ)(
              this.props["pedestal-radius"],
            )),
            (u.properties["floor-aa-shader"] =
              null === (a = this.props) || void 0 === a
                ? void 0
                : a["floor-aa-shader"]),
            (u.properties["stable-fade"] =
              null === (d = this.props) || void 0 === d
                ? void 0
                : d["stable-fade"]),
            [e, u]
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
    6292: (e, t, o) => {
      "use strict";
      function r() {
        return {
          translation: { x: 0, y: 0, z: 0 },
          rotation: { w: 1, x: 0, y: 0, z: 0 },
          scale: { x: 1, y: 1, z: 1 },
        };
      }
      function i(e, t) {
        return { x: e.x + t.x, y: e.y + t.y, z: e.z + t.z };
      }
      function n(e, t, o) {
        return {
          x: t.x + e * (o.x - t.x),
          y: t.y + e * (o.y - t.y),
          z: t.z + e * (o.z - t.z),
        };
      }
      function s(e, t) {
        return { x: e.x - t.x, y: e.y - t.y };
      }
      function l(e, t) {
        return { x: e.x - t.x, y: e.y - t.y, z: e.z - t.z };
      }
      function a(e, t) {
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
          i = Math.cos(t),
          n = Math.cos(o),
          s = Math.cos(r),
          l = Math.sin(t),
          a = Math.sin(o),
          d = Math.sin(r);
        return {
          w: i * n * s + l * a * d,
          x: l * n * s + i * a * d,
          y: i * a * s - l * n * d,
          z: i * n * d - l * a * s,
        };
      }
      function h(e) {
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
      function m(e, t) {
        let o = 2 * (e.y * t.z - e.z * t.y),
          r = 2 * (e.z * t.x - e.x * t.z),
          i = 2 * (e.x * t.y - e.y * t.x);
        return {
          x: t.x + e.w * o + e.y * i - e.z * r,
          y: t.y + e.w * r + e.z * o - e.x * i,
          z: t.z + e.w * i + e.x * r - e.y * o,
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
        return m(e.rotation, { x: 0, y: 0, z: -1 });
      }
      function C(e) {
        let t = p(e);
        return { x: e.x / t, y: e.y / t, z: e.z / t };
      }
      function _(e, t) {
        return {
          x: e.y * t.z - e.z * t.y,
          y: e.z * t.x - e.x * t.z,
          z: e.x * t.y - e.y * t.x,
        };
      }
      function y(e) {
        const t = { x: 0, y: 1, z: 0 };
        let o = g(e);
        (o.y = 0), (o = C(o));
        const r = v(C(_(o, t)), t, { x: -(i = o).x, y: -i.y, z: -i.z });
        var i;
        return { translation: e.translation, rotation: h(r), scale: e.scale };
      }
      o.d(t, {
        CU: () => i,
        Fb: () => c,
        JZ: () => l,
        Ld: () => h,
        NH: () => u,
        O6: () => a,
        QB: () => s,
        Se: () => n,
        Uj: () => p,
        e_: () => C,
        oN: () => _,
        o_: () => g,
        p0: () => y,
        qF: () => v,
        tx: () => d,
        vx: () => r,
      });
    },
    3606: (e, t, o) => {
      "use strict";
      o.d(t, {
        $Z: () => he,
        Bf: () => K,
        Bn: () => L,
        Bz: () => m,
        C6: () => _,
        D1: () => ee,
        Ec: () => me,
        El: () => ce,
        Eo: () => i,
        F2: () => j,
        Fl: () => ae,
        GM: () => Z,
        GO: () => v,
        Ju: () => Y,
        Kh: () => a,
        MM: () => s,
        NX: () => T,
        Ni: () => U,
        P: () => R,
        Pi: () => ve,
        Qv: () => M,
        R_: () => pe,
        So: () => E,
        Sp: () => z,
        Sx: () => d,
        Ul: () => c,
        Uv: () => g,
        Vv: () => $,
        Vx: () => x,
        WS: () => G,
        Wl: () => b,
        Wm: () => f,
        Wt: () => y,
        XO: () => q,
        Xk: () => p,
        Y: () => W,
        aD: () => A,
        bl: () => S,
        cb: () => C,
        dw: () => u,
        ge: () => H,
        i8: () => de,
        iZ: () => N,
        j5: () => F,
        kk: () => n,
        kx: () => B,
        lP: () => re,
        mB: () => h,
        md: () => J,
        nY: () => I,
        np: () => r,
        qf: () => D,
        qt: () => le,
        rG: () => ie,
        tZ: () => ge,
        ui: () => se,
        uv: () => V,
        v0: () => l,
        vo: () => X,
        w5: () => O,
        wi: () => w,
        wt: () => P,
        xP: () => ne,
        xY: () => Q,
        x_: () => ue,
        xz: () => te,
        yl: () => oe,
        zM: () => k,
      });
      const r = "openvr.tool.steamvr_environments",
        i = "system.generated.steam.exe",
        n = "steam.app.",
        s = n + "250820",
        l = n + "330050",
        a = "system.dashboard.",
        d = "system.dashboard.quicklaunch",
        u = "system.dashboard.nowplaying",
        p = "system.dashboard.desktop",
        c = 0.25,
        h = 2,
        m = "current.scene.app.binding.list",
        v = "system.desktop",
        g = "system.window",
        C = "system.standalone",
        _ = "system.systemui",
        y = "system.settings",
        b = "system.keyboard",
        f = "system.vrwebhelper.controllerbinding",
        M = "system.messageoverlay",
        E = "valve.steam",
        S = "valve.steam.desktopgame",
        w = "valve.steam.gamepadui.main",
        x = "valve.steam.gamepadui.bar",
        I = "valve.steam.gamepadui.keyboard",
        L = "valve.steam.desktop",
        R = "steamlink_openvr-overlay",
        V = "DashboardCurvatureOrigin",
        H = _ + "::" + V,
        N = 2.667 / 1694,
        z = "DashboardControlStripTransform",
        T = "DashboardGrabHandleTransform",
        k = "DashboardOverlayControlBarOrigin",
        B = "DashboardGrabHandleTransform_Legacy",
        D = "/settings/steamvr/enableHomeApp",
        P = "/settings/steamvr/supersampleManualOverride",
        O = "/settings/steamvr/supersampleScale",
        F = "/settings/GpuSpeed/gpuSpeedRenderTargetScale",
        U = "/settings/camera/roomViewStyle",
        A = "/settings/steamvr/backgroundCameraHeight",
        G = "/settings/steamvr/backgroundDomeRadius",
        W = "/settings/steamvr/analogGain",
        Z = "/settings/driver_lighthouse/indexHmdColumnCorrection",
        j = "/settings/steamvr/showAdvancedSettings",
        q = "/settings/dashboard/lastAccessedExternalOverlayKey",
        K = "/settings/internal/dashboardInitialOverlay",
        J = "/settings/dashboard/position_2",
        Y = "/settings/dashboard/theaterCurvature",
        X = "/settings/dashboard/theaterScreenSize",
        Q = "/settings/dashboard/theaterScreenAlignment",
        $ = "/settings/collisionBounds/CollisionBoundsFadeDistance",
        ee = "/settings/camera/roomView",
        te = "/settings/camera/enableCamera",
        oe = "/settings/dashboard/enableWindowView",
        re = "/settings/dashboard/maxInlineTabs",
        ie = "/settings/steamvr/maxRecommendedResolution",
        ne = "/settings/steamvr/disableKeyboardPrivacy",
        se = "/settings/camera/lightSourceFrequency",
        le = "/settings/dashboard/expectSteam",
        ae = "/settings/dashboard/allowLegacyControlBar",
        de = "/settings/openxr/metaUnityPluginCompatibility",
        ue = "/settings/input/overlayFilteringEnabled",
        pe = "/settings/input/overlayFilteringMinCutoff",
        ce = "/settings/input/overlayFilteringBeta",
        he = "/settings/input/overlayFilteringDerivCutoff",
        me = "/settings/input/overlayMagnetismEnabled",
        ve = "/settings/input/overlayMagnetismLockDistance",
        ge = "/settings/input/overlayMagnetismDeadZone";
    },
    2563: (e, t, o) => {
      "use strict";
      o.d(t, {
        DE: () => A,
        DN: () => G,
        Fu: () => F,
        G3: () => I,
        HA: () => H,
        Hz: () => N,
        L_: () => R,
        MA: () => U,
        N2: () => q,
        OR: () => D,
        OT: () => L,
        R0: () => B,
        Te: () => P,
        Tr: () => j,
        WO: () => O,
        gZ: () => k,
        oZ: () => K,
      });
      var r,
        i = o(1635),
        n = o(6090),
        s = o(3236),
        l = o(7813),
        a = o(4015),
        d = o(6540),
        u = o(6138),
        p = o(6731),
        c = o(5615),
        h = o(917),
        m = o(4963),
        v = o(924),
        g = o(3606),
        C = o(3714),
        _ = o(6575),
        y = o(1139),
        b = o(3473),
        f = o(1333),
        M = o(5735),
        E = o.n(M),
        S = o(998),
        w = o(9283),
        x = o(1835);
      const I = new l.Es();
      function L(e) {
        const { summonOverlayKey: t } = e,
          { ids: o, anchors: r } = d.useMemo(() => {
            const e = "DashboardPanel_" + t,
              o = {
                strTopCenterAnchorID: e + "_TopCenter",
                strCenterLeftAnchorID: e + "_CenterLeft",
                strCenterRightAnchorID: e + "_CenterRight",
                strBottomCenterAnchorID: e + "_BottomCenter",
                strBottomRightAnchorID: e + "_BottomRight",
              };
            return {
              ids: o,
              anchors: d.createElement(
                d.Fragment,
                null,
                d.createElement(n.Ci, {
                  id: o.strTopCenterAnchorID,
                  location: n.Oi.TopCenter,
                }),
                d.createElement(n.Ci, {
                  id: o.strCenterLeftAnchorID,
                  location: n.Oi.CenterLeft,
                }),
                d.createElement(n.Ci, {
                  id: o.strCenterRightAnchorID,
                  location: n.Oi.CenterRight,
                }),
                d.createElement(n.Ci, {
                  id: o.strBottomCenterAnchorID,
                  location: n.Oi.BottomCenter,
                }),
                d.createElement(n.Ci, {
                  id: o.strBottomRightAnchorID,
                  location: n.Oi.BottomRight,
                }),
              ),
            };
          }, [t]);
        return (
          d.useEffect(
            () => (
              I.set(t, o),
              () => {
                I.get(t) === o && I.delete(t);
              }
            ),
            [t, o],
          ),
          t ? r : null
        );
      }
      const R = (0, a.PA)(function (e) {
          return d.createElement(
            V,
            Object.assign({}, e, { VRGamepadUI: x.SW.isVRGamepadUI }),
          );
        }),
        V = (e) => {
          var t, o, r;
          const i = e.VRGamepadUI,
            s = d.useRef(null),
            l = d.useRef(null),
            a = null === (t = e.scrollable) || void 0 === t || t,
            h =
              null !== (o = e.foregroundReflectMultiplier) && void 0 !== o
                ? o
                : 1,
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
              n.Zk,
              {
                visibility: e.visible ? n.Fi.Visible : n.Fi.Hidden,
                debug_name: "homepanelbackground",
                curvature_origin_id: m,
                origin: n.Oi.BottomCenter,
                interactive: !1,
                scrollable: !1,
                meters_per_pixel: i ? void 0 : 2 * g.iZ,
                width: i ? 2.67 : void 0,
                reflect: i ? 0 : 0.01,
                sampler: n._h.SingleTap,
              },
              d.createElement(L, { summonOverlayKey: e.summonOverlayKey }),
              d.createElement(
                p.u0,
                { ref: s },
                d.createElement("div", {
                  className: (0, y.FH)(
                    "DashboardPanelBackground",
                    e.additionalClassNames,
                  ),
                  style: e.additionalStyle,
                }),
              ),
            ),
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
                  reflect: i ? void 0 : 0.2 * h,
                  width: i ? 2.67 : void 0,
                },
                d.createElement(
                  p.vw,
                  { ref: l },
                  d.createElement(
                    u.W,
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
      class H extends d.Component {
        constructor(e) {
          super(e), (this.state = { time: new Date() });
        }
        componentDidMount() {
          let e = 60 - (new Date().getSeconds() % 60) + 0.01;
          this.m_clockUpdateTimeout = window.setTimeout(
            this.updateTime,
            1e3 * e,
          );
        }
        componentWillUnmount() {
          clearTimeout(this.m_clockUpdateTimeout);
        }
        updateTime() {
          this.setState({ time: new Date() }),
            (this.m_clockUpdateTimeout = window.setTimeout(
              this.updateTime,
              6e4,
            ));
        }
        render() {
          const e = C.A0.GetLocale();
          let t = this.state.time.toLocaleTimeString(e, {
              hour: "numeric",
              minute: "2-digit",
            }),
            o = null;
          const r = t.toLowerCase(),
            i = Math.max(r.lastIndexOf("am"), r.lastIndexOf("pm"));
          return (
            i >= 0 && ((o = t.substring(i)), (t = t.substring(0, i - 1))),
            d.createElement(
              "div",
              { className: "ClockContainer" },
              d.createElement(
                "div",
                { className: "Clock" },
                t,
                " ",
                d.createElement("span", { className: "Suffix" }, o),
              ),
            )
          );
        }
      }
      function N(e) {
        return d.createElement(
          u.$,
          { className: "PowerMenuButton", onClick: e.onClick },
          d.createElement("div", { className: "HoverGradient" }),
          d.createElement("div", { className: "ClickGradient" }),
          d.createElement("span", null, e.label),
          e.lineBelow && d.createElement("div", { className: "LineBelow" }),
        );
      }
      (0, i.Cg)([s.o], H.prototype, "updateTime", null);
      let z = class extends d.Component {
        constructor(e) {
          super(e), (0, l.Gn)(this);
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
              _.l,
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
      (0, i.Cg)([l.EW], z.prototype, "isShowingTooltip", null),
        (0, i.Cg)([l.XI.bound], z.prototype, "show", null),
        (0, i.Cg)([l.XI.bound], z.prototype, "hide", null),
        (z = (0, i.Cg)([a.PA], z));
      class T extends d.Component {
        static ShouldInvertThumbnail(e) {
          if (!e) return !1;
          if (((e = e.toLowerCase()), !T.s_mapShouldInvertThumbnail.has(e))) {
            let t = !1;
            e.endsWith(".svg") && (t = !0),
              e.startsWith("data:") &&
                T.k_rsThumbnailHashesToInvert.indexOf(E().hash(e)) >= 0 &&
                (t = !0),
              T.s_mapShouldInvertThumbnail.set(e, t);
          }
          return T.s_mapShouldInvertThumbnail.get(e);
        }
        render() {
          var e;
          const t = null !== (e = this.props.shadow) && void 0 !== e && e,
            o = T.ShouldInvertThumbnail(this.props.src);
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
      var k, B;
      (T.k_rsThumbnailHashesToInvert = [
        "5cbd0ebd6459cdaf75fdcafc5051f4e0",
        "c77452e60fc29227b33773ff6e74f8a1",
        "44b62220b39ba717fbfc65e3b4225491",
        "86bbab56235b55f6e5e7d288342931d7",
      ]),
        (T.s_mapShouldInvertThumbnail = new Map()),
        (function (e) {
          (e[(e.Large = 0)] = "Large"),
            (e[(e.Small = 1)] = "Small"),
            (e[(e.App = 2)] = "App");
        })(k || (k = {})),
        (function (e) {
          (e[(e.Center = 0)] = "Center"), (e[(e.Fill = 1)] = "Fill");
        })(B || (B = {}));
      const D = (e) =>
        d.createElement(
          "div",
          { className: (0, y.FH)("ControlBarGroup", k[e.style]) },
          e.children,
        );
      let P = class extends d.Component {
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
              className: (0, y.FH)(
                "ControlBarButton",
                this.props.additionalClassNames,
                B[
                  null !== (e = this.props.imageStyle) && void 0 !== e
                    ? e
                    : B.Center
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
              releaseSoundEffect: m.j.ControlBarButtonClick,
            },
            this.props.centerPanelAnchorID &&
              d.createElement(
                "div",
                { style: { position: "absolute", left: "50%", top: "50%" } },
                d.createElement(_.l, {
                  allowableParentSelectors: [".DashboardMain"],
                  panelAnchorID: this.props.centerPanelAnchorID,
                }),
              ),
            d.createElement(z, {
              text: this.props.label,
              ref: this.m_refTooltip,
            }),
            d.createElement(T, { src: this.props.imageUrl }),
          );
        }
      };
      (0, i.Cg)([s.o], P.prototype, "onMouseEnter", null),
        (0, i.Cg)([s.o], P.prototype, "onMouseLeave", null),
        (P = (0, i.Cg)([a.PA], P));
      const O = (e) =>
        d.createElement(
          D,
          { style: e.style },
          d.createElement(P, Object.assign({}, e)),
        );
      class F extends d.Component {
        constructor(e) {
          super(e),
            (this.m_BatteryStateChangedCallbackHandle = null),
            (this.m_DeviceRoleChangedCallbackHandle = null),
            (this.m_DeviceEventCallbackHandle = null),
            (this.deviceIndex = n.ne),
            (this.batteryLevelStable = null),
            (this.devicePowerUsage = null),
            (this.state = { batteryIconPath: null });
        }
        componentDidMount() {
          (this.m_BatteryStateChangedCallbackHandle =
            null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.RegisterForBatteryStateChangedEvents(
                  this.onBatteryStateChanged,
                )),
            (this.m_DeviceRoleChangedCallbackHandle =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.RegisterForDeviceRoleChangedEvents(
                    this.onDeviceRoleChanged,
                  )),
            (this.m_DeviceEventCallbackHandle =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.RegisterForDeviceEvents(this.onDeviceEvent)),
            this.update();
        }
        componentWillUnmount() {
          var e, t, o;
          null === (e = this.m_BatteryStateChangedCallbackHandle) ||
            void 0 === e ||
            e.unregister(),
            null === (t = this.m_DeviceRoleChangedCallbackHandle) ||
              void 0 === t ||
              t.unregister(),
            null === (o = this.m_DeviceEventCallbackHandle) ||
              void 0 === o ||
              o.unregister();
        }
        updateControllerStatus() {
          if (!VRHTML) return;
          let e = !1,
            t = !1,
            o = n.ne;
          if (
            (void 0 !== this.props.role
              ? (o = VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                  this.props.role,
                ))
              : void 0 !== this.props.deviceIndex &&
                (o = this.props.deviceIndex),
            o != this.deviceIndex &&
              ((this.batteryLevelStable = null),
              (this.devicePowerUsage = null),
              (this.deviceIndex = o)),
            o != n.ne)
          ) {
            if (
              ((e = VRHTML.VRProperties.GetBoolProperty(
                o,
                n.fD.DeviceProvidesBatteryStatus_Bool,
              )),
              e)
            ) {
              const e = VRHTML.VRProperties.GetFloatProperty(
                o,
                n.fD.DeviceBatteryPercentage_Float,
              );
              (t = VRHTML.VRProperties.GetBoolProperty(
                o,
                n.fD.DeviceIsCharging_Bool,
              )),
                null == this.batteryLevelStable || 0 == this.batteryLevelStable
                  ? (this.batteryLevelStable = e)
                  : ((this.batteryLevelStable = Math.min(
                      this.batteryLevelStable,
                      e + F.kBatteryLevelHysteresis,
                      1,
                    )),
                    (this.batteryLevelStable = Math.max(
                      this.batteryLevelStable,
                      e - F.kBatteryLevelHysteresis,
                      0,
                    )));
            }
            this.devicePowerUsage = VRHTML.VRProperties.GetFloatProperty(
              o,
              n.fD.DevicePowerUsage_Float,
            );
          }
          let r = S.C.GetBatteryIcon(
            e,
            t,
            this.batteryLevelStable,
            this.props.style,
          );
          r != this.state.batteryIconPath &&
            this.setState({ batteryIconPath: r });
        }
        update() {
          window.setTimeout(this.updateControllerStatus, 0);
        }
        onBatteryStateChanged(e) {
          this.update();
        }
        onDeviceRoleChanged() {
          this.update();
        }
        onDeviceEvent(e, t, o) {
          (e != n.ku.Activated && e != n.ku.Deactivated) || this.update();
        }
        render() {
          return d.createElement(
            "div",
            { className: "BatteryStatus" },
            this.devicePowerUsage &&
              d.createElement(
                "div",
                { className: "Label" },
                " ",
                Math.round(10 * this.devicePowerUsage) / 10,
                " W ",
              ),
            d.createElement("img", { src: this.state.batteryIconPath }),
          );
        }
      }
      (F.kBatteryLevelHysteresis = 0.02),
        (0, i.Cg)([s.o], F.prototype, "updateControllerStatus", null),
        (0, i.Cg)([s.o], F.prototype, "onBatteryStateChanged", null),
        (0, i.Cg)([s.o], F.prototype, "onDeviceRoleChanged", null),
        (0, i.Cg)([s.o], F.prototype, "onDeviceEvent", null);
      d.Component;
      const U = (e) =>
        d.createElement(
          "div",
          { className: "Title" },
          e.iconUrl && d.createElement(T, { src: e.iconUrl, shadow: !0 }),
          d.createElement("span", { className: "NoWrapText" }, e.name),
        );
      class A extends d.Component {
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
              _.b,
              {
                allowableParentSelectors: [".DashboardMain"],
                onPortalDidMount: this.onPortalDidMount,
              },
              d.createElement(
                n.N,
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
      (0, i.Cg)([s.o], A.prototype, "onResizeObserved", null),
        (0, i.Cg)([s.o], A.prototype, "updateBackgroundSize", null),
        (0, i.Cg)([s.o], A.prototype, "onPortalDidMount", null);
      let G = class extends d.Component {
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
            A,
            Object.assign({}, this.props, {
              position: e,
              ref: this.m_refTray,
              additionalClassNames: "VolumeTray",
            }),
            d.createElement(
              "div",
              { className: "Section" },
              d.createElement(
                Z,
                {
                  onClick: b.f.Instance.toggleMicrophoneMute,
                  title: b.f.Instance.microphoneMuted
                    ? (0, C.we)("#UnmuteMicrophone")
                    : (0, C.we)("#MuteMicrophone"),
                },
                d.createElement("img", {
                  className: "BlackToWhite",
                  src: b.f.Instance.microphoneMuted
                    ? "/dashboard/images/icons/svr_mic_mute.svg"
                    : "/dashboard/images/icons/svr_mic_active.svg",
                }),
              ),
              d.createElement(W, {
                title: (0, C.we)("#MicrophoneVolume"),
                value: b.f.Instance.microphoneVolume,
                onChange: b.f.Instance.setMicrophoneVolume,
                onMouseEnter: this.onSliderMouseEnter,
                onMouseLeave: this.onSliderMouseLeave,
                onFinalChange: this.onSliderFinalChange,
                renderValue: (e) => Math.round(100 * e) + "%",
                valueStyleVariant: h.Te.OnHandle,
                additionalClassName: (0, y.FH)([
                  "Muted",
                  b.f.Instance.microphoneMuted,
                ]),
                interactionEndSoundEffect: m.j.VolumePreview,
              }),
            ),
            this.showAudioMirrorControls &&
              d.createElement(
                "div",
                { className: "Section" },
                d.createElement(
                  Z,
                  {
                    onClick: b.f.Instance.toggleMirrorMute,
                    enabled: this.enableAudioMirrorControls,
                    title: b.f.Instance.mirrorMuted
                      ? (0, C.we)("#UnmuteAudioMirror")
                      : (0, C.we)("#MuteAudioMirror"),
                  },
                  d.createElement("img", {
                    className: "BlackToWhite",
                    src: b.f.Instance.mirrorMuted
                      ? "/dashboard/images/icons/svr_volume_mirror_mute.svg"
                      : "/dashboard/images/icons/svr_volume_mirror.svg",
                  }),
                ),
                d.createElement(W, {
                  title: (0, C.we)("#AudioMirrorVolume"),
                  value: b.f.Instance.mirrorVolume,
                  enabled: this.enableAudioMirrorControls,
                  onChange: b.f.Instance.setMirrorVolume,
                  onMouseEnter: this.onSliderMouseEnter,
                  onMouseLeave: this.onSliderMouseLeave,
                  onFinalChange: this.onSliderFinalChange,
                  renderValue: (e) => Math.round(100 * e) + "%",
                  valueStyleVariant: h.Te.OnHandle,
                  additionalClassName: (0, y.FH)([
                    "Muted",
                    b.f.Instance.mirrorMuted,
                  ]),
                  interactionEndSoundEffect: m.j.VolumePreview,
                }),
              ),
            d.createElement(
              "div",
              { className: "Section" },
              d.createElement(
                Z,
                {
                  onClick: b.f.Instance.toggleMute,
                  title: b.f.Instance.muted
                    ? (0, C.we)("#Unmute_Headset")
                    : (0, C.we)("#Mute_Headset"),
                },
                d.createElement("img", {
                  className: "BlackToWhite",
                  src: b.f.Instance.muted
                    ? "/dashboard/images/icons/svr_volume_mute.svg"
                    : "/dashboard/images/icons/svr_volume.svg",
                }),
              ),
              d.createElement(W, {
                title: (0, C.we)("#HeadsetVolume"),
                sliderRef: this.m_refSlider,
                value: b.f.Instance.volume,
                onChange: b.f.Instance.setVolume,
                onMouseEnter: this.onSliderMouseEnter,
                onMouseLeave: this.onSliderMouseLeave,
                onFinalChange: this.onSliderFinalChange,
                renderValue: (e) => Math.round(100 * e) + "%",
                valueStyleVariant: h.Te.OnHandle,
                additionalClassName: (0, y.FH)(["Muted", b.f.Instance.muted]),
                interactionEndSoundEffect: m.j.VolumePreview,
              }),
            ),
          );
        }
      };
      (0, i.Cg)([s.o], G.prototype, "onSliderMouseEnter", null),
        (0, i.Cg)([s.o], G.prototype, "onSliderMouseLeave", null),
        (0, i.Cg)([s.o], G.prototype, "onSliderFinalChange", null),
        (0, i.Cg)([l.EW], G.prototype, "showAudioMirrorControls", null),
        (0, i.Cg)([l.EW], G.prototype, "enableAudioMirrorControls", null),
        (G = (0, i.Cg)([a.PA], G));
      let W = class extends d.Component {
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
              d.createElement(z, {
                text: this.props.title,
                shown: this.state.bHover || this.state.bSliding,
              }),
            d.createElement(
              h.Ap,
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
      (0, i.Cg)([s.o], W.prototype, "onMouseEnter", null),
        (0, i.Cg)([s.o], W.prototype, "onMouseLeave", null),
        (0, i.Cg)([s.o], W.prototype, "onInteractionStart", null),
        (0, i.Cg)([s.o], W.prototype, "onInteractionEnd", null),
        (W = (0, i.Cg)([a.PA], W));
      let Z = class extends d.Component {
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
              className: (0, y.FH)(
                "ButtonControl",
                "Round",
                this.props.className,
              ),
              onMouseEnter: this.onMouseEnter,
              onMouseLeave: this.onMouseLeave,
            }),
            this.props.title &&
              d.createElement(z, {
                text: this.props.title,
                ref: this.m_refTooltip,
              }),
            this.props.children,
          );
        }
      };
      (0, i.Cg)([s.o], Z.prototype, "onMouseEnter", null),
        (0, i.Cg)([s.o], Z.prototype, "onMouseLeave", null),
        (Z = (0, i.Cg)([a.PA], Z));
      let j = (r = class extends d.Component {
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
          return d.createElement(P, {
            imageUrl: b.f.Instance.muted
              ? "/dashboard/images/icons/svr_volume_mute.svg"
              : "/dashboard/images/icons/svr_volume.svg",
            active: this.props.active,
            label: this.props.active ? null : (0, C.we)("#Volume"),
            onMouseDown: this.onButtonMouseDown,
            onMouseEnter: this.props.onMouseEnter,
            onMouseLeave: this.props.onMouseLeave,
          });
        }
      });
      (j.MIN_DRAG_THRESHOLD = 35),
        (0, i.Cg)([s.o], j.prototype, "onButtonMouseDown", null),
        (0, i.Cg)([s.o], j.prototype, "onWindowMouseMove", null),
        (0, i.Cg)([s.o], j.prototype, "onWindowMouseUp", null),
        (j = r = (0, i.Cg)([a.PA], j));
      const q = (e) => {
        var t;
        const o = d.useRef(void 0);
        return d.createElement(
          u.$,
          {
            className: (0, y.FH)(
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
            d.createElement(z, {
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
      };
      function K(e) {
        var t, o;
        const r = (0, y.Nc)(),
          i =
            null !== (t = null == r ? void 0 : r.visible) &&
            void 0 !== t &&
            t &&
            e.overlayKey == r.overlayKey,
          s = d.useRef(!1),
          l =
            null === (o = e.showTooltip) || void 0 === o || o
              ? i
                ? (0, C.we)("#HideKeyboardTooltip")
                : (0, C.we)("#ShowKeyboardTooltip")
              : void 0;
        return d.createElement(
          q,
          Object.assign(
            {
              iconUrl: "/dashboard/images/icons/svr_keyboard.svg",
              title: l,
              additionalClassNames: (0, y.FH)(
                "Keyboard",
                e.additionalClassNames,
              ),
              onMouseDown: () => {
                s.current = i;
              },
              onClick: () => {
                if (s.current) VRHTML.VROverlay.HideKeyboard();
                else {
                  let t = n.QR.Minimal | n.QR.HideDoneKey | n.QR.ShowArrowKeys;
                  e.modal && (t |= n.QR.Modal),
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
                }
              },
              active: i,
            },
            e,
          ),
        );
      }
    },
    2156: (e, t, o) => {
      "use strict";
      o.d(t, { O: () => c });
      var r = o(6090),
        i = o(6540),
        n = o(4015),
        s = o(1835),
        l = o(3606),
        a = o(3246);
      function d(e) {
        const { children: t, invertParentPanelPitch: o, pitch: n } = e;
        return o || 0 != n
          ? i.createElement(
              r.dL,
              {
                invert_parent_panel_pitch: null != o && o,
                curvature_pitch: null != n ? n : 0,
              },
              t,
            )
          : i.createElement(i.Fragment, null, t);
      }
      function u(e) {
        let { children: t, offsetPixels: o, offsetMeters: n } = e;
        (o = null != o ? o : { x: 0, y: 0, z: 0 }),
          (n = null != n ? n : { x: 0, y: 0, z: 0 });
        const l = (0, r.CU)(
          n,
          (0, r.tx)(o, s.SW.m_fVRGamepadUI_MetersPerPixel),
        );
        return 0 != l.x || 0 != l.y || 0 != l.z
          ? i.createElement(r.dL, { translation: l }, t)
          : i.createElement(i.Fragment, null, t);
      }
      function p(e) {
        const { children: t, rotation: o } = e;
        return null != o && (0 != o.x || 0 != o.y || 0 != o.z)
          ? i.createElement(r.dL, { rotation: o }, t)
          : i.createElement(i.Fragment, null, t);
      }
      function c(e) {
        var t,
          o,
          n,
          a,
          c,
          h,
          m,
          v,
          g,
          C,
          _,
          y,
          b,
          f,
          M,
          E,
          S,
          w,
          x,
          I,
          L,
          R,
          V,
          H,
          N,
          z,
          T,
          k,
          B,
          D,
          P,
          O,
          F,
          U,
          A,
          G,
          W;
        const { popupRequest: Z, reparent: j } = e,
          q = null == j || j,
          K = {
            x:
              null !==
                (o =
                  null === (t = Z.origin_on_parent) || void 0 === t
                    ? void 0
                    : t.x) && void 0 !== o
                ? o
                : 0,
            y:
              null !==
                (a =
                  null === (n = Z.origin_on_parent) || void 0 === n
                    ? void 0
                    : n.y) && void 0 !== a
                ? a
                : 0,
          },
          J = {
            x:
              null !==
                (h =
                  null === (c = Z.origin_on_popup) || void 0 === c
                    ? void 0
                    : c.x) && void 0 !== h
                ? h
                : 0,
            y:
              null !==
                (v =
                  null === (m = Z.origin_on_popup) || void 0 === m
                    ? void 0
                    : m.y) && void 0 !== v
                ? v
                : 0,
          },
          Y = {
            u:
              null !==
                (C =
                  null === (g = Z.clip_rect) || void 0 === g
                    ? void 0
                    : g.u_min) && void 0 !== C
                ? C
                : 0,
            v:
              null !==
                (y =
                  null === (_ = Z.clip_rect) || void 0 === _
                    ? void 0
                    : _.v_min) && void 0 !== y
                ? y
                : 0,
          },
          X = {
            u:
              null !==
                (f =
                  null === (b = Z.clip_rect) || void 0 === b
                    ? void 0
                    : b.u_max) && void 0 !== f
                ? f
                : 1,
            v:
              null !==
                (E =
                  null === (M = Z.clip_rect) || void 0 === M
                    ? void 0
                    : M.v_max) && void 0 !== E
                ? E
                : 1,
          },
          Q = {
            x:
              null !==
                (w =
                  null === (S = Z.offset) || void 0 === S
                    ? void 0
                    : S.x_pixels) && void 0 !== w
                ? w
                : 0,
            y:
              null !==
                (I =
                  null === (x = Z.offset) || void 0 === x
                    ? void 0
                    : x.y_pixels) && void 0 !== I
                ? I
                : 0,
            z:
              null !==
                (R =
                  null === (L = Z.offset) || void 0 === L
                    ? void 0
                    : L.z_pixels) && void 0 !== R
                ? R
                : 0,
          },
          $ = {
            x:
              null !==
                (H =
                  null === (V = Z.offset) || void 0 === V
                    ? void 0
                    : V.x_meters) && void 0 !== H
                ? H
                : 0,
            y:
              null !==
                (z =
                  null === (N = Z.offset) || void 0 === N
                    ? void 0
                    : N.y_meters) && void 0 !== z
                ? z
                : 0,
            z:
              null !==
                (k =
                  null === (T = Z.offset) || void 0 === T
                    ? void 0
                    : T.z_meters) && void 0 !== k
                ? k
                : 0,
          },
          ee = {
            x:
              null !==
                (D =
                  null === (B = Z.rotation) || void 0 === B
                    ? void 0
                    : B.pitch_degrees) && void 0 !== D
                ? D
                : 0,
            y:
              null !==
                (O =
                  null === (P = Z.rotation) || void 0 === P
                    ? void 0
                    : P.yaw_degrees) && void 0 !== O
                ? O
                : 0,
          },
          te = null === (F = Z.inherit_parent_pitch) || void 0 === F || F,
          oe = null === (U = Z.inherit_parent_curvature) || void 0 === U || U,
          re = null === (A = Z.interactive) || void 0 === A || A,
          ie = null !== (G = Z.requires_laser) && void 0 !== G && G,
          ne =
            1 == (null !== (W = Z.sort_order) && void 0 !== W ? W : 0)
              ? 101
              : null,
          se = (function (e) {
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
            return i == l.Vx && n >= 0 ? -0.5 : 0;
          })(Z);
        i.useLayoutEffect(
          () => r.O5.Current().forceLayoutUpdate(),
          [Y.u, Y.v, X.u, X.v],
        );
        const le = i.createElement(
          d,
          { invertParentPanelPitch: !te },
          i.createElement(
            u,
            { offsetPixels: Q, offsetMeters: $ },
            i.createElement(
              p,
              { rotation: ee },
              i.createElement(r.Zk, {
                debug_name: `VRGamepadUI-PooledPopup-${Z.dashboard_popup_request_id}`,
                interactive: re,
                requires_laser: ie,
                curvature: oe ? "inherit-from-parent-panel" : void 0,
                overlay_key: Z.popup_overlay_key,
                origin: J,
                meters_per_pixel: s.SW.m_fVRGamepadUI_MetersPerPixel,
                reflect: 0.03,
                sort_depth_bias: se,
                uv_min: Y,
                uv_max: X,
                sort_order: ne,
              }),
            ),
          ),
        );
        return Z.parent_device_path
          ? i.createElement(r.dL, { parent_path: Z.parent_device_path }, le)
          : q
            ? i.createElement(
                r.b$,
                {
                  parent_overlay_key: Z.parent_overlay_key,
                  key: Z.dashboard_popup_request_id,
                },
                i.createElement(
                  r.Ci,
                  { key: Z.dashboard_popup_request_id, location: K },
                  le,
                ),
              )
            : i.createElement(
                r.Ci,
                { key: Z.dashboard_popup_request_id, location: K },
                le,
              );
      }
      (0, n.PA)((e) => {
        const t = a.r.GetActivePooledPopups();
        return i.createElement(
          i.Fragment,
          null,
          t.map((e) =>
            i.createElement(c, {
              popupRequest: e,
              key: e.dashboard_popup_request_id,
            }),
          ),
        );
      });
    },
    9471: (e, t, o) => {
      "use strict";
      o.d(t, {
        Pq: () => l,
        Xj: () => a,
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
              d: "M93.8,50v28.1c0,8.6-7,15.6-15.6,15.6H21.9c-8.6,0-15.6-7-15.6-15.6V21.9c0-8.6,7-15.6,15.6-15.6H50c1.7,0,3.1,1.4,3.1,3.1\r\n\t\t\t\ts-1.4,3.1-3.1,3.1H21.9c-5.2,0-9.4,4.2-9.4,9.4v56.3c0,5.2,4.2,9.4,9.4,9.4h56.3c5.2,0,9.4-4.2,9.4-9.4V50c0-1.7,1.4-3.1,3.1-3.1\r\n\t\t\t\tS93.8,48.3,93.8,50z M68.8,12.5h14.3L47.8,47.8c-1.2,1.2-1.2,3.2,0,4.4c0,0,0,0,0,0c1.2,1.2,3.2,1.2,4.4,0c0,0,0,0,0,0l35.3-35.3\r\n\t\t\t\tv14.3c0,1.7,1.4,3.1,3.1,3.1l0,0c1.7,0,3.1-1.4,3.1-3.1V9.4c0-0.8-0.3-1.6-0.9-2.2c-0.6-0.6-1.4-0.9-2.2-0.9H68.8\r\n\t\t\t\tc-1.7,0-3.1,1.4-3.1,3.1S67,12.5,68.8,12.5z",
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
      function l(e) {
        const { none: t, partial: o, right: n, left: s } = e,
          l = (0, r.Tt)(e, ["none", "partial", "right", "left"]);
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
                l,
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
                  l,
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
                    l,
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
                    l,
                  ),
                  i.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M32.62 9.14C32.62 9.14 28.5 5 18 5C7.5 5 3.38 9.14 3.38 9.14C3.38 9.14 0 20.56 0 25.2C0 28.68 5 31 5 31L11 25H25L31 31C31 31 36 28.68 36 25.2C36 20.56 32.62 9.14 32.62 9.14ZM15 17H12V20H9V17H6V14H9V11H12V14H15V17ZM21.5 20C21.0055 20 20.5222 19.8534 20.1111 19.5787C19.7 19.304 19.3795 18.9135 19.1903 18.4567C19.0011 17.9999 18.9516 17.4972 19.048 17.0123C19.1445 16.5273 19.3826 16.0819 19.7322 15.7322C20.0819 15.3826 20.5273 15.1445 21.0123 15.048C21.4972 14.9516 21.9999 15.0011 22.4567 15.1903C22.9135 15.3795 23.304 15.7 23.5787 16.1111C23.8534 16.5222 24 17.0055 24 17.5C24 17.8283 23.9353 18.1534 23.8097 18.4567C23.6841 18.76 23.4999 19.0356 23.2678 19.2678C23.0356 19.4999 22.76 19.6841 22.4567 19.8097C22.1534 19.9353 21.8283 20 21.5 20ZM27.5 16C27.0055 16 26.5222 15.8534 26.1111 15.5787C25.7 15.304 25.3795 14.9135 25.1903 14.4567C25.0011 13.9999 24.9516 13.4972 25.048 13.0123C25.1445 12.5273 25.3826 12.0819 25.7322 11.7322C26.0819 11.3826 26.5273 11.1445 27.0123 11.048C27.4972 10.9516 27.9999 11.0011 28.4567 11.1903C28.9135 11.3795 29.304 11.7 29.5787 12.1111C29.8534 12.5222 30 13.0055 30 13.5C30 14.163 29.7366 14.7989 29.2678 15.2678C28.7989 15.7366 28.163 16 27.5 16Z",
                  }),
                );
      }
      function a(e) {
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
      o.d(t, { p: () => a });
      var r = o(1635),
        i = o(6090),
        n = o(4074),
        s = o(7221);
      const l = new (class {
        constructor() {
          (this.m_SteamVR_Provider = new n.tC(this, s.f5)),
            (this.m_Steam_Client = new n.$k(this)),
            (this.m_Steam_ClientMethods = new s.oT(this.m_Steam_Client)),
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
          if (!this.m_mailbox.connected) return n.Y7.SendFailure;
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
            this.m_mailbox.SendMessage("web_steam_mailbox", {
              type: "vrgamepadui_message",
              header: o,
              payload: r,
            });
          } catch (e) {
            return n.Y7.SendFailure;
          }
          return n.Y7.Success;
        }
        IsConnected() {
          return this.m_mailbox.connected;
        }
      })();
      window.VRGamepadUIMessages = l;
      const a = l;
    },
  },
]); //# sourceMappingURL=file:///c:/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/chunk~2e670652e.js.map
